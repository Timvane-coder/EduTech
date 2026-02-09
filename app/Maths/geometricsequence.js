// Enhanced Geometric Sequences and nth Term Mathematical Workbook
import * as math from 'mathjs';

export class EnhancedGeometricSequencesWorkbook {
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
        this.initializeGeometricSolvers();
        this.initializeGeometricLessons();
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
        this.initializeHistoricalContext();
        this.initializeVisualizationDatabase();
    }

    initializeGeometricLessons() {
        this.lessons = {
            geometric_sequences: {
                title: "Geometric Sequences",
                concepts: [
                    "A sequence where each term is found by multiplying the previous term by a constant (common ratio)",
                    "General form: a, ar, ar², ar³, ..., ar^(n-1)",
                    "Common ratio r = any term ÷ previous term",
                    "If |r| > 1: sequence grows; if |r| < 1: sequence shrinks; if r < 0: terms alternate signs"
                ],
                theory: "Geometric sequences model exponential growth and decay. They appear in compound interest, population growth, radioactive decay, and many natural phenomena.",
                keyFormulas: {
                    "nth term": "aₙ = a₁ · r^(n-1)",
                    "Common ratio": "r = aₙ / aₙ₋₁",
                    "Sum of n terms": "Sₙ = a₁(1 - rⁿ)/(1 - r) when r ≠ 1",
                    "Sum of n terms (alternate)": "Sₙ = a₁(rⁿ - 1)/(r - 1) when r ≠ 1",
                    "Infinite sum (|r| < 1)": "S∞ = a₁/(1 - r)"
                },
                characteristics: [
                    "Multiplicative pattern (not additive)",
                    "Exponential growth or decay",
                    "Ratio between consecutive terms is constant",
                    "Can be increasing, decreasing, or alternating"
                ],
                applications: [
                    "Compound interest calculations",
                    "Population growth models",
                    "Radioactive decay",
                    "Viral spread patterns",
                    "Financial investments",
                    "Fractals and self-similar patterns"
                ]
            },

            nth_term_formula: {
                title: "Finding the nth Term",
                concepts: [
                    "Formula: aₙ = a₁ · r^(n-1)",
                    "a₁ is the first term",
                    "r is the common ratio",
                    "n is the term number (position)",
                    "Can find any term without listing all previous terms"
                ],
                theory: "The nth term formula provides direct access to any term in a geometric sequence using exponentiation.",
                keyFormulas: {
                    "Direct formula": "aₙ = a₁ · r^(n-1)",
                    "Using any term": "aₙ = aₖ · r^(n-k)",
                    "Common ratio from terms": "r = (aₙ/a₁)^(1/(n-1))"
                },
                solvingSteps: [
                    "Identify the first term (a₁)",
                    "Find the common ratio (r)",
                    "Identify which term to find (n)",
                    "Substitute into formula aₙ = a₁ · r^(n-1)",
                    "Calculate the result",
                    "Verify by checking the pattern"
                ],
                applications: [
                    "Predicting future values in growth models",
                    "Computing compound interest at specific times",
                    "Finding population at a given year",
                    "Calculating decay amounts after time periods"
                ]
            },

            finding_first_term: {
                title: "Finding the First Term (a₁)",
                concepts: [
                    "Given: nth term value, common ratio, and position",
                    "Solve backwards using the nth term formula",
                    "Formula rearrangement: a₁ = aₙ / r^(n-1)",
                    "First term determines the scale of the sequence"
                ],
                theory: "Finding the first term involves algebraic manipulation of the nth term formula when other parameters are known.",
                keyFormulas: {
                    "From nth term": "a₁ = aₙ / r^(n-1)",
                    "From two terms": "a₁ = aₖ / r^(k-1)"
                },
                solvingSteps: [
                    "Write the nth term formula: aₙ = a₁ · r^(n-1)",
                    "Substitute known values",
                    "Solve for a₁: divide both sides by r^(n-1)",
                    "Calculate a₁",
                    "Verify by generating sequence"
                ],
                applications: [
                    "Determining initial investment from future value",
                    "Finding original population from current size",
                    "Calculating starting amount in decay problems"
                ]
            },

            finding_common_ratio: {
                title: "Finding the Common Ratio (r)",
                concepts: [
                    "Method 1: Divide any term by the previous term",
                    "Method 2: Use two known terms and their positions",
                    "Formula: r = (aₙ/aₘ)^(1/(n-m)) for any two terms",
                    "Common ratio can be positive, negative, or fractional"
                ],
                theory: "The common ratio is the multiplicative constant that defines the geometric sequence's growth rate.",
                keyFormulas: {
                    "From consecutive terms": "r = aₙ / aₙ₋₁",
                    "From any two terms": "r = (aₙ/aₘ)^(1/(n-m))",
                    "From first and nth term": "r = (aₙ/a₁)^(1/(n-1))"
                },
                solvingSteps: [
                    "Identify two terms and their positions",
                    "Choose appropriate formula",
                    "Substitute values",
                    "Calculate r (may involve roots)",
                    "Verify by checking other terms"
                ],
                applications: [
                    "Determining growth rate from data",
                    "Finding interest rate from investments",
                    "Calculating decay rate from measurements"
                ]
            },

            finding_term_position: {
                title: "Finding Which Term (n)",
                concepts: [
                    "Given: a term value, first term, and common ratio",
                    "Use logarithms to solve for n",
                    "Formula: n = log(aₙ/a₁)/log(r) + 1",
                    "Answer must be a positive integer for valid sequence position"
                ],
                theory: "Finding term position requires solving exponential equations using logarithms.",
                keyFormulas: {
                    "Using logarithms": "n = log(aₙ/a₁)/log(r) + 1",
                    "Alternative form": "log(aₙ/a₁) = (n-1)log(r)"
                },
                solvingSteps: [
                    "Write equation: aₙ = a₁ · r^(n-1)",
                    "Divide both sides by a₁",
                    "Take logarithm of both sides",
                    "Solve for n using log properties",
                    "Check if n is a positive integer"
                ],
                applications: [
                    "Finding when population reaches target",
                    "Determining time to reach investment goal",
                    "Calculating half-life periods"
                ]
            },

            sum_of_terms: {
                title: "Sum of Geometric Sequence",
                concepts: [
                    "Sum of first n terms: Sₙ = a₁(1 - rⁿ)/(1 - r) when r ≠ 1",
                    "Alternative form: Sₙ = a₁(rⁿ - 1)/(r - 1)",
                    "When r = 1, sum is Sₙ = n · a₁",
                    "Infinite sum exists only when |r| < 1: S∞ = a₁/(1 - r)"
                ],
                theory: "Geometric series sums have closed-form expressions derived from the self-similar structure of the sequence.",
                keyFormulas: {
                    "Finite sum (r ≠ 1)": "Sₙ = a₁(1 - rⁿ)/(1 - r)",
                    "Finite sum alternate": "Sₙ = a₁(rⁿ - 1)/(r - 1)",
                    "Infinite sum (|r| < 1)": "S∞ = a₁/(1 - r)",
                    "When r = 1": "Sₙ = n · a₁"
                },
                solvingSteps: [
                    "Identify a₁, r, and n",
                    "Check if r = 1 (special case)",
                    "Choose appropriate formula based on r",
                    "Substitute values",
                    "Calculate sum",
                    "Verify with partial sum if needed"
                ],
                applications: [
                    "Total compound interest over time",
                    "Cumulative population growth",
                    "Present value of annuities",
                    "Total distance in bouncing ball problems"
                ]
            },

            geometric_mean: {
                title: "Geometric Mean",
                concepts: [
                    "Geometric mean of two numbers: √(a·b)",
                    "Geometric mean of n numbers: ⁿ√(a₁·a₂·...·aₙ)",
                    "In a geometric sequence, each term is the geometric mean of its neighbors",
                    "Used to find missing terms in geometric sequences"
                ],
                theory: "The geometric mean represents the central tendency for multiplicative processes, just as arithmetic mean does for additive processes.",
                keyFormulas: {
                    "Two terms": "GM = √(a·b)",
                    "Three terms": "GM = ³√(a·b·c)",
                    "n terms": "GM = ⁿ√(a₁·a₂·...·aₙ)",
                    "In sequence": "aₙ = √(aₙ₋₁ · aₙ₊₁)"
                },
                applications: [
                    "Finding missing terms in sequences",
                    "Average growth rates",
                    "Financial rate of return calculations",
                    "Proportional scaling"
                ]
            },

            exponential_growth: {
                title: "Exponential Growth Models",
                concepts: [
                    "Model: P(t) = P₀ · rᵗ where t is time",
                    "P₀ is initial amount, r is growth factor",
                    "If r > 1: growth; if 0 < r < 1: decay",
                    "Continuous model: P(t) = P₀ · eᵏᵗ"
                ],
                theory: "Exponential growth occurs when the rate of change is proportional to the current amount, creating a geometric progression over equal time intervals.",
                keyFormulas: {
                    "Discrete growth": "P(t) = P₀ · rᵗ",
                    "Continuous growth": "P(t) = P₀ · eᵏᵗ",
                    "Doubling time": "T = log(2)/log(r)",
                    "Half-life": "T₁/₂ = log(0.5)/log(r)"
                },
                applications: [
                    "Population dynamics",
                    "Bacterial growth",
                    "Compound interest",
                    "Viral spread",
                    "Radioactive decay",
                    "Carbon dating"
                ]
            },

            compound_interest: {
                title: "Compound Interest Applications",
                concepts: [
                    "Formula: A = P(1 + r/n)^(nt)",
                    "A = final amount, P = principal",
                    "r = annual rate, n = compounds per year, t = years",
                    "Geometric sequence with ratio (1 + r/n)"
                ],
                theory: "Compound interest creates a geometric sequence where interest earns interest, leading to exponential growth.",
                keyFormulas: {
                    "Compound interest": "A = P(1 + r/n)^(nt)",
                    "Continuous compounding": "A = Pe^(rt)",
                    "Effective rate": "r_eff = (1 + r/n)^n - 1",
                    "Rule of 72": "Doubling time ≈ 72/r (r as percentage)"
                },
                applications: [
                    "Savings accounts",
                    "Investment growth",
                    "Loan calculations",
                    "Retirement planning",
                    "College savings",
                    "Inflation adjustments"
                ]
            },

            recursive_vs_explicit: {
                title: "Recursive vs Explicit Formulas",
                concepts: [
                    "Recursive: aₙ = r · aₙ₋₁ with a₁ given",
                    "Explicit: aₙ = a₁ · r^(n-1)",
                    "Recursive requires previous term",
                    "Explicit allows direct calculation"
                ],
                theory: "Recursive formulas define sequences through repetition; explicit formulas provide closed-form expressions.",
                keyFormulas: {
                    "Recursive": "aₙ = r · aₙ₋₁, a₁ = given",
                    "Explicit": "aₙ = a₁ · r^(n-1)",
                    "Converting": "From recursive, identify r and a₁ to write explicit"
                },
                applications: [
                    "Algorithm design",
                    "Dynamic programming",
                    "Iterative calculations",
                    "Mathematical modeling"
                ]
            },

            identifying_sequences: {
                title: "Identifying Geometric Sequences",
                concepts: [
                    "Check if ratio between consecutive terms is constant",
                    "Calculate r = a₂/a₁, r = a₃/a₂, etc.",
                    "All ratios must be equal for geometric sequence",
                    "Distinguish from arithmetic sequences (constant difference)"
                ],
                theory: "Recognition of geometric patterns is essential for choosing appropriate solution methods.",
                identificationSteps: [
                    "List the first several terms",
                    "Calculate differences between consecutive terms",
                    "Calculate ratios between consecutive terms",
                    "If ratios constant: geometric; if differences constant: arithmetic",
                    "Determine a₁ and r"
                ],
                applications: [
                    "Pattern recognition in data",
                    "Sequence classification",
                    "Model selection for real-world problems"
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
                growthColor: '#28a745',
                decayColor: '#dc3545'
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
                growthColor: '#28a745',
                decayColor: '#dc3545'
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
            'sum': '∑', 'product': '∏', 'integral': '∫',
            // Subscripts
            'sub0': '₀', 'sub1': '₁', 'sub2': '₂', 'sub3': '₃',
            'subn': 'ₙ',
            // Superscripts
            'sup2': '²', 'sup3': '³', 'supn': 'ⁿ'
        };
    }

    initializeGeometricSolvers() {
        this.geometricTypes = {
            find_nth_term: {
                patterns: [
                    /find.*(\d+)(st|nd|rd|th).*term/i,
                    /a_?(\d+)/i,
                    /nth.*term/i,
                    /term.*number.*(\d+)/i
                ],
                solver: this.solveNthTerm.bind(this),
                name: 'Find nth Term',
                category: 'nth_term',
                description: 'Find the value of a specific term in a geometric sequence'
            },

            find_first_term: {
                patterns: [
                    /find.*first.*term/i,
                    /find.*a_?1/i,
                    /initial.*term/i,
                    /starting.*value/i
                ],
                solver: this.solveFirstTerm.bind(this),
                name: 'Find First Term',
                category: 'first_term',
                description: 'Find the first term given other information'
            },

            find_common_ratio: {
                patterns: [
                    /find.*common.*ratio/i,
                    /find.*r/i,
                    /ratio/i,
                    /growth.*rate/i,
                    /multiplication.*factor/i
                ],
                solver: this.solveCommonRatio.bind(this),
                name: 'Find Common Ratio',
                category: 'common_ratio',
                description: 'Find the common ratio of a geometric sequence'
            },

            find_term_position: {
                patterns: [
                    /which.*term/i,
                    /find.*position/i,
                    /find.*n/i,
                    /term.*number/i,
                    /what.*term.*equals/i
                ],
                solver: this.solveTermPosition.bind(this),
                name: 'Find Term Position',
                category: 'term_position',
                description: 'Find which term has a given value'
            },

            sum_n_terms: {
                patterns: [
                    /sum.*first.*(\d+)/i,
                    /sum.*n.*terms/i,
                    /total.*(\d+).*terms/i,
                    /S_?(\d+)/i
                ],
                solver: this.solveSumNTerms.bind(this),
                name: 'Sum of n Terms',
                category: 'sum',
                description: 'Find the sum of the first n terms'
            },

            infinite_sum: {
                patterns: [
                    /infinite.*sum/i,
                    /sum.*infinity/i,
                    /converge/i,
                    /S_?infinity/i
                ],
                solver: this.solveInfiniteSum.bind(this),
                name: 'Infinite Sum',
                category: 'infinite_sum',
                description: 'Find the sum of an infinite geometric series'
            },

            identify_sequence: {
                patterns: [
                    /is.*geometric/i,
                    /identify.*sequence/i,
                    /check.*geometric/i,
                    /verify.*geometric/i
                ],
                solver: this.solveIdentifySequence.bind(this),
                name: 'Identify Geometric Sequence',
                category: 'identify',
                description: 'Determine if a sequence is geometric'
            },

            geometric_mean: {
                patterns: [
                    /geometric.*mean/i,
                    /mean.*between/i,
                    /insert.*term/i
                ],
                solver: this.solveGeometricMean.bind(this),
                name: 'Geometric Mean',
                category: 'geometric_mean',
                description: 'Find geometric mean or insert terms'
            },

            compound_interest: {
                patterns: [
                    /compound.*interest/i,
                    /investment/i,
                    /savings/i,
                    /principal/i
                ],
                solver: this.solveCompoundInterest.bind(this),
                name: 'Compound Interest',
                category: 'applications',
                description: 'Solve compound interest problems'
            },

            population_growth: {
                patterns: [
                    /population/i,
                    /growth.*rate/i,
                    /bacteria/i,
                    /exponential.*growth/i
                ],
                solver: this.solvePopulationGrowth.bind(this),
                name: 'Population Growth',
                category: 'applications',
                description: 'Solve population/growth problems'
            },

            decay_problems: {
                patterns: [
                    /decay/i,
                    /half.*life/i,
                    /radioactive/i,
                    /depreciation/i
                ],
                solver: this.solveDecayProblem.bind(this),
                name: 'Decay Problems',
                category: 'applications',
                description: 'Solve exponential decay problems'
            },

            recursive_to_explicit: {
                patterns: [
                    /recursive/i,
                    /explicit/i,
                    /convert/i
                ],
                solver: this.solveRecursiveToExplicit.bind(this),
                name: 'Convert Recursive to Explicit',
                category: 'conversion',
                description: 'Convert between recursive and explicit formulas'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            nth_term: {
                'Calculate r^(n-1)': [
                    'Using r^n instead of r^(n-1)',
                    'Forgetting exponent entirely',
                    'Calculating (r·n) instead of r^n',
                    'Sign errors with negative ratios'
                ],
                'Multiply by first term': [
                    'Forgetting to multiply by a₁',
                    'Adding instead of multiplying',
                    'Using wrong term as a₁'
                ]
            },
            common_ratio: {
                'Divide consecutive terms': [
                    'Dividing in wrong order (aₙ₋₁/aₙ instead of aₙ/aₙ₋₁)',
                    'Subtracting instead of dividing',
                    'Using non-consecutive terms',
                    'Not checking if ratio is consistent'
                ],
                'Use root formula': [
                    'Wrong root index',
                    'Forgetting to account for term positions',
                    'Sign errors with negative ratios'
                ]
            },
            sum: {
                'Apply sum formula': [
                    'Using wrong formula (1-r^n vs r^n-1)',
                    'Dividing by (1+r) instead of (1-r)',
                    'Forgetting to check if r=1',
                    'Sign errors in numerator'
                ],
                'Check convergence': [
                    'Not verifying |r| < 1 for infinite sum',
                    'Applying infinite sum formula when |r| ≥ 1',
                    'Confusing conditions for convergence'
                ]
            },
            term_position: {
                'Use logarithms': [
                    'Forgetting to use logarithms',
                    'Using wrong logarithm base',
                    'Not adding 1 at the end',
                    'Sign errors when r < 1'
                ],
                'Solve for n': [
                    'Arithmetic errors in logarithm calculations',
                    'Not checking if n is a positive integer',
                    'Rounding errors'
                ]
            }
        };

        this.errorPrevention = {
            exponent_errors: {
                reminder: 'Remember: nth term uses r^(n-1), not r^n',
                method: 'Count the number of multiplications from a₁ to aₙ'
            },
            ratio_direction: {
                reminder: 'Always divide later term by earlier term',
                method: 'r = a₂/a₁ = a₃/a₂ = ... = aₙ/aₙ₋₁'
            },
            sum_formula_choice: {
                reminder: 'Check if r > 1 or r < 1 to choose numerator form',
                method: 'Use (1-r^n) when r < 1; use (r^n-1) when r > 1 for cleaner arithmetic'
            },
            negative_ratios: {
                reminder: 'Negative ratios cause alternating signs',
                method: 'Track signs carefully; even powers make positive, odd powers keep negative'
            },
            logarithm_usage: {
                reminder: 'Logarithms are needed when solving for exponents',
                method: 'If variable is in exponent, take log of both sides'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why geometric sequences work and their mathematical meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact steps to calculate terms, ratios, and sums',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical representation of exponential patterns',
                language: 'visual and spatial metaphors'
            },
            algebraic: {
                focus: 'Formal algebraic manipulation and exponent rules',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete numbers and simple ratios'
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
                detail: 'comprehensive explanations with derivations',
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
            compound_interest: {
                scenario: "Money growing with compound interest",
                formula: "A = P(1 + r/n)^(nt)",
                examples: [
                    "Invest $1000 at 5% annual interest compounded yearly. How much after 10 years?",
                    "You have $5000 in savings at 3% compounded monthly. What's the balance after 5 years?"
                ],
                context: "Understanding compound interest is essential for financial planning and wealth building",
                realWorldConnection: "Every savings account, investment, and loan uses compound interest"
            },
            population_growth: {
                scenario: "Population doubling at regular intervals",
                formula: "P(t) = P₀ · 2^t or P(t) = P₀ · r^t",
                examples: [
                    "A bacteria colony doubles every hour. Starting with 100, how many after 8 hours?",
                    "A city's population grows 2% per year. With 50,000 now, what in 20 years?"
                ],
                context: "Population models help predict resource needs and plan for growth",
                realWorldConnection: "Used in epidemiology, urban planning, and ecology"
            },
            radioactive_decay: {
                scenario: "Substance decaying with constant half-life",
                formula: "N(t) = N₀ · (1/2)^(t/T₁/₂)",
                examples: [
                    "Carbon-14 has half-life 5,730 years. After 17,190 years, what fraction remains?",
                    "A medicine has half-life of 6 hours. Starting with 200mg, how much after 24 hours?"
                ],
                context: "Radioactive decay enables carbon dating and medical treatments",
                realWorldConnection: "Used in archaeology, nuclear medicine, and geology"
            },
            viral_spread: {
                scenario: "Infection spreading exponentially",
                formula: "I(t) = I₀ · R₀^t",
                examples: [
                    "Each infected person infects 3 others per day. Starting with 10, how many after 5 days?",
                    "A social media post is shared by 2 people each generation. After 10 generations?"
                ],
                context: "Understanding viral spread helps control epidemics and predict social media reach",
                realWorldConnection: "Critical for public health and digital marketing"
            },
            depreciation: {
                scenario: "Asset value decreasing over time",
                formula: "V(t) = V₀ · (1 - r)^t",
                examples: [
                    "Car depreciates 15% per year. Bought for $25,000, value after 5 years?",
                    "Equipment loses 20% value annually. Starting at $10,000, worth after 3 years?"
                ],
                context: "Depreciation affects taxes, insurance, and resale values",
                realWorldConnection: "Important for business accounting and personal finance"
            },
            bouncing_ball: {
                scenario: "Ball bouncing to fraction of previous height",
                formula: "hₙ = h₀ · r^n",
                examples: [
                    "Ball dropped from 10m bounces to 60% of previous height. Height after 5 bounces?",
                    "Basketball rebounds to 3/4 previous height. Dropped from 2m, total distance traveled?"
                ],
                context: "Models energy loss in physical systems",
                realWorldConnection: "Demonstrates conservation of energy and damping"
            },
            cell_division: {
                scenario: "Cells dividing at regular intervals",
                formula: "N(t) = N₀ · 2^(t/T)",
                examples: [
                    "Cell divides every 30 minutes. Starting with 1 cell, how many after 4 hours?",
                    "Yeast population doubles every 2 hours. Starting with 1000, how many after 12 hours?"
                ],
                context: "Cell division follows geometric progression in ideal conditions",
                realWorldConnection: "Fundamental to biology, medicine, and biotechnology"
            },
            fractal_patterns: {
                scenario: "Self-similar patterns at different scales",
                formula: "Fractals often use geometric sequences for scaling",
                examples: [
                    "Sierpinski triangle: each iteration has 3 times as many triangles as previous",
                    "Koch snowflake: perimeter increases by 4/3 each iteration"
                ],
                context: "Fractals demonstrate infinite complexity through geometric repetition",
                realWorldConnection: "Found in nature (coastlines, trees, blood vessels) and computer graphics"
            },
            chain_letters: {
                scenario: "Messages spreading geometrically",
                formula: "Recipients = r^n where r is copies per person",
                examples: [
                    "Chain letter says send to 5 friends. Each does so. How many at level 6?",
                    "Pyramid scheme: recruit 3 people who each recruit 3. How many at level 8?"
                ],
                context: "Shows rapid growth and why such schemes are unsustainable",
                realWorldConnection: "Important for understanding scams and viral marketing"
            },
            cooling_heating: {
                scenario: "Temperature approaching ambient exponentially",
                formula: "T(t) = T_ambient + (T₀ - T_ambient) · r^t",
                examples: [
                    "Hot coffee cools by 10% per minute. At 90°C in 20°C room, temp after 10 min?",
                    "Object warms to 80% difference each minute. Starting at 0°C in 25°C room, temp after 5 min?"
                ],
                context: "Newton's Law of Cooling models heat transfer",
                realWorldConnection: "Used in forensics, cooking, and climate control"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            nth_term: {
                skills: ['Exponents', 'Multiplication', 'Pattern recognition'],
                priorKnowledge: [
                    'Exponent rules',
                    'Order of operations',
                    'Identifying patterns in sequences'
                ],
                checkQuestions: [
                    "What is 2^5?",
                    "Calculate 3 × 4^3",
                    "If a sequence is 2, 6, 18, 54, what's the pattern?"
                ]
            },
            common_ratio: {
                skills: ['Division', 'Pattern recognition', 'Roots'],
                priorKnowledge: [
                    'Dividing fractions and decimals',
                    'Recognizing multiplicative patterns',
                    'Square roots and nth roots'
                ],
                checkQuestions: [
                    "What is 24 ÷ 8?",
                    "Find the square root of 16",
                    "If consecutive terms are 5 and 15, what's the ratio?"
                ]
            },
            sum: {
                skills: ['Exponents', 'Fractions', 'Formulas'],
                priorKnowledge: [
                    'Calculating with exponents',
                    'Working with complex fractions',
                    'Substituting into formulas'
                ],
                checkQuestions: [
                    "Calculate (1 - 2^4)/(1 - 2)",
                    "Simplify (3^5 - 1)/(3 - 1)",
                    "Can you substitute values into a formula?"
                ]
            },
            term_position: {
                skills: ['Logarithms', 'Exponents', 'Equations'],
                priorKnowledge: [
                    'Understanding logarithms',
                    'Solving exponential equations',
                    'Using calculator for logs'
                ],
                checkQuestions: [
                    "What is log₂(8)?",
                    "Solve: 2^x = 16",
                    "Find log(100) using calculator"
                ]
            },
            infinite_sum: {
                skills: ['Limits', 'Absolute value', 'Convergence'],
                priorKnowledge: [
                    'Concept of limits',
                    'Absolute value inequalities',
                    'Understanding convergence'
                ],
                checkQuestions: [
                    "Is |0.5| < 1?",
                    "What happens to (1/2)^n as n gets very large?",
                    "Does 1 + 1/2 + 1/4 + 1/8 + ... have a finite sum?"
                ]
            },
            compound_interest: {
                skills: ['Exponents', 'Formulas', 'Percentages'],
                priorKnowledge: [
                    'Converting percentages to decimals',
                    'Understanding interest',
                    'Working with time periods'
                ],
                checkQuestions: [
                    "Convert 5% to decimal",
                    "What is 1.05^3?",
                    "If interest compounds quarterly, how many times per year?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            exponential_graph: {
                description: "Graph showing exponential curve",
                analogy: "Like a hockey stick - slow start then rapid rise (or fall)",
                visualization: "Plot points on coordinate plane showing exponential pattern",
                suitableFor: ['nth_term', 'applications'],
                explanation: "Geometric sequences create exponential curves when graphed"
            },
            doubling_pattern: {
                description: "Each term is multiple of previous",
                analogy: "Like folding paper - thickness doubles each fold",
                visualization: "Draw arrows showing multiplication between terms",
                suitableFor: ['all_geometric'],
                explanation: "Constant multiplication creates rapid growth or decay"
            },
            branching_tree: {
                description: "Tree diagram showing multiplicative growth",
                analogy: "Like a family tree where each person has r children",
                visualization: "Draw branching structure with r branches at each level",
                suitableFor: ['population', 'viral_spread'],
                explanation: "Shows how one source creates multiple next-generation sources"
            },
            ratio_table: {
                description: "Table showing terms and their ratios",
                analogy: "Like a recipe where ingredients always scale by same factor",
                visualization: "Tabulate aₙ, aₙ₊₁, and ratio aₙ₊₁/aₙ",
                suitableFor: ['identifying', 'common_ratio'],
                explanation: "Constant ratios identify geometric sequences"
            },
            timeline: {
                description: "Number line showing term values over time",
                analogy: "Like milestones on a road showing increasing distances",
                visualization: "Mark term values on timeline showing exponential spacing",
                suitableFor: ['applications'],
                explanation: "Time-based view of geometric progression"
            },
            area_model: {
                description: "Geometric shapes showing area growth",
                analogy: "Like squares doubling in size at each step",
                visualization: "Draw shapes with areas in geometric sequence",
                suitableFor: ['geometric_mean', 'visual_learners'],
                explanation: "Geometric sequences can represent scaling of geometric figures"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Find the 5th term: a₁ = 3, r = 2",
                    solution: 48,
                    steps: ["Use formula aₙ = a₁ · r^(n-1)", "a₅ = 3 · 2^(5-1)", "a₅ = 3 · 2^4", "a₅ = 3 · 16", "a₅ = 48"],
                    difficulty: "easy"
                },
                {
                    problem: "Find common ratio: 5, 15, 45, 135",
                    solution: 3,
                    steps: ["Divide second by first", "r = 15/5 = 3", "Verify: 45/15 = 3 ✓", "r = 3"],
                    difficulty: "easy"
                },
                {
                    problem: "Find first term if a₄ = 54 and r = 3",
                    solution: 2,
                    steps: ["Use formula aₙ = a₁ · r^(n-1)", "54 = a₁ · 3^(4-1)", "54 = a₁ · 3^3", "54 = a₁ · 27", "a₁ = 54/27 = 2"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Find sum of first 6 terms: a₁ = 2, r = 3",
                    solution: 728,
                    steps: ["Use Sₙ = a₁(r^n - 1)/(r - 1)", "S₆ = 2(3^6 - 1)/(3 - 1)", "S₆ = 2(729 - 1)/2", "S₆ = 2(728)/2", "S₆ = 728"],
                    difficulty: "medium"
                },
                {
                    problem: "Which term is 2187 if a₁ = 3, r = 3?",
                    solution: 7,
                    steps: ["Use aₙ = a₁ · r^(n-1)", "2187 = 3 · 3^(n-1)", "729 = 3^(n-1)", "3^6 = 3^(n-1)", "n-1 = 6", "n = 7"],
                    difficulty: "medium"
                },
                {
                    problem: "Find infinite sum: a₁ = 8, r = 1/2",
                    solution: 16,
                    steps: ["Check |r| < 1: |1/2| < 1 ✓", "Use S∞ = a₁/(1-r)", "S∞ = 8/(1-1/2)", "S∞ = 8/(1/2)", "S∞ = 16"],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Find r if a₁ = 5 and a₇ = 320",
                    solution: 2,
                    steps: ["Use aₙ = a₁ · r^(n-1)", "320 = 5 · r^6", "64 = r^6", "r = ⁶√64", "r = 2"],
                    difficulty: "hard"
                },
                {
                    problem: "Insert 3 geometric means between 2 and 162",
                    solution: "6, 18, 54",
                    steps: ["Sequence: 2, ?, ?, ?, 162 (5 terms)", "Use a₅ = a₁ · r^4", "162 = 2 · r^4", "81 = r^4", "r = 3", "Terms: 2, 6, 18, 54, 162"],
                    difficulty: "hard"
                },
                {
                    problem: "Sum of infinite series: 12 + 4 + 4/3 + ...",
                    solution: 18,
                    steps: ["Find r = 4/12 = 1/3", "Check |1/3| < 1 ✓", "S∞ = a₁/(1-r)", "S∞ = 12/(1-1/3)", "S∞ = 12/(2/3) = 18"],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                nth_term: [
                    { problem: "a₁=2, r=5, find a₆", solution: 6250 },
                    { problem: "a₁=100, r=0.1, find a₄", solution: 0.1 },
                    { problem: "a₁=-3, r=-2, find a₅", solution: -48 }
                ],
                common_ratio: [
                    { problem: "Find r: 7, 21, 63", solution: 3 },
                    { problem: "Find r: 80, 20, 5", solution: 0.25 },
                    { problem: "Find r: -4, 8, -16", solution: -2 }
                ],
                sum: [
                    { problem: "Sum first 5 terms: a₁=1, r=2", solution: 31 },
                    { problem: "Sum first 4 terms: a₁=3, r=3", solution: 120 },
                    { problem: "Infinite sum: a₁=10, r=0.5", solution: 20 }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            exponent_off_by_one: {
                misconception: "Using r^n instead of r^(n-1) in nth term formula",
                reality: "The exponent is (n-1) because we start counting from the first term",
                correctiveExample: "For 5th term: multiply first term by r four times, not five",
                commonIn: ['nth_term'],
                explanation: "From a₁ to a₅: a₁ → a₂ (×r once) → a₃ (×r twice) → a₄ (×r 3 times) → a₅ (×r 4 times)"
            },
            arithmetic_vs_geometric: {
                misconception: "Adding the common ratio instead of multiplying",
                reality: "Geometric sequences use multiplication, not addition",
                correctiveExample: "2, 6, 18 has ratio 3 (×3 each time), not difference 4",
                commonIn: ['all_geometric'],
                explanation: "Arithmetic: constant difference. Geometric: constant ratio (multiplication)"
            },
            ratio_direction: {
                misconception: "Calculating r = aₙ₋₁/aₙ instead of r = aₙ/aₙ₋₁",
                reality: "Common ratio is later term divided by earlier term",
                correctiveExample: "For 3, 9, 27: r = 9/3 = 3, not 3/9 = 1/3",
                commonIn: ['common_ratio'],
                explanation: "Think: 'What do I multiply by to get the next term?'"
            },
            sum_formula_confusion: {
                misconception: "Using (1+r^n) or wrong signs in sum formula",
                reality: "Formula is (1-r^n)/(1-r) or (r^n-1)/(r-1)",
                correctiveExample: "For sum, numerator is difference, denominator is (1-r) or (r-1)",
                commonIn: ['sum'],
                explanation: "Derive from: S = a + ar + ar² + ... + ar^(n-1), then rS = ar + ar² + ... + ar^n, subtract"
            },
            infinite_sum_convergence: {
                misconception: "Thinking infinite sum exists for any geometric sequence",
                reality: "Infinite sum converges only when |r| < 1",
                correctiveExample: "Sum of 1+2+4+8+... is infinite (r=2>1), but 1+1/2+1/4+1/8+... = 2 (r=1/2<1)",
                commonIn: ['infinite_sum'],
                explanation: "When |r| ≥ 1, terms don't approach zero, so sum grows without bound"
            },
            negative_ratio_signs: {
                misconception: "Getting confused by alternating signs with negative ratio",
                reality: "Negative r causes signs to alternate; even powers positive, odd negative",
                correctiveExample: "a₁=2, r=-3: a₂=-6, a₃=18, a₄=-54 (signs alternate)",
                commonIn: ['nth_term', 'all_geometric'],
                explanation: "(-3)^1=-3, (-3)^2=9, (-3)^3=-27, etc. Sign depends on exponent parity"
            },
            geometric_mean_confusion: {
                misconception: "Using arithmetic mean (a+b)/2 instead of geometric mean √(ab)",
                reality: "Geometric mean between a and b is √(ab), not (a+b)/2",
                correctiveExample: "GM of 4 and 16 is √(4×16)=√64=8, not (4+16)/2=10",
                commonIn: ['geometric_mean'],
                explanation: "In geometric sequence, middle term is geometric mean: 4, 8, 16 has 8=√(4×16)"
            },
            logarithm_avoidance: {
                misconception: "Trying to solve for n without logarithms",
                reality: "Finding term position requires logarithms to solve exponential equations",
                correctiveExample: "To solve 3^(n-1) = 81, need log: n-1 = log(81)/log(3) = 4, so n = 5",
                commonIn: ['term_position'],
                explanation: "Logarithms are the inverse of exponents; needed when exponent is unknown"
            },
            compound_interest_confusion: {
                misconception: "Confusing simple and compound interest formulas",
                reality: "Simple: A=P(1+rt). Compound: A=P(1+r/n)^(nt)",
                correctiveExample: "$100 at 10% for 2 years: Simple=$120, Compound=$121 (interest on interest)",
                commonIn: ['compound_interest'],
                explanation: "Compound interest creates geometric sequence; each period's interest earns interest"
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            geometric_sequence: {
                analogy: "Chain reaction or snowball effect",
                explanation: "Each step multiplies the previous, like a snowball rolling down a hill getting bigger and bigger at an increasing rate",
                suitableFor: ['all_geometric'],
                ELI5: "Imagine making copies of copies. You copy a paper (now 2), copy both papers (now 4), copy all 4 (now 8). Each time you multiply what you have!"
            },
            common_ratio: {
                analogy: "Zoom factor on a camera",
                explanation: "Just like zooming in by 2x each time (2x, 4x, 8x, 16x), geometric sequences multiply by same factor",
                suitableFor: ['common_ratio'],
                ELI5: "It's like a magic multiplying machine. You put in a number, and it always multiplies by the same magic number!"
            },
            nth_term: {
                analogy: "Jumping levels in a video game",
                explanation: "Each level is r times harder than previous, so level n is (starting difficulty) × r^(n-1)",
                suitableFor: ['nth_term'],
                ELI5: "If a game gets 3 times harder each level, and level 1 has 2 enemies, level 5 has 2 × 3 × 3 × 3 × 3 = 162 enemies!"
            },
            exponential_growth: {
                analogy: "Bacteria multiplying or virus spreading",
                explanation: "Each bacteria splits into two, so population doubles each generation: 1→2→4→8→16",
                suitableFor: ['applications', 'population'],
                ELI5: "Imagine bunnies where each bunny has 2 baby bunnies. You start with 1, then have 2, then 4, then 8, then 16 bunnies!"
            },
            exponential_decay: {
                analogy: "Eating half a cookie each time",
                explanation: "If you eat half your cookie each bite, you have 1→1/2→1/4→1/8... but never quite finish",
                suitableFor: ['decay', 'infinite_sum'],
                ELI5: "You have a pizza. First you eat half. Then you eat half of what's left. Then half again. You keep eating but there's always a tiny bit left!"
            },
            infinite_sum: {
                analogy: "Walking halfway to a wall repeatedly",
                explanation: "Walk halfway to wall, then half remaining, then half again. You approach the wall but never pass it",
                suitableFor: ['infinite_sum', 'convergence'],
                ELI5: "You're 10 steps from your friend. You walk 5 steps (halfway). Then 2.5 more steps (halfway of 5). Then 1.25 steps. You get really close but the sum of all steps is exactly 10!"
            },
            compound_interest: {
                analogy: "Money having babies that have babies",
                explanation: "Your money earns interest, then that interest earns interest, and so on",
                suitableFor: ['compound_interest'],
                ELI5: "You have $100. It grows to $110. Now all $110 grows, so next you have $121. It's like your money is making baby money that also grows!"
            },
            geometric_mean: {
                analogy: "Finding the middle step on a staircase",
                explanation: "If stairs go from height a to height b in geometric steps, middle step is √(ab)",
                suitableFor: ['geometric_mean'],
                ELI5: "If you have toys of size 4 and size 16, the in-between size is √(4×16) = 8. It's right in the middle when multiplying!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            nth_term: {
                level1: "What formula connects a₁, r, and n to find aₙ?",
                level2: "The formula is aₙ = a₁ · r^(n-1). Do you have all these values?",
                level3: "Substitute your values into aₙ = a₁ · r^(n-1) and calculate",
                level4: "Calculate r^(n-1) first, then multiply by a₁"
            },
            common_ratio: {
                level1: "How are consecutive terms related in a geometric sequence?",
                level2: "Divide any term by the previous term to find r",
                level3: "Calculate a₂/a₁ or a₃/a₂ or any aₙ/aₙ₋₁",
                level4: "r = {later term}/{earlier term} = {value}"
            },
            first_term: {
                level1: "Which formula involves a₁?",
                level2: "Start with aₙ = a₁ · r^(n-1) and solve for a₁",
                level3: "Divide both sides by r^(n-1) to isolate a₁",
                level4: "a₁ = aₙ / r^(n-1) = {value}"
            },
            sum: {
                level1: "Is this asking for finite sum (n terms) or infinite sum?",
                level2: "For finite: use Sₙ = a₁(r^n - 1)/(r - 1). For infinite: need |r| < 1",
                level3: "Substitute values into the appropriate formula",
                level4: "Calculate r^n, then complete the formula calculation"
            },
            term_position: {
                level1: "This requires solving for n in an exponential equation",
                level2: "Use aₙ = a₁ · r^(n-1), then take logarithms",
                level3: "Solve: log(aₙ/a₁) = (n-1)log(r)",
                level4: "n = log(aₙ/a₁)/log(r) + 1"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Is 2, 6, 18, 54 a geometric sequence?",
                    answer: "Yes, r = 3",
                    assesses: "identifying_sequences",
                    difficulty: "basic"
                },
                {
                    question: "Find the 6th term if a₁ = 5, r = 2",
                    answer: 160,
                    assesses: "nth_term",
                    difficulty: "basic"
                },
                {
                    question: "Find the common ratio: 3, 12, 48",
                    answer: 4,
                    assesses: "common_ratio",
                    difficulty: "basic"
                },
                {
                    question: "Sum of first 4 terms: a₁ = 2, r = 3",
                    answer: 80,
                    assesses: "sum",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "In the formula aₙ = a₁ · r^(n-1), what does r represent?",
                    options: ["First term", "Common ratio", "Term number", "Sum"],
                    correct: "Common ratio",
                    explanation: "r is the constant multiplicative factor between consecutive terms"
                },
                {
                    question: "To find which term equals a certain value, you need to:",
                    options: ["Use logarithms", "Use square roots", "Multiply", "Add"],
                    correct: "Use logarithms",
                    explanation: "Solving for n in an exponential equation requires logarithms"
                },
                {
                    question: "An infinite geometric sum converges when:",
                    options: ["|r| < 1", "|r| > 1", "r = 1", "r < 0"],
                    correct: "|r| < 1",
                    explanation: "Terms must approach zero, which happens when |r| < 1"
                },
                {
                    question: "If a geometric sequence has negative ratio, the terms:",
                    options: ["All increase", "All decrease", "Alternate signs", "Stay same"],
                    correct: "Alternate signs",
                    explanation: "Negative ratio causes positive and negative terms to alternate"
                }
            ],
            summative: [
                {
                    question: "A bacteria population triples every hour. Starting with 50, how many after 5 hours?",
                    answer: 12150,
                    showsWork: true,
                    rubric: {
                        identify_geometric: 1,
                        identify_values: 1,
                        apply_formula: 2,
                        calculate: 1
                    }
                },
                {
                    question: "Find the infinite sum: 12 + 6 + 3 + 1.5 + ...",
                    answer: 24,
                    showsWork: true,
                    rubric: {
                        find_ratio: 1,
                        check_convergence: 1,
                        apply_infinite_formula: 2,
                        calculate: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Find a₄ if a₁=2, r=5",
                    "Find r: 7, 21, 63",
                    "Is 1, 4, 16, 64 geometric?",
                    "Find a₁ if a₃=20, r=2"
                ],
                medium: [
                    "Find sum of first 5 terms: a₁=3, r=2",
                    "Which term is 6561 if a₁=3, r=3?",
                    "Insert 2 geometric means between 5 and 135",
                    "Find infinite sum: a₁=18, r=1/3"
                ],
                hard: [
                    "Find r if a₁=4 and a₆=128",
                    "Sum: 8 + 4 + 2 + 1 + ... to infinity",
                    "$1000 at 6% compounded quarterly for 10 years",
                    "Population doubles every 15 years. When will 50,000 become 400,000?"
                ]
            },
            byObjective: {
                canFindNthTerm: [
                    "a₁=7, r=2, find a₆",
                    "a₁=100, r=0.5, find a₅",
                    "a₁=-3, r=-2, find a₇"
                ],
                canFindCommonRatio: [
                    "Find r: 5, 15, 45",
                    "Find r: 64, 16, 4",
                    "Find r if a₁=2, a₅=162"
                ],
                canFindSum: [
                    "Sum first 6 terms: a₁=1, r=3",
                    "Sum first 5 terms: a₁=5, r=2",
                    "Infinite sum: a₁=20, r=0.25"
                ],
                canSolveApplications: [
                    "Bacteria doubles every 20 min. Start: 100. Count after 2 hours?",
                    "$5000 at 4% annual compound for 8 years?",
                    "Depreciation 20%/year. $15,000 car value after 5 years?"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "finding_term_value": "Use aₙ = a₁ · r^(n-1)",
                "finding_first_term": "Rearrange nth term formula: a₁ = aₙ/r^(n-1)",
                "finding_common_ratio_consecutive": "Divide: r = aₙ/aₙ₋₁",
                "finding_common_ratio_non_consecutive": "Use r = (aₙ/aₘ)^(1/(n-m))",
                "finding_term_position": "Use logarithms: n = log(aₙ/a₁)/log(r) + 1",
                "finding_finite_sum": "Use Sₙ = a₁(r^n - 1)/(r - 1)",
                "finding_infinite_sum": "Check |r| < 1, then S∞ = a₁/(1 - r)",
                "identifying_sequence": "Calculate ratios; if constant, it's geometric"
            },
            whenToUseWhat: {
                direct_formula: "When you need a specific term and have a₁ and r",
                sum_formula: "When finding total of first n terms or infinite sum",
                logarithms: "When solving for term position (n is unknown)",
                root_extraction: "When finding r from non-consecutive terms",
                convergence_test: "Before finding infinite sum, verify |r| < 1"
            },
            methodSelection: {
                factorsToConsider: [
                    "What is given (a₁, r, n, aₙ, sum)?",
                    "What is being asked for?",
                    "Are terms consecutive or not?",
                    "Is this finite or infinite?",
                    "Is |r| greater or less than 1?"
                ],
                generalApproach: [
                    "1. Identify what type of geometric problem",
                    "2. Write down known values",
                    "3. Select appropriate formula",
                    "4. Substitute and solve",
                    "5. Check reasonableness",
                    "6. Verify if possible"
                ]
            },
            optimizationTips: {
                "Check for patterns": "Sometimes pattern is easier to see than calculate",
                "Verify ratio consistency": "Always check r is same between multiple pairs",
                "Use calculator for large exponents": "Don't calculate 2^20 by hand",
                "Watch for alternating signs": "Negative r needs careful sign tracking",
                "Simplify before calculating": "Cancel common factors in fractions first"
            },
            problemSolvingApproaches: {
                "Working backwards": "If you know a later term, work back to a₁",
                "Pattern recognition": "List several terms to see the pattern clearly",
                "Guess and check": "For simple integer problems, sometimes quickest",
                "Algebraic approach": "Use formulas and solve equations",
                "Graphical verification": "Plot terms to verify exponential pattern"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Geometric Sequence Sprint",
                    timeLimit: 90,
                    problems: [
                        "Find a₅ if a₁=2, r=3",
                        "Find r: 4, 12, 36",
                        "Sum first 4 terms: a₁=1, r=2",
                        "Is 2, 4, 8, 16 geometric?",
                        "Find a₁ if a₄=27, r=3",
                        "Infinite sum: a₁=6, r=0.5",
                        "Find a₆ if a₁=5, r=2",
                        "Common ratio: 100, 10, 1"
                    ]
                },
                {
                    name: "Ratio Recognition Rush",
                    timeLimit: 60,
                    problems: [
                        "Find r: 3, 9, 27",
                        "Find r: 80, 40, 20",
                        "Find r: 5, -10, 20",
                        "Find r: 1, 0.1, 0.01",
                        "Find r: 2, 6, 18"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Missing Ratio Mystery",
                    problem: "A geometric sequence has a₁ = 4 and a₅ = 324. Find a₃.",
                    hint: "First find r, then calculate a₃",
                    solution: "r = (324/4)^(1/4) = 3^(1/1) = 3, so a₃ = 4 × 3² = 36"
                },
                {
                    name: "Three-Term Teaser",
                    problem: "Three terms are in geometric sequence: x, 12, y. If x + y = 36, find x and y.",
                    hint: "Use geometric mean: 12² = xy",
                    solution: "12² = xy so xy = 144. With x + y = 36, solve system: x = 4, y = 32 or x = 32, y = 4"
                },
                {
                    name: "Infinite Puzzle",
                    problem: "Infinite sum of geometric sequence is 20, first term is 8. Find r.",
                    hint: "Use S∞ = a₁/(1-r)",
                    solution: "20 = 8/(1-r), so 20(1-r) = 8, 20 - 20r = 8, -20r = -12, r = 3/5"
                },
                {
                    name: "Doubling Dilemma",
                    problem: "In how many steps does a₁ = 3 with r = 2 exceed 10,000?",
                    hint: "Need 3 × 2^(n-1) > 10,000",
                    solution: "2^(n-1) > 10,000/3, (n-1)log(2) > log(10,000/3), n > 12.7, so 13 terms"
                }
            ],
            applications: [
                {
                    scenario: "Viral Video Views",
                    problem: "Video has 100 views day 1. Each day views triple. How many total views after 7 days?",
                    equation: "a₁ = 100, r = 3, find S₇",
                    solution: "S₇ = 100(3⁷ - 1)/(3 - 1) = 100(2187 - 1)/2 = 109,300 views"
                },
                {
                    scenario: "Medicine Decay",
                    problem: "500mg medicine, body eliminates 25% per hour. Amount after 6 hours?",
                    equation: "a₁ = 500, r = 0.75, find a₇",
                    solution: "a₇ = 500 × (0.75)⁶ = 500 × 0.178 ≈ 89mg"
                },
                {
                    scenario: "Investment Growth",
                    problem: "$2000 at 8% annual compound interest. Value after 10 years?",
                    equation: "P = 2000, r = 1.08, t = 10",
                    solution: "A = 2000 × (1.08)¹⁰ = 2000 × 2.159 ≈ $4,318"
                },
                {
                    scenario: "Bouncing Ball",
                    problem: "Ball dropped from 10m, bounces to 60% height each time. Total distance traveled when it stops?",
                    equation: "Down: 10m once. Up and down: 2(6 + 3.6 + 2.16 + ...) = 2 × 6/(1-0.6)",
                    solution: "10 + 2 × 6/0.4 = 10 + 30 = 40m total"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Find a₅ if a₁ = 3, r = 2",
                        "a₅ = 3 × 2⁵",
                        "a₅ = 3 × 32",
                        "a₅ = 96"
                    ],
                    correctAnswer: "a₅ = 48",
                    errorType: "Used r^n instead of r^(n-1)",
                    correction: "a₅ = 3 × 2⁴ = 3 × 16 = 48"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Find common ratio: 5, 15, 45",
                        "r = 5 - 15 = -10"
                    ],
                    correctAnswer: "r = 3",
                    errorType: "Used subtraction instead of division",
                    correction: "r = 15/5 = 3 (divide consecutive terms)"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Infinite sum: a₁ = 10, r = 2",
                        "S∞ = 10/(1-2) = 10/(-1) = -10"
                    ],
                    correctAnswer: "Sum does not exist",
                    errorType: "Applied infinite sum formula when |r| ≥ 1",
                    correction: "Since |2| > 1, the series diverges. No infinite sum exists."
                },
                {
                    name: "Find the Error #4",
                    incorrectWork: [
                        "Geometric mean of 4 and 16",
                        "GM = (4 + 16)/2 = 10"
                    ],
                    correctAnswer: "GM = 8",
                    errorType: "Used arithmetic mean instead of geometric mean",
                    correction: "GM = √(4 × 16) = √64 = 8"
                }
            ],
            conceptualChallenges: [
                {
                    challenge: "Why does the infinite sum formula only work for |r| < 1?",
                    hint: "Think about what happens to r^n as n gets very large",
                    solution: "If |r| ≥ 1, terms don't approach zero. Only when |r| < 1 does r^n → 0, making sum finite."
                },
                {
                    challenge: "Can a geometric sequence have both positive and negative terms?",
                    hint: "Consider what happens with negative common ratio",
                    solution: "Yes! If r < 0, terms alternate signs. Example: 2, -6, 18, -54 with r = -3"
                },
                {
                    challenge: "What's the difference between growth rate and growth factor?",
                    hint: "One is percentage, other is multiplier",
                    solution: "Growth rate is %, growth factor is r. If growing 25%, rate = 25%, factor = 1.25"
                }
            ]
        };
    }

    initializeHistoricalContext() {
        this.historicalContext = {
            ancient_origins: {
                period: "Ancient times",
                development: "Geometric sequences appeared in ancient Egyptian and Babylonian mathematics",
                significance: "Used for compound interest calculations and geometric progressions",
                example: "Rhind Papyrus (1650 BCE) contains geometric progression problems"
            },
            greek_mathematics: {
                period: "Ancient Greece (300 BCE)",
                development: "Euclid studied geometric progressions in Elements",
                significance: "Connected to geometric figures and ratios",
                example: "Sum of geometric series used in Zeno's paradoxes"
            },
            islamic_golden_age: {
                period: "800-1200 CE",
                development: "Al-Khwarizmi and others developed algebraic methods",
                significance: "Advanced understanding of series and their sums",
                example: "Calculations for inheritance division using geometric series"
            },
            fibonacci: {
                period: "1202 CE",
                development: "Fibonacci's Liber Abaci introduced compound interest",
                significance: "Brought practical applications to Europe",
                example: "Rabbit population problem (though Fibonacci sequence is not geometric)"
            },
            renaissance: {
                period: "15th-17th centuries",
                development: "Exponential notation developed",
                significance: "Made geometric sequences easier to express and manipulate",
                example: "Decimal notation and exponent rules formalized"
            },
            modern_applications: {
                period: "20th-21st centuries",
                development: "Exponential models in science, finance, technology",
                significance: "Essential for modern quantitative fields",
                example: "Moore's Law, compound interest, population models, viral spread"
            }
        };
    }

    initializeVisualizationDatabase() {
        this.visualizations = {
            term_plot: {
                description: "Plot terms on coordinate plane (n, aₙ)",
                shows: "Exponential curve shape",
                when: "Understanding growth/decay patterns",
                example: "Points form exponential curve"
            },
            ratio_bars: {
                description: "Bar chart showing term values",
                shows: "Relative sizes and multiplicative pattern",
                when: "Comparing term magnitudes",
                example: "Each bar is r times previous bar"
            },
            branching_diagram: {
                description: "Tree showing multiplicative branching",
                shows: "How one value generates multiple next values",
                when: "Population or viral spread problems",
                example: "Each node has r children"
            },
            convergence_animation: {
                description: "Partial sums approaching limit",
                shows: "How infinite sum converges",
                when: "Understanding infinite series",
                example: "Running sum gets closer to limit"
            },
            comparison_graph: {
                description: "Multiple sequences on same axes",
                shows: "Effect of different ratios",
                when: "Comparing growth rates",
                example: "r=2 vs r=3 vs r=1.5"
            }
        };
    }

    // MAIN SOLVER METHOD
    solveGeometricProblem(config) {
        const { 
            equation, 
            scenario, 
            parameters, 
            problemType, 
            context,
            sequence 
        } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseGeometricProblem(
                equation, 
                scenario, 
                parameters, 
                problemType, 
                context,
                sequence
            );

            // Solve the problem
            this.currentSolution = this.solveGeometricProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateGeometricSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateGeometricGraphData();

            // Generate workbook
            this.generateGeometricWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionValue: this.currentSolution?.value,
                solutionType: this.currentSolution?.type
            };

        } catch (error) {
            throw new Error(`Failed to solve geometric problem: ${error.message}`);
        }
    }

    parseGeometricProblem(equation = '', scenario = '', parameters = {}, problemType = null, context = {}, sequence = null) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.geometricTypes[problemType]) {
            return {
                originalInput: equation || `${problemType} problem`,
                cleanInput: cleanInput,
                type: problemType,
                scenario: scenario,
                parameters: { ...parameters },
                sequence: sequence,
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect geometric problem type
        for (const [type, config] of Object.entries(this.geometricTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern) || scenario.match(pattern);
                    const extractedParams = this.extractGeometricParameters(match, type, parameters, sequence);

                    return {
                        originalInput: equation || scenario,
                        cleanInput: cleanInput,
                        type: type,
                        scenario: scenario,
                        parameters: { ...extractedParams, ...parameters },
                        sequence: sequence,
                        context: { ...context },
                        match: match,
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default handling if parameters provided
        if (parameters.a1 !== undefined || parameters.r !== undefined) {
            return {
                originalInput: equation || 'Geometric sequence with given parameters',
                cleanInput: cleanInput,
                type: 'find_nth_term',
                scenario: scenario,
                parameters: { ...parameters },
                sequence: sequence,
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize geometric problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/₁/g, '1')
            .replace(/₂/g, '2')
            .replace(/₃/g, '3')
            .replace(/ₙ/g, 'n')
            .trim();
    }

    extractGeometricParameters(match, type, providedParams, sequence) {
        const params = { ...providedParams };

        // Extract from sequence array if provided
        if (sequence && Array.isArray(sequence) && sequence.length >= 2) {
            if (!params.a1) params.a1 = sequence[0];
            if (!params.r && sequence.length >= 2) {
                params.r = sequence[1] / sequence[0];
            }
            params.sequenceTerms = sequence;
        }

        // Extract from match based on problem type
        if (match) {
            switch(type) {
                case 'find_nth_term':
                    if (match[1] && !params.n) {
                        params.n = parseInt(match[1]);
                    }
                    break;

                case 'sum_n_terms':
                    if (match[1] && !params.n) {
                        params.n = parseInt(match[1]);
                    }
                    break;
            }
        }

        return params;
    }

    solveGeometricProblem_Internal(problem) {
        const solver = this.geometricTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for geometric problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // GEOMETRIC SEQUENCE SOLVERS

    solveNthTerm(problem) {
        const { a1, r, n } = problem.parameters;

        if (a1 === undefined || r === undefined || n === undefined) {
            return {
                error: 'Missing required parameters',
                required: 'Need a₁ (first term), r (common ratio), and n (term number)',
                provided: problem.parameters
            };
        }

        const value = a1 * Math.pow(r, n - 1);

        return {
            type: 'nth Term',
            formula: 'aₙ = a₁ · r^(n-1)',
            firstTerm: a1,
            commonRatio: r,
            termNumber: n,
            value: value,
            calculation: `a${n} = ${a1} · ${r}^(${n}-1) = ${a1} · ${r}^${n-1} = ${a1} · ${Math.pow(r, n-1)} = ${value}`,
            interpretation: this.interpretNthTermResult(value, a1, r, n),
            category: 'nth_term'
        };
    }

    solveFirstTerm(problem) {
        const { an, r, n } = problem.parameters;

        if (an === undefined || r === undefined || n === undefined) {
            return {
                error: 'Missing required parameters',
                required: 'Need aₙ (nth term value), r (common ratio), and n (term number)',
                provided: problem.parameters
            };
        }

        const a1 = an / Math.pow(r, n - 1);

        return {
            type: 'First Term',
            formula: 'a₁ = aₙ / r^(n-1)',
            nthTerm: an,
            commonRatio: r,
            termNumber: n,
            value: a1,
            calculation: `a₁ = ${an} / ${r}^(${n}-1) = ${an} / ${Math.pow(r, n-1)} = ${a1}`,
            verification: `Check: a${n} = ${a1} · ${r}^${n-1} = ${a1 * Math.pow(r, n-1)}`,
            category: 'first_term'
        };
    }

    solveCommonRatio(problem) {
        const { a1, an, n, sequenceTerms } = problem.parameters;

        // Method 1: From consecutive terms in sequence
        if (sequenceTerms && sequenceTerms.length >= 2) {
            const r = sequenceTerms[1] / sequenceTerms[0];
            
            // Verify consistency
            const ratios = [];
            for (let i = 1; i < sequenceTerms.length; i++) {
                ratios.push(sequenceTerms[i] / sequenceTerms[i-1]);
            }
            
            const isConsistent = ratios.every(ratio => 
                Math.abs(ratio - r) < 1e-10
            );

            return {
                type: 'Common Ratio',
                method: 'Division of consecutive terms',
                sequence: sequenceTerms,
                value: r,
                calculation: `r = a₂/a₁ = ${sequenceTerms[1]}/${sequenceTerms[0]} = ${r}`,
                verification: isConsistent ? 'Ratio is consistent throughout sequence' : 'WARNING: Ratio not consistent - may not be geometric',
                allRatios: ratios,
                category: 'common_ratio'
            };
        }

        // Method 2: From first and nth term
        if (a1 !== undefined && an !== undefined && n !== undefined) {
            const r = Math.pow(an / a1, 1 / (n - 1));

            return {
                type: 'Common Ratio',
                method: 'From first and nth term',
                formula: 'r = (aₙ/a₁)^(1/(n-1))',
                firstTerm: a1,
                nthTerm: an,
                termNumber: n,
                value: r,
                calculation: `r = (${an}/${a1})^(1/${n-1}) = ${an/a1}^(1/${n-1}) = ${r}`,
                verification: `Check: a${n} = ${a1} · ${r}^${n-1} = ${a1 * Math.pow(r, n-1)}`,
                category: 'common_ratio'
            };
        }

        return {
            error: 'Insufficient information',
            required: 'Need either: sequence of terms, or a₁, aₙ, and n',
            provided: problem.parameters
        };
    }

    solveTermPosition(problem) {
        const { a1, an, r } = problem.parameters;

        if (a1 === undefined || an === undefined || r === undefined) {
            return {
                error: 'Missing required parameters',
                required: 'Need a₁ (first term), aₙ (target value), and r (common ratio)',
                provided: problem.parameters
            };
        }

        if (Math.abs(r) < 1e-10) {
            return {
                error: 'Invalid common ratio',
                note: 'Common ratio cannot be zero'
            };
        }

        // Solve: an = a1 * r^(n-1)
        // an/a1 = r^(n-1)
        // log(an/a1) = (n-1)log(r)
        // n = log(an/a1)/log(r) + 1

        const ratio = an / a1;
        
        if (ratio <= 0 && r > 0) {
            return {
                error: 'No solution',
                note: 'Target value has different sign than achievable by this sequence'
            };
        }

        const n = Math.log(Math.abs(ratio)) / Math.log(Math.abs(r)) + 1;

        // Check if n is a positive integer
        const isInteger = Math.abs(n - Math.round(n)) < 1e-10;
        const roundedN = Math.round(n);

        return {
            type: 'Term Position',
            formula: 'n = log(aₙ/a₁)/log(r) + 1',
            firstTerm: a1,
            targetValue: an,
            commonRatio: r,
            value: isInteger ? roundedN : n,
            isValidPosition: isInteger && n > 0,
            calculation: `n = log(${an}/${a1})/log(${r}) + 1 = log(${ratio})/log(${r}) + 1 = ${n}`,
            interpretation: isInteger ? 
                `The ${this.ordinal(roundedN)} term equals ${an}` :
                `No term exactly equals ${an}. Closest is term ${Math.floor(n)} or ${Math.ceil(n)}`,
            verification: isInteger ? `a${roundedN} = ${a1} · ${r}^${roundedN-1} = ${a1 * Math.pow(r, roundedN-1)}` : null,
            category: 'term_position'
        };
    }

    solveSumNTerms(problem) {
        const { a1, r, n } = problem.parameters;

        if (a1 === undefined || r === undefined || n === undefined) {
            return {
                error: 'Missing required parameters',
                required: 'Need a₁ (first term), r (common ratio), and n (number of terms)',
                provided: problem.parameters
            };
        }

        // Special case: r = 1
        if (Math.abs(r - 1) < 1e-10) {
            const sum = n * a1;
            return {
                type: 'Sum of n Terms',
                formula: 'Sₙ = n · a₁ (when r = 1)',
                firstTerm: a1,
                commonRatio: 1,
                numberOfTerms: n,
                value: sum,
                calculation: `S${n} = ${n} · ${a1} = ${sum}`,
                note: 'Since r = 1, all terms equal a₁',
                category: 'sum'
            };
        }

        // General case: r ≠ 1
        // Using formula: Sn = a1 * (r^n - 1) / (r - 1)
        // Alternative: Sn = a1 * (1 - r^n) / (1 - r)

        const rPowN = Math.pow(r, n);
        
        // Choose formula based on r value for cleaner arithmetic
        let sum, numerator, denominator, formulaUsed;
        
        if (Math.abs(r) > 1) {
            // Use (r^n - 1)/(r - 1) for r > 1
            numerator = rPowN - 1;
            denominator = r - 1;
            formulaUsed = 'Sₙ = a₁(r^n - 1)/(r - 1)';
        } else {
            // Use (1 - r^n)/(1 - r) for |r| < 1
            numerator = 1 - rPowN;
            denominator = 1 - r;
            formulaUsed = 'Sₙ = a₁(1 - r^n)/(1 - r)';
        }

        sum = a1 * numerator / denominator;

        return {
            type: 'Sum of n Terms',
            formula: formulaUsed,
            firstTerm: a1,
            commonRatio: r,
            numberOfTerms: n,
            value: sum,
            calculation: `S${n} = ${a1} ·(${numerator})/(${denominator}) = ${sum}`,
            rToThePowerN: rPowN,
            interpretation: this.interpretSumResult(sum, a1, r, n),
            category: 'sum'
        };
    }

    solveInfiniteSum(problem) {
        const { a1, r } = problem.parameters;

        if (a1 === undefined || r === undefined) {
            return {
                error: 'Missing required parameters',
                required: 'Need a₁ (first term) and r (common ratio)',
                provided: problem.parameters
            };
        }

        const absR = Math.abs(r);

        // Check convergence condition
        if (absR >= 1) {
            return {
                type: 'Infinite Sum',
                firstTerm: a1,
                commonRatio: r,
                converges: false,
                value: null,
                explanation: `Series diverges because |r| = ${absR} ≥ 1`,
                note: 'Infinite geometric series only converges when |r| < 1',
                reason: absR > 1 ? 
                    'Terms grow without bound' : 
                    'Terms do not approach zero (r = ±1)',
                category: 'infinite_sum'
            };
        }

        // Series converges: S∞ = a1 / (1 - r)
        const sum = a1 / (1 - r);

        return {
            type: 'Infinite Sum',
            formula: 'S∞ = a₁/(1 - r)',
            firstTerm: a1,
            commonRatio: r,
            converges: true,
            value: sum,
            calculation: `S∞ = ${a1}/(1 - ${r}) = ${a1}/${1 - r} = ${sum}`,
            convergenceCheck: `|r| = ${absR} < 1 ✓`,
            interpretation: `The infinite series ${a1} + ${a1*r} + ${a1*r*r} + ... converges to ${sum}`,
            visualExplanation: 'Terms approach zero, so partial sums approach a finite limit',
            category: 'infinite_sum'
        };
    }

    solveIdentifySequence(problem) {
        const { sequenceTerms } = problem.parameters;

        if (!sequenceTerms || sequenceTerms.length < 3) {
            return {
                error: 'Need at least 3 terms to identify sequence type',
                provided: sequenceTerms
            };
        }

        // Calculate ratios
        const ratios = [];
        for (let i = 1; i < sequenceTerms.length; i++) {
            if (Math.abs(sequenceTerms[i-1]) > 1e-10) {
                ratios.push(sequenceTerms[i] / sequenceTerms[i-1]);
            }
        }

        // Check if ratios are constant
        const tolerance = 1e-8;
        const firstRatio = ratios[0];
        const isGeometric = ratios.every(ratio => 
            Math.abs(ratio - firstRatio) < tolerance
        );

        // Calculate differences for comparison
        const differences = [];
        for (let i = 1; i < sequenceTerms.length; i++) {
            differences.push(sequenceTerms[i] - sequenceTerms[i-1]);
        }

        const firstDiff = differences[0];
        const isArithmetic = differences.every(diff => 
            Math.abs(diff - firstDiff) < tolerance
        );

        if (isGeometric) {
            return {
                type: 'Sequence Identification',
                sequence: sequenceTerms,
                isGeometric: true,
                commonRatio: firstRatio,
                ratios: ratios,
                firstTerm: sequenceTerms[0],
                formula: `aₙ = ${sequenceTerms[0]} · ${firstRatio}^(n-1)`,
                explanation: 'This is a geometric sequence because the ratio between consecutive terms is constant',
                category: 'identify'
            };
        }

        return {
            type: 'Sequence Identification',
            sequence: sequenceTerms,
            isGeometric: false,
            ratios: ratios,
            differences: differences,
            isArithmetic: isArithmetic,
            explanation: isArithmetic ? 
                'This is an arithmetic sequence (constant difference), not geometric' :
                'This is neither geometric nor arithmetic sequence',
            note: 'Ratios are not constant',
            category: 'identify'
        };
    }

    solveGeometricMean(problem) {
        const { a, b, numMeans } = problem.parameters;

        if (a === undefined || b === undefined) {
            return {
                error: 'Missing required parameters',
                required: 'Need two terms (a and b) to find geometric mean(s) between',
                provided: problem.parameters
            };
        }

        // Simple geometric mean of two numbers
        if (numMeans === undefined || numMeans === 1) {
            const gm = Math.sqrt(a * b);
            
            return {
                type: 'Geometric Mean',
                formula: 'GM = √(a·b)',
                term1: a,
                term2: b,
                value: gm,
                calculation: `GM = √(${a} × ${b}) = √${a * b} = ${gm}`,
                sequence: [a, gm, b],
                verification: `Check: ${gm}/${a} = ${gm/a}, ${b}/${gm} = ${b/gm}`,
                interpretation: `${gm} is the geometric mean between ${a} and ${b}`,
                category: 'geometric_mean'
            };
        }

        // Insert n geometric means between a and b
        // Creates sequence: a, m₁, m₂, ..., mₙ, b (n+2 terms total)
        // Common ratio: r = (b/a)^(1/(n+1))
        
        const totalTerms = numMeans + 2;
        const r = Math.pow(b / a, 1 / (numMeans + 1));
        
        const means = [];
        for (let i = 1; i <= numMeans; i++) {
            means.push(a * Math.pow(r, i));
        }

        const fullSequence = [a, ...means, b];

        return {
            type: 'Insert Geometric Means',
            formula: 'r = (b/a)^(1/(n+1))',
            startTerm: a,
            endTerm: b,
            numberOfMeans: numMeans,
            commonRatio: r,
            means: means,
            fullSequence: fullSequence,
            calculation: `r = (${b}/${a})^(1/${numMeans + 1}) = ${b/a}^(1/${numMeans + 1}) = ${r}`,
            interpretation: `The ${numMeans} geometric mean(s) between ${a} and ${b} are: ${means.join(', ')}`,
            category: 'geometric_mean'
        };
    }

    solveCompoundInterest(problem) {
        const { 
            principal, 
            rate, 
            time, 
            compoundsPerYear = 1,
            findWhat = 'amount' 
        } = problem.parameters;

        // A = P(1 + r/n)^(nt)
        // A = final amount, P = principal, r = annual rate (decimal)
        // n = compounds per year, t = time in years

        if (findWhat === 'amount' || findWhat === 'A') {
            if (principal === undefined || rate === undefined || time === undefined) {
                return {
                    error: 'Missing required parameters',
                    required: 'Need principal (P), annual rate (r), and time (t)',
                    provided: problem.parameters
                };
            }

            const amount = principal * Math.pow(1 + rate / compoundsPerYear, compoundsPerYear * time);
            const interest = amount - principal;

            return {
                type: 'Compound Interest',
                formula: 'A = P(1 + r/n)^(nt)',
                principal: principal,
                annualRate: rate,
                rateAsPercent: rate * 100,
                time: time,
                compoundsPerYear: compoundsPerYear,
                compoundingPeriod: this.getCompoundingPeriodName(compoundsPerYear),
                finalAmount: amount,
                interestEarned: interest,
                calculation: `A = ${principal}(1 + ${rate}/${compoundsPerYear})^(${compoundsPerYear}×${time}) = ${principal}(${1 + rate/compoundsPerYear})^${compoundsPerYear * time} = ${amount}`,
                geometricInterpretation: `Each period multiplies by ${1 + rate/compoundsPerYear}, for ${compoundsPerYear * time} periods`,
                effectiveAnnualRate: Math.pow(1 + rate/compoundsPerYear, compoundsPerYear) - 1,
                category: 'applications'
            };
        }

        // Can extend to solve for other variables (P, r, t) if needed
        return {
            error: 'Unsupported calculation',
            note: 'Currently supports finding final amount (A) given P, r, t, n'
        };
    }

    solvePopulationGrowth(problem) {
        const { 
            initialPopulation, 
            growthRate, 
            time, 
            findWhat = 'population' 
        } = problem.parameters;

        // P(t) = P₀ · r^t where r is growth factor (1 + rate)

        if (findWhat === 'population') {
            if (initialPopulation === undefined || growthRate === undefined || time === undefined) {
                return {
                    error: 'Missing required parameters',
                    required: 'Need initial population, growth rate, and time',
                    provided: problem.parameters
                };
            }

            const growthFactor = 1 + growthRate;
            const finalPopulation = initialPopulation * Math.pow(growthFactor, time);
            const increase = finalPopulation - initialPopulation;

            return {
                type: 'Population Growth',
                formula: 'P(t) = P₀ · (1+r)^t',
                initialPopulation: initialPopulation,
                growthRate: growthRate,
                growthRatePercent: growthRate * 100,
                growthFactor: growthFactor,
                time: time,
                timeUnit: problem.parameters.timeUnit || 'periods',
                finalPopulation: finalPopulation,
                increase: increase,
                calculation: `P(${time}) = ${initialPopulation} · ${growthFactor}^${time} = ${initialPopulation} · ${Math.pow(growthFactor, time)} = ${finalPopulation}`,
                geometricSequence: `Forms geometric sequence with a₁=${initialPopulation}, r=${growthFactor}`,
                doublingTime: Math.log(2) / Math.log(growthFactor),
                category: 'applications'
            };
        }

        return {
            error: 'Unsupported calculation',
            note: 'Currently supports finding population given initial, rate, and time'
        };
    }

    solveDecayProblem(problem) {
        const { 
            initialAmount, 
            decayRate, 
            halfLife,
            time, 
            findWhat = 'amount' 
        } = problem.parameters;

        // Two models:
        // 1. N(t) = N₀ · (1-r)^t where r is decay rate
        // 2. N(t) = N₀ · (1/2)^(t/T₁/₂) where T₁/₂ is half-life

        if (findWhat === 'amount') {
            let finalAmount, decayFactor, calculation;

            if (decayRate !== undefined) {
                // Using decay rate model
                if (initialAmount === undefined || time === undefined) {
                    return {
                        error: 'Missing required parameters',
                        required: 'Need initial amount, decay rate, and time',
                        provided: problem.parameters
                    };
                }

                decayFactor = 1 - decayRate;
                finalAmount = initialAmount * Math.pow(decayFactor, time);
                calculation = `N(${time}) = ${initialAmount} · ${decayFactor}^${time} = ${finalAmount}`;

            } else if (halfLife !== undefined) {
                // Using half-life model
                if (initialAmount === undefined || time === undefined) {
                    return {
                        error: 'Missing required parameters',
                        required: 'Need initial amount, half-life, and time',
                        provided: problem.parameters
                    };
                }

                const numHalfLives = time / halfLife;
                finalAmount = initialAmount * Math.pow(0.5, numHalfLives);
                decayFactor = Math.pow(0.5, 1 / halfLife);
                calculation = `N(${time}) = ${initialAmount} · (1/2)^(${time}/${halfLife}) = ${initialAmount} · (1/2)^${numHalfLives} = ${finalAmount}`;

            } else {
                return {
                    error: 'Insufficient information',
                    required: 'Need either decay rate or half-life',
                    provided: problem.parameters
                };
            }

            const amountDecayed = initialAmount - finalAmount;
            const percentRemaining = (finalAmount / initialAmount) * 100;

            return {
                type: 'Exponential Decay',
                formula: halfLife !== undefined ? 'N(t) = N₀·(1/2)^(t/T₁/₂)' : 'N(t) = N₀·(1-r)^t',
                initialAmount: initialAmount,
                decayRate: decayRate,
                halfLife: halfLife,
                decayFactor: decayFactor,
                time: time,
                timeUnit: problem.parameters.timeUnit || 'periods',
                finalAmount: finalAmount,
                amountDecayed: amountDecayed,
                percentRemaining: percentRemaining,
                calculation: calculation,
                geometricSequence: `Forms geometric sequence with a₁=${initialAmount}, r=${decayFactor}`,
                category: 'applications'
            };
        }

        return {
            error: 'Unsupported calculation',
            note: 'Currently supports finding amount given initial, decay parameters, and time'
        };
    }

    solveRecursiveToExplicit(problem) {
        const { recursiveFormula, a1, r } = problem.parameters;

        if (a1 !== undefined && r !== undefined) {
            return {
                type: 'Formula Conversion',
                recursive: `a₁ = ${a1}, aₙ = ${r} · aₙ₋₁`,
                explicit: `aₙ = ${a1} · ${r}^(n-1)`,
                explanation: 'Recursive formula defines each term from previous; explicit formula calculates any term directly',
                firstTerm: a1,
                commonRatio: r,
                examples: [
                    `a₁ = ${a1}`,
                    `a₂ = ${a1 * r}`,
                    `a₃ = ${a1 * r * r}`,
                    `a₄ = ${a1 * Math.pow(r, 3)}`
                ],
                category: 'conversion'
            };
        }

        return {
            error: 'Need a₁ and r to convert',
            provided: problem.parameters
        };
    }

    // HELPER METHODS

    interpretNthTermResult(value, a1, r, n) {
        const interpretations = [];

        if (Math.abs(r) > 1) {
            interpretations.push(`Growing sequence: each term is ${Math.abs(r)} times the previous`);
        } else if (Math.abs(r) < 1 && Math.abs(r) > 0) {
            interpretations.push(`Decaying sequence: each term is ${Math.abs(r)} times the previous`);
        }

        if (r < 0) {
            interpretations.push('Alternating sequence: signs alternate due to negative ratio');
        }

        interpretations.push(`From a₁=${a1} to a${n}=${value} requires ${n-1} multiplications by ${r}`);

        return interpretations.join('. ');
    }

    interpretSumResult(sum, a1, r, n) {
        const interpretations = [];

        interpretations.push(`Sum of first ${n} terms is ${sum}`);
        
        const avgTerm = sum / n;
        interpretations.push(`Average term value: ${avgTerm}`);

        if (Math.abs(r) > 1) {
            interpretations.push('Sum dominated by later (larger) terms');
        } else if (Math.abs(r) < 1) {
            interpretations.push('Sum dominated by earlier (larger) terms');
        }

        return interpretations.join('. ');
    }

    ordinal(n) {
        const suffixes = ['th', 'st', 'nd', 'rd'];
        const v = n % 100;
        return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
    }

    getCompoundingPeriodName(n) {
        const names = {
            1: 'annually',
            2: 'semi-annually',
            4: 'quarterly',
            12: 'monthly',
            52: 'weekly',
            365: 'daily'
        };
        return names[n] || `${n} times per year`;
    }

    // STEP GENERATION

    generateGeometricSteps(problem, solution) {
        let baseSteps = this.generateBaseGeometricSteps(problem, solution);

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

    generateBaseGeometricSteps(problem, solution) {
        const { type } = problem;
        const category = this.geometricTypes[type]?.category;

        switch(category) {
            case 'nth_term':
                return this.generateNthTermSteps(problem, solution);
            case 'first_term':
                return this.generateFirstTermSteps(problem, solution);
            case 'common_ratio':
                return this.generateCommonRatioSteps(problem, solution);
            case 'term_position':
                return this.generateTermPositionSteps(problem, solution);
            case 'sum':
                return this.generateSumSteps(problem, solution);
            case 'infinite_sum':
                return this.generateInfiniteSumSteps(problem, solution);
            case 'geometric_mean':
                return this.generateGeometricMeanSteps(problem, solution);
            case 'applications':
                return this.generateApplicationSteps(problem, solution);
            default:
                return this.generateGenericGeometricSteps(problem, solution);
        }
    }

    generateNthTermSteps(problem, solution) {
        const steps = [];
        const { a1, r, n } = problem.parameters;

        // Step 1: Given information
        steps.push({
            stepNumber: 1,
            step: 'Given information',
            description: 'Identify the values provided',
            information: {
                'First term (a₁)': a1,
                'Common ratio (r)': r,
                'Term to find (n)': n
            },
            reasoning: 'We have all three values needed for the nth term formula',
            goalStatement: `Find a${n}, the ${this.ordinal(n)} term of the geometric sequence`
        });

        // Step 2: Write formula
        steps.push({
            stepNumber: 2,
            step: 'Write the formula',
            description: 'Use the nth term formula for geometric sequences',
            formula: 'aₙ = a₁ · r^(n-1)',
            reasoning: 'This formula calculates any term directly using the first term and common ratio',
            algebraicRule: 'Geometric Sequence nth Term Formula',
            keyInsight: 'The exponent is (n-1) because we multiply by r exactly (n-1) times from a₁ to aₙ'
        });

        // Step 3: Substitute values
        steps.push({
            stepNumber: 3,
            step: 'Substitute values',
            description: 'Replace variables with given values',
            beforeExpression: 'aₙ = a₁ · r^(n-1)',
            afterExpression: `a${n} = ${a1} · ${r}^(${n}-1)`,
            substitutions: {
                'n': n,
                'a₁': a1,
                'r': r
            },
            reasoning: 'Plug in the known values to create a numerical expression'
        });

        // Step 4: Simplify exponent
        steps.push({
            stepNumber: 4,
            step: 'Simplify exponent',
            description: 'Calculate n - 1',
            beforeExpression: `a${n} = ${a1} · ${r}^(${n}-1)`,
            operation: 'Subtract 1 from n',
            afterExpression: `a${n} = ${a1} · ${r}^${n-1}`,
            calculation: `${n} - 1 = ${n-1}`,
            reasoning: 'Simplify the exponent before calculating the power'
        });

        // Step 5: Calculate power
        const rPower = Math.pow(r, n - 1);
        steps.push({
            stepNumber: 5,
            step: 'Calculate the power',
            description: `Compute ${r}^${n-1}`,
            beforeExpression: `a${n} = ${a1} · ${r}^${n-1}`,
            operation: `Calculate ${r}^${n-1}`,
            afterExpression: `a${n} = ${a1} · ${rPower}`,
            calculation: `${r}^${n-1} = ${rPower}`,
            reasoning: `Multiply ${r} by itself ${n-1} times`,
            visualHint: `Think: ${r} × ${r} × ... × ${r} (${n-1} times)`
        });

        // Step 6: Final multiplication
        steps.push({
            stepNumber: 6,
            step: 'Multiply by first term',
            description: `Multiply ${a1} × ${rPower}`,
            beforeExpression: `a${n} = ${a1} · ${rPower}`,
            operation: '×',
            afterExpression: `a${n} = ${solution.value}`,
            calculation: `${a1} × ${rPower} = ${solution.value}`,
            reasoning: 'Complete the calculation to find the nth term',
            finalAnswer: true
        });

        // Step 7: Final answer with interpretation
        steps.push({
            stepNumber: 7,
            step: 'Final answer',
            description: `The ${this.ordinal(n)} term of the sequence`,
            expression: `a${n} = ${solution.value}`,
            finalAnswer: true,
            interpretation: solution.interpretation,
            verification: `This sequence starts at ${a1} and multiplies by ${r} each time`
        });

        return steps;
    }

    generateFirstTermSteps(problem, solution) {
        const steps = [];
        const { an, r, n } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Given information',
            description: 'Identify what we know',
            information: {
                [`Term ${n} value (a${n})`]: an,
                'Common ratio (r)': r,
                'Term position (n)': n
            },
            goalStatement: 'Find a₁, the first term'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write the formula',
            description: 'Start with nth term formula',
            formula: 'aₙ = a₁ · r^(n-1)',
            reasoning: 'We need to solve this for a₁'
        });

        steps.push({
            stepNumber: 3,
            step: 'Rearrange for a₁',
            description: 'Isolate a₁ by dividing both sides by r^(n-1)',
            beforeExpression: 'aₙ = a₁ · r^(n-1)',
            operation: '÷ r^(n-1)',
            afterExpression: 'a₁ = aₙ / r^(n-1)',
            reasoning: 'Division undoes multiplication',
            algebraicRule: 'Division Property of Equality'
        });

        steps.push({
            stepNumber: 4,
            step: 'Substitute values',
            description: 'Replace variables with known values',
            afterExpression: `a₁ = ${an} / ${r}^(${n}-1)`,
            reasoning: 'Plug in the values we know'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate exponent',
            description: `Compute ${r}^${n-1}`,
            calculation: `${r}^${n-1} = ${Math.pow(r, n-1)}`,
            afterExpression: `a₁ = ${an} / ${Math.pow(r, n-1)}`
        });

        steps.push({
            stepNumber: 6,
            step: 'Divide',
            description: 'Complete the division',
            calculation: `${an} / ${Math.pow(r, n-1)} = ${solution.value}`,
            expression: `a₁ = ${solution.value}`,
            finalAnswer: true
        });

        steps.push({
            stepNumber: 7,
            step: 'Verification',
            description: 'Check our answer',
            verification: solution.verification,
            reasoning: 'Substitute back to confirm our answer is correct'
        });

        return steps;
    }

    generateCommonRatioSteps(problem, solution) {
        const steps = [];

        if (solution.method === 'Division of consecutive terms') {
            const { sequenceTerms } = problem.parameters;

            steps.push({
                stepNumber: 1,
                step: 'Given sequence',
                description: 'Identify the sequence terms',
                sequence: sequenceTerms,
                goalStatement: 'Find the common ratio (r)'
            });

            steps.push({
                stepNumber: 2,
                step: 'Understand common ratio',
                description: 'The common ratio is the factor we multiply by to get each next term',
                formula: 'r = aₙ / aₙ₋₁ (any term divided by previous term)',
                reasoning: 'In a geometric sequence, this ratio is constant'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate ratio',
                description: 'Divide second term by first term',
                calculation: `r = ${sequenceTerms[1]} / ${sequenceTerms[0]} = ${solution.value}`,
                reasoning: 'This gives us the multiplicative factor between terms'
            });

            steps.push({
                stepNumber: 4,
                step: 'Verify consistency',
                description: 'Check that ratio is same for other consecutive pairs',
                allRatios: solution.allRatios,
                verification: solution.verification,
                reasoning: 'All ratios must be equal for a geometric sequence'
            });

            steps.push({
                stepNumber: 5,
                step: 'Final answer',
                expression: `r = ${solution.value}`,
                finalAnswer: true,
                interpretation: `Each term is ${solution.value} times the previous term`
            });

        } else {
            // From first and nth term
            const { a1, an, n } = problem.parameters;

            steps.push({
                stepNumber: 1,
                step: 'Given information',
                information: {
                    'First term (a₁)': a1,
                    [`Term ${n} (a${n})`]: an,
                    'Position (n)': n
                },
                goalStatement: 'Find the common ratio (r)'
            });

            steps.push({
                stepNumber: 2,
                step: 'Write formula',
                formula: 'aₙ = a₁ · r^(n-1)',
                reasoning: 'This relates the terms we know to r'
            });

            steps.push({
                stepNumber: 3,
                step: 'Solve for r',
                description: 'Rearrange to isolate r',
                beforeExpression: 'aₙ = a₁ · r^(n-1)',
                steps: [
                    'Divide both sides by a₁: aₙ/a₁ = r^(n-1)',
                    `Take ${this.ordinal(n-1)} root: r = (aₙ/a₁)^(1/(n-1))`
                ],
                afterExpression: `r = (${an}/${a1})^(1/(${n}-1))`,
                reasoning: 'Taking a root is inverse of raising to a power'
            });

            steps.push({
                stepNumber: 4,
                step: 'Calculate',
                calculation: `r = (${an/a1})^(1/${n-1}) = ${solution.value}`,
                expression: `r = ${solution.value}`,
                finalAnswer: true
            });

            steps.push({
                stepNumber: 5,
                step: 'Verification',
                verification: solution.verification,
                reasoning: 'Check by calculating the nth term with our value of r'
            });
        }

        return steps;
    }

    generateTermPositionSteps(problem, solution) {
        const steps = [];
        const { a1, an, r } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Given information',
            information: {
                'First term (a₁)': a1,
                'Target value': an,
                'Common ratio (r)': r
            },
            goalStatement: `Find which term equals ${an}`
        });

        steps.push({
            stepNumber: 2,
            step: 'Write the equation',
            formula: 'aₙ = a₁ · r^(n-1)',
            description: 'Substitute known values',
            afterExpression: `${an} = ${a1} · ${r}^(n-1)`,
            reasoning: 'We need to solve for n'
        });

        steps.push({
            stepNumber: 3,
            step: 'Isolate exponential term',
            description: 'Divide both sides by a₁',
            beforeExpression: `${an} = ${a1} · ${r}^(n-1)`,
            operation: `÷ ${a1}`,
            afterExpression: `${an/a1} = ${r}^(n-1)`,
            reasoning: 'This isolates the term with n in the exponent'
        });

        steps.push({
            stepNumber: 4,
            step: 'Take logarithm of both sides',
            description: 'Use logarithms to bring down the exponent',
            beforeExpression: `${an/a1} = ${r}^(n-1)`,
            operation: 'log',
            afterExpression: `log(${an/a1}) = (n-1) · log(${r})`,
            reasoning: 'Logarithms are the inverse of exponents',
            algebraicRule: 'Logarithm Power Rule: log(a^b) = b·log(a)',
            keyInsight: 'When variable is in exponent, use logarithms to solve'
        });

        steps.push({
            stepNumber: 5,
            step: 'Solve for n',
            description: 'Divide by log(r) and add 1',
            calculation: `n - 1 = log(${an/a1})/log(${r})`,
            afterExpression: `n = log(${an/a1})/log(${r}) + 1`,
            reasoning: 'Isolate n using algebra'
        });

        steps.push({
            stepNumber: 6,
            step: 'Calculate',
            calculation: `n = ${Math.log(an/a1)}/log(${r}) + 1 = ${solution.value}`,
            finalAnswer: true,
            interpretation: solution.interpretation
        });

        if (solution.isValidPosition) {
            steps.push({
                stepNumber: 7,
                step: 'Verification',
                verification: solution.verification,
                reasoning: 'Confirm by calculating the term value'
            });
        }

        return steps;
    }

    generateSumSteps(problem, solution) {
        const steps = [];
        const { a1, r, n } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Given information',
            information: {
                'First term (a₁)': a1,
                'Common ratio (r)': r,
                'Number of terms (n)': n
            },
            goalStatement: `Find sum of first ${n} terms`
        });

        // Check for special case r = 1
        if (Math.abs(r - 1) < 1e-10) {
            steps.push({
                stepNumber: 2,
                step: 'Special case: r = 1',
                description: 'When r = 1, all terms equal a₁',
                formula: 'Sₙ = n · a₁',
                reasoning: 'Sum of n identical values is n times that value'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate',
                calculation: `S${n} = ${n} · ${a1} = ${solution.value}`,
                expression: `S${n} = ${solution.value}`,
                finalAnswer: true
            });

            return steps;
        }

        // General case
        steps.push({
            stepNumber: 2,
            step: 'Choose formula',
            formula: solution.formula,
            reasoning: Math.abs(r) > 1 ?
                'Using (r^n - 1)/(r - 1) form since r > 1' :
                'Using (1 - r^n)/(1 - r) form since |r| < 1',
            note: 'Both forms are equivalent; choose based on r for cleaner arithmetic'
        });

        steps.push({
            stepNumber: 3,
            step: 'Substitute values',
            afterExpression: solution.formula.replace('a₁', a1).replace('r', r).replace('n', n),
            reasoning: 'Plug in known values'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate r^n',
            calculation: `${r}^${n} = ${solution.rToThePowerN}`,
            reasoning: 'Compute the power of r first'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate numerator and denominator',
            calculation: solution.calculation,
            reasoning: 'Evaluate the fraction'
        });

        steps.push({
            stepNumber: 6,
            step: 'Final answer',
            expression: `S${n} = ${solution.value}`,
            finalAnswer: true,
            interpretation: solution.interpretation
        });

        return steps;
    }

    generateInfiniteSumSteps(problem, solution) {
        const steps = [];
        const { a1, r } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Given information',
            information: {
                'First term (a₁)': a1,
                'Common ratio (r)': r
            },
            goalStatement: 'Find sum of infinite geometric series'
        });

        steps.push({
            stepNumber: 2,
            step: 'Check convergence condition',
            description: 'Infinite sum exists only if |r| < 1',
            condition: '|r| < 1',
            check: solution.convergenceCheck || `|${r}| = ${Math.abs(r)}`,
            result: solution.converges ? 'Converges ✓' : 'Diverges ✗',
            reasoning: 'Terms must approach zero for sum to be finite',
            keyInsight: 'If |r| ≥ 1, terms don\'t shrink to zero, so sum is infinite'
        });

        if (!solution.converges) {
            steps.push({
                stepNumber: 3,
                step: 'Conclusion',
                description: 'Series does not converge',
                explanation: solution.explanation,
                note: solution.note,
                finalAnswer: true
            });

            return steps;
        }

        steps.push({
            stepNumber: 3,
            step: 'Apply infinite sum formula',
            formula: 'S∞ = a₁/(1 - r)',
            reasoning: 'This is the limit of Sₙ as n approaches infinity when |r| < 1',
            derivation: 'Derived from finite sum formula by taking limit as n → ∞'
        });

        steps.push({
            stepNumber: 4,
            step: 'Substitute values',
            afterExpression: `S∞ = ${a1}/(1 - ${r})`,
            reasoning: 'Plug in a₁ and r'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate denominator',
            calculation: `1 - ${r} = ${1 - r}`,
            reasoning: 'Simplify the denominator first'
        });

        steps.push({
            stepNumber: 6,
            step: 'Divide',
            calculation: `${a1}/${1 - r} = ${solution.value}`,
            expression: `S∞ = ${solution.value}`,
            finalAnswer: true
        });

        steps.push({
            stepNumber: 7,
            step: 'Interpretation',
            interpretation: solution.interpretation,
            visualExplanation: solution.visualExplanation,
            reasoning: 'The infinite series converges to this finite value'
        });

        return steps;
    }

    generateGeometricMeanSteps(problem, solution) {
        const steps = [];
        const { a, b, numMeans } = problem.parameters;

        if (!numMeans || numMeans === 1) {
            // Simple geometric mean
            steps.push({
                stepNumber: 1,
                step: 'Given values',
                information: {
                    'First term (a)': a,
                    'Second term (b)': b
                },
                goalStatement: 'Find geometric mean between a and b'
            });

            steps.push({
                stepNumber: 2,
                step: 'Geometric mean formula',
                formula: 'GM = √(a·b)',
                reasoning: 'Geometric mean is the square root of the product',
                keyInsight: 'In geometric sequence a, GM, b: GM/a = b/GM'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate product',
                calculation: `a · b = ${a} × ${b} = ${a * b}`,
                reasoning: 'Multiply the two terms'
            });

            steps.push({
                stepNumber: 4,
                step: 'Take square root',
                calculation: `√${a * b} = ${solution.value}`,
                expression: `GM = ${solution.value}`,
                finalAnswer: true
            });

            steps.push({
                stepNumber: 5,
                step: 'Verification',
                sequence: solution.sequence,
                verification: solution.verification,
                reasoning: 'Check that the three terms form a geometric sequence'
            });

        } else {
            // Insert multiple means
            steps.push({
                stepNumber: 1,
                step: 'Given information',
                information: {
                    'Start term (a)': a,
                    'End term (b)': b,
                    'Number of means to insert': numMeans
                },
                goalStatement: `Insert ${numMeans} geometric mean(s) between ${a} and ${b}`
            });

            steps.push({
                stepNumber: 2,
                step: 'Find common ratio',
                description: `Sequence will have ${numMeans + 2} total terms`,
                formula: 'r = (b/a)^(1/(n+1))',
                reasoning: 'Need to find r such that multiplying ${numMeans + 1} times gets from a to b'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate ratio',
                calculation: solution.calculation,
                expression: `r = ${solution.commonRatio}`,
                reasoning: 'This is the common ratio for the sequence'
            });

            steps.push({
                stepNumber: 4,
                step: 'Calculate geometric means',
                description: 'Multiply successively by r',
                means: solution.means,
                calculation: solution.means.map((m, i) => 
                    `Mean ${i+1} = ${a} × ${solution.commonRatio}^${i+1} = ${m}`
                ).join('\n'),
                reasoning: 'Each mean is obtained by multiplying the previous term by r'
            });

            steps.push({
                stepNumber: 5,
                step: 'Final sequence',
                fullSequence: solution.fullSequence,
                expression: solution.fullSequence.join(', '),
                finalAnswer: true,
                interpretation: solution.interpretation
            });
        }

        return steps;
    }

    generateApplicationSteps(problem, solution) {
        const steps = [];

        // Generic application steps
        steps.push({
            stepNumber: 1,
            step: 'Understand the problem',
            description: problem.scenario || 'Real-world application',
            context: solution.type,
            goalStatement: 'Identify what we need to find'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify the geometric model',
            formula: solution.formula,
            parameters: problem.parameters,
            reasoning: 'This situation follows a geometric pattern'
        });

        steps.push({
            stepNumber: 3,
            step: 'Substitute values',
            calculation: solution.calculation,
            reasoning: 'Plug in the given values'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate result',
            expression: solution.value !== undefined ? `Result = ${solution.value}` : solution.calculation,
            finalAnswer: true
        });

        steps.push({
            stepNumber: 5,
            step: 'Interpret in context',
            interpretation: this.interpretApplicationResult(solution, problem),
            reasoning: 'Translate mathematical result back to real-world meaning'
        });

        return steps;
    }

    generateGenericGeometricSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Geometric sequence problem',
            description: 'Solve the given geometric sequence problem',
            solution: solution,
            reasoning: 'Apply appropriate geometric sequence techniques'
        }];
    }

    interpretApplicationResult(solution, problem) {
        const { type } = solution;

        switch(type) {
            case 'Compound Interest':
                return `The investment grows to $${solution.finalAmount.toFixed(2)}, earning $${solution.interestEarned.toFixed(2)} in interest over ${solution.time} years.`;
            
            case 'Population Growth':
                return `Population grows from ${solution.initialPopulation} to ${Math.round(solution.finalPopulation)}, an increase of ${Math.round(solution.increase)}`;
            
            case 'Exponential Decay':
                return `Amount decays from ${solution.initialAmount} to ${solution.finalAmount.toFixed(2)}, leaving ${solution.percentRemaining.toFixed(1)}% of the original.`;
            
            default:
                return 'Result calculated using geometric sequence model.';
        }
    }

    // ENHANCED EXPLANATION METHODS (adapted from linear workbook)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            // Multiple explanation formats
            explanations: {
                conceptual: this.getConceptualExplanation(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualExplanation(step, problem),
                algebraic: this.getAlgebraicExplanation(step)
            },

            // Difficulty-adapted explanations
            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            // Learning support
            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabulary(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        // Add thinking prompts if enabled
        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPrompts(step);
        }

        // Add self-check questions if enabled
        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestion(step);
        }

        // Add real-world connections if enabled
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
                simpleLanguage: this.convertToSimpleLanguage(step.description || step.step),
                visualization: this.suggestVisualization(step)
            }
        }));
    }

    generateELI5Explanation(step, problem) {
        const ELI5Explanations = {
            'Given information': "Let's see what numbers we have to start with!",
            'Write the formula': "There's a special recipe (formula) that works for all geometric sequences.",
            'Calculate the power': "When we multiply a number by itself many times, that's called a 'power'. Like 2×2×2 = 2³ (2 to the power of 3).",
            'Multiply by first term': "Now we just multiply our result by the first number to get our answer!",
            'Check convergence condition': "Before we add up forever, we need to check if the numbers get smaller and smaller. If they don't, we can't add them all up!",
            'Take logarithm': "Logarithms are like a magic trick to bring numbers down from being powers. If 2³ = 8, then log tells us 3.",
            'Common ratio': "This is the 'zoom factor' - how much bigger (or smaller) each number is than the one before it."
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our problem!";
    }

    findRelevantAnalogy(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('all_geometric')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Each step multiplies by the same number, like making copies of copies!";
    }

    convertToSimpleLanguage(description) {
        if (!description) return '';
        
        const simplifications = {
            'geometric sequence': 'a pattern where each number is multiplied by the same amount',
            'common ratio': 'the multiply number',
            'nth term': 'any number in the pattern',
            'exponent': 'how many times to multiply',
            'power': 'multiply by itself',
            'converge': 'approach a limit',
            'diverge': 'keep growing forever',
            'formula': 'math recipe',
            'substitute': 'replace with',
            'calculate': 'figure out',
            'logarithm': 'opposite of power',
            'geometric mean': 'the middle number in the pattern'
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
            'Given information': 'Write down all the numbers you know',
            'Write the formula': 'Draw the formula with empty boxes for numbers',
            'Calculate the power': 'Draw r multiplied by itself n-1 times',
            'Common ratio': 'Draw arrows between terms showing multiplication',
            'Check convergence': 'Draw terms getting smaller and smaller approaching a line',
            'Geometric mean': 'Draw the three terms in a sequence showing equal ratios'
        };

        return visualizations[step.step] || 'Draw a picture of what this step does';
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
        const category = this.geometricTypes[problemType]?.category || 'nth_term';
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

    // HELPER METHODS FOR ENHANCED EXPLANATIONS (adapted from linear workbook)

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Given information': 'We start by identifying what we know. In geometric sequences, we typically need the first term, common ratio, and position.',
            'Write the formula': 'The nth term formula aₙ = a₁ · r^(n-1) is fundamental because it lets us find any term directly without listing all previous terms.',
            'Calculate the power': 'The exponent (n-1) represents how many times we multiply by r. This is one less than n because we start with a₁.',
            'Common ratio': 'The common ratio is the multiplicative constant that defines the sequence. It determines whether the sequence grows, shrinks, or alternates.',
            'Check convergence condition': 'An infinite series can only have a finite sum if its terms approach zero. This happens when |r| < 1.',
            'Take logarithm': 'Logarithms convert multiplication to addition and exponentiation to multiplication, making exponential equations solvable.',
            'Geometric mean': 'The geometric mean maintains the same ratio pattern. For a, GM, b: a/GM = GM/b, so GM² = ab.'
        };

        return conceptualExplanations[step.step] || 'This step moves us closer to the solution by applying geometric sequence properties.';
    }

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Identify the operation: ${step.operation}
2. Apply it to both sides/all terms
3. Simplify the result
4. Continue to next step`;
        }
        if (step.calculation) {
            return `1. Set up the calculation
