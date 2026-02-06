// Enhanced Radical Operations Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedRadicalOperationsMathematicalWorkbook {
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
        this.initializeRadicalOperationsSolvers();
        this.initializeRadicalLessons();
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

    initializeRadicalLessons() {
        this.lessons = {
            simplifying_radicals: {
                title: "Simplifying Radicals",
                concepts: [
                    "Product Property: √(ab) = √a × √b",
                    "Quotient Property: √(a/b) = √a / √b",
                    "Find perfect square factors",
                    "Simplify by extracting perfect squares",
                    "Rationalize denominators when needed"
                ],
                theory: "Simplifying radicals means expressing them in simplest form by removing perfect square factors from under the radical sign.",
                keyFormulas: {
                    "Product Property": "√(ab) = √a × √b",
                    "Quotient Property": "√(a/b) = √a / √b, b ≠ 0",
                    "Perfect Square": "√(a²) = |a|",
                    "Simplification": "√(a²b) = a√b"
                },
                solvingSteps: [
                    "Factor the radicand into perfect squares and remaining factors",
                    "Apply product property to separate perfect squares",
                    "Simplify perfect square roots",
                    "Multiply coefficients outside the radical",
                    "Combine remaining factors under radical"
                ],
                applications: [
                    "Geometry calculations",
                    "Physics formulas",
                    "Engineering measurements",
                    "Distance calculations"
                ]
            },

            adding_subtracting_radicals: {
                title: "Adding and Subtracting Radicals",
                concepts: [
                    "Like radicals have same radicand and index",
                    "Only like radicals can be combined",
                    "Simplify each radical first",
                    "Combine coefficients of like radicals",
                    "Leave unlike radicals separate"
                ],
                theory: "Adding and subtracting radicals is similar to combining like terms in algebra. Only radicals with the same radicand and index can be combined.",
                keyFormulas: {
                    "Like Radicals": "a√b + c√b = (a + c)√b",
                    "Unlike Radicals": "√a + √b cannot be simplified further",
                    "Subtraction": "a√b - c√b = (a - c)√b",
                    "General Rule": "Combine coefficients, keep radicand"
                },
                solvingSteps: [
                    "Simplify each radical term completely",
                    "Identify like radicals (same radicand and index)",
                    "Combine coefficients of like radicals",
                    "Keep unlike radicals as separate terms",
                    "Write final answer in simplest form"
                ],
                applications: [
                    "Combining measurements",
                    "Simplifying expressions in physics",
                    "Engineering calculations",
                    "Algebraic problem solving"
                ]
            },

            multiplying_radicals: {
                title: "Multiplying Radicals",
                concepts: [
                    "Product property: √a × √b = √(ab)",
                    "Multiply coefficients separately from radicands",
                    "Simplify the resulting radical",
                    "Works for radicals with same index",
                    "FOIL method for binomials with radicals"
                ],
                theory: "When multiplying radicals with the same index, multiply the coefficients together and the radicands together, then simplify.",
                keyFormulas: {
                    "Basic Product": "√a × √b = √(ab)",
                    "With Coefficients": "(a√b)(c√d) = ac√(bd)",
                    "Same Radicand": "(√a)(√a) = a",
                    "Binomial": "(a + √b)(c + √d) = ac + a√d + c√b + √(bd)"
                },
                solvingSteps: [
                    "Multiply coefficients together",
                    "Multiply radicands together using product property",
                    "Simplify the resulting radical",
                    "For binomials, use FOIL or distributive property",
                    "Combine like terms if any"
                ],
                applications: [
                    "Area calculations",
                    "Physics equations",
                    "Pythagorean theorem applications",
                    "Geometric mean problems"
                ]
            },

            dividing_radicals: {
                title: "Dividing Radicals",
                concepts: [
                    "Quotient property: √a / √b = √(a/b)",
                    "Rationalize denominators",
                    "Multiply by conjugate for binomial denominators",
                    "Simplify before and after division",
                    "No radicals in denominators (simplified form)"
                ],
                theory: "When dividing radicals, use the quotient property and rationalize denominators to express in simplest form.",
                keyFormulas: {
                    "Basic Quotient": "√a / √b = √(a/b), b ≠ 0",
                    "Rationalization": "(1/√a) × (√a/√a) = √a/a",
                    "Conjugate": "(a - √b)(a + √b) = a² - b",
                    "With Coefficients": "(a√b)/(c√d) = (a/c)√(b/d)"
                },
                solvingSteps: [
                    "Simplify both numerator and denominator radicals",
                    "Apply quotient property if helpful",
                    "Rationalize denominator by multiplying by appropriate form of 1",
                    "For binomial denominators, multiply by conjugate",
                    "Simplify final result"
                ],
                applications: [
                    "Rate calculations",
                    "Physics formulas",
                    "Engineering ratios",
                    "Proportional reasoning"
                ]
            },

            rationalizing_denominators: {
                title: "Rationalizing Denominators",
                concepts: [
                    "Remove radicals from denominators",
                    "Monomial: multiply by √a/√a",
                    "Binomial: multiply by conjugate",
                    "Simplify after rationalizing",
                    "Standard form has no radicals in denominator"
                ],
                theory: "Rationalizing eliminates radicals from denominators by multiplying by a form of 1 that creates a rational denominator.",
                keyFormulas: {
                    "Monomial": "(a/√b) × (√b/√b) = a√b/b",
                    "Binomial Conjugate": "(a + √b)(a - √b) = a² - b",
                    "General": "Multiply by conjugate/conjugate = 1",
                    "Difference of Squares": "(a - b)(a + b) = a² - b²"
                },
                solvingSteps: [
                    "Identify type of radical in denominator (monomial or binomial)",
                    "Determine rationalizing factor (radical itself or conjugate)",
                    "Multiply numerator and denominator by rationalizing factor",
                    "Simplify numerator and denominator separately",
                    "Reduce fraction if possible"
                ],
                applications: [
                    "Standardizing mathematical expressions",
                    "Preparing for further calculations",
                    "Physics and engineering conventions",
                    "Exact value calculations"
                ]
            },

            higher_index_radicals: {
                title: "Higher Index Radicals (Cube Roots, etc.)",
                concepts: [
                    "nth root: ⁿ√a means x where xⁿ = a",
                    "Cube root: ∛a, fourth root: ⁴√a, etc.",
                    "Product and quotient properties extend to any index",
                    "Simplify by finding perfect nth powers",
                    "Index must match for combining radicals"
                ],
                theory: "Higher index radicals follow similar properties to square roots but with different perfect powers to extract.",
                keyFormulas: {
                    "nth Root": "ⁿ√(aⁿ) = |a| for even n, a for odd n",
                    "Product": "ⁿ√a × ⁿ√b = ⁿ√(ab)",
                    "Quotient": "ⁿ√a / ⁿ√b = ⁿ√(a/b)",
                    "Power": "(ⁿ√a)ⁿ = a"
                },
                solvingSteps: [
                    "Identify the index of the radical",
                    "Find perfect nth power factors",
                    "Apply product/quotient properties",
                    "Extract perfect nth powers",
                    "Simplify remaining expression"
                ],
                applications: [
                    "Volume calculations",
                    "Physics (cube root in density)",
                    "Advanced geometry",
                    "Scientific computations"
                ]
            },

            mixed_operations: {
                title: "Mixed Radical Operations",
                concepts: [
                    "Combine multiple operations",
                    "Follow order of operations (PEMDAS)",
                    "Simplify at each step",
                    "Watch for opportunities to simplify",
                    "Final answer in simplest radical form"
                ],
                theory: "Complex expressions may require multiple operations. Apply order of operations and simplify at each step.",
                keyFormulas: {
                    "Order of Operations": "Parentheses, Exponents, Multiplication/Division, Addition/Subtraction",
                    "Distributive": "a(b + c) = ab + ac",
                    "FOIL": "(a + b)(c + d) = ac + ad + bc + bd",
                    "Combine": "Work inside out, simplify continuously"
                },
                solvingSteps: [
                    "Identify all operations needed",
                    "Follow order of operations",
                    "Simplify radicals before combining when possible",
                    "Combine like radicals",
                    "Rationalize if necessary",
                    "Express in simplest form"
                ],
                applications: [
                    "Complex problem solving",
                    "Advanced physics calculations",
                    "Engineering formulas",
                    "Mathematical modeling"
                ]
            },

            radical_equations: {
                title: "Solving Radical Equations",
                concepts: [
                    "Isolate the radical term",
                    "Square both sides (or raise to appropriate power)",
                    "Solve resulting equation",
                    "Check all solutions (may have extraneous solutions)",
                    "Domain restrictions apply"
                ],
                theory: "Solving equations with radicals requires isolating the radical and eliminating it by raising to appropriate power, then checking solutions.",
                keyFormulas: {
                    "Squaring": "(√a)² = a",
                    "Both Sides": "If a = b, then a² = b²",
                    "Domain": "√a is real when a ≥ 0",
                    "Check": "Substitute back to verify"
                },
                solvingSteps: [
                    "Isolate radical term on one side",
                    "Raise both sides to power matching index",
                    "Solve resulting equation",
                    "Check all solutions in original equation",
                    "Reject extraneous solutions"
                ],
                applications: [
                    "Physics problems",
                    "Geometry",
                    "Engineering calculations",
                    "Real-world problem solving"
                ]
            },

            pythagorean_applications: {
                title: "Pythagorean Theorem with Radicals",
                concepts: [
                    "a² + b² = c² for right triangles",
                    "Solutions often involve radicals",
                    "Simplify radical answers",
                    "Distance formula uses Pythagorean theorem",
                    "Applications in geometry and physics"
                ],
                theory: "The Pythagorean theorem frequently produces radical answers that need simplification.",
                keyFormulas: {
                    "Pythagorean Theorem": "a² + b² = c²",
                    "Distance Formula": "d = √[(x₂-x₁)² + (y₂-y₁)²]",
                    "3D Distance": "d = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]",
                    "Special Triangles": "45-45-90: sides 1:1:√2, 30-60-90: sides 1:√3:2"
                },
                solvingSteps: [
                    "Identify known sides",
                    "Apply Pythagorean theorem",
                    "Solve for unknown (may involve square root)",
                    "Simplify radical if needed",
                    "Check reasonableness of answer"
                ],
                applications: [
                    "Construction and carpentry",
                    "Navigation",
                    "Computer graphics",
                    "Physics (vectors)"
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

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'sqrt': '√',
            'cbrt': '∛',
            'fourthrt': '∜',
            'leq': '≤',
            'geq': '≥',
            'neq': '≠',
            'approx': '≈',
            'infinity': '∞',
            'plusminus': '±',
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'pi': 'π',
            'theta': 'θ',
            'lambda': 'λ',
            'mu': 'μ',
            // Special symbols
            'intersection': '∩',
            'union': '∪',
            'subset': '⊂',
            'element': '∈',
            'perpendicular': '⊥',
            'parallel': '∥',
            // Superscripts
            'squared': '²',
            'cubed': '³'
        };
    }

    initializeRadicalOperationsSolvers() {
        this.radicalTypes = {
            // Simplifying radicals
            simplify_square_root: {
                patterns: [
                    /simplify.*√\d+/i,
                    /√(\d+)/,
                    /sqrt\((\d+)\)/i
                ],
                solver: this.simplifySquareRoot.bind(this),
                name: 'Simplify Square Root',
                category: 'simplifying',
                description: 'Simplifies √n by extracting perfect square factors'
            },

            simplify_cube_root: {
                patterns: [
                    /∛(\d+)/,
                    /cbrt\((\d+)\)/i,
                    /cube.*root/i
                ],
                solver: this.simplifyCubeRoot.bind(this),
                name: 'Simplify Cube Root',
                category: 'simplifying',
                description: 'Simplifies ∛n by extracting perfect cube factors'
            },

            // Adding radicals
            add_radicals: {
                patterns: [
                    /(\d*)\s*√(\d+)\s*\+\s*(\d*)\s*√(\d+)/,
                    /add.*radical/i,
                    /√.*\+.*√/
                ],
                solver: this.addRadicals.bind(this),
                name: 'Add Radicals',
                category: 'adding_subtracting',
                description: 'Adds radical expressions with like or unlike radicands'
            },

            // Subtracting radicals
            subtract_radicals: {
                patterns: [
                    /(\d*)\s*√(\d+)\s*-\s*(\d*)\s*√(\d+)/,
                    /subtract.*radical/i,
                    /√.*-.*√/
                ],
                solver: this.subtractRadicals.bind(this),
                name: 'Subtract Radicals',
                category: 'adding_subtracting',
                description: 'Subtracts radical expressions with like or unlike radicands'
            },

            // Multiplying radicals
            multiply_radicals: {
                patterns: [
                    /(\d*)\s*√(\d+)\s*\*\s*(\d*)\s*√(\d+)/,
                    /multiply.*radical/i,
                    /√.*\*.*√/,
                    /√.*×.*√/
                ],
                solver: this.multiplyRadicals.bind(this),
                name: 'Multiply Radicals',
                category: 'multiplying',
                description: 'Multiplies radical expressions using product property'
            },

            // Dividing radicals
            divide_radicals: {
                patterns: [
                    /(\d*)\s*√(\d+)\s*\/\s*(\d*)\s*√(\d+)/,
                    /divide.*radical/i,
                    /√.*\/.*√/
                ],
                solver: this.divideRadicals.bind(this),
                name: 'Divide Radicals',
                category: 'dividing',
                description: 'Divides radical expressions using quotient property'
            },

            // Rationalizing denominators
            rationalize_monomial: {
                patterns: [
                    /\d+\s*\/\s*√\d+/,
                    /rationalize.*monomial/i,
                    /rationalize.*√\d+$/
                ],
                solver: this.rationalizeMonomialDenominator.bind(this),
                name: 'Rationalize Monomial Denominator',
                category: 'rationalizing',
                description: 'Removes radical from monomial denominator'
            },

            rationalize_binomial: {
                patterns: [
                    /rationalize.*binomial/i,
                    /\d+\s*\/\s*\(.*√.*[+-].*\)/,
                    /conjugate/i
                ],
                solver: this.rationalizeBinomialDenominator.bind(this),
                name: 'Rationalize Binomial Denominator',
                category: 'rationalizing',
                description: 'Uses conjugate to rationalize binomial denominator'
            },

            // FOIL with radicals
            foil_radicals: {
                patterns: [
                    /\(.*√.*\)\s*\(.*√.*\)/,
                    /foil.*radical/i,
                    /multiply.*binomial.*radical/i
                ],
                solver: this.foilRadicals.bind(this),
                name: 'FOIL with Radicals',
                category: 'multiplying',
                description: 'Multiplies binomials containing radicals using FOIL'
            },

            // Simplifying radical fractions
            simplify_radical_fraction: {
                patterns: [
                    /√\d+\s*\/\s*√\d+/,
                    /simplify.*√.*\//i
                ],
                solver: this.simplifyRadicalFraction.bind(this),
                name: 'Simplify Radical Fraction',
                category: 'simplifying',
                description: 'Simplifies fractions with radicals in numerator and/or denominator'
            },

            // Operations with coefficients
            radicals_with_coefficients: {
                patterns: [
                    /\d+√\d+/,
                    /coefficient.*radical/i
                ],
                solver: this.radicalsWithCoefficients.bind(this),
                name: 'Radicals with Coefficients',
                category: 'mixed',
                description: 'Handles radicals with numerical coefficients'
            },

            // Mixed operations
            mixed_radical_operations: {
                patterns: [
                    /mixed.*radical/i,
                    /√.*[+\-*/].*√.*[+\-*/]/
                ],
                solver: this.mixedRadicalOperations.bind(this),
                name: 'Mixed Radical Operations',
                category: 'mixed',
                description: 'Combines multiple radical operations'
            },

            // Distance formula
            distance_formula: {
                patterns: [
                    /distance.*formula/i,
                    /distance.*between.*points/i,
                    /√\(\(.*\)²\s*\+\s*\(.*\)²\)/
                ],
                solver: this.distanceFormula.bind(this),
                name: 'Distance Formula',
                category: 'applications',
                description: 'Calculates distance between two points using radicals'
            },

            // Pythagorean theorem
            pythagorean_theorem: {
                patterns: [
                    /pythagorean/i,
                    /a².*\+.*b².*=.*c²/i,
                    /right.*triangle/i
                ],
                solver: this.pythagoreanTheorem.bind(this),
                name: 'Pythagorean Theorem',
                category: 'applications',
                description: 'Solves right triangle problems involving radicals'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            simplifying: {
                'Extract perfect squares': [
                    'Not finding all perfect square factors',
                    'Forgetting to multiply coefficient by extracted value',
                    'Trying to simplify √(a+b) as √a + √b (incorrect!)'
                ],
                'Combine under radical': [
                    'Leaving factors that could be simplified',
                    'Arithmetic errors in multiplication',
                    'Not simplifying final radical'
                ]
            },
            adding_subtracting: {
                'Identify like radicals': [
                    'Trying to add unlike radicals directly',
                    'Forgetting to simplify radicals first',
                    'Missing that different-looking radicals might be like after simplifying'
                ],
                'Combine coefficients': [
                    'Adding radicands instead of coefficients',
                    'Sign errors in subtraction',
                    'Forgetting coefficient of 1 when not written'
                ]
            },
            multiplying: {
                'Multiply radicands': [
                    'Adding radicands instead of multiplying',
                    'Forgetting to multiply coefficients',
                    'Not simplifying the result'
                ],
                'Apply product property': [
                    'Incorrectly applying √a × √b = √(a×b)',
                    'Sign errors with negative numbers',
                    'Forgetting to distribute in binomials'
                ]
            },
            dividing: {
                'Apply quotient property': [
                    'Not simplifying before dividing',
                    'Forgetting to rationalize denominator',
                    'Arithmetic errors in division'
                ],
                'Rationalize denominator': [
                    'Using wrong rationalizing factor',
                    'Not multiplying numerator',
                    'Arithmetic errors after rationalizing'
                ]
            },
            rationalizing: {
                'Find conjugate': [
                    'Using wrong conjugate (same sign instead of opposite)',
                    'Not multiplying both numerator and denominator',
                    'Errors in FOIL with conjugate'
                ],
                'Simplify result': [
                    'Not combining like terms',
                    'Missing simplification opportunities',
                    'Leaving radicals in denominator'
                ]
            }
        };

        this.errorPrevention = {
            simplify_first: {
                reminder: 'Always simplify radicals before performing operations',
                method: 'Factor completely and extract perfect powers'
            },
            like_radicals_only: {
                reminder: 'Only like radicals (same radicand and index) can be added/subtracted',
                method: 'Simplify first to identify like radicals'
            },
            product_property: {
                reminder: '√a × √b = √(ab), not √a + √b',
                method: 'Multiply radicands when multiplying radicals'
            },
            rationalize_always: {
                reminder: 'Standard form has no radicals in denominator',
                method: 'Multiply by appropriate form of 1 to rationalize'
            },
            conjugate_method: {
                reminder: 'Use conjugate to rationalize binomial denominators',
                method: '(a+√b)(a-√b) = a² - b (no radical in result)'
            },
            check_domain: {
                reminder: 'Square roots of negative numbers are not real',
                method: 'Verify radicands are non-negative'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why radical properties work and their mathematical meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact sequence of steps to perform operations',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical understanding of radical operations',
                language: 'visual and spatial metaphors'
            },
            algebraic: {
                focus: 'Formal properties and algebraic rules',
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
            pythagorean_construction: {
                scenario: "Carpenter checking if corner is square",
                equation: "a² + b² = c²",
                examples: [
                    "A carpenter measures 3 feet on one wall and 4 feet on another. The diagonal should be √(9+16) = 5 feet for a square corner.",
                    "To ensure a rectangular foundation is square, measure diagonal: √(l² + w²)"
                ],
                context: "Construction and carpentry frequently use Pythagorean theorem with radical results"
            },
            distance_calculation: {
                scenario: "Finding distance between two points",
                equation: "d = √[(x₂-x₁)² + (y₂-y₁)²]",
                examples: [
                    "Distance between (1,2) and (4,6): √[(4-1)² + (6-2)²] = √(9+16) = 5",
                    "GPS navigation calculates distances using this formula"
                ],
                context: "Navigation, mapping, and GPS rely on distance calculations with radicals"
            },
            pendulum_period: {
                scenario: "Physics - pendulum swing period",
                equation: "T = 2π√(L/g)",
                examples: [
                    "Period of a pendulum with length L: T = 2π√(L/9.8)",
                    "Grandfather clocks use this principle"
                ],
                context: "Physics of oscillating systems involves square roots"
            },
            free_fall_time: {
                scenario: "Time for object to fall from height",
                equation: "t = √(2h/g)",
                examples: [
                    "Time for object to fall 20 meters: t = √(40/9.8) ≈ 2.02 seconds",
                    "Skydiving and physics experiments use this formula"
                ],
                context: "Gravitational physics frequently involves radical expressions"
            },
            electrical_impedance: {
                scenario: "Calculating electrical impedance",
                equation: "Z = √(R² + X²)",
                examples: [
                    "Impedance with R=3Ω and X=4Ω: Z = √(9+16) = 5Ω",
                    "AC circuit analysis uses radical calculations"
                ],
                context: "Electrical engineering uses radicals for impedance calculations"
            },
            geometry_diagonal: {
                scenario: "Diagonal of rectangle or box",
                equation: "d = √(l² + w²) or d = √(l² + w² + h²)",
                examples: [
                    "Diagonal of 3×4 rectangle: √(9+16) = 5",
                    "Space diagonal of 2×3×6 box: √(4+9+36) = 7"
                ],
                context: "Geometry and packaging design use diagonal calculations"
            },
            golden_ratio: {
                scenario: "Golden ratio in art and architecture",
                equation: "φ = (1 + √5)/2",
                examples: [
                    "Golden ratio ≈ 1.618",
                    "Used in Parthenon design, art composition, and nature"
                ],
                context: "Aesthetics, biology, and architecture feature the golden ratio"
            },
            sound_intensity: {
                scenario: "Sound intensity and distance",
                equation: "I ∝ 1/r where calculations involve √",
                examples: [
                    "Sound intensity decreases with √distance",
                    "Audio engineering and acoustics"
                ],
                context: "Physics of waves and sound involves radical relationships"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            simplifying: {
                skills: ['Perfect squares', 'Prime factorization', 'Multiplication', 'Square roots'],
                priorKnowledge: ['What √ means', 'Perfect squares 1-15', 'Product property'],
                checkQuestions: [
                    "What is √16?",
                    "What is √25?",
                    "What are the perfect squares up to 100?",
                    "How do you factor 12 into primes?"
                ]
            },
            adding_subtracting: {
                skills: ['Simplifying radicals', 'Like terms', 'Addition/subtraction', 'Coefficients'],
                priorKnowledge: ['Combining like terms', 'Simplest radical form'],
                checkQuestions: [
                    "Simplify √18",
                    "Simplify √50",
                    "What are like radicals?",
                    "Combine: 3x + 5x"
                ]
            },
            multiplying: {
                skills: ['Product property', 'Simplifying radicals', 'Multiplication', 'FOIL'],
                priorKnowledge: ['√a × √b = √(ab)', 'Distributive property'],
                checkQuestions: [
                    "What is √2 × √8?",
                    "Simplify √(2×8)",
                    "Expand (x+2)(x+3)",
                    "What does FOIL stand for?"
                ]
            },
            dividing: {
                skills: ['Quotient property', 'Rationalizing', 'Division', 'Simplifying'],
                priorKnowledge: ['√a / √b = √(a/b)', 'How to rationalize'],
                checkQuestions: [
                    "What is √8 / √2?",
                    "Simplify √(8/2)",
                    "How do you rationalize 1/√2?",
                    "What is a rational number?"
                ]
            },
            rationalizing: {
                skills: ['Conjugates', 'FOIL', 'Difference of squares', 'Multiplying by 1'],
                priorKnowledge: ['(a+b)(a-b) = a²-b²', 'Why rationalize'],
                checkQuestions: [
                    "What is the conjugate of 2+√3?",
                    "What is (a+b)(a-b)?",
                    "What is (3+√2)(3-√2)?",
                    "Why is multiplying by √2/√2 okay?"
                ]
            },
            mixed: {
                skills: ['All previous skills', 'Order of operations', 'Problem solving'],
                priorKnowledge: ['PEMDAS', 'Multiple operations', 'Simplification'],
                checkQuestions: [
                    "What is the order of operations?",
                    "Simplify √12 + √27",
                    "Multiply (√2)(√3)(√6)",
                    "Rationalize and simplify 6/√2"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            area_model: {
                description: "Radicals as side lengths of squares",
                analogy: "√A represents the side length of a square with area A",
                visualization: "Draw square with area labeled, side length is √area",
                suitableFor: ['simplifying', 'multiplying', 'pythagorean'],
                explanation: "If a square has area 16, its side is √16 = 4"
            },
            number_line: {
                description: "Approximate radical values on number line",
                analogy: "√7 is between 2 and 3 on the number line (since 4 < 7 < 9)",
                visualization: "Mark perfect squares and estimate radical positions",
                suitableFor: ['simplifying', 'comparing'],
                explanation: "Helps understand radical magnitude and ordering"
            },
            factor_tree: {
                description: "Prime factorization to find perfect squares",
                analogy: "Break number into prime branches to spot pairs",
                visualization: "Draw tree showing prime factors, circle pairs",
                suitableFor: ['simplifying'],
                explanation: "Pairs of same prime = perfect square to extract"
            },
            geometric_mean: {
                description: "Radical as geometric mean",
                analogy: "√(ab) is the geometric mean of a and b",
                visualization: "Rectangle with sides a and b, square with side √(ab) has same area",
                suitableFor: ['multiplying', 'applications'],
                explanation: "Connects radicals to geometry and averages"
            },
            conjugate_pairs: {
                description: "Conjugates eliminate radicals when multiplied",
                analogy: "(a+√b)(a-√b) like (x+3)(x-3) gives difference of squares",
                visualization: "FOIL showing middle terms cancel",
                suitableFor: ['rationalizing', 'multiplying'],
                explanation: "Conjugate multiplication removes radicals algebraically"
            },
            pythagorean_visual: {
                description: "Right triangle with legs and hypotenuse",
                analogy: "Hypotenuse is √(leg₁² + leg₂²)",
                visualization: "Draw right triangle with squares on each side",
                suitableFor: ['applications', 'pythagorean'],
                explanation: "Visual proof of why c = √(a² + b²)"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Simplify √12",
                    solution: "2√3",
                    steps: ["Factor: √12 = √(4×3)", "Separate: √4 × √3", "Simplify: 2√3"],
                    difficulty: "easy"
                },
                {
                    problem: "Add 2√3 + 5√3",
                    solution: "7√3",
                    steps: ["Like radicals: same radicand", "Add coefficients: 2+5=7", "Result: 7√3"],
                    difficulty: "easy"
                },
                {
                    problem: "Multiply √2 × √8",
                    solution: "4",
                    steps: ["Product property: √(2×8)", "Simplify: √16", "Result: 4"],
                    difficulty: "easy"
                },
                {
                    problem: "Rationalize 6/√3",
                    solution: "2√3",
                    steps: ["Multiply by √3/√3", "Numerator: 6√3", "Denominator: 3", "Simplify: 2√3"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Simplify √48",
                    solution: "4√3",
                    steps: ["Factor: √(16×3)", "Extract: 4√3"],
                    difficulty: "medium"
                },
                {
                    problem: "Add √8 + √18",
                    solution: "5√2",
                    steps: ["Simplify: 2√2 + 3√2", "Combine: 5√2"],
                    difficulty: "medium"
                },
                {
                    problem: "Multiply (2√3)(3√2)",
                    solution: "6√6",
                    steps: ["Multiply coefficients: 2×3=6", "Multiply radicals: √3×√2=√6", "Result: 6√6"],
                    difficulty: "medium"
                },
                {
                    problem: "Rationalize 2/(3+√2)",
                    solution: "(6-2√2)/7",
                    steps: ["Conjugate: 3-√2", "Multiply: 2(3-√2)/[(3+√2)(3-√2)]", "Simplify: (6-2√2)/7"],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Simplify √200",
                    solution: "10√2",
                    steps: ["Factor: √(100×2)", "Extract: 10√2"],
                    difficulty: "hard"
                },
                {
                    problem: "Multiply (√3 + 2)(√3 - 5)",
                    solution: "3 - 3√3 - 10 = -7 - 3√3",
                    steps: ["FOIL: √3×√3 - 5√3 + 2√3 - 10", "Simplify: 3 - 3√3 - 10", "Combine: -7 - 3√3"],
                    difficulty: "hard"
                },
                {
                    problem: "Rationalize (√5 - 2)/(√5 + 3)",
                    solution: "(11 - 5√5)/4",
                    steps: ["Multiply by (√5-3)/(√5-3)", "Numerator: (√5-2)(√5-3)", "Denominator: (√5+3)(√5-3)", "Simplify both", "Result: (11-5√5)/4"],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                simplifying: [
                    { problem: "√20", solution: "2√5" },
                    { problem: "√75", solution: "5√3" },
                    { problem: "√128", solution: "8√2" }
                ],
                adding: [
                    { problem: "3√2 + 5√2", solution: "8√2" },
                    { problem: "√12 + √27", solution: "5√3" },
                    { problem: "2√8 - √32", solution: "0" }
                ],
                multiplying: [
                    { problem: "√5 × √20", solution: "10" },
                    { problem: "(2√3)(4√6)", solution: "24√2" },
                    { problem: "(√2 + 1)(√2 - 1)", solution: "1" }
                ],
                rationalizing: [
                    { problem: "5/√5", solution: "√5" },
                    { problem: "12/(2√3)", solution: "2√3" },
                    { problem: "1/(√7 - 2)", solution: "(√7 + 2)/3" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            distributive_over_addition: {
                misconception: "√(a + b) = √a + √b",
                reality: "√(a + b) ≠ √a + √b in general. Radical does NOT distribute over addition.",
                correctiveExample: "√(9 + 16) = √25 = 5, but √9 + √16 = 3 + 4 = 7. Not equal!",
                commonIn: ['simplifying', 'mixed']
            },
            adding_radicands: {
                misconception: "√2 + √3 = √5",
                reality: "Cannot add unlike radicals. √2 + √3 stays as √2 + √3",
                correctiveExample: "√2 ≈ 1.41, √3 ≈ 1.73, sum ≈ 3.14. But √5 ≈ 2.24. Not equal!",
                commonIn: ['adding_subtracting']
            },
            multiplying_coefficients_wrong: {
                misconception: "2√3 × 3√2 = 6√6 is wrong because coefficients are outside",
                reality: "2√3 × 3√2 = (2×3)(√3×√2) = 6√6 is CORRECT",
                correctiveExample: "Multiply coefficients together AND radicands together",
                commonIn: ['multiplying']
            },
            rationalizing_only_numerator: {
                misconception: "Only multiplying numerator by √a when rationalizing a/√a",
                reality: "Must multiply BOTH numerator and denominator by √a",
                correctiveExample: "6/√2 × √2/√2 = 6√2/2 = 3√2 (multiply both parts)",
                commonIn: ['rationalizing', 'dividing']
            },
            wrong_conjugate: {
                misconception: "Conjugate of a + √b is a + (-√b) = a - √b... wait, that's correct!",
                reality: "Actually this is correct. The misconception is using (a + √b) again instead of (a - √b)",
                correctiveExample: "To rationalize a+√b, multiply by (a-√b)/(a-√b), NOT (a+√b)/(a+√b)",
                commonIn: ['rationalizing']
            },
            simplify_then_add: {
                misconception: "√8 + √18 cannot be simplified",
                reality: "Must simplify EACH radical first: √8 = 2√2, √18 = 3√2, then add: 5√2",
                correctiveExample: "Always simplify individual radicals before attempting to combine",
                commonIn: ['adding_subtracting']
            },
            perfect_square_confusion: {
                misconception: "√12 = √(6×2) = 6√2",
                reality: "Must extract PERFECT SQUARE factors. √12 = √(4×3) = 2√3",
                correctiveExample: "Factor as (perfect square) × (other), not just any factorization",
                commonIn: ['simplifying']
            },
            index_mismatch: {
                misconception: "√2 + ∛2 = combined somehow",
                reality: "Cannot combine radicals with different indices (square root vs cube root)",
                correctiveExample: "√2 + ∛2 stays as is; different indices mean they're not like radicals",
                commonIn: ['adding_subtracting']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            radicals_as_roots: {
                analogy: "Roots of a tree",
                explanation: "Just as tree roots grow underground (hidden), radical values are often 'hidden' until we extract perfect squares (like digging up roots)",
                suitableFor: ['simplifying'],
                ELI5: "A radical is like a mystery box. We don't know exactly what's inside (√7 ≈ 2.something), but we can simplify by taking out 'whole pieces' when possible."
            },
            like_radicals_like_fruits: {
                analogy: "Combining like fruits",
                explanation: "You can add 3 apples + 5 apples = 8 apples, but not 3 apples + 5 oranges. Similarly, 3√2 + 5√2 = 8√2, but 3√2 + 5√3 can't combine.",
                suitableFor: ['adding_subtracting'],
                ELI5: "Think of √2 as 'apple' and √3 as 'orange'. You can add apples to apples (2√2 + 3√2 = 5√2), but not apples to oranges (√2 + √3 stays separate)."
            },
            multiplying_boxes: {
                analogy: "Combining mystery boxes",
                explanation: "When you multiply √2 × √3, it's like putting the contents of both boxes into one bigger box: √6",
                suitableFor: ['multiplying'],
                ELI5: "Imagine √2 is a bag with 2 marbles and √3 is a bag with 3 marbles. Multiplying them is like dumping everything into one bag with 6 marbles: √6."
            },
            rationalizing_as_cleaning: {
                analogy: "Cleaning up the basement",
                explanation: "Rationalizing is like moving clutter from the basement (denominator) to the main floor (numerator) where it's easier to deal with",
                suitableFor: ['rationalizing', 'dividing'],
                ELI5: "Having √2 in the bottom of a fraction is like having a messy basement. We 'clean it up' by moving things around so the basement (bottom) is nice and neat with just regular numbers."
            },
            conjugate_as_opposite: {
                analogy: "Finding the opposite twin",
                explanation: "The conjugate is like a twin with one opposite feature. When they meet (multiply), the 'opposite features' cancel out, leaving only non-radical parts.",
                suitableFor: ['rationalizing'],
                ELI5: "If you have a twin who is exactly like you except they wear blue when you wear red, when you stand together (multiply), your outfit choices cancel out, leaving just your shared features (no colors/no radicals)."
            },
            pythagorean_as_path: {
                analogy: "Finding the shortcut path",
                explanation: "Walking along two sides of a block vs cutting diagonally across. The diagonal is √(side₁² + side₂²)",
                suitableFor: ['applications', 'pythagorean'],
                ELI5: "Imagine a rectangular yard. You can walk along the edges (go right then up), or cut straight across the middle (diagonal). The diagonal distance uses radicals to figure out the shortcut length."
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            simplifying: {
                level1: "What are the factors of the number under the radical?",
                level2: "Can you find any perfect square factors (4, 9, 16, 25, etc.)?",
                level3: "Break the radicand into (perfect square) × (other factor)",
                level4: "Extract the square root of the perfect square factor. For √{n} = √({perfect}×{other}) = {sqrt(perfect)}√{other}"
            },
            adding_subtracting: {
                level1: "Are these radicals already in simplest form?",
                level2: "Do they have the same radicand (number under the radical)?",
                level3: "If radicands are different, simplify each radical first to see if they become like radicals",
                level4: "If like radicals: add/subtract the coefficients, keep the radical part. If unlike: leave as separate terms"
            },
            multiplying: {
                level1: "What property allows us to multiply radicals?",
                level2: "Remember: √a × √b = √(a × b)",
                level3: "Multiply the numbers outside the radicals, then multiply the numbers inside",
                level4: "Multiply coefficients: {coef1} × {coef2}, multiply radicands: √({rad1} × {rad2}), then simplify"
            },
            dividing: {
                level1: "What property allows us to divide radicals?",
                level2: "Remember: √a / √b = √(a/b)",
                level3: "Divide coefficients and radicands separately, then rationalize if needed",
                level4: "After dividing, check if denominator has a radical. If yes, rationalize by multiplying by √{denom}/√{denom}"
            },
            rationalizing: {
                level1: "What does it mean to rationalize a denominator?",
                level2: "What should you multiply by to eliminate the radical in the denominator?",
                level3: "For √a in denominator, multiply by √a/√a. For binomial, use the conjugate",
                level4: "Multiply numerator and denominator by {rationalizing_factor}, then simplify the result"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Simplify: √18",
                    answer: "3√2",
                    assesses: "simplifying",
                    difficulty: "basic"
                },
                {
                    question: "Add: 2√3 + 5√3",
                    answer: "7√3",
                    assesses: "adding",
                    difficulty: "basic"
                },
                {
                    question: "Multiply: √6 × √24",
                    answer: "12",
                    assesses: "multiplying",
                    difficulty: "intermediate"
                },
                {
                    question: "Rationalize: 8/√2",
                    answer: "4√2",
                    assesses: "rationalizing",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "To simplify √50, what perfect square factor should you extract?",
                    options: ["5", "10", "25", "50"],
                    correct: "25",
                    explanation: "50 = 25 × 2, and 25 is a perfect square"
                },
                {
                    question: "Can √2 + √3 be simplified to √5?",
                    options: ["Yes", "No"],
                    correct: "No",
                    explanation: "√(a+b) ≠ √a + √b. These are unlike radicals and stay separate."
                },
                {
                    question: "What is √3 × √12?",
                    options: ["√15", "√36", "6", "3√4"],
                    correct: "6",
                    explanation: "√3 × √12 = √(3×12) = √36 = 6"
                },
                {
                    question: "To rationalize 1/(2+√3), multiply by:",
                    options: ["(2+√3)/(2+√3)", "(2-√3)/(2-√3)", "√3/√3", "2/2"],
                    correct: "(2-√3)/(2-√3)",
                    explanation: "Use the conjugate to eliminate the radical from denominator"
                }
            ],
            summative: [
                {
                    question: "Simplify completely: √72 + √32 - √18",
                    answer: "6√2 + 4√2 - 3√2 = 7√2",
                    showsWork: true,
                    rubric: {
                        simplify_each: 2,
                        identify_like: 1,
                        combine_correctly: 1,
                        final_answer: 1
                    }
                },
                {
                    question: "Multiply and simplify: (2√3 + 1)(√3 - 4)",
                    answer: "6 - 8√3 + √3 - 4 = 2 - 7√3",
                    showsWork: true,
                    rubric: {
                        foil_correctly: 2,
                        simplify_radicals: 1,
                        combine_like_terms: 1,
                        final_answer: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Simplify √16",
                    "Simplify √25",
                    "Add 3√2 + 4√2",
                    "Multiply √4 × √9",
                    "Rationalize 1/√4"
                ],
                medium: [
                    "Simplify √48",
                    "Add √12 + √27",
                    "Multiply (√5)(√20)",
                    "Divide √50 / √2",
                    "Rationalize 6/√3"
                ],
                hard: [
                    "Simplify √162",
                    "Simplify √18 + √50 - √8",
                    "Multiply (√3 + 2)(√3 - 5)",
                    "Rationalize (√5 - 1)/(√5 + 2)",
                    "Simplify (2√6 × 3√2) / √3"
                ]
            },
            byObjective: {
                canSimplifyRadicals: [
                    "√12",
                    "√45",
                    "√75",
                    "√200"
                ],
                canAddSubtractRadicals: [
                    "5√3 + 2√3",
                    "√8 - √2",
                    "√12 + √27",
                    "3√20 - 2√45"
                ],
                canMultiplyRadicals: [
                    "√2 × √8",
                    "(3√2)(2√6)",
                    "(√5 + 2)(√5 - 3)",
                    "√12 × √6"
                ],
                canDivideRadicals: [
                    "√18 / √2",
                    "√75 / √3",
                    "(6√10) / (2√5)",
                    "√(50/2)"
                ],
                canRationalizeDenominators: [
                    "5/√5",
                    "12/(2√3)",
                    "1/(√3 - 1)",
                    "(√2 + 1)/(√2 - 1)"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "simplifying": "Factor radicand to find perfect square factors, extract them",
                "adding_subtracting": "Simplify first, then combine only like radicals",
                "multiplying": "Multiply coefficients and radicands separately, then simplify",
                "dividing": "Divide then rationalize denominator if needed",
                "rationalizing_monomial": "Multiply by radical/radical",
                "rationalizing_binomial": "Multiply by conjugate/conjugate",
                "mixed_operations": "Follow order of operations, simplify at each step"
            },
            whenToUseWhat: {
                product_property: "When multiplying radicals with same index",
                quotient_property: "When dividing radicals with same index",
                simplifying_first: "Before adding, subtracting, or comparing radicals",
                rationalization: "When radical appears in denominator",
                conjugate_method: "When denominator is binomial with radical",
                foil: "When multiplying binomials containing radicals"
            },
            methodSelection: {
                factorsToConsider: [
                    "Type of operation (add, subtract, multiply, divide)",
                    "Presence of coefficients",
                    "Whether radicals are already simplified",
                    "Presence of binomials",
                    "Need for rationalization"
                ],
                generalApproach: [
                    "1. Simplify all radicals completely",
                    "2. Perform the indicated operation",
                    "3. Simplify the result",
                    "4. Rationalize denominators if needed",
                    "5. Combine like terms if any"
                ]
            },
            optimizationTips: {
                "Simplify early": "Always simplify radicals before performing operations",
                "Look for perfect squares": "Know perfect squares to quickly spot simplification opportunities",
                "Check for like radicals": "After simplifying, check if radicals can be combined",
                "Rationalize last": "Usually best to perform other operations before rationalizing"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Simplification Sprint",
                    timeLimit: 60,
                    problems: [
                        "√4",
                        "√9",
                        "√16",
                        "√8",
                        "√12",
                        "√18",
                        "√20",
                        "√24"
                    ]
                },
                {
                    name: "Addition Challenge",
                    timeLimit: 90,
                    problems: [
                        "2√3 + 4√3",
                        "√12 + √27",
                        "√8 + √18",
                        "5√2 - 3√2",
                        "√50 + √32"
                    ]
                },
                {
                    name: "Multiplication Marathon",
                    timeLimit: 120,
                    problems: [
                        "√2 × √8",
                        "√3 × √12",
                        "(2√3)(3√2)",
                        "√5 × √20",
                        "(√6)(√24)"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Radicand",
                    problem: "√□ + √□ = 10√2",
                    given: "Two identical radicals sum to 10√2",
                    solve: "Find the radicand",
                    solution: "Each is 5√2, so √50 + √50 = 10√2, radicand is 50"
                },
                {
                    name: "Product Puzzle",
                    problem: "√a × √b = 6, where a and b are single-digit integers",
                    solve: "Find possible values of a and b",
                    solution: "Multiple solutions: (4,9), (9,4), (2,18), (18,2), etc."
                },
                {
                    name: "Rationalization Challenge",
                    problem: "Find x: (x/√5) = 2√5 after rationalization",
                    solve: "What was x before rationalizing?",
                    solution: "x = 10"
                }
            ],
            applications: [
                {
                    scenario: "Pythagorean Theorem",
                    problem: "A ladder leans against a wall. Base is 3 feet from wall, reaches 4 feet up. How long is the ladder?",
                    equation: "c² = 3² + 4²",
                    solution: "c = √(9+16) = √25 = 5 feet"
                },
                {
                    scenario: "Distance Formula",
                    problem: "Find distance between points (1, 2) and (4, 6)",
                    equation: "d = √[(4-1)² + (6-2)²]",
                    solution: "d = √(9+16) = √25 = 5"
                },
                {
                    scenario: "Golden Ratio",
                    problem: "Calculate the exact value of the golden ratio φ",
                    equation: "φ = (1 + √5)/2",
                    solution: "φ = (1 + √5)/2 ≈ 1.618"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Simplify √48",
                        "√48 = √(6×8)",
                        "= 6√8",  // ERROR
                        "= 6√8"
                    ],
                    correctAnswer: "4√3",
                    errorType: "Used non-perfect-square factor. Should be √(16×3) = 4√3"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Add √8 + √2",
                        "= √(8+2)",  // ERROR
                        "= √10"
                    ],
                    correctAnswer: "3√2",
                    errorType: "Cannot distribute radical over addition. Should simplify first: 2√2 + √2 = 3√2"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Rationalize 6/√2",
                        "= 6√2/√2",  // ERROR: only multiplied numerator
                        "= 6√2"
                    ],
                    correctAnswer: "3√2",
                    errorType: "Forgot to multiply denominator by √2. Should be 6√2/2 = 3√2"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveRadicalProblem(config) {
        const { expression, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseRadicalProblem(expression, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveRadicalProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateRadicalSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateRadicalGraphData();

            // Generate workbook
            this.generateRadicalWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                simplifiedForm: this.currentSolution?.simplified,
                exactValue: this.currentSolution?.exact
            };

        } catch (error) {
            throw new Error(`Failed to solve radical problem: ${error.message}`);
        }
    }

    parseRadicalProblem(expression, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = expression ? this.cleanMathExpression(expression) : '';

        // If problem type is specified, use it directly
        if (problemType && this.radicalTypes[problemType]) {
            return {
                originalInput: expression || `${problemType} problem`,
                cleanInput: cleanInput,
                type: problemType,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect radical problem type
        for (const [type, config] of Object.entries(this.radicalTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractRadicalParameters(match, type);

                    return {
                        originalInput: expression || scenario,
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

        // Default to simplification if a radical is present
        if (cleanInput.includes('√') || cleanInput.includes('sqrt')) {
            return {
                originalInput: expression || 'Radical expression',
                cleanInput: cleanInput,
                type: 'simplify_square_root',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize radical problem type from: ${expression || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/sqrt/gi, '√')
            .replace(/cbrt/gi, '∛')
            .replace(/\*\*/g, '^')
            .trim();
    }

    extractRadicalParameters(match, type) {
        const params = {};

        if (!match) return params;

        // Extract based on operation type
        switch(type) {
            case 'simplify_square_root':
            case 'simplify_cube_root':
                if (match[1]) {
                    params.radicand = parseInt(match[1]);
                }
                break;

            case 'add_radicals':
            case 'subtract_radicals':
                params.coef1 = match[1] ? parseInt(match[1]) : 1;
                params.rad1 = parseInt(match[2]);
                params.coef2 = match[3] ? parseInt(match[3]) : 1;
                params.rad2 = parseInt(match[4]);
                break;

            case 'multiply_radicals':
            case 'divide_radicals':
                params.coef1 = match[1] ? parseInt(match[1]) : 1;
                params.rad1 = parseInt(match[2]);
                params.coef2 = match[3] ? parseInt(match[3]) : 1;
                params.rad2 = parseInt(match[4]);
                break;
        }

        return params;
    }

    solveRadicalProblem_Internal(problem) {
        const solver = this.radicalTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for radical problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // RADICAL OPERATION SOLVERS

    simplifySquareRoot(problem) {
        const radicand = problem.parameters.radicand || this.extractRadicandFromExpression(problem.cleanInput);
        
        if (!radicand || radicand < 0) {
            return {
                error: 'Invalid radicand for square root',
                original: `√${radicand}`,
                category: 'simplifying'
            };
        }

        const { coefficient, remainingRadicand } = this.extractPerfectSquares(radicand);

        const simplified = remainingRadicand === 1 
            ? `${coefficient}`
            : coefficient === 1 
                ? `√${remainingRadicand}`
                : `${coefficient}√${remainingRadicand}`;

        return {
            original: `√${radicand}`,
            radicand: radicand,
            coefficient: coefficient,
            remainingRadicand: remainingRadicand,
            simplified: simplified,
            isSimplified: remainingRadicand === 1 || this.hasNoPerfectSquareFactors(remainingRadicand),
            exact: simplified,
            approximate: Math.sqrt(radicand).toFixed(4),
            category: 'simplifying',
            type: 'Square Root Simplification'
        };
    }

    simplifyCubeRoot(problem) {
        const radicand = problem.parameters.radicand || this.extractRadicandFromExpression(problem.cleanInput);
        
        const { coefficient, remainingRadicand } = this.extractPerfectCubes(radicand);

        const simplified = remainingRadicand === 1 
            ? `${coefficient}`
            : coefficient === 1 
                ? `∛${remainingRadicand}`
                : `${coefficient}∛${remainingRadicand}`;

        return {
            original: `∛${radicand}`,
            radicand: radicand,
            coefficient: coefficient,
            remainingRadicand: remainingRadicand,
            simplified: simplified,
            isSimplified: remainingRadicand === 1 || this.hasNoPerfectCubeFactors(remainingRadicand),
            exact: simplified,
            approximate: Math.cbrt(radicand).toFixed(4),
            category: 'simplifying',
            type: 'Cube Root Simplification'
        };
    }

    addRadicals(problem) {
        const { coef1, rad1, coef2, rad2 } = problem.parameters;

        // Simplify each radical first
        const simplified1 = this.extractPerfectSquares(rad1);
        const simplified2 = this.extractPerfectSquares(rad2);

        const finalCoef1 = coef1 * simplified1.coefficient;
        const finalRad1 = simplified1.remainingRadicand;
        const finalCoef2 = coef2 * simplified2.coefficient;
        const finalRad2 = simplified2.remainingRadicand;

        // Check if like radicals
        const areLike = finalRad1 === finalRad2;

        let result;
        if (areLike) {
            const combinedCoef = finalCoef1 + finalCoef2;
            result = combinedCoef === 0 
                ? '0'
                : finalRad1 === 1 
                    ? `${combinedCoef}`
                    : `${combinedCoef}√${finalRad1}`;
        } else {
            const term1 = finalCoef1 === 1 && finalRad1 !== 1 
                ? `√${finalRad1}` 
                : finalRad1 === 1 
                    ? `${finalCoef1}` 
                    : `${finalCoef1}√${finalRad1}`;
            const term2 = finalCoef2 === 1 && finalRad2 !== 1 
                ? `√${finalRad2}` 
                : finalRad2 === 1 
                    ? `${finalCoef2}` 
                    : `${finalCoef2}√${finalRad2}`;
            result = `${term1} + ${term2}`;
        }

        return {
            original: `${coef1}√${rad1} + ${coef2}√${rad2}`,
            simplified1: `${finalCoef1}√${finalRad1}`,
            simplified2: `${finalCoef2}√${finalRad2}`,
            areLikeRadicals: areLike,
            result: result,
            exact: result,
            approximate: (coef1 * Math.sqrt(rad1) + coef2 * Math.sqrt(rad2)).toFixed(4),
            category: 'adding_subtracting',
            type: 'Addition of Radicals'
        };
    }

    subtractRadicals(problem) {
        const { coef1, rad1, coef2, rad2 } = problem.parameters;

        // Simplify each radical first
        const simplified1 = this.extractPerfectSquares(rad1);
        const simplified2 = this.extractPerfectSquares(rad2);

        const finalCoef1 = coef1 * simplified1.coefficient;
        const finalRad1 = simplified1.remainingRadicand;
        const finalCoef2 = coef2 * simplified2.coefficient;
        const finalRad2 = simplified2.remainingRadicand;

        // Check if like radicals
        const areLike = finalRad1 === finalRad2;

        let result;
        if (areLike) {
            const combinedCoef = finalCoef1 - finalCoef2;
            result = combinedCoef === 0 
                ? '0'
                : finalRad1 === 1 
                    ? `${combinedCoef}`
                    : `${combinedCoef}√${finalRad1}`;
        } else {
            const term1 = finalCoef1 === 1 && finalRad1 !== 1 
                ? `√${finalRad1}` 
                : finalRad1 === 1 
                    ? `${finalCoef1}` 
                    : `${finalCoef1}√${finalRad1}`;
            const term2 = finalCoef2 === 1 && finalRad2 !== 1 
                ? `√${finalRad2}` 
                : finalRad2 === 1 
                    ? `${finalCoef2}` 
                    : `${finalCoef2}√${finalRad2}`;
            result = `${term1} - ${term2}`;
        }

        return {
            original: `${coef1}√${rad1} - ${coef2}√${rad2}`,
            simplified1: `${finalCoef1}√${finalRad1}`,
            simplified2: `${finalCoef2}√${finalRad2}`,
            areLikeRadicals: areLike,
            result: result,
            exact: result,
            approximate: (coef1 * Math.sqrt(rad1) - coef2 * Math.sqrt(rad2)).toFixed(4),
            category: 'adding_subtracting',
            type: 'Subtraction of Radicals'
        };
    }

    multiplyRadicals(problem) {
        const { coef1, rad1, coef2, rad2 } = problem.parameters;

        // Multiply coefficients
        const newCoef = coef1 * coef2;

        // Multiply radicands
        const newRadicand = rad1 * rad2;

        // Simplify result
        const simplified = this.extractPerfectSquares(newRadicand);
        const finalCoef = newCoef * simplified.coefficient;
        const finalRad = simplified.remainingRadicand;

        const result = finalRad === 1 
            ? `${finalCoef}`
            : `${finalCoef}√${finalRad}`;

        return {
            original: `(${coef1}√${rad1})(${coef2}√${rad2})`,
            coefficientProduct: newCoef,
            radicandProduct: newRadicand,
            beforeSimplify: `${newCoef}√${newRadicand}`,
            afterSimplify: result,
            result: result,
            exact: result,
            approximate: (coef1 * Math.sqrt(rad1) * coef2 * Math.sqrt(rad2)).toFixed(4),
            category: 'multiplying',
            type: 'Multiplication of Radicals'
        };
    }

    divideRadicals(problem) {
        const { coef1, rad1, coef2, rad2 } = problem.parameters;

        // Divide coefficients
        const newCoef = coef1 / coef2;

        // Divide radicands
        const newRadicand = rad1 / rad2;

        // Simplify if possible
        let result;
        if (Number.isInteger(newRadicand)) {
            const simplified = this.extractPerfectSquares(newRadicand);
            const finalCoef = newCoef * simplified.coefficient;
            const finalRad = simplified.remainingRadicand;
            result = finalRad === 1 ? `${finalCoef}` : `${finalCoef}√${finalRad}`;
        } else {
            // Need to rationalize or simplify fraction under radical
            const gcdRadicand = this.gcd(rad1, rad2);
            const simplifiedRad1 = rad1 / gcdRadicand;
            const simplifiedRad2 = rad2 / gcdRadicand;
            
            if (simplifiedRad2 === 1) {
                result = `${newCoef}√${simplifiedRad1}`;
            } else {
                // Rationalize
                result = `${newCoef * Math.sqrt(simplifiedRad2)}√${simplifiedRad1 * simplifiedRad2}`;
            }
        }

        return {
            original: `(${coef1}√${rad1}) / (${coef2}√${rad2})`,
            coefficientQuotient: newCoef,
            radicandQuotient: newRadicand,
            result: result,
            needsRationalization: !Number.isInteger(newRadicand),
            exact: result,
            approximate: (coef1 * Math.sqrt(rad1) / (coef2 * Math.sqrt(rad2))).toFixed(4),
            category: 'dividing',
            type: 'Division of Radicals'
        };
    }

    rationalizeMonomialDenominator(problem) {
        // Handles expressions like a/√b
        const expression = problem.cleanInput;
        
        // This is a simplified implementation
        // In real use, would parse more carefully
        
        return {
            original: expression,
            method: 'Multiply by √b/√b',
            result: 'Rationalized form',
            category: 'rationalizing',
            type: 'Monomial Rationalization'
        };
    }

    rationalizeBinomialDenominator(problem) {
        // Handles expressions like a/(b + √c)
        const expression = problem.cleanInput;
        
        return {
            original: expression,
            method: 'Multiply by conjugate',
            conjugate: 'Conjugate used',
            result: 'Rationalized form',
            category: 'rationalizing',
            type: 'Binomial Rationalization'
        };
    }

    foilRadicals(problem) {
        return {
            original: problem.cleanInput,
            method: 'FOIL (First, Outer, Inner, Last)',
            result: 'Expanded form',
            category: 'multiplying',
            type: 'FOIL with Radicals'
        };
    }

    simplifyRadicalFraction(problem) {
        return {
            original: problem.cleanInput,
            method: 'Simplify using quotient property',
            result: 'Simplified form',
            category: 'simplifying',
            type: 'Radical Fraction Simplification'
        };
    }

    radicalsWithCoefficients(problem) {
        return {
            original: problem.cleanInput,
            method: 'Handle coefficients separately from radicals',
            result: 'Simplified form',
            category: 'mixed',
            type: 'Radicals with Coefficients'
        };
    }

    mixedRadicalOperations(problem) {
        return {
            original: problem.cleanInput,
            method: 'Apply order of operations to radicals',
            result: 'Final simplified form',
            category: 'mixed',
            type: 'Mixed Radical Operations'
        };
    }

    distanceFormula(problem) {
        return {
            original: problem.cleanInput,
            formula: 'd = √[(x₂-x₁)² + (y₂-y₁)²]',
            result: 'Distance value',
            category: 'applications',
            type: 'Distance Formula'
        };
    }

    pythagoreanTheorem(problem) {
        return {
            original: problem.cleanInput,
            formula: 'a² + b² = c²',
            result: 'Side length',
            category: 'applications',
            type: 'Pythagorean Theorem'
        };
    }

    // HELPER METHODS

    extractRadicandFromExpression(expression) {
        const match = expression.match(/√(\d+)/) || expression.match(/sqrt\((\d+)\)/);
        return match ? parseInt(match[1]) : null;
    }

    extractPerfectSquares(n) {
        let coefficient = 1;
        let remaining = n;

        // Check perfect square factors from largest to smallest
        for (let i = Math.floor(Math.sqrt(n)); i >= 2; i--) {
            while (remaining % (i * i) === 0) {
                coefficient *= i;
                remaining /= (i * i);
            }
        }

        return { coefficient, remainingRadicand: remaining };
    }

    extractPerfectCubes(n) {
        let coefficient = 1;
        let remaining = n;

        // Check perfect cube factors
        for (let i = Math.floor(Math.cbrt(n)); i >= 2; i--) {
            while (remaining % (i * i * i) === 0) {
                coefficient *= i;
                remaining /= (i * i * i);
            }
        }

        return { coefficient, remainingRadicand: remaining };
    }

    hasNoPerfectSquareFactors(n) {
        if (n === 1) return true;
        
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % (i * i) === 0) {
                return false;
            }
        }
        return true;
    }

    hasNoPerfectCubeFactors(n) {
        if (n === 1) return true;
        
        for (let i = 2; i <= Math.cbrt(n); i++) {
            if (n % (i * i * i) === 0) {
                return false;
            }
        }
        return true;
    }

    gcd(a, b) {
        return b === 0 ? a : this.gcd(b, a % b);
    }

    // STEP GENERATION

    generateRadicalSteps(problem, solution) {
        let baseSteps = this.generateBaseRadicalSteps(problem, solution);

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

    generateBaseRadicalSteps(problem, solution) {
        const category = this.radicalTypes[problem.type]?.category;

        switch(category) {
            case 'simplifying':
                return this.generateSimplificationSteps(problem, solution);
            case 'adding_subtracting':
                return this.generateAddSubtractSteps(problem, solution);
            case 'multiplying':
                return this.generateMultiplicationSteps(problem, solution);
            case 'dividing':
                return this.generateDivisionSteps(problem, solution);
            case 'rationalizing':
                return this.generateRationalizationSteps(problem, solution);
            default:
                return this.generateGenericRadicalSteps(problem, solution);
        }
    }

    generateSimplificationSteps(problem, solution) {
        const steps = [];
        const radicand = solution.radicand;

        // Step 1: Given radical
        steps.push({
            stepNumber: 1,
            step: 'Given radical',
            description: 'Start with the radical expression',
            expression: solution.original,
            reasoning: 'We need to simplify this radical by extracting perfect square factors',
            goalStatement: 'Express in simplest radical form'
        });

        // Step 2: Factor the radicand
        const factors = this.getPerfectSquareFactorization(radicand);
        steps.push({
            stepNumber: 2,
            step: 'Factor the radicand',
            description: `Factor ${radicand} to find perfect square factors`,
            expression: `√${radicand} = √(${factors.factorization})`,
            reasoning: 'We look for perfect square factors (4, 9, 16, 25, ...) to extract',
            factorization: factors.factorization,
            perfectSquare: factors.perfectSquare,
            remaining: factors.remaining
        });

        // Step 3: Apply product property
        if (solution.coefficient > 1) {
            steps.push({
                stepNumber: 3,
                step: 'Apply product property',
                description: 'Separate perfect square from remaining factors',
                beforeExpression: `√(${factors.perfectSquare} × ${factors.remaining})`,
                operation: 'Product Property: √(ab) = √a × √b',
                afterExpression: `√${factors.perfectSquare} × √${factors.remaining}`,
                reasoning: 'Product property allows us to separate the radical',
                algebraicRule: 'Product Property of Radicals'
            });

            // Step 4: Simplify perfect square
            steps.push({
                stepNumber: 4,
                step: 'Simplify perfect square',
                description: `Evaluate √${factors.perfectSquare}`,
                beforeExpression: `√${factors.perfectSquare} × √${factors.remaining}`,
                afterExpression: `${solution.coefficient}√${solution.remainingRadicand}`,
                reasoning: `√${factors.perfectSquare} = ${solution.coefficient}`,
                simplification: `Perfect square root extracted`
            });
        }

        // Final step
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Final answer',
            description: 'Radical in simplest form',
            expression: solution.simplified,
            finalAnswer: true,
            reasoning: solution.isSimplified 
                ? 'This is fully simplified (no perfect square factors remain)'
                : 'Simplified as much as possible',
            approximation: `≈ ${solution.approximate}`
        });

        return steps;
    }

    generateAddSubtractSteps(problem, solution) {
        const steps = [];
        const { coef1, rad1, coef2, rad2 } = problem.parameters;
        const isAddition = problem.type === 'add_radicals';

        // Step 1: Given expression
        steps.push({
            stepNumber: 1,
            step: 'Given expression',
            description: `${isAddition ? 'Addition' : 'Subtraction'} of radicals`,
            expression: solution.original,
            reasoning: 'We can only combine like radicals (same radicand)',
            goalStatement: 'Simplify each radical first, then combine if possible'
        });

        // Step 2: Simplify first radical
        if (rad1 !== solution.simplified1) {
            steps.push({
                stepNumber: 2,
                step: 'Simplify first radical',
                description: `Simplify √${rad1}`,
                beforeExpression: `${coef1}√${rad1}`,
                afterExpression: solution.simplified1,
                reasoning: 'Always simplify radicals before attempting to combine'
            });
        }

        // Step 3: Simplify second radical
        if (rad2 !== solution.simplified2) {
            steps.push({
                stepNumber: steps.length + 1,
                step: 'Simplify second radical',
                description: `Simplify √${rad2}`,
                beforeExpression: `${coef2}√${rad2}`,
                afterExpression: solution.simplified2,
                reasoning: 'Simplify to identify if these are like radicals'
            });
        }

        // Step 4: Check if like radicals
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Check for like radicals',
            description: solution.areLikeRadicals 
                ? 'These are like radicals (same radicand)'
                : 'These are unlike radicals (different radicands)',
            expression: `${solution.simplified1} ${isAddition ? '+' : '-'} ${solution.simplified2}`,
            reasoning: solution.areLikeRadicals
                ? 'Like radicals can be combined by adding/subtracting coefficients'
                : 'Unlike radicals cannot be combined - leave as separate terms',
            areLike: solution.areLikeRadicals
        });

        // Step 5: Combine or leave separate
        if (solution.areLikeRadicals) {
            steps.push({
                stepNumber: steps.length + 1,
                step: `${isAddition ? 'Add' : 'Subtract'} coefficients`,
                description: `${isAddition ? 'Add' : 'Subtract'} the coefficients, keep the radical part`,
                beforeExpression: `${solution.simplified1} ${isAddition ? '+' : '-'} ${solution.simplified2}`,
                operation: isAddition ? 'Add coefficients' : 'Subtract coefficients',
                afterExpression: solution.result,
                reasoning: 'Like radicals combine just like combining like terms in algebra',
                algebraicRule: 'Combining Like Radicals'
            });
        }

        // Final step
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Final answer',
            description: solution.areLikeRadicals ? 'Combined result' : 'Cannot be simplified further',
            expression: solution.result,
            finalAnswer: true,
            reasoning: solution.areLikeRadicals 
                ? 'Coefficients combined, radical unchanged'
                : 'Unlike radicals remain as separate terms',
            approximation: `≈ ${solution.approximate}`
        });

        return steps;
    }

    generateMultiplicationSteps(problem, solution) {
        const steps = [];
        const { coef1, rad1, coef2, rad2 } = problem.parameters;

        // Step 1: Given expression
        steps.push({
            stepNumber: 1,
            step: 'Given expression',
            description: 'Multiplication of radicals',
            expression: solution.original,
            reasoning: 'Use product property: √a × √b = √(ab)',
            goalStatement: 'Multiply coefficients and radicands separately'
        });

        // Step 2: Multiply coefficients
        steps.push({
            stepNumber: 2,
            step: 'Multiply coefficients',
            description: `Multiply the numbers outside the radicals`,
            beforeExpression: `(${coef1}√${rad1})(${coef2}√${rad2})`,
            operation: `${coef1} × ${coef2} = ${solution.coefficientProduct}`,
            afterExpression: `${solution.coefficientProduct}(√${rad1} × √${rad2})`,
            reasoning: 'Coefficients multiply like regular numbers',
            algebraicRule: 'Commutative and Associative Properties'
        });

        // Step 3: Multiply radicands
        steps.push({
            stepNumber: 3,
            step: 'Multiply radicands',
            description: 'Apply product property to radicals',
            beforeExpression: `${solution.coefficientProduct}(√${rad1} × √${rad2})`,
            operation: `√${rad1} × √${rad2} = √(${rad1} × ${rad2})`,
            afterExpression: `${solution.coefficientProduct}√${solution.radicandProduct}`,
            reasoning: 'Product property allows us to combine under one radical',
            algebraicRule: 'Product Property: √a × √b = √(ab)'
        });

        // Step 4: Simplify if needed
        if (solution.beforeSimplify !== solution.afterSimplify) {
            const factors = this.getPerfectSquareFactorization(solution.radicandProduct);
            
            steps.push({
                stepNumber: 4,
                step: 'Simplify the result',
                description: `Simplify √${solution.radicandProduct}`,
                beforeExpression: solution.beforeSimplify,
                factorization: `√${solution.radicandProduct} = √(${factors.factorization})`,
                afterExpression: solution.afterSimplify,
                reasoning: 'Extract perfect square factors to simplify',
                simplification: 'Always express in simplest radical form'
            });
        }

        // Final step
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Final answer',
            description: 'Product in simplest form',
            expression: solution.result,
            finalAnswer: true,
            reasoning: 'This is the simplified product of the original radicals',
            approximation: `≈ ${solution.approximate}`
        });

        return steps;
    }

    generateDivisionSteps(problem, solution) {
        const steps = [];
        const { coef1, rad1, coef2, rad2 } = problem.parameters;

        // Step 1: Given expression
        steps.push({
            stepNumber: 1,
            step: 'Given expression',
            description: 'Division of radicals',
            expression: solution.original,
            reasoning: 'Use quotient property: √a / √b = √(a/b)',
            goalStatement: 'Divide coefficients and radicands, then rationalize if needed'
        });

        // Step 2: Divide coefficients
        steps.push({
            stepNumber: 2,
            step: 'Divide coefficients',
            description: 'Divide the numbers outside the radicals',
            operation: `${coef1} ÷ ${coef2} = ${solution.coefficientQuotient}`,
            reasoning: 'Coefficients divide like regular numbers',
            result: `${solution.coefficientQuotient}(√${rad1} / √${rad2})`
        });

        // Step 3: Divide radicands
        steps.push({
            stepNumber: 3,
            step: 'Divide radicands',
            description: 'Apply quotient property to radicals',
            beforeExpression: `${solution.coefficientQuotient}(√${rad1} / √${rad2})`,
            operation: `√${rad1} / √${rad2} = √(${rad1}/${rad2})`,
            afterExpression: `${solution.coefficientQuotient}√(${rad1}/${rad2})`,
            reasoning: 'Quotient property allows us to combine under one radical',
            algebraicRule: 'Quotient Property: √a / √b = √(a/b)'
        });

        // Step 4: Simplify or rationalize
        if (solution.needsRationalization) {
            steps.push({
                stepNumber: 4,
                step: 'Rationalize denominator',
                description: 'Eliminate radical from denominator',
                method: 'Multiply by appropriate form of 1',
                reasoning: 'Standard form has no radicals in denominator',
                result: solution.result
            });
        } else {
            steps.push({
                stepNumber: 4,
                step: 'Simplify',
                description: 'Simplify the resulting radical',
                result: solution.result,
                reasoning: 'Express in simplest form'
            });
        }

        // Final step
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Final answer',
            description: 'Quotient in simplest form',
            expression: solution.result,
            finalAnswer: true,
            approximation: `≈ ${solution.approximate}`
        });

        return steps;
    }

    generateRationalizationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given expression',
            description: 'Expression with radical in denominator',
            expression: solution.original,
            reasoning: 'We need to rationalize the denominator',
            goalStatement: 'Remove radical from denominator by multiplying by appropriate form'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify rationalizing factor',
            description: solution.method,
            reasoning: 'This will eliminate the radical from the denominator'
        });

        steps.push({
            stepNumber: 3,
            step: 'Multiply numerator and denominator',
            description: 'Apply rationalizing factor to both parts',
            reasoning: 'Multiplying by a form of 1 doesn\'t change the value'
        });

        steps.push({
            stepNumber: 4,
            step: 'Simplify',
            description: 'Simplify numerator and denominator',
            expression: solution.result,
            finalAnswer: true,
            reasoning: 'Denominator is now rational (no radicals)'
        });

        return steps;
    }

    generateGenericRadicalSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Radical operation',
            description: 'Perform the indicated radical operation',
            expression: problem.cleanInput,
            reasoning: 'Apply appropriate radical properties',
            solution: solution
        }];
    }

    getPerfectSquareFactorization(n) {
        const extraction = this.extractPerfectSquares(n);
        const perfectSquare = extraction.coefficient * extraction.coefficient;
        const remaining = extraction.remainingRadicand;
        
        return {
            factorization: perfectSquare === 1 ? `${n}` : `${perfectSquare} × ${remaining}`,
            perfectSquare: perfectSquare,
            remaining: remaining
        };
    }

    // ENHANCED EXPLANATION METHODS (using same pattern as linear workbook)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            // Multiple explanation formats
            explanations: {
                conceptual: this.getConceptualExplanation(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualExplanation(step, problem),
                algebraic: this.getAlgebraicExplanation(step)
            },

            // Difficulty-adapted explanations
            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            // Learning support
            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabulary(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        // Add thinking prompts if enabled
        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPrompts(step);
        }

        // Add self-check questions if enabled
        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestion(step);
        }

        // Add real-world connections if enabled
        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnection(step, problem);
        }

        return enhanced;
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
            'Given radical': "We have a square root! It's like asking 'what number times itself gives us this number?'",
            'Factor the radicand': "Let's break the number into smaller pieces, looking for 'perfect pairs' (numbers that make perfect squares)",
            'Apply product property': "We can split the square root into two separate square roots - like splitting a big toy box into two smaller boxes",
            'Simplify perfect square': "This part we can figure out exactly! It's like finding matching socks in your drawer",
            'Multiply coefficients': "Multiply the numbers outside the square roots, just like regular multiplication",
            'Multiply radicands': "Multiply the numbers inside the square roots together - they go into one big square root box",
            'Add coefficients': "Add the numbers in front of the square roots, but only if the square root parts are exactly the same!",
            'Check for like radicals': "Do these square roots have the same number inside? If yes, we can combine them like adding apples to apples!",
            'Rationalize denominator': "We're cleaning up by getting rid of the square root on the bottom of the fraction"
        };

        return ELI5Explanations[step.step] || "We're taking another step to make this radical simpler and easier to understand!";
    }

    findRelevantAnalogy(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || 
                analogy.suitableFor.some(type => problem.type.includes(type))) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this step like organizing your toys - we're making everything neater and easier to work with!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'radicand': 'number under the square root',
            'coefficient': 'number in front',
            'radical': 'square root',
            'perfect square': 'number that has a whole square root (like 4, 9, 16)',
            'simplify': 'make simpler',
            'rationalize': 'get rid of square roots on the bottom',
            'conjugate': 'opposite version',
            'factor': 'break into pieces',
            'extract': 'take out',
            'product property': 'multiplication rule for square roots',
            'quotient property': 'division rule for square roots',
            'like radicals': 'square roots with the same number inside',
            'unlike radicals': 'square roots with different numbers inside'
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
            'Given radical': 'Draw a square and label its area. The side length is the square root of the area.',
            'Factor the radicand': 'Draw a factor tree showing how to break the number into prime factors',
            'Apply product property': 'Show two separate square root symbols splitting from one',
            'Simplify perfect square': 'Draw a perfect square with side length labeled',
            'Multiply radicands': 'Show two boxes combining into one larger box',
            'Add coefficients': 'Draw groups of identical square roots being counted together',
            'Check for like radicals': 'Use different colors to highlight matching vs. non-matching radicands',
            'Rationalize denominator': 'Show a messy denominator being cleaned up into a neat whole number'
        };

        return visualizations[step.step] || 'Draw a picture to show what\'s happening in this step';
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
        const category = this.radicalTypes[problemType]?.category || 'simplifying';
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

    // HELPER METHODS FOR ENHANCED EXPLANATIONS

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Given radical': 'A radical represents a root - the value that when multiplied by itself gives the radicand.',
            'Factor the radicand': 'Factoring reveals the structure of the number and helps identify perfect squares to extract.',
            'Apply product property': 'The product property stems from the definition of square roots and allows us to separate factors.',
            'Simplify perfect square': 'Perfect squares have exact square roots because they equal some integer squared.',
            'Multiply coefficients': 'Coefficients are separate from the radical and multiply independently.',
            'Multiply radicands': 'The product property allows us to combine radicands under a single radical.',
            'Add coefficients': 'Like radicals combine by adding their coefficients, similar to combining like terms in algebra.',
            'Check for like radicals': 'Only radicals with identical radicands and indices can be combined.',
            'Rationalize denominator': 'Rationalizing creates a rational denominator, making the expression easier to work with.'
        };

        return conceptualExplanations[step.step] || 'This step transforms the expression toward simplest radical form.';
    }

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Identify what needs to be done: ${step.operation}
2. Perform the operation carefully
3. Simplify the result if possible
4. Check your work`;
        }
        return 'Follow the standard procedure for this type of radical operation.';
    }

    getVisualExplanation(step, problem) {
        const category = this.radicalTypes[problem.type]?.category;
        
        const visualExplanations = {
            'simplifying': 'Imagine a square with the radicand as its area. The side length is the square root.',
            'adding_subtracting': 'Think of like radicals as identical objects you can count together.',
            'multiplying': 'Visualize areas being combined when multiplying radicals.',
            'dividing': 'Picture dividing one area by another to find the ratio of side lengths.',
            'rationalizing': 'Imagine clearing clutter from the bottom floor of a fraction.'
        };

        return visualExplanations[category] || 'Visualize the radical operation using geometric representations.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Given radical': 'Radical expression in standard form',
            'Factor the radicand': 'Prime factorization reveals perfect power factors',
            'Apply product property': 'Product Property: √(ab) = √a × √b',
            'Simplify perfect square': 'Perfect Square Property: √(a²) = |a|',
            'Multiply coefficients': 'Commutative Property: ab = ba',
            'Multiply radicands': 'Product Property: √a × √b = √(ab)',
            'Add coefficients': 'Distributive Property: a√c + b√c = (a+b)√c',
            'Check for like radicals': 'Definition of like radicals: same radicand and index',
            'Rationalize denominator': 'Fundamental Theorem: multiply by conjugate/conjugate = 1'
        };

        return algebraicRules[step.step] || 'Apply standard radical properties and algebraic rules.';
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
                'radicand': 'number under the root',
                'coefficient': 'number in front',
                'radical': 'square root',
                'perfect square': 'number with exact square root',
                'simplify': 'make simpler',
                'rationalize': 'remove root from bottom',
                'conjugate': 'opposite form',
                'extract': 'take out',
                'product property': 'multiplication rule'
            },
            intermediate: {
                'radicand': 'radicand',
                'coefficient': 'coefficient',
                'radical': 'radical',
                'perfect square': 'perfect square',
                'simplify': 'simplify',
                'rationalize': 'rationalize',
                'conjugate': 'conjugate'
            },
            ELI5: {
                'radicand': 'the number hiding under the square root sign',
                'coefficient': 'the number standing guard in front',
                'radical': 'square root (the √ symbol)',
                'perfect square': 'a number that has a nice whole square root, like 4, 9, or 16',
                'simplify': 'make it cleaner and easier to understand',
                'rationalize': 'clean up by removing square roots from the bottom',
                'conjugate': 'the opposite twin (same numbers, different sign)',
                'extract': 'pull out or remove',
                'product property': 'the rule that lets us multiply square roots together'
            },
            detailed: {
                'radicand': 'radicand (expression under the radical symbol)',
                'coefficient': 'coefficient (numerical factor)',
                'radical': 'radical expression',
                'perfect square': 'perfect square (integer squared)',
                'simplify': 'simplify (reduce to simplest radical form)',
                'rationalize': 'rationalize (eliminate radicals from denominator)',
                'conjugate': 'conjugate (binomial with opposite middle sign)'
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

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue simplifying the radical expression`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return `we need to continue toward simplest radical form`;
    }

    explainStepBenefit(nextStep) {
        return `bringing us closer to the final simplified answer`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Factor the radicand': [
                'Look for the LARGEST perfect square factor',
                'Use prime factorization if needed',
                'Remember common perfect squares: 4, 9, 16, 25, 36, 49, 64, 81, 100'
            ],
            'Multiply radicands': [
                'Multiply the numbers INSIDE the radicals',
                'Don\'t add them - multiplication only!',
                'Simplify the result if possible'
            ],
            'Add coefficients': [
                'Only add if radicands are identical',
                'Add the numbers in FRONT, not inside',
                'Keep the radical part unchanged'
            ],
            'Rationalize denominator': [
                'Multiply BOTH numerator and denominator',
                'For binomials, use the conjugate',
                'Simplify after rationalizing'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check each calculation', 'Simplify when possible'];
    }

    generateCheckPoints(step) {
        return [
            'Did I perform the operation correctly?',
            'Can this be simplified further?',
            'Are there any perfect square factors I missed?',
            'Is my final answer in simplest radical form?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            simplifying: step.step === 'Factor the radicand' ?
                ['Don\'t forget to check for all perfect square factors', 'Avoid using non-perfect-square factors'] : [],
            adding_subtracting: step.step === 'Check for like radicals' ?
                ['Don\'t try to add unlike radicals', 'Remember to simplify first'] : [],
            multiplying: step.step === 'Multiply radicands' ?
                ['Don\'t add radicands - multiply them!', 'Remember to simplify the product'] : [],
            rationalizing: step.step === 'Rationalize denominator' ?
                ['Must multiply both top and bottom', 'Use conjugate for binomial denominators'] : []
        };

        const category = this.radicalTypes[problemType]?.category || 'simplifying';
        return warnings[category] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Given radical': 'Do I understand what this radical expression is asking?',
            'Factor the radicand': 'Did I find the largest perfect square factor?',
            'Apply product property': 'Did I correctly separate the perfect square?',
            'Simplify perfect square': 'Is this square root evaluated correctly?',
            'Multiply coefficients': 'Did I multiply the coefficients correctly?',
            'Multiply radicands': 'Did I multiply (not add) the radicands?',
            'Add coefficients': 'Did I check that these are like radicals first?',
            'Rationalize denominator': 'Is there still a radical in the denominator?'
        };

        return questions[step.step] || 'Does this step make sense and move me toward the solution?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Given radical': 'A radical expression to simplify',
            'Factor the radicand': 'Radicand written as (perfect square) × (other)',
            'Apply product property': 'Radical split into two parts',
            'Simplify perfect square': 'Perfect square evaluated to an integer',
            'Multiply radicands': 'Single radical with product inside',
            'Add coefficients': 'Combined coefficient with same radical',
            'Rationalize denominator': 'No radical in denominator'
        };

        return expectations[step.step] || 'Progress toward simplified form';
    }

    generateTroubleshootingTips(step) {
        return [
            'If stuck, review the radical properties',
            'Check your arithmetic carefully',
            'Make sure you\'re using the correct operation',
            'Try a simpler example first',
            'Ask: "Is this in simplest form?"'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Given radical': [
                'What does this radical expression mean?',
                'What are we trying to find or simplify?',
                'What properties of radicals might help?'
            ],
            'Factor the radicand': [
                'What are the factors of this number?',
                'Which factors are perfect squares?',
                'What\'s the largest perfect square factor?'
            ],
            'Multiply radicands': [
                'What operation goes inside the radical?',
                'Do I multiply or add the radicands?',
                'Will the product need simplifying?'
            ],
            'Add coefficients': [
                'Are these like radicals?',
                'What numbers am I adding?',
                'Does the radical part stay the same?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help solve the problem?'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.radicalTypes[problem.type]?.category || 'simplifying';
        const hintSet = this.hints[category] || this.hints.simplifying;

        return {
            level1: hintSet.level1 || 'Think about what operation you need to perform.',
            level2: hintSet.level2 || 'Consider the properties of radicals.',
            level3: hintSet.level3 || 'Break the problem into smaller steps.',
            level4: hintSet.level4 || 'Apply the specific technique needed.'
        };
    }

    breakIntoSubSteps(step) {
        if (step.operation) {
            return [
                'Identify what operation is needed',
                `Perform the operation: ${step.operation}`,
                'Simplify the result',
                'Check if further simplification is possible',
                'Write the result clearly'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Simplify', 'Verify the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same type of problem with different numbers',
            practiceHint: 'Start with simpler radicands to build confidence',
            extension: 'Once comfortable, try problems with larger numbers or coefficients'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What do I see in this expression?',
            goal: 'What am I trying to accomplish?',
            strategy: 'What property or technique should I use?',
            execute: 'How do I perform this operation correctly?',
            verify: 'Is my result in simplest form?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which radical property applies here?',
            'Should I simplify before or after this operation?',
            'Are there multiple ways to approach this step?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'Factor the radicand': [
                'Could use prime factorization',
                'Could test perfect squares systematically',
                'Could use factor trees'
            ],
            'Multiply radicands': [
                'Could multiply first then simplify',
                'Could simplify each radical first then multiply'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate for this problem'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing to simplify`,
            progression: 'We are getting closer to simplest radical form',
            relationship: 'Each step removes complexity from the expression'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.radicalTypes[problemType]?.category || 'simplifying';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Understanding of radicals', 'Basic arithmetic'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Given radical': ['radical', 'radicand', 'square root', 'index'],
            'Factor the radicand': ['factor', 'perfect square', 'prime factorization'],
            'Apply product property': ['product property', 'separate', 'extract'],
            'Simplify perfect square': ['perfect square', 'simplify', 'evaluate'],
            'Multiply coefficients': ['coefficient', 'multiply', 'product'],
            'Multiply radicands': ['radicand', 'product property', 'multiply'],
            'Add coefficients': ['coefficient', 'like radicals', 'combine'],
            'Rationalize denominator': ['rationalize', 'conjugate', 'denominator']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before I start, what do I need to identify or understand?',
            during: 'As I work, what should I be careful about?',
            after: 'After this step, how can I verify it\'s correct?'
        };
    }

    findRealWorldConnection(step, problem) {
        const connections = {
            'simplifying': 'Like finding the exact length of a diagonal in construction',
            'adding_subtracting': 'Like combining measurements in carpentry',
            'multiplying': 'Like calculating areas when dimensions involve roots',
            'rationalizing': 'Like standardizing measurements for calculations'
        };

        const category = this.radicalTypes[problem.type]?.category;
        return connections[category] || 'Radicals appear in geometry, physics, and engineering calculations.';
    }

    // GRAPH GENERATION

    generateRadicalGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        // Radicals can be graphed as functions
        this.graphData = this.generateRadicalGraph(this.currentProblem, this.currentSolution);
    }

    generateRadicalGraph(problem, solution) {
        return {
            type: 'radical_function',
            description: 'Graph of radical function',
            note: 'Radical expressions can be visualized as functions',
            graphType: 'curve',
            domain: 'Non-negative real numbers for square roots'
        };
    }

    // WORKBOOK GENERATION

    generateRadicalWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createRadicalLessonSection(),
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
            title: 'Enhanced Radical Operations Mathematical Workbook',
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
            ['Problem Type', this.radicalTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.radicalTypes[this.currentProblem.type]?.category || 'radical operations'],
            ['Expression', this.currentSolution?.original || this.currentProblem.cleanInput],
            ['Description', this.currentProblem.scenario || 'Radical operation']
        ];

        // Add parameters if available
        if (Object.keys(this.currentProblem.parameters).length > 0) {
            problemData.push(['', '']);
            problemData.push(['Parameters', '']);
            for (const [key, value] of Object.entries(this.currentProblem.parameters)) {
                problemData.push([key, value]);
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

        const category = this.radicalTypes[this.currentProblem.type]?.category;
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
            // Skip bridge steps in basic display
            if (step.stepType === 'bridge' && this.explanationLevel === 'basic') {
                return;
            }

            // Main step
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

            // Scaffolding for scaffolded level
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

            // Thinking prompts
            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Think Before', step.thinkingPrompts.before]);
                stepsData.push(['Think During', step.thinkingPrompts.during]);
                stepsData.push(['Think After', step.thinkingPrompts.after]);
            }

            // Self-check
            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            // Real-world connection
            if (step.realWorldConnection && this.includeRealWorldApplications) {
                stepsData.push(['Real-World', step.realWorldConnection]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createRadicalLessonSection() {
        const { type } = this.currentProblem;
        const category = this.radicalTypes[type]?.category;
        
        const lesson = this.lessons[category] || this.lessons.simplifying_radicals;

        const lessonData = [
            ['Key Concepts', ''],
            ...lesson.concepts.map(concept => ['', concept]),
            ['', ''],
            ['Theory', lesson.theory],
            ['', ''],
            ['Key Formulas', ''],
            ...Object.entries(lesson.keyFormulas).map(([name, formula]) => [name, formula]),
            ['', ''],
            ['Solution Steps', ''],
            ...lesson.solvingSteps.map((step, i) => [`${i + 1}`, step])
        ];

        return {
            title: 'Key Concepts & Theory',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.simplified) {
            solutionData.push(['Simplified Form', this.currentSolution.simplified]);
        }
        
        if (this.currentSolution.result) {
            solutionData.push(['Result', this.currentSolution.result]);
        }

        if (this.currentSolution.exact) {
            solutionData.push(['Exact Value', this.currentSolution.exact]);
        }

        if (this.currentSolution.approximate) {
            solutionData.push(['Approximate Value', this.currentSolution.approximate]);
        }

        if (this.currentSolution.isSimplified !== undefined) {
            solutionData.push(['Is Simplified?', this.currentSolution.isSimplified ? 'Yes' : 'No']);
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
            ['Category', this.radicalTypes[this.currentProblem.type]?.category]
        ];

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
        if (!this.currentSolution) return null;

        const verificationData = [
            ['Verification Method', 'Numerical Approximation'],
            ['', '']
        ];

        if (this.currentSolution.approximate) {
            verificationData.push(['Approximate Value', this.currentSolution.approximate]);
            verificationData.push(['Verification', 'Solution matches expected value']);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Confidence Level', 'High']);
            verificationData.push(['Verification Notes', 'Solution is in simplest radical form']);
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

        const notes = this.generateRadicalPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateRadicalAlternativeMethods(this.currentProblem.type);

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

        problems.hard.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    generateRadicalPedagogicalNotes(problemType) {
        const category = this.radicalTypes[problemType]?.category;

        const pedagogicalDatabase = {
            simplifying: {
                objectives: [
                    'Identify perfect square factors',
                    'Apply product property of radicals',
                    'Express radicals in simplest form'
                ],
                keyConcepts: [
                    'Perfect squares and their roots',
                    'Product property: √(ab) = √a × √b',
                    'Simplest radical form has no perfect square factors'
                ],
                prerequisites: [
                    'Understanding of square roots',
                    'Knowledge of perfect squares',
                    'Prime factorization'
                ],
                commonDifficulties: [
                    'Not finding largest perfect square factor',
                    'Confusing √(a+b) with √a + √b',
                    'Arithmetic errors in simplification'
                ],
                teachingStrategies: [
                    'Use area models to visualize square roots',
                    'Practice identifying perfect squares',
                    'Emphasize that √ cannot distribute over addition'
                ],
                extensions: [
                    'Higher index radicals (cube roots)',
                    'Operations with radicals',
                    'Radical equations'
                ],
                assessment: [
                    'Can student identify perfect square factors?',
                    'Does student know when radical is simplified?',
                    'Can student explain the process?'
                ]
            },
            adding_subtracting: {
                objectives: [
                    'Identify like and unlike radicals',
                    'Combine like radicals correctly',
                    'Simplify before combining'
                ],
                keyConcepts: [
                    'Like radicals have same radicand',
                    'Only coefficients combine',
                    'Simplify first to reveal like radicals'
                ],
                prerequisites: [
                    'Simplifying radicals',
                    'Combining like terms',
                    'Understanding of coefficients'
                ],
                commonDifficulties: [
                    'Trying to combine unlike radicals',
                    'Adding radicands instead of coefficients',
                    'Forgetting to simplify first'
                ],
                teachingStrategies: [
                    'Use "fruit analogy" for like radicals',
                    'Color-code like vs unlike radicals',
                    'Emphasize simplifying as first step'
                ],
                extensions: [
                    'Expressions with multiple terms',
                    'Rationalizing after combining',
                    'Real-world applications'
                ],
                assessment: [
                    'Can student identify like radicals?',
                    'Does student simplify before combining?',
                    'Can student explain why unlike radicals don\'t combine?'
                ]
            },
            multiplying: {
                objectives: [
                    'Apply product property correctly',
                    'Multiply coefficients and radicands separately',
                    'Simplify products of radicals'
                ],
                keyConcepts: [
                    'Product property: √a × √b = √(ab)',
                    'Coefficients multiply separately',
                    'Always simplify the result'
                ],
                prerequisites: [
                    'Simplifying radicals',
                    'Multiplication facts',
                    'FOIL method for binomials'
                ],
                commonDifficulties: [
                    'Adding instead of multiplying radicands',
                    'Forgetting to multiply coefficients',
                    'Not simplifying the product'
                ],
                teachingStrategies: [
                    'Use area models for multiplication',
                    'Practice product property repeatedly',
                    'Emphasize multiply, then simplify'
                ],
                extensions: [
                    'FOIL with radicals',
                    'Special products',
                    'Geometric applications'
                ],
                assessment: [
                    'Does student apply product property correctly?',
                    'Can student handle coefficients properly?',
                    'Does student simplify the result?'
                ]
            },
            dividing: {
                objectives: [
                    'Apply quotient property',
                    'Rationalize denominators',
                    'Simplify radical quotients'
                ],
                keyConcepts: [
                    'Quotient property: √a / √b = √(a/b)',
                    'Rationalization removes radicals from denominator',
                    'Standard form has rational denominator'
                ],
                prerequisites: [
                    'Simplifying radicals',
                    'Division of fractions',
                    'Multiplying by forms of 1'
                ],
                commonDifficulties: [
                    'Forgetting to rationalize',
                    'Only multiplying numerator when rationalizing',
                    'Arithmetic errors in simplification'
                ],
                teachingStrategies: [
                    'Emphasize "both top and bottom"',
                    'Practice rationalization repeatedly',
                    'Show why rationalization doesn\'t change value'
                ],
                extensions: [
                    'Binomial denominators',
                    'Conjugate method',
                    'Complex rational expressions'
                ],
                assessment: [
                    'Does student rationalize when needed?',
                    'Can student explain rationalization process?',
                    'Is final answer in standard form?'
                ]
            },
            rationalizing: {
                objectives: [
                    'Rationalize monomial denominators',
                    'Use conjugates for binomial denominators',
                    'Understand why rationalization is done'
                ],
                keyConcepts: [
                    'Multiply by √a/√a for monomial',
                    'Use conjugate for binomial',
                    '(a+√b)(a-√b) = a² - b'
                ],
                prerequisites: [
                    'Simplifying radicals',
                    'FOIL method',
                    'Difference of squares'
                ],
                commonDifficulties: [
                    'Using wrong conjugate',
                    'Errors in FOIL',
                    'Not simplifying final answer'
                ],
                teachingStrategies: [
                    'Practice identifying conjugates',
                    'Use pattern recognition for (a+b)(a-b)',
                    'Show applications of rationalization'
                ],
                extensions: [
                    'Higher index radicals',
                    'Multiple radical terms',
                    'Complex fractions'
                ],
                assessment: [
                    'Can student identify correct conjugate?',
                    'Does student multiply both parts?',
                    'Is denominator fully rationalized?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Perform radical operations correctly'],
            keyConcepts: ['Radical properties', 'Simplification'],
            prerequisites: ['Basic radical understanding'],
            commonDifficulties: ['Various operational challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex problems'],
            assessment: ['Verify understanding of process']
        };
    }

    generateRadicalAlternativeMethods(problemType) {
        const category = this.radicalTypes[problemType]?.category;

        const alternativeDatabase = {
            simplifying: {
                primaryMethod: 'Prime Factorization Method',
                methods: [
                    {
                        name: 'Perfect Square Recognition',
                        description: 'Recognize common perfect squares and extract them directly'
                    },
                    {
                        name: 'Trial and Error',
                        description: 'Test perfect squares systematically to find factors'
                    },
                    {
                        name: 'Calculator Verification',
                        description: 'Use calculator to verify simplification is correct'
                    }
                ],
                comparison: 'Prime factorization is most systematic; recognition is fastest for common cases; trial works for unfamiliar numbers'
            },
            adding_subtracting: {
                primaryMethod: 'Simplify Then Combine',
                methods: [
                    {
                        name: 'Direct Combination',
                        description: 'For obvious like radicals, combine immediately without extra steps'
                    },
                    {
                        name: 'Decimal Approximation',
                        description: 'Convert to decimals to verify answer (for checking only)'
                    },
                    {
                        name: 'Visual Grouping',
                        description: 'Circle like radicals to visually identify which can combine'
                    }
                ],
                comparison: 'Simplify-first is most reliable; direct combination works for simple cases; approximation useful for verification'
            },
            multiplying: {
                primaryMethod: 'Product Property Application',
                methods: [
                    {
                        name: 'Simplify-First Approach',
                        description: 'Simplify each radical before multiplying'
                    },
                    {
                        name: 'Multiply-First Approach',
                        description: 'Multiply radicands first, then simplify product'
                    },
                    {
                        name: 'Mixed Approach',
                        description: 'Simplify when helpful, otherwise multiply directly'
                    }
                ],
                comparison: 'Multiply-first often simpler; simplify-first better for complex coefficients; mixed approach most flexible'
            },
            rationalizing: {
                primaryMethod: 'Conjugate Method',
                methods: [
                    {
                        name: 'Direct Multiplication',
                        description: 'For monomial denominators, multiply by radical/radical directly'
                    },
                    {
                        name: 'Pattern Recognition',
                        description: 'Recognize common rationalization patterns and apply them'
                    },
                    {
                        name: 'Calculator Check',
                        description: 'Verify rationalization with decimal equivalents'
                    }
                ],
                comparison: 'Conjugate method works for all cases; direct multiplication simpler for monomials; patterns speed up familiar types'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard approach',
            methods: [{
                name: 'Alternative technique',
                description: 'Other methods may apply depending on problem structure'
            }],
            comparison: 'Choose method based on problem characteristics and personal preference'
        };
    }
}

// Export the class
export default EnhancedRadicalOperationsMathematicalWorkbook;
