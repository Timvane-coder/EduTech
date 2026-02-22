Here is the complete updated code for the Algebraic Equations Workbook, structured identically to the factorization workbook:
// Enhanced Algebraic Equations Workbook - Comprehensive Algebraic Equations System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { MathematicsSvgDiagrams } from '../svg-data.js';
import { MathematicsDiagramsRegistry } from '../registry.js';
import { MathematicsDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedAlgebraicEquationsWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "algebraic_equations";
        this.cellWidth = 200;
        this.cellHeight = 28;
        this.headerHeight = 35;
        this.contentHeight = 40;
        this.rowLabelWidth = 60;
        this.fontSize = 12;
        this.contentFontSize = 14;

        this.currentProblem = null;
        this.currentContent = null;
        this.contentSteps = [];
        this.currentWorkbook = null;
        this.diagramRenderer = new MathematicsDiagramsRenderer();
        this.includeDiagramsInWorkbook = options.includeDiagrams !== false;
        this.diagramWidth = options.diagramWidth || 800;
        this.diagramHeight = options.diagramHeight || 600;
        this.renderedDiagrams = new Map();
        this.diagramsPromise = null;
        this.currentPractical = null;

        this.explanationLevel = options.explanationLevel || 'intermediate';
        this.includeVisualizations = options.includeVisualizations !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeExamples = options.includeExamples !== false;
        this.includeComparisons = options.includeComparisons !== false;
        this.includeCommonMisconceptions = options.includeCommonMisconceptions !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.includePracticals = options.includePracticals !== false;
        this.detailLevel = options.detailLevel || 'detailed';

        this.adaptiveDifficulty = options.adaptiveDifficulty !== false;
        this.metacognitiveSupport = options.metacognitiveSupport !== false;
        this.contextualLearning = options.contextualLearning !== false;
        this.assessmentFeedback = options.assessmentFeedback !== false;

        this.learnerProfile = {
            currentLevel: 'intermediate',
            masteredTopics: [],
            strugglingTopics: [],
            preferredLearningStyle: 'visual',
            progressHistory: []
        };

        this.mathematicsSymbols = this.initializeMathematicsSymbols();
        this.setThemeColors();
        this.initializeAlgebraicEquationsTopics();
        this.initializeAlgebraicEquationsLessons();
        this.initializeMathematicsPracticals();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            algebraic_equations: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
                headerBg: '#0d47a1',
                headerText: '#ffffff',
                sectionBg: '#bbdefb',
                sectionText: '#0d47a1',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e3f2fd',
                resultText: '#1565c0',
                definitionBg: '#fff8e1',
                definitionText: '#e65100',
                stepBg: '#e8eaf6',
                stepText: '#311b92',
                borderColor: '#42a5f5',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#e0f2f1',
                practicalBg: '#fff9c4',
                practicalText: '#f57f17',
                linearBg: '#e8f5e9',
                quadraticBg: '#e3f2fd',
                polynomialBg: '#fff8e1',
                rationalBg: '#fce4ec',
                radicalBg: '#f3e5f5'
            },
            algebra: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#4a148c',
                headerText: '#ffffff',
                sectionBg: '#e1bee7',
                sectionText: '#4a148c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#f3e5f5',
                resultText: '#6a1b9a',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#ab47bc',
                contentBg: '#e8eaf6',
                contentText: '#1a237e',
                diagramBg: '#fce4ec',
                structureBg: '#e8f5e9',
                practicalBg: '#fffde7',
                practicalText: '#f57f17',
                linearBg: '#e8f5e9',
                quadraticBg: '#e3f2fd',
                polynomialBg: '#fff8e1',
                rationalBg: '#fce4ec',
                radicalBg: '#f3e5f5'
            }
        };

        this.colors = themes[this.theme] || themes.algebraic_equations;
    }

    initializeMathematicsSymbols() {
        return {
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'sigma': 'Σ', 'phi': 'φ',
            'arrow': '→', 'doubleArrow': '↔', 'implies': '⟹', 'iff': '⟺',
            'plus': '+', 'minus': '−', 'plusminus': '±', 'times': '×',
            'divide': '÷', 'approximately': '≈', 'notEqual': '≠',
            'leq': '≤', 'geq': '≥', 'infinity': '∞', 'sqrt': '√',
            'squared': '²', 'cubed': '³', 'superscript4': '⁴', 'superscript5': '⁵',
            'subscript0': '₀', 'subscript1': '₁', 'subscript2': '₂',
            'dot': '·', 'degree': '°', 'therefore': '∴', 'because': '∵',
            'forAll': '∀', 'exists': '∃', 'element': '∈', 'subset': '⊂',
            'union': '∪', 'intersection': '∩', 'emptySet': '∅',
            'integer': 'ℤ', 'rational': 'ℚ', 'real': 'ℝ',
            'complex': 'ℂ', 'natural': 'ℕ',
            'discriminant': 'Δ', 'quadraticFormula': 'x = (−b ± √(b²−4ac)) / 2a',
            'absoluteValue': '|x|', 'composition': '∘'
        };
    }

    // ============================================================
    // TOPIC INITIALISATION
    // ============================================================

    initializeAlgebraicEquationsTopics() {
        this.mathematicsTopics = {
            linear_equations: {
                patterns: [
                    /linear.?equation|first.?degree/i,
                    /solve.?for.?x|isolate.?variable/i,
                    /ax\s*[+-]\s*b\s*=|one.?variable/i,
                    /balance.?method|inverse.?operation/i
                ],
                handler: this.handleLinearEquations.bind(this),
                name: 'Linear Equations',
                category: 'algebraic_equations',
                description: 'Solving equations of the form ax + b = c using inverse operations and the balance method',
                difficulty: 'beginner',
                prerequisites: ['arithmetic_operations', 'order_of_operations', 'integer_arithmetic']
            },

            quadratic_equations: {
                patterns: [
                    /quadratic.?equation|second.?degree/i,
                    /ax²|ax\^2|parabola.?equation/i,
                    /quadratic.?formula|complete.?square/i,
                    /discriminant|roots.?quadratic/i
                ],
                handler: this.handleQuadraticEquations.bind(this),
                name: 'Quadratic Equations',
                category: 'algebraic_equations',
                description: 'Solving ax² + bx + c = 0 by factoring, completing the square, and the quadratic formula',
                difficulty: 'intermediate',
                prerequisites: ['linear_equations', 'factoring_trinomials', 'square_roots']
            },

            polynomial_equations: {
                patterns: [
                    /polynomial.?equation|higher.?degree/i,
                    /cubic.?equation|quartic.?equation/i,
                    /rational.?root.?theorem|factor.?theorem/i,
                    /synthetic.?division|polynomial.?root/i
                ],
                handler: this.handlePolynomialEquations.bind(this),
                name: 'Polynomial Equations',
                category: 'algebraic_equations',
                description: 'Solving polynomial equations of degree ≥ 3 using the factor theorem, synthetic division, and rational root theorem',
                difficulty: 'advanced',
                prerequisites: ['quadratic_equations', 'polynomial_division', 'factoring_techniques']
            },

            rational_equations: {
                patterns: [
                    /rational.?equation|equation.*fraction/i,
                    /lcd|lowest.?common.?denominator/i,
                    /fraction.*equal|algebraic.?fraction/i,
                    /extraneous.?solution|excluded.?value/i
                ],
                handler: this.handleRationalEquations.bind(this),
                name: 'Rational Equations',
                category: 'algebraic_equations',
                description: 'Solving equations containing algebraic fractions by finding the LCD and checking for extraneous solutions',
                difficulty: 'intermediate',
                prerequisites: ['linear_equations', 'rational_expressions', 'factoring_techniques']
            },

            radical_equations: {
                patterns: [
                    /radical.?equation|equation.*square.?root/i,
                    /√.*=|sqrt.*equation/i,
                    /isolate.*radical|squaring.?both.?sides/i,
                    /extraneous.*radical|nth.?root.?equation/i
                ],
                handler: this.handleRadicalEquations.bind(this),
                name: 'Radical Equations',
                category: 'algebraic_equations',
                description: 'Solving equations containing radical expressions by isolating radicals and raising both sides to appropriate powers',
                difficulty: 'intermediate',
                prerequisites: ['linear_equations', 'quadratic_equations', 'radical_expressions']
            }
        };
    }

    // ============================================================
    // LESSON INITIALISATION
    // ============================================================

    initializeAlgebraicEquationsLessons() {
        this.lessons = {

            linear_equations: {
                title: "Linear Equations: The Foundation of Algebraic Problem Solving",
                concepts: [
                    "A linear equation has exactly one variable raised to the first power",
                    "Solving means finding the value of the variable that makes both sides equal",
                    "The balance method: whatever you do to one side, you must do to the other",
                    "Inverse operations undo each other: addition ↔ subtraction; multiplication ↔ division",
                    "Every linear equation in one variable has exactly one solution, no solution, or infinitely many solutions"
                ],
                theory: "Linear equations are the simplest algebraic equations and form the foundation for all more complex equation solving. The central principle is the balance metaphor: an equation is a perfectly balanced scale. Any operation applied to one side must be identically applied to the other to maintain balance. Solving requires isolating the variable by systematically undoing all operations surrounding it.",
                keyDefinitions: {
                    "Equation": "A mathematical statement asserting that two expressions are equal, connected by an '=' sign",
                    "Linear Equation": "An equation where the variable appears only to the first power; its graph is a straight line",
                    "Solution": "The value(s) of the variable that make the equation a true statement; also called the root",
                    "Inverse Operation": "An operation that undoes another: addition and subtraction are inverses; multiplication and division are inverses",
                    "Balance Method": "Maintaining equality by performing identical operations on both sides simultaneously",
                    "Coefficient": "The numerical multiplier of a variable term (e.g., in 5x, the coefficient is 5)",
                    "Constant Term": "A term with no variable (e.g., the 7 in 3x + 7 = 10)",
                    "Identity": "An equation true for ALL values of the variable (e.g., 2(x+1) = 2x+2); solution set = ℝ",
                    "Contradiction": "An equation true for NO value of the variable (e.g., x + 1 = x + 2); solution set = ∅"
                },
                solvingProcess: {
                    standardForm: "ax + b = c  (a ≠ 0)",
                    steps: [
                        "Step 1: Expand all brackets using the distributive property",
                        "Step 2: Collect like terms on each side separately",
                        "Step 3: Move all variable terms to one side using addition/subtraction",
                        "Step 4: Move all constant terms to the other side",
                        "Step 5: Divide both sides by the coefficient of the variable",
                        "Step 6: Verify the solution by substituting back into the original equation"
                    ],
                    example: {
                        equation: "3(2x − 1) + 4 = 2x + 9",
                        step1: "6x − 3 + 4 = 2x + 9 (expand bracket)",
                        step2: "6x + 1 = 2x + 9 (collect constants on left)",
                        step3: "6x − 2x = 9 − 1 (move terms across)",
                        step4: "4x = 8",
                        step5: "x = 2",
                        check: "3(2×2−1)+4 = 3(3)+4 = 13; 2×2+9 = 13 ✓"
                    }
                },
                specialCases: {
                    noSolution: {
                        description: "Variable eliminates and remaining statement is FALSE",
                        example: "2x + 3 = 2x + 7 → 3 = 7 (false) → No solution (∅)"
                    },
                    infiniteSolutions: {
                        description: "Variable eliminates and remaining statement is TRUE",
                        example: "3x + 6 = 3(x + 2) → 6 = 6 (true) → Infinite solutions (ℝ)"
                    },
                    fractionCoefficients: {
                        description: "Multiply through by LCD to clear fractions before solving",
                        example: "x/3 + 1/2 = 5/6 → multiply by 6: 2x + 3 = 5 → x = 1"
                    }
                },
                workedExamples: [
                    {
                        equation: "5x − 7 = 3x + 9",
                        solution: "2x = 16 → x = 8",
                        check: "5(8)−7 = 33; 3(8)+9 = 33 ✓"
                    },
                    {
                        equation: "x/4 − x/6 = 1",
                        solution: "LCD = 12; 3x − 2x = 12 → x = 12",
                        check: "12/4 − 12/6 = 3 − 2 = 1 ✓"
                    },
                    {
                        equation: "2(3x + 4) − 3(x − 2) = 14",
                        solution: "6x + 8 − 3x + 6 = 14 → 3x + 14 = 14 → 3x = 0 → x = 0",
                        check: "2(4) − 3(−2) = 8 + 6 = 14 ✓"
                    }
                ],
                applications: [
                    "Cost and profit calculations in business",
                    "Speed, distance, and time problems",
                    "Mixture and concentration problems",
                    "Perimeter and geometric measurement problems",
                    "Currency exchange and unit conversion"
                ]
            },

            quadratic_equations: {
                title: "Quadratic Equations: Three Powerful Methods and the Discriminant",
                concepts: [
                    "A quadratic equation is degree 2: ax² + bx + c = 0 (a ≠ 0)",
                    "A quadratic can have 2, 1, or 0 real solutions — determined by the discriminant",
                    "The discriminant Δ = b² − 4ac reveals the nature of solutions without solving",
                    "Factoring, completing the square, and the quadratic formula are three equivalent methods",
                    "Complex solutions occur in conjugate pairs when Δ < 0"
                ],
                theory: "Quadratic equations arise wherever area, projectile motion, or optimisation appears. Unlike linear equations (one method fits all), quadratics require selecting the most efficient method from three: factoring (fastest when possible), completing the square (geometric insight and derivation), or the quadratic formula (always works). The discriminant is the decision-making tool before solving.",
                keyDefinitions: {
                    "Quadratic Equation": "An equation of the form ax² + bx + c = 0 where a ≠ 0; highest power of variable is 2",
                    "Discriminant (Δ)": "The expression b² − 4ac; determines number and nature of solutions",
                    "Vertex Form": "a(x − h)² + k = 0; reveals vertex (h,k) of the parabola directly",
                    "Factored Form": "(x − r₁)(x − r₂) = 0; reveals roots r₁ and r₂ directly",
                    "Root / Zero": "A solution x that satisfies the equation; the x-intercept of the parabola",
                    "Completing the Square": "Adding (b/2a)² to form a perfect square trinomial; converts to vertex form",
                    "Quadratic Formula": "x = (−b ± √(b² − 4ac)) / 2a; derived by completing the square on the general form",
                    "Double Root": "A repeated solution when Δ = 0; parabola is tangent to the x-axis",
                    "Conjugate Pair": "Complex solutions a + bi and a − bi; occur when Δ < 0"
                },
                discriminantAnalysis: {
                    positive: {
                        condition: "Δ = b² − 4ac > 0",
                        nature: "Two distinct real solutions",
                        graphMeaning: "Parabola crosses x-axis at two distinct points"
                    },
                    zero: {
                        condition: "Δ = b² − 4ac = 0",
                        nature: "One repeated real solution (double root)",
                        graphMeaning: "Parabola is tangent to x-axis at exactly one point"
                    },
                    negative: {
                        condition: "Δ = b² − 4ac < 0",
                        nature: "Two complex conjugate solutions (no real solutions)",
                        graphMeaning: "Parabola does not intersect the x-axis"
                    }
                },
                methods: {
                    factoring: {
                        when: "When ax² + bx + c factors nicely over the integers",
                        process: [
                            "1. Write in standard form: ax² + bx + c = 0",
                            "2. Factor the left side completely",
                            "3. Apply Zero Product Property: if AB = 0 then A = 0 or B = 0",
                            "4. Solve each resulting linear equation",
                            "5. Verify both solutions"
                        ],
                        example: "x² − 5x + 6 = 0 → (x−2)(x−3) = 0 → x = 2 or x = 3"
                    },
                    completingTheSquare: {
                        when: "When factoring is not straightforward; when vertex form is needed",
                        process: [
                            "1. Write ax² + bx = −c (move constant to right)",
                            "2. If a ≠ 1, divide all terms by a",
                            "3. Add (b/2a)² to both sides",
                            "4. Left side = (x + b/2a)²; simplify right side",
                            "5. Take square root of both sides (±)",
                            "6. Solve for x"
                        ],
                        example: "x² + 6x + 5 = 0 → x²+6x = −5 → (x+3)²=4 → x+3=±2 → x=−1 or x=−5"
                    },
                    quadraticFormula: {
                        when: "Always applicable; essential when factoring fails or discriminant is needed",
                        formula: "x = (−b ± √(b² − 4ac)) / 2a",
                        process: [
                            "1. Identify a, b, c from ax² + bx + c = 0",
                            "2. Calculate the discriminant: Δ = b² − 4ac",
                            "3. Interpret Δ: (>0 two real; =0 one real; <0 complex)",
                            "4. Substitute into formula: x = (−b ± √Δ) / 2a",
                            "5. Simplify both solutions",
                            "6. Verify by substitution"
                        ],
                        example: "2x² − 3x − 2 = 0; a=2,b=−3,c=−2; Δ=9+16=25; x=(3±5)/4 → x=2 or x=−1/2"
                    }
                },
                workedExamples: [
                    {
                        equation: "x² − 7x + 12 = 0",
                        method: "Factoring",
                        solution: "(x−3)(x−4)=0 → x=3 or x=4",
                        discriminant: "Δ = 49−48 = 1 > 0 (two distinct real roots) ✓"
                    },
                    {
                        equation: "4x² − 4x + 1 = 0",
                        method: "Quadratic formula",
                        solution: "Δ=16−16=0; x=4/8=1/2 (double root)",
                        discriminant: "Δ = 0 → parabola tangent to x-axis at x = 1/2"
                    },
                    {
                        equation: "x² + 2x + 5 = 0",
                        method: "Quadratic formula",
                        solution: "Δ=4−20=−16; x=(−2±4i)/2 = −1±2i",
                        discriminant: "Δ < 0 → two complex conjugate solutions"
                    }
                ],
                vietasFormulas: {
                    sumOfRoots: "r₁ + r₂ = −b/a",
                    productOfRoots: "r₁ × r₂ = c/a",
                    use: "Verify solutions without full substitution; construct quadratics from known roots"
                },
                applications: [
                    "Projectile motion: finding time of flight and maximum height",
                    "Area problems: dimensions of rectangles given area",
                    "Break-even analysis in business",
                    "Lens and mirror equations in physics (optics)",
                    "Structural engineering: load and deflection calculations"
                ]
            },

            polynomial_equations: {
                title: "Polynomial Equations: Factor Theorem, Rational Roots, and Synthetic Division",
                concepts: [
                    "A polynomial equation of degree n has exactly n roots (counting multiplicity) over ℂ",
                    "The Rational Root Theorem lists all possible rational roots of integer polynomials",
                    "The Factor Theorem: (x − r) is a factor if and only if P(r) = 0",
                    "Synthetic division efficiently divides a polynomial by a linear factor (x − r)",
                    "Once a root is found, reduce degree by dividing; repeat until fully solved"
                ],
                theory: "Polynomial equations of degree ≥ 3 require a strategy: the Rational Root Theorem generates a finite list of candidates; synthetic division tests each efficiently; the Factor Theorem confirms factors; and the process repeats by reducing degree until only quadratics or linears remain. The Fundamental Theorem of Algebra guarantees exactly n roots (real or complex) for a degree-n polynomial.",
                keyDefinitions: {
                    "Polynomial Equation": "An equation P(x) = 0 where P(x) has integer non-negative exponents; degree = highest exponent",
                    "Factor Theorem": "P(r) = 0 ⟺ (x − r) is a factor of P(x); used to confirm roots and extract factors",
                    "Remainder Theorem": "When P(x) is divided by (x − r), the remainder equals P(r)",
                    "Rational Root Theorem": "If P(x) = aₙxⁿ + ... + a₀ has integer coefficients, all rational roots have form ±p/q where p | a₀ and q | aₙ",
                    "Synthetic Division": "A shorthand algorithm for dividing a polynomial by a linear factor (x − r)",
                    "Multiplicity": "The number of times a root r appears; a root of multiplicity m means (x−r)^m divides P(x)",
                    "Fundamental Theorem of Algebra": "Every non-constant polynomial with complex coefficients has at least one complex root; degree n → exactly n roots over ℂ",
                    "Depressed Polynomial": "The quotient polynomial after dividing out a known factor; has degree one less than original"
                },
                rationalRootTheorem: {
                    statement: "For P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₀ with integer coefficients, any rational root = ±(factor of a₀)/(factor of aₙ)",
                    process: [
                        "1. List all factors of the constant term a₀",
                        "2. List all factors of the leading coefficient aₙ",
                        "3. Form all possible fractions ±p/q (reduce and remove duplicates)",
                        "4. Test each candidate using synthetic division or direct substitution",
                        "5. When P(r) = 0, divide out (x − r) and continue with depressed polynomial"
                    ],
                    example: "P(x) = 2x³ − x² − 5x + 2; a₀=2 (±1,±2), aₙ=2 (±1,±2) → candidates: ±1, ±2, ±1/2; test x=2: P(2)=16−4−10+2=4≠0; test x=1/2: P(1/2)=1/4−1/4−5/2+2=0 ✓"
                },
                syntheticDivision: {
                    description: "Divides P(x) by (x − r) using only coefficients",
                    steps: [
                        "1. Write the root r and all coefficients of P(x) in a row",
                        "2. Bring down the leading coefficient",
                        "3. Multiply by r; add to next coefficient; repeat across all coefficients",
                        "4. Last number is remainder; all others are coefficients of the quotient",
                        "5. If remainder = 0, r is a root and quotient is the depressed polynomial"
                    ],
                    example: "Divide 2x³ − x² − 5x + 2 by (x − 2): coefficients [2, −1, −5, 2]; r=2; depressed = 2x² + 3x − 1"
                },
                workedExamples: [
                    {
                        equation: "x³ − 6x² + 11x − 6 = 0",
                        step1: "Candidates: ±1, ±2, ±3, ±6; test x=1: 1−6+11−6=0 ✓",
                        step2: "Divide by (x−1): x² − 5x + 6",
                        step3: "Factor: (x−2)(x−3)",
                        solution: "x = 1, 2, 3"
                    },
                    {
                        equation: "2x³ + 3x² − 11x − 6 = 0",
                        step1: "Candidates: ±1, ±2, ±3, ±6, ±1/2, ±3/2; test x=2: 16+12−22−6=0 ✓",
                        step2: "Synthetic division by (x−2): 2x² + 7x + 3",
                        step3: "Factor: (2x+1)(x+3)",
                        solution: "x = 2, −1/2, −3"
                    },
                    {
                        equation: "x⁴ − 5x² + 4 = 0",
                        step1: "Biquadratic substitution: u = x², u² − 5u + 4 = 0",
                        step2: "(u−1)(u−4)=0 → u=1 or u=4",
                        step3: "x²=1 → x=±1; x²=4 → x=±2",
                        solution: "x = ±1, ±2"
                    }
                ],
                multiplicitiesAndGraphs: {
                    oddMultiplicity: "Root crosses x-axis (changes sign) — linear (m=1), cubic-looking (m=3)",
                    evenMultiplicity: "Root touches x-axis and bounces back (does not change sign) — parabolic (m=2), quartic-looking (m=4)"
                },
                applications: [
                    "Engineering: polynomial models for beam deflection and structural loads",
                    "Economics: modelling total cost/revenue as degree-3 or higher polynomials",
                    "Physics: energy potential functions in classical mechanics",
                    "Computer graphics: Bézier curves defined by polynomial equations",
                    "Signal processing: filter design using polynomial transfer functions"
                ]
            },

            rational_equations: {
                title: "Rational Equations: LCD Method and Extraneous Solutions",
                concepts: [
                    "A rational equation contains at least one algebraic fraction",
                    "Solving requires multiplying through by the LCD to eliminate all denominators",
                    "Excluded values make a denominator zero; they can never be solutions",
                    "Extraneous solutions satisfy the simplified equation but not the original",
                    "Always check solutions by substituting back into the ORIGINAL equation"
                ],
                theory: "Rational equations are transformed into polynomial equations by multiplying through by the LCD. This transformation is powerful but introduces a critical risk: solutions may emerge that were excluded from the original domain (making a denominator zero). These extraneous solutions must be identified and discarded. The domain check is not optional — it is as important as the solution itself.",
                keyDefinitions: {
                    "Rational Equation": "An equation containing at least one rational expression (algebraic fraction)",
                    "Rational Expression": "A fraction where the numerator and/or denominator is a polynomial",
                    "LCD (Least Common Denominator)": "The smallest expression divisible by all denominators in the equation",
                    "Excluded Value": "A value of the variable that makes any denominator equal to zero; not in the domain",
                    "Extraneous Solution": "A value that satisfies the transformed equation but makes a denominator zero in the original; not a valid solution",
                    "Domain": "The set of all values for which the equation is defined (all values except excluded values)",
                    "Proportion": "A special case: a/b = c/d; solved by cross-multiplication"
                },
                solvingProcess: {
                    steps: [
                        "Step 1: Factor all denominators completely",
                        "Step 2: Identify all excluded values (values that make any denominator zero)",
                        "Step 3: Find the LCD of all denominators",
                        "Step 4: Multiply every term on both sides by the LCD",
                        "Step 5: Simplify; each fraction's denominator cancels with part of the LCD",
                        "Step 6: Solve the resulting polynomial equation",
                        "Step 7: Check each solution against the excluded values — discard any that match",
                        "Step 8: Verify remaining solutions in the original equation"
                    ],
                    example: {
                        equation: "3/(x−2) + 1/(x+1) = 5/((x−2)(x+1))",
                        excluded: "x ≠ 2, x ≠ −1",
                        lcd: "(x−2)(x+1)",
                        multiplied: "3(x+1) + (x−2) = 5",
                        expanded: "3x+3+x−2 = 5 → 4x+1=5 → x=1",
                        check: "x=1 ≠ 2 and ≠ −1 ✓; verify: 3/(−1)+1/2=5/((−1)(2)) → −3+1/2=−5/2 → −5/2=−5/2 ✓"
                    }
                },
                workedExamples: [
                    {
                        equation: "x/(x−3) = 3 + 9/(x−3)",
                        excluded: "x ≠ 3",
                        solution: "Multiply by (x−3): x = 3(x−3) + 9 → x = 3x−9+9 → x = 3x → −2x = 0 → x = 0",
                        check: "x=0≠3 ✓; 0/(−3)=3+9/(−3) → 0=3−3=0 ✓"
                    },
                    {
                        equation: "2/(x+1) + 1/(x−1) = 4/(x²−1)",
                        excluded: "x ≠ ±1",
                        solution: "LCD=(x+1)(x−1); 2(x−1)+1(x+1)=4 → 2x−2+x+1=4 → 3x=5 → x=5/3",
                        check: "x=5/3≠±1 ✓"
                    },
                    {
                        equation: "x/(x−2) = 2/(x−2) + 1",
                        excluded: "x ≠ 2",
                        solution: "Multiply by (x−2): x = 2 + (x−2) → x = x → 0=0 (identity)",
                        result: "All real numbers except x=2; infinite solutions on domain"
                    },
                    {
                        equation: "(x+1)/(x−1) = 2x/(x−1) − 1/(x−1)",
                        excluded: "x ≠ 1",
                        solution: "Multiply by (x−1): x+1 = 2x−1 → x=2",
                        check: "x=2≠1 ✓; 3/1=4/1−1/1=3 ✓"
                    }
                ],
                extraneousSolutionDemonstration: {
                    equation: "x/(x−3) − 3/(x−3) = 1",
                    excluded: "x ≠ 3",
                    working: "Multiply by (x−3): x − 3 = x−3 → 0=0 (identity for domain values)",
                    tricky: "If solved incorrectly as x=3: denominator = 0 → undefined → extraneous",
                    lesson: "The LCD multiplication must never produce a solution equal to an excluded value"
                },
                applications: [
                    "Rate problems: combined work rates (1/t₁ + 1/t₂ = 1/t_combined)",
                    "Mixture problems: concentration of combined solutions",
                    "Optics: lens equation (1/f = 1/do + 1/di)",
                    "Electrical circuits: parallel resistance (1/R = 1/R₁ + 1/R₂)",
                    "Financial: harmonic mean of growth rates"
                ]
            },

            radical_equations: {
                title: "Radical Equations: Isolation, Power Elimination, and Extraneous Solutions",
                concepts: [
                    "A radical equation contains a variable under a radical sign (√, ∛, etc.)",
                    "Solve by isolating the radical on one side, then raising both sides to the appropriate power",
                    "Squaring both sides can introduce extraneous solutions — always verify in the original",
                    "If two radicals are present, isolate one, eliminate, simplify, then eliminate the second",
                    "Even-index radicals (√, ⁴√) require the radicand to be non-negative for real solutions"
                ],
                theory: "Radical equations are solved by converting them to polynomial equations through strategic power-raising. The key constraint is that squaring (or raising to any even power) is not a reversible operation over all reals — it can create solutions that satisfy the squared equation but not the original. Checking for extraneous solutions is therefore mathematically mandatory, not merely a good habit.",
                keyDefinitions: {
                    "Radical Equation": "An equation where the variable appears under a radical (root) sign",
                    "Radicand": "The expression under the radical sign",
                    "Index": "The degree of the root: index 2 = square root (√), index 3 = cube root (∛)",
                    "Extraneous Solution": "A solution of the transformed (power-raised) equation that does not satisfy the original radical equation",
                    "Principal Square Root": "The non-negative square root; √x ≥ 0 by convention for real x ≥ 0",
                    "Domain Restriction": "For even-index radicals, radicand ≥ 0; this restricts permissible solutions",
                    "Radical Isolation": "Rearranging the equation so a single radical term is alone on one side before power-raising"
                },
                solvingProcess: {
                    singleRadical: {
                        steps: [
                            "Step 1: Isolate the radical term on one side",
                            "Step 2: Raise both sides to the power equal to the radical index",
                            "Step 3: Solve the resulting equation (linear or quadratic)",
                            "Step 4: Check all solutions in the ORIGINAL equation — discard extraneous solutions"
                        ],
                        example: {
                            equation: "√(3x + 1) = x − 1",
                            step1: "Radical is already isolated: √(3x+1) = x−1",
                            step2: "Square both sides: 3x+1 = (x−1)² = x²−2x+1",
                            step3: "x² − 5x = 0 → x(x−5) = 0 → x=0 or x=5",
                            check_x0: "√(1) = 0−1 → 1 = −1 ✗ (extraneous — left side ≥ 0, right side = −1)",
                            check_x5: "√(16) = 5−1 → 4 = 4 ✓",
                            solution: "x = 5 only"
                        }
                    },
                    twoRadicals: {
                        steps: [
                            "Step 1: Isolate one radical on one side",
                            "Step 2: Square both sides (expands the non-isolated radical side)",
                            "Step 3: Isolate the remaining radical",
                            "Step 4: Square both sides again",
                            "Step 5: Solve and check all solutions in original equation"
                        ],
                        example: {
                            equation: "√(x+5) − √(x−3) = 2",
                            step1: "√(x+5) = 2 + √(x−3)",
                            step2: "x+5 = 4 + 4√(x−3) + (x−3) → x+5 = x+1 + 4√(x−3)",
                            step3: "4 = 4√(x−3) → 1 = √(x−3)",
                            step4: "1 = x−3 → x = 4",
                            check: "√9 − √1 = 3−1 = 2 ✓"
                        }
                    },
                    cubeRoots: {
                        note: "Cube roots: no extraneous solutions risk (cube root of negative is real; function is 1-to-1)",
                        example: "∛(2x−1) = 3 → 2x−1 = 27 → x = 14; check: ∛27 = 3 ✓"
                    }
                },
                workedExamples: [
                    {
                        equation: "√(2x − 3) = 5",
                        solution: "2x−3 = 25 → x = 14",
                        check: "√(25) = 5 ✓"
                    },
                    {
                        equation: "√(x + 7) = x − 5",
                        solution: "x+7 = x²−10x+25 → x²−11x+18=0 → (x−2)(x−9)=0 → x=2 or x=9",
                        check_x2: "√9 = 2−5 → 3=−3 ✗ (extraneous)",
                        check_x9: "√16 = 9−5 → 4=4 ✓",
                        solution_final: "x = 9 only"
                    },
                    {
                        equation: "∛(x² − 1) = 2",
                        solution: "x²−1 = 8 → x² = 9 → x = ±3",
                        check: "Both: ∛(9−1) = ∛8 = 2 ✓; both valid (cube root has no domain restriction for real x)"
                    }
                ],
                whyExtraneousSolutionsOccur: {
                    explanation: "Squaring both sides maps both positive and negative values to the same positive result. A solution x = a might make the original radical side positive (valid) while a different solution x = b makes the linear side negative — both satisfy the squared equation but only one satisfies the original.",
                    prevention: "Always check: if radical index is even, the radical side must equal a non-negative expression. Reject any solution that would require the radical to equal a negative number."
                },
                applications: [
                    "Physics: solving for velocity in kinetic energy equations (v = √(2KE/m))",
                    "Geometry: finding side lengths from area or diagonal expressions",
                    "Engineering: solving resonance frequency equations involving square roots",
                    "Finance: solving for interest rate in compound growth formulas",
                    "Statistics: solving for standard deviation in spread calculations"
                ]
            }
        };
    }

    // ============================================================
    // PRACTICAL MATHEMATICS / DISCOVERIES
    // ============================================================

    initializeMathematicsPracticals() {
        this.mathematicsPracticals = {

            // ============================================================
            // PRACTICAL 1: BALANCE SCALES — LINEAR EQUATIONS DISCOVERY
            // ============================================================

            balance_scales_linear_equations: {
                name: "Balance Scales: Discovering the Principles of Linear Equation Solving",
                relatedTopics: ['linear_equations'],
                category: 'algebraic_equations',
                historicalBackground: {
                    origin: "Ancient Egyptian and Babylonian mathematics (circa 2000 BCE)",
                    significance: "The balance scale was the first physical model for equation solving; its logic underpins all algebraic manipulation",
                    historicalContext: "The Rhind Papyrus (c.1650 BCE) contains linear equation problems using the 'method of false position', effectively a physical balance approach",
                    modernRelevance: "The balance metaphor remains the most intuitive foundation for algebraic thinking and is used in curricula worldwide",
                    mathematicalFoundation: "Formally grounded in the addition, subtraction, multiplication, and division properties of equality — the axioms of equation solving"
                },
                practicalMathematics: {
                    title: "Discovering Equation Solving Principles Through Physical Balance",
                    hypothesis: "If an equation represents a perfectly balanced scale, then any operation that maintains balance (applied equally to both sides) will preserve the equality while progressively isolating the unknown",
                    purpose: "Derive the principles of linear equation solving by modelling equations physically on a balance scale and observing what operations maintain balance",
                    materials: [
                        "A balance scale (physical or virtual simulation)",
                        "Identical mystery weights (representing the unknown variable x)",
                        "Known standard weights (1g, 2g, 5g, 10g units representing constants)",
                        "Bags to contain groups of weights (representing bracketed expressions)",
                        "Record sheet for documenting balance operations",
                        "Optional: virtual balance (e.g., PhET Equality Explorer simulation)"
                    ],
                    procedure: [
                        "PART A: Understanding the Balance Model",
                        "1. Place 3 mystery weights and 4 known weights (4g) on the left pan",
                        "   Place 16g of known weights on the right pan",
                        "   Observe: the scale balances → this represents 3x + 4 = 16",
                        "",
                        "2. Remove 4g from the left pan; remove 4g from the right pan",
                        "   Observe: scale still balances → 3x = 12",
                        "   Principle derived: subtracting equal amounts from both sides preserves balance",
                        "",
                        "3. Divide both pans into 3 equal portions; isolate one portion on each side",
                        "   Observe: one mystery weight = 4g → x = 4",
                        "   Principle derived: dividing both sides by equal amounts preserves balance",
                        "",
                        "PART B: Testing Balance Principles",
                        "4. Create the equation 2x + 3 = x + 7 on the scale",
                        "   Remove 1 mystery weight from each side → x + 3 = 7",
                        "   Remove 3g from each side → x = 4",
                        "   Verify: weigh the mystery weight against 4g — do they balance?",
                        "",
                        "5. Create: 5x − 2 = 3x + 6 (use negative weight concept for subtraction)",
                        "   Remove 3 mystery weights from each side → 2x − 2 = 6",
                        "   Add 2g to each side → 2x = 8 → x = 4",
                        "",
                        "PART C: Special Cases Investigation",
                        "6. Attempt: 2x + 3 = 2x + 7",
                        "   Remove 2x from each side → 3 = 7 (scale immediately unbalances)",
                        "   Conclusion: No value of x can balance this — no solution",
                        "",
                        "7. Attempt: 2(x + 3) = 2x + 6",
                        "   Expand left side: 2x + 6 = 2x + 6",
                        "   Remove 2x: 6 = 6 (scale perfectly balanced regardless of mystery weight mass)",
                        "   Conclusion: Any weight works — infinitely many solutions",
                        "",
                        "PART D: Generalising the Principles",
                        "8. From your observations, write the four properties of equality you discovered:",
                        "   • Addition Property: If a = b, then a + c = b + c",
                        "   • Subtraction Property: If a = b, then a − c = b − c",
                        "   • Multiplication Property: If a = b, then ac = bc (c ≠ 0)",
                        "   • Division Property: If a = b, then a/c = b/c (c ≠ 0)"
                    ],
                    observations: {
                        balancePreserved: "Adding, subtracting, multiplying, or dividing both sides by equal non-zero amounts preserves equality",
                        imbalanceSignal: "If all variable terms cancel and a false numerical statement results, the equation has no solution",
                        identitySignal: "If all terms cancel and a true numerical statement results, the equation has infinitely many solutions",
                        isolationPrinciple: "Solving = progressively reducing the equation by inverse operations until the variable stands alone"
                    },
                    dataTable: [
                        ["Equation", "Operation Applied", "Result", "Principle Used"],
                        ["3x + 4 = 16", "Subtract 4 from both sides", "3x = 12", "Subtraction Property of Equality"],
                        ["3x = 12", "Divide both sides by 3", "x = 4", "Division Property of Equality"],
                        ["2x + 3 = x + 7", "Subtract x from both sides", "x + 3 = 7", "Subtraction Property"],
                        ["x + 3 = 7", "Subtract 3 from both sides", "x = 4", "Subtraction Property"],
                        ["2x + 3 = 2x + 7", "Subtract 2x both sides", "3 = 7 (FALSE)", "No Solution — Contradiction"],
                        ["2(x+3) = 2x+6", "Expand, subtract 2x both sides", "6 = 6 (TRUE)", "Infinite Solutions — Identity"]
                    ],
                    conclusions: [
                        "An equation is a balance: both sides must be treated identically at every step",
                        "The four properties of equality (addition, subtraction, multiplication, division) are the only tools needed to solve any linear equation",
                        "A contradiction (variable cancels to leave a false statement) means no solution exists",
                        "An identity (variable cancels to leave a true statement) means all values in the domain are solutions",
                        "The physical balance model makes abstract algebraic manipulation concrete and intuitive"
                    ],
                    extensions: [
                        "Model a two-step equation and record every balance operation formally",
                        "Investigate: does multiplying both sides by zero preserve balance? Why is this excluded?",
                        "Model an equation with fractions: how does the LCD elimination correspond to balance operations?",
                        "Connect to graphs: plot y = 3x + 4 and y = 16; the x-intersection is the solution"
                    ],
                    realWorldConnections: [
                        "Pharmacy: drug dosage calculations use algebraic balance to find concentrations",
                        "Logistics: balancing cargo loads to a target weight using linear equations",
                        "Finance: balancing income and expenditure equations in budgeting",
                        "Chemistry: balancing chemical equations (mass conservation as equality)"
                    ]
                }
            },

            // ============================================================
            // PRACTICAL 2: PROJECTILE MOTION — QUADRATIC EQUATIONS DISCOVERY
            // ============================================================

            projectile_motion_quadratic: {
                name: "Projectile Motion: Discovering Quadratic Equations Through Physics",
                relatedTopics: ['quadratic_equations'],
                category: 'algebraic_equations',
                historicalBackground: {
                    mathematician: "Galileo Galilei (1564–1642)",
                    work: "Two New Sciences (Discorsi e dimostrazioni matematiche, 1638)",
                    contribution: "Galileo proved that projectile trajectories are parabolic — the first experimental discovery of a quadratic relationship in nature",
                    significance: "Unified terrestrial and celestial mechanics; showed that mathematical equations could precisely model physical reality",
                    additionalContext: "Isaac Newton (1687) provided the theoretical framework: h = h₀ + v₀t − ½gt², where g ≈ 9.8 m/s²",
                    modernRelevance: "Quadratic equations remain fundamental to ballistics, sports science, aerospace engineering, and computer game physics engines"
                },
                practicalMathematics: {
                    title: "Modelling Projectile Trajectories with Quadratic Equations",
                    hypothesis: "If the height of a projectile is modelled by a quadratic equation h = −at² + v₀t + h₀, then the equation's roots represent the times of launch and landing, and the vertex represents maximum height",
                    purpose: "Collect projectile motion data, fit a quadratic model, solve quadratic equations to find key times, and connect algebraic solutions to physical events",
                    materials: [
                        "A ball (tennis or rubber)",
                        "Video recording device (smartphone) with slow-motion capability",
                        "Measuring tape or metre ruler (for scale calibration)",
                        "Grid paper or graph paper for trajectory sketching",
                        "Tracker software or GeoGebra (optional — for precise data extraction)",
                        "Calculator or CAS for quadratic solving",
                        "Printed data collection table"
                    ],
                    procedure: [
                        "PART A: Data Collection",
                        "1. Set up a 2-metre ruler vertically in the background as a scale reference",
                        "2. Film a ball thrown vertically upward in slow-motion",
                        "3. Using video analysis (every 5 frames), record time t (seconds) and height h (metres):",
                        "   Record at least 8–10 data points from launch to landing",
                        "",
                        "PART B: Fitting the Quadratic Model",
                        "4. Plot the (t, h) data points on graph paper",
                        "5. Observe the parabolic shape — confirm it is quadratic",
                        "6. Use three data points to set up a system of equations: h = at² + bt + c",
                        "   Solve the system to find a, b, and c",
                        "7. Compare your a-value to −½g; does a ≈ −4.9? Discuss sources of error.",
                        "",
                        "PART C: Solving the Quadratic Equation",
                        "8. Use your model h = at² + bt + c with your values of a, b, c",
                        "9. PROBLEM 1: Find when the ball is at maximum height",
                        "   Use vertex formula: t_vertex = −b/(2a)",
                        "   Maximum height: h_max = c − b²/(4a)",
                        "",
                        "10. PROBLEM 2: Find when the ball returns to launch height h = h₀",
                        "    Solve at² + bt + (c − h₀) = 0 using the quadratic formula",
                        "    Interpret both solutions: t = 0 (launch) and t = T (landing)",
                        "",
                        "11. PROBLEM 3: Find when the ball is at half its maximum height",
                        "    Set h = h_max/2; solve the resulting quadratic",
                        "    Interpret the two solutions (once rising, once falling)",
                        "",
                        "PART D: Discriminant Analysis",
                        "12. Modify the model: what initial velocity would make the ball just reach h = 10m?",
                        "    Set discriminant = 0 for the critical velocity",
                        "13. What does Δ < 0 mean physically for a projectile equation?"
                    ],
                    dataTable: [
                        ["Time t (s)", "Height h (m)", "Predicted h (model)", "Residual (actual − predicted)"],
                        ["0.0", "h₀", "—", "—"],
                        ["0.1", "—", "—", "—"],
                        ["0.2", "—", "—", "—"],
                        ["0.3", "—", "—", "—"],
                        ["0.4", "h_max", "—", "—"],
                        ["0.5", "—", "—", "—"],
                        ["0.6", "—", "—", "—"],
                        ["0.7", "—", "—", "—"],
                        ["0.8", "h₀ (landing)", "—", "—"]
                    ],
                    keyQuadraticConnections: {
                        roots: "Times of launch (t=0) and landing (t=T) — the zeros of the quadratic",
                        vertex: "Time of maximum height — the vertex of the parabola",
                        discriminant: "Δ > 0: ball lands after launch; Δ = 0: ball just barely falls back; Δ < 0: physically impossible (object never comes down — inconsistent model)",
                        axis: "Axis of symmetry: t = −b/2a — trajectory is symmetric about the time of maximum height"
                    },
                    conclusions: [
                        "Projectile height follows a quadratic equation: h = −½gt² + v₀t + h₀",
                        "The roots of the quadratic represent physically meaningful events: launch and landing times",
                        "The vertex formula gives maximum height and the time it occurs",
                        "The discriminant determines whether and how many times the projectile reaches a given height",
                        "Quadratic equations are not abstract — they are the precise language of real physical motion"
                    ],
                    extensions: [
                        "Film a horizontal throw and model both x(t) (linear) and h(t) (quadratic) simultaneously",
                        "Use the discriminant to find the minimum launch speed needed to clear a barrier of height H",
                        "Investigate the effect of air resistance: does the actual trajectory deviate from a perfect parabola? Why?",
                        "Connect to calculus: the derivative of h(t) = 0 at the vertex — verify using the vertex formula"
                    ],
                    realWorldConnections: [
                        "Sports science: optimising ball trajectory in basketball, cricket, and golf",
                        "Military ballistics: predicting shell range and height",
                        "Game development: physics engines compute quadratic trajectories for every thrown object",
                        "Architecture: parabolic arch bridges follow quadratic load distribution equations",
                        "Astronomy: orbital mechanics of comets under simplified gravitational models"
                    ]
                }
            },

            // ============================================================
            // PRACTICAL 3: RATIONAL EQUATIONS — WORK AND RATE DISCOVERY
            // ============================================================

            work_rate_rational_equations: {
                name: "Work and Rate Problems: Discovering Rational Equations in Action",
                relatedTopics: ['rational_equations'],
                category: 'algebraic_equations',
                historicalBackground: {
                    origin: "Ancient Babylonian and Egyptian mathematics — work and rate problems appear in the Moscow and Rhind Papyri",
                    development: "Formalised in al-Khwarizmi's algebra and later in Renaissance arithmetic textbooks as 'partnership problems'",
                    significance: "Rate problems were among the first systematic applications of algebraic equations; the combined-work formula 1/t = 1/t₁ + 1/t₂ is a rational equation that appears in physics, chemistry, and engineering",
                    modernRelevance: "Rational equations model parallel circuits, lens equations, hydraulic flow, and financial harmonic means — all derived from the combined-rate principle"
                },
                practicalMathematics: {
                    title: "Timing Real Work Tasks to Discover the Combined Rate Formula",
                    hypothesis: "If two workers each complete a task independently in times t₁ and t₂, their combined time t_combined satisfies the rational equation 1/t₁ + 1/t₂ = 1/t_combined, and this can be verified by physical measurement",
                    purpose: "Derive the combined work-rate formula experimentally, verify it algebraically, and solve rational equations arising from rate problems",
                    materials: [
                        "Two containers of identical volume (e.g., 500ml jugs)",
                        "Two funnels of different aperture sizes",
                        "A stopwatch (or smartphone timer)",
                        "Measuring cylinders",
                        "Water supply",
                        "Data recording sheet"
                    ],
                    procedure: [
                        "PART A: Independent Rate Measurement",
                        "1. Use Funnel A alone to fill the 500ml container from full to empty",
                        "   Record time: t₁ = ___ seconds",
                        "   Calculate rate: Rate A = 500/t₁ ml/second",
                        "",
                        "2. Use Funnel B alone to fill the same container",
                        "   Record time: t₂ = ___ seconds",
                        "   Calculate rate: Rate B = 500/t₂ ml/second",
                        "",
                        "PART B: Combined Rate — Prediction",
                        "3. Predict the combined time using the rational equation:",
                        "   1/t₁ + 1/t₂ = 1/t_combined",
                        "   Solve for t_combined algebraically:",
                        "   LCD = t₁·t₂; multiply through: t₂ + t₁ = t₁·t₂/t_combined",
                        "   → t_combined = (t₁·t₂)/(t₁ + t₂)",
                        "   Record predicted combined time: t_combined = ___",
                        "",
                        "PART C: Experimental Verification",
                        "4. Use BOTH funnels simultaneously to fill the 500ml container",
                        "   Record actual time: t_actual = ___",
                        "   Compare: |t_combined − t_actual| / t_combined × 100% = ___% error",
                        "",
                        "PART D: Solving Rational Equation Problems",
                        "5. Problem Set — solve each using the rational equation method:",
                        "",
                        "   Problem 1: Pipe A fills a tank in 6 hours, Pipe B in 4 hours.",
                        "   Together: 1/6 + 1/4 = 1/t → LCD=12: 2+3=12/t → t=12/5=2.4 hours",
                        "",
                        "   Problem 2: Worker X completes a job in t hours; Worker Y in (t+2) hours.",
                        "   Together they finish in 3 hours. Find t.",
                        "   1/t + 1/(t+2) = 1/3; LCD=3t(t+2)",
                        "   3(t+2) + 3t = t(t+2) → 6t+6 = t²+2t → t²−4t−6=0",
                        "   t = (4±√40)/2 = 2±√10; take positive root: t ≈ 5.16 hours",
                        "",
                        "   Problem 3: An inlet pipe fills a cistern in 8 hours; a drain empties it in 12 hours.",
                        "   If both are open simultaneously, how long to fill from empty?",
                        "   Rate = 1/8 − 1/12 = 3/24 − 2/24 = 1/24 → t = 24 hours",
                        "",
                        "PART E: Extraneous Solution Investigation",
                        "6. Problem with extraneous solution:",
                        "   1/(t−3) + 1/(t+3) = 6/(t²−9)",
                        "   Excluded: t ≠ ±3; LCD = (t−3)(t+3)",
                        "   (t+3)+(t−3) = 6 → 2t = 6 → t = 3",
                        "   Check: t=3 is excluded! → Extraneous — no solution",
                        "   Discuss: what does it mean physically if the 'solution' is an excluded value?"
                    ],
                    dataTable: [
                        ["Task", "Funnel A Time (s)", "Funnel B Time (s)", "Predicted Combined (s)", "Actual Combined (s)", "% Error"],
                        ["Fill 500ml container", "—", "—", "t₁t₂/(t₁+t₂)", "—", "—"],
                        ["Trial 2 repeat", "—", "—", "—", "—", "—"],
                        ["Trial 3 repeat", "—", "—", "—", "—", "—"]
                    ],
                    conclusions: [
                        "The combined work rate formula 1/t_combined = 1/t₁ + 1/t₂ is a rational equation derived from the fundamental rate relationship: total rate = sum of individual rates",
                        "The formula predicts combined time accurately within experimental error",
                        "Rational equations arise naturally whenever quantities are expressed as rates (per unit time, per unit distance, per unit volume)",
                        "Excluded values have physical meaning: they correspond to rates or times that are physically impossible (e.g., zero or negative work time)",
                        "Extraneous solutions violate domain restrictions and must be identified and rejected — they represent mathematical artifacts of the equation-solving process"
                    ],
                    extensions: [
                        "Model the parallel electrical resistance formula: 1/R = 1/R₁ + 1/R₂ — same mathematical structure as combined work",
                        "Investigate the lens equation: 1/f = 1/do + 1/di; set up a physical lens experiment to verify",
                        "Solve a three-worker problem: 1/t₁ + 1/t₂ + 1/t₃ = 1/t; what new algebraic challenges arise?",
                        "Extend to partial work: Worker A works for 2 hours alone, then B joins; set up the modified rational equation"
                    ],
                    realWorldConnections: [
                        "Civil engineering: combined flow rates of parallel pipes in water supply systems",
                        "Electrical engineering: parallel resistance and parallel capacitance calculations",
                        "Economics: harmonic mean of growth rates (equivalent mathematically to combined work formula)",
                        "Medicine: drug clearance rates in pharmacokinetics",
                        "Manufacturing: production rate optimisation across multiple assembly lines"
                    ]
                }
            },

            // ============================================================
            // PRACTICAL 4: RADICAL EQUATIONS — PENDULUM DISCOVERY
            // ============================================================

            pendulum_radical_equations: {
                name: "The Pendulum Experiment: Discovering Radical Equations in Nature",
                relatedTopics: ['radical_equations'],
                category: 'algebraic_equations',
                historicalBackground: {
                    mathematician: "Galileo Galilei (1602) and Christiaan Huygens (1656)",
                    discovery: "Galileo discovered that pendulum period depends on length but not mass or amplitude (for small swings); Huygens derived the mathematical formula T = 2π√(L/g)",
                    significance: "The first precision timekeeping device (the pendulum clock, 1656) relied on solving this radical equation for L given a desired T",
                    historicalAnecdote: "Galileo reportedly used his own pulse to time a swinging chandelier in Pisa Cathedral, noticing equal time intervals regardless of swing width",
                    modernRelevance: "Radical equations appear throughout physics wherever square root relationships arise: wave speed, orbital period, resonant frequency, and escape velocity all involve radical equations"
                },
                practicalMathematics: {
                    title: "Discovering the Pendulum Formula and Solving Radical Equations",
                    hypothesis: "If the pendulum period T depends on length L according to T = 2π√(L/g), then a graph of T against √L should be linear with gradient 2π/√g, and solving for specific L values requires solving radical equations",
                    purpose: "Experimentally derive the radical equation for pendulum period, solve radical equations to find required pendulum lengths, and verify solutions physically",
                    materials: [
                        "String (at least 2 metres)",
                        "A heavy, small bob (metal nut, key, or weighted sinker)",
                        "Retort stand and clamp",
                        "Ruler (1 metre)",
                        "Stopwatch",
                        "Graph paper",
                        "Protractor (to ensure consistent small-angle release, < 10°)"
                    ],
                    procedure: [
                        "PART A: Data Collection",
                        "1. Set up pendulum at length L = 0.20 m; release from < 10° amplitude",
                        "   Time 10 complete oscillations; divide by 10 to find period T",
                        "   Record T and √L",
                        "",
                        "2. Repeat for L = 0.30, 0.40, 0.50, 0.60, 0.80, 1.00, 1.20 m",
                        "   Complete the data table",
                        "",
                        "PART B: Graphical Analysis",
                        "3. Plot T (y-axis) against √L (x-axis)",
                        "   Observe: a straight line through the origin",
                        "   Gradient = 2π/√g; calculate g from your gradient",
                        "   Compare to g = 9.81 m/s²; compute percentage error",
                        "",
                        "PART C: Solving Radical Equations — Application",
                        "4. Use T = 2π√(L/g) with g = 9.81",
                        "",
                        "   Problem 1: A grandfather clock needs T = 2.0 seconds. Find L.",
                        "   2.0 = 2π√(L/9.81)",
                        "   1.0/π = √(L/9.81)          [divide both sides by 2π]",
                        "   1/π² = L/9.81               [square both sides]",
                        "   L = 9.81/π² ≈ 0.994 m       [exactly ~1 metre — a 'seconds pendulum']",
                        "   Verify: T = 2π√(0.994/9.81) ≈ 2.00 s ✓",
                        "",
                        "   Problem 2: A carnival swing has T = 3.0 seconds. Find L.",
                        "   3.0 = 2π√(L/9.81)",
                        "   L = 9.81(3.0/2π)² = 9.81 × 9/(4π²) ≈ 2.24 m",
                        "",
                        "   Problem 3 (inverse): A pendulum of L = 0.50 m. Find T.",
                        "   T = 2π√(0.50/9.81) ≈ 1.42 s",
                        "   Measure experimentally and compare",
                        "",
                        "PART D: Extraneous Solution Investigation",
                        "5. Consider: could a negative value of L emerge from solving? Interpret.",
                        "   T = 2π√(L/9.81) → squaring gives T² = 4π²L/9.81",
                        "   L = T²·9.81/(4π²): is always positive for real T — no extraneous solutions for square root equations with positive radicands",
                        "   Discuss: when DO extraneous solutions occur in radical equations? (When the pre-squaring equation can be satisfied by both ±)"
                    ],
                    dataTable: [
                        ["Length L (m)", "√L (m^½)", "10 oscillations (s)", "Period T (s)", "Predicted T (s)", "% Error"],
                        ["0.20", "0.447", "—", "—", "0.898", "—"],
                        ["0.30", "0.548", "—", "—", "1.099", "—"],
                        ["0.40", "0.632", "—", "—", "1.269", "—"],
                        ["0.50", "0.707", "—", "—", "1.420", "—"],
                        ["0.60", "0.775", "—", "—", "1.554", "—"],
                        ["0.80", "0.894", "—", "—", "1.794", "—"],
                        ["1.00", "1.000", "—", "—", "2.007", "—"],
                        ["1.20", "1.095", "—", "—", "2.198", "—"]
                    ],
                    conclusions: [
                        "The pendulum period equation T = 2π√(L/g) is a radical equation in disguise — it contains a square root of a variable",
                        "Solving for L given T requires squaring both sides: L = T²g/(4π²) — a key radical equation technique",
                        "No extraneous solutions arise here because L and T are both inherently positive — extraneous solutions emerge only when the radical side can legally represent negative values",
                        "The graph of T vs √L is linear, confirming the square root relationship experimentally",
                        "Radical equations model many natural phenomena wherever power-law (especially square root) relationships appear"
                    ],
                    extensions: [
                        "Investigate the escape velocity equation v = √(2gR): solve for R given a target escape velocity",
                        "Explore the Kepler's third law radical equation: T = k·r^(3/2); solve for orbital radius given period",
                        "Introduce the double pendulum — a chaotic system where no closed-form radical equation exists",
                        "Use the data to calculate g and compare across locations using published gravity datasets"
                    ],
                    realWorldConnections: [
                        "Horology: designing pendulum clocks with specific tick rates using the radical equation",
                        "Seismology: period of seismic waves related to fault length by radical equations",
                        "Structural engineering: natural frequency of suspension bridges involves radical equations",
                        "Astronomy: orbital period calculations using Kepler's radical relationship",
                        "Medicine: MRI resonance frequency determination involves radical equations"
                    ]
                }
            },

            // ============================================================
            // PRACTICAL 5: POLYNOMIAL ROOTS — GRAPHICAL INVESTIGATION
            // ============================================================

            graphical_polynomial_roots: {
                name: "Graphing Polynomial Equations: Connecting Roots, Factors, and Graphs",
                relatedTopics: ['polynomial_equations', 'quadratic_equations'],
                category: 'algebraic_equations',
                historicalBackground: {
                    mathematician: "René Descartes (1596–1650) and Pierre de Fermat (1601–1665)",
                    work: "La Géométrie (Descartes, 1637) — first systematic connection between algebraic equations and geometric graphs",
                    significance: "Descartes introduced the coordinate system (Cartesian coordinates) enabling every polynomial equation to be visualised as a graph; roots became x-intercepts",
                    additionalContext: "Descartes' Rule of Signs predicts the number of positive and negative real roots from sign changes in the polynomial's coefficients",
                    modernRelevance: "Graphing calculators, CAS software, and digital function plotters use polynomial root-finding algorithms derived from these graphical principles"
                },
                practicalMathematics: {
                    title: "Graphical Exploration of Polynomial Equations: Roots, Factors, and Multiplicity",
                    hypothesis: "If P(x) = (x − r₁)^m₁ · (x − r₂)^m₂ · ... , then the graph of y = P(x) crosses the x-axis at each simple root, is tangent at each even-multiplicity root, and inflects at each odd-multiplicity root greater than 1",
                    purpose: "Use graphing technology to investigate the relationship between factored form, roots, multiplicities, and graphical behaviour of polynomial equations",
                    materials: [
                        "Graphing calculator or GeoGebra/Desmos (free, browser-based)",
                        "Printed coordinate axes (at least 5 sheets for different polynomials)",
                        "Pencil and ruler",
                        "Polynomial investigation worksheet"
                    ],
                    procedure: [
                        "PART A: Roots and X-Intercepts",
                        "1. Graph y = (x − 1)(x + 2)(x − 3) on GeoGebra",
                        "   Identify the x-intercepts from the graph: x = 1, −2, 3",
                        "   Verify: set each factor to zero — do they match the intercepts?",
                        "   Conclusion: x-intercepts of y = P(x) are exactly the roots of P(x) = 0",
                        "",
                        "2. Graph y = x³ − 2x² − 5x + 6 (same polynomial, expanded form)",
                        "   Do the x-intercepts match Part 1? They should — confirm factored = expanded forms",
                        "",
                        "PART B: Multiplicity Investigation",
                        "3. Graph y = (x − 2)²(x + 1) [root x=2 with multiplicity 2]",
                        "   Observe graph behaviour at x = 2: does it cross or touch?",
                        "   Observe at x = −1: crosses",
                        "   Record: even multiplicity → graph TOUCHES x-axis (bounces); odd multiplicity → CROSSES",
                        "",
                        "4. Graph y = (x − 1)³(x + 2)² and identify: degree = 5",
                        "   Behaviour at x = 1 (multiplicity 3): inflection-crosses",
                        "   Behaviour at x = −2 (multiplicity 2): bounces",
                        "   Count x-intercepts: 2 distinct; roots: 5 total (with multiplicity)",
                        "",
                        "PART C: Descartes' Rule of Signs Investigation",
                        "5. For P(x) = x⁴ − x³ − 7x² + x + 6:",
                        "   Count sign changes in coefficients: (+,−,−,+,+) → 2 changes → 2 or 0 positive roots",
                        "   P(−x) = x⁴ + x³ − 7x² − x + 6: sign changes: (+,+,−,−,+) → 2 changes → 2 or 0 negative roots",
                        "   Graph to confirm: identify actual positive and negative x-intercepts",
                        "",
                        "PART D: Finding Roots Using Graph and Algebra",
                        "6. From the graph of P(x) = x⁴ − x³ − 7x² + x + 6, identify integer roots visually",
                        "   Use Rational Root Theorem: candidates = ±1, ±2, ±3, ±6",
                        "   Test candidates via synthetic division; verify against graph",
                        "   Factor completely and solve",
                        "",
                        "PART E: End Behaviour and Degree",
                        "7. Graph: y = 2x⁵ − 3x³ + x; observe end behaviour (both ends rise or one rises/one falls)",
                        "   Rule: odd degree → opposite ends; even degree → same ends",
                        "   Leading coefficient sign: positive → right end rises; negative → right end falls",
                        "",
                        "PART F: Solving Polynomial Equations Graphically",
                        "8. Use graphs to solve approximately: x³ − 4x + 1 = 0",
                        "   Find x-intercepts of y = x³ − 4x + 1; read off approximate roots",
                        "   Use bisection or Newton's method to refine to 3 decimal places",
                        "   Confirm 3 roots; verify one using synthetic division"
                    ],
                    dataTable: [
                        ["Polynomial (Factored)", "Degree", "Distinct Roots", "Roots with Multiplicity", "Graph Behaviour at Each Root", "End Behaviour"],
                        ["(x−1)(x+2)(x−3)", "3", "3", "3", "Crosses at all 3", "Left ↓, Right ↑"],
                        ["(x−2)²(x+1)", "3", "2", "3", "Bounces at x=2; crosses at x=−1", "Left ↓, Right ↑"],
                        ["(x−1)³(x+2)²", "5", "2", "5", "Inflects at x=1; bounces at x=−2", "Left ↓, Right ↑"],
                        ["(x²+1)(x−3)", "3", "1 real", "1 real (+ 2 complex)", "Crosses at x=3 only", "Left ↓, Right ↑"],
                        ["x⁴−x³−7x²+x+6", "4", "4", "4", "Crosses at all (investigate)", "Left ↑, Right ↑"]
                    ],
                    multiplicityRules: {
                        m1_odd: "Graph crosses x-axis (changes sign)",
                        m2_even: "Graph touches x-axis and bounces back (does not change sign)",
                        m3_odd: "Graph crosses with an inflection (S-shape at the root — flattens before crossing)",
                        general: "Even multiplicity → axis of symmetry at root; odd > 1 → inflection at root"
                    },
                    conclusions: [
                        "The roots of P(x) = 0 are precisely the x-intercepts of the graph y = P(x) — algebra and geometry are fully connected",
                        "Multiplicity determines graph behaviour at each root: even = bounce; odd = cross (with inflection for m ≥ 3)",
                        "The degree of the polynomial equals the total count of roots including multiplicity over ℂ",
                        "Descartes' Rule of Signs gives an upper bound on positive and negative real roots without solving",
                        "Graphical methods identify approximate root locations; algebraic methods confirm exact roots — both are essential"
                    ],
                    extensions: [
                        "Investigate the connection between complex roots and graph behaviour: why does (x²+1) contribute no x-intercepts?",
                        "Use the bisection method to find an irrational root of x³ − 2 = 0 to 5 decimal places; compare to ∛2",
                        "Explore Newton's method for polynomial root-finding: iterate xₙ₊₁ = xₙ − P(xₙ)/P'(xₙ)",
                        "Investigate cyclotomic polynomials: Φₙ(x), whose roots are nth roots of unity"
                    ],
                    realWorldConnections: [
                        "Computer graphics: polynomial Bézier curves; roots correspond to self-intersections",
                        "Control systems: stability analysis requires finding polynomial roots (poles of transfer functions)",
                        "Economics: equilibrium prices found by solving polynomial supply-demand equations",
                        "Cryptography: polynomial equations over finite fields underpin elliptic curve cryptography",
                        "GPS systems: polynomial equations compute satellite position from timing signals"
                    ]
                }
            }
        };

        this.linkPracticalsToTopics();
    }

    linkPracticalsToTopics() {
        Object.entries(this.mathematicsPracticals).forEach(([practicalId, practical]) => {
            practical.relatedTopics.forEach(topicId => {
                if (this.mathematicsTopics[topicId]) {
                    if (!this.mathematicsTopics[topicId].relatedPracticals) {
                        this.mathematicsTopics[topicId].relatedPracticals = [];
                    }
                    this.mathematicsTopics[topicId].relatedPracticals.push({
                        id: practicalId,
                        name: practical.name,
                        category: practical.category
                    });
                }
            });
        });
    }

    // ============================================================
    // MISCONCEPTION DATABASE
    // ============================================================

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            linear_equations: {
                'Balance Principle Errors': [
                    'Performing an operation on only one side of the equation instead of both (e.g., adding 3 to the right side only)',
                    'Dividing by a variable without considering whether the variable could equal zero',
                    'Moving a term across the equals sign without changing its sign (e.g., writing 3x = 7 − 2 instead of 3x = 7 + 2 when moving −2)',
                    'Forgetting to apply the distributive property before collecting terms: treating 3(x+2) as 3x+2 instead of 3x+6'
                ],
                'Fraction and Decimal Errors': [
                    'Not multiplying EVERY term by the LCD — applying LCD only to the fraction terms and leaving whole-number terms unchanged',
                    'Incorrectly finding the LCD: taking the product of denominators instead of the least common multiple',
                    'Dividing both sides by a coefficient but only dividing part of a sum: (6x+4)/2 = 3x+4 (wrong) vs 3x+2 (correct)'
                ],
                'Special Case Misidentification': [
                    'Declaring no solution when the equation is an identity and vice versa',
                    'Confusing an equation with no solution (contradiction: 3=7) with a valid equation whose solution is x=0',
                    'Assuming every equation has exactly one solution without testing for identity or contradiction'
                ]
            },

            quadratic_equations: {
                'Method Selection Errors': [
                    'Attempting to apply the quadratic formula to a linear equation (a=0) without recognising it has reduced degree',
                    'Applying factoring without first rearranging to standard form ax²+bx+c=0 (e.g., attempting to factor x²+3x=4 without moving 4)',
                    'Using the quadratic formula but reading a, b, c from the wrong positions when the equation is not in standard form'
                ],
                'Quadratic Formula Errors': [
                    'Computing −b as positive b (sign error on b): e.g., for x²−5x+6=0, b=−5 so −b=+5, not −5',
                    'Computing b² as (−b)² incorrectly: squaring the sign separately (−5)² = 25, not −25',
                    'Forgetting the ± symbol and computing only the + or only the − case',
                    'Dividing only the numerator partly by 2a: writing (−b + √Δ)/2 + a instead of the full fraction'
                ],
                'Discriminant Errors': [
                    'Computing discriminant as b²+4ac (adding instead of subtracting)',
                    'Concluding "no solution" when Δ < 0 without clarifying "no REAL solution" — complex solutions still exist',
                    'Not computing the discriminant before attempting factoring — wasting time on an unfactorable trinomial'
                ],
                'Zero Product Property Errors': [
                    'Setting each factor equal to a non-zero value: e.g., (x−2)(x+3)=12 → x−2=4, x+3=3 (incorrect; ZPP requires product = 0)',
                    'Forgetting to set both factors equal to zero when both are needed',
                    'Moving all terms to the right instead of left: writing 0=(x−2)(x+3) and then being confused about setting factors to zero'
                ]
            },

            polynomial_equations: {
                'Rational Root Theorem Errors': [
                    'Listing only factors of the leading coefficient in the numerator position (should be factors of the constant term)',
                    'Forgetting to include both positive and negative candidates',
                    'Not reducing duplicate fractions in the candidate list (e.g., listing 2/2=1 separately from 1/1=1)',
                    'Assuming the rational root theorem guarantees a rational root — some polynomials have only irrational or complex roots'
                ],
                'Synthetic Division Errors': [
                    'Using the wrong sign for r: dividing by (x+3) requires r=−3, not r=+3',
                    'Forgetting to include placeholder zeros for missing degree terms (e.g., x³+1 has coefficients [1,0,0,1])',
                    'Misreading the quotient from synthetic division — the last number is the REMAINDER, not part of the quotient'
                ],
                'Multiplicity and Completeness Errors': [
                    'Stopping factoring after finding one root without dividing out and continuing with the depressed polynomial',
                    'Claiming a root has multiplicity 2 based only on the graph touching the axis, without algebraic verification',
                    'Forgetting that a degree-n polynomial has exactly n roots over ℂ — assuming fewer roots because fewer real x-intercepts are visible'
                ]
            },

            rational_equations: {
                'Domain and Excluded Value Errors': [
                    'Not identifying excluded values BEFORE solving — discovering them only after obtaining a solution (by which point the error in accepting an extraneous solution may already have occurred)',
                    'Identifying excluded values for only one denominator and missing others in a multi-fraction equation',
                    'Confusing "excluded value" with "extraneous solution" — excluded values are determined by the structure of the equation; extraneous solutions emerge from the solving process'
                ],
                'LCD Application Errors': [
                    'Multiplying only the fraction terms by the LCD and leaving whole-number terms unchanged',
                    'Forming the LCD incorrectly by multiplying all denominators without finding the least common multiple',
                    'Forgetting to cancel denominators after multiplying — re-writing the fractions rather than eliminating them'
                ],
                'Extraneous Solution Handling': [
                    'Not checking solutions against excluded values — accepting an extraneous solution as valid',
                    'Checking the solution in the simplified (multiplied-out) equation rather than the ORIGINAL rational equation',
                    'Discarding a valid solution because it appears suspicious, without actually checking it'
                ]
            },

            radical_equations: {
                'Isolation Errors': [
                    'Squaring both sides before isolating the radical — squaring a sum involving the radical produces cross terms that complicate rather than eliminate the radical',
                    'When two radicals are present, squaring without isolating first produces √(x+3)·√(x−1) cross terms that are still radicals',
                    'Adding or subtracting constants that are under the radical (treating √(x+3) − 2 as √(x+1))'
                ],
                'Squaring Errors': [
                    'Squaring the left side as a sum of squares: (√x + 3)² = x + 9 instead of x + 6√x + 9',
                    'Forgetting that squaring a binomial produces a middle term: (a + b)² ≠ a² + b²',
                    'Squaring terms individually within a sum: √x + √3 → x + 3 (wrong); must square the entire expression'
                ],
                'Extraneous Solution Errors': [
                    'Not checking solutions in the ORIGINAL radical equation after solving',
                    'Accepting solutions where the original equation would require a negative square root (impossible for real numbers)',
                    'Believing that because squaring is a valid algebraic operation, any resulting solution must be valid'
                ],
                'Index Errors': [
                    'Cubing only the radical term rather than the entire equation side when eliminating cube roots',
                    'Forgetting that odd-index radical equations (cube root, fifth root) can have negative radicands and never produce extraneous solutions via the sign mechanism',
                    'Confusing √(x²) = |x| with √(x²) = x — the absolute value is essential for even-index radicals'
                ]
            }
        };

        this.clarificationStrategies = {
            balance_analogy: {
                method: 'Use a physical or drawn balance scale to model each equation-solving step',
                effectiveness: 'Very high for linear equation balance-method errors'
            },
            standard_form_first: {
                method: 'Always rearrange to standard form before applying any quadratic technique',
                effectiveness: 'High for method-selection and quadratic formula errors'
            },
            discriminant_first: {
                method: 'Always compute the discriminant before attempting to factor — decide method based on Δ',
                effectiveness: 'Very high for wasted factoring attempts and method selection'
            },
            domain_check_first: {
                method: 'Identify and record excluded values as Step 1, before any algebraic manipulation',
                effectiveness: 'Essential for rational equation domain errors'
            },
            original_equation_check: {
                method: 'Substitute every candidate solution into the ORIGINAL (not transformed) equation',
                effectiveness: 'Essential for both rational and radical extraneous solution errors'
            },
            isolation_before_powering: {
                method: 'Require students to box the isolated radical term before squaring — make isolation visible',
                effectiveness: 'Very high for radical equation isolation errors'
            },
            synthetic_division_template: {
                method: 'Use a printed synthetic division template with rows for: root, coefficients, products, sums',
                effectiveness: 'High for synthetic division procedural errors'
            },
            multiplicity_graph_connection: {
                method: 'Graph every polynomial and annotate roots with their multiplicity; observe crossing vs bouncing',
                effectiveness: 'High for multiplicity and completeness errors in polynomial equations'
            }
        };
    }

    // ============================================================
    // METACOGNITIVE PROMPTS
    // ============================================================

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}?",
                "Can you write an example of a {topic} from memory? What features does it have?",
                "How does {topic} connect to what you already know about arithmetic and number operations?",
                "What do you predict will be the trickiest part of solving {topic}?"
            ],
            duringLearning: [
                "Does this solution make sense? Can you verify it by substituting back into the original equation?",
                "How does this connect to {related_concept}?",
                "What tells you which solving method to use for this equation type?",
                "Have you checked for excluded values or extraneous solutions?",
                "Can you sketch a graph to visualise what the solution means geometrically?"
            ],
            afterLearning: [
                "What are the key methods covered in {topic} and when does each apply?",
                "What recognition features distinguish {topic} from similar-looking equation types?",
                "What mistakes are you most likely to make with {topic}? How will you prevent them?",
                "How would you explain the {topic} solving strategy to a student who missed the lesson?",
                "What is the most important check you should always do after solving a {topic}?"
            ],
            problemSolving: [
                "What type of equation is this? How many terms? What is the highest degree?",
                "What method is most efficient for this equation? Why?",
                "Have you arranged the equation in standard form before applying your chosen method?",
                "Are there any excluded values or domain restrictions you must identify first?",
                "Have you verified the solution in the original equation?"
            ],
            selfRegulation: [
                "Can you articulate every step you just performed and why?",
                "Is there a faster or more elegant method you could have used?",
                "What would happen to the solution set if one coefficient changed sign?",
                "Could you construct a new problem of the same type independently?"
            ]
        };
    }

    // ============================================================
    // CONTEXTUAL SCENARIOS (CASE STUDIES)
    // ============================================================

    /*"
initializeContextualScenarios() {
        this.contextualScenarios = {
            linear_equations: [
                {
                    caseStudyTitle: "Mobile Phone Plan Cost Comparison — A Consumer Decision Case Study",
                    background: "A student, Amara, is comparing two mobile phone plans for her gap year. Plan A charges a flat fee of £15 per month plus £0.05 per text. Plan B charges £25 per month with unlimited texts. She needs to determine the usage level at which both plans cost the same, so she can make an informed financial decision.",
                    mathematicalModel: "Plan A monthly cost: C_A = 0.05t + 15; Plan B: C_B = 25; where t = number of texts per month",
                    problem: "Set C_A = C_B and solve for t: 0.05t + 15 = 25",
                    solution: "0.05t = 10 → t = 200 texts per month",
                    interpretation: "Below 200 texts per month, Plan A is cheaper; above 200, Plan B is cheaper. At exactly 200 texts, both cost £25.",
                    extendedAnalysis: "Amara texts an average of 350 messages per month. Plan A: 0.05(350)+15 = £32.50; Plan B: £25. She should choose Plan B — saving £7.50 per month, £90 per year.",
                    linearEquationConcepts: ["Setting two linear expressions equal", "Solving a linear equation with decimal coefficient", "Interpreting the solution in context", "Using the solution to make a comparative decision"],
                    furtherQuestions: [
                        "At what usage level does Plan A cost exactly twice what Plan B costs?",
                        "If Amara's usage varies between 150 and 400 texts, what is the range of monthly savings with Plan B?",
                        "A third provider offers C_C = 0.03t + 20. Find when C_A = C_C and when C_B = C_C."
                    ],
                    realWorldSkills: ["Consumer mathematics", "Break-even analysis", "Linear inequality interpretation", "Financial planning"]
                },
                {
                    caseStudyTitle: "Chemical Mixing in a Hospital Pharmacy — A Professional Linear Equation Case Study",
                    background: "A hospital pharmacist, Dr. Chen, needs to prepare 500ml of a 30% saline solution for a patient. She has 10% saline solution and 50% saline solution available. She must determine how much of each to combine — a precision calculation where errors have direct patient safety implications.",
                    mathematicalModel: "Let x = volume (ml) of 10% solution; (500 − x) = volume of 50% solution. Salt equation: 0.10x + 0.50(500−x) = 0.30(500)",
                    problem: "Solve: 0.10x + 250 − 0.50x = 150",
                    solution: "−0.40x = −100 → x = 250 ml of 10% solution; (500−250) = 250 ml of 50% solution",
                    interpretation: "Dr. Chen combines 250 ml of each solution. Salt check: 0.10(250)+0.50(250) = 25+125 = 150g = 30% of 500ml ✓",
                    extendedAnalysis: "If she only has 400ml of 10% solution, can she still make 500ml of 30% solution using only pure water (0%) as the third component? New system: 0.10x + 0(500−x−y) + 0.50y = 150; x ≤ 400; x+y ≤ 500 — a linear system with constraints.",
                    linearEquationConcepts: ["Mixture equation setup", "Percentage as a decimal coefficient", "Solving a linear equation by balancing", "Verification of solution by substitution"],
                    furtherQuestions: [
                        "Rework for 600ml of 25% solution using the same two stock solutions",
                        "What concentration is achieved if she uses equal volumes (250ml each)?",
                        "If the 50% solution costs £3/ml and 10% costs £1/ml, what is the total cost of the 30% preparation?"
                    ],
                    realWorldSkills: ["Pharmacy calculations", "Proportional reasoning", "Professional accountability through verification", "Healthcare mathematics"]
                },
                {
                    caseStudyTitle: "Speed and Distance — A Journey Planning Case Study",
                    background: "Two trains depart from London and Birmingham simultaneously, travelling toward each other. The London train averages 90 mph; the Birmingham train averages 70 mph. The distance between stations is 128 miles. A logistics coordinator needs to determine when and where the trains will meet to schedule a trackside inspection team.",
                    mathematicalModel: "Time to meeting: t hours. Distance covered by London train: 90t; by Birmingham train: 70t. Total distance: 90t + 70t = 128",
                    problem: "Solve: 160t = 128",
                    solution: "t = 0.8 hours = 48 minutes after departure. Meeting point: 90 × 0.8 = 72 miles from London.",
                    interpretation: "The trains meet 72 miles from London (56 miles from Birmingham) after 48 minutes. The inspection team should position at the 72-mile marker.",
                    extendedAnalysis: "If the London train is delayed 10 minutes: it departs 10 minutes later. Let t = time after Birmingham train departs. London train travel time = (t − 1/6) hours. 90(t−1/6)+70t=128 → 160t−15=128 → t=143/160 ≈ 54 minutes. Meeting point: 70(143/160) = 62.6 miles from Birmingham.",
                    linearEquationConcepts: ["Distance-rate-time relationship", "Setting up equations from word problems", "Interpreting fractional time solutions", "Modifying equations for changed conditions"],
                    furtherQuestions: [
                        "At what speed must the Birmingham train travel to meet 60 miles from London?",
                        "If a third express train departs London 15 minutes later at 120 mph, when does it overtake the slower London train?",
                        "What time delay makes the trains meet exactly halfway (64 miles from each city)?"
                    ],
                    realWorldSkills: ["Logistics and scheduling", "Distance-rate-time problem modelling", "Linear equation applied to transport planning", "Sensitivity analysis (effect of changes)"]
                }
            ],

            quadratic_equations: [
                {
                    caseStudyTitle: "Stadium Seating Revenue Optimisation — A Sports Economics Case Study",
                    background: "A football club's revenue manager, Marcus, models weekly match-day revenue as R(p) = −50p² + 2000p − 5000 pounds, where p is the ticket price in pounds. The club's board wants to know: the price that maximises revenue, the ticket prices at which they break even (R=0), and whether a revenue target of £10,000 is achievable.",
                    mathematicalModel: "R(p) = −50p² + 2000p − 5000",
                    problem1: {
                        task: "Find the price(s) where revenue = 0 (break-even)",
                        working: "−50p² + 2000p − 5000 = 0 → p² − 40p + 100 = 0 → (p−2.68)(p−37.32)=0 via quadratic formula",
                        discriminant: "Δ = 1600−400 = 1200 > 0 → two real break-even prices",
                        solution: "p = (40±√1200)/2 = 20±10√3 ≈ £2.68 or £37.32",
                        interpretation: "Below £2.68 or above £37.32, the club loses money. The viable pricing range is between these values."
                    },
                    problem2: {
                        task: "Find the revenue-maximising price",
                        working: "Vertex at p = −b/2a = −2000/(2×−50) = £20",
                        maxRevenue: "R(20) = −50(400) + 2000(20) − 5000 = −20000+40000−5000 = £15,000",
                        interpretation: "Charge £20 per ticket to maximise revenue at £15,000 per match."
                    },
                    problem3: {
                        task: "Find the ticket prices that generate exactly £10,000",
                        working: "−50p²+2000p−5000=10000 → −50p²+2000p−15000=0 → p²−40p+300=0 → (p−10)(p−30)=0",
                        solution: "p = £10 or p = £30",
                        interpretation: "The £10,000 target is achievable at two price points: low-price/high-attendance (£10) or premium/selective (£30)."
                    },
                    quadraticConcepts: ["Solving by factoring", "Vertex formula for optimisation", "Discriminant to check solution count", "Quadratic formula for non-integer solutions", "Real-world interpretation of roots"],
                    furtherQuestions: [
                        "The club installs 1000 extra seats. If demand falls by 25 tickets per £1 increase, model the new revenue function.",
                        "Use Vieta's formulas to verify: sum of break-even prices = 40 = −b/a; product = 100 = c/a",
                        "Graph R(p) and annotate the break-even points, vertex, and target line R = 10,000"
                    ],
                    realWorldSkills: ["Sports economics", "Revenue optimisation", "Demand pricing", "Quadratic modelling of real business data"]
                },
                {
                    caseStudyTitle: "Bridge Arch Design — A Civil Engineering Case Study",
                    background: "A civil engineer, Priya, is designing a parabolic arch bridge. The arch must span 24 metres horizontally and reach a maximum height of 9 metres at its centre. She must derive the quadratic equation describing the arch's profile to calculate clearance heights at specific horizontal positions.",
                    mathematicalModel: "Place origin at centre of arch. Arch equation: h = −(1/16)x² + 9 (vertex at (0,9); arch meets ground at x = ±12)",
                    derivation: "At x=±12, h=0: 0 = a(144)+9 → a = −9/144 = −1/16. Equation: h = −x²/16 + 9",
                    problem1: {
                        task: "Find the height of the arch 4 metres from the centre",
                        working: "h = −(16)/16 + 9 = −1 + 9 = 8 metres",
                        interpretation: "The arch is 8 metres high at 4 metres from centre — sufficient clearance for most vehicles."
                    },
                    problem2: {
                        task: "Find how far from the centre the arch height is exactly 5 metres",
                        working: "5 = −x²/16 + 9 → x²/16 = 4 → x² = 64 → x = ±8 metres",
                        interpretation: "The arch is 5 metres high at 8 metres either side of centre — determines lane width constraints."
                    },
                    problem3: {
                        task: "A lorry is 4.5m tall and 3m wide. Can it pass under the arch safely with 0.5m clearance?",
                        working: "Required clearance at x = ±1.5: h = −(2.25)/16 + 9 = −0.14+9 = 8.86m. Required: 4.5+0.5=5m. 8.86>5 ✓",
                        interpretation: "The lorry passes safely with 3.86 metres of vertical clearance."
                    },
                    quadraticConcepts: ["Vertex form of quadratic", "Solving quadratic equations from applied models", "Substituting into quadratic models", "Interpreting solutions in engineering context"],
                    furtherQuestions: [
                        "What is the maximum vehicle height that can pass at 10 metres from centre?",
                        "Redesign the arch to have a maximum height of 12 metres over the same 24-metre span",
                        "Find the horizontal distance at which the arch height equals half its maximum"
                    ],
                    realWorldSkills: ["Civil engineering design", "Coordinate geometry", "Quadratic modelling", "Safety calculation and clearance analysis"]
                },
                {
                    caseStudyTitle: "Investment Break-Even Timeline — A Financial Planning Case Study",
                    background: "An entrepreneur, Sofia, invests £5,000 in a business. She models cumulative profit (after recouping initial investment) as P(t) = −120t² + 1200t − 2160 pounds, where t is months after launch. She needs to know when she breaks even, when profit peaks, and whether the business remains profitable.",
                    mathematicalModel: "P(t) = −120t² + 1200t − 2160",
                    problem1: {
                        task: "When does Sofia break even? (P = 0)",
                        working: "−120t²+1200t−2160=0 → t²−10t+18=0 → t=(10±√(100−72))/2=(10±√28)/2",
                        solution: "t = 5±√7 ≈ 2.35 or 7.65 months",
                        interpretation: "Sofia breaks even at approximately 2.4 months (first crossing) and 7.6 months (profit returns to zero). She must expand or reinvest before the 7.6-month mark."
                    },
                    problem2: {
                        task: "When and what is the peak profit?",
                        working: "t_vertex = −1200/(2×−120) = 5 months; P(5) = −120(25)+1200(5)−2160 = −3000+6000−2160 = £840",
                        interpretation: "Peak profit of £840 occurs at 5 months. Maximum profitability window: months 2.4 to 7.6."
                    },
                    problem3: {
                        task: "Is a profit target of £1000 achievable?",
                        working: "Set P=1000: −120t²+1200t−2160=1000 → t²−10t+26.33=0; Δ=100−105.3<0",
                        discriminant: "Δ < 0 → No real solutions",
                        interpretation: "£1000 profit is not achievable with this model. Sofia must change her business strategy to shift the profit curve upward."
                    },
                    quadraticConcepts: ["Solving quadratic by formula", "Vertex optimisation", "Discriminant to test achievability", "Interpreting negative discriminant in context"],
                    furtherQuestions: [
                        "By how much must the constant term change for Sofia to just achieve £1000 profit?",
                        "Graph P(t) and annotate the break-even points, vertex, and the line P=840",
                        "If Sofia reinvests £200/month from month 3, modify the profit model and find new break-even points"
                    ],
                    realWorldSkills: ["Business financial modelling", "Investment analysis", "Quadratic optimisation in economics", "Risk assessment using discriminant"]
                }
            ],

            polynomial_equations: [
                {
                    caseStudyTitle: "Structural Beam Deflection — A Mechanical Engineering Case Study",
                    background: "A mechanical engineer, James, is analysing a simply supported beam of length 6 metres. The deflection (downward displacement in mm) at position x metres from one end is modelled by D(x) = x³ − 9x² + 18x. He must find the positions of zero deflection, maximum deflection, and whether the model is consistent with support conditions.",
                    mathematicalModel: "D(x) = x³ − 9x² + 18x = x(x² − 9x + 18) = x(x−3)(x−6)",
                    problem1: {
                        task: "Find all positions where deflection is zero",
                        factored: "x(x−3)(x−6) = 0",
                        solution: "x = 0, 3, or 6 metres",
                        interpretation: "Zero deflection at both ends (x=0 and x=6 — the supports, as expected) and at x=3m (a node point midway). This confirms the model is physically consistent."
                    },
                    problem2: {
                        task: "Find where deflection equals 6mm",
                        working: "x³−9x²+18x=6; test rational roots: x=1: 1−9+18=10≠6; use numerical or graphical method; x≈0.39, 2.32, 6.29",
                        interpretation: "Three positions give 6mm deflection within or near the beam — one at each side of the central node and one outside the beam range (x=6.29 is beyond the support)."
                    },
                    problem3: {
                        task: "Interpret the multiplicity of roots and their engineering meaning",
                        analysis: "All roots are simple (multiplicity 1) — the deflection curve crosses zero at each support and the node, without bouncing. This confirms the beam is not clamped (clamped supports would produce double roots).",
                        polynomialConcepts: ["Factoring by grouping and common factor", "Factor theorem", "Rational root testing", "Multiplicity and graph behaviour", "Physical interpretation of roots"]
                    },
                    furtherQuestions: [
                        "Compare D(x) = x(x−3)(x−6) to a clamped beam model D(x) = x²(x−6)². How do multiplicity differences affect the physical model?",
                        "Use synthetic division to verify that x=3 is a root and find the depressed quadratic",
                        "If the beam is extended to 8 metres, write a new polynomial model with zeros at x=0, 4, and 8"
                    ],
                    realWorldSkills: ["Structural engineering", "Polynomial root analysis", "Physical model validation", "Multiplicity as engineering property"]
                },
                {
                    caseStudyTitle: "Supply and Demand Equilibrium — An Econometrics Case Study",
                    background: "An economic analyst, Lin, models the supply S(p) = p³ − 2p² − 5p and demand D(p) = 2p² − 3p + 6 (in thousands of units) as functions of price p (£). She must find all equilibrium prices where supply equals demand and determine which are economically viable.",
                    mathematicalModel: "Set S(p) = D(p): p³ − 2p² − 5p = 2p² − 3p + 6",
                    rearranged: "p³ − 4p² − 2p − 6 = 0",
                    problem1: {
                        task: "Apply the Rational Root Theorem to find candidate roots",
                        candidates: "Factors of 6: ±1,±2,±3,±6; leading coefficient 1; all integers are candidates",
                        testing: "p=1: 1−4−2−6=−11≠0; p=6: 216−144−12−6=54≠0; p=3: 27−36−6−6=−21≠0; p=−1: −1−4+2−6=−9≠0",
                        note: "No rational roots — solve graphically or numerically: p ≈ 5.12 (one real root near p=5)"
                    },
                    problem2: {
                        task: "Use synthetic division with p≈5 and find depressed quadratic for remaining roots",
                        depressed: "Approximately p² + p + 1.2 — discriminant < 0 → two complex roots",
                        interpretation: "Exactly one real equilibrium price: p ≈ £5.12. The two complex roots are economically meaningless (price must be real)."
                    },
                    economicInterpretation: "At £5.12, supply equals demand — this is the market clearing price. Above £5.12, supply exceeds demand (surplus); below, demand exceeds supply (shortage). The single real root means this market has a unique stable equilibrium.",
                    polynomialConcepts: ["Rational Root Theorem", "Synthetic division", "Fundamental Theorem (n roots over ℂ)", "Eliminating complex roots for applied context", "Graphical root approximation"],
                    furtherQuestions: [
                        "Modify D(p) so the equilibrium equation has two positive real roots — what does two equilibria mean economically?",
                        "Use the Factor Theorem: if p=2 were a root, verify whether the model is consistent",
                        "Investigate how adding a tax of £t shifts the equilibrium price — set up and solve the modified polynomial equation"
                    ],
                    realWorldSkills: ["Microeconomics modelling", "Market equilibrium analysis", "Polynomial equations in economic systems", "Complex root interpretation in applied contexts"]
                }
            ],

            rational_equations: [
                {
                    caseStudyTitle: "Parallel Pipe Water System — A Hydraulic Engineering Case Study",
                    background: "A hydraulic engineer, Fatima, designs a water supply system for a housing development. Three pipes can individually fill the reservoir in 6, 9, and 18 hours respectively. She must determine the combined fill time when all three are operational, and solve for the pipe diameter needed if a target fill time of 3 hours is required.",
                    mathematicalModel: "Combined rate: 1/6 + 1/9 + 1/18 = 1/t_combined",
                    problem1: {
                        task: "Find combined fill time with all three pipes",
                        working: "LCD = 18; 3/18 + 2/18 + 1/18 = 6/18 = 1/3; so 1/t = 1/3 → t = 3 hours",
                        interpretation: "All three pipes together fill the reservoir in exactly 3 hours. Fatima has achieved her 3-hour target."
                    },
                    problem2: {
                        task: "If Pipe 3 (18-hour pipe) is taken offline for maintenance, and a replacement pipe with unknown fill time x hours is installed, find x to maintain the 3-hour combined target",
                        working: "1/6 + 1/9 + 1/x = 1/3; LCD=18x: 3x + 2x + 18 = 6x → 5x+18=6x → x=18",
                        interpretation: "The replacement pipe must also be an 18-hour pipe (same capacity as the pipe it replaces). No upgrade is required."
                    },
                    problem3: {
                        task: "If a drain is accidentally left open and empties at rate 1/12 per hour, find the net fill time",
                        working: "1/6 + 1/9 + 1/18 − 1/12 = 1/t; LCD=36: 6+4+2−3=9; 9/36=1/4; t=4 hours",
                        interpretation: "The open drain reduces filling efficiency — 4 hours instead of 3. Fatima must close the drain or add a fourth pipe."
                    },
                    rationalConcepts: ["Combined rate setup", "LCD calculation for multi-term equations", "Solving for unknown rate in rational equation", "Net rate with negative (drain) term", "Verifying solutions in original equation"],
                    furtherQuestions: [
                        "What individual fill time x would allow only ONE pipe plus Pipe 1 to achieve the 3-hour target?",
                        "Find the excluded values for each rational equation above and confirm no solution equals an excluded value",
                        "If the target fill time is reduced to 2 hours, is it achievable with the original three pipes? Use the discriminant to investigate."
                    ],
                    realWorldSkills: ["Hydraulic engineering", "System design with multiple components", "Rate equation solving", "Capacity planning and troubleshooting"]
                },
                {
                    caseStudyTitle: "Camera Lens Equation — An Optics and Photography Case Study",
                    background: "A camera technician, Oscar, uses the thin lens equation 1/f = 1/do + 1/di, where f is focal length, do is object distance, and di is image distance. He needs to solve for unknown distances in different shooting scenarios. Each solution has a physical constraint: all distances must be positive, and the image distance determines where the sensor must be placed.",
                    mathematicalModel: "1/f = 1/do + 1/di",
                    problem1: {
                        task: "Focal length f = 50mm; object at do = 200mm. Find di.",
                        working: "1/50 = 1/200 + 1/di; 1/di = 1/50 − 1/200 = 4/200 − 1/200 = 3/200; di = 200/3 ≈ 66.7mm",
                        interpretation: "The sensor must be placed approximately 66.7mm behind the lens to produce a sharp image of an object 200mm in front."
                    },
                    problem2: {
                        task: "Same lens (f=50mm). Find the minimum object distance for a real image (di > 0)",
                        working: "di > 0 requires 1/do < 1/f, i.e., do > f. So do > 50mm — object must be further than the focal length",
                        extraneousCase: "If do = 50mm: 1/50 = 1/50 + 1/di → 0 = 1/di → di undefined (no real image — parallel rays never converge)",
                        interpretation: "Objects at or within the focal length produce no real image. do = 50mm is an excluded value."
                    },
                    problem3: {
                        task: "do = 75mm, f = 50mm. Find magnification m = −di/do",
                        working: "1/50 = 1/75 + 1/di; 1/di = 1/50−1/75 = 3/150−2/150=1/150; di=150mm; m=−150/75=−2",
                        interpretation: "Image is twice the size of the object (magnification 2) and inverted (negative sign). Useful for macro photography."
                    },
                    rationalConcepts: ["Rational equation with physical constraints", "Excluded values as physically impossible scenarios", "Solving for variable in denominator position", "Domain restriction ensuring di > 0", "Application of LCD method to physics"],
                    furtherQuestions: [
                        "Find the object distance that produces a 1:1 image (di = do) using the lens equation",
                        "A telephoto lens has f = 200mm. An object is 3 metres away. Find di and the magnification.",
                        "Set up and solve the rational equation for f given that a 1:2 image is produced with do = 90mm"
                    ],
                    realWorldSkills: ["Optical engineering", "Physics formula manipulation", "Rational equation solving with physical domain constraints", "Photography and imaging technology"]
                }
            ],

            radical_equations: [
                {
                    caseStudyTitle: "Escape Velocity Calculation — A Space Engineering Case Study",
                    background: "A spacecraft engineer, Aisha, calculates the minimum speed (escape velocity) needed for a probe to escape Earth's gravitational field without further propulsion. The formula is v = √(2gR), where g = 9.81 m/s² and R = 6,371,000 m (Earth's radius). She must solve radical equations to determine fuel requirements for different target velocities.",
                    mathematicalModel: "v = √(2gR) = √(2 × 9.81 × 6,371,000) = √(124,961,220) ≈ 11,178 m/s (≈ 11.2 km/s)",
                    problem1: {
                        task: "Verify the escape velocity by solving v² = 2gR for R (solve the radical equation for R)",
                        working: "Given v=11,178 m/s, g=9.81: R = v²/(2g) = 11178²/(2×9.81) = 124,945,284/19.62 ≈ 6,368,770 m ≈ 6,371 km ✓",
                        interpretation: "The calculated radius matches Earth's known radius — confirming the formula and radical equation solve correctly."
                    },
                    problem2: {
                        task: "Mars has g=3.72 m/s², R=3,389,500 m. Find Mars escape velocity.",
                        working: "v = √(2 × 3.72 × 3,389,500) = √(25,257,480) ≈ 5,026 m/s ≈ 5.03 km/s",
                        interpretation: "Mars escape velocity is approximately 45% of Earth's — spacecraft returning from Mars require far less fuel."
                    },
                    problem3: {
                        task: "A new launch system achieves 8,000 m/s. At what radius from Earth's centre does this become the escape velocity? (Effective launch altitude)",
                        working: "8000 = √(2×9.81×R); 64,000,000 = 19.62R; R = 3,262,996 m ≈ 3,263 km",
                        interpretation: "This is less than Earth's radius (6,371 km) — impossible as a surface launch. The system is insufficient for Earth escape; it could escape a smaller planet.",
                        extraneous: "A negative solution would emerge from ±√; the negative velocity is physically rejected (direction of escape is positive)."
                    },
                    radicalConcepts: ["Solving radical equations by squaring", "Physical constraint eliminates negative solution", "Substituting back to verify", "Solving for R in a radical context", "Square root isolation before squaring"],
                    furtherQuestions: [
                        "The Moon's escape velocity is 2.38 km/s. Find the Moon's radius given g_moon = 1.62 m/s².",
                        "Find the planet radius (same g as Earth) for which escape velocity would be twice Earth's.",
                        "If a comet enters at 15 km/s, exceeding Earth's escape velocity — set up and solve the radical equation for the maximum altitude it reaches before gravity dominates"
                    ],
                    realWorldSkills: ["Aerospace engineering", "Radical equation manipulation in physics", "Comparative planetary analysis", "Critical evaluation of physical validity of solutions"]
                },
                {
                    caseStudyTitle: "Pythagorean Theorem in Construction — A Site Engineering Case Study",
                    background: "A construction site manager, Roberto, needs to check that the corners of a new building foundation are perfectly square (90° angles). He uses the 3-4-5 Pythagorean method, but the blueprint specifies a diagonal of √(a² + b²) for various foundation dimensions. He must solve radical equations to find unknown side lengths from specified diagonals.",
                    mathematicalModel: "Pythagorean theorem: diagonal d = √(a² + b²)",
                    problem1: {
                        task: "Foundation dimensions a = 12m, b = unknown. Diagonal must be 13m. Find b.",
                        working: "13 = √(144 + b²); 169 = 144 + b²; b² = 25; b = 5m",
                        check: "√(144+25) = √169 = 13 ✓. b = −5 rejected (length must be positive — extraneous negative solution)",
                        interpretation: "The missing side is 5 metres. Roberto recognises the 5-12-13 Pythagorean triple and verifies squareness."
                    },
                    problem2: {
                        task: "A diagonal of 10m is measured. One side is 3m longer than the other. Find both sides.",
                        working: "Let shorter side = x; longer = x+3. x² + (x+3)² = 100; x²+x²+6x+9=100; 2x²+6x−91=0",
                        solution: "x = (−6±√(36+728))/4 = (−6±√764)/4 ≈ (−6+27.64)/4 ≈ 5.41m",
                        sides: "x ≈ 5.41m; x+3 ≈ 8.41m",
                        check: "√(5.41²+8.41²)=√(29.27+70.73)=√100=10 ✓. Negative root rejected (length constraint).",
                        interpretation: "Foundation sides are approximately 5.41m and 8.41m — Roberto adjusts the site plan accordingly."
                    },
                    problem3: {
                        task: "A ramp must have horizontal run = √(slope² − height²). Slope = √10 m, height = 1m. Find run.",
                        working: "run = √(10−1) = √9 = 3m",
                        interpretation: "Simple radical equation with direct evaluation — run is exactly 3 metres. No squaring needed; equation already in solvable form."
                    },
                    radicalConcepts: ["Solving radical equation by squaring both sides", "Rejecting negative extraneous solutions from physical context", "Combining radical equation with quadratic (two-step)", "Evaluating radical expressions directly", "Verifying solutions in original equation"],
                    furtherQuestions: [
                        "A 10m cable is anchored to a 6m pole. How far from the base does it anchor to the ground? Solve the radical equation and check for extraneous solutions.",
                        "Design three Pythagorean triples with hypotenuse between 20 and 30 — set up and solve radical equations to verify each",
                        "Investigate: for what positive value of k does √(k+8) + √(k+3) = 5? (Two-radical equation requiring double squaring)"
                    ],
                    realWorldSkills: ["Construction and site engineering", "Pythagorean theorem in professional practice", "Radical equation solving with physical constraints", "Quality assurance through mathematical verification"]
                }
            ]
        };
    }
    */

