// Enhanced Parallel and Perpendicular Lines Mathematical Workbook
import * as math from 'mathjs';

export class EnhancedParallelPerpendicularLinesWorkbook {
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
        this.initializeParallelPerpendicularSolvers();
        this.initializeParallelPerpendicularLessons();
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

    initializeParallelPerpendicularLessons() {
        this.lessons = {
            slope_concepts: {
                title: "Understanding Slope",
                concepts: [
                    "Slope measures steepness and direction of a line",
                    "Formula: m = (y₂ - y₁)/(x₂ - x₁)",
                    "Positive slope: line rises left to right",
                    "Negative slope: line falls left to right",
                    "Zero slope: horizontal line",
                    "Undefined slope: vertical line"
                ],
                theory: "Slope represents the rate of change between two variables. It's the ratio of vertical change to horizontal change.",
                keyFormulas: {
                    "Slope Formula": "m = (y₂ - y₁)/(x₂ - x₁)",
                    "Slope-Intercept Form": "y = mx + b",
                    "Point-Slope Form": "y - y₁ = m(x - x₁)"
                },
                visualConcepts: {
                    "Rise over Run": "Slope = vertical change / horizontal change",
                    "Direction": "Sign of slope indicates direction",
                    "Steepness": "Magnitude indicates steepness"
                }
            },

            parallel_lines: {
                title: "Parallel Lines",
                concepts: [
                    "Parallel lines never intersect",
                    "Parallel lines have equal slopes: m₁ = m₂",
                    "Different y-intercepts (unless same line)",
                    "Maintain constant distance apart",
                    "Symbol: ∥ (parallel)"
                ],
                theory: "Parallel lines have the same direction and steepness, so they have identical slopes. They never meet because they're always the same distance apart.",
                keyFormulas: {
                    "Parallel Condition": "m₁ = m₂",
                    "General Form": "If y = m₁x + b₁ ∥ y = m₂x + b₂, then m₁ = m₂"
                },
                identificationSteps: [
                    "Find slope of given line",
                    "Parallel line has same slope",
                    "Use point-slope form with parallel slope",
                    "Convert to desired form"
                ],
                applications: [
                    "Railroad tracks",
                    "Parallel parking",
                    "Building design",
                    "Road construction"
                ]
            },

            perpendicular_lines: {
                title: "Perpendicular Lines",
                concepts: [
                    "Perpendicular lines intersect at 90° angles",
                    "Slopes are negative reciprocals: m₁ · m₂ = -1",
                    "If m₁ = a/b, then m₂ = -b/a",
                    "Form right angles at intersection",
                    "Symbol: ⊥ (perpendicular)"
                ],
                theory: "Perpendicular lines meet at right angles. Their slopes are negative reciprocals, meaning the product of their slopes equals -1.",
                keyFormulas: {
                    "Perpendicular Condition": "m₁ · m₂ = -1 or m₂ = -1/m₁",
                    "Reciprocal Rule": "If m₁ = a/b, then m₂ = -b/a"
                },
                identificationSteps: [
                    "Find slope of given line",
                    "Calculate negative reciprocal",
                    "Use point-slope form with perpendicular slope",
                    "Convert to desired form"
                ],
                applications: [
                    "Construction corners",
                    "Graph axes",
                    "Building foundations",
                    "Street intersections"
                ],
                specialCases: {
                    "Horizontal and Vertical": "Lines y = k and x = h are always perpendicular",
                    "Zero and Undefined": "Slope 0 and undefined slope are perpendicular"
                }
            },

            slope_from_points: {
                title: "Finding Slope from Two Points",
                concepts: [
                    "Need two distinct points (x₁, y₁) and (x₂, y₂)",
                    "Apply slope formula: m = (y₂ - y₁)/(x₂ - x₁)",
                    "Order of points doesn't matter for final result",
                    "Watch for division by zero (vertical line)"
                ],
                theory: "The slope between two points represents the rate of change from one point to another.",
                commonErrors: [
                    "Mixing up x and y coordinates",
                    "Inconsistent order in numerator and denominator",
                    "Sign errors in subtraction",
                    "Division by zero for vertical lines"
                ],
                solvingSteps: [
                    "Label points as (x₁, y₁) and (x₂, y₂)",
                    "Calculate y₂ - y₁ (rise)",
                    "Calculate x₂ - x₁ (run)",
                    "Divide rise by run",
                    "Simplify fraction if possible"
                ]
            },

            slope_from_equation: {
                title: "Finding Slope from Equation",
                concepts: [
                    "Slope-intercept form y = mx + b: slope is m",
                    "Standard form Ax + By = C: slope is -A/B",
                    "Point-slope form y - y₁ = m(x - x₁): slope is m",
                    "May need to rearrange equation first"
                ],
                theory: "Different forms of linear equations reveal slope in different ways. Converting to slope-intercept form always makes slope explicit.",
                conversionStrategies: {
                    "From Standard Form": "Solve for y to get y = mx + b",
                    "From Point-Slope": "Slope is coefficient of (x - x₁)",
                    "From Two Points": "Use slope formula first"
                }
            },

            writing_parallel_equations: {
                title: "Writing Equations of Parallel Lines",
                concepts: [
                    "Use same slope as given line",
                    "Find y-intercept using given point",
                    "Can use point-slope or slope-intercept form",
                    "Verify by checking slope equality"
                ],
                theory: "To write a parallel line equation, maintain the same slope but adjust the y-intercept to pass through the given point.",
                solvingSteps: [
                    "Find slope of given line (m₁)",
                    "Parallel slope: m₂ = m₁",
                    "Use point (x₀, y₀) and slope m₂",
                    "Apply point-slope: y - y₀ = m₂(x - x₀)",
                    "Convert to desired form"
                ],
                verificationMethods: [
                    "Check slopes are equal",
                    "Verify point satisfies equation",
                    "Graph both lines to confirm parallelism"
                ]
            },

            writing_perpendicular_equations: {
                title: "Writing Equations of Perpendicular Lines",
                concepts: [
                    "Use negative reciprocal of given slope",
                    "If m₁ = a/b, then m₂ = -b/a",
                    "Find y-intercept using given point",
                    "Verify m₁ · m₂ = -1"
                ],
                theory: "Perpendicular lines have slopes that are negative reciprocals. This ensures they meet at a 90° angle.",
                solvingSteps: [
                    "Find slope of given line (m₁)",
                    "Calculate perpendicular slope: m₂ = -1/m₁",
                    "Use point (x₀, y₀) and slope m₂",
                    "Apply point-slope: y - y₀ = m₂(x - x₀)",
                    "Convert to desired form"
                ],
                specialCases: [
                    "Horizontal line (m = 0) → perpendicular is vertical (undefined slope)",
                    "Vertical line (undefined) → perpendicular is horizontal (m = 0)"
                ]
            },

            determining_relationships: {
                title: "Determining if Lines are Parallel, Perpendicular, or Neither",
                concepts: [
                    "Find slopes of both lines",
                    "Compare slopes for relationship",
                    "Parallel: m₁ = m₂",
                    "Perpendicular: m₁ · m₂ = -1",
                    "Neither: slopes don't satisfy either condition"
                ],
                decisionProcess: {
                    "Step 1": "Find both slopes",
                    "Step 2": "Check if equal (parallel)",
                    "Step 3": "Check if product = -1 (perpendicular)",
                    "Step 4": "If neither condition met, lines are neither parallel nor perpendicular"
                },
                commonScenarios: [
                    "Both in slope-intercept form: compare m values",
                    "Both in standard form: compare -A/B ratios",
                    "Mixed forms: convert both to slope-intercept",
                    "Given as points: calculate both slopes first"
                ]
            },

            distance_between_parallel: {
                title: "Distance Between Parallel Lines",
                concepts: [
                    "Parallel lines maintain constant distance",
                    "Use perpendicular distance formula",
                    "Convert to standard form for easier calculation",
                    "Distance is always positive"
                ],
                theory: "The distance between parallel lines is the perpendicular distance from any point on one line to the other line.",
                formula: "d = |c₂ - c₁| / √(A² + B²) for lines Ax + By = c₁ and Ax + By = c₂",
                methodology: [
                    "Ensure lines are in same standard form",
                    "Apply distance formula",
                    "Simplify result",
                    "Interpret in context"
                ]
            },

            geometric_applications: {
                title: "Geometric Applications",
                concepts: [
                    "Finding altitudes in triangles (perpendicular to base)",
                    "Identifying parallelograms (opposite sides parallel)",
                    "Constructing rectangles (adjacent sides perpendicular)",
                    "Analyzing quadrilaterals using slope"
                ],
                problemTypes: {
                    "Triangle Altitude": "Find line perpendicular to base through opposite vertex",
                    "Parallelogram Verification": "Show opposite sides have equal slopes",
                    "Rectangle Verification": "Show adjacent sides have perpendicular slopes",
                    "Square Verification": "Adjacent sides perpendicular AND equal length"
                }
            }
        };
    }

