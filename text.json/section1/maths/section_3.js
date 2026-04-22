

functions: {
    title: "Functions: Definition, Notation, Types, and Applications",

    databaseLinks: {
        misconceptions: [
            'functionDefinition',
            'functionNotation',
            'domainAndRange',
            'typesOfFunctions',
            'transformations'
        ],
        contextualScenarios: [
            'functionDefinition',
            'functionNotation',
            'domainAndRange',
            'typesOfFunctions'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'graphingPractice',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'workedExampleAnalysis'
        ],
        assessmentRubrics: [
            'remember',
            'understand',
            'apply',
            'analyze',
            'evaluate',
            'create'
        ],
        assessmentQuestions: [
            'functionDefinition',
            'functionNotation',
            'domainAndRange',
            'typesOfFunctions'
        ]
    },

    conceptLinks: {
        "A function assigns exactly one output to every input in its domain": {
            misconceptions:      ['functionDefinition'],
            scenarios:           ['functionDefinition'],
            studyTips:           ['diagrams', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['functionDefinition']
        },
        "Function notation f(x) represents the output when x is the input": {
            misconceptions:      ['functionNotation'],
            scenarios:           ['functionNotation'],
            studyTips:           ['flashcards', 'practiceRoutines'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['functionNotation']
        },
        "The domain is the set of all valid inputs; the range is the set of all resulting outputs": {
            misconceptions:      ['domainAndRange'],
            scenarios:           ['domainAndRange'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['domainAndRange']
        },
        "Different types of functions produce characteristically different graphs and behaviours": {
            misconceptions:      ['typesOfFunctions'],
            scenarios:           ['typesOfFunctions'],
            studyTips:           ['comparisonTables', 'graphingPractice'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['typesOfFunctions']
        },
        "Transformations shift, stretch, or reflect a function's graph without changing its fundamental shape": {
            misconceptions:      ['transformations'],
            scenarios:           ['typesOfFunctions'],
            studyTips:           ['diagrams', 'graphingPractice', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['typesOfFunctions']
        }
    },

    topicIntroduction: {
        overview: "A function is one of the most powerful and pervasive ideas in all of mathematics. Wherever one quantity determines another — a price determines a tax, a time determines a position, a temperature determines a volume — a function is at work. In this lesson, we build a rigorous understanding of what a function is, how to read and write function notation, how to identify the domain and range, how to distinguish types of functions, and how to transform their graphs systematically.",
        whyItMatters: "Functions are the fundamental language of quantitative relationships. Every formula in physics, chemistry, economics, and engineering is a function. Computer programming is built on functions. Calculus — the mathematics of change — is the study of how functions behave. Without a secure understanding of functions, no further mathematics is accessible.",
        bigPicture: "A function is a rule that maps each element of one set (the domain) to exactly one element of another set (the range). This 'exactly one output per input' rule is what distinguishes a function from a general relation. Graphically, the vertical line test captures this rule visually. Algebraically, f(x) notation makes the input-output relationship explicit. Every function family — linear, quadratic, exponential, reciprocal — represents a different kind of rule, with a characteristic shape, growth pattern, and set of real-world applications.",
        priorKnowledge: [
            "Arithmetic operations on integers, fractions, and decimals",
            "Order of operations (BIDMAS/PEMDAS)",
            "Basic algebraic notation: variables, expressions, substitution",
            "Coordinate geometry: the x-y plane, plotting and reading points",
            "Linear equations: y = mx + b and the concept of a straight-line relationship",
            "Basic set notation: elements, membership, empty set"
        ],
        topicRoadmap: [
            "What a function is: the input-output rule and the one-output-per-input requirement",
            "Relations vs functions: the vertical line test and mapping diagrams",
            "Function notation: reading, writing, and evaluating f(x), g(x), h(x)",
            "Domain and range: finding, expressing, and restricting input and output sets",
            "Families of functions: linear, quadratic, cubic, exponential, reciprocal, square root",
            "Key features of graphs: intercepts, turning points, asymptotes, end behaviour",
            "Transformations: translations, reflections, stretches, and their algebraic forms",
            "Composite functions: f(g(x)) — chaining two rules",
            "Inverse functions: undoing a function, f⁻¹(x)"
        ]
    },

    concepts: [
        "A function assigns exactly one output to every input in its domain",
        "Function notation f(x) represents the output when x is the input",
        "The domain is the set of all valid inputs; the range is the set of all resulting outputs",
        "Different types of functions produce characteristically different graphs and behaviours",
        "Transformations shift, stretch, or reflect a function's graph without changing its fundamental shape",
        "A composite function applies one function to the output of another",
        "An inverse function reverses the mapping of the original function"
    ],

    theory: "A function f from a set A to a set B is a rule that assigns to each element x in A exactly one element f(x) in B. The set A is the domain; the set of all values f(x) actually produced is the range (or image). The requirement of exactly one output per input is what defines a function and distinguishes it from a general relation. This single constraint — one output per input — is the most important idea in all of elementary analysis.",

    keyDefinitions: {
        "Function": "A rule that assigns to each input exactly one output; written f: A → B",
        "Relation": "Any set of ordered pairs (x, y); a function is a special relation where each x appears at most once",
        "Domain": "The set of all permissible input values (x-values) for a function",
        "Range (Image)": "The set of all output values (y-values) actually produced by a function",
        "Codomain": "The set within which outputs are defined to fall; the range is a subset of the codomain",
        "f(x)": "Function notation: read 'f of x'; the output of function f when the input is x",
        "Independent Variable": "The input variable, conventionally x; its value is chosen freely",
        "Dependent Variable": "The output variable, conventionally y or f(x); its value depends on x",
        "Vertical Line Test": "A graphical test: a curve represents a function if and only if every vertical line intersects it at most once",
        "One-to-One Function (Injective)": "A function where every output corresponds to exactly one input; passes the horizontal line test",
        "Onto Function (Surjective)": "A function whose range equals its codomain — every possible output is achieved",
        "Bijection": "A function that is both one-to-one and onto; has a well-defined inverse",
        "Composite Function": "f(g(x)): apply g first, then apply f to the result",
        "Inverse Function": "f⁻¹(x): the function that reverses f; f⁻¹(f(x)) = x for all x in the domain of f",
        "Asymptote": "A line that a graph approaches but never reaches, as x or y tends to infinity"
    },

    functionVsRelation: {
        definition: "A relation is any pairing of inputs and outputs. A function is a relation where every input has exactly one output. The distinction is captured by: does any x-value appear more than once (with different y-values)? If yes, it is a relation but not a function.",
        verticalLineTest: {
            rule: "Draw (or imagine) every possible vertical line on the graph. If any vertical line crosses the graph more than once, the graph does not represent a function.",
            why: "Each vertical line x = a tests whether input a has more than one output. Two intersection points would mean one input maps to two outputs — violating the function definition.",
            workedExample: {
                problem: "Determine whether each graph represents a function: (a) y = x², (b) x = y², (c) a circle centred at the origin.",
                solution: [
                    "(a) y = x²: any vertical line crosses this parabola at most once (the parabola opens upward). It IS a function.",
                    "(b) x = y²: a vertical line at x = 4, for example, crosses this curve at (4, 2) and (4, −2) — two outputs for one input. It is NOT a function.",
                    "(c) Circle x² + y² = r²: a vertical line through the interior crosses at two points. It is NOT a function."
                ]
            }
        },
        mappingDiagrams: {
            description: "A mapping diagram shows domain elements on the left, range elements on the right, and arrows connecting each input to its output(s). A function has exactly one arrow leaving each domain element.",
            functionExample: "Domain {1, 2, 3} → Range {4, 5, 6}: each of 1→4, 2→5, 3→6. One arrow per input. This IS a function.",
            nonFunctionExample: "Domain {1, 2} → Range {4, 5, 6}: 1→4 and 1→5. Input 1 has two arrows. This is NOT a function.",
            manyToOneNote: "Many-to-one mappings ARE functions: multiple inputs can share one output (e.g. f(x) = x² maps both 3 and −3 to 9). The rule is one output per input, not one input per output."
        }
    },

    functionNotation: {
        reading: "f(x) is read 'f of x'. The letter f names the function; x is the input. f(3) means 'evaluate the function f when the input is 3'.",
        evaluating: {
            principle: "Replace every occurrence of x in the function rule with the given input value, then simplify.",
            workedExamples: [
                {
                    type: "Evaluating at a number",
                    problem: "Given f(x) = 3x² − 2x + 1, find f(4).",
                    solution: [
                        "Step 1 — Substitute x = 4: f(4) = 3(4)² − 2(4) + 1",
                        "Step 2 — Evaluate 4²: f(4) = 3(16) − 2(4) + 1",
                        "Step 3 — Multiply: f(4) = 48 − 8 + 1",
                        "Step 4 — Simplify: f(4) = 41"
                    ]
                },
                {
                    type: "Evaluating at a negative value",
                    problem: "Given g(x) = 2x² + 5x − 3, find g(−2).",
                    solution: [
                        "Step 1 — Substitute x = −2: g(−2) = 2(−2)² + 5(−2) − 3",
                        "Step 2 — Evaluate (−2)²: g(−2) = 2(4) + 5(−2) − 3",
                        "Step 3 — Multiply: g(−2) = 8 − 10 − 3",
                        "Step 4 — Simplify: g(−2) = −5"
                    ]
                },
                {
                    type: "Evaluating at an expression",
                    problem: "Given f(x) = 2x + 3, find f(x + 1).",
                    solution: [
                        "Step 1 — Replace every x with (x + 1): f(x + 1) = 2(x + 1) + 3",
                        "Step 2 — Expand: f(x + 1) = 2x + 2 + 3",
                        "Step 3 — Simplify: f(x + 1) = 2x + 5",
                        "Note: this result is itself a new expression in x, not a number."
                    ]
                },
                {
                    type: "Finding x given f(x)",
                    problem: "Given f(x) = 4x − 7, find x when f(x) = 13.",
                    solution: [
                        "Step 1 — Set f(x) = 13: 4x − 7 = 13",
                        "Step 2 — Add 7 to both sides: 4x = 20",
                        "Step 3 — Divide by 4: x = 5",
                        "Verification: f(5) = 4(5) − 7 = 20 − 7 = 13 ✓"
                    ]
                }
            ]
        }
    },

    domainAndRange: {
        domain: {
            definition: "The domain is the complete set of x-values for which the function produces a real, defined output.",
            restrictions: [
                "Division by zero: any x-value that makes a denominator equal zero must be excluded",
                "Square roots (and even roots) of negatives: any x-value that makes the expression under a root sign negative must be excluded (for real-valued functions)",
                "Logarithms: the argument of a logarithm must be strictly positive",
                "Contextual restrictions: real-world problems may impose additional constraints (e.g. time cannot be negative; population must be a whole number)"
            ],
            workedExamples: [
                {
                    type: "Rational function",
                    problem: "Find the domain of f(x) = (3x + 1)/(x − 5).",
                    solution: [
                        "Step 1 — Identify the restriction: denominator cannot equal zero",
                        "Step 2 — Set denominator = 0: x − 5 = 0 → x = 5",
                        "Step 3 — Exclude x = 5 from the domain",
                        "Domain: all real numbers except x = 5",
                        "Notation: x ∈ ℝ, x ≠ 5  OR  (−∞, 5) ∪ (5, +∞)"
                    ]
                },
                {
                    type: "Square root function",
                    problem: "Find the domain of g(x) = √(2x − 8).",
                    solution: [
                        "Step 1 — Identify the restriction: expression under root must be ≥ 0",
                        "Step 2 — Set up inequality: 2x − 8 ≥ 0",
                        "Step 3 — Solve: 2x ≥ 8 → x ≥ 4",
                        "Domain: x ≥ 4",
                        "Notation: [4, +∞)"
                    ]
                },
                {
                    type: "Combined restrictions",
                    problem: "Find the domain of h(x) = √(x + 3) / (x − 1).",
                    solution: [
                        "Step 1 — Root restriction: x + 3 ≥ 0 → x ≥ −3",
                        "Step 2 — Denominator restriction: x − 1 ≠ 0 → x ≠ 1",
                        "Step 3 — Combine: x ≥ −3 AND x ≠ 1",
                        "Domain: [−3, 1) ∪ (1, +∞)"
                    ]
                }
            ]
        },
        range: {
            definition: "The range is the set of all y-values (outputs) that the function actually produces for inputs in the domain.",
            findingRange: [
                "Graphical method: inspect the graph and identify the set of y-values reached",
                "Algebraic method: set y = f(x), rearrange to express x in terms of y, identify restrictions on y that keep x in the domain",
                "Logical reasoning: use knowledge of the function family (e.g. a squared term is always ≥ 0)"
            ],
            workedExamples: [
                {
                    type: "Quadratic function",
                    problem: "Find the range of f(x) = (x − 2)² + 3.",
                    solution: [
                        "Step 1 — Recognise that (x − 2)² ≥ 0 for all real x",
                        "Step 2 — Therefore (x − 2)² + 3 ≥ 0 + 3 = 3",
                        "Step 3 — The minimum value is 3, achieved when x = 2",
                        "Step 4 — The function increases without bound as x moves away from 2",
                        "Range: f(x) ≥ 3, i.e. [3, +∞)"
                    ]
                },
                {
                    type: "Reciprocal function",
                    problem: "Find the range of g(x) = 1/x (domain: x ≠ 0).",
                    solution: [
                        "Step 1 — Set y = 1/x and rearrange: x = 1/y",
                        "Step 2 — For x to be defined, y ≠ 0",
                        "Step 3 — For any y ≠ 0, there exists x = 1/y in the domain",
                        "Range: all real numbers except 0, i.e. y ≠ 0  OR  (−∞, 0) ∪ (0, +∞)"
                    ]
                }
            ]
        }
    },

    typesOfFunctions: {
        linear: {
            generalForm: "f(x) = mx + b",
            shape: "Straight line",
            keyFeatures: "Slope m (rate of change); y-intercept b; x-intercept at x = −b/m (if m ≠ 0)",
            domain: "All real numbers",
            range: "All real numbers (if m ≠ 0); {b} if m = 0 (constant function)",
            realWorldExample: "Distance travelled at constant speed: d(t) = 60t"
        },
        quadratic: {
            generalForm: "f(x) = ax² + bx + c   (a ≠ 0)",
            vertexForm: "f(x) = a(x − h)² + k   where vertex is (h, k)",
            shape: "Parabola — opens upward if a > 0, downward if a < 0",
            keyFeatures: "Vertex (turning point) at x = −b/(2a); axis of symmetry x = −b/(2a); y-intercept at (0, c); x-intercepts from quadratic formula",
            domain: "All real numbers",
            range: "f(x) ≥ k if a > 0 (minimum at vertex); f(x) ≤ k if a < 0 (maximum at vertex)",
            workedExample: {
                problem: "Find the vertex, axis of symmetry, and range of f(x) = −2x² + 8x − 3.",
                solution: [
                    "Step 1 — Identify a = −2, b = 8, c = −3",
                    "Step 2 — x-coordinate of vertex: x = −b/(2a) = −8/(2 × −2) = −8/−4 = 2",
                    "Step 3 — y-coordinate of vertex: f(2) = −2(4) + 8(2) − 3 = −8 + 16 − 3 = 5",
                    "Step 4 — Vertex: (2, 5); axis of symmetry: x = 2",
                    "Step 5 — Since a = −2 < 0, the parabola opens downward; vertex is a maximum",
                    "Range: f(x) ≤ 5, i.e. (−∞, 5]"
                ]
            },
            realWorldExample: "Trajectory of a projectile: h(t) = −5t² + 20t + 2"
        },
        exponential: {
            generalForm: "f(x) = aˣ   (a > 0, a ≠ 1)",
            growthForm: "f(x) = a · bˣ   where b > 1 (growth) or 0 < b < 1 (decay)",
            shape: "Exponential curve — always positive, always above x-axis",
            keyFeatures: "y-intercept at (0, 1) for f(x) = aˣ; horizontal asymptote at y = 0; never crosses x-axis",
            domain: "All real numbers",
            range: "f(x) > 0 for all x (strictly positive)",
            workedExample: {
                problem: "Sketch the key features of f(x) = 2ˣ and g(x) = (1/2)ˣ.",
                solution: [
                    "f(x) = 2ˣ: y-intercept (0, 1); passes through (1, 2), (2, 4), (−1, 0.5); increases rapidly as x → +∞; approaches 0 as x → −∞ (asymptote y = 0)",
                    "g(x) = (1/2)ˣ: y-intercept (0, 1); passes through (1, 0.5), (2, 0.25), (−1, 2); decreases as x → +∞; approaches 0 as x → +∞ (asymptote y = 0)",
                    "Key relationship: g(x) = (1/2)ˣ = 2⁻ˣ — the decay function is a reflection of the growth function in the y-axis"
                ]
            },
            realWorldExample: "Population growth: P(t) = 500 · 1.03ᵗ; Radioactive decay: N(t) = N₀ · (1/2)^(t/T)"
        },
        reciprocal: {
            generalForm: "f(x) = k/x   (k ≠ 0)",
            shape: "Hyperbola — two branches, one in quadrants I and III (k > 0) or II and IV (k < 0)",
            keyFeatures: "Vertical asymptote x = 0; horizontal asymptote y = 0; no intercepts",
            domain: "All real numbers except x = 0",
            range: "All real numbers except y = 0",
            realWorldExample: "Speed and travel time at fixed distance: t = d/v; Boyle's Law: P = k/V"
        },
        squareRoot: {
            generalForm: "f(x) = √x   or   f(x) = √(ax + b)",
            shape: "Half-parabola — starts at a point and increases (curving flattening)",
            keyFeatures: "Starts at x = 0 (or the domain start); always ≥ 0; no vertical asymptote",
            domain: "x ≥ 0 for f(x) = √x",
            range: "f(x) ≥ 0",
            realWorldExample: "Period of a pendulum: T ∝ √L; speed from kinetic energy: v = √(2KE/m)"
        },
        cubic: {
            generalForm: "f(x) = ax³ + bx² + cx + d   (a ≠ 0)",
            shape: "S-shaped curve with one or two turning points; both ends go to opposite infinities",
            keyFeatures: "No restriction on domain or range; may cross x-axis up to three times; always has point symmetry about its inflection point for f(x) = x³",
            domain: "All real numbers",
            range: "All real numbers",
            realWorldExample: "Volume of a cube: V(s) = s³; certain economic cost functions"
        }
    },

    graphTransformations: {
        overview: "Given a base function f(x), transformations produce a new function g(x) whose graph has a predictable geometric relationship to the graph of f(x). All transformations are described by modifications to the equation.",
        translations: {
            vertical: {
                rule: "g(x) = f(x) + k",
                effect: "Shifts the graph k units upward (k > 0) or |k| units downward (k < 0)",
                example: "g(x) = x² + 3 shifts y = x² three units upward; vertex moves from (0,0) to (0,3)"
            },
            horizontal: {
                rule: "g(x) = f(x − h)",
                effect: "Shifts the graph h units to the right (h > 0) or |h| units to the left (h < 0)",
                counterintuitive: "The sign inside the bracket is opposite to the direction of shift: f(x − 3) shifts RIGHT 3",
                example: "g(x) = (x − 4)² shifts y = x² four units to the right; vertex moves from (0,0) to (4,0)"
            }
        },
        reflections: {
            inXAxis: {
                rule: "g(x) = −f(x)",
                effect: "Reflects the graph in the x-axis; every y-value changes sign"
            },
            inYAxis: {
                rule: "g(x) = f(−x)",
                effect: "Reflects the graph in the y-axis; every x-value changes sign"
            }
        },
        stretches: {
            verticalStretch: {
                rule: "g(x) = a · f(x)",
                effect: "Stretches vertically by factor a (if a > 1) or compresses (if 0 < a < 1); each y-value is multiplied by a"
            },
            horizontalStretch: {
                rule: "g(x) = f(bx)",
                effect: "Compresses horizontally by factor b (if b > 1) or stretches (if 0 < b < 1); each x-value is divided by b",
                counterintuitive: "Multiplying inside compresses (not stretches) horizontally — the opposite of vertical"
            }
        },
        combinedTransformations: {
            generalForm: "g(x) = a · f(bx − h) + k",
            orderOfOperations: [
                "1. Horizontal stretch/compression by factor 1/b: replace x with bx",
                "2. Horizontal translation by h/b: replace bx with b(x − h/b)",
                "3. Vertical stretch/compression by factor a",
                "4. Reflection in x-axis if a < 0",
                "5. Vertical translation by k"
            ],
            workedExample: {
                problem: "Describe the transformations that map f(x) = x² to g(x) = −3(x + 2)² + 5.",
                solution: [
                    "Step 1 — Identify parameters: a = −3, h = −2 (since (x − (−2))), k = 5",
                    "Step 2 — Horizontal translation: (x + 2) means h = −2, so shift LEFT 2 units",
                    "Step 3 — Vertical stretch: multiply by 3, so stretch vertically by factor 3",
                    "Step 4 — Reflection: a = −3 < 0, so reflect in the x-axis (parabola opens downward)",
                    "Step 5 — Vertical translation: +5, so shift UP 5 units",
                    "Net effect: the vertex of y = x² at (0, 0) maps to (−2, 5); the parabola opens downward and is three times as steep"
                ]
            }
        }
    },

    compositeFunctions: {
        definition: "The composite function f(g(x)), written (f ∘ g)(x), applies g first and then applies f to the result. The output of g becomes the input of f.",
        notation: "(f ∘ g)(x) = f(g(x))",
        domainNote: "The domain of f ∘ g is the set of all x in the domain of g for which g(x) is in the domain of f.",
        workedExamples: [
            {
                type: "Evaluating a composite at a number",
                problem: "Given f(x) = x² + 1 and g(x) = 2x − 3, find f(g(5)).",
                solution: [
                    "Step 1 — Evaluate g(5) first: g(5) = 2(5) − 3 = 10 − 3 = 7",
                    "Step 2 — Use the result as input for f: f(7) = 7² + 1 = 49 + 1 = 50",
                    "Therefore f(g(5)) = 50"
                ]
            },
            {
                type: "Finding the composite function as an expression",
                problem: "Given f(x) = x² + 1 and g(x) = 2x − 3, find f(g(x)).",
                solution: [
                    "Step 1 — Write f(g(x)) = f(2x − 3)",
                    "Step 2 — Replace every x in f(x) with (2x − 3): f(2x − 3) = (2x − 3)² + 1",
                    "Step 3 — Expand (2x − 3)²: = 4x² − 12x + 9",
                    "Step 4 — Add 1: f(g(x)) = 4x² − 12x + 10",
                    "Verification at x = 5: f(g(5)) = 4(25) − 12(5) + 10 = 100 − 60 + 10 = 50 ✓"
                ]
            },
            {
                type: "Order matters: f(g(x)) ≠ g(f(x)) in general",
                problem: "Using the same f and g, find g(f(x)) and compare to f(g(x)).",
                solution: [
                    "g(f(x)) = g(x² + 1) = 2(x² + 1) − 3 = 2x² + 2 − 3 = 2x² − 1",
                    "f(g(x)) = 4x² − 12x + 10 (from above)",
                    "These are different functions: f(g(x)) ≠ g(f(x)). Composition is not commutative."
                ]
            }
        ]
    },

    inverseFunctions: {
        definition: "The inverse function f⁻¹ reverses the mapping of f: if f(a) = b, then f⁻¹(b) = a. The domain of f⁻¹ is the range of f, and vice versa.",
        condition: "A function has an inverse that is also a function if and only if it is one-to-one (injective) — it passes the horizontal line test.",
        graphRelationship: "The graph of f⁻¹ is the reflection of the graph of f in the line y = x.",
        verificationProperty: "f⁻¹(f(x)) = x for all x in the domain of f, and f(f⁻¹(x)) = x for all x in the domain of f⁻¹.",
        findingInverse: {
            steps: [
                "Write y = f(x)",
                "Swap x and y (exchange the roles of input and output)",
                "Rearrange to make y the subject",
                "Write the result as f⁻¹(x)"
            ],
            workedExamples: [
                {
                    type: "Linear function",
                    problem: "Find the inverse of f(x) = 3x − 7.",
                    solution: [
                        "Step 1 — Write y = 3x − 7",
                        "Step 2 — Swap x and y: x = 3y − 7",
                        "Step 3 — Rearrange for y: x + 7 = 3y → y = (x + 7)/3",
                        "Step 4 — Write: f⁻¹(x) = (x + 7)/3",
                        "Verification: f(f⁻¹(x)) = 3·((x+7)/3) − 7 = (x + 7) − 7 = x ✓",
                        "f⁻¹(f(x)) = ((3x − 7) + 7)/3 = 3x/3 = x ✓"
                    ]
                },
                {
                    type: "Function with a restricted domain",
                    problem: "Find the inverse of f(x) = x² for x ≥ 0.",
                    solution: [
                        "Step 1 — Write y = x² (with x ≥ 0)",
                        "Step 2 — Swap x and y: x = y²",
                        "Step 3 — Rearrange: y = √x (taking positive root since original domain x ≥ 0)",
                        "Step 4 — Write: f⁻¹(x) = √x, with domain x ≥ 0",
                        "Note: the domain restriction on f (x ≥ 0) ensures f is one-to-one; without it, f(x) = x² would not have an inverse that is a function"
                    ]
                }
            ]
        }
    },

    topicSummary: {
        coreInsights: [
            "The single most important property of a function is that every input maps to exactly one output — this rule governs everything that follows.",
            "f(x) is not 'f times x' — it is the output of function f at input x. Misreading this notation causes persistent errors at all levels.",
            "Domain and range are not the same thing: domain is about what inputs are allowed (determined by the rule); range is about what outputs are actually produced (determined by both the rule and the domain).",
            "The vertical line test checks whether a graph represents a function; the horizontal line test checks whether a function has an inverse that is also a function.",
            "Transformations follow a precise dictionary: outside the function changes y (vertical); inside the function changes x (horizontal) and the effect is counterintuitive — f(x − h) shifts RIGHT by h.",
            "Composite functions are applied right to left: in f(g(x)), g is applied first. Order matters: f(g(x)) and g(f(x)) are generally different.",
            "A function has an inverse only if it is one-to-one. If not, the domain must be restricted to make it so before finding the inverse.",
            "Every function family has a characteristic shape that reflects its growth pattern: linear grows constantly, quadratic accelerates, exponential explodes, reciprocal shrinks asymptotically."
        ],
        keyFormulas: {
            vertexOfParabola:          "x = −b/(2a)",
            slopeOfLinear:             "m = (f(x₂) − f(x₁))/(x₂ − x₁)",
            compositeFunction:         "(f ∘ g)(x) = f(g(x))",
            inverseVerification:       "f⁻¹(f(x)) = x  and  f(f⁻¹(x)) = x",
            verticalTranslation:       "g(x) = f(x) + k",
            horizontalTranslation:     "g(x) = f(x − h)  [shifts RIGHT by h]",
            verticalStretch:           "g(x) = a · f(x)",
            reflectionInXAxis:         "g(x) = −f(x)",
            generalTransformation:     "g(x) = a · f(bx − h) + k"
        },
        functionFamilySummary: {
            linear:      { form: "mx + b",       shape: "Straight line",       domain: "ℝ",     range: "ℝ (m≠0)" },
            quadratic:   { form: "ax² + bx + c", shape: "Parabola",            domain: "ℝ",     range: "≥ or ≤ vertex y" },
            exponential: { form: "a · bˣ",        shape: "Exponential curve",   domain: "ℝ",     range: "y > 0" },
            reciprocal:  { form: "k/x",           shape: "Hyperbola",           domain: "x ≠ 0", range: "y ≠ 0" },
            squareRoot:  { form: "√x",            shape: "Half-parabola",       domain: "x ≥ 0", range: "y ≥ 0" },
            cubic:       { form: "ax³ + ...",     shape: "S-curve",             domain: "ℝ",     range: "ℝ" }
        },
        commonMistakesToAvoid: [
            "Reading f(x) as multiplication — f(x) means 'f evaluated at x', not f × x",
            "Confusing domain and range — domain is inputs (x), range is outputs (y)",
            "Forgetting that (x + 2) in f(x + 2) shifts LEFT, not right — the horizontal translation is counterintuitive",
            "Reversing the composition order — in f(g(x)), apply g FIRST, then f",
            "Finding the inverse of a many-to-one function without first restricting the domain",
            "Treating f⁻¹(x) as 1/f(x) — the superscript −1 denotes the inverse function, not a reciprocal"
        ],
        connections: [
            "Linear equations: every linear equation y = mx + b defines a linear function — functions extend this to all equation types",
            "Calculus: the derivative measures the rate of change of a function — f'(x) is itself a function derived from f",
            "Statistics: a regression model is a function fitted to data; residuals measure how far data deviate from the function",
            "Computer science: every function in programming corresponds to a mathematical function — input(s) → exactly one output",
            "Physics: every physical law (F = ma, E = mc², V = IR) is a function relating physical quantities",
            "Trigonometry: sin, cos, tan are functions — understanding function properties (domain, range, period, inverse) is essential for trigonometry"
        ],
        examReadinessChecklist: [
            "Can you apply the vertical line test to any graph and explain why it works?",
            "Can you evaluate f(a), f(−a), and f(a + h) for any given function?",
            "Can you find the domain of a rational function and a square root function?",
            "Can you identify the transformation from f(x) to g(x) = a·f(bx − h) + k for each parameter?",
            "Can you find f(g(x)) and g(f(x)) and explain why they differ?",
            "Can you find the inverse of a one-to-one function and verify it using f(f⁻¹(x)) = x?"
        ]
    }
},

angles: {
    title: "Angles: Types, Properties, and Geometric Relationships",

    databaseLinks: {
        misconceptions: [
            'angleBasics',
            'angleRelationships',
            'anglesInTriangles',
            'anglesInPolygons',
            'circleAngles'
        ],
        contextualScenarios: [
            'angleBasics',
            'angleRelationships',
            'anglesInTriangles',
            'anglesInPolygons'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'graphingPractice',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'workedExampleAnalysis'
        ],
        assessmentRubrics: [
            'remember',
            'understand',
            'apply',
            'analyze',
            'evaluate',
            'create'
        ],
        assessmentQuestions: [
            'angleBasics',
            'angleRelationships',
            'anglesInTriangles',
            'anglesInPolygons'
        ]
    },

    conceptLinks: {
        "An angle is a measure of rotation between two rays sharing a common endpoint": {
            misconceptions:      ['angleBasics'],
            scenarios:           ['angleBasics'],
            studyTips:           ['diagrams', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['angleBasics']
        },
        "Angles on a straight line sum to 180° and angles around a point sum to 360°": {
            misconceptions:      ['angleBasics', 'angleRelationships'],
            scenarios:           ['angleBasics'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['angleBasics']
        },
        "Parallel lines cut by a transversal produce equal and supplementary angle pairs": {
            misconceptions:      ['angleRelationships'],
            scenarios:           ['angleRelationships'],
            studyTips:           ['diagrams', 'comparisonTables', 'mnemonics'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['angleRelationships']
        },
        "The interior angles of a triangle sum to 180°": {
            misconceptions:      ['anglesInTriangles'],
            scenarios:           ['anglesInTriangles'],
            studyTips:           ['diagrams', 'flashcards', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['anglesInTriangles']
        },
        "The sum of interior angles of a polygon depends on the number of sides": {
            misconceptions:      ['anglesInPolygons'],
            scenarios:           ['anglesInPolygons'],
            studyTips:           ['comparisonTables', 'mnemonics', 'workedExampleAnalysis'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['anglesInPolygons']
        }
    },

    topicIntroduction: {
        overview: "An angle is the fundamental unit of direction and rotation. Every time two lines meet, an angle is formed; every structure, path, and shape is defined by the angles within it. In this lesson we develop fluency in classifying, measuring, calculating, and reasoning about angles — in isolated pairs, in triangles, in polygons, and in circles — building the geometric intuition that underpins all further work in shape, trigonometry, and proof.",
        whyItMatters: "Angles appear in every quantitative discipline. Architects specify the pitch of a roof in degrees. Engineers calculate the angle of a structural beam to ensure load-bearing capacity. Navigators use bearings — angles measured from north — to plot courses. Animators use rotation angles to move objects on screen. Astronomers measure the angular separation of stars. Without a precise understanding of angle, none of these fields can function.",
        bigPicture: "All angle reasoning reduces to two master facts: angles on a straight line sum to 180°, and angles around a point sum to 360°. Every other angle rule — vertically opposite angles, co-interior angles, the interior angle sum of a triangle, the formula for polygon angles — is a logical consequence of these two facts. Understanding the derivation, not just the rule, is what allows a student to reconstruct any forgotten formula under exam conditions.",
        priorKnowledge: [
            "Basic geometric vocabulary: point, line, line segment, ray, vertex",
            "Use of a protractor to measure and draw angles",
            "Familiarity with degrees as the unit of angle measurement",
            "Basic arithmetic: addition and subtraction of whole numbers and simple fractions",
            "Introduction to parallel lines and what it means for lines to be parallel"
        ],
        topicRoadmap: [
            "What an angle is and how it is named and measured",
            "Classifying angles: acute, right, obtuse, straight, reflex, full turn",
            "Angle relationships at a point: vertically opposite, complementary, supplementary, angles on a line, angles around a point",
            "Angles formed by parallel lines and a transversal: corresponding, alternate, co-interior",
            "Angles in triangles: the 180° sum, exterior angles, and special triangles",
            "Angles in polygons: interior and exterior angle sums, regular polygons",
            "Introduction to circle theorems: angles at centre and circumference"
        ]
    },

    concepts: [
        "An angle is a measure of rotation between two rays sharing a common endpoint",
        "Angles are classified by their size: acute, right, obtuse, straight, reflex, and full turn",
        "Angles on a straight line sum to 180° and angles around a point sum to 360°",
        "Vertically opposite angles are equal",
        "Parallel lines cut by a transversal produce equal corresponding angles, equal alternate angles, and supplementary co-interior angles",
        "The interior angles of a triangle sum to 180°",
        "The exterior angle of a triangle equals the sum of the two non-adjacent interior angles",
        "The sum of interior angles of an n-sided polygon is (n − 2) × 180°",
        "Each interior angle of a regular polygon equals (n − 2) × 180° ÷ n",
        "The angle at the centre of a circle is twice the angle at the circumference subtended by the same arc"
    ],

    theory: "An angle is formed when two rays meet at a common point called the vertex. It measures the amount of rotation from one ray to the other and is expressed in degrees (°) or radians. All angle reasoning in Euclidean geometry derives from the straight-line postulate (180° on a line) and the full-rotation postulate (360° around a point), from which every other angle property can be logically deduced.",

    keyDefinitions: {
        "Angle": "The measure of rotation between two rays (arms) sharing a common endpoint (vertex), expressed in degrees",
        "Vertex": "The point where the two arms of an angle meet",
        "Acute Angle": "An angle strictly between 0° and 90°",
        "Right Angle": "An angle of exactly 90°; the arms are perpendicular",
        "Obtuse Angle": "An angle strictly between 90° and 180°",
        "Straight Angle": "An angle of exactly 180°; the arms form a straight line",
        "Reflex Angle": "An angle strictly between 180° and 360°",
        "Full Turn": "An angle of exactly 360°; a complete rotation",
        "Complementary Angles": "Two angles that sum to 90°",
        "Supplementary Angles": "Two angles that sum to 180°",
        "Vertically Opposite Angles": "The non-adjacent angles formed when two straight lines intersect; always equal",
        "Transversal": "A line that crosses two or more other lines",
        "Corresponding Angles": "Angles in the same position at each intersection when a transversal crosses parallel lines; equal",
        "Alternate Angles": "Angles on opposite sides of a transversal between two parallel lines; equal (form a Z-shape)",
        "Co-interior Angles": "Angles on the same side of a transversal between two parallel lines; sum to 180° (form a C or U-shape)",
        "Interior Angle": "An angle inside a polygon formed between two adjacent sides",
        "Exterior Angle": "The angle formed between one side of a polygon and the extension of the adjacent side"
    },

    angleTypes: {
        acute:   { range: "0° < θ < 90°",   description: "Less than a right angle",       example: "45°, 60°, 89°" },
        right:   { range: "θ = 90°",         description: "Exactly a quarter turn",         example: "Corner of a square" },
        obtuse:  { range: "90° < θ < 180°",  description: "Greater than right, less than straight", example: "120°, 135°" },
        straight:{ range: "θ = 180°",        description: "A straight line",                example: "A flat surface" },
        reflex:  { range: "180° < θ < 360°", description: "Greater than a straight angle",  example: "270°, 300°" },
        fullTurn:{ range: "θ = 360°",        description: "A complete rotation",             example: "One full spin" }
    },

    angleRelationshipsAtAPoint: {
        anglesOnALine: {
            rule: "Angles on a straight line sum to 180°",
            reason: "A straight line is a 180° angle; any angles sitting on one side of it must partition that 180°",
            workedExample: {
                problem: "Two angles on a straight line are x and 3x + 20°. Find x.",
                solution: [
                    "Step 1 — Apply the rule: x + (3x + 20°) = 180°",
                    "Step 2 — Simplify: 4x + 20° = 180°",
                    "Step 3 — Subtract 20°: 4x = 160°",
                    "Step 4 — Divide by 4: x = 40°",
                    "Check: 40° + (120° + 20°) = 40° + 140° = 180° ✓"
                ]
            }
        },
        anglesAroundAPoint: {
            rule: "Angles around a point sum to 360°",
            reason: "A full rotation is 360°; all angles meeting at a single point must account for the complete turn",
            workedExample: {
                problem: "Three angles meet at a point: 90°, 2x, and x + 30°. Find x.",
                solution: [
                    "Step 1 — Apply the rule: 90° + 2x + (x + 30°) = 360°",
                    "Step 2 — Simplify: 3x + 120° = 360°",
                    "Step 3 — Subtract 120°: 3x = 240°",
                    "Step 4 — Divide by 3: x = 80°",
                    "Angles: 90°, 160°, 110°",
                    "Check: 90° + 160° + 110° = 360° ✓"
                ]
            }
        },
        verticallyOppositeAngles: {
            rule: "Vertically opposite angles are equal",
            reason: "Each pair of vertically opposite angles is supplementary with the same adjacent angle; since both equal 180° minus the same angle, they must be equal to each other",
            workedExample: {
                problem: "Two straight lines intersect. One angle is 3x − 10° and its vertically opposite angle is x + 50°. Find all four angles.",
                solution: [
                    "Step 1 — Set vertically opposite angles equal: 3x − 10° = x + 50°",
                    "Step 2 — Subtract x: 2x − 10° = 50°",
                    "Step 3 — Add 10°: 2x = 60°",
                    "Step 4 — Divide by 2: x = 30°",
                    "Angle 1 = 3(30°) − 10° = 80°; Angle 3 (opposite) = 80°",
                    "Angle 2 = 180° − 80° = 100°; Angle 4 (opposite) = 100°",
                    "Check: 80° + 100° + 80° + 100° = 360° ✓"
                ]
            }
        },
        complementaryAndSupplementary: {
            complementary: {
                rule: "Two complementary angles sum to 90°",
                workedExample: {
                    problem: "One angle is 3x + 5° and its complement is x + 9°. Find both angles.",
                    solution: [
                        "Step 1 — Set up: (3x + 5°) + (x + 9°) = 90°",
                        "Step 2 — Simplify: 4x + 14° = 90°",
                        "Step 3 — Subtract 14°: 4x = 76°",
                        "Step 4 — Divide by 4: x = 19°",
                        "Angle 1 = 3(19°) + 5° = 62°; Angle 2 = 19° + 9° = 28°",
                        "Check: 62° + 28° = 90° ✓"
                    ]
                }
            },
            supplementary: {
                rule: "Two supplementary angles sum to 180°",
                workedExample: {
                    problem: "An angle is 40° more than twice its supplement. Find both angles.",
                    solution: [
                        "Step 1 — Let the angle be a. Its supplement is 180° − a.",
                        "Step 2 — Form the equation: a = 2(180° − a) + 40°",
                        "Step 3 — Expand: a = 360° − 2a + 40°",
                        "Step 4 — Add 2a: 3a = 400°",
                        "Step 5 — Divide by 3: a = 133.3°",
                        "Supplement = 180° − 133.3° = 46.7°",
                        "Check: 133.3° = 2(46.7°) + 40° = 93.4° + 40° = 133.4° ✓ (rounding)"
                    ]
                }
            }
        }
    },

    parallelLinesAndTransversal: {
        overview: "When a transversal crosses two parallel lines, three types of angle pairs are formed. All three types can be identified by their position and shape, and each has a definite relationship.",
        correspondingAngles: {
            rule: "Corresponding angles are equal (F-shape)",
            position: "Same side of the transversal, one at each intersection, both above or both below the parallel lines",
            reason: "Corresponding angles are in identical positions relative to their intersection — the parallel lines create geometrically identical crossing situations",
            workedExample: {
                problem: "A transversal crosses two parallel lines. One corresponding angle is 3x + 15° and the other is 2x + 45°. Find x and the angle.",
                solution: [
                    "Step 1 — Set equal (corresponding angles): 3x + 15° = 2x + 45°",
                    "Step 2 — Subtract 2x: x + 15° = 45°",
                    "Step 3 — Subtract 15°: x = 30°",
                    "Angle = 3(30°) + 15° = 105°",
                    "Check: 2(30°) + 45° = 60° + 45° = 105° ✓"
                ]
            }
        },
        alternateAngles: {
            rule: "Alternate angles are equal (Z-shape or N-shape)",
            position: "Opposite sides of the transversal, between the two parallel lines",
            reason: "Alternate angles can be shown equal using the fact that corresponding angles are equal and vertically opposite angles are equal — they are equal by a two-step chain of reasoning",
            workedExample: {
                problem: "Two parallel lines are cut by a transversal. One alternate angle is 4x − 20° and the other is 2x + 30°. Find x.",
                solution: [
                    "Step 1 — Set equal (alternate angles): 4x − 20° = 2x + 30°",
                    "Step 2 — Subtract 2x: 2x − 20° = 30°",
                    "Step 3 — Add 20°: 2x = 50°",
                    "Step 4 — Divide by 2: x = 25°",
                    "Each alternate angle = 4(25°) − 20° = 80°",
                    "Check: 2(25°) + 30° = 50° + 30° = 80° ✓"
                ]
            }
        },
        coInteriorAngles: {
            rule: "Co-interior angles sum to 180° (C-shape or U-shape)",
            position: "Same side of the transversal, between the two parallel lines",
            reason: "Co-interior angles are supplementary because corresponding angles are equal, and co-interior and corresponding angles together form a straight line (180°)",
            workedExample: {
                problem: "Two co-interior angles are 3x + 10° and x + 50°. Find x and both angles.",
                solution: [
                    "Step 1 — Apply rule: (3x + 10°) + (x + 50°) = 180°",
                    "Step 2 — Simplify: 4x + 60° = 180°",
                    "Step 3 — Subtract 60°: 4x = 120°",
                    "Step 4 — Divide by 4: x = 30°",
                    "Angle 1 = 3(30°) + 10° = 100°; Angle 2 = 30° + 50° = 80°",
                    "Check: 100° + 80° = 180° ✓"
                ]
            }
        },
        provingLinesParallel: {
            rule: "If any one of the three angle relationships holds (corresponding equal, alternate equal, co-interior supplementary), the lines are parallel",
            note: "These are biconditional relationships — the angle property holds if AND ONLY IF the lines are parallel"
        }
    },

    anglesInTriangles: {
        interiorAngleSum: {
            rule: "The three interior angles of any triangle sum to 180°",
            proof: {
                method: "Draw a line through one vertex parallel to the opposite side. The three angles at the vertex — the two alternate angles and the vertex angle — form a straight line (180°), equalling the three interior angles of the triangle.",
                significance: "This proof connects the 180° triangle rule directly to alternate angles in parallel lines — both rest on the same foundational postulate."
            },
            workedExample: {
                problem: "A triangle has angles 3x + 10°, 2x − 5°, and x + 15°. Find all three angles.",
                solution: [
                    "Step 1 — Apply rule: (3x + 10°) + (2x − 5°) + (x + 15°) = 180°",
                    "Step 2 — Simplify: 6x + 20° = 180°",
                    "Step 3 — Subtract 20°: 6x = 160°",
                    "Step 4 — Divide by 6: x = 26.67°",
                    "Angles: 3(26.67°) + 10° = 90°; 2(26.67°) − 5° = 48.3°; 26.67° + 15° = 41.7°",
                    "Check: 90° + 48.3° + 41.7° = 180° ✓"
                ]
            }
        },
        exteriorAngleTheorem: {
            rule: "The exterior angle of a triangle equals the sum of the two non-adjacent (remote) interior angles",
            reason: "Interior angles sum to 180°; the exterior angle and the adjacent interior angle also sum to 180° (straight line). Therefore the exterior angle equals the sum of the other two interior angles.",
            workedExample: {
                problem: "The exterior angle of a triangle is 115°. One non-adjacent interior angle is 3x + 5°. The other is 2x. Find x and both interior angles.",
                solution: [
                    "Step 1 — Apply exterior angle theorem: (3x + 5°) + 2x = 115°",
                    "Step 2 — Simplify: 5x + 5° = 115°",
                    "Step 3 — Subtract 5°: 5x = 110°",
                    "Step 4 — Divide by 5: x = 22°",
                    "Angle 1 = 3(22°) + 5° = 71°; Angle 2 = 2(22°) = 44°",
                    "Check: 71° + 44° = 115° ✓",
                    "Third interior angle = 180° − 115° = 65°",
                    "Full check: 71° + 44° + 65° = 180° ✓"
                ]
            }
        },
        specialTriangles: {
            equilateral: {
                description: "All three sides equal; all three angles equal 60°",
                angleProperty: "Each angle = 180° ÷ 3 = 60°"
            },
            isosceles: {
                description: "Two sides equal; the two base angles (opposite the equal sides) are equal",
                angleProperty: "If the apex angle is A, each base angle = (180° − A) ÷ 2",
                workedExample: {
                    problem: "An isosceles triangle has an apex angle of 40°. Find the base angles.",
                    solution: [
                        "Step 1 — Remaining angle sum = 180° − 40° = 140°",
                        "Step 2 — Divide equally: each base angle = 140° ÷ 2 = 70°",
                        "Check: 40° + 70° + 70° = 180° ✓"
                    ]
                }
            },
            rightAngled: {
                description: "One angle is exactly 90°; the other two are complementary (sum to 90°)",
                angleProperty: "The two acute angles sum to 90°"
            }
        }
    },

    anglesInPolygons: {
        interiorAngleSum: {
            formula: "(n − 2) × 180°",
            derivation: "Any polygon can be divided into (n − 2) triangles by drawing diagonals from one vertex. Each triangle contributes 180°, giving (n − 2) × 180° in total.",
            table: {
                triangle:  { n: 3, sum: "1 × 180° = 180°"  },
                quadrilateral: { n: 4, sum: "2 × 180° = 360°" },
                pentagon:  { n: 5, sum: "3 × 180° = 540°"  },
                hexagon:   { n: 6, sum: "4 × 180° = 720°"  },
                octagon:   { n: 8, sum: "6 × 180° = 1080°" },
                decagon:   { n: 10, sum: "8 × 180° = 1440°" }
            },
            workedExample: {
                problem: "A hexagon has five known angles: 100°, 120°, 95°, 130°, and 110°. Find the sixth angle.",
                solution: [
                    "Step 1 — Interior angle sum for hexagon: (6 − 2) × 180° = 4 × 180° = 720°",
                    "Step 2 — Sum of known angles: 100° + 120° + 95° + 130° + 110° = 555°",
                    "Step 3 — Unknown angle: 720° − 555° = 165°",
                    "Check: 555° + 165° = 720° ✓"
                ]
            }
        },
        exteriorAngleSum: {
            rule: "The exterior angles of any convex polygon always sum to 360°",
            reason: "Walking around the perimeter of any convex polygon and turning at each vertex completes exactly one full rotation of 360°, regardless of the number of sides.",
            workedExample: {
                problem: "A polygon has exterior angles of 50°, 70°, 45°, 60°, and x°. Find x and state how many sides the polygon has.",
                solution: [
                    "Step 1 — Apply rule: 50° + 70° + 45° + 60° + x° = 360°",
                    "Step 2 — Sum known: 225° + x° = 360°",
                    "Step 3 — Solve: x° = 135°",
                    "Step 4 — Number of sides = number of exterior angles = 5 (pentagon)",
                    "Check: 50° + 70° + 45° + 60° + 135° = 360° ✓"
                ]
            }
        },
        regularPolygons: {
            interiorAngle: {
                formula: "Each interior angle = (n − 2) × 180° ÷ n",
                workedExample: {
                    problem: "Find the interior and exterior angle of a regular octagon.",
                    solution: [
                        "Interior angle = (8 − 2) × 180° ÷ 8 = 6 × 180° ÷ 8 = 1080° ÷ 8 = 135°",
                        "Exterior angle = 360° ÷ 8 = 45°",
                        "Check: interior + exterior = 135° + 45° = 180° ✓ (they form a straight line)"
                    ]
                }
            },
            exteriorAngle: {
                formula: "Each exterior angle = 360° ÷ n",
                note: "For a regular polygon, every exterior angle is equal; the formula 360° ÷ n directly gives each one"
            },
            findingNumberOfSides: {
                workedExample: {
                    problem: "A regular polygon has an interior angle of 150°. How many sides does it have?",
                    solution: [
                        "Step 1 — Find the exterior angle: 180° − 150° = 30°",
                        "Step 2 — Use exterior angle formula: 360° ÷ n = 30°",
                        "Step 3 — Solve for n: n = 360° ÷ 30° = 12",
                        "The polygon is a regular 12-sided polygon (dodecagon)",
                        "Check: interior angle = (12 − 2) × 180° ÷ 12 = 1800° ÷ 12 = 150° ✓"
                    ]
                }
            }
        }
    },

    circleAngleTheorems: {
        overview: "Circle theorems are angle rules specific to points, chords, and arcs within a circle. They are all provable from the isosceles triangle property (any two radii are equal) and the straight-line rule.",
        angleAtCentreAndCircumference: {
            rule: "The angle subtended at the centre by an arc is twice the angle subtended at the circumference by the same arc",
            workedExample: {
                problem: "The angle at the centre is 3x + 10° and the angle at the circumference subtended by the same arc is x + 35°. Find x and both angles.",
                solution: [
                    "Step 1 — Apply theorem: 3x + 10° = 2(x + 35°)",
                    "Step 2 — Expand: 3x + 10° = 2x + 70°",
                    "Step 3 — Subtract 2x: x + 10° = 70°",
                    "Step 4 — Subtract 10°: x = 60°",
                    "Centre angle = 3(60°) + 10° = 190° — ERROR SIGNAL: a centre angle > 180° is possible (reflex) but check: circumference angle = 60° + 35° = 95°; 2 × 95° = 190° ✓",
                    "Check: 190° = 2 × 95° ✓"
                ]
            }
        },
        angleInSemicircle: {
            rule: "The angle in a semicircle (angle subtended by a diameter at the circumference) is always 90°",
            reason: "The diameter subtends a 180° angle at the centre; by the centre-circumference theorem, the angle at the circumference is 180° ÷ 2 = 90°"
        },
        anglesInSameSegment: {
            rule: "Angles in the same segment of a circle (subtended by the same chord) are equal",
            reason: "Each is half the same central angle, by the centre-circumference theorem"
        }
    },

    topicSummary: {
        coreInsights: [
            "Every angle rule derives from two master facts: angles on a straight line = 180°, and angles around a point = 360°. Memorise these two; derive everything else.",
            "Vertically opposite angles are equal because each is supplementary to the same angle — a two-line consequence of the straight-line rule.",
            "The three parallel-line angle pairs (corresponding, alternate, co-interior) are identified by their shape on the diagram — F, Z, and C respectively. Equal, equal, supplementary.",
            "The 180° triangle rule is a consequence of the alternate angles rule, not an independent fact — the proof using a parallel line through a vertex makes this connection explicit.",
            "The exterior angle of a triangle equals the sum of the two remote interior angles — this follows directly from the 180° rule and the straight-line rule, with no new assumptions.",
            "Polygon interior angle sums are generated by triangulation: (n − 2) triangles, each contributing 180°. The exterior angle sum is always 360° for any convex polygon.",
            "For regular polygons, interior and exterior angles are complementary to 180° and the exterior angle formula 360° ÷ n gives the fastest route to finding the number of sides.",
            "Circle theorems are provable, not arbitrary — the angle at the centre being double the angle at the circumference follows from the isosceles triangle formed by two radii."
        ],
        keyFormulas: {
            anglesOnALine:             "a + b + ... = 180°",
            anglesAroundAPoint:        "a + b + ... = 360°",
            verticallyOpposite:        "a = b (vertically opposite)",
            correspondingAngles:       "a = b (parallel lines — F-shape)",
            alternateAngles:           "a = b (parallel lines — Z-shape)",
            coInteriorAngles:          "a + b = 180° (parallel lines — C-shape)",
            triangleAngleSum:          "a + b + c = 180°",
            exteriorAngleTriangle:     "exterior = sum of two remote interior angles",
            polygonInteriorSum:        "(n − 2) × 180°",
            regularPolygonInterior:    "(n − 2) × 180° ÷ n",
            regularPolygonExterior:    "360° ÷ n",
            polygonExteriorSum:        "always 360°",
            centreCircumference:       "angle at centre = 2 × angle at circumference"
        },
        commonMistakesToAvoid: [
            "Confusing alternate angles (Z, equal) with co-interior angles (C, supplementary) — always draw the shape to confirm",
            "Applying the triangle rule to quadrilaterals — the interior angle sum changes with every additional side",
            "Forgetting to check whether lines are actually stated to be parallel before using parallel-line rules",
            "Treating the exterior angle theorem as applying to any angle outside the triangle — it applies specifically to angles formed by extending one side",
            "Using 360° ÷ n as the interior angle of a regular polygon — this gives the exterior angle; the interior angle needs the full formula",
            "Assuming all angles at an intersection are equal — only vertically opposite pairs are guaranteed equal"
        ],
        connections: [
            "Trigonometry: all trigonometric ratios are defined in terms of angles in right-angled triangles — angle fluency is a prerequisite",
            "Bearings and navigation: angles measured clockwise from north; all bearing calculations use supplementary and co-interior angle rules",
            "Vectors: the angle between two vectors is calculated using the dot product — the result is an angle whose properties mirror those studied here",
            "Architecture and engineering: roof pitches, structural angles, gear tooth angles all require precise angle calculation using these rules",
            "Circle theorems extension: the remaining circle theorems (cyclic quadrilaterals, tangent-radius, alternate segment) all build on the centre-circumference theorem introduced here"
        ],
        examReadinessChecklist: [
            "Can you calculate a missing angle using angles on a line and angles around a point?",
            "Can you identify corresponding, alternate, and co-interior angles from a diagram and state whether the lines must be parallel?",
            "Can you find missing angles in any triangle, including isosceles and right-angled triangles, using the 180° rule?",
            "Can you apply the exterior angle theorem to find unknown angles?",
            "Can you calculate the interior angle sum of any polygon and find a missing interior angle?",
            "Can you find the interior and exterior angle of any regular polygon, and work backwards from an angle to find the number of sides?"
        ]
    }
},


trigonometry: {
    title: "Trigonometry: Ratios, Graphs, Identities, and Applications",

    databaseLinks: {
        misconceptions: [
            'trigRatioBasics',
            'unitCircleAndRadians',
            'trigGraphs',
            'trigIdentities',
            'triangleApplications'
        ],
        contextualScenarios: [
            'trigRatioBasics',
            'unitCircleAndRadians',
            'trigGraphs',
            'triangleApplications'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'graphingPractice',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'workedExampleAnalysis'
        ],
        assessmentRubrics: [
            'remember',
            'understand',
            'apply',
            'analyze',
            'evaluate',
            'create'
        ],
        assessmentQuestions: [
            'trigRatioBasics',
            'unitCircleAndRadians',
            'trigGraphs',
            'triangleApplications'
        ]
    },

    conceptLinks: {
        "Trigonometric ratios relate angles to side lengths in right-angled triangles": {
            misconceptions:      ['trigRatioBasics'],
            scenarios:           ['trigRatioBasics'],
            studyTips:           ['diagrams', 'mnemonics', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['trigRatioBasics']
        },
        "The unit circle extends trigonometric ratios to all angles including obtuse and reflex angles": {
            misconceptions:      ['unitCircleAndRadians'],
            scenarios:           ['unitCircleAndRadians'],
            studyTips:           ['diagrams', 'comparisonTables', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['unitCircleAndRadians']
        },
        "Radian measure expresses angles as arc lengths on a unit circle": {
            misconceptions:      ['unitCircleAndRadians'],
            scenarios:           ['unitCircleAndRadians'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['understand', 'apply'],
            assessmentQuestions: ['unitCircleAndRadians']
        },
        "Trigonometric graphs are periodic functions with characteristic amplitude, period, and phase": {
            misconceptions:      ['trigGraphs'],
            scenarios:           ['trigGraphs'],
            studyTips:           ['graphingPractice', 'diagrams', 'comparisonTables'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['trigGraphs']
        },
        "Trigonometric identities are equations true for all valid angle values": {
            misconceptions:      ['trigIdentities'],
            scenarios:           ['trigRatioBasics'],
            studyTips:           ['flashcards', 'workedExampleAnalysis', 'practiceRoutines'],
            assessmentRubrics:   ['understand', 'apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['trigRatioBasics']
        },
        "The sine and cosine rules extend trigonometry to non-right-angled triangles": {
            misconceptions:      ['triangleApplications'],
            scenarios:           ['triangleApplications'],
            studyTips:           ['diagrams', 'comparisonTables', 'workedExampleAnalysis'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['triangleApplications']
        }
    },

    topicIntroduction: {
        overview: "Trigonometry is the mathematics of angles and the relationships between angles and lengths. Beginning with ratios in right-angled triangles, it expands through the unit circle to describe all periodic phenomena — from sound waves and tides to alternating current and planetary motion. In this lesson, we build fluency in trigonometric ratios, radian measure, the unit circle, graphs of trigonometric functions, foundational identities, and the sine and cosine rules for general triangles.",
        whyItMatters: "Trigonometry is the language of cyclical change. Engineers use it to analyse forces and design structures; physicists use it to model waves, optics, and oscillations; architects use it to calculate roof pitches and load distributions; navigators use it for bearing calculations; and signal-processing engineers use Fourier series — built entirely from sine and cosine — to decompose every sound, image, and communications signal into its constituent frequencies.",
        bigPicture: "Trigonometry begins in right-angled triangles but its true domain is the circle. Every trigonometric ratio is a coordinate on the unit circle; every graph of sine or cosine is the projection of circular motion onto a line; every identity is a geometric truth about the circle expressed algebraically. The shift from triangle thinking to circle thinking is the conceptual core of the subject.",
        priorKnowledge: [
            "Pythagoras' theorem: a² + b² = c² in a right-angled triangle",
            "Properties of similar triangles: corresponding angles equal, sides in proportion",
            "Coordinate geometry: the x-y plane, plotting points, quadrants",
            "Algebra: rearranging equations, solving for unknowns",
            "Fractions and ratio: expressing one quantity relative to another",
            "Basic angle facts: angles in a triangle sum to 180°; right angle = 90°",
            "Calculator use: locating sin, cos, tan keys and their inverses (sin⁻¹, cos⁻¹, tan⁻¹)"
        ],
        topicRoadmap: [
            "Trigonometric ratios in right-angled triangles: sin, cos, tan and their reciprocals",
            "Special angles: exact values at 0°, 30°, 45°, 60°, 90°",
            "The unit circle: extending ratios to all angles, signs in each quadrant (CAST)",
            "Radian measure: definition, conversion, arc length and sector area",
            "Graphs of y = sin x, y = cos x, y = tan x and their transformations",
            "Fundamental trigonometric identities: Pythagorean, quotient, co-function",
            "The sine rule and cosine rule for non-right-angled triangles",
            "Area of a triangle using trigonometry: Area = ½ab sin C"
        ]
    },

    concepts: [
        "Trigonometric ratios relate angles to side lengths in right-angled triangles",
        "The unit circle extends trigonometric ratios to all angles including obtuse and reflex angles",
        "Radian measure expresses angles as arc lengths on a unit circle",
        "Trigonometric graphs are periodic functions with characteristic amplitude, period, and phase",
        "Trigonometric identities are equations true for all valid angle values",
        "The sine and cosine rules extend trigonometry to non-right-angled triangles"
    ],

    theory: "Trigonometry formalises the relationship between angles and lengths by defining ratios of sides in right-angled triangles, then extending those definitions to the full real line via the unit circle. Because these ratios are periodic — they repeat with every full rotation — they model all cyclic and oscillatory phenomena in the natural world.",

    keyDefinitions: {
        "Sine (sin θ)":          "In a right-angled triangle: opposite ÷ hypotenuse. On the unit circle: the y-coordinate of the point at angle θ",
        "Cosine (cos θ)":        "In a right-angled triangle: adjacent ÷ hypotenuse. On the unit circle: the x-coordinate of the point at angle θ",
        "Tangent (tan θ)":       "In a right-angled triangle: opposite ÷ adjacent. Equals sin θ ÷ cos θ",
        "Cosecant (cosec θ)":    "Reciprocal of sine: 1 ÷ sin θ",
        "Secant (sec θ)":        "Reciprocal of cosine: 1 ÷ cos θ",
        "Cotangent (cot θ)":     "Reciprocal of tangent: 1 ÷ tan θ = cos θ ÷ sin θ",
        "Hypotenuse":            "The longest side of a right-angled triangle; the side opposite the right angle",
        "Opposite":              "The side directly across from the reference angle (not the hypotenuse)",
        "Adjacent":              "The side next to the reference angle that is not the hypotenuse",
        "Unit Circle":           "A circle of radius 1 centred at the origin; used to define trig ratios for all angles",
        "Radian":                "The angle subtended at the centre of a circle by an arc equal in length to the radius; 2π radians = 360°",
        "Period":                "The horizontal length of one complete cycle of a trigonometric graph",
        "Amplitude":             "Half the vertical distance between the maximum and minimum values of a trigonometric function",
        "Phase Shift":           "A horizontal translation of a trigonometric graph",
        "Trigonometric Identity":"An equation involving trig functions that is true for all values of the variable for which both sides are defined"
    },

    trigRatios: {
        SOHCAHTOADefinition: {
            sin: "sin θ = Opposite / Hypotenuse",
            cos: "cos θ = Adjacent / Hypotenuse",
            tan: "tan θ = Opposite / Adjacent"
        },
        reciprocalRatios: {
            cosec: "cosec θ = 1 / sin θ = Hypotenuse / Opposite",
            sec:   "sec θ = 1 / cos θ = Hypotenuse / Adjacent",
            cot:   "cot θ = 1 / tan θ = Adjacent / Opposite"
        },
        workedExamples: [
            {
                type: "Finding a side given an angle and hypotenuse",
                problem: "In a right-angled triangle, the hypotenuse is 10 cm and one angle is 35°. Find the side opposite the 35° angle.",
                solution: [
                    "Step 1 — Identify: we know the hypotenuse (10 cm) and want the opposite side → use sin",
                    "Step 2 — Write the ratio: sin 35° = opposite / hypotenuse = opposite / 10",
                    "Step 3 — Rearrange: opposite = 10 × sin 35°",
                    "Step 4 — Calculate: opposite = 10 × 0.5736 = 5.74 cm (to 3 s.f.)"
                ]
            },
            {
                type: "Finding an angle given two sides",
                problem: "A right-angled triangle has opposite side 7 cm and adjacent side 9 cm. Find the angle θ.",
                solution: [
                    "Step 1 — Identify: we know opposite and adjacent → use tan",
                    "Step 2 — Write the ratio: tan θ = opposite / adjacent = 7 / 9",
                    "Step 3 — Apply the inverse: θ = tan⁻¹(7/9)",
                    "Step 4 — Calculate: θ = tan⁻¹(0.7778) = 37.9° (to 1 d.p.)"
                ]
            },
            {
                type: "Finding the hypotenuse given an angle and adjacent side",
                problem: "The adjacent side to a 52° angle is 6 m. Find the hypotenuse.",
                solution: [
                    "Step 1 — Identify: we know adjacent, want hypotenuse → use cos",
                    "Step 2 — Write the ratio: cos 52° = adjacent / hypotenuse = 6 / hypotenuse",
                    "Step 3 — Rearrange: hypotenuse = 6 / cos 52°",
                    "Step 4 — Calculate: hypotenuse = 6 / 0.6157 = 9.74 m (to 3 s.f.)"
                ]
            }
        ]
    },

    specialAngles: {
        explanation: "Certain angles produce exact trig values expressible without a calculator. These arise from two special right-angled triangles: the 45-45-90 triangle (isosceles, sides 1-1-√2) and the 30-60-90 triangle (half an equilateral triangle, sides 1-√3-2).",
        table: {
            "0°":  { sin: "0",       cos: "1",       tan: "0"        },
            "30°": { sin: "1/2",     cos: "√3/2",    tan: "1/√3"     },
            "45°": { sin: "1/√2",    cos: "1/√2",    tan: "1"        },
            "60°": { sin: "√3/2",    cos: "1/2",     tan: "√3"       },
            "90°": { sin: "1",       cos: "0",       tan: "undefined" }
        },
        derivation30_60_90: {
            description: "Start with an equilateral triangle of side length 2. All angles are 60°. Bisect it vertically to create a 30-60-90 triangle with hypotenuse 2, shortest side 1, and long leg √3 (by Pythagoras).",
            sin30: "sin 30° = 1/2 (opposite 1, hypotenuse 2)",
            cos30: "cos 30° = √3/2 (adjacent √3, hypotenuse 2)",
            tan30: "tan 30° = 1/√3 (opposite 1, adjacent √3)",
            sin60: "sin 60° = √3/2 (opposite √3, hypotenuse 2)",
            cos60: "cos 60° = 1/2 (adjacent 1, hypotenuse 2)",
            tan60: "tan 60° = √3 (opposite √3, adjacent 1)"
        },
        derivation45_45_90: {
            description: "Start with an isosceles right-angled triangle with legs of length 1. The hypotenuse is √2 by Pythagoras.",
            sin45: "sin 45° = 1/√2 = √2/2",
            cos45: "cos 45° = 1/√2 = √2/2",
            tan45: "tan 45° = 1/1 = 1"
        },
        workedExample: {
            problem: "Without a calculator, find the exact value of sin 30° × cos 60° + cos 30° × sin 60°.",
            solution: [
                "Step 1 — Substitute exact values: (1/2)(1/2) + (√3/2)(√3/2)",
                "Step 2 — Multiply: 1/4 + 3/4",
                "Step 3 — Add: 4/4 = 1",
                "Note: this is sin(30° + 60°) = sin 90° = 1 — the result previews the sine addition formula"
            ]
        }
    },

    unitCircle: {
        definition: "A circle of radius 1 centred at the origin. Any point P on the circle at angle θ (measured anticlockwise from the positive x-axis) has coordinates (cos θ, sin θ). This extends the definition of sin and cos to all angles.",
        CASTRule: {
            explanation: "The CAST diagram shows which trig ratios are positive in each quadrant, moving anticlockwise from the positive x-axis.",
            quadrant1: "0° to 90°     — All ratios positive  (A = All)",
            quadrant2: "90° to 180°   — Sin positive only    (S = Sine)",
            quadrant3: "180° to 270°  — Tan positive only    (T = Tangent)",
            quadrant4: "270° to 360°  — Cos positive only    (C = Cosine)",
            mnemonic:  "Cast from quadrant 4 anticlockwise: C-A-S-T, or 'All Students Take Calculus' reading quadrants 1→2→3→4"
        },
        relatedAngles: {
            explanation: "Every angle θ outside the first quadrant has a related acute angle α in the first quadrant. The trig value equals ±(trig of α), with the sign determined by CAST.",
            quadrant2: "sin(180° − α) = sin α;   cos(180° − α) = −cos α;   tan(180° − α) = −tan α",
            quadrant3: "sin(180° + α) = −sin α;  cos(180° + α) = −cos α;   tan(180° + α) = tan α",
            quadrant4: "sin(360° − α) = −sin α;  cos(360° − α) = cos α;    tan(360° − α) = −tan α"
        },
        workedExample: {
            problem: "Find all solutions to sin θ = 0.5 in the range 0° ≤ θ ≤ 360°.",
            solution: [
                "Step 1 — Find the principal value: sin⁻¹(0.5) = 30°",
                "Step 2 — Identify quadrants where sin is positive: quadrants 1 and 2 (CAST: S in quadrant 2)",
                "Step 3 — Quadrant 1 solution: θ = 30°",
                "Step 4 — Quadrant 2 solution: θ = 180° − 30° = 150°",
                "Solutions: θ = 30° and θ = 150°",
                "Check: sin 30° = 0.5 ✓   sin 150° = sin(180° − 30°) = sin 30° = 0.5 ✓"
            ]
        },
        workedExampleNegative: {
            problem: "Find all solutions to cos θ = −0.6 in the range 0° ≤ θ ≤ 360°.",
            solution: [
                "Step 1 — Find the related acute angle: cos⁻¹(0.6) = 53.1° (ignoring the negative)",
                "Step 2 — Cos is negative in quadrants 2 and 3 (CAST)",
                "Step 3 — Quadrant 2 solution: θ = 180° − 53.1° = 126.9°",
                "Step 4 — Quadrant 3 solution: θ = 180° + 53.1° = 233.1°",
                "Solutions: θ = 126.9° and θ = 233.1°",
                "Check: cos 126.9° ≈ −0.6 ✓   cos 233.1° ≈ −0.6 ✓"
            ]
        }
    },

    radianMeasure: {
        definition: "One radian is the angle subtended at the centre of a circle by an arc whose length equals the radius. Since the full circumference is 2πr, a full rotation is 2π radians.",
        conversionFacts: {
            fullCircle:  "2π radians = 360°",
            halfCircle:  "π radians = 180°",
            quarterCircle: "π/2 radians = 90°",
            toRadians:   "Multiply degrees by π/180",
            toDegrees:   "Multiply radians by 180/π"
        },
        commonAnglesInRadians: {
            "0°":   "0",
            "30°":  "π/6",
            "45°":  "π/4",
            "60°":  "π/3",
            "90°":  "π/2",
            "120°": "2π/3",
            "135°": "3π/4",
            "150°": "5π/6",
            "180°": "π",
            "270°": "3π/2",
            "360°": "2π"
        },
        arcLengthAndSectorArea: {
            arcLength:   "s = rθ   (where θ is in radians)",
            sectorArea:  "A = ½r²θ   (where θ is in radians)",
            note:        "These formulas only work with radian measure — they fail if θ is given in degrees"
        },
        workedExamples: [
            {
                type: "Converting degrees to radians",
                problem: "Convert 135° to radians. Give your answer as an exact multiple of π.",
                solution: [
                    "Step 1 — Multiply by π/180: 135 × π/180",
                    "Step 2 — Simplify: 135/180 = 3/4",
                    "Answer: 3π/4 radians"
                ]
            },
            {
                type: "Arc length",
                problem: "A circle has radius 8 cm. Find the arc length subtended by an angle of 2.5 radians.",
                solution: [
                    "Step 1 — Identify the formula: s = rθ",
                    "Step 2 — Substitute: s = 8 × 2.5",
                    "Step 3 — Calculate: s = 20 cm"
                ]
            },
            {
                type: "Sector area",
                problem: "Find the area of a sector with radius 6 cm and angle π/3 radians.",
                solution: [
                    "Step 1 — Identify the formula: A = ½r²θ",
                    "Step 2 — Substitute: A = ½ × 36 × π/3",
                    "Step 3 — Simplify: A = 18 × π/3 = 6π cm²",
                    "Step 4 — Approximate if needed: A ≈ 18.85 cm²"
                ]
            }
        ]
    },

    trigGraphs: {
        sineGraph: {
            equation:    "y = sin x",
            domain:      "All real numbers",
            range:       "−1 ≤ y ≤ 1",
            period:      "360° (2π radians)",
            amplitude:   "1",
            keyPoints:   { "0°": 0, "90°": 1, "180°": 0, "270°": -1, "360°": 0 },
            shape:       "Starts at origin (0,0), rises to maximum 1 at 90°, returns to 0 at 180°, falls to minimum −1 at 270°, returns to 0 at 360°"
        },
        cosineGraph: {
            equation:    "y = cos x",
            domain:      "All real numbers",
            range:       "−1 ≤ y ≤ 1",
            period:      "360° (2π radians)",
            amplitude:   "1",
            keyPoints:   { "0°": 1, "90°": 0, "180°": -1, "270°": 0, "360°": 1 },
            shape:       "Starts at maximum 1 at 0°, falls through 0 at 90°, reaches minimum −1 at 180°, rises through 0 at 270°, returns to 1 at 360°",
            relationToSine: "cos x = sin(x + 90°) — the cosine graph is the sine graph shifted 90° to the left"
        },
        tangentGraph: {
            equation:    "y = tan x",
            domain:      "All real x except x = 90° + 180°n (where the function is undefined)",
            range:       "All real numbers (−∞ to +∞)",
            period:      "180° (π radians)",
            amplitude:   "Undefined — no maximum or minimum",
            asymptotes:  "Vertical asymptotes at x = ±90°, ±270°, ±450°, ... (x = π/2 + nπ in radians)",
            keyPoints:   { "0°": 0, "45°": 1, "90°": "undefined", "135°": -1, "180°": 0 },
            shape:       "Passes through origin, rises steeply toward +∞ near 90°, reappears at −∞ just after 90°, passes through (180°, 0), repeats every 180°"
        },
        transformations: {
            generalForm:    "y = a sin(bx + c) + d",
            amplitude:      "a — vertical stretch; |a| gives the amplitude; a < 0 reflects in the x-axis",
            period:         "360°/b (in degrees) or 2π/b (in radians) — b compresses or stretches horizontally",
            phaseShift:     "−c/b — horizontal translation (positive value shifts left if c > 0)",
            verticalShift:  "d — vertical translation; shifts the midline from y = 0 to y = d",
            workedExample: {
                problem: "For y = 3 sin(2x − 60°) + 1, state the amplitude, period, phase shift, and vertical shift. Find the maximum and minimum values.",
                solution: [
                    "Step 1 — Identify a = 3, b = 2, c = −60° (note: equation is 2x − 60° = 2(x − 30°)), d = 1",
                    "Step 2 — Amplitude: |a| = 3",
                    "Step 3 — Period: 360°/b = 360°/2 = 180°",
                    "Step 4 — Phase shift: −c/b. Rewrite as 2(x − 30°): phase shift = +30° to the right",
                    "Step 5 — Vertical shift: d = 1 (midline is y = 1)",
                    "Step 6 — Maximum: midline + amplitude = 1 + 3 = 4",
                    "Step 7 — Minimum: midline − amplitude = 1 − 3 = −2"
                ]
            }
        },
        inverseTrigFunctions: {
            sin_inv: "sin⁻¹ (arcsin): gives the angle whose sine is a given value. Principal range: −90° to 90°",
            cos_inv: "cos⁻¹ (arccos): gives the angle whose cosine is a given value. Principal range: 0° to 180°",
            tan_inv: "tan⁻¹ (arctan): gives the angle whose tangent is a given value. Principal range: −90° to 90°",
            note:    "The principal value is a single angle. For equations requiring all solutions in a given range, use CAST to find additional angles beyond the principal value."
        }
    },

    trigIdentities: {
        pythagoreanIdentities: {
            primary:   "sin²θ + cos²θ = 1   (derived from Pythagoras on the unit circle)",
            form2:     "sin²θ = 1 − cos²θ",
            form3:     "cos²θ = 1 − sin²θ",
            secTan:    "1 + tan²θ = sec²θ   (divide primary identity by cos²θ)",
            cosecCot:  "1 + cot²θ = cosec²θ  (divide primary identity by sin²θ)"
        },
        quotientIdentity: {
            tan:  "tan θ = sin θ / cos θ",
            cot:  "cot θ = cos θ / sin θ"
        },
        coFunctionIdentities: {
            sinCos:  "sin(90° − θ) = cos θ",
            cosSin:  "cos(90° − θ) = sin θ",
            tanCot:  "tan(90° − θ) = cot θ"
        },
        doubleAngleFormulae: {
            sin2A:   "sin 2A = 2 sin A cos A",
            cos2A_1: "cos 2A = cos²A − sin²A",
            cos2A_2: "cos 2A = 2cos²A − 1",
            cos2A_3: "cos 2A = 1 − 2sin²A",
            tan2A:   "tan 2A = 2 tan A / (1 − tan²A)"
        },
        proofStrategy: "To prove an identity, work on one side only (usually the more complex side), applying known identities and algebraic manipulations until it matches the other side. Never 'cross the equals sign' — that assumes what you are trying to prove.",
        workedExamples: [
            {
                type: "Simplifying using Pythagorean identity",
                problem: "Simplify: (1 − sin²θ) / cos θ",
                solution: [
                    "Step 1 — Recognise 1 − sin²θ = cos²θ (Pythagorean identity)",
                    "Step 2 — Substitute: cos²θ / cos θ",
                    "Step 3 — Cancel one factor of cos θ: = cos θ",
                    "Result: (1 − sin²θ) / cos θ = cos θ"
                ]
            },
            {
                type: "Proving an identity",
                problem: "Prove that tan θ + cot θ = sec θ cosec θ",
                solution: [
                    "Step 1 — Work on the left-hand side only",
                    "Step 2 — Write tan θ = sin θ/cos θ and cot θ = cos θ/sin θ",
                    "Step 3 — Add with common denominator sin θ cos θ: (sin²θ + cos²θ)/(sin θ cos θ)",
                    "Step 4 — Apply Pythagorean identity: numerator = 1",
                    "Step 5 — Result: 1/(sin θ cos θ) = (1/sin θ)(1/cos θ) = cosec θ sec θ ✓"
                ]
            },
            {
                type: "Solving an equation using identities",
                problem: "Solve 2sin²θ − cos θ − 1 = 0 for 0° ≤ θ ≤ 360°.",
                solution: [
                    "Step 1 — Replace sin²θ using identity sin²θ = 1 − cos²θ",
                    "Step 2 — Substitute: 2(1 − cos²θ) − cos θ − 1 = 0",
                    "Step 3 — Expand: 2 − 2cos²θ − cos θ − 1 = 0",
                    "Step 4 — Rearrange: −2cos²θ − cos θ + 1 = 0 → 2cos²θ + cos θ − 1 = 0",
                    "Step 5 — Factorise: (2cos θ − 1)(cos θ + 1) = 0",
                    "Step 6 — Solve each factor: cos θ = 1/2 or cos θ = −1",
                    "Step 7 — cos θ = 1/2: θ = 60° or θ = 300° (CAST, quadrants 1 and 4)",
                    "Step 8 — cos θ = −1: θ = 180°",
                    "Solutions: θ = 60°, 180°, 300°"
                ]
            }
        ]
    },

    sineAndCosineRules: {
        sineRule: {
            formula:     "a/sin A = b/sin B = c/sin C",
            inverseForm: "sin A/a = sin B/b = sin C/c",
            useWhen:     "Given: (1) two angles and one side (AAS or ASA), or (2) two sides and a non-included angle (SSA — beware the ambiguous case)",
            ambiguousCase: {
                description: "When given two sides and an acute non-included angle (SSA), there may be two valid triangles, one triangle, or no triangle.",
                rule: "If sin B = b sin A / a produces a value greater than 1, no solution exists. If the value is less than 1 and angle A is acute, check both B and 180° − B to see if two triangles are possible."
            },
            workedExample: {
                problem: "In triangle ABC, angle A = 40°, angle B = 75°, and side a = 12 cm. Find side b.",
                solution: [
                    "Step 1 — Write the sine rule: a/sin A = b/sin B",
                    "Step 2 — Substitute: 12/sin 40° = b/sin 75°",
                    "Step 3 — Rearrange: b = 12 × sin 75° / sin 40°",
                    "Step 4 — Calculate: b = 12 × 0.9659 / 0.6428 = 18.03 cm (to 2 d.p.)"
                ]
            }
        },
        cosineRule: {
            formulaFindSide:   "a² = b² + c² − 2bc cos A",
            formulaFindAngle:  "cos A = (b² + c² − a²) / (2bc)",
            useWhen:           "Given: (1) two sides and the included angle (SAS), or (2) all three sides to find an angle (SSS)",
            connectionToPythagoras: "When A = 90°, cos A = 0, so the cosine rule reduces to a² = b² + c² — Pythagoras' theorem is a special case of the cosine rule",
            workedExample: {
                problem: "In triangle ABC, b = 7 cm, c = 9 cm, and angle A = 50°. Find side a.",
                solution: [
                    "Step 1 — Write the cosine rule: a² = b² + c² − 2bc cos A",
                    "Step 2 — Substitute: a² = 49 + 81 − 2(7)(9) cos 50°",
                    "Step 3 — Calculate cos 50° ≈ 0.6428: a² = 130 − 126 × 0.6428 = 130 − 80.99 = 49.01",
                    "Step 4 — Square root: a = √49.01 = 7.00 cm (to 2 d.p.)"
                ]
            },
            workedExampleAngle: {
                problem: "A triangle has sides a = 5 cm, b = 7 cm, c = 8 cm. Find angle A.",
                solution: [
                    "Step 1 — Write the angle form: cos A = (b² + c² − a²) / (2bc)",
                    "Step 2 — Substitute: cos A = (49 + 64 − 25) / (2 × 7 × 8) = 88 / 112",
                    "Step 3 — Simplify: cos A = 0.7857",
                    "Step 4 — Apply inverse: A = cos⁻¹(0.7857) = 38.2° (to 1 d.p.)"
                ]
            }
        },
        triangleArea: {
            formula:     "Area = ½ab sin C",
            meaning:     "The area of any triangle equals half the product of two sides multiplied by the sine of the included angle",
            connectionToBase_Height: "When C = 90°, sin C = 1, so Area = ½ab — consistent with ½ × base × height for a right-angled triangle",
            workedExample: {
                problem: "Find the area of a triangle with sides 6 cm and 10 cm and an included angle of 65°.",
                solution: [
                    "Step 1 — Write the formula: Area = ½ab sin C",
                    "Step 2 — Substitute: Area = ½ × 6 × 10 × sin 65°",
                    "Step 3 — Calculate: Area = 30 × 0.9063 = 27.19 cm² (to 2 d.p.)"
                ]
            }
        },
        choosingTheRightRule: {
            guide: [
                "Right-angled triangle → use SOHCAHTOA or Pythagoras",
                "Two angles + any side given → Sine Rule",
                "Two sides + non-included angle given → Sine Rule (check for ambiguous case)",
                "Two sides + included angle given → Cosine Rule to find the third side",
                "All three sides given → Cosine Rule to find an angle",
                "Two sides + angle + need area → Area = ½ab sin C"
            ]
        }
    },

    topicSummary: {
        coreInsights: [
            "SOHCAHTOA defines sin, cos, and tan as ratios of sides in right-angled triangles — always label the triangle (hypotenuse, opposite, adjacent) before choosing a ratio.",
            "The unit circle generalises all three ratios to any angle: a point at angle θ has coordinates (cos θ, sin θ), making the unit circle the master definition of all trigonometry.",
            "CAST determines the sign of each trig ratio in each quadrant: from the positive x-axis anticlockwise, signs cycle through All-positive, Sine-positive, Tangent-positive, Cosine-positive.",
            "One radian is one radius-length of arc. The elegant formulas s = rθ and A = ½r²θ only work in radians — always convert before applying them.",
            "The graphs of sin and cos are identical in shape, separated by a 90° phase shift. The graph of tan has period 180° and vertical asymptotes where cos θ = 0.",
            "Transformations of y = a sin(bx + c) + d change amplitude (a), period (b), phase (c), and midline (d) independently — identify each parameter before sketching.",
            "The Pythagorean identity sin²θ + cos²θ = 1 is the single most used identity in the subject — dividing through by cos²θ or sin²θ generates the sec-tan and cosec-cot forms.",
            "The sine rule (a/sin A = b/sin B = c/sin C) applies when angles and non-included sides are known. The cosine rule applies when the included angle or all three sides are known. Pythagoras is a special case of the cosine rule at 90°.",
            "Area = ½ab sin C unifies the geometry of triangles: it reduces to ½ × base × height when C = 90° and works for any triangle when the included angle is known."
        ],
        keyFormulas: {
            sinRatio:       "sin θ = opposite / hypotenuse",
            cosRatio:       "cos θ = adjacent / hypotenuse",
            tanRatio:       "tan θ = opposite / adjacent = sin θ / cos θ",
            pythagoreanId:  "sin²θ + cos²θ = 1",
            secTanId:       "1 + tan²θ = sec²θ",
            cosecCotId:     "1 + cot²θ = cosec²θ",
            sin2A:          "sin 2A = 2 sin A cos A",
            cos2A:          "cos 2A = cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A",
            sineRule:       "a/sin A = b/sin B = c/sin C",
            cosineRule:     "a² = b² + c² − 2bc cos A",
            cosineRuleAngle:"cos A = (b² + c² − a²) / 2bc",
            triangleArea:   "Area = ½ab sin C",
            arcLength:      "s = rθ",
            sectorArea:     "A = ½r²θ",
            radianConvert:  "radians = degrees × π/180"
        },
        commonMistakesToAvoid: [
            "Labelling opposite and adjacent relative to the wrong angle — always re-label when the reference angle changes",
            "Using degree mode on a calculator when the problem requires radian mode (or vice versa)",
            "Applying arc length or sector area formulas to angles given in degrees without first converting to radians",
            "Finding only the principal value when a problem asks for all solutions in a range — always use CAST to find the second solution",
            "Forgetting the ambiguous case (SSA) in the sine rule — always check whether 180° minus the found angle also gives a valid triangle",
            "Confusing sin²θ with sin(θ²) — sin²θ means (sin θ)², not sin of theta squared",
            "Dividing by a trig function to 'cancel' it when solving equations — factorising is correct; dividing loses solutions",
            "Choosing the sine rule for SAS problems — the cosine rule must be used when the included angle and two sides are given"
        ],
        connections: [
            "Pythagoras' theorem: the cosine rule with A = 90° reduces to a² = b² + c²",
            "Calculus: the derivative of sin x is cos x and the derivative of cos x is −sin x — trigonometry is the foundation of wave analysis in calculus",
            "Physics: simple harmonic motion, sound waves, electromagnetic waves, and AC circuits all use y = A sin(ωt + φ)",
            "Vectors: the dot product a·b = |a||b|cos θ connects vector algebra to trigonometry",
            "Complex numbers: Euler's formula e^(iθ) = cos θ + i sin θ unifies trigonometry with exponential functions",
            "Statistics: circular statistics and the von Mises distribution use trigonometric functions to model directional data"
        ],
        examReadinessChecklist: [
            "Can you find all missing sides and angles in a right-angled triangle using SOHCAHTOA without labelling errors?",
            "Can you write exact values for sin, cos, and tan at 0°, 30°, 45°, 60°, 90° without reference material?",
            "Can you find all solutions to a trig equation in a given range using CAST, including negative values?",
            "Can you convert between degrees and radians fluently and apply s = rθ and A = ½r²θ?",
            "Can you sketch y = sin x, y = cos x, y = tan x and identify all key features (amplitude, period, asymptotes)?",
            "Can you apply the transformations a, b, c, d to a trig graph and state the resulting amplitude, period, phase shift, and vertical shift?",
            "Can you prove a trig identity by working on one side only, using the Pythagorean, quotient, and reciprocal identities?",
            "Can you select between the sine rule and cosine rule based on the given information and execute the chosen method completely?"
        ]
    }
},


formulaRearranging: {
    title: "Formula Rearranging: Changing the Subject of a Formula",

    databaseLinks: {
        misconceptions: [
            'subjectOfFormula',
            'inverseOperations',
            'multiStepRearranging',
            'fractionsAndRoots',
            'rearrangingWithSquares'
        ],
        contextualScenarios: [
            'subjectOfFormula',
            'inverseOperations',
            'multiStepRearranging',
            'fractionsAndRoots'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'workedExampleAnalysis'
        ],
        assessmentRubrics: [
            'remember',
            'understand',
            'apply',
            'analyze',
            'evaluate',
            'create'
        ],
        assessmentQuestions: [
            'subjectOfFormula',
            'inverseOperations',
            'multiStepRearranging',
            'fractionsAndRoots'
        ]
    },

    conceptLinks: {
        "The subject of a formula is the variable isolated on one side of the equation": {
            misconceptions:       ['subjectOfFormula'],
            scenarios:            ['subjectOfFormula'],
            studyTips:            ['diagrams', 'flashcards'],
            assessmentRubrics:    ['remember', 'understand'],
            assessmentQuestions:  ['subjectOfFormula']
        },
        "Rearranging uses inverse operations applied in reverse order to isolate the target variable": {
            misconceptions:       ['inverseOperations'],
            scenarios:            ['inverseOperations'],
            studyTips:            ['diagrams', 'mnemonics'],
            assessmentRubrics:    ['remember', 'understand', 'apply'],
            assessmentQuestions:  ['inverseOperations']
        },
        "Multi-step rearranging requires collecting all terms containing the target variable before factorising": {
            misconceptions:       ['multiStepRearranging'],
            scenarios:            ['multiStepRearranging'],
            studyTips:            ['comparisonTables', 'practiceRoutines'],
            assessmentRubrics:    ['apply', 'analyze'],
            assessmentQuestions:  ['multiStepRearranging']
        },
        "Fractions in formulae are cleared by multiplying both sides by the denominator before isolating the subject": {
            misconceptions:       ['fractionsAndRoots'],
            scenarios:            ['fractionsAndRoots'],
            studyTips:            ['comparisonTables', 'workedExampleAnalysis'],
            assessmentRubrics:    ['apply', 'analyze', 'evaluate'],
            assessmentQuestions:  ['fractionsAndRoots']
        },
        "Rearranging formulae with squares and square roots requires squaring or square-rooting both sides as a complete unit": {
            misconceptions:       ['rearrangingWithSquares'],
            scenarios:            ['subjectOfFormula'],
            studyTips:            ['flashcards', 'workedExampleAnalysis'],
            assessmentRubrics:    ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions:  ['fractionsAndRoots']
        }
    },

    topicIntroduction: {
        overview: "Formula rearranging — also called changing the subject of a formula — is the skill of rewriting a formula so that a different variable stands alone on one side of the equals sign. Every formula encodes the same relationship regardless of which variable is the subject; rearranging simply changes the lens through which that relationship is viewed. A student who can rearrange fluently can extract any quantity from any formula without needing to memorise separate versions.",
        whyItMatters: "Every quantitative discipline — physics, chemistry, engineering, economics, medicine — expresses relationships as formulae, and the variable you need to calculate is rarely already the subject. A physicist using v = u + at needs to find t; a chemist using PV = nRT needs to find T; a nurse using a dosage formula needs to find the correct volume. The ability to rearrange any formula to any subject is therefore one of the highest-value algebraic skills across all STEM fields.",
        bigPicture: "Rearranging a formula is structurally identical to solving a linear equation — it uses the same inverse-operation logic and the same balance principle — but it works with letters instead of numbers. The only conceptual extension is that the target variable sometimes appears in more than one term, requiring an intermediate factorising step before isolation is possible. Every rearrangement, however complex, reduces to a sequence of: (1) identify where the target variable is; (2) undo what has been done to it, in reverse order; (3) if the target appears in multiple terms, collect and factorise first.",
        priorKnowledge: [
            "Solving linear equations using inverse operations",
            "Order of operations (BIDMAS/PEMDAS) — understanding which operation was applied last helps determine what to undo first",
            "Expanding brackets and collecting like terms",
            "Working with fractions: multiplying both sides by a denominator",
            "Squares and square roots as inverse operations",
            "Basic algebraic notation: understanding that ab means a × b and a/b means a ÷ b"
        ],
        topicRoadmap: [
            "What the subject of a formula is and why rearranging preserves the relationship",
            "One-step rearranging: undoing a single operation (add, subtract, multiply, divide)",
            "Two-step rearranging: undoing two operations in reverse order",
            "Multi-step rearranging: the target variable on both sides — collect, then factorise, then divide",
            "Rearranging formulae containing fractions: clearing denominators first",
            "Rearranging formulae containing squares and square roots",
            "Rearranging complex physics, chemistry, and geometry formulae",
            "Checking a rearrangement by substituting numerical values"
        ]
    },

    concepts: [
        "The subject of a formula is the variable isolated on one side of the equation",
        "Rearranging uses inverse operations applied in reverse order to isolate the target variable",
        "The balance principle requires every operation to be applied to both sides of the formula",
        "Multi-step rearranging requires collecting all terms containing the target variable before factorising",
        "Fractions in formulae are cleared by multiplying both sides by the denominator before isolating the subject",
        "Rearranging formulae with squares and square roots requires squaring or square-rooting both sides as a complete unit"
    ],

    theory: "A formula is a general algebraic relationship between two or more variables. Changing the subject of a formula means applying a sequence of inverse operations — maintaining equality throughout — until the desired variable stands alone. The mathematical justification is identical to the equality principle in equation solving: an equation remains true if and only if every operation is applied identically to both sides. The formula encodes the same physical or mathematical truth regardless of which variable is isolated; rearranging changes the form but never the content of the relationship.",

    keyDefinitions: {
        "Subject of a Formula": "The variable that stands alone on one side of the formula; the variable whose value the formula directly calculates (e.g. v is the subject of v = u + at)",
        "Rearranging (Changing the Subject)": "Rewriting a formula so that a different variable becomes the subject, using inverse operations to isolate the target variable",
        "Inverse Operation": "The operation that undoes another: addition undoes subtraction; multiplication undoes division; squaring undoes square-rooting (and vice versa)",
        "Balance Principle": "Any operation performed on one side of an equation must be performed identically on the other side to maintain equality",
        "Target Variable": "The variable you want to make the subject; the variable you are trying to isolate",
        "Collecting Terms": "Gathering all terms containing the target variable onto one side of the equation as a prerequisite to factorising",
        "Factorising (in rearranging)": "Writing the sum of multiple terms containing the target variable as a single product: ax + bx = x(a + b); required when the target variable appears in more than one term",
        "Clearing the Denominator": "Multiplying both sides of a formula by the denominator of a fraction to remove the fraction before isolating the subject",
        "Squaring Both Sides": "Applying the square operation to both complete sides of a formula to eliminate a square root; produces a new valid formula provided both sides are treated as a unit",
        "Verification by Substitution": "Checking a rearrangement by assigning numerical values to all variables, computing the result using both the original and rearranged formulae, and confirming they agree"
    },

    inverseOperationPairs: {
        overview: "Every rearrangement step uses exactly one inverse operation pair. Identifying which operation was most recently applied to the target variable determines which inverse to apply next.",
        pairs: {
            additionSubtraction: {
                forward:  "Adding a constant c: x + c",
                inverse:  "Subtract c from both sides",
                example:  "v = u + at — to isolate u: subtract at from both sides → u = v − at"
            },
            multiplicationDivision: {
                forward:  "Multiplying by a coefficient k: kx",
                inverse:  "Divide both sides by k",
                example:  "F = ma — to isolate m: divide both sides by a → m = F/a"
            },
            divisionMultiplication: {
                forward:  "Dividing by a denominator d: x/d",
                inverse:  "Multiply both sides by d",
                example:  "v = d/t — to isolate t: multiply both sides by t, then divide by v → t = d/v"
            },
            squareSquareRoot: {
                forward:  "Squaring: x²",
                inverse:  "Square-root both sides (take the positive root for physical quantities)",
                example:  "E = mc² — to isolate c: divide both sides by m, then square-root → c = √(E/m)"
            },
            squareRootSquare: {
                forward:  "Square root: √x",
                inverse:  "Square both sides",
                example:  "T = 2π√(l/g) — to isolate l: divide by 2π, square both sides, multiply by g → l = gT²/(4π²)"
            }
        }
    },

    oneStepRearranging: {
        principle: "If the target variable has exactly one operation applied to it, apply the single inverse operation to both sides.",
        workedExamples: [
            {
                type: "Addition — isolate u from v = u + at (treating at as a single term)",
                problem: "Rearrange v = u + at to make u the subject.",
                solution: [
                    "Step 1 — Identify what is being done to u: at is being added to u",
                    "Step 2 — Inverse of addition is subtraction: subtract at from both sides",
                    "Step 3 — v − at = u + at − at",
                    "Step 4 — Simplify: u = v − at",
                    "Verification: let u = 5, a = 3, t = 2 → v = 5 + 6 = 11. Check: u = 11 − 3(2) = 11 − 6 = 5 ✓"
                ]
            },
            {
                type: "Multiplication — isolate m from F = ma",
                problem: "Rearrange F = ma to make m the subject.",
                solution: [
                    "Step 1 — Identify what is being done to m: m is being multiplied by a",
                    "Step 2 — Inverse of multiplication is division: divide both sides by a",
                    "Step 3 — F/a = ma/a",
                    "Step 4 — Simplify: m = F/a",
                    "Verification: let m = 4, a = 5 → F = 20. Check: m = 20/5 = 4 ✓"
                ]
            },
            {
                type: "Division — isolate t from s = d/t",
                problem: "Rearrange s = d/t to make t the subject.",
                solution: [
                    "Step 1 — Identify what is being done to t: d is being divided by t (t is in the denominator)",
                    "Step 2 — Multiply both sides by t to bring t out of the denominator: st = d",
                    "Step 3 — Divide both sides by s: t = d/s",
                    "Verification: let d = 120, s = 40 → t = 120/40 = 3. Check: s = 120/3 = 40 ✓"
                ]
            }
        ]
    },

    twoStepRearranging: {
        principle: "If two operations have been applied to the target variable, undo them in reverse order — the last operation applied is the first to be undone. This mirrors the BIDMAS reversal logic used in equation solving.",
        workedExamples: [
            {
                type: "Multiply then add — isolate u from v = u + at",
                problem: "Rearrange v = u + at to make t the subject.",
                solution: [
                    "Step 1 — Identify the operations applied to t: t is multiplied by a, then at is added to u",
                    "Step 2 — Last operation on the t-side: adding u. Undo by subtracting u from both sides: v − u = at",
                    "Step 3 — Now t is multiplied by a. Undo by dividing both sides by a: t = (v − u)/a",
                    "Verification: let u = 2, a = 3, t = 4 → v = 2 + 12 = 14. Check: t = (14 − 2)/3 = 12/3 = 4 ✓"
                ]
            },
            {
                type: "Multiply then subtract — isolate C from F = (9/5)C + 32",
                problem: "Rearrange the Fahrenheit–Celsius formula F = (9/5)C + 32 to make C the subject.",
                solution: [
                    "Step 1 — Identify operations applied to C: C is multiplied by 9/5, then 32 is added",
                    "Step 2 — Last operation: adding 32. Subtract 32 from both sides: F − 32 = (9/5)C",
                    "Step 3 — C is multiplied by 9/5. Multiply both sides by 5/9 (the reciprocal): C = (5/9)(F − 32)",
                    "Verification: let C = 100 → F = (9/5)(100) + 32 = 180 + 32 = 212. Check: C = (5/9)(212 − 32) = (5/9)(180) = 100 ✓"
                ]
            },
            {
                type: "Power then multiply — isolate c from E = mc²",
                problem: "Rearrange Einstein's formula E = mc² to make c the subject.",
                solution: [
                    "Step 1 — Identify operations applied to c: c is squared, then multiplied by m",
                    "Step 2 — Last operation: multiplying by m. Divide both sides by m: E/m = c²",
                    "Step 3 — c is squared. Take the square root of both sides: c = √(E/m)",
                    "Note: for physical quantities, only the positive root is meaningful",
                    "Verification: let m = 2, c = 3 → E = 2 × 9 = 18. Check: c = √(18/2) = √9 = 3 ✓"
                ]
            },
            {
                type: "Fraction with two operations — isolate r from A = πr²",
                problem: "Rearrange the area of a circle formula A = πr² to make r the subject.",
                solution: [
                    "Step 1 — Identify operations applied to r: r is squared, then multiplied by π",
                    "Step 2 — Divide both sides by π: A/π = r²",
                    "Step 3 — Square-root both sides: r = √(A/π)",
                    "Verification: let r = 5 → A = π(25) = 25π. Check: r = √(25π/π) = √25 = 5 ✓"
                ]
            }
        ]
    },

    multiStepRearranging: {
        principle: "When the target variable appears in more than one term, it cannot be isolated by inverse operations alone. The strategy is: (1) expand any brackets; (2) collect all terms containing the target variable onto one side; (3) factorise to write those terms as a single product; (4) divide by the remaining factor to isolate the target variable.",
        collectAndFactoriseSteps: [
            "Expand all brackets",
            "Move all terms containing the target variable to one side using inverse operations",
            "Move all other terms to the opposite side",
            "Factorise: write the left side as (target variable) × (everything else)",
            "Divide both sides by the bracket to isolate the target variable"
        ],
        workedExamples: [
            {
                type: "Target variable on both sides — isolate x from ax + b = cx + d",
                problem: "Rearrange ax + b = cx + d to make x the subject.",
                solution: [
                    "Step 1 — Identify that x appears on both sides",
                    "Step 2 — Collect x-terms on the left: subtract cx from both sides: ax − cx + b = d",
                    "Step 3 — Move constant to right: subtract b from both sides: ax − cx = d − b",
                    "Step 4 — Factorise the left side: x(a − c) = d − b",
                    "Step 5 — Divide both sides by (a − c): x = (d − b)/(a − c)",
                    "Verification: let a = 5, b = 3, c = 2, d = 9 → LHS = 5x + 3, RHS = 2x + 9 → 3x = 6 → x = 2. Formula: x = (9 − 3)/(5 − 2) = 6/3 = 2 ✓"
                ]
            },
            {
                type: "Target variable in a bracket and outside — isolate t from P = t(r + s) + t²",
                problem: "Rearrange P = t(r + s) + wt to make t the subject (treating w as a constant).",
                solution: [
                    "Step 1 — Expand the bracket: P = tr + ts + wt",
                    "Step 2 — All terms on the right contain t; collect them: P = t(r + s + w) — this factorising is the key step",
                    "Step 3 — Divide both sides by (r + s + w): t = P/(r + s + w)",
                    "Verification: let r = 1, s = 2, w = 3, t = 4 → P = 4(1 + 2) + 3(4) = 12 + 12 = 24. Check: t = 24/(1 + 2 + 3) = 24/6 = 4 ✓"
                ]
            },
            {
                type: "Real-world formula — isolate R₁ from the parallel resistance formula",
                problem: "Rearrange 1/R = 1/R₁ + 1/R₂ to make R₁ the subject.",
                solution: [
                    "Step 1 — Subtract 1/R₂ from both sides: 1/R − 1/R₂ = 1/R₁",
                    "Step 2 — Write the left side as a single fraction: (R₂ − R)/(RR₂) = 1/R₁",
                    "Step 3 — Take the reciprocal of both sides: R₁ = RR₂/(R₂ − R)",
                    "Verification: let R = 2, R₂ = 6 → 1/R₁ = 1/2 − 1/6 = 3/6 − 1/6 = 2/6 = 1/3 → R₁ = 3. Check: RR₂/(R₂ − R) = (2 × 6)/(6 − 2) = 12/4 = 3 ✓"
                ]
            }
        ]
    },

    rearrangingWithFractions: {
        principle: "When the target variable appears in a denominator or is part of a fraction, multiply both sides by the relevant denominator(s) first to clear the fraction before applying further inverse operations.",
        workedExamples: [
            {
                type: "Target variable in denominator — isolate t from s = d/t",
                problem: "Rearrange s = d/t to make t the subject.",
                solution: [
                    "Step 1 — Multiply both sides by t to remove t from the denominator: st = d",
                    "Step 2 — Divide both sides by s: t = d/s",
                    "Verification: let d = 150, s = 30 → t = 5. Check: s = 150/5 = 30 ✓"
                ]
            },
            {
                type: "Complex fraction — isolate u from the lens formula 1/f = 1/u + 1/v",
                problem: "Rearrange the thin lens formula 1/f = 1/u + 1/v to make u the subject.",
                solution: [
                    "Step 1 — Subtract 1/v from both sides: 1/f − 1/v = 1/u",
                    "Step 2 — Write the left side as a single fraction with denominator fv: (v − f)/(fv) = 1/u",
                    "Step 3 — Take the reciprocal of both sides: u = fv/(v − f)",
                    "Verification: let f = 10, v = 30 → 1/u = 1/10 − 1/30 = 3/30 − 1/30 = 2/30 = 1/15 → u = 15. Check: fv/(v − f) = (10 × 30)/(30 − 10) = 300/20 = 15 ✓"
                ]
            },
            {
                type: "Variable in numerator of a fraction within an equation — isolate h from A = (1/2)bh",
                problem: "Rearrange the area of a triangle A = (1/2)bh to make h the subject.",
                solution: [
                    "Step 1 — Multiply both sides by 2 to clear the fraction: 2A = bh",
                    "Step 2 — Divide both sides by b: h = 2A/b",
                    "Verification: let b = 6, h = 4 → A = (1/2)(6)(4) = 12. Check: h = 2(12)/6 = 24/6 = 4 ✓"
                ]
            }
        ]
    },

    rearrangingWithSquaresAndRoots: {
        principle: "Squaring and square-rooting are inverse operations. When a square root is applied to the target variable, square both complete sides to eliminate it. When the target variable is squared, square-root both complete sides. Always square or root the entire side, not individual terms.",
        criticalError: "Squaring or rooting individual terms instead of the whole side — for example, writing √(a² + b²) = a + b is INCORRECT; the square root applies to the entire expression (a² + b²) as a unit.",
        workedExamples: [
            {
                type: "Isolate l from the pendulum formula T = 2π√(l/g)",
                problem: "Rearrange T = 2π√(l/g) to make l the subject.",
                solution: [
                    "Step 1 — Divide both sides by 2π: T/(2π) = √(l/g)",
                    "Step 2 — Square both sides (the entire sides): [T/(2π)]² = l/g",
                    "Step 3 — Simplify the left side: T²/(4π²) = l/g",
                    "Step 4 — Multiply both sides by g: l = gT²/(4π²)",
                    "Verification: let g = 9.8, T = 2π → l = 9.8 × (2π)²/(4π²) = 9.8 × 4π²/(4π²) = 9.8 × 1 = 9.8. Check: T = 2π√(9.8/9.8) = 2π√1 = 2π ✓"
                ]
            },
            {
                type: "Isolate a from Pythagoras' theorem c² = a² + b²",
                problem: "Rearrange c² = a² + b² to make a the subject.",
                solution: [
                    "Step 1 — Subtract b² from both sides: c² − b² = a²",
                    "Step 2 — Square-root both sides: a = √(c² − b²)",
                    "Critical note: √(c² − b²) ≠ c − b; the square root applies to the entire expression (c² − b²)",
                    "Verification: let a = 3, b = 4 → c² = 9 + 16 = 25 → c = 5. Check: a = √(25 − 16) = √9 = 3 ✓"
                ]
            },
            {
                type: "Isolate v from kinetic energy formula KE = (1/2)mv²",
                problem: "Rearrange KE = (1/2)mv² to make v the subject.",
                solution: [
                    "Step 1 — Multiply both sides by 2: 2KE = mv²",
                    "Step 2 — Divide both sides by m: 2KE/m = v²",
                    "Step 3 — Square-root both sides: v = √(2KE/m)",
                    "Verification: let m = 4, v = 3 → KE = (1/2)(4)(9) = 18. Check: v = √(2 × 18/4) = √9 = 3 ✓"
                ]
            }
        ]
    },

    verificationMethod: {
        principle: "After rearranging, always verify by assigning specific numerical values to all variables, computing the result using the original formula, and confirming the rearranged formula gives the same value for the target variable.",
        steps: [
            "Choose simple numerical values for all variables except the target variable",
            "Compute the target variable's value using the original formula",
            "Substitute all values into the rearranged formula",
            "Confirm the rearranged formula produces the same value for the target variable",
            "If the values do not agree, there is an error in the rearrangement — identify which step breaks the verification"
        ],
        workedExample: {
            problem: "Verify the rearrangement of v = u + at for t: t = (v − u)/a.",
            solution: [
                "Step 1 — Choose values: u = 5, a = 4, t = 3",
                "Step 2 — Compute v from original: v = 5 + 4(3) = 17",
                "Step 3 — Substitute into rearranged formula: t = (17 − 5)/4 = 12/4 = 3",
                "Step 4 — Result matches original t = 3 ✓",
                "The rearrangement is verified correct for this set of values"
            ]
        }
    },

    commonFormulaeLibrary: {
        physics: {
            "v = u + at":          { rearrangedFor: { u: "u = v − at", a: "a = (v − u)/t", t: "t = (v − u)/a" } },
            "s = ut + (1/2)at²":   { rearrangedFor: { u: "u = (s − (1/2)at²)/t", a: "a = 2(s − ut)/t²" } },
            "F = ma":              { rearrangedFor: { m: "m = F/a", a: "a = F/m" } },
            "E = mc²":             { rearrangedFor: { m: "m = E/c²", c: "c = √(E/m)" } },
            "KE = (1/2)mv²":       { rearrangedFor: { m: "m = 2KE/v²", v: "v = √(2KE/m)" } },
            "P = IV":              { rearrangedFor: { I: "I = P/V", V: "V = P/I" } },
            "V = IR":              { rearrangedFor: { I: "I = V/R", R: "R = V/I" } },
            "T = 2π√(l/g)":        { rearrangedFor: { l: "l = gT²/(4π²)", g: "g = 4π²l/T²" } }
        },
        geometry: {
            "A = πr²":             { rearrangedFor: { r: "r = √(A/π)" } },
            "C = 2πr":             { rearrangedFor: { r: "r = C/(2π)" } },
            "A = (1/2)bh":         { rearrangedFor: { b: "b = 2A/h", h: "h = 2A/b" } },
            "V = lwh":             { rearrangedFor: { l: "l = V/(wh)", w: "w = V/(lh)", h: "h = V/(lw)" } },
            "c² = a² + b²":        { rearrangedFor: { a: "a = √(c² − b²)", b: "b = √(c² − a²)" } }
        },
        chemistry: {
            "PV = nRT":            { rearrangedFor: { P: "P = nRT/V", V: "V = nRT/P", T: "T = PV/(nR)", n: "n = PV/(RT)" } },
            "1/f = 1/u + 1/v":     { rearrangedFor: { u: "u = fv/(v − f)", v: "v = fu/(u − f)", f: "f = uv/(u + v)" } }
        }
    },

    topicSummary: {
        coreInsights: [
            "Changing the subject of a formula applies the same inverse-operation logic as solving a linear equation — the only conceptual extension is that the target variable may appear in multiple terms, requiring factorising before isolation.",
            "The reverse-order rule is fundamental: the last operation applied to the target variable is always the first to be undone, mirroring the BIDMAS order in reverse.",
            "When the target variable appears in more than one term, no amount of inverse operations will isolate it without first factorising — collecting and factorising is not an optional step but a structural necessity.",
            "Fractions require clearing denominators by multiplying both sides before attempting isolation; attempting to isolate a variable while it remains in a denominator almost always produces an error.",
            "Squaring and square-rooting must be applied to the entire side as a unit — applying them to individual terms is the single most common error in advanced rearranging.",
            "Verification by substituting numbers is not a luxury — it is a rapid and reliable method for catching errors that are invisible to symbol-level checking.",
            "Every formula in physics, chemistry, and geometry can be rearranged using only six inverse operation types: ±, ×/÷, square/square root, cube/cube root, log/exponent, and trig/inverse trig — the first three cover the entire GCSE and A-level curriculum."
        ],
        keyStrategies: {
            oneStep:      "Identify the single operation on the target variable → apply its inverse to both sides",
            twoStep:      "Identify the two operations → undo in reverse order (last applied, first undone)",
            multiStep:    "Target variable on both sides → expand, collect, factorise, divide",
            fractions:    "Multiply both sides by the denominator → proceed with standard inverse operations",
            squaresRoots: "Square or square-root both complete sides as a unit → never apply to individual terms"
        },
        commonMistakesToAvoid: [
            "Undoing operations in the wrong order — always undo the last-applied operation first",
            "Applying an operation to only one term on a side instead of the entire side",
            "Forgetting to factorise when the target variable appears in more than one term — no amount of moving terms will isolate it without factorising",
            "Writing √(a² + b²) = a + b — square roots do not distribute over addition",
            "Forgetting to take the reciprocal of both sides when the target variable is isolated in a denominator as 1/x = expression",
            "Not verifying the rearrangement with numerical values — a 30-second check prevents losing all marks on a multi-mark question"
        ],
        connections: [
            "Linear equations: formula rearranging is the symbolic generalisation of solving equations — the same logic, applied to letters instead of numbers",
            "Physics: every kinematic, electrical, and thermodynamic formula requires rearranging in problem-solving contexts",
            "Chemistry: the ideal gas law PV = nRT and the lens formula both require multi-step rearranging with fractions",
            "Geometry: circle, triangle, and volume formulae all involve rearranging for a specific dimension",
            "Calculus: implicit differentiation is an advanced form of formula rearranging applied to derivatives"
        ],
        examReadinessChecklist: [
            "Can you identify the subject of any given formula instantly?",
            "Can you rearrange a two-step formula (e.g. v = u + at for t) showing every step?",
            "Can you identify when the target variable appears on both sides and apply the collect-factorise-divide strategy?",
            "Can you clear a denominator and rearrange a formula containing fractions (e.g. 1/f = 1/u + 1/v)?",
            "Can you square both sides correctly without distributing the square root over individual terms?",
            "Can you verify any rearrangement in under 60 seconds using substituted numerical values?"
        ]
    }
},

equations: {
    title: "Equations: Quadratic, Polynomial, Rational, Absolute Value, and Exponential",

    databaseLinks: {
        misconceptions: [
            'quadraticEquations',
            'polynomialEquations',
            'rationalEquations',
            'absoluteValueEquations',
            'exponentialLogarithmicEquations'
        ],
        contextualScenarios: [
            'quadraticEquations',
            'polynomialEquations',
            'rationalEquations',
            'absoluteValueEquations',
            'exponentialLogarithmicEquations'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'graphingPractice',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'workedExampleAnalysis'
        ],
        assessmentRubrics: [
            'remember',
            'understand',
            'apply',
            'analyze',
            'evaluate',
            'create'
        ],
        assessmentQuestions: [
            'quadraticEquations',
            'polynomialEquations',
            'rationalEquations',
            'absoluteValueEquations',
            'exponentialLogarithmicEquations'
        ]
    },

    conceptLinks: {
        "A quadratic equation is a degree-2 polynomial equation that can have zero, one, or two real solutions": {
            misconceptions:      ['quadraticEquations'],
            scenarios:           ['quadraticEquations'],
            studyTips:           ['diagrams', 'comparisonTables', 'graphingPractice'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['quadraticEquations']
        },
        "Polynomial equations of degree n have at most n roots, counted with multiplicity": {
            misconceptions:      ['polynomialEquations'],
            scenarios:           ['polynomialEquations'],
            studyTips:           ['diagrams', 'flashcards', 'workedExampleAnalysis'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['polynomialEquations']
        },
        "A rational equation contains at least one rational expression and requires checking for extraneous solutions": {
            misconceptions:      ['rationalEquations'],
            scenarios:           ['rationalEquations'],
            studyTips:           ['comparisonTables', 'flashcards', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['rationalEquations']
        },
        "An absolute value equation splits into two cases because absolute value measures distance from zero": {
            misconceptions:      ['absoluteValueEquations'],
            scenarios:           ['absoluteValueEquations'],
            studyTips:           ['diagrams', 'mnemonics', 'practiceRoutines'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['absoluteValueEquations']
        },
        "Exponential and logarithmic equations are solved by applying inverse operations using logarithm and exponent laws": {
            misconceptions:      ['exponentialLogarithmicEquations'],
            scenarios:           ['exponentialLogarithmicEquations'],
            studyTips:           ['comparisonTables', 'flashcards', 'workedExampleAnalysis'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['exponentialLogarithmicEquations']
        }
    },

    topicIntroduction: {
        overview: "An equation is a statement that two expressions are equal. While linear equations express constant-rate relationships, the equations studied in this lesson arise wherever growth accelerates, distances are measured symmetrically, quantities are divided, or change compounds over time. This lesson develops fluency across five equation families — quadratic, polynomial, rational, absolute value, and exponential/logarithmic — equipping students with a toolkit for solving every type encountered in secondary and early undergraduate mathematics.",
        whyItMatters: "Quadratic equations model projectile motion, structural load, and optimization. Polynomial equations model complex engineering curves and economic models. Rational equations describe rates, mixtures, and electrical circuits. Absolute value equations model tolerance and error bounds in manufacturing and measurement. Exponential and logarithmic equations govern population growth, radioactive decay, pH, and earthquake magnitude. Every quantitative discipline depends on recognizing which equation family applies to a given situation and executing the correct solution strategy.",
        bigPicture: "Each equation family in this lesson corresponds to a geometric curve: quadratics to parabolas, higher polynomials to wavy curves, rationals to hyperbola-like shapes, absolute values to V-shapes, and exponentials/logarithms to their characteristic growth and decay curves. Solving an equation means finding where its graph crosses the x-axis — the roots. Every algebraic technique in this lesson is a method for locating those crossings precisely.",
        priorKnowledge: [
            "Linear equations: solving by inverse operations, maintaining equality",
            "Algebraic manipulation: expanding brackets, collecting like terms, factorising simple expressions",
            "Index laws: aˣ × aʸ = aˣ⁺ʸ, (aˣ)ʸ = aˣʸ, a⁰ = 1",
            "The coordinate plane: plotting points, sketching curves",
            "Concept of a function and its graph",
            "Square roots and their properties: √(x²) = |x|, not just x"
        ],
        topicRoadmap: [
            "Quadratic equations: factoring, completing the square, the quadratic formula, the discriminant",
            "Polynomial equations: the Factor Theorem, synthetic division, identifying rational roots",
            "Rational equations: clearing denominators, identifying restrictions, extraneous solutions",
            "Absolute value equations: the two-case method, geometric interpretation as distance",
            "Exponential equations: same-base method, logarithmic method",
            "Logarithmic equations: applying log laws, converting between logarithmic and exponential form",
            "Connections across equation types: choosing the correct strategy for an unfamiliar equation"
        ]
    },

    concepts: [
        "A quadratic equation is a degree-2 polynomial equation that can have zero, one, or two real solutions",
        "Polynomial equations of degree n have at most n roots, counted with multiplicity",
        "A rational equation contains at least one rational expression and requires checking for extraneous solutions",
        "An absolute value equation splits into two cases because absolute value measures distance from zero",
        "Exponential and logarithmic equations are solved by applying inverse operations using logarithm and exponent laws",
        "The discriminant b² − 4ac determines the number and nature of a quadratic equation's solutions"
    ],

    theory: "An equation asserts equality between two expressions. Solving an equation means finding all values of the unknown that make the equality true. The family of equation types — quadratic, polynomial, rational, absolute value, exponential, logarithmic — are distinguished by the operations applied to the unknown, and each family requires its own solution strategy. The Fundamental Theorem of Algebra guarantees that a polynomial of degree n has exactly n roots in the complex numbers, providing the theoretical upper bound on solutions for every polynomial equation.",

    keyDefinitions: {
        "Quadratic Equation":       "A polynomial equation of degree 2, written in standard form as ax² + bx + c = 0 where a ≠ 0",
        "Discriminant":             "The expression b² − 4ac inside the quadratic formula; determines the number and nature of solutions",
        "Root / Solution":          "A value of x that makes the equation true; corresponds geometrically to an x-intercept",
        "Multiplicity":             "How many times a particular root is repeated; a root of multiplicity 2 corresponds to the parabola touching (not crossing) the x-axis",
        "Factor Theorem":           "If f(a) = 0, then (x − a) is a factor of the polynomial f(x)",
        "Rational Expression":      "A fraction whose numerator and/or denominator is a polynomial",
        "Extraneous Solution":      "A value produced algebraically that does not satisfy the original equation, typically arising when both sides are squared or when a denominator is cleared",
        "Absolute Value":           "|x| is the distance of x from zero on the number line; always non-negative",
        "Exponential Equation":     "An equation in which the unknown appears in an exponent, e.g. 2ˣ = 32",
        "Logarithm":                "logₐ(x) is the power to which base a must be raised to give x; log and exponent are inverse operations",
        "Completing the Square":    "Rewriting ax² + bx + c in the form a(x − h)² + k to expose the vertex and solve for x",
        "Synthetic Division":       "A compact method for dividing a polynomial by a linear factor (x − a), used in the Factor Theorem"
    },

    quadraticEquations: {
        standardForm: "ax² + bx + c = 0, where a ≠ 0",
        methods: {
            factoring: {
                whenToUse:   "When the quadratic factors neatly over the integers — try this first",
                procedure: [
                    "Write the equation in standard form ax² + bx + c = 0",
                    "Find two numbers that multiply to ac and add to b",
                    "Split the middle term and factor by grouping, or directly factor the trinomial",
                    "Apply the Zero Product Property: if AB = 0 then A = 0 or B = 0",
                    "Solve each linear equation and verify both solutions"
                ],
                workedExample: {
                    problem: "Solve: x² + 5x + 6 = 0",
                    solution: [
                        "Step 1 — Already in standard form: a=1, b=5, c=6",
                        "Step 2 — Find two numbers multiplying to 6 and adding to 5: 2 and 3",
                        "Step 3 — Factor: (x + 2)(x + 3) = 0",
                        "Step 4 — Zero Product Property: x + 2 = 0 or x + 3 = 0",
                        "Step 5 — Solve: x = −2 or x = −3",
                        "Check x = −2: (−2)² + 5(−2) + 6 = 4 − 10 + 6 = 0 ✓",
                        "Check x = −3: (−3)² + 5(−3) + 6 = 9 − 15 + 6 = 0 ✓"
                    ]
                }
            },
            completingTheSquare: {
                whenToUse:   "When a = 1 and b is even; always works; reveals the vertex form",
                procedure: [
                    "Write the equation in the form x² + bx = −c (move constant to right)",
                    "Add (b/2)² to both sides",
                    "Write the left side as a perfect square: (x + b/2)²",
                    "Take the square root of both sides (include ±)",
                    "Solve for x"
                ],
                workedExample: {
                    problem: "Solve: x² + 6x + 5 = 0 by completing the square",
                    solution: [
                        "Step 1 — Rearrange: x² + 6x = −5",
                        "Step 2 — Add (6/2)² = 9 to both sides: x² + 6x + 9 = 4",
                        "Step 3 — Perfect square: (x + 3)² = 4",
                        "Step 4 — Square root both sides: x + 3 = ±2",
                        "Step 5 — Solve: x = −3 + 2 = −1 or x = −3 − 2 = −5",
                        "Check x = −1: 1 − 6 + 5 = 0 ✓",
                        "Check x = −5: 25 − 30 + 5 = 0 ✓"
                    ]
                }
            },
            quadraticFormula: {
                formula:     "x = (−b ± √(b² − 4ac)) / 2a",
                whenToUse:   "Always works; use when factoring is not obvious or when the discriminant is needed",
                procedure: [
                    "Write the equation in standard form ax² + bx + c = 0",
                    "Identify a, b, and c",
                    "Calculate the discriminant: Δ = b² − 4ac",
                    "Substitute into the formula: x = (−b ± √Δ) / 2a",
                    "Simplify both solutions"
                ],
                workedExample: {
                    problem: "Solve: 2x² − 3x − 2 = 0",
                    solution: [
                        "Step 1 — Identify: a = 2, b = −3, c = −2",
                        "Step 2 — Discriminant: Δ = (−3)² − 4(2)(−2) = 9 + 16 = 25",
                        "Step 3 — Apply formula: x = (3 ± √25) / 4 = (3 ± 5) / 4",
                        "Step 4 — Two solutions: x = (3 + 5)/4 = 8/4 = 2 or x = (3 − 5)/4 = −2/4 = −1/2",
                        "Check x = 2: 2(4) − 3(2) − 2 = 8 − 6 − 2 = 0 ✓",
                        "Check x = −1/2: 2(1/4) − 3(−1/2) − 2 = 0.5 + 1.5 − 2 = 0 ✓"
                    ]
                }
            }
        },
        discriminant: {
            formula:      "Δ = b² − 4ac",
            cases: {
                positive: "Δ > 0: two distinct real roots; parabola crosses x-axis at two points",
                zero:     "Δ = 0: one repeated real root (double root); parabola touches x-axis at exactly one point",
                negative: "Δ < 0: no real roots; two complex conjugate roots; parabola does not cross the x-axis"
            },
            workedExample: {
                problem: "Without solving, determine the number of real solutions for: (a) x² − 4x + 4 = 0, (b) x² − 4x + 3 = 0, (c) x² − 4x + 5 = 0",
                solution: [
                    "(a) Δ = (−4)² − 4(1)(4) = 16 − 16 = 0 → one repeated real root",
                    "(b) Δ = (−4)² − 4(1)(3) = 16 − 12 = 4 > 0 → two distinct real roots",
                    "(c) Δ = (−4)² − 4(1)(5) = 16 − 20 = −4 < 0 → no real roots"
                ]
            }
        }
    },

    polynomialEquations: {
        overview: "A polynomial equation of degree n takes the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀ = 0. By the Fundamental Theorem of Algebra, it has exactly n roots in the complex numbers (counted with multiplicity). Real roots correspond to x-intercepts of the polynomial's graph.",
        factorTheorem: {
            statement:   "If f(a) = 0, then (x − a) is a factor of f(x). Conversely, if (x − a) is a factor, then f(a) = 0.",
            procedure: [
                "Identify candidate rational roots using the Rational Root Theorem: ±(factors of constant term)/(factors of leading coefficient)",
                "Test candidates by substitution: if f(a) = 0, then (x − a) is a factor",
                "Divide f(x) by (x − a) using synthetic or long division to obtain the depressed polynomial",
                "Repeat on the depressed polynomial until fully factored",
                "Set each factor equal to zero and solve"
            ],
            workedExample: {
                problem: "Solve: x³ − 6x² + 11x − 6 = 0",
                solution: [
                    "Step 1 — Rational Root candidates: ±1, ±2, ±3, ±6",
                    "Step 2 — Test x = 1: 1 − 6 + 11 − 6 = 0 ✓ → (x − 1) is a factor",
                    "Step 3 — Synthetic division by (x − 1):",
                    "         Coefficients: 1 | −6 | 11 | −6",
                    "         Bring down 1. 1×1=1; −6+1=−5. 1×(−5)=−5; 11+(−5)=6. 1×6=6; −6+6=0",
                    "         Depressed polynomial: x² − 5x + 6",
                    "Step 4 — Factor depressed polynomial: (x − 2)(x − 3)",
                    "Step 5 — Complete factorisation: (x − 1)(x − 2)(x − 3) = 0",
                    "Step 6 — Solutions: x = 1, x = 2, x = 3",
                    "Check: each root gives 0 when substituted back ✓"
                ]
            }
        },
        multiplicityAndGraphs: {
            oddMultiplicity:  "The graph crosses the x-axis at roots with odd multiplicity (1, 3, 5, …)",
            evenMultiplicity: "The graph touches but does not cross the x-axis at roots with even multiplicity (2, 4, …)",
            example: "f(x) = (x − 1)²(x + 2): root x = 1 has multiplicity 2 (graph touches); root x = −2 has multiplicity 1 (graph crosses)"
        }
    },

    rationalEquations: {
        overview: "A rational equation contains at least one fraction with a variable in the denominator. The core strategy is to multiply through by the LCD to clear all fractions — but this may introduce extraneous solutions, so checking is mandatory.",
        procedure: [
            "State the restrictions: identify all values of x that make any denominator zero — these are excluded from the solution set",
            "Find the LCD of all rational expressions",
            "Multiply every term on both sides by the LCD to clear fractions",
            "Solve the resulting polynomial equation",
            "Check all solutions against the restrictions — discard any extraneous solutions"
        ],
        workedExamples: [
            {
                type: "Simple rational equation",
                problem: "Solve: 3/x + 1/2 = 5/x",
                solution: [
                    "Step 1 — Restriction: x ≠ 0",
                    "Step 2 — LCD = 2x",
                    "Step 3 — Multiply through by 2x: 2x(3/x) + 2x(1/2) = 2x(5/x)",
                    "Step 4 — Simplify: 6 + x = 10",
                    "Step 5 — Solve: x = 4",
                    "Check: x = 4 ≠ 0 ✓. Substitute: 3/4 + 1/2 = 3/4 + 2/4 = 5/4 = 5/4 ✓"
                ]
            },
            {
                type: "Rational equation with extraneous solution",
                problem: "Solve: x/(x − 2) = 2/(x − 2) + 1",
                solution: [
                    "Step 1 — Restriction: x ≠ 2",
                    "Step 2 — LCD = (x − 2)",
                    "Step 3 — Multiply through by (x − 2): x = 2 + (x − 2)",
                    "Step 4 — Simplify: x = x",
                    "Step 5 — This is an identity — but we must check against restrictions",
                    "x = 2 is the only candidate from the identity, but x = 2 is a restriction",
                    "Conclusion: no solution (the equation has no valid solution)"
                ]
            },
            {
                type: "Rational equation with two solutions — one extraneous",
                problem: "Solve: (x + 1)/(x − 1) = 2/(x² − 1) + 2",
                solution: [
                    "Step 1 — Factor denominator: x² − 1 = (x−1)(x+1); Restrictions: x ≠ 1, x ≠ −1",
                    "Step 2 — LCD = (x − 1)(x + 1)",
                    "Step 3 — Multiply through: (x+1)² = 2 + 2(x−1)(x+1)",
                    "Step 4 — Expand: x² + 2x + 1 = 2 + 2(x² − 1)",
                    "Step 5 — Simplify: x² + 2x + 1 = 2x² → x² − 2x − 1 = 0",
                    "Wait — re-expand: 2 + 2x² − 2 = 2x², so x² + 2x + 1 = 2x²",
                    "Rearrange: x² − 2x − 1 = 0. Quadratic formula: x = (2 ± √8)/2 = 1 ± √2",
                    "Step 6 — Neither 1+√2 nor 1−√2 equals 1 or −1, so both are valid",
                    "Solutions: x = 1 + √2 and x = 1 − √2"
                ]
            }
        ]
    },

    absoluteValueEquations: {
        definition:        "|x| = x if x ≥ 0, and |x| = −x if x < 0. Geometrically, |x| is the distance of x from 0.",
        coreProperty:      "If |expression| = k where k > 0, then expression = k or expression = −k. If k = 0, then expression = 0 (one solution). If k < 0, then there is no solution (distance cannot be negative).",
        procedure: [
            "Isolate the absolute value expression on one side",
            "Check the value on the other side: if negative, write 'no solution'; if zero, set expression = 0; if positive, split into two cases",
            "Case 1: expression = k",
            "Case 2: expression = −k",
            "Solve both cases independently",
            "Verify both solutions in the original equation"
        ],
        workedExamples: [
            {
                type: "Basic absolute value equation",
                problem: "Solve: |2x − 3| = 7",
                solution: [
                    "Step 1 — Absolute value is already isolated",
                    "Step 2 — Right side = 7 > 0, so split into two cases",
                    "Case 1: 2x − 3 = 7 → 2x = 10 → x = 5",
                    "Case 2: 2x − 3 = −7 → 2x = −4 → x = −2",
                    "Check x = 5: |2(5) − 3| = |7| = 7 ✓",
                    "Check x = −2: |2(−2) − 3| = |−7| = 7 ✓",
                    "Solutions: x = 5 or x = −2"
                ]
            },
            {
                type: "Absolute value equation requiring isolation first",
                problem: "Solve: 3|x + 1| − 5 = 10",
                solution: [
                    "Step 1 — Isolate: add 5 to both sides: 3|x + 1| = 15",
                    "Step 2 — Divide by 3: |x + 1| = 5",
                    "Step 3 — Right side = 5 > 0, split into two cases",
                    "Case 1: x + 1 = 5 → x = 4",
                    "Case 2: x + 1 = −5 → x = −6",
                    "Check x = 4: 3|5| − 5 = 15 − 5 = 10 ✓",
                    "Check x = −6: 3|−5| − 5 = 15 − 5 = 10 ✓",
                    "Solutions: x = 4 or x = −6"
                ]
            },
            {
                type: "Absolute value equation with no solution",
                problem: "Solve: |3x + 2| = −4",
                solution: [
                    "Step 1 — Right side = −4 < 0",
                    "Step 2 — Absolute value is always ≥ 0, so it can never equal a negative number",
                    "Conclusion: No solution"
                ]
            }
        ]
    },

    exponentialEquations: {
        overview: "An exponential equation has the unknown in the exponent. Two strategies apply: the same-base method (when both sides can be written with the same base) and the logarithmic method (the general method).",
        sameBaseMethod: {
            principle:  "If aˣ = aʸ, then x = y. Rewrite both sides with the same base, then equate exponents.",
            workedExample: {
                problem: "Solve: 8ˣ = 32",
                solution: [
                    "Step 1 — Express both sides as powers of 2: 8 = 2³, 32 = 2⁵",
                    "Step 2 — Rewrite: (2³)ˣ = 2⁵ → 2³ˣ = 2⁵",
                    "Step 3 — Equate exponents: 3x = 5",
                    "Step 4 — Solve: x = 5/3",
                    "Check: 8^(5/3) = (8^(1/3))⁵ = 2⁵ = 32 ✓"
                ]
            }
        },
        logarithmicMethod: {
            principle:  "Take logarithms of both sides. Apply the power rule: log(aˣ) = x·log(a). Solve for x.",
            workedExample: {
                problem: "Solve: 3ˣ = 20",
                solution: [
                    "Step 1 — Take log of both sides: log(3ˣ) = log(20)",
                    "Step 2 — Power rule: x·log(3) = log(20)",
                    "Step 3 — Solve: x = log(20)/log(3) = 1.301/0.477 ≈ 2.727",
                    "Check: 3^2.727 ≈ 20 ✓"
                ]
            }
        },
        workedExampleGrowth: {
            problem: "Solve: 2·5ˣ⁺¹ = 250",
            solution: [
                "Step 1 — Divide both sides by 2: 5ˣ⁺¹ = 125",
                "Step 2 — Express 125 as a power of 5: 125 = 5³",
                "Step 3 — Equate exponents: x + 1 = 3",
                "Step 4 — Solve: x = 2",
                "Check: 2·5^(2+1) = 2·125 = 250 ✓"
            ]
        }
    },

    logarithmicEquations: {
        overview: "A logarithmic equation has the unknown inside a logarithm. The core strategies are: consolidate all log terms into a single logarithm using log laws, then convert to exponential form; or exponentiate both sides if logs appear on both sides.",
        logLaws: {
            product:    "logₐ(MN) = logₐ(M) + logₐ(N)",
            quotient:   "logₐ(M/N) = logₐ(M) − logₐ(N)",
            power:      "logₐ(Mⁿ) = n·logₐ(M)",
            changeBase: "logₐ(x) = log(x)/log(a) = ln(x)/ln(a)"
        },
        procedure: [
            "Use log laws to combine all logarithmic terms into a single log expression",
            "Convert from logarithmic form logₐ(x) = c to exponential form x = aᶜ",
            "Solve the resulting equation",
            "Check all solutions — discard any that produce a logarithm of zero or a negative number (domain restriction)"
        ],
        workedExamples: [
            {
                type: "Single logarithm",
                problem: "Solve: log₂(x + 3) = 4",
                solution: [
                    "Step 1 — Convert to exponential form: x + 3 = 2⁴ = 16",
                    "Step 2 — Solve: x = 13",
                    "Check: log₂(13 + 3) = log₂(16) = 4 ✓ (argument 16 > 0 ✓)"
                ]
            },
            {
                type: "Using log laws to combine",
                problem: "Solve: log(x) + log(x − 3) = 1 (base 10)",
                solution: [
                    "Step 1 — Combine using product law: log(x(x − 3)) = 1",
                    "Step 2 — Convert to exponential form: x(x − 3) = 10¹ = 10",
                    "Step 3 — Expand: x² − 3x = 10 → x² − 3x − 10 = 0",
                    "Step 4 — Factor: (x − 5)(x + 2) = 0 → x = 5 or x = −2",
                    "Step 5 — Check domain: x must make both log(x) and log(x−3) defined",
                    "x = 5: log(5) > 0 ✓, log(2) > 0 ✓ → valid",
                    "x = −2: log(−2) undefined ✗ → extraneous",
                    "Solution: x = 5"
                ]
            }
        ]
    },

    topicSummary: {
        coreInsights: [
            "Every equation type in this lesson corresponds to a curve family — solving the equation means finding where that curve crosses the x-axis, and the number of crossings is bounded by the degree.",
            "The discriminant Δ = b² − 4ac is the single most efficient tool for determining the nature of a quadratic's solutions before doing any full computation.",
            "The Zero Product Property is the engine behind all factoring methods: once an expression equals zero, any factor equalling zero gives a root.",
            "Rational equations and logarithmic equations share a critical feature: the solution process can introduce extraneous solutions, and checking is mandatory, not optional.",
            "Absolute value equations must be isolated before splitting into cases; splitting too early (before isolation) is the most common structural error.",
            "The same-base method for exponential equations is elegant but limited — the logarithmic method works universally and should be the default when bases cannot be matched easily.",
            "The Factor Theorem reduces a degree-n polynomial equation to a sequence of increasingly simpler equations — the strategy of 'find one root, factor it out, repeat' always terminates.",
            "Logarithm laws are not just algebraic rules — they are consequences of index laws, and every log manipulation can be verified by converting back to exponential form."
        ],
        keyFormulas: {
            quadraticFormula:     "x = (−b ± √(b² − 4ac)) / 2a",
            discriminant:         "Δ = b² − 4ac",
            completingTheSquare:  "x² + bx = (x + b/2)² − (b/2)²",
            factorTheorem:        "f(a) = 0 ↔ (x − a) | f(x)",
            absoluteValue:        "|A| = k ↔ A = k or A = −k (k > 0)",
            logToExp:             "logₐ(x) = c ↔ x = aᶜ",
            expToLog:             "aˣ = b ↔ x = logₐ(b) = log(b)/log(a)",
            logProduct:           "logₐ(MN) = logₐ(M) + logₐ(N)",
            logQuotient:          "logₐ(M/N) = logₐ(M) − logₐ(N)",
            logPower:             "logₐ(Mⁿ) = n·logₐ(M)"
        },
        discriminantSummary: {
            positive: { solutions: "Two distinct real roots",  geometry: "Parabola crosses x-axis twice",     example: "x² − 5x + 4 = 0, Δ = 9" },
            zero:     { solutions: "One repeated real root",   geometry: "Parabola touches x-axis once",      example: "x² − 4x + 4 = 0, Δ = 0" },
            negative: { solutions: "No real roots",            geometry: "Parabola does not meet x-axis",     example: "x² + x + 1 = 0, Δ = −3"  }
        },
        commonMistakesToAvoid: [
            "Taking the square root of both sides without including ±: √(x²) = |x|, so x² = 9 gives x = ±3, not just x = 3",
            "Forgetting to check for extraneous solutions in rational and logarithmic equations",
            "Splitting an absolute value equation into cases before isolating the absolute value expression",
            "Misidentifying a, b, c in the quadratic formula when the equation is not in standard form ax² + bx + c = 0",
            "Cancelling a variable factor from both sides of an equation (e.g. dividing by x) without considering that the factor might be zero — this loses solutions",
            "Applying log to each term separately: log(A + B) ≠ log(A) + log(B)",
            "Treating a double root (Δ = 0) as no solution rather than one repeated solution",
            "Using the same-base method when the bases cannot genuinely be matched — defaulting to logarithms is safer"
        ],
        connections: [
            "Calculus: quadratic and polynomial equations arise as derivative equations when finding stationary points of higher-degree functions",
            "Physics: projectile motion produces quadratic equations; radioactive decay and charging/discharging capacitors produce exponential equations",
            "Chemistry: pH = −log[H⁺] is a logarithmic equation; equilibrium concentrations often require solving rational equations",
            "Engineering: rational equations arise in circuit analysis (parallel resistances); polynomial equations arise in control system stability analysis",
            "Statistics: transforming exponential growth data using logarithms linearises the relationship, connecting exponential equations to linear regression",
            "Financial mathematics: compound interest A = P(1 + r)ⁿ is an exponential equation; finding the time to double an investment requires logarithms"
        ],
        examReadinessChecklist: [
            "Can you factor a quadratic, complete the square, and apply the quadratic formula — and choose between them efficiently?",
            "Can you use the discriminant to determine the nature of roots without fully solving?",
            "Can you apply the Factor Theorem: test a candidate root, perform synthetic division, and factor the depressed polynomial?",
            "Can you solve a rational equation, state restrictions, and identify extraneous solutions?",
            "Can you solve an absolute value equation by isolating the absolute value first, then splitting into two cases?",
            "Can you solve an exponential equation using both the same-base method and the logarithmic method?",
            "Can you apply log laws to consolidate a logarithmic equation and convert to exponential form to solve?",
            "Can you identify which equation family applies to an unseen problem and select the correct opening strategy?"
        ]
    }
},

const EndSection3 = "close"