initializeContextualScenarios() {
    this.contextualScenarios = {
        linear_equations: [
            {
                scenario: "Mobile Phone Plan Comparison",
                context: "A student, Amara, is comparing two mobile phone plans for her gap year. Plan A charges a flat fee of £15 per month plus £0.05 per text. Plan B charges £25 per month with unlimited texts. She needs to determine the usage level at which both plans cost the same.",
                problem: "Set the two cost expressions equal and solve: 0.05t + 15 = 25, where t is the number of texts per month.",
                application: "Subtract 15 from both sides: 0.05t = 10. Divide by 0.05: t = 200 texts per month.",
                question: "Amara sends an average of 350 texts per month. Which plan should she choose, and how much does she save annually?",
                answer: "Plan A at 350 texts: 0.05(350) + 15 = £32.50. Plan B: £25. She saves £7.50 per month = £90 per year. Choose Plan B.",
                extension: "The solution t = 200 is a break-even point — the linear equation reveals exactly where the two pricing models intersect, making the consumer decision mathematically transparent."
            },
            {
                scenario: "Hospital Pharmacy Mixing",
                context: "A hospital pharmacist, Dr. Chen, needs to prepare 500 ml of a 30% saline solution. She has 10% saline and 50% saline solutions available. The calculation must be exact — errors have direct patient safety implications.",
                problem: "Let x = volume (ml) of 10% solution. Set up and solve: 0.10x + 0.50(500 − x) = 0.30(500).",
                application: "0.10x + 250 − 0.50x = 150 → −0.40x = −100 → x = 250 ml of 10% solution; 500 − 250 = 250 ml of 50% solution.",
                question: "Verify the solution: does combining 250 ml of each produce exactly 30% salinity? Show the salt content check.",
                answer: "Salt from 10% solution: 0.10 × 250 = 25 g. Salt from 50% solution: 0.50 × 250 = 125 g. Total salt: 150 g in 500 ml = 30% ✓.",
                extension: "The linear equation models a conservation law — total salt is conserved. This structure (weighted average = target) applies to all mixture problems in pharmacy, chemistry, and food science."
            },
            {
                scenario: "Train Meeting Point",
                context: "Two trains depart from London and Birmingham simultaneously, travelling toward each other. The London train averages 90 mph and the Birmingham train averages 70 mph. The stations are 128 miles apart. A logistics coordinator needs to determine when and where the trains will meet.",
                problem: "Let t = time in hours. Total distance covered by both trains equals 128 miles: 90t + 70t = 128.",
                application: "160t = 128 → t = 0.8 hours = 48 minutes. Meeting point: 90 × 0.8 = 72 miles from London.",
                question: "If the London train is delayed by 10 minutes, where does the meeting point shift? Set up and solve the modified linear equation.",
                answer: "Let t = time after Birmingham train departs. London travel time = (t − 1/6) hours. 90(t − 1/6) + 70t = 128 → 160t − 15 = 128 → t = 143/160 ≈ 0.894 hours. New meeting point: 70 × 0.894 ≈ 62.6 miles from Birmingham.",
                extension: "The linear equation captures a rate-conservation principle: combined closure speed × time = fixed distance. Changing initial conditions shifts the solution linearly — the equation structure reveals how sensitive the meeting point is to delays."
            },
            {
                scenario: "Salary Scale Crossover",
                context: "A teacher, Kofi, is comparing two employment offers. School A pays a starting salary of £28,000 with annual increments of £1,200. School B pays £32,000 with annual increments of £800. He wants to know at what year School A's cumulative salary overtakes School B's.",
                problem: "Let n = number of years. Set total earnings equal: 28000 + 1200n = 32000 + 800n.",
                application: "1200n − 800n = 32000 − 28000 → 400n = 4000 → n = 10 years.",
                question: "What is each school's salary at year 10, and what is the total earnings difference over 15 years if Kofi stays at School A from the start?",
                answer: "At year 10: School A = 28000 + 12000 = £40,000; School B = 32000 + 8000 = £40,000 ✓. Over 15 years: School A total = 15 × 28000 + 1200 × (0+1+...+14) = 420000 + 1200 × 105 = £546,000. School B total = 15 × 32000 + 800 × 105 = 480000 + 84000 = £564,000. School B pays £18,000 more over 15 years despite lower long-term rate.",
                extension: "The crossover point at n = 10 is a break-even solution — the linear equation reveals that cumulative earnings comparisons require integrating the full time horizon, not just the annual rate."
            }
        ],

        quadratic_equations: [
            {
                scenario: "Stadium Ticket Revenue Optimisation",
                context: "A football club's revenue manager, Marcus, models weekly match-day revenue as R(p) = −50p² + 2000p − 5000 pounds, where p is the ticket price in pounds. The board wants to know the revenue-maximising price, the break-even prices, and whether a £10,000 target is achievable.",
                problem: "Part 1: Find the break-even prices (R = 0). Part 2: Find the price that maximises revenue. Part 3: Find ticket prices that generate exactly £10,000.",
                application: "Break-even: −50p² + 2000p − 5000 = 0 → p² − 40p + 100 = 0 → p = (40 ± √1200)/2 = 20 ± 10√3 ≈ £2.68 or £37.32. Vertex: p = −2000/(2 × −50) = £20; R(20) = £15,000. Target £10,000: p² − 40p + 300 = 0 → (p − 10)(p − 30) = 0 → p = £10 or £30.",
                question: "The board sets a minimum revenue target of £12,000. Find the range of ticket prices that achieves this target.",
                answer: "Set −50p² + 2000p − 5000 = 12000 → p² − 40p + 340 = 0 → Δ = 1600 − 1360 = 240 > 0 → p = (40 ± √240)/2 = 20 ± 2√60 ≈ £4.53 to £35.47. Any price in this range meets the £12,000 target.",
                extension: "The discriminant of the quadratic inequality determines whether a revenue target is achievable at all — Δ < 0 means no ticket price can reach the target, making the discriminant a strategic planning tool before any pricing decision."
            },
            {
                scenario: "Parabolic Bridge Arch Design",
                context: "A civil engineer, Priya, is designing a parabolic arch bridge spanning 24 metres horizontally with a maximum height of 9 metres at the centre. She must derive the arch equation to calculate clearance heights at specific horizontal positions.",
                problem: "Place the origin at the centre of the arch. Derive the quadratic equation of the arch, then find the horizontal positions where the arch height is exactly 5 metres.",
                application: "At x = ±12, h = 0: 0 = a(144) + 9 → a = −1/16. Arch: h = −x²/16 + 9. Set h = 5: −x²/16 + 9 = 5 → x² = 64 → x = ±8 metres from centre.",
                question: "A lorry is 4.5 m tall and 3 m wide. Determine whether it can pass under the arch at 8 metres from the centre, with a required clearance of 0.5 m.",
                answer: "Height at x = ±1.5 (edges of lorry centred at 8 m from centre): h = −(8 ± 1.5)²/16 + 9. At x = 9.5: h = −90.25/16 + 9 ≈ 3.36 m. Required: 4.5 + 0.5 = 5 m. 3.36 < 5 — the lorry cannot pass safely at this position. It must travel closer to the centre.",
                extension: "The quadratic model converts a civil engineering clearance problem into a quadratic inequality — solving h ≥ 5 gives the safe horizontal zone for tall vehicles, a direct engineering application of solving quadratic equations."
            },
            {
                scenario: "Business Profit Break-Even Analysis",
                context: "An entrepreneur, Sofia, invests £5,000 in a business. She models cumulative profit as P(t) = −120t² + 1200t − 2160 pounds, where t is months after launch. She needs to know when she breaks even, when profit peaks, and whether the business remains profitable long-term.",
                problem: "Find: (a) the break-even times (P = 0), (b) the month of peak profit and its value, (c) whether a £1,000 profit target is achievable.",
                application: "(a) t² − 10t + 18 = 0 → t = (10 ± √28)/2 = 5 ± √7 ≈ 2.35 or 7.65 months. (b) Vertex: t = 5 months; P(5) = −120(25) + 6000 − 2160 = £840. (c) Set P = 1000: t² − 10t + 26.33 = 0; Δ = 100 − 105.3 < 0 → not achievable.",
                question: "Sofia's investor requires £700 profit. Find the exact months during which this target is met and the duration of the profitable window.",
                answer: "Set P = 700: −120t² + 1200t − 2160 = 700 → t² − 10t + 24.17 = 0 → Δ = 100 − 96.67 = 3.33 → t = (10 ± √3.33)/2 ≈ 4.09 or 5.91 months. Duration ≈ 1.82 months. The £700 target is met between months 4.09 and 5.91 — a narrow window requiring precise timing.",
                extension: "The discriminant of the target-setting equation measures the achievability gap — when Δ = 0 exactly, the target is the maximum. This transforms a business goal into a geometric question about whether a horizontal line intersects the parabola."
            },
            {
                scenario: "Irrigation Channel Cross-Section",
                context: "A farmer designs a trapezoidal irrigation channel. The cross-sectional area must be 12 m² to deliver sufficient water flow. The channel depth is d metres, the base width is (d + 1) metres, and the top width is (3d + 1) metres.",
                problem: "Use the trapezoid area formula A = ½(base + top) × depth to set up and solve a quadratic equation for the required channel depth.",
                application: "A = ½((d + 1) + (3d + 1)) × d = ½(4d + 2)(d) = d(2d + 1). Set equal to 12: 2d² + d − 12 = 0 → (2d − 4.something)... use formula: d = (−1 ± √(1 + 96))/4 = (−1 ± √97)/4. Take positive root: d ≈ (−1 + 9.849)/4 ≈ 2.21 m.",
                question: "Verify the solution and find the exact base width and top width of the channel at d ≈ 2.21 m. What happens to the required depth if the target flow area increases to 20 m²?",
                answer: "At d = 2.21: base = 3.21 m; top = 7.63 m; area = 2.21(2×2.21+1) = 2.21×5.42 ≈ 12 m² ✓. For A=20: 2d²+d−20=0 → d=(−1+√161)/4 ≈ (−1+12.69)/4 ≈ 2.92 m.",
                extension: "The quadratic equation emerges naturally from the geometry of the cross-section — each term in 2d²+d has a physical meaning: 2d² relates to the sloping sides and d to the flat base contribution. The farmer can use the formula d=(−1+√(1+8A))/4 for any target area A."
            }
        ],

        polynomial_equations: [
            {
                scenario: "Structural Beam Deflection Profile",
                context: "A mechanical engineer, James, analyses a simply supported beam of length 6 metres. The deflection at position x metres from one end is modelled by D(x) = x³ − 9x² + 18x mm. He must find the zero-deflection positions, interpret the root structure, and verify the model against support conditions.",
                problem: "Factor D(x) = x³ − 9x² + 18x completely and find all positions where deflection is zero.",
                application: "Extract GCF: x(x² − 9x + 18). Factor trinomial: p × q = 18, p + q = −9 → p = −3, q = −6. Result: x(x − 3)(x − 6). Zeros at x = 0, 3, 6.",
                question: "All three roots are simple (multiplicity 1). What does this tell James about the support conditions of the beam, and how would the model change if the beam were clamped at both ends?",
                answer: "Simple roots mean the deflection curve crosses zero without bouncing — consistent with a simply supported (pinned) beam where the beam rotates freely at each support. A clamped beam would produce double roots at x = 0 and x = 6: D(x) = x²(x−6)², meaning the curve touches zero tangentially (zero deflection AND zero slope at clamped ends).",
                extension: "Multiplicity encodes physical boundary conditions — the mathematical property of repeated roots directly corresponds to the engineering property of zero slope at a clamped support. Factoring a polynomial reveals not just where the beam deflects to zero but how it behaves there."
            },
            {
                scenario: "Economic Supply-Demand Equilibrium",
                context: "An economic analyst, Lin, models supply as S(p) = p³ − 2p² − 5p and demand as D(p) = 2p² − 3p + 6 (in thousands of units) as functions of price p (£). She must find all equilibrium prices where supply equals demand.",
                problem: "Set S(p) = D(p) and rearrange to form a polynomial equation. Apply the Rational Root Theorem and synthetic division to find the equilibrium price(s).",
                application: "p³ − 2p² − 5p = 2p² − 3p + 6 → p³ − 4p² − 2p − 6 = 0. Rational root candidates: ±1, ±2, ±3, ±6. Testing shows no integer roots. Graphical method: one real root near p ≈ 5.12. Depressed quadratic has Δ < 0 → two complex roots.",
                question: "Interpret the single real equilibrium price economically. What do the two complex roots signify, and what does it mean for this market to have only one equilibrium?",
                answer: "p ≈ £5.12 is the unique market-clearing price. The two complex roots are economically meaningless — price must be real and positive. A single real equilibrium means this market has a unique stable price point: no alternative price balances supply and demand. This is favourable for market stability and pricing policy.",
                extension: "The Fundamental Theorem of Algebra guarantees exactly three roots over ℂ — but only real, positive roots are economically valid. The polynomial equation structure determines whether a market has unique, multiple, or no equilibria, making polynomial root analysis a tool in theoretical economics."
            },
            {
                scenario: "Container Design with Volume Constraint",
                context: "A packaging engineer, Yemi, designs an open-top box from a 20 cm × 20 cm sheet of card by cutting equal squares of side x cm from each corner and folding up the sides. The client requires a box volume of exactly 432 cm³.",
                problem: "Write the volume as a polynomial function of x, then solve the polynomial equation V(x) = 432.",
                application: "V(x) = x(20 − 2x)² = x(400 − 80x + 4x²) = 4x³ − 80x² + 400x. Set equal to 432: 4x³ − 80x² + 400x − 432 = 0 → x³ − 20x² + 100x − 108 = 0. Rational root candidates: factors of 108. Test x = 2: 8 − 80 + 200 − 108 = 20 ≠ 0. Test x = 1: 1 − 20 + 100 − 108 = −27 ≠ 0. Test x = 3: 27 − 180 + 300 − 108 = 39 ≠ 0. Numerical: x ≈ 1.35 cm (valid) or x ≈ 5.83 cm (valid) — two physically feasible solutions.",
                question: "Both x ≈ 1.35 and x ≈ 5.83 are valid. Which produces the box with the greater base area, and which produces the taller box? Which would the engineer recommend for a product requiring maximum base area?",
                answer: "At x = 1.35: base = (20−2.70)² = 17.3² ≈ 299 cm²; height = 1.35 cm. At x = 5.83: base = (20−11.66)² = 8.34² ≈ 69.5 cm²; height = 5.83 cm. For maximum base area: choose x ≈ 1.35 cm. For maximum height: choose x ≈ 5.83 cm. The polynomial equation yields two physically meaningful solutions with different optimal uses.",
                extension: "The cubic equation produces three roots but only the roots satisfying 0 < x < 10 (so that dimensions are positive) are physically valid — polynomial root analysis must always be combined with domain restriction from the physical context."
            },
            {
                scenario: "Radioactive Decay Chain",
                context: "A nuclear physicist, Dr. Park, models the concentration of a radioactive isotope after a two-stage decay process. The net concentration function is C(t) = t⁴ − 10t³ + 35t² − 50t + 24, where t is time in hours. He needs to find all times at which the concentration returns to a baseline level (C = 0).",
                problem: "Solve C(t) = t⁴ − 10t³ + 35t² − 50t + 24 = 0 completely using the Rational Root Theorem and synthetic division.",
                application: "Rational root candidates: ±1, ±2, ±3, ±4, ±6, ±8, ±12, ±24. Test t = 1: 1−10+35−50+24 = 0 ✓. Divide by (t−1): t³−9t²+26t−24. Test t=2: 8−36+52−24=0 ✓. Divide by (t−2): t²−7t+12=(t−3)(t−4). Full factorisation: (t−1)(t−2)(t−3)(t−4).",
                question: "All four roots are real and distinct. What does this tell Dr. Park about the decay process, and what is the physical significance of each root?",
                answer: "C(t) = 0 at t = 1, 2, 3, 4 hours — four distinct baseline crossings. Each root represents a moment when the concentration returns to the reference level, consistent with a multi-stage oscillating decay process. All roots have multiplicity 1, meaning the concentration crosses (not merely touches) the baseline each time — the decay process is not in a steady state at any of these moments.",
                extension: "The four equally spaced roots (t = 1, 2, 3, 4) are a consequence of the polynomial being expressible as (t−1)(t−2)(t−3)(t−4) — a product of consecutive linear factors. In nuclear physics, such structured root patterns emerge from symmetric decay chain equations, making complete polynomial factorisation an analytical tool for identifying decay symmetry."
            }
        ],

        rational_equations: [
            {
                scenario: "Parallel Water Pipe System",
                context: "A hydraulic engineer, Fatima, designs a water supply system for a housing development. Three pipes individually fill the reservoir in 6, 9, and 18 hours respectively. She must determine the combined fill time with all three operational, and find what replacement pipe maintains a 3-hour target if Pipe 3 goes offline.",
                problem: "Part 1: Solve 1/6 + 1/9 + 1/18 = 1/t for t. Part 2: Find x (fill time of replacement pipe) such that 1/6 + 1/9 + 1/x = 1/3.",
                application: "Part 1: LCD = 18; 3/18 + 2/18 + 1/18 = 6/18 = 1/3 → t = 3 hours. Part 2: 1/x = 1/3 − 1/6 − 1/9 = 6/18 − 3/18 − 2/18 = 1/18 → x = 18 hours.",
                question: "A drain is accidentally left open and empties the reservoir at rate 1/12 per hour. Find the net fill time with all three pipes and the open drain. Is the reservoir filling or emptying?",
                answer: "Net rate: 1/6 + 1/9 + 1/18 − 1/12 = 6/36 + 4/36 + 2/36 − 3/36 = 9/36 = 1/4 → t = 4 hours. The reservoir is still filling (net rate positive) but at a slower rate. If only Pipes 1 and 3 were open with the drain: 1/6 + 1/18 − 1/12 = 6/36 + 2/36 − 3/36 = 5/36 → t = 7.2 hours.",
                extension: "The combined rate formula 1/t = Σ(1/tᵢ) is structurally identical to the parallel resistor formula in electrical engineering — the same rational equation appears across disciplines wherever parallel components combine. Solving for any single rate given the combined rate is always a rational equation."
            },
            {
                scenario: "Camera Lens Equation in Optics",
                context: "A camera technician, Oscar, uses the thin lens equation 1/f = 1/dₒ + 1/dᵢ, where f is focal length, dₒ is object distance, and dᵢ is image distance. He solves rational equations to find sensor placement and magnification for different shooting scenarios.",
                problem: "Lens has f = 50 mm. Part 1: Object at dₒ = 200 mm — find dᵢ. Part 2: Find the minimum object distance for a real image (dᵢ > 0). Part 3: Find the object distance that produces a 1:1 image (dᵢ = dₒ).",
                application: "Part 1: 1/50 = 1/200 + 1/dᵢ → 1/dᵢ = 3/200 → dᵢ = 66.7 mm. Part 2: Real image requires dᵢ > 0 → 1/dₒ < 1/f → dₒ > 50 mm (object beyond focal length). Part 3: dᵢ = dₒ → 1/f = 2/dₒ → dₒ = 2f = 100 mm.",
                question: "At dₒ = 50 mm (object at the focal point), evaluate 1/dᵢ and interpret the result. Is this an extraneous solution or a domain exclusion?",
                answer: "1/dᵢ = 1/50 − 1/50 = 0 → dᵢ → ∞. This is a domain exclusion (excluded value), not an extraneous solution — the equation is undefined in the physical sense (parallel rays never converge to a finite image point). dₒ = f is excluded from the domain of the lens equation because it produces division by zero in the rearranged form dᵢ = fdₒ/(dₒ−f).",
                extension: "The lens equation 1/f = 1/dₒ + 1/dᵢ is a rational equation where the excluded values (dₒ = 0, dᵢ = 0, dₒ = f) all correspond to physically degenerate optical configurations — demonstrating that mathematical domain restrictions and physical impossibilities are the same constraint expressed in two languages."
            },
            {
                scenario: "Investment Return Averaging",
                context: "A financial analyst, Priti, manages a portfolio that returns 20% in Year 1 (growth factor 1.2) and loses 20% in Year 2 (growth factor 0.8). She wants to find the single equivalent annual growth rate r that produces the same total return, and computes the harmonic mean of the growth factors.",
                problem: "The harmonic mean of two rates r₁ and r₂ satisfies 2/H = 1/r₁ + 1/r₂. Find H for r₁ = 1.2 and r₂ = 0.8. Then compare to the arithmetic mean and the actual two-year geometric mean.",
                application: "Harmonic mean: 2/H = 1/1.2 + 1/0.8 = 5/6 + 5/4 = 10/12 + 15/12 = 25/12 → H = 24/25 = 0.96. Arithmetic mean: (1.2 + 0.8)/2 = 1.0. Geometric mean: √(1.2 × 0.8) = √0.96 ≈ 0.9798.",
                question: "An investment of £10,000 is made. Calculate the actual value after two years, and reconcile this with each of the three mean growth rates. Which mean correctly represents the actual experience?",
                answer: "Actual: £10,000 × 1.2 × 0.8 = £9,600 (a loss of 4% over two years). Arithmetic mean predicts: 10000 × 1.0² = £10,000 (incorrect — overstates). Geometric mean predicts: 10000 × (0.9798)² ≈ £9,600 ✓. Harmonic mean 0.96 predicts: 10000 × 0.96 ≈ £9,600 for single year (different application). The geometric mean correctly represents the compound growth reality.",
                extension: "The harmonic mean formula 2/H = 1/r₁ + 1/r₂ is a rational equation — solving for H given r₁ and r₂ is identical in structure to the combined work formula. The harmonic mean appears wherever reciprocal rates are averaged, from financial returns to average speeds over fixed distances."
            },
            {
                scenario: "Medication Dosage Clearance",
                context: "A pharmacologist, Dr. Osei, models the time for two organs (liver and kidneys) to clear a medication from the bloodstream. The liver clears the drug in L hours, the kidneys in K hours. Together they clear it in 2 hours. A new drug interaction slows the liver to (L + 3) hours — find the new combined clearance time.",
                problem: "Given 1/L + 1/K = 1/2 and specific organ rates L = 3, K = 6, find the new combined time when liver slows to L + 3 = 6 hours. State and exclude all excluded values.",
                application: "Original: 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 ✓ (confirms L=3, K=6). New combined time: 1/6 + 1/6 = 2/6 = 1/3 → new time = 3 hours. Excluded values: L ≠ 0 and K ≠ 0 (instantaneous clearance — physically impossible); combined time ≠ 0.",
                question: "If a third clearance pathway (lymphatic system) is engaged with rate 1/T hours, find T such that the combined clearance time (with impaired liver) returns to the original 2 hours.",
                answer: "1/6 + 1/6 + 1/T = 1/2 → 1/T = 1/2 − 1/3 = 1/6 → T = 6 hours. The lymphatic pathway must have the same clearance capacity as each of the two organs. This is a rational equation with excluded value T ≠ 0 and a unique valid solution T = 6.",
                extension: "Pharmacokinetic clearance equations are rational equations in disguise — every 'parallel pathway' drug clearance model reduces to 1/t_total = Σ(1/tᵢ). The rational equation framework allows pharmacologists to isolate individual organ contributions and predict the effect of organ impairment on total drug exposure (area under curve)."
            }
        ],

        radical_equations: [
            {
                scenario: "Escape Velocity Calculation",
                context: "A spacecraft engineer, Aisha, calculates the minimum speed needed for a probe to escape Earth's gravitational field. The formula v = √(2gR) gives escape velocity, where g = 9.81 m/s² and R is the planet's radius. She must solve radical equations to compare escape velocities across planets and find radii for target velocities.",
                problem: "Part 1: Calculate Earth's escape velocity (R = 6,371,000 m). Part 2: Mars has g = 3.72 m/s² and R = 3,389,500 m — find Mars escape velocity. Part 3: A launch system achieves 8,000 m/s — at what radius does this become the escape velocity?",
                application: "Part 1: v = √(2 × 9.81 × 6,371,000) = √124,961,220 ≈ 11,178 m/s. Part 2: v = √(2 × 3.72 × 3,389,500) = √25,257,480 ≈ 5,026 m/s. Part 3: 8000 = √(2 × 9.81 × R) → 64,000,000 = 19.62R → R ≈ 3,262,996 m ≈ 3,263 km.",
                question: "The answer in Part 3 gives R < Earth's radius. Interpret this result. Is the negative solution of the squared equation an extraneous solution or simply physically rejected?",
                answer: "R ≈ 3,263 km < 6,371 km (Earth's radius) — the 8,000 m/s system cannot escape Earth from the surface. It could escape a smaller planet with this radius. The squared equation 64,000,000 = 19.62R gives only one solution (R > 0); the negative root is rejected by the physical constraint that radius must be positive — a domain restriction, not technically an extraneous solution (the radical equation itself has no sign ambiguity here since √ is always non-negative).",
                extension: "The radical equation v = √(2gR) reveals that escape velocity scales as √R for fixed g — doubling the planet's radius increases escape velocity by only √2 ≈ 41%. This square root relationship, made explicit by the radical equation, explains why large planets retain atmospheres far more effectively than small ones of similar density."
            },
            {
                scenario: "Pendulum Clock Design",
                context: "A horologist, Elena, is designing pendulum clocks using the formula T = 2π√(L/g), where T is the period in seconds, L is the pendulum length in metres, and g = 9.81 m/s². She must solve radical equations to find the required pendulum lengths for different clock designs.",
                problem: "Part 1: Find L for a grandfather clock needing T = 2 seconds. Part 2: Find L for a mantel clock needing T = 0.8 seconds. Part 3: A decorative pendulum is L = 0.25 m — find its period.",
                application: "Part 1: 2 = 2π√(L/9.81) → 1/π = √(L/9.81) → L = 9.81/π² ≈ 0.994 m. Part 2: 0.8 = 2π√(L/9.81) → L = 9.81(0.8/2π)² = 9.81 × 0.64/(4π²) ≈ 0.159 m. Part 3: T = 2π√(0.25/9.81) ≈ 2π × 0.160 ≈ 1.004 seconds.",
                question: "A clock runs 5 minutes slow per day, meaning its period is slightly too long. If the current pendulum length is L = 1.02 m, find the exact length needed to correct it and the amount to shorten the pendulum.",
                answer: "Current period: T = 2π√(1.02/9.81) ≈ 2.025 s. Required: T = 2.000 s → L = 9.81/π² ≈ 0.9937 m. Shorten by: 1.02 − 0.9937 ≈ 0.026 m = 2.6 cm. Elena must shorten the pendulum by 2.6 cm to restore accurate timekeeping.",
                extension: "The radical equation L = gT²/(4π²) shows that period scales as √L — a 1% increase in length increases period by only 0.5%. This square root sensitivity is why pendulum clock adjustments are precise: small physical changes produce predictably small period changes, making fine-tuning mathematically tractable through the radical equation."
            },
            {
                scenario: "Pythagorean Foundation Check in Construction",
                context: "A construction site manager, Roberto, uses Pythagorean relationships to verify right-angle corners on building foundations. A foundation has one side of 12 m, the diagonal is measured as 13 m, and the second side is unknown. A second problem involves a ramp with specific slope constraints.",
                problem: "Part 1: Solve √(144 + b²) = 13 for the missing side b. Part 2: A ramp must have horizontal run = √(slope² − height²) with slope = √130 m and height = 3 m. Find the run. Check for extraneous solutions in Part 1.",
                application: "Part 1: 144 + b² = 169 → b² = 25 → b = ±5. Reject b = −5 (length must be positive — domain restriction, not technically extraneous since substituting −5 into √(144+25)=13 gives 13=13, which is true but physically inadmissible). Valid: b = 5 m. Part 2: run = √(130 − 9) = √121 = 11 m.",
                question: "Roberto measures the diagonal as 15 m with sides 9 m and unknown b. He solves and gets b = 12 m. A helper suggests b could also be √(225−81) = √144 = 12, confirming the result. Construct a case where the radical equation produces a genuine extraneous solution in a geometric setting.",
                answer: "Genuine extraneous solution example: find the side b of a right triangle where the hypotenuse is (b − 1) m and the other side is 3 m: 3² + b² = (b−1)² → 9 + b² = b²−2b+1 → 9 = −2b+1 → 2b = −8 → b = −4. Extraneous: b = −4 makes the hypotenuse (b−1) = −5 m (negative — impossible). The squaring step introduced a solution that violates domain constraints. In the original geometric equation, we implicitly required b > 1 for the hypotenuse to be positive.",
                extension: "The Pythagorean radical equation √(a²+b²) = c is always positive on both sides, so squaring never introduces sign-based extraneous solutions in the pure geometric setting. Extraneous solutions in radical equations arise specifically when the pre-squaring equation has one side that could be negative — the construction context illustrates when this risk is absent and when it must be guarded against."
            },
            {
                scenario: "Speed of Water Flow in a Channel",
                context: "A hydraulic engineer, Mei, uses the Manning equation to model water flow velocity: v = (1/n) × R^(2/3) × S^(1/2), where n is roughness coefficient, R is hydraulic radius, and S is channel slope. For a simplified design with n = 0.013 and S = 0.001, she models flow as v = 3√S_eff where S_eff is an effective slope parameter. She must solve radical equations to find slopes for target velocities.",
                problem: "Solve 3√(S_eff) = 2.1 for S_eff. Then solve √(S_eff + 0.004) − √(S_eff) = 0.3 for S_eff (two-radical equation for a modified channel).",
                application: "Part 1: √(S_eff) = 0.7 → S_eff = 0.49. Part 2: √(S_eff + 0.004) = 0.3 + √(S_eff). Square: S_eff + 0.004 = 0.09 + 0.6√(S_eff) + S_eff → 0.004 = 0.09 + 0.6√(S_eff) → −0.086 = 0.6√(S_eff) → √(S_eff) = −0.143.",
                question: "The two-radical equation produces √(S_eff) = −0.143, which is impossible. What does this mean? Is this an extraneous solution or no solution? How should Mei redesign the constraint?",
                answer: "√(S_eff) = −0.143 is impossible since square roots are non-negative — this is not an extraneous solution but rather no solution. The constraint √(S_eff + 0.004) − √(S_eff) = 0.3 is inconsistent: the left side for any S_eff ≥ 0 approaches 0 as S_eff → ∞ and reaches a maximum of √0.004 ≈ 0.063 at S_eff = 0. Since 0.3 > 0.063, no valid S_eff exists. Mei must reduce the velocity difference target to below 0.063 or redesign the channel parameters.",
                extension: "The two-radical equation √(a+k)−√(a) = c has solutions only when c ≤ √k (the maximum possible difference). This upper bound, derived by analysing the radical equation structure, gives Mei an engineering feasibility condition before any computation — a powerful application of radical equation analysis to constrain design specifications."
            }
        ]
    };
}
 // ============================================================
    // ASSESSMENT RUBRICS
    // ============================================================

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall equation types, definitions, formulas, and standard solving procedures",
                    verbs: ["State", "Write", "List", "Recall", "Name", "Identify", "Define"],
                    example: "Write the quadratic formula and state what each variable represents"
                },
                understand: {
                    description: "Explain why solving methods work; connect to geometric or physical meaning; interpret solutions",
                    verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Translate"],
                    example: "Explain why squaring both sides of a radical equation can produce extraneous solutions"
                },
                apply: {
                    description: "Use solving techniques correctly on given equations; compute solutions accurately",
                    verbs: ["Solve", "Calculate", "Simplify", "Apply", "Use", "Compute"],
                    example: "Solve 2x² − 3x − 5 = 0 using the quadratic formula"
                },
                analyze: {
                    description: "Identify appropriate technique from equation structure; analyse discriminant; classify equation types",
                    verbs: ["Identify", "Determine", "Classify", "Analyse", "Select", "Distinguish"],
                    example: "Without solving, determine how many real solutions 3x² + 2x + 5 = 0 has. Justify using the discriminant."
                },
                evaluate: {
                    description: "Assess correctness of given solutions; identify errors; verify by substitution; critique methods",
                    verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Validate"],
                    example: "A student solves √(x+4) = x−2 and obtains x=0 and x=5. Evaluate both solutions."
                },
                create: {
                    description: "Construct equations with specific properties; derive formulas; design problems; extend models",
                    verbs: ["Construct", "Design", "Derive", "Create", "Formulate", "Develop"],
                    example: "Create a rational equation with exactly one valid solution and one extraneous solution. Justify your construction."
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Solves simple one-step linear equations correctly",
                        "Applies the quadratic formula mechanically with guidance",
                        "Does not verify solutions by substitution",
                        "Cannot identify equation type without prompting"
                    ],
                    support: [
                        "Step-by-step worked examples with explicit reasoning at each step",
                        "Provide equation-type identification guide (flowchart: degree? fractions? radicals?)",
                        "Require verification by substitution as a mandatory final step",
                        "Use balance model physically before symbolic manipulation"
                    ]
                },
                developing: {
                    characteristics: [
                        "Solves multi-step linear equations including brackets and fractions",
                        "Applies quadratic formula and identifies Δ nature correctly",
                        "Recognises excluded values in rational equations with prompting",
                        "Checks solutions but may miss extraneous ones for radical equations"
                    ],
                    support: [
                        "Introduce special cases: identities, contradictions, extraneous solutions",
                        "Practice discriminant analysis before attempting to solve",
                        "Require domain check as explicit Step 1 for rational and radical equations",
                        "Connect algebraic solutions to graphical representations"
                    ]
                },
                proficient: {
                    characteristics: [
                        "Selects optimal solving method based on equation structure",
                        "Correctly identifies and rejects extraneous solutions",
                        "Solves polynomial equations using rational root theorem and synthetic division",
                        "Interprets solutions in applied context"
                    ],
                    support: [
                        "Complex multi-step problems requiring method chaining",
                        "Error analysis tasks — identify and correct given incorrect solutions",
                        "Derive the quadratic formula by completing the square",
                        "Model real-world problems from description and solve"
                    ]
                },
                expert: {
                    characteristics: [
                        "Derives solving formulas from first principles",
                        "Works fluently across number systems (ℝ and ℂ)",
                        "Connects equation solving to function analysis and calculus",
                        "Creates original problems with specified properties"
                    ],
                    support: [
                        "Investigate Galois theory: why degree ≥ 5 polynomials have no general formula",
                        "Explore numerical methods (Newton's method, bisection) for unsolvable polynomials",
                        "Research applications: control systems, quantum mechanics, signal processing",
                        "Design assessment questions targeting specific misconceptions"
                    ]
                }
            }
        };

        this.assessmentQuestions = {
            linear_equations: {
                remember: "State the four properties of equality used in solving linear equations",
                understand: "Explain what it means geometrically for a linear equation to have no solution",
                apply: "Solve: 4(2x − 3) − 2(x + 5) = 3x + 1",
                analyze: "Without solving, determine whether 3(x+2) = 3x+6 has one solution, no solution, or infinitely many solutions. Justify.",
                evaluate: "A student solves x/3 + 1 = x/2 and writes x = 6. Verify this solution and identify any error made.",
                create: "Write a linear equation whose solution is x = −4 and that requires at least three steps to solve. Show your construction method."
            },
            quadratic_equations: {
                remember: "State the quadratic formula and write it in the form x = ...",
                understand: "Explain why the discriminant determines the number and nature of solutions before any solving takes place",
                apply: "Solve 3x² − 7x + 2 = 0 using the most efficient method. Justify your method choice.",
                analyze: "For the equation kx² − 4x + 1 = 0, find the values of k that give: (a) two distinct real roots, (b) one repeated root, (c) no real roots",
                evaluate: "Evaluate the claim: (x−4)² = 25 has solutions x=4+5=9 and x=4−5=−1. Is the working and conclusion correct?",
                create: "Construct a quadratic equation with integer coefficients whose roots are 2+√3 and 2−√3. Verify using Vieta's formulas."
            },
            polynomial_equations: {
                remember: "State the Rational Root Theorem and the Factor Theorem",
                understand: "Explain why a polynomial of degree 4 can have only 2 real x-intercepts while still having 4 roots",
                apply: "Solve x³ − 4x² − x + 4 = 0 completely, showing all working",
                analyze: "Use Descartes' Rule of Signs to determine the maximum number of positive and negative real roots of P(x) = x⁴ − 3x³ + 2x + 5",
                evaluate: "A student uses synthetic division to divide x³ − 2x² + 3x − 6 by (x+2) and obtains remainder 0. Verify whether x=−2 is actually a root.",
                create: "Construct a degree-4 polynomial with roots x=1 (multiplicity 2), x=−2 (multiplicity 1), and x=3 (multiplicity 1). Write in both factored and expanded form."
            },
            rational_equations: {
                remember: "Define 'excluded value' and 'extraneous solution' and explain the difference",
                understand: "Explain why multiplying both sides of a rational equation by the LCD can introduce extraneous solutions",
                apply: "Solve: 3/(x−2) − 2/(x+1) = 5/(x²−x−2)",
                analyze: "Identify all excluded values and predict whether the equation x/(x−4) = 4/(x−4) will have a valid solution, no solution, or an extraneous solution. Justify without fully solving.",
                evaluate: "A student solves 1/(x−3) + 1/(x+3) = 2/(x²−9) and obtains x=3. Evaluate this solution fully.",
                create: "Design a rational equation that has x=1 as an extraneous solution and x=−2 as the only valid solution. Show your design process."
            },
            radical_equations: {
                remember: "State the steps for solving a radical equation with a single square root",
                understand: "Explain why extraneous solutions are possible when solving radical equations but not when solving linear equations",
                apply: "Solve: √(3x+4) + 2 = x",
                analyze: "Before solving, determine the domain restriction for √(2x−6) = x−3 and predict whether extraneous solutions are likely. Justify.",
                evaluate: "A student solves √(x+1) = x−1 and obtains x=0 and x=2. Evaluate both solutions carefully.",
                create: "Construct a radical equation with exactly one valid solution (x=4) and one extraneous solution (x=1). Verify your construction is correct."
            }
        };
    }

    // ============================================================
    // TOPIC HANDLERS
    // ============================================================

    handleLinearEquations(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Linear Equations",
            category: 'algebraic_equations',
            summary: "Linear equations contain a variable to the first power only. They are solved by applying inverse operations in reverse order, maintaining balance by performing identical operations on both sides. Every linear equation has exactly one solution, no solution (contradiction), or infinitely many solutions (identity).",

            definitions: {
                linearEquation: {
                    definition: "An equation where the variable appears only to the first power; standard form: ax + b = c (a ≠ 0)",
                    graphicalMeaning: "Solving ax+b=c finds the x-value where the line y=ax+b intersects y=c"
                },
                solution: {
                    definition: "The value of the variable that makes both sides of the equation equal",
                    verification: "Substitute the solution into the original equation; both sides must evaluate to the same number"
                },
                balanceMethod: {
                    definition: "Maintaining equality by performing identical operations on both sides",
                    properties: [
                        "Addition Property: a=b ⟹ a+c=b+c",
                        "Subtraction Property: a=b ⟹ a−c=b−c",
                        "Multiplication Property: a=b ⟹ ac=bc (c≠0)",
                        "Division Property: a=b ⟹ a/c=b/c (c≠0)"
                    ]
                }
            },

            strategicApproach: {
                steps: [
                    "1. Expand all brackets (distributive property)",
                    "2. Collect like terms on each side independently",
                    "3. Move all variable terms to one side (add/subtract)",
                    "4. Move all constant terms to the other side",
                    "5. Divide both sides by the coefficient of the variable",
                    "6. Verify by substituting back into the original equation",
                    "7. Check for special cases: contradiction or identity"
                ],
                fractionStrategy: "Multiply every term by the LCD to eliminate all fractions before solving",
                decimalStrategy: "Multiply every term by the appropriate power of 10 to convert decimals to integers"
            },

            examples: [
                {
                    equation: "3(2x − 1) + 4 = 2x + 9",
                    solution: { step1: "6x−3+4=2x+9", step2: "6x+1=2x+9", step3: "4x=8", result: "x=2" },
                    check: "3(4−1)+4=13; 2(2)+9=13 ✓"
                },
                {
                    equation: "x/4 − x/6 = 1",
                    solution: { step1: "LCD=12; multiply through: 3x−2x=12", result: "x=12" },
                    check: "12/4−12/6=3−2=1 ✓"
                },
                {
                    equation: "2(3x+4)−3(x−2)=14",
                    solution: { step1: "6x+8−3x+6=14", step2: "3x+14=14", step3: "3x=0", result: "x=0" },
                    check: "2(4)−3(−2)=8+6=14 ✓"
                }
            ],

            specialCases: {
                noSolution: {
                    description: "Variable cancels; false numerical statement remains",
                    example: "2x+3=2x+7 → 3=7 (F) → No solution (∅)"
                },
                infiniteSolutions: {
                    description: "Variable cancels; true numerical statement remains",
                    example: "3x+6=3(x+2) → 6=6 (T) → All real numbers (ℝ)"
                }
            },

            connectionToOtherTopics: {
                quadraticEquations: "Linear equations arise when factoring quadratics (each factor set to zero)",
                rationalEquations: "After multiplying out the LCD, a rational equation reduces to a linear or quadratic",
                radicalEquations: "After isolating and squaring, a radical equation often reduces to a linear equation",
                graphing: "Solution = x-intercept of y = ax+b−c (where c is the right-hand side constant)"
            },

            commonErrors: [
                {
                    error: "Operating on only one side of the equation",
                    example: "3x+5=14; subtract 5: 3x+5=9 (wrong — subtracted only from right)",
                    fix: "Always write the operation applied to BOTH sides before simplifying"
                },
                {
                    error: "Moving a term without changing its sign",
                    example: "3x−4=11; 'move −4 to right': 3x=11−4=7 (WRONG: should be 3x=11+4=15)",
                    fix: "Terms change sign when crossing the equals sign; use addition/subtraction of the term from both sides"
                },
                {
                    error: "Not distributing correctly when expanding brackets",
                    example: "3(x+4)=3x+4 (wrong); correct: 3x+12",
                    fix: "Multiply the factor by every term inside the bracket, not just the first"
                }
            ],

            assessmentQuestions: {
                recall: ["State the four properties of equality", "What is the balance method?"],
                understanding: ["Explain why an identity has infinitely many solutions", "Why must every operation be applied to both sides?"],
                application: ["Solve: 4(2x−3)−2(x+5)=3x+1", "Solve: x/3+x/4=7"],
                analysis: ["Without solving, classify 3(x+2)=3x+6 as contradiction, identity, or unique solution"]
            }
        };

        if (/fraction.*equation|equation.*fraction/i.test(input)) {
            content.focus = "fractionCoefficients";
        } else if (/special.?case|no.?solution|infinite/i.test(input)) {
            content.focus = "specialCases";
        } else if (/word.?problem|applied|context/i.test(input)) {
            content.focus = "applications";
        }

        return content;
    }

    handleQuadraticEquations(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Quadratic Equations",
            category: 'algebraic_equations',
            summary: "Quadratic equations (ax²+bx+c=0, a≠0) have up to two solutions. The discriminant Δ=b²−4ac determines the number and nature of solutions before solving. Three methods are available: factoring, completing the square, and the quadratic formula. Always verify solutions by substitution.",

            definitions: {
                quadraticEquation: {
                    definition: "An equation of the form ax²+bx+c=0 where a≠0; highest power is 2",
                    standardForm: "All terms on the left side; zero on the right"
                },
                discriminant: {
                    formula: "Δ = b² − 4ac",
                    interpretation: {
                        positive: "Δ > 0: two distinct real solutions",
                        zero: "Δ = 0: one repeated real solution (double root)",
                        negative: "Δ < 0: two complex conjugate solutions (no real solutions)"
                    }
                },
                vietasFormulas: {
                    sumOfRoots: "r₁ + r₂ = −b/a",
                    productOfRoots: "r₁ × r₂ = c/a",
                    use: "Verify solutions quickly without full substitution"
                }
            },

            methodSelection: {
                factoring: {
                    when: "Discriminant is a perfect square; trinomial factors over the integers",
                    avoid: "When leading coefficient creates difficult AC products; when Δ is irrational"
                },
                completingTheSquare: {
                    when: "Leading coefficient = 1; vertex form needed; deriving the quadratic formula",
                    keyStep: "Add (b/2a)² to both sides after isolating the x-terms"
                },
                quadraticFormula: {
                    when: "Always; especially when factoring fails or discriminant is irrational",
                    formula: "x = (−b ± √(b²−4ac)) / 2a",
                    derivedBy: "Applying completing the square to the general form ax²+bx+c=0"
                }
            },

            examples: [
                {
                    equation: "x²−7x+12=0",
                    method: "Factoring",
                    solution: "(x−3)(x−4)=0 → x=3 or x=4",
                    discriminant: "Δ=49−48=1>0 ✓",
                    verify: "Vieta: 3+4=7=7/1 ✓; 3×4=12=12/1 ✓"
                },
                {
                    equation: "2x²−3x−2=0",
                    method: "Quadratic formula",
                    solution: "Δ=9+16=25; x=(3±5)/4; x=2 or x=−1/2",
                    verify: "2(4)−3(2)−2=8−6−2=0 ✓; 2(1/4)+3/2−2=0.5+1.5−2=0 ✓"
                },
                {
                    equation: "x²+6x+5=0",
                    method: "Completing the square",
                    solution: "x²+6x=−5; (x+3)²=4; x+3=±2; x=−1 or x=−5",
                    verify: "(−1)²+6(−1)+5=1−6+5=0 ✓"
                }
            ],

            connectionToOtherTopics: {
                factoring: "Factoring trinomials IS the factoring method for quadratic equations",
                radicalEquations: "Squaring a linear radical equation often produces a quadratic",
                polynomialEquations: "Synthetic division reduces degree-3+ polynomials to quadratics as the final step",
                graphing: "Solutions = x-intercepts of y=ax²+bx+c; vertex = (−b/2a, P(−b/2a))"
            },

            commonErrors: [
                {
                    error: "Sign error on b in the quadratic formula",
                    example: "x²−5x+6=0: b=−5 so −b=+5; many write −b=−5 (wrong)",
                    fix: "Substitute the signed value of b; −b is the negative of the SIGNED b value"
                },
                {
                    error: "Not rearranging to standard form first",
                    example: "Applying formula to x²+3x=4 directly instead of x²+3x−4=0",
                    fix: "Always move all terms to the left side before identifying a, b, c"
                },
                {
                    error: "Setting factors equal to non-zero values",
                    example: "(x−2)(x+3)=6 → x−2=6 (wrong); ZPP requires product=0",
                    fix: "Zero Product Property requires the product to equal zero; rearrange first if needed"
                }
            ]
        };

        if (/discriminant|nature.?root/i.test(input)) {
            content.focus = "discriminantAnalysis";
        } else if (/complete.?square|vertex.?form/i.test(input)) {
            content.focus = "completingTheSquare";
        } else if (/vieta|sum.*root|product.*root/i.test(input)) {
            content.focus = "vietasFormulas";
        }

        return content;
    }

    handlePolynomialEquations(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Polynomial Equations",
            category: 'algebraic_equations',
            summary: "Polynomial equations of degree ≥ 3 are solved by finding rational roots (Rational Root Theorem), verifying via the Factor Theorem, extracting factors using synthetic division, and reducing to simpler equations. The Fundamental Theorem of Algebra guarantees exactly n roots (real or complex) for degree n.",

            definitions: {
                factorTheorem: {
                    statement: "P(r) = 0 ⟺ (x−r) is a factor of P(x)",
                    use: "Confirms a candidate root and justifies extracting the factor"
                },
                rationalRootTheorem: {
                    statement: "Rational roots of aₙxⁿ+...+a₀ have form ±p/q where p|a₀ and q|aₙ",
                    use: "Generates a finite list of candidates to test"
                },
                syntheticDivision: {
                    description: "Efficient algorithm for dividing P(x) by (x−r) using only coefficients",
                    keyRule: "Use r (positive) when dividing by (x−r); use −r when dividing by (x+r)"
                },
                multiplicity: {
                    definition: "Number of times a root r appears; (x−r)^m divides P(x)",
                    graphEffect: "Even multiplicity: graph touches x-axis; odd multiplicity: graph crosses"
                }
            },

            strategicProcess: [
                "1. Extract GCF if present",
                "2. List rational root candidates: ±(factors of constant)/(factors of leading coeff)",
                "3. Test candidates by direct substitution or synthetic division",
                "4. When P(r)=0, divide out (x−r) using synthetic division",
                "5. Apply Rational Root Theorem and factoring to the depressed polynomial",
                "6. Continue reducing until degree ≤ 2; apply quadratic methods",
                "7. Identify multiplicity of each root from the factored form",
                "8. State all roots with multiplicity and verify"
            ],

            examples: [
                {
                    equation: "x³−6x²+11x−6=0",
                    candidates: "±1,±2,±3,±6",
                    testing: "P(1)=1−6+11−6=0 ✓",
                    division: "Divide by (x−1): x²−5x+6=(x−2)(x−3)",
                    solution: "x=1,2,3"
                },
                {
                    equation: "2x³+3x²−11x−6=0",
                    candidates: "±1,±2,±3,±6,±1/2,±3/2",
                    testing: "P(2)=16+12−22−6=0 ✓",
                    division: "Divide by (x−2): 2x²+7x+3=(2x+1)(x+3)",
                    solution: "x=2,−1/2,−3"
                }
            ],

            connectionToOtherTopics: {
                factoring: "All polynomial factoring techniques apply to finding polynomial roots",
                quadraticEquations: "Every polynomial equation eventually reduces to quadratics as the final solving step",
                graphing: "Roots = x-intercepts; multiplicity determines crossing vs touching behaviour"
            },

            commonErrors: [
                {
                    error: "Using wrong sign in synthetic division (r vs −r)",
                    fix: "For factor (x−3), r=+3; for factor (x+3), r=−3"
                },
                {
                    error: "Missing placeholder zeros for absent degree terms",
                    example: "x³+1 has coefficients [1,0,0,1], not [1,1]",
                    fix: "Count all degrees from n down to 0; insert 0 for any missing degree"
                },
                {
                    error: "Stopping after finding one root without reducing and continuing",
                    fix: "Always apply the full strategy to the depressed polynomial after each root found"
                }
            ]
        };

        if (/rational.?root|candidate/i.test(input)) {
            content.focus = "rationalRootTheorem";
        } else if (/synthetic.?division/i.test(input)) {
            content.focus = "syntheticDivision";
        } else if (/multiplicity|repeated.?root/i.test(input)) {
            content.focus = "multiplicity";
        }

        return content;
    }

    handleRationalEquations(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Rational Equations",
            category: 'algebraic_equations',
            summary: "Rational equations contain algebraic fractions. They are solved by multiplying through by the LCD to eliminate denominators, then solving the resulting polynomial equation. Critical requirement: identify excluded values FIRST and reject any solution matching them (extraneous solutions).",

            definitions: {
                rationalEquation: {
                    definition: "An equation containing at least one rational expression (algebraic fraction)",
                    example: "3/(x−2) + 1/(x+1) = 5/(x²−x−2)"
                },
                excludedValues: {
                    definition: "Values making any denominator zero; outside the domain; cannot be solutions",
                    identification: "Set each denominator ≠ 0 and find restrictions BEFORE solving"
                },
                extraneousSolution: {
                    definition: "A value satisfying the transformed equation but violating domain restrictions (making a denominator zero)",
                    cause: "LCD multiplication algebraically creates solutions outside the original domain",
                    prevention: "Always check every solution against the list of excluded values; check in the ORIGINAL equation"
                }
            },

            strategicApproach: {
                steps: [
                    "1. Factor all denominators completely",
                    "2. Identify and RECORD all excluded values",
                    "3. Find the LCD",
                    "4. Multiply every term on both sides by the LCD",
                    "5. Simplify: each fraction's denominator cancels",
                    "6. Solve the resulting polynomial equation",
                    "7. Check each solution against excluded values — REJECT matches",
                    "8. Verify remaining solutions in the ORIGINAL equation"
                ]
            },

            examples: [
                {
                    equation: "3/(x−2) + 1/(x+1) = 5/((x−2)(x+1))",
                    excluded: "x ≠ 2, x ≠ −1",
                    lcd: "(x−2)(x+1)",
                    result: "3(x+1)+(x−2)=5 → 4x+1=5 → x=1",
                    check: "x=1≠2,−1 ✓"
                },
                {
                    equation: "x/(x−3) = 3+9/(x−3)",
                    excluded: "x ≠ 3",
                    result: "x=3x−9+9=3x → −2x=0 → x=0",
                    check: "x=0≠3 ✓; 0/(−3)=3+9/(−3) → 0=3−3=0 ✓"
                },
                {
                    equation: "x/(x−2) = 2/(x−2)+1",
                    excluded: "x ≠ 2",
                    result: "Multiply: x=2+(x−2)=x → 0=0 (identity for domain)",
                    solution: "All real x ≠ 2"
                }
            ],

            connectionToOtherTopics: {
                linearEquations: "Many rational equations reduce to linear equations after LCD multiplication",
                quadraticEquations: "Some rational equations reduce to quadratics requiring further solving",
                factoring: "LCD is found using factoring techniques; denominators must be fully factored"
            },

            commonErrors: [
                {
                    error: "Not multiplying EVERY term by the LCD (skipping whole-number terms)",
                    fix: "Every term — including integer terms with no denominator — must be multiplied by the LCD"
                },
                {
                    error: "Not checking solutions against excluded values",
                    fix: "Make excluded value checking a mandatory Step 7; record excluded values prominently at the top of work"
                },
                {
                    error: "Checking the simplified equation rather than the original",
                    fix: "Substitute into the original rational equation with fractions intact"
                }
            ]
        };

        if (/extraneous/i.test(input)) {
            content.focus = "extraneousSolutions";
        } else if (/excluded.?value|domain/i.test(input)) {
            content.focus = "domainRestrictions";
        } else if (/work.*rate|combined.*rate|pipe/i.test(input)) {
            content.focus = "workRateApplications";
        }

        return content;
    }

    handleRadicalEquations(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Radical Equations",
            category: 'algebraic_equations',
            summary: "Radical equations contain variables under radical signs. The solution strategy is: ISOLATE the radical, then ELIMINATE it by raising both sides to the index power. Squaring both sides can introduce extraneous solutions — ALWAYS verify every solution in the original equation.",

            definitions: {
                radicalEquation: {
                    definition: "An equation where the variable appears under a radical (root) sign",
                    index: "The degree of the root (2=square root, 3=cube root, n=nth root)"
                },
                extraneousSolution: {
                    definition: "A solution of the power-raised equation that does not satisfy the original radical equation",
                    cause: "Squaring maps both positive and negative values to the same positive result; introduces solutions that require the radical to equal a negative number",
                    detection: "Substitute into original; reject if radical side must equal a negative number"
                },
                domainRestriction: {
                    definition: "For even-index radicals, radicand ≥ 0; restricts permissible x-values",
                    example: "√(2x−4): requires 2x−4 ≥ 0, so x ≥ 2"
                }
            },

            strategicApproach: {
                singleRadical: [
                    "1. Isolate the radical on one side",
                    "2. Raise both sides to the power equal to the radical index",
                    "3. Solve the resulting equation (often linear or quadratic)",
                    "4. Check ALL solutions in the ORIGINAL equation; reject extraneous ones"
                ],
                twoRadicals: [
                    "1. Isolate one radical",
                    "2. Raise both sides to the index power",
                    "3. Isolate the remaining radical",
                    "4. Raise both sides to the index power again",
                    "5. Solve and check all solutions"
                ],
                cubeRoots: "No extraneous solution risk from sign — cube root is 1-to-1 over all reals"
            },

            examples: [
                {
                    equation: "√(3x+1) = x−1",
                    step1: "Radical isolated ✓",
                    step2: "3x+1=(x−1)²=x²−2x+1",
                    step3: "x²−5x=0 → x(x−5)=0 → x=0 or x=5",
                    check_x0: "√1=0−1 → 1=−1 ✗ (extraneous)",
                    check_x5: "√16=5−1 → 4=4 ✓",
                    solution: "x=5 only"
                },
                {
                    equation: "√(x+5)−√(x−3)=2",
                    step1: "√(x+5)=2+√(x−3)",
                    step2: "x+5=4+4√(x−3)+x−3 → 4=4√(x−3) → 1=√(x−3)",
                    step3: "x−3=1 → x=4",
                    check: "√9−√1=3−1=2 ✓"
                },
                {
                    equation: "∛(2x−1)=3",
                    step1: "2x−1=27",
                    solution: "x=14",
                    check: "∛27=3 ✓; no extraneous solution risk (odd index)"
                }
            ],

            whyExtraneousSolutionsOccur: {
                explanation: "Squaring is not a 1-to-1 operation: (3)²=9 and (−3)²=9. When solving √(expr)=linear, the squaring process creates solutions that satisfy the squared equation via the negative square root — impossible since √ is defined as non-negative.",
                rule: "Before accepting a solution: verify that the radical side of the original equation equals a non-negative number"
            },

            connectionToOtherTopics: {
                quadraticEquations: "Squaring a radical equation with a linear+radical right side produces a quadratic",
                linearEquations: "Simple radical equations often reduce to linear equations after squaring",
                domainAnalysis: "Domain restrictions on radical expressions directly constrain possible solutions"
            },

            commonErrors: [
                {
                    error: "Squaring before isolating the radical",
                    example: "√x+3=5 → squared as x+9=25 (wrong); isolate first: √x=2; x=4",
                    fix: "Isolation is mandatory before power-raising; squaring a sum produces cross terms"
                },
                {
                    error: "Squaring each term individually in a sum",
                    example: "(√x+3)²=x+9 (wrong); correct: x+6√x+9",
                    fix: "Square the entire side as a binomial: (a+b)²=a²+2ab+b²"
                },
                {
                    error: "Not checking solutions in the ORIGINAL equation",
                    fix: "Always substitute candidates into the original equation with the radical intact before declaring them valid"
                }
            ]
        };

        if (/two.*radical|double.*radical/i.test(input)) {
            content.focus = "twoRadicals";
        } else if (/cube.?root|∛|nth.?root/i.test(input)) {
            content.focus = "cubeRootEquations";
        } else if (/extraneous/i.test(input)) {
            content.focus = "extraneousSolutions";
        }

        return content;
    }
}
