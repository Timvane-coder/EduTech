// Enhanced Nested Radicals Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedNestedRadicalsMathematicalWorkbook {
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
        this.initializeNestedRadicalSolvers();
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
        this.initializeNestedRadicalLessons();
    }

    initializeNestedRadicalLessons() {
        this.lessons = {
            nested_radicals_intro: {
                title: "Introduction to Nested Radicals",
                concepts: [
                    "Nested radical: radical expression containing another radical",
                    "General form: √(a + √b) or √(a - √b)",
                    "Can often be simplified to form √p + √q or √p - √q",
                    "Requires algebraic manipulation and pattern recognition"
                ],
                theory: "Nested radicals appear in solving certain equations and can often be denested (simplified) into sum or difference of simpler radicals. The process involves squaring and algebraic manipulation.",
                keyFormulas: {
                    "Basic Form": "√(a ± √b)",
                    "Denested Form": "√p ± √q",
                    "Squaring Relationship": "(√p + √q)² = p + q + 2√(pq)",
                    "Denesting Condition": "√(a + √b) = √p + √q when a² - b = 4pq"
                },
                solvingSteps: [
                    "Identify the nested radical structure",
                    "Assume simplified form √p ± √q",
                    "Square both sides to create equation",
                    "Match coefficients to find p and q",
                    "Verify the denesting is correct"
                ],
                applications: [
                    "Solving quadratic equations",
                    "Geometric constructions",
                    "Physics formulas involving compound motion",
                    "Computer graphics and fractals"
                ]
            },

            simple_nested_radicals: {
                title: "Simple Nested Radicals",
                concepts: [
                    "Form: √(a + √b) where a and b are integers",
                    "Look for perfect square patterns",
                    "Denesting when possible",
                    "Simplifying inner radical first"
                ],
                theory: "Simple nested radicals can often be simplified by recognizing patterns or using the denesting formula. The key is to express the nested radical as a sum or difference of simpler square roots.",
                keyFormulas: {
                    "Denesting Formula": "√(a + √b) = √((a+√(a²-b))/2) + √((a-√(a²-b))/2)",
                    "Special Case": "√(a + 2√b) = √((a+2√b+1)-1) possibly simplifies",
                    "Verification": "(√p + √q)² = p + q + 2√(pq)"
                },
                solvingSteps: [
                    "Check if inner radical can be simplified",
                    "Identify if a² - b is a perfect square",
                    "Use denesting formula or pattern matching",
                    "Simplify and verify"
                ],
                applications: [
                    "Simplifying complex algebraic expressions",
                    "Solving radical equations",
                    "Engineering calculations"
                ]
            },

            double_nested_radicals: {
                title: "Double Nested Radicals",
                concepts: [
                    "Form: √(a + √(b + √c))",
                    "Multiple levels of nesting",
                    "Work from innermost radical outward",
                    "May require iterative denesting"
                ],
                theory: "Double nested radicals require systematic simplification starting from the innermost radical and working outward. Each level may be simplified separately.",
                keyFormulas: {
                    "Iterative Approach": "Simplify innermost first",
                    "Pattern Recognition": "Look for Ramanujan-type identities"
                },
                solvingSteps: [
                    "Identify all levels of nesting",
                    "Simplify innermost radical",
                    "Work outward level by level",
                    "Verify each step"
                ],
                applications: [
                    "Advanced physics problems",
                    "Mathematical proofs",
                    "Continued fraction analysis"
                ]
            },

            infinite_nested_radicals: {
                title: "Infinite Nested Radicals",
                concepts: [
                    "Form: √(a + √(a + √(a + ...)))",
                    "Self-similar recursive structure",
                    "Converges to finite value",
                    "Solved by setting x = √(a + x)"
                ],
                theory: "Infinite nested radicals with repeating patterns converge to finite values. They can be solved by recognizing the self-similar structure and setting up an equation.",
                keyFormulas: {
                    "Self-Reference Equation": "x = √(a + x)",
                    "Quadratic Form": "x² = a + x → x² - x - a = 0",
                    "Solution": "x = (1 + √(1 + 4a))/2"
                },
                solvingSteps: [
                    "Recognize the repeating pattern",
                    "Let x equal the entire expression",
                    "Write x = √(a + x)",
                    "Square both sides: x² = a + x",
                    "Solve the resulting quadratic",
                    "Choose positive solution"
                ],
                applications: [
                    "Golden ratio derivation",
                    "Continued fractions",
                    "Recursive sequences",
                    "Fractal mathematics"
                ]
            },

            denesting_techniques: {
                title: "Denesting Techniques",
                concepts: [
                    "Ramanujan's denesting formula",
                    "Pattern matching approach",
                    "Algebraic manipulation method",
                    "When denesting is possible"
                ],
                theory: "Denesting is the process of converting a nested radical to a sum or difference of simpler radicals. Not all nested radicals can be denested over the rationals.",
                keyFormulas: {
                    "Ramanujan Formula": "√(a ± √b) = √((a+c)/2) ± √((a-c)/2) where c = √(a²-b)",
                    "Condition": "a² - b must be a perfect square",
                    "Alternative": "Trial values for √p ± √q"
                },
                solvingSteps: [
                    "Check denesting condition: is a² - b a perfect square?",
                    "If yes, calculate c = √(a² - b)",
                    "Apply Ramanujan formula",
                    "Simplify resulting radicals",
                    "Verify by squaring"
                ],
                applications: [
                    "Simplifying complex expressions",
                    "Number theory",
                    "Computational efficiency"
                ]
            },

            radical_equations_nested: {
                title: "Equations with Nested Radicals",
                concepts: [
                    "Equations containing nested radical expressions",
                    "Isolate nested radical before squaring",
                    "May require multiple squaring operations",
                    "Check for extraneous solutions"
                ],
                theory: "Solving equations with nested radicals requires careful algebraic manipulation, often involving squaring multiple times. Always verify solutions.",
                keyFormulas: {
                    "Isolation Principle": "Isolate radical before squaring",
                    "Verification": "Substitute back into original equation"
                },
                solvingSteps: [
                    "Isolate the nested radical term",
                    "Square both sides",
                    "Simplify and isolate remaining radicals",
                    "Square again if necessary",
                    "Solve resulting equation",
                    "Check all solutions in original equation"
                ],
                applications: [
                    "Physics problem solving",
                    "Engineering design",
                    "Mathematical modeling"
                ]
            },

            ramanujan_identities: {
                title: "Ramanujan's Nested Radical Identities",
                concepts: [
                    "Special nested radical formulas discovered by Ramanujan",
                    "Beautiful mathematical patterns",
                    "Exact simplifications",
                    "Connection to continued fractions"
                ],
                theory: "Srinivasa Ramanujan discovered numerous elegant identities involving nested radicals, many with surprising closed forms.",
                keyFormulas: {
                    "Classic Example": "√(1 + 2√(1 + 3√(1 + 4√(...)))) = 3",
                    "General Pattern": "Various infinite nested radical formulas"
                },
                famousIdentities: [
                    "√(1 + √(1 + √(1 + ...))) = φ (golden ratio)",
                    "√(6 + √(6 + √(6 + ...))) = 3",
                    "√(2 + √(2 + √(2 + ...))) = 2"
                ],
                applications: [
                    "Pure mathematics",
                    "Number theory",
                    "Mathematical beauty and patterns"
                ]
            },

            numerical_methods: {
                title: "Numerical Evaluation of Nested Radicals",
                concepts: [
                    "Approximating nested radicals numerically",
                    "Convergence analysis",
                    "Error estimation",
                    "When exact form is not possible"
                ],
                theory: "When algebraic simplification is not possible, numerical methods can evaluate nested radicals to desired precision.",
                keyFormulas: {
                    "Iterative Formula": "x_{n+1} = √(a + x_n)",
                    "Convergence": "For appropriate a, sequence converges"
                },
                solvingSteps: [
                    "Start with initial guess",
                    "Apply iterative formula",
                    "Continue until desired precision",
                    "Verify convergence"
                ],
                applications: [
                    "Computer calculations",
                    "Scientific computing",
                    "Approximation theory"
                ]
            },

            geometric_interpretation: {
                title: "Geometric Interpretation of Nested Radicals",
                concepts: [
                    "Nested radicals as lengths in geometry",
                    "Spiral constructions",
                    "Golden rectangle relationships",
                    "Visual understanding"
                ],
                theory: "Many nested radicals have beautiful geometric interpretations, particularly those related to the golden ratio and spiral constructions.",
                applications: [
                    "Geometric constructions",
                    "Art and architecture",
                    "Natural patterns",
                    "Design principles"
                ]
            },

            word_problems_nested: {
                title: "Word Problems with Nested Radicals",
                concepts: [
                    "Real-world scenarios involving nested radicals",
                    "Setting up the problem",
                    "Interpreting solutions",
                    "Units and context"
                ],
                problemTypes: {
                    "Physics": "Compound motion, energy calculations",
                    "Engineering": "Load calculations, structural analysis",
                    "Finance": "Compound interest with varying rates",
                    "Geometry": "Complex area and volume problems"
                },
                solutionStrategy: [
                    "Identify the nested structure in the problem",
                    "Set up the mathematical expression",
                    "Simplify the nested radical",
                    "Interpret in context",
                    "Check reasonableness"
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

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'sqrt': '√', 'cbrt': '∛', 'root': '√',
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            'phi': 'φ', 'Phi': 'Φ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥'
        };
    }

    initializeNestedRadicalSolvers() {
        this.nestedRadicalTypes = {
            simple_nested: {
                patterns: [
                    /sqrt\s*\(\s*(\d+\.?\d*)\s*\+\s*sqrt\s*\(\s*(\d+\.?\d*)\s*\)\s*\)/i,
                    /√\s*\(\s*(\d+\.?\d*)\s*\+\s*√\s*\(\s*(\d+\.?\d*)\s*\)\s*\)/,
                    /sqrt\s*\(\s*(\d+\.?\d*)\s*-\s*sqrt\s*\(\s*(\d+\.?\d*)\s*\)\s*\)/i
                ],
                solver: this.solveSimpleNested.bind(this),
                name: 'Simple Nested Radical',
                category: 'simple_nested',
                description: 'Solves √(a ± √b)'
            },

            double_nested: {
                patterns: [
                    /sqrt\s*\(\s*(\d+\.?\d*)\s*\+\s*sqrt\s*\(\s*(\d+\.?\d*)\s*\+\s*sqrt\s*\(\s*(\d+\.?\d*)\s*\)\s*\)\s*\)/i,
                    /√\s*\(\s*(\d+\.?\d*)\s*\+\s*√\s*\(\s*(\d+\.?\d*)\s*\+\s*√\s*\(\s*(\d+\.?\d*)\s*\)\s*\)\s*\)/
                ],
                solver: this.solveDoubleNested.bind(this),
                name: 'Double Nested Radical',
                category: 'double_nested',
                description: 'Solves √(a + √(b + √c))'
            },

            infinite_nested: {
                patterns: [
                    /sqrt\s*\(\s*(\d+\.?\d*)\s*\+\s*sqrt\s*\(\s*\1\s*\+\s*sqrt\s*\(\s*\1/i,
                    /infinite.*nested/i,
                    /repeating.*radical/i
                ],
                solver: this.solveInfiniteNested.bind(this),
                name: 'Infinite Nested Radical',
                category: 'infinite_nested',
                description: 'Solves √(a + √(a + √(a + ...)))'
            },

            denesting: {
                patterns: [
                    /denest/i,
                    /simplify.*nested/i
                ],
                solver: this.denestRadical.bind(this),
                name: 'Denesting Problem',
                category: 'denesting',
                description: 'Converts √(a ± √b) to √p ± √q'
            },

            radical_equation_nested: {
                patterns: [
                    /solve.*sqrt.*sqrt/i,
                    /equation.*nested/i
                ],
                solver: this.solveRadicalEquationNested.bind(this),
                name: 'Equation with Nested Radicals',
                category: 'radical_equation_nested',
                description: 'Solves equations containing nested radicals'
            },

            ramanujan_identity: {
                patterns: [
                    /ramanujan/i,
                    /1\s*\+\s*2.*sqrt.*1\s*\+\s*3.*sqrt/i
                ],
                solver: this.solveRamanujanIdentity.bind(this),
                name: 'Ramanujan Nested Radical Identity',
                category: 'ramanujan_identity',
                description: 'Evaluates special Ramanujan nested radical formulas'
            },

            numerical_evaluation: {
                patterns: [
                    /evaluate.*numerically/i,
                    /approximate/i,
                    /decimal/i
                ],
                solver: this.evaluateNumerically.bind(this),
                name: 'Numerical Evaluation',
                category: 'numerical_methods',
                description: 'Numerically evaluates nested radicals'
            },

            geometric_nested: {
                patterns: [
                    /geometric/i,
                    /golden.*ratio/i,
                    /phi/i
                ],
                solver: this.solveGeometricNested.bind(this),
                name: 'Geometric Nested Radical',
                category: 'geometric_interpretation',
                description: 'Radicals with geometric meaning'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            simple_nested: {
                'Denesting': [
                    'Forgetting to check if a² - b is a perfect square',
                    'Sign errors in denested form',
                    'Not verifying by squaring the result'
                ],
                'Simplification': [
                    'Simplifying inner radical incorrectly',
                    'Arithmetic errors in radical operations',
                    'Missing simplification opportunities'
                ]
            },
            infinite_nested: {
                'Setup': [
                    'Not recognizing the self-similar structure',
                    'Setting up wrong equation',
                    'Forgetting that x = √(a + x)'
                ],
                'Solving': [
                    'Errors in solving the quadratic',
                    'Choosing negative solution (should be positive)',
                    'Not verifying convergence'
                ]
            },
            denesting: {
                'Condition Check': [
                    'Not checking if denesting is possible',
                    'Incorrectly calculating a² - b',
                    'Missing perfect square check'
                ],
                'Formula Application': [
                    'Wrong signs in Ramanujan formula',
                    'Errors in calculating intermediate values',
                    'Not simplifying final radicals'
                ]
            },
            radical_equation_nested: {
                'Isolation': [
                    'Not properly isolating nested radical',
                    'Squaring too early',
                    'Multiple radicals not handled systematically'
                ],
                'Extraneous Solutions': [
                    'Not checking solutions in original equation',
                    'Including negative values inappropriately',
                    'Missing domain restrictions'
                ]
            }
        };

        this.errorPrevention = {
            verification_critical: {
                reminder: 'Always verify nested radical simplifications by squaring',
                method: 'Square both forms and check they equal the same value'
            },
            pattern_recognition: {
                reminder: 'Look for repeating patterns in infinite nested radicals',
                method: 'Check if the structure repeats itself exactly'
            },
            denesting_condition: {
                reminder: 'Denesting requires a² - b to be a perfect square',
                method: 'Calculate a² - b and check if it has integer square root'
            },
            extraneous_solutions: {
                reminder: 'Squaring can introduce extraneous solutions',
                method: 'Always substitute back into original equation'
            },
            positive_values: {
                reminder: 'Principal square root is always non-negative',
                method: 'Choose positive solution for nested radicals'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why nested radicals behave this way and their mathematical meaning',
                language: 'intuitive and pattern-focused'
            },
            procedural: {
                focus: 'Step-by-step process for simplifying and solving',
                language: 'algorithmic instructions'
            },
            visual: {
                focus: 'Geometric and graphical understanding',
                language: 'visual and spatial metaphors'
            },
            algebraic: {
                focus: 'Formal algebraic manipulation and properties',
                language: 'precise mathematical notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, avoiding complex terminology',
                detail: 'essential steps only',
                examples: 'concrete numerical examples'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with explanations',
                examples: 'mix of numerical and algebraic'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every step explained with analogies',
                examples: 'real-world analogies and stories',
                analogies: true,
                visualization: 'simple pictures and patterns'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive with all reasoning',
                examples: 'general and abstract cases'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced progression'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            golden_ratio: {
                scenario: "The golden ratio in nature and art",
                expression: "φ = √(1 + √(1 + √(1 + ...)))",
                examples: [
                    "Golden ratio appears in spiral shells",
                    "Rectangle proportions in classical architecture",
                    "Fibonacci sequence relationships"
                ],
                context: "The golden ratio φ = (1+√5)/2 ≈ 1.618 appears throughout nature and has been used in art for millennia"
            },
            compound_motion: {
                scenario: "Physics: compound velocities",
                expression: "Combined velocity with multiple components",
                examples: [
                    "Projectile motion with air resistance",
                    "Relativistic velocity addition",
                    "Wave interference patterns"
                ],
                context: "Nested radicals appear in formulas combining multiple velocity or energy components"
            },
            engineering_loads: {
                scenario: "Structural engineering: combined stresses",
                expression: "Total stress from multiple load directions",
                examples: [
                    "Bridge support calculations",
                    "Building foundation design",
                    "Material stress analysis"
                ],
                context: "Engineers use nested radical formulas to combine stresses from different directions"
            },
            financial_compound: {
                scenario: "Compound interest with varying rates",
                expression: "Investment growth with rate changes",
                examples: [
                    "Retirement account projections",
                    "Loan amortization schedules",
                    "Investment portfolio analysis"
                ],
                context: "Nested radicals can model compound growth with variable rates over time"
            },
            geometric_construction: {
                scenario: "Geometric constructions with compass and straightedge",
                expression: "Constructible lengths",
                examples: [
                    "Regular pentagon construction",
                    "Golden rectangle creation",
                    "Spiral patterns"
                ],
                context: "Many geometric constructions involve nested radicals, especially those related to pentagons and the golden ratio"
            },
            wave_physics: {
                scenario: "Wave mechanics and quantum physics",
                expression: "Energy levels and wave functions",
                examples: [
                    "Quantum harmonic oscillator",
                    "Standing wave patterns",
                    "Electromagnetic wave propagation"
                ],
                context: "Nested radicals appear in solving wave equations and energy level calculations"
            },
            fractal_geometry: {
                scenario: "Fractal dimensions and self-similarity",
                expression: "Fractal boundary lengths",
                examples: [
                    "Mandelbrot set calculations",
                    "Coastline measurements",
                    "Natural branching patterns"
                ],
                context: "Fractals often involve infinite nested structures similar to nested radicals"
            },
            optimization: {
                scenario: "Mathematical optimization problems",
                expression: "Finding optimal values",
                examples: [
                    "Minimizing material usage",
                    "Optimal path calculations",
                    "Resource allocation"
                ],
                context: "Optimization problems can lead to nested radical expressions in their solutions"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            simple_nested: {
                skills: [
                    'Basic square root operations',
                    'Simplifying radicals',
                    'Squaring binomials',
                    'Algebraic manipulation'
                ],
                priorKnowledge: [
                    'Properties of square roots',
                    'Perfect squares recognition',
                    'FOIL method for binomials'
                ],
                checkQuestions: [
                    "What is √16?",
                    "Simplify √18",
                    "What is (√3 + √2)²?",
                    "Is 72 a perfect square?"
                ]
            },
            infinite_nested: {
                skills: [
                    'Solving quadratic equations',
                    'Recognizing patterns',
                    'Understanding recursion',
                    'Quadratic formula'
                ],
                priorKnowledge: [
                    'Self-similar structures',
                    'Convergence concept',
                    'Positive vs negative solutions'
                ],
                checkQuestions: [
                    "Solve x² - x - 6 = 0",
                    "What is the quadratic formula?",
                    "Which solution is positive: x = 3 or x = -2?",
                    "What does 'self-similar' mean?"
                ]
            },
            denesting: {
                skills: [
                    'Perfect square recognition',
                    'Algebraic equation solving',
                    'Systematic verification',
                    'Pattern matching'
                ],
                priorKnowledge: [
                    'Ramanujan denesting formula',
                    'Squaring binomials with radicals',
                    'When denesting is possible'
                ],
                checkQuestions: [
                    "Is 25 a perfect square?",
                    "Calculate 7² - 5",
                    "What is (√3 + √2)²?",
                    "Expand (a + b)²"
                ]
            },
            radical_equation_nested: {
                skills: [
                    'Solving radical equations',
                    'Squaring both sides',
                    'Checking for extraneous solutions',
                    'Multi-step equation solving'
                ],
                priorKnowledge: [
                    'Isolation techniques',
                    'Domain restrictions',
                    'Verification importance'
                ],
                checkQuestions: [
                    "Solve √x = 4",
                    "What happens when you square both sides of an equation?",
                    "Why check solutions in radical equations?",
                    "What is an extraneous solution?"
                ]
            },
            ramanujan_identity: {
                skills: [
                    'Pattern recognition',
                    'Infinite series understanding',
                    'Mathematical beauty appreciation',
                    'Verification by calculation'
                ],
                priorKnowledge: [
                    'Famous mathematical constants',
                    'Continued fractions',
                    'Historical context'
                ],
                checkQuestions: [
                    "What is the golden ratio approximately?",
                    "What is π?",
                    "What does 'identity' mean in mathematics?",
                    "Who was Ramanujan?"
                ]
            },
            numerical_methods: {
                skills: [
                    'Iterative algorithms',
                    'Convergence testing',
                    'Error estimation',
                    'Calculator/computer use'
                ],
                priorKnowledge: [
                    'Decimal approximation',
                    'Sequence convergence',
                    'Precision vs accuracy'
                ],
                checkQuestions: [
                    "What does 'iterate' mean?",
                    "What is convergence?",
                    "How many decimal places is 'precise'?",
                    "What is √2 approximately?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            nested_boxes: {
                description: "Nested radicals as boxes within boxes",
                analogy: "Like Russian nesting dolls - one inside another",
                visualization: "Draw boxes containing smaller boxes with values",
                suitableFor: ['simple_nested', 'double_nested'],
                explanation: "Each layer is 'wrapped' around the inner layers"
            },
            spiral_geometry: {
                description: "Geometric spiral construction",
                analogy: "Like a snail shell that keeps growing",
                visualization: "Draw geometric spiral showing successive square roots",
                suitableFor: ['infinite_nested', 'geometric_nested'],
                explanation: "Each turn of the spiral represents another layer of nesting"
            },
            tree_structure: {
                description: "Branching tree diagram",
                analogy: "Like a family tree or river delta",
                visualization: "Draw tree showing how nested structure expands",
                suitableFor: ['double_nested', 'ramanujan_identity'],
                explanation: "Each branch represents a level in the nested structure"
            },
            number_line_convergence: {
                description: "Iterative approach on number line",
                analogy: "Like getting closer and closer to a target",
                visualization: "Show successive approximations approaching final value",
                suitableFor: ['infinite_nested', 'numerical_methods'],
                explanation: "Each step gets you closer to the exact answer"
            },
            algebraic_unwrapping: {
                description: "Unwrapping layers algebraically",
                analogy: "Like unwrapping a present one layer at a time",
                visualization: "Show step-by-step simplification",
                suitableFor: ['denesting', 'simple_nested'],
                explanation: "Remove outer layers systematically to reveal simpler form"
            },
            golden_rectangle: {
                description: "Golden ratio geometric construction",
                analogy: "Perfect proportions in art and nature",
                visualization: "Draw golden rectangle and spiral",
                suitableFor: ['infinite_nested', 'geometric_nested'],
                explanation: "Infinite nested radical creates the golden ratio"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "√(3 + 2√2)",
                    solution: "√2 + 1",
                    steps: [
                        "Assume form √p + √q",
                        "Square: p + q + 2√(pq) = 3 + 2√2",
                        "Match: p + q = 3, 2√(pq) = 2√2",
                        "So pq = 2, and p + q = 3",
                        "Solve: p = 2, q = 1",
                        "Therefore: √(3 + 2√2) = √2 + 1"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "√(5 + √24)",
                    solution: "√3 + √2",
                    steps: [
                        "Simplify inner: √24 = 2√6",
                        "Check if denestable: 5² - 24 = 1 (perfect square!)",
                        "Use formula with c = 1",
                        "√((5+1)/2) + √((5-1)/2) = √3 + √2"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "√(2 + √(2 + √(2 + ...)))",
                    solution: "2",
                    steps: [
                        "Let x = √(2 + √(2 + √(2 + ...)))",
                        "Then x = √(2 + x)",
                        "Square both sides: x² = 2 + x",
                        "Rearrange: x² - x - 2 = 0",
                        "Factor: (x - 2)(x + 1) = 0",
                        "Solutions: x = 2 or x = -1",
                        "Choose positive: x = 2"
                    ],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "√(7 + 4√3)",
                    solution: "2 + √3",
                    steps: [
                        "Check: 7² - 48 = 49 - 48 = 1 ✓",
                        "c = 1",
                        "√((7+1)/2) + √((7-1)/2)",
                        "= √4 + √3",
                        "= 2 + √3"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "√(6 + √(6 + √(6 + ...)))",
                    solution: "3",
                    steps: [
                        "Let x = the expression",
                        "x = √(6 + x)",
                        "x² = 6 + x",
                        "x² - x - 6 = 0",
                        "(x - 3)(x + 2) = 0",
                        "x = 3 (positive solution)"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "√(11 - 6√2)",
                    solution: "3 - √2",
                    steps: [
                        "Note the minus sign",
                        "Check: 11² - 72 = 121 - 72 = 49 = 7²",
                        "c = 7",
                        "√((11+7)/2) - √((11-7)/2)",
                        "= √9 - √2",
                        "= 3 - √2"
                    ],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "√(1 + √(1 + √(1 + ...))) (golden ratio)",
                    solution: "φ = (1 + √5)/2",
                    steps: [
                        "Let x = √(1 + √(1 + √(1 + ...)))",
                        "Then x = √(1 + x)",
                        "x² = 1 + x",
                        "x² - x - 1 = 0",
                        "Quadratic formula: x = (1 ± √5)/2",
                        "Positive solution: x = (1 + √5)/2 = φ (golden ratio)"
                    ],
                    difficulty: "hard",
                    historicalNote: "This is the famous golden ratio, approximately 1.618"
                },
                {
                    problem: "√(5 + 2√6)",
                    solution: "√3 + √2",
                    steps: [
                        "Assume √p + √q",
                        "(√p + √q)² = p + q + 2√(pq) = 5 + 2√6",
                        "So p + q = 5 and 2√(pq) = 2√6",
                        "Therefore pq = 6",
                        "Solve system: p + q = 5, pq = 6",
                        "p and q are roots of t² - 5t + 6 = 0",
                        "(t - 2)(t - 3) = 0, so p = 3, q = 2",
                        "Answer: √3 + √2"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Ramanujan: √(1 + 2√(1 + 3√(1 + 4√(...))))",
                    solution: "3",
                    steps: [
                        "This is a famous Ramanujan identity",
                        "The pattern continues with increasing coefficients",
                        "Despite appearing to grow without bound",
                        "The nested radical converges to exactly 3",
                        "Proof requires advanced techniques"
                    ],
                    difficulty: "hard",
                    historicalNote: "Discovered by Srinivasa Ramanujan in early 1900s"
                }
            ],
            byMethod: {
                simple_denesting: [
                    { problem: "√(3 + 2√2)", solution: "1 + √2" },
                    { problem: "√(7 - 4√3)", solution: "2 - √3" },
                    { problem: "√(5 + 2√6)", solution: "√3 + √2" }
                ],
                infinite_pattern: [
                    { problem: "√(2 + √(2 + √(2 + ...)))", solution: "2" },
                    { problem: "√(6 + √(6 + √(6 + ...)))", solution: "3" },
                    { problem: "√(12 + √(12 + √(12 + ...)))", solution: "4" }
                ],
                golden_ratio_related: [
                    { problem: "√(1 + √(1 + √(1 + ...)))", solution: "(1+√5)/2" },
                    { problem: "1 + 1/(1 + 1/(1 + ...))", solution: "(1+√5)/2" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            infinite_diverges: {
                misconception: "Infinite nested radicals must grow without bound",
                reality: "Many infinite nested radicals converge to finite values",
                correctiveExample: "√(2 + √(2 + √(2 + ...))) = 2, not infinity",
                commonIn: ['infinite_nested']
            },
            denesting_always_possible: {
                misconception: "Any nested radical can be denested",
                reality: "Denesting is only possible when a² - b is a perfect square",
                correctiveExample: "√(2 + √3) cannot be denested (2² - 3 = 1, but doesn't work)",
                commonIn: ['denesting']
            },
            inner_first: {
                misconception: "Always evaluate innermost radical first",
                reality: "Sometimes pattern recognition or denesting is more efficient",
                correctiveExample: "For √(3 + 2√2), denesting is better than evaluating √2 ≈ 1.414",
                commonIn: ['simple_nested', 'double_nested']
            },
            both_solutions: {
                misconception: "Use both quadratic solutions for infinite nested radicals",
                reality: "Only positive solution is valid (principal square root)",
                correctiveExample: "For x² - x - 2 = 0, use x = 2, not x = -1",
                commonIn: ['infinite_nested']
            },
            squaring_preserves_equation: {
                misconception: "Squaring never introduces extraneous solutions in radical equations",
                reality: "Squaring can create false solutions - always verify",
                correctiveExample: "√x = -2 has no solution, but x = 4 'works' after squaring",
                commonIn: ['radical_equation_nested']
            },
            ramanujan_simple: {
                misconception: "Ramanujan identities are just curious facts",
                reality: "They reveal deep mathematical connections and patterns",
                correctiveExample: "Golden ratio identity connects geometry, algebra, and number theory",
                commonIn: ['ramanujan_identity']
            },
            numerical_exact: {
                misconception: "Numerical approximation gives exact answer",
                reality: "Numerical methods give approximations with some error",
                correctiveExample: "√2 ≈ 1.414... but never exactly equals 1.414",
                commonIn: ['numerical_methods']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            nested_structure: {
                analogy: "Russian nesting dolls (matryoshka)",
                explanation: "Just as each doll contains a smaller doll inside, each radical contains another expression inside it",
                suitableFor: ['simple_nested', 'double_nested'],
                ELI5: "Imagine boxes inside boxes. To find what's in the smallest box, you have to open each bigger box one at a time!"
            },
            infinite_convergence: {
                analogy: "Walking halfway to a wall repeatedly",
                explanation: "Each step takes you halfway closer. You never quite reach it, but you get arbitrarily close",
                suitableFor: ['infinite_nested', 'numerical_methods'],
                ELI5: "If you walk halfway to a wall, then halfway again, then halfway again, you get super close but never quite touch it. But we can say exactly how far away the wall is!"
            },
            denesting: {
                analogy: "Unwrapping a gift package",
                explanation: "Converting a complex wrapped package into simpler components side by side",
                suitableFor: ['denesting'],
                ELI5: "It's like having one big mysterious present, and discovering it's actually two smaller presents stuck together!"
            },
            golden_ratio: {
                analogy: "Perfect proportions in seashells",
                explanation: "The golden ratio spiral appears in nautilus shells and many natural patterns",
                suitableFor: ['infinite_nested', 'geometric_nested'],
                ELI5: "Have you seen a seashell that spirals? The way it grows bigger follows a special number called the golden ratio!"
            },
            self_reference: {
                analogy: "A mirror between two mirrors",
                explanation: "The pattern repeats infinitely, referencing itself",
                suitableFor: ['infinite_nested', 'ramanujan_identity'],
                ELI5: "When you put two mirrors facing each other, you see the same thing over and over forever. That's like how these numbers repeat!"
            },
            layer_removal: {
                analogy: "Peeling an onion",
                explanation: "Remove one layer at a time to get to the core",
                suitableFor: ['double_nested', 'simple_nested'],
                ELI5: "Like peeling an onion - you take off one layer, then another layer, until you get to the middle!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            simple_nested: {
                level1: "Can this nested radical be simplified?",
                level2: "Check if the inner radical can be simplified first, or if the whole thing can be denested",
                level3: "For √(a + √b), check if a² - b is a perfect square",
                level4: "Use the denesting formula: √(a + √b) = √((a+c)/2) + √((a-c)/2) where c = √(a² - b)"
            },
            infinite_nested: {
                level1: "What pattern do you notice in the nested structure?",
                level2: "The expression repeats itself. If you call the whole thing x, what equation can you write?",
                level3: "Since the pattern repeats, x = √(a + x). Now square both sides.",
                level4: "You get x² = a + x, which gives x² - x - a = 0. Solve this quadratic and choose the positive root."
            },
            denesting: {
                level1: "Is denesting possible for this radical?",
                level2: "Calculate a² - b. Is it a perfect square?",
                level3: "If yes, find c = √(a² - b) and use the Ramanujan denesting formula",
                level4: "√(a ± √b) = √((a+c)/2) ± √((a-c)/2) where c = √(a² - b)"
            },
            radical_equation_nested: {
                level1: "How can you isolate the nested radical?",
                level2: "Get the radical expression by itself on one side, then square both sides",
                level3: "After squaring, you may have another radical to isolate. Repeat the process.",
                level4: "Solve the resulting equation, but remember to check all solutions in the original equation!"
            },
            ramanujan_identity: {
                level1: "Do you recognize this special pattern?",
                level2: "Some nested radicals have beautiful exact values discovered by mathematicians",
                level3: "This might be a famous identity. Try looking for patterns in the coefficients.",
                level4: "Check if it matches a known Ramanujan identity or golden ratio formula"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Simplify: √(5 + 2√6)",
                    answer: "√3 + √2",
                    assesses: "simple_nested",
                    difficulty: "basic"
                },
                {
                    question: "Evaluate: √(2 + √(2 + √(2 + ...)))",
                    answer: 2,
                    assesses: "infinite_nested",
                    difficulty: "intermediate"
                },
                {
                    question: "Can √(2 + √5) be denested?",
                    answer: "No (2² - 5 = -1, not a perfect square)",
                    assesses: "denesting",
                    difficulty: "intermediate"
                },
                {
                    question: "What is √(1 + √(1 + √(1 + ...)))?",
                    answer: "(1 + √5)/2 (golden ratio)",
                    assesses: "infinite_nested",
                    difficulty: "advanced"
                }
            ],
            formative: [
                {
                    question: "To denest √(7 + 4√3), what should you check first?",
                    options: [
                        "If 7² - 48 is a perfect square",
                        "If √3 can be simplified",
                        "If 7 is prime",
                        "If 4 is a perfect square"
                    ],
                    correct: "If 7² - 48 is a perfect square",
                    explanation: "Denesting requires a² - b to be a perfect square"
                },
                {
                    question: "For infinite nested radical x = √(a + x), what do you do after writing this equation?",
                    options: [
                        "Take square root of both sides",
                        "Square both sides",
                        "Add x to both sides",
                        "Substitute a = 0"
                    ],
                    correct: "Square both sides",
                    explanation: "Squaring gives x² = a + x, a quadratic equation"
                },
                {
                    question: "If x² - x - 6 = 0 has solutions x = 3 and x = -2, which is valid for √(6 + √(6 + ...))?",
                    options: ["x = 3", "x = -2", "Both", "Neither"],
                    correct: "x = 3",
                    explanation: "Principal square root is always non-negative"
                }
            ],
            summative: [
                {
                    question: "Denest √(11 - 6√2) completely",
                    answer: "3 - √2",
                    showsWork: true,
                    rubric: {
                        check_condition: 1,
                        calculate_c: 1,
                        apply_formula: 2,
                        verify: 1
                    }
                },
                {
                    question: "Find the exact value of √(5 + √(5 + √(5 + ...)))",
                    answer: "(1 + √21)/2",
                    showsWork: true,
                    rubric: {
                        setup_equation: 1,
                        square_correctly: 1,
                        solve_quadratic: 2,
                        choose_positive: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "√(3 + 2√2)",
                    "√(4 + √15)",
                    "√(2 + √(2 + √(2 + ...)))",
                    "√(5 + √24)"
                ],
                medium: [
                    "√(7 + 4√3)",
                    "√(11 - 6√2)",
                    "√(6 + √(6 + √(6 + ...)))",
                    "√(13 + 4√10)"
                ],
                hard: [
                    "√(1 + √(1 + √(1 + ...)))",
                    "√(5 + 2√6)",
                    "√(9 - 4√5)",
                    "√(12 + √(12 + √(12 + ...)))"
                ]
            },
            byObjective: {
                canDenestSimple: [
                    "√(3 + 2√2)",
                    "√(7 - 4√3)",
                    "√(5 + 2√6)"
                ],
                canSolveInfinite: [
                    "√(2 + √(2 + ...))",
                    "√(6 + √(6 + ...))",
                    "√(20 + √(20 + ...))"
                ],
                canCheckDenesting: [
                    "Can √(3 + √5) be denested?",
                    "Can √(7 + 2√10) be denested?",
                    "Can √(10 + 6√3) be denested?"
                ],
                canRecognizeGoldenRatio: [
                    "√(1 + √(1 + ...))",
                    "1 + 1/(1 + 1/(1 + ...))",
                    "Fibonacci ratio limit"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "simple_nested": "Check if denestable; if yes denest, if no evaluate numerically or leave in nested form",
                "infinite_nested": "Recognize pattern, set x equal to expression, square to get quadratic, solve for positive root",
                "double_nested": "Work from innermost outward, denest each level if possible",
                "equation_with_nested": "Isolate nested radical, square, repeat if necessary, always verify solutions"
            },
            whenToUseWhat: {
                denesting_formula: "When a² - b is a perfect square",
                quadratic_equation: "For infinite repeating patterns",
                numerical_iteration: "When exact form is not available or needed",
                pattern_recognition: "For Ramanujan-type identities",
                algebraic_manipulation: "For solving equations with nested radicals"
            },
            methodSelection: {
                factorsToConsider: [
                    "Number of nesting levels",
                    "Presence of repeating pattern",
                    "Whether denesting is possible",
                    "If exact or approximate answer needed",
                    "Complexity of coefficients"
                ],
                generalApproach: [
                    "1. Identify the structure (simple, double, infinite)",
                    "2. Check for simplification opportunities (denesting)",
                    "3. Apply appropriate technique",
                    "4. Verify result",
                    "5. Simplify final answer"
                ]
            },
            optimizationTips: {
                "Check denesting first": "For simple nested, always check if a² - b is perfect square before other methods",
                "Recognize patterns": "Many infinite nested radicals have been solved - check for known patterns",
                "Simplify inner first": "For double nested, simplify innermost radical before outer",
                "Always verify": "Verification catches errors and deepens understanding"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Denesting Sprint",
                    timeLimit: 120,
                    problems: [
                        "√(3 + 2√2)",
                        "√(7 - 4√3)",
                        "√(5 + 2√6)",
                        "√(11 + 6√2)"
                    ]
                },
                {
                    name: "Infinite Nested Challenge",
                    timeLimit: 180,
                    problems: [
                        "√(2 + √(2 + ...))",
                        "√(6 + √(6 + ...))",
                        "√(12 + √(12 + ...))",
                        "√(1 + √(1 + ...))"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Denesting",
                    problem: "√(a + b√c) = 2 + √3",
                    given: "Find a, b, and c",
                    solve: "Square both sides and match coefficients",
                    solution: "a = 7, b = 4, c = 3"
                },
                {
                    name: "Pattern Builder",
                    problem: "√(n + √(n + √(n + ...))) = n",
                    constraint: "Find all positive integer values of n",
                    solution: "n² = n + n → n² - 2n = 0 → n(n-2) = 0 → n = 2"
                },
                {
                    name: "Denesting Detective",
                    challenge: "Which can be denested?",
                    options: ["√(2 + √3)", "√(5 + 2√6)", "√(7 + √11)", "√(10 - 4√6)"],
                    solution: "√(5 + 2√6) and √(10 - 4√6)"
                }
            ],
            applications: [
                {
                    scenario: "Golden Rectangle",
                    problem: "A golden rectangle has sides in ratio φ:1 where φ = √(1 + √(1 + ...)). Find φ exactly.",
                    equation: "φ = √(1 + φ)",
                    solution: "φ = (1 + √5)/2 ≈ 1.618"
                },
                {
                    scenario: "Nested Square Roots in Geometry",
                    problem: "A geometric construction yields length √(3 + 2√2). Simplify this length.",
                    equation: "√(3 + 2√2)",
                    solution: "1 + √2"
                },
                {
                    scenario: "Convergent Series",
                    problem: "Does x_n = √(2 + x_{n-1}) starting from x_0 = 0 converge? To what?",
                    solution: "Converges to 2 (same as √(2 + √(2 + ...)))"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "√(7 + 4√3)",
                        "Check: 7² - 12 = 37",  // ERROR: should be 7² - 48
                        "Not a perfect square",
                        "Cannot denest"
                    ],
                    correctAnswer: "2 + √3",
                    errorType: "Calculated a² - b incorrectly (used b instead of 4²·3)"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "√(6 + √(6 + ...))",
                        "Let x = expression",
                        "x = √(6 + x)",
                        "x = 6 + x",  // ERROR: forgot to square
                        "0 = 6 (contradiction?)"
                    ],
                    correctAnswer: "3",
                    errorType: "Forgot to square both sides before solving"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "√(1 + √(1 + ...))",
                        "x² = 1 + x",
                        "x² - x - 1 = 0",
                        "x = (1 ± √5)/2",
                        "Both solutions valid"  // ERROR: only positive solution
                    ],
                    correctAnswer: "(1 + √5)/2",
                    errorType: "Included negative solution for principal square root"
                }
            ],
            historical: [
                {
                    name: "Ramanujan's Genius",
                    problem: "√(1 + 2√(1 + 3√(1 + 4√(...))))",
                    solution: "3",
                    context: "Discovered by Ramanujan, this nested radical with increasing coefficients incredibly equals exactly 3",
                    verification: "Advanced proof using continued fractions"
                },
                {
                    name: "Golden Ratio Discovery",
                    problem: "√(1 + √(1 + √(1 + ...)))",
                    solution: "(1 + √5)/2",
                    context: "Known to ancient Greeks, appears throughout nature and art",
                    connections: ["Fibonacci sequence", "Pentagons", "Nautilus shells"]
                }
            ]
        };
    }

    // SOLVER METHODS

    solveNestedRadicalProblem(config) {
        const { expression, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseNestedRadicalProblem(expression, scenario, parameters, problemType, context);
            this.currentSolution = this.solveNestedRadicalProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateNestedRadicalSteps(this.currentProblem, this.currentSolution);
            this.generateNestedRadicalGraphData();
            this.generateNestedRadicalWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionValue: this.currentSolution?.solution,
                solutionType: this.currentSolution?.solutionType
            };

        } catch (error) {
            throw new Error(`Failed to solve nested radical problem: ${error.message}`);
        }
    }

    parseNestedRadicalProblem(expression, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = expression ? this.cleanMathExpression(expression) : '';

        if (problemType && this.nestedRadicalTypes[problemType]) {
            return {
                originalInput: expression || `${problemType} problem`,
                cleanInput: cleanInput,
                type: problemType,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        for (const [type, config] of Object.entries(this.nestedRadicalTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractNestedRadicalParameters(match, type);

                    return {
                        originalInput: expression || scenario,
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

        if (parameters.a !== undefined && parameters.b !== undefined) {
            return {
                originalInput: expression || 'Nested radical with given parameters',
                cleanInput: cleanInput,
                type: 'simple_nested',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize nested radical type from: ${expression || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/√/g, 'sqrt')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/≠/g, '!=')
            .trim();
    }

    extractNestedRadicalParameters(match, type) {
        const params = {};

        if (!match) return params;

        switch(type) {
            case 'simple_nested':
                params.a = parseFloat(match[1]) || 0;
                params.b = parseFloat(match[2]) || 0;
                break;

            case 'double_nested':
                params.a = parseFloat(match[1]) || 0;
                params.b = parseFloat(match[2]) || 0;
                params.c = parseFloat(match[3]) || 0;
                break;

            case 'infinite_nested':
                params.a = parseFloat(match[1]) || 0;
                break;
        }

        return params;
    }

    solveNestedRadicalProblem_Internal(problem) {
        const solver = this.nestedRadicalTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for nested radical type: ${problem.type}`);
        }

        return solver(problem);
    }

    // SPECIFIC SOLVERS

    solveSimpleNested(problem) {
        const { a, b } = problem.parameters;
        
        // Check if denesting is possible
        const discriminant = a * a - b;
        const c = Math.sqrt(Math.abs(discriminant));
        
        if (discriminant >= 0 && Number.isInteger(c)) {
            // Can denest
            const p = Math.sqrt((a + c) / 2);
            const q = Math.sqrt((a - c) / 2);
            
            return {
                expression: `√(${a} + √${b})`,
                type: 'Simple Nested Radical (Denestable)',
                canDenest: true,
                denestCondition: `${a}² - ${b} = ${discriminant} = ${c}² (perfect square)`,
                denested: `√${p * p} + √${q * q}`,
                solution: `${p} + ${q}`,
                solutionType: 'Exact (denested form)',
                verification: this.verifyDenesting(a, b, p, q),
                category: 'simple_nested'
            };
        } else {
            // Cannot denest
            const numerical = Math.sqrt(a + Math.sqrt(b));
            
            return {
                expression: `√(${a} + √${b})`,
                type: 'Simple Nested Radical (Not Denestable)',
                canDenest: false,
                denestCondition: `${a}² - ${b} = ${discriminant} (not a perfect square)`,
                solution: numerical,
                solutionType: 'Numerical approximation',
                category: 'simple_nested'
            };
        }
    }

    solveDoubleNested(problem) {
        const { a, b, c } = problem.parameters;
        
        // Simplify from innermost outward
        const inner = Math.sqrt(b + Math.sqrt(c));
        const outer = Math.sqrt(a + inner);
        
        return {
            expression: `√(${a} + √(${b} + √${c}))`,
            type: 'Double Nested Radical',
            innerValue: inner,
            solution: outer,
            solutionType: 'Iterative simplification',
            approach: 'Simplify innermost radical first, then work outward',
            category: 'double_nested'
        };
    }

    solveInfiniteNested(problem) {
        const { a } = problem.parameters;
        
        // x = √(a + x)
        // x² = a + x
        // x² - x - a = 0
        // x = (1 + √(1 + 4a)) / 2
        
        const discriminant = 1 + 4 * a;
        const solution = (1 + Math.sqrt(discriminant)) / 2;
        
        return {
            expression: `√(${a} + √(${a} + √(${a} + ...)))`,
            type: 'Infinite Nested Radical',
            selfReferenceEquation: `x = √(${a} + x)`,
            quadraticForm: `x² - x - ${a} = 0`,
            discriminant: discriminant,
            solution: solution,
            solutionType: 'Exact (from quadratic)',
            verification: this.verifyInfiniteNested(a, solution),
            category: 'infinite_nested'
        };
    }

    denestRadical(problem) {
        const { a, b } = problem.parameters;
        
        const discriminant = a * a - b;
        const c = Math.sqrt(Math.abs(discriminant));
        
        if (discriminant >= 0 && Number.isInteger(c)) {
            const p = (a + c) / 2;
            const q = (a - c) / 2;
            
            return {
                original: `√(${a} + √${b})`,
                type: 'Denesting',
                denestingPossible: true,
                condition: `${a}² - ${b} = ${c}² ✓`,
                intermediateValues: { c, p, q },
                denested: `√${p} + √${q}`,
                solution: `√${p} + √${q}`,
                solutionType: 'Denested form',
                category: 'denesting'
            };
        } else {
            return {
                original: `√(${a} + √${b})`,
                type: 'Denesting',
                denestingPossible: false,
                condition: `${a}² - ${b} = ${discriminant} (not a perfect square)`,
                solution: 'Cannot be denested',
                solutionType: 'Not denestable',
                category: 'denesting'
            };
        }
    }

    solveRadicalEquationNested(problem) {
        return {
            type: 'Equation with Nested Radicals',
            approach: 'Isolate nested radical, square both sides, check solutions',
            note: 'Always verify solutions in original equation',
            category: 'radical_equation_nested'
        };
    }

    solveRamanujanIdentity(problem) {
        return {
            type: 'Ramanujan Nested Radical Identity',
            approach: 'Recognize special pattern and apply known identity',
            note: 'These identities have elegant closed forms',
            category: 'ramanujan_identity',
            famousExamples: this.lessons.ramanujan_identities.famousIdentities
        };
    }

    evaluateNumerically(problem) {
        return {
            type: 'Numerical Evaluation',
            approach: 'Use iterative approximation to desired precision',
            note: 'Useful when algebraic simplification is not possible',
            category: 'numerical_methods'
        };
    }

    solveGeometricNested(problem) {
        return {
            type: 'Geometric Nested Radical',
            approach: 'Interpret in geometric context (golden ratio, constructions)',
            note: 'Often relates to golden ratio or geometric constructions',
            category: 'geometric_interpretation'
        };
    }

    // VERIFICATION METHODS

    verifyDenesting(a, b, p, q) {
        const leftSide = a + Math.sqrt(b);
        const rightSide = p * p + q * q + 2 * Math.sqrt(p * p * q * q);
        const difference = Math.abs(leftSide - rightSide);
        
        return {
            original: `√(${a} + √${b})`,
            denested: `${p} + ${q}`,
            check: `(${p} + ${q})² = ${p * p} + ${q * q} + 2√(${p * p}·${q * q})`,
            leftSide: leftSide,
            rightSide: rightSide,
            difference: difference,
            isValid: difference < 1e-9
        };
    }

    verifyInfiniteNested(a, x) {
        const leftSide = x;
        const rightSide = Math.sqrt(a + x);
        const difference = Math.abs(leftSide - rightSide);
        
        return {
            equation: `x = √(${a} + x)`,
            solution: x,
            leftSide: leftSide,
            rightSide: rightSide,
            difference: difference,
            isValid: difference < 1e-9
        };
    }

    // STEP GENERATION

    generateNestedRadicalSteps(problem, solution) {
        let baseSteps = this.generateBaseNestedRadicalSteps(problem, solution);

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

    generateBaseNestedRadicalSteps(problem, solution) {
        const category = this.nestedRadicalTypes[problem.type]?.category;

        switch(category) {
            case 'simple_nested':
                return this.generateSimpleNestedSteps(problem, solution);
            case 'infinite_nested':
                return this.generateInfiniteNestedSteps(problem, solution);
            case 'denesting':
                return this.generateDenestingSteps(problem, solution);
            default:
                return this.generateGenericNestedSteps(problem, solution);
        }
    }

    generateSimpleNestedSteps(problem, solution) {
        const steps = [];
        const { a, b } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Given nested radical',
            description: 'Start with the nested radical expression',
            expression: solution.expression,
            reasoning: 'We need to simplify this nested radical',
            goalStatement: 'Simplify to a form without nested radicals if possible'
        });

        if (solution.canDenest) {
            steps.push({
                stepNumber: 2,
                step: 'Check denesting condition',
                description: `Calculate a² - b = ${a}² - ${b}`,
                expression: `${a * a} - ${b} = ${a * a - b}`,
                reasoning: 'For denesting to be possible, this must be a perfect square',
                result: solution.denestCondition
            });

            const c = Math.sqrt(a * a - b);
            steps.push({
                stepNumber: 3,
                step: 'Apply Ramanujan denesting formula',
                description: 'Use √(a + √b) = √((a+c)/2) + √((a-c)/2)',
                expression: `√((${a}+${c})/2) + √((${a}-${c})/2)`,
                reasoning: 'This formula converts nested radical to sum of simpler radicals'
            });

            const p = (a + c) / 2;
            const q = (a - c) / 2;
            steps.push({
                stepNumber: 4,
                step: 'Simplify',
                description: 'Calculate the denested form',
                expression: `√${p} + √${q}`,
                solution: solution.solution,
                finalAnswer: true
            });

        } else {
            steps.push({
                stepNumber: 2,
                step: 'Check denesting condition',
                description: `Calculate a² - b = ${a}² - ${b}`,
                expression: `${a * a} - ${b} = ${a * a - b}`,
                reasoning: 'This is not a perfect square',
                result: 'Cannot be denested'
            });

            steps.push({
                stepNumber: 3,
                step: 'Numerical evaluation',
                description: 'Evaluate numerically',
                expression: `√(${a} + √${b}) ≈ ${solution.solution.toFixed(6)}`,
                finalAnswer: true
            });
        }

        return steps;
    }

    generateInfiniteNestedSteps(problem, solution) {
        const steps = [];
        const { a } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Recognize the pattern',
            description: 'Identify the self-repeating structure',
            expression: solution.expression,
            reasoning: 'The pattern repeats infinitely',
            goalStatement: 'Use self-reference to set up an equation'
        });

        steps.push({
            stepNumber: 2,
            step: 'Set up self-reference equation',
            description: 'Let x equal the entire expression',
            expression: solution.selfReferenceEquation,
            reasoning: 'Since the pattern repeats, x appears inside itself',
            keyInsight: 'The whole expression equals √(a + itself)'
        });

        steps.push({
            stepNumber: 3,
            step: 'Square both sides',
            description: 'Eliminate the outer square root',
            beforeExpression: `x = √(${a} + x)`,
            operation: 'Square both sides',
            afterExpression: `x² = ${a} + x`,
            reasoning: 'Squaring removes the radical'
        });

        steps.push({
            stepNumber: 4,
            step: 'Form quadratic equation',
            description: 'Rearrange to standard form',
            expression: solution.quadraticForm,
            reasoning: 'This is a quadratic equation we can solve'
        });

        steps.push({
            stepNumber: 5,
            step: 'Solve quadratic',
            description: 'Use quadratic formula',
            expression: `x = (1 ± √(1 + 4·${a}))/2 = (1 ± √${solution.discriminant})/2`,
            reasoning: 'Quadratic formula gives two solutions'
        });

        steps.push({
            stepNumber: 6,
            step: 'Choose positive solution',
            description: 'Select the positive root',
            expression: `x = ${solution.solution}`,
            reasoning: 'Principal square root is always non-negative',
            finalAnswer: true
        });

        return steps;
    }

    generateDenestingSteps(problem, solution) {
        const steps = [];
        const { a, b } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Problem statement',
            description: 'Denest the given radical',
            expression: solution.original,
            goalStatement: 'Convert to form √p + √q'
        });

        steps.push({
            stepNumber: 2,
            step: 'Check denesting condition',
            description: 'Calculate a² - b',
            expression: `${a}² - ${b} = ${a * a - b}`,
            reasoning: 'This must be a perfect square for denesting'
        });

        if (solution.denestingPossible) {
            const c = solution.intermediateValues.c;
            
            steps.push({
                stepNumber: 3,
                step: 'Calculate intermediate value c',
                description: `c = √(a² - b) = √${a * a - b}`,
                expression: `c = ${c}`,
                reasoning: 'This value is used in the denesting formula'
            });

            steps.push({
                stepNumber: 4,
                step: 'Apply denesting formula',
                description: 'Use √(a + √b) = √((a+c)/2) + √((a-c)/2)',
                expression: solution.denested,
                finalAnswer: true
            });

        } else {
            steps.push({
                stepNumber: 3,
                step: 'Conclusion',
                description: 'Denesting not possible',
                expression: 'Leave in nested form or evaluate numerically',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateGenericNestedSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Nested radical problem',
            description: 'Solve using appropriate technique',
            expression: problem.cleanInput || solution.expression,
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS (similar to linear workbook)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationNested(step, problem),
                procedural: this.getProceduralExplanationNested(step),
                visual: this.getVisualExplanationNested(step, problem),
                algebraic: this.getAlgebraicExplanationNested(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyNested(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsNested(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionNested(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionNested(step, problem);
        }

        return enhanced;
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationNested(step, problem),
                analogy: this.findRelevantAnalogyNested(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestVisualizationNested(step)
            }
        }));
    }

    generateELI5ExplanationNested(step, problem) {
        const ELI5Explanations = {
            'Given nested radical': "We have a special square root problem! There's a square root inside another square root - like a box inside a box!",
            'Check denesting condition': "We're checking if we can 'unpack' the nested boxes into two separate boxes sitting side by side instead of inside each other.",
            'Recognize the pattern': "Look! This pattern repeats forever and ever, like looking at a mirror between two mirrors!",
            'Set up self-reference equation': "Because the pattern repeats, we can say x equals the whole thing. It's like the pattern contains a tiny copy of itself!",
            'Square both sides': "We're multiplying both sides by themselves to get rid of the square root sign - like unwrapping one layer.",
            'Apply Ramanujan denesting formula': "We use a special formula discovered by a brilliant mathematician to split the nested radical into simpler parts!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to simplify our nested radical - getting closer to the answer!";
    }

    findRelevantAnalogyNested(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('all_types')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like opening nested boxes - each step reveals what's inside!";
    }

    suggestVisualizationNested(step) {
        const visualizations = {
            'Given nested radical': 'Draw boxes inside boxes to show the nested structure',
            'Check denesting condition': 'Draw a decision tree: perfect square → can denest, not perfect square → cannot denest',
            'Recognize the pattern': 'Draw the pattern repeating several times to show the self-similarity',
            'Set up self-reference equation': 'Draw x pointing to itself inside the square root',
            'Square both sides': 'Show both sides being multiplied by themselves',
            'Apply Ramanujan denesting formula': 'Show the nested radical transforming into sum of two simpler radicals'
        };

        return visualizations[step.step] || 'Draw a diagram to represent what\'s happening in this step';
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
                    reasoning: this.explainStepProgressionNested(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategyNested(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    addErrorPrevention(step, problemType) {
        const category = this.nestedRadicalTypes[problemType]?.category || 'simple_nested';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsNested(step, problemType),
                checkPoints: this.generateCheckPointsNested(step),
                warningFlags: this.identifyWarningFlagsNested(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionNested(step),
                expectedResult: this.describeExpectedResultNested(step),
                troubleshooting: this.generateTroubleshootingTipsNested(step)
            }
        };
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsNested(step, problem),
                subSteps: this.breakIntoSubStepsNested(step),
                hints: this.generateProgressiveHintsNested(step, problem),
                practiceVariation: this.generatePracticeVariationNested(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessNested(step),
                decisionPoints: this.identifyDecisionPointsNested(step),
                alternativeApproaches: this.suggestAlternativeMethodsNested(step, problem)
            }
        }));
    }

    // Helper methods for nested radicals

    getConceptualExplanationNested(step, problem) {
        const explanations = {
            'Given nested radical': 'A nested radical contains another radical inside it, creating layers of complexity that can often be simplified.',
            'Check denesting condition': 'Denesting is only possible when a² - b is a perfect square. This mathematical condition determines our approach.',
            'Recognize the pattern': 'Self-similar patterns in mathematics can be solved by exploiting their recursive structure.',
            'Set up self-reference equation': 'When an expression contains itself, we can create an equation by setting x equal to the whole expression.',
            'Square both sides': 'Squaring eliminates a square root, converting a radical equation to a polynomial equation.',
            'Apply Ramanujan denesting formula': 'This formula elegantly converts nested radicals to sums of simpler radicals when conditions are met.'
        };

        return explanations[step.step] || 'This step advances us toward simplifying the nested radical.';
    }

    getProceduralExplanationNested(step) {
        if (step.operation) {
            return `1. Identify what needs to be done: ${step.operation}
2. Perform the operation carefully
3. Simplify the result
4. Write the new expression`;
        }
        return 'Follow the standard procedure for this type of nested radical step.';
    }

    getVisualExplanationNested(step, problem) {
        const category = this.nestedRadicalTypes[problem.type]?.category;
        
        const visualExplanations = {
            'simple_nested': 'Picture boxes within boxes. Denesting means unpacking to lay boxes side by side.',
            'infinite_nested': 'Imagine an infinite spiral converging to a point, or mirrors reflecting infinitely.',
            'denesting': 'Visualize transforming a nested structure into a flat sum of components.',
            'double_nested': 'Think of three layers of nesting, like dolls within dolls within dolls.'
        };

        return visualExplanations[category] || 'Visualize the nested structure being simplified.';
    }

    getAlgebraicExplanationNested(step) {
        const algebraicRules = {
            'Check denesting condition': 'Ramanujan\'s condition: √(a ± √b) is denestable iff a² - b is a perfect square',
            'Set up self-reference equation': 'Self-reference property: if x = √(a + x), then pattern repeats infinitely',
            'Square both sides': 'Squaring property: (√A)² = A for A ≥ 0',
            'Apply Ramanujan denesting formula': '√(a ± √b) = √((a+c)/2) ± √((a-c)/2) where c = √(a²-b)'
        };

        return algebraicRules[step.step] || 'Apply standard algebraic properties for nested radicals.';
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
                'nested radical': 'square root inside square root',
                'denesting': 'unpacking',
                'self-reference': 'repeating pattern',
                'quadratic': 'x² equation',
                'discriminant': 'number under square root in formula',
                'convergence': 'getting closer to answer'
            },
            ELI5: {
                'nested radical': 'a square root with another square root hiding inside it',
                'denesting': 'turning boxes-inside-boxes into boxes-side-by-side',
                'self-reference': 'when something contains a tiny copy of itself, like mirrors facing mirrors',
                'quadratic': 'equation with x²',
                'discriminant': 'the special number that helps us solve',
                'convergence': 'getting closer and closer, like walking toward a wall'
            },
            intermediate: {
                'nested radical': 'nested radical',
                'denesting': 'denesting',
                'self-reference': 'self-referencing structure',
                'quadratic': 'quadratic equation'
            },
            detailed: {
                'nested radical': 'nested radical (recursive radical structure)',
                'denesting': 'denesting (radical decomposition)',
                'self-reference': 'self-referential recursion',
                'quadratic': 'quadratic equation (second-degree polynomial)'
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
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessityNested(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefitNested(nextStep)}`
        };
    }

    explainStepProgressionNested(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue simplifying the nested radical`;
    }

    explainStepStrategyNested(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessityNested(currentStep, nextStep) {
        const necessities = {
            'Check denesting condition': 'determine if we can simplify to a non-nested form',
            'Set up self-reference equation': 'exploit the repeating pattern to create a solvable equation',
            'Square both sides': 'eliminate the radical and create a polynomial equation',
            'Apply Ramanujan denesting formula': 'transform the nested structure into a sum of simpler radicals'
        };

        return necessities[nextStep.step] || 'continue the simplification process';
    }

    explainStepBenefitNested(nextStep) {
        return `bringing us closer to the simplified form of the nested radical`;
    }

    generatePreventionTipsNested(step, problemType) {
        const tips = {
            'Check denesting condition': [
                'Calculate a² - b carefully',
                'Check if the result is a perfect square',
                'Don\'t confuse a² - b with a - b²'
            ],
            'Square both sides': [
                'Remember to square the entire expression, not just parts',
                'Be careful with signs',
                'Don\'t forget parentheses'
            ],
            'Choose positive solution': [
                'Principal square root is always non-negative',
                'Reject negative solutions for nested radicals',
                'Verify your answer makes sense'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check your arithmetic', 'Verify the result'];
    }

    generateCheckPointsNested(step) {
        return [
            'Did I calculate correctly?',
            'Does this step make mathematical sense?',
            'Am I moving toward a simpler form?',
            'Should I verify this step?'
        ];
    }

    identifyWarningFlagsNested(step, problemType) {
        const warnings = {
            simple_nested: step.step === 'Check denesting condition' ?
                ['Make sure to calculate a² - b, not a - b or a² - b²', 'Check for perfect square carefully'] : [],
            infinite_nested: step.step === 'Choose positive solution' ?
                ['Always choose positive root for nested radicals', 'Negative solutions are extraneous'] : [],
            denesting: step.step === 'Apply Ramanujan denesting formula' ?
                ['Watch signs carefully', 'Verify by squaring the result'] : []
        };

        const category = this.nestedRadicalTypes[problemType]?.category || 'simple_nested';
        return warnings[category] || [];
    }

    generateSelfCheckQuestionNested(step) {
        const questions = {
            'Given nested radical': 'Do I understand the structure of this nested radical?',
            'Check denesting condition': 'Did I calculate a² - b correctly? Is it a perfect square?',
            'Recognize the pattern': 'Do I see how the pattern repeats itself?',
            'Set up self-reference equation': 'Does my equation correctly represent the self-referencing structure?',
            'Square both sides': 'Did I square both sides completely and correctly?',
            'Apply Ramanujan denesting formula': 'Did I apply the formula with the correct signs?',
            'Choose positive solution': 'Did I select the positive solution and reject the negative?'
        };

        return questions[step.step] || 'Does this step make sense and advance the solution?';
    }

    describeExpectedResultNested(step) {
        const expectations = {
            'Given nested radical': 'A nested radical expression',
            'Check denesting condition': 'A number that is or isn\'t a perfect square',
            'Recognize the pattern': 'Identification of the repeating structure',
            'Set up self-reference equation': 'An equation of form x = √(a + x)',
            'Square both sides': 'A quadratic equation',
            'Apply Ramanujan denesting formula': 'Sum or difference of two simpler square roots',
            'Choose positive solution': 'A positive number'
        };

        return expectations[step.step] || 'Progress toward simplification';
    }

    generateTroubleshootingTipsNested(step) {
        return [
            'If stuck, review the denesting conditions',
            'Check your arithmetic carefully',
            'For infinite nested radicals, make sure you see the pattern',
            'Try a numerical check to verify your answer',
            'Review similar worked examples'
        ];
    }

    generateGuidingQuestionsNested(step, problem) {
        const questions = {
            'Given nested radical': [
                'What is the structure of this nested radical?',
                'How many layers of nesting are there?',
                'What approach should we use?'
            ],
            'Check denesting condition': [
                'What is a²?',
                'What is b?',
                'Is a² - b a perfect square?'
            ],
            'Recognize the pattern': [
                'Does the structure repeat?',
                'What stays the same in each repetition?',
                'Can I write the whole thing in terms of itself?'
            ],
            'Set up self-reference equation': [
                'What should I call the entire expression?',
                'How can I write x in terms of itself?',
                'What equation represents this pattern?'
            ],
            'Square both sides': [
                'What happens when I square √(something)?',
                'Did I square the entire right side?',
                'What equation do I get?'
            ],
            'Apply Ramanujan denesting formula': [
                'What is the value of c?',
                'What are (a+c)/2 and (a-c)/2?',
                'What are the square roots of these values?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help simplify the radical?'];
    }

    generateProgressiveHintsNested(step, problem) {
        const category = this.nestedRadicalTypes[problem.type]?.category || 'simple_nested';
        const hintSet = this.hints[category] || this.hints.simple_nested;

        return {
            level1: hintSet.level1 || 'Think about the structure of the nested radical.',
            level2: hintSet.level2 || 'Consider what technique applies here.',
            level3: hintSet.level3 || 'Apply the appropriate formula or method.',
            level4: hintSet.level4 || 'Execute the specific steps needed.'
        };
    }

    breakIntoSubStepsNested(step) {
        if (step.step === 'Check denesting condition') {
            return [
                'Calculate a²',
                'Subtract b from a²',
                'Check if result is a perfect square',
                'Decide if denesting is possible'
            ];
        }

        if (step.step === 'Set up self-reference equation') {
            return [
                'Let x equal the entire expression',
                'Notice that x appears inside itself',
                'Write the equation x = √(a + x)',
                'Prepare to solve for x'
            ];
        }

        if (step.step === 'Apply Ramanujan denesting formula') {
            return [
                'Calculate c = √(a² - b)',
                'Find (a+c)/2 and (a-c)/2',
                'Take square roots',
                'Write final denested form'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generatePracticeVariationNested(step, problem) {
        return {
            similarProblem: 'Try the same type of problem with different numbers',
            practiceHint: 'Practice with denestable radicals first to build confidence',
            extension: 'Once comfortable, try infinite nested radicals or double nested radicals'
        };
    }

    explainThinkingProcessNested(step) {
        return {
            observe: 'What structure do I see in this nested radical?',
            goal: 'What am I trying to simplify or solve for?',
            strategy: 'What technique should I use (denesting, self-reference, numerical)?',
            execute: 'How do I perform this step correctly?',
            verify: 'Does my result make sense? Can I verify it?'
        };
    }

    identifyDecisionPointsNested(step) {
        return [
            'Can this nested radical be denested?',
            'Is this an infinite repeating pattern?',
            'Should I work from inside out or use a formula?',
            'Do I need exact form or numerical approximation?'
        ];
    }

    suggestAlternativeMethodsNested(step, problem) {
        const alternatives = {
            'Check denesting condition': [
                'Could try pattern matching instead of formula',
                'Could evaluate numerically if denesting fails'
            ],
            'Set up self-reference equation': [
                'Could use iterative numerical approach',
                'Could recognize as known pattern (golden ratio, etc.)'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate for this problem'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the simplification`,
            progression: 'We are getting closer to the final simplified form',
            relationship: 'Each step removes complexity or reveals structure'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.nestedRadicalTypes[problemType]?.category || 'simple_nested';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic radical operations'];
    }

    identifyKeyVocabularyNested(step) {
        const vocabulary = {
            'Given nested radical': ['nested', 'radical', 'square root', 'inner', 'outer'],
            'Check denesting condition': ['denesting', 'perfect square', 'discriminant', 'condition'],
            'Recognize the pattern': ['pattern', 'self-similar', 'repeating', 'infinite'],
            'Set up self-reference equation': ['self-reference', 'recursive', 'equation', 'variable'],
            'Square both sides': ['square', 'both sides', 'eliminate', 'radical'],
            'Apply Ramanujan denesting formula': ['Ramanujan', 'formula', 'denested', 'sum'],
            'Choose positive solution': ['positive', 'principal', 'solution', 'non-negative']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPromptsNested(step) {
        return {
            before: 'Before I start this step, what structure do I need to identify?',
            during: 'As I work through this step, what should I be careful about?',
            after: 'After completing this step, how can I verify it\'s correct?'
        };
    }

    findRealWorldConnectionNested(step, problem) {
        const connections = {
            'simple_nested': 'Like simplifying a complex recipe by breaking it into simpler components',
            'infinite_nested': 'Like the golden ratio appearing in seashells, sunflowers, and classical architecture',
            'denesting': 'Like unpacking a complex problem into manageable pieces'
        };

        const category = this.nestedRadicalTypes[problem.type]?.category;
        return connections[category] || 'Nested radicals appear in physics, engineering, and natural patterns.';
    }

    // GRAPH GENERATION

    generateNestedRadicalGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.nestedRadicalTypes[type]?.category;

        if (category === 'infinite_nested' && this.currentSolution.solution !== null) {
            this.graphData = this.generateConvergenceGraph(this.currentProblem, this.currentSolution);
        } else if (category === 'simple_nested' || category === 'denesting') {
            this.graphData = this.generateComparisonVisualization(this.currentProblem, this.currentSolution);
        }
    }

    generateConvergenceGraph(problem, solution) {
        const { a } = problem.parameters;
        const limit = solution.solution;
        
        return {
            type: 'convergence',
            description: `Iterative convergence to ${limit}`,
            limit: limit,
            visualization: 'Show successive approximations approaching limit',
            graphType: 'iteration_sequence'
        };
    }

    generateComparisonVisualization(problem, solution) {
        return {
            type: 'comparison',
            description: 'Visual comparison of nested and denested forms',
            visualization: 'Show equivalence of nested and simplified forms',
            graphType: 'equivalence_diagram'
        };
    }

    // WORKBOOK GENERATION

    generateNestedRadicalWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createNestedRadicalLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createRealWorldApplicationSection(),
            this.createHistoricalContextSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Nested Radicals Mathematical Workbook',
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
            ['Problem Type', this.nestedRadicalTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.nestedRadicalTypes[this.currentProblem.type]?.category || 'nested_radicals'],
            ['Expression', this.currentSolution?.expression || this.currentProblem.cleanInput],
            ['Description', this.currentProblem.scenario || 'Nested radical problem']
        ];

        // Add parameters if available
        if (this.currentProblem.parameters.a !== undefined) {
            problemData.push(['', '']);
            problemData.push(['Parameters', '']);
            if (this.currentProblem.parameters.a !== undefined) {
                problemData.push(['a', this.currentProblem.parameters.a]);
            }
            if (this.currentProblem.parameters.b !== undefined) {
                problemData.push(['b', this.currentProblem.parameters.b]);
            }
            if (this.currentProblem.parameters.c !== undefined) {
                problemData.push(['c', this.currentProblem.parameters.c]);
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

        const category = this.nestedRadicalTypes[this.currentProblem.type]?.category;
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

            if (step.keyInsight) {
                stepsData.push(['Key Insight', step.keyInsight]);
            }

            if (step.result) {
                stepsData.push(['Result', step.result]);
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
                stepsData.push(['Think During', step.thinkingPrompts.during]);
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

            stepsData.push(['', '']);
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createNestedRadicalLessonSection() {
        const { type } = this.currentProblem;
        const category = this.nestedRadicalTypes[type]?.category;

        const lessonData = [
            ['Key Concepts', ''],
            ['', 'Nested radicals contain radicals within radicals'],
            ['', 'Some can be "denested" into simpler forms'],
            ['', 'Infinite patterns often converge to finite values'],
            ['', 'Denesting requires a² - b to be a perfect square'],
            ['', ''],
            ['Important Formulas', ''],
            ['', 'Ramanujan Denesting: √(a ± √b) = √((a+c)/2) ± √((a-c)/2)'],
            ['', 'Where c = √(a² - b)'],
            ['', 'Infinite Nested: x = √(a + x) → x² - x - a = 0'],
            ['', ''],
            ['Key Properties', ''],
            ['', 'Self-similar structures can be solved recursively'],
            ['', 'Always choose positive root for nested radicals'],
            ['', 'Verification by squaring is essential']
        ];

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.canDenest !== undefined) {
            solutionData.push(['Can be denested?', this.currentSolution.canDenest ? 'Yes' : 'No']);
            if (this.currentSolution.denestCondition) {
                solutionData.push(['Condition', this.currentSolution.denestCondition]);
            }
        }

        if (this.currentSolution.solution !== null && this.currentSolution.solution !== undefined) {
            if (this.currentSolution.denested) {
                solutionData.push(['Denested Form', this.currentSolution.denested]);
            }
            solutionData.push(['Solution', this.currentSolution.solution]);
            solutionData.push(['Solution Type', this.currentSolution.solutionType || 'Simplified form']);
        }

        if (this.currentSolution.selfReferenceEquation) {
            solutionData.push(['', '']);
            solutionData.push(['Self-Reference Equation', this.currentSolution.selfReferenceEquation]);
            solutionData.push(['Quadratic Form', this.currentSolution.quadraticForm]);
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
            ['Explanation Level', this.explanationLevel],
            ['Category', this.nestedRadicalTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.approach) {
            analysisData.push(['Approach', this.currentSolution.approach]);
        }

        if (this.currentSolution.canDenest !== undefined) {
            analysisData.push(['Denestable', this.currentSolution.canDenest ? 'Yes' : 'No']);
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
            ['Verification Method', 'Squaring and comparison'],
            ['', '']
        ];

        const verification = this.currentSolution.verification;
        if (verification) {
            if (verification.original) {
                verificationData.push(['Original', verification.original]);
            }
            if (verification.denested) {
                verificationData.push(['Denested', verification.denested]);
            }
            if (verification.check) {
                verificationData.push(['Check', verification.check]);
            }
            verificationData.push(['Left Side', verification.leftSide]);
            verificationData.push(['Right Side', verification.rightSide]);
            verificationData.push(['Difference', verification.difference.toExponential(2)]);
            verificationData.push(['Valid', verification.isValid ? 'Yes ✓' : 'No']);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Confidence Level', 'High']);
            verificationData.push(['Verification Notes', 'Solution verified through algebraic manipulation and numerical check']);
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
            ['Real-World Applications of Nested Radicals', ''],
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

    createHistoricalContextSection() {
        if (!this.includeHistoricalContext) return null;

        const historicalData = [
            ['Historical Context', ''],
            ['', ''],
            ['Ancient Mathematics', 'Nested radicals appeared in ancient Greek geometry, particularly in constructions related to the golden ratio'],
            ['', ''],
            ['Ramanujan\'s Contributions', 'Srinivasa Ramanujan (1887-1920) discovered numerous elegant nested radical identities'],
            ['Famous Identity', '√(1 + 2√(1 + 3√(1 + 4√(...)))) = 3'],
            ['', ''],
            ['Golden Ratio', 'The golden ratio φ = (1+√5)/2 can be expressed as √(1 + √(1 + √(1 + ...)))'],
            ['Significance', 'Appears in art, architecture, nature (nautilus shells, sunflowers, galaxies)'],
            ['', ''],
            ['Modern Applications', 'Nested radicals appear in fractals, chaos theory, and computational mathematics'],
            ['', ''],
            ['Mathematical Beauty', 'Nested radicals demonstrate the elegance and interconnectedness of mathematical concepts']
        ];

        return {
            title: 'Historical Context',
            type: 'historical',
            data: historicalData
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generateNestedRadicalPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateNestedRadicalAlternativeMethods(this.currentProblem.type);

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

    generateNestedRadicalPedagogicalNotes(problemType) {
        const category = this.nestedRadicalTypes[problemType]?.category;

        const pedagogicalDatabase = {
            simple_nested: {
                objectives: [
                    'Understand nested radical structure',
                    'Apply denesting condition (a² - b is perfect square)',
                    'Use Ramanujan denesting formula',
                    'Verify solutions by squaring'
                ],
                keyConcepts: [
                    'Nested radicals contain radicals within radicals',
                    'Denesting converts to sum/difference of simpler radicals',
                    'Not all nested radicals can be denested',
                    'Verification is essential'
                ],
                prerequisites: [
                    'Square root operations',
                    'Perfect square recognition',
                    'Squaring binomials',
                    'Algebraic manipulation'
                ],
                commonDifficulties: [
                    'Confusing a² - b with a - b² or other variations',
                    'Sign errors in denesting formula',
                    'Forgetting to verify result',
                    'Recognizing when denesting is possible'
                ],
                teachingStrategies: [
                    'Use visual representations (boxes within boxes)',
                    'Practice checking denesting condition systematically',
                    'Always verify by squaring the result',
                    'Start with simple examples that denest nicely'
                ],
                extensions: [
                    'Double nested radicals',
                    'Infinite nested radicals',
                    'Ramanujan identities',
                    'Geometric interpretations'
                ],
                assessment: [
                    'Can student identify nested structure?',
                    'Does student check denesting condition correctly?',
                    'Can student apply formula with correct signs?',
                    'Does student verify the result?'
                ]
            },
            infinite_nested: {
                objectives: [
                    'Recognize self-similar repeating patterns',
                    'Set up self-reference equations',
                    'Solve resulting quadratic equations',
                    'Select appropriate (positive) solution'
                ],
                keyConcepts: [
                    'Infinite patterns can converge to finite values',
                    'Self-reference creates solvable equations',
                    'Always choose positive root',
                    'Verification confirms convergence'
                ],
                prerequisites: [
                    'Quadratic equation solving',
                    'Pattern recognition',
                    'Understanding of limits/convergence',
                    'Quadratic formula'
                ],
                commonDifficulties: [
                    'Not seeing the repeating pattern',
                    'Setting up incorrect self-reference equation',
                    'Including negative solution',
                    'Errors in solving quadratic'
                ],
                teachingStrategies: [
                    'Use visual spirals or iterative diagrams',
                    'Show numerical convergence first',
                    'Emphasize self-similar structure',
                    'Connect to golden ratio for motivation'
                ],
                extensions: [
                    'Ramanujan nested radical identities',
                    'Continued fractions',
                    'Golden ratio applications',
                    'Fibonacci sequence connections'
                ],
                assessment: [
                    'Can student identify repeating pattern?',
                    'Does student set up x = √(a + x) correctly?',
                    'Can student solve the quadratic?',
                    'Does student choose positive solution?'
                ]
            },
            denesting: {
                objectives: [
                    'Determine when denesting is possible',
                    'Apply Ramanujan denesting formula correctly',
                    'Handle signs appropriately',
                    'Verify denesting algebraically'
                ],
                keyConcepts: [
                    'Denesting condition: a² - b must be perfect square',
                    'Ramanujan formula provides systematic approach',
                    'Sign management is critical',
                    'Verification validates correctness'
                ],
                prerequisites: [
                    'Perfect square identification',
                    'Square root operations',
                    'Formula application',
                    'Algebraic verification'
                ],
                commonDifficulties: [
                    'Calculating a² - b incorrectly',
                    'Missing perfect square check',
                    'Sign errors in formula',
                    'Not simplifying final radicals'
                ],
                teachingStrategies: [
                    'Create systematic checklist for denesting',
                    'Practice perfect square recognition',
                    'Use color coding for positive/negative terms',
                    'Always verify by squaring result'
                ],
                extensions: [
                    'Denesting with subtraction (√(a - √b))',
                    'Double nested denesting',
                    'When denesting is not possible',
                    'Numerical alternatives'
                ],
                assessment: [
                    'Can student check denesting condition?',
                    'Does student apply formula correctly?',
                    'Are signs handled properly?',
                    'Is verification performed?'
                ]
            },
            ramanujan_identity: {
                objectives: [
                    'Recognize famous nested radical patterns',
                    'Understand mathematical beauty and elegance',
                    'Connect to broader mathematical concepts',
                    'Appreciate historical contributions'
                ],
                keyConcepts: [
                    'Some nested radicals have elegant exact values',
                    'Patterns connect algebra, geometry, number theory',
                    'Mathematical beauty is real and valuable',
                    'Historical context enriches understanding'
                ],
                prerequisites: [
                    'Basic nested radical understanding',
                    'Pattern recognition',
                    'Open mindset to mathematical exploration',
                    'Appreciation for mathematical history'
                ],
                commonDifficulties: [
                    'Seeing value beyond calculation',
                    'Understanding why these are special',
                    'Connecting to broader mathematics'
                ],
                teachingStrategies: [
                    'Share Ramanujan\'s story',
                    'Show multiple representations (algebraic, geometric)',
                    'Connect to art and nature',
                    'Explore why patterns are beautiful'
                ],
                extensions: [
                    'Continued fractions',
                    'Number theory connections',
                    'Geometric interpretations',
                    'Modern applications'
                ],
                assessment: [
                    'Can student recognize special patterns?',
                    'Does student appreciate mathematical elegance?',
                    'Can student explain significance?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Understand and simplify nested radicals'],
            keyConcepts: ['Nested structure', 'Simplification techniques'],
            prerequisites: ['Basic algebra and radicals'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Systematic instruction'],
            extensions: ['More complex problems'],
            assessment: ['Verify understanding']
        };
    }

    generateNestedRadicalAlternativeMethods(problemType) {
        const category = this.nestedRadicalTypes[problemType]?.category;

        const alternativeDatabase = {
            simple_nested: {
                primaryMethod: 'Ramanujan Denesting Formula',
                methods: [
                    {
                        name: 'Pattern Matching',
                        description: 'Try small values for p and q, then verify by squaring'
                    },
                    {
                        name: 'Numerical Evaluation',
                        description: 'Calculate decimal value if denesting not possible'
                    },
                    {
                        name: 'Algebraic Trial',
                        description: 'Assume √(a + √b) = √p + √q and solve system'
                    }
                ],
                comparison: 'Ramanujan formula is most systematic; pattern matching good for intuition; numerical when exact not needed'
            },
            infinite_nested: {
                primaryMethod: 'Self-Reference Quadratic Equation',
                methods: [
                    {
                        name: 'Iterative Numerical Approach',
                        description: 'Start with guess, repeatedly apply x → √(a + x) until convergence'
                    },
                    {
                        name: 'Recognition Method',
                        description: 'Check if matches known pattern (golden ratio, etc.)'
                    },
                    {
                        name: 'Graphical Intersection',
                        description: 'Graph y = x and y = √(a + x), find intersection'
                    }
                ],
                comparison: 'Quadratic approach gives exact answer; iterative shows convergence; recognition fastest for known patterns'
            },
            denesting: {
                primaryMethod: 'Ramanujan Denesting Formula',
                methods: [
                    {
                        name: 'System of Equations',
                        description: 'Set √(a + √b) = √p + √q, square and match coefficients'
                    },
                    {
                        name: 'Intelligent Guessing',
                        description: 'Try likely values of p and q based on factors of a and b'
                    },
                    {
                        name: 'Leave Nested',
                        description: 'If denesting not possible, leave in nested form'
                    }
                ],
                comparison: 'Formula most reliable; system of equations builds understanding; guessing works for simple cases'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard algebraic approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods depending on problem characteristics'
            }],
            comparison: 'Choose method based on problem structure and goals'
        };
    }
}

// Export the class
export default EnhancedNestedRadicalsMathematicalWorkbook;
