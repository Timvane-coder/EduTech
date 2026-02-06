// Enhanced Radical Inequalities Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedRadicalInequalitiesWorkbook {
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
        this.initializeRadicalSolvers();
        this.initializeRadicalLessons();
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

    initializeRadicalLessons() {
        this.lessons = {
            radical_basics: {
                title: "Radical Expression Basics",
                concepts: [
                    "√x represents the principal (positive) square root of x",
                    "Domain: x must be ≥ 0 for real numbers",
                    "√x is always non-negative (√x ≥ 0)",
                    "Index n in ⁿ√x: even index requires x ≥ 0, odd index allows any x"
                ],
                theory: "Radicals represent roots. Square roots (most common) have domain restrictions requiring the radicand (expression under the radical) to be non-negative.",
                keyFormulas: {
                    "Square Root": "√x, where x ≥ 0",
                    "Principal Root": "√x ≥ 0 (always non-negative)",
                    "Nth Root": "ⁿ√x",
                    "Radical Property": "(√x)² = x when x ≥ 0"
                },
                criticalRules: [
                    "ALWAYS check domain: radicand ≥ 0",
                    "ALWAYS verify solutions in original inequality",
                    "Squaring both sides can introduce extraneous solutions",
                    "√x is defined only for x ≥ 0 in real numbers"
                ]
            },

            simple_radical_inequalities: {
                title: "Simple Radical Inequalities",
                concepts: [
                    "Form: √(expression) < c or √(expression) > c",
                    "Must consider domain of radical",
                    "Solution involves squaring (with caution)",
                    "Always verify solutions"
                ],
                theory: "Simple radical inequalities involve a single radical compared to a constant. Solving requires understanding domain restrictions and careful handling when squaring.",
                keyFormulas: {
                    "Basic Form": "√(ax + b) < c or √(ax + b) > c",
                    "Domain Requirement": "ax + b ≥ 0",
                    "Squaring Property": "If √A < c (c > 0), then A < c²"
                },
                solvingSteps: [
                    "Identify domain restriction (radicand ≥ 0)",
                    "Isolate radical if needed",
                    "Consider the sign of the constant",
                    "Square both sides (if constant is positive)",
                    "Solve resulting inequality",
                    "Intersect with domain restriction",
                    "Verify solutions in original inequality"
                ],
                specialCases: {
                    "√x < negative": "No solution (√x ≥ 0 always)",
                    "√x > negative": "All x in domain (x ≥ 0)",
                    "√x < 0": "No solution",
                    "√x ≥ 0": "All x ≥ 0"
                }
            },

            radical_inequality_with_linear: {
                title: "Radical Inequalities with Linear Expressions",
                concepts: [
                    "Form: √(ax + b) < cx + d",
                    "Both sides may have restrictions",
                    "Careful about squaring when right side can be negative",
                    "May need case analysis"
                ],
                theory: "When comparing radical to linear expression, must consider cases based on sign of linear expression before squaring.",
                keyFormulas: {
                    "General Form": "√(ax + b) ≶ cx + d",
                    "Domain": "ax + b ≥ 0",
                    "Case 1": "If cx + d < 0, inequality behavior depends on direction",
                    "Case 2": "If cx + d ≥ 0, can square both sides"
                },
                solvingApproach: [
                    "Find domain of radical",
                    "Determine where right side is positive/negative",
                    "Handle each case separately",
                    "Square both sides in appropriate cases",
                    "Combine solutions from all cases",
                    "Verify in original inequality"
                ]
            },

            compound_radical_inequalities: {
                title: "Compound Radical Inequalities",
                concepts: [
                    "Multiple radicals in one inequality",
                    "Form: √A < √B or √A + √B < c",
                    "Requires multiple squaring steps",
                    "Extra care needed for extraneous solutions"
                ],
                theory: "Inequalities with multiple radicals require systematic approach to eliminate radicals while maintaining inequality direction.",
                solvingSteps: [
                    "Identify all domain restrictions",
                    "Isolate one radical at a time if possible",
                    "Square strategically",
                    "Simplify and repeat if necessary",
                    "Intersect all domain restrictions",
                    "Verify all solutions"
                ]
            },

            radical_polynomial_inequalities: {
                title: "Radical with Polynomial Inequalities",
                concepts: [
                    "Form: √(polynomial) < polynomial or vice versa",
                    "May result in polynomial inequalities after squaring",
                    "Test point method often useful",
                    "Critical points from domain and zeros"
                ],
                theory: "These combine radical and polynomial inequality techniques, requiring both algebraic and graphical understanding."
            },

            absolute_value_radical_inequalities: {
                title: "Radical Inequalities with Absolute Values",
                concepts: [
                    "Combination of radical and absolute value",
                    "Multiple case considerations",
                    "Domain restrictions plus absolute value cases",
                    "Systematic case analysis essential"
                ],
                theory: "These require handling both absolute value cases and radical domain restrictions simultaneously."
            },

            rational_radical_inequalities: {
                title: "Radical Inequalities with Rational Expressions",
                concepts: [
                    "Form: √(expression)/expression or expression/√(expression)",
                    "Additional restrictions from denominators",
                    "Sign analysis crucial",
                    "Multiple critical points to consider"
                ],
                theory: "Combining radicals with fractions requires careful attention to both domain (radicand ≥ 0) and restrictions (denominator ≠ 0)."
            },

            systems_radical_inequalities: {
                title: "Systems of Radical Inequalities",
                concepts: [
                    "Multiple radical inequalities simultaneously",
                    "Solution is intersection of individual solutions",
                    "Graphical approach helpful",
                    "Each inequality contributes restrictions"
                ],
                theory: "Systems require finding values satisfying all inequalities at once, combining domain restrictions and solution sets."
            }
        };
    }

    initializeRadicalSolvers() {
        this.radicalTypes = {
            simple_radical_less_than: {
                patterns: [
                    /sqrt\(([^)]+)\)\s*<\s*([+-]?\d+\.?\d*)/i,
                    /√\(([^)]+)\)\s*<\s*([+-]?\d+\.?\d*)/,
                    /√([a-z0-9+\-*\/\s]+)\s*<\s*([+-]?\d+\.?\d*)/i
                ],
                solver: this.solveSimpleRadicalLessThan.bind(this),
                name: 'Simple Radical Inequality (Less Than)',
                category: 'simple_radical',
                description: 'Solves √(expression) < c'
            },

            simple_radical_greater_than: {
                patterns: [
                    /sqrt\(([^)]+)\)\s*>\s*([+-]?\d+\.?\d*)/i,
                    /√\(([^)]+)\)\s*>\s*([+-]?\d+\.?\d*)/,
                    /√([a-z0-9+\-*\/\s]+)\s*>\s*([+-]?\d+\.?\d*)/i
                ],
                solver: this.solveSimpleRadicalGreaterThan.bind(this),
                name: 'Simple Radical Inequality (Greater Than)',
                category: 'simple_radical',
                description: 'Solves √(expression) > c'
            },

            simple_radical_less_equal: {
                patterns: [
                    /sqrt\(([^)]+)\)\s*<=\s*([+-]?\d+\.?\d*)/i,
                    /√\(([^)]+)\)\s*≤\s*([+-]?\d+\.?\d*)/,
                    /√([a-z0-9+\-*\/\s]+)\s*≤\s*([+-]?\d+\.?\d*)/i
                ],
                solver: this.solveSimpleRadicalLessEqual.bind(this),
                name: 'Simple Radical Inequality (Less Than or Equal)',
                category: 'simple_radical',
                description: 'Solves √(expression) ≤ c'
            },

            simple_radical_greater_equal: {
                patterns: [
                    /sqrt\(([^)]+)\)\s*>=\s*([+-]?\d+\.?\d*)/i,
                    /√\(([^)]+)\)\s*≥\s*([+-]?\d+\.?\d*)/,
                    /√([a-z0-9+\-*\/\s]+)\s*≥\s*([+-]?\d+\.?\d*)/i
                ],
                solver: this.solveSimpleRadicalGreaterEqual.bind(this),
                name: 'Simple Radical Inequality (Greater Than or Equal)',
                category: 'simple_radical',
                description: 'Solves √(expression) ≥ c'
            },

            radical_linear_less: {
                patterns: [
                    /sqrt\(([^)]+)\)\s*<\s*([^<>=]+[a-z][^<>=]*)/i,
                    /√\(([^)]+)\)\s*<\s*([^<>=]+)/
                ],
                solver: this.solveRadicalLinearLess.bind(this),
                name: 'Radical Less Than Linear Expression',
                category: 'radical_linear',
                description: 'Solves √(expression) < linear expression'
            },

            radical_linear_greater: {
                patterns: [
                    /sqrt\(([^)]+)\)\s*>\s*([^<>=]+[a-z][^<>=]*)/i,
                    /√\(([^)]+)\)\s*>\s*([^<>=]+)/
                ],
                solver: this.solveRadicalLinearGreater.bind(this),
                name: 'Radical Greater Than Linear Expression',
                category: 'radical_linear',
                description: 'Solves √(expression) > linear expression'
            },

            compound_radical: {
                patterns: [
                    /sqrt.*sqrt/i,
                    /√.*√/
                ],
                solver: this.solveCompoundRadical.bind(this),
                name: 'Compound Radical Inequality',
                category: 'compound_radical',
                description: 'Solves inequalities with multiple radicals'
            },

            radical_polynomial: {
                patterns: [
                    /sqrt\([^)]*x\^2[^)]*\)/i,
                    /sqrt\([^)]*x²[^)]*\)/i
                ],
                solver: this.solveRadicalPolynomial.bind(this),
                name: 'Radical with Polynomial',
                category: 'radical_polynomial',
                description: 'Solves radical inequalities involving polynomials'
            },

            radical_rational: {
                patterns: [
                    /sqrt\([^)]*\/[^)]*\)/i,
                    /\/\s*sqrt/i
                ],
                solver: this.solveRadicalRational.bind(this),
                name: 'Radical with Rational Expression',
                category: 'radical_rational',
                description: 'Solves radical inequalities with fractions'
            },

            radical_absolute_value: {
                patterns: [
                    /sqrt.*\|/i,
                    /\|.*sqrt/i,
                    /sqrt.*abs/i
                ],
                solver: this.solveRadicalAbsoluteValue.bind(this),
                name: 'Radical with Absolute Value',
                category: 'radical_absolute_value',
                description: 'Solves radical inequalities involving absolute values'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            simple_radical: {
                'Domain restriction': [
                    'Forgetting that radicand must be ≥ 0',
                    'Not intersecting solution with domain',
                    'Ignoring domain completely'
                ],
                'Squaring inequality': [
                    'Squaring when right side is negative without considering cases',
                    'Forgetting to flip inequality when appropriate',
                    'Not checking if squaring is valid'
                ],
                'Verification': [
                    'Not checking solutions in original inequality',
                    'Accepting extraneous solutions',
                    'Not testing boundary points'
                ]
            },
            radical_linear: {
                'Case analysis': [
                    'Not considering cases for sign of linear expression',
                    'Missing cases where linear expression is negative',
                    'Incorrectly combining cases'
                ],
                'Squaring both sides': [
                    'Squaring when one side can be negative',
                    'Not handling (a + b)² correctly',
                    'Sign errors after squaring'
                ],
                'Domain and range': [
                    'Forgetting √x ≥ 0 always',
                    'Not considering where linear expression is positive',
                    'Missing intersection of conditions'
                ]
            },
            compound_radical: {
                'Multiple squaring': [
                    'Squaring too many times unnecessarily',
                    'Losing track after multiple squaring steps',
                    'Not simplifying between squaring steps'
                ],
                'Domain tracking': [
                    'Losing domain restrictions during manipulation',
                    'Not tracking all radicand restrictions',
                    'Forgetting earlier restrictions'
                ]
            }
        };

        this.errorPrevention = {
            domain_first: {
                reminder: 'ALWAYS find domain before solving: radicand ≥ 0',
                method: 'Write domain restriction as first step'
            },
            verify_always: {
                reminder: 'ALWAYS verify solutions in original inequality',
                method: 'Test solutions and boundary points'
            },
            careful_squaring: {
                reminder: 'Squaring can introduce extraneous solutions',
                method: 'Check validity before squaring; verify after'
            },
            radical_always_positive: {
                reminder: '√x is always ≥ 0 (principal root)',
                method: 'Use this fact to eliminate impossible cases'
            },
            case_analysis: {
                reminder: 'When right side can be negative, split into cases',
                method: 'Case 1: right side < 0; Case 2: right side ≥ 0'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why radical inequalities work this way mathematically',
                language: 'intuitive understanding of domain and squaring'
            },
            procedural: {
                focus: 'Step-by-step solution process',
                language: 'algorithmic approach to solving'
            },
            visual: {
                focus: 'Graphical interpretation of radical functions',
                language: 'visual and spatial understanding'
            },
            algebraic: {
                focus: 'Formal algebraic manipulation rules',
                language: 'precise mathematical properties'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete numbers'
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
                detail: 'comprehensive explanations with all reasoning',
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
            physics_velocity: {
                scenario: "Finding velocity constraints in physics",
                equation: "v = √(2gh) where velocity must be less than some limit",
                examples: [
                    "Free fall: velocity √(2gh) < 50 m/s, find height constraints",
                    "Projectile motion with velocity limits"
                ],
                context: "Radical inequalities appear in physics when dealing with square root relationships like kinetic energy, free fall, orbital mechanics"
            },
            engineering_design: {
                scenario: "Engineering tolerances and safety factors",
                equation: "Stress √(F/A) must be within safe limits",
                examples: [
                    "Beam stress: √(Force/Area) < maximum allowable stress",
                    "Electrical: Current √(P/R) within wire capacity"
                ],
                context: "Engineers use radical inequalities for safety constraints"
            },
            geometry_distance: {
                scenario: "Distance constraints using distance formula",
                equation: "√((x₁-x₂)² + (y₁-y₂)²) < max distance",
                examples: [
                    "Points within certain distance from origin",
                    "Circular regions defined by distance inequalities"
                ],
                context: "Distance formula creates radical inequalities in geometric problems"
            },
            finance_volatility: {
                scenario: "Financial volatility and standard deviation",
                equation: "√(variance) < acceptable risk level",
                examples: [
                    "Portfolio risk: standard deviation √(σ²) below threshold",
                    "Investment volatility constraints"
                ],
                context: "Standard deviation involves square roots in financial analysis"
            },
            biology_growth: {
                scenario: "Population growth and biological rates",
                equation: "Growth rate proportional to √(population)",
                examples: [
                    "√(population) < carrying capacity limit",
                    "Allometric scaling laws in biology"
                ],
                context: "Many biological relationships involve square root functions"
            },
            acoustics_sound: {
                scenario: "Sound intensity and decibel levels",
                equation: "Intensity proportional to √(power)",
                examples: [
                    "√(acoustic power) must be below damage threshold",
                    "Speaker output constraints"
                ],
                context: "Sound physics involves square root relationships"
            },
            astronomy_orbital: {
                scenario: "Orbital mechanics and escape velocity",
                equation: "v_escape = √(2GM/r)",
                examples: [
                    "Escape velocity √(2GM/r) constraints for satellites",
                    "Orbital speed requirements"
                ],
                context: "Space physics heavily uses radical equations for velocity calculations"
            },
            statistics_sampling: {
                scenario: "Sample size and margin of error",
                equation: "Margin of error ∝ 1/√(sample size)",
                examples: [
                    "1/√n < desired margin of error",
                    "Determining minimum sample size for accuracy"
                ],
                context: "Statistical confidence intervals involve square roots"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            simple_radical: {
                skills: [
                    'Understanding of square roots',
                    'Domain restrictions (radicand ≥ 0)',
                    'Basic inequality solving',
                    'Number line representation'
                ],
                priorKnowledge: [
                    '√x is defined only for x ≥ 0',
                    '√x ≥ 0 always (principal root)',
                    'Squaring both sides of equation',
                    'Properties of inequalities'
                ],
                checkQuestions: [
                    "What is √16?",
                    "For what values of x is √x defined?",
                    "Is √x ever negative?",
                    "If a < b and both are positive, is a² < b²?"
                ]
            },
            radical_linear: {
                skills: [
                    'Simple radical inequalities',
                    'Case analysis',
                    'Linear expressions',
                    'Interval notation'
                ],
                priorKnowledge: [
                    'When can we square inequalities safely',
                    'How to handle cases',
                    'Intersection of conditions',
                    'Testing solution intervals'
                ],
                checkQuestions: [
                    "Solve √(x - 1) < 2",
                    "When is 2x + 1 positive?",
                    "What happens when we square both sides of an inequality?",
                    "How do you find the intersection of x > 2 and x < 5?"
                ]
            },
            compound_radical: {
                skills: [
                    'Simple radical inequalities',
                    'Multiple squaring steps',
                    'Complex domain analysis',
                    'Systematic verification'
                ],
                priorKnowledge: [
                    'Isolating radicals',
                    'Domain from multiple radicands',
                    'Tracking restrictions through steps',
                    'Extraneous solutions'
                ],
                checkQuestions: [
                    "Solve √x < 3",
                    "What is the domain of √(x + 1) + √(x - 2)?",
                    "Why do extraneous solutions occur?",
                    "How do you verify a solution?"
                ]
            },
            radical_polynomial: {
                skills: [
                    'Polynomial inequalities',
                    'Radical inequalities',
                    'Test point method',
                    'Critical point analysis'
                ],
                priorKnowledge: [
                    'Factoring polynomials',
                    'Sign analysis',
                    'Finding zeros',
                    'Interval testing'
                ],
                checkQuestions: [
                    "Solve x² - 4 > 0",
                    "Factor x² + 5x + 6",
                    "What are critical points?",
                    "How do you test intervals?"
                ]
            },
            radical_rational: {
                skills: [
                    'Rational inequalities',
                    'Radical inequalities',
                    'Sign charts',
                    'Multiple restrictions'
                ],
                priorKnowledge: [
                    'Denominator ≠ 0',
                    'Radicand ≥ 0',
                    'Sign analysis with fractions',
                    'Critical points from numerator and denominator'
                ],
                checkQuestions: [
                    "Solve x/(x-2) > 0",
                    "What values must be excluded when x-3 is in denominator?",
                    "What is the domain of √(x+1)/(x-2)?",
                    "How do you make a sign chart?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            number_line: {
                description: "Solution set as interval on number line",
                analogy: "Like marking a range of acceptable values on a ruler",
                visualization: "Shade the region representing solutions",
                suitableFor: ['all_radical'],
                explanation: "Number line shows domain restrictions and solution intervals clearly"
            },
            graph_radical_function: {
                description: "Graph y = √(expression) and compare to constant",
                analogy: "Like seeing where a curve is above or below a line",
                visualization: "Plot radical function and horizontal line, shade region",
                suitableFor: ['simple_radical', 'radical_linear'],
                explanation: "Visual representation shows where inequality is satisfied"
            },
            domain_first: {
                description: "Start with domain restriction visualization",
                analogy: "Like establishing boundaries before exploring territory",
                visualization: "Mark domain on number line first, then find solution within",
                suitableFor: ['all_radical'],
                explanation: "Always identify where radical is defined before solving"
            },
            case_diagram: {
                description: "Branch diagram showing different cases",
                analogy: "Like a decision tree with different paths",
                visualization: "Tree showing cases based on signs and conditions",
                suitableFor: ['radical_linear', 'compound_radical'],
                explanation: "Organize case analysis systematically"
            },
            squaring_visualization: {
                description: "Show effect of squaring graphically",
                analogy: "Like seeing how shapes change when squared",
                visualization: "Compare y = x and y = x² to understand squaring",
                suitableFor: ['all_radical'],
                explanation: "Helps understand why squaring can introduce extra solutions"
            },
            test_point_table: {
                description: "Table of test points in each interval",
                analogy: "Like sampling points to check a pattern",
                visualization: "Table showing intervals, test points, and results",
                suitableFor: ['radical_polynomial', 'compound_radical'],
                explanation: "Systematic way to verify which intervals satisfy inequality"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "√x < 3",
                    solution: "0 ≤ x < 9",
                    steps: [
                        "Domain: x ≥ 0",
                        "Since 3 > 0, square both sides: x < 9",
                        "Intersect with domain: 0 ≤ x < 9"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "√(x + 1) ≤ 2",
                    solution: "-1 ≤ x ≤ 3",
                    steps: [
                        "Domain: x + 1 ≥ 0, so x ≥ -1",
                        "Square both sides: x + 1 ≤ 4",
                        "Solve: x ≤ 3",
                        "Intersect with domain: -1 ≤ x ≤ 3"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "√(2x) > 4",
                    solution: "x > 8",
                    steps: [
                        "Domain: 2x ≥ 0, so x ≥ 0",
                        "Square both sides: 2x > 16",
                        "Solve: x > 8",
                        "Already satisfies domain"
                    ],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "√(x - 3) < x - 3",
                    solution: "3 ≤ x < 4 or x > 4",
                    steps: [
                        "Domain: x - 3 ≥ 0, so x ≥ 3",
                        "Case 1: x - 3 < 0 (impossible, contradicts domain)",
                        "Case 2: x - 3 ≥ 0, square: x - 3 < (x-3)²",
                        "Let u = x - 3: u < u², u² - u > 0, u(u-1) > 0",
                        "u < 0 or u > 1, meaning x < 3 or x > 4",
                        "Intersect with domain: x > 4"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "√(x + 5) > 2x - 1",
                    solution: "x ≥ -5 and x < 2",
                    steps: [
                        "Domain: x ≥ -5",
                        "Case 1: 2x - 1 < 0 (x < 0.5), inequality always true for x in domain",
                        "Case 2: 2x - 1 ≥ 0 (x ≥ 0.5), square: x + 5 > 4x² - 4x + 1",
                        "Rearrange: 4x² - 5x - 4 < 0",
                        "Solve quadratic inequality",
                        "Combine cases"
                    ],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "√(x² - 4) ≤ x - 2",
                    solution: "Solution depends on careful analysis",
                    steps: [
                        "Domain: x² - 4 ≥ 0, so x ≤ -2 or x ≥ 2",
                        "Also need x - 2 ≥ 0 for squaring, so x ≥ 2",
                        "Working domain: x ≥ 2",
                        "Square: x² - 4 ≤ x² - 4x + 4",
                        "Simplify: 4x ≤ 8, x ≤ 2",
                        "Solution: x = 2 only"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "√(x + 3) + √(x - 2) < 5",
                    solution: "Complex compound radical",
                    steps: [
                        "Domain: x ≥ 2",
                        "Isolate one radical: √(x+3) < 5 - √(x-2)",
                        "Square (need 5 - √(x-2) > 0): x + 3 < 25 - 10√(x-2) + (x-2)",
                        "Simplify and isolate: 10√(x-2) < 20",
                        "Square again: 100(x-2) < 400",
                        "Solve and verify"
                    ],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                simple_radical: [
                    { problem: "√x ≤ 5", solution: "0 ≤ x ≤ 25" },
                    { problem: "√(x-1) > 3", solution: "x > 10" },
                    { problem: "√(2x+3) < 4", solution: "-1.5 ≤ x < 6.5" }
                ],
                radical_linear: [
                    { problem: "√x < x", solution: "0 < x < 1 or x > 1" },
                    { problem: "√(x+1) ≥ x - 1", solution: "x ≥ -1" },
                    { problem: "√(3x-2) > x + 1", solution: "specific solution" }
                ],
                compound_radical: [
                    { problem: "√x + √(x-1) < 3", solution: "1 ≤ x < specific value" },
                    { problem: "√(x+2) - √x < 1", solution: "x ≥ 0" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            negative_radical: {
                misconception: "Thinking √x can be negative",
                reality: "√x represents principal (non-negative) square root only",
                correctiveExample: "√4 = 2, not ±2. The ± only appears when solving x² = 4",
                commonIn: ['all_radical']
            },
            squaring_inequality: {
                misconception: "Thinking squaring preserves inequality direction always",
                reality: "Squaring only preserves inequality when both sides are non-negative",
                correctiveExample: "-3 < -2, but (-3)² = 9 > 4 = (-2)². Need both sides ≥ 0 first",
                commonIn: ['simple_radical', 'radical_linear']
            },
            domain_ignorance: {
                misconception: "Forgetting to check domain restrictions",
                reality: "Radicand must be ≥ 0 for real-valued square roots",
                correctiveExample: "√(x-5) requires x ≥ 5. Solutions outside this are invalid",
                commonIn: ['all_radical']
            },
            extraneous_solutions: {
                misconception: "Accepting all solutions from squared equation",
                reality: "Squaring can introduce extraneous solutions that don't satisfy original",
                correctiveExample: "√x = -2 has no solution, but x = 4 solves x = 4. Must verify!",
                commonIn: ['all_radical']
            },
            case_analysis_skip: {
                misconception: "Not considering cases when right side can be negative",
                reality: "Must analyze cases based on sign before squaring",
                correctiveExample: "For √x > 2x-1, need Case 1: 2x-1<0 and Case 2: 2x-1≥0",
                commonIn: ['radical_linear']
            },
            radical_properties: {
                misconception: "Thinking √(a+b) = √a + √b",
                reality: "√(a+b) ≠ √a + √b in general (only equal if one is zero)",
                correctiveExample: "√(4+9) = √13 ≠ 2 + 3 = 5",
                commonIn: ['compound_radical']
            },
            inequality_direction: {
                misconception: "Forgetting when inequality flips",
                reality: "Inequality flips when multiplying/dividing by negative number",
                correctiveExample: "If -2x < 6, then x > -3 (inequality flipped)",
                commonIn: ['all_radical']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            radical_domain: {
                analogy: "Square root like a factory that only accepts non-negative inputs",
                explanation: "Just as a factory has input requirements, √x only accepts x ≥ 0. Trying to input negative numbers is like trying to use incompatible materials",
                suitableFor: ['all_radical'],
                ELI5: "Imagine a machine that can only work with things that are zero or bigger. If you try to put in a negative number, the machine says 'no way!' and won't work"
            },
            squaring_inequality: {
                analogy: "Squaring like zooming in - can distort perspective",
                explanation: "When you square both sides, you're changing the scale. This can introduce new 'solutions' that don't exist in the original problem, like a photo that looks different when enlarged",
                suitableFor: ['all_radical'],
                ELI5: "Squaring both sides is like putting on special glasses that make some things appear that weren't really there. That's why we have to check our answers carefully!"
            },
            verification: {
                analogy: "Checking solutions like trying a key in a lock",
                explanation: "Just as you test a key to see if it actually opens the lock, you must test solutions in the original inequality to see if they truly work",
                suitableFor: ['all_radical'],
                ELI5: "After solving, we need to make sure our answer really works, like checking that a puzzle piece actually fits before gluing it down"
            },
            case_analysis: {
                analogy: "Cases like choosing different routes based on weather",
                explanation: "Just as you might take different routes to school depending on if it's raining or sunny, we need different approaches depending on whether expressions are positive or negative",
                suitableFor: ['radical_linear', 'compound_radical'],
                ELI5: "Sometimes we need to split the problem into two or more parts, like choosing what to wear based on if it's hot or cold outside"
            },
            principal_root: {
                analogy: "√x like picking the 'main' answer from two choices",
                explanation: "While 4 has two square roots (2 and -2), √4 means specifically the positive one. It's like having a main entrance even though a building has multiple doors",
                suitableFor: ['all_radical'],
                ELI5: "Even though both 3 and -3 when squared give 9, √9 always means the positive answer, 3. We always pick the positive one!"
            },
            domain_solution_intersection: {
                analogy: "Like finding overlap between two circles in Venn diagram",
                explanation: "The final solution must satisfy BOTH the domain (where radical is defined) AND the inequality (what we solved for)",
                suitableFor: ['all_radical'],
                ELI5: "Imagine you can only play in the park (domain) and you also want to be near the swings (solution). The place you can actually be is where both of these areas overlap!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            simple_radical_less_than: {
                level1: "What must be true for the radical to be defined?",
                level2: "Can you square both sides? Is the right side positive?",
                level3: "Square both sides and solve, then intersect with domain",
                level4: "Domain: radicand ≥ 0. If c > 0, square: radicand < c². Intersect."
            },
            simple_radical_greater_than: {
                level1: "First, find where the radical is defined",
                level2: "Is the constant positive or negative?",
                level3: "Square both sides if constant is positive, solve, intersect with domain",
                level4: "Domain: radicand ≥ 0. If c ≥ 0, square: radicand > c². If c < 0, entire domain is solution."
            },
            radical_linear_less: {
                level1: "Find domain. Can the linear expression be negative?",
                level2: "Split into cases based on sign of linear expression",
                level3: "Case 1: linear < 0 (analyze). Case 2: linear ≥ 0 (can square)",
                level4: "Domain first. If right side < 0, no solution (since √ ≥ 0). If right side ≥ 0, square and solve."
            },
            radical_linear_greater: {
                level1: "What's the domain? When is the right side negative?",
                level2: "Consider: if right side is negative, is inequality always true?",
                level3: "Case 1: right < 0 (always true on domain). Case 2: right ≥ 0 (square)",
                level4: "Domain: radicand ≥ 0. Case analysis on sign of linear expression. Combine solutions."
            },
            compound_radical: {
                level1: "What are ALL the domain restrictions?",
                level2: "Can you isolate one radical first?",
                level3: "Isolate one radical, square carefully, simplify, repeat if needed",
                level4: "Find domain from all radicands. Isolate radicals one at a time. Square systematically. Verify all solutions."
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "What is the domain of √(x - 2)?",
                    answer: "x ≥ 2",
                    assesses: "domain_understanding",
                    difficulty: "basic"
                },
                {
                    question: "Solve: √x < 4",
                    answer: "0 ≤ x < 16",
                    assesses: "simple_radical",
                    difficulty: "basic"
                },
                {
                    question: "True or False: √9 = ±3",
                    answer: "False (√9 = 3 only, principal root)",
                    assesses: "principal_root_concept",
                    difficulty: "basic"
                },
                {
                    question: "Solve: √(x + 1) ≥ 3",
                    answer: "x ≥ 8",
                    assesses: "simple_radical_greater_equal",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "Before solving √(2x-3) < 5, what must you check first?",
                    options: ["Square both sides", "Find domain: 2x-3 ≥ 0", "Solve 2x-3 < 25", "Factor"],
                    correct: "Find domain: 2x-3 ≥ 0",
                    explanation: "Domain restriction must always be found first"
                },
                {
                    question: "If √x > -2, what is the solution?",
                    options: ["x > 4", "No solution", "All x ≥ 0", "x < 4"],
                    correct: "All x ≥ 0",
                    explanation: "√x is always ≥ 0, so always > -2 for all values in domain"
                },
                {
                    question: "When can you safely square both sides of an inequality?",
                    options: [
                        "Always",
                        "Never",
                        "When both sides are non-negative",
                        "Only for equations"
                    ],
                    correct: "When both sides are non-negative",
                    explanation: "Squaring preserves inequality only when both sides ≥ 0"
                },
                {
                    question: "Why do we need to verify solutions?",
                    options: [
                        "To practice arithmetic",
                        "Because squaring can introduce extraneous solutions",
                        "It's not necessary",
                        "Only for equations"
                    ],
                    correct: "Because squaring can introduce extraneous solutions",
                    explanation: "Squaring is not a reversible operation for inequalities"
                }
            ],
            summative: [
                {
                    question: "Solve: √(3x - 2) ≤ x",
                    answer: "2/3 ≤ x ≤ 2",
                    showsWork: true,
                    rubric: {
                        domain: 1,
                        case_analysis: 2,
                        squaring_correctly: 2,
                        solving_resulting_inequality: 2,
                        intersection: 1,
                        verification: 2
                    }
                },
                {
                    question: "Solve: √x + √(x-1) < 2",
                    answer: "1 ≤ x < specific value",
                    showsWork: true,
                    rubric: {
                        domain_both_radicals: 2,
                        isolation: 2,
                        first_squaring: 2,
                        simplification: 2,
                        second_squaring: 2,
                        final_solve: 2,
                        verification: 3
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "√x ≤ 3",
                    "√(x + 2) > 1",
                    "√(2x) < 6",
                    "√(x - 1) ≥ 2"
                ],
                medium: [
                    "√(x + 3) < x - 1",
                    "√(2x - 1) ≥ x - 2",
                    "√(x² - 4) > x",
                    "√(4 - x) ≤ x"
                ],
                hard: [
                    "√(x + 1) + √(2x - 3) < 4",
                    "√(x² - 2x + 1) > 2x - 3",
                    "√(x + 5)/(x - 2) ≤ 1",
                    "|√(x - 1) - 2| < 1"
                ]
            },
            byObjective: {
                canFindDomain: [
                    "Find domain: √(x - 3)",
                    "Find domain: √(2x + 5)",
                    "Find domain: √(x² - 9)",
                    "Find domain: √(x + 1) + √(x - 2)"
                ],
                canSolveSimpleRadical: [
                    "√x < 5",
                    "√(x + 1) ≤ 3",
                    "√(2x - 1) > 4",
                    "√(3x) ≥ 6"
                ],
                canHandleCases: [
                    "√x > x - 2",
                    "√(x + 1) < 2x",
                    "√(x - 1) ≥ x - 3"
                ],
                canVerifySolutions: [
                    "Verify x = 5 in √(x - 1) < 2",
                    "Verify x = 10 in √x > 2",
                    "Check if x = 0 satisfies √(x + 4) ≥ 2"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "simple_radical_vs_constant": "Find domain, check sign of constant, square if appropriate",
                "radical_vs_linear": "Find domain, case analysis on sign of linear, square in appropriate case",
                "compound_radical": "Find all domains, isolate radicals one at a time, square systematically",
                "radical_polynomial": "Find domain, square to get polynomial inequality, solve with test points",
                "radical_rational": "Find domain AND denominator restrictions, sign analysis"
            },
            whenToUseWhat: {
                domain_first: "ALWAYS - before any other step",
                case_analysis: "When comparing radical to variable expression",
                squaring: "Only when both sides are non-negative",
                test_points: "For polynomial or compound inequalities after squaring",
                verification: "ALWAYS - after finding algebraic solution"
            },
            methodSelection: {
                factorsToConsider: [
                    "Type of expression under radical (linear, polynomial, rational)",
                    "What radical is compared to (constant, linear, another radical)",
                    "Number of radicals present",
                    "Presence of other operations (absolute value, fractions)",
                    "Complexity of resulting inequality after squaring"
                ],
                generalApproach: [
                    "1. Find domain: all radicand(s) ≥ 0",
                    "2. Analyze if squaring is valid (both sides ≥ 0)",
                    "3. Perform case analysis if needed",
                    "4. Square and solve resulting inequality",
                    "5. Intersect solution with domain",
                    "6. Verify solutions in original inequality",
                    "7. Express answer in interval notation"
                ]
            },
            optimizationTips: {
                "Check special cases first": "√x > negative number → entire domain; √x < negative → no solution",
                "Simplify before squaring": "Make expressions as simple as possible",
                "Track domain carefully": "Write it down and refer to it",
                "Verify boundary points": "Test endpoints of solution intervals",
                "Use number line": "Visualize domain and solution sets"
            },
            commonPatterns: {
                "√(linear) < constant": "Domain: linear ≥ 0. If c > 0, square: linear < c². Intersect.",
                "√(linear) > constant": "Domain: linear ≥ 0. If c < 0, entire domain. If c ≥ 0, square: linear > c².",
                "√(expression) < linear": "Cases based on sign of linear expression",
                "√A + √B < c": "Isolate one radical, square, isolate again if needed"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Simple Radical Sprint",
                    timeLimit: 120,
                    problems: [
                        "√x < 2",
                        "√(x + 1) ≥ 3",
                        "√(2x) > 4",
                        "√(x - 3) ≤ 1",
                        "√(3x + 6) < 6"
                    ]
                },
                {
                    name: "Domain Challenge",
                    timeLimit: 90,
                    problems: [
                        "Find domain: √(x - 5)",
                        "Find domain: √(2x + 3)",
                        "Find domain: √(x² - 4)",
                        "Find domain: √(x + 1) + √(x - 2)",
                        "Find domain: √(4 - x²)"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Inequality",
                    problem: "√(x + a) < b has solution 0 ≤ x < 5",
                    given: "Find a and b",
                    solution: "a = 4, b = 3 (one possibility)"
                },
                {
                    name: "Extraneous Detective",
                    problem: "Which values are extraneous solutions?",
                    setup: "After squaring √(x - 2) > x - 4, we get x - 2 > x² - 8x + 16",
                    task: "Solve and identify extraneous solutions"
                },
                {
                    name: "Case Builder",
                    problem: "Create a radical inequality requiring exactly 2 cases",
                    constraint: "Solution must involve case analysis",
                    sampleSolution: "√x < 2x - 1"
                }
            ],
            applications: [
                {
                    scenario: "Free Fall Physics",
                    problem: "Object falls from height h. Velocity v = √(2gh). If v must stay below 20 m/s, find h constraints. (g = 10 m/s²)",
                    equation: "√(20h) < 20",
                    solution: "h < 20 meters"
                },
                {
                    scenario: "Circular Region",
                    problem: "Points within distance 5 from origin: √(x² + y²) < 5. For fixed y = 3, find x range.",
                    equation: "√(x² + 9) < 5",
                    solution: "-4 < x < 4"
                },
                {
                    scenario: "Investment Volatility",
                    problem: "Portfolio standard deviation σ = √(variance). Risk tolerance: σ < 15%. If variance = 0.01x, find x constraints.",
                    equation: "√(0.01x) < 0.15",
                    solution: "x < 2.25"
                },
                {
                    scenario: "Acoustic Safety",
                    problem: "Sound intensity I proportional to √P (power). Safe level: √P < 10. Find power constraint.",
                    equation: "√P < 10",
                    solution: "P < 100"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "√(x - 1) < 2",
                        "Square both sides: x - 1 < 4",  // ERROR: forgot domain
                        "x < 5",
                        "Solution: x < 5"  // Wrong: should be 1 ≤ x < 5
                    ],
                    correctAnswer: "1 ≤ x < 5",
                    errorType: "Forgot domain restriction"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "√x > -3",
                        "Square both sides: x > 9",  // ERROR: unnecessary squaring
                        "Solution: x > 9"  // Wrong: should be x ≥ 0
                    ],
                    correctAnswer: "x ≥ 0 (entire domain)",
                    errorType: "Squared when right side was negative"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "√(x + 1) < x - 1",
                        "Domain: x ≥ -1",
                        "Square: x + 1 < x² - 2x + 1",  // ERROR: didn't check if x-1 ≥ 0
                        "x² - 3x > 0",
                        "x < 0 or x > 3",
                        "Intersect with domain: x > 3"  // Missing case analysis
                    ],
                    correctAnswer: "Need case analysis on sign of x - 1",
                    errorType: "Squared without checking right side non-negative"
                },
                {
                    name: "Find the Error #4",
                    incorrectWork: [
                        "√x + √(x - 1) < 3",
                        "Domain: x ≥ 1",
                        "Square both sides: x + (x-1) < 9",  // ERROR: (a+b)² ≠ a² + b²
                        "2x - 1 < 9",
                        "x < 5"
                    ],
                    correctAnswer: "Must isolate one radical before squaring",
                    errorType: "Incorrectly squared sum of radicals"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveRadicalProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseRadicalProblem(equation, scenario, parameters, problemType, context);
            this.currentSolution = this.solveRadicalProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateRadicalSteps(this.currentProblem, this.currentSolution);
            this.generateRadicalGraphData();
            this.generateRadicalWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionSet: this.currentSolution?.solutionSet,
                solutionType: this.currentSolution?.solutionType
            };

        } catch (error) {
            throw new Error(`Failed to solve radical inequality: ${error.message}`);
        }
    }

    parseRadicalProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        if (problemType && this.radicalTypes[problemType]) {
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

        for (const [type, config] of Object.entries(this.radicalTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractRadicalParameters(match, type);

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

        if (parameters.radicand || parameters.constant !== undefined) {
            return {
                originalInput: equation || 'Radical inequality with given parameters',
                cleanInput: cleanInput,
                type: 'simple_radical_less_than',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize radical inequality type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/≠/g, '!=')
            .replace(/sqrt/gi, '√')
            .trim();
    }

    extractRadicalParameters(match, type) {
        const params = {};
        if (!match) return params;

        switch(type) {
            case 'simple_radical_less_than':
            case 'simple_radical_greater_than':
            case 'simple_radical_less_equal':
            case 'simple_radical_greater_equal':
                params.radicand = match[1];
                params.constant = parseFloat(match[2]);
                break;

            case 'radical_linear_less':
            case 'radical_linear_greater':
                params.radicand = match[1];
                params.linearExpression = match[2];
                break;
        }

        return params;
    }

    solveRadicalProblem_Internal(problem) {
        const solver = this.radicalTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for radical inequality type: ${problem.type}`);
        }

        return solver(problem);
    }

    // RADICAL INEQUALITY SOLVERS

    solveSimpleRadicalLessThan(problem) {
        const { radicand, constant } = problem.parameters;
        
        return {
            inequality: `√(${radicand}) < ${constant}`,
            type: 'Simple Radical Inequality (Less Than)',
            radicand: radicand,
            constant: constant,
            domain: `${radicand} ≥ 0`,
            specialCase: this.checkSpecialCase('less_than', constant),
            solutionApproach: constant > 0 ? 'Can square both sides' : 'No solution (√x always ≥ 0)',
            solutionSet: this.computeSimpleRadicalLessThan(radicand, constant),
            solutionType: 'Interval',
            category: 'simple_radical'
        };
    }

    solveSimpleRadicalGreaterThan(problem) {
        const { radicand, constant } = problem.parameters;
        
        return {
            inequality: `√(${radicand}) > ${constant}`,
            type: 'Simple Radical Inequality (Greater Than)',
            radicand: radicand,
            constant: constant,
            domain: `${radicand} ≥ 0`,
            specialCase: this.checkSpecialCase('greater_than', constant),
            solutionApproach: constant < 0 ? 'Entire domain (√x always ≥ 0)' : 'Square both sides',
            solutionSet: this.computeSimpleRadicalGreaterThan(radicand, constant),
            solutionType: 'Interval',
            category: 'simple_radical'
        };
    }

    solveSimpleRadicalLessEqual(problem) {
        const { radicand, constant } = problem.parameters;
        
        return {
            inequality: `√(${radicand}) ≤ ${constant}`,
            type: 'Simple Radical Inequality (Less Than or Equal)',
            radicand: radicand,
            constant: constant,
            domain: `${radicand} ≥ 0`,
            specialCase: this.checkSpecialCase('less_equal', constant),
            solutionApproach: constant >= 0 ? 'Can square both sides' : 'No solution',
            solutionSet: this.computeSimpleRadicalLessEqual(radicand, constant),
            solutionType: 'Interval',
            category: 'simple_radical'
        };
    }

    solveSimpleRadicalGreaterEqual(problem) {
        const { radicand, constant } = problem.parameters;
        
        return {
            inequality: `√(${radicand}) ≥ ${constant}`,
            type: 'Simple Radical Inequality (Greater Than or Equal)',
            radicand: radicand,
            constant: constant,
            domain: `${radicand} ≥ 0`,
            specialCase: this.checkSpecialCase('greater_equal', constant),
            solutionApproach: constant <= 0 ? 'Entire domain' : 'Square both sides',
            solutionSet: this.computeSimpleRadicalGreaterEqual(radicand, constant),
            solutionType: 'Interval',
            category: 'simple_radical'
        };
    }

    solveRadicalLinearLess(problem) {
        const { radicand, linearExpression } = problem.parameters;
        
        return {
            inequality: `√(${radicand}) < ${linearExpression}`,
            type: 'Radical Less Than Linear Expression',
            radicand: radicand,
            linearExpression: linearExpression,
            domain: `${radicand} ≥ 0`,
            requiresCaseAnalysis: true,
            cases: [
                `Case 1: ${linearExpression} < 0 (no solution, since √ ≥ 0)`,
                `Case 2: ${linearExpression} ≥ 0 (can square both sides)`
            ],
            solutionApproach: 'Analyze cases based on sign of linear expression',
            solutionSet: 'Depends on case analysis',
            solutionType: 'Interval (after case analysis)',
            category: 'radical_linear'
        };
    }

    solveRadicalLinearGreater(problem) {
        const { radicand, linearExpression } = problem.parameters;
        
        return {
            inequality: `√(${radicand}) > ${linearExpression}`,
            type: 'Radical Greater Than Linear Expression',
            radicand: radicand,
            linearExpression: linearExpression,
            domain: `${radicand} ≥ 0`,
            requiresCaseAnalysis: true,
            cases: [
                `Case 1: ${linearExpression} < 0 (always true on domain)`,
                `Case 2: ${linearExpression} ≥ 0 (square both sides)`
            ],
            solutionApproach: 'Analyze cases based on sign of linear expression',
            solutionSet: 'Depends on case analysis',
            solutionType: 'Interval (union of cases)',
            category: 'radical_linear'
        };
    }

    solveCompoundRadical(problem) {
        return {
            type: 'Compound Radical Inequality',
            approach: 'Isolate radicals one at a time, square systematically',
            note: 'Track all domain restrictions; verify solutions carefully',
            requiresMultipleSquaring: true,
            category: 'compound_radical'
        };
    }

    solveRadicalPolynomial(problem) {
        return {
            type: 'Radical with Polynomial',
            approach: 'Square to obtain polynomial inequality, use test point method',
            note: 'Domain restrictions plus polynomial critical points',
            category: 'radical_polynomial'
        };
    }

    solveRadicalRational(problem) {
        return {
            type: 'Radical with Rational Expression',
            approach: 'Find domain (radicand ≥ 0) AND restrictions (denominator ≠ 0), sign analysis',
            note: 'Multiple restrictions to track',
            category: 'radical_rational'
        };
    }

    solveRadicalAbsoluteValue(problem) {
        return {
            type: 'Radical with Absolute Value',
            approach: 'Combine absolute value case analysis with radical domain analysis',
            note: 'Systematic case handling essential',
            category: 'radical_absolute_value'
        };
    }

    // HELPER METHODS FOR SOLUTIONS

    checkSpecialCase(inequalityType, constant) {
        const cases = {
            'less_than': {
                negative: 'No solution (√x ≥ 0 always)',
                zero: 'No solution (√x ≥ 0, cannot be < 0)',
                positive: 'Can proceed with squaring'
            },
            'greater_than': {
                negative: 'Entire domain (√x ≥ 0 > any negative)',
                zero: 'All positive values in domain',
                positive: 'Can proceed with squaring'
            },
            'less_equal': {
                negative: 'No solution',
                zero: 'Only where radicand = 0',
                positive: 'Can proceed with squaring'
            },
            'greater_equal': {
                negative: 'Entire domain',
                zero: 'Entire domain (√x ≥ 0 always)',
                positive: 'Can proceed with squaring'
            }
        };

        const sign = constant < 0 ? 'negative' : (constant === 0 ? 'zero' : 'positive');
        return cases[inequalityType]?.[sign] || 'Normal case';
    }

    computeSimpleRadicalLessThan(radicand, constant) {
        if (constant <= 0) {
            return 'No solution';
        }
        return `Domain: ${radicand} ≥ 0, and ${radicand} < ${constant * constant}`;
    }

    computeSimpleRadicalGreaterThan(radicand, constant) {
        if (constant < 0) {
            return `Entire domain: ${radicand} ≥ 0`;
        }
        return `${radicand} > ${constant * constant}`;
    }

    computeSimpleRadicalLessEqual(radicand, constant) {
        if (constant < 0) {
            return 'No solution';
        }
        if (constant === 0) {
            return `${radicand} = 0`;
        }
        return `Domain: ${radicand} ≥ 0, and ${radicand} ≤ ${constant * constant}`;
    }

    computeSimpleRadicalGreaterEqual(radicand, constant) {
        if (constant <= 0) {
            return `Entire domain: ${radicand} ≥ 0`;
        }
        return `${radicand} ≥ ${constant * constant}`;
    }

    // STEP GENERATION

    generateRadicalSteps(problem, solution) {
        let baseSteps = this.generateBaseRadicalSteps(problem, solution);

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

    generateBaseRadicalSteps(problem, solution) {
        const { type } = problem;
        const category = this.radicalTypes[type]?.category;

        switch(category) {
            case 'simple_radical':
                return this.generateSimpleRadicalSteps(problem, solution);
            case 'radical_linear':
                return this.generateRadicalLinearSteps(problem, solution);
            case 'compound_radical':
                return this.generateCompoundRadicalSteps(problem, solution);
            default:
                return this.generateGenericRadicalSteps(problem, solution);
        }
    }

    generateSimpleRadicalSteps(problem, solution) {
        const steps = [];

        // Step 1: Given inequality
        steps.push({
            stepNumber: 1,
            step: 'Given inequality',
            description: 'Start with the radical inequality',
            expression: solution.inequality,
            reasoning: 'This is a simple radical inequality comparing a square root to a constant',
            goalStatement: 'We need to isolate the variable while respecting domain restrictions'
        });

        // Step 2: Find domain
        steps.push({
            stepNumber: 2,
            step: 'Find domain restriction',
            description: 'Determine where the radical is defined',
            expression: solution.domain,
            reasoning: 'Square roots require non-negative radicands',
            algebraicRule: 'For √A to be real, we need A ≥ 0',
            criticalConcept: 'ALWAYS find domain FIRST before solving',
            visualHint: 'Mark domain on number line as allowed region'
        });

        // Step 3: Check special cases
        if (solution.specialCase && solution.specialCase !== 'Normal case') {
            steps.push({
                stepNumber: 3,
                step: 'Analyze special case',
                description: `Constant is ${solution.constant}`,
                expression: solution.specialCase,
                reasoning: this.getSpecialCaseReasoning(solution.constant, problem.type),
                specialCase: true
            });

            if (solution.specialCase.includes('No solution') || solution.specialCase.includes('Entire domain')) {
                steps.push({
                    stepNumber: 4,
                    step: 'Final answer',
                    description: 'Solution determined by special case',
                    expression: solution.solutionSet,
                    finalAnswer: true
                });
                return steps;
            }
        }

        // Step 4: Square both sides (if applicable)
        if (solution.constant > 0 || (solution.constant === 0 && problem.type.includes('equal'))) {
            steps.push({
                stepNumber: steps.length + 1,
                step: 'Square both sides',
                description: `Since both sides are non-negative, we can square`,
                beforeExpression: solution.inequality,
                operation: 'Square both sides',
                afterExpression: `${solution.radicand} ${this.getInequalitySymbol(problem.type)} ${solution.constant * solution.constant}`,
                reasoning: 'Squaring preserves inequality when both sides ≥ 0',
                algebraicRule: 'If 0 ≤ a < b, then a² < b²',
                warning: 'Squaring can introduce extraneous solutions - must verify!'
            });
        }

        // Step 5: Solve resulting inequality
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Solve for variable',
            description: 'Solve the resulting linear inequality',
            expression: solution.solutionSet,
            reasoning: 'Solving the inequality after removing the radical'
        });

        // Step 6: Intersect with domain
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Intersect with domain',
            description: 'Combine solution with domain restriction',
            expression: solution.solutionSet,
            reasoning: 'Solution must satisfy both the inequality AND the domain',
            visualHint: 'Find overlap of solution interval and domain on number line'
        });

        // Step 7: Verification
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Verify solution',
            description: 'Check solution in original inequality',
            reasoning: 'Always verify to catch extraneous solutions',
            verificationMethod: 'Test values from solution interval and boundary points',
            finalAnswer: true
        });

        return steps;
    }

    generateRadicalLinearSteps(problem, solution) {
        const steps = [];

        // Step 1: Given inequality
        steps.push({
            stepNumber: 1,
            step: 'Given inequality',
            description: 'Start with radical compared to linear expression',
            expression: solution.inequality,
            reasoning: 'This requires case analysis based on sign of linear expression',
            goalStatement: 'Determine when we can safely square both sides'
        });

        // Step 2: Domain
        steps.push({
            stepNumber: 2,
            step: 'Find domain',
            description: 'Radical must be defined',
            expression: solution.domain,
            reasoning: 'Radicand must be non-negative',
            criticalConcept: 'Domain is our first restriction'
        });

        // Step 3: Case analysis setup
        steps.push({
            stepNumber: 3,
            step: 'Set up case analysis',
            description: 'Linear expression can be positive or negative',
            expression: 'Need to consider sign of right side',
            reasoning: 'Can only square when both sides are non-negative',
            cases: solution.cases
        });

        // Step 4: Case 1
        steps.push({
            stepNumber: 4,
            step: 'Analyze Case 1',
            description: solution.cases[0],
            reasoning: this.getCaseReasoning('case1', problem.type),
            caseNumber: 1
        });

        // Step 5: Case 2
        steps.push({
            stepNumber: 5,
            step: 'Analyze Case 2',
            description: solution.cases[1],
            reasoning: this.getCaseReasoning('case2', problem.type),
            caseNumber: 2,
            canSquare: true
        });

        // Step 6: Combine cases
        steps.push({
            stepNumber: 6,
            step: 'Combine cases',
            description: 'Union or intersection of case solutions',
            expression: 'Solution from both cases',
            reasoning: 'Take union of solutions from all valid cases'
        });

        // Step 7: Verify
        steps.push({
            stepNumber: 7,
            step: 'Verify',
            description: 'Test solution in original inequality',
            finalAnswer: true
        });

        return steps;
    }

    generateCompoundRadicalSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given inequality',
            description: 'Inequality with multiple radicals',
            expression: problem.cleanInput,
            reasoning: 'Requires systematic isolation and squaring',
            warning: 'Multiple squaring steps increase chance of extraneous solutions'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find all domain restrictions',
            description: 'Each radical creates a domain restriction',
            reasoning: 'All radicands must be non-negative simultaneously',
            criticalConcept: 'Domain is intersection of all individual domains'
        });

        steps.push({
            stepNumber: 3,
            step: 'Isolate one radical',
            description: 'Move one radical to one side alone',
            reasoning: 'Need one radical isolated before squaring'
        });

        steps.push({
            stepNumber: 4,
            step: 'First squaring',
            description: 'Square both sides carefully',
            reasoning: 'Eliminates one radical but may create others',
            warning: 'Must expand (a + b)² correctly as a² + 2ab + b²'
        });

        steps.push({
            stepNumber: 5,
            step: 'Simplify and repeat if needed',
            description: 'Continue process until all radicals eliminated',
            reasoning: 'May need multiple squaring steps'
        });

        steps.push({
            stepNumber: 6,
            step: 'Solve resulting inequality',
            description: 'After all radicals eliminated',
            reasoning: 'May result in polynomial or other inequality type'
        });

        steps.push({
            stepNumber: 7,
            step: 'Intersect with all domain restrictions',
            description: 'Solution must satisfy all domains',
            criticalConcept: 'Do not lose track of domain during manipulation'
        });

        steps.push({
            stepNumber: 8,
            step: 'Verify thoroughly',
            description: 'Test multiple points',
            reasoning: 'Multiple squarings increase risk of extraneous solutions',
            finalAnswer: true
        });

        return steps;
    }

    generateGenericRadicalSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Radical inequality',
            description: 'Solve the given radical inequality',
            expression: problem.cleanInput || solution.inequality,
            reasoning: 'Apply appropriate radical inequality technique',
            solution: solution
        }];
    }

    getInequalitySymbol(type) {
        if (type.includes('less_than') && !type.includes('equal')) return '<';
        if (type.includes('greater_than') && !type.includes('equal')) return '>';
        if (type.includes('less_equal')) return '≤';
        if (type.includes('greater_equal')) return '≥';
        return '<';
    }

    getSpecialCaseReasoning(constant, type) {
        if (constant < 0 && type.includes('less')) {
            return 'Since √x is always ≥ 0, it cannot be less than a negative number';
        }
        if (constant < 0 && type.includes('greater')) {
            return 'Since √x is always ≥ 0, it is always greater than any negative number';
        }
        if (constant === 0 && type.includes('less')) {
            return 'Since √x ≥ 0, the only way √x < 0 is if there are no solutions';
        }
        if (constant === 0 && type.includes('greater')) {
            return 'Since √x ≥ 0, it equals 0 only when radicand = 0';
        }
        return 'Special case analysis based on constant value';
    }

    getCaseReasoning(caseNum, type) {
        if (caseNum === 'case1' && type.includes('less')) {
            return 'When right side is negative, √x (always ≥ 0) cannot be less than it, so no solution in this case';
        }
        if (caseNum === 'case1' && type.includes('greater')) {
            return 'When right side is negative, √x (always ≥ 0) is always greater than it, so entire domain satisfies this case';
        }
        if (caseNum === 'case2') {
            return 'When right side is non-negative, both sides are ≥ 0 so we can safely square the inequality';
        }
        return 'Case analysis based on sign of expressions';
    }

    // ENHANCED EXPLANATION METHODS (using same structure as linear workbook)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationRadical(step, problem),
                procedural: this.getProceduralExplanationRadical(step),
                visual: this.getVisualExplanationRadical(step, problem),
                algebraic: this.getAlgebraicExplanationRadical(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyRadical(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsRadical(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionRadical(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionRadical(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationRadical(step, problem) {
        const conceptualExplanations = {
            'Given inequality': 'A radical inequality compares a square root expression to another value. The square root function has special properties we must respect.',
            'Find domain restriction': 'Square roots are only defined for non-negative numbers in the real number system. This creates a fundamental restriction on possible solutions.',
            'Analyze special case': 'When comparing √x to a negative number, we can use the fact that √x is always non-negative to immediately determine if solutions exist.',
            'Square both sides': 'Squaring both sides eliminates the radical, but only preserves the inequality direction when both sides are non-negative. This is why domain checking is crucial.',
            'Set up case analysis': 'When the right side contains a variable, it can be positive or negative depending on the value. We must consider these cases separately.',
            'Intersect with domain': 'The final solution must satisfy BOTH the algebraic inequality AND the domain restriction. We find where these overlap.',
            'Verify solution': 'Squaring can introduce solutions that don\'t work in the original inequality. Verification catches these "extraneous" solutions.'
        };

        return conceptualExplanations[step.step] || 'This step advances our understanding of where the inequality holds true.';
    }

    getProceduralExplanationRadical(step) {
        if (step.operation) {
            return `1. Check that operation is valid (domain/sign)
2. Perform operation on both sides
3. Simplify the result
4. Track any new restrictions`;
        }
        return 'Follow the systematic procedure for radical inequalities.';
    }

    getVisualExplanationRadical(step, problem) {
        const visualExplanations = {
            'Find domain restriction': 'On a number line, mark where the radicand is ≥ 0. This shaded region is where solutions can exist.',
            'Square both sides': 'Visualize y = √x and y = c. Squaring finds where x relates to c².',
            'Intersect with domain': 'Draw two intervals on number line: domain and solution. Shade only where they overlap.',
            'Case analysis': 'Split number line into regions where linear expression is positive vs negative.'
        };

        return visualExplanations[step.step] || 'Visualize the inequality on a coordinate plane or number line.';
    }

    getAlgebraicExplanationRadical(step) {
        const algebraicRules = {
            'Find domain restriction': 'Domain requirement: radicand ≥ 0 (fundamental property of real square roots)',
            'Square both sides': 'Squaring property: If 0 ≤ a < b, then a² < b². Requires non-negative sides.',
            'Intersect with domain': 'Intersection: Solution ∩ Domain',
            'Principal root': '√x denotes the principal (non-negative) square root only'
        };

        return algebraicRules[step.step] || 'Apply properties of radicals and inequalities.';
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
                'radicand': 'expression under the square root',
                'domain': 'allowed values',
                'principal root': 'positive square root',
                'extraneous': 'fake',
                'inequality': 'comparison',
                'non-negative': 'zero or positive',
                'intersect': 'overlap'
            },
            intermediate: {
                'radicand': 'radicand',
                'domain': 'domain',
                'principal root': 'principal root',
                'extraneous': 'extraneous',
                'inequality': 'inequality',
                'non-negative': 'non-negative',
                'intersect': 'intersect'
            },
            ELI5: {
                'radicand': 'the thing inside the square root symbol',
                'domain': 'the values we\'re allowed to use',
                'principal root': 'the positive answer when we take a square root',
                'extraneous': 'pretend solutions that don\'t really work',
                'inequality': 'a math sentence saying one thing is bigger or smaller than another',
                'non-negative': 'zero or any positive number',
                'intersect': 'where two things overlap',
                'square root': 'the number that when multiplied by itself gives you the number under the √ symbol',
                'verify': 'check to make sure it works',
                'case analysis': 'splitting into different situations to handle separately'
            },
            detailed: {
                'radicand': 'radicand (expression under radical symbol)',
                'domain': 'domain (set of permitted values)',
                'principal root': 'principal root (non-negative root)',
                'extraneous': 'extraneous (algebraically valid but not in original)',
                'inequality': 'inequality relation',
                'non-negative': 'non-negative (≥ 0)',
                'intersect': 'intersect (set intersection)'
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

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationRadical(step, problem),
                analogy: this.findRelevantAnalogyRadical(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestVisualizationRadical(step)
            }
        }));
    }

    generateELI5ExplanationRadical(step, problem) {
        const ELI5Explanations = {
            'Given inequality': "We have a puzzle with a square root! We need to find what numbers make this true.",
            'Find domain restriction': "Square roots are picky - they only work with zero or positive numbers. So first we figure out which numbers are even allowed!",
            'Analyze special case': "Sometimes we can be super smart! If we're comparing a square root (which is never negative) to a negative number, we already know the answer!",
            'Square both sides': "To get rid of the square root, we square both sides. It's like 'un-square-rooting' both sides to make them simpler!",
            'Set up case analysis': "The other side of our inequality might be positive or negative depending on what number we put in. So we need to check both possibilities separately!",
            'Intersect with domain': "Now we find the numbers that work for BOTH our answer AND the allowed numbers. It's like finding what's in common!",
            'Verify solution': "We need to test our answer in the original problem to make sure it really works, like checking if a key really opens a lock!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our square root puzzle and find the answer!";
    }

    findRelevantAnalogyRadical(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('all_radical')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like solving a puzzle - each step gets us closer to finding which numbers work!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'radicand': 'the thing under the square root',
            'domain': 'allowed numbers',
            'principal root': 'the positive square root',
            'extraneous': 'fake solutions',
            'inequality': 'comparison',
            'non-negative': 'zero or bigger',
            'intersect': 'overlap',
            'square both sides': 'multiply each side by itself',
            'case analysis': 'checking different situations',
            'verify': 'check if it works',
            'solution set': 'the answer',
            'interval': 'range of numbers'
        };

        let simple = description || '';
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualizationRadical(step) {
        const visualizations = {
            'Given inequality': 'Draw the square root symbol and what it\'s being compared to',
            'Find domain restriction': 'Draw a number line and shade only where the radicand is ≥ 0',
            'Analyze special case': 'Show on number line that √x is always on the positive side',
            'Square both sides': 'Show how squaring removes the √ symbol from both sides',
            'Set up case analysis': 'Draw a branching tree showing the two different cases',
            'Intersect with domain': 'Draw two number lines and shade where they overlap',
            'Verify solution': 'Make a table showing test values plugged into the original inequality'
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
                    explanation: this.generateStepBridgeRadical(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgressionRadical(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategyRadical(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeRadical(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || 'current state'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessityRadical(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefitRadical(nextStep)}`
        };
    }

    explainStepProgressionRadical(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving the radical inequality systematically`;
    }

    explainStepStrategyRadical(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessityRadical(currentStep, nextStep) {
        if (nextStep.step === 'Find domain restriction') {
            return 'we must establish where the radical is defined before attempting to solve';
        }
        if (nextStep.step === 'Square both sides') {
            return 'squaring will eliminate the radical and give us a solvable inequality';
        }
        if (nextStep.step === 'Intersect with domain') {
            return 'solutions must satisfy both the inequality and the domain restriction';
        }
        return 'we need to continue the systematic solution process';
    }

    explainStepBenefitRadical(nextStep) {
        if (nextStep.step === 'Find domain restriction') {
            return 'establishing the valid input range for our work';
        }
        if (nextStep.step === 'Square both sides') {
            return 'removing the radical to get a standard inequality';
        }
        if (nextStep.step === 'Verify solution') {
            return 'ensuring our answer is correct and catching extraneous solutions';
        }
        return 'moving us closer to the final solution';
    }

    addErrorPrevention(step, problemType) {
        const category = this.radicalTypes[problemType]?.category || 'simple_radical';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsRadical(step, problemType),
                checkPoints: this.generateCheckPointsRadical(step),
                warningFlags: this.identifyWarningFlagsRadical(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionRadical(step),
                expectedResult: this.describeExpectedResultRadical(step),
                troubleshooting: this.generateTroubleshootingTipsRadical(step)
            }
        };
    }

    generatePreventionTipsRadical(step, problemType) {
        const tips = {
            'Find domain restriction': [
                'ALWAYS find domain FIRST, before any other step',
                'Write domain clearly and refer to it throughout',
                'Check ALL radicands if multiple radicals present'
            ],
            'Square both sides': [
                'Only square when BOTH sides are non-negative',
                'Remember: (a + b)² = a² + 2ab + b², NOT a² + b²',
                'Note that squaring may introduce extraneous solutions'
            ],
            'Intersect with domain': [
                'Solution must satisfy BOTH inequality AND domain',
                'Use number line to visualize intersection',
                'Don\'t lose track of domain during manipulation'
            ],
            'Verify solution': [
                'ALWAYS verify - squaring can create fake solutions',
                'Test boundary points and values from solution interval',
                'Check in ORIGINAL inequality, not squared version'
            ],
            'Set up case analysis': [
                'Consider all possible signs of variable expressions',
                'Handle each case separately and completely',
                'Union or intersect cases appropriately'
            ]
        };

        return tips[step.step] || ['Work carefully and check each step', 'Keep track of domain restrictions'];
    }

    generateCheckPointsRadical(step) {
        const checkpoints = {
            'Find domain restriction': [
                'Did I set radicand ≥ 0?',
                'Did I solve for the variable correctly?',
                'If multiple radicals, did I find ALL domain restrictions?'
            ],
            'Square both sides': [
                'Are both sides non-negative?',
                'Did I square BOTH sides?',
                'Did I expand (a + b)² correctly if present?',
                'Did I maintain the correct inequality direction?'
            ],
            'Intersect with domain': [
                'Did I find where solution AND domain overlap?',
                'Am I using intersection (∩), not union (∪)?',
                'Does my final answer respect the domain?'
            ],
            'Verify solution': [
                'Did I substitute into ORIGINAL inequality?',
                'Did I test boundary points?',
                'Did I check multiple values from solution interval?',
                'Do all test values satisfy the inequality?'
            ]
        };

        return checkpoints[step.step] || [
            'Is this step moving toward the solution?',
            'Have I made any sign errors?',
            'Am I tracking domain restrictions?'
        ];
    }

    identifyWarningFlagsRadical(step, problemType) {
        const warnings = {
            simple_radical: step.step === 'Square both sides' ?
                ['Check that constant is positive before squaring', 'Squaring will require verification'] : [],
            radical_linear: step.step === 'Set up case analysis' ?
                ['Must consider sign of linear expression', 'Need separate cases for positive and negative'] : [],
            compound_radical: step.step === 'Square both sides' ?
                ['Multiple squaring steps increase extraneous solution risk', 'Track domain through all steps'] : []
        };

        const category = this.radicalTypes[problemType]?.category || 'simple_radical';
        return warnings[category] || [];
    }

    generateSelfCheckQuestionRadical(step) {
        const questions = {
            'Given inequality': 'Do I understand what values I\'m looking for?',
            'Find domain restriction': 'Have I correctly identified where the radical is defined?',
            'Analyze special case': 'Does the special case make sense given that √x ≥ 0?',
            'Square both sides': 'Are both sides non-negative so squaring is valid?',
            'Set up case analysis': 'Have I identified all necessary cases?',
            'Intersect with domain': 'Am I finding the overlap, not the union?',
            'Verify solution': 'Does my answer satisfy the original inequality?'
        };

        return questions[step.step] || 'Does this step make sense and follow logically from the previous step?';
    }

    describeExpectedResultRadical(step) {
        const expectations = {
            'Given inequality': 'A radical inequality to solve',
            'Find domain restriction': 'An inequality or interval showing where radical is defined',
            'Analyze special case': 'Quick conclusion if constant has special value',
            'Square both sides': 'Inequality without radical (but must verify later)',
            'Set up case analysis': 'Clear cases based on signs of expressions',
            'Intersect with domain': 'Final solution that respects domain',
            'Verify solution': 'Confirmation that solution works in original inequality'
        };

        return expectations[step.step] || 'Progress toward final solution';
    }

    generateTroubleshootingTipsRadical(step) {
        return [
            'If stuck, review the domain restriction',
            'Check that you\'re working with the correct inequality direction',
            'Verify you squared both sides correctly if applicable',
            'Try a specific test value to see if it should be in the solution',
            'Draw a number line to visualize domain and solution',
            'Remember: √x is ALWAYS non-negative'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsRadical(step, problem),
                subSteps: this.breakIntoSubStepsRadical(step),
                hints: this.generateProgressiveHintsRadical(step, problem),
                practiceVariation: this.generatePracticeVariationRadical(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessRadical(step),
                decisionPoints: this.identifyDecisionPointsRadical(step),
                alternativeApproaches: this.suggestAlternativeMethodsRadical(step, problem)
            }
        }));
    }

    generateGuidingQuestionsRadical(step, problem) {
        const questions = {
            'Given inequality': [
                'What type of radical inequality is this?',
                'What is being compared to what?',
                'Do I see any special features (multiple radicals, linear expressions, etc.)?'
            ],
            'Find domain restriction': [
                'What is inside the square root?',
                'When is that expression non-negative?',
                'How do I solve that inequality?'
            ],
            'Analyze special case': [
                'Is the constant positive, negative, or zero?',
                'What do I know about the sign of √x?',
                'Can I immediately determine if solutions exist?'
            ],
            'Square both sides': [
                'Are both sides non-negative?',
                'What happens to the inequality when I square?',
                'Will squaring introduce extraneous solutions?'
            ],
            'Set up case analysis': [
                'When is the right side positive?',
                'When is the right side negative?',
                'How does each case affect the inequality?'
            ],
            'Intersect with domain': [
                'What is my algebraic solution?',
                'What is my domain restriction?',
                'Where do these overlap?'
            ],
            'Verify solution': [
                'What values should I test?',
                'Do they satisfy the original inequality?',
                'Are there any extraneous solutions?'
            ]
        };

        return questions[step.step] || [
            'What is the goal of this step?',
            'How does this help solve the inequality?',
            'What could go wrong here?'
        ];
    }

    breakIntoSubStepsRadical(step) {
        const subSteps = {
            'Find domain restriction': [
                'Identify the radicand (expression under √)',
                'Set radicand ≥ 0',
                'Solve the resulting inequality',
                'Express domain in interval notation'
            ],
            'Square both sides': [
                'Verify both sides are non-negative',
                'Apply squaring to left side',
                'Apply squaring to right side',
                'Simplify the resulting inequality',
                'Note that verification will be needed'
            ],
            'Set up case analysis': [
                'Identify the expression that could be positive or negative',
                'Find where that expression equals zero',
                'Case 1: expression < 0',
                'Case 2: expression ≥ 0',
                'Plan to solve each case separately'
            ],
            'Intersect with domain': [
                'Write domain as interval',
                'Write solution as interval',
                'Find intersection (overlap)',
                'Express final answer'
            ]
        };

        return subSteps[step.step] || [
            'Understand what the step requires',
            'Apply the appropriate technique',
            'Simplify the result',
            'Check for errors'
        ];
    }

    generateProgressiveHintsRadical(step, problem) {
        const category = this.radicalTypes[problem.type]?.category || 'simple_radical';
        const hintSet = this.hints[category] || this.hints.simple_radical_less_than;

        return {
            level1: hintSet.level1 || 'Think about the domain first.',
            level2: hintSet.level2 || 'Consider when you can square both sides.',
            level3: hintSet.level3 || 'Square and solve, then intersect with domain.',
            level4: hintSet.level4 || 'Apply the full procedure for this inequality type.'
        };
    }

    generatePracticeVariationRadical(step, problem) {
        return {
            similarProblem: 'Try the same type of step with different numbers',
            practiceHint: 'Practice finding domains of various radical expressions',
            extension: 'Try with compound radicals or rational expressions under the radical'
        };
    }

    explainThinkingProcessRadical(step) {
        return {
            observe: 'What do I see in this inequality? What type is it?',
            goal: 'What am I trying to accomplish in this step?',
            strategy: 'What technique should I use? What are the requirements?',
            execute: 'How do I perform this step correctly?',
            verify: 'Does my result make sense? Did I maintain restrictions?'
        };
    }

    identifyDecisionPointsRadical(step) {
        return [
            'Is domain already found or do I need it now?',
            'Can I square both sides safely?',
            'Do I need case analysis?',
            'Should I use test points or algebraic method?',
            'Have I verified my solution?'
        ];
    }

    suggestAlternativeMethodsRadical(step, problem) {
        const alternatives = {
            'Square both sides': [
                'Graphical method: graph both sides and find intersection',
                'Test point method: test values systematically',
                'Numerical approach: use calculator to check values'
            ],
            'Intersect with domain': [
                'Number line method: draw and shade',
                'Set notation: write as set intersection',
                'Algebraic: solve system of inequalities'
            ],
            'Verify solution': [
                'Test multiple points from solution interval',
                'Check boundary points carefully',
                'Graph to visualize solution'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate for this problem'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the solution process`,
            progression: 'We are systematically eliminating the radical and solving',
            relationship: 'Each step respects domain restrictions while progressing toward solution'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.radicalTypes[problemType]?.category || 'simple_radical';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Understanding of square roots', 'Basic inequality solving'];
    }

    identifyKeyVocabularyRadical(step) {
        const vocabulary = {
            'Given inequality': ['radical', 'inequality', 'square root', 'radicand'],
            'Find domain restriction': ['domain', 'radicand', 'non-negative', 'restriction'],
            'Analyze special case': ['principal root', 'non-negative', 'special case'],
            'Square both sides': ['square', 'squaring', 'preserve inequality', 'extraneous'],
            'Set up case analysis': ['case analysis', 'cases', 'sign', 'positive', 'negative'],
            'Intersect with domain': ['intersection', 'interval', 'overlap', 'satisfy'],
            'Verify solution': ['verify', 'verification', 'substitute', 'extraneous solution']
        };

        return vocabulary[step.step] || ['radical', 'inequality', 'solution'];
    }

    generateThinkingPromptsRadical(step) {
        return {
            before: 'Before this step: What do I need to check or establish?',
            during: 'During this step: What must I be careful about?',
            after: 'After this step: How can I verify this was done correctly?'
        };
    }

    findRealWorldConnectionRadical(step, problem) {
        const connections = {
            'simple_radical': 'Like calculating safe speeds: velocity = √(2 × acceleration × distance). Speed must stay below limit.',
            'radical_linear': 'Like comparing growth rates: when is √(population) less than linear resource constraint?',
            'compound_radical': 'Like physics formulas with multiple square root terms for energy or wave calculations.'
        };

        const category = this.radicalTypes[problem.type]?.category;
        return connections[category] || 'Radical inequalities appear in physics, engineering, and financial models involving square root relationships.';
    }

    // GRAPH GENERATION

    generateRadicalGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.radicalTypes[type]?.category;

        if (category && this.currentSolution.solutionSet && this.currentSolution.solutionSet !== 'No solution') {
            this.graphData = this.generateRadicalGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateRadicalGraph(problem, solution) {
        return {
            type: 'radical_inequality',
            description: `Graph of √(${solution.radicand}) and comparison value`,
            domain: solution.domain,
            solutionRegion: solution.solutionSet,
            graphType: 'function_comparison',
            visualization: 'Plot radical function and comparison, shade solution region',
            numberLine: 'Mark domain and solution on number line'
        };
    }

    // WORKBOOK GENERATION

    generateRadicalWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createRadicalConceptSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createSolutionSection(),
            this.createDomainAnalysisSection(),
            this.createVerificationSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createCommonMistakesSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Radical Inequalities Mathematical Workbook',
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
            ['Problem Type', this.radicalTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.radicalTypes[this.currentProblem.type]?.category || 'radical'],
            ['Inequality', this.currentSolution?.inequality || this.currentProblem.cleanInput],
            ['Description', this.currentProblem.scenario || 'Radical inequality problem']
        ];

        if (this.currentSolution?.radicand) {
            problemData.push(['', '']);
            problemData.push(['Components', '']);
            problemData.push(['Radicand', this.currentSolution.radicand]);
            if (this.currentSolution.constant !== undefined) {
                problemData.push(['Constant', this.currentSolution.constant]);
            }
            if (this.currentSolution.linearExpression) {
                problemData.push(['Linear Expression', this.currentSolution.linearExpression]);
            }
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createRadicalConceptSection() {
        const conceptData = [
            ['Fundamental Concepts', ''],
            ['', '√x represents the principal (non-negative) square root'],
            ['', '√x is defined only when x ≥ 0 (in real numbers)'],
            ['', '√x ≥ 0 always (cannot be negative)'],
            ['', 'Squaring both sides can introduce extraneous solutions'],
            ['', ''],
            ['Critical Rules', ''],
            ['', 'ALWAYS find domain FIRST (radicand ≥ 0)'],
            ['', 'ALWAYS verify solutions in original inequality'],
            ['', 'Square only when both sides are non-negative'],
            ['', 'Intersect solution with domain restriction'],
            ['', ''],
            ['Properties', ''],
            ['', '(√x)² = x when x ≥ 0'],
            ['', 'If 0 ≤ a < b, then a² < b²'],
            ['', '√(a²) = |a|, not necessarily a']
        ];

        return {
            title: 'Radical Inequality Concepts',
            type: 'concepts',
            data: conceptData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.radicalTypes[this.currentProblem.type]?.category;
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
                stepsData.push(['Current State', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['Why Necessary', step.explanation.why]);
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
                stepsData.push(['Algebraic Rule', step.algebraicRule]);
            }

            if (step.criticalConcept) {
                stepsData.push(['⚠️ Critical', step.criticalConcept]);
            }

            if (step.warning) {
                stepsData.push(['⚠️ Warning', step.warning]);
            }

            if (step.goalStatement) {
                stepsData.push(['Goal', step.goalStatement]);
            }

            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5 Explanation', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
                if (step.ELI5.visualization) {
                    stepsData.push(['How to Visualize', step.ELI5.visualization]);
                }
            }

            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Procedural', step.explanations.procedural]);
                stepsData.push(['Visual', step.explanations.visual]);
            }

            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

            if (step.cases && step.cases.length > 0) {
                step.cases.forEach((c, idx) => {
                    stepsData.push([`Case ${idx + 1}`, c]);
                });
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
                const warnings = step.errorPrevention.warningFlags;
                if (warnings && warnings.length > 0) {
                    stepsData.push(['⚠️ Warning Flags', warnings.join('; ')]);
                }
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
                }
                
                const hints = step.scaffolding.hints;
                if (hints) {
                    stepsData.push(['Hint Level 1 (Gentle)', hints.level1]);
                    stepsData.push(['Hint Level 2 (Moderate)', hints.level2]);
                    stepsData.push(['Hint Level 3 (Specific)', hints.level3]);
                    stepsData.push(['Hint Level 4 (Detailed)', hints.level4]);
                }

                const subSteps = step.scaffolding.subSteps;
                if (subSteps && subSteps.length > 0) {
                    stepsData.push(['Sub-Steps', subSteps.join(' → ')]);
                }
            }

            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Think Before', step.thinkingPrompts.before]);
                stepsData.push(['Think During', step.thinkingPrompts.during]);
                stepsData.push(['Think After', step.thinkingPrompts.after]);
            }

            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check Question', step.selfCheck]);
            }

            if (step.realWorldConnection && this.includeRealWorldApplications) {
                stepsData.push(['Real-World Connection', step.realWorldConnection]);
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

        const solutionData = [];

        if (this.currentSolution.solutionSet) {
            solutionData.push(['Solution Set', this.currentSolution.solutionSet]);
            solutionData.push(['Solution Type', this.currentSolution.solutionType || 'Interval']);
        }

        if (this.currentSolution.specialCase) {
            solutionData.push(['Special Case', this.currentSolution.specialCase]);
        }

        if (this.currentSolution.domain) {
            solutionData.push(['Domain', this.currentSolution.domain]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createDomainAnalysisSection() {
        if (!this.currentSolution) return null;

        const domainData = [
            ['Domain Restriction', this.currentSolution.domain || 'Not specified'],
            ['Why Domain Matters', 'Square roots require non-negative radicands'],
            ['Impact on Solution', 'Final answer must be intersection of algebraic solution and domain']
        ];

        if (this.currentSolution.radicand) {
            domainData.push(['', '']);
            domainData.push(['Radicand', this.currentSolution.radicand]);
            domainData.push(['Condition', `${this.currentSolution.radicand} ≥ 0`]);
        }

        return {
            title: 'Domain Analysis',
            type: 'domain',
            data: domainData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [
            ['Verification Method', 'Substitution into original inequality'],
            ['Why Verify', 'Squaring can introduce extraneous solutions'],
            ['What to Test', 'Values from solution interval and boundary points'],
            ['', '']
        ];

        if (this.currentSolution.solutionSet && this.currentSolution.solutionSet !== 'No solution') {
            verificationData.push(['Solution to Verify', this.currentSolution.solutionSet]);
            verificationData.push(['Original Inequality', this.currentSolution.inequality]);
            verificationData.push(['', '']);
            verificationData.push(['Verification Steps', '']);
            verificationData.push(['1', 'Choose test values from solution interval']);
            verificationData.push(['2', 'Substitute into original inequality']);
            verificationData.push(['3', 'Verify inequality is satisfied']);
            verificationData.push(['4', 'Test boundary points']);
            verificationData.push(['5', 'Confirm no extraneous solutions']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications of Radical Inequalities', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Context', app.context]);
            appData.push(['Equation Form', app.equation]);
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

        const notes = this.generateRadicalPedagogicalNotes(this.currentProblem.type);

        return {
            title: 'Teaching & Learning Notes',
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

        const alternatives = this.generateRadicalAlternativeMethods(this.currentProblem.type);

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
                ['When to Use Each', alternatives.whenToUse || 'Choose based on problem structure and personal preference']
            ]
        };
    }

    createCommonMistakesSection() {
        if (!this.includeCommonMistakes) return null;

        const category = this.radicalTypes[this.currentProblem.type]?.category;
        const categoryMistakes = this.commonMistakes[category] || {};

        const mistakesData = [
            ['Common Mistakes in Radical Inequalities', ''],
            ['', '']
        ];

        for (const [area, mistakes] of Object.entries(categoryMistakes)) {
            mistakesData.push([area, '']);
            mistakes.forEach((mistake, idx) => {
                mistakesData.push([`  ${idx + 1}`, mistake]);
            });
            mistakesData.push(['', '']);
        }

        // Add general misconceptions
        mistakesData.push(['General Misconceptions', '']);
        for (const [key, misconception] of Object.entries(this.misconceptions)) {
            if (misconception.commonIn.includes(category) || misconception.commonIn.includes('all_radical')) {
                mistakesData.push(['Misconception', misconception.misconception]);
                mistakesData.push(['Reality', misconception.reality]);
                mistakesData.push(['Example', misconception.correctiveExample]);
                mistakesData.push(['', '']);
            }
        }

        return {
            title: 'Common Mistakes & Misconceptions',
            type: 'mistakes',
            data: mistakesData
        };
    }

    createPracticeProblemsSection() {
        const problems = this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy Level', '']
        ];

        problems.easy.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium Level', '']);

        problems.medium.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Hard Level', '']);

        problems.hard.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['By Learning Objective', '']);
        practiceData.push(['', '']);

        for (const [objective, probs] of Object.entries(this.questionBank.byObjective)) {
            practiceData.push([objective, '']);
            probs.slice(0, 2).forEach((p, i) => {
                practiceData.push([`  ${i + 1}`, p]);
            });
            practiceData.push(['', '']);
        }

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    generateRadicalPedagogicalNotes(problemType) {
        const category = this.radicalTypes[problemType]?.category;

        const pedagogicalDatabase = {
            simple_radical: {
                objectives: [
                    'Find domain of radical expressions',
                    'Solve simple radical inequalities',
                    'Apply squaring correctly to inequalities',
                    'Verify solutions and identify extraneous solutions'
                ],
                keyConcepts: [
                    '√x requires x ≥ 0 (domain restriction)',
                    '√x ≥ 0 always (principal root is non-negative)',
                    'Squaring preserves inequality only when both sides ≥ 0',
                    'Squaring can introduce extraneous solutions',
                    'Solution must satisfy both inequality and domain'
                ],
                prerequisites: [
                    'Understanding of square roots',
                    'Basic inequality solving',
                    'Number line representation',
                    'Interval notation'
                ],
                commonDifficulties: [
                    'Forgetting domain restriction',
                    'Squaring when one side is negative',
                    'Not verifying solutions',
                    'Thinking √x can be negative',
                    'Confusing √x with ±√x'
                ],
                teachingStrategies: [
                    'Always emphasize domain FIRST',
                    'Use number line visualization',
                    'Demonstrate extraneous solutions with examples',
                    'Connect to √x ≥ 0 property repeatedly',
                    'Practice verification systematically'
                ],
                extensions: [
                    'Radical inequalities with linear expressions',
                    'Compound radicals',
                    'Rational expressions under radicals',
                    'Systems of radical inequalities'
                ],
                assessment: [
                    'Can student find domain correctly?',
                    'Does student check if squaring is valid?',
                    'Does student verify solutions?',
                    'Can student identify extraneous solutions?'
                ]
            },
            radical_linear: {
                objectives: [
                    'Perform case analysis based on variable expression signs',
                    'Solve radical inequalities with variable expressions',
                    'Combine solutions from multiple cases',
                    'Handle more complex domain restrictions'
                ],
                keyConcepts: [
                    'Case analysis required when comparing to variable expression',
                    'Cannot square if right side can be negative',
                    'Different cases may have different solutions',
                    'Final answer is union of valid case solutions',
                    'Domain restrictions still apply'
                ],
                prerequisites: [
                    'Simple radical inequalities',
                    'Solving linear inequalities',
                    'Understanding of cases',
                    'Set operations (union, intersection)'
                ],
                commonDifficulties: [
                    'Missing cases',
                    'Squaring without checking sign',
                    'Incorrectly combining case solutions',
                    'Losing track of domain',
                    'Sign errors in case boundaries'
                ],
                teachingStrategies: [
                    'Teach systematic case analysis',
                    'Use number line to show cases',
                    'Practice determining when to square',
                    'Emphasize testing case boundaries',
                    'Visual representation of case regions'
                ],
                extensions: [
                    'Multiple radicals',
                    'Polynomial under radical',
                    'Rational expressions',
                    'Absolute value combined with radicals'
                ],
                assessment: [
                    'Does student identify all necessary cases?',
                    'Can student solve each case correctly?',
                    'Does student combine cases appropriately?',
                    'Is verification thorough?'
                ]
            },
            compound_radical: {
                objectives: [
                    'Solve inequalities with multiple radicals',
                    'Isolate radicals systematically',
                    'Track domain through multiple squaring steps',
                    'Verify solutions in complex inequalities'
                ],
                keyConcepts: [
                    'Isolate one radical at a time',
                    'Multiple squaring steps needed',
                    'Domain from ALL radicands',
                    'Extraneous solution risk increases with each squaring',
                    'Systematic approach essential'
                ],
                prerequisites: [
                    'Simple radical inequalities',
                    'Algebraic manipulation',
                    '(a + b)² expansion',
                    'Patient, systematic work'
                ],
                commonDifficulties: [
                    'Incorrectly squaring (a + b)²',
                    'Losing domain restrictions',
                    'Squaring too many times',
                    'Not simplifying between steps',
                    'Verification becomes complex'
                ],
                teachingStrategies: [
                    'Teach isolation strategy',
                    'Practice (a + b)² expansion',
                    'Track domain explicitly',
                    'Simplify after each squaring',
                    'Thorough verification practice'
                ],
                extensions: [
                    'Three or more radicals',
                    'Combination with other operations',
                    'Applied problems',
                    'Optimization problems'
                ],
                assessment: [
                    'Can student isolate radicals correctly?',
                    'Does student track all domains?',
                    'Is (a + b)² expanded correctly?',
                    'Are all extraneous solutions identified?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve radical inequalities'],
            keyConcepts: ['Domain restrictions', 'Squaring carefully', 'Verification'],
            prerequisites: ['Basic algebra', 'Square roots'],
            commonDifficulties: ['Domain errors', 'Extraneous solutions'],
            teachingStrategies: ['Systematic approach', 'Visual aids'],
            extensions: ['More complex problems'],
            assessment: ['Can solve and verify']
        };
    }

    generateRadicalAlternativeMethods(problemType) {
        const category = this.radicalTypes[problemType]?.category;

        const alternativeDatabase = {
            simple_radical: {
                primaryMethod: 'Algebraic: Domain then square',
                methods: [
                    {
                        name: 'Graphical Method',
                        description: 'Graph y = √(expression) and y = constant, find where inequality holds'
                    },
                    {
                        name: 'Test Point Method',
                        description: 'After finding domain, test values systematically'
                    },
                    {
                        name: 'Numerical/Calculator',
                        description: 'Use calculator to check values, confirm algebraic solution'
                    }
                ],
                comparison: 'Algebraic is most reliable; graphical provides visualization; test points good for verification',
                whenToUse: 'Algebraic for precision, graphical for understanding, numerical for confirmation'
            },
            radical_linear: {
                primaryMethod: 'Case Analysis',
                methods: [
                    {
                        name: 'Graphical Intersection',
                        description: 'Graph both sides and analyze intersection regions'
                    },
                    {
                        name: 'Combined Algebraic',
                        description: 'Set up compound inequality system and solve'
                    },
                    {
                        name: 'Sign Chart Method',
                        description: 'Create sign chart for both sides, analyze regions'
                    }
                ],
                comparison: 'Case analysis is systematic; graphical is intuitive; sign chart organizes information',
                whenToUse: 'Case analysis for complex; graphical for visual learners; sign chart for organization'
            },
            compound_radical: {
                primaryMethod: 'Sequential Isolation and Squaring',
                methods: [
                    {
                        name: 'Substitution Method',
                        description: 'Let u = √(one expression), solve in terms of u, back-substitute'
                    },
                    {
                        name: 'Graphical Analysis',
                        description: 'Graph all radicals and analyze combined inequality graphically'
                    },
                    {
                        name: 'Numerical Approximation',
                        description: 'Use numerical methods to approximate solution region'
                    }
                ],
                comparison: 'Sequential squaring is standard; substitution can simplify; graphical provides insight',
                whenToUse: 'Sequential for reliability; substitution if pattern clear; numerical for complex cases'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard algebraic approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Choose method based on problem characteristics'
            }],
            comparison: 'Select method based on problem structure and personal preference',
            whenToUse: 'Adapt to problem complexity'
        };
    }
}

// Export the class
export default EnhancedRadicalInequalitiesWorkbook;
