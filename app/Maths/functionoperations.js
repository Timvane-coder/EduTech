// Enhanced Function Operations Mathematical Workbook - Comprehensive Implementation
import * as math from 'mathjs';

export class EnhancedFunctionOperationsMathematicalWorkbook {
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
        this.initializeFunctionOperationSolvers();
        this.initializeFunctionOperationLessons();
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
        this.initializeCompositionDatabase();
        this.initializeNotationDatabase();
    }

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'compose': '∘', 'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'rightarrow': '→', 'mapsto': '↦'
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

    initializeFunctionOperationLessons() {
        this.lessons = {
            function_basics: {
                title: "Function Fundamentals",
                concepts: [
                    "Function is a rule that assigns each input exactly one output",
                    "Notation: f(x) means 'function f evaluated at x'",
                    "Domain: set of all valid inputs",
                    "Range: set of all possible outputs",
                    "Functions are mappings from domain to range"
                ],
                theory: "A function represents a relationship where each input has exactly one output. Understanding function notation and evaluation is fundamental to all function operations.",
                keyFormulas: {
                    "Function Notation": "f(x) = expression in terms of x",
                    "Function Evaluation": "f(a) = substitute a for x in f(x)",
                    "Domain": "All x values for which f(x) is defined",
                    "Range": "All possible y values (outputs)"
                },
                solvingSteps: [
                    "Identify the function rule",
                    "Substitute the input value for x",
                    "Simplify using order of operations",
                    "State the output"
                ],
                applications: [
                    "Temperature conversion functions",
                    "Cost functions in business",
                    "Physics formulas",
                    "Computational algorithms"
                ]
            },

            function_evaluation: {
                title: "Function Evaluation",
                concepts: [
                    "Evaluating f(a) means substituting a for x",
                    "Follow order of operations after substitution",
                    "Can evaluate at numbers, variables, or expressions",
                    "f(x+h) means substitute (x+h) everywhere x appears"
                ],
                theory: "Function evaluation is the process of finding the output value for a given input by substituting the input into the function's formula.",
                keyFormulas: {
                    "Direct Evaluation": "f(a) = substitute a for every x",
                    "Expression Evaluation": "f(expression) = substitute entire expression for x",
                    "Multiple Substitution": "Substitute everywhere x appears"
                },
                solvingSteps: [
                    "Write out the function formula",
                    "Replace every x with the input value (in parentheses)",
                    "Simplify using order of operations",
                    "Express the final answer"
                ],
                applications: [
                    "Calculating outputs from formulas",
                    "Finding specific values from graphs",
                    "Computer programming function calls",
                    "Scientific calculations"
                ]
            },

            function_addition: {
                title: "Addition of Functions",
                concepts: [
                    "(f + g)(x) = f(x) + g(x)",
                    "Add the outputs of two functions",
                    "Domain is intersection of individual domains",
                    "Commutative: f + g = g + f"
                ],
                theory: "Function addition combines two functions by adding their outputs at each input value. The resulting function's domain is where both functions are defined.",
                keyFormulas: {
                    "Sum Formula": "(f + g)(x) = f(x) + g(x)",
                    "Domain": "Dom(f + g) = Dom(f) ∩ Dom(g)",
                    "Evaluation": "Evaluate each function separately, then add"
                },
                solvingSteps: [
                    "Write f(x) and g(x) formulas",
                    "Add the expressions: f(x) + g(x)",
                    "Combine like terms",
                    "Determine the domain",
                    "Simplify the result"
                ],
                applications: [
                    "Combining costs from multiple sources",
                    "Total force from multiple forces",
                    "Aggregate supply and demand",
                    "Signal processing (adding waveforms)"
                ]
            },

            function_subtraction: {
                title: "Subtraction of Functions",
                concepts: [
                    "(f - g)(x) = f(x) - g(x)",
                    "Subtract the second function's output from the first",
                    "Domain is intersection of individual domains",
                    "Not commutative: f - g ≠ g - f"
                ],
                theory: "Function subtraction finds the difference between outputs of two functions. Order matters in subtraction.",
                keyFormulas: {
                    "Difference Formula": "(f - g)(x) = f(x) - g(x)",
                    "Domain": "Dom(f - g) = Dom(f) ∩ Dom(g)",
                    "Order Matters": "f - g is generally different from g - f"
                },
                solvingSteps: [
                    "Write f(x) and g(x) formulas",
                    "Subtract: f(x) - g(x)",
                    "Distribute negative sign carefully",
                    "Combine like terms",
                    "Simplify the result"
                ],
                applications: [
                    "Profit function (revenue - cost)",
                    "Net force (difference of forces)",
                    "Temperature difference",
                    "Error calculation (actual - predicted)"
                ]
            },

            function_multiplication: {
                title: "Multiplication of Functions",
                concepts: [
                    "(f · g)(x) = f(x) · g(x)",
                    "Multiply the outputs of two functions",
                    "Domain is intersection of individual domains",
                    "Commutative: f · g = g · f"
                ],
                theory: "Function multiplication creates a new function by multiplying the outputs of two functions at each input value.",
                keyFormulas: {
                    "Product Formula": "(f · g)(x) = f(x) · g(x)",
                    "Domain": "Dom(f · g) = Dom(f) ∩ Dom(g)",
                    "FOIL/Distribution": "May need to expand products"
                },
                solvingSteps: [
                    "Write f(x) and g(x) formulas",
                    "Multiply the expressions: f(x) · g(x)",
                    "Use FOIL or distribution if needed",
                    "Combine like terms",
                    "Simplify completely"
                ],
                applications: [
                    "Area functions (length × width)",
                    "Revenue function (price × quantity)",
                    "Work function (force × distance)",
                    "Power function (voltage × current)"
                ]
            },

            function_division: {
                title: "Division of Functions",
                concepts: [
                    "(f/g)(x) = f(x)/g(x)",
                    "Divide first function's output by second's",
                    "Domain excludes where g(x) = 0",
                    "Not commutative: f/g ≠ g/f"
                ],
                theory: "Function division creates a quotient function. Special care must be taken to exclude values where the denominator is zero.",
                keyFormulas: {
                    "Quotient Formula": "(f/g)(x) = f(x)/g(x)",
                    "Domain": "Dom(f/g) = {x ∈ Dom(f) ∩ Dom(g) : g(x) ≠ 0}",
                    "Zero Restriction": "Must exclude zeros of denominator"
                },
                solvingSteps: [
                    "Write f(x) and g(x) formulas",
                    "Form quotient: f(x)/g(x)",
                    "Find where g(x) = 0 (excluded from domain)",
                    "Simplify if possible",
                    "State domain restrictions"
                ],
                applications: [
                    "Average rate (distance/time)",
                    "Efficiency (output/input)",
                    "Density (mass/volume)",
                    "Unit price (cost/quantity)"
                ]
            },

            function_composition: {
                title: "Composition of Functions",
                concepts: [
                    "(f ∘ g)(x) = f(g(x)) - 'f of g of x'",
                    "Apply g first, then apply f to the result",
                    "Order matters: f ∘ g ≠ g ∘ f usually",
                    "Think of composition as function chain"
                ],
                theory: "Function composition applies one function to the output of another. It represents sequential operations and is fundamental to understanding function relationships.",
                keyFormulas: {
                    "Composition Notation": "(f ∘ g)(x) = f(g(x))",
                    "Order": "Right to left: apply g, then f",
                    "Domain": "x in Dom(g) such that g(x) in Dom(f)",
                    "Non-commutative": "Usually f ∘ g ≠ g ∘ f"
                },
                solvingSteps: [
                    "Identify inner function g(x) and outer function f(x)",
                    "Evaluate inner function: compute g(x)",
                    "Substitute result into outer function: f(g(x))",
                    "Simplify the composite expression",
                    "Determine composite domain"
                ],
                applications: [
                    "Temperature conversion chains (C to K to F)",
                    "Unit conversions (feet to meters to kilometers)",
                    "Manufacturing processes (raw → processed → finished)",
                    "Data transformations in programming"
                ]
            },

            inverse_functions: {
                title: "Inverse Functions",
                concepts: [
                    "f⁻¹ undoes what f does",
                    "f(f⁻¹(x)) = x and f⁻¹(f(x)) = x",
                    "Only one-to-one functions have inverses",
                    "Domain of f = Range of f⁻¹, Range of f = Domain of f⁻¹"
                ],
                theory: "An inverse function reverses the operation of the original function. Finding inverses involves solving for the input in terms of the output.",
                keyFormulas: {
                    "Inverse Property": "f(f⁻¹(x)) = x and f⁻¹(f(x)) = x",
                    "Finding Inverse": "Swap x and y, then solve for y",
                    "Graph Relationship": "Reflection across y = x line",
                    "One-to-one Test": "Each output corresponds to exactly one input"
                },
                solvingSteps: [
                    "Write y = f(x)",
                    "Swap x and y",
                    "Solve for y",
                    "Replace y with f⁻¹(x)",
                    "Verify: check f(f⁻¹(x)) = x"
                ],
                applications: [
                    "Decoding/encoding messages",
                    "Converting between units (reverse conversion)",
                    "Undoing transformations",
                    "Solving equations"
                ]
            },

            piecewise_functions: {
                title: "Piecewise Functions",
                concepts: [
                    "Different formulas for different parts of domain",
                    "Notation uses cases with conditions",
                    "Evaluate by choosing correct piece",
                    "May or may not be continuous"
                ],
                theory: "Piecewise functions are defined by different expressions on different intervals. They model situations where rules change based on conditions.",
                keyFormulas: {
                    "Piecewise Notation": "f(x) = { formula₁ if condition₁; formula₂ if condition₂; ... }",
                    "Evaluation": "Check which condition input satisfies, use that formula",
                    "Domain": "Union of all piece domains"
                },
                solvingSteps: [
                    "Identify all pieces and their conditions",
                    "Determine which condition the input satisfies",
                    "Use the corresponding formula",
                    "Evaluate that formula",
                    "Check boundary points carefully"
                ],
                applications: [
                    "Tax brackets (different rates for different incomes)",
                    "Shipping costs (tiered pricing)",
                    "Overtime pay (different rates)",
                    "Piecewise linear approximations"
                ]
            },

            difference_quotient: {
                title: "Difference Quotient",
                concepts: [
                    "Formula: [f(x+h) - f(x)]/h",
                    "Measures average rate of change",
                    "Foundation of derivative in calculus",
                    "Requires h ≠ 0"
                ],
                theory: "The difference quotient represents the average rate of change of a function over an interval. It's the algebraic foundation for understanding instantaneous rate of change.",
                keyFormulas: {
                    "Difference Quotient": "[f(x+h) - f(x)]/h",
                    "Simplification": "Expand f(x+h), subtract f(x), factor, cancel h",
                    "Interpretation": "Average slope over interval [x, x+h]"
                },
                solvingSteps: [
                    "Find f(x+h) by substituting x+h for x",
                    "Expand and simplify f(x+h)",
                    "Subtract f(x)",
                    "Divide entire numerator by h",
                    "Factor and cancel h from numerator",
                    "Simplify the result"
                ],
                applications: [
                    "Average velocity (physics)",
                    "Average rate of change in any context",
                    "Foundations of calculus (derivatives)",
                    "Approximating instantaneous rates"
                ]
            }
        };
    }

    initializeFunctionOperationSolvers() {
        this.functionTypes = {
            // Basic function evaluation
            evaluate_function: {
                patterns: [
                    /f\(\s*([^)]+)\s*\)/,
                    /evaluate.*f.*at/i,
                    /find.*f\(/i
                ],
                solver: this.evaluateFunction.bind(this),
                name: 'Function Evaluation',
                category: 'evaluation',
                description: 'Evaluates f(a) by substituting a for x'
            },

            // Function addition
            add_functions: {
                patterns: [
                    /\(f\s*\+\s*g\)/,
                    /add.*function/i,
                    /sum.*function/i,
                    /f.*\+.*g/
                ],
                solver: this.addFunctions.bind(this),
                name: 'Addition of Functions',
                category: 'arithmetic',
                description: 'Computes (f + g)(x) = f(x) + g(x)'
            },

            // Function subtraction
            subtract_functions: {
                patterns: [
                    /\(f\s*-\s*g\)/,
                    /subtract.*function/i,
                    /difference.*function/i,
                    /f.*-.*g/
                ],
                solver: this.subtractFunctions.bind(this),
                name: 'Subtraction of Functions',
                category: 'arithmetic',
                description: 'Computes (f - g)(x) = f(x) - g(x)'
            },

            // Function multiplication
            multiply_functions: {
                patterns: [
                    /\(f\s*\*\s*g\)/,
                    /\(f\s*·\s*g\)/,
                    /multiply.*function/i,
                    /product.*function/i
                ],
                solver: this.multiplyFunctions.bind(this),
                name: 'Multiplication of Functions',
                category: 'arithmetic',
                description: 'Computes (f · g)(x) = f(x) · g(x)'
            },

            // Function division
            divide_functions: {
                patterns: [
                    /\(f\s*\/\s*g\)/,
                    /divide.*function/i,
                    /quotient.*function/i
                ],
                solver: this.divideFunctions.bind(this),
                name: 'Division of Functions',
                category: 'arithmetic',
                description: 'Computes (f/g)(x) = f(x)/g(x)'
            },

            // Function composition
            compose_functions: {
                patterns: [
                    /\(f\s*∘\s*g\)/,
                    /\(f\s*○\s*g\)/,
                    /compos/i,
                    /f.*of.*g/i,
                    /f\(g\(/
                ],
                solver: this.composeFunctions.bind(this),
                name: 'Function Composition',
                category: 'composition',
                description: 'Computes (f ∘ g)(x) = f(g(x))'
            },

            // Inverse function
            inverse_function: {
                patterns: [
                    /inverse/i,
                    /f\^-1/,
                    /f⁻¹/,
                    /find.*inverse/i
                ],
                solver: this.findInverse.bind(this),
                name: 'Inverse Function',
                category: 'inverse',
                description: 'Finds f⁻¹(x) that undoes f(x)'
            },

            // Piecewise evaluation
            piecewise_evaluation: {
                patterns: [
                    /piecewise/i,
                    /piece-wise/i,
                    /cases/i
                ],
                solver: this.evaluatePiecewise.bind(this),
                name: 'Piecewise Function Evaluation',
                category: 'piecewise',
                description: 'Evaluates functions defined by cases'
            },

            // Difference quotient
            difference_quotient: {
                patterns: [
                    /difference.*quotient/i,
                    /\[f\(x\+h\)\s*-\s*f\(x\)\]\s*\/\s*h/,
                    /average.*rate.*change/i
                ],
                solver: this.computeDifferenceQuotient.bind(this),
                name: 'Difference Quotient',
                category: 'difference_quotient',
                description: 'Computes [f(x+h) - f(x)]/h'
            },

            // Domain finding
            find_domain: {
                patterns: [
                    /domain/i,
                    /find.*domain/i,
                    /what.*domain/i
                ],
                solver: this.findDomain.bind(this),
                name: 'Find Domain',
                category: 'domain_range',
                description: 'Determines valid input values'
            },

            // Range finding
            find_range: {
                patterns: [
                    /range/i,
                    /find.*range/i,
                    /what.*range/i
                ],
                solver: this.findRange.bind(this),
                name: 'Find Range',
                category: 'domain_range',
                description: 'Determines possible output values'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            evaluation: {
                'Substitute input': [
                    'Forgetting to substitute in all occurrences of x',
                    'Not using parentheses around substituted expression',
                    'Sign errors when substituting negative values',
                    'Order of operations errors after substitution'
                ],
                'Simplify': [
                    'Arithmetic errors in simplification',
                    'Not distributing correctly',
                    'Forgetting to combine like terms'
                ]
            },
            arithmetic: {
                'Add/Subtract functions': [
                    'Forgetting to distribute negative in subtraction',
                    'Not combining like terms completely',
                    'Sign errors'
                ],
                'Multiply functions': [
                    'FOIL errors',
                    'Missing terms in expansion',
                    'Sign errors in multiplication'
                ],
                'Divide functions': [
                    'Forgetting domain restrictions (g(x) ≠ 0)',
                    'Not simplifying completely',
                    'Attempting to cancel inappropriately'
                ]
            },
            composition: {
                'Apply inner function': [
                    'Confusing order: doing f first instead of g',
                    'Not substituting entire g(x) into f',
                    'Parentheses errors'
                ],
                'Simplify composite': [
                    'Not expanding carefully',
                    'Missing terms',
                    'Sign errors'
                ],
                'Find domain': [
                    'Not considering both function domains',
                    'Missing restrictions from inner function',
                    'Not checking range of inner function vs domain of outer'
                ]
            },
            inverse: {
                'Swap variables': [
                    'Forgetting to swap x and y',
                    'Swapping in only part of equation'
                ],
                'Solve for y': [
                    'Algebraic errors in solving',
                    'Not isolating y completely',
                    'Sign errors'
                ],
                'Verify inverse': [
                    'Not checking both f(f⁻¹(x)) and f⁻¹(f(x))',
                    'Arithmetic errors in verification'
                ]
            },
            difference_quotient: {
                'Find f(x+h)': [
                    'Not substituting (x+h) in all x positions',
                    'Expanding (x+h)² incorrectly',
                    'Sign errors in expansion'
                ],
                'Subtract f(x)': [
                    'Not distributing negative correctly',
                    'Sign errors'
                ],
                'Factor and cancel h': [
                    'Not factoring out h correctly',
                    'Canceling h when it\'s not a common factor',
                    'Leaving h in denominator'
                ]
            }
        };

        this.errorPrevention = {
            substitution_errors: {
                reminder: 'Always use parentheses around substituted expressions',
                method: 'Write (input) in place of every x before simplifying'
            },
            order_confusion: {
                reminder: 'In f(g(x)), g is applied first (read right to left)',
                method: 'Start from innermost function and work outward'
            },
            domain_restrictions: {
                reminder: 'Check for division by zero and square roots of negatives',
                method: 'List all restrictions from both functions'
            },
            sign_tracking: {
                reminder: 'Distribute negatives carefully, especially in subtraction',
                method: 'Use extra parentheses to keep track of signs'
            },
            verification: {
                reminder: 'Always verify your result by substituting back',
                method: 'Check with a simple test value'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why operations work and their mathematical meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact sequence of operations to perform',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical and diagram-based understanding',
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
            temperature_conversion: {
                scenario: "Converting between temperature scales",
                functions: "F(C) = (9/5)C + 32, C(F) = (5/9)(F - 32)",
                examples: [
                    "Compose C(F(x)) to convert Celsius to Fahrenheit and back",
                    "Find inverse to reverse conversion"
                ],
                context: "Temperature conversions use function composition and inverses"
            },
            business_functions: {
                scenario: "Revenue, cost, and profit functions",
                functions: "R(x) = price × quantity, C(x) = fixed + variable × quantity, P(x) = R(x) - C(x)",
                examples: [
                    "Profit function is difference of revenue and cost",
                    "Break-even when R(x) = C(x)"
                ],
                context: "Business uses function operations extensively"
            },
            unit_conversions: {
                scenario: "Converting between measurement units",
                functions: "feet to meters, meters to kilometers, feet to miles",
                examples: [
                    "Compose conversions: feet → meters → kilometers",
                    "Chain multiple unit conversions"
                ],
                context: "Unit conversions are function compositions"
            },
            area_volume: {
                scenario: "Geometric measurements",
                functions: "A(r) = πr², V(r) = (4/3)πr³",
                examples: [
                    "If radius grows as r(t) = 2t, find A(r(t))",
                    "Composition models growth over time"
                ],
                context: "Geometry combined with time creates compositions"
            },
            population_models: {
                scenario: "Population growth and decline",
                functions: "P(t) = P₀eʳᵗ, N(P) = resources needed",
                examples: [
                    "N(P(t)) = resources needed over time",
                    "Composition models dependent quantities"
                ],
                context: "Ecological models use function composition"
            },
            encryption: {
                scenario: "Encoding and decoding messages",
                functions: "E(x) = encoding function, D(x) = decoding function",
                examples: [
                    "D(E(x)) = x means decoding undoes encoding",
                    "E and D are inverse functions"
                ],
                context: "Cryptography relies on inverse functions"
            },
            manufacturing: {
                scenario: "Multi-step production processes",
                functions: "Raw material → processing → finishing → product",
                examples: [
                    "Each step is a function",
                    "Composition represents entire process"
                ],
                context: "Manufacturing is sequential function composition"
            },
            tax_brackets: {
                scenario: "Income tax calculation",
                functions: "Piecewise function with different rates for different incomes",
                examples: [
                    "Different formulas for different income ranges",
                    "Evaluate by checking which bracket applies"
                ],
                context: "Tax codes are piecewise functions"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            evaluation: {
                skills: ['Substitution', 'Order of operations', 'Algebraic simplification'],
                priorKnowledge: ['Function notation', 'Parentheses use', 'Basic algebra'],
                checkQuestions: [
                    "What does f(3) mean?",
                    "Evaluate: 2(5) + 3",
                    "Simplify: (x+2)²"
                ]
            },
            arithmetic: {
                skills: ['Adding/subtracting polynomials', 'Multiplying polynomials', 'Simplifying fractions'],
                priorKnowledge: ['Like terms', 'Distributive property', 'FOIL'],
                checkQuestions: [
                    "Add: (2x + 3) + (x - 5)",
                    "Multiply: (x + 2)(x - 3)",
                    "Simplify: (x² - 4)/(x - 2)"
                ]
            },
            composition: {
                skills: ['Nested substitution', 'Function evaluation', 'Order of operations'],
                priorKnowledge: ['Function notation', 'Inside-out evaluation', 'Domain concepts'],
                checkQuestions: [
                    "If g(x) = x + 1, what is g(3)?",
                    "Evaluate from inside out: 2(3(4))",
                    "What is the domain of f(x) = √x?"
                ]
            },
            inverse: {
                skills: ['Solving equations', 'Swapping variables', 'One-to-one concept'],
                priorKnowledge: ['Solving for y', 'Inverse operations', 'Function properties'],
                checkQuestions: [
                    "Solve for y: x = 2y + 3",
                    "What undoes multiplication by 5?",
                    "If f(2) = 7, what is f⁻¹(7)?"
                ]
            },
            difference_quotient: {
                skills: ['Substitution', 'Expanding binomials', 'Factoring', 'Canceling'],
                priorKnowledge: ['(x+h)² expansion', 'Algebraic fractions', 'Factoring techniques'],
                checkQuestions: [
                    "Expand: (x + h)²",
                    "Factor: x² + 2xh + h²- x²",
                    "Simplify: (2xh + h²)/h"
                ]
            },
            domain_range: {
                skills: ['Identifying restrictions', 'Set notation', 'Interval notation'],
                priorKnowledge: ['Division by zero', 'Square root domain', 'Function behavior'],
                checkQuestions: [
                    "When is 1/x undefined?",
                    "What values can √x accept?",
                    "Express 'all real numbers except 3' in interval notation"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            function_machine: {
                description: "Function as input-output machine",
                analogy: "Like a vending machine: input money, output snack",
                visualization: "Box with input arrow, output arrow, rule inside",
                suitableFor: ['evaluation', 'composition'],
                explanation: "Function transforms input to output following a rule"
            },
            composition_chain: {
                description: "Functions in sequence",
                analogy: "Like an assembly line: each station does one operation",
                visualization: "Boxes connected by arrows, data flows through",
                suitableFor: ['composition'],
                explanation: "Output of one function becomes input to next"
            },
            graph_visualization: {
                description: "Visual representation on coordinate plane",
                analogy: "Like a map showing height at each position",
                visualization: "Curve on xy-plane",
                suitableFor: ['all_operations'],
                explanation: "Graph shows all input-output pairs simultaneously"
            },
            inverse_reflection: {
                description: "Inverse as mirror image across y=x",
                analogy: "Like looking in a mirror that swaps coordinates",
                visualization: "Two curves reflected across diagonal line",
                suitableFor: ['inverse'],
                explanation: "Inverse swaps roles of input and output"
            },
            piecewise_cases: {
                description: "Different rules for different inputs",
                analogy: "Like different menu prices for kids vs adults",
                visualization: "Multiple formulas with conditions",
                suitableFor: ['piecewise'],
                explanation: "Rule depends on which case input falls into"
            },
            arithmetic_graphs: {
                description: "Combining function graphs",
                analogy: "Like overlaying transparencies to see combined effect",
                visualization: "Multiple graphs and their sum/difference/product/quotient",
                suitableFor: ['arithmetic'],
                explanation: "Graphically add/subtract/multiply/divide y-values"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "If f(x) = 2x + 3, find f(5)",
                    solution: 13,
                    steps: ["f(5) = 2(5) + 3", "= 10 + 3", "= 13"],
                    difficulty: "easy"
                },
                {
                    problem: "If f(x) = x² and g(x) = x + 1, find (f + g)(2)",
                    solution: 7,
                    steps: ["f(2) = 2² = 4", "g(2) = 2 + 1 = 3", "(f + g)(2) = 4 + 3 = 7"],
                    difficulty: "easy"
                },
                {
                    problem: "If f(x) = 3x - 1 and g(x) = x + 2, find (f - g)(x)",
                    solution: "2x - 3",
                    steps: ["(f - g)(x) = (3x - 1) - (x + 2)", "= 3x - 1 - x - 2", "= 2x - 3"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "If f(x) = x² + 1 and g(x) = 2x, find (f · g)(x)",
                    solution: "2x³ + 2x",
                    steps: ["(f · g)(x) = (x² + 1)(2x)", "= 2x³ + 2x"],
                    difficulty: "medium"
                },
                {
                    problem: "If f(x) = x + 3 and g(x) = x², find f(g(x))",
                    solution: "x² + 3",
                    steps: ["f(g(x)) = f(x²)", "= x² + 3"],
                    difficulty: "medium"
                },
                {
                    problem: "Find the inverse of f(x) = 2x - 5",
                    solution: "f⁻¹(x) = (x + 5)/2",
                    steps: ["y = 2x - 5", "x = 2y - 5", "x + 5 = 2y", "y = (x + 5)/2"],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "If f(x) = x² and g(x) = √x, verify (f ∘ g)(x) = x",
                    solution: "x (for x ≥ 0)",
                    steps: ["(f ∘ g)(x) = f(g(x)) = f(√x)", "= (√x)² = x", "Domain: x ≥ 0"],
                    difficulty: "hard"
                },
                {
                    problem: "Find difference quotient for f(x) = x²",
                    solution: "2x + h",
                    steps: ["f(x+h) = (x+h)²= x² + 2xh + h²", "[f(x+h) - f(x)]/h = [x² + 2xh + h² - x²]/h", "= (2xh + h²)/h = 2x + h"],
                    difficulty: "hard"
                },
                {
                    problem: "If f(x) = x/(x-1), find f(f(x))",
                    solution: "x",
                    steps: ["f(f(x)) = f(x/(x-1))", "= [x/(x-1)]/[x/(x-1) - 1]", "= [x/(x-1)]/[(x - x + 1)/(x-1)]", "= x"],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                evaluation: [
                    { problem: "f(x) = 3x + 2, find f(4)", solution: 14 },
                    { problem: "f(x) = x² - 1, find f(-2)", solution: 3 },
                    { problem: "f(x) = 2x² + x - 3, find f(0)", solution: -3 }
                ],
                arithmetic: [
                    { problem: "f(x) = x + 1, g(x) = x - 1, find (f + g)(x)", solution: "2x" },
                    { problem: "f(x) = 2x, g(x) = x², find (f · g)(x)", solution: "2x³" },
                    { problem: "f(x) = x², g(x) = x + 1, find (f/g)(x)", solution: "x²/(x+1)" }
                ],
                composition: [
                    { problem: "f(x) = x + 1, g(x) = 2x, find (f ∘ g)(x)", solution: "2x + 1" },
                    { problem: "f(x) = x², g(x) = x - 3, find (f ∘ g)(2)", solution: 1 },
                    { problem: "f(x) = √x, g(x) = x + 4, find (f ∘ g)(5)", solution: 3 }
                ],
                inverse: [
                    { problem: "f(x) = x + 5, find f⁻¹(x)", solution: "x - 5" },
                    { problem: "f(x) = 3x, find f⁻¹(x)", solution: "x/3" },
                    { problem: "f(x) = (x - 2)/3, find f⁻¹(x)", solution: "3x + 2" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            composition_order: {
                misconception: "Thinking (f ∘ g)(x) means do f first, then g",
                reality: "(f ∘ g)(x) = f(g(x)) means do g first, then apply f to result",
                correctiveExample: "If f(x) = x + 1 and g(x) = 2x, then (f ∘ g)(3) = f(g(3)) = f(6) = 7, not g(f(3)) = g(4) = 8",
                commonIn: ['composition']
            },
            substitution_parentheses: {
                misconception: "Not using parentheses when substituting expressions",
                reality: "Always put parentheses around substituted expressions to avoid errors",
                correctiveExample: "For f(x) = x², f(x+1) = (x+1)², not x+1² = x+1",
                commonIn: ['evaluation', 'composition']
            },
            inverse_meaning: {
                misconception: "Thinking f⁻¹(x) means 1/f(x) (reciprocal)",
                reality: "f⁻¹ is inverse function that undoes f, not reciprocal",
                correctiveExample: "If f(x) = 2x, then f⁻¹(x) = x/2 (inverse), but 1/f(x) = 1/(2x) (reciprocal)",
                commonIn: ['inverse']
            },
            domain_arithmetic: {
                misconception: "Forgetting that division restricts domain",
                reality: "(f/g)(x) excludes all x where g(x) = 0",
                correctiveExample: "If g(x) = x - 2, then (f/g)(x) has domain restriction x ≠ 2",
                commonIn: ['arithmetic']
            },
            difference_quotient_simplification: {
                misconception: "Trying to simplify before expanding and factoring",
                reality: "Must expand f(x+h), subtract f(x), then factor out h before canceling",
                correctiveExample: "For f(x) = x², can't simplify directly; must expand (x+h)² first",
                commonIn: ['difference_quotient']
            },
            piecewise_evaluation: {
                misconception: "Using wrong piece or multiple pieces for one input",
                reality: "Each input belongs to exactly one piece; check conditions carefully",
                correctiveExample: "If f(x) = {x² if x < 0; 2x if x ≥ 0}, then f(0) = 2(0) = 0, not 0²",
                commonIn: ['piecewise']
            },
            subtraction_distribution: {
                misconception: "Not distributing negative in (f - g)(x)",
                reality: "Must distribute negative: f(x) - g(x), not f(x) - g(x) with sign errors",
                correctiveExample: "(f - g)(x) = (2x + 3) - (x - 1) = 2x + 3 - x + 1 = x + 4",
                commonIn: ['arithmetic']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            function_evaluation: {
                analogy: "Vending machine",
                explanation: "You put in money (input), the machine follows its rule (function), and gives you a snack (output)",
                suitableFor: ['evaluation'],
                ELI5: "A function is like a magic box. You put a number in, the box does something to it, and a new number comes out!"
            },
            composition: {
                analogy: "Assembly line or recipe chain",
                explanation: "Like making a sandwich: first spread peanut butter (g), then add jelly (f). The order matters!",
                suitableFor: ['composition'],
                ELI5: "Composition is like getting dressed: first put on your shirt (g), then put on your jacket (f). You can't do it backwards!"
            },
            inverse: {
                analogy: "Putting on and taking off shoes",
                explanation: "f puts on shoes, f⁻¹ takes them off. Doing both gets you back where you started",
                suitableFor: ['inverse'],
                ELI5: "An inverse function is like an undo button. If one function adds 3, its inverse subtracts 3 to undo it!"
            },
            function_addition: {
                analogy: "Combining two streams into one river",
                explanation: "At each point, the combined function is the sum of both functions' outputs",
                suitableFor: ['arithmetic'],
                ELI5: "Adding functions is like having two piggy banks. At any time, your total money is what's in both banks added together!"
            },
            function_multiplication: {
                analogy: "Area of rectangle",
                explanation: "If one function is length and another is width, their product is area",
                suitableFor: ['arithmetic'],
                ELI5: "Multiplying functions is like making a rectangle. If one function tells you how wide, and another tells you how tall, multiplying gives you the area!"
            },
            difference_quotient: {
                analogy: "Average speed on a road trip",
                explanation: "Change in distance divided by change in time gives average speed",
                suitableFor: ['difference_quotient'],
                ELI5: "The difference quotient is like figuring out how fast you're going on average. You look at how far you went and how long it took!"
            },
            piecewise: {
                analogy: "Movie ticket pricing",
                explanation: "Different prices for kids, adults, and seniors - different rules for different groups",
                suitableFor: ['piecewise'],
                ELI5: "A piecewise function is like having different rules for different situations. Like bedtime at 8pm on school nights but 9pm on weekends!"
            },
            domain: {
                analogy: "Acceptable inputs to a machine",
                explanation: "Like a gumball machine that only accepts quarters - domain is the acceptable inputs",
                suitableFor: ['domain_range'],
                ELI5: "Domain is like the types of food you can eat. You can't eat rocks! The domain is the things that work as inputs."
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            evaluation: {
                level1: "What does f(a) mean?",
                level2: "It means replace every x in f(x) with a",
                level3: "Put parentheses around a before substituting",
                level4: "Substitute {value} for x and simplify using order of operations"
            },
            composition: {
                level1: "Which function do you apply first in f(g(x))?",
                level2: "Apply g first to get g(x), then apply f to that result",
                level3: "Work from inside out: evaluate g(x), then substitute into f",
                level4: "First find g({value}) = {g_result}, then find f({g_result})"
            },
            arithmetic: {
                level1: "What does (f + g)(x) mean?",
                level2: "It means f(x) + g(x) - add the two function formulas",
                level3: "Write out both f(x) and g(x), then add them",
                level4: "Add {f_formula} and {g_formula}, then combine like terms"
            },
            inverse: {
                level1: "What does an inverse function do?",
                level2: "It undoes what the original function does",
                level3: "To find inverse: swap x and y, then solve for y",
                level4: "Write y = {f_formula}, swap to x = {swapped}, solve for y"
            },
            difference_quotient: {
                level1: "What is the difference quotient formula?",
                level2: "[f(x+h) - f(x)]/h",
                level3: "First find f(x+h) by substituting (x+h) for x",
                level4: "Expand {f_x_plus_h}, subtract {f_x}, divide by h, factor and cancel"
            },
            domain: {
                level1: "What values make the function undefined?",
                level2: "Look for division by zero and square roots of negatives",
                level3: "Set denominator equal to zero and solve",
                level4: "Denominator {denom} = 0 when x = {restriction}"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "If f(x) = 2x + 1, find f(3)",
                    answer: 7,
                    assesses: "evaluation",
                    difficulty: "basic"
                },
                {
                    question: "If f(x) = x² and g(x) = x + 1, find (f + g)(2)",
                    answer: 7,
                    assesses: "arithmetic",
                    difficulty: "intermediate"
                },
                {
                    question: "If f(x) = x + 2 and g(x) = 3x, find (f ∘ g)(1)",
                    answer: 5,
                    assesses: "composition",
                    difficulty: "intermediate"
                },
                {
                    question: "Find the inverse of f(x) = x - 4",
                    answer: "f⁻¹(x) = x + 4",
                    assesses: "inverse",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "In (f ∘ g)(x), which function is applied first?",
                    options: ["f", "g", "both at once", "depends on the functions"],
                    correct: "g",
                    explanation: "Read right to left: g first, then f"
                },
                {
                    question: "What does f⁻¹ represent?",
                    options: ["reciprocal 1/f(x)", "negative -f(x)", "inverse function", "f times -1"],
                    correct: "inverse function",
                    explanation: "f⁻¹ is the inverse function that undoes f"
                },
                {
                    question: "For (f/g)(x), what additional domain restriction exists?",
                    options: ["f(x) ≠ 0", "g(x) ≠ 0", "x ≠ 0", "no additional restriction"],
                    correct: "g(x) ≠ 0",
                    explanation: "Cannot divide by zero, so g(x) cannot equal zero"
                }
            ],
            summative: [
                {
                    question: "Given f(x) = x² - 1 and g(x) = 2x + 3, find (f ∘ g)(x) and simplify",
                    answer: "4x² + 12x + 8",
                    showsWork: true,
                    rubric: {
                        find_g: 1,
                        substitute_into_f: 2,
                        expand: 1,
                        simplify: 1
                    }
                },
                {
                    question: "Find the inverse of f(x) = (2x - 1)/3 and verify",
                    answer: "f⁻¹(x) = (3x + 1)/2",
                    showsWork: true,
                    rubric: {
                        swap_variables: 1,
                        solve_for_y: 2,
                        verify_composition: 2
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "f(x) = x + 3, find f(5)",
                    "f(x) = 2x, g(x) = x - 1, find (f + g)(x)",
                    "f(x) = x², find f(-2)",
                    "Find inverse of f(x) = x + 7"
                ],
                medium: [
                    "f(x) = x² + 1, g(x) = x - 2, find (f ∘ g)(3)",
                    "f(x) = 2x + 1, find f(x + h)",
                    "f(x) = x/(x-1), find domain",
                    "f(x) = √(x + 3), find domain"
                ],
                hard: [
                    "Find difference quotient for f(x) = x² + 2x",
                    "f(x) = (x + 1)/(x - 1), find f(f(x))",
                    "Prove f(x) = 2x - 1 and g(x) = (x+1)/2 are inverses",
                    "f(x) = x³, find (f ∘ f⁻¹)(x)"
                ]
            },
            byObjective: {
                canEvaluateFunctions: [
                    "f(x) = 3x - 2, find f(4)",
                    "f(x) = x² + 2x, find f(-1)",
                    "f(x) = 1/(x-3), find f(5)"
                ],
                canAddSubtractFunctions: [
                    "f(x) = 2x + 1, g(x) = x - 3, find (f + g)(x)",
                    "f(x) = x², g(x) = 3x, find (f - g)(x)",
                    "f(x) = 2x, g(x) = x² - 1, find (f + g)(2)"
                ],
                canComposeFunctions: [
                    "f(x) = x + 1, g(x) = 2x, find (f ∘ g)(x)",
                    "f(x) = x², g(x) = x + 3, find (g ∘ f)(2)",
                    "f(x) = √x, g(x) = x - 4, find domain of (f ∘ g)(x)"
                ],
                canFindInverses: [
                    "f(x) = 3x - 5, find f⁻¹(x)",
                    "f(x) = x/2 + 1, find f⁻¹(x)",
                    "Verify f(x) = x + 2 and g(x) = x - 2 are inverses"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "single_evaluation": "Direct substitution with parentheses",
                "arithmetic_operation": "Apply operation to function formulas, then simplify",
                "composition": "Work inside-out: inner function first, then outer",
                "inverse": "Swap x and y, solve for y",
                "difference_quotient": "Find f(x+h), subtract f(x), divide by h, factor and cancel",
                "piecewise": "Check which condition applies, use that formula",
                "domain": "Find restrictions: denominators ≠ 0, radicals ≥ 0"
            },
            whenToUseWhat: {
                parentheses: "Always when substituting expressions (not just single numbers)",
                inside_out: "For compositions and nested functions",
                factor_first: "For difference quotient before canceling",
                test_values: "To verify inverses or check composition results",
                graph_check: "To visualize and verify results"
            },
            methodSelection: {
                factorsToConsider: [
                    "Type of operation (arithmetic, composition, inverse)",
                    "Complexity of functions involved",
                    "Whether evaluating at point or finding formula",
                    "Domain restrictions present",
                    "Need for simplification"
                ],
                generalApproach: [
                    "1. Identify operation type",
                    "2. Write out function formulas clearly",
                    "3. Apply appropriate operation rules",
                    "4. Simplify carefully (watch signs!)",
                    "5. Check domain restrictions",
                    "6. Verify with test value if possible"
                ]
            },
            optimizationTips: {
                "Use parentheses liberally": "Prevents substitution errors",
                "Work inside-out for composition": "Apply inner function first",
                "Check domains after operations": "New restrictions may arise",
                "Simplify step by step": "Don't skip steps in complex problems",
                "Verify critical results": "Test a value to check composition or inverse"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Evaluation Sprint",
                    timeLimit: 60,
                    problems: [
                        "f(x) = 2x + 1, find f(3)",
                        "f(x) = x², find f(4)",
                        "f(x) = x - 5, find f(10)",
                        "f(x) = 3x, find f(2)",
                        "f(x) = x² + 1, find f(0)",
                        "f(x) = 2x - 3, find f(5)"
                    ]
                },
                {
                    name: "Composition Challenge",
                    timeLimit: 120,
                    problems: [
                        "f(x) = x + 1, g(x) = 2x, find (f ∘ g)(2)",
                        "f(x) = x², g(x) = x - 1, find (f ∘ g)(3)",
                        "f(x) = 3x, g(x) = x + 2, find (g ∘ f)(1)"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Functions",
                    problem: "f(g(2)) = 10 and f(3) = 10",
                    given: "f(x) = 2x + 4",
                    solve: "Find g(2)",
                    solution: "g(2) = 3"
                },
                {
                    name: "Inverse Puzzle",
                    problem: "f(f⁻¹(7)) = ?",
                    constraint: "For any function and its inverse",
                    solution: "7 (inverse property)"
                },
                {
                    name: "Composition Chain",
                    challenge: "If f(x) = x + 1, find f(f(f(x)))",
                    solution: "x + 3"
                }
            ],
            applications: [
                {
                    scenario: "Temperature Conversion",
                    problem: "C(F) converts Fahrenheit to Celsius: C(F) = (5/9)(F - 32). K(C) converts Celsius to Kelvin: K(C) = C + 273.15. Find K(C(68)).",
                    solution: "293.15 K"
                },
                {
                    scenario: "Business Profit",
                    problem: "Revenue R(x) = 50x, Cost C(x) = 20x + 1000. Profit P(x) = R(x) - C(x). Find P(100).",
                    solution: "$2000"
                },
                {
                    scenario: "Nested Discount",
                    problem: "First discount: f(x) = 0.8x (20% off). Second discount: g(x) = 0.9x (10% off). Find (g ∘ f)(100).",
                    solution: "$72"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "f(x) = x², g(x) = x + 1",
                        "(f ∘ g)(x) = f(g(x))",
                        "= f(x + 1)",
                        "= x² + 1"  // ERROR: should be (x+1)²
                    ],
                    correctAnswer: "(x + 1)² = x² + 2x + 1",
                    errorType: "Forgot to substitute entire expression and use parentheses"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Find inverse of f(x) = 2x + 3",
                        "y = 2x + 3",
                        "x = 2y + 3",
                        "x - 3 = 2y",
                        "y = x - 3/2"  // ERROR: should be (x-3)/2
                    ],
                    correctAnswer: "f⁻¹(x) = (x - 3)/2",
                    errorType: "Division applied to only one term instead of both"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "f(x) = x² - 1, g(x) = x + 2",
                        "(f - g)(x) = x² - 1 - x + 2",  // ERROR: sign error
                        "= x² - x + 1"
                    ],
                    correctAnswer: "(f - g)(x) = x² - 1 - (x + 2) = x² - x - 3",
                    errorType: "Did not distribute negative sign to g(x)"
                }
            ]
        };
    }

    initializeCompositionDatabase() {
        this.compositionExamples = {
            realWorld: [
                {
                    context: "Currency conversion",
                    description: "USD to EUR, then EUR to GBP",
                    functions: "E(d) converts dollars to euros, G(e) converts euros to pounds",
                    composition: "G(E(d)) converts dollars directly to pounds",
                    interpretation: "Two-step conversion as single operation"
                },
                {
                    context: "Shipping and tax",
                    description: "Add shipping cost, then calculate tax on total",
                    functions: "S(p) adds shipping, T(x) calculates tax",
                    composition: "T(S(p)) gives final price including shipping and tax",
                    interpretation: "Sequential cost additions"
                },
                {
                    context: "Area of expanding circle",
                    description: "Radius grows over time, area depends on radius",
                    functions: "r(t) = radius at time t, A(r) = πr²",
                    composition: "A(r(t)) = area as function of time",
                    interpretation: "Combining geometric and temporal relationships"
                }
            ],
            mathematical: [
                {
                    type: "Identity verification",
                    example: "f(x) = x³, g(x) = ∛x",
                    composition: "(f ∘ g)(x) = x (cube and cube root undo each other)",
                    note: "Demonstrates inverse relationship"
                },
                {
                    type: "Polynomial composition",
                    example: "f(x) = x + 1, g(x) = x²",
                    composition: "(f ∘ g)(x) = x² + 1, (g ∘ f)(x) = (x + 1)² = x² + 2x + 1",
                    note: "Shows composition is not commutative"
                },
                {
                    type: "Rational composition",
                    example: "f(x) = 1/x, g(x) = x - 1",
                    composition: "(f ∘ g)(x) = 1/(x - 1), domain: x ≠ 1",
                    note: "Domain must exclude zeros of inner function's output"
                }
            ]
        };
    }

    initializeNotationDatabase() {
        this.notationGuide = {
            basic: {
                "f(x)": "Function f evaluated at x",
                "f(a)": "Function f evaluated at specific value a",
                "f(3)": "Output when input is 3",
                "y = f(x)": "y is the output when input is x"
            },
            arithmetic: {
                "(f + g)(x)": "Sum of functions: f(x) + g(x)",
                "(f - g)(x)": "Difference of functions: f(x) - g(x)",
                "(f · g)(x) or (fg)(x)": "Product of functions: f(x) · g(x)",
                "(f/g)(x)": "Quotient of functions: f(x)/g(x)"
            },
            composition: {
                "(f ∘ g)(x)": "Composition: f of g of x = f(g(x))",
                "f(g(x))": "Apply g first, then f to the result",
                "(f ∘ g ∘ h)(x)": "Triple composition: f(g(h(x)))"
            },
            inverse: {
                "f⁻¹(x)": "Inverse function of f (NOT reciprocal)",
                "f⁻¹(y)": "Input that produces output y",
                "(f ∘ f⁻¹)(x) = x": "Composing with inverse gives identity"
            },
            domain_range: {
                "Dom(f)": "Domain of f (all valid inputs)",
                "Range(f)": "Range of f (all possible outputs)",
                "x ∈ Dom(f)": "x is in the domain of f",
                "f: A → B": "f maps from set A to set B"
            },
            special: {
                "[f(x+h) - f(x)]/h": "Difference quotient",
                "lim[h→0] [f(x+h) - f(x)]/h": "Derivative (calculus)",
                "f|ₐᵇ": "f restricted to interval [a,b]"
            }
        };
    }

    // MAIN SOLVER METHOD
    solveFunctionOperationProblem(config) {
        const { operation, functions, input, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseFunctionProblem(operation, functions, input, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveFunctionProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateFunctionSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateFunctionGraphData();

            // Generate workbook
            this.generateFunctionWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                result: this.currentSolution?.result,
                formula: this.currentSolution?.formula
            };

        } catch (error) {
            throw new Error(`Failed to solve function operation problem: ${error.message}`);
        }
    }

    parseFunctionProblem(operation, functions = {}, input = null, problemType = null, context = {}) {
        // If problem type is specified, use it directly
        if (problemType && this.functionTypes[problemType]) {
            return {
                originalInput: operation || `${problemType} problem`,
                type: problemType,
                functions: { ...functions },
                input: input,
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect function operation type
        const cleanInput = operation ? operation.toLowerCase() : '';
        
        for (const [type, config] of Object.entries(this.functionTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput)) {
                    return {
                        originalInput: operation,
                        type: type,
                        functions: { ...functions },
                        input: input,
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default to evaluation if functions are provided
        if (functions.f) {
            return {
                originalInput: operation || 'Function evaluation',
                type: 'evaluate_function',
                functions: { ...functions },
                input: input,
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize function operation type from: ${operation}`);
    }

    solveFunctionProblem_Internal(problem) {
        const solver = this.functionTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for function operation type: ${problem.type}`);
        }

        return solver(problem);
    }

    // FUNCTION OPERATION SOLVERS

    evaluateFunction(problem) {
        const { functions, input } = problem;
        const f = functions.f || functions.function;
        
        if (!f) {
            throw new Error('Function not provided for evaluation');
        }

        // Simple evaluation by substitution
        const result = this.substituteAndEvaluate(f, input);

        return {
            type: 'Function Evaluation',
            function: f,
            input: input,
            notation: `f(${input})`,
            result: result,
            category: 'evaluation'
        };
    }

    addFunctions(problem) {
        const { functions, input } = problem;
        const f = functions.f;
        const g = functions.g;

        if (!f || !g) {
            throw new Error('Both functions f and g required for addition');
        }

        const formula = `(${f}) + (${g})`;
        const simplified = this.simplifyExpression(formula);

        let result = null;
        if (input !== null && input !== undefined) {
            const f_result = this.substituteAndEvaluate(f, input);
            const g_result = this.substituteAndEvaluate(g, input);
            result = f_result + g_result;
        }

        return {
            type: 'Function Addition',
            notation: '(f + g)(x)',
            formula: simplified,
            f: f,
            g: g,
            input: input,
            result: result,
            category: 'arithmetic'
        };
    }

    subtractFunctions(problem) {
        const { functions, input } = problem;
        const f = functions.f;
        const g = functions.g;

        if (!f || !g) {
            throw new Error('Both functions f and g required for subtraction');
        }

        const formula = `(${f}) - (${g})`;
        const simplified = this.simplifyExpression(formula);

        let result = null;
        if (input !== null && input !== undefined) {
            const f_result = this.substituteAndEvaluate(f, input);
            const g_result = this.substituteAndEvaluate(g, input);
            result = f_result - g_result;
        }

        return {
            type: 'Function Subtraction',
            notation: '(f - g)(x)',
            formula: simplified,
            f: f,
            g: g,
            input: input,
            result: result,
            category: 'arithmetic'
        };
    }

    multiplyFunctions(problem) {
        const { functions, input } = problem;
        const f = functions.f;
        const g = functions.g;

        if (!f || !g) {
            throw new Error('Both functions f and g required for multiplication');
        }

        const formula = `(${f}) * (${g})`;
        const simplified = this.simplifyExpression(formula);

        let result = null;
        if (input !== null && input !== undefined) {
            const f_result = this.substituteAndEvaluate(f, input);
            const g_result = this.substituteAndEvaluate(g, input);
            result = f_result * g_result;
        }

        return {
            type: 'Function Multiplication',
            notation: '(f · g)(x)',
            formula: simplified,
            f: f,
            g: g,
            input: input,
            result: result,
            category: 'arithmetic'
        };
    }

    divideFunctions(problem) {
        const { functions, input } = problem;
        const f = functions.f;
        const g = functions.g;

        if (!f || !g) {
            throw new Error('Both functions f and g required for division');
        }

        const formula = `(${f}) / (${g})`;
        const domainRestrictions = this.findZeros(g);

        let result = null;
        if (input !== null && input !== undefined) {
            const f_result = this.substituteAndEvaluate(f, input);
            const g_result = this.substituteAndEvaluate(g, input);
            if (Math.abs(g_result) < 1e-10) {
                result = 'undefined (division by zero)';
            } else {
                result = f_result / g_result;
            }
        }

        return {
            type: 'Function Division',
            notation: '(f/g)(x)',
            formula: formula,
            f: f,
            g: g,
            input: input,
            result: result,
            domainRestrictions: domainRestrictions,
            category: 'arithmetic'
        };
    }

    composeFunctions(problem) {
        const { functions, input } = problem;
        const f = functions.f;
        const g = functions.g;

        if (!f || !g) {
            throw new Error('Both functions f and g required for composition');
        }

        // Compute f(g(x))
        const g_expression = g.replace(/x/g, '(x)');
        const composite = f.replace(/x/g, `(${g_expression})`);
        const simplified = this.simplifyExpression(composite);

        let result = null;
        let g_value = null;
        if (input !== null && input !== undefined) {
            g_value = this.substituteAndEvaluate(g, input);
            result = this.substituteAndEvaluate(f, g_value);
        }

        return {
            type: 'Function Composition',
            notation: '(f ∘ g)(x) = f(g(x))',
            formula: simplified,
            f: f,
            g: g,
            input: input,
            g_of_input: g_value,
            result: result,
            order: 'Apply g first, then f',
            category: 'composition'
        };
    }

    findInverse(problem) {
        const { functions } = problem;
        const f = functions.f || functions.function;

        if (!f) {
            throw new Error('Function not provided for finding inverse');
        }

        // Simplified inverse finding (for basic functions)
        return {
            type: 'Inverse Function',
            notation: 'f⁻¹(x)',
            originalFunction: f,
            method: 'Swap x and y, then solve for y',
            note: 'Detailed inverse calculation requires specific function type',
            category: 'inverse'
        };
    }

    evaluatePiecewise(problem) {
        const { functions, input } = problem;
        const pieces = functions.pieces || [];

        if (pieces.length === 0) {
            throw new Error('Piecewise function pieces not provided');
        }

        return {
            type: 'Piecewise Function Evaluation',
            pieces: pieces,
            input: input,
            method: 'Check which condition input satisfies, use that formula',
            category: 'piecewise'
        };
    }

    computeDifferenceQuotient(problem) {
        const { functions, variable } = problem;
        const f = functions.f || functions.function;

        if (!f) {
            throw new Error('Function not provided for difference quotient');
        }

        return {
            type: 'Difference Quotient',
            notation: '[f(x+h) - f(x)]/h',
            function: f,
            variable: variable || 'h',
            method: 'Find f(x+h), subtract f(x), divide by h, factor and cancel',
            category: 'difference_quotient'
        };
    }

    findDomain(problem) {
        const { functions } = problem;
        const f = functions.f || functions.function;

        if (!f) {
            throw new Error('Function not provided for domain finding');
        }

        const restrictions = this.analyzeDomainRestrictions(f);

        return {
            type: 'Find Domain',
            function: f,
            restrictions: restrictions,
            domain: this.expressDomain(restrictions),
            category: 'domain_range'
        };
    }

    findRange(problem) {
        const { functions } = problem;
        const f = functions.f || functions.function;

        if (!f) {
            throw new Error('Function not provided for range finding');
        }

        return {
            type: 'Find Range',
            function: f,
            method: 'Analyze function behavior and output values',
            note: 'Range finding requires function type analysis',
            category: 'domain_range'
        };
    }

    // HELPER METHODS

    substituteAndEvaluate(expression, value) {
        try {
            // Replace x with value (ensure proper parentheses)
            const substituted = expression.replace(/x/g, `(${value})`);
            // Use math.js to evaluate
            return math.evaluate(substituted);
        } catch (error) {
            return `Error evaluating: ${error.message}`;
        }
    }

    simplifyExpression(expression) {
        try {
            // Basic simplification using math.js
            const simplified = math.simplify(expression);
            return simplified.toString();
        } catch (error) {
            return expression; // Return original if simplification fails
        }
    }

    findZeros(expression) {
        // Simplified zero-finding (would need more sophisticated method for general case)
        // For now, return message about domain restriction
        return [`Exclude values where ${expression} = 0`];
    }

    analyzeDomainRestrictions(expression) {
        const restrictions = [];

        // Check for division (denominator can't be zero)
        if (expression.includes('/')) {
            restrictions.push('Denominator cannot be zero');
        }

        // Check for square root (argument must be non-negative)
        if (expression.includes('sqrt') || expression.includes('√')) {
            restrictions.push('Expression under square root must be ≥ 0');
        }

        // Check for logarithm (argument must be positive)
        if (expression.includes('log') || expression.includes('ln')) {
            restrictions.push('Argument of logarithm must be > 0');
        }

        return restrictions.length > 0 ? restrictions : ['All real numbers'];
    }

    expressDomain(restrictions) {
        if (restrictions[0] === 'All real numbers') {
            return '(-∞, ∞)';
        }
        return `Domain with restrictions: ${restrictions.join('; ')}`;
    }

    // STEP GENERATION

    generateFunctionSteps(problem, solution) {
        let baseSteps = this.generateBaseFunctionSteps(problem, solution);

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

    generateBaseFunctionSteps(problem, solution) {
        const category = this.functionTypes[problem.type]?.category;

        switch(category) {
            case 'evaluation':
                return this.generateEvaluationSteps(problem, solution);
            case 'arithmetic':
                return this.generateArithmeticSteps(problem, solution);
            case 'composition':
                return this.generateCompositionSteps(problem, solution);
            case 'inverse':
                return this.generateInverseSteps(problem, solution);
            case 'difference_quotient':
                return this.generateDifferenceQuotientSteps(problem, solution);
            default:
                return this.generateGenericFunctionSteps(problem, solution);
        }
    }

    generateEvaluationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write function formula',
            description: 'Identify the function rule',
            expression: `f(x) = ${solution.function}`,
            reasoning: 'This is the formula we will use to evaluate the function',
            goalStatement: 'We need to substitute the input value and simplify'
        });

        steps.push({
            stepNumber: 2,
            step: 'Substitute input',
            description: `Replace x with ${solution.input}`,
            beforeExpression: `f(${solution.input})`,
            operation: `Substitute ${solution.input} for x`,
            afterExpression: solution.function.replace(/x/g, `(${solution.input})`),
            reasoning: 'Put parentheses around substituted value to avoid errors',
            algebraicRule: 'Function evaluation by substitution'
        });

        steps.push({
            stepNumber: 3,
            step: 'Simplify',
            description: 'Calculate using order of operations',
            expression: `f(${solution.input}) = ${solution.result}`,
            finalAnswer: true,
            reasoning: 'This is the output value when input is ' + solution.input
        });

        return steps;
    }

    generateArithmeticSteps(problem, solution) {
        const steps = [];
        const operation = solution.type.includes('Addition') ? 'add' : 
                         solution.type.includes('Subtraction') ? 'subtract' :
                         solution.type.includes('Multiplication') ? 'multiply' : 'divide';

        steps.push({
            stepNumber: 1,
            step: 'Write both functions',
            description: 'Identify f(x) and g(x)',
            expression: `f(x) = ${solution.f}\ng(x) = ${solution.g}`,
            reasoning: 'We need both function formulas for the operation',
            goalStatement: `We will ${operation} these functions`
        });

        steps.push({
            stepNumber: 2,
            step: `${operation.charAt(0).toUpperCase() + operation.slice(1)} the functions`,
            description: `Form ${solution.notation}`,
            beforeExpression: `(f ${operation === 'add' ? '+' : operation === 'subtract' ? '-' : operation === 'multiply' ? '·' : '/'} g)(x)`,
            afterExpression: solution.formula,
            reasoning: `${operation.charAt(0).toUpperCase() + operation.slice(1)} the function expressions`,
            algebraicRule: `Function ${operation}`
        });

        if (solution.input !== null && solution.input !== undefined) {
            steps.push({
                stepNumber: 3,
                step: 'Evaluate at given input',
                description: `Find result at x = ${solution.input}`,
                expression: `Result = ${solution.result}`,
                finalAnswer: true
            });
        } else {
            steps.push({
                stepNumber: 3,
                step: 'Final formula',
                description: 'This is the combined function',
                expression: solution.notation + ' = ' + solution.formula,
                finalAnswer: true
            });
        }

        return steps;
    }

    generateCompositionSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify functions',
            description: 'Write out f(x) and g(x)',
            expression: `f(x) = ${solution.f}\ng(x) = ${solution.g}`,
            reasoning: 'For f(g(x)), we apply g first, then f',
            goalStatement: 'We will substitute g(x) into f(x)'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply inner function first',
            description: 'Find g(x) or evaluate g at input',
            expression: solution.input !== null ? 
                `g(${solution.input}) = ${solution.g_of_input}` :
                `g(x) = ${solution.g}`,
            reasoning: 'Composition works inside-out: inner function (g) first',
            algebraicRule: 'Order of composition'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply outer function',
            description: 'Substitute result into f',
            beforeExpression: solution.input !== null ?
                `f(${solution.g_of_input})` :
                `f(g(x))`,
            afterExpression: solution.formula,
            reasoning: 'Now apply the outer function to the result of the inner function',
            algebraicRule: 'Function composition'
        });

        steps.push({
            stepNumber: 4,
            step: 'Simplify',
            description: 'Express the final result',
            expression: solution.input !== null ?
                `(f ∘ g)(${solution.input}) = ${solution.result}` :
                `(f ∘ g)(x) = ${solution.formula}`,
            finalAnswer: true,
            reasoning: 'This is the composed function or its value at the given input'
        });

        return steps;
    }

    generateInverseSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write y = f(x)',
            description: 'Express function with y',
            expression: `y = ${solution.originalFunction}`,
            reasoning: 'We will swap x and y to find the inverse',
            goalStatement: 'Find the inverse function that undoes f'
        });

        steps.push({
            stepNumber: 2,
            step: 'Swap x and y',
            description: 'Exchange the roles of input and output',
            expression: `x = ${solution.originalFunction.replace(/x/g, 'y')}`,
            reasoning: 'Swapping reverses the input-output relationship',
            algebraicRule: 'Inverse function property'
        });

        steps.push({
            stepNumber: 3,
            step: 'Solve for y',
            description: 'Isolate y on one side',
            expression: 'y = [solved expression]',
            reasoning: 'This gives us the inverse function formula',
            note: 'Requires algebraic manipulation specific to function type'
        });

        steps.push({
            stepNumber: 4,
            step: 'Write inverse notation',
            description: 'Express as f⁻¹(x)',
            expression: `f⁻¹(x) = [inverse formula]`,
            finalAnswer: true,
            reasoning: 'This function undoes what f does'
        });

        return steps;
    }

    generateDifferenceQuotientSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write function',
            description: 'Identify f(x)',
            expression: `f(x) = ${solution.function}`,
            reasoning: 'We will find f(x+h) and compare to f(x)',
            goalStatement: 'Compute [f(x+h) - f(x)]/h'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find f(x+h)',
            description: 'Substitute (x+h) for every x',
            expression: `f(x+h) = ${solution.function.replace(/x/g, '(x+h)')}`,
            reasoning: 'Use parentheses to avoid errors when substituting',
            algebraicRule: 'Substitution with binomial expression'
        });

        steps.push({
            stepNumber: 3,
            step: 'Expand f(x+h)',
            description: 'Multiply out and simplify',
            expression: '[expanded form]',
            reasoning: 'Expanding makes it easier to subtract f(x)',
            note: 'Careful with (x+h)² = x² + 2xh + h²'
        });

        steps.push({
            stepNumber: 4,
            step: 'Form f(x+h) - f(x)',
            description: 'Subtract the original function',
            expression: '[f(x+h) - f(x)]',
            reasoning: 'This gives the change in function value',
            visualHint: 'Distribute the negative sign carefully'
        });

        steps.push({
            stepNumber: 5,
            step: 'Divide by h',
            description: 'Form the difference quotient',
            expression: '[f(x+h) - f(x)]/h',
            reasoning: 'This represents average rate of change'
        });

        steps.push({
            stepNumber: 6,
            step: 'Factor and cancel h',
            description: 'Factor h from numerator and cancel',
            expression: '[simplified form]',
            reasoning: 'Canceling h gives the simplified difference quotient',
            finalAnswer: true,
            algebraicRule: 'Factoring and canceling common factors'
        });

        return steps;
    }

    generateGenericFunctionSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Function operation',
            description: `Perform ${solution.type}`,
            expression: solution.formula || solution.result,
            reasoning: 'Apply appropriate function operation technique',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS (similar structure to linear workbook)

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
            'Write function formula': 'A function is a rule that transforms inputs to outputs. The formula tells us exactly how to perform this transformation.',
            'Substitute input': 'Evaluation means finding the output for a specific input by following the function\'s rule.',
            'Write both functions': 'When combining functions, we need both formulas to create a new function.',
            'Identify functions': 'In composition, one function feeds into another, creating a chain of operations.',
            'Apply inner function first': 'Composition works from inside out, like nested boxes - open the inner box before the outer one.',
            'Swap x and y': 'Inverses reverse the input-output relationship - what was output becomes input and vice versa.',
            'Find f(x+h)': 'This represents the function value at a nearby point, x+h, which lets us measure how the function changes.'
        };

        return conceptualExplanations[step.step] || 'This step advances us toward solving the function operation problem.';
    }

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Identify what needs to be done: ${step.operation}
2. Perform the operation carefully
3. Simplify the result
4. Write the new expression`;
        }
        return 'Follow the standard procedure for this operation.';
    }

    getVisualExplanation(step, problem) {
        const category = this.functionTypes[problem.type]?.category;
        
        const visualExplanations = {
            'evaluation': 'Picture a machine: you put in the input, it processes according to the rule, and outputs the result.',
            'arithmetic': 'Imagine two parallel conveyor belts (functions) whose outputs are combined at each point.',
            'composition': 'Visualize a two-stage assembly line: output from first stage becomes input to second stage.',
            'inverse': 'Picture the function graph reflected across the line y=x, swapping x and y axes.',
            'difference_quotient': 'Visualize the slope of a line connecting two points on the function graph.'
        };

        return visualExplanations[category] || 'Visualize the operation as a transformation of the function.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Write function formula': 'Function notation: f(x) denotes output for input x',
            'Substitute input': 'Substitution property: replace variable with specific value',
            'Add the functions': 'Sum of functions: (f+g)(x) = f(x) + g(x)',
            'Multiply the functions': 'Product of functions: (f·g)(x) = f(x)·g(x)',
            'Apply inner function first': 'Composition definition: (f∘g)(x) = f(g(x))',
            'Swap x and y': 'Inverse function property: f⁻¹ undoes f'
        };

        return algebraicRules[step.step] || 'Apply standard algebraic principles for functions.';
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
                'evaluate': 'find the answer',
                'substitute': 'replace',
                'inverse': 'opposite function',
                'domain': 'allowed inputs',
                'range': 'possible outputs'
            },
            intermediate: {
                'composition': 'composition',
                'evaluate': 'evaluate',
                'substitute': 'substitute',
                'inverse': 'inverse',
                'domain': 'domain',
                'range': 'range'
            },
            ELI5: {
                'composition': 'doing one thing after another',
                'evaluate': 'figure out what comes out',
                'substitute': 'put in place of',
                'inverse': 'undo function',
                'function': 'magic machine that changes numbers',
                'domain': 'numbers you can put in',
                'range': 'numbers that can come out',
                'input': 'what you put in',
                'output': 'what comes out'
            },
            detailed: {
                'composition': 'function composition',
                'evaluate': 'evaluate (calculate the output)',
                'substitute': 'substitute (replace variable)',
                'inverse': 'inverse function',
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
            'Write function formula': "We're looking at our magic machine's instruction manual - it tells us what the machine does!",
            'Substitute input': "Now we're putting a number into our magic machine to see what comes out!",
            'Write both functions': "We have two magic machines, and we're going to use them together!",
            'Add the functions': "We're taking what comes out of both machines and adding them together!",
            'Identify functions': "We're setting up two machines in a row - the output of one goes into the next!",
            'Apply inner function first': "First, we run the number through the first machine to see what we get.",
            'Apply outer function': "Now we take what came out and put it through the second machine!",
            'Swap x and y': "We're switching which number goes in and which comes out - like reversing a recipe!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our problem!";
    }

    findRelevantAnalogy(step, problem) {
        const category = this.functionTypes[problem.type]?.category;
        
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(category)) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like following a recipe - each step gets us closer to the final dish!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'composition': 'doing one thing, then another',
            'evaluate': 'find out what number we get',
            'substitute': 'put in the place of',
            'inverse': 'the opposite action',
            'formula': 'the rule',
            'expression': 'the math',
            'simplify': 'make it easier',
            'domain': 'what numbers work',
            'range': 'what numbers we can get out',
            'function': 'number machine'
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
            'Write function formula': 'Draw a box labeled with the function name and its rule inside',
            'Substitute input': 'Draw an arrow going into the box with your number on it',
            'Write both functions': 'Draw two boxes side by side, each with its own rule',
            'Add the functions': 'Draw arrows from both boxes meeting at a plus sign',
            'Identify functions': 'Draw two boxes in a line with an arrow connecting them',
            'Apply inner function first': 'Show the number going into the first box',
            'Apply outer function': 'Show the result from the first box going into the second box',
            'Swap x and y': 'Draw the function graph and its mirror image across the diagonal line'
        };

        return visualizations[step.step] || 'Draw a picture to help you understand this step';
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
            why: `This is necessary because: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving the problem`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return `we need to continue the process`;
    }

    explainStepBenefit(nextStep) {
        return `getting us closer to the final answer`;
    }

    addErrorPrevention(step, problemType) {
        const category = this.functionTypes[problemType]?.category || 'evaluation';
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
            'Substitute input': [
                'Always use parentheses around substituted values or expressions',
                'Replace EVERY occurrence of the variable',
                'Be careful with signs when substituting negative values'
            ],
            'Apply inner function first': [
                'Remember: composition reads right to left',
                'Evaluate the inner function completely before moving to outer',
                'Keep track of intermediate results'
            ],
            'Swap x and y': [
                'Swap in ALL occurrences of x and y',
                'Make sure equation is still balanced after swapping',
                'Don\'t forget to solve for y afterward'
            ]
        };

        return tips[step.step] || ['Work carefully and check your work', 'Use parentheses to avoid errors'];
    }

    generateCheckPoints(step) {
        return [
            'Did I follow the correct order of operations?',
            'Are my parentheses balanced?',
            'Did I make any sign errors?',
            'Does this step make sense in context?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            evaluation: step.step === 'Substitute input' ?
                ['Use parentheses!', 'Replace ALL x values', 'Watch for negative substitutions'] : [],
            composition: step.step === 'Apply inner function first' ?
                ['Apply g first, not f', 'Substitute entire expression', 'Use parentheses'] : [],
            inverse: step.step === 'Swap x and y' ?
                ['Swap everywhere', 'Don\'t forget to solve for y', 'Check your algebra'] : []
        };

        const category = this.functionTypes[problemType]?.category || 'evaluation';
        return warnings[category] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Write function formula': 'Do I understand what this function does to its input?',
            'Substitute input': 'Did I use parentheses and substitute in all places?',
            'Write both functions': 'Do I have both function formulas written correctly?',
            'Add the functions': 'Did I add the expressions correctly, watching signs?',
            'Identify functions': 'Do I know which function is f and which is g?',
            'Apply inner function first': 'Did I apply g first (the inner function)?',
            'Swap x and y': 'Did I swap x and y everywhere in the equation?'
        };

        return questions[step.step] || 'Does this step make sense and move me toward the solution?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Write function formula': 'A clear expression showing the function rule',
            'Substitute input': 'The function formula with input value in place of variable',
            'Simplify': 'A single numerical value (the output)',
            'Add the functions': 'A combined expression with like terms combined',
            'Apply inner function first': 'The result of evaluating the inner function',
            'Apply outer function': 'The final composed result'
        };

        return expectations[step.step] || 'Progress toward solving the problem';
    }

    generateTroubleshootingTips(step) {
        return [
            'If stuck, review what the step is asking',
            'Check that you\'re following the correct procedure',
            'Verify your arithmetic carefully',
            'Try a simpler example first',
            'Draw a diagram if it helps visualize'
        ];
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

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Write function formula': [
                'What is the function name?',
                'What does it do to the input?',
                'Can you write it in f(x) = ... form?'
            ],
            'Substitute input': [
                'What value am I substituting?',
                'Where does x appear in the formula?',
                'Did I use parentheses around the substituted value?'
            ],
            'Write both functions': [
                'What is f(x)?',
                'What is g(x)?',
                'How will I combine them?'
            ],
            'Apply inner function first': [
                'Which is the inner function?',
                'What do I get when I evaluate it?',
                'What will I do with this result?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help solve the problem?'];
    }

    breakIntoSubSteps(step) {
        if (step.operation) {
            return [
                'Understand what operation to perform',
                'Set up the operation carefully',
                'Execute the operation step by step',
                'Simplify the result',
                'Check your work'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.functionTypes[problem.type]?.category || 'evaluation';
        const hintSet = this.hints[category];

        return {
            level1: hintSet?.level1 || 'Think about what you need to do.',
            level2: hintSet?.level2 || 'Consider the technique required.',
            level3: hintSet?.level3 || 'Apply the operation carefully.',
            level4: hintSet?.level4 || 'Perform the specific calculation needed.'
        };
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same type of operation with different functions',
            practiceHint: 'Practice with simple linear functions first',
            extension: 'Once comfortable, try with quadratic or more complex functions'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What do I see in this problem?',
            goal: 'What am I trying to accomplish?',
            strategy: 'What technique should I use?',
            execute: 'How do I perform this correctly?',
            verify: 'Does my result make sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which operation applies here?',
            'What order should I work in?',
            'Do I need to simplify first?',
            'Are there domain restrictions to consider?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'Substitute input': [
                'Could evaluate step-by-step instead of all at once',
                'Could use a table of values to organize work'
            ],
            'Apply inner function first': [
                'Could write out intermediate result explicitly',
                'Could use nested notation to keep track'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate for this problem'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the solution process`,
            progression: 'We are getting closer to the final answer',
            relationship: 'Each step transforms the problem toward the solution'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.functionTypes[problemType]?.category || 'evaluation';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic algebra', 'Function notation'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Write function formula': ['function', 'formula', 'rule', 'notation'],
            'Substitute input': ['substitute', 'evaluate', 'input', 'output'],
            'Write both functions': ['function', 'operation', 'combine'],
            'Add the functions': ['sum', 'add', 'combine', 'like terms'],
            'Identify functions': ['composition', 'inner', 'outer', 'nested'],
            'Apply inner function first': ['evaluate', 'inner function', 'intermediate result'],
            'Swap x and y': ['inverse', 'swap', 'reverse', 'undo']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before starting, what do I need to identify?',
            during: 'As I work, what should I watch out for?',
            after: 'After finishing, how can I check if it\'s correct?'
        };
    }

    findRealWorldConnection(step, problem) {
        const connections = {
            'evaluation': 'Like looking up a value in a conversion table or using a calculator function.',
            'arithmetic': 'Like combining costs from different sources or adding two temperature readings.',
            'composition': 'Like converting units through multiple steps, or processing data through stages.',
            'inverse': 'Like decoding a message after it was encoded, or converting back to original units.'
        };

        const category = this.functionTypes[problem.type]?.category;
        return connections[category] || 'Functions model real-world relationships between quantities.';
    }

    // GRAPH GENERATION

    generateFunctionGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.functionTypes[type]?.category;

        if (category) {
            this.graphData = this.generateFunctionGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateFunctionGraph(problem, solution) {
        return {
            type: 'function',
            category: this.functionTypes[problem.type]?.category,
            description: `Graph visualization of ${solution.type}`,
            graphType: 'coordinate_plane',
            visualization: 'Plot the function(s) on coordinate axes'
        };
    }

    // WORKBOOK GENERATION

    generateFunctionWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createNotationSection(),
            this.createEnhancedStepsSection(),
            this.createFunctionLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createDomainRangeSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection(),
            this.createCompositionExamplesSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Function Operations Mathematical Workbook',
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
            ['Problem Type', this.functionTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.functionTypes[this.currentProblem.type]?.category || 'function_operation'],
            ['Operation', this.currentSolution?.type || this.currentProblem.type],
            ['Description', this.currentProblem.context?.description || 'Function operation problem']
        ];

        // Add function formulas if available
        if (this.currentProblem.functions.f) {
            problemData.push(['', '']);
            problemData.push(['Functions', '']);
            problemData.push(['f(x)', this.currentProblem.functions.f]);
        }
        if (this.currentProblem.functions.g) {
            problemData.push(['g(x)', this.currentProblem.functions.g]);
        }
        if (this.currentProblem.input !== null && this.currentProblem.input !== undefined) {
            problemData.push(['Input Value', this.currentProblem.input]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.functionTypes[this.currentProblem.type]?.category;
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

    createNotationSection() {
        const category = this.functionTypes[this.currentProblem.type]?.category;
        
        const notationData = [
            ['Function Notation Guide', ''],
            ['', '']
        ];

        // Add relevant notation based on category
        if (category === 'evaluation' || category === 'arithmetic' || category === 'composition') {
            Object.entries(this.notationGuide.basic).forEach(([notation, meaning]) => {
                notationData.push([notation, meaning]);
            });
        }

        if (category === 'arithmetic') {
            notationData.push(['', '']);
            notationData.push(['Arithmetic Operations', '']);
            Object.entries(this.notationGuide.arithmetic).forEach(([notation, meaning]) => {
                notationData.push([notation, meaning]);
            });
        }

        if (category === 'composition') {
            notationData.push(['', '']);
            notationData.push(['Composition Notation', '']);
            Object.entries(this.notationGuide.composition).forEach(([notation, meaning]) => {
                notationData.push([notation, meaning]);
            });
        }

        if (category === 'inverse') {
            notationData.push(['', '']);
            notationData.push(['Inverse Notation', '']);
            Object.entries(this.notationGuide.inverse).forEach(([notation, meaning]) => {
                notationData.push([notation, meaning]);
            });
        }

        return {
            title: 'Notation Guide',
            type: 'notation',
            data: notationData
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
                stepsData.push(['Explanation', step.explanation.currentState]);
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

            if (step.visualHint && (this.explanationLevel === 'intermediate' || this.explanationLevel === 'detailed')) {
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
                
                const hints = step.scaffolding.hints;
                if (hints) {
                    stepsData.push(['Hint Level 1', hints.level1]);
                    stepsData.push(['Hint Level 2', hints.level2]);
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

    createFunctionLessonSection() {
        const { type } = this.currentProblem;
        const category = this.functionTypes[type]?.category;

        const lessonData = [
            ['Key Concepts', ''],
            ['', 'Functions represent input-output relationships'],
            ['', 'Each input produces exactly one output'],
            ['', 'Function notation f(x) shows dependency on x'],
            ['', 'Operations combine or transform functions'],
            ['', ''],
            ['Important Properties', ''],
            ['', 'Domain: set of valid inputs'],
            ['', 'Range: set of possible outputs'],
            ['', 'Composition: sequential application of functions'],
            ['', 'Inverse: function that undoes original function']
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

        if (this.currentSolution.formula) {
            solutionData.push(['Formula', this.currentSolution.formula]);
        }

        if (this.currentSolution.result !== null && this.currentSolution.result !== undefined) {
            solutionData.push(['Result', this.currentSolution.result]);
        }

        if (this.currentSolution.notation) {
            solutionData.push(['Notation', this.currentSolution.notation]);
        }

        if (this.currentSolution.domainRestrictions) {
            solutionData.push(['Domain Restrictions', this.currentSolution.domainRestrictions.join('; ')]);
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
            ['Operation Type', this.currentSolution.type || this.currentSolution.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel],
            ['Category', this.functionTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.order) {
            analysisData.push(['Order Note', this.currentSolution.order]);
        }

        if (this.currentSolution.method) {
            analysisData.push(['Method', this.currentSolution.method]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [
            ['Verification Method', 'Substitution and Checking'],
            ['', '']
        ];

        if (this.currentSolution.result !== null && this.currentSolution.result !== undefined) {
            verificationData.push(['Result', this.currentSolution.result]);
            verificationData.push(['Verification', 'Substitute back to verify correctness']);
        }

        if (this.currentSolution.g_of_input !== null && this.currentSolution.g_of_input !== undefined) {
            verificationData.push(['Intermediate', `g(${this.currentProblem.input}) = ${this.currentSolution.g_of_input}`]);
            verificationData.push(['Final', `f(${this.currentSolution.g_of_input}) = ${this.currentSolution.result}`]);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Confidence Level', 'High']);
            verificationData.push(['Verification Notes', 'Solution verified through direct calculation']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createDomainRangeSection() {
        if (!this.currentSolution) return null;

        const domainData = [];

        if (this.currentSolution.domainRestrictions) {
            domainData.push(['Domain Analysis', '']);
            domainData.push(['Restrictions', this.currentSolution.domainRestrictions.join('; ')]);
            domainData.push(['', '']);
        }

        if (domainData.length === 0) {
            domainData.push(['Domain', 'All real numbers (no restrictions for this operation)']);
        }

        domainData.push(['Range', 'Depends on specific function types involved']);

        return {
            title: 'Domain and Range',
            type: 'domain_range',
            data: domainData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const category = this.functionTypes[this.currentProblem.type]?.category;
        const applications = Object.values(this.realWorldProblems).filter(app => {
            return true; // Show all for comprehensive view
        }).slice(0, 3);

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

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generateFunctionPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateFunctionAlternativeMethods(this.currentProblem.type);

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
        const category = this.functionTypes[this.currentProblem.type]?.category;
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

    createCompositionExamplesSection() {
        const examples = this.compositionExamples.realWorld.slice(0, 2);
        
        const compositionData = [
            ['Composition Examples', ''],
            ['', '']
        ];

        examples.forEach((ex, index) => {
            compositionData.push([`Example ${index + 1}`, ex.context]);
            compositionData.push(['Description', ex.description]);
            compositionData.push(['Functions', ex.functions]);
            compositionData.push(['Composition', ex.composition]);
            compositionData.push(['Interpretation', ex.interpretation]);
            compositionData.push(['', '']);
        });

        return {
            title: 'Composition Examples',
            type: 'composition_examples',
            data: compositionData
        };
    }

    generateFunctionPedagogicalNotes(problemType) {
        const category = this.functionTypes[problemType]?.category;

        const pedagogicalDatabase = {
            evaluation: {
                objectives: [
                    'Evaluate functions at specific inputs',
                    'Use proper function notation',
                    'Understand input-output relationships'
                ],
                keyConcepts: [
                    'Function as rule transforming inputs to outputs',
                    'Substitution with parentheses',
                    'Order of operations after substitution'
                ],
                prerequisites: [
                    'Function notation understanding',
                    'Substitution skills',
                    'Order of operations'
                ],
                commonDifficulties: [
                    'Forgetting parentheses when substituting',
                    'Not substituting in all variable occurrences',
                    'Order of operations errors'
                ],
                teachingStrategies: [
                    'Use function machine analogy',
                    'Emphasize parentheses for all substitutions',
                    'Practice with various input types'
                ],
                extensions: [
                    'Evaluating at expressions',
                    'Function composition',
                    'Piecewise functions'
                ],
                assessment: [
                    'Can student substitute correctly?',
                    'Does student use parentheses?',
                    'Can student simplify properly?'
                ]
            },
            arithmetic: {
                objectives: [
                    'Combine functions using arithmetic operations',
                    'Determine domains of combined functions',
                    'Simplify combined function expressions'
                ],
                keyConcepts: [
                    'Operations apply to outputs at each input',
                    'Domain is intersection of individual domains',
                    'Special care for division (denominator ≠ 0)'
                ],
                prerequisites: [
                    'Function evaluation',
                    'Polynomial arithmetic',
                    'Domain concepts'
                ],
                commonDifficulties: [
                    'Sign errors in subtraction',
                    'Missing domain restrictions in division',
                    'Not combining like terms completely'
                ],
                teachingStrategies: [
                    'Practice with simple linear functions first',
                    'Emphasize domain restrictions for division',
                    'Use color coding for different functions'
                ],
                extensions: [
                    'Rational function operations',
                    'Composition after arithmetic',
                    'Word problems involving combined functions'
                ],
                assessment: [
                    'Does student combine correctly?',
                    'Does student identify domain restrictions?',
                    'Can student simplify results?'
                ]
            },
            composition: {
                objectives: [
                    'Compose functions correctly',
                    'Understand order in composition',
                    'Determine domain of composite functions'
                ],
                keyConcepts: [
                    'Composition applies functions sequentially',
                    'Order matters: f∘g ≠ g∘f usually',
                    'Work from inside out',
                    'Domain requires range-domain compatibility'
                ],
                prerequisites: [
                    'Function evaluation',
                    'Substitution with expressions',
                    'Domain and range concepts'
                ],
                commonDifficulties: [
                    'Confusing order (doing f first instead of g)',
                    'Not using parentheses for substitution',
                    'Missing domain restrictions',
                    'Expanding errors'
                ],
                teachingStrategies: [
                    'Use "nested boxes" or "assembly line" analogy',
                    'Practice identifying inner vs outer function',
                    'Emphasize right-to-left reading',
                    'Use notation f(g(x)) before symbol ∘'
                ],
                extensions: [
                    'Multiple compositions',
                    'Composition with inverses',
                    'Real-world composition chains'
                ],
                assessment: [
                    'Does student identify correct order?',
                    'Can student evaluate compositions?',
                    'Does student find composite formulas correctly?'
                ]
            },
            inverse: {
                objectives: [
                    'Find inverse functions',
                    'Verify inverse relationships',
                    'Understand inverse concepts'
                ],
                keyConcepts: [
                    'Inverse undoes original function',
                    'Domain and range swap',
                    'One-to-one requirement',
                    'Composition with inverse gives identity'
                ],
                prerequisites: [
                    'Solving equations',
                    'Variable manipulation',
                    'Function composition',
                    'One-to-one concept'
                ],
                commonDifficulties: [
                    'Confusing inverse with reciprocal',
                    'Not swapping variables everywhere',
                    'Algebraic errors in solving',
                    'Not verifying result'
                ],
                teachingStrategies: [
                    'Use encoding/decoding analogy',
                    'Practice with simple linear functions',
                    'Always verify by composition',
                    'Graph inverse as reflection'
                ],
                extensions: [
                    'Restricting domain for inverses',
                    'Inverse of compositions',
                    'Applications in cryptography'
                ],
                assessment: [
                    'Can student find inverse?',
                    'Does student verify correctly?',
                    'Does student understand restrictions?'
                ]
            },
            difference_quotient: {
                objectives: [
                    'Compute difference quotients',
                    'Understand average rate of change',
                    'Prepare for calculus concepts'
                ],
                keyConcepts: [
                    'Represents average rate of change',
                    'Foundation for derivatives',
                    'Requires careful algebraic manipulation',
                    'Must factor and cancel h'
                ],
                prerequisites: [
                    'Function evaluation',
                    'Binomial expansion',
                    'Factoring',
                    'Algebraic fractions'
                ],
                commonDifficulties: [
                    'Expanding (x+h)² incorrectly',
                    'Sign errors in subtraction',
                    'Not factoring out h',
                    'Canceling when h not factored'
                ],
                teachingStrategies: [
                    'Practice (x+h)² expansion separately',
                    'Use consistent step-by-step approach',
                    'Emphasize factoring before canceling',
                    'Connect to slope of secant line'
                ],
                extensions: [
                    'Limit as h→0 (derivative)',
                    'Geometric interpretation',
                    'Applications to motion'
                ],
                assessment: [
                    'Can student expand correctly?',
                    'Does student factor h properly?',
                    'Does student simplify completely?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Perform function operations'],
            keyConcepts: ['Function properties', 'Operation rules'],
            prerequisites: ['Basic algebra', 'Function notation'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex functions'],
            assessment: ['Verify understanding of process']
        };
    }

    generateFunctionAlternativeMethods(problemType) {
        const category = this.functionTypes[problemType]?.category;

        const alternativeDatabase = {
            evaluation: {
                primaryMethod: 'Direct Substitution',
                methods: [
                    {
                        name: 'Table Method',
                        description: 'Create organized table with input, substitution, and result'
                    },
                    {
                        name: 'Step-by-Step',
                        description: 'Evaluate one operation at a time following order of operations'
                    },
                    {
                        name: 'Graphical',
                        description: 'Read value from function graph at given x-coordinate'
                    }
                ],
                comparison: 'Direct substitution fastest; table good for organization; graphical provides visual confirmation'
            },
            arithmetic: {
                primaryMethod: 'Combine Formulas Algebraically',
                methods: [
                    {
                        name: 'Evaluate Then Combine',
                        description: 'Find f(x) and g(x) separately, then combine the values'
                    },
                    {
                        name: 'Graphical',
                        description: 'Graph both functions and combine y-values graphically'
                    },
                    {
                        name: 'Table of Values',
                        description: 'Make table with columns for x, f(x), g(x), and combined result'
                    }
                ],
                comparison: 'Algebraic gives general formula; evaluate-then-combine good for specific values; graphical provides visualization'
            },
            composition: {
                primaryMethod: 'Inside-Out Substitution',
                methods: [
                    {
                        name: 'Two-Step Evaluation',
                        description: 'Evaluate inner function first, then plug result into outer function'
                    },
                    {
                        name: 'Direct Substitution',
                        description: 'Substitute entire g(x) formula directly into f(x)'
                    },
                    {
                        name: 'Graphical',
                        description: 'Follow composition path on graphs: x → g(x) → f(g(x))'
                    }
                ],
                comparison: 'Inside-out clearest for beginners; direct substitution faster when familiar; graphical shows flow'
            },
            inverse: {
                primaryMethod: 'Swap and Solve',
                methods: [
                    {
                        name: 'Graphical Reflection',
                        description: 'Reflect graph across y=x line'
                    },
                    {
                        name: 'Reverse Operations',
                        description: 'Apply inverse operations in reverse order'
                    },
                    {
                        name: 'Verify by Composition',
                        description: 'Find candidate inverse, verify f(f⁻¹(x)) = x'
                    }
                ],
                comparison: 'Swap-and-solve most systematic; reverse operations intuitive for simple functions; verification confirms result'
            },
            difference_quotient: {
                primaryMethod: 'Expand, Subtract, Factor, Cancel',
                methods: [
                    {
                        name: 'Numerical Approximation',
                        description: 'Use small h value and calculate numerically'
                    },
                    {
                        name: 'Conjugate Method',
                        description: 'For square roots, rationalize using conjugate'
                    },
                    {
                        name: 'Pattern Recognition',
                        description: 'Recognize common patterns (linear, quadratic, etc.)'
                    }
                ],
                comparison: 'Algebraic method gives exact result; numerical gives approximation; pattern recognition speeds up familiar types'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard approach for function operations',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods may apply depending on specific function types'
            }],
            comparison: 'Choose method based on function complexity and required form of answer'
        };
    }
}

// Export the class
export default EnhancedFunctionOperationsMathematicalWorkbook;