    initializeParallelPerpendicularSolvers() {
        this.lineTypes = {
            slope_from_points: {
                patterns: [
                    /slope.*(?:between|from|of).*point/i,
                    /find.*slope.*\(.*,.*\).*\(.*,.*\)/,
                    /calculate.*slope/i
                ],
                solver: this.solveSlopeFromPoints.bind(this),
                name: 'Slope from Two Points',
                category: 'slope_calculation',
                description: 'Calculate slope given two points'
            },

            slope_from_equation: {
                patterns: [
                    /slope.*(?:of|from).*equation/i,
                    /find.*slope.*y\s*=/,
                    /what.*slope/i
                ],
                solver: this.solveSlopeFromEquation.bind(this),
                name: 'Slope from Equation',
                category: 'slope_calculation',
                description: 'Extract slope from line equation'
            },

            parallel_line_equation: {
                patterns: [
                    /parallel.*(?:to|line)/i,
                    /write.*parallel/i,
                    /equation.*parallel/i,
                    /∥/
                ],
                solver: this.solveParallelLineEquation.bind(this),
                name: 'Equation of Parallel Line',
                category: 'parallel',
                description: 'Find equation of line parallel to given line'
            },

            perpendicular_line_equation: {
                patterns: [
                    /perpendicular.*(?:to|line)/i,
                    /write.*perpendicular/i,
                    /equation.*perpendicular/i,
                    /⊥/
                ],
                solver: this.solvePerpendicularLineEquation.bind(this),
                name: 'Equation of Perpendicular Line',
                category: 'perpendicular',
                description: 'Find equation of line perpendicular to given line'
            },

            determine_relationship: {
                patterns: [
                    /(?:parallel|perpendicular|neither)/i,
                    /relationship.*line/i,
                    /determine.*line/i,
                    /are.*lines/i
                ],
                solver: this.solveLineRelationship.bind(this),
                name: 'Determine Line Relationship',
                category: 'relationship',
                description: 'Determine if lines are parallel, perpendicular, or neither'
            },

            distance_between_parallel: {
                patterns: [
                    /distance.*between.*parallel/i,
                    /distance.*(?:from|between).*line/i
                ],
                solver: this.solveDistanceBetweenParallel.bind(this),
                name: 'Distance Between Parallel Lines',
                category: 'distance',
                description: 'Calculate distance between two parallel lines'
            },

            verify_parallelogram: {
                patterns: [
                    /parallelogram/i,
                    /verify.*parallel.*sides/i,
                    /prove.*parallelogram/i
                ],
                solver: this.solveVerifyParallelogram.bind(this),
                name: 'Verify Parallelogram',
                category: 'geometric_verification',
                description: 'Verify if quadrilateral is a parallelogram'
            },

            verify_rectangle: {
                patterns: [
                    /rectangle/i,
                    /verify.*perpendicular.*sides/i,
                    /prove.*rectangle/i
                ],
                solver: this.solveVerifyRectangle.bind(this),
                name: 'Verify Rectangle',
                category: 'geometric_verification',
                description: 'Verify if quadrilateral is a rectangle'
            },

            altitude_triangle: {
                patterns: [
                    /altitude/i,
                    /perpendicular.*base/i,
                    /height.*triangle/i
                ],
                solver: this.solveTriangleAltitude.bind(this),
                name: 'Triangle Altitude',
                category: 'geometric_application',
                description: 'Find equation of altitude in triangle'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            slope_calculation: {
                'Calculate slope': [
                    'Mixing up x and y coordinates',
                    'Inconsistent order in numerator and denominator',
                    'Sign errors in subtraction',
                    'Division by zero (vertical line)',
                    'Forgetting to simplify fraction'
                ]
            },
            parallel: {
                'Identify parallel slope': [
                    'Changing the slope instead of keeping it same',
                    'Confusing parallel with perpendicular',
                    'Using wrong slope formula'
                ],
                'Find y-intercept': [
                    'Not substituting point correctly',
                    'Sign errors when solving for b',
                    'Arithmetic mistakes'
                ]
            },
            perpendicular: {
                'Calculate perpendicular slope': [
                    'Forgetting negative sign',
                    'Not taking reciprocal',
                    'Only taking negative OR reciprocal, not both',
                    'Sign errors with fractions'
                ],
                'Special cases': [
                    'Forgetting horizontal ⊥ vertical',
                    'Not recognizing undefined slope case',
                    'Confusion with zero slope'
                ]
            },
            relationship: {
                'Compare slopes': [
                    'Not converting to same form first',
                    'Arithmetic errors in slope calculation',
                    'Not checking both conditions thoroughly'
                ],
                'Verify perpendicularity': [
                    'Calculation errors in m₁ · m₂',
                    'Not recognizing -1 as product',
                    'Rounding errors affecting result'
                ]
            }
        };

        this.errorPrevention = {
            slope_calculation: {
                reminder: 'Keep coordinates organized: (x₁, y₁) and (x₂, y₂)',
                method: 'Write formula first, then substitute carefully'
            },
            parallel_slopes: {
                reminder: 'Parallel lines have EQUAL slopes',
                method: 'Copy the slope exactly as is'
            },
            perpendicular_slopes: {
                reminder: 'Perpendicular slopes are NEGATIVE RECIPROCALS',
                method: 'Flip fraction AND change sign'
            },
            verify_relationship: {
                reminder: 'Check BOTH parallel and perpendicular conditions',
                method: 'Test m₁ = m₂, then test m₁ · m₂ = -1'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Understanding why slopes relate this way',
                language: 'Visual and geometric reasoning'
            },
            procedural: {
                focus: 'Step-by-step calculation process',
                language: 'Algorithmic instructions'
            },
            visual: {
                focus: 'Graphical representation of relationships',
                language: 'Spatial and directional descriptions'
            },
            algebraic: {
                focus: 'Formal mathematical relationships',
                language: 'Precise mathematical notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'whole number slopes'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of integers and fractions'
            },
            ELI5: {
                vocabulary: 'simplest possible terms with analogies',
                detail: 'every tiny step with real-world comparisons',
                examples: 'simple slopes with visual analogies',
                analogies: true,
                visualization: 'pictures and drawings'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive with geometric reasoning',
                examples: 'complex slopes and special cases'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced progression'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            wheelchair_ramp: {
                scenario: "ADA-compliant wheelchair ramps",
                concept: "Slope represents steepness",
                equation: "Slope = rise/run = 1/12 for ADA compliance",
                examples: [
                    "Ramp rises 2 feet over 24 feet horizontal. Is it ADA compliant?",
                    "Need ramp for 3-foot rise. How long must it be?"
                ],
                context: "Building codes require specific slopes for accessibility"
            },
            roof_pitch: {
                scenario: "Roof construction and pitch",
                concept: "Slope as rise over run",
                equation: "Pitch = rise/run (often expressed as ratio)",
                examples: [
                    "A 6/12 pitch roof rises 6 inches per 12 inches horizontal",
                    "Calculate slope of roof with 4-foot rise over 12-foot span"
                ],
                context: "Roof pitch affects drainage, snow load, and aesthetics"
            },
            railroad_tracks: {
                scenario: "Parallel railroad tracks",
                concept: "Parallel lines maintain equal distance",
                equation: "Both rails have same slope",
                examples: [
                    "If one rail has slope 0.02, what's slope of parallel rail?",
                    "Verify track sections are parallel"
                ],
                context: "Parallel tracks essential for train safety and operation"
            },
            street_intersection: {
                scenario: "Perpendicular street intersections",
                concept: "Right angle intersections",
                equation: "Street slopes multiply to -1",
                examples: [
                    "Main St. has slope 2/3. What slope for perpendicular cross street?",
                    "Verify intersection forms right angle"
                ],
                context: "City planning uses perpendicular streets for grid layout"
            },
            skiing_trails: {
                scenario: "Ski slope difficulty ratings",
                concept: "Slope steepness",
                equation: "Slope = vertical drop / horizontal distance",
                examples: [
                    "Green circle: slope < 0.25, Blue square: 0.25-0.40, Black diamond: > 0.40",
                    "Trail drops 500 ft over 2000 ft. What difficulty?"
                ],
                context: "Slope ratings help skiers choose appropriate trails"
            },
            building_foundation: {
                scenario: "Perpendicular walls in construction",
                concept: "Right angles in building",
                equation: "Adjacent wall slopes are negative reciprocals",
                examples: [
                    "One wall direction has slope 3/4. Find perpendicular wall slope",
                    "Verify building corners are true right angles"
                ],
                context: "Perpendicular walls ensure structural integrity"
            },
            drainage_systems: {
                scenario: "Parallel drainage pipes",
                concept: "Uniform slope for drainage",
                equation: "All pipes have same slope for flow",
                examples: [
                    "Main drain has slope 0.02. What slope for parallel branch?",
                    "Calculate flow rate based on parallel pipe slopes"
                ],
                context: "Proper drainage requires consistent slopes"
            },
            coordinate_geometry: {
                scenario: "GPS navigation and mapping",
                concept: "Perpendicular and parallel routes",
                equation: "Route slopes determine relationships",
                examples: [
                    "Highway runs slope 1/2. Find perpendicular exit ramp slope",
                    "Parallel roads for bypass routing"
                ],
                context: "Navigation systems use slope calculations for routing"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            slope_calculation: {
                skills: ['Subtraction', 'Division', 'Fraction simplification', 'Coordinate plane'],
                priorKnowledge: ['Plotting points', 'Rise over run concept', 'Fraction operations'],
                checkQuestions: [
                    "What is 8 - 3?",
                    "What is 6 ÷ 2?",
                    "Simplify: 4/8",
                    "What are coordinates of a point?"
                ]
            },
            parallel: {
                skills: ['Finding slope', 'Point-slope form', 'Slope-intercept form', 'Substitution'],
                priorKnowledge: ['Slope meaning', 'Linear equation forms', 'Solving for variable'],
                checkQuestions: [
                    "Find slope: y = 3x + 2",
                    "What makes lines parallel?",
                    "Solve for y: 2x + y = 5"
                ]
            },
            perpendicular: {
                skills: ['Finding slope', 'Negative reciprocals', 'Multiplying fractions', 'Equation forms'],
                priorKnowledge: ['Reciprocals', 'Negative numbers', 'Slope concept', 'Right angles'],
                checkQuestions: [
                    "What is reciprocal of 2/3?",
                    "What is negative reciprocal of 4?",
                    "What is 2/3 × -3/2?",
                    "How many degrees in right angle?"
                ]
            },
            relationship: {
                skills: ['Finding slopes', 'Comparing values', 'Multiplying slopes', 'Logical reasoning'],
                priorKnowledge: ['Both parallel and perpendicular conditions', 'Converting equation forms'],
                checkQuestions: [
                    "When are slopes equal?",
                    "When does m₁ · m₂ = -1?",
                    "Convert to slope-intercept: 2x - y = 4"
                ]
            },
            geometric_verification: {
                skills: ['Finding multiple slopes', 'Comparing slopes', 'Geometric properties'],
                priorKnowledge: ['Parallelogram properties', 'Rectangle properties', 'Slope relationships'],
                checkQuestions: [
                    "What makes a parallelogram?",
                    "What makes a rectangle?",
                    "How many sides to check?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            slope_as_steepness: {
                description: "Slope as hill steepness",
                analogy: "Like climbing a hill - steeper = larger slope",
                visualization: "Draw triangle showing rise over run",
                suitableFor: ['slope_calculation'],
                explanation: "Slope tells you how steep the line is"
            },
            parallel_as_tracks: {
                description: "Parallel as railroad tracks",
                analogy: "Train tracks never meet, always same distance apart",
                visualization: "Draw two lines that never intersect",
                suitableFor: ['parallel'],
                explanation: "Parallel lines go in same direction, never touching"
            },
            perpendicular_as_cross: {
                description: "Perpendicular as plus sign",
                analogy: "Like a perfect + or T intersection",
                visualization: "Draw lines meeting at 90° angle",
                suitableFor: ['perpendicular'],
                explanation: "Perpendicular lines form perfect corners (right angles)"
            },
            slope_triangle: {
                description: "Rise-over-run triangle",
                analogy: "Staircase with rise and run",
                visualization: "Draw right triangle under line segment",
                suitableFor: ['all'],
                explanation: "Visual model showing vertical and horizontal change"
            },
            graph_visualization: {
                description: "Lines on coordinate plane",
                analogy: "Map with grid lines",
                visualization: "Plot lines on xy-plane",
                suitableFor: ['all'],
                explanation: "See actual lines and their relationships visually"
            },
            slope_as_rate: {
                description: "Slope as rate of change",
                analogy: "Speed (distance per time) or cost (price per item)",
                visualization: "Graph showing relationship between quantities",
                suitableFor: ['slope_calculation', 'real_world'],
                explanation: "Slope shows how fast y changes compared to x"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Find slope between (2, 3) and (5, 9)",
                    solution: 2,
                    steps: ["m = (9-3)/(5-2)", "m = 6/3", "m = 2"],
                    difficulty: "easy"
                },
                {
                    problem: "Line parallel to y = 3x + 1",
                    solution: "slope = 3",
                    steps: ["Given slope is 3", "Parallel slope = 3", "Use same slope"],
                    difficulty: "easy"
                },
                {
                    problem: "Line perpendicular to y = 2x - 5",
                    solution: "slope = -1/2",
                    steps: ["Given slope is 2", "Perpendicular slope = -1/2", "Flip and negate"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Parallel to y = -3x + 4 through (2, 1)",
                    solution: "y = -3x + 7",
                    steps: ["m = -3", "y - 1 = -3(x - 2)", "y - 1 = -3x + 6", "y = -3x + 7"],
                    difficulty: "medium"
                },
                {
                    problem: "Perpendicular to y = (2/3)x - 1 through (4, 5)",
                    solution: "y = -(3/2)x + 11",
                    steps: ["m₁ = 2/3", "m₂ = -3/2", "y - 5 = -(3/2)(x - 4)", "y = -(3/2)x + 11"],
                    difficulty: "medium"
                },
                {
                    problem: "Are 2x + 3y = 6 and 3x - 2y = 8 perpendicular?",
                    solution: "No",
                    steps: ["Slope 1: m₁ = -2/3", "Slope 2: m₂ = 3/2", "m₁ · m₂ = -1? Check", "(-2/3)(3/2) = -1 ✓ Yes"],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Find equation perpendicular to 4x - 5y = 20 through (-3, 2)",
                    solution: "y = -(5/4)x - 7/4",
                    steps: [
                        "Convert: y = (4/5)x - 4, so m₁ = 4/5",
                        "m₂ = -5/4",
                        "y - 2 = -(5/4)(x + 3)",
                        "y = -(5/4)x - 7/4"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Verify parallelogram with vertices A(0,0), B(4,2), C(7,7), D(3,5)",
                    solution: "Yes, it's a parallelogram",
                    steps: [
                        "Slope AB = 2/4 = 1/2",
                        "Slope CD = (5-7)/(3-7) = -2/-4 = 1/2 ✓",
                        "Slope BC = (7-2)/(7-4) = 5/3",
                        "Slope AD = (5-0)/(3-0) = 5/3 ✓",
                        "Opposite sides parallel → parallelogram"
                    ],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                slope_from_points: [
                    { problem: "Points (1, 2) and (4, 8)", solution: "m = 2" },
                    { problem: "Points (-2, 5) and (3, -5)", solution: "m = -2" },
                    { problem: "Points (0, 3) and (6, 3)", solution: "m = 0 (horizontal)" }
                ],
                parallel_equations: [
                    { problem: "Parallel to y = 5x - 2 through (1, 3)", solution: "y = 5x - 2" },
                    { problem: "Parallel to 2x + y = 7 through (0, 4)", solution: "y = -2x + 4" }
                ],
                perpendicular_equations: [
                    { problem: "Perpendicular to y = 4x + 1 through (2, 3)", solution: "y = -(1/4)x + 7/2" },
                    { problem: "Perpendicular to y = -(2/3)x through (6, 1)", solution: "y = (3/2)x - 8" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            slope_order: {
                misconception: "Order of points matters in slope formula",
                reality: "Order doesn't matter as long as you're consistent",
                correctiveExample: "(9-3)/(5-2) = 6/3 = 2 is same as (3-9)/(2-5) = -6/-3 = 2",
                commonIn: ['slope_calculation']
            },
            parallel_means_same_equation: {
                misconception: "Parallel lines are the same line",
                reality: "Parallel lines have same slope but different y-intercepts",
                correctiveExample: "y = 2x + 1 and y = 2x + 5 are parallel but different lines",
                commonIn: ['parallel']
            },
            perpendicular_only_negative: {
                misconception: "Perpendicular slope is just the negative of original",
                reality: "Perpendicular slope is negative RECIPROCAL (flip AND negate)",
                correctiveExample: "If m₁ = 3, then m₂ = -1/3, not -3",
                commonIn: ['perpendicular']
            },
            vertical_horizontal_confusion: {
                misconception: "Vertical lines have slope 0",
                reality: "Vertical lines have undefined slope; horizontal lines have slope 0",
                correctiveExample: "x = 3 is vertical (undefined slope), y = 3 is horizontal (slope = 0)",
                commonIn: ['slope_calculation', 'special_cases']
            },
            product_equals_one: {
                misconception: "Perpendicular slopes multiply to +1",
                reality: "Perpendicular slopes multiply to -1",
                correctiveExample: "m₁ = 2, m₂ = -1/2: (2)(-1/2) = -1 ✓",
                commonIn: ['perpendicular', 'relationship']
            },
            slope_intercept_confusion: {
                misconception: "In Ax + By = C, slope is A/B",
                reality: "In Ax + By = C, slope is -A/B (note negative)",
                correctiveExample: "2x + 3y = 6 has slope -2/3, not 2/3",
                commonIn: ['slope_from_equation']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            slope_as_stairs: {
                analogy: "Stairs with rise and run",
                explanation: "Slope is like the steepness of stairs. Rise is how high you go up, run is how far you go forward. Steep stairs have big rise, small run.",
                suitableFor: ['slope_calculation'],
                ELI5: "Think of walking up stairs. If you go up 2 steps but only forward 1 step, that's really steep (slope = 2/1 = 2)!"
            },
            parallel_as_train_tracks: {
                analogy: "Railroad tracks",
                explanation: "Parallel lines are like train tracks - they always stay the same distance apart and never cross, no matter how far they extend.",
                suitableFor: ['parallel'],
                ELI5: "Imagine train tracks. They go in the same direction and never touch each other. That's what parallel lines do!"
            },
            perpendicular_as_street_corner: {
                analogy: "Streets at a corner",
                explanation: "Perpendicular lines meet like two streets at a corner, forming a perfect 90-degree angle (like the letter T or L).",
                suitableFor: ['perpendicular'],
                ELI5: "Think of streets that make a perfect corner, like a + sign. That's perpendicular - they meet at a square corner."
            },
            negative_reciprocal_as_flip: {
                analogy: "Flip and opposite",
                explanation: "Negative reciprocal is like flipping a fraction upside down AND changing its sign from + to - or vice versa.",
                suitableFor: ['perpendicular'],
                ELI5: "If your slope is 2/3, flip it to get 3/2, then change the sign to get -3/2. It's like doing a flip and opposite day!"
            },
            slope_as_mountain: {
                analogy: "Mountain steepness",
                explanation: "Slope measures steepness like a mountain trail. Positive slope goes uphill, negative goes downhill, zero is flat, undefined is a cliff.",
                suitableFor: ['slope_calculation', 'slope_types'],
                ELI5: "Walking up a hill is positive slope. Walking down is negative. Walking on flat ground is zero slope. A straight-up cliff wall is undefined!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            slope_from_points: {
                level1: "What formula do we use to find slope from two points?",
                level2: "Remember: slope = (y₂ - y₁)/(x₂ - x₁)",
                level3: "Subtract the y-coordinates, then divide by the difference in x-coordinates",
                level4: "Calculate: ({y2} - {y1})/({x2} - {x1}) = {rise}/{run}"
            },
            parallel_equation: {
                level1: "What do you know about slopes of parallel lines?",
                level2: "Parallel lines have the same slope",
                level3: "Use the same slope as the given line, but find new y-intercept",
                level4: "m₂ = {m1}, then use point-slope form: y - {y0} = {m1}(x - {x0})"
            },
            perpendicular_equation: {
                level1: "How are slopes of perpendicular lines related?",
                level2: "Perpendicular slopes are negative reciprocals",
                level3: "Flip the fraction and change the sign",
                level4: "If m₁ = {m1}, then m₂ = {m2_perpendicular}"
            },
            determine_relationship: {
                level1: "What two conditions should you check?",
                level2: "Check if m₁ = m₂ (parallel) or m₁ · m₂ = -1 (perpendicular)",
                level3: "Find both slopes first, then compare",
                level4: "m₁ = {m1}, m₂ = {m2}. Are they equal? Does their product = -1?"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Find slope between (2, 5) and (6, 13)",
                    answer: 2,
                    assesses: "slope_from_points",
                    difficulty: "basic"
                },
                {
                    question: "What is slope of y = -3x + 7?",
                    answer: -3,
                    assesses: "slope_from_equation",
                    difficulty: "basic"
                },
                {
                    question: "Find slope parallel to y = (2/3)x - 4",
                    answer: "2/3",
                    assesses: "parallel",
                    difficulty: "intermediate"
                },
                {
                    question: "Find slope perpendicular to y = 5x + 2",
                    answer: "-1/5",
                    assesses: "perpendicular",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "Parallel lines have:",
                    options: ["Same slope", "Negative reciprocal slopes", "Product of slopes = -1", "Different slopes"],
                    correct: "Same slope",
                    explanation: "Parallel lines go in the same direction, so same slope"
                },
                {
                    question: "Perpendicular lines have slopes that:",
                    options: ["Are equal", "Multiply to -1", "Multiply to 1", "Are opposites"],
                    correct: "Multiply to -1",
                    explanation: "Perpendicular slopes are negative reciprocals: m₁ · m₂ = -1"
                },
                {
                    question: "What is negative reciprocal of 4?",
                    options: ["-4", "1/4", "-1/4", "4"],
                    correct: "-1/4",
                    explanation: "Reciprocal of 4 is 1/4, then negate to get -1/4"
                }
            ],
            summative: [
                {
                    question: "Write equation parallel to 3x - 2y = 8 through point (4, 5)",
                    answer: "y = (3/2)x - 1",
                    showsWork: true,
                    rubric: {
                        find_slope: 1,
                        parallel_slope: 1,
                        point_slope_form: 1,
                        final_equation: 1
                    }
                },
                {
                    question: "Are lines y = (2/5)x + 3 and y = -(5/2)x - 1 perpendicular?",
                    answer: "Yes",
                    showsWork: true,
                    rubric: {
                        identify_slopes: 1,
                        calculate_product: 1,
                        conclusion: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Find slope: (1, 2) to (3, 8)",
                    "Slope of y = 4x - 7?",
                    "Parallel slope to m = 5?",
                    "Perpendicular slope to m = 2?"
                ],
                medium: [
                    "Parallel to y = -2x + 1 through (3, 4)",
                    "Perpendicular to y = (3/4)x - 2 through (0, 5)",
                    "Are 2x + y = 5 and x - 2y = 6 perpendicular?",
                    "Find slope of 3x - 4y = 12"
                ],
                hard: [
                    "Write equation perpendicular to 5x + 2y = 10 through (-4, 3)",
                    "Verify if points A(0,0), B(6,4), C(9,10), D(3,6) form parallelogram",
                    "Find distance between parallel lines y = 2x + 3 and y = 2x - 5",
                    "Find altitude from C(2,8) to side AB where A(0,0) and B(6,3)"
                ]
            },
            byObjective: {
                canFindSlope: [
                    "Slope between (3, 7) and (8, 22)",
                    "Slope of 2x - 5y = 20",
                    "Slope of line through origin and (4, -3)"
                ],
                canIdentifyParallel: [
                    "Slope parallel to y = 6x - 1",
                    "Line parallel to 3x + 4y = 12",
                    "Are y = 2x + 5 and y = 2x - 3 parallel?"
                ],
                canIdentifyPerpendicular: [
                    "Slope perpendicular to y = -3x + 4",
                    "Perpendicular to m = 5/7",
                    "Are y = 3x and y = -(1/3)x perpendicular?"
                ],
                canWriteEquations: [
                    "Parallel to y = x + 2 through (1, 5)",
                    "Perpendicular to y = -2x through (4, 3)",
                    "Parallel to 2x - y = 7 through origin"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "two_points_given": "Use slope formula: m = (y₂ - y₁)/(x₂ - x₁)",
                "equation_given": "Convert to y = mx + b to identify slope",
                "need_parallel": "Use same slope as given line",
                "need_perpendicular": "Use negative reciprocal of given slope",
                "standard_form": "Slope is -A/B from Ax + By = C",
                "point_slope_form": "Slope is coefficient of (x - x₁)"
            },
            whenToUseWhat: {
                slope_formula: "When you have two points",
                slope_intercept: "When equation is or can be in y = mx + b",
                point_slope: "When writing equation through a point with known slope",
                standard_form: "When both x and y are on same side",
                negative_reciprocal: "When finding perpendicular slope"
            },
            methodSelection: {
                factorsToConsider: [
                    "What information is given?",
                    "What form is the equation in?",
                    "Do I need parallel or perpendicular?",
                    "Special cases (horizontal/vertical)?"
                ],
                generalApproach: [
                    "1. Identify what's given and what's needed",
                    "2. Find or calculate slope(s)",
                    "3. Apply relationship (parallel or perpendicular)",
                    "4. Write equation using appropriate form",
                    "5. Verify result"
                ]
            },
            optimizationTips: {
                "Convert to slope-intercept first": "Makes slope obvious",
                "Label points clearly": "Prevents coordinate mix-ups",
                "Check special cases": "Horizontal and vertical lines behave differently",
                "Verify with product": "For perpendicular, always check m₁ · m₂ = -1",
                "Simplify slopes": "Reduce fractions before proceeding"
            },
            commonApproaches: {
                "For slope from points": [
                    "Label points as (x₁, y₁) and (x₂, y₂)",
                    "Apply formula carefully",
                    "Simplify result"
                ],
                "For parallel lines": [
                    "Find slope of given line",
                    "Use same slope",
                    "Find y-intercept with given point"
                ],
                "For perpendicular lines": [
                    "Find slope of given line",
                    "Calculate negative reciprocal",
                    "Use point-slope form"
                ]
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Slope Calculation Sprint",
                    timeLimit: 90,
                    problems: [
                        "Slope: (2, 3) to (5, 12)",
                        "Slope: (0, 4) to (6, 10)",
                        "Slope: (-1, 2) to (3, 14)",
                        "Slope of y = 7x - 3",
                        "Slope of 2x + y = 8",
                        "Parallel to m = 4",
                        "Perpendicular to m = 3"
                    ]
                },
                {
                    name: "Relationship Challenge",
                    timeLimit: 120,
                    problems: [
                        "Are y = 2x + 1 and y = 2x - 5 parallel?",
                        "Are y = 3x and y = -(1/3)x perpendicular?",
                        "Are y = 5x + 2 and y = -5x + 1 parallel or perpendicular?",
                        "Slope perpendicular to 2/5",
                        "Slope parallel to -3/7"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Slopes",
                    problem: "Line L₁ has slope m. Line L₂ is perpendicular to L₁. Line L₃ is parallel to L₂.",
                    question: "What is relationship between L₁ and L₃?",
                    solution: "L₁ and L₃ are perpendicular (perpendicular to parallel means perpendicular to original)"
                },
                {
                    name: "Quadrilateral Challenge",
                    problem: "Given vertices A(0,0), B(a,b), C(a+c,b+d), D(c,d)",
                    question: "Prove this is always a parallelogram",
                    solution: "Slope AB = b/a = slope DC, Slope AD = d/c = slope BC, so opposite sides parallel"
                },
                {
                    name: "Slope Sequence",
                    problem: "Lines L₁, L₂, L₃ have slopes 2, m, -1/8 respectively",
                    constraint: "Each consecutive pair is perpendicular",
                    solution: "m = -1/2 (perpendicular to 2) or m = 8 (perpendicular to -1/8)"
                }
            ],
            applications: [
                {
                    scenario: "Road Grade",
                    problem: "Road rises 300 feet over horizontal distance of 5000 feet. What is grade (slope)?",
                    equation: "m = 300/5000 = 0.06 = 6%",
                    solution: "6% grade"
                },
                {
                    scenario: "Roof Construction",
                    problem: "Roof has 8/12 pitch (rises 8 inches per 12 inches). House is 30 feet wide. What is height at peak?",
                    equation: "Slope = 8/12 = 2/3, height = (2/3)(15) = 10 feet",
                    solution: "10 feet above wall"
                },
                {
                    scenario: "Wheelchair Ramp",
                    problem: "ADA requires slope ≤ 1/12. For 2.5-foot rise, what minimum length?",
                    equation: "1/12 = 2.5/L, so L = 30 feet",
                    solution: "30 feet minimum"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Find perpendicular slope to 3/4:",
                        "Reciprocal: 4/3",  // ERROR: forgot negative
                        "Answer: 4/3"
                    ],
                    correctAnswer: "-4/3",
                    errorType: "Forgot negative in negative reciprocal"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Slope between (2, 5) and (7, 3):",
                        "m = (7 - 2)/(3 - 5)",  // ERROR: mixed x and y
                        "m = 5/-2 = -5/2"
                    ],
                    correctAnswer: "-2/5",
                    errorType: "Mixed up x and y coordinates"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Parallel to y = 2x + 3 through (1, 4):",
                        "y - 4 = 2(x - 1)",
                        "y - 4 = 2x - 2",
                        "y = 2x + 2"  // Actually correct!
                    ],
                    correctAnswer: "y = 2x + 2",
                    errorType: "No error - work is correct!"
                }
            ],
            geometricVerification: [
                {
                    name: "Prove Parallelogram",
                    vertices: "A(1,2), B(5,4), C(7,8), D(3,6)",
                    task: "Show opposite sides are parallel",
                    solution: "Slope AB = Slope CD = 1/2, Slope BC = Slope AD = 2"
                },
                {
                    name: "Prove Rectangle",
                    vertices: "P(0,0), Q(4,0), R(4,3), S(0,3)",
                    task: "Show adjacent sides perpendicular and opposite sides parallel",
                    solution: "PQ ∥ RS (both slope 0), PS ∥ QR (both undefined), PQ ⊥ PS (0 · undefined)"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveParallelPerpendicularProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseParallelPerpendicularProblem(
                equation, scenario, parameters, problemType, context
            );

            this.currentSolution = this.solveParallelPerpendicularProblem_Internal(
                this.currentProblem
            );

            this.solutionSteps = this.generateParallelPerpendicularSteps(
                this.currentProblem,
                this.currentSolution
            );

            this.generateParallelPerpendicularGraphData();
            this.generateParallelPerpendicularWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionValue: this.currentSolution?.result,
                solutionType: this.currentSolution?.type
            };

        } catch (error) {
            throw new Error(`Failed to solve parallel/perpendicular problem: ${error.message}`);
        }
    }

    parseParallelPerpendicularProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        if (problemType && this.lineTypes[problemType]) {
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
        for (const [type, config] of Object.entries(this.lineTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractParallelPerpendicularParameters(match, type, cleanInput, parameters);

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

        // Default to slope calculation if points are provided
        if (parameters.point1 && parameters.point2) {
            return {
                originalInput: equation || 'Calculate slope from two points',
                cleanInput: cleanInput,
                type: 'slope_from_points',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize parallel/perpendicular problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/∥/g, 'parallel')
            .replace(/⊥/g, 'perpendicular')
            .trim();
    }

    extractParallelPerpendicularParameters(match, type, fullInput, existingParams) {
        const params = { ...existingParams };

        // Extract points if present
        const pointPattern = /\((-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\)/g;
        const points = [];
        let pointMatch;
        while ((pointMatch = pointPattern.exec(fullInput)) !== null) {
            points.push({
                x: parseFloat(pointMatch[1]),
                y: parseFloat(pointMatch[2])
            });
        }

        if (points.length >= 1) params.point1 = points[0];
        if (points.length >= 2) params.point2 = points[1];
        if (points.length >= 3) params.point3 = points[2];
        if (points.length >= 4) params.point4 = points[3];

        // Extract slope if present
        const slopePattern = /(?:slope|m)\s*=\s*(-?\d+\.?\d*(?:\/\d+\.?\d*)?)/i;
        const slopeMatch = fullInput.match(slopePattern);
        if (slopeMatch) {
            params.slope = this.parseSlope(slopeMatch[1]);
        }

        // Extract equation in slope-intercept form
        const slopeInterceptPattern = /y\s*=\s*(-?\d+\.?\d*(?:\/\d+\.?\d*)?)\s*x\s*([+-]\s*\d+\.?\d*)?/i;
        const siMatch = fullInput.match(slopeInterceptPattern);
        if (siMatch) {
            params.slope = this.parseSlope(siMatch[1]);
            params.yIntercept = siMatch[2] ? parseFloat(siMatch[2].replace(/\s/g, '')) : 0;
        }

        // Extract equation in standard form
        const standardPattern = /(-?\d+\.?\d*)\s*x\s*([+-]\s*\d+\.?\d*)\s*y\s*=\s*(-?\d+\.?\d*)/i;
        const stdMatch = fullInput.match(standardPattern);
        if (stdMatch) {
            const A = parseFloat(stdMatch[1]);
            const B = parseFloat(stdMatch[2].replace(/\s/g, ''));
            const C = parseFloat(stdMatch[3]);
            params.A = A;
            params.B = B;
            params.C = C;
            params.slope = B !== 0 ? -A / B : undefined;
        }

        return params;
    }

    parseSlope(slopeStr) {
        if (!slopeStr) return 0;
        
        const cleaned = slopeStr.trim();
        
        // Handle fractions
        if (cleaned.includes('/')) {
            const parts = cleaned.split('/');
            const numerator = parseFloat(parts[0]);
            const denominator = parseFloat(parts[1]);
            return denominator !== 0 ? numerator / denominator : undefined;
        }
        
        return parseFloat(cleaned);
    }

    solveParallelPerpendicularProblem_Internal(problem) {
        const solver = this.lineTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // SOLVER METHODS

    solveSlopeFromPoints(problem) {
        const { point1, point2 } = problem.parameters;

        if (!point1 || !point2) {
            throw new Error('Two points required to calculate slope');
        }

        const x1 = point1.x, y1 = point1.y;
        const x2 = point2.x, y2 = point2.y;

        const deltaX = x2 - x1;
        const deltaY = y2 - y1;

        if (Math.abs(deltaX) < 1e-10) {
            return {
                type: 'Slope from Two Points',
                point1: `(${x1}, ${y1})`,
                point2: `(${x2}, ${y2})`,
                slope: 'undefined',
                slopeType: 'Vertical line',
                result: 'undefined',
                interpretation: 'This is a vertical line',
                category: 'slope_calculation'
            };
        }

        const slope = deltaY / deltaX;
        const simplifiedSlope = this.simplifyFraction(deltaY, deltaX);

        return {
            type: 'Slope from Two Points',
            point1: `(${x1}, ${y1})`,
            point2: `(${x2}, ${y2})`,
            rise: deltaY,
            run: deltaX,
            slope: slope,
            simplifiedSlope: simplifiedSlope,
            slopeType: this.classifySlope(slope),
            result: slope,
            category: 'slope_calculation'
        };
    }

    solveSlopeFromEquation(problem) {
        const { slope, A, B, C } = problem.parameters;

        // If slope already extracted
        if (slope !== undefined) {
            return {
                type: 'Slope from Equation',
                equation: problem.cleanInput,
                slope: slope,
                slopeType: this.classifySlope(slope),
                result: slope,
                category: 'slope_calculation'
            };
        }

        // If in standard form
        if (A !== undefined && B !== undefined) {
            if (Math.abs(B) < 1e-10) {
                return {
                    type: 'Slope from Equation',
                    equation: `${A}x + ${B}y = ${C}`,
                    slope: 'undefined',
                    slopeType: 'Vertical line',
                    result: 'undefined',
                    category: 'slope_calculation'
                };
            }

            const calculatedSlope = -A / B;
            const simplified = this.simplifyFraction(-A, B);

            return {
                type: 'Slope from Equation',
                equation: `${A}x + ${B}y = ${C}`,
                standardForm: true,
                slope: calculatedSlope,
                simplifiedSlope: simplified,
                slopeType: this.classifySlope(calculatedSlope),
                result: calculatedSlope,
                category: 'slope_calculation'
            };
        }

        throw new Error('Unable to determine slope from equation');
    }

    solveParallelLineEquation(problem) {
        const { slope, point1, A, B, C } = problem.parameters;

        // Get slope of given line
        let givenSlope;
        if (slope !== undefined) {
            givenSlope = slope;
        } else if (A !== undefined && B !== undefined) {
            givenSlope = B !== 0 ? -A / B : undefined;
        } else {
            throw new Error('Unable to determine slope of given line');
        }

        if (givenSlope === undefined) {
            // Vertical line case
            if (!point1) throw new Error('Point required for parallel equation');
            
            return {
                type: 'Parallel Line Equation',
                givenSlope: 'undefined (vertical)',
                parallelSlope: 'undefined (vertical)',
                throughPoint: `(${point1.x}, ${point1.y})`,
                equation: `x = ${point1.x}`,
                result: `x = ${point1.x}`,
                category: 'parallel'
            };
        }

        // Parallel slope is same
        const parallelSlope = givenSlope;

        if (!point1) {
            return {
                type: 'Parallel Line Equation',
                givenSlope: givenSlope,
                parallelSlope: parallelSlope,
                note: 'Need a point to write complete equation',
                generalForm: `y = ${parallelSlope}x + b`,
                category: 'parallel'
            };
        }

        // Use point-slope form: y - y1 = m(x - x1)
        const x1 = point1.x, y1 = point1.y;
        const yIntercept = y1 - parallelSlope * x1;

        const equation = `y = ${this.formatCoefficient(parallelSlope)}x ${this.formatConstant(yIntercept)}`;

        return {
            type: 'Parallel Line Equation',
            givenSlope: givenSlope,
            parallelSlope: parallelSlope,
            throughPoint: `(${x1}, ${y1})`,
            yIntercept: yIntercept,
            slopeInterceptForm: equation,
            pointSlopeForm: `y - ${y1} = ${parallelSlope}(x - ${x1})`,
            result: equation,
            category: 'parallel'
        };
    }

    solvePerpendicularLineEquation(problem) {
        const { slope, point1, A, B, C } = problem.parameters;

        // Get slope of given line
        let givenSlope;
        if (slope !== undefined) {
            givenSlope = slope;
        } else if (A !== undefined && B !== undefined) {
            givenSlope = B !== 0 ? -A / B : undefined;
        } else {
            throw new Error('Unable to determine slope of given line');
        }

        // Handle special cases
        if (givenSlope === undefined) {
            // Given line is vertical, perpendicular is horizontal
            if (!point1) throw new Error('Point required for perpendicular equation');
            
            return {
                type: 'Perpendicular Line Equation',
                givenSlope: 'undefined (vertical)',
                perpendicularSlope: '0 (horizontal)',
                throughPoint: `(${point1.x}, ${point1.y})`,
                equation: `y = ${point1.y}`,
                result: `y = ${point1.y}`,
                category: 'perpendicular'
            };
        }

        if (Math.abs(givenSlope) < 1e-10) {
            // Given line is horizontal, perpendicular is vertical
            if (!point1) throw new Error('Point required for perpendicular equation');
            
            return {
                type: 'Perpendicular Line Equation',
                givenSlope: '0 (horizontal)',
                perpendicularSlope: 'undefined (vertical)',
                throughPoint: `(${point1.x}, ${point1.y})`,
                equation: `x = ${point1.x}`,
                result: `x = ${point1.x}`,
                category: 'perpendicular'
            };
        }

        // Calculate negative reciprocal
        const perpendicularSlope = -1 / givenSlope;

        if (!point1) {
            return {
                type: 'Perpendicular Line Equation',
                givenSlope: givenSlope,
                perpendicularSlope: perpendicularSlope,
                note: 'Need a point to write complete equation',
                generalForm: `y = ${perpendicularSlope}x + b`,
                category: 'perpendicular'
            };
        }

        // Use point-slope form
        const x1 = point1.x, y1 = point1.y;
        const yIntercept = y1 - perpendicularSlope * x1;

        const equation = `y = ${this.formatCoefficient(perpendicularSlope)}x ${this.formatConstant(yIntercept)}`;

        // Verify perpendicularity
        const product = givenSlope * perpendicularSlope;
        const isVerified = Math.abs(product - (-1)) < 1e-9;

        return {
            type: 'Perpendicular Line Equation',
            givenSlope: givenSlope,
            perpendicularSlope: perpendicularSlope,
            throughPoint: `(${x1}, ${y1})`,
            yIntercept: yIntercept,
            slopeInterceptForm: equation,
            pointSlopeForm: `y - ${y1} = ${perpendicularSlope}(x - ${x1})`,
            verification: {
                product: product,
                verified: isVerified
            },
            result: equation,
            category: 'perpendicular'
        };
    }

    solveLineRelationship(problem) {
        // Need two lines to compare
        const params = problem.parameters;
        
        // Extract slopes of both lines
        let slope1, slope2;

        // Try to get slope1
        if (params.slope1 !== undefined) {
            slope1 = params.slope1;
        } else if (params.A1 !== undefined && params.B1 !== undefined) {
            slope1 = params.B1 !== 0 ? -params.A1 / params.B1 : undefined;
        } else if (params.point1 && params.point2) {
            const deltaX = params.point2.x - params.point1.x;
            const deltaY = params.point2.y - params.point1.y;
            slope1 = deltaX !== 0 ? deltaY / deltaX : undefined;
        }

        // Try to get slope2
        if (params.slope2 !== undefined) {
            slope2 = params.slope2;
        } else if (params.A2 !== undefined && params.B2 !== undefined) {
            slope2 = params.B2 !== 0 ? -params.A2 / params.B2 : undefined;
        } else if (params.point3 && params.point4) {
            const deltaX = params.point4.x - params.point3.x;
            const deltaY = params.point4.y - params.point3.y;
            slope2 = deltaX !== 0 ? deltaY / deltaX : undefined;
        }

        if (slope1 === undefined || slope2 === undefined) {
            // Check if both are undefined (both vertical)
            if (slope1 === undefined && slope2 === undefined) {
                return {
                    type: 'Line Relationship',
                    slope1: 'undefined',
                    slope2: 'undefined',
                    relationship: 'Parallel',
                    explanation: 'Both lines are vertical, therefore parallel',
                    result: 'Parallel',
                    category: 'relationship'
                };
            }

            throw new Error('Unable to determine slopes of both lines');
        }

        // Check for parallel (equal slopes)
        const isParallel = Math.abs(slope1 - slope2) < 1e-9;

        // Check for perpendicular (product = -1)
        const product = slope1 * slope2;
        const isPerpendicular = Math.abs(product - (-1)) < 1e-9;

        let relationship;
        if (isParallel) {
            relationship = 'Parallel';
        } else if (isPerpendicular) {
            relationship = 'Perpendicular';
        } else {
            relationship = 'Neither parallel nor perpendicular';
        }

        return {
            type: 'Line Relationship',
            slope1: slope1,
            slope2: slope2,
            comparison: {
                equal: isParallel,
                product: product,
                productEqualsNegativeOne: isPerpendicular
            },
            relationship: relationship,
            result: relationship,
            category: 'relationship'
        };
    }

    solveDistanceBetweenParallel(problem) {
        // Distance between parallel lines Ax + By + C₁ = 0 and Ax + By + C₂ = 0
        // Formula: d = |C₂ - C₁| / sqrt(A² + B²)
        
        const { A1, B1, C1, A2, B2, C2 } = problem.parameters;

        // Verify lines are parallel
        const slope1 = B1 !== 0 ? -A1 / B1 : undefined;
        const slope2 = B2 !== 0 ? -A2 / B2 : undefined;

        if (slope1 !== undefined && slope2 !== undefined) {
            if (Math.abs(slope1 - slope2) > 1e-9) {
                return {
                    type: 'Distance Between Lines',
                    error: 'Lines are not parallel',
                    slope1: slope1,
                    slope2: slope2,
                    category: 'distance'
                };
            }
        }

        // Calculate distance
        const distance = Math.abs(C2 - C1) / Math.sqrt(A1 * A1 + B1 * B1);

        return {
            type: 'Distance Between Parallel Lines',
            line1: `${A1}x + ${B1}y = ${C1}`,
            line2: `${A2}x + ${B2}y = ${C2}`,
            formula: 'd = |C₂ - C₁| / √(A² + B²)',
            distance: distance,
            result: distance,
            category: 'distance'
        };
    }

    solveVerifyParallelogram(problem) {
        const { point1, point2, point3, point4 } = problem.parameters;

        if (!point1 || !point2 || !point3 || !point4) {
            throw new Error('Four vertices required to verify parallelogram');
        }

        // Calculate slopes of all four sides
        const slopeAB = this.calculateSlope(point1, point2);
        const slopeBC = this.calculateSlope(point2, point3);
        const slopeCD = this.calculateSlope(point3, point4);
        const slopeDA = this.calculateSlope(point4, point1);

        // Check if opposite sides are parallel
        const AB_parallel_CD = Math.abs(slopeAB - slopeCD) < 1e-9;
        const BC_parallel_DA = Math.abs(slopeBC - slopeDA) < 1e-9;

        const isParallelogram = AB_parallel_CD && BC_parallel_DA;

        return {
            type: 'Verify Parallelogram',
            vertices: {
                A: `(${point1.x}, ${point1.y})`,
                B: `(${point2.x}, ${point2.y})`,
                C: `(${point3.x}, ${point3.y})`,
                D: `(${point4.x}, ${point4.y})`
            },
            slopes: {
                AB: slopeAB,
                BC: slopeBC,
                CD: slopeCD,
                DA: slopeDA
            },
            checks: {
                AB_parallel_CD: AB_parallel_CD,
                BC_parallel_DA: BC_parallel_DA
            },
            result: isParallelogram ? 'Yes, it is a parallelogram' : 'No, it is not a parallelogram',
            isParallelogram: isParallelogram,
            category: 'geometric_verification'
        };
    }

    solveVerifyRectangle(problem) {
        const { point1, point2, point3, point4 } = problem.parameters;

        if (!point1 || !point2 || !point3 || !point4) {
            throw new Error('Four vertices required to verify rectangle');
        }

        // First verify it's a parallelogram
        const parallelogramCheck = this.solveVerifyParallelogram(problem);
        
        if (!parallelogramCheck.isParallelogram) {
            return {
                type: 'Verify Rectangle',
                result: 'No, not a rectangle (not even a parallelogram)',
                isRectangle: false,
                category: 'geometric_verification'
            };
        }

        // Check if adjacent sides are perpendicular
        const slopeAB = this.calculateSlope(point1, point2);
        const slopeBC = this.calculateSlope(point2, point3);

        let isPerpendicular;
        if (slopeAB === 0 && slopeBC === undefined) {
            isPerpendicular = true;
        } else if (slopeAB === undefined && slopeBC === 0) {
            isPerpendicular = true;
        } else if (slopeAB !== undefined && slopeBC !== undefined) {
            const product = slopeAB * slopeBC;
            isPerpendicular = Math.abs(product - (-1)) < 1e-9;
        } else {
            isPerpendicular = false;
        }

        const isRectangle = isPerpendicular;

        return {
            type: 'Verify Rectangle',
            vertices: parallelogramCheck.vertices,
            slopes: parallelogramCheck.slopes,
            parallelogramCheck: 'Passed',
            perpendicularCheck: {
                slopeAB: slopeAB,
                slopeBC: slopeBC,
                product: slopeAB * slopeBC,
                isPerpendicular: isPerpendicular
            },
            result: isRectangle ? 'Yes, it is a rectangle' : 'No, it is not a rectangle',
            isRectangle: isRectangle,
            category: 'geometric_verification'
        };
    }

    solveTriangleAltitude(problem) {
        // Altitude is perpendicular to base through opposite vertex
        const { basePoint1, basePoint2, oppositeVertex } = problem.parameters;

        if (!basePoint1 || !basePoint2 || !oppositeVertex) {
            throw new Error('Need base endpoints and opposite vertex for altitude');
        }

        // Find slope of base
        const baseSlope = this.calculateSlope(basePoint1, basePoint2);

        // Altitude is perpendicular to base
        let altitudeSlope;
        if (baseSlope === 0) {
            // Base is horizontal, altitude is vertical
            return {
                type: 'Triangle Altitude',
                base: `from (${basePoint1.x}, ${basePoint1.y}) to (${basePoint2.x}, ${basePoint2.y})`,
                baseSlope: 0,
                altitudeSlope: 'undefined',
                altitude: `x = ${oppositeVertex.x}`,
                result: `x = ${oppositeVertex.x}`,
                category: 'geometric_application'
            };
        } else if (baseSlope === undefined) {
            // Base is vertical, altitude is horizontal
            return {
                type: 'Triangle Altitude',
                base: `from (${basePoint1.x}, ${basePoint1.y}) to (${basePoint2.x}, ${basePoint2.y})`,
                baseSlope: 'undefined',
                altitudeSlope: 0,
                altitude: `y = ${oppositeVertex.y}`,
                result: `y = ${oppositeVertex.y}`,
                category: 'geometric_application'
            };
        } else {
            // Regular case: negative reciprocal
            altitudeSlope = -1 / baseSlope;

            // Use point-slope form through opposite vertex
            const x0 = oppositeVertex.x, y0 = oppositeVertex.y;
            const yIntercept = y0 - altitudeSlope * x0;

            const equation = `y = ${this.formatCoefficient(altitudeSlope)}x ${this.formatConstant(yIntercept)}`;

            return {
                type: 'Triangle Altitude',
                base: `from (${basePoint1.x}, ${basePoint1.y}) to (${basePoint2.x}, ${basePoint2.y})`,
                baseSlope: baseSlope,
                altitudeSlope: altitudeSlope,
                throughVertex: `(${x0}, ${y0})`,
                altitude: equation,
                result: equation,
                category: 'geometric_application'
            };
        }
    }

    // HELPER METHODS

    calculateSlope(point1, point2) {
        const deltaX = point2.x - point1.x;
        const deltaY = point2.y - point1.y;

        if (Math.abs(deltaX) < 1e-10) {
            return undefined; // Vertical line
        }

        return deltaY / deltaX;
    }

    classifySlope(slope) {
        if (slope === undefined) return 'Undefined (vertical line)';
        if (Math.abs(slope) < 1e-10) return 'Zero (horizontal line)';
        if (slope > 0) return 'Positive (rises left to right)';
        return 'Negative (falls left to right)';
    }

    simplifyFraction(numerator, denominator) {
        const gcd = this.findGCD(Math.abs(numerator), Math.abs(denominator));
        const simplifiedNum = numerator / gcd;
        const simplifiedDen = denominator / gcd;

        if (simplifiedDen === 1) return simplifiedNum.toString();
        if (simplifiedDen === -1) return (-simplifiedNum).toString();
        
        // Handle sign
        if (simplifiedDen < 0) {
            return `${-simplifiedNum}/${-simplifiedDen}`;
        }

        return `${simplifiedNum}/${simplifiedDen}`;
    }

    findGCD(a, b) {
        a = Math.abs(Math.round(a));
        b = Math.abs(Math.round(b));
        
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        
        return a === 0 ? 1 : a;
    }

    formatCoefficient(coeff) {
        if (Math.abs(coeff - 1) < 1e-10) return '';
        if (Math.abs(coeff - (-1)) < 1e-10) return '-';
        
        // Check if it's a clean fraction
        const fractionStr = this.tryFormatAsFraction(coeff);
        if (fractionStr) return fractionStr;
        
        return coeff.toString();
    }

    formatConstant(constant) {
        if (Math.abs(constant) < 1e-10) return '';
        if (constant > 0) return `+ ${constant}`;
        return `- ${Math.abs(constant)}`;
    }

    tryFormatAsFraction(decimal) {
        // Try to express as simple fraction
        const tolerance = 1e-9;
        
        for (let denominator = 2; denominator <= 20; denominator++) {
            const numerator = Math.round(decimal * denominator);
            const approx = numerator / denominator;
            
            if (Math.abs(approx - decimal) < tolerance) {
                if (denominator === 1) return numerator.toString();
                return `${numerator}/${denominator}`;
            }
        }
        
        return null;
    }

    // STEP GENERATION (similar structure to simple linear workbook)

    generateParallelPerpendicularSteps(problem, solution) {
        let baseSteps = this.generateBaseParallelPerpendicularSteps(problem, solution);

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

    generateBaseParallelPerpendicularSteps(problem, solution) {
        const category = this.lineTypes[problem.type]?.category;

        switch(category) {
            case 'slope_calculation':
                return this.generateSlopeCalculationSteps(problem, solution);
            case 'parallel':
                return this.generateParallelSteps(problem, solution);
            case 'perpendicular':
                return this.generatePerpendicularSteps(problem, solution);
            case 'relationship':
                return this.generateRelationshipSteps(problem, solution);
            case 'geometric_verification':
                return this.generateGeometricVerificationSteps(problem, solution);
            case 'geometric_application':
                return this.generateGeometricApplicationSteps(problem, solution);
            default:
                return this.generateGenericSteps(problem, solution);
        }
    }

    generateSlopeCalculationSteps(problem, solution) {
        const steps = [];

        if (problem.type === 'slope_from_points') {
            steps.push({
                stepNumber: 1,
                step: 'Identify the points',
                description: 'Label the two points',
                expression: `Point 1: ${solution.point1}, Point 2: ${solution.point2}`,
                reasoning: 'We need two points to calculate slope',
                goalStatement: 'Find the slope (steepness) of the line through these points'
            });

            steps.push({
                stepNumber: 2,
                step: 'Apply slope formula',
                description: 'Use m = (y₂ - y₁)/(x₂ - x₁)',
                beforeExpression: 'm = (y₂ - y₁)/(x₂ - x₁)',
                operation: 'Substitute coordinates',
                afterExpression: `m = (${solution.rise})/(${solution.run})`,
                reasoning: 'Slope formula measures vertical change over horizontal change',
                algebraicRule: 'Slope Formula'
            });

            if (solution.slope !== 'undefined') {
                steps.push({
                    stepNumber: 3,
                    step: 'Calculate the slope',
                    description: 'Divide rise by run',
                    beforeExpression: `m = ${solution.rise}/${solution.run}`,
                    afterExpression: `m = ${solution.slope}`,
                    simplifiedExpression: solution.simplifiedSlope ? `m = ${solution.simplifiedSlope}` : undefined,
                    reasoning: 'This gives us the rate of change',
                    finalAnswer: true
                });
            } else {
                steps.push({
                    stepNumber: 3,
                    step: 'Identify vertical line',
                    description: 'Run is zero, so slope is undefined',
                    expression: 'Slope is undefined',
                    reasoning: 'Cannot divide by zero; this is a vertical line',
                    finalAnswer: true
                });
            }

        } else if (problem.type === 'slope_from_equation') {
            steps.push({
                stepNumber: 1,
                step: 'Identify equation form',
                description: 'Determine what form the equation is in',
                expression: solution.equation || problem.cleanInput,
                reasoning: 'Different forms reveal slope differently'
            });

            if (solution.standardForm) {
                steps.push({
                    stepNumber: 2,
                    step: 'Apply standard form slope rule',
                    description: 'For Ax + By = C, slope is -A/B',
                    expression: `m = -A/B = ${solution.slope}`,
                    reasoning: 'Standard form slope formula',
                    finalAnswer: true
                });
            } else {
                steps.push({
                    stepNumber: 2,
                    step: 'Read slope from equation',
                    description: 'In y = mx + b, slope is m',
                    expression: `m = ${solution.slope}`,
                    reasoning: 'Slope-intercept form makes slope explicit',
                    finalAnswer: true
                });
            }
        }

        return steps;
    }

    generateParallelSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Find slope of given line',
            description: 'Identify the slope we need to match',
            expression: `Given slope: m₁ = ${solution.givenSlope}`,
            reasoning: 'Parallel lines have equal slopes',
            goalStatement: 'Find equation of line parallel to given line'
        });

        steps.push({
            stepNumber: 2,
            step: 'Use parallel slope condition',
            description: 'Parallel lines have the same slope',
            beforeExpression: `m₁ = ${solution.givenSlope}`,
            operation: 'Set m₂ = m₁',
            afterExpression: `m₂ = ${solution.parallelSlope}`,
            reasoning: 'Parallel condition: m₁ = m₂',
            algebraicRule: 'Parallel Lines Property',
            visualHint: 'Parallel lines go in the same direction'
        });

        if (solution.throughPoint) {
            steps.push({
                stepNumber: 3,
                step: 'Apply point-slope form',
                description: `Use the point ${solution.throughPoint}`,
                beforeExpression: `y - y₁ = m(x - x₁)`,
                operation: 'Substitute point and slope',
                afterExpression: solution.pointSlopeForm,
                reasoning: 'Point-slope form uses a point and slope to create equation'
            });

            steps.push({
                stepNumber: 4,
                step: 'Convert to slope-intercept form',
                description: 'Solve for y to get y = mx + b',
                beforeExpression: solution.pointSlopeForm,
                operation: 'Simplify and solve for y',
                afterExpression: solution.result,
                reasoning: 'Slope-intercept form is standard format',
                finalAnswer: true
            });
        } else {
            steps.push({
                stepNumber: 3,
                step: 'General parallel equation',
                description: 'Without a specific point, equation has form:',
                expression: solution.generalForm,
                reasoning: 'Need a point to determine y-intercept',
                finalAnswer: true
            });
        }

        return steps;
    }

    generatePerpendicularSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Find slope of given line',
            description: 'Identify the slope to find perpendicular to',
            expression: `Given slope: m₁ = ${solution.givenSlope}`,
            reasoning: 'Need this to find perpendicular slope',
            goalStatement: 'Find equation of line perpendicular to given line'
        });

        if (solution.givenSlope === 'undefined (vertical)') {
            steps.push({
                stepNumber: 2,
                step: 'Perpendicular to vertical is horizontal',
                description: 'Vertical and horizontal lines are perpendicular',
                expression: `Perpendicular slope: m₂ = 0`,
                reasoning: 'Special case: vertical ⊥ horizontal',
                finalAnswer: solution.throughPoint ? false : true
            });
        } else if (solution.givenSlope === '0 (horizontal)') {
            steps.push({
                stepNumber: 2,
                step: 'Perpendicular to horizontal is vertical',
                description: 'Horizontal and vertical lines are perpendicular',
                expression: `Perpendicular slope: m₂ = undefined`,
                reasoning: 'Special case: horizontal ⊥ vertical',
                finalAnswer: solution.throughPoint ? false : true
            });
        } else {
            steps.push({
                stepNumber: 2,
                step: 'Calculate negative reciprocal',
                description: 'Perpendicular slopes are negative reciprocals',
                beforeExpression: `m₁ = ${solution.givenSlope}`,
                operation: 'Take negative reciprocal: m₂ = -1/m₁',
                afterExpression: `m₂ = ${solution.perpendicularSlope}`,
                reasoning: 'Perpendicular condition: m₁ · m₂ = -1',
                algebraicRule: 'Perpendicular Lines Property',
                visualHint: 'Flip the fraction and change the sign'
            });

            steps.push({
                stepNumber: 3,
                step: 'Verify perpendicular condition',
                description: 'Check that m₁ · m₂ = -1',
                expression: `${solution.givenSlope} × ${solution.perpendicularSlope} = ${solution.verification?.product}`,
                verification: solution.verification?.verified ? '✓ Verified' : '✗ Error',
                reasoning: 'Confirms slopes are perpendicular'
            });
        }

        if (solution.throughPoint) {
            const nextStep = steps.length + 1;
            steps.push({
                stepNumber: nextStep,
                step: 'Apply point-slope form',
                description: `Use the point ${solution.throughPoint}`,
                beforeExpression: `y - y₁ = m(x - x₁)`,
                operation: 'Substitute point and perpendicular slope',
                afterExpression: solution.pointSlopeForm,
                reasoning: 'Point-slope form creates equation through given point'
            });

            steps.push({
                stepNumber: nextStep + 1,
                step: 'Convert to slope-intercept form',
                description: 'Solve for y',
                beforeExpression: solution.pointSlopeForm,
                operation: 'Simplify',
                afterExpression: solution.result,
                reasoning: 'Standard form for final answer',
                finalAnswer: true
            });
        } else {
            steps.push({
                stepNumber: steps.length + 1,
                step: 'General perpendicular equation',
                expression: solution.generalForm || `y = ${solution.perpendicularSlope}x + b`,
                reasoning: 'Need a point to determine complete equation',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateRelationshipSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Find slope of first line',
            description: 'Calculate or identify m₁',
            expression: `m₁ = ${solution.slope1}`,
            reasoning: 'Need both slopes to compare relationship',
            goalStatement: 'Determine if lines are parallel, perpendicular, or neither'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find slope of second line',
            description: 'Calculate or identify m₂',
            expression: `m₂ = ${solution.slope2}`,
            reasoning: 'Second slope needed for comparison'
        });

        steps.push({
            stepNumber: 3,
            step: 'Check for parallel',
            description: 'Are the slopes equal?',
            beforeExpression: `m₁ = ${solution.slope1}, m₂ = ${solution.slope2}`,
            operation: 'Compare: m₁ = m₂?',
            afterExpression: solution.comparison.equal ? 'Yes, slopes are equal' : 'No, slopes are not equal',
            reasoning: 'Parallel lines have equal slopes',
            result: solution.comparison.equal ? 'Lines are PARALLEL' : 'Not parallel'
        });

        if (!solution.comparison.equal) {
            steps.push({
                stepNumber: 4,
                step: 'Check for perpendicular',
                description: 'Does m₁ · m₂ = -1?',
                beforeExpression: `m₁ · m₂ = ${solution.slope1} × ${solution.slope2}`,
                operation: 'Calculate product',
                afterExpression: `Product = ${solution.comparison.product}`,
                reasoning: 'Perpendicular lines have slopes whose product is -1',
                result: solution.comparison.productEqualsNegativeOne ? 'Lines are PERPENDICULAR' : 'Not perpendicular'
            });

            steps.push({
                stepNumber: 5,
                step: 'Final conclusion',
                description: 'Determine relationship',
                expression: solution.result,
                reasoning: solution.comparison.productEqualsNegativeOne ? 
                    'Product equals -1, so perpendicular' : 
                    'Neither condition met, so neither parallel nor perpendicular',
                finalAnswer: true
            });
        } else {
            steps.push({
                stepNumber: 4,
                step: 'Conclusion',
                expression: 'Lines are PARALLEL',
                reasoning: 'Slopes are equal',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateGeometricVerificationSteps(problem, solution) {
        const steps = [];

        if (problem.type === 'verify_parallelogram') {
            steps.push({
                stepNumber: 1,
                step: 'State vertices',
                description: 'Identify the four vertices',
                expression: `A: ${solution.vertices.A}, B: ${solution.vertices.B}, C: ${solution.vertices.C}, D: ${solution.vertices.D}`,
                reasoning: 'Need all vertices to check opposite sides',
                goalStatement: 'Verify if opposite sides are parallel'
            });

            steps.push({
                stepNumber: 2,
                step: 'Calculate slope of side AB',
                description: 'Find slope between A and B',
                expression: `Slope AB = ${solution.slopes.AB}`,
                reasoning: 'First side of potential parallelogram'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate slope of side CD',
                description: 'Find slope between C and D (opposite side)',
                expression: `Slope CD = ${solution.slopes.CD}`,
                reasoning: 'Opposite side to AB'
            });

            steps.push({
                stepNumber: 4,
                step: 'Check if AB ∥ CD',
                description: 'Are slopes equal?',
                expression: `AB ∥ CD? ${solution.checks.AB_parallel_CD ? 'Yes ✓' : 'No ✗'}`,
                reasoning: 'Parallel opposite sides required for parallelogram'
            });

            steps.push({
                stepNumber: 5,
                step: 'Calculate slope of side BC',
                description: 'Find slope between B and C',
                expression: `Slope BC = ${solution.slopes.BC}`,
                reasoning: 'Second pair of sides to check'
            });

            steps.push({
                stepNumber: 6,
                step: 'Calculate slope of side DA',
                description: 'Find slope between D and A (opposite side)',
                expression: `Slope DA = ${solution.slopes.DA}`,
                reasoning: 'Opposite side to BC'
            });

            steps.push({
                stepNumber: 7,
                step: 'Check if BC ∥ DA',
                description: 'Are slopes equal?',
                expression: `BC ∥ DA? ${solution.checks.BC_parallel_DA ? 'Yes ✓' : 'No ✗'}`,
                reasoning: 'Both pairs of opposite sides must be parallel'
            });

            steps.push({
                stepNumber: 8,
                step: 'Conclusion',
                description: 'Final determination',
                expression: solution.result,
                reasoning: solution.isParallelogram ? 
                    'Both pairs of opposite sides are parallel' : 
                    'Not all opposite sides are parallel',
                finalAnswer: true
            });

        } else if (problem.type === 'verify_rectangle') {
            steps.push({
                stepNumber: 1,
                step: 'Verify parallelogram first',
                description: 'Rectangle must first be a parallelogram',
                expression: solution.parallelogramCheck,
                reasoning: 'All rectangles are parallelograms'
            });

            steps.push({
                stepNumber: 2,
                step: 'Check perpendicularity of adjacent sides',
                description: 'Adjacent sides must meet at right angles',
                expression: `Slope AB = ${solution.perpendicularCheck?.slopeAB}, Slope BC = ${solution.perpendicularCheck?.slopeBC}`,
                reasoning: 'Rectangle has perpendicular adjacent sides'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate product of slopes',
                description: 'Check if m₁ · m₂ = -1',
                expression: `Product = ${solution.perpendicularCheck?.product}`,
                verification: solution.perpendicularCheck?.isPerpendicular ? '✓ Equals -1' : '✗ Does not equal -1',
                reasoning: 'Perpendicular condition for rectangle'
            });

            steps.push({
                stepNumber: 4,
                step: 'Conclusion',
                expression: solution.result,
                reasoning: solution.isRectangle ? 
                    'Parallelogram with perpendicular adjacent sides = rectangle' : 
                    'Not a rectangle',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateGeometricApplicationSteps(problem, solution) {
        const steps = [];

        if (problem.type === 'altitude_triangle') {
            steps.push({
                stepNumber: 1,
                step: 'Identify the base',
                description: 'Altitude is perpendicular to this base',
                expression: solution.base,
                reasoning: 'Altitude extends from opposite vertex perpendicular to base',
                goalStatement: 'Find equation of altitude'
            });

            steps.push({
                stepNumber: 2,
                step: 'Find slope of base',
                description: 'Calculate slope between base endpoints',
                expression: `Base slope = ${solution.baseSlope}`,
                reasoning: 'Need base slope to find perpendicular slope'
            });

            steps.push({
                stepNumber: 3,
                step: 'Find perpendicular slope',
                description: 'Altitude slope is perpendicular to base',
                beforeExpression: `m_base = ${solution.baseSlope}`,
                operation: 'Calculate negative reciprocal',
                afterExpression: `m_altitude = ${solution.altitudeSlope}`,
                reasoning: 'Altitude must be perpendicular to base'
            });

            steps.push({
                stepNumber: 4,
                step: 'Write altitude equation',
                description: `Passes through ${solution.throughVertex || 'opposite vertex'}`,
                expression: solution.result,
                reasoning: 'Use point-slope form through opposite vertex',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateGenericSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Solution',
            description: solution.type || 'Parallel/Perpendicular problem',
            expression: solution.result || 'See solution details',
            reasoning: 'Complete solution provided',
            finalAnswer: true
        }];
    }

    // ENHANCED EXPLANATION METHODS (similar to simple linear)

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

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Find slope of given line': 'The slope tells us the direction and steepness of the line. We need this as our reference.',
            'Use parallel slope condition': 'Parallel lines go in the same direction, so they have identical slopes.',
            'Calculate negative reciprocal': 'Perpendicular lines meet at right angles. Their slopes are negative reciprocals, ensuring they form a 90° angle.',
            'Apply slope formula': 'Slope measures how much y changes for each unit change in x. It\'s the "rise over run".',
            'Check for parallel': 'If slopes are equal, lines go in the same direction and never meet.',
            'Check for perpendicular': 'If slope product equals -1, lines meet at a perfect right angle.',
            'Apply point-slope form': 'This form uses a known point and slope to build the equation.'
        };

        return conceptualExplanations[step.step] || 'This step advances us toward the solution.';
    }

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Start with: ${step.beforeExpression || 'given information'}
2. ${step.operation}
3. Result: ${step.afterExpression || step.expression}
4. Verify the step makes sense`;
        }
        return 'Follow the standard procedure for this step.';
    }

    getVisualExplanation(step, problem) {
        const category = this.lineTypes[problem.type]?.category;
        
        const visualExplanations = {
            'slope_calculation': 'Draw a right triangle under the line segment. The slope is the height divided by the base.',
            'parallel': 'Imagine train tracks - they have the same slope and never meet.',
            'perpendicular': 'Picture a plus sign (+) or the corner of a square - that\'s a 90° angle.',
            'relationship': 'Graph both lines to see if they\'re parallel (never meet), perpendicular (form right angle), or neither.'
        };

        return visualExplanations[category] || 'Visualize this on a coordinate plane.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Apply slope formula': 'Slope Formula: m = (y₂ - y₁)/(x₂ - x₁)',
            'Use parallel slope condition': 'Parallel Condition: m₁ = m₂',
            'Calculate negative reciprocal': 'Perpendicular Condition: m₁ · m₂ = -1, so m₂ = -1/m₁',
            'Apply point-slope form': 'Point-Slope Form: y - y₁ = m(x - x₁)',
            'Convert to slope-intercept form': 'Slope-Intercept Form: y = mx + b'
        };

        return algebraicRules[step.step] || step.algebraicRule || 'Apply standard algebraic principles.';
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
                'negative reciprocal': 'flip and change sign',
                'slope': 'steepness',
                'perpendicular': 'at right angles',
                'parallel': 'never meeting',
                'coordinate': 'point location',
                'coefficient': 'number with variable',
                'substitute': 'plug in'
            },
            intermediate: {
                'negative reciprocal': 'negative reciprocal',
                'slope': 'slope',
                'perpendicular': 'perpendicular',
                'parallel': 'parallel'
            },
            ELI5: {
                'negative reciprocal': 'flip the fraction upside down and change + to - or - to +',
                'slope': 'how steep the line is (like a hill)',
                'perpendicular': 'forming a perfect square corner (like the letter L)',
                'parallel': 'like train tracks that never touch',
                'coordinate': 'the (x, y) location of a point',
                'rise over run': 'how far up divided by how far across',
                'product': 'what you get when you multiply',
                'equation': 'a math sentence with an equals sign'
            },
            detailed: {
                'negative reciprocal': 'negative reciprocal (multiplicative inverse with opposite sign)',
                'slope': 'slope (rate of change)',
                'perpendicular': 'perpendicular (orthogonal)',
                'parallel': 'parallel (equidistant)'
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

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary to: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `Having completed ${currentStep.step}, we now proceed to ${nextStep.step} to continue solving`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return 'continue progressing toward the final answer';
    }

    explainStepBenefit(nextStep) {
        return 'bringing us closer to completing the solution';
    }

    addErrorPrevention(step, problemType) {
        const category = this.lineTypes[problemType]?.category || 'slope_calculation';
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

    generatePreventionTips(step, problemType) {
        const tips = {
            'Apply slope formula': [
                'Label points clearly as (x₁, y₁) and (x₂, y₂)',
                'Be consistent with order in numerator and denominator',
                'Watch signs when subtracting negative numbers'
            ],
            'Calculate negative reciprocal': [
                'Remember: BOTH flip AND negate',
                'If slope is whole number, write as fraction first',
                'Check your work: m₁ · m₂ should equal -1'
            ],
            'Use parallel slope condition': [
                'Parallel = SAME slope',
                'Copy the slope exactly',
                'Don\'t confuse with perpendicular'
            ],
            'Check for perpendicular': [
                'Multiply the slopes',
                'Product must equal exactly -1',
                'Watch for rounding errors'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check your arithmetic', 'Verify each step'];
    }

    generateCheckPoints(step) {
        return [
            'Did I use the correct formula?',
            'Are my calculations accurate?',
            'Does this result make sense?',
            'Am I progressing toward the answer?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            slope_calculation: step.step === 'Apply slope formula' ?
                ['Watch for division by zero (vertical line)', 'Check coordinate order'] : [],
            perpendicular: step.step === 'Calculate negative reciprocal' ?
                ['Must flip AND negate', 'Special cases: horizontal ⊥ vertical'] : [],
            parallel: step.step === 'Use parallel slope condition' ?
                ['Use same slope, not negative reciprocal'] : []
        };

        const category = this.lineTypes[problemType]?.category || 'slope_calculation';
        return warnings[category] || [];
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
            'Apply slope formula': "We're finding out how steep the line is by seeing how much it goes up or down for every step to the right!",
            'Use parallel slope condition': "Parallel lines are like train tracks - they always go the same direction, so they have the same steepness!",
            'Calculate negative reciprocal': "To make lines meet at a perfect square corner, we flip the steepness upside down and change + to - or - to +!",
            'Check for parallel': "We're checking if the lines have the same steepness - if they do, they'll never bump into each other!",
            'Check for perpendicular': "We multiply the steepness numbers. If we get -1, the lines make a perfect corner like the letter L!",
            'Apply point-slope form': "Now that we know the steepness and a spot the line goes through, we can write the complete equation!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our line puzzle!";
    }

    findRelevantAnalogy(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(this.lineTypes[problem.type]?.category) || 
                analogy.suitableFor.includes('all')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like solving a puzzle about lines!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'slope': 'steepness',
            'negative reciprocal': 'flip and opposite',
            'perpendicular': 'at a square corner',
            'parallel': 'never touching',
            'coordinate': 'location',
            'equation': 'math sentence',
            'calculate': 'figure out',
            'determine': 'find out',
            'verify': 'check if true',
            'product': 'multiply together'
        };

        let simple = description || '';
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualization(step) {
        const visualizations = {
            'Apply slope formula': 'Draw a right triangle under the line showing rise and run',
            'Use parallel slope condition': 'Draw two lines that never meet, like train tracks',
            'Calculate negative reciprocal': 'Draw two lines meeting at a square corner',
            'Check for parallel': 'Draw both lines and see if they ever cross',
            'Check for perpendicular': 'Draw lines and use a corner of paper to check if they make a right angle'
        };

        return visualizations[step.step] || 'Draw a picture of what\'s happening in this step';
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Find slope of given line': [
                'What form is the equation in?',
                'How do I extract the slope?',
                'What does the slope tell me?'
            ],
            'Use parallel slope condition': [
                'What makes lines parallel?',
                'Should the slope change?',
                'What property do parallel lines share?'
            ],
            'Calculate negative reciprocal': [
                'What makes lines perpendicular?',
                'How do I find the reciprocal?',
                'Do I also need to negate?'
            ],
            'Apply slope formula': [
                'Which coordinates are x and which are y?',
                'What order should I subtract?',
                'What if I get zero in denominator?'
            ]
        };

        return questions[step.step] || ['What is this step asking me to do?', 'How does this help?'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.lineTypes[problem.type]?.category || 'slope_calculation';
        const hintSet = this.hints[category] || this.hints.slope_from_points;

        return {
            level1: hintSet.level1 || 'What concept applies here?',
            level2: hintSet.level2 || 'What formula or rule should you use?',
            level3: hintSet.level3 || 'How do you apply that formula?',
            level4: hintSet.level4 || 'Here\'s the specific calculation'
        };
    }

    breakIntoSubSteps(step) {
        if (step.step === 'Apply slope formula') {
            return [
                'Label the two points',
                'Subtract y-coordinates (y₂ - y₁)',
                'Subtract x-coordinates (x₂ - x₁)',
                'Divide: rise ÷ run',
                'Simplify if possible'
            ];
        }

        if (step.step === 'Calculate negative reciprocal') {
            return [
                'Write slope as a fraction',
                'Flip the fraction (reciprocal)',
                'Change the sign (make it negative)',
                'Verify by multiplying: should get -1'
            ];
        }

        return ['Understand what\'s needed', 'Apply the technique', 'Verify the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same type of problem with different numbers',
            practiceHint: 'Practice with simple integer slopes first',
            extension: 'Once comfortable, try fractional and negative slopes'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to find?',
            strategy: 'What method should I use?',
            execute: 'How do I carry out this method?',
            verify: 'Does my answer make sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which formula or rule applies?',
            'What order should I work in?',
            'Are there any special cases to watch for?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'Apply slope formula': [
                'Could graph the points and count rise/run visually',
                'Could use slope formula in either order (both work)'
            ],
            'Calculate negative reciprocal': [
                'Could verify by checking product equals -1',
                'Could think geometrically about perpendicular directions'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the solution process`,
            progression: 'We are moving toward the final equation or answer',
            relationship: 'Each step uses results from previous steps'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.lineTypes[problemType]?.category || 'slope_calculation';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic algebra', 'Understanding coordinates'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Apply slope formula': ['slope', 'rise', 'run', 'coordinates', 'formula'],
            'Use parallel slope condition': ['parallel', 'equal slopes', 'same direction'],
            'Calculate negative reciprocal': ['perpendicular', 'negative', 'reciprocal', 'right angle'],
            'Check for parallel': ['parallel', 'equal', 'comparison'],
            'Check for perpendicular': ['perpendicular', 'product', 'negative one']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before starting, what do I need to identify or calculate?',
            during: 'As I work, what should I be careful about?',
            after: 'After completing, how can I verify this is correct?'
        };
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Apply slope formula': 'Did I subtract in consistent order for both numerator and denominator?',
            'Use parallel slope condition': 'Did I keep the slope exactly the same?',
            'Calculate negative reciprocal': 'Did I both flip the fraction AND change the sign?',
            'Check for parallel': 'Are the two slopes exactly equal?',
            'Check for perpendicular': 'Does the product of slopes equal exactly -1?'
        };

        return questions[step.step] || 'Does this step make sense and progress toward the solution?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Apply slope formula': 'A number (could be positive, negative, zero, or undefined)',
            'Use parallel slope condition': 'The same slope as the given line',
            'Calculate negative reciprocal': 'A slope where original × new = -1',
            'Check for parallel': 'Yes or No answer',
            'Check for perpendicular': 'Yes or No answer'
        };

        return expectations[step.step] || 'Progress toward final answer';
    }

    generateTroubleshootingTips(step) {
        return [
            'Review the formula or rule for this step',
            'Check your arithmetic carefully',
            'Make sure you\'re using the right values',
            'Try working backwards to verify',
            'Draw a picture if it helps visualize'
        ];
    }

    findRealWorldConnection(step, problem) {
        const connections = {
            'slope_calculation': 'Like measuring how steep a wheelchair ramp or ski slope is',
            'parallel': 'Like parallel parking - your car stays parallel to the curb',
            'perpendicular': 'Like streets at a corner making a 90-degree turn',
            'relationship': 'Like comparing road directions - same, opposite, or at right angles'
        };

        const category = this.lineTypes[problem.type]?.category;
        return connections[category] || 'Lines and slopes appear in architecture, engineering, and navigation';
    }

    // GRAPH GENERATION

    generateParallelPerpendicularGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        this.graphData = this.generateLineGraphVisualization(this.currentProblem, this.currentSolution);
    }

    generateLineGraphVisualization(problem, solution) {
        return {
            type: 'line_graph',
            description: 'Visual representation of the lines',
            category: this.lineTypes[problem.type]?.category,
            solution: solution,
            visualization: 'Graph showing the line(s) and their relationship'
        };
    }

    // WORKBOOK GENERATION

    generateParallelPerpendicularWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createLessonSection(),
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
            title: 'Enhanced Parallel and Perpendicular Lines Mathematical Workbook',
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
            ['Problem Type', this.lineTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.lineTypes[this.currentProblem.type]?.category || 'line_analysis'],
            ['Description', this.currentProblem.scenario || this.currentSolution?.type || 'Parallel/Perpendicular problem']
        ];

        // Add specific parameters based on problem type
        if (this.currentProblem.parameters.point1) {
            problemData.push(['', '']);
            problemData.push(['Given Information', '']);
            if (this.currentProblem.parameters.point1) {
                problemData.push(['Point 1', `(${this.currentProblem.parameters.point1.x}, ${this.currentProblem.parameters.point1.y})`]);
            }
            if (this.currentProblem.parameters.point2) {
                problemData.push(['Point 2', `(${this.currentProblem.parameters.point2.x}, ${this.currentProblem.parameters.point2.y})`]);
            }
            if (this.currentProblem.parameters.slope !== undefined) {
                problemData.push(['Slope', this.currentProblem.parameters.slope]);
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

        const category = this.lineTypes[this.currentProblem.type]?.category;
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
                stepsData.push(['Connection', step.explanation.currentState]);
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

            if (step.algebraicRule) {
                stepsData.push(['Rule Used', step.algebraicRule]);
            }

            if (step.verification) {
                stepsData.push(['Verification', step.verification]);
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

            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
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

    createLessonSection() {
        const { type } = this.currentProblem;
        const category = this.lineTypes[type]?.category;

        const lessonKey = category === 'slope_calculation' ? 'slope_concepts' :
                         category === 'parallel' ? 'parallel_lines' :
                         category === 'perpendicular' ? 'perpendicular_lines' :
                         'slope_concepts';

        const lesson = this.lessons[lessonKey];

        if (!lesson) return null;

        const lessonData = [
            ['Key Concepts', ''],
            ...lesson.concepts.map(c => ['', c]),
            ['', ''],
            ['Theory', lesson.theory]
        ];

        if (lesson.keyFormulas) {
            lessonData.push(['', '']);
            lessonData.push(['Key Formulas', '']);
            Object.entries(lesson.keyFormulas).forEach(([name, formula]) => {
                lessonData.push([name, formula]);
            });
        }

        return {
            title: lesson.title,
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.result !== null && this.currentSolution.result !== undefined) {
            solutionData.push(['Solution', this.currentSolution.result]);
            solutionData.push(['Type', this.currentSolution.type]);
            
            if (this.currentSolution.slope !== undefined) {
                solutionData.push(['Slope', this.currentSolution.slope]);
            }
            if (this.currentSolution.relationship) {
                solutionData.push(['Relationship', this.currentSolution.relationship]);
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
            ['Solution Method', this.currentSolution.type],
            ['Category', this.lineTypes[this.currentProblem.type]?.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel]
        ];

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution) return null;

        const verificationData = [
            ['Verification Method', 'Check solution validity']
        ];

        if (this.currentSolution.verification) {
            verificationData.push(['Product Check', `${this.currentSolution.verification.product}`]);
            verificationData.push(['Verified', this.currentSolution.verification.verified ? 'Yes ✓' : 'No ✗']);
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
            ['Real-World Applications', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Concept', app.concept]);
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

        const notes = this.generatePedagogicalNotes(this.currentProblem.type);

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['Key Concepts', notes.keyConcepts.join('; ')],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['Common Difficulties', notes.commonDifficulties.join('; ')],
                ['Teaching Strategies', notes.teachingStrategies.join('; ')],
                ['Extension Ideas', notes.extensions.join('; ')]
            ]
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateAlternativeMethods(this.currentProblem.type);

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

    generatePedagogicalNotes(problemType) {
        const category = this.lineTypes[problemType]?.category;

        const pedagogicalDatabase = {
            slope_calculation: {
                objectives: [
                    'Calculate slope from two points',
                    'Understand slope as rate of change',
                    'Interpret positive, negative, zero, and undefined slopes'
                ],
                keyConcepts: [
                    'Slope = rise/run',
                    'Slope measures steepness and direction',
                    'Vertical lines have undefined slope'
                ],
                prerequisites: [
                    'Coordinate plane',
                    'Plotting points',
                    'Subtraction and division'
                ],
                commonDifficulties: [
                    'Mixing up x and y coordinates',
                    'Inconsistent order in numerator and denominator',
                    'Division by zero confusion'
                ],
                teachingStrategies: [
                    'Use rise-over-run visual',
                    'Practice with graph paper',
                    'Connect to real-world steepness'
                ],
                extensions: [
                    'Finding slope from equations',
                    'Parallel and perpendicular lines',
                    'Applications in physics and engineering'
                ]
            },
            parallel: {
                objectives: [
                    'Identify parallel lines by equal slopes',
                    'Write equations of parallel lines',
                    'Apply parallel concepts to geometry'
                ],
                keyConcepts: [
                    'Parallel lines have equal slopes',
                    'Parallel lines never intersect',
                    'm₁ = m₂ for parallel lines'
                ],
                prerequisites: [
                    'Finding slope',
                    'Point-slope form',
                    'Slope-intercept form'
                ],
                commonDifficulties: [
                    'Confusing parallel with perpendicular',
                    'Changing slope instead of y-intercept',
                    'Not using given point correctly'
                ],
                teachingStrategies: [
                    'Use train track analogy',
                    'Graph multiple parallel lines',
                    'Emphasize "same slope"'
                ],
                extensions: [
                    'Systems of equations',
                    'Parallelograms and parallel sides',
                    'Distance between parallel lines'
                ]
            },
            perpendicular: {
                objectives: [
                    'Identify perpendicular lines by slope product = -1',
                    'Calculate negative reciprocals',
                    'Write equations of perpendicular lines'
                ],
                keyConcepts: [
                    'Perpendicular lines form 90° angles',
                    'Perpendicular slopes are negative reciprocals',
                    'm₁ · m₂ = -1'
                ],
                prerequisites: [
                    'Finding slope',
                    'Reciprocals',
                    'Negative numbers'
                ],
                commonDifficulties: [
                    'Forgetting to negate OR flip (need both)',
                    'Special cases: horizontal and vertical',
                    'Arithmetic errors with fractions'
                ],
                teachingStrategies: [
                    'Practice reciprocals separately',
                    'Use corner/right angle visuals',
                    'Verify with product check'
                ],
                extensions: [
                    'Rectangles and perpendicular sides',
                    'Altitudes in triangles',
                    'Orthogonal vectors'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Understand line relationships'],
            keyConcepts: ['Slopes determine relationships'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Visual and algebraic approaches'],
            extensions: ['Advanced geometric applications']
        };
    }

    generateAlternativeMethods(problemType) {
        const category = this.lineTypes[problemType]?.category;

        const alternativeDatabase = {
            slope_calculation: {
                primaryMethod: 'Slope Formula',
                methods: [
                    {
                        name: 'Graphical Method',
                        description: 'Plot points and count rise over run on graph paper'
                    },
                    {
                        name: 'Table Method',
                        description: 'Use table to find change in y and change in x'
                    }
                ],
                comparison: 'Formula is most precise; graphical good for visualization; table helps organize data'
            },
            parallel: {
                primaryMethod: 'Same Slope with Point-Slope Form',
                methods: [
                    {
                        name: 'Direct Substitution',
                        description: 'Use y = mx + b and solve for b with given point'
                    },
                    {
                        name: 'Translation Method',
                        description: 'Shift original line to pass through new point'
                    }
                ],
                comparison: 'Point-slope most systematic; direct substitution faster for simple cases'
            },
            perpendicular: {
                primaryMethod: 'Negative Reciprocal with Point-Slope Form',
                methods: [
                    {
                        name: 'Product Check Method',
                        description: 'Find slope where product with given slope equals -1'
                    },
                    {
                        name: 'Geometric Construction',
                        description: 'Use perpendicular construction with compass and straightedge'
                    }
                ],
                comparison: 'Negative reciprocal most direct; product check good for verification'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard algebraic approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods may apply'
            }],
            comparison: 'Choose method based on given information'
        };
    }
}

// Export the class
export default EnhancedParallelPerpendicularLinesWorkbook;
