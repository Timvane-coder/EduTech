// Enhanced Rational Inequalities Mathematical Workbook - Comprehensive Implementation
import * as math from 'mathjs';

export class EnhancedRationalInequalitiesWorkbook {
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
        this.initializeRationalInequalitySolvers();
        this.initializeRationalInequalityLessons();
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
            'lt': '<', 'gt': '>', 'eq': '=',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥',
            // Interval notation
            'openInterval': '(', 'closedInterval': '[',
            'leftBracket': '[', 'rightBracket': ']',
            'leftParen': '(', 'rightParen': ')'
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
                criticalBg: '#ffcccc',
                warningBg: '#fff3cd'
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
                criticalBg: '#f8d7da',
                warningBg: '#fff3cd'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeRationalInequalityLessons() {
        this.lessons = {
            rational_inequalities_intro: {
                title: "Introduction to Rational Inequalities",
                concepts: [
                    "Rational inequality: inequality involving rational expressions (fractions with polynomials)",
                    "General form: P(x)/Q(x) ≥ 0, P(x)/Q(x) ≤ 0, P(x)/Q(x) > 0, or P(x)/Q(x) < 0",
                    "Solution is typically a union of intervals",
                    "Must consider where denominator equals zero (excluded values)",
                    "Sign analysis is critical for solving"
                ],
                theory: "Rational inequalities require careful analysis of where the rational expression is positive, negative, or zero. The denominator creates restrictions (excluded values) and the numerator creates zeros. The solution involves testing intervals created by these critical points.",
                keyFormulas: {
                    "Standard Form": "P(x)/Q(x) ≥ 0 or P(x)/Q(x) ≤ 0 or > 0 or < 0",
                    "Critical Points": "Zeros of numerator and denominator",
                    "Test Point Method": "Test sign in each interval between critical points"
                },
                solvingSteps: [
                    "Move all terms to one side (get 0 on other side)",
                    "Combine into single rational expression",
                    "Factor numerator and denominator completely",
                    "Find critical points (zeros and undefined points)",
                    "Create sign chart or number line",
                    "Test signs in each interval",
                    "Write solution in interval notation",
                    "Check endpoint inclusion based on inequality type"
                ],
                applications: [
                    "Average cost analysis in economics",
                    "Drug concentration over time in medicine",
                    "Population dynamics with carrying capacity",
                    "Circuit analysis with varying resistance"
                ],
                criticalConcepts: {
                    "Excluded Values": "Points where denominator = 0 are NEVER in solution (even with ≥ or ≤)",
                    "Sign Changes": "Rational expression can only change sign at critical points",
                    "Endpoint Inclusion": "Include zeros of numerator only if inequality is ≥ or ≤",
                    "Interval Testing": "One test point per interval is sufficient"
                }
            },

            simple_rational_inequalities: {
                title: "Simple Rational Inequalities",
                concepts: [
                    "Form: (ax + b)/(cx + d) > 0 or < 0 or ≥ 0 or ≤ 0",
                    "One linear factor in numerator and denominator",
                    "Two critical points: one zero, one undefined point",
                    "Three intervals to test",
                    "Solution is typically one or two intervals"
                ],
                theory: "Simple rational inequalities have linear numerator and denominator. They create exactly two critical points and three regions to analyze.",
                keyFormulas: {
                    "Standard Form": "(ax + b)/(cx + d) ≥ 0",
                    "Zero of numerator": "x = -b/a",
                    "Undefined point": "x = -d/c",
                    "Sign Pattern": "Positive, negative, positive OR negative, positive, negative"
                },
                solvingSteps: [
                    "Ensure one side equals zero",
                    "Factor if needed",
                    "Find zero: set numerator = 0",
                    "Find undefined point: set denominator = 0",
                    "Plot critical points on number line",
                    "Test sign in each of the 3 intervals",
                    "Select intervals matching inequality",
                    "Write in interval notation with proper brackets"
                ],
                examples: [
                    "(x - 3)/(x + 2) > 0",
                    "(2x + 5)/(x - 1) ≤ 0",
                    "x/(x - 4) ≥ 0"
                ],
                commonPatterns: {
                    "Both factors same sign": "Positive for x < both or x > both",
                    "Factors opposite signs": "Negative between critical points, positive outside"
                }
            },

            compound_rational_inequalities: {
                title: "Compound Rational Inequalities",
                concepts: [
                    "Multiple factors in numerator and/or denominator",
                    "Form: (polynomial)/(polynomial) compared to 0",
                    "More than two critical points",
                    "Alternating sign pattern (usually)",
                    "Solution may be union of multiple intervals"
                ],
                theory: "When rational expressions have multiple factors, sign analysis becomes more complex. Each factor contributes to the overall sign, and the pattern alternates at each critical point (with some exceptions for repeated factors).",
                keyFormulas: {
                    "Factored Form": "(x - a)(x - b).../(x - c)(x - d)... compared to 0",
                    "Sign Rule": "Count negative factors to determine overall sign",
                    "Multiplicity": "Even multiplicity doesn't change sign, odd multiplicity does"
                },
                solvingSteps: [
                    "Move all terms to left side",
                    "Combine into single fraction",
                    "Factor numerator and denominator completely",
                    "Identify all critical points",
                    "Order critical points on number line",
                    "Create sign chart with all factors",
                    "Determine sign in each interval",
                    "Select intervals satisfying inequality",
                    "Write solution with proper notation"
                ],
                applications: [
                    "Profit optimization with multiple products",
                    "Chemical reaction rates",
                    "Electrical impedance analysis"
                ]
            },

            rational_inequalities_non_zero: {
                title: "Rational Inequalities Not Compared to Zero",
                concepts: [
                    "Form: P(x)/Q(x) > k or < k or ≥ k or ≤ k where k ≠ 0",
                    "Must rearrange to get 0 on one side",
                    "Combine rational expressions over common denominator",
                    "Then solve as standard rational inequality"
                ],
                theory: "When a rational inequality is not compared to zero, we must algebraically manipulate it to standard form before solving.",
                keyFormulas: {
                    "Transform": "P(x)/Q(x) > k becomes (P(x) - kQ(x))/Q(x) > 0",
                    "Common Denominator": "Combine all terms over single denominator",
                    "Simplify": "Factor the resulting numerator"
                },
                solvingSteps: [
                    "Move constant or expression to left side",
                    "Find common denominator",
                    "Combine into single rational expression",
                    "Simplify numerator",
                    "Factor completely",
                    "Solve as standard rational inequality"
                ],
                examples: [
                    "x/(x - 2) ≥ 3",
                    "(x + 1)/(x - 1) < 2",
                    "1/x > 1/(x + 1)"
                ]
            },

            polynomial_over_polynomial: {
                title: "Polynomial Over Polynomial Inequalities",
                concepts: [
                    "Numerator and denominator are polynomials of degree ≥ 2",
                    "May have multiple zeros and undefined points",
                    "Requires complete factoring",
                    "Complex sign patterns possible",
                    "Multiple intervals in solution common"
                ],
                theory: "Higher-degree rational inequalities require systematic factoring and careful sign analysis across many intervals.",
                keyFormulas: {
                    "General Form": "(anx^n + ... + a0)/(bmx^m + ... + b0) compared to 0",
                    "Factoring": "Factor both polynomials completely",
                    "Critical Points": "All zeros of numerator and denominator"
                },
                solvingSteps: [
                    "Ensure right side is zero",
                    "Factor numerator completely",
                    "Factor denominator completely",
                    "Find all zeros (numerator)",
                    "Find all undefined points (denominator)",
                    "Plot all critical points in order",
                    "Create comprehensive sign chart",
                    "Test intervals systematically",
                    "Compile solution intervals"
                ],
                specialCases: {
                    "Quadratic over Linear": "Up to 3 critical points",
                    "Quadratic over Quadratic": "Up to 4 critical points",
                    "Repeated Factors": "May not change sign at that point"
                }
            },

            absolute_value_rational: {
                title: "Absolute Value Rational Inequalities",
                concepts: [
                    "Form: |P(x)/Q(x)| > k or < k",
                    "Split into two cases based on absolute value",
                    "Requires solving two separate rational inequalities",
                    "Solution is union or intersection of two solutions"
                ],
                theory: "Absolute value creates two cases: the expression itself and its negative. Each case yields a rational inequality to solve.",
                keyFormulas: {
                    "|f(x)| > k": "f(x) > k OR f(x) < -k",
                    "|f(x)| < k": "f(x) < k AND f(x) > -k",
                    "Split": "Remove absolute value, solve both inequalities"
                },
                solvingSteps: [
                    "Identify absolute value structure",
                    "Split into two cases",
                    "Solve first rational inequality",
                    "Solve second rational inequality",
                    "Combine solutions (union for >, intersection for <)",
                    "Verify critical points"
                ]
            },

            sign_chart_method: {
                title: "Sign Chart Method for Rational Inequalities",
                concepts: [
                    "Systematic approach to determine sign of rational expression",
                    "Track sign of each factor across all intervals",
                    "Multiply signs to get overall sign",
                    "Visual representation of solution process"
                ],
                theory: "The sign chart method organizes the sign analysis by tracking each factor separately, then combining to find the overall sign in each interval.",
                keyFormulas: {
                    "Setup": "List all factors, mark critical points",
                    "Factor Signs": "Track + or - for each factor in each interval",
                    "Overall Sign": "Product of all factor signs",
                    "Solution": "Select intervals matching inequality"
                },
                solvingSteps: [
                    "Factor completely and identify critical points",
                    "Draw number line with critical points",
                    "List all factors (numerator and denominator)",
                    "Determine sign of each factor in each interval",
                    "Compute overall sign (multiply factor signs)",
                    "Select appropriate intervals",
                    "Handle endpoints based on inequality type"
                ],
                advantages: [
                    "Organized and systematic",
                    "Reduces errors",
                    "Clear visual representation",
                    "Works for complex expressions"
                ]
            },

            test_point_method: {
                title: "Test Point Method for Rational Inequalities",
                concepts: [
                    "Choose a test value in each interval",
                    "Substitute into original expression",
                    "Check if result satisfies inequality",
                    "Simpler for expressions that don't factor easily"
                ],
                theory: "Instead of tracking factor signs, test points directly evaluate the rational expression in each interval to determine where inequality holds.",
                keyFormulas: {
                    "Critical Points": "Find zeros and undefined points",
                    "Test Point": "Choose any value in interval (not critical point)",
                    "Evaluate": "Substitute test point into expression",
                    "Check": "Does result satisfy inequality?"
                },
                solvingSteps: [
                    "Find all critical points",
                    "Plot on number line to create intervals",
                    "Choose test point in each interval",
                    "Evaluate expression at each test point",
                    "Check which satisfy the inequality",
                    "Write solution using satisfying intervals",
                    "Handle endpoints appropriately"
                ],
                advantages: [
                    "Works when factoring is difficult",
                    "Straightforward computation",
                    "Good for numerical verification"
                ],
                disadvantages: [
                    "More computation than sign chart",
                    "Doesn't show structure as clearly"
                ]
            },

            interval_notation: {
                title: "Interval Notation for Rational Inequalities",
                concepts: [
                    "Express solution sets using interval notation",
                    "(a, b) means a < x < b (open interval)",
                    "[a, b] means a ≤ x ≤ b (closed interval)",
                    "∪ (union) combines multiple intervals",
                    "(-∞, a) or (a, ∞) for unbounded intervals"
                ],
                theory: "Interval notation provides a concise way to express solution sets that may consist of one or more intervals.",
                keyFormulas: {
                    "Open Interval": "(a, b) - endpoints NOT included",
                    "Closed Interval": "[a, b] - endpoints included",
                    "Half-Open": "[a, b) or (a, b]",
                    "Union": "(a, b) ∪ (c, d) - combines intervals",
                    "Infinity": "Always use ( or ), never [ or ]"
                },
                rules: [
                    "Use ( ) for < or >",
                    "Use [ ] for ≤ or ≥",
                    "NEVER include undefined points (denominator zeros)",
                    "Always use ( ) with ∞ or -∞",
                    "List intervals from left to right"
                ],
                examples: {
                    "Single interval": "(-2, 5]",
                    "Union": "(-∞, -3) ∪ (2, 7]",
                    "Multiple unions": "(-∞, -1) ∪ (1, 3) ∪ (4, ∞)"
                }
            },

            rational_inequality_word_problems: {
                title: "Word Problems Involving Rational Inequalities",
                concepts: [
                    "Translate real situations into rational inequalities",
                    "Identify variables and constraints",
                    "Set up inequality from problem conditions",
                    "Solve and interpret in context"
                ],
                theory: "Many real-world situations involve rates, ratios, or averages that lead to rational inequalities when constraints are applied.",
                problemTypes: {
                    "Average Cost": "When should average cost be below a threshold?",
                    "Concentration": "When is drug concentration in safe range?",
                    "Efficiency": "When does efficiency exceed required level?",
                    "Rate Problems": "When is combined rate sufficient?",
                    "Mixture Problems": "When is concentration in desired range?"
                },
                solutionStrategy: [
                    "Read carefully and identify what's being asked",
                    "Define variable(s)",
                    "Write rational expression for situation",
                    "Set up inequality from constraint",
                    "Solve rational inequality",
                    "Interpret solution in context",
                    "Check reasonableness and domain restrictions"
                ],
                commonScenarios: [
                    "Average cost per item must be below $X",
                    "Concentration must stay between A and B",
                    "Completion rate must exceed minimum",
                    "Efficiency ratio must be at least X%"
                ]
            },

            graphical_interpretation: {
                title: "Graphical Interpretation of Rational Inequalities",
                concepts: [
                    "Graph y = P(x)/Q(x)",
                    "Identify where graph is above/below x-axis",
                    "Vertical asymptotes at undefined points",
                    "x-intercepts at zeros of numerator",
                    "Visual confirmation of algebraic solution"
                ],
                theory: "Graphing the rational function allows visual identification of where the function is positive or negative, confirming the algebraic solution.",
                keyFeatures: {
                    "Vertical Asymptotes": "x = values where denominator = 0",
                    "x-intercepts": "x = values where numerator = 0",
                    "Horizontal Asymptote": "Depends on degrees of numerator/denominator",
                    "Sign Regions": "Graph above x-axis (positive), below x-axis (negative)"
                },
                solvingSteps: [
                    "Graph the rational function y = P(x)/Q(x)",
                    "Mark vertical asymptotes (undefined points)",
                    "Mark x-intercepts (zeros)",
                    "Identify where graph is above x-axis (y > 0)",
                    "Identify where graph is below x-axis (y < 0)",
                    "Match to inequality requirement",
                    "Express solution in interval notation"
                ],
                advantages: [
                    "Visual understanding",
                    "Confirms algebraic work",
                    "Shows behavior near asymptotes",
                    "Helps with complex expressions"
                ]
            }
        };
    }

