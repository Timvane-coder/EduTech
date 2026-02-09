// Enhanced Piecewise Functions Mathematical Workbook - Comprehensive Implementation
import * as math from 'mathjs';

export class EnhancedPiecewiseFunctionsMathematicalWorkbook {
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
    }

    initializePiecewiseLessons() {
        this.lessons = {
            basic_piecewise: {
                title: "Introduction to Piecewise Functions",
                concepts: [
                    "Piecewise functions have different rules for different input values",
                    "Each piece has its own domain (where it applies)",
                    "Function value changes based on which piece is active",
                    "Graphically, piecewise functions can have breaks or different shapes in different regions"
                ],
                theory: "A piecewise function is defined by multiple sub-functions, each applying to a specific interval of the domain. The function 'switches' between these rules based on the input value.",
                keyFormulas: {
                    "General Form": "f(x) = { expression₁ if condition₁, expression₂ if condition₂, ... }",
                    "Two-Piece Example": "f(x) = { x² if x < 0, 2x if x ≥ 0 }",
                    "Three-Piece Example": "f(x) = { -x if x < -1, x² if -1 ≤ x ≤ 1, x+1 if x > 1 }"
                },
                evaluationSteps: [
                    "Identify the input value x",
                    "Determine which condition/interval contains x",
                    "Use the corresponding expression for that interval",
                    "Calculate the function value using that expression"
                ],
                applications: [
                    "Tax brackets (different rates for different income levels)",
                    "Shipping costs (flat rate then per-pound)",
                    "Parking fees (different rates for different time periods)",
                    "Utility billing (tiered pricing)"
                ]
            },

            evaluating_piecewise: {
                title: "Evaluating Piecewise Functions",
                concepts: [
                    "Check which piece's domain contains the input",
                    "Only one piece applies at any given x-value",
                    "Pay attention to ≤ vs < in conditions",
                    "Boundary points need careful evaluation"
                ],
                theory: "To evaluate a piecewise function at x = a, find which piece's condition is satisfied by a, then substitute a into that piece's expression.",
                keyFormulas: {
                    "Evaluation Process": "1. Check conditions, 2. Select piece, 3. Substitute, 4. Calculate",
                    "Boundary Check": "At x = boundary, check which condition includes it (≤ or <)"
                },
                commonPitfalls: [
                    "Using wrong piece for boundary values",
                    "Confusing < with ≤",
                    "Not checking all conditions",
                    "Arithmetic errors in substitution"
                ],
                applications: [
                    "Finding tax owed for specific income",
                    "Calculating shipping cost for specific weight",
                    "Determining parking fee for specific duration"
                ]
            },

            graphing_piecewise: {
                title: "Graphing Piecewise Functions",
                concepts: [
                    "Graph each piece on its specified domain only",
                    "Use open circles for excluded endpoints (< or >)",
                    "Use closed circles for included endpoints (≤ or ≥)",
                    "Check for continuity at boundary points"
                ],
                theory: "The graph of a piecewise function is created by graphing each piece separately on its domain, paying careful attention to whether endpoints are included.",
                keyFormulas: {
                    "Graphing Steps": "1. Graph each piece, 2. Restrict to domain, 3. Mark endpoints, 4. Connect or leave gaps",
                    "Continuity Check": "At x = a: lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = f(a)"
                },
                graphingSteps: [
                    "Identify each piece and its domain",
                    "Graph each piece as if it were the only function",
                    "Erase portions outside each piece's domain",
                    "Mark endpoints with open or closed circles",
                    "Check for jumps, holes, or continuity at boundaries"
                ],
                applications: [
                    "Visualizing rate changes",
                    "Understanding breakpoints in pricing",
                    "Modeling real-world phenomena with different phases"
                ]
            },

            continuity_piecewise: {
                title: "Continuity of Piecewise Functions",
                concepts: [
                    "Function is continuous if graph has no breaks",
                    "Check continuity at boundary points",
                    "Left limit, right limit, and function value must all equal",
                    "Discontinuities can be jumps, holes, or infinite"
                ],
                theory: "A piecewise function is continuous at x = a if: 1) f(a) exists, 2) lim(x→a) f(x) exists, and 3) lim(x→a) f(x) = f(a).",
                keyFormulas: {
                    "Continuity Definition": "lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = f(a)",
                    "Left Limit": "lim(x→a⁻) f(x) uses piece with x < a",
                    "Right Limit": "lim(x→a⁺) f(x) uses piece with x > a"
                },
                continuitySteps: [
                    "Find left-hand limit at boundary",
                    "Find right-hand limit at boundary",
                    "Find function value at boundary",
                    "Compare all three values",
                    "If all equal, continuous; otherwise, discontinuous"
                ],
                discontinuityTypes: {
                    "Jump": "Left and right limits exist but differ",
                    "Removable (Hole)": "Limits exist and equal, but f(a) differs or doesn't exist",
                    "Infinite": "One or both limits are infinite"
                }
            },

            domain_range_piecewise: {
                title: "Domain and Range of Piecewise Functions",
                concepts: [
                    "Domain is union of all pieces' domains",
                    "Range is union of all pieces' ranges on their domains",
                    "Check boundary points carefully",
                    "Graph helps visualize range"
                ],
                theory: "The domain consists of all x-values where the function is defined. The range consists of all possible output values across all pieces.",
                keyFormulas: {
                    "Domain": "Union of all intervals: I₁ ∪ I₂ ∪ ... ∪ Iₙ",
                    "Range": "Union of all output sets from each piece"
                },
                findingSteps: [
                    "List domain interval for each piece",
                    "Take union of all intervals for total domain",
                    "Find range of each piece on its domain",
                    "Take union of all ranges for total range",
                    "Check boundary values for inclusion/exclusion"
                ],
                applications: [
                    "Determining valid inputs for a model",
                    "Finding possible outcomes",
                    "Understanding limitations of real-world functions"
                ]
            },

            absolute_value_piecewise: {
                title: "Absolute Value as Piecewise Function",
                concepts: [
                    "|x| can be written as piecewise function",
                    "|x| = { -x if x < 0, x if x ≥ 0 }",
                    "Absolute value functions create V-shaped graphs",
                    "Transformations apply to piecewise form"
                ],
                theory: "The absolute value function is the most common example of a piecewise function, defined as the distance from zero.",
                keyFormulas: {
                    "Basic": "|x| = { -x if x < 0, x if x ≥ 0 }",
                    "Translated": "|x - h| = { -(x-h) if x < h, (x-h) if x ≥ h }",
                    "General": "|ax + b| = { -(ax+b) if ax+b < 0, (ax+b) if ax+b ≥ 0 }"
                },
                conversions: [
                    "Identify the expression inside absolute value",
                    "Set expression < 0 for first piece (negative)",
                    "Set expression ≥ 0 for second piece (positive)",
                    "Write piecewise form"
                ],
                applications: [
                    "Distance problems",
                    "Error bounds",
                    "Optimization with constraints"
                ]
            },

            step_functions: {
                title: "Step Functions",
                concepts: [
                    "Step functions have constant values on intervals",
                    "Graph looks like stair steps",
                    "Often used for discrete changes",
                    "Greatest integer function (floor) is classic example"
                ],
                theory: "Step functions jump from one constant value to another at specified points, creating a staircase graph.",
                keyFormulas: {
                    "General Step": "f(x) = { c₁ if x ∈ I₁, c₂ if x ∈ I₂, ... }",
                    "Floor Function": "⌊x⌋ = greatest integer ≤ x",
                    "Ceiling Function": "⌈x⌉ = least integer ≥ x"
                },
                examples: {
                    "Postage": "Cost jumps at each ounce increment",
                    "Parking": "Fee increases each hour",
                    "Tax Brackets": "Rate changes at income thresholds"
                },
                applications: [
                    "Pricing models with tiers",
                    "Digital signals",
                    "Inventory management"
                ]
            },

            inverse_piecewise: {
                title: "Inverses of Piecewise Functions",
                concepts: [
                    "Find inverse of each piece separately",
                    "Domain of piece becomes range of inverse piece",
                    "Range of piece becomes domain of inverse piece",
                    "May need to restrict domain for inverse to exist"
                ],
                theory: "The inverse of a piecewise function is found by inverting each piece and swapping domain and range conditions.",
                keyFormulas: {
                    "Inverse Process": "1. Switch x and y, 2. Solve for y, 3. Swap domain/range",
                    "Domain/Range Swap": "If f: D → R, then f⁻¹: R → D"
                },
                inverseSteps: [
                    "Check if function is one-to-one (passes horizontal line test)",
                    "For each piece, switch x and y",
                    "Solve for y in each piece",
                    "Determine new domain conditions from original range",
                    "Verify: f(f⁻¹(x)) = x and f⁻¹(f(x)) = x"
                ],
                challenges: [
                    "Function must be one-to-one",
                    "Tracking domain/range correctly",
                    "Solving for y in each piece",
                    "Ensuring continuity of inverse"
                ]
            },

            transformations_piecewise: {
                title: "Transformations of Piecewise Functions",
                concepts: [
                    "Transformations apply to each piece",
                    "Vertical shifts: add to entire function",
                    "Horizontal shifts: subtract from x in conditions and expressions",
                    "Stretches/compressions: multiply function or x values"
                ],
                theory: "Transformations of piecewise functions work the same as for regular functions, but must be applied to each piece and its conditions.",
                keyFormulas: {
                    "Vertical Shift": "f(x) + k shifts up k units",
                    "Horizontal Shift": "f(x - h) shifts right h units (adjust conditions)",
                    "Vertical Stretch": "a·f(x) stretches vertically by factor a",
                    "Horizontal Stretch": "f(bx) compresses horizontally by factor b (adjust conditions)"
                },
                transformationSteps: [
                    "Identify the transformation type",
                    "Apply to each piece's expression",
                    "Adjust domain conditions if horizontal transformation",
                    "Update boundary points",
                    "Verify transformed function"
                ],
                applications: [
                    "Adjusting models to fit data",
                    "Scaling functions for different units",
                    "Modeling with modified parameters"
                ]
            },

            operations_piecewise: {
                title: "Operations with Piecewise Functions",
                concepts: [
                    "Addition/subtraction: combine pieces with same domains",
                    "Multiplication/division: find common intervals",
                    "Composition: evaluate inner function first",
                    "Result may have more pieces than original functions"
                ],
                theory: "Operating on piecewise functions requires careful attention to domains. The result is defined piecewise on the intersection or union of domains.",
                keyFormulas: {
                    "Sum": "(f + g)(x) defined on intervals where both exist",
                    "Product": "(f · g)(x) requires common domain",
                    "Composition": "(f ∘ g)(x) = f(g(x)) needs careful domain analysis"
                },
                operationSteps: [
                    "Identify all boundary points from both functions",
                    "Create intervals based on all boundaries",
                    "For each interval, determine which pieces apply",
                    "Perform operation in each interval",
                    "Simplify and combine intervals where possible"
                ],
                challenges: [
                    "Tracking multiple boundaries",
                    "Determining correct pieces in each interval",
                    "Simplifying complex expressions",
                    "Ensuring domain correctness"
                ]
            },

            modeling_piecewise: {
                title: "Modeling with Piecewise Functions",
                concepts: [
                    "Real-world situations often have different rules for different conditions",
                    "Identify breakpoints or thresholds",
                    "Write appropriate expression for each region",
                    "Include all necessary conditions"
                ],
                theory: "Many real-world phenomena are naturally piecewise: taxes, shipping, utilities, etc. Modeling requires identifying conditions and expressions.",
                modelingSteps: [
                    "Identify the different scenarios or conditions",
                    "Determine boundaries/breakpoints",
                    "Write expression for each scenario",
                    "Specify domain conditions clearly",
                    "Verify model matches problem requirements",
                    "Test with specific values"
                ],
                commonModels: {
                    "Tax Brackets": "Different rates for income ranges",
                    "Shipping": "Flat rate plus weight-based",
                    "Utilities": "Base fee plus tiered usage rates",
                    "Parking": "Hourly rates with maximum",
                    "Overtime Pay": "Regular rate then overtime rate"
                },
                applications: [
                    "Business pricing strategies",
                    "Economics and finance",
                    "Engineering systems with modes",
                    "Scientific models with phase changes"
                ]
            },

            solving_equations_piecewise: {
                title: "Solving Equations with Piecewise Functions",
                concepts: [
                    "Solve equation separately in each piece's domain",
                    "Check if solution lies in the piece's domain",
                    "Solution is valid only if in correct domain",
                    "May have multiple solutions from different pieces"
                ],
                theory: "To solve f(x) = k where f is piecewise, solve the equation in each piece and verify solutions are in the appropriate domains.",
                keyFormulas: {
                    "Solution Process": "For each piece: solve equation, verify domain",
                    "Validity Check": "Solution x must satisfy piece's domain condition"
                },
                solvingSteps: [
                    "Set up equation for each piece",
                    "Solve equation in each piece",
                    "Check if solution satisfies piece's domain condition",
                    "Keep only valid solutions",
                    "Collect all valid solutions from all pieces"
                ],
                applications: [
                    "Finding when cost equals specific value",
                    "Determining breakeven points",
                    "Solving optimization problems"
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
                highlightBg: '#ffe6e6',
                piecewiseBg: '#e8f4f8',
                boundaryBg: '#fff0cc'
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
                piecewiseBg: '#e0f2f7',
                boundaryBg: '#fff9c4'
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
            'perpendicular': '⊥', 'parallel': '∥',
            'lim': 'lim', 'rightarrow': '→', 'leftarrow': '←',
            'floor': '⌊⌋', 'ceiling': '⌈⌉'
        };
    }

    initializePiecewiseSolvers() {
        this.piecewiseTypes = {
            evaluate_piecewise: {
                patterns: [
                    /evaluate|find.*f\(.*\)/i,
                    /f\(\s*[+-]?\d+\.?\d*\s*\)/,
                    /piecewise.*evaluate/i
                ],
                solver: this.evaluatePiecewise.bind(this),
                name: 'Evaluate Piecewise Function',
                category: 'evaluation',
                description: 'Find the value of a piecewise function at a specific point'
            },

            graph_piecewise: {
                patterns: [
                    /graph.*piecewise/i,
                    /sketch.*piecewise/i,
                    /plot.*piecewise/i
                ],
                solver: this.graphPiecewise.bind(this),
                name: 'Graph Piecewise Function',
                category: 'graphing',
                description: 'Create a graph of a piecewise function'
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
                description: 'Determine the domain and range of a piecewise function'
            },

            check_continuity: {
                patterns: [
                    /continuity/i,
                    /continuous/i,
                    /discontinuous/i,
                    /jump|hole/i
                ],
                solver: this.checkContinuity.bind(this),
                name: 'Check Continuity',
                category: 'continuity',
                description: 'Determine if piecewise function is continuous'
            },

            find_limits: {
                patterns: [
                    /limit/i,
                    /lim.*x.*approaches/i,
                    /left.*limit|right.*limit/i
                ],
                solver: this.findLimits.bind(this),
                name: 'Find Limits',
                category: 'limits',
                description: 'Calculate limits at boundary points'
            },

            solve_equation: {
                patterns: [
                    /solve.*f\(x\)\s*=/i,
                    /find.*x.*when/i,
                    /equation.*piecewise/i
                ],
                solver: this.solveEquation.bind(this),
                name: 'Solve Equation',
                category: 'solving',
                description: 'Solve equation involving piecewise function'
            },

            create_from_description: {
                patterns: [
                    /create.*piecewise/i,
                    /write.*piecewise/i,
                    /define.*piecewise/i
                ],
                solver: this.createFromDescription.bind(this),
                name: 'Create Piecewise Function',
                category: 'creation',
                description: 'Write piecewise function from description'
            },

            absolute_value_conversion: {
                patterns: [
                    /absolute.*value.*piecewise/i,
                    /\|.*\|.*piecewise/i,
                    /convert.*absolute/i
                ],
                solver: this.convertAbsoluteValue.bind(this),
                name: 'Convert Absolute Value to Piecewise',
                category: 'conversion',
                description: 'Express absolute value function as piecewise'
            },

            step_function: {
                patterns: [
                    /step.*function/i,
                    /floor.*function/i,
                    /ceiling.*function/i,
                    /greatest.*integer/i
                ],
                solver: this.handleStepFunction.bind(this),
                name: 'Step Function',
                category: 'step_functions',
                description: 'Work with step functions'
            },

            transformation: {
                patterns: [
                    /transform.*piecewise/i,
                    /shift.*piecewise/i,
                    /stretch.*piecewise/i
                ],
                solver: this.transformPiecewise.bind(this),
                name: 'Transform Piecewise Function',
                category: 'transformations',
                description: 'Apply transformations to piecewise functions'
            },

            composition: {
                patterns: [
                    /composition.*piecewise/i,
                    /\(f.*g\)\(x\)/i,
                    /composite/i
                ],
                solver: this.composePiecewise.bind(this),
                name: 'Composition',
                category: 'operations',
                description: 'Find composition of piecewise functions'
            },

            inverse_piecewise: {
                patterns: [
                    /inverse.*piecewise/i,
                    /f.*-1|f\^-1/i
                ],
                solver: this.findInverse.bind(this),
                name: 'Find Inverse',
                category: 'inverse',
                description: 'Find inverse of piecewise function'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            evaluation: {
                'Selecting piece': [
                    'Using wrong piece for the given x-value',
                    'Confusing < with ≤ at boundary points',
                    'Not checking which condition x satisfies',
                    'Forgetting to check boundary inclusivity'
                ],
                'Substitution': [
                    'Arithmetic errors when substituting',
                    'Sign errors with negative values',
                    'Order of operations mistakes',
                    'Forgetting to square or apply exponents'
                ]
            },
            graphing: {
                'Domain restriction': [
                    'Graphing piece outside its domain',
                    'Extending lines beyond their intervals',
                    'Not restricting each piece properly'
                ],
                'Endpoint notation': [
                    'Using closed circle when should be open',
                    'Using open circle when should be closed',
                    'Confusing ≤ with < at boundaries',
                    'Missing endpoint circles entirely'
                ],
                'Continuity visualization': [
                    'Not showing jumps clearly',
                    'Connecting pieces that should be disconnected',
                    'Missing holes or gaps'
                ]
            },
            continuity: {
                'Limit calculation': [
                    'Using wrong piece for left or right limit',
                    'Not distinguishing left vs right limits',
                    'Arithmetic errors in limit evaluation'
                ],
                'Continuity check': [
                    'Forgetting to check function value exists',
                    'Not verifying all three conditions',
                    'Misidentifying type of discontinuity'
                ]
            },
            domain_range: {
                'Domain': [
                    'Missing intervals',
                    'Including excluded boundary points',
                    'Not using union notation correctly',
                    'Forgetting to check all pieces'
                ],
                'Range': [
                    'Not finding range of each piece on its domain',
                    'Including values outside actual range',
                    'Missing boundary values',
                    'Not considering all pieces'
                ]
            },
            solving: {
                'Domain verification': [
                    'Not checking if solution is in piece\'s domain',
                    'Keeping invalid solutions',
                    'Missing solutions from other pieces'
                ],
                'Multiple solutions': [
                    'Stopping after finding first solution',
                    'Not checking all pieces',
                    'Forgetting to verify each solution'
                ]
            }
        };

        this.errorPrevention = {
            boundary_check: {
                reminder: 'Always verify which piece contains boundary points: ≤ includes, < excludes',
                method: 'Circle boundary values and check each piece\'s condition'
            },
            piece_selection: {
                reminder: 'Substitute x into conditions first, then select correct piece',
                method: 'Test x value against each condition systematically'
            },
            domain_tracking: {
                reminder: 'Each piece only applies to its specified domain',
                method: 'Write domain clearly beside each piece when working'
            },
            verify_continuity: {
                reminder: 'Check three conditions: left limit, right limit, function value',
                method: 'Use organized table: left limit | right limit | f(a) | continuous?'
            },
            solution_validity: {
                reminder: 'Solution must satisfy both equation AND domain condition',
                method: 'After solving in each piece, verify x is in that piece\'s domain'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why piecewise functions work and their meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact steps for working with piecewise functions',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical understanding and visualization',
                language: 'visual and spatial descriptions'
            },
            algebraic: {
                focus: 'Formal mathematical rules and notation',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete numbers and simple cases'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of concrete and abstract'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 years old - simplest possible terms',
                detail: 'every tiny step explained with analogies',
                examples: 'real-world analogies and stories',
                analogies: true,
                visualization: 'simple pictures and drawings'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive explanations with reasoning',
                examples: 'abstract and generalized cases'
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
            tax_brackets: {
                scenario: "Income tax with different rates for different income levels",
                example: "Tax = { 0.10·income if income ≤ 10000, 1000 + 0.15·(income-10000) if 10000 < income ≤ 40000, 5500 + 0.25·(income-40000) if income > 40000 }",
                context: "Progressive tax systems use piecewise functions where tax rate increases with income",
                realWorldUse: "Filing taxes, financial planning, understanding take-home pay"
            },
            shipping_costs: {
                scenario: "Shipping cost with flat rate plus weight-based charges",
                example: "Cost = { 5 if weight ≤ 1, 5 + 2·(weight-1) if 1 < weight ≤ 5, 13 + 3·(weight-5) if weight > 5 }",
                context: "Shipping companies often have base rates with additional charges for extra weight",
                realWorldUse: "E-commerce pricing, logistics planning, cost estimation"
            },
            parking_fees: {
                scenario: "Parking garage with hourly rates and maximum charge",
                example: "Fee = { 3·hours if hours ≤ 3, 9 + 5·(hours-3) if 3 < hours ≤ 8, 34 if hours > 8 }",
                context: "Parking fees often have different rates for different time periods with daily maximums",
                realWorldUse: "Trip planning, budgeting, understanding parking costs"
            },
            utility_billing: {
                scenario: "Electric bill with tiered rates based on usage",
                example: "Bill = { 0.12·kwh if kwh ≤ 500, 60 + 0.15·(kwh-500) if 500 < kwh ≤ 1000, 135 + 0.20·(kwh-1000) if kwh > 1000 }",
                context: "Utilities often charge more per unit as usage increases to encourage conservation",
                realWorldUse: "Energy conservation, budgeting, understanding bills"
            },
            overtime_pay: {
                scenario: "Pay calculation with overtime rate after 40 hours",
                example: "Pay = { 15·hours if hours ≤ 40, 600 + 22.50·(hours-40) if hours > 40 }",
                context: "Labor laws require higher pay rates for hours worked beyond standard workweek",
                realWorldUse: "Payroll calculation, understanding compensation, work planning"
            },
            phone_plan: {
                scenario: "Cell phone plan with included minutes then per-minute charges",
                example: "Cost = { 50 if minutes ≤ 1000, 50 + 0.10·(minutes-1000) if minutes > 1000 }",
                context: "Phone plans often include base minutes with charges for overages",
                realWorldUse: "Choosing phone plans, managing usage, cost control"
            },
            water_depth: {
                scenario: "Ocean depth near shore (gradual then steep dropoff)",
                example: "Depth = { 0.5·distance if distance ≤ 100, 50 + 2·(distance-100) if distance > 100 }",
                context: "Natural phenomena often have different rates in different regions",
                realWorldUse: "Oceanography, safety planning, understanding geography"
            },
            speed_limit: {
                scenario: "Speed limit changes in different zones",
                example: "Limit = { 25 if residential, 45 if business, 65 if highway }",
                context: "Traffic laws specify different speeds for different area types",
                realWorldUse: "Driving safely, understanding traffic laws, trip time estimation"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            evaluation: {
                skills: ['Substitution', 'Order of operations', 'Evaluating expressions', 'Checking inequalities'],
                priorKnowledge: ['Function notation', 'Inequality symbols (< ≤ > ≥)', 'Testing conditions'],
                checkQuestions: [
                    "What is f(x) = 2x + 3 when x = 4?",
                    "Is 5 < 10 true or false?",
                    "Does x = 7 satisfy x ≤ 10?"
                ]
            },
            graphing: {
                skills: ['Graphing functions', 'Plotting points', 'Open vs closed circles', 'Domain restriction'],
                priorKnowledge: ['Coordinate plane', 'Function graphing', 'Interval notation'],
                checkQuestions: [
                    "How do you graph y = 2x + 1?",
                    "What's the difference between open and closed circles?",
                    "What does x < 3 mean on a graph?"
                ]
            },
            continuity: {
                skills: ['Limits', 'Left and right limits', 'Function evaluation', 'Limit comparison'],
                priorKnowledge: ['Limit concept', 'One-sided limits', 'Continuity definition'],
                checkQuestions: [
                    "What is a limit?",
                    "What's the difference between left and right limits?",
                    "What does it mean for a function to be continuous?"
                ]
            },
            domain_range: {
                skills: ['Set notation', 'Union of sets', 'Finding function range', 'Interval notation'],
                priorKnowledge: ['Domain concept', 'Range concept', 'Set operations'],
                checkQuestions: [
                    "What is the domain of a function?",
                    "How do you find the range?",
                    "What does ∪ mean?"
                ]
            },
            solving: {
                skills: ['Solving equations', 'Checking solutions', 'Multiple solutions', 'Domain verification'],
                priorKnowledge: ['Equation solving', 'Solution verification', 'Extraneous solutions'],
                checkQuestions: [
                    "How do you solve 2x + 3 = 11?",
                    "How do you check if a solution is valid?",
                    "Can an equation have multiple solutions?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            switch_analogy: {
                description: "Piecewise function as a switch",
                analogy: "Like a light switch that changes settings based on the time of day",
                visualization: "Draw flowchart showing decision points",
                suitableFor: ['evaluation', 'creation'],
                explanation: "The function 'switches' which rule to use based on the input value"
            },
            multipleRooms: {
                description: "Different rooms with different rules",
                analogy: "Like having different rules in different rooms of a house",
                visualization: "Draw house with rooms labeled by x-intervals",
                suitableFor: ['all_types'],
                explanation: "Each 'room' (interval) has its own rule (expression)"
            },
            breakpoint_map: {
                description: "Road map with route changes",
                analogy: "Like driving where the speed limit changes at certain points",
                visualization: "Number line with regions marked",
                suitableFor: ['graphing', 'domain_range'],
                explanation: "Function behavior changes at boundary points (breakpoints)"
            },
            conditional_recipe: {
                description: "Recipe with different instructions for different amounts",
                analogy: "Like a recipe that says 'if making for 2 people use 1 cup, if for 4 people use 2 cups'",
                visualization: "Table showing conditions and corresponding instructions",
                suitableFor: ['evaluation', 'creation'],
                explanation: "Different inputs require different instructions"
            },
            staircase: {
                description: "Step function as staircase",
                analogy: "Like climbing stairs where you jump from one height to the next",
                visualization: "Graph showing horizontal line segments at different levels",
                suitableFor: ['step_functions'],
                explanation: "Value stays constant on intervals then jumps to new level"
            },
            gate_keeper: {
                description: "Conditions as gatekeepers",
                analogy: "Each piece has a gatekeeper who only lets certain x-values through",
                visualization: "Draw gates with signs showing which x-values allowed",
                suitableFor: ['evaluation', 'solving'],
                explanation: "Must pass the condition test to use that piece"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Evaluate f(3) where f(x) = { x² if x < 2, 2x if x ≥ 2 }",
                    solution: 6,
                    steps: [
                        "Check which condition 3 satisfies",
                        "3 ≥ 2 is true, so use second piece",
                        "f(3) = 2(3) = 6"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Evaluate g(-1) where g(x) = { -x if x < 0, x if x ≥ 0 }",
                    solution: 1,
                    steps: [
                        "Check: -1 < 0 is true",
                        "Use first piece: g(-1) = -(-1)",
                        "g(-1) = 1"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Find h(0) where h(x) = { x+1 if x ≤ 0, x-1 if x > 0 }",
                    solution: 1,
                    steps: [
                        "Check: 0 ≤ 0 is true",
                        "Use first piece: h(0) = 0 + 1",
                        "h(0) = 1"
                    ],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Graph f(x) = { -x if x < 0, x² if x ≥ 0 }",
                    steps: [
                        "Graph y = -x for x < 0 (line with negative slope)",
                        "Use open circle at (0,0) for first piece",
                        "Graph y = x² for x ≥ 0 (parabola)",
                        "Use closed circle at (0,0) for second piece"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Is f(x) = { x+2 if x < 1, x² if x ≥ 1 } continuous at x = 1?",
                    solution: "Discontinuous",
                    steps: [
                        "Left limit: lim(x→1⁻) (x+2) = 3",
                        "Right limit: lim(x→1⁺) x² = 1",
                        "f(1) = 1² = 1",
                        "Left limit ≠ right limit, so discontinuous"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Find domain and range of f(x) = { x² if x ≤ 1, 2-x if x > 1 }",
                    solution: "Domain: all reals, Range: (-∞, 1]",
                    steps: [
                        "Domain: (-∞,1] ∪ (1,∞) = all real numbers",
                        "Range of x² on (-∞,1]: [0,1]",
                        "Range of 2-x on (1,∞): (-∞,1)",
                        "Combined range: (-∞,1]"
                    ],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Solve f(x) = 3 where f(x) = { x² if x < 2, 2x-1 if x ≥ 2 }",
                    solution: "x = √3 and x = 2",
                    steps: [
                        "Piece 1: x² = 3, so x = ±√3",
                        "Check: √3 ≈ 1.73 < 2 ✓, but -√3 < 0 < 2 ✓",
                        "Both √3 and -√3 valid for piece 1",
                        "Piece 2: 2x-1 = 3, so x = 2",
                        "Check: 2 ≥ 2 ✓",
                        "Solutions: x = -√3, √3, and 2"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Write |2x-6| as piecewise function",
                    solution: "f(x) = { -(2x-6) if x < 3, 2x-6 if x ≥ 3 }",
                    steps: [
                        "Set expression inside ≥ 0: 2x-6 ≥ 0",
                        "Solve: x ≥ 3",
                        "For x < 3: use -(2x-6) = 6-2x",
                        "For x ≥ 3: use 2x-6",
                        "Result: f(x) = { 6-2x if x < 3, 2x-6 if x ≥ 3 }"
                    ],
                    difficulty: "hard"
                }
            ],
            byCategory: {
                evaluation: [
                    { problem: "f(5) where f(x) = { x if x < 3, x² if x ≥ 3 }", solution: 25 },
                    { problem: "g(0) where g(x) = { |x| if x ≠ 0, 1 if x = 0 }", solution: 1 },
                    { problem: "h(-2) where h(x) = { x+3 if x ≤ -1, x² if x > -1 }", solution: 1 }
                ],
                graphing: [
                    "Graph f(x) = { 1 if x < 0, x if x ≥ 0 }",
                    "Sketch g(x) = { -x if x ≤ 1, x-2 if x > 1 }",
                    "Plot h(x) = { x² if x < 0, √x if x ≥ 0 }"
                ],
                continuity: [
                    "Check continuity of f(x) = { x² if x < 1, 2x-1 if x ≥ 1 } at x = 1",
                    "Is g(x) = { 3-x if x ≤ 2, x-1 if x > 2 } continuous?",
                    "Find discontinuities of h(x) = { 1/x if x ≠ 0, 0 if x = 0 }"
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            boundary_confusion: {
                misconception: "Using ≤ and < interchangeably at boundaries",
                reality: "≤ includes the boundary point, < excludes it - this matters for which piece applies",
                correctiveExample: "For x = 2 in f(x) = { x if x < 2, x² if x ≥ 2 }: x < 2 is FALSE, x ≥ 2 is TRUE, so use x²",
                commonIn: ['evaluation', 'graphing', 'continuity']
            },
            using_all_pieces: {
                misconception: "Thinking all pieces apply at once or trying to use multiple pieces",
                reality: "Only ONE piece applies for any given x-value",
                correctiveExample: "For f(x) = { x if x < 0, x² if x ≥ 0 } at x = 3: ONLY use x² (second piece)",
                commonIn: ['evaluation']
            },
            graphing_full_function: {
                misconception: "Graphing the entire function for each piece without domain restriction",
                reality: "Each piece only exists on its specified domain",
                correctiveExample: "For f(x) = { x² if x < 1, ... }, graph parabola ONLY for x < 1, not entire parabola",
                commonIn: ['graphing']
            },
            endpoint_marks: {
                misconception: "Using wrong type of circle (open vs closed) at boundaries",
                reality: "Closed circle means point included (≤ or ≥), open means excluded (< or >)",
                correctiveExample: "At x = 2 in piece 'x² if x ≤ 2': use CLOSED circle. In piece 'x if x > 2': use OPEN circle",
                commonIn: ['graphing']
            },
            continuity_assumption: {
                misconception: "Assuming piecewise functions are always continuous",
                reality: "Piecewise functions can have jumps, holes, or other discontinuities",
                correctiveExample: "f(x) = { 1 if x < 0, 2 if x ≥ 0 } has jump discontinuity at x = 0",
                commonIn: ['continuity', 'graphing']
            },
            limit_confusion: {
                misconception: "Using same piece for both left and right limits",
                reality: "Left limit uses piece with x < a, right limit uses piece with x > a",
                correctiveExample: "At x = 1 in f(x) = { x if x < 1, x² if x ≥ 1 }: left uses x, right uses x²",
                commonIn: ['continuity', 'limits']
            },
            domain_gaps: {
                misconception: "Assuming domain has no gaps or thinking gaps don't matter",
                reality: "Piecewise functions can have gaps in domain; these must be identified",
                correctiveExample: "f(x) = { x if x < 0, x if x > 1 } has gap at [0,1]",
                commonIn: ['domain_range']
            },
            solving_one_piece: {
                misconception: "Solving equation in only one piece and stopping",
                reality: "Must solve in ALL pieces and check which solutions are valid",
                correctiveExample: "For f(x) = 3 with 2 pieces: solve in BOTH pieces, then verify domains",
                commonIn: ['solving']
            },
            invalid_solutions: {
                misconception: "Keeping solutions that don't satisfy the piece's domain",
                reality: "Solution is valid only if it lies in that piece's domain",
                correctiveExample: "If solving x² = 4 in piece 'x² if x < 0': x = 2 is INVALID (2 is not < 0)",
                commonIn: ['solving']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            piecewise_function: {
                analogy: "Combination lock with different actions for different numbers",
                explanation: "Just like a combination lock does different things (clicks, opens) depending on where you turn it, a piecewise function does different calculations depending on the input",
                suitableFor: ['evaluation', 'creation'],
                ELI5: "Imagine a toy that makes different sounds depending on which button you press - that's like a piecewise function!"
            },
            boundary_points: {
                analogy: "State borders on a map",
                explanation: "Boundary points are like state lines - they mark where the rules change. Just as different states have different speed limits, different pieces have different expressions",
                suitableFor: ['graphing', 'domain_range'],
                ELI5: "Think of a fence between two yards. One side has different rules than the other side!"
            },
            piece_selection: {
                analogy: "Choosing the right key for the right lock",
                explanation: "Each x-value needs the right 'key' (piece) to unlock its value. Using the wrong piece is like using the wrong key - it won't work",
                suitableFor: ['evaluation'],
                ELI5: "It's like picking the right crayon from the box - you need to pick the one that matches what you're coloring!"
            },
            continuity: {
                analogy: "Smooth road vs road with potholes",
                explanation: "A continuous function is like a smooth road you can drive on without bumps. A discontinuous function has jumps or holes, like potholes you have to drive around",
                suitableFor: ['continuity'],
                ELI5: "Imagine drawing without lifting your pencil (continuous) vs having to jump to a new spot (discontinuous)"
            },
            step_function: {
                analogy: "Climbing stairs",
                explanation: "Step functions are like staircases - you're at one level, then jump to the next level. There's no gradual slope, just sudden steps",
                suitableFor: ['step_functions'],
                ELI5: "Think of walking up stairs - you're at one step, then hop! You're at the next step"
            },
            absolute_value: {
                analogy: "Mirror reflection",
                explanation: "Absolute value is like looking in a mirror - negative numbers reflect to become positive, but positive numbers stay the same",
                suitableFor: ['absolute_value_conversion'],
                ELI5: "Imagine numbers on opposite sides of zero are mirror images - absolute value shows how far from zero without caring which side"
            },
            domain_range: {
                analogy: "Restaurant menu (domain) and available dishes (range)",
                explanation: "Domain is like the menu (what you can order), range is like what actually gets served (what outputs you get)",
                suitableFor: ['domain_range'],
                ELI5: "Domain is like all the toys you own. Range is like all the ways you can play with them"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            evaluation: {
                level1: "Which piece should you use?",
                level2: "Check which condition the x-value satisfies",
                level3: "Test x against each condition: is it <, >, ≤, or ≥ the boundary?",
                level4: "For x = {value}, check: satisfies {condition}, so use piece: {expression}"
            },
            graphing: {
                level1: "How do you graph each piece separately?",
                level2: "Graph each piece as if it were the only function, then restrict to its domain",
                level3: "For each piece: graph the function, then erase parts outside the domain, mark endpoints",
                level4: "Piece 1: graph {expr1} for {domain1}. Piece 2: graph {expr2} for {domain2}. Mark endpoints carefully"
            },
            continuity: {
                level1: "What needs to be true for continuity?",
                level2: "Check if left limit equals right limit equals function value",
                level3: "Find: lim(x→a⁻) using left piece, lim(x→a⁺) using right piece, and f(a)",
                level4: "At x = {a}: left limit = {left}, right limit = {right}, f(a) = {value}. Compare these three"
            },
            domain_range: {
                level1: "What x-values does the function accept?",
                level2: "Look at all the domain conditions for all pieces",
                level3: "List each piece's domain, then take union of all intervals",
                level4: "Piece 1 domain: {dom1}, Piece 2 domain: {dom2}. Combined: {dom1} ∪ {dom2}"
            },
            solving: {
                level1: "In how many pieces should you solve the equation?",
                level2: "Solve the equation separately in each piece's domain",
                level3: "For each piece: solve equation, then check if solution is in that piece's domain",
                level4: "Piece 1: solve {expr1} = {value}, check if solution satisfies {condition1}. Repeat for all pieces"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Evaluate f(2) where f(x) = { x if x < 2, x² if x ≥ 2 }",
                    answer: 4,
                    assesses: "evaluation",
                    difficulty: "basic"
                },
                {
                    question: "Is the function f(x) = { x+1 if x ≤ 0, x-1 if x > 0 } continuous at x = 0?",
                    answer: "No (jump discontinuity)",
                    assesses: "continuity",
                    difficulty: "intermediate"
                },
                {
                    question: "What is the domain of f(x) = { x² if x < 1, x if x > 1 }?",
                    answer: "(-∞, 1) ∪ (1, ∞) or x ≠ 1",
                    assesses: "domain_range",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "To evaluate f(3) where f(x) = { x² if x < 3, 2x if x ≥ 3 }, which piece do you use?",
                    options: ["x²", "2x", "Both", "Neither"],
                    correct: "2x",
                    explanation: "Since 3 ≥ 3 is true, use the second piece: 2x"
                },
                {
                    question: "At x = 2 with condition 'x < 2', what type of circle do you use on a graph?",
                    options: ["Open circle", "Closed circle", "No circle", "Either one"],
                    correct: "Open circle",
                    explanation: "< means not included, so use open circle"
                },
                {
                    question: "For continuity at x = a, which must be true?",
                    options: [
                        "Only f(a) exists",
                        "Only limits exist",
                        "Left limit = right limit = f(a)",
                        "Function is defined everywhere"
                    ],
                    correct: "Left limit = right limit = f(a)",
                    explanation: "All three must exist and equal each other for continuity"
                }
            ],
            summative: [
                {
                    question: "Graph f(x) = { -x if x ≤ 0, x² if x > 0 } and determine if it's continuous",
                    showsWork: true,
                    rubric: {
                        graph_piece1: 2,
                        graph_piece2: 2,
                        endpoints: 2,
                        continuity_check: 2,
                        conclusion: 2
                    }
                },
                {
                    question: "Solve f(x) = 4 where f(x) = { x² if x < 3, 2x-2 if x ≥ 3 }",
                    answer: "x = 2 and x = 3",
                    showsWork: true,
                    rubric: {
                        solve_piece1: 2,
                        check_domain_piece1: 2,
                        solve_piece2: 2,
                        check_domain_piece2: 2,
                        final_solutions: 2
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "f(5) where f(x) = { x if x < 10, 2x if x ≥ 10 }",
                    "g(0) where g(x) = { -x if x < 0, x if x ≥ 0 }",
                    "h(-1) where h(x) = { x+2 if x ≤ 0, x-2 if x > 0 }"
                ],
                medium: [
                    "Graph f(x) = { x+1 if x < 1, x² if x ≥ 1 }",
                    "Find domain of f(x) = { 1/x if x < 0, x if x ≥ 0 }",
                    "Check continuity of f(x) = { x² if x ≤ 1, 2x-1 if x > 1 } at x = 1"
                ],
                hard: [
                    "Solve f(x) = 5 where f(x) = { x² if x < 2, 3x-1 if x ≥ 2 }",
                    "Write |3x-6| as piecewise function",
                    "Find range of f(x) = { x² if x ≤ 0, -x+1 if 0 < x ≤ 2, x-3 if x > 2 }"
                ]
            },
            byObjective: {
                canEvaluate: [
                    "f(3) where f(x) = { x² if x < 5, 2x if x ≥ 5 }",
                    "g(-2) where g(x) = { |x| if x < 0, x+1 if x ≥ 0 }",
                    "h(0) where h(x) = { x-1 if x ≤ 0, x+1 if x > 0 }"
                ],
                canGraph: [
                    "f(x) = { 2 if x < 0, x if x ≥ 0 }",
                    "g(x) = { -x if x ≤ 1, x-2 if x > 1 }",
                    "h(x) = { x² if x < 0, √x if x ≥ 0 }"
                ],
                canCheckContinuity: [
                    "f(x) = { x if x < 1, x² if x ≥ 1 } at x = 1",
                    "g(x) = { 2x if x ≤ 2, x+2 if x > 2 } at x = 2",
                    "h(x) = { x² if x < 0, -x² if x ≥ 0 } at x = 0"
                ],
                canFindDomainRange: [
                    "f(x) = { x if x ≠ 0, 1 if x = 0 }",
                    "g(x) = { x² if x ≤ 1, 2-x if x > 1 }",
                    "h(x) = { 1/x if x < 0, x if x ≥ 0 }"
                ],
                canSolve: [
                    "f(x) = 4 where f(x) = { x if x < 2, x² if x ≥ 2 }",
                    "g(x) = 0 where g(x) = { x+2 if x ≤ 0, x-2 if x > 0 }",
                    "h(x) = 1 where h(x) = { x² if x < 1, x if x ≥ 1 }"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "evaluate_at_point": "Check which condition contains x, use that piece's expression",
                "graph_function": "Graph each piece on its domain, mark endpoints appropriately",
                "check_continuity": "Find left limit, right limit, and f(a); compare all three",
                "find_domain": "Union of all pieces' domain intervals",
                "find_range": "Find range of each piece on its domain, take union",
                "solve_equation": "Solve in each piece, verify solutions are in correct domains",
                "convert_absolute_value": "Set inside ≥ 0 for positive piece, < 0 for negative piece"
            },
            whenToUseWhat: {
                substitution: "For evaluating piecewise function at specific points",
                graphing: "For visualizing behavior and understanding structure",
                limits: "For checking continuity and behavior at boundaries",
                case_analysis: "For solving equations or inequalities",
                domain_analysis: "For understanding where function is defined",
                algebraic_manipulation: "For transformations or operations"
            },
            methodSelection: {
                factorsToConsider: [
                    "Number of pieces in the function",
                    "Complexity of each piece's expression",
                    "Type of boundary conditions (< vs ≤)",
                    "Whether checking specific point or general behavior",
                    "Need for visualization vs symbolic answer"
                ],
                generalApproach: [
                    "1. Identify all pieces and their domains",
                    "2. Understand what the question asks",
                    "3. Determine which pieces are relevant",
                    "4. Apply appropriate technique to each piece",
                    "5. Combine results correctly",
                    "6. Verify answer makes sense"
                ]
            },
            optimizationTips: {
                "Organize pieces clearly": "Write each piece with its domain clearly labeled",
                "Check boundaries carefully": "Pay special attention to ≤ vs <",
                "Verify solutions": "Always check solutions are in correct domains",
                "Use graphs for understanding": "Visual representation helps catch errors",
                "Test specific values": "Plug in test points to verify work"
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
                        "f(3) where f(x) = { x if x < 5, 10 if x ≥ 5 }",
                        "g(-1) where g(x) = { -x if x < 0, x if x ≥ 0 }",
                        "h(0) where h(x) = { x+1 if x ≤ 0, x-1 if x > 0 }",
                        "k(2) where k(x) = { x² if x < 3, 2x if x ≥ 3 }",
                        "m(5) where m(x) = { x/2 if x < 4, x-2 if x ≥ 4 }"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Piecewise",
                    problem: "f(x) = { A·x if x < 2, B if x ≥ 2 }",
                    given: "f(1) = 3 and f(2) = 6",
                    solve: "Find A and B",
                    solution: "A = 3, B = 6"
                },
                {
                    name: "Continuity Designer",
                    problem: "Create f(x) = { x² if x < a, b·x + c if x ≥ a }",
                    constraint: "Make it continuous at x = 2",
                    solution: "a = 2, and 4 = 2b + c (infinitely many solutions)"
                },
                {
                    name: "Function Builder",
                    challenge: "Create a piecewise function with exactly 3 pieces that is continuous everywhere",
                    sampleSolution: "f(x) = { x if x ≤ 0, x² if 0 < x ≤ 1, 2x-1 if x > 1 } (not continuous, needs adjustment)"
                }
            ],
            applications: [
                {
                    scenario: "Progressive Tax",
                    problem: "Income tax is 10% for first $10,000, then 15% for amount over $10,000. Write as piecewise function and find tax on $25,000.",
                    equation: "T(x) = { 0.10x if x ≤ 10000, 1000 + 0.15(x-10000) if x > 10000 }",
                    solution: "T(25000) = 1000 + 0.15(15000) = $3,250"
                },
                {
                    scenario: "Shipping Cost",
                    problem: "Shipping is $5 for first pound, then $2 per additional pound. Find cost for 8 pounds.",
                    equation: "C(w) = { 5 if w ≤ 1, 5 + 2(w-1) if w > 1 }",
                    solution: "C(8) = 5 + 2(7) = $19"
                },
                {
                    scenario: "Parking Garage",
                    problem: "Parking costs $3/hour for first 2 hours, then $5/hour after that. Maximum $25 per day. Write function and find cost for 6 hours.",
                    equation: "P(h) = { 3h if h ≤ 2, 6 + 5(h-2) if 2 < h ≤ 5, 25 if h > 5 }",
                    solution: "P(6) = $25 (hits maximum)"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Evaluate f(2) where f(x) = { x² if x < 2, 2x if x ≥ 2 }",
                        "Since 2 < 2... (WAIT, 2 < 2 is FALSE!)",
                        "Use first piece: f(2) = 2² = 4",  // ERROR: should use second piece
                        "Answer: 4"
                    ],
                    correctAnswer: "4 (but got it by luck - used wrong piece!)",
                    errorType: "Used wrong piece (happens to give same answer here)"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Check continuity at x = 1 for f(x) = { x if x ≤ 1, x² if x > 1 }",
                        "f(1) = 1",  // Correct
                        "lim(x→1) f(x) = 1² = 1",  // ERROR: didn't check both sides separately
                        "Continuous"  // Wrong conclusion
                    ],
                    correctAnswer: "Discontinuous (right limit = 1, left limit = 1, but need to show both)",
                    errorType: "Actually continuous, but didn't show proper limit analysis"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Solve f(x) = 3 where f(x) = { x² if x < 2, x+1 if x ≥ 2 }",
                        "Piece 1: x² = 3, so x = √3 ≈ 1.73",
                        "Check: 1.73 < 2 ✓",
                        "Answer: x = √3"  // ERROR: forgot to check second piece
                    ],
                    correctAnswer: "x = √3 and x = 2",
                    errorType: "Stopped after finding first solution"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solvePiecewiseProblem(config) {
        const { definition, evaluation, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parsePiecewiseProblem(definition, evaluation, scenario, parameters, problemType, context);
            
            this.currentSolution = this.solvePiecewiseProblem_Internal(this.currentProblem);
            
            this.solutionSteps = this.generatePiecewiseSteps(this.currentProblem, this.currentSolution);
            
            this.generatePiecewiseGraphData();
            
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

    parsePiecewiseProblem(definition, evaluation = null, scenario = '', parameters = {}, problemType = null, context = {}) {
        if (problemType && this.piecewiseTypes[problemType]) {
            return {
                originalInput: definition || `${problemType} problem`,
                type: problemType,
                definition: definition,
                evaluation: evaluation,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect problem type
        const input = (definition + ' ' + scenario + ' ' + (evaluation || '')).toLowerCase();
        
        for (const [type, config] of Object.entries(this.piecewiseTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(input)) {
                    return {
                        originalInput: definition || scenario,
                        type: type,
                        definition: definition,
                        evaluation: evaluation,
                        scenario: scenario,
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default to evaluation if function definition and point provided
        if (definition && evaluation !== null) {
            return {
                originalInput: definition,
                type: 'evaluate_piecewise',
                definition: definition,
                evaluation: evaluation,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize piecewise problem type from input`);
    }

    solvePiecewiseProblem_Internal(problem) {
        const solver = this.piecewiseTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for piecewise problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // PIECEWISE FUNCTION SOLVERS

    evaluatePiecewise(problem) {
        const { definition, evaluation, parameters } = problem;
        
        // Parse piecewise function from definition
        const pieces = this.parsePiecewiseDefinition(definition, parameters);
        
        // Find which piece applies
        const xValue = evaluation !== null ? evaluation : (parameters.x || 0);
        const applicablePiece = this.findApplicablePiece(pieces, xValue);
        
        if (!applicablePiece) {
            return {
                type: 'Evaluation',
                x: xValue,
                result: undefined,
                message: `x = ${xValue} is not in the domain of this function`
            };
        }

        // Evaluate the expression
        const result = this.evaluateExpression(applicablePiece.expression, xValue);

        return {
            type: 'Piecewise Function Evaluation',
            function: definition,
            pieces: pieces,
            xValue: xValue,
            applicablePiece: applicablePiece,
            result: result,
            category: 'evaluation'
        };
    }

    parsePiecewiseDefinition(definition, parameters = {}) {
        // Handle provided pieces in parameters
        if (parameters.pieces && Array.isArray(parameters.pieces)) {
            return parameters.pieces;
        }

        // Simple parsing for common formats
        // This is a simplified parser - in practice, you'd want more robust parsing
        const pieces = [];
        
        // Example: "{ x^2 if x < 0, 2x if x >= 0 }"
        // For demonstration, return example pieces
        return [
            { expression: 'x^2', condition: 'x < 0', type: 'less_than', boundary: 0 },
            { expression: '2*x', condition: 'x >= 0', type: 'greater_equal', boundary: 0 }
        ];
    }

    findApplicablePiece(pieces, xValue) {
        for (const piece of pieces) {
            if (this.checkCondition(piece, xValue)) {
                return piece;
            }
        }
        return null;
    }

    checkCondition(piece, xValue) {
        const { type, boundary } = piece;
        
        switch(type) {
            case 'less_than':
                return xValue < boundary;
            case 'less_equal':
                return xValue <= boundary;
            case 'greater_than':
                return xValue > boundary;
            case 'greater_equal':
                return xValue >= boundary;
            case 'equal':
                return xValue === boundary;
            case 'between':
                return xValue >= piece.lower && xValue < piece.upper;
            case 'between_inclusive':
                return xValue >= piece.lower && xValue <= piece.upper;
            default:
                return false;
        }
    }

    evaluateExpression(expression, xValue) {
        try {
            // Replace x with actual value
            const expr = expression.replace(/x/g, `(${xValue})`);
            return math.evaluate(expr);
        } catch (error) {
            return `Error evaluating: ${error.message}`;
        }
    }

    graphPiecewise(problem) {
        const { definition, parameters } = problem;
        const pieces = this.parsePiecewiseDefinition(definition, parameters);

        return {
            type: 'Graph Piecewise Function',
            pieces: pieces,
            graphingInstructions: this.generateGraphingInstructions(pieces),
            category: 'graphing'
        };
    }

    generateGraphingInstructions(pieces) {
        return pieces.map((piece, index) => ({
            pieceNumber: index + 1,
            expression: piece.expression,
            domain: piece.condition,
            instructions: [
                `Graph y = ${piece.expression}`,
                `Restrict to domain: ${piece.condition}`,
                `Mark endpoint appropriately (open or closed circle)`
            ]
        }));
    }

    findDomainRange(problem) {
        const { definition, parameters } = problem;
        const pieces = this.parsePiecewiseDefinition(definition, parameters);

        const domain = this.findDomain(pieces);
        const range = this.findRange(pieces);

        return {
            type: 'Domain and Range',
            pieces: pieces,
            domain: domain,
            range: range,
            category: 'domain_range'
        };
    }

    findDomain(pieces) {
        // Combine all domain intervals
        const intervals = pieces.map(piece => this.getDomainInterval(piece));
        return {
            intervals: intervals,
            description: this.describeDomain(intervals),
            isAllReals: this.checkIfAllReals(intervals)
        };
    }

    getDomainInterval(piece) {
        const { type, boundary, lower, upper } = piece;
        
        switch(type) {
            case 'less_than':
                return { interval: `(-∞, ${boundary})`, lower: -Infinity, upper: boundary, upperInclusive: false };
            case 'less_equal':
                return { interval: `(-∞, ${boundary}]`, lower: -Infinity, upper: boundary, upperInclusive: true };
            case 'greater_than':
                return { interval: `(${boundary}, ∞)`, lower: boundary, upper: Infinity, lowerInclusive: false };
            case 'greater_equal':
                return { interval: `[${boundary}, ∞)`, lower: boundary, upper: Infinity, lowerInclusive: true };
            case 'between':
                return { interval: `[${lower}, ${upper})`, lower, upper, lowerInclusive: true, upperInclusive: false };
            case 'between_inclusive':
                return { interval: `[${lower}, ${upper}]`, lower, upper, lowerInclusive: true, upperInclusive: true };
            default:
                return { interval: 'Unknown', lower: -Infinity, upper: Infinity };
        }
    }

    describeDomain(intervals) {
        if (intervals.length === 1) {
            return intervals[0].interval;
        }
        return intervals.map(int => int.interval).join(' ∪ ');
    }

    checkIfAllReals(intervals) {
        // Simplified check
        return intervals.length === 1 && 
               intervals[0].lower === -Infinity && 
               intervals[0].upper === Infinity;
    }

    findRange(pieces) {
        // This would require evaluating each piece on its domain
        // Simplified version
        return {
            description: 'Requires analysis of each piece on its domain',
            method: 'Find range of each piece, take union'
        };
    }

    checkContinuity(problem) {
        const { definition, parameters } = problem;
        const pieces = this.parsePiecewiseDefinition(definition, parameters);
        const boundaries = this.findBoundaries(pieces);

        const continuityChecks = boundaries.map(boundary => 
            this.checkContinuityAtPoint(pieces, boundary)
        );

        return {
            type: 'Continuity Check',
            pieces: pieces,
            boundaries: boundaries,
            continuityChecks: continuityChecks,
            overallContinuous: continuityChecks.every(check => check.continuous),
            category: 'continuity'
        };
    }

    findBoundaries(pieces) {
        const boundaries = new Set();
        pieces.forEach(piece => {
            if (piece.boundary !== undefined) boundaries.add(piece.boundary);
            if (piece.lower !== undefined) boundaries.add(piece.lower);
            if (piece.upper !== undefined) boundaries.add(piece.upper);
        });
        return Array.from(boundaries).sort((a, b) => a - b);
    }

    checkContinuityAtPoint(pieces, point) {
        const leftPiece = this.findPieceForSide(pieces, point, 'left');
        const rightPiece = this.findPieceForSide(pieces, point, 'right');
        const pointPiece = this.findApplicablePiece(pieces, point);

        let leftLimit = null, rightLimit = null, functionValue = null;

        if (leftPiece) {
            leftLimit = this.evaluateExpression(leftPiece.expression, point - 0.0001);
        }
        if (rightPiece) {
            rightLimit = this.evaluateExpression(rightPiece.expression, point + 0.0001);
        }
        if (pointPiece) {
            functionValue = this.evaluateExpression(pointPiece.expression, point);
        }

        const continuous = leftLimit !== null && 
                          rightLimit !== null && 
                          functionValue !== null &&
                          Math.abs(leftLimit - rightLimit) < 1e-10 &&
                          Math.abs(leftLimit - functionValue) < 1e-10;

        return {
            point: point,
            leftLimit: leftLimit,
            rightLimit: rightLimit,
            functionValue: functionValue,
            continuous: continuous,
            discontinuityType: this.identifyDiscontinuity(leftLimit, rightLimit, functionValue)
        };
    }

    findPieceForSide(pieces, point, side) {
        const testValue = side === 'left' ? point - 0.0001 : point + 0.0001;
        return this.findApplicablePiece(pieces, testValue);
    }

    identifyDiscontinuity(left, right, value) {
        if (left === null || right === null) return 'Not defined on one side';
        if (Math.abs(left - right) > 1e-10) return 'Jump discontinuity';
        if (value === null) return 'Removable (hole)';
        if (Math.abs(left - value) > 1e-10) return 'Removable (hole)';
        return 'Continuous';
    }

    findLimits(problem) {
        const { definition, parameters } = problem;
        const pieces = this.parsePiecewiseDefinition(definition, parameters);
        const point = parameters.point || parameters.a || 0;

        return {
            type: 'Limit Calculation',
            point: point,
            leftLimit: this.calculateOneSidedLimit(pieces, point, 'left'),
            rightLimit: this.calculateOneSidedLimit(pieces, point, 'right'),
            limitExists: this.checkLimitExists(pieces, point),
            category: 'limits'
        };
    }

    calculateOneSidedLimit(pieces, point, side) {
        const piece = this.findPieceForSide(pieces, point, side);
        if (!piece) return null;
        
        return {
            expression: piece.expression,
            value: this.evaluateExpression(piece.expression, point),
            notation: side === 'left' ? `lim(x→${point}⁻)` : `lim(x→${point}⁺)`
        };
    }

    checkLimitExists(pieces, point) {
        const left = this.calculateOneSidedLimit(pieces, point, 'left');
        const right = this.calculateOneSidedLimit(pieces, point, 'right');
        
        if (!left || !right) return false;
        return Math.abs(left.value - right.value) < 1e-10;
    }

    solveEquation(problem) {
        const { definition, parameters } = problem;
        const pieces = this.parsePiecewiseDefinition(definition, parameters);
        const targetValue = parameters.value || parameters.k || 0;

        const solutions = [];
        
        pieces.forEach((piece, index) => {
            const pieceSolutions = this.solveInPiece(piece, targetValue, index + 1);
            solutions.push(...pieceSolutions);
        });

        return {
            type: 'Solve Equation',
            equation: `f(x) = ${targetValue}`,
            pieces: pieces,
            solutions: solutions,
            validSolutions: solutions.filter(sol => sol.valid),
            category: 'solving'
        };
    }

    solveInPiece(piece, targetValue, pieceNumber) {
        // This is simplified - actual implementation would solve algebraically
        return [{
            pieceNumber: pieceNumber,
            piece: piece,
            equation: `${piece.expression} = ${targetValue}`,
            solution: 'Would solve algebraically',
            valid: false,
            reason: 'Simplified implementation - actual solver would compute this'
        }];
    }

    createFromDescription(problem) {
        return {
            type: 'Create Piecewise Function',
            description: problem.scenario,
            suggestedApproach: [
                'Identify different scenarios/conditions',
                'Determine boundary points',
                'Write expression for each scenario',
                'Specify domain conditions',
                'Verify completeness'
            ],
            category: 'creation'
        };
    }

    convertAbsoluteValue(problem) {
        const { definition, parameters } = problem;
        
        return {
            type: 'Convert Absolute Value to Piecewise',
            original: definition,
            approach: [
                'Identify expression inside absolute value',
                'Set expression ≥ 0 for boundary',
                'For x satisfying expression < 0: use negative of expression',
                'For x satisfying expression ≥ 0: use expression as is'
            ],
            category: 'conversion'
        };
    }

    handleStepFunction(problem) {
        return {
            type: 'Step Function',
            description: 'Step functions have constant values on intervals',
            commonTypes: {
                floor: '⌊x⌋ = greatest integer ≤ x',
                ceiling: '⌈x⌉ = least integer ≥ x',
                general: 'Constant values with jumps'
            },
            category: 'step_functions'
        };
    }

    transformPiecewise(problem) {
        return {
            type: 'Transform Piecewise Function',
            transformations: [
                'Vertical shift: add to each piece',
                'Horizontal shift: adjust x in expressions and conditions',
                'Vertical stretch: multiply each piece',
                'Horizontal stretch: adjust x in conditions'
            ],
            category: 'transformations'
        };
    }

    composePiecewise(problem) {
        return {
            type: 'Composition of Functions',
            approach: [
                'Evaluate inner function first',
                'Use result as input to outer function',
                'Track domains carefully'
            ],
            category: 'operations'
        };
    }

    findInverse(problem) {
        return {
            type: 'Inverse of Piecewise Function',
            approach: [
                'Check if function is one-to-one',
                'Find inverse of each piece',
                'Swap domain and range conditions',
                'Verify composition gives identity'
            ],
            category: 'inverse'
        };
    }

    // STEP GENERATION
    generatePiecewiseSteps(problem, solution) {
        let baseSteps = this.generateBasePiecewiseSteps(problem, solution);

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

    generateBasePiecewiseSteps(problem, solution) {
        const category = this.piecewiseTypes[problem.type]?.category;

        switch(category) {
            case 'evaluation':
                return this.generateEvaluationSteps(problem, solution);
            case 'graphing':
                return this.generateGraphingSteps(problem, solution);
            case 'continuity':
                return this.generateContinuitySteps(problem, solution);
            case 'domain_range':
                return this.generateDomainRangeSteps(problem, solution);
            case 'solving':
                return this.generateSolvingSteps(problem, solution);
            default:
                return this.generateGenericPiecewiseSteps(problem, solution);
        }
    }

    generateEvaluationSteps(problem, solution) {
        const steps = [];
        const { xValue, pieces, applicablePiece, result } = solution;

        steps.push({
            stepNumber: 1,
            step: 'Identify the function and point',
            description: `Evaluate f(${xValue})`,
            expression: problem.definition,
            reasoning: 'We need to find which piece of the function applies to this x-value',
            goalStatement: `Determine f(${xValue})`
        });

        steps.push({
            stepNumber: 2,
            step: 'List all pieces with their conditions',
            description: 'Identify each piece and its domain',
            pieces: pieces.map(p => ({
                expression: p.expression,
                condition: p.condition
            })),
            reasoning: 'Each piece applies only to specific x-values',
            visualHint: 'Check each condition against x = ' + xValue
        });

        steps.push({
            stepNumber: 3,
            step: 'Check which condition contains x = ' + xValue,
            description: `Test x = ${xValue} against each condition`,
            tests: pieces.map(p => ({
                condition: p.condition,
                satisfies: this.checkCondition(p, xValue),
                explanation: this.explainConditionCheck(p, xValue)
            })),
            applicablePiece: applicablePiece,
            reasoning: 'Only one piece will have a true condition'
        });

        steps.push({
            stepNumber: 4,
            step: 'Substitute into the applicable piece',
            description: `Use expression: ${applicablePiece.expression}`,
            substitution: `${applicablePiece.expression} where x = ${xValue}`,
            reasoning: 'Replace x with the given value',
            algebraicRule: 'Substitution'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate the result',
            description: 'Evaluate the expression',
            expression: `f(${xValue}) = ${result}`,
            finalAnswer: true,
            reasoning: 'This is the function value at the given point'
        });

        return steps;
    }

    generateGraphingSteps(problem, solution) {
        const steps = [];
        const { pieces, graphingInstructions } = solution;

        steps.push({
            stepNumber: 1,
            step: 'Identify all pieces',
            description: 'List each piece with its expression and domain',
            pieces: pieces.map(p => ({
                expression: p.expression,
                domain: p.condition
            })),
            reasoning: 'Understanding the structure helps us graph correctly',
            goalStatement: 'Graph each piece on its domain'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify boundary points',
            description: 'Find where pieces change',
            boundaries: this.findBoundaries(pieces),
            reasoning: 'Boundaries are where we need to be careful about open/closed circles',
            visualHint: 'Mark these points on the x-axis first'
        });

        graphingInstructions.forEach((instruction, index) => {
            steps.push({
                stepNumber: 3 + index,
                step: `Graph piece ${instruction.pieceNumber}`,
                description: instruction.instructions.join('; '),
                expression: instruction.expression,
                domain: instruction.domain,
                reasoning: 'Graph this piece only where it applies',
                visualHint: `Use ${this.getEndpointType(pieces[index])} for endpoints`
            });
        });

        steps.push({
            stepNumber: 3 + graphingInstructions.length,
            step: 'Verify and label',
            description: 'Check that graph matches function definition',
            checkList: [
                'Each piece graphed on correct domain',
                'Endpoints marked correctly (open/closed)',
                'No gaps where function is defined',
                'Jumps/holes clearly visible if discontinuous'
            ],
            finalAnswer: true
        });

        return steps;
    }

    generateContinuitySteps(problem, solution) {
        const steps = [];
        const { boundaries, continuityChecks, overallContinuous } = solution;

        steps.push({
            stepNumber: 1,
            step: 'Identify where to check continuity',
            description: 'Find all boundary points',
            boundaries: boundaries,
            reasoning: 'Continuity needs checking only where pieces meet',
            goalStatement: 'Check continuity at each boundary'
        });

        continuityChecks.forEach((check, index) => {
            steps.push({
                stepNumber: 2 + index * 3,
                step: `Find left-hand limit at x = ${check.point}`,
                description: `Calculate lim(x→${check.point}⁻) f(x)`,
                expression: check.leftLimit,
                reasoning: 'Use the piece that applies when x < ' + check.point,
                algebraicRule: 'Left-hand limit'
            });

            steps.push({
                stepNumber: 3 + index * 3,
                step: `Find right-hand limit at x = ${check.point}`,
                description: `Calculate lim(x→${check.point}⁺) f(x)`,
                expression: check.rightLimit,
                reasoning: 'Use the piece that applies when x > ' + check.point,
                algebraicRule: 'Right-hand limit'
            });

            steps.push({
                stepNumber: 4 + index * 3,
                step: `Evaluate f(${check.point})`,
                description: `Find the function value at x = ${check.point}`,
                expression: check.functionValue,
                comparison: {
                    leftLimit: check.leftLimit,
                    rightLimit: check.rightLimit,
                    functionValue: check.functionValue,
                    allEqual: check.continuous
                },
                reasoning: 'For continuity: left limit = right limit = f(a)',
                conclusion: check.continuous ? 'Continuous at this point' : `Discontinuous: ${check.discontinuityType}`
            });
        });

        steps.push({
            stepNumber: 2 + continuityChecks.length * 3,
            step: 'Overall conclusion',
            description: 'Summarize continuity of function',
            expression: overallContinuous ? 'Function is continuous everywhere' : 'Function has discontinuities',
            discontinuities: continuityChecks.filter(c => !c.continuous),
            finalAnswer: true
        });

        return steps;
    }

    generateDomainRangeSteps(problem, solution) {
        const steps = [];
        const { pieces, domain, range } = solution;

        steps.push({
            stepNumber: 1,
            step: 'Find domain of each piece',
            description: 'Identify the interval where each piece applies',
            piecesDomains: pieces.map(p => ({
                expression: p.expression,
                domain: this.getDomainInterval(p).interval
            })),
            reasoning: 'Each piece contributes to the overall domain',
            goalStatement: 'Combine all piece domains'
        });

        steps.push({
            stepNumber: 2,
            step: 'Combine domains',
            description: 'Take union of all intervals',
            individualDomains: domain.intervals.map(i => i.interval),
            combinedDomain: domain.description,
            reasoning: 'Function is defined wherever any piece is defined',
            algebraicRule: 'Set union'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find range of each piece on its domain',
            description: 'Determine output values for each piece',
            reasoning: 'Range depends on both the expression and its domain',
            method: range.method,
            visualHint: 'Graph helps visualize the range'
        });

        steps.push({
            stepNumber: 4,
            step: 'Combine ranges',
            description: 'Take union of all output sets',
            finalDomain: domain.description,
            finalRange: range.description,
            finalAnswer: true
        });

        return steps;
    }

    generateSolvingSteps(problem, solution) {
        const steps = [];
        const { equation, pieces, solutions, validSolutions } = solution;

        steps.push({
            stepNumber: 1,
            step: 'Set up equation in each piece',
            description: `Solve ${equation} in each piece separately`,
            equation: equation,
            pieces: pieces.map(p => p.expression),
            reasoning: 'Must check all pieces for solutions',
            goalStatement: 'Find all solutions and verify domains'
        });

        pieces.forEach((piece, index) => {
            steps.push({
                stepNumber: 2 + index * 2,
                step: `Solve in piece ${index + 1}`,
                description: `Set ${piece.expression} = ${solution.equation.split('=')[1].trim()}`,
                pieceExpression: piece.expression,
                pieceDomain: piece.condition,
                reasoning: 'Solve algebraically in this piece',
                solution: solutions[index]?.solution || 'No solution'
            });

            steps.push({
                stepNumber: 3 + index * 2,
                step: `Verify domain for piece ${index + 1}`,
                description: 'Check if solution satisfies piece\'s domain condition',
                pieceDomain: piece.condition,
                solution: solutions[index]?.solution,
                valid: solutions[index]?.valid,
                reasoning: 'Solution is valid only if in this piece\'s domain',
                errorPrevention: 'Solutions outside domain must be rejected'
            });
        });

        steps.push({
            stepNumber: 2 + pieces.length * 2,
            step: 'Collect valid solutions',
            description: 'List all solutions that passed domain verification',
            allSolutions: solutions.map(s => ({ solution: s.solution, valid: s.valid })),
            validSolutions: validSolutions.map(s => s.solution),
            finalAnswer: true,
            reasoning: 'These are all solutions to the equation'
        });

        return steps;
    }

    generateGenericPiecewiseSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Piecewise function problem',
            description: 'Work with the piecewise function as specified',
            problemType: solution.type,
            approach: solution.approach || solution.suggestedApproach,
            solution: solution
        }];
    }

    // HELPER METHODS

    explainConditionCheck(piece, xValue) {
        const { type, boundary } = piece;
        
        switch(type) {
            case 'less_than':
                return `Is ${xValue} < ${boundary}? ${xValue < boundary ? 'Yes' : 'No'}`;
            case 'less_equal':
                return `Is ${xValue} ≤ ${boundary}? ${xValue <= boundary ? 'Yes' : 'No'}`;
            case 'greater_than':
                return `Is ${xValue} > ${boundary}? ${xValue > boundary ? 'Yes' : 'No'}`;
            case 'greater_equal':
                return `Is ${xValue} ≥ ${boundary}? ${xValue >= boundary ? 'Yes' : 'No'}`;
            default:
                return 'Check condition';
        }
    }

    getEndpointType(piece) {
        const { type } = piece;
        if (type.includes('equal')) return 'closed circle';
        return 'open circle';
    }

    // ENHANCED EXPLANATION METHODS (adapted from linear workbook)

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
                prerequisiteSkills: this.identifyPrerequisitesPiecewise(step, problem.type),
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
            'Identify the function and point': 'We start by understanding what we need to find - the output when a specific value is input to a piecewise function.',
            'List all pieces with their conditions': 'A piecewise function has multiple rules, each applying to different input values. We need to know all the rules first.',
            'Check which condition contains x': 'Only one piece applies for any given input. We determine which by checking conditions.',
            'Substitute into the applicable piece': 'Once we know which rule applies, we use that rule just like a regular function.',
            'Calculate the result': 'Evaluating the expression gives us the final output value.',
            'Identify all pieces': 'Understanding the complete structure of the function is essential before graphing.',
            'Identify boundary points': 'Boundaries are where the function switches from one rule to another - critical for accurate graphing.',
            'Find left-hand limit': 'The left-hand limit tells us what value the function approaches from the left side.',
            'Find right-hand limit': 'The right-hand limit tells us what value the function approaches from the right side.',
            'Evaluate function value': 'We need to know the actual function value at the point, not just the limits.'
        };

        return conceptualExplanations[step.step] || 'This step helps us understand the piecewise function better.';
    }

    getProceduralExplanationPiecewise(step) {
        const procedural = {
            'Identify the function and point': '1. Write down the function\n2. Note the x-value to evaluate\n3. Prepare to check conditions',
            'List all pieces with their conditions': '1. List first piece and its condition\n2. List second piece and its condition\n3. Continue for all pieces',
            'Check which condition contains x': '1. Test x in first condition\n2. If true, use that piece; if false, continue\n3. Test next condition until finding true one',
            'Substitute into the applicable piece': '1. Take the expression from applicable piece\n2. Replace x with the given value\n3. Prepare to calculate',
            'Calculate the result': '1. Follow order of operations\n2. Simplify step by step\n3. State final answer'
        };

        return procedural[step.step] || 'Follow standard procedure for this step.';
    }

    getVisualExplanationPiecewise(step, problem) {
        const visual = {
            'Identify the function and point': 'Picture the number line with your x-value marked. The function will tell you how high to go at that point.',
            'List all pieces with their conditions': 'Imagine different colored sections on the number line, each with its own rule.',
            'Check which condition contains x': 'Find which colored section your x-value lands in - that section\'s rule applies.',
            'Graph piece': 'Draw the function for this rule, but only in its colored section, not outside it.',
            'Identify boundary points': 'Mark the points where the color changes - these are boundaries.',
            'Find left-hand limit': 'Approach the boundary from the left and see what height you reach.',
            'Find right-hand limit': 'Approach the boundary from the right and see what height you reach.'
        };

        return visual[step.step] || 'Visualize this step on a graph.';
    }

    getAlgebraicExplanationPiecewise(step) {
        const algebraic = {
            'Identify the function and point': 'Function notation f(a) means evaluate f at x = a',
            'Check which condition contains x': 'Test logical conditions using inequality properties',
            'Substitute into the applicable piece': 'Direct substitution property of functions',
            'Find left-hand limit': 'lim(x→a⁻) f(x) uses piece where x < a',
            'Find right-hand limit': 'lim(x→a⁺) f(x) uses piece where x > a',
            'Continuity check': 'Continuity definition: lim(x→a) f(x) = f(a)'
        };

        return algebraic[step.step] || 'Apply formal mathematical definitions.';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationPiecewise(step, problem),
                analogy: this.findRelevantAnalogyPiecewise(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description || ''),
                visualization: this.suggestVisualizationPiecewise(step)
            }
        }));
    }

    generateELI5ExplanationPiecewise(step, problem) {
        const ELI5Explanations = {
            'Identify the function and point': "We have a special function that's like a choose-your-own-adventure book! It does different things depending on what number you give it.",
            'List all pieces with their conditions': "Let's look at all the different adventures (pieces) the function can go on. Each adventure happens for certain numbers!",
            'Check which condition contains x': "Now we check which adventure our number gets to go on. It's like checking which room you're allowed in!",
            'Substitute into the applicable piece': "We found the right adventure! Now we follow its rules and see what happens with our number.",
            'Calculate the result': "Let's do the math to find our final answer - like solving a little puzzle!",
            'Graph piece': "We're drawing a picture of this adventure, but only for the numbers that are allowed to use it!",
            'Identify boundary points': "These are the special spots where the function switches from one adventure to another - like doorways between rooms!",
            'Find left-hand limit': "We're tiptoeing up to the doorway from the left side and peeking to see what number we're getting close to.",
            'Find right-hand limit': "Now we're tiptoeing up from the right side to see what number we get close to from that direction."
        };

        return ELI5Explanations[step.step] || "We're taking another step in solving our piecewise function puzzle!";
    }

    findRelevantAnalogyPiecewise(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (step.step && step.step.toLowerCase().includes(key.toLowerCase())) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like following different sets of instructions depending on what you're doing!";
    }

    suggestVisualizationPiecewise(step) {
        const visualizations = {
            'Identify the function and point': 'Draw a number line and mark your x-value with a star',
            'List all pieces with their conditions': 'Draw boxes for each piece, label them with their rules',
            'Check which condition contains x': 'Color the box that contains your x-value',
            'Substitute into the applicable piece': 'Write the expression and circle where x goes',
            'Graph piece': 'Draw the curve for this piece, use different colors for different pieces',
            'Identify boundary points': 'Mark boundaries with vertical dotted lines',
            'Find left-hand limit': 'Draw an arrow approaching the boundary from the left',
            'Find right-hand limit': 'Draw an arrow approaching the boundary from the right'
        };

        return visualizations[step.step] || 'Draw a picture to show what\'s happening!';
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
                    reasoning: this.explainStepProgressionPiecewise(steps[i], steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgePiecewise(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.description}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: 'This follows logically from what we just learned',
            howItHelps: 'This brings us closer to our final answer'
        };
    }

    explainStepProgressionPiecewise(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving the problem`;
    }

    addErrorPrevention(step, problemType) {
        const category = this.piecewiseTypes[problemType]?.category || 'evaluation';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsPiecewise(step, problemType),
                checkPoints: this.generateCheckPointsPiecewise(step),
                warningFlags: this.identifyWarningFlagsPiecewise(step, problemType)
            }
        };
    }

    generatePreventionTipsPiecewise(step, problemType) {
        const tips = {
            'Check which condition contains x': [
                'Test x in ALL conditions to verify',
                'Remember ≤ includes the boundary, < excludes it',
                'Only ONE condition should be true'
            ],
            'Substitute into the applicable piece': [
                'Use the correct piece - double check!',
                'Replace ALL instances of x',
                'Follow order of operations carefully'
            ],
            'Graph piece': [
                'Restrict graph to piece\'s domain only',
                'Mark endpoints with correct circle type',
                'Don\'t extend beyond the domain'
            ],
            'Find left-hand limit': [
                'Use piece where x < boundary',
                'Approach from values less than boundary',
                'Check your arithmetic'
            ],
            'Find right-hand limit': [
                'Use piece where x > boundary',
                'Approach from values greater than boundary',
                'Must match piece selection'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check your work'];
    }

    generateCheckPointsPiecewise(step) {
        return [
            'Am I using the correct piece?',
            'Did I check the condition properly?',
            'Are my calculations correct?',
            'Does my answer make sense?'
        ];
    }

    identifyWarningFlagsPiecewise(step, problemType) {
        const warnings = {
            'Check which condition contains x': ['Confusing < with ≤', 'Testing only one condition', 'Boundary point confusion'],
            'Graph piece': ['Graphing outside domain', 'Wrong endpoint circles', 'Missing restrictions'],
            'Find left-hand limit': ['Using wrong piece', 'Approaching from wrong side', 'Arithmetic errors']
        };

        return warnings[step.step] || [];
    }

    addScaffolding(steps, problem) {
        return steps.map(step => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsPiecewise(step),
                hints: this.generateProgressiveHintsPiecewise(step, problem),
                subSteps: this.breakIntoSubStepsPiecewise(step)
            }
        }));
    }

    generateGuidingQuestionsPiecewise(step) {
        const questions = {
            'Identify the function and point': [
                'What are we trying to find?',
                'What x-value are we evaluating at?',
                'How many pieces does this function have?'
            ],
            'Check which condition contains x': [
                'What is our x-value?',
                'What are the boundary points?',
                'Which inequality does x satisfy?'
            ],
            'Graph piece': [
                'What is the expression for this piece?',
                'What is its domain?',
                'What type of circles do we need at endpoints?'
            ],
            'Find left-hand limit': [
                'Which piece applies when x < boundary?',
                'What expression do we evaluate?',
                'What value do we approach?'
            ]
        };

        return questions[step.step] || ['What is this step asking?', 'How do we proceed?'];
    }

    generateProgressiveHintsPiecewise(step, problem) {
        const category = this.piecewiseTypes[problem.type]?.category || 'evaluation';
        const hintSet = this.hints[category] || this.hints.evaluation;

        return {
            level1: hintSet.level1 || 'Think about what you need to find',
            level2: hintSet.level2 || 'Consider which piece applies',
            level3: hintSet.level3 || 'Follow the systematic procedure',
            level4: hintSet.level4 || 'Complete the calculation'
        };
    }

    breakIntoSubStepsPiecewise(step) {
        if (step.step === 'Check which condition contains x') {
            return [
                'Write down the x-value',
                'Write down first condition',
                'Test if x satisfies first condition',
                'If not, test next condition',
                'Identify which condition is true'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    identifyPrerequisitesPiecewise(step, problemType) {
        const category = this.piecewiseTypes[problemType]?.category || 'evaluation';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Function evaluation', 'Understanding conditions'];
    }

    identifyKeyVocabularyPiecewise(step) {
        const vocabulary = {
            'Identify the function and point': ['piecewise function', 'pieces', 'domain', 'evaluation'],
            'List all pieces with their conditions': ['piece', 'condition', 'domain', 'interval'],
            'Check which condition contains x': ['condition', 'satisfies', 'inequality', 'test'],
            'Substitute into the applicable piece': ['substitute', 'evaluate', 'expression'],
            'Graph piece': ['graph', 'domain', 'restriction', 'endpoint', 'open circle', 'closed circle'],
            'Find left-hand limit': ['limit', 'left-hand', 'approach', 'boundary'],
            'Find right-hand limit': ['limit', 'right-hand', 'approach', 'boundary'],
            'Continuity check': ['continuity', 'continuous', 'discontinuous', 'jump', 'hole']
        };

        return vocabulary[step.step] || ['piecewise', 'function', 'domain'];
    }

    generateThinkingPromptsPiecewise(step) {
        return {
            before: 'Before starting: What information do I have? What do I need to find?',
            during: 'As I work: Am I using the correct piece? Are my calculations correct?',
            after: 'After completing: Does my answer make sense? Should I verify?'
        };
    }

    generateSelfCheckQuestionPiecewise(step) {
        const questions = {
            'Check which condition contains x': 'Did I test x against the correct condition?',
            'Substitute into the applicable piece': 'Am I using the right piece\'s expression?',
            'Graph piece': 'Did I restrict the graph to the correct domain?',
            'Find left-hand limit': 'Did I use the piece for x < boundary?',
            'Find right-hand limit': 'Did I use the piece for x > boundary?'
        };

        return questions[step.step] || 'Is this step correct?';
    }

    findRealWorldConnectionPiecewise(step, problem) {
        return 'Piecewise functions model many real situations where rules change based on conditions, like tax brackets, shipping costs, or parking fees.';
    }

    convertToSimpleLanguage(text) {
        const simplifications = {
            'piecewise function': 'function with different rules for different inputs',
            'condition': 'rule about which numbers to use',
            'domain': 'allowed input values',
            'range': 'possible output values',
            'continuous': 'smooth with no jumps',
            'discontinuous': 'has jumps or breaks',
            'limit': 'value we get close to',
            'evaluate': 'find the answer',
            'substitute': 'replace x with a number'
        };

        let simple = text;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex}`,
            progression: 'We are making progress toward the solution',
            relationship: 'Each step follows logically from the previous'
        };
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const level = this.difficultyLevels[explanationLevel] || this.difficultyLevels.intermediate;
        
        return {
            adaptedDescription: this.adaptLanguageLevel(step.description || '', level),
            adaptedReasoning: this.adaptLanguageLevel(step.reasoning || '', level),
            complexityLevel: explanationLevel
        };
    }

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                'piecewise': 'split-up',
                'evaluate': 'find',
                'continuous': 'smooth',
                'limit': 'approaching value'
            },
            ELI5: {
                'piecewise function': 'function that has different rules for different numbers',
                'evaluate': 'figure out the answer',
                'continuous': 'smooth like a slide with no bumps',
                'limit': 'the number we get really close to'
            }
        };

        const levelAdaptation = adaptations[level.vocabulary] || {};
        let adaptedText = text;

        for (const [term, replacement] of Object.entries(levelAdaptation)) {
            const regex = new RegExp(`\\b${term}\\b`, 'gi');
            adaptedText = adaptedText.replace(regex, replacement);
        }

        return adaptedText;
    }

    // GRAPH GENERATION

    generatePiecewiseGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        
        if (type === 'graph_piecewise' || type === 'evaluate_piecewise') {
            this.graphData = this.generatePiecewiseGraph(this.currentProblem, this.currentSolution);
        }
    }

    generatePiecewiseGraph(problem, solution) {
        return {
            type: 'piecewise',
            pieces: solution.pieces || [],
            boundaries: this.findBoundaries(solution.pieces || []),
            description: 'Graph shows each piece on its domain with appropriate endpoint markers',
            graphType: 'piecewise_function',
            visualization: 'Multiple function pieces with domain restrictions'
        };
    }

    // WORKBOOK GENERATION

    generatePiecewiseWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSectionPiecewise(),
            this.createPrerequisiteSectionPiecewise(),
            this.createEnhancedStepsSectionPiecewise(),
            this.createPiecewiseLessonSection(),
            this.createSolutionSectionPiecewise(),
            this.createAnalysisSectionPiecewise(),
            this.createVerificationSectionPiecewise(),
            this.createRealWorldApplicationSectionPiecewise(),
            this.createPedagogicalNotesSectionPiecewise(),
            this.createAlternativeMethodsSectionPiecewise(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Piecewise Functions Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSectionPiecewise() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.piecewiseTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.piecewiseTypes[this.currentProblem.type]?.category || 'piecewise'],
            ['Definition', this.currentProblem.definition || 'Piecewise function problem'],
            ['Description', this.currentProblem.scenario || this.piecewiseTypes[this.currentProblem.type]?.description]
        ];

        if (this.currentProblem.evaluation !== null) {
            problemData.push(['Evaluate at', `x = ${this.currentProblem.evaluation}`]);
        }

        if (this.currentProblem.parameters && Object.keys(this.currentProblem.parameters).length > 0) {
            problemData.push(['', '']);
            problemData.push(['Parameters', '']);
            Object.entries(this.currentProblem.parameters).forEach(([key, value]) => {
                problemData.push([key, JSON.stringify(value)]);
            });
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSectionPiecewise() {
        if (!this.prerequisiteChecks) return null;

        const category = this.piecewiseTypes[this.currentProblem.type]?.category;
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

    createEnhancedStepsSectionPiecewise() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step) => {
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
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
                }
            }

            stepsData.push(['', '']);
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createPiecewiseLessonSection() {
        const { type } = this.currentProblem;
        const category = this.piecewiseTypes[type]?.category;

        const lessonKey = category ? Object.keys(this.lessons).find(key => key.includes(category)) : 'basic_piecewise';
        const lesson = this.lessons[lessonKey || 'basic_piecewise'];

        if (!lesson) return null;

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', ''],
            ...lesson.concepts.map(c => ['•', c]),
            ['', ''],
            ['Theory', lesson.theory]
        ];

        return {
            title: 'Piecewise Functions Lesson',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSectionPiecewise() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Solution Type', this.currentSolution.type]
        ];

        if (this.currentSolution.result !== undefined) {
            solutionData.push(['Result', this.currentSolution.result]);
        }

        if (this.currentSolution.domain) {
            solutionData.push(['Domain', this.currentSolution.domain.description]);
        }

        if (this.currentSolution.range) {
            solutionData.push(['Range', this.currentSolution.range.description]);
        }

        if (this.currentSolution.validSolutions) {
            solutionData.push(['Valid Solutions', this.currentSolution.validSolutions.map(s => s.solution).join(', ')]);
        }

        return {
            title: 'Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSectionPiecewise() {
        const analysisData = [
            ['Problem Type', this.currentSolution.type],
            ['Category', this.piecewiseTypes[this.currentProblem.type]?.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel]
        ];

        if (this.currentSolution.pieces) {
            analysisData.push(['Number of Pieces', this.currentSolution.pieces.length]);
        }

        return {
            title: 'Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSectionPiecewise() {
        if (!this.includeVerificationInSteps) return null;

        return {
            title: 'Verification',
            type: 'verification',
            data: [
                ['Verification', 'Check work by substituting back or testing conditions'],
                ['Method', 'Depends on problem type'],
                ['Importance', 'Ensures correctness and builds confidence']
            ]
        };
    }

    createRealWorldApplicationSectionPiecewise() {
        if (!this.includeRealWorldApplications) return null;

        const appData = [
            ['Real-World Applications', ''],
            ['', '']
        ];

        Object.entries(this.realWorldProblems).slice(0, 3).forEach(([key, app]) => {
            appData.push(['Scenario', app.scenario]);
            appData.push(['Context', app.context]);
            appData.push(['Real-World Use', app.realWorldUse]);
            appData.push(['', '']);
        });

        return {
            title: 'Real-World Applications',
            type: 'applications',
            data: appData
        };
    }

    createPedagogicalNotesSectionPiecewise() {
        if (!this.includePedagogicalNotes) return null;

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Focus', 'Understanding when different rules apply'],
                ['Common Challenges', 'Boundary conditions, piece selection, domain verification'],
                ['Teaching Strategies', 'Use real-world examples, visualize with graphs, practice condition checking'],
                ['Assessment', 'Check understanding of domain, piece selection, and evaluation']
            ]
        };
    }

    createAlternativeMethodsSectionPiecewise() {
        if (!this.includeAlternativeMethods) return null;

        return {
            title: 'Alternative Approaches',
            type: 'alternatives',
            data: [
                ['Primary Method', 'Systematic condition checking'],
                ['Alternative', 'Graphical approach for understanding'],
                ['Alternative', 'Table of values for specific evaluations'],
                ['Comparison', 'Systematic approach most reliable; visual aids understanding']
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

        problems.easy.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium Problems', '']);

        problems.medium.slice(0, 2).forEach((p, i) => {
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
export default EnhancedPiecewiseFunctionsMathematicalWorkbook;
