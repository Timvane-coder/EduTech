// Enhanced Polynomial Cubic and Quartic Equations Mathematical Workbook
import * as math from 'mathjs';

export class EnhancedCubicQuarticMathematicalWorkbook {
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
        this.initializeCubicQuarticSolvers();
        this.initializeCubicQuarticLessons();
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
        this.initializeHistoricalContext();
    }

    initializeCubicQuarticLessons() {
        this.lessons = {
            cubic_equations: {
                title: "Cubic Equations",
                concepts: [
                    "General form: ax³ + bx² + cx + d = 0 where a ≠ 0",
                    "Degree 3 polynomial - can have up to 3 real roots",
                    "Always has at least one real root (may be repeated)",
                    "Can be solved by factoring, rational root theorem, or cubic formula"
                ],
                theory: "Cubic equations represent polynomials of degree three. The Fundamental Theorem of Algebra guarantees at least one real root. Understanding the relationship between coefficients and roots is crucial.",
                keyFormulas: {
                    "Standard Form": "ax³ + bx² + cx + d = 0",
                    "Factored Form": "a(x - r₁)(x - r₂)(x - r₃) = 0",
                    "Depressed Cubic": "t³ + pt + q = 0 (after substitution)",
                    "Sum of Roots": "r₁ + r₂ + r₃ = -b/a",
                    "Sum of Products": "r₁r₂ + r₁r₃ + r₂r₃ = c/a",
                    "Product of Roots": "r₁r₂r₃ = -d/a"
                },
                solvingMethods: [
                    "Factor by grouping (if possible)",
                    "Rational Root Theorem to find first root",
                    "Synthetic division to reduce to quadratic",
                    "Cardano's formula for depressed cubic",
                    "Numerical methods (Newton-Raphson)"
                ],
                applications: [
                    "Volume optimization problems",
                    "Physics: projectile motion with air resistance",
                    "Economics: cost functions",
                    "Engineering: stress-strain relationships"
                ],
                graphicalProperties: {
                    "Shape": "S-curve or inverted S-curve",
                    "Turning Points": "0, 1, or 2 local extrema",
                    "Inflection Point": "Always has one inflection point",
                    "End Behavior": "Opposite directions (one up, one down)"
                }
            },

            quartic_equations: {
                title: "Quartic (Fourth-Degree) Equations",
                concepts: [
                    "General form: ax⁴ + bx³ + cx² + dx + e = 0 where a ≠ 0",
                    "Degree 4 polynomial - can have up to 4 real roots",
                    "May have 0, 2, or 4 real roots (complex roots come in pairs)",
                    "Can be solved by factoring, Ferrari's method, or biquadratic reduction"
                ],
                theory: "Quartic equations are the highest degree polynomials with a general algebraic solution formula. They exhibit rich behavior including multiple turning points and various symmetries.",
                keyFormulas: {
                    "Standard Form": "ax⁴ + bx³ + cx² + dx + e = 0",
                    "Factored Form": "a(x - r₁)(x - r₂)(x - r₃)(x - r₄) = 0",
                    "Biquadratic Form": "ax⁴ + bx² + c = 0 (special case)",
                    "Sum of Roots": "r₁ + r₂ + r₃ + r₄ = -b/a",
                    "Product of Roots": "r₁r₂r₃r₄ = e/a"
                },
                solvingMethods: [
                    "Factor if possible (look for patterns)",
                    "Biquadratic substitution (if bx³ and dx terms are zero)",
                    "Rational Root Theorem",
                    "Ferrari's method (reduce to cubic)",
                    "Numerical methods"
                ],
                applications: [
                    "Beam deflection in engineering",
                    "Orbital mechanics",
                    "Quantum mechanics (potential wells)",
                    "Computer graphics (Bézier curves)"
                ],
                graphicalProperties: {
                    "Shape": "W-shape, M-shape, or variations",
                    "Turning Points": "1, 2, or 3 local extrema",
                    "End Behavior": "Same direction (both up or both down)",
                    "Symmetry": "Even function if only even powers"
                }
            },

            factoring_cubic: {
                title: "Factoring Cubic Equations",
                concepts: [
                    "Factor by grouping when possible",
                    "Use sum/difference of cubes formulas",
                    "Find one root, then factor to quadratic",
                    "Look for common factors first"
                ],
                theory: "Factoring reduces a cubic to linear and quadratic factors, making roots easy to identify. Not all cubics factor nicely over integers.",
                keyFormulas: {
                    "Sum of Cubes": "a³ + b³ = (a + b)(a² - ab + b²)",
                    "Difference of Cubes": "a³ - b³ = (a - b)(a² + ab + b²)",
                    "Factor by Grouping": "Group terms strategically to factor common expressions"
                },
                techniques: [
                    "Always factor out GCF first",
                    "Look for sum/difference of cubes",
                    "Try grouping terms in pairs",
                    "Use synthetic division after finding one root"
                ]
            },

            rational_root_theorem: {
                title: "Rational Root Theorem",
                concepts: [
                    "Possible rational roots are ±(factors of constant)/(factors of leading coefficient)",
                    "Test candidates using synthetic division or substitution",
                    "Once found, use synthetic division to reduce degree",
                    "Not all rational candidates will be actual roots"
                ],
                theory: "The Rational Root Theorem provides a systematic way to test for rational roots. It narrows down the search space significantly.",
                keyFormulas: {
                    "Theorem": "If p/q is a rational root, then p divides d and q divides a"
                },
                process: [
                    "List factors of constant term (d)",
                    "List factors of leading coefficient (a)",
                    "Form all possible ±p/q combinations",
                    "Test each candidate",
                    "Use synthetic division when root is found"
                ]
            },

            synthetic_division: {
                title: "Synthetic Division",
                concepts: [
                    "Efficient method to divide polynomial by (x - r)",
                    "Tests if r is a root (remainder = 0)",
                    "Reduces polynomial degree by 1",
                    "Provides coefficients of quotient polynomial"
                ],
                theory: "Synthetic division is a shortcut for polynomial division. It's especially useful when testing multiple potential roots.",
                process: [
                    "Write coefficients of polynomial (include 0 for missing terms)",
                    "Write potential root to the left",
                    "Bring down leading coefficient",
                    "Multiply and add iteratively",
                    "Last number is remainder (0 means root found)"
                ],
                applications: [
                    "Testing rational root candidates",
                    "Finding all roots systematically",
                    "Polynomial division",
                    "Factoring polynomials"
                ]
            },

            cardano_formula: {
                title: "Cardano's Formula for Cubic Equations",
                concepts: [
                    "Algebraic solution for depressed cubic t³ + pt + q = 0",
                    "Requires reducing general cubic to depressed form",
                    "Discriminant determines nature of roots",
                    "Can involve complex cube roots even for real solutions"
                ],
                theory: "Cardano's formula, discovered in the 16th century, provides an exact algebraic solution for cubic equations. It was historically important in the development of complex numbers.",
                keyFormulas: {
                    "Depressed Cubic": "t³ + pt + q = 0",
                    "Substitution": "x = t - b/(3a) to eliminate x² term",
                    "Discriminant": "Δ = -4p³ - 27q²",
                    "Solution": "Complex formula involving cube roots"
                },
                discriminant: {
                    "Δ > 0": "Three distinct real roots (casus irreducibilis)",
                    "Δ = 0": "Multiple root (at least two equal roots)",
                    "Δ < 0": "One real root, two complex conjugates"
                }
            },

            biquadratic_equations: {
                title: "Biquadratic Equations",
                concepts: [
                    "Form: ax⁴ + bx² + c = 0 (no x³ or x terms)",
                    "Substitute u = x² to get quadratic in u",
                    "Solve quadratic for u values",
                    "Take square roots to find x values"
                ],
                theory: "Biquadratic equations are a special case of quartic equations that can be solved using quadratic techniques through substitution.",
                keyFormulas: {
                    "Standard Form": "ax⁴ + bx² + c = 0",
                    "Substitution": "Let u = x², then au² + bu + c = 0",
                    "Back-substitution": "x = ±√u for each solution u"
                },
                process: [
                    "Verify equation is biquadratic (no odd powers)",
                    "Substitute u = x²",
                    "Solve resulting quadratic equation",
                    "For each u > 0, get x = ±√u",
                    "Discard negative u values (no real x)"
                ]
            },

            ferrari_method: {
                title: "Ferrari's Method for Quartic Equations",
                concepts: [
                    "Reduces general quartic to depressed quartic",
                    "Introduces resolvent cubic equation",
                    "Solving cubic gives value to complete the square",
                    "Most general algebraic method for quartics"
                ],
                theory: "Ferrari's method, developed in the 16th century, provides a complete algebraic solution for quartic equations by cleverly reducing the problem to a cubic.",
                process: [
                    "Eliminate x³ term to get depressed quartic",
                    "Add and subtract terms to enable factoring",
                    "Form resolvent cubic equation",
                    "Solve cubic to find key parameter",
                    "Factor quartic into two quadratics",
                    "Solve each quadratic"
                ]
            },

            descartes_rule: {
                title: "Descartes' Rule of Signs",
                concepts: [
                    "Predicts maximum number of positive real roots",
                    "Count sign changes in f(x) for positive roots",
                    "Count sign changes in f(-x) for negative roots",
                    "Actual number may be less by even number"
                ],
                theory: "Descartes' Rule provides an upper bound on positive and negative real roots without solving the equation.",
                application: [
                    "Helps narrow down root search",
                    "Useful before applying Rational Root Theorem",
                    "Indicates when to look for complex roots",
                    "Validates numerical solutions"
                ]
            },

            numerical_methods: {
                title: "Numerical Methods for Polynomial Equations",
                concepts: [
                    "Newton-Raphson method for root approximation",
                    "Bisection method for bracketing roots",
                    "Graphical methods to visualize roots",
                    "Useful when algebraic methods are impractical"
                ],
                theory: "Numerical methods provide approximate solutions to polynomial equations, especially useful for high-degree polynomials or when exact algebraic solutions are cumbersome.",
                methods: {
                    "Newton-Raphson": "xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)",
                    "Bisection": "Repeatedly halve interval containing root",
                    "Secant Method": "Approximation of Newton's method without derivatives"
                }
            },

            graphing_polynomials: {
                title: "Graphing Cubic and Quartic Functions",
                concepts: [
                    "Find x-intercepts (roots) and y-intercept",
                    "Determine end behavior from leading term",
                    "Find critical points using derivative",
                    "Identify inflection points (cubic always has one)"
                ],
                theory: "Graphing polynomials reveals the number and approximate location of roots, as well as the function's overall behavior.",
                graphingSteps: [
                    "Find y-intercept: f(0)",
                    "Find x-intercepts: solve f(x) = 0",
                    "Determine end behavior",
                    "Find critical points: f'(x) = 0",
                    "Test intervals between critical points",
                    "Find inflection points: f''(x) = 0",
                    "Sketch curve"
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
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            'cuberoot': '∛', 'fourthroot': '∜',
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈'
        };
    }

    initializeCubicQuarticSolvers() {
        this.polynomialTypes = {
            // Cubic equation types
            cubic_general: {
                patterns: [
                    /x\^3|x³/i,
                    /cubic/i,
                    /third.*degree/i
                ],
                solver: this.solveCubicGeneral.bind(this),
                name: 'General Cubic Equation',
                category: 'cubic',
                description: 'Solves ax³ + bx² + cx + d = 0'
            },

            cubic_factored: {
                patterns: [
                    /factor.*cubic/i,
                    /\(x.*\)\(x.*\)\(x.*\)/
                ],
                solver: this.solveCubicFactored.bind(this),
                name: 'Factored Cubic Equation',
                category: 'cubic_factoring',
                description: 'Cubic already in factored form'
            },

            cubic_sum_difference_cubes: {
                patterns: [
                    /x\^3.*[+-].*\d+\^3/,
                    /sum.*cubes/i,
                    /difference.*cubes/i
                ],
                solver: this.solveSumDifferenceCubes.bind(this),
                name: 'Sum/Difference of Cubes',
                category: 'cubic_factoring',
                description: 'a³ ± b³ forms'
            },

            cubic_grouping: {
                patterns: [
                    /factor.*grouping/i,
                    /group.*cubic/i
                ],
                solver: this.solveCubicByGrouping.bind(this),
                name: 'Cubic by Grouping',
                category: 'cubic_factoring',
                description: 'Factor cubic by grouping terms'
            },

            cubic_rational_root: {
                patterns: [
                    /rational.*root/i,
                    /find.*rational.*root/i
                ],
                solver: this.solveCubicRationalRoot.bind(this),
                name: 'Cubic using Rational Root Theorem',
                category: 'cubic_rational',
                description: 'Find roots using Rational Root Theorem'
            },

            // Quartic equation types
            quartic_general: {
                patterns: [
                    /x\^4|x⁴/i,
                    /quartic/i,
                    /fourth.*degree/i
                ],
                solver: this.solveQuarticGeneral.bind(this),
                name: 'General Quartic Equation',
                category: 'quartic',
                description: 'Solves ax⁴ + bx³ + cx² + dx + e = 0'
            },

            biquadratic: {
                patterns: [
                    /biquadratic/i,
                    /x\^4.*x\^2(?!.*x\^3)(?!.*x[^²⁴])/i
                ],
                solver: this.solveBiquadratic.bind(this),
                name: 'Biquadratic Equation',
                category: 'quartic_special',
                description: 'Solves ax⁴ + bx² + c = 0'
            },

            quartic_factored: {
                patterns: [
                    /factor.*quartic/i,
                    /\(x.*\)\(x.*\)\(x.*\)\(x.*\)/
                ],
                solver: this.solveQuarticFactored.bind(this),
                name: 'Factored Quartic Equation',
                category: 'quartic_factoring',
                description: 'Quartic already in factored form'
            },

            quartic_perfect_square: {
                patterns: [
                    /perfect.*square.*quartic/i,
                    /\(x\^2.*\)\^2/i
                ],
                solver: this.solveQuarticPerfectSquare.bind(this),
                name: 'Perfect Square Quartic',
                category: 'quartic_special',
                description: 'Quartic that is a perfect square'
            },

            depressed_cubic: {
                patterns: [
                    /depressed.*cubic/i,
                    /x\^3.*[+-].*x(?!.*x\^2)/i
                ],
                solver: this.solveDepressedCubic.bind(this),
                name: 'Depressed Cubic',
                category: 'cubic_special',
                description: 'Cubic without x² term: x³ + px + q = 0'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            cubic: {
                'Find rational roots': [
                    'Not testing all possible ±p/q combinations',
                    'Arithmetic errors in synthetic division',
                    'Forgetting to include ±1 as candidates',
                    'Missing negative candidates'
                ],
                'Factor sum/difference of cubes': [
                    'Sign errors in factorization formula',
                    'Forgetting the squared and product terms',
                    'Incorrect simplification of resulting factors'
                ],
                'Reduce to quadratic': [
                    'Errors in synthetic division',
                    'Not simplifying quadratic correctly',
                    'Losing track of original root'
                ],
                'Apply Cardano formula': [
                    'Arithmetic errors with cube roots',
                    'Not converting to depressed form correctly',
                    'Mishandling complex numbers in casus irreducibilis'
                ]
            },
            quartic: {
                'Biquadratic substitution': [
                    'Forgetting to substitute back to x',
                    'Missing ± when taking square root',
                    'Not checking if u values are positive',
                    'Algebraic errors in solving for u'
                ],
                'Factor quartic': [
                    'Incomplete factorization',
                    'Sign errors when grouping',
                    'Not checking all factor combinations',
                    'Missing common factors first'
                ],
                'Apply Ferrari method': [
                    'Errors in forming resolvent cubic',
                    'Not completing square correctly',
                    'Computational errors in multiple steps'
                ]
            },
            factoring: {
                'Factor by grouping': [
                    'Grouping terms incorrectly',
                    'Not factoring GCF from each group',
                    'Missing common binomial factor',
                    'Sign errors when factoring negatives'
                ],
                'Synthetic division': [
                    'Setup errors (wrong order, missing zeros)',
                    'Arithmetic mistakes in multiplication',
                    'Forgetting to bring down first coefficient',
                    'Misreading remainder'
                ]
            },
            verification: {
                'Check roots': [
                    'Arithmetic errors in substitution',
                    'Forgetting to check all roots',
                    'Not verifying multiplicity of repeated roots',
                    'Rounding errors with irrational roots'
                ]
            }
        };

        this.errorPrevention = {
            rational_root_testing: {
                reminder: 'List ALL possible ±p/q systematically before testing',
                method: 'Create organized table of factors and combinations'
            },
            synthetic_division: {
                reminder: 'Include 0 for any missing term coefficients',
                method: 'Write out all terms from highest to lowest degree'
            },
            biquadratic_back_substitution: {
                reminder: 'After finding u, remember x = ±√u (both signs)',
                method: 'Check: for each positive u, you get TWO x values'
            },
            complex_arithmetic: {
                reminder: 'Be extra careful with signs when working with complex numbers',
                method: 'Write out i² = -1 explicitly when simplifying'
            },
            sum_difference_cubes: {
                reminder: 'a³ + b³ = (a+b)(a² - ab + b²), note the MINUS in middle',
                method: 'Memorize: sum→plus, then minus-plus in trinomial'
            },
            degree_reduction: {
                reminder: 'After finding one root, degree reduces by exactly 1',
                method: 'Cubic → quadratic → linear; verify degree at each step'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why methods work and mathematical meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact sequence of steps to follow',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical interpretation and geometric understanding',
                language: 'visual and spatial metaphors'
            },
            algebraic: {
                focus: 'Formal algebraic manipulation and properties',
                language: 'precise mathematical terminology'
            },
            historical: {
                focus: 'Development of methods and their importance',
                language: 'narrative and contextual'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete numbers and simple cases',
                focus: 'procedural mastery'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of concrete and abstract',
                focus: 'understanding and application'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every tiny step explained with analogies',
                examples: 'real-world analogies and stories',
                analogies: true,
                visualization: 'simple pictures and drawings',
                focus: 'building intuition'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive explanations with theory',
                examples: 'abstract and generalized cases',
                focus: 'deep understanding and connections'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced progression',
                focus: 'independent problem-solving development'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            volume_optimization: {
                scenario: "Maximizing volume of open-top box from rectangular sheet",
                equation: "V(x) = x(L-2x)(W-2x) - cubic when expanded",
                examples: [
                    "Sheet 12×8 inches, cut squares of side x from corners. Find x for max volume.",
                    "Cylindrical tank design: optimize radius for given material constraints"
                ],
                context: "Manufacturing and packaging often require volume optimization",
                realWorldDomain: "Engineering, Manufacturing"
            },
            projectile_motion: {
                scenario: "Height of projectile with air resistance",
                equation: "Often modeled by cubic: h(t) = at³ + bt² + ct + d",
                examples: [
                    "Baseball trajectory accounting for air resistance",
                    "Rocket launch path with varying drag"
                ],
                context: "Physics applications where drag force is significant",
                realWorldDomain: "Physics, Aerospace"
            },
            economics_cost: {
                scenario: "Total cost functions with economies of scale",
                equation: "C(x) = ax³ + bx² + cx + d",
                examples: [
                    "Manufacturing cost with setup, per-unit, and efficiency factors",
                    "Break-even analysis for production levels"
                ],
                context: "Business decisions about production quantity",
                realWorldDomain: "Economics, Business"
            },
            beam_deflection: {
                scenario: "Deflection of loaded beam",
                equation: "Quartic: y(x) = ax⁴ + bx³ + cx² + dx + e",
                examples: [
                    "Bridge beam under distributed load",
                    "Cantilever beam deflection"
                ],
                context: "Structural engineering stress analysis",
                realWorldDomain: "Civil Engineering, Architecture"
            },
            chemical_equilibrium: {
                scenario: "Concentration in chemical reactions",
                equation: "Equilibrium equations often yield cubic/quartic",
                examples: [
                    "pH calculations in buffer solutions",
                    "Multi-step reaction equilibria"
                ],
                context: "Predicting reaction outcomes and concentrations",
                realWorldDomain: "Chemistry, Biochemistry"
            },
            orbital_mechanics: {
                scenario: "Satellite orbit calculations",
                equation: "Orbital velocity and period equations (quartic in eccentricity)",
                examples: [
                    "Geostationary satellite positioning",
                    "Planetary orbit parameters"
                ],
                context: "Space mission planning and satellite deployment",
                realWorldDomain: "Astronomy, Aerospace"
            },
            electrical_circuits: {
                scenario: "RLC circuit resonance",
                equation: "Impedance calculations yield polynomial equations",
                examples: [
                    "Finding resonant frequencies",
                    "Filter design in signal processing"
                ],
                context: "Electronics and telecommunications",
                realWorldDomain: "Electrical Engineering"
            },
            computer_graphics: {
                scenario: "Bézier curves for smooth animation paths",
                equation: "Cubic Bézier: B(t) = (1-t)³P₀ + 3(1-t)²tP₁ + 3(1-t)t²P₂ + t³P₃",
                examples: [
                    "Animation curves in video games",
                    "Font outline definitions (TrueType fonts)"
                ],
                context: "Creating smooth, controllable curves in digital media",
                realWorldDomain: "Computer Graphics, Animation"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            cubic_general: {
                skills: [
                    'Polynomial operations',
                    'Factoring techniques',
                    'Quadratic formula',
                    'Synthetic division',
                    'Complex numbers basics'
                ],
                priorKnowledge: [
                    'Polynomial degree and standard form',
                    'Factor theorem',
                    'Fundamental Theorem of Algebra',
                    'Relationship between factors and roots'
                ],
                checkQuestions: [
                    "What is the degree of 2x³ - 5x² + 3x - 1?",
                    "If (x-2) is a factor of f(x), what is f(2)?",
                    "Solve x² + 4x - 5 = 0",
                    "Perform synthetic division: (x³ - 6x² + 11x - 6) ÷ (x - 1)"
                ]
            },
            cubic_factoring: {
                skills: [
                    'Recognizing special products',
                    'Factor by grouping',
                    'GCF extraction',
                    'Sum and difference of cubes formulas'
                ],
                priorKnowledge: [
                    'a³ + b³ = (a+b)(a² - ab + b²)',
                    'a³ - b³ = (a-b)(a² + ab + b²)',
                    'Grouping strategies'
                ],
                checkQuestions: [
                    "Factor: x³ + 8",
                    "Factor: x³ - 27",
                    "What is the GCF of 6x³ - 9x² + 12x?",
                    "Factor by grouping: x³ + 3x² + 2x + 6"
                ]
            },
            cubic_rational: {
                skills: [
                    'Finding factors of integers',
                    'Rational Root Theorem',
                    'Synthetic division',
                    'Testing potential roots systematically'
                ],
                priorKnowledge: [
                    'Possible rational roots are ±p/q',
                    'Synthetic division process',
                    'Remainder theorem'
                ],
                checkQuestions: [
                    "List possible rational roots of 2x³ - 3x² + 5x - 6 = 0",
                    "What does a remainder of 0 in synthetic division indicate?",
                    "Is x = 2 a root of x³ - 6x² + 11x - 6 = 0?"
                ]
            },
            quartic: {
                skills: [
                    'All cubic prerequisites',
                    'Completing the square',
                    'Solving systems of equations',
                    'Polynomial long division'
                ],
                priorKnowledge: [
                    'Quartics can have 0, 2, or 4 real roots',
                    'Complex roots come in conjugate pairs',
                    'Vieta\'s formulas for root relationships'
                ],
                checkQuestions: [
                    "How many real roots can a quartic have?",
                    "Complete the square: x² + 6x + 5",
                    "If 2+3i is a root, what else must be a root?",
                    "Solve: x⁴ - 5x² + 4 = 0"
                ]
            },
            biquadratic: {
                skills: [
                    'Quadratic formula',
                    'Substitution method',
                    'Taking square roots',
                    'Working with ± symbol'
                ],
                priorKnowledge: [
                    'u = x² substitution',
                    'Solving quadratics',
                    'x = ±√u gives two solutions'
                ],
                checkQuestions: [
                    "If u = x², what is x in terms of u?",
                    "Solve: u² - 5u + 6 = 0",
                    "If u = 4, what are the values of x?",
                    "Which u values give real x values?"
                ]
            },
            numerical_methods: {
                skills: [
                    'Function evaluation',
                    'Derivative calculation',
                    'Interval arithmetic',
                    'Iterative processes'
                ],
                priorKnowledge: [
                    'Newton-Raphson formula',
                    'Bisection method',
                    'Convergence concepts'
                ],
                checkQuestions: [
                    "Find f(2) for f(x) = x³ - 4x + 1",
                    "What is f'(x) for f(x) = x³ - 6x² + 9x?",
                    "If f(1) < 0 and f(2) > 0, what does this tell us?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            polynomial_graph: {
                description: "Visual representation of polynomial function",
                analogy: "The curve shows where the function crosses the x-axis (roots)",
                visualization: "Graph y = f(x), mark x-intercepts as roots",
                suitableFor: ['all_polynomials'],
                explanation: "Roots are x-values where graph crosses x-axis"
            },
            factor_diagram: {
                description: "Breaking polynomial into linear and quadratic factors",
                analogy: "Like breaking a number into prime factors",
                visualization: "Tree diagram showing factorization steps",
                suitableFor: ['cubic_factoring', 'quartic_factoring'],
                explanation: "Each factor corresponds to one or more roots"
            },
            synthetic_division_table: {
                description: "Compact polynomial division layout",
                analogy: "Shortcut for long division, like a division algorithm",
                visualization: "Coefficients arranged in rows with operations",
                suitableFor: ['cubic_rational', 'quartic'],
                explanation: "Efficiently tests if value is a root and finds quotient"
            },
            root_location: {
                description: "Number line showing root positions",
                analogy: "Marking spots where polynomial equals zero",
                visualization: "Number line with roots marked and labeled",
                suitableFor: ['all_polynomials'],
                explanation: "Visual representation of solution set"
            },
            cubic_curve: {
                description: "S-shaped curve characteristic of cubic",
                analogy: "Always crosses x-axis at least once (guaranteed real root)",
                visualization: "Sketch showing inflection point and end behavior",
                suitableFor: ['cubic'],
                explanation: "Shape reveals number and nature of roots"
            },
            quartic_curve: {
                description: "W or M shaped curve (or variations)",
                analogy: "Can have 0, 2, or 4 x-intercepts",
                visualization: "Sketch showing possible shapes based on roots",
                suitableFor: ['quartic'],
                explanation: "End behavior: both ends go same direction"
            },
            biquadratic_substitution: {
                description: "Two-step process: quadratic in u, then back to x",
                analogy: "Like solving a puzzle in two stages",
                visualization: "Flow diagram: x⁴ equation → u² equation → u values → x values",
                suitableFor: ['biquadratic'],
                explanation: "Substitution temporarily reduces complexity"
            },
            discriminant_analysis: {
                description: "Using discriminant to predict root types",
                analogy: "Crystal ball that tells you what kinds of roots to expect",
                visualization: "Discriminant value → interpretation diagram",
                suitableFor: ['cubic', 'quartic'],
                explanation: "Discriminant sign determines real vs complex roots"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "x³ - 8 = 0",
                    type: "difference of cubes",
                    solution: [2],
                    steps: [
                        "Recognize as difference of cubes: x³ - 2³",
                        "Apply formula: (x - 2)(x² + 2x + 4) = 0",
                        "Solve x - 2 = 0 → x = 2",
                        "Check quadratic: Δ = 4 - 16 = -12 < 0 (no real roots)"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "x³ + 27 = 0",
                    type: "sum of cubes",
                    solution: [-3],
                    steps: [
                        "Recognize as sum of cubes: x³ + 3³",
                        "Apply formula: (x + 3)(x² - 3x + 9) = 0",
                        "Solve x + 3 = 0 → x = -3",
                        "Check quadratic: no real roots (discriminant < 0)"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "x⁴ - 16 = 0",
                    type: "difference of squares (twice)",
                    solution: [-2, 2],
                    steps: [
                        "Recognize as difference of squares: (x²)² - 4²",
                        "Factor: (x² - 4)(x² + 4) = 0",
                        "Factor again: (x - 2)(x + 2)(x² + 4) = 0",
                        "Real solutions: x = 2, x = -2"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "x⁴ - 5x² + 4 = 0",
                    type: "biquadratic",
                    solution: [-2, -1, 1, 2],
                    steps: [
                        "Let u = x²: u² - 5u + 4 = 0",
                        "Factor: (u - 4)(u - 1) = 0",
                        "Solve: u = 4 or u = 1",
                        "Back-substitute: x² = 4 → x = ±2; x² = 1 → x = ±1"
                    ],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "x³ - 6x² + 11x - 6 = 0",
                    type: "rational root theorem + synthetic division",
                    solution: [1, 2, 3],
                    steps: [
                        "Possible rational roots: ±1, ±2, ±3, ±6",
                        "Test x = 1: 1 - 6 + 11 - 6 = 0 ✓",
                        "Synthetic division by (x - 1): quotient x² - 5x + 6",
                        "Factor: (x - 2)(x - 3)",
                        "All roots: x = 1, 2, 3"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "2x³ - 3x² - 11x + 6 = 0",
                    type: "rational root theorem",
                    solution: [-2, 0.5, 3],
                    steps: [
                        "Possible: ±1, ±2, ±3, ±6, ±1/2, ±3/2",
                        "Test x = 3: works",
                        "Divide by (x - 3): get 2x² + 3x - 2",
                        "Solve quadratic: x = (-3 ± 5)/4 = 1/2 or -2"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "x⁴ - 10x² + 9 = 0",
                    type: "biquadratic",
                    solution: [-3, -1, 1, 3],
                    steps: [
                        "Let u = x²: u² - 10u + 9 = 0",
                        "Factor: (u - 9)(u - 1) = 0",
                        "u = 9 or u = 1",
                        "x = ±3 or x = ±1"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "x³ + 3x² + 2x + 6 = 0",
                    type: "factor by grouping",
                    solution: [-3],
                    steps: [
                        "Group: (x³ + 3x²) + (2x + 6)",
                        "Factor: x²(x + 3) + 2(x + 3)",
                        "Common factor: (x + 3)(x² + 2) = 0",
                        "Real root: x = -3 (quadratic has no real roots)"
                    ],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "x³ - 7x + 6 = 0",
                    type: "depressed cubic + rational root",
                    solution: [-3, 1, 2],
                    steps: [
                        "Already in depressed form (no x² term)",
                        "Try rational roots: ±1, ±2, ±3, ±6",
                        "x = 1 works: 1 - 7 + 6 = 0",
                        "Divide: quotient x² + x - 6 = (x+3)(x-2)",
                        "Roots: 1, -3, 2"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "x⁴ - 4x³ + 6x² - 4x + 1 = 0",
                    type: "perfect square (x-1)⁴",
                    solution: [1, 1, 1, 1],
                    steps: [
                        "Notice binomial coefficients: 1, -4, 6, -4, 1",
                        "Recognize (x - 1)⁴ expansion",
                        "Solution: x = 1 (multiplicity 4)"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "x³ - 15x - 4 = 0",
                    type: "depressed cubic (requires Cardano or numerical)",
                    solution: [-0.268, -1.856, 4.124],
                    approximateSolution: true,
                    steps: [
                        "Depressed cubic: no x² term",
                        "Rational root theorem: no rational roots",
                        "Discriminant Δ = -4(-15)³ - 27(-4)² = -568 < 0",
                        "One real root (use numerical methods or Cardano)"
                    ],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                sum_difference_cubes: [
                    { problem: "x³ + 64 = 0", solution: [-4] },
                    { problem: "8x³ - 27 = 0", solution: [3/2] },
                    { problem: "x³ - 125 = 0", solution: [5] }
                ],
                biquadratic: [
                    { problem: "x⁴ - 13x² + 36 = 0", solution: [-3, -2, 2, 3] },
                    { problem: "x⁴ - 17x² + 16 = 0", solution: [-4, -1, 1, 4] },
                    { problem: "4x⁴ - 25x² + 36 = 0", solution: [-2, -1.5, 1.5, 2] }
                ],
                rational_root: [
                    { problem: "x³ - 4x² + x + 6 = 0", solution: [-1, 2, 3] },
                    { problem: "x³ + 2x² - 5x - 6 = 0", solution: [-3, -1, 2] },
                    { problem: "2x³ - x² - 7x + 6 = 0", solution: [-1.5, 1, 2] }
                ],
                grouping: [
                    { problem: "x³ - 2x² - 9x + 18 = 0", solution: [-3, 2, 3] },
                    { problem: "x³ + 4x² + x + 4 = 0", solution: [-4, -i, i] },
                    { problem: "x³ - x² - 4x + 4 = 0", solution: [-2, 1, 2] }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            cubic_always_three_roots: {
                misconception: "Cubic equations always have three different real roots",
                reality: "Cubics have 3 roots counting multiplicity, but may have repeated roots or complex roots",
                correctiveExample: "x³ = 0 has one root (x=0) with multiplicity 3; x³ + x = 0 has one real (x=0) and two complex roots",
                commonIn: ['cubic_general']
            },
            quartic_root_count: {
                misconception: "Quartic equations always have four real roots",
                reality: "Quartics have 0, 2, or 4 real roots (complex roots come in conjugate pairs)",
                correctiveExample: "x⁴ + 1 = 0 has zero real roots (four complex); x⁴ - 1 = 0 has two real roots (±1)",
                commonIn: ['quartic']
            },
            biquadratic_back_substitution: {
                misconception: "After solving for u in biquadratic, x = √u (single value)",
                reality: "For each positive u, we get x = ±√u (two values)",
                correctiveExample: "If u = 4, then x² = 4, so x = ±2 (both +2 and -2)",
                commonIn: ['biquadratic']
            },
            sum_cubes_formula: {
                misconception: "a³ + b³ = (a + b)³",
                reality: "a³ + b³ = (a + b)(a² - ab + b²), NOT (a+b)³",
                correctiveExample: "2³ + 3³ = 8 + 27 = 35, but (2+3)³ = 125",
                commonIn: ['cubic_factoring']
            },
            rational_root_guarantee: {
                misconception: "Rational Root Theorem guarantees finding a rational root",
                reality: "It only lists possible rational roots; polynomial may have no rational roots",
                correctiveExample: "x³ - 2 = 0 has possible rational roots ±1, ±2, but actual root is ∛2 (irrational)",
                commonIn: ['cubic_rational']
            },
            synthetic_division_remainder: {
                misconception: "Remainder in synthetic division is always a root",
                reality: "Remainder of ZERO means the tested value IS a root",
                correctiveExample: "Testing x=2 in x³-6x²+11x-6 gives remainder 0, so 2 is a root",
                commonIn: ['cubic_rational', 'synthetic_division']
            },
            degree_after_factoring: {
                misconception: "Finding one root of cubic means we're done",
                reality: "After finding one cubic root, we have a quadratic remaining that might have 2 more roots",
                correctiveExample: "x³-6x²+11x-6: finding x=1 leaves x²-5x+6=(x-2)(x-3), giving two more roots",
                commonIn: ['cubic_general']
            },
            complex_root_pairs: {
                misconception: "Polynomials with real coefficients can have one complex root alone",
                reality: "Complex roots MUST come in conjugate pairs for real coefficient polynomials",
                correctiveExample: "If 2+3i is a root, then 2-3i must also be a root",
                commonIn: ['cubic', 'quartic']
            },
            depressed_cubic_conversion: {
                misconception: "Can solve any cubic directly without converting to depressed form",
                reality: "Cardano's formula requires depressed cubic form (no x² term)",
                correctiveExample: "x³ + 3x² + 3x + 1 must be converted via substitution before applying formula",
                commonIn: ['depressed_cubic', 'cardano_formula']
            },
            perfect_square_recognition: {
                misconception: "x⁴ + 4x² + 4 factors as (x² + 2)²",
                reality: "This is correct! But must then solve x² + 2 = 0 (gives complex roots)",
                correctiveExample: "(x² + 2)² = 0 means x² = -2, so x = ±i√2",
                commonIn: ['quartic_special']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            polynomial_roots: {
                analogy: "Roots as treasure locations",
                explanation: "Finding roots is like finding specific locations where the polynomial function crosses the x-axis - like X marks the spot on a treasure map",
                suitableFor: ['all_polynomials'],
                ELI5: "Imagine the graph is a roller coaster track. The roots are the exact spots where the track crosses the ground."
            },
            cubic_curve_shape: {
                analogy: "Cubic as a snake or S-curve",
                explanation: "Cubic functions make an S-shape (or backwards S). They always cross the x-axis at least once, like a snake slithering across the ground",
                suitableFor: ['cubic'],
                ELI5: "Draw an S or a backwards S. That's what cubic graphs look like! They always touch the ground (x-axis) at least once."
            },
            quartic_curve_shape: {
                analogy: "Quartic as W or M shape",
                explanation: "Quartic functions can look like W or M (or flipped versions). Both ends go the same direction - both up or both down",
                suitableFor: ['quartic'],
                ELI5: "Draw a W or M. Quartic graphs can look like these! Both ends point the same way."
            },
            factoring_as_breaking: {
                analogy: "Factoring as breaking into pieces",
                explanation: "Factoring a polynomial is like breaking a number into its multiplication pieces. 12 = 3×4, similarly x³-8 = (x-2)(x²+2x+4)",
                suitableFor: ['cubic_factoring', 'quartic_factoring'],
                ELI5: "If you have a LEGO creation, factoring is like breaking it into the original LEGO pieces that made it."
            },
            synthetic_division: {
                analogy: "Synthetic division as a shortcut machine",
                explanation: "Synthetic division is like a fast-food drive-through compared to regular division which is like ordering inside - both get you food, but one is quicker",
                suitableFor: ['all_polynomials'],
                ELI5: "It's like having a calculator that does division really fast. Instead of long steps, you get the answer quickly!"
            },
            rational_root_testing: {
                analogy: "Rational Root Theorem as trying keys",
                explanation: "Testing possible rational roots is like trying different keys to unlock a door. The theorem tells you which keys to try instead of trying every key in the world",
                suitableFor: ['cubic_rational'],
                ELI5: "Imagine you lost which key opens your front door. Instead of trying every key in the world, you only try the keys on your keychain. Much faster!"
            },
            biquadratic_substitution: {
                analogy: "Biquadratic as two-step puzzle",
                explanation: "Solving biquadratic is like a video game with two levels: first solve a puzzle for magic coins (u values), then trade each coin for prizes (x values)",
                suitableFor: ['biquadratic'],
                ELI5: "First you solve an easier puzzle to get special tokens. Then you trade each token for two prizes. That's why you might get 4 answers total!"
            },
            sum_difference_cubes: {
                analogy: "Special patterns as shortcuts",
                explanation: "Sum and difference of cubes formulas are like knowing secret codes. Instead of figuring it out the long way, you use the code to unlock the answer instantly",
                suitableFor: ['cubic_factoring'],
                ELI5: "It's like having a cheat code in a game. When you see x³ + 8, you know the secret pattern to factor it super fast!"
            },
            degree_reduction: {
                analogy: "Solving in stages like climbing stairs",
                explanation: "Finding one root reduces the problem to an easier one, like climbing stairs - each step up makes you closer to the top and each step is smaller than the whole climb",
                suitableFor: ['cubic_general', 'quartic'],
                ELI5: "It's like eating a big pizza. You don't eat it all at once! You eat one slice, then another slice, until it's all gone. Each slice makes the pizza smaller and easier."
            },
            complex_roots: {
                analogy: "Complex roots as imaginary locations",
                explanation: "Complex roots are like locations in a story - they exist in the math world even though you can't point to them on a regular number line",
                suitableFor: ['cubic', 'quartic'],
                ELI5: "You know how in stories there are magical places like Narnia or Hogwarts? Complex numbers are like that - real in the math world even though we can't visit them in real life."
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            cubic_general: {
                level1: "What degree is this polynomial? How many roots should it have?",
                level2: "Can you find any rational roots using the Rational Root Theorem?",
                level3: "Try testing ±1, ±2, ±3... using synthetic division",
                level4: "Test x = {candidate} - it's a root! Now divide to get a quadratic"
            },
            cubic_factoring: {
                level1: "Do you see any special patterns? Sum/difference of cubes? Grouping?",
                level2: "Check if this matches a³ ± b³ formula",
                level3: "For sum of cubes: a³ + b³ = (a+b)(a² - ab + b²)",
                level4: "This is {type} - apply the formula with a = {a} and b = {b}"
            },
            biquadratic: {
                level1: "What's special about this equation? What terms are missing?",
                level2: "Notice there's no x³ or x term - only x⁴ and x². This is biquadratic!",
                level3: "Let u = x². Substitute to get a quadratic equation in u",
                level4: "Solve {quadratic_in_u} for u, then find x = ±√u for each positive u"
            },
            quartic_general: {
                level1: "What methods do you know for solving quartics?",
                level2: "Check: Is it biquadratic? Can you factor it? Is there a rational root?",
                level3: "Try the Rational Root Theorem first - easier than Ferrari's method",
                level4: "Test these possible rational roots: {candidates}"
            },
            rational_root_theorem: {
                level1: "What are the factors of the constant term?",
                level2: "What are the factors of the leading coefficient?",
                level3: "Possible rational roots are ±(factors of constant)/(factors of leading coef)",
                level4: "Test these candidates: {list}. Use synthetic division to check each"
            },
            synthetic_division: {
                level1: "Have you set up the synthetic division table correctly?",
                level2: "Write coefficients in order (include 0 for missing terms)",
                level3: "Bring down first coefficient, multiply by test value, add to next coefficient, repeat",
                level4: "If remainder is 0, the test value is a root and the other numbers are the quotient coefficients"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Solve: x³ - 1 = 0",
                    answer: [1],
                    assesses: "difference_of_cubes",
                    difficulty: "basic"
                },
                {
                    question: "Solve: x³ - 4x² + x + 6 = 0",
                    answer: [-1, 2, 3],
                    assesses: "rational_root_theorem",
                    difficulty: "intermediate"
                },
                {
                    question: "Solve: x⁴ - 10x² + 9 = 0",
                    answer: [-3, -1, 1, 3],
                    assesses: "biquadratic",
                    difficulty: "intermediate"
                },
                {
                    question: "Factor: x³ + 8",
                    answer: "(x + 2)(x² - 2x + 4)",
                    assesses: "sum_of_cubes",
                    difficulty: "basic"
                }
            ],
            formative: [
                {
                    question: "How many real roots can a cubic equation have?",
                    options: ["Always 3", "1 or 3", "1, 2, or 3", "0, 1, 2, or 3"],
                    correct: "1 or 3",
                    explanation: "Cubics always have at least one real root. Can have 3 distinct, 1 real + 2 complex, or repeated roots"
                },
                {
                    question: "For biquadratic x⁴ + bx² + c = 0, the first step is:",
                    options: ["Factor directly", "Use quartic formula", "Let u = x² and substitute", "Find rational roots"],
                    correct: "Let u = x² and substitute",
                    explanation: "Biquadratic equations are solved by substitution to reduce to quadratic"
                },
                {
                    question: "The formula a³ + b³ = ?",
                    options: ["(a+b)³", "(a+b)(a² - ab + b²)", "(a+b)(a² + ab + b²)", "(a-b)(a² + ab + b²)"],
                    correct: "(a+b)(a² - ab + b²)",
                    explanation: "Sum of cubes: note the minus in the middle term"
                },
                {
                    question: "If synthetic division gives remainder 0, this means:",
                    options: ["The quotient is 0", "The test value is a root", "There's an error", "The polynomial is prime"],
                    correct: "The test value is a root",
                    explanation: "Remainder of 0 in synthetic division confirms the test value is indeed a root"
                }
            ],
            summative: [
                {
                    question: "Solve completely: 2x³ - 3x² - 11x + 6 = 0",
                    answer: [-2, 0.5, 3],
                    showsWork: true,
                    rubric: {
                        find_rational_root: 2,
                        synthetic_division: 2,
                        solve_quadratic: 2,
                        verify_all_roots: 2,
                        proper_notation: 2
                    }
                },
                {
                    question: "Solve: x⁴ - 13x² + 36 = 0",
                    answer: [-3, -2, 2, 3],
                    showsWork: true,
                    rubric: {
                        recognize_biquadratic: 2,
                        substitution: 2,
                        solve_for_u: 2,
                        back_substitute: 2,
                        all_four_roots: 2
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "x³ - 8 = 0",
                    "x³ + 27 = 0",
                    "x⁴ - 16 = 0",
                    "x⁴ - 1 = 0",
                    "x³ = 0"
                ],
                medium: [
                    "x³ - 7x - 6 = 0",
                    "x⁴ - 5x² + 4 = 0",
                    "x³ + 2x² - 5x - 6 = 0",
                    "2x³ - x² - 7x + 6 = 0",
                    "x³ + 3x² + 2x + 6 = 0"
                ],
                hard: [
                    "x³ - 3x² - 10x + 24 = 0",
                    "x⁴ - 4x³ + 6x² - 4x + 1 = 0",
                    "2x⁴ - 7x³ + 3x² + 8x - 4 = 0",
                    "x³ - 6x + 4 = 0",
                    "x⁴ + x³ - 7x² - x + 6 = 0"
                ]
            },
            byObjective: {
                canFactorSumDifferenceCubes: [
                    "x³ - 64 = 0",
                    "8x³ + 27 = 0",
                    "x³ - 125 = 0",
                    "27x³ + 8 = 0"
                ],
                canUseSyntheticDivision: [
                    "Divide x³ - 2x² - 5x + 6 by (x - 1)",
                    "Test if x = 2 is a root of x³ - 6x² + 11x - 6",
                    "Divide 2x³ + 3x² - 8x + 3 by (x + 3)"
                ],
                canSolveBiquadratic: [
                    "x⁴ - 17x² + 16 = 0",
                    "x⁴ - 13x² + 36 = 0",
                    "4x⁴ - 13x² + 9 = 0"
                ],
                canApplyRationalRootTheorem: [
                    "List possible rational roots of 2x³ - 5x² + 3x - 1",
                    "Find all rational roots of x³ - 4x² + x + 6 = 0",
                    "Determine rational roots of 3x³ + 2x² - 7x + 2 = 0"
                ],
                canFactorByGrouping: [
                    "x³ - 2x² - 9x + 18 = 0",
                    "x³ + 5x² + 3x + 15 = 0",
                    "x³ - x² - 4x + 4 = 0"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "is_biquadratic": "If only even powers (x⁴, x², constant), use biquadratic method",
                "sum_difference_cubes": "If form a³±b³, use special factoring formula",
                "factor_by_grouping": "If 4 terms, try grouping in pairs",
                "has_rational_root": "Use Rational Root Theorem to find first root, then reduce degree",
                "fully_factored": "If already factored, set each factor = 0",
                "depressed_cubic": "If cubic with no x² term, might use Cardano or numerical methods",
                "general_quartic": "Try rational roots first; if none, use Ferrari method or numerical",
                "perfect_square": "Check if polynomial is a perfect square"
            },
            whenToUseWhat: {
                sum_difference_cubes: "When polynomial is pure a³ + b³ or a³ - b³",
                biquadratic_substitution: "When quartic has only even powers",
                rational_root_theorem: "When looking for any rational roots (most cubics/quartics)",
                factor_by_grouping: "When polynomial has 4 terms with common factors",
                synthetic_division: "To test if a value is a root and to find quotient polynomial",
                cardano_formula: "For depressed cubics with no rational roots (advanced)",
                ferrari_method: "For general quartics with no special structure (very advanced)",
                numerical_methods: "When algebraic methods are too complex or no rational roots exist",
                graphing: "To visualize roots and understand polynomial behavior"
            },
            methodSelection: {
                factorsToConsider: [
                    "Degree of polynomial (3 or 4)",
                    "Presence of special patterns (biquadratic, sum/difference of cubes)",
                    "Whether rational roots exist",
                    "Complexity of coefficients",
                    "Whether numerical approximation is acceptable"
                ],
                generalApproach: [
                    "1. Check for special forms (biquadratic, sum/difference cubes, perfect square)",
                    "2. Factor out GCF if present",
                    "3. Try Rational Root Theorem for at least one root",
                    "4. Use synthetic division to reduce degree",
                    "5. Solve resulting lower-degree equation",
                    "6. Verify all solutions"
                ],
                forCubics: [
                    "1. Check for sum/difference of cubes",
                    "2. Try factor by grouping if 4 terms",
                    "3. Apply Rational Root Theorem",
                    "4. After finding one root, reduce to quadratic",
                    "5. Solve quadratic for remaining roots"
                ],
                forQuartics: [
                    "1. Check if biquadratic (missing x³ and x terms)",
                    "2. Check for perfect square or other special forms",
                    "3. Try Rational Root Theorem",
                    "4. If two roots found, factor to quadratics",
                    "5. Use Ferrari method only as last resort"
                ]
            },
            optimizationTips: {
                "Organize rational root candidates": "List systematically in a table to avoid missing any",
                "Use synthetic division efficiently": "Once you find a root, immediately divide to reduce the problem",
                "Check discriminant first": "For cubics, discriminant tells you what to expect (all real or complex roots)",
                "Graph first for insight": "Quick sketch shows approximately where roots are",
                "Start with simple tests": "Try ±1, ±2 first before more complex fractions",
                "Verify as you go": "Check each root immediately after finding it"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Sum/Difference of Cubes Sprint",
                    timeLimit: 120,
                    problems: [
                        "x³ - 1 = 0",
                        "x³ + 8 = 0",
                        "x³ - 27 = 0",
                        "8x³ + 1 = 0",
                        "x³ - 64 = 0"
                    ]
                },
                {
                    name: "Biquadratic Challenge",
                    timeLimit: 180,
                    problems: [
                        "x⁴ - 5x² + 4 = 0",
                        "x⁴ - 10x² + 9 = 0",
                        "x⁴ - 13x² + 36 = 0"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Root Sum Mystery",
                    problem: "A cubic equation has roots that sum to 6, products of pairs sum to 11, and product of all three is -6. Find the equation.",
                    hint: "Use Vieta's formulas: x³ - (sum)x² + (pair products)x - (product) = 0",
                    solution: "x³ - 6x² + 11x - 6 = 0"
                },
                {
                    name: "Pattern Recognition",
                    problem: "What's special about x⁴ - 4x³ + 6x² - 4x + 1 = 0?",
                    hint: "Look at the coefficients: 1, -4, 6, -4, 1",
                    solution: "It's (x-1)⁴ = 0, a perfect fourth power! Solution: x = 1 (multiplicity 4)"
                },
                {
                    name: "Minimal Polynomial",
                    problem: "Find the simplest cubic with integer coefficients having ∛2 as a root",
                    solution: "x³ - 2 = 0 (since (∛2)³ = 2)"
                }
            ],
            applications: [
                {
                    scenario: "Box Volume Optimization",
                    problem: "A box is made from 12×12 inch square by cutting corners of side x and folding. Find x for volume = 128 in³",
                    equation: "V(x) = x(12-2x)² = 128 leads to cubic equation",
                    solution: "Solve: 4x³ - 48x² + 144x - 128 = 0"
                },
                {
                    scenario: "Projectile Height",
                    problem: "Height h(t) = -16t³ + 64t² + 80t. When does projectile hit ground?",
                    equation: "-16t³ + 64t² + 80t = 0",
                    solution: "Factor: -16t(t² - 4t - 5) = 0, giving t = 0, 5, -1 (reject negative)"
                },
                {
                    scenario: "Chemical Equilibrium",
                    problem: "Reaction equilibrium gives concentration equation: x³ - 0.01x - 0.001 = 0",
                    context: "Find equilibrium concentration (positive root)",
                    solution: "Use numerical methods or Cardano formula"
                }
            ],
            debugging: [
                {
                    name: "Biquadratic Error",
                    incorrectWork: [
                        "x⁴ - 5x² + 4 = 0",
                        "Let u = x²: u² - 5u + 4 = 0",
                        "(u-4)(u-1) = 0",
                        "u = 4 or u = 1",
                        "Therefore x = 4 or x = 1"  // ERROR: should be x = ±2, ±1
                    ],
                    correctAnswer: "x = -2, -1, 1, 2",
                    errorType: "Forgot to take ± when solving x² = u"
                },
                {
                    name: "Sum of Cubes Error",
                    incorrectWork: [
                        "x³ + 8 = 0",
                        "(x + 2)(x² + 2x + 4) = 0",  // ERROR: should be x² - 2x + 4
                        "x = -2 or solve x² + 2x + 4 = 0",
                        "Quadratic gives x = (-2 ± √(4-16))/2"
                    ],
                    correctAnswer: "x = -2 (only real root)",
                    errorType: "Wrong sign in sum of cubes formula"
                },
                {
                    name: "Synthetic Division Error",
                    incorrectWork: [
                        "Dividing x³ - 6x² + 11x - 6 by (x-2)",
                        "Setup: 1  -6  11  -6 | 2",
                        "       1  -4  19  32"  // ERROR in arithmetic
                    ],
                    correctAnswer: "Should get: 1  -4  3  0 (remainder 0)",
                    errorType: "Arithmetic errors in multiply-and-add steps"
                }
            ]
        };
    }

    initializeHistoricalContext() {
        this.historicalContext = {
            cubic_equation_history: {
                title: "The Dramatic History of Cubic Equations",
                period: "16th Century Renaissance Italy",
                keyFigures: {
                    "Scipione del Ferro": "First to solve cubic equation (around 1515), kept secret",
                    "Niccolò Tartaglia": "Rediscovered solution, shared with Cardano under oath of secrecy",
                    "Gerolamo Cardano": "Published solution in 'Ars Magna' (1545), breaking oath",
                    "Ludovico Ferrari": "Cardano's student, solved quartic equation"
                },
                significance: [
                    "First major advance in algebra since ancient times",
                    "Led to acceptance of negative and complex numbers",
                    "Showed mathematics could progress beyond Greek achievements",
                    "Public mathematical contests were common entertainment"
                ],
                dramaticElements: [
                    "Mathematical duels for money and prestige",
                    "Broken oaths and betrayals",
                    "Solutions kept as trade secrets",
                    "Discovery of complex numbers through 'casus irreducibilis'"
                ],
                modernRelevance: "Foundation for understanding polynomial behavior, essential in engineering and computer graphics"
            },
            quartic_equation_history: {
                title: "Ferrari and the Quartic Solution",
                period: "1540s",
                achievement: "Ferrari solved general quartic just years after cubic solution",
                method: "Clever reduction to cubic equation (resolvent cubic)",
                significance: [
                    "Highest degree with general algebraic solution formula",
                    "Led to attempts to solve quintic (5th degree)",
                    "Abel later proved no general formula for degree 5+"
                ],
                impact: "Showed limits of algebraic methods, led to Galois theory"
            },
            complex_numbers: {
                title: "Emergence of Complex Numbers",
                connection: "Cubic equations forced mathematicians to accept √(-1)",
                paradox: "Cardano's formula could give real roots via complex intermediate steps",
                evolution: [
                    "Initially called 'impossible' or 'imaginary' numbers",
                    "Bombelli showed they were useful and consistent (1572)",
                    "Gauss fully legitimized them (1799) with geometric interpretation",
                    "Now essential in engineering, physics, and modern mathematics"
                ]
            }
        };
    }

    // MAIN SOLVER METHOD
    solveCubicQuarticProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseCubicQuarticProblem(equation, scenario, parameters, problemType, context);
            this.currentSolution = this.solveCubicQuarticProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateCubicQuarticSteps(this.currentProblem, this.currentSolution);
            this.generateCubicQuarticGraphData();
            this.generateCubicQuarticWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                roots: this.currentSolution?.roots,
                solutionType: this.currentSolution?.solutionType
            };

        } catch (error) {
            throw new Error(`Failed to solve cubic/quartic problem: ${error.message}`);
        }
    }

    parseCubicQuarticProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        if (problemType && this.polynomialTypes[problemType]) {
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

        // Auto-detect type
        for (const [type, config] of Object.entries(this.polynomialTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractPolynomialParameters(match, type, cleanInput);

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

        // Default based on coefficients
        if (parameters.a !== undefined || parameters.b !== undefined) {
            const degree = parameters.d !== undefined ? (parameters.e !== undefined ? 4 : 3) : 3;
            return {
                originalInput: equation || `Degree ${degree} polynomial`,
                cleanInput: cleanInput,
                type: degree === 4 ? 'quartic_general' : 'cubic_general',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize cubic/quartic problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/\^/g, '')
            .replace(/³/g, '^3')
            .replace(/⁴/g, '^4')
            .replace(/²/g, '^2')
            .trim();
    }

    extractPolynomialParameters(match, type, fullInput) {
        const params = {};
        
        // Try to extract coefficients from full input
        // This is a simplified version - real implementation would be more robust
        const cubicMatch = fullInput.match(/([+-]?\d*\.?\d*)x\^?3\s*([+-]\s*\d*\.?\d*)x\^?2\s*([+-]\s*\d*\.?\d*)x\s*([+-]\s*\d*\.?\d*)/);
        const quarticMatch = fullInput.match(/([+-]?\d*\.?\d*)x\^?4\s*([+-]\s*\d*\.?\d*)x\^?3\s*([+-]\s*\d*\.?\d*)x\^?2\s*([+-]\s*\d*\.?\d*)x\s*([+-]\s*\d*\.?\d*)/);

        if (quarticMatch && type.includes('quartic')) {
            params.a = this.parseCoefficient(quarticMatch[1]) || 1;
            params.b = this.parseCoefficient(quarticMatch[2]) || 0;
            params.c = this.parseCoefficient(quarticMatch[3]) || 0;
            params.d = this.parseCoefficient(quarticMatch[4]) || 0;
            params.e = this.parseCoefficient(quarticMatch[5]) || 0;
        } else if (cubicMatch && type.includes('cubic')) {
            params.a = this.parseCoefficient(cubicMatch[1]) || 1;
            params.b = this.parseCoefficient(cubicMatch[2]) || 0;
            params.c = this.parseCoefficient(cubicMatch[3]) || 0;
            params.d = this.parseCoefficient(cubicMatch[4]) || 0;
        }

        return params;
    }

    parseCoefficient(coeff) {
        if (!coeff || coeff.trim() === '') return 0;
        let cleaned = coeff.replace(/\s+/g, '');
        if (cleaned === '+' || cleaned === '') return 1;
        if (cleaned === '-') return -1;
        const num = parseFloat(cleaned);
        return isNaN(num) ? 0 : num;
    }

    solveCubicQuarticProblem_Internal(problem) {
        const solver = this.polynomialTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for problem type: ${problem.type}`);
        }
        return solver(problem);
    }

    // CUBIC SOLVERS

    solveCubicGeneral(problem) {
        const { a, b, c, d } = problem.parameters;
        
        return {
            equation: `${a}x³ + ${b}x² + ${c}x + ${d} = 0`,
            type: 'General Cubic Equation',
            standardForm: `ax³ + bx² + cx + d = 0`,
            coefficients: { a, b, c, d },
            approach: 'Use Rational Root Theorem, then reduce to quadratic',
            note: 'Will demonstrate complete solution process',
            category: 'cubic',
            degree: 3,
            fundamentalTheorem: 'Must have at least one real root',
            possibleRealRoots: '1 or 3 real roots'
        };
    }

    solveCubicFactored(problem) {
        return {
            type: 'Factored Cubic',
            approach: 'Set each factor equal to zero',
            category: 'cubic_factoring'
        };
    }

    solveSumDifferenceCubes(problem) {
        return {
            type: 'Sum/Difference of Cubes',
            formulas: {
                sum: 'a³ + b³ = (a + b)(a² - ab + b²)',
                difference: 'a³ - b³ = (a - b)(a² + ab + b²)'
            },
            approach: 'Apply special factoring formula, then solve',
            category: 'cubic_factoring'
        };
    }

    solveCubicByGrouping(problem) {
        return {
            type: 'Cubic by Grouping',
            approach: 'Group terms strategically to factor common expressions',
            steps: [
                'Group terms in pairs',
                'Factor GCF from each pair',
                'Factor out common binomial',
                'Solve resulting factors'
            ],
            category: 'cubic_factoring'
        };
    }

    solveCubicRationalRoot(problem) {
        const { a, b, c, d } = problem.parameters;
        
        return {
            type: 'Cubic using Rational Root Theorem',
            theorem: 'Possible rational roots are ±p/q where p|d and q|a',
            approach: 'Test candidates systematically using synthetic division',
            category: 'cubic_rational'
        };
    }

    solveDepressedCubic(problem) {
        return {
            type: 'Depressed Cubic',
            form: 't³ + pt + q = 0',
            note: 'No t² term',
            approach: 'Can use Cardano formula or numerical methods',
            category: 'cubic_special'
        };
    }

    // QUARTIC SOLVERS

    solveQuarticGeneral(problem) {
        const { a, b, c, d, e } = problem.parameters;
        
        return {
            equation: `${a}x⁴ + ${b}x³ + ${c}x² + ${d}x + ${e} = 0`,
            type: 'General Quartic Equation',
            standardForm: `ax⁴ + bx³ + cx² + dx + e = 0`,
            coefficients: { a, b, c, d, e },
            approach: 'Check for special cases first, then use rational roots or Ferrari method',
            category: 'quartic',
            degree: 4,
            possibleRealRoots: '0, 2, or 4 real roots (complex come in pairs)'
        };
    }

    solveBiquadratic(problem) {
        const { a, b, c } = problem.parameters;
        
        return {
            equation: `${a}x⁴ + ${b}x² + ${c} = 0`,
            type: 'Biquadratic Equation',
            specialProperty: 'Only even powers of x',
            substitution: 'Let u = x²',
            resultingEquation: `${a}u² + ${b}u + ${c} = 0`,
            approach: 'Solve quadratic for u, then x = ±√u',
            category: 'quartic_special'
        };
    }

    solveQuarticFactored(problem) {
        return {
            type: 'Factored Quartic',
            approach: 'Set each factor equal to zero and solve',
            category: 'quartic_factoring'
        };
    }

    solveQuarticPerfectSquare(problem) {
        return {
            type: 'Perfect Square Quartic',
            form: '(ax² + bx + c)² = 0',
            approach: 'Take square root and solve resulting quadratic',
            category: 'quartic_special'
        };
    }

    // STEP GENERATION (abbreviated - similar to linear workbook pattern)

    generateCubicQuarticSteps(problem, solution) {
        let baseSteps = this.generateBaseCubicQuarticSteps(problem, solution);

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

    generateBaseCubicQuarticSteps(problem, solution) {
        const category = this.polynomialTypes[problem.type]?.category;

        switch(category) {
            case 'cubic':
            case 'cubic_rational':
                return this.generateCubicSteps(problem, solution);
            case 'cubic_factoring':
                return this.generateCubicFactoringSteps(problem, solution);
            case 'quartic':
                return this.generateQuarticSteps(problem, solution);
            case 'quartic_special':
                return this.generateBiquadraticSteps(problem, solution);
            default:
                return this.generateGenericPolynomialSteps(problem, solution);
        }
    }

    generateCubicSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Analyze cubic equation',
            description: 'Identify degree and approach',
            expression: solution.equation,
            reasoning: 'Cubic equations require strategic approach based on form',
            goalStatement: 'Find all three roots (real or complex)'
        }];
    }

    generateCubicFactoringSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Identify factoring pattern',
            description: 'Look for sum/difference of cubes or grouping opportunity',
            reasoning: 'Special patterns allow direct factorization',
            category: solution.category
        }];
    }

    generateQuarticSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Analyze quartic equation',
            description: 'Check for special forms or rational roots',
            expression: solution.equation,
            reasoning: 'Quartics require careful method selection',
            possibleApproaches: 'Biquadratic, rational roots, or Ferrari method'
        }];
    }

    generateBiquadraticSteps(problem, solution) {
        const steps = [];
        const { a, b, c } = problem.parameters;

        // Step 1: Recognize biquadratic form
        steps.push({
            stepNumber: 1,
            step: 'Recognize biquadratic form',
            description: 'Identify that only even powers of x are present',
            expression: solution.equation,
            reasoning: 'No x³ or x terms means we can use substitution method',
            goalStatement: 'Reduce quartic to quadratic equation',
            pattern: 'ax⁴ + bx² + c = 0'
        });

        // Step 2: Substitution
        steps.push({
            stepNumber: 2,
            step: 'Make substitution',
            description: 'Let u = x²',
            beforeExpression: `${a}x⁴ + ${b}x² + ${c} = 0`,
            substitution: 'u = x²',
            afterExpression: `${a}u² + ${b}u + ${c} = 0`,
            reasoning: 'Since x⁴ = (x²)² = u², this converts to quadratic',
            algebraicRule: 'Variable substitution to reduce degree'
        });

        // Step 3: Solve quadratic
        steps.push({
            stepNumber: 3,
            step: 'Solve quadratic equation',
            description: `Solve ${a}u² + ${b}u + ${c} = 0 for u`,
            method: 'Use quadratic formula or factoring',
            quadraticFormula: `u = [-${b} ± √(${b}² - 4·${a}·${c})] / (2·${a})`,
            reasoning: 'Standard quadratic solution methods apply'
        });

        // Step 4: Back-substitute
        steps.push({
            stepNumber: 4,
            step: 'Back-substitute to find x',
            description: 'For each positive u value, solve x² = u',
            substitution: 'x = ±√u',
            reasoning: 'Since u = x², we get two x values (±) for each positive u',
            criticalNote: 'Negative u values give no real x solutions',
            algebraicRule: 'Square root property'
        });

        // Step 5: List all solutions
        steps.push({
            stepNumber: 5,
            step: 'Write complete solution',
            description: 'List all real roots found',
            reasoning: 'Biquadratic can have 0, 2, or 4 real roots',
            verification: 'Check each root in original equation'
        });

        return steps;
    }

    generateGenericPolynomialSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Polynomial equation',
            description: 'Apply appropriate solution method',
            expression: solution.equation || problem.cleanInput,
            reasoning: 'Method depends on specific polynomial form',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS (similar to linear workbook)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationCubicQuartic(step, problem),
                procedural: this.getProceduralExplanationCubicQuartic(step),
                visual: this.getVisualExplanationCubicQuartic(step, problem),
                algebraic: this.getAlgebraicExplanationCubicQuartic(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyCubicQuartic(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsCubicQuartic(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionCubicQuartic(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionCubicQuartic(step, problem);
        }

        if (this.includeHistoricalContext) {
            enhanced.historicalNote = this.getHistoricalContext(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationCubicQuartic(step, problem) {
        const conceptualExplanations = {
            'Recognize biquadratic form': 'A biquadratic equation has a special structure where the variable appears only in even powers. This symmetry allows us to treat x² as a single unit.',
            'Make substitution': 'Substitution is a powerful technique that transforms a complex problem into a simpler one. By letting u = x², we temporarily work with a familiar quadratic equation.',
            'Solve quadratic equation': 'Every quadratic has at most 2 solutions. These solutions for u will help us find up to 4 solutions for x.',
            'Back-substitute to find x': 'We must remember that u represents x², not x itself. Each positive u gives us two x values because both positive and negative numbers square to the same result.',
            'Identify factoring pattern': 'Recognizing patterns is key in mathematics. Sum and difference of cubes have special formulas that make factoring immediate.',
            'Apply Rational Root Theorem': 'The Rational Root Theorem dramatically reduces our search space. Instead of guessing infinitely many numbers, we only test a finite list of candidates.',
            'Perform synthetic division': 'Synthetic division is both a test and a tool. It tells us if a number is a root AND gives us a simpler equation to solve.',
            'Analyze cubic equation': 'Cubic equations always have at least one real root - the graph must cross the x-axis at least once. This guarantee guides our solution strategy.'
        };

        return conceptualExplanations[step.step] || 'This step moves us closer to finding all roots of the polynomial.';
    }

    getProceduralExplanationCubicQuartic(step) {
        const procedural = {
            'Recognize biquadratic form': '1. Check for x³ term (should be absent)\n2. Check for x term (should be absent)\n3. Confirm only x⁴, x², and constant terms present',
            'Make substitution': '1. Write u = x²\n2. Replace every x² with u\n3. Replace every x⁴ with u²\n4. Write resulting quadratic equation',
            'Solve quadratic equation': '1. Identify a, b, c in au² + bu + c = 0\n2. Calculate discriminant b² - 4ac\n3. Apply quadratic formula\n4. Simplify to get u values',
            'Back-substitute to find x': '1. For each u value found\n2. If u > 0, solve x² = u giving x = ±√u\n3. If u < 0, note no real solutions\n4. If u = 0, then x = 0',
            'Perform synthetic division': '1. Write coefficients in order\n2. Write test value to the left\n3. Bring down first coefficient\n4. Multiply by test value, add to next\n5. Repeat until end\n6. Check if remainder = 0'
        };

        return procedural[step.step] || 'Follow the standard procedure for this type of step.';
    }

    getVisualExplanationCubicQuartic(step, problem) {
        const visual = {
            'cubic': 'Visualize an S-shaped curve that must cross the x-axis at least once. The crossing points are the real roots.',
            'quartic': 'Imagine a W or M shaped curve. The curve might touch or cross the x-axis 0, 2, or 4 times.',
            'biquadratic': 'Picture the graph as symmetric about the y-axis (even function). If x = 2 is a root, then x = -2 must also be a root.',
            'sum_difference_cubes': 'Visualize breaking a cubic polynomial into a linear factor (line) times a quadratic factor (parabola).',
            'synthetic_division': 'Picture a compact table where coefficients flow downward and to the right, building the quotient polynomial.'
        };

        const category = this.polynomialTypes[problem.type]?.category || 'cubic';
        return visual[category] || 'Visualize the polynomial as a smooth curve on a coordinate plane.';
    }

    getAlgebraicExplanationCubicQuartic(step) {
        const algebraic = {
            'Recognize biquadratic form': 'Biquadratic: f(x) = ax⁴ + bx² + c where b and d coefficients of x³ and x are zero',
            'Make substitution': 'Substitution Principle: If u = g(x), then f(g(x)) = f(u). Here g(x) = x²',
            'Solve quadratic equation': 'Quadratic Formula: u = [-b ± √(b² - 4ac)] / 2a',
            'Back-substitute to find x': 'Square Root Property: If x² = k where k > 0, then x = ±√k',
            'Apply Rational Root Theorem': 'Theorem: If p/q is rational root of aₙxⁿ + ... + a₀ = 0, then p|a₀ and q|aₙ',
            'Sum of cubes': 'Identity: a³ + b³ = (a + b)(a² - ab + b²)',
            'Difference of cubes': 'Identity: a³ - b³ = (a - b)(a² + ab + b²)',
            'Synthetic division': 'Division Algorithm: f(x) = (x - r)q(x) + R, where R = 0 iff r is a root'
        };

        return algebraic[step.step] || 'Apply formal algebraic principles and properties.';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationCubicQuartic(step, problem),
                analogy: this.findRelevantAnalogy(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestVisualizationCubicQuartic(step)
            }
        }));
    }

    generateELI5ExplanationCubicQuartic(step, problem) {
        const ELI5Explanations = {
            'Recognize biquadratic form': "This is a special type of equation that's easier to solve! It's like finding a puzzle that has a trick to it - instead of being super hard, we can use a clever shortcut.",
            'Make substitution': "We're going to play a game where we pretend x² is a new thing called u. It's like giving a nickname to something to make it easier to talk about!",
            'Solve quadratic equation': "Now we solve a simpler puzzle! It's like we turned a hard video game level into an easier one.",
            'Back-substitute to find x': "Remember our nickname 'u'? Now we have to figure out what the real name (x) is. It's like finding out someone's real name after only knowing their nickname!",
            'Identify factoring pattern': "We're looking for a special pattern, like recognizing a friend's face in a crowd. When we spot it, we know exactly what to do!",
            'Apply Rational Root Theorem': "This is like having a treasure map that shows you exactly which spots to dig. You don't have to dig everywhere - just the marked spots!",
            'Perform synthetic division': "This is a super-fast way to check if a number works, like a shortcut in a maze instead of going the long way.",
            'Analyze cubic equation': "We're looking at the whole puzzle to figure out the best way to solve it. It's like looking at all your LEGO pieces before you start building."
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our math puzzle!";
    }

    suggestVisualizationCubicQuartic(step) {
        const visualizations = {
            'Recognize biquadratic form': 'Draw boxes around x⁴ and x² terms. Notice there are no boxes around x³ or x terms!',
            'Make substitution': 'Draw a cloud labeled "u" and point arrows from every x² to show they all become u',
            'Solve quadratic equation': 'Use the quadratic formula picture - the parabola and the formula side by side',
            'Back-substitute to find x': 'Draw a number line showing that if u = 4, we mark both +2 and -2 as solutions',
            'Identify factoring pattern': 'Circle the terms that match the special formula pattern',
            'Perform synthetic division': 'Draw the synthetic division table with arrows showing how numbers flow down and multiply',
            'Analyze cubic equation': 'Sketch a rough S-curve to visualize how cubic functions behave'
        };

        return visualizations[step.step] || 'Draw a picture to represent what this step does';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeCubicQuartic(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeCubicQuartic(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || 'completed this step'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    addErrorPrevention(step, problemType) {
        const category = this.polynomialTypes[problemType]?.category || 'cubic';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsCubicQuartic(step, problemType),
                checkPoints: this.generateCheckPointsCubicQuartic(step),
                warningFlags: this.identifyWarningFlagsCubicQuartic(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionCubicQuartic(step),
                expectedResult: this.describeExpectedResultCubicQuartic(step),
                troubleshooting: this.generateTroubleshootingTipsCubicQuartic(step)
            }
        };
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsCubicQuartic(step, problem),
                subSteps: this.breakIntoSubStepsCubicQuartic(step),
                hints: this.generateProgressiveHintsCubicQuartic(step, problem),
                practiceVariation: this.generatePracticeVariationCubicQuartic(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessCubicQuartic(step),
                decisionPoints: this.identifyDecisionPointsCubicQuartic(step),
                alternativeApproaches: this.suggestAlternativeMethodsCubicQuartic(step, problem)
            }
        }));
    }

    // HELPER METHODS FOR CUBIC/QUARTIC

    generatePreventionTipsCubicQuartic(step, problemType) {
        const tips = {
            'Make substitution': [
                'Remember: x⁴ becomes u², not just u',
                'Don\'t forget to substitute ALL occurrences of x²',
                'Keep track of what u represents'
            ],
            'Back-substitute to find x': [
                'CRITICAL: For each u, you get TWO x values (±√u)',
                'Only positive u values give real x solutions',
                'x = √u AND x = -√u (don\'t forget the negative!)'
            ],
            'Apply Rational Root Theorem': [
                'List ALL possible ±p/q systematically',
                'Don\'t forget ±1 as candidates',
                'Include both positive and negative possibilities'
            ],
            'Perform synthetic division': [
                'Write 0 for any missing term coefficients',
                'Careful with signs when multiplying',
                'Remainder of 0 means you found a root!'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check arithmetic', 'Verify results'];
    }

    generateCheckPointsCubicQuartic(step) {
        return [
            'Did I follow the procedure correctly?',
            'Are my arithmetic calculations accurate?',
            'Does this result make sense in context?',
            'Am I ready for the next step?'
        ];
    }

    identifyWarningFlagsCubicQuartic(step, problemType) {
        const warnings = {
            'biquadratic': step.step === 'Back-substitute to find x' ?
                ['CRITICAL: Must use ± when taking square root', 'Check: each positive u gives TWO x values'] : [],
            'cubic_rational': step.step === 'Apply Rational Root Theorem' ?
                ['Test ALL candidates - can\'t skip any', 'Remainder must be exactly 0, not just small'] : [],
            'cubic_factoring': step.step === 'Identify factoring pattern' ?
                ['Check formula signs carefully', 'Sum of cubes: (a+b)(a² - ab + b²) note the MINUS'] : []
        };

        const category = this.polynomialTypes[problemType]?.category || 'cubic';
        return warnings[category] || [];
    }

    generateSelfCheckQuestionCubicQuartic(step) {
        const questions = {
            'Recognize biquadratic form': 'Are there any x³ or x terms? (There shouldn\'t be!)',
            'Make substitution': 'Did I replace EVERY x² with u? Did I replace x⁴ with u²?',
            'Solve quadratic equation': 'Did I use the quadratic formula correctly? Are my u values correct?',
            'Back-substitute to find x': 'Did I remember BOTH ± when taking square roots? Did I check for negative u?',
            'Apply Rational Root Theorem': 'Did I list all possible ±p/q? Did I test them systematically?',
            'Perform synthetic division': 'Is my remainder exactly 0? Did I set up the table correctly?'
        };

        return questions[step.step] || 'Does this step make sense and is it correct?';
    }

    describeExpectedResultCubicQuartic(step) {
        const expectations = {
            'Recognize biquadratic form': 'Confirmation that equation has only even powers of x',
            'Make substitution': 'A quadratic equation in u',
            'Solve quadratic equation': 'Two u values (may be real, complex, or repeated)',
            'Back-substitute to find x': 'Up to 4 real x values (or fewer if some u values are negative)',
            'Apply Rational Root Theorem': 'List of possible rational roots to test',
            'Perform synthetic division': 'Quotient polynomial and remainder (0 if root found)'
        };

        return expectations[step.step] || 'Progress toward finding all roots';
    }

    generateTroubleshootingTipsCubicQuartic(step) {
        return [
            'If stuck, review the previous step',
            'Check arithmetic carefully - polynomial errors compound quickly',
            'Verify you\'re using the right formula or method',
            'Try a simple example to understand the technique',
            'Don\'t hesitate to start over if confused'
        ];
    }

    generateGuidingQuestionsCubicQuartic(step, problem) {
        const questions = {
            'Recognize biquadratic form': [
                'What powers of x appear in this equation?',
                'Are there any odd powers (x³, x)?',
                'What makes this equation "special"?'
            ],
            'Make substitution': [
                'What should u represent?',
                'How do I rewrite x⁴ in terms of u?',
                'What type of equation do I get after substitution?'
            ],
            'Solve quadratic equation': [
                'What are the values of a, b, c in my quadratic?',
                'Should I use the quadratic formula or factoring?',
                'What u values do I get?'
            ],
            'Back-substitute to find x': [
                'How is u related to x?',
                'If u = 4, what are the possible x values?',
                'Why do I get two x values for each u?'
            ],
            'Apply Rational Root Theorem': [
                'What are the factors of the constant term?',
                'What are the factors of the leading coefficient?',
                'How do I form all possible ±p/q?'
            ]
        };

        return questions[step.step] || ['What is this step asking me to do?', 'How does it help solve the problem?'];
    }

    breakIntoSubStepsCubicQuartic(step) {
        const subSteps = {
            'Make substitution': [
                'Write "Let u = x²"',
                'Identify that x⁴ = (x²)² = u²',
                'Replace x⁴ with u²',
                'Replace x² with u',
                'Write the new equation in u'
            ],
            'Back-substitute to find x': [
                'Take each u value found',
                'Check if u > 0, u = 0, or u < 0',
                'For u > 0: solve x² = u',
                'Get x = +√u and x = -√u',
                'For u = 0: x = 0',
                'For u < 0: no real solutions'
            ],
            'Perform synthetic division': [
                'Write all coefficients in order',
                'Include 0 for missing terms',
                'Put test value on the left',
                'Bring down first coefficient',
                'Multiply by test value, add to next',
                'Repeat for all coefficients',
                'Check if remainder is 0'
            ]
        };

        return subSteps[step.step] || ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generateProgressiveHintsCubicQuartic(step, problem) {
        const category = this.polynomialTypes[problem.type]?.category || 'cubic';
        const hintSet = this.hints[category] || this.hints.cubic_general;

        return {
            level1: hintSet.level1 || 'Think about what type of polynomial this is.',
            level2: hintSet.level2 || 'Consider what method would be most appropriate.',
            level3: hintSet.level3 || 'Apply the chosen method systematically.',
            level4: hintSet.level4 || 'Follow through with the calculation.'
        };
    }

    generatePracticeVariationCubicQuartic(step, problem) {
        return {
            similarProblem: 'Try the same technique with simpler coefficients',
            practiceHint: 'Master the technique with easy numbers first',
            extension: 'Once comfortable, try problems with fractions or larger numbers'
        };
    }

    explainThinkingProcessCubicQuartic(step) {
        return {
            observe: 'What do I notice about this polynomial?',
            goal: 'What am I trying to find (roots, factors, etc.)?',
            strategy: 'Which method is best for this type?',
            execute: 'How do I carry out this method correctly?',
            verify: 'Does my answer make sense? Can I check it?'
        };
    }

    identifyDecisionPointsCubicQuartic(step) {
        return [
            'Which solution method should I use?',
            'Is there a special pattern I can exploit?',
            'Should I use algebraic or numerical methods?',
            'How can I verify my answer?'
        ];
    }

    suggestAlternativeMethodsCubicQuartic(step, problem) {
        const alternatives = {
            'biquadratic': [
                'Could solve by factoring if coefficients are nice',
                'Could graph to visualize all four roots',
                'Could complete the square instead of quadratic formula'
            ],
            'cubic_rational': [
                'Could try numerical methods (Newton-Raphson)',
                'Could graph to estimate roots first',
                'Could use Cardano formula if no rational roots'
            ]
        };

        const category = this.polynomialTypes[problem.type]?.category;
        return alternatives[category] || ['The chosen method is appropriate for this problem'];
    }

    identifyKeyVocabularyCubicQuartic(step) {
        const vocabulary = {
            'Recognize biquadratic form': ['biquadratic', 'even powers', 'symmetric', 'quartic'],
            'Make substitution': ['substitution', 'variable', 'transformation', 'quadratic'],
            'Solve quadratic equation': ['quadratic formula', 'discriminant', 'roots', 'factoring'],
            'Back-substitute to find x': ['back-substitution', 'square root', 'plus-minus'],
            'Apply Rational Root Theorem': ['rational root', 'factor', 'divisor', 'candidate'],
            'Perform synthetic division': ['synthetic division', 'quotient', 'remainder', 'coefficient']
        };

        return vocabulary[step.step] || ['polynomial', 'root', 'coefficient', 'degree'];
    }

    generateThinkingPromptsCubicQuartic(step) {
        return {
            before: 'Before starting, what do I need to know or identify?',
            during: 'As I work, what should I watch out for?',
            after: 'After finishing, how can I verify this is correct?'
        };
    }

    findRealWorldConnectionCubicQuartic(step, problem) {
        const connections = {
            'cubic': 'Cubic equations model volume problems, like finding the dimensions of a box with a given volume, or calculating optimal production levels in economics.',
            'quartic': 'Quartic equations appear in beam deflection (engineering), orbital mechanics (space), and even in computer graphics for smooth curves.',
            'biquadratic': 'Biquadratic equations model situations with symmetry, like vibrations in structures or alternating current in electrical circuits.'
        };

        const category = this.polynomialTypes[problem.type]?.category;
        return connections[category] || 'Polynomial equations are fundamental in science, engineering, and economics.';
    }

    getHistoricalContext(step, problem) {
        if (!this.includeHistoricalContext) return null;

        const category = this.polynomialTypes[problem.type]?.category;
        
        if (category?.includes('cubic')) {
            return {
                era: '16th century Italy',
                note: 'Solving cubic equations sparked mathematical duels and led to the discovery of complex numbers',
                keyFigure: 'Cardano published the solution in 1545',
                significance: 'First major algebraic breakthrough since ancient times'
            };
        } else if (category?.includes('quartic')) {
            return {
                era: '1540s',
                note: 'Ferrari solved quartic equations shortly after cubics were conquered',
                significance: 'Highest degree with general algebraic solution formula',
                funFact: 'Attempts to solve quintics led to Galois theory and modern algebra'
            };
        }

        return null;
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the solution process`,
            progression: 'We are systematically working toward finding all roots',
            relationship: 'Each step reduces complexity or reveals more information'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.polynomialTypes[problemType]?.category;
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic algebra', 'Polynomial operations'];
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return `we need to continue the systematic solution process`;
    }

    explainStepBenefit(nextStep) {
        return `bringing us closer to finding all roots of the polynomial`;
    }

    findRelevantAnalogy(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes('all_polynomials') || 
                analogy.suitableFor.includes(this.polynomialTypes[problem.type]?.category)) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like solving a puzzle - each step gets us closer to the answer!";
    }

    convertToSimpleLanguage(description) {
        if (!description) return '';
        
        const simplifications = {
            'biquadratic': 'special quartic with only even powers',
            'substitution': 'replacing with a simpler variable',
            'coefficient': 'the number in front',
            'discriminant': 'the part under the square root',
            'rational root': 'a fraction that might be a solution',
            'synthetic division': 'quick division method',
            'depressed cubic': 'cubic missing the x² term',
            'quartic': 'fourth-degree polynomial',
            'cubic': 'third-degree polynomial'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    adaptLanguageLevel(text, level) {
        if (!text) return '';
        // Similar implementation to linear workbook
        return text;
    }

    // GRAPH GENERATION

    generateCubicQuarticGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.polynomialTypes[type]?.category;

        if (category?.includes('cubic')) {
            this.graphData = this.generateCubicGraph(this.currentProblem, this.currentSolution);
        } else if (category?.includes('quartic')) {
            this.graphData = this.generateQuarticGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateCubicGraph(problem, solution) {
        return {
            type: 'cubic',
            shape: 'S-curve or inverted S-curve',
            guaranteedRealRoots: 'At least 1',
            possibleRealRoots: '1 or 3',
            turningPoints: '0, 1, or 2',
            inflectionPoint: 'Always has exactly 1',
            endBehavior: 'Opposite directions (one up, one down)',
            visualization: 'Sketch showing characteristic cubic curve'
        };
    }

    generateQuarticGraph(problem, solution) {
        return {
            type: 'quartic',
            shape: 'W-shape, M-shape, or variations',
            possibleRealRoots: '0, 2, or 4',
            turningPoints: '1, 2, or 3',
            endBehavior: 'Same direction (both up or both down)',
            symmetry: solution.type === 'Biquadratic Equation' ? 'Even function (symmetric about y-axis)' : 'May not be symmetric',
            visualization: 'Sketch showing characteristic quartic curve'
        };
    }

    // WORKBOOK GENERATION

    generateCubicQuarticWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createCubicQuarticLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createGraphicalAnalysisSection(),
            this.createRealWorldApplicationSection(),
            this.createHistoricalContextSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Polynomial Cubic and Quartic Equations Mathematical Workbook',
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
            ['Problem Type', this.polynomialTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.polynomialTypes[this.currentProblem.type]?.category || 'polynomial'],
            ['Degree', this.currentSolution?.degree || 'N/A'],
            ['Equation', this.currentSolution?.equation || this.currentProblem.cleanInput],
            ['Description', this.currentProblem.scenario || this.polynomialTypes[this.currentProblem.type]?.description]
        ];

        // Add coefficients if available
        if (this.currentProblem.parameters.a !== undefined) {
            problemData.push(['', '']);
            problemData.push(['Coefficients', '']);
            
            const params = this.currentProblem.parameters;
            if (params.a !== undefined) problemData.push(['a (leading coefficient)', params.a]);
            if (params.b !== undefined) problemData.push(['b', params.b]);
            if (params.c !== undefined) problemData.push(['c', params.c]);
            if (params.d !== undefined) problemData.push(['d', params.d]);
            if (params.e !== undefined) problemData.push(['e (constant)', params.e]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.polynomialTypes[this.currentProblem.type]?.category;
        const prereqs = this.prerequisites[category];

        if (!prereqs) return null;

        const prereqData = [
            ['Required Skills', prereqs.skills.join(', ')],
            ['Prior Knowledge', prereqs.priorKnowledge.join(', ')],
            ['', ''],
            ['Prerequisite Check Questions', '']
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
                stepsData.push(['Connection', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.substitution || step.operation) {
                    stepsData.push(['Action', step.substitution || step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
            } else if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Algebraic Rule', step.algebraicRule]);
            }

            if (step.criticalNote) {
                stepsData.push(['⚠️ Critical Note', step.criticalNote]);
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

            // Historical note
            if (step.historicalNote && this.includeHistoricalContext) {
                stepsData.push(['Historical Note', step.historicalNote.note]);
            }

            stepsData.push(['', '']);
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createCubicQuarticLessonSection() {
        const { type } = this.currentProblem;
        const category = this.polynomialTypes[type]?.category;

        const lessonKey = category?.includes('cubic') ? 'cubic_equations' : 'quartic_equations';
        const lesson = this.lessons[lessonKey];

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

        if (lesson.solvingMethods) {
            lessonData.push(['', '']);
            lessonData.push(['Solution Methods', '']);
            lesson.solvingMethods.forEach(method => {
                lessonData.push(['•', method]);
            });
        }

        if (lesson.graphicalProperties) {
            lessonData.push(['', '']);
            lessonData.push(['Graphical Properties', '']);
            for (const [prop, value] of Object.entries(lesson.graphicalProperties)) {
                lessonData.push([prop, value]);
            }
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
            ['Solution Type', this.currentSolution.type],
            ['Method Used', this.currentSolution.approach || 'Systematic polynomial solution'],
            ['', '']
        ];

        if (this.currentSolution.roots) {
            solutionData.push(['Roots Found', this.currentSolution.roots.join(', ')]);
        } else if (this.currentSolution.note) {
            solutionData.push(['Note', this.currentSolution.note]);
        }

        if (this.currentSolution.solutionType) {
            solutionData.push(['Solution Type', this.currentSolution.solutionType]);
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
            ['Problem Type', this.currentSolution.type],
            ['Category', this.currentSolution.category],
            ['Degree', this.currentSolution.degree || 'N/A'],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel]
        ];

        if (this.currentSolution.possibleRealRoots) {
            analysisData.push(['Possible Real Roots', this.currentSolution.possibleRealRoots]);
        }

        if (this.currentSolution.fundamentalTheorem) {
            analysisData.push(['Fundamental Theorem', this.currentSolution.fundamentalTheorem]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        // Placeholder - would implement root verification
        return {
            title: 'Solution Verification',
            type: 'verification',
            data: [
                ['Verification', 'Roots should be verified by substitution into original equation']
            ]
        };
    }

    createGraphicalAnalysisSection() {
        if (!this.graphData) return null;

        const graphData = [
            ['Graph Type', this.graphData.type],
            ['Shape', this.graphData.shape],
            ['', '']
        ];

        if (this.graphData.possibleRealRoots) {
            graphData.push(['Possible Real Roots', this.graphData.possibleRealRoots]);
        }

        if (this.graphData.guaranteedRealRoots) {
            graphData.push(['Guaranteed Real Roots', this.graphData.guaranteedRealRoots]);
        }

        graphData.push(['Turning Points', this.graphData.turningPoints]);
        graphData.push(['End Behavior', this.graphData.endBehavior]);

        if (this.graphData.inflectionPoint) {
            graphData.push(['Inflection Point', this.graphData.inflectionPoint]);
        }

        if (this.graphData.symmetry) {
            graphData.push(['Symmetry', this.graphData.symmetry]);
        }

        return {
            title: 'Graphical Analysis',
            type: 'graphical',
            data: graphData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const category = this.polynomialTypes[this.currentProblem.type]?.category;
        const applications = Object.values(this.realWorldProblems).filter(app => {
            return app.equation?.includes(category?.includes('cubic') ? 'cubic' : 'quartic') || true;
        }).slice(0, 3);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Context', app.context]);
            appData.push(['Domain', app.realWorldDomain]);
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

    createHistoricalContextSection() {
        if (!this.includeHistoricalContext) return null;

        const category = this.polynomialTypes[this.currentProblem.type]?.category;
        const historyKey = category?.includes('cubic') ? 'cubic_equation_history' : 'quartic_equation_history';
        const history = this.historicalContext[historyKey];

        if (!history) return null;

        const histData = [
            ['Historical Context', history.title],
            ['Period', history.period],
            ['', '']
        ];

        if (history.keyFigures) {
            histData.push(['Key Figures', '']);
            for (const [name, contribution] of Object.entries(history.keyFigures)) {
                histData.push([name, contribution]);
            }
            histData.push(['', '']);
        }

        if (history.significance) {
            histData.push(['Significance', '']);
            history.significance.forEach(item => {
                histData.push(['•', item]);
            });
        }

        if (history.dramaticElements) {
            histData.push(['', '']);
            histData.push(['Dramatic Elements', '']);
            history.dramaticElements.forEach(item => {
                histData.push(['•', item]);
            });
        }

        return {
            title: 'Historical Context',
            type: 'historical',
            data: histData
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generateCubicQuarticPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateCubicQuarticAlternativeMethods(this.currentProblem.type);

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
        const category = this.polynomialTypes[this.currentProblem.type]?.category;
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

    generateCubicQuarticPedagogicalNotes(problemType) {
        const category = this.polynomialTypes[problemType]?.category;

        const pedagogicalDatabase = {
            cubic: {
                objectives: [
                    'Understand that cubic equations always have at least one real root',
                    'Apply multiple solution methods appropriately',
                    'Use Rational Root Theorem systematically',
                    'Reduce cubic to quadratic after finding one root'
                ],
                keyConcepts: [
                    'Fundamental Theorem of Algebra for cubics',
                    'Relationship between factors and roots',
                    'Sum and difference of cubes formulas',
                    'Synthetic division as both test and reduction tool'
                ],
                prerequisites: [
                    'Quadratic equation solving',
                    'Polynomial operations',
                    'Factoring techniques',
                    'Understanding of degree and roots'
                ],
                commonDifficulties: [
                    'Forgetting to check all rational root candidates',
                    'Errors in synthetic division arithmetic',
                    'Not recognizing sum/difference of cubes',
                    'Confusion about number of real vs complex roots'
                ],
                teachingStrategies: [
                    'Emphasize systematic approach to Rational Root Theorem',
                    'Practice synthetic division extensively',
                    'Use graphing to visualize root behavior',
                    'Connect to Fundamental Theorem of Algebra'
                ],
                extensions: [
                    'Cardano formula for depressed cubics',
                    'Numerical methods (Newton-Raphson)',
                    'Applications in volume optimization',
                    'Vieta\'s formulas for root relationships'
                ],
                assessment: [
                    'Can student list all rational root candidates?',
                    'Does student perform synthetic division correctly?',
                    'Can student reduce to quadratic and finish?',
                    'Does student verify all roots?'
                ]
            },
            quartic: {
                objectives: [
                    'Recognize special quartic forms (especially biquadratic)',
                    'Apply appropriate solution strategy',
                    'Understand complex roots come in conjugate pairs',
                    'Use multiple methods flexibly'
                ],
                keyConcepts: [
                    'Biquadratic substitution technique',
                    'Quartics can have 0, 2, or 4 real roots',
                    'Complex roots appear in conjugate pairs',
                    'End behavior: both ends go same direction'
                ],
                prerequisites: [
                    'All cubic prerequisites',
                    'Quadratic formula mastery',
                    'Substitution method',
                    'Complex number basics'
                ],
                commonDifficulties: [
                    'Forgetting ± in biquadratic back-substitution',
                    'Not checking for negative u values',
                    'Confusion about number of possible real roots',
                    'Missing the biquadratic pattern'
                ],
                teachingStrategies: [
                    'Emphasize checking for biquadratic first',
                    'Practice ± notation extensively',
                    'Use symmetry to understand even functions',
                    'Graph to visualize possible root counts'
                ],
                extensions: [
                    'Ferrari\'s method for general quartics',
                    'Applications in engineering (beam deflection)',
                    'Perfect square quartics',
                    'Numerical methods for difficult cases'
                ],
                assessment: [
                    'Can student recognize biquadratic form?',
                    'Does student use ± correctly?',
                    'Can student identify all real roots?',
                    'Does student understand complex pairs?'
                ]
            },
            biquadratic: {
                objectives: [
                    'Master u = x² substitution technique',
                    'Understand the two-stage solution process',
                    'Apply ± correctly when back-substituting',
                    'Recognize symmetry in solutions'
                ],
                keyConcepts: [
                    'Substitution transforms quartic to quadratic',
                    'Each positive u yields two x values',
                    'Negative u values have no real solutions',
                    'Graph is symmetric about y-axis'
                ],
                prerequisites: [
                    'Quadratic formula',
                    'Square root operation',
                    'Understanding of even functions',
                    'Variable substitution'
                ],
                commonDifficulties: [
                    'CRITICAL: Forgetting the ± sign',
                    'Not checking sign of u values',
                    'Confusion between u and x',
                    'Arithmetic errors in quadratic solution'
                ],
                teachingStrategies: [
                    'Color-code u vs x throughout solution',
                    'Practice "each u gives TWO x values" mantra',
                    'Use number line to show ± solutions',
                    'Connect to graph symmetry'
                ],
                extensions: [
                    'General quartics that aren\'t biquadratic',
                    'Applications with symmetry',
                    'Optimization problems',
                    'Connection to even functions'
                ],
                assessment: [
                    'Does student substitute correctly?',
                    'Are both ± values included?',
                    'Does student reject negative u?',
                    'Can student verify all four roots?'
                ]
            }
        };

        const mainCategory = category?.includes('biquadratic') ? 'biquadratic' : 
                            (category?.includes('quartic') ? 'quartic' : 'cubic');

        return pedagogicalDatabase[mainCategory] || {
            objectives: ['Solve polynomial equations'],
            keyConcepts: ['Polynomial roots and factors'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Systematic instruction'],
            extensions: ['More complex cases'],
            assessment: ['Verify understanding']
        };
    }

    generateCubicQuarticAlternativeMethods(problemType) {
        const category = this.polynomialTypes[problemType]?.category;

        const alternativeDatabase = {
            cubic: {
                primaryMethod: 'Rational Root Theorem + Synthetic Division',
                methods: [
                    {
                        name: 'Cardano\'s Formula',
                        description: 'Algebraic formula for depressed cubics (requires converting to t³ + pt + q = 0 form)'
                    },
                    {
                        name: 'Newton-Raphson Method',
                        description: 'Numerical iteration: xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ), good for any cubic'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Graph the function and estimate roots visually, then refine numerically'
                    },
                    {
                        name: 'Factor by Grouping',
                        description: 'For special cases with 4 terms, group strategically'
                    }
                ],
                comparison: 'Rational Root Theorem is most practical for integer-coefficient cubics; Cardano is theoretical; Newton-Raphson works universally but gives approximations; graphing provides intuition'
            },
            quartic: {
                primaryMethod: 'Check for biquadratic, then rational roots if needed',
                methods: [
                    {
                        name: 'Ferrari\'s Method',
                        description: 'Reduces quartic to resolvent cubic, then to two quadratics (complex but complete)'
                    },
                    {
                        name: 'Factoring',
                        description: 'If quartic factors nicely, solve each factor separately'
                    },
                    {
                        name: 'Numerical Methods',
                        description: 'Newton-Raphson or other iterative methods for difficult cases'
                    },
                    {
                        name: 'Graphical + Numerical',
                        description: 'Graph to find approximate roots, then refine numerically'
                    }
                ],
                comparison: 'Biquadratic substitution is easiest when applicable; factoring requires recognizing patterns; Ferrari is comprehensive but complex; numerical methods work for any case'
            },
            biquadratic: {
                primaryMethod: 'u = x² substitution',
                methods: [
                    {
                        name: 'Factoring Directly',
                        description: 'If coefficients allow, factor as difference of squares or other pattern'
                    },
                    {
                        name: 'Completing the Square',
                        description: 'Treat as (x²)² + b(x²) + c and complete the square in x²'
                    },
                    {
                        name: 'Graphical Symmetry',
                        description: 'Use symmetry to find roots: if r is a root, so is -r'
                    }
                ],
                comparison: 'Substitution is most systematic; direct factoring is fastest when possible; completing square gives insight into structure; symmetry is useful for checking'
            }
        };

        const mainCategory = category?.includes('biquadratic') ? 'biquadratic' : 
                            (category?.includes('quartic') ? 'quartic' : 'cubic');

        return alternativeDatabase[mainCategory] || {
            primaryMethod: 'Standard polynomial solution approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods applicable based on problem structure'
            }],
            comparison: 'Choose method based on problem characteristics'
        };
    }
}

// Export the class
export default EnhancedCubicQuarticMathematicalWorkbook;
