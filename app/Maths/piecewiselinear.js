// Enhanced Piecewise Linear Functions Mathematical Workbook
import * as math from 'mathjs';

export class EnhancedPiecewiseLinearMathematicalWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2400;
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
        this.initializePiecewiseSolvers();
        this.initializePiecewiseLessons();
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
        this.initializeNotationDatabase();
        this.initializeContinuityDatabase();
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
                pieceColor1: '#e3f2fd',
                pieceColor2: '#fff3e0',
                pieceColor3: '#f3e5f5',
                discontinuityColor: '#ffebee'
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
                pieceColor1: '#bbdefb',
                pieceColor2: '#ffe0b2',
                pieceColor3: '#e1bee7',
                discontinuityColor: '#ffcdd2'
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
            'perpendicular': '⊥', 'parallel': '∥',
            // Piecewise-specific
            'leftBracket': '{', 'rightBracket': '}',
            'openCircle': '○', 'closedCircle': '●'
        };
    }

    initializePiecewiseLessons() {
        this.lessons = {
            piecewise_basics: {
                title: "Introduction to Piecewise Functions",
                concepts: [
                    "A piecewise function has different rules for different parts of its domain",
                    "Written using bracket notation with conditions",
                    "Each 'piece' is a linear function valid on a specific interval",
                    "The domain is partitioned into non-overlapping intervals"
                ],
                theory: "Piecewise functions model situations where behavior changes based on conditions. Each piece represents a different linear relationship that applies in its specific domain interval.",
                keyFormulas: {
                    "General Form": "f(x) = { expression₁ if condition₁, expression₂ if condition₂, ... }",
                    "Two-Piece Example": "f(x) = { mx + b if x < a, px + q if x ≥ a }",
                    "Three-Piece Example": "f(x) = { expression₁ if x < a, expression₂ if a ≤ x < b, expression₃ if x ≥ b }"
                },
                evaluationSteps: [
                    "Identify the x-value to evaluate",
                    "Determine which condition the x-value satisfies",
                    "Use the corresponding piece/formula",
                    "Substitute x into that formula",
                    "Simplify to get f(x)"
                ],
                applications: [
                    "Tax brackets (different rates for different income levels)",
                    "Shipping costs (different rates based on weight/distance)",
                    "Utility bills (tiered pricing)",
                    "Parking fees (hourly rates with maximum daily charge)"
                ]
            },

            evaluating_piecewise: {
                title: "Evaluating Piecewise Functions",
                concepts: [
                    "Check which condition the input satisfies",
                    "Use only the piece that applies to that input",
                    "Pay attention to inequality symbols (< vs ≤)",
                    "Boundary points may belong to one piece or the other"
                ],
                theory: "Evaluation requires identifying which piece of the domain the input belongs to, then applying only that piece's formula.",
                keyFormulas: {
                    "Evaluation Process": "1. Check conditions, 2. Select piece, 3. Substitute, 4. Simplify"
                },
                solvingSteps: [
                    "Write down the x-value to evaluate",
                    "Test each condition to find which is true",
                    "Select the corresponding expression",
                    "Substitute x and calculate",
                    "State the answer"
                ],
                applications: [
                    "Finding tax owed for specific income",
                    "Calculating shipping cost for package weight",
                    "Determining parking fee for duration",
                    "Computing phone bill for usage level"
                ]
            },

            graphing_piecewise: {
                title: "Graphing Piecewise Functions",
                concepts: [
                    "Graph each piece as a linear segment",
                    "Use open circles for excluded endpoints (< or >)",
                    "Use closed circles for included endpoints (≤ or ≥)",
                    "Each piece is valid only on its specified interval"
                ],
                theory: "The graph consists of multiple linear segments, potentially with jumps or gaps at boundary points depending on continuity.",
                keyFormulas: {
                    "Graphing Process": "1. Graph each piece separately, 2. Restrict to domain, 3. Mark endpoints, 4. Check continuity"
                },
                graphingSteps: [
                    "Identify all pieces and their domains",
                    "For each piece, graph the linear function",
                    "Restrict each graph to its domain interval",
                    "Mark endpoints with open or closed circles",
                    "Check for continuity at boundaries",
                    "Label discontinuities if present"
                ],
                applications: [
                    "Visualizing progressive tax systems",
                    "Modeling step functions (e.g., postage rates)",
                    "Representing time-dependent processes",
                    "Showing threshold effects"
                ]
            },

            continuity_analysis: {
                title: "Continuity in Piecewise Functions",
                concepts: [
                    "Continuous if no jumps, gaps, or holes in graph",
                    "Check continuity at boundary points",
                    "Left and right limits must equal the function value",
                    "Discontinuity types: jump, removable, infinite"
                ],
                theory: "A piecewise function is continuous at a point if the left-hand limit, right-hand limit, and function value all equal each other at that point.",
                keyFormulas: {
                    "Continuity Condition": "lim[x→a⁻] f(x) = lim[x→a⁺] f(x) = f(a)",
                    "Left Limit": "lim[x→a⁻] f(x) uses the piece for x < a",
                    "Right Limit": "lim[x→a⁺] f(x) uses the piece for x > a"
                },
                analysisSteps: [
                    "Identify all boundary points",
                    "For each boundary point a:",
                    "  - Calculate left-hand limit (piece where x < a)",
                    "  - Calculate right-hand limit (piece where x > a)",
                    "  - Determine f(a) based on conditions",
                    "  - Compare all three values",
                    "If all equal: continuous; if not: discontinuous"
                ],
                applications: [
                    "Modeling realistic physical systems",
                    "Quality control (acceptable ranges)",
                    "Economics (smooth vs. abrupt transitions)",
                    "Engineering (material properties)"
                ]
            },

            finding_formulas: {
                title: "Finding Piecewise Function Formulas",
                concepts: [
                    "Use given information to determine each piece",
                    "May need to find slopes and intercepts",
                    "Use points, slopes, or other conditions",
                    "Ensure pieces connect properly if continuous"
                ],
                theory: "Given graph, table, or description, derive the formula for each piece using point-slope or slope-intercept form.",
                keyFormulas: {
                    "Point-Slope Form": "y - y₁ = m(x - x₁)",
                    "Slope-Intercept Form": "y = mx + b",
                    "Slope Formula": "m = (y₂ - y₁)/(x₂ - x₁)"
                },
                solvingSteps: [
                    "Identify the domain intervals",
                    "For each interval, find two points or slope and point",
                    "Calculate slope m if needed",
                    "Use point-slope or slope-intercept to write formula",
                    "Write complete piecewise function with conditions",
                    "Verify at boundary points"
                ],
                applications: [
                    "Reverse-engineering pricing structures",
                    "Modeling observed data with regime changes",
                    "Creating mathematical models from descriptions",
                    "Interpolation with different trends"
                ]
            },

            solving_equations: {
                title: "Solving Equations with Piecewise Functions",
                concepts: [
                    "Set f(x) = k and solve for each piece separately",
                    "Check if solution falls within piece's domain",
                    "Collect all valid solutions from all pieces",
                    "May have multiple solutions (one per piece)"
                ],
                theory: "To solve f(x) = k where f is piecewise, solve separately on each piece and verify the solution is in that piece's domain.",
                keyFormulas: {
                    "Solution Method": "For each piece: solve equation, check domain validity"
                },
                solvingSteps: [
                    "Write f(x) = k",
                    "For each piece:",
                    "  - Set piece's expression equal to k",
                    "  - Solve for x",
                    "  - Check if x satisfies piece's condition",
                    "  - If yes, it's a valid solution",
                    "Collect all valid solutions",
                    "Verify by substitution"
                ],
                applications: [
                    "Finding when output reaches target value",
                    "Determining break-even points",
                    "Solving threshold problems",
                    "Inverse problems in multi-stage processes"
                ]
            },

            domain_range: {
                title: "Domain and Range of Piecewise Functions",
                concepts: [
                    "Domain: union of all piece domains (usually all reals or specified)",
                    "Range: union of all piece ranges",
                    "Consider endpoint values and direction of pieces",
                    "May have gaps in range due to discontinuities"
                ],
                theory: "Domain is typically the union of the intervals where pieces are defined. Range requires analyzing output values from all pieces.",
                keyFormulas: {
                    "Domain": "Union of all interval conditions",
                    "Range": "Union of all output intervals from pieces"
                },
                analysisSteps: [
                    "Identify domain of each piece",
                    "Union all piece domains for total domain",
                    "For each piece, find range on its interval",
                    "Consider endpoints (open vs closed)",
                    "Union all piece ranges for total range",
                    "Express in interval notation"
                ],
                applications: [
                    "Valid input regions for models",
                    "Possible output values for systems",
                    "Constraints in optimization",
                    "Feasible regions in applications"
                ]
            },

            absolute_value_piecewise: {
                title: "Absolute Value as Piecewise Functions",
                concepts: [
                    "Absolute value functions are special piecewise functions",
                    "|x| = { x if x ≥ 0, -x if x < 0 }",
                    "|ax + b| can be rewritten as piecewise",
                    "Useful for analysis and graphing"
                ],
                theory: "Absolute value functions have a natural piecewise representation, separating positive and negative input regions.",
                keyFormulas: {
                    "Basic Absolute Value": "|x| = { x if x ≥ 0, -x if x < 0 }",
                    "General Form": "|ax + b| = { ax + b if ax + b ≥ 0, -(ax + b) if ax + b < 0 }",
                    "Critical Point": "ax + b = 0 → x = -b/a"
                },
                conversionSteps: [
                    "Identify absolute value expression |ax + b|",
                    "Find critical point: solve ax + b = 0",
                    "Write two pieces:",
                    "  - For x ≥ critical point: expression without absolute value",
                    "  - For x < critical point: negative of expression",
                    "Simplify each piece"
                ],
                applications: [
                    "Distance problems (always positive)",
                    "Error measurement",
                    "Tolerance specifications",
                    "Symmetric relationships"
                ]
            },

            step_functions: {
                title: "Step Functions",
                concepts: [
                    "Constant value on each interval (horizontal segments)",
                    "Jumps at boundary points",
                    "Floor and ceiling functions are examples",
                    "Used for discrete pricing, rounding, etc."
                ],
                theory: "Step functions are piecewise constant functions, taking discrete values over intervals.",
                keyFormulas: {
                    "Step Function": "f(x) = { c₁ if x in interval₁, c₂ if x in interval₂, ... }",
                    "Floor Function": "⌊x⌋ = greatest integer ≤ x",
                    "Ceiling Function": "⌈x⌉ = smallest integer ≥ x"
                },
                applications: [
                    "Postage rates",
                    "Parking meters",
                    "Integer rounding in computers",
                    "Quantization in digital systems"
                ]
            },

            real_world_modeling: {
                title: "Real-World Piecewise Modeling",
                concepts: [
                    "Many real situations have different rules in different ranges",
                    "Tax systems, pricing structures, physical processes",
                    "Identify transition points and rules for each region",
                    "Model captures regime changes naturally"
                ],
                theory: "Piecewise functions excel at modeling real-world situations with thresholds, tiers, or changing behaviors.",
                modelingProcess: [
                    "Identify the independent variable (usually time, quantity, etc.)",
                    "Determine transition points (where behavior changes)",
                    "For each region, identify the relationship (formula)",
                    "Write as piecewise function with appropriate conditions",
                    "Validate against real data or description"
                ],
                applications: [
                    "Progressive income tax",
                    "Tiered utility pricing",
                    "Bulk discount pricing",
                    "Temperature-dependent properties",
                    "Speed limits in zones",
                    "Shipping cost structures"
                ]
            }
        };
    }

    initializePiecewiseSolvers() {
        this.piecewiseTypes = {
            evaluate_two_piece: {
                patterns: [
                    /evaluate.*piecewise/i,
                    /f\(.*\).*\{/,
                    /two.*piece/i
                ],
                solver: this.evaluateTwoPiece.bind(this),
                name: 'Evaluate Two-Piece Function',
                category: 'evaluation',
                description: 'Evaluates a piecewise function with two pieces'
            },

            evaluate_three_piece: {
                patterns: [
                    /three.*piece/i,
                    /f\(.*\).*\{.*\{.*\{/
                ],
                solver: this.evaluateThreePiece.bind(this),
                name: 'Evaluate Three-Piece Function',
                category: 'evaluation',
                description: 'Evaluates a piecewise function with three pieces'
            },

            graph_piecewise: {
                patterns: [
                    /graph.*piecewise/i,
                    /sketch.*piecewise/i,
                    /plot/i
                ],
                solver: this.graphPiecewise.bind(this),
                name: 'Graph Piecewise Function',
                category: 'graphing',
                description: 'Graphs a piecewise linear function'
            },

            check_continuity: {
                patterns: [
                    /continuity/i,
                    /continuous/i,
                    /discontinuous/i
                ],
                solver: this.checkContinuity.bind(this),
                name: 'Check Continuity',
                category: 'continuity',
                description: 'Determines if function is continuous at boundary points'
            },

            find_formula: {
                patterns: [
                    /find.*formula/i,
                    /write.*piecewise/i,
                    /determine.*function/i
                ],
                solver: this.findPiecewiseFormula.bind(this),
                name: 'Find Piecewise Formula',
                category: 'formula_finding',
                description: 'Derives piecewise function from graph or description'
            },

            solve_equation: {
                patterns: [
                    /solve.*f\(x\)\s*=\s*/i,
                    /find.*x.*when/i,
                    /equation.*piecewise/i
                ],
                solver: this.solvePiecewiseEquation.bind(this),
                name: 'Solve Piecewise Equation',
                category: 'solving',
                description: 'Solves f(x) = k for piecewise function'
            },

            find_domain_range: {
                patterns: [
                    /domain.*range/i,
                    /find.*domain/i,
                    /find.*range/i
                ],
                solver: this.findDomainRange.bind(this),
                name: 'Find Domain and Range',
                category: 'domain_range',
                description: 'Determines domain and range of piecewise function'
            },

            absolute_value_piecewise: {
                patterns: [
                    /absolute.*value.*piecewise/i,
                    /\|.*\|.*piecewise/i,
                    /convert.*absolute/i
                ],
                solver: this.convertAbsoluteValue.bind(this),
                name: 'Convert Absolute Value to Piecewise',
                category: 'conversion',
                description: 'Rewrites absolute value as piecewise function'
            },

            step_function: {
                patterns: [
                    /step.*function/i,
                    /floor/i,
                    /ceiling/i,
                    /greatest.*integer/i
                ],
                solver: this.analyzeStepFunction.bind(this),
                name: 'Step Function Analysis',
                category: 'step_functions',
                description: 'Analyzes step/floor/ceiling functions'
            },

            word_problem_piecewise: {
                patterns: [
                    /tax/i,
                    /shipping/i,
                    /pricing/i,
                    /tier/i,
                    /bracket/i
                ],
                solver: this.solvePiecewiseWordProblem.bind(this),
                name: 'Piecewise Word Problem',
                category: 'word_problems',
                description: 'Solves real-world piecewise scenarios'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            evaluation: {
                'Selecting wrong piece': [
                    'Not checking which condition x satisfies',
                    'Using wrong inequality direction',
                    'Ignoring boundary point inclusion/exclusion',
                    'Evaluating with multiple pieces instead of one'
                ],
                'Boundary confusion': [
                    'Unclear whether boundary belongs to left or right piece',
                    'Misinterpreting < vs ≤',
                    'Using wrong piece at exact boundary value'
                ]
            },
            graphing: {
                'Endpoint notation': [
                    'Using closed circle when should be open',
                    'Using open circle when should be closed',
                    'Forgetting to mark endpoints',
                    'Connecting pieces that should be separate'
                ],
                'Domain restriction': [
                    'Graphing entire line instead of restricting to interval',
                    'Extending piece beyond its valid domain',
                    'Overlapping pieces incorrectly'
                ]
            },
            continuity: {
                'Limit calculation': [
                    'Using wrong piece for left or right limit',
                    'Forgetting to check function value at boundary',
                    'Assuming continuity without verification',
                    'Confusing limit with function value'
                ],
                'Discontinuity types': [
                    'Misidentifying jump vs removable discontinuity',
                    'Missing discontinuities at interior points',
                    'Not checking all boundary points'
                ]
            },
            solving: {
                'Domain validation': [
                    'Finding solution but not checking if it\'s in piece\'s domain',
                    'Accepting invalid solution from wrong piece',
                    'Missing additional solutions from other pieces',
                    'Not checking all pieces'
                ],
                'Multiple solutions': [
                    'Stopping after finding one solution',
                    'Not systematically checking each piece',
                    'Assuming unique solution'
                ]
            }
        };

        this.errorPrevention = {
            evaluation: {
                reminder: 'Always determine which condition the input satisfies first',
                method: 'Write out inequality check explicitly before selecting piece'
            },
            graphing: {
                reminder: 'Mark endpoints carefully - open for < or >, closed for ≤ or ≥',
                method: 'Create endpoint checklist for each piece'
            },
            continuity: {
                reminder: 'Check left limit, right limit, AND function value separately',
                method: 'Use three-column table: left limit | f(a) | right limit'
            },
            solving: {
                reminder: 'Solution must lie in the domain of the piece used to find it',
                method: 'After solving, substitute back and verify condition'
            },
            notation: {
                reminder: 'Be precise with inequality symbols and bracket notation',
                method: 'Double-check each condition matches intended domain'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why pieces exist and what they represent',
                language: 'intuitive understanding of domain partitioning'
            },
            procedural: {
                focus: 'Step-by-step evaluation, graphing, and analysis',
                language: 'explicit instructions for each task'
            },
            visual: {
                focus: 'Graphical understanding of pieces, endpoints, continuity',
                language: 'visual and spatial descriptions'
            },
            algebraic: {
                focus: 'Formal notation, conditions, and algebraic manipulation',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple terms, avoid heavy notation',
                detail: 'essential steps only',
                examples: 'concrete two-piece functions with integers'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with explanations',
                examples: 'mix of two and three pieces, some fractions'
            },
            ELI5: {
                vocabulary: 'everyday language, real-world analogies',
                detail: 'every step explained with stories',
                examples: 'tax brackets, ticket prices',
                analogies: true,
                visualization: 'simple diagrams and scenarios'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive with formal reasoning',
                examples: 'complex multi-piece, abstract cases'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced progression'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            income_tax: {
                scenario: "Progressive income tax with multiple brackets",
                piecewiseStructure: "Different tax rates for different income levels",
                examples: [
                    "Tax is 10% for income ≤ $10,000, 15% for $10,000 < income ≤ $40,000, 25% for income > $40,000",
                    "Calculate tax owed on $35,000 income"
                ],
                context: "Tax systems use brackets to implement progressive taxation",
                formula: "T(x) = { 0.10x if x ≤ 10000, 1000 + 0.15(x-10000) if 10000 < x ≤ 40000, 5500 + 0.25(x-40000) if x > 40000 }"
            },

            shipping_costs: {
                scenario: "Shipping rates based on weight",
                piecewiseStructure: "Cost per pound changes at weight thresholds",
                examples: [
                    "$5 for packages ≤ 2 lbs, $5 + $2 per pound over 2 lbs for 2 < weight ≤ 10 lbs, $21 flat rate for weight > 10 lbs",
                    "Find cost for 7 lb package"
                ],
                context: "Shipping companies use tiered pricing",
                formula: "C(w) = { 5 if w ≤ 2, 5 + 2(w-2) if 2 < w ≤ 10, 21 if w > 10 }"
            },

            parking_fees: {
                scenario: "Parking garage with hourly rates and daily maximum",
                piecewiseStructure: "Hourly charge up to daily max, then flat rate",
                examples: [
                    "$3 per hour for up to 8 hours, $24 maximum for any duration ≥ 8 hours",
                    "Cost for 6 hours vs 10 hours"
                ],
                context: "Parking facilities limit daily charges",
                formula: "P(t) = { 3t if t ≤ 8, 24 if t > 8 }"
            },

            utility_billing: {
                scenario: "Electric bill with tiered usage rates",
                piecewiseStructure: "Different price per kWh for different usage levels",
                examples: [
                    "$0.10/kWh for first 500 kWh, $0.15/kWh for 501-1000 kWh, $0.20/kWh for over 1000 kWh",
                    "Calculate bill for 750 kWh"
                ],
                context: "Utilities incentivize conservation through tiered pricing",
                formula: "B(k) = { 0.10k if k ≤ 500, 50 + 0.15(k-500) if 500 < k ≤ 1000, 125 + 0.20(k-1000) if k > 1000 }"
            },

            overtime_pay: {
                scenario: "Pay rate changes after 40 hours per week",
                piecewiseStructure: "Regular rate up to 40 hours, time-and-a-half after",
                examples: [
                    "Regular rate $15/hr for up to 40 hours, $22.50/hr (1.5×) for hours over 40",
                    "Calculate weekly pay for 50 hours"
                ],
                context: "Labor laws mandate overtime pay",
                formula: "W(h) = { 15h if h ≤ 40, 600 + 22.50(h-40) if h > 40 }"
            },

            cell_phone_plan: {
                scenario: "Data plan with included data and overage charges",
                piecewiseStructure: "Fixed price up to limit, per-GB charge after",
                examples: [
                    "$50 for up to 10 GB, then $10 per additional GB",
                    "Cost for using 13 GB"
                ],
                context: "Phone plans have data caps with overage fees",
                formula: "C(g) = { 50 if g ≤ 10, 50 + 10(g-10) if g > 10 }"
            },

            temperature_conversion: {
                scenario: "Different formulas apply in different temp ranges",
                piecewiseStructure: "Piecewise linear approximation of physical property",
                examples: [
                    "Material expansion rate changes at phase transition temperatures"
                ],
                context: "Physical properties can vary by regime"
            },

            postal_rates: {
                scenario: "Postage rates by weight increments",
                piecewiseStructure: "Step function - price jumps at weight thresholds",
                examples: [
                    "$0.55 for up to 1 oz, $0.70 for 1-2 oz, $0.85 for 2-3 oz",
                    "Postage for 1.5 oz letter"
                ],
                context: "Post office uses step pricing",
                formula: "P(w) = { 0.55 if 0 < w ≤ 1, 0.70 if 1 < w ≤ 2, 0.85 if 2 < w ≤ 3, ... }"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            evaluation: {
                skills: ['Evaluating linear functions', 'Understanding inequalities', 'Substitution'],
                priorKnowledge: ['Linear function evaluation', 'Inequality notation', 'Order of operations'],
                checkQuestions: [
                    "If f(x) = 2x + 3, what is f(5)?",
                    "Is x = 7 a solution to x < 10?",
                    "Is x = 10 a solution to x ≤ 10?"
                ]
            },
            graphing: {
                skills: ['Graphing linear functions', 'Understanding domain restrictions', 'Endpoint notation'],
                priorKnowledge: ['Slope-intercept form', 'Plotting points', 'Open vs closed circles'],
                checkQuestions: [
                    "Graph y = 2x + 1",
                    "What does an open circle at a point mean?",
                    "What does a closed circle mean?"
                ]
            },
            continuity: {
                skills: ['Understanding limits', 'Evaluating one-sided limits', 'Comparing values'],
                priorKnowledge: ['Limit concept', 'Left vs right approach', 'Function value'],
                checkQuestions: [
                    "What is a limit?",
                    "What's the difference between lim[x→a⁻] and lim[x→a⁺]?",
                    "Can a function be defined at a point but discontinuous there?"
                ]
            },
            solving: {
                skills: ['Solving linear equations', 'Domain validation', 'Checking solutions'],
                priorKnowledge: ['Linear equation solving', 'Inequality checking', 'Substitution verification'],
                checkQuestions: [
                    "Solve 3x + 5 = 17",
                    "Check if x = 8 satisfies x < 10",
                    "Verify a solution by substitution"
                ]
            },
            formula_finding: {
                skills: ['Finding slope from points', 'Point-slope form', 'Identifying domain intervals'],
                priorKnowledge: ['Slope formula', 'Linear equation forms', 'Interval notation'],
                checkQuestions: [
                    "Find slope between (2,5) and (6,13)",
                    "Write equation of line through (3,7) with slope 2",
                    "Express 'x is between 2 and 5' in interval notation"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            choice_diagram: {
                description: "Decision tree showing which piece applies",
                analogy: "Like choosing which rule to follow based on situation",
                visualization: "Flowchart: Check x → Which condition? → Apply that formula",
                suitableFor: ['evaluation', 'solving'],
                explanation: "Different rules for different situations - check first, then apply"
            },

            segmented_graph: {
                description: "Visual showing multiple line segments",
                analogy: "Like different road segments with different speed limits",
                visualization: "Graph with colored segments, marked endpoints",
                suitableFor: ['graphing', 'continuity', 'domain_range'],
                explanation: "Each piece is a different segment, valid only in its region"
            },

            tax_bracket_table: {
                description: "Table showing income ranges and corresponding rules",
                analogy: "Like tax brackets showing rates for different income levels",
                visualization: "Table with columns: Range | Formula | Rate",
                suitableFor: ['word_problems', 'evaluation'],
                explanation: "Real-world representation of tiered systems"
            },

            number_line_partition: {
                description: "Number line divided into regions",
                analogy: "Like zones on a map with different rules",
                visualization: "Number line with marked boundaries and labels",
                suitableFor: ['domain_range', 'continuity'],
                explanation: "Domain split into non-overlapping intervals"
            },

            limit_table: {
                description: "Table comparing left limit, function value, right limit",
                analogy: "Like approaching a border from both sides",
                visualization: "Three columns: lim[x→a⁻] | f(a) | lim[x→a⁺]",
                suitableFor: ['continuity'],
                explanation: "Systematic check of continuity conditions"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Evaluate f(3) where f(x) = { x + 2 if x < 5, 2x - 1 if x ≥ 5 }",
                    solution: 5,
                    steps: [
                        "Check which condition 3 satisfies",
                        "3 < 5 is true, so use first piece",
                        "f(3) = 3 + 2 = 5"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Evaluate g(7) where g(x) = { x + 2 if x < 5, 2x - 1 if x ≥ 5 }",
                    solution: 13,
                    steps: [
                        "Check which condition 7 satisfies",
                        "7 ≥ 5 is true, so use second piece",
                        "g(7) = 2(7) - 1 = 13"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Evaluate h(5) where h(x) = { x + 2 if x < 5, 2x - 1 if x ≥ 5 }",
                    solution: 9,
                    steps: [
                        "Check which condition 5 satisfies",
                        "5 ≥ 5 is true, so use second piece",
                        "h(5) = 2(5) - 1 = 9"
                    ],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Graph f(x) = { x + 1 if x < 2, -x + 5 if x ≥ 2 }",
                    steps: [
                        "First piece: y = x + 1 for x < 2",
                        "Graph line, restrict to x < 2, open circle at (2,3)",
                        "Second piece: y = -x + 5 for x ≥ 2",
                        "Graph line, restrict to x ≥ 2, closed circle at (2,3)",
                        "Note: continuous at x = 2"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Check continuity at x = 3 for f(x) = { x² if x < 3, 2x + 3 if x ≥ 3 }",
                    solution: "Discontinuous",
                    steps: [
                        "Left limit: lim[x→3⁻] x² = 9",
                        "Right limit: lim[x→3⁺] (2x+3) = 9",
                        "f(3) = 2(3) + 3 = 9",
                        "All three equal, so continuous"
                    ],
                    difficulty: "medium",
                    note: "Actually continuous - example shows checking process"
                },
                {
                    problem: "Solve f(x) = 7 where f(x) = { 2x + 1 if x < 3, x + 4 if x ≥ 3 }",
                    solution: "x = 3",
                    steps: [
                        "Piece 1: 2x + 1 = 7 → x = 3, but 3 < 3 is false, invalid",
                        "Piece 2: x + 4 = 7 → x = 3, and 3 ≥ 3 is true, valid",
                        "Solution: x = 3"
                    ],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Find piecewise formula from graph with points (0,2), (3,5), (3,4), (6,10)",
                    steps: [
                        "Two pieces evident: break at x = 3",
                        "Piece 1: points (0,2) and (3,5), slope = (5-2)/(3-0) = 1, y = x + 2",
                        "Piece 2: points (3,4) and (6,10), slope = (10-4)/(6-3) = 2, y = 2x - 2",
                        "f(x) = { x + 2 if x < 3, 2x - 2 if x ≥ 3 }",
                        "Note jump discontinuity at x = 3"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Convert |2x - 6| to piecewise",
                    solution: "f(x) = { -2x + 6 if x < 3, 2x - 6 if x ≥ 3 }",
                    steps: [
                        "Find critical point: 2x - 6 = 0 → x = 3",
                        "For x < 3: 2x - 6 < 0, so |2x - 6| = -(2x - 6) = -2x + 6",
                        "For x ≥ 3: 2x - 6 ≥ 0, so |2x - 6| = 2x - 6",
                        "f(x) = { -2x + 6 if x < 3, 2x - 6 if x ≥ 3 }"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Tax problem: 10% on first $10k, 15% on next $30k, 25% above $40k. Find tax on $50k",
                    solution: "$7,500",
                    steps: [
                        "First $10k: 0.10 × 10000 = $1,000",
                        "Next $30k: 0.15 × 30000 = $4,500",
                        "Remaining $10k: 0.25 × 10000 = $2,500",
                        "Total: $1,000 + $4,500 + $2,500 = $8,000"
                    ],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                evaluation: [
                    { problem: "f(x) = { x + 1 if x ≤ 0, 2x if x > 0 }, find f(-2)", solution: -1 },
                    { problem: "f(x) = { x + 1 if x ≤ 0, 2x if x > 0 }, find f(3)", solution: 6 },
                    { problem: "f(x) = { x + 1 if x ≤ 0, 2x if x > 0 }, find f(0)", solution: 1 }
                ],
                graphing: [
                    { problem: "Graph f(x) = { x if x < 1, 2 if x ≥ 1 }" },
                    { problem: "Graph f(x) = { -x + 2 if x ≤ 1, x if x > 1 }" }
                ],
                continuity: [
                    { problem: "Check continuity: f(x) = { x + 1 if x < 2, 3 if x ≥ 2 }", solution: "Continuous" },
                    { problem: "Check continuity: f(x) = { x if x < 1, x + 1 if x ≥ 1 }", solution: "Discontinuous (jump)" }
                ],
                solving: [
                    { problem: "Solve f(x) = 5 where f(x) = { 2x if x < 3, x + 2 if x ≥ 3 }", solution: "x = 3" },
                    { problem: "Solve f(x) = 0 where f(x) = { x + 2 if x < 0, x - 2 if x ≥ 0 }", solution: "x = 2" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            using_all_pieces: {
                misconception: "Thinking you should use all pieces when evaluating",
                reality: "Use ONLY the piece whose condition the input satisfies",
                correctiveExample: "For f(x) = { x+1 if x<5, 2x if x≥5 }, evaluating f(3) uses ONLY first piece: f(3) = 3+1 = 4",
                commonIn: ['evaluation']
            },

            boundary_confusion: {
                misconception: "Uncertain which piece owns the boundary point",
                reality: "Check the inequality carefully: ≤ or ≥ includes the point, < or > excludes it",
                correctiveExample: "If condition is 'x < 5', then x = 5 does NOT use this piece. If 'x ≤ 5', then x = 5 DOES use it",
                commonIn: ['evaluation', 'graphing']
            },

            endpoint_circles: {
                misconception: "Using wrong type of circle (open vs closed) at endpoints",
                reality: "Closed circle means point IS included (≤ or ≥), open means NOT included (< or >)",
                correctiveExample: "For f(x) = { x+1 if x<2, ... }, at x=2 on first piece use OPEN circle because x<2 excludes x=2",
                commonIn: ['graphing']
            },

            extending_pieces: {
                misconception: "Graphing entire linear function instead of restricting to domain",
                reality: "Each piece is only valid on its specified interval",
                correctiveExample: "For piece 'y = 2x if x < 3', graph only the part where x < 3, not the whole line",
                commonIn: ['graphing']
            },

            continuity_assumption: {
                misconception: "Assuming piecewise functions are always continuous",
                reality: "Must check continuity at each boundary point; many have jumps",
                correctiveExample: "f(x) = { x if x<1, x+2 if x≥1 } has jump discontinuity at x=1 (jump of size 2)",
                commonIn: ['continuity', 'graphing']
            },

            limit_vs_value: {
                misconception: "Thinking limit equals function value at boundary",
                reality: "Limit and function value can differ; that's what creates removable discontinuity",
                correctiveExample: "lim[x→a] f(x) can exist even if f(a) is different or undefined",
                commonIn: ['continuity']
            },

            solving_without_checking: {
                misconception: "Solving equation on one piece and not checking domain validity",
                reality: "Solution must satisfy the piece's condition; check EVERY piece",
                correctiveExample: "If solving '2x+1=7' gives x=3, but piece requires x<2, then x=3 is NOT valid from this piece",
                commonIn: ['solving']
            },

            single_solution_assumption: {
                misconception: "Assuming piecewise equation has at most one solution",
                reality: "Can have one solution per piece - always check all pieces",
                correctiveExample: "f(x) = { x if x<0, -x if x≥0 } and f(x)=0 has solution x=0 (not one from each piece, but must check both)",
                commonIn: ['solving']
            },

            notation_confusion: {
                misconception: "Misreading or miswriting bracket notation",
                reality: "Precise notation matters: brackets show where pieces start/end",
                correctiveExample: "f(x) = { expression₁ if condition₁, expression₂ if condition₂ } - comma separates pieces",
                commonIn: ['all']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            piecewise_concept: {
                analogy: "Different rules in different zones (speed limits)",
                explanation: "Just like speed limit changes when you enter different zones (school zone: 25mph, highway: 65mph), piecewise functions have different formulas in different x-ranges",
                suitableFor: ['evaluation', 'general'],
                ELI5: "Imagine different rules for different rooms: walk in hallway, run in gym, whisper in library. Piecewise functions are like that - different math rules for different x values"
            },

            evaluation: {
                analogy: "Choosing correct instruction manual",
                explanation: "Like choosing the right manual based on your product model, you choose the right piece based on your x-value",
                suitableFor: ['evaluation'],
                ELI5: "If you have a toy, you read the instructions for THAT toy, not a different one. Same with piecewise - find which 'instruction' (piece) matches your x"
            },

            graphing: {
                analogy: "Railway tracks switching",
                explanation: "Like train tracks that split at switches, the graph follows one path in one region, then switches to a different path",
                suitableFor: ['graphing', 'continuity'],
                ELI5: "Imagine a path that changes direction at certain points - straight one way, then bends another way. The graph does that"
            },

            continuity: {
                analogy: "Bridge connection",
                explanation: "Continuous means the pieces connect like a bridge with no gap. Discontinuous means there's a gap or jump like a drawbridge that's up",
                suitableFor: ['continuity'],
                ELI5: "Can you walk from one piece to the next without jumping? If yes, it's continuous. If there's a gap you have to jump, it's discontinuous"
            },

            tax_brackets: {
                analogy: "Income tax system",
                explanation: "Perfect real-world example: different tax rates for different income levels, exactly like piecewise functions",
                suitableFor: ['word_problems', 'general'],
                ELI5: "When you earn money, you might pay 10% tax on first $100, then 20% on the next $100. That's a piecewise function in real life!"
            },

            absolute_value: {
                analogy: "Distance always positive",
                explanation: "Absolute value is distance from zero - whether you go left or right, distance is positive. That's why it splits into two pieces",
                suitableFor: ['absolute_value_conversion'],
                ELI5: "If you walk 5 steps forward or 5 steps backward from your spot, you're still 5 steps away. That's absolute value!"
            },

            step_function: {
                analogy: "Staircase",
                explanation: "Like climbing stairs - you're at one height, then suddenly jump to next height. Step functions jump from one value to another",
                suitableFor: ['step_functions'],
                ELI5: "Imagine stairs: you're on step 1 (height 1), then jump to step 2 (height 2). Step functions work like that - flat then jump"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            evaluation: {
                level1: "What is the value of x you need to evaluate?",
                level2: "Which condition does this x-value satisfy?",
                level3: "Use the piece corresponding to that condition",
                level4: "Substitute x into that piece's formula and simplify"
            },

            graphing: {
                level1: "How many pieces does the function have?",
                level2: "What is the domain (x-range) for each piece?",
                level3: "Graph each piece as a line, but only on its domain",
                level4: "Mark endpoints with open circles (< or >) or closed circles (≤ or ≥)"
            },

            continuity: {
                level1: "At what point(s) do the pieces meet?",
                level2: "At each boundary, you need to check three things",
                level3: "Calculate: left limit, function value, right limit",
                level4: "If all three are equal, it's continuous. If not, it's discontinuous"
            },

            solving: {
                level1: "How many pieces does the function have?",
                level2: "For each piece, set its formula equal to the target value",
                level3: "Solve the equation for that piece",
                level4: "Check if the solution satisfies that piece's condition. If yes, it's valid"
            },

            formula_finding: {
                level1: "How many pieces are there in the graph or description?",
                level2: "For each piece, identify two points or a point and slope",
                level3: "Use slope formula or point-slope form to find each piece's equation",
                level4: "Write the complete piecewise function with correct conditions"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Evaluate f(2) where f(x) = { x + 3 if x < 5, 2x if x ≥ 5 }",
                    answer: 5,
                    assesses: "evaluation_basic",
                    difficulty: "basic"
                },
                {
                    question: "Is f continuous at x = 3 where f(x) = { x + 1 if x ≤ 3, 2x - 2 if x > 3 }?",
                    answer: "Yes",
                    assesses: "continuity_basic",
                    difficulty: "intermediate"
                },
                {
                    question: "Graph f(x) = { x if x < 1, 2 if x ≥ 1 }",
                    answer: "Two pieces: slanted line ending at open (1,1), horizontal line from closed (1,2)",
                    assesses: "graphing_basic",
                    difficulty: "basic"
                }
            ],

            formative: [
                {
                    question: "When evaluating f(5) where f has condition 'x < 5' for piece 1, do you use piece 1?",
                    options: ["Yes", "No", "Sometimes", "Depends on the formula"],
                    correct: "No",
                    explanation: "5 < 5 is false, so x = 5 does NOT satisfy 'x < 5'"
                },
                {
                    question: "At a boundary point with condition x ≤ a, which type of circle is used?",
                    options: ["Open circle", "Closed circle", "No circle", "Either one"],
                    correct: "Closed circle",
                    explanation: "≤ includes the point, so use closed circle"
                },
                {
                    question: "To check continuity at x = a, you need to compare:",
                    options: [
                        "Only left and right limits",
                        "Only function value at a",
                        "Left limit, f(a), and right limit",
                        "Only the graph"
                    ],
                    correct: "Left limit, f(a), and right limit",
                    explanation: "All three must be equal for continuity"
                }
            ],

            summative: [
                {
                    question: "Find the formula for f if the graph shows a line through (0,1) and (2,5) for x < 2, and a line through (2,3) and (5,9) for x ≥ 2",
                    answer: "f(x) = { 2x + 1 if x < 2, 2x - 1 if x ≥ 2 }",
                    showsWork: true,
                    rubric: {
                        piece1_slope: 1,
                        piece1_equation: 1,
                        piece2_slope: 1,
                        piece2_equation: 1,
                        correct_conditions: 1
                    }
                },
                {
                    question: "Solve f(x) = 6 where f(x) = { 2x + 1 if x < 3, x + 3 if x ≥ 3 }",
                    answer: "x = 3",
                    showsWork: true,
                    rubric: {
                        solve_piece1: 1,
                        check_piece1_domain: 1,
                        solve_piece2: 1,
                        check_piece2_domain: 1,
                        final_answer: 1
                    }
                }
            ],

            byDifficulty: {
                easy: [
                    "f(x) = { x + 2 if x < 0, x - 2 if x ≥ 0 }, find f(-3)",
                    "f(x) = { 5 if x < 2, 10 if x ≥ 2 }, find f(1)",
                    "f(x) = { x if x ≤ 5, 5 if x > 5 }, find f(5)"
                ],
                medium: [
                    "f(x) = { 2x + 1 if x < 3, -x + 10 if x ≥ 3 }, check continuity at x = 3",
                    "f(x) = { x + 1 if x < 2, 2x - 1 if x ≥ 2 }, solve f(x) = 5",
                    "Graph f(x) = { -x + 3 if x ≤ 1, 2x if x > 1 }"
                ],
                hard: [
                    "Find f if graph shows pieces: y = -2x + 5 for x < 2, y = x - 1 for 2 ≤ x < 5, y = 4 for x ≥ 5",
                    "Solve f(x) = x where f(x) = { 2x - 1 if x < 2, x + 2 if x ≥ 2 }",
                    "Convert |3x - 9| + 2 to piecewise form"
                ]
            },

            byObjective: {
                canEvaluate: [
                    "f(x) = { x + 1 if x < 3, 2x if x ≥ 3 }, find f(2)",
                    "f(x) = { x + 1 if x < 3, 2x if x ≥ 3 }, find f(4)",
                    "f(x) = { x + 1 if x < 3, 2x if x ≥ 3 }, find f(3)"
                ],
                canGraph: [
                    "Graph f(x) = { x if x ≤ 0, -x if x > 0 }",
                    "Graph f(x) = { 2x + 1 if x < 1, 3 if x ≥ 1 }"
                ],
                canCheckContinuity: [
                    "Check continuity: f(x) = { x² if x < 2, 4 if x ≥ 2 }",
                    "Check continuity: f(x) = { x + 1 if x ≤ 1, 2x if x > 1 }"
                ],
                canSolve: [
                    "Solve f(x) = 7 where f(x) = { 3x if x < 3, x + 4 if x ≥ 3 }",
                    "Solve f(x) = 5 where f(x) = { 2x + 1 if x ≤ 2, x + 3 if x > 2 }"
                ],
                canFindFormula: [
                    "Write piecewise function from graph with break at x = 1",
                    "Model tax: 10% on first $1000, 20% on amounts over $1000"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "evaluation": "Check which condition x satisfies → Use that piece only → Substitute and simplify",
                "graphing": "For each piece: graph line → restrict to domain → mark endpoints correctly",
                "continuity": "At boundary a: find lim[x→a⁻], f(a), lim[x→a⁺] → Compare all three",
                "solving": "For each piece: solve equation → check if solution is in piece's domain → collect valid solutions",
                "formula_finding": "Identify pieces from graph/description → Find equation for each → Write with conditions"
            },

            whenToUseWhat: {
                "direct_evaluation": "When given specific x-value to evaluate",
                "systematic_checking": "When checking continuity at all boundaries",
                "piece_by_piece_solving": "When solving f(x) = k",
                "slope_intercept_method": "When finding formulas from graphs",
                "tax_bracket_approach": "When modeling tiered pricing"
            },

            methodSelection: {
                factorsToConsider: [
                    "Number of pieces in the function",
                    "Type of task (evaluate, graph, solve, etc.)",
                    "Complexity of conditions (inequalities)",
                    "Presence of boundary points",
                    "Continuity or discontinuity"
                ],
                generalApproach: [
                    "1. Identify all pieces and their domain conditions",
                    "2. Apply appropriate method for the task",
                    "3. Handle boundary points carefully",
                    "4. Check work (especially domain validity)",
                    "5. Verify answer makes sense"
                ]
            },

            optimizationTips: {
                "Mark boundaries clearly": "Always identify and mark transition points first",
                "Check inequality direction": "Be precise with < vs ≤",
                "Verify in domain": "After solving, always check solution is in piece's domain",
                "Use table for continuity": "Organize left limit | f(a) | right limit in columns",
                "Color-code pieces": "Use different colors when graphing different pieces"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Evaluation Sprint",
                    timeLimit: 90,
                    problems: [
                        "f(x) = { x+1 if x<2, 2x if x≥2 }, find f(1)",
                        "f(x) = { x+1 if x<2, 2x if x≥2 }, find f(3)",
                        "f(x) = { x+1 if x<2, 2x if x≥2 }, find f(2)",
                        "g(x) = { 5 if x≤0, -5 if x>0 }, find g(0)",
                        "g(x) = { 5 if x≤0, -5 if x>0 }, find g(-1)"
                    ]
                },
                {
                    name: "Continuity Check Challenge",
                    timeLimit: 120,
                    problems: [
                        "f(x) = { x if x<1, 1 if x≥1 }, continuous at x=1?",
                        "f(x) = { x+2 if x≤3, 5 if x>3 }, continuous at x=3?",
                        "f(x) = { 2x if x<2, x+2 if x≥2 }, continuous at x=2?"
                    ]
                }
            ],

            puzzles: [
                {
                    name: "Mystery Function",
                    problem: "f(x) is piecewise with 2 pieces meeting at x=3. f(0)=5, f(6)=8, and f is continuous everywhere.",
                    given: "Both pieces are linear. First piece passes through (0,5).",
                    solve: "Find the complete formula",
                    solution: "Multiple valid answers depending on second piece's slope"
                },
                {
                    name: "Continuity Designer",
                    problem: "Create a piecewise function f(x) = { ax+b if x<2, cx+d if x≥2 }",
                    constraint: "Make it continuous at x=2 with f(2)=7",
                    solution: "Many solutions: must have 2a+b = 2c+d = 7"
                },
                {
                    name: "Backwards Engineering",
                    challenge: "Given that f(x) has a jump of size 3 at x=4 and is linear on both sides",
                    constraints: "f(0)=2 and f(6)=10",
                    sampleSolution: "f(x) = { x+2 if x<4, x+5 if x≥4 }"
                }
            ],

            applications: [
                {
                    scenario: "Tax Calculation",
                    problem: "Tax is 10% on first $20k, 20% on next $30k, 30% on amounts over $50k. Find tax on $60k.",
                    formula: "T(x) = { 0.1x if x≤20000, 2000+0.2(x-20000) if 20000<x≤50000, 8000+0.3(x-50000) if x>50000 }",
                    solution: "$11,000"
                },
                {
                    scenario: "Parking Garage",
                    problem: "$2/hr for first 4 hours, $1/hr for next 4 hours, $15 max for any time ≥8 hours. Cost for 10 hours?",
                    formula: "C(t) = { 2t if t≤4, 8+1(t-4) if 4<t<8, 15 if t≥8 }",
                    solution: "$15"
                },
                {
                    scenario: "Cell Phone Data",
                    problem: "$40 for up to 5GB, then $5 per GB over. Bill for 8GB?",
                    formula: "C(g) = { 40 if g≤5, 40+5(g-5) if g>5 }",
                    solution: "$55"
                }
            ],

            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "f(x) = { x+1 if x<3, 2x if x≥3 }",
                        "Find f(3)",
                        "3<3 is true, so use first piece",  // ERROR: 3<3 is FALSE
                        "f(3) = 3+1 = 4"
                    ],
                    correctAnswer: "f(3) = 2(3) = 6",
                    errorType: "Inequality evaluation error"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Graph f(x) = { x+1 if x≤2, 2x if x>2 }",
                        "First piece: graph y=x+1 for all x",  // ERROR: should restrict to x≤2
                        "Second piece: graph y=2x for all x"   // ERROR: should restrict to x>2
                    ],
                    correctAnswer: "Each piece should only be graphed on its domain",
                    errorType: "Failed to restrict pieces to their domains"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Solve f(x)=5 where f(x) = { 2x+1 if x<3, x+2 if x≥3 }",
                        "2x+1=5 → x=2",  // Correct
                        "Done, x=2"       // ERROR: didn't check second piece
                    ],
                    correctAnswer: "x=2 is valid, but must also check second piece: x+2=5 → x=3 (also valid)",
                    errorType: "Didn't check all pieces"
                }
            ]
        };
    }

    initializeNotationDatabase() {
        this.notationGuidance = {
            standard_notation: {
                format: "f(x) = { expression₁ if condition₁, expression₂ if condition₂, ... }",
                example: "f(x) = { 2x + 1 if x < 3, x² if x ≥ 3 }",
                notes: "Use curly brace, comma separates pieces, conditions use standard inequality symbols"
            },
            interval_notation: {
                format: "Can describe domains using interval notation",
                example: "f(x) = { 2x + 1 on (-∞, 3), x² on [3, ∞) }",
                notes: "( or ) means open endpoint, [ or ] means closed endpoint"
            },
            inequality_symbols: {
                "less than": "x < a",
                "less than or equal": "x ≤ a",
                "greater than": "x > a",
                "greater than or equal": "x ≥ a",
                "between (exclusive)": "a < x < b",
                "between (inclusive)": "a ≤ x ≤ b",
                "between (mixed)": "a < x ≤ b or a ≤ x < b"
            },
            graphing_notation: {
                "open circle": "○ - point NOT included (< or >)",
                "closed circle": "● - point IS included (≤ or ≥)",
                "arrow": "→ - extends infinitely",
                "ray": "→ - starts at point, extends one direction",
                "segment": "—— - finite line segment between two points"
            }
        };
    }

    initializeContinuityDatabase() {
        this.continuityTypes = {
            continuous: {
                description: "No breaks, jumps, or holes",
                condition: "lim[x→a⁻] f(x) = f(a) = lim[x→a⁺] f(x)",
                graphical: "Can draw without lifting pencil",
                example: "f(x) = { x if x<1, x if x≥1 } at x=1"
            },
            jump_discontinuity: {
                description: "Function jumps from one value to another",
                condition: "lim[x→a⁻] f(x) ≠ lim[x→a⁺] f(x)",
                graphical: "Two pieces don't meet - vertical gap",
                example: "f(x) = { x if x<1, x+2 if x≥1 } at x=1 (jump of size 2)"
            },
            removable_discontinuity: {
                description: "Hole in graph - limits exist but don't match function value",
                condition: "lim[x→a⁻] f(x) = lim[x→a⁺] f(x) ≠ f(a)",
                graphical: "Open circle at boundary with different point plotted",
                example: "Rare in standard piecewise, more common in rational functions"
            },
            infinite_discontinuity: {
                description: "Function approaches infinity at boundary",
                condition: "lim[x→a] f(x) = ±∞",
                graphical: "Vertical asymptote",
                example: "Not typical in piecewise linear functions"
            }
        };

        this.continuityChecklist = {
            steps: [
                "Identify all boundary points (where pieces meet)",
                "For each boundary point a:",
                "  a) Calculate left-hand limit using piece for x < a",
                "  b) Determine f(a) based on which piece includes x = a",
                "  c) Calculate right-hand limit using piece for x > a",
                "  d) Compare: if all three equal, continuous; otherwise discontinuous",
                "Classify any discontinuities (jump, removable, infinite)"
            ],
            common_patterns: {
                "Continuous piecewise": "Pieces connect smoothly at boundaries",
                "Step function": "Horizontal jumps at each boundary",
                "Absolute value": "Always continuous (V-shape with no gaps)"
            }
        };
    }

    // MAIN SOLVER METHOD
    solvePiecewiseProblem(config) {
        const { pieces, evaluateAt, taskType, parameters, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parsePiecewiseProblem(pieces, evaluateAt, taskType, parameters, context);

            // Solve the problem
            this.currentSolution = this.solvePiecewiseProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generatePiecewiseSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generatePiecewiseGraphData();

            // Generate workbook
            this.generatePiecewiseWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                steps: this.solutionSteps,
                graph: this.graphData
            };

        } catch (error) {
            throw new Error(`Failed to solve piecewise problem: ${error.message}`);
        }
    }

    parsePiecewiseProblem(pieces, evaluateAt, taskType, parameters = {}, context = {}) {
        // Validate pieces structure
        if (!pieces || !Array.isArray(pieces) || pieces.length === 0) {
            throw new Error("Invalid pieces structure - must be non-empty array");
        }

        // Determine task type
        const type = taskType || this.detectPiecewiseTaskType(evaluateAt, parameters, context);

        return {
            pieces: pieces.map(piece => ({
                expression: piece.expression || piece.formula,
                condition: piece.condition,
                domain: this.parseCondition(piece.condition),
                coefficients: this.extractLinearCoefficients(piece.expression)
            })),
            evaluateAt: evaluateAt,
            taskType: type,
            parameters: { ...parameters },
            context: { ...context },
            parsedAt: new Date().toISOString()
        };
    }

    detectPiecewiseTaskType(evaluateAt, parameters, context) {
        if (evaluateAt !== undefined && evaluateAt !== null) {
            return 'evaluate';
        }
        if (context.task === 'graph' || parameters.graph) {
            return 'graph_piecewise';
        }
        if (context.task === 'continuity' || parameters.checkContinuity) {
            return 'check_continuity';
        }
        if (parameters.solveFor !== undefined) {
            return 'solve_equation';
        }
        if (context.task === 'find_formula') {
            return 'find_formula';
        }
        if (context.task === 'domain_range') {
            return 'find_domain_range';
        }

        return 'evaluate_two_piece'; // default
    }

    parseCondition(condition) {
        // Parse condition string like "x < 3" or "x ≥ 5" or "2 ≤ x < 7"
        const cleanCondition = condition.replace(/\s+/g, ' ').trim();

        // Handle compound conditions (e.g., "2 ≤ x < 7")
        if (cleanCondition.includes('≤') && cleanCondition.includes('<')) {
            const parts = cleanCondition.split(/\s+/);
            return {
                type: 'compound',
                lowerBound: parseFloat(parts[0]),
                lowerInclusive: true,
                upperBound: parseFloat(parts[parts.length - 1]),
                upperInclusive: false,
                raw: cleanCondition
            };
        }

        // Handle single inequality
        if (cleanCondition.includes('<')) {
            const isInclusive = cleanCondition.includes('≤');
            const parts = cleanCondition.split(/[<≤]/);
            const bound = parseFloat(parts[1] || parts[0]);

            if (cleanCondition.startsWith('x')) {
                // x < 5 or x ≤ 5
                return {
                    type: 'upper',
                    bound: bound,
                    inclusive: isInclusive,
                    raw: cleanCondition
                };
            } else {
                // 5 < x or 5 ≤ x
                return {
                    type: 'lower',
                    bound: bound,
                    inclusive: isInclusive,
                    raw: cleanCondition
                };
            }
        }

        if (cleanCondition.includes('>')) {
            const isInclusive = cleanCondition.includes('≥');
            const parts = cleanCondition.split(/[>≥]/);
            const bound = parseFloat(parts[1] || parts[0]);

            if (cleanCondition.startsWith('x')) {
                // x > 5 or x ≥ 5
                return {
                    type: 'lower',
                    bound: bound,
                    inclusive: isInclusive,
                    raw: cleanCondition
                };
            } else {
                // 5 > x or 5 ≥ x
                return {
                    type: 'upper',
                    bound: bound,
                    inclusive: isInclusive,
                    raw: cleanCondition
                };
            }
        }

        return {
            type: 'unknown',
            raw: cleanCondition
        };
    }

    extractLinearCoefficients(expression) {
        // Extract m and b from expressions like "2x + 3" or "-x + 5" or "7"
        const cleaned = expression.replace(/\s+/g, '');

        // Constant function (no x)
        if (!cleaned.includes('x')) {
            return { m: 0, b: parseFloat(cleaned) };
        }

        // Extract coefficient of x
        let m = 1;
        const xMatch = cleaned.match(/([+-]?\d*\.?\d*)x/);
        if (xMatch && xMatch[1]) {
            const coeff = xMatch[1];
            if (coeff === '' || coeff === '+') m = 1;
            else if (coeff === '-') m = -1;
            else m = parseFloat(coeff);
        }

        // Extract constant term
        let b = 0;
        const parts = cleaned.split('x');
        if (parts.length > 1 && parts[1]) {
            const constantPart = parts[1].replace(/\s+/g, '');
            if (constantPart) {
                b = parseFloat(constantPart);
            }
        }

        return { m, b };
    }

    solvePiecewiseProblem_Internal(problem) {
        const solver = this.piecewiseTypes[problem.taskType]?.solver;
        if (!solver) {
            // Default to evaluation if no specific solver
            return this.evaluatePiecewiseGeneric(problem);
        }

        return solver(problem);
    }

    // PIECEWISE SOLVERS

    evaluateTwoPiece(problem) {
        const x = problem.evaluateAt;
        const pieces = problem.pieces;

        if (pieces.length !== 2) {
            return this.evaluatePiecewiseGeneric(problem);
        }

        // Check which piece applies
        let selectedPiece = null;
        let pieceIndex = -1;

        for (let i = 0; i < pieces.length; i++) {
            if (this.checkCondition(x, pieces[i].domain)) {
                selectedPiece = pieces[i];
                pieceIndex = i;
                break;
            }
        }

        if (!selectedPiece) {
            return {
                type: 'Evaluation Error',
                error: `x = ${x} does not satisfy any piece's condition`,
                pieces: pieces.map(p => p.condition)
            };
        }

        const result = this.evaluateLinear(x, selectedPiece.coefficients.m, selectedPiece.coefficients.b);

        return {
            type: 'Two-Piece Function Evaluation',
            input: x,
            selectedPiece: pieceIndex + 1,
            pieceCondition: selectedPiece.condition,
            pieceFormula: selectedPiece.expression,
            result: result,
            calculation: `${selectedPiece.coefficients.m}(${x}) + ${selectedPiece.coefficients.b} = ${result}`,
            category: 'evaluation'
        };
    }

    evaluateThreePiece(problem) {
        return this.evaluatePiecewiseGeneric(problem);
    }

    evaluatePiecewiseGeneric(problem) {
        const x = problem.evaluateAt;
        const pieces = problem.pieces;

        let selectedPiece = null;
        let pieceIndex = -1;

        for (let i = 0; i < pieces.length; i++) {
            if (this.checkCondition(x, pieces[i].domain)) {
                selectedPiece = pieces[i];
                pieceIndex = i;
                break;
            }
        }

        if (!selectedPiece) {
            return {
                type: 'Evaluation Error',
                error: `x = ${x} does not satisfy any piece's condition`,
                pieces: pieces.map(p => p.condition)
            };
        }

        const result = this.evaluateLinear(x, selectedPiece.coefficients.m, selectedPiece.coefficients.b);

        return {
            type: 'Piecewise Function Evaluation',
            numberOfPieces: pieces.length,
            input: x,
            selectedPiece: pieceIndex + 1,
            pieceCondition: selectedPiece.condition,
            pieceFormula: selectedPiece.expression,
            result: result,
            calculation: `${selectedPiece.coefficients.m}(${x}) + ${selectedPiece.coefficients.b} = ${result}`,
            category: 'evaluation'
        };
    }

    checkCondition(x, domain) {
        if (domain.type === 'compound') {
            const aboveLower = domain.lowerInclusive ? x >= domain.lowerBound : x > domain.lowerBound;
            const belowUpper = domain.upperInclusive ? x <= domain.upperBound : x < domain.upperBound;
            return aboveLower && belowUpper;
        }

        if (domain.type === 'upper') {
            return domain.inclusive ? x <= domain.bound : x < domain.bound;
        }

        if (domain.type === 'lower') {
            return domain.inclusive ? x >= domain.bound : x > domain.bound;
        }

        return false;
    }

    evaluateLinear(x, m, b) {
        return m * x + b;
    }

    graphPiecewise(problem) {
        const pieces = problem.pieces;

        const graphInfo = pieces.map((piece, index) => {
            const { m, b } = piece.coefficients;
            const domain = piece.domain;

            return {
                pieceNumber: index + 1,
                formula: piece.expression,
                slope: m,
                intercept: b,
                domain: domain,
                condition: piece.condition,
                endpoints: this.determineEndpoints(domain, m, b)
            };
        });

        return {
            type: 'Piecewise Function Graph',
            numberOfPieces: pieces.length,
            pieces: graphInfo,
            continuityPoints: this.identifyBoundaryPoints(pieces),
            category: 'graphing'
        };
    }

    determineEndpoints(domain, m, b) {
        const endpoints = [];

        if (domain.type === 'compound') {
            const leftY = this.evaluateLinear(domain.lowerBound, m, b);
            const rightY = this.evaluateLinear(domain.upperBound, m, b);
            endpoints.push({
                x: domain.lowerBound,
                y: leftY,
                type: domain.lowerInclusive ? 'closed' : 'open',
                side: 'left'
            });
            endpoints.push({
                x: domain.upperBound,
                y: rightY,
                type: domain.upperInclusive ? 'closed' : 'open',
                side: 'right'
            });
        } else if (domain.type === 'upper') {
            const y = this.evaluateLinear(domain.bound, m, b);
            endpoints.push({
                x: domain.bound,
                y: y,
                type: domain.inclusive ? 'closed' : 'open',
                side: 'right'
            });
        } else if (domain.type === 'lower') {
            const y = this.evaluateLinear(domain.bound, m, b);
            endpoints.push({
                x: domain.bound,
                y: y,
                type: domain.inclusive ? 'closed' : 'open',
                side: 'left'
            });
        }

        return endpoints;
    }

    identifyBoundaryPoints(pieces) {
        const boundaries = [];

        for (let i = 0; i < pieces.length - 1; i++) {
            const currentPiece = pieces[i];
            const nextPiece = pieces[i + 1];

            // Find common boundary
            let boundaryX = null;

            if (currentPiece.domain.type === 'upper' && nextPiece.domain.type === 'lower') {
                boundaryX = currentPiece.domain.bound;
            } else if (currentPiece.domain.type === 'compound') {
                boundaryX = currentPiece.domain.upperBound;
            }

            if (boundaryX !== null) {
                boundaries.push({
                    x: boundaryX,
                    leftPiece: i + 1,
                    rightPiece: i + 2,
                    leftFormula: currentPiece.expression,
                    rightFormula: nextPiece.expression
                });
            }
        }

        return boundaries;
    }

    checkContinuity(problem) {
        const pieces = problem.pieces;
        const boundaryPoints = this.identifyBoundaryPoints(pieces);

        const continuityResults = boundaryPoints.map(boundary => {
            const { x, leftPiece, rightPiece } = boundary;

            const leftPieceData = pieces[leftPiece - 1];
            const rightPieceData = pieces[rightPiece - 1];

            // Left-hand limit
            const leftLimit = this.evaluateLinear(x, leftPieceData.coefficients.m, leftPieceData.coefficients.b);

            // Right-hand limit
            const rightLimit = this.evaluateLinear(x, rightPieceData.coefficients.m, rightPieceData.coefficients.b);

            // Function value at x
            let functionValue = null;
            if (this.checkCondition(x, leftPieceData.domain)) {
                functionValue = leftLimit;
            } else if (this.checkCondition(x, rightPieceData.domain)) {
                functionValue = rightLimit;
            }

            const isContinuous = Math.abs(leftLimit - rightLimit) < 1e-10 && 
                                functionValue !== null &&
                                Math.abs(leftLimit - functionValue) < 1e-10;

            return {
                boundaryPoint: x,
                leftLimit: leftLimit,
                rightLimit: rightLimit,
                functionValue: functionValue,
                isContinuous: isContinuous,
                discontinuityType: !isContinuous ? (Math.abs(leftLimit - rightLimit) > 1e-10 ? 'jump' : 'removable') : null,
                jumpSize: !isContinuous ? Math.abs(leftLimit - rightLimit) : 0
            };
        });

        const overallContinuous = continuityResults.every(r => r.isContinuous);

        return {
            type: 'Continuity Analysis',
            numberOfPieces: pieces.length,
            boundaryPoints: continuityResults,
            overallContinuous: overallContinuous,
            category: 'continuity'
        };
    }

    findPiecewiseFormula(problem) {
        return {
            type: 'Find Piecewise Formula',
            approach: 'Use given points, slopes, or graph to determine each piece',
            steps: [
                'Identify domain intervals',
                'For each interval, find linear equation using points or slope',
                'Write complete piecewise function'
            ],
            category: 'formula_finding'
        };
    }

    solvePiecewiseEquation(problem) {
        const targetValue = problem.parameters.solveFor;
        const pieces = problem.pieces;

        const solutions = [];

        pieces.forEach((piece, index) => {
            const { m, b } = piece.coefficients;

            // Solve mx + b = targetValue
            if (Math.abs(m) < 1e-10) {
                // Constant function
                if (Math.abs(b - targetValue) < 1e-10) {
                    solutions.push({
                        fromPiece: index + 1,
                        solution: 'All x in this piece\'s domain',
                        valid: true,
                        note: 'Identity on this piece'
                    });
                }
            } else {
                const x = (targetValue - b) / m;

                // Check if x is in this piece's domain
                const isValid = this.checkCondition(x, piece.domain);

                solutions.push({
                    fromPiece: index + 1,
                    pieceCondition: piece.condition,
                    equation: `${m}x + ${b} = ${targetValue}`,
                    solution: x,
                    inDomain: isValid,
                    valid: isValid
                });
            }
        });

        const validSolutions = solutions.filter(s => s.valid);

        return {
            type: 'Solve Piecewise Equation',
            targetValue: targetValue,
            allAttempts: solutions,
            validSolutions: validSolutions.map(s => s.solution),
            numberOfSolutions: validSolutions.length,
            category: 'solving'
        };
    }

    findDomainRange(problem) {
        const pieces = problem.pieces;

        // Domain: union of all piece domains
        const domainDescription = pieces.map(p => p.condition).join(' ∪ ');

        // Range: need to evaluate endpoints and consider slopes
        const rangeValues = [];

        pieces.forEach(piece => {
            const endpoints = this.determineEndpoints(piece.domain, piece.coefficients.m, piece.coefficients.b);
            endpoints.forEach(ep => {
                if (ep.type === 'closed') {
                    rangeValues.push(ep.y);
                }
            });

            // If piece extends to infinity, note direction
            if (piece.domain.type === 'lower' && !piece.domain.upperBound) {
                if (piece.coefficients.m > 0) {
                    rangeValues.push(Infinity);
                } else if (piece.coefficients.m < 0) {
                    rangeValues.push(-Infinity);
                }
            }
            if (piece.domain.type === 'upper' && !piece.domain.lowerBound) {
                if (piece.coefficients.m > 0) {
                    rangeValues.push(-Infinity);
                } else if (piece.coefficients.m < 0) {
                    rangeValues.push(Infinity);
                }
            }
        });

        return {
            type: 'Domain and Range Analysis',
            domain: domainDescription,
            domainInterval: this.constructDomainInterval(pieces),
            range: this.constructRangeInterval(rangeValues, pieces),
            category: 'domain_range'
        };
    }

    constructDomainInterval(pieces) {
        // Determine overall domain
        let hasLowerBound = false;
        let hasUpperBound = false;
        let lowerBound = -Infinity;
        let upperBound = Infinity;

        pieces.forEach(piece => {
            if (piece.domain.type === 'compound') {
                hasLowerBound = true;
                hasUpperBound = true;
                lowerBound = Math.max(lowerBound, piece.domain.lowerBound);
                upperBound = Math.min(upperBound, piece.domain.upperBound);
            }
        });

        if (!hasLowerBound && !hasUpperBound) {
            return '(-∞, ∞)';
        } else if (hasLowerBound && !hasUpperBound) {
            return `[${lowerBound}, ∞)`;
        } else if (!hasLowerBound && hasUpperBound) {
            return `(-∞, ${upperBound}]`;
        } else {
            return `[${lowerBound}, ${upperBound}]`;
        }
    }

    constructRangeInterval(rangeValues, pieces) {
        const finiteValues = rangeValues.filter(v => isFinite(v));
        const hasInfinity = rangeValues.some(v => v === Infinity);
        const hasNegInfinity = rangeValues.some(v => v === -Infinity);

        if (finiteValues.length === 0) {
            return '(-∞, ∞)';
        }

        const min = Math.min(...finiteValues);
        const max = Math.max(...finiteValues);

        if (hasNegInfinity && hasInfinity) {
            return '(-∞, ∞)';
        } else if (hasNegInfinity) {
            return `(-∞, ${max}]`;
        } else if (hasInfinity) {
            return `[${min}, ∞)`;
        } else {
            return `[${min}, ${max}]`;
        }
    }

    convertAbsoluteValue(problem) {
        return {
            type: 'Convert Absolute Value to Piecewise',
            approach: 'Find critical point where expression inside |...| equals zero',
            steps: [
                'Solve expression = 0 to find critical point',
                'For x less than critical point: expression is negative, use -(expression)',
                'For x greater than or equal to critical point: expression is positive, use expression as is'
            ],
            category: 'conversion'
        };
    }

    analyzeStepFunction(problem) {
        return {
            type: 'Step Function Analysis',
            characteristics: [
                'Constant value on each interval',
                'Jumps at boundary points',
                'Graph consists of horizontal line segments'
            ],
            category: 'step_functions'
        };
    }

    solvePiecewiseWordProblem(problem) {
        return {
            type: 'Piecewise Word Problem',
            approach: 'Identify threshold values and corresponding rules for each region',
            steps: [
                'Identify independent variable and thresholds',
                'Determine formula for each tier/bracket',
                'Write as piecewise function',
                'Evaluate or solve as needed'
            ],
            category: 'word_problems'
        };
    }

    // STEP GENERATION

    generatePiecewiseSteps(problem, solution) {
        let baseSteps = this.generateBasePiecewiseSteps(problem, solution);

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
                this.addErrorPrevention(step, problem.taskType)
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

    generateBasePiecewiseSteps(problem, solution) {
        const category = solution.category || 'evaluation';

        switch(category) {
            case 'evaluation':
                return this.generateEvaluationSteps(problem, solution);
            case 'graphing':
                return this.generateGraphingSteps(problem, solution);
            case 'continuity':
                return this.generateContinuitySteps(problem, solution);
            case 'solving':
                return this.generateSolvingSteps(problem, solution);
            default:
                return this.generateGenericPiecewiseSteps(problem, solution);
        }
    }

    generateEvaluationSteps(problem, solution) {
        const steps = [];
        const x = problem.evaluateAt;

        // Step 1: Given problem
        steps.push({
            stepNumber: 1,
            step: 'Given piecewise function and input',
            description: `Evaluate f(${x}) for the piecewise function`,
            piecewiseFunction: this.formatPiecewiseFunction(problem.pieces),
            input: x,
            reasoning: 'We need to determine which piece applies to this input',
            goalStatement: 'Find which condition x satisfies, then use that piece'
        });

        // Step 2: Check conditions
        const conditionChecks = problem.pieces.map((piece, index) => ({
            pieceNumber: index + 1,
            condition: piece.condition,
            check: this.checkCondition(x, piece.domain),
            explanation: this.explainConditionCheck(x, piece.domain)
        }));

        steps.push({
            stepNumber: 2,
            step: 'Check which condition applies',
            description: `Determine which piece's condition is satisfied by x = ${x}`,
            conditionChecks: conditionChecks,
            reasoning: 'Only one piece should apply to any given x-value',
            selectedPiece: solution.selectedPiece,
            algebraicRule: 'Conditional evaluation'
        });

        // Step 3: Select and state piece
        steps.push({
            stepNumber: 3,
            step: 'Select the appropriate piece',
            description: `Use piece ${solution.selectedPiece}: ${solution.pieceFormula}`,
            condition: solution.pieceCondition,
            formula: solution.pieceFormula,
            reasoning: `This is the piece where ${solution.pieceCondition}`,
            visualHint: 'Only use the formula from the piece whose condition is true'
        });

        // Step 4: Substitute and evaluate
        steps.push({
            stepNumber: 4,
            step: 'Substitute and calculate',
            description: `Substitute x = ${x} into ${solution.pieceFormula}`,
            beforeExpression: solution.pieceFormula,
            substitution: solution.calculation,
            afterExpression: `f(${x}) = ${solution.result}`,
            reasoning: 'Perform the arithmetic to find the output value'
        });

        // Step 5: Final answer
        steps.push({
            stepNumber: 5,
            step: 'Final answer',
            description: 'The function value has been determined',
            expression: `f(${x}) = ${solution.result}`,
            finalAnswer: true,
            reasoning: 'This is the output of the piecewise function for the given input'
        });

        return steps;
    }

    generateGraphingSteps(problem, solution) {
        const steps = [];

        // Step 1: Given function
        steps.push({
            stepNumber: 1,
            step: 'Given piecewise function',
            description: 'Graph the piecewise function',
            piecewiseFunction: this.formatPiecewiseFunction(problem.pieces),
            numberOfPieces: solution.numberOfPieces,
            reasoning: 'We will graph each piece separately on its domain',
            goalStatement: 'Create a complete graph showing all pieces with proper endpoints'
        });

        // Step 2-N: Graph each piece
        solution.pieces.forEach((pieceInfo, index) => {
            steps.push({
                stepNumber: index + 2,
                step: `Graph piece ${index + 1}`,
                description: `Graph ${pieceInfo.formula} on its domain`,
                formula: pieceInfo.formula,
                condition: pieceInfo.condition,
                slope: pieceInfo.slope,
                yIntercept: pieceInfo.intercept,
                domain: pieceInfo.domain,
                endpoints: pieceInfo.endpoints,
                reasoning: `This piece is a line with slope ${pieceInfo.slope} and y-intercept ${pieceInfo.intercept}`,
                visualHint: 'Graph the line, then restrict to the domain interval',
                endpointNotation: this.explainEndpointNotation(pieceInfo.endpoints)
            });
        });

        // Final step: Complete graph
        steps.push({
            stepNumber: solution.numberOfPieces + 2,
            step: 'Complete graph',
            description: 'All pieces have been graphed',
            numberOfPieces: solution.numberOfPieces,
            continuityPoints: solution.continuityPoints,
            finalAnswer: true,
            reasoning: 'The complete piecewise function graph shows all pieces on their respective domains',
            checkContinuity: 'Examine boundary points to determine if function is continuous'
        });

        return steps;
    }

    generateContinuitySteps(problem, solution) {
        const steps = [];

        // Step 1: Given function
        steps.push({
            stepNumber: 1,
            step: 'Given piecewise function',
            description: 'Check continuity of the piecewise function',
            piecewiseFunction: this.formatPiecewiseFunction(problem.pieces),
            reasoning: 'We need to check continuity at all boundary points',
            goalStatement: 'Determine if function is continuous or identify discontinuities'
        });

        // Step 2: Identify boundary points
        steps.push({
            stepNumber: 2,
            step: 'Identify boundary points',
            description: 'Find where pieces meet',
            boundaryPoints: solution.boundaryPoints.map(bp => bp.boundaryPoint),
            reasoning: 'Continuity must be checked at points where the formula changes',
            visualHint: 'These are the x-values where conditions transition'
        });

        // Steps 3-N: Check each boundary
        solution.boundaryPoints.forEach((boundary, index) => {
            const stepNum = index + 3;

            // Check left limit
            steps.push({
                stepNumber: stepNum,
                step: `Check continuity at x = ${boundary.boundaryPoint} - Part 1`,
                description: 'Calculate left-hand limit',
                boundaryPoint: boundary.boundaryPoint,
                leftLimit: boundary.leftLimit,
                calculation: `lim[x→${boundary.boundaryPoint}⁻] f(x) = ${boundary.leftLimit}`,
                reasoning: 'Use the piece for x approaching from the left',
                algebraicRule: 'Left-hand limit'
            });

            steps.push({
                stepNumber: stepNum + 0.5,
                step: `Check continuity at x = ${boundary.boundaryPoint} - Part 2`,
                description: 'Calculate right-hand limit',
                boundaryPoint: boundary.boundaryPoint,
                rightLimit: boundary.rightLimit,
                calculation: `lim[x→${boundary.boundaryPoint}⁺] f(x) = ${boundary.rightLimit}`,
                reasoning: 'Use the piece for x approaching from the right',
                algebraicRule: 'Right-hand limit'
            });

            steps.push({
                stepNumber: stepNum + 1,
                step: `Check continuity at x = ${boundary.boundaryPoint} - Part 3`,
                description: 'Determine function value',
                boundaryPoint: boundary.boundaryPoint,
                functionValue: boundary.functionValue,
                calculation: `f(${boundary.boundaryPoint}) = ${boundary.functionValue}`,
                reasoning: 'Check which piece includes x = ' + boundary.boundaryPoint
            });

            steps.push({
                stepNumber: stepNum + 1.5,
                step: `Continuity conclusion at x = ${boundary.boundaryPoint}`,
                description: 'Compare limits and function value',
                leftLimit: boundary.leftLimit,
                rightLimit: boundary.rightLimit,
                functionValue: boundary.functionValue,
                isContinuous: boundary.isContinuous,
                conclusion: boundary.isContinuous ? 
                    `Continuous at x = ${boundary.boundaryPoint}` : 
                    `Discontinuous at x = ${boundary.boundaryPoint} (${boundary.discontinuityType})`,
                discontinuityType: boundary.discontinuityType,
                jumpSize: boundary.jumpSize,
                reasoning: boundary.isContinuous ?
                    'All three values are equal, so the function is continuous' :
                    `${boundary.discontinuityType} discontinuity with jump of ${boundary.jumpSize}`
            });
        });

        // Final step: Overall conclusion
        steps.push({
            stepNumber: solution.boundaryPoints.length * 4 + 3,
            step: 'Overall continuity conclusion',
            description: 'Determine overall continuity',
            overallContinuous: solution.overallContinuous,
            conclusion: solution.overallContinuous ?
                'The function is continuous everywhere' :
                'The function has one or more discontinuities',
            discontinuities: solution.boundaryPoints.filter(bp => !bp.isContinuous),
            finalAnswer: true
        });

        return steps;
    }

    generateSolvingSteps(problem, solution) {
        const steps = [];

        // Step 1: Given equation
        steps.push({
            stepNumber: 1,
            step: 'Given equation',
            description: `Solve f(x) = ${solution.targetValue}`,
            piecewiseFunction: this.formatPiecewiseFunction(problem.pieces),
            targetValue: solution.targetValue,
            reasoning: 'We need to solve this equation on each piece separately',
            goalStatement: 'Find all x-values where f(x) equals the target value'
        });

        // Step 2-N: Solve on each piece
        solution.allAttempts.forEach((attempt, index) => {
            steps.push({
                stepNumber: index + 2,
                step: `Solve on piece ${attempt.fromPiece}`,
                description: `Set piece ${attempt.fromPiece}'s formula equal to ${solution.targetValue}`,
                pieceCondition: attempt.pieceCondition,
                equation: attempt.equation,
                solution: attempt.solution,
                reasoning: 'Solve the linear equation for this piece',
                algebraicRule: 'Linear equation solving'
            });

            steps.push({
                stepNumber: index + 2.5,
                step: `Validate solution from piece ${attempt.fromPiece}`,
                description: 'Check if solution is in this piece\'s domain',
                solution: attempt.solution,
                pieceCondition: attempt.pieceCondition,
                inDomain: attempt.inDomain,
                valid: attempt.valid,
                conclusion: attempt.valid ? 
                    `x = ${attempt.solution} is a VALID solution` :
                    `x = ${attempt.solution} is NOT valid (outside domain)`,
                reasoning: 'Solution must satisfy the piece\'s condition',
                warningFlag: !attempt.valid ? 'This solution is rejected' : null
            });
        });

        // Final step: Collect solutions
        steps.push({
            stepNumber: solution.allAttempts.length * 2 + 2,
            step: 'Final solution(s)',
            description: 'Collect all valid solutions',
            validSolutions: solution.validSolutions,
            numberOfSolutions: solution.numberOfSolutions,
            finalAnswer: true,
            reasoning: solution.numberOfSolutions === 0 ?
                'No valid solutions exist' :
                solution.numberOfSolutions === 1 ?
                'One valid solution found' :
                'Multiple valid solutions found'
        });

        return steps;
    }

    generateGenericPiecewiseSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Piecewise problem',
            description: 'Solve the piecewise function problem',
            piecewiseFunction: this.formatPiecewiseFunction(problem.pieces),
            solution: solution,
            reasoning: 'Apply appropriate piecewise technique'
        }];
    }

    // HELPER METHODS FOR STEPS

    formatPiecewiseFunction(pieces) {
        const formattedPieces = pieces.map(piece => 
            `${piece.expression} if ${piece.condition}`
        );
        return `f(x) = { ${formattedPieces.join(', ')} }`;
    }

    explainConditionCheck(x, domain) {
        if (domain.type === 'upper') {
            const symbol = domain.inclusive ? '≤' : '<';
            const result = this.checkCondition(x, domain);
            return `${x} ${symbol} ${domain.bound} is ${result ? 'TRUE' : 'FALSE'}`;
        } else if (domain.type === 'lower') {
            const symbol = domain.inclusive ? '≥' : '>';
            const result = this.checkCondition(x, domain);
            return `${x} ${symbol} ${domain.bound} is ${result ? 'TRUE' : 'FALSE'}`;
        } else if (domain.type === 'compound') {
            const result = this.checkCondition(x, domain);
            return `${domain.lowerBound} ${domain.lowerInclusive ? '≤' : '<'} ${x} ${domain.upperInclusive ? '≤' : '<'} ${domain.upperBound} is ${result ? 'TRUE' : 'FALSE'}`;
        }
        return 'Unknown condition';
    }

    explainEndpointNotation(endpoints) {
        return endpoints.map(ep => {
            const circleType = ep.type === 'closed' ? 'closed (●)' : 'open (○)';
            return `At (${ep.x}, ${ep.y}): use ${circleType} circle`;
        });
    }

    // ENHANCED EXPLANATION METHODS (reuse from linear class with piecewise adaptations)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationPiecewise(step, problem),
                procedural: this.getProceduralExplanationPiecewise(step),
                visual: this.getVisualExplanationPiecewise(step, problem),
                algebraic: this.getAlgebraicExplanationPiecewise(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesPiecewise(step, problem.taskType),
                keyVocabulary: this.identifyKeyVocabularyPiecewise(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsPiecewise(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionPiecewise(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionPiecewise(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationPiecewise(step, problem) {
        const conceptualExplanations = {
            'Given piecewise function and input': 'A piecewise function uses different formulas for different parts of its domain. We must identify which part our input belongs to.',
            'Check which condition applies': 'Each piece has a condition that determines when it applies. We check these conditions to find the right piece.',
            'Select the appropriate piece': 'Once we know which condition is true, we use only that piece\'s formula.',
            'Substitute and calculate': 'With the correct formula selected, we substitute the input and compute the output.',
            'Graph piece': 'Each piece is graphed as a line segment, restricted to its domain interval.',
            'Check continuity': 'Continuity means no breaks or jumps. At boundaries, we check if the function connects smoothly.',
            'Solve on piece': 'We solve the equation using each piece separately, then verify the solution is valid for that piece\'s domain.'
        };

        const stepKey = step.step || '';
        for (const [key, explanation] of Object.entries(conceptualExplanations)) {
            if (stepKey.includes(key) || stepKey.startsWith(key)) {
                return explanation;
            }
        }

        return 'This step helps us work with the piecewise nature of the function.';
    }

    getProceduralExplanationPiecewise(step) {
        if (step.step && step.step.includes('Check which condition')) {
            return `1. Take the input value
2. Test it against each piece's condition
3. Identify which condition is true
4. Note which piece to use`;
        } else if (step.step && step.step.includes('Graph piece')) {
            return `1. Identify the piece's formula (y = mx + b)
2. Determine the domain (x-range) for this piece
3. Graph the line on that interval only
4. Mark endpoints with correct circle type`;
        } else if (step.step && step.step.includes('continuity')) {
            return `1. Find the boundary point
2. Calculate left-hand limit
3. Calculate right-hand limit  
4. Find function value at the point
5. Compare all three`;
        }

        return 'Follow standard procedure for this type of step.';
    }

    getVisualExplanationPiecewise(step, problem) {
        const visualExplanations = {
            'evaluation': 'Imagine a number line divided into regions. Find which region contains your input, then use that region\'s rule.',
            'graphing': 'Picture multiple line segments, each valid only on its portion of the x-axis. Mark where they start and stop.',
            'continuity': 'Visualize approaching a boundary from both sides. Do the pieces meet, or is there a gap/jump?',
            'solving': 'Think of testing each piece separately to see which ones give valid solutions.'
        };

        const category = problem.taskType || 'evaluation';
        return visualExplanations[category] || 'Visualize the piecewise structure with different regions.';
    }

    getAlgebraicExplanationPiecewise(step) {
        const algebraicRules = {
            'Check which condition applies': 'Logical evaluation of inequality conditions',
            'Substitute and calculate': 'Function evaluation: f(a) = ma + b',
            'Check continuity': 'Continuity condition: lim[x→a⁻] f(x) = f(a) = lim[x→a⁺] f(x)',
            'Graph piece': 'Linear function graphing on restricted domain',
            'Solve on piece': 'Solving linear equation with domain constraint'
        };

        const stepKey = step.step || '';
        for (const [key, rule] of Object.entries(algebraicRules)) {
            if (stepKey.includes(key)) {
                return rule;
            }
        }

        return 'Apply piecewise function principles.';
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
                'piecewise function': 'function with different rules',
                'condition': 'rule about when to use this piece',
                'domain': 'x-values where this applies',
                'boundary point': 'where pieces meet',
                'continuous': 'no jumps or gaps',
                'discontinuous': 'has a jump or gap',
                'left-hand limit': 'value from left side',
                'right-hand limit': 'value from right side'
            },
            intermediate: {
                'piecewise function': 'piecewise function',
                'condition': 'condition',
                'domain': 'domain',
                'boundary point': 'boundary point',
                'continuous': 'continuous',
                'discontinuous': 'discontinuous',
                'left-hand limit': 'left-hand limit',
                'right-hand limit': 'right-hand limit'
            },
            ELI5: {
                'piecewise function': 'math problem with different rules for different situations',
                'condition': 'the "if" part that tells you which rule to use',
                'domain': 'which x numbers this rule works for',
                'boundary point': 'the spot where the rules change',
                'continuous': 'smooth with no gaps - you can draw it without lifting your pencil',
                'discontinuous': 'has a jump or break - you have to lift your pencil',
                'left-hand limit': 'what happens when you get close from the left',
                'right-hand limit': 'what happens when you get close from the right',
                'evaluate': 'figure out the answer for a specific number'
            },
            detailed: {
                'piecewise function': 'piecewise-defined function',
                'condition': 'domain condition',
                'domain': 'domain interval',
                'boundary point': 'boundary/transition point',
                'continuous': 'continuous (satisfying limit definition)',
                'discontinuous': 'discontinuous (failing continuity condition)',
                'left-hand limit': 'left-hand limit (lim[x→a⁻])',
                'right-hand limit': 'right-hand limit (lim[x→a⁺])'
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

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationPiecewise(step, problem),
                analogy: this.findRelevantAnalogyPiecewise(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestVisualizationPiecewise(step)
            }
        }));
    }

    generateELI5ExplanationPiecewise(step, problem) {
        const ELI5Explanations = {
            'Given piecewise function and input': "We have a special math problem where the rules change! It's like having different instructions for different situations.",
            'Check which condition applies': "First, we need to figure out which set of instructions to follow. It's like checking if you're in the hallway (walk) or the gym (run).",
            'Select the appropriate piece': "Now we know which instructions to use! We pick just ONE set of instructions that matches our situation.",
            'Substitute and calculate': "We plug in our number and do the math, just like following a recipe!",
            'Graph piece': "We're drawing a line, but ONLY on part of the graph - like coloring inside the lines!",
            'Check continuity': "We're checking if the pieces connect smoothly, or if there's a jump. Can you walk from one piece to the next without jumping?"
        };

        const stepKey = step.step || '';
        for (const [key, explanation] of Object.entries(ELI5Explanations)) {
            if (stepKey.includes(key)) {
                return explanation;
            }
        }

        return "We're taking another step to solve our piecewise puzzle!";
    }

    findRelevantAnalogyPiecewise(step, problem) {
        if (step.step && step.step.includes('condition')) {
            return this.analogies.piecewise_concept.ELI5;
        } else if (step.step && step.step.includes('Graph')) {
            return this.analogies.graphing.ELI5;
        } else if (step.step && step.step.includes('continuity')) {
            return this.analogies.continuity.ELI5;
        }

        return "Think of this like choosing the right tool for the job - you need to pick the right piece for your x-value!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'piecewise function': 'function with different rules',
            'condition': 'when-rule',
            'boundary': 'meeting point',
            'domain': 'allowed x-values',
            'range': 'possible answers',
            'continuous': 'smooth (no jumps)',
            'discontinuous': 'has jumps',
            'evaluate': 'find the answer',
            'substitute': 'plug in',
            'inequality': 'less than or greater than statement',
            'left-hand limit': 'approaching from left',
            'right-hand limit': 'approaching from right'
        };

        let simple = description || '';
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualizationPiecewise(step) {
        const visualizations = {
            'Check which condition applies': 'Draw a number line and mark regions where each condition is true',
            'Select the appropriate piece': 'Circle or highlight the piece you\'re using',
            'Graph piece': 'Draw the line segment with endpoints marked (open or closed circles)',
            'Check continuity': 'Draw both pieces meeting at boundary - do they connect or jump?',
            'Solve on piece': 'Show the equation and solution, then check if it falls in the allowed region'
        };

        const stepKey = step.step || '';
        for (const [key, viz] of Object.entries(visualizations)) {
            if (stepKey.includes(key)) {
                return viz;
            }
        }

        return 'Draw a picture to help understand this step';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgePiecewise(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgePiecewise(currentStep, nextStep) {
        return {
            currentState: `We have: ${currentStep.description}`,
            nextGoal: `Next: ${nextStep.description}`,
            why: `This builds toward our goal of solving the piecewise problem`,
            howItHelps: `This prepares us for: ${nextStep.step}`
        };
    }

    addErrorPrevention(step, problemType) {
        const category = problemType || 'evaluation';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsPiecewise(step, category),
                checkPoints: this.generateCheckPointsPiecewise(step),
                warningFlags: this.identifyWarningFlagsPiecewise(step, category)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionPiecewise(step),
                expectedResult: this.describeExpectedResultPiecewise(step),
                troubleshooting: this.generateTroubleshootingTipsPiecewise(step)
            }
        };
    }

    generatePreventionTipsPiecewise(step, category) {
        const tips = {
            'Check which condition applies': [
                'Test each condition carefully with the given x-value',
                'Pay attention to < vs ≤',
                'Only ONE condition should be true'
            ],
            'Graph piece': [
                'Restrict graph to the piece\'s domain only',
                'Use correct circle type at endpoints',
                'Don\'t extend the line beyond its domain'
            ],
            'Check continuity': [
                'Calculate all three values separately',
                'Use correct piece for each limit',
                'Don\'t assume continuity'
            ],
            'Validate solution': [
                'Always check if solution satisfies the piece\'s condition',
                'A valid algebraic solution may not be in the domain',
                'Check ALL pieces for solutions'
            ]
        };

        const stepKey = step.step || '';
        for (const [key, tipList] of Object.entries(tips)) {
            if (stepKey.includes(key)) {
                return tipList;
            }
        }

        return ['Work carefully', 'Check your work'];
    }

    generateCheckPointsPiecewise(step) {
        return [
            'Did I use the correct piece?',
            'Did I check the condition carefully?',
            'Are my calculations correct?',
            'Does the answer make sense for this piece?'
        ];
    }

    identifyWarningFlagsPiecewise(step, category) {
        const warnings = {
            evaluation: step.step && step.step.includes('condition') ?
                ['Make sure you\'re checking the inequality correctly', 'Only use ONE piece'] : [],
            graphing: step.step && step.step.includes('Graph') ?
                ['Don\'t graph beyond the domain', 'Check circle types at endpoints'] : [],
            continuity: step.step && step.step.includes('continuity') ?
                ['Calculate left and right limits separately', 'Don\'t forget function value'] : [],
            solving: step.step && step.step.includes('Validate') ?
                ['Solution must be in the piece\'s domain', 'Check all pieces'] : []
        };

        return warnings[category] || [];
    }

    generateSelfCheckQuestionPiecewise(step) {
        const questions = {
            'Check which condition applies': 'Did I correctly determine which condition is TRUE for this x-value?',
            'Select the appropriate piece': 'Am I using the piece whose condition was satisfied?',
            'Substitute and calculate': 'Did I substitute correctly and perform the arithmetic accurately?',
            'Graph piece': 'Is my graph restricted to the correct domain with proper endpoints?',
            'Check continuity': 'Did I calculate left limit, f(a), and right limit separately?',
            'Validate solution': 'Does my solution actually satisfy this piece\'s condition?'
        };

        const stepKey = step.step || '';
        for (const [key, question] of Object.entries(questions)) {
            if (stepKey.includes(key)) {
                return question;
            }
        }

        return 'Does this step make sense and move me toward the solution?';
    }

    describeExpectedResultPiecewise(step) {
        const expectations = {
            'Check which condition applies': 'Exactly ONE condition should be true',
            'Select the appropriate piece': 'One piece identified for use',
            'Substitute and calculate': 'A numerical answer',
            'Graph piece': 'A line segment with marked endpoints',
            'Check continuity': 'Comparison showing continuous or discontinuous',
            'Validate solution': 'Confirmation that solution is in domain'
        };

        const stepKey = step.step || '';
        for (const [key, expectation] of Object.entries(expectations)) {
            if (stepKey.includes(key)) {
                return expectation;
            }
        }

        return 'Progress toward solving the piecewise problem';
    }

    generateTroubleshootingTipsPiecewise(step) {
        return [
            'Re-read the piece\'s condition carefully',
            'Double-check inequality symbols (< vs ≤)',
            'Verify you\'re using the correct piece',
            'Check arithmetic step-by-step',
            'Draw a picture if helpful'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsPiecewise(step, problem),
                subSteps: this.breakIntoSubStepsPiecewise(step),
                hints: this.generateProgressiveHintsPiecewise(step, problem),
                practiceVariation: this.generatePracticeVariationPiecewise(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessPiecewise(step),
                decisionPoints: this.identifyDecisionPointsPiecewise(step),
                alternativeApproaches: this.suggestAlternativeMethodsPiecewise(step, problem)
            }
        }));
    }

    generateGuidingQuestionsPiecewise(step, problem) {
        const questions = {
            'Check which condition applies': [
                'What is the x-value I need to test?',
                'What are the conditions for each piece?',
                'Which condition does this x-value satisfy?'
            ],
            'Graph piece': [
                'What is the formula for this piece?',
                'What is the domain (x-range) for this piece?',
                'Should the endpoints be open or closed circles?'
            ],
            'Check continuity': [
                'What is the boundary point?',
                'What piece applies just to the left? Just to the right?',
                'Do the limits and function value all match?'
            ],
            'Validate solution': [
                'What is the solution I found?',
                'What is this piece\'s condition?',
                'Does the solution satisfy the condition?'
            ]
        };

        const stepKey = step.step || '';
        for (const [key, questionList] of Object.entries(questions)) {
            if (stepKey.includes(key)) {
                return questionList;
            }
        }

        return ['What is the goal of this step?', 'How does this help solve the problem?'];
    }

    breakIntoSubStepsPiecewise(step) {
        if (step.step && step.step.includes('Check which condition')) {
            return [
                'Write down the x-value',
                'List all piece conditions',
                'Test x against each condition',
                'Identify which is true',
                'Note which piece to use'
            ];
        } else if (step.step && step.step.includes('Graph piece')) {
            return [
                'Identify formula (y = mx + b)',
                'Identify domain interval',
                'Plot a few points on the line',
                'Draw line segment only on domain',
                'Mark endpoints with correct circles'
            ];
        } else if (step.step && step.step.includes('continuity')) {
            return [
                'Identify boundary point a',
                'Find piece for x < a, calculate lim[x→a⁻]',
                'Find piece for x > a, calculate lim[x→a⁺]',
                'Determine which piece includes x = a, find f(a)',
                'Compare all three values'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generateProgressiveHintsPiecewise(step, problem) {
        const category = problem.taskType || 'evaluation';
        const hintSet = this.hints[category] || this.hints.evaluation;

        return {
            level1: hintSet.level1 || 'Think about what you need to determine.',
            level2: hintSet.level2 || 'Consider the structure of the piecewise function.',
            level3: hintSet.level3 || 'Apply the appropriate technique.',
            level4: hintSet.level4 || 'Complete the calculation.'
        };
    }

    generatePracticeVariationPiecewise(step, problem) {
        return {
            similarProblem: 'Try a similar piecewise problem with different numbers',
            practiceHint: 'Start with two-piece functions before moving to three or more pieces',
            extension: 'Once comfortable, try problems with fractions, decimals, or more complex conditions'
        };
    }

    explainThinkingProcessPiecewise(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to find?',
            strategy: 'Which piece(s) do I need to work with?',
            execute: 'How do I perform the required operations?',
            verify: 'Does my result make sense for a piecewise function?'
        };
    }

    identifyDecisionPointsPiecewise(step) {
        return [
            'Which piece applies to this x-value?',
            'Should I use an open or closed circle?',
            'Is the solution in the piece\'s domain?',
            'Do I need to check continuity?'
        ];
    }

    suggestAlternativeMethodsPiecewise(step, problem) {
        const alternatives = {
            'evaluation': [
                'Could graph the function and read value from graph',
                'Could test each condition systematically'
            ],
            'graphing': [
                'Could graph entire lines first, then restrict',
                'Could plot points on each piece'
            ],
            'continuity': [
                'Could use table format for organization',
                'Could graph and visually inspect'
            ]
        };

        const category = problem.taskType || 'evaluation';
        return alternatives[category] || ['The chosen method is appropriate'];
    }

    identifyPrerequisitesPiecewise(step, taskType) {
        const category = taskType || 'evaluation';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Linear function evaluation', 'Understanding inequalities'];
    }

    identifyKeyVocabularyPiecewise(step) {
        const vocabulary = {
            'piecewise function': ['piecewise', 'condition', 'piece', 'domain'],
            'condition': ['inequality', 'less than', 'greater than', 'less than or equal', 'greater than or equal'],
            'graph': ['endpoint', 'open circle', 'closed circle', 'line segment'],
            'continuity': ['continuous', 'discontinuous', 'left-hand limit', 'right-hand limit', 'jump'],
            'solve': ['valid', 'domain', 'solution']
        };

        const stepKey = step.step || '';
        for (const [key, terms] of Object.entries(vocabulary)) {
            if (stepKey.toLowerCase().includes(key)) {
                return terms;
            }
        }

        return ['piecewise function', 'condition', 'piece'];
    }

    generateThinkingPromptsPiecewise(step) {
        return {
            before: 'Before evaluating/graphing/solving, which piece(s) do I need?',
            during: 'Am I using the correct piece for this x-value/region?',
            after: 'Does my answer make sense given the piecewise structure?'
        };
    }

    findRealWorldConnectionPiecewise(step, problem) {
        const connections = {
            'evaluation': 'Like figuring out your tax: first find which bracket you\'re in, then calculate using that rate.',
            'graphing': 'Like showing different speed limits in different zones on a map.',
            'continuity': 'Like checking if a hiking trail has gaps or connects smoothly.',
            'solving': 'Like finding what income puts you in a specific tax bracket.'
        };

        const category = problem.taskType || 'evaluation';
        return connections[category] || 'Piecewise functions model real situations with different rules in different ranges.';
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the solution process`,
            progression: 'We are systematically working through the piecewise structure',
            relationship: 'Each step handles one aspect of the piecewise function'
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving the piecewise problem`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    // GRAPH GENERATION

    generatePiecewiseGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { taskType } = this.currentProblem;

        if (taskType === 'graph_piecewise' || taskType.includes('graph')) {
            this.graphData = this.generatePiecewiseGraph(this.currentProblem, this.currentSolution);
        } else if (this.currentSolution.category === 'graphing') {
            this.graphData = this.generatePiecewiseGraph(this.currentProblem, this.currentSolution);
        }
    }

    generatePiecewiseGraph(problem, solution) {
        const pieces = problem.pieces;

        const graphPieces = pieces.map((piece, index) => {
            const { m, b } = piece.coefficients;
            const domain = piece.domain;

            // Determine x-range for this piece
            let xMin, xMax;

            if (domain.type === 'compound') {
                xMin = domain.lowerBound;
                xMax = domain.upperBound;
            } else if (domain.type === 'upper') {
                xMax = domain.bound;
                xMin = xMax - 5; // Arbitrary range for graphing
            } else if (domain.type === 'lower') {
                xMin = domain.bound;
                xMax = xMin + 5; // Arbitrary range for graphing
            }

            // Calculate y-values at endpoints
            const yMin = m * xMin + b;
            const yMax = m * xMax + b;

            return {
                pieceNumber: index + 1,
                formula: piece.expression,
                domain: domain,
                xRange: [xMin, xMax],
                yRange: [yMin, yMax],
                slope: m,
                yIntercept: b,
                endpoints: this.determineEndpoints(domain, m, b),
                color: this.getPieceColor(index)
            };
        });

        return {
            type: 'piecewise_linear_graph',
            numberOfPieces: pieces.length,
            pieces: graphPieces,
            description: 'Graph of piecewise linear function showing all pieces'
        };
    }

    getPieceColor(index) {
        const colors = [
            this.colors.pieceColor1,
            this.colors.pieceColor2,
            this.colors.pieceColor3
        ];
        return colors[index % colors.length];
    }

    // WORKBOOK GENERATION

    generatePiecewiseWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createPiecewiseLessonSection(),
            this.createEnhancedStepsSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createGraphSection(),
            this.createContinuitySection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Piecewise Linear Functions Mathematical Workbook',
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
            ['Problem Type', this.piecewiseTypes[this.currentProblem.taskType]?.name || this.currentProblem.taskType],
            ['Category', this.piecewiseTypes[this.currentProblem.taskType]?.category || 'piecewise'],
            ['Number of Pieces', this.currentProblem.pieces.length],
            ['', ''],
            ['Piecewise Function', this.formatPiecewiseFunction(this.currentProblem.pieces)]
        ];

        // Add task-specific info
        if (this.currentProblem.evaluateAt !== undefined) {
            problemData.push(['Evaluate at', `x = ${this.currentProblem.evaluateAt}`]);
        }

        // Add piece details
        problemData.push(['', '']);
        problemData.push(['Piece Details', '']);

        this.currentProblem.pieces.forEach((piece, index) => {
            problemData.push([`Piece ${index + 1}`, '']);
            problemData.push(['  Formula', piece.expression]);
            problemData.push(['  Condition', piece.condition]);
            problemData.push(['  Slope (m)', piece.coefficients.m]);
            problemData.push(['  y-intercept (b)', piece.coefficients.b]);
        });

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.piecewiseTypes[this.currentProblem.taskType]?.category || 'evaluation';
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

    createPiecewiseLessonSection() {
        const category = this.piecewiseTypes[this.currentProblem.taskType]?.category || 'piecewise_basics';
        
        let lessonKey = 'piecewise_basics';
        if (category === 'evaluation') lessonKey = 'evaluating_piecewise';
        else if (category === 'graphing') lessonKey = 'graphing_piecewise';
        else if (category === 'continuity') lessonKey = 'continuity_analysis';
        else if (category === 'solving') lessonKey = 'solving_equations';

        const lesson = this.lessons[lessonKey];
        if (!lesson) return null;

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach(concept => {
            lessonData.push(['  •', concept]);
        });

        lessonData.push(['', '']);
        lessonData.push(['Theory', lesson.theory]);

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: lessonData
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
                stepsData.push(['Connection', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.piecewiseFunction) {
                stepsData.push(['Function', step.piecewiseFunction]);
            }

            if (step.input !== undefined) {
                stepsData.push(['Input', `x = ${step.input}`]);
            }

            if (step.conditionChecks) {
                stepsData.push(['Condition Checks', '']);
                step.conditionChecks.forEach(check => {
                    stepsData.push([`  Piece ${check.pieceNumber}`, `${check.condition}: ${check.check ? 'TRUE ✓' : 'FALSE'}`]);
                });
            }

            if (step.selectedPiece) {
                stepsData.push(['Selected Piece', step.selectedPiece]);
            }

            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }

            if (step.substitution) {
                stepsData.push(['Substitution', step.substitution]);
            }

            if (step.expression) {
                stepsData.push(['Result', step.expression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
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
            }

            // Self-check
            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            stepsData.push(['', '']); // Spacing
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

        if (this.currentSolution.result !== undefined) {
            solutionData.push(['Result', this.currentSolution.result]);
        }

        if (this.currentSolution.validSolutions) {
            solutionData.push(['Solutions', this.currentSolution.validSolutions.join(', ')]);
            solutionData.push(['Number of Solutions', this.currentSolution.numberOfSolutions]);
        }

        if (this.currentSolution.overallContinuous !== undefined) {
            solutionData.push(['Continuous?', this.currentSolution.overallContinuous ? 'Yes' : 'No']);
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
            ['Solution Type', this.currentSolution.type],
            ['Category', this.currentSolution.category],
            ['Number of Pieces', this.currentProblem.pieces.length]
        ];

        if (this.currentSolution.approach) {
            analysisData.push(['Approach', this.currentSolution.approach]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution) return null;
        if (this.currentSolution.category !== 'evaluation') return null;

        const x = this.currentProblem.evaluateAt;
        const result = this.currentSolution.result;
        const piece = this.currentProblem.pieces[this.currentSolution.selectedPiece - 1];

        const verificationData = [
            ['Verification Method', 'Direct Substitution'],
            ['Input', `x = ${x}`],
            ['Selected Piece', `Piece ${this.currentSolution.selectedPiece}: ${piece.expression}`],
            ['Substitution', this.currentSolution.calculation],
            ['Output', `f(${x}) = ${result}`],
            ['Condition Check', `${x} satisfies "${piece.condition}" ✓`]
        ];

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createGraphSection() {
        if (!this.graphData) return null;

        const graphData = [
            ['Graph Type', 'Piecewise Linear Function'],
            ['Number of Pieces', this.graphData.numberOfPieces],
            ['', '']
        ];

        this.graphData.pieces.forEach((piece, index) => {
            graphData.push([`Piece ${index + 1}`, '']);
            graphData.push(['  Formula', piece.formula]);
            graphData.push(['  x-range', `[${piece.xRange[0]}, ${piece.xRange[1]}]`]);
            graphData.push(['  Slope', piece.slope]);
            graphData.push(['  Endpoints', '']);
            piece.endpoints.forEach(ep => {
                graphData.push(['    ', `(${ep.x}, ${ep.y}) - ${ep.type} circle`]);
            });
        });

        return {
            title: 'Graph Information',
            type: 'graph',
            data: graphData
        };
    }

    createContinuitySection() {
        if (!this.currentSolution || this.currentSolution.category !== 'continuity') return null;

        const continuityData = [
            ['Continuity Analysis', ''],
            ['Overall Continuous?', this.currentSolution.overallContinuous ? 'Yes' : 'No'],
            ['', '']
        ];

        this.currentSolution.boundaryPoints.forEach(bp => {
            continuityData.push([`At x = ${bp.boundaryPoint}`, '']);
            continuityData.push(['  Left limit', bp.leftLimit]);
            continuityData.push(['  f(a)', bp.functionValue]);
            continuityData.push(['  Right limit', bp.rightLimit]);
            continuityData.push(['  Continuous?', bp.isContinuous ? 'Yes' : 'No']);
            if (!bp.isContinuous) {
                continuityData.push(['  Discontinuity Type', bp.discontinuityType]);
                continuityData.push(['  Jump Size', bp.jumpSize]);
            }
            continuityData.push(['', '']);
        });

        return {
            title: 'Continuity Analysis',
            type: 'continuity',
            data: continuityData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        const appData = [
            ['Real-World Applications of Piecewise Functions', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Structure', app.piecewiseStructure]);
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

        const notes = this.generatePiecewisePedagogicalNotes(this.currentProblem.taskType);

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

    generatePiecewisePedagogicalNotes(taskType) {
        const pedagogicalDatabase = {
            evaluation: {
                objectives: [
                    'Evaluate piecewise functions correctly',
                    'Determine which piece applies to given input',
                    'Understand conditional function behavior'
                ],
                keyConcepts: [
                    'Different formulas for different domains',
                    'Checking conditions to select piece',
                    'Inequality interpretation (< vs ≤)'
                ],
                prerequisites: [
                    'Linear function evaluation',
                    'Understanding inequalities',
                    'Substitution'
                ],
                commonDifficulties: [
                    'Using multiple pieces instead of one',
                    'Misreading inequality symbols',
                    'Confusion at boundary points'
                ],
                teachingStrategies: [
                    'Use tax bracket analogy',
                    'Practice inequality checking separately',
                    'Emphasize "check then use" process'
                ],
                extensions: [
                    'More pieces (3+)',
                    'Compound conditions',
                    'Word problems'
                ],
                assessment: [
                    'Can student identify correct piece?',
                    'Does student check conditions accurately?',
                    'Can student handle boundary points?'
                ]
            },
            graphing: {
                objectives: [
                    'Graph piecewise linear functions',
                    'Use proper endpoint notation',
                    'Restrict pieces to correct domains'
                ],
                keyConcepts: [
                    'Line segments on restricted domains',
                    'Open vs closed circles',
                    'Visual representation of conditions'
                ],
                prerequisites: [
                    'Graphing linear functions',
                    'Understanding domain restrictions',
                    'Plotting points'
                ],
                commonDifficulties: [
                    'Extending pieces beyond domain',
                    'Wrong circle types at endpoints',
                    'Connecting separate pieces'
                ],
                teachingStrategies: [
                    'Graph whole line first, then restrict',
                    'Use different colors for different pieces',
                    'Practice endpoint notation separately'
                ],
                extensions: [
                    'Non-linear piecewise functions',
                    'More complex domain conditions',
                    'Graphing from descriptions'
                ],
                assessment: [
                    'Are domains restricted correctly?',
                    'Are endpoints marked properly?',
                    'Can student read piecewise graphs?'
                ]
            },
            continuity: {
                objectives: [
                    'Check continuity at boundary points',
                    'Calculate one-sided limits',
                    'Identify discontinuity types'
                ],
                keyConcepts: [
                    'Left and right limits',
                    'Continuity condition',
                    'Jump vs removable discontinuities'
                ],
                prerequisites: [
                    'Understanding limits',
                    'Piecewise evaluation',
                    'Function value vs limit'
                ],
                commonDifficulties: [
                    'Confusing limit with function value',
                    'Using wrong piece for each limit',
                    'Assuming continuity without checking'
                ],
                teachingStrategies: [
                    'Use three-column table approach',
                    'Visualize with graphs',
                    'Practice approaching from each side'
                ],
                extensions: [
                    'Designing continuous piecewise functions',
                    'Finding parameters for continuity',
                    'Calculus: differentiability'
                ],
                assessment: [
                    'Does student calculate both limits?',
                    'Does student check function value?',
                    'Can student classify discontinuities?'
                ]
            },
            solving: {
                objectives: [
                    'Solve equations with piecewise functions',
                    'Check domain validity of solutions',
                    'Find all solutions across pieces'
                ],
                keyConcepts: [
                    'Solve on each piece separately',
                    'Validate solutions in domain',
                    'Multiple solutions possible'
                ],
                prerequisites: [
                    'Solving linear equations',
                    'Checking inequality conditions',
                    'Systematic approach'
                ],
                commonDifficulties: [
                    'Accepting invalid solutions',
                    'Missing solutions from other pieces',
                    'Not checking all pieces'
                ],
                teachingStrategies: [
                    'Teach systematic piece-by-piece method',
                    'Emphasize domain validation',
                    'Use checklist for all pieces'
                ],
                extensions: [
                    'Systems with piecewise functions',
                    'Optimization problems',
                    'Real-world applications'
                ],
                assessment: [
                    'Does student check all pieces?',
                    'Does student validate solutions?',
                    'Can student find multiple solutions?'
                ]
            }
        };

        const category = this.piecewiseTypes[taskType]?.category || 'evaluation';
        return pedagogicalDatabase[category] || pedagogicalDatabase.evaluation;
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generatePiecewiseAlternativeMethods(this.currentProblem.taskType);

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

    generatePiecewiseAlternativeMethods(taskType) {
        const alternativeDatabase = {
            evaluation: {
                primaryMethod: 'Condition Checking',
                methods: [
                    {
                        name: 'Graphical Method',
                        description: 'Graph function and read value from graph at given x'
                    },
                    {
                        name: 'Table Method',
                        description: 'Create table with all pieces and check systematically'
                    },
                    {
                        name: 'Number Line Method',
                        description: 'Mark regions on number line and identify which contains x'
                    }
                ],
                comparison: 'Condition checking is most reliable; graphical provides visual confirmation; table good for organization'
            },
            graphing: {
                primaryMethod: 'Piece-by-Piece Graphing',
                methods: [
                    {
                        name: 'Point Plotting',
                        description: 'Plot several points on each piece then connect'
                    },
                    {
                        name: 'Full Line First',
                        description: 'Graph entire line for each piece, then erase portions outside domain'
                    },
                    {
                        name: 'Technology',
                        description: 'Use graphing calculator or software'
                    }
                ],
                comparison: 'Piece-by-piece most systematic; point plotting good for beginners; technology fast but less instructive'
            },
            continuity: {
                primaryMethod: 'Three-Value Comparison',
                methods: [
                    {
                        name: 'Graphical Analysis',
                        description: 'Graph function and visually inspect for jumps/gaps'
                    },
                    {
                        name: 'Table Format',
                        description: 'Organize left limit, f(a), right limit in columns'
                    },
                    {
                        name: 'Algebraic Simplification',
                        description: 'Set pieces equal and solve to find where they match'
                    }
                ],
                comparison: 'Three-value method most rigorous; graphical intuitive; table organizational aid'
            },
            solving: {
                primaryMethod: 'Systematic Piece-by-Piece',
                methods: [
                    {
                        name: 'Graphical Intersection',
                        description: 'Graph f(x) and y = k, find intersections'
                    },
                    {
                        name: 'Guess and Check',
                        description: 'Try values and narrow down (not recommended)'
                    },
                    {
                        name: 'Technology',
                        description: 'Use equation solver with domain restrictions'
                    }
                ],
                comparison: 'Piece-by-piece most reliable and complete; graphical provides visual verification; technology fast'
            }
        };

        const category = this.piecewiseTypes[taskType]?.category || 'evaluation';
        return alternativeDatabase[category] || alternativeDatabase.evaluation;
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
export default EnhancedPiecewiseLinearMathematicalWorkbook;
