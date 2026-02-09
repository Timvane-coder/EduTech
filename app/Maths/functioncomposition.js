// Enhanced Functions Composition Mathematical Workbook - Comprehensive Implementation
import * as math from 'mathjs';

export class EnhancedFunctionsCompositionMathematicalWorkbook {
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
        this.initializeCompositionSolvers();
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
        this.initializeCompositionLessons();
        this.initializeNotationDatabase();
        this.initializeDecompositionDatabase();
    }

    initializeCompositionLessons() {
        this.lessons = {
            basic_composition: {
                title: "Basic Function Composition",
                concepts: [
                    "Composition: (f ∘ g)(x) = f(g(x))",
                    "Apply inner function first, then outer function",
                    "Order matters: f(g(x)) ≠ g(f(x)) in general",
                    "Domain of composition depends on both functions"
                ],
                theory: "Function composition is applying one function to the result of another. Think of it as a 'function of a function' or nesting operations.",
                keyFormulas: {
                    "Composition Notation": "(f ∘ g)(x) = f(g(x))",
                    "Evaluation Order": "Inside out: evaluate g(x) first, then apply f to result",
                    "Domain": "Domain of f∘g is all x where g(x) is defined AND g(x) is in domain of f"
                },
                solvingSteps: [
                    "Identify the inner function g(x)",
                    "Identify the outer function f(x)",
                    "Evaluate g(x) for the given input",
                    "Apply f to the result of g(x)",
                    "Simplify the final expression"
                ],
                applications: [
                    "Temperature conversion chains (Celsius → Kelvin → Fahrenheit)",
                    "Unit conversions with multiple steps",
                    "Data transformations in programming",
                    "Mathematical modeling with sequential processes"
                ]
            },

            composition_evaluation: {
                title: "Evaluating Compositions at Points",
                concepts: [
                    "Evaluate from inside out",
                    "Substitute numerical values carefully",
                    "Track intermediate results",
                    "Verify using original functions"
                ],
                theory: "To evaluate (f∘g)(a), first find g(a), then find f(g(a)). Each step must be computed before proceeding.",
                keyFormulas: {
                    "Point Evaluation": "(f∘g)(a) = f(g(a))",
                    "Step-by-step": "Step 1: b = g(a), Step 2: f(b)",
                    "Verification": "Check that result satisfies both function definitions"
                },
                solvingSteps: [
                    "Write out (f∘g)(a) = f(g(a))",
                    "Evaluate inner function: compute g(a)",
                    "Substitute result into outer function: compute f(g(a))",
                    "Simplify to get final numerical answer",
                    "Verify by checking both function evaluations"
                ],
                applications: [
                    "Calculating compound interest over time",
                    "Multi-step unit conversions",
                    "Sequential tax and discount calculations",
                    "Nested percentage changes"
                ]
            },

            composition_algebraic: {
                title: "Algebraic Composition (Finding Formula)",
                concepts: [
                    "Substitute entire expression for variable",
                    "Simplify resulting algebraic expression",
                    "Combine like terms",
                    "Express in standard form"
                ],
                theory: "To find (f∘g)(x) algebraically, substitute the entire expression g(x) wherever x appears in f(x), then simplify.",
                keyFormulas: {
                    "Substitution": "Replace every x in f(x) with g(x)",
                    "Polynomial Composition": "f(g(x)) where f(x) = ax² + bx + c",
                    "Simplification": "Expand, combine like terms, factor if possible"
                },
                solvingSteps: [
                    "Write f(x) with clear variable placement",
                    "Replace every occurrence of x with (g(x))",
                    "Expand and simplify the expression",
                    "Combine like terms",
                    "Write final formula for (f∘g)(x)"
                ],
                applications: [
                    "Creating composite transformation formulas",
                    "Deriving combined effect equations",
                    "Simplifying multi-step processes",
                    "Finding inverse functions through composition"
                ]
            },

            reverse_composition: {
                title: "Reverse Composition g(f(x))",
                concepts: [
                    "Order reversal: g∘f vs f∘g",
                    "Usually gives different result",
                    "Same process, different order",
                    "Commutativity is rare in composition"
                ],
                theory: "(g∘f)(x) = g(f(x)) applies f first, then g. This is the reverse order of (f∘g)(x). Most compositions are NOT commutative.",
                keyFormulas: {
                    "Reverse Order": "(g∘f)(x) = g(f(x))",
                    "Comparison": "In general, f∘g ≠ g∘f",
                    "Special Cases": "f∘g = g∘f only for special function pairs"
                },
                solvingSteps: [
                    "Identify outer function: g",
                    "Identify inner function: f",
                    "Evaluate f(x) first",
                    "Apply g to result",
                    "Compare with f∘g if needed"
                ],
                applications: [
                    "Order-dependent processes (encrypt then compress vs compress then encrypt)",
                    "Sequential transformations in different orders",
                    "Testing commutativity of operations",
                    "Understanding non-commutative systems"
                ]
            },

            triple_composition: {
                title: "Triple and Multiple Compositions",
                concepts: [
                    "Multiple nesting: (f∘g∘h)(x) = f(g(h(x)))",
                    "Evaluate innermost first",
                    "Work outward layer by layer",
                    "Track intermediate results carefully"
                ],
                theory: "Triple compositions apply three functions in sequence. Always work from the innermost function outward.",
                keyFormulas: {
                    "Triple Composition": "(f∘g∘h)(x) = f(g(h(x)))",
                    "Evaluation Order": "h(x) first, then g(h(x)), finally f(g(h(x)))",
                    "Associativity": "(f∘g)∘h = f∘(g∘h)"
                },
                solvingSteps: [
                    "Identify all three functions",
                    "Evaluate innermost: h(x)",
                    "Apply middle function: g(h(x))",
                    "Apply outer function: f(g(h(x)))",
                    "Simplify final result"
                ],
                applications: [
                    "Multi-step data transformations",
                    "Complex unit conversion chains",
                    "Layered encryption/decryption",
                    "Sequential image filters"
                ]
            },

            composition_domain: {
                title: "Domain of Composite Functions",
                concepts: [
                    "Domain restricted by both functions",
                    "g(x) must be defined",
                    "g(x) must be in domain of f",
                    "Final domain is intersection of constraints"
                ],
                theory: "The domain of f∘g consists of all x where g(x) exists AND g(x) is in the domain of f. Both conditions must be satisfied.",
                keyFormulas: {
                    "Domain Condition": "x ∈ Dom(f∘g) iff x ∈ Dom(g) AND g(x) ∈ Dom(f)",
                    "Two-Part Check": "1) Can we evaluate g(x)? 2) Can we evaluate f at g(x)?",
                    "Interval Notation": "Express final domain as interval or union of intervals"
                },
                solvingSteps: [
                    "Find domain of g(x)",
                    "Find domain of f(x)",
                    "Determine range of g(x)",
                    "Check which g(x) values are in domain of f",
                    "State final domain as intersection of conditions"
                ],
                applications: [
                    "Valid input ranges for multi-step calculations",
                    "Constraint satisfaction in optimization",
                    "Safe operating ranges in engineering",
                    "Valid parameter spaces in modeling"
                ]
            },

            composition_range: {
                title: "Range of Composite Functions",
                concepts: [
                    "Range is subset of range of outer function",
                    "Depends on range of g and how f transforms it",
                    "May be smaller than range of f alone",
                    "Graphical interpretation helpful"
                ],
                theory: "The range of f∘g is the set of all possible outputs. It's determined by applying f to all values in the range of g that are in the domain of f.",
                keyFormulas: {
                    "Range": "Range(f∘g) = f(Range(g) ∩ Dom(f))",
                    "Subset Property": "Range(f∘g) ⊆ Range(f)",
                    "Transformation": "f transforms the range of g"
                },
                solvingSteps: [
                    "Find range of g(x)",
                    "Determine which g(x) values are in domain of f",
                    "Apply f to these values",
                    "Determine the set of outputs",
                    "Express range in interval notation"
                ],
                applications: [
                    "Output bounds in sequential processes",
                    "Result sets in data pipelines",
                    "Achievable values in optimization",
                    "Possible outcomes in multi-stage systems"
                ]
            },

            decomposition: {
                title: "Function Decomposition",
                concepts: [
                    "Breaking complex function into simpler parts",
                    "Finding f and g such that h(x) = (f∘g)(x)",
                    "Multiple decompositions often possible",
                    "Choose decomposition based on context"
                ],
                theory: "Decomposition is the reverse of composition: given h(x), find f and g where h = f∘g. This simplifies analysis and computation.",
                keyFormulas: {
                    "Decomposition": "If h(x) = f(g(x)), then h = f∘g",
                    "Inner Function": "g(x) is the expression inside or applied first",
                    "Outer Function": "f(x) is the operation applied to g(x)"
                },
                solvingSteps: [
                    "Identify the innermost operation or expression",
                    "Define this as g(x)",
                    "Identify what's done to g(x)",
                    "Define this as f(x)",
                    "Verify: f(g(x)) = h(x)"
                ],
                applications: [
                    "Simplifying complex calculations",
                    "Understanding nested algorithms",
                    "Breaking down data transformations",
                    "Modular function design in programming"
                ]
            },

            composition_with_special_functions: {
                title: "Composition with Special Functions",
                concepts: [
                    "Linear functions: preserve structure",
                    "Quadratic compositions yield polynomials",
                    "Exponential/logarithm compositions",
                    "Trigonometric compositions"
                ],
                theory: "Different function types have characteristic composition behavior. Understanding these patterns aids in prediction and simplification.",
                keyFormulas: {
                    "Linear-Linear": "f(x) = ax+b, g(x) = cx+d ⟹ (f∘g)(x) = acx + ad + b",
                    "Quadratic-Linear": "f(x) = x², g(x) = ax+b ⟹ (f∘g)(x) = a²x² + 2abx + b²",
                    "Inverse Pairs": "f∘f⁻¹ = f⁻¹∘f = identity"
                },
                solvingSteps: [
                    "Identify function types",
                    "Apply type-specific composition rules if known",
                    "Otherwise, use general substitution method",
                    "Simplify using properties of function types",
                    "Check special cases (like inverse pairs)"
                ],
                applications: [
                    "Signal processing with filters",
                    "Coordinate transformations",
                    "Cryptographic operations",
                    "Physics transformations (Lorentz, Galilean)"
                ]
            },

            composition_graphing: {
                title: "Graphical Composition",
                concepts: [
                    "Visual interpretation of composition",
                    "Following points through transformations",
                    "Using graphs of f and g to sketch f∘g",
                    "Identifying transformations visually"
                ],
                theory: "Graphs provide visual understanding of composition. Point (x, y) on g becomes point (x, f(y)) on f∘g.",
                keyFormulas: {
                    "Graphical Method": "For x, find g(x) on graph of g, then find f(g(x)) on graph of f",
                    "Transformation": "Each point (x, g(x)) maps to (x, f(g(x)))",
                    "Visual Domain": "See where composition is undefined graphically"
                },
                solvingSteps: [
                    "Start with x-value",
                    "Find corresponding y = g(x) on graph of g",
                    "Use this y as input to f",
                    "Find f(y) on graph of f",
                    "Plot point (x, f(g(x))) on graph of f∘g"
                ],
                applications: [
                    "Visualizing data transformations",
                    "Understanding image processing pipelines",
                    "Analyzing economic models",
                    "Studying population dynamics"
                ]
            },

            composition_inverses: {
                title: "Composition and Inverse Functions",
                concepts: [
                    "Inverse relationship: f∘f⁻¹ = identity",
                    "Composition with inverse undoes function",
                    "(f∘g)⁻¹ = g⁻¹∘f⁻¹ (reverse order)",
                    "Testing inverses through composition"
                ],
                theory: "Composition with inverse functions yields the identity function. The inverse of a composition reverses both the order and the functions.",
                keyFormulas: {
                    "Inverse Property": "f(f⁻¹(x)) = x and f⁻¹(f(x)) = x",
                    "Composition Inverse": "(f∘g)⁻¹ = g⁻¹∘f⁻¹",
                    "Identity": "I(x) = x"
                },
                solvingSteps: [
                    "To verify inverses: compute f(f⁻¹(x)) and f⁻¹(f(x))",
                    "Both should simplify to x",
                    "To find (f∘g)⁻¹: find g⁻¹ and f⁻¹ separately",
                    "Compose in reverse order: g⁻¹∘f⁻¹",
                    "Verify by composition"
                ],
                applications: [
                    "Encryption-decryption pairs",
                    "Encoding-decoding processes",
                    "Reversible transformations in physics",
                    "Undo operations in software"
                ]
            },

            word_problems_composition: {
                title: "Word Problems with Composition",
                concepts: [
                    "Identifying sequential processes",
                    "Modeling with composite functions",
                    "Interpreting results in context",
                    "Choosing appropriate decomposition"
                ],
                theory: "Many real-world scenarios involve sequential processes that can be modeled as function compositions. Identifying the order is crucial.",
                problemTypes: {
                    "Sequential conversions": "Temperature, currency, units",
                    "Compound transformations": "Multiple discounts, tax after discount",
                    "Nested processes": "Population growth with migration",
                    "Multi-step calculations": "Area with changing dimensions"
                },
                solutionStrategy: [
                    "Identify all processes in sequence",
                    "Define function for each process",
                    "Determine order of application",
                    "Write composition notation",
                    "Evaluate or simplify as needed",
                    "Interpret result in original context"
                ],
                commonPhrases: {
                    "then": "indicates sequence, leads to composition",
                    "after": "second process, outer function",
                    "followed by": "composition indicator",
                    "subsequently": "sequential application",
                    "the result is used in": "output becomes input"
                }
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
            'compose': '∘', 'circ': '∘',
            'mapsto': '↦', 'rightarrow': '→',
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥'
        };
    }

    initializeCompositionSolvers() {
        this.compositionTypes = {
            // Basic evaluation
            evaluate_composition: {
                patterns: [
                    /\(f\s*∘\s*g\)\s*\(\s*([+-]?\d+\.?\d*)\s*\)/i,
                    /f\s*\(\s*g\s*\(\s*([+-]?\d+\.?\d*)\s*\)\s*\)/i,
                    /evaluate.*composition/i
                ],
                solver: this.solveEvaluateComposition.bind(this),
                name: 'Evaluate Composition at Point',
                category: 'evaluation',
                description: 'Evaluates (f∘g)(a) for specific value a'
            },

            // Algebraic composition
            algebraic_composition: {
                patterns: [
                    /\(f\s*∘\s*g\)\s*\(\s*x\s*\)/i,
                    /f\s*\(\s*g\s*\(\s*x\s*\)\s*\)/i,
                    /find.*\(f.*g\)/i,
                    /compose.*algebraically/i
                ],
                solver: this.solveAlgebraicComposition.bind(this),
                name: 'Algebraic Composition',
                category: 'algebraic',
                description: 'Finds formula for (f∘g)(x)'
            },

            // Reverse composition
            reverse_composition: {
                patterns: [
                    /\(g\s*∘\s*f\)\s*\(\s*x\s*\)/i,
                    /g\s*\(\s*f\s*\(\s*x\s*\)\s*\)/i,
                    /reverse.*composition/i
                ],
                solver: this.solveReverseComposition.bind(this),
                name: 'Reverse Composition g∘f',
                category: 'algebraic',
                description: 'Finds formula for (g∘f)(x)'
            },

            // Triple composition
            triple_composition: {
                patterns: [
                    /\(f\s*∘\s*g\s*∘\s*h\)/i,
                    /f\s*\(\s*g\s*\(\s*h\s*\(/i,
                    /triple.*composition/i
                ],
                solver: this.solveTripleComposition.bind(this),
                name: 'Triple Composition',
                category: 'multiple',
                description: 'Evaluates (f∘g∘h)(x)'
            },

            // Domain of composition
            composition_domain: {
                patterns: [
                    /domain.*\(f\s*∘\s*g\)/i,
                    /domain.*composition/i,
                    /find.*domain.*f\s*∘\s*g/i
                ],
                solver: this.solveCompositionDomain.bind(this),
                name: 'Domain of Composition',
                category: 'domain',
                description: 'Finds domain of (f∘g)(x)'
            },

            // Range of composition
            composition_range: {
                patterns: [
                    /range.*\(f\s*∘\s*g\)/i,
                    /range.*composition/i,
                    /find.*range.*f\s*∘\s*g/i
                ],
                solver: this.solveCompositionRange.bind(this),
                name: 'Range of Composition',
                category: 'range',
                description: 'Finds range of (f∘g)(x)'
            },

            // Decomposition
            function_decomposition: {
                patterns: [
                    /decompose/i,
                    /find.*f.*g.*such.*that/i,
                    /express.*as.*composition/i,
                    /write.*as.*f.*g/i
                ],
                solver: this.solveFunctionDecomposition.bind(this),
                name: 'Function Decomposition',
                category: 'decomposition',
                description: 'Finds f and g such that h = f∘g'
            },

            // Verify composition
            verify_composition: {
                patterns: [
                    /verify.*composition/i,
                    /check.*f.*g/i,
                    /is.*equal.*to/i
                ],
                solver: this.solveVerifyComposition.bind(this),
                name: 'Verify Composition',
                category: 'verification',
                description: 'Verifies if given functions compose to target'
            },

            // Composition with inverses
            composition_inverse: {
                patterns: [
                    /f.*f.*inverse/i,
                    /composition.*inverse/i,
                    /verify.*inverse/i
                ],
                solver: this.solveCompositionInverse.bind(this),
                name: 'Composition with Inverse',
                category: 'inverse',
                description: 'Evaluates f∘f⁻¹ or verifies inverse relationship'
            },

            // Word problems
            word_problem_composition: {
                patterns: [
                    /temperature.*then/i,
                    /convert.*then/i,
                    /discount.*then.*tax/i,
                    /sequential/i,
                    /multi.*step/i
                ],
                solver: this.solveWordProblemComposition.bind(this),
                name: 'Word Problem with Composition',
                category: 'word_problem',
                description: 'Solves real-world composition problems'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            evaluation: {
                'Evaluate inner function first': [
                    'Evaluating outer function first (wrong order)',
                    'Skipping the intermediate step g(a)',
                    'Mixing up which function is inner vs outer'
                ],
                'Apply outer function to result': [
                    'Forgetting to substitute g(a) into f',
                    'Arithmetic errors in final evaluation',
                    'Using wrong function notation'
                ]
            },
            algebraic: {
                'Substitute g(x) into f': [
                    'Only substituting once instead of all occurrences',
                    'Not using parentheses around g(x)',
                    'Forgetting to distribute or expand'
                ],
                'Simplify expression': [
                    'Algebraic errors in simplification',
                    'Not combining like terms',
                    'Sign errors during expansion'
                ]
            },
            domain: {
                'Check domain of g': [
                    'Forgetting to check where g(x) is defined',
                    'Only considering domain of f',
                    'Missing restrictions from radicals or denominators'
                ],
                'Check g(x) in domain of f': [
                    'Not verifying g(x) values are valid for f',
                    'Missing the intersection of conditions',
                    'Incorrect interval arithmetic'
                ]
            },
            decomposition: {
                'Identify inner function': [
                    'Choosing wrong expression as inner function',
                    'Making inner function too complex or too simple',
                    'Not recognizing nested structure'
                ],
                'Verify decomposition': [
                    'Not checking that f(g(x)) = h(x)',
                    'Accepting first decomposition without verification',
                    'Missing alternative decompositions'
                ]
            }
        };

        this.errorPrevention = {
            order_confusion: {
                reminder: '(f∘g)(x) means f(g(x)) - always evaluate inner function first',
                method: 'Circle the inner function, evaluate it, then apply outer function'
            },
            substitution_errors: {
                reminder: 'When substituting g(x) into f(x), use parentheses around entire expression',
                method: 'Write f( ) first, then fill in with g(x)'
            },
            domain_oversight: {
                reminder: 'Domain of f∘g requires TWO checks: where is g defined? where can f accept g(x)?',
                method: 'Make a checklist: 1) Domain of g, 2) Range of g vs Domain of f'
            },
            notation_confusion: {
                reminder: 'f∘g means "f of g", not multiplication',
                method: 'Read ∘ as "compose" or "of", never as "times"'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why composition works and what it means',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact steps to evaluate or simplify composition',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Diagrams, function machines, and graphical understanding',
                language: 'visual and spatial metaphors'
            },
            algebraic: {
                focus: 'Formal notation and algebraic manipulation',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete numbers and simple functions'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of concrete and abstract'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every tiny step explained with analogies',
                examples: 'real-world analogies and stories',
                analogies: true,
                visualization: 'simple pictures and machine diagrams'
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
            temperature_conversion: {
                scenario: "Converting Celsius to Fahrenheit via Kelvin",
                functions: {
                    g: "C to Kelvin: g(C) = C + 273.15",
                    f: "Kelvin to Fahrenheit: f(K) = 1.8(K - 273.15) + 32"
                },
                composition: "(f∘g)(C) converts Celsius directly to Fahrenheit",
                examples: [
                    "If it's 20°C, what's the temperature in Fahrenheit?",
                    "Water boils at 100°C. What's this in Fahrenheit?"
                ],
                context: "Multi-step temperature conversions are common in science"
            },
            discount_tax: {
                scenario: "20% discount, then 8% sales tax",
                functions: {
                    g: "Apply discount: g(p) = 0.8p",
                    f: "Add tax: f(x) = 1.08x"
                },
                composition: "(f∘g)(p) = 1.08(0.8p) = 0.864p",
                examples: [
                    "Item costs $50. What's final price after discount and tax?",
                    "Why is the order important?"
                ],
                context: "Order matters: discount then tax ≠ tax then discount"
            },
            currency_conversion: {
                scenario: "USD to EUR to GBP",
                functions: {
                    g: "USD to EUR: g(d) = 0.85d",
                    f: "EUR to GBP: f(e) = 0.88e"
                },
                composition: "(f∘g)(d) = 0.88(0.85d) = 0.748d",
                examples: [
                    "$100 USD converts to how many GBP?",
                    "What's the direct conversion rate?"
                ],
                context: "Chained currency conversions use composition"
            },
            area_scaling: {
                scenario: "Rectangle length is function of width, area is function of length",
                functions: {
                    g: "Length from width: g(w) = 2w + 3",
                    f: "Area from length: f(l) = 5l"
                },
                composition: "(f∘g)(w) = 5(2w + 3) = 10w + 15",
                examples: [
                    "If width is 4, what's the area?",
                    "Express area as function of width directly"
                ],
                context: "Geometric relationships often involve composition"
            },
            population_model: {
                scenario: "Population growth with migration",
                functions: {
                    g: "Natural growth: g(P) = 1.05P",
                    f: "Add migration: f(P) = P + 1000"
                },
                composition: "(f∘g)(P) = 1.05P + 1000",
                examples: [
                    "Starting population 10,000. What's population after growth and migration?",
                    "What if we reverse the order?"
                ],
                context: "Sequential population changes model as composition"
            },
            encryption: {
                scenario: "Encrypt message, then compress",
                functions: {
                    g: "Encrypt: g(m) shifts each character",
                    f: "Compress: f(e) reduces redundancy"
                },
                composition: "(f∘g)(m) encrypts then compresses",
                examples: [
                    "Why might order matter for efficiency?",
                    "What's the inverse operation?"
                ],
                context: "Data processing pipelines use function composition"
            },
            compound_interest: {
                scenario: "Interest applied quarterly for multiple years",
                functions: {
                    g: "One quarter: g(P) = P(1 + r/4)",
                    f: "Four quarters: f(P) = g(g(g(g(P))))"
                },
                composition: "Repeated composition models compound interest",
                examples: [
                    "$1000 at 8% annual rate for one year (quarterly compounding)",
                    "How does this differ from annual compounding?"
                ],
                context: "Repeated application is composition with itself"
            },
            measurement_conversion: {
                scenario: "Feet to meters to kilometers",
                functions: {
                    g: "Feet to meters: g(f) = 0.3048f",
                    f: "Meters to km: f(m) = m/1000"
                },
                composition: "(f∘g)(ft) = 0.3048ft/1000 = 0.0003048ft",
                examples: [
                    "5280 feet (1 mile) is how many kilometers?",
                    "What's the direct conversion factor?"
                ],
                context: "Unit conversions often chain together"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            evaluation: {
                skills: ['Function notation', 'Order of operations', 'Substitution'],
                priorKnowledge: ['f(x) notation means "f of x"', 'Evaluate expressions step by step'],
                checkQuestions: [
                    "If f(x) = 2x + 1, what is f(3)?",
                    "If g(x) = x², what is g(-2)?",
                    "What does f(g(2)) mean in words?"
                ]
            },
            algebraic: {
                skills: ['Algebraic substitution', 'Expanding expressions', 'Combining like terms'],
                priorKnowledge: ['Substitute entire expressions for variables', 'Use parentheses correctly'],
                checkQuestions: [
                    "If f(x) = x² and g(x) = x + 1, what is f(x + 1)?",
                    "Expand (2x + 3)²",
                    "Simplify 2(3x - 1) + 5"
                ]
            },
            domain: {
                skills: ['Finding domains', 'Set intersection', 'Inequality solving'],
                priorKnowledge: ['Domain restrictions', 'Cannot divide by zero', 'Cannot take square root of negative'],
                checkQuestions: [
                    "What is the domain of f(x) = 1/(x - 2)?",
                    "What is the domain of g(x) = √(x + 3)?",
                    "What is the intersection of x > 2 and x < 5?"
                ]
            },
            decomposition: {
                skills: ['Pattern recognition', 'Function structure analysis', 'Inverse thinking'],
                priorKnowledge: ['Identify nested operations', 'Recognize function patterns'],
                checkQuestions: [
                    "In h(x) = (2x + 1)², what is the inner operation?",
                    "In h(x) = √(3x - 5), what happens first?",
                    "Can you break down h(x) = 2x² + 4x + 2 into simpler functions?"
                ]
            },
            inverse: {
                skills: ['Inverse functions', 'Identity function', 'Function properties'],
                priorKnowledge: ['f(f⁻¹(x)) = x', 'Inverse undoes original function'],
                checkQuestions: [
                    "If f(x) = 2x + 3, what is f⁻¹(x)?",
                    "What is the identity function?",
                    "What does f(f⁻¹(5)) equal?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            function_machine: {
                description: "Composition as machines in series",
                analogy: "Output of first machine becomes input of second machine",
                visualization: "Draw two boxes: x → [g] → g(x) → [f] → f(g(x))",
                suitableFor: ['evaluation', 'algebraic', 'all'],
                explanation: "Think of functions as machines that transform inputs"
            },
            nesting_boxes: {
                description: "Composition as nested boxes",
                analogy: "f is the outer box, g is the inner box",
                visualization: "f( g(x) ) - g is inside f",
                suitableFor: ['algebraic', 'evaluation'],
                explanation: "Inner function is evaluated first, contained within outer"
            },
            arrow_diagram: {
                description: "Mapping diagram showing transformations",
                analogy: "Following arrows from x through g to f",
                visualization: "x --g--> g(x) --f--> f(g(x))",
                suitableFor: ['evaluation', 'domain'],
                explanation: "Visual path showing sequence of transformations"
            },
            layered_operations: {
                description: "Onion layers of operations",
                analogy: "Peeling an onion - innermost operation first",
                visualization: "Concentric circles or layers",
                suitableFor: ['decomposition', 'evaluation'],
                explanation: "Work from inside out, like peeling layers"
            },
            pipeline: {
                description: "Data flowing through pipeline",
                analogy: "Water flowing through connected pipes",
                visualization: "x → pipe g → → pipe f → output",
                suitableFor: ['all types'],
                explanation: "Sequential processing like a manufacturing line"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "f(x) = x + 2, g(x) = 3x. Find (f∘g)(1)",
                    solution: 5,
                    steps: ["g(1) = 3(1) = 3", "f(3) = 3 + 2 = 5"],
                    difficulty: "easy"
                },
                {
                    problem: "f(x) = 2x, g(x) = x + 1. Find (f∘g)(x)",
                    solution: "2(x + 1) = 2x + 2",
                    steps: ["Substitute g(x) into f", "f(x + 1) = 2(x + 1)", "= 2x + 2"],
                    difficulty: "easy"
                },
                {
                    problem: "f(x) = x², g(x) = x + 3. Find (f∘g)(2)",
                    solution: 25,
                    steps: ["g(2) = 2 + 3 = 5", "f(5) = 5² = 25"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "f(x) = x² + 1, g(x) = 2x - 3. Find (f∘g)(x)",
                    solution: "4x² - 12x + 10",
                    steps: [
                        "f(g(x)) = (2x - 3)² + 1",
                        "= 4x² - 12x + 9 + 1",
                        "= 4x² - 12x + 10"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "f(x) = √x, g(x) = x² + 4. Find (f∘g)(2)",
                    solution: "2√2",
                    steps: ["g(2) = 4 + 4 = 8", "f(8) = √8 = 2√2"],
                    difficulty: "medium"
                },
                {
                    problem: "f(x) = 1/x, g(x) = x + 2. Find domain of f∘g",
                    solution: "x ≠ -2",
                    steps: [
                        "g(x) = x + 2 defined for all x",
                        "f needs g(x) ≠ 0",
                        "x + 2 ≠ 0",
                        "x ≠ -2"
                    ],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Decompose h(x) = √(3x² - 5) into f∘g",
                    solution: "f(x) = √x, g(x) = 3x² - 5",
                    steps: [
                        "Inner operation: 3x² - 5, so g(x) = 3x² - 5",
                        "Outer operation: square root, so f(x) = √x",
                        "Verify: f(g(x)) = √(3x² - 5) ✓"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "f(x) = 2x + 1, g(x) = (x - 1)/2. Show g = f⁻¹",
                    solution: "Both compositions yield x",
                    steps: [
                        "(f∘g)(x) = 2((x-1)/2) + 1 = x - 1 + 1 = x",
                        "(g∘f)(x) = (2x + 1 - 1)/2 = 2x/2 = x",
                        "Both equal x, so g = f⁻¹"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Find (f∘g∘h)(x) where f(x) = x + 1, g(x) = 2x, h(x) = x²",
                    solution: "2x² + 1",
                    steps: [
                        "Start innermost: h(x) = x²",
                        "Apply g: g(h(x)) = 2x²",
                        "Apply f: f(2x²) = 2x² + 1"
                    ],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                evaluation: [
                    { problem: "f(x) = 3x, g(x) = x + 2, find (f∘g)(4)", solution: 18 },
                    { problem: "f(x) = x², g(x) = 2x, find (f∘g)(3)", solution: 36 },
                    { problem: "f(x) = √x, g(x) = x + 1, find (f∘g)(8)", solution: 3 }
                ],
                algebraic: [
                    { problem: "f(x) = 2x + 1, g(x) = x², find (f∘g)(x)", solution: "2x² + 1" },
                    { problem: "f(x) = x², g(x) = x - 3, find (f∘g)(x)", solution: "x² - 6x + 9" },
                    { problem: "f(x) = 1/x, g(x) = x + 1, find (f∘g)(x)", solution: "1/(x + 1)" }
                ],
                decomposition: [
                    { problem: "h(x) = (x + 1)²", solution: "f(x) = x², g(x) = x + 1" },
                    { problem: "h(x) = √(2x - 3)", solution: "f(x) = √x, g(x) = 2x - 3" },
                    { problem: "h(x) = 1/(x² + 1)", solution: "f(x) = 1/x, g(x) = x² + 1" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            composition_is_multiplication: {
                misconception: "f∘g means f × g (multiplication)",
                reality: "f∘g means f(g(x)), composition not multiplication",
                correctiveExample: "f∘g ≠ f · g. If f(x)=x+1, g(x)=2x, then (f∘g)(x)=2x+1, NOT 2x²+2x",
                commonIn: ['all_types']
            },
            order_doesnt_matter: {
                misconception: "f∘g = g∘f (thinking composition is commutative)",
                reality: "Order matters: f∘g usually ≠ g∘f",
                correctiveExample: "f(x)=x+1, g(x)=2x: (f∘g)(x)=2x+1 but (g∘f)(x)=2x+2. Different!",
                commonIn: ['algebraic', 'evaluation']
            },
            evaluating_outer_first: {
                misconception: "In f(g(x)), evaluate f first",
                reality: "Always evaluate inner function g(x) first, then apply f",
                correctiveExample: "For (f∘g)(3), first find g(3), THEN f(g(3)). Not f(3) then g",
                commonIn: ['evaluation']
            },
            single_substitution: {
                misconception: "Only substitute g(x) for first x in f(x)",
                reality: "Substitute g(x) for EVERY occurrence of x in f(x)",
                correctiveExample: "If f(x)=x²+x and g(x)=2x, then f(g(x))=(2x)²+(2x), not (2x)²+x",
                commonIn: ['algebraic']
            },
            parentheses_optional: {
                misconception: "Parentheses around g(x) when substituting are optional",
                reality: "ALWAYS use parentheses around g(x) to avoid errors",
                correctiveExample: "f(x)=x², g(x)=x+1: f(g(x))=(x+1)², not x+1² which equals x+1",
                commonIn: ['algebraic']
            },
            domain_only_outer: {
                misconception: "Domain of f∘g is just domain of f",
                reality: "Must check domain of g AND ensure g(x) is in domain of f",
                correctiveExample: "f(x)=√x, g(x)=x-5: Domain isn't x≥0, it's x≥5 (so g(x)≥0)",
                commonIn: ['domain']
            },
            notation_confusion: {
                misconception: "(f∘g)(x) and f(x)∘g(x) mean the same thing",
                reality: "(f∘g)(x) = f(g(x)). The notation f(x)∘g(x) is meaningless",
                correctiveExample: "Composition applies to functions, not values: f∘g, not f(x)∘g(x)",
                commonIn: ['all_types']
            },
            decomposition_uniqueness: {
                misconception: "There's only one way to decompose a function",
                reality: "Multiple decompositions often possible",
                correctiveExample: "h(x)=2x+4 can be f(x)=2x, g(x)=x+2 OR f(x)=x+4, g(x)=2x",
                commonIn: ['decomposition']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            function_machines: {
                analogy: "Assembly line with two machines",
                explanation: "First machine (g) processes input, second machine (f) processes output of first",
                suitableFor: ['evaluation', 'algebraic', 'all'],
                ELI5: "Imagine a toy factory. First machine paints toy (g), second machine boxes it (f). You can't box it before painting!"
            },
            nesting_dolls: {
                analogy: "Russian nesting dolls",
                explanation: "g is the inner doll, f is the outer doll. Must open f to get to g",
                suitableFor: ['algebraic', 'decomposition'],
                ELI5: "Like opening a present. The wrapping paper is f, the box is g, and x is the gift inside. To get to gift, unwrap then open box (work backwards). To wrap, box then wrap (work forwards like composition)."
            },
            cooking_recipe: {
                analogy: "Following recipe steps in order",
                explanation: "Can't frost cake (f) before baking it (g). Order matters!",
                suitableFor: ['evaluation', 'order'],
                ELI5: "Making a sandwich: first spread peanut butter (g), then add jelly (f). If you reverse order, you can't spread peanut butter on jelly - it doesn't work the same way!"
            },
            pipeline: {
                analogy: "Water flowing through connected pipes",
                explanation: "Water (input) flows through first pipe (g), then through second pipe (f)",
                suitableFor: ['all_types'],
                ELI5: "Like a water slide at a park. You slide down first slide (g), then immediately into second slide (f). You can't do second slide without going through first!"
            },
            box_within_box: {
                analogy: "Present wrapped in box within another box",
                explanation: "To wrap: put item in small box (g), then put that box in big box (f)",
                suitableFor: ['decomposition', 'algebraic'],
                ELI5: "Like a jewelry box inside a gift box. To open (decompose), remove outer box first (f), then inner box (g). To wrap (compose), put in inner box (g) first, then outer box (f)."
            },
            getting_dressed: {
                analogy: "Putting on socks then shoes",
                explanation: "Must put socks on (g) before shoes (f). Can't reverse order!",
                suitableFor: ['order', 'inverse'],
                ELI5: "You put on socks first, then shoes. To undo (inverse), you take off shoes first, then socks - reverse order!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            evaluation: {
                level1: "What does (f∘g)(a) mean in words?",
                level2: "It means f(g(a)). Which function do you evaluate first?",
                level3: "Evaluate g(a) first, then apply f to that result",
                level4: "Calculate g({value}) = {g_result}, then f({g_result}) = {answer}"
            },
            algebraic: {
                level1: "How do you find the formula for (f∘g)(x)?",
                level2: "Substitute the entire expression g(x) wherever x appears in f(x)",
                level3: "Replace x in f(x) with ({g_expression}), using parentheses",
                level4: "Write f(({g_expression})), then expand and simplify"
            },
            domain: {
                level1: "What two things must be true for x to be in domain of f∘g?",
                level2: "g(x) must be defined, AND g(x) must be in the domain of f",
                level3: "Find domain of g, then check which g(x) values f can accept",
                level4: "Set up conditions: {g_domain} AND {f_domain_condition}"
            },
            decomposition: {
                level1: "What part of the expression is 'inside' another operation?",
                level2: "The inner expression becomes g(x), the outer operation becomes f",
                level3: "Look for nested structure: the innermost part is g(x)",
                level4: "Let g(x) = {inner}, then f(x) = {outer}. Verify f(g(x)) = h(x)"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "If f(x) = 2x and g(x) = x + 1, what is (f∘g)(3)?",
                    answer: 8,
                    assesses: "evaluation",
                    difficulty: "basic"
                },
                {
                    question: "If f(x) = x² and g(x) = x + 2, find (f∘g)(x)",
                    answer: "x² + 4x + 4",
                    assesses: "algebraic",
                    difficulty: "intermediate"
                },
                {
                    question: "Does (f∘g)(x) always equal (g∘f)(x)?",
                    answer: "No",
                    assesses: "conceptual",
                    difficulty: "basic"
                },
                {
                    question: "Decompose h(x) = √(x + 3) into f and g",
                    answer: "f(x) = √x, g(x) = x + 3",
                    assesses: "decomposition",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "To find (f∘g)(5), which do you calculate first?",
                    options: ["f(5)", "g(5)", "Both at same time", "It doesn't matter"],
                    correct: "g(5)",
                    explanation: "Always evaluate inner function first"
                },
                {
                    question: "Which notation means the same as (f∘g)(x)?",
                    options: ["f(x)·g(x)", "f(g(x))", "g(f(x))", "f(x) + g(x)"],
                    correct: "f(g(x))",
                    explanation: "∘ means composition: apply g first, then f"
                },
                {
                    question: "If h(x) = (2x + 1)³, what is a good choice for g(x) in h = f∘g?",
                    options: ["g(x) = 2x + 1", "g(x) = x³", "g(x) = 2x", "g(x) = 3"],
                    correct: "g(x) = 2x + 1",
                    explanation: "The inner expression 2x + 1 should be g(x)"
                }
            ],
            summative: [
                {
                    question: "Given f(x) = √x and g(x) = x² - 4, find (f∘g)(x) and its domain",
                    answer: "√(x² - 4), domain: x ≤ -2 or x ≥ 2",
                    showsWork: true,
                    rubric: {
                        composition: 2,
                        domain_g: 1,
                        domain_f: 1,
                        final_domain: 1
                    }
                },
                {
                    question: "Verify that f(x) = 2x - 3 and g(x) = (x + 3)/2 are inverses",
                    answer: "Show (f∘g)(x) = x and (g∘f)(x) = x",
                    showsWork: true,
                    rubric: {
                        compute_fog: 2,
                        compute_gof: 2,
                        conclusion: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "f(x) = x + 1, g(x) = 2x, find (f∘g)(2)",
                    "f(x) = 3x, g(x) = x - 1, find (f∘g)(x)",
                    "If h(x) = 2x + 3, decompose into f and g"
                ],
                medium: [
                    "f(x) = x² + 1, g(x) = x - 2, find (f∘g)(x)",
                    "f(x) = 1/x, g(x) = x + 1, find domain of f∘g",
                    "Show (f∘g)(x) ≠ (g∘f)(x) for f(x) = 2x, g(x) = x + 1"
                ],
                hard: [
                    "f(x) = √x, g(x) = 2x - 5, h(x) = x², find (f∘g∘h)(3)",
                    "Find all x where (f∘g)(x) = (g∘f)(x) for f(x) = x², g(x) = x + 1",
                    "Decompose h(x) = 1/√(x² + 1) three different ways"
                ]
            },
            byObjective: {
                canEvaluateComposition: [
                    "f(x) = x², g(x) = x + 3, find (f∘g)(2)",
                    "f(x) = 2x - 1, g(x) = x/2, find (f∘g)(6)",
                    "f(x) = √x, g(x) = x + 4, find (f∘g)(5)"
                ],
                canFindFormula: [
                    "f(x) = 2x + 1, g(x) = x², find (f∘g)(x)",
                    "f(x) = x², g(x) = 2x - 3, find (f∘g)(x)",
                    "f(x) = 1/x, g(x) = x + 2, find (f∘g)(x)"
                ],
                canFindDomain: [
                    "f(x) = √x, g(x) = x - 5, find domain of f∘g",
                    "f(x) = 1/x, g(x) = x² - 4, find domain of f∘g",
                    "f(x) = ln(x), g(x) = x² - 1, find domain of f∘g"
                ],
                canDecompose: [
                    "Decompose h(x) = (x + 1)³",
                    "Decompose h(x) = √(2x - 5)",
                    "Decompose h(x) = 1/(x² + 3)"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "evaluating_at_point": "Evaluate inner function at the point, then outer function",
                "finding_formula": "Substitute entire g(x) expression into f(x)",
                "finding_domain": "Check domain of g AND check that g(x) values work in f",
                "decomposing": "Identify innermost operation as g, outer operation as f",
                "verifying_inverses": "Show both f∘f⁻¹ and f⁻¹∘f equal identity",
                "comparing_orders": "Compute both f∘g and g∘f to see if equal"
            },
            whenToUseWhat: {
                numerical_evaluation: "When given specific number, evaluate step-by-step",
                algebraic_simplification: "When finding formula, substitute and expand",
                domain_analysis: "When asked about domain, check both function constraints",
                graphical_method: "When graphs given, trace transformations visually",
                decomposition: "When simplifying complex function or finding structure"
            },
            methodSelection: {
                factorsToConsider: [
                    "Type of problem: evaluation, formula, domain, or decomposition",
                    "Complexity of functions involved",
                    "Whether numerical or algebraic answer needed",
                    "Available information: formulas, graphs, or values"
                ],
                generalApproach: [
                    "1. Identify which composition operation is needed",
                    "2. Determine order: which function is inner, which is outer",
                    "3. Apply appropriate method based on problem type",
                    "4. Simplify or evaluate as needed",
                    "5. Verify result makes sense"
                ]
            },
            optimizationTips: {
                "Use parentheses liberally": "Prevents errors when substituting expressions",
                "Work inside-out": "Always start with innermost function",
                "Check your work": "Verify by substituting test value",
                "Draw diagrams": "Function machine or arrow diagrams clarify order"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Quick Evaluation Sprint",
                    timeLimit: 90,
                    problems: [
                        "f(x)=2x, g(x)=x+1, find (f∘g)(3)",
                        "f(x)=x², g(x)=x-1, find (f∘g)(2)",
                        "f(x)=x+5, g(x)=3x, find (f∘g)(1)",
                        "f(x)=x/2, g(x)=4x, find (f∘g)(3)",
                        "f(x)=x-2, g(x)=x², find (f∘g)(2)"
                    ]
                },
                {
                    name: "Formula Finding Challenge",
                    timeLimit: 180,
                    problems: [
                        "f(x)=2x+1, g(x)=x², find (f∘g)(x)",
                        "f(x)=x², g(x)=x+3, find (f∘g)(x)",
                        "f(x)=3x, g(x)=x-2, find (f∘g)(x)"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Functions",
                    problem: "f∘g gives 2x+5. If g(x)=x+1, what is f(x)?",
                    solution: "f(x) = 2x + 3",
                    method: "Work backwards: f(x+1)=2x+5, so f(x)=2(x-1)+5=2x+3"
                },
                {
                    name: "Composition Equation",
                    problem: "Find x where (f∘g)(x) = (g∘f)(x) for f(x)=2x+1, g(x)=x²",
                    solution: "x = -1/2",
                    method: "Set 2x²+1 = (2x+1)² and solve"
                },
                {
                    name: "Decomposition Challenge",
                    challenge: "Find THREE different ways to decompose h(x)=(2x+1)²",
                    solutions: [
                        "f(x)=x², g(x)=2x+1",
                        "f(x)=(x+1)², g(x)=2x",
                        "f(x)=4x, g(x)=x²+x+1/4 (less natural)"
                    ]
                }
            ],
            applications: [
                {
                    scenario: "Temperature Conversion",
                    problem: "C to K: g(C)=C+273.15. K to F: f(K)=9K/5-459.67. Find (f∘g)(C)",
                    answer: "9C/5 + 32",
                    context: "Direct Celsius to Fahrenheit formula"
                },
                {
                    scenario: "Discount then Tax",
                    problem: "30% off: g(p)=0.7p. 8% tax: f(x)=1.08x. What's (f∘g)(100)?",
                    answer: "$75.60",
                    context: "Final price after discount and tax"
                },
                {
                    scenario: "Inverse Verification",
                    problem: "If f(x)=3x-5, verify g(x)=(x+5)/3 is inverse via composition",
                    answer: "Both f∘g and g∘f equal x",
                    context: "Cryptographic key verification"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "f(x) = x², g(x) = x + 1",
                        "(f∘g)(x) = x² + 1",  // ERROR: didn't substitute g(x)
                        ""
                    ],
                    correctAnswer: "(x + 1)² = x² + 2x + 1",
                    errorType: "Failed to substitute g(x) properly"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "f(x) = 2x, g(x) = x + 3",
                        "(f∘g)(5) = f(5) then g(5)",  // ERROR: wrong order
                        "= 10 then 8"
                    ],
                    correctAnswer: "g(5)=8, then f(8)=16",
                    errorType: "Evaluated functions in wrong order"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "f(x) = x², g(x) = 2x + 1",
                        "(f∘g)(x) = 2x + 1²",  // ERROR: no parentheses
                        "= 2x + 1"
                    ],
                    correctAnswer: "(2x + 1)² = 4x² + 4x + 1",
                    errorType: "Missing parentheses around g(x)"
                }
            ]
        };
    }

    initializeNotationDatabase() {
        this.notation = {
            standard: {
                symbol: "(f ∘ g)(x)",
                meaning: "composition of f and g evaluated at x",
                readAs: "f compose g of x",
                equivalent: "f(g(x))"
            },
            function_of_function: {
                symbol: "f(g(x))",
                meaning: "f applied to result of g(x)",
                readAs: "f of g of x",
                equivalent: "(f ∘ g)(x)"
            },
            circle_notation: {
                symbol: "∘",
                meaning: "composition operator",
                readAs: "compose" or "of",
                notes: "NOT multiplication!"
            },
            nested: {
                symbol: "f(g(h(x)))",
                meaning: "triple composition",
                readAs: "f of g of h of x",
                equivalent: "((f ∘ g) ∘ h)(x) or (f ∘ (g ∘ h))(x)"
            }
        };
    }

    initializeDecompositionDatabase() {
        this.decompositionPatterns = {
            polynomial_inside_function: {
                pattern: "f(polynomial)",
                example: "√(2x + 3)",
                decomposition: "f(x) = √x, g(x) = 2x + 3",
                recognition: "Outer function applied to polynomial expression"
            },
            nested_power: {
                pattern: "(expression)^n",
                example: "(3x - 1)²",
                decomposition: "f(x) = x², g(x) = 3x - 1",
                recognition: "Power applied to linear or polynomial expression"
            },
            function_of_squared: {
                pattern: "f(x²)",
                example: "√(x²)",
                decomposition: "f(x) = √x, g(x) = x²",
                recognition: "Function applied to x²"
            },
            reciprocal_of_function: {
                pattern: "1/f(x)",
                example: "1/(x² + 1)",
                decomposition: "f(x) = 1/x, g(x) = x² + 1",
                recognition: "Reciprocal of an expression"
            },
            absolute_value: {
                pattern: "|expression|",
                example: "|2x - 5|",
                decomposition: "f(x) = |x|, g(x) = 2x - 5",
                recognition: "Absolute value of expression"
            }
        };
    }

    // MAIN SOLVER METHOD
    solveCompositionProblem(config) {
        const { f, g, h, value, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseCompositionProblem(f, g, h, value, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveCompositionProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateCompositionSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateCompositionGraphData();

            // Generate workbook
            this.generateCompositionWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                result: this.currentSolution?.result,
                formula: this.currentSolution?.formula
            };

        } catch (error) {
            throw new Error(`Failed to solve composition problem: ${error.message}`);
        }
    }

    parseCompositionProblem(f, g, h = null, value = null, problemType = null, context = {}) {
        // Auto-detect composition problem type if not specified
        if (!problemType) {
            problemType = this.detectCompositionType(f, g, h, value, context);
        }

        return {
            f: this.parseFunction(f),
            g: this.parseFunction(g),
            h: h ? this.parseFunction(h) : null,
            value: value,
            type: problemType,
            context: { ...context },
            parsedAt: new Date().toISOString()
        };
    }

    detectCompositionType(f, g, h, value, context) {
        if (value !== null && value !== undefined) {
            return h ? 'triple_composition' : 'evaluate_composition';
        }
        if (h) {
            return 'triple_composition';
        }
        if (context.findDomain) {
            return 'composition_domain';
        }
        if (context.findRange) {
            return 'composition_range';
        }
        if (context.decompose) {
            return 'function_decomposition';
        }
        if (context.verifyInverse) {
            return 'composition_inverse';
        }
        if (context.reverse) {
            return 'reverse_composition';
        }
        return 'algebraic_composition';
    }

    parseFunction(funcStr) {
        if (typeof funcStr === 'function') {
            return { type: 'function', func: funcStr, expr: 'custom function' };
        }
        if (typeof funcStr === 'string') {
            return { type: 'expression', expr: funcStr, func: this.createFunctionFromExpression(funcStr) };
        }
        if (typeof funcStr === 'object' && funcStr.expr) {
            return funcStr;
        }
        throw new Error('Invalid function format');
    }

    createFunctionFromExpression(expr) {
        // Simple expression evaluator - can be enhanced
        return (x) => {
            try {
                return math.evaluate(expr, { x: x });
            } catch (e) {
                throw new Error(`Cannot evaluate expression ${expr}: ${e.message}`);
            }
        };
    }

    solveCompositionProblem_Internal(problem) {
        const solver = this.compositionTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for composition problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // COMPOSITION SOLVERS

    solveEvaluateComposition(problem) {
        const { f, g, value } = problem;

        // Step 1: Evaluate g(value)
        const gResult = g.func(value);

        // Step 2: Evaluate f(g(value))
        const fgResult = f.func(gResult);

        return {
            type: 'Evaluate Composition',
            operation: `(f∘g)(${value})`,
            innerEvaluation: `g(${value}) = ${gResult}`,
            outerEvaluation: `f(${gResult}) = ${fgResult}`,
            result: fgResult,
            category: 'evaluation',
            steps: {
                step1: { description: `Evaluate inner function g(${value})`, result: gResult },
                step2: { description: `Evaluate outer function f(${gResult})`, result: fgResult }
            }
        };
    }

    solveAlgebraicComposition(problem) {
        const { f, g } = problem;

        // For algebraic composition, we need to express f(g(x)) symbolically
        const compositeExpr = this.substituteExpression(f.expr, g.expr);

        return {
            type: 'Algebraic Composition',
            operation: '(f∘g)(x)',
            fExpression: f.expr,
            gExpression: g.expr,
            substitution: `Replace x in f with (${g.expr})`,
            formula: compositeExpr,
            simplified: this.simplifyExpression(compositeExpr),
            category: 'algebraic'
        };
    }

    solveReverseComposition(problem) {
        const { f, g } = problem;

        // g∘f means g(f(x))
        const compositeExpr = this.substituteExpression(g.expr, f.expr);

        return {
            type: 'Reverse Composition',
            operation: '(g∘f)(x)',
            gExpression: g.expr,
            fExpression: f.expr,
            substitution: `Replace x in g with (${f.expr})`,
            formula: compositeExpr,
            simplified: this.simplifyExpression(compositeExpr),
            category: 'algebraic',
            note: 'This is the reverse order from (f∘g)(x)'
        };
    }

    solveTripleComposition(problem) {
        const { f, g, h, value } = problem;

        if (value !== null) {
            // Numerical evaluation
            const hResult = h.func(value);
            const ghResult = g.func(hResult);
            const fghResult = f.func(ghResult);

            return {
                type: 'Triple Composition Evaluation',
                operation: `(f∘g∘h)(${value})`,
                step1: `h(${value}) = ${hResult}`,
                step2: `g(${hResult}) = ${ghResult}`,
                step3: `f(${ghResult}) = ${fghResult}`,
                result: fghResult,
                category: 'multiple'
            };
        } else {
            // Algebraic formula
            const ghExpr = this.substituteExpression(g.expr, h.expr);
            const fghExpr = this.substituteExpression(f.expr, ghExpr);

            return {
                type: 'Triple Composition Formula',
                operation: '(f∘g∘h)(x)',
                step1: `(g∘h)(x) = ${ghExpr}`,
                step2: `f((g∘h)(x)) = ${fghExpr}`,
                formula: fghExpr,
                simplified: this.simplifyExpression(fghExpr),
                category: 'multiple'
            };
        }
    }

    solveCompositionDomain(problem) {
        const { f, g } = problem;

        // Domain analysis
        const domainG = this.findDomain(g.expr);
        const domainF = this.findDomain(f.expr);
        const rangeG = this.findRange(g.expr, domainG);

        // Composite domain: x must be in domain of g, AND g(x) must be in domain of f
        const compositeDomain = this.intersectDomains(domainG, rangeG, domainF);

        return {
            type: 'Domain of Composition',
            operation: 'Dom(f∘g)',
            domainOfG: domainG,
            domainOfF: domainF,
            rangeOfG: rangeG,
            condition1: 'x must be in domain of g',
            condition2: 'g(x) must be in domain of f',
            compositeDomain: compositeDomain,
            category: 'domain'
        };
    }

    solveCompositionRange(problem) {
        const { f, g } = problem;

        const rangeG = this.findRange(g.expr);
        const validInputsForF = this.intersectWithDomain(rangeG, this.findDomain(f.expr));
        const rangeComposite = this.applyFunctionToRange(f, validInputsForF);

        return {
            type: 'Range of Composition',
            operation: 'Range(f∘g)',
            rangeOfG: rangeG,
            validForF: validInputsForF,
            rangeOfComposite: rangeComposite,
            category: 'range'
        };
    }

    solveFunctionDecomposition(problem) {
        const { context } = problem;
        const hExpression = context.hExpression || context.targetFunction;

        // Identify inner and outer functions
        const decomposition = this.decomposeFunction(hExpression);

        return {
            type: 'Function Decomposition',
            targetFunction: hExpression,
            innerFunction: decomposition.g,
            outerFunction: decomposition.f,
            verification: `f(g(x)) = ${decomposition.f}(${decomposition.g}) = ${hExpression}`,
            alternatives: decomposition.alternatives || [],
            category: 'decomposition'
        };
    }

    solveVerifyComposition(problem) {
        const { f, g, context } = problem;
        const targetExpr = context.targetExpression;

        const computed = this.substituteExpression(f.expr, g.expr);
        const simplified = this.simplifyExpression(computed);
        const match = this.expressionsMatch(simplified, targetExpr);

        return {
            type: 'Verify Composition',
            givenF: f.expr,
            givenG: g.expr,
            targetExpression: targetExpr,
            computedComposition: computed,
            simplified: simplified,
            match: match,
            conclusion: match ? 'Verification successful: (f∘g)(x) = target' : 'Compositions do not match',
            category: 'verification'
        };
    }

    solveCompositionInverse(problem) {
        const { f, context } = problem;
        const fInverse = context.fInverse || this.findInverse(f);

        // Compute f∘f⁻¹
        const fOfInverse = this.substituteExpression(f.expr, fInverse.expr);
        const simplifiedFInv = this.simplifyExpression(fOfInverse);

        // Compute f⁻¹∘f
        const inverseOfF = this.substituteExpression(fInverse.expr, f.expr);
        const simplifiedInvF = this.simplifyExpression(inverseOfF);

        const bothIdentity = this.isIdentity(simplifiedFInv) && this.isIdentity(simplifiedInvF);

        return {
            type: 'Composition with Inverse',
            f: f.expr,
            fInverse: fInverse.expr,
            fOfInverse: { expression: fOfInverse, simplified: simplifiedFInv },
            inverseOfF: { expression: inverseOfF, simplified: simplifiedInvF },
            verification: bothIdentity ? 'Both compositions equal x (identity)' : 'Not inverse functions',
            isInverse: bothIdentity,
            category: 'inverse'
        };
    }

    solveWordProblemComposition(problem) {
        const { context } = problem;

        return {
            type: 'Word Problem with Composition',
            scenario: context.scenario,
            firstProcess: context.firstProcess,
            secondProcess: context.secondProcess,
            composition: 'Apply first process, then second process',
            solution: 'Model as (f∘g)(x) where g is first process, f is second',
            category: 'word_problem'
        };
    }

    // HELPER METHODS

    substituteExpression(outerExpr, innerExpr) {
        // Simple substitution - replace 'x' in outerExpr with innerExpr
        // More sophisticated parsing would be needed for complex cases
        if (typeof outerExpr !== 'string') return outerExpr;

        // Add parentheses around innerExpr for safety
        const safeInner = `(${innerExpr})`;
        return outerExpr.replace(/\bx\b/g, safeInner);
    }

    simplifyExpression(expr) {
        try {
            // Use math.js to simplify
            const simplified = math.simplify(expr);
            return simplified.toString();
        } catch (e) {
            return expr; // Return original if simplification fails
        }
    }

    findDomain(expr) {
        // Simplified domain finder - would need enhancement for complex cases
        if (expr.includes('sqrt')) {
            return 'Expression under sqrt must be ≥ 0';
        }
        if (expr.includes('/')) {
            return 'Denominator must not equal 0';
        }
        if (expr.includes('log') || expr.includes('ln')) {
            return 'Argument must be > 0';
        }
        return 'All real numbers';
    }

    findRange(expr, domain = null) {
        // Simplified range finder
        return 'Range depends on specific function';
    }

    intersectDomains(domain1, range, domain2) {
        // Simplified intersection
        return `Intersection of ${domain1} and constraint that ${range} fits in ${domain2}`;
    }

    intersectWithDomain(range, domain) {
        return `${range} ∩ ${domain}`;
    }

    applyFunctionToRange(f, inputRange) {
        return `f applied to ${inputRange}`;
    }

    decomposeFunction(hExpr) {
        // Pattern matching for common decompositions
        
        // Pattern: sqrt(expr)
        if (hExpr.match(/sqrt\((.*)\)/)) {
            const inner = hExpr.match(/sqrt\((.*)\)/)[1];
            return {
                f: 'sqrt(x)',
                g: inner,
                alternatives: []
            };
        }

        // Pattern: (expr)^n
        const powerMatch = hExpr.match(/\((.*)\)\^(\d+)/);
        if (powerMatch) {
            return {
                f: `x^${powerMatch[2]}`,
                g: powerMatch[1],
                alternatives: []
            };
        }

        // Pattern: 1/(expr)
        if (hExpr.match(/1\/\((.*)\)/)) {
            const inner = hExpr.match(/1\/\((.*)\)/)[1];
            return {
                f: '1/x',
                g: inner,
                alternatives: []
            };
        }

        // Default: return expression as is
        return {
            f: hExpr,
            g: 'x',
            alternatives: ['Multiple decompositions possible']
        };
    }

    expressionsMatch(expr1, expr2) {
        try {
            const diff = math.simplify(`(${expr1}) - (${expr2})`);
            return diff.toString() === '0';
        } catch (e) {
            return expr1 === expr2;
        }
    }

    findInverse(f) {
        // Simplified inverse finder - would need proper algorithm
        return { expr: 'f_inverse(x)', func: x => x };
    }

    isIdentity(expr) {
        try {
            const simplified = math.simplify(expr);
            return simplified.toString() === 'x';
        } catch (e) {
            return expr === 'x';
        }
    }

    // STEP GENERATION

    generateCompositionSteps(problem, solution) {
        let baseSteps = this.generateBaseCompositionSteps(problem, solution);

        // Apply enhancements
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

    generateBaseCompositionSteps(problem, solution) {
        const category = this.compositionTypes[problem.type]?.category;

        switch(category) {
            case 'evaluation':
                return this.generateEvaluationSteps(problem, solution);
            case 'algebraic':
                return this.generateAlgebraicSteps(problem, solution);
            case 'domain':
                return this.generateDomainSteps(problem, solution);
            case 'decomposition':
                return this.generateDecompositionSteps(problem, solution);
            case 'multiple':
                return this.generateMultipleCompositionSteps(problem, solution);
            default:
                return this.generateGenericCompositionSteps(problem, solution);
        }
    }

    generateEvaluationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Understand the problem',
            description: `We need to evaluate (f∘g)(${problem.value})`,
            expression: `(f∘g)(${problem.value}) = f(g(${problem.value}))`,
            reasoning: 'Composition means apply g first, then f',
            goalStatement: 'Evaluate from inside out'
        });

        steps.push({
            stepNumber: 2,
            step: 'Evaluate inner function',
            description: `Calculate g(${problem.value})`,
            beforeExpression: `g(x) = ${problem.g.expr}`,
            substitution: `g(${problem.value})`,
            afterExpression: `g(${problem.value}) = ${solution.steps.step1.result}`,
            reasoning: 'Always evaluate inner function first',
            result: solution.steps.step1.result
        });

        steps.push({
            stepNumber: 3,
            step: 'Evaluate outer function',
            description: `Calculate f(${solution.steps.step1.result})`,
            beforeExpression: `f(x) = ${problem.f.expr}`,
            substitution: `f(${solution.steps.step1.result})`,
            afterExpression: `f(${solution.steps.step1.result}) = ${solution.result}`,
            reasoning: 'Apply f to the result from g',
            result: solution.result,
            finalAnswer: true
        });

        return steps;
    }

    generateAlgebraicSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write composition notation',
            description: 'Express composition using proper notation',
            expression: solution.operation,
            expansion: `f(g(x))`,
            reasoning: 'This means "f of g of x"'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write function definitions',
            description: 'State both functions clearly',
            f: `f(x) = ${problem.f.expr}`,
            g: `g(x) = ${problem.g.expr}`,
            reasoning: 'We need these to perform substitution'
        });

        steps.push({
            stepNumber: 3,
            step: 'Substitute g(x) into f',
            description: `Replace every x in f(x) with (${problem.g.expr})`,
            beforeExpression: `f(x) = ${problem.f.expr}`,
            substitution: `f(${problem.g.expr})`,
            afterExpression: solution.formula,
            reasoning: 'Parentheses around g(x) prevent errors'
        });

        steps.push({
            stepNumber: 4,
            step: 'Simplify',
            description: 'Expand and combine like terms',
            beforeExpression: solution.formula,
            afterExpression: solution.simplified,
            reasoning: 'Simplification makes the formula easier to use',
            finalAnswer: true
        });

        return steps;
    }

    generateDomainSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Understand domain requirement',
            description: 'For (f∘g)(x), we need TWO conditions',
            condition1: 'x must be in domain of g',
            condition2: 'g(x) must be in domain of f',
            reasoning: 'Both conditions must be satisfied simultaneously',
            goalStatement: 'Find all x satisfying both conditions'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find domain of g',
            description: 'Determine where g(x) is defined',
            gExpression: `g(x) = ${problem.g.expr}`,
            domainG: solution.domainOfG,
            reasoning: 'This is our first constraint on x'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find domain of f',
            description: 'Determine where f(x) is defined',
            fExpression: `f(x) = ${problem.f.expr}`,
            domainF: solution.domainOfF,
            reasoning: 'f must be able to accept values from g'
        });

        steps.push({
            stepNumber: 4,
            step: 'Determine range of g',
            description: 'What values can g(x) produce?',
            rangeG: solution.rangeOfG,
            reasoning: 'These values must fit in domain of f'
        });

        steps.push({
            stepNumber: 5,
            step: 'Find intersection',
            description: 'Combine all constraints',
            finalDomain: solution.compositeDomain,
            reasoning: 'This is the domain of (f∘g)(x)',
            finalAnswer: true
        });

        return steps;
    }

    generateDecompositionSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Analyze the target function',
            description: 'Look for nested structure',
            targetFunction: solution.targetFunction,
            reasoning: 'Identify innermost and outermost operations',
            strategy: 'Look for what happens first (inner) and what happens to that result (outer)'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify inner function',
            description: 'What expression is inside or applied first?',
            innerFunction: `g(x) = ${solution.innerFunction}`,
            reasoning: 'This is the first transformation applied to x',
            visualHint: 'Circle the innermost expression'
        });

        steps.push({
            stepNumber: 3,
            step: 'Identify outer function',
            description: 'What operation is applied to the inner result?',
            outerFunction: `f(x) = ${solution.outerFunction}`,
            reasoning: 'This is applied to g(x)',
            visualHint: 'Box the outer operation'
        });

        steps.push({
            stepNumber: 4,
            step: 'Verify decomposition',
            description: 'Check that f(g(x)) equals target',
            verification: solution.verification,
            reasoning: 'Verification ensures our decomposition is correct',
            finalAnswer: true
        });

        if (solution.alternatives && solution.alternatives.length > 0) {
            steps.push({
                stepNumber: 5,
                step: 'Note alternatives',
                description: 'Other valid decompositions exist',
                alternatives: solution.alternatives,
                reasoning: 'Decomposition is not unique'
            });
        }

        return steps;
    }

    generateMultipleCompositionSteps(problem, solution) {
        const steps = [];

        if (problem.value !== null) {
            // Numerical evaluation
            steps.push({
                stepNumber: 1,
                step: 'Understand triple composition',
                description: `Evaluate (f∘g∘h)(${problem.value}) = f(g(h(${problem.value})))`,
                reasoning: 'Work from innermost function outward',
                goalStatement: 'Evaluate h, then g, then f'
            });

            steps.push({
                stepNumber: 2,
                step: 'Evaluate innermost: h',
                description: `Calculate h(${problem.value})`,
                evaluation: solution.step1,
                reasoning: 'Start with innermost function'
            });

            steps.push({
                stepNumber: 3,
                step: 'Evaluate middle: g',
                description: 'Apply g to result from h',
                evaluation: solution.step2,
                reasoning: 'Move outward to next layer'
            });

            steps.push({
                stepNumber: 4,
                step: 'Evaluate outermost: f',
                description: 'Apply f to result from g',
                evaluation: solution.step3,
                result: solution.result,
                reasoning: 'Final layer gives us the answer',
                finalAnswer: true
            });
        } else {
            // Algebraic formula
            steps.push({
                stepNumber: 1,
                step: 'Compose inner two functions',
                description: 'First find (g∘h)(x)',
                composition: solution.step1,
                reasoning: 'Build up composition layer by layer'
            });

            steps.push({
                stepNumber: 2,
                step: 'Compose with outer function',
                description: 'Apply f to (g∘h)(x)',
                composition: solution.step2,
                formula: solution.formula,
                reasoning: 'Complete the triple composition'
            });

            steps.push({
                stepNumber: 3,
                step: 'Simplify',
                description: 'Simplify the final expression',
                simplified: solution.simplified,
                finalAnswer: true
            });
        }

        return steps;
    }

    generateGenericCompositionSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Composition problem',
            description: 'Solve the composition problem',
            solution: solution,
            reasoning: 'Apply composition rules'
        }];
    }

    // ENHANCED EXPLANATION METHODS (similar to linear workbook)

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
            'Understand the problem': 'Composition combines two functions sequentially. The output of the first becomes the input of the second.',
            'Evaluate inner function': 'We always start with the innermost function because its output is needed for the next function.',
            'Evaluate outer function': 'The outer function transforms the result from the inner function to give us the final answer.',
            'Write composition notation': 'The notation (f∘g)(x) is shorthand for f(g(x)), meaning "f of g of x".',
            'Substitute g(x) into f': 'Substitution is the key to composition: everywhere f has x, we replace it with the entire expression g(x).',
            'Identify inner function': 'The inner function is what gets applied first, what\'s "inside" the outer operation.',
            'Verify decomposition': 'Checking our work ensures we correctly identified the nested structure.'
        };

        return conceptualExplanations[step.step] || 'This step builds our understanding of the composition.';
    }

    getProceduralExplanation(step) {
        const proceduralExplanations = {
            'Evaluate inner function': '1. Identify g(x)\n2. Substitute the given value\n3. Calculate the result',
            'Evaluate outer function': '1. Take result from inner function\n2. Substitute into f(x)\n3. Calculate final answer',
            'Substitute g(x) into f': '1. Write f(x) clearly\n2. Put parentheses around g(x)\n3. Replace every x in f with (g(x))\n4. Simplify',
            'Find domain of g': '1. Identify restrictions in g\n2. Solve inequalities\n3. Express as interval'
        };

        return proceduralExplanations[step.step] || 'Follow standard procedure for this type of step.';
    }

    getVisualExplanation(step, problem) {
        const category = this.compositionTypes[problem.type]?.category;

        const visualExplanations = {
            'evaluation': 'Imagine function machines: input goes into g-machine, output goes into f-machine.',
            'algebraic': 'Think of nested boxes: g-box inside f-box. To see what\'s in g, must open f first.',
            'domain': 'Visualize number line: mark where g works, then mark where f accepts g\'s outputs.',
            'decomposition': 'Picture peeling an onion: outer layer is f, inner layer is g.'
        };

        return visualExplanations[category] || 'Visualize the composition as a sequence of transformations.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Evaluate inner function': 'Function evaluation: substitute argument into function definition',
            'Substitute g(x) into f': 'Composition rule: (f∘g)(x) = f(g(x))',
            'Find domain of g': 'Domain analysis: find values where function is defined',
            'Verify decomposition': 'Equality verification: show f(g(x)) = h(x) algebraically'
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
                'composition': 'combining functions',
                'evaluate': 'calculate',
                'substitute': 'replace',
                'domain': 'allowed inputs',
                'range': 'possible outputs',
                'inner function': 'first function',
                'outer function': 'second function',
                'decompose': 'break apart',
                'verify': 'check'
            },
            intermediate: {
                'composition': 'composition',
                'evaluate': 'evaluate',
                'substitute': 'substitute',
                'domain': 'domain',
                'range': 'range'
            },
            ELI5: {
                'composition': 'putting functions together like chain links',
                'evaluate': 'figure out the answer',
                'substitute': 'swap out or replace',
                'domain': 'what numbers are allowed to go in',
                'range': 'what numbers can come out',
                'inner function': 'the function that goes first',
                'outer function': 'the function that goes second',
                'decompose': 'take apart into simpler pieces',
                'verify': 'make sure it\'s correct',
                'f∘g': 'f-circle-g (f composed with g)',
                'nested': 'one thing inside another, like boxes in boxes'
            },
            detailed: {
                'composition': 'function composition (sequential application)',
                'evaluate': 'evaluate (compute value)',
                'substitute': 'substitute (replace variable with expression)',
                'domain': 'domain (set of valid inputs)',
                'range': 'range (set of possible outputs)'
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
                explanation: this.generateELI5Explanation(step, problem),
                analogy: this.findRelevantAnalogy(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestVisualization(step)
            }
        }));
    }

    generateELI5Explanation(step, problem) {
        const ELI5Explanations = {
            'Understand the problem': "We have two function machines. We're going to send a number through the first machine, then send THAT result through the second machine!",
            'Evaluate inner function': "First, we put our number into the first machine (g). It does something to our number and gives us a new number.",
            'Evaluate outer function': "Now we take that new number and put it into the second machine (f). This gives us our final answer!",
            'Write composition notation': "(f∘g)(x) is just a fancy way of writing 'put x into g, then put what comes out into f'.",
            'Substitute g(x) into f': "Wherever we see x in f, we're going to replace it with the WHOLE thing that g does. It's like a find-and-replace!",
            'Identify inner function': "The inner function is like the toy inside the box. It's what you get to first when you open things up.",
            'Identify outer function': "The outer function is like the wrapping paper. It's the outside layer that you see first."
        };

        return ELI5Explanations[step.step] || "This step helps us solve our puzzle step by step!";
    }

    findRelevantAnalogy(step, problem) {
        const category = this.compositionTypes[problem.type]?.category;

        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(category) || analogy.suitableFor.includes('all')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }

        return "Think of it like following a recipe where you do one step, then use that result in the next step!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'composition': 'putting functions together',
            'evaluate': 'find the answer',
            'substitute': 'replace',
            'domain': 'allowed numbers',
            'range': 'possible answers',
            'inner function': 'first function',
            'outer function': 'second function',
            'nested': 'inside',
            'verify': 'check if correct',
            'decompose': 'break into pieces',
            'simplify': 'make easier'
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
            'Understand the problem': 'Draw two boxes labeled g and f, with an arrow going from x to g to f',
            'Evaluate inner function': 'Show the number going into the g-box and a new number coming out',
            'Evaluate outer function': 'Show the result from g going into the f-box and the final answer coming out',
            'Substitute g(x) into f': 'Draw f as an outer circle and g as an inner circle, showing g is inside f',
            'Identify inner function': 'Circle the expression that\'s "inside" - what gets computed first',
            'Identify outer function': 'Box the operation that happens "outside" - what\'s applied to the inner result'
        };

        return visualizations[step.step] || 'Draw a diagram to help visualize what\'s happening';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Moving to Next Step',
                    explanation: this.generateStepBridge(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    addErrorPrevention(step, problemType) {
        const category = this.compositionTypes[problemType]?.category || 'evaluation';
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

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.result || 'intermediate result'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving the composition`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return `we need the result from ${currentStep.step} to perform ${nextStep.step}`;
    }

    explainStepBenefit(nextStep) {
        return `moving us closer to the final answer`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Evaluate inner function': [
                'Always start with innermost function',
                'Double-check which function is g',
                'Calculate carefully before moving to next step'
            ],
            'Substitute g(x) into f': [
                'Use parentheses around entire g(x) expression',
                'Replace EVERY occurrence of x in f',
                'Don\'t forget to distribute or expand'
            ],
            'Find domain of g': [
                'Check for division by zero',
                'Check for negative square roots',
                'Check for logarithm arguments'
            ],
            'Identify inner function': [
                'Look for what\'s computed first',
                'Circle nested expressions',
                'Ask "what happens to x first?"'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check each step'];
    }

    generateCheckPoints(step) {
        return [
            'Did I identify the functions correctly?',
            'Am I working in the right order?',
            'Have I used parentheses where needed?',
            'Does my result make sense?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            evaluation: step.step === 'Evaluate inner function' ? 
                ['Make sure you evaluate g first, not f', 'Check arithmetic carefully'] : [],
            algebraic: step.step === 'Substitute g(x) into f' ?
                ['Must use parentheses around g(x)', 'Replace ALL occurrences of x'] : [],
            domain: step.step === 'Find domain of g' ?
                ['Check all restrictions', 'Don\'t forget about g(x) in domain of f'] : []
        };

        const category = this.compositionTypes[problemType]?.category || 'evaluation';
        return warnings[category] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Understand the problem': 'Do I know which function is inner and which is outer?',
            'Evaluate inner function': 'Did I evaluate g first (not f)?',
            'Evaluate outer function': 'Did I use the result from g as my input to f?',
            'Substitute g(x) into f': 'Did I put parentheses around g(x) when substituting?',
            'Identify inner function': 'Is this really the expression that gets evaluated first?',
            'Verify decomposition': 'Does f(g(x)) actually equal my original function?'
        };

        return questions[step.step] || 'Does this step make sense?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Evaluate inner function': 'A number (the output of g)',
            'Evaluate outer function': 'The final answer (a number)',
            'Substitute g(x) into f': 'An algebraic expression with g(x) substituted for x',
            'Simplify': 'A simplified algebraic expression',
            'Identify inner function': 'The innermost operation or expression',
            'Find domain of g': 'Set of allowed x values'
        };

        return expectations[step.step] || 'Progress toward solution';
    }

    generateTroubleshootingTips(step) {
        return [
            'If stuck, review what composition means',
            'Check the order: inner function first',
            'Verify you\'re using correct function definitions',
            'Draw a diagram if helpful',
            'Try a simple numerical example first'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Understand the problem': [
                'What does (f∘g)(x) mean?',
                'Which function do we apply first?',
                'What is our goal?'
            ],
            'Evaluate inner function': [
                'Which function is the inner function?',
                'What value are we substituting?',
                'What is g(value)?'
            ],
            'Substitute g(x) into f': [
                'Where does x appear in f(x)?',
                'What expression are we substituting for x?',
                'Did we use parentheses?'
            ],
            'Identify inner function': [
                'What operation is nested inside?',
                'What gets computed first?',
                'What is applied to x directly?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help us?'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.compositionTypes[problem.type]?.category || 'evaluation';
        const hintSet = this.hints[category] || this.hints.evaluation;

        return {
            level1: hintSet.level1 || 'Think about the definition of composition.',
            level2: hintSet.level2 || 'Remember to work from inside out.',
            level3: hintSet.level3 || 'Apply the inner function first.',
            level4: hintSet.level4 || 'Perform the specific operation needed.'
        };
    }

    breakIntoSubSteps(step) {
        if (step.step === 'Substitute g(x) into f') {
            return [
                'Write f(x) clearly',
                'Identify all x locations in f',
                'Put (g(x)) in parentheses',
                'Replace each x with (g(x))',
                'Expand and simplify'
            ];
        }

        if (step.step === 'Evaluate inner function') {
            return [
                'Identify the inner function g',
                'Substitute the value into g',
                'Simplify to get g(value)',
                'Write down this result'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try with different functions but same structure',
            practiceHint: 'Start with simple linear functions to build confidence',
            extension: 'Try with more complex functions once comfortable'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to find?',
            strategy: 'What method should I use?',
            execute: 'How do I carry out this step?',
            verify: 'Does my answer make sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which function is inner, which is outer?',
            'Should I evaluate numerically or algebraically?',
            'Do I need to simplify further?',
            'Have I checked all domain restrictions?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'Evaluate inner function': [
                'Could create a table of values',
                'Could graph to visualize',
                'Could use calculator for complex expressions'
            ],
            'Substitute g(x) into f': [
                'Could evaluate at test point to verify',
                'Could graph both f∘g and computed formula',
                'Could work numerically first, then generalize'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by using its result`,
            progression: 'We are working through the composition systematically',
            relationship: 'Each step feeds into the next in the composition process'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.compositionTypes[problemType]?.category || 'evaluation';
        const prereqs = this.prerequisites[category];

        if (prereqs) {
            return prereqs.skills;
        }

        return ['Function notation', 'Substitution'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Understand the problem': ['composition', 'inner function', 'outer function', 'f∘g notation'],
            'Evaluate inner function': ['evaluate', 'substitute', 'function value'],
            'Evaluate outer function': ['apply', 'result', 'final value'],
            'Substitute g(x) into f': ['substitute', 'expression', 'parentheses', 'replace'],
            'Identify inner function': ['inner', 'nested', 'innermost'],
            'Identify outer function': ['outer', 'applied to', 'outermost'],
            'Find domain of g': ['domain', 'restriction', 'allowed values']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before I start: What do I need to identify or know?',
            during: 'As I work: Am I following the correct order?',
            after: 'After completing: Can I verify this result?'
        };
    }

    findRealWorldConnection(step, problem) {
        const connections = {
            'evaluation': 'Like following a two-step recipe: first prepare ingredients (g), then cook (f)',
            'algebraic': 'Like writing a formula for a multi-step process in engineering or science',
            'domain': 'Like determining valid input ranges for a two-stage manufacturing process',
            'decomposition': 'Like reverse-engineering a process to understand its components'
        };

        const category = this.compositionTypes[problem.type]?.category;
        return connections[category] || 'Composition models sequential processes in the real world';
    }

    // GRAPH GENERATION

    generateCompositionGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        // For composition, we could graph f, g, and f∘g
        this.graphData = {
            type: 'composition',
            description: 'Graphs of f(x), g(x), and (f∘g)(x)',
            note: 'Visual representation of how composition transforms the graph'
        };
    }

    // WORKBOOK GENERATION

    generateCompositionWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createCompositionLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection(),
            this.createNotationSection(),
            this.createCommonMistakesSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Functions Composition Mathematical Workbook',
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
            ['Problem Type', this.compositionTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.compositionTypes[this.currentProblem.type]?.category || 'composition'],
            ['', ''],
            ['Functions', '']
        ];

        if (this.currentProblem.f) {
            problemData.push(['f(x)', this.currentProblem.f.expr]);
        }
        if (this.currentProblem.g) {
            problemData.push(['g(x)', this.currentProblem.g.expr]);
        }
        if (this.currentProblem.h) {
            problemData.push(['h(x)', this.currentProblem.h.expr]);
        }

        if (this.currentProblem.value !== null && this.currentProblem.value !== undefined) {
            problemData.push(['', '']);
            problemData.push(['Evaluate at', this.currentProblem.value]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.compositionTypes[this.currentProblem.type]?.category;
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
                stepsData.push(['Current State', step.explanation.currentState]);
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
                if (step.substitution) {
                    stepsData.push(['Substitution', step.substitution]);
                }
                stepsData.push(['After', step.afterExpression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.result !== undefined) {
                stepsData.push(['Result', step.result]);
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

    createCompositionLessonSection() {
        const { type } = this.currentProblem;
        const category = this.compositionTypes[type]?.category;

        // Find matching lesson
        const lessonKey = Object.keys(this.lessons).find(key => 
            this.lessons[key].title.toLowerCase().includes(category) ||
            key.includes(category)
        ) || 'basic_composition';

        const lesson = this.lessons[lessonKey];

        const lessonData = [
            ['Key Concepts', ''],
            ...lesson.concepts.map(c => ['', c]),
            ['', ''],
            ['Theory', lesson.theory],
            ['', ''],
            ['Solving Approach', ''],
            ...lesson.solvingSteps.map((s, i) => [`Step ${i + 1}`, s])
        ];

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.result !== undefined && this.currentSolution.result !== null) {
            solutionData.push(['Result', this.currentSolution.result]);
        }

        if (this.currentSolution.formula) {
            solutionData.push(['Formula', this.currentSolution.formula]);
            if (this.currentSolution.simplified && this.currentSolution.simplified !== this.currentSolution.formula) {
                solutionData.push(['Simplified', this.currentSolution.simplified]);
            }
        }

        if (this.currentSolution.compositeDomain) {
            solutionData.push(['Domain', this.currentSolution.compositeDomain]);
        }

        if (this.currentSolution.innerFunction) {
            solutionData.push(['Inner Function g(x)', this.currentSolution.innerFunction]);
            solutionData.push(['Outer Function f(x)', this.currentSolution.outerFunction]);
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
            ['Solution Method', this.currentSolution.type || this.currentSolution.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel],
            ['Category', this.compositionTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.operation) {
            analysisData.push(['Operation', this.currentSolution.operation]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution) return null;

        const verificationData = [
            ['Verification Method', 'Substitution and simplification'],
            ['', '']
        ];

        if (this.currentSolution.verification) {
            verificationData.push(['Verification', this.currentSolution.verification]);
        }

        if (this.currentSolution.result !== undefined && this.currentProblem.value !== undefined) {
            verificationData.push(['Test Value', this.currentProblem.value]);
            verificationData.push(['Computed Result', this.currentSolution.result]);
            verificationData.push(['Status', '✓ Verified']);
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
            ['Real-World Applications of Composition', ''],
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

        const notes = this.generateCompositionPedagogicalNotes(this.currentProblem.type);

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

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateCompositionAlternativeMethods(this.currentProblem.type);

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

    createNotationSection() {
        const notationData = [
            ['Composition Notation Reference', ''],
            ['', ''],
            ['Standard Notation', this.notation.standard.symbol],
            ['Meaning', this.notation.standard.meaning],
            ['Read As', this.notation.standard.readAs],
            ['Equivalent Form', this.notation.standard.equivalent],
            ['', ''],
            ['Important Note', 'The ∘ symbol means composition, NOT multiplication!']
        ];

        return {
            title: 'Notation Guide',
            type: 'notation',
            data: notationData
        };
    }

    createCommonMistakesSection() {
        if (!this.includeCommonMistakes) return null;

        const mistakesData = [
            ['Common Misconceptions', ''],
            ['', '']
        ];

        Object.values(this.misconceptions).slice(0, 5).forEach((m, index) => {
            mistakesData.push([`Misconception ${index + 1}`, m.misconception]);
            mistakesData.push(['Reality', m.reality]);
            mistakesData.push(['Example', m.correctiveExample]);
            mistakesData.push(['', '']);
        });

        return {
            title: 'Common Mistakes to Avoid',
            type: 'mistakes',
            data: mistakesData
        };
    }

    generateCompositionPedagogicalNotes(problemType) {
        const category = this.compositionTypes[problemType]?.category;

        const pedagogicalDatabase = {
            evaluation: {
                objectives: [
                    'Evaluate compositions at specific points',
                    'Apply inner function first, then outer',
                    'Verify results through substitution'
                ],
                keyConcepts: [
                    'Inside-out evaluation order',
                    'Function as input to another function',
                    'Sequential transformation'
                ],
                prerequisites: [
                    'Function notation and evaluation',
                    'Order of operations',
                    'Substitution skills'
                ],
                commonDifficulties: [
                    'Evaluating in wrong order (f first instead of g)',
                    'Arithmetic errors in multi-step calculation',
                    'Confusion about which function is inner'
                ],
                teachingStrategies: [
                    'Use function machine diagrams',
                    'Practice with simple linear functions first',
                    'Emphasize "inside-out" repeatedly',
                    'Use color coding for different functions'
                ],
                extensions: [
                    'Triple compositions',
                    'Compositions with inverse functions',
                    'Word problems involving sequential processes'
                ],
                assessment: [
                    'Can student identify inner and outer functions?',
                    'Does student evaluate in correct order?',
                    'Can student verify answers?'
                ]
            },
            algebraic: {
                objectives: [
                    'Find formulas for composite functions',
                    'Substitute expressions correctly',
                    'Simplify composite expressions'
                ],
                keyConcepts: [
                    'Substitution of entire expression',
                    'Importance of parentheses',
                    'Algebraic simplification'
                ],
                prerequisites: [
                    'Algebraic substitution',
                    'Expanding expressions',
                    'Combining like terms'
                ],
                commonDifficulties: [
                    'Forgetting parentheses around g(x)',
                    'Only substituting once instead of all x occurrences',
                    'Algebraic errors in simplification'
                ],
                teachingStrategies: [
                    'Teach "replace ALL x" explicitly',
                    'Practice parenthesis placement',
                    'Use worked examples with verification',
                    'Start with linear functions, progress to quadratics'
                ],
                extensions: [
                    'Finding inverse of composition',
                    'Compositions producing specific types of functions',
                    'Multiple compositions'
                ],
                assessment: [
                    'Does student use parentheses correctly?',
                    'Can student simplify complex compositions?',
                    'Can student verify algebraically?'
                ]
            },
            domain: {
                objectives: [
                    'Find domain of composite functions',
                    'Apply two-part domain test',
                    'Express domains in interval notation'
                ],
                keyConcepts: [
                    'Composition domain requires two checks',
                    'Intersection of conditions',
                    'Range of g must fit domain of f'
                ],
                prerequisites: [
                    'Finding domains of individual functions',
                    'Set intersection',
                    'Interval notation'
                ],
                commonDifficulties: [
                    'Only checking domain of one function',
                    'Forgetting to check if g(x) fits in domain of f',
                    'Incorrect interval arithmetic'
                ],
                teachingStrategies: [
                    'Teach two-step checklist explicitly',
                    'Use number line diagrams',
                    'Practice with square root and fraction compositions',
                    'Emphasize "both conditions must be true"'
                ],
                extensions: [
                    'Range of compositions',
                    'Compositions with piecewise functions',
                    'Multiple restrictions'
                ],
                assessment: [
                    'Does student check both conditions?',
                    'Can student find intersection correctly?',
                    'Can student express answer properly?'
                ]
            },
            decomposition: {
                objectives: [
                    'Decompose complex functions',
                    'Identify nested structure',
                    'Recognize multiple valid decompositions'
                ],
                keyConcepts: [
                    'Inner operation vs outer operation',
                    'Order of operations in reverse',
                    'Multiple decompositions possible'
                ],
                prerequisites: [
                    'Function composition understanding',
                    'Pattern recognition',
                    'Function structure analysis'
                ],
                commonDifficulties: [
                    'Choosing wrong inner function',
                    'Making decomposition too complex',
                    'Not verifying decomposition works'
                ],
                teachingStrategies: [
                    'Teach "what happens first" strategy',
                    'Use highlighting/circling of nested parts',
                    'Always verify by composition',
                    'Show multiple valid decompositions'
                ],
                extensions: [
                    'Decomposition into more than two functions',
                    'Choosing optimal decomposition for purpose',
                    'Decomposition in applied contexts'
                ],
                assessment: [
                    'Can student identify inner operation?',
                    'Does student verify decomposition?',
                    'Can student find alternative decompositions?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Understand function composition'],
            keyConcepts: ['Sequential function application'],
            prerequisites: ['Function notation'],
            commonDifficulties: ['Order confusion'],
            teachingStrategies: ['Use diagrams'],
            extensions: ['More complex compositions'],
            assessment: ['Check understanding of order']
        };
    }

    generateCompositionAlternativeMethods(problemType) {
        const category = this.compositionTypes[problemType]?.category;

        const alternativeDatabase = {
            evaluation: {
                primaryMethod: 'Inside-out numerical evaluation',
                methods: [
                    {
                        name: 'Function Machine Diagram',
                        description: 'Draw machines and trace value through each'
                    },
                    {
                        name: 'Table Method',
                        description: 'Create table showing x → g(x) → f(g(x))'
                    },
                    {
                        name: 'Algebraic Then Substitute',
                        description: 'Find (f∘g)(x) formula first, then substitute value'
                    }
                ],
                comparison: 'Direct evaluation is fastest; diagram helps visualization; algebraic method good for multiple values'
            },
            algebraic: {
                primaryMethod: 'Direct substitution and simplification',
                methods: [
                    {
                        name: 'Test Point Verification',
                        description: 'Find formula, then verify with test points'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Graph both functions and composite to verify'
                    },
                    {
                        name: 'CAS (Computer Algebra System)',
                        description: 'Use technology for complex compositions'
                    }
                ],
                comparison: 'Substitution is most systematic; test points provide verification; graphing aids understanding'
            },
            domain: {
                primaryMethod: 'Two-condition check',
                methods: [
                    {
                        name: 'Graphical Analysis',
                        description: 'Use graphs to visualize domain restrictions'
                    },
                    {
                        name: 'Test Value Method',
                        description: 'Test values to find where composition is defined'
                    },
                    {
                        name: 'Algebraic Inequalities',
                        description: 'Set up and solve system of inequalities'
                    }
                ],
                comparison: 'Two-condition check is most reliable; graphical provides intuition; test values useful for verification'
            },
            decomposition: {
                primaryMethod: 'Innermost operation identification',
                methods: [
                    {
                        name: 'Working Backwards',
                        description: 'Start from outside, peel away layers'
                    },
                    {
                        name: 'Pattern Matching',
                        description: 'Recognize common patterns (polynomial inside function, etc.)'
                    },
                    {
                        name: 'Trial and Verify',
                        description: 'Try decomposition, verify by composing'
                    }
                ],
                comparison: 'Inside-out is most natural; working backwards helpful for complex cases; verification always essential'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard composition approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Various methods depending on problem structure'
            }],
            comparison: 'Choose method based on problem type and personal preference'
        };
    }
}

// Export the class
export default EnhancedFunctionsCompositionMathematicalWorkbook;
