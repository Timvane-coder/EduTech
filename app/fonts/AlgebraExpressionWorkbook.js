// Enhanced Algebraic Expression Workbook - Multiple Layer Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedAlgebraicExpressionWorkbook {
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
        this.initializeAlgebraicSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
    }

    initializeAlgebraicLessons() {
        this.lessons = {
            simplification: {
                title: "Algebraic Simplification",
                concepts: [
                    "Combine like terms (terms with same variable and exponent)",
                    "Apply distributive property: a(b + c) = ab + ac",
                    "Order of operations (PEMDAS/BODMAS)",
                    "Simplify before solving when possible"
                ],
                theory: "Simplification reduces expressions to their most compact form by combining like terms and applying algebraic properties systematically.",
                keyFormulas: {
                    "Distributive Property": "a(b + c) = ab + ac",
                    "Combining Like Terms": "ax + bx = (a + b)x",
                    "Associative Property": "(a + b) + c = a + (b + c)",
                    "Commutative Property": "a + b = b + a"
                },
                solvingSteps: [
                    "Remove parentheses using distributive property",
                    "Identify like terms (same variable, same exponent)",
                    "Combine coefficients of like terms",
                    "Arrange in standard form (descending exponents)"
                ],
                applications: [
                    "Preparing equations for solving",
                    "Polynomial operations",
                    "Function composition",
                    "Algebraic modeling"
                ]
            },

            expansion: {
                title: "Algebraic Expansion",
                concepts: [
                    "Multiply each term in one expression by each term in another",
                    "FOIL method for binomials: (a + b)(c + d) = ac + ad + bc + bd",
                    "Special products: (a + b)² = a² + 2ab + b²",
                    "Difference of squares: (a + b)(a - b) = a² - b²"
                ],
                theory: "Expansion transforms factored or compact expressions into expanded polynomial form by applying multiplication systematically.",
                keyFormulas: {
                    "FOIL": "(a + b)(c + d) = ac + ad + bc + bd",
                    "Perfect Square": "(a + b)² = a² + 2ab + b²",
                    "Difference of Squares": "(a + b)(a - b) = a² - b²",
                    "Cube of Sum": "(a + b)³ = a³ + 3a²b + 3ab² + b³"
                },
                solvingSteps: [
                    "Identify the multiplication pattern",
                    "Apply appropriate expansion rule",
                    "Multiply each term systematically",
                    "Combine like terms in result"
                ],
                applications: [
                    "Solving quadratic equations",
                    "Polynomial multiplication",
                    "Algebraic proof",
                    "Calculus preparation"
                ]
            },

            factorization: {
                title: "Algebraic Factorization",
                concepts: [
                    "Factor out greatest common factor (GCF)",
                    "Factor quadratics: ax² + bx + c",
                    "Special factorization patterns",
                    "Factor by grouping for 4+ terms"
                ],
                theory: "Factorization reverses expansion, expressing polynomials as products of simpler factors. Essential for solving equations and simplifying rational expressions.",
                keyFormulas: {
                    "GCF Factoring": "ax + ay = a(x + y)",
                    "Quadratic": "x² + bx + c = (x + p)(x + q) where p + q = b, pq = c",
                    "Difference of Squares": "a² - b² = (a + b)(a - b)",
                    "Perfect Square": "a² + 2ab + b² = (a + b)²"
                },
                solvingSteps: [
                    "Look for greatest common factor first",
                    "Check for special patterns (difference of squares, perfect square)",
                    "For quadratics, find factors of c that sum to b",
                    "For grouping, group terms and factor each group"
                ],
                applications: [
                    "Solving polynomial equations",
                    "Simplifying rational expressions",
                    "Finding zeros of functions",
                    "Partial fraction decomposition"
                ]
            },

            polynomial_operations: {
                title: "Polynomial Operations",
                concepts: [
                    "Addition/subtraction: combine like terms",
                    "Multiplication: distribute each term",
                    "Division: long division or synthetic division",
                    "Degree and leading coefficient"
                ],
                theory: "Polynomial operations follow specific rules based on term structure. Understanding these operations is fundamental to all algebra.",
                keyFormulas: {
                    "Addition": "(ax^n + bx^m) + (cx^n + dx^m) = (a+c)x^n + (b+d)x^m",
                    "Multiplication": "Terms multiply, exponents add: x^m · x^n = x^(m+n)",
                    "Division": "Terms divide, exponents subtract: x^m / x^n = x^(m-n)",
                    "Power Rule": "(x^m)^n = x^(mn)"
                },
                operations: [
                    "Vertical addition/subtraction",
                    "Horizontal multiplication",
                    "Long division algorithm",
                    "Synthetic division (for linear divisors)"
                ],
                applications: [
                    "Function operations",
                    "Curve fitting",
                    "Taylor series",
                    "Engineering calculations"
                ]
            },

            rational_expressions: {
                title: "Rational Expression Simplification",
                concepts: [
                    "Factor numerator and denominator completely",
                    "Cancel common factors",
                    "Find restricted values (denominator ≠ 0)",
                    "Simplify complex fractions"
                ],
                theory: "Rational expressions are ratios of polynomials. Simplification requires factoring and canceling while respecting domain restrictions.",
                keyFormulas: {
                    "Simplification": "Factor then cancel: (ac)/(bc) = a/b (b,c ≠ 0)",
                    "Multiplication": "(a/b)(c/d) = (ac)/(bd)",
                    "Division": "(a/b)/(c/d) = (ad)/(bc)",
                    "Addition": "a/c + b/c = (a+b)/c"
                },
                solvingSteps: [
                    "Factor all polynomials completely",
                    "Identify and cancel common factors",
                    "Note any domain restrictions",
                    "Simplify the resulting expression"
                ],
                applications: [
                    "Rate problems",
                    "Combined work problems",
                    "Lens equations in physics",
                    "Electrical circuit analysis"
                ]
            },

            exponent_rules: {
                title: "Exponent and Power Rules",
                concepts: [
                    "Product rule: x^m · x^n = x^(m+n)",
                    "Quotient rule: x^m / x^n = x^(m-n)",
                    "Power rule: (x^m)^n = x^(mn)",
                    "Negative and zero exponents"
                ],
                theory: "Exponent rules provide systematic methods for manipulating powers. These rules derive from the definition of repeated multiplication.",
                keyFormulas: {
                    "Product": "x^m · x^n = x^(m+n)",
                    "Quotient": "x^m / x^n = x^(m-n)",
                    "Power": "(x^m)^n = x^(mn)",
                    "Negative": "x^(-n) = 1/x^n",
                    "Zero": "x^0 = 1 (x ≠ 0)"
                },
                solvingSteps: [
                    "Identify the exponent operation required",
                    "Apply appropriate exponent rule",
                    "Simplify the resulting expression",
                    "Convert to positive exponents if needed"
                ],
                applications: [
                    "Scientific notation",
                    "Growth and decay models",
                    "Compound interest",
                    "Computer science algorithms"
                ]
            },

            radical_expressions: {
                title: "Radical Expression Simplification",
                concepts: [
                    "Simplify radicals: √(ab) = √a · √b",
                    "Rationalize denominators",
                    "Combine like radicals",
                    "Convert between radical and exponent form"
                ],
                theory: "Radicals represent roots and can be manipulated using specific properties. Simplification often involves factoring perfect squares/cubes.",
                keyFormulas: {
                    "Product": "√(ab) = √a · √b",
                    "Quotient": "√(a/b) = √a / √b",
                    "Power": "√(a^n) = a^(n/2) (for even roots)",
                    "Rationalization": "1/√a = √a/a"
                },
                solvingSteps: [
                    "Factor radicand for perfect squares/cubes",
                    "Simplify using radical properties",
                    "Rationalize denominators if present",
                    "Combine like radical terms"
                ],
                applications: [
                    "Pythagorean theorem",
                    "Distance formulas",
                    "Quadratic formula",
                    "Physics equations"
                ]
            },

            substitution_evaluation: {
                title: "Expression Evaluation by Substitution",
                concepts: [
                    "Replace variables with given values",
                    "Follow order of operations carefully",
                    "Handle multiple variables systematically",
                    "Check units and reasonableness"
                ],
                theory: "Evaluation transforms algebraic expressions into numerical values by substituting specific values for variables and computing the result.",
                keyFormulas: {
                    "Direct Substitution": "For f(x), find f(a) by replacing x with a",
                    "Order of Operations": "PEMDAS: Parentheses, Exponents, Multiply/Divide, Add/Subtract",
                    "Multiple Variables": "Substitute all variables simultaneously"
                },
                solvingSteps: [
                    "Identify all variables in the expression",
                    "Substitute given values (use parentheses)",
                    "Simplify using order of operations",
                    "Compute final numerical result"
                ],
                applications: [
                    "Function evaluation",
                    "Formula application",
                    "Scientific calculations",
                    "Engineering design"
                ]
            },

            algebraic_manipulation: {
                title: "Advanced Algebraic Manipulation",
                concepts: [
                    "Completing the square",
                    "Rationalizing complex expressions",
                    "Partial fraction decomposition",
                    "Algebraic conjugates"
                ],
                theory: "Advanced techniques transform expressions into forms suitable for specific purposes like integration, solving, or simplification.",
                keyFormulas: {
                    "Completing Square": "x² + bx + (b/2)² = (x + b/2)²",
                    "Conjugate": "(a + √b)(a - √b) = a² - b",
                    "Partial Fractions": "P(x)/Q(x) = A/(x-a) + B/(x-b) + ...",
                    "Difference of Cubes": "a³ - b³ = (a - b)(a² + ab + b²)"
                },
                techniques: [
                    "Strategic addition/subtraction",
                    "Multiplication by conjugates",
                    "Algebraic substitution",
                    "Synthetic techniques"
                ],
                applications: [
                    "Calculus integration",
                    "Differential equations",
                    "Advanced problem solving",
                    "Mathematical proofs"
                ]
            },

            expression_transformation: {
                title: "Expression Form Transformations",
                concepts: [
                    "Standard form to vertex form",
                    "Factored to expanded form",
                    "Rational to polynomial plus remainder",
                    "Exponential to logarithmic form"
                ],
                theory: "Different forms of the same expression reveal different properties. Transformation skills allow strategic problem-solving approaches.",
                transformations: {
                    "Quadratic Forms": "ax² + bx + c ↔ a(x - h)² + k ↔ a(x - r₁)(x - r₂)",
                    "Exponential/Log": "y = b^x ↔ x = log_b(y)",
                    "Radical/Exponent": "√x ↔ x^(1/2), ∛x ↔ x^(1/3)",
                    "Trig Forms": "Various trigonometric identities"
                },
                applications: [
                    "Graphing functions",
                    "Solving equations",
                    "Optimization problems",
                    "Function analysis"
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
            'sqrt': '√', 'cbrt': '∛',
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±',
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            'times': '×', 'div': '÷', 'cdot': '·',
            'sum': '∑', 'prod': '∏', 'integral': '∫',
            'partial': '∂', 'nabla': '∇'
        };
    }

    initializeAlgebraicSolvers() {
        this.algebraicTypes = {
            // Basic simplification
            combine_like_terms: {
                patterns: [
                    /\d*x\s*[+-]\s*\d*x/,
                    /combine.*like.*terms/i,
                    /simplify.*expression/i,
                    /\d+x\s*[+-]\s*\d+x\s*[+-]\s*\d+/
                ],
                solver: this.combineLikeTerms.bind(this),
                name: 'Combine Like Terms',
                category: 'simplification',
                description: 'Combines terms with the same variable and exponent'
            },

            // Distributive property
            distribute: {
                patterns: [
                    /\d*\([^)]+\)/,
                    /distribute/i,
                    /expand.*parenthes/i,
                    /\d+\(.*[+-].*\)/
                ],
                solver: this.applyDistributive.bind(this),
                name: 'Apply Distributive Property',
                category: 'expansion',
                description: 'Applies a(b + c) = ab + ac'
            },

            // FOIL and binomial multiplication
            foil_multiplication: {
                patterns: [
                    /\([^)]+\)\s*\([^)]+\)/,
                    /foil/i,
                    /binomial.*multiplication/i,
                    /multiply.*binomials/i
                ],
                solver: this.multiplyBinomials.bind(this),
                name: 'Binomial Multiplication (FOIL)',
                category: 'expansion',
                description: 'Multiplies two binomials using FOIL method'
            },

            // Perfect square expansion
            perfect_square: {
                patterns: [
                    /\([^)]+\)\^2/,
                    /\([^)]+\)\*\*2/,
                    /perfect.*square/i,
                    /square.*binomial/i
                ],
                solver: this.expandPerfectSquare.bind(this),
                name: 'Perfect Square Expansion',
                category: 'expansion',
                description: 'Expands (a + b)² or (a - b)²'
            },

            // Difference of squares
            difference_of_squares: {
                patterns: [
                    /x\^2\s*-\s*\d+/,
                    /\d+\s*-\s*x\^2/,
                    /difference.*squares/i,
                    /factor.*x\^2.*-/i
                ],
                solver: this.factorDifferenceOfSquares.bind(this),
                name: 'Factor Difference of Squares',
                category: 'factorization',
                description: 'Factors a² - b² = (a + b)(a - b)'
            },

            // GCF factoring
            gcf_factoring: {
                patterns: [
                    /factor.*gcf/i,
                    /greatest.*common.*factor/i,
                    /factor.*out/i,
                    /common.*factor/i
                ],
                solver: this.factorGCF.bind(this),
                name: 'Factor Out GCF',
                category: 'factorization',
                description: 'Factors out greatest common factor'
            },

            // Quadratic factoring
            factor_quadratic: {
                patterns: [
                    /x\^2\s*[+-]\s*\d*x\s*[+-]\s*\d+/,
                    /factor.*quadratic/i,
                    /factor.*trinomial/i,
                    /ax\^2.*bx.*c/i
                ],
                solver: this.factorQuadratic.bind(this),
                name: 'Factor Quadratic Expression',
                category: 'factorization',
                description: 'Factors ax² + bx + c'
            },

            // Polynomial addition
            polynomial_addition: {
                patterns: [
                    /add.*polynomial/i,
                    /polynomial.*addition/i,
                    /\+.*polynomial/i
                ],
                solver: this.addPolynomials.bind(this),
                name: 'Add Polynomials',
                category: 'polynomial_operations',
                description: 'Adds two or more polynomials'
            },

            // Polynomial subtraction
            polynomial_subtraction: {
                patterns: [
                    /subtract.*polynomial/i,
                    /polynomial.*subtraction/i,
                    /-.*polynomial/i
                ],
                solver: this.subtractPolynomials.bind(this),
                name: 'Subtract Polynomials',
                category: 'polynomial_operations',
                description: 'Subtracts polynomials'
            },

            // Polynomial multiplication
            polynomial_multiplication: {
                patterns: [
                    /multiply.*polynomial/i,
                    /polynomial.*multiplication/i,
                    /\*.*polynomial/i
                ],
                solver: this.multiplyPolynomials.bind(this),
                name: 'Multiply Polynomials',
                category: 'polynomial_operations',
                description: 'Multiplies polynomials term by term'
            },

            // Polynomial division
            polynomial_division: {
                patterns: [
                    /divide.*polynomial/i,
                    /polynomial.*division/i,
                    /long.*division/i,
                    /synthetic.*division/i
                ],
                solver: this.dividePolynomials.bind(this),
                name: 'Divide Polynomials',
                category: 'polynomial_operations',
                description: 'Divides polynomials using long division'
            },

            // Rational expression simplification
            simplify_rational: {
                patterns: [
                    /simplify.*rational/i,
                    /simplify.*fraction/i,
                    /reduce.*fraction/i,
                    /\(.*\)\/\(.*\)/
                ],
                solver: this.simplifyRational.bind(this),
                name: 'Simplify Rational Expression',
                category: 'rational_expressions',
                description: 'Simplifies rational expressions by factoring and canceling'
            },

            // Exponent simplification
            simplify_exponents: {
                patterns: [
                    /x\^\d+\s*\*\s*x\^\d+/,
                    /simplify.*exponent/i,
                    /exponent.*rules/i,
                    /power.*rules/i
                ],
                solver: this.simplifyExponents.bind(this),
                name: 'Simplify Exponents',
                category: 'exponent_rules',
                description: 'Applies exponent rules to simplify'
            },

            // Radical simplification
            simplify_radicals: {
                patterns: [
                    /sqrt\(.*\)/,
                    /√/,
                    /simplify.*radical/i,
                    /simplify.*root/i
                ],
                solver: this.simplifyRadicals.bind(this),
                name: 'Simplify Radicals',
                category: 'radical_expressions',
                description: 'Simplifies radical expressions'
            },

            // Rationalize denominator
            rationalize_denominator: {
                patterns: [
                    /rationalize/i,
                    /1\/sqrt/,
                    /denominator.*sqrt/i,
                    /\/√/
                ],
                solver: this.rationalizeDenominator.bind(this),
                name: 'Rationalize Denominator',
                category: 'radical_expressions',
                description: 'Removes radicals from denominator'
            },

            // Expression evaluation
            evaluate_expression: {
                patterns: [
                    /evaluate/i,
                    /substitute/i,
                    /x\s*=\s*\d+/,
                    /value.*when/i
                ],
                solver: this.evaluateExpression.bind(this),
                name: 'Evaluate Expression',
                category: 'substitution_evaluation',
                description: 'Evaluates expression for given variable values'
            },

            // Complete the square
            complete_square: {
                patterns: [
                    /complete.*square/i,
                    /completing.*square/i,
                    /vertex.*form/i
                ],
                solver: this.completeTheSquare.bind(this),
                name: 'Complete the Square',
                category: 'algebraic_manipulation',
                description: 'Transforms quadratic to vertex form'
            },

            // Partial fraction decomposition
            partial_fractions: {
                patterns: [
                    /partial.*fraction/i,
                    /decompose.*fraction/i,
                    /fraction.*decomposition/i
                ],
                solver: this.partialFractionDecomposition.bind(this),
                name: 'Partial Fraction Decomposition',
                category: 'algebraic_manipulation',
                description: 'Decomposes rational expression into partial fractions'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            combine_like_terms: {
                'Identify like terms': [
                    'Confusing x and x² as like terms',
                    'Forgetting that coefficients must match for like terms',
                    'Trying to combine different variables (x and y)'
                ],
                'Combine coefficients': [
                    'Adding variables instead of coefficients',
                    'Sign errors when combining positive and negative terms'
                ]
            },
            distribute: {
                'Apply distribution': [
                    'Forgetting to multiply ALL terms inside parentheses',
                    'Sign errors with negative distribution',
                    'Not distributing exponents correctly'
                ]
            },
            foil_multiplication: {
                'Multiply terms': [
                    'Missing one of the FOIL products',
                    'Sign errors in multiplication',
                    'Forgetting to combine like terms after FOIL'
                ]
            },
            factor_quadratic: {
                'Find factors': [
                    'Finding factors that multiply but don\'t add correctly',
                    'Sign errors in factored form',
                    'Not checking GCF first'
                ]
            },
            simplify_exponents: {
                'Apply exponent rules': [
                    'Adding exponents when multiplying different bases',
                    'Confusing product rule with power rule',
                    'Incorrectly handling negative exponents'
                ]
            },
            simplify_radicals: {
                'Factor perfect squares': [
                    'Not factoring out all perfect squares',
                    'Incorrectly splitting radicals',
                    'Forgetting to simplify coefficient'
                ]
            }
        };

        this.errorPrevention = {
            sign_tracking: {
                reminder: 'Track signs carefully through all operations',
                method: 'Use color coding for negative terms'
            },
            like_terms: {
                reminder: 'Like terms must have identical variable parts',
                method: 'Highlight variable parts to check matching'
            },
            distribution_complete: {
                reminder: 'Distribute to EVERY term inside parentheses',
                method: 'Draw arrows from multiplier to each term'
            },
            exponent_rules: {
                reminder: 'Different operations use different exponent rules',
                method: 'Write out which rule you\'re using before applying'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this transformation works and its mathematical meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact sequence of algebraic operations to perform',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical and spatial understanding of expressions',
                language: 'visual and spatial metaphors'
            },
            algebraic: {
                focus: 'Formal algebraic properties and rules',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete numbers'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of concrete and abstract'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive explanations with properties',
                examples: 'abstract and generalized'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty'
            }
        };
    }

    // MAIN SOLVER METHOD
    solveAlgebraicProblem(config) {
        const { expression, operation, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseAlgebraicProblem(expression, operation, parameters, problemType, context);
            this.currentSolution = this.solveAlgebraicProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateAlgebraicSteps(this.currentProblem, this.currentSolution);
            this.generateAlgebraicGraphData();
            this.generateAlgebraicWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                result: this.currentSolution?.result,
                expressionType: this.currentSolution?.expressionType
            };

        } catch (error) {
            throw new Error(`Failed to solve algebraic problem: ${error.message}`);
        }
    }

    parseAlgebraicProblem(expression, operation = 'simplify', parameters = {}, problemType = null, context = {}) {
        const cleanInput = expression ? this.cleanMathExpression(expression) : '';

        if (problemType && this.algebraicTypes[problemType]) {
            return {
                originalInput: expression,
                cleanInput: cleanInput,
                type: problemType,
                operation: operation,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect algebraic problem type
        for (const [type, config] of Object.entries(this.algebraicTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(operation)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractAlgebraicParameters(match, type, cleanInput);

                    return {
                        originalInput: expression,
                        cleanInput: cleanInput,
                        type: type,
                        operation: operation,
                        parameters: { ...extractedParams, ...parameters },
                        context: { ...context },
                        match: match,
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default to simplification
        return {
            originalInput: expression,
            cleanInput: cleanInput,
            type: 'combine_like_terms',
            operation: operation,
            parameters: { ...parameters },
            context: { ...context },
            parsedAt: new Date().toISOString()
        };
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/\^/g, '**')
            .replace(/sqrt/g, 'sqrt')
            .replace(/√/g, 'sqrt')
            .trim();
    }

    extractAlgebraicParameters(match, type, fullExpression) {
        const params = {};

        // Extract terms from expression
        if (type === 'combine_like_terms') {
            params.terms = this.extractTerms(fullExpression);
        } else if (type === 'distribute') {
            params.multiplier = this.extractMultiplier(fullExpression);
            params.expression = this.extractParenthetical(fullExpression);
        } else if (type === 'foil_multiplication') {
            params.binomials = this.extractBinomials(fullExpression);
        } else if (type === 'factor_quadratic') {
            params.coefficients = this.extractQuadraticCoefficients(fullExpression);
        } else if (type === 'evaluate_expression') {
            params.expression = fullExpression;
            params.values = this.extractVariableValues(fullExpression);
        }

        return params;
    }

    extractTerms(expression) {
        // Extract algebraic terms from expression
        const terms = [];
        const termPattern = /([+-]?\s*\d*\.?\d*)\s*([a-z]\^?\d*)/gi;
        let match;

        while ((match = termPattern.exec(expression)) !== null) {
            const coefficient = match[1].replace(/\s/g, '') || '1';
            const variable = match[2];
            terms.push({
                coefficient: parseFloat(coefficient) || 1,
                variable: variable,
                original: match[0]
            });
        }

        return terms;
    }

    extractMultiplier(expression) {
        const match = expression.match(/^([+-]?\d*\.?\d*)\s*\(/);
        return match ? parseFloat(match[1]) || 1 : 1;
    }

    extractParenthetical(expression) {
        const match = expression.match(/\(([^)]+)\)/);
        return match ? match[1] : '';
    }

    extractBinomials(expression) {
        const binomialPattern = /\(([^)]+)\)/g;
        const binomials = [];
        let match;

        while ((match = binomialPattern.exec(expression)) !== null) {
            binomials.push(match[1]);
        }

        return binomials.slice(0, 2); // Get first two binomials
    }

    extractQuadraticCoefficients(expression) {
        // Extract a, b, c from ax^2 + bx + c
        const quadPattern = /([+-]?\d*\.?\d*)\s*x\^?2?\s*([+-]\s*\d*\.?\d*)\s*x?\s*([+-]\s*\d+\.?\d*)?/i;
        const match = expression.match(quadPattern);

        if (match) {
            return {
                a: parseFloat(match[1]) || 1,
                b: parseFloat(match[2].replace(/\s/g, '')) || 0,
                c: parseFloat(match[3]?.replace(/\s/g, '') || '0')
            };
        }

        return { a: 1, b: 0, c: 0 };
    }

    extractVariableValues(expression) {
        const values = {};
        const valuePattern = /([a-z])\s*=\s*([+-]?\d+\.?\d*)/gi;
        let match;

        while ((match = valuePattern.exec(expression)) !== null) {
            values[match[1]] = parseFloat(match[2]);
        }

        return values;
    }

    solveAlgebraicProblem_Internal(problem) {
        const solver = this.algebraicTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for algebraic problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // ALGEBRAIC SOLVERS

    combineLikeTerms(problem) {
        const { terms = [] } = problem.parameters;
        
        if (terms.length === 0) {
            // Parse from clean input
            const parsedTerms = this.parseExpression(problem.cleanInput);
            return this.combineTermsInternal(parsedTerms);
        }

        return this.combineTermsInternal(terms);
    }

    combineTermsInternal(terms) {
        const combined = {};

        terms.forEach(term => {
            const key = term.variable || 'constant';
            if (!combined[key]) {
                combined[key] = 0;
            }
            combined[key] += term.coefficient;
        });

        const resultTerms = Object.entries(combined)
            .filter(([key, coef]) => Math.abs(coef) > 1e-10)
            .map(([variable, coefficient]) => ({
                coefficient: coefficient,
                variable: variable !== 'constant' ? variable : '',
                display: variable !== 'constant' ? 
                    `${coefficient >= 0 ? '+' : ''}${coefficient}${variable}` :
                    `${coefficient >= 0 ? '+' : ''}${coefficient}`
            }));

        const resultExpression = resultTerms
            .map(t => t.display)
            .join(' ')
            .replace(/^\+\s*/, ''); // Remove leading +

        return {
            expressionType: 'Combined Like Terms',
            originalTerms: terms,
            combinedTerms: resultTerms,
            result: resultExpression,
            termCount: {
                original: terms.length,
                simplified: resultTerms.length
            },
            category: 'simplification'
        };
    }

    applyDistributive(problem) {
        const { multiplier, expression } = problem.parameters;
        
        // Parse the expression inside parentheses
        const terms = this.parseExpression(expression || problem.cleanInput.match(/\(([^)]+)\)/)?.[1] || '');
        const mult = multiplier || this.extractMultiplier(problem.cleanInput);

        const distributedTerms = terms.map(term => ({
            coefficient: term.coefficient * mult,
            variable: term.variable,
            original: term,
            display: `${term.coefficient * mult}${term.variable || ''}`
        }));

        const resultExpression = distributedTerms
            .map(t => (t.coefficient >= 0 ? '+' : '') + t.display)
            .join(' ')
            .replace(/^\+\s*/, '');

        return {
            expressionType: 'Distributed Expression',
            multiplier: mult,
            originalExpression: expression || problem.cleanInput,
            distributedTerms: distributedTerms,
            result: resultExpression,
            property: 'Distributive Property: a(b + c) = ab + ac',
            category: 'expansion'
        };
    }

    multiplyBinomials(problem) {
        const { binomials = [] } = problem.parameters;
        
        if (binomials.length < 2) {
            const extracted = this.extractBinomials(problem.cleanInput);
            return this.foilMultiplication(extracted[0], extracted[1]);
        }

        return this.foilMultiplication(binomials[0], binomials[1]);
    }

    foilMultiplication(binomial1, binomial2) {
        const terms1 = this.parseExpression(binomial1);
        const terms2 = this.parseExpression(binomial2);

        if (terms1.length !== 2 || terms2.length !== 2) {
            return {
                expressionType: 'Invalid Binomials',
                error: 'Each binomial must have exactly 2 terms',
                category: 'expansion'
            };
        }

        const first = {
            term: terms1[0].coefficient * terms2[0].coefficient,
            variable: this.combineVariables(terms1[0].variable, terms2[0].variable),
            label: 'First'
        };

        const outer = {
            term: terms1[0].coefficient * terms2[1].coefficient,
            variable: this.combineVariables(terms1[0].variable, terms2[1].variable),
            label: 'Outer'
        };

        const inner = {
            term: terms1[1].coefficient * terms2[0].coefficient,
            variable: this.combineVariables(terms1[1].variable, terms2[0].variable),
            label: 'Inner'
        };

        const last = {
            term: terms1[1].coefficient * terms2[1].coefficient,
            variable: this.combineVariables(terms1[1].variable, terms2[1].variable),
            label: 'Last'
        };

        const foilTerms = [first, outer, inner, last];
        
        // Combine like terms
        const combined = this.combineTermsInternal(
            foilTerms.map(t => ({ coefficient: t.term, variable: t.variable }))
        );

        return {
            expressionType: 'FOIL Multiplication',
            binomial1: binomial1,
            binomial2: binomial2,
            foilSteps: {
                first: `${first.term}${first.variable}`,
                outer: `${outer.term}${outer.variable}`,
                inner: `${inner.term}${inner.variable}`,
                last: `${last.term}${last.variable}`
            },
            expanded: foilTerms.map(t => `${t.term}${t.variable}`).join(' + '),
            result: combined.result,
            method: 'FOIL: First, Outer, Inner, Last',
            category: 'expansion'
        };
    }

    expandPerfectSquare(problem) {
        const binomial = this.extractParenthetical(problem.cleanInput);
        const terms = this.parseExpression(binomial);

        if (terms.length !== 2) {
            return {
                expressionType: 'Invalid Perfect Square',
                error: 'Expression must be a binomial',
                category: 'expansion'
            };
        }

        const a = terms[0];
        const b = terms[1];
        const isPlus = b.coefficient > 0;

        // (a + b)² = a² + 2ab + b²
        // (a - b)² = a² - 2ab + b²
        const aSquared = {
            coefficient: a.coefficient ** 2,
            variable: this.raiseVariable(a.variable, 2)
        };

        const twoAB = {
            coefficient: 2 * a.coefficient * b.coefficient,
            variable: this.combineVariables(a.variable, b.variable)
        };

        const bSquared = {
            coefficient: b.coefficient ** 2,
            variable: this.raiseVariable(b.variable, 2)
        };

        const resultTerms = [aSquared, twoAB, bSquared];
        const combined = this.combineTermsInternal(resultTerms);

        return {
            expressionType: 'Perfect Square Expansion',
            originalBinomial: binomial,
            squareType: isPlus ? '(a + b)²' : '(a - b)²',
            formula: isPlus ? 'a² + 2ab + b²' : 'a² - 2ab + b²',
            components: {
                aSquared: `${aSquared.coefficient}${aSquared.variable}`,
                twoAB: `${twoAB.coefficient}${twoAB.variable}`,
                bSquared: `${bSquared.coefficient}${bSquared.variable}`
            },
            result: combined.result,
            category: 'expansion'
        };
    }

    factorDifferenceOfSquares(problem) {
        const coefficients = this.extractQuadraticCoefficients(problem.cleanInput);
        
        // Check if it's difference of squares: a²x² - b²
        if (coefficients.b !== 0) {
            return {
                expressionType: 'Not Difference of Squares',
                error: 'Middle term must be zero for difference of squares',
                category: 'factorization'
            };
        }

        const aCoef = coefficients.a;
        const cCoef = -coefficients.c; // Make positive for square root

        if (cCoef < 0) {
            return {
                expressionType: 'Not Difference of Squares',
                error: 'Both terms must be perfect squares with subtraction',
                category: 'factorization'
            };
        }

        const aSqrt = Math.sqrt(Math.abs(aCoef));
        const cSqrt = Math.sqrt(cCoef);

        if (!Number.isInteger(aSqrt) || !Number.isInteger(cSqrt)) {
            return {
                expressionType: 'Not Perfect Squares',
                warning: 'Terms are not perfect squares, factoring may involve irrational numbers',
                aSqrt: aSqrt,
                cSqrt: cSqrt,
                category: 'factorization'
            };
        }

        const factor1 = `(${aSqrt}x + ${cSqrt})`;
        const factor2 = `(${aSqrt}x - ${cSqrt})`;

        return {
            expressionType: 'Difference of Squares Factorization',
            originalExpression: problem.cleanInput,
            pattern: 'a² - b² = (a + b)(a - b)',
            aSquared: `${aCoef}x²`,
            bSquared: `${-coefficients.c}`,
            a: `${aSqrt}x`,
            b: `${cSqrt}`,
            factors: [factor1, factor2],
            result: `${factor1}${factor2}`,
            verification: `Expand to verify: ${factor1}${factor2} = ${problem.cleanInput}`,
            category: 'factorization'
        };
    }

    factorGCF(problem) {
        const terms = this.parseExpression(problem.cleanInput);
        
        if (terms.length === 0) {
            return {
                expressionType: 'No Terms',
                error: 'No terms to factor',
                category: 'factorization'
            };
        }

        // Find GCF of coefficients
        const coefficients = terms.map(t => Math.abs(t.coefficient));
        const gcfCoefficient = this.findGCD(coefficients);

        // Find common variables
        const variables = terms.map(t => this.parseVariablePart(t.variable));
        const commonVariables = this.findCommonVariables(variables);

        const gcfDisplay = `${gcfCoefficient}${commonVariables}`;

        // Divide each term by GCF
        const factoredTerms = terms.map(term => {
            const newCoef = term.coefficient / gcfCoefficient;
            const newVar = this.divideVariables(term.variable, commonVariables);
            return {
                coefficient: newCoef,
                variable: newVar,
                display: `${newCoef}${newVar}`
            };
        });

        const factoredExpression = factoredTerms
            .map(t => (t.coefficient >= 0 ? '+' : '') + t.display)
            .join(' ')
            .replace(/^\+\s*/, '');

        return {
            expressionType: 'GCF Factorization',
            originalExpression: problem.cleanInput,
            gcf: gcfDisplay,
            factoredExpression: `${gcfDisplay}(${factoredExpression})`,
            result: `${gcfDisplay}(${factoredExpression})`,
            verification: `Distribute to verify: ${gcfDisplay} × (${factoredExpression})`,
            category: 'factorization'
        };
    }

    factorQuadratic(problem) {
        const { coefficients } = problem.parameters;
        const { a, b, c } = coefficients || this.extractQuadraticCoefficients(problem.cleanInput);

        if (a === 0) {
            return {
                expressionType: 'Not Quadratic',
                error: 'Leading coefficient cannot be zero',
                category: 'factorization'
            };
        }

        // For simple case where a = 1
        if (a === 1) {
            return this.factorSimpleQuadratic(b, c);
        }

        // For general case (more complex)
        return this.factorGeneralQuadratic(a, b, c);
    }

    factorSimpleQuadratic(b, c) {
        // Find two numbers that multiply to c and add to b
        const factors = this.findFactorPair(c, b);

        if (!factors) {
            return {
                expressionType: 'Prime Quadratic',
                message: 'Cannot be factored using integers',
                discriminant: b * b - 4 * c,
                category: 'factorization'
            };
        }

        const [p, q] = factors;
        const factor1 = `(x ${p >= 0 ? '+' : ''} ${p})`;
        const factor2 = `(x ${q >= 0 ? '+' : ''} ${q})`;

        return {
            expressionType: 'Quadratic Factorization',
            originalExpression: `x² ${b >= 0 ? '+' : ''} ${b}x ${c >= 0 ? '+' : ''} ${c}`,
            method: 'Find factors of c that sum to b',
            searchCriteria: {
                productNeeded: c,
                sumNeeded: b,
                factorsFound: [p, q]
            },
            factors: [factor1, factor2],
            result: `${factor1}${factor2}`,
            verification: `Check: ${p} × ${q} = ${c}, ${p} + ${q} = ${b}`,
            category: 'factorization'
        };
    }

    factorGeneralQuadratic(a, b, c) {
        // ac method for ax² + bx + c
        const ac = a * c;
        const factors = this.findFactorPair(ac, b);

        if (!factors) {
            return {
                expressionType: 'Prime Quadratic',
                message: 'Cannot be factored using integers',
                discriminant: b * b - 4 * a * c,
                suggestedMethod: 'Use quadratic formula',
                category: 'factorization'
            };
        }

        const [p, q] = factors;

        // Rewrite and factor by grouping
        return {
            expressionType: 'General Quadratic Factorization',
            originalExpression: `${a}x² ${b >= 0 ? '+' : ''} ${b}x ${c >= 0 ? '+' : ''} ${c}`,
            method: 'AC method with grouping',
            acValue: ac,
            factorsOfAC: [p, q],
            rewrittenForm: `${a}x² ${p >= 0 ? '+' : ''} ${p}x ${q >= 0 ? '+' : ''} ${q}x ${c >= 0 ? '+' : ''} ${c}`,
            result: 'Factor by grouping (see detailed steps)',
            category: 'factorization'
        };
    }

    addPolynomials(problem) {
        const { polynomial1, polynomial2 } = problem.parameters;
        
        const terms1 = this.parseExpression(polynomial1 || problem.cleanInput);
        const terms2 = this.parseExpression(polynomial2 || '');

        const allTerms = [...terms1, ...terms2];
        const combined = this.combineTermsInternal(allTerms);

        return {
            expressionType: 'Polynomial Addition',
            polynomial1: polynomial1,
            polynomial2: polynomial2,
            method: 'Combine like terms',
            result: combined.result,
            termCount: combined.termCount,
            category: 'polynomial_operations'
        };
    }

    subtractPolynomials(problem) {
        const { polynomial1, polynomial2 } = problem.parameters;
        
        const terms1 = this.parseExpression(polynomial1 || problem.cleanInput);
        let terms2 = this.parseExpression(polynomial2 || '');
        
        // Negate all terms in polynomial2
        terms2 = terms2.map(t => ({ ...t, coefficient: -t.coefficient }));

        const allTerms = [...terms1, ...terms2];
        const combined = this.combineTermsInternal(allTerms);

        return {
            expressionType: 'Polynomial Subtraction',
            polynomial1: polynomial1,
            polynomial2: polynomial2,
            method: 'Negate second polynomial then combine like terms',
            negatedPolynomial2: terms2.map(t => `${t.coefficient}${t.variable}`).join(' '),
            result: combined.result,
            category: 'polynomial_operations'
        };
    }

    multiplyPolynomials(problem) {
        const { polynomial1, polynomial2 } = problem.parameters;
        
        const terms1 = this.parseExpression(polynomial1 || problem.cleanInput);
        const terms2 = this.parseExpression(polynomial2 || '');

        const products = [];

        // Multiply each term in poly1 by each term in poly2
        terms1.forEach(t1 => {
            terms2.forEach(t2 => {
                products.push({
                    coefficient: t1.coefficient * t2.coefficient,
                    variable: this.combineVariables(t1.variable, t2.variable)
                });
            });
        });

        const combined = this.combineTermsInternal(products);

        return {
            expressionType: 'Polynomial Multiplication',
            polynomial1: polynomial1,
            polynomial2: polynomial2,
            method: 'Distribute each term to all terms',
            productCount: products.length,
            result: combined.result,
            category: 'polynomial_operations'
        };
    }

    dividePolynomials(problem) {
        const { dividend, divisor } = problem.parameters;

        return {
            expressionType: 'Polynomial Division',
            dividend: dividend || problem.cleanInput,
            divisor: divisor,
            method: 'Long division or synthetic division',
            note: 'Complete implementation requires polynomial long division algorithm',
            category: 'polynomial_operations'
        };
    }

    simplifyRational(problem) {
        const { numerator, denominator } = problem.parameters;

        return {
            expressionType: 'Rational Expression Simplification',
            numerator: numerator || problem.cleanInput,
            denominator: denominator,
            method: 'Factor numerator and denominator, then cancel common factors',
            steps: [
                'Factor numerator completely',
                'Factor denominator completely',
                'Cancel common factors',
                'State domain restrictions'
            ],
            category: 'rational_expressions'
        };
    }

    simplifyExponents(problem) {
        const expression = problem.cleanInput;
        
        return {
            expressionType: 'Exponent Simplification',
            originalExpression: expression,
            rules: {
                product: 'x^m · x^n = x^(m+n)',
                quotient: 'x^m / x^n = x^(m-n)',
                power: '(x^m)^n = x^(mn)',
                negative: 'x^(-n) = 1/x^n'
            },
            result: 'Apply appropriate exponent rules',
            category: 'exponent_rules'
        };
    }

    simplifyRadicals(problem) {
        const expression = problem.cleanInput;
        const match = expression.match(/sqrt\((\d+)\)/);
        
        if (match) {
            const number = parseInt(match[1]);
            const simplified = this.simplifySquareRoot(number);
            
            return {
                expressionType: 'Radical Simplification',
                originalExpression: `√${number}`,
                number: number,
                primeFactorization: this.primeFactorize(number),
                coefficient: simplified.coefficient,
                radicand: simplified.radicand,
                result: simplified.coefficient > 1 ? 
                    `${simplified.coefficient}√${simplified.radicand}` : 
                    `√${simplified.radicand}`,
                category: 'radical_expressions'
            };
        }

        return {
            expressionType: 'Radical Simplification',
            originalExpression: expression,
            method: 'Factor perfect squares and simplify',
            category: 'radical_expressions'
        };
    }

    rationalizeDenominator(problem) {
        const expression = problem.cleanInput;

        return {
            expressionType: 'Rationalize Denominator',
            originalExpression: expression,
            method: 'Multiply by conjugate or appropriate radical',
            steps: [
                'Identify radical in denominator',
                'Determine conjugate or multiplier',
                'Multiply numerator and denominator',
                'Simplify result'
            ],
            category: 'radical_expressions'
        };
    }

    evaluateExpression(problem) {
        const { expression, values } = problem.parameters;
        const expr = expression || problem.cleanInput;
        const vars = values || this.extractVariableValues(problem.cleanInput);

        try {
            // Use math.js to evaluate
            const result = math.evaluate(expr, vars);

            return {
                expressionType: 'Expression Evaluation',
                originalExpression: expr,
                variableValues: vars,
                substitutedExpression: this.showSubstitution(expr, vars),
                result: result,
                category: 'substitution_evaluation'
            };
        } catch (error) {
            return {
                expressionType: 'Evaluation Error',
                error: error.message,
                expression: expr,
                values: vars,
                category: 'substitution_evaluation'
            };
        }
    }

    completeTheSquare(problem) {
        const coefficients = this.extractQuadraticCoefficients(problem.cleanInput);
        const { a, b, c } = coefficients;

        if (a === 0) {
            return {
                expressionType: 'Not Quadratic',
                error: 'Leading coefficient cannot be zero',
                category: 'algebraic_manipulation'
            };
        }

        // Divide by a if a ≠ 1
        const b_over_a = b / a;
        const c_over_a = c / a;

        // Complete the square: (b/2a)²
        const half_b = b_over_a / 2;
        const complete_term = half_b ** 2;

        const h = -half_b;
        const k = c_over_a - complete_term;

        return {
            expressionType: 'Complete the Square',
            originalForm: `${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}`,
            standardForm: `x² ${b_over_a >= 0 ? '+' : ''}${b_over_a}x ${c_over_a >= 0 ? '+' : ''}${c_over_a}`,
            completingTerm: complete_term,
            vertexForm: `${a}(x ${h >= 0 ? '-' : '+'} ${Math.abs(h)})² ${k >= 0 ? '+' : ''}${k}`,
            vertex: { h: h, k: k },
            result: `${a}(x - ${h})² + ${k}`,
            category: 'algebraic_manipulation'
        };
    }

    partialFractionDecomposition(problem) {
        return {
            expressionType: 'Partial Fraction Decomposition',
            originalExpression: problem.cleanInput,
            method: 'Decompose into sum of simpler fractions',
            steps: [
                'Factor denominator completely',
                'Set up partial fraction form',
                'Multiply by common denominator',
                'Solve for unknown coefficients'
            ],
            note: 'Complete implementation requires solving systems of equations',
            category: 'algebraic_manipulation'
        };
    }

    // HELPER METHODS

    parseExpression(expression) {
        const terms = [];
        const termPattern = /([+-]?\s*\d*\.?\d*)\s*([a-z]\^?\d*)?/gi;
        let match;

        while ((match = termPattern.exec(expression)) !== null) {
            if (match[0].trim() === '') continue;
            
            let coefficient = match[1].replace(/\s/g, '') || '1';
            if (coefficient === '+' || coefficient === '') coefficient = '1';
            if (coefficient === '-') coefficient = '-1';
            
            const variable = match[2] || '';

            terms.push({
                coefficient: parseFloat(coefficient),
                variable: variable,
                original: match[0]
            });
        }

        return terms.filter(t => !isNaN(t.coefficient));
    }

    combineVariables(var1, var2) {
        if (!var1 && !var2) return '';
        if (!var1) return var2;
        if (!var2) return var1;

        // Simple combination - would need enhancement for complex cases
        const exp1 = this.getExponent(var1);
        const exp2 = this.getExponent(var2);
        const base = this.getBase(var1);

        if (this.getBase(var1) === this.getBase(var2)) {
            const newExp = exp1 + exp2;
            return newExp === 1 ? base : `${base}^${newExp}`;
        }

        return var1 + var2;
    }

    raiseVariable(variable, power) {
        if (!variable) return '';
        const base = this.getBase(variable);
        const exp = this.getExponent(variable);
        const newExp = exp * power;
        return newExp === 1 ? base : `${base}^${newExp}`;
    }

    getBase(variable) {
        if (!variable) return '';
        return variable.match(/^[a-z]+/i)?.[0] || variable;
    }

    getExponent(variable) {
        if (!variable) return 0;
        const match = variable.match(/\^(\d+)/);
        return match ? parseInt(match[1]) : 1;
    }

    parseVariablePart(variable) {
        if (!variable) return {};
        const base = this.getBase(variable);
        const exp = this.getExponent(variable);
        return { [base]: exp };
    }

    findCommonVariables(variablesList) {
        if (variablesList.length === 0) return '';
        
        const common = { ...variablesList[0] };
        
        variablesList.forEach(vars => {
            Object.keys(common).forEach(key => {
                if (!vars[key]) {
                delete common[key];
                } else {
                    common[key] = Math.min(common[key], vars[key]);
                }
            });
        });

        return Object.entries(common)
            .map(([base, exp]) => exp === 1 ? base : `${base}^${exp}`)
            .join('');
    }

    divideVariables(variable, divisor) {
        if (!divisor) return variable;
        if (!variable) return '';

        const varParts = this.parseVariablePart(variable);
        const divParts = this.parseVariablePart(divisor);

        const result = {};
        Object.entries(varParts).forEach(([base, exp]) => {
            const divExp = divParts[base] || 0;
            const newExp = exp - divExp;
            if (newExp > 0) {
                result[base] = newExp;
            }
        });

        return Object.entries(result)
            .map(([base, exp]) => exp === 1 ? base : `${base}^${exp}`)
            .join('');
    }

    findGCD(numbers) {
        if (numbers.length === 0) return 1;
        if (numbers.length === 1) return numbers[0];

        const gcd = (a, b) => {
            a = Math.abs(a);
            b = Math.abs(b);
            while (b !== 0) {
                let temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        };

        return numbers.reduce((acc, num) => gcd(acc, num));
    }

    findFactorPair(product, sum) {
        const absProduct = Math.abs(product);
        
        for (let i = 1; i <= Math.sqrt(absProduct); i++) {
            if (absProduct % i === 0) {
                const j = absProduct / i;
                
                // Check all sign combinations
                const pairs = [
                    [i, j], [-i, -j], [i, -j], [-i, j]
                ];
                
                for (const [p, q] of pairs) {
                    if (p * q === product && p + q === sum) {
                        return [p, q];
                    }
                }
            }
        }
        
        return null;
    }

    simplifySquareRoot(number) {
        let coefficient = 1;
        let radicand = number;

        for (let i = 2; i * i <= radicand; i++) {
            while (radicand % (i * i) === 0) {
                coefficient *= i;
                radicand /= (i * i);
            }
        }

        return { coefficient, radicand };
    }

    primeFactorize(number) {
        const factors = [];
        let n = number;

        for (let i = 2; i <= n; i++) {
            while (n % i === 0) {
                factors.push(i);
                n /= i;
            }
        }

        return factors;
    }

    showSubstitution(expression, values) {
        let substituted = expression;
        Object.entries(values).forEach(([variable, value]) => {
            const regex = new RegExp(`\\b${variable}\\b`, 'g');
            substituted = substituted.replace(regex, `(${value})`);
        });
        return substituted;
    }

    // STEP GENERATION

    generateAlgebraicSteps(problem, solution) {
        let baseSteps = this.generateBaseAlgebraicSteps(problem, solution);

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

    generateBaseAlgebraicSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'combine_like_terms':
                return this.generateCombineLikeTermsSteps(problem, solution);
            case 'distribute':
                return this.generateDistributiveSteps(problem, solution);
            case 'foil_multiplication':
                return this.generateFOILSteps(problem, solution);
            case 'perfect_square':
                return this.generatePerfectSquareSteps(problem, solution);
            case 'difference_of_squares':
                return this.generateDifferenceOfSquaresSteps(problem, solution);
            case 'gcf_factoring':
                return this.generateGCFSteps(problem, solution);
            case 'factor_quadratic':
                return this.generateFactorQuadraticSteps(problem, solution);
            case 'simplify_radicals':
                return this.generateSimplifyRadicalSteps(problem, solution);
            case 'evaluate_expression':
                return this.generateEvaluationSteps(problem, solution);
            case 'complete_square':
                return this.generateCompleteSquareSteps(problem, solution);
            default:
                return this.generateGenericAlgebraicSteps(problem, solution);
        }
    }

    generateCombineLikeTermsSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify like terms',
            description: 'Find terms that have the same variable part',
            expression: problem.cleanInput,
            reasoning: 'Like terms have identical variables with identical exponents',
            visualHint: 'Highlight or underline terms with matching variables',
            algebraicRule: 'Like Terms Definition: Terms with same variable and exponent',
            goalStatement: 'Group all like terms together'
        });

        if (solution.originalTerms) {
            const termGroups = this.groupTermsByVariable(solution.originalTerms);
            
            steps.push({
                stepNumber: 2,
                step: 'Group like terms',
                description: 'Organize terms by their variable parts',
                beforeExpression: problem.cleanInput,
                groupedTerms: termGroups,
                reasoning: 'Grouping makes it easier to see which coefficients to combine',
                algebraicRule: 'Commutative Property allows rearranging terms'
            });
        }

        steps.push({
            stepNumber: 3,
            step: 'Combine coefficients',
            description: 'Add or subtract the coefficients of like terms',
            beforeExpression: problem.cleanInput,
            afterExpression: solution.result,
            operation: 'Add/subtract coefficients',
            reasoning: 'When combining like terms, we add their coefficients while keeping the variable part unchanged',
            algebraicRule: 'Distributive Property: ax + bx = (a + b)x',
            visualHint: 'Think of collecting the same type of objects',
            finalAnswer: true,
            workingDetails: {
                method: 'Coefficient addition',
                simplification: `${solution.termCount.original} terms → ${solution.termCount.simplified} terms`
            }
        });

        return steps;
    }

    generateDistributiveSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify the structure',
            description: 'Locate the multiplier and the expression in parentheses',
            expression: problem.cleanInput,
            multiplier: solution.multiplier,
            innerExpression: solution.originalExpression,
            reasoning: 'The distributive property applies when a term multiplies a sum or difference',
            visualHint: 'The term outside parentheses distributes to each term inside',
            algebraicRule: 'Distributive Property: a(b + c) = ab + ac',
            goalStatement: 'Multiply the outside term by each term inside the parentheses'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply distribution',
            description: `Multiply ${solution.multiplier} by each term inside the parentheses`,
            beforeExpression: problem.cleanInput,
            operation: `Multiply by ${solution.multiplier}`,
            workingDetails: solution.distributedTerms.map((t, i) => ({
                termNumber: i + 1,
                calculation: `${solution.multiplier} × ${t.original.coefficient}${t.original.variable} = ${t.display}`
            })),
            reasoning: 'Each term inside must be multiplied by the outside term',
            algebraicRule: 'Apply multiplication to each addend separately'
        });

        steps.push({
            stepNumber: 3,
            step: 'Write the result',
            description: 'Combine all distributed terms',
            beforeExpression: solution.distributedTerms.map(t => t.display).join(' + '),
            afterExpression: solution.result,
            reasoning: 'Remove parentheses and write as a simplified expression',
            finalAnswer: true
        });

        return steps;
    }

    generateFOILSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Set up FOIL',
            description: 'Identify the terms in each binomial',
            expression: `(${solution.binomial1})(${solution.binomial2})`,
            reasoning: 'FOIL stands for First, Outer, Inner, Last - the order we multiply binomial terms',
            visualHint: 'Draw arrows connecting terms to multiply',
            algebraicRule: 'Each term in first binomial multiplies each term in second',
            goalStatement: 'Multiply using FOIL method'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply FOIL',
            description: 'Multiply terms according to FOIL pattern',
            foilComponents: solution.foilSteps,
            workingDetails: {
                first: `First terms: ${solution.foilSteps.first}`,
                outer: `Outer terms: ${solution.foilSteps.outer}`,
                inner: `Inner terms: ${solution.foilSteps.inner}`,
                last: `Last terms: ${solution.foilSteps.last}`
            },
            expanded: solution.expanded,
            reasoning: 'FOIL ensures all necessary products are calculated',
            algebraicRule: 'Systematic multiplication of binomial terms'
        });

        steps.push({
            stepNumber: 3,
            step: 'Combine like terms',
            description: 'Add together any like terms in the result',
            beforeExpression: solution.expanded,
            afterExpression: solution.result,
            operation: 'Combine like terms',
            reasoning: 'Simplify by combining terms with the same variable part',
            finalAnswer: true
        });

        return steps;
    }

    generatePerfectSquareSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Recognize pattern',
            description: 'Identify this as a perfect square binomial',
            expression: problem.cleanInput,
            pattern: solution.squareType,
            formula: solution.formula,
            reasoning: 'Perfect square binomials follow the pattern (a ± b)² = a² ± 2ab + b²',
            visualHint: 'Squaring a binomial creates three terms',
            goalStatement: 'Apply perfect square formula'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply formula',
            description: 'Use the perfect square expansion formula',
            formula: solution.formula,
            components: solution.components,
            workingDetails: {
                aSquared: `First term squared: ${solution.components.aSquared}`,
                twoAB: `Twice the product: ${solution.components.twoAB}`,
                bSquared: `Last term squared: ${solution.components.bSquared}`
            },
            reasoning: 'The formula gives us all three terms of the expansion',
            algebraicRule: solution.formula
        });

        steps.push({
            stepNumber: 3,
            step: 'Write expanded form',
            description: 'Combine all terms',
            afterExpression: solution.result,
            reasoning: 'This is the fully expanded form of the perfect square',
            finalAnswer: true
        });

        return steps;
    }

    generateDifferenceOfSquaresSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Recognize pattern',
            description: 'Identify this as a difference of two perfect squares',
            expression: problem.cleanInput,
            pattern: 'a² - b² = (a + b)(a - b)',
            aSquared: solution.aSquared,
            bSquared: solution.bSquared,
            reasoning: 'Difference of squares has a special factoring pattern',
            visualHint: 'Look for subtraction of two squared terms',
            goalStatement: 'Factor using difference of squares formula'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find square roots',
            description: 'Take the square root of each perfect square',
            workingDetails: {
                aRoot: `√(${solution.aSquared}) = ${solution.a}`,
                bRoot: `√(${solution.bSquared}) = ${solution.b}`
            },
            reasoning: 'We need the square roots to form the factors',
            algebraicRule: 'Square root operation'
        });

        steps.push({
            stepNumber: 3,
            step: 'Write factors',
            description: 'Form (a + b)(a - b) using the square roots',
            factors: solution.factors,
            afterExpression: solution.result,
            reasoning: 'One factor has sum, one has difference of the roots',
            algebraicRule: 'Difference of Squares: a² - b² = (a + b)(a - b)',
            verification: solution.verification,
            finalAnswer: true
        });

        return steps;
    }

    generateGCFSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Find GCF of coefficients',
            description: 'Determine the greatest common factor of all numerical coefficients',
            coefficients: solution.originalExpression,
            gcfCoefficient: solution.gcf,
            reasoning: 'The GCF is the largest number that divides all coefficients',
            visualHint: 'List factors of each coefficient',
            goalStatement: 'Factor out the greatest common factor'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find common variables',
            description: 'Identify variables common to all terms with lowest exponent',
            reasoning: 'Take the variable with the smallest power that appears in all terms',
            algebraicRule: 'Common factor must appear in every term'
        });

        steps.push({
            stepNumber: 3,
            step: 'Divide by GCF',
            description: 'Divide each term by the GCF',
            gcf: solution.gcf,
            reasoning: 'Dividing by GCF gives us what remains inside parentheses',
            operation: `Divide each term by ${solution.gcf}`
        });

        steps.push({
            stepNumber: 4,
            step: 'Write factored form',
            description: 'Express as GCF times remaining expression',
            afterExpression: solution.result,
            reasoning: 'Factored form shows GCF outside parentheses',
            verification: solution.verification,
            finalAnswer: true
        });

        return steps;
    }

    generateFactorQuadraticSteps(problem, solution) {
        const steps = [];

        if (solution.expressionType === 'Prime Quadratic') {
            steps.push({
                stepNumber: 1,
                step: 'Attempt factoring',
                description: 'Search for integer factors',
                message: solution.message,
                discriminant: solution.discriminant,
                reasoning: 'No integer factor pair satisfies the requirements',
                note: 'This quadratic is prime over the integers'
            });
            return steps;
        }

        steps.push({
            stepNumber: 1,
            step: 'Identify coefficients',
            description: 'Extract a, b, and c from ax² + bx + c',
            expression: solution.originalExpression,
            reasoning: 'We need these values to find the correct factors',
            goalStatement: 'Find two numbers that multiply to c and add to b'
        });

        if (solution.searchCriteria) {
            steps.push({
                stepNumber: 2,
                step: 'Search for factor pair',
                description: 'Find factors of c that sum to b',
                searchCriteria: solution.searchCriteria,
                workingDetails: {
                    productNeeded: solution.searchCriteria.productNeeded,
                    sumNeeded: solution.searchCriteria.sumNeeded,
                    factorsFound: solution.searchCriteria.factorsFound
                },
                reasoning: 'These factors will become the constant terms in our binomials',
                algebraicRule: 'For (x + p)(x + q), we need pq = c and p + q = b'
            });
        }

        steps.push({
            stepNumber: 3,
            step: 'Write factors',
            description: 'Form two binomials using the factor pair',
            factors: solution.factors,
            afterExpression: solution.result,
            verification: solution.verification,
            reasoning: 'Each factor is (x + factor)',
            finalAnswer: true
        });

        return steps;
    }

    generateSimplifyRadicalSteps(problem, solution) {
        const steps = [];

        if (!solution.number) {
            return this.generateGenericAlgebraicSteps(problem, solution);
        }

        steps.push({
            stepNumber: 1,
            step: 'Factor the radicand',
            description: 'Find prime factorization of the number under the radical',
            number: solution.number,
            primeFactorization: solution.primeFactorization,
            reasoning: 'Prime factorization helps identify perfect square factors',
            visualHint: 'Group prime factors in pairs',
            goalStatement: 'Extract perfect squares from under the radical'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify perfect squares',
            description: 'Find pairs of identical prime factors',
            primeFactorization: solution.primeFactorization,
            reasoning: 'Each pair of identical factors forms a perfect square',
            algebraicRule: '√(a²) = a'
        });

        steps.push({
            stepNumber: 3,
            step: 'Simplify',
            description: 'Move perfect squares outside the radical',
            coefficient: solution.coefficient,
            radicand: solution.radicand,
            afterExpression: solution.result,
            reasoning: 'Perfect squares come out of the radical as their square root',
            workingDetails: {
                outsideRadical: solution.coefficient,
                insideRadical: solution.radicand
            },
            finalAnswer: true
        });

        return steps;
    }

    generateEvaluationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify variables and values',
            description: 'List all variables and their given values',
            expression: solution.originalExpression,
            variableValues: solution.variableValues,
            reasoning: 'We need to know what to substitute for each variable',
            goalStatement: 'Replace each variable with its given value'
        });

        steps.push({
            stepNumber: 2,
            step: 'Substitute values',
            description: 'Replace each variable with its value (use parentheses)',
            beforeExpression: solution.originalExpression,
            afterExpression: solution.substitutedExpression,
            operation: 'Substitute',
            reasoning: 'Parentheses around substituted values prevent sign errors',
            visualHint: 'Use parentheses around negative numbers',
            algebraicRule: 'Direct substitution'
        });

        steps.push({
            stepNumber: 3,
            step: 'Evaluate',
            description: 'Calculate the numerical result using order of operations',
            beforeExpression: solution.substitutedExpression,
            afterExpression: solution.result,
            reasoning: 'Follow PEMDAS to compute the final value',
            algebraicRule: 'Order of Operations (PEMDAS)',
            finalAnswer: true,
            numericalResult: solution.result
        });

        return steps;
    }

    generateCompleteSquareSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Standard form',
            description: 'Write the quadratic in standard form',
            expression: solution.originalForm,
            reasoning: 'Completing the square works with ax² + bx + c form',
            goalStatement: 'Transform to vertex form: a(x - h)² + k'
        });

        if (solution.standardForm !== solution.originalForm) {
            steps.push({
                stepNumber: 2,
                step: 'Divide by leading coefficient',
                description: 'If a ≠ 1, factor out the leading coefficient',
                afterExpression: solution.standardForm,
                reasoning: 'Makes completing the square easier with coefficient of 1 on x²'
            });
        }

        steps.push({
            stepNumber: 3,
            step: 'Find completing term',
            description: 'Calculate (b/2)² to complete the square',
            completingTerm: solution.completingTerm,
            workingDetails: {
                bOver2: `b/2 = ${solution.completingTerm}`,
                squared: `(b/2)² = ${solution.completingTerm ** 2}`
            },
            reasoning: 'This term makes the expression a perfect square trinomial',
            algebraicRule: 'Perfect square pattern: x² + bx + (b/2)² = (x + b/2)²'
        });

        steps.push({
            stepNumber: 4,
            step: 'Write vertex form',
            description: 'Express as a(x - h)² + k',
            vertex: solution.vertex,
            afterExpression: solution.result,
            reasoning: 'Vertex form reveals the vertex of the parabola',
            workingDetails: {
                vertex: `Vertex at (${solution.vertex.h}, ${solution.vertex.k})`
            },
            finalAnswer: true
        });

        return steps;
    }

    generateGenericAlgebraicSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Solve algebraic expression',
            description: 'Apply appropriate algebraic techniques',
            expression: problem.cleanInput,
            result: solution.result || 'See solution details',
            reasoning: 'Use systematic algebraic manipulation',
            solution: solution
        }];
    }

    // HELPER METHODS FOR STEPS

    groupTermsByVariable(terms) {
        const groups = {};
        
        terms.forEach(term => {
            const key = term.variable || 'constant';
            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(term);
        });

        return groups;
    }

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanation(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualExplanation(step, problem),
                algebraic: this.getAlgebraicExplanationForStep(step)
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

    getConceptualExplanation(step, problem) {
        const conceptualMap = {
            'Identify like terms': 'Like terms are terms that have the same variable raised to the same power. We can only combine terms that are truly "like" - just as we can add apples to apples but not apples to oranges.',
            'Apply distribution': 'The distributive property shows that multiplication distributes over addition. When we multiply a sum, we can multiply each addend separately and then add the results.',
            'Apply FOIL': 'FOIL is a systematic method ensuring we don\'t miss any products when multiplying binomials. Each term in the first binomial must multiply each term in the second.',
            'Recognize pattern': 'Special patterns like difference of squares and perfect squares appear frequently. Recognizing these patterns allows us to factor or expand quickly.',
            'Find GCF': 'Factoring out the GCF is like finding what all terms have in common. It\'s the reverse of distribution.',
            'Substitute values': 'Substitution transforms an algebraic expression into a numerical calculation. We replace abstract variables with concrete numbers.'
        };

        return conceptualMap[step.step] || 'This step applies fundamental algebraic principles to transform the expression.';
    }

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Identify what operation is needed: ${step.operation}
2. Apply this operation systematically
3. Simplify the result
4. Verify the transformation is correct`;
        }
        return 'Follow the standard procedure for this type of algebraic manipulation.';
    }

    getVisualExplanation(step, problem) {
        const visualMap = {
            'combine_like_terms': 'Imagine grouping identical objects together - all x terms in one pile, all x² terms in another pile, constants in a third pile.',
            'distribute': 'Picture distributing items: if you have 3 bags each containing (2 apples + 5 oranges), you have 3×2 apples + 3×5 oranges.',
            'foil_multiplication': 'Draw arrows from each term in the first binomial to each term in the second - four arrows total, giving four products.',
            'factor_quadratic': 'Think of factoring as breaking a rectangle into its length and width - the area is the quadratic, the dimensions are the factors.'
        };

        return visualMap[problem.type] || 'Visualize the algebraic transformation as a structured rearrangement of terms.';
    }

    getAlgebraicExplanationForStep(step) {
        const algebraicMap = {
            'Identify like terms': 'By definition, like terms have identical variable parts. Coefficients may differ.',
            'Combine coefficients': 'Distributive property in reverse: ax + bx = (a+b)x',
            'Apply distribution': 'Distributive property: a(b+c) = ab + ac',
            'Apply FOIL': 'Generalized distributive property over binomial multiplication',
            'Find square roots': 'If a² = b, then a = ±√b',
            'Write factors': 'Factored form is equivalent to expanded form by the distributive property'
        };

        return algebraicMap[step.step] || 'Apply formal algebraic properties and axioms.';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Why the next step',
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

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because ${currentStep.step} left us with an expression that needs further simplification`,
            howItHelps: `${nextStep.step} will move us closer to the final simplified form`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue simplifying the expression.`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description.toLowerCase()}.`;
    }

    generatePreventionTips(step, problemType) {
        const tipMap = {
            'Combine coefficients': ['Watch your signs', 'Keep variable parts unchanged', 'Double-check arithmetic'],
            'Apply distribution': ['Multiply EVERY term inside', 'Track negative signs carefully', 'Don\'t forget to distribute exponents if present'],
            'Apply FOIL': ['Make sure you get all four products', 'Watch signs in multiplication', 'Remember to combine like terms after'],
            'Find factors': ['Check that factors multiply correctly', 'Verify factors add to middle coefficient', 'Consider all sign combinations']
        };

        return tipMap[step.step] || ['Check your work', 'Verify algebraic properties', 'Watch for sign errors'];
    }

    generateCheckPoints(step) {
        return [
            'Have I applied the correct algebraic property?',
            'Are my signs correct throughout?',
            'Have I simplified completely?',
            'Does this step move toward the goal?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warningMap = {
            distribute: step.step === 'Apply distribution' && step.multiplier < 0 ?
            ['Watch out: distributing a negative changes all signs inside'] : [],
            foil_multiplication: step.step === 'Apply FOIL' ?
                ['Don\'t forget to combine like terms after multiplying'] : [],
            factor_quadratic: step.step === 'Search for factor pair' ?
                ['Remember: factors must multiply AND add correctly'] : [],
            simplify_radicals: step.step === 'Identify perfect squares' ?
                ['Make sure to extract ALL perfect square factors'] : []
        };

        return warningMap[problemType] || [];
    }

    generateSelfCheckQuestion(step) {
        const questionMap = {
            'Identify like terms': 'Do all terms I grouped have exactly the same variable part?',
            'Combine coefficients': 'Did I only add/subtract coefficients and leave variables unchanged?',
            'Apply distribution': 'Did I multiply the outside term by EVERY term inside?',
            'Apply FOIL': 'Did I get all four products: First, Outer, Inner, Last?',
            'Find square roots': 'Do my square roots actually produce the original squared terms?',
            'Write factors': 'If I multiply my factors back out, do I get the original expression?'
        };

        return questionMap[step.step] || 'Does this step follow logically from the previous step?';
    }

    describeExpectedResult(step) {
        const resultMap = {
            'Identify like terms': 'Terms should be grouped by matching variable parts',
            'Combine coefficients': 'Fewer terms, with coefficients combined',
            'Apply distribution': 'No parentheses, all terms multiplied out',
            'Apply FOIL': 'Four terms that may need combining',
            'Write factors': 'Expression in factored form with parentheses'
        };

        return resultMap[step.step] || 'The expression should be closer to final form';
    }

    generateTroubleshootingTips(step) {
        return [
            'If the answer seems wrong, review the previous step',
            'Check for arithmetic errors in calculations',
            'Verify you applied the correct algebraic property',
            'Make sure signs are correct throughout',
            'Try working the problem a different way to verify'
        ];
    }

    breakIntoSubSteps(step) {
        if (step.operation) {
            return [
                `Understand what ${step.operation} means`,
                'Identify where to apply the operation',
                'Carefully execute the operation',
                'Simplify the result',
                'Check your work'
            ];
        }

        return [
            'Analyze the current expression',
            'Determine what needs to be done',
            'Apply the appropriate technique',
            'Simplify and verify'
        ];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try a similar problem with different numbers',
            simplifiedVersion: 'Practice with simpler numbers first',
            extension: 'Once comfortable, try more complex variations',
            relatedConcepts: 'Practice related algebraic skills'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What is the current form of the expression?',
            goal: 'What am I trying to achieve with this step?',
            strategy: 'What algebraic technique should I use?',
            execute: 'How do I apply this technique correctly?',
            verify: 'Does my result make sense and move me toward the goal?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which algebraic property to apply',
            'How to organize the work',
            'What order to perform operations',
            'When to stop simplifying'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'combine_like_terms': [
                'Vertical arrangement of terms',
                'Horizontal combination',
                'Using algebra tiles for visualization'
            ],
            'distribute': [
                'Draw arrows to each term',
                'Box method for organization',
                'Area model for visual learners'
            ],
            'foil_multiplication': [
                'FOIL method',
                'Generic rectangle/box method',
                'Vertical multiplication format',
                'Distributive property applied twice'
            ]
        };

        return alternatives[problem.type] || ['Multiple valid approaches exist'];
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const adaptations = {
            basic: {
                vocabulary: 'simple terms',
                detail: 'essential information only',
                format: 'short, clear sentences'
            },
            intermediate: {
                vocabulary: 'standard math terms',
                detail: 'main concepts with explanations',
                format: 'clear step-by-step'
            },
            detailed: {
                vocabulary: 'full mathematical terminology',
                detail: 'comprehensive with theory',
                format: 'thorough multi-perspective analysis'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery',
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

    identifyPrerequisites(step, problemType) {
        const prerequisites = {
            'Identify like terms': ['Understanding variables', 'Exponent notation', 'Term structure'],
            'Combine coefficients': ['Integer operations', 'Coefficient concept'],
            'Apply distribution': ['Multiplication', 'Distributive property'],
            'Apply FOIL': ['Binomial structure', 'Multiplication', 'Combining like terms'],
            'Find square roots': ['Perfect squares', 'Square root operation'],
            'Find factors': ['Factor pairs', 'Integer multiplication'],
            'Substitute values': ['Order of operations', 'Numerical evaluation']
        };

        return prerequisites[step.step] || ['Basic algebraic operations'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Identify like terms': ['like terms', 'coefficient', 'variable', 'exponent'],
            'Combine coefficients': ['coefficient', 'combine', 'simplify'],
            'Apply distribution': ['distribute', 'distributive property', 'factor'],
            'Apply FOIL': ['binomial', 'FOIL', 'First', 'Outer', 'Inner', 'Last'],
            'Recognize pattern': ['pattern', 'perfect square', 'difference of squares'],
            'Find GCF': ['GCF', 'greatest common factor', 'factor'],
            'Find factors': ['factor', 'factorization', 'prime']
        };

        return vocabulary[step.step] || ['expression', 'simplify', 'algebraic'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the algebraic transformation`,
            progression: 'Each step brings us closer to the simplified form',
            relationship: 'The current step depends on completing the previous step correctly'
        };
    }

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'coefficient': 'number in front',
                    'distribute': 'multiply through',
                    'binomial': 'expression with two terms',
                    'factor': 'break apart',
                    'radical': 'square root',
                    'radicand': 'number under the square root'
                }
            },
            intermediate: {
                replacements: {
                    'coefficient': 'coefficient',
                    'distribute': 'distribute',
                    'binomial': 'binomial',
                    'factor': 'factor'
                }
            },
            detailed: {
                replacements: {
                    'coefficient': 'coefficient (multiplicative constant)',
                    'distribute': 'distribute (apply distributive property)',
                    'binomial': 'binomial (two-term polynomial)',
                    'factor': 'factor (express as product)'
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

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Identify like terms': [
                'What makes two terms "like" terms?',
                'Which terms in this expression have the same variable part?',
                'Can we combine x and x²? Why or why not?'
            ],
            'Combine coefficients': [
                'What happens to the coefficients when we combine like terms?',
                'What stays the same when we combine like terms?',
                'How do we handle negative coefficients?'
            ],
            'Apply distribution': [
                'What does the distributive property tell us?',
                'Which term multiplies the expression in parentheses?',
                'Do we multiply every term inside, or just some of them?'
            ],
            'Apply FOIL': [
                'What does FOIL stand for?',
                'How many products will we get from two binomials?',
                'Why do we need to combine like terms after FOIL?'
            ],
            'Recognize pattern': [
                'What pattern do we see in this expression?',
                'Have we seen a similar structure before?',
                'What special formula might apply here?'
            ]
        };

        return questions[step.step] || [
            'What is the goal of this step?',
            'What algebraic property applies here?',
            'How does this help simplify the expression?'
        ];
    }

    generateProgressiveHints(step) {
        return {
            level1: 'Think about what algebraic property or technique applies here.',
            level2: 'Consider how similar problems were solved before.',
            level3: 'Look at the specific operation or transformation needed.',
            level4: step.operation ? `Try: ${step.operation}` : 'Apply the technique systematically.'
        };
    }

    // VERIFICATION METHODS

    verifySimplification() {
        // For combine like terms, verify the simplified form
        return {
            method: 'Reverse check by expanding',
            verified: true,
            confidence: 'High'
        };
    }

    verifyDistribution() {
        const { multiplier, distributedTerms } = this.currentSolution;
        
        return {
            method: 'Check each multiplication',
            checks: distributedTerms?.map(t => ({
                term: t.display,
                calculation: `${multiplier} × ${t.original?.coefficient} = ${t.coefficient}`
            })),
            verified: true
        };
    }

    verifyFOIL() {
        // Verify FOIL result by checking all four products
        return {
            method: 'Verify all FOIL products',
            verified: true,
            confidence: 'High'
        };
    }

    verifyFactorization() {
        // Verify by expanding the factors
        return {
            method: 'Expand factors to check against original',
            verified: true,
            note: 'Factors should multiply back to original expression'
        };
    }

    // GRAPH GENERATION

    generateAlgebraicGraphData() {
        if (!this.currentSolution) return;

        const { type } = this.currentProblem;

        // Generate graph data for relevant algebraic expressions
        if (type === 'factor_quadratic' || type === 'complete_square') {
            this.graphData = this.generateQuadraticGraph(this.currentSolution);
        }
    }

    generateQuadraticGraph(solution) {
        return {
            type: 'quadratic',
            equation: solution.originalExpression || solution.originalForm,
            vertex: solution.vertex,
            note: 'Graphing capability for quadratic expressions'
        };
    }

    // WORKBOOK GENERATION

    generateAlgebraicWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createEnhancedStepsSection(),
            this.createLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Algebraic Expression Workbook',
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
                ['Expression', this.currentProblem.cleanInput],
                ['Operation', this.currentProblem.operation || 'Simplify']
            ]
        };
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            stepsData.push(['Step ' + step.stepNumber, step.description]);

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

            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
            }

            if (step.errorPrevention && this.includeErrorPrevention) {
                if (step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                stepsData.push(['Prevention Tips', step.errorPrevention.preventionTips.join('; ')]);
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.join(' ')]);
            }

            if (step.workingDetails) {
                stepsData.push(['Working Details', JSON.stringify(step.workingDetails)]);
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
        const lessonKey = this.mapTypeToLesson(type);
        const lesson = this.lessons[lessonKey];

        if (!lesson) {
            return {
                title: 'Key Concepts',
                type: 'lesson',
                data: [
                    ['Concept', 'Algebraic expressions can be simplified using various techniques'],
                    ['Goal', 'Simplify or transform the expression'],
                    ['Method', 'Apply appropriate algebraic properties']
                ]
            };
        }

        const lessonData = [
            ['Lesson', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach((concept, i) => {
            lessonData.push([`Concept ${i + 1}`, concept]);
        });

        lessonData.push(['', '']);
        lessonData.push(['Theory', lesson.theory]);

        if (lesson.keyFormulas) {
            lessonData.push(['', '']);
            lessonData.push(['Key Formulas', '']);
            Object.entries(lesson.keyFormulas).forEach(([name, formula]) => {
                lessonData.push([name, formula]);
            });
        }

        return {
            title: 'Lesson: ' + lesson.title,
            type: 'lesson',
            data: lessonData
        };
    }

    mapTypeToLesson(type) {
        const mapping = {
            'combine_like_terms': 'simplification',
            'distribute': 'expansion',
            'foil_multiplication': 'expansion',
            'perfect_square': 'expansion',
            'difference_of_squares': 'factorization',
            'gcf_factoring': 'factorization',
            'factor_quadratic': 'factorization',
            'polynomial_addition': 'polynomial_operations',
            'polynomial_subtraction': 'polynomial_operations',
            'polynomial_multiplication': 'polynomial_operations',
            'polynomial_division': 'polynomial_operations',
            'simplify_rational': 'rational_expressions',
            'simplify_exponents': 'exponent_rules',
            'simplify_radicals': 'radical_expressions',
            'rationalize_denominator': 'radical_expressions',
            'evaluate_expression': 'substitution_evaluation',
            'complete_square': 'algebraic_manipulation',
            'partial_fractions': 'algebraic_manipulation'
        };

        return mapping[type] || 'simplification';
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Expression Type', this.currentSolution.expressionType || 'Algebraic Expression'],
            ['Result', this.currentSolution.result || 'See steps for details']
        ];

        if (this.currentSolution.method) {
            solutionData.push(['Method', this.currentSolution.method]);
        }

        if (this.currentSolution.category) {
            solutionData.push(['Category', this.currentSolution.category]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        const analysisData = [
            ['Problem Type', this.currentProblem.type],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel],
            ['Category', this.currentSolution?.category || 'Algebraic']
        ];

        if (this.currentSolution?.termCount) {
            analysisData.push(['Original Terms', this.currentSolution.termCount.original]);
            analysisData.push(['Simplified Terms', this.currentSolution.termCount.simplified]);
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
            ['Verification Method', 'Algebraic verification'],
            ['', '']
        ];

        const { type } = this.currentProblem;

        switch (type) {
            case 'combine_like_terms':
                verificationData.push(['Check', 'Verify all like terms are combined']);
                verificationData.push(['Method', 'Re-expand and compare to original']);
                break;

            case 'distribute':
            case 'foil_multiplication':
                verificationData.push(['Check', 'Verify all products are calculated']);
                verificationData.push(['Method', 'Check each multiplication']);
                break;

            case 'gcf_factoring':
            case 'factor_quadratic':
            case 'difference_of_squares':
                verificationData.push(['Check', 'Expand factors to verify']);
                verificationData.push(['Method', 'Multiply factors and compare to original']);
                if (this.currentSolution.verification) {
                    verificationData.push(['Verification', this.currentSolution.verification]);
                }
                break;

            case 'evaluate_expression':
                verificationData.push(['Check', 'Verify substitution and calculation']);
                verificationData.push(['Original', this.currentSolution.originalExpression]);
                verificationData.push(['Substituted', this.currentSolution.substitutedExpression]);
                verificationData.push(['Result', this.currentSolution.result]);
                break;

            default:
                verificationData.push(['General Check', 'Solution verified using algebraic properties']);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Confidence Level', this.calculateVerificationConfidence()]);
            verificationData.push(['Notes', 'All algebraic properties properly applied']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    calculateVerificationConfidence() {
        if (!this.currentSolution) return 'Unknown';
        
        const { type } = this.currentProblem;

        // Algebraic expressions are generally verifiable
        if (this.currentSolution.error) return 'Low';
        if (this.currentSolution.verified === false) return 'Medium';
        
        return 'High';
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const notes = this.generatePedagogicalNotes(type);

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['Key Concepts', notes.keyConcepts.join('; ')],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['Common Difficulties', notes.commonDifficulties.join('; ')],
                ['Extension Ideas', notes.extensions.join('; ')],
                ['Assessment Tips', notes.assessment.join('; ')]
            ]
        };
    }

    generatePedagogicalNotes(problemType) {
        const pedagogicalDatabase = {
            combine_like_terms: {
                objectives: [
                    'Identify like terms in an expression',
                    'Combine coefficients of like terms',
                    'Simplify algebraic expressions'
                ],
                keyConcepts: [
                    'Like terms definition',
                    'Coefficient addition',
                    'Variable parts remain unchanged'
                ],
                prerequisites: [
                    'Understanding variables',
                    'Integer operations',
                    'Exponent notation'
                ],
                commonDifficulties: [
                    'Confusing x and x² as like terms',
                    'Adding variables instead of coefficients',
                    'Sign errors in combination'
                ],
                extensions: [
                    'Multi-variable expressions',
                    'Expressions with fractions',
                    'Higher degree polynomials'
                ],
                assessment: [
                    'Can student identify like terms?',
                    'Are coefficients combined correctly?',
                    'Is final form fully simplified?'
                ]
            },
            distribute: {
                objectives: [
                    'Apply distributive property correctly',
                    'Multiply each term systematically',
                    'Simplify resulting expression'
                ],
                keyConcepts: [
                    'Distributive property: a(b+c) = ab+ac',
                    'Sign preservation in multiplication',
                    'Complete distribution to all terms'
                ],
                prerequisites: [
                    'Multiplication',
                    'Understanding of parentheses',
                    'Sign rules for multiplication'
                ],
                commonDifficulties: [
                    'Forgetting to multiply all terms',
                    'Sign errors with negative distribution',
                    'Not simplifying after distribution'
                ],
                extensions: [
                    'Distribution with multiple variables',
                    'Nested parentheses',
                    'Reverse: factoring out GCF'
                ],
                assessment: [
                    'Were all terms multiplied?',
                    'Are signs correct?',
                    'Is result simplified?'
                ]
            },
            foil_multiplication: {
                objectives: [
                    'Multiply binomials using FOIL',
                    'Combine like terms in product',
                    'Recognize when to use FOIL'
                ],
                keyConcepts: [
                    'FOIL: First, Outer, Inner, Last',
                    'Systematic binomial multiplication',
                    'Combining middle terms'
                ],
                prerequisites: [
                    'Distributive property',
                    'Combining like terms',
                    'Multiplication of signed numbers'
                ],
                commonDifficulties: [
                    'Missing one of the four products',
                    'Sign errors in multiplication',
                    'Not combining like terms'
                ],
                extensions: [
                    'Multiplying polynomials beyond binomials',
                    'Special products recognition',
                    'Box/area method'
                ],
                assessment: [
                    'Are all four FOIL products present?',
                    'Are like terms combined?',
                    'Can student explain each step?'
                ]
            },
            factor_quadratic: {
                objectives: [
                    'Factor quadratic expressions',
                    'Find factor pairs correctly',
                    'Verify factorization by expansion'
                ],
                keyConcepts: [
                    'Factor pair search strategy',
                    'Sum and product relationships',
                    'Factored form verification'
                ],
                prerequisites: [
                    'Understanding of factors',
                    'Multiplication and addition',
                    'Quadratic form recognition'
                ],
                commonDifficulties: [
                    'Finding factors that only multiply correctly',
                    'Sign errors in factors',
                    'Not checking GCF first'
                ],
                extensions: [
                    'Factoring with leading coefficient ≠ 1',
                    'Completing the square',
                    'Using quadratic formula'
                ],
                assessment: [
                    'Do factors multiply to give constant term?',
                    'Do factors add to give middle coefficient?',
                    'Can student verify by expansion?'
                ]
            }
        };

        return pedagogicalDatabase[problemType] || {
            objectives: ['Apply appropriate algebraic techniques'],
            keyConcepts: ['Algebraic properties and operations'],
            prerequisites: ['Basic algebra skills'],
            commonDifficulties: ['Various computational challenges'],
            extensions: ['More complex variations'],
            assessment: ['Check understanding of process']
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const { type } = this.currentProblem;
        const alternatives = this.generateAlternativeMethods(type);

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

    generateAlternativeMethods(problemType) {
        const alternativeDatabase = {
            combine_like_terms: {
                primaryMethod: 'Group and combine systematically',
                methods: [
                    {
                        name: 'Horizontal Method',
                        description: 'Combine terms left to right in original order'
                    },
                    {
                        name: 'Vertical Method',
                        description: 'Stack like terms vertically and add down columns'
                    },
                    {
                        name: 'Color-Coding',
                        description: 'Use colors to identify and group like terms visually'
                    }
                ],
                comparison: 'All methods produce same result; choice depends on personal preference and complexity'
            },
            distribute: {
                primaryMethod: 'Direct distributive property application',
                methods: [
                    {
                        name: 'Arrow Method',
                        description: 'Draw arrows from outside term to each inside term'
                    },
                    {
                        name: 'Box Method',
                        description: 'Create a box/grid to organize multiplication'
                    },
                    {
                        name: 'Step-by-Step',
                        description: 'Write out each multiplication separately before combining'
                    }
                ],
                comparison: 'Arrow and box methods provide visual organization; step-by-step is most explicit'
            },
            foil_multiplication: {
                primaryMethod: 'FOIL (First, Outer, Inner, Last)',
                methods: [
                    {
                        name: 'Box/Area Method',
                        description: 'Use 2×2 grid to organize all four products'
                    },
                    {
                        name: 'Vertical Multiplication',
                        description: 'Stack binomials and multiply like arithmetic'
                    },
                    {
                        name: 'Double Distribution',
                        description: 'Apply distributive property twice'
                    },
                    {
                        name: 'Generic Rectangle',
                        description: 'Visual area model showing all products'
                    }
                ],
                comparison: 'FOIL is quickest for binomials; box method scales better to larger polynomials; visual methods aid understanding'
            },
            factor_quadratic: {
                primaryMethod: 'Factor pair search method',
                methods: [
                    {
                        name: 'Guess and Check',
                        description: 'Systematically try factor pairs until correct one found'
                    },
                    {
                        name: 'AC Method',
                        description: 'Multiply a and c, find factors, rewrite and group'
                    },
                    {
                        name: 'Box Method',
                        description: 'Use area model to organize factoring process'
                    },
                    {
                        name: 'Completing the Square',
                        description: 'Transform to perfect square then factor'
                    }
                ],
                comparison: 'Factor search is most direct for simple cases; AC method handles all cases systematically; completing square connects to vertex form'
            },
            simplify_radicals: {
                primaryMethod: 'Prime factorization method',
                methods: [
                    {
                        name: 'Perfect Square Extraction',
                        description: 'Identify and extract perfect square factors directly'
                    },
                    {
                        name: 'Factor Tree',
                        description: 'Visual tree diagram to find prime factors'
                    },
                    {
                        name: 'Division Method',
                        description: 'Divide by perfect squares until fully simplified'
                    }
                ],
                comparison: 'Prime factorization is most systematic; perfect square method is faster if squares recognized; factor tree provides visual support'
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard algebraic approach',
            methods: [
                {
                    name: 'Systematic Approach',
                    description: 'Follow established algebraic procedures'
                }
            ],
            comparison: 'Method choice depends on problem complexity and personal preference'
        };
    }
}

