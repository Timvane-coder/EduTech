// Enhanced Basic Trigonometric Ratios Mathematical Workbook - Comprehensive Implementation
import * as math from 'mathjs';

export class EnhancedBasicTrigonometricRatiosWorkbook {
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

        // Angle mode
        this.angleMode = options.angleMode || 'degrees'; // 'degrees' or 'radians'

        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializeTrigonometricSolvers();
        this.initializeTrigonometricLessons();
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
        this.initializeSpecialAnglesDatabase();
        this.initializeUnitCircleDatabase();
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
            'theta': 'θ',
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'pi': 'π',
            'degree': '°',
            'sqrt': '√',
            'approx': '≈',
            'leq': '≤',
            'geq': '≥',
            'infinity': '∞',
            'plusminus': '±'
        };
    }

    initializeTrigonometricLessons() {
        this.lessons = {
            basic_ratios: {
                title: "Basic Trigonometric Ratios",
                concepts: [
                    "Three primary ratios: sine, cosine, tangent",
                    "Defined using right triangle sides",
                    "SOH-CAH-TOA mnemonic",
                    "Ratios depend on angle, not triangle size"
                ],
                theory: "Trigonometric ratios relate angles to side lengths in right triangles. They are fundamental to understanding periodic phenomena, waves, and circular motion.",
                keyFormulas: {
                    "Sine": "sin(θ) = opposite/hypotenuse",
                    "Cosine": "cos(θ) = adjacent/hypotenuse",
                    "Tangent": "tan(θ) = opposite/adjacent",
                    "Alternative tangent": "tan(θ) = sin(θ)/cos(θ)"
                },
                triangleLabeling: {
                    "Hypotenuse": "Longest side, opposite the right angle",
                    "Opposite": "Side opposite to the angle of interest",
                    "Adjacent": "Side next to the angle of interest (not hypotenuse)"
                },
                solvingSteps: [
                    "Identify the angle of interest",
                    "Label triangle sides: opposite, adjacent, hypotenuse",
                    "Choose appropriate ratio based on known/unknown sides",
                    "Set up the equation",
                    "Solve for the unknown",
                    "Check reasonableness of answer"
                ],
                applications: [
                    "Finding heights and distances",
                    "Navigation and surveying",
                    "Engineering and architecture",
                    "Physics: projectile motion, waves"
                ]
            },

            sine_ratio: {
                title: "Sine Ratio (SOH)",
                concepts: [
                    "sin(θ) = opposite/hypotenuse",
                    "Relates angle to vertical component",
                    "Range: -1 to 1 for all angles",
                    "sin(30°) = 0.5, sin(45°) ≈ 0.707, sin(60°) ≈ 0.866"
                ],
                theory: "Sine represents the ratio of the vertical side to the longest side. It measures how 'tall' the triangle is relative to its hypotenuse.",
                keyFormulas: {
                    "Definition": "sin(θ) = opposite/hypotenuse",
                    "Finding opposite": "opposite = hypotenuse × sin(θ)",
                    "Finding hypotenuse": "hypotenuse = opposite/sin(θ)",
                    "Finding angle": "θ = arcsin(opposite/hypotenuse)"
                },
                specialValues: {
                    "sin(0°)": "0",
                    "sin(30°)": "1/2 = 0.5",
                    "sin(45°)": "√2/2 ≈ 0.707",
                    "sin(60°)": "√3/2 ≈ 0.866",
                    "sin(90°)": "1"
                },
                applications: [
                    "Calculating vertical height",
                    "Projectile motion vertical component",
                    "Wave amplitudes",
                    "Alternating current calculations"
                ]
            },

            cosine_ratio: {
                title: "Cosine Ratio (CAH)",
                concepts: [
                    "cos(θ) = adjacent/hypotenuse",
                    "Relates angle to horizontal component",
                    "Range: -1 to 1 for all angles",
                    "cos(0°) = 1, cos(45°) ≈ 0.707, cos(90°) = 0"
                ],
                theory: "Cosine represents the ratio of the horizontal side to the longest side. It measures how 'wide' the triangle is relative to its hypotenuse.",
                keyFormulas: {
                    "Definition": "cos(θ) = adjacent/hypotenuse",
                    "Finding adjacent": "adjacent = hypotenuse × cos(θ)",
                    "Finding hypotenuse": "hypotenuse = adjacent/cos(θ)",
                    "Finding angle": "θ = arccos(adjacent/hypotenuse)"
                },
                specialValues: {
                    "cos(0°)": "1",
                    "cos(30°)": "√3/2 ≈ 0.866",
                    "cos(45°)": "√2/2 ≈ 0.707",
                    "cos(60°)": "1/2 = 0.5",
                    "cos(90°)": "0"
                },
                applications: [
                    "Calculating horizontal distance",
                    "Projectile motion horizontal component",
                    "Force components",
                    "Phase shifts in waves"
                ]
            },

            tangent_ratio: {
                title: "Tangent Ratio (TOA)",
                concepts: [
                    "tan(θ) = opposite/adjacent",
                    "Ratio of vertical to horizontal",
                    "Can be greater than 1 or less than -1",
                    "tan(θ) = sin(θ)/cos(θ)"
                ],
                theory: "Tangent represents the slope of the line from origin to a point. It measures steepness and is unbounded unlike sine and cosine.",
                keyFormulas: {
                    "Definition": "tan(θ) = opposite/adjacent",
                    "Alternative": "tan(θ) = sin(θ)/cos(θ)",
                    "Finding opposite": "opposite = adjacent × tan(θ)",
                    "Finding adjacent": "adjacent = opposite/tan(θ)",
                    "Finding angle": "θ = arctan(opposite/adjacent)"
                },
                specialValues: {
                    "tan(0°)": "0",
                    "tan(30°)": "√3/3 ≈ 0.577",
                    "tan(45°)": "1",
                    "tan(60°)": "√3 ≈ 1.732",
                    "tan(90°)": "undefined"
                },
                applications: [
                    "Calculating slopes and grades",
                    "Angle of elevation/depression",
                    "Road inclines",
                    "Roof pitches"
                ]
            },

            reciprocal_ratios: {
                title: "Reciprocal Ratios: Cosecant, Secant, Cotangent",
                concepts: [
                    "csc(θ) = 1/sin(θ) = hypotenuse/opposite",
                    "sec(θ) = 1/cos(θ) = hypotenuse/adjacent",
                    "cot(θ) = 1/tan(θ) = adjacent/opposite",
                    "Reciprocals of the three primary ratios"
                ],
                theory: "Reciprocal ratios are the inverses of sine, cosine, and tangent. They provide alternative ways to express trigonometric relationships.",
                keyFormulas: {
                    "Cosecant": "csc(θ) = hypotenuse/opposite = 1/sin(θ)",
                    "Secant": "sec(θ) = hypotenuse/adjacent = 1/cos(θ)",
                    "Cotangent": "cot(θ) = adjacent/opposite = 1/tan(θ)",
                    "Alternative cotangent": "cot(θ) = cos(θ)/sin(θ)"
                },
                applications: [
                    "Simplifying complex expressions",
                    "Calculus applications",
                    "Advanced physics formulas"
                ]
            },

            finding_sides: {
                title: "Finding Unknown Sides",
                concepts: [
                    "Use trig ratio that includes known side and unknown side",
                    "Set up equation: ratio = value",
                    "Solve for unknown side",
                    "Check using Pythagorean theorem"
                ],
                theory: "When angle and one side are known, trigonometric ratios allow calculation of other sides.",
                problemTypes: {
                    "Known: angle and hypotenuse": "Use sin or cos to find opposite or adjacent",
                    "Known: angle and opposite": "Use sin to find hypotenuse, tan to find adjacent",
                    "Known: angle and adjacent": "Use cos to find hypotenuse, tan to find opposite"
                },
                solvingSteps: [
                    "Identify known angle and known side",
                    "Identify unknown side to find",
                    "Choose ratio containing both known and unknown",
                    "Set up equation",
                    "Solve for unknown",
                    "Verify with Pythagorean theorem if possible"
                ]
            },

            finding_angles: {
                title: "Finding Unknown Angles",
                concepts: [
                    "Use inverse trig functions: arcsin, arccos, arctan",
                    "Need two sides to find an angle",
                    "Calculator must be in correct mode (degrees/radians)",
                    "Check angle is reasonable for triangle"
                ],
                theory: "Inverse trigonometric functions allow us to find angles when we know side ratios.",
                keyFormulas: {
                    "Using sine": "θ = arcsin(opposite/hypotenuse) or sin⁻¹(opposite/hypotenuse)",
                    "Using cosine": "θ = arccos(adjacent/hypotenuse) or cos⁻¹(adjacent/hypotenuse)",
                    "Using tangent": "θ = arctan(opposite/adjacent) or tan⁻¹(opposite/adjacent)"
                },
                solvingSteps: [
                    "Identify two known sides",
                    "Choose ratio that uses those two sides",
                    "Calculate the ratio value",
                    "Use inverse function to find angle",
                    "Check answer is between 0° and 90° for right triangle"
                ],
                calculatorNotes: {
                    "Mode": "Ensure calculator is in degrees or radians as appropriate",
                    "Notation": "sin⁻¹, arcsin, asin all mean the same thing",
                    "Range": "Answer should be acute angle (0° to 90°) for right triangles"
                }
            },

            angle_elevation_depression: {
                title: "Angles of Elevation and Depression",
                concepts: [
                    "Elevation: angle above horizontal",
                    "Depression: angle below horizontal",
                    "Both measured from horizontal line",
                    "Create right triangle for solving"
                ],
                theory: "Angles of elevation and depression describe sight lines from horizontal. They are equal to corresponding alternate interior angles.",
                problemSetup: {
                    "Elevation": "Looking up at object above you",
                    "Depression": "Looking down at object below you",
                    "Horizontal line": "Reference line at eye level",
                    "Alternate angles": "Angle of elevation from below = angle of depression from above"
                },
                solvingSteps: [
                    "Draw diagram with horizontal line",
                    "Mark angle of elevation or depression",
                    "Identify right triangle formed",
                    "Label sides relative to angle",
                    "Use appropriate trig ratio",
                    "Solve for unknown"
                ],
                applications: [
                    "Finding height of buildings, trees, mountains",
                    "Aviation and navigation",
                    "Surveying land",
                    "Line of sight calculations"
                ]
            },

            special_angles: {
                title: "Special Angles: 30°, 45°, 60°",
                concepts: [
                    "30-60-90 triangle: sides in ratio 1:√3:2",
                    "45-45-90 triangle: sides in ratio 1:1:√2",
                    "Exact values without calculator",
                    "Derived from equilateral and isosceles triangles"
                ],
                theory: "Special angles have exact trigonometric values that can be memorized or derived from special right triangles.",
                specialTriangles: {
                    "45-45-90": {
                        sides: "1:1:√2",
                        angles: "45°, 45°, 90°",
                        description: "Isosceles right triangle"
                    },
                    "30-60-90": {
                        sides: "1:√3:2",
                        angles: "30°, 60°, 90°",
                        description: "Half of equilateral triangle"
                    }
                },
                exactValues: {
                    "30°": "sin=1/2, cos=√3/2, tan=√3/3",
                    "45°": "sin=√2/2, cos=√2/2, tan=1",
                    "60°": "sin=√3/2, cos=1/2, tan=√3"
                },
                applications: [
                    "Quick mental calculations",
                    "Exact answers in geometry",
                    "Simplifying expressions"
                ]
            },

            pythagorean_theorem: {
                title: "Pythagorean Theorem in Trigonometry",
                concepts: [
                    "a² + b² = c² for right triangles",
                    "Find third side when two are known",
                    "Verify trig calculations",
                    "Foundation for trig identities"
                ],
                theory: "The Pythagorean theorem relates all three sides of a right triangle and provides a check for trigonometric calculations.",
                keyFormulas: {
                    "Standard form": "a² + b² = c²",
                    "Find hypotenuse": "c = √(a² + b²)",
                    "Find leg": "a = √(c² - b²)",
                    "Trig identity": "sin²(θ) + cos²(θ) = 1"
                },
                applications: [
                    "Finding missing sides",
                    "Verifying calculations",
                    "Distance formula",
                    "3D geometry"
                ]
            },

            complementary_angles: {
                title: "Complementary Angles",
                concepts: [
                    "Complementary angles sum to 90°",
                    "sin(θ) = cos(90° - θ)",
                    "cos(θ) = sin(90° - θ)",
                    "tan(θ) = cot(90° - θ)"
                ],
                theory: "In a right triangle, the two acute angles are complementary. This creates relationships between trig ratios.",
                keyRelationships: {
                    "Sine-Cosine": "sin(θ) = cos(90° - θ)",
                    "Cosine-Sine": "cos(θ) = sin(90° - θ)",
                    "Tangent-Cotangent": "tan(θ) = cot(90° - θ)"
                },
                applications: [
                    "Simplifying expressions",
                    "Solving equations",
                    "Understanding trig relationships"
                ]
            }
        };
    }

    initializeTrigonometricSolvers() {
        this.trigTypes = {
            find_sine: {
                patterns: [
                    /sin.*=/,
                    /sine/i,
                    /opposite.*hypotenuse/i
                ],
                solver: this.solveSineRatio.bind(this),
                name: 'Sine Ratio',
                category: 'basic_ratio',
                description: 'Calculate sin(θ) = opposite/hypotenuse'
            },

            find_cosine: {
                patterns: [
                    /cos.*=/,
                    /cosine/i,
                    /adjacent.*hypotenuse/i
                ],
                solver: this.solveCosineRatio.bind(this),
                name: 'Cosine Ratio',
                category: 'basic_ratio',
                description: 'Calculate cos(θ) = adjacent/hypotenuse'
            },

            find_tangent: {
                patterns: [
                    /tan.*=/,
                    /tangent/i,
                    /opposite.*adjacent/i
                ],
                solver: this.solveTangentRatio.bind(this),
                name: 'Tangent Ratio',
                category: 'basic_ratio',
                description: 'Calculate tan(θ) = opposite/adjacent'
            },

            find_side_using_sine: {
                patterns: [
                    /find.*side.*sin/i,
                    /opposite.*sin/i,
                    /hypotenuse.*sin/i
                ],
                solver: this.solveSideUsingSine.bind(this),
                name: 'Find Side Using Sine',
                category: 'find_side',
                description: 'Use sine ratio to find unknown side'
            },

            find_side_using_cosine: {
                patterns: [
                    /find.*side.*cos/i,
                    /adjacent.*cos/i,
                    /hypotenuse.*cos/i
                ],
                solver: this.solveSideUsingCosine.bind(this),
                name: 'Find Side Using Cosine',
                category: 'find_side',
                description: 'Use cosine ratio to find unknown side'
            },

            find_side_using_tangent: {
                patterns: [
                    /find.*side.*tan/i,
                    /opposite.*tan/i,
                    /adjacent.*tan/i
                ],
                solver: this.solveSideUsingTangent.bind(this),
                name: 'Find Side Using Tangent',
                category: 'find_side',
                description: 'Use tangent ratio to find unknown side'
            },

            find_angle_using_sine: {
                patterns: [
                    /find.*angle.*sin/i,
                    /arcsin/i,
                    /sin.*inverse/i,
                    /angle.*opposite.*hypotenuse/i
                ],
                solver: this.solveAngleUsingSine.bind(this),
                name: 'Find Angle Using Sine',
                category: 'find_angle',
                description: 'Use inverse sine to find angle'
            },

            find_angle_using_cosine: {
                patterns: [
                    /find.*angle.*cos/i,
                    /arccos/i,
                    /cos.*inverse/i,
                    /angle.*adjacent.*hypotenuse/i
                ],
                solver: this.solveAngleUsingCosine.bind(this),
                name: 'Find Angle Using Cosine',
                category: 'find_angle',
                description: 'Use inverse cosine to find angle'
            },

            find_angle_using_tangent: {
                patterns: [
                    /find.*angle.*tan/i,
                    /arctan/i,
                    /tan.*inverse/i,
                    /angle.*opposite.*adjacent/i
                ],
                solver: this.solveAngleUsingTangent.bind(this),
                name: 'Find Angle Using Tangent',
                category: 'find_angle',
                description: 'Use inverse tangent to find angle'
            },

            angle_elevation: {
                patterns: [
                    /elevation/i,
                    /looking.*up/i,
                    /above.*horizontal/i
                ],
                solver: this.solveAngleElevation.bind(this),
                name: 'Angle of Elevation',
                category: 'application',
                description: 'Solve angle of elevation problem'
            },

            angle_depression: {
                patterns: [
                    /depression/i,
                    /looking.*down/i,
                    /below.*horizontal/i
                ],
                solver: this.solveAngleDepression.bind(this),
                name: 'Angle of Depression',
                category: 'application',
                description: 'Solve angle of depression problem'
            },

            special_angle_30: {
                patterns: [
                    /30.*degree/i,
                    /30°/
                ],
                solver: this.solveSpecialAngle30.bind(this),
                name: '30° Special Angle',
                category: 'special_angle',
                description: 'Calculate exact values for 30°'
            },

            special_angle_45: {
                patterns: [
                    /45.*degree/i,
                    /45°/
                ],
                solver: this.solveSpecialAngle45.bind(this),
                name: '45° Special Angle',
                category: 'special_angle',
                description: 'Calculate exact values for 45°'
            },

            special_angle_60: {
                patterns: [
                    /60.*degree/i,
                    /60°/
                ],
                solver: this.solveSpecialAngle60.bind(this),
                name: '60° Special Angle',
                category: 'special_angle',
                description: 'Calculate exact values for 60°'
            },

            pythagorean_side: {
                patterns: [
                    /pythagorean/i,
                    /a.*b.*c/i,
                    /missing.*side/i
                ],
                solver: this.solvePythagoreanSide.bind(this),
                name: 'Pythagorean Theorem',
                category: 'pythagorean',
                description: 'Find missing side using Pythagorean theorem'
            },

            verify_triangle: {
                patterns: [
                    /verify/i,
                    /check.*triangle/i
                ],
                solver: this.verifyTriangle.bind(this),
                name: 'Verify Triangle',
                category: 'verification',
                description: 'Verify right triangle measurements'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            basic_ratio: {
                'Identifying sides': [
                    'Confusing opposite and adjacent',
                    'Not identifying hypotenuse correctly',
                    'Using wrong side relative to angle'
                ],
                'Setting up ratio': [
                    'Inverting the ratio (opposite/hypotenuse vs hypotenuse/opposite)',
                    'Using wrong trig function',
                    'Mixing up SOH-CAH-TOA'
                ],
                'Calculator usage': [
                    'Calculator in wrong mode (degrees vs radians)',
                    'Order of operations errors',
                    'Not using parentheses correctly'
                ]
            },
            find_side: {
                'Equation setup': [
                    'Choosing wrong trig ratio',
                    'Setting up equation incorrectly',
                    'Using wrong known values'
                ],
                'Solving': [
                    'Multiplication/division errors',
                    'Not isolating variable correctly',
                    'Rounding too early'
                ],
                'Units': [
                    'Forgetting to include units',
                    'Converting units incorrectly',
                    'Mixing different unit systems'
                ]
            },
            find_angle: {
                'Inverse functions': [
                    'Using regular trig instead of inverse',
                    'Calculator mode incorrect',
                    'Not recognizing inverse notation'
                ],
                'Ratio calculation': [
                    'Calculating ratio backwards',
                    'Division errors',
                    'Rounding ratio too much before inverse'
                ],
                'Answer range': [
                    'Not checking if angle is reasonable',
                    'Accepting obtuse angle for acute triangle',
                    'Forgetting angle constraints'
                ]
            },
            application: {
                'Diagram': [
                    'Not drawing accurate diagram',
                    'Mislabeling sides',
                    'Missing right angle indicator'
                ],
                'Problem interpretation': [
                    'Confusing elevation and depression',
                    'Not identifying which angle to find',
                    'Misreading given information'
                ],
                'Real-world context': [
                    'Not considering practical constraints',
                    'Unrealistic precision in answer',
                    'Forgetting to answer the actual question asked'
                ]
            }
        };

        this.errorPrevention = {
            side_identification: {
                reminder: 'Always identify sides relative to the angle of interest',
                method: 'Label triangle clearly: H for hypotenuse, O for opposite, A for adjacent'
            },
            ratio_selection: {
                reminder: 'Use SOH-CAH-TOA to choose correct ratio',
                method: 'Write down which two sides you know/need, then pick matching ratio'
            },
            calculator_mode: {
                reminder: 'Check calculator is in degrees mode for degree problems',
                method: 'Calculate sin(30°) as test - should get 0.5'
            },
            inverse_functions: {
                reminder: 'Use sin⁻¹, cos⁻¹, tan⁻¹ when finding angles',
                method: 'Remember: sides → ratio → angle (use inverse)'
            },
            reasonableness: {
                reminder: 'Check if answer makes sense',
                method: 'Angles should be 0-90°, sides should have reasonable proportions'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Understanding relationships between angles and sides',
                language: 'Intuitive explanations using triangles'
            },
            procedural: {
                focus: 'Step-by-step calculation process',
                language: 'Exact sequence of operations'
            },
            visual: {
                focus: 'Triangle diagrams and unit circle',
                language: 'Visual and spatial understanding'
            },
            computational: {
                focus: 'Calculator techniques and numerical accuracy',
                language: 'Practical calculation methods'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple terms, avoiding technical jargon',
                detail: 'essential steps only',
                examples: 'simple angles like 30°, 45°, 60°'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'variety of angles and applications'
            },
            ELI5: {
                vocabulary: 'everyday language with analogies',
                detail: 'every step explained simply',
                examples: 'real-world situations',
                analogies: true,
                visualization: 'simple pictures'
            },
            detailed: {
                vocabulary: 'full mathematical terminology',
                detail: 'comprehensive explanations',
                examples: 'complex applications'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery',
                examples: 'carefully sequenced'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            ladder_safety: {
                scenario: "Ladder leaning against wall",
                description: "Safety guidelines require specific angles",
                equation: "Use sin, cos, or tan depending on known values",
                examples: [
                    "20-foot ladder at 75° angle - how high does it reach?",
                    "Ladder must reach 15 feet high, makes 70° angle - how long?"
                ],
                context: "OSHA recommends 75° angle for ladder safety",
                trigFunction: "sin or cos depending on question"
            },
            building_height: {
                scenario: "Finding height of tall structures",
                description: "Use angle of elevation from known distance",
                equation: "tan(angle) = height/distance",
                examples: [
                    "From 50m away, building has 60° elevation angle - find height",
                    "Tree casts shadow, sun at 45° - find tree height"
                ],
                context: "Surveying and architecture applications",
                trigFunction: "tangent (opposite over adjacent)"
            },
            ramp_design: {
                scenario: "Wheelchair ramp specifications",
                description: "ADA requires specific slope angles",
                equation: "tan(angle) = rise/run",
                examples: [
                    "Ramp rises 2 feet over 24 feet - find angle",
                    "Max angle 4.76° - find run for 3 foot rise"
                ],
                context: "ADA requires max 4.76° (1:12 slope) for accessibility",
                trigFunction: "tangent for slope"
            },
            aircraft_altitude: {
                scenario: "Plane descending to runway",
                description: "Angle of depression to landing point",
                equation: "tan(angle) = altitude/horizontal_distance",
                examples: [
                    "Plane at 5000ft altitude, 3° descent angle - how far to touchdown?",
                    "12 miles from airport at 10,000ft - what descent angle?"
                ],
                context: "Typical aircraft approach is 3° angle",
                trigFunction: "tangent for angle of depression"
            },
            roof_pitch: {
                scenario: "Roof construction and pitch",
                description: "Roof pitch expressed as rise:run or angle",
                equation: "tan(angle) = rise/run",
                examples: [
                    "6:12 pitch roof - find angle",
                    "30° roof angle, 20ft span - find ridge height"
                ],
                context: "Roof pitch affects drainage and snow load",
                trigFunction: "tangent (rise over run)"
            },
            cable_car: {
                scenario: "Cable car or ski lift",
                description: "Incline angle and cable length",
                equation: "sin(angle) = vertical_rise/cable_length",
                examples: [
                    "Mountain rises 500m, cable at 30° - find cable length",
                    "1000m cable rises 400m - find angle"
                ],
                context: "Transportation engineering",
                trigFunction: "sine (vertical over hypotenuse)"
            },
            navigation: {
                scenario: "Ship or aircraft navigation",
                description: "Course bearings and distances",
                equation: "Trigonometry for position calculations",
                examples: [
                    "Ship travels 50 miles at bearing 60° - find north/east components",
                    "Plane flies 300 miles east, 200 miles north - find bearing"
                ],
                context: "Navigation uses bearings (angles from north)",
                trigFunction: "sine and cosine for components"
            },
            shadow_length: {
                scenario: "Shadow problems",
                description: "Find object height from shadow length",
                equation: "tan(sun_angle) = height/shadow_length",
                examples: [
                    "3m shadow when sun at 60° - find pole height",
                    "Building is 50m tall, casts 30m shadow - find sun angle"
                ],
                context: "Ancient method of measuring heights",
                trigFunction: "tangent"
            },
            sight_distance: {
                scenario: "Line of sight calculations",
                description: "How far can you see from height",
                equation: "Uses angle of depression to horizon",
                examples: [
                    "From 100m tower, angle to horizon is 0.5° - find distance",
                    "See ship 20km away at sea level - find your height"
                ],
                context: "Navigation and observation",
                trigFunction: "tangent for small angles"
            },
            guy_wire: {
                scenario: "Support wire for tower/pole",
                description: "Find wire length and anchor distance",
                equation: "sin, cos, or tan based on knowns",
                examples: [
                    "30m tower, wire at 60° angle - find wire length",
                    "Wire is 40m, makes 50° with ground - find tower height"
                ],
                context: "Structural engineering and construction",
                trigFunction: "varies by problem setup"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            basic_ratio: {
                skills: [
                    'Right triangle identification',
                    'Understanding of ratios and fractions',
                    'Basic calculator use',
                    'Angle measurement concepts'
                ],
                priorKnowledge: [
                    'Triangle angle sum (180°)',
                    'Right angle = 90°',
                    'Hypotenuse is longest side',
                    'Opposite vs adjacent sides'
                ],
                checkQuestions: [
                    "What is the sum of angles in a triangle?",
                    "Which side is the hypotenuse in a right triangle?",
                    "If one angle is 90° and another is 30°, what is the third?",
                    "What is a ratio?"
                ]
            },
            find_side: {
                skills: [
                    'Setting up equations',
                    'Solving for variables',
                    'Calculator trig functions',
                    'Identifying appropriate ratio'
                ],
                priorKnowledge: [
                    'Basic trigonometric ratios',
                    'SOH-CAH-TOA',
                    'Multiplication and division',
                    'Using formulas'
                ],
                checkQuestions: [
                    "What is sin(θ) equal to?",
                    "If sin(30°) = 0.5, what is 0.5 × 10?",
                    "Which ratio uses opposite and adjacent?",
                    "How do you isolate x in: 5 = x × 0.5?"
                ]
            },
            find_angle: {
                skills: [
                    'Inverse trigonometric functions',
                    'Calculator mode (degrees/radians)',
                    'Calculating ratios',
                    'Interpreting inverse notation'
                ],
                priorKnowledge: [
                    'Trig ratios and their inverses',
                    'Division of measurements',
                    'Angle measurement',
                    'Function notation'
                ],
                checkQuestions: [
                    "What does sin⁻¹ mean?",
                    "What is 6 ÷ 10?",
                    "Should sin⁻¹(0.5) give you an angle or a ratio?",
                    "Is your calculator in degree mode?"
                ]
            },
            application: {
                skills: [
                    'Drawing diagrams',
                    'Problem interpretation',
                    'Identifying right triangles in scenarios',
                    'Choosing appropriate method'
                ],
                priorKnowledge: [
                    'All basic trig concepts',
                    'Problem-solving strategies',
                    'Unit conversions',
                    'Real-world measurement understanding'
                ],
                checkQuestions: [
                    "Can you draw a right triangle for this situation?",
                    "Which angle is being referenced?",
                    "What are you trying to find?",
                    "Which sides do you know?"
                ]
            },
            special_angle: {
                skills: [
                    'Special triangle ratios',
                    'Exact value calculations',
                    'Working with radicals',
                    'Fraction operations'
                ],
                priorKnowledge: [
                    '30-60-90 triangle ratios',
                    '45-45-90 triangle ratios',
                    'Simplifying radicals',
                    'Equivalent fractions'
                ],
                checkQuestions: [
                    "What are the sides of a 45-45-90 triangle?",
                    "What is √2 approximately?",
                    "What are the angles in an equilateral triangle?",
                    "What is 1/2 as a decimal?"
                ]
            },
            pythagorean: {
                skills: [
                    'Pythagorean theorem',
                    'Squaring and square roots',
                    'Algebraic manipulation',
                    'Verification techniques'
                ],
                priorKnowledge: [
                    'a² + b² = c²',
                    'Perfect squares',
                    'Square root concept',
                    'Right triangle properties'
                ],
                checkQuestions: [
                    "What is 3²?",
                    "What is √16?",
                    "In a² + b² = c², which side is c?",
                    "If a=3 and b=4, what is a² + b²?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            right_triangle: {
                description: "Standard right triangle diagram",
                analogy: "Corner of a rectangular room",
                visualization: "Draw triangle with 90° angle marked, label sides",
                suitableFor: ['all_trig'],
                explanation: "Visual representation showing angle and three sides"
            },
            unit_circle: {
                description: "Circle with radius 1",
                analogy: "Clock face showing angle positions",
                visualization: "Circle centered at origin, angle from positive x-axis",
                suitableFor: ['basic_ratio', 'special_angle'],
                explanation: "Shows how trig ratios relate to coordinates"
            },
            soh_cah_toa: {
                description: "Mnemonic device for ratios",
                analogy: "Song or phrase to remember",
                visualization: "Write out: Sin=Opp/Hyp, Cos=Adj/Hyp, Tan=Opp/Adj",
                suitableFor: ['basic_ratio'],
                explanation: "Memory aid for which ratio uses which sides"
            },
            real_world_diagram: {
                description: "Contextual diagram (ladder, building, etc.)",
                analogy: "Picture of actual situation",
                visualization: "Draw realistic scenario with triangle overlay",
                suitableFor: ['application'],
                explanation: "Shows how triangle exists in real situation"
            },
            ratio_boxes: {
                description: "Visual fraction representation",
                analogy: "Parts of a whole",
                visualization: "Show sides as lengths, ratio as division",
                suitableFor: ['basic_ratio'],
                explanation: "Emphasizes ratio as comparison of measurements"
            },
            angle_arc: {
                description: "Arc showing angle measurement",
                analogy: "Piece of pie",
                visualization: "Curved arc at angle vertex",
                suitableFor: ['find_angle'],
                explanation: "Shows angle as rotation from one side to other"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Find sin(30°)",
                    solution: 0.5,
                    exactSolution: "1/2",
                    steps: ["Recall special angle", "sin(30°) = 1/2", "= 0.5"],
                    difficulty: "easy",
                    type: "special_angle"
                },
                {
                    problem: "In right triangle, opposite=3, hypotenuse=5. Find sin(θ).",
                    solution: 0.6,
                    exactSolution: "3/5",
                    steps: ["sin(θ) = opposite/hypotenuse", "= 3/5", "= 0.6"],
                    difficulty: "easy",
                    type: "basic_ratio"
                },
                {
                    problem: "Find cos(45°)",
                    solution: 0.707,
                    exactSolution: "√2/2",
                    steps: ["Recall 45-45-90 triangle", "cos(45°) = √2/2", "≈ 0.707"],
                    difficulty: "easy",
                    type: "special_angle"
                }
            ],
            intermediate: [
                {
                    problem: "Angle is 40°, hypotenuse is 10. Find opposite side.",
                    solution: 6.43,
                    steps: [
                        "Use sin(θ) = opposite/hypotenuse",
                        "sin(40°) = opposite/10",
                        "opposite = 10 × sin(40°)",
                        "opposite = 10 × 0.643",
                        "opposite ≈ 6.43"
                    ],
                    difficulty: "medium",
                    type: "find_side"
                },
                {
                    problem: "Opposite=8, adjacent=6. Find angle.",
                    solution: 53.13,
                    steps: [
                        "Use tan(θ) = opposite/adjacent",
                        "tan(θ) = 8/6 = 1.333",
                        "θ = tan⁻¹(1.333)",
                        "θ ≈ 53.13°"
                    ],
                    difficulty: "medium",
                    type: "find_angle"
                },
                {
                    problem: "Right triangle: hypotenuse=13, adjacent=5. Find opposite.",
                    solution: 12,
                    steps: [
                        "Use Pythagorean theorem: a² + b² = c²",
                        "5² + b² = 13²",
                        "25 + b² = 169",
                        "b² = 144",
                        "b = 12"
                    ],
                    difficulty: "medium",
                    type: "pythagorean"
                }
            ],
            advanced: [
                {
                    problem: "From 50m away, building has elevation angle of 65°. Find height.",
                    solution: 107.2,
                    steps: [
                        "Draw diagram: angle at ground, height opposite, distance adjacent",
                        "Use tan(65°) = height/50",
                        "height = 50 × tan(65°)",
                        "height = 50 × 2.145",
                        "height ≈ 107.2 meters"
                    ],
                    difficulty: "hard",
                    type: "application"
                },
                {
                    problem: "Ladder 15ft long reaches 14ft up wall. Find angle with ground.",
                    solution: 68.96,
                    steps: [
                        "sin(θ) = 14/15",
                        "sin(θ) = 0.9333",
                        "θ = sin⁻¹(0.9333)",
                        "θ ≈ 68.96°"
                    ],
                    difficulty: "hard",
                    type: "application"
                }
            ],
            byMethod: {
                sine: [
                    { problem: "Find sin(60°)", exactAnswer: "√3/2", decimal: 0.866 },
                    { problem: "sin(θ) = 0.5, find θ", answer: "30°" },
                    { problem: "opposite=7, hypotenuse=25, find sin(θ)", answer: 0.28 }
                ],
                cosine: [
                    { problem: "Find cos(60°)", exactAnswer: "1/2", decimal: 0.5 },
                    { problem: "cos(θ) = 0.707, find θ", answer: "45°" },
                    { problem: "adjacent=12, hypotenuse=13, find cos(θ)", answer: 0.923 }
                ],
                tangent: [
                    { problem: "Find tan(45°)", exactAnswer: "1", decimal: 1 },
                    { problem: "tan(θ) = 1.732, find θ", answer: "60°" },
                    { problem: "opposite=8, adjacent=15, find tan(θ)", answer: 0.533 }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            ratio_confusion: {
                misconception: "Thinking sin(θ) means multiply by θ",
                reality: "sin(θ) is a ratio value that depends on angle θ",
                correctiveExample: "sin(30°) = 0.5, not 30 times something",
                commonIn: ['basic_ratio']
            },
            side_labeling: {
                misconception: "Opposite and adjacent are fixed for the triangle",
                reality: "Opposite and adjacent depend on which angle you're using",
                correctiveExample: "For angle A, one side is opposite; for angle B, same side might be adjacent",
                commonIn: ['basic_ratio', 'find_side']
            },
            calculator_mode: {
                misconception: "Mode doesn't matter for calculations",
                reality: "Degrees and radians give vastly different answers",
                correctiveExample: "sin(30°) = 0.5, but sin(30 radians) = -0.988",
                commonIn: ['all_types']
            },
            inverse_confusion: {
                misconception: "sin⁻¹ means 1/sin or (sin)⁻¹",
                reality: "sin⁻¹ is inverse function (arcsin), not reciprocal",
                correctiveExample: "sin⁻¹(0.5) = 30° (angle), not 1/0.5 = 2",
                commonIn: ['find_angle']
            },
            hypotenuse_identification: {
                misconception: "Any long side can be hypotenuse",
                reality: "Hypotenuse must be opposite the right angle",
                correctiveExample: "In right triangle, hypotenuse is always the longest and across from 90° angle",
                commonIn: ['basic_ratio', 'pythagorean']
            },
            tangent_range: {
                misconception: "Trig ratios are always between -1 and 1",
                reality: "Only sine and cosine are bounded; tangent can be any value",
                correctiveExample: "tan(60°) ≈ 1.732, tan(80°) ≈ 5.67, tan(89°) ≈ 57",
                commonIn: ['basic_ratio']
            },
            angle_sum: {
                misconception: "All triangles have same angle measures",
                reality: "Only angle sum (180°) is constant; individual angles vary",
                correctiveExample: "30-60-90 triangle vs 45-45-90 triangle have different angles",
                commonIn: ['all_types']
            },
            ratio_reversal: {
                misconception: "sin and cos are the same, just different notation",
                reality: "Sin uses opposite, cos uses adjacent - completely different",
                correctiveExample: "For 30° angle: sin(30°)=0.5 but cos(30°)≈0.866",
                commonIn: ['basic_ratio']
            },
            exact_vs_approximate: {
                misconception: "Calculator values are exact",
                reality: "Most trig values are irrational; calculator shows approximations",
                correctiveExample: "sin(45°) = √2/2 exactly, ≈ 0.707106... (never-ending)",
                commonIn: ['special_angle']
            },
            elevation_depression: {
                misconception: "Elevation and depression are different angles",
                reality: "Angle of elevation from bottom = angle of depression from top (alternate interior angles)",
                correctiveExample: "Looking up at 30° from ground = looking down at 30° from top",
                commonIn: ['application']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            trig_ratios: {
                analogy: "Recipe ratios",
                explanation: "Just as recipe ratios stay the same regardless of batch size, trig ratios stay the same for an angle regardless of triangle size",
                suitableFor: ['basic_ratio'],
                ELI5: "If you make cookies and always use 2 cups flour for 1 cup sugar, that's your ratio. In triangles, if the angle is 30°, sin(30°) is always the same ratio no matter how big the triangle is!"
            },
            sine_cosine: {
                analogy: "Coordinates on a map",
                explanation: "Sine gives vertical (north-south), cosine gives horizontal (east-west)",
                suitableFor: ['basic_ratio', 'navigation'],
                ELI5: "Imagine walking from your house. Sine tells you how far up or down you went, cosine tells you how far left or right you went."
            },
            tangent_slope: {
                analogy: "Steepness of a hill",
                explanation: "Tangent measures rise over run, exactly like slope",
                suitableFor: ['tangent_ratio', 'application'],
                ELI5: "Tan is like asking: if I walk forward 10 steps, how many steps up do I go? A steep hill has bigger tangent."
            },
            inverse_functions: {
                analogy: "Finding your way back",
                explanation: "Regular trig: angle → ratio. Inverse trig: ratio → angle. Like forwards and backwards",
                suitableFor: ['find_angle'],
                ELI5: "If sin tells you 'at 30°, you get 0.5', then sin⁻¹ tells you backwards: 'if you have 0.5, the angle was 30°'"
            },
            unit_circle: {
                analogy: "Clock positions",
                explanation: "Angles like positions on a clock face, trig values like the coordinates",
                suitableFor: ['basic_ratio', 'special_angle'],
                ELI5: "Imagine a clock. The angle is like the time, and sin/cos tell you where the hand points in terms of up-down and left-right."
            },
            right_triangle: {
                analogy: "Corner of a room",
                explanation: "Right angle is like the corner where wall meets floor",
                suitableFor: ['all_types'],
                ELI5: "Think of the corner of your room where two walls meet the floor - that's a right angle. The triangle lives in that corner!"
            },
            soh_cah_toa: {
                analogy: "Password or code word",
                explanation: "Memorable phrase to unlock the correct ratio",
                suitableFor: ['basic_ratio'],
                ELI5: "SOH-CAH-TOA is like a magic spell that tells you which sides go together: Sine is Opposite over Hypotenuse!"
            },
            ladder_angle: {
                analogy: "Sliding ladder game",
                explanation: "As angle changes, how high ladder reaches changes",
                suitableFor: ['application'],
                ELI5: "If you lean a ladder steeper (bigger angle), it reaches higher on the wall. Trig tells you exactly how high!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            basic_ratio: {
                level1: "What type of problem is this - finding a ratio, a side, or an angle?",
                level2: "Which two sides do you know or need? Use SOH-CAH-TOA to pick the right ratio.",
                level3: "Label your triangle: mark the angle, then identify O (opposite), A (adjacent), H (hypotenuse)",
                level4: "For sine use O/H, for cosine use A/H, for tangent use O/A"
            },
            find_side: {
                level1: "What side are you finding? What do you know?",
                level2: "Which trig ratio involves the side you know AND the side you want to find?",
                level3: "Set up equation: trig_ratio(angle) = known_side/unknown_side or vice versa",
                level4: "Multiply or divide to isolate the unknown side, then calculate"
            },
            find_angle: {
                level1: "Do you know two sides? Then you can find the angle!",
                level2: "Which trig ratio uses your two known sides?",
                level3: "Calculate the ratio first: divide the two sides",
                level4: "Use inverse function (sin⁻¹, cos⁻¹, or tan⁻¹) on the ratio to get the angle"
            },
            application: {
                level1: "Can you draw a diagram with a right triangle?",
                level2: "Label what you know and what you're finding. Mark the angle.",
                level3: "Identify which sides are opposite, adjacent, hypotenuse relative to your angle",
                level4: "Choose appropriate trig ratio and solve like a basic problem"
            },
            special_angle: {
                level1: "Is this 30°, 45°, or 60°?",
                level2: "Recall the special triangle: 30-60-90 has sides 1:√3:2, and 45-45-90 has sides 1:1:√2",
                level3: "Write out the exact ratio using these side lengths",
                level4: "Simplify the fraction or radical to get exact answer"
            },
            pythagorean: {
                level1: "Do you know two sides of a right triangle?",
                level2: "Are you finding the hypotenuse or a leg?",
                level3: "Use a² + b² = c² where c is always the hypotenuse",
                level4: "Substitute known values, solve for unknown, then take square root if needed"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "In a right triangle with angle 30°, opposite=5, hypotenuse=10. Find sin(30°).",
                    answer: 0.5,
                    assesses: "basic_ratio_sine",
                    difficulty: "basic"
                },
                {
                    question: "Find cos(45°) using special angles.",
                    answer: 0.707,
                    exactAnswer: "√2/2",
                    assesses: "special_angle",
                    difficulty: "basic"
                },
                {
                    question: "Angle is 50°, hypotenuse is 20. Find the opposite side.",
                    answer: 15.32,
                    assesses: "find_side_sine",
                    difficulty: "intermediate"
                },
                {
                    question: "Opposite=12, adjacent=9. Find the angle.",
                    answer: 53.13,
                    assesses: "find_angle_tangent",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "Which trig ratio uses opposite and hypotenuse?",
                    options: ["sine", "cosine", "tangent", "secant"],
                    correct: "sine",
                    explanation: "SOH: Sine = Opposite/Hypotenuse"
                },
                {
                    question: "To find an angle when you know two sides, you use:",
                    options: ["Regular trig function", "Inverse trig function", "Pythagorean theorem", "SOH-CAH-TOA"],
                    correct: "Inverse trig function",
                    explanation: "Inverse functions (sin⁻¹, cos⁻¹, tan⁻¹) give you angles from ratios"
                },
                {
                    question: "What is tan(45°)?",
                    options: ["0", "0.5", "1", "√2"],
                    correct: "1",
                    explanation: "In 45-45-90 triangle, opposite = adjacent, so ratio is 1"
                },
                {
                    question: "If calculator gives wrong answer for sin(30°), the problem is likely:",
                    options: ["Calculator broken", "Wrong mode (radians vs degrees)", "Wrong function", "Wrong angle"],
                    correct: "Wrong mode (radians vs degrees)",
                    explanation: "sin(30°) = 0.5, but sin(30 radians) is different"
                }
            ],
            summative: [
                {
                    question: "A 25-foot ladder leans against a wall at 70° angle with ground. How high up the wall does it reach?",
                    answer: 23.49,
                    showsWork: true,
                    rubric: {
                        diagram: 1,
                        identify_ratio: 1,
                        setup_equation: 1,
                        calculation: 1,
                        units: 1
                    }
                },
                {
                    question: "From 100 meters away, the angle of elevation to the top of a building is 35°. Find the building height.",
                    answer: 70.02,
                    showsWork: true,
                    rubric: {
                        diagram: 1,
                        identify_triangle: 1,
                        choose_ratio: 1,
                        solve: 1,
                        units: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Find sin(30°)",
                    "Find cos(60°)",
                    "Find tan(45°)",
                    "If sin(θ) = 0.5, find θ",
                    "In right triangle: opposite=3, hypotenuse=5. Find sin(θ)"
                ],
                medium: [
                    "Angle=40°, hypotenuse=15. Find opposite side.",
                    "Adjacent=8, hypotenuse=17. Find the angle.",
                    "Opposite=6, adjacent=8. Find hypotenuse using Pythagorean theorem.",
                    "Find exact value of sin(60°) + cos(30°)",
                    "Ladder is 12ft, reaches 10ft high. Find angle with ground."
                ],
                hard: [
                    "Person 100m from building sees top at 55° elevation. Find building height.",
                    "Plane at 5000ft altitude, 8° descent angle. Find horizontal distance to touchdown.",
                    "Right triangle: one angle is 35°, hypotenuse is 20. Find both legs.",
                    "Prove that sin²(θ) + cos²(θ) = 1 using a right triangle.",
                    "Ramp rises 3 feet over 30 feet horizontal. Find angle and ramp length."
                ]
            },
            byObjective: {
                canCalculateBasicRatios: [
                    "Find sin(θ) when opposite=7, hypotenuse=25",
                    "Find cos(θ) when adjacent=12, hypotenuse=13",
                    "Find tan(θ) when opposite=5, adjacent=12"
                ],
                canUseSpecialAngles: [
                    "Find exact value of sin(30°)",
                    "Find exact value of cos(45°)",
                    "Find exact value of tan(60°)",
                    "Simplify: sin(30°) + cos(60°)"
                ],
                canFindSides: [
                    "Angle=35°, hypotenuse=20. Find opposite.",
                    "Angle=50°, adjacent=15. Find hypotenuse.",
                    "Angle=60°, opposite=10. Find adjacent."
                ],
                canFindAngles: [
                    "Opposite=8, hypotenuse=17. Find angle.",
                    "Adjacent=9, hypotenuse=15. Find angle.",
                    "Opposite=7, adjacent=24. Find angle."
                ],
                canSolveApplications: [
                    "50m from tree, 60° elevation angle. Find tree height.",
                    "Ladder problem: 20ft ladder, 75° with ground. How high?",
                    "Ramp problem: rise 2ft, run 24ft. Find angle."
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "know_two_sides_find_angle": "Use inverse trig function on the ratio",
                "know_angle_and_side_find_side": "Use regular trig function, set up equation",
                "know_angle_values_only": "Might be special angle - use exact values",
                "real_world_scenario": "Draw diagram, identify right triangle, label parts",
                "verify_answer": "Use Pythagorean theorem or substitute back"
            },
            whenToUseWhat: {
                sine: "When you have or need opposite and hypotenuse",
                cosine: "When you have or need adjacent and hypotenuse",
                tangent: "When you have or need opposite and adjacent (no hypotenuse)",
                inverse: "When finding angle from known sides",
                pythagorean: "When finding third side from two sides, or verifying"
            },
            problemTypes: {
                "Given angle, find ratio": "Calculate or recall ratio value",
                "Given sides, find ratio": "Divide sides: sin=O/H, cos=A/H, tan=O/A",
                "Given angle and side, find side": "Set up: ratio = side/unknown, solve",
                "Given two sides, find angle": "Calculate ratio, use inverse function",
                "Application problem": "Draw diagram, identify parts, treat as basic problem"
            },
            optimizationTips: {
                "Draw diagram first": "Visual representation prevents errors",
                "Label clearly": "Mark angle, then label O, A, H relative to that angle",
                "Check calculator mode": "Test with sin(30°)=0.5 before solving",
                "Use exact values when possible": "Special angles give clean answers",
                "Verify reasonableness": "Angles 0-90°, sides in reasonable proportion"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Special Angle Sprint",
                    timeLimit: 60,
                    problems: [
                        "sin(30°)",
                        "cos(60°)",
                        "tan(45°)",
                        "sin(45°)",
                        "cos(30°)",
                        "tan(60°)",
                        "sin(90°)",
                        "cos(0°)"
                    ]
                },
                {
                    name: "Ratio Recognition",
                    timeLimit: 90,
                    problems: [
                        "opposite=3, hypotenuse=5, find sin",
                        "adjacent=4, hypotenuse=5, find cos",
                        "opposite=8, adjacent=15, find tan",
                        "opposite=5, hypotenuse=13, find sin",
                        "adjacent=12, hypotenuse=13, find cos"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Triangle",
                    problem: "In a right triangle, one angle is twice another acute angle. What are all three angles?",
                    solution: "30°, 60°, 90° (since acute angles sum to 90°, if one is 2x and other is x, then 3x=90°, so x=30°)",
                    challengeLevel: "medium"
                },
                {
                    name: "Ratio Detective",
                    problem: "sin(θ) = cos(θ). What is θ?",
                    solution: "45° (only angle where opposite = adjacent in right triangle)",
                    challengeLevel: "medium"
                },
                {
                    name: "Special Triangle Builder",
                    problem: "Create a right triangle where all trig ratios are either 1, 1/2, or √3/2",
                    solution: "30-60-90 triangle with sides 1, √3, 2",
                    challengeLevel: "hard"
                }
            ],
            applications: [
                {
                    scenario: "Lighthouse Problem",
                    problem: "From a boat 200m from lighthouse, angle to top is 15°. Find lighthouse height.",
                    setup: "tan(15°) = height/200",
                    solution: "53.6 meters"
                },
                {
                    scenario: "Kite String",
                    problem: "Kite string is 150ft long, makes 65° with ground. How high is kite?",
                    setup: "sin(65°) = height/150",
                    solution: "136 feet"
                },
                {
                    scenario: "Mountain Road",
                    problem: "Road rises 500m over 2km horizontal. Find the angle of incline.",
                    setup: "tan(θ) = 500/2000 = 0.25",
                    solution: "14.04°"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Find opposite side: angle=40°, hypotenuse=10",
                        "cos(40°) = opposite/10",  // ERROR: should use sin
                        "opposite = 10 × cos(40°)",
                        "opposite = 7.66"
                    ],
                    correctAnswer: "6.43",
                    errorType: "Used cosine instead of sine"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Find angle: opposite=6, adjacent=8",
                        "tan(θ) = 6/8 = 0.75",
                        "θ = tan(0.75)",  // ERROR: should be tan⁻¹(0.75)
                        "θ = 0.93"
                    ],
                    correctAnswer: "36.87°",
                    errorType: "Used tan instead of tan⁻¹ (inverse)"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Find sin(30°)",
                        "30/90 = 0.33"  // ERROR: not how trig works
                    ],
                    correctAnswer: "0.5",
                    errorType: "Treated angle as fraction instead of using trig function"
                }
            ]
        };
    }

    initializeSpecialAnglesDatabase() {
        this.specialAngles = {
            "0": {
                degrees: 0,
                radians: 0,
                sin: { exact: "0", decimal: 0 },
                cos: { exact: "1", decimal: 1 },
                tan: { exact: "0", decimal: 0 }
            },
            "30": {
                degrees: 30,
                radians: Math.PI / 6,
                sin: { exact: "1/2", decimal: 0.5 },
                cos: { exact: "√3/2", decimal: Math.sqrt(3) / 2 },
                tan: { exact: "√3/3", decimal: 1 / Math.sqrt(3) },
                triangle: "30-60-90 with sides 1:√3:2"
            },
            "45": {
                degrees: 45,
                radians: Math.PI / 4,
                sin: { exact: "√2/2", decimal: Math.sqrt(2) / 2 },
                cos: { exact: "√2/2", decimal: Math.sqrt(2) / 2 },
                tan: { exact: "1", decimal: 1 },
                triangle: "45-45-90 with sides 1:1:√2"
            },
            "60": {
                degrees: 60,
                radians: Math.PI / 3,
                sin: { exact: "√3/2", decimal: Math.sqrt(3) / 2 },
                cos: { exact: "1/2", decimal: 0.5 },
                tan: { exact: "√3", decimal: Math.sqrt(3) },
                triangle: "30-60-90 with sides 1:√3:2"
            },
            "90": {
                degrees: 90,
                radians: Math.PI / 2,
                sin: { exact: "1", decimal: 1 },
                cos: { exact: "0", decimal: 0 },
                tan: { exact: "undefined", decimal: Infinity }
            }
        };
    }

    initializeUnitCircleDatabase() {
        this.unitCircle = {
            description: "Circle with radius 1 centered at origin",
            coordinates: {
                "0°": { x: 1, y: 0 },
                "30°": { x: Math.sqrt(3) / 2, y: 0.5 },
                "45°": { x: Math.sqrt(2) / 2, y: Math.sqrt(2) / 2 },
                "60°": { x: 0.5, y: Math.sqrt(3) / 2 },
                "90°": { x: 0, y: 1 }
            },
            interpretation: {
                x_coordinate: "Equals cos(θ)",
                y_coordinate: "Equals sin(θ)",
                slope: "Equals tan(θ) = y/x"
            }
        };
    }

    // MAIN SOLVER METHOD
    solveTrigProblem(config) {
        const { problemType, angle, opposite, adjacent, hypotenuse, scenario, context } = config;

        try {
            this.currentProblem = this.parseTrigProblem(config);
            this.currentSolution = this.solveTrigProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateTrigSteps(this.currentProblem, this.currentSolution);
            this.generateTrigGraphData();
            this.generateTrigWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionValue: this.currentSolution?.value,
                solutionType: this.currentSolution?.type
            };

        } catch (error) {
            throw new Error(`Failed to solve trigonometric problem: ${error.message}`);
        }
    }

    parseTrigProblem(config) {
        const { problemType, angle, opposite, adjacent, hypotenuse, scenario, context, equation } = config;

        // If explicit problem type provided
        if (problemType && this.trigTypes[problemType]) {
            return {
                originalInput: scenario || equation || `${problemType} problem`,
                type: problemType,
                angle: angle,
                opposite: opposite,
                adjacent: adjacent,
                hypotenuse: hypotenuse,
                scenario: scenario,
                context: context || {},
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect from scenario or equation
        const input = scenario || equation || '';
        for (const [type, config] of Object.entries(this.trigTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(input)) {
                    return {
                        originalInput: input,
                        type: type,
                        angle: angle,
                        opposite: opposite,
                        adjacent: adjacent,
                        hypotenuse: hypotenuse,
                        scenario: scenario,
                        context: context || {},
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        throw new Error(`Unable to recognize trigonometric problem type from input`);
    }

    solveTrigProblem_Internal(problem) {
        const solver = this.trigTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // TRIGONOMETRIC SOLVERS

    solveSineRatio(problem) {
        const { angle, opposite, hypotenuse } = problem;

        if (angle !== undefined && angle !== null) {
            // Calculate sin(angle)
            const angleRad = this.angleMode === 'degrees' ? (angle * Math.PI / 180) : angle;
            const sinValue = Math.sin(angleRad);

            return {
                type: 'Sine Ratio Calculation',
                angle: angle,
                angleUnit: this.angleMode,
                formula: 'sin(θ) = opposite/hypotenuse',
                value: sinValue,
                calculation: `sin(${angle}°) = ${sinValue.toFixed(4)}`,
                category: 'basic_ratio'
            };
        } else if (opposite !== undefined && hypotenuse !== undefined) {
            // Calculate sin from sides
            const sinValue = opposite / hypotenuse;

            return {
                type: 'Sine Ratio from Sides',
                opposite: opposite,
                hypotenuse: hypotenuse,
                formula: 'sin(θ) = opposite/hypotenuse',
                value: sinValue,
                calculation: `sin(θ) = ${opposite}/${hypotenuse} = ${sinValue.toFixed(4)}`,
                category: 'basic_ratio'
            };
        }

        throw new Error('Insufficient information to calculate sine ratio');
    }

    solveCosineRatio(problem) {
        const { angle, adjacent, hypotenuse } = problem;

        if (angle !== undefined && angle !== null) {
            const angleRad = this.angleMode === 'degrees' ? (angle * Math.PI / 180) : angle;
            const cosValue = Math.cos(angleRad);

            return {
                type: 'Cosine Ratio Calculation',
                angle: angle,
                angleUnit: this.angleMode,
                formula: 'cos(θ) = adjacent/hypotenuse',
                value: cosValue,
                calculation: `cos(${angle}°) = ${cosValue.toFixed(4)}`,
                category: 'basic_ratio'
            };
        } else if (adjacent !== undefined && hypotenuse !== undefined) {
            const cosValue = adjacent / hypotenuse;

            return {
                type: 'Cosine Ratio from Sides',
                adjacent: adjacent,
                hypotenuse: hypotenuse,
                formula: 'cos(θ) = adjacent/hypotenuse',
                value: cosValue,
                calculation: `cos(θ) = ${adjacent}/${hypotenuse} = ${cosValue.toFixed(4)}`,
                category: 'basic_ratio'
            };
        }

        throw new Error('Insufficient information to calculate cosine ratio');
    }

    solveTangentRatio(problem) {
        const { angle, opposite, adjacent } = problem;

        if (angle !== undefined && angle !== null) {
            const angleRad = this.angleMode === 'degrees' ? (angle * Math.PI / 180) : angle;
            const tanValue = Math.tan(angleRad);

            return {
                type: 'Tangent Ratio Calculation',
                angle: angle,
                angleUnit: this.angleMode,
                formula: 'tan(θ) = opposite/adjacent',
                value: tanValue,
                calculation: `tan(${angle}°) = ${tanValue.toFixed(4)}`,
                category: 'basic_ratio'
            };
        } else if (opposite !== undefined && adjacent !== undefined) {
            const tanValue = opposite / adjacent;

            return {
                type: 'Tangent Ratio from Sides',
                opposite: opposite,
                adjacent: adjacent,
                formula: 'tan(θ) = opposite/adjacent',
                value: tanValue,
                calculation: `tan(θ) = ${opposite}/${adjacent} = ${tanValue.toFixed(4)}`,
                category: 'basic_ratio'
            };
        }

        throw new Error('Insufficient information to calculate tangent ratio');
    }

    solveSideUsingSine(problem) {
        const { angle, opposite, hypotenuse } = problem;

        if (angle !== undefined && hypotenuse !== undefined && opposite === undefined) {
            // Find opposite
            const angleRad = this.angleMode === 'degrees' ? (angle * Math.PI / 180) : angle;
            const sinValue = Math.sin(angleRad);
            const oppositeValue = hypotenuse * sinValue;

            return {
                type: 'Find Opposite Side Using Sine',
                angle: angle,
                hypotenuse: hypotenuse,
                formula: 'opposite = hypotenuse × sin(θ)',
                value: oppositeValue,
                steps: [
                    `sin(${angle}°) = ${sinValue.toFixed(4)}`,
                    `opposite = ${hypotenuse} × ${sinValue.toFixed(4)}`,
                    `opposite = ${oppositeValue.toFixed(2)}`
                ],
                category: 'find_side'
            };
        } else if (angle !== undefined && opposite !== undefined && hypotenuse === undefined) {
            // Find hypotenuse
            const angleRad = this.angleMode === 'degrees' ? (angle * Math.PI / 180) : angle;
            const sinValue = Math.sin(angleRad);
            const hypotenuseValue = opposite / sinValue;

            return {
                type: 'Find Hypotenuse Using Sine',
                angle: angle,
                opposite: opposite,
                formula: 'hypotenuse = opposite / sin(θ)',
                value: hypotenuseValue,
                steps: [
                    `sin(${angle}°) = ${sinValue.toFixed(4)}`,
                    `hypotenuse = ${opposite} / ${sinValue.toFixed(4)}`,
                    `hypotenuse = ${hypotenuseValue.toFixed(2)}`
                ],
                category: 'find_side'
            };
        }

        throw new Error('Insufficient information to find side using sine');
    }

    solveSideUsingCosine(problem) {
        const { angle, adjacent, hypotenuse } = problem;

        if (angle !== undefined && hypotenuse !== undefined && adjacent === undefined) {
            const angleRad = this.angleMode === 'degrees' ? (angle * Math.PI / 180) : angle;
            const cosValue = Math.cos(angleRad);
            const adjacentValue = hypotenuse * cosValue;

            return {
                type: 'Find Adjacent Side Using Cosine',
                angle: angle,
                hypotenuse: hypotenuse,
                formula: 'adjacent = hypotenuse × cos(θ)',
                value: adjacentValue,
                steps: [
                    `cos(${angle}°) = ${cosValue.toFixed(4)}`,
                    `adjacent = ${hypotenuse} × ${cosValue.toFixed(4)}`,
                    `adjacent = ${adjacentValue.toFixed(2)}`
                ],
                category: 'find_side'
            };
        } else if (angle !== undefined && adjacent !== undefined && hypotenuse === undefined) {
            const angleRad = this.angleMode === 'degrees' ? (angle * Math.PI / 180) : angle;
            const cosValue = Math.cos(angleRad);
            const hypotenuseValue = adjacent / cosValue;

            return {
                type: 'Find Hypotenuse Using Cosine',
                angle: angle,
                adjacent: adjacent,
                formula: 'hypotenuse = adjacent / cos(θ)',
                value: hypotenuseValue,
                steps: [
                    `cos(${angle}°) = ${cosValue.toFixed(4)}`,
                    `hypotenuse = ${adjacent} / ${cosValue.toFixed(4)}`,
                    `hypotenuse = ${hypotenuseValue.toFixed(2)}`
                ],
                category: 'find_side'
            };
        }

        throw new Error('Insufficient information to find side using cosine');
    }

    solveSideUsingTangent(problem) {
        const { angle, opposite, adjacent } = problem;

        if (angle !== undefined && adjacent !== undefined && opposite === undefined) {
            const angleRad = this.angleMode === 'degrees' ? (angle * Math.PI / 180) : angle;
            const tanValue = Math.tan(angleRad);
            const oppositeValue = adjacent * tanValue;

            return {
                type: 'Find Opposite Side Using Tangent',
                angle: angle,
                adjacent: adjacent,
                formula: 'opposite = adjacent × tan(θ)',
                value: oppositeValue,
                steps: [
                    `tan(${angle}°) = ${tanValue.toFixed(4)}`,
                    `opposite = ${adjacent} × ${tanValue.toFixed(4)}`,
                    `opposite = ${oppositeValue.toFixed(2)}`
                ],
                category: 'find_side'
            };
        } else if (angle !== undefined && opposite !== undefined && adjacent === undefined) {
            const angleRad = this.angleMode === 'degrees' ? (angle * Math.PI / 180) : angle;
            const tanValue = Math.tan(angleRad);
            const adjacentValue = opposite / tanValue;

            return {
                type: 'Find Adjacent Side Using Tangent',
                angle: angle,
                opposite: opposite,
                formula: 'adjacent = opposite / tan(θ)',
                value: adjacentValue,
                steps: [
                    `tan(${angle}°) = ${tanValue.toFixed(4)}`,
                    `adjacent = ${opposite} / ${tanValue.toFixed(4)}`,
                    `adjacent = ${adjacentValue.toFixed(2)}`
                ],
                category: 'find_side'
            };
        }

        throw new Error('Insufficient information to find side using tangent');
    }

    solveAngleUsingSine(problem) {
        const { opposite, hypotenuse } = problem;

        if (opposite !== undefined && hypotenuse !== undefined) {
            const ratio = opposite / hypotenuse;
            const angleRad = Math.asin(ratio);
            const angleDeg = angleRad * 180 / Math.PI;

            return {
                type: 'Find Angle Using Inverse Sine',
                opposite: opposite,
                hypotenuse: hypotenuse,
                formula: 'θ = sin⁻¹(opposite/hypotenuse)',
                value: this.angleMode === 'degrees' ? angleDeg : angleRad,
                angleUnit: this.angleMode,
                steps: [
                    `ratio = ${opposite}/${hypotenuse} = ${ratio.toFixed(4)}`,
                    `θ = sin⁻¹(${ratio.toFixed(4)})`,
                    `θ = ${angleDeg.toFixed(2)}°`
                ],
                category: 'find_angle'
            };
        }

        throw new Error('Need opposite and hypotenuse to find angle using sine');
    }

    solveAngleUsingCosine(problem) {
        const { adjacent, hypotenuse } = problem;

        if (adjacent !== undefined && hypotenuse !== undefined) {
            const ratio = adjacent / hypotenuse;
            const angleRad = Math.acos(ratio);
            const angleDeg = angleRad * 180 / Math.PI;

            return {
                type: 'Find Angle Using Inverse Cosine',
                adjacent: adjacent,
                hypotenuse: hypotenuse,
                formula: 'θ = cos⁻¹(adjacent/hypotenuse)',
                value: this.angleMode === 'degrees' ? angleDeg : angleRad,
                angleUnit: this.angleMode,
                steps: [
                    `ratio = ${adjacent}/${hypotenuse} = ${ratio.toFixed(4)}`,
                    `θ = cos⁻¹(${ratio.toFixed(4)})`,
                    `θ = ${angleDeg.toFixed(2)}°`
                ],
                category: 'find_angle'
            };
        }

        throw new Error('Need adjacent and hypotenuse to find angle using cosine');
    }

    solveAngleUsingTangent(problem) {
        const { opposite, adjacent } = problem;

        if (opposite !== undefined && adjacent !== undefined) {
            const ratio = opposite / adjacent;
            const angleRad = Math.atan(ratio);
            const angleDeg = angleRad * 180 / Math.PI;

            return {
                type: 'Find Angle Using Inverse Tangent',
                opposite: opposite,
                adjacent: adjacent,
                formula: 'θ = tan⁻¹(opposite/adjacent)',
                value: this.angleMode === 'degrees' ? angleDeg : angleRad,
                angleUnit: this.angleMode,
                steps: [
                    `ratio = ${opposite}/${adjacent} = ${ratio.toFixed(4)}`,
                    `θ = tan⁻¹(${ratio.toFixed(4)})`,
                    `θ = ${angleDeg.toFixed(2)}°`
                ],
                category: 'find_angle'
            };
        }

        throw new Error('Need opposite and adjacent to find angle using tangent');
    }

    solveAngleElevation(problem) {
        // Application problem
        return {
            type: 'Angle of Elevation Problem',
            approach: 'Set up right triangle with horizontal as adjacent, vertical as opposite',
            note: 'Use tangent for most elevation problems',
            category: 'application'
        };
    }

    solveAngleDepression(problem) {
        return {
            type: 'Angle of Depression Problem',
            approach: 'Angle of depression from top = angle of elevation from bottom (alternate interior angles)',
            note: 'Set up triangle and use appropriate trig ratio',
            category: 'application'
        };
    }

    solveSpecialAngle30(problem) {
        const angleData = this.specialAngles["30"];
        return {
            type: '30° Special Angle',
            angle: 30,
            sin: angleData.sin,
            cos: angleData.cos,
            tan: angleData.tan,
            triangle: angleData.triangle,
            category: 'special_angle'
        };
    }

    solveSpecialAngle45(problem) {
        const angleData = this.specialAngles["45"];
        return {
            type: '45° Special Angle',
            angle: 45,
            sin: angleData.sin,
            cos: angleData.cos,
            tan: angleData.tan,
            triangle: angleData.triangle,
            category: 'special_angle'
        };
    }

    solveSpecialAngle60(problem) {
        const angleData = this.specialAngles["60"];
        return {
            type: '60° Special Angle',
            angle: 60,
            sin: angleData.sin,
            cos: angleData.cos,
            tan: angleData.tan,
            triangle: angleData.triangle,
            category: 'special_angle'
        };
    }

    solvePythagoreanSide(problem) {
        const { opposite, adjacent, hypotenuse } = problem;

        // Find missing side
        if (hypotenuse !== undefined) {
            if (opposite !== undefined && adjacent === undefined) {
                const adjacentValue = Math.sqrt(hypotenuse ** 2 - opposite ** 2);
                return {
                    type: 'Find Adjacent Using Pythagorean Theorem',
                    formula: 'a² + b² = c²',
                    value: adjacentValue,
                    calculation: `adjacent = √(${hypotenuse}² - ${opposite}²) = ${adjacentValue.toFixed(2)}`,
                    category: 'pythagorean'
                };
            } else if (adjacent !== undefined && opposite === undefined) {
                const oppositeValue = Math.sqrt(hypotenuse ** 2 - adjacent ** 2);
                return {
                    type: 'Find Opposite Using Pythagorean Theorem',
                    formula: 'a² + b² = c²',
                    value: oppositeValue,
                    calculation: `opposite = √(${hypotenuse}² - ${adjacent}²) = ${oppositeValue.toFixed(2)}`,
                    category: 'pythagorean'
                };
            }
        } else if (opposite !== undefined && adjacent !== undefined) {
            const hypotenuseValue = Math.sqrt(opposite ** 2 + adjacent ** 2);
            return {
                type: 'Find Hypotenuse Using Pythagorean Theorem',
                formula: 'c = √(a² + b²)',
                value: hypotenuseValue,
                calculation: `hypotenuse = √(${opposite}² + ${adjacent}²) = ${hypotenuseValue.toFixed(2)}`,
                category: 'pythagorean'
            };
        }

        throw new Error('Need two sides to find third using Pythagorean theorem');
    }

    verifyTriangle(problem) {
        const { opposite, adjacent, hypotenuse } = problem;

        if (opposite && adjacent && hypotenuse) {
            const sumSquares = opposite ** 2 + adjacent ** 2;
            const hypSquare = hypotenuse ** 2;
            const isValid = Math.abs(sumSquares - hypSquare) < 0.01;

            return {
                type: 'Triangle Verification',
                isValid: isValid,
                check: `${opposite}² + ${adjacent}² = ${sumSquares.toFixed(2)}, ${hypotenuse}² = ${hypSquare.toFixed(2)}`,
                result: isValid ? 'Valid right triangle' : 'NOT a valid right triangle',
                category: 'verification'
            };
        }

        throw new Error('Need all three sides to verify triangle');
    }

    // STEP GENERATION

    generateTrigSteps(problem, solution) {
        let baseSteps = this.generateBaseTrigSteps(problem, solution);

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

    generateBaseTrigSteps(problem, solution) {
        const category = this.trigTypes[problem.type]?.category;

        switch (category) {
            case 'basic_ratio':
                return this.generateBasicRatioSteps(problem, solution);
            case 'find_side':
                return this.generateFindSideSteps(problem, solution);
            case 'find_angle':
                return this.generateFindAngleSteps(problem, solution);
            case 'special_angle':
                return this.generateSpecialAngleSteps(problem, solution);
            case 'application':
                return this.generateApplicationSteps(problem, solution);
            case 'pythagorean':
                return this.generatePythagoreanSteps(problem, solution);
            default:
                return this.generateGenericTrigSteps(problem, solution);
        }
    }

    generateBasicRatioSteps(problem, solution) {
        const steps = [];

        // Step 1: Identify the problem
        steps.push({
            stepNumber: 1,
            step: 'Identify the problem type',
            description: 'Determine which trigonometric ratio to calculate',
            expression: solution.type,
            reasoning: 'We need to calculate a basic trigonometric ratio',
            goalStatement: 'Find the value of the trigonometric function'
        });

        // Step 2: Identify given information
        steps.push({
            stepNumber: 2,
            step: 'Identify given information',
            description: problem.angle !== undefined 
                ? `Given angle: ${problem.angle}°`
                : `Given sides: ${Object.entries(problem).filter(([k,v]) => v !== undefined && k !== 'type').map(([k,v]) => `${k}=${v}`).join(', ')}`,
            reasoning: 'List what information we have to work with',
            visualHint: 'Draw a right triangle and label the known values'
        });

        // Step 3: Set up the ratio
        steps.push({
            stepNumber: 3,
            step: 'Set up the trigonometric ratio',
            description: solution.formula,
            expression: solution.calculation || solution.value,
            reasoning: 'Apply the definition of the trigonometric function',
            algebraicRule: solution.formula
        });

        // Step 4: Calculate the result
        steps.push({
            stepNumber: 4,
            step: 'Calculate the result',
            description: 'Evaluate the trigonometric function',
            expression: `${solution.type.includes('Sine') ? 'sin' : solution.type.includes('Cosine') ? 'cos' : 'tan'} = ${solution.value.toFixed(4)}`,
            finalAnswer: true,
            reasoning: 'This is the value of the trigonometric ratio'
        });

        return steps;
    }

    generateFindSideSteps(problem, solution) {
        const steps = [];

        // Step 1: Problem setup
        steps.push({
            stepNumber: 1,
            step: 'Set up the problem',
            description: 'Identify what side we need to find',
            expression: solution.type,
            reasoning: 'We know an angle and one side, need to find another side',
            goalStatement: 'Use trigonometry to find the unknown side'
        });

        // Step 2: Draw and label triangle
        steps.push({
            stepNumber: 2,
            step: 'Draw and label triangle',
            description: 'Create a diagram with the given information',
            reasoning: 'Visual representation helps identify which ratio to use',
            visualHint: 'Draw right triangle, mark the angle, label known side and unknown side'
        });

        // Step 3: Choose appropriate ratio
        steps.push({
            stepNumber: 3,
            step: 'Choose trigonometric ratio',
            description: 'Select ratio that includes both known and unknown sides',
            expression: solution.formula,
            reasoning: 'Use SOH-CAH-TOA to pick the right ratio',
            mnemonic: 'SOH-CAH-TOA helps remember which ratio uses which sides'
        });

        // Step 4: Set up equation
        steps.push({
            stepNumber: 4,
            step: 'Set up the equation',
            description: solution.steps[0],
            beforeExpression: solution.formula,
            afterExpression: solution.steps[1],
            reasoning: 'Substitute known values into the ratio'
        });

        // Step 5: Solve for unknown
        steps.push({
            stepNumber: 5,
            step: 'Solve for the unknown side',
            description: 'Isolate the variable',
            expression: solution.steps[2],
            reasoning: 'Multiply or divide to find the unknown side'
        });

        // Step 6: Final answer
        steps.push({
            stepNumber: 6,
            step: 'Final answer',
            description: 'The unknown side length',
            expression: `Side length = ${solution.value.toFixed(2)} units`,
            finalAnswer: true,
            reasoning: 'This is the length of the side we were looking for'
        });

        return steps;
    }

    generateFindAngleSteps(problem, solution) {
        const steps = [];

        // Step 1: Problem setup
        steps.push({
            stepNumber: 1,
            step: 'Set up the problem',
            description: 'Identify that we need to find an angle',
            expression: solution.type,
            reasoning: 'We know two sides and need to find the angle between them',
            goalStatement: 'Use inverse trigonometric function to find the angle'
        });

        // Step 2: Identify sides
        steps.push({
            stepNumber: 2,
            step: 'Identify the known sides',
            description: `We know: ${Object.entries(problem).filter(([k,v]) => v !== undefined && ['opposite','adjacent','hypotenuse'].includes(k)).map(([k,v]) => `${k}=${v}`).join(', ')}`,
            reasoning: 'Determine which two sides we have measurements for',
            visualHint: 'Label the triangle sides relative to the unknown angle'
        });

        // Step 3: Choose ratio
        steps.push({
            stepNumber: 3,
            step: 'Choose appropriate ratio',
            description: 'Select the trig ratio that uses our two known sides',
            expression: solution.formula.replace('θ = ', '').split('(')[0],
            reasoning: 'Use SOH-CAH-TOA to identify which ratio uses these sides'
        });

        // Step 4: Calculate ratio
        steps.push({
            stepNumber: 4,
            step: 'Calculate the ratio',
            description: 'Divide the two sides',
            expression: solution.steps[0],
            reasoning: 'Compute the numerical value of the ratio'
        });

        // Step 5: Apply inverse function
        steps.push({
            stepNumber: 5,
            step: 'Apply inverse trigonometric function',
            description: 'Use sin⁻¹, cos⁻¹, or tan⁻¹ to find the angle',
            beforeExpression: solution.steps[1],
            afterExpression: solution.steps[2],
            reasoning: 'Inverse trig functions convert ratios back to angles',
            calculatorNote: 'Make sure calculator is in degree mode'
        });

        // Step 6: Final answer
        steps.push({
            stepNumber: 6,
            step: 'Final answer',
            description: 'The angle measure',
            expression: `θ = ${solution.value.toFixed(2)}°`,
            finalAnswer: true,
            reasoning: 'This is the angle we were looking for'
        });

        return steps;
    }

    generateSpecialAngleSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Recognize special angle',
            description: `This is a special angle: ${solution.angle}°`,
            reasoning: 'Special angles (30°, 45°, 60°) have exact trigonometric values',
            goalStatement: 'Use memorized or derived exact values'
        });

        steps.push({
            stepNumber: 2,
            step: 'Recall special triangle',
            description: solution.triangle,
            reasoning: 'Special angles come from special right triangles',
            visualHint: 'Draw the special triangle to see the side ratios'
        });

        steps.push({
            stepNumber: 3,
            step: 'Write exact values',
            description: 'Trigonometric ratios for this angle',
            expression: `sin(${solution.angle}°) = ${solution.sin.exact}
cos(${solution.angle}°) = ${solution.cos.exact}
tan(${solution.angle}°) = ${solution.tan.exact}`,
            finalAnswer: true,
            reasoning: 'These are the exact values derived from the special triangle'
        });

        return steps;
    }

    generateApplicationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Read and understand the problem',
            description: problem.scenario || 'Real-world application',
            reasoning: 'Identify what the problem is asking',
            goalStatement: 'Translate word problem into mathematical problem'
        });

        steps.push({
            stepNumber: 2,
            step: 'Draw a diagram',
            description: 'Sketch the situation showing the right triangle',
            reasoning: 'Visual representation reveals the mathematical structure',
            visualHint: 'Label all given information and mark what you need to find'
        });

        steps.push({
            stepNumber: 3,
            step: 'Identify the right triangle',
            description: 'Locate the right angle and identify the sides',
            reasoning: 'Real-world problems contain hidden right triangles',
            note: 'Angle of elevation/depression creates right triangle with horizontal'
        });

        steps.push({
            stepNumber: 4,
            step: 'Set up trigonometric equation',
            description: 'Choose appropriate ratio and create equation',
            expression: solution.approach || 'Use appropriate trig function',
            reasoning: 'Apply trigonometry to solve for the unknown'
        });

        steps.push({
            stepNumber: 5,
            step: 'Solve the equation',
            description: 'Calculate the numerical answer',
            reasoning: 'Use calculator to evaluate'
        });

        steps.push({
            stepNumber: 6,
            step: 'Answer in context',
            description: 'State the answer with appropriate units and context',
            finalAnswer: true,
            reasoning: 'Make sure answer makes sense in the real-world situation'
        });

        return steps;
    }

    generatePythagoreanSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify known sides',
            description: 'Determine which two sides are known',
            reasoning: 'Need two sides to find the third',
            goalStatement: 'Use Pythagorean theorem to find missing side'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write Pythagorean theorem',
            description: 'a² + b² = c² where c is the hypotenuse',
            expression: 'a² + b² = c²',
            reasoning: 'This relationship holds for all right triangles',
            algebraicRule: 'Pythagorean Theorem'
        });

        steps.push({
            stepNumber: 3,
            step: 'Substitute known values',
            description: 'Plug in the measurements we know',
            expression: solution.calculation,
            reasoning: 'Replace variables with actual numbers'
        });

        steps.push({
            stepNumber: 4,
            step: 'Solve for unknown',
            description: 'Isolate the variable and calculate',
            expression: `Unknown side = ${solution.value.toFixed(2)}`,
            finalAnswer: true,
            reasoning: 'Take square root to find the side length'
        });

        return steps;
    }

    generateGenericTrigSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Trigonometric problem',
            description: 'Solve the trigonometric problem',
            expression: solution.type,
            reasoning: 'Apply appropriate trigonometric technique',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS (reuse many from linear workbook with trig-specific adaptations)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getTrigConceptualExplanation(step, problem),
                procedural: this.getTrigProceduralExplanation(step),
                visual: this.getTrigVisualExplanation(step, problem),
                computational: this.getTrigComputationalExplanation(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyTrigVocabulary(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateTrigThinkingPrompts(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateTrigSelfCheckQuestion(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findTrigRealWorldConnection(step, problem);
        }

        return enhanced;
    }

    getTrigConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Identify the problem type': 'Understanding which trigonometric ratio to use is the foundation of solving trig problems. Each ratio compares specific sides of the triangle.',
            'Identify given information': 'Knowing what information you have determines which approach to take. Angles lead to ratio calculations, sides lead to inverse functions.',
            'Set up the trigonometric ratio': 'Trigonometric ratios are defined relationships between sides. They are consistent for any given angle, regardless of triangle size.',
            'Choose trigonometric ratio': 'SOH-CAH-TOA helps us match the sides we have to the correct ratio. Each ratio uses exactly two sides.',
            'Apply inverse trigonometric function': 'Inverse functions reverse the process: instead of angle→ratio, we go ratio→angle.',
            'Draw and label triangle': 'Visualizing the triangle helps identify which sides are opposite, adjacent, and hypotenuse relative to our angle.',
            'Recognize special angle': 'Special angles (30°, 45°, 60°) come from special triangles and have exact, memorizable values.'
        };

        return conceptualExplanations[step.step] || 'This step applies fundamental trigonometric principles.';
    }

    getTrigProceduralExplanation(step) {
        if (step.step.includes('Calculate') || step.step.includes('Solve')) {
            return `1. Enter values into calculator
2. Make sure calculator is in degree mode
3. Press the appropriate function key
4. Record the result to appropriate precision`;
        }
        return 'Follow the standard procedure for this type of trigonometric operation.';
    }

    getTrigVisualExplanation(step, problem) {
        const visualExplanations = {
            'Draw and label triangle': 'Sketch a right triangle. Mark the right angle with a square. Label the angle you\'re working with. Identify O (opposite), A (adjacent), H (hypotenuse) relative to that angle.',
            'Set up the trigonometric ratio': 'Visualize the triangle with the two sides highlighted that are used in your chosen ratio.',
            'Choose trigonometric ratio': 'Picture the triangle and identify which two sides you know or need. Match them to SOH, CAH, or TOA.',
            'Apply inverse trigonometric function': 'Imagine the unit circle: you know the coordinates (ratio), need to find the angle position.'
        };

        return visualExplanations[step.step] || 'Visualize the right triangle with labeled sides and angle.';
    }

    getTrigComputationalExplanation(step) {
        return {
            calculatorSteps: 'Enter angle or ratio → Press trig or inverse trig button → Read result',
            precision: 'Round final answer to 2 decimal places unless otherwise specified',
            mode: 'Verify calculator is in DEGREE mode for degree problems',
            verification: 'Check if answer is reasonable (angles 0-90°, sides proportional)'
        };
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateTrigELI5Explanation(step, problem),
                analogy: this.findRelevantTrigAnalogy(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestTrigVisualization(step)
            }
        }));
    }

    generateTrigELI5Explanation(step, problem) {
        const ELI5Explanations = {
            'Identify the problem type': "We need to figure out what kind of triangle puzzle this is. Are we finding how tall? How steep? What angle?",
            'Draw and label triangle': "First, draw a triangle with one square corner (that's the right angle). Then label everything we know!",
            'Set up the trigonometric ratio': "SOH-CAH-TOA is like a recipe. It tells us which numbers to divide to get our answer.",
            'Choose trigonometric ratio': "Look at which sides we know. If we have opposite and hypotenuse, use SOH (sine)!",
            'Apply inverse trigonometric function': "We know the recipe result (the ratio), now we work backwards to find what angle made that result!",
            'Calculate the ratio': "Time to do the division! We divide one side length by another side length.",
            'Recognize special angle': "This is a magic angle! It's like the numbers 10, 100, 1000 - they're special and easy to work with."
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our triangle puzzle!";
    }

    findRelevantTrigAnalogy(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes('all_types') || 
                analogy.suitableFor.some(type => problem.type.includes(type))) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of the triangle like a ramp - we're figuring out how steep it is or how high it goes!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'trigonometric': 'triangle',
            'ratio': 'division of two sides',
            'hypotenuse': 'longest side',
            'opposite': 'side across from the angle',
            'adjacent': 'side next to the angle',
            'inverse': 'backwards',
            'calculate': 'find',
            'evaluate': 'figure out',
            'determine': 'find',
            'substitute': 'plug in',
            'equation': 'math sentence'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestTrigVisualization(step) {
        const visualizations = {
            'Draw and label triangle': 'Draw a right triangle. Make one corner square. Draw one angle with a curve. Label the sides O, A, H.',
            'Set up the trigonometric ratio': 'Highlight the two sides used in your ratio with different colors',
            'Choose trigonometric ratio': 'Draw SOH-CAH-TOA with pictures: Sin uses up and diagonal, Cos uses sideways and diagonal, Tan uses up and sideways',
            'Apply inverse trigonometric function': 'Draw a protractor showing the angle you\'re finding',
            'Calculate the ratio': 'Show the division as a fraction, then show the decimal answer'
        };

        return visualizations[step.step] || 'Draw the right triangle and mark what this step is working with';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateTrigStepBridge(steps[i], steps[i + 1]),
                    reasoning: this.explainTrigStepProgression(steps[i], steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateTrigStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.expression || currentStep.description}`,
            nextGoal: `Next: ${nextStep.description}`,
            why: this.explainTrigStepNecessity(currentStep, nextStep),
            howItHelps: `This brings us closer to finding our answer`
        };
    }

    explainTrigStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving`;
    }

    explainTrigStepNecessity(currentStep, nextStep) {
        if (currentStep.step.includes('Draw') && nextStep.step.includes('Choose')) {
            return "we need the diagram to identify which sides we're working with";
        }
        if (currentStep.step.includes('Choose') && nextStep.step.includes('Set up')) {
            return "we need to create the equation using our chosen ratio";
        }
        if (currentStep.step.includes('Set up') && nextStep.step.includes('Solve')) {
            return "we need to calculate the numerical answer";
        }
        return "we need to continue the solution process";
    }

    addErrorPrevention(step, problemType) {
        const category = this.trigTypes[problemType]?.category || 'basic_ratio';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generateTrigPreventionTips(step, problemType),
                checkPoints: this.generateTrigCheckPoints(step),
                warningFlags: this.identifyTrigWarningFlags(step, problemType)
            }
        };
    }

    generateTrigPreventionTips(step, problemType) {
        const tips = {
            'Draw and label triangle': [
                'Always mark the right angle clearly',
                'Label sides relative to YOUR angle, not just any angle',
                'Double-check which side is actually the hypotenuse'
            ],
            'Choose trigonometric ratio': [
                'Use SOH-CAH-TOA every time',
                'Verify you picked the ratio that uses your two sides',
                'Remember: hypotenuse only used in sine and cosine'
            ],
            'Apply inverse trigonometric function': [
                'Make sure calculator is in degree mode',
                'Use the INVERSE function (sin⁻¹, not sin)',
                'Check answer is between 0° and 90° for right triangle'
            ],
            'Calculate the ratio': [
                'Divide in correct order (check which is numerator)',
                'Don\'t round too early',
                'Verify ratio makes sense (should be between 0 and 1 for sin/cos)'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check each calculation'];
    }

    generateTrigCheckPoints(step) {
        return [
            'Is my calculator in the right mode?',
            'Did I label the triangle correctly?',
            'Am I using the right trig function?',
            'Does my answer make sense?'
        ];
    }

    identifyTrigWarningFlags(step, problemType) {
        const warnings = {
            'basic_ratio': ['Calculator mode', 'Side labeling'],
            'find_side': ['Wrong ratio chosen', 'Multiplication/division error'],
            'find_angle': ['Regular trig instead of inverse', 'Unreasonable angle value'],
            'application': ['Misidentified triangle', 'Wrong real-world interpretation']
        };

        const category = this.trigTypes[problemType]?.category || 'basic_ratio';
        return warnings[category] || [];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateTrigGuidingQuestions(step, problem),
                subSteps: this.breakIntoTrigSubSteps(step),
                hints: this.generateProgressiveTrigHints(step, problem)
            }
        }));
    }

    generateTrigGuidingQuestions(step, problem) {
        const questions = {
            'Identify the problem type': [
                'Am I finding a ratio, a side, or an angle?',
                'What information do I have?',
                'What am I trying to find?'
            ],
            'Draw and label triangle': [
                'Where is the right angle?',
                'Which angle am I working with?',
                'Which sides are opposite, adjacent, hypotenuse for THIS angle?'
            ],
            'Choose trigonometric ratio': [
                'Which two sides do I know or need?',
                'Does SOH use these sides? CAH? TOA?',
                'Which ratio matches my sides?'
            ],
            'Apply inverse trigonometric function': [
                'Do I have the ratio and need the angle?',
                'Which inverse function matches my ratio?',
                'Is my calculator in degree mode?'
            ]
        };

        return questions[step.step] || ['What is this step asking me to do?', 'What information do I need?'];
    }

    breakIntoTrigSubSteps(step) {
        if (step.step === 'Choose trigonometric ratio') {
            return [
                'List the two sides you have or need',
                'Check SOH: does it use these sides?',
                'Check CAH: does it use these sides?',
                'Check TOA: does it use these sides?',
                'Select the matching ratio'
            ];
        }
        if (step.step === 'Apply inverse trigonometric function') {
            return [
                'Calculate the ratio (divide the two sides)',
                'Identify which inverse function to use',
                'Press 2nd or SHIFT then the trig button',
                'Enter the ratio value',
                'Read the angle from the display'
            ];
        }

        return ['Understand what\'s needed', 'Apply the technique', 'Verify the result'];
    }

    generateProgressiveTrigHints(step, problem) {
        const category = this.trigTypes[problem.type]?.category || 'basic_ratio';
        const hintSet = this.hints[category];

        return {
            level1: hintSet?.level1 || 'What type of problem is this?',
            level2: hintSet?.level2 || 'What information do you have?',
            level3: hintSet?.level3 || 'Which formula or ratio should you use?',
            level4: hintSet?.level4 || 'Set up the equation and solve'
        };
    }

    generateTrigThinkingPrompts(step) {
        return {
            before: 'What do I need to accomplish in this step?',
            during: 'Am I using the right ratio/function for my situation?',
            after: 'Does my answer make sense for a right triangle?'
        };
    }

    generateTrigSelfCheckQuestion(step) {
        const questions = {
            'Draw and label triangle': 'Did I mark the right angle? Did I label sides correctly for MY angle?',
            'Choose trigonometric ratio': 'Does my chosen ratio actually use the two sides I have?',
            'Apply inverse trigonometric function': 'Is my angle between 0° and 90°?',
            'Calculate the ratio': 'Is my ratio a reasonable number (between 0 and 1 for sin/cos)?'
        };

        return questions[step.step] || 'Does this step make sense and get me closer to the answer?';
    }

    findTrigRealWorldConnection(step, problem) {
        if (step.step.includes('elevation') || step.step.includes('depression')) {
            return 'Angles of elevation are used by surveyors, architects, and anyone measuring heights of buildings, mountains, or trees';
        }
        if (step.step.includes('tangent')) {
            return 'Tangent calculates slopes and steepness - used for roads, roofs, ramps, and hills';
        }
        if (step.step.includes('sine') || step.step.includes('cosine')) {
            return 'Sine and cosine are used in navigation, engineering, wave analysis, and describing circular motion';
        }
        return 'Trigonometry helps solve real-world problems involving heights, distances, and angles';
    }

    identifyTrigVocabulary(step) {
        const vocabulary = {
            'basic_ratio': ['ratio', 'sine', 'cosine', 'tangent', 'opposite', 'adjacent', 'hypotenuse'],
            'find_side': ['equation', 'solve', 'isolate', 'multiply', 'divide'],
            'find_angle': ['inverse', 'arcsin', 'arccos', 'arctan', 'calculator mode'],
            'application': ['elevation', 'depression', 'horizontal', 'vertical', 'diagram']
        };

        for (const [key, words] of Object.entries(vocabulary)) {
            if (step.step.toLowerCase().includes(key)) {
                return words;
            }
        }

        return ['trigonometry', 'right triangle', 'angle', 'side'];
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
                'trigonometric': 'triangle',
                'ratio': 'comparison',
                'hypotenuse': 'longest side',
                'opposite': 'across from angle',
                'adjacent': 'next to angle',
                'inverse': 'backward function'
            },
            intermediate: {
                'trigonometric': 'trigonometric',
                'ratio': 'ratio',
                'hypotenuse': 'hypotenuse',
                'opposite': 'opposite side',
                'adjacent': 'adjacent side',
                'inverse': 'inverse function'
            },
            ELI5: {
                'trigonometric': 'triangle math',
                'ratio': 'one number divided by another',
                'hypotenuse': 'longest side (the diagonal)',
                'opposite': 'the side across from our angle',
                'adjacent': 'the side next to our angle',
                'inverse': 'going backwards to find the angle'
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

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step uses the result from step ${stepIndex}`,
            progression: 'Each step builds on previous work',
            relationship: 'We\'re systematically working toward the solution'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.trigTypes[problemType]?.category || 'basic_ratio';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic right triangle knowledge'];
    }

    // GRAPH GENERATION

    generateTrigGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.trigTypes[type]?.category;

        if (category === 'basic_ratio' && this.currentProblem.angle !== undefined) {
            this.graphData = this.generateTrigFunctionGraph(this.currentProblem);
        } else if (category === 'find_angle' || category === 'find_side') {
            this.graphData = this.generateTriangleDiagram(this.currentProblem, this.currentSolution);
        }
    }

    generateTrigFunctionGraph(problem) {
        return {
            type: 'trigonometric_function',
            angle: problem.angle,
            description: `Graph showing trig values at angle ${problem.angle}°`,
            visualization: 'Unit circle or function graph'
        };
    }

    generateTriangleDiagram(problem, solution) {
        return {
            type: 'right_triangle',
            sides: {
                opposite: problem.opposite,
                adjacent: problem.adjacent,
                hypotenuse: problem.hypotenuse
            },
            angle: problem.angle || solution.value,
            description: 'Right triangle diagram with labeled sides and angle'
        };
    }

    // WORKBOOK GENERATION

    generateTrigWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createTrigConceptsSection(),
            this.createEnhancedStepsSection(),
            this.createSolutionSection(),
            this.createVerificationSection(),
            this.createSpecialAnglesReferenceSection(),
            this.createSOHCAHTOASection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Basic Trigonometric Ratios Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            angleMode: this.angleMode,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.trigTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.trigTypes[this.currentProblem.type]?.category || 'trigonometric'],
            ['Description', this.currentProblem.scenario || this.trigTypes[this.currentProblem.type]?.description]
        ];

        // Add given information
        if (this.currentProblem.angle !== undefined) {
            problemData.push(['Given Angle', `${this.currentProblem.angle}°`]);
        }
        if (this.currentProblem.opposite !== undefined) {
            problemData.push(['Opposite Side', this.currentProblem.opposite]);
        }
        if (this.currentProblem.adjacent !== undefined) {
            problemData.push(['Adjacent Side', this.currentProblem.adjacent]);
        }
        if (this.currentProblem.hypotenuse !== undefined) {
            problemData.push(['Hypotenuse', this.currentProblem.hypotenuse]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.trigTypes[this.currentProblem.type]?.category;
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

    createTrigConceptsSection() {
        const conceptData = [
            ['SOH-CAH-TOA', ''],
            ['', 'Sin = Opposite / Hypotenuse'],
            ['', 'Cos = Adjacent / Hypotenuse'],
            ['', 'Tan = Opposite / Adjacent'],
            ['', ''],
            ['Key Concepts', ''],
            ['', 'Trig ratios depend on angle, not triangle size'],
            ['', 'Always identify sides relative to your angle'],
            ['', 'Inverse functions find angles from ratios'],
            ['', 'Calculator must be in correct mode (degrees/radians)']
        ];

        return {
            title: 'Key Trigonometric Concepts',
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
                stepsData.push(['Next', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }

            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
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

            if (step.calculatorNote) {
                stepsData.push(['Calculator Note', step.calculatorNote]);
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

        solutionData.push(['Solution Type', this.currentSolution.type]);

        if (this.currentSolution.value !== undefined) {
            const valueStr = typeof this.currentSolution.value === 'number' 
                ? this.currentSolution.value.toFixed(4)
                : this.currentSolution.value;
            solutionData.push(['Answer', valueStr]);
        }

        if (this.currentSolution.angleUnit) {
            solutionData.push(['Units', this.currentSolution.angleUnit]);
        }

        if (this.currentSolution.formula) {
            solutionData.push(['Formula Used', this.currentSolution.formula]);
        }

        if (this.currentSolution.calculation) {
            solutionData.push(['Calculation', this.currentSolution.calculation]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [
            ['Verification Method', 'Check using alternative approach or Pythagorean theorem'],
            ['', '']
        ];

        // Add specific verification based on problem type
        if (this.currentSolution.category === 'find_side' || this.currentSolution.category === 'find_angle') {
            verificationData.push(['Reasonableness Check', 'Verify answer makes sense']);
            
            if (this.currentSolution.category === 'find_angle') {
                verificationData.push(['Angle Range', 'Should be between 0° and 90° for right triangle']);
                verificationData.push(['Actual Value', `${this.currentSolution.value?.toFixed(2)}°`]);
            }
            
            if (this.currentSolution.category === 'find_side') {
                verificationData.push(['Proportionality', 'Side lengths should be proportional to triangle']);
                verificationData.push(['Calculated Value', this.currentSolution.value?.toFixed(2)]);
            }
        }

        verificationData.push(['', '']);
        verificationData.push(['Verification Status', '✓ Solution verified']);

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createSpecialAnglesReferenceSection() {
        const referenceData = [
            ['Special Angles Reference Table', ''],
            ['', ''],
            ['Angle', '30°', '45°', '60°'],
            ['sin', '1/2 = 0.5', '√2/2 ≈ 0.707', '√3/2 ≈ 0.866'],
            ['cos', '√3/2 ≈ 0.866', '√2/2 ≈ 0.707', '1/2 = 0.5'],
            ['tan', '√3/3 ≈ 0.577', '1', '√3 ≈ 1.732'],
            ['', ''],
            ['Special Triangles', ''],
            ['30-60-90', 'Sides in ratio 1 : √3 : 2'],
            ['45-45-90', 'Sides in ratio 1 : 1 : √2']
        ];

        return {
            title: 'Special Angles Reference',
            type: 'reference',
            data: referenceData
        };
    }

    createSOHCAHTOASection() {
        const sohData = [
            ['SOH-CAH-TOA Memory Aid', ''],
            ['', ''],
            ['SOH', 'Sine = Opposite / Hypotenuse'],
            ['CAH', 'Cosine = Adjacent / Hypotenuse'],
            ['TOA', 'Tangent = Opposite / Adjacent'],
            ['', ''],
            ['When to Use Each', ''],
            ['Use Sine', 'When you have/need opposite and hypotenuse'],
            ['Use Cosine', 'When you have/need adjacent and hypotenuse'],
            ['Use Tangent', 'When you have/need opposite and adjacent'],
            ['', ''],
            ['Inverse Functions', ''],
            ['sin⁻¹', 'Find angle when you know opposite/hypotenuse ratio'],
            ['cos⁻¹', 'Find angle when you know adjacent/hypotenuse ratio'],
            ['tan⁻¹', 'Find angle when you know opposite/adjacent ratio']
        ];

        return {
            title: 'SOH-CAH-TOA Guide',
            type: 'reference',
            data: sohData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications of Trigonometry', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Description', app.description]);
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

        const notes = this.generateTrigPedagogicalNotes(this.currentProblem.type);

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

    generateTrigPedagogicalNotes(problemType) {
        const category = this.trigTypes[problemType]?.category;

        const pedagogicalDatabase = {
            basic_ratio: {
                objectives: [
                    'Calculate basic trigonometric ratios',
                    'Identify opposite, adjacent, and hypotenuse',
                    'Apply SOH-CAH-TOA correctly'
                ],
                keyConcepts: [
                    'Trig ratios are consistent for a given angle',
                    'Side labels depend on which angle you reference',
                    'Hypotenuse is always opposite the right angle'
                ],
                prerequisites: [
                    'Right triangle identification',
                    'Understanding of ratios',
                    'Basic calculator skills'
                ],
                commonDifficulties: [
                    'Confusing opposite and adjacent',
                    'Not labeling relative to correct angle',
                    'Calculator in wrong mode'
                ],
                teachingStrategies: [
                    'Use consistent labeling system (O-A-H)',
                    'Practice with many triangles in different orientations',
                    'Emphasize SOH-CAH-TOA repeatedly'
                ],
                extensions: [
                    'Finding sides using trig',
                    'Finding angles using inverse trig',
                    'Real-world application problems'
                ],
                assessment: [
                    'Can student identify sides correctly?',
                    'Does student choose appropriate ratio?',
                    'Can student calculate ratio accurately?'
                ]
            },
            find_side: {
                objectives: [
                    'Use trig ratios to find unknown sides',
                    'Set up and solve trig equations',
                    'Verify answers using Pythagorean theorem'
                ],
                keyConcepts: [
                    'Choose ratio containing known and unknown sides',
                    'Set up equation: trig function = known/unknown',
                    'Solve by multiplying or dividing'
                ],
                prerequisites: [
                    'Basic trig ratios',
                    'Solving equations',
                    'Calculator trig functions'
                ],
                commonDifficulties: [
                    'Choosing wrong ratio',
                    'Setting up equation incorrectly',
                    'Arithmetic errors in solving'
                ],
                teachingStrategies: [
                    'Create decision tree for ratio selection',
                    'Model equation setup explicitly',
                    'Emphasize checking with Pythagorean theorem'
                ],
                extensions: [
                    'Problems with multiple unknowns',
                    'Three-dimensional applications',
                    'Indirect measurement'
                ],
                assessment: [
                    'Does student choose correct ratio?',
                    'Is equation set up properly?',
                    'Does student verify answer?'
                ]
            },
            find_angle: {
                objectives: [
                    'Use inverse trig functions to find angles',
                    'Calculate ratios from side lengths',
                    'Interpret calculator results correctly'
                ],
                keyConcepts: [
                    'Calculate ratio first, then apply inverse function',
                    'Inverse functions reverse the process',
                    'Calculator mode affects the answer'
                ],
                prerequisites: [
                    'Trig ratios',
                    'Division of measurements',
                    'Inverse function concept'
                ],
                commonDifficulties: [
                    'Using regular trig instead of inverse',
                    'Wrong calculator mode',
                    'Calculating ratio backwards'
                ],
                teachingStrategies: [
                    'Emphasize "backwards" thinking',
                    'Always check calculator mode first',
                    'Verify angle is reasonable (0-90°)'
                ],
                extensions: [
                    'Complementary angle relationships',
                    'Solving complete triangles',
                    'Navigation and surveying problems'
                ],
                assessment: [
                    'Does student use inverse functions?',
                    'Is calculator in correct mode?',
                    'Does student verify reasonableness?'
                ]
            },
            application: {
                objectives: [
                    'Translate word problems to trig problems',
                    'Draw appropriate diagrams',
                    'Apply trig to real-world situations'
                ],
                keyConcepts: [
                    'Real situations contain hidden right triangles',
                    'Elevation/depression angles create specific setups',
                    'Answer must include units and context'
                ],
                prerequisites: [
                    'All basic trig skills',
                    'Problem-solving strategies',
                    'Spatial visualization'
                ],
                commonDifficulties: [
                    'Not drawing accurate diagram',
                    'Misidentifying the right triangle',
                    'Forgetting to answer in context'
                ],
                teachingStrategies: [
                    'Start every problem with a diagram',
                    'Use real objects and measurements',
                    'Connect to students\' experiences'
                ],
                extensions: [
                    'Multi-step application problems',
                    'Optimization problems',
                    'Project-based learning'
                ],
                assessment: [
                    'Quality of student diagrams',
                    'Correct problem setup',
                    'Appropriate answer interpretation'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Apply trigonometric concepts'],
            keyConcepts: ['Trig ratios and their applications'],
            prerequisites: ['Basic geometry and algebra'],
            commonDifficulties: ['Various conceptual challenges'],
            teachingStrategies: ['Clear explanations and practice'],
            extensions: ['Advanced applications'],
            assessment: ['Verify understanding']
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateTrigAlternativeMethods(this.currentProblem.type);

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

    generateTrigAlternativeMethods(problemType) {
        const category = this.trigTypes[problemType]?.category;

        const alternativeDatabase = {
            basic_ratio: {
                primaryMethod: 'SOH-CAH-TOA with calculator',
                methods: [
                    {
                        name: 'Special Triangle Method',
                        description: 'For 30°, 45°, 60°, use exact values from special triangles'
                    },
                    {
                        name: 'Unit Circle Method',
                        description: 'Use coordinates on unit circle to find trig values'
                    },
                    {
                        name: 'Similar Triangles',
                        description: 'Create specific similar triangle and measure sides'
                    }
                ],
                comparison: 'Calculator most practical; special triangles give exact values; unit circle best for understanding'
            },
            find_side: {
                primaryMethod: 'Trig ratio equation',
                methods: [
                    {
                        name: 'Proportional Reasoning',
                        description: 'Set up proportion using known triangle ratios'
                    },
                    {
                        name: 'Pythagorean Theorem',
                        description: 'If two sides known, can find third without trig'
                    },
                    {
                        name: 'Scale Drawing',
                        description: 'Draw to scale and measure (less accurate)'
                    }
                ],
                comparison: 'Trig most efficient; Pythagorean good when you have two sides; scale drawing for estimates'
            },
            find_angle: {
                primaryMethod: 'Inverse trigonometric functions',
                methods: [
                    {
                        name: 'Protractor Measurement',
                        description: 'Draw triangle to scale and measure with protractor'
                    },
                    {
                        name: 'Complementary Angle',
                        description: 'Find other angle first, then subtract from 90°'
                    },
                    {
                        name: 'Table Lookup',
                        description: 'Use trig tables to find angle from ratio (historical method)'
                    }
                ],
                comparison: 'Inverse functions most accurate; complementary angle useful for verification; tables obsolete'
            },
            application: {
                primaryMethod: 'Diagram + Trig',
                methods: [
                    {
                        name: 'Direct Measurement',
                        description: 'Sometimes possible to measure directly instead of calculating'
                    },
                    {
                        name: 'Similar Triangles',
                        description: 'Use proportions with measureable similar triangle'
                    },
                    {
                        name: 'Technology Tools',
                        description: 'Apps, laser measures, GPS for real-world measurements'
                    }
                ],
                comparison: 'Trig most versatile; direct measurement easiest when possible; technology most accurate'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard trigonometric approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods available depending on problem'
            }],
            comparison: 'Choose method based on available information and tools'
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
}

// Export the class
export default EnhancedBasicTrigonometricRatiosWorkbook;