    initializeRationalInequalitySolvers() {
        this.rationalInequalityTypes = {
            simple_rational_inequality: {
                patterns: [
                    /\(.*\)\/\(.*\)\s*[<>≤≥]\s*0/,
                    /rational.*inequality/i,
                    /\([\d\w\s+-]+\)\s*\/\s*\([\d\w\s+-]+\)/
                ],
                solver: this.solveSimpleRationalInequality.bind(this),
                name: 'Simple Rational Inequality',
                category: 'simple_rational',
                description: 'Solves (ax+b)/(cx+d) compared to 0'
            },

            compound_rational_inequality: {
                patterns: [
                    /\([^)]*\)\([^)]*\)\/\([^)]*\)/,
                    /compound.*rational/i
                ],
                solver: this.solveCompoundRationalInequality.bind(this),
                name: 'Compound Rational Inequality',
                category: 'compound_rational',
                description: 'Multiple factors in numerator or denominator'
            },

            rational_inequality_non_zero: {
                patterns: [
                    /\(.*\)\/\(.*\)\s*[<>≤≥]\s*[^0]/,
                    /rational.*not.*zero/i
                ],
                solver: this.solveRationalInequalityNonZero.bind(this),
                name: 'Rational Inequality (not compared to 0)',
                category: 'non_zero',
                description: 'P(x)/Q(x) compared to non-zero value'
            },

            polynomial_over_polynomial: {
                patterns: [
                    /polynomial.*polynomial/i,
                    /\(.*x\^2.*\)\/\(.*\)/
                ],
                solver: this.solvePolynomialOverPolynomial.bind(this),
                name: 'Polynomial Over Polynomial',
                category: 'polynomial_rational',
                description: 'Higher degree polynomials in rational inequality'
            },

            absolute_value_rational: {
                patterns: [
                    /\|.*\/.*\|/,
                    /abs\(.*\/.*\)/i,
                    /absolute.*rational/i
                ],
                solver: this.solveAbsoluteValueRational.bind(this),
                name: 'Absolute Value Rational Inequality',
                category: 'absolute_rational',
                description: 'Involves absolute value of rational expression'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            simple_rational: {
                'Find critical points': [
                    'Forgetting to find where denominator = 0',
                    'Including undefined points in solution',
                    'Setting entire expression = 0 instead of just numerator'
                ],
                'Test intervals': [
                    'Not testing all intervals',
                    'Arithmetic errors in evaluating test points',
                    'Choosing critical points as test points'
                ],
                'Write solution': [
                    'Using wrong brackets (including excluded values)',
                    'Forgetting union symbol between intervals',
                    'Including endpoints when inequality is strict'
                ]
            },
            compound_rational: {
                'Factor completely': [
                    'Incomplete factoring',
                    'Missing factors',
                    'Factoring errors'
                ],
                'Sign analysis': [
                    'Incorrect sign determination',
                    'Forgetting negative from denominator',
                    'Not accounting for all factors'
                ],
                'Combine intervals': [
                    'Missing intervals in solution',
                    'Incorrect union of intervals',
                    'Wrong endpoint inclusion'
                ]
            },
            non_zero: {
                'Rearrange to zero': [
                    'Algebraic errors when moving terms',
                    'Sign errors in rearrangement',
                    'Not finding common denominator correctly'
                ],
                'Simplify': [
                    'Not simplifying numerator after combining',
                    'Missing cancellation opportunities',
                    'Creating new errors in simplification'
                ]
            }
        };

        this.errorPrevention = {
            excluded_values: {
                reminder: 'NEVER include values where denominator = 0, even with ≥ or ≤',
                method: 'Always mark excluded values with open circles or parentheses'
            },
            endpoint_inclusion: {
                reminder: 'Include zeros of numerator only if inequality is ≥ or ≤',
                method: 'Check inequality symbol before deciding on brackets'
            },
            sign_testing: {
                reminder: 'Test BETWEEN critical points, not AT them',
                method: 'Choose convenient test values (often integers)'
            },
            interval_notation: {
                reminder: 'Always use parentheses with ∞ or -∞',
                method: 'Double-check all brackets match inequality type'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why rational inequalities behave this way',
                language: 'intuitive understanding of sign changes'
            },
            procedural: {
                focus: 'Exact steps to find critical points and test intervals',
                language: 'step-by-step systematic approach'
            },
            visual: {
                focus: 'Number line, sign charts, and graphs',
                language: 'visual representation of solutions'
            },
            algebraic: {
                focus: 'Formal properties and theorems',
                language: 'precise mathematical notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple terms',
                detail: 'essential steps only',
                examples: 'simple rational inequalities with integers'
            },
            intermediate: {
                vocabulary: 'standard mathematical language',
                detail: 'main steps with explanations',
                examples: 'variety of rational inequalities'
            },
            ELI5: {
                vocabulary: 'everyday language with analogies',
                detail: 'every step explained simply',
                examples: 'concrete situations',
                analogies: true,
                visualization: 'simple pictures and number lines'
            },
            detailed: {
                vocabulary: 'complete mathematical terminology',
                detail: 'comprehensive with all reasoning',
                examples: 'complex cases and edge cases'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced progression'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            average_cost: {
                scenario: "Manufacturing Cost Analysis",
                context: "A company's average cost per item depends on production volume",
                description: "When is average cost below target?",
                examples: [
                    "Average cost C(x) = (5000 + 20x)/x must be ≤ $30",
                    "When should company produce to keep average cost under $25?"
                ],
                setup: "Forms rational inequality with cost function",
                interpretation: "Solution gives production levels meeting cost target"
            },
            drug_concentration: {
                scenario: "Medical Dosage",
                context: "Drug concentration in bloodstream over time",
                description: "When is concentration in therapeutic range?",
                examples: [
                    "Concentration C(t) = (5t)/(t^2 + 1) must be between 0.5 and 2",
                    "When is medication effective?"
                ],
                setup: "Two rational inequalities (lower and upper bounds)",
                interpretation: "Time window when drug is effective"
            },
            population_dynamics: {
                scenario: "Population Growth with Limit",
                context: "Population growth with carrying capacity",
                description: "When does population exceed threshold?",
                examples: [
                    "Population P(t) = (1000t)/(t + 5) must be ≥ 400",
                    "When is population sustainable?"
                ],
                setup: "Rational inequality with limiting behavior",
                interpretation: "Time periods meeting population criteria"
            },
            efficiency_ratio: {
                scenario: "Machine Efficiency",
                context: "Efficiency varies with operating speed",
                description: "When is efficiency acceptable?",
                examples: [
                    "Efficiency E(v) = (100v)/(v + 10) must be ≥ 80%",
                    "Acceptable operating speeds?"
                ],
                setup: "Rational inequality from efficiency formula",
                interpretation: "Range of speeds meeting efficiency requirement"
            },
            mixture_problem: {
                scenario: "Chemical Concentration",
                context: "Mixing solutions to achieve target concentration",
                description: "When is mixture concentration in range?",
                examples: [
                    "Concentration (2x + 5)/(x + 10) must be between 0.3 and 0.7",
                    "How much to add for proper concentration?"
                ],
                setup: "Rational inequality from mixture ratio",
                interpretation: "Amount to mix for desired concentration"
            },
            electrical_circuit: {
                scenario: "Circuit Resistance",
                context: "Total resistance in parallel circuit",
                description: "When is total resistance in acceptable range?",
                examples: [
                    "Total resistance must be between 5Ω and 20Ω",
                    "Valid resistor values?"
                ],
                setup: "Rational inequality from resistance formula",
                interpretation: "Component values meeting specifications"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            simple_rational: {
                skills: [
                    'Solving linear equations',
                    'Basic fraction operations',
                    'Plotting on number line',
                    'Understanding inequality symbols',
                    'Testing values in expressions'
                ],
                priorKnowledge: [
                    'Linear inequalities',
                    'Fraction arithmetic',
                    'Concept of undefined values',
                    'Interval notation basics'
                ],
                checkQuestions: [
                    'Solve: 2x + 3 = 0',
                    'What value makes x + 5 undefined?',
                    'Is 3 > 0 true or false?',
                    'What does (2, 5] mean in interval notation?'
                ]
            },
            compound_rational: {
                skills: [
                    'Factoring polynomials',
                    'Finding zeros of polynomials',
                    'Sign analysis with multiple factors',
                    'Creating sign charts',
                    'Working with multiple critical points'
                ],
                priorKnowledge: [
                    'Simple rational inequalities',
                    'Polynomial factoring techniques',
                    'Zero product property',
                    'Sign patterns of polynomials'
                ],
                checkQuestions: [
                    'Factor: x^2 - 5x + 6',
                    'Find zeros of (x-2)(x+3)',
                    'If x = 5, is (x-2) positive or negative?',
                    'How many intervals created by 3 critical points?'
                ]
            },
            non_zero: {
                skills: [
                    'Algebraic manipulation',
                    'Finding common denominators',
                    'Rearranging equations',
                    'Simplifying rational expressions',
                    'All simple rational inequality skills'
                ],
                priorKnowledge: [
                    'Rational expression operations',
                    'Equation rearrangement',
                    'Like terms and combining',
                    'Sign preservation in algebra'
                ],
                checkQuestions: [
                    'Rearrange x/2 = 3 to get 0 on one side',
                    'Find LCD of 1/x and 1/(x+1)',
                    'Simplify: x/(x-1) - 2',
                    'What is (x-6)/3 with 0 on right side?'
                ]
            },
            polynomial_rational: {
                skills: [
                    'Advanced polynomial factoring',
                    'Handling quadratic and higher polynomials',
                    'Complex sign analysis',
                    'Managing many critical points',
                    'Systematic organization'
                ],
                priorKnowledge: [
                    'Compound rational inequalities',
                    'Quadratic formula',
                    'Synthetic division',
                    'Polynomial behavior'
                ],
                checkQuestions: [
                    'Factor: x^2 - 7x + 12',
                    'Find zeros of x^2 - 4x + 4',
                    'How does (x-1)^2 affect sign?',
                    'Factor: x^3 - 8'
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            number_line: {
                description: 'Visual representation on horizontal line',
                suitableFor: ['all types'],
                elements: [
                    'Critical points marked',
                    'Open circles for excluded values',
                    'Closed circles for included values',
                    'Shaded regions for solution intervals'
                ],
                advantages: [
                    'Clear visualization',
                    'Easy to see intervals',
                    'Intuitive representation'
                ]
            },
            sign_chart: {
                description: 'Table showing sign of each factor and overall sign',
                suitableFor: ['compound_rational', 'polynomial_rational'],
                elements: [
                    'Columns for each interval',
                    'Rows for each factor',
                    'Bottom row for overall sign',
                    'Critical points marked as boundaries'
                ],
                advantages: [
                    'Systematic approach',
                    'Tracks all factors',
                    'Reduces errors',
                    'Good for complex expressions'
                ]
            },
            graph: {
                description: 'Graph of y = P(x)/Q(x)',
                suitableFor: ['all types', 'especially polynomial_rational'],
                elements: [
                    'Vertical asymptotes',
                    'x-intercepts',
                    'Horizontal asymptote',
                    'Regions where y > 0 or y < 0'
                ],
                advantages: [
                    'Visual confirmation',
                    'Shows behavior',
                    'Identifies all features',
                    'Good for understanding'
                ]
            },
            interval_diagram: {
                description: 'Number line with test point evaluation',
                suitableFor: ['simple_rational', 'compound_rational'],
                elements: [
                    'Intervals marked',
                    'Test points shown',
                    'Signs indicated',
                    'Solution highlighted'
                ],
                advantages: [
                    'Clear test process',
                    'Shows work explicitly',
                    'Easy to verify'
                ]
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            example_1: {
                problem: "(x - 3)/(x + 2) > 0",
                type: "simple_rational",
                fullSolution: {
                    step1: "Identify critical points: x = 3 (zero), x = -2 (undefined)",
                    step2: "Plot on number line: -2 and 3",
                    step3: "Three intervals: (-∞,-2), (-2,3), (3,∞)",
                    step4: "Test x = -3: (-)/(-)  = + ✓",
                    step5: "Test x = 0: (-)/(+) = - ✗",
                    step6: "Test x = 4: (+)/(+) = + ✓",
                    solution: "(-∞, -2) ∪ (3, ∞)",
                    explanation: "Expression positive when both factors same sign"
                },
                keyInsights: [
                    "Two critical points create three intervals",
                    "Excluded value at x = -2 uses open interval",
                    "Zero at x = 3 excluded for strict inequality"
                ]
            },
            example_2: {
                problem: "(2x + 5)/(x - 1) ≤ 0",
                type: "simple_rational",
                fullSolution: {
                    step1: "Critical points: x = -5/2 (zero), x = 1 (undefined)",
                    step2: "Plot: -2.5 and 1",
                    step3: "Intervals: (-∞,-2.5), (-2.5,1), (1,∞)",
                    step4: "Test x = -3: (-)/(-)  = + ✗",
                    step5: "Test x = 0: (+)/(-) = - ✓",
                    step6: "Test x = 2: (+)/(+) = + ✗",
                    solution: "[-5/2, 1)",
                    explanation: "Negative between critical points; include zero, exclude undefined"
                },
                keyInsights: [
                    "≤ means include zero at x = -5/2",
                    "Never include undefined point at x = 1",
                    "Use closed bracket at -5/2, open at 1"
                ]
            },
            example_3: {
                problem: "(x - 1)(x + 3)/(x - 2) ≥ 0",
                type: "compound_rational",
                fullSolution: {
                    step1: "Critical points: x = 1, x = -3 (zeros), x = 2 (undefined)",
                    step2: "Order: -3, 1, 2",
                    step3: "Four intervals: (-∞,-3), (-3,1), (1,2), (2,∞)",
                    step4: "Sign chart for each factor",
                    step5: "Combine signs to find overall sign",
                    step6: "Select non-negative intervals",
                    solution: "(-∞, -3] ∪ [1, 2) ∪ (2, ∞)",
                    explanation: "Include zeros, exclude undefined point"
                },
                keyInsights: [
                    "Multiple factors require sign chart",
                    "Three critical points create four intervals",
                    "≥ includes zeros but never undefined points"
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            including_undefined: {
                misconception: "Include where denominator = 0 for ≥ or ≤",
                truth: "NEVER include undefined points, regardless of inequality symbol",
                explanation: "Division by zero is undefined; these points cannot be in solution",
                correction: "Always use ( ) around undefined points",
                example: "For 1/x ≥ 0, x = 0 is excluded even though inequality is ≥"
            },
            multiplying_by_variable: {
                misconception: "Multiply both sides by denominator to clear it",
                truth: "Cannot multiply by expression that might be negative without considering sign",
                explanation: "Multiplying by negative reverses inequality; denominator sign varies",
                correction: "Move all to one side, keep as rational expression, analyze signs",
                example: "x/(x-1) > 2 should NOT become x > 2(x-1) directly"
            },
            wrong_intervals: {
                misconception: "Solution is always a single interval",
                truth: "Solution often consists of multiple disjoint intervals",
                explanation: "Sign changes at critical points create multiple solution regions",
                correction: "Use union notation to combine separate intervals",
                example: "(x-1)/(x+1) > 0 has solution (-∞,-1) ∪ (1,∞), not a single interval"
            },
            ignoring_zeros: {
                misconception: "Only undefined points matter",
                truth: "Both zeros and undefined points are critical",
                explanation: "Zeros determine where expression = 0, also cause sign changes",
                correction: "Find and plot both zeros and undefined points",
                example: "For (x-3)/(x+2) > 0, both x=3 and x=-2 are critical"
            },
            sign_errors: {
                misconception: "Expression automatically positive right of undefined point",
                truth: "Sign depends on all factors, must test each interval",
                explanation: "Multiple factors interact to determine overall sign",
                correction: "Always test or use sign chart; don't assume patterns",
                example: "(x-5)/(x-2) is negative between 2 and 5, despite being right of asymptote"
            },
            bracket_confusion: {
                misconception: "Use [ ] for ≥ on all critical points",
                truth: "[ ] only for zeros when ≥ or ≤, always ( ) for undefined",
                explanation: "Brackets indicate inclusion; can only include where expression is defined and satisfies condition",
                correction: "Check: is point defined? Does it satisfy inequality?",
                example: "x/(x-2) ≥ 0: use [0,... but (2,... even though inequality is ≥"
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            sign_changes: {
                analogy: "Like a roller coaster",
                explanation: "The expression goes from positive to negative (and back) only at critical points, like a roller coaster only changes from going up to down at peaks and valleys",
                suitableFor: ['all_types'],
                ELI5: "Imagine walking along a path that goes up and down. You only change from going uphill to downhill at the top of hills or bottom of valleys. Critical points are like those tops and bottoms!"
            },
            undefined_points: {
                analogy: "Like broken bridges",
                explanation: "Undefined points are like broken bridges on a road - you can't cross them no matter what. The road (solution) can be on one side or the other, or both sides, but never on the bridge itself.",
                suitableFor: ['all_types'],
                ELI5: "Think of walking on a path with a broken bridge. You can walk on the left side or right side of the bridge, but you can never stand on the broken bridge itself! That's like undefined points."
            },
            interval_testing: {
                analogy: "Like checking weather in different zones",
                explanation: "Just as weather can be different in different zones of a city, the rational expression can be positive or negative in different intervals. We check one spot in each zone to know the weather (sign) in that whole zone.",
                suitableFor: ['all_types'],
                ELI5: "Imagine the number line is a long street with different neighborhoods. We need to check if each neighborhood is 'happy' (positive) or 'sad' (negative). We just need to ask one person in each neighborhood to know how the whole neighborhood feels!"
            },
            solution_union: {
                analogy: "Like collecting all the good parts",
                explanation: "Solution intervals are like collecting all the pieces of fruit that are ripe enough - there might be several separate bunches on the tree, and we gather all of them.",
                suitableFor: ['compound_rational', 'polynomial_rational'],
                ELI5: "Imagine picking ripe apples from a tree. Some good apples are on this branch, some on that branch. You collect all the good ones from different places and put them together!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            simple_rational: {
                level1: "Start by identifying where the expression equals zero and where it's undefined.",
                level2: "Set the numerator equal to zero to find zeros; set denominator equal to zero for undefined points.",
                level3: "Plot these critical points on a number line and choose test points in each interval.",
                level4: "Evaluate the expression at each test point to determine the sign in that interval."
            },
            compound_rational: {
                level1: "Factor both numerator and denominator completely first.",
                level2: "Find all zeros (from numerator) and undefined points (from denominator).",
                level3: "Create a sign chart with rows for each factor.",
                level4: "Determine the sign of each factor in each interval, then multiply to get overall sign."
            },
            non_zero: {
                level1: "First, move all terms to one side to get 0 on the other side.",
                level2: "Combine into a single rational expression using common denominator.",
                level3: "Simplify the numerator after combining.",
                level4: "Now solve as a standard rational inequality."
            },
            polynomial_rational: {
                level1: "Start by factoring both polynomials as completely as possible.",
                level2: "Identify ALL critical points from all factors.",
                level3: "Organize with a sign chart due to multiple factors.",
                level4: "Systematically determine signs and select appropriate intervals."
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Solve: (x - 2)/(x + 1) > 0",
                    answer: "(-∞, -1) ∪ (2, ∞)",
                    assesses: "simple_rational",
                    difficulty: "basic"
                },
                {
                    question: "Solve: 1/x ≤ 2",
                    answer: "Needs rearrangement first",
                    assesses: "non_zero",
                    difficulty: "intermediate"
                },
                {
                    question: "Solve: (x-1)(x+2)/(x-3) ≥ 0",
                    answer: "[-2, 1] ∪ (3, ∞)",
                    assesses: "compound_rational",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "Where is (x-5)/(x+3) undefined?",
                    options: ["x = 5", "x = -3", "x = 0", "Nowhere"],
                    correct: "x = -3",
                    explanation: "Undefined where denominator equals zero"
                },
                {
                    question: "For (x-2)/(x+1) ≥ 0, should x = 2 be included?",
                    options: ["Yes, because ≥", "No, because denominator", "Yes, because numerator", "No, never include endpoints"],
                    correct: "Yes, because ≥",
                    explanation: "x = 2 makes expression = 0, which satisfies ≥"
                },
                {
                    question: "For (x-4)/(x+2) ≥ 0, should x = -2 be included?",
                    options: ["Yes, because ≥", "No, because undefined", "Yes, at boundary", "Depends on test"],
                    correct: "No, because undefined",
                    explanation: "Never include undefined points, even with ≥"
                }
            ],
            summative: [
                {
                    question: "Solve: (x^2 - 4)/(x^2 - 9) ≤ 0",
                    answer: "(-3, -2] ∪ [2, 3)",
                    showsWork: true,
                    rubric: {
                        factor: 2,
                        critical_points: 2,
                        sign_analysis: 2,
                        solution: 2,
                        notation: 2
                    }
                },
                {
                    question: "Solve: (x-1)/(x+2) < 3",
                    answer: "(-∞, -2) ∪ (-7/2, ∞)",
                    showsWork: true,
                    rubric: {
                        rearrange: 2,
                        simplify: 2,
                        critical_points: 2,
                        solve: 2,
                        verify: 2
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "(x-3)/(x+1) > 0",
                    "x/(x-2) ≥ 0",
                    "(x+5)/(x-4) < 0",
                    "1/(x+3) ≤ 0"
                ],
                medium: [
                    "(x-2)/(x+3) ≤ 1",
                    "(2x+1)/(x-4) > 3",
                    "(x^2-9)/(x-1) ≥ 0",
                    "(x+2)(x-5)/(x-3) < 0"
                ],
                hard: [
                    "(x^2-4x+3)/(x^2-5x+6) > 0",
                    "(x-1)/(x+2) ≥ (x+3)/(x-4)",
                    "|(x-2)/(x+1)| < 3",
                    "(x^3-8)/(x^2-4) ≤ 0"
                ]
            },
            byObjective: {
                canIdentifyCriticalPoints: [
                    "Find critical points of (x-3)/(x+2)",
                    "Find undefined points of 1/(x^2-4)",
                    "Find zeros of (x^2-9)/(x-1)"
                ],
                canCreateSignChart: [
                    "Create sign chart for (x-2)(x+1)/(x-3)",
                    "Analyze signs of (x+4)/(x-1)(x+2)"
                ],
                canWriteIntervalNotation: [
                    "Express solution for x ∈ (-∞,2) ∪ (5,∞)",
                    "Write x > 3 and x ≠ 5 in interval notation"
                ],
                canSolveWordProblems: [
                    "Average cost (5000+20x)/x must be ≤ 30. Find x.",
                    "Concentration 10t/(t+2) must be ≥ 4. Find t."
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "compare_to_zero": "Already in standard form - find critical points",
                "compare_to_nonzero": "Rearrange: move all to left side and combine",
                "absolute_value": "Split into two cases",
                "can_factor": "Factor completely before proceeding",
                "cannot_factor": "Use quadratic formula to find zeros if needed",
                "many_factors": "Use sign chart method",
                "few_factors": "Test point method acceptable"
            },
            whenToUseWhat: {
                sign_chart: "When expression has multiple factors",
                test_point: "When expression is simple or doesn't factor",
                graphical: "To verify solution or understand behavior",
                algebraic: "Primary method for formal solution"
            },
            methodSelection: {
                factorsToConsider: [
                    "Number of factors in expression",
                    "Whether compared to zero or other value",
                    "Complexity of polynomials",
                    "Presence of absolute values",
                    "Context (algebraic vs. applied problem)"
                ],
                generalApproach: [
                    "1. Get zero on one side",
                    "2. Combine into single rational expression",
                    "3. Factor numerator and denominator",
                    "4. Find all critical points",
                    "5. Analyze signs (chart or test)",
                    "6. Select appropriate intervals",
                    "7. Write in interval notation"
                ]
            },
            optimizationTips: {
                "Factor first": "Always factor completely before finding critical points",
                "Organize critical points": "List in order on number line before testing",
                "Choose good test points": "Use integers when possible for easier arithmetic",
                "Be systematic": "Use sign chart for complex expressions to avoid errors",
                "Check endpoints": "Carefully determine bracket type for each endpoint"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Simple Rational Sprint",
                    timeLimit: 120,
                    problems: [
                        "(x-1)/(x+2) > 0",
                        "(x+3)/(x-4) < 0",
                        "x/(x-5) ≥ 0",
                        "(2x-6)/(x+1) ≤ 0"
                    ]
                },
                {
                    name: "Critical Points Challenge",
                    timeLimit: 90,
                    problems: [
                        "Find all critical points of (x^2-9)/(x^2-16)",
                        "Find critical points of (x-1)(x+3)/(x-2)(x+4)",
                        "Find zeros and undefined points of (x^2-4x+3)/(x^2-5x+6)"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Inequality",
                    problem: "A rational inequality has solution (-∞,-2) ∪ (3,∞)",
                    question: "What could the inequality be?",
                    hints: [
                        "Think about where sign changes occur",
                        "Critical points are at -2 and 3",
                        "Expression is positive outside these points"
                    ],
                    sampleSolution: "(x-3)/(x+2) > 0"
                },
                {
                    name: "Endpoint Detective",
                    problem: "Solution is [-3, 2) ∪ (5, ∞)",
                    question: "What do the different brackets tell you?",
                    solution: "x=-3 is a zero (included), x=2 is undefined (excluded), x=5 is undefined (excluded), inequality is ≥"
                }
            ],
            applications: [
                {
                    scenario: "Break-Even Analysis",
                    problem: "Average cost is (10000 + 50x)/x. When is it below $100 per unit?",
                    equation: "(10000 + 50x)/x < 100",
                    solution: "x > 200 units"
                },
                {
                    scenario: "Drug Effectiveness",
                    problem: "Concentration C(t) = 20t/(t^2+4) must be ≥ 2.5 mg/L. When is drug effective?",
                    equation: "20t/(t^2+4) ≥ 2.5",
                    solution: "[2, 4] hours after administration"
                },
                {
                    scenario: "Efficiency Requirements",
                    problem: "Machine efficiency E(s) = 100s/(s+15) must be ≥ 80%. Find acceptable speeds.",
                    equation: "100s/(s+15) ≥ 80",
                    solution: "s ≥ 60 rpm"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "(x-2)/(x+1) > 0",
                        "Critical points: x = 2, x = -1",
                        "Test x = 0: (-2)/(1) = -2, negative ✗",
                        "Solution: (2, ∞)"  // ERROR: forgot interval left of -1
                    ],
                    correctAnswer: "(-∞, -1) ∪ (2, ∞)",
                    errorType: "Missing interval in solution"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "(x-3)/(x-5) ≥ 0",
                        "Critical points: x = 3, x = 5",
                        "Test intervals, expression positive for x ≥ 5 and x ≤ 3",
                        "Solution: (-∞, 3] ∪ [5, ∞)"  // ERROR: included x=5
                    ],
                    correctAnswer: "(-∞, 3] ∪ (5, ∞)",
                    errorType: "Included undefined point"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "1/x > 2",
                        "Multiply both sides by x: 1 > 2x",  // ERROR: didn't consider sign of x
                        "x < 1/2"
                    ],
                    correctAnswer: "(0, 1/2)",
                    errorType: "Multiplied by variable without considering sign"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveRationalInequalityProblem(config) {
        const { inequality, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseRationalInequality(inequality, scenario, parameters, problemType, context);
            this.currentSolution = this.solveRationalInequality_Internal(this.currentProblem);
            this.solutionSteps = this.generateRationalInequalitySteps(this.currentProblem, this.currentSolution);
            this.generateRationalInequalityGraphData();
            this.generateRationalInequalityWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionIntervals: this.currentSolution?.solutionIntervals,
                intervalNotation: this.currentSolution?.intervalNotation
            };

        } catch (error) {
            throw new Error(`Failed to solve rational inequality: ${error.message}`);
        }
    }

    parseRationalInequality(inequality, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = inequality ? this.cleanMathExpression(inequality) : '';

        if (problemType && this.rationalInequalityTypes[problemType]) {
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

        for (const [type, config] of Object.entries(this.rationalInequalityTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractRationalInequalityParameters(match, type);

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

        if (parameters.numerator || parameters.denominator) {
            return {
                originalInput: inequality || 'Rational inequality with given parameters',
                cleanInput: cleanInput,
                type: 'simple_rational_inequality',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize rational inequality type from: ${inequality || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/≠/g, '!=')
            .trim();
    }

    extractRationalInequalityParameters(match, type) {
        const params = {};
        if (!match) return params;

        // Extract based on inequality type
        // This would need custom parsing logic for each type
        // For now, return empty params and rely on explicit parameter passing

        return params;
    }

    solveRationalInequality_Internal(problem) {
        const solver = this.rationalInequalityTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for rational inequality type: ${problem.type}`);
        }

        return solver(problem);
    }

    // RATIONAL INEQUALITY SOLVERS

    solveSimpleRationalInequality(problem) {
        // Example: (x-3)/(x+2) > 0
        const { numerator, denominator, inequality } = problem.parameters;

        // Find critical points
        const zero = this.findZero(numerator || "(x-3)");
        const undefined = this.findZero(denominator || "(x+2)");

        // Create intervals
        const criticalPoints = [undefined, zero].sort((a, b) => a - b);
        const intervals = this.createIntervals(criticalPoints);

        // Test each interval
        const signs = intervals.map(interval => 
            this.testInterval(interval, numerator, denominator)
        );

        // Select intervals based on inequality
        const inequalitySymbol = inequality || '>';
        const solutionIntervals = this.selectIntervals(intervals, signs, inequalitySymbol, zero, undefined);

        return {
            type: 'Simple Rational Inequality',
            inequality: problem.cleanInput || `${numerator}/${denominator} ${inequalitySymbol} 0`,
            criticalPoints: {
                zero: zero,
                undefined: undefined
            },
            intervals: intervals,
            signs: signs,
            solutionIntervals: solutionIntervals,
            intervalNotation: this.formatIntervalNotation(solutionIntervals),
            category: 'simple_rational'
        };
    }

    solveCompoundRationalInequality(problem) {
        return {
            type: 'Compound Rational Inequality',
            approach: 'Factor completely, find all critical points, use sign chart',
            category: 'compound_rational',
            note: 'Multiple factors require systematic sign analysis'
        };
    }

    solveRationalInequalityNonZero(problem) {
        return {
            type: 'Rational Inequality (not compared to 0)',
            approach: 'Rearrange to standard form: move all terms to one side',
            category: 'non_zero',
            steps: [
                'Move constant/expression to left side',
                'Combine over common denominator',
                'Simplify numerator',
                'Solve as standard rational inequality'
            ]
        };
    }

    solvePolynomialOverPolynomial(problem) {
        return {
            type: 'Polynomial Over Polynomial',
            approach: 'Factor both polynomials, find all critical points, use sign chart',
            category: 'polynomial_rational',
            note: 'May have many critical points requiring careful organization'
        };
    }

    solveAbsoluteValueRational(problem) {
        return {
            type: 'Absolute Value Rational Inequality',
            approach: 'Split into two cases based on absolute value definition',
            category: 'absolute_rational',
            cases: [
                'Case 1: Expression without absolute value',
                'Case 2: Negative of expression'
            ],
            note: 'Combine solutions appropriately (union or intersection)'
        };
    }

    // HELPER METHODS FOR SOLVING

    findZero(expression) {
        // Simplified: extract linear factor zero
        // Example: "(x-3)" returns 3
        const match = expression.match(/x\s*-\s*(\d+)/);
        if (match) return parseFloat(match[1]);
        
        const match2 = expression.match(/x\s*\+\s*(\d+)/);
        if (match2) return -parseFloat(match2[1]);

        return 0; // Default
    }

    createIntervals(criticalPoints) {
        const intervals = [];
        intervals.push({ start: -Infinity, end: criticalPoints[0], label: `(-∞, ${criticalPoints[0]})` });
        
        for (let i = 0; i < criticalPoints.length - 1; i++) {
            intervals.push({
                start: criticalPoints[i],
                end: criticalPoints[i + 1],
                label: `(${criticalPoints[i]}, ${criticalPoints[i + 1]})`
            });
        }

        intervals.push({
            start: criticalPoints[criticalPoints.length - 1],
            end: Infinity,
            label: `(${criticalPoints[criticalPoints.length - 1]}, ∞)`
        });

        return intervals;
    }

    testInterval(interval, numerator, denominator) {
        // Choose test point in middle of interval
        let testPoint;
        if (interval.start === -Infinity) {
            testPoint = interval.end - 1;
        } else if (interval.end === Infinity) {
            testPoint = interval.start + 1;
        } else {
            testPoint = (interval.start + interval.end) / 2;
        }

        // Evaluate sign (simplified)
        const numSign = this.evaluateFactorSign(numerator, testPoint);
        const denSign = this.evaluateFactorSign(denominator, testPoint);

        return {
            testPoint,
            numeratorSign: numSign,
            denominatorSign: denSign,
            overallSign: numSign * denSign > 0 ? 'positive' : 'negative'
        };
    }

    evaluateFactorSign(factor, value) {
        // Simplified evaluation
        // This would need proper parsing and evaluation
        // For now, return positive or negative based on heuristic
        return value > 0 ? 1 : -1;
    }

    selectIntervals(intervals, signs, inequalitySymbol, zero, undefined) {
        const solution = [];

        intervals.forEach((interval, index) => {
            const sign = signs[index].overallSign;
            let include = false;

            if (inequalitySymbol === '>' || inequalitySymbol === '>=') {
                include = sign === 'positive';
            } else if (inequalitySymbol === '<' || inequalitySymbol === '<=') {
                include = sign === 'negative';
            }

            if (include) {
                let leftBracket = '(';
                let rightBracket = ')';

                // Handle left endpoint
                if (interval.start === zero && (inequalitySymbol === '>=' || inequalitySymbol === '<=')) {
                    leftBracket = '[';
                }
                if (interval.start === undefined) {
                    leftBracket = '('; // Always open for undefined
                }

                // Handle right endpoint
                if (interval.end === zero && (inequalitySymbol === '>=' || inequalitySymbol === '<=')) {
                    rightBracket = ']';
                }
                if (interval.end === undefined) {
                    rightBracket = ')'; // Always open for undefined
                }

                solution.push({
                    start: interval.start,
                    end: interval.end,
                    leftBracket,
                    rightBracket,
                    label: `${leftBracket}${interval.start === -Infinity ? '-∞' : interval.start}, ${interval.end === Infinity ? '∞' : interval.end}${rightBracket}`
                });
            }
        });

        return solution;
    }

    formatIntervalNotation(intervals) {
        if (intervals.length === 0) return '∅ (no solution)';
        return intervals.map(iv => iv.label).join(' ∪ ');
    }

    // STEP GENERATION

    generateRationalInequalitySteps(problem, solution) {
        let baseSteps = this.generateBaseRationalInequalitySteps(problem, solution);

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

    generateBaseRationalInequalitySteps(problem, solution) {
        const steps = [];
        const { type } = problem;

        // Step 1: Given inequality
        steps.push({
            stepNumber: 1,
            step: 'Given inequality',
            description: 'Start with the rational inequality',
            expression: solution.inequality || problem.cleanInput,
            reasoning: 'This is a rational inequality requiring sign analysis',
            goalStatement: 'Find where the rational expression satisfies the inequality'
        });

        // Step 2: Identify critical points
        if (solution.criticalPoints) {
            steps.push({
                stepNumber: 2,
                step: 'Find critical points',
                description: 'Find zeros and undefined points',
                zeros: `Numerator = 0 at x = ${solution.criticalPoints.zero}`,
                undefined: `Denominator = 0 at x = ${solution.criticalPoints.undefined}`,
                reasoning: 'Critical points are where expression equals zero or is undefined',
                criticalValues: [solution.criticalPoints.zero, solution.criticalPoints.undefined]
            });
        }

        // Step 3: Create intervals
        if (solution.intervals) {
            steps.push({
                stepNumber: 3,
                step: 'Create intervals',
                description: 'Plot critical points and create test intervals',
                intervals: solution.intervals.map(iv => iv.label).join(', '),
                reasoning: 'Sign can only change at critical points',
                numberLine: 'Plot points on number line to visualize intervals'
            });
        }

        // Step 4: Test intervals
        if (solution.signs) {
            const testDetails = solution.intervals.map((interval, idx) => {
                const sign = solution.signs[idx];
                return `${interval.label}: test x = ${sign.testPoint}, sign is ${sign.overallSign}`;
            }).join('; ');

            steps.push({
                stepNumber: 4,
                step: 'Test intervals',
                description: 'Determine sign in each interval',
                testDetails: testDetails,
                reasoning: 'Evaluate expression at test points to determine sign pattern',
                method: 'Choose one test value in each interval'
            });
        }

        // Step 5: Select solution intervals
        if (solution.solutionIntervals) {
            steps.push({
                stepNumber: 5,
                step: 'Select solution intervals',
                description: 'Choose intervals satisfying the inequality',
                selectedIntervals: solution.solutionIntervals.map(iv => iv.label).join(' ∪ '),
                reasoning: 'Select intervals where sign matches inequality requirement',
                endpointNote: 'Check endpoint inclusion based on inequality type'
            });
        }

        // Step 6: Write final answer
        steps.push({
            stepNumber: 6,
            step: 'Final solution',
            description: 'Express solution in interval notation',
            expression: solution.intervalNotation,
            finalAnswer: true,
            reasoning: 'This is the complete solution set'
        });

        return steps;
    }

    // ENHANCED EXPLANATION METHODS (similar structure to linear workbook)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationRational(step, problem),
                procedural: this.getProceduralExplanationRational(step),
                visual: this.getVisualExplanationRational(step, problem),
                algebraic: this.getAlgebraicExplanationRational(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyRational(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsRational(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionRational(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionRational(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationRational(step, problem) {
        const explanations = {
            'Given inequality': 'A rational inequality compares a fraction of polynomials to a value (usually 0). We need to find where this comparison is true.',
            'Find critical points': 'Critical points are values where the expression equals zero (numerator zeros) or is undefined (denominator zeros). These are the only places the sign can change.',
            'Create intervals': 'The number line is divided into intervals by critical points. Within each interval, the expression maintains a constant sign.',
            'Test intervals': 'We check one value in each interval to determine if the expression is positive or negative throughout that interval.',
            'Select solution intervals': 'We choose the intervals where the expression satisfies our inequality condition.',
            'Final solution': 'The solution is expressed as a union of intervals, showing all values that satisfy the inequality.'
        };

        return explanations[step.step] || 'This step helps us analyze where the rational inequality is satisfied.';
    }

    getProceduralExplanationRational(step) {
        const procedures = {
            'Find critical points': '1. Set numerator = 0 and solve\n2. Set denominator = 0 and solve\n3. Mark both on number line',
            'Create intervals': '1. Order critical points from left to right\n2. Intervals are spaces between consecutive points\n3. Include (-∞, first) and (last, ∞)',
            'Test intervals': '1. Pick any value in the interval\n2. Substitute into expression\n3. Determine if positive or negative',
            'Select solution intervals': '1. Check inequality type (>, <, ≥, ≤)\n2. Select intervals with matching sign\n3. Determine bracket types for endpoints'
        };

        return procedures[step.step] || 'Follow systematic procedure for this step.';
    }

    getVisualExplanationRational(step, problem) {
        const visuals = {
            'Find critical points': 'Mark critical points on a number line with different symbols: ○ for undefined, • for zeros',
            'Create intervals': 'Draw number line with critical points marked, showing the regions between them',
            'Test intervals': 'Picture the function graph: above x-axis means positive, below means negative',
            'Select solution intervals': 'Shade or highlight the intervals on the number line that satisfy the inequality'
        };

        return visuals[step.step] || 'Visualize this step on a number line or graph.';
    }

    getAlgebraicExplanationRational(step) {
        const algebraic = {
            'Find critical points': 'Apply zero-product property and definition of rational function domain',
            'Test intervals': 'Intermediate Value Theorem guarantees sign constancy in each interval',
            'Select solution intervals': 'Apply definition of inequality to select appropriate regions'
        };

        return algebraic[step.step] || 'Apply formal algebraic principles.';
    }

    identifyKeyVocabularyRational(step) {
        const vocab = {
            'Given inequality': ['rational inequality', 'rational expression', 'numerator', 'denominator'],
            'Find critical points': ['zero', 'undefined', 'critical point', 'domain restriction'],
            'Create intervals': ['interval', 'number line', 'partition'],
            'Test intervals': ['test point', 'sign', 'positive', 'negative'],
            'Select solution intervals': ['solution set', 'interval notation', 'union'],
            'Final solution': ['interval notation', 'union symbol', 'brackets', 'parentheses']
        };

        return vocab[step.step] || [];
    }

    generateThinkingPromptsRational(step) {
        const prompts = {
            'Find critical points': {
                before: 'What makes a rational expression equal to zero? What makes it undefined?',
                during: 'Am I solving the numerator AND denominator separately?',
                after: 'Have I found all critical points and marked them correctly?'
            },
            'Test intervals': {
                before: 'Why do I only need one test point per interval?',
                during: 'Am I choosing test points that are easy to compute?',
                after: 'Do my signs make sense given the critical points?'
            },
            'Select solution intervals': {
                before: 'What does my inequality symbol tell me about which intervals to select?',
                during: 'Should I include the endpoints? Which ones?',
                after: 'Did I use the correct brackets and exclude undefined points?'
            }
        };

        return prompts[step.step] || {
            before: 'What is the goal of this step?',
            during: 'Am I applying the correct method?',
            after: 'Does my result make sense?'
        };
    }

    generateSelfCheckQuestionRational(step) {
        const questions = {
            'Given inequality': 'Do I understand what the inequality is asking?',
            'Find critical points': 'Did I find both zeros AND undefined points?',
            'Create intervals': 'Do my intervals cover the entire number line?',
            'Test intervals': 'Did I test BETWEEN critical points, not AT them?',
            'Select solution intervals': 'Did I EXCLUDE all undefined points, even with ≥ or ≤?',
            'Final solution': 'Is my notation correct with proper brackets and union symbols?'
        };

        return questions[step.step] || 'Does this step bring me closer to the solution?';
    }

    findRealWorldConnectionRational(step, problem) {
        return 'Rational inequalities model situations where rates, ratios, or averages must meet certain criteria - like keeping average cost below a threshold or maintaining concentration in a safe range.';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: {
                        currentState: `Current: ${steps[i].step}`,
                        nextGoal: `Next: ${steps[i + 1].step}`,
                        why: this.explainStepNecessity(steps[i], steps[i + 1]),
                        howItHelps: 'This moves us systematically toward the solution'
                    }
                });
            }
        }

        return enhancedSteps;
    }

    addErrorPrevention(step, problemType) {
        const category = this.rationalInequalityTypes[problemType]?.category || 'simple_rational';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsRational(step),
                checkPoints: this.generateCheckPointsRational(step),
                warningFlags: this.identifyWarningFlagsRational(step, problemType)
            }
        };
    }

    generatePreventionTipsRational(step) {
        const tips = {
            'Find critical points': [
                'Don\'t forget denominator zeros (undefined points)',
                'List all critical points in order',
                'Mark undefined points differently from zeros'
            ],
            'Test intervals': [
                'Choose test points BETWEEN critical points, not at them',
                'Use simple values (like 0, 1, -1) when possible',
                'Check arithmetic carefully'
            ],
            'Select solution intervals': [
                'NEVER include undefined points, even with ≥ or ≤',
                'Include zeros only if inequality is ≥ or ≤',
                'Double-check bracket types'
            ]
        };

        return tips[step.step] || ['Work carefully and systematically'];
    }

    generateCheckPointsRational(step) {
        const checkpoints = {
            'Find critical points': [
                'Did I set numerator = 0?',
                'Did I set denominator = 0?',
                'Are all critical points listed?'
            ],
            'Test intervals': [
                'Did I test ALL intervals?',
                'Are test points in the interior of intervals?',
                'Did I evaluate signs correctly?'
            ],
            'Select solution intervals': [
                'Did I match intervals to inequality sign?',
                'Are undefined points excluded?',
                'Are brackets correct?'
            ]
        };

        return checkpoints[step.step] || ['Is this step correct and complete?'];
    }

    identifyWarningFlagsRational(step, problemType) {
        const warnings = {
            'Find critical points': ['Missing critical points will give wrong answer'],
            'Test intervals': ['Wrong test point evaluation leads to wrong intervals'],
            'Select solution intervals': ['Including undefined points is always wrong']
        };

        return warnings[step.step] || [];
    }

    addScaffolding(steps, problem) {
        return steps.map(step => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsRational(step),
                hints: this.generateProgressiveHintsRational(step),
                subSteps: this.breakIntoSubStepsRational(step)
            }
        }));
    }

    generateGuidingQuestionsRational(step) {
        const questions = {
            'Find critical points': [
                'What makes the numerator zero?',
                'What makes the denominator zero?',
                'Why are both types of points important?'
            ],
            'Create intervals': [
                'How many critical points are there?',
                'How many intervals do they create?',
                'Do the intervals cover all real numbers?'
            ],
            'Test intervals': [
                'Where should I choose my test point?',
                'What am I checking at each test point?',
                'Do the signs make sense?'
            ]
        };

        return questions[step.step] || ['What is this step asking me to do?'];
    }

    generateProgressiveHintsRational(step) {
        const category = 'simple_rational'; // Simplified
        return this.hints[category] || {
            level1: 'Think about what this step requires',
            level2: 'Consider the mathematical concepts involved',
            level3: 'Apply the specific technique',
            level4: 'Execute the procedure'
        };
    }

    breakIntoSubStepsRational(step) {
        const substeps = {
            'Find critical points': [
                'Set numerator equal to zero',
                'Solve for x (this gives zeros)',
                'Set denominator equal to zero',
                'Solve for x (this gives undefined points)',
                'List all critical points in order'
            ],
            'Test intervals': [
                'Choose a test point in the interval',
                'Substitute into numerator',
                'Determine numerator sign',
                'Substitute into denominator',
                'Determine denominator sign',
                'Combine to get overall sign'
            ]
        };

        return substeps[step.step] || ['Complete this step carefully'];
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationRational(step),
                analogy: this.findRelevantAnalogyRational(step),
                visualization: this.suggestVisualizationRational(step)
            }
        }));
    }

    generateELI5ExplanationRational(step) {
        const ELI5 = {
            'Given inequality': 'We have a fraction puzzle! We need to find when this fraction is bigger (or smaller) than something.',
            'Find critical points': 'We find the special numbers where our fraction equals zero (top = 0) or breaks (bottom = 0). Like finding where a bridge is broken!',
            'Create intervals': 'We divide the number line into sections using our special numbers, like cutting a rope at certain spots.',
            'Test intervals': 'In each section, we pick one number and check if our fraction is positive or negative there. It\'s the same for the whole section!',
            'Select solution intervals': 'We color in the sections that make our inequality happy!',
            'Final solution': 'We write down all the happy sections using special math writing.'
        };

        return ELI5[step.step] || 'This step helps us solve our fraction puzzle!';
    }

    findRelevantAnalogyRational(step) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (step.step.toLowerCase().includes(key.split('_')[0])) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return 'Think of this like organizing things into groups!';
    }

    suggestVisualizationRational(step) {
        const visuals = {
            'Find critical points': 'Draw a number line and mark the special points with different shapes',
            'Create intervals': 'Draw sections on the number line between the special points',
            'Test intervals': 'In each section, pick a number and test it - mark if it\'s happy (positive) or sad (negative)',
            'Select solution intervals': 'Color or shade the sections that solve the inequality'
        };

        return visuals[step.step] || 'Draw a picture to understand this step!';
    }

    explainStepNecessity(currentStep, nextStep) {
        return 'to progress systematically toward the solution';
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `Builds on step ${stepIndex}`,
            progression: 'Moving toward complete solution',
            relationship: 'Each step adds information'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.rationalInequalityTypes[problemType]?.category || 'simple_rational';
        const prereqs = this.prerequisites[category];
        return prereqs ? prereqs.skills : ['Basic algebra'];
    }

    getAdaptiveExplanation(step, explanationLevel) {
        return {
            adaptedDescription: step.description,
            adaptedReasoning: step.reasoning,
            complexityLevel: explanationLevel
        };
    }

    // GRAPH GENERATION

    generateRationalInequalityGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        this.graphData = {
            type: 'rational_inequality',
            numberLine: this.createNumberLineData(),
            signChart: this.createSignChartData(),
            description: 'Visual representation of solution'
        };
    }

    createNumberLineData() {
        if (!this.currentSolution.criticalPoints) return null;

        return {
            criticalPoints: this.currentSolution.criticalPoints,
            solutionIntervals: this.currentSolution.solutionIntervals,
            visualization: 'number_line'
        };
    }

    createSignChartData() {
        if (!this.currentSolution.intervals || !this.currentSolution.signs) return null;

        return {
            intervals: this.currentSolution.intervals,
            signs: this.currentSolution.signs,
            visualization: 'sign_chart'
        };
    }

    // WORKBOOK GENERATION

    generateRationalInequalityWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createRationalInequalityLessonSection(),
            this.createEnhancedStepsSection(),
            this.createSolutionSection(),
            this.createCriticalPointsSection(),
            this.createSignAnalysisSection(),
            this.createVerificationSection(),
            this.createGraphicalSection(),
            this.createRealWorldApplicationSection(),
            this.createCommonMistakesSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Rational Inequalities Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        const problemData = [
            ['Problem Type', this.rationalInequalityTypes[this.currentProblem.type]?.name || 'Rational Inequality'],
            ['Category', this.rationalInequalityTypes[this.currentProblem.type]?.category || 'rational'],
            ['Inequality', this.currentSolution?.inequality || this.currentProblem.cleanInput],
            ['Description', this.currentProblem.scenario || 'Rational inequality problem']
        ];

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.rationalInequalityTypes[this.currentProblem.type]?.category;
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

    createRationalInequalityLessonSection() {
        const lessonData = [
            ['Key Concepts', ''],
            ['', 'Rational inequalities involve fractions with polynomials'],
            ['', 'Critical points: zeros (numerator) and undefined points (denominator)'],
            ['', 'Sign can only change at critical points'],
            ['', 'Test intervals between critical points'],
            ['', 'NEVER include undefined points in solution'],
            ['', ''],
            ['Solution Process', ''],
            ['', '1. Find all critical points (zeros and undefined)'],
            ['', '2. Create intervals on number line'],
            ['', '3. Test sign in each interval'],
            ['', '4. Select intervals matching inequality'],
            ['', '5. Express in interval notation'],
            ['', ''],
            ['Important Rules', ''],
            ['', 'Use ( ) for undefined points - ALWAYS'],
            ['', 'Use [ ] for zeros only if ≥ or ≤'],
            ['', 'Use ( ) for zeros if > or <'],
            ['', 'Always use ( ) with ∞ or -∞']
        ];

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: lessonData
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

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.zeros && step.undefined) {
                stepsData.push(['Zeros', step.zeros]);
                stepsData.push(['Undefined', step.undefined]);
            }

            if (step.intervals) {
                stepsData.push(['Intervals', step.intervals]);
            }

            if (step.testDetails) {
                stepsData.push(['Testing', step.testDetails]);
            }

            if (step.selectedIntervals) {
                stepsData.push(['Solution Intervals', step.selectedIntervals]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.method) {
                stepsData.push(['Method', step.method]);
            }

            if (step.numberLine) {
                stepsData.push(['Visual', step.numberLine]);
            }

            if (step.endpointNote) {
                stepsData.push(['Endpoints', step.endpointNote]);
            }

            // ELI5 explanations
            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
                if (step.ELI5.visualization) {
                    stepsData.push(['Visualize', step.ELI5.visualization]);
                }
            }

            // Enhanced explanations
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Procedural', step.explanations.procedural]);
                stepsData.push(['Visual', step.explanations.visual]);
            }

            // Error prevention
            if (step.errorPrevention && this.includeErrorPrevention) {
                const mistakes = step.errorPrevention.commonMistakes;
                if (mistakes && mistakes.length > 0) {
                    stepsData.push(['Common Mistakes', mistakes.join('; ')]);
                }
                const tips = step.errorPrevention.preventionTips;
                if (tips && tips.length > 0) {
                    stepsData.push(['Prevention', tips.join('; ')]);
                }
                const checkpoints = step.errorPrevention.checkPoints;
                if (checkpoints && checkpoints.length > 0) {
                    stepsData.push(['Checkpoints', checkpoints.join('; ')]);
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

                const substeps = step.scaffolding.subSteps;
                if (substeps && substeps.length > 0) {
                    stepsData.push(['Sub-steps', substeps.join(' → ')]);
                }
            }

            // Thinking prompts
            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Before', step.thinkingPrompts.before]);
                stepsData.push(['During', step.thinkingPrompts.during]);
                stepsData.push(['After', step.thinkingPrompts.after]);
            }

            // Self-check
            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            // Real-world connection
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

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Solution in Interval Notation', this.currentSolution.intervalNotation || 'See analysis']
        ];

        if (this.currentSolution.solutionIntervals && this.currentSolution.solutionIntervals.length > 0) {
            solutionData.push(['', '']);
            solutionData.push(['Solution Intervals', '']);
            this.currentSolution.solutionIntervals.forEach((interval, idx) => {
                solutionData.push([`Interval ${idx + 1}`, interval.label]);
            });
        }

        if (this.currentSolution.solutionType) {
            solutionData.push(['', '']);
            solutionData.push(['Solution Type', this.currentSolution.solutionType]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createCriticalPointsSection() {
        if (!this.currentSolution || !this.currentSolution.criticalPoints) return null;

        const criticalData = [
            ['Critical Points Analysis', ''],
            ['', ''],
            ['Zeros (Numerator = 0)', '']
        ];

        if (this.currentSolution.criticalPoints.zero !== undefined) {
            criticalData.push(['Zero', `x = ${this.currentSolution.criticalPoints.zero}`]);
            criticalData.push(['Meaning', 'Expression equals zero at this point']);
            criticalData.push(['Inclusion', 'Include if ≥ or ≤, exclude if > or <']);
        }

        criticalData.push(['', '']);
        criticalData.push(['Undefined Points (Denominator = 0)', '']);

        if (this.currentSolution.criticalPoints.undefined !== undefined) {
            criticalData.push(['Undefined', `x = ${this.currentSolution.criticalPoints.undefined}`]);
            criticalData.push(['Meaning', 'Expression is undefined (division by zero)']);
            criticalData.push(['Inclusion', 'NEVER include - always use ( )']);
        }

        criticalData.push(['', '']);
        criticalData.push(['Why Critical Points Matter', '']);
        criticalData.push(['', 'Sign of rational expression can only change at critical points']);
        criticalData.push(['', 'These points divide number line into test intervals']);
        criticalData.push(['', 'Within each interval, expression has constant sign']);

        return {
            title: 'Critical Points Analysis',
            type: 'critical_points',
            data: criticalData
        };
    }

    createSignAnalysisSection() {
        if (!this.currentSolution || !this.currentSolution.intervals || !this.currentSolution.signs) return null;

        const signData = [
            ['Sign Analysis', ''],
            ['', ''],
            ['Interval Testing Results', '']
        ];

        this.currentSolution.intervals.forEach((interval, idx) => {
            const sign = this.currentSolution.signs[idx];
            signData.push(['', '']);
            signData.push([`Interval ${idx + 1}`, interval.label]);
            signData.push(['Test Point', `x = ${sign.testPoint}`]);
            signData.push(['Numerator Sign', sign.numeratorSign > 0 ? 'Positive (+)' : 'Negative (-)']);
            signData.push(['Denominator Sign', sign.denominatorSign > 0 ? 'Positive (+)' : 'Negative (-)']);
            signData.push(['Overall Sign', sign.overallSign === 'positive' ? 'Positive (+)' : 'Negative (-)']);
        });

        signData.push(['', '']);
        signData.push(['Sign Pattern', '']);
        signData.push(['', 'Signs typically alternate at critical points']);
        signData.push(['', 'Overall sign = (numerator sign) × (denominator sign)']);

        return {
            title: 'Sign Analysis',
            type: 'sign_analysis',
            data: signData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution) return null;

        const verificationData = [
            ['Solution Verification', ''],
            ['', ''],
            ['Method', 'Test points from solution intervals'],
            ['', '']
        ];

        if (this.currentSolution.solutionIntervals && this.currentSolution.solutionIntervals.length > 0) {
            verificationData.push(['Verification Steps', '']);
            verificationData.push(['', '1. Pick test point from each solution interval']);
            verificationData.push(['', '2. Substitute into original inequality']);
            verificationData.push(['', '3. Verify inequality is satisfied']);
            verificationData.push(['', '4. Check critical point inclusion/exclusion']);
            verificationData.push(['', '']);
            verificationData.push(['Confidence', 'Solution verified through interval testing']);
        }

        verificationData.push(['', '']);
        verificationData.push(['Additional Checks', '']);
        verificationData.push(['', 'Are undefined points excluded? (Must be YES)']);
        verificationData.push(['', 'Are brackets correct for inequality type?']);
        verificationData.push(['', 'Does solution make intuitive sense?']);

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createGraphicalSection() {
        const graphData = [
            ['Graphical Interpretation', ''],
            ['', ''],
            ['Number Line Representation', ''],
            ['', 'Plot critical points on number line'],
            ['', 'Mark zeros with • (filled if included, open if not)'],
            ['', 'Mark undefined points with ○ (always open)'],
            ['', 'Shade/highlight solution intervals'],
            ['', ''],
            ['Function Graph', ''],
            ['', 'Graph y = (rational expression)'],
            ['', 'Vertical asymptotes at undefined points'],
            ['', 'x-intercepts at zeros'],
            ['', 'Solution: where graph is above/below x-axis'],
            ['', ''],
            ['Sign Chart', ''],
            ['', 'Alternative visual representation'],
            ['', 'Shows sign of each factor in each interval'],
            ['', 'Combines to show overall sign'],
            ['', 'Highlights solution intervals']
        ];

        return {
            title: 'Graphical Representation',
            type: 'graphical',
            data: graphData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        const appData = [
            ['Real-World Applications of Rational Inequalities', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Context', app.context]);
            appData.push(['Description', app.description]);
            if (app.examples && app.examples[0]) {
                appData.push(['Example', app.examples[0]]);
            }
            appData.push(['Setup', app.setup]);
            appData.push(['Interpretation', app.interpretation]);
            appData.push(['', '']);
        });

        appData.push(['Common Real-World Scenarios', '']);
        appData.push(['', 'Average cost must be below target']);
        appData.push(['', 'Concentration must be in safe range']);
        appData.push(['', 'Efficiency must exceed minimum']);
        appData.push(['', 'Rate must meet requirements']);

        return {
            title: 'Real-World Applications',
            type: 'applications',
            data: appData
        };
    }

    createCommonMistakesSection() {
        if (!this.includeCommonMistakes) return null;

        const mistakeData = [
            ['Common Mistakes and Misconceptions', ''],
            ['', '']
        ];

        Object.entries(this.misconceptions).forEach(([key, misconception]) => {
            mistakeData.push(['Misconception', misconception.misconception]);
            mistakeData.push(['Truth', misconception.truth]);
            mistakeData.push(['Explanation', misconception.explanation]);
            mistakeData.push(['Correction', misconception.correction]);
            mistakeData.push(['Example', misconception.example]);
            mistakeData.push(['', '']);
        });

        mistakeData.push(['Top Mistakes to Avoid', '']);
        mistakeData.push(['', '1. Including undefined points in solution']);
        mistakeData.push(['', '2. Multiplying by variable expression without considering sign']);
        mistakeData.push(['', '3. Forgetting to find all critical points']);
        mistakeData.push(['', '4. Using wrong brackets on endpoints']);
        mistakeData.push(['', '5. Not testing all intervals']);

        return {
            title: 'Common Mistakes',
            type: 'mistakes',
            data: mistakeData
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generateRationalInequalityPedagogicalNotes(this.currentProblem.type);

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['', ''],
                ['Key Concepts to Emphasize', notes.keyConcepts.join('; ')],
                ['', ''],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['', ''],
                ['Common Student Difficulties', notes.commonDifficulties.join('; ')],
                ['', ''],
                ['Effective Teaching Strategies', notes.teachingStrategies.join('; ')],
                ['', ''],
                ['Extension Ideas', notes.extensions.join('; ')],
                ['', ''],
                ['Assessment Tips', notes.assessment.join('; ')]
            ]
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateRationalInequalityAlternativeMethods(this.currentProblem.type);

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method Used', alternatives.primaryMethod],
                ['', ''],
                ['Alternative Approaches', ''],
                ...alternatives.methods.map((method, index) => [
                    `Method ${index + 1}`, `${method.name}: ${method.description}`
                ]),
                ['', ''],
                ['Method Comparison', alternatives.comparison],
                ['', ''],
                ['When to Use Each Method', ''],
                ...alternatives.whenToUse.map((usage, idx) => [
                    `Scenario ${idx + 1}`, usage
                ])
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

        problems.easy.forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium Problems', '']);

        problems.medium.forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Hard Problems', '']);

        problems.hard.forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Challenge Problems', '']);
        
        const challenges = this.challenges.applications.slice(0, 2);
        challenges.forEach((challenge, i) => {
            practiceData.push([`Challenge ${i + 1}`, challenge.problem]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    generateRationalInequalityPedagogicalNotes(problemType) {
        const category = this.rationalInequalityTypes[problemType]?.category || 'simple_rational';

        const pedagogicalDatabase = {
            simple_rational: {
                objectives: [
                    'Solve simple rational inequalities',
                    'Identify critical points (zeros and undefined)',
                    'Perform sign analysis using test points',
                    'Express solutions in interval notation',
                    'Understand endpoint inclusion rules'
                ],
                keyConcepts: [
                    'Critical points are where sign can change',
                    'Undefined points are NEVER in solution',
                    'Include zeros based on inequality type',
                    'Sign is constant within each interval',
                    'Test one point per interval'
                ],
                prerequisites: [
                    'Solving linear equations',
                    'Understanding fractions and division',
                    'Concept of undefined values',
                    'Interval notation',
                    'Number line representation'
                ],
                commonDifficulties: [
                    'Including undefined points in solution',
                    'Forgetting to find all critical points',
                    'Wrong bracket types on endpoints',
                    'Sign errors in testing intervals',
                    'Multiplying by variable expressions'
                ],
                teachingStrategies: [
                    'Use number line visualization consistently',
                    'Emphasize "undefined = never include" repeatedly',
                    'Practice endpoint decision-making',
                    'Use color coding for different point types',
                    'Connect to function graphs',
                    'Provide systematic checklist'
                ],
                extensions: [
                    'Compound rational inequalities',
                    'Polynomial over polynomial',
                    'Absolute value rational inequalities',
                    'Systems of rational inequalities',
                    'Applied optimization problems'
                ],
                assessment: [
                    'Can student find all critical points?',
                    'Does student exclude undefined points?',
                    'Are brackets used correctly?',
                    'Can student verify solution?',
                    'Understanding of why method works?'
                ]
            },
            compound_rational: {
                objectives: [
                    'Solve rational inequalities with multiple factors',
                    'Use sign chart method effectively',
                    'Handle multiple critical points',
                    'Combine multiple intervals correctly'
                ],
                keyConcepts: [
                    'Factor completely before analyzing',
                    'Sign chart organizes complex analysis',
                    'Each factor contributes to overall sign',
                    'Alternating sign pattern (usually)',
                    'Multiple solution intervals common'
                ],
                prerequisites: [
                    'Simple rational inequalities',
                    'Factoring polynomials',
                    'Sign of product of factors',
                    'Systematic organization skills'
                ],
                commonDifficulties: [
                    'Incomplete factoring',
                    'Missing critical points',
                    'Sign chart errors',
                    'Combining intervals incorrectly',
                    'Overwhelmed by complexity'
                ],
                teachingStrategies: [
                    'Teach sign chart method explicitly',
                    'Use color for different factors',
                    'Practice factor-by-factor analysis',
                    'Build complexity gradually',
                    'Provide organizational templates'
                ],
                extensions: [
                    'Rational inequalities with parameters',
                    'Optimization with rational constraints',
                    'Real-world modeling'
                ],
                assessment: [
                    'Can student factor completely?',
                    'Is sign chart used correctly?',
                    'Are all intervals identified?',
                    'Is solution complete and correct?'
                ]
            },
            non_zero: {
                objectives: [
                    'Rearrange to standard form',
                    'Combine rational expressions',
                    'Simplify resulting expressions',
                    'Solve as standard rational inequality'
                ],
                keyConcepts: [
                    'Get zero on one side first',
                    'Find common denominator',
                    'Simplify before analyzing',
                    'Don\'t multiply by variable expression'
                ],
                prerequisites: [
                    'Simple rational inequalities',
                    'Rational expression operations',
                    'Finding common denominators',
                    'Algebraic manipulation'
                ],
                commonDifficulties: [
                    'Multiplying by variable (wrong approach)',
                    'Errors in finding common denominator',
                    'Sign errors in rearrangement',
                    'Not simplifying completely'
                ],
                teachingStrategies: [
                    'Emphasize "don\'t multiply by variable"',
                    'Practice rearrangement systematically',
                    'Connect to rational expression operations',
                    'Show why multiplication fails'
                ],
                extensions: [
                    'Complex rational expressions',
                    'Multiple rational terms',
                    'Applied rate problems'
                ],
                assessment: [
                    'Can student rearrange correctly?',
                    'Avoids multiplying by variable?',
                    'Simplifies expressions properly?'
                ]
            },
            polynomial_rational: {
                objectives: [
                    'Handle higher-degree polynomials',
                    'Factor complex expressions',
                    'Manage many critical points',
                    'Use systematic organization'
                ],
                keyConcepts: [
                    'Complete factoring is essential',
                    'May have many critical points',
                    'Sign chart method most reliable',
                    'Careful organization prevents errors'
                ],
                prerequisites: [
                    'Compound rational inequalities',
                    'Advanced factoring techniques',
                    'Quadratic formula',
                    'Polynomial behavior understanding'
                ],
                commonDifficulties: [
                    'Factoring errors',
                    'Missing zeros',
                    'Organization challenges',
                    'Sign determination errors',
                    'Interval combination mistakes'
                ],
                teachingStrategies: [
                    'Systematic factoring checklist',
                    'Organized sign chart templates',
                    'Technology for graphing verification',
                    'Break into manageable pieces',
                    'Emphasize careful work'
                ],
                extensions: [
                    'Rational functions analysis',
                    'Calculus applications',
                    'Advanced modeling'
                ],
                assessment: [
                    'Factoring completeness',
                    'Systematic approach',
                    'Accuracy with complexity',
                    'Verification skills'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve rational inequalities'],
            keyConcepts: ['Sign analysis', 'Critical points'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Various challenges'],
            teachingStrategies: ['Systematic instruction'],
            extensions: ['More complex problems'],
            assessment: ['Check understanding']
        };
    }

    generateRationalInequalityAlternativeMethods(problemType) {
        const category = this.rationalInequalityTypes[problemType]?.category || 'simple_rational';

        const alternativeDatabase = {
            simple_rational: {
                primaryMethod: 'Test Point Method',
                methods: [
                    {
                        name: 'Sign Chart Method',
                        description: 'Create table showing sign of numerator, denominator, and quotient in each interval'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Graph the rational function and identify where it satisfies the inequality'
                    },
                    {
                        name: 'Factor Sign Analysis',
                        description: 'Analyze sign of each linear factor separately, then combine'
                    }
                ],
                comparison: 'Test point method is straightforward; sign chart more organized; graphical provides visual confirmation',
                whenToUse: [
                    'Test points: simple expressions, few critical points',
                    'Sign chart: multiple factors, systematic approach needed',
                    'Graphical: verification, understanding behavior',
                    'Factor analysis: when factors are clearly linear'
                ]
            },
            compound_rational: {
                primaryMethod: 'Sign Chart Method',
                methods: [
                    {
                        name: 'Test Point Method',
                        description: 'Test one point in each interval, though more computation required'
                    },
                    {
                        name: 'Graphical Analysis',
                        description: 'Graph function and identify solution regions visually'
                    },
                    {
                        name: 'Wavy Curve Method',
                        description: 'Sketch curve through critical points showing sign changes'
                    }
                ],
                comparison: 'Sign chart most reliable for multiple factors; graphing good for verification; wavy curve quick but requires practice',
                whenToUse: [
                    'Sign chart: standard approach, most systematic',
                    'Test points: if expression doesn\'t factor cleanly',
                    'Graphical: to verify or understand behavior',
                    'Wavy curve: quick check by experienced students'
                ]
            },
            non_zero: {
                primaryMethod: 'Algebraic Rearrangement',
                methods: [
                    {
                        name: 'Direct Comparison',
                        description: 'Compare expressions directly (advanced, requires careful sign analysis)'
                    },
                    {
                        name: 'Graphical Intersection',
                        description: 'Graph both sides and find where one is above/below the other'
                    }
                ],
                comparison: 'Rearrangement is standard and safe; direct comparison advanced; graphical provides insight',
                whenToUse: [
                    'Rearrangement: standard approach, most reliable',
                    'Direct comparison: when experienced with sign analysis',
                    'Graphical: to visualize or verify solution'
                ]
            },
            polynomial_rational: {
                primaryMethod: 'Sign Chart with Complete Factoring',
                methods: [
                    {
                        name: 'Technology-Assisted',
                        description: 'Use graphing calculator/software to graph and identify solution regions'
                    },
                    {
                        name: 'Numerical Test Points',
                        description: 'Calculate sign at test points without full factoring (when factoring is difficult)'
                    },
                    {
                        name: 'Interval-by-Interval Analysis',
                        description: 'Systematic testing with careful organization'
                    }
                ],
                comparison: 'Sign chart ideal when factoring possible; technology helpful for complex cases; test points when factoring difficult',
                whenToUse: [
                    'Sign chart: when complete factoring is feasible',
                    'Technology: to visualize complex behavior',
                    'Test points: when factoring is too difficult',
                    'Verify all solutions algebraically even if using technology'
                ]
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard systematic approach',
            methods: [{
                name: 'Alternative method',
                description: 'Adapt approach to problem structure'
            }],
            comparison: 'Choose based on expression complexity and personal preference',
            whenToUse: ['Apply most reliable method for the situation']
        };
    }
}

// Export the class
export default EnhancedRationalInequalitiesWorkbook;
