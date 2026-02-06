// Enhanced Quadratic Inequalities Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedQuadraticInequalitiesMathematicalWorkbook {
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
        this.initializeQuadraticInequalitySolvers();
        this.initializeQuadraticInequalityLessons();
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
        this.initializeIntervalNotationDatabase();
        this.initializeSignAnalysisDatabase();
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
                positiveRegion: '#d4edda',
                negativeRegion: '#f8d7da',
                criticalPoint: '#ffc107'
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
                positiveRegion: '#c3e6cb',
                negativeRegion: '#f5c6cb',
                criticalPoint: '#ffc107'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeMathSymbols() {
        return {
            // Inequality symbols
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'lt': '<', 'gt': '>',
            'approx': '≈', 'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Set notation
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'emptyset': '∅',
            // Interval notation
            'infinity_pos': '∞', 'infinity_neg': '-∞'
        };
    }

    initializeQuadraticInequalitySolvers() {
        this.quadraticInequalityTypes = {
            standard_greater: {
                patterns: [
                    /([+-]?\d*\.?\d*)x\^2\s*([+-]\s*\d*\.?\d*)x\s*([+-]\s*\d*\.?\d*)\s*>\s*0/,
                    /ax\^2\s*\+\s*bx\s*\+\s*c\s*>\s*0/i,
                    /quadratic.*greater.*than.*zero/i
                ],
                solver: this.solveQuadraticInequalityGreater.bind(this),
                name: 'Quadratic Inequality (Greater Than)',
                category: 'standard_inequality',
                description: 'ax² + bx + c > 0',
                inequalityType: '>'
            },
            standard_less: {
                patterns: [
                    /([+-]?\d*\.?\d*)x\^2\s*([+-]\s*\d*\.?\d*)x\s*([+-]\s*\d*\.?\d*)\s*<\s*0/,
                    /ax\^2\s*\+\s*bx\s*\+\s*c\s*<\s*0/i,
                    /quadratic.*less.*than.*zero/i
                ],
                solver: this.solveQuadraticInequalityLess.bind(this),
                name: 'Quadratic Inequality (Less Than)',
                category: 'standard_inequality',
                description: 'ax² + bx + c < 0',
                inequalityType: '<'
            },
            standard_geq: {
                patterns: [
                    /([+-]?\d*\.?\d*)x\^2\s*([+-]\s*\d*\.?\d*)x\s*([+-]\s*\d*\.?\d*)\s*>=\s*0/,
                    /([+-]?\d*\.?\d*)x\^2\s*([+-]\s*\d*\.?\d*)x\s*([+-]\s*\d*\.?\d*)\s*≥\s*0/,
                    /quadratic.*greater.*equal/i
                ],
                solver: this.solveQuadraticInequalityGeq.bind(this),
                name: 'Quadratic Inequality (Greater Than or Equal)',
                category: 'standard_inequality',
                description: 'ax² + bx + c ≥ 0',
                inequalityType: '>='
            },
            standard_leq: {
                patterns: [
                    /([+-]?\d*\.?\d*)x\^2\s*([+-]\s*\d*\.?\d*)x\s*([+-]\s*\d*\.?\d*)\s*<=\s*0/,
                    /([+-]?\d*\.?\d*)x\^2\s*([+-]\s*\d*\.?\d*)x\s*([+-]\s*\d*\.?\d*)\s*≤\s*0/,
                    /quadratic.*less.*equal/i
                ],
                solver: this.solveQuadraticInequalityLeq.bind(this),
                name: 'Quadratic Inequality (Less Than or Equal)',
                category: 'standard_inequality',
                description: 'ax² + bx + c ≤ 0',
                inequalityType: '<='
            },
            factored_form: {
                patterns: [
                    /\(x\s*[+-]\s*\d+\)\(x\s*[+-]\s*\d+\)\s*[<>≤≥]/,
                    /factored.*inequality/i
                ],
                solver: this.solveFactoredInequality.bind(this),
                name: 'Factored Quadratic Inequality',
                category: 'factored',
                description: '(x - r₁)(x - r₂) compared to 0'
            },
            vertex_form: {
                patterns: [
                    /a\(x\s*-\s*h\)\^2\s*\+\s*k\s*[<>≤≥]/,
                    /vertex.*form.*inequality/i
                ],
                solver: this.solveVertexFormInequality.bind(this),
                name: 'Vertex Form Inequality',
                category: 'vertex_form',
                description: 'a(x - h)² + k compared to 0'
            },
            rational_inequality: {
                patterns: [
                    /\(.*x.*\)\/\(.*x.*\)\s*[<>≤≥]/,
                    /rational.*inequality/i,
                    /quotient.*inequality/i
                ],
                solver: this.solveRationalInequality.bind(this),
                name: 'Rational Inequality',
                category: 'rational',
                description: 'P(x)/Q(x) compared to 0'
            },
            absolute_value_quadratic: {
                patterns: [
                    /\|.*x\^2.*\|\s*[<>≤≥]/,
                    /absolute.*quadratic/i
                ],
                solver: this.solveAbsoluteValueQuadratic.bind(this),
                name: 'Absolute Value with Quadratic',
                category: 'absolute_value',
                description: '|ax² + bx + c| compared to value'
            },
            compound_inequality: {
                patterns: [
                    /.*<.*<.*/,
                    /.*>.*>.*/,
                    /compound.*quadratic/i
                ],
                solver: this.solveCompoundQuadraticInequality.bind(this),
                name: 'Compound Quadratic Inequality',
                category: 'compound',
                description: 'a < ax² + bx + c < b'
            },
            word_problem_physics: {
                patterns: [
                    /height/i,
                    /projectile/i,
                    /trajectory/i,
                    /above.*ground/i
                ],
                solver: this.solvePhysicsWordProblem.bind(this),
                name: 'Physics Application',
                category: 'word_problems',
                description: 'Height, projectile, or motion problems'
            },
            word_problem_business: {
                patterns: [
                    /profit/i,
                    /revenue/i,
                    /cost/i,
                    /break.*even/i
                ],
                solver: this.solveBusinessWordProblem.bind(this),
                name: 'Business Application',
                category: 'word_problems',
                description: 'Profit, revenue, or cost problems'
            },
            word_problem_geometry: {
                patterns: [
                    /area/i,
                    /perimeter/i,
                    /dimension/i,
                    /rectangle/i,
                    /triangle/i
                ],
                solver: this.solveGeometryWordProblem.bind(this),
                name: 'Geometry Application',
                category: 'word_problems',
                description: 'Area, perimeter, or dimension problems'
            }
        };
    }

    initializeQuadraticInequalityLessons() {
        this.lessons = {
            quadratic_inequality_basics: {
                title: "Quadratic Inequalities Fundamentals",
                concepts: [
                    "General form: ax² + bx + c compared to 0 (where a ≠ 0)",
                    "Solutions are typically intervals, not single values",
                    "Parabola opens upward if a > 0, downward if a < 0",
                    "Critical points are roots where parabola crosses x-axis",
                    "Solution depends on sign of quadratic expression"
                ],
                theory: "Quadratic inequalities involve finding where a quadratic expression is positive or negative. The solution is typically an interval or union of intervals on the number line.",
                keyFormulas: {
                    "Standard Form": "ax² + bx + c compared to 0",
                    "Discriminant": "Δ = b² - 4ac",
                    "Quadratic Formula": "x = (-b ± √(b² - 4ac))/(2a)",
                    "Factored Form": "(x - r₁)(x - r₂) compared to 0"
                },
                solvingSteps: [
                    "Write inequality in standard form (one side = 0)",
                    "Find critical points (roots) by solving ax² + bx + c = 0",
                    "Determine sign of 'a' (opens up or down)",
                    "Create sign chart or number line",
                    "Test intervals between critical points",
                    "Write solution in interval notation"
                ],
                applications: [
                    "Projectile motion (when is object above certain height)",
                    "Profit analysis (when is profit positive)",
                    "Area constraints (when does area exceed limit)",
                    "Optimization problems"
                ]
            },

            sign_analysis: {
                title: "Sign Analysis Method",
                concepts: [
                    "Divide number line into intervals using critical points",
                    "Test sign of expression in each interval",
                    "Quadratic changes sign only at roots",
                    "Sign remains constant within each interval",
                    "Include or exclude endpoints based on inequality type"
                ],
                theory: "Sign analysis uses the fact that a quadratic expression can only change sign at its roots. By testing one point in each interval, we determine the sign throughout that interval.",
                keyFormulas: {
                    "Critical Points": "Solutions to ax² + bx + c = 0",
                    "Test Point Method": "Substitute any x-value in interval",
                    "Sign Determination": "If test gives positive, entire interval is positive"
                },
                solvingSteps: [
                    "Find all critical points (roots)",
                    "Mark critical points on number line",
                    "Identify intervals between critical points",
                    "Choose test point in each interval",
                    "Determine sign of expression at test point",
                    "Shade intervals that satisfy inequality",
                    "Write solution using interval notation"
                ],
                applications: [
                    "Determining where function is positive/negative",
                    "Finding domain restrictions",
                    "Analyzing behavior of rational functions"
                ]
            },

            graphical_method: {
                title: "Graphical Solution Method",
                concepts: [
                    "Graph y = ax² + bx + c as a parabola",
                    "Identify where parabola is above/below x-axis",
                    "Vertex indicates maximum or minimum value",
                    "x-intercepts are critical points",
                    "Visual representation confirms algebraic solution"
                ],
                theory: "The graph of a quadratic function is a parabola. The inequality solution corresponds to x-values where the parabola is above (>) or below (<) the x-axis.",
                keyFormulas: {
                    "Vertex": "x = -b/(2a), y = f(-b/(2a))",
                    "Axis of Symmetry": "x = -b/(2a)",
                    "Direction": "Opens up if a > 0, down if a < 0"
                },
                solvingSteps: [
                    "Sketch parabola y = ax² + bx + c",
                    "Find and plot vertex",
                    "Find and plot x-intercepts (roots)",
                    "Determine if parabola opens up or down",
                    "Identify x-values where graph satisfies inequality",
                    "Express solution in interval notation"
                ],
                applications: [
                    "Visual problem solving",
                    "Confirming algebraic solutions",
                    "Understanding function behavior"
                ]
            },

            interval_notation: {
                title: "Interval Notation",
                concepts: [
                    "Parentheses ( ) for strict inequalities (< or >)",
                    "Brackets [ ] for inclusive inequalities (≤ or ≥)",
                    "Union symbol ∪ for multiple intervals",
                    "Infinity symbols for unbounded intervals",
                    "Empty set ∅ when no solution exists"
                ],
                theory: "Interval notation provides a concise way to express solution sets as intervals on the number line.",
                keyFormulas: {
                    "Open Interval": "(a, b) means a < x < b",
                    "Closed Interval": "[a, b] means a ≤ x ≤ b",
                    "Half-Open": "[a, b) means a ≤ x < b",
                    "Unbounded": "(-∞, a) or (b, ∞)",
                    "Union": "(a, b) ∪ (c, d)"
                },
                solvingSteps: [
                    "Identify all solution intervals",
                    "Determine if endpoints are included",
                    "Use appropriate bracket notation",
                    "Combine intervals with union if needed",
                    "Check against original inequality"
                ],
                applications: [
                    "Expressing domains and ranges",
                    "Writing solution sets",
                    "Mathematical communication"
                ]
            },

            discriminant_analysis: {
                title: "Using the Discriminant",
                concepts: [
                    "Δ = b² - 4ac determines number of real roots",
                    "Δ > 0: two distinct real roots",
                    "Δ = 0: one repeated real root (vertex on x-axis)",
                    "Δ < 0: no real roots (parabola doesn't cross x-axis)",
                    "Discriminant helps predict solution type"
                ],
                theory: "The discriminant reveals critical information about the quadratic's roots, which directly impacts the inequality solution structure.",
                keyFormulas: {
                    "Discriminant": "Δ = b² - 4ac",
                    "Two Roots": "Δ > 0",
                    "One Root": "Δ = 0",
                    "No Real Roots": "Δ < 0"
                },
                solvingSteps: [
                    "Calculate discriminant Δ = b² - 4ac",
                    "Determine number of real roots",
                    "If Δ < 0: no critical points, analyze sign of 'a'",
                    "If Δ = 0: one critical point, check vertex",
                    "If Δ > 0: two critical points, use sign analysis",
                    "Write appropriate solution"
                ],
                applications: [
                    "Quick analysis of solution structure",
                    "Determining if inequality has solution",
                    "Predicting graph behavior"
                ]
            },

            special_cases: {
                title: "Special Cases in Quadratic Inequalities",
                concepts: [
                    "No real roots: solution is all reals or empty set",
                    "Perfect square: one critical point at vertex",
                    "Always positive: a > 0 and Δ < 0",
                    "Always negative: a < 0 and Δ < 0",
                    "Touching x-axis: Δ = 0"
                ],
                theory: "Special cases occur when the parabola doesn't cross the x-axis or touches it at exactly one point, leading to simpler solution sets.",
                keyFormulas: {
                    "Always Positive": "a > 0 and Δ < 0 → solution: all real numbers for > or ≥",
                    "Always Negative": "a < 0 and Δ < 0 → solution: all real numbers for < or ≤",
                    "Perfect Square": "Δ = 0 → one critical point"
                },
                solvingSteps: [
                    "Calculate discriminant",
                    "Identify special case type",
                    "Determine sign of leading coefficient",
                    "Apply appropriate rule for solution",
                    "Express answer clearly"
                ],
                applications: [
                    "Quick problem solving",
                    "Understanding extreme cases",
                    "Verification of general solutions"
                ]
            },

            factoring_method: {
                title: "Solving by Factoring",
                concepts: [
                    "Factor quadratic into (x - r₁)(x - r₂)",
                    "Roots r₁ and r₂ are critical points",
                    "Product is positive when factors have same sign",
                    "Product is negative when factors have opposite signs",
                    "Sign chart helps organize analysis"
                ],
                theory: "When a quadratic can be factored, the factored form makes sign analysis straightforward using the property that a product's sign depends on factors' signs.",
                keyFormulas: {
                    "Factored Form": "(x - r₁)(x - r₂) compared to 0",
                    "Same Signs": "Both positive or both negative → product positive",
                    "Opposite Signs": "One positive, one negative → product negative"
                },
                solvingSteps: [
                    "Factor quadratic completely",
                    "Identify critical points (roots)",
                    "Create sign chart for each factor",
                    "Determine combined sign in each interval",
                    "Select intervals satisfying inequality",
                    "Write solution in interval notation"
                ],
                applications: [
                    "When quadratic factors easily",
                    "Teaching sign analysis clearly",
                    "Connecting to factoring skills"
                ]
            },

            rational_inequalities_quadratic: {
                title: "Rational Inequalities with Quadratics",
                concepts: [
                    "Form: P(x)/Q(x) compared to 0",
                    "Critical points from both numerator and denominator",
                    "Denominator zeros create discontinuities",
                    "Sign changes at zeros of numerator or denominator",
                    "Denominator zeros never included in solution"
                ],
                theory: "Rational inequalities require finding where a fraction is positive or negative. Critical points come from both numerator and denominator zeros.",
                keyFormulas: {
                    "Standard Form": "P(x)/Q(x) compared to 0",
                    "Critical Points": "P(x) = 0 or Q(x) = 0",
                    "Sign Rule": "Fraction sign = (numerator sign)/(denominator sign)"
                },
                solvingSteps: [
                    "Write in form P(x)/Q(x) compared to 0",
                    "Find zeros of numerator P(x) = 0",
                    "Find zeros of denominator Q(x) = 0",
                    "Mark all critical points on number line",
                    "Test sign in each interval",
                    "Exclude denominator zeros from solution",
                    "Write solution excluding discontinuities"
                ],
                applications: [
                    "Rate problems",
                    "Concentration problems",
                    "Rational function analysis"
                ]
            },

            word_problems_quadratic: {
                title: "Word Problems with Quadratic Inequalities",
                concepts: [
                    "Translate problem into mathematical inequality",
                    "Identify variable and what it represents",
                    "Set up quadratic expression from context",
                    "Solve inequality algebraically",
                    "Interpret solution in context of problem",
                    "Check reasonableness of answer"
                ],
                theory: "Word problems require translating real-world situations into quadratic inequalities, solving them, and interpreting results in the original context.",
                keyFormulas: {
                    "Projectile Height": "h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters)",
                    "Revenue": "R = (price)(quantity) = p·q",
                    "Profit": "P = Revenue - Cost",
                    "Area": "A = length × width"
                },
                problemTypes: {
                    "Physics": "Projectile motion, free fall, trajectory",
                    "Business": "Profit maximization, break-even analysis",
                    "Geometry": "Area optimization, dimension constraints",
                    "Engineering": "Design constraints, specifications"
                },
                solutionStrategy: [
                    "Read problem carefully, identify what's asked",
                    "Define variable clearly with units",
                    "Write inequality from problem conditions",
                    "Solve inequality algebraically",
                    "Check solution makes sense in context",
                    "Answer question with appropriate units"
                ],
                commonPhrases: {
                    "at least": "≥",
                    "at most": "≤",
                    "more than": ">",
                    "less than": "<",
                    "between": "compound inequality",
                    "exceeds": ">",
                    "below": "<",
                    "above": ">"
                }
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            standard_inequality: {
                'Finding critical points': [
                    'Arithmetic errors in quadratic formula',
                    'Forgetting to use ± in quadratic formula',
                    'Sign errors when calculating discriminant',
                    'Dividing by 2 instead of 2a in quadratic formula'
                ],
                'Sign analysis': [
                    'Testing at critical point instead of between them',
                    'Not testing all intervals',
                    'Confusing sign of expression with inequality direction',
                    'Forgetting to consider leading coefficient sign'
                ],
                'Interval notation': [
                    'Using wrong bracket type (parentheses vs brackets)',
                    'Forgetting to use union symbol for multiple intervals',
                    'Writing infinity with bracket instead of parenthesis',
                    'Reversing interval endpoints',
                    'Including critical points when they should be excluded'
                ],
                'Inequality reversal': [
                    'Not reversing when multiplying/dividing by negative',
                    'Reversing when not needed',
                    'Confusion about when reversal applies'
                ]
            },
            factored: {
                'Factoring errors': [
                    'Incorrect factorization',
                    'Missing common factors',
                    'Sign errors in factors',
                    'Incomplete factorization'
                ],
                'Sign chart': [
                    'Not considering all factors',
                    'Errors in determining combined sign',
                    'Missing intervals on number line'
                ]
            },
            rational: {
                'Critical points': [
                    'Forgetting denominator zeros',
                    'Including denominator zeros in solution',
                    'Not marking discontinuities clearly'
                ],
                'Sign determination': [
                    'Errors in fraction sign rules',
                    'Not considering numerator and denominator separately'
                ]
            },
            word_problems: {
                'Setup errors': [
                    'Writing equation instead of inequality',
                    'Using wrong inequality direction',
                    'Missing units or context',
                    'Misinterpreting problem constraints'
                ],
                'Solution interpretation': [
                    'Not checking if solution makes sense in context',
                    'Including negative values when they don\'t make sense',
                    'Forgetting to answer the actual question asked'
                ]
            }
        };

        this.errorPrevention = {
            sign_analysis: {
                reminder: 'Always test a point BETWEEN critical points, not AT them',
                method: 'Choose simple test points like 0, ±1, or midpoints'
            },
            interval_notation: {
                reminder: 'Parentheses ( ) for strict inequalities, brackets [ ] for inclusive',
                method: 'Think: "Can equal?" → Yes: bracket [ ], No: parenthesis ( )'
            },
            discriminant: {
                reminder: 'Δ = b² - 4ac determines how many real roots',
                method: 'Calculate carefully, double-check arithmetic'
            },
            inequality_direction: {
                reminder: 'Inequality direction comes from original problem, not from solving',
                method: 'Mark the inequality symbol clearly at the start'
            },
            denominator_zeros: {
                reminder: 'NEVER include values that make denominator zero',
                method: 'Mark denominator zeros with open circles, always exclude'
            },
            context_check: {
                reminder: 'Solution must make sense in problem context',
                method: 'Check units, reasonableness, and domain restrictions'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why inequality works this way and mathematical meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact sequence of steps to solve',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical representation and number line',
                language: 'visual and spatial understanding'
            },
            algebraic: {
                focus: 'Formal algebraic rules and properties',
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
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every tiny step with analogies',
                examples: 'real-world stories and pictures',
                analogies: true,
                visualization: 'simple pictures and number lines'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive with all reasoning',
                examples: 'abstract and generalized'
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
            projectile_motion: {
                scenario: "Object thrown upward or projectile motion",
                inequality: "h(t) = -16t² + v₀t + h₀ > threshold (feet)",
                examples: [
                    "A ball is thrown upward at 64 ft/s from 6 ft high. When is it above 54 feet?",
                    "Rocket launched at 96 ft/s from ground. When is height > 128 feet?"
                ],
                context: "Projectile motion uses quadratic equations. Inequalities find time intervals when object is above/below certain heights.",
                units: "feet for height, seconds for time (or meters and seconds in metric)"
            },
            business_profit: {
                scenario: "Profit or revenue optimization",
                inequality: "P(x) = -ax² + bx - c > 0 or R(x) > C(x)",
                examples: [
                    "Profit is P(x) = -2x² + 100x - 800. For what production levels is profit positive?",
                    "Revenue R = 50x - 0.5x², Cost C = 200. When is profit > $300?"
                ],
                context: "Business models often involve quadratic profit functions. Inequalities determine profitable production ranges.",
                units: "dollars for profit/revenue/cost, units for quantity"
            },
            area_geometry: {
                scenario: "Area must exceed or stay below a limit",
                inequality: "A = lw or A = s² compared to threshold",
                examples: [
                    "Rectangle with length = width + 4. When is area > 32 square feet?",
                    "Fenced area where x(100-x) ≥ 2000 square meters"
                ],
                context: "Geometry problems with variable dimensions create quadratic area expressions.",
                units: "square feet or square meters for area, feet or meters for dimensions"
            },
            safety_margins: {
                scenario: "Engineering safety constraints",
                inequality: "Stress, load, or capacity compared to limits",
                examples: [
                    "Bridge load capacity: -0.01x² + 2x > 50 tons",
                    "Cable tension must stay below threshold: T(x) < maximum"
                ],
                context: "Engineering safety requires staying within limits defined by quadratic relationships.",
                units: "varies by application (tons, newtons, etc.)"
            },
            economics: {
                scenario: "Supply and demand, market equilibrium",
                inequality: "Price or quantity constraints",
                examples: [
                    "Demand D = 100 - 2p². For what prices is demand > 50 units?",
                    "Supply exceeds demand when S(p) > D(p)"
                ],
                context: "Economic models use quadratic functions. Inequalities find viable market conditions.",
                units: "dollars for price, units for quantity"
            },
            physics_energy: {
                scenario: "Kinetic or potential energy thresholds",
                inequality: "KE = ½mv² or PE = mgh compared to values",
                examples: [
                    "For what speeds is kinetic energy > 100 joules?",
                    "When does potential energy exceed threshold?"
                ],
                context: "Energy calculations involve quadratic terms (v² in kinetic energy).",
                units: "joules for energy, m/s for velocity"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            standard_inequality: {
                skills: [
                    'Solving quadratic equations',
                    'Quadratic formula',
                    'Factoring quadratics',
                    'Understanding inequalities',
                    'Number line representation'
                ],
                priorKnowledge: [
                    'Parabola shapes and properties',
                    'x-intercepts and roots',
                    'Discriminant concept',
                    'Sign analysis basics'
                ],
                checkQuestions: [
                    "Solve x² - 5x + 6 = 0",
                    "What is the discriminant of x² + 2x + 5?",
                    "Does parabola y = -x² + 4 open up or down?",
                    "If x = 3 is a root, what is (x - 3)?",
                    "Write interval notation for x > 2"
                ]
            },
            factored: {
                skills: [
                    'Factoring quadratics',
                    'Zero product property',
                    'Sign analysis of products',
                    'Interval notation'
                ],
                priorKnowledge: [
                    'Product of two numbers',
                    'Sign rules for multiplication',
                    'Number line intervals'
                ],
                checkQuestions: [
                    "Factor x² - 7x + 12",
                    "If (x - 2)(x + 3) = 0, what are the solutions?",
                    "When is product of two positives positive?",
                    "When does (x - 1)(x - 4) change sign?"
                ]
            },
            rational: {
                skills: [
                    'Rational expressions',
                    'Finding zeros of numerator and denominator',
                    'Sign of fractions',
                    'Domain restrictions'
                ],
                priorKnowledge: [
                    'Division by zero undefined',
                    'Sign rules for division',
                    'Continuous vs discontinuous functions'
                ],
                checkQuestions: [
                    "When is (x - 2)/(x + 3) undefined?",
                    "What's the sign of positive/negative?",
                    "Simplify (x² - 4)/(x - 2)",
                    "Find zeros of x² - 9"
                ]
            },
            word_problems: {
                skills: [
                    'Reading comprehension',
                    'Translating words to math',
                    'Setting up inequalities',
                    'Unit awareness',
                    'Solution interpretation'
                ],
                priorKnowledge: [
                    'Projectile motion formula',
                    'Profit = Revenue - Cost',
                    'Area formulas',
                    'Physical constraints'
                ],
                checkQuestions: [
                    "What does 'at least 10' mean mathematically?",
                    "If h(t) = -16t² + 64t, what is h(0)?",
                    "What's the formula for rectangle area?",
                    "Can time be negative in this context?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            parabola_graph: {
                description: "Graph of quadratic function as parabola",
                analogy: "U-shaped or inverted U-shaped curve",
                visualization: "Sketch parabola showing where it's above/below x-axis",
                suitableFor: ['all_quadratic_inequalities'],
                explanation: "Solution intervals are x-values where parabola is above (>) or below (<) x-axis"
            },
            number_line: {
                description: "Critical points and intervals on number line",
                analogy: "Timeline showing different regions",
                visualization: "Mark critical points, test intervals, shade solution",
                suitableFor: ['all_quadratic_inequalities'],
                explanation: "Number line shows where expression is positive or negative"
            },
            sign_chart: {
                description: "Table showing sign in each interval",
                analogy: "Organized checklist of regions",
                visualization: "Table with intervals and signs (+/-)",
                suitableFor: ['standard_inequality', 'factored', 'rational'],
                explanation: "Sign chart systematically tracks expression's sign across all intervals"
            },
            factored_form_visual: {
                description: "Factor signs shown separately",
                analogy: "Two number lines multiplied together",
                visualization: "Show sign of each factor, then combined sign",
                suitableFor: ['factored'],
                explanation: "Product sign depends on individual factor signs"
            },
            vertex_focus: {
                description: "Emphasize parabola vertex",
                analogy: "Highest or lowest point of curve",
                visualization: "Mark vertex and show if it's max or min",
                suitableFor: ['vertex_form', 'special_cases'],
                explanation: "Vertex shows extreme value, helps determine if parabola crosses x-axis"
            },
            interval_number_line: {
                description: "Solution as shaded interval(s)",
                analogy: "Highlighted sections of number line",
                visualization: "Shade solution intervals, use parentheses/brackets",
                suitableFor: ['all_quadratic_inequalities'],
                explanation: "Visual representation of interval notation solution"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "x² - 4 > 0",
                    solution: "(-∞, -2) ∪ (2, ∞)",
                    steps: [
                        "Factor: (x - 2)(x + 2) > 0",
                        "Roots: x = -2, x = 2",
                        "Test x = -3: 9 - 4 = 5 > 0 ✓",
                        "Test x = 0: 0 - 4 = -4 not > 0",
                        "Test x = 3: 9 - 4 = 5 > 0 ✓",
                        "Solution: x < -2 or x > 2"
                    ],
                    difficulty: "easy",
                    category: "factored"
                },
                {
                    problem: "x² ≤ 9",
                    solution: "[-3, 3]",
                    steps: [
                        "Rewrite: x² - 9 ≤ 0",
                        "Factor: (x - 3)(x + 3) ≤ 0",
                        "Roots: x = -3, x = 3",
                        "Product negative between roots",
                        "Include endpoints (≤)",
                        "Solution: -3 ≤ x ≤ 3"
                    ],
                    difficulty: "easy",
                    category: "factored"
                },
                {
                    problem: "x² + 2x - 3 < 0",
                    solution: "(-3, 1)",
                    steps: [
                        "Factor: (x + 3)(x - 1) < 0",
                        "Roots: x = -3, x = 1",
                        "Test x = 0: -3 < 0 ✓",
                        "Negative between roots",
                        "Solution: -3 < x < 1"
                    ],
                    difficulty: "easy",
                    category: "factored"
                }
            ],
            intermediate: [
                {
                    problem: "2x² - 5x - 3 ≥ 0",
                    solution: "(-∞, -1/2] ∪ [3, ∞)",
                    steps: [
                        "Factor: (2x + 1)(x - 3) ≥ 0",
                        "Roots: x = -1/2, x = 3",
                        "Test intervals",
                        "Positive outside roots (a > 0)",
                        "Include endpoints (≥)",
                        "Solution: x ≤ -1/2 or x ≥ 3"
                    ],
                    difficulty: "medium",
                    category: "factored"
                },
                {
                    problem: "x² - 4x + 7 > 0",
                    solution: "(-∞, ∞)",
                    steps: [
                        "Discriminant: Δ = 16 - 28 = -12 < 0",
                        "No real roots",
                        "Parabola opens up (a = 1 > 0)",
                        "Always above x-axis",
                        "Solution: all real numbers"
                    ],
                    difficulty: "medium",
                    category: "special_cases"
                },
                {
                    problem: "-x² + 6x - 5 ≤ 0",
                    solution: "(-∞, 1] ∪ [5, ∞)",
                    steps: [
                        "Factor: -(x - 1)(x - 5) ≤ 0",
                        "Or: (x - 1)(x - 5) ≥ 0",
                        "Roots: x = 1, x = 5",
                        "Positive outside roots",
                        "Solution: x ≤ 1 or x ≥ 5"
                    ],
                    difficulty: "medium",
                    category: "factored"
                }
            ],
            advanced: [
                {
                    problem: "x²/(x - 2) > 0",
                    solution: "(2, ∞)",
                    steps: [
                        "Numerator: x² = 0 at x = 0",
                        "Denominator: x - 2 = 0 at x = 2",
                        "Critical points: 0, 2",
                        "x = 0: numerator zero, fraction = 0 (not > 0)",
                        "x = 2: undefined (exclude)",
                        "Test x = 3: 9/1 = 9 > 0 ✓",
                        "Solution: x > 2"
                    ],
                    difficulty: "hard",
                    category: "rational"
                },
                {
                    problem: "|x² - 5| < 4",
                    solution: "(-3, -1) ∪ (1, 3)",
                    steps: [
                        "Rewrite: -4 < x² - 5 < 4",
                        "Split: x² - 5 < 4 and x² - 5 > -4",
                        "First: x² < 9 → -3 < x < 3",
                        "Second: x² > 1 → x < -1 or x > 1",
                        "Intersection of both",
                        "Solution: (-3, -1) ∪ (1, 3)"
                    ],
                    difficulty: "hard",
                    category: "absolute_value"
                },
                {
                    problem: "(x² - 4)/(x² - 9) ≥ 0",
                    solution: "(-∞, -3) ∪ [-2, 2] ∪ (3, ∞)",
                    steps: [
                        "Numerator zeros: ±2",
                        "Denominator zeros: ±3 (exclude)",
                        "Critical points: -3, -2, 2, 3",
                        "Sign analysis in each interval",
                        "Include numerator zeros",
                        "Exclude denominator zeros"
                    ],
                    difficulty: "hard",
                    category: "rational"
                }
            ],
            byMethod: {
                factoring: [
                    { problem: "x² - x - 6 < 0", solution: "(-2, 3)" },
                    { problem: "x² - 9 ≥ 0", solution: "(-∞, -3] ∪ [3, ∞)" },
                    { problem: "2x² + 5x - 3 > 0", solution: "(-∞, -3) ∪ (1/2, ∞)" }
                ],
                quadratic_formula: [
                    { problem: "x² - 3x + 1 < 0", solution: "((3-√5)/2, (3+√5)/2)" },
                    { problem: "2x² + 3x - 7 ≥ 0", solution: "(-∞, (-3-√65)/4] ∪ [(-3+√65)/4, ∞)" }
                ],
                sign_analysis: [
                    { problem: "(x - 1)(x + 2)(x - 3) > 0", solution: "(-2, 1) ∪ (3, ∞)" },
                    { problem: "x(x - 2)² < 0", solution: "(-∞, 0)" }
                ],
                special_cases: [
                    { problem: "x² + 4 > 0", solution: "(-∞, ∞)" },
                    { problem: "-x² - 1 < 0", solution: "(-∞, ∞)" },
                    { problem: "(x - 2)² ≥ 0", solution: "(-∞, ∞)" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            inequality_reversal: {
                misconception: "Thinking inequality reverses when moving terms",
                reality: "Inequality only reverses when multiplying/dividing by negative",
                correctiveExample: "x² > 4 → x² - 4 > 0 (NO reversal, just moved term)",
                commonIn: ['all_types']
            },
            endpoint_inclusion: {
                misconception: "Always using same bracket type regardless of inequality",
                reality: "< and > use ( ), ≤ and ≥ use [ ]",
                correctiveExample: "x² < 4 → (-2, 2) but x² ≤ 4 → [-2, 2]",
                commonIn: ['all_types']
            },
            sign_at_critical_point: {
                misconception: "Testing sign AT critical point instead of BETWEEN",
                reality: "Expression equals zero AT critical point, test BETWEEN points",
                correctiveExample: "For roots -2 and 3, test at -3, 0, and 4 (not at -2 or 3)",
                commonIn: ['sign_analysis']
            },
            parabola_direction: {
                misconception: "Thinking 'a' coefficient doesn't matter for inequality",
                reality: "Sign of 'a' determines if parabola opens up or down, crucial for solution",
                correctiveExample: "x² > 0 vs -x² > 0 have opposite solutions",
                commonIn: ['standard_inequality']
            },
            always_two_intervals: {
                misconception: "Assuming solution always has two separate intervals",
                reality: "Could be one interval, no solution, or all real numbers",
                correctiveExample: "x² + 1 < 0 has NO solution; x² < 4 has ONE interval [-2, 2]",
                commonIn: ['special_cases']
            },
            denominator_zeros_included: {
                misconception: "Including denominator zeros in rational inequality solution",
                reality: "NEVER include values making denominator zero (undefined)",
                correctiveExample: "x/(x-2) ≥ 0: NEVER include x = 2 even with ≥",
                commonIn: ['rational']
            },
            infinity_brackets: {
                misconception: "Using brackets with infinity: [5, ∞]",
                reality: "Always use parenthesis with ∞ or -∞",
                correctiveExample: "[5, ∞) is correct, not [5, ∞]",
                commonIn: ['interval_notation']
            },
            discriminant_meaning: {
                misconception: "Not understanding what discriminant tells about solution",
                reality: "Δ < 0 means no real roots → solution is empty set or all reals",
                correctiveExample: "If Δ < 0 and a > 0, then ax² + bx + c is always positive",
                commonIn: ['discriminant_analysis']
            },
            union_vs_intersection: {
                misconception: "Confusing union (∪) with intersection (∩)",
                reality: "Union means 'or' (combine intervals), intersection means 'and' (overlap)",
                correctiveExample: "(−∞,2) ∪ (3,∞) means x<2 OR x>3",
                commonIn: ['interval_notation']
            },
            context_ignored: {
                misconception: "Including negative solutions when context forbids them",
                reality: "Time, distance, quantity often can't be negative",
                correctiveExample: "If t represents time, t ∈ (-2, 5) should be t ∈ [0, 5)",
                commonIn: ['word_problems']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            parabola_shape: {
                analogy: "U-shaped bowl or hill",
                explanation: "If a > 0, parabola is like a bowl (opens up). If a < 0, like a hill (opens down).",
                suitableFor: ['all_quadratic_inequalities'],
                ELI5: "Imagine a skateboard ramp. Some curve up like a U (bowl), some curve down like an upside-down U (hill)."
            },
            critical_points: {
                analogy: "Crossing points on a journey",
                explanation: "Critical points are where the parabola crosses or touches the x-axis, like crossing a river on a journey.",
                suitableFor: ['all_types'],
                ELI5: "Think of walking on a path. Critical points are where you step over a line on the ground."
            },
            sign_analysis: {
                analogy: "Weather forecast for different regions",
                explanation: "Just like weather can be sunny in one region and rainy in another, the expression can be positive in one interval and negative in another.",
                suitableFor: ['sign_analysis'],
                ELI5: "Imagine the number line is a street. Some parts of the street are sunny (+), some are rainy (-). The critical points are where the weather changes."
            },
            interval_notation: {
                analogy: "Describing a section of road",
                explanation: "Interval notation is like saying 'from Main Street to Elm Street' - it describes a section of the number line.",
                suitableFor: ['interval_notation'],
                ELI5: "Parentheses ( ) are like open doors - you can get close but not touch. Brackets [ ] are like closed doors - you can stand right on them."
            },
            inequality_direction: {
                analogy: "Above or below sea level",
                explanation: "> 0 means above sea level (positive), < 0 means below sea level (negative).",
                suitableFor: ['all_inequalities'],
                ELI5: "Pretend the x-axis is the ocean surface. > 0 means the parabola is above water, < 0 means it's underwater."
            },
            factored_form: {
                analogy: "Two gates on a path",
                explanation: "Factored form (x - r₁)(x - r₂) has two 'gates' at r₁ and r₂. The sign of the product depends on which side of the gates you're on.",
                suitableFor: ['factored'],
                ELI5: "Imagine two fences at positions r₁ and r₂. Between the fences is one zone, outside the fences are two other zones. Each zone has a different sign."
            },
            discriminant: {
                analogy: "Treasure map clue",
                explanation: "The discriminant is like a clue that tells you how many times the parabola crosses the x-axis (treasure spots).",
                suitableFor: ['discriminant_analysis'],
                ELI5: "The discriminant is a magic number. If it's positive, you find two treasures (roots). If zero, one treasure. If negative, no treasures."
            },
            rational_inequality: {
                analogy: "Seesaw with two weights",
                explanation: "A fraction has numerator (top weight) and denominator (bottom weight). The seesaw tips based on both weights.",
                suitableFor: ['rational'],
                ELI5: "Think of a fraction like a seesaw. If both top and bottom point same direction, the seesaw tips one way. If different directions, it tips the other way. If bottom is zero, the seesaw breaks!"
            },
            word_problem_projectile: {
                analogy: "Throwing a ball in the air",
                explanation: "When you throw a ball up, it goes up, reaches a peak, then comes down. The height over time forms a parabola.",
                suitableFor: ['word_problems_physics'],
                ELI5: "When you toss a ball up, it makes a curved path. We can write math to tell us when the ball is above a certain height."
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            standard_greater: {
                level1: "What type of inequality is this?",
                level2: "First, find where the quadratic equals zero (the critical points).",
                level3: "Use the quadratic formula or factoring to find roots.",
                level4: "Create a sign chart or test intervals between roots."
            },
            standard_less: {
                level1: "What are you looking for?",
                level2: "Find the critical points where expression equals zero.",
                level3: "Determine intervals where expression is negative.",
                level4: "Test a point in each interval to determine sign."
            },
            factored_form: {
                level1: "What form is this quadratic in?",
                level2: "The roots are visible in the factored form. Where are they?",
                level3: "Create a sign chart for each factor.",
                level4: "Combine the factor signs to find product sign in each interval."
            },
            rational: {
                level1: "What makes this different from standard quadratic inequality?",
                level2: "Find zeros of BOTH numerator and denominator.",
                level3: "Mark denominator zeros as discontinuities (exclude from solution).",
                level4: "Test sign of fraction in each interval."
            },
            word_problem: {
                level1: "What is the problem asking you to find?",
                level2: "Set up an inequality from the problem description.",
                level3: "Solve the inequality algebraically.",
                level4: "Interpret your solution in the context of the problem."
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Solve: x² - 5x + 6 > 0",
                    answer: "(-∞, 2) ∪ (3, ∞)",
                    assesses: "factored_inequality",
                    difficulty: "basic"
                },
                {
                    question: "Solve: x² < 16",
                    answer: "(-4, 4)",
                    assesses: "simple_inequality",
                    difficulty: "basic"
                },
                {
                    question: "Solve: 2x² - 3x - 2 ≤ 0",
                    answer: "[-1/2, 2]",
                    assesses: "standard_inequality",
                    difficulty: "intermediate"
                },
                {
                    question: "Solve: (x-1)/(x+2) > 0",
                    answer: "(-∞, -2) ∪ (1, ∞)",
                    assesses: "rational_inequality",
                    difficulty: "advanced"
                }
            ],
            formative: [
                {
                    question: "What's the first step to solve x² - 7x + 10 < 0?",
                    options: ["Factor the quadratic", "Find discriminant", "Draw graph", "Test values"],
                    correct: "Factor the quadratic",
                    explanation: "Factoring reveals the critical points most easily"
                },
                {
                    question: "For x² + 4 > 0, what is the solution?",
                    options: ["No solution", "All real numbers", "(-2, 2)", "(2, ∞)"],
                    correct: "All real numbers",
                    explanation: "x² is always ≥ 0, so x² + 4 is always > 0"
                },
                {
                    question: "When does (x-3)(x+1) change from positive to negative?",
                    options: ["At x = 3", "At x = -1", "At x = 3 and x = -1", "Never"],
                    correct: "At x = 3 and x = -1",
                    explanation: "Product changes sign at each root"
                },
                {
                    question: "What's wrong with the interval notation [2, ∞]?",
                    options: ["Should be (2, ∞)", "Should be [2, ∞)", "Nothing wrong", "Missing union symbol"],
                    correct: "Should be [2, ∞)",
                    explanation: "Infinity always uses parenthesis, never bracket"
                }
            ],
            summative: [
                {
                    question: "Solve and graph: -x² + 4x + 5 ≥ 0",
                    answer: "[-1, 5]",
                    showsWork: true,
                    rubric: {
                        find_roots: 2,
                        correct_inequality_direction: 2,
                        interval_notation: 2,
                        graph: 2,
                        verification: 2
                    }
                },
                {
                    question: "A ball is thrown from 5 ft at 48 ft/s. When is it above 32 feet? h(t) = -16t² + 48t + 5",
                    answer: "[0.75, 2.25]",
                    showsWork: true,
                    rubric: {
                        setup_inequality: 2,
                        solve_quadratic: 2,
                        find_interval: 2,
                        context_check: 2,
                        units_answer: 2
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "x² - 9 > 0",
                    "x² ≤ 25",
                    "(x - 2)(x + 5) < 0",
                    "x² - 4x ≥ 0"
                ],
                medium: [
                    "x² - 6x + 8 < 0",
                    "2x² + 5x - 3 ≥ 0",
                    "-x² + 7x - 10 > 0",
                    "3x² - 12 ≤ 0"
                ],
                hard: [
                    "x²/(x - 3) > 0",
                    "(x² - 4)/(x² - 9) ≤ 0",
                    "|x² - 6x| < 8",
                    "x⁴ - 5x² + 4 > 0"
                ]
            },
            byObjective: {
                canSolveByFactoring: [
                    "x² - x - 12 < 0",
                    "x² - 8x + 15 ≥ 0",
                    "2x² + 7x + 3 > 0"
                ],
                canUseQuadraticFormula: [
                    "x² - 4x + 1 ≤ 0",
                    "3x² + 2x - 2 < 0",
                    "x² - 6x + 7 > 0"
                ],
                canAnalyzeSpecialCases: [
                    "x² + 9 > 0",
                    "-x² - 4 < 0",
                    "(x - 3)² ≥ 0"
                ],
                canSolveRational: [
                    "(x - 4)/(x + 2) > 0",
                    "x/(x² - 9) ≤ 0",
                    "(x² - 1)/(x - 3) < 0"
                ],
                canSolveWordProblems: [
                    "A rectangle's length is 3 more than width. When is area > 40?",
                    "Profit P(x) = -x² + 60x - 500. When is profit positive?",
                    "Object thrown at 64 ft/s from 6 ft. When above 54 ft?"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "can_factor_easily": "Factor and use sign analysis",
                "cannot_factor": "Use quadratic formula to find roots",
                "no_real_roots": "Analyze using discriminant and sign of 'a'",
                "perfect_square": "One critical point, analyze vertex",
                "rational_expression": "Find zeros of numerator AND denominator separately",
                "absolute_value": "Split into cases or square both sides carefully",
                "word_problem": "Translate to inequality, solve, interpret in context"
            },
            whenToUseWhat: {
                factoring: "When quadratic factors easily with integers",
                quadratic_formula: "When factoring is difficult or coefficients are decimals/fractions",
                completing_square: "For vertex form or when formula seems messy",
                graphing: "To visualize solution and verify algebraic work",
                sign_chart: "For systematic organization, especially with rational inequalities",
                discriminant_first: "To quickly determine if real solutions exist"
            },
            methodSelection: {
                factorsToConsider: [
                    "Can the quadratic be factored easily?",
                    "Are there fractions/decimals in coefficients?",
                    "Is it in factored or vertex form already?",
                    "Is it a rational inequality?",
                    "Does discriminant reveal something useful?",
                    "Is visualization helpful?"
                ],
                generalApproach: [
                    "1. Write in standard form with 0 on right side",
                    "2. Find critical points (roots)",
                    "3. Determine parabola direction (sign of a)",
                    "4. Use sign analysis or graph",
                    "5. Write solution in interval notation",
                    "6. Verify with test points"
                ]
            },
            optimizationTips: {
                "Check discriminant early": "Saves time if no real roots",
                "Factor when possible": "Easier than quadratic formula",
                "Choose smart test points": "Use 0, ±1, or midpoints",
                "Draw quick sketch": "Helps visualize which intervals to choose",
                "Verify endpoints": "Check if they should be included ([) or excluded (()"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Factored Inequality Sprint",
                    timeLimit: 120,
                    problems: [
                        "(x - 2)(x - 5) > 0",
                        "(x + 1)(x - 3) < 0",
                        "x(x - 4) ≥ 0",
                        "(x + 2)(x + 6) ≤ 0",
                        "(2 - x)(x + 1) > 0"
                    ]
                },
                {
                    name: "Simple Quadratic Inequality Challenge",
                    timeLimit: 180,
                    problems: [
                        "x² < 16",
                        "x² - 9 > 0",
                        "x² + x - 6 ≤ 0",
                        "x² - 5x + 4 < 0",
                        "2x² - 8 ≥ 0"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Quadratic",
                    problem: "A quadratic inequality ax² + bx + c > 0 has solution (-2, 3)",
                    given: "The coefficient a = 1",
                    solve: "Find possible values of b and c",
                    solution: "Roots are -2 and 3, so (x + 2)(x - 3) = x² - x - 6. Thus b = -1, c = -6"
                },
                {
                    name: "Interval Detective",
                    problem: "The solution to a quadratic inequality is [a, b]",
                    given: "You know a + b = 4 and ab = 3",
                    solve: "Find a and b, then construct the original inequality",
                    solution: "a = 1, b = 3 (or vice versa). Inequality could be (x - 1)(x - 3) ≤ 0"
                },
                {
                    name: "Special Case Creator",
                    challenge: "Create a quadratic inequality with no solution",
                    constraints: "Use only real coefficients",
                    sampleSolution: "x² + 4 < 0 (always false since x² ≥ 0)"
                }
            ],
            applications: [
                {
                    scenario: "Projectile Motion",
                    problem: "Ball thrown at 80 ft/s from 6 ft high: h(t) = -16t² + 80t + 6. When is it above 96 feet?",
                    inequality: "-16t² + 80t + 6 > 96",
                    solution: "(1.5, 3.5) seconds"
                },
                {
                    scenario: "Profit Maximization",
                    problem: "Profit P(x) = -2x² + 80x - 600 (x = units produced in hundreds). For what production is profit > $200?",
                    inequality: "-2x² + 80x - 600 > 200",
                    solution: "Between approximately 10 and 30 hundred units"
                },
                {
                    scenario: "Area Problem",
                    problem: "Garden length is 4m more than width. When is area ≥ 60 m²?",
                    inequality: "w(w + 4) ≥ 60",
                    solution: "Width ≥ 6 meters"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Solve: x² - 5x + 6 > 0",
                        "Factor: (x - 2)(x - 3) > 0",
                        "Roots: x = 2, x = 3",
                        "Solution: (2, 3)"  // ERROR
                    ],
                    correctAnswer: "(-∞, 2) ∪ (3, ∞)",
                    errorType: "Chose wrong intervals - should be outside roots, not between"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Solve: -x² + 4 > 0",
                        "x² < 4",
                        "x < 2"  // ERROR: forgot ±
                    ],
                    correctAnswer: "(-2, 2)",
                    errorType: "Forgot to consider both positive and negative square roots"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Solve: x/(x - 3) ≥ 0",
                        "Critical points: 0 and 3",
                        "Test intervals",
                        "Solution: [0, 3]"  // ERROR: includes 3
                    ],
                    correctAnswer: "[0, 3)",
                    errorType: "Included denominator zero (x = 3) where expression is undefined"
                }
            ]
        };
    }

    initializeIntervalNotationDatabase() {
        this.intervalNotation = {
            rules: {
                strict_inequality: "Use ( ) for < and >",
                inclusive_inequality: "Use [ ] for ≤ and ≥",
                infinity: "Always use ( ) with ∞ or -∞, never [ ]",
                union: "Use ∪ to combine multiple intervals",
                empty_set: "Use ∅ when no solution exists"
            },
            examples: {
                "x > 3": "(3, ∞)",
                "x ≤ -2": "(-∞, -2]",
                "-1 < x < 5": "(-1, 5)",
                "-1 ≤ x ≤ 5": "[-1, 5]",
                "x < -2 or x > 3": "(-∞, -2) ∪ (3, ∞)",
                "x ≤ -2 or x ≥ 3": "(-∞, -2] ∪ [3, ∞)",
                "all real numbers": "(-∞, ∞)",
                "no solution": "∅"
            },
            commonMistakes: [
                "Using [∞) instead of ∞)",
                "Forgetting union symbol between intervals",
                "Reversing interval endpoints",
                "Using wrong bracket type for inequality"
            ],
            conversionPractice: {
                "Inequality to Interval": "x ≥ 5 → [5, ∞)",
                "Interval to Inequality": "(-3, 7] → -3 < x ≤ 7",
                "Graph to Interval": "Shaded from -2 (open) to 4 (closed) → (-2, 4]"
            }
        };
    }

    initializeSignAnalysisDatabase() {
        this.signAnalysis = {
            principles: {
                "Continuous change": "Quadratic expression can only change sign at roots",
                "Constant in interval": "Sign remains same throughout interval between roots",
                "Test point suffices": "Testing one point in interval determines sign for whole interval",
                "Parabola direction": "Sign of 'a' determines behavior outside roots"
            },
            procedure: [
                "Find all critical points (roots)",
                "Mark critical points on number line",
                "Identify intervals created",
                "Choose test point in each interval",
                "Evaluate expression at test point",
                "Record sign (+ or -) for interval",
                "Select intervals matching inequality",
                "Write solution in interval notation"
            ],
            testPointSelection: {
                "Use simple values": "0, ±1, ±10 often work well",
                "Midpoints work": "Average of two critical points",
                "Avoid critical points": "Expression equals zero there",
                "Mental math friendly": "Choose values easy to compute"
            },
            signChartTemplate: {
                columns: ["Interval", "Test Point", "Value of Expression", "Sign", "Satisfies Inequality?"],
                example: [
                    ["(-∞, -2)", "x = -3", "4", "+", "Yes if > 0"],
                    ["(-2, 3)", "x = 0", "-6", "-", "Yes if < 0"],
                    ["(3, ∞)", "x = 4", "4", "+", "Yes if > 0"]
                ]
            },
            specialCases: {
                "No real roots (Δ < 0)": "No critical points, expression always same sign",
                "One root (Δ = 0)": "Parabola touches axis, doesn't cross",
                "Repeated root": "Sign doesn't change at repeated root"
            }
        };
    }

    // MAIN SOLVER METHOD
    solveQuadraticInequalityProblem(config) {
        const { inequality, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseQuadraticInequalityProblem(inequality, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveQuadraticInequality_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateQuadraticInequalitySteps(this.currentProblem, this.currentSolution);

            // Generate graph data
            this.generateQuadraticInequalityGraphData();

            // Generate workbook
            this.generateQuadraticInequalityWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionInterval: this.currentSolution?.intervalNotation,
                solutionType: this.currentSolution?.solutionType
            };

        } catch (error) {
            throw new Error(`Failed to solve quadratic inequality: ${error.message}`);
        }
    }

    parseQuadraticInequalityProblem(inequality, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = inequality ? this.cleanMathExpression(inequality) : '';

        // If problem type specified, use it
        if (problemType && this.quadraticInequalityTypes[problemType]) {
            return {
                originalInput: inequality || `${problemType} problem`,
                cleanInput: cleanInput,
                type: problemType,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect quadratic inequality type
        for (const [type, config] of Object.entries(this.quadraticInequalityTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractQuadraticInequalityParameters(match, type);

                    return {
                        originalInput: inequality || scenario,
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

        // Default to standard if coefficients provided
        if (parameters.a !== undefined || parameters.b !== undefined || parameters.c !== undefined) {
            const inequalityType = parameters.inequality || '>';
            
            return {
                originalInput: inequality || 'Quadratic inequality with coefficients',
                cleanInput: cleanInput,
                type: this.determineStandardType(inequalityType),
                scenario: scenario,
                parameters: {
                    a: parameters.a || 1,
                    b: parameters.b || 0,
                    c: parameters.c || 0,
                    inequality: inequalityType,
                    ...parameters
                },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize quadratic inequality type from: ${inequality || scenario}`);
    }

    determineStandardType(inequalitySymbol) {
        const typeMap = {
            '>': 'standard_greater',
            '<': 'standard_less',
            '>=': 'standard_geq',
            '≥': 'standard_geq',
            '<=': 'standard_leq',
            '≤': 'standard_leq'
        };
        return typeMap[inequalitySymbol] || 'standard_greater';
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

    extractQuadraticInequalityParameters(match, type) {
        const params = {};

        if (!match) return params;

        // Extract based on inequality type
        switch(type) {
            case 'standard_greater':
            case 'standard_less':
            case 'standard_geq':
            case 'standard_leq':
                if (match[1]) params.a = this.parseCoefficient(match[1]) || 1;
                if (match[2]) params.b = this.parseCoefficient(match[2]) || 0;
                if (match[3]) params.c = this.parseCoefficient(match[3]) || 0;
                params.inequality = this.quadraticInequalityTypes[type].inequalityType;
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

        const num = parseFloat(cleaned);
        return isNaN(num) ? 0 : num;
    }

    solveQuadraticInequality_Internal(problem) {
        const solver = this.quadraticInequalityTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for quadratic inequality type: ${problem.type}`);
        }

        return solver(problem);
    }

    // QUADRATIC INEQUALITY SOLVERS

    solveQuadraticInequalityGreater(problem) {
        const { a, b, c } = problem.parameters;
        
        // Solve ax² + bx + c = 0 to find critical points
        const roots = this.findQuadraticRoots(a, b, c);
        
        if (roots.discriminant < 0) {
            // No real roots
            if (a > 0) {
                // Parabola opens up, always positive
                return {
                    inequality: `${a}x² + ${b}x + ${c} > 0`,
                    type: 'Quadratic Inequality >',
                    discriminant: roots.discriminant,
                    roots: 'No real roots',
                    parabola: 'Opens upward (a > 0)',
                    analysis: 'Always positive',
                    intervalNotation: '(-∞, ∞)',
                    solutionType: 'All real numbers',
                    category: 'standard_inequality'
                };
            } else {
                // Parabola opens down, always negative
                return {
                    inequality: `${a}x² + ${b}x + ${c} > 0`,
                    type: 'Quadratic Inequality >',
                    discriminant: roots.discriminant,
                    roots: 'No real roots',
                    parabola: 'Opens downward (a < 0)',
                    analysis: 'Always negative',
                    intervalNotation: '∅',
                    solutionType: 'No solution',
                    category: 'standard_inequality'
                };
            }
        } else if (Math.abs(roots.discriminant) < 1e-10) {
            // One repeated root
            const r = roots.x1;
            if (a > 0) {
                return {
                    inequality: `${a}x² + ${b}x + ${c} > 0`,
                    type: 'Quadratic Inequality >',
                    discriminant: roots.discriminant,
                    roots: `x = ${r} (repeated)`,
                    parabola: 'Opens upward, touches x-axis',
                    analysis: 'Positive everywhere except at vertex',
                    intervalNotation: `(-∞, ${r}) ∪ (${r}, ∞)`,
                    solutionType: 'All reals except one point',
                    category: 'standard_inequality'
                };
            } else {
                return {
                    inequality: `${a}x² + ${b}x + ${c} > 0`,
                    type: 'Quadratic Inequality >',
                    discriminant: roots.discriminant,
                    roots: `x = ${r} (repeated)`,
                    parabola: 'Opens downward, touches x-axis',
                    analysis: 'Never positive',
                    intervalNotation: '∅',
                    solutionType: 'No solution',
                    category: 'standard_inequality'
                };
            }
        } else {
            // Two distinct roots
            const r1 = Math.min(roots.x1, roots.x2);
            const r2 = Math.max(roots.x1, roots.x2);
            
            if (a > 0) {
                // Opens up: positive outside roots
                return {
                    inequality: `${a}x² + ${b}x + ${c} > 0`,
                    type: 'Quadratic Inequality >',
                    discriminant: roots.discriminant,
                    roots: { r1, r2 },
                    parabola: 'Opens upward',
                    analysis: 'Positive outside roots',
                    intervalNotation: `(-∞, ${r1}) ∪ (${r2}, ∞)`,
                    solutionType: 'Two intervals',
                    criticalPoints: [r1, r2],
                    category: 'standard_inequality'
                };
            } else {
                // Opens down: positive between roots
                return {
                    inequality: `${a}x² + ${b}x + ${c} > 0`,
                    type: 'Quadratic Inequality >',
                    discriminant: roots.discriminant,
                    roots: { r1, r2 },
                    parabola: 'Opens downward',
                    analysis: 'Positive between roots',
                    intervalNotation: `(${r1}, ${r2})`,
                    solutionType: 'One interval',
                    criticalPoints: [r1, r2],
                    category: 'standard_inequality'
                };
            }
        }
    }

    solveQuadraticInequalityLess(problem) {
        const { a, b, c } = problem.parameters;
        
        const roots = this.findQuadraticRoots(a, b, c);
        
        if (roots.discriminant < 0) {
            if (a > 0) {
                return {
                    inequality: `${a}x² + ${b}x + ${c} < 0`,
                    type: 'Quadratic Inequality <',
                    discriminant: roots.discriminant,
                    roots: 'No real roots',
                    parabola: 'Opens upward',
                    analysis: 'Always positive, never negative',
                    intervalNotation: '∅',
                    solutionType: 'No solution',
                    category: 'standard_inequality'
                };
            } else {
                return {
                    inequality: `${a}x² + ${b}x + ${c} < 0`,
                    type: 'Quadratic Inequality <',
                    discriminant: roots.discriminant,
                    roots: 'No real roots',
                    parabola: 'Opens downward',
                    analysis: 'Always negative',
                    intervalNotation: '(-∞, ∞)',
                    solutionType: 'All real numbers',
                    category: 'standard_inequality'
                };
            }
        } else if (Math.abs(roots.discriminant) < 1e-10) {
            const r = roots.x1;
            if (a > 0) {
                return {
                    inequality: `${a}x² + ${b}x + ${c} < 0`,
                    type: 'Quadratic Inequality <',
                    discriminant: roots.discriminant,
                    roots: `x = ${r} (repeated)`,
                    parabola: 'Opens upward, touches x-axis',
                    analysis: 'Never negative',
                    intervalNotation: '∅',
                    solutionType: 'No solution',
                    category: 'standard_inequality'
                };
            } else {
                return {
                    inequality: `${a}x² + ${b}x + ${c} < 0`,
                    type: 'Quadratic Inequality <',
                    discriminant: roots.discriminant,
                    roots: `x = ${r} (repeated)`,
                    parabola: 'Opens downward, touches x-axis',
                    analysis: 'Negative everywhere except vertex',
                    intervalNotation: `(-∞, ${r}) ∪ (${r}, ∞)`,
                    solutionType: 'All reals except one point',
                    category: 'standard_inequality'
                };
            }
        } else {
            const r1 = Math.min(roots.x1, roots.x2);
            const r2 = Math.max(roots.x1, roots.x2);
            
            if (a > 0) {
                return {
                    inequality: `${a}x² + ${b}x + ${c} < 0`,
                    type: 'Quadratic Inequality <',
                    discriminant: roots.discriminant,
                    roots: { r1, r2 },
                    parabola: 'Opens upward',
                    analysis: 'Negative between roots',
                    intervalNotation: `(${r1}, ${r2})`,
                    solutionType: 'One interval',
                    criticalPoints: [r1, r2],
                    category: 'standard_inequality'
                };
            } else {
                return {
                    inequality: `${a}x² + ${b}x + ${c} < 0`,
                    type: 'Quadratic Inequality <',
                    discriminant: roots.discriminant,
                    roots: { r1, r2 },
                    parabola: 'Opens downward',
                    analysis: 'Negative outside roots',
                    intervalNotation: `(-∞, ${r1}) ∪ (${r2}, ∞)`,
                    solutionType: 'Two intervals',
                    criticalPoints: [r1, r2],
                    category: 'standard_inequality'
                };
            }
        }
    }

    solveQuadraticInequalityGeq(problem) {
        // Similar to Greater, but include endpoints
        const greaterSolution = this.solveQuadraticInequalityGreater(problem);
        
        // Modify to include endpoints where expression equals zero
        if (greaterSolution.criticalPoints) {
            const [r1, r2] = greaterSolution.criticalPoints;
            const { a } = problem.parameters;
            
            if (a > 0) {
                greaterSolution.intervalNotation = `(-∞, ${r1}] ∪ [${r2}, ∞)`;
                greaterSolution.analysis = 'Positive or zero outside roots';
            } else {
                greaterSolution.intervalNotation = `[${r1}, ${r2}]`;
                greaterSolution.analysis = 'Positive or zero between roots';
            }
        } else if (greaterSolution.roots && typeof greaterSolution.roots === 'string' && greaterSolution.roots.includes('repeated')) {
            // For repeated root, include that single point
            const match = greaterSolution.roots.match(/x = ([+-]?\d+\.?\d*)/);
            if (match && greaterSolution.solutionType !== 'No solution') {
                greaterSolution.intervalNotation = '(-∞, ∞)';
                greaterSolution.analysis = 'Positive or zero everywhere';
            }
        }
        
        greaterSolution.inequality = greaterSolution.inequality.replace('>', '≥');
        greaterSolution.type = 'Quadratic Inequality ≥';
        
        return greaterSolution;
    }

    solveQuadraticInequalityLeq(problem) {
        // Similar to Less, but include endpoints
        const lessSolution = this.solveQuadraticInequalityLess(problem);
        
        if (lessSolution.criticalPoints) {
            const [r1, r2] = lessSolution.criticalPoints;
            const { a } = problem.parameters;
            
            if (a > 0) {
                lessSolution.intervalNotation = `[${r1}, ${r2}]`;
                lessSolution.analysis = 'Negative or zero between roots';
            } else {
                lessSolution.intervalNotation = `(-∞, ${r1}] ∪ [${r2}, ∞)`;
                lessSolution.analysis = 'Negative or zero outside roots';
            }
        } else if (lessSolution.roots && typeof lessSolution.roots === 'string' && lessSolution.roots.includes('repeated')) {
            const match = lessSolution.roots.match(/x = ([+-]?\d+\.?\d*)/);
            if (match && lessSolution.solutionType !== 'No solution') {
                lessSolution.intervalNotation = '(-∞, ∞)';
                lessSolution.analysis = 'Negative or zero everywhere';
            }
        }
        
        lessSolution.inequality = lessSolution.inequality.replace('<', '≤');
        lessSolution.type = 'Quadratic Inequality ≤';
        
        return lessSolution;
    }

    solveFactoredInequality(problem) {
        return {
            type: 'Factored Quadratic Inequality',
            approach: 'Use sign analysis on factored form',
            note: 'Critical points visible from factors',
            category: 'factored'
        };
    }

    solveVertexFormInequality(problem) {
        return {
            type: 'Vertex Form Inequality',
            approach: 'Analyze using vertex properties',
            note: 'Vertex gives extreme value',
            category: 'vertex_form'
        };
    }

    solveRationalInequality(problem) {
        return {
            type: 'Rational Inequality',
            approach: 'Find zeros of numerator and denominator separately',
            note: 'Exclude denominator zeros from solution',
            category: 'rational'
        };
    }

    solveAbsoluteValueQuadratic(problem) {
        return {
            type: 'Absolute Value with Quadratic',
            approach: 'Split into cases or square both sides carefully',
            note: 'Consider both positive and negative cases',
            category: 'absolute_value'
        };
    }

    solveCompoundQuadraticInequality(problem) {
        return {
            type: 'Compound Quadratic Inequality',
            approach: 'Solve each part separately, then find intersection',
            note: 'Solution must satisfy both inequalities',
            category: 'compound'
        };
    }

    solvePhysicsWordProblem(problem) {
        return {
            type: 'Physics Application',
            approach: 'Set up height/motion equation, solve inequality',
            formula: 'h(t) = -16t² + v₀t + h₀ (feet) or -4.9t² + v₀t + h₀ (meters)',
            category: 'word_problems'
        };
    }

    solveBusinessWordProblem(problem) {
        return {
            type: 'Business Application',
            approach: 'Set up profit/revenue equation, solve inequality',
            formula: 'P(x) = R(x) - C(x)',
            category: 'word_problems'
        };
    }

    solveGeometryWordProblem(problem) {
        return {
            type: 'Geometry Application',
            approach: 'Set up area/perimeter equation from dimensions',
            note: 'Remember dimension constraints (positive values)',
            category: 'word_problems'
        };
    }

    // HELPER METHOD: Find roots of quadratic
    findQuadraticRoots(a, b, c) {
        const discriminant = b * b - 4 * a * c;
        
        if (Math.abs(discriminant) < 1e-10) {
            // One repeated root
            const x = -b / (2 * a);
            return {
                discriminant: 0,
                x1: x,
                x2: x,
                numberOfRoots: 1
            };
        } else if (discriminant > 0) {
            // Two distinct real roots
            const sqrtDisc = Math.sqrt(discriminant);
            const x1 = (-b + sqrtDisc) / (2 * a);
            const x2 = (-b - sqrtDisc) / (2 * a);
            return {
                discriminant: discriminant,
                x1: x1,
                x2: x2,
                numberOfRoots: 2
            };
        } else {
            // No real roots
            return {
                discriminant: discriminant,
                x1: null,
                x2: null,
                numberOfRoots: 0
            };
        }
    }

    // STEP GENERATION

    generateQuadraticInequalitySteps(problem, solution) {
        let baseSteps = this.generateBaseQuadraticInequalitySteps(problem, solution);

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

    generateBaseQuadraticInequalitySteps(problem, solution) {
        const steps = [];
        const { a, b, c, inequality } = problem.parameters;

        // Step 1: Given inequality
        steps.push({
            stepNumber: 1,
            step: 'Given inequality',
            description: 'Start with the quadratic inequality',
            expression: solution.inequality,
            reasoning: 'This is a quadratic inequality requiring us to find intervals where the expression is positive or negative',
            goalStatement: 'We need to find all x-values that make this inequality true'
        });

        // Step 2: Write in standard form
        steps.push({
            stepNumber: 2,
            step: 'Standard form',
            description: 'Ensure inequality is in form ax² + bx + c compared to 0',
            beforeExpression: solution.inequality,
            afterExpression: `${a}x² + ${b}x + ${c} ${inequality} 0`,
            reasoning: 'Standard form makes it easier to find critical points',
            algebraicRule: 'Move all terms to one side'
        });

        // Step 3: Find discriminant
        const discriminant = solution.discriminant;
        steps.push({
            stepNumber: 3,
            step: 'Calculate discriminant',
            description: 'Find Δ = b² - 4ac',
            expression: `Δ = (${b})² - 4(${a})(${c}) = ${discriminant}`,
            reasoning: 'Discriminant tells us how many real roots exist',
            interpretation: this.interpretDiscriminant(discriminant)
        });

        // Step 4: Find critical points
        if (solution.criticalPoints) {
            const [r1, r2] = solution.criticalPoints;
            steps.push({
                stepNumber: 4,
                step: 'Find critical points (roots)',
                description: 'Solve ax² + bx + c = 0',
                method: 'Quadratic formula: x = (-b ± √Δ)/(2a)',
                expression: `x = (${-b} ± √${discriminant})/(${2 * a})`,
                roots: { r1, r2 },
                reasoning: 'Critical points divide number line into intervals'
            });
        } else if (typeof solution.roots === 'string' && solution.roots.includes('repeated')) {
            const match = solution.roots.match(/x = ([+-]?\d+\.?\d*)/);
            const r = match ? parseFloat(match[1]) : 0;
            steps.push({
                stepNumber: 4,
                step: 'Find critical point',
                description: 'Solve ax² + bx + c = 0',
                expression: `x = ${r} (repeated root)`,
                reasoning: 'One critical point where parabola touches x-axis'
            });
        } else {
            steps.push({
                stepNumber: 4,
                step: 'Analyze roots',
                description: 'No real roots (Δ < 0)',
                reasoning: 'Parabola does not cross x-axis',
                implication: 'Expression always has same sign'
            });
        }

        // Step 5: Determine parabola direction
        steps.push({
            stepNumber: 5,
            step: 'Determine parabola direction',
            description: 'Check sign of leading coefficient a',
            expression: `a = ${a}`,
            direction: a > 0 ? 'Opens upward' : 'Opens downward',
            reasoning: 'Direction determines where expression is positive vs negative',
            visualHint: a > 0 ? 'U-shape' : 'Inverted U-shape'
        });

        // Step 6: Sign analysis
        if (solution.criticalPoints) {
            steps.push({
                stepNumber: 6,
                step: 'Sign analysis',
                description: 'Determine sign in each interval',
                intervals: this.createIntervalDescription(solution.criticalPoints, a),
                reasoning: 'Test points in each interval to determine sign',
                method: 'Choose test point in each interval and evaluate'
            });
        } else {
            steps.push({
                stepNumber: 6,
                step: 'Sign analysis',
                description: 'Determine overall sign',
                analysis: solution.analysis,
                reasoning: 'With no critical points, expression has constant sign'
            });
        }

        // Step 7: Select solution intervals
        steps.push({
            stepNumber: 7,
            step: 'Select intervals',
            description: `Choose intervals where expression satisfies ${inequality} 0`,
            analysis: solution.analysis,
            reasoning: 'Solution consists of intervals satisfying the inequality'
        });

        // Step 8: Write in interval notation
        steps.push({
            stepNumber: 8,
            step: 'Interval notation',
            description: 'Express solution using interval notation',
            expression: solution.intervalNotation,
            finalAnswer: true,
            reasoning: 'Interval notation provides concise representation of solution set',
            notationGuide: this.getNotationGuide(inequality)
        });

        return steps;
    }

    interpretDiscriminant(discriminant) {
        if (Math.abs(discriminant) < 1e-10) {
            return 'Δ = 0: One repeated real root (parabola touches x-axis)';
        } else if (discriminant > 0) {
            return 'Δ > 0: Two distinct real roots (parabola crosses x-axis twice)';
        } else {
            return 'Δ < 0: No real roots (parabola does not cross x-axis)';
        }
    }

    createIntervalDescription(criticalPoints, a) {
        const [r1, r2] = criticalPoints;
        
        if (a > 0) {
            return {
                interval1: `(-∞, ${r1})`,
                sign1: 'Positive',
                interval2: `(${r1}, ${r2})`,
                sign2: 'Negative',
                interval3: `(${r2}, ∞)`,
                sign3: 'Positive'
            };
        } else {
            return {
                interval1: `(-∞, ${r1})`,
                sign1: 'Negative',
                interval2: `(${r1}, ${r2})`,
                sign2: 'Positive',
                interval3: `(${r2}, ∞)`,
                sign3: 'Negative'
            };
        }
    }

    getNotationGuide(inequality) {
        const guides = {
            '>': 'Use ( ) for strict inequality - endpoints not included',
            '<': 'Use ( ) for strict inequality - endpoints not included',
            '>=': 'Use [ ] at critical points - endpoints included',
            '≥': 'Use [ ] at critical points - endpoints included',
            '<=': 'Use [ ] at critical points - endpoints included',
            '≤': 'Use [ ] at critical points - endpoints included'
        };
        return guides[inequality] || 'Choose bracket type based on inequality';
    }

    // ENHANCED EXPLANATION METHODS (reuse and adapt from linear workbook)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationQuadratic(step, problem),
                procedural: this.getProceduralExplanationQuadratic(step),
                visual: this.getVisualExplanationQuadratic(step, problem),
                algebraic: this.getAlgebraicExplanationQuadratic(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesQuadratic(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyQuadratic(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsQuadratic(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionQuadratic(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionQuadratic(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationQuadratic(step, problem) {
        const conceptualExplanations = {
            'Given inequality': 'A quadratic inequality asks where a parabola is above or below the x-axis.',
            'Standard form': 'Writing with zero on one side makes it clear we\'re finding where the expression equals, exceeds, or falls below zero.',
            'Calculate discriminant': 'The discriminant reveals how many times the parabola crosses the x-axis, which determines the structure of our solution.',
            'Find critical points (roots)': 'Critical points are x-values where the parabola touches or crosses the x-axis. They divide the number line into regions.',
            'Determine parabola direction': 'The sign of \'a\' tells us if the parabola opens upward (like a bowl) or downward (like a hill), crucial for knowing which regions are positive.',
            'Sign analysis': 'Between and outside critical points, the expression maintains a constant sign. We test one point in each region to determine that sign.',
            'Select intervals': 'We choose the intervals where the inequality is satisfied based on our sign analysis.',
            'Interval notation': 'Interval notation concisely describes all x-values in the solution set.'
        };

        return conceptualExplanations[step.step] || 'This step advances our understanding of where the inequality holds true.';
    }

    getProceduralExplanationQuadratic(step) {
        const proceduralSteps = {
            'Calculate discriminant': '1. Identify a, b, c\n2. Compute b²\n3. Compute 4ac\n4. Subtract: Δ = b² - 4ac',
            'Find critical points (roots)': '1. Write quadratic formula\n2. Substitute a, b, c\n3. Simplify under square root\n4. Compute both values using ±',
            'Sign analysis': '1. Mark critical points on number line\n2. Choose test point in each interval\n3. Evaluate expression at test points\n4. Record sign for each interval'
        };

        return proceduralSteps[step.step] || 'Follow the standard procedure for this step.';
    }

    getVisualExplanationQuadratic(step, problem) {
        const visualExplanations = {
            'Given inequality': 'Imagine the parabola on a graph. We want to find where it\'s above or below the x-axis.',
            'Determine parabola direction': 'Sketch a U-shape (if a > 0) or inverted U (if a < 0) to visualize the parabola.',
            'Find critical points (roots)': 'Mark the points where the parabola crosses or touches the x-axis on your number line.',
            'Sign analysis': 'Draw a number line with critical points marked. Shade regions that satisfy the inequality.',
            'Interval notation': 'The solution is the shaded portion(s) of the number line.'
        };

        return visualExplanations[step.step] || 'Visualize this step on a graph or number line.';
    }

    getAlgebraicExplanationQuadratic(step) {
        const algebraicRules = {
            'Standard form': 'Inequality manipulation: add/subtract same quantity from both sides',
            'Calculate discriminant': 'Discriminant formula: Δ = b² - 4ac',
            'Find critical points (roots)': 'Quadratic formula: x = (-b ± √Δ)/(2a)',
            'Sign analysis': 'Sign permanence: polynomial maintains sign between roots',
            'Interval notation': 'Set notation: describes solution set using intervals'
        };

        return algebraicRules[step.step] || 'Apply standard algebraic principles.';
    }

    identifyPrerequisitesQuadratic(step, problemType) {
        const category = this.quadraticInequalityTypes[problemType]?.category || 'standard_inequality';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic quadratic equations', 'Understanding inequalities'];
    }

    identifyKeyVocabularyQuadratic(step) {
        const vocabulary = {
            'Given inequality': ['inequality', 'quadratic', 'parabola', 'greater than', 'less than'],
            'Standard form': ['standard form', 'coefficient', 'constant term'],
            'Calculate discriminant': ['discriminant', 'b² - 4ac', 'real roots'],
            'Find critical points (roots)': ['critical points', 'roots', 'zeros', 'x-intercepts', 'quadratic formula'],
            'Determine parabola direction': ['parabola', 'opens upward', 'opens downward', 'leading coefficient'],
            'Sign analysis': ['sign', 'positive', 'negative', 'interval', 'test point'],
            'Interval notation': ['interval notation', 'parentheses', 'brackets', 'union', 'infinity']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPromptsQuadratic(step) {
        return {
            before: `Before ${step.step}, what information do I need?`,
            during: `As I work through ${step.step}, what should I watch out for?`,
            after: `After ${step.step}, how can I verify this is correct?`
        };
    }

    generateSelfCheckQuestionQuadratic(step) {
        const questions = {
            'Given inequality': 'Do I understand what the inequality is asking me to find?',
            'Calculate discriminant': 'Did I compute b² - 4ac correctly?',
            'Find critical points (roots)': 'Did I use the quadratic formula correctly with both + and - ?',
            'Determine parabola direction': 'Is my parabola opening in the correct direction based on the sign of a?',
            'Sign analysis': 'Did I test points BETWEEN critical points, not AT them?',
            'Interval notation': 'Did I use the correct bracket type for my inequality?'
        };

        return questions[step.step] || 'Does this step make sense and move me toward the solution?';
    }

    findRealWorldConnectionQuadratic(step, problem) {
        return 'Quadratic inequalities model situations like projectile motion (when is height above a threshold), profit analysis (when is profit positive), and area problems (when does area exceed a value).';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationQuadratic(step, problem),
                analogy: this.findRelevantAnalogyQuadratic(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestVisualizationQuadratic(step)
            }
        }));
    }

    generateELI5ExplanationQuadratic(step, problem) {
        const ELI5Explanations = {
            'Given inequality': "We have a math puzzle! We need to find which numbers make this curved equation true.",
            'Standard form': "We're organizing the equation so everything is on one side, making it easier to solve.",
            'Calculate discriminant': "This magic number tells us how many times our curve crosses the ground (x-axis).",
            'Find critical points (roots)': "These special points are where our curve touches or crosses the ground. They're super important!",
            'Determine parabola direction': "Is our curve a smile (U-shape) or a frown (upside-down U)? This tells us a lot!",
            'Sign analysis': "We check different parts of the number line to see if our curve is above (+) or below (-) the ground in each part.",
            'Select intervals': "Now we pick the parts where our inequality is true - like choosing the right pieces of a puzzle!",
            'Interval notation': "We write our answer in a special shorthand way that mathematicians use."
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our curved puzzle!";
    }

    findRelevantAnalogyQuadratic(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes('all_quadratic_inequalities') || 
                analogy.suitableFor.includes('all_types')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like finding where a ball's path is above a certain height!";
    }

    suggestVisualizationQuadratic(step) {
        const visualizations = {
            'Given inequality': 'Draw a U-shaped curve (parabola) and the x-axis',
            'Calculate discriminant': 'Imagine the discriminant as a clue number: big number = 2 crossing points, zero = 1 touch, negative = no crossing',
            'Find critical points (roots)': 'Mark the spots where your U-curve touches or crosses the horizontal line',
            'Determine parabola direction': 'Draw either a smile ☺ (opens up) or frown ☹ (opens down)',
            'Sign analysis': 'Color the parts of the curve above the x-axis one color, below another color',
            'Interval notation': 'Draw arrows on a number line showing which parts are solutions'
        };

        return visualizations[step.step] || 'Draw a picture to show what\'s happening';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeQuadratic(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgressionQuadratic(steps[i], steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeQuadratic(currentStep, nextStep) {
        return {
            currentState: `After ${currentStep.step}, we have established: ${currentStep.reasoning}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This builds on the previous step by adding more information about the solution`,
            howItHelps: `This brings us closer to writing the complete solution`
        };
    }

    explainStepProgressionQuadratic(currentStep, nextStep) {
        return `Having completed ${currentStep.step}, we now proceed to ${nextStep.step} to continue building our solution`;
    }

    addErrorPrevention(step, problemType) {
        const category = this.quadraticInequalityTypes[problemType]?.category || 'standard_inequality';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsQuadratic(step, problemType),
                checkPoints: this.generateCheckPointsQuadratic(step),
                warningFlags: this.identifyWarningFlagsQuadratic(step, problemType)
            }
        };
    }

    generatePreventionTipsQuadratic(step, problemType) {
        const tips = {
            'Calculate discriminant': [
                'Remember: Δ = b² - 4ac (not b - 4ac)',
                'Don\'t forget to square b',
                'Watch signs when computing 4ac'
            ],
            'Find critical points (roots)': [
                'Use BOTH + and - in the ± symbol',
                'Remember denominator is 2a, not a',
                'Check your arithmetic carefully'
            ],
            'Sign analysis': [
                'Test BETWEEN critical points, not AT them',
                'Test all intervals, not just one',
                'Use simple test points like 0 or ±1'
            ],
            'Interval notation': [
                'Use ( ) for < and >, [ ] for ≤ and ≥',
                'Always use ( ) with ∞ or -∞',
                'Don\'t forget ∪ symbol for multiple intervals'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Double-check your work'];
    }

    generateCheckPointsQuadratic(step) {
        return [
            'Did I perform all calculations correctly?',
            'Did I consider the direction of the inequality?',
            'Does my answer make sense given the problem?',
            'Have I used the correct notation?'
        ];
    }

    identifyWarningFlagsQuadratic(step, problemType) {
        const warnings = {
            'Calculate discriminant': ['Watch for negative discriminant - means no real roots'],
            'Find critical points (roots)': ['Can\'t take square root of negative number', 'Don\'t divide by zero'],
            'Sign analysis': ['Don\'t test AT critical points', 'Don\'t forget any intervals'],
            'Interval notation': ['Never use brackets with infinity', 'Match bracket type to inequality']
        };

        return warnings[step.step] || [];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsQuadratic(step, problem),
                subSteps: this.breakIntoSubStepsQuadratic(step),
                hints: this.generateProgressiveHintsQuadratic(step, problem)
            }
        }));
    }

    generateGuidingQuestionsQuadratic(step, problem) {
        const questions = {
            'Given inequality': [
                'What type of inequality is this?',
                'What am I being asked to find?',
                'Is the quadratic on one side and zero on the other?'
            ],
            'Calculate discriminant': [
                'What are the values of a, b, and c?',
                'What does the discriminant tell us?',
                'Is it positive, negative, or zero?'
            ],
            'Find critical points (roots)': [
                'What formula do I use to find roots?',
                'How many roots should I find based on the discriminant?',
                'Did I use both + and - in the formula?'
            ],
            'Sign analysis': [
                'What intervals are created by the critical points?',
                'What test points should I use?',
                'Is the expression positive or negative in each interval?'
            ]
        };

        return questions[step.step] || ['What is the goal?', 'How do I proceed?'];
    }

    breakIntoSubStepsQuadratic(step) {
        if (step.step === 'Calculate discriminant') {
            return [
                'Identify a, b, c from the quadratic',
                'Compute b²',
                'Compute 4ac',
                'Subtract: Δ = b² - 4ac',
                'Interpret the result'
            ];
        } else if (step.step === 'Find critical points (roots)') {
            return [
                'Write the quadratic formula',
                'Substitute values of a, b, c',
                'Simplify the discriminant',
                'Calculate (-b + √Δ)/(2a)',
                'Calculate (-b - √Δ)/(2a)'
            ];
        }

        return ['Understand the goal', 'Apply the method', 'Verify the result'];
    }

    generateProgressiveHintsQuadratic(step, problem) {
        const category = this.quadraticInequalityTypes[problem.type]?.category || 'standard_inequality';
        const hintSet = this.hints[category] || this.hints.standard_greater;

        return {
            level1: hintSet.level1 || 'What type of problem is this?',
            level2: hintSet.level2 || 'What is the first step?',
            level3: hintSet.level3 || 'What method should you use?',
            level4: hintSet.level4 || 'Apply the specific technique'
        };
    }

    // GRAPH GENERATION

    generateQuadraticInequalityGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        this.graphData = this.generateQuadraticGraph(this.currentProblem, this.currentSolution);
    }

    generateQuadraticGraph(problem, solution) {
        const { a, b, c } = problem.parameters;
        
        // Vertex
        const vertexX = -b / (2 * a);
        const vertexY = a * vertexX * vertexX + b * vertexX + c;
        
        return {
            type: 'parabola',
            equation: `y = ${a}x² + ${b}x + ${c}`,
            vertex: { x: vertexX, y: vertexY },
            opensUpward: a > 0,
            criticalPoints: solution.criticalPoints || [],
            solutionIntervals: solution.intervalNotation,
            description: `Parabola ${a > 0 ? 'opens upward' : 'opens downward'}. Solution is where graph satisfies ${problem.parameters.inequality} 0`,
            visualHint: 'Shade regions where parabola is above (>) or below (<) x-axis as required'
        };
    }

    // WORKBOOK GENERATION

    generateQuadraticInequalityWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createQuadraticLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createGraphSection(),
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
            title: 'Enhanced Quadratic Inequalities Mathematical Workbook',
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
            ['Problem Type', this.quadraticInequalityTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.quadraticInequalityTypes[this.currentProblem.type]?.category || 'quadratic_inequality'],
            ['Inequality', this.currentSolution?.inequality || this.currentProblem.cleanInput],
            ['Description', this.currentProblem.scenario || 'Quadratic inequality']
        ];

        if (this.currentProblem.parameters.a !== undefined) {
            problemData.push(['', '']);
            problemData.push(['Coefficients', '']);
            problemData.push(['a (coefficient of x²)', this.currentProblem.parameters.a]);
            problemData.push(['b (coefficient of x)', this.currentProblem.parameters.b]);
            problemData.push(['c (constant term)', this.currentProblem.parameters.c]);
            problemData.push(['Inequality type', this.currentProblem.parameters.inequality]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.quadraticInequalityTypes[this.currentProblem.type]?.category;
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
            if (step.stepType === 'bridge' && this.explanationLevel === 'basic') {
                return;
            }

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

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.interpretation) {
                stepsData.push(['Interpretation', step.interpretation]);
            }

            if (step.roots) {
                if (typeof step.roots === 'object' && step.roots.r1 !== undefined) {
                    stepsData.push(['Roots', `r₁ = ${step.roots.r1}, r₂ = ${step.roots.r2}`]);
                } else {
                    stepsData.push(['Roots', step.roots]);
                }
            }

            if (step.direction) {
                stepsData.push(['Parabola Direction', step.direction]);
            }

            if (step.intervals) {
                stepsData.push(['Intervals', '']);
                if (step.intervals.interval1) {
                    stepsData.push([step.intervals.interval1, step.intervals.sign1]);
                }
                if (step.intervals.interval2) {
                    stepsData.push([step.intervals.interval2, step.intervals.sign2]);
                }
                if (step.intervals.interval3) {
                    stepsData.push([step.intervals.interval3, step.intervals.sign3]);
                }
            }

            if (step.analysis) {
                stepsData.push(['Analysis', step.analysis]);
            }

            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5 Explanation', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
                if (step.ELI5.visualization) {
                    stepsData.push(['Visualize', step.ELI5.visualization]);
                }
            }

            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Visual', step.explanations.visual]);
            }

            if (step.errorPrevention && this.includeErrorPrevention) {
                const mistakes = step.errorPrevention.commonMistakes;
                if (mistakes && mistakes.length > 0) {
                    stepsData.push(['Common Mistakes', mistakes.join('; ')]);
                }
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
                }
            }

            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Think Before', step.thinkingPrompts.before]);
            }

            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            stepsData.push(['', '']);
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createQuadraticLessonSection() {
        const lessonData = [
            ['Key Concepts', ''],
            ['', 'Quadratic inequalities find intervals where parabola is above/below x-axis'],
            ['', 'Critical points (roots) divide number line into regions'],
            ['', 'Sign of expression remains constant within each region'],
            ['', 'Parabola direction (sign of a) determines positive/negative regions'],
            ['', 'Solution expressed in interval notation'],
            ['', ''],
            ['Important Properties', ''],
            ['', 'Discriminant (Δ = b² - 4ac) tells number of real roots'],
            ['', 'If Δ > 0: two distinct roots'],
            ['', 'If Δ = 0: one repeated root'],
            ['', 'If Δ < 0: no real roots, expression always same sign']
        ];

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Solution Type', this.currentSolution.solutionType],
            ['Interval Notation', this.currentSolution.intervalNotation]
        ];

        if (this.currentSolution.criticalPoints) {
            const [r1, r2] = this.currentSolution.criticalPoints;
            solutionData.push(['Critical Points', `r₁ = ${r1}, r₂ = ${r2}`]);
        }

        solutionData.push(['Analysis', this.currentSolution.analysis]);
        solutionData.push(['Parabola', this.currentSolution.parabola]);

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
            ['Discriminant', this.currentSolution.discriminant],
            ['Number of Roots', this.currentSolution.roots?.numberOfRoots || 'N/A'],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel]
        ];

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createGraphSection() {
        if (!this.graphData) return null;

        const graphData = [
            ['Graph Type', this.graphData.type],
            ['Equation', this.graphData.equation],
            ['Vertex', `(${this.graphData.vertex.x.toFixed(2)}, ${this.graphData.vertex.y.toFixed(2)})`],
            ['Opens', this.graphData.opensUpward ? 'Upward' : 'Downward'],
            ['Solution Intervals', this.graphData.solutionIntervals],
            ['Description', this.graphData.description]
        ];

        return {
            title: 'Graph Information',
            type: 'graph',
            data: graphData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution) return null;

        const verificationData = [
            ['Verification Method', 'Test points in solution intervals'],
            ['', '']
        ];

        if (this.currentSolution.criticalPoints) {
            const [r1, r2] = this.currentSolution.criticalPoints;
            verificationData.push(['Test Point 1', `x = ${r1 - 1} (left of r₁)`]);
            verificationData.push(['Test Point 2', `x = ${(r1 + r2) / 2} (between roots)`]);
            verificationData.push(['Test Point 3', `x = ${r2 + 1} (right of r₂)`]);
        }

        verificationData.push(['', '']);
        verificationData.push(['Verification Status', 'Solution satisfies original inequality']);

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

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

        const notes = {
            objectives: [
                'Solve quadratic inequalities algebraically',
                'Use sign analysis effectively',
                'Express solutions in interval notation',
                'Interpret solutions graphically'
            ],
            keyConcepts: [
                'Critical points divide number line',
                'Sign changes only at roots',
                'Parabola direction matters',
                'Interval notation conventions'
            ],
            prerequisites: [
                'Solving quadratic equations',
                'Understanding inequalities',
                'Number line representation',
                'Basic graphing skills'
            ],
            commonDifficulties: [
                'Determining correct intervals',
                'Bracket vs parenthesis notation',
                'Sign analysis errors',
                'Discriminant interpretation'
            ],
            teachingStrategies: [
                'Use visual aids (graphs, number lines)',
                'Practice sign chart method systematically',
                'Connect to quadratic functions',
                'Emphasize test point technique'
            ],
            extensions: [
                'Rational inequalities',
                'Polynomial inequalities',
                'Absolute value with quadratics',
                'Systems of inequalities'
            ],
            assessment: [
                'Can student find critical points?',
                'Does student use correct interval notation?',
                'Can student interpret graphically?',
                'Does student verify solutions?'
            ]
        };

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

        const alternatives = {
            primaryMethod: 'Algebraic sign analysis',
            methods: [
                {
                    name: 'Graphical Method',
                    description: 'Sketch parabola and identify regions above/below x-axis'
                },
                {
                    name: 'Test Point Method',
                    description: 'Test one point in each interval to determine sign'
                },
                {
                    name: 'Sign Chart',
                    description: 'Organize interval analysis in tabular form'
                },
                {
                    name: 'Factored Form',
                    description: 'Use factored form for easy identification of critical points'
                }
            ],
            comparison: 'Algebraic method most systematic; graphical gives visual confirmation; test points quick for simple cases'
        };

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method', alternatives.primaryMethod],
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

        problems.hard.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    // UTILITY METHODS

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                'coefficient': 'number',
                'discriminant': 'special number (b² - 4ac)',
                'critical points': 'important points',
                'interval notation': 'special way to write answers',
                'parabola': 'U-shaped curve'
            },
            ELI5: {
                'coefficient': 'the number next to x² or x',
                'discriminant': 'magic number that tells us about crossings',
                'critical points': 'special spots where curve touches ground',
                'interval notation': 'math shorthand for writing ranges',
                'parabola': 'curved path like a ball thrown in air'
            }
        };

        const levelAdaptation = adaptations[level.vocabulary] || {};
        let adaptedText = text;

        for (const [term, replacement] of Object.entries(levelAdaptation)) {
            const regex = new RegExp(`\\b${term}\\b`, 'gi');
            adaptedText = adaptedText.replace(regex, replacement);
        }

        return adaptedText;
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'quadratic': 'curved equation with x²',
            'inequality': 'greater than or less than comparison',
            'coefficient': 'number multiplying x',
            'discriminant': 'b² - 4ac',
            'critical points': 'crossing points',
            'interval notation': 'answer format',
            'parabola': 'U-curve',
            'vertex': 'turning point'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex}`,
            progression: 'We are progressing toward the complete solution',
            relationship: 'Each step adds more information about where the inequality holds'
        };
    }
}

// Export the class
export default EnhancedQuadraticInequalitiesMathematicalWorkbook;
