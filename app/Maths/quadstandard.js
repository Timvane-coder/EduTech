// Enhanced Standard Quadratic Mathematical Workbook - Comprehensive Implementation
import * as math from 'mathjs';

export class EnhancedStandardQuadraticMathematicalWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2200;
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
        this.initializeQuadraticSolvers();
        this.initializeQuadraticLessons();
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
            'perpendicular': '⊥', 'parallel': '∥'
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

    initializeQuadraticLessons() {
        this.lessons = {
            standard_form: {
                title: "Standard Form Quadratic Equations",
                concepts: [
                    "General form: ax² + bx + c = 0 where a ≠ 0",
                    "Second-degree polynomial equation",
                    "Parabolic graph (U-shaped curve)",
                    "Can have 0, 1, or 2 real solutions",
                    "Solutions called roots or zeros"
                ],
                theory: "Quadratic equations model many natural phenomena including projectile motion, area optimization, and profit maximization. The coefficient 'a' determines whether the parabola opens upward (a > 0) or downward (a < 0). The discriminant (b² - 4ac) determines the number and type of solutions.",
                keyFormulas: {
                    "Standard Form": "ax² + bx + c = 0",
                    "Quadratic Formula": "x = (-b ± √(b² - 4ac)) / (2a)",
                    "Discriminant": "Δ = b² - 4ac",
                    "Vertex Form": "y = a(x - h)² + k",
                    "Factored Form": "y = a(x - r₁)(x - r₂)",
                    "Sum of Roots": "x₁ + x₂ = -b/a",
                    "Product of Roots": "x₁ × x₂ = c/a"
                },
                solvingMethods: [
                    "Quadratic Formula (works for all quadratics)",
                    "Factoring (when equation factors nicely)",
                    "Completing the Square (algebraic method)",
                    "Graphing (visual approximation)",
                    "Square Root Method (for perfect squares)"
                ],
                applications: [
                    "Projectile motion (physics)",
                    "Area and perimeter optimization",
                    "Profit and cost analysis (business)",
                    "Engineering design",
                    "Computer graphics (parabolic curves)"
                ]
            },

            quadratic_formula: {
                title: "The Quadratic Formula",
                concepts: [
                    "Universal solution method for all quadratics",
                    "Derived from completing the square",
                    "Formula: x = (-b ± √(b² - 4ac)) / (2a)",
                    "The ± symbol means two solutions",
                    "Works even when factoring is difficult"
                ],
                theory: "The quadratic formula is derived by completing the square on the general form ax² + bx + c = 0. It provides an exact algebraic solution for any quadratic equation. The discriminant (b² - 4ac) under the square root determines solution characteristics.",
                keyFormulas: {
                    "Quadratic Formula": "x = (-b ± √(b² - 4ac)) / (2a)",
                    "Discriminant": "Δ = b² - 4ac",
                    "Two Real Solutions": "Δ > 0",
                    "One Real Solution": "Δ = 0",
                    "Two Complex Solutions": "Δ < 0"
                },
                solvingSteps: [
                    "Identify coefficients a, b, and c",
                    "Calculate the discriminant Δ = b² - 4ac",
                    "Determine number and type of solutions",
                    "Substitute into formula: x = (-b ± √Δ) / (2a)",
                    "Simplify under the radical",
                    "Simplify the entire expression",
                    "Write both solutions (if two exist)"
                ],
                applications: [
                    "When factoring is not obvious",
                    "Decimal or fractional coefficients",
                    "Irrational solutions",
                    "Theoretical derivations"
                ]
            },

            discriminant: {
                title: "The Discriminant",
                concepts: [
                    "Discriminant: Δ = b² - 4ac",
                    "Determines number and type of solutions",
                    "Located under the square root in quadratic formula",
                    "Δ > 0: Two distinct real solutions",
                    "Δ = 0: One repeated real solution (double root)",
                    "Δ < 0: Two complex conjugate solutions"
                ],
                theory: "The discriminant provides crucial information about quadratic solutions without solving the equation. It relates to the parabola's intersection with the x-axis: two intersections (Δ > 0), one tangent point (Δ = 0), or no intersection (Δ < 0).",
                keyFormulas: {
                    "Discriminant": "Δ = b² - 4ac",
                    "Perfect Square Discriminant": "Δ is a perfect square → rational solutions",
                    "Non-Perfect Square": "Δ > 0 but not perfect square → irrational solutions"
                },
                interpretations: {
                    "Δ > 0": "Two distinct real roots; parabola crosses x-axis twice",
                    "Δ = 0": "One repeated real root; parabola touches x-axis at vertex",
                    "Δ < 0": "Two complex conjugate roots; parabola doesn't cross x-axis",
                    "Δ is perfect square": "Rational roots; equation can be factored over integers"
                },
                applications: [
                    "Determining solvability before solving",
                    "Analyzing number of solutions",
                    "Checking if equation can be factored",
                    "Graph analysis"
                ]
            },

            factoring_method: {
                title: "Solving by Factoring",
                concepts: [
                    "Express quadratic as product of two binomials",
                    "Use Zero Product Property: if ab = 0, then a = 0 or b = 0",
                    "Only works when equation factors nicely",
                    "Most efficient when it works",
                    "Requires integer or simple rational roots"
                ],
                theory: "Factoring exploits the Zero Product Property. If we can write ax² + bx + c as (mx + p)(nx + q) = 0, then either (mx + p) = 0 or (nx + q) = 0, giving us two solutions.",
                keyFormulas: {
                    "Zero Product Property": "If (x - r₁)(x - r₂) = 0, then x = r₁ or x = r₂",
                    "Sum of Roots": "r₁ + r₂ = -b/a",
                    "Product of Roots": "r₁ × r₂ = c/a",
                    "Common Patterns": "x² - a² = (x - a)(x + a) [difference of squares]"
                },
                factoringPatterns: {
                    "Simple Trinomial": "x² + bx + c = (x + m)(x + n) where m + n = b, mn = c",
                    "Leading Coefficient ≠ 1": "ax² + bx + c: use AC method or trial and error",
                    "Difference of Squares": "x² - a² = (x - a)(x + a)",
                    "Perfect Square Trinomial": "x² ± 2ax + a² = (x ± a)²",
                    "Common Factor": "Factor out GCF first"
                },
                solvingSteps: [
                    "Write equation in standard form (= 0)",
                    "Factor out any common factors",
                    "Identify factoring pattern",
                    "Factor the quadratic expression",
                    "Apply Zero Product Property",
                    "Solve each factor for x",
                    "Check solutions in original equation"
                ],
                applications: [
                    "When coefficients are small integers",
                    "Perfect square trinomials",
                    "Difference of squares",
                    "When factoring is obvious"
                ]
            },

            completing_square: {
                title: "Completing the Square",
                concepts: [
                    "Algebraic method to create perfect square trinomial",
                    "Basis for deriving quadratic formula",
                    "Always works for any quadratic",
                    "Useful for converting to vertex form",
                    "Key technique in algebra"
                ],
                theory: "Completing the square transforms ax² + bx + c = 0 into a(x - h)² = k form. We add and subtract (b/2a)² to create a perfect square trinomial, which can then be solved using square roots.",
                keyFormulas: {
                    "Perfect Square Pattern": "(x + p)² = x² + 2px + p²",
                    "Completing Value": "Add (b/2)² to complete x² + bx",
                    "Vertex Form": "a(x - h)² + k where h = -b/(2a), k = c - b²/(4a)"
                },
                solvingSteps: [
                    "Divide by 'a' if a ≠ 1 (make leading coefficient 1)",
                    "Move constant term to right side",
                    "Take half of b coefficient: b/2",
                    "Square it: (b/2)²",
                    "Add (b/2)² to both sides",
                    "Factor left side as perfect square",
                    "Take square root of both sides (±)",
                    "Solve for x"
                ],
                applications: [
                    "Deriving quadratic formula",
                    "Converting to vertex form",
                    "Finding vertex of parabola",
                    "Circle equations",
                    "Conic sections"
                ]
            },

            square_root_method: {
                title: "Square Root Method",
                concepts: [
                    "For equations of form (x - p)² = q",
                    "Take square root of both sides",
                    "Remember ± symbol",
                    "Fastest method when applicable",
                    "No middle term (bx) in original equation"
                ],
                theory: "When a quadratic has no linear term (bx), or is already in perfect square form, we can solve directly by taking square roots. This is actually a special case of completing the square.",
                keyFormulas: {
                    "Basic Form": "x² = k → x = ±√k",
                    "Shifted Form": "(x - h)² = k → x = h ± √k",
                    "Scaled Form": "a(x - h)² = k → x = h ± √(k/a)"
                },
                solvingSteps: [
                    "Isolate the squared term",
                    "If scaled, divide by coefficient",
                    "Take square root of both sides",
                    "Apply ± symbol",
                    "Solve for x (two solutions)",
                    "Simplify radicals if needed"
                ],
                applications: [
                    "Pure quadratics (ax² + c = 0)",
                    "Perfect square trinomials",
                    "Vertex form equations",
                    "Pythagorean theorem problems"
                ]
            },

            graphing_method: {
                title: "Graphing Method",
                concepts: [
                    "Graph the parabola y = ax² + bx + c",
                    "Solutions are x-intercepts (zeros)",
                    "Visual representation of solutions",
                    "Approximate solutions possible",
                    "Shows number of real solutions clearly"
                ],
                theory: "The solutions to ax² + bx + c = 0 are the x-values where the parabola y = ax² + bx + c crosses the x-axis. Graphing provides visual insight into solution count and approximate values.",
                keyFormulas: {
                    "Vertex": "h = -b/(2a), k = f(h)",
                    "Axis of Symmetry": "x = -b/(2a)",
                    "y-intercept": "c",
                    "x-intercepts": "Solutions to ax² + bx + c = 0"
                },
                graphFeatures: {
                    "Vertex": "Highest or lowest point of parabola",
                    "Axis of Symmetry": "Vertical line through vertex",
                    "Direction": "Opens up (a > 0) or down (a < 0)",
                    "Width": "Larger |a| → narrower parabola",
                    "x-intercepts": "The solutions/roots/zeros"
                },
                applications: [
                    "Visual understanding of solutions",
                    "Estimating irrational solutions",
                    "Analyzing quadratic functions",
                    "Real-world modeling"
                ]
            },

            word_problems: {
                title: "Quadratic Word Problems",
                concepts: [
                    "Translate real situations into quadratic equations",
                    "Common scenarios: area, projectile motion, consecutive integers",
                    "Often need to interpret solutions contextually",
                    "May need to reject negative or unrealistic solutions",
                    "Set up equation from problem conditions"
                ],
                theory: "Many real-world situations are modeled by quadratic relationships. The key is translating verbal descriptions into algebraic equations, solving, and interpreting results in context.",
                problemTypes: {
                    "Area Problems": "Rectangle, triangle, or other shapes with quadratic area formulas",
                    "Projectile Motion": "Height as function of time: h(t) = -½gt² + v₀t + h₀",
                    "Number Problems": "Consecutive integers, number relationships",
                    "Optimization": "Maximum/minimum area, profit, etc.",
                    "Pythagorean": "Right triangle problems",
                    "Work/Rate": "Combined work rates"
                },
                solutionStrategy: [
                    "Read problem carefully, identify unknown",
                    "Define variable clearly",
                    "Write equation from problem conditions",
                    "Solve using appropriate method",
                    "Check solutions in context",
                    "Reject unrealistic solutions",
                    "Answer with appropriate units"
                ],
                commonPhrases: {
                    "area": "length × width or ½base × height",
                    "consecutive": "n, n+1, n+2",
                    "consecutive even/odd": "n, n+2, n+4",
                    "height above ground": "h(t) = -16t² + v₀t + h₀ (feet)",
                    "product": "multiplication",
                    "sum of squares": "a² + b²"
                }
            },

            vertex_form: {
                title: "Vertex Form of Quadratics",
                concepts: [
                    "Form: y = a(x - h)² + k",
                    "Vertex at point (h, k)",
                    "Easier to identify vertex and transformations",
                    "Convert from standard form by completing square",
                    "Useful for graphing"
                ],
                theory: "Vertex form explicitly shows the vertex coordinates and makes graphing transformations clear. It's obtained from standard form through completing the square.",
                keyFormulas: {
                    "Vertex Form": "y = a(x - h)² + k",
                    "Vertex": "(h, k)",
                    "Axis of Symmetry": "x = h",
                    "From Standard Form": "h = -b/(2a), k = c - b²/(4a)"
                },
                transformations: {
                    "Horizontal Shift": "h units (right if h > 0, left if h < 0)",
                    "Vertical Shift": "k units (up if k > 0, down if k < 0)",
                    "Vertical Stretch/Compression": "|a| > 1 stretch, |a| < 1 compression",
                    "Reflection": "a < 0 reflects over x-axis"
                },
                applications: [
                    "Quick graphing",
                    "Finding maximum/minimum values",
                    "Optimization problems",
                    "Analyzing transformations"
                ]
            },

            special_cases: {
                title: "Special Quadratic Cases",
                concepts: [
                    "Perfect square trinomials",
                    "Difference of squares",
                    "Pure quadratics (no bx term)",
                    "Double roots",
                    "Complex/imaginary roots"
                ],
                theory: "Certain quadratic forms have special properties and can be solved more efficiently with recognition of patterns.",
                specialForms: {
                    "Perfect Square": "x² ± 2ax + a² = (x ± a)²",
                    "Difference of Squares": "x² - a² = (x - a)(x + a)",
                    "Pure Quadratic": "ax² + c = 0 → x² = -c/a",
                    "Double Root": "Discriminant = 0, (x - r)²",
                    "Sum of Squares": "x² + a² = 0 → complex solutions"
                },
                recognitionTips: [
                    "Perfect square: b² = 4ac",
                    "Difference of squares: b = 0, c < 0",
                    "Pure quadratic: b = 0",
                    "Double root: b² - 4ac = 0"
                ]
            },

            rational_roots: {
                title: "Rational Root Theorem",
                concepts: [
                    "Possible rational roots: p/q where p divides c, q divides a",
                    "Helps narrow down factoring possibilities",
                    "Not all quadratics have rational roots",
                    "Combined with synthetic division or testing"
                ],
                theory: "The Rational Root Theorem limits possible rational solutions, making factoring more systematic when applicable.",
                keyFormulas: {
                    "Possible Roots": "±(factors of c)/(factors of a)",
                    "Testing": "Substitute into equation to verify"
                },
                applications: [
                    "Systematically finding integer/rational roots",
                    "Checking factorable quadratics",
                    "Polynomial analysis"
                ]
            }
        };
    }

    initializeQuadraticSolvers() {
        this.quadraticTypes = {
            standard_quadratic: {
                patterns: [
                    /([+-]?\d*\.?\d*)\s*x\^2\s*([+-]\s*\d*\.?\d*)\s*x\s*([+-]\s*\d*\.?\d*)\s*=\s*0/,
                    /([+-]?\d*\.?\d*)\s*x²\s*([+-]\s*\d*\.?\d*)\s*x\s*([+-]\s*\d*\.?\d*)\s*=\s*0/,
                    /quadratic/i,
                    /x\^2|x²/
                ],
                solver: this.solveStandardQuadratic.bind(this),
                name: 'Standard Form Quadratic Equation',
                category: 'standard_form',
                description: 'Solves ax² + bx + c = 0'
            },

            quadratic_formula: {
                patterns: [
                    /formula/i,
                    /discriminant/i
                ],
                solver: this.solveQuadraticFormula.bind(this),
                name: 'Quadratic Formula Method',
                category: 'quadratic_formula',
                description: 'Uses x = (-b ± √(b²-4ac))/(2a)'
            },

            factoring: {
                patterns: [
                    /factor/i,
                    /zero.*product/i
                ],
                solver: this.solveByFactoring.bind(this),
                name: 'Factoring Method',
                category: 'factoring',
                description: 'Factors and uses Zero Product Property'
            },

            completing_square: {
                patterns: [
                    /complet.*square/i,
                    /vertex.*form/i
                ],
                solver: this.solveByCompletingSquare.bind(this),
                name: 'Completing the Square',
                category: 'completing_square',
                description: 'Completes square to solve'
            },

            square_root: {
                patterns: [
                    /square.*root.*method/i,
                    /\(x.*\)\^2\s*=|perfect.*square/i
                ],
                solver: this.solveBySquareRoot.bind(this),
                name: 'Square Root Method',
                category: 'square_root',
                description: 'Takes square root of both sides'
            },

            pure_quadratic: {
                patterns: [
                    /x\^2.*=.*\d+/,
                    /no.*x.*term|pure.*quadratic/i
                ],
                solver: this.solvePureQuadratic.bind(this),
                name: 'Pure Quadratic',
                category: 'pure_quadratic',
                description: 'Solves ax² + c = 0'
            },

            word_problem_area: {
                patterns: [
                    /area/i,
                    /rectangle.*length.*width/i,
                    /perimeter/i
                ],
                solver: this.solveWordProblemArea.bind(this),
                name: 'Area Word Problems',
                category: 'word_problems',
                description: 'Area and perimeter problems'
            },

            word_problem_projectile: {
                patterns: [
                    /projectile/i,
                    /height.*time/i,
                    /thrown.*ball/i,
                    /gravity/i
                ],
                solver: this.solveWordProblemProjectile.bind(this),
                name: 'Projectile Motion Problems',
                category: 'word_problems',
                description: 'Height and motion problems'
            },

            word_problem_number: {
                patterns: [
                    /consecutive/i,
                    /number.*product.*sum/i,
                    /integer/i
                ],
                solver: this.solveWordProblemNumber.bind(this),
                name: 'Number Word Problems',
                category: 'word_problems',
                description: 'Number relationship problems'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            quadratic_formula: {
                'Calculate discriminant': [
                    'Forgetting to square b: writing b instead of b²',
                    'Sign error: b² - 4ac vs 4ac - b²',
                    'Incorrect order of operations in 4ac',
                    'Forgetting negative sign in -4ac'
                ],
                'Apply formula': [
                    'Forgetting the ± symbol (missing one solution)',
                    'Using wrong sign on b: writing b instead of -b',
                    'Incorrect denominator: using a instead of 2a',
                    'Not distributing division to both terms'
                ],
                'Simplify radicals': [
                    'Not simplifying √ when possible',
                    'Arithmetic errors under radical',
                    'Dividing only one term by 2a',
                    'Sign errors when simplifying'
                ]
            },
            factoring: {
                'Find factors': [
                    'Incorrect factor pairs of c',
                    'Wrong signs in factored form',
                    'Missing common factors',
                    'Confusing sum and product requirements'
                ],
                'Zero Product Property': [
                    'Not setting each factor to zero',
                    'Solving only one factor',
                    'Sign errors when solving factors',
                    'Forgetting to move terms before factoring'
                ]
            },
            completing_square: {
                'Take half of b': [
                    'Forgetting to divide b by 2',
                    'Not squaring (b/2)',
                    'Sign errors with negative b',
                    'Using wrong coefficient when a ≠ 1'
                ],
                'Add to both sides': [
                    'Adding to only one side',
                    'Not dividing by a first',
                    'Arithmetic errors in (b/2)²',
                    'Forgetting to add same value to right'
                ],
                'Take square root': [
                    'Forgetting ± symbol',
                    'Sign errors after taking root',
                    'Not isolating x completely',
                    'Arithmetic errors in final step'
                ]
            },
            square_root: {
                'Isolate squared term': [
                    'Not isolating completely',
                    'Division errors',
                    'Sign errors when moving terms',
                    'Not simplifying before taking root'
                ],
                'Apply ± symbol': [
                    'Forgetting ± (losing one solution)',
                    'Applying ± incorrectly',
                    'Sign confusion in final answer',
                    'Not simplifying radicals'
                ]
            },
            discriminant: {
                'Calculate Δ': [
                    'b² - 4ac calculation errors',
                    'Sign errors',
                    'Order of operations mistakes',
                    'Not squaring b'
                ],
                'Interpret Δ': [
                    'Misinterpreting Δ = 0 vs Δ > 0',
                    'Confusing real and complex solutions',
                    'Not recognizing perfect squares',
                    'Wrong solution count prediction'
                ]
            }
        };

        this.errorPrevention = {
            formula_organization: {
                reminder: 'Write out a, b, c explicitly before substituting',
                method: 'Create a reference table for coefficients'
            },
            discriminant_first: {
                reminder: 'Calculate discriminant before full formula',
                method: 'Check discriminant to know what to expect'
            },
            plus_minus: {
                reminder: 'The ± means TWO solutions (write both)',
                method: 'Always write x₁ = ... and x₂ = ... separately'
            },
            sign_tracking: {
                reminder: 'Track negative signs carefully, especially -b',
                method: 'Use parentheses around negative values'
            },
            simplify_radicals: {
                reminder: 'Factor radicand to simplify √',
                method: 'Look for perfect square factors'
            },
            verify_solutions: {
                reminder: 'Substitute both solutions back into original equation',
                method: 'Check that both sides equal when x is substituted'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this method works and mathematical meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact sequence of steps to perform',
                language: 'step-by-step algorithmic instructions'
            },
            visual: {
                focus: 'Graphical interpretation and parabola behavior',
                language: 'visual and spatial descriptions'
            },
            algebraic: {
                focus: 'Formal algebraic properties and theorems',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple everyday language',
                detail: 'essential steps only',
                examples: 'concrete numbers and simple cases'
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
            projectile_motion: {
                scenario: "Object thrown or dropped under gravity",
                equation: "h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters)",
                examples: [
                    "Ball thrown upward at 64 ft/s from 6 ft height: when does it hit ground?",
                    "Rocket launched at 100 m/s: what's maximum height?",
                    "Stone dropped from 100m cliff: when does it land?"
                ],
                context: "Projectile motion is governed by gravity (constant downward acceleration). The quadratic model predicts height at any time."
            },
            area_optimization: {
                scenario: "Maximizing area with constraint on perimeter or material",
                equation: "Area = length × width, with constraint creating quadratic",
                examples: [
                    "Farmer has 100 ft fence, wants rectangular garden. What dimensions maximize area?",
                    "Rectangle perimeter 60 cm, area 200 cm². Find dimensions.",
                    "Window with semicircular top, perimeter 12 ft. Maximize area."
                ],
                context: "Optimization problems often lead to quadratics when maximizing/minimizing areas, volumes, or profits."
            },
            profit_revenue: {
                scenario: "Business profit as function of price or quantity",
                equation: "Profit = Revenue - Cost, often quadratic in price",
                examples: [
                    "Profit P(x) = -2x² + 40x - 150 where x is price. When is profit $50?",
                    "Company sells x items: revenue R(x) = -x² + 100x. How many for $2400 revenue?",
                    "Maximum profit when P(x) = -5x² + 200x - 1500?"
                ],
                context: "In economics, revenue and profit functions are often quadratic due to market dynamics and diminishing returns."
            },
            pythagorean_problems: {
                scenario: "Right triangle problems using Pythagorean theorem",
                equation: "a² + b² = c²",
                examples: [
                    "Ladder 13 ft long leans against wall. Base is 5 ft from wall. How high does it reach?",
                    "Right triangle legs differ by 7, hypotenuse is 13. Find leg lengths.",
                    "Rectangle diagonal is 10, length is 2 more than width. Find dimensions."
                ],
                context: "Pythagorean theorem creates quadratics when dimensions are related algebraically."
            },
            consecutive_numbers: {
                scenario: "Finding consecutive integers with given product or sum of squares",
                equation: "n, n+1, n+2 with quadratic relationship",
                examples: [
                    "Two consecutive integers multiply to 132. Find them.",
                    "Three consecutive integers, sum of first and third equals 34. Find them.",
                    "Sum of squares of two consecutive integers is 85. Find them."
                ],
                context: "Number problems often create quadratics when dealing with products or powers."
            },
            braking_distance: {
                scenario: "Vehicle braking distance based on speed",
                equation: "d = av² + bv (quadratic in velocity)",
                examples: [
                    "Braking distance d = 0.05v² + 2v feet at v mph. At what speed is d = 150 ft?",
                    "Car needs 180 ft to stop. d = 0.06v² + v. What was speed?"
                ],
                context: "Braking distance increases quadratically with speed due to kinetic energy."
            },
            compound_interest: {
                scenario: "Investment growth with interest",
                equation: "A = P(1 + r)ⁿ can create quadratics for n = 2",
                examples: [
                    "Invest $1000 at rate r, after 2 years have $1210. Find r.",
                    "Population grows: P(t) = 100(1.05)ᵗ. When does it reach 121?"
                ],
                context: "Compound growth over fixed time periods creates quadratic equations."
            },
            bridge_arch: {
                scenario: "Parabolic bridge or arch shape",
                equation: "Height as quadratic function of distance",
                examples: [
                    "Bridge arch: h(x) = -0.05x² + 2x. How wide is arch at ground level?",
                    "Parabolic arch 40 ft wide, 16 ft high at center. Find equation."
                ],
                context: "Many architectural structures use parabolic shapes for strength and aesthetics."
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            standard_quadratic: {
                skills: [
                    'Solving linear equations',
                    'Order of operations',
                    'Working with exponents',
                    'Square roots',
                    'Signed number arithmetic'
                ],
                priorKnowledge: [
                    'What a quadratic equation is (degree 2)',
                    'Standard form ax² + bx + c = 0',
                    'Parabola as graph of quadratic'
                ],
                checkQuestions: [
                    "What is 5² ?",
                    "Solve: 3x - 7 = 11",
                    "What is √25 ?",
                    "Simplify: (-3)²",
                    "What does ax² + bx + c = 0 mean?"
                ]
            },
            quadratic_formula: {
                skills: [
                    'Arithmetic with fractions',
                    'Square roots and radicals',
                    'Order of operations',
                    'Negative numbers',
                    'Simplifying radicals'
                ],
                priorKnowledge: [
                    'Identify a, b, c in standard form',
                    'Discriminant concept',
                    'Meaning of ± symbol'
                ],
                checkQuestions: [
                    "In 2x² - 5x + 3 = 0, what are a, b, c?",
                    "What is √16 ?",
                    "Simplify: √50",
                    "Calculate: (-5)² - 4(2)(3)",
                    "What does ± mean?"
                ]
            },
            factoring: {
                skills: [
                    'Factoring techniques',
                    'Zero Product Property',
                    'Finding factor pairs',
                    'Expanding binomials',
                    'Solving linear equations'
                ],
                priorKnowledge: [
                    'How to factor expressions',
                    'If ab = 0, then a = 0 or b = 0',
                    'FOIL method'
                ],
                checkQuestions: [
                    "Factor: x² + 7x + 12",
                    "If (x - 3)(x + 5) = 0, what is x?",
                    "Expand: (x + 4)(x - 2)",
                    "Find two numbers that multiply to 12 and add to 7"
                ]
            },
            completing_square: {
                skills: [
                    'Perfect square trinomials',
                    'Adding fractions',
                    'Square roots',
                    'Algebraic manipulation',
                    'Working with (x + p)² pattern'
                ],
                priorKnowledge: [
                    'Pattern: (x + p)² = x² + 2px + p²',
                    'How to take square root of both sides',
                    'Vertex form of parabola'
                ],
                checkQuestions: [
                    "Expand: (x + 5)²",
                    "What must be added to x² + 6x to make perfect square?",
                    "If (x - 3)² = 16, what is x?",
                    "Simplify: (8/2)²"
                ]
            },
            square_root: {
                skills: [
                    'Square roots',
                    'Isolating terms',
                    'Understanding ± symbol',
                    'Simplifying radicals'
                ],
                priorKnowledge: [
                    'Taking square root undoes squaring',
                    'Both positive and negative roots',
                    'When to use ±'
                ],
                checkQuestions: [
                    "If x² = 49, what is x?",
                    "Solve: (x - 2)² = 9",
                    "What is ±√36 ?",
                    "Simplify: √32"
                ]
            },
            discriminant: {
                skills: [
                    'Calculating b² - 4ac',
                    'Interpreting sign of discriminant',
                    'Perfect squares recognition'
                ],
                priorKnowledge: [
                    'Discriminant determines solution count',
                    'Positive Δ → 2 real solutions',
                    'Zero Δ → 1 real solution',
                    'Negative Δ → complex solutions'
                ],
                checkQuestions: [
                    "Calculate b² - 4ac when a=1, b=5, c=6",
                    "If Δ = 25, how many real solutions?",
                    "If Δ < 0, what type of solutions?",
                    "Is 48 a perfect square?"
                ]
            },
            word_problems: {
                skills: [
                    'Reading comprehension',
                    'Translating words to equations',
                    'Defining variables',
                    'Contextual interpretation'
                ],
                priorKnowledge: [
                    'Area formulas',
                    'Projectile motion formula',
                    'Setting up equations from descriptions'
                ],
                checkQuestions: [
                    "If length is x and width is x + 3, write area formula",
                    "What formula models height of falling object?",
                    "Write expression for two consecutive integers",
                    "If product of two numbers is 48, write equation"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            parabola_graph: {
                description: "Visual representation as U-shaped curve",
                analogy: "Like a satellite dish or fountain arc",
                visualization: "Graph showing vertex, axis of symmetry, x-intercepts (solutions)",
                suitableFor: ['all_quadratic'],
                explanation: "Solutions are where parabola crosses x-axis. Vertex is max/min point."
            },
            factored_form: {
                description: "Written as product of linear factors",
                analogy: "Breaking down into building blocks",
                visualization: "y = a(x - r₁)(x - r₂) shows solutions clearly as r₁ and r₂",
                suitableFor: ['factoring', 'standard_quadratic'],
                explanation: "If equation factors, solutions are immediate from factors"
            },
            vertex_form: {
                description: "Written as a(x - h)² + k",
                analogy: "Shifted and scaled basic parabola",
                visualization: "Shows vertex (h,k) and transformations explicitly",
                suitableFor: ['completing_square', 'vertex_form'],
                explanation: "Vertex form makes graphing and finding max/min easy"
            },
            discriminant_visual: {
                description: "Discriminant determines graph-x-axis relationship",
                analogy: "Like checking if arrow hits target (x-axis)",
                visualization: "Δ > 0: two intersections, Δ = 0: one touch, Δ < 0: no intersection",
                suitableFor: ['discriminant', 'quadratic_formula'],
                explanation: "Discriminant tells us before solving how many real solutions exist"
            },
            table_of_values: {
                description: "Numerical table showing input-output pairs",
                analogy: "Like a function machine's input-output record",
                visualization: "Table with x values and corresponding y = ax² + bx + c values",
                suitableFor: ['all_quadratic'],
                explanation: "Table reveals pattern and helps locate zeros"
            },
            area_model: {
                description: "Physical model using area diagrams",
                analogy: "Like planning a garden or room layout",
                visualization: "Rectangle with dimensions involving x",
                suitableFor: ['word_problems', 'factoring'],
                explanation: "Area problems naturally create quadratic equations"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "x² - 5x + 6 = 0",
                    solution: [2, 3],
                    method: "factoring",
                    steps: ["Factor: (x - 2)(x - 3) = 0", "x - 2 = 0 or x - 3 = 0", "x = 2 or x = 3"],
                    difficulty: "easy"
                },
                {
                    problem: "x² = 16",
                    solution: [-4, 4],
                    method: "square_root",
                    steps: ["Take square root: x = ±√16", "x = ±4", "x = -4 or x = 4"],
                    difficulty: "easy"
                },
                {
                    problem: "x² + 6x + 8 = 0",
                    solution: [-4, -2],
                    method: "factoring",
                    steps: ["Find factors of 8 that add to 6: 2 and 4", "Factor: (x + 2)(x + 4) = 0", "x = -2 or x = -4"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "2x² - 5x - 3 = 0",
                    solution: [3, -0.5],
                    method: "quadratic_formula",
                    steps: ["a=2, b=-5, c=-3", "Δ = 25 - 4(2)(-3) = 25 + 24 = 49", "x = (5 ± 7)/4", "x = 3 or x = -0.5"],
                    difficulty: "medium"
                },
                {
                    problem: "x² - 6x + 4 = 0",
                    solution: [3 + Math.sqrt(5), 3 - Math.sqrt(5)],
                    method: "completing_square",
                    steps: ["x² - 6x = -4", "Add (6/2)² = 9: x² - 6x + 9 = 5", "(x - 3)² = 5", "x = 3 ± √5"],
                    difficulty: "medium"
                },
                {
                    problem: "3x² + 7x - 6 = 0",
                    solution: [2/3, -3],
                    method: "factoring",
                    steps: ["Factor: (3x - 2)(x + 3) = 0", "3x - 2 = 0 or x + 3 = 0", "x = 2/3 or x = -3"],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "x² + 4x + 5 = 0",
                    solution: [-2 + "i", -2 - "i"],
                    method: "quadratic_formula",
                    steps: ["a=1, b=4, c=5", "Δ = 16 - 20 = -4 < 0", "x = (-4 ± √(-4))/2", "x = -2 ± i"],
                    difficulty: "hard",
                    note: "Complex solutions"
                },
                {
                    problem: "5x² - 3x - 2 = 0",
                    solution: [1, -2/5],
                    method: "quadratic_formula",
                    steps: ["a=5, b=-3, c=-2", "Δ = 9 + 40 = 49", "x = (3 ± 7)/10", "x = 1 or x = -0.4"],
                    difficulty: "hard"
                },
                {
                    problem: "x² - 2√3x + 3 = 0",
                    solution: [Math.sqrt(3), Math.sqrt(3)],
                    method: "quadratic_formula",
                    steps: ["a=1, b=-2√3, c=3", "Δ = 12 - 12 = 0", "x = (2√3)/2 = √3", "Double root: x = √3"],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                quadratic_formula: [
                    { problem: "x² - 3x - 10 = 0", solution: [5, -2] },
                    { problem: "2x² + 7x + 3 = 0", solution: [-0.5, -3] },
                    { problem: "x² - 4x + 1 = 0", solution: [2 + Math.sqrt(3), 2 - Math.sqrt(3)] }
                ],
                factoring: [
                    { problem: "x² - 9 = 0", solution: [3, -3] },
                    { problem: "x² + 5x + 6 = 0", solution: [-2, -3] },
                    { problem: "2x² - 7x + 3 = 0", solution: [3, 0.5] }
                ],
                completing_square: [
                    { problem: "x² + 8x + 10 = 0", solution: [-4 + Math.sqrt(6), -4 - Math.sqrt(6)] },
                    { problem: "x² - 6x + 5 = 0", solution: [5, 1] },
                    { problem: "x² + 10x + 21 = 0", solution: [-3, -7] }
                ],
                square_root: [
                    { problem: "x² = 25", solution: [5, -5] },
                    { problem: "(x - 3)² = 16", solution: [7, -1] },
                    { problem: "4x² = 36", solution: [3, -3] }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            missing_plus_minus: {
                misconception: "Forgetting the ± symbol, finding only one solution",
                reality: "Quadratics have TWO solutions (except when discriminant = 0)",
                correctiveExample: "x² = 9 → x = ±3, so x = 3 OR x = -3",
                commonIn: ['quadratic_formula', 'square_root', 'completing_square']
            },
            discriminant_confusion: {
                misconception: "Thinking discriminant IS the solution",
                reality: "Discriminant tells us ABOUT solutions, not the actual solutions",
                correctiveExample: "Δ = 25 means two real solutions, not x = 25",
                commonIn: ['quadratic_formula', 'discriminant']
            },
            formula_sign_errors: {
                misconception: "Using +b instead of -b in quadratic formula",
                reality: "Formula is x = (-b ± √Δ)/(2a), with NEGATIVE b",
                correctiveExample: "For x² + 6x + 5 = 0: x = (-6 ± √16)/2, NOT (6 ± √16)/2",
                commonIn: ['quadratic_formula']
            },
            dividing_only_numerator: {
                misconception: "Dividing only √Δ by 2a, not both -b and √Δ",
                reality: "Must divide ENTIRE numerator by 2a",
                correctiveExample: "x = (-6 ± 4)/2 = (-6+4)/2 or (-6-4)/2, NOT -6 ± (4/2)",
                commonIn: ['quadratic_formula']
            },
            factoring_sign_errors: {
                misconception: "Wrong signs when factoring, especially with negative c",
                reality: "Signs in factors must multiply to give c and add to give b",
                correctiveExample: "x² - x - 6 = (x - 3)(x + 2), NOT (x - 3)(x - 2)",
                commonIn: ['factoring']
            },
            zero_product_incomplete: {
                misconception: "Setting only one factor to zero",
                reality: "Must set EACH factor = 0 to find ALL solutions",
                correctiveExample: "(x - 2)(x + 5) = 0 → x - 2 = 0 AND x + 5 = 0",
                commonIn: ['factoring']
            },
            completing_square_errors: {
                misconception: "Not dividing by 'a' first when a ≠ 1",
                reality: "Must make leading coefficient 1 before completing square",
                correctiveExample: "For 2x² + 8x + 6 = 0, first divide by 2: x² + 4x + 3 = 0",
                commonIn: ['completing_square']
            },
            forgetting_to_add_both_sides: {
                misconception: "Adding (b/2)² to only one side when completing square",
                reality: "Must add to BOTH sides to maintain equality",
                correctiveExample: "x² + 6x = 7 → x² + 6x + 9 = 7 + 9, NOT just left side",
                commonIn: ['completing_square']
            },
            context_rejection: {
                misconception: "Accepting negative or unrealistic solutions in word problems",
                reality: "Must interpret solutions in context; reject impossible values",
                correctiveExample: "If solving for time and get t = -2 or t = 3, reject t = -2",
                commonIn: ['word_problems']
            },
            parabola_direction: {
                misconception: "Thinking all parabolas open upward",
                reality: "a > 0 opens up, a < 0 opens down",
                correctiveExample: "y = -x² + 4 opens downward (maximum at vertex)",
                commonIn: ['graphing', 'vertex_form']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            quadratic_formula: {
                analogy: "Universal key that unlocks any quadratic",
                explanation: "Just like a master key opens any door, the quadratic formula solves any quadratic equation, even when other methods don't work",
                suitableFor: ['quadratic_formula'],
                ELI5: "Imagine a magic formula that can solve ANY puzzle of a certain type. That's the quadratic formula for quadratic equations!"
            },
            discriminant: {
                analogy: "Crystal ball predicting the future",
                explanation: "The discriminant tells us what to expect before we solve, like a crystal ball showing the future",
                suitableFor: ['discriminant', 'quadratic_formula'],
                ELI5: "The discriminant is like peeking ahead in a video game to see how many power-ups you'll find - it tells you before you play!"
            },
            parabola: {
                analogy: "U-shaped playground slide or basketball arc",
                explanation: "A parabola is the path a ball takes when thrown, or the shape of a satellite dish",
                suitableFor: ['graphing', 'standard_quadratic'],
                ELI5: "When you throw a ball in the air, it goes up and comes down in a curved path - that's a parabola!"
            },
            factoring: {
                analogy: "Breaking apart a product into its pieces",
                explanation: "Factoring is like taking apart a LEGO construction to see what pieces it's made from",
                suitableFor: ['factoring'],
                ELI5: "If you have 12 cookies, you can split them into 3 groups of 4, or 2 groups of 6. That's like factoring!"
            },
            completing_square: {
                analogy: "Completing a jigsaw puzzle",
                explanation: "We add the missing piece to make a perfect square pattern, like completing a puzzle",
                suitableFor: ['completing_square'],
                ELI5: "Imagine you have most of a square drawn, but one corner is missing. Completing the square means drawing that last corner!"
            },
            vertex: {
                analogy: "Top of a hill or bottom of a valley",
                explanation: "The vertex is the highest or lowest point of the parabola, like the peak of a mountain",
                suitableFor: ['vertex_form', 'optimization'],
                ELI5: "If you're on a slide, the vertex is the top where you start sliding down!"
            },
            two_solutions: {
                analogy: "Two paths leading to same destination",
                explanation: "Just like you can approach a city from two different highways, quadratics often have two x-values giving the same y-value",
                suitableFor: ['all_quadratic'],
                ELI5: "It's like having two different ways to get the same answer - both are correct!"
            },
            projectile_motion: {
                analogy: "Throwing a ball - what goes up must come down",
                explanation: "When you throw something up, it rises, peaks, then falls - that's quadratic motion",
                suitableFor: ['word_problems', 'applications'],
                ELI5: "When you toss a ball to a friend, it goes up in a curve and comes down - the height at any time follows a quadratic equation!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            quadratic_formula: {
                level1: "What are the coefficients a, b, and c in your equation?",
                level2: "Try calculating the discriminant b² - 4ac first. What does it tell you?",
                level3: "Substitute a, b, c into x = (-b ± √(b² - 4ac))/(2a)",
                level4: "Remember the ± means you'll get TWO solutions. Calculate both!"
            },
            factoring: {
                level1: "Can you find two numbers that multiply to give c and add to give b?",
                level2: "If those two numbers are m and n, your factors are (x + m)(x + n)",
                level3: "Set each factor equal to zero: (x + m) = 0 and (x + n) = 0",
                level4: "Solve each: x = -m and x = -n are your solutions"
            },
            completing_square: {
                level1: "Is the leading coefficient 1? If not, divide everything by a first.",
                level2: "Take half of the b coefficient (the number with x), then square it.",
                level3: "Add that squared value to both sides of the equation.",
                level4: "The left side is now a perfect square. Factor it as (x + b/2)²"
            },
            square_root: {
                level1: "Is the squared term isolated on one side?",
                level2: "If not, move everything else to the other side first.",
                level3: "Take the square root of both sides. Don't forget the ± symbol!",
                level4: "Solve for x. You should get two answers."
            },
            discriminant: {
                level1: "Calculate b² - 4ac. What sign is it?",
                level2: "If positive: two real solutions. If zero: one solution. If negative: complex solutions.",
                level3: "Is the discriminant a perfect square? If yes, solutions are rational!",
                level4: "Use this information to decide the best solving method."
            },
            word_problems: {
                level1: "What is the problem asking you to find? Define that as x.",
                level2: "What quadratic relationship is described? Write an equation.",
                level3: "Solve the equation using an appropriate method.",
                level4: "Check if your answer makes sense in the real-world context. Reject negative values if needed."
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Solve: x² - 4 = 0",
                    answer: [2, -2],
                    assesses: "square_root",
                    difficulty: "basic"
                },
                {
                    question: "Solve: x² + 5x + 6 = 0",
                    answer: [-2, -3],
                    assesses: "factoring",
                    difficulty: "basic"
                },
                {
                    question: "Solve using quadratic formula: x² - 3x - 10 = 0",
                    answer: [5, -2],
                    assesses: "quadratic_formula",
                    difficulty: "intermediate"
                },
                {
                    question: "Calculate discriminant: 2x² - 5x + 2 = 0",
                    answer: 9,
                    assesses: "discriminant",
                    difficulty: "intermediate"
                },
                {
                    question: "Solve by completing the square: x² + 6x + 5 = 0",
                    answer: [-1, -5],
                    assesses: "completing_square",
                    difficulty: "advanced"
                }
            ],
            formative: [
                {
                    question: "For x² - 7x + 12 = 0, what two numbers multiply to 12 and add to -7?",
                    options: ["-3 and -4", "3 and 4", "-2 and -6", "2 and 6"],
                    correct: "-3 and -4",
                    explanation: "Need negative numbers since sum is negative"
                },
                {
                    question: "If discriminant = 0, how many solutions does the quadratic have?",
                    options: ["0", "1", "2", "Infinite"],
                    correct: "1",
                    explanation: "Δ = 0 means one repeated real solution"
                },
                {
                    question: "To complete the square for x² + 10x, what value must be added?",
                    options: ["5", "10", "25", "100"],
                    correct: "25",
                    explanation: "(10/2)² = 5² = 25"
                },
                {
                    question: "In quadratic formula, what does the ± symbol mean?",
                    options: ["Add only", "Subtract only", "Two separate calculations", "Optional"],
                    correct: "Two separate calculations",
                    explanation: "Calculate once with +, once with - to get both solutions"
                }
            ],
            summative: [
                {
                    question: "Solve: 3x² - 10x - 8 = 0",
                    answer: [4, -2/3],
                    showsWork: true,
                    rubric: {
                        identify_abc: 1,
                        calculate_discriminant: 2,
                        apply_formula: 2,
                        simplify: 2,
                        both_solutions: 2,
                        verify: 1
                    }
                },
                {
                    question: "A ball is thrown upward at 48 ft/s from 64 ft height. When does it hit the ground? (h = -16t² + 48t + 64)",
                    answer: 4,
                    showsWork: true,
                    rubric: {
                        setup_equation: 2,
                        solve_correctly: 3,
                        reject_negative: 2,
                        units_context: 1,
                        interpretation: 2
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "x² = 36",
                    "x² - 9 = 0",
                    "x² + 4x + 3 = 0",
                    "(x - 5)² = 16",
                    "x² + 6x + 8 = 0"
                ],
                medium: [
                    "2x² - 7x + 3 = 0",
                    "x² - 5x + 2 = 0",
                    "3x² + 11x - 4 = 0",
                    "x² + 8x + 10 = 0",
                    "2x² - 3x - 9 = 0"
                ],
                hard: [
                    "4x² - 12x + 9 = 0",
                    "x² + 2x + 5 = 0",
                    "5x² - 6x - 2 = 0",
                    "x² - 2√2x + 2 = 0",
                    "3x² + 5x + 3 = 0"
                ]
            },
            byObjective: {
                canSolveByFactoring: [
                    "x² + 7x + 10 = 0",
                    "x² - x - 12 = 0",
                    "2x² - 5x - 3 = 0",
                    "x² - 16 = 0"
                ],
                canUseQuadraticFormula: [
                    "x² - 4x + 1 = 0",
                    "2x² + 3x - 7 = 0",
                    "x² + x - 1 = 0",
                    "3x² - 5x + 1 = 0"
                ],
                canCompleteSquare: [
                    "x² + 10x + 18 = 0",
                    "x² - 6x + 4 = 0",
                    "x² + 4x - 1 = 0"
                ],
                canInterpretDiscriminant: [
                    "Find Δ for x² + 6x + 9 = 0",
                    "How many real solutions: x² + x + 1 = 0?",
                    "Describe solutions: 2x² - 8x + 8 = 0"
                ],
                canSolveWordProblems: [
                    "Rectangle length is 3 more than width. Area is 40. Find dimensions.",
                    "Two consecutive integers have product 132. Find them.",
                    "Ball thrown up at 32 ft/s from 48 ft. When does it hit ground?"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "perfect_square": "Use square root method - fastest",
                "easily_factorable": "Factor if you can spot it quickly",
                "a_equals_1_integer_c": "Try factoring first",
                "decimal_coefficients": "Use quadratic formula",
                "irrational_expected": "Use quadratic formula or completing square",
                "need_vertex": "Complete the square",
                "any_quadratic": "Quadratic formula always works",
                "word_problem": "Set up equation, then choose method based on equation form"
            },
            whenToUseWhat: {
                quadratic_formula: "Universal method, works for all quadratics. Best for decimals, irrational solutions, or when factoring isn't obvious",
                factoring: "When coefficients are small integers and factors are easy to spot. Fastest method when applicable",
                completing_square: "When converting to vertex form, finding vertex, or deriving quadratic formula. Always works but more steps",
                square_root: "For perfect squares or equations already in (x - h)² = k form. Very quick when applicable",
                graphing: "For visual learners, estimating solutions, or understanding behavior. Not for exact algebraic solutions"
            },
            methodSelection: {
                factorsToConsider: [
                    "Coefficient values (integers vs decimals)",
                    "Whether discriminant is perfect square",
                    "Time constraints (factoring fastest if obvious)",
                    "Desired form (vertex form → complete square)",
                    "Whether exact or approximate needed",
                    "Comfort level with each method"
                ],
                generalApproach: [
                    "1. Write in standard form ax² + bx + c = 0",
                    "2. Check for quick factoring (small integer coefficients)",
                    "3. Calculate discriminant to predict solution type",
                    "4. Choose method based on equation characteristics",
                    "5. Solve carefully",
                    "6. Verify solutions"
                ]
            },
            optimizationTips: {
                "Calculate discriminant first": "Tells you what to expect, helps choose method",
                "Factor if obvious": "Don't waste time if factors aren't apparent",
                "Use quadratic formula for certainty": "Less error-prone than factoring for complex cases",
                "Simplify before solving": "Divide out common factors first",
                "Check solutions": "Especially for word problems - reject contextually impossible values"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Factoring Sprint",
                    timeLimit: 120,
                    problems: [
                        "x² + 5x + 6 = 0",
                        "x² - 9 = 0",
                        "x² - x - 12 = 0",
                        "x² + 7x + 10 = 0",
                        "x² - 7x + 12 = 0",
                        "x² - 4x - 5 = 0"
                    ]
                },
                {
                    name: "Quadratic Formula Challenge",
                    timeLimit: 300,
                    problems: [
                        "x² - 5x + 6 = 0",
                        "2x² - 7x + 3 = 0",
                        "x² + 4x + 1 = 0",
                        "3x² - 5x - 2 = 0"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Coefficients",
                    problem: "ax² + bx + c = 0 has solutions x = 2 and x = -3",
                    given: "Find possible values of a, b, c",
                    solution: "Many solutions: e.g., a=1, b=1, c=-6 giving x² + x - 6 = 0"
                },
                {
                    name: "Discriminant Detective",
                    problem: "Find value of k: x² + kx + 9 = 0 has exactly one solution",
                    constraint: "One solution means Δ = 0",
                    solution: "k² - 36 = 0, so k = ±6"
                },
                {
                    name: "Perfect Square Builder",
                    challenge: "Create a quadratic with double root at x = 5",
                    constraints: "Must be in standard form",
                    sampleSolution: "(x - 5)² = 0 → x² - 10x + 25 = 0"
                }
            ],
            applications: [
                {
                    scenario: "Projectile Motion",
                    problem: "Ball thrown at 64 ft/s from 80 ft height. When does it hit ground?",
                    equation: "-16t² + 64t + 80 = 0",
                    solution: "t = 5 seconds (reject t = -1)"
                },
                {
                    scenario: "Area Optimization",
                    problem: "Rectangular garden against wall, 60 ft fence for other 3 sides. Maximize area.",
                    equation: "A = x(60 - 2x), maximize",
                    solution: "x = 15 ft, area = 450 sq ft"
                },
                {
                    scenario: "Consecutive Integers",
                    problem: "Product of two consecutive integers is 132. Find them.",
                    equation: "n(n + 1) = 132",
                    solution: "n = 11 and 12 (reject negative pair)"
                },
                {
                    scenario: "Break-Even Analysis",
                    problem: "Profit P(x) = -2x² + 100x - 500. When is profit $700?",
                    equation: "-2x² + 100x - 500 = 700",
                    solution: "x = 30 or x = 20 units"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "x² + 6x + 8 = 0",
                        "Using formula: x = (-6 ± √(36 - 32))/2",  // ERROR: Should be divided by 2a = 2, not 2
                        "x = (-6 ± 2)/2",
                        "x = -2 or x = -4"  // Happens to be right answer!
                    ],
                    correctAnswer: "x = -2 or x = -4",
                    errorType: "Forgot 2a in denominator (got lucky with a=1)"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "2x² - 5x - 3 = 0",
                        "Δ = 25 - 4(2)(3) = 25 - 24 = 1",  // ERROR: c = -3, should be -4(2)(-3)
                        "x = (5 ± 1)/4",
                        "x = 1.5 or x = 1"
                    ],
                    correctAnswer: "x = 3 or x = -0.5",
                    errorType: "Sign error in discriminant: used c = 3 instead of c = -3"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "x² - 6x + 8 = 0",
                        "Factor: (x - 4)(x - 2) = 0",
                        "x = 4 or x = 2"  // Only gave positive solutions, forgot negative
                    ],
                    correctAnswer: "x = 4 or x = 2",
                    errorType: "Actually correct! But if equation was (x + 4)(x + 2), would give x = -4 or x = -2"
                },
                {
                    name: "Find the Error #4",
                    incorrectWork: [
                        "x² + 4x - 5 = 0",
                        "(x + 5)(x - 1) = 0",
                        "x = 5 or x = 1"  // ERROR: Set factors equal to their numbers, not zero
                    ],
                    correctAnswer: "x = -5 or x = 1",
                    errorType: "Didn't set factors to zero: should be x + 5 = 0 → x = -5"
                }
            ]
        };
    }

    // ===== MAIN SOLVER METHOD =====

    solveQuadraticProblem(config) {
        const { equation, scenario, parameters, problemType, context, method } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseQuadraticProblem(equation, scenario, parameters, problemType, context, method);

            // Solve the problem
            this.currentSolution = this.solveQuadraticProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateQuadraticSteps(this.currentProblem, this.currentSolution);

            // Generate graph data
            this.generateQuadraticGraphData();

            // Generate workbook
            this.generateQuadraticWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionValues: this.currentSolution?.solutions,
                solutionType: this.currentSolution?.solutionType,
                discriminant: this.currentSolution?.discriminant
            };

        } catch (error) {
            throw new Error(`Failed to solve quadratic problem: ${error.message}`);
        }
    }

    parseQuadraticProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}, method = null) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.quadraticTypes[problemType]) {
            return {
                originalInput: equation || `${problemType} problem`,
                cleanInput: cleanInput,
                type: problemType,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                preferredMethod: method,
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect quadratic problem type
        for (const [type, config] of Object.entries(this.quadraticTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractQuadraticParameters(match, type);

                    return {
                        originalInput: equation || scenario,
                        cleanInput: cleanInput,
                        type: type,
                        scenario: scenario,
                        parameters: { ...extractedParams, ...parameters },
                        context: { ...context },
                        match: match,
                        preferredMethod: method,
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default to standard quadratic if coefficients are provided
        if (parameters.a !== undefined || parameters.b !== undefined || parameters.c !== undefined) {
            return {
                originalInput: equation || 'Quadratic equation with given coefficients',
                cleanInput: cleanInput,
                type: 'standard_quadratic',
                scenario: scenario,
                parameters: { 
                    a: parameters.a || 1, 
                    b: parameters.b || 0,
                    c: parameters.c || 0,
                    ...parameters 
                },
                context: { ...context },
                preferredMethod: method,
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize quadratic problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/\^2/g, '²')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/≠/g, '!=')
            .trim();
    }

    extractQuadraticParameters(match, type) {
        const params = {};

        if (!match) return params;

        // Extract based on equation type
        switch(type) {
            case 'standard_quadratic':
                params.a = this.parseCoefficient(match[1]) || 1;
                params.b = this.parseCoefficient(match[2]) || 0;
                params.c = this.parseCoefficient(match[3]) || 0;
                break;

            case 'pure_quadratic':
                params.a = this.parseCoefficient(match[1]) || 1;
                params.b = 0;
                params.c = this.parseCoefficient(match[2]) || 0;
                break;
        }

        return params;
    }

    parseCoefficient(coeff) {
        if (!coeff || coeff.trim() === '') return 0;

        let cleaned = coeff.replace(/\s+/g, '');
        if (cleaned === '+' || cleaned === '') return 1;
        if (cleaned === '-') return -1;

        // Handle fractions
        const fractionMatch = cleaned.match(/^([+-]?\d*\.?\d*)\/(\d*\.?\d*)$/);
        if (fractionMatch) {
            const numerator = parseFloat(fractionMatch[1]) || 1;
            const denominator = parseFloat(fractionMatch[2]) || 1;
            return denominator !== 0 ? numerator / denominator : 0;
        }

        // Handle regular numbers
        const num = parseFloat(cleaned);
        return isNaN(num) ? 0 : num;
    }

    solveQuadraticProblem_Internal(problem) {
        const solver = this.quadraticTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for quadratic problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // ===== QUADRATIC SOLVERS =====

    solveStandardQuadratic(problem) {
        const { a, b, c } = problem.parameters;
        const method = problem.preferredMethod || 'quadratic_formula';

        // Validate that this is actually a quadratic
        if (Math.abs(a) < 1e-10) {
            throw new Error('Not a quadratic equation (a = 0). This is a linear equation.');
        }

        // Calculate discriminant
        const discriminant = b * b - 4 * a * c;

        // Determine solution type
        let solutionType;
        if (Math.abs(discriminant) < 1e-10) {
            solutionType = 'One repeated real solution (double root)';
        } else if (discriminant > 0) {
            solutionType = 'Two distinct real solutions';
        } else {
            solutionType = 'Two complex conjugate solutions';
        }

        // Calculate solutions using quadratic formula
        const solutions = [];
        if (discriminant >= 0) {
            const sqrtDiscriminant = Math.sqrt(discriminant);
            const sol1 = (-b + sqrtDiscriminant) / (2 * a);
            const sol2 = (-b - sqrtDiscriminant) / (2 * a);
            
            if (Math.abs(discriminant) < 1e-10) {
                solutions.push(sol1); // Only one solution (double root)
            } else {
                solutions.push(sol1, sol2);
            }
        } else {
            // Complex solutions
            const realPart = -b / (2 * a);
            const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
            solutions.push(
                { real: realPart, imaginary: imaginaryPart },
                { real: realPart, imaginary: -imaginaryPart }
            );
        }

        return {
            equation: `${a}x² + ${b}x + ${c} = 0`,
            type: 'Standard Quadratic',
            method: method,
            a, b, c,
            discriminant: discriminant,
            discriminantSimplified: this.simplifyRadical(Math.abs(discriminant)),
            solutionType: solutionType,
            solutions: solutions,
            sumOfRoots: -b / a,
            productOfRoots: c / a,
            vertex: { x: -b / (2 * a), y: c - (b * b) / (4 * a) },
            axisOfSymmetry: -b / (2 * a),
            verification: discriminant >= 0 ? this.verifyQuadraticSolutions(solutions, a, b, c) : null,
            category: 'standard_quadratic'
        };
    }

    solveQuadraticFormula(problem) {
        return this.solveStandardQuadratic({ ...problem, preferredMethod: 'quadratic_formula' });
    }

    solveByFactoring(problem) {
        const { a, b, c } = problem.parameters;

        // Try to factor
        const factors = this.attemptFactoring(a, b, c);

        if (factors) {
            const solutions = factors.map(factor => {
                // From (mx + n) = 0, we get x = -n/m
                return -factor.constant / factor.coefficient;
            });

            return {
                equation: `${a}x² + ${b}x + ${c} = 0`,
                type: 'Factoring Method',
                method: 'factoring',
                a, b, c,
                factoredForm: this.formatFactoredForm(factors),
                factors: factors,
                solutions: solutions,
                solutionType: solutions.length === 1 ? 'One repeated real solution' : 'Two distinct real solutions',
                verification: this.verifyQuadraticSolutions(solutions, a, b, c),
                category: 'factoring'
            };
        } else {
            // Cannot factor, fall back to quadratic formula
            return {
                ...this.solveStandardQuadratic(problem),
                note: 'Equation does not factor nicely over integers; solved using quadratic formula instead'
            };
        }
    }

    solveByCompletingSquare(problem) {
        const { a, b, c } = problem.parameters;

        // Steps for completing the square:
        // 1. Divide by a (if a ≠ 1)
        // 2. Move c to right side
        // 3. Add (b/2a)² to both sides
        // 4. Factor left side
        // 5. Take square root
        // 6. Solve for x

        const b_over_a = b / a;
        const c_over_a = c / a;
        const half_b = b_over_a / 2;
        const completing_value = half_b * half_b;

        const right_side = completing_value - c_over_a;

        const solutions = [];
        if (right_side >= 0) {
            const sqrt_right = Math.sqrt(right_side);
            solutions.push(-half_b + sqrt_right);
            solutions.push(-half_b - sqrt_right);
        } else {
            const sqrt_right = Math.sqrt(-right_side);
            solutions.push({ real: -half_b, imaginary: sqrt_right });
            solutions.push({ real: -half_b, imaginary: -sqrt_right });
        }

        return {
            equation: `${a}x² + ${b}x + ${c} = 0`,
            type: 'Completing the Square',
            method: 'completing_square',
            a, b, c,
            steps: {
                divideByA: a !== 1,
                b_over_a: b_over_a,
                c_over_a: c_over_a,
                half_b: half_b,
                completing_value: completing_value,
                right_side: right_side
            },
            vertexForm: `(x + ${half_b})² = ${right_side}`,
            solutions: solutions,
            solutionType: right_side >= 0 ? 
                (Math.abs(right_side) < 1e-10 ? 'One repeated real solution' : 'Two distinct real solutions') :
                'Two complex conjugate solutions',
            vertex: { x: -half_b, y: -right_side },
            verification: right_side >= 0 ? this.verifyQuadraticSolutions(solutions, a, b, c) : null,
            category: 'completing_square'
        };
    }

    solveBySquareRoot(problem) {
        const { a, b, c } = problem.parameters;

        // This method works for equations that can be written as (x - h)² = k
        // or simplified to x² = k

        if (Math.abs(b) > 1e-10) {
            return {
                ...this.solveByCompletingSquare(problem),
                note: 'Equation has linear term; used completing square method'
            };
        }

        // Pure quadratic: ax² + c = 0
        // x² = -c/a

        const k = -c / a;

        const solutions = [];
        if (k >= 0) {
            const sqrtK = Math.sqrt(k);
            solutions.push(sqrtK);
            solutions.push(-sqrtK);
        } else {
            const sqrtK = Math.sqrt(-k);
            solutions.push({ real: 0, imaginary: sqrtK });
            solutions.push({ real: 0, imaginary: -sqrtK });
        }

        return {
            equation: `${a}x² + ${c} = 0`,
            type: 'Square Root Method',
            method: 'square_root',
            a, b: 0, c,
            simplifiedForm: `x² = ${k}`,
            solutions: solutions,
            solutionType: k >= 0 ? 'Two distinct real solutions' : 'Two complex conjugate solutions',
            verification: k >= 0 ? this.verifyQuadraticSolutions(solutions, a, 0, c) : null,
            category: 'square_root'
        };
    }

    solvePureQuadratic(problem) {
        return this.solveBySquareRoot(problem);
    }

    solveWordProblemArea(problem) {
        return {
            type: 'Area Word Problem',
            approach: 'Set up equation from area formula, then solve quadratic',
            commonFormulas: {
                rectangle: 'Area = length × width',
                triangle: 'Area = ½ × base × height',
                circle: 'Area = πr²'
            },
            note: 'Define variable, write equation, solve, interpret in context',
            category: 'word_problems'
        };
    }

    solveWordProblemProjectile(problem) {
        return {
            type: 'Projectile Motion Word Problem',
            approach: 'Use h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters)',
            formula: 'h(t) = -½gt² + v₀t + h₀',
            variables: {
                h: 'height at time t',
                g: 'gravitational acceleration (32 ft/s² or 9.8 m/s²)',
                v₀: 'initial velocity',
                h₀: 'initial height'
            },
            note: 'Set h(t) = 0 to find when object hits ground; reject negative time',
            category: 'word_problems'
        };
    }

    solveWordProblemNumber(problem) {
        return {
            type: 'Number Word Problem',
            approach: 'Define variable for unknown number, set up equation from conditions',
            commonTypes: {
                consecutive: 'n, n+1, n+2, ...',
                consecutiveEven: 'n, n+2, n+4, ...',
                consecutiveOdd: 'n, n+2, n+4, ...',
                product: 'n × (n + k) = value'
            },
            note: 'Solve quadratic, interpret both solutions if applicable',
            category: 'word_problems'
        };
    }

    // ===== HELPER METHODS =====

    attemptFactoring(a, b, c) {
        // Simple factoring for when a = 1
        if (Math.abs(a - 1) < 1e-10) {
            // Find two numbers that multiply to c and add to b
            for (let i = -Math.abs(c); i <= Math.abs(c); i++) {
                if (i === 0) continue;
                if (Math.abs(c / i - Math.floor(c / i)) < 1e-10) {
                    const j = c / i;
                    if (Math.abs(i + j - b) < 1e-10) {
                        return [
                            { coefficient: 1, constant: i },
                            { coefficient: 1, constant: j }
                        ];
                    }
                }
            }
        }

        // For a ≠ 1, try AC method (more complex, simplified here)
        // This is a simplified version; full implementation would be more extensive

        return null; // Cannot factor
    }

    formatFactoredForm(factors) {
        if (!factors || factors.length === 0) return '';
        
        return factors.map(f => {
            const coeff = f.coefficient;
            const const_val = f.constant;
            
            if (coeff === 1) {
                return `(x ${const_val >= 0 ? '+' : ''} ${const_val})`;
            } else {
                return `(${coeff}x ${const_val >= 0 ? '+' : ''} ${const_val})`;
            }
        }).join('');
    }

    simplifyRadical(value) {
        if (value < 0) return { coefficient: 1, radicand: -value, isImaginary: true };
        if (value === 0) return { coefficient: 0, radicand: 0, isImaginary: false };
        
        // Find perfect square factors
        let coefficient = 1;
        let radicand = value;
        
        for (let i = Math.floor(Math.sqrt(value)); i > 1; i--) {
            const square = i * i;
            if (Math.abs(value / square - Math.floor(value / square)) < 1e-10) {
                coefficient = i;
                radicand = value / square;
                break;
            }
        }
        
        return { coefficient, radicand, isImaginary: false };
    }

    verifyQuadraticSolutions(solutions, a, b, c) {
        const verifications = [];
        
        for (const sol of solutions) {
            if (typeof sol === 'object' && sol.real !== undefined) {
                // Complex solution, skip verification
                continue;
            }
            
            const x = sol;
            const leftSide = a * x * x + b * x + c;
            const difference = Math.abs(leftSide);
            
            verifications.push({
                solution: x,
                substitution: `${a}(${x})² + ${b}(${x}) + ${c}`,
                leftSide: leftSide,
                rightSide: 0,
                difference: difference,
                isValid: difference < 1e-9
            });
        }
        
        return verifications;
    }

    // ===== STEP GENERATION =====

    generateQuadraticSteps(problem, solution) {
        let baseSteps = this.generateBaseQuadraticSteps(problem, solution);

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

    generateBaseQuadraticSteps(problem, solution) {
        const method = solution.method || problem.preferredMethod || 'quadratic_formula';
        
        switch(method) {
            case 'quadratic_formula':
                return this.generateQuadraticFormulaSteps(problem, solution);
            case 'factoring':
                return this.generateFactoringSteps(problem, solution);
            case 'completing_square':
                return this.generateCompletingSquareSteps(problem, solution);
            case 'square_root':
                return this.generateSquareRootSteps(problem, solution);
            default:
                return this.generateQuadraticFormulaSteps(problem, solution);
        }
    }

    generateQuadraticFormulaSteps(problem, solution) {
        const steps = [];
        const { a, b, c, discriminant } = solution;

        // Step 1: Identify coefficients
        steps.push({
            stepNumber: 1,
            step: 'Identify coefficients',
            description: 'Identify a, b, and c from standard form ax² + bx + c = 0',
            expression: solution.equation,
            coefficients: { a, b, c },
            reasoning: 'The quadratic formula requires knowing these three values',
            goalStatement: 'Extract coefficients to use in the formula'
        });

        // Step 2: Calculate discriminant
        steps.push({
            stepNumber: 2,
            step: 'Calculate discriminant',
            description: 'Calculate Δ = b² - 4ac',
            beforeExpression: 'Δ = b² - 4ac',
            substitution: `Δ = (${b})² - 4(${a})(${c})`,
            calculation: `Δ = ${b * b} - ${4 * a * c}`,
            afterExpression: `Δ = ${discriminant}`,
            reasoning: 'Discriminant determines the number and type of solutions',
            algebraicRule: 'Discriminant Formula',
            interpretation: this.interpretDiscriminant(discriminant)
        });

        // Step 3: Apply quadratic formula
        const sqrtDisc = discriminant >= 0 ? Math.sqrt(discriminant) : Math.sqrt(-discriminant);
        const discriminantSimplified = this.simplifyRadical(Math.abs(discriminant));
        
        steps.push({
            stepNumber: 3,
            step: 'Apply quadratic formula',
            description: 'Substitute into x = (-b ± √Δ)/(2a)',
            formula: 'x = (-b ± √(b² - 4ac)) / (2a)',
            substitution: `x = (${-b} ± √${discriminant}) / (${2 * a})`,
            reasoning: 'The quadratic formula gives exact solutions for any quadratic equation',
            algebraicRule: 'Quadratic Formula',
            note: 'The ± symbol means we calculate two separate values'
        });

        // Step 4: Simplify under radical (if applicable)
        if (discriminant >= 0 && discriminantSimplified.coefficient > 1) {
            steps.push({
                stepNumber: 4,
                step: 'Simplify radical',
                description: `Simplify √${discriminant}`,
                beforeExpression: `√${discriminant}`,
                afterExpression: `${discriminantSimplified.coefficient}√${discriminantSimplified.radicand}`,
                reasoning: 'Simplifying radicals makes the final answer cleaner',
                method: `√${discriminant} = √(${discriminantSimplified.coefficient}² × ${discriminantSimplified.radicand}) = ${discriminantSimplified.coefficient}√${discriminantSimplified.radicand}`
            });
        }

        // Step 5: Calculate both solutions
        if (discriminant >= 0) {
            const sqrtTerm = discriminantSimplified.coefficient > 1 ? 
                `${discriminantSimplified.coefficient}√${discriminantSimplified.radicand}` : 
                `√${discriminant}`;
            
            steps.push({
                stepNumber: steps.length + 1,
                step: 'Calculate solutions',
                description: 'Compute both values using + and - separately',
                solution1: {
                    expression: `x₁ = (${-b} + ${sqrtTerm}) / ${2 * a}`,
                    calculation: `x₁ = ${solution.solutions[0]}`,
                    label: 'First solution (using +)'
                },
                solution2: solution.solutions.length > 1 ? {
                    expression: `x₂ = (${-b} - ${sqrtTerm}) / ${2 * a}`,
                    calculation: `x₂ = ${solution.solutions[1]}`,
                    label: 'Second solution (using -)'
                } : null,
                reasoning: 'The ± gives us two different solutions',
                note: solution.solutions.length === 1 ? 'Double root (both solutions are the same)' : 'Two distinct solutions'
            });
        } else {
            // Complex solutions
            const realPart = -b / (2 * a);
            const imagPart = sqrtDisc / (2 * a);
            
            steps.push({
                stepNumber: steps.length + 1,
                step: 'Complex solutions',
                description: 'Since Δ < 0, solutions are complex numbers',
                solution1: {
                    expression: `x₁ = ${realPart} + ${imagPart}i`,
                    label: 'First complex solution'
                },
                solution2: {
                    expression: `x₂ = ${realPart} - ${imagPart}i`,
                    label: 'Second complex solution (conjugate)'
                },
                reasoning: 'Negative discriminant means no real solutions, only complex',
                note: 'Complex solutions come in conjugate pairs: a + bi and a - bi'
            });
        }

        // Step 6: Final answer
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Solution',
            description: 'State the final solution(s)',
            expression: this.formatSolutions(solution.solutions),
            finalAnswer: true,
            solutionType: solution.solutionType,
            reasoning: 'These are the values of x that satisfy the original equation'
        });

        return steps;
    }

    generateFactoringSteps(problem, solution) {
        const steps = [];
        const { a, b, c } = solution;

        // Step 1: Write in standard form
        steps.push({
            stepNumber: 1,
            step: 'Standard form',
            description: 'Ensure equation is in standard form with = 0',
            expression: solution.equation,
            reasoning: 'Factoring requires one side to equal zero',
            goalStatement: 'Set up equation for Zero Product Property'
        });

        // Step 2: Factor the quadratic
        steps.push({
            stepNumber: 2,
            step: 'Factor the quadratic',
            description: 'Express as product of two binomials',
            beforeExpression: `${a}x² + ${b}x + ${c}`,
            afterExpression: solution.factoredForm,
            reasoning: 'Factoring allows us to use the Zero Product Property',
            method: a === 1 ? 
                `Find two numbers that multiply to ${c} and add to ${b}` :
                'Use AC method or trial and error',
            algebraicRule: 'Factoring'
        });

        // Step 3: Apply Zero Product Property
        steps.push({
            stepNumber: 3,
            step: 'Zero Product Property',
            description: 'If a product equals zero, at least one factor must equal zero',
            property: 'If (A)(B) = 0, then A = 0 or B = 0',
            application: solution.factors.map(f => 
                `${f.coefficient}x + ${f.constant} = 0`
            ).join(' or '),
            reasoning: 'This property lets us split one equation into simpler equations',
            algebraicRule: 'Zero Product Property'
        });

        // Step 4: Solve each factor
        steps.push({
            stepNumber: 4,
            step: 'Solve each factor',
            description: 'Solve each linear equation separately',
            equations: solution.factors.map((f, i) => ({
                equation: `${f.coefficient}x + ${f.constant} = 0`,
                solution: `x = ${solution.solutions[i]}`,
                steps: f.coefficient === 1 ? 
                    `Subtract ${f.constant}: x = ${-f.constant}` :
                    `Subtract ${f.constant}, then divide by ${f.coefficient}: x = ${-f.constant / f.coefficient}`
            })),
            reasoning: 'Each factor gives us one solution'
        });

        // Step 5: Final answer
        steps.push({
            stepNumber: 5,
            step: 'Solution',
            description: 'State both solutions',
            expression: this.formatSolutions(solution.solutions),
            finalAnswer: true,
            reasoning: 'These are the zeros of the quadratic function'
        });

        return steps;
    }

    generateCompletingSquareSteps(problem, solution) {
        const steps = [];
        const { a, b, c } = solution;
        const stepInfo = solution.steps;

        // Step 1: Original equation
        steps.push({
            stepNumber: 1,
            step: 'Original equation',
            description: 'Start with the quadratic equation',
            expression: solution.equation,
            reasoning: 'We will convert this to vertex form by completing the square',
            goalStatement: 'Transform into perfect square trinomial'
        });

        // Step 2: Divide by a (if a ≠ 1)
        if (stepInfo.divideByA) {
            steps.push({
                stepNumber: 2,
                step: 'Divide by leading coefficient',
                description: `Divide all terms by ${a} to make leading coefficient 1`,
                beforeExpression: `${a}x² + ${b}x + ${c} = 0`,
                afterExpression: `x² + ${stepInfo.b_over_a}x + ${stepInfo.c_over_a} = 0`,
                reasoning: 'Completing the square is easier when the coefficient of x² is 1',
                operation: `÷ ${a}`
            });
        }

        // Step 3: Move constant to right side
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Isolate variable terms',
            description: 'Move constant term to right side',
            beforeExpression: `x² + ${stepInfo.b_over_a}x + ${stepInfo.c_over_a} = 0`,
            afterExpression: `x² + ${stepInfo.b_over_a}x = ${-stepInfo.c_over_a}`,
            reasoning: 'Prepare to add completing value to both sides',
            operation: `- ${stepInfo.c_over_a}`
        });

        // Step 4: Calculate completing value
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Calculate completing value',
            description: 'Take half of b coefficient and square it',
            calculation: `(${stepInfo.b_over_a}/2)² = (${stepInfo.half_b})² = ${stepInfo.completing_value}`,
            reasoning: 'This value completes the perfect square trinomial',
            formula: 'For x² + bx, add (b/2)² to complete the square'
        });

        // Step 5: Add to both sides
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Add to both sides',
            description: `Add ${stepInfo.completing_value} to both sides`,
            beforeExpression: `x² + ${stepInfo.b_over_a}x = ${-stepInfo.c_over_a}`,
            afterExpression: `x² + ${stepInfo.b_over_a}x + ${stepInfo.completing_value} = ${stepInfo.right_side}`,
            reasoning: 'Must add to both sides to maintain equality',
            algebraicRule: 'Addition Property of Equality'
        });

        // Step 6: Factor as perfect square
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Factor perfect square',
            description: 'Write left side as squared binomial',
            beforeExpression: `x² + ${stepInfo.b_over_a}x + ${stepInfo.completing_value}`,
            afterExpression: `(x + ${stepInfo.half_b})²`,
            fullEquation: solution.vertexForm,
            reasoning: 'The left side is now a perfect square trinomial',
            pattern: `x² + 2(${stepInfo.half_b})x + (${stepInfo.half_b})² = (x + ${stepInfo.half_b})²`
        });

        // Step 7: Take square root
        if (stepInfo.right_side >= 0) {
            const sqrtRight = Math.sqrt(stepInfo.right_side);
            steps.push({
                stepNumber: steps.length + 1,
                step: 'Take square root of both sides',
                description: 'Apply square root to both sides',
                beforeExpression: `(x + ${stepInfo.half_b})² = ${stepInfo.right_side}`,
                afterExpression: `x + ${stepInfo.half_b} = ±${sqrtRight}`,
                reasoning: 'Taking square root undoes the square',
                reminder: 'Don\'t forget the ± symbol!',
                algebraicRule: 'Square Root Property'
            });

            // Step 8: Solve for x
            steps.push({
                stepNumber: steps.length + 1,
                step: 'Solve for x',
                description: `Subtract ${stepInfo.half_b} from both sides`,
                solutions: [
                    `x = ${-stepInfo.half_b} + ${sqrtRight} = ${solution.solutions[0]}`,
                    `x = ${-stepInfo.half_b} - ${sqrtRight} = ${solution.solutions[1]}`
                ],
                reasoning: 'Isolate x to find both solutions'
            });
        } else {
            steps.push({
                stepNumber: steps.length + 1,
                step: 'Complex solutions',
                description: 'Right side is negative, leading to complex solutions',
                note: `(x + ${stepInfo.half_b})² = ${stepInfo.right_side} < 0`,
                reasoning: 'No real solutions; solutions are complex numbers'
            });
        }

        // Final step
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Solution',
            description: 'Final answer',
            expression: this.formatSolutions(solution.solutions),
            finalAnswer: true,
            vertexForm: `y = (x + ${stepInfo.half_b})² + ${-stepInfo.right_side}`,
            vertex: `(${solution.vertex.x}, ${solution.vertex.y})`
        });

        return steps;
    }

    generateSquareRootSteps(problem, solution) {
        const steps = [];
        const { a, c } = solution;

        // Step 1: Original equation
        steps.push({
            stepNumber: 1,
            step: 'Original equation',
            description: 'Pure quadratic equation (no x term)',
            expression: solution.equation,
            reasoning: 'This form allows direct use of square root method',
            goalStatement: 'Isolate x² and take square root'
        });

        // Step 2: Isolate x²
        steps.push({
            stepNumber: 2,
            step: 'Isolate x² term',
            description: `Solve for x²`,
            beforeExpression: `${a}x² + ${c} = 0`,
            operation: `Subtract ${c}, then divide by ${a}`,
            afterExpression: solution.simplifiedForm,
            reasoning: 'Prepare to take square root of both sides'
        });

        // Step 3: Take square root
        const k = -c / a;
        if (k >= 0) {
            steps.push({
                stepNumber: 3,
                step: 'Take square root',
                description: 'Apply square root to both sides',
                beforeExpression: `x² = ${k}`,
                afterExpression: `x = ±√${k}`,
                reasoning: 'Square root undoes the square',
                reminder: 'Remember the ± symbol for both positive and negative roots!',
                algebraicRule: 'Square Root Property'
            });

            // Step 4: Simplify
            const simplified = this.simplifyRadical(k);
            if (simplified.coefficient > 1) {
                steps.push({
                    stepNumber: 4,
                    step: 'Simplify radical',
                    description: `Simplify √${k}`,
                    calculation: `√${k} = ${simplified.coefficient}√${simplified.radicand}`,
                    finalExpression: `x = ±${simplified.coefficient}√${simplified.radicand}`
                });
            }
        } else {
            steps.push({
                stepNumber: 3,
                step: 'Complex solutions',
                description: 'Right side is negative',
                note: `x² = ${k} < 0 has no real solutions`,
                complexSolutions: `x = ±${Math.sqrt(-k)}i`,
                reasoning: 'Negative under square root gives imaginary solutions'
            });
        }

        // Final step
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Solution',
            description: 'Both solutions',
            expression: this.formatSolutions(solution.solutions),
            finalAnswer: true
        });

        return steps;
    }

    formatSolutions(solutions) {
        if (!solutions || solutions.length === 0) return 'No solution';
        
        return solutions.map((sol, i) => {
            if (typeof sol === 'object' && sol.real !== undefined) {
                // Complex solution
                const sign = sol.imaginary >= 0 ? '+' : '';
                return `x${i + 1} = ${sol.real} ${sign} ${sol.imaginary}i`;
            } else {
                return `x${i + 1} = ${sol}`;
            }
        }).join(' or ');
    }

    interpretDiscriminant(discriminant) {
        if (Math.abs(discriminant) < 1e-10) {
            return {
                value: 0,
                meaning: 'Exactly zero',
                solutionCount: 'One repeated real solution (double root)',
                graphInterpretation: 'Parabola touches x-axis at one point (vertex)',
                factorable: 'Perfect square trinomial'
            };
        } else if (discriminant > 0) {
            const isPerfectSquare = Math.abs(Math.sqrt(discriminant) - Math.round(Math.sqrt(discriminant))) < 1e-10;
            return {
                value: discriminant,
                meaning: 'Positive',
                solutionCount: 'Two distinct real solutions',
                graphInterpretation: 'Parabola crosses x-axis at two points',
                factorable: isPerfectSquare ? 'Factors over integers (rational roots)' : 'Irrational roots (may not factor nicely)'
            };
        } else {
            return {
                value: discriminant,
                meaning: 'Negative',
                solutionCount: 'Two complex conjugate solutions',
                graphInterpretation: 'Parabola does not cross x-axis',
                factorable: 'Does not factor over real numbers'
            };
        }
    }

    // ===== ENHANCED EXPLANATION METHODS =====

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
            'Identify coefficients': "We need to find the three special numbers in our equation: the number with x², the number with x, and the number by itself.",
            'Calculate discriminant': "The discriminant is like a magic crystal ball that tells us how many answers we'll get before we even solve it!",
            'Apply quadratic formula': "This is like a recipe - we put in our three numbers (a, b, c) and it tells us the answers!",
            'Factor the quadratic': "We're breaking the equation into smaller pieces, like taking apart LEGO blocks to see what it's made of.",
            'Zero Product Property': "If two things multiplied together equal zero, at least one of them must be zero - like 0 × anything = 0!",
            'Complete the square': "We're adding a missing piece to make a perfect square, like completing a puzzle!",
            'Take square root': "Square root is the opposite of squaring. If 5² = 25, then √25 = 5. We're undoing the square!",
            'Solve for x': "Now we just need to get x by itself, like unwrapping a present to see what's inside!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to find what number x should be!";
    }

    findRelevantAnalogy(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('all_quadratic')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like solving a puzzle - each step gets us closer to the answer!";
    }

    convertToSimpleLanguage(description) {
        if (!description) return '';
        
        const simplifications = {
            'coefficient': 'number',
            'discriminant': 'special number that predicts answers',
            'quadratic': 'equation with x²',
            'factor': 'break apart',
            'binomial': 'two-part expression',
            'radical': 'square root',
            'vertex': 'top or bottom point',
            'parabola': 'U-shaped curve',
            'solution': 'answer',
            'substitute': 'plug in',
            'simplify': 'make easier',
            'isolate': 'get by itself'
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
            'Identify coefficients': 'Circle the three numbers: the one with x², the one with x, and the one alone',
            'Calculate discriminant': 'Draw a decision tree showing what different discriminant values mean',
            'Apply quadratic formula': 'Write out the formula and draw arrows showing where each number goes',
            'Factor the quadratic': 'Use area model or algebra tiles to show factoring visually',
            'Zero Product Property': 'Draw two boxes multiplying to give zero',
            'Take square root': 'Draw a square and show that taking square root gives the side length',
            'Complete the square': 'Draw an incomplete square and show adding the missing corner piece'
        };

        return visualizations[step.step] || 'Draw a picture to represent what\'s happening in this step';
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
        const category = this.quadraticTypes[problemType]?.category || 'standard_quadratic';
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

    // ===== HELPER METHODS FOR ENHANCED EXPLANATIONS =====

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Identify coefficients': 'The coefficients a, b, and c completely determine the quadratic. They control the shape, position, and solutions of the parabola.',
            'Calculate discriminant': 'The discriminant reveals the hidden structure of solutions without actually solving. It\'s like an X-ray showing what\'s inside.',
            'Apply quadratic formula': 'This formula encodes the entire process of completing the square in one compact expression. It works universally for all quadratics.',
            'Factor the quadratic': 'Factoring reveals the roots directly. Each factor corresponds to one x-intercept of the parabola.',
            'Zero Product Property': 'This fundamental principle states that zero is special - it\'s the only number that, when a product equals it, forces a factor to be zero.',
            'Complete the square': 'We\'re transforming the equation to reveal the vertex directly. This shows the parabola\'s symmetry.',
            'Take square root': 'Square root is the inverse function of squaring. Both the positive and negative roots matter because (±a)² gives the same result.',
            'Simplify radical': 'Extracting perfect square factors makes expressions cleaner and often reveals patterns.'
        };

        return conceptualExplanations[step.step] || 'This step progresses us toward finding the solutions.';
    }

    getProceduralExplanation(step) {
        if (step.description) {
            return `1. ${step.description}
2. Perform necessary calculations
3. Verify the result makes sense
4. Write the new equation or expression`;
        }
        return 'Follow the standard procedure for this type of step.';
    }

    getVisualExplanation(step, problem) {
        const visualExplanations = {
            'Identify coefficients': 'Circle each coefficient and label it as a, b, or c.',
            'Calculate discriminant': 'Draw a number line showing Δ < 0, Δ = 0, and Δ > 0 regions.',
            'Factor the quadratic': 'Use area model: rectangle with area ac, dimensions adding to b.',
            'Zero Product Property': 'Picture two factors on a number line; at least one must hit zero.',
            'Complete the square': 'Draw geometric square showing how we add the missing corner.',
            'Parabola graph': 'Sketch U-shaped curve showing vertex, axis of symmetry, and x-intercepts.'
        };

        return visualExplanations[step.step] || 'Visualize this step geometrically or graphically.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Calculate discriminant': 'Discriminant Δ = b² - 4ac determines solution count and type',
            'Apply quadratic formula': 'Quadratic Formula: x = (-b ± √Δ)/(2a) derived from completing square',
            'Zero Product Property': 'Fundamental theorem: ab = 0 ⟹ a = 0 or b = 0',
            'Take square root': 'Square Root Property: x² = k ⟹ x = ±√k for k ≥ 0',
            'Complete the square': 'Transform ax² + bx + c to a(x - h)² + k form'
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
                'discriminant': 'b² - 4ac value',
                'coefficient': 'number',
                'quadratic formula': 'the formula',
                'factor': 'break apart',
                'binomial': 'two-term expression',
                'parabola': 'U-shaped graph',
                'vertex': 'turning point'
            },
            intermediate: {
                'discriminant': 'discriminant',
                'coefficient': 'coefficient',
                'quadratic formula': 'quadratic formula',
                'factor': 'factor',
                'binomial': 'binomial',
                'parabola': 'parabola',
                'vertex': 'vertex'
            },
            ELI5: {
                'discriminant': 'special number that predicts how many answers',
                'coefficient': 'the numbers in front',
                'quadratic formula': 'magic formula that always works',
                'factor': 'break into pieces',
                'binomial': 'expression with two parts',
                'parabola': 'the U-shaped curve',
                'vertex': 'the very top or bottom point',
                'solution': 'the answer',
                'radical': 'square root symbol √'
            },
            detailed: {
                'discriminant': 'discriminant (b² - 4ac)',
                'coefficient': 'coefficient (numerical factor)',
                'quadratic formula': 'quadratic formula x = (-b ± √(b²-4ac))/(2a)',
                'factor': 'factor (decompose into product)',
                'binomial': 'binomial (polynomial with two terms)',
                'parabola': 'parabola (conic section, quadratic graph)',
                'vertex': 'vertex (extremum point)'
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
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || 'completed this step'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving the quadratic`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return `we need to continue the solution process`;
    }

    explainStepBenefit(nextStep) {
        return `bringing us closer to finding the solutions`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Calculate discriminant': [
                'Remember to SQUARE b first: b², not just b',
                'Watch signs: it\'s minus 4ac, not plus',
                'Calculate 4ac carefully: multiply 4 × a × c',
                'Check your arithmetic twice'
            ],
            'Apply quadratic formula': [
                'Use NEGATIVE b: -b, not b',
                'Don\'t forget the ± symbol (two solutions!)',
                'Divide BOTH terms by 2a, not just one',
                'Simplify radical before dividing if possible'
            ],
            'Factor the quadratic': [
                'Check: factors multiply to give c',
                'Check: factors add to give b',
                'Watch signs carefully',
                'Verify by expanding back'
            ],
            'Take square root': [
                'ALWAYS use ± symbol',
                'Can only take square root of non-negative',
                'Simplify radical if possible',
                'Both solutions are equally valid'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check your arithmetic', 'Verify your answer'];
    }

    generateCheckPoints(step) {
        return [
            'Did I perform all calculations correctly?',
            'Did I watch my signs (especially negatives)?',
            'Does this result make sense?',
            'Am I ready for the next step?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            'Calculate discriminant': ['Easy to make sign errors', 'Double-check b² vs just b'],
            'Apply quadratic formula': ['Forgetting ± is most common error', 'Division must apply to whole numerator'],
            'Factor the quadratic': ['Sign errors very common', 'Verify factors multiply back'],
            'Take square root': ['Must use ± symbol', 'Check if radicand is non-negative']
        };

        return warnings[step.step] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Identify coefficients': 'Did I correctly identify a (with x²), b (with x), and c (constant)?',
            'Calculate discriminant': 'Did I calculate b² - 4ac correctly with proper signs?',
            'Apply quadratic formula': 'Did I use -b and include the ± symbol?',
            'Factor the quadratic': 'Do my factors multiply back to the original expression?',
            'Zero Product Property': 'Did I set EACH factor equal to zero?',
            'Complete the square': 'Did I add (b/2)² to BOTH sides?',
            'Take square root': 'Did I include the ± symbol for both roots?'
        };

        return questions[step.step] || 'Does this step make sense and move me toward the solution?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Identify coefficients': 'Three numbers: a, b, and c',
            'Calculate discriminant': 'A number (positive, zero, or negative)',
            'Apply quadratic formula': 'Expression with ± that will give two values',
            'Factor the quadratic': 'Product of two binomials',
            'Zero Product Property': 'Two separate equations to solve',
            'Take square root': 'Expression with ± giving two solutions'
        };

        return expectations[step.step] || 'Progress toward finding solutions';
    }

    generateTroubleshootingTips(step) {
        return [
            'If stuck, review the previous step',
            'Check all signs carefully',
            'Verify arithmetic with calculator',
            'Try explaining the step out loud',
            'Consult worked examples for similar problems'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Identify coefficients': [
                'Which number is multiplying x²?',
                'Which number is multiplying x?',
                'Which number stands alone?'
            ],
            'Calculate discriminant': [
                'What is b²? (Remember to square it!)',
                'What is 4 × a × c?',
                'What is b² - 4ac?'
            ],
            'Apply quadratic formula': [
                'What is -b? (Note the negative!)',
                'What is √Δ?',
                'What is 2a?',
                'How do I split this into two solutions?'
            ],
            'Factor the quadratic': [
                'What two numbers multiply to c?',
                'Which pair also adds to b?',
                'What are the correct signs?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'What do I need to calculate?'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.quadraticTypes[problem.type]?.category || 'standard_quadratic';
        const hintSet = this.hints[category] || this.hints.quadratic_formula;

        return {
            level1: hintSet.level1 || 'Think about what needs to be calculated here.',
            level2: hintSet.level2 || 'Consider what formula or method applies.',
            level3: hintSet.level3 || 'Apply the specific operation step by step.',
            level4: hintSet.level4 || 'Calculate the final result carefully.'
        };
    }

    breakIntoSubSteps(step) {
        if (step.step === 'Apply quadratic formula') {
            return [
                'Write out the formula: x = (-b ± √(b² - 4ac)) / (2a)',
                'Substitute a, b, c values',
                'Calculate numerator: -b ± √Δ',
                'Calculate denominator: 2a',
                'Divide to get final answers'
            ];
        }

        return ['Understand the goal', 'Perform the calculation', 'Verify the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same method with different coefficients',
            practiceHint: 'Start with simpler numbers to build confidence',
            extension: 'Once comfortable, try problems with fractions or larger numbers'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to find or achieve?',
            strategy: 'What method or formula should I use?',
            execute: 'How do I perform this correctly?',
            verify: 'Does my result make sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which solving method should I use?',
            'Should I simplify before proceeding?',
            'Are there any special cases to watch for?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        if (step.step === 'Apply quadratic formula') {
            return [
                'Could try factoring if discriminant is a perfect square',
                'Could complete the square for same result',
                'Could graph to estimate solutions'
            ];
        }

        return ['The chosen method is appropriate for this problem'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the solution process`,
            progression: 'We are getting closer to finding the solutions',
            relationship: 'Each step transforms the equation toward a solvable form'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.quadraticTypes[problemType]?.category || 'standard_quadratic';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic algebra', 'Arithmetic operations'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Identify coefficients': ['coefficient', 'standard form', 'quadratic', 'term'],
            'Calculate discriminant': ['discriminant', 'formula', 'square', 'product'],
            'Apply quadratic formula': ['formula', 'radical', 'numerator', 'denominator', 'plus-minus'],
            'Factor the quadratic': ['factor', 'binomial', 'product', 'zero'],
            'Zero Product Property': ['property', 'product', 'factor', 'zero'],
            'Complete the square': ['perfect square', 'trinomial', 'vertex form'],
            'Take square root': ['square root', 'radical', 'inverse', 'plus-minus']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before I start, what do I need to know or calculate?',
            during: 'As I work, what should I be careful about?',
            after: 'How can I check if my answer is correct?'
        };
    }

    findRealWorldConnection(step, problem) {
        const connections = {
            'quadratic_formula': 'Like using a GPS formula that always gets you to your destination, the quadratic formula always works.',
            'projectile': 'When you throw a ball, its height over time follows a quadratic equation.',
            'optimization': 'Businesses use quadratics to find maximum profit or minimum cost.',
            'area': 'Garden design, room layouts, and construction often involve quadratic relationships.'
        };

        const category = this.quadraticTypes[problem.type]?.category;
        return connections[category] || 'Quadratics model many natural phenomena including motion, growth, and optimization.';
    }

    // ===== GRAPH GENERATION =====

    generateQuadraticGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { a, b, c } = this.currentSolution;

        this.graphData = {
            type: 'parabola',
            equation: this.currentSolution.equation,
            coefficients: { a, b, c },
            vertex: this.currentSolution.vertex,
            axisOfSymmetry: this.currentSolution.axisOfSymmetry,
            opensUpward: a > 0,
            solutions: this.currentSolution.solutions,
            yIntercept: c,
            discriminant: this.currentSolution.discriminant,
            graphDescription: this.generateGraphDescription(),
            points: this.generateParabolaPoints()
        };
    }

    generateGraphDescription() {
        const { a, discriminant, vertex } = this.currentSolution;
        
        let description = `Parabola opens ${a > 0 ? 'upward' : 'downward'}. `;
        description += `Vertex at (${vertex.x.toFixed(2)}, ${vertex.y.toFixed(2)}) is a ${a > 0 ? 'minimum' : 'maximum'}. `;
        
        if (discriminant > 0) {
            description += `Two x-intercepts (crosses x-axis twice). `;
        } else if (Math.abs(discriminant) < 1e-10) {
            description += `One x-intercept (touches x-axis at vertex). `;
        } else {
            description += `No x-intercepts (doesn't cross x-axis). `;
        }
        
        return description;
    }

    generateParabolaPoints() {
        const { a, b, c } = this.currentSolution;
        const vertex_x = -b / (2 * a);
        
        const points = [];
        for (let x = vertex_x - 3; x <= vertex_x + 3; x += 0.5) {
            const y = a * x * x + b * x + c;
            points.push({ x, y });
        }
        
        return points;
    }

    // ===== WORKBOOK GENERATION =====

    generateQuadraticWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createQuadraticTheorySection(),
            this.createDiscriminantSection(),
            this.createEnhancedStepsSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createGraphSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Standard Quadratic Mathematical Workbook',
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
            ['Problem Type', this.quadraticTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.quadraticTypes[this.currentProblem.type]?.category || 'quadratic'],
            ['Equation', this.currentSolution?.equation || this.currentProblem.cleanInput],
            ['Description', this.currentProblem.scenario || 'Standard quadratic equation'],
            ['', '']
        ];

        // Add coefficients
        if (this.currentProblem.parameters.a !== undefined) {
            problemData.push(['Coefficients', '']);
            problemData.push(['a (coefficient of x²)', this.currentProblem.parameters.a]);
            problemData.push(['b (coefficient of x)', this.currentProblem.parameters.b]);
            problemData.push(['c (constant term)', this.currentProblem.parameters.c]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.quadraticTypes[this.currentProblem.type]?.category;
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

    createQuadraticTheorySection() {
        const theoryData = [
            ['Key Concepts', ''],
            ['', 'Quadratic equations have degree 2 (highest power is x²)'],
            ['', 'Graph is a parabola (U-shaped curve)'],
            ['', 'Can have 0, 1, or 2 real solutions'],
            ['', 'Solutions are also called roots, zeros, or x-intercepts'],
            ['', ''],
            ['Standard Form', 'ax² + bx + c = 0 where a ≠ 0'],
            ['Quadratic Formula', 'x = (-b ± √(b² - 4ac)) / (2a)'],
            ['Discriminant', 'Δ = b² - 4ac'],
            ['Vertex', '(h, k) where h = -b/(2a), k = f(h)'],
            ['Axis of Symmetry', 'x = -b/(2a)'],
            ['', ''],
            ['Solution Methods', ''],
            ['', '1. Quadratic Formula (universal)'],
            ['', '2. Factoring (when equation factors nicely)'],
            ['', '3. Completing the Square (always works)'],
            ['', '4. Square Root Method (for perfect squares)'],
            ['', '5. Graphing (for approximation)']
        ];

        return {
            title: 'Quadratic Theory',
            type: 'theory',
            data: theoryData
        };
    }

    createDiscriminantSection() {
        if (!this.currentSolution.discriminant) return null;

        const disc = this.currentSolution.discriminant;
        const interpretation = this.interpretDiscriminant(disc);

        const discData = [
            ['Discriminant Formula', 'Δ = b² - 4ac'],
            ['Calculation', `Δ = ${this.currentSolution.b}² - 4(${this.currentSolution.a})(${this.currentSolution.c})`],
            ['Value', disc],
            ['', ''],
            ['Interpretation', ''],
            ['Meaning', interpretation.meaning],
            ['Solution Count', interpretation.solutionCount],
            ['Graph Behavior', interpretation.graphInterpretation],
            ['Factorability', interpretation.factorable]
        ];

        return {
            title: 'Discriminant Analysis',
            type: 'discriminant',
            data: discData
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
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
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

            // Scaffolding
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

        solutionData.push(['Solution Type', this.currentSolution.solutionType]);
        solutionData.push(['', '']);

        if (this.currentSolution.solutions && this.currentSolution.solutions.length > 0) {
            solutionData.push(['Solutions', '']);
            this.currentSolution.solutions.forEach((sol, i) => {
                if (typeof sol === 'object' && sol.real !== undefined) {
                    const sign = sol.imaginary >= 0 ? '+' : '';
                    solutionData.push([`x${i + 1}`, `${sol.real} ${sign} ${sol.imaginary}i`]);
                } else {
                    solutionData.push([`x${i + 1}`, sol]);
                }
            });
        }

        if (this.currentSolution.vertex) {
            solutionData.push(['', '']);
            solutionData.push(['Vertex', `(${this.currentSolution.vertex.x}, ${this.currentSolution.vertex.y})`]);
        }

        if (this.currentSolution.axisOfSymmetry !== undefined) {
            solutionData.push(['Axis of Symmetry', `x = ${this.currentSolution.axisOfSymmetry}`]);
        }

        if (this.currentSolution.sumOfRoots !== undefined) {
            solutionData.push(['', '']);
            solutionData.push(['Sum of Roots', `${this.currentSolution.sumOfRoots} (= -b/a)`]);
            solutionData.push(['Product of Roots', `${this.currentSolution.productOfRoots} (= c/a)`]);
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
            ['Solution Method', this.currentSolution.method || this.currentSolution.type],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel],
            ['Category', this.quadraticTypes[this.currentProblem.type]?.category],
            ['', ''],
            ['Discriminant', this.currentSolution.discriminant]
        ];

        if (this.currentSolution.factoredForm) {
            analysisData.push(['Factored Form', this.currentSolution.factoredForm]);
        }

        if (this.currentSolution.vertexForm) {
            analysisData.push(['Vertex Form', this.currentSolution.vertexForm]);
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
            ['Verification Method', 'Substitution into original equation'],
            ['', '']
        ];

        const verification = this.currentSolution.verification;
        if (verification && verification.length > 0) {
            verification.forEach((v, i) => {
                verificationData.push([`Solution ${i + 1}`, `x = ${v.solution}`]);
                verificationData.push(['Substitution', v.substitution]);
                verificationData.push(['Left Side', v.leftSide]);
                verificationData.push(['Expected', '0']);
                verificationData.push(['Difference', v.difference.toExponential(2)]);
                verificationData.push(['Valid', v.isValid ? 'Yes ✓' : 'No ✗']);
                verificationData.push(['', '']);
            });
        } else {
            verificationData.push(['Note', 'Complex solutions cannot be verified by simple substitution']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createGraphSection() {
        if (!this.graphData) return null;

        const graphData = [
            ['Graph Type', 'Parabola'],
            ['Equation', this.graphData.equation],
            ['Opens', this.graphData.opensUpward ? 'Upward' : 'Downward'],
            ['Vertex', `(${this.graphData.vertex.x.toFixed(2)}, ${this.graphData.vertex.y.toFixed(2)})`],
            ['Axis of Symmetry', `x = ${this.graphData.axisOfSymmetry.toFixed(2)}`],
            ['y-intercept', this.graphData.yIntercept],
            ['', ''],
            ['Description', this.graphData.graphDescription]
        ];

        return {
            title: 'Graph Analysis',
            type: 'graph',
            data: graphData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        const appData = [
            ['Real-World Applications of Quadratics', ''],
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

        const notes = this.generateQuadraticPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateQuadraticAlternativeMethods(this.currentProblem.type);

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

    generateQuadraticPedagogicalNotes(problemType) {
        const category = this.quadraticTypes[problemType]?.category;

        const pedagogicalDatabase = {
            quadratic_formula: {
                objectives: [
                    'Apply quadratic formula correctly',
                    'Calculate and interpret discriminant',
                    'Simplify radical expressions',
                    'Find both solutions using ±'
                ],
                keyConcepts: [
                    'Quadratic formula is universal (works for all quadratics)',
                    'Discriminant predicts solution type',
                    '± symbol gives two solutions',
                    'Both solutions are equally valid'
                ],
                prerequisites: [
                    'Identifying coefficients a, b, c',
                    'Square roots and radicals',
                    'Order of operations',
                    'Negative number arithmetic'
                ],
                commonDifficulties: [
                    'Forgetting negative sign in -b',
                    'Omitting ± symbol (missing one solution)',
                    'Dividing only part of numerator by 2a',
                    'Sign errors in discriminant calculation'
                ],
                teachingStrategies: [
                    'Create reference card with formula',
                    'Practice discriminant separately first',
                    'Emphasize ± means TWO calculations',
                    'Use color coding for formula parts'
                ],
                extensions: [
                    'Complex solutions when Δ < 0',
                    'Deriving formula via completing square',
                    'Graphical interpretation of discriminant'
                ],
                assessment: [
                    'Can student identify a, b, c correctly?',
                    'Does student calculate discriminant properly?',
                    'Does student find BOTH solutions?',
                    'Can student verify answers?'
                ]
            },
            factoring: {
                objectives: [
                    'Factor quadratic expressions',
                    'Apply Zero Product Property',
                    'Recognize factoring patterns',
                    'Verify factorization'
                ],
                keyConcepts: [
                    'Factoring reverses multiplication',
                    'Zero Product Property: ab = 0 → a = 0 or b = 0',
                    'Factors reveal roots directly',
                    'Not all quadratics factor over integers'
                ],
                prerequisites: [
                    'FOIL method',
                    'Finding factor pairs',
                    'Solving linear equations',
                    'Understanding of zero property'
                ],
                commonDifficulties: [
                    'Finding correct factor pairs',
                    'Sign errors in factors',
                    'Handling leading coefficient ≠ 1',
                    'Not checking work by expanding'
                ],
                teachingStrategies: [
                    'Teach systematic factor pair search',
                    'Use area models for visualization',
                    'Practice FOIL to verify',
                    'Recognize common patterns'
                ],
                extensions: [
                    'Factoring with leading coefficient > 1',
                    'Sum and product of roots',
                    'Factoring by grouping'
                ],
                assessment: [
                    'Can student find factor pairs?',
                    'Does student use correct signs?',
                    'Can student verify by expanding?',
                    'Does student apply Zero Product Property?'
                ]
            },
            completing_square: {
                objectives: [
                    'Complete the square to solve quadratics',
                    'Convert to vertex form',
                    'Understand perfect square trinomials',
                    'Find vertex algebraically'
                ],
                keyConcepts: [
                    'Adding (b/2)² creates perfect square',
                    'Must add to both sides',
                    'Reveals vertex directly',
                    'Basis for quadratic formula derivation'
                ],
                prerequisites: [
                    'Perfect square trinomial pattern',
                    'Square roots with ±',
                    'Completing square with a = 1',
                    'Dividing polynomial by constant'
                ],
                commonDifficulties: [
                    'Forgetting to divide by a first when a ≠ 1',
                    'Adding to only one side',
                    'Errors in (b/2)² calculation',
                    'Forgetting ± when taking square root'
                ],
                teachingStrategies: [
                    'Show geometric interpretation',
                    'Practice perfect square pattern first',
                    'Emphasize symmetry of process',
                    'Connect to vertex form'
                ],
                extensions: [
                    'Deriving quadratic formula',
                    'Optimizat

ion problems',
                    'Conic sections'
                ],
                assessment: [
                    'Can student calculate (b/2)²?',
                    'Does student maintain equality?',
                    'Can student factor perfect square?',
                    'Does student include ± symbol?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve quadratic equations'],
            keyConcepts: ['Quadratic formula', 'Discriminant'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex quadratics'],
            assessment: ['Verify understanding of process']
        };
    }

    generateQuadraticAlternativeMethods(problemType) {
        const category = this.quadraticTypes[problemType]?.category;

        const alternativeDatabase = {
            standard_quadratic: {
                primaryMethod: 'Quadratic Formula',
                methods: [
                    {
                        name: 'Factoring',
                        description: 'Factor and use Zero Product Property (fastest when applicable)'
                    },
                    {
                        name: 'Completing the Square',
                        description: 'Algebraic method revealing vertex form'
                    },
                    {
                        name: 'Graphing',
                        description: 'Visual method for approximating solutions'
                    },
                    {
                        name: 'Square Root Method',
                        description: 'For perfect squares or pure quadratics'
                    }
                ],
                comparison: 'Formula is most reliable; factoring fastest when obvious; completing square shows structure; graphing provides visualization'
            },
            factoring: {
                primaryMethod: 'Factoring',
                methods: [
                    {
                        name: 'Quadratic Formula',
                        description: 'More systematic, works when factoring is difficult'
                    },
                    {
                        name: 'Completing the Square',
                        description: 'Alternative algebraic approach'
                    },
                    {
                        name: 'Rational Root Theorem',
                        description: 'Systematically test possible rational roots'
                    }
                ],
                comparison: 'Factoring is fastest when obvious; formula is most systematic; theorem helps find rational roots'
            },
            completing_square: {
                primaryMethod: 'Completing the Square',
                methods: [
                    {
                        name: 'Quadratic Formula',
                        description: 'More direct for finding roots'
                    },
                    {
                        name: 'Factoring',
                        description: 'If expression factors nicely'
                    },
                    {
                        name: 'Vertex Form Direct',
                        description: 'Use h = -b/(2a), k = c - b²/(4a)'
                    }
                ],
                comparison: 'Completing square reveals vertex; formula is quicker for roots; factoring best when obvious'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard quadratic solving approach',
            methods: [{
                name: 'Alternative methods',
                description: 'Choose based on equation characteristics'
            }],
            comparison: 'Select method based on problem structure and goals'
        };
    }
}

// Export the class
export default EnhancedStandardQuadraticMathematicalWorkbook;

