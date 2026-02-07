// Enhanced Operations with Rational Expressions Mathematical Workbook
import * as math from 'mathjs';

export class EnhancedRationalExpressionsWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2400;
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
        this.initializeRationalOperationsSolvers();
        this.initializeRationalLessons();
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
        this.initializeFactorizationPatterns();
        this.initializeLCMStrategies();
    }

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            'div': '÷', 'times': '×', 'cdot': '⋅',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥', 'emptyset': '∅'
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
                errorBg: '#f8d7da'
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
                warningBg: '#fff9e6',
                errorBg: '#ffe6e6'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeRationalLessons() {
        this.lessons = {
            simplifying_rationals: {
                title: "Simplifying Rational Expressions",
                concepts: [
                    "Rational expression is a fraction with polynomials in numerator and denominator",
                    "Simplify by factoring and canceling common factors",
                    "Cannot cancel terms, only factors",
                    "Result is undefined where denominator equals zero"
                ],
                theory: "Simplifying rational expressions reduces them to lowest terms by eliminating common factors from numerator and denominator.",
                keyFormulas: {
                    "Definition": "P(x)/Q(x) where P and Q are polynomials, Q(x) ≠ 0",
                    "Simplification": "Factor numerator and denominator, then cancel common factors",
                    "Restriction": "Q(x) ≠ 0 (denominator cannot be zero)"
                },
                solvingSteps: [
                    "Factor numerator completely",
                    "Factor denominator completely",
                    "Identify common factors",
                    "Cancel common factors (not terms)",
                    "State restrictions (values that make denominator zero)",
                    "Write simplified form"
                ],
                applications: [
                    "Electrical circuits (resistance in parallel)",
                    "Optics (lens equations)",
                    "Economics (average cost functions)",
                    "Physics (harmonic motion)"
                ]
            },

            multiplying_rationals: {
                title: "Multiplying Rational Expressions",
                concepts: [
                    "Multiply numerators together and denominators together",
                    "Factor before multiplying to simplify process",
                    "Cancel common factors across numerators and denominators",
                    "Result shows restrictions from all denominators"
                ],
                theory: "Multiplication of rational expressions follows the same rules as numeric fractions: multiply straight across and simplify.",
                keyFormulas: {
                    "Multiplication Rule": "(a/b) × (c/d) = (ac)/(bd)",
                    "Factor-First Method": "Factor all polynomials before multiplying",
                    "Cancellation": "Cancel common factors before multiplying"
                },
                solvingSteps: [
                    "Factor all numerators and denominators",
                    "Rewrite as single fraction",
                    "Cancel common factors diagonally",
                    "Multiply remaining factors in numerator",
                    "Multiply remaining factors in denominator",
                    "State all restrictions"
                ],
                applications: [
                    "Compound probability",
                    "Rate problems (combined rates)",
                    "Scaling in design",
                    "Physics (combined effects)"
                ]
            },

            dividing_rationals: {
                title: "Dividing Rational Expressions",
                concepts: [
                    "Division is multiplication by the reciprocal",
                    "Flip the second fraction and multiply",
                    "Factor everything before multiplying",
                    "Restrictions come from both original denominators and the flipped numerator"
                ],
                theory: "Division by a fraction equals multiplication by its reciprocal. This transforms division into multiplication.",
                keyFormulas: {
                    "Division Rule": "(a/b) ÷ (c/d) = (a/b) × (d/c)",
                    "Reciprocal": "Flip the divisor (second fraction)",
                    "Process": "Keep first, change to multiply, flip second (KCF)"
                },
                solvingSteps: [
                    "Rewrite division as multiplication by reciprocal",
                    "Factor all numerators and denominators",
                    "Cancel common factors",
                    "Multiply remaining factors",
                    "State restrictions (including divisor's original numerator ≠ 0)"
                ],
                applications: [
                    "Unit conversions with rates",
                    "Density calculations",
                    "Work rate problems",
                    "Gear ratios"
                ]
            },

            adding_subtracting_like_denominators: {
                title: "Adding/Subtracting with Like Denominators",
                concepts: [
                    "When denominators are identical, add/subtract numerators only",
                    "Keep common denominator",
                    "Combine like terms in numerator",
                    "Simplify result if possible"
                ],
                theory: "Like denominators allow direct addition/subtraction of numerators, similar to adding fractions with same denominator.",
                keyFormulas: {
                    "Addition": "(a/c) + (b/c) = (a+b)/c",
                    "Subtraction": "(a/c) - (b/c) = (a-b)/c",
                    "Common Denominator": "Denominators must be exactly the same"
                },
                solvingSteps: [
                    "Verify denominators are identical",
                    "Add or subtract numerators",
                    "Keep the common denominator",
                    "Combine like terms in numerator",
                    "Simplify if possible",
                    "State restrictions"
                ],
                applications: [
                    "Combining same-unit measurements",
                    "Parallel circuit calculations",
                    "Combining rates with same time period",
                    "Financial calculations with same basis"
                ]
            },

            adding_subtracting_unlike_denominators: {
                title: "Adding/Subtracting with Unlike Denominators",
                concepts: [
                    "Must find common denominator before adding/subtracting",
                    "Least Common Denominator (LCD) is most efficient",
                    "Multiply each fraction by form of 1 to create LCD",
                    "Then add/subtract as with like denominators"
                ],
                theory: "Unlike denominators require finding LCD by factoring denominators and building the LCM of all factors.",
                keyFormulas: {
                    "LCD Method": "Find LCD, rewrite each fraction with LCD, then add/subtract",
                    "Building LCD": "LCD = product of highest powers of all factors",
                    "Equivalent Fractions": "Multiply by (factor/factor) to create LCD"
                },
                solvingSteps: [
                    "Factor all denominators completely",
                    "Find LCD (LCM of denominators)",
                    "Determine what each denominator needs to become LCD",
                    "Multiply each fraction by appropriate form of 1",
                    "Rewrite with common denominator",
                    "Add or subtract numerators",
                    "Simplify result",
                    "State restrictions"
                ],
                applications: [
                    "Time calculations with different units",
                    "Combining rates with different bases",
                    "Financial analysis with different periods",
                    "Physics problems with different reference frames"
                ]
            },

            complex_rationals: {
                title: "Simplifying Complex Rational Expressions",
                concepts: [
                    "Complex fraction has fractions in numerator and/or denominator",
                    "Two main methods: LCD method and division method",
                    "LCD method: multiply by LCD of all small fractions",
                    "Division method: simplify top and bottom, then divide"
                ],
                theory: "Complex fractions are simplified by eliminating all internal fractions, creating a simple rational expression.",
                keyFormulas: {
                    "Complex Fraction": "Fraction containing fractions",
                    "LCD Method": "Multiply entire complex fraction by LCD of all internal fractions",
                    "Division Method": "Rewrite as (numerator) ÷ (denominator)"
                },
                solvingSteps: [
                    "Identify all internal fractions",
                    "Choose method (LCD or division)",
                    "LCD method: find LCD of all small fractions, multiply through",
                    "Division method: simplify top and bottom separately, then divide",
                    "Simplify resulting expression",
                    "State restrictions"
                ],
                applications: [
                    "Electrical engineering (combined impedances)",
                    "Optics (combined lens systems)",
                    "Economics (marginal analysis)",
                    "Chemistry (reaction rates)"
                ]
            },

            restrictions_domain: {
                title: "Finding Restrictions and Domain",
                concepts: [
                    "Domain excludes values that make any denominator zero",
                    "Factor denominators to find restrictions",
                    "Original form determines restrictions, not simplified form",
                    "Express domain as inequality or interval notation"
                ],
                theory: "Restrictions prevent division by zero. Even if factors cancel during simplification, original restrictions remain.",
                keyFormulas: {
                    "Restriction": "Set each denominator ≠ 0 and solve",
                    "Domain": "All real numbers except restrictions",
                    "Interval Notation": "Use ∪ to combine intervals around restrictions"
                },
                solvingSteps: [
                    "Identify all denominators (before simplification)",
                    "Set each denominator equal to zero",
                    "Solve for x values",
                    "List all restrictions",
                    "Write domain excluding restrictions",
                    "Express in interval or set notation"
                ],
                applications: [
                    "Function analysis",
                    "Graphing rational functions",
                    "Finding valid input ranges",
                    "Identifying asymptotes"
                ]
            }
        };
    }

    initializeRationalOperationsSolvers() {
        this.rationalTypes = {
            // Simplifying rational expressions
            simplify_rational: {
                patterns: [
                    /simplify/i,
                    /reduce/i,
                    /lowest.*terms/i
                ],
                solver: this.solveSimplifyRational.bind(this),
                name: 'Simplifying Rational Expressions',
                category: 'simplifying',
                description: 'Reduces rational expression to lowest terms'
            },

            // Multiplying rational expressions
            multiply_rationals: {
                patterns: [
                    /multiply/i,
                    /\*|×|·/,
                    /product/i
                ],
                solver: this.solveMultiplyRationals.bind(this),
                name: 'Multiplying Rational Expressions',
                category: 'multiplying',
                description: 'Multiplies two or more rational expressions'
            },

            // Dividing rational expressions
            divide_rationals: {
                patterns: [
                    /divide/i,
                    /÷/,
                    /quotient/i
                ],
                solver: this.solveDivideRationals.bind(this),
                name: 'Dividing Rational Expressions',
                category: 'dividing',
                description: 'Divides one rational expression by another'
            },

            // Adding with like denominators
            add_like_denominators: {
                patterns: [
                    /add.*same.*denominator/i,
                    /add.*like.*denominator/i
                ],
                solver: this.solveAddLikeDenominators.bind(this),
                name: 'Adding with Like Denominators',
                category: 'adding_like',
                description: 'Adds rational expressions with identical denominators'
            },

            // Subtracting with like denominators
            subtract_like_denominators: {
                patterns: [
                    /subtract.*same.*denominator/i,
                    /subtract.*like.*denominator/i
                ],
                solver: this.solveSubtractLikeDenominators.bind(this),
                name: 'Subtracting with Like Denominators',
                category: 'subtracting_like',
                description: 'Subtracts rational expressions with identical denominators'
            },

            // Adding with unlike denominators
            add_unlike_denominators: {
                patterns: [
                    /add.*different.*denominator/i,
                    /add.*unlike.*denominator/i,
                    /add.*LCD/i
                ],
                solver: this.solveAddUnlikeDenominators.bind(this),
                name: 'Adding with Unlike Denominators',
                category: 'adding_unlike',
                description: 'Adds rational expressions with different denominators'
            },

            // Subtracting with unlike denominators
            subtract_unlike_denominators: {
                patterns: [
                    /subtract.*different.*denominator/i,
                    /subtract.*unlike.*denominator/i,
                    /subtract.*LCD/i
                ],
                solver: this.solveSubtractUnlikeDenominators.bind(this),
                name: 'Subtracting with Unlike Denominators',
                category: 'subtracting_unlike',
                description: 'Subtracts rational expressions with different denominators'
            },

            // Complex fractions
            complex_fraction: {
                patterns: [
                    /complex.*fraction/i,
                    /fraction.*fraction/i,
                    /compound.*fraction/i
                ],
                solver: this.solveComplexFraction.bind(this),
                name: 'Simplifying Complex Fractions',
                category: 'complex',
                description: 'Simplifies fractions containing fractions'
            },

            // Finding restrictions
            find_restrictions: {
                patterns: [
                    /restriction/i,
                    /domain/i,
                    /excluded.*value/i
                ],
                solver: this.solveFindRestrictions.bind(this),
                name: 'Finding Restrictions',
                category: 'restrictions',
                description: 'Identifies values that make denominator zero'
            },

            // Finding LCD
            find_lcd: {
                patterns: [
                    /LCD/i,
                    /least.*common.*denominator/i,
                    /common.*denominator/i
                ],
                solver: this.solveFindLCD.bind(this),
                name: 'Finding Least Common Denominator',
                category: 'lcd',
                description: 'Finds LCD of rational expressions'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            simplifying: {
                'Factor numerator and denominator': [
                    'Canceling terms instead of factors',
                    'Forgetting to factor completely',
                    'Missing common factors',
                    'Incorrectly factoring polynomials'
                ],
                'Cancel common factors': [
                    'Canceling terms that are added/subtracted',
                    'Canceling only part of a factor',
                    'Forgetting restrictions after canceling',
                    'Canceling incorrectly with negative signs'
                ]
            },
            multiplying: {
                'Factor before multiplying': [
                    'Multiplying first then trying to simplify',
                    'Missing factorization opportunities',
                    'Incomplete factoring',
                    'Not canceling before multiplying'
                ],
                'Cancel common factors': [
                    'Forgetting to cancel diagonally',
                    'Canceling only within one fraction',
                    'Arithmetic errors in cancellation'
                ]
            },
            dividing: {
                'Multiply by reciprocal': [
                    'Forgetting to flip the second fraction',
                    'Flipping the wrong fraction',
                    'Forgetting to change division to multiplication'
                ],
                'State restrictions': [
                    'Missing restrictions from flipped numerator',
                    'Only including original denominator restrictions',
                    'Forgetting restrictions entirely'
                ]
            },
            adding_unlike: {
                'Find LCD': [
                    'Using product instead of LCD',
                    'Missing prime factors',
                    'Incorrect factorization of denominators',
                    'Not finding true least common denominator'
                ],
                'Build equivalent fractions': [
                    'Multiplying numerator and denominator by different factors',
                    'Only multiplying numerator',
                    'Arithmetic errors in building fractions',
                    'Not distributing correctly'
                ],
                'Combine numerators': [
                    'Combining denominators instead',
                    'Sign errors when subtracting',
                    'Not combining like terms',
                    'Distributing negative incorrectly'
                ]
            },
            complex: {
                'Identify small fractions': [
                    'Missing internal fractions',
                    'Misidentifying the main fraction bar',
                    'Confusion about numerator vs denominator'
                ],
                'Find LCD of all internal fractions': [
                    'Only using LCD of some fractions',
                    'Incorrect LCD calculation',
                    'Forgetting whole number terms'
                ],
                'Multiply entire complex fraction by LCD': [
                    'Not distributing to all terms',
                    'Only multiplying numerator or denominator',
                    'Arithmetic errors in distribution'
                ]
            }
        };

        this.errorPrevention = {
            cancel_only_factors: {
                reminder: 'Only factors can be canceled, never terms that are added or subtracted',
                method: 'Draw division symbols (/) through factors being canceled',
                example: 'Can cancel: (x+2)/(x+2). Cannot cancel x in: (x+2)/x'
            },
            flip_for_division: {
                reminder: 'Division = multiply by reciprocal. Keep-Change-Flip (KCF)',
                method: 'Circle the division symbol, write ×, then flip second fraction',
                example: '(a/b) ÷ (c/d) → (a/b) × (d/c)'
            },
            LCD_not_product: {
                reminder: 'LCD is LCM of denominators, not always their product',
                method: 'Factor each denominator, take highest power of each unique factor',
                example: 'LCD of (x+2) and (x+2)² is (x+2)², not (x+2)³'
            },
            restrictions_before_simplifying: {
                reminder: 'Find restrictions from ORIGINAL expression before canceling',
                method: 'List all restrictions first, then simplify',
                example: 'x/(x-3) has restriction x≠3 even after any simplification'
            },
            distribute_negative: {
                reminder: 'When subtracting fractions, distribute negative to all terms',
                method: 'Use parentheses: a - (b+c) = a - b - c',
                example: '3/(x) - (x+2)/(x) = (3-x-2)/(x) = (1-x)/(x)'
            },
            multiply_by_form_of_one: {
                reminder: 'To build LCD, multiply by (factor/factor), not just factor',
                method: 'Numerator and denominator must get same factor',
                example: '2/(x) → 2(x+1)/(x(x+1)) multiplied by (x+1)/(x+1)'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this step works and its mathematical meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact sequence of operations to perform',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical and spatial understanding',
                language: 'visual and spatial metaphors'
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
            parallel_resistance: {
                scenario: "Calculating total resistance in parallel circuits",
                equation: "1/R_total = 1/R₁ + 1/R₂",
                examples: [
                    "Two resistors 6Ω and 3Ω in parallel. Find total resistance.",
                    "Three resistors in parallel: 12Ω, 6Ω, and 4Ω. What's the combined resistance?"
                ],
                context: "Parallel circuits add reciprocals of resistances. Used in electrical engineering."
            },
            lens_equation: {
                scenario: "Finding focal length or image distance in optics",
                equation: "1/f = 1/d_o + 1/d_i",
                examples: [
                    "Object is 30cm from lens, image forms 15cm away. Find focal length.",
                    "Lens has focal length 10cm, object is 25cm away. Where does image form?"
                ],
                context: "Thin lens equation relates focal length, object distance, and image distance."
            },
            work_rate: {
                scenario: "Combined work rates",
                equation: "1/t_together = 1/t₁ + 1/t₂",
                examples: [
                    "Pipe A fills pool in 6 hours, pipe B in 4 hours. Together?",
                    "Person A completes job in 8 hours, B in 12 hours. Working together?"
                ],
                context: "Work rate problems involve adding reciprocals of individual completion times."
            },
            average_speed: {
                scenario: "Finding average speed for round trip",
                equation: "v_avg = 2v₁v₂/(v₁+v₂)",
                examples: [
                    "Drive to work at 60 mph, return at 40 mph. What's average speed?",
                    "Fly one way at 500 mph, return at 400 mph. Average speed?"
                ],
                context: "Harmonic mean gives average speed when distances are equal but speeds differ."
            },
            mixture_problems: {
                scenario: "Combining solutions of different concentrations",
                equation: "C_final = (C₁V₁ + C₂V₂)/(V₁ + V₂)",
                examples: [
                    "Mix 20% solution with 50% solution. What's final concentration?",
                    "Combine 30% acid with 60% acid to get 45% acid. What ratio?"
                ],
                context: "Chemistry and pharmacology use rational expressions for mixture calculations."
            },
            gear_ratios: {
                scenario: "Mechanical advantage in gear systems",
                equation: "ratio = teeth₁/teeth₂",
                examples: [
                    "Input gear has 40 teeth, output has 20 teeth. What's the ratio?",
                    "Want 3:1 ratio with 60-tooth output gear. How many teeth on input?"
                ],
                context: "Mechanical engineering uses ratios to calculate torque and speed relationships."
            },
            flow_rates: {
                scenario: "Combining flow rates from multiple sources",
                equation: "Combined rate = rate₁ + rate₂",
                examples: [
                    "Faucet A flows at 2 gal/min, B at 3 gal/min. Combined rate?",
                    "Two pumps drain pool: one at 50 gal/hr, other at 30 gal/hr. Together?"
                ],
                context: "Plumbing and fluid dynamics involve adding and comparing flow rates."
            },
            population_density: {
                scenario: "Comparing population densities",
                equation: "Density = Population/Area",
                examples: [
                    "City A: 500,000 people in 100 sq mi. City B: 300,000 in 50 sq mi. Which is denser?",
                    "Compare densities of different regions for urban planning."
                ],
                context: "Demographics and urban planning use rational expressions for density analysis."
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            simplifying: {
                skills: ['Factoring polynomials', 'Identifying common factors', 'Fraction simplification'],
                priorKnowledge: [
                    'GCF (Greatest Common Factor)',
                    'Factoring techniques (difference of squares, trinomials, grouping)',
                    'Simplifying numeric fractions',
                    'Concept of restrictions'
                ],
                checkQuestions: [
                    "Factor: x² - 9",
                    "Factor: x² + 5x + 6",
                    "Simplify: 12/18",
                    "What is GCF of 6x²y and 9xy²?"
                ]
            },
            multiplying: {
                skills: ['Multiplying fractions', 'Factoring polynomials', 'Canceling common factors'],
                priorKnowledge: [
                    'Fraction multiplication: (a/b) × (c/d) = (ac)/(bd)',
                    'Factoring',
                    'Simplifying before multiplying'
                ],
                checkQuestions: [
                    "Multiply: (2/3) × (5/7)",
                    "Factor: x² - 4",
                    "Simplify then multiply: (4/6) × (3/8)",
                    "Can you cancel before multiplying: (2/5) × (5/8)?"
                ]
            },
            dividing: {
                skills: ['Dividing fractions', 'Finding reciprocals', 'Multiplying rationals'],
                priorKnowledge: [
                    'Division as multiplication by reciprocal',
                    'Reciprocal means flip the fraction',
                    'Keep-Change-Flip method'
                ],
                checkQuestions: [
                    "Divide: (2/3) ÷ (4/5)",
                    "What is reciprocal of 3/7?",
                    "What is reciprocal of 5 (whole number)?",
                    "Rewrite as multiplication: (a/b) ÷ (c/d)"
                ]
            },
            adding_like: {
                skills: ['Adding fractions with same denominator', 'Combining like terms'],
                priorKnowledge: [
                    'Adding fractions: (a/c) + (b/c) = (a+b)/c',
                    'Combining like terms in numerator',
                    'Keeping common denominator'
                ],
                checkQuestions: [
                    "Add: 2/7 + 3/7",
                    "Combine: 3x + 5x",
                    "Add: (x+2)/5 + (3x-1)/5",
                    "Why can't you add denominators?"
                ]
            },
            adding_unlike: {
                skills: ['Finding LCD', 'Building equivalent fractions', 'Adding with like denominators'],
                priorKnowledge: [
                    'LCD is LCM of denominators',
                    'Equivalent fractions: multiply by (factor/factor)',
                    'Factoring to find LCD',
                    'Building fractions to common denominator'
                ],
                checkQuestions: [
                    "Find LCD of 6 and 8",
                    "Find LCD of x and x²",
                    "Build to denominator 12: 2/3 = ?/12",
                    "Add: 1/4 + 1/6"
                ]
            },
            complex: {
                skills: ['Simplifying rationals', 'Finding LCD', 'Adding/subtracting/multiplying/dividing rationals'],
                priorKnowledge: [
                    'All rational operations',
                    'Order of operations with fractions',
                    'LCD method for clearing fractions',
                    'Division method for complex fractions'
                ],
                checkQuestions: [
                    "Simplify: (1/2)/(3/4)",
                    "What's the LCD of 1/2, 1/3, and 1/x?",
                    "Simplify: (x + 1/x)/(1 - 1/x)",
                    "Which is easier for this complex fraction: LCD or division method?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            factor_boxes: {
                description: "Visual boxes showing factorization",
                analogy: "Like sorting items into labeled containers",
                visualization: "Draw boxes around each factor, cross out matching boxes",
                suitableFor: ['simplifying', 'multiplying', 'dividing'],
                explanation: "Factors in boxes help visualize what can be canceled"
            },
            fraction_strips: {
                description: "Visual strips showing equivalent fractions",
                analogy: "Like cutting pizza into different sized pieces",
                visualization: "Draw fraction bars showing equivalent portions",
                suitableFor: ['adding_like', 'adding_unlike'],
                explanation: "Shows why we need common denominators to add"
            },
            lcd_tree: {
                description: "Factor tree to find LCD",
                analogy: "Like finding ingredients needed for multiple recipes",
                visualization: "Branch diagram showing prime factorization of each denominator",
                suitableFor: ['adding_unlike', 'complex'],
                explanation: "LCD is built from all unique factors at highest powers"
            },
            keep_change_flip: {
                description: "Visual reminder for division",
                analogy: "Like changing direction (flip) when going uphill (division)",
                visualization: "Draw arrows: Keep first → Change ÷ to × → Flip second",
                suitableFor: ['dividing'],
                explanation: "Division by fraction = multiply by reciprocal"
            },
            cancellation_slashes: {
                description: "Slash marks through canceled factors",
                analogy: "Like crossing items off a shopping list",
                visualization: "Draw diagonal lines through matching factors",
                suitableFor: ['simplifying', 'multiplying'],
                explanation: "Visual confirmation of what's been simplified"
            },
            complex_fraction_layers: {
                description: "Identifying layers in complex fractions",
                analogy: "Like a sandwich with layers",
                visualization: "Draw main fraction bar darker/thicker, identify top and bottom layers",
                suitableFor: ['complex'],
                explanation: "Helps distinguish main fraction from internal fractions"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Simplify: (2x)/(4x)",
                    solution: "1/2",
                    steps: ["Factor: 2x/(2·2·x)", "Cancel common factors 2x", "Result: 1/2"],
                    difficulty: "easy",
                    restrictions: "x ≠ 0"
                },
                {
                    problem: "Multiply: (2/x) × (x/3)",
                    solution: "2/3",
                    steps: ["Cancel x diagonally", "Multiply: 2/3"],
                    difficulty: "easy",
                    restrictions: "x ≠ 0"
                },
                {
                    problem: "Add: 3/x + 5/x",
                    solution: "8/x",
                    steps: ["Same denominator", "Add numerators: (3+5)/x", "Result: 8/x"],
                    difficulty: "easy",
                    restrictions: "x ≠ 0"
                }
            ],
            intermediate: [
                {
                    problem: "Simplify: (x²-9)/(x²-x-6)",
                    solution: "(x+3)/(x+2)",
                    steps: [
                        "Factor numerator: (x-3)(x+3)",
                        "Factor denominator: (x-3)(x+2)",
                        "Cancel (x-3)",
                        "Result: (x+3)/(x+2)"
                    ],
                    difficulty: "medium",
                    restrictions: "x ≠ 3, x ≠ -2"
                },
                {
                    problem: "Divide: (x²-4)/(x+1) ÷ (x-2)/(x+1)",
                    solution: "x+2",
                    steps: [
                        "Multiply by reciprocal: (x²-4)/(x+1) × (x+1)/(x-2)",
                        "Factor x²-4: (x-2)(x+2)",
                        "Cancel (x+1) and (x-2)",
                        "Result: x+2"
                    ],
                    difficulty: "medium",
                    restrictions: "x ≠ -1, x ≠ 2"
                },
                {
                    problem: "Add: 2/x + 3/(x+1)",
                    solution: "(5x+2)/(x(x+1))",
                    steps: [
                        "LCD is x(x+1)",
                        "Build: 2(x+1)/(x(x+1)) + 3x/(x(x+1))",
                        "Add: (2x+2+3x)/(x(x+1))",
                        "Simplify: (5x+2)/(x(x+1))"
                    ],
                    difficulty: "medium",
                    restrictions: "x ≠ 0, x ≠ -1"
                }
            ],
            advanced: [
                {
                    problem: "Simplify: (x³-8)/(x²-4)",
                    solution: "(x²+2x+4)/(x+2)",
                    steps: [
                        "Factor numerator (difference of cubes): (x-2)(x²+2x+4)",
                        "Factor denominator (difference of squares): (x-2)(x+2)",
                        "Cancel (x-2)",
                        "Result: (x²+2x+4)/(x+2)"
                    ],
                    difficulty: "hard",
                    restrictions: "x ≠ 2, x ≠ -2"
                },
                {
                    problem: "Simplify complex: (1 + 1/x)/(1 - 1/x)",
                    solution: "(x+1)/(x-1)",
                    steps: [
                        "LCD of internal fractions is x",
                        "Multiply by x/x",
                        "Numerator: x(1 + 1/x) = x + 1",
                        "Denominator: x(1 - 1/x) = x - 1",
                        "Result: (x+1)/(x-1)"
                    ],
                    difficulty: "hard",
                    restrictions: "x ≠ 0, x ≠ 1"
                },
                {
                    problem: "Subtract: (x+2)/(x²-1) - (x-1)/(x²-2x+1)",
                    solution: "(x+1)/(x-1)²",
                    steps: [
                        "Factor: (x+2)/((x-1)(x+1)) - (x-1)/(x-1)²",
                        "LCD is (x-1)²(x+1)",
                        "Build fractions",
                        "Subtract and simplify"
                    ],
                    difficulty: "hard",
                    restrictions: "x ≠ 1, x ≠ -1"
                }
            ],
            byMethod: {
                simplifying: [
                    { problem: "(6x²)/(9x)", solution: "2x/3" },
                    { problem: "(x²-1)/(x-1)", solution: "x+1" },
                    { problem: "(x²+3x+2)/(x+1)", solution: "x+2" }
                ],
                multiplying: [
                    { problem: "(2/x) × (x/5)", solution: "2/5" },
                    { problem: "((x-2)/3) × (6/(x²-4))", solution: "2/(x+2)" }
                ],
                dividing: [
                    { problem: "(4/x) ÷ (2/x)", solution: "2" },
                    { problem: "((x+1)/x) ÷ ((x²-1)/x²)", solution: "x/(x-1)" }
                ],
                adding_unlike: [
                    { problem: "1/x + 1/y", solution: "(x+y)/(xy)" },
                    { problem: "2/(x-1) + 3/(x+1)", solution: "(5x-1)/(x²-1)" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            canceling_terms: {
                misconception: "Can cancel terms that are added/subtracted",
                reality: "Can only cancel FACTORS (things that are multiplied)",
                correctiveExample: "WRONG: (x+2)/x ≠ 2. RIGHT: (x·2)/(x·3) = 2/3",
                commonIn: ['simplifying', 'multiplying']
            },
            adding_denominators: {
                misconception: "When adding fractions, add denominators too",
                reality: "Keep common denominator, only add numerators",
                correctiveExample: "WRONG: 1/4 + 1/4 ≠ 2/8. RIGHT: 1/4 + 1/4 = 2/4",
                commonIn: ['adding_like', 'adding_unlike']
            },
            forgetting_to_flip: {
                misconception: "Division of fractions works like multiplication",
                reality: "Must flip (take reciprocal of) the divisor",
                correctiveExample: "WRONG: (a/b)÷(c/d) = (ac)/(bd). RIGHT: (a/b)÷(c/d) = (ad)/(bc)",
                commonIn: ['dividing']
            },
            lcd_is_product: {
                misconception: "LCD is always the product of denominators",
                reality: "LCD is LCM, which may be less than the product",
                correctiveExample: "LCD of x² and x is x² (not x³)",
                commonIn: ['adding_unlike', 'complex']
            },
            losing_restrictions: {
                misconception: "After simplifying, restrictions don't matter",
                reality: "Restrictions from original expression always apply",
                correctiveExample: "(x-2)/(x-2) = 1, but still x ≠ 2",
                commonIn: ['simplifying', 'all operations']
            },
            distributing_denominator: {
                misconception: "(a+b)/c = a + b/c",
                reality: "Division applies to entire numerator",
                correctiveExample: "WRONG: (x+2)/3 ≠ x + 2/3. RIGHT: (x+2)/3 = x/3 + 2/3",
                commonIn: ['simplifying', 'adding_unlike']
            },
            sign_errors_subtracting: {
                misconception: "When subtracting fractions, only subtract first term of numerator",
                reality: "Must distribute negative to all terms in second numerator",
                correctiveExample: "a/c - (b+d)/c = (a-b-d)/c, not (a-b+d)/c",
                commonIn: ['subtracting_like', 'subtracting_unlike']
            },
            complex_fraction_confusion: {
                misconception: "Not sure which is main fraction bar in complex fraction",
                reality: "Main bar (usually longer/thicker) separates overall numerator from denominator",
                correctiveExample: "In (1/2)/(3/4), main bar is between (1/2) and (3/4)",
                commonIn: ['complex']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            simplifying_rationals: {
                analogy: "Reducing a recipe",
                explanation: "Just as you can divide a recipe by a common number (recipe for 12 → recipe for 6), you reduce fractions by dividing by common factors",
                suitableFor: ['simplifying'],
                ELI5: "If a recipe needs 6 cups flour and 4 cups sugar, you can make it smaller by dividing both by 2: 3 cups flour and 2 cups sugar. Same ratio, smaller amounts!"
            },
            multiplying_rationals: {
                analogy: "Compounding discounts",
                explanation: "Like getting 50% off an item that's already 20% off - you multiply the fractions to find total discount",
                suitableFor: ['multiplying'],
                ELI5: "If you eat half of a pizza, then your friend eats half of what's left, together you ate half times half = one quarter of the whole pizza!"
            },
            dividing_rationals: {
                analogy: "Sharing fairly",
                explanation: "Dividing by 1/2 means 'how many halves fit into this?' which is the same as multiplying by 2",
                suitableFor: ['dividing'],
                ELI5: "If you have 4 cookies and want to give each person 1/2 cookie, how many people can you feed? You flip it: 4 ÷ (1/2) = 4 × 2 = 8 people!"
            },
            common_denominator: {
                analogy: "Using same measuring units",
                explanation: "You can't add 2 feet + 3 inches directly - first convert to same unit. Same with fractions and common denominators",
                suitableFor: ['adding_unlike', 'subtracting_unlike'],
                ELI5: "You can't add 2 apples and 3 oranges to get 5 apples. But you can add 2 apples and 3 oranges to get 5 fruits! Common denominator is like finding a common category."
            },
            lcd_finding: {
                analogy: "Finding a meeting time",
                explanation: "If bus A comes every 6 minutes and bus B every 8 minutes, they meet at times that are multiples of LCM(6,8)=24",
                suitableFor: ['adding_unlike', 'lcd'],
                ELI5: "If you and your friend have different schedules, you need to find a time that works for BOTH of you - that's like finding LCD!"
            },
            restrictions: {
                analogy: "Rules that can't be broken",
                explanation: "Like 'no diving in shallow end' - the rule exists even if you drain the pool (simplify). Original conditions always matter",
                suitableFor: ['restrictions', 'all operations'],
                ELI5: "If a rule says 'don't touch the hot stove,' that rule still matters even if the stove is off right now!"
            },
            complex_fractions: {
                analogy: "A box within a box",
                explanation: "Like Russian nesting dolls - you have fractions inside fractions. Simplify by clearing inner layers",
                suitableFor: ['complex'],
                ELI5: "Imagine a small box inside a big box. To see what's in the small box, you first need to open the big box!"
            },
            factoring_for_simplifying: {
                analogy: "Breaking down into prime ingredients",
                explanation: "Like breaking a dish down to its basic ingredients so you can see what can be removed or substituted",
                suitableFor: ['simplifying', 'multiplying', 'dividing'],
                ELI5: "If you have 6 cookies and 8 cookies, you can group them as (2×3) cookies and (2×4) cookies. Now you see both have 2, so you can simplify!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            simplifying: {
                level1: "What do the numerator and denominator have in common?",
                level2: "Have you factored both numerator and denominator completely?",
                level3: "Look for common factors that appear in both - those can be canceled",
                level4: "Factor, identify common factors, cancel them (not terms!), state restrictions"
            },
            multiplying: {
                level1: "What makes multiplying fractions easier than adding them?",
                level2: "Should you factor before multiplying or multiply first then simplify?",
                level3: "Factor everything, cancel common factors diagonally, then multiply",
                level4: "Factor all numerators and denominators, cancel across fractions, multiply remaining factors"
            },
            dividing: {
                level1: "How is division related to multiplication?",
                level2: "What do you do with the second fraction when dividing?",
                level3: "Remember: Keep-Change-Flip (KCF). Division becomes multiplication by reciprocal",
                level4: "Keep first fraction, change ÷ to ×, flip second fraction, then multiply as usual"
            },
            adding_like: {
                level1: "What's the same about these fractions?",
                level2: "When denominators are identical, what do you add?",
                level3: "Add numerators, keep the common denominator",
                level4: "Numerators: add them. Denominator: keep it the same. Then simplify if possible"
            },
            adding_unlike: {
                level1: "Can you add fractions with different denominators directly?",
                level2: "What do the denominators need to become before you can add?",
                level3: "Find LCD, build equivalent fractions, then add numerators",
                level4: "Factor denominators → Find LCD → Multiply each fraction by (missing factors/missing factors) → Add numerators"
            },
            complex: {
                level1: "What makes this fraction complex?",
                level2: "Can you identify all the small fractions inside?",
                level3: "Find LCD of all internal fractions, multiply entire complex fraction by it",
                level4: "List all small fractions → Find LCD → Multiply every term by LCD → Simplify result"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Simplify: (6x)/(9x)",
                    answer: "2/3",
                    assesses: "simplifying",
                    difficulty: "basic"
                },
                {
                    question: "Multiply: (2/x) × (x/5)",
                    answer: "2/5",
                    assesses: "multiplying",
                    difficulty: "basic"
                },
                {
                    question: "Divide: (3/x) ÷ (6/x)",
                    answer: "1/2",
                    assesses: "dividing",
                    difficulty: "basic"
                },
                {
                    question: "Add: 2/x + 3/x",
                    answer: "5/x",
                    assesses: "adding_like",
                    difficulty: "basic"
                },
                {
                    question: "Add: 1/x + 1/(x+1)",
                    answer: "(2x+1)/(x(x+1))",
                    assesses: "adding_unlike",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "Can you cancel x in (x+2)/x?",
                    options: ["Yes, to get 2", "No, x is a term not a factor", "Yes, to get 1+2", "Only if x≠0"],
                    correct: "No, x is a term not a factor",
                    explanation: "Can only cancel factors (multiplied), not terms (added)"
                },
                {
                    question: "To divide (a/b) ÷ (c/d), you should:",
                    options: ["Multiply a×c and b×d", "Flip first fraction", "Flip second fraction and multiply", "Add numerators"],
                    correct: "Flip second fraction and multiply",
                    explanation: "Division by fraction = multiply by its reciprocal"
                },
                {
                    question: "What's the LCD of x and x²?",
                    options: ["x³", "x²", "x", "2x"],
                    correct: "x²",
                    explanation: "LCD is highest power of common factors, which is x²"
                },
                {
                    question: "When adding 1/4 + 1/6, what's the LCD?",
                    options: ["24", "12", "10", "2"],
                    correct: "12",
                    explanation: "LCM of 4 and 6 is 12"
                }
            ],
            summative: [
                {
                    question: "Simplify: (x²-9)/(x²+6x+9)",
                    answer: "(x-3)/(x+3)",
                    showsWork: true,
                    rubric: {
                        factor_numerator: 1,
                        factor_denominator: 1,
                        cancel_common: 1,
                        state_restrictions: 1
                    }
                },
                {
                    question: "Add: 2/(x-1) + 3/(x+2)",
                    answer: "(5x+1)/((x-1)(x+2))",
                    showsWork: true,
                    rubric: {
                        find_lcd: 1,
                        build_fractions: 2,
                        add_numerators: 1,
                        simplify: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Simplify: (4x)/(8x)",
                    "Multiply: (3/x) × (x/5)",
                    "Add: 1/x + 2/x",
                    "Divide: (2/5) ÷ (3/5)"
                ],
                medium: [
                    "Simplify: (x²-4)/(x+2)",
                    "Multiply: ((x-1)/3) × (6/(x²-1))",
                    "Add: 1/x + 1/(x+1)",
                    "Subtract: 3/(x-2) - 1/(x-2)"
                ],
                hard: [
                    "Simplify: (x³-27)/(x²-9)",
                    "Divide: ((x²-1)/x) ÷ ((x+1)/(x²))",
                    "Add: 1/(x²-1) + 2/(x²-2x+1)",
                    "Complex: (1 + 1/x)/(1 - 1/x²)"
                ]
            },
            byObjective: {
                canSimplify: [
                    "(6x²)/(9x)",
                    "(x²-1)/(x+1)",
                    "(2x+4)/(x+2)"
                ],
                canMultiply: [
                    "(2/x) × (x/3)",
                    "((x-2)/4) × (8/(x²-4))"
                ],
                canDivide: [
                    "(3/x) ÷ (6/x²)",
                    "((x+1)/x) ÷ ((x²-1)/x²)"
                ],
                canAddUnlike: [
                    "1/x + 1/x²",
                    "2/(x-1) + 3/(x+1)"
                ],
                canSimplifyComplex: [
                    "(1/2)/(3/4)",
                    "(1 + 1/x)/(1 - 1/x)"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "single_fraction": "Check if can simplify by factoring and canceling",
                "multiplication": "Factor everything first, cancel diagonally, then multiply",
                "division": "Flip second fraction (reciprocal) and multiply",
                "same_denominators": "Add/subtract numerators, keep denominator",
                "different_denominators": "Find LCD, build equivalent fractions, add/subtract",
                "complex_fraction": "Use LCD method (multiply by LCD) or division method",
                "find_restrictions": "Set each denominator = 0 and solve"
            },
            whenToUseWhat: {
                factor_first: "Always factor before multiplying or dividing",
                cancel_diagonally: "When multiplying fractions, look for common factors across numerator-denominator pairs",
                lcd_method_complex: "Best for complex fractions with multiple small fractions",
                division_method_complex: "Best when numerator and denominator are each single fractions",
                build_lcd: "For unlike denominators in addition/subtraction",
                keep_change_flip: "For division of any fractions"
            },
            methodSelection: {
                factorsToConsider: [
                    "Type of operation (multiply, divide, add, subtract)",
                    "Whether denominators are same or different",
                    "Complexity of polynomials",
                    "Presence of complex fractions",
                    "Whether factoring will help"
                ],
                generalApproach: [
                    "1. Identify the operation(s) required",
                    "2. Factor all polynomials completely",
                    "3. Apply appropriate operation rules",
                    "4. Cancel common factors when possible",
                    "5. Simplify result",
                    "6. State restrictions"
                ]
            },
            optimizationTips: {
                "Factor before operating": "Saves work - easier to cancel before multiplying",
                "Look for patterns": "Difference of squares, perfect square trinomials, etc.",
                "Find true LCD": "Don't just multiply denominators - find LCM",
                "Track restrictions": "Note them from original problem before simplifying",
                "Check your work": "Substitute a value to verify (avoid restricted values)"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Simplification Sprint",
                    timeLimit: 120,
                    problems: [
                        "(4x)/(6x)",
                        "(x²-1)/(x-1)",
                        "(2x+4)/(x+2)",
                        "(x²-9)/(x+3)",
                        "(3x²)/(9x)"
                    ]
                },
                {
                    name: "Operations Challenge",
                    timeLimit: 180,
                    problems: [
                        "(2/x) × (x/3)",
                        "(4/x) ÷ (2/x)",
                        "1/x + 2/x",
                        "3/x - 1/x",
                        "(x/2) × (4/x²)"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Simplification",
                    problem: "A rational expression simplifies to (x+3). What could the original be?",
                    solution: "Many possibilities: (x²+3x)/(x), (x²-9)/(x-3), etc.",
                    challenge: "Find at least 3 different original expressions"
                },
                {
                    name: "LCD Detective",
                    problem: "Two rational expressions have LCD of x²(x-1). What could they be?",
                    solution: "Examples: 1/x² and 1/(x-1), or 2/(x(x-1)) and 3/x²",
                    challenge: "Find 3 different pairs"
                },
                {
                    name: "Restriction Riddle",
                    problem: "Expression has restrictions x≠2 and x≠-3. What's a possible expression?",
                    solution: "Any with (x-2) or (x+3) in denominator",
                    sampleSolution: "1/((x-2)(x+3))"
                }
            ],
            applications: [
                {
                    scenario: "Parallel Resistors",
                    problem: "Two resistors of 6Ω and 9Ω in parallel. Find total resistance using 1/R_total = 1/R₁ + 1/R₂",
                    equation: "1/R = 1/6 + 1/9",
                    solution: "R = 3.6Ω"
                },
                {
                    scenario: "Work Rate",
                    problem: "Person A completes job in 6 hours, B in 4 hours. How long together?",
                    equation: "1/t = 1/6 + 1/4",
                    solution: "t = 2.4 hours"
                },
                {
                    scenario: "Average Speed",
                    problem: "Drive 60 mph there, 40 mph back. What's average speed?",
                    equation: "v_avg = 2(60)(40)/(60+40)",
                    solution: "48 mph (not 50!)"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "(x+2)/x simplified",
                        "Cancel x to get 2"  // ERROR
                    ],
                    correctAnswer: "Cannot simplify - x is term not factor",
                    errorType: "Canceling terms instead of factors"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "1/4 + 1/6",
                        "= (1+1)/(4+6)",  // ERROR
                        "= 2/10 = 1/5"
                    ],
                    correctAnswer: "LCD is 12: 3/12 + 2/12 = 5/12",
                    errorType: "Adding denominators"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "(a/b) ÷ (c/d)",
                        "= (a/b) × (c/d)",  // ERROR: forgot to flip
                        "= (ac)/(bd)"
                    ],
                    correctAnswer: "(a/b) × (d/c) = (ad)/(bc)",
                    errorType: "Forgetting to flip divisor"
                }
            ]
        };
    }

    initializeFactorizationPatterns() {
        this.factorizationPatterns = {
            gcf: {
                name: "Greatest Common Factor",
                pattern: "ax + ay = a(x + y)",
                examples: [
                    { expression: "6x + 9", factored: "3(2x + 3)" },
                    { expression: "4x² + 8x", factored: "4x(x + 2)" }
                ],
                recognition: "Look for common factor in all terms"
            },
            difference_of_squares: {
                name: "Difference of Squares",
                pattern: "a² - b² = (a + b)(a - b)",
                examples: [
                    { expression: "x² - 9", factored: "(x + 3)(x - 3)" },
                    { expression: "4x² - 25", factored: "(2x + 5)(2x - 5)" }
                ],
                recognition: "Two perfect squares with subtraction"
            },
            perfect_square_trinomial: {
                name: "Perfect Square Trinomial",
                pattern: "a² + 2ab + b² = (a + b)²",
                examples: [
                    { expression: "x² + 6x + 9", factored: "(x + 3)²" },
                    { expression: "4x² - 12x + 9", factored: "(2x - 3)²" }
                ],
                recognition: "First and last terms are perfect squares, middle is 2ab"
            },
            trinomial_ac_method: {
                name: "Trinomial (AC Method)",
                pattern: "x² + bx + c = (x + m)(x + n) where mn = c and m+n = b",
                examples: [
                    { expression: "x² + 5x + 6", factored: "(x + 2)(x + 3)" },
                    { expression: "x² - x - 12", factored: "(x - 4)(x + 3)" }
                ],
                recognition: "Trinomial with leading coefficient 1"
            },
            difference_of_cubes: {
                name: "Difference of Cubes",
                pattern: "a³ - b³ = (a - b)(a² + ab + b²)",
                examples: [
                    { expression: "x³ - 8", factored: "(x - 2)(x² + 2x + 4)" },
                    { expression: "27x³ - 1", factored: "(3x - 1)(9x² + 3x + 1)" }
                ],
                recognition: "Two perfect cubes with subtraction"
            },
            sum_of_cubes: {
                name: "Sum of Cubes",
                pattern: "a³ + b³ = (a + b)(a² - ab + b²)",
                examples: [
                    { expression: "x³ + 27", factored: "(x + 3)(x² - 3x + 9)" },
                    { expression: "8x³ + 1", factored: "(2x + 1)(4x² - 2x + 1)" }
                ],
                recognition: "Two perfect cubes with addition"
            },
            grouping: {
                name: "Factoring by Grouping",
                pattern: "ax + ay + bx + by = a(x + y) + b(x + y) = (x + y)(a + b)",
                examples: [
                    { expression: "x³ + 3x² + 2x + 6", factored: "(x + 3)(x² + 2)" }
                ],
                recognition: "Four terms that can be grouped in pairs"
            }
        };
    }

    initializeLCMStrategies() {
        this.lcmStrategies = {
            numeric_lcm: {
                method: "Prime factorization method",
                steps: [
                    "Factor each number into primes",
                    "Take highest power of each prime",
                    "Multiply together"
                ],
                example: {
                    numbers: [12, 18],
                    factorizations: ["12 = 2² × 3", "18 = 2 × 3²"],
                    lcm: "2² × 3² = 36"
                }
            },
            polynomial_lcm: {
                method: "Factor each polynomial completely",
                steps: [
                    "Factor all polynomials completely",
                    "Identify all unique factors",
                    "Take highest power of each unique factor",
                    "Multiply together"
                ],
                example: {
                    polynomials: ["x² - 4", "x² + 4x + 4"],
                    factorizations: ["(x-2)(x+2)", "(x+2)²"],
                    lcd: "(x-2)(x+2)²"
                }
            },
            quick_recognition: {
                "one_is_multiple": {
                    rule: "If one denominator is a multiple of the other, LCD is the larger",
                    example: "LCD of x and x² is x²"
                },
                "coprime_polynomials": {
                    rule: "If no common factors, LCD is the product",
                    example: "LCD of (x-1) and (x+2) is (x-1)(x+2)"
                },
                "common_factor": {
                    rule: "If share a factor, LCD includes it once at highest power",
                    example: "LCD of x²(x-1) and x(x-1)² is x²(x-1)²"
                }
            }
        };
    }

    // MAIN SOLVER METHOD
    solveRationalProblem(config) {
        const { expression, operation, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseRationalProblem(expression, operation, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveRationalProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateRationalSteps(this.currentProblem, this.currentSolution);

            // Generate workbook
            this.generateRationalWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                simplified: this.currentSolution?.simplified,
                restrictions: this.currentSolution?.restrictions
            };

        } catch (error) {
            throw new Error(`Failed to solve rational expression problem: ${error.message}`);
        }
    }

    parseRationalProblem(expression, operation = '', scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = expression ? this.cleanMathExpression(expression) : '';

        // If problem type is specified, use it directly
        if (problemType && this.rationalTypes[problemType]) {
            return {
                originalInput: expression || `${problemType} problem`,
                cleanInput: cleanInput,
                type: problemType,
                operation: operation,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect rational problem type
        for (const [type, config] of Object.entries(this.rationalTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario) || pattern.test(operation)) {
                    return {
                        originalInput: expression || scenario,
                        cleanInput: cleanInput,
                        type: type,
                        operation: operation,
                        scenario: scenario,
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default based on operation keyword
        if (operation) {
            const opLower = operation.toLowerCase();
            if (opLower.includes('simplify')) return { ...this.createDefaultParsed(expression), type: 'simplify_rational' };
            if (opLower.includes('multiply')) return { ...this.createDefaultParsed(expression), type: 'multiply_rationals' };
            if (opLower.includes('divide')) return { ...this.createDefaultParsed(expression), type: 'divide_rationals' };
            if (opLower.includes('add')) return { ...this.createDefaultParsed(expression), type: 'add_unlike_denominators' };
            if (opLower.includes('subtract')) return { ...this.createDefaultParsed(expression), type: 'subtract_unlike_denominators' };
        }

        throw new Error(`Unable to recognize rational expression problem type from: ${expression || scenario}`);
    }

    createDefaultParsed(expression) {
        return {
            originalInput: expression,
            cleanInput: this.cleanMathExpression(expression),
            operation: '',
            scenario: '',
            parameters: {},
            context: {},
            parsedAt: new Date().toISOString()
        };
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/≠/g, '!=')
            .replace(/×/g, '*')
            .replace(/·/g, '*')
            .replace(/÷/g, '/')
            .trim();
    }

    solveRationalProblem_Internal(problem) {
        const solver = this.rationalTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for rational problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // RATIONAL EXPRESSION SOLVERS

    solveSimplifyRational(problem) {
        const { numerator, denominator } = problem.parameters;

        return {
            type: 'Simplifying Rational Expression',
            original: `(${numerator})/(${denominator})`,
            approach: 'Factor numerator and denominator, then cancel common factors',
            steps: [
                'Factor numerator completely',
                'Factor denominator completely',
                'Identify common factors',
                'Cancel common factors',
                'State restrictions'
            ],
            category: 'simplifying',
            note: 'Remember: only factors can be canceled, not terms'
        };
    }

    solveMultiplyRationals(problem) {
        const { fraction1, fraction2 } = problem.parameters;

        return {
            type: 'Multiplying Rational Expressions',
            original: `(${fraction1}) × (${fraction2})`,
            rule: '(a/b) × (c/d) = (ac)/(bd)',
            approach: 'Factor all expressions, cancel common factors diagonally, then multiply',
            steps: [
                'Factor all numerators and denominators',
                'Cancel common factors across fractions',
                'Multiply remaining numerators',
                'Multiply remaining denominators',
                'State all restrictions'
            ],
            category: 'multiplying',
            tip: 'Factor before multiplying to simplify work'
        };
    }

    solveDivideRationals(problem) {
        const { fraction1, fraction2 } = problem.parameters;

        return {
            type: 'Dividing Rational Expressions',
            original: `(${fraction1}) ÷ (${fraction2})`,
            rule: '(a/b) ÷ (c/d) = (a/b) × (d/c)',
            approach: 'Multiply by reciprocal of divisor (Keep-Change-Flip)',
            steps: [
                'Keep first fraction',
                'Change division to multiplication',
                'Flip second fraction (reciprocal)',
                'Factor everything',
                'Cancel common factors',
                'Multiply',
                'State restrictions (including divisor\'s original numerator ≠ 0)'
            ],
            category: 'dividing',
            tip: 'Remember KCF: Keep-Change-Flip'
        };
    }

    solveAddLikeDenominators(problem) {
        const { numerator1, numerator2, commonDenominator } = problem.parameters;

        return {
            type: 'Adding with Like Denominators',
            original: `(${numerator1})/(${commonDenominator}) + (${numerator2})/(${commonDenominator})`,
            rule: '(a/c) + (b/c) = (a+b)/c',
            approach: 'Add numerators, keep common denominator',
            steps: [
                'Verify denominators are identical',
                'Add numerators: (numerator1) + (numerator2)',
                'Keep common denominator',
                'Combine like terms in numerator',
                'Simplify if possible',
                'State restrictions'
            ],
            category: 'adding_like',
            tip: 'Only add numerators - denominator stays the same'
        };
    }

    solveSubtractLikeDenominators(problem) {
        const { numerator1, numerator2, commonDenominator } = problem.parameters;

        return {
            type: 'Subtracting with Like Denominators',
            original: `(${numerator1})/(${commonDenominator}) - (${numerator2})/(${commonDenominator})`,
            rule: '(a/c) - (b/c) = (a-b)/c',
            approach: 'Subtract numerators, keep common denominator',
            steps: [
                'Verify denominators are identical',
                'Subtract numerators: (numerator1) - (numerator2)',
                'Keep common denominator',
                'Distribute negative sign if needed',
                'Combine like terms',
                'Simplify if possible',
                'State restrictions'
            ],
            category: 'subtracting_like',
            warning: 'Distribute negative to ALL terms in second numerator'
        };
    }

    solveAddUnlikeDenominators(problem) {
        const { fraction1, fraction2 } = problem.parameters;

        return {
            type: 'Adding with Unlike Denominators',
            original: `${fraction1} + ${fraction2}`,
            approach: 'Find LCD, build equivalent fractions, then add',
            steps: [
                'Factor all denominators',
                'Find LCD (LCM of denominators)',
                'Determine what each denominator needs to become LCD',
                'Multiply each fraction by (missing factors)/(missing factors)',
                'Rewrite with common denominator',
                'Add numerators',
                'Simplify result',
                'State restrictions'
            ],
            category: 'adding_unlike',
            tip: 'LCD is LCM of denominators, not always their product'
        };
    }

    solveSubtractUnlikeDenominators(problem) {
        const { fraction1, fraction2 } = problem.parameters;

        return {
            type: 'Subtracting with Unlike Denominators',
            original: `${fraction1} - ${fraction2}`,
            approach: 'Find LCD, build equivalent fractions, then subtract',
            steps: [
                'Factor all denominators',
                'Find LCD',
                'Build equivalent fractions with LCD',
                'Subtract numerators (distribute negative!)',
                'Combine like terms',
                'Simplify result',
                'State restrictions'
            ],
            category: 'subtracting_unlike',
            warning: 'Must distribute negative sign to all terms in second numerator'
        };
    }

    solveComplexFraction(problem) {
        const { complexExpression } = problem.parameters;

        return {
            type: 'Simplifying Complex Fraction',
            original: complexExpression,
            methods: {
                lcd_method: 'Multiply entire complex fraction by LCD of all internal fractions',
                division_method: 'Simplify numerator and denominator separately, then divide'
            },
            approach: 'Choose LCD method or division method based on structure',
            steps: [
                'Identify all internal fractions',
                'LCD method: Find LCD of all small fractions, multiply through',
                'OR Division method: Simplify top and bottom, then divide',
                'Simplify resulting expression',
                'State restrictions'
            ],
            category: 'complex',
            tip: 'LCD method often faster; division method more intuitive'
        };
    }

    solveFindRestrictions(problem) {
        const { expression } = problem.parameters;

        return {
            type: 'Finding Restrictions',
            original: expression,
            approach: 'Set all denominators equal to zero and solve',
            steps: [
                'Identify all denominators (before simplification)',
                'Set each denominator = 0',
                'Solve each equation for the variable',
                'List all restriction values',
                'Express domain excluding restrictions'
            ],
            category: 'restrictions',
            note: 'Restrictions come from original expression, even if factors cancel',
            domainNotation: 'Use interval notation or set notation'
        };
    }

    solveFindLCD(problem) {
        const { denominators } = problem.parameters;

        return {
            type: 'Finding Least Common Denominator',
            denominators: denominators,
            approach: 'Factor all denominators and find LCM',
            steps: [
                'Factor each denominator completely',
                'List all unique factors',
                'Take highest power of each unique factor',
                'Multiply these together to get LCD'
            ],
            category: 'lcd',
            tip: 'LCD is NOT always the product of denominators'
        };
    }

    // STEP GENERATION

    generateRationalSteps(problem, solution) {
        let baseSteps = this.generateBaseRationalSteps(problem, solution);

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

    generateBaseRationalSteps(problem, solution) {
        const { type } = problem;
        const category = this.rationalTypes[type]?.category;

        switch(category) {
            case 'simplifying':
                return this.generateSimplifyingSteps(problem, solution);
            case 'multiplying':
                return this.generateMultiplyingSteps(problem, solution);
            case 'dividing':
                return this.generateDividingSteps(problem, solution);
            case 'adding_like':
            case 'subtracting_like':
                return this.generateLikeDenominatorSteps(problem, solution);
            case 'adding_unlike':
            case 'subtracting_unlike':
                return this.generateUnlikeDenominatorSteps(problem, solution);
            case 'complex':
                return this.generateComplexFractionSteps(problem, solution);
            case 'restrictions':
                return this.generateRestrictionSteps(problem, solution);
            case 'lcd':
                return this.generateLCDSteps(problem, solution);
            default:
                return this.generateGenericRationalSteps(problem, solution);
        }
    }

    generateSimplifyingSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given expression',
            description: 'Start with the rational expression',
            expression: solution.original,
            reasoning: 'We need to simplify by factoring and canceling common factors',
            goalStatement: 'Reduce to lowest terms by eliminating common factors'
        });

        steps.push({
            stepNumber: 2,
            step: 'Factor numerator and denominator',
            description: 'Factor both completely',
            reasoning: 'Factoring reveals common factors that can be canceled',
            algebraicRule: 'Fundamental Theorem of Arithmetic / Polynomial Factorization',
            visualHint: 'Look for GCF, difference of squares, trinomials, etc.'
        });

        steps.push({
            stepNumber: 3,
            step: 'Identify common factors',
            description: 'Find factors that appear in both numerator and denominator',
            reasoning: 'Only common FACTORS can be canceled (not terms)',
            warning: 'Cannot cancel terms that are added/subtracted'
        });

        steps.push({
            stepNumber: 4,
            step: 'Cancel common factors',
            description: 'Divide out common factors from numerator and denominator',
            reasoning: 'Dividing by common factor = multiplying by 1',
            algebraicRule: '(a·c)/(b·c) = a/b when c ≠ 0',
            visualHint: 'Draw slashes through matching factors'
        });

        steps.push({
            stepNumber: 5,
            step: 'State restrictions',
            description: 'Identify values that make original denominator zero',
            reasoning: 'Restrictions prevent division by zero',
            finalAnswer: false,
            important: 'Restrictions from ORIGINAL expression always apply'
        });

        steps.push({
            stepNumber: 6,
            step: 'Simplified form',
            description: 'Write the simplified expression',
            finalAnswer: true,
            reasoning: 'This is the expression in lowest terms'
        });

        return steps;
    }

    generateMultiplyingSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given multiplication',
            description: 'Start with the multiplication problem',
            expression: solution.original,
            reasoning: 'Multiply fractions by multiplying numerators and denominators',
            goalStatement: 'Simplify before multiplying to reduce work'
        });

        steps.push({
            stepNumber: 2,
            step: 'Factor all expressions',
            description: 'Factor all numerators and denominators completely',
            reasoning: 'Factoring first allows us to cancel before multiplying',
            tip: 'This saves arithmetic work later'
        });

        steps.push({
            stepNumber: 3,
            step: 'Cancel common factors diagonally',
            description: 'Cancel factors that appear in any numerator and any denominator',
            reasoning: 'Can cancel across different fractions in multiplication',
            visualHint: 'Draw slashes diagonally between matching factors',
            algebraicRule: '(a/b) × (c/d) = (a/b) × (c/d) with cancellation'
        });

        steps.push({
            stepNumber: 4,
            step: 'Multiply remaining factors',
            description: 'Multiply what remains in numerators and denominators',
            reasoning: 'After canceling, multiply the simplified factors',
            operation: '(remaining numerators)/(remaining denominators)'
        });

        steps.push({
            stepNumber: 5,
            step: 'State all restrictions',
            description: 'List values that make any original denominator zero',
            reasoning: 'Include restrictions from all fractions involved',
            finalAnswer: true
        });

        return steps;
    }

    generateDividingSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given division',
            description: 'Start with the division problem',
            expression: solution.original,
            reasoning: 'Division by fraction = multiplication by reciprocal',
            goalStatement: 'Apply Keep-Change-Flip (KCF) rule'
        });

        steps.push({
            stepNumber: 2,
            step: 'Multiply by reciprocal',
            description: 'Keep first fraction, change ÷ to ×, flip second fraction',
            reasoning: 'Division is defined as multiplication by reciprocal',
            algebraicRule: '(a/b) ÷ (c/d) = (a/b) × (d/c)',
            visualHint: 'KCF: Keep-Change-Flip',
            mnemonic: 'Keep the first, Change division to multiplication, Flip the second'
        });

        steps.push({
            stepNumber: 3,
            step: 'Factor all expressions',
            description: 'Factor numerators and denominators',
            reasoning: 'Allows cancellation before multiplying'
        });

        steps.push({
            stepNumber: 4,
            step: 'Cancel common factors',
            description: 'Cancel matching factors diagonally',
            reasoning: 'Simplifies before multiplication'
        });

        steps.push({
            stepNumber: 5,
            step: 'Multiply',
            description: 'Multiply remaining factors',
            reasoning: 'Complete the multiplication after canceling'
        });

        steps.push({
            stepNumber: 6,
            step: 'State restrictions',
            description: 'Include restrictions from all denominators AND from flipped numerator',
            reasoning: 'Original divisor\'s numerator cannot be zero (can\'t divide by zero)',
            important: 'Extra restriction from numerator that was flipped',
            finalAnswer: true
        });

        return steps;
    }

    generateLikeDenominatorSteps(problem, solution) {
        const steps = [];
        const isAddition = solution.type.includes('Adding');

        steps.push({
            stepNumber: 1,
            step: 'Given problem',
            description: `${isAddition ? 'Addition' : 'Subtraction'} with like denominators`,
            expression: solution.original,
            reasoning: 'Denominators are identical, so combine numerators directly',
            goalStatement: `${isAddition ? 'Add' : 'Subtract'} numerators, keep denominator`
        });

        steps.push({
            stepNumber: 2,
            step: 'Verify denominators match',
            description: 'Confirm both fractions have the same denominator',
            reasoning: 'Required before combining numerators'
        });

        steps.push({
            stepNumber: 3,
            step: `${isAddition ? 'Add' : 'Subtract'} numerators`,
            description: `Perform operation on numerators: (num1) ${isAddition ? '+' : '-'} (num2)`,
            reasoning: `When denominators are same, just ${isAddition ? 'add' : 'subtract'} tops`,
            algebraicRule: `(a/c) ${isAddition ? '+' : '-'} (b/c) = (a${isAddition ? '+' : '-'}b)/c`,
            warning: isAddition ? null : 'Distribute negative to ALL terms in second numerator'
        });

        steps.push({
            stepNumber: 4,
            step: 'Keep common denominator',
            description: 'Write result over the common denominator',
            reasoning: 'Denominator does not change'
        });

        steps.push({
            stepNumber: 5,
            step: 'Combine like terms',
            description: 'Simplify the numerator by combining like terms',
            reasoning: 'Makes the expression cleaner'
        });

        steps.push({
            stepNumber: 6,
            step: 'Simplify if possible',
            description: 'Check if numerator and denominator have common factors',
            reasoning: 'Reduce to lowest terms',
            finalAnswer: true
        });

        return steps;
    }

    generateUnlikeDenominatorSteps(problem, solution) {
        const steps = [];
        const isAddition = solution.type.includes('Adding');

        steps.push({
            stepNumber: 1,
            step: 'Given problem',
            description: `${isAddition ? 'Addition' : 'Subtraction'} with unlike denominators`,
            expression: solution.original,
            reasoning: 'Need common denominator before combining',
            goalStatement: 'Find LCD, build equivalent fractions, then combine'
        });

        steps.push({
            stepNumber: 2,
            step: 'Factor all denominators',
            description: 'Factor each denominator completely',
            reasoning: 'Factoring helps find the LCD',
            visualHint: 'Look for patterns: difference of squares, trinomials, etc.'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find LCD',
            description: 'Find Least Common Denominator (LCM of denominators)',
            reasoning: 'LCD is most efficient common denominator',
            method: 'Take highest power of each unique factor',
            tip: 'LCD is NOT always the product of denominators'
        });

        steps.push({
            stepNumber: 4,
            step: 'Determine missing factors',
            description: 'For each fraction, find what denominator needs to become LCD',
            reasoning: 'Shows what to multiply by reasoning: 'Shows what to multiply by to build LCD',
            visualHint: 'LCD ÷ current denominator = missing factors'
        });

        steps.push({
            stepNumber: 5,
            step: 'Build equivalent fractions',
            description: 'Multiply each fraction by (missing factors)/(missing factors)',
            reasoning: 'Multiplying by (factor/factor) = multiplying by 1, creates equivalent fraction',
            algebraicRule: 'Multiply numerator AND denominator by same factor',
            important: 'Must multiply both top and bottom by the same thing'
        });

        steps.push({
            stepNumber: 6,
            step: 'Rewrite with LCD',
            description: 'Write both fractions with common denominator',
            reasoning: 'Now ready to combine since denominators match'
        });

        steps.push({
            stepNumber: 7,
            step: `${isAddition ? 'Add' : 'Subtract'} numerators`,
            description: `Combine numerators: (num1) ${isAddition ? '+' : '-'} (num2)`,
            reasoning: `Now it's like ${isAddition ? 'adding' : 'subtracting'} with like denominators`,
            warning: isAddition ? null : 'Use parentheses and distribute negative: a - (b+c) = a - b - c'
        });

        steps.push({
            stepNumber: 8,
            step: 'Simplify numerator',
            description: 'Combine like terms in the numerator',
            reasoning: 'Clean up the expression'
        });

        steps.push({
            stepNumber: 9,
            step: 'Simplify if possible',
            description: 'Check if result can be factored and simplified',
            reasoning: 'Reduce to lowest terms',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 10,
            step: 'State restrictions',
            description: 'List values that make LCD zero',
            reasoning: 'Prevent division by zero',
            finalAnswer: true
        });

        return steps;
    }

    generateComplexFractionSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given complex fraction',
            description: 'Fraction containing fractions',
            expression: solution.original,
            reasoning: 'Need to eliminate internal fractions',
            goalStatement: 'Simplify to a simple rational expression'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify internal fractions',
            description: 'List all small fractions within the complex fraction',
            reasoning: 'Need to know what fractions to eliminate',
            visualHint: 'Main fraction bar is usually longer/thicker'
        });

        steps.push({
            stepNumber: 3,
            step: 'Choose method',
            description: 'Select LCD method or division method',
            reasoning: 'LCD method: multiply by LCD. Division method: simplify top and bottom separately',
            tip: 'LCD method often faster; division method more intuitive'
        });

        steps.push({
            stepNumber: 4,
            step: 'LCD Method: Find LCD',
            description: 'Find LCD of ALL internal fractions',
            reasoning: 'Will multiply entire complex fraction by this',
            method: 'Include denominators from top and bottom of complex fraction'
        });

        steps.push({
            stepNumber: 5,
            step: 'Multiply by LCD/LCD',
            description: 'Multiply entire complex fraction by (LCD/LCD)',
            reasoning: 'Multiplying by 1 doesn\'t change value, but clears fractions',
            important: 'Distribute LCD to EVERY term in numerator and denominator',
            visualHint: 'LCD × (numerator) / (LCD × denominator)'
        });

        steps.push({
            stepNumber: 6,
            step: 'Simplify',
            description: 'Cancel denominators of internal fractions',
            reasoning: 'LCD cancels with each small denominator',
            result: 'No more internal fractions!'
        });

        steps.push({
            stepNumber: 7,
            step: 'Further simplification',
            description: 'Factor and cancel if possible',
            reasoning: 'Reduce to lowest terms',
            finalAnswer: true
        });

        return steps;
    }

    generateRestrictionSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given expression',
            description: 'Rational expression to analyze',
            expression: solution.original,
            reasoning: 'Need to find values that make expression undefined',
            goalStatement: 'Identify all restrictions (values where denominator = 0)'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify all denominators',
            description: 'List every denominator in the original expression',
            reasoning: 'Restrictions come from setting denominators = 0',
            important: 'Use ORIGINAL expression, not simplified version'
        });

        steps.push({
            stepNumber: 3,
            step: 'Set each denominator = 0',
            description: 'Create equations: denominator₁ = 0, denominator₂ = 0, etc.',
            reasoning: 'These equations find the restricted values'
        });

        steps.push({
            stepNumber: 4,
            step: 'Solve for variable',
            description: 'Solve each equation to find restricted values',
            reasoning: 'These are the x-values where expression is undefined',
            method: 'Factor if needed, then solve'
        });

        steps.push({
            stepNumber: 5,
            step: 'List all restrictions',
            description: 'Compile all values from all denominators',
            reasoning: 'Complete set of restrictions',
            format: 'x ≠ value₁, x ≠ value₂, ...'
        });

        steps.push({
            stepNumber: 6,
            step: 'State domain',
            description: 'Express domain excluding restrictions',
            reasoning: 'Domain is all real numbers except restrictions',
            notation: 'Interval notation: (-∞, r₁) ∪ (r₁, r₂) ∪ (r₂, ∞)',
            finalAnswer: true
        });

        return steps;
    }

    generateLCDSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given denominators',
            description: 'List of denominators to find LCD',
            denominators: solution.denominators,
            reasoning: 'LCD is the LCM of all denominators',
            goalStatement: 'Find smallest expression divisible by all denominators'
        });

        steps.push({
            stepNumber: 2,
            step: 'Factor each denominator',
            description: 'Factor all denominators completely',
            reasoning: 'Factored form reveals the building blocks',
            method: 'Use all factoring techniques: GCF, difference of squares, trinomials, etc.'
        });

        steps.push({
            stepNumber: 3,
            step: 'Identify unique factors',
            description: 'List all different factors that appear',
            reasoning: 'LCD will be built from these factors'
        });

        steps.push({
            stepNumber: 4,
            step: 'Determine highest powers',
            description: 'For each unique factor, find its highest power across all denominators',
            reasoning: 'LCD must contain each factor at its highest power',
            example: 'If x appears as x² in one denominator and x³ in another, use x³'
        });

        steps.push({
            stepNumber: 5,
            step: 'Multiply highest powers together',
            description: 'LCD = product of all factors at highest powers',
            reasoning: 'This gives the least common denominator',
            algebraicRule: 'LCD = factor₁^(max power) × factor₂^(max power) × ...',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 6,
            step: 'Verify',
            description: 'Check that LCD is divisible by each original denominator',
            reasoning: 'Confirms LCD is correct',
            method: 'Divide LCD by each denominator - should get whole expression'
        });

        return steps;
    }

    generateGenericRationalSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Rational expression problem',
            description: 'Solve the given rational expression problem',
            expression: problem.cleanInput || solution.original,
            reasoning: 'Apply appropriate rational expression techniques',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS (Similar to linear workbook but adapted for rationals)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            // Multiple explanation formats
            explanations: {
                conceptual: this.getConceptualExplanationRational(step, problem),
                procedural: this.getProceduralExplanationRational(step),
                visual: this.getVisualExplanationRational(step, problem),
                algebraic: this.getAlgebraicExplanationRational(step)
            },

            // Difficulty-adapted explanations
            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            // Learning support
            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesRational(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyRational(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        // Add thinking prompts if enabled
        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsRational(step);
        }

        // Add self-check questions if enabled
        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionRational(step);
        }

        // Add real-world connections if enabled
        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionRational(step, problem);
        }

        return enhanced;
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationRational(step, problem),
                analogy: this.findRelevantAnalogyRational(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestVisualizationRational(step)
            }
        }));
    }

    generateELI5ExplanationRational(step, problem) {
        const ELI5Explanations = {
            'Given expression': "We have a fraction with algebra in it! Our job is to make it simpler.",
            'Factor numerator and denominator': "Break the top and bottom into smaller pieces that multiply together, like factoring 12 into 2×2×3.",
            'Cancel common factors': "If the same thing appears on top and bottom, we can cross it out! Like 6/8 = (2×3)/(2×4) = 3/4.",
            'Multiply by reciprocal': "When dividing fractions, flip the second one and multiply instead. It's like a magic trick that makes division easier!",
            'Find LCD': "Find a common size that all denominators can fit into, like finding a time that works for everyone's schedule.",
            'Add numerators': "When bottoms are the same, just add the tops! Like 2 pizzas + 3 pizzas = 5 pizzas.",
            'State restrictions': "Some numbers break the math (make bottom zero), so we say 'don't use those numbers!'",
            'Build equivalent fractions': "Make fractions bigger by multiplying top AND bottom by same number, like turning 1/2 into 2/4.",
            'Multiply by LCD/LCD': "Multiply by something that equals 1 to clear out the small fractions inside."
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our puzzle!";
    }

    findRelevantAnalogyRational(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.some(cat => problem.type.includes(cat))) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like following a recipe - each step gets us closer to the final dish!";
    }

    suggestVisualizationRational(step) {
        const visualizations = {
            'Factor numerator and denominator': 'Draw boxes around factors: (2x)(3) / (2)(x) then cross out matching boxes',
            'Cancel common factors': 'Draw slash marks (/) through matching factors on top and bottom',
            'Multiply by reciprocal': 'Draw the second fraction, then flip it upside down',
            'Find LCD': 'Make a factor tree for each denominator, circle unique factors at highest powers',
            'Build equivalent fractions': 'Draw fraction bars showing equivalent pieces',
            'Add numerators': 'Picture combining pizza slices when slices are same size',
            'Multiply by LCD/LCD': 'Show a big fraction multiplying the complex fraction'
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
                    explanation: this.generateStepBridgeRational(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeRational(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.expression || 'a simpler form'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessityRational(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefitRational(nextStep)}`
        };
    }

    explainStepNecessityRational(currentStep, nextStep) {
        const necessities = {
            'Factor numerator and denominator': 'we cannot cancel until we see the factors clearly',
            'Cancel common factors': 'this reduces the fraction to lowest terms',
            'Find LCD': 'we cannot add/subtract until denominators are the same',
            'Multiply by reciprocal': 'division by a fraction requires this transformation',
            'Build equivalent fractions': 'both fractions need the same denominator to combine'
        };

        return necessities[nextStep.step] || 'we need to continue simplifying';
    }

    explainStepBenefitRational(nextStep) {
        const benefits = {
            'Factor numerator and denominator': 'revealing factors we can cancel',
            'Cancel common factors': 'making the expression simpler',
            'Find LCD': 'enabling us to add/subtract the fractions',
            'Multiply by reciprocal': 'converting division into easier multiplication',
            'Add numerators': 'combining the fractions into one'
        };

        return benefits[nextStep.step] || 'moving us toward the final answer';
    }

    addErrorPrevention(step, problemType) {
        const category = this.rationalTypes[problemType]?.category || 'simplifying';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsRational(step, problemType),
                checkPoints: this.generateCheckPointsRational(step),
                warningFlags: this.identifyWarningFlagsRational(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionRational(step),
                expectedResult: this.describeExpectedResultRational(step),
                troubleshooting: this.generateTroubleshootingTipsRational(step)
            }
        };
    }

    generatePreventionTipsRational(step, problemType) {
        const tips = {
            'Factor numerator and denominator': [
                'Factor completely - don\'t stop at first factorization',
                'Look for all patterns: GCF, difference of squares, trinomials',
                'Check your factoring by multiplying back'
            ],
            'Cancel common factors': [
                'Only cancel FACTORS (things multiplied), never TERMS (things added)',
                'Draw slashes through canceled factors',
                'Remember restrictions before canceling'
            ],
            'Find LCD': [
                'Factor each denominator completely first',
                'LCD is LCM, not always the product',
                'Include each unique factor at its highest power'
            ],
            'Multiply by reciprocal': [
                'Keep-Change-Flip: keep first, change ÷ to ×, flip second',
                'Don\'t forget to flip!',
                'Factor before multiplying'
            ],
            'Build equivalent fractions': [
                'Multiply BOTH numerator and denominator',
                'Multiply by (missing factor)/(missing factor)',
                'Double-check that result has LCD as denominator'
            ],
            'Add numerators': [
                'Only add numerators when denominators are same',
                'Keep the common denominator',
                'Use parentheses when subtracting to distribute negative'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check each step'];
    }

    generateCheckPointsRational(step) {
        return [
            'Did I factor completely?',
            'Am I canceling factors, not terms?',
            'Did I state restrictions?',
            'Does my answer make sense?',
            'Can I simplify further?'
        ];
    }

    identifyWarningFlagsRational(step, problemType) {
        const warnings = {
            'Cancel common factors': [
                'Cannot cancel x in (x+2)/x - x is a term, not a factor',
                'Can only cancel what is multiplied, not added/subtracted'
            ],
            'Find LCD': [
                'LCD of x and x² is x², not x³',
                'Don\'t just multiply denominators - find LCM'
            ],
            'Add numerators': [
                'When subtracting, distribute negative: a - (b+c) = a - b - c',
                'Don\'t add denominators too!'
            ],
            'Multiply by reciprocal': [
                'Must flip the SECOND fraction (the divisor)',
                'Include restriction: divisor\'s numerator ≠ 0'
            ]
        };

        return warnings[step.step] || [];
    }

    addScaffolding(baseSteps, problem) {
        return baseSteps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsRational(step, problem),
                subSteps: this.breakIntoSubStepsRational(step),
                hints: this.generateProgressiveHintsRational(step, problem),
                practiceVariation: this.generatePracticeVariationRational(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessRational(step),
                decisionPoints: this.identifyDecisionPointsRational(step),
                alternativeApproaches: this.suggestAlternativeMethodsRational(step, problem)
            }
        }));
    }

    generateGuidingQuestionsRational(step, problem) {
        const questions = {
            'Given expression': [
                'What type of rational expression operation is this?',
                'What do I need to accomplish?',
                'What are the key parts: numerators, denominators?'
            ],
            'Factor numerator and denominator': [
                'What factoring patterns do I see?',
                'Is there a GCF?',
                'Do I see difference of squares, trinomials, or other patterns?'
            ],
            'Cancel common factors': [
                'What factors appear in both top and bottom?',
                'Am I canceling factors or terms?',
                'What restrictions should I note before canceling?'
            ],
            'Find LCD': [
                'What are the unique factors in all denominators?',
                'What is the highest power of each factor?',
                'Is the LCD just the product, or something smaller?'
            ],
            'Multiply by reciprocal': [
                'Did I keep the first fraction?',
                'Did I change division to multiplication?',
                'Did I flip the second fraction?'
            ],
            'Add numerators': [
                'Are the denominators the same?',
                'Am I adding or subtracting?',
                'If subtracting, did I distribute the negative?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help?'];
    }

    breakIntoSubStepsRational(step) {
        const subSteps = {
            'Factor numerator and denominator': [
                'Look for GCF in numerator',
                'Factor out GCF if present',
                'Look for patterns (difference of squares, trinomial, etc.)',
                'Repeat for denominator'
            ],
            'Cancel common factors': [
                'List all factors in numerator',
                'List all factors in denominator',
                'Identify matching factors',
                'Cross out matching pairs',
                'Write what remains'
            ],
            'Find LCD': [
                'Factor each denominator',
                'List unique factors',
                'For each factor, find highest power',
                'Multiply highest powers together'
            ],
            'Build equivalent fractions': [
                'For each fraction: LCD ÷ current denominator = missing factor',
                'Multiply numerator by missing factor',
                'Multiply denominator by missing factor',
                'Verify denominator is now LCD'
            ]
        };

        return subSteps[step.step] || ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generateProgressiveHintsRational(step, problem) {
        const category = this.rationalTypes[problem.type]?.category || 'simplifying';
        const hintSet = this.hints[category] || this.hints.simplifying;

        return {
            level1: hintSet.level1 || 'Think about what this step requires.',
            level2: hintSet.level2 || 'Consider the structure of the expression.',
            level3: hintSet.level3 || 'Apply the appropriate technique.',
            level4: hintSet.level4 || 'Execute the specific operations needed.'
        };
    }

    generatePracticeVariationRational(step, problem) {
        return {
            similarProblem: 'Try the same type of problem with different expressions',
            practiceHint: 'Practice with simpler polynomials first',
            extension: 'Once comfortable, try with more complex factoring'
        };
    }

    explainThinkingProcessRational(step) {
        return {
            observe: 'What structure do I see in this expression?',
            goal: 'What am I trying to accomplish in this step?',
            strategy: 'What technique should I use?',
            execute: 'How do I perform this correctly?',
            verify: 'Does my result make sense? Can I check it?'
        };
    }

    identifyDecisionPointsRational(step) {
        return [
            'Which factoring pattern applies?',
            'Should I simplify before or after operating?',
            'Which method is more efficient (LCD vs division for complex fractions)?',
            'Can this be simplified further?'
        ];
    }

    suggestAlternativeMethodsRational(step, problem) {
        const alternatives = {
            'Complex fraction': [
                'LCD method: multiply by LCD of all internal fractions',
                'Division method: simplify top and bottom, then divide',
                'Choose based on structure - LCD often faster'
            ],
            'Find LCD': [
                'Factoring method (recommended): factor and find LCM',
                'Trial method: test multiples until one works',
                'Product method (not recommended): multiply all denominators'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate'];
    }

    // CONCEPTUAL EXPLANATIONS FOR RATIONALS

    getConceptualExplanationRational(step, problem) {
        const conceptualExplanations = {
            'Given expression': 'A rational expression is a fraction with polynomials. We manipulate it using fraction rules.',
            'Factor numerator and denominator': 'Factoring reveals the building blocks, allowing us to see what can cancel.',
            'Cancel common factors': 'Canceling common factors is like simplifying 6/8 to 3/4 - we divide out what\'s common.',
            'Multiply by reciprocal': 'Division by a fraction is multiplication by its flip - this is the definition of fraction division.',
            'Find LCD': 'LCD allows us to rewrite fractions with a common base, enabling addition/subtraction.',
            'Add numerators': 'When denominators match, we combine numerators - like combining slices of same-sized pizza.',
            'State restrictions': 'Restrictions prevent division by zero, preserving mathematical validity.'
        };

        return conceptualExplanations[step.step] || 'This step simplifies the rational expression.';
    }

    getProceduralExplanationRational(step) {
        const procedures = {
            'Factor numerator and denominator': '1. Look for GCF\n2. Identify patterns\n3. Apply factoring technique\n4. Verify by multiplying',
            'Cancel common factors': '1. Identify matching factors\n2. Draw slashes through them\n3. Write remaining factors',
            'Find LCD': '1. Factor each denominator\n2. List unique factors\n3. Take highest power of each\n4. Multiply together',
            'Multiply by reciprocal': '1. Keep first fraction\n2. Change ÷ to ×\n3. Flip second fraction\n4. Proceed with multiplication'
        };

        return procedures[step.step] || 'Follow standard procedure for this operation.';
    }

    getVisualExplanationRational(step, problem) {
        const visualExplanations = {
            'Factor numerator and denominator': 'Draw boxes around each factor, making the structure visible',
            'Cancel common factors': 'Use diagonal slashes to cross out matching factors',
            'Find LCD': 'Use factor tree to visualize prime factorization',
            'Multiply by reciprocal': 'Draw arrow showing second fraction flipping upside down',
            'Build equivalent fractions': 'Show fraction strips of different sizes becoming same size'
        };

        return visualExplanations[step.step] || 'Visualize the expression transformation.';
    }

    getAlgebraicExplanationRational(step) {
        const algebraicRules = {
            'Cancel common factors': 'Property: (a·c)/(b·c) = a/b when c ≠ 0',
            'Multiply by reciprocal': 'Definition: (a/b) ÷ (c/d) = (a/b) × (d/c)',
            'Find LCD': 'LCD is LCM of denominators',
            'Add numerators': 'Property: (a/c) + (b/c) = (a+b)/c',
            'Build equivalent fractions': 'Property: (a/b) = (a·k)/(b·k) for any k ≠ 0'
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
                'rational expression': 'algebraic fraction',
                'factor': 'break into pieces that multiply',
                'cancel': 'cross out',
                'reciprocal': 'flip',
                'LCD': 'common denominator',
                'restriction': 'value that breaks the math',
                'numerator': 'top',
                'denominator': 'bottom'
            },
            ELI5: {
                'rational expression': 'a fraction with algebra in it',
                'factor': 'break into smaller multiplying pieces',
                'cancel': 'cross out matching parts',
                'reciprocal': 'flip the fraction upside down',
                'LCD': 'a common size all fractions can fit into',
                'restriction': 'numbers we can\'t use because they break the math',
                'numerator': 'the top part of the fraction',
                'denominator': 'the bottom part of the fraction',
                'complex fraction': 'a fraction with fractions inside it'
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

    // SUPPORT METHODS

    identifyPrerequisitesRational(step, problemType) {
        const category = this.rationalTypes[problemType]?.category || 'simplifying';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Fraction operations', 'Polynomial factoring'];
    }

    identifyKeyVocabularyRational(step) {
        const vocabulary = {
            'Factor numerator and denominator': ['factor', 'numerator', 'denominator', 'polynomial', 'GCF'],
            'Cancel common factors': ['cancel', 'factor', 'common factor', 'simplify'],
            'Find LCD': ['LCD', 'LCM', 'factor', 'denominator'],
            'Multiply by reciprocal': ['reciprocal', 'flip', 'division', 'multiplication'],
            'Add numerators': ['numerator', 'denominator', 'like terms'],
            'State restrictions': ['restriction', 'domain', 'undefined', 'division by zero']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPromptsRational(step) {
        return {
            before: 'Before starting, what structure do I see in this expression?',
            during: 'As I work, am I applying the rules correctly?',
            after: 'After completing this step, does the result make sense?'
        };
    }

    generateSelfCheckQuestionRational(step) {
        const questions = {
            'Factor numerator and denominator': 'Did I factor completely? Can I factor any further?',
            'Cancel common factors': 'Am I canceling factors (multiplied) not terms (added)?',
            'Find LCD': 'Is this the smallest expression that all denominators divide into?',
            'Multiply by reciprocal': 'Did I flip the second fraction and change to multiplication?',
            'Add numerators': 'Are the denominators identical? Did I only combine numerators?',
            'State restrictions': 'Did I find ALL values that make denominators zero?'
        };

        return questions[step.step] || 'Does this step move me toward the goal?';
    }

    describeExpectedResultRational(step) {
        const expectations = {
            'Factor numerator and denominator': 'Factored forms showing all factors',
            'Cancel common factors': 'Simpler expression with common factors removed',
            'Find LCD': 'Expression that all denominators divide into evenly',
            'Multiply by reciprocal': 'Division problem converted to multiplication',
            'Add numerators': 'Single fraction with combined numerator',
            'Build equivalent fractions': 'All fractions with same (LCD) denominator'
        };

        return expectations[step.step] || 'Progress toward simplified form';
    }

    generateTroubleshootingTipsRational(step) {
        return [
            'Review the previous step if stuck',
            'Check factoring by multiplying back out',
            'Verify you\'re following fraction rules correctly',
            'Look for common mistakes for this operation',
            'Try a simpler example to understand the process'
        ];
    }

    findRealWorldConnectionRational(step, problem) {
        const connections = {
            'simplifying': 'Like reducing a recipe to simplest form: 6 cups/8 people = 3 cups/4 people',
            'multiplying': 'Like compound discounts: 20% off, then 30% off = 0.8 × 0.7 of original',
            'dividing': 'Like converting rates: miles per gallon ÷ price per gallon = miles per dollar',
            'adding_unlike': 'Like combining time in different units: 1/2 hour + 1/3 hour',
            'complex': 'Like electrical circuits with resistors in series and parallel combinations'
        };

        const category = this.rationalTypes[problem.type]?.category;
        return connections[category] || 'Rational expressions model many real-world rate and proportion problems.';
    }

    // WORKBOOK GENERATION

    generateRationalWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createRationalLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createFactoringReferenceSection(),
            this.createLCDReferenceSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Operations with Rational Expressions Mathematical Workbook',
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
            ['Problem Type', this.rationalTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.rationalTypes[this.currentProblem.type]?.category || 'rational'],
            ['Operation', this.currentSolution?.type || this.currentProblem.operation],
            ['Expression', this.currentSolution?.original || this.currentProblem.cleanInput]
        ];

        if (this.currentProblem.scenario) {
            problemData.push(['Scenario', this.currentProblem.scenario]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.rationalTypes[this.currentProblem.type]?.category;
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

            if (step.warning) {
                stepsData.push(['⚠️ Warning', step.warning]);
            }

            if (step.tip) {
                stepsData.push(['💡 Tip', step.tip]);
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
                stepsData.push(['Procedural', step.explanations.procedural]);
            }

            if (step.visualHint && (this.explanationLevel === 'intermediate' || this.explanationLevel === 'detailed')) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

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

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
                }
            }

            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Think Before', step.thinkingPrompts.before]);
                stepsData.push(['Think During', step.thinkingPrompts.during]);
                stepsData.push(['Think After', step.thinkingPrompts.after]);
            }

            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            if (step.realWorldConnection && this.includeRealWorldApplications) {
                stepsData.push(['Real-World', step.realWorldConnection]);
            }

            stepsData.push(['', '']);
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createRationalLessonSection() {
        const { type } = this.currentProblem;
        const category = this.rationalTypes[type]?.category;

        const lessonKey = Object.keys(this.lessons).find(key => key.includes(category));
        const lesson = lessonKey ? this.lessons[lessonKey] : null;

        if (!lesson) {
            return {
                title: 'Key Concepts',
                type: 'lesson',
                data: [
                    ['Key Concepts', ''],
                    ['', 'Rational expressions are fractions with polynomials'],
                    ['', 'Factor completely before simplifying'],
                    ['', 'Only factors can be canceled, not terms'],
                    ['', 'Always state restrictions (values making denominator zero)']
                ]
            };
        }

        const lessonData = [
            ['Title', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach(concept => {
            lessonData.push(['', concept]);
        });

        lessonData.push(['', '']);
        lessonData.push(['Theory', lesson.theory]);

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Solution Method', this.currentSolution.type || this.currentSolution.category],
            ['Approach', this.currentSolution.approach]
        ];

        if (this.currentSolution.simplified) {
            solutionData.push(['Simplified Form', this.currentSolution.simplified]);
        }

        if (this.currentSolution.restrictions) {
            solutionData.push(['Restrictions', this.currentSolution.restrictions]);
        }

        if (this.currentSolution.note) {
            solutionData.push(['Important Note', this.currentSolution.note]);
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
            ['Category', this.rationalTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.tip) {
            analysisData.push(['Key Tip', this.currentSolution.tip]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createFactoringReferenceSection() {
        const factoringData = [
            ['Factoring Patterns Reference', ''],
            ['', '']
        ];

        for (const [key, pattern] of Object.entries(this.factorizationPatterns)) {
            factoringData.push([pattern.name, pattern.pattern]);
            factoringData.push(['Recognition', pattern.recognition]);
            if (pattern.examples && pattern.examples[0]) {
                factoringData.push(['Example', `${pattern.examples[0].expression} = ${pattern.examples[0].factored}`]);
            }
            factoringData.push(['', '']);
        }

        return {
            title: 'Factoring Reference',
            type: 'reference',
            data: factoringData
        };
    }

    createLCDReferenceSection() {
        const lcdData = [
            ['LCD Finding Strategies', ''],
            ['', ''],
            ['Method', 'Prime factorization and LCM'],
            ['Steps', '1. Factor each denominator\n2. Identify unique factors\n3. Take highest power of each\n4. Multiply together'],
            ['', ''],
            ['Quick Recognition Rules', ''],
            ['One is multiple of other', 'LCD is the larger expression'],
            ['No common factors', 'LCD is the product'],
            ['Common factors', 'LCD includes each at highest power']
        ];

        return {
            title: 'LCD Reference',
            type: 'reference',
            data: lcdData
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
            appData.push(['Equation', app.equation]);
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

        const notes = this.generateRationalPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateRationalAlternativeMethods(this.currentProblem.type);

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

        problems.hard.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    generateRationalPedagogicalNotes(problemType) {
        const category = this.rationalTypes[problemType]?.category;

        const pedagogicalDatabase = {
            simplifying: {
                objectives: [
                    'Simplify rational expressions by factoring and canceling',
                    'Identify restrictions on domain',
                    'Distinguish between factors and terms'
                ],
                keyConcepts: [
                    'Only factors can be canceled',
                    'Restrictions from original expression',
                    'Complete factorization required'
                ],
                prerequisites: [
                    'Polynomial factoring',
                    'Simplifying numeric fractions',
                    'Identifying GCF'
                ],
                commonDifficulties: [
                    'Canceling terms instead of factors',
                    'Incomplete factorization',
                    'Forgetting restrictions after canceling'
                ],
                teachingStrategies: [
                    'Use factor boxes visualization',
                    'Practice identifying factors vs terms',
                    'Emphasize restrictions before simplifying'
                ],
                extensions: [
                    'Complex fractions',
                    'Rational equations',
                    'Graphing rational functions'
                ],
                assessment: [
                    'Can student factor completely?',
                    'Does student cancel only factors?',
                    'Are restrictions correctly identified?'
                ]
            },
            multiplying: {
                objectives: [
                    'Multiply rational expressions',
                    'Simplify before multiplying',
                    'State all restrictions'
                ],
                keyConcepts: [
                    'Factor first, then cancel diagonally',
                    'Multiply numerators and denominators',
                    'Restrictions from all original denominators'
                ],
                prerequisites: [
                    'Multiplying fractions',
                    'Factoring polynomials',
                    'Simplifying rationals'
                ],
                commonDifficulties: [
                    'Multiplying before factoring',
                    'Missing cancellation opportunities',
                    'Incomplete restriction list'
                ],
                teachingStrategies: [
                    'Teach factor-first approach',
                    'Use diagonal cancellation visualization',
                    'Practice with numeric fractions first'
                ],
                extensions: [
                    'Dividing rational expressions',
                    'Mixed operations',
                    'Word problems with rates'
                ],
                assessment: [
                    'Does student factor before multiplying?',
                    'Are all cancellations identified?',
                    'Are all restrictions listed?'
                ]
            },
            dividing: {
                objectives: [
                    'Divide rational expressions using reciprocal',
                    'Apply Keep-Change-Flip rule',
                    'Include divisor restrictions'
                ],
                keyConcepts: [
                    'Division = multiplication by reciprocal',
                    'KCF: Keep-Change-Flip',
                    'Extra restriction from flipped numerator'
                ],
                prerequisites: [
                    'Dividing fractions',
                    'Reciprocals',
                    'Multiplying rationals'
                ],
                commonDifficulties: [
                    'Forgetting to flip',
                    'Flipping wrong fraction',
                    'Missing extra restriction'
                ],
                teachingStrategies: [
                    'Emphasize KCF mnemonic',
                    'Practice with numeric fractions',
                    'Highlight restriction from flipped numerator'
                ],
                extensions: [
                    'Complex fractions',
                    'Combined operations',
                    'Rate problems'
                ],
                assessment: [
                    'Does student apply KCF correctly?',
                    'Are all restrictions identified?',
                    'Can student explain why we flip?'
                ]
            },
            adding_unlike: {
                objectives: [
                    'Add/subtract rational expressions with unlike denominators',
                    'Find LCD efficiently',
                    'Build equivalent fractions'
                ],
                keyConcepts: [
                    'LCD is LCM of denominators',
                    'Build fractions to LCD',
                    'Distribute negative when subtracting'
                ],
                prerequisites: [
                    'Finding LCM',
                    'Factoring',
                    'Adding with like denominators'
                ],
                commonDifficulties: [
                    'Using product instead of LCD',
                    'Not distributing negative',
                    'Building fractions incorrectly'
                ],
                teachingStrategies: [
                    'Teach LCD finding systematically',
                    'Use parentheses for subtraction',
                    'Practice building to LCD'
                ],
                extensions: [
                    'Three or more fractions',
                    'Complex fractions',
                    'Rational equations'
                ],
                assessment: [
                    'Can student find true LCD?',
                    'Are equivalent fractions built correctly?',
                    'Is negative distributed when subtracting?'
                ]
            },
            complex: {
                objectives: [
                    'Simplify complex fractions',
                    'Choose appropriate method (LCD or division)',
                    'Clear all internal fractions'
                ],
                keyConcepts: [
                    'Two methods: LCD and division',
                    'LCD method multiplies by LCD/LCD',
                    'Division method simplifies top and bottom separately'
                ],
                prerequisites: [
                    'All rational operations',
                    'Finding LCD',
                    'Order of operations'
                ],
                commonDifficulties: [
                    'Identifying main fraction bar',
                    'Not distributing LCD to all terms',
                    'Mixing the two methods'
                ],
                teachingStrategies: [
                    'Clearly mark main fraction bar',
                    'Practice both methods',
                    'Discuss method selection'
                ],
                extensions: [
                    'Nested complex fractions',
                    'Applications in physics/engineering',
                    'Rational equations'
                ],
                assessment: [
                    'Can student identify structure?',
                    'Is method applied correctly?',
                    'Are all fractions eliminated?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Work with rational expressions'],
            keyConcepts: ['Factor and simplify'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Various challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex problems'],
            assessment: ['Verify understanding']
        };
    }

    generateRationalAlternativeMethods(problemType) {
        const category = this.rationalTypes[problemType]?.category;

        const alternativeDatabase = {
            simplifying: {
                primaryMethod: 'Factor and Cancel',
                methods: [
                    {
                        name: 'Visual Factor Boxes',
                        description: 'Draw boxes around factors and cross out matching boxes'
                    },
                    {
                        name: 'Cancellation Marks',
                        description: 'Use slash marks through matching factors'
                    },
                    {
                        name: 'Step-by-Step Cancellation',
                        description: 'Cancel one factor at a time, rewriting after each'
                    }
                ],
                comparison: 'All methods achieve same result; choose based on visual preference'
            },
            multiplying: {
                primaryMethod: 'Factor First, Then Multiply',
                methods: [
                    {
                        name: 'Multiply Then Simplify',
                        description: 'Multiply first, then factor and simplify (more work)'
                    },
                    {
                        name: 'Diagonal Cancellation',
                        description: 'Cancel matching factors across fractions before multiplying'
                    }
                ],
                comparison: 'Factor-first method is most efficient; reduces arithmetic'
            },
            dividing: {
                primaryMethod: 'Keep-Change-Flip (Multiply by Reciprocal)',
                methods: [
                    {
                        name: 'Complex Fraction Method',
                        description: 'Rewrite as complex fraction, then simplify'
                    },
                    {
                        name: 'Direct KCF',
                        description: 'Apply reciprocal immediately'
                    }
                ],
                comparison: 'KCF is standard and most efficient'
            },
            adding_unlike: {
                primaryMethod: 'Find LCD, Build Fractions, Add',
                methods: [
                    {
                        name: 'Product Method',
                        description: 'Use product of denominators as common denominator (may not be LCD)'
                    },
                    {
                        name: 'LCM Method',
                        description: 'Find true LCD using LCM (most efficient)'
                    },
                    {
                        name: 'Trial Method',
                        description: 'Test multiples until common denominator found'
                    }
                ],
                comparison: 'LCM method most efficient; product method works but creates larger expressions'
            },
            complex: {
                primaryMethod: 'LCD Method or Division Method',
                methods: [
                    {
                        name: 'LCD Method',
                        description: 'Multiply entire complex fraction by LCD of all internal fractions'
                    },
                    {
                        name: 'Division Method',
                        description: 'Simplify numerator and denominator separately, then divide'
                    },
                    {
                        name: 'Hybrid Method',
                        description: 'Simplify parts that are easy, use LCD for the rest'
                    }
                ],
                comparison: 'LCD method often faster; division method more intuitive. Choose based on structure'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard algebraic approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods may apply depending on structure'
            }],
            comparison: 'Choose method based on problem characteristics'
        };
    }
}

// Export the class
export default EnhancedRationalExpressionsWorkbook;
