// Enhanced Absolute Value Linear Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedAbsoluteValueLinearMathematicalWorkbook {
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
        this.initializeAbsoluteValueSolvers();
        this.initializeAbsoluteValueLessons();
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
            'abs': '| |', 'absolute': '| |',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥'
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
                absValueBg: '#e6f3ff',
                absValueText: '#003d7a'
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
                absValueBg: '#bbdefb',
                absValueText: '#0d47a1'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeAbsoluteValueLessons() {
        this.lessons = {
            absolute_value_basics: {
                title: "Understanding Absolute Value",
                concepts: [
                    "Absolute value represents distance from zero on number line",
                    "|x| is always non-negative (≥ 0)",
                    "|x| = x when x ≥ 0, and |x| = -x when x < 0",
                    "Geometric interpretation: distance without direction"
                ],
                theory: "Absolute value measures magnitude without regard to sign. It's the 'how far' without the 'which way'.",
                keyFormulas: {
                    "Definition": "|x| = { x if x ≥ 0, -x if x < 0 }",
                    "Distance": "|a - b| = distance between a and b",
                    "Basic Property": "|x| = |-x|",
                    "Non-negative": "|x| ≥ 0 for all x"
                },
                fundamentalProperties: [
                    "|x| = 0 if and only if x = 0",
                    "|xy| = |x||y|",
                    "|x/y| = |x|/|y| (when y ≠ 0)",
                    "Triangle inequality: |x + y| ≤ |x| + |y|"
                ],
                applications: [
                    "Measuring error or tolerance in manufacturing",
                    "Calculating deviation from target value",
                    "Temperature variation from normal",
                    "Distance calculations regardless of direction"
                ]
            },

            simple_absolute_value_equations: {
                title: "Simple Absolute Value Equations",
                concepts: [
                    "Form: |x| = a where a ≥ 0",
                    "Two solutions: x = a or x = -a",
                    "No solution if a < 0",
                    "One solution (x = 0) if a = 0"
                ],
                theory: "Since absolute value represents distance from zero, |x| = a means x is a units away from zero in either direction.",
                keyFormulas: {
                    "Basic Form": "|x| = a",
                    "Solution (a > 0)": "x = a or x = -a",
                    "Solution (a = 0)": "x = 0",
                    "Solution (a < 0)": "No solution"
                },
                solvingSteps: [
                    "Check if right side is non-negative",
                    "If yes, set up two equations: x = a and x = -a",
                    "Solve both equations",
                    "Verify both solutions"
                ],
                applications: [
                    "Finding values at equal distance from zero",
                    "Tolerance ranges in measurements",
                    "Temperature deviations"
                ]
            },

            linear_absolute_value_equations: {
                title: "Linear Absolute Value Equations",
                concepts: [
                    "Form: |ax + b| = c where a ≠ 0",
                    "Isolate absolute value first if needed",
                    "Split into two linear equations",
                    "Usually two solutions, sometimes one, sometimes none"
                ],
                theory: "Linear absolute value equations involve an expression inside absolute value bars equal to a constant. They require splitting into positive and negative cases.",
                keyFormulas: {
                    "Standard Form": "|ax + b| = c",
                    "Positive Case": "ax + b = c",
                    "Negative Case": "ax + b = -c",
                    "Solution Method": "Solve both linear equations"
                },
                solvingSteps: [
                    "Isolate absolute value expression (if not already)",
                    "Check if right side is non-negative",
                    "Set up positive case: ax + b = c",
                    "Set up negative case: ax + b = -c",
                    "Solve both linear equations",
                    "Check all solutions in original equation"
                ],
                specialCases: {
                    "Right side negative": "No solution",
                    "Right side zero": "One solution from ax + b = 0",
                    "Both cases give same solution": "One unique solution"
                },
                applications: [
                    "Manufacturing tolerance: |actual - target| = allowable error",
                    "Temperature control: |temp - setpoint| = acceptable range",
                    "Quality control specifications"
                ]
            },

            compound_absolute_value_equations: {
                title: "Compound Absolute Value Equations",
                concepts: [
                    "Multiple absolute value expressions",
                    "Form: |ax + b| + |cx + d| = e or |ax + b| = |cx + d|",
                    "Requires case analysis based on sign changes",
                    "Critical points where expressions inside change sign"
                ],
                theory: "When multiple absolute values appear, we must consider different regions where each expression is positive or negative.",
                keyFormulas: {
                    "Two Absolute Values": "|ax + b| = |cx + d|",
                    "Case 1": "ax + b = cx + d",
                    "Case 2": "ax + b = -(cx + d)",
                    "Sum Form": "|ax + b| + |cx + d| = e"
                },
                solvingSteps: [
                    "Identify critical points where each expression equals zero",
                    "Determine sign of each expression in each region",
                    "Remove absolute value bars in each region",
                    "Solve resulting equations",
                    "Check which solutions fall in their respective regions",
                    "Verify all potential solutions"
                ],
                applications: [
                    "Combined tolerances in multi-stage processes",
                    "Comparing deviations from different standards",
                    "Complex distance relationships"
                ]
            },

            absolute_value_with_two_solutions: {
                title: "Absolute Value Equations with Two Solutions",
                concepts: [
                    "Most common case: |expression| = positive number",
                    "Symmetric solutions around critical value",
                    "Graphically: horizontal line intersects V-shape twice",
                    "Both solutions must be verified"
                ],
                theory: "Two-solution cases occur when the value inside the absolute value can achieve the target both positively and negatively.",
                keyFormulas: {
                    "Standard": "|ax + b| = c (c > 0)",
                    "Solution 1": "x = (c - b)/a",
                    "Solution 2": "x = (-c - b)/a",
                    "Relationship": "Solutions equidistant from critical point"
                },
                solvingSteps: [
                    "Ensure absolute value is isolated",
                    "Verify right side is positive",
                    "Solve positive case",
                    "Solve negative case",
                    "Verify both solutions work",
                    "Express solution set"
                ],
                applications: [
                    "Acceptable range around target value",
                    "Symmetric tolerances",
                    "Bidirectional error bounds"
                ]
            },

            absolute_value_with_one_solution: {
                title: "Absolute Value Equations with One Solution",
                concepts: [
                    "Occurs when right side equals zero",
                    "Or when both cases yield same solution",
                    "Or when one solution doesn't satisfy original equation",
                    "Special boundary case"
                ],
                theory: "One-solution cases represent boundary conditions where the expression inside the absolute value reaches exactly zero or where geometric constraints limit solutions.",
                keyFormulas: {
                    "Zero Case": "|ax + b| = 0 → x = -b/a",
                    "Collapsed Cases": "Both positive and negative cases give same x",
                    "Extraneous Solution": "One case produces invalid solution"
                },
                solvingSteps: [
                    "Recognize special case (right side = 0 or other indicator)",
                    "Solve equation(s)",
                    "Check if solutions are truly distinct",
                    "Verify in original equation",
                    "Explain why only one solution exists"
                ],
                applications: [
                    "Exact target achievement (zero tolerance)",
                    "Critical threshold values",
                    "Boundary conditions in physical systems"
                ]
            },

            absolute_value_no_solution: {
                title: "Absolute Value Equations with No Solution",
                concepts: [
                    "Occurs when right side is negative",
                    "Absolute value is always non-negative",
                    "Represents impossible condition",
                    "Important to recognize to avoid wasted effort"
                ],
                theory: "Since |expression| ≥ 0 always, setting it equal to a negative number creates a contradiction.",
                keyFormulas: {
                    "Contradiction": "|expression| = negative → No solution",
                    "Property": "|x| ≥ 0 for all real x",
                    "Impossibility": "Cannot have distance be negative"
                },
                solvingSteps: [
                    "Check sign of right side after isolation",
                    "If negative, immediately conclude no solution",
                    "Explain the mathematical impossibility",
                    "State solution set as empty set (∅)"
                ],
                applications: [
                    "Impossible tolerance specifications",
                    "Invalid quality control criteria",
                    "Recognizing physically impossible conditions"
                ]
            },

            absolute_value_with_coefficients: {
                title: "Absolute Value with Coefficients and Constants",
                concepts: [
                    "Form: a|bx + c| + d = e",
                    "Must isolate absolute value first",
                    "Then divide by coefficient of absolute value",
                    "Then split into two cases"
                ],
                theory: "When absolute value is multiplied by a coefficient or has constants added, we must isolate it before splitting into cases.",
                keyFormulas: {
                    "General Form": "a|bx + c| + d = e",
                    "Isolate": "|bx + c| = (e - d)/a",
                    "Check": "(e - d)/a must be ≥ 0",
                    "Then Split": "bx + c = ±(e - d)/a"
                },
                solvingSteps: [
                    "Subtract constant term from both sides",
                    "Divide by coefficient of absolute value",
                    "Check if result is non-negative",
                    "If yes, split into two cases",
                    "Solve both resulting linear equations",
                    "Verify all solutions"
                ],
                applications: [
                    "Scaled tolerances",
                    "Weighted deviations",
                    "Adjusted acceptance criteria"
                ]
            },

            absolute_value_word_problems: {
                title: "Absolute Value Word Problems",
                concepts: [
                    "Translate verbal descriptions to absolute value equations",
                    "Key phrases: 'distance from', 'deviation from', 'tolerance'",
                    "Set up |actual - target| = allowable difference",
                    "Interpret solutions in context"
                ],
                theory: "Absolute value naturally models situations involving deviation, error, tolerance, or distance without caring about direction.",
                problemTypes: {
                    "Tolerance": "Finding acceptable range around target",
                    "Distance": "Points at given distance from reference",
                    "Deviation": "Values that differ by specific amount",
                    "Temperature": "Acceptable temperature ranges",
                    "Manufacturing": "Quality control specifications",
                    "Error": "Acceptable error margins"
                },
                commonPhrases: {
                    "distance from": "|x - a|",
                    "deviation from": "|x - target|",
                    "within ... of": "|x - center| ≤ range",
                    "differs by": "|x - y| = difference",
                    "tolerance of": "|actual - ideal| ≤ tolerance",
                    "at most ... from": "|x - a| ≤ bound"
                },
                solvingSteps: [
                    "Identify what is unknown (define variable)",
                    "Identify target/reference value",
                    "Identify allowable deviation/distance",
                    "Set up absolute value equation or inequality",
                    "Solve mathematically",
                    "Interpret in context with units"
                ]
            },

            graphical_interpretation: {
                title: "Graphical Understanding of Absolute Value Equations",
                concepts: [
                    "Graph of y = |x| is V-shaped",
                    "Graph of y = |ax + b| is V-shaped, shifted and scaled",
                    "Solutions are x-intercepts of y = |ax + b| - c",
                    "Number of solutions relates to how horizontal line intersects V-shape"
                ],
                theory: "Absolute value creates a 'corner' at the point where the expression inside equals zero. The graph changes slope direction at this critical point.",
                keyFormulas: {
                    "Basic Graph": "y = |x| (vertex at origin, slopes ±1)",
                    "Transformed": "y = |ax + b| (vertex at x = -b/a)",
                    "Shifted": "y = |ax + b| + k (vertical shift by k)",
                    "Solution Graph": "Intersection of y = |ax + b| and y = c"
                },
                graphicalProperties: [
                    "Vertex (corner point) at x = -b/a for |ax + b|",
                    "Symmetric V-shape",
                    "Two rays with slopes a and -a",
                    "Always non-negative (graph above or on x-axis)"
                ],
                solutionCounting: {
                    "c > vertex": "Two solutions (line crosses both rays)",
                    "c = vertex value": "One solution (line touches vertex)",
                    "c < vertex": "No solution (line below V-shape)"
                },
                applications: [
                    "Visual verification of solutions",
                    "Understanding solution count",
                    "Estimating solution values",
                    "Connecting algebra to geometry"
                ]
            }
        };
    }

    initializeAbsoluteValueSolvers() {
        this.absoluteValueTypes = {
            simple_absolute_value: {
                patterns: [
                    /\|x\|\s*=\s*([+-]?\d+\.?\d*)/,
                    /abs\(x\)\s*=\s*([+-]?\d+\.?\d*)/,
                    /\|x\|\s*=\s*([+-]?\d+\.?\d*)$/
                ],
                solver: this.solveSimpleAbsoluteValue.bind(this),
                name: 'Simple Absolute Value Equation',
                category: 'simple_absolute_value',
                description: 'Solves |x| = a'
            },

            linear_inside_absolute_value: {
                patterns: [
                    /\|([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)\|\s*=\s*([+-]?\d+\.?\d*)/,
                    /abs\(([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)\)\s*=\s*([+-]?\d+\.?\d*)/
                ],
                solver: this.solveLinearInsideAbsoluteValue.bind(this),
                name: 'Linear Absolute Value Equation',
                category: 'linear_absolute_value',
                description: 'Solves |ax + b| = c'
            },

            absolute_value_with_coefficient: {
                patterns: [
                    /([+-]?\d+\.?\d*)\s*\|\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)\s*\|\s*=\s*([+-]?\d+\.?\d*)/,
                    /([+-]?\d+\.?\d*)\s*abs\(([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)\)\s*=\s*([+-]?\d+\.?\d*)/
                ],
                solver: this.solveAbsoluteValueWithCoefficient.bind(this),
                name: 'Absolute Value with Coefficient',
                category: 'absolute_value_coefficient',
                description: 'Solves a|bx + c| = d'
            },

            absolute_value_with_constant: {
                patterns: [
                    /\|([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)\|\s*([+-]\s*\d+\.?\d*)\s*=\s*([+-]?\d+\.?\d*)/
                ],
                solver: this.solveAbsoluteValueWithConstant.bind(this),
                name: 'Absolute Value with Added Constant',
                category: 'absolute_value_constant',
                description: 'Solves |ax + b| + c = d'
            },

            compound_absolute_value: {
                patterns: [
                    /\|([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)\|\s*=\s*\|([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)\|/
                ],
                solver: this.solveCompoundAbsoluteValue.bind(this),
                name: 'Compound Absolute Value Equation',
                category: 'compound_absolute_value',
                description: 'Solves |ax + b| = |cx + d|'
            },

            word_problem_tolerance: {
                patterns: [
                    /tolerance/i,
                    /within.*of/i,
                    /deviation/i,
                    /differs?\s+by/i
                ],
                solver: this.solveToleranceProblem.bind(this),
                name: 'Tolerance/Deviation Word Problem',
                category: 'word_problem',
                description: 'Models deviation or tolerance scenarios'
            },

            word_problem_distance: {
                patterns: [
                    /distance\s+from/i,
                    /how\s+far/i,
                    /points?\s+at.*distance/i
                ],
                solver: this.solveDistanceProblem.bind(this),
                name: 'Distance Word Problem',
                category: 'word_problem',
                description: 'Models distance scenarios'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            simple_absolute_value: {
                'Check right side sign': [
                    'Forgetting that |x| = negative has no solution',
                    'Not recognizing |x| ≥ 0 always',
                    'Trying to solve when impossible'
                ],
                'Set up two equations': [
                    'Only solving one case (x = a)',
                    'Forgetting the negative case (x = -a)',
                    'Sign errors in negative case'
                ]
            },
            linear_absolute_value: {
                'Isolate absolute value first': [
                    'Trying to split into cases before isolating',
                    'Forgetting to subtract/divide to isolate',
                    'Arithmetic errors during isolation'
                ],
                'Split into two cases': [
                    'Only solving positive case',
                    'Sign error in negative case',
                    'Incorrect setup of negative case'
                ],
                'Solve both linear equations': [
                    'Arithmetic errors in solving',
                    'Sign mistakes',
                    'Not simplifying completely'
                ]
            },
            verification: {
                'Check both solutions': [
                    'Not substituting back into original equation',
                    'Accepting extraneous solutions',
                    'Arithmetic errors during verification'
                ]
            },
            conceptual: {
                'Absolute value understanding': [
                    'Thinking |x| can be negative',
                    'Not understanding distance interpretation',
                    'Confusing |x| with -x'
                ],
                'Case splitting': [
                    'Not understanding why two cases needed',
                    'Forgetting geometric interpretation',
                    'Confusion about when one vs two solutions'
                ]
            }
        };

        this.errorPrevention = {
            sign_check: {
                reminder: 'Always check if right side is non-negative before proceeding',
                method: 'After isolating absolute value, verify right side ≥ 0'
            },
            both_cases: {
                reminder: 'Absolute value equations typically have TWO cases to consider',
                method: 'Write out both ax + b = c AND ax + b = -c explicitly'
            },
            verification_critical: {
                reminder: 'ALWAYS verify solutions in the original equation',
                method: 'Substitute each solution back and check both sides equal'
            },
            geometric_thinking: {
                reminder: 'Think of absolute value as distance from zero',
                method: 'Visualize on number line - how far in each direction?'
            },
            isolation_first: {
                reminder: 'Isolate the absolute value expression before splitting into cases',
                method: 'Get |expression| by itself on one side first'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why absolute value creates two cases and geometric meaning',
                language: 'intuitive and distance-focused'
            },
            procedural: {
                focus: 'Exact sequence: isolate, check, split, solve, verify',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Number line and V-shaped graph visualization',
                language: 'visual and spatial metaphors'
            },
            algebraic: {
                focus: 'Formal definition and case-based reasoning',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete numbers and simple cases',
                emphasis: 'procedure and verification'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of concrete and abstract',
                emphasis: 'understanding why two cases'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every tiny step explained with analogies',
                examples: 'real-world analogies and stories',
                analogies: true,
                visualization: 'simple pictures and number lines',
                emphasis: 'distance and direction concepts'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive explanations with reasoning',
                examples: 'abstract and generalized cases',
                emphasis: 'rigorous case analysis'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty progression',
                emphasis: 'building understanding through inquiry'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            manufacturing_tolerance: {
                scenario: "Quality control with acceptable deviation from target",
                equation: "|actual - target| = tolerance",
                examples: [
                    "A bolt should be 5.0 cm with tolerance ±0.2 cm. What lengths are acceptable?",
                    "Machine fills bottles to 500 mL ± 5 mL. What volumes pass inspection?"
                ],
                context: "Manufacturing requires precision within specified tolerances. Absolute value models acceptable deviation.",
                setup: "If target is T and tolerance is ε, acceptable range is |x - T| ≤ ε"
            },
            temperature_control: {
                scenario: "Maintaining temperature within range of setpoint",
                equation: "|temperature - setpoint| = deviation",
                examples: [
                    "Incubator should be 37°C ± 2°C. What temperatures are acceptable?",
                    "Freezer at -18°C can vary by 3°C. Find acceptable range."
                ],
                context: "Temperature control systems maintain values within tolerance of target temperature.",
                setup: "|T - target| ≤ allowable deviation"
            },
            distance_problems: {
                scenario: "Finding locations at specific distance from reference point",
                equation: "|position - reference| = distance",
                examples: [
                    "What points on number line are 5 units from 3?",
                    "Two cities are each 100 miles from capital. Where could they be?"
                ],
                context: "Absolute value naturally represents distance without caring about direction.",
                setup: "|x - reference| = distance gives two locations"
            },
            measurement_error: {
                scenario: "Acceptable measurement error from true value",
                equation: "|measured - true| = error",
                examples: [
                    "Scale accurate to ±0.1 kg. If it reads 50 kg, what's actual weight range?",
                    "Thermometer reads 20°C ± 0.5°C. Find true temperature range."
                ],
                context: "All measurements have error. Absolute value models acceptable error range.",
                setup: "|measured - actual| ≤ maximum error"
            },
            stock_price_variation: {
                scenario: "Stock price deviation from opening price",
                equation: "|current - opening| = change",
                examples: [
                    "Stock opened at $50. If it varied by $5, what are possible closing prices?",
                    "Price changed by $3 from $40 opening. Find possible current prices."
                ],
                context: "Stock prices fluctuate. Absolute value of change indicates magnitude of movement.",
                setup: "|final - initial| = magnitude of change"
            },
            time_scheduling: {
                scenario: "Events scheduled within time window of target",
                equation: "|actual_time - scheduled_time| = acceptable_difference",
                examples: [
                    "Flight departs at 3:00 PM ± 15 minutes. What times are on schedule?",
                    "Meeting at 2:00, tolerance of 10 minutes. Find acceptable arrival times."
                ],
                context: "Scheduling allows flexibility within window. Absolute value models time deviation.",
                setup: "|actual - scheduled| ≤ tolerance"
            },
            chemical_concentration: {
                scenario: "Solution concentration within specification",
                equation: "|concentration - target| = allowable_variance",
                examples: [
                    "Solution should be 5% salt ± 0.5%. What concentrations are acceptable?",
                    "Drug concentration 250 mg/L ± 10 mg/L. Find acceptable range."
                ],
                context: "Chemical processes require concentrations within specifications.",
                setup: "|actual - target| ≤ allowable variation"
            },
            sports_records: {
                scenario: "Performance within margin of record",
                equation: "|performance - record| = difference",
                examples: [
                    "100m record is 9.58s. Times within 0.5s of record qualify. What times qualify?",
                    "High jump record 2.45m. Within 0.10m is world-class. Find qualifying heights."
                ],
                context: "Sports compare performances to records or standards.",
                setup: "|performance - standard| ≤ qualifying margin"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            simple_absolute_value: {
                skills: [
                    'Understanding of absolute value definition',
                    'Basic arithmetic',
                    'Understanding that distance is non-negative'
                ],
                priorKnowledge: [
                    'Absolute value represents distance from zero',
                    '|x| is always ≥ 0',
                    'Both positive and negative numbers can have same absolute value'
                ],
                checkQuestions: [
                    "What is |5|?",
                    "What is |-5|?",
                    "Can |x| = -3?",
                    "If |x| = 7, what are possible values of x?"
                ]
            },
            linear_absolute_value: {
                skills: [
                    'Solving linear equations',
                    'Understanding absolute value',
                    'Setting up two cases',
                    'Verification of solutions'
                ],
                priorKnowledge: [
                    'How to solve ax + b = c',
                    'Why |expression| can equal both positive and negative',
                    'Importance of checking solutions'
                ],
                checkQuestions: [
                    "Solve: 2x + 3 = 11",
                    "What is |2x - 4| when x = 5?",
                    "If |x + 1| = 3, set up two equations",
                    "Why do we need to check solutions?"
                ]
            },
            absolute_value_coefficient: {
                skills: [
                    'Multi-step equation solving',
                    'Isolating absolute value',
                    'Working with coefficients',
                    'Order of operations in reverse'
                ],
                priorKnowledge: [
                    'How to isolate a term',
                    'Division to clear coefficients',
                    'Checking non-negativity of right side'
                ],
                checkQuestions: [
                    "Solve: 3x + 5 = 20",
                    "Isolate |x|: 2|x| + 3 = 11",
                    "What do you do first in 5|x - 2| = 15?",
                    "When does an absolute value equation have no solution?"
                ]
            },
            compound_absolute_value: {
                skills: [
                    'Linear absolute value equations',
                    'Case analysis',
                    'Critical point identification',
                    'Solution verification across multiple cases'
                ],
                priorKnowledge: [
                    'Solving |ax + b| = c',
                    'Understanding when expressions are positive/negative',
                    'Combining solutions from different cases'
                ],
                checkQuestions: [
                    "Solve: |x - 2| = 5",
                    "When is x - 3 positive?",
                    "If |A| = |B|, what are the two possibilities?",
                    "How do you find critical points?"
                ]
            },
            word_problems: {
                skills: [
                    'Reading comprehension',
                    'Translating words to math',
                    'Setting up absolute value equations',
                    'Interpreting solutions in context'
                ],
                priorKnowledge: [
                    'Key phrases: distance, deviation, tolerance, within',
                    'How to define variables',
                    'Unit awareness'
                ],
                checkQuestions: [
                    "What does 'within 5 of 20' mean?",
                    "Write equation: distance from x to 10 is 3",
                    "What does |x - 50| ≤ 5 represent?",
                    "How do you interpret two solutions in context?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            number_line_distance: {
                description: "Absolute value as distance on number line",
                analogy: "How many steps from zero, regardless of direction",
                visualization: "Draw number line, mark distance from zero in both directions",
                suitableFor: ['all_absolute_value'],
                explanation: "|x| = 5 means x is 5 units from zero, so x = 5 or x = -5"
            },
            v_shaped_graph: {
                description: "Graph of absolute value function",
                analogy: "V-shape that 'bounces' at the critical point",
                visualization: "Graph y = |ax + b| showing vertex and two rays",
                suitableFor: ['all_absolute_value'],
                explanation: "Solutions are where horizontal line y = c intersects the V-shape"
            },
            two_case_split: {
                description: "Absolute value splits into positive and negative cases",
                analogy: "Like a fork in the road - two possible paths",
                visualization: "Tree diagram showing two branches",
                suitableFor: ['linear_absolute_value', 'compound_absolute_value'],
                explanation: "|expression| = c becomes: expression = c OR expression = -c"
            },
            tolerance_band: {
                description: "Acceptable range around target value",
                analogy: "Target with buffer zone on both sides",
                visualization: "Target line with shaded tolerance regions",
                suitableFor: ['word_problems'],
                explanation: "|x - target| ≤ tolerance creates symmetric band around target"
            },
            distance_between_points: {
                description: "Distance between two points on number line",
                analogy: "How far apart two locations are",
                visualization: "Two points with distance marked between them",
                suitableFor: ['distance_problems'],
                explanation: "|a - b| gives distance between a and b"
            },
            piecewise_definition: {
                description: "Absolute value as piecewise function",
                analogy: "Different rules for positive and negative inputs",
                visualization: "Two separate function rules with conditions",
                suitableFor: ['advanced_understanding'],
                explanation: "|x| = x when x ≥ 0, and |x| = -x when x < 0"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "|x| = 5",
                    solutions: [5, -5],
                    steps: [
                        "Recognize |x| = 5 means distance from zero is 5",
                        "Set up two cases: x = 5 or x = -5",
                        "Solutions: x = 5 and x = -5"
                    ],
                    difficulty: "easy",
                    category: "simple_absolute_value"
                },
                {
                    problem: "|x| = 0",
                    solutions: [0],
                    steps: [
                        "Only x = 0 has distance zero from zero",
                        "Solution: x = 0"
                    ],
                    difficulty: "easy",
                    category: "simple_absolute_value"
                },
                {
                    problem: "|x| = -3",
                    solutions: [],
                    steps: [
                        "Absolute value is always non-negative",
                        "Cannot equal -3",
                        "No solution"
                    ],
                    difficulty: "easy",
                    category: "no_solution"
                },
                {
                    problem: "|x + 2| = 5",
                    solutions: [3, -7],
                    steps: [
                        "Set up positive case: x + 2 = 5 → x = 3",
                        "Set up negative case: x + 2 = -5 → x = -7",
                        "Solutions: x = 3 and x = -7"
                    ],
                    difficulty: "easy",
                    category: "linear_absolute_value"
                }
            ],
            intermediate: [
                {
                    problem: "|2x - 3| = 7",
                    solutions: [5, -2],
                    steps: [
                        "Positive case: 2x - 3 = 7 → 2x = 10 → x = 5",
                        "Negative case: 2x - 3 = -7 → 2x = -4 → x = -2",
                        "Check x = 5: |2(5) - 3| = |7| = 7 ✓",
                        "Check x = -2: |2(-2) - 3| = |-7| = 7 ✓"
                    ],
                    difficulty: "medium",
                    category: "linear_absolute_value"
                },
                {
                    problem: "3|x - 1| = 12",
                    solutions: [5, -3],
                    steps: [
                        "Divide both sides by 3: |x - 1| = 4",
                        "Positive case: x - 1 = 4 → x = 5",
                        "Negative case: x - 1 = -4 → x = -3",
                        "Solutions: x = 5 and x = -3"
                    ],
                    difficulty: "medium",
                    category: "absolute_value_coefficient"
                },
                {
                    problem: "|x + 3| - 2 = 5",
                    solutions: [4, -10],
                    steps: [
                        "Add 2 to both sides: |x + 3| = 7",
                        "Positive case: x + 3 = 7 → x = 4",
                        "Negative case: x + 3 = -7 → x = -10",
                        "Solutions: x = 4 and x = -10"
                    ],
                    difficulty: "medium",
                    category: "absolute_value_constant"
                }
            ],
            advanced: [
                {
                    problem: "|2x + 1| = |x - 3|",
                    solutions: [2/3, -4],
                    steps: [
                        "Case 1: 2x + 1 = x - 3 → x = -4",
                        "Case 2: 2x + 1 = -(x - 3) → 2x + 1 = -x + 3 → 3x = 2 → x = 2/3",
                        "Check both solutions in original equation",
                        "Solutions: x = 2/3 and x = -4"
                    ],
                    difficulty: "hard",
                    category: "compound_absolute_value"
                },
                {
                    problem: "2|3x - 5| + 1 = 11",
                    solutions: [4, 2/3],
                    steps: [
                        "Subtract 1: 2|3x - 5| = 10",
                        "Divide by 2: |3x - 5| = 5",
                        "Positive case: 3x - 5 = 5 → 3x = 10 → x = 10/3",
                        "Negative case: 3x - 5 = -5 → 3x = 0 → x = 0",
                        "Verify both solutions"
                    ],
                    difficulty: "hard",
                    category: "complex_coefficient"
                },
                {
                    problem: "A machine fills bottles to 500 mL ± 8 mL. What volumes pass?",
                    solutions: "492 mL to 508 mL",
                    steps: [
                        "Set up: |V - 500| ≤ 8",
                        "This means: -8 ≤ V - 500 ≤ 8",
                        "Add 500: 492 ≤ V ≤ 508",
                        "Acceptable range: 492 mL to 508 mL"
                    ],
                    difficulty: "hard",
                    category: "word_problem"
                }
            ],
            byMethod: {
                simple: [
                    { problem: "|x| = 3", solutions: [3, -3] },
                    { problem: "|x| = 7", solutions: [7, -7] },
                    { problem: "|x| = 0", solutions: [0] },
                    { problem: "|x| = -5", solutions: [] }
                ],
                linear_inside: [
                    { problem: "|x + 4| = 6", solutions: [2, -10] },
                    { problem: "|x - 3| = 5", solutions: [8, -2] },
                    { problem: "|2x + 1| = 9", solutions: [4, -5] }
                ],
                with_coefficient: [
                    { problem: "2|x| = 10", solutions: [5, -5] },
                    { problem: "3|x - 2| = 15", solutions: [7, -3] },
                    { problem: "5|2x + 3| = 20", solutions: [0.5, -3.5] }
                ],
                with_constant: [
                    { problem: "|x| + 3 = 8", solutions: [5, -5] },
                    { problem: "|x - 1| + 2 = 7", solutions: [6, -4] },
                    { problem: "|2x| - 4 = 6", solutions: [5, -5] }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            negative_absolute_value: {
                misconception: "Thinking absolute value can be negative",
                reality: "|x| ≥ 0 for all real x; |x| = -5 has no solution",
                correctiveExample: "|x| = -3 is impossible because distance cannot be negative",
                commonIn: ['all_types'],
                correction: "Remember: absolute value represents distance, which is never negative"
            },
            only_positive_solution: {
                misconception: "Only considering the positive case, forgetting negative",
                reality: "|x| = 5 has TWO solutions: x = 5 and x = -5",
                correctiveExample: "Both 5 and -5 are distance 5 from zero",
                commonIn: ['simple_absolute_value', 'linear_absolute_value'],
                correction: "Always set up both cases: expression = c AND expression = -c"
            },
            wrong_negative_case: {
                misconception: "Setting up negative case as -(ax + b) = c instead of ax + b = -c",
                reality: "If |ax + b| = c, then ax + b = c OR ax + b = -c",
                correctiveExample: "|2x + 1| = 5 gives: 2x + 1 = 5 or 2x + 1 = -5 (not -(2x + 1) = 5)",
                commonIn: ['linear_absolute_value'],
                correction: "Set the inside expression equal to negative of right side"
            },
            skipping_verification: {
                misconception: "Not checking solutions in original equation",
                reality: "Must verify both solutions work in original equation",
                correctiveExample: "Some manipulations can introduce extraneous solutions",
                commonIn: ['all_types'],
                correction: "Always substitute solutions back into original equation"
            },
            forgetting_to_isolate: {
                misconception: "Splitting into cases before isolating absolute value",
                reality: "Must isolate |expression| first, then split",
                correctiveExample: "For 2|x| + 3 = 11, first get |x| = 4, then split",
                commonIn: ['absolute_value_coefficient', 'absolute_value_constant'],
                correction: "Always isolate the absolute value expression before creating two cases"
            },
            confusion_with_inequalities: {
                misconception: "Confusing |x| = a with |x| < a or |x| > a",
                reality: "|x| = a gives two values; |x| < a gives interval; |x| > a gives union",
                correctiveExample: "|x| = 3 gives x = ±3; |x| < 3 gives -3 < x < 3",
                commonIn: ['all_types'],
                correction: "Equation (=) gives points; inequality (<, >) gives regions"
            },
            arithmetic_errors_negative_case: {
                misconception: "Sign errors when solving negative case",
                reality: "Be extra careful with negatives in second case",
                correctiveExample: "If |x - 3| = 5, negative case is x - 3 = -5, so x = -2 (not x = 8)",
                commonIn: ['linear_absolute_value'],
                correction: "Work through negative case carefully, checking each step"
            },
            compound_equation_confusion: {
                misconception: "Not understanding why |A| = |B| has two cases",
                reality: "|A| = |B| means A = B or A = -B",
                correctiveExample: "|x + 1| = |x - 2| gives: x + 1 = x - 2 or x + 1 = -(x - 2)",
                commonIn: ['compound_absolute_value'],
                correction: "Two expressions have equal absolute values if they're equal or opposites"
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            absolute_value_as_distance: {
                analogy: "Distance from home",
                explanation: "Absolute value is like measuring how far you are from home. Whether you walk 5 blocks north or 5 blocks south, you're still 5 blocks away from home.",
                suitableFor: ['all_types'],
                ELI5: "If your house is at 0, and you walk to 5 or to -5, you're the same distance (5 steps) from home either way!"
            },
            two_solutions_as_opposite_directions: {
                analogy: "Going opposite ways but same distance",
                explanation: "If you need to be exactly 10 meters from a tree, you could stand 10 meters to the left OR 10 meters to the right of the tree.",
                suitableFor: ['simple_absolute_value', 'linear_absolute_value'],
                ELI5: "Imagine a tree in the middle. You can be 10 steps to the left of the tree, or 10 steps to the right. Both are exactly 10 steps away!"
            },
            tolerance_as_target_practice: {
                analogy: "Hitting near the bullseye",
                explanation: "A tolerance is like a target where you're allowed to miss the exact center by a certain amount in any direction.",
                suitableFor: ['word_problems'],
                ELI5: "If you're throwing darts and the bullseye is at 50, and you're allowed to be off by 5, you can hit anywhere from 45 to 55 and still be good!"
            },
            isolating_absolute_value: {
                analogy: "Unwrapping a present",
                explanation: "Just like unwrapping a gift by removing outer layers first, we remove constants and coefficients from outside the absolute value before opening it up.",
                suitableFor: ['absolute_value_coefficient', 'absolute_value_constant'],
                ELI5: "The absolute value is like a box with stuff around it. First take away all the stuff around the box, THEN open the box!"
            },
            v_shaped_graph: {
                analogy: "Valley in the mountains",
                explanation: "The graph of absolute value is like a V-shaped valley. The bottom of the V is the critical point, and the sides slope up in both directions.",
                suitableFor: ['graphical_interpretation'],
                ELI5: "Imagine a valley shaped like a V. The very bottom is one special point, and then it goes up on both sides like mountain slopes!"
            },
            case_splitting: {
                analogy: "Fork in the road",
                explanation: "When we split into cases, it's like coming to a fork in the road where we explore both paths to see where they lead.",
                suitableFor: ['linear_absolute_value', 'compound_absolute_value'],
                ELI5: "It's like the path splits into two roads. We walk down BOTH roads to see where they go!"
            },
            compound_absolute_value: {
                analogy: "Two people same distance from different spots",
                explanation: "|A| = |B| is like saying two people are the same distance from their respective homes.",
                suitableFor: ['compound_absolute_value'],
                ELI5: "Alice is some distance from her house, and Bob is the same distance from his house. They could both be 5 steps away, but from different starting points!"
            },
            no_solution_case: {
                analogy: "Impossible journey",
                explanation: "|x| = -5 is like asking to travel a negative distance - it doesn't make sense!",
                suitableFor: ['no_solution'],
                ELI5: "It's like someone asking 'can you walk negative 5 steps?' That's impossible! You can't walk backwards in a way that makes negative distance!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            simple_absolute_value: {
                level1: "What does absolute value mean? Think about distance.",
                level2: "Distance from zero can be achieved in two directions...",
                level3: "If |x| = a, then x could be a or -a",
                level4: "Solutions are x = {value} and x = -{value}"
            },
            linear_absolute_value: {
                level1: "What's inside the absolute value bars?",
                level2: "That expression can equal the right side positively or negatively",
                level3: "Set up two equations: {expression} = {value} and {expression} = -{value}",
                level4: "Solve both: {expression} = {value} gives x = {sol1}, and {expression} = -{value} gives x = {sol2}"
            },
            absolute_value_coefficient: {
                level1: "Is the absolute value by itself?",
                level2: "You need to isolate |expression| first",
                level3: "Divide both sides by the coefficient, then check if right side is non-negative",
                level4: "After isolating: |{expression}| = {isolated_value}, now split into two cases"
            },
            absolute_value_constant: {
                level1: "What's being added or subtracted outside the absolute value?",
                level2: "Undo that operation first to isolate |expression|",
                level3: "Subtract/add the constant from both sides",
                level4: "Once isolated, you have |{expression}| = {new_value}, now split cases"
            },
            compound_absolute_value: {
                level1: "You have two absolute value expressions equal to each other",
                level2: "Two things have equal absolute values if they're equal OR if they're opposites",
                level3: "Set up: {expr1} = {expr2} AND {expr1} = -{expr2}",
                level4: "Solve both equations and verify which solutions are valid"
            },
            verification: {
                level1: "Did you check your answers?",
                level2: "Substitute each solution back into the original equation",
                level3: "Calculate the absolute value and see if both sides match",
                level4: "If they match, the solution is valid; if not, discard it"
            },
            no_solution_recognition: {
                level1: "Look at what the absolute value equals",
                level2: "Can an absolute value be negative?",
                level3: "No! Absolute value is always ≥ 0",
                level4: "Since right side is negative, there's no solution"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "What is |7|?",
                    answer: 7,
                    assesses: "basic_absolute_value_understanding",
                    difficulty: "basic"
                },
                {
                    question: "What is |-7|?",
                    answer: 7,
                    assesses: "basic_absolute_value_understanding",
                    difficulty: "basic"
                },
                {
                    question: "Solve: |x| = 4",
                    answer: "x = 4 or x = -4",
                    assesses: "simple_absolute_value",
                    difficulty: "basic"
                },
                {
                    question: "Solve: |x + 3| = 7",
                    answer: "x = 4 or x = -10",
                    assesses: "linear_absolute_value",
                    difficulty: "intermediate"
                },
                {
                    question: "Solve: 2|x| + 1 = 9",
                    answer: "x = 4 or x = -4",
                    assesses: "isolation_and_solving",
                    difficulty: "intermediate"
                },
                {
                    question: "Does |x| = -5 have a solution?",
                    answer: "No",
                    assesses: "no_solution_recognition",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "If |x - 2| = 5, what are the two cases to consider?",
                    options: ["x - 2 = 5 and x - 2 = -5", "x = 5 and x = -5", "x - 2 = 5 and -(x - 2) = 5", "x = 2 and x = -2"],
                    correct: "x - 2 = 5 and x - 2 = -5",
                    explanation: "Set the expression inside equal to both the positive and negative of the right side"
                },
                {
                    question: "Before solving 3|x + 1| = 12, what should you do first?",
                    options: ["Split into two cases", "Divide both sides by 3", "Subtract 1 from both sides", "Add 3 to both sides"],
                    correct: "Divide both sides by 3",
                    explanation: "Isolate the absolute value by dividing by its coefficient first"
                },
                {
                    question: "Why does |x| = -3 have no solution?",
                    options: [
                        "Absolute value is always non-negative",
                        "X cannot be negative",
                        "The equation is too complex",
                        "We need more information"
                    ],
                    correct: "Absolute value is always non-negative",
                    explanation: "Absolute value represents distance, which cannot be negative"
                },
                {
                    question: "If |x| = 0, what is x?",
                    options: ["0", "0 or undefined", "All real numbers", "No solution"],
                    correct: "0",
                    explanation: "Only 0 has distance 0 from zero"
                }
            ],
            summative: [
                {
                    question: "Solve: |2x - 5| + 3 = 14",
                    answer: "x = 8 or x = -3",
                    showsWork: true,
                    rubric: {
                        isolate_absolute_value: 2,
                        setup_two_cases: 2,
                        solve_both_equations: 2,
                        verify_solutions: 2,
                        correct_answers: 2
                    }
                },
                {
                    question: "Solve: 3|x + 2| - 5 = 10",
                    answer: "x = 3 or x = -7",
                    showsWork: true,
                    rubric: {
                        add_5_to_both_sides: 1,
                        divide_by_3: 1,
                        setup_cases: 2,
                        solve_cases: 2,
                        verify: 2,
                        final_answers: 2
                    }
                },
                {
                    question: "A bolt should measure 8.0 cm with tolerance ±0.3 cm. Write and solve an absolute value equation for acceptable lengths.",
                    answer: "|x - 8.0| = 0.3, solutions: 7.7 cm to 8.3 cm",
                    showsWork: true,
                    rubric: {
                        correct_setup: 3,
                        solving: 3,
                        interpretation: 2,
                        units: 2
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "|x| = 6",
                    "|x| = 0",
                    "|x| = -2",
                    "|x + 1| = 4",
                    "|x - 3| = 5"
                ],
                medium: [
                    "|2x + 1| = 7",
                    "|3x - 5| = 10",
                    "2|x| = 12",
                    "|x| + 3 = 8",
                    "3|x - 2| = 15"
                ],
                hard: [
                    "|2x - 3| + 4 = 13",
                    "5|3x + 2| - 7 = 18",
                    "|x + 1| = |2x - 3|",
                    "2|4x - 5| + 3 = 19",
                    "|x - 2| + |x + 1| = 5"
                ]
            },
            byObjective: {
                canSolveSimple: [
                    "|x| = 5",
                    "|x| = 9",
                    "|x| = 0",
                    "|x| = -4"
                ],
                canSolveLinear: [
                    "|x + 2| = 6",
                    "|x - 4| = 3",
                    "|2x + 1| = 9",
                    "|3x - 2| = 10"
                ],
                canIsolateFirst: [
                    "2|x| = 14",
                    "|x| + 5 = 12",
                    "3|x - 1| = 21",
                    "|x + 2| - 3 = 7"
                ],
                canSolveComplex: [
                    "2|3x - 4| + 5 = 19",
                    "4|2x + 1| - 3 = 17",
                    "|x - 1| = |x + 3|"
                ],
                canSolveWordProblems: [
                    "Temperature should be 20°C ± 2°C. What temperatures are acceptable?",
                    "A package should weigh 500 g with tolerance 10 g. Find acceptable weights.",
                    "Points on number line are 7 units from 3. What are the points?"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "check_right_side_first": "Before solving, verify right side is non-negative",
                "is_absolute_value_isolated": "If yes, proceed to split; if no, isolate first",
                "isolate_method": "Undo operations outside absolute value (subtract/add, then divide/multiply)",
                "split_into_cases": "Set up: expression = value AND expression = -value",
                "solve_both_cases": "Solve each linear equation independently",
                "verify_all_solutions": "Check every solution in original equation",
                "interpret_in_context": "For word problems, explain what solutions mean"
            },
            whenToUseWhat: {
                direct_solving: "When absolute value is already isolated",
                isolation_first: "When coefficient or constant outside absolute value",
                case_analysis: "When multiple absolute values or complex expressions",
                graphical_check: "To visualize number of solutions or verify answers",
                number_line: "For conceptual understanding and verification"
            },
            methodSelection: {
                factorsToConsider: [
                    "Is absolute value isolated?",
                    "Is right side non-negative?",
                    "How many absolute value expressions?",
                    "Are there coefficients or constants outside?",
                    "Is this a word problem requiring interpretation?"
                ],
                generalApproach: [
                    "1. Check if equation is solvable (right side ≥ 0 after isolation)",
                    "2. Isolate absolute value if needed",
                    "3. Split into positive and negative cases",
                    "4. Solve both resulting linear equations",
                    "5. Verify all solutions in original equation",
                    "6. Express solution set clearly"
                ]
            },
            optimizationTips: {
                "Always check feasibility first": "Save time by checking if right side can be non-negative",
                "Isolate before splitting": "Simpler cases after isolation",
                "Organize work clearly": "Label cases clearly to avoid confusion",
                "Verify to avoid errors": "Catch extraneous solutions early",
                "Use number line for visualization": "Helps verify reasonableness of solutions"
            },
            commonPatterns: {
                "Two solutions": "|expression| = positive constant",
                "One solution": "|expression| = 0 or special cases",
                "No solution": "|expression| = negative",
                "Check both": "Always verify, especially in compound equations"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Simple Absolute Value Sprint",
                    timeLimit: 90,
                    problems: [
                        "|x| = 3",
                        "|x| = 8",
                        "|x| = 0",
                        "|x| = -5",
                        "|x| = 12",
                        "|x| = 1",
                        "|x| = -1",
                        "|x| = 7"
                    ]
                },
                {
                    name: "Linear Absolute Value Challenge",
                    timeLimit: 180,
                    problems: [
                        "|x + 2| = 5",
                        "|x - 3| = 4",
                        "|2x + 1| = 7",
                        "|3x - 2| = 10",
                        "|x + 5| = 0"
                    ]
                },
                {
                    name: "Isolation Speed Round",
                    timeLimit: 240,
                    problems: [
                        "2|x| = 10",
                        "|x| + 3 = 9",
                        "3|x - 1| = 12",
                        "|x + 2| - 4 = 6",
                        "5|x| + 1 = 26"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Absolute Value",
                    problem: "|x + ?| = 7 has solutions x = 3 and x = -11",
                    task: "Find the missing number",
                    solution: "Missing number is 4. |x + 4| = 7",
                    explanation: "If solutions are 3 and -11, the midpoint is -4, so expression is x + 4"
                },
                {
                    name: "Fill in the Blank",
                    problem: "|2x - ___| = 9 has solution x = 7",
                    task: "Find the missing constant",
                    solution: "Missing number is 5. |2x - 5| = 9",
                    explanation: "Substitute x = 7: |2(7) - ?| = 9 → |14 - ?| = 9 → ? = 5"
                },
                {
                    name: "Create Your Own",
                    challenge: "Create an absolute value equation with solutions x = 2 and x = -8",
                    sampleSolution: "|x + 3| = 5 or |x - (-3)| = 5",
                    explanation: "Midpoint of 2 and -8 is -3, distance from -3 to each is 5"
                },
                {
                    name: "Double Absolute Value",
                    problem: "|x - 1| = |x + 5|",
                    task: "Solve without splitting into cases",
                    solution: "x = -2",
                    explanation: "Equal distance from 1 and -5 means x is midpoint: x = (1 + (-5))/2 = -2"
                }
            ],
            applications: [
                {
                    scenario: "Temperature Control",
                    problem: "A lab needs temperature at 25°C ± 3°C. What range is acceptable?",
                    equation: "|T - 25| ≤ 3",
                    solution: "22°C to 28°C"
                },
                {
                    scenario: "Manufacturing Tolerance",
                    problem: "Bolt length should be 5.0 cm ± 0.2 cm. What lengths pass inspection?",
                    equation: "|L - 5.0| ≤ 0.2",
                    solution: "4.8 cm to 5.2 cm"
                },
                {
                    scenario: "Sports Performance",
                    problem: "100m record is 9.58 s. Times within 0.5 s of record are world-class. What times qualify?",
                    equation: "|t - 9.58| ≤ 0.5",
                    solution: "9.08 s to 10.08 s"
                },
                {
                    scenario: "Stock Price Variation",
                    problem: "Stock opened at $50. If it varied by exactly $7, what are possible closing prices?",
                    equation: "|P - 50| = 7",
                    solution: "$43 or $57"
                },
                {
                    scenario: "Distance Problem",
                    problem: "Two towns are each 50 miles from a city on a straight highway. If city is at mile marker 100, where are the towns?",
                    equation: "|x - 100| = 50",
                    solution: "Mile markers 50 and 150"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "|x + 3| = 7",
                        "x + 3 = 7",
                        "x = 4"
                    ],
                    correctAnswer: "x = 4 or x = -10",
                    errorType: "Forgot the negative case",
                    correction: "Must also solve x + 3 = -7 to get x = -10"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "|2x - 3| = 5",
                        "2x - 3 = 5 or -(2x - 3) = 5",
                        "2x = 8 or -2x + 3 = 5",
                        "x = 4 or -2x = 2",
                        "x = 4 or x = -1"
                    ],
                    correctAnswer: "x = 4 or x = -1",
                    errorType: "Incorrect setup of negative case",
                    correction: "Should be 2x - 3 = -5 (not -(2x - 3) = 5), giving x = -1 (which is actually correct, but method was wrong)"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "2|x| + 3 = 11",
                        "2x + 3 = 11",
                        "2x = 8",
                        "x = 4"
                    ],
                    correctAnswer: "x = 4 or x = -4",
                    errorType: "Removed absolute value without isolating and splitting",
                    correction: "First isolate: 2|x| = 8 → |x| = 4, then split: x = 4 or x = -4"
                },
                {
                    name: "Find the Error #4",
                    incorrectWork: [
                        "|x| = -6",
                        "x = -6 or x = 6"
                    ],
                    correctAnswer: "No solution",
                    errorType: "Didn't recognize absolute value cannot equal negative",
                    correction: "Absolute value is always ≥ 0, so no solution exists"
                },
                {
                    name: "Find the Error #5",
                    incorrectWork: [
                        "|x - 2| + 5 = 3",
                        "|x - 2| = -2",
                        "x - 2 = -2 or x - 2 = 2",
                        "x = 0 or x = 4"
                    ],
                    correctAnswer: "No solution",
                    errorType: "Didn't stop when absolute value equaled negative",
                    correction: "After getting |x - 2| = -2, should recognize this is impossible and conclude no solution"
                }
            ],
            conceptualChallenges: [
                {
                    challenge: "Explain why |x| = a always has two solutions when a > 0",
                    expectedAnswer: "Because two numbers (a and -a) are both distance a from zero"
                },
                {
                    challenge: "Under what conditions does |ax + b| = c have exactly one solution?",
                    expectedAnswer: "When c = 0, or when both cases yield the same solution"
                },
                {
                    challenge: "Explain geometrically why |x - 3| = 5 has solutions 8 and -2",
                    expectedAnswer: "Points 5 units from 3 on number line are at 3 + 5 = 8 and 3 - 5 = -2"
                },
                {
                    challenge: "Why must we always verify solutions in absolute value equations?",
                    expectedAnswer: "To check for extraneous solutions introduced by algebraic manipulations"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveAbsoluteValueProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseAbsoluteValueProblem(equation, scenario, parameters, problemType, context);
            this.currentSolution = this.solveAbsoluteValueProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateAbsoluteValueSteps(this.currentProblem, this.currentSolution);
            this.generateAbsoluteValueGraphData();
            this.generateAbsoluteValueWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutions: this.currentSolution?.solutions,
                solutionType: this.currentSolution?.solutionType
            };

        } catch (error) {
            throw new Error(`Failed to solve absolute value problem: ${error.message}`);
        }
    }

    parseAbsoluteValueProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        if (problemType && this.absoluteValueTypes[problemType]) {
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

        for (const [type, config] of Object.entries(this.absoluteValueTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractAbsoluteValueParameters(match, type);

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

        if (parameters.a !== undefined || parameters.c !== undefined) {
            return {
                originalInput: equation || 'Absolute value equation with given parameters',
                cleanInput: cleanInput,
                type: 'linear_inside_absolute_value',
                scenario: scenario,
                parameters: {
                    a: parameters.a || 1,
                    b: parameters.b || 0,
                    c: parameters.c || 0,
                    ...parameters
                },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize absolute value problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/abs\(/gi, '|')
            .replace(/\)/g, '|')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/≠/g, '!=')
            .trim();
    }

    extractAbsoluteValueParameters(match, type) {
        const params = {};

        if (!match) return params;

        switch(type) {
            case 'simple_absolute_value':
                params.c = this.parseCoefficient(match[1]);
                params.a = 1;
                params.b = 0;
                break;

            case 'linear_inside_absolute_value':
                params.a = this.parseCoefficient(match[1]) || 1;
                params.b = this.parseCoefficient(match[2]) || 0;
                params.c = this.parseCoefficient(match[3]) || 0;
                break;

            case 'absolute_value_with_coefficient':
                params.coefficientOutside = this.parseCoefficient(match[1]) || 1;
                params.a = this.parseCoefficient(match[2]) || 1;
                params.b = this.parseCoefficient(match[3]) || 0;
                params.c = this.parseCoefficient(match[4]) || 0;
                break;

            case 'absolute_value_with_constant':
                params.a = this.parseCoefficient(match[1]) || 1;
                params.b = this.parseCoefficient(match[2]) || 0;
                params.constantOutside = this.parseCoefficient(match[3]) || 0;
                params.c = this.parseCoefficient(match[4]) || 0;
                break;

            case 'compound_absolute_value':
                params.a1 = this.parseCoefficient(match[1]) || 1;
                params.b1 = this.parseCoefficient(match[2]) || 0;
                params.a2 = this.parseCoefficient(match[3]) || 1;
                params.b2 = this.parseCoefficient(match[4]) || 0;
                break;
        }

        return params;
    }

    parseCoefficient(coeff) {
        if (!coeff || coeff.trim() === '') return 0;

        let cleaned = coeff.replace(/\s+/g, '');
        if (cleaned === '+' || cleaned === '') return 1;
        if (cleaned === '-') return -1;

        const fractionMatch = cleaned.match(/^([+-]?\d*\.?\d*)\/(\d*\.?\d*)$/);
        if (fractionMatch) {
            const numerator = parseFloat(fractionMatch[1]) || 1;
            const denominator = parseFloat(fractionMatch[2]) || 1;
            return denominator !== 0 ? numerator / denominator : 0;
        }

        const num = parseFloat(cleaned);
        return isNaN(num) ? 0 : num;
    }

    solveAbsoluteValueProblem_Internal(problem) {
        const solver = this.absoluteValueTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for absolute value problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // ABSOLUTE VALUE SOLVERS

    solveSimpleAbsoluteValue(problem) {
        const { c } = problem.parameters;

        if (c < 0) {
            return {
                equation: `|x| = ${c}`,
                type: 'Simple Absolute Value',
                solutionType: 'No solution',
                solutions: [],
                reasoning: 'Absolute value is always non-negative, cannot equal a negative number',
                category: 'no_solution'
            };
        }

        if (c === 0) {
            return {
                equation: '|x| = 0',
                type: 'Simple Absolute Value',
                solutionType: 'One solution',
                solutions: [0],
                reasoning: 'Only 0 has distance 0 from zero',
                verification: this.verifyAbsoluteValueSolution([0], problem),
                category: 'one_solution'
            };
        }

        const solutions = [c, -c];

        return {
            equation: `|x| = ${c}`,
            type: 'Simple Absolute Value',
            solutionType: 'Two solutions',
            solutions: solutions,
            reasoning: `Both ${c} and ${-c} are distance ${c} from zero`,
            verification: this.verifyAbsoluteValueSolution(solutions, problem),
            category: 'two_solutions'
        };
    }

    solveLinearInsideAbsoluteValue(problem) {
        const { a, b, c } = problem.parameters;

        if (c < 0) {
            return {
                equation: `|${a}x + ${b}| = ${c}`,
                type: 'Linear Absolute Value',
                solutionType: 'No solution',
                solutions: [],
                reasoning: 'Absolute value cannot equal a negative number',
                category: 'no_solution'
            };
        }

        if (c === 0) {
            const solution = -b / a;
            return {
                equation: `|${a}x + ${b}| = 0`,
                type: 'Linear Absolute Value',
                solutionType: 'One solution',
                solutions: [solution],
                reasoning: `Expression inside must equal 0: ${a}x + ${b} = 0`,
                verification: this.verifyAbsoluteValueSolution([solution], problem),
                category: 'one_solution'
            };
        }

        // Two cases: ax + b = c and ax + b = -c
        const solution1 = (c - b) / a;
        const solution2 = (-c - b) / a;

        const solutions = [solution1, solution2];

        return {
            equation: `|${a}x + ${b}| = ${c}`,
            type: 'Linear Absolute Value',
            solutionType: 'Two solutions',
            case1: {
                equation: `${a}x + ${b} = ${c}`,
                solution: solution1
            },
            case2: {
                equation: `${a}x + ${b} = ${-c}`,
                solution: solution2
            },
            solutions: solutions,
            reasoning: 'Expression inside can equal c or -c',
            verification: this.verifyAbsoluteValueSolution(solutions, problem),
            category: 'two_solutions'
        };
    }

    solveAbsoluteValueWithCoefficient(problem) {
        const { coefficientOutside, a, b, c } = problem.parameters;

        const isolatedValue = c / coefficientOutside;

        if (isolatedValue < 0) {
            return {
                equation: `${coefficientOutside}|${a}x + ${b}| = ${c}`,
                type: 'Absolute Value with Coefficient',
                solutionType: 'No solution',
                solutions: [],
                isolationStep: `|${a}x + ${b}| = ${isolatedValue}`,
                reasoning: 'After dividing by coefficient, right side is negative',
                category: 'no_solution'
            };
        }

        const solution1 = (isolatedValue - b) / a;
        const solution2 = (-isolatedValue - b) / a;

        return {
            equation: `${coefficientOutside}|${a}x + ${b}| = ${c}`,
            type: 'Absolute Value with Coefficient',
            isolationStep: `|${a}x + ${b}| = ${isolatedValue}`,
            solutionType: 'Two solutions',
            solutions: [solution1, solution2],
            reasoning: `After dividing by ${coefficientOutside}, solve |${a}x + ${b}| = ${isolatedValue}`,
            verification: this.verifyAbsoluteValueSolution([solution1, solution2], problem),
            category: 'two_solutions'
        };
    }

    solveAbsoluteValueWithConstant(problem) {
        const { a, b, constantOutside, c } = problem.parameters;

        const isolatedValue = c - constantOutside;

        if (isolatedValue < 0) {
            return {
                equation: `|${a}x + ${b}| + ${constantOutside} = ${c}`,
                type: 'Absolute Value with Constant',
                solutionType: 'No solution',
                solutions: [],
                isolationStep: `|${a}x + ${b}| = ${isolatedValue}`,
                reasoning: `After subtracting ${constantOutside}, right side is negative`,
                category: 'no_solution'
            };
        }

        const solution1 = (isolatedValue - b) / a;
        const solution2 = (-isolatedValue - b) / a;

        return {
            equation: `|${a}x + ${b}| + ${constantOutside} = ${c}`,
            type: 'Absolute Value with Constant',
            isolationStep: `|${a}x + ${b}| = ${isolatedValue}`,
            solutionType: 'Two solutions',
            solutions: [solution1, solution2],
            reasoning: `After subtracting ${constantOutside}, solve |${a}x + ${b}| = ${isolatedValue}`,
            verification: this.verifyAbsoluteValueSolution([solution1, solution2], problem),
            category: 'two_solutions'
        };
    }

    solveCompoundAbsoluteValue(problem) {
        const { a1, b1, a2, b2 } = problem.parameters;

        // |a1*x + b1| = |a2*x + b2|
        // Case 1: a1*x + b1 = a2*x + b2
        // Case 2: a1*x + b1 = -(a2*x + b2)

        const solutions = [];

        // Case 1
        if (a1 !== a2) {
            const sol1 = (b2 - b1) / (a1 - a2);
            solutions.push(sol1);
        }

        // Case 2
        const a2_combined = a1 + a2;
        const b2_combined = b2 + b1;
        if (Math.abs(a2_combined) > 1e-10) {
            const sol2 = -b2_combined / a2_combined;
            solutions.push(sol2);
        }

        return {
            equation: `|${a1}x + ${b1}| = |${a2}x + ${b2}|`,
            type: 'Compound Absolute Value',
            case1: {
                equation: `${a1}x + ${b1} = ${a2}x + ${b2}`,
                solution: solutions[0]
            },
            case2: {
                equation: `${a1}x + ${b1} = -(${a2}x + ${b2})`,
                solution: solutions[1]
            },
            solutionType: solutions.length > 1 ? 'Two solutions' : 'One solution',
            solutions: solutions,
            reasoning: 'Two expressions have equal absolute values if they\'re equal or opposites',
            verification: this.verifyAbsoluteValueSolution(solutions, problem),
            category: 'compound'
        };
    }

    solveToleranceProblem(problem) {
        return {
            type: 'Tolerance/Deviation Word Problem',
            approach: 'Set up |actual - target| = tolerance or |actual - target| ≤ tolerance',
            note: 'Interpret solutions as acceptable range',
            category: 'word_problem'
        };
    }

    solveDistanceProblem(problem) {
        return {
            type: 'Distance Word Problem',
            approach: 'Set up |position - reference| = distance',
            note: 'Two solutions represent points on either side of reference',
            category: 'word_problem'
        };
    }

    // VERIFICATION METHODS

    verifyAbsoluteValueSolution(solutions, problem) {
        if (!solutions || solutions.length === 0) {
            return { verified: true, note: 'No solution case - nothing to verify' };
        }

        const verifications = solutions.map(sol => {
            const result = this.evaluateAbsoluteValueExpression(sol, problem.parameters);
            const expected = problem.parameters.c || 0;
            const isValid = Math.abs(result - expected) < 1e-9;

            return {
                solution: sol,
                leftSide: result,
                rightSide: expected,
                isValid: isValid,
                substitution: this.formatSubstitution(sol, problem)
            };
        });

        return {
            verified: verifications.every(v => v.isValid),
            details: verifications
        };
    }

    evaluateAbsoluteValueExpression(x, params) {
        const { a, b, coefficientOutside, constantOutside } = params;
        const insideValue = (a || 1) * x + (b || 0);
        const absValue = Math.abs(insideValue);
        const withCoefficient = (coefficientOutside || 1) * absValue;
        const final = withCoefficient + (constantOutside || 0);
        return final;
    }

    formatSubstitution(x, problem) {
        const { a, b } = problem.parameters;
        return `|${a || 1}(${x}) + ${b || 0}|`;
    }

    // STEP GENERATION

    generateAbsoluteValueSteps(problem, solution) {
        let baseSteps = this.generateBaseAbsoluteValueSteps(problem, solution);

        if (this.explanationLevel !== 'basic') {
            baseSteps = baseSteps.map((step, index, array) =>
                this.enhanceAbsoluteValueStepExplanation(step, problem, solution, index, array.length)
            );
        }

        if (this.includeConceptualConnections) {
            baseSteps = this.addStepBridges(baseSteps, problem);
        }

        if (this.includeErrorPrevention) {
            baseSteps = baseSteps.map(step =>
                this.addAbsoluteValueErrorPrevention(step, problem.type)
            );
        }

        if (this.explanationLevel === 'scaffolded') {
            baseSteps = this.addAbsoluteValueScaffolding(baseSteps, problem);
        }

        if (this.explanationLevel === 'ELI5') {
            baseSteps = this.addAbsoluteValueELI5Explanations(baseSteps, problem);
        }

        return baseSteps;
    }

    generateBaseAbsoluteValueSteps(problem, solution) {
        const { type } = problem;
        const category = this.absoluteValueTypes[type]?.category;

        switch(category) {
            case 'simple_absolute_value':
                return this.generateSimpleAbsoluteValueSteps(problem, solution);
            case 'linear_absolute_value':
                return this.generateLinearAbsoluteValueSteps(problem, solution);
            case 'absolute_value_coefficient':
                return this.generateCoefficientAbsoluteValueSteps(problem, solution);
            case 'absolute_value_constant':
                return this.generateConstantAbsoluteValueSteps(problem, solution);
            case 'compound_absolute_value':
                return this.generateCompoundAbsoluteValueSteps(problem, solution);
            default:
                return this.generateGenericAbsoluteValueSteps(problem, solution);
        }
    }

    generateSimpleAbsoluteValueSteps(problem, solution) {
        const steps = [];
        const { c } = problem.parameters;

        // Step 1: Given equation
        steps.push({
            stepNumber: 1,
            step: 'Given equation',
            description: 'Start with the simple absolute value equation',
            expression: solution.equation,
            reasoning: 'This asks: what values of x have distance ' + c + ' from zero?',
            goalStatement: 'Find all values of x with the specified distance from zero'
        });

        // Step 2: Check feasibility
        steps.push({
            stepNumber: 2,
            step: 'Check if solvable',
            description: 'Verify that the right side is non-negative',
            expression: c >= 0 ? `${c} ≥ 0 ✓` : `${c} < 0 ✗`,
            reasoning: c >= 0 ? 
                'Absolute value can equal non-negative numbers' : 
                'Absolute value is always non-negative, so cannot equal a negative number',
            algebraicRule: 'Property: |x| ≥ 0 for all real x'
        });

        if (c < 0) {
            steps.push({
                stepNumber: 3,
                step: 'Conclusion',
                description: 'No solution exists',
                expression: 'No solution (∅)',
                finalAnswer: true,
                reasoning: 'Distance cannot be negative'
            });
            return steps;
        }

        if (c === 0) {
            steps.push({
                stepNumber: 3,
                step: 'Solution',
                description: 'Only zero has distance zero from zero',
                expression: 'x = 0',
                finalAnswer: true,
                reasoning: 'Only 0 is at distance 0 from 0'
            });
            return steps;
        }

        // Step 3: Set up two cases
        steps.push({
            stepNumber: 3,
            step: 'Set up two cases',
            description: 'Distance can be achieved in two directions',
            case1: `x = ${c}`,
            case2: `x = ${-c}`,
            reasoning: `Both ${c} and ${-c} are distance ${c} from zero`,
            algebraicRule: 'If |x| = a (a > 0), then x = a or x = -a',
            visualHint: `On number line: ${-c} ← 0 → ${c}`
        });

        // Step 4: Final answer
        steps.push({
            stepNumber: 4,
            step: 'Solution',
            description: 'List all solutions',
            expression: `x = ${c} or x = ${-c}`,
            finalAnswer: true,
            reasoning: 'These are the two values at the required distance from zero'
        });

        return steps;
    }

    generateLinearAbsoluteValueSteps(problem, solution) {
        const steps = [];
        const { a, b, c } = problem.parameters;

        // Step 1: Given equation
        steps.push({
            stepNumber: 1,
            step: 'Given equation',
            description: 'Start with the linear absolute value equation',
            expression: solution.equation,
            reasoning: 'Expression inside absolute value bars equals ' + c + ' in magnitude',
            goalStatement: 'Find values of x that make the expression inside equal ±' + c
        });

        // Step 2: Check if right side is non-negative
        steps.push({
            stepNumber: 2,
            step: 'Check feasibility',
            description: 'Verify right side is non-negative',
            expression: c >= 0 ? `${c} ≥ 0 ✓` : `${c} < 0 ✗`,
            reasoning: c >= 0 ? 
                'Equation is solvable' : 
                'Absolute value cannot equal negative number',
            algebraicRule: 'Property: |expression| ≥ 0 for all expressions'
        });

        if (c < 0) {
            steps.push({
                stepNumber: 3,
                step: 'Conclusion',
                description: 'No solution exists',
                expression: 'No solution (∅)',
                finalAnswer: true,
                reasoning: 'Absolute value cannot be negative'
            });
            return steps;
        }

        if (c === 0) {
            steps.push({
                stepNumber: 3,
                step: 'Set expression to zero',
                description: 'Expression inside must equal zero',
                expression: `${a}x + ${b} = 0`,
                reasoning: 'Only way for absolute value to be zero'
            });

            steps.push({
                stepNumber: 4,
                step: 'Solve for x',
                description: 'Isolate x',
                beforeExpression: `${a}x + ${b} = 0`,
                afterExpression: `x = ${-b/a}`,
                finalAnswer: true,
                reasoning: 'Single solution when absolute value equals zero'
            });

            return steps;
        }

        // Step 3: Set up positive case
        steps.push({
            stepNumber: 3,
            step: 'Positive case',
            description: 'Set expression inside equal to positive value',
            expression: `${a}x + ${b} = ${c}`,
            reasoning: 'First case: expression equals c directly',
            algebraicRule: 'If |A| = c, then A = c (positive case)',
            caseLabel: 'Case 1'
        });

        // Step 4: Solve positive case
        steps.push({
            stepNumber: 4,
            step: 'Solve positive case',
            description: 'Solve the linear equation',
            beforeExpression: `${a}x + ${b} = ${c}`,
            operation: `Subtract ${b}, then divide by ${a}`,
            afterExpression: `x = ${solution.case1.solution}`,
            reasoning: 'This gives first solution',
            solution1: solution.case1.solution
        });

        // Step 5: Set up negative case
        steps.push({
            stepNumber: 5,
            step: 'Negative case',
            description: 'Set expression inside equal to negative value',
            expression: `${a}x + ${b} = ${-c}`,
            reasoning: 'Second case: expression equals -c',
            algebraicRule: 'If |A| = c, then A = -c (negative case)',
            caseLabel: 'Case 2'
        });

        // Step 6: Solve negative case
        steps.push({
            stepNumber: 6,
            step: 'Solve negative case',
            description: 'Solve the linear equation',
            beforeExpression: `${a}x + ${b} = ${-c}`,
            operation: `Subtract ${b}, then divide by ${a}`,
            afterExpression: `x = ${solution.case2.solution}`,
            reasoning: 'This gives second solution',
            solution2: solution.case2.solution
        });

        // Step 7: Verify solutions
        if (this.includeVerificationInSteps) {
            steps.push({
                stepNumber: 7,
                step: 'Verify solutions',
                description: 'Check both solutions in original equation',
                verification1: `|${a}(${solution.case1.solution}) + ${b}| = ${c} ✓`,
                verification2: `|${a}(${solution.case2.solution}) + ${b}| = ${c} ✓`,
                reasoning: 'Both solutions satisfy the original equation',
                algebraicRule: 'Always verify absolute value solutions'
            });
        }

        // Step 8: Final answer
        steps.push({
            stepNumber: this.includeVerificationInSteps ? 8 : 7,
            step: 'Solution',
            description: 'State final answer',
            expression: `x = ${solution.case1.solution} or x = ${solution.case2.solution}`,
            finalAnswer: true,
            reasoning: 'Two solutions from two cases'
        });

        return steps;
    }

    generateCoefficientAbsoluteValueSteps(problem, solution) {
        const steps = [];
        const { coefficientOutside, a, b, c } = problem.parameters;

        // Step 1: Given equation
        steps.push({
            stepNumber: 1,
            step: 'Given equation',
            description: 'Start with equation having coefficient outside absolute value',
            expression: solution.equation,
            reasoning: 'Must isolate absolute value before splitting into cases',
            goalStatement: 'First isolate |expression|, then solve'
        });

        // Step 2: Divide by coefficient
        const isolatedValue = c / coefficientOutside;
        steps.push({
            stepNumber: 2,
            step: 'Isolate absolute value',
            description: `Divide both sides by ${coefficientOutside}`,
            beforeExpression: solution.equation,
            operation: `÷ ${coefficientOutside}`,
            afterExpression: solution.isolationStep,
            reasoning: 'Remove coefficient to isolate absolute value expression',
            algebraicRule: 'Division Property of Equality'
        });

        // Step 3: Check if isolated value is non-negative
        steps.push({
            stepNumber: 3,
            step: 'Check feasibility',
            description: 'Verify isolated right side is non-negative',
            expression: isolatedValue >= 0 ? `${isolatedValue} ≥ 0 ✓` : `${isolatedValue} < 0 ✗`,
            reasoning: isolatedValue >= 0 ?
                'Can proceed to split into cases' :
                'Absolute value cannot equal negative',
            algebraicRule: 'Property: |expression| ≥ 0'
        });

        if (isolatedValue < 0) {
            steps.push({
                stepNumber: 4,
                step: 'Conclusion',
                description: 'No solution exists',
                expression: 'No solution (∅)',
                finalAnswer: true,
                reasoning: 'After isolation, right side is negative which is impossible'
            });
            return steps;
        }

        // Step 4: Positive case
        steps.push({
            stepNumber: 4,
            step: 'Positive case',
            description: 'Set inside expression equal to isolated value',
            expression: `${a}x + ${b} = ${isolatedValue}`,
            reasoning: 'First case: expression equals ' + isolatedValue,
            caseLabel: 'Case 1'
        });

        // Step 5: Solve positive case
        steps.push({
            stepNumber: 5,
            step: 'Solve positive case',
            description: 'Solve linear equation',
            afterExpression: `x = ${solution.solutions[0]}`,
            reasoning: 'First solution',
            solution1: solution.solutions[0]
        });

        // Step 6: Negative case
        steps.push({
            stepNumber: 6,
            step: 'Negative case',
            description: 'Set inside expression equal to negative of isolated value',
            expression: `${a}x + ${b} = ${-isolatedValue}`,
            reasoning: 'Second case: expression equals -' + isolatedValue,
            caseLabel: 'Case 2'
        });

        // Step 7: Solve negative case
        steps.push({
            stepNumber: 7,
            step: 'Solve negative case',
            description: 'Solve linear equation',
            afterExpression: `x = ${solution.solutions[1]}`,
            reasoning: 'Second solution',
            solution2: solution.solutions[1]
        });

        // Step 8: Final answer
        steps.push({
            stepNumber: 8,
            step: 'Solution',
            description: 'State all solutions',
            expression: `x = ${solution.solutions[0]} or x = ${solution.solutions[1]}`,
            finalAnswer: true
        });

        return steps;
    }

    generateConstantAbsoluteValueSteps(problem, solution) {
        const steps = [];
        const { a, b, constantOutside, c } = problem.parameters;

        // Step 1: Given
        steps.push({
            stepNumber: 1,
            step: 'Given equation',
            description: 'Start with equation having constant added to absolute value',
            expression: solution.equation,
            reasoning: 'Must isolate absolute value by removing constant first',
            goalStatement: 'Isolate |expression|, then solve'
        });

        // Step 2: Subtract constant
        const isolatedValue = c - constantOutside;
        steps.push({
            stepNumber: 2,
            step: 'Isolate absolute value',
            description: `Subtract ${constantOutside} from both sides`,
            beforeExpression: solution.equation,
            operation: `- ${constantOutside}`,
            afterExpression: solution.isolationStep,
            reasoning: 'Remove constant to isolate absolute value',
            algebraicRule: 'Subtraction Property of Equality'
        });

        // Step 3: Check feasibility
        steps.push({
            stepNumber: 3,
            step: 'Check feasibility',
            description: 'Verify isolated right side is non-negative',
            expression: isolatedValue >= 0 ? `${isolatedValue} ≥ 0 ✓` : `${isolatedValue} < 0 ✗`,
            reasoning: isolatedValue >= 0 ?
                'Can proceed' :
                'Impossible equation'
        });

        if (isolatedValue < 0) {
            steps.push({
                stepNumber: 4,
                step: 'Conclusion',
                description: 'No solution',
                expression: 'No solution (∅)',
                finalAnswer: true
            });
            return steps;
        }

        // Continue with cases...
        steps.push({
            stepNumber: 4,
            step: 'Positive case',
            expression: `${a}x + ${b} = ${isolatedValue}`,
            caseLabel: 'Case 1'
        });

        steps.push({
            stepNumber: 5,
            step: 'Solve positive case',
            afterExpression: `x = ${solution.solutions[0]}`,
            solution1: solution.solutions[0]
        });

        steps.push({
            stepNumber: 6,
            step: 'Negative case',
            expression: `${a}x + ${b} = ${-isolatedValue}`,
            caseLabel: 'Case 2'
        });

        steps.push({
            stepNumber: 7,
            step: 'Solve negative case',
            afterExpression: `x = ${solution.solutions[1]}`,
            solution2: solution.solutions[1]
        });

        steps.push({
            stepNumber: 8,
            step: 'Solution',
            expression: `x = ${solution.solutions[0]} or x = ${solution.solutions[1]}`,
            finalAnswer: true
        });

        return steps;
    }

    generateCompoundAbsoluteValueSteps(problem, solution) {
        const steps = [];
        const { a1, b1, a2, b2 } = problem.parameters;

        // Step 1: Given
        steps.push({
            stepNumber: 1,
            step: 'Given equation',
            description: 'Two absolute value expressions equal each other',
            expression: solution.equation,
            reasoning: 'Two expressions have equal absolute values if they\'re equal or opposites',
            goalStatement: 'Set up two cases: expressions equal or expressions opposite'
        });

        // Step 2: Case 1 - expressions equal
        steps.push({
            stepNumber: 2,
            step: 'Case 1: Expressions equal',
            description: 'First case: expressions are equal',
            expression: solution.case1.equation,
            reasoning: 'If |A| = |B|, one possibility is A = B',
            caseLabel: 'Case 1'
        });

        // Step 3: Solve case 1
        steps.push({
            stepNumber: 3,
            step: 'Solve Case 1',
            description: 'Solve linear equation',
            afterExpression: `x = ${solution.case1.solution}`,
            reasoning: 'First solution',
            solution1: solution.case1.solution
        });

        // Step 4: Case 2 - expressions opposite
        steps.push({
            stepNumber: 4,
            step: 'Case 2: Expressions opposite',
            description: 'Second case: expressions are opposites',
            expression: solution.case2.equation,
            reasoning: 'If |A| = |B|, other possibility is A = -B',
            caseLabel: 'Case 2'
        });

        // Step 5: Solve case 2
        steps.push({
            stepNumber: 5,
            step: 'Solve Case 2',
            description: 'Solve linear equation',
            afterExpression: `x = ${solution.case2.solution}`,
            reasoning: 'Second solution',
            solution2: solution.case2.solution
        });

        // Step 6: Final answer
        steps.push({
            stepNumber: 6,
            step: 'Solution',
            description: 'Combine solutions from both cases',
            expression: `x = ${solution.solutions.join(' or x = ')}`,
            finalAnswer: true,
            reasoning: 'Solutions from both cases are valid'
        });

        return steps;
    }

    generateGenericAbsoluteValueSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Absolute value equation',
            description: 'Solve the given absolute value equation',
            expression: problem.equation || solution.equation,
            reasoning: 'Apply appropriate absolute value solution technique',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS FOR ABSOLUTE VALUE

    enhanceAbsoluteValueStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getAbsoluteValueConceptualExplanation(step, problem),
                procedural: this.getAbsoluteValueProceduralExplanation(step),
                visual: this.getAbsoluteValueVisualExplanation(step, problem),
                algebraic: this.getAbsoluteValueAlgebraicExplanation(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyAbsoluteValuePrerequisites(step, problem.type),
                keyVocabulary: this.identifyAbsoluteValueKeyVocabulary(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateAbsoluteValueThinkingPrompts(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateAbsoluteValueSelfCheckQuestion(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findAbsoluteValueRealWorldConnection(step, problem);
        }

        return enhanced;
    }

    getAbsoluteValueConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Given equation': 'Absolute value represents distance from zero. This equation asks us to find all values at a specific distance.',
            'Check feasibility': 'Distance cannot be negative. If right side is negative, no solution exists.',
            'Isolate absolute value': 'Before splitting into cases, we must get the absolute value expression by itself.',
            'Set up two cases': 'Distance can be achieved in two directions - positive and negative.',
            'Positive case': 'First possibility: the expression inside equals the positive value.',
            'Negative case': 'Second possibility: the expression inside equals the negative value.',
            'Solve positive case': 'This gives us the first location at the required distance.',
            'Solve negative case': 'This gives us the second location at the required distance.',
            'Verify solutions': 'We must check that our solutions actually work in the original equation.',
            'Solution': 'These are all values that satisfy the distance requirement.'
        };

        return conceptualExplanations[step.step] || 'This step helps us find values satisfying the absolute value equation.';
    }

    getAbsoluteValueProceduralExplanation(step) {
        const procedural = {
            'Given equation': '1. Write down the equation\n2. Identify what needs to be found\n3. Note the structure',
            'Check feasibility': '1. Look at right side\n2. Check if ≥ 0\n3. If negative, stop (no solution)',
            'Isolate absolute value': '1. Identify operations outside |...|\n2. Undo them using inverse operations\n3. Get |expression| = value',
            'Set up two cases': '1. Write: expression = value\n2. Write: expression = -value\n3. Prepare to solve both',
            'Positive case': '1. Remove absolute value bars\n2. Set expression = positive value\n3. Ready to solve',
            'Negative case': '1. Remove absolute value bars\n2. Set expression = negative value\n3. Ready to solve',
            'Verify solutions': '1. Substitute each solution\n2. Evaluate left side\n3. Check if equals right side'
        };

        return procedural[step.step] || 'Follow standard procedure for this step type.';
    }

    getAbsoluteValueVisualExplanation(step, problem) {
        const visual = {
            'Given equation': 'Imagine a number line. We\'re looking for points at a specific distance from zero (or another point).',
            'Check feasibility': 'Distance is always positive or zero. Check if the target makes sense.',
            'Set up two cases': 'On number line: one solution to the left, one to the right of the reference point.',
            'Positive case': 'Moving in the positive direction from the reference.',
            'Negative case': 'Moving in the negative direction from the reference.',
            'Solution': 'Mark both solution points on the number line - they\'re symmetric.'
        };

        return visual[step.step] || 'Visualize this step on a number line.';
    }

    getAbsoluteValueAlgebraicExplanation(step) {
        const algebraic = {
            'Given equation': 'Equation in form |expression| = value',
            'Check feasibility': 'Property: |x| ≥ 0 for all real x',
            'Isolate absolute value': 'Apply inverse operations to both sides',
            'Set up two cases': 'If |A| = c, then A = c or A = -c (c ≥ 0)',
            'Positive case': 'Case 1: A = c',
            'Negative case': 'Case 2: A = -c',
            'Verify solutions': 'Verification by direct substitution'
        };

        return algebraic[step.step] || 'Apply absolute value properties.';
    }

    addAbsoluteValueErrorPrevention(step, problemType) {
        const category = this.absoluteValueTypes[problemType]?.category || 'simple_absolute_value';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generateAbsoluteValuePreventionTips(step, problemType),
                checkPoints: this.generateAbsoluteValueCheckPoints(step),
                warningFlags: this.identifyAbsoluteValueWarningFlags(step, problemType)
            },
            validation: {
                selfCheck: this.generateAbsoluteValueSelfCheckQuestion(step),
                expectedResult: this.describeAbsoluteValueExpectedResult(step),
                troubleshooting: this.generateAbsoluteValueTroubleshootingTips(step)
            }
        };
    }

    addAbsoluteValueScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateAbsoluteValueGuidingQuestions(step, problem),
                subSteps: this.breakAbsoluteValueIntoSubSteps(step),
                hints: this.generateAbsoluteValueProgressiveHints(step, problem),
                practiceVariation: this.generateAbsoluteValuePracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainAbsoluteValueThinkingProcess(step),
                decisionPoints: this.identifyAbsoluteValueDecisionPoints(step),
                alternativeApproaches: this.suggestAbsoluteValueAlternativeMethods(step, problem)
            }
        }));
    }

    addAbsoluteValueELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateAbsoluteValueELI5Explanation(step, problem),
                analogy: this.findRelevantAbsoluteValueAnalogy(step, problem),
                simpleLanguage: this.convertToSimpleLanguageAbsoluteValue(step.description),
                visualization: this.suggestAbsoluteValueVisualization(step)
            }
        }));
    }

    generateAbsoluteValueELI5Explanation(step, problem) {
        const ELI5Explanations = {
            'Given equation': "We have a puzzle about distance! The absolute value bars |...| mean 'how far from zero' without caring which direction.",
            'Check feasibility': "Distance can't be negative! If someone says 'walk negative 5 steps,' that doesn't make sense.",
            'Isolate absolute value': "First, we need to get the distance measurement all by itself, like unwrapping a present.",
            'Set up two cases': "You can be 5 steps to the left OR 5 steps to the right and still be 5 steps away!",
            'Positive case': "This is going in the positive direction (to the right on a number line).",
            'Negative case': "This is going in the negative direction (to the left on a number line).",
            'Solve positive case': "We found the first spot that's the right distance away!",
            'Solve negative case': "We found the second spot that's the right distance away!",
            'Verify solutions': "Let's check both spots to make sure they're really the right distance!",
            'Solution': "We found all the spots that are exactly the right distance from zero!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our distance puzzle!";
    }

    findRelevantAbsoluteValueAnalogy(step, problem) {
        const stepAnalogies = {
            'Given equation': this.analogies.absolute_value_as_distance.ELI5,
            'Set up two cases': this.analogies.two_solutions_as_opposite_directions.ELI5,
            'Isolate absolute value': this.analogies.isolating_absolute_value.ELI5,
            'Check feasibility': this.analogies.no_solution_case.ELI5
        };

        return stepAnalogies[step.step] || "Think of this like measuring distance - it's always positive!";
    }

    convertToSimpleLanguageAbsoluteValue(description) {
        const simplifications = {
            'absolute value': 'distance from zero',
            'isolate': 'get by itself',
            'non-negative': 'zero or positive',
            'case': 'possibility',
            'verify': 'check',
            'expression': 'math phrase',
            'coefficient': 'number multiplying',
            'feasibility': 'whether it\'s possible',
            'magnitude': 'size',
            'opposite': 'the negative version'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestAbsoluteValueVisualization(step) {
        const visualizations = {
            'Given equation': 'Draw a number line with 0 in the middle. Mark the target distance.',
            'Check feasibility': 'Ask yourself: can I walk a negative distance? No!',
            'Set up two cases': 'Draw arrows from 0 going left and right the same distance.',
            'Positive case': 'Mark the spot to the right of zero.',
            'Negative case': 'Mark the spot to the left of zero.',
            'Solution': 'Circle both spots on your number line - they\'re equal distances from zero!'
        };

        return visualizations[step.step] || 'Draw a number line to visualize this step.';
    }

    generateAbsoluteValuePreventionTips(step, problemType) {
        const tips = {
            'Check feasibility': [
                'Always check if right side is non-negative FIRST',
                'Save time by catching impossible cases early',
                'Remember: |anything| ≥ 0 always'
            ],
            'Isolate absolute value': [
                'Must isolate BEFORE splitting into cases',
                'Undo operations in correct order',
                'Check your arithmetic'
            ],
            'Set up two cases': [
                'Don\'t forget BOTH cases',
                'Positive case: expression = value',
                'Negative case: expression = -value (NOT -(expression) = value)'
            ],
            'Verify solutions': [
                'ALWAYS check solutions in original equation',
                'Absolute value equations can have extraneous solutions',
                'Better to catch errors now than later'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check your work'];
    }

    generateAbsoluteValueCheckPoints(step) {
        return [
            'Did I check if the equation is solvable?',
            'Did I isolate the absolute value before splitting?',
            'Did I set up BOTH cases?',
            'Did I solve both cases correctly?',
            'Did I verify both solutions?'
        ];
    }

    identifyAbsoluteValueWarningFlags(step, problemType) {
        const warnings = {
            'Check feasibility': [
                'If right side is negative, STOP - no solution',
                'If you isolated and got negative, STOP - no solution'
            ],
            'Set up two cases': [
                'Don\'t forget the negative case!',
                'Set up as expression = -value, NOT -(expression) = value'
            ],
            'Verify solutions': [
                'Some solutions might not work - check carefully',
                'Extraneous solutions are common in absolute value equations'
            ]
        };

        return warnings[step.step] || [];
    }

    generateAbsoluteValueSelfCheckQuestion(step) {
        const questions = {
            'Given equation': 'Do I understand what absolute value means (distance from zero)?',
            'Check feasibility': 'Is the right side non-negative? If not, there\'s no solution.',
            'Isolate absolute value': 'Did I get |expression| completely by itself?',
            'Set up two cases': 'Did I set up BOTH the positive and negative cases?',
            'Solve positive case': 'Did I solve correctly for x?',
            'Solve negative case': 'Did I solve correctly for x in this case too?',
            'Verify solutions': 'Did I check BOTH solutions in the original equation?',
            'Solution': 'Have I listed all solutions clearly?'
        };

        return questions[step.step] || 'Does this step make sense?';
    }

    describeAbsoluteValueExpectedResult(step) {
        const expectations = {
            'Given equation': 'Equation with absolute value bars',
            'Check feasibility': 'Determination if equation is solvable',
            'Isolate absolute value': 'Absolute value expression by itself on one side',
            'Set up two cases': 'Two separate equations without absolute value bars',
            'Solve positive case': 'First solution value',
            'Solve negative case': 'Second solution value',
            'Verify solutions': 'Confirmation that solutions work',
            'Solution': 'Final answer with all valid solutions'
        };

        return expectations[step.step] || 'Progress toward solving the equation';
    }

    generateAbsoluteValueTroubleshootingTips(step) {
        return [
            'Review the absolute value definition if confused',
            'Draw a number line to visualize',
            'Check each arithmetic step carefully',
            'Make sure you handled the negative case correctly',
            'Verify your answer makes sense'
        ];
    }

    generateAbsoluteValueGuidingQuestions(step, problem) {
        const questions = {
            'Given equation': [
                'What does the absolute value represent?',
                'What are we trying to find?',
                'Is this asking about distance?'
            ],
            'Check feasibility': [
                'What is the right side after isolation?',
                'Is it non-negative?',
                'Can absolute value equal this number?'
            ],
            'Isolate absolute value': [
                'What operations are outside the absolute value?',
                'How do I undo them?',
                'What do I do first - subtract/add or multiply/divide?'
            ],
            'Set up two cases': [
                'Why do we need two cases?',
                'What does each case represent?',
                'How do I set up the negative case correctly?'
            ],
            'Verify solutions': [
                'How do I substitute the solution?',
                'Does the left side equal the right side?',
                'Are both solutions valid?'
            ]
        };

        return questions[step.step] || ['What is happening in this step?', 'Why is this necessary?'];
    }

    breakAbsoluteValueIntoSubSteps(step) {
        if (step.step === 'Set up two cases') {
            return [
                'Understand why two cases are needed',
                'Write the positive case: expression = value',
                'Write the negative case: expression = -value',
                'Label them clearly as Case 1 and Case 2'
            ];
        }

        if (step.step === 'Isolate absolute value') {
            return [
                'Identify what\'s outside the absolute value',
                'Decide which operation to undo first',
                'Apply inverse operation to both sides',
                'Simplify to get |expression| = value',
                'Check that right side is non-negative'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generateAbsoluteValueProgressiveHints(step, problem) {
        const category = this.absoluteValueTypes[problem.type]?.category || 'simple_absolute_value';
        const hintSet = this.hints[category] || this.hints.simple_absolute_value;

        return {
            level1: hintSet.level1 || 'Think about what absolute value means.',
            level2: hintSet.level2 || 'Remember that distance can be achieved in two directions.',
            level3: hintSet.level3 || 'Set up both positive and negative cases.',
            level4: hintSet.level4 || 'Solve both equations and verify.'
        };
    }

    generateAbsoluteValuePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try another absolute value equation with different numbers',
            practiceHint: 'Practice with |x| = 5 first, then try |x + 2| = 5',
            extension: 'Once comfortable, try equations with coefficients like 2|x - 1| = 8'
        };
    }

    explainAbsoluteValueThinkingProcess(step) {
        return {
            observe: 'What do I see? Is there absolute value? What else?',
            goal: 'What am I trying to find? What does the equation ask?',
            strategy: 'Do I need to isolate first? Then split into cases?',
            execute: 'How do I perform each operation correctly?',
            verify: 'Did my solutions work? Did I check both?'
        };
    }

    identifyAbsoluteValueDecisionPoints(step) {
        return [
            'Is the equation solvable (right side non-negative)?',
            'Do I need to isolate the absolute value first?',
            'Have I set up both cases correctly?',
            'Should I verify the solutions?'
        ];
    }

    suggestAbsoluteValueAlternativeMethods(step, problem) {
        const alternatives = {
            'Solve equation': [
                'Algebraic method (split into cases)',
                'Graphical method (graph both sides, find intersections)',
                'Number line method (mark distances visually)'
            ],
            'Verify': [
                'Direct substitution',
                'Graphical check',
                'Logical reasoning about distance'
            ]
        };

        return alternatives['Solve equation'] || ['Standard algebraic approach is most reliable'];
    }

    identifyAbsoluteValuePrerequisites(step, problemType) {
        const category = this.absoluteValueTypes[problemType]?.category || 'simple_absolute_value';
        const prereqs = this.prerequisites[category];

        if (prereqs) {
            return prereqs.skills;
        }

        return ['Understanding absolute value', 'Basic equation solving'];
    }

    identifyAbsoluteValueKeyVocabulary(step) {
        const vocabulary = {
            'Given equation': ['absolute value', 'equation', 'distance', 'magnitude'],
            'Check feasibility': ['non-negative', 'property', 'impossible'],
            'Isolate absolute value': ['isolate', 'coefficient', 'inverse operation'],
            'Set up two cases': ['cases', 'positive case', 'negative case', 'split'],
            'Verify solutions': ['verify', 'substitute', 'validate', 'check']
        };

        return vocabulary[step.step] || [];
    }

    generateAbsoluteValueThinkingPrompts(step) {
        return {
            before: 'Before this step: What do I know so far? What do I need to do?',
            during: 'During this step: Am I being careful with signs? Am I checking both cases?',
            after: 'After this step: Does this make sense? Should I verify?'
        };
    }

    findAbsoluteValueRealWorldConnection(step, problem) {
        const connections = {
            'simple_absolute_value': 'Like finding all locations that are exactly 5 miles from your house',
            'linear_absolute_value': 'Like quality control: which values are within tolerance of target?',
            'compound': 'Like comparing distances: when are two people the same distance from their homes?'
        };

        const category = this.absoluteValueTypes[problem.type]?.category;
        return connections[category] || 'Absolute value models distance in real-world situations';
    }

    // GRAPH GENERATION

    generateAbsoluteValueGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;

        if (this.currentSolution.solutions && this.currentSolution.solutions.length > 0) {
            this.graphData = this.generateAbsoluteValueGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateAbsoluteValueGraph(problem, solution) {
        const { a, b } = problem.parameters;

        return {
            type: 'absolute_value',
            vertexX: -b / a,
            solutions: solution.solutions || [],
            description: `Graph of y = |${a}x + ${b}| showing V-shape with vertex at x = ${-b/a}`,
            graphType: 'v_shaped',
            visualization: 'V-shaped graph intersected by horizontal line',
            numberLine: {
                solutions: solution.solutions || [],
                description: 'Mark solution points on number line'
            }
        };
    }

    // WORKBOOK GENERATION

    generateAbsoluteValueWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createAbsoluteValueProblemSection(),
            this.createAbsoluteValuePrerequisiteSection(),
            this.createAbsoluteValueConceptSection(),
            this.createEnhancedAbsoluteValueStepsSection(),
            this.createAbsoluteValueSolutionSection(),
            this.createAbsoluteValueAnalysisSection(),
            this.createAbsoluteValueVerificationSection(),
            this.createAbsoluteValueGraphicalSection(),
            this.createAbsoluteValueRealWorldApplicationSection(),
            this.createAbsoluteValuePedagogicalNotesSection(),
            this.createAbsoluteValueAlternativeMethodsSection(),
            this.createAbsoluteValueCommonMistakesSection(),
            this.createAbsoluteValuePracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Absolute Value Linear Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createAbsoluteValueProblemSection() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.absoluteValueTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.absoluteValueTypes[this.currentProblem.type]?.category || 'absolute_value'],
            ['Equation', this.currentSolution?.equation || this.currentProblem.cleanInput],
            ['Description', this.currentProblem.scenario || 'Absolute value equation']
        ];

        if (this.currentProblem.parameters.a !== undefined) {
            problemData.push(['', '']);
            problemData.push(['Coefficients', '']);
            if (this.currentProblem.parameters.a !== undefined) {
                problemData.push(['a (coefficient of x)', this.currentProblem.parameters.a]);
            }
            if (this.currentProblem.parameters.b !== undefined) {
                problemData.push(['b (constant inside)', this.currentProblem.parameters.b]);
            }
            if (this.currentProblem.parameters.c !== undefined) {
                problemData.push(['c (right side)', this.currentProblem.parameters.c]);
            }
            if (this.currentProblem.parameters.coefficientOutside !== undefined) {
                problemData.push(['Coefficient outside |...|', this.currentProblem.parameters.coefficientOutside]);
            }
            if (this.currentProblem.parameters.constantOutside !== undefined) {
                problemData.push(['Constant outside |...|', this.currentProblem.parameters.constantOutside]);
            }
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createAbsoluteValuePrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.absoluteValueTypes[this.currentProblem.type]?.category;
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

    createAbsoluteValueConceptSection() {
        const conceptData = [
            ['Absolute Value Definition', '|x| represents distance from zero'],
            ['Key Property', '|x| ≥ 0 for all real x'],
            ['Two Cases', 'If |A| = c (c > 0), then A = c or A = -c'],
            ['Zero Case', 'If |A| = 0, then A = 0'],
            ['No Solution', 'If |A| = negative, no solution exists'],
            ['', ''],
            ['Geometric Meaning', 'Absolute value is distance without direction'],
            ['Number Line', 'Solutions are points at equal distance from reference'],
            ['Graph', 'y = |x| creates V-shape; vertex where expression = 0']
        ];

        return {
            title: 'Key Concepts',
            type: 'concepts',
            data: conceptData
        };
    }

    createEnhancedAbsoluteValueStepsSection() {
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

            if (step.case1 && step.case2) {
                stepsData.push(['Case 1', step.case1]);
                stepsData.push(['Case 2', step.case2]);
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

    createAbsoluteValueSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.solutionType === 'No solution') {
            solutionData.push(['Solution Type', this.currentSolution.solutionType]);
            solutionData.push(['Reason', this.currentSolution.reasoning]);
            solutionData.push(['Solution Set', '∅ (empty set)']);
        } else if (this.currentSolution.solutions) {
            solutionData.push(['Solution Type', this.currentSolution.solutionType]);
            solutionData.push(['Number of Solutions', this.currentSolution.solutions.length]);

            this.currentSolution.solutions.forEach((sol, index) => {
                solutionData.push([`Solution ${index + 1}`, `x = ${sol}`]);
            });

            if (this.currentSolution.solutions.length > 0) {
                solutionData.push(['Solution Set', `{${this.currentSolution.solutions.join(', ')}}`]);
            }
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAbsoluteValueAnalysisSection() {
        if (!this.currentSolution) return null;

        const analysisData = [
            ['Solution Method', this.currentSolution.type || 'Absolute value equation solving'],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel],
            ['Category', this.absoluteValueTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.isolationStep) {
            analysisData.push(['Isolation Required', 'Yes']);
            analysisData.push(['After Isolation', this.currentSolution.isolationStep]);
        }

        if (this.currentSolution.case1 && this.currentSolution.case2) {
            analysisData.push(['Case 1 Equation', this.currentSolution.case1.equation]);
            analysisData.push(['Case 2 Equation', this.currentSolution.case2.equation]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createAbsoluteValueVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        if (this.currentSolution.solutionType === 'No solution') {
            return {
                title: 'Solution Verification',
                type: 'verification',
                data: [
                    ['Verification', 'No solution to verify - equation has no solution']
                ]
            };
        }

        const verificationData = [
            ['Verification Method', 'Direct Substitution'],
            ['', '']
        ];

        const verification = this.currentSolution.verification;
        if (verification && verification.details) {
            verification.details.forEach((v, index) => {
                verificationData.push([`Solution ${index + 1}`, `x = ${v.solution}`]);
                verificationData.push(['Substitution', v.substitution]);
                verificationData.push(['Left Side', v.leftSide]);
                verificationData.push(['Right Side', v.rightSide]);
                verificationData.push(['Valid', v.isValid ? 'Yes ✓' : 'No ✗']);
                verificationData.push(['', '']);
            });
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['Verification Notes', 'All solutions verified through direct substitution']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createAbsoluteValueGraphicalSection() {
        if (!this.graphData) return null;

        const graphData = [
            ['Graph Type', this.graphData.graphType || 'V-shaped'],
            ['Description', this.graphData.description],
            ['', ''],
            ['Vertex Location', `x = ${this.graphData.vertexX || 0}`],
            ['', ''],
            ['Solutions on Graph', 'Marked on number line and graph']
        ];

        if (this.graphData.solutions && this.graphData.solutions.length > 0) {
            this.graphData.solutions.forEach((sol, index) => {
                graphData.push([`Solution ${index + 1}`, `x = ${sol}`]);
            });
        }

        graphData.push(['', '']);
        graphData.push(['Visualization Tip', 'Graph shows V-shape; solutions are where horizontal line intersects']);

        return {
            title: 'Graphical Interpretation',
            type: 'graphical',
            data: graphData
        };
    }

    createAbsoluteValueRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 4);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications of Absolute Value', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Equation Form', app.equation]);
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

    createAbsoluteValuePedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generateAbsoluteValuePedagogicalNotes(this.currentProblem.type);

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['Key Concepts', notes.keyConcepts.join('; ')],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['Common Difficulties', notes.commonDifficulties.join('; ')],
                ['Teaching Strategies', notes.teachingStrategies.join('; ')],
                ['Misconceptions to Address', notes.misconceptions.join('; ')],
                ['Extension Ideas', notes.extensions.join('; ')],
                ['Assessment Tips', notes.assessment.join('; ')]
            ]
        };
    }

    createAbsoluteValueAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateAbsoluteValueAlternativeMethods(this.currentProblem.type);

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

    createAbsoluteValueCommonMistakesSection() {
        if (!this.includeCommonMistakes) return null;

        const mistakes = Object.values(this.misconceptions).slice(0, 5);

        const mistakeData = [
            ['Common Mistakes and Misconceptions', ''],
            ['', '']
        ];

        mistakes.forEach((mistake, index) => {
            mistakeData.push([`Mistake ${index + 1}`, mistake.misconception]);
            mistakeData.push(['Reality', mistake.reality]);
            mistakeData.push(['Example', mistake.correctiveExample]);
            mistakeData.push(['Correction', mistake.correction]);
            mistakeData.push(['', '']);
        });

        return {
            title: 'Common Mistakes to Avoid',
            type: 'mistakes',
            data: mistakeData
        };
    }

    createAbsoluteValuePracticeProblemsSection() {
        const problems = this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy Problems (Foundational)', '']
        ];

        problems.easy.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium Problems (Intermediate)', '']);

        problems.medium.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Hard Problems (Advanced)', '']);

        problems.hard.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    generateAbsoluteValuePedagogicalNotes(problemType) {
        const category = this.absoluteValueTypes[problemType]?.category;

        const pedagogicalDatabase = {
            simple_absolute_value: {
                objectives: [
                    'Understand absolute value as distance from zero',
                    'Solve simple absolute value equations |x| = a',
                    'Recognize when no solution exists',
                    'Verify solutions'
                ],
                keyConcepts: [
                    'Absolute value represents distance',
                    '|x| ≥ 0 always',
                    'Two solutions when right side is positive',
                    'No solution when right side is negative'
                ],
                prerequisites: [
                    'Understanding of number line',
                    'Concept of distance',
                    'Basic equation solving'
                ],
                commonDifficulties: [
                    'Forgetting the negative solution',
                    'Not recognizing impossible cases',
                    'Confusing |x| with -x'
                ],
                teachingStrategies: [
                    'Use number line heavily',
                    'Emphasize distance interpretation',
                    'Practice checking feasibility first',
                    'Use real-world distance examples'
                ],
                misconceptions: [
                    'Absolute value can be negative',
                    'Only one solution exists',
                    '|-5| = -5'
                ],
                extensions: [
                    'Linear expressions inside absolute value',
                    'Absolute value inequalities',
                    'Graphing absolute value functions'
                ],
                assessment: [
                    'Can student identify both solutions?',
                    'Does student check feasibility?',
                    'Can student explain in terms of distance?'
                ]
            },
            linear_absolute_value: {
                objectives: [
                    'Solve equations |ax + b| = c',
                    'Set up and solve two cases correctly',
                    'Verify solutions in original equation',
                    'Understand when one, two, or no solutions exist'
                ],
                keyConcepts: [
                    'Splitting into positive and negative cases',
                    'Expression inside can equal ±c',
                    'Both solutions must be verified',
                    'Special cases: c = 0, c < 0'
                ],
                prerequisites: [
                    'Simple absolute value equations',
                    'Solving linear equations',
                    'Understanding of case analysis'
                ],
                commonDifficulties: [
                    'Setting up negative case incorrectly',
                    'Forgetting to verify',
                    'Arithmetic errors in two cases',
                    'Not recognizing no-solution cases'
                ],
                teachingStrategies: [
                    'Emphasize "expression = c OR expression = -c"',
                    'Use color coding for two cases',
                    'Practice verification extensively',
                    'Show graphical representation'
                ],
                misconceptions: [
                    'Negative case is -(ax + b) = c instead of ax + b = -c',
                    'Only solving one case',
                    'Not checking solutions'
                ],
                extensions: [
                    'Equations with coefficients outside',
                    'Compound absolute value equations',
                    'Absolute value inequalities'
                ],
                assessment: [
                    'Does student set up both cases?',
                    'Are cases set up correctly?',
                    'Does student verify all solutions?',
                    'Can student identify special cases?'
                ]
            },
            absolute_value_coefficient: {
                objectives: [
                    'Isolate absolute value before splitting',
                    'Check feasibility after isolation',
                    'Solve multi-step absolute value equations',
                    'Apply order of operations in reverse'
                ],
                keyConcepts: [
                    'Isolation required before case splitting',
                    'Undo operations outside absolute value first',
                    'Check feasibility at each step',
                    'Same two-case approach after isolation'
                ],
                prerequisites: [
                    'Linear absolute value equations',
                    'Multi-step equation solving',
                    'Order of operations'
                ],
                commonDifficulties: [
                    'Forgetting to isolate first',
                    'Arithmetic errors during isolation',
                    'Not checking feasibility after isolation',
                    'Losing track of steps'
                ],
                teachingStrategies: [
                    'Emphasize "isolate first" rule',
                    'Use step-by-step checklists',
                    'Show what happens if you split too early',
                    'Practice identifying what to undo first'
                ],
                misconceptions: [
                    'Can split into cases before isolating',
                    'Order of undoing doesn\'t matter',
                    'Only need to check feasibility at start'
                ],
                extensions: [
                    'Equations with multiple operations outside',
                    'Compound equations',
                    'Applied word problems'
                ],
                assessment: [
                    'Does student isolate before splitting?',
                    'Is isolation performed correctly?',
                    'Does student check feasibility?',
                    'Can student explain why isolation is necessary?'
                ]
            },
            compound_absolute_value: {
                objectives: [
                    'Solve equations with two absolute values',
                    'Understand |A| = |B| means A = B or A = -B',
                    'Manage multiple cases',
                    'Verify which solutions are valid'
                ],
                keyConcepts: [
                    'Two expressions equal in absolute value if equal or opposite',
                    'Typically two cases to consider',
                    'Some cases may yield same solution',
                    'All solutions must be verified'
                ],
                prerequisites: [
                    'Linear absolute value equations',
                    'Strong algebra skills',
                    'Case analysis'
                ],
                commonDifficulties: [
                    'Confusion about which cases to set up',
                    'Errors in setting up opposite case',
                    'Missing solutions or duplicating solutions',
                    'Verification complexity'
                ],
                teachingStrategies: [
                    'Teach the logic: equal or opposite',
                    'Use examples with small numbers first',
                    'Emphasize systematic case setup',
                    'Practice verification extensively'
                ],
                misconceptions: [
                    'Only one case needed',
                    'More than two cases required',
                    'Don\'t need to verify'
                ],
                extensions: [
                    'Three absolute value expressions',
                    'Absolute value with other functions',
                    'Systems involving absolute values'
                ],
                assessment: [
                    'Does student understand the two cases?',
                    'Are cases set up correctly?',
                    'Does student find all solutions?',
                    'Are all solutions verified?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve absolute value equations'],
            keyConcepts: ['Distance interpretation', 'Two cases'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Various challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            misconceptions: ['Various misconceptions'],
            extensions: ['More complex equations'],
            assessment: ['Verify understanding']
        };
    }

    generateAbsoluteValueAlternativeMethods(problemType) {
        const category = this.absoluteValueTypes[problemType]?.category;

        const alternativeDatabase = {
            simple_absolute_value: {
                primaryMethod: 'Case Splitting (x = a or x = -a)',
                methods: [
                    {
                        name: 'Number Line Method',
                        description: 'Visualize points at distance a from zero on number line'
                    },
                    {
                        name: 'Definition Method',
                        description: 'Apply piecewise definition of absolute value'
                    },
                    {
                        name: 'Mental Math',
                        description: 'For simple cases, think "what numbers have this distance?"'
                    }
                ],
                comparison: 'Case splitting is most systematic; number line best for visualization; mental math fastest for easy problems'
            },
            linear_absolute_value: {
                primaryMethod: 'Algebraic Case Splitting',
                methods: [
                    {
                        name: 'Graphical Method',
                        description: 'Graph y = |ax + b| and y = c, find intersection points'
                    },
                    {
                        name: 'Critical Point Method',
                        description: 'Find where expression equals zero, consider regions on either side'
                    },
                    {
                        name: 'Squaring Method',
                        description: 'Square both sides: (ax + b)² = c² then solve (watch for extraneous solutions)'
                    }
                ],
                comparison: 'Algebraic method most reliable; graphical provides visualization; squaring works but requires extra verification'
            },
            absolute_value_coefficient: {
                primaryMethod: 'Isolation then Case Splitting',
                methods: [
                    {
                        name: 'Direct Substitution',
                        description: 'Isolate, then apply standard absolute value solving'
                    },
                    {
                        name: 'Graphical Approach',
                        description: 'Graph the equation and observe intersections'
                    }
                ],
                comparison: 'Isolation method is standard and most reliable for accuracy'
            },
            compound_absolute_value: {
                primaryMethod: 'Equal or Opposite Cases',
                methods: [
                    {
                        name: 'Critical Points Method',
                        description: 'Find zeros of each expression, analyze regions between'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Graph both absolute value functions, find intersections'
                    },
                    {
                        name: 'Squaring Method',
                        description: 'Square both sides to eliminate absolute values (verify carefully)'
                    }
                ],
                comparison: 'Equal/opposite method most straightforward; critical points method good for complex cases; graphing provides insight'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard algebraic approach',
            methods: [{
                name: 'Alternative',
                description: 'Other methods may apply'
            }],
            comparison: 'Choose method based on equation structure and preference'
        };
    }
}

// Export the class
export default EnhancedAbsoluteValueLinearMathematicalWorkbook;