2. Perform the arithmetic
3. Simplify if needed
4. Record the result`;
        }
        return 'Follow the standard procedure for this type of step.';
    }

    getVisualExplanation(step, problem) {
        const category = this.geometricTypes[problem.type]?.category;
        
        const visualExplanations = {
            'nth_term': 'Picture each term as r times bigger (or smaller) than the previous. Multiplying by r is like zooming in or out.',
            'common_ratio': 'Visualize the sequence as points on an exponential curve. The ratio determines the steepness.',
            'sum': 'Imagine stacking blocks where each level has r times as many as the previous. The total is the sum.',
            'infinite_sum': 'Picture a shrinking sequence approaching but never quite reaching a limit line.',
            'applications': 'Graph the exponential growth or decay over time to see the pattern.'
        };

        return visualExplanations[category] || 'Visualize the geometric pattern in this step.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Write the formula': 'Geometric Sequence Formula: aₙ = a₁ · r^(n-1)',
            'Calculate the power': 'Exponent Laws: a^m means multiply a by itself m times',
            'Multiply by first term': 'Multiplication distributes over the power',
            'Common ratio': 'Definition: r = aₙ/aₙ₋₁ for all consecutive terms',
            'Take logarithm': 'Logarithm Property: log(a^b) = b·log(a)',
            'Check convergence': 'Convergence Theorem: Σar^n converges iff |r| < 1'
        };

        return algebraicRules[step.step] || 'Apply standard algebraic principles for geometric sequences.';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const level = this.difficultyLevels[explanationLevel] || this.difficultyLevels.intermediate;
        
        return {
            adaptedDescription: this.adaptLanguageLevel(step.description || step.step, level),
            adaptedReasoning: this.adaptLanguageLevel(step.reasoning || '', level),
            complexityLevel: explanationLevel
        };
    }

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                'geometric sequence': 'multiply pattern',
                'common ratio': 'multiply number',
                'exponent': 'power',
                'converge': 'approach a limit',
                'logarithm': 'log',
                'substitute': 'plug in'
            },
            intermediate: {
                'geometric sequence': 'geometric sequence',
                'common ratio': 'common ratio',
                'exponent': 'exponent',
                'converge': 'converge',
                'logarithm': 'logarithm'
            },
            ELI5: {
                'geometric sequence': 'a number pattern where you multiply by the same number each time',
                'common ratio': 'the number you multiply by',
                'exponent': 'how many times to multiply by itself',
                'converge': 'get closer and closer to a number',
                'logarithm': 'the opposite of power - it tells you what power gives you a number',
                'nth term': 'the number at position n',
                'first term': 'the starting number',
                'formula': 'a math recipe that always works'
            },
            detailed: {
                'geometric sequence': 'geometric sequence (sequence with constant multiplicative ratio)',
                'common ratio': 'common ratio (constant multiplicative factor)',
                'exponent': 'exponent (power to which base is raised)',
                'converge': 'converge (approach a finite limit)',
                'logarithm': 'logarithm (inverse of exponentiation)'
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
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || 'completed this step'}`,
            nextGoal: `Next, we need to: ${nextStep.description || nextStep.step}`,
            why: `This is necessary because: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase() || 'apply the next technique'}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return 'we need to continue working toward the solution';
    }

    explainStepBenefit(nextStep) {
        return 'bringing us closer to the final answer';
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Calculate the power': [
                'Remember exponent is (n-1), not n',
                'Use calculator for large powers',
                'Watch signs with negative ratios'
            ],
            'Common ratio': [
                'Always divide later term by earlier term',
                'Check ratio is consistent across all pairs',
                'Remember to divide, not subtract'
            ],
            'Check convergence': [
                'Must have |r| < 1 for convergence',
                'Check absolute value of r',
                'If |r| ≥ 1, sum doesn\'t exist'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check your arithmetic'];
    }

    generateCheckPoints(step) {
        return [
            'Have I used the correct formula?',
            'Are my calculations accurate?',
            'Does this result make sense?',
            'Am I moving toward the goal?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            nth_term: step.step === 'Calculate the power' ?
                ['Exponent is (n-1) not n', 'Large powers need calculator'] : [],
            common_ratio: step.step === 'Calculate ratio' ?
                ['Divide in correct order', 'Check consistency'] : [],
            infinite_sum: step.step === 'Check convergence' ?
                ['Must verify |r| < 1', 'No sum if |r| ≥ 1'] : []
        };

        const category = this.geometricTypes[problemType]?.category || 'nth_term';
        return warnings[category] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Given information': 'Do I have all the values I need?',
            'Write the formula': 'Is this the correct formula for what I\'m finding?',
            'Calculate the power': 'Did I use exponent (n-1)?',
            'Common ratio': 'Did I divide in the correct order?',
            'Check convergence': 'Is |r| < 1?',
            'Take logarithm': 'Did I apply log to both sides?'
        };

        return questions[step.step] || 'Does this step make sense?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Given information': 'Values for a₁, r, n, or other parameters',
            'Calculate the power': 'A number (possibly large) from exponentiating r',
            'Common ratio': 'A constant multiplicative factor',
            'Check convergence': 'Verification that |r| < 1 or notification it diverges',
            'Final answer': 'The value we were asked to find'
        };

        return expectations[step.step] || 'Progress toward solution';
    }

    generateTroubleshootingTips(step) {
        return [
            'Double-check your arithmetic',
            'Verify you used the correct formula',
            'Make sure all units/positions match',
            'Try a simpler example to verify method',
            'Review the previous step if confused'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Given information': [
                'What values do I know?',
                'What am I trying to find?',
                'Which formula applies?'
            ],
            'Calculate the power': [
                'What is the base?',
                'What is the exponent?',
                'Can I use a calculator?'
            ],
            'Common ratio': [
                'Which two terms should I divide?',
                'Am I dividing in the correct order?',
                'Is this ratio consistent?'
            ],
            'Check convergence': [
                'What is the value of r?',
                'Is |r| less than 1?',
                'What does this mean for the sum?'
            ]
        };

        return questions[step.step] || ['What is the goal?', 'How does this help?'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.geometricTypes[problem.type]?.category || 'nth_term';
        const hintSet = this.hints[category] || this.hints.nth_term;

        return {
            level1: hintSet.level1 || 'Think about what you\'re trying to find.',
            level2: hintSet.level2 || 'Consider which formula applies.',
            level3: hintSet.level3 || 'Substitute your values into the formula.',
            level4: hintSet.level4 || 'Calculate step by step.'
        };
    }

    breakIntoSubSteps(step) {
        if (step.calculation) {
            return [
                'Identify the values needed',
                'Set up the calculation',
                'Perform the arithmetic',
                'Simplify the result',
                'Verify it makes sense'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try a similar problem with different numbers',
            practiceHint: 'Start with simpler values to build confidence',
            extension: 'Once comfortable, try problems with fractions or larger numbers'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to find?',
            strategy: 'What method should I use?',
            execute: 'How do I carry out the calculation?',
            verify: 'Does my answer make sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which formula applies?',
            'Which values do I substitute where?',
            'Do I need to check any conditions?',
            'How should I verify my answer?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        return ['The chosen method is appropriate for this geometric sequence problem'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex}`,
            progression: 'We are getting closer to the solution',
            relationship: 'Each step simplifies the problem further'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.geometricTypes[problemType]?.category || 'nth_term';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic arithmetic', 'Understanding of sequences'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Given information': ['geometric sequence', 'first term', 'common ratio', 'term number'],
            'Write the formula': ['formula', 'nth term', 'exponent'],
            'Calculate the power': ['exponent', 'power', 'base'],
            'Common ratio': ['ratio', 'consecutive terms', 'constant'],
            'Take logarithm': ['logarithm', 'exponent', 'inverse'],
            'Check convergence': ['converge', 'diverge', 'absolute value', 'infinite']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'What do I need to identify before starting?',
            during: 'What should I be careful about while working?',
            after: 'How can I verify this is correct?'
        };
    }

    findRealWorldConnection(step, problem) {
        const connections = {
            'nth_term': 'Like predicting population after n generations of doubling',
            'common_ratio': 'Like finding the growth rate of an investment',
            'sum': 'Like calculating total distance of a bouncing ball',
            'infinite_sum': 'Like finding total area in a fractal pattern',
            'applications': 'Direct real-world application'
        };

        const category = this.geometricTypes[problem.type]?.category;
        return connections[category] || 'Geometric sequences model many exponential processes in nature and finance.';
    }

    // GRAPH GENERATION

    generateGeometricGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.geometricTypes[type]?.category;

        if (category && this.currentSolution.value !== null && this.currentSolution.value !== undefined) {
            this.graphData = this.generateSequenceGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateSequenceGraph(problem, solution) {
        const { a1, r } = problem.parameters;
        
        if (a1 === undefined || r === undefined) return null;

        // Generate first several terms for visualization
        const numTerms = 10;
        const terms = [];
        for (let n = 1; n <= numTerms; n++) {
            terms.push({
                n: n,
                value: a1 * Math.pow(r, n - 1)
            });
        }

        return {
            type: 'geometric_sequence',
            terms: terms,
            firstTerm: a1,
            commonRatio: r,
            pattern: Math.abs(r) > 1 ? 'growth' : Math.abs(r) < 1 ? 'decay' : 'constant',
            description: `Geometric sequence with a₁=${a1}, r=${r}`,
            graphType: 'discrete_exponential'
        };
    }

    // WORKBOOK GENERATION

    generateGeometricWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createGeometricLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createHistoricalContextSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Geometric Sequences and nth Term Mathematical Workbook',
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
            ['Problem Type', this.geometricTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.geometricTypes[this.currentProblem.type]?.category || 'geometric'],
            ['Description', this.currentProblem.scenario || this.geometricTypes[this.currentProblem.type]?.description],
            ['', ''],
            ['Given Parameters', '']
        ];

        // Add parameters
        for (const [key, value] of Object.entries(this.currentProblem.parameters)) {
            if (key !== 'sequenceTerms' && value !== undefined) {
                problemData.push([this.formatParameterName(key), value]);
            }
        }

        // Add sequence if present
        if (this.currentProblem.parameters.sequenceTerms) {
            problemData.push(['Sequence', this.currentProblem.parameters.sequenceTerms.join(', ')]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    formatParameterName(key) {
        const names = {
            'a1': 'First term (a₁)',
            'r': 'Common ratio (r)',
            'n': 'Term number (n)',
            'an': 'nth term value (aₙ)',
            'numMeans': 'Number of geometric means',
            'a': 'First value',
            'b': 'Second value',
            'principal': 'Principal (P)',
            'rate': 'Interest rate (r)',
            'time': 'Time (t)',
            'compoundsPerYear': 'Compounds per year (n)',
            'initialPopulation': 'Initial population (P₀)',
            'growthRate': 'Growth rate',
            'initialAmount': 'Initial amount (N₀)',
            'decayRate': 'Decay rate',
            'halfLife': 'Half-life (T₁/₂)'
        };
        return names[key] || key;
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.geometricTypes[this.currentProblem.type]?.category;
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

        this.solutionSteps.forEach((step) => {
            // Skip bridge steps in basic display
            if (step.stepType === 'bridge' && this.explanationLevel === 'basic') {
                return;
            }

            // Main step
            if (step.stepType === 'bridge') {
                stepsData.push(['→ Bridge', step.title]);
                stepsData.push(['Explanation', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description || step.step]);

            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
            } else if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.calculation) {
                stepsData.push(['Calculation', step.calculation]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.keyInsight) {
                stepsData.push(['Key Insight', step.keyInsight]);
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

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createGeometricLessonSection() {
        const { type } = this.currentProblem;
        const category = this.geometricTypes[type]?.category;
        const lesson = this.lessons[category] || this.lessons.geometric_sequences;

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        if (lesson.concepts) {
            lesson.concepts.forEach(concept => {
                lessonData.push(['•', concept]);
            });
        }

        lessonData.push(['', '']);
        lessonData.push(['Theory', lesson.theory || 'Geometric sequences model exponential patterns']);

        if (lesson.keyFormulas) {
            lessonData.push(['', '']);
            lessonData.push(['Key Formulas', '']);
            for (const [name, formula] of Object.entries(lesson.keyFormulas)) {
                lessonData.push([name, formula]);
            }
        }

        if (lesson.applications) {
            lessonData.push(['', '']);
            lessonData.push(['Applications', '']);
            lesson.applications.forEach(app => {
                lessonData.push(['•', app]);
            });
        }

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.error) {
            solutionData.push(['Error', this.currentSolution.error]);
            if (this.currentSolution.required) {
                solutionData.push(['Required', this.currentSolution.required]);
            }
            return {
                title: 'Solution',
                type: 'solution',
                data: solutionData
            };
        }

        if (this.currentSolution.type) {
            solutionData.push(['Solution Type', this.currentSolution.type]);
        }

        if (this.currentSolution.value !== null && this.currentSolution.value !== undefined) {
            solutionData.push(['Answer', this.currentSolution.value]);
        }

        if (this.currentSolution.formula) {
            solutionData.push(['Formula Used', this.currentSolution.formula]);
        }

        if (this.currentSolution.interpretation) {
            solutionData.push(['Interpretation', this.currentSolution.interpretation]);
        }

        if (this.currentSolution.converges !== undefined) {
            solutionData.push(['Converges', this.currentSolution.converges ? 'Yes' : 'No']);
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
            ['Category', this.geometricTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.method) {
            analysisData.push(['Method', this.currentSolution.method]);
        }

        if (this.currentProblem.parameters.r !== undefined) {
            const r = this.currentProblem.parameters.r;
            analysisData.push(['', '']);
            analysisData.push(['Pattern Analysis', '']);
            analysisData.push(['Common Ratio', r]);
            
            if (Math.abs(r) > 1) {
                analysisData.push(['Pattern Type', 'Growth (expanding)']);
                analysisData.push(['Behavior', 'Terms increase in magnitude']);
            } else if (Math.abs(r) < 1 && Math.abs(r) > 0) {
                analysisData.push(['Pattern Type', 'Decay (shrinking)']);
                analysisData.push(['Behavior', 'Terms decrease in magnitude']);
            } else if (Math.abs(r) === 1) {
                analysisData.push(['Pattern Type', 'Constant magnitude']);
                analysisData.push(['Behavior', r === 1 ? 'All terms equal' : 'Terms alternate']);
            }

            if (r < 0) {
                analysisData.push(['Sign Pattern', 'Alternating (due to negative ratio)']);
            } else {
                analysisData.push(['Sign Pattern', 'Consistent signs']);
            }
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution) return null;

        if (this.currentSolution.error) {
            return null; // No verification for errors
        }

        const verificationData = [
            ['Verification Method', 'Substitution and calculation check']
        ];

        if (this.currentSolution.verification) {
            verificationData.push(['', '']);
            verificationData.push(['Verification', this.currentSolution.verification]);
        }

        if (this.currentSolution.convergenceCheck) {
            verificationData.push(['', '']);
            verificationData.push(['Convergence Check', this.currentSolution.convergenceCheck]);
        }

        if (this.verificationDetail === 'detailed' && this.currentSolution.value !== undefined) {
            verificationData.push(['', '']);
            verificationData.push(['Confidence Level', 'High']);
            verificationData.push(['Solution Notes', 'Solution verified through direct calculation']);
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
            ['Real-World Applications of Geometric Sequences', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Formula', app.formula]);
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

        const notes = this.generateGeometricPedagogicalNotes(this.currentProblem.type);

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

    createHistoricalContextSection() {
        if (!this.includeHistoricalContext) return null;

        const historyData = [
            ['Historical Development of Geometric Sequences', ''],
            ['', '']
        ];

        for (const [key, context] of Object.entries(this.historicalContext)) {
            historyData.push([context.period, context.development]);
            historyData.push(['Significance', context.significance]);
            if (context.example) {
                historyData.push(['Example', context.example]);
            }
            historyData.push(['', '']);
        }

        return {
            title: 'Historical Context',
            type: 'historical',
            data: historyData
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateGeometricAlternativeMethods(this.currentProblem.type);

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
        const category = this.geometricTypes[this.currentProblem.type]?.category;
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

    generateGeometricPedagogicalNotes(problemType) {
        const category = this.geometricTypes[problemType]?.category;

        const pedagogicalDatabase = {
            nth_term: {
                objectives: [
                    'Calculate any term of a geometric sequence using the formula',
                    'Understand the role of exponent (n-1)',
                    'Apply the formula to real-world situations'
                ],
                keyConcepts: [
                    'Multiplicative pattern (not additive)',
                    'Exponent represents number of multiplications',
                    'Exponential growth or decay'
                ],
                prerequisites: [
                    'Understanding of exponents',
                    'Multiplication skills',
                    'Pattern recognition'
                ],
                commonDifficulties: [
                    'Using n instead of (n-1) as exponent',
                    'Sign errors with negative ratios',
                    'Calculation errors with large powers'
                ],
                teachingStrategies: [
                    'Start with small values of n to see pattern',
                    'Count multiplications from a₁ to aₙ',
                    'Use doubling/halving examples first',
                    'Emphasize r^(n-1) not r^n'
                ],
                extensions: [
                    'Geometric series and sums',
                    'Applications in finance',
                    'Exponential growth models'
                ],
                assessment: [
                    'Can student apply formula correctly?',
                    'Does student understand why exponent is (n-1)?',
                    'Can student work with negative ratios?'
                ]
            },
            common_ratio: {
                objectives: [
                    'Find common ratio from sequence terms',
                    'Verify sequence is geometric',
                    'Use ratio to find missing terms'
                ],
                keyConcepts: [
                    'Constant multiplicative factor',
                    'Ratio = later term ÷ earlier term',
                    'Consistency check'
                ],
                prerequisites: [
                    'Division skills',
                    'Understanding of ratios',
                    'Pattern recognition'
                ],
                commonDifficulties: [
                    'Dividing in wrong order',
                    'Confusing with arithmetic (subtraction)',
                    'Not checking consistency'
                ],
                teachingStrategies: [
                    'Practice with simple integer sequences',
                    'Always check multiple pairs',
                    'Compare to arithmetic sequences',
                    'Use physical models (doubling paper thickness)'
                ],
                extensions: [
                    'Non-integer ratios',
                    'Fractional and decimal ratios',
                    'Negative ratios and alternating sequences'
                ],
                assessment: [
                    'Can student find r correctly?',
                    'Does student verify consistency?',
                    'Can student distinguish geometric from arithmetic?'
                ]
            },
            sum: {
                objectives: [
                    'Calculate sum of finite geometric series',
                    'Choose appropriate formula variant',
                    'Understand formula derivation'
                ],
                keyConcepts: [
                    'Sum formula: S = a(r^n - 1)/(r - 1)',
                    'Special case when r = 1',
                    'Formula derived from self-similar structure'
                ],
                prerequisites: [
                    'Geometric sequences',
                    'Algebraic manipulation',
                    'Exponent calculations'
                ],
                commonDifficulties: [
                    'Using wrong form of formula',
                    'Sign errors in numerator/denominator',
                    'Forgetting r = 1 special case'
                ],
                teachingStrategies: [
                    'Derive formula using S - rS technique',
                    'Practice with r > 1 and r < 1 separately',
                    'Show both formula forms are equivalent',
                    'Use bouncing ball example'
                ],
                extensions: [
                    'Infinite geometric series',
                    'Applications to annuities',
                    'Fractals and self-similarity'
                ],
                assessment: [
                    'Can student choose correct formula?',
                    'Does student handle r = 1 case?',
                    'Can student derive the formula?'
                ]
            },
            infinite_sum: {
                objectives: [
                    'Determine if infinite series converges',
                    'Calculate sum of convergent series',
                    'Understand convergence condition'
                ],
                keyConcepts: [
                    'Convergence requires |r| < 1',
                    'Sum formula: S∞ = a/(1-r)',
                    'Limit concept'
                ],
                prerequisites: [
                    'Finite sums',
                    'Absolute value',
                    'Basic limit concept'
                ],
                commonDifficulties: [
                    'Not checking convergence condition',
                    'Misunderstanding why |r| < 1 needed',
                    'Thinking all series have sums'
                ],
                teachingStrategies: [
                    'Use Zeno\'s paradox example',
                    'Graph partial sums approaching limit',
                    'Show divergence when |r| ≥ 1',
                    'Use repeating decimals as examples'
                ],
                extensions: [
                    'Other infinite series',
                    'Present value calculations',
                    'Fractal perimeter/area problems'
                ],
                assessment: [
                    'Does student check |r| < 1 first?',
                    'Can student explain why convergence fails?',
                    'Can student apply formula correctly?'
                ]
            },
            applications: {
                objectives: [
                    'Model real situations with geometric sequences',
                    'Solve compound interest problems',
                    'Analyze growth and decay scenarios'
                ],
                keyConcepts: [
                    'Exponential models in nature',
                    'Compound interest formula',
                    'Growth factor vs growth rate'
                ],
                prerequisites: [
                    'Geometric sequence formulas',
                    'Percentages',
                    'Word problem translation'
                ],
                commonDifficulties: [
                    'Confusing growth rate and growth factor',
                    'Mixing up simple and compound interest',
                    'Unit conversion errors',
                    'Not identifying geometric pattern'
                ],
                teachingStrategies: [
                    'Start with concrete examples (money, population)',
                    'Distinguish rate (%) from factor (1+r)',
                    'Use timeline diagrams',
                    'Connect to exponential functions'
                ],
                extensions: [
                    'Continuous compounding',
                    'Depreciation schedules',
                    'Carbon dating',
                    'Viral spread models'
                ],
                assessment: [
                    'Can student identify geometric situations?',
                    'Does student set up correct model?',
                    'Can student interpret results in context?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Understand and apply geometric sequence concepts'],
            keyConcepts: ['Multiplicative pattern', 'Common ratio', 'Exponential behavior'],
            prerequisites: ['Basic algebra', 'Exponents'],
            commonDifficulties: ['Exponent errors', 'Sign errors'],
            teachingStrategies: ['Use concrete examples', 'Build from simple cases'],
            extensions: ['More complex applications'],
            assessment: ['Verify understanding of core concepts']
        };
    }

    generateGeometricAlternativeMethods(problemType) {
        const category = this.geometricTypes[problemType]?.category;

        const alternativeDatabase = {
            nth_term: {
                primaryMethod: 'Direct Formula: aₙ = a₁ · r^(n-1)',
                methods: [
                    {
                        name: 'Recursive Calculation',
                        description: 'Calculate each term from previous: a₂ = a₁·r, a₃ = a₂·r, etc.'
                    },
                    {
                        name: 'Pattern Extension',
                        description: 'List terms and extend pattern (works for small n)'
                    },
                    {
                        name: 'Logarithmic Approach',
                        description: 'Use log(aₙ) = log(a₁) + (n-1)log(r) for very large values'
                    }
                ],
                comparison: 'Direct formula is most efficient; recursive good for understanding; pattern extension limited to small n'
            },
            common_ratio: {
                primaryMethod: 'Division of Consecutive Terms',
                methods: [
                    {
                        name: 'Any Two Terms',
                        description: 'Use r = (aₙ/aₘ)^(1/(n-m)) for non-consecutive terms'
                    },
                    {
                        name: 'Visual Pattern',
                        description: 'Graph terms and estimate ratio from slope pattern'
                    },
                    {
                        name: 'Multiple Verification',
                        description: 'Calculate ratio for several pairs to ensure consistency'
                    }
                ],
                comparison: 'Consecutive division simplest; non-consecutive useful when terms missing; multiple checks ensure accuracy'
            },
            sum: {
                primaryMethod: 'Geometric Series Formula',
                methods: [
                    {
                        name: 'Direct Addition',
                        description: 'Calculate and add individual terms (works for small n)'
                    },
                    {
                        name: 'Formula Derivation',
                        description: 'Derive using S - rS = a₁ - a₁r^n technique'
                    },
                    {
                        name: 'Partial Sums',
                        description: 'Build table of partial sums to see pattern'
                    }
                ],
                comparison: 'Formula is most efficient for any n; direct addition limited; derivation aids understanding'
            },
            infinite_sum: {
                primaryMethod: 'Convergence Test then Formula',
                methods: [
                    {
                        name: 'Limit of Partial Sums',
                        description: 'Calculate Sₙ for increasing n, observe limit'
                    },
                    {
                        name: 'Graphical Approach',
                        description: 'Plot partial sums and see convergence visually'
                    },
                    {
                        name: 'Comparison Test',
                        description: 'Compare to known convergent/divergent series'
                    }
                ],
                comparison: 'Direct formula quickest when |r| < 1; limits approach shows why; graphing provides intuition'
            },
            term_position: {
                primaryMethod: 'Logarithmic Solution',
                methods: [
                    {
                        name: 'Trial and Error',
                        description: 'Test values of n until aₙ matches target (for small integers)'
                    },
                    {
                        name: 'Graphical Intersection',
                        description: 'Graph y = a₁·r^(x-1) and y = target, find intersection'
                    },
                    {
                        name: 'Recursive Search',
                        description: 'Generate terms until reaching or exceeding target'
                    }
                ],
                comparison: 'Logarithms required for exact solution; trial good for integer answers; graphing provides visualization'
            },
            applications: {
                primaryMethod: 'Model Identification then Formula Application',
                methods: [
                    {
                        name: 'Spreadsheet Modeling',
                        description: 'Build spreadsheet with recursive formulas to model situation'
                    },
                    {
                        name: 'Graphing Calculator',
                        description: 'Use graphing features to visualize exponential growth/decay'
                    },
                    {
                        name: 'Financial Calculator',
                        description: 'Use specialized functions for compound interest problems'
                    }
                ],
                comparison: 'Direct formulas most precise; spreadsheets aid exploration; calculators convenient for finance'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard geometric sequence approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods may apply depending on specific problem'
            }],
            comparison: 'Choose method based on problem structure and available tools'
        };
    }
}

// Export the class
export default EnhancedGeometricSequencesWorkbook;
