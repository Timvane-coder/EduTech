// Enhanced Circle Intersection Mathematical Workbook - Comprehensive Implementation
import * as math from 'mathjs';

export class EnhancedCircleIntersectionMathematicalWorkbook {
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
        this.initializeCircleIntersectionSolvers();
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
    }

    initializeCircleLessons() {
        this.lessons = {
            circle_basics: {
                title: "Circle Fundamentals",
                concepts: [
                    "Circle equation: (x - h)² + (y - k)² = r²",
                    "Center at (h, k), radius r",
                    "All points equidistant from center",
                    "General form: x² + y² + Dx + Ey + F = 0"
                ],
                theory: "A circle is the set of all points in a plane that are equidistant from a fixed point (the center). The distance is the radius.",
                keyFormulas: {
                    "Standard Form": "(x - h)² + (y - k)² = r²",
                    "General Form": "x² + y² + Dx + Ey + F = 0",
                    "Center": "h = -D/2, k = -E/2",
                    "Radius": "r = √(h² + k² - F)"
                },
                applications: [
                    "Wireless signal coverage",
                    "Circular motion physics",
                    "Geographic range calculations",
                    "Engineering design"
                ]
            },

            circle_intersection_basics: {
                title: "Circle Intersection Fundamentals",
                concepts: [
                    "Two circles can intersect in 0, 1, or 2 points",
                    "Distance between centers determines intersection type",
                    "d < |r₁ - r₂|: no intersection (one inside other)",
                    "d = |r₁ - r₂|: internal tangent (1 point)",
                    "d = r₁ + r₂: external tangent (1 point)",
                    "d > r₁ + r₂: no intersection (too far apart)",
                    "|r₁ - r₂| < d < r₁ + r₂: two intersection points"
                ],
                theory: "Circle intersection is determined by comparing the distance between centers with the sum and difference of radii.",
                keyFormulas: {
                    "Distance between centers": "d = √[(x₂ - x₁)² + (y₂ - y₁)²]",
                    "No intersection (separate)": "d > r₁ + r₂",
                    "External tangent": "d = r₁ + r₂",
                    "Two intersections": "|r₁ - r₂| < d < r₁ + r₂",
                    "Internal tangent": "d = |r₁ - r₂|",
                    "No intersection (contained)": "d < |r₁ - r₂|"
                },
                applications: [
                    "GPS triangulation",
                    "Radar coverage overlap",
                    "Collision detection",
                    "Network coverage analysis"
                ]
            },

            finding_intersection_points: {
                title: "Finding Intersection Points",
                concepts: [
                    "Solve system of two circle equations",
                    "Subtract equations to eliminate quadratic terms",
                    "Results in linear equation (radical axis)",
                    "Substitute back to find intersection points",
                    "Geometric method using triangle properties"
                ],
                theory: "To find exact intersection points, we solve the system of circle equations algebraically or use geometric properties.",
                keyFormulas: {
                    "Algebraic method": "Subtract circle equations, solve for x or y",
                    "Radical axis": "Line containing intersection points",
                    "Geometric method": "Use distance formulas and triangulation"
                },
                solvingSteps: [
                    "Verify circles intersect (check distance condition)",
                    "Set up system of circle equations",
                    "Subtract to get linear equation (radical axis)",
                    "Solve for one variable",
                    "Substitute back into circle equation",
                    "Solve quadratic for other variable",
                    "Verify both points satisfy both circles"
                ],
                applications: [
                    "Finding optimal meeting points",
                    "Intersection of broadcast ranges",
                    "Geometric constructions",
                    "Computer graphics"
                ]
            },

            geometric_properties: {
                title: "Geometric Properties of Circle Intersections",
                concepts: [
                    "Radical axis is perpendicular to line of centers",
                    "Intersection points are symmetric about line of centers",
                    "Power of a point theorem applies",
                    "Chord length formula",
                    "Angle properties at intersection"
                ],
                theory: "Circle intersections have rich geometric properties that can simplify calculations and provide insights.",
                keyFormulas: {
                    "Chord length": "2r₁sin(θ/2) where θ is central angle",
                    "Distance from center to chord": "√(r² - (L/2)²)",
                    "Power of point": "PA · PB = PC · PD for secants from P"
                },
                applications: [
                    "Geometric proofs",
                    "Construction problems",
                    "Optimization",
                    "Design constraints"
                ]
            },

            special_cases: {
                title: "Special Cases and Edge Conditions",
                concepts: [
                    "Concentric circles (same center)",
                    "Circles with same radius",
                    "Tangent circles (internal/external)",
                    "One circle inside another",
                    "Circles far apart",
                    "Degenerate cases (point circles, zero radius)"
                ],
                theory: "Special cases require careful handling and often have simplified solutions or no solutions.",
                specialCases: {
                    "Concentric": "No intersection unless same radius (infinite intersections)",
                    "Same radius, same center": "Identical circles (infinite points)",
                    "Tangent": "Exactly one intersection point",
                    "No intersection": "d > r₁ + r₂ or d < |r₁ - r₂|"
                },
                applications: [
                    "Error handling in algorithms",
                    "Boundary conditions in simulations",
                    "Special geometric configurations"
                ]
            },

            distance_formulas: {
                title: "Distance Calculations",
                concepts: [
                    "Euclidean distance between points",
                    "Distance from point to line",
                    "Distance from center to chord",
                    "Minimum distance between circles"
                ],
                keyFormulas: {
                    "Point to point": "d = √[(x₂-x₁)² + (y₂-y₁)²]",
                    "Minimum distance (non-intersecting)": "d - r₁ - r₂ (if d > r₁ + r₂)",
                    "Gap between circles": "max(0, d - r₁ - r₂)"
                },
                applications: [
                    "Proximity detection",
                    "Clearance calculations",
                    "Path planning"
                ]
            },

            area_calculations: {
                title: "Area of Intersection",
                concepts: [
                    "Lens-shaped intersection region",
                    "Sum of two circular segments",
                    "Uses inverse trig functions",
                    "Complex for general case"
                ],
                theory: "The area of intersection of two circles is the sum of two circular segments.",
                keyFormulas: {
                    "Circular segment area": "A = r²·arccos((d²+r²-R²)/(2dr)) - (d²+r²-R²)/(4)·√(4d²r²-(d²+r²-R²)²)",
                    "Total intersection area": "Sum of two segments"
                },
                applications: [
                    "Coverage overlap analysis",
                    "Resource allocation",
                    "Statistical overlap"
                ]
            },

            three_circle_intersection: {
                title: "Three Circle Intersections",
                concepts: [
                    "Trilateration (GPS, surveying)",
                    "Common point of three circles",
                    "May have 0, 1, or no unique solution",
                    "System of three equations, two unknowns (overdetermined)"
                ],
                theory: "Three circle intersection is used in positioning systems. Exact solution exists only if all three circles pass through a common point.",
                keyFormulas: {
                    "Trilateration": "Solve system of 3 circle equations",
                    "Least squares": "Approximate solution when no exact intersection"
                },
                applications: [
                    "GPS positioning",
                    "Surveying",
                    "Localization",
                    "Navigation"
                ]
            },

            parametric_methods: {
                title: "Parametric and Analytical Methods",
                concepts: [
                    "Parametric circle representation: x = h + r·cos(t), y = k + r·sin(t)",
                    "Solving intersection parametrically",
                    "Numerical methods for complex cases",
                    "Vector formulations"
                ],
                theory: "Parametric methods provide alternative approaches, especially useful for numerical solutions and animation.",
                applications: [
                    "Computer graphics",
                    "Animation",
                    "Numerical simulation"
                ]
            },

            word_problems: {
                title: "Circle Intersection Word Problems",
                concepts: [
                    "Coverage problems (radio, wifi, radar)",
                    "Meeting point problems",
                    "Distance and positioning",
                    "Geometric construction"
                ],
                problemTypes: {
                    "Coverage": "Do two broadcast ranges overlap?",
                    "Positioning": "Find location given distances to known points",
                    "Geometric": "Construct figure with circle intersections",
                    "Optimization": "Maximize/minimize overlap or separation"
                },
                solutionStrategy: [
                    "Identify circles (centers and radii)",
                    "Calculate distance between centers",
                    "Determine intersection type",
                    "Find intersection points if needed",
                    "Answer question in context"
                ],
                applications: [
                    "Network planning",
                    "Navigation",
                    "Architecture",
                    "Urban planning"
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
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥'
        };
    }

    initializeCircleIntersectionSolvers() {
        this.circleIntersectionTypes = {
            two_circle_intersection: {
                patterns: [
                    /circle.*circle/i,
                    /intersection/i,
                    /two.*circle/i
                ],
                solver: this.solveTwoCircleIntersection.bind(this),
                name: 'Two Circle Intersection',
                category: 'two_circle',
                description: 'Finds intersection points of two circles'
            },

            intersection_check: {
                patterns: [
                    /do.*circles.*intersect/i,
                    /check.*intersection/i,
                    /overlap/i
                ],
                solver: this.checkCircleIntersection.bind(this),
                name: 'Circle Intersection Check',
                category: 'intersection_check',
                description: 'Determines if two circles intersect'
            },

            tangent_circles: {
                patterns: [
                    /tangent/i,
                    /touch/i,
                    /one.*point/i
                ],
                solver: this.solveTangentCircles.bind(this),
                name: 'Tangent Circles',
                category: 'tangent',
                description: 'Analyzes tangent circle configurations'
            },

            intersection_area: {
                patterns: [
                    /area.*intersection/i,
                    /overlap.*area/i,
                    /common.*area/i
                ],
                solver: this.calculateIntersectionArea.bind(this),
                name: 'Intersection Area',
                category: 'area',
                description: 'Calculates area of circle intersection'
            },

            three_circle_intersection: {
                patterns: [
                    /three.*circle/i,
                    /trilateration/i,
                    /gps/i
                ],
                solver: this.solveThreeCircleIntersection.bind(this),
                name: 'Three Circle Intersection',
                category: 'three_circle',
                description: 'Finds common point of three circles'
            },

            chord_length: {
                patterns: [
                    /chord/i,
                    /common.*chord/i,
                    /radical.*axis/i
                ],
                solver: this.calculateChordLength.bind(this),
                name: 'Common Chord Length',
                category: 'chord',
                description: 'Calculates length of common chord'
            },

            distance_between_circles: {
                patterns: [
                    /distance.*between.*circles/i,
                    /gap/i,
                    /separation/i
                ],
                solver: this.calculateCircleDistance.bind(this),
                name: 'Distance Between Circles',
                category: 'distance',
                description: 'Calculates minimum distance between circles'
            },

            word_problem_coverage: {
                patterns: [
                    /coverage/i,
                    /broadcast/i,
                    /signal/i,
                    /range/i
                ],
                solver: this.solveCoverageProblem.bind(this),
                name: 'Coverage Problem',
                category: 'word_problem',
                description: 'Solves coverage/range overlap problems'
            },

            word_problem_positioning: {
                patterns: [
                    /position/i,
                    /locate/i,
                    /find.*location/i
                ],
                solver: this.solvePositioningProblem.bind(this),
                name: 'Positioning Problem',
                category: 'word_problem',
                description: 'Solves positioning/trilateration problems'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            two_circle: {
                'Calculate distance between centers': [
                    'Using wrong distance formula',
                    'Arithmetic errors in distance calculation',
                    'Forgetting to take square root',
                    'Sign errors in coordinate subtraction'
                ],
                'Check intersection condition': [
                    'Wrong inequality for intersection type',
                    'Confusing r₁ + r₂ with |r₁ - r₂|',
                    'Not considering all cases',
                    'Floating point comparison errors'
                ],
                'Solve system of equations': [
                    'Errors when subtracting circle equations',
                    'Forgetting to expand squared terms',
                    'Sign errors in linear equation',
                    'Not simplifying before substitution'
                ],
                'Substitute and solve': [
                    'Substitution errors',
                    'Quadratic formula mistakes',
                    'Forgetting ± in solution',
                    'Not checking both solutions'
                ]
            },
            intersection_check: {
                'Compare d with r₁ + r₂': [
                    'Using wrong comparison operator',
                    'Not handling floating point precision',
                    'Forgetting absolute value for |r₁ - r₂|'
                ]
            },
            area: {
                'Calculate intersection area': [
                    'Using wrong formula',
                    'Inverse trig function errors',
                    'Not handling special cases',
                    'Units inconsistency'
                ]
            },
            three_circle: {
                'Solve overdetermined system': [
                    'Not recognizing no exact solution',
                    'Errors in least squares approach',
                    'Matrix calculation mistakes',
                    'Not checking solution validity'
                ]
            }
        };

        this.errorPrevention = {
            distance_calculation: {
                reminder: 'Always use √[(x₂-x₁)² + (y₂-y₁)²] for distance',
                method: 'Write out each step: difference, square, sum, square root'
            },
            intersection_conditions: {
                reminder: 'Memorize: d > r₁+r₂ (no intersection), d = r₁+r₂ (tangent), |r₁-r₂| < d < r₁+r₂ (two points)',
                method: 'Draw a diagram showing the three regions'
            },
            equation_solving: {
                reminder: 'When subtracting circles, quadratic terms cancel',
                method: 'Expand both equations fully before subtracting'
            },
            verification: {
                reminder: 'Always substitute solutions back into both circle equations',
                method: 'Check that distance from each point to each center equals the radius'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Geometric meaning and visual understanding',
                language: 'intuitive, spatial reasoning'
            },
            procedural: {
                focus: 'Step-by-step calculation process',
                language: 'algorithmic, sequential instructions'
            },
            visual: {
                focus: 'Diagrams, graphs, and spatial relationships',
                language: 'visual descriptions and coordinate geometry'
            },
            algebraic: {
                focus: 'Equations, formulas, and symbolic manipulation',
                language: 'precise mathematical notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple geometric terms',
                detail: 'essential steps only',
                examples: 'simple numbers and integer coordinates'
            },
            intermediate: {
                vocabulary: 'standard mathematical terminology',
                detail: 'main steps with brief explanations',
                examples: 'mix of simple and complex coordinates'
            },
            ELI5: {
                vocabulary: 'everyday language with simple analogies',
                detail: 'every step explained with real-world comparisons',
                examples: 'concrete analogies like overlapping hoops',
                analogies: true,
                visualization: 'simple diagrams and drawings'
            },
            detailed: {
                vocabulary: 'comprehensive mathematical vocabulary',
                detail: 'thorough explanations with theoretical background',
                examples: 'general cases and edge conditions'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to technical',
                detail: 'guided discovery with questions and hints',
                examples: 'carefully sequenced difficulty progression'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            wifi_coverage: {
                scenario: "Two WiFi routers with circular coverage areas",
                equation: "Check if coverage areas overlap",
                examples: [
                    "Router at (0,0) with 50m range, router at (60,0) with 40m range. Do they overlap?",
                    "Where do the coverage areas intersect?"
                ],
                context: "WiFi planning requires understanding coverage overlap for seamless connectivity"
            },
            radar_detection: {
                scenario: "Two radar stations with circular detection ranges",
                equation: "Find common detection area",
                examples: [
                    "Station A at (0,0) range 100km, Station B at (120,0) range 80km. Overlap area?",
                    "Aircraft in overlap region detected by both"
                ],
                context: "Military and air traffic control use overlapping radar for redundancy"
            },
            gps_positioning: {
                scenario: "GPS triangulation using satellite signals",
                equation: "Find position from distances to known points",
                examples: [
                    "Distance 100km from satellite A, 120km from B, 90km from C. Find position.",
                    "Smartphone GPS uses 4+ satellites for 3D positioning"
                ],
                context: "GPS determines position by solving circle/sphere intersection"
            },
            cell_tower_coverage: {
                scenario: "Cell tower coverage areas",
                equation: "Optimize tower placement for coverage",
                examples: [
                    "Two towers 10km apart, each 8km range. Coverage gap?",
                    "Where to place third tower for full coverage?"
                ],
                context: "Cellular network planning minimizes coverage gaps and overlap"
            },
            earthquake_epicenter: {
                scenario: "Locating earthquake epicenter from seismograph data",
                equation: "Trilateration from multiple stations",
                examples: [
                    "Three stations detect quake at different times. Find epicenter.",
                    "Distance from each station determines circle, epicenter at intersection"
                ],
                context: "Seismology uses wave arrival times to locate earthquakes"
            },
            sprinkler_coverage: {
                scenario: "Lawn sprinkler coverage areas",
                equation: "Ensure complete lawn coverage with overlapping circles",
                examples: [
                    "Sprinklers at (0,0) and (15,0), each radius 10ft. Coverage gap?",
                    "How far apart can sprinklers be for complete coverage?"
                ],
                context: "Irrigation design requires optimal sprinkler spacing"
            },
            radio_broadcast: {
                scenario: "Radio station broadcast ranges",
                equation: "Determine listening area overlap",
                examples: [
                    "Two stations 200km apart, ranges 150km each. Overlap region?",
                    "Area receiving signals from both stations"
                ],
                context: "Broadcast planning manages interference and coverage"
            },
            searchlight_overlap: {
                scenario: "Searchlight or spotlight coverage",
                equation: "Find illuminated overlap region",
                examples: [
                    "Two lights 30m apart, each illuminates 20m radius. Overlap area?",
                    "Security lighting design for coverage"
                ],
                context: "Lighting design ensures adequate coverage without waste"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            two_circle: {
                skills: [
                    'Circle equation understanding',
                    'Distance formula',
                    'Solving systems of equations',
                    'Quadratic formula',
                    'Coordinate geometry'
                ],
                priorKnowledge: [
                    'Standard circle equation (x-h)² + (y-k)² = r²',
                    'Distance between two points',
                    'Equation solving techniques',
                    'Substitution method'
                ],
                checkQuestions: [
                    "What is the standard form of a circle equation?",
                    "Find distance between (0,0) and (3,4)",
                    "Solve: x² + y² = 25 and y = x + 1",
                    "What does (x-2)² + (y-3)² = 16 represent?"
                ]
            },
            intersection_check: {
                skills: [
                    'Distance formula',
                    'Inequality understanding',
                    'Circle properties',
                    'Logical reasoning'
                ],
                priorKnowledge: [
                    'Relationship between d, r₁, and r₂',
                    'Geometric interpretation of conditions'
                ],
                checkQuestions: [
                    "What does it mean if d = r₁ + r₂?",
                    "When do circles not intersect?",
                    "Calculate √[(5-2)² + (7-3)²]"
                ]
            },
            area: {
                skills: [
                    'Circle intersection geometry',
                    'Inverse trigonometric functions',
                    'Circular segment area',
                    'Advanced algebra'
                ],
                priorKnowledge: [
                    'Area of circular segment',
                    'Arc length and central angle',
                    'Trigonometric functions'
                ],
                checkQuestions: [
                    "What is a circular segment?",
                    "Find arccos(0.5)",
                    "Area of circle with radius 5"
                ]
            },
            three_circle: {
                skills: [
                    'Systems of equations (3 equations)',
                    'Matrix operations',
                    'Least squares method',
                    'Numerical methods'
                ],
                priorKnowledge: [
                    'Overdetermined systems',
                    'Approximate solutions',
                    'Error minimization'
                ],
                checkQuestions: [
                    "What is an overdetermined system?",
                    "Solve two circle intersections first",
                    "Understand why exact solution may not exist"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            geometric_diagram: {
                description: "Visual representation of circles on coordinate plane",
                analogy: "Like overlapping hoops or rings",
                visualization: "Draw both circles with centers and radii labeled",
                suitableFor: ['all_types'],
                explanation: "Seeing the circles helps understand spatial relationships"
            },
            distance_comparison: {
                description: "Compare center distance with radius sum/difference",
                analogy: "Like checking if two people holding ropes can reach each other",
                visualization: "Number line showing d, r₁+r₂, |r₁-r₂|",
                suitableFor: ['intersection_check', 'two_circle'],
                explanation: "Visual comparison of key distances determines intersection type"
            },
            algebraic_system: {
                description: "System of two circle equations",
                analogy: "Like solving a puzzle with two constraints",
                visualization: "Write both equations, show subtraction step",
                suitableFor: ['two_circle', 'three_circle'],
                explanation: "Algebraic approach finds exact coordinates"
            },
            venn_diagram_analogy: {
                description: "Like Venn diagram showing set overlap",
                analogy: "Similar to overlapping sets in logic",
                visualization: "Two circles showing overlap region",
                suitableFor: ['intersection_check', 'area'],
                explanation: "Overlap region represents points in both circles"
            },
            triangle_method: {
                description: "Centers and intersection point form triangle",
                analogy: "Like a triangle with known side lengths",
                visualization: "Draw triangle with centers and intersection point",
                suitableFor: ['two_circle', 'chord'],
                explanation: "Geometric properties of triangle help find intersection"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Circles: (x-0)² + (y-0)² = 25 and (x-6)² + (y-0)² = 25. Do they intersect?",
                    solution: "Yes, two points",
                    steps: [
                        "Center₁ = (0,0), r₁ = 5",
                        "Center₂ = (6,0), r₂ = 5",
                        "d = 6",
                        "r₁ + r₂ = 10, |r₁ - r₂| = 0",
                        "0 < 6 < 10, so two intersection points"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Circles at (0,0) radius 3 and (10,0) radius 4. Intersect?",
                    solution: "No, too far apart",
                    steps: [
                        "d = 10",
                        "r₁ + r₂ = 7",
                        "10 > 7, so no intersection"
                    ],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Find intersection of x² + y² = 25 and (x-4)² + y² = 9",
                    solution: "Two points: (2.8, ±4.8) approximately",
                    steps: [
                        "Expand: x² - 8x + 16 + y² = 9",
                        "Subtract: 8x = 32, x = 4",
                        "Wait, recalculate: x² + y² = 25 minus x² - 8x + 16 + y² = 9",
                        "Gives: 8x - 16 = 16, x = 4... check this",
                        "Substitute x = 4: 16 + y² = 25, y = ±3"
                    ],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Three circles for trilateration: C₁(0,0,r=5), C₂(6,0,r=5), C₃(3,5,r=5). Find intersection.",
                    solution: "Approximate (3, 2.5)",
                    steps: [
                        "Set up three equations",
                        "Solve C₁ ∩ C₂ gives line x = 3",
                        "Substitute into C₃",
                        "Find y coordinate",
                        "Check approximate solution"
                    ],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                intersection_check: [
                    { problem: "r₁=5, r₂=3, d=9. Intersect?", solution: "No (too far)" },
                    { problem: "r₁=5, r₂=3, d=8. Intersect?", solution: "Yes (external tangent)" },
                    { problem: "r₁=5, r₂=3, d=2. Intersect?", solution: "Yes (internal tangent)" }
                ],
                two_circle: [
                    { problem: "x² + y² = 25, (x-6)² + y² = 25", solution: "Points at (3, ±4)" },
                    { problem: "x² + y² = 16, (x-5)² + y² = 9", solution: "Points at (2.56, ±3.07)" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            distance_formula: {
                misconception: "d = |x₂ - x₁| + |y₂ - y₁| (Manhattan distance)",
                reality: "d = √[(x₂-x₁)² + (y₂-y₁)²] (Euclidean distance)",
                correctiveExample: "For (0,0) to (3,4): NOT 7, but 5",
                commonIn: ['all_types']
            },
            intersection_condition: {
                misconception: "Circles intersect if d < r₁ + r₂",
                reality: "Need |r₁ - r₂| < d < r₁ + r₂ for two points",
                correctiveExample: "r₁=10, r₂=3, d=2: d < r₁+r₂ but one inside other, no intersection",
                commonIn: ['intersection_check']
            },
            equation_subtraction: {
                misconception: "Can't subtract circle equations",
                reality: "Subtracting eliminates quadratic terms, gives linear equation (radical axis)",
                correctiveExample: "x² + y² = 25 minus (x-6)² + y² = 25 gives 12x = 36",
                commonIn: ['two_circle']
            },
            tangent_confusion: {
                misconception: "Tangent means no intersection",
                reality: "Tangent means exactly one intersection point",
                correctiveExample: "d = r₁ + r₂ or d = |r₁ - r₂| means one point of tangency",
                commonIn: ['tangent', 'intersection_check']
            },
            coordinate_confusion: {
                misconception: "Circle center is always at origin",
                reality: "Center at (h, k) in equation (x-h)² + (y-k)² = r²",
                correctiveExample: "(x-3)² + (y-2)² = 16 has center (3,2), not (0,0)",
                commonIn: ['all_types']
            },
            radius_vs_diameter: {
                misconception: "Using diameter instead of radius in formulas",
                reality: "Circle equation uses radius, not diameter",
                correctiveExample: "Circle with diameter 10 has r=5, equation uses 25 not 100",
                commonIn: ['all_types']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            overlapping_hoops: {
                analogy: "Two overlapping hula hoops on the ground",
                explanation: "Imagine two hula hoops on the floor. Where they overlap is like the intersection of circles.",
                suitableFor: ['intersection_check', 'two_circle'],
                ELI5: "Think of two hula hoops. Sometimes they don't touch, sometimes they touch at one spot, sometimes they cross at two spots!"
            },
            rope_reaching: {
                analogy: "Two people holding ropes trying to reach each other",
                explanation: "If two people stand apart and each holds a rope, they can touch if their ropes are long enough combined. That's like r₁ + r₂ ≥ d.",
                suitableFor: ['intersection_check'],
                ELI5: "If you and a friend each hold a rope and stand apart, can your rope tips touch? Depends on rope lengths and how far apart you are!"
            },
            ripples_in_pond: {
                analogy: "Two stones thrown in a pond creating ripples",
                explanation: "When two stones hit water, ripples expand in circles. Where ripples meet is like circle intersection.",
                suitableFor: ['two_circle', 'intersection_check'],
                ELI5: "Drop two pebbles in water. The ripples make circles that might cross each other!"
            },
            spotlight_overlap: {
                analogy: "Two spotlights shining on a floor",
                explanation: "Where the light circles overlap, it's brighter. That's the intersection region.",
                suitableFor: ['area', 'intersection_check'],
                ELI5: "Two flashlights on the ceiling make circles of light. Where they overlap is extra bright!"
            },
            treasure_hunt: {
                analogy: "Finding treasure with distance clues",
                explanation: "If treasure is 5 steps from tree and 4 steps from rock, you draw circles and find where they cross.",
                suitableFor: ['two_circle', 'three_circle'],
                ELI5: "The treasure is somewhere that's 5 steps from the big tree AND 4 steps from the rock. Draw circles and look where they cross!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            two_circle: {
                level1: "What information do you have about each circle?",
                level2: "Find the center and radius of each circle first",
                level3: "Calculate the distance between the centers",
                level4: "Check if |r₁-r₂| < d < r₁+r₂, then solve the system of equations"
            },
            intersection_check: {
                level1: "What determines if two circles intersect?",
                level2: "Compare the distance between centers with the radii",
                level3: "Calculate d = √[(x₂-x₁)² + (y₂-y₁)²] and compare with r₁+r₂ and |r₁-r₂|",
                level4: "If d > r₁+r₂: no intersection. If d = r₁+r₂: external tangent. If |r₁-r₂| < d < r₁+r₂: two points"
            },
            area: {
                level1: "What shape is formed by the intersection?",
                level2: "The intersection is made of two circular segments",
                level3: "Use the formula for circular segment area involving arccos",
                level4: "Calculate both segments and add them together"
            },
            three_circle: {
                level1: "How is this different from two circles?",
                level2: "You have three equations but only two unknowns (x, y)",
                level3: "Solve two pairs of circles to get candidate points",
                level4: "Check which point(s) satisfy all three circle equations"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Do circles (x-0)²+(y-0)²=16 and (x-10)²+(y-0)²=9 intersect?",
                    answer: "No",
                    assesses: "intersection_check",
                    difficulty: "basic"
                },
                {
                    question: "Find distance between centers (0,0) and (6,8)",
                    answer: 10,
                    assesses: "distance_formula",
                    difficulty: "basic"
                },
                {
                    question: "Where do x²+y²=25 and (x-6)²+y²=25 intersect?",
                    answer: "(3, ±4)",
                    assesses: "two_circle",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "If d = 7, r₁ = 5, r₂ = 3, do the circles intersect?",
                    options: ["No intersection", "One point (tangent)", "Two points", "Infinite points"],
                    correct: "Two points",
                    explanation: "Since |5-3| = 2 < 7 < 8 = 5+3, there are two intersection points"
                },
                {
                    question: "What is the first step to find intersection points of two circles?",
                    options: [
                        "Find the distance between centers",
                        "Subtract one equation from the other",
                        "Use the quadratic formula",
                        "Draw a diagram"
                    ],
                    correct: "Find the distance between centers",
                    explanation: "First verify circles actually intersect before solving for points"
                }
            ],
            summative: [
                {
                    question: "Find intersection points of x²+y²=25 and (x-4)²+y²=9",
                    answer: "(4, ±3)",
                    showsWork: true,
                    rubric: {
                        check_intersection: 1,
                        subtract_equations: 2,
                        solve_for_x: 1,
                        solve_for_y: 1,
                        verify: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "r₁=5, r₂=3, d=10. Intersect?",
                    "r₁=4, r₂=4, d=8. How many intersection points?",
                    "Centers (0,0) and (5,0), both radius 3. Intersect?"
                ],
                medium: [
                    "Find intersection of x²+y²=25 and (x-6)²+y²=16",
                    "Two circles tangent externally, r₁=5, r₂=3. Find d.",
                    "Calculate area of intersection: r₁=5, r₂=5, d=6"
                ],
                hard: [
                    "Three circles: (0,0,r=5), (8,0,r=5), (4,6,r=5). Find common point.",
                    "Find all circles passing through (0,0) and (6,0) with radius 5",
                    "Prove radical axis is perpendicular to line of centers"
                ]
            },
            byObjective: {
                canCheckIntersection: [
                    "r₁=6, r₂=4, d=12. Type?",
                    "r₁=5, r₂=5, d=10. Type?",
                    "r₁=10, r₂=3, d=6. Type?"
                ],
                canFindIntersectionPoints: [
                    "x²+y²=25, (x-6)²+y²=25",
                    "x²+y²=16, (x-5)²+y²=9",
                    "(x-1)²+(y-1)²=25, (x-5)²+(y-4)²=25"
                ],
                canSolveWordProblems: [
                    "WiFi routers 100m apart, each 60m range. Overlap?",
                    "Two radars 150km apart, ranges 100km each. Common area?",
                    "GPS: 50km from A(0,0), 50km from B(80,0), 50km from C(40,60). Position?"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "check_first": "Always verify intersection exists before finding points",
                "use_distance": "Calculate d between centers first",
                "algebraic_method": "Subtract equations to eliminate quadratic terms",
                "geometric_method": "Use triangle properties and perpendicular bisector",
                "numerical_method": "Use iteration for complex cases or three+ circles"
            },
            whenToUseWhat: {
                algebraic: "For exact intersection points of two circles",
                geometric: "For understanding and visualization",
                numerical: "For three+ circles or complex configurations",
                distance_check: "Always first step - don't waste time if no intersection"
            },
            methodSelection: {
                factorsToConsider: [
                    "Number of circles (2, 3, or more)",
                    "Need exact points vs just yes/no",
                    "Complexity of circle equations",
                    "Required precision",
                    "Available tools (calculator, computer)"
                ],
                generalApproach: [
                    "1. Identify circles (centers and radii)",
                    "2. Calculate distance(s) between centers",
                    "3. Check intersection conditions",
                    "4. If intersecting, choose solution method",
                    "5. Solve and verify",
                    "6. Interpret in context if word problem"
                ]
            },
            optimizationTips: {
                "Check first": "Don't solve if circles don't intersect",
                "Use symmetry": "Simplify by rotating/translating coordinate system",
                "Geometric insight": "Draw diagram to understand problem",
                "Verify numerically": "Check your answer makes sense"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Intersection Check Sprint",
                    timeLimit: 60,
                    problems: [
                        "r₁=5, r₂=3, d=9",
                        "r₁=4, r₂=4, d=6",
                        "r₁=10, r₂=2, d=7",
                        "r₁=5, r₂=3, d=8",
                        "r₁=6, r₂=6, d=12"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Circles",
                    problem: "Two circles intersect at (3,4) and (3,-4). One centered at origin. Find the other.",
                    solution: "Center at (6,0) with appropriate radius"
                },
                {
                    name: "Optimal Placement",
                    problem: "Place a circle of radius 5 so it's tangent to both (0,0,r=10) and (20,0,r=10)",
                    solution: "Multiple solutions exist"
                }
            ],
            applications: [
                {
                    scenario: "Cell Tower Placement",
                    problem: "Two towers at (0,0) and (10,0), each range 8km. Is there a coverage gap? How big?",
                    solution: "Gap exists, calculate minimum uncovered distance"
                },
                {
                    scenario: "GPS Positioning",
                    problem: "Satellites at (0,0), (100,0), (50,80). All distance 60km to receiver. Find receiver position.",
                    solution: "Use trilateration"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "x² + y² = 25",
                        "(x-6)² + y² = 25",
                        "Subtract: -6x + 36 = 0",  // ERROR: forgot to expand (x-6)²
                        "x = 6",
                        "Substitute: 36 + y² = 25",  // ERROR: this gives negative y²
                        "No solution?"
                    ],
                    correctAnswer: "Should expand to x² - 12x + 36 + y² = 25, then subtract",
                    errorType: "Didn't expand squared term before subtracting"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveCircleIntersectionProblem(config) {
        const { circles, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseCircleIntersectionProblem(circles, scenario, parameters, problemType, context);
            this.currentSolution = this.solveCircleIntersectionProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateCircleIntersectionSteps(this.currentProblem, this.currentSolution);
            this.generateCircleIntersectionGraphData();
            this.generateCircleIntersectionWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                intersectionType: this.currentSolution?.intersectionType,
                intersectionPoints: this.currentSolution?.intersectionPoints
            };

        } catch (error) {
            throw new Error(`Failed to solve circle intersection problem: ${error.message}`);
        }
    }

    parseCircleIntersectionProblem(circles, scenario = '', parameters = {}, problemType = null, context = {}) {
        if (problemType && this.circleIntersectionTypes[problemType]) {
            return {
                originalInput: scenario || `${problemType} problem`,
                type: problemType,
                circles: circles || [],
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect problem type
        for (const [type, config] of Object.entries(this.circleIntersectionTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(scenario)) {
                    return {
                        originalInput: scenario,
                        type: type,
                        circles: circles || [],
                        scenario: scenario,
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default to two circle intersection if circles provided
        if (circles && circles.length === 2) {
            return {
                originalInput: 'Two circle intersection',
                type: 'two_circle_intersection',
                circles: circles,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize circle intersection problem type`);
    }

    solveCircleIntersectionProblem_Internal(problem) {
        const solver = this.circleIntersectionTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // CIRCLE INTERSECTION SOLVERS

    solveTwoCircleIntersection(problem) {
        const { circles, parameters } = problem;
        
        // Extract circle information
        let circle1, circle2;
        
        if (circles && circles.length === 2) {
            circle1 = circles[0];
            circle2 = circles[1];
        } else if (parameters) {
            circle1 = {
                center: { x: parameters.x1 || 0, y: parameters.y1 || 0 },
                radius: parameters.r1 || 0
            };
            circle2 = {
                center: { x: parameters.x2 || 0, y: parameters.y2 || 0 },
                radius: parameters.r2 || 0
            };
        } else {
            throw new Error("Circle information not provided");
        }

        const x1 = circle1.center.x;
        const y1 = circle1.center.y;
        const r1 = circle1.radius;
        const x2 = circle2.center.x;
        const y2 = circle2.center.y;
        const r2 = circle2.radius;

        // Calculate distance between centers
        const d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

        // Determine intersection type
        const rSum = r1 + r2;
        const rDiff = Math.abs(r1 - r2);

        let intersectionType;
        let intersectionPoints = [];

        if (d > rSum + 1e-10) {
            intersectionType = 'No intersection (circles too far apart)';
        } else if (Math.abs(d - rSum) < 1e-10) {
            intersectionType = 'External tangent (one intersection point)';
            // Calculate tangent point
            const ratio = r1 / rSum;
            const px = x1 + ratio * (x2 - x1);
            const py = y1 + ratio * (y2 - y1);
            intersectionPoints = [{ x: px, y: py }];
        } else if (d < rDiff - 1e-10) {
            intersectionType = 'No intersection (one circle inside other)';
        } else if (Math.abs(d - rDiff) < 1e-10) {
            intersectionType = 'Internal tangent (one intersection point)';
            // Calculate tangent point
            const ratio = r1 / rDiff;
            const px = x1 + ratio * (x2 - x1);
            const py = y1 + ratio * (y2 - y1);
            intersectionPoints = [{ x: px, y: py }];
        } else if (d < 1e-10 && Math.abs(r1 - r2) < 1e-10) {
            intersectionType = 'Identical circles (infinite intersection points)';
        } else {
            intersectionType = 'Two intersection points';
            
            // Calculate intersection points using algebraic method
            // Using formulas derived from circle equations
            const a = (r1 ** 2 - r2 ** 2 + d ** 2) / (2 * d);
            const h = Math.sqrt(r1 ** 2 - a ** 2);
            
            // Point on line between centers
            const px = x1 + a * (x2 - x1) / d;
            const py = y1 + a * (y2 - y1) / d;
            
            // Perpendicular offset
            const offsetX = h * (y2 - y1) / d;
            const offsetY = h * (x2 - x1) / d;
            
            intersectionPoints = [
                { x: px + offsetX, y: py - offsetY },
                { x: px - offsetX, y: py + offsetY }
            ];
        }

        return {
            type: 'Two Circle Intersection',
            circle1: { center: { x: x1, y: y1 }, radius: r1 },
            circle2: { center: { x: x2, y: y2 }, radius: r2 },
            distanceBetweenCenters: d,
            radiusSum: rSum,
            radiusDifference: rDiff,
            intersectionType: intersectionType,
            intersectionPoints: intersectionPoints,
            category: 'two_circle',
            verification: this.verifyCircleIntersection(intersectionPoints, circle1, circle2)
        };
    }

    checkCircleIntersection(problem) {
        const { circles, parameters } = problem;
        
        let circle1, circle2;
        
        if (circles && circles.length === 2) {
            circle1 = circles[0];
            circle2 = circles[1];
        } else if (parameters) {
            circle1 = {
                center: { x: parameters.x1 || 0, y: parameters.y1 || 0 },
                radius: parameters.r1 || 0
            };
            circle2 = {
                center: { x: parameters.x2 || 0, y: parameters.y2 || 0 },
                radius: parameters.r2 || 0
            };
        }

        const d = Math.sqrt(
            (circle2.center.x - circle1.center.x) ** 2 +
            (circle2.center.y - circle1.center.y) ** 2
        );

        const rSum = circle1.radius + circle2.radius;
        const rDiff = Math.abs(circle1.radius - circle2.radius);

        let result;
        if (d > rSum) {
            result = 'No intersection - circles too far apart';
        } else if (d === rSum) {
            result = 'External tangent - one point of contact';
        } else if (d === rDiff) {
            result = 'Internal tangent - one point of contact';
        } else if (d < rDiff) {
            result = 'No intersection - one circle inside other';
        } else {
            result = 'Two intersection points';
        }

        return {
            type: 'Circle Intersection Check',
            distanceBetweenCenters: d,
            radiusSum: rSum,
            radiusDifference: rDiff,
            intersectionType: result,
            category: 'intersection_check'
        };
    }

    solveTangentCircles(problem) {
        const { circles, parameters } = problem;
        
        return {
            type: 'Tangent Circles',
            approach: 'Check if d = r₁ + r₂ (external) or d = |r₁ - r₂| (internal)',
            category: 'tangent'
        };
    }

    calculateIntersectionArea(problem) {
        const { circles, parameters } = problem;
        
        return {
            type: 'Intersection Area',
            approach: 'Calculate sum of two circular segments',
            formula: 'Area = Segment₁ + Segment₂',
            note: 'Requires inverse trigonometric functions',
            category: 'area'
        };
    }

    solveThreeCircleIntersection(problem) {
        const { circles } = problem;
        
        if (!circles || circles.length !== 3) {
            throw new Error("Three circles required for trilateration");
        }

        return {
            type: 'Three Circle Intersection (Trilateration)',
            approach: 'Solve overdetermined system - may need least squares',
            note: 'Exact solution only if all three circles intersect at common point',
            category: 'three_circle'
        };
    }

    calculateChordLength(problem) {
        return {
            type: 'Common Chord Length',
            approach: 'Use perpendicular distance from center to chord',
            formula: 'chord = 2√(r² - d²) where d is perpendicular distance',
            category: 'chord'
        };
    }

    calculateCircleDistance(problem) {
        const { circles, parameters } = problem;
        
        return {
            type: 'Distance Between Circles',
            approach: 'Minimum distance = d - r₁ - r₂ if non-intersecting',
            category: 'distance'
        };
    }

    solveCoverageProblem(problem) {
        return {
            type: 'Coverage Problem',
            approach: 'Model as circle intersection, check overlap',
            applications: 'WiFi, radar, broadcasting',
            category: 'word_problem'
        };
    }

    solvePositioningProblem(problem) {
        return {
            type: 'Positioning Problem',
            approach: 'Trilateration using three or more distance measurements',
            applications: 'GPS, surveying, navigation',
            category: 'word_problem'
        };
    }

    // VERIFICATION

    verifyCircleIntersection(points, circle1, circle2) {
        if (!points || points.length === 0) {
            return { isValid: true, note: 'No points to verify' };
        }

        const verifications = points.map(point => {
            const dist1 = Math.sqrt(
                (point.x - circle1.center.x) ** 2 +
                (point.y - circle1.center.y) ** 2
            );
            const dist2 = Math.sqrt(
                (point.x - circle2.center.x) ** 2 +
                (point.y - circle2.center.y) ** 2
            );

            const error1 = Math.abs(dist1 - circle1.radius);
            const error2 = Math.abs(dist2 - circle2.radius);

            return {
                point: point,
                distanceToCenter1: dist1,
                distanceToCenter2: dist2,
                error1: error1,
                error2: error2,
                isValid: error1 < 1e-6 && error2 < 1e-6
            };
        });

        return {
            verifications: verifications,
            allValid: verifications.every(v => v.isValid)
        };
    }

    // STEP GENERATION

    generateCircleIntersectionSteps(problem, solution) {
        let baseSteps = this.generateBaseCircleIntersectionSteps(problem, solution);

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

    generateBaseCircleIntersectionSteps(problem, solution) {
        const category = this.circleIntersectionTypes[problem.type]?.category;

        switch(category) {
            case 'two_circle':
                return this.generateTwoCircleSteps(problem, solution);
            case 'intersection_check':
                return this.generateIntersectionCheckSteps(problem, solution);
            case 'three_circle':
                return this.generateThreeCircleSteps(problem, solution);
            default:
                return this.generateGenericCircleSteps(problem, solution);
        }
    }

    generateTwoCircleSteps(problem, solution) {
        const steps = [];

        // Step 1: Identify circles
        steps.push({
            stepNumber: 1,
            step: 'Identify circle information',
            description: 'Extract center coordinates and radii from circle equations',
            circle1: `Center (${solution.circle1.center.x}, ${solution.circle1.center.y}), radius ${solution.circle1.radius}`,
            circle2: `Center (${solution.circle2.center.x}, ${solution.circle2.center.y}), radius ${solution.circle2.radius}`,
            reasoning: 'We need center and radius of each circle for all calculations',
            goalStatement: 'Identify the fundamental properties of both circles'
        });

        // Step 2: Calculate distance between centers
        steps.push({
            stepNumber: 2,
            step: 'Calculate distance between centers',
            description: 'Use distance formula to find d',
            formula: 'd = √[(x₂-x₁)² + (y₂-y₁)²]',
            calculation: `d = √[(${solution.circle2.center.x}-${solution.circle1.center.x})² + (${solution.circle2.center.y}-${solution.circle1.center.y})²]`,
            result: `d = ${solution.distanceBetweenCenters.toFixed(4)}`,
            reasoning: 'Distance between centers determines if and how circles intersect',
            algebraicRule: 'Euclidean Distance Formula'
        });

        // Step 3: Check intersection condition
        steps.push({
            stepNumber: 3,
            step: 'Check intersection condition',
            description: 'Compare d with r₁ + r₂ and |r₁ - r₂|',
            radiusSum: `r₁ + r₂ = ${solution.radiusSum.toFixed(4)}`,
            radiusDifference: `|r₁ - r₂| = ${solution.radiusDifference.toFixed(4)}`,
            comparison: `${solution.radiusDifference.toFixed(4)} < ${solution.distanceBetweenCenters.toFixed(4)} < ${solution.radiusSum.toFixed(4)}?`,
            conclusion: solution.intersectionType,
            reasoning: 'These comparisons tell us the intersection type'
        });

        // Step 4: Find intersection points (if applicable)
        if (solution.intersectionPoints && solution.intersectionPoints.length > 0) {
            steps.push({
                stepNumber: 4,
                step: 'Calculate intersection points',
                description: 'Use algebraic method to find exact coordinates',
                method: 'Subtract circle equations to get linear equation, then solve system',
                points: solution.intersectionPoints.map(p => `(${p.x.toFixed(4)}, ${p.y.toFixed(4)})`),
                reasoning: 'Algebraic solution gives exact intersection coordinates'
            });

            // Step 5: Verify
            steps.push({
                stepNumber: 5,
                step: 'Verify solution',
                description: 'Check that points satisfy both circle equations',
                verification: solution.verification,
                finalAnswer: true
            });
        } else {
            steps.push({
                stepNumber: 4,
                step: 'Conclusion',
                description: 'No intersection points to calculate',
                result: solution.intersectionType,
                finalAnswer: true
            });
        }

        return steps;
    }

    generateIntersectionCheckSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Calculate distance between centers',
            description: 'Find d using distance formula',
            result: `d = ${solution.distanceBetweenCenters?.toFixed(4) || 'N/A'}`,
            reasoning: 'This is the key value for comparison'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate radius sum and difference',
            description: 'Find r₁ + r₂ and |r₁ - r₂|',
            radiusSum: `${solution.radiusSum?.toFixed(4) || 'N/A'}`,
            radiusDifference: `${solution.radiusDifference?.toFixed(4) || 'N/A'}`,
            reasoning: 'These values define the boundaries for intersection'
        });

        steps.push({
            stepNumber: 3,
            step: 'Compare and conclude',
            description: 'Determine intersection type',
            result: solution.intersectionType,
            finalAnswer: true
        });

        return steps;
    }

    generateThreeCircleSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Three circle intersection',
            description: 'Solve using trilateration or least squares method',
            approach: solution.approach,
            note: solution.note
        }];
    }

    generateGenericCircleSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Circle intersection problem',
            description: 'Apply appropriate circle intersection technique',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATIONS (similar structure to linear workbook)

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
        const explanations = {
            'Identify circle information': 'Each circle is defined by its center point and radius. The center is the fixed point, and the radius is the constant distance from center to any point on the circle.',
            'Calculate distance between centers': 'The distance between centers is crucial because it determines the spatial relationship between the circles - whether they can possibly intersect.',
            'Check intersection condition': 'Comparing the center distance with radius sum and difference tells us if circles overlap, touch, or are separate.',
            'Calculate intersection points': 'When circles do intersect, we solve their equations simultaneously to find the exact coordinates where they cross.'
        };

        return explanations[step.step] || 'This step helps us understand the geometric relationship between the circles.';
    }

    getProceduralExplanationCircle(step) {
        return step.description || 'Follow the standard procedure for this calculation.';
    }

    getVisualExplanationCircle(step, problem) {
        const visuals = {
            'Identify circle information': 'Imagine drawing two circles on paper. Each circle has a dot at the center and extends outward to its radius distance.',
            'Calculate distance between centers': 'Picture a straight line connecting the two center dots. The length of this line is d.',
            'Check intersection condition': 'Visualize the circles moving closer or farther apart. There\'s a distance range where they overlap.',
            'Calculate intersection points': 'See where the circle edges cross - these are the intersection points.'
        };

        return visuals[step.step] || 'Visualize the geometric configuration.';
    }

    getAlgebraicExplanationCircle(step) {
        const algebraic = {
            'Identify circle information': 'Circle equation: (x-h)² + (y-k)² = r²',
            'Calculate distance between centers': 'Euclidean distance: d = √[(x₂-x₁)² + (y₂-y₁)²]',
            'Check intersection condition': 'Intersection iff |r₁-r₂| ≤ d ≤ r₁+r₂',
            'Calculate intersection points': 'Solve system: Circle₁ equation and Circle₂ equation'
        };

        return algebraic[step.step] || 'Apply standard algebraic principles.';
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
        const ELI5 = {
            'Identify circle information': "Each circle has a middle point (the center) and goes out the same distance in all directions (the radius). We need to know these to figure out if the circles touch!",
            'Calculate distance between centers': "We measure how far apart the circle centers are, like measuring the distance between two dots on paper.",
            'Check intersection condition': "Now we check: are the circles close enough to touch, or too far apart? It's like seeing if two people holding ropes can reach each other!",
            'Calculate intersection points': "If the circles do cross each other, we find exactly where they meet - like finding where two hoops overlap on the floor."
        };

        return ELI5[step.step] || "We're doing another step to understand how these circles relate to each other!";
    }

    findRelevantAnalogyCircle(step, problem) {
        const analogyKeys = ['overlapping_hoops', 'rope_reaching', 'ripples_in_pond'];
        for (const key of analogyKeys) {
            const analogy = this.analogies[key];
            if (analogy && analogy.suitableFor.includes(problem.type)) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of circles like ripples in water - sometimes they cross, sometimes they don't!";
    }

    convertToSimpleLanguageCircle(description) {
        if (!description) return '';
        
        const simplifications = {
            'center': 'middle point',
            'radius': 'distance from center to edge',
            'intersection': 'where they cross',
            'tangent': 'just touching',
            'coordinates': 'location numbers',
            'distance formula': 'way to measure distance',
            'equation': 'math sentence'
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
            'Identify circle information': 'Draw two circles with dots at their centers',
            'Calculate distance between centers': 'Draw a line connecting the two center dots',
            'Check intersection condition': 'Draw circles closer or farther to see when they touch',
            'Calculate intersection points': 'Mark the spots where the circle edges cross'
        };

        return visualizations[step.step] || 'Draw a picture showing the circles';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeCircle(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgressionCircle(steps[i], steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeCircle(currentStep, nextStep) {
        return {
            currentState: `We now know: ${currentStep.result || currentStep.conclusion || 'the current information'}`,
            nextGoal: `Next: ${nextStep.description}`,
            why: `This is necessary to ${nextStep.step.toLowerCase()}`,
            howItHelps: `This brings us closer to solving the circle intersection problem`
        };
    }

    explainStepProgressionCircle(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving`;
    }

    addErrorPrevention(step, problemType) {
        const category = this.circleIntersectionTypes[problemType]?.category || 'two_circle';
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
            'Calculate distance between centers': [
                'Use the full distance formula with square root',
                'Don\'t forget to square the differences',
                'Check your arithmetic carefully'
            ],
            'Check intersection condition': [
                'Remember all four conditions: d > r₁+r₂, d = r₁+r₂, |r₁-r₂| < d < r₁+r₂, d < |r₁-r₂|',
                'Use absolute value for radius difference',
                'Be careful with floating point comparisons'
            ],
            'Calculate intersection points': [
                'Expand circle equations before subtracting',
                'The quadratic terms should cancel',
                'Remember the ± in solutions'
            ]
        };

        return tips[step.step] || ['Work carefully and check each calculation'];
    }

    generateCheckPointsCircle(step) {
        return [
            'Did I use the correct formula?',
            'Are my calculations accurate?',
            'Does the result make geometric sense?',
            'Have I considered all cases?'
        ];
    }

    identifyWarningFlagsCircle(step, problemType) {
        const warnings = {
            'Calculate distance between centers': ['Forgetting square root', 'Sign errors in subtraction'],
            'Check intersection condition': ['Wrong inequality', 'Forgetting absolute value'],
            'Calculate intersection points': ['Algebra errors when subtracting equations', 'Forgetting both solutions']
        };

        return warnings[step.step] || [];
    }

    generateSelfCheckQuestionCircle(step) {
        const questions = {
            'Identify circle information': 'Do I have the center and radius of each circle?',
            'Calculate distance between centers': 'Did I use the distance formula correctly?',
            'Check intersection condition': 'Did I compare d with both r₁+r₂ AND |r₁-r₂|?',
            'Calculate intersection points': 'Do my points satisfy both circle equations?'
        };

        return questions[step.step] || 'Does this step make sense?';
    }

    describeExpectedResultCircle(step) {
        const expectations = {
            'Identify circle information': 'Two circles with known centers and radii',
            'Calculate distance between centers': 'A positive number representing distance',
            'Check intersection condition': 'Classification of intersection type',
            'Calculate intersection points': 'Zero, one, or two coordinate pairs'
        };

        return expectations[step.step] || 'Progress toward solution';
    }

    generateTroubleshootingTipsCircle(step) {
        return [
            'Draw a diagram if stuck',
            'Check your formula is correct',
            'Verify arithmetic step by step',
            'Consider if the result makes geometric sense'
        ];
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
            'Identify circle information': [
                'What is the center of each circle?',
                'What is the radius of each circle?',
                'How do I extract these from the equation?'
            ],
            'Calculate distance between centers': [
                'What formula calculates distance between two points?',
                'What are the coordinates of each center?',
                'Did I remember to take the square root?'
            ],
            'Check intersection condition': [
                'What values do I need to compare?',
                'What do each of these comparisons tell me?',
                'Which case applies to my problem?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?'];
    }

    breakIntoSubStepsCircle(step) {
        if (step.step === 'Calculate distance between centers') {
            return [
                'Find x-coordinates of both centers',
                'Find y-coordinates of both centers',
                'Calculate (x₂ - x₁)²',
                'Calculate (y₂ - y₁)²',
                'Add the squared differences',
                'Take the square root'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generateProgressiveHintsCircle(step, problem) {
        const category = this.circleIntersectionTypes[problem.type]?.category || 'two_circle';
        const hintSet = this.hints[category] || this.hints.two_circle;

        return {
            level1: hintSet.level1 || 'Think about what information you need.',
            level2: hintSet.level2 || 'Consider the formulas that apply.',
            level3: hintSet.level3 || 'Apply the specific calculation.',
            level4: hintSet.level4 || 'Complete the solution.'
        };
    }

    generatePracticeVariationCircle(step, problem) {
        return {
            similarProblem: 'Try the same type with different circle parameters',
            practiceHint: 'Start with circles on the x-axis for simpler calculations',
            extension: 'Try circles at arbitrary positions once comfortable'
        };
    }

    explainThinkingProcessCircle(step) {
        return {
            observe: 'What information do I have about the circles?',
            goal: 'What am I trying to find or determine?',
            strategy: 'What method or formula should I use?',
            execute: 'How do I perform the calculation correctly?',
            verify: 'Does my result make geometric sense?'
        };
    }

    identifyDecisionPointsCircle(step) {
        return [
            'Which method to use for finding intersection?',
            'How to handle special cases?',
            'When to use approximation vs exact solution?'
        ];
    }

    suggestAlternativeMethodsCircle(step, problem) {
        const alternatives = {
            'Calculate intersection points': [
                'Algebraic method (subtract equations)',
                'Geometric method (triangle properties)',
                'Numerical method (iteration)',
                'Parametric method'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate'];
    }

    identifyPrerequisitesCircle(step, problemType) {
        const category = this.circleIntersectionTypes[problemType]?.category || 'two_circle';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Circle equations', 'Distance formula'];
    }

    identifyKeyVocabularyCircle(step) {
        const vocabulary = {
            'Identify circle information': ['circle', 'center', 'radius', 'equation'],
            'Calculate distance between centers': ['distance', 'formula', 'coordinates', 'Euclidean'],
            'Check intersection condition': ['intersection', 'tangent', 'radius sum', 'radius difference'],
            'Calculate intersection points': ['system of equations', 'substitution', 'quadratic', 'solution']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPromptsCircle(step) {
        return {
            before: 'What do I need to know before starting this step?',
            during: 'What should I be careful about during this calculation?',
            after: 'How can I verify this result is correct?'
        };
    }

    findRealWorldConnectionCircle(step, problem) {
        return 'Circle intersections appear in GPS positioning, wireless coverage planning, and navigation systems.';
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by using the previous results`,
            progression: 'We are getting closer to the complete solution',
            relationship: 'Each step provides information needed for the next'
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

        // Use same simplifications as linear workbook for consistency
        return text; // Simplified for brevity - would implement full adaptation
    }

    // GRAPH GENERATION

    generateCircleIntersectionGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        this.graphData = this.generateCircleGraph(this.currentProblem, this.currentSolution);
    }

    generateCircleGraph(problem, solution) {
        return {
            type: 'circle_intersection',
            circles: [solution.circle1, solution.circle2],
            intersectionPoints: solution.intersectionPoints,
            distanceBetweenCenters: solution.distanceBetweenCenters,
            intersectionType: solution.intersectionType,
            visualization: 'Two circles plotted with intersection points marked'
        };
    }

    // WORKBOOK GENERATION

    generateCircleIntersectionWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSectionCircle(),
            this.createPrerequisiteSectionCircle(),
            this.createEnhancedStepsSectionCircle(),
            this.createCircleLessonSection(),
            this.createSolutionSectionCircle(),
            this.createAnalysisSectionCircle(),
            this.createVerificationSectionCircle(),
            this.createRealWorldApplicationSectionCircle(),
            this.createPedagogicalNotesSectionCircle(),
            this.createAlternativeMethodsSectionCircle(),
            this.createPracticeProblemsSectionCircle()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Circle Intersection Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSectionCircle() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.circleIntersectionTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.circleIntersectionTypes[this.currentProblem.type]?.category || 'circle_intersection'],
            ['Description', this.currentProblem.scenario || 'Circle intersection problem']
        ];

        if (this.currentSolution?.circle1) {
            problemData.push(['', '']);
            problemData.push(['Circle 1', '']);
            problemData.push(['Center', `(${this.currentSolution.circle1.center.x}, ${this.currentSolution.circle1.center.y})`]);
            problemData.push(['Radius', this.currentSolution.circle1.radius]);
        }

        if (this.currentSolution?.circle2) {
            problemData.push(['', '']);
            problemData.push(['Circle 2', '']);
            problemData.push(['Center', `(${this.currentSolution.circle2.center.x}, ${this.currentSolution.circle2.center.y})`]);
            problemData.push(['Radius', this.currentSolution.circle2.radius]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSectionCircle() {
        if (!this.prerequisiteChecks) return null;

        const category = this.circleIntersectionTypes[this.currentProblem.type]?.category;
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
                stepsData.push(['Explanation', step.explanation.currentState]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }

            if (step.calculation) {
                stepsData.push(['Calculation', step.calculation]);
            }

            if (step.result) {
                stepsData.push(['Result', step.result]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
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
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
                }
            }

            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Think Before', step.thinkingPrompts.before]);
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

    createCircleLessonSection() {
        const lessonData = [
            ['Circle Intersection Fundamentals', ''],
            ['', 'Two circles can intersect in 0, 1, or 2 points'],
            ['', 'Distance between centers determines intersection type'],
            ['', 'd > r₁ + r₂: no intersection (too far apart)'],
            ['', 'd = r₁ + r₂: external tangent (1 point)'],
            ['', '|r₁ - r₂| < d < r₁ + r₂: two intersection points'],
            ['', 'd = |r₁ - r₂|: internal tangent (1 point)'],
            ['', 'd < |r₁ - r₂|: no intersection (one inside other)'],
            ['', ''],
            ['Key Formulas', ''],
            ['', 'Distance: d = √[(x₂-x₁)² + (y₂-y₁)²]'],
            ['', 'Circle equation: (x-h)² + (y-k)² = r²'],
            ['', 'Radical axis: subtract circle equations'],
            ['', ''],
            ['Solution Methods', ''],
            ['', 'Algebraic: Solve system of circle equations'],
            ['', 'Geometric: Use triangle properties'],
            ['', 'Numerical: Iterative approximation']
        ];

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSectionCircle() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Intersection Type', this.currentSolution.intersectionType],
            ['Distance Between Centers', this.currentSolution.distanceBetweenCenters?.toFixed(4) || 'N/A'],
            ['Radius Sum (r₁ + r₂)', this.currentSolution.radiusSum?.toFixed(4) || 'N/A'],
            ['Radius Difference |r₁ - r₂|', this.currentSolution.radiusDifference?.toFixed(4) || 'N/A']
        ];

        if (this.currentSolution.intersectionPoints && this.currentSolution.intersectionPoints.length > 0) {
            solutionData.push(['', '']);
            solutionData.push(['Intersection Points', '']);
            this.currentSolution.intersectionPoints.forEach((point, index) => {
                solutionData.push([`Point ${index + 1}`, `(${point.x.toFixed(4)}, ${point.y.toFixed(4)})`]);
            });
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
            ['Problem Type', this.currentSolution.type || 'Circle Intersection'],
            ['Category', this.currentSolution.category || 'two_circle'],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel],
            ['Intersection Classification', this.currentSolution.intersectionType]
        ];

        // Geometric analysis
        if (this.currentSolution.distanceBetweenCenters && this.currentSolution.radiusSum) {
            const ratio = this.currentSolution.distanceBetweenCenters / this.currentSolution.radiusSum;
            analysisData.push(['d/(r₁+r₂) Ratio', ratio.toFixed(4)]);
            
            if (ratio < 0.5) {
                analysisData.push(['Configuration', 'Significant overlap']);
            } else if (ratio < 1.0) {
                analysisData.push(['Configuration', 'Moderate overlap']);
            } else {
                analysisData.push(['Configuration', 'Separated or tangent']);
            }
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSectionCircle() {
        if (!this.currentSolution) return null;

        const verificationData = [
            ['Verification Method', 'Distance check and equation substitution'],
            ['', '']
        ];

        if (this.currentSolution.intersectionPoints && this.currentSolution.intersectionPoints.length > 0) {
            const verification = this.currentSolution.verification;
            
            if (verification && verification.verifications) {
                verification.verifications.forEach((v, index) => {
                    verificationData.push([`Point ${index + 1}`, `(${v.point.x.toFixed(4)}, ${v.point.y.toFixed(4)})`]);
                    verificationData.push(['Distance to Center 1', v.distanceToCenter1.toFixed(6)]);
                    verificationData.push(['Expected (r₁)', this.currentSolution.circle1.radius.toFixed(6)]);
                    verificationData.push(['Error 1', v.error1.toExponential(2)]);
                    verificationData.push(['Distance to Center 2', v.distanceToCenter2.toFixed(6)]);
                    verificationData.push(['Expected (r₂)', this.currentSolution.circle2.radius.toFixed(6)]);
                    verificationData.push(['Error 2', v.error2.toExponential(2)]);
                    verificationData.push(['Valid', v.isValid ? 'Yes ✓' : 'No ✗']);
                    verificationData.push(['', '']);
                });

                verificationData.push(['Overall Verification', verification.allValid ? 'All points verified ✓' : 'Verification failed']);
            }
        } else {
            verificationData.push(['Note', 'No intersection points to verify']);
            verificationData.push(['Distance Check', 
                `d = ${this.currentSolution.distanceBetweenCenters?.toFixed(4)} compared with r₁+r₂ = ${this.currentSolution.radiusSum?.toFixed(4)}`
            ]);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRealWorldApplicationSectionCircle() {
        if (!this.includeRealWorldApplications) return null;

        const applications = [
            this.realWorldProblems.wifi_coverage,
            this.realWorldProblems.gps_positioning,
            this.realWorldProblems.radar_detection
        ];

        const appData = [
            ['Real-World Applications of Circle Intersection', ''],
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
                ['Primary Method Used', alternatives.primaryMethod],
                ['', ''],
                ['Alternative Methods', ''],
                ...alternatives.methods.map((method, index) => [
                    `Method ${index + 1}`, `${method.name}: ${method.description}`
                ]),
                ['', ''],
                ['Method Comparison', alternatives.comparison],
                ['', ''],
                ['When to Use Each Method', ''],
                ...alternatives.whenToUse.map(item => ['', item])
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

    generateCirclePedagogicalNotes(problemType) {
        const category = this.circleIntersectionTypes[problemType]?.category;

        const pedagogicalDatabase = {
            two_circle: {
                objectives: [
                    'Determine if two circles intersect',
                    'Calculate intersection points of two circles',
                    'Verify solutions geometrically and algebraically',
                    'Apply circle intersection to real-world problems'
                ],
                keyConcepts: [
                    'Distance formula is fundamental',
                    'Relationship between d, r₁, and r₂ determines intersection type',
                    'Subtracting circle equations eliminates quadratic terms',
                    'Geometric meaning of algebraic solutions'
                ],
                prerequisites: [
                    'Circle equation understanding',
                    'Distance formula mastery',
                    'System of equations solving',
                    'Quadratic formula',
                    'Coordinate geometry'
                ],
                commonDifficulties: [
                    'Confusing distance formula with other formulas',
                    'Forgetting to check intersection conditions first',
                    'Errors in expanding (x-h)² and (y-k)²',
                    'Not recognizing when circles don\'t intersect',
                    'Sign errors in calculations',
                    'Forgetting the ± in solutions'
                ],
                teachingStrategies: [
                    'Start with circles centered at origin for simplicity',
                    'Use graphing software to visualize',
                    'Emphasize checking intersection conditions BEFORE solving',
                    'Practice distance formula extensively first',
                    'Use real-world examples (WiFi coverage, GPS)',
                    'Draw diagrams for every problem',
                    'Show special cases explicitly'
                ],
                extensions: [
                    'Three circle intersection (trilateration)',
                    'Circle and line intersection',
                    'Tangent line to circle at intersection point',
                    'Area of intersection region',
                    'Optimization problems with circles',
                    'Systems with more than two circles'
                ],
                assessment: [
                    'Can student identify circle centers and radii?',
                    'Does student check intersection conditions first?',
                    'Can student apply distance formula correctly?',
                    'Does student verify solutions?',
                    'Can student interpret results geometrically?',
                    'Can student solve word problems?'
                ]
            },
            intersection_check: {
                objectives: [
                    'Quickly determine intersection type without full solution',
                    'Understand relationship between d, r₁+r₂, and |r₁-r₂|',
                    'Apply to coverage and proximity problems'
                ],
                keyConcepts: [
                    'Four inequality conditions for intersection types',
                    'Geometric interpretation of each condition',
                    'Efficiency of checking before solving'
                ],
                prerequisites: [
                    'Distance formula',
                    'Absolute value understanding',
                    'Inequality comparison'
                ],
                commonDifficulties: [
                    'Confusing the four conditions',
                    'Forgetting absolute value in |r₁-r₂|',
                    'Not understanding geometric meaning'
                ],
                teachingStrategies: [
                    'Create visual chart of four conditions',
                    'Use number line to show regions',
                    'Practice with many quick examples',
                    'Connect to real scenarios (can WiFi signals reach?)'
                ],
                extensions: [
                    'Finding exact intersection points after check',
                    'Multiple circle overlap analysis',
                    'Coverage optimization'
                ],
                assessment: [
                    'Can student state all four conditions?',
                    'Does student apply correct condition?',
                    'Can student explain geometrically?'
                ]
            },
            three_circle: {
                objectives: [
                    'Understand trilateration concept',
                    'Recognize overdetermined systems',
                    'Apply to GPS and positioning problems',
                    'Use numerical methods when exact solution unavailable'
                ],
                keyConcepts: [
                    'Three equations, two unknowns (overdetermined)',
                    'Exact solution only if common intersection point exists',
                    'Least squares for approximate solutions',
                    'Practical applications in navigation'
                ],
                prerequisites: [
                    'Two circle intersection mastery',
                    'Systems of equations',
                    'Matrix operations (for least squares)',
                    'Error minimization concepts'
                ],
                commonDifficulties: [
                    'Expecting exact solution always exists',
                    'Not understanding overdetermined systems',
                    'Computational complexity',
                    'Interpreting approximate solutions'
                ],
                teachingStrategies: [
                    'Start with two circles, add third gradually',
                    'Show GPS application explicitly',
                    'Demonstrate cases with and without exact solution',
                    'Use graphing to show why exact solution may not exist',
                    'Introduce numerical methods gently'
                ],
                extensions: [
                    'Four or more circles (3D positioning)',
                    'Weighted least squares',
                    'Error ellipses and confidence regions',
                    'Real GPS algorithms'
                ],
                assessment: [
                    'Does student understand overdetermined concept?',
                    'Can student solve when exact solution exists?',
                    'Does student recognize when approximation needed?',
                    'Can student apply to real scenarios?'
                ]
            },
            area: {
                objectives: [
                    'Calculate area of circle intersection region',
                    'Understand circular segment geometry',
                    'Apply inverse trigonometric functions',
                    'Solve overlap and coverage problems'
                ],
                keyConcepts: [
                    'Intersection region is sum of two circular segments',
                    'Circular segment area formula',
                    'Use of arccos for central angle',
                    'Symmetry in calculation'
                ],
                prerequisites: [
                    'Circle area formula',
                    'Trigonometric functions',
                    'Inverse trig functions',
                    'Geometric segment understanding',
                    'Two circle intersection basics'
                ],
                commonDifficulties: [
                    'Complex formula intimidation',
                    'Inverse trig function errors',
                    'Not recognizing symmetric segments',
                    'Unit consistency',
                    'Numerical precision issues'
                ],
                teachingStrategies: [
                    'Break formula into manageable pieces',
                    'Visualize segments clearly',
                    'Use software to verify',
                    'Practice with equal radii first (symmetric case)',
                    'Connect to practical problems (overlapping coverage)'
                ],
                extensions: [
                    'Three or more circle overlap area',
                    'Venn diagram area calculations',
                    'Optimization of overlap',
                    'Monte Carlo approximation methods'
                ],
                assessment: [
                    'Can student identify the two segments?',
                    'Does student apply formula correctly?',
                    'Can student verify result makes sense?',
                    'Can student solve applied problems?'
                ]
            },
            word_problem: {
                objectives: [
                    'Translate real scenarios to circle intersection problems',
                    'Model coverage, positioning, and proximity problems',
                    'Interpret solutions in context',
                    'Apply appropriate solution methods'
                ],
                keyConcepts: [
                    'Real scenarios often involve circles',
                    'Coverage = circle with center and radius',
                    'Overlap questions = intersection problems',
                    'Positioning = trilateration'
                ],
                prerequisites: [
                    'Circle intersection methods',
                    'Reading comprehension',
                    'Unit conversion',
                    'Problem-solving strategies'
                ],
                commonDifficulties: [
                    'Identifying centers and radii from word problem',
                    'Choosing correct method',
                    'Unit inconsistencies',
                    'Not answering the actual question asked',
                    'Misinterpreting context'
                ],
                teachingStrategies: [
                    'Start with clear, simple scenarios',
                    'Always draw diagram first',
                    'Practice identifying center and radius from description',
                    'Use real applications (WiFi, GPS, radar)',
                    'Check answer makes sense in context'
                ],
                extensions: [
                    'Multi-step word problems',
                    'Optimization problems',
                    'Problems requiring approximation',
                    'Real data applications'
                ],
                assessment: [
                    'Can student extract circle parameters?',
                    'Does student draw helpful diagram?',
                    'Can student choose appropriate method?',
                    'Does student interpret solution correctly?',
                    'Can student verify answer is reasonable?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve circle intersection problems'],
            keyConcepts: ['Circle properties', 'Distance relationships'],
            prerequisites: ['Circle equations', 'Distance formula'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Visual approach', 'Step-by-step instruction'],
            extensions: ['More complex configurations'],
            assessment: ['Verify understanding of concepts and procedures']
        };
    }

    generateCircleAlternativeMethods(problemType) {
        const category = this.circleIntersectionTypes[problemType]?.category;

        const alternativeDatabase = {
            two_circle: {
                primaryMethod: 'Algebraic Method (Equation Subtraction)',
                methods: [
                    {
                        name: 'Algebraic (Equation Subtraction)',
                        description: 'Subtract one circle equation from the other to eliminate quadratic terms, creating linear equation (radical axis). Substitute back to find intersection points.'
                    },
                    {
                        name: 'Geometric (Triangle Method)',
                        description: 'Form triangle with centers and intersection point. Use known side lengths (r₁, r₂, d) and law of cosines to find angles, then calculate intersection coordinates.'
                    },
                    {
                        name: 'Parametric Method',
                        description: 'Parameterize each circle as x = h + r·cos(t), y = k + r·sin(t). Solve for parameter values at intersection.'
                    },
                    {
                        name: 'Numerical Method (Newton-Raphson)',
                        description: 'Use iterative numerical method to approximate intersection points. Useful for complex cases or computer implementation.'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Plot both circles accurately and read intersection coordinates from graph. Less precise but good for visualization.'
                    }
                ],
                comparison: 'Algebraic method is most reliable and exact. Geometric method provides intuition. Numerical methods are best for complex cases or programming. Graphical method aids understanding but lacks precision.',
                whenToUse: [
                    'Algebraic: Standard cases, need exact answer',
                    'Geometric: Understanding problem, hand calculations with special angles',
                    'Parametric: Animation, computer graphics applications',
                    'Numerical: Complex configurations, programming implementations',
                    'Graphical: Quick visualization, checking answers'
                ]
            },
            intersection_check: {
                primaryMethod: 'Distance Comparison',
                methods: [
                    {
                        name: 'Distance Comparison',
                        description: 'Calculate d and compare with r₁+r₂ and |r₁-r₂| using inequalities.'
                    },
                    {
                        name: 'Graphical Check',
                        description: 'Plot circles and visually inspect intersection.'
                    },
                    {
                        name: 'Attempt Solution',
                        description: 'Try to solve and see if solution exists (less efficient).'
                    }
                ],
                comparison: 'Distance comparison is fastest and most reliable. Graphical check is good for visualization. Attempting solution wastes time.',
                whenToUse: [
                    'Distance comparison: Always for efficient checking',
                    'Graphical: When visualization needed',
                    'Attempt solution: Never use this as checking method'
                ]
            },
            three_circle: {
                primaryMethod: 'Pairwise Intersection with Verification',
                methods: [
                    {
                        name: 'Pairwise Intersection',
                        description: 'Find intersection of two circles, check if points satisfy third circle equation.'
                    },
                    {
                        name: 'Least Squares',
                        description: 'Minimize sum of squared errors for all three circle equations simultaneously.'
                    },
                    {
                        name: 'Matrix Method',
                        description: 'Set up as matrix equation and solve using linear algebra (after linearization).'
                    },
                    {
                        name: 'Geometric Construction',
                        description: 'Use compass and straightedge construction principles (theoretical).'
                    }
                ],
                comparison: 'Pairwise method is simplest when exact solution exists. Least squares best for approximate solutions. Matrix method is systematic for programming.',
                whenToUse: [
                    'Pairwise: When you expect exact common point',
                    'Least squares: When exact solution may not exist',
                    'Matrix: Programming implementations',
                    'Geometric: Theoretical understanding'
                ]
            },
            area: {
                primaryMethod: 'Circular Segment Sum',
                methods: [
                    {
                        name: 'Circular Segment Formula',
                        description: 'Calculate area of each circular segment and sum them.'
                    },
                    {
                        name: 'Integration Method',
                        description: 'Set up integral over intersection region and evaluate.'
                    },
                    {
                        name: 'Monte Carlo Simulation',
                        description: 'Generate random points and count how many fall in intersection.'
                    },
                    {
                        name: 'Geometric Decomposition',
                        description: 'Break region into triangles and circular segments, calculate each piece.'
                    }
                ],
                comparison: 'Segment formula is exact and efficient. Integration is theoretical foundation. Monte Carlo is approximate but simple to program. Geometric decomposition aids understanding.',
                whenToUse: [
                    'Segment formula: Standard cases, exact answer needed',
                    'Integration: Theoretical proofs, unusual shapes',
                    'Monte Carlo: Quick approximation, complex shapes',
                    'Geometric: Understanding, special cases'
                ]
            },
            word_problem: {
                primaryMethod: 'Model as Circle Intersection',
                methods: [
                    {
                        name: 'Direct Modeling',
                        description: 'Identify circles from problem, apply appropriate intersection method.'
                    },
                    {
                        name: 'Dimensional Analysis',
                        description: 'Check units, convert as needed, set up equations carefully.'
                    },
                    {
                        name: 'Diagram First',
                        description: 'Always draw diagram showing circles, centers, radii, and what\'s being asked.'
                    },
                    {
                        name: 'Break into Sub-problems',
                        description: 'For complex scenarios, solve parts separately then combine.'
                    }
                ],
                comparison: 'All methods are complementary. Diagram first is essential for visualization. Direct modeling is the solution. Dimensional analysis prevents errors.',
                whenToUse: [
                    'Diagram: Every word problem, first step',
                    'Direct modeling: After understanding problem',
                    'Dimensional analysis: When units are involved',
                    'Sub-problems: Complex multi-step problems'
                ]
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard approach',
            methods: [{
                name: 'Standard method',
                description: 'Apply appropriate circle intersection technique'
            }],
            comparison: 'Choose method based on problem requirements',
            whenToUse: ['Use standard method for most cases']
        };
    }
}

// Export the class
export default EnhancedCircleIntersectionMathematicalWorkbook;
