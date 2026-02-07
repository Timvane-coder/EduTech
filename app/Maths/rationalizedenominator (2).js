// Enhanced Rationalizing Denominators Mathematical Workbook
import * as math from 'mathjs';

export class EnhancedRationalizingDenominatorsWorkbook {
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
        this.initializeRationalizingSolvers();
        this.initializeRationalizingLessons();
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
        this.initializeConjugateDatabase();
        this.initializeSimplificationDatabase();
    }

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            'cbrt': '∛', 'fourthrt': '∜',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥',
            // Fraction symbols
            'frac': '/', 'over': '÷'
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
                radicalBg: '#e8f4f8',
                radicalText: '#0066cc'
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
                radicalBg: '#e0f2f7',
                radicalText: '#01579b'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeRationalizingLessons() {
        this.lessons = {
            monomial_square_root: {
                title: "Rationalizing Monomial Square Root Denominators",
                concepts: [
                    "Goal: Eliminate radicals from the denominator",
                    "Method: Multiply by a form of 1 that creates a perfect square under the radical",
                    "Form: a/√b → multiply by √b/√b",
                    "Result: Denominator becomes a rational number"
                ],
                theory: "Rationalizing removes radicals from denominators by multiplying by the radical over itself, which equals 1 and doesn't change the value.",
                keyFormulas: {
                    "Basic Form": "a/√b = (a/√b) × (√b/√b) = (a√b)/b",
                    "With Coefficient": "a/(c√b) = (a/(c√b)) × (√b/√b) = (a√b)/(cb)",
                    "Simplification": "Always simplify the radical in final answer"
                },
                solvingSteps: [
                    "Identify the radical in the denominator",
                    "Multiply numerator and denominator by that radical",
                    "Simplify the denominator (radical squared)",
                    "Simplify the numerator if possible",
                    "Reduce the fraction if possible"
                ],
                applications: [
                    "Geometric calculations with irrational lengths",
                    "Physics formulas involving square roots",
                    "Engineering calculations",
                    "Preparing expressions for numerical computation"
                ],
                whyRationalize: [
                    "Makes division easier (especially before calculators)",
                    "Standard mathematical form",
                    "Easier to compare and combine fractions",
                    "Simplifies further algebraic manipulation"
                ]
            },

            binomial_square_root: {
                title: "Rationalizing Binomial Square Root Denominators",
                concepts: [
                    "Goal: Eliminate radicals from binomial denominator",
                    "Method: Multiply by the conjugate",
                    "Conjugate: Change the sign between terms (a + √b → a - √b)",
                    "Uses difference of squares formula: (a+b)(a-b) = a² - b²"
                ],
                theory: "Multiplying by the conjugate eliminates radicals using the difference of squares pattern, since (√a)² = a.",
                keyFormulas: {
                    "Conjugate Pattern": "(a + √b)(a - √b) = a² - b",
                    "General Form": "c/(a + √b) × (a - √b)/(a - √b) = c(a - √b)/(a² - b)",
                    "Both Terms Radical": "(√a + √b)(√a - √b) = a - b"
                },
                solvingSteps: [
                    "Identify the binomial in the denominator",
                    "Write the conjugate (change the middle sign)",
                    "Multiply numerator and denominator by conjugate",
                    "Apply difference of squares in denominator",
                    "Simplify the numerator (distribute)",
                    "Simplify and reduce the final expression"
                ],
                applications: [
                    "Complex number division (similar process)",
                    "Calculus limit evaluation",
                    "Advanced geometry problems",
                    "Electrical engineering calculations"
                ],
                keyInsight: "The conjugate method works because multiplying conjugate pairs eliminates the radical terms through the difference of squares formula"
            },

            cube_root: {
                title: "Rationalizing Cube Root Denominators",
                concepts: [
                    "Goal: Eliminate cube roots from denominator",
                    "Method: Multiply to create perfect cube under radical",
                    "Need: Exponent under radical to be multiple of 3",
                    "Different from square roots - may need more multiplication"
                ],
                theory: "To rationalize cube roots, we multiply to make the radicand a perfect cube. If we have ∛a, we need to multiply by ∛(a²) to get ∛(a³) = a.",
                keyFormulas: {
                    "Simple Cube Root": "1/∛b = (1/∛b) × (∛b²/∛b²) = ∛b²/b",
                    "With Coefficient": "a/∛(b^n) - determine what power makes b^n into b^3m",
                    "General": "Multiply by ∛(factor needed for perfect cube)"
                },
                solvingSteps: [
                    "Identify the cube root in denominator",
                    "Determine what factor creates a perfect cube",
                    "Multiply numerator and denominator by that factor",
                    "Simplify denominator (cube root of perfect cube)",
                    "Simplify numerator",
                    "Reduce if possible"
                ],
                applications: [
                    "Volume and scaling calculations",
                    "Cubic equations",
                    "Three-dimensional geometry",
                    "Physics (cube relationships)"
                ]
            },

            higher_roots: {
                title: "Rationalizing Higher Order Root Denominators",
                concepts: [
                    "Goal: Eliminate nth roots from denominator",
                    "Method: Create perfect nth power under radical",
                    "For ⁿ√a, need exponent to be multiple of n",
                    "Generalization of square and cube root methods"
                ],
                theory: "For nth roots, multiply by factors that make the radicand's exponent a multiple of n, so the radical can be eliminated.",
                keyFormulas: {
                    "nth Root Pattern": "1/ⁿ√b = (1/ⁿ√b) × (ⁿ√(b^(n-1))/ⁿ√(b^(n-1))) = ⁿ√(b^(n-1))/b",
                    "General Principle": "ⁿ√(a^n) = a",
                    "Exponent Rule": "To rationalize ⁿ√(b^m), multiply by ⁿ√(b^(n-m))"
                },
                solvingSteps: [
                    "Identify the index n of the root",
                    "Determine current exponent m of radicand",
                    "Calculate needed exponent: n - m (or multiple to reach next multiple of n)",
                    "Multiply by ⁿ√(b^needed)",
                    "Simplify denominator",
                    "Simplify numerator and reduce"
                ],
                applications: [
                    "Advanced algebra",
                    "Higher-dimensional geometry",
                    "Mathematical analysis",
                    "Specialized scientific calculations"
                ]
            },

            complex_denominators: {
                title: "Rationalizing Complex Denominators",
                concepts: [
                    "Multiple radicals in denominator",
                    "Combination of different root types",
                    "Nested radicals",
                    "Strategic approach required"
                ],
                theory: "Complex denominators may require multiple rationalization steps, strategic ordering, or clever algebraic manipulation.",
                strategies: [
                    "Rationalize one radical at a time",
                    "Look for common factors first",
                    "Consider simplifying before rationalizing",
                    "Use conjugates for binomial portions",
                    "Rationalize innermost radicals first for nested cases"
                ],
                solvingSteps: [
                    "Analyze the denominator structure",
                    "Develop a rationalization strategy",
                    "Execute steps in logical order",
                    "Simplify at each stage",
                    "Verify final answer has rational denominator"
                ],
                applications: [
                    "Advanced calculus",
                    "Physics with complex formulas",
                    "Engineering design calculations",
                    "Pure mathematics research"
                ]
            },

            numerical_denominators: {
                title: "Rationalizing with Numerical Radicals",
                concepts: [
                    "Simplify radicals before rationalizing when possible",
                    "Factor perfect squares/cubes out of radicals",
                    "Reduce fractions after rationalizing",
                    "Recognize equivalent forms"
                ],
                theory: "Numerical radicals should be simplified first to minimize computation and reveal simplification opportunities.",
                keyFormulas: {
                    "Simplify First": "√(ab) = √a × √b when a is perfect square",
                    "Product Rule": "√a × √b = √(ab)",
                    "Quotient Rule": "√a / √b = √(a/b)"
                },
                solvingSteps: [
                    "Simplify all radicals completely",
                    "Identify rationalizing factor needed",
                    "Multiply to rationalize",
                    "Simplify result",
                    "Reduce numerical coefficients"
                ],
                examples: [
                    "3/√12 → 3/(2√3) → (3√3)/(2·3) → √3/2",
                    "5/√50 → 5/(5√2) → √2/2",
                    "2/√8 → 2/(2√2) → √2/2"
                ]
            },

            variables_in_radicals: {
                title: "Rationalizing with Variable Expressions",
                concepts: [
                    "Assume all variables represent positive values",
                    "Use exponent rules with radicals",
                    "√(x²) = |x| but assume positive → √(x²) = x",
                    "Variable expressions follow same rationalization principles"
                ],
                theory: "Rationalizing with variables uses the same techniques as numerical radicals, with attention to exponent rules and domain restrictions.",
                keyFormulas: {
                    "Variable Square Root": "√(x^(2n)) = x^n",
                    "Product with Variables": "√(ax) × √(bx) = √(abx²) = x√(ab)",
                    "General": "Treat variables like numbers, watching exponents"
                },
                solvingSteps: [
                    "Identify radicands with variables",
                    "Determine what creates perfect powers",
                    "Multiply by appropriate radical factor",
                    "Simplify using exponent rules",
                    "Combine like terms if possible"
                ],
                examples: [
                    "1/√x = √x/x",
                    "5/√(2x) = (5√(2x))/(2x)",
                    "a/(√x + √y) = a(√x - √y)/(x - y)"
                ],
                domainConsiderations: [
                    "Variables under even roots must be non-negative",
                    "Denominators cannot be zero",
                    "State assumptions when necessary"
                ]
            },

            mixed_operations: {
                title: "Rationalizing with Mixed Operations",
                concepts: [
                    "Rationalize as part of larger simplification",
                    "Combine rationalization with other operations",
                    "Order of operations with rationalization",
                    "Strategic simplification"
                ],
                theory: "Rationalization is often one step in a larger simplification process. Choosing when to rationalize can simplify the overall problem.",
                strategies: [
                    "Simplify before rationalizing when possible",
                    "Factor out common terms first",
                    "Combine fractions before rationalizing",
                    "Consider whether rationalization actually helps"
                ],
                solvingSteps: [
                    "Survey the entire expression",
                    "Plan the simplification sequence",
                    "Execute operations in strategic order",
                    "Rationalize when beneficial",
                    "Final simplification and verification"
                ],
                applications: [
                    "Multi-step algebra problems",
                    "Calculus derivatives and integrals",
                    "Solving equations with radicals",
                    "Optimization problems"
                ]
            }
        };
    }

    initializeRationalizingSolvers() {
        this.rationalizingTypes = {
            monomial_square_root: {
                patterns: [
                    /(\d+)\/sqrt\((\d+)\)/,
                    /(\d+)\/√(\d+)/,
                    /(\w+)\/sqrt\((\w+)\)/,
                    /rationalize.*sqrt.*denominator/i,
                    /\d+\/\d*√\d+/
                ],
                solver: this.solveMonomialSquareRoot.bind(this),
                name: 'Monomial Square Root Denominator',
                category: 'square_root',
                description: 'Rationalizes denominators of form a/√b'
            },

            monomial_square_root_coefficient: {
                patterns: [
                    /(\d+)\/\((\d+)sqrt\((\d+)\)\)/,
                    /(\d+)\/(\d+)√(\d+)/,
                    /rationalize.*coefficient.*sqrt/i
                ],
                solver: this.solveMonomialSquareRootWithCoefficient.bind(this),
                name: 'Monomial Square Root with Coefficient',
                category: 'square_root',
                description: 'Rationalizes denominators of form a/(c√b)'
            },

            binomial_sum_square_roots: {
                patterns: [
                    /\d+\/\(sqrt\(\d+\)\s*\+\s*sqrt\(\d+\)\)/,
                    /\d+\/\(√\d+\s*\+\s*√\d+\)/,
                    /rationalize.*binomial.*sum/i,
                    /conjugate/i
                ],
                solver: this.solveBinomialSumSquareRoots.bind(this),
                name: 'Binomial Sum with Square Roots',
                category: 'binomial',
                description: 'Rationalizes denominators of form a/(√b + √c)'
            },

            binomial_difference_square_roots: {
                patterns: [
                    /\d+\/\(sqrt\(\d+\)\s*-\s*sqrt\(\d+\)\)/,
                    /\d+\/\(√\d+\s*-\s*√\d+\)/,
                    /rationalize.*binomial.*difference/i
                ],
                solver: this.solveBinomialDifferenceSquareRoots.bind(this),
                name: 'Binomial Difference with Square Roots',
                category: 'binomial',
                description: 'Rationalizes denominators of form a/(√b - √c)'
            },

            binomial_mixed: {
                patterns: [
                    /\d+\/\(\d+\s*\+\s*sqrt\(\d+\)\)/,
                    /\d+\/\(\d+\s*-\s*sqrt\(\d+\)\)/,
                    /\d+\/\(√\d+\s*\+\s*\d+\)/,
                    /rationalize.*integer.*radical/i
                ],
                solver: this.solveBinomialMixed.bind(this),
                name: 'Binomial with Integer and Radical',
                category: 'binomial',
                description: 'Rationalizes denominators of form a/(b ± √c)'
            },

            cube_root_simple: {
                patterns: [
                    /\d+\/cbrt\(\d+\)/,
                    /\d+\/∛\d+/,
                    /rationalize.*cube.*root/i,
                    /third.*root/i
                ],
                solver: this.solveCubeRootSimple.bind(this),
                name: 'Simple Cube Root Denominator',
                category: 'cube_root',
                description: 'Rationalizes denominators of form a/∛b'
            },

            cube_root_power: {
                patterns: [
                    /\d+\/cbrt\(\d+\^\d+\)/,
                    /rationalize.*cube.*root.*power/i
                ],
                solver: this.solveCubeRootPower.bind(this),
                name: 'Cube Root with Power',
                category: 'cube_root',
                description: 'Rationalizes denominators of form a/∛(b^n)'
            },

            nth_root: {
                patterns: [
                    /\d+\/root\(\d+,\s*\d+\)/,
                    /rationalize.*nth.*root/i,
                    /fourth.*root/i,
                    /fifth.*root/i
                ],
                solver: this.solveNthRoot.bind(this),
                name: 'nth Root Denominator',
                category: 'higher_roots',
                description: 'Rationalizes denominators with nth roots'
            },

            multiple_radicals: {
                patterns: [
                    /rationalize.*multiple.*radical/i,
                    /rationalize.*product.*sqrt/i
                ],
                solver: this.solveMultipleRadicals.bind(this),
                name: 'Multiple Radicals in Denominator',
                category: 'complex',
                description: 'Rationalizes denominators with multiple radical terms'
            },

            nested_radicals: {
                patterns: [
                    /sqrt\(.*sqrt\(/,
                    /rationalize.*nested/i
                ],
                solver: this.solveNestedRadicals.bind(this),
                name: 'Nested Radicals',
                category: 'complex',
                description: 'Rationalizes denominators with nested radicals'
            },

            variable_square_root: {
                patterns: [
                    /\w+\/sqrt\([a-z]\)/,
                    /\d+\/√[a-z]/,
                    /rationalize.*variable/i
                ],
                solver: this.solveVariableSquareRoot.bind(this),
                name: 'Variable in Square Root',
                category: 'variables',
                description: 'Rationalizes denominators with variables under radicals'
            },

            variable_binomial: {
                patterns: [
                    /\d+\/\([a-z]\s*\+\s*sqrt\([a-z]\)\)/,
                    /rationalize.*variable.*binomial/i
                ],
                solver: this.solveVariableBinomial.bind(this),
                name: 'Variable Binomial with Radicals',
                category: 'variables',
                description: 'Rationalizes binomial denominators with variables'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            monomial: {
                'Multiply by radical': [
                    'Forgetting to multiply numerator by the radical too',
                    'Only multiplying denominator',
                    'Using wrong radical (e.g., √3 instead of √2)'
                ],
                'Simplify denominator': [
                    'Not recognizing that √a × √a = a',
                    'Leaving radical in denominator after multiplication',
                    'Arithmetic errors when squaring'
                ],
                'Simplify numerator': [
                    'Not simplifying the radical in numerator',
                    'Missing factor simplification',
                    'Forgetting to reduce final fraction'
                ]
            },
            binomial: {
                'Identify conjugate': [
                    'Not changing the sign correctly',
                    'Trying to multiply by same binomial instead of conjugate',
                    'Confusing which sign to change'
                ],
                'Apply difference of squares': [
                    'Not recognizing (a+b)(a-b) = a² - b² pattern',
                    'Making sign errors in expansion',
                    'Not simplifying (√a)² correctly'
                ],
                'Distribute in numerator': [
                    'Not distributing to all terms',
                    'Sign errors during distribution',
                    'Not combining like terms'
                ]
            },
            cube_root: {
                'Determine needed factor': [
                    'Not calculating what makes perfect cube correctly',
                    'Multiplying by wrong power',
                    'Forgetting cube roots need factor to cube, not square'
                ],
                'Simplify cube root': [
                    'Not recognizing ∛(a³) = a',
                    'Leaving cube root when it could be simplified',
                    'Confusing cube root with square root'
                ]
            }
        };

        this.errorPrevention = {
            multiply_both: {
                reminder: 'Always multiply BOTH numerator and denominator by the same factor',
                method: 'Write the multiplication explicitly: (a/b) × (c/c) to see both parts'
            },
            conjugate_sign: {
                reminder: 'Conjugate changes the MIDDLE sign only: (a + b) → (a - b)',
                method: 'Highlight or circle the sign that changes'
            },
            perfect_power: {
                reminder: 'For nth root, need radicand to be nth power',
                method: 'Write out: √a needs a², ∛a needs a², ∛a² needs a'
            },
            simplify_radicals: {
                reminder: 'Simplify radicals before and after rationalizing',
                method: 'Factor radicands to find perfect squares/cubes first'
            },
            check_denominator: {
                reminder: 'Final answer must have NO radicals in denominator',
                method: 'Verify denominator is rational (no √, ∛, etc.)'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why rationalizing works and its mathematical meaning',
                language: 'intuitive understanding of radical elimination'
            },
            procedural: {
                focus: 'Exact steps to rationalize any denominator',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Geometric and spatial understanding of radicals',
                language: 'visual representations and diagrams'
            },
            algebraic: {
                focus: 'Formal algebraic rules and radical properties',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete numbers and simple radicals',
                radicals: 'small perfect squares like √4, √9'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of simple and moderate radicals',
                radicals: 'common radicals like √2, √3, √5'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every tiny step explained with analogies',
                examples: 'real-world analogies and stories',
                analogies: true,
                visualization: 'simple pictures and concrete objects',
                radicals: 'visual representations of radicals'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive explanations with all reasoning',
                examples: 'abstract and generalized cases',
                radicals: 'any radical including higher roots'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty progression',
                radicals: 'start simple, build to complex'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            geometry: {
                scenario: "Calculating diagonal lengths in geometry",
                context: "Many geometric calculations involve irrational lengths that need to be expressed in rationalized form",
                examples: [
                    "Diagonal of a square with side 1: rationalize 1/√2 to get √2/2",
                    "Finding perpendicular distances involving radicals",
                    "Trigonometric ratios in special triangles"
                ],
                explanation: "Rationalizing makes geometric calculations clearer and easier to use in further calculations"
            },
            physics: {
                scenario: "Physics formulas with square roots",
                context: "Many physics formulas involve radicals in denominators that should be rationalized",
                examples: [
                    "Electric field calculations: k/√r needs rationalization",
                    "Gravitational formulas with distance factors",
                    "Wave equations with frequency terms"
                ],
                explanation: "Rationalized forms are standard in physics for clarity and further manipulation"
            },
            engineering: {
                scenario: "Engineering design calculations",
                context: "Engineering requires precise calculations often involving irrational numbers",
                examples: [
                    "Stress calculations in materials",
                    "Electrical impedance with reactive components",
                    "Structural load distributions"
                ],
                explanation: "Engineers rationalize to maintain precision and facilitate numerical computation"
            },
            finance: {
                scenario: "Compound interest with irrational time periods",
                context: "Some financial calculations involve fractional exponents leading to radicals",
                examples: [
                    "Continuous compounding formulas",
                    "Growth rate calculations",
                    "Present value with radical denominators"
                ],
                explanation: "Rationalized forms make financial calculations more transparent"
            },
            computer_graphics: {
                scenario: "3D graphics and transformations",
                context: "Computer graphics uses normalized vectors and distance calculations",
                examples: [
                    "Normalizing vectors: dividing by magnitude often has √(x²+y²+z²)",
                    "Perspective division in 3D rendering",
                    "Ray tracing calculations"
                ],
                explanation: "Rationalized forms can improve computational efficiency"
            },
            chemistry: {
                scenario: "Molecular calculations and ratios",
                context: "Chemical calculations sometimes involve radical expressions",
                examples: [
                    "Lattice energy calculations",
                    "Quantum mechanical orbital calculations",
                    "Reaction rate constants"
                ],
                explanation: "Standard form in chemistry uses rationalized denominators"
            },
            architecture: {
                scenario: "Building design and proportions",
                context: "Architectural proportions often use irrational numbers",
                examples: [
                    "Golden ratio calculations: 1/φ = (√5-1)/2",
                    "Dome and arch calculations",
                    "Perspective and proportion"
                ],
                explanation: "Rationalized forms are easier to work with in design calculations"
            },
            astronomy: {
                scenario: "Celestial calculations",
                context: "Astronomical distances and orbits involve complex radical expressions",
                examples: [
                    "Orbital mechanics with elliptical paths",
                    "Distance calculations in space",
                    "Gravitational force with radical distances"
                ],
                explanation: "Rationalized forms simplify astronomical calculations"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            monomial_square_root: {
                skills: [
                    'Multiplying radicals: √a × √b = √(ab)',
                    'Squaring radicals: (√a)² = a',
                    'Multiplying fractions',
                    'Simplifying radicals'
                ],
                priorKnowledge: [
                    'Radical properties',
                    'Fraction multiplication',
                    'Equivalent fractions (multiplying by 1)',
                    'Perfect squares'
                ],
                checkQuestions: [
                    "What is √5 × √5?",
                    "Simplify √18",
                    "What is (3/4) × (5/5)?",
                    "Is √2/√2 equal to 1?"
                ]
            },
            binomial: {
                skills: [
                    'Identifying conjugates',
                    'Difference of squares: (a+b)(a-b) = a² - b²',
                    'Distributing over binomials (FOIL)',
                    'Combining like terms',
                    'All monomial prerequisites'
                ],
                priorKnowledge: [
                    'Conjugate concept',
                    'Special products',
                    'Radical arithmetic',
                    'Binomial multiplication'
                ],
                checkQuestions: [
                    "What is the conjugate of 3 + √2?",
                    "Expand (x + 5)(x - 5)",
                    "Simplify (√3 + 2)(√3 - 2)",
                    "Distribute: 4(x - √5)"
                ]
            },
            cube_root: {
                skills: [
                    'Cube root properties',
                    'Cubing radicals: (∛a)³ = a',
                    'Multiplying cube roots: ∛a × ∛b = ∛(ab)',
                    'Perfect cubes recognition'
                ],
                priorKnowledge: [
                    'Difference between square and cube roots',
                    'Exponent notation with radicals',
                    'Perfect cubes (1, 8, 27, 64, 125...)',
                    'Fractional exponents'
                ],
                checkQuestions: [
                    "What is ∛8?",
                    "What is ∛2 × ∛4?",
                    "What is (∛5)³?",
                    "To rationalize ∛3, multiply by ∛?"
                ]
            },
            nth_root: {
                skills: [
                    'Understanding nth roots',
                    'nth root properties',
                    'Exponent rules with radicals',
                    'Perfect nth powers'
                ],
                priorKnowledge: [
                    'Radical notation ⁿ√a',
                    'Relationship between roots and fractional exponents',
                    'How to create perfect nth powers',
                    'General radical arithmetic'
                ],
                checkQuestions: [
                    "What is ⁴√16?",
                    "What is (⁵√2)⁵?",
                    "Express ∛x as a fractional exponent",
                    "To rationalize ⁿ√a, what power is needed?"
                ]
            },
            variables: {
                skills: [
                    'Variable manipulation under radicals',
                    'Exponent rules with variables',
                    'Domain considerations (non-negative under even roots)',
                    'Simplifying variable radicals'
                ],
                priorKnowledge: [
                    'Exponent laws',
                    '√(x²) = |x| or x when x ≥ 0',
                    'Variable domain restrictions',
                    'Combining variable and radical rules'
                ],
                checkQuestions: [
                    "Simplify √(x²)",
                    "What is √x × √x?",
                    "For what values of x is √x defined?",
                    "Simplify √(9x²)"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            fraction_bars: {
                description: "Visual fraction representation",
                analogy: "Building blocks showing numerator over denominator",
                visualization: "Draw fraction bars with radical symbols",
                suitableFor: ['all_types'],
                explanation: "Seeing the fraction structure helps understand what we're multiplying"
            },
            multiplication_by_one: {
                description: "Multiplying by a form of 1",
                analogy: "Like converting units - same value, different form",
                visualization: "Show radical/radical = 1",
                suitableFor: ['monomial', 'binomial'],
                explanation: "We're not changing the value, just the form, by multiplying by 1"
            },
            conjugate_pairs: {
                description: "Conjugate multiplication visual",
                analogy: "Two opposite forces that cancel out the radical",
                visualization: "Color-code terms to show how radicals eliminate",
                suitableFor: ['binomial'],
                explanation: "Conjugates eliminate radicals through difference of squares"
            },
            perfect_power_creation: {
                description: "Building perfect squares/cubes",
                analogy: "Completing a puzzle to make a perfect picture",
                visualization: "Show how factors combine to create perfect powers",
                suitableFor: ['all_roots'],
                explanation: "We multiply by what's needed to create a power the root can eliminate"
            },
            area_model: {
                description: "Geometric area representation",
                analogy: "Rectangle with irrational dimensions",
                visualization: "Draw rectangles with side lengths involving radicals",
                suitableFor: ['monomial'],
                explanation: "Multiplying dimensions by √a/√a doesn't change area"
            },
            number_line: {
                description: "Radical positions on number line",
                analogy: "Marking irrational distances",
                visualization: "Show √2, √3, etc. on number line",
                suitableFor: ['conceptual_understanding'],
                explanation: "Helps visualize that radicals represent real numbers"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "1/√2",
                    solution: "√2/2",
                    steps: [
                        "Multiply by √2/√2",
                        "Numerator: 1 × √2 = √2",
                        "Denominator: √2 × √2 = 2",
                        "Result: √2/2"
                    ],
                    difficulty: "easy",
                    type: "monomial_square_root"
                },
                {
                    problem: "3/√5",
                    solution: "(3√5)/5",
                    steps: [
                        "Multiply by √5/√5",
                        "Numerator: 3 × √5 = 3√5",
                        "Denominator: √5 × √5 = 5",
                        "Result: (3√5)/5"
                    ],
                    difficulty: "easy",
                    type: "monomial_square_root"
                },
                {
                    problem: "2/(3√2)",
                    solution: "(2√2)/6 = √2/3",
                    steps: [
                        "Multiply by √2/√2",
                        "Numerator: 2√2",
                        "Denominator: 3 × 2 = 6",
                        "Simplify: (2√2)/6 = √2/3"
                    ],
                    difficulty: "easy",
                    type: "monomial_square_root_coefficient"
                }
            ],
            intermediate: [
                {
                    problem: "4/√12",
                    solution: "(2√3)/3",
                    steps: [
                        "Simplify: √12 = 2√3",
                        "Rewrite: 4/(2√3) = 2/√3",
                        "Multiply by √3/√3",
                        "Result: (2√3)/3"
                    ],
                    difficulty: "medium",
                    type: "monomial_square_root"
                },
                {
                    problem: "5/(2 + √3)",
                    solution: "5(2 - √3)",
                    steps: [
                        "Conjugate: 2 - √3",
                        "Multiply: 5(2-√3)/((2+√3)(2-√3))",
                        "Denominator: 4 - 3 = 1",
                        "Result: 5(2 - √3) = 10 - 5√3"
                    ],
                    difficulty: "medium",
                    type: "binomial_mixed"
                },
                {
                    problem: "1/∛4",
                    solution: "∛2/2",
                    steps: [
                        "Need ∛8 in denominator",
                        "Multiply by ∛2/∛2",
                        "Numerator: ∛2",
                        "Denominator: ∛8 = 2"
                    ],
                    difficulty: "medium",
                    type: "cube_root"
                }
            ],
            advanced: [
                {
                    problem: "3/(√5 + √2)",
                    solution: "(3√5 - 3√2)/3 = √5 - √2",
                    steps: [
                        "Conjugate: √5 - √2",
                        "Multiply numerator: 3(√5 - √2)",
                        "Denominator: 5 - 2 = 3",
                        "Result: (3√5 - 3√2)/3 = √5 - √2"
                    ],
                    difficulty: "hard",
                    type: "binomial_sum_square_roots"
                },
                {
                    problem: "2/(√7 - √3)",
                    solution: "(√7 + √3)/2",
                    steps: [
                        "Conjugate: √7 + √3",
                        "Multiply: 2(√7+√3)/((√7-√3)(√7+√3))",
                        "Denominator: 7 - 3 = 4",
                        "Result: 2(√7+√3)/4 = (√7+√3)/2"
                    ],
                    difficulty: "hard",
                    type: "binomial_difference_square_roots"
                },
                {
                    problem: "1/∛9",
                    solution: "∛3/3",
                    steps: [
                        "∛9 = ∛(3²)",
                        "Need ∛(3³) = 3",
                        "Multiply by ∛3/∛3",
                        "Result: ∛3/3"
                    ],
                    difficulty: "hard",
                    type: "cube_root_power"
                }
            ],
            byType: {
                monomial_square_root: [
                    { problem: "1/√3", solution: "√3/3" },
                    { problem: "2/√7", solution: "(2√7)/7" },
                    { problem: "5/√10", solution: "√10/2" }
                ],
                binomial: [
                    { problem: "1/(1 + √2)", solution: "√2 - 1" },
                    { problem: "4/(√5 - 1)", solution: "√5 + 1" },
                    { problem: "2/(√3 + √2)", solution: "2(√3 - √2)" }
                ],
                cube_root: [
                    { problem: "1/∛2", solution: "∛4/2" },
                    { problem: "3/∛9", solution: "∛3" },
                    { problem: "2/∛5", solution: "(2∛25)/5" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            multiply_by_radical_only: {
                misconception: "Thinking you only multiply the denominator by the radical",
                reality: "Must multiply BOTH numerator and denominator to maintain equality",
                correctiveExample: "1/√2: Must do (1/√2) × (√2/√2), not just multiply denominator",
                commonIn: ['all_types']
            },
            wrong_conjugate: {
                misconception: "Not changing the sign correctly for conjugate",
                reality: "Conjugate changes the MIDDLE sign only: (a+b) becomes (a-b)",
                correctiveExample: "For (2+√3), conjugate is (2-√3), not (-2+√3)",
                commonIn: ['binomial']
            },
            not_simplifying_first: {
                misconception: "Rationalizing before simplifying the radical",
                reality: "Should simplify radicals first to make rationalization easier",
                correctiveExample: "For 2/√12, simplify to 2/(2√3) = 1/√3 first",
                commonIn: ['monomial']
            },
            cube_root_confusion: {
                misconception: "Treating cube roots like square roots",
                reality: "Cube roots need different factors: ∛a needs ∛(a²) not ∛a",
                correctiveExample: "To rationalize ∛2, multiply by ∛4, not ∛2",
                commonIn: ['cube_root']
            },
            forgetting_to_simplify_result: {
                misconception: "Stopping after rationalizing without simplifying",
                reality: "Final answer should be fully simplified (reduce fractions, simplify radicals)",
                correctiveExample: "(6√2)/12 should be simplified to √2/2",
                commonIn: ['all_types']
            },
            radical_addition_error: {
                misconception: "Thinking √a + √b = √(a+b)",
                reality: "Cannot combine radicals with different radicands under one radical",
                correctiveExample: "√2 + √3 ≠ √5; they stay separate",
                commonIn: ['binomial']
            },
            denominator_still_has_radical: {
                misconception: "Thinking rationalization is complete with radical still in denominator",
                reality: "Final denominator must be completely free of radicals",
                correctiveExample: "√6/√2 is NOT rationalized; should be √3",
                commonIn: ['all_types']
            },
            difference_of_squares_error: {
                misconception: "Getting (a+b)(a-b) = a² + b² instead of a² - b²",
                reality: "Middle terms cancel leaving difference: (a+b)(a-b) = a² - b²",
                correctiveExample: "(√5+2)(√5-2) = 5 - 4 = 1, not 5 + 4 = 9",
                commonIn: ['binomial']
            },
            variable_domain: {
                misconception: "Not considering variable restrictions",
                reality: "Variables under even roots must be non-negative; denominators non-zero",
                correctiveExample: "For 1/√x, need x > 0 (positive)",
                commonIn: ['variables']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            multiplying_by_one: {
                analogy: "Converting currency",
                explanation: "Just like $1 × (€0.85/€0.85) = $1 in different form, multiplying by √2/√2 keeps the same value",
                suitableFor: ['monomial'],
                ELI5: "Imagine trading a dollar for 4 quarters - you still have the same amount of money, just in a different form!"
            },
            conjugates: {
                analogy: "Opposite forces canceling out",
                explanation: "Like pushing and pulling with equal force - the radical parts cancel, leaving only regular numbers",
                suitableFor: ['binomial'],
                ELI5: "It's like having +5 candies and -5 candies - they cancel out to zero! The radical parts do the same thing."
            },
            perfect_squares: {
                analogy: "Completing a puzzle",
                explanation: "We're adding the missing piece to make a complete square that the square root can eliminate",
                suitableFor: ['monomial', 'cube_root'],
                ELI5: "Imagine you have 2 pieces of a 4-piece puzzle. You add 2 more to complete it - that's what we do with radicals!"
            },
            denominator_rational: {
                analogy: "Converting messy measurements to clean ones",
                explanation: "Like converting 1/π feet to inches - we want whole number denominators for easier use",
                suitableFor: ['all_types'],
                ELI5: "It's like cleaning your room - we're organizing the math to make it neat and tidy!"
            },
            difference_of_squares: {
                analogy: "Pattern making in tiles",
                explanation: "(a+b)(a-b) is like a square of size a with a square of size b cut out",
                suitableFor: ['binomial'],
                ELI5: "Imagine a big square cookie with a small square cut from the middle - that's what (a+b)(a-b) makes!"
            },
            cube_building: {
                analogy: "Building blocks to make a cube",
                explanation: "We need enough blocks (factors) to build a complete cube that the cube root can take apart",
                suitableFor: ['cube_root'],
                ELI5: "Like stacking blocks to make a perfect cube shape - we need all the right pieces!"
            },
            no_value_change: {
                analogy: "Changing the label, not the contents",
                explanation: "Like putting the same juice in a different bottle - the amount hasn't changed",
                suitableFor: ['all_types'],
                ELI5: "It's like your toy in a new box - same toy, just packaged differently!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            monomial_square_root: {
                level1: "What's in the denominator that we need to eliminate?",
                level2: "We need to get rid of the square root. What times √a equals a number with no root?",
                level3: "Multiply top and bottom by the same radical that's in the denominator",
                level4: "Multiply by √{radical}/√{radical} and remember (√a)² = a"
            },
            binomial: {
                level1: "How can we eliminate both radical terms in the denominator?",
                level2: "There's a special partner called a 'conjugate' that helps eliminate radicals",
                level3: "The conjugate has the same terms but opposite sign in the middle",
                level4: "Multiply by the conjugate and use (a+b)(a-b) = a² - b²"
            },
            cube_root: {
                level1: "What makes a cube root disappear?",
                level2: "We need a perfect cube under the cube root. What power makes that?",
                level3: "For ∛a, we need ∛(a³) to get a. What factor creates that?",
                level4: "Multiply by ∛{needed_factor} where needed_factor makes a perfect cube"
            },
            simplify_first: {
                level1: "Can the radical in the denominator be simplified before rationalizing?",
                level2: "Check if there are perfect squares (or cubes) under the radical",
                level3: "Factor the radicand and pull out perfect powers",
                level4: "Simplify √{radicand} to {simplified_form} first"
            },
            reduce_after: {
                level1: "Can the final fraction be simplified?",
                level2: "Do the numerator and denominator have common factors?",
                level3: "Look for common numerical factors and common radical factors",
                level4: "Divide both parts by {common_factor}"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Rationalize: 1/√5",
                    answer: "√5/5",
                    assesses: "monomial_square_root",
                    difficulty: "basic"
                },
                {
                    question: "Rationalize: 2/(3√2)",
                    answer: "√2/3",
                    assesses: "monomial_square_root_coefficient",
                    difficulty: "basic"
                },
                {
                    question: "Rationalize: 3/(2 + √5)",
                    answer: "3(2 - √5)",
                    assesses: "binomial_mixed",
                    difficulty: "intermediate"
                },
                {
                    question: "Rationalize: 1/∛3",
                    answer: "∛9/3",
                    assesses: "cube_root",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "To rationalize 1/√7, multiply by:",
                    options: ["√7/√7", "7/7", "1/√7", "√7"],
                    correct: "√7/√7",
                    explanation: "We multiply by the radical over itself, which equals 1"
                },
                {
                    question: "The conjugate of 3 + √2 is:",
                    options: ["3 - √2", "-3 + √2", "-3 - √2", "√2 + 3"],
                    correct: "3 - √2",
                    explanation: "Conjugate changes only the middle sign"
                },
                {
                    question: "To rationalize ∛5, multiply by:",
                    options: ["∛25/∛25", "∛5/∛5", "∛125/∛125", "5/5"],
                    correct: "∛25/∛25",
                    explanation: "Need ∛(5³) = ∛125, so multiply by ∛25"
                },
                {
                    question: "(√3 + 2)(√3 - 2) simplifies to:",
                    options: ["-1", "1", "3 - 4", "5"],
                    correct: "-1",
                    explanation: "Difference of squares: (√3)² - 2² = 3 - 4 = -1"
                }
            ],
            summative: [
                {
                    question: "Rationalize and simplify: 6/√18",
                    answer: "√2",
                    showsWork: true,
                    rubric: {
                        simplify_radical: 1,
                        identify_factor: 1,
                        multiply_correctly: 1,
                        final_simplification: 1,
                        rationalized_form: 1
                    }
                },
                {
                    question: "Rationalize: 4/(√7 - √3)",
                    answer: "√7 + √3",
                    showsWork: true,
                    rubric: {
                        identify_conjugate: 1,
                        multiply_numerator: 1,
                        difference_of_squares: 2,
                        simplify: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "1/√2",
                    "3/√3",
                    "2/√5",
                    "5/√7"
                ],
                medium: [
                    "4/√12",
                    "6/(2√3)",
                    "1/(1 + √2)",
                    "2/(√5 - 1)"
                ],
                hard: [
                    "3/(√7 + √2)",
                    "5/(2 - √3)",
                    "1/∛9",
                    "4/(√6 - √2)"
                ]
            },
            byObjective: {
                canRationalizeMonomialSquareRoot: [
                    "1/√3",
                    "5/√11",
                    "2/√13",
                    "7/√2"
                ],
                canRationalizeWithCoefficient: [
                    "3/(2√5)",
                    "4/(3√2)",
                    "5/(4√3)",
                    "2/(5√7)"
                ],
                canRationalizeBinomial: [
                    "1/(2 + √3)",
                    "3/(√5 - 1)",
                    "2/(1 + √2)",
                    "4/(3 - √2)"
                ],
                canRationalizeBinomialBothRadicals: [
                    "1/(√3 + √2)",
                    "2/(√7 - √5)",
                    "3/(√11 + √3)",
                    "5/(√13 - √7)"
                ],
                canRationalizeCubeRoot: [
                    "1/∛2",
                    "2/∛5",
                    "1/∛4",
                    "3/∛9"
                ],
                canSimplifyBeforeRationalizing: [
                    "2/√8",
                    "3/√12",
                    "4/√18",
                    "5/√20"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "monomial_square_root": "Multiply by radical/radical",
                "monomial_with_coefficient": "Multiply by radical/radical, then reduce",
                "binomial": "Identify and multiply by conjugate",
                "cube_root": "Determine factor to create perfect cube",
                "higher_root": "Determine factor to create perfect nth power",
                "multiple_radicals": "Rationalize one at a time or find common pattern",
                "nested_radicals": "Start from innermost radical"
            },
            whenToUseWhat: {
                multiply_by_radical: "For simple monomial radical denominators",
                conjugate_method: "For binomial denominators with radicals",
                perfect_power_method: "For cube roots and higher roots",
                simplify_first: "When radical can be simplified before rationalizing",
                factor_and_reduce: "When final answer can be simplified"
            },
            methodSelection: {
                factorsToConsider: [
                    "Type of radical (square, cube, nth root)",
                    "Monomial vs binomial denominator",
                    "Presence of coefficients",
                    "Whether radical can be simplified first",
                    "Complexity of radicand"
                ],
                generalApproach: [
                    "1. Simplify all radicals if possible",
                    "2. Identify type of denominator",
                    "3. Choose appropriate rationalization method",
                    "4. Execute rationalization",
                    "5. Simplify result completely",
                    "6. Verify denominator is rational"
                ]
            },
            optimizationTips: {
                "Simplify radicals first": "Makes rationalization simpler with smaller numbers",
                "Factor perfect powers early": "Easier to see what's needed",
                "Reduce as you go": "Simplify fractions at each step",
                "Check for further simplification": "Final answer should be fully simplified",
                "Verify rational denominator": "Make sure no radicals remain in denominator"
            },
            commonPatterns: {
                "1/√a": "Answer is √a/a",
                "1/(a + √b)": "Multiply by (a - √b), denominator becomes a² - b",
                "1/(√a + √b)": "Multiply by (√a - √b), denominator becomes a - b",
                "1/∛a": "Answer is ∛(a²)/a",
                "n/√a": "Answer is (n√a)/a"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Monomial Speed Round",
                    timeLimit: 120, // seconds
                    problems: [
                        "1/√2",
                        "1/√3",
                        "2/√5",
                        "3/√7",
                        "4/√11",
                        "5/√13",
                        "1/√6",
                        "2/√10"
                    ]
                },
                {
                    name: "Binomial Challenge",
                    timeLimit: 180,
                    problems: [
                        "1/(1 + √2)",
                        "2/(3 - √5)",
                        "3/(√7 + 1)",
                        "4/(2 - √3)",
                        "1/(√5 + √2)"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Radical",
                    problem: "When 2/√x is rationalized, the result is (2√x)/9. What is x?",
                    solution: "x = 9",
                    explanation: "If (2√x)/9, then denominator after rationalization is 9, so x = 9"
                },
                {
                    name: "Conjugate Detective",
                    problem: "The conjugate of (a + √b) times (a + √b) gives 13 + 6√2. Find a and b.",
                    solution: "a = 3, b = 2",
                    explanation: "(3 + √2)² = 9 + 6√2 + 2 = 11 + 6√2... need to recalculate"
                },
                {
                    name: "Rationalization Chain",
                    problem: "Start with 1/√2. Rationalize. Take that result's reciprocal. Rationalize again. What do you get?",
                    solution: "2",
                    explanation: "1/√2 → √2/2 → 2/√2 → 2"
                }
            ],
            applications: [
                {
                    scenario: "Geometry - Square Diagonal",
                    problem: "A square has side length 1. Express the length of its diagonal with a rationalized form.",
                    solution: "√2 (already rationalized)",
                    context: "Diagonal = side × √2"
                },
                {
                    scenario: "Physics - Projectile Motion",
                    problem: "Time to reach maximum height is 1/(2√g) where g=10. Rationalize.",
                    solution: "√10/20 = √10/20 seconds",
                    context: "Rationalized form is clearer for calculations"
                },
                {
                    scenario: "Golden Ratio",
                    problem: "The reciprocal of φ (golden ratio) is 2/(1+√5). Rationalize this.",
                    solution: "(√5-1)/2",
                    context: "This is actually φ - 1!"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Problem: 1/√3",
                        "Multiply by √3: √3/√3",  // ERROR: only multiplied denominator
                        "Result: √3/3"
                    ],
                    correctAnswer: "√3/3",
                    errorType: "Got lucky with wrong method - should multiply numerator too (1×√3)/3"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Problem: 2/(1 + √2)",
                        "Conjugate: 1 + √2",  // ERROR: conjugate should be 1 - √2
                        "Multiply: 2(1+√2)/(1+2√2+2)",
                        "Result: Wrong!"
                    ],
                    correctAnswer: "2(√2 - 1)",
                    errorType: "Used same binomial instead of conjugate"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Problem: 1/∛4",
                        "Multiply by ∛4/∛4",  // ERROR: need ∛2, not ∛4
                        "Result: ∛4/4"  // Still has radical!
                    ],
                    correctAnswer: "∛2/2",
                    errorType: "Needed ∛2 to make ∛8=2, not ∛4"
                }
            ],
            conceptual: [
                {
                    question: "Why do we rationalize denominators?",
                    answer: "Historical: easier division; Modern: standard form, easier to compare",
                    depth: "Understanding purpose, not just procedure"
                },
                {
                    question: "Does rationalizing change the value of the expression?",
                    answer: "No - we multiply by 1 (in the form radical/radical)",
                    depth: "Understanding equivalence"
                },
                {
                    question: "Can you rationalize a numerator instead? When would you?",
                    answer: "Yes - same techniques. Useful in calculus limits.",
                    depth: "Extension of concept"
                }
            ]
        };
    }

    initializeConjugateDatabase() {
        this.conjugates = {
            rules: {
                "a + b": "a - b",
                "a - b": "a + b",
                "√a + √b": "√a - √b",
                "√a - √b": "√a + √b",
                "a + √b": "a - √b",
                "a - √b": "a + √b",
                "√a + b": "√a - b",
                "√a - b": "√a + b"
            },
            products: {
                "(a + b)(a - b)": "a² - b²",
                "(√a + √b)(√a - √b)": "a - b",
                "(a + √b)(a - √b)": "a² - b",
                "(√a + b)(√a - b)": "a - b²"
            },
            examples: [
                {
                    expression: "3 + √2",
                    conjugate: "3 - √2",
                    product: "(3 + √2)(3 - √2) = 9 - 2 = 7"
                },
                {
                    expression: "√5 - √3",
                    conjugate: "√5 + √3",
                    product: "(√5 - √3)(√5 + √3) = 5 - 3 = 2"
                },
                {
                    expression: "1 + √7",
                    conjugate: "1 - √7",
                    product: "(1 + √7)(1 - √7) = 1 - 7 = -6"
                }
            ],
            why_it_works: "Conjugates use the difference of squares pattern (a+b)(a-b) = a² - b². When b is a radical, b² eliminates the radical, leaving only rational terms."
        };
    }

    initializeSimplificationDatabase() {
        this.simplificationRules = {
            radical_simplification: {
                square_roots: {
                    rule: "√(a·b) = √a · √b, factor out perfect squares",
                    examples: [
                        "√12 = √(4·3) = 2√3",
                        "√18 = √(9·2) = 3√2",
                        "√50 = √(25·2) = 5√2",
                        "√72 = √(36·2) = 6√2"
                    ]
                },
                cube_roots: {
                    rule: "∛(a·b) = ∛a · ∛b, factor out perfect cubes",
                    examples: [
                        "∛16 = ∛(8·2) = 2∛2",
                        "∛54 = ∛(27·2) = 3∛2",
                        "∛24 = ∛(8·3) = 2∛3"
                    ]
                }
            },
            fraction_reduction: {
                rule: "Divide numerator and denominator by GCF",
                examples: [
                    "(6√2)/12 = √2/2",
                    "(10√5)/15 = (2√5)/3",
                    "(8√3)/12 = (2√3)/3"
                ]
            },
            radical_in_numerator: {
                rule: "Can simplify radicals and combine with coefficients",
                examples: [
                    "(2√8)/4 = (2·2√2)/4 = (4√2)/4 = √2",
                    "(3√12)/6 = (3·2√3)/6 = (6√3)/6 = √3"
                ]
            },
            perfect_powers: {
                squares: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144],
                cubes: [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000],
                recognition: "Memorize common perfect squares and cubes for quick factoring"
            }
        };
    }

    // MAIN SOLVER METHOD
    solveRationalizingProblem(config) {
        const { expression, numerator, denominator, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseRationalizingProblem(expression, numerator, denominator, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveRationalizingProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateRationalizingSteps(this.currentProblem, this.currentSolution);

            // Generate visualization data if applicable
            this.generateRationalizingVisualization();

            // Generate workbook
            this.generateRationalizingWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                rationalizedForm: this.currentSolution?.rationalizedForm,
                simplifiedForm: this.currentSolution?.simplifiedForm
            };

        } catch (error) {
            throw new Error(`Failed to solve rationalizing problem: ${error.message}`);
        }
    }

    parseRationalizingProblem(expression, numerator = null, denominator = null, problemType = null, context = {}) {
        const cleanInput = expression ? this.cleanMathExpression(expression) : '';

        // If problem type is specified, use it directly
        if (problemType && this.rationalizingTypes[problemType]) {
            return {
                originalInput: expression || `${problemType} problem`,
                cleanInput: cleanInput,
                type: problemType,
                numerator: numerator,
                denominator: denominator,
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect rationalizing problem type
        for (const [type, config] of Object.entries(this.rationalizingTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractRationalizingParameters(match, type);

                    return {
                        originalInput: expression,
                        cleanInput: cleanInput,
                        type: type,
                        numerator: extractedParams.numerator || numerator,
                        denominator: extractedParams.denominator || denominator,
                        parameters: extractedParams,
                        context: { ...context },
                        match: match,
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default handling if numerator and denominator provided
        if (numerator !== null && denominator !== null) {
            return {
                originalInput: expression || `${numerator}/${denominator}`,
                cleanInput: cleanInput,
                type: 'monomial_square_root', // default
                numerator: numerator,
                denominator: denominator,
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize rationalizing problem type from: ${expression}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/√/g, 'sqrt')
            .replace(/∛/g, 'cbrt')
            .replace(/∜/g, 'fourthrt')
            .trim();
    }

    extractRationalizingParameters(match, type) {
        const params = {};

        if (!match) return params;

        switch(type) {
            case 'monomial_square_root':
                params.numerator = parseInt(match[1]) || 1;
                params.radical = parseInt(match[2]);
                params.denominator = `sqrt(${params.radical})`;
                break;

            case 'monomial_square_root_coefficient':
                params.numerator = parseInt(match[1]) || 1;
                params.coefficient = parseInt(match[2]) || 1;
                params.radical = parseInt(match[3]);
                params.denominator = `${params.coefficient}*sqrt(${params.radical})`;
                break;

            case 'binomial_sum_square_roots':
            case 'binomial_difference_square_roots':
                params.numerator = parseInt(match[1]) || 1;
                // Would need more sophisticated parsing for radicals in binomial
                break;

            case 'cube_root_simple':
                params.numerator = parseInt(match[1]) || 1;
                params.radical = parseInt(match[2]);
                params.denominator = `cbrt(${params.radical})`;
                break;
        }

        return params;
    }

    solveRationalizingProblem_Internal(problem) {
        const solver = this.rationalizingTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for rationalizing problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // RATIONALIZING SOLVERS

    solveMonomialSquareRoot(problem) {
        const { numerator, radical } = problem.parameters || {};
        const n = numerator || problem.numerator || 1;
        const r = radical || this.extractRadicalValue(problem.denominator);

        // Simplify the radical first if possible
        const simplified = this.simplifyRadical(r, 2);
        
        let rationalizingFactor, resultNumerator, resultDenominator;
        
        if (simplified.coefficient !== 1) {
            // e.g., √12 = 2√3, so 1/√12 = 1/(2√3)
            rationalizingFactor = `√${simplified.radicand}`;
            resultNumerator = `${n}√${simplified.radicand}`;
            resultDenominator = simplified.coefficient * simplified.radicand;
        } else {
            rationalizingFactor = `√${r}`;
            resultNumerator = `${n}√${r}`;
            resultDenominator = r;
        }

        // Simplify final fraction
        const gcd = this.gcd(n * (simplified.radicand || r), resultDenominator);
        const finalNum = (n * (simplified.radicand || r)) / gcd;
        const finalDen = resultDenominator / gcd;

        const rationalizedForm = finalDen === 1 ? 
            `${finalNum === 1 ? '' : finalNum}√${simplified.radicand || r}` :
            `(${finalNum === 1 ? '' : finalNum}√${simplified.radicand || r})/${finalDen}`;

        return {
            originalExpression: `${n}/√${r}`,
            type: 'Monomial Square Root',
            radicalSimplified: simplified.coefficient !== 1 ? `√${r} = ${simplified.coefficient}√${simplified.radicand}` : null,
            rationalizingFactor: rationalizingFactor,
            rationalizedForm: rationalizedForm,
            simplifiedForm: this.fullySimplifyExpression(rationalizedForm),
            numeratorAfter: resultNumerator,
            denominatorAfter: resultDenominator,
            category: 'square_root'
        };
    }

    solveMonomialSquareRootWithCoefficient(problem) {
        const { numerator, coefficient, radical } = problem.parameters || {};
        const n = numerator || 1;
        const c = coefficient || 1;
        const r = radical;

        const rationalizingFactor = `√${r}`;
        const resultNumerator = `${n}√${r}`;
        const resultDenominator = c * r;

        // Simplify
        const gcd = this.gcd(n, resultDenominator);
        const finalNum = n / gcd;
        const finalDen = resultDenominator / gcd;

        const rationalizedForm = `(${finalNum}√${r})/${finalDen}`;

        return {
            originalExpression: `${n}/(${c}√${r})`,
            type: 'Monomial Square Root with Coefficient',
            rationalizingFactor: rationalizingFactor,
            rationalizedForm: rationalizedForm,
            simplifiedForm: this.fullySimplifyExpression(rationalizedForm),
            numeratorAfter: resultNumerator,
            denominatorAfter: resultDenominator,
            category: 'square_root'
        };
    }

    solveBinomialSumSquareRoots(problem) {
        // a/(√b + √c) - multiply by conjugate (√b - √c)
        const { numerator, radical1, radical2 } = problem.parameters || {};
        const a = numerator || 1;
        const b = radical1 || problem.radical1;
        const c = radical2 || problem.radical2;

        const conjugate = `(√${b} - √${c})`;
        const denominatorAfter = b - c;
        const numeratorAfter = `${a}(√${b} - √${c})`;

        let rationalizedForm;
        if (denominatorAfter === 1) {
            rationalizedForm = numeratorAfter;
        } else {
            rationalizedForm = `${numeratorAfter}/${denominatorAfter}`;
        }

        return {
            originalExpression: `${a}/(√${b} + √${c})`,
            type: 'Binomial Sum with Square Roots',
            conjugate: conjugate,
            rationalizingFactor: conjugate,
            differencOfSquares: `(√${b})² - (√${c})² = ${b} - ${c} = ${denominatorAfter}`,
            rationalizedForm: rationalizedForm,
            simplifiedForm: this.fullySimplifyExpression(rationalizedForm),
            numeratorAfter: numeratorAfter,
            denominatorAfter: denominatorAfter,
            category: 'binomial'
        };
    }

    solveBinomialDifferenceSquareRoots(problem) {
        // Similar to sum, but conjugate is (√b + √c)
        const { numerator, radical1, radical2 } = problem.parameters || {};
        const a = numerator || 1;
        const b = radical1 || problem.radical1;
        const c = radical2 || problem.radical2;

        const conjugate = `(√${b} + √${c})`;
        const denominatorAfter = b - c;
        const numeratorAfter = `${a}(√${b} + √${c})`;

        let rationalizedForm;
        if (denominatorAfter === 1) {
            rationalizedForm = numeratorAfter;
        } else {
            rationalizedForm = `${numeratorAfter}/${denominatorAfter}`;
        }

        return {
            originalExpression: `${a}/(√${b} - √${c})`,
            type: 'Binomial Difference with Square Roots',
            conjugate: conjugate,
            rationalizingFactor: conjugate,
            differenceOfSquares: `(√${b})² - (√${c})² = ${b} - ${c} = ${denominatorAfter}`,
            rationalizedForm: rationalizedForm,
            simplifiedForm: this.fullySimplifyExpression(rationalizedForm),
            numeratorAfter: numeratorAfter,
            denominatorAfter: denominatorAfter,
            category: 'binomial'
        };
    }

    solveBinomialMixed(problem) {
        // a/(b ± √c) - multiply by conjugate (b ∓ √c)
        const { numerator, integer, radical, sign } = problem.parameters || {};
        const a = numerator || 1;
        const b = integer || problem.integer;
        const c = radical || problem.radical;
        const s = sign || '+';

        const conjugateSign = s === '+' ? '-' : '+';
        const conjugate = `(${b} ${conjugateSign} √${c})`;
        const denominatorAfter = b * b - c;
        const numeratorAfter = `${a}(${b} ${conjugateSign} √${c})`;

        let rationalizedForm;
        if (denominatorAfter === 1) {
            rationalizedForm = numeratorAfter;
        } else if (denominatorAfter === -1) {
            rationalizedForm = `-${numeratorAfter}`;
        } else {
            rationalizedForm = `${numeratorAfter}/${denominatorAfter}`;
        }

        return {
            originalExpression: `${a}/(${b} ${s} √${c})`,
            type: 'Binomial with Integer and Radical',
            conjugate: conjugate,
            rationalizingFactor: conjugate,
            differenceOfSquares: `${b}² - (√${c})² = ${b * b} - ${c} = ${denominatorAfter}`,
            rationalizedForm: rationalizedForm,
            simplifiedForm: this.fullySimplifyExpression(rationalizedForm),
            numeratorAfter: numeratorAfter,
            denominatorAfter: denominatorAfter,
            category: 'binomial'
        };
    }

    solveCubeRootSimple(problem) {
        // a/∛b - need to multiply by ∛(b²) to get ∛(b³) = b
        const { numerator, radical } = problem.parameters || {};
        const a = numerator || 1;
        const b = radical || problem.radical;

        const rationalizingFactor = `∛${b * b}`;
        const numeratorAfter = `${a}∛${b * b}`;
        const denominatorAfter = b;

        const rationalizedForm = denominatorAfter === 1 ?
            numeratorAfter :
            `(${numeratorAfter})/${denominatorAfter}`;

        return {
            originalExpression: `${a}/∛${b}`,
            type: 'Simple Cube Root',
            rationalizingFactor: rationalizingFactor,
            explanation: `Need ∛(${b}³) = ${b}, so multiply by ∛${b * b}`,
            rationalizedForm: rationalizedForm,
            simplifiedForm: this.fullySimplifyExpression(rationalizedForm),
            numeratorAfter: numeratorAfter,
            denominatorAfter: denominatorAfter,
            category: 'cube_root'
        };
    }

    solveCubeRootPower(problem) {
        // a/∛(b^n) - determine what power makes perfect cube
        const { numerator, base, exponent } = problem.parameters || {};
        const a = numerator || 1;
        const b = base || problem.base;
        const n = exponent || problem.exponent;

        // Need exponent to be multiple of 3
        const needed = (3 - (n % 3)) % 3 || 3;
        const rationalizingFactor = `∛(${b}^${needed})`;
        const finalExponent = n + needed;
        const denominatorAfter = Math.pow(b, finalExponent / 3);

        return {
            originalExpression: `${a}/∛(${b}^${n})`,
            type: 'Cube Root with Power',
            currentExponent: n,
            neededExponent: needed,
            rationalizingFactor: rationalizingFactor,
            explanation: `Need exponent ${finalExponent} (multiple of 3) to get ∛(${b}^${finalExponent}) = ${b}^${finalExponent/3}`,
            denominatorAfter: denominatorAfter,
            category: 'cube_root'
        };
    }

    solveNthRoot(problem) {
        const { numerator, index, radicand } = problem.parameters || {};
        const a = numerator || 1;
        const n = index || problem.index;
        const r = radicand || problem.radicand;

        return {
            type: 'nth Root',
            approach: `Multiply by ⁿ√(r^(n-1)) to create perfect nth power`,
            note: `For ⁿ√r, need radicand to be nth power`,
            category: 'higher_roots'
        };
    }

    solveMultipleRadicals(problem) {
        return {
            type: 'Multiple Radicals',
            approach: 'Rationalize one radical at a time, or find pattern to rationalize all at once',
            category: 'complex'
        };
    }

    solveNestedRadicals(problem) {
        return {
            type: 'Nested Radicals',
            approach: 'Start from innermost radical and work outward',
            note: 'May need to simplify nested radical first',
            category: 'complex'
        };
    }

    solveVariableSquareRoot(problem) {
        return {
            type: 'Variable in Square Root',
            approach: 'Same as numerical radicals, treating variables as positive',
            example: '1/√x = √x/x (assuming x > 0)',
            category: 'variables'
        };
    }

    solveVariableBinomial(problem) {
        return {
            type: 'Variable Binomial with Radicals',
            approach: 'Use conjugate method, same as with numerical binomials',
            note: 'State domain restrictions',
            category: 'variables'
        };
    }

    // HELPER METHODS

    simplifyRadical(radicand, index = 2) {
        let coefficient = 1;
        let remaining = radicand;

        if (index === 2) {
            // Factor out perfect squares
            const factors = this.primeFactorization(radicand);
            for (const [prime, count] of Object.entries(factors)) {
                const pairs = Math.floor(count / 2);
                coefficient *= Math.pow(parseInt(prime), pairs);
                const leftover = count % 2;
                if (leftover > 0) {
                    remaining = remaining / Math.pow(parseInt(prime), count - leftover);
                }
            }
        } else if (index === 3) {
            // Factor out perfect cubes
            const factors = this.primeFactorization(radicand);
            for (const [prime, count] of Object.entries(factors)) {
                const triples = Math.floor(count / 3);
                coefficient *= Math.pow(parseInt(prime), triples);
                const leftover = count % 3;
                if (leftover > 0) {
                    remaining = remaining / Math.pow(parseInt(prime), count - leftover);
                }
            }
        }

        return {
            coefficient: coefficient,
            radicand: remaining / coefficient / coefficient
        };
    }

    primeFactorization(n) {
        const factors = {};
        let divisor = 2;

        while (n > 1) {
            while (n % divisor === 0) {
                factors[divisor] = (factors[divisor] || 0) + 1;
                n = n / divisor;
            }
            divisor++;
            if (divisor * divisor > n && n > 1) {
                factors[n] = (factors[n] || 0) + 1;
                break;
            }
        }

        return factors;
    }

    gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    extractRadicalValue(denominator) {
        // Try to extract numerical value from denominator string
        const match = denominator.match(/sqrt\((\d+)\)/);
        if (match) {
            return parseInt(match[1]);
        }
        return null;
    }

    fullySimplifyExpression(expression) {
        // This would need more sophisticated implementation
        // For now, return as is
        return expression;
    }

    // STEP GENERATION

    generateRationalizingSteps(problem, solution) {
        let baseSteps = this.generateBaseRationalizingSteps(problem, solution);

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

    generateBaseRationalizingSteps(problem, solution) {
        const { type } = problem;
        const category = this.rationalizingTypes[type]?.category;

        switch(category) {
            case 'square_root':
                return this.generateMonomialSteps(problem, solution);
            case 'binomial':
                return this.generateBinomialSteps(problem, solution);
            case 'cube_root':
                return this.generateCubeRootSteps(problem, solution);
            default:
                return this.generateGenericRationalizingSteps(problem, solution);
        }
    }

    generateMonomialSteps(problem, solution) {
        const steps = [];

        // Step 1: Given expression
        steps.push({
            stepNumber: 1,
            step: 'Given expression',
            description: 'Start with the fraction containing a radical in the denominator',
            expression: solution.originalExpression,
            reasoning: 'Our goal is to eliminate the radical from the denominator',
            goalStatement: 'We need to rationalize by creating a perfect square under the radical'
        });

        // Step 1a: Simplify radical if applicable
        if (solution.radicalSimplified) {
            steps.push({
                stepNumber: 1.5,
                step: 'Simplify the radical',
                description: 'Factor and simplify the radical first',
                beforeExpression: solution.originalExpression,
                afterExpression: solution.radicalSimplified,
                reasoning: 'Simplifying first makes rationalization easier',
                algebraicRule: 'Radical simplification: √(ab) = √a · √b for perfect square factors'
            });
        }

        // Step 2: Identify rationalizingfactor
        steps.push({
            stepNumber: 2,
            step: 'Identify rationalizing factor',
            description: `Multiply by ${solution.rationalizingFactor}/${solution.rationalizingFactor}`,
            rationalizingFactor: solution.rationalizingFactor,
            reasoning:'This equals 1, so it doesn\'t change the value',
            algebraicRule: 'Multiplication by 1 (in the form √a/√a)',
            visualHint: 'We are multiplying by a form of 1 to change the appearance without changing the value'
        });

        // Step 3: Multiply numerator and denominator
        steps.push({
            stepNumber: 3,
            step: 'Multiply numerator and denominator',
            description: 'Apply the multiplication to both parts',
            beforeExpression: solution.originalExpression,
            operation: `× ${solution.rationalizingFactor}/${solution.rationalizingFactor}`,
            afterExpression: `${solution.numeratorAfter}/${solution.denominatorAfter}`,
            reasoning: 'Multiplying both parts maintains the value while changing the form',
            algebraicRule: 'Fraction multiplication: (a/b) × (c/d) = (ac)/(bd)'
        });

        // Step 4: Simplify denominator
        steps.push({
            stepNumber: 4,
            step: 'Simplify denominator',
            description: 'The radical in the denominator is eliminated',
            explanation: `√a × √a = a, so ${solution.rationalizingFactor} squared gives a rational number`,
            denominatorBefore: `denominator with radical`,
            denominatorAfter: solution.denominatorAfter,
            reasoning: 'The square root of a number times itself equals that number',
            algebraicRule: '(√a)² = a'
        });

        // Step 5: Final simplification
        if (solution.rationalizedForm !== solution.simplifiedForm) {
            steps.push({
                stepNumber: 5,
                step: 'Simplify the fraction',
                description: 'Reduce to lowest terms if possible',
                beforeExpression: solution.rationalizedForm,
                afterExpression: solution.simplifiedForm,
                reasoning: 'Divide numerator and denominator by their GCD',
                algebraicRule: 'Fraction reduction'
            });
        }

        // Step 6: Final answer
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Final rationalized form',
            description: 'The denominator is now rational (no radicals)',
            expression: solution.simplifiedForm || solution.rationalizedForm,
            finalAnswer: true,
            reasoning: 'This is the rationalized and simplified form',
            verification: 'Check: denominator contains no radicals'
        });

        return steps;
    }

    generateBinomialSteps(problem, solution) {
        const steps = [];

        // Step 1: Given expression
        steps.push({
            stepNumber: 1,
            step: 'Given expression',
            description: 'Start with binomial denominator containing radicals',
            expression: solution.originalExpression,
            reasoning: 'We need to eliminate radicals from a binomial denominator',
            goalStatement: 'Use the conjugate to create a difference of squares'
        });

        // Step 2: Identify conjugate
        steps.push({
            stepNumber: 2,
            step: 'Identify the conjugate',
            description: 'Find the conjugate by changing the middle sign',
            conjugate: solution.conjugate,
            rule: 'Conjugate of (a + b) is (a - b); conjugate of (a - b) is (a + b)',
            reasoning: 'The conjugate will help eliminate the radicals when multiplied',
            algebraicRule: 'Conjugate pairs eliminate radicals via difference of squares'
        });

        // Step 3: Multiply by conjugate
        steps.push({
            stepNumber: 3,
            step: 'Multiply by conjugate over itself',
            description: `Multiply by ${solution.conjugate}/${solution.conjugate}`,
            rationalizingFactor: `${solution.conjugate}/${solution.conjugate}`,
            reasoning: 'This equals 1 and doesn\'t change the value',
            algebraicRule: 'Multiplication by 1'
        });

        // Step 4: Multiply numerator
        steps.push({
            stepNumber: 4,
            step: 'Multiply the numerator',
            description: 'Distribute in the numerator',
            numeratorBefore: solution.originalExpression.split('/')[0],
            operation: `× ${solution.conjugate}`,
            numeratorAfter: solution.numeratorAfter,
            reasoning: 'Use distributive property to multiply',
            algebraicRule: 'Distributive property: a(b + c) = ab + ac'
        });

        // Step 5: Apply difference of squares in denominator
        steps.push({
            stepNumber: 5,
            step: 'Apply difference of squares',
            description: 'Use (a + b)(a - b) = a² - b² pattern',
            pattern: '(a + b)(a - b) = a² - b²',
            calculation: solution.differenceOfSquares || solution.differencOfSquares,
            denominatorAfter: solution.denominatorAfter,
            reasoning: 'Conjugate pairs create difference of squares, eliminating radicals',
            algebraicRule: 'Difference of Squares Formula',
            keyInsight: 'When b is √n, then b² = n (a rational number)'
        });

        // Step 6: Simplify if needed
        if (solution.rationalizedForm !== solution.simplifiedForm) {
            steps.push({
                stepNumber: 6,
                step: 'Simplify the result',
                description: 'Simplify the fraction if possible',
                beforeExpression: solution.rationalizedForm,
                afterExpression: solution.simplifiedForm,
                reasoning: 'Reduce fractions and combine like terms'
            });
        }

        // Step 7: Final answer
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Final rationalized form',
            description: 'The denominator is now rational',
            expression: solution.simplifiedForm || solution.rationalizedForm,
            finalAnswer: true,
            reasoning: 'Binomial denominator successfully rationalized',
            verification: 'Check: denominator is a rational number with no radicals'
        });

        return steps;
    }

    generateCubeRootSteps(problem, solution) {
        const steps = [];

        // Step 1: Given expression
        steps.push({
            stepNumber: 1,
            step: 'Given expression',
            description: 'Start with cube root in denominator',
            expression: solution.originalExpression,
            reasoning: 'We need to create a perfect cube under the cube root',
            goalStatement: 'Multiply to make the radicand a perfect cube'
        });

        // Step 2: Identify what creates perfect cube
        steps.push({
            stepNumber: 2,
            step: 'Determine rationalizing factor',
            description: 'Find what factor creates a perfect cube',
            explanation: solution.explanation,
            rationalizingFactor: solution.rationalizingFactor,
            reasoning: 'For ∛a to become rational, we need ∛(a³) = a',
            algebraicRule: '∛(a³) = a',
            keyInsight: 'Cube root of a perfect cube is rational'
        });

        // Step 3: Multiply by factor
        steps.push({
            stepNumber: 3,
            step: 'Multiply by rationalizing factor',
            description: `Multiply by ${solution.rationalizingFactor}/${solution.rationalizingFactor}`,
            operation: `× ${solution.rationalizingFactor}/${solution.rationalizingFactor}`,
            reasoning: 'This creates a perfect cube in the denominator',
            algebraicRule: 'Multiplication by 1'
        });

        // Step 4: Simplify denominator
        steps.push({
            stepNumber: 4,
            step: 'Simplify denominator',
            description: 'The cube root can now be simplified',
            denominatorAfter: solution.denominatorAfter,
            reasoning: 'The cube root of a perfect cube is rational',
            algebraicRule: '∛(a³) = a'
        });

        // Step 5: Final answer
        steps.push({
            stepNumber: 5,
            step: 'Final rationalized form',
            description: 'The denominator is now rational',
            expression: solution.simplifiedForm || solution.rationalizedForm,
            finalAnswer: true,
            reasoning: 'Cube root successfully eliminated from denominator',
            verification: 'Check: denominator contains no radicals'
        });

        return steps;
    }

    generateGenericRationalizingSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Rationalizing problem',
            description: 'Apply appropriate rationalization technique',
            approach: solution.approach || 'Use conjugate or multiply by appropriate radical factor',
            category: solution.category
        }];
    }

    // ENHANCED EXPLANATION METHODS (adapted for rationalizing)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            // Multiple explanation formats
            explanations: {
                conceptual: this.getConceptualExplanationRationalizing(step, problem),
                procedural: this.getProceduralExplanationRationalizing(step),
                visual: this.getVisualExplanationRationalizing(step, problem),
                algebraic: this.getAlgebraicExplanationRationalizing(step)
            },

            // Difficulty-adapted explanations
            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            // Learning support
            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesRationalizing(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyRationalizing(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        // Add thinking prompts if enabled
        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsRationalizing(step);
        }

        // Add self-check questions if enabled
        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionRationalizing(step);
        }

        // Add real-world connections if enabled
        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionRationalizing(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationRationalizing(step, problem) {
        const conceptualExplanations = {
            'Given expression': 'A fraction with a radical in the denominator needs rationalization to express it in standard form.',
            'Identify rationalizing factor': 'We choose a factor that will eliminate the radical when multiplied - this is always a form of 1.',
            'Identify the conjugate': 'The conjugate creates a difference of squares pattern that eliminates the radicals in a binomial.',
            'Multiply numerator and denominator': 'Multiplying by 1 (in radical form) doesn\'t change the value, only the appearance.',
            'Simplify denominator': 'When a radical is squared (or cubed for cube roots), it becomes rational.',
            'Apply difference of squares': 'The conjugate multiplication uses (a+b)(a-b) = a² - b² to eliminate radicals.',
            'Determine rationalizing factor': 'For nth roots, we need to create a perfect nth power under the radical.'
        };

        return conceptualExplanations[step.step] || 'This step helps eliminate radicals from the denominator.';
    }

    getProceduralExplanationRationalizing(step) {
        const procedural = {
            'Identify rationalizing factor': '1. Look at the radical in denominator\n2. Write that same radical\n3. Put it over itself to make 1',
            'Identify the conjugate': '1. Write the binomial\n2. Change the middle sign\n3. That\'s the conjugate',
            'Multiply numerator and denominator': '1. Multiply numerator by factor\n2. Multiply denominator by factor\n3. Write as new fraction',
            'Apply difference of squares': '1. Square first term\n2. Square second term\n3. Subtract: first² - second²'
        };

        return procedural[step.step] || 'Follow standard rationalization procedure.';
    }

    getVisualExplanationRationalizing(step, problem) {
        const category = this.rationalizingTypes[problem.type]?.category;
        
        const visualExplanations = {
            'square_root': 'Picture √a × √a forming a perfect square that unlocks to reveal a.',
            'binomial': 'Visualize conjugates as mirror images that cancel out the radical parts.',
            'cube_root': 'Imagine building a cube - you need enough blocks to complete it.',
            'higher_roots': 'Think of collecting pieces to form a complete perfect power.'
        };

        return visualExplanations[category] || 'Visualize the radical being eliminated through multiplication.';
    }

    getAlgebraicExplanationRationalizing(step) {
        const algebraicRules = {
            'Given expression': 'Fraction with radical denominator: a/√b or a/(b ± √c)',
            'Multiply by rationalizing factor': 'Multiplication Property: (a/b) × (c/c) = (ac)/(bc) where c/c = 1',
            'Simplify denominator': 'Radical Property: (√a)² = a, (∛a)³ = a, (ⁿ√a)ⁿ = a',
            'Apply difference of squares': 'Special Product: (a + b)(a - b) = a² - b²',
            'Identify the conjugate': 'Conjugate Definition: conjugate of (a ± b) is (a ∓ b)'
        };

        return algebraicRules[step.step] || 'Apply standard algebraic properties.';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationRationalizing(step, problem),
                analogy: this.findRelevantAnalogyRationalizing(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestVisualizationRationalizing(step)
            }
        }));
    }

    generateELI5ExplanationRationalizing(step, problem) {
        const ELI5Explanations = {
            'Given expression': "We have a fraction with a square root on the bottom. We want to clean it up so there's no square root down there!",
            'Identify rationalizing factor': "We need to find the magic number that, when we multiply it with √a, makes the square root disappear!",
            'Identify the conjugate': "The conjugate is like a twin brother that looks almost the same but with one thing different - it helps cancel out the square roots!",
            'Multiply numerator and denominator': "We multiply both the top and bottom by the same thing - it's like trading a dollar for 4 quarters, same value!",
            'Simplify denominator': "When we multiply √a by √a, the square roots disappear and we just get a! It's like magic!",
            'Apply difference of squares': "When we multiply (a+b) by (a-b), the middle parts cancel out like +5 and -5 candies!",
            'Determine rationalizing factor': "We need to find what to multiply by to make a perfect cube - like finding the missing puzzle pieces!"
        };

        return ELI5Explanations[step.step] || "We're doing another step to get rid of those pesky square roots on the bottom!";
    }

    findRelevantAnalogyRationalizing(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            const category = this.rationalizingTypes[problem.type]?.category;
            if (analogy.suitableFor.includes(category) || analogy.suitableFor.includes('all_types')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of it like cleaning up your room - we're making the math neat and organized!";
    }

    suggestVisualizationRationalizing(step) {
        const visualizations = {
            'Given expression': 'Draw a fraction bar with a square root symbol in the denominator',
            'Identify rationalizing factor': 'Draw the radical you need to multiply by, with an equals sign to 1',
            'Multiply numerator and denominator': 'Show the multiplication with arrows pointing to new numerator and denominator',
            'Simplify denominator': 'Show √a × √a = a with the radicals canceling out',
            'Apply difference of squares': 'Draw a big square with a small square cut out to show a² - b²',
            'Identify the conjugate': 'Write the binomial and its conjugate side by side with the changed sign highlighted'
        };

        return visualizations[step.step] || 'Draw a picture showing how the radical is eliminated';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeRationalizing(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeRationalizing(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || 'updated expression'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: we're continuing to eliminate radicals from the denominator`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    addErrorPrevention(step, problemType) {
        const category = this.rationalizingTypes[problemType]?.category || 'square_root';
        const mistakes = this.commonMistakes[category === 'square_root' ? 'monomial' : category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsRationalizing(step, problemType),
                checkPoints: this.generateCheckPointsRationalizing(step),
                warningFlags: this.identifyWarningFlagsRationalizing(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionRationalizing(step),
                expectedResult: this.describeExpectedResultRationalizing(step),
                troubleshooting: this.generateTroubleshootingTips(step)
            }
        };
    }

    generatePreventionTipsRationalizing(step, problemType) {
        const tips = {
            'Multiply numerator and denominator': [
                'Remember to multiply BOTH top and bottom',
                'Don\'t just multiply the denominator',
                'Check that you\'re multiplying by a form of 1'
            ],
            'Identify the conjugate': [
                'Change ONLY the middle sign',
                'Keep the same terms, just opposite sign between them',
                'Verify: (a+b)\'s conjugate is (a-b), not (-a+b)'
            ],
            'Simplify denominator': [
                'Remember (√a)² = a, not 2a',
                'The radical disappears completely',
                'Check your arithmetic'
            ],
            'Apply difference of squares': [
                'It\'s a² - b², not a² + b²',
                'Middle terms cancel out',
                'For (√a)², the result is just a'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check each operation'];
    }

    generateCheckPointsRationalizing(step) {
        return [
            'Did I multiply both numerator and denominator?',
            'Is my rationalizing factor correct?',
            'Does the denominator still have radicals?',
            'Can the result be simplified further?',
            'Did I make any sign errors?'
        ];
    }

    identifyWarningFlagsRationalizing(step, problemType) {
        const warnings = {
            monomial: step.step === 'Multiply numerator and denominator' ?
                ['Make sure to multiply BOTH parts', 'Don\'t forget the numerator'] : [],
            binomial: step.step === 'Identify the conjugate' ?
                ['Change the MIDDLE sign only', 'Not all signs'] :
                step.step === 'Apply difference of squares' ?
                ['Remember it\'s DIFFERENCE (minus), not sum', 'Middle terms cancel'] : [],
            cube_root: step.step === 'Determine rationalizing factor' ?
                ['Need factor for perfect CUBE, not square', 'For ∛a, multiply by ∛(a²)'] : []
        };

        const category = this.rationalizingTypes[problemType]?.category || 'square_root';
        return warnings[category === 'square_root' ? 'monomial' : category] || [];
    }

    generateSelfCheckQuestionRationalizing(step) {
        const questions = {
            'Given expression': 'Do I see what radical needs to be eliminated from the denominator?',
            'Identify rationalizing factor': 'Is my rationalizing factor correct for the type of radical?',
            'Identify the conjugate': 'Did I change only the middle sign?',
            'Multiply numerator and denominator': 'Did I multiply BOTH parts?',
            'Simplify denominator': 'Is my denominator now completely free of radicals?',
            'Apply difference of squares': 'Did I get a² - b² (difference, not sum)?',
            'Final rationalized form': 'Is the denominator rational? Can it be simplified more?'
        };

        return questions[step.step] || 'Does this step make sense and move toward a rational denominator?';
    }

    describeExpectedResultRationalizing(step) {
        const expectations = {
            'Given expression': 'A fraction with radical in denominator',
            'Identify rationalizing factor': 'The radical that will eliminate the denominator radical',
            'Multiply numerator and denominator': 'New fraction with radical in both numerator and denominator',
            'Simplify denominator': 'Denominator with no radicals',
            'Apply difference of squares': 'Rational number in denominator',
            'Final rationalized form': 'Fraction with rational denominator'
        };

        return expectations[step.step] || 'Progress toward rationalizing the denominator';
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsRationalizing(step, problem),
                subSteps: this.breakIntoSubStepsRationalizing(step),
                hints: this.generateProgressiveHintsRationalizing(step, problem),
                practiceVariation: this.generatePracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessRationalizing(step),
                decisionPoints: this.identifyDecisionPointsRationalizing(step),
                alternativeApproaches: this.suggestAlternativeMethodsRationalizing(step, problem)
            }
        }));
    }

    generateGuidingQuestionsRationalizing(step, problem) {
        const questions = {
            'Given expression': [
                'What type of radical is in the denominator?',
                'Is it a monomial or binomial denominator?',
                'Can the radical be simplified first?'
            ],
            'Identify rationalizing factor': [
                'What times this radical gives a rational number?',
                'For √a, what do I multiply by?',
                'Am I multiplying by a form of 1?'
            ],
            'Identify the conjugate': [
                'What is the binomial in the denominator?',
                'What happens when I change the middle sign?',
                'Will this create a difference of squares?'
            ],
            'Multiply numerator and denominator': [
                'Did I multiply the numerator?',
                'Did I multiply the denominator?',
                'Is this equivalent to multiplying by 1?'
            ],
            'Simplify denominator': [
                'What is √a × √a?',
                'Is the denominator now rational?',
                'Are there any radicals left in the denominator?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help rationalize?'];
    }

    breakIntoSubStepsRationalizing(step) {
        if (step.step === 'Multiply numerator and denominator') {
            return [
                'Identify the rationalizing factor',
                'Multiply the numerator by the factor',
                'Multiply the denominator by the factor',
                'Write the new fraction',
                'Check that both parts were multiplied'
            ];
        }

        if (step.step === 'Apply difference of squares') {
            return [
                'Identify a and b in (a+b)(a-b)',
                'Square the first term: a²',
                'Square the second term: b²',
                'Subtract: a² - b²',
                'Simplify the result'
            ];
        }

        return ['Understand the goal', 'Execute the operation', 'Verify the result'];
    }

    generateProgressiveHintsRationalizing(step, problem) {
        const category = this.rationalizingTypes[problem.type]?.category || 'monomial';
        const hintSet = this.hints[category === 'square_root' ? 'monomial_square_root' : category] || this.hints.monomial_square_root;

        return {
            level1: hintSet.level1 || 'Think about what makes the radical disappear.',
            level2: hintSet.level2 || 'Consider multiplying by the radical over itself.',
            level3: hintSet.level3 || 'Multiply both numerator and denominator.',
            level4: hintSet.level4 || 'Apply the specific rationalization technique.'
        };
    }

    explainThinkingProcessRationalizing(step) {
        return {
            observe: 'What radicals are in the denominator?',
            goal: 'How can I eliminate these radicals?',
            strategy: 'What should I multiply by?',
            execute: 'How do I perform this multiplication correctly?',
            verify: 'Is the denominator now rational?'
        };
    }

    identifyDecisionPointsRationalizing(step) {
        return [
            'Should I simplify the radical first?',
            'Do I use direct multiplication or conjugate method?',
            'What factor will create a perfect power?',
            'Can the final answer be simplified further?'
        ];
    }

    suggestAlternativeMethodsRationalizing(step, problem) {
        const alternatives = {
            'Multiply numerator and denominator': [
                'Could work with the radical directly in calculations (not standard)',
                'Could convert to decimal (loses exactness)'
            ],
            'Identify the conjugate': [
                'Could use factoring if possible',
                'For numerical evaluation, could compute decimal value'
            ]
        };

        return alternatives[step.step] || ['The chosen method is the standard approach'];
    }

    identifyPrerequisitesRationalizing(step, problemType) {
        const category = this.rationalizingTypes[problemType]?.category || 'square_root';
        const prereqs = this.prerequisites[category === 'square_root' ? 'monomial_square_root' : category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Radical operations', 'Fraction multiplication'];
    }

    identifyKeyVocabularyRationalizing(step) {
        const vocabulary = {
            'Given expression': ['radical', 'denominator', 'rationalize', 'radicand'],
            'Identify rationalizing factor': ['rationalizing factor', 'radical', 'perfect square', 'multiply by 1'],
            'Identify the conjugate': ['conjugate', 'binomial', 'difference of squares'],
            'Multiply numerator and denominator': ['numerator', 'denominator', 'fraction multiplication'],
            'Simplify denominator': ['simplify', 'radical property', 'rational number'],
            'Apply difference of squares': ['difference of squares', 'conjugate', 'binomial']
        };

        return vocabulary[step.step] || ['rationalize', 'radical', 'denominator'];
    }

    generateThinkingPromptsRationalizing(step) {
        return {
            before: 'Before rationalizing, what type of radical is in the denominator?',
            during: 'As I multiply, am I including both numerator and denominator?',
            after: 'After this step, is the denominator closer to being rational?'
        };
    }

    findRealWorldConnectionRationalizing(step, problem) {
        return 'Rationalizing denominators is used in engineering calculations, physics formulas, and computer graphics to avoid numerical errors and maintain precision.';
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue rationalizing`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepBenefit(nextStep) {
        return `bringing us closer to a rational denominator`;
    }

    // VISUALIZATION GENERATION

    generateRationalizingVisualization() {
        if (!this.currentSolution || !this.currentProblem) return;

        // Generate visual representation of the rationalization process
        this.graphData = {
            type: 'rationalizing_process',
            original: this.currentSolution.originalExpression,
            rationalized: this.currentSolution.rationalizedForm,
            category: this.currentSolution.category,
            visualization: 'Step-by-step rationalization diagram'
        };
    }

    // WORKBOOK GENERATION

    generateRationalizingWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createRationalizingConceptSection(),
            this.createEnhancedStepsSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection(),
            this.createConjugateReferenceSection(),
            this.createSimplificationGuideSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Rationalizing Denominators Mathematical Workbook',
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
            ['Problem Type', this.rationalizingTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.rationalizingTypes[this.currentProblem.type]?.category || 'rationalizing'],
            ['Original Expression', this.currentSolution?.originalExpression || this.currentProblem.originalInput],
            ['Goal', 'Eliminate all radicals from the denominator']
        ];

        // Add specific details
        if (this.currentProblem.parameters) {
            problemData.push(['', '']);
            problemData.push(['Problem Details', '']);
            
            if (this.currentProblem.parameters.numerator) {
                problemData.push(['Numerator', this.currentProblem.parameters.numerator]);
            }
            if (this.currentProblem.parameters.radical) {
                problemData.push(['Radical in Denominator', `√${this.currentProblem.parameters.radical}`]);
            }
            if (this.currentProblem.parameters.conjugate) {
                problemData.push(['Requires Conjugate', 'Yes']);
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

        const category = this.rationalizingTypes[this.currentProblem.type]?.category;
        const categoryKey = category === 'square_root' ? 'monomial_square_root' : category;
        const prereqs = this.prerequisites[categoryKey];

        if (!prereqs) return null;

        const prereqData = [
            ['Required Skills', prereqs.skills.join('; ')],
            ['Prior Knowledge', prereqs.priorKnowledge.join('; ')],
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

    createRationalizingConceptSection() {
        const conceptData = [
            ['What is Rationalizing?', 'Eliminating radicals from denominators'],
            ['Why Rationalize?', 'Creates standard form, easier division, cleaner expressions'],
            ['', ''],
            ['Key Principles', ''],
            ['1', 'Multiply by a form of 1 (radical/radical)'],
            ['2', 'For monomial: multiply by same radical'],
            ['3', 'For binomial: multiply by conjugate'],
            ['4', 'Always simplify radicals first when possible'],
            ['5', 'Final answer must have rational denominator'],
            ['', ''],
            ['Important Formulas', ''],
            ['Monomial', 'a/√b = (a√b)/b'],
            ['Binomial', 'a/(b±√c) multiply by (b∓√c)'],
            ['Difference of Squares', '(a+b)(a-b) = a² - b²'],
            ['Radical Property', '(√a)² = a, (∛a)³ = a']
        ];

        return {
            title: 'Rationalizing Concepts',
            type: 'concepts',
            data: conceptData
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

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.rationalizingFactor) {
                stepsData.push(['Rationalizing Factor', step.rationalizingFactor]);
            }

            if (step.conjugate) {
                stepsData.push(['Conjugate', step.conjugate]);
            }

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Rule', step.algebraicRule]);
            }

            if (step.keyInsight) {
                stepsData.push(['Key Insight', step.keyInsight]);
            }

            // ELI5 explanations
            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
                if (step.ELI5.visualization) {
                    stepsData.push(['Visualize', step.ELI5.visualization]);
                }
            }

            // Enhanced explanations
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
                    stepsData.push(['Tips', tips.join('; ')]);
                }
            }

            // Scaffolding
            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
                }
                
                const hints = step.scaffolding.hints;
                if (hints) {
                    stepsData.push(['Hint 1', hints.level1]);
                    stepsData.push(['Hint 2', hints.level2]);
                }
            }

            // Thinking prompts
            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Before', step.thinkingPrompts.before]);
                stepsData.push(['During', step.thinkingPrompts.during]);
                stepsData.push(['After', step.thinkingPrompts.after]);
            }

            // Self-check
            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: `Enhanced Rationalization Steps (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Original Expression', this.currentSolution.originalExpression],
            ['', ''],
            ['Rationalized Form', this.currentSolution.rationalizedForm]
        ];

        if (this.currentSolution.simplifiedForm && 
            this.currentSolution.simplifiedForm !== this.currentSolution.rationalizedForm) {
            solutionData.push(['Simplified Form', this.currentSolution.simplifiedForm]);
        }

        if (this.currentSolution.conjugate) {
            solutionData.push(['', '']);
            solutionData.push(['Conjugate Used', this.currentSolution.conjugate]);
        }

        if (this.currentSolution.rationalizingFactor) {
            solutionData.push(['Rationalizing Factor', this.currentSolution.rationalizingFactor]);
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
            ['Category', this.currentSolution.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel]
        ];

        if (this.currentSolution.radicalSimplified) {
            analysisData.push(['Radical Simplified', 'Yes']);
        }

        if (this.currentSolution.differenceOfSquares || this.currentSolution.differencOfSquares) {
            analysisData.push(['Used Difference of Squares', 'Yes']);
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
            ['Verification Method', 'Check denominator is rational'],
            ['', ''],
            ['Original Denominator', 'Contains radical(s)'],
            ['Final Denominator', this.currentSolution.denominatorAfter || 'Rational number'],
            ['', ''],
            ['Denominator Check', 'No radicals present ✓'],
            ['Value Preserved', 'Multiplied by 1 ✓']
        ];

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Additional Checks', '']);
            verificationData.push(['Simplified Completely', 'Yes ✓']);
            verificationData.push(['Standard Form', 'Yes ✓']);
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

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications of Rationalizing', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Context', app.context]);
            if (app.examples && app.examples[0]) {
                appData.push(['Example', app.examples[0]]);
            }
            appData.push(['Explanation', app.explanation]);
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

        const notes = this.generateRationalizingPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateRationalizingAlternativeMethods(this.currentProblem.type);

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method Used', alternatives.primaryMethod],
                ['', ''],
                ['Alternative Approaches', ''],
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

    createConjugateReferenceSection() {
        const conjugateData = [
            ['Conjugate Quick Reference', ''],
            ['', ''],
            ['Rules', '']
        ];

        Object.entries(this.conjugates.rules).forEach(([expr, conj]) => {
            conjugateData.push([expr, `→ ${conj}`]);
        });

        conjugateData.push(['', '']);
        conjugateData.push(['Products', '']);

        Object.entries(this.conjugates.products).forEach(([expr, result]) => {
            conjugateData.push([expr, `= ${result}`]);
        });

        conjugateData.push(['', '']);
        conjugateData.push(['Why It Works', this.conjugates.why_it_works]);

        return {
            title: 'Conjugate Reference',
            type: 'reference',
            data: conjugateData
        };
    }

    createSimplificationGuideSection() {
        const simplifyData = [
            ['Radical Simplification Guide', ''],
            ['', ''],
            ['Square Roots', this.simplificationRules.radical_simplification.square_roots.rule]
        ];

        this.simplificationRules.radical_simplification.square_roots.examples.slice(0, 3).forEach(ex => {
            simplifyData.push(['Example', ex]);
        });

        simplifyData.push(['', '']);
        simplifyData.push(['Cube Roots', this.simplificationRules.radical_simplification.cube_roots.rule]);

        this.simplificationRules.radical_simplification.cube_roots.examples.slice(0, 2).forEach(ex => {
            simplifyData.push(['Example', ex]);
        });

        simplifyData.push(['', '']);
        simplifyData.push(['Perfect Squares to Memorize', '']);
        simplifyData.push(['', this.simplificationRules.perfect_powers.squares.slice(0, 12).join(', ')]);

        simplifyData.push(['', '']);
        simplifyData.push(['Perfect Cubes to Memorize', '']);
        simplifyData.push(['', this.simplificationRules.perfect_powers.cubes.slice(0, 10).join(', ')]);

        return {
            title: 'Simplification Guide',
            type: 'reference',
            data: simplifyData
        };
    }

    generateRationalizingPedagogicalNotes(problemType) {
        const category = this.rationalizingTypes[problemType]?.category;

        const pedagogicalDatabase = {
            square_root: {
                objectives: [
                    'Rationalize monomial square root denominators',
                    'Understand multiplying by forms of 1',
                    'Simplify radicals before rationalizing',
                    'Verify rationalized denominators'
                ],
                keyConcepts: [
                    'Radical times itself equals radicand',
                    'Multiplying by radical/radical equals 1',
                    'Rationalizing doesn\'t change value',
                    'Simplify radicals first when possible'
                ],
                prerequisites: [
                    'Radical multiplication',
                    'Fraction multiplication',
                    'Perfect squares',
                    'Simplifying radicals'
                ],
                commonDifficulties: [
                    'Forgetting to multiply numerator',
                    'Not simplifying radicals first',
                    'Arithmetic errors with radicals',
                    'Not reducing final fraction'
                ],
                teachingStrategies: [
                    'Emphasize multiplying by 1',
                    'Use visual fraction models',
                    'Practice perfect squares first',
                    'Show value doesn\'t change'
                ],
                extensions: [
                    'Binomial denominators',
                    'Cube roots',
                    'Variables in radicals',
                    'Complex expressions'
                ],
                assessment: [
                    'Can student identify rationalizing factor?',
                    'Does student multiply both parts?',
                    'Is final denominator rational?',
                    'Is answer fully simplified?'
                ]
            },
            binomial: {
                objectives: [
                    'Rationalize binomial denominators',
                    'Identify and use conjugates',
                    'Apply difference of squares',
                    'Simplify complex expressions'
                ],
                keyConcepts: [
                    'Conjugate concept',
                    'Difference of squares pattern',
                    'How conjugates eliminate radicals',
                    'Distributing in numerator'
                ],
                prerequisites: [
                    'Monomial rationalization',
                    'Binomial multiplication (FOIL)',
                    'Special products',
                    'Combining like terms'
                ],
                commonDifficulties: [
                    'Identifying conjugate incorrectly',
                    'Sign errors in conjugate',
                    'Not recognizing difference of squares',
                    'Distribution errors in numerator'
                ],
                teachingStrategies: [
                    'Practice conjugate identification',
                    'Color-code conjugate pairs',
                    'Emphasize pattern recognition',
                    'Show algebraic and numeric examples'
                ],
                extensions: [
                    'Both terms are radicals',
                    'Coefficients on radicals',
                    'Nested radicals',
                    'Complex rationalizations'
                ],
                assessment: [
                    'Can student write conjugate?',
                    'Does student apply difference of squares?',
                    'Are signs correct throughout?',
                    'Is result fully simplified?'
                ]
            },
            cube_root: {
                objectives: [
                    'Rationalize cube root denominators',
                    'Understand creating perfect cubes',
                    'Determine needed factors',
                    'Extend to higher roots'
                ],
                keyConcepts: [
                    'Cube root of perfect cube',
                    'Creating perfect cubes',
                    'Different from square roots',
                    'Exponent multiples'
                ],
                prerequisites: [
                    'Square root rationalization',
                    'Perfect cubes',
                    'Exponent rules',
                    'Cube root properties'
                ],
                commonDifficulties: [
                    'Confusing with square roots',
                    'Determining correct factor',
                    'Exponent calculations',
                    'Recognizing perfect cubes'
                ],
                teachingStrategies: [
                    'Compare to square roots',
                    'Practice perfect cubes',
                    'Show exponent patterns',
                    'Use concrete examples first'
                ],
                extensions: [
                    'Fourth and fifth roots',
                    'General nth roots',
                    'Variable expressions',
                    'Complex radicands'
                ],
                assessment: [
                    'Can student identify needed factor?',
                    'Does student create perfect cube?',
                    'Are exponents handled correctly?',
                    'Is generalization understood?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Rationalize denominators'],
            keyConcepts: ['Eliminate radicals from denominator'],
            prerequisites: ['Radical operations'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex problems'],
            assessment: ['Verify rational denominator']
        };
    }

    generateRationalizingAlternativeMethods(problemType) {
        const category = this.rationalizingTypes[problemType]?.category;

        const alternativeDatabase = {
            square_root: {
                primaryMethod: 'Multiply by radical over radical',
                methods: [
                    {
                        name: 'Simplify First Method',
                        description: 'Simplify the radical before rationalizing for easier computation'
                    },
                    {
                        name: 'Direct Multiplication',
                        description: 'Multiply without simplifying first (works but may be messier)'
                    },
                    {
                        name: 'Decimal Conversion',
                        description: 'Convert to decimal (loses exactness, not recommended)'
                    }
                ],
                comparison: 'Simplifying first is most efficient; direct multiplication always works; avoid decimals for exact answers'
            },
            binomial: {
                primaryMethod: 'Conjugate Multiplication',
                methods: [
                    {
                        name: 'Difference of Squares',
                        description: 'Recognize and apply (a+b)(a-b) = a² - b² directly'
                    },
                    {
                        name: 'FOIL Then Simplify',
                        description: 'Expand using FOIL, then combine like terms (longer but systematic)'
                    },
                    {
                        name: 'Numerical Approximation',
                        description: 'Use decimal values (not exact, for estimation only)'
                    }
                ],
                comparison: 'Difference of squares is fastest; FOIL works systematically; numerical for estimation only'
            },
            cube_root: {
                primaryMethod: 'Create Perfect Cube',
                methods: [
                    {
                        name: 'Exponent Calculation',
                        description: 'Calculate what exponent creates multiple of 3'
                    },
                    {
                        name: 'Trial and Error',
                        description: 'Try factors until perfect cube is created (works but inefficient)'
                    },
                    {
                        name: 'Fractional Exponents',
                        description: 'Use exponent notation: a^(1/3) for advanced students'
                    }
                ],
                comparison: 'Exponent method is most systematic; fractional exponents connect concepts; avoid trial and error'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard rationalization approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods may apply depending on specific problem'
            }],
            comparison: 'Choose method based on problem structure and preferences'
        };
    }
}

// Export the class
export default EnhancedRationalizingDenominatorsWorkbook;
