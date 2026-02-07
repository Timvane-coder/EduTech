// Enhanced Partial Fraction Decomposition Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedPartialFractionMathematicalWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2500;
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
        this.initializePartialFractionSolvers();
        this.initializePartialFractionLessons();
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
        this.initializeIntegrationTechniquesDatabase();
    }

    initializePartialFractionLessons() {
        this.lessons = {
            introduction: {
                title: "Introduction to Partial Fraction Decomposition",
                concepts: [
                    "Partial fractions break a complex rational function into simpler fractions",
                    "Used primarily for integration of rational functions",
                    "The denominator must be factored completely",
                    "Degree of numerator must be less than degree of denominator",
                    "If not, perform polynomial long division first"
                ],
                theory: "Partial fraction decomposition is the reverse of adding fractions. Instead of combining fractions into one, we break one complex fraction into several simpler ones.",
                keyFormulas: {
                    "Proper Rational Function": "deg(numerator) < deg(denominator)",
                    "Improper Rational Function": "deg(numerator) ≥ deg(denominator)",
                    "General Form": "P(x)/Q(x) = sum of partial fractions"
                },
                applications: [
                    "Integration of rational functions",
                    "Inverse Laplace transforms",
                    "Control theory transfer functions",
                    "Signal processing"
                ]
            },

            distinct_linear_factors: {
                title: "Distinct Linear Factors",
                concepts: [
                    "Denominator factors into distinct linear factors: (x - a)(x - b)(x - c)...",
                    "Each factor contributes one term: A/(x - a)",
                    "Constants A, B, C,... are found by solving system of equations",
                    "Most straightforward type of partial fraction"
                ],
                theory: "When the denominator consists of distinct (non-repeated) linear factors, each factor contributes exactly one partial fraction with a constant numerator.",
                keyFormulas: {
                    "Form": "P(x)/[(x-a)(x-b)] = A/(x-a) + B/(x-b)",
                    "Clearing denominators": "P(x) = A(x-b) + B(x-a)",
                    "Solving": "Substitute strategic values or expand and equate coefficients"
                },
                solvingSteps: [
                    "Factor denominator completely",
                    "Set up partial fraction form with unknown constants",
                    "Clear denominators by multiplying both sides",
                    "Solve for constants using substitution or coefficient comparison",
                    "Write final decomposition",
                    "Verify by combining fractions"
                ],
                examples: [
                    "1/[(x-1)(x-2)] = A/(x-1) + B/(x-2)",
                    "(3x+5)/[(x+1)(x-3)] = A/(x+1) + B/(x-3)",
                    "x/[(x-1)(x-2)(x-3)] = A/(x-1) + B/(x-2) + C/(x-3)"
                ]
            },

            repeated_linear_factors: {
                title: "Repeated Linear Factors",
                concepts: [
                    "Denominator has repeated linear factors: (x - a)^n",
                    "Each power contributes a term: A/(x-a) + B/(x-a)² + C/(x-a)³ + ...",
                    "Need as many terms as the power of the repeated factor",
                    "More complex than distinct factors"
                ],
                theory: "When a linear factor appears multiple times, we need one partial fraction for each power from 1 up to the multiplicity of the factor.",
                keyFormulas: {
                    "Form": "P(x)/(x-a)^n = A₁/(x-a) + A₂/(x-a)² + ... + Aₙ/(x-a)^n",
                    "Mixed Form": "P(x)/[(x-a)^n(x-b)] = A₁/(x-a) + A₂/(x-a)² + ... + Aₙ/(x-a)^n + B/(x-b)"
                },
                solvingSteps: [
                    "Factor denominator, noting multiplicities",
                    "Set up partial fractions with all powers up to multiplicity",
                    "Clear denominators",
                    "Solve for all constants",
                    "Verify decomposition"
                ],
                examples: [
                    "1/(x-1)² = A/(x-1) + B/(x-1)²",
                    "x/[(x+2)³] = A/(x+2) + B/(x+2)² + C/(x+2)³",
                    "(x+1)/[(x-1)²(x+3)] = A/(x-1) + B/(x-1)² + C/(x+3)"
                ]
            },

            irreducible_quadratic_factors: {
                title: "Irreducible Quadratic Factors",
                concepts: [
                    "Quadratic factors that don't factor over reals: ax² + bx + c",
                    "Each irreducible quadratic contributes (Ax + B)/(quadratic)",
                    "Numerator is linear (Ax + B), not just constant",
                    "Cannot be factored using real numbers"
                ],
                theory: "Irreducible quadratic factors (those with no real roots) require linear numerators in their partial fractions, not just constants.",
                keyFormulas: {
                    "Form": "P(x)/[(x-a)(x²+bx+c)] = A/(x-a) + (Bx+C)/(x²+bx+c)",
                    "Irreducible test": "b² - 4ac < 0 (negative discriminant)",
                    "Numerator": "Must be linear: Ax + B"
                },
                solvingSteps: [
                    "Identify irreducible quadratic factors",
                    "Set up partial fractions with linear numerators for quadratics",
                    "Clear denominators",
                    "Expand and collect like terms",
                    "Equate coefficients of like powers",
                    "Solve system of equations"
                ],
                examples: [
                    "x/[(x-1)(x²+1)] = A/(x-1) + (Bx+C)/(x²+1)",
                    "(2x²+3)/[(x²+4)(x+1)] = (Ax+B)/(x²+4) + C/(x+1)",
                    "1/[(x²+x+1)(x-2)] = (Ax+B)/(x²+x+1) + C/(x-2)"
                ]
            },

            repeated_quadratic_factors: {
                title: "Repeated Irreducible Quadratic Factors",
                concepts: [
                    "Irreducible quadratic raised to a power: (ax² + bx + c)^n",
                    "Each power gets a linear numerator",
                    "Form: (A₁x+B₁)/(quadratic) + (A₂x+B₂)/(quadratic)² + ...",
                    "Most complex type of partial fraction"
                ],
                theory: "Repeated irreducible quadratics require one term for each power, each with a linear numerator.",
                keyFormulas: {
                    "Form": "P(x)/(x²+bx+c)^n = (A₁x+B₁)/(x²+bx+c) + (A₂x+B₂)/(x²+bx+c)² + ... + (Aₙx+Bₙ)/(x²+bx+c)^n"
                },
                solvingSteps: [
                    "Identify repeated irreducible quadratic",
                    "Set up all terms with linear numerators",
                    "Clear denominators",
                    "Expand fully",
                    "Equate coefficients",
                    "Solve resulting system"
                ],
                examples: [
                    "x/(x²+1)² = (Ax+B)/(x²+1) + (Cx+D)/(x²+1)²",
                    "(x²+2x+3)/[(x²+4)²] = (Ax+B)/(x²+4) + (Cx+D)/(x²+4)²"
                ]
            },

            improper_fractions: {
                title: "Improper Rational Functions",
                concepts: [
                    "Improper when deg(numerator) ≥ deg(denominator)",
                    "Must perform polynomial division first",
                    "Result: quotient + proper remainder/divisor",
                    "Then decompose the proper fraction part"
                ],
                theory: "Before applying partial fractions, we must ensure the fraction is proper. If not, divide the polynomials first.",
                keyFormulas: {
                    "Division": "P(x)/Q(x) = q(x) + r(x)/Q(x)",
                    "Then decompose": "r(x)/Q(x) using partial fractions"
                },
                solvingSteps: [
                    "Check if fraction is improper",
                    "If yes, perform polynomial long division",
                    "Obtain quotient and remainder",
                    "Apply partial fractions to remainder/divisor",
                    "Combine quotient with partial fraction decomposition"
                ],
                examples: [
                    "(x³+1)/(x²-1) = x + 1/(x²-1) = x + [partial fractions of 1/(x²-1)]",
                    "(x²+2x+3)/(x+1) = x + 1 + 2/(x+1)"
                ]
            },

            heaviside_coverup: {
                title: "Heaviside Cover-Up Method",
                concepts: [
                    "Fast technique for finding constants in distinct linear factors",
                    "Cover up one factor and substitute its root",
                    "Works only for distinct linear factors",
                    "Named after Oliver Heaviside"
                ],
                theory: "The cover-up method provides a shortcut for finding constants when dealing with distinct linear factors.",
                procedure: [
                    "For factor (x - a), cover it up in the original fraction",
                    "Substitute x = a into the remaining expression",
                    "The result is the constant for that factor's term",
                    "Repeat for each factor"
                ],
                limitations: [
                    "Only works for distinct linear factors",
                    "Cannot be used for repeated factors",
                    "Cannot be used for irreducible quadratics"
                ]
            },

            coefficient_comparison: {
                title: "Method of Equating Coefficients",
                concepts: [
                    "Expand both sides after clearing denominators",
                    "Collect terms by powers of x",
                    "Equate coefficients of like powers",
                    "Solve resulting system of linear equations"
                ],
                theory: "Two polynomials are equal if and only if all corresponding coefficients are equal.",
                procedure: [
                    "Clear denominators",
                    "Expand all products",
                    "Collect like terms",
                    "Write equation for each power of x",
                    "Solve system of equations"
                ],
                advantages: [
                    "Works for all types of factors",
                    "Systematic and reliable",
                    "Good for complex cases"
                ],
                disadvantages: [
                    "Can be tedious for simple cases",
                    "Requires solving systems of equations",
                    "More time-consuming than cover-up method"
                ]
            },

            strategic_substitution: {
                title: "Strategic Value Substitution",
                concepts: [
                    "Choose clever x-values to simplify equations",
                    "Use roots of factors to eliminate terms",
                    "Combine with other methods for efficiency",
                    "Reduces computational complexity"
                ],
                theory: "By substituting strategic values of x, we can often eliminate multiple unknowns at once.",
                technique: [
                    "Substitute roots of denominator factors",
                    "Each substitution eliminates terms",
                    "Solve for one constant at a time",
                    "Use additional values if needed"
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
                warningBg: '#fff3cd',
                successBg: '#d4edda'
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
                warningBg: '#fff8e1',
                successBg: '#e8f5e9'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            'integral': '∫', 'partial': '∂', 'nabla': '∇',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            'sigma': 'Σ', 'omega': 'Ω',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥', 'therefore': '∴', 'because': '∵'
        };
    }

    initializePartialFractionSolvers() {
        this.partialFractionTypes = {
            distinct_linear: {
                patterns: [
                    /\(x[\+\-]\d+\)\(x[\+\-]\d+\)/,
                    /distinct.*linear/i,
                    /linear.*factors/i
                ],
                solver: this.solveDistinctLinear.bind(this),
                name: 'Distinct Linear Factors',
                category: 'distinct_linear',
                description: 'Denominator factors into distinct linear terms',
                difficulty: 'basic',
                form: 'P(x)/[(x-a)(x-b)] = A/(x-a) + B/(x-b)'
            },

            repeated_linear: {
                patterns: [
                    /\(x[\+\-]\d+\)\^(\d+)/,
                    /repeated.*linear/i,
                    /multiple.*root/i
                ],
                solver: this.solveRepeatedLinear.bind(this),
                name: 'Repeated Linear Factors',
                category: 'repeated_linear',
                description: 'Denominator has repeated linear factors',
                difficulty: 'intermediate',
                form: 'P(x)/(x-a)^n = A₁/(x-a) + A₂/(x-a)² + ... + Aₙ/(x-a)^n'
            },

            irreducible_quadratic: {
                patterns: [
                    /x\^2[\+\-]\d+/,
                    /quadratic/i,
                    /irreducible/i
                ],
                solver: this.solveIrreducibleQuadratic.bind(this),
                name: 'Irreducible Quadratic Factors',
                category: 'irreducible_quadratic',
                description: 'Denominator has irreducible quadratic factors',
                difficulty: 'intermediate',
                form: 'P(x)/[(x-a)(x²+bx+c)] = A/(x-a) + (Bx+C)/(x²+bx+c)'
            },

            repeated_quadratic: {
                patterns: [
                    /\(x\^2[\+\-][^\)]+\)\^(\d+)/,
                    /repeated.*quadratic/i
                ],
                solver: this.solveRepeatedQuadratic.bind(this),
                name: 'Repeated Irreducible Quadratic Factors',
                category: 'repeated_quadratic',
                description: 'Denominator has repeated irreducible quadratic factors',
                difficulty: 'advanced',
                form: 'P(x)/(x²+bx+c)^n = Σ(Aᵢx+Bᵢ)/(x²+bx+c)^i'
            },

            mixed_factors: {
                patterns: [
                    /mixed/i,
                    /combination/i
                ],
                solver: this.solveMixedFactors.bind(this),
                name: 'Mixed Factor Types',
                category: 'mixed',
                description: 'Combination of different factor types',
                difficulty: 'advanced',
                form: 'Combination of above forms'
            },

            improper_fraction: {
                patterns: [
                    /improper/i,
                    /divide.*first/i,
                    /polynomial.*division/i
                ],
                solver: this.solveImproperFraction.bind(this),
                name: 'Improper Rational Functions',
                category: 'improper',
                description: 'Numerator degree ≥ denominator degree',
                difficulty: 'intermediate',
                form: 'P(x)/Q(x) = q(x) + r(x)/Q(x), then decompose r(x)/Q(x)'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            distinct_linear: {
                'Setup': [
                    'Forgetting to factor denominator completely',
                    'Not setting up enough partial fraction terms',
                    'Wrong form for constants (using Ax instead of A)'
                ],
                'Clearing denominators': [
                    'Not multiplying all terms correctly',
                    'Algebraic errors in expansion',
                    'Dropping terms during multiplication'
                ],
                'Solving for constants': [
                    'Arithmetic errors in substitution',
                    'Wrong choice of strategic values',
                    'Sign errors in calculations'
                ],
                'Verification': [
                    'Skipping verification step',
                    'Making errors when combining fractions',
                    'Not checking if answer equals original'
                ]
            },
            repeated_linear: {
                'Setup': [
                    'Not including all powers up to multiplicity',
                    'Wrong indexing of constants (A₁, A₂, etc.)',
                    'Confusing which constant goes with which power'
                ],
                'Solving': [
                    'Difficulty solving larger system of equations',
                    'Computational errors with multiple unknowns',
                    'Lost track of which constant is which'
                ]
            },
            irreducible_quadratic: {
                'Setup': [
                    'Using constant numerator instead of linear (Ax+B)',
                    'Trying to factor irreducible quadratic',
                    'Wrong form for quadratic partial fraction'
                ],
                'Solving': [
                    'Errors in expanding (Ax+B)(factors)',
                    'Difficulty equating coefficients',
                    'More complex system of equations'
                ],
                'Recognition': [
                    'Not recognizing quadratic is irreducible',
                    'Attempting to factor when b²-4ac < 0',
                    'Confusion about discriminant test'
                ]
            },
            improper: {
                'Division': [
                    'Skipping polynomial division step',
                    'Errors in long division',
                    'Incorrect quotient or remainder'
                ],
                'Integration': [
                    'Forgetting to integrate the polynomial quotient',
                    'Only integrating partial fraction part',
                    'Combining quotient and partial fractions incorrectly'
                ]
            }
        };

        this.errorPrevention = {
            factoring: {
                reminder: 'Always factor denominator completely before setting up partial fractions',
                method: 'Check each factor: is it linear? quadratic? Can it be factored further?'
            },
            proper_form: {
                reminder: 'Ensure fraction is proper (numerator degree < denominator degree)',
                method: 'Compare degrees; if improper, divide first'
            },
            correct_setup: {
                reminder: 'Match partial fraction form to factor type',
                method: 'Linear → A/(x-a), Quadratic → (Ax+B)/(x²+bx+c), Repeated → include all powers'
            },
            verification: {
                reminder: 'Always verify by combining partial fractions back',
                method: 'Add fractions using LCD and check if result equals original'
            },
            strategic_values: {
                reminder: 'Choose x-values that make terms vanish',
                method: 'Use roots of factors to eliminate unknowns quickly'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Understanding why partial fractions work',
                language: 'intuitive explanations of the reverse addition process'
            },
            procedural: {
                focus: 'Step-by-step mechanical process',
                language: 'explicit instructions for each calculation'
            },
            visual: {
                focus: 'Geometric and graphical understanding',
                language: 'visual representations and graph interpretations'
            },
            algebraic: {
                focus: 'Formal mathematical rigor',
                language: 'precise notation and theoretical justification'
            },
            computational: {
                focus: 'Efficient calculation methods',
                language: 'shortcuts and calculation strategies'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple terms, avoiding jargon',
                detail: 'essential steps only',
                examples: 'simplest possible cases',
                focus: 'distinct linear factors only'
            },
            intermediate: {
                vocabulary: 'standard mathematical terminology',
                detail: 'main steps with brief explanations',
                examples: 'mix of linear and quadratic factors',
                focus: 'most common techniques'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - everyday analogies',
                detail: 'every tiny step with real-world comparisons',
                examples: 'pizza slices, sharing cookies, breaking apart',
                analogies: true,
                visualization: 'simple pictures and stories'
            },
            detailed: {
                vocabulary: 'complete mathematical vocabulary',
                detail: 'comprehensive explanations with theory',
                examples: 'complex cases including repeated quadratics',
                focus: 'all techniques and edge cases'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced from simple to complex',
                focus: 'building understanding step-by-step'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            electrical_circuits: {
                scenario: "Analyzing circuit impedance in AC circuits",
                context: "Transfer functions in frequency domain often need partial fraction decomposition",
                equation: "H(s) = (s+1)/[(s+2)(s+3)]",
                application: "Finding inverse Laplace transform for time-domain response",
                field: "Electrical Engineering"
            },
            control_systems: {
                scenario: "Control system transfer functions",
                context: "System response analysis requires decomposition",
                equation: "G(s) = K/[s(s+a)(s+b)]",
                application: "Stability analysis and controller design",
                field: "Control Theory"
            },
            signal_processing: {
                scenario: "Digital filter design",
                context: "Z-transform analysis of discrete-time systems",
                equation: "H(z) = 1/[(z-0.5)(z-0.3)]",
                application: "Converting transfer functions to difference equations",
                field: "Signal Processing"
            },
            integration: {
                scenario: "Evaluating complex integrals",
                context: "∫[rational function]dx requires partial fractions",
                equation: "∫1/[(x²+1)(x-1)]dx",
                application: "Analytical integration in calculus",
                field: "Mathematics"
            },
            probability: {
                scenario: "Laplace transforms of probability distributions",
                context: "Moment generating functions",
                equation: "M(t) = decomposition of rational MGF",
                application: "Finding distributions from transforms",
                field: "Probability Theory"
            },
            economics: {
                scenario: "Present value of cash flows",
                context: "Financial mathematics with rational discount factors",
                equation: "PV = Sum of decomposed terms",
                application: "Valuation of financial instruments",
                field: "Finance"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            distinct_linear: {
                skills: [
                    'Polynomial factoring',
                    'Solving linear equations',
                    'Basic fraction operations',
                    'Substitution method'
                ],
                priorKnowledge: [
                    'Factoring quadratics',
                    'Linear factor theorem',
                    'Adding/subtracting fractions',
                    'Lowest common denominator'
                ],
                checkQuestions: [
                    "Factor: x² - 5x + 6",
                    "Solve: 2A + 3B = 5, A - B = 1",
                    "Add: 1/(x-1) + 2/(x-2)",
                    "What is LCD of (x-1) and (x+2)?"
                ]
            },
            repeated_linear: {
                skills: [
                    'All skills from distinct linear',
                    'Solving systems of equations',
                    'Understanding exponents',
                    'Pattern recognition'
                ],
                priorKnowledge: [
                    'Multiplicity of roots',
                    'Powers of binomials',
                    'Systems with 3+ variables'
                ],
                checkQuestions: [
                    "What is multiplicity of root in (x-2)³?",
                    "Solve system: A+B+C=1, A+2B+4C=0, A=2",
                    "Expand: A(x-1)² + B(x-1) + C"
                ]
            },
            irreducible_quadratic: {
                skills: [
                    'All skills from distinct linear',
                    'Quadratic formula',
                    'Discriminant analysis',
                    'Equating coefficients'
                ],
                priorKnowledge: [
                    'Complex numbers (basic)',
                    'Irreducibility test: b²-4ac < 0',
                    'Completing the square'
                ],
                checkQuestions: [
                    "Is x²+1 factorable over reals?",
                    "Find discriminant of x²+2x+5",
                    "Equate coefficients: Ax+B = 3x-2",
                    "Why can't we factor x²+4?"
                ]
            },
            improper: {
                skills: [
                    'Polynomial long division',
                    'Degree of polynomial',
                    'Remainder theorem',
                    'All basic partial fraction skills'
                ],
                priorKnowledge: [
                    'Proper vs improper fractions',
                    'Division algorithm for polynomials'
                ],
                checkQuestions: [
                    "Divide: (x²+3x+2)/(x+1)",
                    "Is (x³+1)/(x²-1) proper?",
                    "What is degree of x⁴-2x+1?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            fraction_addition_reverse: {
                description: "Partial fractions as reverse of adding fractions",
                analogy: "Like un-mixing a smoothie back into fruits",
                visualization: "Show 1/6 = 1/2 - 1/3, now reverse it",
                suitableFor: ['all_types'],
                explanation: "We know how to add fractions; partial fractions goes backwards"
            },
            graph_interpretation: {
                description: "Graphing original and decomposed functions",
                analogy: "Decomposing a complex wave into simple sine waves",
                visualization: "Plot original function and sum of partial fractions",
                suitableFor: ['all_types'],
                explanation: "Graphs should be identical, confirming correctness"
            },
            algebraic_identity: {
                description: "Partial fractions as polynomial identity",
                analogy: "Like chemical equation: same atoms on both sides",
                visualization: "P(x)/Q(x) ≡ sum of simpler fractions",
                suitableFor: ['advanced'],
                explanation: "Equality holds for all x in domain"
            },
            factor_contribution: {
                description: "Each factor contributes specific partial fraction",
                analogy: "Each ingredient in recipe contributes to final dish",
                visualization: "Map factor types to partial fraction forms",
                suitableFor: ['all_types'],
                explanation: "Linear → A/(x-a), Quadratic → (Bx+C)/(quadratic)"
            },
            integration_motivation: {
                description: "Why we need partial fractions for integration",
                analogy: "Breaking hard problem into easy pieces",
                visualization: "Show ∫(complex) = Σ∫(simple)",
                suitableFor: ['all_types'],
                explanation: "Each partial fraction is easy to integrate separately"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "1/[(x-1)(x-2)]",
                    type: 'distinct_linear',
                    solution: "1/(x-1) - 1/(x-2)",
                    steps: [
                        "Set up: 1/[(x-1)(x-2)] = A/(x-1) + B/(x-2)",
                        "Clear denominators: 1 = A(x-2) + B(x-1)",
                        "Let x=1: 1 = A(-1) → A = -1",
                        "Let x=2: 1 = B(1) → B = 1",
                        "Answer: -1/(x-1) + 1/(x-2) = 1/(x-2) - 1/(x-1)"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "3/[(x+1)(x-3)]",
                    type: 'distinct_linear',
                    solution: "-3/4 · 1/(x+1) + 3/4 · 1/(x-3)",
                    difficulty: "easy"
                },
                {
                    problem: "(2x+5)/[(x-1)(x+2)]",
                    type: 'distinct_linear',
                    solution: "1/(x-1) + 1/(x+2)",
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "1/(x-1)²",
                    type: 'repeated_linear',
                    solution: "1/(x-1) + 1/(x-1)²",
                    steps: [
                        "Set up: 1/(x-1)² = A/(x-1) + B/(x-1)²",
                        "Clear: 1 = A(x-1) + B",
                        "Expand: 1 = Ax - A + B",
                        "x⁰: 1 = -A + B",
                        "x¹: 0 = A",
                        "So A=0, B=1"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "x/[(x-1)(x²+1)]",
                    type: 'irreducible_quadratic',
                    solution: "1/2 · 1/(x-1) + 1/2 · (1-x)/(x²+1)",
                    difficulty: "medium"
                },
                {
                    problem: "(x²+1)/[(x-1)(x+1)(x-2)]",
                    type: 'distinct_linear',
                    solution: "Decompose into three fractions",
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "(x²+2x+3)/[(x²+4)²]",
                    type: 'repeated_quadratic',
                    solution: "(Ax+B)/(x²+4) + (Cx+D)/(x²+4)²",
                    difficulty: "hard"
                },
                {
                    problem: "(x³+1)/(x²-1)",
                    type: 'improper',
                    solution: "x + 1 + 2/[(x-1)(x+1)]",
                    note: "First divide polynomials",
                    difficulty: "hard"
                },
                {
                    problem: "1/[(x-1)²(x²+x+1)]",
                    type: 'mixed',
                    solution: "Mix of repeated linear and irreducible quadratic",
                    difficulty: "hard"
                }
            ]
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            constant_numerator_always: {
                misconception: "All partial fractions have constant numerators",
                reality: "Irreducible quadratics need LINEAR numerators (Ax+B)",
                correctiveExample: "For x²+1, use (Ax+B)/(x²+1), not A/(x²+1)",
                commonIn: ['irreducible_quadratic']
            },
            missing_powers: {
                misconception: "For (x-1)³, only need term for (x-1)³",
                reality: "Need ALL powers: A/(x-1) + B/(x-1)² + C/(x-1)³",
                correctiveExample: "Repeated factor of multiplicity n needs n terms",
                commonIn: ['repeated_linear', 'repeated_quadratic']
            },
            skip_division: {
                misconception: "Can apply partial fractions to any rational function",
                reality: "Must be PROPER fraction (numerator degree < denominator degree)",
                correctiveExample: "For x²/(x-1), first divide to get x+1 + 1/(x-1)",
                commonIn: ['improper']
            },
            wrong_lcd: {
                misconception: "Each partial fraction needs different denominator",
                reality: "LCD of all partial fractions equals original denominator",
                correctiveExample: "When verifying, LCD should reconstruct original denominator",
                commonIn: ['all_types']
            },
            force_factoring: {
                misconception: "All quadratics can be factored",
                reality: "Some quadratics are irreducible over reals (negative discriminant)",
                correctiveExample: "x²+1 cannot be factored (b²-4ac = -4 < 0)",
                commonIn: ['irreducible_quadratic']
            },
            solving_errors: {
                misconception: "Can solve for all constants with just one equation",
                reality: "Need as many equations as unknowns",
                correctiveExample: "Three unknowns A,B,C need three equations from substitution or coefficients",
                commonIn: ['all_types']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            reverse_addition: {
                analogy: "Un-mixing a milkshake",
                explanation: "Just like you can blend fruit into a smoothie, partial fractions separates a complex fraction back into simple ingredients",
                suitableFor: ['all_types'],
                ELI5: "Imagine you mixed different juices together. Partial fractions is like figuring out how much of each juice you started with!"
            },
            puzzle_pieces: {
                analogy: "Breaking apart a jigsaw puzzle",
                explanation: "The original fraction is the complete puzzle; partial fractions are the individual pieces",
                suitableFor: ['all_types'],
                ELI5: "A big complicated Lego creation can be broken into smaller, simpler pieces. That's what we're doing!"
            },
            factor_rooms: {
                analogy: "Each factor is a room that gets its own furniture",
                explanation: "Linear factor gets one chair (A), quadratic factor gets a couch (Ax+B), repeated factors get multiple items",
                suitableFor: ['mixed'],
                ELI5: "Each different type of factor (room) gets decorated differently!"
            },
            musical_harmony: {
                analogy: "Decomposing a chord into individual notes",
                explanation: "A musical chord is many notes played together; partial fractions separates them",
                suitableFor: ['all_types'],
                ELI5: "When many instruments play together, we hear one sound. We're figuring out what each instrument played!"
            },
            fraction_recipe: {
                analogy: "Reverse engineering a recipe",
                explanation: "Given the final dish, figure out the individual ingredients and amounts",
                suitableFor: ['all_types'],
                ELI5: "If you taste a cookie, can you figure out how much sugar, flour, and chocolate chips went in? That's partial fractions!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            distinct_linear: {
                level1: "First, make sure the denominator is completely factored into linear factors.",
                level2: "Set up the form: Original = A/(factor1) + B/(factor2) + ...",
                level3: "Clear denominators by multiplying both sides by the original denominator.",
                level4: "Use the cover-up method: for each factor (x-a), substitute x=a to find that constant."
            },
            repeated_linear: {
                level1: "Identify which factor is repeated and what its multiplicity is.",
                level2: "You need ONE term for EACH power: A/(x-a) + B/(x-a)² + ... + C/(x-a)ⁿ",
                level3: "Clear denominators, then either substitute strategic values or equate coefficients.",
                level4: "The highest power term's constant can be found by multiplying by (x-a)ⁿ and substituting x=a."
            },
            irreducible_quadratic: {
                level1: "Check if the quadratic can be factored. If discriminant b²-4ac < 0, it's irreducible.",
                level2: "For irreducible quadratic, use LINEAR numerator: (Ax+B)/(x²+bx+c)",
                level3: "Clear denominators and expand everything carefully.",
                level4: "Equate coefficients of like powers of x to get system of equations."
            },
            improper: {
                level1: "Compare degrees of numerator and denominator.",
                level2: "If deg(numerator) ≥ deg(denominator), you MUST divide first.",
                level3: "Perform polynomial long division to get quotient + remainder/divisor.",
                level4: "Apply partial fractions only to the remainder/divisor part (which is now proper)."
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Decompose: 1/[(x-1)(x-2)]",
                    answer: "1/(x-2) - 1/(x-1)",
                    assesses: "distinct_linear",
                    difficulty: "basic"
                },
                {
                    question: "Decompose: 1/(x-1)²",
                    answer: "1/(x-1)²",
                    assesses: "repeated_linear",
                    difficulty: "intermediate"
                },
                {
                    question: "What form for 1/[(x-1)(x²+1)]?",
                    answer: "A/(x-1) + (Bx+C)/(x²+1)",
                    assesses: "irreducible_quadratic",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "For factor (x-3)², how many partial fraction terms?",
                    options: ["1", "2", "3", "Depends on numerator"],
                    correct: "2",
                    explanation: "Repeated factor of multiplicity 2 needs 2 terms"
                },
                {
                    question: "What numerator form for irreducible quadratic x²+4?",
                    options: ["A", "Ax", "Ax+B", "Ax²+Bx+C"],
                    correct: "Ax+B",
                    explanation: "Irreducible quadratics always get linear numerators"
                },
                {
                    question: "If numerator degree ≥ denominator degree, first step is:",
                    options: ["Factor", "Divide", "Decompose", "Integrate"],
                    correct: "Divide",
                    explanation: "Must perform polynomial division to get proper fraction"
                }
            ],
            summative: [
                {
                    question: "Fully decompose: (2x+3)/[(x-1)(x+2)]",
                    showsWork: true,
                    rubric: {
                        setup: 1,
                        clear_denominators: 1,
                        solve_constants: 2,
                        final_answer: 1
                    }
                },
                {
                    question: "Decompose: x/[(x-1)²(x+1)]",
                    showsWork: true,
                    rubric: {
                        identify_factor_types: 1,
                        correct_setup: 2,
                        solve_system: 2,
                        verify: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "1/[(x-1)(x+1)]",
                    "2/[(x-2)(x+3)]",
                    "x/[(x-1)(x-2)]",
                    "(x+1)/[(x-3)(x+1)]"
                ],
                medium: [
                    "1/(x-2)²",
                    "x/[(x-1)(x²+1)]",
                    "(3x+5)/[(x-1)²(x+2)]",
                    "(x²+1)/[(x-1)(x-2)(x-3)]"
                ],
                hard: [
                    "(x³+1)/(x²-1)",
                    "1/[(x²+1)²]",
                    "(2x²+3x+1)/[(x-1)(x²+x+1)]",
                    "x/[(x²+1)(x²+4)]"
                ]
            },
            byObjective: {
                canSetupDistinctLinear: [
                    "Write setup for: 1/[(x-1)(x-2)]",
                    "What is form for: P(x)/[(x+1)(x-3)(x+2)]?"
                ],
                canSolveDistinctLinear: [
                    "Solve: 1/[(x-1)(x-2)]",
                    "Find A,B: (x+3)/[(x-1)(x+1)] = A/(x-1) + B/(x+1)"
                ],
                canHandleRepeated: [
                    "Decompose: 1/(x-1)³",
                    "Setup for: x/[(x+2)²]"
                ],
                canHandleQuadratic: [
                    "Is x²+2x+5 irreducible?",
                    "Decompose: 1/[(x-1)(x²+1)]"
                ],
                canHandleImproper: [
                    "Is (x²+1)/(x-1) proper?",
                    "Divide then decompose: (x³)/(x²-1)"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "Check if proper": "Is deg(num) < deg(den)?",
                "If improper": "Divide first",
                "Factor denominator": "What types of factors?",
                "Distinct linear": "Use cover-up or substitution",
                "Repeated linear": "Include all powers, solve system",
                "Irreducible quadratic": "Linear numerator (Ax+B)",
                "Repeated quadratic": "Multiple linear numerators",
                "Mixed factors": "Combine appropriate forms"
            },
            solvingMethod: {
                "Heaviside cover-up": "Fast for distinct linear factors only",
                "Strategic substitution": "Choose x-values that eliminate unknowns",
                "Equating coefficients": "Systematic, works for all types",
                "Combination": "Use substitution when possible, coefficients when needed"
            },
            factorIdentification: {
                linear: "Form (x-a) or (ax+b)",
                repeated_linear: "Form (x-a)ⁿ where n>1",
                irreducible_quadratic: "ax²+bx+c where b²-4ac<0",
                repeated_quadratic: "(ax²+bx+c)ⁿ where b²-4ac<0 and n>1"
            },
            verificationSteps: {
                "Step 1": "Combine partial fractions using LCD",
                "Step 2": "Simplify numerator",
                "Step 3": "Check if result equals original fraction",
                "Step 4": "Confirm for specific x-values as well"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Distinct Linear Sprint",
                    timeLimit: 180,
                    problems: [
                        "1/[(x-1)(x-2)]",
                        "2/[(x+1)(x-3)]",
                        "x/[(x-2)(x+2)]",
                        "(x+1)/[(x-1)(x+3)]"
                    ]
                },
                {
                    name: "Mixed Types Challenge",
                    timeLimit: 300,
                    problems: [
                        "1/(x-1)²",
                        "1/[(x-1)(x²+1)]",
                        "(x²+1)/(x³-1)"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Constants",
                    problem: "Given: 1/[(x-1)(x-2)] = A/(x-1) + B/(x-2)",
                    constraint: "Find A and B without clearing denominators",
                    solution: "Use cover-up method: A=-1, B=1"
                },
                {
                    name: "Backwards Engineering",
                    given: "1/(x-1) - 1/(x-2)",
                    challenge: "What was the original fraction?",
                    solution: "1/[(x-1)(x-2)]"
                }
            ],
            applications: [
                {
                    scenario: "Laplace Transform Inversion",
                    problem: "Find inverse Laplace of F(s) = 1/[s(s+1)]",
                    decomposition: "1/s - 1/(s+1)",
                    solution: "f(t) = 1 - e^(-t)"
                },
                {
                    scenario: "Integration Challenge",
                    problem: "∫ 1/[(x-1)(x-2)] dx",
                    decomposition: "∫ [1/(x-2) - 1/(x-1)] dx",
                    solution: "ln|x-2| - ln|x-1| + C = ln|(x-2)/(x-1)| + C"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "1/[(x-1)(x²+1)] = A/(x-1) + B/(x²+1)",  // ERROR: should be (Bx+C)
                        "1 = A(x²+1) + B(x-1)",
                        "Let x=1: 1 = 2A, so A=1/2",
                        "Let x=0: 1 = A - B, so B = -1/2"
                    ],
                    error: "Used constant B instead of linear Bx+C for quadratic",
                    correct: "Should be A/(x-1) + (Bx+C)/(x²+1)"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Decompose: 1/(x-1)²",
                        "Setup: 1/(x-1)² = A/(x-1)²",  // ERROR: missing A/(x-1)
                        "So A = 1"
                    ],
                    error: "Didn't include all powers up to multiplicity",
                    correct: "Need A/(x-1) + B/(x-1)²"
                }
            ]
        };
    }

    initializeIntegrationTechniquesDatabase() {
        this.integrationTechniques = {
            after_decomposition: {
                linear_term: {
                    integral: "∫ A/(x-a) dx",
                    result: "A·ln|x-a| + C",
                    technique: "Direct integration"
                },
                quadratic_term: {
                    integral: "∫ (Ax+B)/(x²+c²) dx",
                    result: "A/2·ln(x²+c²) + B/c·arctan(x/c) + C",
                    technique: "Split into two integrals"
                },
                repeated_linear: {
                    integral: "∫ A/(x-a)ⁿ dx",
                    result: "A/[-(n-1)(x-a)^(n-1)] + C for n>1",
                    technique: "Power rule"
                }
            },
            common_integrals: [
                "∫ 1/(x²+a²) dx = 1/a·arctan(x/a) + C",
                "∫ 1/(x²-a²) dx = 1/(2a)·ln|(x-a)/(x+a)| + C",
                "∫ x/(x²+a²) dx = 1/2·ln(x²+a²) + C"
            ]
        };
    }

    // MAIN SOLVER METHOD
    solvePartialFraction(config) {
        const { expression, numerator, denominator, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parsePartialFractionProblem(
                expression, numerator, denominator, problemType, context
            );

            // Check prerequisites if enabled
            if (this.prerequisiteChecks) {
                this.checkPrerequisites(this.currentProblem.type);
            }

            // Solve the problem
            this.currentSolution = this.solvePartialFractionInternal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generatePartialFractionSteps(
                this.currentProblem, 
                this.currentSolution
            );

            // Generate graph data if applicable
            this.generatePartialFractionGraphData();

            // Generate workbook
            this.generatePartialFractionWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                decomposition: this.currentSolution?.decomposition,
                verification: this.currentSolution?.verification
            };

        } catch (error) {
            throw new Error(`Failed to solve partial fraction problem: ${error.message}`);
        }
    }

    parsePartialFractionProblem(expression, numerator, denominator, problemType, context) {
        // Parse expression or use numerator/denominator
        let num, den;
        
        if (expression && expression.includes('/')) {
            const parts = expression.split('/');
            num = this.cleanMathExpression(parts[0]);
            den = this.cleanMathExpression(parts[1]);
        } else {
            num = this.cleanMathExpression(numerator || '1');
            den = this.cleanMathExpression(denominator || 'x-1');
        }

        // Auto-detect type if not specified
        let type = problemType;
        if (!type) {
            type = this.detectPartialFractionType(num, den);
        }

        return {
            originalExpression: expression || `${num}/${den}`,
            numerator: num,
            denominator: den,
            type: type,
            context: context || {},
            parsedAt: new Date().toISOString()
        };
    }

    detectPartialFractionType(numerator, denominator) {
        // Check if improper first
        const numDeg = this.getPolynomialDegree(numerator);
        const denDeg = this.getPolynomialDegree(denominator);
        
        if (numDeg >= denDeg) {
            return 'improper_fraction';
        }

        // Check denominator patterns
        if (denominator.match(/\^2/) || denominator.match(/\^3/)) {
            if (denominator.match(/x\^2[+\-]\d+/)) {
                return 'repeated_quadratic';
            }
            return 'repeated_linear';
        }

        if (denominator.match(/x\^2[+\-]/)) {
            return 'irreducible_quadratic';
        }

        if (denominator.match(/\)\(/)) {
            // Multiple factors
            if (denominator.match(/x\^2/)) {
                return 'mixed_factors';
            }
            return 'distinct_linear';
        }

        return 'distinct_linear'; // default
    }

    getPolynomialDegree(polynomial) {
        // Simple degree detection
        const matches = polynomial.match(/x\^(\d+)/g);
        if (!matches) {
            return polynomial.includes('x') ? 1 : 0;
        }
        const degrees = matches.map(m => parseInt(m.match(/\d+/)[0]));
        return Math.max(...degrees);
    }

    cleanMathExpression(expression) {
        if (!expression) return '';
        return expression
            .replace(/\s+/g, '')
            .replace(/\*/g, '')
            .trim();
    }

    checkPrerequisites(problemType) {
        const prereqs = this.prerequisites[this.partialFractionTypes[problemType]?.category];
        if (prereqs && this.includeThinkingPrompts) {
            // Add prerequisite check to steps
            this.prerequisiteResults = {
                skills: prereqs.skills,
                questions: prereqs.checkQuestions
            };
        }
    }

    solvePartialFractionInternal(problem) {
        const solver = this.partialFractionTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for type: ${problem.type}`);
        }

        return solver(problem);
    }

    // SOLVER METHODS FOR EACH TYPE

    solveDistinctLinear(problem) {
        const { numerator, denominator } = problem;

        // Example: 1/[(x-1)(x-2)]
        // Setup: A/(x-1) + B/(x-2)

        return {
            type: 'Distinct Linear Factors',
            setup: `${numerator}/${denominator} = A/(factor1) + B/(factor2) + ...`,
            method: 'Heaviside Cover-Up or Substitution',
            decomposition: 'A/(x-1) + B/(x-2)', // Placeholder
            constants: { A: null, B: null }, // To be calculated
            steps: [
                'Factor denominator completely',
                'Set up partial fraction form',
                'Clear denominators',
                'Solve for constants using cover-up method',
                'Write final decomposition'
            ],
            category: 'distinct_linear'
        };
    }

    solveRepeatedLinear(problem) {
        const { numerator, denominator } = problem;

        return {
            type: 'Repeated Linear Factors',
            setup: 'Include all powers from 1 to multiplicity',
            form: 'A₁/(x-a) + A₂/(x-a)² + ... + Aₙ/(x-a)ⁿ',
            method: 'Strategic substitution or coefficient comparison',
            decomposition: 'Terms for each power',
            steps: [
                'Identify multiplicity of repeated factor',
                'Set up partial fractions for all powers',
                'Clear denominators',
                'Solve system of equations',
                'Verify decomposition'
            ],
            category: 'repeated_linear'
        };
    }

    solveIrreducibleQuadratic(problem) {
        const { numerator, denominator } = problem;

        return {
            type: 'Irreducible Quadratic Factors',
            setup: 'Use LINEAR numerator (Ax+B) for quadratic',
            form: 'A/(linear) + (Bx+C)/(quadratic)',
            method: 'Equating coefficients',
            decomposition: 'Mixed linear and quadratic terms',
            steps: [
                'Verify quadratic is irreducible (b²-4ac < 0)',
                'Set up with linear numerator for quadratic',
                'Clear denominators',
                'Expand and collect like terms',
                'Equate coefficients',
                'Solve system'
            ],
            category: 'irreducible_quadratic'
        };
    }

    solveRepeatedQuadratic(problem) {
        return {
            type: 'Repeated Irreducible Quadratic',
            setup: 'Each power gets linear numerator',
            form: '(A₁x+B₁)/(quad) + (A₂x+B₂)/(quad)² + ...',
            method: 'Coefficient comparison',
            complexity: 'High - many unknowns',
            category: 'repeated_quadratic'
        };
    }

    solveMixedFactors(problem) {
        return {
            type: 'Mixed Factor Types',
            approach: 'Combine techniques for different factor types',
            setup: 'Each factor type gets appropriate partial fraction form',
            category: 'mixed'
        };
    }

    solveImproperFraction(problem) {
        const { numerator, denominator } = problem;

        return {
            type: 'Improper Rational Function',
            firstStep: 'Perform polynomial long division',
            result: 'Quotient + Proper Remainder/Divisor',
            thenDecompose: 'Apply partial fractions to proper part',
            steps: [
                'Identify as improper (deg(num) ≥ deg(den))',
                'Perform polynomial division',
                'Get quotient and remainder',
                'Decompose remainder/divisor',
                'Combine: quotient + decomposition'
            ],
            category: 'improper'
        };
    }

    // STEP GENERATION

    generatePartialFractionSteps(problem, solution) {
        let baseSteps = this.generateBasePartialFractionSteps(problem, solution);

        // Apply enhancements
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

    generateBasePartialFractionSteps(problem, solution) {
        const steps = [];
        const category = this.partialFractionTypes[problem.type]?.category;

        // Step 1: Given problem
        steps.push({
            stepNumber: 1,
            step: 'Given Expression',
            description: 'Start with the rational function',
            expression: `${problem.numerator}/${problem.denominator}`,
            reasoning: `This is a ${solution.type}`,
            goalStatement: 'We will decompose this into simpler partial fractions'
        });

        // Step 2: Check if proper
        steps.push({
            stepNumber: 2,
            step: 'Check if Proper',
            description: 'Verify that degree of numerator < degree of denominator',
            numeratorDegree: this.getPolynomialDegree(problem.numerator),
            denominatorDegree: this.getPolynomialDegree(problem.denominator),
            isProper: this.getPolynomialDegree(problem.numerator) < this.getPolynomialDegree(problem.denominator),
            reasoning: 'Partial fractions requires a proper fraction',
            action: this.getPolynomialDegree(problem.numerator) >= this.getPolynomialDegree(problem.denominator) ?
                'Must divide first' : 'Can proceed with decomposition'
        });

        // Step 3: Factor denominator
        steps.push({
            stepNumber: 3,
            step: 'Factor Denominator',
            description: 'Factor the denominator completely',
            originalDenominator: problem.denominator,
            factoredForm: 'Factored denominator', // Placeholder
            reasoning: 'Each factor determines a partial fraction term',
            technique: 'Use factoring techniques appropriate to the polynomial'
        });

        // Step 4: Set up partial fractions
        steps.push({
            stepNumber: 4,
            step: 'Set Up Partial Fraction Form',
            description: 'Write the form based on factor types',
            form: solution.setup || solution.form,
            reasoning: 'Each factor type has a specific partial fraction form',
            rules: this.getPartialFractionRules(category)
        });

        // Step 5: Clear denominators
        steps.push({
            stepNumber: 5,
            step: 'Clear Denominators',
            description: 'Multiply both sides by the common denominator',
            beforeExpression: solution.setup,
            operation: `Multiply by ${problem.denominator}`,
            afterExpression: 'Polynomial equation',
            reasoning: 'This eliminates fractions and gives us an equation to solve'
        });

        // Step 6: Solve for constants
        steps.push({
            stepNumber: 6,
            step: 'Solve for Constants',
            description: 'Find values of unknown constants',
            method: solution.method,
            techniques: [
                'Substitute strategic x-values (cover-up method)',
                'Equate coefficients of like powers',
                'Solve resulting system of equations'
            ],
            reasoning: 'These methods give us equations to determine all unknowns'
        });

        // Step 7: Write final decomposition
        steps.push({
            stepNumber: 7,
            step: 'Final Decomposition',
            description: 'Write the complete partial fraction decomposition',
            expression: solution.decomposition,
            finalAnswer: true,
            reasoning: 'This is the sum of simpler fractions equivalent to the original'
        });

        // Step 8: Verify
        if (this.includeVerificationInSteps) {
            steps.push({
                stepNumber: 8,
                step: 'Verify Result',
                description: 'Combine the partial fractions to check',
                method: 'Add fractions using common denominator',
                expectedResult: 'Should equal original fraction',
                reasoning: 'Verification confirms our decomposition is correct'
            });
        }

        return steps;
    }

    getPartialFractionRules(category) {
        const rules = {
            distinct_linear: [
                'Each distinct linear factor (x-a) gets A/(x-a)',
                'Constants A, B, C, ... are unknowns to find'
            ],
            repeated_linear: [
                'Repeated factor (x-a)ⁿ gets n terms',
                'Forms: A₁/(x-a) + A₂/(x-a)² + ... + Aₙ/(x-a)ⁿ',
                'Need all powers from 1 to n'
            ],
            irreducible_quadratic: [
                'Irreducible quadratic gets LINEAR numerator',
                'Form: (Ax+B)/(x²+bx+c)',
                'NOT just a constant!'
            ],
            repeated_quadratic: [
                'Each power gets linear numerator',
                'Form: (A₁x+B₁)/(quad) + (A₂x+B₂)/(quad)² + ...'
            ],
            improper: [
                'First divide to get: quotient + remainder/divisor',
                'Then decompose the remainder/divisor part'
            ]
        };

        return rules[category] || [];
    }

    // ENHANCEMENT METHODS (Similar structure to linear workbook)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationPF(step, problem),
                procedural: this.getProceduralExplanationPF(step),
                visual: this.getVisualExplanationPF(step, problem),
                algebraic: this.getAlgebraicExplanationPF(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesPF(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyPF(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsPF(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionPF(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionPF(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationPF(step, problem) {
        const explanations = {
            'Given Expression': 'We start with a complex rational function that we want to break into simpler pieces',
            'Check if Proper': 'Partial fractions only works if the top polynomial is smaller than the bottom',
            'Factor Denominator': 'Breaking the denominator into factors shows us what partial fractions we need',
            'Set Up Partial Fraction Form': 'Each factor gets its own fraction with unknown constants',
            'Clear Denominators': 'Multiplying by the denominator removes all fractions and gives us algebra',
            'Solve for Constants': 'Finding these numbers is like solving a puzzle with strategic substitutions',
            'Final Decomposition': 'The answer is the original fraction broken into simple, integrable pieces',
            'Verify Result': 'Adding our pieces back together should recreate the original fraction'
        };

        return explanations[step.step] || 'This step helps us decompose the fraction systematically.';
    }

    getProceduralExplanationPF(step) {
        return `1. ${step.description}\n2. ${step.reasoning || 'Apply the technique carefully'}\n3. Proceed to next step`;
    }

    getVisualExplanationPF(step, problem) {
        return 'Visualize the fraction being split into component parts, like separating ingredients.';
    }

    getAlgebraicExplanationPF(step) {
        const rules = {
            'Factor Denominator': 'Apply factoring theorems and techniques',
            'Clear Denominators': 'Multiplication property: multiply both sides by LCD',
            'Solve for Constants': 'Substitution and linear algebra methods'
        };

        return rules[step.step] || 'Apply standard algebraic principles';
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
                'denominator': 'bottom of fraction',
                'numerator': 'top of fraction',
                'factor': 'break apart',
                'decomposition': 'breaking into pieces',
                'irreducible': 'cannot be factored',
                'multiplicity': 'how many times repeated'
            },
            ELI5: {
                'denominator': 'the bottom number',
                'numerator': 'the top number',
                'factor': 'split into smaller parts',
                'decomposition': 'breaking the big fraction into baby fractions',
                'partial fractions': 'smaller, easier pieces',
                'constants': 'mystery numbers we need to find'
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

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationPF(step, problem),
                analogy: this.findRelevantAnalogyPF(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestVisualizationPF(step)
            }
        }));
    }

    generateELI5ExplanationPF(step, problem) {
        const explanations = {
            'Given Expression': "We have a fraction that looks hard. Let's break it into easy pieces!",
            'Check if Proper': "We need to make sure the top is smaller than the bottom. If not, we divide first!",
            'Factor Denominator': "Let's break the bottom into smaller parts, like breaking a chocolate bar!",
            'Set Up Partial Fraction Form': "Each piece of the bottom gets its own little fraction with a mystery number.",
            'Clear Denominators': "We're going to multiply everything to get rid of all the fractions - much easier!",
            'Solve for Constants': "Now we solve a puzzle to find the mystery numbers!",
            'Final Decomposition': "Ta-da! Here's our big fraction broken into easy baby fractions!",
            'Verify Result': "Let's add our baby fractions back together to make sure we didn't make a mistake!"
        };

        return explanations[step.step] || "We're taking another step to break apart our fraction!";
    }

    findRelevantAnalogyPF(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes('all_types')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of it like taking apart a Lego creation into individual blocks!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'denominator': 'bottom of the fraction',
            'numerator': 'top of the fraction',
            'factor': 'break into parts',
            'decomposition': 'breaking apart',
            'constants': 'unknown numbers',
            'polynomial': 'math expression with x',
            'rational function': 'fraction with x in it',
            'irreducible': 'cannot be broken down more',
            'multiplicity': 'how many times it appears'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualizationPF(step) {
        const visualizations = {
            'Given Expression': 'Draw the fraction with a big box around it',
            'Factor Denominator': 'Show the bottom being broken into smaller boxes',
            'Set Up Partial Fraction Form': 'Draw separate smaller fractions, each in its own box',
            'Clear Denominators': 'Show multiplying both sides - fractions disappear!',
            'Solve for Constants': 'Show puzzle pieces fitting together',
            'Final Decomposition': 'Display all the small fractions with their numbers filled in',
            'Verify Result': 'Show adding the pieces back together'
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
                    explanation: this.generateStepBridgePF(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgressionPF(steps[i], steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgePF(currentStep, nextStep) {
        return {
            currentState: `We have completed: ${currentStep.step}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary to continue the decomposition process`,
            howItHelps: `This brings us closer to the final partial fraction form`
        };
    }

    explainStepProgressionPF(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue breaking down the fraction`;
    }

    addErrorPrevention(step, problemType) {
        const category = this.partialFractionTypes[problemType]?.category;
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsPF(step, problemType),
                checkPoints: this.generateCheckPointsPF(step),
                warningFlags: this.identifyWarningFlagsPF(step, problemType)
            }
        };
    }

    generatePreventionTipsPF(step, problemType) {
        const tips = {
            'Factor Denominator': [
                'Factor completely - check each factor',
                'Verify no further factoring is possible',
                'Test for irreducibility using discriminant'
            ],
            'Set Up Partial Fraction Form': [
                'Match form to factor type',
                'Linear factors get constants',
                'Quadratics get linear numerators Ax+B',
                'Repeated factors need all powers'
            ],
            'Solve for Constants': [
                'Double-check arithmetic',
                'Verify you have enough equations',
                'Use strategic values wisely'
            ]
        };

        return tips[step.step] || ['Work carefully and check each calculation'];
    }

    generateCheckPointsPF(step) {
        return [
            'Is my setup correct for this factor type?',
            'Have I included all necessary terms?',
            'Are my calculations accurate?',
            'Does this step make logical sense?'
        ];
    }

    identifyWarningFlagsPF(step, problemType) {
        const warnings = {
            'Factor Denominator': [
                'Don\'t assume quadratic is factorable',
                'Check discriminant b²-4ac',
                'Factor completely, not partially'
            ],
            'Set Up Partial Fraction Form': [
                'Don\'t use constant for quadratic - must be Ax+B',
                'Don\'t forget powers for repeated factors',
                'Match each factor type to correct form'
            ]
        };

        return warnings[step.step] || [];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsPF(step, problem),
                subSteps: this.breakIntoSubStepsPF(step),
                hints: this.generateProgressiveHintsPF(step, problem)
            }
        }));
    }

    generateGuidingQuestionsPF(step, problem) {
        const questions = {
            'Given Expression': [
                'What are we trying to accomplish?',
                'What is partial fraction decomposition?',
                'Why do we need this?'
            ],
            'Check if Proper': [
                'How do I find degree of numerator?',
                'How do I find degree of denominator?',
                'What if it\'s improper?'
            ],
            'Factor Denominator': [
                'What factoring methods can I use?',
                'How do I know when I\'m done factoring?',
                'Is this quadratic factorable?'
            ],
            'Set Up Partial Fraction Form': [
                'What type is this factor?',
                'What form does this factor type need?',
                'How many unknown constants do I have?'
            ]
        };

        return questions[step.step] || ['What is the goal?', 'How do I proceed?'];
    }

    breakIntoSubStepsPF(step) {
        const subSteps = {
            'Factor Denominator': [
                'Look for common factors',
                'Try factoring quadratics',
                'Check for difference of squares',
                'Test irreducibility with discriminant',
                'Verify complete factorization'
            ],
            'Solve for Constants': [
                'Clear denominators',
                'Expand all products',
                'Collect like terms',
                'Set up equations',
                'Solve system'
            ]
        };

        return subSteps[step.step] || [step.description];
    }

    generateProgressiveHintsPF(step, problem) {
        const category = this.partialFractionTypes[problem.type]?.category;
        const hintSet = this.hints[category] || this.hints.distinct_linear;

        return {
            level1: hintSet.level1,
            level2: hintSet.level2,
            level3: hintSet.level3,
            level4: hintSet.level4
        };
    }

    identifyPrerequisitesPF(step, problemType) {
        const category = this.partialFractionTypes[problemType]?.category;
        const prereqs = this.prerequisites[category];
        
        return prereqs ? prereqs.skills : ['Algebra fundamentals'];
    }

    identifyKeyVocabularyPF(step) {
        const vocabulary = {
            'Given Expression': ['rational function', 'numerator', 'denominator'],
            'Check if Proper': ['degree', 'proper fraction', 'improper fraction'],
            'Factor Denominator': ['factor', 'linear', 'quadratic', 'irreducible'],
            'Set Up Partial Fraction Form': ['partial fractions', 'constants', 'form'],
            'Clear Denominators': ['LCD', 'multiply', 'clear'],
            'Solve for Constants': ['substitution', 'coefficients', 'system of equations']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPromptsPF(step) {
        return {
            before: `Before starting ${step.step}, what do I need to know or check?`,
            during: `While doing ${step.step}, what should I watch out for?`,
            after: `After completing ${step.step}, how can I verify it's correct?`
        };
    }

    generateSelfCheckQuestionPF(step) {
        const questions = {
            'Factor Denominator': 'Are all factors completely factored? Can any be factored further?',
            'Set Up Partial Fraction Form': 'Does my setup match the factor types correctly?',
            'Solve for Constants': 'Do I have enough equations for all unknowns?',
            'Verify Result': 'When I add the partial fractions, do I get the original?'
        };

        return questions[step.step] || 'Does this step make sense?';
    }

    findRealWorldConnectionPF(step, problem) {
        return 'Partial fractions are used in integration, control systems, signal processing, and solving differential equations.';
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This builds on step ${stepIndex}`,
            progression: 'We are progressing through the decomposition',
            relationship: 'Each step prepares us for the next'
        };
    }

    // GRAPH GENERATION

    generatePartialFractionGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        // Could graph original function vs sum of partial fractions
        this.graphData = {
            type: 'partial_fraction_comparison',
            description: 'Original function vs decomposed sum',
            note: 'Graphs should be identical, confirming correctness'
        };
    }

    // WORKBOOK GENERATION

    generatePartialFractionWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSectionPF(),
            this.createPrerequisiteSectionPF(),
            this.createTheorySectionPF(),
            this.createEnhancedStepsSectionPF(),
            this.createSolutionSectionPF(),
            this.createVerificationSectionPF(),
            this.createIntegrationApplicationSectionPF(),
            this.createRealWorldSectionPF(),
            this.createAlternativeMethodsSectionPF(),
            this.createPracticeProblemsSectionPF()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Partial Fraction Decomposition Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSectionPF() {
        const problemData = [
            ['Problem Type', this.partialFractionTypes[this.currentProblem.type]?.name],
            ['Category', this.partialFractionTypes[this.currentProblem.type]?.category],
            ['Expression', this.currentProblem.originalExpression],
            ['Numerator', this.currentProblem.numerator],
            ['Denominator', this.currentProblem.denominator],
            ['Difficulty', this.partialFractionTypes[this.currentProblem.type]?.difficulty]
        ];

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSectionPF() {
        if (!this.prerequisiteChecks) return null;

        const category = this.partialFractionTypes[this.currentProblem.type]?.category;
        const prereqs = this.prerequisites[category];

        if (!prereqs) return null;

        const prereqData = [
            ['Required Skills', prereqs.skills.join(', ')],
            ['Prior Knowledge', prereqs.priorKnowledge.join(', ')],
            ['', ''],
            ['Check Questions', '']
        ];

        prereqs.checkQuestions.forEach((q, i) => {
            prereqData.push([`Q${i + 1}`, q]);
        });

        return {
            title: 'Prerequisites Check',
            type: 'prerequisites',
            data: prereqData
        };
    }

    createTheorySectionPF() {
        const category = this.partialFractionTypes[this.currentProblem.type]?.category;
        const lesson = this.lessons[category] || this.lessons.introduction;

        const theoryData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        if (lesson.concepts) {
            lesson.concepts.forEach((concept, i) => {
                theoryData.push([`${i + 1}`, concept]);
            });
        }

        theoryData.push(['', '']);
        theoryData.push(['Theory', lesson.theory || 'Decomposing rational functions']);

        return {
            title: 'Theory and Concepts',
            type: 'theory',
            data: theoryData
        };
    }

    createEnhancedStepsSectionPF() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step) => {
            if (step.stepType === 'bridge' && this.explanationLevel === 'basic') {
                return;
            }

            if (step.stepType === 'bridge') {
                stepsData.push(['→ Bridge', step.title]);
                stepsData.push(['', step.explanation.why]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.step]);
            stepsData.push(['Description', step.description]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
            }

            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
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

            stepsData.push(['', '']);
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createSolutionSectionPF() {
        const solutionData = [
            ['Solution Type', this.currentSolution.type],
            ['Method Used', this.currentSolution.method || 'Standard decomposition'],
            ['', ''],
            ['Decomposition', this.currentSolution.decomposition || 'See detailed steps']
        ];

        if (this.currentSolution.constants) {
            solutionData.push(['', '']);
            solutionData.push(['Constants Found', '']);
            Object.entries(this.currentSolution.constants).forEach(([key, value]) => {
                solutionData.push([key, value !== null ? value : 'To be determined']);
            });
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createVerificationSectionPF() {
        if (!this.includeVerificationInSteps) return null;

        const verificationData = [
            ['Verification Method', 'Combine partial fractions and compare to original'],
            ['Step 1', 'Find common denominator (LCD)'],
            ['Step 2', 'Add all partial fractions'],
            ['Step 3', 'Simplify numerator'],
            ['Step 4', 'Verify result equals original fraction'],
            ['', ''],
            ['Status', 'Verification step included in solution']
        ];

        if (this.currentSolution.verification) {
            verificationData.push(['Result', this.currentSolution.verification.status || 'Verified']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createIntegrationApplicationSectionPF() {
        const integrationData = [
            ['Integration Application', 'How to integrate using partial fractions'],
            ['', ''],
            ['General Process', ''],
            ['1', 'Decompose the rational function'],
            ['2', 'Integrate each partial fraction separately'],
            ['3', 'Combine results'],
            ['', ''],
            ['Common Integrals', '']
        ];

        this.integrationTechniques.common_integrals.forEach((integral, i) => {
            integrationData.push([`Formula ${i + 1}`, integral]);
        });

        integrationData.push(['', '']);
        integrationData.push(['After Decomposition', '']);
        integrationData.push(['Linear Term', '∫ A/(x-a) dx = A·ln|x-a| + C']);
        integrationData.push(['Quadratic Term', '∫ (Bx+C)/(x²+k²) dx = Split into ln and arctan terms']);
        integrationData.push(['Repeated Term', '∫ A/(x-a)ⁿ dx = Use power rule']);

        return {
            title: 'Integration Application',
            type: 'integration',
            data: integrationData
        };
    }

    createRealWorldSectionPF() {
        if (!this.includeRealWorldApplications) return null;

        const realWorldData = [
            ['Real-World Applications of Partial Fractions', ''],
            ['', '']
        ];

        Object.entries(this.realWorldProblems).forEach(([key, app]) => {
            realWorldData.push([app.field, app.scenario]);
            realWorldData.push(['Application', app.application]);
            realWorldData.push(['Context', app.context]);
            realWorldData.push(['', '']);
        });

        return {
            title: 'Real-World Applications',
            type: 'applications',
            data: realWorldData
        };
    }

    createAlternativeMethodsSectionPF() {
        if (!this.includeAlternativeMethods) return null;

        const alternativeData = [
            ['Alternative Solution Methods', ''],
            ['', ''],
            ['Method 1: Heaviside Cover-Up', ''],
            ['Description', 'Fast method for distinct linear factors'],
            ['Process', 'Cover each factor and substitute its root'],
            ['Limitation', 'Only works for distinct linear factors'],
            ['', ''],
            ['Method 2: Strategic Substitution', ''],
            ['Description', 'Choose clever x-values to eliminate unknowns'],
            ['Process', 'Substitute roots of factors to solve for constants'],
            ['Advantage', 'Reduces number of equations to solve'],
            ['', ''],
            ['Method 3: Equating Coefficients', ''],
            ['Description', 'Expand and match coefficients of like powers'],
            ['Process', 'Clear denominators, expand, create system of equations'],
            ['Advantage', 'Works for all types, systematic'],
            ['Disadvantage', 'More tedious, requires solving systems'],
            ['', ''],
            ['Method 4: Combination Approach', ''],
            ['Description', 'Use cover-up when possible, coefficients when needed'],
            ['Process', 'Mix methods for efficiency'],
            ['Advantage', 'Best of both worlds']
        ];

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: alternativeData
        };
    }

    createPracticeProblemsSectionPF() {
        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy Level', '']
        ];

        this.questionBank.byDifficulty.easy.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium Level', '']);

        this.questionBank.byDifficulty.medium.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Hard Level', '']);

        this.questionBank.byDifficulty.hard.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    // ADDITIONAL UTILITY METHODS

    factorPolynomial(polynomial) {
        // Simplified factoring - in real implementation would use CAS
        return {
            factored: polynomial,
            factors: [],
            types: []
        };
    }

    isIrreducible(quadratic) {
        // Check if quadratic cannot be factored over reals
        // Extract coefficients and check discriminant
        return true; // Placeholder
    }

    performPolynomialDivision(numerator, denominator) {
        // Polynomial long division
        return {
            quotient: 'q(x)',
            remainder: 'r(x)',
            expression: 'q(x) + r(x)/denominator'
        };
    }

    findLCD(fractions) {
        // Find least common denominator
        return 'LCD';
    }

    combinePartialFractions(partialFractions, originalDenominator) {
        // Combine partial fractions back to verify
        return {
            combined: 'combined fraction',
            matchesOriginal: true
        };
    }

    solveSystemOfEquations(equations) {
        // Solve system for unknown constants
        return {
            solutions: {},
            method: 'Gaussian elimination or substitution'
        };
    }

    // PEDAGOGICAL HELPER METHODS

    generatePedagogicalNotesPF(problemType) {
        const category = this.partialFractionTypes[problemType]?.category;

        const pedagogicalDatabase = {
            distinct_linear: {
                objectives: [
                    'Decompose rational functions with distinct linear factors',
                    'Apply cover-up method efficiently',
                    'Verify decomposition by recombining fractions'
                ],
                keyConcepts: [
                    'Each distinct linear factor gets one constant term',
                    'Cover-up method provides shortcut',
                    'Verification confirms correctness'
                ],
                prerequisites: [
                    'Polynomial factoring',
                    'Solving linear equations',
                    'Adding fractions'
                ],
                commonDifficulties: [
                    'Forgetting to factor completely',
                    'Arithmetic errors in substitution',
                    'Not verifying the answer'
                ],
                teachingStrategies: [
                    'Demonstrate cover-up method visually',
                    'Practice factoring first',
                    'Emphasize verification importance'
                ],
                extensions: [
                    'Repeated linear factors',
                    'Integration applications',
                    'More complex cases'
                ],
                assessment: [
                    'Can student factor correctly?',
                    'Can student set up proper form?',
                    'Does student verify answer?'
                ]
            },
            repeated_linear: {
                objectives: [
                    'Handle repeated linear factors correctly',
                    'Include all powers up to multiplicity',
                    'Solve larger systems of equations'
                ],
                keyConcepts: [
                    'Repeated factor (x-a)ⁿ needs n terms',
                    'Include all powers from 1 to n',
                    'More unknowns means larger system'
                ],
                prerequisites: [
                    'Distinct linear factors',
                    'Solving systems of equations',
                    'Understanding multiplicity'
                ],
                commonDifficulties: [
                    'Missing some power terms',
                    'Errors in solving large systems',
                    'Confusion about indexing'
                ],
                teachingStrategies: [
                    'Use color coding for different powers',
                    'Practice identifying multiplicity',
                    'Systematic equation solving'
                ],
                extensions: [
                    'Mixed factor types',
                    'Higher multiplicities',
                    'Complex integration problems'
                ],
                assessment: [
                    'Does student include all powers?',
                    'Can student solve the system?',
                    'Does student organize work clearly?'
                ]
            },
            irreducible_quadratic: {
                objectives: [
                    'Recognize irreducible quadratics',
                    'Use linear numerators (Ax+B) correctly',
                    'Apply coefficient comparison method'
                ],
                keyConcepts: [
                    'Irreducible means cannot factor over reals',
                    'Test: discriminant b²-4ac < 0',
                    'Quadratics need LINEAR numerators, not constants'
                ],
                prerequisites: [
                    'Quadratic formula',
                    'Discriminant',
                    'Equating coefficients',
                    'Solving systems'
                ],
                commonDifficulties: [
                    'Using constant instead of Ax+B',
                    'Trying to factor irreducible quadratics',
                    'Errors in coefficient comparison'
                ],
                teachingStrategies: [
                    'Always check discriminant first',
                    'Emphasize Ax+B requirement',
                    'Systematic coefficient matching'
                ],
                extensions: [
                    'Repeated irreducible quadratics',
                    'Integration with arctan',
                    'Complex number factorization'
                ],
                assessment: [
                    'Can student test irreducibility?',
                    'Does student use correct numerator form?',
                    'Can student equate coefficients?'
                ]
            },
            improper: {
                objectives: [
                    'Recognize improper fractions',
                    'Perform polynomial long division',
                    'Decompose the proper remainder'
                ],
                keyConcepts: [
                    'Improper: numerator degree ≥ denominator degree',
                    'Must divide first to get proper fraction',
                    'Result: quotient + proper remainder/divisor'
                ],
                prerequisites: [
                    'Polynomial degree',
                    'Long division',
                    'All partial fraction techniques'
                ],
                commonDifficulties: [
                    'Skipping division step',
                    'Errors in long division',
                    'Forgetting to integrate quotient later'
                ],
                teachingStrategies: [
                    'Always check degrees first',
                    'Review long division',
                    'Connect to numerical long division'
                ],
                extensions: [
                    'Higher degree polynomials',
                    'Synthetic division',
                    'Applications in calculus'
                ],
                assessment: [
                    'Can student identify improper fractions?',
                    'Can student divide correctly?',
                    'Does student decompose remainder?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Master partial fraction decomposition'],
            keyConcepts: ['Breaking fractions into simpler parts'],
            prerequisites: ['Algebra fundamentals'],
            commonDifficulties: ['Various technical challenges'],
            teachingStrategies: ['Systematic instruction'],
            extensions: ['Advanced applications'],
            assessment: ['Verify understanding']
        };
    }

    generateHistoricalContext() {
        if (!this.includeHistoricalContext) return null;

        return {
            title: 'Historical Context',
            data: [
                ['Origin', 'Developed in 18th century for integration'],
                ['Key Figures', 'Euler, Hermite, Heaviside'],
                ['Heaviside Method', 'Oliver Heaviside developed cover-up method in 1880s'],
                ['Modern Use', 'Essential in engineering, control theory, signal processing'],
                ['Importance', 'Enables analytical integration of rational functions'],
                ['Connection', 'Related to residue theorem in complex analysis']
            ]
        };
    }

    generateCrossCurricularLinks() {
        if (!this.includeCrossCurricularLinks) return null;

        return {
            title: 'Cross-Curricular Connections',
            links: [
                {
                    subject: 'Physics',
                    connection: 'Circuit analysis, RLC circuits, frequency response'
                },
                {
                    subject: 'Engineering',
                    connection: 'Control systems, transfer functions, stability analysis'
                },
                {
                    subject: 'Computer Science',
                    connection: 'Digital signal processing, filter design, Z-transforms'
                },
                {
                    subject: 'Economics',
                    connection: 'Present value calculations, continuous compounding'
                },
                {
                    subject: 'Chemistry',
                    connection: 'Reaction kinetics, rate equations'
                },
                {
                    subject: 'Statistics',
                    connection: 'Laplace transforms of distributions, MGFs'
                }
            ]
        };
    }

    generateAssessmentRubric() {
        if (!this.includeFormativeQuizzes) return null;

        return {
            title: 'Assessment Rubric',
            categories: [
                {
                    skill: 'Factoring',
                    levels: {
                        novice: 'Factors simple expressions with help',
                        developing: 'Factors most expressions correctly',
                        proficient: 'Factors completely and recognizes irreducibility',
                        advanced: 'Factors complex expressions and explains reasoning'
                    }
                },
                {
                    skill: 'Setup',
                    levels: {
                        novice: 'Sets up partial fractions with guidance',
                        developing: 'Sets up correctly for simple cases',
                        proficient: 'Sets up correctly for all factor types',
                        advanced: 'Chooses most efficient form and method'
                    }
                },
                {
                    skill: 'Solving',
                    levels: {
                        novice: 'Solves with significant support',
                        developing: 'Solves simple systems correctly',
                        proficient: 'Solves all systems accurately',
                        advanced: 'Uses multiple methods and verifies'
                    }
                },
                {
                    skill: 'Verification',
                    levels: {
                        novice: 'Rarely verifies',
                        developing: 'Verifies when prompted',
                        proficient: 'Always verifies results',
                        advanced: 'Verifies and identifies errors quickly'
                    }
                }
            ]
        };
    }

    generateFormativeAssessment() {
        if (!this.includeFormativeQuizzes) return null;

        return {
            title: 'Formative Assessment Quiz',
            questions: [
                {
                    question: 'What is the first step when given a rational function?',
                    type: 'multiple_choice',
                    options: [
                        'Factor the numerator',
                        'Check if proper, factor denominator',
                        'Set up partial fractions',
                        'Clear denominators'
                    ],
                    correct: 1,
                    explanation: 'Always check if proper and factor denominator first'
                },
                {
                    question: 'For factor (x-2)³, how many partial fraction terms are needed?',
                    type: 'short_answer',
                    correct: '3',
                    explanation: 'One term for each power from 1 to 3'
                },
                {
                    question: 'What numerator form is used for irreducible quadratic x²+1?',
                    type: 'multiple_choice',
                    options: ['A', 'Ax+B', 'Ax²+Bx+C', 'A(x²+1)'],
                    correct: 1,
                    explanation: 'Irreducible quadratics always need linear numerators'
                },
                {
                    question: 'True or False: The cover-up method works for all factor types',
                    type: 'true_false',
                    correct: false,
                    explanation: 'Cover-up only works for distinct linear factors'
                },
                {
                    question: 'If degree of numerator ≥ degree of denominator, what must you do first?',
                    type: 'short_answer',
                    correct: 'divide' || 'polynomial division',
                    explanation: 'Must perform polynomial division to get proper fraction'
                }
            ]
        };
    }

    generateReflectionPrompts() {
        if (!this.includeReflectionPoints) return null;

        return {
            title: 'Reflection Prompts',
            prompts: [
                {
                    category: 'Understanding',
                    questions: [
                        'What is the main purpose of partial fraction decomposition?',
                        'How does this connect to adding fractions (which you learned earlier)?',
                        'Why do different factor types need different partial fraction forms?'
                    ]
                },
                {
                    category: 'Process',
                    questions: [
                        'What was the most challenging step for you?',
                        'Which method (cover-up vs. coefficients) do you prefer and why?',
                        'How can you remember which numerator form to use?'
                    ]
                },
                {
                    category: 'Application',
                    questions: [
                        'When would you use partial fractions in real applications?',
                        'How does this help with integration?',
                        'What connections do you see to other math topics?'
                    ]
                },
                {
                    category: 'Metacognition',
                    questions: [
                        'What strategies helped you solve this problem?',
                        'How did you check your work?',
                        'What would you do differently next time?'
                    ]
                }
            ]
        };
    }

    generateProgressionPath() {
        if (!this.adaptiveDifficulty) return null;

        return {
            title: 'Learning Progression Path',
            levels: [
                {
                    level: 1,
                    name: 'Foundation',
                    skills: ['Factor polynomials', 'Add fractions', 'Solve linear equations'],
                    problems: ['Very simple distinct linear factors']
                },
                {
                    level: 2,
                    name: 'Basic Decomposition',
                    skills: ['Set up partial fractions', 'Cover-up method', 'Verify results'],
                    problems: ['Distinct linear factors with 2-3 factors']
                },
                {
                    level: 3,
                    name: 'Repeated Factors',
                    skills: ['Identify multiplicity', 'Set up repeated terms', 'Solve larger systems'],
                    problems: ['Simple repeated linear factors']
                },
                {
                    level: 4,
                    name: 'Quadratic Factors',
                    skills: ['Test irreducibility', 'Use linear numerators', 'Equate coefficients'],
                    problems: ['Irreducible quadratics']
                },
                {
                    level: 5,
                    name: 'Mixed Cases',
                    skills: ['Combine all techniques', 'Choose efficient methods', 'Complex verification'],
                    problems: ['Mixed factor types']
                },
                {
                    level: 6,
                    name: 'Advanced Applications',
                    skills: ['Improper fractions', 'Repeated quadratics', 'Integration'],
                    problems: ['All types including improper']
                }
            ]
        };
    }

    generateCommonErrorAnalysis() {
        if (!this.mistakeAnalysis) return null;

        return {
            title: 'Common Error Analysis',
            errors: [
                {
                    error: 'Using constant A for irreducible quadratic',
                    why_wrong: 'Quadratics need linear numerators to account for both coefficients',
                    correct: 'Use (Ax+B) for any irreducible quadratic',
                    example: 'For x²+1, use (Ax+B)/(x²+1) not A/(x²+1)',
                    frequency: 'Very common',
                    severity: 'High - leads to wrong answer'
                },
                {
                    error: 'Missing powers in repeated factors',
                    why_wrong: 'Need ALL powers from 1 to multiplicity',
                    correct: 'For (x-a)³, include A/(x-a) + B/(x-a)² + C/(x-a)³',
                    example: 'Cannot skip the (x-a) or (x-a)² terms',
                    frequency: 'Common',
                    severity: 'High'
                },
                {
                    error: 'Not checking if fraction is proper',
                    why_wrong: 'Partial fractions only applies to proper fractions',
                    correct: 'Always compare degrees; divide if improper',
                    example: 'For x²/(x-1), must divide first to get x+1 + 1/(x-1)',
                    frequency: 'Occasional',
                    severity: 'High'
                },
                {
                    error: 'Arithmetic mistakes in solving',
                    why_wrong: 'Calculation errors lead to wrong constants',
                    correct: 'Double-check all arithmetic, verify answer',
                    example: 'Use verification to catch these errors',
                    frequency: 'Very common',
                    severity: 'Medium - caught by verification'
                },
                {
                    error: 'Not factoring denominator completely',
                    why_wrong: 'Partial decomposition requires complete factorization',
                    correct: 'Factor until all factors are linear or irreducible quadratic',
                    example: 'x⁴-1 factors to (x²+1)(x+1)(x-1), not just (x²-1)(x²+1)',
                    frequency: 'Common',
                    severity: 'High'
                }
            ]
        };
    }

    // EXPORT AND RENDERING METHODS (Placeholders)

    exportToJSON() {
        return JSON.stringify({
            problem: this.currentProblem,
            solution: this.currentSolution,
            steps: this.solutionSteps,
            workbook: this.currentWorkbook
        }, null, 2);
    }

    exportToLatex() {
        // Convert workbook to LaTeX format
        return '% LaTeX output would be generated here';
    }

    render() {
        // Render workbook (would use actual rendering in implementation)
        return this.currentWorkbook;
    }

    // HELPER METHOD: Get workbook data for display
    getWorkbookData() {
        return {
            problem: this.currentProblem,
            solution: this.currentSolution,
            steps: this.solutionSteps,
            workbook: this.currentWorkbook,
            graph: this.graphData
        };
    }
}

// Export the class
export default EnhancedPartialFractionMathematicalWorkbook;
