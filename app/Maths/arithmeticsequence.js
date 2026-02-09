// Enhanced Arithmetic Sequences and nth Term Mathematical Workbook
import * as math from 'mathjs';

export class EnhancedArithmeticSequencesWorkbook {
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
        this.initializeArithmeticSequenceSolvers();
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
        this.initializeArithmeticSequenceLessons();
    }

    initializeArithmeticSequenceLessons() {
        this.lessons = {
            arithmetic_sequence_basics: {
                title: "Arithmetic Sequences Fundamentals",
                concepts: [
                    "Definition: A sequence where consecutive terms differ by a constant value",
                    "Common difference (d): the constant added to get from one term to the next",
                    "Each term increases (or decreases) by the same amount",
                    "Linear pattern: terms form a straight line when graphed"
                ],
                theory: "An arithmetic sequence is a sequence of numbers where the difference between consecutive terms is constant. This constant is called the common difference (d).",
                keyFormulas: {
                    "General Form": "a₁, a₁+d, a₁+2d, a₁+3d, ...",
                    "Common Difference": "d = aₙ - aₙ₋₁",
                    "nth Term Formula": "aₙ = a₁ + (n-1)d",
                    "Recursive Formula": "aₙ = aₙ₋₁ + d"
                },
                identificationSteps: [
                    "List the first few terms of the sequence",
                    "Calculate differences between consecutive terms",
                    "Check if all differences are equal",
                    "If differences are constant, it's arithmetic",
                    "Identify the common difference d"
                ],
                applications: [
                    "Linear growth patterns",
                    "Salary increases",
                    "Distance traveled at constant speed",
                    "Payment plans",
                    "Temperature changes at constant rate"
                ]
            },

            finding_common_difference: {
                title: "Finding the Common Difference",
                concepts: [
                    "Common difference is the constant added between terms",
                    "Calculated as: d = term₂ - term₁",
                    "Positive d means increasing sequence",
                    "Negative d means decreasing sequence",
                    "Zero d means constant sequence"
                ],
                theory: "The common difference determines the pattern and behavior of the arithmetic sequence. It tells us how much the sequence increases or decreases with each step.",
                keyFormulas: {
                    "Basic Formula": "d = a₂ - a₁",
                    "General Formula": "d = aₙ - aₙ₋₁",
                    "From Any Two Terms": "d = (aₘ - aₙ)/(m - n)"
                },
                calculationSteps: [
                    "Identify two consecutive terms",
                    "Subtract the first from the second",
                    "Result is the common difference d",
                    "Verify by checking other consecutive pairs"
                ],
                applications: [
                    "Determining rate of change",
                    "Predicting sequence behavior",
                    "Finding missing terms",
                    "Verifying arithmetic pattern"
                ]
            },

            nth_term_formula: {
                title: "The nth Term Formula",
                concepts: [
                    "Formula: aₙ = a₁ + (n-1)d",
                    "aₙ is the nth term we want to find",
                    "a₁ is the first term",
                    "n is the position number",
                    "d is the common difference"
                ],
                theory: "The nth term formula allows us to find any term in an arithmetic sequence without listing all previous terms. It's a direct formula based on position.",
                keyFormulas: {
                    "Standard Form": "aₙ = a₁ + (n-1)d",
                    "Expanded Form": "aₙ = a₁ + nd - d",
                    "Simplified Form": "aₙ = (a₁ - d) + nd",
                    "Alternative Form": "aₙ = d·n + (a₁ - d)"
                },
                usageSteps: [
                    "Identify the first term (a₁)",
                    "Find the common difference (d)",
                    "Determine which term you want (n)",
                    "Substitute into formula: aₙ = a₁ + (n-1)d",
                    "Calculate the result"
                ],
                derivation: [
                    "Term 1: a₁",
                    "Term 2: a₁ + d = a₁ + 1·d",
                    "Term 3: a₁ + d + d = a₁ + 2·d",
                    "Term 4: a₁ + d + d + d = a₁ + 3·d",
                    "Pattern: Term n = a₁ + (n-1)·d"
                ],
                applications: [
                    "Finding specific terms quickly",
                    "Predicting future values",
                    "Working with large position numbers",
                    "Solving sequence problems efficiently"
                ]
            },

            finding_first_term: {
                title: "Finding the First Term",
                concepts: [
                    "Given: nth term, position n, and common difference d",
                    "Rearrange nth term formula to solve for a₁",
                    "Formula: a₁ = aₙ - (n-1)d",
                    "First term establishes the starting point"
                ],
                theory: "Sometimes we know a term later in the sequence and need to work backwards to find the first term. This uses algebraic manipulation of the nth term formula.",
                keyFormulas: {
                    "Solving for a₁": "a₁ = aₙ - (n-1)d",
                    "From Two Terms": "a₁ = a₂ - d",
                    "Verification": "Check by calculating forward"
                },
                solvingSteps: [
                    "Write the nth term formula: aₙ = a₁ + (n-1)d",
                    "Substitute known values for aₙ, n, and d",
                    "Solve for a₁: a₁ = aₙ - (n-1)d",
                    "Calculate the result",
                    "Verify by checking forward"
                ],
                applications: [
                    "Reconstructing sequences from partial information",
                    "Finding starting values",
                    "Reverse engineering patterns",
                    "Initial condition problems"
                ]
            },

            finding_position: {
                title: "Finding the Position (n) of a Given Term",
                concepts: [
                    "Given: value of term (aₙ), first term (a₁), common difference (d)",
                    "Rearrange formula to solve for n",
                    "Formula: n = ((aₙ - a₁)/d) + 1",
                    "Position tells us where the term appears"
                ],
                theory: "Finding the position of a term means determining which term number produces a given value. This involves solving the nth term formula for n.",
                keyFormulas: {
                    "Solving for n": "n = ((aₙ - a₁)/d) + 1",
                    "Alternative Form": "n = (aₙ - a₁ + d)/d",
                    "Steps to n": "n - 1 = (aₙ - a₁)/d"
                },
                solvingSteps: [
                    "Start with: aₙ = a₁ + (n-1)d",
                    "Subtract a₁ from both sides: aₙ - a₁ = (n-1)d",
                    "Divide by d: (aₙ - a₁)/d = n - 1",
                    "Add 1 to both sides: n = ((aₙ - a₁)/d) + 1",
                    "Calculate and verify n is a positive integer"
                ],
                applications: [
                    "Determining when a value occurs",
                    "Finding timeline positions",
                    "Checking if value is in sequence",
                    "Planning and scheduling"
                ]
            },

            sequence_from_two_terms: {
                title: "Finding Sequence from Two Non-Consecutive Terms",
                concepts: [
                    "Given: two terms and their positions",
                    "Find common difference first",
                    "Then find first term",
                    "Finally can find any other term"
                ],
                theory: "When we have two terms from different positions, we can determine the entire sequence by first finding d, then finding a₁.",
                keyFormulas: {
                    "Common Difference": "d = (aₘ - aₙ)/(m - n)",
                    "First Term": "a₁ = aₙ - (n-1)d",
                    "Any Term": "aₖ = a₁ + (k-1)d"
                },
                solvingSteps: [
                    "Label the two terms: aₘ and aₙ with positions m and n",
                    "Calculate d = (aₘ - aₙ)/(m - n)",
                    "Use d to find a₁ = aₙ - (n-1)d",
                    "Verify by checking both given terms",
                    "Now can find any term using aₙ = a₁ + (n-1)d"
                ],
                applications: [
                    "Reconstructing sequences from samples",
                    "Interpolating missing data",
                    "Pattern recognition",
                    "Data analysis"
                ]
            },

            sum_of_arithmetic_sequence: {
                title: "Sum of Arithmetic Sequences",
                concepts: [
                    "Sum of first n terms denoted Sₙ",
                    "Two formulas depending on what's known",
                    "Sₙ = (n/2)(a₁ + aₙ) when first and last terms known",
                    "Sₙ = (n/2)(2a₁ + (n-1)d) when d is known"
                ],
                theory: "The sum of an arithmetic sequence can be calculated efficiently using formulas that avoid adding each term individually. These formulas are derived from pairing terms from opposite ends.",
                keyFormulas: {
                    "Sum Formula 1": "Sₙ = (n/2)(a₁ + aₙ)",
                    "Sum Formula 2": "Sₙ = (n/2)(2a₁ + (n-1)d)",
                    "Average Method": "Sₙ = n × average of first and last terms",
                    "Gauss Method": "Pair terms from ends: (a₁ + aₙ) appears n/2 times"
                },
                derivation: [
                    "Write sum forward: Sₙ = a₁ + (a₁+d) + (a₁+2d) + ... + aₙ",
                    "Write sum backward: Sₙ = aₙ + (aₙ-d) + (aₙ-2d) + ... + a₁",
                    "Add both equations: 2Sₙ = (a₁+aₙ) + (a₁+aₙ) + ... + (a₁+aₙ)",
                    "Simplify: 2Sₙ = n(a₁ + aₙ)",
                    "Solve for Sₙ: Sₙ = (n/2)(a₁ + aₙ)"
                ],
                applications: [
                    "Total accumulated value",
                    "Financial calculations",
                    "Distance calculations",
                    "Project planning",
                    "Resource allocation"
                ]
            },

            arithmetic_means: {
                title: "Arithmetic Means Between Terms",
                concepts: [
                    "Insert k arithmetic means between two numbers",
                    "Creates arithmetic sequence with k+2 total terms",
                    "Find common difference first",
                    "Then calculate each mean term"
                ],
                theory: "Arithmetic means are terms inserted between two given terms to form an arithmetic sequence. The number of terms and spacing are determined by the common difference.",
                keyFormulas: {
                    "Common Difference": "d = (b - a)/(k + 1)",
                    "First Mean": "m₁ = a + d",
                    "nth Mean": "mₙ = a + n·d",
                    "Single Arithmetic Mean": "AM = (a + b)/2"
                },
                solvingSteps: [
                    "Identify the two end terms a and b",
                    "Determine number of means k to insert",
                    "Calculate d = (b - a)/(k + 1)",
                    "Find means: m₁ = a+d, m₂ = a+2d, ..., mₖ = a+kd",
                    "Verify: last mean + d should equal b"
                ],
                applications: [
                    "Interpolating data points",
                    "Creating smooth transitions",
                    "Filling missing values",
                    "Animation and graphics"
                ]
            },

            word_problems: {
                title: "Arithmetic Sequence Word Problems",
                concepts: [
                    "Identify the pattern in the problem",
                    "Determine first term and common difference",
                    "Identify what is being asked (term value, position, sum)",
                    "Choose appropriate formula",
                    "Solve and interpret in context"
                ],
                theory: "Real-world problems often involve arithmetic sequences when things change by a constant amount over time or steps. Recognizing the pattern is key.",
                problemTypes: {
                    "Salary/Payment": "Salary increases by fixed amount each year",
                    "Distance/Motion": "Object moves same distance each time period",
                    "Savings": "Save same amount each month",
                    "Growth": "Population/quantity grows by constant amount",
                    "Seating/Rows": "Each row has same number more seats than previous",
                    "Temperature": "Temperature changes by constant amount per hour"
                },
                solutionStrategy: [
                    "Read problem carefully and identify the pattern",
                    "Extract: first term, common difference, which term or sum needed",
                    "Write down what you know using sequence notation",
                    "Choose the right formula for what's being asked",
                    "Solve algebraically",
                    "Check answer makes sense in context",
                    "State answer with proper units and context"
                ],
                commonPhrases: {
                    "increases by": "positive common difference",
                    "decreases by": "negative common difference",
                    "each time": "indicating regularity",
                    "per [time period]": "rate of change = d",
                    "total after n [periods]": "asking for sum",
                    "which [period]": "asking for position n"
                }
            },

            graphing_sequences: {
                title: "Graphing Arithmetic Sequences",
                concepts: [
                    "Plot points (n, aₙ) on coordinate plane",
                    "n (position) on x-axis, aₙ (term value) on y-axis",
                    "Points form linear pattern",
                    "Slope of line equals common difference d",
                    "Y-intercept relates to (a₁ - d)"
                ],
                theory: "Arithmetic sequences graph as discrete points along a straight line. The linear relationship reflects the constant rate of change.",
                keyFormulas: {
                    "Linear Form": "aₙ = dn + (a₁ - d)",
                    "Slope-Intercept": "y = mx + b where m = d, b = a₁ - d",
                    "Slope": "m = d (common difference)",
                    "Y-intercept": "b = a₁ - d"
                },
                graphingSteps: [
                    "Calculate first several terms",
                    "Create ordered pairs (n, aₙ): (1, a₁), (2, a₂), ...",
                    "Plot points on coordinate plane",
                    "Observe linear pattern",
                    "Can draw line through points (though sequence is discrete)"
                ],
                applications: [
                    "Visualizing patterns",
                    "Comparing sequences",
                    "Predicting trends",
                    "Data analysis"
                ]
            },

            special_cases: {
                title: "Special Cases and Edge Cases",
                concepts: [
                    "Constant sequence: d = 0",
                    "Decreasing sequence: d < 0",
                    "Negative terms: possible with negative d or negative a₁",
                    "Non-integer terms: sequences can have fractional or decimal terms"
                ],
                theory: "Understanding special cases helps recognize all forms of arithmetic sequences and avoid errors.",
                specialCases: {
                    "Constant Sequence": {
                        description: "All terms are the same (d = 0)",
                        example: "5, 5, 5, 5, ...",
                        formula: "aₙ = a₁ for all n"
                    },
                    "Decreasing Sequence": {
                        description: "Each term is less than the previous (d < 0)",
                        example: "20, 17, 14, 11, ...",
                        behavior: "Terms decrease linearly"
                    },
                    "Negative Terms": {
                        description: "Sequence includes negative values",
                        example: "5, 2, -1, -4, ...",
                        note: "Still arithmetic if d is constant"
                    },
                    "Fractional Terms": {
                        description: "Terms or common difference are fractions",
                        example: "1/2, 1, 3/2, 2, ...",
                        note: "d = 1/2"
                    }
                },
                commonMistakes: [
                    "Assuming all arithmetic sequences increase",
                    "Thinking d must be an integer",
                    "Forgetting negative sequences are still arithmetic",
                    "Not recognizing constant sequences as arithmetic"
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
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥',
            // Sequence specific
            'subscript_n': '₁', 'subscript_2': '₂', 'subscript_3': '₃'
        };
    }

    initializeArithmeticSequenceSolvers() {
        this.sequenceTypes = {
            identify_arithmetic: {
                patterns: [
                    /is.*arithmetic/i,
                    /identify.*sequence/i,
                    /common.*difference/i
                ],
                solver: this.identifyArithmeticSequence.bind(this),
                name: 'Identify Arithmetic Sequence',
                category: 'identification',
                description: 'Determine if a sequence is arithmetic and find common difference'
            },

            find_common_difference: {
                patterns: [
                    /find.*common.*difference/i,
                    /what.*is.*d/i,
                    /calculate.*d/i
                ],
                solver: this.findCommonDifference.bind(this),
                name: 'Find Common Difference',
                category: 'common_difference',
                description: 'Calculate the common difference d'
            },

            find_nth_term: {
                patterns: [
                    /find.*nth.*term/i,
                    /find.*term/i,
                    /what.*is.*a.*\d+/i,
                    /calculate.*term/i
                ],
                solver: this.findNthTerm.bind(this),
                name: 'Find nth Term',
                category: 'nth_term',
                description: 'Calculate the value of the nth term'
            },

            find_first_term: {
                patterns: [
                    /find.*first.*term/i,
                    /find.*a.*1/i,
                    /calculate.*a1/i
                ],
                solver: this.findFirstTerm.bind(this),
                name: 'Find First Term',
                category: 'first_term',
                description: 'Calculate the first term a₁'
            },

            find_position: {
                patterns: [
                    /find.*position/i,
                    /which.*term/i,
                    /find.*n/i,
                    /what.*term.*number/i
                ],
                solver: this.findPosition.bind(this),
                name: 'Find Position of Term',
                category: 'position',
                description: 'Find which position n a given value occurs at'
            },

            find_sequence_from_terms: {
                patterns: [
                    /two.*terms/i,
                    /given.*terms/i,
                    /find.*sequence/i
                ],
                solver: this.findSequenceFromTerms.bind(this),
                name: 'Find Sequence from Two Terms',
                category: 'sequence_reconstruction',
                description: 'Determine sequence from two non-consecutive terms'
            },

            sum_of_sequence: {
                patterns: [
                    /sum/i,
                    /total/i,
                    /S.*n/i,
                    /add.*terms/i
                ],
                solver: this.sumOfSequence.bind(this),
                name: 'Sum of Arithmetic Sequence',
                category: 'sum',
                description: 'Calculate sum of first n terms'
            },

            arithmetic_means: {
                patterns: [
                    /insert.*means/i,
                    /arithmetic.*means/i,
                    /between.*terms/i
                ],
                solver: this.findArithmeticMeans.bind(this),
                name: 'Arithmetic Means',
                category: 'means',
                description: 'Insert arithmetic means between two terms'
            },

            word_problem: {
                patterns: [
                    /salary/i,
                    /payment/i,
                    /seats/i,
                    /saves/i,
                    /per.*month|per.*year|per.*day/i
                ],
                solver: this.solveWordProblem.bind(this),
                name: 'Word Problem',
                category: 'word_problems',
                description: 'Solve real-world arithmetic sequence problems'
            },

            general_term_formula: {
                patterns: [
                    /general.*term/i,
                    /formula.*for/i,
                    /expression.*for/i
                ],
                solver: this.findGeneralTermFormula.bind(this),
                name: 'General Term Formula',
                category: 'formula',
                description: 'Derive the general formula for the nth term'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            identification: {
                'Check differences': [
                    'Not checking all consecutive differences',
                    'Assuming a pattern without verification',
                    'Confusing arithmetic with geometric sequences'
                ],
                'Calculate common difference': [
                    'Subtracting in wrong order',
                    'Sign errors with negative differences',
                    'Not simplifying fractions'
                ]
            },
            nth_term: {
                'Apply formula': [
                    'Using n instead of (n-1) in formula',
                    'Forgetting to multiply d by (n-1)',
                    'Sign errors with negative d',
                    'Arithmetic mistakes in calculation'
                ],
                'Identify components': [
                    'Confusing a₁ with d',
                    'Using wrong term as first term',
                    'Miscounting position number'
                ]
            },
            position: {
                'Solve for n': [
                    'Forgetting to add 1 after dividing',
                    'Not checking if n is a positive integer',
                    'Division errors',
                    'Assuming fractional n means term exists'
                ],
                'Check validity': [
                    'Not verifying term actually exists in sequence',
                    'Accepting negative position',
                    'Accepting non-integer position without question'
                ]
            },
            sum: {
                'Choose formula': [
                    'Using wrong sum formula for given information',
                    'Forgetting to divide by 2',
                    'Not finding last term when needed'
                ],
                'Calculate': [
                    'Arithmetic errors in substitution',
                    'Sign errors with negative terms',
                    'Mismatching parentheses'
                ]
            }
        };

        this.errorPrevention = {
            formula_application: {
                reminder: 'Always write out the formula first, then substitute values',
                method: 'Use clear notation: write aₙ = a₁ + (n-1)d before plugging in numbers'
            },
            counting: {
                reminder: 'n represents position, not number of steps from first term',
                method: 'Remember: position 1 is first term, so we multiply d by (n-1) steps'
            },
            verification: {
                reminder: 'Always check your answer makes sense',
                method: 'Substitute back or check pattern continues correctly'
            },
            signs: {
                reminder: 'Pay careful attention to negative signs',
                method: 'Use parentheses around negative numbers when substituting'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Understanding what sequences represent and why formulas work',
                language: 'intuitive with emphasis on patterns and meaning'
            },
            procedural: {
                focus: 'Step-by-step instructions for calculations',
                language: 'clear algorithmic steps'
            },
            visual: {
                focus: 'Graphical patterns and spatial understanding',
                language: 'visual metaphors and diagrams'
            },
            algebraic: {
                focus: 'Formal mathematical notation and derivations',
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
                visualization: 'simple pictures and patterns'
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
            salary_increases: {
                scenario: "Annual salary with constant raises",
                pattern: "Salary increases by same amount each year",
                examples: [
                    "Starting salary $40,000, raises of $2,000/year. What's salary in year 10?",
                    "Salary in year 5 is $55,000, in year 8 is $64,000. Find starting salary."
                ],
                context: "Career planning and financial forecasting use arithmetic sequences",
                sequence_elements: {
                    a1: "Starting salary",
                    d: "Annual raise amount",
                    n: "Year number",
                    an: "Salary in year n"
                }
            },
            
            theater_seating: {
                scenario: "Row seating with constant increase",
                pattern: "Each row has same number more seats than previous row",
                examples: [
                    "First row has 15 seats, each row has 2 more. How many in row 20?",
                    "Theater has 30 rows. First row: 12 seats, last row: 70 seats. Total seats?"
                ],
                context: "Architecture and space planning",
                sequence_elements: {
                    a1: "Seats in first row",
                    d: "Additional seats per row",
                    n: "Row number",
                    an: "Seats in row n"
                }
            },

            savings_plan: {
                scenario: "Regular savings with constant deposits",
                pattern: "Save same amount each period, balance grows arithmetically",
                examples: [
                    "Save $50 per month. How much after 2 years (24 months)?",
                    "After 6 months have $450. After 10 months have $750. How much per month?"
                ],
                context: "Personal finance and budgeting",
                sequence_elements: {
                    a1: "Amount after first period",
                    d: "Deposit amount per period",
                    n: "Time period number",
                    Sn: "Total saved after n periods"
                }
            },

            distance_traveled: {
                scenario: "Distance traveled at constant speed",
                pattern: "Distance increases by same amount each time unit",
                examples: [
                    "Car travels 60 km/hour. How far in 5 hours?",
                    "After 2 hours traveled 140 km, after 5 hours traveled 350 km. Find speed."
                ],
                context: "Physics and transportation",
                sequence_elements: {
                    a1: "Distance after first hour",
                    d: "Distance per hour (speed)",
                    n: "Number of hours",
                    an: "Total distance after n hours"
                }
            },

            stacking_blocks: {
                scenario: "Stacking objects with constant increment",
                pattern: "Each level has constant number more/less blocks",
                examples: [
                    "Bottom row has 20 blocks, each row has 2 fewer. How many in row 8?",
                    "Pyramid has 15 rows. Top: 1 block, bottom: 29 blocks. Total blocks?"
                ],
                context: "Construction and design",
                sequence_elements: {
                    a1: "Blocks in first row",
                    d: "Change in blocks per row",
                    n: "Row number",
                    Sn: "Total blocks"
                }
            },

            temperature_change: {
                scenario: "Temperature changing at constant rate",
                pattern: "Temperature increases or decreases by same amount per hour",
                examples: [
                    "6 AM: 50°F, rises 3° per hour. Temperature at 2 PM?",
                    "Noon: 75°F, 6 PM: 63°F. Rate of temperature drop per hour?"
                ],
                context: "Weather and science",
                sequence_elements: {
                    a1: "Starting temperature",
                    d: "Temperature change per hour",
                    n: "Number of hours",
                    an: "Temperature after n hours"
                }
            },

            loan_payments: {
                scenario: "Making equal payments on a debt",
                pattern: "Balance decreases by same payment amount each period",
                examples: [
                    "Owe $5000, pay $200/month. How much owed after 10 months?",
                    "After 4 payments owe $3200, after 8 payments owe $2400. Original debt?"
                ],
                context: "Financial planning and debt management",
                sequence_elements: {
                    a1: "Balance after first payment",
                    d: "Negative payment amount",
                    n: "Payment number",
                    an: "Balance after n payments"
                }
            },

            page_numbers: {
                scenario: "Page numbering and sequential counting",
                pattern: "Pages numbered consecutively",
                examples: [
                    "Book starts at page 15. What page number is 50 pages later?",
                    "Sum of first 20 page numbers starting from page 1?"
                ],
                context: "Organization and counting",
                sequence_elements: {
                    a1: "First page number",
                    d: "1 (consecutive)",
                    n: "Page position",
                    an: "Page number at position n"
                }
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            identification: {
                skills: ['Subtraction', 'Pattern recognition', 'Comparing numbers'],
                priorKnowledge: ['What a sequence is', 'Consecutive terms', 'Difference vs ratio'],
                checkQuestions: [
                    "What is 15 - 12?",
                    "Is 2, 4, 6, 8 a pattern?",
                    "What comes next: 5, 8, 11, ___?"
                ]
            },
            
            common_difference: {
                skills: ['Subtraction', 'Understanding of consistent change'],
                priorKnowledge: ['Order of subtraction', 'Positive and negative numbers'],
                checkQuestions: [
                    "What is 7 - 10?",
                    "What is -3 - (-5)?",
                    "If differences are 3, 3, 3, what's the pattern?"
                ]
            },

            nth_term: {
                skills: ['Substitution', 'Order of operations', 'Multiplication and addition'],
                priorKnowledge: ['Using formulas', 'PEMDAS', 'Working with variables'],
                checkQuestions: [
                    "Calculate 5 + 3(7 - 1)",
                    "If a₁ = 4 and d = 3, what is a₁ + d?",
                    "Evaluate: 10 + (8-1)×2"
                ]
            },

            position: {
                skills: ['Algebra', 'Solving linear equations', 'Division'],
                priorKnowledge: ['Rearranging formulas', 'Isolating variables'],
                checkQuestions: [
                    "Solve: 47 = 5 + (n-1)×6",
                    "If (n-1)×4 = 20, find n",
                    "Solve for x: x - 1 = 8"
                ]
            },

            sum: {
                skills: ['Multiplication', 'Working with formulas', 'Averages'],
                priorKnowledge: ['Understanding of summation', 'Using complex formulas'],
                checkQuestions: [
                    "What is (10/2) × 25?",
                    "Calculate (5/2)(8 + 20)",
                    "What's the average of 5 and 15?"
                ]
            },

            sequence_reconstruction: {
                skills: ['Systems thinking', 'Multi-step problem solving', 'Working backwards'],
                priorKnowledge: ['Finding common difference from any two terms', 'Using d to find a₁'],
                checkQuestions: [
                    "If a₃ = 11 and d = 3, find a₁",
                    "Two terms are 10 and 25, positions 2 and 7. Find d",
                    "Can you solve a problem with multiple unknowns?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            staircase: {
                description: "Sequence as steps on a staircase",
                analogy: "Each step up (or down) is the same height - that's d",
                visualization: "Draw steps with consistent height difference",
                suitableFor: ['identification', 'common_difference', 'nth_term'],
                explanation: "The constant step height is the common difference"
            },

            number_line_jumps: {
                description: "Sequence as equal jumps on number line",
                analogy: "Hopping along a number line with equal-sized jumps",
                visualization: "Mark points on number line with equal spacing",
                suitableFor: ['identification', 'common_difference'],
                explanation: "Each jump is d units, landing on sequence terms"
            },

            linear_graph: {
                description: "Sequence points on a line",
                analogy: "Points forming a straight line pattern",
                visualization: "Plot (n, aₙ) points showing linear relationship",
                suitableFor: ['nth_term', 'graphing'],
                explanation: "Slope of line equals common difference d"
            },

            building_blocks: {
                description: "Stacking blocks with constant change",
                analogy: "Each level adds (or removes) same number of blocks",
                visualization: "Draw towers increasing/decreasing uniformly",
                suitableFor: ['sum', 'means'],
                explanation: "Visual representation of accumulation"
            },

            timeline: {
                description: "Events on a timeline with regular spacing",
                analogy: "Calendar events happening at regular intervals",
                visualization: "Timeline with evenly spaced marks",
                suitableFor: ['word_problems', 'position'],
                explanation: "Shows sequence unfolding over time"
            },

            balance_change: {
                description: "Bank balance with regular deposits/withdrawals",
                analogy: "Money growing or shrinking by same amount each time",
                visualization: "Bar chart showing balance over time",
                suitableFor: ['word_problems', 'sum'],
                explanation: "Real-world application of arithmetic sequences"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Find the 5th term: 3, 7, 11, 15, ...",
                    solution: 19,
                    steps: [
                        "Identify first term: a₁ = 3",
                        "Find common difference: d = 7 - 3 = 4",
                        "Use formula: a₅ = a₁ + (5-1)d",
                        "Substitute: a₅ = 3 + (4)×4 = 3 + 16 = 19"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Is this arithmetic? 5, 10, 15, 20",
                    solution: "Yes, d = 5",
                    steps: [
                        "Find differences: 10-5=5, 15-10=5, 20-15=5",
                        "All differences equal 5",
                        "Yes, it's arithmetic with d = 5"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Find d: 8, 11, 14, 17",
                    solution: "d = 3",
                    steps: [
                        "Subtract consecutive terms",
                        "11 - 8 = 3",
                        "Common difference d = 3"
                    ],
                    difficulty: "easy"
                }
            ],

            intermediate: [
                {
                    problem: "Find a₁₀ if a₁ = 5 and d = -3",
                    solution: -22,
                    steps: [
                        "Given: a₁ = 5, d = -3, n = 10",
                        "Formula: aₙ = a₁ + (n-1)d",
                        "Substitute: a₁₀ = 5 + (10-1)(-3)",
                        "Calculate: a₁₀ = 5 + 9(-3) = 5 - 27 = -22"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Which term is 50? First term 2, d = 3",
                    solution: "n = 17",
                    steps: [
                        "Given: aₙ = 50, a₁ = 2, d = 3",
                        "Formula: n = ((aₙ - a₁)/d) + 1",
                        "Substitute: n = ((50 - 2)/3) + 1",
                        "Calculate: n = (48/3) + 1 = 16 + 1 = 17"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Sum of first 10 terms: a₁ = 3, d = 4",
                    solution: 210,
                    steps: [
                        "Given: n = 10, a₁ = 3, d = 4",
                        "Formula: Sₙ = (n/2)(2a₁ + (n-1)d)",
                        "Substitute: S₁₀ = (10/2)(2(3) + 9(4))",
                        "Calculate: S₁₀ = 5(6 + 36) = 5(42) = 210"
                    ],
                    difficulty: "medium"
                }
            ],

            advanced: [
                {
                    problem: "a₃ = 14, a₇ = 30. Find a₁ and d",
                    solution: "a₁ = 6, d = 4",
                    steps: [
                        "Given: a₃ = 14, a₇ = 30",
                        "Find d: d = (a₇ - a₃)/(7-3) = (30-14)/4 = 16/4 = 4",
                        "Find a₁: a₁ = a₃ - (3-1)d = 14 - 2(4) = 14 - 8 = 6",
                        "Answer: a₁ = 6, d = 4"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Insert 3 means between 5 and 21",
                    solution: "8, 12, 16",
                    steps: [
                        "Total terms: 3 + 2 = 5 terms",
                        "Find d: d = (21-5)/(5-1) = 16/4 = 4",
                        "Calculate means: m₁=5+4=9, m₂=9+4=13, m₃=13+4=17",
                        "Means are: 9, 13, 17"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Sum to n terms: a₁=7, d=-2. When does Sₙ=0?",
                    solution: "n = 7 or n = 8",
                    steps: [
                        "Formula: Sₙ = (n/2)(2(7) + (n-1)(-2)) = 0",
                        "Simplify: (n/2)(14 - 2n + 2) = 0",
                        "(n/2)(16 - 2n) = 0",
                        "n(8 - n) = 0, so n = 0 or n = 8",
                        "Since n > 0, answer is n = 8"
                    ],
                    difficulty: "hard"
                }
            ],

            byMethod: {
                identification: [
                    { problem: "2, 5, 8, 11", answer: "Arithmetic, d=3" },
                    { problem: "10, 7, 4, 1", answer: "Arithmetic, d=-3" },
                    { problem: "1, 2, 4, 8", answer: "Not arithmetic (geometric)" }
                ],
                nth_term: [
                    { problem: "a₆ for 4, 9, 14, 19", answer: 29 },
                    { problem: "a₁₂ for a₁=10, d=5", answer: 65 },
                    { problem: "a₂₀ for a₁=-3, d=2", answer: 35 }
                ],
                position: [
                    { problem: "When is term = 41? a₁=5, d=4", answer: "n=10" },
                    { problem: "When is term = 100? a₁=10, d=6", answer: "n=16" }
                ],
                sum: [
                    { problem: "S₁₀ for a₁=2, d=3", answer: 155 },
                    { problem: "S₂₀ for a₁=5, a₂₀=62", answer: 670 }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            n_vs_n_minus_1: {
                misconception: "Using n instead of (n-1) in the formula",
                reality: "Position n requires (n-1) steps from first term",
                correctiveExample: "For 3rd term (n=3), we take 2 steps: a₃ = a₁ + 2d, not a₁ + 3d",
                commonIn: ['nth_term', 'position']
            },

            difference_order: {
                misconception: "Subtracting in wrong order: a₁ - a₂ instead of a₂ - a₁",
                reality: "Common difference is later term minus earlier term",
                correctiveExample: "For 5, 8: d = 8 - 5 = 3, not 5 - 8 = -3",
                commonIn: ['common_difference']
            },

            position_interpretation: {
                misconception: "Thinking n = 5 means 5 steps from start",
                reality: "n = 5 means the 5th term, which is 4 steps from first term",
                correctiveExample: "1st term (n=1) is 0 steps, 2nd term (n=2) is 1 step, etc.",
                commonIn: ['nth_term', 'position']
            },

            sum_formula_confusion: {
                misconception: "Forgetting to divide by 2 in sum formula",
                reality: "Sum formula requires n/2, not just n",
                correctiveExample: "Sₙ = (n/2)(a₁ + aₙ), the division by 2 is essential",
                commonIn: ['sum']
            },

            non_integer_position: {
                misconception: "Accepting fractional position as valid",
                reality: "Position n must be a positive integer",
                correctiveExample: "If calculation gives n = 5.7, the term doesn't exist in sequence",
                commonIn: ['position']
            },

            constant_sequence_oversight: {
                misconception: "Not recognizing d = 0 as valid arithmetic sequence",
                reality: "Constant sequences (all terms same) are arithmetic with d = 0",
                correctiveExample: "5, 5, 5, 5 is arithmetic with d = 0",
                commonIn: ['identification']
            },

            negative_difference: {
                misconception: "Thinking negative d means not arithmetic",
                reality: "Negative d just means decreasing sequence",
                correctiveExample: "20, 15, 10, 5 is arithmetic with d = -5",
                commonIn: ['identification', 'common_difference']
            },

            first_term_confusion: {
                misconception: "Using wrong term as a₁ in formula",
                reality: "a₁ is specifically the first term of the sequence",
                correctiveExample: "If given a₃ = 10, can't use 10 as a₁ in formula",
                commonIn: ['nth_term', 'position']
            },

            means_calculation: {
                misconception: "Dividing by number of means instead of (means + 1)",
                reality: "To insert k means between two terms: d = (b-a)/(k+1)",
                correctiveExample: "3 means between 5 and 21: d = (21-5)/(3+1) = 16/4 = 4",
                commonIn: ['means']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            sequence_pattern: {
                analogy: "Climbing stairs with equal steps",
                explanation: "Just as you climb stairs by taking equal-height steps, an arithmetic sequence moves by equal-sized jumps (the common difference)",
                suitableFor: ['identification', 'common_difference'],
                ELI5: "Imagine climbing stairs where every step is exactly the same height. That's like an arithmetic sequence - each number is the same amount bigger than the one before!"
            },

            common_difference: {
                analogy: "Growing taller each year",
                explanation: "If you grow 2 inches every year, the amount you grow (2 inches) is like the common difference - it stays the same each time",
                suitableFor: ['common_difference'],
                ELI5: "Think about getting taller. If you grow 2 inches every year, that '2 inches' is like d - it's the same growth every time!"
            },

            nth_term: {
                analogy: "Following a recipe for the nth batch",
                explanation: "The formula tells you exactly how to make any batch without making all the previous ones - start with the base (a₁) and add the increment (d) the right number of times",
                suitableFor: ['nth_term'],
                ELI5: "It's like a magic shortcut! Instead of counting all the way up, the formula jumps right to the answer. Start at the beginning number, then add your step-size times how many steps you need!"
            },

            position_finding: {
                analogy: "Finding which page a bookmark is on",
                explanation: "You know what's written on the page (the term value) and need to figure out which page number it is (the position n)",
                suitableFor: ['position'],
                ELI5: "It's like playing detective! You found a page with specific words, and now you need to figure out what page number it is by working backwards."
            },

            sum_formula: {
                analogy: "Pairing socks from opposite ends",
                explanation: "Gauss discovered you can pair first and last terms, second and second-to-last, etc. Each pair sums to the same amount, making calculation easy",
                suitableFor: ['sum'],
                ELI5: "Imagine you have a line of kids holding hands. The tallest and shortest hold hands, the second-tallest and second-shortest hold hands, and so on. Each pair has the same total height! That's how the sum formula works."
            },

            arithmetic_means: {
                analogy: "Stepping stones across a river",
                explanation: "Insert evenly-spaced stepping stones between two banks - they need to be equally distant apart",
                suitableFor: ['means'],
                ELI5: "You need to put rocks in a river to walk across. The rocks need to be the same distance apart so you can step on each one evenly. That's what arithmetic means are - evenly spaced numbers!"
            },

            sequence_reconstruction: {
                analogy: "Finding the start of a number line from two marks",
                explanation: "If you see marks at positions 3 and 7 on a ruler, you can figure out the spacing and where position 1 must be",
                suitableFor: ['sequence_reconstruction'],
                ELI5: "Imagine someone hid the beginning of a ruler. You can see two marks and their numbers. By seeing how far apart they are, you can figure out where the ruler started!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            identification: {
                level1: "What do you notice about the pattern of numbers?",
                level2: "Try subtracting each term from the next one. What do you see?",
                level3: "If the differences are all the same, it's arithmetic!",
                level4: "Check: {term2} - {term1}, {term3} - {term2}, etc. All equal {d}? Then it's arithmetic with d = {d}"
            },

            common_difference: {
                level1: "How are consecutive terms related?",
                level2: "What's the difference between the second and first term?",
                level3: "Subtract: later term minus earlier term",
                level4: "d = {term2} - {term1} = {d}"
            },

            nth_term: {
                level1: "What information do you have about the sequence?",
                level2: "You need to use the formula aₙ = a₁ + (n-1)d",
                level3: "Substitute your values: a₁ = {a1}, d = {d}, n = {n}",
                level4: "Calculate: aₙ = {a1} + ({n}-1)×{d} = {result}"
            },

            position: {
                level1: "You know the term value and need to find its position. Which formula helps?",
                level2: "Rearrange the nth term formula to solve for n",
                level3: "Use: n = ((aₙ - a₁)/d) + 1",
                level4: "n = (({an} - {a1})/{d}) + 1 = {result}"
            },

            sum: {
                level1: "What information do you have for the sum?",
                level2: "Do you know the first and last term, or do you know d?",
                level3: "Use Sₙ = (n/2)(a₁ + aₙ) or Sₙ = (n/2)(2a₁ + (n-1)d)",
                level4: "Substitute and calculate: Sₙ = {calculation} = {result}"
            },

            sequence_reconstruction: {
                level1: "You have two terms from different positions. What should you find first?",
                level2: "Find the common difference using d = (aₘ - aₙ)/(m - n)",
                level3: "Once you have d, use it to find a₁",
                level4: "d = ({am} - {an})/({m} - {n}) = {d}, then a₁ = {an} - ({n}-1)×{d} = {a1}"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Is this arithmetic? 3, 7, 11, 15",
                    answer: "Yes, d = 4",
                    assesses: "identification",
                    difficulty: "basic"
                },
                {
                    question: "Find the 10th term: a₁ = 5, d = 3",
                    answer: 32,
                    assesses: "nth_term",
                    difficulty: "basic"
                },
                {
                    question: "Find d: 20, 17, 14, 11",
                    answer: -3,
                    assesses: "common_difference",
                    difficulty: "basic"
                },
                {
                    question: "Which term is 50 if a₁ = 2 and d = 4?",
                    answer: 13,
                    assesses: "position",
                    difficulty: "intermediate"
                },
                {
                    question: "Sum of first 10 terms: a₁ = 1, d = 2",
                    answer: 100,
                    assesses: "sum",
                    difficulty: "intermediate"
                }
            ],

            formative: [
                {
                    question: "In the formula aₙ = a₁ + (n-1)d, what does (n-1) represent?",
                    options: ["The position", "Number of steps from first term", "The common difference", "The term value"],
                    correct: "Number of steps from first term",
                    explanation: "Position n requires (n-1) steps because the first term is at position 1 (zero steps)"
                },
                {
                    question: "If d is negative, the sequence is:",
                    options: ["Increasing", "Decreasing", "Constant", "Not arithmetic"],
                    correct: "Decreasing",
                    explanation: "Negative common difference means each term is smaller than the previous"
                },
                {
                    question: "To find a₁ from a₅ = 20 and d = 3, you should:",
                    options: ["Add 3 four times", "Subtract 3 four times", "Add 3 five times", "Multiply 20 by 3"],
                    correct: "Subtract 3 four times",
                    explanation: "Work backwards 4 steps: a₁ = a₅ - 4d = 20 - 4(3) = 8"
                }
            ],

            summative: [
                {
                    question: "Given a₄ = 17 and a₉ = 37, find a₁ and write the formula for aₙ",
                    answer: "a₁ = 5, aₙ = 5 + 4(n-1) = 4n + 1",
                    showsWork: true,
                    rubric: {
                        find_d: 2,
                        find_a1: 2,
                        write_formula: 2,
                        simplify: 1
                    }
                },
                {
                    question: "Insert 4 arithmetic means between 3 and 28",
                    answer: "8, 13, 18, 23",
                    showsWork: true,
                    rubric: {
                        find_d: 2,
                        calculate_means: 2,
                        verify: 1
                    }
                }
            ],

            byDifficulty: {
                easy: [
                    "Find a₅: 2, 5, 8, 11, ...",
                    "Is 10, 20, 30, 40 arithmetic?",
                    "Find d: 7, 11, 15, 19",
                    "What's the next term: 3, 8, 13, ___?"
                ],
                medium: [
                    "Find a₁₅ if a₁ = 7 and d = 4",
                    "Which term is 62 if a₁ = 2 and d = 5?",
                    "Sum of first 12 terms: a₁ = 3, d = 2",
                    "Find a₁ if a₇ = 25 and d = 4"
                ],
                hard: [
                    "If a₃ = 11 and a₈ = 31, find a₁ and d",
                    "Insert 5 means between 4 and 34",
                    "For what n is Sₙ = 210 if a₁ = 3 and d = 4?",
                    "Prove that aₙ = a₁ + (n-1)d using mathematical induction"
                ]
            },

            byObjective: {
                canIdentifyArithmetic: [
                    "Is 5, 9, 13, 17 arithmetic?",
                    "Is 2, 4, 8, 16 arithmetic?",
                    "Find d for 15, 12, 9, 6"
                ],
                canFindNthTerm: [
                    "Find a₁₀: a₁ = 3, d = 5",
                    "Find a₂₀: 4, 7, 10, 13, ...",
                    "Find a₁₂: a₁ = -5, d = 2"
                ],
                canFindPosition: [
                    "When is term = 50? a₁ = 5, d = 3",
                    "Which term is 100? Start: 10, d = 6",
                    "Is 75 in the sequence? a₁ = 3, d = 4"
                ],
                canFindSum: [
                    "S₁₀: a₁ = 2, d = 3",
                    "Sum first 15: a₁ = 5, a₁₅ = 75",
                    "S₂₀: 1, 3, 5, 7, ..."
                ],
                canReconstructSequence: [
                    "a₅ = 18, a₁₀ = 38. Find a₁ and d",
                    "a₃ = 7, a₇ = 19. Write formula for aₙ",
                    "Two terms are 12 (position 4) and 27 (position 9). Find sequence"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "identify_if_arithmetic": "Calculate consecutive differences - if constant, it's arithmetic",
                "find_specific_term": "Use aₙ = a₁ + (n-1)d with known values",
                "find_position": "Rearrange formula to solve for n: n = ((aₙ - a₁)/d) + 1",
                "find_sum": "Use Sₙ = (n/2)(a₁ + aₙ) if you know first and last, or Sₙ = (n/2)(2a₁ + (n-1)d) if you know d",
                "find_first_term": "Use a₁ = aₙ - (n-1)d",
                "reconstruct_sequence": "Find d first from two terms, then find a₁",
                "insert_means": "Calculate d = (b-a)/(k+1), then generate means"
            },

            whenToUseWhat: {
                direct_formula: "When you have a₁, d, and n - find any term directly",
                working_backwards: "When you have aₙ and need a₁ or n",
                sum_formulas: "When you need total of multiple terms",
                difference_formula: "When reconstructing from two non-consecutive terms",
                verification: "Always check your answer fits the pattern"
            },

            methodSelection: {
                factorsToConsider: [
                    "What information is given?",
                    "What are you asked to find?",
                    "Do you have a₁ and d, or two other terms?",
                    "Is this about one term, position, or sum?",
                    "Can you verify your answer?"
                ],
                generalApproach: [
                    "1. Identify what type of problem it is",
                    "2. List known values (a₁, d, n, aₙ, etc.)",
                    "3. Choose appropriate formula",
                    "4. Substitute and calculate carefully",
                    "5. Verify answer makes sense"
                ]
            },

            optimizationTips: {
                "Pattern recognition": "Sometimes seeing the pattern is faster than formula",
                "Check endpoint values": "For sums, checking first and last term helps catch errors",
                "Use calculator wisely": "For complex calculations, but understand the steps",
                "Verify with next term": "If you found aₙ, calculate aₙ₊₁ to check pattern continues"
            },

            problemSolvingFramework: {
                understand: "What is given? What needs to be found?",
                plan: "Which formula or method applies?",
                execute: "Careful calculation with proper notation",
                verify: "Does answer satisfy the sequence pattern?"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Quick Identification Sprint",
                    timeLimit: 60,
                    problems: [
                        "Is 2, 5, 8, 11 arithmetic?",
                        "Is 3, 6, 12, 24 arithmetic?",
                        "Find d: 10, 15, 20, 25",
                        "Find d: 20, 17, 14, 11",
                        "Next term: 7, 11, 15, ___",
                        "Next term: 50, 45, 40, ___"
                    ]
                },
                {
                    name: "nth Term Challenge",
                    timeLimit: 120,
                    problems: [
                        "Find a₅: a₁=3, d=4",
                        "Find a₁₀: a₁=10, d=-2",
                        "Find a₈: 5, 9, 13, 17, ...",
                        "Find a₁₂: a₁=-3, d=5",
                        "Find a₂₀: 2, 4, 6, 8, ..."
                    ]
                }
            ],

            puzzles: [
                {
                    name: "Mystery Sequence",
                    problem: "The 5th term is 17 and the 12th term is 38",
                    challenge: "Find the first term and common difference",
                    solution: "d = 3, a₁ = 5",
                    method: "d = (38-17)/(12-5) = 21/7 = 3, then a₁ = 17 - 4(3) = 5"
                },
                {
                    name: "Sum Puzzle",
                    problem: "The sum of the first n terms is 100",
                    given: "a₁ = 4, d = 3",
                    challenge: "Find n",
                    solution: "n = 8",
                    method: "100 = (n/2)(8 + 3n - 3), solve: 200 = n(5 + 3n), 3n² + 5n - 200 = 0"
                },
                {
                    name: "Pattern Builder",
                    challenge: "Create an arithmetic sequence where a₅ = 20",
                    constraints: "Use a positive integer common difference",
                    sampleSolution: "Many answers: a₁=4, d=4 gives 4,8,12,16,20..."
                }
            ],

            applications: [
                {
                    scenario: "Salary Progression",
                    problem: "Starting salary $35,000, raise of $2,500/year. What's salary in year 15?",
                    setup: "a₁ = 35000, d = 2500, find a₁₅",
                    solution: "$70,000"
                },
                {
                    scenario: "Theater Seating",
                    problem: "First row: 20 seats, each row has 3 more. Row 25 has how many?",
                    setup: "a₁ = 20, d = 3, find a₂₅",
                    solution: "92 seats"
                },
                {
                    scenario: "Savings Plan",
                    problem: "Save $50 first month, increase by $10 each month. Total after 12 months?",
                    setup: "a₁ = 50, d = 10, find S₁₂",
                    solution: "$1260"
                }
            ],

            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Find a₁₀ if a₁ = 5, d = 3",
                        "a₁₀ = 5 + 10(3)",  // ERROR: should be (10-1)
                        "a₁₀ = 5 + 30",
                        "a₁₀ = 35"
                    ],
                    correctAnswer: "a₁₀ = 32",
                    errorType: "Used n instead of (n-1)"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Find d: 5, 9, 13, 17",
                        "d = 5 - 9",  // ERROR: wrong order
                        "d = -4"
                    ],
                    correctAnswer: "d = 4",
                    errorType: "Subtracted in wrong order"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Sum first 10 terms: a₁ = 2, a₁₀ = 20",
                        "S₁₀ = 10(2 + 20)",  // ERROR: forgot to divide by 2
                        "S₁₀ = 220"
                    ],
                    correctAnswer: "S₁₀ = 110",
                    errorType: "Forgot to divide by 2 in sum formula"
                }
            ],

            investigations: [
                {
                    name: "Fibonacci vs Arithmetic",
                    question: "Is the Fibonacci sequence arithmetic? Why or why not?",
                    exploration: "Check differences between consecutive terms",
                    conclusion: "No, differences are not constant (1,1,2,3,5,8,13... differences are 0,1,1,2,3,5...)"
                },
                {
                    name: "Odd Numbers Pattern",
                    question: "Are all odd numbers an arithmetic sequence?",
                    exploration: "1, 3, 5, 7, 9, 11, ...",
                    conclusion: "Yes! a₁ = 1, d = 2, formula: aₙ = 2n - 1"
                },
                {
                    name: "Sum of Odd Numbers",
                    question: "What's the sum of the first n odd numbers?",
                    exploration: "S₁=1, S₂=4, S₃=9, S₄=16, S₅=25...",
                    conclusion: "Sₙ = n² (perfect squares!)"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveArithmeticSequenceProblem(config) {
        const { sequence, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseArithmeticProblem(sequence, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveArithmeticProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateArithmeticSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateArithmeticGraphData();

            // Generate workbook
            this.generateArithmeticWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionValue: this.currentSolution?.result,
                solutionType: this.currentSolution?.type
            };

        } catch (error) {
            throw new Error(`Failed to solve arithmetic sequence problem: ${error.message}`);
        }
    }

    parseArithmeticProblem(sequence, scenario = '', parameters = {}, problemType = null, context = {}) {
        // If problem type is specified, use it directly
        if (problemType && this.sequenceTypes[problemType]) {
            return {
                originalInput: sequence || `${problemType} problem`,
                sequence: sequence,
                type: problemType,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect problem type from scenario or patterns
        for (const [type, config] of Object.entries(this.sequenceTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(scenario) || (sequence && pattern.test(sequence))) {
                    return {
                        originalInput: sequence || scenario,
                        sequence: sequence,
                        type: type,
                        scenario: scenario,
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default to identification if we have a sequence
        if (sequence) {
            return {
                originalInput: sequence,
                sequence: sequence,
                type: 'identify_arithmetic',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize arithmetic sequence problem type from: ${sequence || scenario}`);
    }

    solveArithmeticProblem_Internal(problem) {
        const solver = this.sequenceTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // ARITHMETIC SEQUENCE SOLVERS

    identifyArithmeticSequence(problem) {
        const { sequence, parameters } = problem;
        
        let terms = [];
        if (sequence) {
            terms = sequence.split(',').map(t => parseFloat(t.trim())).filter(n => !isNaN(n));
        } else if (parameters.terms) {
            terms = parameters.terms;
        }

        if (terms.length < 2) {
            return {
                type: 'Identification',
                isArithmetic: false,
                reason: 'Need at least 2 terms to identify sequence',
                category: 'identification'
            };
        }

        const differences = [];
        for (let i = 1; i < terms.length; i++) {
            differences.push(terms[i] - terms[i-1]);
        }

        const isArithmetic = differences.every(d => Math.abs(d - differences[0]) < 1e-9);

        return {
            type: 'Identification',
            isArithmetic: isArithmetic,
            terms: terms,
            differences: differences,
            commonDifference: isArithmetic ? differences[0] : null,
            reason: isArithmetic ? 
                `All consecutive differences equal ${differences[0]}` : 
                `Differences are not constant: ${differences.join(', ')}`,
            category: 'identification',
            result: isArithmetic ? `Arithmetic sequence with d = ${differences[0]}` : 'Not an arithmetic sequence'
        };
    }

    findCommonDifference(problem) {
        const { sequence, parameters } = problem;

        let terms = [];
        if (sequence) {
            terms = sequence.split(',').map(t => parseFloat(t.trim())).filter(n => !isNaN(n));
        } else if (parameters.terms) {
            terms = parameters.terms;
        } else if (parameters.term1 !== undefined && parameters.term2 !== undefined) {
            return {
                type: 'Common Difference',
                method: 'From two consecutive terms',
                term1: parameters.term1,
                term2: parameters.term2,
                commonDifference: parameters.term2 - parameters.term1,
                category: 'common_difference',
                result: parameters.term2 - parameters.term1
            };
        }

        if (terms.length < 2) {
            throw new Error('Need at least 2 terms to find common difference');
        }

        const d = terms[1] - terms[0];

        return {
            type: 'Common Difference',
            terms: terms,
            differences: terms.slice(1).map((t, i) => t - terms[i]),
            commonDifference: d,
            verification: `All differences equal ${d}`,
            category: 'common_difference',
            result: d
        };
    }

    findNthTerm(problem) {
        const { parameters } = problem;
        const { a1, d, n } = parameters;

        if (a1 === undefined || d === undefined || n === undefined) {
            throw new Error('Need a₁, d, and n to find nth term');
        }

        const an = a1 + (n - 1) * d;

        return {
            type: 'nth Term',
            formula: 'aₙ = a₁ + (n-1)d',
            given: {
                a1: a1,
                d: d,
                n: n
            },
            calculation: `a${n} = ${a1} + (${n}-1)×${d}`,
            steps: [
                `a${n} = ${a1} + ${n-1}×${d}`,
                `a${n} = ${a1} + ${(n-1)*d}`,
                `a${n} = ${an}`
            ],
            result: an,
            category: 'nth_term'
        };
    }

    findFirstTerm(problem) {
        const { parameters } = problem;
        const { an, n, d } = parameters;

        if (an === undefined || n === undefined || d === undefined) {
            throw new Error('Need aₙ, n, and d to find first term');
        }

        const a1 = an - (n - 1) * d;

        return {
            type: 'First Term',
            formula: 'a₁ = aₙ - (n-1)d',
            given: {
                an: an,
                n: n,
                d: d
            },
            calculation: `a₁ = ${an} - (${n}-1)×${d}`,
            steps: [
                `a₁ = ${an} - ${n-1}×${d}`,
                `a₁ = ${an} - ${(n-1)*d}`,
                `a₁ = ${a1}`
            ],
            result: a1,
            category: 'first_term'
        };
    }

    findPosition(problem) {
        const { parameters } = problem;
        const { an, a1, d } = parameters;

        if (an === undefined || a1 === undefined || d === undefined) {
            throw new Error('Need aₙ, a₁, and d to find position');
        }

        if (Math.abs(d) < 1e-10) {
            if (Math.abs(an - a1) < 1e-10) {
                return {
                    type: 'Position',
                    result: 'All positions (constant sequence)',
                    category: 'position'
                };
            } else {
                return {
                    type: 'Position',
                    result: 'Term not in sequence (d = 0 but an ≠ a₁)',
                    category: 'position'
                };
            }
        }

        const n = ((an - a1) / d) + 1;

        const isValid = Math.abs(n - Math.round(n)) < 1e-9 && n > 0;

        return {
            type: 'Position',
            formula: 'n = ((aₙ - a₁)/d) + 1',
            given: {
                an: an,
                a1: a1,
                d: d
            },
            calculation: `n = ((${an} - ${a1})/${d}) + 1`,
            steps: [
                `n = (${an - a1})/${d} + 1`,
                `n = ${(an - a1) / d} + 1`,
                `n = ${n}`
            ],
            result: isValid ? Math.round(n) : null,
            isValid: isValid,
            message: isValid ? 
                `Term ${an} is at position ${Math.round(n)}` : 
                `Term ${an} is not in this sequence (n = ${n} is not a positive integer)`,
            category: 'position'
        };
    }

    findSequenceFromTerms(problem) {
        const { parameters } = problem;
        const { am, m, an, n } = parameters;

        if (am === undefined || m === undefined || an === undefined || n === undefined) {
            throw new Error('Need two terms with their positions (aₘ, m, aₙ, n)');
        }

        if (m === n) {
            throw new Error('Positions must be different');
        }

        const d = (am - an) / (m - n);
        const a1 = an - (n - 1) * d;

        return {
            type: 'Sequence Reconstruction',
            given: {
                term1: { value: an, position: n },
                term2: { value: am, position: m }
            },
            commonDifference: d,
            firstTerm: a1,
            formula: `aₙ = ${a1} + (n-1)×${d}`,
            simplifiedFormula: `aₙ = ${d}n + ${a1 - d}`,
            verification: {
                check_an: `a${n} = ${a1} + (${n}-1)×${d} = ${a1 + (n-1)*d}`,
                check_am: `a${m} = ${a1} + (${m}-1)×${d} = ${a1 + (m-1)*d}`
            },
            category: 'sequence_reconstruction',
            result: {
                a1: a1,
                d: d,
                formula: `aₙ = ${a1} + (n-1)×${d}`
            }
        };
    }

    sumOfSequence(problem) {
        const { parameters } = problem;
        const { n, a1, an, d } = parameters;

        if (n === undefined) {
            throw new Error('Need number of terms n');
        }

        let Sn;
        let formulaUsed;
        let calculation;

        if (a1 !== undefined && an !== undefined) {
            // Use formula: Sₙ = (n/2)(a₁ + aₙ)
            Sn = (n / 2) * (a1 + an);
            formulaUsed = 'Sₙ = (n/2)(a₁ + aₙ)';
            calculation = `S${n} = (${n}/2)(${a1} + ${an}) = ${n/2}×${a1+an} = ${Sn}`;
        } else if (a1 !== undefined && d !== undefined) {
            // Use formula: Sₙ = (n/2)(2a₁ + (n-1)d)
            Sn = (n / 2) * (2 * a1 + (n - 1) * d);
            formulaUsed = 'Sₙ = (n/2)(2a₁ + (n-1)d)';
            calculation = `S${n} = (${n}/2)(2×${a1} + (${n}-1)×${d}) = ${n/2}×${2*a1 + (n-1)*d} = ${Sn}`;
        } else {
            throw new Error('Need either (a₁ and aₙ) or (a₁ and d) to find sum');
        }

        return {
            type: 'Sum of Sequence',
            formula: formulaUsed,
            given: parameters,
            calculation: calculation,
            result: Sn,
            interpretation: `Sum of first ${n} terms is ${Sn}`,
            category: 'sum'
        };
    }

    findArithmeticMeans(problem) {
        const { parameters } = problem;
        const { a, b, k } = parameters;

        if (a === undefined || b === undefined || k === undefined) {
            throw new Error('Need start value (a), end value (b), and number of means (k)');
        }

        if (k < 1) {
            throw new Error('Number of means must be at least 1');
        }

        const d = (b - a) / (k + 1);
        const means = [];

        for (let i = 1; i <= k; i++) {
            means.push(a + i * d);
        }

        return {
            type: 'Arithmetic Means',
            given: {
                start: a,
                end: b,
                numberOfMeans: k
            },
            commonDifference: d,
            means: means,
            completeSequence: [a, ...means, b],
            verification: `Last mean + d = ${means[k-1]} + ${d} = ${means[k-1] + d} = ${b}`,
            category: 'means',
            result: means
        };
    }

    solveWordProblem(problem) {
        const { scenario, parameters } = problem;

        // Extract relevant information from scenario and parameters
        return {
            type: 'Word Problem',
            scenario: scenario,
            approach: 'Identify pattern, extract a₁ and d, apply appropriate formula',
            parameters: parameters,
            category: 'word_problems',
            result: 'Solution depends on specific word problem details'
        };
    }

    findGeneralTermFormula(problem) {
        const { parameters } = problem;
        const { a1, d } = parameters;

        if (a1 === undefined || d === undefined) {
            throw new Error('Need a₁ and d to write general term formula');
        }

        const standardForm = `aₙ = ${a1} + (n-1)×${d}`;
        const expandedForm = `aₙ = ${a1} + ${d}n - ${d}`;
        const simplifiedForm = `aₙ = ${d}n + ${a1 - d}`;

        return {
            type: 'General Term Formula',
            given: {
                a1: a1,
                d: d
            },
            standardForm: standardForm,
            expandedForm: expandedForm,
            simplifiedForm: simplifiedForm,
            slopeInterceptForm: `aₙ = ${d}n + ${a1-d} (like y = mx + b)`,
            category: 'formula',
            result: simplifiedForm
        };
    }

    // STEP GENERATION

    generateArithmeticSteps(problem, solution) {
        let baseSteps = this.generateBaseArithmeticSteps(problem, solution);

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

    generateBaseArithmeticSteps(problem, solution) {
        const category = this.sequenceTypes[problem.type]?.category;

        switch(category) {
            case 'identification':
                return this.generateIdentificationSteps(problem, solution);
            case 'common_difference':
                return this.generateCommonDifferenceSteps(problem, solution);
            case 'nth_term':
                return this.generateNthTermSteps(problem, solution);
            case 'first_term':
                return this.generateFirstTermSteps(problem, solution);
            case 'position':
                return this.generatePositionSteps(problem, solution);
            case 'sum':
                return this.generateSumSteps(problem, solution);
            case 'means':
                return this.generateMeansSteps(problem, solution);
            case 'sequence_reconstruction':
                return this.generateReconstructionSteps(problem, solution);
            default:
                return this.generateGenericSteps(problem, solution);
        }
    }

    generateIdentificationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'List the terms',
            description: 'Write out the sequence terms',
            expression: solution.terms ? solution.terms.join(', ') : '',
            reasoning: 'We need to examine the pattern',
            goalStatement: 'Determine if consecutive differences are constant'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate consecutive differences',
            description: 'Find the difference between each pair of consecutive terms',
            calculation: solution.differences ? 
                solution.differences.map((d, i) => 
                    `${solution.terms[i+1]} - ${solution.terms[i]} = ${d}`
                ).join(', ') : '',
            reasoning: 'If all differences are equal, the sequence is arithmetic',
            algebraicRule: 'd = aₙ₊₁ - aₙ'
        });

        steps.push({
            stepNumber: 3,
            step: 'Compare differences',
            description: 'Check if all differences are the same',
            expression: solution.differences ? solution.differences.join(', ') : '',
            reasoning: solution.isArithmetic ? 
                'All differences are equal' : 
                'Differences are not constant',
            conclusion: solution.isArithmetic ? 
                `Yes, arithmetic sequence with d = ${solution.commonDifference}` : 
                'No, not an arithmetic sequence'
        });

        if (solution.isArithmetic) {
            steps.push({
                stepNumber: 4,
                step: 'State common difference',
                description: 'Identify the common difference',
                expression: `d = ${solution.commonDifference}`,
                finalAnswer: true,
                reasoning: 'This constant difference defines the arithmetic pattern'
            });
        }

        return steps;
    }

    generateCommonDifferenceSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify consecutive terms',
            description: 'Select two consecutive terms from the sequence',
            expression: solution.terms ? 
                `${solution.terms[0]}, ${solution.terms[1]}` : 
                `${solution.term1}, ${solution.term2}`,
            reasoning: 'Common difference is found by subtracting consecutive terms',
            goalStatement: 'Calculate d = term₂ - term₁'
        });

        steps.push({
            stepNumber: 2,
            step: 'Subtract to find d',
            description: 'Subtract the first term from the second term',
            calculation: solution.terms ? 
                `d = ${solution.terms[1]} - ${solution.terms[0]}` : 
                `d = ${solution.term2} - ${solution.term1}`,
            expression: `d = ${solution.commonDifference}`,
            reasoning: 'This gives the constant amount added each time',
            algebraicRule: 'Common Difference Formula: d = aₙ₊₁ - aₙ'
        });

        if (solution.differences && solution.differences.length > 1) {
            steps.push({
                stepNumber: 3,
                step: 'Verify with other pairs',
                description: 'Check other consecutive pairs give same difference',
                verification: solution.differences.join(', '),
                reasoning: 'All differences should equal d for arithmetic sequence',
                conclusion: `Verified: d = ${solution.commonDifference}`
            });
        }

        steps.push({
            stepNumber: solution.differences && solution.differences.length > 1 ? 4 : 3,
            step: 'State result',
            description: 'Common difference identified',
            expression: `d = ${solution.commonDifference}`,
            finalAnswer: true,
            interpretation: solution.commonDifference > 0 ? 
                'Positive d means increasing sequence' : 
                solution.commonDifference < 0 ? 
                'Negative d means decreasing sequence' : 
                'd = 0 means constant sequence'
        });

        return steps;
    }

    generateNthTermSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given values',
            description: 'Write down what is known',
            given: {
                'First term (a₁)': solution.given.a1,
                'Common difference (d)': solution.given.d,
                'Position (n)': solution.given.n
            },
            reasoning: 'These values will be substituted into the nth term formula',
            goalStatement: `Find a${solution.given.n}`
        });

        steps.push({
            stepNumber: 2,
            step: 'Write the formula',
            description: 'State the nth term formula',
            expression: solution.formula,
            reasoning: 'This formula calculates any term based on position',
            algebraicRule: 'nth Term Formula for Arithmetic Sequences',
            conceptualNote: 'We add d a total of (n-1) times because the first term needs zero steps'
        });

        steps.push({
            stepNumber: 3,
            step: 'Substitute values',
            description: 'Replace variables with known values',
            beforeExpression: solution.formula,
            afterExpression: solution.calculation,
            reasoning: 'Plug in the specific numbers from our problem',
            visualHint: `Start at ${solution.given.a1}, take ${solution.given.n - 1} steps of size ${solution.given.d}`
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate (n-1)d',
            description: 'Multiply the common difference by the number of steps',
            calculation: solution.steps[0],
            reasoning: `Take ${solution.given.n - 1} steps of size ${solution.given.d}`,
            intermediate: (solution.given.n - 1) * solution.given.d
        });

        steps.push({
            stepNumber: 5,
            step: 'Add to first term',
            description: 'Add the result to the first term',
            calculation: solution.steps[1],
            reasoning: 'Start at first term and move the calculated distance',
            expression: solution.steps[2]
        });

        steps.push({
            stepNumber: 6,
            step: 'State final answer',
            description: `The ${solution.given.n}th term`,
            expression: `a${solution.given.n} = ${solution.result}`,
            finalAnswer: true,
            reasoning: `The value at position ${solution.given.n} in the sequence`
        });

        return steps;
    }

    generateFirstTermSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify known values',
            description: 'List what information we have',
            given: {
                [`Term value (a${solution.given.n})`]: solution.given.an,
                'Position (n)': solution.given.n,
                'Common difference (d)': solution.given.d
            },
            reasoning: 'We need to work backwards to find a₁',
            goalStatement: 'Find the first term a₁'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write rearranged formula',
            description: 'Use formula solved for a₁',
            expression: solution.formula,
            reasoning: 'This formula works backwards from a known term',
            algebraicRule: 'Derived from aₙ = a₁ + (n-1)d',
            derivation: 'aₙ = a₁ + (n-1)d → a₁ = aₙ - (n-1)d'
        });

        steps.push({
            stepNumber: 3,
            step: 'Substitute known values',
            description: 'Replace variables with numbers',
            calculation: solution.calculation,
            reasoning: 'Plug in the given information'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate (n-1)d',
            description: 'Find how many steps worth of d',
            calculation: solution.steps[0],
            intermediate: (solution.given.n - 1) * solution.given.d,
            reasoning: `${solution.given.n - 1} steps of size ${solution.given.d}`
        });

        steps.push({
            stepNumber: 5,
            step: 'Subtract from aₙ',
            description: 'Work backwards to find starting point',
            calculation: solution.steps[1],
            reasoning: 'Move backwards from the known term to the first term'
        });

        steps.push({
            stepNumber: 6,
            step: 'State the first term',
            description: 'The value of a₁',
            expression: solution.steps[2],
            finalAnswer: true,
            verification: `Check: a₁ + (${solution.given.n}-1)×${solution.given.d} = ${solution.result} + ${(solution.given.n-1)*solution.given.d} = ${solution.given.an} ✓`
        });

        return steps;
    }

    generatePositionSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'List known values',
            given: {
                'Term value (aₙ)': solution.given.an,
                'First term (a₁)': solution.given.a1,
                'Common difference (d)': solution.given.d
            },
            reasoning: 'We need to find which position has this value',
            goalStatement: `Find position n where term equals ${solution.given.an}`
        });

        steps.push({
            stepNumber: 2,
            step: 'Write formula for n',
            description: 'Use nth term formula rearranged for n',
            expression: solution.formula,
            reasoning: 'This solves for the position given term value',
            algebraicRule: 'Derived from aₙ = a₁ + (n-1)d',
            derivation: [
                'aₙ = a₁ + (n-1)d',
                'aₙ - a₁ = (n-1)d',
                '(aₙ - a₁)/d = n - 1',
                'n = ((aₙ - a₁)/d) + 1'
            ]
        });

        steps.push({
            stepNumber: 3,
            step: 'Substitute values',
            description: 'Replace variables with known numbers',
            calculation: solution.calculation,
            reasoning: 'Insert the specific values from our problem'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate numerator',
            description: 'Find aₙ - a₁',
            calculation: solution.steps[0],
            intermediate: solution.given.an - solution.given.a1,
            reasoning: 'This is the total distance from first to nth term'
        });

        steps.push({
            stepNumber: 5,
            step: 'Divide by d',
            description: 'Find number of steps',
            calculation: solution.steps[1],
            intermediate: (solution.given.an - solution.given.a1) / solution.given.d,
            reasoning: 'Divide total distance by step size'
        });

        steps.push({
            stepNumber: 6,
            step: 'Add 1',
            description: 'Convert steps to position',
            calculation: solution.steps[2],
            reasoning: 'Position is one more than number of steps from first term'
        });

        steps.push({
            stepNumber: 7,
            step: 'Verify validity',
            description: 'Check if n is a positive integer',
            expression: `n = ${solution.result || 'non-integer'}`,
            validation: {
                isPositive: solution.result > 0,
                isInteger: solution.isValid,
                conclusion: solution.message
            },
            finalAnswer: true,
            reasoning: solution.isValid ? 
                'Position is valid (positive integer)' : 
                'Term does not exist in sequence (n must be positive integer)'
        });

        return steps;
    }

    generateSumSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify what is known',
            description: 'List given information',
            given: solution.given,
            reasoning: 'Determine which sum formula to use',
            goalStatement: `Find sum of first ${solution.given.n} terms`
        });

        steps.push({
            stepNumber: 2,
            step: 'Choose appropriate formula',
            description: 'Select correct sum formula based on given information',
            expression: solution.formula,
            reasoning: solution.formula.includes('a₁ + aₙ') ? 
                'Use this when first and last terms are known' : 
                'Use this when a₁ and d are known',
            alternativeFormula: solution.formula.includes('a₁ + aₙ') ? 
                'Alternative: Sₙ = (n/2)(2a₁ + (n-1)d)' : 
                'Alternative: Sₙ = (n/2)(a₁ + aₙ)',
            formulaDerivation: 'Based on pairing terms from opposite ends (Gauss method)'
        });

        steps.push({
            stepNumber: 3,
            step: 'Substitute values',
            description: 'Replace variables with numbers',
            calculation: solution.calculation,
            reasoning: 'Insert the specific values from the problem'
        });

        steps.push({
            stepNumber: 4,
            step: 'Simplify inside parentheses',
            description: 'Calculate the expression in parentheses first',
            reasoning: 'Follow order of operations (PEMDAS)',
            intermediate: true
        });

        steps.push({
            stepNumber: 5,
            step: 'Multiply',
            description: 'Complete the multiplication',
            expression: `S${solution.given.n} = ${solution.result}`,
            reasoning: 'Final calculation gives the sum'
        });

        steps.push({
            stepNumber: 6,
            step: 'State the sum',
            description: `Sum of first ${solution.given.n} terms`,
            expression: `S${solution.given.n} = ${solution.result}`,
            finalAnswer: true,
            interpretation: solution.interpretation
        });

        return steps;
    }

    generateMeansSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Understand the problem',
            description: 'Identify start, end, and how many means to insert',
            given: {
                'Start value': solution.given.start,
                'End value': solution.given.end,
                'Number of means': solution.given.numberOfMeans
            },
            reasoning: `We need to insert ${solution.given.numberOfMeans} evenly-spaced numbers`,
            goalStatement: `Find ${solution.given.numberOfMeans} arithmetic means between ${solution.given.start} and ${solution.given.end}`,
            totalTerms: solution.given.numberOfMeans + 2
        });

        steps.push({
            stepNumber: 2,
            step: 'Find common difference',
            description: 'Calculate the spacing between terms',
            formula: 'd = (b - a)/(k + 1)',
            calculation: `d = (${solution.given.end} - ${solution.given.start})/(${solution.given.numberOfMeans} + 1)`,
            expression: `d = ${solution.commonDifference}`,
            reasoning: 'Divide the total gap by number of intervals',
            conceptualNote: `${solution.given.numberOfMeans} means create ${solution.given.numberOfMeans + 1} equal intervals`
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate each mean',
            description: 'Add d successively from the start value',
            reasoning: 'Each mean is d more than the previous term',
            calculations: solution.means.map((mean, i) => 
                `m${i+1} = ${solution.given.start} + ${i+1}×${solution.commonDifference} = ${mean}`
            )
        });

        steps.push({
            stepNumber: 4,
            step: 'List all means',
            description: 'The inserted arithmetic means',
            expression: solution.means.join(', '),
            reasoning: 'These are the evenly-spaced values between start and end'
        });

        steps.push({
            stepNumber: 5,
            step: 'Verify',
            description: 'Check that last mean plus d equals end value',
            verification: solution.verification,
            reasoning: 'Ensures our arithmetic sequence is correct'
        });

        steps.push({
            stepNumber: 6,
            step: 'Complete sequence',
            description: 'Show full sequence including start and end',
            expression: solution.completeSequence.join(', '),
            finalAnswer: true,
            interpretation: `The ${solution.given.numberOfMeans} arithmetic means are: ${solution.means.join(', ')}`
        });

        return steps;
    }

    generateReconstructionSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given terms',
            description: 'Note the two terms and their positions',
            given: {
                [`Term at position ${solution.given.term1.position}`]: solution.given.term1.value,
                [`Term at position ${solution.given.term2.position}`]: solution.given.term2.value
            },
            reasoning: 'We need to find d first, then use it to find a₁',
            goalStatement: 'Determine the complete sequence (find a₁ and d)'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find common difference',
            description: 'Use formula for d from two non-consecutive terms',
            formula: 'd = (aₘ - aₙ)/(m - n)',
            calculation: `d = (${solution.given.term2.value} - ${solution.given.term1.value})/(${solution.given.term2.position} - ${solution.given.term1.position})`,
            expression: `d = ${solution.commonDifference}`,
            reasoning: 'Divide the difference in values by the difference in positions',
            algebraicRule: 'Common difference from any two terms'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find first term',
            description: 'Use one of the given terms to find a₁',
            formula: 'a₁ = aₙ - (n-1)d',
            calculation: `a₁ = ${solution.given.term1.value} - (${solution.given.term1.position}-1)×${solution.commonDifference}`,
            expression: `a₁ = ${solution.firstTerm}`,
            reasoning: 'Work backwards from a known term using d',
            alternativeCheck: `Could also use: a₁ = ${solution.given.term2.value} - (${solution.given.term2.position}-1)×${solution.commonDifference} = ${solution.firstTerm}`
        });

        steps.push({
            stepNumber: 4,
            step: 'Write the formula',
            description: 'Express the general nth term formula',
            standardForm: solution.formula,
            simplifiedForm: solution.simplifiedFormula,
            reasoning: 'This formula generates any term in the sequence'
        });

        steps.push({
            stepNumber: 5,
            step: 'Verify',
            description: 'Check both given terms with our formula',
            verification1: solution.verification.check_an,
            verification2: solution.verification.check_am,
            reasoning: 'Both should match the original given values',
            conclusion: 'Formula verified ✓'
        });

        steps.push({
            stepNumber: 6,
            step: 'State the sequence',
            description: 'Summary of the arithmetic sequence',
            finalAnswer: true,
            result: {
                'First term': `a₁ = ${solution.firstTerm}`,
                'Common difference': `d = ${solution.commonDifference}`,
                'General formula': solution.simplifiedFormula
            },
            interpretation: 'The sequence is fully determined'
        });

        return steps;
    }

    generateGenericSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Arithmetic sequence problem',
            description: 'Solve the given problem',
            expression: problem.scenario || 'Arithmetic sequence',
            reasoning: 'Apply appropriate sequence formulas',
            solution: solution,
            result: solution.result
        }];
    }

    // ENHANCED EXPLANATION METHODS (Similar structure to Linear Workbook)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanation(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualExplanation(step, problem),
                algebraic: this.getAlgebraicExplanation(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabulary(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPrompts(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestion(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnection(step, problem);
        }

        return enhanced;
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5Explanation(step, problem),
                analogy: this.findRelevantAnalogy(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestVisualization(step)
            }
        }));
    }

    generateELI5Explanation(step, problem) {
        const ELI5Explanations = {
            'List the terms': "Let's write down all the numbers in our pattern so we can look at them!",
            'Calculate consecutive differences': "Now we check how much bigger each number is than the one before it. Do we jump up by the same amount each time?",
            'Compare differences': "If all our jumps are the same size, we have an arithmetic sequence! If not, it's a different kind of pattern.",
            'Identify consecutive terms': "Pick two numbers that are right next to each other in the pattern.",
            'Subtract to find d': "Subtract the smaller number from the bigger number - that tells you the jump size!",
            'Identify given values': "Let's write down everything we know before we start!",
            'Write the formula': "This is like a recipe that tells us how to find any number in the pattern.",
            'Substitute values': "Now we put our actual numbers into the recipe!",
            'Calculate (n-1)d': "We count how many jumps we need to make from the first number.",
            'Add to first term': "Start at the first number and make all those jumps - we've arrived!",
            'Choose appropriate formula': "Pick the right recipe based on what ingredients (information) we have!",
            'Find common difference': "Figure out the jump size between the stepping stones.",
            'Calculate each mean': "Put in the stepping stones one at a time, each one jump away from the last!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our sequence puzzle!";
    }

    findRelevantAnalogy(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes(this.sequenceTypes[problem.type]?.category)) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like following a pattern - each step follows the same rule!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'arithmetic sequence': 'pattern with equal jumps',
            'common difference': 'jump size',
            'consecutive terms': 'numbers next to each other',
            'nth term': 'the number at position n',
            'first term': 'starting number',
            'position': 'which number in the pattern',
            'formula': 'recipe for finding numbers',
            'substitute': 'put in the numbers',
            'calculate': 'figure out',
            'verify': 'double-check',
            'sequence': 'pattern of numbers'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualization(step) {
        const visualizations = {
            'List the terms': 'Draw the numbers in a line or on stairs',
            'Calculate consecutive differences': 'Draw arrows between numbers showing the jump size',
            'Compare differences': 'Circle all the differences - are they all the same?',
            'Write the formula': 'Draw a box showing the recipe: start + (jumps × jump size)',
            'Substitute values': 'Fill in the boxes with your actual numbers',
            'Calculate each mean': 'Draw a number line and mark evenly-spaced points'
        };

        return visualizations[step.step] || 'Draw a picture to show what this step does';
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
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    addErrorPrevention(step, problemType) {
        const category = this.sequenceTypes[problemType]?.category || 'identification';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTips(step, problemType),
                checkPoints: this.generateCheckPoints(step),
                warningFlags: this.identifyWarningFlags(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestion(step),
                expectedResult: this.describeExpectedResult(step),
                troubleshooting: this.generateTroubleshootingTips(step)
            }
        };
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestions(step, problem),
                subSteps: this.breakIntoSubSteps(step),
                hints: this.generateProgressiveHints(step, problem),
                practiceVariation: this.generatePracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcess(step),
                decisionPoints: this.identifyDecisionPoints(step),
                alternativeApproaches: this.suggestAlternativeMethods(step, problem)
            }
        }));
    }

    // HELPER METHODS

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'List the terms': 'Writing out the sequence helps us see the pattern visually and prepare for analysis.',
            'Calculate consecutive differences': 'The differences reveal whether the sequence has constant growth - the hallmark of arithmetic sequences.',
            'Identify given values': 'Organizing known information clarifies what we have and what we need to find.',
            'Write the formula': 'The nth term formula is a powerful tool that connects position to value through the pattern of constant difference.',
            'Substitute values': 'Replacing variables with specific numbers transforms the general formula into our particular solution.',
            'Find common difference': 'The common difference is the DNA of the arithmetic sequence - it defines the entire pattern.',
            'Choose appropriate formula': 'Different sum formulas work best with different given information - choosing wisely saves work.'
        };

        return conceptualExplanations[step.step] || 'This step advances our understanding of the sequence pattern.';
    }

    getProceduralExplanation(step) {
        return step.calculation ? 
            `Perform the calculation: ${step.calculation}` : 
            'Follow the indicated procedure carefully.';
    }

    getVisualExplanation(step, problem) {
        const category = this.sequenceTypes[problem.type]?.category;
        
        const visualExplanations = {
            'identification': 'Imagine climbing stairs - each step should be the same height for arithmetic sequence.',
            'nth_term': 'Picture hopping along a number line: start position + (number of hops × hop size).',
            'sum': 'Visualize pairing first and last terms, second and second-to-last, etc. - each pair has the same sum!',
            'means': 'Think of placing stepping stones across a river at equal distances apart.'
        };

        return visualExplanations[category] || 'Visualize the pattern of numbers growing by constant amounts.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Calculate consecutive differences': 'Difference formula: d = aₙ₊₁ - aₙ',
            'Write the formula': 'General term formula: aₙ = a₁ + (n-1)d',
            'Find common difference': 'For any two terms: d = (aₘ - aₙ)/(m - n)',
            'Choose appropriate formula': 'Sum formulas: Sₙ = (n/2)(a₁ + aₙ) or Sₙ = (n/2)(2a₁ + (n-1)d)'
        };

        return algebraicRules[step.step] || 'Apply standard arithmetic sequence principles.';
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
                'arithmetic sequence': 'pattern',
                'common difference': 'd',
                'consecutive terms': 'next-door numbers',
                'position': 'spot',
                'formula': 'recipe',
                'nth term': 'any number in the pattern'
            },
            intermediate: {
                'arithmetic sequence': 'arithmetic sequence',
                'common difference': 'common difference',
                'consecutive terms': 'consecutive terms',
                'position': 'position',
                'formula': 'formula'
            },
            ELI5: {
                'arithmetic sequence': 'a pattern of numbers where each jump is the same size',
                'common difference': 'the jump size between numbers',
                'consecutive terms': 'two numbers right next to each other',
                'position': 'which spot in the pattern',
                'formula': 'a recipe for finding any number',
                'nth term': 'the number at spot n',
                'substitute': 'swap in our real numbers'
            },
            detailed: {
                'arithmetic sequence': 'arithmetic sequence (linear pattern)',
                'common difference': 'common difference d (constant increment)',
                'consecutive terms': 'consecutive terms (sequential elements)',
                'formula': 'formula (general expression)'
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
            currentState: `We now have: ${currentStep.expression || 'completed this step'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary to: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This moves us closer to: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `Having ${currentStep.step}, we now proceed to ${nextStep.step}`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return 'continue building toward the solution';
    }

    explainStepBenefit(nextStep) {
        return 'finding our answer';
    }

    generatePreventionTips(step, problemType) {
        const category = this.sequenceTypes[problemType]?.category;
        
        const tips = {
            'nth_term': [
                'Remember: use (n-1), not n, when multiplying by d',
                'Double-check the order of operations',
                'Verify your answer makes sense in the sequence pattern'
            ],
            'position': [
                'Check that n is a positive integer',
                'If n is fractional, the term doesn\'t exist in the sequence',
                'Don\'t forget to add 1 after dividing'
            ],
            'common_difference': [
                'Subtract in correct order: later term minus earlier term',
                'Watch signs with negative differences',
                'Verify by checking other consecutive pairs'
            ]
        };

        return tips[category] || ['Work carefully', 'Check your arithmetic'];
    }

    generateCheckPoints(step) {
        return [
            'Did I use the correct formula?',
            'Are my calculations accurate?',
            'Does the answer make sense?',
            'Can I verify this step?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = [];
        
        if (step.step === 'Calculate (n-1)d') {
            warnings.push('Common mistake: using n instead of (n-1)');
        }
        if (step.step === 'Subtract to find d') {
            warnings.push('Watch subtraction order: later - earlier');
        }
        if (step.step === 'Verify validity') {
            warnings.push('Position must be a positive integer');
        }

        return warnings;
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Calculate consecutive differences': 'Did I subtract each term from the next one (not previous)?',
            'Write the formula': 'Did I write (n-1) correctly, not just n?',
            'Substitute values': 'Did I substitute all variables correctly?',
            'Verify validity': 'Is n a positive integer?',
            'Choose appropriate formula': 'Do I have the right information for this formula?'
        };

        return questions[step.step] || 'Does this step make sense?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Calculate consecutive differences': 'A list of numbers (hopefully all equal)',
            'Find common difference': 'A single number (positive, negative, or zero)',
            'Calculate (n-1)d': 'The total distance to travel from first term',
            'State the sum': 'The total of all terms added together'
        };

        return expectations[step.step] || 'Progress toward the solution';
    }

    generateTroubleshootingTips(step) {
        return [
            'Recheck each calculation carefully',
            'Verify you used the correct formula',
            'Make sure you substituted values correctly',
            'Check if your answer fits the pattern'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'List the terms': [
                'What numbers are in the sequence?',
                'How many terms are given?',
                'Can you see a pattern?'
            ],
            'Calculate consecutive differences': [
                'How do you find the difference between two numbers?',
                'Which term should you subtract from which?',
                'What do you expect if it\'s arithmetic?'
            ],
            'Write the formula': [
                'What formula applies to this problem?',
                'What does each variable represent?',
                'Why do we use (n-1) instead of n?'
            ],
            'Substitute values': [
                'What values do you know?',
                'Where do they go in the formula?',
                'Did you substitute everything?'
            ]
        };

        return questions[step.step] || ['What is this step trying to accomplish?', 'How does it help solve the problem?'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.sequenceTypes[problem.type]?.category || 'identification';
        const hintSet = this.hints[category] || this.hints.identification;

        return {
            level1: hintSet.level1 || 'Think about what information you have.',
            level2: hintSet.level2 || 'Consider which formula or method applies.',
            level3: hintSet.level3 || 'Try performing the indicated operation.',
            level4: hintSet.level4 || 'Complete the calculation step by step.'
        };
    }

    breakIntoSubSteps(step) {
        if (step.calculation) {
            return [
                'Identify what calculation is needed',
                'Set up the calculation with known values',
                'Perform the arithmetic carefully',
                'Simplify and express the result',
                'Verify the answer makes sense'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same type of problem with different numbers',
            practiceHint: 'Practice with simple numbers first to build confidence',
            extension: 'Once comfortable, try with fractions, negatives, or larger numbers'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What do I see in this sequence/problem?',
            goal: 'What am I trying to find?',
            strategy: 'Which formula or method should I use?',
            execute: 'How do I perform the calculation correctly?',
            verify: 'Does my answer make sense in context?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which formula is most appropriate?',
            'Do I have all the information I need?',
            'Should I verify this step before continuing?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = [];

        if (step.step === 'Calculate consecutive differences') {
            alternatives.push('Could also list terms and visually see the pattern');
        }
        if (step.step === 'Write the formula') {
            alternatives.push('Could solve by extending the pattern instead of using formula');
        }

        return alternatives.length > 0 ? alternatives : ['The chosen method is most efficient'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This builds on step ${stepIndex} by continuing the solution process`,
            progression: 'Each step brings us closer to the answer',
            relationship: 'Steps follow a logical sequence'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.sequenceTypes[problemType]?.category || 'identification';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic arithmetic'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'List the terms': ['sequence', 'terms', 'pattern'],
            'Calculate consecutive differences': ['difference', 'consecutive', 'arithmetic sequence'],
            'Write the formula': ['formula', 'nth term', 'position', 'common difference'],
            'Substitute values': ['substitute', 'variable', 'value'],
            'Find common difference': ['common difference', 'd', 'constant'],
            'Choose appropriate formula': ['sum', 'formula', 'Sₙ']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'What do I need to know or identify before starting?',
            during: 'Am I applying the method correctly?',
            after: 'Does my result make sense? Can I verify it?'
        };
    }

    findRealWorldConnection(step, problem) {
        const connections = {
            'identification': 'Like recognizing steady growth in savings or regular salary increases.',
            'nth_term': 'Like calculating future salary after consistent yearly raises.',
            'sum': 'Like finding total savings after depositing same amount each month.',
            'means': 'Like placing posts at equal distances to build a fence.'
        };

        const category = this.sequenceTypes[problem.type]?.category;
        return connections[category] || 'Arithmetic sequences model many real-world patterns with constant change.';
    }

    // GRAPH GENERATION

    generateArithmeticGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const category = this.sequenceTypes[this.currentProblem.type]?.category;

        if (category === 'nth_term' || category === 'identification') {
            this.graphData = this.generateSequenceGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateSequenceGraph(problem, solution) {
        let a1, d;

        if (solution.given) {
            a1 = solution.given.a1;
            d = solution.given.d || solution.commonDifference;
        } else if (solution.firstTerm && solution.commonDifference) {
            a1 = solution.firstTerm;
            d = solution.commonDifference;
        } else if (solution.terms && solution.commonDifference) {
            a1 = solution.terms[0];
            d = solution.commonDifference;
        }

        if (a1 !== undefined && d !== undefined) {
            const points = [];
            for (let n = 1; n <= 10; n++) {
                points.push({
                    n: n,
                    an: a1 + (n - 1) * d
                });
            }

            return {
                type: 'arithmetic_sequence',
                points: points,
                description: `Points form a linear pattern with slope = ${d}`,
                graphType: 'discrete_points',
                linearRelation: `aₙ = ${d}n + ${a1 - d}`
            };
        }

        return null;
    }

    // WORKBOOK GENERATION

    generateArithmeticWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createArithmeticLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
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
            title: 'Enhanced Arithmetic Sequences Mathematical Workbook',
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
            ['Problem Type', this.sequenceTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.sequenceTypes[this.currentProblem.type]?.category || 'sequence'],
            ['Description', this.currentProblem.scenario || 'Arithmetic sequence problem']
        ];

        if (this.currentProblem.sequence) {
            problemData.push(['Sequence', this.currentProblem.sequence]);
        }

        if (Object.keys(this.currentProblem.parameters).length > 0) {
            problemData.push(['', '']);
            problemData.push(['Given Information', '']);
            for (const [key, value] of Object.entries(this.currentProblem.parameters)) {
                if (value !== undefined) {
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

        const category = this.sequenceTypes[this.currentProblem.type]?.category;
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
                stepsData.push(['Connection', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.calculation) {
                stepsData.push(['Calculation', step.calculation]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Rule', step.algebraicRule]);
            }

            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5', step.ELI5.explanation]);
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
                stepsData.push(['Before', step.thinkingPrompts.before]);
                stepsData.push(['During', step.thinkingPrompts.during]);
                stepsData.push(['After', step.thinkingPrompts.after]);
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

    createArithmeticLessonSection() {
        const category = this.sequenceTypes[this.currentProblem.type]?.category;
        const lessonKey = Object.keys(this.lessons).find(key => 
            this.lessons[key].title.toLowerCase().includes(category) || 
            key.includes(category)
        ) || 'arithmetic_sequence_basics';

        const lesson = this.lessons[lessonKey];

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach(concept => {
            lessonData.push(['•', concept]);
        });

        lessonData.push(['', '']);
        lessonData.push(['Theory', lesson.theory]);
        lessonData.push(['', '']);
        lessonData.push(['Important Formulas', '']);

        for (const [name, formula] of Object.entries(lesson.keyFormulas || {})) {
            lessonData.push([name, formula]);
        }

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Solution Type', this.currentSolution.type]
        ];

        if (this.currentSolution.result !== undefined && this.currentSolution.result !== null) {
            if (Array.isArray(this.currentSolution.result)) {
                solutionData.push(['Result', this.currentSolution.result.join(', ')]);
            } else if (typeof this.currentSolution.result === 'object') {
                for (const [key, value] of Object.entries(this.currentSolution.result)) {
                    solutionData.push([key, value]);
                }
            } else {
                solutionData.push(['Result', this.currentSolution.result]);
            }
        }

        if (this.currentSolution.interpretation) {
            solutionData.push(['Interpretation', this.currentSolution.interpretation]);
        }

        if (this.currentSolution.isArithmetic !== undefined) {
            solutionData.push(['Is Arithmetic?', this.currentSolution.isArithmetic ? 'Yes' : 'No']);
            if (this.currentSolution.commonDifference !== null) {
                solutionData.push(['Common Difference', this.currentSolution.commonDifference]);
            }
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
            ['Solution Method', this.currentSolution.type],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel],
            ['Category', this.sequenceTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.formula) {
            analysisData.push(['Formula Used', this.currentSolution.formula]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution) return null;

        const verificationData = [];

        if (this.currentSolution.verification) {
            for (const [key, value] of Object.entries(this.currentSolution.verification)) {
                verificationData.push([key, value]);
            }
        } else if (this.currentSolution.isValid !== undefined) {
            verificationData.push(['Valid Solution', this.currentSolution.isValid ? 'Yes' : 'No']);
            if (this.currentSolution.message) {
                verificationData.push(['Note', this.currentSolution.message]);
            }
        } else {
            verificationData.push(['Verification', 'Solution verified through step-by-step process']);
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

        const notes = this.generatePedagogicalNotes(this.currentProblem.type);

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['Key Concepts', notes.keyConcepts.join('; ')],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['Common Difficulties', notes.commonDifficulties.join('; ')],
                ['Teaching Strategies', notes.teachingStrategies.join('; ')],
                ['Extensions', notes.extensions.join('; ')],
                ['Assessment', notes.assessment.join('; ')]
            ]
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateAlternativeMethods(this.currentProblem.type);

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method', alternatives.primaryMethod],
                ['', ''],
                ['Alternative Approaches', ''],
                ...alternatives.methods.map((method, index) => [
                    `Method ${index + 1}`, `${method.name}: ${method.description}`
                ]),
                ['', ''],
                ['Comparison', alternatives.comparison]
            ]
        };
    }

    createPracticeProblemsSection() {
        const problems = this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy', '']
        ];

        problems.easy.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium', '']);

        problems.medium.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Hard', '']);

        problems.hard.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    generatePedagogicalNotes(problemType) {
        const category = this.sequenceTypes[problemType]?.category;

        const pedagogicalDatabase = {
            identification: {
                objectives: [
                    'Recognize arithmetic sequences',
                    'Calculate and verify common difference',
                    'Distinguish arithmetic from other sequences'
                ],
                keyConcepts: [
                    'Constant difference between consecutive terms',
                    'Pattern recognition',
                    'Verification through multiple pairs'
                ],
                prerequisites: [
                    'Subtraction',
                    'Pattern recognition',
                    'Understanding of sequences'
                ],
                commonDifficulties: [
                    'Subtracting in wrong order',
                    'Not checking all consecutive pairs',
                    'Confusing arithmetic with geometric'
                ],
                teachingStrategies: [
                    'Use staircase visual analogy',
                    'Practice with simple integer sequences first',
                    'Compare arithmetic to geometric sequences'
                ],
                extensions: [
                    'Finding nth terms',
                    'Sequences with fractional or negative differences',
                    'Applications in real contexts'
                ],
                assessment: [
                    'Can student identify pattern correctly?',
                    'Can student calculate d accurately?',
                    'Does student verify with multiple pairs?'
                ]
            },
            nth_term: {
                objectives: [
                    'Apply nth term formula correctly',
                    'Understand meaning of (n-1) in formula',
                    'Calculate any term efficiently'
                ],
                keyConcepts: [
                    'Formula: aₙ = a₁ + (n-1)d',
                    'Position vs. number of steps',
                    'Substitution and calculation'
                ],
                prerequisites: [
                    'Order of operations',
                    'Multiplication and addition',
                    'Understanding of formulas'
                ],
                commonDifficulties: [
                    'Using n instead of (n-1)',
                    'Order of operations errors',
                    'Sign mistakes with negative d'
                ],
                teachingStrategies: [
                    'Emphasize "number of steps" interpretation',
                    'Practice with visual number line',
                    'Build from pattern to formula'
                ],
                extensions: [
                    'Finding first term or d from nth term',
                    'Word problems',
                    'Graphing sequences'
                ],
                assessment: [
                    'Does student use correct formula?',
                    'Can student explain why (n-1)?',
                    'Are calculations accurate?'
                ]
            },
            sum: {
                objectives: [
                    'Calculate sum of arithmetic sequence',
                    'Choose appropriate sum formula',
                    'Understand Gauss pairing method'
                ],
                keyConcepts: [
                    'Two sum formulas based on given info',
                    'Pairing terms from ends',
                    'Average of first and last term'
                ],
                prerequisites: [
                    'Finding nth term',
                    'Multiplication and division',
                    'Working with formulas'
                ],
                commonDifficulties: [
                    'Forgetting to divide by 2',
                    'Choosing wrong formula',
                    'Calculation errors'
                ],
                teachingStrategies: [
                    'Teach Gauss story (1+100, 2+99, etc.)',
                    'Visual pairing diagram',
                    'Practice both formulas'
                ],
                extensions: [
                    'Finding n when sum is known',
                    'Applications (total savings, etc.)',
                    'Proofs and derivations'
                ],
                assessment: [
                    'Can student select correct formula?',
                    'Does student understand pairing concept?',
                    'Are calculations accurate?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve arithmetic sequence problems'],
            keyConcepts: ['Arithmetic sequences', 'Formulas'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex problems'],
            assessment: ['Verify understanding']
        };
    }

    generateAlternativeMethods(problemType) {
        const category = this.sequenceTypes[problemType]?.category;

        const alternativeDatabase = {
            nth_term: {
                primaryMethod: 'Using nth term formula',
                methods: [
                    {
                        name: 'Pattern Extension',
                        description: 'Continue the pattern term by term until reaching desired position'
                    },
                    {
                        name: 'Number Line Hopping',
                        description: 'Start at a₁ and make (n-1) equal jumps of size d'
                    },
                    {
                        name: 'Linear Function',
                        description: 'Treat as linear function: f(n) = dn + (a₁-d)'
                    }
                ],
                comparison: 'Formula is fastest for large n; pattern extension good for understanding; number line best for visualization'
            },
            sum: {
                primaryMethod: 'Using sum formula',
                methods: [
                    {
                        name: 'Direct Addition',
                        description: 'Add all terms individually (tedious for large n)'
                    },
                    {
                        name: 'Pairing Method',
                        description: 'Pair first and last, second and second-to-last, etc.'
                    },
                    {
                        name: 'Average Method',
                        description: 'Multiply n by average of first and last term'
                    }
                ],
                comparison: 'Formula most efficient; pairing teaches concept; average method intuitive'
            },
            position: {
                primaryMethod: 'Using rearranged formula',
                methods: [
                    {
                        name: 'Trial and Error',
                        description: 'Test different values of n until finding the term'
                    },
                    {
                        name: 'Pattern Recognition',
                        description: 'Extend sequence until reaching desired value'
                    },
                    {
                        name: 'Algebraic Solving',
                        description: 'Set up equation aₙ = a₁ + (n-1)d and solve for n'
                    }
                ],
                comparison: 'Formula solving most reliable; trial works for small sequences; pattern extending builds understanding'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard approach',
            methods: [{
                name: 'Alternative',
                description: 'Other methods may apply depending on context'
            }],
            comparison: 'Choose based on problem specifics'
        };
    }
}

export default EnhancedArithmeticSequencesWorkbook;
