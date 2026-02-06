// Enhanced Simplifying Radicals Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedSimplifyingRadicalsMathematicalWorkbook {
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
        this.initializeRadicalSolvers();
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
        this.initializePrimeFactorizationDatabase();
        this.initializeRadicalPropertiesDatabase();
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
            'sqrt': '√',
            'cuberoot': '∛',
            'fourthroot': '∜',
            'leq': '≤',
            'geq': '≥',
            'neq': '≠',
            'approx': '≈',
            'infinity': '∞',
            'plusminus': '±',
            'times': '×',
            'divide': '÷',
            'pi': 'π',
            'theta': 'θ',
            'alpha': 'α',
            'beta': 'β'
        };
    }

    initializeRadicalLessons() {
        this.lessons = {
            square_roots: {
                title: "Square Roots and Perfect Squares",
                concepts: [
                    "Square root undoes squaring: √(a²) = a for a ≥ 0",
                    "Perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144...",
                    "√(ab) = √a × √b (product property)",
                    "√(a/b) = √a / √b (quotient property)",
                    "Cannot simplify √(a + b) to √a + √b"
                ],
                theory: "Square roots represent the inverse operation of squaring. Understanding perfect squares is essential for simplifying radicals.",
                keyFormulas: {
                    "Product Property": "√(ab) = √a × √b",
                    "Quotient Property": "√(a/b) = √a / √b",
                    "Power Property": "√(a²) = |a|",
                    "Simplified Form": "a√b where b has no perfect square factors > 1"
                },
                perfectSquares: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400],
                solvingSteps: [
                    "Find the prime factorization of the radicand",
                    "Group factors into pairs (for square roots)",
                    "Extract perfect square factors from under the radical",
                    "Multiply extracted factors outside the radical",
                    "Leave remaining factors under the radical"
                ],
                applications: [
                    "Pythagorean theorem calculations",
                    "Distance formula",
                    "Area and perimeter problems",
                    "Physics equations (velocity, acceleration)"
                ]
            },

            simplifying_square_roots: {
                title: "Simplifying Square Root Expressions",
                concepts: [
                    "A radical is simplified when the radicand has no perfect square factors",
                    "Extract all perfect square factors",
                    "No fractions under the radical",
                    "No radicals in denominators (rationalized)",
                    "Combine like radicals when possible"
                ],
                theory: "Simplifying radicals means writing them in simplest form by extracting all perfect power factors.",
                keyFormulas: {
                    "Simplification": "√(a²b) = a√b",
                    "Multiple factors": "√(a²b²c) = ab√c",
                    "Large numbers": "Factor into primes, extract pairs"
                },
                simplificationCriteria: [
                    "No perfect square factors in radicand (except 1)",
                    "No fractions under the radical sign",
                    "No radicals in the denominator",
                    "Index (root) is as small as possible"
                ],
                solvingSteps: [
                    "Factor the radicand completely (prime factorization)",
                    "Identify perfect square factors",
                    "Rewrite using product property: √(a²b) = √(a²) × √b",
                    "Simplify perfect squares: √(a²) = a",
                    "Write final answer: a√b"
                ],
                applications: [
                    "Geometry: side lengths, areas",
                    "Algebra: solving quadratic equations",
                    "Trigonometry: exact values",
                    "Physics: motion and energy formulas"
                ]
            },

            cube_roots: {
                title: "Cube Roots and Perfect Cubes",
                concepts: [
                    "Cube root undoes cubing: ∛(a³) = a",
                    "Perfect cubes: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000...",
                    "∛(abc) = ∛a × ∛b × ∛c (product property)",
                    "Cube roots can be negative: ∛(-8) = -2",
                    "Group factors into triples for cube roots"
                ],
                theory: "Cube roots represent the inverse of cubing. Unlike square roots, cube roots of negative numbers are real.",
                keyFormulas: {
                    "Product Property": "∛(abc) = ∛a × ∛b × ∛c",
                    "Power Property": "∛(a³) = a",
                    "Simplified Form": "a∛b where b has no perfect cube factors > 1",
                    "Negative Radicands": "∛(-a) = -∛a"
                },
                perfectCubes: [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000],
                solvingSteps: [
                    "Find prime factorization",
                    "Group factors into triples",
                    "Extract perfect cube factors",
                    "Multiply extracted factors outside",
                    "Leave remaining factors under cube root"
                ],
                applications: [
                    "Volume calculations",
                    "Scaling problems (3D similarity)",
                    "Physics: density, pressure",
                    "Engineering: structural calculations"
                ]
            },

            higher_order_roots: {
                title: "Fourth Roots and Higher Order Roots",
                concepts: [
                    "nth root: ⁿ√a is the number that when raised to nth power gives a",
                    "Fourth root: ∜a means what number × itself 4 times = a",
                    "Perfect fourth powers: 1, 16, 81, 256, 625...",
                    "Even roots of negative numbers are not real",
                    "Group factors into groups of n for nth roots"
                ],
                theory: "Higher order roots extend the concept of square and cube roots to any positive integer index.",
                keyFormulas: {
                    "Product Property": "ⁿ√(ab) = ⁿ√a × ⁿ√b",
                    "Power Property": "ⁿ√(aⁿ) = a for odd n, |a| for even n",
                    "Simplified Form": "a ⁿ√b where b has no perfect nth power factors",
                    "Index Reduction": "Simplify the index when possible"
                },
                perfectFourthPowers: [1, 16, 81, 256, 625, 1296],
                perfectFifthPowers: [1, 32, 243, 1024, 3125],
                solvingSteps: [
                    "Identify the index (which root)",
                    "Find prime factorization",
                    "Group factors into groups of n",
                    "Extract perfect nth power factors",
                    "Simplify"
                ]
            },

            radical_variables: {
                title: "Simplifying Radicals with Variables",
                concepts: [
                    "√(x²) = |x| to ensure non-negative result",
                    "When x ≥ 0 assumed, √(x²) = x",
                    "Split exponents: √(x⁷) = √(x⁶ × x) = x³√x",
                    "Even exponents divide evenly by 2 for square roots",
                    "Apply same rules as with numbers"
                ],
                theory: "Variables under radicals follow the same rules as numbers, with special attention to absolute values and domain restrictions.",
                keyFormulas: {
                    "Even Powers": "√(x²ⁿ) = xⁿ (assuming x ≥ 0)",
                    "Odd Powers": "√(x²ⁿ⁺¹) = xⁿ√x",
                    "General": "ⁿ√(xᵐ) = xᵐ/ⁿ when simplified",
                    "Product": "√(x²y³) = x√(y² × y) = xy√y"
                },
                solvingSteps: [
                    "Identify exponents of each variable",
                    "Divide exponent by index of root",
                    "Extract whole number quotient outside",
                    "Leave remainder under radical",
                    "Simplify coefficients separately"
                ],
                applications: [
                    "Algebraic simplification",
                    "Solving radical equations",
                    "Calculus: derivatives and integrals",
                    "Physics: variable formulas"
                ]
            },

            rationalizing_denominators: {
                title: "Rationalizing Denominators",
                concepts: [
                    "No radicals should remain in denominator",
                    "Multiply by conjugate for binomial denominators",
                    "Multiply by radical for monomial denominators",
                    "Simplify after rationalizing",
                    "Result should be in simplest form"
                ],
                theory: "Rationalizing eliminates radicals from denominators, making expressions easier to work with and compare.",
                keyFormulas: {
                    "Monomial": "(a/√b) × (√b/√b) = a√b/b",
                    "Binomial": "(a/(b+√c)) × ((b-√c)/(b-√c))",
                    "Conjugate": "(a+√b)(a-√b) = a² - b",
                    "Multiple Radicals": "May require multiple steps"
                },
                techniques: {
                    monomial: "Multiply by √b/√b",
                    binomial: "Multiply by conjugate",
                    nested: "Work from innermost radical outward",
                    variables: "Same principles apply"
                },
                solvingSteps: [
                    "Identify type of denominator (monomial/binomial)",
                    "Determine rationalizing factor",
                    "Multiply numerator and denominator by rationalizing factor",
                    "Expand and simplify",
                    "Reduce if possible"
                ],
                applications: [
                    "Exact trigonometric values",
                    "Algebraic fractions",
                    "Calculus: limits and derivatives",
                    "Complex number operations"
                ]
            },

            adding_subtracting_radicals: {
                title: "Adding and Subtracting Radicals",
                concepts: [
                    "Only like radicals can be combined",
                    "Like radicals have same index and radicand",
                    "Simplify each radical first",
                    "Combine coefficients of like radicals",
                    "Keep radicand and index unchanged"
                ],
                theory: "Adding radicals is analogous to combining like terms in algebra - only those with identical radical parts can be combined.",
                keyFormulas: {
                    "Like Radicals": "a√b + c√b = (a+c)√b",
                    "Unlike Radicals": "√2 + √3 cannot be simplified",
                    "After Simplification": "√8 + √2 = 2√2 + √2 = 3√2",
                    "General Rule": "Simplify first, then combine"
                },
                solvingSteps: [
                    "Simplify each radical completely",
                    "Identify like radicals",
                    "Combine coefficients of like radicals",
                    "Keep unlike radicals separate",
                    "Write final answer in simplest form"
                ],
                applications: [
                    "Perimeter calculations with radicals",
                    "Algebraic expressions",
                    "Physics: vector components",
                    "Engineering: combined measurements"
                ]
            },

            multiplying_radicals: {
                title: "Multiplying Radicals",
                concepts: [
                    "√a × √b = √(ab) when indices are the same",
                    "Multiply coefficients and radicands separately",
                    "(a√b)(c√d) = ac√(bd)",
                    "Simplify the result",
                    "FOIL for binomials with radicals"
                ],
                theory: "The product property of radicals allows multiplication under a single radical, then simplification.",
                keyFormulas: {
                    "Product Property": "√a × √b = √(ab)",
                    "With Coefficients": "(a√b)(c√d) = ac√(bd)",
                    "Binomials": "(a+√b)(c+√d) = ac + a√d + c√b + √(bd)",
                    "Conjugates": "(a+√b)(a-√b) = a² - b"
                },
                solvingSteps: [
                    "Multiply coefficients together",
                    "Multiply radicands together",
                    "Simplify the resulting radical",
                    "For binomials, use FOIL",
                    "Combine like terms"
                ],
                applications: [
                    "Area calculations",
                    "Expanding algebraic expressions",
                    "Rationalizing denominators",
                    "Simplifying complex expressions"
                ]
            },

            dividing_radicals: {
                title: "Dividing Radicals",
                concepts: [
                    "√a / √b = √(a/b) when indices are the same",
                    "Simplify numerator and denominator separately",
                    "Rationalize denominator if needed",
                    "(a√b) / (c√d) = (a/c)√(b/d)",
                    "Reduce fractions when possible"
                ],
                theory: "Division of radicals uses the quotient property and often requires rationalization.",
                keyFormulas: {
                    "Quotient Property": "√a / √b = √(a/b)",
                    "With Coefficients": "(a√b) / (c√d) = (a/c) × √(b/d)",
                    "Rationalization": "Multiply by √d/√d to clear denominator",
                    "Simplification": "Reduce before and after"
                },
                solvingSteps: [
                    "Simplify numerator and denominator radicals",
                    "Apply quotient property if helpful",
                    "Rationalize denominator",
                    "Simplify the result",
                    "Reduce fraction"
                ],
                applications: [
                    "Ratio problems",
                    "Rate calculations",
                    "Scaling problems",
                    "Simplifying complex fractions"
                ]
            },

            radical_equations: {
                title: "Solving Radical Equations",
                concepts: [
                    "Isolate the radical first",
                    "Raise both sides to appropriate power",
                    "Solve resulting equation",
                    "Check all solutions (extraneous solutions possible)",
                    "Domain restrictions apply"
                ],
                theory: "Solving radical equations requires eliminating radicals by raising to powers, which can introduce extraneous solutions.",
                keyFormulas: {
                    "Squaring": "(√a)² = a",
                    "Cubing": "(∛a)³ = a",
                    "nth Power": "(ⁿ√a)ⁿ = a",
                    "Verification": "Always check in original equation"
                },
                solvingSteps: [
                    "Isolate radical on one side",
                    "Raise both sides to power matching index",
                    "Solve resulting equation",
                    "Check solution in original equation",
                    "Reject extraneous solutions"
                ],
                applications: [
                    "Physics: motion problems",
                    "Geometry: finding dimensions",
                    "Engineering: design calculations",
                    "Real-world problem solving"
                ]
            }
        };
    }

    initializeRadicalSolvers() {
        this.radicalTypes = {
            square_root_integer: {
                patterns: [
                    /sqrt\((\d+)\)/i,
                    /√(\d+)/,
                    /simplify.*√(\d+)/i
                ],
                solver: this.simplifySquareRootInteger.bind(this),
                name: 'Square Root of Integer',
                category: 'square_roots',
                description: 'Simplifies √n where n is an integer'
            },

            square_root_fraction: {
                patterns: [
                    /sqrt\((\d+)\/(\d+)\)/i,
                    /√\((\d+)\/(\d+)\)/,
                    /√(\d+)\/(\d+)/
                ],
                solver: this.simplifySquareRootFraction.bind(this),
                name: 'Square Root of Fraction',
                category: 'square_roots',
                description: 'Simplifies √(a/b)'
            },

            square_root_variable: {
                patterns: [
                    /sqrt\(([a-z]\^\d+)\)/i,
                    /√\(([a-z]\^\d+)\)/,
                    /√([a-z]\^\d+)/
                ],
                solver: this.simplifySquareRootVariable.bind(this),
                name: 'Square Root with Variables',
                category: 'radical_variables',
                description: 'Simplifies √(xⁿ)'
            },

            square_root_mixed: {
                patterns: [
                    /sqrt\((\d+)([a-z]\^\d+)\)/i,
                    /√\((\d+)([a-z])\^(\d+)\)/
                ],
                solver: this.simplifySquareRootMixed.bind(this),
                name: 'Square Root with Coefficients and Variables',
                category: 'radical_variables',
                description: 'Simplifies √(nxᵐ)'
            },

            cube_root_integer: {
                patterns: [
                    /cbrt\((\d+)\)/i,
                    /∛(\d+)/,
                    /cube.*root.*(\d+)/i
                ],
                solver: this.simplifyCubeRootInteger.bind(this),
                name: 'Cube Root of Integer',
                category: 'cube_roots',
                description: 'Simplifies ∛n'
            },

            nth_root_integer: {
                patterns: [
                    /(\d+).*root.*(\d+)/i,
                    /root\[(\d+)\]\((\d+)\)/i
                ],
                solver: this.simplifyNthRootInteger.bind(this),
                name: 'nth Root of Integer',
                category: 'higher_order_roots',
                description: 'Simplifies ⁿ√m'
            },

            rationalize_monomial: {
                patterns: [
                    /rationalize.*\d+\/√\d+/i,
                    /(\d+)\/√(\d+)/
                ],
                solver: this.rationalizeMonomial.bind(this),
                name: 'Rationalize Monomial Denominator',
                category: 'rationalizing_denominators',
                description: 'Rationalizes a/√b'
            },

            rationalize_binomial: {
                patterns: [
                    /rationalize.*\/\(.*[+\-].*√/i,
                    /\d+\/\(\d+\s*[+\-]\s*√\d+\)/
                ],
                solver: this.rationalizeBinomial.bind(this),
                name: 'Rationalize Binomial Denominator',
                category: 'rationalizing_denominators',
                description: 'Rationalizes using conjugate'
            },

            add_like_radicals: {
                patterns: [
                    /(\d*)√(\d+)\s*\+\s*(\d*)√(\d+)/,
                    /add.*radicals/i
                ],
                solver: this.addLikeRadicals.bind(this),
                name: 'Add/Subtract Like Radicals',
                category: 'adding_subtracting_radicals',
                description: 'Combines a√b ± c√b'
            },

            multiply_radicals: {
                patterns: [
                    /√(\d+)\s*\*\s*√(\d+)/,
                    /multiply.*√.*√/i
                ],
                solver: this.multiplyRadicals.bind(this),
                name: 'Multiply Radicals',
                category: 'multiplying_radicals',
                description: 'Multiplies √a × √b'
            },

            divide_radicals: {
                patterns: [
                    /√(\d+)\s*\/\s*√(\d+)/,
                    /divide.*√.*√/i
                ],
                solver: this.divideRadicals.bind(this),
                name: 'Divide Radicals',
                category: 'dividing_radicals',
                description: 'Divides √a / √b'
            },

            simplify_radical_expression: {
                patterns: [
                    /simplify/i,
                    /reduce/i
                ],
                solver: this.simplifyRadicalExpression.bind(this),
                name: 'Simplify General Radical Expression',
                category: 'simplifying_square_roots',
                description: 'Simplifies any radical expression'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            square_roots: {
                'Finding perfect squares': [
                    'Missing perfect square factors in factorization',
                    'Incorrectly identifying perfect squares',
                    'Stopping before all perfect squares are extracted'
                ],
                'Prime factorization': [
                    'Incomplete factorization',
                    'Making arithmetic errors in factoring',
                    'Not recognizing composite numbers'
                ],
                'Extracting factors': [
                    'Forgetting to take square root of extracted factor',
                    'Leaving perfect squares under the radical',
                    'Extracting non-perfect-square factors'
                ]
            },
            rationalizing: {
                'Monomial denominators': [
                    'Only multiplying numerator by radical',
                    'Not simplifying after rationalizing',
                    'Forgetting to multiply denominators'
                ],
                'Binomial denominators': [
                    'Not using the conjugate',
                    'Sign errors when distributing conjugate',
                    'Forgetting to FOIL properly'
                ]
            },
            operations: {
                'Adding radicals': [
                    'Adding unlike radicals (√2 + √3 ≠ √5)',
                    'Not simplifying radicals first',
                    'Adding radicands instead of coefficients'
                ],
                'Multiplying radicals': [
                    'Multiplying indices instead of radicands',
                    'Not simplifying the result',
                    'Forgetting to multiply coefficients'
                ],
                'Properties': [
                    'Thinking √(a+b) = √a + √b (WRONG)',
                    'Confusing product and sum properties',
                    'Incorrect application of quotient property'
                ]
            },
            variables: {
                'Absolute value': [
                    'Forgetting |x| when taking even roots of x²',
                    'Not considering domain restrictions',
                    'Incorrectly simplifying odd powers'
                ],
                'Exponent division': [
                    'Not dividing exponent by index correctly',
                    'Forgetting remainder under radical',
                    'Sign errors with negative exponents'
                ]
            }
        };

        this.errorPrevention = {
            factorization_check: {
                reminder: 'Always verify prime factorization is complete',
                method: 'Multiply factors back to check'
            },
            perfect_square_identification: {
                reminder: 'Memorize perfect squares up to at least 15²',
                method: 'Create a reference list: 1, 4, 9, 16, 25, 36...'
            },
            property_misuse: {
                reminder: 'Product property works for multiplication, not addition',
                method: 'Remember: √(ab) = √a√b, but √(a+b) ≠ √a + √b'
            },
            simplification_completeness: {
                reminder: 'Keep simplifying until no perfect powers remain under radical',
                method: 'Check final radicand has no perfect square factors'
            },
            rationalization: {
                reminder: 'Multiply BOTH numerator and denominator',
                method: 'Write as multiplication by form of 1: (√b/√b)'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why radicals work this way and their mathematical meaning',
                language: 'intuitive understanding of roots and powers'
            },
            procedural: {
                focus: 'Step-by-step process for simplifying radicals',
                language: 'clear instructions and algorithms'
            },
            visual: {
                focus: 'Geometric and visual representations',
                language: 'area models and factor trees'
            },
            algebraic: {
                focus: 'Formal radical properties and rules',
                language: 'precise mathematical notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple terms, avoid heavy notation',
                detail: 'essential steps only',
                examples: 'small perfect squares (4, 9, 16, 25)'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'medium numbers, basic variables'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible',
                detail: 'every tiny step with real-world analogies',
                examples: 'concrete visual models',
                analogies: true,
                visualization: 'simple drawings and factor trees'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive with all properties cited',
                examples: 'complex numbers and variables'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            pythagorean: {
                scenario: "Finding distances using Pythagorean theorem",
                equation: "c = √(a² + b²)",
                examples: [
                    "Find the diagonal of a rectangle with sides 6 and 8: √(36+64) = √100 = 10",
                    "Ladder problem: √(13² - 5²) = √(169-25) = √144 = 12 feet"
                ],
                context: "Radicals appear naturally in distance and length calculations"
            },
            geometry: {
                scenario: "Area and volume calculations",
                equation: "Various formulas involving square and cube roots",
                examples: [
                    "Side of square with area 50: s = √50 = 5√2",
                    "Side of cube with volume 54: s = ∛54 = 3∛2"
                ],
                context: "Finding dimensions from area or volume requires roots"
            },
            physics_velocity: {
                scenario: "Free fall and projectile motion",
                equation: "v = √(2gh) for free fall velocity",
                examples: [
                    "Object dropped 45m: v = √(2×10×45) = √900 = 30 m/s"
                ],
                context: "Many physics formulas involve square roots"
            },
            golden_ratio: {
                scenario: "Architecture and design using golden ratio",
                equation: "φ = (1 + √5)/2 ≈ 1.618",
                examples: [
                    "Rectangle proportions in classical architecture",
                    "Spiral growth patterns in nature"
                ],
                context: "The golden ratio contains √5 and appears throughout art and nature"
            },
            engineering: {
                scenario: "Structural calculations and stress analysis",
                equation: "Various engineering formulas with radicals",
                examples: [
                    "Beam deflection calculations",
                    "Resonant frequency: f = (1/2π)√(k/m)"
                ],
                context: "Engineering requires simplifying radical expressions for precision"
            },
            finance: {
                scenario: "Compound interest and growth rates",
                equation: "Rate = ⁿ√(Final/Initial) - 1",
                examples: [
                    "Average annual return over 4 years: ⁴√(2) - 1 for doubling"
                ],
                context: "Finding average rates requires nth roots"
            },
            statistics: {
                scenario: "Standard deviation calculations",
                equation: "σ = √(Σ(x-μ)²/n)",
                examples: [
                    "Computing spread of data requires square roots"
                ],
                context: "Statistical measures often involve simplifying radicals"
            },
            computer_graphics: {
                scenario: "3D distance and normalization",
                equation: "d = √(x² + y² + z²)",
                examples: [
                    "Distance between 3D points",
                    "Vector normalization in graphics"
                ],
                context: "Graphics programming requires constant radical calculations"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            square_roots: {
                skills: ['Multiplication', 'Perfect squares', 'Prime factorization', 'Exponents'],
                priorKnowledge: [
                    'What squaring means',
                    'Perfect squares 1-144',
                    'How to factor numbers',
                    'Square root undoes squaring'
                ],
                checkQuestions: [
                    "What is 7²?",
                    "What is √49?",
                    "Factor 24 into primes",
                    "Is 50 a perfect square?"
                ]
            },
            simplifying_square_roots: {
                skills: ['Prime factorization', 'Perfect square recognition', 'Product property', 'Exponent rules'],
                priorKnowledge: [
                    'How to find prime factors',
                    'Grouping factors into pairs',
                    '√(ab) = √a × √b',
                    'Extracting perfect squares'
                ],
                checkQuestions: [
                    "Factor 72 completely",
                    "What perfect squares divide 72?",
                    "Simplify √4",
                    "What is √(9×5)?"
                ]
            },
            cube_roots: {
                skills: ['Cubing numbers', 'Perfect cubes', 'Prime factorization', 'Grouping in threes'],
                priorKnowledge: [
                    'What cubing means',
                    'Perfect cubes 1-1000',
                    'Cube root undoes cubing',
                    'Negative numbers can be cubed'
                ],
                checkQuestions: [
                    "What is 4³?",
                    "What is ∛64?",
                    "Is 27 a perfect cube?",
                    "What is ∛(-8)?"
                ]
            },
            radical_variables: {
                skills: ['Exponent rules', 'Variable manipulation', 'Absolute value', 'Domain awareness'],
                priorKnowledge: [
                    'How exponents work with variables',
                    'Dividing exponents',
                    'When absolute value is needed',
                    'Domain restrictions for even roots'
                ],
                checkQuestions: [
                    "Simplify x⁶ ÷ x²",
                    "What is (x³)²?",
                    "Does √(x²) = x always?",
                    "When is √x defined?"
                ]
            },
            rationalizing_denominators: {
                skills: ['Fraction multiplication', 'Conjugates', 'FOIL', 'Simplifying radicals'],
                priorKnowledge: [
                    'Multiplying fractions',
                    'Difference of squares pattern',
                    'What conjugates are',
                    'Why we rationalize'
                ],
                checkQuestions: [
                    "What is (3/4) × (5/5)?",
                    "What is conjugate of 2+√3?",
                    "Expand (a+b)(a-b)",
                    "Why no radicals in denominator?"
                ]
            },
            adding_radicals: {
                skills: ['Simplifying radicals', 'Like terms', 'Combining coefficients'],
                priorKnowledge: [
                    'What makes radicals "like"',
                    'How to simplify first',
                    'Adding coefficients only',
                    'When radicals can\'t be combined'
                ],
                checkQuestions: [
                    "Can √2 + √3 be combined?",
                    "Simplify √8",
                    "Combine 3x + 5x",
                    "Is √8 = 2√2?"
                ]
            },
            multiplying_radicals: {
                skills: ['Product property', 'FOIL', 'Simplifying', 'Distributing'],
                priorKnowledge: [
                    '√a × √b = √(ab)',
                    'Multiply coefficients and radicands separately',
                    'Always simplify result',
                    'FOIL for binomials'
                ],
                checkQuestions: [
                    "What is √2 × √8?",
                    "Multiply: 3 × 4",
                    "Expand (x+2)(x+3)",
                    "Simplify √12"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            factor_tree: {
                description: "Visual tree showing prime factorization",
                analogy: "Breaking down a number into its building blocks",
                visualization: "Draw branches showing each factorization step",
                suitableFor: ['square_roots', 'cube_roots', 'simplifying'],
                explanation: "Helps identify perfect square/cube factors visually"
            },
            area_model: {
                description: "Square area representing the radicand",
                analogy: "Finding the side length of a square with given area",
                visualization: "Draw square, show side length relationship",
                suitableFor: ['square_roots', 'pythagorean'],
                explanation: "√n is the side of a square with area n"
            },
            number_line: {
                description: "Radicals positioned on number line",
                analogy: "Finding location of irrational numbers",
                visualization: "Mark approximate positions of simplified radicals",
                suitableFor: ['all_radicals'],
                explanation: "Shows relative size and ordering of radicals"
            },
            grouping_circles: {
                description: "Circle pairs/triples of factors",
                analogy: "Grouping identical items into sets",
                visualization: "Circle groups of 2 (squares) or 3 (cubes)",
                suitableFor: ['square_roots', 'cube_roots', 'nth_roots'],
                explanation: "Each complete group comes out of the radical"
            },
            conjugate_multiplication: {
                description: "Visual representation of (a+√b)(a-√b)",
                analogy: "Creating a pattern that eliminates the radical",
                visualization: "Show FOIL with middle terms canceling",
                suitableFor: ['rationalizing', 'multiplying'],
                explanation: "Conjugate multiplication creates difference of squares"
            },
            exponent_division: {
                description: "Dividing exponent by index with remainder",
                analogy: "Dividing a quantity into equal groups",
                visualization: "Show exponent ÷ index = quotient R remainder",
                suitableFor: ['radical_variables', 'nth_roots'],
                explanation: "Quotient goes outside, remainder stays under radical"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "√4",
                    solution: 2,
                    steps: ["Recognize 4 is a perfect square", "√4 = 2"],
                    difficulty: "easy"
                },
                {
                    problem: "√16",
                    solution: 4,
                    steps: ["16 = 4²", "√16 = 4"],
                    difficulty: "easy"
                },
                {
                    problem: "√9",
                    solution: 3,
                    steps: ["9 = 3²", "√9 = 3"],
                    difficulty: "easy"
                },
                {
                    problem: "∛8",
                    solution: 2,
                    steps: ["8 = 2³", "∛8 = 2"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "√12",
                    solution: "2√3",
                    steps: [
                        "12 = 4 × 3",
                        "√12 = √(4×3) = √4 × √3",
                        "= 2√3"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "√50",
                    solution: "5√2",
                    steps: [
                        "50 = 25 × 2",
                        "√50 = √(25×2) = √25 × √2",
                        "= 5√2"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "√18",
                    solution: "3√2",
                    steps: [
                        "18 = 9 × 2",
                        "√18 = √(9×2) = √9 × √2",
                        "= 3√2"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "∛54",
                    solution: "3∛2",
                    steps: [
                        "54 = 27 × 2",
                        "∛54 = ∛(27×2) = ∛27 × ∛2",
                        "= 3∛2"
                    ],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "√72",
                    solution: "6√2",
                    steps: [
                        "Prime factorization: 72 = 2³ × 3²",
                        "Group pairs: √(2² × 2 × 3²)",
                        "Extract perfect squares: 2 × 3 × √2",
                        "= 6√2"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "√(48x⁷)",
                    solution: "4x³√(3x)",
                    steps: [
                        "48 = 16 × 3, x⁷ = x⁶ × x",
                        "√(16 × 3 × x⁶ × x)",
                        "= 4x³√(3x)"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Rationalize: 6/√3",
                    solution: "2√3",
                    steps: [
                        "Multiply by √3/√3",
                        "= (6√3)/(√3×√3)",
                        "= (6√3)/3 = 2√3"
                    ],
                    difficulty: "hard"
                }
            ],
            byType: {
                perfect_squares: [
                    { problem: "√25", solution: 5 },
                    { problem: "√49", solution: 7 },
                    { problem: "√100", solution: 10 }
                ],
                simple_simplification: [
                    { problem: "√8", solution: "2√2" },
                    { problem: "√27", solution: "3√3" },
                    { problem: "√20", solution: "2√5" }
                ],
                cube_roots: [
                    { problem: "∛27", solution: 3 },
                    { problem: "∛125", solution: 5 },
                    { problem: "∛16", solution: "2∛2" }
                ],
                variables: [
                    { problem: "√(x⁴)", solution: "x²" },
                    { problem: "√(9x²)", solution: "3x" },
                    { problem: "√(x⁶y⁴)", solution: "x³y²" }
                ],
                rationalization: [
                    { problem: "2/√2", solution: "√2" },
                    { problem: "1/(2+√3)", solution: "(2-√3)" },
                    { problem: "5/√5", solution: "√5" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            sum_property: {
                misconception: "√(a+b) = √a + √b",
                reality: "This is FALSE. √(a+b) ≠ √a + √b",
                correctiveExample: "√(9+16) = √25 = 5, but √9 + √16 = 3 + 4 = 7 ≠ 5",
                commonIn: ['adding_radicals', 'all_operations']
            },
            coefficient_confusion: {
                misconception: "2√3 means √(2×3) = √6",
                reality: "2√3 means 2 times √3, not √6",
                correctiveExample: "2√3 = √3 + √3, approximately 3.46, while √6 ≈ 2.45",
                commonIn: ['notation', 'multiplying']
            },
            negative_squares: {
                misconception: "√(x²) = x always",
                reality: "√(x²) = |x| to ensure non-negative result",
                correctiveExample: "If x = -3, then √((-3)²) = √9 = 3 = |-3|, not -3",
                commonIn: ['radical_variables']
            },
            unlike_radicals: {
                misconception: "√2 + √3 can be combined to get √5",
                reality: "Unlike radicals cannot be combined",
                correctiveExample: "√2 + √3 ≈ 1.414 + 1.732 = 3.146, but √5 ≈ 2.236",
                commonIn: ['adding_subtracting_radicals']
            },
            perfect_square_identification: {
                misconception: "Stopping too early when simplifying",
                reality: "Must extract ALL perfect square factors",
                correctiveExample: "√72 = √(4×18) = 2√18 is incomplete; should be √(36×2) = 6√2",
                commonIn: ['simplifying_square_roots']
            },
            rationalization_incomplete: {
                misconception: "Only multiplying numerator when rationalizing",
                reality: "Must multiply both numerator AND denominator",
                correctiveExample: "3/√2 becomes (3√2)/2, not just 3√2",
                commonIn: ['rationalizing_denominators']
            },
            index_confusion: {
                misconception: "√x × √x = √(x²) = x",
                reality: "√x × √x = x (not √(x²) first)",
                correctiveExample: "√5 × √5 = 5, directly by definition of square root",
                commonIn: ['multiplying_radicals']
            },
            absolute_value_neglect: {
                misconception: "Ignoring absolute value with even roots",
                reality: "Even roots always produce non-negative results",
                correctiveExample: "√((-4)²) = √16 = 4, not -4",
                commonIn: ['radical_variables', 'square_roots']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            prime_factorization: {
                analogy: "Breaking down into building blocks",
                explanation: "Like breaking a LEGO structure into individual bricks - each brick is a prime number that can't be broken down further",
                suitableFor: ['square_roots', 'cube_roots', 'simplifying'],
                ELI5: "Imagine you have a big tower of blocks. We take it apart until we have only the smallest blocks that can't be split anymore."
            },
            extracting_squares: {
                analogy: "Finding complete pairs",
                explanation: "Like organizing socks - each pair that matches comes out of the drawer (radical), single socks stay in",
                suitableFor: ['square_roots', 'simplifying'],
                ELI5: "We're looking for matching pairs of numbers. Every time we find a pair, we take one out to play. The lonely numbers stay inside the √ house."
            },
            extracting_cubes: {
                analogy: "Finding complete triplets",
                explanation: "Like organizing into teams of three - each complete trio comes out, individuals stay under the radical",
                suitableFor: ['cube_roots'],
                ELI5: "We need groups of three friends to go outside and play. If you have three of the same number, one goes out. Others wait inside the ∛ house."
            },
            rationalization: {
                analogy: "Cleaning the basement",
                explanation: "Like moving clutter from the basement (denominator) to the attic (numerator) - same stuff, better location",
                suitableFor: ['rationalizing_denominators'],
                ELI5: "We don't like messy basements with √ symbols. So we multiply by a special 1 to move the √ upstairs where it's okay."
            },
            like_radicals: {
                analogy: "Same type of fruit",
                explanation: "Like adding apples to apples - you can combine them. But apples and oranges (unlike radicals) stay separate",
                suitableFor: ['adding_subtracting_radicals'],
                ELI5: "3 apples + 2 apples = 5 apples. But 3 apples + 2 oranges can't be combined into one thing - they're different fruits, just like √2 and √3 are different."
            },
            conjugate: {
                analogy: "Using a magic eraser",
                explanation: "The conjugate is like a special eraser that removes √ from denominators using the (a+b)(a-b) = a²-b² pattern",
                suitableFor: ['rationalizing_denominators', 'binomials'],
                ELI5: "When we have a+√b downstairs, we use a-√b as our magic wand. When they multiply, the √ disappears!"
            },
            square_root_meaning: {
                analogy: "Finding the side of a square",
                explanation: "√n is the length of the side of a square that has area n",
                suitableFor: ['square_roots', 'concept'],
                ELI5: "If you have a square playground with area 25, each side is √25 = 5 steps long."
            },
            cube_root_meaning: {
                analogy: "Finding the edge of a cube",
                explanation: "∛n is the length of the edge of a cube that has volume n",
                suitableFor: ['cube_roots', 'concept'],
                ELI5: "If you have a cubic box that holds 8 toy blocks, each edge is ∛8 = 2 blocks long."
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            square_root_integer: {
                level1: "What type of number is under the radical?",
                level2: "Can you find the prime factorization?",
                level3: "Look for perfect square factors (numbers that appear in pairs)",
                level4: "Extract each pair: one factor comes out, the rest stay under √"
            },
            cube_root_integer: {
                level1: "What type of root is this?",
                level2: "Find the prime factorization",
                level3: "Look for perfect cube factors (numbers appearing in triples)",
                level4: "Extract each triple: one factor comes out, the rest stay under ∛"
            },
            rationalize_monomial: {
                level1: "What's the goal when rationalizing?",
                level2: "What can you multiply √b by to make it rational?",
                level3: "Multiply both top and bottom by √b",
                level4: "Multiply and simplify: (a√b)/b"
            },
            rationalize_binomial: {
                level1: "What's in the denominator?",
                level2: "What pattern eliminates radicals from (a+√b)(a-√b)?",
                level3: "Multiply by the conjugate",
                level4: "Use (a+√b)(a-√b) = a² - b to eliminate the radical"
            },
            add_radicals: {
                level1: "Can these radicals be combined?",
                level2: "Do they have the same radicand and index?",
                level3: "Simplify each radical first to check if they're alike",
                level4: "If alike, add/subtract coefficients; if not, leave separate"
            },
            multiply_radicals: {
                level1: "What's the product property of radicals?",
                level2: "Can you multiply under one radical?",
                level3: "√a × √b = √(ab)",
                level4: "Multiply radicands, multiply coefficients, then simplify"
            },
            variables: {
                level1: "What's the exponent on the variable?",
                level2: "How does the exponent relate to the index?",
                level3: "Divide the exponent by the index (2 for square roots)",
                level4: "Quotient goes outside, remainder stays under radical"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Simplify: √16",
                    answer: 4,
                    assesses: "perfect_squares",
                    difficulty: "basic"
                },
                {
                    question: "Simplify: √12",
                    answer: "2√3",
                    assesses: "square_root_simplification",
                    difficulty: "basic"
                },
                {
                    question: "Simplify: √50",
                    answer: "5√2",
                    assesses: "square_root_simplification",
                    difficulty: "intermediate"
                },
                {
                    question: "Simplify: ∛27",
                    answer: 3,
                    assesses: "cube_roots",
                    difficulty: "intermediate"
                },
                {
                    question: "Rationalize: 3/√2",
                    answer: "(3√2)/2",
                    assesses: "rationalization",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "What is the first step to simplify √72?",
                    options: [
                        "Find the prime factorization",
                        "Divide by 2",
                        "Take the square root",
                        "Add the digits"
                    ],
                    correct: "Find the prime factorization",
                    explanation: "Prime factorization helps identify perfect square factors"
                },
                {
                    question: "Which factors should you extract from √(2² × 3² × 5)?",
                    options: ["2 and 3", "2 only", "3 only", "5 only"],
                    correct: "2 and 3",
                    explanation: "Extract all perfect squares: both 2² and 3²"
                },
                {
                    question: "Can √2 + √3 be combined?",
                    options: ["Yes, to √5", "Yes, to √6", "No", "Only if simplified first"],
                    correct: "No",
                    explanation: "Unlike radicals cannot be combined"
                },
                {
                    question: "To rationalize a/√b, multiply by:",
                    options: ["√b/√b", "b/b", "a/a", "√a/√a"],
                    correct: "√b/√b",
                    explanation: "This clears the radical from denominator"
                }
            ],
            summative: [
                {
                    question: "Simplify completely: √(72x⁸y⁵)",
                    answer: "6x⁴y²√(2y)",
                    showsWork: true,
                    rubric: {
                        prime_factorization: 1,
                        extract_numbers: 1,
                        extract_variables: 1,
                        simplify: 1,
                        correct_answer: 1
                    }
                },
                {
                    question: "Rationalize and simplify: 12/(3-√3)",
                    answer: "3(3+√3)/2 or (9+3√3)/2",
                    showsWork: true,
                    rubric: {
                        identify_conjugate: 1,
                        multiply_correctly: 2,
                        simplify: 1,
                        final_form: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "√4", "√9", "√16", "√25",
                    "∛8", "∛27", "∛64"
                ],
                medium: [
                    "√18", "√32", "√45", "√72",
                    "∛24", "∛81", "√(36x²)"
                ],
                hard: [
                    "√(128x⁷y⁹)", "∛(250a⁶b⁵)",
                    "Rationalize: 5/(2-√5)",
                    "(√3 + √2)(√3 - √2)"
                ]
            },
            byObjective: {
                canSimplifyPerfectSquares: [
                    "√1", "√4", "√9", "√16", "√25", "√36"
                ],
                canSimplifyNonPerfectSquares: [
                    "√8", "√12", "√18", "√20", "√27", "√32"
                ],
                canSimplifyWithVariables: [
                    "√(x²)", "√(9x⁴)", "√(x⁶y²)", "√(25a²b⁴)"
                ],
                canRationalize: [
                    "1/√2", "3/√5", "2/√3", "5/√10"
                ],
                canAddRadicals: [
                    "2√3 + 5√3", "√8 + √2", "√12 + √27"
                ],
                canMultiplyRadicals: [
                    "√2 × √8", "√3 × √12", "(2√5)(3√2)"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "perfect_square": "Take square root directly",
                "not_perfect_square": "Find prime factorization → extract pairs",
                "has_variables": "Divide exponents by index → extract quotient",
                "fraction_under_radical": "Simplify numerator and denominator separately",
                "radical_in_denominator": "Rationalize denominator",
                "adding_radicals": "Simplify each first → combine like radicals",
                "multiplying_radicals": "Multiply radicands → simplify result"
            },
            whenToUseWhat: {
                prime_factorization: "When radicand is not obviously a perfect power",
                product_property: "When multiplying or when factoring helps",
                quotient_property: "When dealing with fractions under radical",
                rationalization: "When radical appears in denominator",
                like_radicals: "Only when radicands and indices match exactly"
            },
            methodSelection: {
                factorsToConsider: [
                    "Is it a perfect square/cube?",
                    "Size of the number (small vs large)",
                    "Presence of variables",
                    "Fractions involved?",
                    "Multiple radicals?"
                ],
                generalApproach: [
                    "1. Identify type of radical and what needs simplifying",
                    "2. Find prime factorization if not perfect power",
                    "3. Group factors by index (pairs for √, triples for ∛)",
                    "4. Extract perfect powers",
                    "5. Simplify and verify"
                ]
            },
            optimizationTips: {
                "Memorize perfect squares": "1-20² for quick recognition",
                "Memorize perfect cubes": "1-10³ for cube roots",
                "Factor tree method": "Systematic for complex numbers",
                "Division method": "Quick for variables (exponent ÷ index)",
                "Check factorization": "Multiply back to verify"
            },
            simplificationChecklist: [
                "All perfect power factors extracted?",
                "No fractions under radical?",
                "No radicals in denominator?",
                "Coefficients combined?",
                "Answer in simplest form?"
            ]
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Perfect Squares Sprint",
                    timeLimit: 60,
                    problems: [
                        "√4", "√9", "√16", "√25", "√36",
                        "√49", "√64", "√81", "√100", "√121"
                    ]
                },
                {
                    name: "Simplification Challenge",
                    timeLimit: 120,
                    problems: [
                        "√8", "√12", "√18", "√20", "√27",
                        "√32", "√45", "√48", "√50", "√72"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Radical Sudoku",
                    problem: "Fill grid so each row/column has √1, √4, √9, √16",
                    solution: "Standard sudoku rules with radicals"
                },
                {
                    name: "Simplify the Path",
                    problem: "Simplify √72 using exactly 4 steps",
                    solution: "72=36×2 → √(36×2) → 6√2"
                },
                {
                    name: "Radical Equation Builder",
                    challenge: "Create a radical expression that simplifies to 12√2",
                    sampleSolution: "√288, or 6√8, or 2√72, etc."
                }
            ],
            applications: [
                {
                    scenario: "Pythagorean Theorem",
                    problem: "Right triangle with legs 8 and 15. Find hypotenuse.",
                    equation: "c = √(64 + 225) = √289 = 17",
                    solution: "17"
                },
                {
                    scenario: "Diagonal of Square",
                    problem: "Square with side 10. Find diagonal.",
                    equation: "d = 10√2",
                    solution: "10√2 ≈ 14.14"
                },
                {
                    scenario: "Free Fall",
                    problem: "Object dropped from 80m. Find velocity on impact (use v=√(2gh), g=10).",
                    equation: "v = √(2×10×80) = √1600 = 40 m/s",
                    solution: "40 m/s"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Simplify √50",
                        "50 = 5 × 10",
                        "√50 = √5 × √10",  // Not extracted perfect square!
                        "Cannot simplify further"
                    ],
                    correctAnswer: "5√2",
                    errorType: "Missed perfect square factor: 50 = 25 × 2"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "√9 + √16 = √(9+16)",  // WRONG!
                        "= √25",
                        "= 5"
                    ],
                    correctAnswer: "3 + 4 = 7",
                    errorType: "Cannot distribute √ over addition"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Rationalize 6/√2",
                        "= 6√2"  // Forgot to divide!
                    ],
                    correctAnswer: "3√2",
                    errorType: "Multiplied numerator but forgot denominator becomes 2"
                }
            ]
        };
    }

    initializePrimeFactorizationDatabase() {
        this.primeFactorizations = {
            2: [2],
            3: [3],
            4: [2, 2],
            5: [5],
            6: [2, 3],
            7: [7],
            8: [2, 2, 2],
            9: [3, 3],
            10: [2, 5],
            12: [2, 2, 3],
            15: [3, 5],
            16: [2, 2, 2, 2],
            18: [2, 3, 3],
            20: [2, 2, 5],
            24: [2, 2, 2, 3],
            25: [5, 5],
            27: [3, 3, 3],
            28: [2, 2, 7],
            30: [2, 3, 5],
            32: [2, 2, 2, 2, 2],
            36: [2, 2, 3, 3],
            40: [2, 2, 2, 5],
            45: [3, 3, 5],
            48: [2, 2, 2, 2, 3],
            50: [2, 5, 5],
            54: [2, 3, 3, 3],
            60: [2, 2, 3, 5],
            64: [2, 2, 2, 2, 2, 2],
            72: [2, 2, 2, 3, 3],
            75: [3, 5, 5],
            80: [2, 2, 2, 2, 5],
            81: [3, 3, 3, 3],
            90: [2, 3, 3, 5],
            96: [2, 2, 2, 2, 2, 3],
            98: [2, 7, 7],
            100: [2, 2, 5, 5],
            108: [2, 2, 3, 3, 3],
            120: [2, 2, 2, 3, 5],
            125: [5, 5, 5],
            128: [2, 2, 2, 2, 2, 2, 2],
            144: [2, 2, 2, 2, 3, 3],
            147: [3, 7, 7],
            150: [2, 3, 5, 5],
            162: [2, 3, 3, 3, 3],
            180: [2, 2, 3, 3, 5],
            192: [2, 2, 2, 2, 2, 2, 3],
            196: [2, 2, 7, 7],
            200: [2, 2, 2, 5, 5]
        };
    }

    initializeRadicalPropertiesDatabase() {
        this.radicalProperties = {
            product: {
                name: "Product Property",
                formula: "ⁿ√(ab) = ⁿ√a × ⁿ√b",
                condition: "Indices must be the same",
                example: "√(4×9) = √4 × √9 = 2 × 3 = 6",
                useWhen: "Multiplying radicals or factoring radicand"
            },
            quotient: {
                name: "Quotient Property",
                formula: "ⁿ√(a/b) = ⁿ√a / ⁿ√b",
                condition: "b ≠ 0, indices must be the same",
                example: "√(16/4) = √16 / √4 = 4/2 = 2",
                useWhen: "Dividing radicals or simplifying fractions under radical"
            },
            power: {
                name: "Power Property",
                formula: "ⁿ√(aᵐ) = aᵐ/ⁿ",
                condition: "Can be written as rational exponent",
                example: "√(x⁶) = x⁶/² = x³",
                useWhen: "Simplifying radicals with exponents"
            },
            rationalExponent: {
                name: "Rational Exponent",
                formula: "ⁿ√a = a^(1/n)",
                condition: "Alternative notation for roots",
                example: "√x = x^(1/2), ∛x = x^(1/3)",
                useWhen: "Converting between radical and exponential form"
            },
            perfectPower: {
                name: "Perfect Power Extraction",
                formula: "ⁿ√(aⁿ) = |a| for even n, a for odd n",
                condition: "Complete power of the index",
                example: "√(5²) = 5, ∛((-2)³) = -2",
                useWhen: "Simplifying perfect powers under radicals"
            },
            indexReduction: {
                name: "Index Reduction",
                formula: "ᵐⁿ√(aᵐ) = ⁿ√a",
                condition: "Common factor in index and exponent",
                example: "⁶√(x³) = ²√x",
                useWhen: "Simplifying the index when possible"
            }
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
                simplifiedForm: this.currentSolution?.simplifiedForm
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

        // Default to general simplification if expression contains radical symbols
        if (cleanInput.includes('√') || cleanInput.includes('sqrt')) {
            return {
                originalInput: expression,
                cleanInput: cleanInput,
                type: 'simplify_radical_expression',
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
            .replace(/\s+/g, '')
            .replace(/sqrt/gi, '√')
            .replace(/cbrt/gi, '∛')
            .trim();
    }

    extractRadicalParameters(match, type) {
        const params = {};

        if (!match) return params;

        switch(type) {
            case 'square_root_integer':
                params.radicand = parseInt(match[1]) || 0;
                params.index = 2;
                break;

            case 'square_root_fraction':
                params.numerator = parseInt(match[1]) || 1;
                params.denominator = parseInt(match[2]) || 1;
                params.index = 2;
                break;

            case 'cube_root_integer':
                params.radicand = parseInt(match[1]) || 0;
                params.index = 3;
                break;

            case 'nth_root_integer':
                params.index = parseInt(match[1]) || 2;
                params.radicand = parseInt(match[2]) || 0;
                break;

            case 'rationalize_monomial':
                params.numerator = parseInt(match[1]) || 1;
                params.denominator_radicand = parseInt(match[2]) || 1;
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

    // RADICAL SOLVERS

    simplifySquareRootInteger(problem) {
        const { radicand } = problem.parameters;

        // Check if perfect square
        const sqrt = Math.sqrt(radicand);
        if (Number.isInteger(sqrt)) {
            return {
                originalExpression: `√${radicand}`,
                simplifiedForm: sqrt.toString(),
                isPerfectSquare: true,
                steps: [`√${radicand} = ${sqrt}`],
                category: 'square_roots'
            };
        }

        // Find prime factorization
        const primeFactors = this.getPrimeFactorization(radicand);
        const { coefficient, remainingRadicand } = this.extractPerfectSquares(primeFactors);

        return {
            originalExpression: `√${radicand}`,
            simplifiedForm: coefficient === 1 ?
                `√${remainingRadicand}` :
                (remainingRadicand === 1 ? `${coefficient}` : `${coefficient}√${remainingRadicand}`),
            isPerfectSquare: false,
            primeFactorization: primeFactors,
            coefficient: coefficient,
            remainingRadicand: remainingRadicand,
            category: 'square_roots'
        };
    }

    simplifySquareRootFraction(problem) {
        const { numerator, denominator } = problem.parameters;

        // Simplify numerator and denominator separately
        const numSolution = this.simplifySquareRootInteger({
            parameters: { radicand: numerator }
        });

        const denSolution = this.simplifySquareRootInteger({
            parameters: { radicand: denominator }
        });

        return {
            originalExpression: `√(${numerator}/${denominator})`,
            simplifiedForm: this.formatFractionRadical(numSolution, denSolution),
            numeratorSimplified: numSolution.simplifiedForm,
            denominatorSimplified: denSolution.simplifiedForm,
            category: 'square_roots'
        };
    }

    simplifySquareRootVariable(problem) {
        // Extract variable and exponent from parameters
        const { variable, exponent } = problem.parameters;

        const quotient = Math.floor(exponent / 2);
        const remainder = exponent % 2;

        let simplifiedForm = '';
        if (quotient > 0) {
            simplifiedForm += variable;
            if (quotient > 1) simplifiedForm += `^${quotient}`;
        }

        if (remainder > 0) {
            const radicalPart = `√${variable}`;
            simplifiedForm = simplifiedForm ?
                simplifiedForm + radicalPart :
                radicalPart;
        }

        return {
            originalExpression: `√(${variable}^${exponent})`,
            simplifiedForm: simplifiedForm || '1',
            quotient: quotient,
            remainder: remainder,
            category: 'radical_variables'
        };
    }

    simplifySquareRootMixed(problem) {
        const { coefficient, variable, exponent } = problem.parameters;

        const numSolution = this.simplifySquareRootInteger({
            parameters: { radicand: coefficient }
        });

        const varSolution = this.simplifySquareRootVariable({
            parameters: { variable, exponent }
        });

        return {
            originalExpression: `√(${coefficient}${variable}^${exponent})`,
            simplifiedForm: this.combineCoefficientAndVariable(numSolution, varSolution),
            category: 'radical_variables'
        };
    }

    simplifyCubeRootInteger(problem) {
        const { radicand } = problem.parameters;

        // Check if perfect cube
        const cbrt = Math.cbrt(radicand);
        if (Number.isInteger(cbrt)) {
            return {
                originalExpression: `∛${radicand}`,
                simplifiedForm: cbrt.toString(),
                isPerfectCube: true,
                steps: [`∛${radicand} = ${cbrt}`],
                category: 'cube_roots'
            };
        }

        // Find prime factorization
        const primeFactors = this.getPrimeFactorization(Math.abs(radicand));
        const { coefficient, remainingRadicand } = this.extractPerfectCubes(primeFactors);
        
        // Handle negative radicands
        const sign = radicand < 0 ? '-' : '';

        return {
            originalExpression: `∛${radicand}`,
            simplifiedForm: coefficient === 1 ?
                `${sign}∛${remainingRadicand}` :
                `${sign}${coefficient}∛${remainingRadicand}`,
            isPerfectCube: false,
            primeFactorization: primeFactors,
            coefficient: coefficient,
            remainingRadicand: remainingRadicand,
            category: 'cube_roots'
        };
    }

    simplifyNthRootInteger(problem) {
        const { index, radicand } = problem.parameters;

        // Check if perfect nth power
        const nthRoot = Math.pow(radicand, 1/index);
        if (Number.isInteger(nthRoot)) {
            return {
                originalExpression: `${this.formatNthRoot(index)}${radicand}`,
                simplifiedForm: nthRoot.toString(),
                isPerfectPower: true,
                category: 'higher_order_roots'
            };
        }

        const primeFactors = this.getPrimeFactorization(radicand);
        const { coefficient, remainingRadicand } = this.extractPerfectNthPowers(primeFactors, index);

        return {
            originalExpression: `${this.formatNthRoot(index)}${radicand}`,
            simplifiedForm: coefficient === 1 ?
                `${this.formatNthRoot(index)}${remainingRadicand}` :
                `${coefficient}${this.formatNthRoot(index)}${remainingRadicand}`,
            index: index,
            coefficient: coefficient,
            remainingRadicand: remainingRadicand,
            category: 'higher_order_roots'
        };
    }

    rationalizeMonomial(problem) {
        const { numerator, denominator_radicand } = problem.parameters;

        return {
            originalExpression: `${numerator}/√${denominator_radicand}`,
            simplifiedForm: `(${numerator}√${denominator_radicand})/${denominator_radicand}`,
            rationalizedNumerator: `${numerator}√${denominator_radicand}`,
            rationalizedDenominator: denominator_radicand,
            category: 'rationalizing_denominators'
        };
    }

    rationalizeBinomial(problem) {
        // This would handle conjugate multiplication
        // Implementation depends on specific format
        return {
            category: 'rationalizing_denominators',
            method: 'Multiply by conjugate'
        };
    }

    addLikeRadicals(problem) {
        return {
            category: 'adding_subtracting_radicals',
            method: 'Combine coefficients of like radicals'
        };
    }

    multiplyRadicals(problem) {
        return {
            category: 'multiplying_radicals',
            method: 'Multiply radicands and simplify'
        };
    }

    divideRadicals(problem) {
        return {
            category: 'dividing_radicals',
            method: 'Use quotient property and rationalize if needed'
        };
    }

    simplifyRadicalExpression(problem) {
        return {
            category: 'simplifying_square_roots',
            method: 'Apply appropriate radical simplification techniques'
        };
    }

    // HELPER METHODS

    getPrimeFactorization(n) {
        // Check if we have it pre-computed
        if (this.primeFactorizations[n]) {
            return [...this.primeFactorizations[n]];
        }

        // Compute prime factorization
        const factors = [];
        let num = Math.abs(n);

        for (let i = 2; i <= num; i++) {
            while (num % i === 0) {
                factors.push(i);
                num = num / i;
            }
        }

        return factors;
    }

    extractPerfectSquares(primeFactors) {
        const factorCounts = {};
        primeFactors.forEach(factor => {
            factorCounts[factor] = (factorCounts[factor] || 0) + 1;
        });

        let coefficient = 1;
        let remainingRadicand = 1;

        for (const [prime, count] of Object.entries(factorCounts)) {
            const pairs = Math.floor(count / 2);
            const remainder = count % 2;

            coefficient *= Math.pow(parseInt(prime), pairs);
            remainingRadicand *= Math.pow(parseInt(prime), remainder);
        }

        return { coefficient, remainingRadicand };
    }

    extractPerfectCubes(primeFactors) {
        const factorCounts = {};
        primeFactors.forEach(factor => {
            factorCounts[factor] = (factorCounts[factor] || 0) + 1;
        });

        let coefficient = 1;
        let remainingRadicand = 1;

        for (const [prime, count] of Object.entries(factorCounts)) {
            const triples = Math.floor(count / 3);
            const remainder = count % 3;

            coefficient *= Math.pow(parseInt(prime), triples);
            remainingRadicand *= Math.pow(parseInt(prime), remainder);
        }

        return { coefficient, remainingRadicand };
    }

    extractPerfectNthPowers(primeFactors, index) {
        const factorCounts = {};
        primeFactors.forEach(factor => {
            factorCounts[factor] = (factorCounts[factor] || 0) + 1;
        });

        let coefficient = 1;
        let remainingRadicand = 1;

        for (const [prime, count] of Object.entries(factorCounts)) {
            const groups = Math.floor(count / index);
            const remainder = count % index;

            coefficient *= Math.pow(parseInt(prime), groups);
            remainingRadicand *= Math.pow(parseInt(prime), remainder);
        }

        return { coefficient, remainingRadicand };
    }

    formatNthRoot(index) {
        const rootSymbols = {
            2: '√',
            3: '∛',
            4: '∜'
        };
        return rootSymbols[index] || `${index}√`;
    }

    formatFractionRadical(numSolution, denSolution) {
        return `(${numSolution.simplifiedForm})/(${denSolution.simplifiedForm})`;
    }

    combineCoefficientAndVariable(numSolution, varSolution) {
        // Combine numerical coefficient with variable part
        let result = '';

        if (numSolution.coefficient && numSolution.coefficient !== 1) {
            result += numSolution.coefficient;
        }

        if (varSolution.quotient > 0) {
            result += varSolution.simplifiedForm;
        }

        let radicalPart = '';
        if (numSolution.remainingRadicand > 1) {
            radicalPart = `√${numSolution.remainingRadicand}`;
        }
        if (varSolution.remainder > 0) {
            radicalPart += varSolution.simplifiedForm.includes('√') ?
                varSolution.simplifiedForm.split('√')[1] : '';
        }

        if (radicalPart) {
            result = result || '1';
            result += radicalPart;
        }

        return result || '1';
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
        const { type } = problem;
        const category = this.radicalTypes[type]?.category;

        switch(category) {
            case 'square_roots':
                return this.generateSquareRootSteps(problem, solution);
            case 'cube_roots':
                return this.generateCubeRootSteps(problem, solution);
            case 'rationalizing_denominators':
                return this.generateRationalizationSteps(problem, solution);
            default:
                return this.generateGenericRadicalSteps(problem, solution);
        }
    }

    generateSquareRootSteps(problem, solution) {
        const steps = [];
        const { radicand } = problem.parameters;

        // Step 1: Given expression
        steps.push({
            stepNumber: 1,
            step: 'Given expression',
            description: 'Start with the radical expression',
            expression: solution.originalExpression,
            reasoning: 'We need to simplify this square root to its simplest form',
            goalStatement: 'Extract all perfect square factors from under the radical'
        });

        // Step 2: Check if perfect square
        if (solution.isPerfectSquare) {
            steps.push({
                stepNumber: 2,
                step: 'Recognize perfect square',
                description: `${radicand} is a perfect square`,
                expression: `√${radicand} = ${solution.simplifiedForm}`,
                reasoning: `${Math.sqrt(radicand)} × ${Math.sqrt(radicand)} = ${radicand}`,
                finalAnswer: true
            });
            return steps;
        }

        // Step 3: Prime factorization
        steps.push({
            stepNumber: 2,
            step: 'Prime factorization',
            description: `Find the prime factors of ${radicand}`,
            expression: `${radicand} = ${solution.primeFactorization.join(' × ')}`,
            reasoning: 'Breaking into prime factors helps identify perfect squares',
            visualHint: 'Use a factor tree if needed'
        });

        // Step 4: Group into pairs
        steps.push({
            stepNumber: 3,
            step: 'Identify perfect square factors',
            description: 'Group prime factors into pairs',
            reasoning: 'Each pair of identical factors forms a perfect square',
            visualHint: 'Circle pairs of the same prime number'
        });

        // Step 5: Extract perfect squares
        if (solution.coefficient > 1) {
            steps.push({
                stepNumber: 4,
                step: 'Extract perfect squares',
                description: `Extract ${solution.coefficient}² from under the radical`,
                expression: `√${radicand} = ${solution.coefficient}√${solution.remainingRadicand}`,
                reasoning: 'Each pair of factors becomes one factor outside the radical'
            });
        }

        // Step 6: Final answer
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Simplified form',
            description: 'Write in simplest form',
            expression: solution.simplifiedForm,
            finalAnswer: true,
            reasoning: 'No perfect square factors remain under the radical'
        });

        return steps;
    }

    generateCubeRootSteps(problem, solution) {
        const steps = [];
        const { radicand } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Given expression',
            description: 'Start with the cube root expression',
            expression: solution.originalExpression,
            reasoning: 'We need to simplify this cube root',
            goalStatement: 'Extract all perfect cube factors'
        });

        if (solution.isPerfectCube) {
            steps.push({
                stepNumber: 2,
                step: 'Recognize perfect cube',
                description: `${radicand} is a perfect cube`,
                expression: `∛${radicand} = ${solution.simplifiedForm}`,
                reasoning: `${Math.cbrt(radicand)} × ${Math.cbrt(radicand)} × ${Math.cbrt(radicand)} = ${radicand}`,
                finalAnswer: true
            });
            return steps;
        }

        steps.push({
            stepNumber: 2,
            step: 'Prime factorization',
            description: `Find the prime factors of ${Math.abs(radicand)}`,
            expression: `${Math.abs(radicand)} = ${solution.primeFactorization.join(' × ')}`,
            reasoning: 'Breaking into prime factors helps identify perfect cubes'
        });

        steps.push({
            stepNumber: 3,
            step: 'Group into triples',
            description: 'Group prime factors into sets of three',
            reasoning: 'Each triple of identical factors forms a perfect cube',
            visualHint: 'Circle groups of three of the same prime number'
        });

        if (solution.coefficient > 1) {
            steps.push({
                stepNumber: 4,
                step: 'Extract perfect cubes',
                description: `Extract ${solution.coefficient}³ from under the radical`,
                expression: `∛${radicand} = ${solution.coefficient}∛${solution.remainingRadicand}`,
                reasoning: 'Each triple of factors becomes one factor outside the radical'
            });
        }

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Simplified form',
            description: 'Write in simplest form',
            expression: solution.simplifiedForm,
            finalAnswer: true,
            reasoning: 'No perfect cube factors remain under the radical'
        });

        return steps;
    }

    generateRationalizationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given expression',
            description: 'Start with fraction containing radical in denominator',
            expression: solution.originalExpression,
            reasoning: 'We need to eliminate the radical from the denominator',
            goalStatement: 'Rationalize the denominator'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify rationalizing factor',
            description: 'Determine what to multiply by',
            reasoning: 'Multiply by √n/√n to eliminate radical from denominator',
            algebraicRule: 'Multiplying by a form of 1 preserves value'
        });

        steps.push({
            stepNumber: 3,
            step: 'Multiply numerator and denominator',
            description: 'Apply the rationalizing factor',
            expression: solution.simplifiedForm,
            reasoning: 'This clears the radical from the denominator'
        });

        steps.push({
            stepNumber: 4,
            step: 'Simplify',
            description: 'Simplify if possible',
            expression: solution.simplifiedForm,
            finalAnswer: true,
            reasoning: 'Denominator is now rational'
        });

        return steps;
    }

    generateGenericRadicalSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Radical simplification',
            description: 'Simplify the radical expression',
            expression: problem.cleanInput,
            reasoning: 'Apply appropriate radical simplification techniques',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS

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
            'Given expression': "We have a √ (square root) puzzle! We need to find what number times itself gives us the number under the √.",
            'Prime factorization': "Let's break our number into the smallest pieces possible - like breaking a LEGO tower into individual bricks. These smallest pieces are called prime numbers.",
            'Identify perfect square factors': "Now we're looking for matching pairs of bricks! When we find two of the same brick, we can take one out to play.",
            'Extract perfect squares': "Every time we found a pair inside the √ house, we take one outside! That's how we simplify.",
            'Group into pairs': "We're making teams of two! Every team of two identical numbers gets to send one player outside the √.",
            'Group into triples': "We're making teams of three! Every team of three identical numbers gets to send one player outside the ∛.",
            'Recognize perfect square': "Wow! This is a special number - it's already a perfect square! Like 4 is 2×2, or 9 is 3×3.",
            'Rationalize denominator': "We don't like √ symbols on the bottom of fractions. It's like having a wobbly table - we need to fix it by multiplying by a special number."
        };

        return ELI5Explanations[step.step] || "We're taking another step to make our radical simpler and cleaner!";
    }

    findRelevantAnalogy(step, problem) {
        const category = this.radicalTypes[problem.type]?.category;
        
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(category) || analogy.suitableFor.includes('all_radicals')) {
                if (step.step.toLowerCase().includes('factor') && key === 'prime_factorization') {
                    return analogy.ELI5 || analogy.explanation;
                }
                if (step.step.toLowerCase().includes('extract') && key === 'extracting_squares') {
                    return analogy.ELI5 || analogy.explanation;
                }
                if (step.step.toLowerCase().includes('pair') && key === 'extracting_squares') {
                    return analogy.ELI5 || analogy.explanation;
                }
                if (step.step.toLowerCase().includes('triple') && key === 'extracting_cubes') {
                    return analogy.ELI5 || analogy.explanation;
                }
                if (step.step.toLowerCase().includes('rationalize') && key === 'rationalization') {
                    return analogy.ELI5 || analogy.explanation;
                }
            }
        }
        
        return "Each step makes our radical expression simpler and easier to work with!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'prime factorization': 'breaking the number into its smallest building blocks',
            'perfect square': 'a number that you get by multiplying a whole number by itself',
            'perfect cube': 'a number that you get by multiplying a whole number by itself three times',
            'radicand': 'the number under the √ symbol',
            'coefficient': 'the number in front',
            'extract': 'take out',
            'simplify': 'make simpler',
            'rationalize': 'remove the √ from the bottom',
            'denominator': 'bottom of the fraction',
            'numerator': 'top of the fraction',
            'index': 'what type of root (2 for √, 3 for ∛)',
            'conjugate': 'the matching opposite that helps eliminate √'
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
            'Given expression': 'Draw the radical symbol with the number underneath',
            'Prime factorization': 'Draw a factor tree, branching down to prime numbers',
            'Identify perfect square factors': 'Circle pairs of the same prime number in different colors',
            'Group into pairs': 'Draw circles around matching pairs of prime factors',
            'Group into triples': 'Draw circles around matching sets of three prime factors',
            'Extract perfect squares': 'Draw arrows showing numbers moving from inside √ to outside',
            'Extract perfect cubes': 'Draw arrows showing numbers moving from inside ∛ to outside',
            'Rationalize denominator': 'Show the fraction before and after, highlighting the denominator change'
        };

        return visualizations[step.step] || 'Draw a picture showing what changes in this step';
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
        const category = this.radicalTypes[problemType]?.category || 'square_roots';
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
            'Given expression': 'A radical expression represents a root. Our goal is to simplify it by extracting all perfect powers.',
            'Prime factorization': 'Breaking a number into prime factors reveals its structure and helps identify perfect powers.',
            'Identify perfect square factors': 'Perfect squares are pairs of identical factors. Finding them is key to simplification.',
            'Extract perfect squares': 'Taking perfect squares out of the radical simplifies the expression while maintaining equality.',
            'Group into pairs': 'For square roots, we look for pairs because √(a²) = a.',
            'Group into triples': 'For cube roots, we look for triples because ∛(a³) = a.',
            'Recognize perfect square': 'A perfect square is a number that equals some integer squared.',
            'Recognize perfect cube': 'A perfect cube is a number that equals some integer cubed.',
            'Rationalize denominator': 'Eliminating radicals from denominators creates a standard form that\'s easier to work with.'
        };

        return conceptualExplanations[step.step] || 'This step brings us closer to the simplified form of the radical.';
    }

    getProceduralExplanation(step) {
        if (step.step === 'Prime factorization') {
            return `1. Divide by smallest prime (2)
2. Continue dividing by 2 until odd
3. Try next primes (3, 5, 7...)
4. Stop when result is 1`;
        }
        if (step.step === 'Extract perfect squares') {
            return `1. Identify paired factors
2. Take one from each pair outside
3. Leave unpaired factors inside
4. Multiply outside factors`;
        }
        return 'Follow the standard procedure for this type of step.';
    }

    getVisualExplanation(step, problem) {
        const category = this.radicalTypes[problem.type]?.category;
        
        const visualExplanations = {
            'square_roots': 'Use a factor tree to break down the number. Circle pairs of factors.',
            'cube_roots': 'Use a factor tree. Circle groups of three identical factors.',
            'rationalizing_denominators': 'Show the fraction multiplied by √n/√n, which equals 1.',
            'radical_variables': 'Show the exponent divided by the index, quotient outside, remainder inside.'
        };

        return visualExplanations[category] || 'Visualize the transformation happening in this step.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Given expression': 'Initial radical expression',
            'Prime factorization': 'Fundamental Theorem of Arithmetic: every integer has unique prime factorization',
            'Identify perfect square factors': 'Apply product property: √(ab) = √a × √b',
            'Extract perfect squares': 'Apply power property: √(a²) = a for a ≥ 0',
            'Group into pairs': 'For √: extract pairs using √(a²) = a',
            'Group into triples': 'For ∛: extract triples using ∛(a³) = a',
            'Rationalize denominator': 'Multiply by √n/√n, a form of 1'
        };

        return algebraicRules[step.step] || 'Apply standard radical properties.';
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
                'prime factorization': 'breaking into smallest parts',
                'radicand': 'number under the √',
                'coefficient': 'number in front',
                'perfect square': 'number like 4, 9, 16, 25',
                'extract': 'take out',
                'simplify': 'make simpler',
                'rationalize': 'clear the √ from bottom'
            },
            intermediate: {
                'prime factorization': 'prime factorization',
                'radicand': 'radicand',
                'coefficient': 'coefficient',
                'perfect square': 'perfect square',
                'extract': 'extract',
                'simplify': 'simplify',
                'rationalize': 'rationalize'
            },
            ELI5: {
                'prime factorization': 'breaking the number into the tiniest building blocks',
                'radicand': 'the number living under the √ roof',
                'coefficient': 'the number standing in front',
                'perfect square': 'a special number you get by multiplying something by itself',
                'extract': 'pull out and bring outside',
                'simplify': 'make it cleaner and easier',
                'rationalize': 'kick the √ out of the basement and move it upstairs',
                'denominator': 'the basement of the fraction',
                'numerator': 'the attic of the fraction'
            },
            detailed: {
                'prime factorization': 'prime factorization (expressing as product of primes)',
                'radicand': 'radicand (expression under the radical)',
                'coefficient': 'coefficient (numerical factor)',
                'perfect square': 'perfect square (integer squared)',
                'extract': 'extract (remove from under radical)',
                'simplify': 'simplify (reduce to simplest form)',
                'rationalize': 'rationalize (eliminate radicals from denominator)'
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
            currentState: `We now have: ${currentStep.expression || 'the current form'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue simplifying`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return `we need to continue the simplification process`;
    }

    explainStepBenefit(nextStep) {
        return `bringing us closer to the simplest form`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Prime factorization': [
                'Check your factorization by multiplying back',
                'Don\'t forget any factors',
                'Keep going until all factors are prime'
            ],
            'Extract perfect squares': [
                'Make sure you extract ALL pairs',
                'Don\'t leave perfect squares under the radical',
                'Check that remaining radicand has no perfect square factors'
            ],
            'Rationalize denominator': [
                'Multiply BOTH numerator and denominator',
                'Don\'t forget to simplify after rationalizing',
                'Check that no radicals remain in denominator'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check your work'];
    }

    generateCheckPoints(step) {
        return [
            'Did I complete this step correctly?',
            'Does my result make sense?',
            'Have I simplified as much as possible?',
            'Are there any errors in my arithmetic?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            square_roots: step.step === 'Extract perfect squares' ?
                ['Don\'t stop too early', 'Make sure ALL perfect squares are out'] : [],
            rationalizing: step.step === 'Rationalize denominator' ?
                ['Must multiply both parts', 'Simplify the result'] : []
        };

        const category = this.radicalTypes[problemType]?.category || 'square_roots';
        return warnings[category] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Given expression': 'Do I understand what type of radical this is?',
            'Prime factorization': 'Are all my factors prime numbers?',
            'Identify perfect square factors': 'Have I found all the pairs?',
            'Extract perfect squares': 'Did I take out all the perfect squares?',
            'Group into pairs': 'Did I circle all matching pairs?',
            'Group into triples': 'Did I circle all matching triples?',
            'Rationalize denominator': 'Is the denominator now free of radicals?'
        };

        return questions[step.step] || 'Does this step make sense?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Given expression': 'A radical expression to simplify',
            'Prime factorization': 'The number written as a product of prime numbers',
            'Identify perfect square factors': 'Pairs of identical prime factors identified',
            'Extract perfect squares': 'Perfect squares removed from under the radical',
            'Simplified form': 'The simplest form with no perfect powers under the radical',
            'Rationalize denominator': 'No radicals in the denominator'
        };

        return expectations[step.step] || 'Progress toward simplified form';
    }

    generateTroubleshootingTips(step) {
        return [
            'If stuck, review what the step is asking for',
            'Check your arithmetic carefully',
            'Look at a worked example of this type',
            'Try breaking the step into smaller sub-steps',
            'Verify your work by checking backward'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Given expression': [
                'What type of radical is this?',
                'What is the index (what root)?',
                'What is the radicand?'
            ],
            'Prime factorization': [
                'What is the smallest prime that divides this number?',
                'After dividing, is the result prime?',
                'How do I know when I\'m done factoring?'
            ],
            'Identify perfect square factors': [
                'Which prime factors appear in pairs?',
                'Are there any factors that appear exactly once?',
                'What perfect squares can I make from these pairs?'
            ],
            'Extract perfect squares': [
                'How many of each prime factor can come out?',
                'What stays under the radical?',
                'What is the coefficient outside?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How do I accomplish it?'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.radicalTypes[problem.type]?.category || 'square_roots';
        const hintSet = this.hints[category] || this.hints.square_root_integer;

        return {
            level1: hintSet.level1 || 'Think about what this step requires.',
            level2: hintSet.level2 || 'Consider the structure of the expression.',
            level3: hintSet.level3 || 'Apply the appropriate radical property.',
            level4: hintSet.level4 || 'Complete the specific operation needed.'
        };
    }

    breakIntoSubSteps(step) {
        if (step.step === 'Prime factorization') {
            return [
                'Start with the smallest prime (2)',
                'Divide as many times as possible',
                'Move to next prime (3, 5, 7...)',
                'Continue until result is 1',
                'List all prime factors'
            ];
        }

        if (step.step === 'Extract perfect squares') {
            return [
                'Count how many times each prime appears',
                'Divide count by 2',
                'Quotient is power outside radical',
                'Remainder is power inside radical',
                'Compute final coefficient'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same technique with a different number',
            practiceHint: 'Start with smaller, simpler numbers to build confidence',
            extension: 'Once comfortable, try with variables or larger numbers'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What do I see in this expression?',
            goal: 'What am I trying to accomplish?',
            strategy: 'What technique should I use?',
            execute: 'How do I perform this technique correctly?',
            verify: 'Does my result make sense? Can I check it?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'What method should I use for this step?',
            'Are there multiple valid approaches?',
            'Which approach is most efficient?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'Prime factorization': [
                'Factor tree method (visual branching)',
                'Division method (systematic division)',
                'Memorization (for common numbers)'
            ],
            'Extract perfect squares': [
                'Grouping pairs method',
                'Exponent division method (for variables)',
                'Recognizing common perfect squares'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate for this problem'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the simplification process`,
            progression: 'We are getting closer to the final simplified form',
            relationship: 'Each step removes more complexity from the expression'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.radicalTypes[problemType]?.category || 'square_roots';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic arithmetic', 'Understanding of radicals'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Given expression': ['radical', 'radicand', 'index', 'square root'],
            'Prime factorization': ['prime', 'factor', 'prime number', 'composite'],
            'Identify perfect square factors': ['perfect square', 'pair', 'factor'],
            'Extract perfect squares': ['extract', 'coefficient', 'simplify'],
            'Group into pairs': ['pair', 'group', 'identical'],
            'Group into triples': ['triple', 'group', 'identical'],
            'Rationalize denominator': ['rationalize', 'denominator', 'conjugate']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before I start, what information do I need?',
            during: 'As I work, am I following the correct procedure?',
            after: 'After completing, how can I verify this is correct?'
        };
    }

    findRealWorldConnection(step, problem) {
        const connections = {
            'square_roots': 'Finding the side length of a square with a given area - used in construction and design',
            'cube_roots': 'Finding the edge of a cube with a given volume - used in packaging and engineering',
            'rationalizing': 'Creating standard forms for easier calculation - used in science and engineering'
        };

        const category = this.radicalTypes[problem.type]?.category;
        return connections[category] || 'Radicals appear in many formulas in science, engineering, and mathematics.';
    }

    // GRAPH GENERATION

    generateRadicalGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.radicalTypes[type]?.category;

        if (category === 'square_roots' || category === 'cube_roots') {
            this.graphData = this.generateRadicalGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateRadicalGraph(problem, solution) {
        const { radicand } = problem.parameters;
        
        return {
            type: 'radical_function',
            description: `Graph of radical function`,
            visualization: 'Number line showing approximate value',
            approximateValue: solution.simplifiedForm
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
            this.createPracticeProblemsSection(),
            this.createPerfectPowersReferenceSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Simplifying Radicals Mathematical Workbook',
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
            ['Category', this.radicalTypes[this.currentProblem.type]?.category || 'radicals'],
            ['Expression', this.currentSolution?.originalExpression || this.currentProblem.cleanInput],
            ['Description', this.currentProblem.scenario || 'Simplify the radical expression']
        ];

        // Add parameters if available
        if (this.currentProblem.parameters.radicand !== undefined) {
            problemData.push(['', '']);
            problemData.push(['Parameters', '']);
            problemData.push(['Radicand', this.currentProblem.parameters.radicand]);
            if (this.currentProblem.parameters.index !== undefined) {
                problemData.push(['Index (type of root)', this.currentProblem.parameters.index]);
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

            if (step.expression) {
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

            // Visual hints
            if (step.visualHint && (this.explanationLevel === 'intermediate' || this.explanationLevel === 'detailed')) {
                stepsData.push(['Visual Hint', step.visualHint]);
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
        const lesson = this.lessons[category];

        if (!lesson) return null;

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach(concept => {
            lessonData.push(['•', concept]);
        });

        lessonData.push(['', '']);
        lessonData.push(['Theory', lesson.theory]);
        lessonData.push(['', '']);
        lessonData.push(['Key Formulas', '']);

        for (const [name, formula] of Object.entries(lesson.keyFormulas)) {
            lessonData.push([name, formula]);
        }

        lessonData.push(['', '']);
        lessonData.push(['Solving Steps', '']);

        lesson.solvingSteps.forEach((step, index) => {
            lessonData.push([`${index + 1}`, step]);
        });

        if (lesson.applications) {
            lessonData.push(['', '']);
            lessonData.push(['Applications', '']);
            lesson.applications.forEach(app => {
                lessonData.push(['•', app]);
            });
        }

        return {
            title: 'Key Concepts & Theory',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Original Expression', this.currentSolution.originalExpression],
            ['Simplified Form', this.currentSolution.simplifiedForm]
        ];

        if (this.currentSolution.isPerfectSquare !== undefined) {
            solutionData.push(['Is Perfect Square?', this.currentSolution.isPerfectSquare ? 'Yes' : 'No']);
        }

        if (this.currentSolution.isPerfectCube !== undefined) {
            solutionData.push(['Is Perfect Cube?', this.currentSolution.isPerfectCube ? 'Yes' : 'No']);
        }

        if (this.currentSolution.primeFactorization) {
            solutionData.push(['Prime Factorization', this.currentSolution.primeFactorization.join(' × ')]);
        }

        if (this.currentSolution.coefficient > 1) {
            solutionData.push(['Coefficient Extracted', this.currentSolution.coefficient]);
            solutionData.push(['Remaining Radicand', this.currentSolution.remainingRadicand]);
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
            ['Solution Method', this.radicalTypes[this.currentProblem.type]?.name],
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
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [
            ['Verification Method', 'Square the simplified form and compare'],
            ['', '']
        ];

        if (this.currentSolution.coefficient && this.currentSolution.remainingRadicand) {
            const squared = Math.pow(this.currentSolution.coefficient, 2) * this.currentSolution.remainingRadicand;
            verificationData.push(['Squared Result', `${this.currentSolution.coefficient}² × ${this.currentSolution.remainingRadicand} = ${squared}`]);
            verificationData.push(['Original Radicand', this.currentProblem.parameters.radicand]);
            verificationData.push(['Match', squared === this.currentProblem.parameters.radicand ? 'Yes ✓' : 'Check calculation']);
        }

        verificationData.push(['', '']);
        verificationData.push(['Simplification Checklist', '']);
        verificationData.push(['✓', 'All perfect powers extracted?']);
        verificationData.push(['✓', 'No perfect power factors remain under radical?']);
        verificationData.push(['✓', 'Expression in simplest form?']);

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
        const category = this.radicalTypes[this.currentProblem.type]?.category;
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

    createPerfectPowersReferenceSection() {
        const refData = [
            ['Perfect Powers Reference', ''],
            ['', ''],
            ['Perfect Squares', '']
        ];

        this.lessons.square_roots.perfectSquares.forEach((ps, index) => {
            if (index % 5 === 0 && index > 0) refData.push(['', '']);
            refData.push([`${index + 1}²`, ps]);
        });

        refData.push(['', '']);
        refData.push(['Perfect Cubes', '']);

        this.lessons.cube_roots.perfectCubes.forEach((pc, index) => {
            refData.push([`${index + 1}³`, pc]);
        });

        return {
            title: 'Perfect Powers Reference',
            type: 'reference',
            data: refData
        };
    }

    generateRadicalPedagogicalNotes(problemType) {
        const category = this.radicalTypes[problemType]?.category;

        const pedagogicalDatabase = {
            square_roots: {
                objectives: [
                    'Simplify square root expressions',
                    'Identify perfect square factors',
                    'Apply product property of radicals'
                ],
                keyConcepts: [
                    'Perfect squares and their recognition',
                    'Prime factorization technique',
                    'Product property: √(ab) = √a × √b',
                    'Simplest radical form criteria'
                ],
                prerequisites: [
                    'Multiplication and division',
                    'Perfect squares 1-144',
                    'Prime factorization',
                    'Exponent rules'
                ],
                commonDifficulties: [
                    'Not extracting all perfect square factors',
                    'Errors in prime factorization',
                    'Confusing √(a+b) with √a + √b',
                    'Missing factors when grouping pairs'
                ],
                teachingStrategies: [
                    'Use factor trees for visualization',
                    'Practice with perfect squares first',
                    'Emphasize "pairing" concept with manipulatives',
                    'Connect to area of squares'
                ],
                extensions: [
                    'Radicals with variables',
                    'Rationalizing denominators',
                    'Adding and multiplying radicals',
                    'Radical equations'
                ],
                assessment: [
                    'Can student find prime factorization?',
                    'Does student identify all perfect squares?',
                    'Can student verify the simplified form?'
                ]
            },
            cube_roots: {
                objectives: [
                    'Simplify cube root expressions',
                    'Identify perfect cube factors',
                    'Distinguish cube roots from square roots'
                ],
                keyConcepts: [
                    'Perfect cubes and their recognition',
                    'Grouping in triples vs pairs',
                    'Cube roots of negative numbers are real',
                    'Product property for cube roots'
                ],
                prerequisites: [
                    'Square root simplification',
                    'Perfect cubes 1-1000',
                    'Exponent rules',
                    'Negative numbers'
                ],
                commonDifficulties: [
                    'Confusing square and cube root processes',
                    'Not grouping in triples',
                    'Thinking cube roots of negatives are undefined',
                    'Missing perfect cube factors'
                ],
                teachingStrategies: [
                    'Emphasize difference from square roots',
                    'Use volume models (cubes)',
                    'Practice perfect cubes 1-10',
                    'Highlight negative radicand capability'
                ],
                extensions: [
                    'Higher order roots',
                    'Mixed radical expressions',
                    'Rational exponents',
                    'Applications in volume'
                ],
                assessment: [
                    'Can student group in triples?',
                    'Does student handle negatives correctly?',
                    'Can student explain difference from square roots?'
                ]
            },
            rationalizing_denominators: {
                objectives: [
                    'Rationalize monomial denominators',
                    'Rationalize binomial denominators using conjugates',
                    'Understand why we rationalize'
                ],
                keyConcepts: [
                    'No radicals in denominators (standard form)',
                    'Multiplying by √n/√n (form of 1)',
                    'Conjugate pairs and difference of squares',
                    'Simplification after rationalizing'
                ],
                prerequisites: [
                    'Simplifying radicals',
                    'Multiplying fractions',
                    'FOIL method',
                    'Difference of squares pattern'
                ],
                commonDifficulties: [
                    'Only multiplying numerator',
                    'Not simplifying after rationalizing',
                    'Errors with conjugate multiplication',
                    'Sign errors in FOIL'
                ],
                teachingStrategies: [
                    'Emphasize "multiply by form of 1"',
                    'Practice conjugate multiplication separately',
                    'Show why rationalization is useful',
                    'Use color coding for numerator/denominator'
                ],
                extensions: [
                    'Multiple radicals in denominator',
                    'Nested radicals',
                    'Complex fractions with radicals',
                    'Rationalization in equations'
                ],
                assessment: [
                    'Does student multiply both parts?',
                    'Can student find correct conjugate?',
                    'Does student simplify completely?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Simplify radical expressions'],
            keyConcepts: ['Radical simplification principles'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex radical expressions'],
            assessment: ['Verify understanding of process']
        };
    }

    generateRadicalAlternativeMethods(problemType) {
        const category = this.radicalTypes[problemType]?.category;

        const alternativeDatabase = {
            square_roots: {
                primaryMethod: 'Prime Factorization with Pairing',
                methods: [
                    {
                        name: 'Perfect Square Recognition',
                        description: 'Recognize largest perfect square factor directly without full factorization'
                    },
                    {
                        name: 'Division Method',
                        description: 'Systematically divide by perfect squares (4, 9, 16...) until none remain'
                    },
                    {
                        name: 'Factor Tree',
                        description: 'Visual branching method to find all prime factors, then pair them'
                    }
                ],
                comparison: 'Prime factorization is most systematic; perfect square recognition is fastest for familiar numbers; factor tree is most visual'
            },
            cube_roots: {
                primaryMethod: 'Prime Factorization with Grouping in Triples',
                methods: [
                    {
                        name: 'Perfect Cube Recognition',
                        description: 'Identify largest perfect cube factor directly'
                    },
                    {
                        name: 'Division Method',
                        description: 'Systematically divide by perfect cubes (8, 27, 64...) until none remain'
                    },
                    {
                        name: 'Trial and Error',
                        description: 'For small numbers, test possible cube roots directly'
                    }
                ],
                comparison: 'Prime factorization is most reliable; perfect cube recognition requires memorization; trial works for small numbers'
            },
            rationalizing_denominators: {
                primaryMethod: 'Multiply by Radical Form of 1',
                methods: [
                    {
                        name: 'Conjugate Multiplication',
                        description: 'For binomial denominators, multiply by conjugate to create difference of squares'
                    },
                    {
                        name: 'Common Denominator',
                        description: 'Convert to equivalent fraction with rational denominator'
                    },
                    {
                        name: 'Rational Exponent Form',
                        description: 'Convert to fractional exponents, then simplify algebraically'
                    }
                ],
                comparison: 'Multiplying by √n/√n is standard and straightforward; conjugate essential for binomials; exponents useful for complex cases'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard radical simplification approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods may be applicable depending on problem structure'
            }],
            comparison: 'Choose method based on problem characteristics and personal preference'
        };
    }
}

// Export the class
export default EnhancedSimplifyingRadicalsMathematicalWorkbook;
