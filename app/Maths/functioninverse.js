// Enhanced Inverse Functions Mathematical Workbook - Comprehensive Implementation
import * as math from 'mathjs';

export class EnhancedInverseFunctionsMathematicalWorkbook {
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
        this.initializeInverseFunctionSolvers();
        this.initializeInverseFunctionLessons();
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
        this.initializeGraphicalDatabase();
    }

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            'compose': '∘', 'inverse': '⁻¹',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥', 'rightarrow': '→', 'leftarrow': '←',
            'mapsto': '↦', 'domain': 'Dom', 'range': 'Rng'
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
                functionBg: '#e8f4f8',
                inverseBg: '#fce4ec'
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
                functionBg: '#e0f2f1',
                inverseBg: '#f3e5f5'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeInverseFunctionLessons() {
        this.lessons = {
            inverse_concept: {
                title: "Understanding Inverse Functions",
                concepts: [
                    "An inverse function 'undoes' what the original function does",
                    "Notation: f⁻¹(x) is the inverse of f(x)",
                    "Domain of f becomes range of f⁻¹, and vice versa",
                    "Composition: f(f⁻¹(x)) = x and f⁻¹(f(x)) = x",
                    "Graphically: inverse is reflection over y = x line",
                    "Not all functions have inverses - must be one-to-one"
                ],
                theory: "Inverse functions reverse the input-output relationship. If f maps a to b, then f⁻¹ maps b to a. The inverse exists only when the function is one-to-one (passes horizontal line test).",
                keyFormulas: {
                    "Inverse Notation": "f⁻¹(x)",
                    "Composition Property": "f(f⁻¹(x)) = x and f⁻¹(f(x)) = x",
                    "Domain-Range Swap": "Dom(f⁻¹) = Rng(f), Rng(f⁻¹) = Dom(f)"
                },
                fundamentalSteps: [
                    "Replace f(x) with y",
                    "Swap x and y",
                    "Solve for y",
                    "Replace y with f⁻¹(x)",
                    "Verify by composition"
                ],
                applications: [
                    "Converting between units (temperature, currency)",
                    "Encoding and decoding",
                    "Finding original values from transformed data",
                    "Cryptography and security"
                ]
            },

            linear_inverse: {
                title: "Inverse of Linear Functions",
                concepts: [
                    "Form: f(x) = ax + b where a ≠ 0",
                    "Inverse: f⁻¹(x) = (x - b)/a",
                    "Linear functions always have inverses (one-to-one)",
                    "Slope of inverse is reciprocal of original slope",
                    "Graphs are reflections over y = x"
                ],
                theory: "Linear functions are one-to-one and always invertible. The inverse reverses both the multiplication and addition operations.",
                keyFormulas: {
                    "Original": "f(x) = ax + b",
                    "Inverse": "f⁻¹(x) = (x - b)/a = (1/a)x - b/a",
                    "Slope Relationship": "slope of f⁻¹ = 1/(slope of f)"
                },
                solvingSteps: [
                    "Write y = ax + b",
                    "Swap x and y: x = ay + b",
                    "Solve for y: y = (x - b)/a",
                    "Write as f⁻¹(x) = (x - b)/a",
                    "Verify: f(f⁻¹(x)) = x"
                ],
                examples: [
                    "f(x) = 2x + 3 → f⁻¹(x) = (x - 3)/2",
                    "f(x) = -x + 5 → f⁻¹(x) = -x + 5 (self-inverse)",
                    "f(x) = (1/2)x - 4 → f⁻¹(x) = 2x + 8"
                ]
            },

            quadratic_inverse: {
                title: "Inverse of Quadratic Functions",
                concepts: [
                    "Form: f(x) = ax² + bx + c",
                    "Quadratics are NOT one-to-one on all reals",
                    "Must restrict domain to make invertible",
                    "Two typical restrictions: x ≥ vertex or x ≤ vertex",
                    "Inverse involves square root (±)",
                    "Choose sign based on domain restriction"
                ],
                theory: "Quadratic functions fail the horizontal line test, so we restrict the domain to half of the parabola (either left or right of vertex) to create a one-to-one function.",
                keyFormulas: {
                    "Standard Form": "f(x) = a(x - h)² + k",
                    "Vertex": "(h, k)",
                    "Inverse (right half)": "f⁻¹(x) = h + √((x - k)/a)",
                    "Inverse (left half)": "f⁻¹(x) = h - √((x - k)/a)"
                },
                solvingSteps: [
                    "Convert to vertex form if needed",
                    "Identify vertex and domain restriction",
                    "Write y = a(x - h)² + k",
                    "Swap x and y",
                    "Solve for y using square root",
                    "Choose ± based on domain restriction"
                ],
                domainConsiderations: [
                    "If restricted to x ≥ h, use positive square root",
                    "If restricted to x ≤ h, use negative square root",
                    "Domain of f⁻¹ is range of restricted f"
                ]
            },

            rational_inverse: {
                title: "Inverse of Rational Functions",
                concepts: [
                    "Form: f(x) = (ax + b)/(cx + d)",
                    "Domain excludes values making denominator zero",
                    "Inverse is also rational",
                    "Cross-multiply to find inverse",
                    "Watch for domain restrictions in both f and f⁻¹"
                ],
                theory: "Rational functions of the form (ax+b)/(cx+d) have rational inverses. The inversion process involves cross-multiplication and algebraic manipulation.",
                keyFormulas: {
                    "General Form": "f(x) = (ax + b)/(cx + d)",
                    "Inverse": "f⁻¹(x) = (dx - b)/(-cx + a) or (b - dx)/(cx - a)",
                    "Domain": "x ≠ -d/c for f(x)",
                    "Range": "y ≠ a/c for f(x)"
                },
                solvingSteps: [
                    "Write y = (ax + b)/(cx + d)",
                    "Swap x and y",
                    "Cross-multiply: x(cy + d) = ay + b",
                    "Collect y terms on one side",
                    "Factor out y and solve",
                    "Identify domain and range restrictions"
                ],
                specialCases: [
                    "If ad - bc = 0, no inverse exists",
                    "If a/c = b/d, function is constant (no inverse)",
                    "Self-inverse when a = d and b = -b"
                ]
            },

            exponential_inverse: {
                title: "Inverse of Exponential Functions (Logarithms)",
                concepts: [
                    "Form: f(x) = aᵇˣ or f(x) = aeᵇˣ",
                    "Inverse is logarithmic function",
                    "log and exp are inverse operations",
                    "Natural log (ln) inverts eˣ",
                    "Common log (log₁₀) inverts 10ˣ",
                    "Change of base formula connects different logs"
                ],
                theory: "Exponential functions are one-to-one and always invertible. Their inverses are logarithmic functions. The base of the exponential becomes the base of the logarithm.",
                keyFormulas: {
                    "Exponential": "f(x) = bˣ",
                    "Logarithmic Inverse": "f⁻¹(x) = log_b(x)",
                    "Natural Exponential": "f(x) = eˣ",
                    "Natural Log Inverse": "f⁻¹(x) = ln(x)",
                    "General": "f(x) = abᶜˣ → f⁻¹(x) = (1/c)log_b(x/a)"
                },
                solvingSteps: [
                    "Write y = bˣ",
                    "Swap x and y: x = bʸ",
                    "Apply logarithm: log_b(x) = y",
                    "Write f⁻¹(x) = log_b(x)",
                    "Verify domains and ranges"
                ],
                properties: [
                    "Dom(bˣ) = all reals, Rng(bˣ) = positive reals",
                    "Dom(log_b(x)) = positive reals, Rng(log_b(x)) = all reals",
                    "eˡⁿ⁽ˣ⁾ = x and ln(eˣ) = x"
                ]
            },

            logarithmic_inverse: {
                title: "Inverse of Logarithmic Functions (Exponentials)",
                concepts: [
                    "Form: f(x) = log_b(x) or f(x) = ln(x)",
                    "Inverse is exponential function",
                    "Exponential 'undoes' logarithm",
                    "Domain of log is positive reals",
                    "Range of log is all reals"
                ],
                theory: "Logarithmic functions are inverses of exponential functions. To find the inverse of a log function, we exponentiate.",
                keyFormulas: {
                    "Logarithmic": "f(x) = log_b(x)",
                    "Exponential Inverse": "f⁻¹(x) = bˣ",
                    "Natural Log": "f(x) = ln(x)",
                    "Natural Exp Inverse": "f⁻¹(x) = eˣ",
                    "General": "f(x) = a·log_b(cx + d) + k"
                },
                solvingSteps: [
                    "Write y = log_b(x)",
                    "Swap x and y: x = log_b(y)",
                    "Exponentiate: bˣ = y",
                    "Write f⁻¹(x) = bˣ",
                    "Verify composition"
                ]
            },

            polynomial_inverse: {
                title: "Inverse of Higher-Degree Polynomial Functions",
                concepts: [
                    "Most polynomials not one-to-one on all reals",
                    "Odd-degree polynomials can be invertible",
                    "Even-degree require domain restriction",
                    "Finding inverse may require root-finding",
                    "Cubic inverses exist but may be complex"
                ],
                theory: "Higher-degree polynomials (degree ≥ 3) may or may not have elementary inverse formulas. Odd-degree polynomials that are strictly increasing/decreasing are invertible.",
                approaches: [
                    "Check if function is one-to-one (derivative test)",
                    "For simple cubics, algebraically solve y = x³ + ... for x",
                    "For complex cases, numerical methods or special functions needed",
                    "Consider domain restrictions to make invertible"
                ],
                examples: [
                    "f(x) = x³ → f⁻¹(x) = ∛x (cube root)",
                    "f(x) = x³ + x → inverse exists but no simple formula",
                    "f(x) = x⁴ → not invertible without restriction"
                ]
            },

            radical_inverse: {
                title: "Inverse of Radical Functions",
                concepts: [
                    "Form: f(x) = ⁿ√(ax + b) + c",
                    "Inverse involves raising to power",
                    "Even roots require domain restriction (x ≥ 0 typically)",
                    "Odd roots defined for all reals",
                    "Square root inverse is squaring (with care)"
                ],
                theory: "Radical functions have inverses that involve powers. The nth root is inverted by the nth power.",
                keyFormulas: {
                    "Square Root": "f(x) = √x → f⁻¹(x) = x²",
                    "Cube Root": "f(x) = ∛x → f⁻¹(x) = x³",
                    "General": "f(x) = ⁿ√x → f⁻¹(x) = xⁿ"
                },
                solvingSteps: [
                    "Write y = ⁿ√(ax + b)",
                    "Swap x and y",
                    "Raise both sides to nth power",
                    "Solve for y algebraically",
                    "Consider domain restrictions"
                ],
                domainConsiderations: [
                    "For even n, domain of ⁿ√x is x ≥ 0",
                    "For odd n, domain is all reals",
                    "Must restrict domain of inverse accordingly"
                ]
            },

            trigonometric_inverse: {
                title: "Inverse of Trigonometric Functions",
                concepts: [
                    "Trig functions are periodic (not one-to-one)",
                    "Must restrict domain for inverses",
                    "arcsin, arccos, arctan are standard inverses",
                    "Each has specific domain and range",
                    "Used extensively in calculus and applied math"
                ],
                theory: "Trigonometric functions are periodic and fail the horizontal line test. By restricting to one period, we create invertible functions.",
                keyFormulas: {
                    "arcsin": "f(x) = sin(x), x ∈ [-π/2, π/2] → f⁻¹(x) = arcsin(x), x ∈ [-1, 1]",
                    "arccos": "f(x) = cos(x), x ∈ [0, π] → f⁻¹(x) = arccos(x), x ∈ [-1, 1]",
                    "arctan": "f(x) = tan(x), x ∈ (-π/2, π/2) → f⁻¹(x) = arctan(x), x ∈ ℝ"
                },
                standardRestrictions: {
                    "sin": "[-π/2, π/2]",
                    "cos": "[0, π]",
                    "tan": "(-π/2, π/2)",
                    "sec": "[0, π/2) ∪ (π/2, π]",
                    "csc": "[-π/2, 0) ∪ (0, π/2]",
                    "cot": "(0, π)"
                }
            },

            composition_and_inverses: {
                title: "Function Composition and Inverses",
                concepts: [
                    "Composition: (f ∘ g)(x) = f(g(x))",
                    "Inverse of composition: (f ∘ g)⁻¹ = g⁻¹ ∘ f⁻¹",
                    "Order reverses when finding inverse of composition",
                    "Verification: f(f⁻¹(x)) = x and f⁻¹(f(x)) = x"
                ],
                theory: "When functions are composed, the inverse of the composition is the composition of inverses in reverse order, like undoing steps in reverse.",
                keyFormulas: {
                    "Composition": "(f ∘ g)(x) = f(g(x))",
                    "Inverse of Composition": "(f ∘ g)⁻¹ = g⁻¹ ∘ f⁻¹",
                    "Identity": "f ∘ f⁻¹ = f⁻¹ ∘ f = I (identity function)"
                },
                verificationMethods: [
                    "Compute f(f⁻¹(x)) and simplify to x",
                    "Compute f⁻¹(f(x)) and simplify to x",
                    "Both compositions must equal x (identity)",
                    "Check domain and range compatibility"
                ]
            },

            one_to_one_test: {
                title: "Testing for One-to-One Functions",
                concepts: [
                    "A function is one-to-one if f(a) = f(b) implies a = b",
                    "Horizontal line test: each horizontal line intersects at most once",
                    "Algebraic test: solve f(a) = f(b) and check if a = b",
                    "Derivative test: if f'(x) > 0 or f'(x) < 0 everywhere, one-to-one",
                    "Only one-to-one functions have inverses"
                ],
                theory: "One-to-one (injective) functions map distinct inputs to distinct outputs. This property is necessary and sufficient for a function to have an inverse.",
                testMethods: [
                    "Graphical: horizontal line test",
                    "Algebraic: assume f(a) = f(b), prove a = b",
                    "Calculus: check if f' never changes sign",
                    "Definition: verify no two inputs give same output"
                ],
                examples: [
                    "f(x) = x² NOT one-to-one (f(-2) = f(2) = 4)",
                    "f(x) = x³ IS one-to-one (strictly increasing)",
                    "f(x) = 2x + 1 IS one-to-one (linear with nonzero slope)"
                ]
            },

            domain_range_inverses: {
                title: "Domain and Range of Inverse Functions",
                concepts: [
                    "Domain of f⁻¹ equals range of f",
                    "Range of f⁻¹ equals domain of f",
                    "Complete swap of domain and range",
                    "Must verify both f and f⁻¹ are well-defined",
                    "Restrictions on f carry over to f⁻¹"
                ],
                theory: "The inverse function reverses the input-output relationship, which means domain and range are swapped.",
                keyPrinciples: {
                    "Domain Swap": "Dom(f⁻¹) = Rng(f)",
                    "Range Swap": "Rng(f⁻¹) = Dom(f)",
                    "Notation": "If f: A → B, then f⁻¹: B → A"
                },
                practicalSteps: [
                    "Find domain of original function f",
                    "Find range of original function f",
                    "Domain of f⁻¹ = range of f",
                    "Range of f⁻¹ = domain of f",
                    "Verify inverse function respects these sets"
                ]
            },

            graphical_inverses: {
                title: "Graphing Inverse Functions",
                concepts: [
                    "Graph of f⁻¹ is reflection of f over line y = x",
                    "Points (a, b) on f correspond to (b, a) on f⁻¹",
                    "Swap x and y coordinates to graph inverse",
                    "Symmetry about y = x line",
                    "Intercepts swap: x-intercept of f is y-intercept of f⁻¹"
                ],
                theory: "The geometric relationship between a function and its inverse is a reflection across the line y = x, which swaps the roles of input and output.",
                graphingMethods: [
                    "Reflect each point (a, b) to (b, a)",
                    "Draw y = x line and reflect function across it",
                    "Plot key points and connect",
                    "Use symmetry to check accuracy"
                ],
                properties: [
                    "Increasing function → increasing inverse",
                    "Decreasing function → decreasing inverse",
                    "Concave up ↔ may change concavity",
                    "Asymptotes swap: horizontal ↔ vertical"
                ]
            }
        };
    }

    initializeInverseFunctionSolvers() {
        this.inverseFunctionTypes = {
            linear_inverse: {
                patterns: [
                    /inverse.*linear/i,
                    /f\(x\)\s*=\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)/,
                    /linear.*function.*inverse/i
                ],
                solver: this.solveLinearInverse.bind(this),
                name: 'Linear Function Inverse',
                category: 'linear_inverse',
                description: 'Find inverse of f(x) = ax + b'
            },

            quadratic_inverse: {
                patterns: [
                    /inverse.*quadratic/i,
                    /f\(x\)\s*=\s*([+-]?\d*\.?\d*)x\^2/,
                    /parabola.*inverse/i,
                    /x\^2|x²/
                ],
                solver: this.solveQuadraticInverse.bind(this),
                name: 'Quadratic Function Inverse',
                category: 'quadratic_inverse',
                description: 'Find inverse of f(x) = ax² + bx + c with domain restriction'
            },

            rational_inverse: {
                patterns: [
                    /inverse.*rational/i,
                    /f\(x\)\s*=\s*\(.*\)\s*\/\s*\(.*\)/,
                    /fraction.*inverse/i,
                    /reciprocal/i
                ],
                solver: this.solveRationalInverse.bind(this),
                name: 'Rational Function Inverse',
                category: 'rational_inverse',
                description: 'Find inverse of f(x) = (ax + b)/(cx + d)'
            },

            exponential_inverse: {
                patterns: [
                    /inverse.*exponential/i,
                    /e\^x|exp\(x\)/i,
                    /\d+\^x/,
                    /inverse.*log/i
                ],
                solver: this.solveExponentialInverse.bind(this),
                name: 'Exponential Function Inverse',
                category: 'exponential_inverse',
                description: 'Find inverse of f(x) = bˣ (logarithmic function)'
            },

            logarithmic_inverse: {
                patterns: [
                    /inverse.*log/i,
                    /ln\(x\)|log\(x\)/i,
                    /logarithm.*inverse/i
                ],
                solver: this.solveLogarithmicInverse.bind(this),
                name: 'Logarithmic Function Inverse',
                category: 'logarithmic_inverse',
                description: 'Find inverse of f(x) = log_b(x) (exponential function)'
            },

            radical_inverse: {
                patterns: [
                    /inverse.*radical/i,
                    /sqrt\(x\)|√x/i,
                    /cube.*root/i,
                    /root.*inverse/i
                ],
                solver: this.solveRadicalInverse.bind(this),
                name: 'Radical Function Inverse',
                category: 'radical_inverse',
                description: 'Find inverse of f(x) = ⁿ√x'
            },

            trigonometric_inverse: {
                patterns: [
                    /inverse.*trig/i,
                    /arcsin|arccos|arctan/i,
                    /sin\(x\)|cos\(x\)|tan\(x\)/,
                    /inverse.*sine|inverse.*cosine/i
                ],
                solver: this.solveTrigonometricInverse.bind(this),
                name: 'Trigonometric Function Inverse',
                category: 'trigonometric_inverse',
                description: 'Find inverse of trig functions with restricted domain'
            },

            polynomial_inverse: {
                patterns: [
                    /inverse.*polynomial/i,
                    /x\^3|x³|cubic/i,
                    /x\^4|x⁴/i
                ],
                solver: this.solvePolynomialInverse.bind(this),
                name: 'Polynomial Function Inverse',
                category: 'polynomial_inverse',
                description: 'Find inverse of polynomial functions'
            },

            verify_inverse: {
                patterns: [
                    /verify.*inverse/i,
                    /check.*inverse/i,
                    /prove.*inverse/i,
                    /show.*inverse/i
                ],
                solver: this.verifyInverseFunctions.bind(this),
                name: 'Verify Inverse Functions',
                category: 'verify_inverse',
                description: 'Verify two functions are inverses via composition'
            },

            find_domain_range: {
                patterns: [
                    /domain.*range.*inverse/i,
                    /inverse.*domain/i,
                    /inverse.*range/i
                ],
                solver: this.findDomainRangeInverse.bind(this),
                name: 'Find Domain and Range of Inverse',
                category: 'domain_range',
                description: 'Determine domain and range of inverse function'
            },

            graph_inverse: {
                patterns: [
                    /graph.*inverse/i,
                    /plot.*inverse/i,
                    /sketch.*inverse/i
                ],
                solver: this.graphInverseFunction.bind(this),
                name: 'Graph Inverse Function',
                category: 'graphical',
                description: 'Graph inverse by reflecting over y = x'
            },

            composition_inverse: {
                patterns: [
                    /inverse.*composition/i,
                    /compose.*inverse/i,
                    /\(f.*g\).*inverse/i
                ],
                solver: this.solveCompositionInverse.bind(this),
                name: 'Inverse of Function Composition',
                category: 'composition',
                description: 'Find (f ∘ g)⁻¹ = g⁻¹ ∘ f⁻¹'
            },

            one_to_one_test: {
                patterns: [
                    /one.to.one/i,
                    /horizontal.*line.*test/i,
                    /injective/i,
                    /check.*invertible/i
                ],
                solver: this.testOneToOne.bind(this),
                name: 'Test for One-to-One',
                category: 'one_to_one',
                description: 'Determine if function is one-to-one and invertible'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            linear_inverse: {
                'Swap x and y': [
                    'Forgetting to swap variables',
                    'Swapping incorrectly',
                    'Not understanding why we swap'
                ],
                'Solve for y': [
                    'Algebraic errors when isolating y',
                    'Sign errors in solving',
                    'Not completely isolating y'
                ],
                'Verify composition': [
                    'Not verifying f(f⁻¹(x)) = x',
                    'Computational errors in composition',
                    'Forgetting to check both compositions'
                ]
            },
            quadratic_inverse: {
                'Domain restriction': [
                    'Not specifying domain restriction',
                    'Wrong half of parabola chosen',
                    'Ignoring that quadratics need restriction'
                ],
                'Square root sign': [
                    'Wrong sign (+ or -) in square root',
                    'Not matching sign to domain',
                    'Including both ± when only one is valid'
                ],
                'Vertex form': [
                    'Not converting to vertex form',
                    'Errors in completing the square',
                    'Incorrect vertex identification'
                ]
            },
            rational_inverse: {
                'Cross multiplication': [
                    'Errors in cross-multiplying',
                    'Not distributing correctly',
                    'Sign errors after multiplying'
                ],
                'Domain restrictions': [
                    'Not identifying excluded values',
                    'Missing x ≠ -d/c restriction',
                    'Not checking denominator of inverse'
                ],
                'Algebraic simplification': [
                    'Errors in collecting y terms',
                    'Factoring mistakes',
                    'Not simplifying final answer'
                ]
            },
            exponential_inverse: {
                'Applying logarithm': [
                    'Using wrong logarithm base',
                    'Not applying log to both sides',
                    'Logarithm property errors'
                ],
                'Domain awareness': [
                    'Forgetting log domain is x > 0',
                    'Not noting range is all reals',
                    'Missing domain swap'
                ]
            },
            logarithmic_inverse: {
                'Exponentiation': [
                    'Using wrong base',
                    'Not exponentiating correctly',
                    'Errors in exponential properties'
                ],
                'Domain/Range': [
                    'Confusing domain and range',
                    'Not swapping correctly',
                    'Missing restrictions'
                ]
            },
            verify_inverse: {
                'Composition order': [
                    'Wrong order in composition',
                    'Only checking one direction',
                    'Not simplifying compositions fully'
                ],
                'Algebraic errors': [
                    'Computational mistakes',
                    'Not simplifying to x',
                    'Sign errors in substitution'
                ]
            },
            one_to_one: {
                'Horizontal line test': [
                    'Incorrect application of test',
                    'Not considering entire domain',
                    'Misinterpreting graph'
                ],
                'Algebraic test': [
                    'Errors in solving f(a) = f(b)',
                    'Not concluding a = b properly',
                    'Circular reasoning'
                ]
            }
        };

        this.errorPrevention = {
            swap_variables: {
                reminder: 'Always swap x and y to find inverse',
                method: 'Write "swap x ↔ y" as explicit step'
            },
            solve_carefully: {
                reminder: 'Solve for y completely and carefully',
                method: 'Check each algebraic step'
            },
            domain_restrictions: {
                reminder: 'Identify domain restrictions for both f and f⁻¹',
                method: 'List excluded values explicitly'
            },
            verify_composition: {
                reminder: 'Always verify by composing f and f⁻¹',
                method: 'Compute both f(f⁻¹(x)) and f⁻¹(f(x))'
            },
            square_root_sign: {
                reminder: 'Choose + or - based on domain restriction',
                method: 'Check which half of parabola is being inverted'
            },
            logarithm_base: {
                reminder: 'Match logarithm base to exponential base',
                method: 'If f(x) = bˣ, then f⁻¹(x) = log_b(x)'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Understanding what the inverse does and why it exists',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Step-by-step process to find the inverse',
                language: 'algorithmic and systematic'
            },
            visual: {
                focus: 'Graphical understanding and y = x reflection',
                language: 'spatial and visual'
            },
            algebraic: {
                focus: 'Formal algebraic manipulation and properties',
                language: 'precise mathematical notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple terms, avoid jargon',
                detail: 'essential steps only',
                examples: 'concrete, simple functions'
            },
            intermediate: {
                vocabulary: 'standard mathematical terminology',
                detail: 'main steps with reasoning',
                examples: 'variety of function types'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible',
                detail: 'every step with analogies',
                examples: 'real-world analogies',
                analogies: true
            },
            detailed: {
                vocabulary: 'full technical vocabulary',
                detail: 'comprehensive with theory',
                examples: 'abstract and general'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery',
                examples: 'carefully sequenced'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            temperature_conversion: {
                scenario: "Converting between Fahrenheit and Celsius",
                function: "C = (5/9)(F - 32)",
                inverse: "F = (9/5)C + 32",
                context: "Inverse functions allow bidirectional conversion",
                application: "Weather, cooking, science"
            },
            currency_exchange: {
                scenario: "Converting between currencies",
                function: "dollars = euros × rate",
                inverse: "euros = dollars / rate",
                context: "Exchange rates define inverse operations",
                application: "International travel, finance"
            },
            encoding_decoding: {
                scenario: "Encoding messages and decoding them",
                function: "encoded = encode(message)",
                inverse: "message = decode(encoded)",
                context: "Inverse functions restore original information",
                application: "Cryptography, data compression, security"
            },
            distance_speed_time: {
                scenario: "Finding time from distance and speed",
                function: "d = rt (distance = rate × time)",
                inverse: "t = d/r (time from distance and rate)",
                context: "Solving for different variables requires inverses",
                application: "Trip planning, physics, engineering"
            },
            volume_radius: {
                scenario: "Finding radius from sphere volume",
                function: "V = (4/3)πr³",
                inverse: "r = ∛(3V/(4π))",
                context: "Inverse formulas find dimensions from measurements",
                application: "Manufacturing, design, science"
            },
            compound_interest: {
                scenario: "Finding time to reach investment goal",
                function: "A = P(1 + r)ᵗ",
                inverse: "t = log(A/P) / log(1 + r)",
                context: "Logarithms invert exponential growth",
                application: "Financial planning, investments"
            },
            pH_concentration: {
                scenario: "pH scale and hydrogen ion concentration",
                function: "pH = -log₁₀[H⁺]",
                inverse: "[H⁺] = 10⁻ᵖᴴ",
                context: "Logarithmic scale with exponential inverse",
                application: "Chemistry, biology, environmental science"
            },
            decibels: {
                scenario: "Sound intensity and decibel scale",
                function: "dB = 10 log₁₀(I/I₀)",
                inverse: "I = I₀ × 10^(dB/10)",
                context: "Logarithmic scale inverted to find intensity",
                application: "Acoustics, audio engineering"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            linear_inverse: {
                skills: ['Solving linear equations', 'Swapping variables', 'Function notation'],
                priorKnowledge: ['Linear functions', 'Inverse operations', 'Variable manipulation'],
                checkQuestions: [
                    "Solve for y: x = 2y + 3",
                    "What does f(x) mean?",
                    "What is the inverse operation of addition?"
                ]
            },
            quadratic_inverse: {
                skills: ['Vertex form', 'Square roots', 'Domain restrictions', 'Completing the square'],
                priorKnowledge: ['Parabolas', 'One-to-one concept', 'Horizontal line test'],
                checkQuestions: [
                    "What is the vertex of f(x) = (x - 2)² + 3?",
                    "Solve x² = 25 for x",
                    "Why does x² fail horizontal line test?"
                ]
            },
            rational_inverse: {
                skills: ['Cross-multiplication', 'Rational equations', 'Domain identification'],
                priorKnowledge: ['Fraction operations', 'Excluded values', 'Asymptotes'],
                checkQuestions: [
                    "Solve (x + 1)/(x - 2) = 3",
                    "What values are excluded from f(x) = 1/(x - 5)?",
                    "Cross-multiply: a/b = c/d"
                ]
            },
            exponential_inverse: {
                skills: ['Logarithms', 'Exponential equations', 'Log properties'],
                priorKnowledge: ['Exponential functions', 'Logarithm definition', 'Change of base'],
                checkQuestions: [
                    "What is log_b(bˣ)?",
                    "Solve 2ˣ = 8",
                    "What is ln(e)?"
                ]
            },
            logarithmic_inverse: {
                skills: ['Exponentiation', 'Log equations', 'Exponential properties'],
                priorKnowledge: ['Logarithmic functions', 'Exponentials', 'Domain of log'],
                checkQuestions: [
                    "What is e^(ln(x))?",
                    "Solve ln(x) = 2",
                    "What is the domain of ln(x)?"
                ]
            },
            radical_inverse: {
                skills: ['Radicals and roots', 'Raising to powers', 'Domain restrictions'],
                priorKnowledge: ['nth roots', 'Power operations', 'Even vs odd roots'],
                checkQuestions: [
                    "What is (√x)²?",
                    "Solve ∛x = 2",
                    "What is the domain of √x?"
                ]
            },
            trigonometric_inverse: {
                skills: ['Trig functions', 'Radian measure', 'Unit circle'],
                priorKnowledge: ['Periodicity', 'Domain restrictions', 'arcsin, arccos, arctan'],
                checkQuestions: [
                    "What is sin(π/2)?",
                    "Why must we restrict domain of sin for inverse?",
                    "What is arcsin(1)?"
                ]
            },
            verify_inverse: {
                skills: ['Function composition', 'Simplification', 'Identity function'],
                priorKnowledge: ['Composition notation', 'Substitution', 'Simplifying expressions'],
                checkQuestions: [
                    "What is (f ∘ g)(x)?",
                    "What should f(f⁻¹(x)) equal?",
                    "Simplify f(g(x)) if f(x) = 2x and g(x) = x/2"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            undoing_operations: {
                description: "Inverse as 'undoing' what function does",
                analogy: "Like tying and untying shoes, or locking and unlocking",
                visualization: "Flow diagram showing forward and reverse",
                suitableFor: ['all_types'],
                explanation: "If f takes you from A to B, f⁻¹ takes you back from B to A"
            },
            reflection_graph: {
                description: "Graph of inverse is reflection over y = x",
                analogy: "Mirror image across diagonal line",
                visualization: "Plot function and its reflection",
                suitableFor: ['all_types'],
                explanation: "Swapping x and y geometrically means reflecting over y = x"
            },
            input_output_swap: {
                description: "Inverse swaps inputs and outputs",
                analogy: "If f(2) = 5, then f⁻¹(5) = 2",
                visualization: "Arrow diagrams showing domain to range",
                suitableFor: ['all_types'],
                explanation: "Inverse reverses the mapping"
            },
            domain_range_swap: {
                description: "Domain and range swap for inverse",
                analogy: "What goes in becomes what comes out, and vice versa",
                visualization: "Set diagrams with arrows reversed",
                suitableFor: ['all_types'],
                explanation: "Dom(f⁻¹) = Rng(f), Rng(f⁻¹) = Dom(f)"
            },
            algebraic_reversal: {
                description: "Algebraically solving for original input",
                analogy: "Working backwards through operations",
                visualization: "Operation flow chart in reverse",
                suitableFor: ['linear', 'rational', 'polynomial'],
                explanation: "Swap x and y, then solve for y"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Find inverse of f(x) = 2x + 3",
                    solution: "f⁻¹(x) = (x - 3)/2",
                    steps: ["y = 2x + 3", "x = 2y + 3", "x - 3 = 2y", "y = (x-3)/2"],
                    difficulty: "easy"
                },
                {
                    problem: "Find inverse of f(x) = x/5",
                    solution: "f⁻¹(x) = 5x",
                    steps: ["y = x/5", "x = y/5", "5x = y"],
                    difficulty: "easy"
                },
                {
                    problem: "Find inverse of f(x) = x - 7",
                    solution: "f⁻¹(x) = x + 7",
                    steps: ["y = x - 7", "x = y - 7", "x + 7 = y"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Find inverse of f(x) = (x + 1)/(x - 2)",
                    solution: "f⁻¹(x) = (2x + 1)/(x - 1)",
                    steps: ["y = (x+1)/(x-2)", "x = (y+1)/(y-2)", "x(y-2) = y+1", "xy - 2x = y + 1", "xy - y = 2x + 1", "y(x-1) = 2x+1", "y = (2x+1)/(x-1)"],
                    difficulty: "medium"
                },
                {
                    problem: "Find inverse of f(x) = √(x + 3)",
                    solution: "f⁻¹(x) = x² - 3",
                    steps: ["y = √(x+3)", "x = √(y+3)", "x² = y + 3", "y = x² - 3"],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Find inverse of f(x) = 2ˣ",
                    solution: "f⁻¹(x) = log₂(x)",
                    steps: ["y = 2ˣ", "x = 2ʸ", "log₂(x) = y"],
                    difficulty: "hard"
                },
                {
                    problem: "Find inverse of f(x) = ln(x - 1) + 2",
                    solution: "f⁻¹(x) = e^(x-2) + 1",
                    steps: ["y = ln(x-1) + 2", "x = ln(y-1) + 2", "x - 2 = ln(y-1)", "e^(x-2) = y - 1", "y = e^(x-2) + 1"],
                    difficulty: "hard"
                }
            ],
            byType: {
                linear: [
                    { problem: "f(x) = 3x - 5", solution: "f⁻¹(x) = (x + 5)/3" },
                    { problem: "f(x) = -2x + 1", solution: "f⁻¹(x) = (1 - x)/2" },
                    { problem: "f(x) = x/4 + 2", solution: "f⁻¹(x) = 4(x - 2)" }
                ],
                quadratic: [
                    { problem: "f(x) = x², x ≥ 0", solution: "f⁻¹(x) = √x" },
                    { problem: "f(x) = (x - 1)² + 2, x ≥ 1", solution: "f⁻¹(x) = 1 + √(x - 2)" }
                ],
                exponential: [
                    { problem: "f(x) = eˣ", solution: "f⁻¹(x) = ln(x)" },
                    { problem: "f(x) = 3ˣ", solution: "f⁻¹(x) = log₃(x)" }
                ],
                logarithmic: [
                    { problem: "f(x) = ln(x)", solution: "f⁻¹(x) = eˣ" },
                    { problem: "f(x) = log₁₀(x)", solution: "f⁻¹(x) = 10ˣ" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            inverse_notation: {
                misconception: "f⁻¹(x) means 1/f(x) (reciprocal)",
                reality: "f⁻¹(x) is the inverse function, NOT the reciprocal",
                correctiveExample: "If f(x) = 2x, then f⁻¹(x) = x/2, NOT 1/(2x)",
                commonIn: ['all_types']
            },
            domain_restriction_ignored: {
                misconception: "Quadratics have inverses without restriction",
                reality: "Must restrict domain to one side of vertex",
                correctiveExample: "f(x) = x² needs restriction like x ≥ 0 to be invertible",
                commonIn: ['quadratic_inverse']
            },
            both_square_roots: {
                misconception: "Including ± when solving for inverse of quadratic",
                reality: "Choose + or - based on which half of parabola",
                correctiveExample: "If x ≥ 0, use + only; if x ≤ 0, use - only",
                commonIn: ['quadratic_inverse']
            },
            forget_to_swap: {
                misconception: "Solving for y without swapping x and y first",
                reality: "Must swap x and y before solving",
                correctiveExample: "From y = 2x + 1, swap to x = 2y + 1, then solve",
                commonIn: ['all_types']
            },
            domain_range_confusion: {
                misconception: "Thinking domain of f⁻¹ equals domain of f",
                reality: "Domain of f⁻¹ equals range of f (they swap)",
                correctiveExample: "If Dom(f) = [0,∞) and Rng(f) = [2,∞), then Dom(f⁻¹) = [2,∞)",
                commonIn: ['domain_range']
            },
            composition_order: {
                misconception: "(f ∘ g)⁻¹ = f⁻¹ ∘ g⁻¹",
                reality: "(f ∘ g)⁻¹ = g⁻¹ ∘ f⁻¹ (order reverses)",
                correctiveExample: "Like putting on socks then shoes: to undo, remove shoes first, then socks",
                commonIn: ['composition']
            },
            one_composition_only: {
                misconception: "Only checking f(f⁻¹(x)) = x",
                reality: "Must verify BOTH f(f⁻¹(x)) = x AND f⁻¹(f(x)) = x",
                correctiveExample: "Both compositions must equal x for true inverses",
                commonIn: ['verify_inverse']
            },
            log_base_confusion: {
                misconception: "Using natural log for all exponentials",
                reality: "Log base must match exponential base",
                correctiveExample: "Inverse of 2ˣ is log₂(x), not ln(x)",
                commonIn: ['exponential_inverse']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            inverse_as_undoing: {
                analogy: "Tying and untying shoes",
                explanation: "Just as untying undoes tying, the inverse function undoes what the original function does",
                suitableFor: ['all_types'],
                ELI5: "If f is like putting on your coat, f⁻¹ is like taking off your coat"
            },
            reflection_mirror: {
                analogy: "Mirror reflection",
                explanation: "The inverse graph is like a mirror image of the original across the line y = x",
                suitableFor: ['graphical'],
                ELI5: "Hold a mirror along the line y = x and you see the inverse function!"
            },
            backward_recipe: {
                analogy: "Following a recipe backwards",
                explanation: "If a recipe tells you steps to make a dish, the inverse is figuring out ingredients from the finished dish",
                suitableFor: ['all_types'],
                ELI5: "Function is the recipe forward, inverse is figuring out what went into making it"
            },
            lock_and_key: {
                analogy: "Locking and unlocking",
                explanation: "Function is like locking (transforms input), inverse is unlocking (retrieves original)",
                suitableFor: ['all_types'],
                ELI5: "f locks it up, f⁻¹ unlocks it back"
            },
            encode_decode: {
                analogy: "Secret codes",
                explanation: "If f encodes a message, f⁻¹ decodes it back",
                suitableFor: ['all_types'],
                ELI5: "Function is writing in secret code, inverse is translating back to normal"
            },
            stacked_blocks: {
                analogy: "Stacking and unstacking blocks",
                explanation: "Function builds up operations; inverse tears them down in reverse order",
                suitableFor: ['composition'],
                ELI5: "To undo stacking blocks, you take them off from top to bottom (reverse order)"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            linear_inverse: {
                level1: "What is the first step to find an inverse?",
                level2: "Replace f(x) with y, then swap x and y",
                level3: "Now solve for y",
                level4: "For f(x) = {a}x + {b}, inverse is f⁻¹(x) = (x - {b})/{a}"
            },
            quadratic_inverse: {
                level1: "Can you invert a quadratic on all of ℝ?",
                level2: "No, you need to restrict the domain first",
                level3: "Choose x ≥ vertex or x ≤ vertex, then swap and solve",
                level4: "Use the appropriate sign (+ or -) in the square root based on restriction"
            },
            rational_inverse: {
                level1: "How do you solve equations with fractions?",
                level2: "Cross-multiply after swapping x and y",
                level3: "Collect all y terms on one side, factor out y",
                level4: "Solve y = ... and identify domain restrictions"
            },
            exponential_inverse: {
                level1: "What operation undoes exponentiation?",
                level2: "Logarithms undo exponentials",
                level3: "After swapping, apply logarithm to both sides",
                level4: "If f(x) = bˣ, then f⁻¹(x) = log_b(x)"
            },
            logarithmic_inverse: {
                level1: "What operation undoes logarithm?",
                level2: "Exponentiation undoes logarithm",
                level3: "After swapping, exponentiate both sides",
                level4: "If f(x) = log_b(x), then f⁻¹(x) = bˣ"
            },
            verify_inverse: {
                level1: "How do you verify two functions are inverses?",
                level2: "Compose them and check if result is x",
                level3: "Check BOTH f(f⁻¹(x)) and f⁻¹(f(x))",
                level4: "Both must simplify to x (identity function)"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Find inverse of f(x) = 2x + 5",
                    answer: "(x - 5)/2",
                    assesses: "linear_inverse",
                    difficulty: "basic"
                },
                {
                    question: "Find inverse of f(x) = x³",
                    answer: "∛x",
                    assesses: "radical_inverse",
                    difficulty: "basic"
                },
                {
                    question: "Find inverse of f(x) = eˣ",
                    answer: "ln(x)",
                    assesses: "exponential_inverse",
                    difficulty: "intermediate"
                },
                {
                    question: "Is f(x) = x² one-to-one on all reals?",
                    answer: "No",
                    assesses: "one_to_one",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "What is the first step to find f⁻¹?",
                    options: ["Solve for x", "Swap x and y", "Graph it", "Find derivative"],
                    correct: "Swap x and y",
                    explanation: "After writing y = f(x), swap variables"
                },
                {
                    question: "What must be true for f⁻¹ to exist?",
                    options: ["f is continuous", "f is one-to-one", "f is differentiable", "f is polynomial"],
                    correct: "f is one-to-one",
                    explanation: "Only one-to-one functions have inverses"
                },
                {
                    question: "If Dom(f) = [0, ∞) and Rng(f) = [2, ∞), what is Dom(f⁻¹)?",
                    options: ["[0, ∞)", "[2, ∞)", "All reals", "[-∞, 2]"],
                    correct: "[2, ∞)",
                    explanation: "Dom(f⁻¹) = Rng(f)"
                }
            ],
            summative: [
                {
                    question: "Find inverse of f(x) = (3x - 1)/(x + 2) and verify",
                    answer: "f⁻¹(x) = (-2x - 1)/(x - 3)",
                    showsWork: true,
                    rubric: {
                        swap: 1,
                        cross_multiply: 1,
                        solve: 1,
                        verify_composition: 2
                    }
                },
                {
                    question: "Find inverse of f(x) = ln(2x - 1) + 3",
                    answer: "f⁻¹(x) = (e^(x-3) + 1)/2",
                    showsWork: true,
                    rubric: {
                        swap: 1,
                        isolate_log: 1,
                        exponentiate: 1,
                        solve: 1,
                        domain: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "f(x) = x + 7",
                    "f(x) = 3x",
                    "f(x) = -x",
                    "f(x) = x/5"
                ],
                medium: [
                    "f(x) = 2x - 3",
                    "f(x) = (x + 1)/2",
                    "f(x) = √(x + 4)",
                    "f(x) = x² - 1, x ≥ 0"
                ],
                hard: [
                    "f(x) = (2x + 3)/(x - 1)",
                    "f(x) = e^(2x - 1)",
                    "f(x) = ln(x² + 1)",
                    "f(x) = (x³ + 1)^(1/3)"
                ]
            },
            byObjective: {
                canFindLinearInverse: [
                    "f(x) = 4x + 1",
                    "f(x) = -2x + 5",
                    "f(x) = x/3 - 2"
                ],
                canFindQuadraticInverse: [
                    "f(x) = x², x ≥ 0",
                    "f(x) = (x + 2)² - 1, x ≥ -2",
                    "f(x) = -x² + 4, x ≤ 0"
                ],
                canFindRationalInverse: [
                    "f(x) = 1/x",
                    "f(x) = (x + 1)/(x - 1)",
                    "f(x) = (2x + 3)/(4x - 1)"
                ],
                canVerifyInverse: [
                    "Verify f(x) = 2x + 1 and g(x) = (x - 1)/2 are inverses",
                    "Verify f(x) = x³ and g(x) = ∛x are inverses"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "linear": "Swap and solve linear equation",
                "quadratic": "Restrict domain, swap, take square root with appropriate sign",
                "rational": "Swap and cross-multiply, solve",
                "exponential": "Swap and apply logarithm",
                "logarithmic": "Swap and exponentiate",
                "radical": "Swap and raise to power",
                "trigonometric": "Use arc-functions with restricted domain",
                "composition": "Invert each function and reverse order"
            },
            whenToUseWhat: {
                swap_variables: "For all inverse finding",
                restrict_domain: "When function not one-to-one (e.g., quadratics, trig)",
                cross_multiply: "For rational functions",
                apply_log: "For exponential functions",
                exponentiate: "For logarithmic functions",
                reflection: "For graphical approach"
            },
            methodSelection: {
                factorsToConsider: [
                    "Type of function (linear, quadratic, etc.)",
                    "One-to-one status",
                    "Domain restrictions needed",
                    "Complexity of algebra involved"
                ],
                generalApproach: [
                    "1. Check if function is one-to-one",
                    "2. Restrict domain if necessary",
                    "3. Replace f(x) with y",
                    "4. Swap x and y",
                    "5. Solve for y",
                    "6. Replace y with f⁻¹(x)",
                    "7. Identify domain and range",
                    "8. Verify by composition"
                ]
            },
            optimizationTips: {
                "Simplify first": "Simplify f(x) before finding inverse",
                "Choose restriction carefully": "Pick domain restriction that makes sense for context",
                "Verify both ways": "Check both f(f⁻¹(x)) and f⁻¹(f(x))",
                "Graph to visualize": "Graphing helps verify reflection over y = x"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Linear Inverse Sprint",
                    timeLimit: 120,
                    problems: [
                        "f(x) = x + 5",
                        "f(x) = 2x - 3",
                        "f(x) = -x + 1",
                        "f(x) = x/4 + 2",
                        "f(x) = 3 - 2x"
                    ]
                },
                {
                    name: "Mixed Inverse Challenge",
                    timeLimit: 300,
                    problems: [
                        "f(x) = 2x + 1",
                        "f(x) = x², x ≥ 0",
                        "f(x) = 1/(x - 1)",
                        "f(x) = eˣ",
                        "f(x) = √(x + 3)"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Self-Inverse Functions",
                    problem: "Find all linear functions f(x) = ax + b that are self-inverse (f = f⁻¹)",
                    solution: "a = -1 (any b), e.g., f(x) = -x + b or a = 1, b = 0"
                },
                {
                    name: "Composition Puzzle",
                    problem: "If (f ∘ g)(x) = 2x + 3 and g(x) = x + 1, find f(x)",
                    solution: "f(x) = 2x + 1"
                },
                {
                    name: "Domain Detective",
                    problem: "If f⁻¹(x) = √(x - 2) + 1, what is the domain of f?",
                    solution: "[1, ∞)"
                }
            ],
            applications: [
                {
                    scenario: "Temperature Conversion",
                    problem: "C = (5/9)(F - 32). Find F in terms of C.",
                    solution: "F = (9/5)C + 32"
                },
                {
                    scenario: "Investment Growth",
                    problem: "A = 1000(1.05)ᵗ. Find t when A = 1500.",
                    solution: "t = log₁.₀₅(1.5) ≈ 8.31 years"
                },
                {
                    scenario: "Volume and Radius",
                    problem: "V = (4/3)πr³. Find r when V = 100.",
                    solution: "r = ∛(300/(4π)) ≈ 2.88"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "f(x) = 2x + 3",
                        "x = 2y + 3",  // Correct
                        "x - 3 = 2y",  // Correct
                        "f⁻¹(x) = x - 3/2"  // ERROR: should be (x-3)/2
                    ],
                    correctAnswer: "f⁻¹(x) = (x - 3)/2",
                    errorType: "Missing parentheses in final answer"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "f(x) = x², find inverse",
                        "y = x²",
                        "x = y²",
                        "√x = y",  // ERROR: didn't restrict domain
                        "f⁻¹(x) = ±√x"  // ERROR: can't have ±
                    ],
                    correctAnswer: "Need domain restriction first",
                    errorType: "Forgot to restrict domain"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "f(x) = 3ˣ",
                        "y = 3ˣ",
                        "x = 3ʸ",
                        "ln(x) = y"  // ERROR: should use log₃
                    ],
                    correctAnswer: "f⁻¹(x) = log₃(x)",
                    errorType: "Used wrong logarithm base"
                }
            ]
        };
    }

    initializeCompositionDatabase() {
        this.compositionRules = {
            definition: "(f ∘ g)(x) = f(g(x))",
            inverseComposition: {
                rule: "(f ∘ g)⁻¹ = g⁻¹ ∘ f⁻¹",
                explanation: "Order reverses when taking inverse of composition",
                analogy: "Like putting on socks then shoes: to undo, remove shoes first, then socks"
            },
            verification: {
                forward: "f(f⁻¹(x)) = x for all x in Dom(f⁻¹)",
                backward: "f⁻¹(f(x)) = x for all x in Dom(f)",
                requirement: "Both must hold for true inverse relationship"
            },
            examples: [
                {
                    functions: "f(x) = 2x, g(x) = x + 3",
                    composition: "(f ∘ g)(x) = 2(x + 3) = 2x + 6",
                    inverseComp: "(f ∘ g)⁻¹ = g⁻¹ ∘ f⁻¹ = (x/2) - 3"
                }
            ]
        };
    }

    initializeGraphicalDatabase() {
        this.graphicalProperties = {
            reflection: {
                principle: "Graph of f⁻¹ is reflection of f over y = x",
                method: "Swap x and y coordinates of all points",
                keyLine: "y = x is the line of symmetry"
            },
            pointMapping: {
                principle: "If (a, b) is on f, then (b, a) is on f⁻¹",
                example: "If f(2) = 5, then f⁻¹(5) = 2"
            },
            interceptSwap: {
                principle: "x-intercept of f becomes y-intercept of f⁻¹",
                example: "If f has x-intercept at (3, 0), then f⁻¹ has y-intercept at (0, 3)"
            },
            asymptoteSwap: {
                principle: "Horizontal asymptotes become vertical, and vice versa",
                example: "If f has horizontal asymptote y = 2, then f⁻¹ has vertical asymptote x = 2"
            },
            monotonicity: {
                principle: "Increasing function has increasing inverse; decreasing has decreasing inverse",
                note: "Concavity may change"
            }
        };
    }

    // ==================== MAIN SOLVER METHOD ====================

    solveInverseFunctionProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseInverseFunctionProblem(equation, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveInverseFunctionProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateInverseFunctionSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateInverseFunctionGraphData();

            // Generate workbook
            this.generateInverseFunctionWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                inverse: this.currentSolution?.inverse,
                domain: this.currentSolution?.domain,
                range: this.currentSolution?.range
            };

        } catch (error) {
            throw new Error(`Failed to solve inverse function problem: ${error.message}`);
        }
    }

    parseInverseFunctionProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.inverseFunctionTypes[problemType]) {
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

        // Auto-detect inverse function problem type
        for (const [type, config] of Object.entries(this.inverseFunctionTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractInverseFunctionParameters(match, type, cleanInput, parameters);

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

        // Default to linear inverse if parameters provided
        if (parameters.a !== undefined || parameters.b !== undefined) {
            return {
                originalInput: equation || 'Linear function',
                cleanInput: cleanInput,
                type: 'linear_inverse',
                scenario: scenario,
                parameters: {
                    a: parameters.a || 1,
                    b: parameters.b || 0,
                    ...parameters
                },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize inverse function problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/≠/g, '!=')
            .replace(/\*\*/g, '^')
            .trim();
    }

    extractInverseFunctionParameters(match, type, cleanInput, providedParams) {
        const params = { ...providedParams };

        if (!match && !cleanInput) return params;

        // Extract based on function type
        switch(type) {
            case 'linear_inverse':
                if (match && match.length > 2) {
                    params.a = this.parseCoefficient(match[1]) || 1;
                    params.b = this.parseCoefficient(match[2]) || 0;
                }
                break;

            case 'quadratic_inverse':
                // Extract coefficients for ax² + bx + c or vertex form
                params.restrictionType = params.restrictionType || 'right'; // 'right' or 'left' of vertex
                break;

            case 'rational_inverse':
                // Extract numerator and denominator coefficients
                break;

            case 'exponential_inverse':
                // Extract base
                params.base = params.base || 'e';
                break;

            case 'logarithmic_inverse':
                // Extract base
                params.base = params.base || 'e';
                break;
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

    solveInverseFunctionProblem_Internal(problem) {
        const solver = this.inverseFunctionTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for inverse function problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // ==================== INVERSE FUNCTION SOLVERS ====================

    solveLinearInverse(problem) {
        const { a, b } = problem.parameters;

        if (Math.abs(a) < 1e-10) {
            return {
                type: 'Linear Function Inverse',
                originalFunction: `f(x) = ${b}`,
                error: 'Constant function (not one-to-one)',
                inverse: null,
                explanation: 'Constant functions do not have inverses'
            };
        }

        const inverse = `(x - ${b})/${a}`;
        const simplifiedInverse = a === 1 ? `x - ${b}` : inverse;

        return {
            type: 'Linear Function Inverse',
            originalFunction: `f(x) = ${a}x + ${b}`,
            inverse: `f⁻¹(x) = ${simplifiedInverse}`,
            inverseCoefficients: {
                a: 1/a,
                b: -b/a
            },
            domain: 'All real numbers',
            range: 'All real numbers',
            inverseDomain: 'All real numbers',
            inverseRange: 'All real numbers',
            verification: {
                forward: `f(f⁻¹(x)) = ${a}((x - ${b})/${a}) + ${b} = x`,
                backward: `f⁻¹(f(x)) = (${a}x + ${b} - ${b})/${a} = x`
            },
            category: 'linear_inverse'
        };
    }

    solveQuadraticInverse(problem) {
        const { a, h, k, restrictionType } = problem.parameters;
        // Assuming vertex form: f(x) = a(x - h)² + k

        const restriction = restrictionType === 'left' ? `x ≤ ${h}` : `x ≥ ${h}`;
        const sign = restrictionType === 'left' ? '-' : '+';

        return {
            type: 'Quadratic Function Inverse',
            originalFunction: `f(x) = ${a}(x - ${h})² + ${k}`,
            domainRestriction: restriction,
            inverse: `f⁻¹(x) = ${h} ${sign} √((x - ${k})/${a})`,
            explanation: `Restricted to ${restriction} to make one-to-one`,
            domain: restriction,
            range: a > 0 ? `y ≥ ${k}` : `y ≤ ${k}`,
            inverseDomain: a > 0 ? `x ≥ ${k}` : `x ≤ ${k}`,
            inverseRange: restriction,
            verification: {
                note: 'Verify by composition',
                forward: `f(f⁻¹(x)) = x for x in domain of f⁻¹`,
                backward: `f⁻¹(f(x)) = x for x in restricted domain of f`
            },
            category: 'quadratic_inverse'
        };
    }

    solveRationalInverse(problem) {
        const { a, b, c, d } = problem.parameters;
        // f(x) = (ax + b)/(cx + d)

        // Check if inverse exists
        const determinant = a * d - b * c;
        if (Math.abs(determinant) < 1e-10) {
            return {
                type: 'Rational Function Inverse',
                originalFunction: `f(x) = (${a}x + ${b})/(${c}x + ${d})`,
                error: 'No inverse exists (ad - bc = 0)',
                inverse: null
            };
        }

        return {
            type: 'Rational Function Inverse',
            originalFunction: `f(x) = (${a}x + ${b})/(${c}x + ${d})`,
            inverse: `f⁻¹(x) = (${d}x - ${b})/(${-c}x + ${a})`,
            simplifiedInverse: `f⁻¹(x) = (${d}x - ${b})/(${a - c}x)`,
            domain: `x ≠ ${-d/c}`,
            range: `y ≠ ${a/c}`,
            inverseDomain: `x ≠ ${a/c}`,
            inverseRange: `y ≠ ${-d/c}`,
            verification: {
                note: 'Verify by composition'
            },
            category: 'rational_inverse'
        };
    }

    solveExponentialInverse(problem) {
        const { base, coefficient, constant } = problem.parameters;
        const b = base || 'e';
        const a = coefficient || 1;
        const k = constant || 0;

        return {
            type: 'Exponential Function Inverse',
            originalFunction: `f(x) = ${a === 1 ? '' : a}${b}^x${k !== 0 ? ` + ${k}` : ''}`,
            inverse: `f⁻¹(x) = log_${b}((x${k !== 0 ? ` - ${k}` : ''})${a !== 1 ? `/${a}` : ''})`,
            naturalForm: b === 'e' ? `f⁻¹(x) = ln((x${k !== 0 ? ` - ${k}` : ''})${a !== 1 ? `/${a}` : ''})` : null,
            domain: 'All real numbers',
            range: k !== 0 ? `y > ${k}` : 'y > 0',
            inverseDomain: k !== 0 ? `x > ${k}` : 'x > 0',
            inverseRange: 'All real numbers',
            explanation: 'Logarithm is inverse of exponential',
            category: 'exponential_inverse'
        };
    }

    solveLogarithmicInverse(problem) {
        const { base, coefficient, constant } = problem.parameters;
        const b = base || 'e';
        const a = coefficient || 1;
        const k = constant || 0;

        return {
            type: 'Logarithmic Function Inverse',
            originalFunction: `f(x) = ${a === 1 ? '' : `${a} `}log_${b}(x)${k !== 0 ? ` + ${k}` : ''}`,
            inverse: `f⁻¹(x) = ${b}^((x${k !== 0 ? ` - ${k}` : ''})${a !== 1 ? `/${a}` : ''})`,
            naturalForm: b === 'e' ? `f⁻¹(x) = e^((x${k !== 0 ? ` - ${k}` : ''})${a !== 1 ? `/${a}` : ''})` : null,
            domain: 'x > 0',
            range: 'All real numbers',
            inverseDomain: 'All real numbers',
            inverseRange: 'y > 0',
            explanation: 'Exponential is inverse of logarithm',
            category: 'logarithmic_inverse'
        };
    }

    solveRadicalInverse(problem) {
        const { n, a, b } = problem.parameters;
        // f(x) = ⁿ√(ax + b)
        const rootType = n || 2;

        return {
            type: 'Radical Function Inverse',
            originalFunction: `f(x) = ${rootType === 2 ? '√' : `${rootType}√`}(${a}x + ${b})`,
            inverse: `f⁻¹(x) = (x^${rootType} - ${b})/${a}`,
            domain: rootType % 2 === 0 ? `x ≥ ${-b/a}` : 'All real numbers',
            range: rootType % 2 === 0 ? 'y ≥ 0' : 'All real numbers',
            inverseDomain: rootType % 2 === 0 ? 'x ≥ 0' : 'All real numbers',
            inverseRange: rootType % 2 === 0 ? `y ≥ ${-b/a}` : 'All real numbers',
            explanation: `The ${rootType}th power undoes the ${rootType}th root`,
            category: 'radical_inverse'
        };
    }

    solveTrigonometricInverse(problem) {
        const { trigFunction, restriction } = problem.parameters;
        const func = trigFunction || 'sin';

        const inverseMap = {
            'sin': { inverse: 'arcsin', domain: '[-π/2, π/2]', range: '[-1, 1]' },
            'cos': { inverse: 'arccos', domain: '[0, π]', range: '[-1, 1]' },
            'tan': { inverse: 'arctan', domain: '(-π/2, π/2)', range: 'All reals' }
        };

        const info = inverseMap[func] || inverseMap['sin'];

        return {
            type: 'Trigonometric Function Inverse',
            originalFunction: `f(x) = ${func}(x)`,
            domainRestriction: info.domain,
            inverse: `f⁻¹(x) = ${info.inverse}(x)`,
            domain: info.domain,
            range: info.range,
            inverseDomain: info.range,
            inverseRange: info.domain,
            explanation: `${func} restricted to ${info.domain} to be one-to-one`,
            category: 'trigonometric_inverse'
        };
    }

    solvePolynomialInverse(problem) {
        const { degree } = problem.parameters;

        return {
            type: 'Polynomial Function Inverse',
            note: 'Higher-degree polynomials may not have elementary inverse formulas',
            approach: degree === 3 ? 'For cubics, may solve algebraically or numerically' : 'Typically requires numerical methods',
            category: 'polynomial_inverse'
        };
    }

    verifyInverseFunctions(problem) {
        const { f, g, fExpression, gExpression } = problem.parameters;

        return {
            type: 'Verify Inverse Functions',
            method: 'Composition verification',
            check1: 'Compute f(g(x)) and verify it equals x',
            check2: 'Compute g(f(x)) and verify it equals x',
            requirement: 'Both compositions must equal x (identity function)',
            category: 'verify_inverse'
        };
    }

    findDomainRangeInverse(problem) {
        return {
            type: 'Domain and Range of Inverse',
            principle: 'Domain and range swap for inverse functions',
            rule1: 'Dom(f⁻¹) = Rng(f)',
            rule2: 'Rng(f⁻¹) = Dom(f)',
            category: 'domain_range'
        };
    }

    graphInverseFunction(problem) {
        return {
            type: 'Graph Inverse Function',
            method: 'Reflection over y = x',
            steps: [
                'Graph original function f(x)',
                'Draw the line y = x',
                'Reflect f(x) across y = x to get f⁻¹(x)',
                'Or: swap x and y coordinates of points'
            ],
            category: 'graphical'
        };
    }

    solveCompositionInverse(problem) {
        return {
            type: 'Inverse of Function Composition',
            rule: '(f ∘ g)⁻¹ = g⁻¹ ∘ f⁻¹',
            explanation: 'Order reverses when taking inverse of composition',
            analogy: 'Like putting on socks then shoes: to undo, remove shoes first, then socks',
            category: 'composition'
        };
    }

    testOneToOne(problem) {
        return {
            type: 'Test for One-to-One',
            methods: [
                'Horizontal Line Test: each horizontal line intersects at most once',
                'Algebraic: if f(a) = f(b) implies a = b',
                'Derivative: if f\'(x) > 0 everywhere or f\'(x) < 0 everywhere'
            ],
            requirement: 'Function must be one-to-one to have an inverse',
            category: 'one_to_one'
        };
    }

    // ==================== STEP GENERATION ====================

    generateInverseFunctionSteps(problem, solution) {
        let baseSteps = this.generateBaseInverseFunctionSteps(problem, solution);

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

    generateBaseInverseFunctionSteps(problem, solution) {
        const { type } = problem;
        const category = this.inverseFunctionTypes[type]?.category;

        switch(category) {
            case 'linear_inverse':
                return this.generateLinearInverseSteps(problem, solution);
            case 'quadratic_inverse':
                return this.generateQuadraticInverseSteps(problem, solution);
            case 'rational_inverse':
                return this.generateRationalInverseSteps(problem, solution);
            case 'exponential_inverse':
                return this.generateExponentialInverseSteps(problem, solution);
            case 'logarithmic_inverse':
                return this.generateLogarithmicInverseSteps(problem, solution);
            case 'radical_inverse':
                return this.generateRadicalInverseSteps(problem, solution);
            case 'verify_inverse':
                return this.generateVerificationSteps(problem, solution);
            case 'one_to_one':
                return this.generateOneToOneTestSteps(problem, solution);
            default:
                return this.generateGenericInverseSteps(problem, solution);
        }
    }

    generateLinearInverseSteps(problem, solution) {
        const { a, b } = problem.parameters;
        const steps = [];

        // Step 1: Write function
        steps.push({
            stepNumber: 1,
            step: 'Write function',
            description: 'Start with the original linear function',
            expression: `f(x) = ${a}x + ${b}`,
            reasoning: 'This is our given linear function',
            goalStatement: 'We need to find f⁻¹(x) which undoes what f does'
        });

        // Step 2: Replace f(x) with y
        steps.push({
            stepNumber: 2,
            step: 'Replace f(x) with y',
            description: 'Write the function using y notation',
            beforeExpression: `f(x) = ${a}x + ${b}`,
            afterExpression: `y = ${a}x + ${b}`,
            reasoning: 'This makes it easier to swap variables',
            algebraicRule: 'Substitution: y = f(x)'
        });

        // Step 3: Swap x and y
        steps.push({
            stepNumber: 3,
            step: 'Swap x and y',
            description: 'Interchange the variables x and y',
            beforeExpression: `y = ${a}x + ${b}`,
            afterExpression: `x = ${a}y + ${b}`,
            reasoning: 'Swapping x and y reverses the input-output relationship',
            algebraicRule: 'Inverse definition: swap domain and range',
            visualHint: 'This is the key step for finding inverses'
        });

        // Step 4: Solve for y - subtract b
        steps.push({
            stepNumber: 4,
            step: 'Isolate the y term',
            description: `Subtract ${b} from both sides`,
            beforeExpression: `x = ${a}y + ${b}`,
            operation: `- ${b}`,
            afterExpression: `x - ${b} = ${a}y`,
            reasoning: 'Remove the constant term from the y side',
            algebraicRule: 'Subtraction Property of Equality'
        });

        // Step 5: Solve for y - divide by a
        steps.push({
            stepNumber: 5,
            step: 'Solve for y',
            description: `Divide both sides by ${a}`,
            beforeExpression: `x - ${b} = ${a}y`,
            operation: `÷ ${a}`,
            afterExpression: `y = (x - ${b})/${a}`,
            reasoning: 'Isolate y completely',
            algebraicRule: 'Division Property of Equality'
        });

        // Step 6: Write as f⁻¹(x)
        steps.push({
            stepNumber: 6,
            step: 'Write inverse function',
            description: 'Replace y with f⁻¹(x)',
            expression: `f⁻¹(x) = (x - ${b})/${a}`,
            reasoning: 'This is the inverse function in standard notation',
            finalAnswer: true
        });

        // Step 7: Verify
        if (this.includeVerificationInSteps) {
            steps.push({
                stepNumber: 7,
                step: 'Verify by composition',
                description: 'Check f(f⁻¹(x)) = x',
                verification: {
                    composition: `f(f⁻¹(x)) = ${a}((x - ${b})/${a}) + ${b}`,
                    simplification: `= x - ${b} + ${b} = x ✓`,
                    conclusion: 'Verified: the functions are inverses'
                },
                reasoning: 'Composition of inverses yields identity function'
            });
        }

        return steps;
    }

    generateQuadraticInverseSteps(problem, solution) {
        const { a, h, k, restrictionType } = problem.parameters;
        const steps = [];

        // Step 1: Given function
        steps.push({
            stepNumber: 1,
            step: 'Given quadratic function',
            description: 'Start with the quadratic in vertex form',
            expression: `f(x) = ${a}(x - ${h})² + ${k}`,
            reasoning: 'Vertex form makes finding inverse easier',
            note: 'Quadratics are not one-to-one on all reals'
        });

        // Step 2: Restrict domain
        const restriction = restrictionType === 'left' ? `x ≤ ${h}` : `x ≥ ${h}`;
        steps.push({
            stepNumber: 2,
            step: 'Restrict domain',
            description: `Restrict to ${restriction}`,
            domainRestriction: restriction,
            reasoning: 'Make function one-to-one by taking one side of parabola',
            visualHint: `Choose ${restrictionType} side of vertex at (${h}, ${k})`,
            criticalConcept: 'Without restriction, quadratic fails horizontal line test'
        });

        // Step 3: Replace f(x) with y
        steps.push({
            stepNumber: 3,
            step: 'Replace f(x) with y',
            beforeExpression: `f(x) = ${a}(x - ${h})² + ${k}`,
            afterExpression: `y = ${a}(x - ${h})² + ${k}`,
            reasoning: 'Prepare for variable swap'
        });

        // Step 4: Swap x and y
        steps.push({
            stepNumber: 4,
            step: 'Swap x and y',
            beforeExpression: `y = ${a}(x - ${h})² + ${k}`,
            afterExpression: `x = ${a}(y - ${h})² + ${k}`,
            reasoning: 'Reverse input-output relationship',
            algebraicRule: 'Inverse definition'
        });

        // Step 5: Isolate squared term
        steps.push({
            stepNumber: 5,
            step: 'Isolate squared term',
            description: `Subtract ${k} from both sides`,
            beforeExpression: `x = ${a}(y - ${h})² + ${k}`,
            afterExpression: `x - ${k} = ${a}(y - ${h})²`,
            reasoning: 'Begin solving for y'
        });

        // Step 6: Divide by a
        steps.push({
            stepNumber: 6,
            step: 'Divide by coefficient',
            description: `Divide both sides by ${a}`,
            beforeExpression: `x - ${k} = ${a}(y - ${h})²`,
            afterExpression: `(x - ${k})/${a} = (y - ${h})²`,
            reasoning: 'Isolate the squared term'
        });

        // Step 7: Take square root
        const sign = restrictionType === 'left' ? '-' : '+';
        steps.push({
            stepNumber: 7,
            step: 'Take square root',
            description: `Take square root of both sides`,
            beforeExpression: `(x - ${k})/${a} = (y - ${h})²`,
            afterExpression: `${sign}√((x - ${k})/${a}) = y - ${h}`,
            reasoning: `Use ${sign} because domain restriction is ${restriction}`,
            criticalChoice: `Sign choice matches domain restriction`,
            commonMistake: 'Using both ± or wrong sign'
        });

        // Step 8: Solve for y
        steps.push({
            stepNumber: 8,
            step: 'Solve for y',
            description: `Add ${h} to both sides`,
            beforeExpression: `${sign}√((x - ${k})/${a}) = y - ${h}`,
            afterExpression: `y = ${h} ${sign} √((x - ${k})/${a})`,
            reasoning: 'Completely isolate y'
        });

        // Step 9: Write inverse
        steps.push({
            stepNumber: 9,
            step: 'Write inverse function',
            expression: `f⁻¹(x) = ${h} ${sign} √((x - ${k})/${a})`,
            domainOfInverse: a > 0 ? `x ≥ ${k}` : `x ≤ ${k}`,
            rangeOfInverse: restriction,
            finalAnswer: true,
            reasoning: 'Domain of inverse = range of restricted original function'
        });

        return steps;
    }

    generateRationalInverseSteps(problem, solution) {
        const { a, b, c, d } = problem.parameters;
        const steps = [];

        // Step 1: Given function
        steps.push({
            stepNumber: 1,
            step: 'Given rational function',
            expression: `f(x) = (${a}x + ${b})/(${c}x + ${d})`,
            reasoning: 'Start with rational function in standard form',
            domainNote: `x ≠ ${-d/c} (excluded value)`
        });

        // Step 2: Replace with y
        steps.push({
            stepNumber: 2,
            step: 'Replace f(x) with y',
            beforeExpression: `f(x) = (${a}x + ${b})/(${c}x + ${d})`,
            afterExpression: `y = (${a}x + ${b})/(${c}x + ${d})`,
            reasoning: 'Prepare for variable swap'
        });

        // Step 3: Swap x and y
        steps.push({
            stepNumber: 3,
            step: 'Swap x and y',
            beforeExpression: `y = (${a}x + ${b})/(${c}x + ${d})`,
            afterExpression: `x = (${a}y + ${b})/(${c}y + ${d})`,
            reasoning: 'Reverse input-output relationship'
        });

        // Step 4: Cross-multiply
        steps.push({
            stepNumber: 4,
            step: 'Cross-multiply',
            description: 'Multiply both sides to clear fraction',
            beforeExpression: `x = (${a}y + ${b})/(${c}y + ${d})`,
            operation: 'Cross-multiply',
            afterExpression: `x(${c}y + ${d}) = ${a}y + ${b}`,
            reasoning: 'Eliminate denominator',
            algebraicRule: 'Cross-multiplication'
        });

        // Step 5: Distribute
        steps.push({
            stepNumber: 5,
            step: 'Distribute',
            beforeExpression: `x(${c}y + ${d}) = ${a}y + ${b}`,
            afterExpression: `${c}xy + ${d}x = ${a}y + ${b}`,
            reasoning: 'Expand left side',
            algebraicRule: 'Distributive property'
        });

        // Step 6: Collect y terms
        steps.push({
            stepNumber: 6,
            step: 'Collect y terms on one side',
            description: `Move all terms with y to left, constants to right`,
            beforeExpression: `${c}xy + ${d}x = ${a}y + ${b}`,
            afterExpression: `${c}xy - ${a}y = ${b} - ${d}x`,
            reasoning: 'Group like terms to factor out y',
            algebraicRule: 'Addition/Subtraction Property of Equality'
        });

        // Step 7: Factor out y
        steps.push({
            stepNumber: 7,
            step: 'Factor out y',
            beforeExpression: `${c}xy - ${a}y = ${b} - ${d}x`,
            afterExpression: `y(${c}x - ${a}) = ${b} - ${d}x`,
            reasoning: 'Factor y from left side',
            algebraicRule: 'Factoring'
        });

        // Step 8: Solve for y
        steps.push({
            stepNumber: 8,
            step: 'Divide to solve for y',
            beforeExpression: `y(${c}x - ${a}) = ${b} - ${d}x`,
            afterExpression: `y = (${b} - ${d}x)/(${c}x - ${a})`,
            reasoning: 'Isolate y by dividing',
            alternateForm: `y = (${d}x - ${b})/(${a} - ${c}x)`
        });

        // Step 9: Write inverse
        steps.push({
            stepNumber: 9,
            step: 'Write inverse function',
            expression: `f⁻¹(x) = (${d}x - ${b})/(${a} - ${c}x)`,
            domainOfInverse: `x ≠ ${a/c}`,
            finalAnswer: true,
            reasoning: 'Exclude value that makes denominator zero'
        });

        return steps;
    }

    generateExponentialInverseSteps(problem, solution) {
        const { base, coefficient, constant } = problem.parameters;
        const b = base || 'e';
        const a = coefficient || 1;
        const k = constant || 0;
        const steps = [];

        // Step 1: Given function
        steps.push({
            stepNumber: 1,
            step: 'Given exponential function',
            expression: `f(x) = ${a === 1 ? '' : a}${b}^x${k !== 0 ? ` + ${k}` : ''}`,
            reasoning: 'Exponential function with base ' + b,
            note: 'Exponentials are one-to-one (always invertible)'
        });

        // Step 2: Replace with y
        steps.push({
            stepNumber: 2,
            step: 'Replace f(x) with y',
            beforeExpression: `f(x) = ${a === 1 ? '' : a}${b}^x${k !== 0 ? ` + ${k}` : ''}`,
            afterExpression: `y = ${a === 1 ? '' : a}${b}^x${k !== 0 ? ` + ${k}` : ''}`,
            reasoning: 'Prepare for variable swap'
        });

        // Step 3: Swap x and y
        steps.push({
            stepNumber: 3,
            step: 'Swap x and y',
            beforeExpression: `y = ${a === 1 ? '' : a}${b}^x${k !== 0 ? ` + ${k}` : ''}`,
            afterExpression: `x = ${a === 1 ? '' : a}${b}^y${k !== 0 ? ` + ${k}` : ''}`,
            reasoning: 'Reverse input-output relationship'
        });

        // Step 4: Isolate exponential (if k ≠ 0)
        if (k !== 0) {
            steps.push({
                stepNumber: 4,
                step: 'Isolate exponential term',
                description: `Subtract ${k} from both sides`,
                beforeExpression: `x = ${a === 1 ? '' : a}${b}^y + ${k}`,
                afterExpression: `x - ${k} = ${a === 1 ? '' : a}${b}^y`,
                reasoning: 'Prepare to apply logarithm'
            });
        }

        // Step 5: Divide by coefficient (if a ≠ 1)
        if (a !== 1) {
            const nextStep = steps.length + 1;
            steps.push({
                stepNumber: nextStep,
                step: 'Divide by coefficient',
                beforeExpression: `x - ${k} = ${a}${b}^y`,
                afterExpression: `(x - ${k})/${a} = ${b}^y`,
                reasoning: 'Isolate the exponential term'
            });
        }

        // Step 6: Apply logarithm
        const nextStep = steps.length + 1;
        const logBase = b === 'e' ? 'ln' : `log_${b}`;
        steps.push({
            stepNumber: nextStep,
            step: 'Apply logarithm',
            description: `Take ${logBase} of both sides`,
            beforeExpression: `(x - ${k})/${a} = ${b}^y`,
            afterExpression: `${logBase}((x - ${k})/${a}) = y`,
            reasoning: `Logarithm is the inverse operation of exponentiation`,
            algebraicRule: `${logBase}(${b}^y) = y`,
            criticalConcept: 'Log base must match exponential base'
        });

        // Step 7: Write inverse
        steps.push({
            stepNumber: nextStep + 1,
            step: 'Write inverse function',
            expression: `f⁻¹(x) = ${logBase}((x - ${k})/${a})`,
            domainOfInverse: k !== 0 ? `x > ${k}` : 'x > 0',
            rangeOfInverse: 'All real numbers',
            finalAnswer: true,
            reasoning: 'Logarithmic function is inverse of exponential'
        });

        return steps;
    }

    generateLogarithmicInverseSteps(problem, solution) {
        const { base, coefficient, constant } = problem.parameters;
        const b = base || 'e';
        const a = coefficient || 1;
        const k = constant || 0;
        const steps = [];

        const logNotation = b === 'e' ? 'ln' : `log_${b}`;

        // Step 1: Given function
        steps.push({
            stepNumber: 1,
            step: 'Given logarithmic function',
            expression: `f(x) = ${a === 1 ? '' : `${a} `}${logNotation}(x)${k !== 0 ? ` + ${k}` : ''}`,
            reasoning: 'Logarithmic function with base ' + b,
            domainNote: 'x > 0 (domain of logarithm)'
        });

        // Step 2: Replace with y
        steps.push({
            stepNumber: 2,
            step: 'Replace f(x) with y',
            beforeExpression: `f(x) = ${a === 1 ? '' : `${a} `}${logNotation}(x)${k !== 0 ? ` + ${k}` : ''}`,
            afterExpression: `y = ${a === 1 ? '' : `${a} `}${logNotation}(x)${k !== 0 ? ` + ${k}` : ''}`,
            reasoning: 'Prepare for variable swap'
        });

        // Step 3: Swap x and y
        steps.push({
            stepNumber: 3,
            step: 'Swap x and y',
            beforeExpression: `y = ${a === 1 ? '' : `${a} `}${logNotation}(x)${k !== 0 ? ` + ${k}` : ''}`,
            afterExpression: `x = ${a === 1 ? '' : `${a} `}${logNotation}(y)${k !== 0 ? ` + ${k}` : ''}`,
            reasoning: 'Reverse input-output relationship'
        });

        // Step 4: Isolate log (if k ≠ 0)
        if (k !== 0) {
            steps.push({
                stepNumber: 4,
                step: 'Isolate logarithm term',
                description: `Subtract ${k} from both sides`,
                beforeExpression: `x = ${a === 1 ? '' : `${a} `}${logNotation}(y) + ${k}`,
                afterExpression: `x - ${k} = ${a === 1 ? '' : `${a} `}${logNotation}(y)`,
                reasoning: 'Prepare to exponentiate'
            });
        }

        // Step 5: Divide by coefficient (if a ≠ 1)
        if (a !== 1) {
            const nextStep = steps.length + 1;
            steps.push({
                stepNumber: nextStep,
                step: 'Divide by coefficient',
                beforeExpression: `x - ${k} = ${a}${logNotation}(y)`,
                afterExpression: `(x - ${k})/${a} = ${logNotation}(y)`,
                reasoning: 'Isolate the logarithm'
            });
        }

        // Step 6: Exponentiate
        const nextStep = steps.length + 1;
        steps.push({
            stepNumber: nextStep,
            step: 'Exponentiate both sides',
            description: `Raise ${b} to the power of both sides`,
            beforeExpression: `(x - ${k})/${a} = ${logNotation}(y)`,
            afterExpression: `${b}^((x - ${k})/${a}) = y`,
            reasoning: 'Exponentiation is inverse operation of logarithm',
            algebraicRule: `${b}^${logNotation}(y) = y`,
            criticalConcept: 'Exponential base must match log base'
        });

        // Step 7: Write inverse
        steps.push({
            stepNumber: nextStep + 1,
            step: 'Write inverse function',
            expression: `f⁻¹(x) = ${b}^((x - ${k})/${a})`,
            domainOfInverse: 'All real numbers',
            rangeOfInverse: 'y > 0',
            finalAnswer: true,
            reasoning: 'Exponential function is inverse of logarithm'
        });

        return steps;
    }

    generateRadicalInverseSteps(problem, solution) {
        const { n, a, b } = problem.parameters;
        const rootType = n || 2;
        const steps = [];

        // Step 1: Given function
        steps.push({
            stepNumber: 1,
            step: 'Given radical function',
            expression: `f(x) = ${rootType === 2 ? '√' : `${rootType}√`}(${a}x + ${b})`,
            reasoning: `The ${rootType}th root function`,
            domainNote: rootType % 2 === 0 ? `${a}x + ${b} ≥ 0, so x ≥ ${-b/a}` : 'All real numbers'
        });

        // Step 2: Replace with y
        steps.push({
            stepNumber: 2,
            step: 'Replace f(x) with y',
            afterExpression: `y = ${rootType === 2 ? '√' : `${rootType}√`}(${a}x + ${b})`,
            reasoning: 'Prepare for variable swap'
        });

        // Step 3: Swap x and y
        steps.push({
            stepNumber: 3,
            step: 'Swap x and y',
            beforeExpression: `y = ${rootType === 2 ? '√' : `${rootType}√`}(${a}x + ${b})`,
            afterExpression: `x = ${rootType === 2 ? '√' : `${rootType}√`}(${a}y + ${b})`,
            reasoning: 'Reverse input-output relationship'
        });

        // Step 4: Raise to power
        steps.push({
            stepNumber: 4,
            step: `Raise both sides to power ${rootType}`,
            description: `Eliminate the ${rootType}th root`,
            beforeExpression: `x = ${rootType === 2 ? '√' : `${rootType}√`}(${a}y + ${b})`,
            afterExpression: `x^${rootType} = ${a}y + ${b}`,
            reasoning: `The ${rootType}th power undoes the ${rootType}th root`,
            algebraicRule: `(${rootType}√z)^${rootType} = z`
        });

        // Step 5: Isolate y term
        steps.push({
            stepNumber: 5,
            step: 'Isolate y term',
            description: `Subtract ${b} from both sides`,
            beforeExpression: `x^${rootType} = ${a}y + ${b}`,
            afterExpression: `x^${rootType} - ${b} = ${a}y`,
            reasoning: 'Begin solving for y'
        });

        // Step 6: Solve for y
        steps.push({
            stepNumber: 6,
            step: 'Solve for y',
            description: `Divide by ${a}`,
            beforeExpression: `x^${rootType} - ${b} = ${a}y`,
            afterExpression: `y = (x^${rootType} - ${b})/${a}`,
            reasoning: 'Completely isolate y'
        });

        // Step 7: Write inverse
        steps.push({
            stepNumber: 7,
            step: 'Write inverse function',
            expression: `f⁻¹(x) = (x^${rootType} - ${b})/${a}`,
            domainOfInverse: rootType % 2 === 0 ? 'x ≥ 0' : 'All real numbers',
            rangeOfInverse: rootType % 2 === 0 ? `y ≥ ${-b/a}` : 'All real numbers',
            finalAnswer: true,
            reasoning: `The ${rootType}th power function inverts the ${rootType}th root`
        });

        return steps;
    }

    generateVerificationSteps(problem, solution) {
        const steps = [];

        // Step 1: State what to verify
        steps.push({
            stepNumber: 1,
            step: 'State verification goal',
            description: 'To verify f and g are inverses, show both compositions equal x',
            requirements: [
                'f(g(x)) = x for all x in domain of g',
                'g(f(x)) = x for all x in domain of f'
            ],
            reasoning: 'Both conditions must hold for true inverses'
        });

        // Step 2: Compute f(g(x))
        steps.push({
            stepNumber: 2,
            step: 'Compute f(g(x))',
            description: 'Substitute g(x) into f',
            method: 'Replace x in f with the expression for g(x)',
            instruction: 'Simplify the composition'
        });

        // Step 3: Simplify f(g(x))
        steps.push({
            stepNumber: 3,
            step: 'Simplify f(g(x))',
            description: 'Algebraically simplify the result',
            goal: 'Should simplify to x',
            reasoning: 'If this equals x, first condition is satisfied'
        });

        // Step 4: Compute g(f(x))
        steps.push({
            stepNumber: 4,
            step: 'Compute g(f(x))',
            description: 'Substitute f(x) into g',
            method: 'Replace x in g with the expression for f(x)',
            instruction: 'Simplify the composition'
        });

        // Step 5: Simplify g(f(x))
        steps.push({
            stepNumber: 5,
            step: 'Simplify g(f(x))',
            description: 'Algebraically simplify the result',
            goal: 'Should simplify to x',
            reasoning: 'If this equals x, second condition is satisfied'
        });

        // Step 6: Conclusion
        steps.push({
            stepNumber: 6,
            step: 'Conclusion',
            description: 'State whether f and g are inverses',
            criteria: 'Both compositions must equal x',
            finalAnswer: true
        });

        return steps;
    }

    generateOneToOneTestSteps(problem, solution) {
        const steps = [];

        // Step 1: Explain one-to-one
        steps.push({
            stepNumber: 1,
            step: 'Define one-to-one',
            description: 'A function is one-to-one if different inputs produce different outputs',
            formalDefinition: 'f(a) = f(b) implies a = b',
            graphicalTest: 'Horizontal line test: each horizontal line intersects at most once'
        });

        // Step 2: Choose test method
        steps.push({
            stepNumber: 2,
            step: 'Choose testing method',
            options: [
                'Horizontal line test (graphical)',
                'Algebraic test: solve f(a) = f(b)',
                'Derivative test: check if f\' never changes sign'
            ],
            reasoning: 'Different methods suit different function types'
        });

        // Step 3: Apply test
        steps.push({
            stepNumber: 3,
            step: 'Apply chosen test',
            description: 'Execute the one-to-one test',
            instruction: 'Follow through with selected method'
        });

        // Step 4: Conclusion
        steps.push({
            stepNumber: 4,
            step: 'Conclusion',
            description: 'Determine if function is one-to-one',
            implications: 'If one-to-one, inverse exists. If not, may need domain restriction.',
            finalAnswer: true
        });

        return steps;
    }

    generateGenericInverseSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Find inverse function',
            description: 'Apply standard inverse-finding procedure',
            generalSteps: [
                'Write y = f(x)',
                'Swap x and y',
                'Solve for y',
                'Write as f⁻¹(x)',
                'Verify by composition'
            ],
            reasoning: 'Standard inverse procedure',
            solution: solution
        }];
    }

    // ==================== ENHANCED EXPLANATION METHODS ====================

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            // Multiple explanation formats
            explanations: {
                conceptual: this.getConceptualExplanationInverse(step, problem),
                procedural: this.getProceduralExplanationInverse(step),
                visual: this.getVisualExplanationInverse(step, problem),
                algebraic: this.getAlgebraicExplanationInverse(step)
            },

            // Difficulty-adapted explanations
            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            // Learning support
            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyInverse(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        // Add thinking prompts if enabled
        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsInverse(step);
        }

        // Add self-check questions if enabled
        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionInverse(step);
        }

        // Add real-world connections if enabled
        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionInverse(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationInverse(step, problem) {
        const conceptualExplanations = {
            'Write function': 'We start with the original function that we want to invert. Understanding what this function does helps us figure out how to undo it.',
            'Replace f(x) with y': 'Using y instead of f(x) makes the algebra clearer and sets up for the variable swap.',
            'Swap x and y': 'This is the heart of finding inverses: we reverse the roles of input and output. What was the output (y) becomes the input, and vice versa.',
            'Isolate the y term': 'We begin solving for y by removing terms that don\'t contain y, working backwards through the operations.',
            'Solve for y': 'Completing the isolation of y gives us the inverse relationship explicitly.',
            'Write inverse function': 'We express our answer in standard inverse notation f⁻¹(x) to show it undoes f(x).',
            'Verify by composition': 'Composition verification proves mathematically that the functions truly are inverses.',
            'Restrict domain': 'Restricting the domain creates a one-to-one function, which is necessary for an inverse to exist.',
            'Apply logarithm': 'The logarithm is the inverse operation of exponentiation, so it undoes the exponential.',
            'Exponentiate both sides': 'Exponentiation undoes the logarithm, revealing the underlying value.',
            'Cross-multiply': 'Cross-multiplication clears fractions, making it easier to solve for the variable.'
        };

        return conceptualExplanations[step.step] || 'This step moves us closer to finding the inverse function.';
    }

    getProceduralExplanationInverse(step) {
        if (step.operation) {
            return `1. Identify the operation: ${step.operation}
2. Apply it to both sides of the equation
3. Simplify the result
4. Write the new equation`;
        }
        return 'Follow the standard procedure for this type of step.';
    }

    getVisualExplanationInverse(step, problem) {
        const visualExplanations = {
            'Swap x and y': 'Imagine reflecting the graph over the diagonal line y = x. Every point (a, b) becomes (b, a).',
            'Restrict domain': 'Picture cutting the parabola in half along the vertex, keeping only one side.',
            'Verify by composition': 'Think of f as going forward and f⁻¹ as going backward. Composing them should bring you back to where you started.',
            'Apply logarithm': 'Visualize the logarithm as finding "what power?" - it finds the exponent.',
            'Cross-multiply': 'Imagine clearing the denominators by multiplying across in an X pattern.'
        };

        return visualExplanations[step.step] || 'Visualize this step on a coordinate plane or graph.';
    }

    getAlgebraicExplanationInverse(step) {
        const algebraicRules = {
            'Write function': 'Starting equation',
            'Replace f(x) with y': 'Substitution: y = f(x)',
            'Swap x and y': 'Inverse definition: interchange domain and range',
            'Solve for y': 'Algebraic manipulation using inverse operations',
            'Apply logarithm': 'Logarithm property: log_b(b^x) = x',
            'Exponentiate both sides': 'Exponential property: b^(log_b(x)) = x',
            'Cross-multiply': 'Multiplication property of equality'
        };

        return algebraicRules[step.step] || 'Apply standard algebraic principles.';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationInverse(step, problem),
                analogy: this.findRelevantAnalogyInverse(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description || step.step),
                visualization: this.suggestVisualizationInverse(step)
            }
        }));
    }

    generateELI5ExplanationInverse(step, problem) {
        const ELI5Explanations = {
            'Write function': "We're starting with a function - think of it like a machine that changes numbers!",
            'Replace f(x) with y': "We're writing it a simpler way to make the next steps easier.",
            'Swap x and y': "Now comes the magic! We swap x and y. It's like switching what goes in and what comes out of our machine!",
            'Isolate the y term': "We're getting y by itself, like finding a toy hidden in boxes - we remove one box at a time!",
            'Solve for y': "We finish unwrapping to get y all alone!",
            'Write inverse function': "Now we have the backwards machine! It undoes what the first machine did!",
            'Verify by composition': "Let's check: if we use both machines one after another, we should get back what we started with!",
            'Restrict domain': "The machine works both ways only if we use it on certain numbers. It's like a one-way door - we pick which way!",
            'Apply logarithm': "We use a special 'undo' button for exponents called a logarithm!",
            'Cross-multiply': "We clear the fractions by multiplying in an X pattern!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to find the backwards function!";
    }

    findRelevantAnalogyInverse(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('all_types')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like finding the way back home after taking a path - we're retracing our steps!";
    }

    suggestVisualizationInverse(step) {
        const visualizations = {
            'Write function': 'Draw a function machine with input and output arrows',
            'Swap x and y': 'Draw the line y = x and show how points flip across it',
            'Restrict domain': 'Draw a parabola and shade only the half you\'re keeping',
            'Solve for y': 'Show unwrapping boxes one by one to reveal y',
            'Verify by composition': 'Draw two machines in sequence showing input → output → back to input',
            'Apply logarithm': 'Show the logarithm as asking "what power gives this?"',
            'Cross-multiply': 'Draw an X connecting numerator to opposite denominator'
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
                    explanation: this.generateStepBridgeInverse(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgressionInverse(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategyInverse(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeInverse(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next, we need to: ${nextStep.description || nextStep.step}`,
            why: `This is necessary because: ${this.explainStepNecessityInverse(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefitInverse(nextStep)}`
        };
    }

    explainStepProgressionInverse(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue finding the inverse`;
    }

    explainStepStrategyInverse(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${(nextStep.description || nextStep.step).toLowerCase()}`;
    }

    explainStepNecessityInverse(currentStep, nextStep) {
        return `we need to continue the inversion process`;
    }

    explainStepBenefitInverse(nextStep) {
        return `bringing us closer to expressing y explicitly as the inverse function`;
    }

    addErrorPrevention(step, problemType) {
        const category = this.inverseFunctionTypes[problemType]?.category || 'linear_inverse';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsInverse(step, problemType),
                checkPoints: this.generateCheckPointsInverse(step),
                warningFlags: this.identifyWarningFlagsInverse(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionInverse(step),
                expectedResult: this.describeExpectedResultInverse(step),
                troubleshooting: this.generateTroubleshootingTipsInverse(step)
            }
        };
    }

    generatePreventionTipsInverse(step, problemType) {
        const tips = {
            'Swap x and y': [
                'Make sure to swap ALL occurrences of x and y',
                'Don\'t forget to swap in exponents or inside functions',
                'Remember: this is the defining step for finding inverses'
            ],
            'Restrict domain': [
                'Choose restriction based on which half makes sense',
                'Ensure the restriction makes function one-to-one',
                'Remember restricted domain becomes range of inverse'
            ],
            'Apply logarithm': [
                'Use logarithm with SAME BASE as the exponential',
                'Don\'t default to ln for all bases',
                'Remember log_b(b^x) = x'
            ],
            'Cross-multiply': [
                'Multiply ENTIRE numerator by opposite denominator',
                'Don\'t forget to distribute',
                'Watch for sign errors'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check each algebraic step'];
    }

    generateCheckPointsInverse(step) {
        return [
            'Did I perform the operation correctly?',
            'Are all variables and constants in the right place?',
            'Does this step move me toward isolating y?',
            'Have I made any sign errors?'
        ];
    }

    identifyWarningFlagsInverse(step, problemType) {
        const warnings = {
            quadratic_inverse: step.step === 'Take square root' ?
                ['Must choose + OR -, not both', 'Sign must match domain restriction'] : [],
            exponential_inverse: step.step === 'Apply logarithm' ?
                ['Base of log must match base of exponential', 'Domain of log is x > 0'] : [],
            rational_inverse: step.step === 'Cross-multiply' ?
                ['Distribute carefully', 'Watch for sign errors'] : []
        };

        const category = this.inverseFunctionTypes[problemType]?.category || 'linear_inverse';
        return warnings[category] || [];
    }

    generateSelfCheckQuestionInverse(step) {
        const questions = {
            'Write function': 'Do I understand what this function does to an input?',
            'Swap x and y': 'Did I swap every x with y and every y with x?',
            'Solve for y': 'Is y completely isolated on one side?',
            'Write inverse function': 'Have I expressed the inverse in proper notation?',
            'Verify by composition': 'Do both compositions simplify to x?',
            'Restrict domain': 'Does this restriction make the function one-to-one?',
            'Apply logarithm': 'Did I use the correct logarithm base?'
        };

        return questions[step.step] || 'Does this step make sense and move me toward the inverse?';
    }

    describeExpectedResultInverse(step) {
        const expectations = {
            'Write function': 'Original function in standard form',
            'Replace f(x) with y': 'Equation with y on left side',
            'Swap x and y': 'Variables interchanged throughout equation',
            'Solve for y': 'y isolated and expressed in terms of x',
            'Write inverse function': 'Inverse function f⁻¹(x) explicitly stated',
            'Verify by composition': 'Both f(f⁻¹(x)) and f⁻¹(f(x)) equal x'
        };

        return expectations[step.step] || 'Progress toward finding inverse';
    }

    generateTroubleshootingTipsInverse(step) {
        return [
            'If stuck, review what the goal of this step is',
            'Check that you performed the operation on the entire expression',
            'Verify your algebraic manipulation carefully',
            'Try a specific number to see if your work makes sense',
            'Draw a picture or graph if helpful'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsInverse(step, problem),
                subSteps: this.breakIntoSubStepsInverse(step),
                hints: this.generateProgressiveHintsInverse(step, problem),
                practiceVariation: this.generatePracticeVariationInverse(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessInverse(step),
                decisionPoints: this.identifyDecisionPointsInverse(step),
                alternativeApproaches: this.suggestAlternativeMethodsInverse(step, problem)
            }
        }));
    }

    generateGuidingQuestionsInverse(step, problem) {
        const questions = {
            'Write function': [
                'What type of function is this?',
                'What operations does this function perform?',
                'Is this function one-to-one?'
            ],
            'Swap x and y': [
                'Why do we swap x and y to find inverses?',
                'Have I swapped every occurrence?',
                'What does this swap represent graphically?'
            ],
            'Solve for y': [
                'What operations are currently being done to y?',
                'How do I undo these operations?',
                'Am I solving in the correct order?'
            ],
            'Restrict domain': [
                'Why is this restriction necessary?',
                'Which half of the function should I choose?',
                'How does this affect the inverse?'
            ],
            'Apply logarithm': [
                'What base exponential do I have?',
                'What logarithm base should I use?',
                'Why does logarithm undo exponentiation?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help find the inverse?'];
    }

    breakIntoSubStepsInverse(step) {
        if (step.operation) {
            return [
                'Identify what operation to perform',
                `Apply ${step.operation} to the left side`,
                `Apply ${step.operation} to the right side`,
                'Simplify both sides',
                'Write the new equation'
            ];
        }

        const subSteps = {
            'Swap x and y': [
                'Locate every x in the equation',
                'Locate every y in the equation',
                'Replace all x with y',
                'Replace all y with x',
                'Write the swapped equation'
            ],
            'Verify by composition': [
                'Choose first composition to compute',
                'Substitute inner function into outer',
                'Simplify algebraically',
                'Check if result equals x',
                'Repeat for other composition'
            ]
        };

        return subSteps[step.step] || ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generateProgressiveHintsInverse(step, problem) {
        const category = this.inverseFunctionTypes[problem.type]?.category || 'linear_inverse';
        const hintSet = this.hints[category] || this.hints.linear_inverse;

        return {
            level1: hintSet.level1 || 'What is the key concept for this step?',
            level2: hintSet.level2 || 'Think about the general strategy.',
            level3: hintSet.level3 || 'Apply the specific technique needed.',
            level4: hintSet.level4 || 'Execute the algebraic steps.'
        };
    }

    generatePracticeVariationInverse(step, problem) {
        return {
            similarProblem: 'Try the same technique with a different function',
            practiceHint: 'Start with simpler functions to build confidence',
            extension: 'Try more complex functions of the same type'
        };
    }

    explainThinkingProcessInverse(step) {
        return {
            observe: 'What do I see in this equation?',
            goal: 'What am I trying to accomplish in this step?',
            strategy: 'What mathematical technique should I use?',
            execute: 'How do I carry out this technique correctly?',
            verify: 'Does my result make sense?'
        };
    }

    identifyDecisionPointsInverse(step) {
        const decisions = {
            'Restrict domain': ['Which side of vertex to keep?', 'Left or right of maximum/minimum?'],
            'Take square root': ['Use + or - sign?', 'Which matches the domain restriction?'],
            'Apply logarithm': ['Which base to use?', 'Natural log or common log?'],
            'Solve for y': ['Which operations to undo first?', 'What order makes algebra easiest?']
        };

        return decisions[step.step] || ['What approach is most efficient?', 'Are there alternative methods?'];
    }

    suggestAlternativeMethodsInverse(step, problem) {
        const alternatives = {
            'Verify by composition': [
                'Could verify graphically by checking reflection over y = x',
                'Could test specific values',
                'Could use both algebraic compositions for complete verification'
            ],
            'Solve for y': [
                'Could use different order of operations',
                'Could factor differently',
                'Multiple algebraic paths may work'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate for this problem'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the inverse-finding process`,
            progression: 'We are getting closer to expressing y explicitly',
            relationship: 'Each step undoes one operation or rearranges the equation'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.inverseFunctionTypes[problemType]?.category || 'linear_inverse';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Function notation', 'Algebraic manipulation'];
    }

    identifyKeyVocabularyInverse(step) {
        const vocabulary = {
            'Write function': ['function', 'domain', 'range', 'one-to-one'],
            'Swap x and y': ['swap', 'interchange', 'inverse', 'domain and range exchange'],
            'Solve for y': ['isolate', 'solve', 'inverse operations'],
            'Write inverse function': ['inverse notation', 'f⁻¹(x)', 'inverse function'],
            'Verify by composition': ['composition', 'f∘g', 'identity function'],
            'Restrict domain': ['domain restriction', 'one-to-one', 'horizontal line test'],
            'Apply logarithm': ['logarithm', 'exponent', 'base', 'log properties'],
            'Cross-multiply': ['cross-multiplication', 'rational equation']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPromptsInverse(step) {
        return {
            before: 'Before this step, what have I accomplished so far?',
            during: 'As I work through this step, what should I be careful about?',
            after: 'After completing this step, am I closer to finding the inverse?'
        };
    }

    findRealWorldConnectionInverse(step, problem) {
        const connections = {
            'linear_inverse': 'Like converting between units (Celsius to Fahrenheit and back)',
            'exponential_inverse': 'Like compound interest: finding time from amount, or amount from time',
            'logarithmic_inverse': 'Like pH scale: going from acidity to hydrogen ion concentration',
            'rational_inverse': 'Like currency exchange: converting dollars to euros and back'
        };

        const category = this.inverseFunctionTypes[problem.type]?.category;
        return connections[category] || 'Inverse functions let us work backwards from results to original values.';
    }

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                'inverse': 'opposite function',
                'composition': 'putting functions together',
                'one-to-one': 'each input gives a different output',
                'domain': 'allowed inputs',
                'range': 'possible outputs',
                'swap': 'switch',
                'isolate': 'get by itself'
            },
            intermediate: {
                'inverse': 'inverse',
                'composition': 'composition',
                'one-to-one': 'one-to-one',
                'domain': 'domain',
                'range': 'range'
            },
            ELI5: {
                'inverse': 'backwards function that undoes',
                'composition': 'using one function after another',
                'one-to-one': 'no two inputs give the same output',
                'domain': 'the numbers we can put in',
                'range': 'the numbers that can come out',
                'swap': 'trade places',
                'isolate': 'get all alone on one side'
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

    // ==================== GRAPH GENERATION ====================

    generateInverseFunctionGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.inverseFunctionTypes[type]?.category;

        if (category) {
            this.graphData = this.generateInverseGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateInverseGraph(problem, solution) {
        return {
            type: 'inverse_function',
            originalFunction: solution.originalFunction,
            inverseFunction: solution.inverse,
            reflectionLine: 'y = x',
            description: 'Graph shows f(x), f⁻¹(x), and the line of reflection y = x',
            graphType: 'function_and_inverse',
            visualization: 'Plot both functions and show reflection symmetry',
            keyPoints: 'Corresponding points (a,b) on f and (b,a) on f⁻¹',
            domain: solution.domain,
            range: solution.range,
            inverseDomain: solution.inverseDomain,
            inverseRange: solution.inverseRange
        };
    }

    // ==================== WORKBOOK GENERATION ====================

    generateInverseFunctionWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createConceptualOverviewSection(),
            this.createEnhancedStepsSection(),
            this.createInverseFunctionLessonSection(),
            this.createSolutionSection(),
            this.createDomainRangeSection(),
            this.createVerificationSection(),
            this.createGraphicalAnalysisSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection(),
            this.createCommonMistakesSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Inverse Functions Mathematical Workbook',
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
            ['Problem Type', this.inverseFunctionTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.inverseFunctionTypes[this.currentProblem.type]?.category || 'inverse'],
            ['Original Function', this.currentSolution?.originalFunction || this.currentProblem.cleanInput],
            ['Description', this.currentProblem.scenario || 'Find inverse function']
        ];

        // Add parameters if available
        if (Object.keys(this.currentProblem.parameters).length > 0) {
            problemData.push(['', '']);
            problemData.push(['Parameters', '']);
            for (const [key, value] of Object.entries(this.currentProblem.parameters)) {
                if (value !== undefined && value !== null) {
                    problemData.push([key, value]);
                }
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

        const category = this.inverseFunctionTypes[this.currentProblem.type]?.category;
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

    createConceptualOverviewSection() {
        const category = this.inverseFunctionTypes[this.currentProblem.type]?.category;
        const lesson = this.lessons[category] || this.lessons.inverse_concept;

        const conceptData = [
            ['Key Concepts', ''],
            ...lesson.concepts.map((concept, i) => [`${i + 1}`, concept]),
            ['', ''],
            ['Theory', lesson.theory || '']
        ];

        return {
            title: 'Conceptual Overview',
            type: 'concept',
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
                stepsData.push(['Explanation', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description || step.step]);

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

            if (step.criticalConcept) {
                stepsData.push(['⚠ Critical', step.criticalConcept]);
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
                if (step.explanations.visual) {
                    stepsData.push(['Visual', step.explanations.visual]);
                }
            }

            // Visual hints
            if (step.visualHint) {
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

            // Domain/Range notes
            if (step.domainNote) {
                stepsData.push(['Domain Note', step.domainNote]);
            }

            if (step.domainOfInverse) {
                stepsData.push(['Domain of Inverse', step.domainOfInverse]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createInverseFunctionLessonSection() {
        const { type } = this.currentProblem;
        const category = this.inverseFunctionTypes[type]?.category;
        const lesson = this.lessons[category] || this.lessons.inverse_concept;

        const lessonData = [
            ['Key Concepts', ''],
            ...lesson.concepts.map((c, i) => [` ${i + 1}`, c]),
            ['', ''],
            ['Theory', lesson.theory]
        ];

        if (lesson.keyFormulas) {
            lessonData.push(['', '']);
            lessonData.push(['Key Formulas', '']);
            for (const [name, formula] of Object.entries(lesson.keyFormulas)) {
                lessonData.push([name, formula]);
            }
        }

        if (lesson.fundamentalSteps) {
            lessonData.push(['', '']);
            lessonData.push(['General Steps', '']);
            lesson.fundamentalSteps.forEach((step, i) => {
                lessonData.push([`${i + 1}`, step]);
            });
        }

        return {
            title: 'Inverse Functions - Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        solutionData.push(['Original Function', this.currentSolution.originalFunction]);

        if (this.currentSolution.inverse) {
            solutionData.push(['Inverse Function', this.currentSolution.inverse]);
        } else if (this.currentSolution.error) {
            solutionData.push(['Error', this.currentSolution.error]);
            solutionData.push(['Explanation', this.currentSolution.explanation || '']);
        }

        if (this.currentSolution.domainRestriction) {
            solutionData.push(['Domain Restriction', this.currentSolution.domainRestriction]);
        }

        if (this.currentSolution.explanation && !this.currentSolution.error) {
            solutionData.push(['Explanation', this.currentSolution.explanation]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createDomainRangeSection() {
        if (!this.currentSolution) return null;

        const drData = [
            ['Original Function', ''],
            ['  Domain', this.currentSolution.domain || 'Not specified'],
            ['  Range', this.currentSolution.range || 'Not specified'],
            ['', ''],
            ['Inverse Function', ''],
            ['  Domain', this.currentSolution.inverseDomain || 'Not specified'],
            ['  Range', this.currentSolution.inverseRange || 'Not specified'],
            ['', ''],
            ['Key Principle', 'Domain of f⁻¹ = Range of f'],
            ['', 'Range of f⁻¹ = Domain of f']
        ];

        return {
            title: 'Domain and Range Analysis',
            type: 'domain_range',
            data: drData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentSolution.verification) return null;

        const verificationData = [
            ['Verification Method', 'Function Composition'],
            ['', '']
        ];

        const verification = this.currentSolution.verification;
        
        if (verification.forward) {
            verificationData.push(['f(f⁻¹(x))', verification.forward]);
        }

        if (verification.backward) {
            verificationData.push(['f⁻¹(f(x))', verification.backward]);
        }

        if (verification.note) {
            verificationData.push(['Note', verification.note]);
        }

        verificationData.push(['', '']);
        verificationData.push(['Requirement', 'Both compositions must equal x (identity function)']);

        return {
            title: 'Inverse Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createGraphicalAnalysisSection() {
        if (!this.graphData) return null;

        const graphData = [
            ['Graphical Relationship', 'Reflection over y = x'],
            ['Original Function', this.graphData.originalFunction],
            ['Inverse Function', this.graphData.inverseFunction],
            ['Line of Reflection', 'y = x'],
            ['', ''],
            ['Key Property', 'Point (a, b) on f corresponds to (b, a) on f⁻¹'],
            ['Symmetry', 'f and f⁻¹ are mirror images across y = x'],
            ['', ''],
            ['Visualization Tip', this.graphData.visualization]
        ];

        return {
            title: 'Graphical Analysis',
            type: 'graphical',
            data: graphData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications of Inverse Functions', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Function', app.function]);
            appData.push(['Inverse', app.inverse]);
            appData.push(['Context', app.context]);
            appData.push(['Used In', app.application]);
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

        const notes = this.generateInverseFunctionPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateInverseFunctionAlternativeMethods(this.currentProblem.type);

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
        const category = this.inverseFunctionTypes[this.currentProblem.type]?.category;
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

    createCommonMistakesSection() {
        if (!this.includeCommonMistakes) return null;

        const category = this.inverseFunctionTypes[this.currentProblem.type]?.category;
        const misconceptions = Object.values(this.misconceptions).filter(m => 
            m.commonIn.includes(category) || m.commonIn.includes('all_types')
        );

        if (misconceptions.length === 0) return null;

        const mistakeData = [
            ['Common Misconceptions', ''],
            ['', '']
        ];

        misconceptions.forEach((m, index) => {
            mistakeData.push([`Misconception ${index + 1}`, m.misconception]);
            mistakeData.push(['Reality', m.reality]);
            mistakeData.push(['Example', m.correctiveExample]);
            mistakeData.push(['', '']);
        });

        return {
            title: 'Common Mistakes and Misconceptions',
            type: 'mistakes',
            data: mistakeData
        };
    }

    generateInverseFunctionPedagogicalNotes(problemType) {
        const category = this.inverseFunctionTypes[problemType]?.category;

        const pedagogicalDatabase = {
            linear_inverse: {
                objectives: [
                    'Find inverse of linear functions',
                    'Verify inverses through composition',
                    'Understand domain and range swap'
                ],
                keyConcepts: [
                    'Swap x and y to find inverse',
                    'Inverse undoes original function',
                    'f(f⁻¹(x)) = x and f⁻¹(f(x)) = x'
                ],
                prerequisites: [
                    'Solving linear equations',
                    'Function notation',
                    'Variable manipulation'
                ],
                commonDifficulties: [
                    'Forgetting to swap variables',
                    'Confusing f⁻¹(x) with 1/f(x)',
                    'Errors in solving for y'
                ],
                teachingStrategies: [
                    'Emphasize swap step as key to inverses',
                    'Use undoing/reversing analogy',
                    'Practice verification heavily'
                ],
                extensions: [
                    'Quadratic inverses with restrictions',
                    'Rational function inverses',
                    'Composition of inverses'
                ],
                assessment: [
                    'Can student swap variables correctly?',
                    'Does student verify by composition?',
                    'Can student identify domain and range?'
                ]
            },
            quadratic_inverse: {
                objectives: [
                    'Understand need for domain restriction',
                    'Find inverse of restricted quadratic',
                    'Choose appropriate square root sign'
                ],
                keyConcepts: [
                    'Quadratics not one-to-one on ℝ',
                    'Horizontal line test',
                    'Vertex form simplifies inversion',
                    'Sign choice matches restriction'
                ],
                prerequisites: [
                    'Quadratic functions and parabolas',
                    'Vertex form',
                    'Square roots',
                    'One-to-one concept'
                ],
                commonDifficulties: [
                    'Not restricting domain',
                    'Wrong sign in square root',
                    'Confusing domain and range swap'
                ],
                teachingStrategies: [
                    'Graph parabola showing both halves',
                    'Practice horizontal line test',
                    'Emphasize sign choice reasoning'
                ],
                extensions: [
                    'Other non-one-to-one functions',
                    'Piecewise restrictions',
                    'Applications to real contexts'
                ],
                assessment: [
                    'Does student restrict domain appropriately?',
                    'Can student justify sign choice?',
                    'Can student verify inverse graphically?'
                ]
            },
            exponential_inverse: {
                objectives: [
                    'Understand log as inverse of exponential',
                    'Match logarithm base to exponential base',
                    'Apply logarithm properties'
                ],
                keyConcepts: [
                    'Logarithm undoes exponentiation',
                    'Base must match',
                    'log_b(b^x) = x',
                    'Domain swap: all reals ↔ positive reals'
                ],
                prerequisites: [
                    'Exponential functions',
                    'Logarithm definition',
                    'Log properties',
                    'Change of base'
                ],
                commonDifficulties: [
                    'Wrong logarithm base',
                    'Forgetting domain restrictions',
                    'Logarithm property errors'
                ],
                teachingStrategies: [
                    'Emphasize base matching',
                    'Practice log properties first',
                    'Use real applications (pH, decibels)'
                ],
                extensions: [
                    'Logarithmic inverses',
                    'Solving exponential equations',
                    'Growth and decay models'
                ],
                assessment: [
                    'Does student use correct base?',
                    'Can student identify domain restrictions?',
                    'Can student verify by composition?'
                ]
            },
            logarithmic_inverse: {
                objectives: [
                    'Understand exponential as inverse of log',
                    'Exponentiate correctly',
                    'Work with domain and range'
                ],
                keyConcepts: [
                    'Exponentiation undoes logarithm',
                    'b^(log_b(x)) = x',
                    'Domain: x > 0 ↔ all reals'
                ],
                prerequisites: [
                    'Logarithmic functions',
                    'Exponentiation',
                    'Log and exp relationship'
                ],
                commonDifficulties: [
                    'Confusing log and exp',
                    'Domain errors',
                    'Base confusion'
                ],
                teachingStrategies: [
                    'Emphasize inverse relationship',
                    'Graph both functions',
                    'Practice with natural and common logs'
                ],
                extensions: [
                    'Solving logarithmic equations',
                    'Applications to sciences',
                    'Change of base formula'
                ],
                assessment: [
                    'Can student exponentiate correctly?',
                    'Does student handle domain properly?',
                    'Can student verify inverses?'
                ]
            },
            rational_inverse: {
                objectives: [
                    'Find inverse using cross-multiplication',
                    'Identify domain restrictions',
                    'Solve rational equations'
                ],
                keyConcepts: [
                    'Cross-multiply to clear fractions',
                    'Collect and factor y terms',
                    'Excluded values in both f and f⁻¹'
                ],
                prerequisites: [
                    'Rational functions',
                    'Cross-multiplication',
                    'Excluded values',
                    'Factoring'
                ],
                commonDifficulties: [
                    'Cross-multiplication errors',
                    'Not identifying excluded values',
                    'Algebraic manipulation mistakes'
                ],
                teachingStrategies: [
                    'Practice cross-multiplication first',
                    'Emphasize domain identification',
                    'Work through algebra carefully'
                ],
                extensions: [
                    'More complex rational functions',
                    'Partial fractions',
                    'Applications to rates and ratios'
                ],
                assessment: [
                    'Can student cross-multiply correctly?',
                    'Does student identify all exclusions?',
                    'Can student verify inverse?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Find inverse functions'],
            keyConcepts: ['Swap x and y', 'Solve for y'],
            prerequisites: ['Function notation', 'Algebraic manipulation'],
            commonDifficulties: ['Various algebraic challenges'],
            teachingStrategies: ['Step-by-step guidance'],
            extensions: ['More complex functions'],
            assessment: ['Verify understanding of inverse concept']
        };
    }

    generateInverseFunctionAlternativeMethods(problemType) {
        const category = this.inverseFunctionTypes[problemType]?.category;

        const alternativeDatabase = {
            linear_inverse: {
                primaryMethod: 'Algebraic swap and solve',
                methods: [
                    {
                        name: 'Formula Method',
                        description: 'For f(x) = ax + b, directly use f⁻¹(x) = (x - b)/a'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Reflect graph over y = x and read off inverse function'
                    },
                    {
                        name: 'Point Method',
                        description: 'Find pattern by testing points: if f(2)=5, then f⁻¹(5)=2'
                    }
                ],
                comparison: 'Algebraic method is most systematic; formula method is fastest for linear; graphical provides visualization'
            },
            quadratic_inverse: {
                primaryMethod: 'Swap, restrict domain, and take square root',
                methods: [
                    {
                        name: 'Vertex Form Method',
                        description: 'Convert to vertex form first for easier inversion'
                    },
                    {
                        name: 'Completing the Square',
                        description: 'Complete the square if not in vertex form'
                    },
                    {
                        name: 'Graphical Restriction',
                        description: 'Graph and visually choose restriction, then find algebraically'
                    }
                ],
                comparison: 'Vertex form most efficient; completing square when needed; graphical helps understanding'
            },
            exponential_inverse: {
                primaryMethod: 'Swap and apply logarithm',
                methods: [
                    {
                        name: 'Direct Logarithm',
                        description: 'Apply log with matching base directly'
                    },
                    {
                        name: 'Change of Base',
                        description: 'Use any logarithm then convert with change of base formula'
                    },
                    {
                        name: 'Natural Log Default',
                        description: 'Use ln and convert if needed'
                    }
                ],
                comparison: 'Matching base is cleanest; change of base offers flexibility; ln is common default'
            },
            rational_inverse: {
                primaryMethod: 'Swap and cross-multiply',
                methods: [
                    {
                        name: 'Cross-Multiplication',
                        description: 'Standard cross-multiply, collect terms, factor'
                    },
                    {
                        name: 'Clear Fractions First',
                        description: 'Multiply by denominator before swapping'
                    },
                    {
                        name: 'Reciprocal Approach',
                        description: 'For special forms like f(x) = 1/x'
                    }
                ],
                comparison: 'Cross-multiplication is standard; other methods suit special cases'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard algebraic inversion',
            methods: [{
                name: 'Standard Method',
                description: 'Swap variables and solve for y'
            }],
            comparison: 'Use appropriate method for function type'
        };
    }
}

// Export the class
export default EnhancedInverseFunctionsMathematicalWorkbook;
