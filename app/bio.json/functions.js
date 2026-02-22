Understood! Here is the complete code for the Enhanced Graphing Functions Workbook, written directly in this response, structured exactly like the factorization workbook:
// Enhanced Graphing Functions Workbook - Comprehensive Graphing & Relations System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { MathematicsSvgDiagrams } from '../svg-data.js';
import { MathematicsDiagramsRegistry } from '../registry.js';
import { MathematicsDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedGraphingFunctionsWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "graphing";
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
        this.initializeGraphingTopics();
        this.initializeGraphingLessons();
        this.initializeMathematicsPracticals();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            graphing: {
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
                functionNotationBg: '#e3f2fd',
                domainRangeBg: '#e8f5e9',
                interceptsBg: '#fff8e1',
                asymptotesBg: '#fce4ec',
                piecewiseBg: '#ede7f6',
                compositeBg: '#e0f7fa',
                inverseBg: '#fbe9e7',
                transformationsBg: '#f1f8e9'
            },
            functions: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#1a237e',
                headerText: '#ffffff',
                sectionBg: '#c5cae9',
                sectionText: '#1a237e',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e8eaf6',
                resultText: '#283593',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#5c6bc0',
                contentBg: '#fce4ec',
                contentText: '#880e4f',
                diagramBg: '#e8f5e9',
                structureBg: '#e3f2fd',
                practicalBg: '#fffde7',
                practicalText: '#f57f17',
                functionNotationBg: '#e3f2fd',
                domainRangeBg: '#e8f5e9',
                interceptsBg: '#fff8e1',
                asymptotesBg: '#fce4ec',
                piecewiseBg: '#ede7f6',
                compositeBg: '#e0f7fa',
                inverseBg: '#fbe9e7',
                transformationsBg: '#f1f8e9'
            }
        };
        this.colors = themes[this.theme] || themes.graphing;
    }

    initializeMathematicsSymbols() {
        return {
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'sigma': 'Σ', 'phi': 'φ',
            'arrow': '→', 'doubleArrow': '↔', 'implies': '⟹', 'iff': '⟺',
            'plus': '+', 'minus': '−', 'plusminus': '±', 'times': '×',
            'divide': '÷', 'approximately': '≈', 'notEqual': '≠',
            'leq': '≤', 'geq': '≥', 'infinity': '∞', 'sqrt': '√',
            'squared': '²', 'cubed': '³', 'superscript4': '⁴',
            'subscript0': '₀', 'subscript1': '₁', 'subscript2': '₂',
            'dot': '·', 'degree': '°', 'therefore': '∴', 'because': '∵',
            'forAll': '∀', 'exists': '∃', 'element': '∈', 'notElement': '∉',
            'subset': '⊂', 'union': '∪', 'intersection': '∩', 'emptySet': '∅',
            'integer': 'ℤ', 'rational': 'ℚ', 'real': 'ℝ',
            'complex': 'ℂ', 'natural': 'ℕ',
            'compose': '∘', 'mapsto': '↦', 'partialDeriv': '∂',
            'function': 'f(x)', 'inverse': 'f⁻¹(x)', 'composition': '(f∘g)(x)',
            'domainSymbol': 'Dom(f)', 'rangeSymbol': 'Ran(f)',
            'absoluteValue': '|x|', 'floorFunction': '⌊x⌋', 'ceilFunction': '⌈x⌉'
        };
    }

    initializeGraphingTopics() {
        this.mathematicsTopics = {
            function_notation: {
                patterns: [
                    /function.?notation|f\(x\)|g\(x\)/i,
                    /evaluate.?function|function.?value/i,
                    /mapping|input.?output|domain.?notation/i,
                    /vertical.?line.?test|relation.?function/i
                ],
                handler: this.handleFunctionNotation.bind(this),
                name: 'Function Notation',
                category: 'graphing_functions',
                description: 'Understanding functions as mappings, using f(x) notation, and evaluating functions',
                difficulty: 'beginner',
                prerequisites: ['algebra_basics', 'substitution', 'ordered_pairs']
            },

            domain_and_range: {
                patterns: [
                    /domain|range|input.?values|output.?values/i,
                    /natural.?domain|restricted.?domain/i,
                    /set.?notation|interval.?notation/i,
                    /all.?real|real.?numbers|undefined/i
                ],
                handler: this.handleDomainAndRange.bind(this),
                name: 'Domain & Range',
                category: 'graphing_functions',
                description: 'Determining valid input (domain) and output (range) values of functions',
                difficulty: 'beginner',
                prerequisites: ['function_notation', 'number_sets', 'inequalities']
            },

            intercepts: {
                patterns: [
                    /intercept|x.?intercept|y.?intercept/i,
                    /zero.?of.?function|root|where.*cross/i,
                    /cuts.*axis|meets.*axis/i,
                    /f\(x\)\s*=\s*0|y\s*=\s*0/i
                ],
                handler: this.handleIntercepts.bind(this),
                name: 'Intercepts',
                category: 'graphing_functions',
                description: 'Finding x-intercepts (zeros/roots) and y-intercepts of functions',
                difficulty: 'beginner',
                prerequisites: ['function_notation', 'solving_equations', 'substitution']
            },

            asymptotes: {
                patterns: [
                    /asymptote|vertical.?asymptote|horizontal.?asymptote/i,
                    /oblique.?asymptote|slant.?asymptote/i,
                    /approaches.?infinity|end.?behaviour/i,
                    /rational.?function.*asymptote/i
                ],
                handler: this.handleAsymptotes.bind(this),
                name: 'Asymptotes',
                category: 'graphing_functions',
                description: 'Identifying vertical, horizontal, and oblique asymptotes of functions',
                difficulty: 'intermediate',
                prerequisites: ['domain_and_range', 'limits_concept', 'rational_functions']
            },

            piecewise_functions: {
                patterns: [
                    /piecewise|piece.?wise|defined.?by.?pieces/i,
                    /split.?function|multi.?rule.?function/i,
                    /absolute.?value.?function|step.?function/i,
                    /different.?rules.*different.*intervals/i
                ],
                handler: this.handlePiecewiseFunctions.bind(this),
                name: 'Piecewise Functions',
                category: 'graphing_functions',
                description: 'Defining, evaluating, and graphing functions defined by multiple rules over different intervals',
                difficulty: 'intermediate',
                prerequisites: ['function_notation', 'domain_and_range', 'inequalities', 'graphing_basics']
            },

            composite_functions: {
                patterns: [
                    /composite|composition.*function|f.*g\(x\)/i,
                    /\(f\s*∘\s*g\)|fog|gof/i,
                    /function.*of.*function|nested.?function/i,
                    /apply.*twice|chain.*function/i
                ],
                handler: this.handleCompositeFunctions.bind(this),
                name: 'Composite Functions',
                category: 'graphing_functions',
                description: 'Forming and evaluating composite functions (f∘g)(x) = f(g(x))',
                difficulty: 'intermediate',
                prerequisites: ['function_notation', 'domain_and_range', 'substitution']
            },

            inverse_functions: {
                patterns: [
                    /inverse.?function|f.?inverse|f\^.?\-1/i,
                    /reverse.?function|undo.*function/i,
                    /one.?to.?one|bijection|horizontal.?line.?test/i,
                    /switch.*x.*y|reflect.*y.*x/i
                ],
                handler: this.handleInverseFunctions.bind(this),
                name: 'Inverse Functions',
                category: 'graphing_functions',
                description: 'Finding, graphing, and verifying inverse functions; horizontal line test',
                difficulty: 'intermediate',
                prerequisites: ['function_notation', 'domain_and_range', 'composite_functions', 'solving_equations']
            },

            transformations: {
                patterns: [
                    /transformation|translate|shift|reflect/i,
                    /stretch|compress|dilat/i,
                    /vertical.*shift|horizontal.*shift/i,
                    /f\(x\)\s*[+-]|f\(x\s*[+-]\)|[+-]f\(x\)/i,
                    /parent.*function|base.*graph/i
                ],
                handler: this.handleTransformations.bind(this),
                name: 'Transformations of Function Graphs',
                category: 'graphing_functions',
                description: 'Applying translations, reflections, stretches, and compressions to graphs',
                difficulty: 'intermediate',
                prerequisites: ['function_notation', 'graphing_basics', 'domain_and_range']
            }
        };
    }

    initializeGraphingLessons() {
        this.lessons = {
            function_notation: {
                title: "Function Notation: The Language of Mathematical Relationships",
                concepts: [
                    "A function is a rule that assigns exactly one output to each input",
                    "f(x) is read 'f of x' — it does NOT mean f times x",
                    "The vertical line test determines whether a graph represents a function",
                    "Functions can be represented as equations, tables, graphs, or mappings",
                    "f(a) means evaluate the function at x = a by substitution"
                ],
                theory: "Function notation is the foundational language of all higher mathematics. The concept of a function — a reliable rule mapping each input to exactly one output — underpins calculus, statistics, physics, and computer science. Mastering notation enables precise communication of mathematical relationships.",
                keyDefinitions: {
                    "Relation": "Any set of ordered pairs (x, y); associates inputs with outputs without uniqueness requirement",
                    "Function": "A relation where each input (x-value) maps to exactly one output (y-value)",
                    "f(x) Notation": "Functional notation where f names the function and x is the independent variable; f(x) is the dependent variable (output)",
                    "Independent Variable": "The input variable (x); chosen freely; appears in the domain",
                    "Dependent Variable": "The output variable f(x) or y; its value depends on the chosen input",
                    "Mapping": "A diagram showing how each element of the domain maps to an element of the range",
                    "Vertical Line Test": "A graph represents a function if and only if no vertical line crosses it more than once",
                    "Image": "The output value f(a) is called the image of a under f",
                    "Pre-image": "If f(a) = b, then a is the pre-image of b"
                },
                functionRepresentations: {
                    equation: { form: "f(x) = 2x + 3", description: "Algebraic rule; most common form in mathematics" },
                    table: { form: "{(1,5),(2,7),(3,9)}", description: "Discrete list of input-output pairs" },
                    graph: { form: "Plotted curve on coordinate axes", description: "Visual representation; verified by vertical line test" },
                    mapping: { form: "Arrows from domain elements to range elements", description: "Shows structural relationship clearly; reveals one-to-one property" },
                    verbal: { form: "'Multiply x by 2 then add 3'", description: "Natural language description; useful for real-world contexts" }
                },
                evaluationProcess: {
                    steps: [
                        "Step 1: Write the function rule clearly",
                        "Step 2: Replace every occurrence of x with the given input value (use brackets for negative values)",
                        "Step 3: Simplify the resulting arithmetic expression",
                        "Step 4: State the result as f(input) = output"
                    ],
                    example: {
                        function: "f(x) = 3x² − 2x + 1",
                        evaluate: "f(−2)",
                        step1: "f(−2) = 3(−2)² − 2(−2) + 1",
                        step2: "= 3(4) + 4 + 1",
                        step3: "= 12 + 4 + 1 = 17",
                        result: "f(−2) = 17"
                    }
                },
                specialNotations: {
                    "f(x+h)": "Evaluate at input (x+h); used in difference quotient and derivatives",
                    "f(2x)": "Replace x with 2x throughout; horizontal compression by factor 2",
                    "2f(x)": "Multiply entire output by 2; vertical stretch",
                    "f(a) = 0": "Find input a where output is zero; finding roots",
                    "f(g(x))": "Composition: apply g first, then apply f to the result"
                },
                workedExamples: [
                    {
                        function: "g(x) = x² − 4x + 3",
                        tasks: ["g(0) = 3", "g(3) = 9−12+3 = 0", "g(−1) = 1+4+3 = 8", "g(a+1) = (a+1)²−4(a+1)+3 = a²+2a+1−4a−4+3 = a²−2a"]
                    },
                    {
                        function: "h(x) = √(2x − 1)",
                        tasks: ["h(5) = √9 = 3", "h(0.5) = √0 = 0", "h(−1): √(−3) undefined over ℝ"],
                        note: "Identifying undefined values reveals domain restrictions"
                    }
                ],
                applications: [
                    "Computer programming: functions as reusable code blocks",
                    "Physics: position s(t), velocity v(t), acceleration a(t) as functions of time",
                    "Economics: cost C(x), revenue R(x), profit P(x) as functions of quantity",
                    "Biology: population P(t) as a function of time",
                    "Chemistry: concentration C(t) as a function of time in reactions"
                ]
            },

            domain_and_range: {
                title: "Domain & Range: Defining the Boundaries of Functions",
                concepts: [
                    "The domain is the complete set of valid input values (x-values)",
                    "The range is the complete set of output values (f(x)-values) produced by the function",
                    "The natural domain includes all real numbers for which the function is defined",
                    "Domain restrictions arise from: square roots (radicand ≥ 0), denominators (≠ 0), logarithms (argument > 0)",
                    "Range is determined by analyzing what output values the function can produce"
                ],
                theory: "Domain and range define the operational boundaries of a function. Understanding these boundaries is critical for solving equations, graphing accurately, forming composites, and finding inverses. Every claim about a function is implicitly qualified by its domain.",
                keyDefinitions: {
                    "Domain": "The set of all permissible input values (x-values) for which the function is defined",
                    "Range": "The set of all output values (y-values) produced by the function over its domain",
                    "Natural Domain": "The largest possible domain — all real values for which the expression is mathematically defined",
                    "Restricted Domain": "A domain smaller than the natural domain, imposed by context or to ensure invertibility",
                    "Interval Notation": "Compact notation for sets: [a,b] closed; (a,b) open; [a,∞) half-open; ℝ = (−∞,∞)",
                    "Set-Builder Notation": "{x ∈ ℝ : condition on x}",
                    "Codomain": "The set within which outputs are permitted to fall (not necessarily all achieved); range ⊆ codomain"
                },
                domainRestrictions: {
                    squareRoot: {
                        rule: "Expression under square root must be ≥ 0",
                        example: "f(x) = √(3x − 6): 3x−6 ≥ 0 → x ≥ 2 → Domain: [2, ∞)"
                    },
                    denominator: {
                        rule: "Denominator must not equal zero",
                        example: "f(x) = 5/(x²−9): x²−9 ≠ 0 → x ≠ ±3 → Domain: ℝ \\ {−3, 3} = (−∞,−3)∪(−3,3)∪(3,∞)"
                    },
                    logarithm: {
                        rule: "Argument of logarithm must be strictly greater than 0",
                        example: "f(x) = log(x−4): x−4 > 0 → x > 4 → Domain: (4, ∞)"
                    },
                    evenRoot: {
                        rule: "Same as square root — radicand ≥ 0",
                        example: "f(x) = ⁴√(1−x²): 1−x² ≥ 0 → −1 ≤ x ≤ 1 → Domain: [−1, 1]"
                    },
                    combined: {
                        rule: "Apply all restrictions simultaneously and intersect the resulting sets",
                        example: "f(x) = √(x−1)/(x−3): need x−1 ≥ 0 AND x ≠ 3 → Domain: [1,3)∪(3,∞)"
                    }
                },
                findingRange: {
                    graphical: "Read all y-values occupied by the graph; note gaps and endpoints",
                    algebraic: {
                        method: "Let y = f(x); solve for x in terms of y; find all y for which x is real and in domain",
                        example: "f(x) = 2x+3: y=2x+3 → x=(y−3)/2 → defined for all y → Range: ℝ"
                    },
                    quadratic: "Vertex gives minimum or maximum output; range is [vertex_y, ∞) or (−∞, vertex_y]",
                    rational: "Identify horizontal asymptote; check if it is achieved; range is all y except possibly asymptote value",
                    squareRoot: "Output ≥ 0 always; f(x) = √(x−a) + k → Range: [k, ∞)"
                },
                commonFunctionDomains: [
                    { function: "f(x) = polynomial", domain: "ℝ = (−∞, ∞)", range: "Depends on degree and leading coefficient" },
                    { function: "f(x) = 1/x", domain: "ℝ \\ {0} = (−∞,0)∪(0,∞)", range: "ℝ \\ {0}" },
                    { function: "f(x) = √x", domain: "[0, ∞)", range: "[0, ∞)" },
                    { function: "f(x) = x²", domain: "ℝ", range: "[0, ∞)" },
                    { function: "f(x) = |x|", domain: "ℝ", range: "[0, ∞)" },
                    { function: "f(x) = log(x)", domain: "(0, ∞)", range: "ℝ" },
                    { function: "f(x) = eˣ", domain: "ℝ", range: "(0, ∞)" },
                    { function: "f(x) = sin(x)", domain: "ℝ", range: "[−1, 1]" },
                    { function: "f(x) = cos(x)", domain: "ℝ", range: "[−1, 1]" },
                    { function: "f(x) = tan(x)", domain: "ℝ \\ {π/2 + nπ}", range: "ℝ" }
                ],
                workedExamples: [
                    {
                        function: "f(x) = √(4 − x²)",
                        domain: "4−x² ≥ 0 → x² ≤ 4 → −2 ≤ x ≤ 2 → Domain: [−2, 2]",
                        range: "Maximum of √4 = 2 at x=0; minimum 0 at x=±2 → Range: [0, 2]",
                        graph: "Upper semicircle of radius 2"
                    },
                    {
                        function: "f(x) = (x+1)/(x²−1)",
                        simplify: "(x+1)/((x+1)(x−1)) = 1/(x−1) for x ≠ −1",
                        domain: "x² − 1 ≠ 0 → x ≠ ±1 → Domain: ℝ \\ {−1, 1}",
                        range: "1/(x−1) = y → x = 1+1/y; defined for y ≠ 0 → Range: ℝ \\ {0}",
                        note: "Hole at x = −1; vertical asymptote at x = 1"
                    }
                ]
            },

            intercepts: {
                title: "Intercepts: Where Functions Meet the Axes",
                concepts: [
                    "The y-intercept is found by evaluating f(0) — substituting x = 0",
                    "x-intercepts (roots/zeros) are found by solving f(x) = 0",
                    "A function can have zero, one, or many x-intercepts, but at most one y-intercept",
                    "The Fundamental Theorem of Algebra guarantees a degree-n polynomial has exactly n roots (counting multiplicity, over ℂ)",
                    "The multiplicity of a root determines whether the graph crosses or touches the x-axis"
                ],
                theory: "Intercepts are the most directly visible features of a graph. They reveal starting values (y-intercepts) and equilibrium/solution points (x-intercepts). Understanding multiplicity adds depth: a double root creates a tangent 'touch' rather than a crossing — visible as a turning point on the x-axis.",
                keyDefinitions: {
                    "y-intercept": "The point where the graph crosses the y-axis; found at x = 0; coordinates (0, f(0))",
                    "x-intercept": "The point(s) where the graph crosses the x-axis; found by solving f(x) = 0; coordinates (a, 0)",
                    "Zero of a function": "A value a in the domain where f(a) = 0; same as x-intercept",
                    "Root": "Synonym for zero of a function, especially for polynomial equations",
                    "Multiplicity": "The number of times a root appears as a factor; even multiplicity = touch; odd multiplicity = cross",
                    "Simple root": "Multiplicity 1 — graph crosses the x-axis",
                    "Double root": "Multiplicity 2 — graph touches x-axis and bounces back without crossing"
                },
                findingIntercepts: {
                    yIntercept: {
                        method: "Substitute x = 0 into f(x) and evaluate",
                        example: "f(x) = 3x² − 2x + 5: f(0) = 5 → y-intercept: (0, 5)"
                    },
                    xIntercepts: {
                        method: "Set f(x) = 0 and solve for x using appropriate technique",
                        techniques: ["Factoring", "Quadratic formula", "Graphical estimation", "Numerical methods"],
                        example: "f(x) = x² − 5x + 6 = 0 → (x−2)(x−3) = 0 → x = 2, x = 3 → x-intercepts: (2,0), (3,0)"
                    }
                },
                multiplicityEffects: {
                    odd: "Graph crosses the x-axis — changes sign at root",
                    even: "Graph touches x-axis and bounces — does not change sign at root",
                    examples: [
                        { function: "f(x) = (x−1)³(x+2)²", roots: "x=1 (mult. 3, odd → crosses), x=−2 (mult. 2, even → touches)" },
                        { function: "f(x) = (x−4)²", roots: "x=4 (mult. 2, even → vertex on x-axis, bounces)", note: "Perfect square trinomials always create this pattern" }
                    ]
                },
                workedExamples: [
                    {
                        function: "f(x) = 2x³ − 3x² − 11x + 6",
                        yIntercept: "f(0) = 6 → (0, 6)",
                        xIntercepts: "By rational root theorem, try x=3: 54−27−33+6=0 ✓ → factor (x−3), divide → 2x²+3x−2=(2x−1)(x+2) → roots: x=3, x=½, x=−2 → intercepts: (3,0),(½,0),(−2,0)"
                    }
                ]
            },

            asymptotes: {
                title: "Asymptotes: Lines the Graph Approaches but Never Reaches",
                concepts: [
                    "A vertical asymptote occurs where the function approaches ±∞",
                    "A horizontal asymptote describes end behaviour as x → ±∞",
                    "An oblique (slant) asymptote occurs when degree of numerator = degree of denominator + 1",
                    "Vertical asymptotes arise at values excluded from the domain (not removable discontinuities)",
                    "Graphs may cross horizontal or oblique asymptotes in the middle, but approach them at the ends"
                ],
                theory: "Asymptotes reveal the global and local behaviour of functions — how they grow, where they blow up, and what they approach at infinity. For rational functions, asymptote analysis is essential to accurate graphing. Asymptotes also appear in exponential, logarithmic, and trigonometric functions.",
                keyDefinitions: {
                    "Asymptote": "A line that a curve approaches arbitrarily closely but (generally) never reaches as x or y → ±∞",
                    "Vertical Asymptote": "A vertical line x = a where |f(x)| → ∞ as x → a from either side",
                    "Horizontal Asymptote": "A horizontal line y = b approached by f(x) as x → +∞ or x → −∞",
                    "Oblique Asymptote": "A non-horizontal, non-vertical line approached as x → ±∞; degree of numerator is exactly 1 more than denominator",
                    "Removable Discontinuity": "A 'hole' in the graph where both numerator and denominator are zero; NOT an asymptote",
                    "End Behaviour": "The behaviour of f(x) as x → +∞ and x → −∞"
                },
                rationalFunctionAsymptotes: {
                    verticalAsymptotes: {
                        rule: "Set denominator = 0; exclude values that also make numerator = 0 (those are holes, not asymptotes)",
                        example: "f(x) = (x+1)/((x−2)(x+3)): denominator = 0 at x=2, x=−3; numerator ≠ 0 at these points → VA: x=2, x=−3"
                    },
                    horizontalAsymptotes: {
                        caseDegreeNLessThanM: "deg(numerator) < deg(denominator): HA is y = 0",
                        caseDegreeNEqualsM: "deg(numerator) = deg(denominator): HA is y = (leading coeff of numerator)/(leading coeff of denominator)",
                        caseDegreeNGreaterThanM: "deg(numerator) > deg(denominator): No horizontal asymptote (check for oblique)",
                        examples: [
                            "f(x) = 3/(x²+1): deg 0 < deg 2 → HA: y = 0",
                            "f(x) = (4x²−1)/(2x²+3): deg equal → HA: y = 4/2 = 2",
                            "f(x) = x²/(x+1): deg 2 > deg 1 → No HA, check oblique"
                        ]
                    },
                    obliqueAsymptotes: {
                        method: "Perform polynomial long division; quotient (ignoring remainder) is the oblique asymptote",
                        example: "f(x) = (x²+2x−1)/(x+1): divide x²+2x−1 by x+1 → quotient x+1 remainder −2 → OA: y = x+1"
                    }
                },
                otherFunctionAsymptotes: {
                    exponential: "f(x) = eˣ: HA at y = 0 (as x → −∞); no VA",
                    logarithm: "f(x) = ln(x): VA at x = 0; no HA",
                    trigonometric: "f(x) = tan(x): VA at x = π/2 + nπ for all integers n"
                },
                workedExamples: [
                    {
                        function: "f(x) = (2x² − 8)/(x² − x − 6)",
                        step1: "Factor: (2(x+2)(x−2))/((x−3)(x+2))",
                        step2: "Cancel (x+2): 2(x−2)/(x−3) with hole at x = −2",
                        step3: "VA: x = 3 (denominator = 0, numerator ≠ 0)",
                        step4: "HA: degrees equal → y = 2/1 = 2",
                        step5: "Hole: at x=−2: y = 2(−2−2)/(−2−3) = 2(−4)/(−5) = 8/5 → hole at (−2, 8/5)"
                    }
                ]
            },

            piecewise_functions: {
                title: "Piecewise Functions: Different Rules for Different Intervals",
                concepts: [
                    "A piecewise function is defined by different formulas on different parts of its domain",
                    "Each piece applies only within its specified interval",
                    "Open circles indicate endpoints not included; closed circles indicate endpoints included",
                    "Absolute value and step functions are important special cases of piecewise functions",
                    "Continuity at breakpoints must be checked separately"
                ],
                theory: "Piecewise functions model real-world situations where the rule changes depending on the input — tax brackets, shipping rates, speed limits, and biological thresholds all follow piecewise patterns. Graphing piecewise functions requires careful attention to the domain of each piece and the behaviour at boundary points.",
                keyDefinitions: {
                    "Piecewise Function": "A function defined by two or more different formulas, each valid on a specific sub-domain",
                    "Breakpoint": "A value where the rule changes; boundary between pieces",
                    "Continuity": "A function is continuous at x = a if the left-hand limit, right-hand limit, and function value are all equal",
                    "Discontinuity": "A point where the function is not continuous; can be removable (hole), jump, or infinite",
                    "Jump Discontinuity": "Left and right limits exist but are not equal; creates a 'jump' in the graph",
                    "Absolute Value Function": "f(x) = |x| = x if x ≥ 0, −x if x < 0; the canonical piecewise function",
                    "Floor Function": "⌊x⌋ = greatest integer ≤ x; a step function",
                    "Ceiling Function": "⌈x⌉ = smallest integer ≥ x; a step function"
                },
                evaluationProcess: {
                    steps: [
                        "Step 1: Determine which interval the input value falls in",
                        "Step 2: Apply the formula corresponding to that interval",
                        "Step 3: Evaluate the expression",
                        "Step 4: For boundary values, verify which piece applies (check open/closed endpoints)"
                    ],
                    example: {
                        function: "f(x) = { x² + 1, x < 0; 3, x = 0; 2x − 1, x > 0 }",
                        evaluate: ["f(−3) = (−3)² + 1 = 10", "f(0) = 3", "f(4) = 2(4)−1 = 7", "f(0⁻) → 0²+1 = 1 ≠ 3 → jump at x = 0"]
                    }
                },
                graphingProcess: {
                    steps: [
                        "Graph each piece only over its specified interval",
                        "Use open circle (○) at excluded endpoints",
                        "Use filled circle (●) at included endpoints",
                        "Check continuity at each breakpoint",
                        "Label each piece and its domain"
                    ]
                },
                absoluteValueDetails: {
                    definition: "|x| = x if x ≥ 0; −x if x < 0",
                    graph: "V-shape with vertex at origin; both arms slope at ±1",
                    generalForm: "|x − a| + k: vertex shifted to (a, k)",
                    transforming: "f(x) = a|x − h| + k: |a| is slope of arms; h is horizontal shift; k is vertical shift; a < 0 flips to ∧ shape"
                },
                workedExamples: [
                    {
                        title: "Tax Bracket Model",
                        function: "T(x) = { 0.20x, 0 ≤ x ≤ 12570; 0.20(12570) + 0.40(x−12570), x > 12570 }",
                        evaluate: ["T(10000) = 0.20(10000) = £2000", "T(20000) = 2514 + 0.40(7430) = 2514 + 2972 = £5486"],
                        note: "Continuity at x = 12570: both pieces give T(12570) = £2514 → continuous"
                    },
                    {
                        title: "Speed Restriction Model",
                        function: "v(x) = { 30, 0 ≤ x < 0.5; 60, 0.5 ≤ x < 2; 70, x ≥ 2 }",
                        note: "Jump discontinuities at x = 0.5 and x = 2 — speed limits change instantly"
                    }
                ]
            },

            composite_functions: {
                title: "Composite Functions: Functions Within Functions",
                concepts: [
                    "(f∘g)(x) = f(g(x)) means apply g first, then apply f to the result",
                    "The domain of f∘g is those values of x in the domain of g whose image under g is in the domain of f",
                    "Composition is generally not commutative: f∘g ≠ g∘f",
                    "The identity function I(x) = x satisfies f∘I = I∘f = f",
                    "Inverse functions satisfy f∘f⁻¹ = f⁻¹∘f = I"
                ],
                theory: "Composite functions model multi-stage processes: applying one transformation after another. In calculus, the chain rule differentiates composite functions. In computing, function composition is a fundamental programming pattern. Recognising the 'inner' and 'outer' function is essential for both evaluation and differentiation.",
                keyDefinitions: {
                    "Composite Function": "A function formed by applying one function to the output of another: (f∘g)(x) = f(g(x))",
                    "Composition Operator": "∘ denotes composition; (f∘g) is read 'f composed with g' or 'f of g'",
                    "Inner Function": "The function applied first; g in f(g(x))",
                    "Outer Function": "The function applied second (to the result of the inner); f in f(g(x))",
                    "Domain of Composite": "Dom(f∘g) = {x ∈ Dom(g) : g(x) ∈ Dom(f)}",
                    "Decomposition": "Expressing a complex function as a composition of simpler ones; essential for chain rule"
                },
                evaluationProcess: {
                    numerical: {
                        steps: [
                            "Step 1: Evaluate the inner function at the given input",
                            "Step 2: Use the result as the input for the outer function",
                            "Step 3: Evaluate the outer function"
                        ],
                        example: "f(x) = x+1, g(x) = x²: (f∘g)(3) = f(g(3)) = f(9) = 10; (g∘f)(3) = g(f(3)) = g(4) = 16"
                    },
                    algebraic: {
                        steps: ["Replace every x in f with the entire expression g(x)", "Simplify the resulting expression"],
                        example: "f(x) = 2x−1, g(x) = x²+3: (f∘g)(x) = f(x²+3) = 2(x²+3)−1 = 2x²+5"
                    }
                },
                domainOfComposite: {
                    method: "Find domain of g; then restrict to x-values where g(x) is in domain of f",
                    example: {
                        f: "f(x) = √x (domain: x ≥ 0)",
                        g: "g(x) = x − 4 (domain: ℝ)",
                        composite: "(f∘g)(x) = √(x−4)",
                        domainCalc: "Need x−4 ≥ 0 → x ≥ 4 → Domain: [4, ∞)"
                    }
                },
                decomposition: {
                    purpose: "Identify simpler functions that combine to produce a complex one",
                    example1: { h: "h(x) = (3x+1)⁵", inner: "g(x) = 3x+1", outer: "f(u) = u⁵", verify: "f(g(x)) = (3x+1)⁵ ✓" },
                    example2: { h: "h(x) = sin(x²)", inner: "g(x) = x²", outer: "f(u) = sin(u)", verify: "f(g(x)) = sin(x²) ✓" },
                    example3: { h: "h(x) = e^(√x)", inner: "g(x) = √x", outer: "f(u) = eᵘ", verify: "f(g(x)) = e^(√x) ✓" }
                },
                workedExamples: [
                    {
                        given: "f(x) = 1/(x−2), g(x) = 3x+1",
                        tasks: {
                            fog: "(f∘g)(x) = 1/(3x+1−2) = 1/(3x−1); domain: x ≠ 1/3",
                            gof: "(g∘f)(x) = 3·(1/(x−2))+1 = 3/(x−2)+1 = (3+x−2)/(x−2) = (x+1)/(x−2); domain: x ≠ 2",
                            notCommutative: "f∘g ≠ g∘f confirmed"
                        }
                    }
                ]
            },

            inverse_functions: {
                title: "Inverse Functions: Reversing the Machine",
                concepts: [
                    "The inverse function f⁻¹ undoes f: if f(a) = b then f⁻¹(b) = a",
                    "Only one-to-one (injective) functions have inverses that are also functions",
                    "The horizontal line test determines whether a function is one-to-one",
                    "The graph of f⁻¹ is the reflection of f in the line y = x",
                    "f(f⁻¹(x)) = x and f⁻¹(f(x)) = x for all x in the respective domains"
                ],
                theory: "Inverse functions reverse the input-output relationship. They are fundamental to solving equations (applying the inverse to both sides), to logarithms as inverses of exponentials, to trigonometric inverses, and to the entire study of bijections in mathematics. The reflection property provides an immediate graphical check.",
                keyDefinitions: {
                    "Inverse Function": "f⁻¹ is the inverse of f if f(f⁻¹(x)) = x and f⁻¹(f(x)) = x",
                    "One-to-One Function": "A function where each output value corresponds to exactly one input; also called injective",
                    "Bijection": "A function that is both one-to-one and onto; bijections always have inverses",
                    "Horizontal Line Test": "A function is one-to-one iff no horizontal line intersects its graph more than once",
                    "Inverse Notation": "f⁻¹(x) — the exponent −1 here denotes inverse, NOT reciprocal",
                    "Reflection Property": "The graph of f⁻¹ is the reflection of the graph of f over the line y = x",
                    "Domain-Range Swap": "Domain of f⁻¹ = Range of f; Range of f⁻¹ = Domain of f"
                },
                findingInverse: {
                    algebraicMethod: {
                        steps: [
                            "Step 1: Replace f(x) with y",
                            "Step 2: Swap x and y (interchange every x and y)",
                            "Step 3: Solve the new equation for y",
                            "Step 4: Replace y with f⁻¹(x)",
                            "Step 5: State the domain of f⁻¹ (= range of f)"
                        ],
                        example: {
                            function: "f(x) = 2x + 3",
                            step1: "y = 2x + 3",
                            step2: "x = 2y + 3",
                            step3: "y = (x − 3)/2",
                            result: "f⁻¹(x) = (x−3)/2",
                            verify: "f(f⁻¹(x)) = 2·(x−3)/2 + 3 = x−3+3 = x ✓"
                        }
                    },
                    restrictingDomain: {
                        example: "f(x) = x² is not one-to-one over ℝ. Restrict to x ≥ 0 → f⁻¹(x) = √x with domain [0, ∞)",
                        note: "Domain restriction is always required for many-to-one functions such as quadratics and trig functions"
                    }
                },
                graphicalProperty: {
                    reflection: "Reflect every point (a, b) on graph of f to (b, a) to obtain graph of f⁻¹",
                    symmetryLine: "The line y = x is the axis of symmetry between f and f⁻¹",
                    implication: "If (3, 7) is on f, then (7, 3) is on f⁻¹"
                },
                workedExamples: [
                    {
                        function: "f(x) = (3x − 1)/(x + 2)",
                        step1: "y = (3x−1)/(x+2)",
                        step2: "x = (3y−1)/(y+2)",
                        step3: "x(y+2) = 3y−1 → xy+2x = 3y−1 → 3y−xy = 2x+1 → y(3−x) = 2x+1",
                        result: "f⁻¹(x) = (2x+1)/(3−x), domain: x ≠ 3",
                        verify: "Verify f(f⁻¹(x)) = x by substitution"
                    },
                    {
                        function: "f(x) = x² − 4, x ≥ 0",
                        result: "f⁻¹(x) = √(x + 4), domain: x ≥ −4",
                        domainNote: "Domain of f⁻¹ = Range of f = [−4, ∞)"
                    }
                ]
            },

            transformations: {
                title: "Transformations of Function Graphs",
                concepts: [
                    "Transformations move, flip, or resize graphs without changing their fundamental shape",
                    "Vertical transformations affect the output f(x): they are 'outside' the function",
                    "Horizontal transformations affect the input x: they are 'inside' the function and are counterintuitive",
                    "Horizontal transformations act opposite to what the sign suggests: f(x − h) shifts RIGHT by h",
                    "Order of transformations matters when multiple are applied simultaneously"
                ],
                theory: "Transformations allow us to graph a wide family of functions by understanding how each modifies the parent function. Every function of the form y = af(bx − h) + k can be graphed by applying four transformations to the parent f(x). This framework links all function families and is the foundation of function analysis.",
                keyDefinitions: {
                    "Parent Function": "The simplest, unmodified base function (e.g., f(x) = x², f(x) = |x|, f(x) = √x)",
                    "Translation": "A shift of the graph horizontally or vertically with no change in shape or size",
                    "Reflection": "A flip of the graph over an axis; reverses sign of either input or output",
                    "Vertical Stretch": "Multiplying output by a > 1: points move away from x-axis",
                    "Vertical Compression": "Multiplying output by 0 < a < 1: points move toward x-axis",
                    "Horizontal Stretch": "Multiplying input by 0 < b < 1: graph widens; points move away from y-axis",
                    "Horizontal Compression": "Multiplying input by b > 1: graph narrows; points move toward y-axis",
                    "General Form": "y = af(b(x − h)) + k"
                },
                transformationRules: {
                    verticalTranslation: {
                        rule: "y = f(x) + k",
                        effect: "Shifts graph UP k units (k > 0) or DOWN |k| units (k < 0)",
                        example: "y = x² + 3: vertex moves from (0,0) to (0,3)"
                    },
                    horizontalTranslation: {
                        rule: "y = f(x − h)",
                        effect: "Shifts graph RIGHT h units (h > 0) or LEFT |h| units (h < 0)",
                        warning: "Counter-intuitive: f(x − 3) shifts RIGHT 3; f(x + 3) shifts LEFT 3",
                        example: "y = (x−4)²: vertex at (4, 0), not (−4, 0)"
                    },
                    verticalStretchCompression: {
                        rule: "y = af(x)",
                        effect: "a > 1: vertical stretch; 0 < a < 1: vertical compression; multiply all y-coordinates by a",
                        example: "y = 3x²: parabola stretched vertically (narrower); y = 0.5x²: compressed (wider)"
                    },
                    horizontalStretchCompression: {
                        rule: "y = f(bx)",
                        effect: "b > 1: horizontal compression (narrower); 0 < b < 1: horizontal stretch (wider); divide all x-coordinates by b",
                        warning: "Counter-intuitive: larger b compresses; smaller b stretches",
                        example: "y = (2x)²: x-coordinates halved (compressed); y = (0.5x)²: x-coordinates doubled (stretched)"
                    },
                    reflectionXAxis: {
                        rule: "y = −f(x)",
                        effect: "Reflects graph over x-axis; all y-coordinates negated",
                        example: "y = −x²: parabola opens downward"
                    },
                    reflectionYAxis: {
                        rule: "y = f(−x)",
                        effect: "Reflects graph over y-axis; all x-coordinates negated",
                        example: "y = √(−x): domain is x ≤ 0; graph faces left"
                    }
                },
                orderOfTransformations: {
                    steps: [
                        "1. Horizontal shift (inside function, added to x)",
                        "2. Horizontal stretch/compression (coefficient of x inside)",
                        "3. Vertical stretch/compression (coefficient outside function)",
                        "4. Reflection in x-axis (negative outside) or y-axis (negative inside)",
                        "5. Vertical shift (added outside function)"
                    ],
                    generalFormMapping: {
                        formula: "y = af(b(x − h)) + k",
                        a: "Vertical stretch (|a|) and reflection over x-axis (a < 0)",
                        b: "Horizontal compression (|b|) and reflection over y-axis (b < 0)",
                        h: "Horizontal shift right by h",
                        k: "Vertical shift up by k"
                    },
                    example: {
                        function: "y = −2√(3(x − 1)) + 4",
                        parent: "f(x) = √x",
                        steps: [
                            "Horizontal shift right 1: √(x−1)",
                            "Horizontal compression by 3: √(3(x−1))",
                            "Vertical stretch by 2: 2√(3(x−1))",
                            "Reflect over x-axis: −2√(3(x−1))",
                            "Vertical shift up 4: −2√(3(x−1)) + 4"
                        ]
                    }
                },
                parentFunctions: [
                    { name: "Linear", formula: "f(x) = x", shape: "Straight line through origin, slope 1" },
                    { name: "Quadratic", formula: "f(x) = x²", shape: "Parabola, vertex at origin, opens up" },
                    { name: "Cubic", formula: "f(x) = x³", shape: "S-curve through origin" },
                    { name: "Square Root", formula: "f(x) = √x", shape: "Half-parabola, starts at origin, curves right" },
                    { name: "Absolute Value", formula: "f(x) = |x|", shape: "V-shape, vertex at origin" },
                    { name: "Reciprocal", formula: "f(x) = 1/x", shape: "Two-branch hyperbola, asymptotes x=0, y=0" },
                    { name: "Exponential", formula: "f(x) = eˣ", shape: "Increasing curve, HA at y=0" },
                    { name: "Logarithm", formula: "f(x) = ln(x)", shape: "Increasing curve, VA at x=0" }
                ],
                workedExamples: [
                    {
                        function: "y = −3|x + 2| − 1",
                        parent: "f(x) = |x|",
                        a: "−3 → vertical stretch by 3, reflect over x-axis",
                        h: "x + 2 = x − (−2) → shift left 2",
                        k: "−1 → shift down 1",
                        vertex: "(−2, −1)",
                        opens: "downward (∧-shape) due to negative a",
                        domain: "ℝ",
                        range: "(−∞, −1]"
                    }
                ]
            }
        };
    }

    initializeMathematicsPracticals() {
        this.mathematicsPracticals = {

            // ===================================================
            // PRACTICAL 1: FUNCTION MACHINES INVESTIGATION
            // ===================================================

            function_machines_investigation: {
                name: "Function Machines: Input-Output Relationships Discovery",
                relatedTopics: ['function_notation', 'domain_and_range', 'composite_functions'],
                category: 'graphing_functions',
                historicalBackground: {
                    origin: "Function concept formalised by Leonhard Euler (1707–1783)",
                    notation: "Euler introduced f(x) notation in 1734 in his Introductio in analysin infinitorum",
                    development: "Before Euler, 'function' was informal; his notation enabled rigorous development of calculus and analysis",
                    dirichlet: "Peter Gustav Lejeune Dirichlet (1805–1859) gave the modern definition: a rule assigning exactly one output to each input",
                    significance: "Function notation transformed mathematics from descriptions of curves to abstract mappings — enabling modern algebra, analysis, and computer science",
                    modernUse: "Every programming language implements functions directly; Euler's notation lives in every calculator, spreadsheet, and CAS worldwide"
                },
                practicalMathematics: {
                    title: "Function Machines: Discovering Input-Output Relationships",
                    hypothesis: "If a function is a deterministic rule assigning one output to each input, then knowing the rule enables both evaluation (forward) and solving (backward), and two function machines connected in sequence model composite functions",
                    purpose: "Use physical and algebraic 'function machines' to understand evaluation, domain restrictions, and composition of functions",
                    background: {
                        functionMachine: "A function machine takes an input, applies a rule, and produces an output — a physical model of f(x)",
                        evaluation: "Feeding a number into the machine gives f(a) — evaluation",
                        reversal: "Running the machine backwards (finding the input that gives a specified output) is solving f(x) = b",
                        chaining: "Connecting two machines output-to-input models composition: (f∘g)(x)"
                    },
                    materials: [
                        "Function machine cards (printed boxes with rule written inside: e.g., '×2 then +3')",
                        "Input/output recording sheets",
                        "Graph paper for plotting input-output pairs",
                        "Coloured counters or numbered cards as 'input tokens'",
                        "Optional: spreadsheet software (Excel/Google Sheets) to automate and extend"
                    ],
                    procedure: [
                        "PART A: Single Function Machine",
                        "1. Set up machine with rule: f(x) = 2x + 3",
                        "2. Feed inputs −3, −2, −1, 0, 1, 2, 3 through the machine",
                        "3. Record all (input, output) pairs in a table",
                        "4. Plot all pairs as points on a coordinate grid",
                        "5. Observe: what shape do the points form? Predict f(10), f(−5)",
                        "",
                        "PART B: Finding the Input from the Output (Solving)",
                        "6. Given output = 9, what was the input?",
                        "   Run machine backwards: 9 → subtract 3 → 6 → divide by 2 → 3",
                        "   Verify: f(3) = 2(3) + 3 = 9 ✓",
                        "7. Given output = 0: x = −3/2 — a non-integer; discuss",
                        "8. Practise with further outputs: 15, −7, 0.5",
                        "",
                        "PART C: Mystery Machine (Inverse Discovery)",
                        "9. Teacher provides input-output pairs without revealing the rule:",
                        "   {(1,4), (2,7), (3,10), (4,13)}",
                        "10. Students identify the rule: f(x) = 3x + 1",
                        "11. Verify with additional pairs; predict f(10) = 31",
                        "12. Discuss: could two different rules produce these four pairs? (Yes — but which is simplest?)",
                        "",
                        "PART D: Composite Machine — Two in a Row",
                        "13. Connect f(x) = 2x + 1 followed by g(x) = x²",
                        "14. Feed x = 3: first machine gives f(3) = 7; second gives g(7) = 49",
                        "15. Find algebraic rule: (g∘f)(x) = g(2x+1) = (2x+1)²",
                        "16. Verify: (2×3+1)² = 7² = 49 ✓",
                        "17. Reverse order: f∘g: g(3)=9 first; f(9)=19",
                        "18. Algebraic: (f∘g)(x) = f(x²) = 2x² + 1",
                        "19. Observe: (g∘f)(3) = 49 ≠ (f∘g)(3) = 19 → composition is NOT commutative",
                        "",
                        "PART E: Domain Investigation",
                        "20. Set up machine with rule: h(x) = √(x − 2)",
                        "21. Feed inputs: −1, 0, 1, 2, 3, 4, 5, 6",
                        "22. Record which inputs give a real output and which do not",
                        "23. Identify the domain: x ≥ 2",
                        "24. Discuss: what happens at x = 2 (boundary)? At x = 1.99?",
                        "25. Graph the valid input-output pairs and observe the shape"
                    ],
                    dataTable: [
                        ["Input x", "f(x) = 2x+3", "g(x) = x²", "(f∘g)(x)", "(g∘f)(x)"],
                        ["−2", "−1", "4", "2(4)+3=11", "(−1)²=1"],
                        ["−1", "1", "1", "2(1)+3=5", "(1)²=1"],
                        ["0", "3", "0", "2(0)+3=3", "(3)²=9"],
                        ["1", "5", "1", "2(1)+3=5", "(5)²=25"],
                        ["2", "7", "4", "2(4)+3=11", "(7)²=49"],
                        ["3", "9", "9", "2(9)+3=21", "(9)²=81"]
                    ],
                    observations: {
                        linearMachine: "Equal inputs produce equal outputs — deterministic and predictable",
                        reversal: "Running backward gives the inverse function; not always an integer",
                        nonCommutativity: "Swapping the two machines gives different results — order is critical",
                        domainEffect: "Machines with square roots refuse certain inputs — physical model of domain restriction"
                    },
                    conclusions: [
                        "A function is a deterministic rule: same input always gives same output",
                        "Evaluation is forward (input → output); solving is backward (output → input)",
                        "Composite functions model sequential machines: apply inner first, outer second",
                        "Composition is not commutative: f∘g and g∘f are generally different functions",
                        "Domain restrictions are natural: some machines cannot accept certain inputs (e.g., negative numbers under a square root)"
                    ],
                    extensions: [
                        "Design a pair of machines that ARE commutative — when is f∘g = g∘f?",
                        "Build a three-machine chain and find its algebraic composite rule",
                        "Use spreadsheet software to plot composite functions and observe their graphs",
                        "Investigate self-composing: (f∘f)(x) = f(f(x)) — the function applied to itself",
                        "Connect function machines to programming: write the function as a Python or pseudocode function"
                    ],
                    realWorldConnections: [
                        "Engineering: pipelines and assembly lines as chained processing stages",
                        "Computing: function composition as method chaining (e.g., data.filter().map().reduce())",
                        "Economics: applying a tax rate then a discount is a composite — order matters financially",
                        "Biology: sequential enzyme reactions in metabolism are biological function machines",
                        "Music: audio effects chains (EQ → compression → reverb) are composite audio functions"
                    ],
                    pedagogicalNotes: {
                        benefits: "Physical machine cards make the abstract input-output concept tangible and manipulable",
                        challenges: "Non-integer inputs and outputs may confuse learners expecting whole numbers; address explicitly",
                        assessment: "Ask: 'Can a machine give two different outputs for the same input?' — tests understanding of the function definition",
                        differentiation: "Support: provide pre-built tables to fill in. Extension: find two machines that commute (e.g., f(x)=2x, g(x)=3x → both give 6x)",
                        sequencing: "Introduce single machines before chaining; establish evaluation firmly before tackling composition"
                    }
                }
            },

            // ===================================================
            // PRACTICAL 2: DOMAIN AND RANGE GRAPHICAL INVESTIGATION
            // ===================================================

            domain_range_graphical_investigation: {
                name: "Domain & Range: Graphical and Algebraic Discovery",
                relatedTopics: ['domain_and_range', 'function_notation', 'asymptotes'],
                category: 'graphing_functions',
                historicalBackground: {
                    mathematician: "Georg Cantor (1845–1918) and Richard Dedekind (1831–1916)",
                    contribution: "Formalized the concept of sets and real numbers, providing the rigorous framework for domain and range",
                    intervalNotation: "Interval notation standardized in the early 20th century as set theory was absorbed into mainstream mathematics",
                    significance: "Precise domain specification became essential in analysis to avoid contradictions (e.g., √(−1) in ℝ) and to state theorems correctly",
                    modernRelevance: "Programming languages enforce domain restrictions through type systems and error handling — a direct computational implementation"
                },
                practicalMathematics: {
                    title: "Mapping the Boundaries: Domain and Range Through Graphical and Algebraic Investigation",
                    hypothesis: "The domain and range of a function can be determined graphically by projecting the curve onto the axes, and algebraically by identifying and solving domain restriction inequalities",
                    purpose: "Develop multiple methods for finding domain and range; connect graphical projections to algebraic solutions; understand why restrictions arise",
                    materials: [
                        "Graph paper (large, with clearly labelled axes)",
                        "GeoGebra or Desmos access (graphing technology)",
                        "Function cards (printed expressions)",
                        "Coloured pencils (one colour per function)",
                        "Ruler for projecting onto axes",
                        "Domain and range recording worksheet"
                    ],
                    procedure: [
                        "PART A: Graphical Method — Projection onto Axes",
                        "1. Graph each of the following on separate grids: f(x) = x², f(x) = √x, f(x) = 1/x, f(x) = |x|",
                        "2. For each graph:",
                        "   • Draw horizontal projection lines from the leftmost and rightmost points of the graph to the x-axis → this gives the domain",
                        "   • Draw vertical projection lines from the lowest and highest points of the graph to the y-axis → this gives the range",
                        "3. Record domain and range in interval notation for each function",
                        "",
                        "PART B: Algebraic Method — Restriction Analysis",
                        "4. For each function, identify which type of restriction applies:",
                        "   • Square root: radicand ≥ 0",
                        "   • Denominator: denominator ≠ 0",
                        "   • Logarithm: argument > 0",
                        "   • None: polynomial — domain is ℝ",
                        "",
                        "5. Apply restriction analysis to each function:",
                        "   f(x) = √(5 − x): 5 − x ≥ 0 → x ≤ 5 → Domain: (−∞, 5]",
                        "   f(x) = 3/(x² − 4): x² − 4 ≠ 0 → x ≠ ±2 → Domain: ℝ\\{−2, 2}",
                        "   f(x) = log₂(x + 3): x + 3 > 0 → x > −3 → Domain: (−3, ∞)",
                        "   f(x) = √(x−1)/(x−4): x ≥ 1 AND x ≠ 4 → Domain: [1,4)∪(4,∞)",
                        "",
                        "6. Verify algebraic domains by graphing on GeoGebra and comparing projections",
                        "",
                        "PART C: Finding Range Algebraically",
                        "7. For f(x) = x² − 4: minimum value at vertex (0, −4) → Range: [−4, ∞)",
                        "8. For f(x) = 1/(x+2): set y = 1/(x+2); solve x = 1/y − 2; defined for y ≠ 0 → Range: ℝ\\{0}",
                        "9. For f(x) = √(9 − x²): outputs between 0 and 3 → Range: [0, 3]",
                        "",
                        "PART D: Technology Investigation",
                        "10. Use GeoGebra: graph f(x) = (x² − 9)/(x − 3)",
                        "11. Observe: simplifies to x + 3 with a hole at x = 3",
                        "12. Domain: ℝ\\{3}; Range: ℝ\\{6} (the missing y-value at the hole)",
                        "13. Zoom in near x = 3 — can you see the hole? What does the table of values show?",
                        "",
                        "PART E: Connecting Domain and Range to Graph Shape",
                        "14. Fill in the summary table for 8 different functions",
                        "15. Identify patterns: which function families always have domain ℝ? Which always have restricted domains?"
                    ],
                    dataTable: [
                        ["Function", "Restriction Type", "Domain (Interval)", "Range (Interval)", "Graphical Verification"],
                        ["f(x) = x²", "None", "ℝ = (−∞,∞)", "[0,∞)", "Parabola, all x, y ≥ 0 ✓"],
                        ["f(x) = √x", "Radicand ≥ 0", "[0,∞)", "[0,∞)", "Curve starts at origin ✓"],
                        ["f(x) = 1/x", "Denom ≠ 0", "ℝ\\{0}", "ℝ\\{0}", "Hyperbola, no y=0 ✓"],
                        ["f(x) = |x|", "None", "ℝ", "[0,∞)", "V-shape, all x, y ≥ 0 ✓"],
                        ["f(x) = log(x)", "Arg > 0", "(0,∞)", "ℝ", "Curve, VA at x=0 ✓"],
                        ["f(x) = eˣ", "None", "ℝ", "(0,∞)", "Exponential, HA at y=0 ✓"],
                        ["f(x) = √(4−x²)", "4−x²≥0", "[−2,2]", "[0,2]", "Semicircle ✓"],
                        ["f(x) = 1/(x²+1)", "None", "ℝ", "(0,1]", "Bell, max at (0,1) ✓"]
                    ],
                    conclusions: [
                        "Domain and range can always be determined graphically by projecting onto the axes",
                        "Algebraic methods reveal the reason for restrictions: radicands, denominators, logarithm arguments",
                        "Square root and even-power functions always produce non-negative outputs — this constrains the range",
                        "Reciprocal functions have gaps in both domain (at x-values making denominator zero) and range (the horizontal asymptote value is excluded)",
                        "Technology confirms algebraic results but does not replace the reasoning — holes may be invisible on a graph without algebraic analysis"
                    ]
                }
            },

            // ===================================================
            // PRACTICAL 3: ASYMPTOTE INVESTIGATION — RATIONAL FUNCTIONS
            // ===================================================

            asymptote_investigation: {
                name: "Asymptote Investigation: Rational Function Behaviour",
                relatedTopics: ['asymptotes', 'domain_and_range', 'intercepts'],
                category: 'graphing_functions',
                historicalBackground: {
                    mathematician: "Johann Bernoulli (1667–1748) and Guillaume de l'Hôpital (1661–1722)",
                    contribution: "Early systematic study of hyperbolas and rational functions revealed asymptotic behaviour; L'Hôpital's rule addresses 0/0 and ∞/∞ forms",
                    development: "Asymptotes were first described geometrically for conic sections; algebraic characterization came with the development of limits in the 17th–18th centuries",
                    significance: "Asymptotes are the skeleton of a rational function's graph — knowing them determines the graph's global behaviour before any points are plotted",
                    modernRelevance: "In signal processing, system poles (vertical asymptotes of transfer functions) determine system stability; engineers routinely analyse asymptotic behaviour"
                },
                practicalMathematics: {
                    title: "Asymptotes: Where Rational Functions Go to Infinity",
                    hypothesis: "The asymptotes of a rational function are completely determined by the algebraic structure of the numerator and denominator — specifically their degrees, leading coefficients, and zeros",
                    purpose: "Develop systematic procedures for identifying vertical, horizontal, and oblique asymptotes; verify algebraically and graphically; understand their role in sketching",
                    materials: [
                        "Graph paper",
                        "GeoGebra or Desmos (graphing technology)",
                        "Asymptote investigation worksheet",
                        "Table of values calculator or spreadsheet",
                        "Coloured pencils (separate colours for VA, HA, OA)"
                    ],
                    procedure: [
                        "PART A: Vertical Asymptotes",
                        "1. Investigate f(x) = 1/(x−2)",
                        "   Build table: x = 1.9, 1.99, 1.999, 2.001, 2.01, 2.1",
                        "   Record f(x) values — observe blow-up as x → 2",
                        "   Algebraically: x − 2 = 0 → x = 2 → VA: x = 2",
                        "",
                        "2. Investigate f(x) = (x+1)/((x−1)(x+3))",
                        "   Denominator zeros: x = 1, x = −3",
                        "   Verify numerator ≠ 0 at these values → both are VAs",
                        "   Sketch: two VAs divide the plane into three regions",
                        "",
                        "3. Investigate f(x) = (x² − 4)/(x − 2) = (x+2)(x−2)/(x−2) = x+2 for x ≠ 2",
                        "   Denominator zero at x = 2 BUT numerator also zero there → HOLE, not VA",
                        "   Hole at (2, 4)",
                        "",
                        "PART B: Horizontal Asymptotes",
                        "4. Compare three functions as x → ±∞:",
                        "   f₁(x) = 3/(x+1): degree 0 < degree 1 → HA: y = 0",
                        "   f₂(x) = (2x−1)/(3x+4): degrees equal → HA: y = 2/3",
                        "   f₃(x) = (x²+1)/(x−2): degree 2 > degree 1 → No HA",
                        "",
                        "5. Build value tables for x = 10, 100, 1000, 10000:",
                        "   Observe f₁ → 0, f₂ → 2/3, f₃ → ∞ → confirm the rules",
                        "",
                        "PART C: Oblique Asymptotes",
                        "6. Perform polynomial long division on f(x) = (x² + 3x − 2)/(x + 1):",
                        "   Divide: x² + 3x − 2 ÷ (x + 1) → quotient: x + 2, remainder: −4",
                        "   f(x) = x + 2 − 4/(x+1)",
                        "   As x → ±∞: −4/(x+1) → 0, so f(x) → x + 2",
                        "   OA: y = x + 2",
                        "",
                        "7. Verify: plot f(x) and y = x+2 on same axes; observe convergence at extremes",
                        "",
                        "PART D: Complete Rational Function Sketch",
                        "8. Sketch f(x) = (2x² − 8)/(x² − x − 6) completely:",
                        "   Factor: 2(x+2)(x−2)/((x−3)(x+2))",
                        "   Cancel: 2(x−2)/(x−3) with hole at x = −2",
                        "   VA: x = 3; HA: y = 2; Hole: (−2, 8/5)",
                        "   x-intercept: 2(x−2)=0 → x=2 → (2,0)",
                        "   y-intercept: f(0) = 2(−2)/(−3) = 4/3 → (0, 4/3)",
                        "   Sketch using all features as a framework"
                    ],
                    dataTable: [
                        ["Function", "VA (denom=0)", "HA (degree compare)", "OA (long div)", "Holes"],
                        ["1/(x−2)", "x=2", "y=0 (deg 0 < 1)", "None", "None"],
                        ["(2x+1)/(x−3)", "x=3", "y=2 (deg equal)", "None", "None"],
                        ["x²/(x+1)", "x=−1", "None (deg 2 > 1)", "y=x−1", "None"],
                        ["(x²−9)/(x−3)", "None", "None", "y=x+3", "Hole at (3,6)"],
                        ["(x²−x−6)/(x²+x−2)", "x=1,x=−2", "y=1 (deg equal)", "None", "None"]
                    ],
                    conclusions: [
                        "Vertical asymptotes arise at zeros of the denominator that are NOT zeros of the numerator",
                        "Zeros of both numerator and denominator create removable discontinuities (holes), not asymptotes",
                        "Horizontal asymptotes depend only on the degrees and leading coefficients of numerator and denominator",
                        "Oblique asymptotes arise when degree of numerator exceeds degree of denominator by exactly 1; found by long division",
                        "Asymptotes form a structural skeleton; plotting just a few additional points between and around them completes the sketch"
                    ]
                }
            },

            // ===================================================
            // PRACTICAL 4: TRANSFORMATIONS INVESTIGATION
            // ===================================================

            transformations_investigation: {
                name: "Transformations of Graphs: Discovery Through Technology",
                relatedTopics: ['transformations', 'function_notation', 'domain_and_range', 'piecewise_functions'],
                category: 'graphing_functions',
                historicalBackground: {
                    mathematician: "René Descartes (1596–1650) and Pierre de Fermat (1607–1665)",
                    contribution: "Invented coordinate geometry, making the connection between equations and graphs possible; transformations of graphs follow directly from operations on Cartesian equations",
                    development: "The systematic study of transformations as geometric operations was formalised alongside group theory in the 19th century",
                    klein: "Felix Klein's Erlangen Programme (1872) classified geometries by their transformation groups — transformations are at the heart of modern geometry",
                    significance: "Every function family is generated from a single parent function by transformations — the entire landscape of elementary functions can be understood through just four operations",
                    modernUse: "Computer graphics (translation, scaling, reflection of shapes and textures) implement exactly these transformations in 2D and 3D"
                },
                practicalMathematics: {
                    title: "Transformations of Graphs: Discovering the Rules Through Systematic Exploration",
                    hypothesis: "Every transformation of a graph (translation, reflection, stretch, compression) corresponds to a specific algebraic modification of the function's equation, and the vertical/horizontal distinction explains why inside and outside modifications have opposite effects",
                    purpose: "Systematically discover the rules for all graph transformations by comparing parent functions to modified versions; understand the inside/outside principle; apply to sketch unfamiliar functions",
                    materials: [
                        "GeoGebra or Desmos (essential for dynamic sliders)",
                        "Large graph paper for hand sketches",
                        "Transformation investigation worksheet with blank axes",
                        "Coloured pencils (one for parent, different colour for each transformation)",
                        "Ruler and set square"
                    ],
                    procedure: [
                        "PART A: Vertical Translations — Adding Outside",
                        "1. Graph f(x) = x² on Desmos",
                        "2. Add slider k; graph g(x) = x² + k",
                        "3. Vary k from −5 to 5; observe and record:",
                        "   k = 3: graph shifts UP 3 units",
                        "   k = −2: graph shifts DOWN 2 units",
                        "   k = 0: original graph",
                        "4. Rule: f(x) + k translates the graph k units vertically (up if k>0, down if k<0)",
                        "",
                        "PART B: Horizontal Translations — Adding Inside",
                        "5. Graph g(x) = (x − h)² with slider h",
                        "6. Vary h from −5 to 5; observe carefully:",
                        "   h = 3: graph shifts RIGHT 3 (NOT left!)",
                        "   h = −2: graph shifts LEFT 2 (NOT right!)",
                        "7. KEY INSIGHT: Adding a positive h inside moves the graph RIGHT",
                        "   Explanation: f(x−3)=0 when x−3=0, i.e., x=3 — the zero shifts right",
                        "8. Rule: f(x−h) translates RIGHT by h; f(x+h) translates LEFT by h",
                        "",
                        "PART C: Vertical Stretch and Compression — Multiplying Outside",
                        "9. Graph g(x) = a·x² with slider a",
                        "10. Observe: a=2 → graph is taller/narrower (stretched); a=0.5 → shorter/wider (compressed)",
                        "11. Rule: af(x) stretches vertically by factor a (a>1) or compresses (0<a<1)",
                        "12. Try a=−1: graph reflects over x-axis",
                        "13. Rule: −f(x) reflects over x-axis",
                        "",
                        "PART D: Horizontal Stretch and Compression — Multiplying Inside",
                        "14. Graph g(x) = (bx)² with slider b",
                        "15. Observe: b=2 → graph is NARROWER (compressed); b=0.5 → WIDER (stretched)",
                        "16. KEY INSIGHT: Larger b COMPRESSES horizontally (counter-intuitive!)",
                        "   Explanation: f(2x) achieves the same output at half the x-value → compressed",
                        "17. Rule: f(bx) compresses horizontally by factor 1/b if b>1; stretches if 0<b<1",
                        "18. Try b=−1: graph g(x) = (−x)² → reflects over y-axis (same for x² but visible for √x)",
                        "",
                        "PART E: Combining Transformations",
                        "19. Graph y = 2|x−3| + 1: identify a=2, h=3, k=1",
                        "20. Step-by-step sketch:",
                        "    Start: |x| → shift right 3: |x−3| → stretch ×2: 2|x−3| → shift up 1: 2|x−3|+1",
                        "21. Vertex of |x| is (0,0); after transformations: (3, 1)",
                        "22. Confirm with Desmos",
                        "",
                        "PART F: Summary Chart Construction",
                        "23. Complete the transformation table for y = af(b(x−h))+k",
                        "24. Apply to three parent functions: x², √x, 1/x",
                        "25. Given the transformed function, identify ALL transformation parameters",
                        "   Example: y = −3√(2x+4) − 5: factor 2x+4 = 2(x+2); a=−3, b=2, h=−2, k=−5"
                    ],
                    dataTable: [
                        ["Transformation", "Notation", "Effect on Graph", "Effect on Coordinates", "Example"],
                        ["Vertical shift up k", "f(x)+k", "Moves up k units", "(x,y) → (x, y+k)", "x²+3: vertex (0,0)→(0,3)"],
                        ["Horizontal shift right h", "f(x−h)", "Moves right h units", "(x,y) → (x+h, y)", "(x−2)²: vertex (0,0)→(2,0)"],
                        ["Vertical stretch ×a", "a·f(x)", "Taller/narrower (a>1)", "(x,y) → (x, ay)", "3x²: y-values tripled"],
                        ["Vertical compression ×a", "a·f(x)", "Shorter/wider (0<a<1)", "(x,y) → (x, ay)", "0.5x²: y-values halved"],
                        ["Horizontal compression ×b", "f(bx)", "Narrower (b>1)", "(x,y) → (x/b, y)", "f(2x): x-values halved"],
                        ["Reflect over x-axis", "−f(x)", "Flips vertically", "(x,y) → (x,−y)", "−x²: opens down"],
                        ["Reflect over y-axis", "f(−x)", "Flips horizontally", "(x,y) → (−x,y)", "√(−x): faces left"]
                    ],
                    conclusions: [
                        "Transformations outside the function (affecting output) act as expected: +k up, ×a stretches",
                        "Transformations inside the function (affecting input) act opposite to expectation: f(x−h) shifts RIGHT",
                        "The inside/outside principle provides a unified explanation for all counterintuitive results",
                        "Any function of the form y = af(b(x−h))+k is the parent function with four systematic transformations",
                        "Order of transformations matters: apply shifts (inside and outside) after stretches/compressions",
                        "Dynamic technology (GeoGebra sliders) makes the rules discoverable empirically before they are proved formally"
                    ],
                    extensions: [
                        "Investigate how transformations affect domain and range systematically",
                        "Apply transformations to sketch a complete family (e.g., all parabolas y = a(x−h)²+k)",
                        "Connect to vertex form of quadratic and its graphical meaning",
                        "Investigate transformations of trigonometric functions: amplitude, period, phase shift",
                        "Connect horizontal compression by b to the period of sin(bx): period = 2π/b"
                    ],
                    realWorldConnections: [
                        "Computer graphics: every translation, scaling, and reflection of images uses exactly these transformation rules",
                        "Sound engineering: shifting and scaling audio waveforms; phase shift is a horizontal translation",
                        "Architecture: scaling building designs while preserving proportions",
                        "Physics: shifting time-zero reference, scaling axes in experimental data",
                        "Animation: keyframe transformations in film and game development"
                    ]
                }
            },

            // ===================================================
            // PRACTICAL 5: INVERSE FUNCTIONS — REFLECTION DISCOVERY
            // ===================================================

            inverse_functions_discovery: {
                name: "Inverse Functions: Reflection and Algebraic Reversal Discovery",
                relatedTopics: ['inverse_functions', 'composite_functions', 'domain_and_range', 'transformations'],
                category: 'graphing_functions',
                historicalBackground: {
                    development: "The concept of inverse functions grew with the development of logarithms by John Napier (1550–1617) as the inverse of exponentiation",
                    napier: "Napier's logarithms (1614) were revolutionary precisely because they inverted the most computationally expensive operation of the time: exponentiation",
                    trigInverse: "Inverse trigonometric functions were studied extensively by Euler and Lagrange in the 18th century",
                    significance: "Every 'solve for x' operation implicitly applies an inverse function — solving 2x+3=9 applies the inverse of f(x)=2x+3",
                    modernRelevance: "Cryptographic algorithms rely on the difficulty of inverting certain functions — the security of RSA encryption depends on the fact that large integer factorization is computationally hard to invert"
                },
                practicalMathematics: {
                    title: "Inverse Functions: Discovering the Reflection Property and Algebraic Reversal",
                    hypothesis: "The inverse function f⁻¹ reverses the input-output relationship of f, and its graph is the geometric reflection of f over the line y = x",
                    purpose: "Discover the reflection property graphically; derive inverse functions algebraically; verify using composition; understand when inverses are and are not functions",
                    materials: [
                        "Graph paper (with y = x line pre-drawn)",
                        "Transparent plastic sheet or tracing paper",
                        "Mirror or reflective card",
                        "GeoGebra for dynamic verification",
                        "Inverse function investigation worksheet"
                    ],
                    procedure: [
                        "PART A: Graphical Discovery — The Reflection Property",
                        "1. Plot f(x) = 2x + 1 for x ∈ [−3, 3] on graph paper",
                        "2. Also draw the line y = x",
                        "3. Place a mirror along y = x; observe the reflection of the curve",
                        "4. The reflection IS the inverse function graph",
                        "5. Read off several (x, y) pairs from f: (1,3), (2,5), (3,7)",
                        "6. Swap each pair: (3,1), (5,2), (7,3) — these lie on f⁻¹",
                        "7. Verify: the swapped points satisfy y = (x−1)/2",
                        "",
                        "PART B: Algebraic Method for Finding Inverses",
                        "8. f(x) = 3x − 4:",
                        "   y = 3x − 4 → x = 3y − 4 → y = (x+4)/3",
                        "   f⁻¹(x) = (x+4)/3",
                        "",
                        "9. f(x) = x³ + 2:",
                        "   y = x³ + 2 → x = y³ + 2 → y³ = x − 2 → y = ∛(x−2)",
                        "   f⁻¹(x) = ∛(x−2)",
                        "",
                        "10. f(x) = (2x+1)/(x−3):",
                        "    y = (2x+1)/(x−3) → y(x−3) = 2x+1 → yx−3y = 2x+1",
                        "    yx − 2x = 3y+1 → x(y−2) = 3y+1 → x = (3y+1)/(y−2)",
                        "    f⁻¹(x) = (3x+1)/(x−2), domain x ≠ 2",
                        "",
                        "PART C: Verification by Composition",
                        "11. Verify f(f⁻¹(x)) = x and f⁻¹(f(x)) = x for each inverse found above",
                        "   For f⁻¹(x) = (x+4)/3: f(f⁻¹(x)) = 3·(x+4)/3 − 4 = x+4−4 = x ✓",
                        "",
                        "PART D: Horizontal Line Test",
                        "12. Graph each function below and apply the horizontal line test:",
                        "    f(x) = x² : horizontal line y=4 crosses at x=±2 → NOT one-to-one → no inverse over ℝ",
                        "    f(x) = x³ : any horizontal line crosses exactly once → one-to-one → has inverse",
                        "    f(x) = sin(x) : fails HLT over ℝ → restrict to [−π/2, π/2] for arcsin",
                        "",
                        "PART E: Domain Restriction to Create Invertible Functions",
                        "13. f(x) = x², x ≥ 0 → f⁻¹(x) = √x, domain [0,∞)",
                        "14. f(x) = (x−2)², x ≥ 2 → f⁻¹(x) = √x + 2, domain [0,∞)",
                        "15. Graph both f and f⁻¹ and verify reflection symmetry"
                    ],
                    dataTable: [
                        ["Function f(x)", "One-to-One?", "Inverse f⁻¹(x)", "Domain of f⁻¹", "Verify f(f⁻¹(x))=x"],
                        ["2x+1", "Yes (linear)", "(x−1)/2", "ℝ", "2·(x−1)/2+1=x ✓"],
                        ["x³", "Yes", "∛x", "ℝ", "(∛x)³=x ✓"],
                        ["x², x≥0", "Yes (restricted)", "√x", "[0,∞)", "(√x)²=x ✓"],
                        ["eˣ", "Yes", "ln(x)", "(0,∞)", "e^(ln x)=x ✓"],
                        ["(x+1)/(x−2)", "Yes", "(2x+1)/(x−1)", "ℝ\\{1}", "Verify by substitution ✓"]
                    ],
                    conclusions: [
                        "The inverse function f⁻¹ swaps every (a, b) pair of f to (b, a) — reflected over y = x",
                        "Algebraically, finding f⁻¹ means swapping x and y then solving for y",
                        "The verification identity f(f⁻¹(x)) = x confirms the inverse relationship",
                        "Not all functions have inverses — the horizontal line test identifies functions requiring domain restriction",
                        "Domain restriction is not arbitrary — it must be chosen so the restricted function passes the HLT",
                        "The domain of f⁻¹ equals the range of f, and vice versa — always check this symmetry"
                    ]
                }
            },

            // ===================================================
            // PRACTICAL 6: PIECEWISE FUNCTIONS — REAL-WORLD MODELLING
            // ===================================================

            piecewise_real_world_modelling: {
                name: "Piecewise Functions: Modelling Real-World Threshold Situations",
                relatedTopics: ['piecewise_functions', 'domain_and_range', 'intercepts'],
                category: 'graphing_functions',
                historicalBackground: {
                    development: "Piecewise-defined functions have been used since ancient times in commerce (tiered pricing), law (tax brackets), and engineering",
                    mathematicalFormalisation: "Formally defined within the rigorous function framework of the 19th century; Heaviside's step function (1890s) is a canonical piecewise function used in electrical engineering",
                    heaviside: "Oliver Heaviside (1850–1925) developed operational calculus using the step function H(t) to model switch-on events in electrical circuits",
                    dirac: "Paul Dirac (1902–1984) introduced the delta function δ(t), interpretable as the derivative of Heaviside's step — foundational in quantum mechanics and signal processing",
                    modernUse: "Every digital computer implements piecewise logic (if/else branches); ReLU activation functions in neural networks are piecewise linear"
                },
                practicalMathematics: {
                    title: "Piecewise Functions: Real-World Modelling of Threshold-Based Rules",
                    hypothesis: "Many real-world pricing, physical, and biological systems follow different rules in different input ranges; these can be modelled precisely as piecewise functions, and continuity at breakpoints reflects smooth real-world transitions",
                    purpose: "Model real-world threshold-based systems as piecewise functions; evaluate, graph, and check continuity; connect algebraic breakpoints to real-world threshold values",
                    materials: [
                        "Real-world data sources: energy tariff schedules, tax tables, parking rate cards",
                        "Graph paper",
                        "Piecewise function modelling worksheet",
                        "GeoGebra or Desmos for graphing and continuity visualization",
                        "Coloured pencils (different colour per piece)"
                    ],
                    procedure: [
                        "PART A: Understanding Piecewise Notation",
                        "1. Write out piecewise notation clearly:",
                        "   f(x) = { 2x + 1, x < 1",
                        "           { 5,      x = 1",
                        "           { −x + 7, x > 1 }",
                        "2. Evaluate: f(0) = 1; f(1) = 5; f(3) = 4; f(−2) = −3",
                        "3. Graph each piece on its interval; use ○ for excluded, ● for included endpoints",
                        "4. Examine x = 1: left piece gives f(1⁻) = 3; assigned value f(1) = 5; right piece gives f(1⁺) = 6",
                        "   → Two jump discontinuities; function is defined but not continuous at x = 1",
                        "",
                        "PART B: Real-World Model — Energy Tariff",
                        "5. An electricity tariff charges:",
                        "   0–100 kWh: 15p per unit",
                        "   100–500 kWh: 12p per unit",
                        "   500+ kWh: 10p per unit",
                        "   Write as a piecewise function C(x) for total cost in pence",
                        "6. C(x) = { 15x, 0 ≤ x ≤ 100",
                        "           { 1500 + 12(x−100), 100 < x ≤ 500",
                        "           { 1500 + 4800 + 10(x−500), x > 500 }",
                        "   Simplify: C(x) = { 15x; 1200 + 12x; 800 + 10x }",
                        "7. Calculate: C(80), C(200), C(600)",
                        "8. Check continuity at x = 100: 15(100) = 1500; 1200+12(100) = 2400 → JUMP — why? (Different rate, not cumulative)",
                        "   Note: in real tariffs, often structured cumulatively to ensure continuity — redesign for continuity",
                        "",
                        "PART C: Absolute Value as Piecewise",
                        "9. Write |2x − 4| as a piecewise function:",
                        "   2x−4 ≥ 0 when x ≥ 2 → |2x−4| = 2x−4 for x ≥ 2; −(2x−4) = −2x+4 for x < 2",
                        "10. Graph: V-shape with vertex at x=2, y=0",
                        "11. Solve |2x−4| = 6: two cases: 2x−4=6 → x=5; 2x−4=−6 → x=−1",
                        "",
                        "PART D: Designing Continuous Piecewise Functions",
                        "12. Design a piecewise function that is continuous everywhere:",
                        "    f(x) = { x² + 1, x < 2",
                        "            { ax + b, x ≥ 2 }",
                        "    For continuity at x=2: x²+1 at x=2 gives 5; need a(2)+b = 5 → one constraint",
                        "    Additional constraint: equal slopes at x=2 (differentiability): 2x at x=2 = 4; a=4 → 4(2)+b=5 → b=−3",
                        "    f(x) = { x²+1, x<2; 4x−3, x≥2 } — continuous AND differentiable at x=2"
                    ],
                    dataTable: [
                        ["Real-World System", "Input Variable", "Breakpoints", "Piecewise Rule", "Continuity at Breakpoints"],
                        ["Income tax", "Income x", "£12,570; £50,270", "20%; 40%; 45% bands", "Continuous (cumulative structure)"],
                        ["Parking charges", "Time t (hours)", "1h; 3h", "£2; £1.50/hr; £1/hr", "Continuous"],
                        ["Speed camera fines", "Speed s (mph)", "30; 50; 70", "£100; £200; £300", "Discontinuous (jumps)"],
                        ["Mobile data rate", "Data d (GB)", "1; 5; 10", "Full speed; half; throttled", "Discontinuous"],
                        ["Body temperature", "Temp T (°C)", "36; 37.5; 39", "Hypothermic; normal; fever; danger", "Continuous in reality"]
                    ],
                    conclusions: [
                        "Piecewise functions precisely model any rule that changes behaviour at threshold values",
                        "The notation specifies both the rule AND the domain interval — both are essential",
                        "Continuity at breakpoints is a meaningful mathematical property: it corresponds to smooth transitions in real-world systems",
                        "Absolute value is a piecewise function — understanding this makes solving absolute value equations transparent",
                        "Designing continuous piecewise functions requires matching values (and often slopes) at breakpoints",
                        "Jump discontinuities model sudden rule changes (price jumps, penalty thresholds) that are intentionally abrupt"
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

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            function_notation: {
                'Notation Confusion': [
                    'Reading f(x) as "f times x" — f(x) means "f applied to x", not a product',
                    'Confusing f⁻¹(x) (inverse function) with 1/f(x) (reciprocal) — the −1 exponent means inverse, not power',
                    'Writing f(a+b) = f(a) + f(b) — this only holds for linear functions (the "freshman dream" for functions)',
                    'Writing f(2x) = 2f(x) — only true for linear functions through the origin'
                ],
                'Evaluation Errors': [
                    'Forgetting to bracket negative inputs: f(−2) ≠ −f(2) in general',
                    'Substituting into only part of the expression and leaving x in others',
                    'Confusing f(x²) with (f(x))² — squaring the input vs squaring the output'
                ]
            },

            domain_and_range: {
                'Domain Identification': [
                    'Forgetting to identify ALL restrictions when multiple apply (e.g., square root AND denominator)',
                    'Including endpoints incorrectly: √(x−3) has domain x ≥ 3 (closed), but 1/√(x−3) requires x > 3 (open)',
                    'Assuming domain is always ℝ for any algebraic expression without checking',
                    'Writing domain as a range of y-values instead of x-values — domain is always the input set'
                ],
                'Range Identification': [
                    'Confusing domain with range — domain is x-values, range is y-values',
                    'Stating the range of f(x) = x² as ℝ instead of [0, ∞)',
                    'Forgetting that a horizontal asymptote value may or may not be in the range',
                    'Not considering the vertex of a quadratic when determining range'
                ],
                'Notation Errors': [
                    'Mixing up open and closed bracket notation: [a, b) vs (a, b]',
                    'Writing x ≥ 3 AND x ≠ 5 as [3, ∞) instead of [3, 5) ∪ (5, ∞)',
                    'Using square brackets for infinity: [3, ∞] is incorrect — infinity always uses a round bracket'
                ]
            },

            intercepts: {
                'Finding Intercepts': [
                    'Finding x-intercepts by substituting y=0 into the WRONG variable — must set f(x) = 0 and solve for x',
                    'Confusing x-intercepts with y-intercepts: y-intercept requires x=0, x-intercept requires y=0',
                    'Stopping after finding one x-intercept for a polynomial without checking for others'
                ],
                'Multiplicity': [
                    'Assuming all roots cause the graph to cross the axis — even multiplicity roots cause bouncing, not crossing',
                    'Not identifying multiplicity from factored form: (x−3)² means multiplicity 2',
                    'Incorrectly counting the total number of roots — a degree-n polynomial has exactly n roots (with multiplicity, over ℂ)'
                ]
            },

            asymptotes: {
                'Vertical Asymptotes': [
                    'Identifying every zero of the denominator as a vertical asymptote without checking whether the numerator is also zero at that point (which would be a hole)',
                    'Drawing the graph touching the asymptote — asymptotes are approached but never reached (usually)',
                    'Confusing vertical asymptotes with x-intercepts'
                ],
                'Horizontal Asymptotes': [
                    'Applying the wrong degree-comparison rule: using leading coefficients when degrees differ',
                    'Assuming horizontal asymptotes cannot be crossed — graphs can cross HAs in the middle of their domain',
                    'Confusing horizontal asymptote y = 0 (when degree of numerator < denominator) with "no horizontal asymptote"',
                    'Forgetting to identify an oblique asymptote when degree of numerator = degree of denominator + 1'
                ],
                'Oblique Asymptotes': [
                    'Attempting to find oblique asymptotes when degrees are equal or numerator has lower degree',
                    'Performing polynomial long division incorrectly and obtaining wrong oblique asymptote',
                    'Including the remainder in the oblique asymptote equation (remainder → 0 as x → ±∞ and is discarded)'
                ]
            },

            piecewise_functions: {
                'Evaluation': [
                    'Using the wrong piece when evaluating at a boundary point — carefully check whether endpoints are included (≤ vs <)',
                    'Applying all pieces simultaneously rather than selecting the appropriate one',
                    'Forgetting that each piece only applies over its stated interval'
                ],
                'Graphing': [
                    'Forgetting to use open circles at excluded endpoints and filled circles at included endpoints',
                    'Drawing all pieces as continuous even when there are jump discontinuities',
                    'Graphing the pieces over the full domain instead of their restricted intervals'
                ],
                'Continuity': [
                    'Assuming piecewise functions are always continuous — they may have jump discontinuities',
                    'Not checking continuity by evaluating from both sides at each breakpoint',
                    'Confusing continuity (values match) with differentiability (slopes match)'
                ]
            },

            composite_functions: {
                'Order of Composition': [
                    'Applying the functions in the wrong order: (f∘g)(x) means g first, then f — NOT f first',
                    'Assuming composition is commutative: f∘g = g∘f is rarely true',
                    'Confusing (f∘g)(x) with f(x) · g(x) (product of functions)'
                ],
                'Domain of Composite': [
                    'Using only the domain of the outer function rather than intersecting with restrictions from the inner function',
                    'Ignoring that g(x) must lie within the domain of f for the composition to be defined'
                ],
                'Algebraic Errors': [
                    'Substituting only the coefficient and ignoring the full expression: f(g(x)) ≠ f(coefficient of g) · x',
                    'Not fully simplifying after substitution — leaving g(x) as a placeholder rather than substituting the full expression'
                ]
            },

            inverse_functions: {
                'Existence': [
                    'Assuming every function has an inverse — only one-to-one functions have inverse functions',
                    'Forgetting to apply the horizontal line test before attempting to find an inverse',
                    'Stating that f⁻¹(x) = 1/f(x) — the −1 notation means inverse, not reciprocal'
                ],
                'Finding Inverses': [
                    'Swapping only x or only y, not both simultaneously',
                    'Forgetting to restrict the domain when the original function fails the HLT',
                    'Solving for x instead of solving for y after swapping — must solve for the new y'
                ],
                'Verification': [
                    'Only verifying f(f⁻¹(x)) = x but not f⁻¹(f(x)) = x — both must hold',
                    'Arithmetic errors when substituting to verify; always expand fully',
                    'Not stating the domain of f⁻¹, which must equal the range of f'
                ]
            },

            transformations: {
                'Horizontal vs Vertical': [
                    'Applying inside changes (to x) with the same direction as outside changes: f(x−3) shifts LEFT 3 is WRONG — it shifts RIGHT 3',
                    'Forgetting that horizontal transformations act on the x-coordinate and work "opposite" to their sign',
                    'Confusing a horizontal stretch (b<1) with a vertical stretch'
                ],
                'Stretch vs Compression': [
                    'Larger coefficient always means stretch — FALSE: f(2x) is a horizontal COMPRESSION',
                    'Confusing the factor for vertical and horizontal: af(x) stretches vertically; f(bx) compresses horizontally if b>1',
                    'Not distinguishing between the effect on coordinates and the appearance of the graph'
                ],
                'Order of Transformations': [
                    'Applying vertical and horizontal shifts before stretches/compressions',
                    'Treating y = 2f(3x−6)+1 as h=6 rather than factoring: 3(x−2) → h=2',
                    'Not factoring the expression inside the function before identifying h: f(2x+6) has h=−3, not h=6'
                ]
            }
        };

        this.clarificationStrategies = {
            functionMachineModel: {
                method: 'Use function machine diagrams to make input-output structure concrete and visible',
                effectiveness: 'Very high for function notation, composite functions, and inverse functions'
            },
            graphicalProjection: {
                method: 'Project graph onto axes to determine domain and range graphically before algebraic work',
                effectiveness: 'High for domain and range; connects visual to symbolic'
            },
            insideOutsidePrinciple: {
                method: 'Classify every transformation as "inside" (horizontal, opposite effect) or "outside" (vertical, expected effect)',
                effectiveness: 'Very high for transformation misconceptions'
            },
            horizontalLineTest: {
                method: 'Apply HLT graphically before attempting algebraic inverse to catch non-invertible functions early',
                effectiveness: 'Essential for inverse function existence errors'
            },
            compositionOrderDiagram: {
                method: 'Draw an arrow diagram: x → [g] → g(x) → [f] → f(g(x)) to fix order-of-composition errors',
                effectiveness: 'High for composite function order errors'
            },
            verificationByExpansion: {
                method: 'Always verify inverse by computing both f(f⁻¹(x)) and f⁻¹(f(x))',
                effectiveness: 'Essential for catching inverse function errors'
            },
            asymptoteSkeletonMethod: {
                method: 'Draw all asymptotes first as a skeleton, then sketch each branch of the rational function around them',
                effectiveness: 'High for rational function graphing errors'
            },
            breakpointContinuityCheck: {
                method: 'Evaluate each piece from both sides at every breakpoint to test continuity',
                effectiveness: 'High for piecewise function continuity errors'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}?",
                "Can you describe a real-world situation that involves {topic}?",
                "How might {topic} connect to what you already know about equations and graphs?",
                "What do you predict will be the trickiest part of {topic}?"
            ],
            duringLearning: [
                "Does this result make sense? Can you verify it using a different method (e.g., graphically vs algebraically)?",
                "How does {topic} connect to {related_concept}?",
                "What tells you which technique to apply to this type of function?",
                "Can you identify the parent function and the transformations applied?",
                "Can you verify by substituting a specific value and checking the result numerically?"
            ],
            afterLearning: [
                "What are the main concepts covered in {topic} and when does each apply?",
                "What is the most common mistake made with {topic}, and how can you avoid it?",
                "How would you explain {topic} to a student who missed the lesson?",
                "What is the most important check you should always perform after completing a {topic} problem?",
                "How does {topic} connect to the other graphing topics (domain, range, transformations, inverses)?"
            ],
            problemSolving: [
                "What type of function is this? Does its structure suggest a specific approach?",
                "Have you identified the parent function and any restrictions on its domain?",
                "For composite functions: which function is applied first? Have you clearly identified inner and outer?",
                "For inverses: have you applied the horizontal line test first?",
                "For transformations: have you classified each modification as inside (horizontal) or outside (vertical)?",
                "Have you verified your answer by substituting a test value or graphing?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            function_notation: [
                {
                    scenario: "Delivery Pricing Calculator",
                    context: "A courier company charges C(x) = 2.5x + 4.99 pounds for a parcel of weight x kg. A logistics manager needs to evaluate costs for various shipments.",
                    problem: "Evaluate C(3), C(0), C(10), and find x when C(x) = 29.99.",
                    application: "C(3) = 7.50+4.99 = £12.49; C(0) = £4.99 (base charge, no weight); C(10) = £29.99; C(x) = 29.99 → 2.5x = 25 → x = 10 kg",
                    question: "What does C(0) represent physically? Why does C(0) ≠ 0?",
                    answer: "C(0) = £4.99 is the base handling fee regardless of weight. The function is not proportional — it includes a fixed cost.",
                    extension: "The function is affine (linear with non-zero intercept) — proportional functions pass through the origin; this one does not."
                },
                {
                    scenario: "Temperature Conversion",
                    context: "Converting Celsius to Fahrenheit uses F(C) = (9/5)C + 32. A meteorologist needs to translate temperature alerts.",
                    problem: "Find F(0), F(100), F(−40), and solve F(C) = 98.6 (body temperature).",
                    application: "F(0)=32°F (water freezes); F(100)=212°F (water boils); F(−40)=−40°F (unique equal point); C = (98.6−32)×5/9 = 37°C",
                    question: "Why does F(−40) = −40? What is the mathematical significance of the fixed point of this function?",
                    answer: "F(C) = C gives (9/5)C+32 = C → 32 = −(4/5)C → C = −40. This is the unique fixed point — the only temperature equal in both scales.",
                    extension: "Fixed points of functions (where f(a) = a) are important in analysis and dynamical systems."
                }
            ],

            domain_and_range: [
                {
                    scenario: "Safe Medication Dosage",
                    context: "A pharmacist models the safe daily dose of a medication as D(w) = 1.5√(w − 10) mg, where w is patient weight in kg. The model is valid for adults (w ≥ 10 kg effectively, but adult range is 40–150 kg).",
                    problem: "Find the natural domain and the practical restricted domain. Find the range for the practical domain.",
                    application: "Natural domain: w ≥ 10 (radicand ≥ 0). Practical domain: [40, 150]. Range: D(40) = 1.5√30 ≈ 8.2; D(150) = 1.5√140 ≈ 17.7 → Range ≈ [8.2, 17.7] mg",
                    question: "Why is the practical domain smaller than the natural domain? What would D(5) mean, and why is it inappropriate?",
                    answer: "The model is derived from adult physiology data — applying it outside [40,150] would be extrapolation beyond valid data. D(5) requires √(−5) — undefined, and the model has no clinical validity at w=5 kg."
                },
                {
                    scenario: "Photography Lens Focus",
                    context: "The lens equation in photography is 1/f = 1/d₀ + 1/dᵢ, where f is focal length, d₀ is object distance, and dᵢ is image distance. For a fixed f = 50mm, the image distance is dᵢ(d₀) = 50d₀/(d₀ − 50).",
                    problem: "Find the domain and range of dᵢ(d₀) for practical photography (d₀ > 50 mm).",
                    application: "Natural domain: d₀ ≠ 50 (denominator ≠ 0). Practical domain: (50, ∞). As d₀ → ∞: dᵢ → 50 (HA). As d₀ → 50⁺: dᵢ → +∞. Range on practical domain: (50, ∞).",
                    question: "What does the horizontal asymptote dᵢ = 50 represent physically? Why can d₀ not equal the focal length?",
                    answer: "dᵢ → 50 mm as the object is infinitely far away — the image forms at the focal point. d₀ = 50 would require dᵢ = ∞ — parallel input rays never converge within the camera."
                }
            ],

            intercepts: [
                {
                    scenario: "Break-Even Analysis",
                    context: "A start-up's monthly profit is modelled as P(x) = −2x² + 20x − 32 thousand pounds, where x is the number of products sold (thousands). The owner needs to identify break-even points.",
                    problem: "Find the x-intercepts (break-even quantities), y-intercept (start-up loss), and vertex (maximum profit).",
                    application: "y-intercept: P(0) = −32 (£32k initial loss). x-intercepts: −2x²+20x−32=0 → x²−10x+16=0 → (x−2)(x−8)=0 → x=2, x=8. Vertex: x=5, P(5)=−50+100−32=18 (£18k max profit).",
                    question: "What do the two break-even points mean for the business? Why does profit decline after x = 8?",
                    answer: "At x=2 and x=8 thousand units, the business breaks even. Between them, profit is positive. Beyond x=8, costs (modelled by the −2x² term) outpace revenue — perhaps production costs scale faster than prices."
                }
            ],

            asymptotes: [
                {
                    scenario: "Enzyme Reaction Rate",
                    context: "The Michaelis-Menten equation in biochemistry models enzyme reaction rate: v(S) = Vₘₐₓ·S/(Kₘ + S), where S is substrate concentration, Vₘₐₓ is maximum rate, and Kₘ is the Michaelis constant.",
                    problem: "Identify the horizontal asymptote and explain its biological meaning. Find v when S = Kₘ.",
                    application: "As S → ∞: v → Vₘₐₓ·S/S = Vₘₐₓ → HA: v = Vₘₐₓ. At S = Kₘ: v = Vₘₐₓ·Kₘ/(2Kₘ) = Vₘₐₓ/2.",
                    question: "Why can the reaction rate never reach Vₘₐₓ? What does the HA represent biochemically?",
                    answer: "The enzyme has a finite number of active sites — even at infinite substrate, the rate approaches but cannot exceed Vₘₐₓ (maximum enzyme capacity). The HA is the theoretical saturation limit. At S = Kₘ, the rate is exactly half-maximum — Kₘ is the substrate concentration for half-maximal activity."
                },
                {
                    scenario: "Internet Connection Speed vs Distance",
                    context: "Signal strength follows S(d) = P/(d² + 1) milliwatts, where d is distance in metres from router. An engineer needs to find the effective range.",
                    problem: "Identify the horizontal asymptote and determine at what distance signal falls below 1% of peak power P.",
                    application: "HA: y = 0 as d → ∞. For 1% of P: P/(d²+1) = 0.01P → d²+1 = 100 → d = √99 ≈ 9.95 m.",
                    question: "What does the HA y = 0 mean physically? Does the signal ever truly equal zero?",
                    answer: "The signal asymptotically approaches zero — it theoretically never reaches zero. In practice, below a noise threshold it is treated as zero. The asymptote represents the physical impossibility of complete signal disappearance, not a limitation of the model."
                }
            ],

            piecewise_functions: [
                {
                    scenario: "Progressive Income Tax",
                    context: "UK income tax (simplified) applies different rates: 0% on the first £12,570; 20% on £12,571–£50,270; 40% above £50,270.",
                    problem: "Write the total tax T(x) as a piecewise function and calculate T(30000) and T(80000).",
                    application: "T(x) = { 0, x ≤ 12570; 0.20(x−12570), 12570 < x ≤ 50270; 7540 + 0.40(x−50270), x > 50270 }. T(30000) = 0.20(17430) = £3486. T(80000) = 7540 + 0.40(29730) = 7540 + 11892 = £19432.",
                    question: "Is T(x) continuous? What would it mean if it were NOT continuous at x = £50,270?",
                    answer: "T(x) is continuous at both breakpoints (designed so no tax 'cliff edge'). If it were discontinuous, earning £1 more than a threshold could result in a sudden large tax jump — a perverse incentive to earn less."
                },
                {
                    scenario: "Gym Membership Pricing",
                    context: "A gym charges: £15/month for 0–2 visits/week; £25/month for 3–5 visits/week; £35/month for unlimited visits.",
                    problem: "Write the monthly cost C(v) as a piecewise function of weekly visits v. Graph it.",
                    application: "C(v) = { 15, 0 ≤ v ≤ 2; 25, 3 ≤ v ≤ 5; 35, v > 5 }. Note: v is integer-valued; at breakpoints use specific definitions.",
                    question: "What type of discontinuities does this function have? Is it optimal to go 5 vs 6 visits per week?",
                    answer: "Jump discontinuities at v=2→3 and v=5→6. At v=6, cost jumps to £35 vs £25 at v=5. Cost per visit: v=5 gives £25/5 = £5; v=6 gives £35/6 ≈ £5.83 — more expensive per visit. Go 6+ only if truly unlimited usage exceeds cost."
                }
            ],

            composite_functions: [
                {
                    scenario: "VAT and Discount Compound Pricing",
                    context: "A shop applies a 20% VAT on all prices and offers a 10% loyalty discount. Which happens first — and does it matter?",
                    problem: "Let V(x) = 1.2x (add VAT) and D(x) = 0.9x (apply discount). Compare (V∘D)(x) and (D∘V)(x).",
                    application: "(V∘D)(x) = V(0.9x) = 1.2(0.9x) = 1.08x. (D∘V)(x) = D(1.2x) = 0.9(1.2x) = 1.08x.",
                    question: "Does the order matter? Why or why not? Verify with a specific price.",
                    answer: "Both give 1.08x — order does NOT matter here. This is because both are multiplicative (scaling): multiplication is commutative. At £100: both give £108. If one operation were additive, order would matter."
                },
                {
                    scenario: "Fitness Tracking App",
                    context: "A fitness app converts steps to calories: first converts steps s to km via d(s) = s/1312, then converts km to calories via c(d) = 62d (for a 70kg person).",
                    problem: "Find the composite function (c∘d)(s) and evaluate for 10,000 steps.",
                    application: "(c∘d)(s) = c(s/1312) = 62(s/1312) = 62s/1312 ≈ 0.0473s. At s=10000: 473 calories.",
                    question: "What does the composite function reveal that the two separate functions do not?",
                    answer: "The composite directly maps steps to calories — the practical quantity of interest. Users don't want to do two calculations; the composition creates the single useful rule they need."
                }
            ],

            inverse_functions: [
                {
                    scenario: "Fahrenheit to Celsius Reversal",
                    context: "A weather app converts Celsius to Fahrenheit via F(C) = (9/5)C + 32. A user sees 95°F and wants to know the Celsius equivalent.",
                    problem: "Find F⁻¹(x) (the conversion from Fahrenheit back to Celsius) and evaluate F⁻¹(95).",
                    application: "y = (9/5)x+32 → swap → x = (9/5)y+32 → y = (5/9)(x−32). F⁻¹(x) = (5/9)(x−32). F⁻¹(95) = (5/9)(63) = 35°C.",
                    question: "Verify F(F⁻¹(x)) = x. What does the domain-range swap tell you about the two conversion functions?",
                    answer: "F(F⁻¹(x)) = (9/5)·(5/9)(x−32)+32 = x−32+32 = x ✓. The domain of F (Celsius values) becomes the range of F⁻¹ and vice versa — the two functions perfectly undo each other."
                },
                {
                    scenario: "Carbon Dating Age Recovery",
                    context: "The fraction of carbon-14 remaining after t years is A(t) = e^(−0.000121t). An archaeologist measures 0.78 remaining fraction and needs to find the age.",
                    problem: "Find A⁻¹(x) and evaluate A⁻¹(0.78).",
                    application: "y = e^(−0.000121t) → t = −ln(y)/0.000121. A⁻¹(x) = −ln(x)/0.000121. A⁻¹(0.78) = −ln(0.78)/0.000121 ≈ 2064 years.",
                    question: "Why is logarithm the inverse of exponential? What does this tell you about the relationship between these two functions?",
                    answer: "By definition, ln(eˣ) = x and e^(ln x) = x — they are mutual inverses. Every exponential equation can be solved by applying its inverse (logarithm); every logarithmic equation by applying the exponential."
                }
            ],

            transformations: [
                {
                    scenario: "Adjusting a Business Model",
                    context: "A company's profit model is P(x) = x² − 6x + 5 (in thousands, x = months since launch). An improved product launch shifts break-even 2 months later and increases all profits by £3000.",
                    problem: "Write the transformed profit function and identify the new break-even points.",
                    application: "Shift right 2: P(x−2) = (x−2)²−6(x−2)+5 = x²−10x+21. Shift up 3: Q(x) = x²−10x+24. New zeros: x²−10x+24=0 → (x−4)(x−6)=0 → x=4, x=6.",
                    question: "How do the break-even points change, and what does this tell the business about the launch improvement?",
                    answer: "Original break-evens: x=1, x=5 (months 1 and 5). New break-evens: x=4, x=6. The company now breaks even later but the profit window is narrower — the improvement delayed launch but also shortened the profitability window. A horizontal shift right moves both intercepts right by 2."
                },
                {
                    scenario: "Audio Waveform Processing",
                    context: "A sound engineer models a musical note as f(t) = sin(2πt). She applies three effects: doubles the amplitude (+volume), compresses time by factor 2 (+pitch/frequency), and adds a delay of 0.25 seconds.",
                    problem: "Write the transformed waveform and identify the amplitude, frequency, and delay.",
                    application: "Amplitude × 2: 2sin(2πt). Compress time by 2: 2sin(2π·2t) = 2sin(4πt). Delay 0.25s: 2sin(4π(t − 0.25)) = 2sin(4πt − π).",
                    question: "How does the period change? What does a phase shift of −π in the argument mean for the sound?",
                    answer: "Original period: 1 second. New period: 1/2 second (doubled frequency = one octave higher). Phase shift −π means the waveform starts half a period out of phase — it is phase-inverted (polarity reversal), used in noise-cancelling headphones."
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall definitions, notation, and key rules for graphing functions",
                    verbs: ["State", "Write", "List", "Recall", "Name", "Identify"],
                    example: "State the vertical line test and write the notation for a composite function"
                },
                understand: {
                    description: "Explain why techniques work; connect to graphical and numerical meaning",
                    verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect"],
                    example: "Explain why f(x−3) shifts the graph RIGHT rather than left"
                },
                apply: {
                    description: "Use methods to find domain, range, intercepts, asymptotes, inverses, composites",
                    verbs: ["Find", "Evaluate", "Determine", "Apply", "Sketch"],
                    example: "Find the domain, range, and asymptotes of f(x) = (2x−1)/(x²−4)"
                },
                analyze: {
                    description: "Classify function types; identify transformations; analyze structure",
                    verbs: ["Classify", "Identify", "Decompose", "Compare", "Determine"],
                    example: "Identify all transformations applied to f(x) = −3√(2x−6) + 4 and state them in order"
                },
                evaluate: {
                    description: "Assess correctness of given work; verify inverses; judge technique appropriateness",
                    verbs: ["Evaluate", "Verify", "Critique", "Assess", "Justify"],
                    example: "A student states that f(x) = x² has inverse f⁻¹(x) = ±√x. Evaluate this claim."
                },
                create: {
                    description: "Construct functions with specified properties; design graphs; derive composite rules",
                    verbs: ["Construct", "Design", "Derive", "Create", "Formulate"],
                    example: "Create a rational function with VA at x=2, HA at y=3, and a hole at x=−1"
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Can evaluate f(a) for simple polynomial functions",
                        "Identifies domain by inspecting a graph rather than algebraically",
                        "Reads x- and y-intercepts from a given graph"
                    ],
                    support: ["Step-by-step worked examples with explicit notation guidance", "Always begin with graphical approach before algebraic", "Use function machine model to build intuition"]
                },
                developing: {
                    characteristics: [
                        "Finds domain algebraically for single-restriction functions",
                        "Identifies VAs and HA for rational functions with factored forms",
                        "Applies single transformations to parent functions"
                    ],
                    support: ["Introduce compound domain restrictions", "Practice combining transformations", "Connect inverse functions to solving equations"]
                },
                proficient: {
                    characteristics: [
                        "Finds domain and range for multi-restriction functions",
                        "Completes full rational function analysis (asymptotes, holes, intercepts)",
                        "Finds and verifies inverse functions including domain restriction"
                    ],
                    support: ["Multi-step composite and inverse problems", "Piecewise function design with continuity constraints", "Error analysis tasks on given student work"]
                },
                expert: {
                    characteristics: [
                        "Derives domain of complex composite functions formally",
                        "Connects transformations to function families and their properties",
                        "Links inverse functions to bijections, group theory, and cryptography"
                    ],
                    support: ["Open investigation of function spaces", "Research into applications in calculus (chain rule, inverse function theorem)", "Cross-topic problems linking functions to differential equations and signal processing"]
                }
            }
        };

        this.assessmentQuestions = {
            function_notation: {
                remember: "Write the definition of a function using the notation f: A → B",
                understand: "Explain why f(a+b) ≠ f(a) + f(b) in general. For which functions does equality hold?",
                apply: "Given g(x) = 2x² − 3x + 1, evaluate g(0), g(−1), g(a), and g(x+1)",
                analyze: "Determine which of the following are functions: a graph, a table, a mapping diagram (all provided)",
                evaluate: "A student writes f(2x) = 2f(x). Evaluate this claim and provide a counterexample if false.",
                create: "Write a function f such that f(3) = 7, f(0) = 1, and f(x) is linear. Prove your answer is unique."
            },
            domain_and_range: {
                remember: "State the natural domain and range of f(x) = √x",
                understand: "Explain why 1 is excluded from the range of f(x) = (x²−1)/(x²) but 0 is in the domain",
                apply: "Find the domain and range of f(x) = √(4−x²) and verify graphically",
                analyze: "Without graphing, determine the range of f(x) = 3/(x²+1) and justify algebraically",
                evaluate: "A student states the domain of √(x−3)/(x−5) is [3, ∞). Evaluate and correct if needed.",
                create: "Write a function whose domain is [−2, 5) ∪ (5, ∞) and whose range is (−∞, 4]"
            },
            intercepts: {
                remember: "State the method for finding x-intercepts and y-intercepts of any function",
                understand: "Explain the difference between a zero of a function and a root of an equation",
                apply: "Find all intercepts of f(x) = x³ − 4x² − x + 4",
                analyze: "Without calculating, predict the number and approximate locations of x-intercepts for f(x) = x⁴ − 5x² + 4",
                evaluate: "A student says x² + 4 = 0 has roots x = ±2. Evaluate this claim over ℝ and over ℂ.",
                create: "Write a cubic polynomial with exactly two distinct x-intercepts, one of which is a double root at x = 3"
            },
            asymptotes: {
                remember: "State the three rules for determining horizontal asymptotes of rational functions",
                understand: "Explain the difference between a vertical asymptote and a removable discontinuity (hole)",
                apply: "Find all asymptotes and holes of f(x) = (x²−4)/(x²+x−6)",
                analyze: "Without graphing, determine all asymptotic behaviour of f(x) = (3x³−x)/(x²+1)",
                evaluate: "A student finds HA: y=3 for f(x) = 3x/(x²+2). Evaluate this claim.",
                create: "Construct a rational function with VA at x=1, HA at y=2, no holes, and exactly one x-intercept"
            },
            piecewise_functions: {
                remember: "Write the piecewise definition of f(x) = |x−3|",
                understand: "Explain what continuity means at a breakpoint and how to test it for a piecewise function",
                apply: "Evaluate, sketch, and test continuity of f(x) = {x²+1, x<2; 2x+1, x≥2}",
                analyze: "Identify all discontinuities of f(x) = {3x, x<0; x²+1, 0≤x<2; 7, x≥2} and classify each",
                evaluate: "A student claims f(x)={x+1, x≤3; 2x−3, x>3} is continuous at x=3. Evaluate and verify.",
                create: "Design a piecewise function that models a situation with exactly one jump and one removable discontinuity"
            },
            composite_functions: {
                remember: "Write the definition of (f∘g)(x) and state which function is applied first",
                understand: "Explain why composition is generally not commutative with a specific counterexample",
                apply: "Given f(x) = 2x+1 and g(x) = x²−3, find (f∘g)(x), (g∘f)(x), and (f∘f)(x)",
                analyze: "Decompose h(x) = sin(3x²+1) into two simpler functions. Is your decomposition unique?",
                evaluate: "Verify whether the functions f(x) = (x−1)/2 and g(x) = 2x+1 are inverses using composition.",
                create: "Create two functions f and g such that (f∘g)(x) = 6x−5 and both functions are linear"
            },
            inverse_functions: {
                remember: "State the domain-range relationship between f and f⁻¹",
                understand: "Explain why f(x) = x² does not have an inverse without domain restriction",
                apply: "Find f⁻¹(x) for f(x) = (4x−3)/(2x+1) and state its domain",
                analyze: "Without finding the inverse, determine whether f(x) = x³−3x has an inverse over ℝ",
                evaluate: "A student claims f⁻¹(x) = 1/f(x) for f(x) = 2x+1. Evaluate and find the correct inverse.",
                create: "Construct a function that is its own inverse (f = f⁻¹). Verify your construction graphically."
            },
            transformations: {
                remember: "State the effect of replacing f(x) with f(x−3) and with f(x)+3",
                understand: "Explain the inside/outside principle and why f(x−3) shifts right (not left)",
                apply: "Fully describe all transformations in y = −2|3x−6| + 5 and sketch from the parent |x|",
                analyze: "Identify the transformations that map f(x) = √x to g(x) = −√(−(x+1)) + 3",
                evaluate: "A student says y = f(2x) stretches the graph horizontally. Evaluate and correct if needed.",
                create: "Write the equation of a parabola that has been reflected over the x-axis, compressed vertically by 1/3, shifted left 4, and shifted up 2"
            }
        };
    }

    // ===================================================
    // TOPIC HANDLERS
    // ===================================================

    handleFunctionNotation(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Function Notation",
            category: 'graphing_functions',
            summary: "Function notation f(x) expresses a deterministic rule assigning exactly one output to each input. It is the universal language of mathematical relationships and the foundation of all higher mathematics.",

            definitions: {
                function: {
                    formal: "A function f: A → B is a rule that assigns to each element x ∈ A exactly one element f(x) ∈ B",
                    informal: "A reliable machine: same input always gives same output",
                    notation: "f(x) = expression; read 'f of x'; f is the function name, x is the input variable"
                },
                relation: {
                    definition: "Any set of ordered pairs (x, y); may assign multiple y-values to one x-value",
                    vsFunction: "All functions are relations, but not all relations are functions"
                },
                verticalLineTest: {
                    statement: "A graph represents a function iff no vertical line intersects it more than once",
                    reason: "Each x-value can produce at most one y-value"
                }
            },

            evaluationRules: {
                basicEvaluation: "Replace every x with the given input; use brackets for negative inputs",
                expressionInput: "Replace every x with the entire input expression; bracket fully",
                example: {
                    function: "f(x) = x² − 3x + 2",
                    cases: [
                        "f(4) = 16 − 12 + 2 = 6",
                        "f(−1) = (−1)² − 3(−1) + 2 = 1 + 3 + 2 = 6",
                        "f(a+1) = (a+1)² − 3(a+1) + 2 = a² + 2a + 1 − 3a − 3 + 2 = a² − a"
                    ]
                }
            },

            commonNotations: {
                "f(x)": "Standard function notation; x is independent variable",
                "y = f(x)": "y is the dependent variable; its value depends on x",
                "f: ℝ → ℝ": "Mapping notation; f maps real inputs to real outputs",
                "f(x₀)": "Evaluation at specific value x₀",
                "f(x+h) − f(x)": "Difference expression; used in difference quotient (derivative)"
            },

            examples: [
                {
                    function: "f(x) = 3x − 5",
                    evaluations: ["f(0) = −5", "f(2) = 1", "f(−3) = −14", "f(x+1) = 3x − 2"]
                },
                {
                    function: "g(x) = x² + 2x − 3",
                    evaluations: ["g(0) = −3", "g(1) = 0", "g(−3) = 0", "g(a) = a²+2a−3"]
                },
                {
                    function: "h(x) = √(x+4)",
                    evaluations: ["h(0) = 2", "h(5) = 3", "h(−4) = 0", "h(−5): undefined (√(−1) ∉ ℝ)"]
                }
            ],

            commonErrors: [
                {
                    error: "Reading f(x) as multiplication: f(x) = f × x",
                    fix: "f(x) is function notation — 'f applied to x', not a product"
                },
                {
                    error: "f(a+b) = f(a) + f(b)",
                    fix: "True only for linear functions f(x) = mx. Counterexample: f(x) = x², f(1+1) = 4 ≠ f(1)+f(1) = 2"
                },
                {
                    error: "Not bracketing negative inputs: f(−2) computed as −f(2)",
                    fix: "Always substitute with brackets: f(−2) = (−2)² = 4, not −(2²) = −4"
                }
            ]
        };

        return content;
    }

    handleDomainAndRange(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Domain & Range",
            category: 'graphing_functions',
            summary: "The domain is the complete set of valid inputs; the range is the complete set of outputs. Every claim about a function is implicitly bounded by these sets.",

            restrictionTypes: {
                squareRoot: { rule: "Radicand ≥ 0", method: "Set expression under √ ≥ 0; solve inequality" },
                denominator: { rule: "Denominator ≠ 0", method: "Set denominator = 0; exclude solutions" },
                logarithm: { rule: "Argument > 0", method: "Set argument > 0; solve inequality" },
                evenPower: { rule: "Same as square root for even roots", method: "Set radicand ≥ 0" },
                polynomial: { rule: "No restrictions", method: "Domain is ℝ" }
            },

            notationGuide: {
                intervalNotation: {
                    "[a,b]": "a ≤ x ≤ b (both endpoints included, closed)",
                    "(a,b)": "a < x < b (both endpoints excluded, open)",
                    "[a,b)": "a ≤ x < b (left closed, right open)",
                    "(a,∞)": "x > a (unbounded above)",
                    "(-∞,a]": "x ≤ a (unbounded below)",
                    "ℝ": "(−∞, ∞) — all real numbers"
                },
                setBuilderNotation: {
                    form: "{x ∈ ℝ : condition}",
                    example: "{x ∈ ℝ : x > 3} is equivalent to (3, ∞)"
                }
            },

            strategicApproach: {
                domain: [
                    "1. Identify all restriction-causing components",
                    "2. Set up and solve each restriction inequality/equation",
                    "3. Intersect all restrictions using AND logic",
                    "4. Write in interval notation"
                ],
                range: [
                    "1. Graphical: project graph onto y-axis",
                    "2. Algebraic: solve y = f(x) for x; find all y giving real x",
                    "3. For quadratics: use vertex; range is [vertex_y, ∞) or (−∞, vertex_y]",
                    "4. For asymptotes: identify y-values the function approaches but cannot reach"
                ]
            },

            workedExamples: [
                {
                    function: "f(x) = √(2x−6)/(x−5)",
                    restrictions: ["2x−6 ≥ 0 → x ≥ 3", "x − 5 ≠ 0 → x ≠ 5"],
                    domain: "[3,5) ∪ (5,∞)"
                },
                {
                    function: "f(x) = log₃(x²−4)",
                    restrictions: ["x²−4 > 0 → x² > 4 → x > 2 or x < −2"],
                    domain: "(−∞,−2) ∪ (2,∞)"
                }
            ]
        };

        return content;
    }

    handleIntercepts(problem) {
        const content = {
            topic: "Intercepts",
            category: 'graphing_functions',
            summary: "Intercepts are the points where a graph crosses the axes. The y-intercept is f(0); x-intercepts are solutions to f(x) = 0.",

            methods: {
                yIntercept: {
                    rule: "Substitute x = 0; evaluate f(0)",
                    result: "Point (0, f(0))",
                    note: "Every function with 0 in its domain has exactly one y-intercept"
                },
                xIntercepts: {
                    rule: "Set f(x) = 0; solve for x",
                    result: "Points (a, 0) for each solution a",
                    techniques: ["Factoring", "Quadratic formula", "Numerical/graphical methods"]
                }
            },

            multiplicityRules: {
                oddMultiplicity: "Graph crosses x-axis at this root",
                evenMultiplicity: "Graph touches x-axis and bounces; does not cross",
                examples: [
                    "f(x) = (x−2)¹(x+3)³: both cross (odd mult.)",
                    "f(x) = (x−1)²(x+2): x=1 bounces; x=−2 crosses",
                    "f(x) = (x−5)⁴: touches x-axis at x=5 without crossing"
                ]
            },

            workedExamples: [
                {
                    function: "f(x) = 6x² + x − 2",
                    yIntercept: "f(0) = −2 → (0, −2)",
                    xIntercepts: "6x²+x−2=0 → (2x−1)(3x+2)=0 → x=1/2, x=−2/3 → (1/2,0), (−2/3,0)"
                },
                {
                    function: "f(x) = x⁴ − 5x² + 4",
                    yIntercept: "f(0) = 4 → (0, 4)",
                    xIntercepts: "Let u=x²: u²−5u+4=0 → (u−1)(u−4)=0 → u=1,4 → x=±1, ±2 → four intercepts"
                }
            ]
        };

        return content;
    }

    handleAsymptotes(problem) {
        const content = {
            topic: "Asymptotes",
            category: 'graphing_functions',
            summary: "Asymptotes describe the limiting behaviour of functions near singularities and at infinity. They form the structural skeleton for sketching rational and other functions.",

            types: {
                vertical: {
                    definition: "x = a where |f(x)| → ∞ as x → a",
                    finding: "Set denominator = 0; exclude values where numerator is also 0 (those are holes)",
                    example: "f(x)=1/(x−3): VA at x=3"
                },
                horizontal: {
                    definition: "y = b where f(x) → b as x → ±∞",
                    rules: [
                        "deg(num) < deg(den): HA at y = 0",
                        "deg(num) = deg(den): HA at y = leading coeff ratio",
                        "deg(num) > deg(den): No HA (check for OA)"
                    ]
                },
                oblique: {
                    definition: "y = mx + b approached as x → ±∞; deg(num) = deg(den) + 1",
                    finding: "Perform polynomial long division; quotient (without remainder) is the OA"
                }
            },

            holesVsAsymptotes: {
                hole: "Both numerator and denominator are zero at x = a → removable discontinuity → fill with limit value",
                asymptote: "Only denominator is zero at x = a → vertical asymptote → function blows up",
                test: "After factoring fully, if a common factor (x−a) cancels → hole at x=a; if (x−a) remains in denominator only → VA"
            },

            workedExamples: [
                {
                    function: "f(x) = (3x²+2x)/(x²−x−2)",
                    step1: "Factor: x(3x+2)/((x−2)(x+1))",
                    step2: "No cancellation → no holes",
                    step3: "VA: x=2, x=−1",
                    step4: "HA: degrees equal → y = 3/1 = 3",
                    step5: "x-intercepts: 3x+2=0 → x=−2/3; x=0 → (0,0)",
                    step6: "y-intercept: f(0)=0/(−2)=0 → same as origin"
                }
            ]
        };

        return content;
    }

    handlePiecewiseFunctions(problem) {
        const content = {
            topic: "Piecewise Functions",
            category: 'graphing_functions',
            summary: "Piecewise functions use different rules over different intervals. They model real-world threshold-based systems and include absolute value and step functions as special cases.",

            notation: {
                general: "f(x) = { rule₁, interval₁ ; rule₂, interval₂ ; ... }",
                reading: "Each branch specifies a rule AND its domain; apply the matching branch to each input"
            },

            evaluationSteps: [
                "1. Determine which interval the input falls in (check all inequality signs carefully)",
                "2. Apply the formula for that interval only",
                "3. For boundary values, check which piece applies (open vs closed endpoint)"
            ],

            continuityTest: {
                method: "At each breakpoint x=a: evaluate left piece at a AND right piece at a; if equal AND equals f(a) → continuous",
                jumpDiscontinuity: "Left and right limits exist but differ → jump discontinuity",
                removableDiscontinuity: "Left and right limits are equal but differ from f(a) → removable discontinuity (hole)"
            },

            absoluteValueAsSpecialCase: {
                definition: "|x| = {x, x≥0; −x, x<0}",
                graphicalForm: "V-shape vertex at origin",
                solving: "Solve |expression| = k by splitting into two cases: expression = k and expression = −k"
            },

            workedExamples: [
                {
                    function: "f(x) = {x²−1, x < 0; 2x+1, 0 ≤ x ≤ 3; 10−x, x > 3}",
                    evaluations: ["f(−2) = 4−1 = 3", "f(0) = 1", "f(3) = 7", "f(5) = 5"],
                    continuity: "At x=0: left: (0)²−1=−1; right: 2(0)+1=1 → jump (not continuous). At x=3: left: 7; right: 10−3=7 → continuous"
                }
            ]
        };

        return content;
    }

    handleCompositeFunctions(problem) {
        const content = {
            topic: "Composite Functions",
            category: 'graphing_functions',
            summary: "Composite functions chain two functions: (f∘g)(x) = f(g(x)). Apply the inner function first, then the outer. Composition is generally not commutative.",

            definition: {
                notation: "(f∘g)(x) = f(g(x))",
                reading: "'f composed with g of x' or 'f of g of x'",
                order: "g is applied FIRST to x; f is applied SECOND to the result g(x)"
            },

            domainOfComposite: {
                rule: "x must be in domain of g AND g(x) must be in domain of f",
                method: "Dom(f∘g) = {x ∈ Dom(g) : g(x) ∈ Dom(f)}",
                example: "f(x)=√x (dom: x≥0), g(x)=4−x²: need 4−x²≥0 → −2≤x≤2 → Dom(f∘g) = [−2,2]"
            },

            decompositionSkill: {
                purpose: "Identify inner and outer functions in a complex expression",
                examples: [
                    "h(x) = (2x+1)⁴: inner g(x)=2x+1, outer f(u)=u⁴",
                    "h(x) = ln(x²+1): inner g(x)=x²+1, outer f(u)=ln(u)",
                    "h(x) = e^(sin(x)): inner g(x)=sin(x), outer f(u)=eᵘ"
                ]
            },

            workedExamples: [
                {
                    given: "f(x) = x²+1, g(x) = 2x−3",
                    fog: "(f∘g)(x) = f(2x−3) = (2x−3)²+1 = 4x²−12x+10",
                    gof: "(g∘f)(x) = g(x²+1) = 2(x²+1)−3 = 2x²−1",
                    notCommutative: "4x²−12x+10 ≠ 2x²−1 in general"
                }
            ]
        };

        return content;
    }

    handleInverseFunctions(problem) {
        const content = {
            topic: "Inverse Functions",
            category: 'graphing_functions',
            summary: "The inverse f⁻¹ reverses f: if f(a) = b, then f⁻¹(b) = a. Only one-to-one functions have inverse functions. The graph of f⁻¹ reflects f over y = x.",

            existence: {
                requirement: "f must be one-to-one (injective): each output corresponds to exactly one input",
                test: "Horizontal Line Test: no horizontal line may intersect the graph more than once",
                restrictedDomain: "If f fails HLT, restrict the domain to make it one-to-one before finding inverse"
            },

            algebraicMethod: {
                steps: [
                    "1. Write y = f(x)",
                    "2. Swap x and y to get x = f(y)",
                    "3. Solve for y",
                    "4. Write f⁻¹(x) = [result]",
                    "5. State domain of f⁻¹ = range of f"
                ]
            },

            graphicalProperty: {
                reflection: "Graph of f⁻¹ is reflection of graph of f over the line y = x",
                coordinateSwap: "If (a, b) is on f, then (b, a) is on f⁻¹",
                domainRangeSwap: "Dom(f⁻¹) = Range(f); Range(f⁻¹) = Dom(f)"
            },

            verification: {
                method: "f(f⁻¹(x)) = x for all x in Dom(f⁻¹), AND f⁻¹(f(x)) = x for all x in Dom(f)",
                bothRequired: "Both compositions must equal x — checking only one is insufficient"
            },

            workedExamples: [
                {
                    function: "f(x) = (x+3)/2",
                    inverse: "y=(x+3)/2 → x=(y+3)/2 → 2x=y+3 → y=2x−3 → f⁻¹(x)=2x−3",
                    verify: "f(f⁻¹(x)) = (2x−3+3)/2 = x ✓; f⁻¹(f(x)) = 2·(x+3)/2 − 3 = x ✓"
                },
                {
                    function: "f(x) = x², x ≥ 0",
                    inverse: "y=x² → x=y² (for y≥0) → y=√x → f⁻¹(x) = √x, dom [0,∞)",
                    note: "Domain restriction x≥0 is essential; without it, f is not one-to-one"
                }
            ]
        };

        return content;
    }

    handleTransformations(problem) {
        const content = {
            topic: "Transformations of Function Graphs",
            category: 'graphing_functions',
            summary: "Graph transformations systematically modify a parent function's graph. The general form y = af(b(x−h))+k encodes all four types of transformation.",

            generalForm: {
                formula: "y = af(b(x − h)) + k",
                parameters: {
                    a: "Vertical stretch/compression (|a|) and reflection over x-axis (a<0)",
                    b: "Horizontal compression/stretch (|b|) and reflection over y-axis (b<0)",
                    h: "Horizontal translation: right by h (note: subtract h in the bracket)",
                    k: "Vertical translation: up by k"
                }
            },

            coordinateTransformRules: {
                verticalShift: "(x, y) → (x, y+k)",
                horizontalShift: "(x, y) → (x+h, y)",
                verticalStretch: "(x, y) → (x, ay)",
                horizontalCompression: "(x, y) → (x/b, y)",
                reflectXAxis: "(x, y) → (x, −y)",
                reflectYAxis: "(x, y) → (−x, y)"
            },

            insideOutsidePrinciple: {
                inside: "Changes to x (inside the function): affect horizontal position; act OPPOSITE to their sign",
                outside: "Changes to f(x) (outside the function): affect vertical position; act AS EXPECTED",
                memorisation: "Vertical transformations: behave normally. Horizontal transformations: behave opposite."
            },

            orderOfApplication: [
                "1. Factor inside: ensure form is f(b(x−h))",
                "2. Apply horizontal shift: right by h",
                "3. Apply horizontal stretch/compression: divide x-coords by b",
                "4. Apply vertical stretch/compression: multiply y-coords by |a|",
                "5. Apply reflections: negate appropriate coordinate",
                "6. Apply vertical shift: add k to y-coords"
            ],

            parentFunctionKeyPoints: {
                "f(x) = x²": ["(0,0)", "(1,1)", "(−1,1)", "(2,4)"],
                "f(x) = √x": ["(0,0)", "(1,1)", "(4,2)", "(9,3)"],
                "f(x) = |x|": ["(0,0)", "(1,1)", "(−1,1)", "(2,2)"],
                "f(x) = 1/x": ["(1,1)", "(2,0.5)", "(−1,−1)", "(0.5,2)"],
                "f(x) = eˣ": ["(0,1)", "(1,e)", "(−1,1/e)"],
                "f(x) = ln(x)": ["(1,0)", "(e,1)", "(1/e,−1)"]
            },

            workedExamples: [
                {
                    function: "y = 3(x − 2)² − 5",
                    parent: "f(x) = x²",
                    h: "2 → shift right 2",
                    a: "3 → vertical stretch ×3",
                    k: "−5 → shift down 5",
                    vertex: "(2, −5)",
                    keyPoints: "(2,−5), (3,−2), (1,−2), (4,7), (0,7)"
                },
                {
                    function: "y = −|2(x+1)| + 4",
                    factored: "y = −|2(x−(−1))| + 4",
                    parent: "f(x) = |x|",
                    b: "2 → horizontal compression by 2",
                    a: "−1 → reflect over x-axis",
                    h: "−1 → shift left 1",
                    k: "4 → shift up 4",
                    vertex: "(−1, 4)",
                    opens: "downward"
                }
            ]
        };

        return content;
    }
}
