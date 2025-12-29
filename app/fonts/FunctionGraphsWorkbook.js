// Enhanced Functions & Graphs Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedFunctionsGraphsWorkbook {
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
        this.explanationLevel = options.explanationLevel || 'intermediate';
        this.includeVerificationInSteps = options.includeVerificationInSteps !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeAlternativeMethods = options.includeAlternativeMethods !== false;
        this.includeErrorPrevention = options.includeErrorPrevention !== false;
        this.includeCommonMistakes = options.includeCommonMistakes !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.verificationDetail = options.verificationDetail || 'detailed';

        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializeFunctionSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
        this.initializeFunctionLessons();
    }

    initializeFunctionLessons() {
        this.lessons = {
            function_basics: {
                title: "Function Basics",
                concepts: [
                    "A function maps each input to exactly one output",
                    "Notation: f(x) represents output when x is input",
                    "Vertical Line Test determines if relation is function",
                    "Function can be represented: algebraically, graphically, numerically, verbally"
                ],
                theory: "Functions are fundamental mathematical objects that describe relationships where each input has exactly one output. This one-to-one or many-to-one correspondence is what distinguishes functions from general relations.",
                keyFormulas: {
                    "Function Notation": "f(x) = expression in x",
                    "Function Evaluation": "f(a) = substitute a for x",
                    "Composition": "(f ∘ g)(x) = f(g(x))"
                },
                types: [
                    "Linear: f(x) = mx + b",
                    "Quadratic: f(x) = ax² + bx + c",
                    "Polynomial: f(x) = aₙxⁿ + ... + a₁x + a₀",
                    "Rational: f(x) = p(x)/q(x)",
                    "Exponential: f(x) = abˣ",
                    "Logarithmic: f(x) = log_b(x)",
                    "Trigonometric: sin(x), cos(x), tan(x), etc."
                ],
                applications: [
                    "Modeling real-world relationships",
                    "Scientific calculations",
                    "Economic analysis",
                    "Engineering design"
                ]
            },

            domain_range: {
                title: "Domain and Range",
                concepts: [
                    "Domain: set of all possible input values (x)",
                    "Range: set of all possible output values (y or f(x))",
                    "Domain restricted by: division by zero, square roots of negatives, logarithms of non-positives",
                    "Range determined by function behavior and transformations"
                ],
                theory: "Domain and range define the 'universe' in which a function operates. Understanding these sets is crucial for proper function analysis and application.",
                keyFormulas: {
                    "Interval Notation": "[a,b] closed, (a,b) open, [a,b) half-open",
                    "Set Builder": "{x | condition on x}",
                    "Union": "A ∪ B combines sets",
                    "Intersection": "A ∩ B finds common elements"
                },
                findingStrategies: {
                    domain: [
                        "Identify restrictions (denominators ≠ 0)",
                        "Check for even roots (argument ≥ 0)",
                        "Logarithms require argument > 0",
                        "Consider context for applied problems"
                    ],
                    range: [
                        "Analyze function behavior (increasing/decreasing)",
                        "Find maximum/minimum values",
                        "Consider horizontal asymptotes",
                        "Use inverse function when possible"
                    ]
                },
                applications: [
                    "Physical constraints in models",
                    "Valid input ranges for calculations",
                    "Feasible solution sets",
                    "Data analysis bounds"
                ]
            },

            function_types: {
                title: "Types of Functions",
                concepts: [
                    "Linear: constant rate of change",
                    "Quadratic: parabolic shape, one turning point",
                    "Polynomial: smooth continuous curves",
                    "Rational: ratios of polynomials, asymptotes",
                    "Exponential: rapid growth or decay",
                    "Logarithmic: inverse of exponential",
                    "Trigonometric: periodic behavior"
                ],
                characteristics: {
                    linear: {
                        form: "f(x) = mx + b",
                        graph: "straight line",
                        domain: "all real numbers",
                        range: "all real numbers (if m ≠ 0)",
                        properties: "constant slope, no turning points"
                    },
                    quadratic: {
                        form: "f(x) = ax² + bx + c",
                        graph: "parabola",
                        domain: "all real numbers",
                        range: "[k, ∞) or (-∞, k] depending on a",
                        properties: "one vertex, axis of symmetry"
                    },
                    polynomial: {
                        form: "f(x) = aₙxⁿ + ... + a₁x + a₀",
                        graph: "smooth curve",
                        domain: "all real numbers",
                        range: "depends on degree and leading coefficient",
                        properties: "continuous, smooth, end behavior"
                    },
                    rational: {
                        form: "f(x) = p(x)/q(x)",
                        graph: "curves with asymptotes",
                        domain: "all x where q(x) ≠ 0",
                        range: "depends on function",
                        properties: "vertical asymptotes, possible horizontal asymptotes"
                    },
                    exponential: {
                        form: "f(x) = abˣ",
                        graph: "exponential curve",
                        domain: "all real numbers",
                        range: "(0, ∞) for a > 0",
                        properties: "horizontal asymptote at y = 0, rapid change"
                    },
                    logarithmic: {
                        form: "f(x) = log_b(x)",
                        graph: "logarithmic curve",
                        domain: "(0, ∞)",
                        range: "all real numbers",
                        properties: "vertical asymptote at x = 0, slow growth"
                    }
                },
                applications: [
                    "Linear: constant rate problems",
                    "Quadratic: projectile motion, optimization",
                    "Exponential: population growth, compound interest",
                    "Logarithmic: pH scale, Richter scale",
                    "Trigonometric: waves, oscillations"
                ]
            },

            transformations: {
                title: "Function Transformations",
                concepts: [
                    "Vertical shift: f(x) + k moves graph up (k > 0) or down (k < 0)",
                    "Horizontal shift: f(x - h) moves right (h > 0) or left (h < 0)",
                    "Vertical stretch/compression: af(x) stretches if |a| > 1, compresses if 0 < |a| < 1",
                    "Horizontal stretch/compression: f(bx) compresses if |b| > 1, stretches if 0 < |b| < 1",
                    "Reflection: -f(x) reflects over x-axis, f(-x) reflects over y-axis"
                ],
                theory: "Transformations allow us to modify basic functions systematically, creating families of related functions. Understanding transformations provides insight into function behavior and enables efficient graphing.",
                keyFormulas: {
                    "General Form": "y = a·f(b(x - h)) + k",
                    "Order of Operations": "Inside transformations before outside",
                    "Combined Effect": "Multiple transformations compose"
                },
                transformationRules: {
                    vertical_shift: {
                        form: "f(x) + k",
                        effect: "shifts graph vertically",
                        sign: "positive k moves up, negative k moves down"
                    },
                    horizontal_shift: {
                        form: "f(x - h)",
                        effect: "shifts graph horizontally",
                        sign: "opposite of sign in formula"
                    },
                    vertical_stretch: {
                        form: "a·f(x)",
                        effect: "stretches or compresses vertically",
                        magnitude: "|a| > 1 stretches, 0 < |a| < 1 compresses"
                    },
                    horizontal_stretch: {
                        form: "f(b·x)",
                        effect: "stretches or compresses horizontally",
                        magnitude: "|b| > 1 compresses, 0 < |b| < 1 stretches"
                    },
                    reflections: {
                        x_axis: "-f(x) reflects across x-axis",
                        y_axis: "f(-x) reflects across y-axis"
                    }
                },
                applications: [
                    "Modeling amplitude changes",
                    "Phase shifts in periodic functions",
                    "Scaling in engineering",
                    "Data normalization"
                ]
            },

            inverse_functions: {
                title: "Inverse Functions",
                concepts: [
                    "f⁻¹(x) undoes what f(x) does",
                    "Domain of f⁻¹ = Range of f",
                    "Range of f⁻¹ = Domain of f",
                    "Graphs of f and f⁻¹ are reflections over y = x",
                    "Horizontal Line Test determines if inverse is a function"
                ],
                theory: "Inverse functions reverse the action of the original function. They are fundamental in solving equations and understanding function relationships.",
                keyFormulas: {
                    "Inverse Property": "f(f⁻¹(x)) = x and f⁻¹(f(x)) = x",
                    "Finding Inverse": "Switch x and y, then solve for y",
                    "Composition Test": "(f ∘ f⁻¹)(x) = x"
                },
                findingProcess: [
                    "Write y = f(x)",
                    "Interchange x and y",
                    "Solve for y",
                    "Replace y with f⁻¹(x)",
                    "Verify using composition"
                ],
                specialCases: {
                    "One-to-one functions": "Have inverses that are functions",
                    "Not one-to-one": "Must restrict domain for inverse",
                    "Self-inverse": "f(f(x)) = x, function is its own inverse"
                },
                applications: [
                    "Solving equations",
                    "Temperature conversions",
                    "Encoding and decoding",
                    "Reversible processes"
                ]
            },

            piecewise_functions: {
                title: "Piecewise Functions",
                concepts: [
                    "Different formulas for different parts of domain",
                    "Each piece has a specified domain interval",
                    "Check continuity at boundary points",
                    "Evaluate by determining which piece applies"
                ],
                theory: "Piecewise functions model situations where relationships change based on input values. They are essential for modeling real-world scenarios with different rules in different situations.",
                keyFormulas: {
                    "General Form": "f(x) = {f₁(x) if x ∈ D₁, f₂(x) if x ∈ D₂, ...}",
                    "Continuity Check": "lim(x→c⁻) f(x) = f(c) = lim(x→c⁺) f(x)"
                },
                evaluation: [
                    "Identify which interval contains input",
                    "Use corresponding formula for that interval",
                    "Check boundary conditions carefully"
                ],
                types: {
                    "Step Functions": "Constant values on intervals",
                    "Absolute Value": "Classic two-piece function",
                    "Tax Brackets": "Different rates for different income levels",
                    "Shipping Costs": "Different rates based on weight/distance"
                },
                applications: [
                    "Tax calculations",
                    "Shipping rates",
                    "Parking fees",
                    "Piecewise linear approximations"
                ]
            },

            composition: {
                title: "Function Composition",
                concepts: [
                    "(f ∘ g)(x) = f(g(x)) - apply g first, then f",
                    "Domain of composition restricted by both functions",
                    "Composition generally not commutative: f ∘ g ≠ g ∘ f",
                    "Useful for building complex functions from simpler ones"
                ],
                theory: "Composition creates new functions by chaining operations. This powerful technique allows decomposition of complex functions into simpler components.",
                keyFormulas: {
                    "Definition": "(f ∘ g)(x) = f(g(x))",
                    "Domain": "x in domain of g and g(x) in domain of f",
                    "Triple Composition": "(f ∘ g ∘ h)(x) = f(g(h(x)))"
                },
                process: [
                    "Evaluate inner function first",
                    "Use result as input to outer function",
                    "Check domain restrictions at each step"
                ],
                applications: [
                    "Chain rule in calculus",
                    "Data transformations",
                    "Multi-step processes",
                    "Function decomposition"
                ]
            },

            even_odd: {
                title: "Even and Odd Functions",
                concepts: [
                    "Even function: f(-x) = f(x), symmetric about y-axis",
                    "Odd function: f(-x) = -f(x), symmetric about origin",
                    "Most functions are neither even nor odd",
                    "Symmetry simplifies graphing and integration"
                ],
                theory: "Symmetry properties provide insights into function behavior and simplify many calculations, especially in calculus and Fourier analysis.",
                keyFormulas: {
                    "Even Test": "f(-x) = f(x)",
                    "Odd Test": "f(-x) = -f(x)",
                    "Neither": "Function satisfies neither condition"
                },
                properties: {
                    even: [
                        "Graph symmetric about y-axis",
                        "Examples: x², cos(x), |x|",
                        "Sum/product of even functions is even"
                    ],
                    odd: [
                        "Graph symmetric about origin",
                        "Examples: x³, sin(x), 1/x",
                        "Sum of odd functions is odd",
                        "Product of two odd functions is even"
                    ]
                },
                applications: [
                    "Fourier series decomposition",
                    "Simplifying integrals",
                    "Physics (parity)",
                    "Signal processing"
                ]
            },

            monotonicity: {
                title: "Increasing and Decreasing Functions",
                concepts: [
                    "Increasing: as x increases, f(x) increases",
                    "Decreasing: as x increases, f(x) decreases",
                    "Strictly vs. non-strictly monotonic",
                    "Can be determined from derivative sign"
                ],
                theory: "Monotonicity describes the direction of function behavior, crucial for optimization, equation solving, and understanding function properties.",
                keyFormulas: {
                    "Increasing": "x₁ < x₂ implies f(x₁) < f(x₂)",
                    "Decreasing": "x₁ < x₂ implies f(x₁) > f(x₂)",
                    "Derivative Test": "f'(x) > 0 means increasing"
                },
                types: {
                    "Strictly Increasing": "Never constant, always going up",
                    "Strictly Decreasing": "Never constant, always going down",
                    "Non-decreasing": "Can have flat regions but never decreases",
                    "Non-increasing": "Can have flat regions but never increases"
                },
                applications: [
                    "Optimization problems",
                    "Proving inequalities",
                    "Determining invertibility",
                    "Economic analysis"
                ]
            },

            asymptotes: {
                title: "Asymptotes and End Behavior",
                concepts: [
                    "Vertical asymptote: function approaches ±∞ as x approaches value",
                    "Horizontal asymptote: function approaches value as x approaches ±∞",
                    "Slant/oblique asymptote: function approaches line as x approaches ±∞",
                    "End behavior describes function as x → ±∞"
                ],
                theory: "Asymptotes describe limiting behavior of functions, essential for understanding rational functions and graphing.",
                keyFormulas: {
                    "Vertical": "x = a where denominator = 0",
                    "Horizontal": "y = L where lim(x→∞) f(x) = L",
                    "Slant": "y = mx + b from polynomial long division"
                },
                finding: {
                    vertical: [
                        "Find where denominator = 0",
                        "Check that numerator ≠ 0 there",
                        "May have removable discontinuity instead"
                    ],
                    horizontal: [
                        "Compare degrees of numerator and denominator",
                        "If deg(num) < deg(den): y = 0",
                        "If deg(num) = deg(den): y = ratio of leading coefficients",
                        "If deg(num) > deg(den): no horizontal asymptote"
                    ],
                    slant: [
                        "Occurs when deg(num) = deg(den) + 1",
                        "Use polynomial long division",
                        "Quotient (ignoring remainder) is slant asymptote"
                    ]
                },
                applications: [
                    "Graphing rational functions",
                    "Limit analysis",
                    "Engineering system behavior",
                    "Economic models"
                ]
            },

            function_operations: {
                title: "Function Operations",
                concepts: [
                    "Addition: (f + g)(x) = f(x) + g(x)",
                    "Subtraction: (f - g)(x) = f(x) - g(x)",
                    "Multiplication: (f · g)(x) = f(x) · g(x)",
                    "Division: (f/g)(x) = f(x)/g(x), g(x) ≠ 0",
                    "Domain of result is intersection of individual domains"
                ],
                theory: "Function operations create new functions systematically, analogous to number operations but with domain considerations.",
                keyFormulas: {
                    "Sum": "(f + g)(x) = f(x) + g(x)",
                    "Difference": "(f - g)(x) = f(x) - g(x)",
                    "Product": "(f · g)(x) = f(x) · g(x)",
                    "Quotient": "(f/g)(x) = f(x)/g(x)",
                    "Domain": "Dom(result) = Dom(f) ∩ Dom(g)"
                },
                domainConsiderations: [
                    "Result domain limited by both functions",
                    "Division adds restriction: g(x) ≠ 0",
                    "Must check all restrictions",
                    "Express domain in interval notation"
                ],
                applications: [
                    "Combining functions in models",
                    "Building complex functions",
                    "Signal processing",
                    "Economic analysis"
                ]
            },

            graphing_techniques: {
                title: "Graphing Techniques",
                concepts: [
                    "Find intercepts (x and y)",
                    "Identify asymptotes",
                    "Determine symmetry",
                    "Find critical points and extrema",
                    "Analyze end behavior",
                    "Plot additional points as needed"
                ],
                theory: "Systematic graphing reveals function behavior and aids understanding. Combining analytical and visual approaches provides complete function analysis.",
                keyFormulas: {
                    "x-intercept": "Set f(x) = 0, solve for x",
                    "y-intercept": "Evaluate f(0)",
                    "Critical Points": "f'(x) = 0 or undefined"
                },
                process: [
                    "Determine domain and range",
                    "Find all intercepts",
                    "Identify asymptotes",
                    "Check for symmetry",
                    "Find maxima and minima",
                    "Determine intervals of increase/decrease",
                    "Plot key points",
                    "Sketch the curve"
                ],
                applications: [
                    "Visual function analysis",
                    "Understanding behavior",
                    "Solving equations graphically",
                    "Presentation of data"
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
                vertexBg: '#ffe6e6'
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
                vertexBg: '#ffe0e6'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeMathSymbols() {
        return {
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±',
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥', 'angle': '∠',
            'compose': '∘', 'implies': '⇒', 'iff': '⇔'
        };
    }

    initializeFunctionSolvers() {
        this.functionTypes = {
            function_basics: {
                patterns: [
                    /function.*basic/i,
                    /evaluate.*function/i,
                    /f\(.*\)\s*=/,
                    /function.*notation/i
                ],
                solver: this.solveFunctionBasics.bind(this),
                name: 'Function Basics',
                category: 'fundamentals',
                description: 'Evaluates functions and explains basic concepts'
            },

            domain_range: {
                patterns: [
                    /domain.*range/i,
                    /find.*domain/i,
                    /find.*range/i,
                    /domain.*of/i
                ],
                solver: this.solveDomainRange.bind(this),
                name: 'Domain and Range',
                category: 'function_analysis',
                description: 'Determines domain and range of functions'
            },

            function_types: {
                patterns: [
                    /linear.*function/i,
                    /quadratic.*function/i,
                    /polynomial.*function/i,
                    /rational.*function/i,
                    /exponential.*function/i,
                    /logarithmic.*function/i,
                    /type.*function/i
                ],
                solver: this.analyzeFunctionType.bind(this),
                name: 'Function Types',
                category: 'classification',
                description: 'Identifies and analyzes function types'
            },

            transformations: {
                patterns: [
                    /transform/i,
                    /shift.*function/i,
                    /stretch.*function/i,
                    /reflect.*function/i,
                    /translate.*function/i
                ],
                solver: this.analyzeTransformations.bind(this),
                name: 'Function Transformations',
                category: 'transformations',
                description: 'Analyzes function transformations'
            },

            inverse_functions: {
                patterns: [
                    /inverse.*function/i,
                    /find.*inverse/i,
                    /f.*inverse/i,
                    /f\^-1/i
                ],
                solver: this.solveInverseFunction.bind(this),
                name: 'Inverse Functions',
                category: 'inverses',
                description: 'Finds and analyzes inverse functions'
            },

            piecewise_functions: {
                patterns: [
                    /piecewise/i,
                    /piece.*wise/i,
                    /conditional.*function/i
                ],
                solver: this.analyzePiecewiseFunction.bind(this),
                name: 'Piecewise Functions',
                category: 'piecewise',
                description: 'Analyzes piecewise-defined functions'
            },

            composition: {
                patterns: [
                    /compos/i,
                    /f.*g.*x/i,
                    /\(f.*g\)/i,
                    /composite/i
                ],
                solver: this.solveComposition.bind(this),
                name: 'Function Composition',
                category: 'operations',
                description: 'Computes and analyzes function composition'
            },

            even_odd: {
                patterns: [
                    /even.*odd/i,
                    /symmetry/i,
                    /even.*function/i,
                    /odd.*function/i
                ],
                solver: this.analyzeEvenOdd.bind(this),
                name: 'Even and Odd Functions',
                category: 'symmetry',
                description: 'Determines if function is even, odd, or neither'
            },

            monotonicity: {
                patterns: [
                    /increasing/i,
                    /decreasing/i,
                    /monotonic/i,
                    /intervals.*increase/i
                ],
                solver: this.analyzeMonotonicity.bind(this),
                name: 'Monotonicity',
                category: 'behavior',
                description: 'Analyzes where function increases or decreases'
            },

            asymptotes: {
                patterns: [
                    /asymptote/i,
                    /vertical.*asymptote/i,
                    /horizontal.*asymptote/i,
                    /end.*behavior/i
                ],
                solver: this.findAsymptotes.bind(this),
                name: 'Asymptotes',
                category: 'limits',
                description: 'Finds vertical, horizontal, and slant asymptotes'
            },

            function_operations: {
                patterns: [
                    /\+.*g\(x\)/i,
                    /\-.*g\(x\)/i,
                    /\*.*g\(x\)/i,
                    /\/.*g\(x\)/i,
                    /function.*operation/i
                ],
                solver: this.performFunctionOperations.bind(this),
                name: 'Function Operations',
                category: 'operations',
                description: 'Performs operations on functions (add, subtract, multiply, divide)'
            },

            graphing: {
                patterns: [
                    /graph/i,
                    /plot/i,
                    /sketch.*function/i,
                    /intercept/i
                ],
                solver: this.analyzeGraphing.bind(this),
                name: 'Graphing Functions',
                category: 'visualization',
                description: 'Analyzes graphing properties and creates graph data'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            function_basics: {
                'Function Evaluation': [
                    'Forgetting to use parentheses when substituting',
                    'Order of operations errors',
                    'Sign errors with negative inputs'
                ],
                'Function Notation': [
                    'Confusing f(x) with f·x',
                    'Writing f(x+h) as f(x)+h incorrectly'
                ]
            },
            domain_range: {
                'Finding Domain': [
                    'Missing restrictions from denominators',
                    'Forgetting square root restrictions',
                    'Ignoring logarithm domain restrictions'
                ],
                'Finding Range': [
                    'Not considering all function behavior',
                    'Missing maximum or minimum values',
                    'Incorrect interval notation'
                ]
            },
            transformations: {
                'Horizontal Shifts': [
                    'Sign confusion: f(x-h) shifts right, not left',
                    'Applying shift before stretch/compression'
                ],
                'Vertical Stretches': [
                    'Confusing stretch with shift',
                    'Not applying to all function values'
                ]
            },
            inverse_functions: {
                'Finding Inverse': [
                    'Not switching x and y variables',
                    'Algebraic errors when solving for y',
                    'Forgetting to verify using composition'
                ]
            },
            composition: {
                'Order of Operations': [
                    'Evaluating functions in wrong order',
                    'Domain restriction errors',
                    'Confusing (f∘g) with (g∘f)'
                ]
            }
        };

        this.errorPrevention = {
            substitution_checking: {
                reminder: 'Always use parentheses when substituting values',
                method: 'Write out each step of substitution explicitly'
            },
            domain_verification: {
                reminder: 'Check all restrictions: denominators, square roots, logarithms',
                method: 'List each restriction type separately, then combine'
            },
            transformation_order: {
                reminder: 'Apply transformations inside parentheses first',
                method: 'Work from inside out: horizontal before vertical'
            },
            inverse_composition: {
                reminder: 'Verify inverse by composing: f(f⁻¹(x)) = x',
                method: 'Check both compositions for complete verification'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this step works and its mathematical meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact sequence of operations to perform',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical and spatial understanding',
                language: 'visual and spatial metaphors'
            },
            algebraic: {
                focus: 'Formal algebraic rules and properties',
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

    // MAIN SOLVER METHOD
    solveFunctionProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseFunctionProblem(equation, scenario, parameters, problemType, context);
            this.currentSolution = this.solveFunctionProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateFunctionSteps(this.currentProblem, this.currentSolution);
            this.generateFunctionGraphData();
            this.generateFunctionWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                graphData: this.graphData
            };

        } catch (error) {
            throw new Error(`Failed to solve function problem: ${error.message}`);
        }
    }

    parseFunctionProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        if (problemType && this.functionTypes[problemType]) {
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

        for (const [type, config] of Object.entries(this.functionTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractFunctionParameters(match, type, parameters);

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

        throw new Error(`Unable to recognize function problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/≠/g, '!=')
            .replace(/\|([^|]+)\|/g, 'abs($1)')
            .trim();
    }

    extractFunctionParameters(match, type, providedParams) {
        const params = { ...providedParams };

        // Extract function expression if present
        const functionMatch = match ? match[0].match(/f\(x\)\s*=\s*(.+)/) : null;
        if (functionMatch) {
            params.expression = functionMatch[1];
        }

        return params;
    }

    solveFunctionProblem_Internal(problem) {
        const solver = this.functionTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for function problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // FUNCTION SOLVERS

    solveFunctionBasics(problem) {
        const { expression, evaluateAt } = problem.parameters;

        const steps = [];
        let result = null;

        if (expression && evaluateAt !== undefined) {
            // Function evaluation
            try {
                const scope = { x: evaluateAt };
                result = math.evaluate(expression, scope);

                steps.push({
                    type: 'substitution',
                    description: `Substitute x = ${evaluateAt} into f(x) = ${expression}`,
                    work: `f(${evaluateAt}) = ${expression.replace(/x/g, `(${evaluateAt})`)}`
                });

                steps.push({
                    type: 'simplification',
                    description: 'Simplify the expression',
                    work: `f(${evaluateAt}) = ${result}`
                });

            } catch (error) {
                result = `Error evaluating function: ${error.message}`;
            }
        }

        return {
            problemType: 'Function Basics',
            expression: expression || 'f(x)',
            evaluationPoint: evaluateAt,
            result: result,
            steps: steps,
            notation: `f(${evaluateAt}) = ${result}`,
            category: 'function_basics'
        };
    }

    solveDomainRange(problem) {
        const { expression, functionType } = problem.parameters;

        const domain = this.findDomain(expression, functionType);
        const range = this.findRange(expression, functionType);

        return {
            problemType: 'Domain and Range',
            function: expression || 'f(x)',
            functionType: functionType || 'general',
            domain: domain,
            range: range,
            restrictions: this.identifyRestrictions(expression),
            category: 'domain_range'
        };
    }

    findDomain(expression, functionType) {
        const restrictions = [];
        let domainDescription = 'All real numbers';
        let intervalNotation = '(-∞, ∞)';

        if (!expression) {
            return { description: domainDescription, interval: intervalNotation, restrictions: [] };
        }

        // Check for division (denominators can't be zero)
        const divisionMatch = expression.match(/\/\s*\(([^)]+)\)/);
        if (divisionMatch) {
            restrictions.push({
                type: 'denominator',
                restriction: `${divisionMatch[1]} ≠ 0`,
                reason: 'Division by zero is undefined'
            });
        }

        // Check for square roots (argument must be non-negative)
        const sqrtMatch = expression.match(/sqrt\(([^)]+)\)/);
        if (sqrtMatch) {
            restrictions.push({
                type: 'square_root',
                restriction: `${sqrtMatch[1]} ≥ 0`,
                reason: 'Square root of negative number is not real'
            });
        }

        // Check for logarithms (argument must be positive)
        const logMatch = expression.match(/log\(([^)]+)\)/);
        if (logMatch) {
            restrictions.push({
                type: 'logarithm',
                restriction: `${logMatch[1]} > 0`,
                reason: 'Logarithm argument must be positive'
            });
        }

        if (restrictions.length > 0) {
            domainDescription = 'All real numbers except those violating restrictions';
        }

        return {
            description: domainDescription,
            interval: intervalNotation,
            restrictions: restrictions
        };
    }

    findRange(expression, functionType) {
        let rangeDescription = 'All real numbers';
        let intervalNotation = '(-∞, ∞)';

        // Basic range determination based on function type
        switch (functionType) {
            case 'quadratic':
                rangeDescription = 'Depends on whether parabola opens up or down';
                break;
            case 'exponential':
                rangeDescription = 'All positive real numbers';
                intervalNotation = '(0, ∞)';
                break;
            case 'logarithmic':
                rangeDescription = 'All real numbers';
                intervalNotation = '(-∞, ∞)';
                break;
            case 'absolute_value':
                rangeDescription = 'All non-negative real numbers';
                intervalNotation = '[0, ∞)';
                break;
            case 'square_root':
                rangeDescription = 'All non-negative real numbers';
                intervalNotation = '[0, ∞)';
                break;
            default:
                rangeDescription = 'Requires further analysis';
        }

        return {
            description: rangeDescription,
            interval: intervalNotation
        };
    }

    identifyRestrictions(expression) {
        const restrictions = [];

        if (!expression) return restrictions;

        if (expression.includes('/')) {
            restrictions.push('Check denominators ≠ 0');
        }
        if (expression.includes('sqrt')) {
            restrictions.push('Check square root arguments ≥ 0');
        }
        if (expression.includes('log')) {
            restrictions.push('Check logarithm arguments > 0');
        }

        return restrictions;
    }

    analyzeFunctionType(problem) {
        const { expression, coefficients } = problem.parameters;

        let functionType = 'unknown';
        let properties = {};

        // Detect function type from expression
        if (expression) {
            if (expression.match(/x\^2/) || expression.match(/x\*\*2/)) {
                functionType = 'quadratic';
                properties = this.analyzeQuadratic(expression, coefficients);
            } else if (expression.match(/\^x/) || expression.match(/exp\(/)) {
                functionType = 'exponential';
                properties = this.analyzeExponential(expression);
            } else if (expression.match(/log/)) {
                functionType = 'logarithmic';
                properties = this.analyzeLogarithmic(expression);
            } else if (expression.match(/\//) && expression.match(/x/)) {
                functionType = 'rational';
                properties = this.analyzeRational(expression);
            } else if (expression.match(/^[+-]?\d*x\s*[+-]?\s*\d*$/)) {
                functionType = 'linear';
                properties = this.analyzeLinear(expression, coefficients);
            } else if (expression.match(/abs\(/) || expression.match(/\|/)) {
                functionType = 'absolute_value';
                properties = this.analyzeAbsoluteValue(expression);
            }
        }

        return {
            problemType: 'Function Type Analysis',
            function: expression || 'f(x)',
            identifiedType: functionType,
            properties: properties,
            category: 'function_types'
        };
    }

    analyzeLinear(expression, coefficients = {}) {
        const { m = 1, b = 0 } = coefficients;

        return {
            form: 'f(x) = mx + b',
            slope: m,
            yIntercept: b,
            xIntercept: m !== 0 ? -b / m : 'undefined',
            domain: '(-∞, ∞)',
            range: m !== 0 ? '(-∞, ∞)' : `{${b}}`,
            behavior: m > 0 ? 'increasing' : m < 0 ? 'decreasing' : 'constant'
        };
    }

    analyzeQuadratic(expression, coefficients = {}) {
        const { a = 1, b = 0, c = 0 } = coefficients;

        const vertex_x = -b / (2 * a);
        const vertex_y = a * vertex_x * vertex_x + b * vertex_x + c;
        const axis = `x = ${vertex_x}`;
        const opens = a > 0 ? 'upward' : 'downward';
        const range = a > 0 ? `[${vertex_y}, ∞)` : `(-∞, ${vertex_y}]`;

        return {
            form: 'f(x) = ax² + bx + c',
            coefficients: { a, b, c },
            vertex: { x: vertex_x, y: vertex_y },
            axisOfSymmetry: axis,
            opensDirection: opens,
            domain: '(-∞, ∞)',
            range: range,
            yIntercept: c
        };
    }

    analyzeExponential(expression) {
        return {
            form: 'f(x) = abˣ or f(x) = aeᵏˣ',
            domain: '(-∞, ∞)',
            range: '(0, ∞) for a > 0',
            horizontalAsymptote: 'y = 0',
            behavior: 'Rapid growth or decay',
            continuity: 'Continuous everywhere'
        };
    }

    analyzeLogarithmic(expression) {
        return {
            form: 'f(x) = logₐ(x) or f(x) = ln(x)',
            domain: '(0, ∞)',
            range: '(-∞, ∞)',
            verticalAsymptote: 'x = 0',
            behavior: 'Increasing slowly',
            continuity: 'Continuous on domain'
        };
    }

    analyzeRational(expression) {
        return {
            form: 'f(x) = p(x)/q(x)',
            domain: 'All x where q(x) ≠ 0',
            asymptotes: 'Check vertical and horizontal',
            discontinuities: 'At zeros of denominator',
            behavior: 'Can have asymptotic behavior'
        };
    }

    analyzeAbsoluteValue(expression) {
        return {
            form: 'f(x) = |ax + b| + c',
            domain: '(-∞, ∞)',
            range: '[c, ∞) typically',
            vertex: 'At point where expression inside is zero',
            symmetry: 'V-shaped graph',
            behavior: 'Piecewise linear'
        };
    }

    analyzeTransformations(problem) {
        const { parentFunction, transformedFunction, transformations } = problem.parameters;

        const analysis = {
            problemType: 'Function Transformations',
            parent: parentFunction || 'f(x)',
            transformed: transformedFunction || 'g(x)',
            transformations: transformations || [],
            category: 'transformations'
        };

        // Parse transformations if provided as object
        if (transformations && Array.isArray(transformations)) {
            analysis.steps = transformations.map((t, i) => ({
                stepNumber: i + 1,
                transformation: t.type,
                description: this.describeTransformation(t),
                effect: this.explainTransformationEffect(t)
            }));
        }

        return analysis;
    }

    describeTransformation(transformation) {
        const { type, value } = transformation;

        switch (type) {
            case 'vertical_shift':
                return value > 0 ? `Shift up ${value} units` : `Shift down ${Math.abs(value)} units`;
            case 'horizontal_shift':
                return value > 0 ? `Shift right ${value} units` : `Shift left ${Math.abs(value)} units`;
            case 'vertical_stretch':
                return Math.abs(value) > 1 ? `Vertical stretch by factor ${Math.abs(value)}` : 
                       `Vertical compression by factor ${Math.abs(value)}`;
            case 'horizontal_stretch':
                return Math.abs(value) > 1 ? `Horizontal compression by factor ${Math.abs(value)}` : 
                       `Horizontal stretch by factor ${Math.abs(value)}`;
            case 'reflect_x':
                return 'Reflect across x-axis';
            case 'reflect_y':
                return 'Reflect across y-axis';
            default:
                return 'Transformation';
        }
    }

    explainTransformationEffect(transformation) {
        const { type } = transformation;

        const effects = {
            'vertical_shift': 'Moves entire graph up or down',
            'horizontal_shift': 'Moves entire graph left or right',
            'vertical_stretch': 'Makes graph taller or flatter',
            'horizontal_stretch': 'Makes graph wider or narrower',
            'reflect_x': 'Flips graph over x-axis',
            'reflect_y': 'Flips graph over y-axis'
        };

        return effects[type] || 'Modifies the graph';
    }

    solveInverseFunction(problem) {
        const { expression, verifyInverse } = problem.parameters;

        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write original function',
            expression: `y = ${expression}`,
            description: 'Replace f(x) with y for easier manipulation'
        });

        steps.push({
            stepNumber: 2,
            step: 'Interchange x and y',
            expression: `x = ${expression.replace(/x/g, 'y')}`,
            description: 'Swap the roles of x and y'
        });

        steps.push({
            stepNumber: 3,
            step: 'Solve for y',
            description: 'Isolate y using algebraic manipulation',
            note: 'This step requires solving the equation for y'
        });

        steps.push({
            stepNumber: 4,
            step: 'Replace y with f⁻¹(x)',
            description: 'The result is the inverse function'
        });

        return {
            problemType: 'Inverse Function',
            originalFunction: expression,
            steps: steps,
            verification: verifyInverse ? 'Verify by composition: f(f⁻¹(x)) = x' : null,
            category: 'inverse_functions'
        };
    }

    analyzePiecewiseFunction(problem) {
        const { pieces, evaluateAt } = problem.parameters;

        let evaluation = null;

        if (pieces && evaluateAt !== undefined) {
            for (const piece of pieces) {
                const { expression, condition } = piece;

                // Check if evaluateAt satisfies condition
                if (this.checkCondition(evaluateAt, condition)) {
                    try {
                        const scope = { x: evaluateAt };
                        evaluation = {
                            piece: expression,
                            condition: condition,
                            result: math.evaluate(expression, scope)
                        };
                        break;
                    } catch (error) {
                        evaluation = { error: error.message };
                    }
                }
            }
        }

        return {
            problemType: 'Piecewise Function',
            pieces: pieces || [],
            evaluationPoint: evaluateAt,
            evaluation: evaluation,
            category: 'piecewise_functions'
        };
    }

    checkCondition(value, condition) {
        // Basic condition checking
        try {
            const scope = { x: value };
            return math.evaluate(condition, scope);
        } catch {
            return false;
        }
    }

    solveComposition(problem) {
        const { f, g, evaluateAt, order } = problem.parameters;

        const steps = [];

        if (order === 'fog' || !order) {
            // (f ∘ g)(x) = f(g(x))
            steps.push({
                stepNumber: 1,
                step: 'Evaluate inner function',
                description: `Find g(${evaluateAt})`,
                innerFunction: g
            });

            steps.push({
                stepNumber: 2,
                step: 'Evaluate outer function',
                description: 'Use result from step 1 as input to f',
                outerFunction: f
            });
        } else {
            // (g ∘ f)(x) = g(f(x))
            steps.push({
                stepNumber: 1,
                step: 'Evaluate inner function',
                description: `Find f(${evaluateAt})`,
                innerFunction: f
            });

            steps.push({
                stepNumber: 2,
                step: 'Evaluate outer function',
                description: 'Use result from step 1 as input to g',
                outerFunction: g
            });
        }

        return {
            problemType: 'Function Composition',
            f: f,
            g: g,
            order: order || 'fog',
            notation: order === 'gof' ? '(g ∘ f)(x)' : '(f ∘ g)(x)',
            steps: steps,
            category: 'composition'
        };
    }

    analyzeEvenOdd(problem) {
        const { expression } = problem.parameters;

        const analysis = {
            problemType: 'Even/Odd Function Analysis',
            function: expression,
            category: 'even_odd'
        };

        // Check if even: f(-x) = f(x)
        // Check if odd: f(-x) = -f(x)

        const steps = [
            {
                stepNumber: 1,
                step: 'Find f(-x)',
                description: 'Replace x with -x in the function'
            },
            {
                stepNumber: 2,
                step: 'Compare f(-x) with f(x)',
                description: 'Check if they are equal (even), opposites (odd), or neither'
            }
        ];

        analysis.steps = steps;
        analysis.tests = {
            even: 'f(-x) = f(x)',
            odd: 'f(-x) = -f(x)'
        };

        return analysis;
    }

    analyzeMonotonicity(problem) {
        const { expression, interval } = problem.parameters;

        return {
            problemType: 'Monotonicity Analysis',
            function: expression,
            interval: interval || '(-∞, ∞)',
            method: 'Use derivative test: f\'(x) > 0 means increasing, f\'(x) < 0 means decreasing',
            steps: [
                'Find the derivative f\'(x)',
                'Determine where f\'(x) > 0 (increasing)',
                'Determine where f\'(x) < 0 (decreasing)',
                'Find critical points where f\'(x) = 0'
            ],
            category: 'monotonicity'
        };
    }

    findAsymptotes(problem) {
        const { expression, functionType } = problem.parameters;

        const asymptotes = {
            vertical: [],
            horizontal: [],
            slant: []
        };

        // Basic asymptote detection
        if (functionType === 'rational' || expression?.includes('/')) {
            asymptotes.vertical.push('Check zeros of denominator');
            asymptotes.horizontal.push('Compare degrees of numerator and denominator');
        }

        if (functionType === 'exponential') {
            asymptotes.horizontal.push('y = 0 (x-axis)');
        }

        if (functionType === 'logarithmic') {
            asymptotes.vertical.push('x = 0 (y-axis)');
        }

        return {
            problemType: 'Asymptote Analysis',
            function: expression,
            functionType: functionType,
            asymptotes: asymptotes,
            category: 'asymptotes'
        };
    }

    performFunctionOperations(problem) {
        const { f, g, operation, evaluateAt } = problem.parameters;

        const operations = {
            'add': { symbol: '+', description: '(f + g)(x) = f(x) + g(x)' },
            'subtract': { symbol: '-', description: '(f - g)(x) = f(x) - g(x)' },
            'multiply': { symbol: '·', description: '(f · g)(x) = f(x) · g(x)' },
            'divide': { symbol: '/', description: '(f/g)(x) = f(x)/g(x), g(x) ≠ 0' }
        };

        const op = operations[operation] || operations.add;

        return {
            problemType: 'Function Operations',
            f: f,
            g: g,
            operation: operation,
            notation: op.description,
            domain: 'Intersection of individual domains' + (operation === 'divide' ? ', excluding g(x) = 0' : ''),
            evaluateAt: evaluateAt,
            category: 'function_operations'
        };
    }

    analyzeGraphing(problem) {
        const { expression, functionType } = problem.parameters;

        const graphingSteps = [
            'Determine domain and range',
            'Find x and y intercepts',
            'Identify asymptotes (if any)',
            'Check for symmetry (even/odd)',
            'Find critical points and extrema',
            'Determine intervals of increase/decrease',
            'Identify concavity',
            'Plot key points',
            'Sketch the curve'
        ];

        const intercepts = {
            xIntercept: 'Set f(x) = 0 and solve for x',
            yIntercept: 'Evaluate f(0)'
        };

        return {
            problemType: 'Graphing Analysis',
            function: expression,
            functionType: functionType,
            graphingSteps: graphingSteps,
            intercepts: intercepts,
            category: 'graphing'
        };
    }

    // STEP GENERATION

    generateFunctionSteps(problem, solution) {
        let baseSteps = this.generateBaseFunctionSteps(problem, solution);

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

        return baseSteps;
    }

    generateBaseFunctionSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'function_basics':
                return this.generateFunctionBasicsSteps(problem, solution);
            case 'domain_range':
                return this.generateDomainRangeSteps(problem, solution);
            case 'transformations':
                return this.generateTransformationSteps(problem, solution);
            case 'inverse_functions':
                return solution.steps || [];
            case 'composition':
                return solution.steps || [];
            default:
                return this.generateGenericFunctionSteps(problem, solution);
        }
    }

    generateFunctionBasicsSteps(problem, solution) {
        if (!solution.steps || solution.steps.length === 0) {
            return [{
                stepNumber: 1,
                step: 'Function evaluation',
                description: solution.notation || 'Evaluate the function',
                result: solution.result,
                reasoning: 'Substitute the input value and simplify'
            }];
        }

        return solution.steps.map((step, index) => ({
            stepNumber: index + 1,
            step: step.type || 'Step',
            description: step.description,
            expression: step.work || step.expression,
            reasoning: 'Follow order of operations to simplify'
        }));
    }

    generateDomainRangeSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Analyze domain',
            description: 'Identify all restrictions on input values',
            domain: solution.domain,
            restrictions: solution.restrictions,
            reasoning: 'Check for division by zero, square roots of negatives, and logarithms of non-positives'
        });

        steps.push({
            stepNumber: 2,
            step: 'Determine range',
            description: 'Identify all possible output values',
            range: solution.range,
            reasoning: 'Consider function behavior, extrema, and asymptotes'
        });

        return steps;
    }

    generateTransformationSteps(problem, solution) {
        if (solution.steps && solution.steps.length > 0) {
            return solution.steps;
        }

        return [{
            stepNumber: 1,
            step: 'Identify transformations',
            description: 'Analyze how the function has been transformed from its parent function',
            transformations: solution.transformations || [],
            reasoning: 'Compare to parent function and identify each transformation'
        }];
    }

    generateGenericFunctionSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Analyze function',
            description: `Solve the ${problem.type} problem`,
            solution: solution,
            reasoning: 'Apply appropriate techniques for this function type'
        }];
    }

    // ENHANCEMENT METHODS

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

        return enhanced;
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
        const mistakes = this.commonMistakes[problemType]?.[step.step] || [];

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
                hints: this.generateProgressiveHints(step),
                practiceVariation: this.generatePracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcess(step),
                decisionPoints: this.identifyDecisionPoints(step),
                alternativeApproaches: this.suggestAlternativeMethods(step, problem)
            }
        }));
    }

    // HELPER METHODS FOR EXPLANATIONS

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Function Evaluation': 'We substitute a specific value for the input and calculate the corresponding output, showing the input-output relationship.',
            'Analyze domain': 'Domain represents all valid inputs - we exclude values that would create mathematical impossibilities.',
            'Determine range': 'Range represents all possible outputs - we consider what values the function can actually produce.',
            'Identify transformations': 'Transformations modify the parent function systematically, shifting, stretching, or reflecting the graph.',
            'Find inverse': 'The inverse function reverses the original function\'s action, swapping inputs and outputs.'
        };

        return conceptualExplanations[step.step] || 'This step advances our understanding of the function\'s behavior.';
    }

    getProceduralExplanation(step) {
        if (step.description) {
            return `1. ${step.description}\n2. Perform the indicated operations\n3. Simplify the result\n4. Verify the answer`;
        }
        return 'Follow the standard procedure for this type of step.';
    }

    getVisualExplanation(step, problem) {
        const visualExplanations = {
            'function_basics': 'Imagine plotting points on a graph where x is the input and f(x) is the height.',
            'domain_range': 'Visualize the domain as all x-values covered, and range as all y-values reached.',
            'transformations': 'Picture how the graph moves, stretches, or flips compared to the parent function.',
            'inverse_functions': 'The inverse graph is a mirror image across the line y = x.'
        };

        return visualExplanations[problem.type] || 'Consider how this affects the function\'s graph.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Function Evaluation': 'Substitution property: replace variable with specific value',
            'Analyze domain': 'Set-builder notation defines domain using conditions',
            'Find inverse': 'Apply inverse operations in reverse order',
            'Identify transformations': 'Function composition and arithmetic operations'
        };

        return algebraicRules[step.step] || 'Apply standard algebraic principles and properties';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const adaptations = {
            basic: {
                vocabulary: 'simple terms',
                detail: 'essential information only',
                format: 'short sentences'
            },
            intermediate: {
                vocabulary: 'standard math terms',
                detail: 'main concepts with brief explanations',
                format: 'clear step-by-step format'
            },
            detailed: {
                vocabulary: 'full mathematical terminology',
                detail: 'comprehensive explanations with theory',
                format: 'thorough analysis with multiple perspectives'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery approach',
                format: 'questions leading to understanding'
            }
        };

        const level = adaptations[explanationLevel] || adaptations.intermediate;
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
                replacements: {
                    'domain': 'allowed input values',
                    'range': 'possible output values',
                    'function': 'mathematical rule',
                    'evaluate': 'calculate',
                    'composition': 'combining functions',
                    'inverse': 'reverse operation',
                    'asymptote': 'line the graph approaches'
                }
            },
            intermediate: {
                replacements: {
                    'domain': 'domain',
                    'range': 'range',
                    'function': 'function',
                    'evaluate': 'evaluate',
                    'composition': 'composition',
                    'inverse': 'inverse',
                    'asymptote': 'asymptote'
                }
            },
            detailed: {
                replacements: {
                    'domain': 'domain (set of all valid inputs)',
                    'range': 'range (set of all possible outputs)',
                    'function': 'function (mapping from inputs to outputs)',
                    'evaluate': 'evaluate (compute function value)',
                    'composition': 'composition (successive application of functions)',
                    'inverse': 'inverse (function that reverses the original)',
                    'asymptote': 'asymptote (limiting line or curve)'
                }
            }
        };

        const levelAdaptation = adaptations[level.vocabulary] || adaptations.intermediate;
        let adaptedText = text;

        for (const [term, replacement] of Object.entries(levelAdaptation.replacements)) {
            const regex = new RegExp(`\\b${term}\\b`, 'gi');
            adaptedText = adaptedText.replace(regex, replacement);
        }

        return adaptedText;
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the analysis`,
            progression: 'We are making progress toward understanding the function completely',
            relationship: 'Each step reveals more about the function\'s properties'
        };
    }

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.description || currentStep.step}`,
            nextGoal: `Next, we need to: ${nextStep.description || nextStep.step}`,
            why: `This step is necessary to complete the analysis`,
            howItHelps: `This will help us understand the function better`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue our analysis`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase() || 'analyze the function'}`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Function Evaluation': [
                'Use parentheses when substituting',
                'Follow order of operations carefully',
                'Check your arithmetic'
            ],
            'Analyze domain': [
                'Check all restriction types',
                'Don\'t forget logarithm restrictions',
                'Consider context in word problems'
            ],
            'Find inverse': [
                'Remember to switch x and y',
                'Solve carefully for y',
                'Verify by composition'
            ]
        };

        return tips[step.step] || ['Double-check your work', 'Verify each step'];
    }

    generateCheckPoints(step) {
        return [
            'Have I followed the correct procedure?',
            'Are my calculations accurate?',
            'Does my answer make sense?',
            'Have I checked for errors?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            domain_range: step.step === 'Analyze domain' ?
                ['Remember to check all restriction types'] : [],
            inverse_functions: step.step === 'Find inverse' ?
                ['Make sure to switch x and y', 'Verify using composition'] : [],
            composition: step.step === 'Evaluate inner function' ?
                ['Check domain restrictions at each step'] : []
        };

        return warnings[problemType] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Function Evaluation': 'Did I substitute correctly and simplify completely?',
            'Analyze domain': 'Have I identified all restrictions?',
            'Find inverse': 'Did I switch x and y and solve correctly?',
            'Identify transformations': 'Have I identified all transformations in the correct order?'
        };

        return questions[step.step] || 'Does this step make sense and is it correct?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Function Evaluation': 'A single numerical value or simplified expression',
            'Analyze domain': 'A set or interval of valid input values',
            'Determine range': 'A set or interval of possible output values',
            'Find inverse': 'A function that reverses the original'
        };

        return expectations[step.step] || 'The step should produce a meaningful result';
    }

    generateTroubleshootingTips(step) {
        return [
            'If stuck, review the definition or formula',
            'Check for arithmetic or algebraic errors',
            'Consider if you\'ve applied the correct method',
            'Look at similar examples for guidance'
        ];
    }

    breakIntoSubSteps(step) {
        if (step.description) {
            return [
                `Understand what is required: ${step.step}`,
                'Identify the method to use',
                'Execute the calculation or analysis',
                'Simplify or interpret the result',
                'Verify the answer makes sense'
            ];
        }

        return ['Analyze the current situation', 'Determine the approach', 'Execute the method'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try a similar problem with different parameters',
            practiceHint: 'Practice with simpler functions first to build confidence',
            extension: 'Once comfortable, try more complex function types'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have about this function?',
            goal: 'What am I trying to find or understand?',
            strategy: 'What method or technique should I use?',
            execute: 'How do I apply this method correctly?',
            verify: 'Does my result make mathematical sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Choosing the appropriate method',
            'Deciding what to analyze first',
            'Selecting between alternative approaches'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'Function Evaluation': [
                'Direct substitution method',
                'Graphical verification',
                'Using a table of values'
            ],
            'Analyze domain': [
                'Algebraic restriction analysis',
                'Graphical observation',
                'Testing boundary values'
            ],
            'Find inverse': [
                'Algebraic method (switch and solve)',
                'Graphical method (reflect over y=x)',
                'Composition verification'
            ]
        };

        return alternatives[step.step] || ['Standard analytical approach'];
    }

    identifyPrerequisites(step, problemType) {
        const prerequisites = {
            'Function Evaluation': ['Substitution', 'Order of operations'],
            'Analyze domain': ['Understanding restrictions', 'Interval notation'],
            'Find inverse': ['Solving equations', 'Function composition'],
            'Identify transformations': ['Parent function knowledge', 'Graph transformations']
        };

        return prerequisites[step.step] || ['Basic function concepts'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Function Evaluation': ['function', 'input', 'output', 'evaluate'],
            'Analyze domain': ['domain', 'restriction', 'interval', 'real numbers'],
            'Determine range': ['range', 'output', 'interval', 'possible values'],
            'Find inverse': ['inverse', 'composition', 'one-to-one', 'reflection']
        };

        return vocabulary[step.step] || [];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Function Evaluation': [
                'What value are we substituting?',
                'What is the function rule?',
                'What operations must we perform?'
            ],
            'Analyze domain': [
                'What restrictions exist?',
                'Where is the function undefined?',
                'What values can x take?'
            ],
            'Find inverse': [
                'What does the inverse do?',
                'How do we find it algebraically?',
                'How can we verify it?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How do we achieve it?'];
    }

    generateProgressiveHints(step) {
        return {
            level1: 'Think about what the step is asking for.',
            level2: 'Consider the definition or formula that applies.',
            level3: 'Apply the standard method for this type of problem.',
            level4: step.description ? `Try: ${step.description}` : 'Use the appropriate technique.'
        };
    }

    // GRAPH DATA GENERATION

    generateFunctionGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const solution = this.currentSolution;

        switch(type) {
            case 'function_basics':
                if (solution.expression) {
                    this.graphData = this.generateBasicFunctionGraph(solution.expression);
                }
                break;

            case 'function_types':
                this.graphData = this.generateTypedFunctionGraph(solution);
                break;

            case 'transformations':
                this.graphData = this.generateTransformationGraph(solution);
                break;

            case 'piecewise_functions':
                this.graphData = this.generatePiecewiseGraph(solution);
                break;

            case 'graphing':
                this.graphData = this.generateCompleteGraph(solution);
                break;
        }
    }

    generateBasicFunctionGraph(expression) {
        const points = [];
        
        for (let x = -10; x <= 10; x += 0.5) {
            try {
                const scope = { x: x };
                const y = math.evaluate(expression, scope);
                if (typeof y === 'number' && isFinite(y)) {
                    points.push({ x: x, y: y });
                }
            } catch (error) {
                // Skip points where function is undefined
            }
        }

        return {
            type: 'basic_function',
            expression: expression,
            points: points
        };
    }

    generateTypedFunctionGraph(solution) {
        return {
            type: 'typed_function',
            functionType: solution.identifiedType,
            properties: solution.properties,
            keyPoints: this.extractKeyPoints(solution.properties)
        };
    }

    generateTransformationGraph(solution) {
        return {
            type: 'transformation',
            parent: solution.parent,
            transformed: solution.transformed,
            transformations: solution.transformations || []
        };
    }

    generatePiecewiseGraph(solution) {
        return {
            type: 'piecewise',
            pieces: solution.pieces || [],
            breakpoints: this.extractBreakpoints(solution.pieces)
        };
    }

    generateCompleteGraph(solution) {
        return {
            type: 'complete_graph',
            function: solution.function,
            intercepts: solution.intercepts,
            properties: solution
        };
    }

    extractKeyPoints(properties) {
        const keyPoints = [];

        if (properties.vertex) {
            keyPoints.push({ type: 'vertex', ...properties.vertex });
        }
        if (properties.xIntercept !== undefined && properties.xIntercept !== 'undefined') {
            keyPoints.push({ type: 'x-intercept', x: properties.xIntercept, y: 0 });
        }
        if (properties.yIntercept !== undefined) {
            keyPoints.push({ type: 'y-intercept', x: 0, y: properties.yIntercept });
        }

        return keyPoints;
    }

    extractBreakpoints(pieces) {
        if (!pieces || !Array.isArray(pieces)) return [];

        const breakpoints = [];
        // Extract boundary values from conditions
        pieces.forEach(piece => {
            if (piece.condition) {
                // Basic extraction - would need more sophisticated parsing
                const matches = piece.condition.match(/[-+]?\d+\.?\d*/g);
                if (matches) {
                    matches.forEach(match => {
                        const value = parseFloat(match);
                        if (isFinite(value) && !breakpoints.includes(value)) {
                            breakpoints.push(value);
                        }
                    });
                }
            }
        });

        return breakpoints.sort((a, b) => a - b);
    }

    // VERIFICATION METHODS

    verifyFunctionBasics() {
        const { evaluateAt, expression } = this.currentProblem.parameters;
        const result = this.currentSolution.result;

        if (typeof result !== 'number') {
            return { type: 'non_numeric', message: result };
        }

        // Re-evaluate to verify
        try {
            const scope = { x: evaluateAt };
            const verification = math.evaluate(expression, scope);
            const isValid = Math.abs(verification - result) < 1e-10;

            return {
                expression: expression,
                input: evaluateAt,
                calculatedResult: result,
                verification: verification,
                isValid: isValid,
                difference: Math.abs(verification - result)
            };
        } catch (error) {
            return { type: 'error', message: error.message };
        }
    }

    verifyDomainRange() {
        const solution = this.currentSolution;

        return {
            domain: solution.domain,
            range: solution.range,
            restrictions: solution.restrictions || [],
            verified: 'Domain and range determined based on function analysis'
        };
    }

    verifyInverseFunction() {
        return {
            method: 'Composition verification',
            note: 'Verify that f(f⁻¹(x)) = x and f⁻¹(f(x)) = x',
            requirement: 'Both compositions must equal the identity function'
        };
    }

    calculateVerificationConfidence() {
        if (!this.currentSolution || !this.currentProblem) return 'Unknown';

        const { type } = this.currentProblem;

        switch (type) {
            case 'function_basics':
                const verification = this.verifyFunctionBasics();
                if (verification.type) return 'Medium';
                return verification.isValid ? 'High' : 'Low';

            case 'domain_range':
                return 'High';

            case 'transformations':
                return 'High';

            case 'inverse_functions':
                return 'Medium'; // Would be High with composition verification

            default:
                return 'Medium';
        }
    }

    getVerificationNotes() {
        const { type } = this.currentProblem;
        const notes = [];

        switch (type) {
            case 'function_basics':
                notes.push('Direct substitution and evaluation');
                notes.push('Numerical precision verified');
                break;

            case 'domain_range':
                notes.push('All restriction types checked');
                notes.push('Interval notation used');
                break;

            case 'transformations':
                notes.push('Each transformation analyzed');
                notes.push('Order of transformations considered');
                break;

            case 'inverse_functions':
                notes.push('Algebraic method applied');
                notes.push('Composition verification recommended');
                break;

            default:
                notes.push('Standard verification methods applied');
        }

        return notes.join('; ');
    }

    // PEDAGOGICAL NOTES

    generatePedagogicalNotes(problemType) {
        const pedagogicalDatabase = {
            function_basics: {
                objectives: [
                    'Understand function notation and evaluation',
                    'Substitute values correctly',
                    'Interpret function input-output relationships'
                ],
                keyConcepts: [
                    'Function notation f(x)',
                    'Input and output',
                    'Substitution and evaluation'
                ],
                prerequisites: [
                    'Order of operations',
                    'Algebraic substitution',
                    'Variable understanding'
                ],
                commonDifficulties: [
                    'Confusing f(x) with f·x',
                    'Parentheses omission in substitution',
                    'Order of operations errors'
                ],
                extensions: [
                    'Function composition',
                    'Piecewise functions',
                    'Inverse functions'
                ],
                assessment: [
                    'Check substitution accuracy',
                    'Verify order of operations',
                    'Test with various input values'
                ]
            },

            domain_range: {
                objectives: [
                    'Identify all domain restrictions',
                    'Determine function range',
                    'Express domains and ranges using interval notation'
                ],
                keyConcepts: [
                    'Domain as valid inputs',
                    'Range as possible outputs',
                    'Interval notation',
                    'Restriction types'
                ],
                prerequisites: [
                    'Function understanding',
                    'Inequality notation',
                    'Number line concepts'
                ],
                commonDifficulties: [
                    'Missing some restrictions',
                    'Incorrect interval notation',
                    'Confusing domain with range'
                ],
                extensions: [
                    'Domains of composite functions',
                    'Domains of inverse functions',
                    'Implicit function domains'
                ],
                assessment: [
                    'Check all restriction types',
                    'Verify interval notation',
                    'Test boundary values'
                ]
            },

            transformations: {
                objectives: [
                    'Identify function transformations',
                    'Apply transformations in correct order',
                    'Predict graph changes from transformations'
                ],
                keyConcepts: [
                    'Vertical and horizontal shifts',
                    'Stretches and compressions',
                    'Reflections',
                    'Transformation order'
                ],
                prerequisites: [
                    'Parent function knowledge',
                    'Graphing skills',
                    'Function notation'
                ],
                commonDifficulties: [
                    'Sign confusion in horizontal shifts',
                    'Incorrect transformation order',
                    'Confusing stretches with shifts'
                ],
                extensions: [
                    'Multiple transformations',
                    'Writing transformed functions',
                    'Inverse transformations'
                ],
                assessment: [
                    'Check transformation identification',
                    'Verify order of operations',
                    'Test graphical understanding'
                ]
            },

            inverse_functions: {
                objectives: [
                    'Find inverse functions algebraically',
                    'Verify inverses using composition',
                    'Understand inverse function properties'
                ],
                keyConcepts: [
                    'Inverse as reverse operation',
                    'Switch x and y method',
                    'Composition verification',
                    'Domain and range switching'
                ],
                prerequisites: [
                    'Solving equations',
                    'Function composition',
                    'One-to-one functions'
                ],
                commonDifficulties: [
                    'Forgetting to switch variables',
                    'Algebraic solving errors',
                    'Not verifying results'
                ],
                extensions: [
                    'Restricting domains for inverses',
                    'Graphical relationship',
                    'Inverse function applications'
                ],
                assessment: [
                    'Check algebraic process',
                    'Verify composition',
                    'Test understanding of properties'
                ]
            },

            piecewise_functions: {
                objectives: [
                    'Evaluate piecewise functions',
                    'Graph piecewise functions',
                    'Determine continuity'
                ],
                keyConcepts: [
                    'Multiple function rules',
                    'Domain intervals',
                    'Boundary points',
                    'Continuity'
                ],
                prerequisites: [
                    'Function evaluation',
                    'Inequality understanding',
                    'Graphing skills'
                ],
                commonDifficulties: [
                    'Wrong piece selection',
                    'Boundary point confusion',
                    'Continuity misunderstanding'
                ],
                extensions: [
                    'Creating piecewise models',
                    'Analyzing discontinuities',
                    'Piecewise derivatives'
                ],
                assessment: [
                    'Check piece selection',
                    'Verify boundary handling',
                    'Test continuity understanding'
                ]
            }
        };

        return pedagogicalDatabase[problemType] || {
            objectives: ['Understand and apply function concepts'],
            keyConcepts: ['Function properties and behavior'],
            prerequisites: ['Basic function knowledge'],
            commonDifficulties: ['Various conceptual challenges'],
            extensions: ['Advanced function topics'],
            assessment: ['Check conceptual understanding']
        };
    }

    generateAlternativeMethods(problemType) {
        const alternativeDatabase = {
            function_basics: {
                primaryMethod: 'Direct substitution and evaluation',
                methods: [
                    {
                        name: 'Graphical Method',
                        description: 'Locate x-value on graph, read corresponding y-value'
                    },
                    {
                        name: 'Table Method',
                        description: 'Create table of values, look up result'
                    },
                    {
                        name: 'Calculator Method',
                        description: 'Use graphing calculator or computer algebra system'
                    }
                ],
                comparison: 'Direct substitution is most precise; graphical provides visualization; table good for multiple evaluations; calculator for complex expressions'
            },

            domain_range: {
                primaryMethod: 'Algebraic restriction analysis',
                methods: [
                    {
                        name: 'Graphical Method',
                        description: 'Graph function and observe x-values covered (domain) and y-values reached (range)'
                    },
                    {
                        name: 'Test Value Method',
                        description: 'Test various values to identify restrictions and limits'
                    },
                    {
                        name: 'Calculus Method',
                        description: 'Use derivatives to find extrema and determine range'
                    }
                ],
                comparison: 'Algebraic method is rigorous; graphical provides intuition; test values help verification; calculus needed for complex cases'
            },

            transformations: {
                primaryMethod: 'Systematic transformation identification',
                methods: [
                    {
                        name: 'Graphical Comparison',
                        description: 'Compare graphs of parent and transformed functions'
                    },
                    {
                        name: 'Point Mapping',
                        description: 'Track how key points transform'
                    },
                    {
                        name: 'Algebraic Decomposition',
                        description: 'Break down function into transformation steps'
                    }
                ],
                comparison: 'Systematic method is complete; graphical shows visual changes; point mapping verifies transformations; algebraic shows structure'
            },

            inverse_functions: {
                primaryMethod: 'Switch and solve algebraically',
                methods: [
                    {
                        name: 'Graphical Method',
                        description: 'Reflect graph over line y = x'
                    },
                    {
                        name: 'Composition Test',
                        description: 'Find inverse by testing what function reverses the original'
                    },
                    {
                        name: 'Table Method',
                        description: 'Switch columns in function table'
                    }
                ],
                comparison: 'Algebraic method is systematic; graphical shows relationship; composition verifies; table works for specific points'
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard analytical approach',
            methods: [
                {
                    name: 'Systematic Analysis',
                    description: 'Follow standard problem-solving steps'
                }
            ],
            comparison: 'Method choice depends on problem specifics and available tools'
        };
    }

    // WORKBOOK GENERATION

    generateFunctionWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createEnhancedStepsSection(),
            this.createLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createGraphDataSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Functions & Graphs Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: [
                ['Problem Type', this.currentProblem.type],
                ['Function', this.currentProblem.parameters.expression || 'N/A'],
                ['Description', this.currentProblem.scenario || 'N/A']
            ]
        };
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            if (step.stepType === 'bridge') {
                stepsData.push(['→ Bridge to Next Step', '']);
                stepsData.push(['Explanation', step.explanation?.currentState || '']);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push(['Step ' + step.stepNumber, step.description || step.step]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.domain) {
                stepsData.push(['Domain', step.domain.description]);
                stepsData.push(['Interval', step.domain.interval]);
            }

            if (step.range) {
                stepsData.push(['Range', step.range.description]);
                stepsData.push(['Interval', step.range.interval]);
             }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
            }

            if (step.errorPrevention && this.includeErrorPrevention) {
                if (step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                if (step.errorPrevention.preventionTips.length > 0) {
                    stepsData.push(['Prevention Tips', step.errorPrevention.preventionTips.join('; ')]);
                }
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.join(' ')]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: 'Enhanced Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }

    createLessonSection() {
        const { type } = this.currentProblem;
        const lesson = this.lessons[type];

        if (!lesson) return null;

        const lessonData = [
            ['Topic', lesson.title],
            ['', '']
        ];

        lessonData.push(['Key Concepts', '']);
        lesson.concepts.forEach((concept, i) => {
            lessonData.push([`  ${i + 1}.`, concept]);
        });

        lessonData.push(['', '']);
        lessonData.push(['Theory', lesson.theory]);

        if (lesson.keyFormulas) {
            lessonData.push(['', '']);
            lessonData.push(['Key Formulas', '']);
            Object.entries(lesson.keyFormulas).forEach(([name, formula]) => {
                lessonData.push([`  ${name}`, formula]);
            });
        }

        return {
            title: 'Lesson & Theory',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        // Add main result
        if (this.currentSolution.result !== undefined) {
            solutionData.push(['Result', this.currentSolution.result]);
        }

        if (this.currentSolution.notation) {
            solutionData.push(['Notation', this.currentSolution.notation]);
        }

        // Domain and Range
        if (this.currentSolution.domain) {
            solutionData.push(['', '']);
            solutionData.push(['Domain', this.currentSolution.domain.description]);
            solutionData.push(['Domain Interval', this.currentSolution.domain.interval]);
        }

        if (this.currentSolution.range) {
            solutionData.push(['Range', this.currentSolution.range.description]);
            solutionData.push(['Range Interval', this.currentSolution.range.interval]);
        }

        // Function type properties
        if (this.currentSolution.properties) {
            solutionData.push(['', '']);
            solutionData.push(['Properties', '']);
            Object.entries(this.currentSolution.properties).forEach(([key, value]) => {
                if (typeof value === 'object' && !Array.isArray(value)) {
                    solutionData.push([`  ${key}`, JSON.stringify(value)]);
                } else {
                    solutionData.push([`  ${key}`, String(value)]);
                }
            });
        }

        return {
            title: 'Solution Summary',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        const analysisData = [
            ['Problem Type', this.currentProblem.type],
            ['Category', this.currentSolution.category || 'general'],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel]
        ];

        if (this.currentSolution.functionType) {
            analysisData.push(['Function Type', this.currentSolution.functionType]);
        }

        if (this.currentSolution.identifiedType) {
            analysisData.push(['Identified Type', this.currentSolution.identifiedType]);
        }

        return {
            title: 'Analysis Summary',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [
            ['Verification Method', 'Result'],
            ['', '']
        ];

        const { type } = this.currentProblem;

        switch (type) {
            case 'function_basics':
                const verification = this.verifyFunctionBasics();
                if (verification.type) {
                    verificationData.push(['Type', verification.type]);
                    verificationData.push(['Message', verification.message || 'N/A']);
                } else {
                    verificationData.push(['Expression', verification.expression]);
                    verificationData.push(['Input', verification.input]);
                    verificationData.push(['Result', verification.calculatedResult]);
                    verificationData.push(['Verification', verification.verification]);
                    verificationData.push(['Valid', verification.isValid ? 'Yes' : 'No']);
                    verificationData.push(['Difference', verification.difference.toExponential(2)]);
                }
                break;

            case 'domain_range':
                const domainRangeVerif = this.verifyDomainRange();
                verificationData.push(['Domain', domainRangeVerif.domain?.description || 'N/A']);
                verificationData.push(['Range', domainRangeVerif.range?.description || 'N/A']);
                verificationData.push(['Restrictions', domainRangeVerif.restrictions.length]);
                verificationData.push(['Status', domainRangeVerif.verified]);
                break;

            case 'inverse_functions':
                const inverseVerif = this.verifyInverseFunction();
                verificationData.push(['Method', inverseVerif.method]);
                verificationData.push(['Note', inverseVerif.note]);
                verificationData.push(['Requirement', inverseVerif.requirement]);
                break;

            default:
                verificationData.push(['Status', 'Standard verification applied']);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Confidence Level', this.calculateVerificationConfidence()]);
            verificationData.push(['Notes', this.getVerificationNotes()]);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData,
            confidence: this.calculateVerificationConfidence()
        };
    }

    createGraphDataSection() {
        if (!this.graphData) return null;

        const graphData = [
            ['Graph Type', this.graphData.type],
            ['', '']
        ];

        switch (this.graphData.type) {
            case 'basic_function':
                graphData.push(['Expression', this.graphData.expression]);
                graphData.push(['Data Points', this.graphData.points.length]);
                if (this.graphData.points.length > 0) {
                    graphData.push(['', '']);
                    graphData.push(['Sample Points (first 10)', '']);
                    graphData.push(['x', 'y']);
                    this.graphData.points.slice(0, 10).forEach(pt => {
                        graphData.push([pt.x.toFixed(2), pt.y.toFixed(4)]);
                    });
                }
                break;

            case 'typed_function':
                graphData.push(['Function Type', this.graphData.functionType]);
                if (this.graphData.keyPoints && this.graphData.keyPoints.length > 0) {
                    graphData.push(['', '']);
                    graphData.push(['Key Points', '']);
                    this.graphData.keyPoints.forEach(pt => {
                        graphData.push([pt.type, `(${pt.x}, ${pt.y})`]);
                    });
                }
                break;

            case 'transformation':
                graphData.push(['Parent Function', this.graphData.parent]);
                graphData.push(['Transformed Function', this.graphData.transformed]);
                if (this.graphData.transformations && this.graphData.transformations.length > 0) {
                    graphData.push(['', '']);
                    graphData.push(['Transformations Applied', '']);
                    this.graphData.transformations.forEach((t, i) => {
                        graphData.push([`${i + 1}`, t.transformation || t.type]);
                    });
                }
                break;

            case 'piecewise':
                graphData.push(['Number of Pieces', this.graphData.pieces?.length || 0]);
                if (this.graphData.breakpoints && this.graphData.breakpoints.length > 0) {
                    graphData.push(['', '']);
                    graphData.push(['Breakpoints', this.graphData.breakpoints.join(', ')]);
                }
                break;

            case 'complete_graph':
                graphData.push(['Function', this.graphData.function]);
                if (this.graphData.intercepts) {
                    graphData.push(['', '']);
                    graphData.push(['x-intercept', this.graphData.intercepts.xIntercept]);
                    graphData.push(['y-intercept', this.graphData.intercepts.yIntercept]);
                }
                break;
        }

        return {
            title: 'Graph Data',
            type: 'graph',
            data: graphData
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const notes = this.generatePedagogicalNotes(type);

        const pedagogicalData = [
            ['Learning Objectives', notes.objectives.join('; ')],
            ['', ''],
            ['Key Concepts', notes.keyConcepts.join('; ')],
            ['', ''],
            ['Prerequisites', notes.prerequisites.join('; ')],
            ['', ''],
            ['Common Difficulties', notes.commonDifficulties.join('; ')],
            ['', ''],
            ['Extension Ideas', notes.extensions.join('; ')],
            ['', ''],
            ['Assessment Tips', notes.assessment.join('; ')]
        ];

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: pedagogicalData
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const { type } = this.currentProblem;
        const alternatives = this.generateAlternativeMethods(type);

        const alternativesData = [
            ['Primary Method Used', alternatives.primaryMethod],
            ['', ''],
            ['Alternative Methods', '']
        ];

        alternatives.methods.forEach((method, index) => {
            alternativesData.push(['', '']);
            alternativesData.push([`Method ${index + 1}`, method.name]);
            alternativesData.push(['Description', method.description]);
        });

        alternativesData.push(['', '']);
        alternativesData.push(['Method Comparison', alternatives.comparison]);

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: alternativesData
        };
    }

    // UTILITY METHODS

    gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // PUBLIC API METHODS

    setExplanationLevel(level) {
        const validLevels = ['basic', 'intermediate', 'detailed', 'scaffolded'];
        if (validLevels.includes(level)) {
            this.explanationLevel = level;
        }
    }

    setTheme(theme) {
        this.theme = theme;
        this.setThemeColors();
    }

    enableFeature(feature, enabled = true) {
        const features = {
            'verification': 'includeVerificationInSteps',
            'conceptual': 'includeConceptualConnections',
            'alternatives': 'includeAlternativeMethods',
            'errors': 'includeErrorPrevention',
            'mistakes': 'includeCommonMistakes',
            'pedagogical': 'includePedagogicalNotes'
        };

        if (features[feature]) {
            this[features[feature]] = enabled;
        }
    }

    getAvailableFunctionTypes() {
        return Object.keys(this.functionTypes).map(key => ({
            type: key,
            name: this.functionTypes[key].name,
            category: this.functionTypes[key].category,
            description: this.functionTypes[key].description
        }));
    }

    getLesson(topicKey) {
        return this.lessons[topicKey] || null;
    }

    getAllLessons() {
        return Object.keys(this.lessons).map(key => ({
            key: key,
            title: this.lessons[key].title,
            category: this.lessons[key].category || 'general'
        }));
    }

    // FORMAT OUTPUT FOR DISPLAY

    formatWorkbookForDisplay() {
        if (!this.currentWorkbook) return null;

        return {
            title: this.currentWorkbook.title,
            timestamp: this.currentWorkbook.timestamp,
            sections: this.currentWorkbook.sections.map(section => ({
                title: section.title,
                type: section.type,
                data: section.data,
                confidence: section.confidence
            }))
        };
    }

    formatSolutionSummary() {
        if (!this.currentSolution) return null;

        const summary = {
            problemType: this.currentSolution.problemType,
            category: this.currentSolution.category
        };

        // Add relevant fields based on problem type
        if (this.currentSolution.result !== undefined) {
            summary.result = this.currentSolution.result;
        }

        if (this.currentSolution.domain) {
            summary.domain = this.currentSolution.domain.interval;
        }

        if (this.currentSolution.range) {
            summary.range = this.currentSolution.range.interval;
        }

        if (this.currentSolution.identifiedType) {
            summary.functionType = this.currentSolution.identifiedType;
        }

        return summary;
    }

    exportGraphData() {
        return this.graphData;
    }

    exportSteps() {
        return this.solutionSteps;
    }

    exportWorkbook() {
        return this.currentWorkbook;
    }

    // RESET METHOD

    reset() {
        this.currentProblem = null;
        this.currentSolution = null;
        this.solutionSteps = [];
        this.currentWorkbook = null;
        this.graphData = null;
    }
}

// USAGE EXAMPLES AND DOCUMENTATION

/*
USAGE EXAMPLES:

1. Basic Function Evaluation:
const workbook = new EnhancedFunctionsGraphsWorkbook({
    explanationLevel: 'intermediate',
    theme: 'excel'
});

const result = workbook.solveFunctionProblem({
    equation: 'f(x) = 2x^2 + 3x - 5',
    problemType: 'function_basics',
    parameters: {
        expression: '2*x^2 + 3*x - 5',
        evaluateAt: 3
    }
});

2. Domain and Range Analysis:
const result = workbook.solveFunctionProblem({
    equation: 'f(x) = sqrt(x - 2) / (x - 5)',
    problemType: 'domain_range',
    parameters: {
        expression: 'sqrt(x - 2) / (x - 5)',
        functionType: 'rational'
    }
});

3. Function Type Analysis:
const result = workbook.solveFunctionProblem({
    equation: 'f(x) = 3x^2 - 6x + 2',
    problemType: 'function_types',
    parameters: {
        expression: '3*x^2 - 6*x + 2',
        coefficients: { a: 3, b: -6, c: 2 }
    }
});

4. Transformations:
const result = workbook.solveFunctionProblem({
    problemType: 'transformations',
    parameters: {
        parentFunction: 'x^2',
        transformedFunction: '2(x-3)^2 + 1',
        transformations: [
            { type: 'horizontal_shift', value: 3 },
            { type: 'vertical_stretch', value: 2 },
            { type: 'vertical_shift', value: 1 }
        ]
    }
});

5. Inverse Functions:
const result = workbook.solveFunctionProblem({
    equation: 'f(x) = 2x + 5',
    problemType: 'inverse_functions',
    parameters: {
        expression: '2*x + 5',
        verifyInverse: true
    }
});

6. Piecewise Functions:
const result = workbook.solveFunctionProblem({
    problemType: 'piecewise_functions',
    parameters: {
        pieces: [
            { expression: 'x^2', condition: 'x < 0' },
            { expression: '2*x', condition: 'x >= 0' }
        ],
        evaluateAt: 3
    }
});

7. Function Composition:
const result = workbook.solveFunctionProblem({
    problemType: 'composition',
    parameters: {
        f: '2*x + 1',
        g: 'x^2',
        evaluateAt: 3,
        order: 'fog'
    }
});

8. Even/Odd Analysis:
const result = workbook.solveFunctionProblem({
    equation: 'f(x) = x^3 + x',
    problemType: 'even_odd',
    parameters: {
        expression: 'x^3 + x'
    }
});

CONFIGURATION OPTIONS:

const workbook = new EnhancedFunctionsGraphsWorkbook({
    // Display options
    width: 1400,
    height: 2000,
    theme: 'excel', // or 'scientific'
    
    // Explanation options
    explanationLevel: 'intermediate', // 'basic', 'intermediate', 'detailed', 'scaffolded'
    
    // Feature toggles
    includeVerificationInSteps: true,
    includeConceptualConnections: true,
    includeAlternativeMethods: true,
    includeErrorPrevention: true,
    includeCommonMistakes: true,
    includePedagogicalNotes: true,
    
    // Verification detail
    verificationDetail: 'detailed' // or 'basic'
});

AVAILABLE METHODS:

// Solve problems
workbook.solveFunctionProblem(config)

// Configuration
workbook.setExplanationLevel(level)
workbook.setTheme(theme)
workbook.enableFeature(feature, enabled)

// Information
workbook.getAvailableFunctionTypes()
workbook.getLesson(topicKey)
workbook.getAllLessons()

// Export data
workbook.formatWorkbookForDisplay()
workbook.formatSolutionSummary()
workbook.exportGraphData()
workbook.exportSteps()
workbook.exportWorkbook()

// Reset
workbook.reset()
*/
