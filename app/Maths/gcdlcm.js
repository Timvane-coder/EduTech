// Enhanced GCD and LCM Calculations Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedGCDLCMathematicalWorkbook {
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
        this.initializeGCDLCMSolvers();
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
        this.initializeGCDLCMLessons();
        this.initializeHistoricalContext();
        this.initializeVisualizationDatabase();
    }

    initializeGCDLCMLessons() {
        this.lessons = {
            gcd_basics: {
                title: "Greatest Common Divisor (GCD) Fundamentals",
                concepts: [
                    "GCD is the largest number that divides both numbers evenly",
                    "Also called Greatest Common Factor (GCF)",
                    "Always a positive integer",
                    "GCD(a, b) ≤ min(a, b)",
                    "GCD(a, 0) = a for any non-zero a"
                ],
                theory: "The GCD represents the largest common measure of two or more numbers. It is fundamental in simplifying fractions, finding equivalent ratios, and solving number theory problems.",
                keyFormulas: {
                    "Definition": "GCD(a, b) = largest d such that d|a and d|b",
                    "Property 1": "GCD(a, b) = GCD(b, a)",
                    "Property 2": "GCD(a, b) = GCD(a - b, b) when a > b",
                    "Property 3": "GCD(ka, kb) = k × GCD(a, b)",
                    "Euclidean Algorithm": "GCD(a, b) = GCD(b, a mod b) when b ≠ 0"
                },
                methods: [
                    "Listing Factors Method",
                    "Prime Factorization Method",
                    "Euclidean Algorithm",
                    "Subtraction Method",
                    "Binary GCD Algorithm"
                ],
                applications: [
                    "Simplifying fractions to lowest terms",
                    "Finding equivalent ratios",
                    "Tiling and tessellation problems",
                    "Scheduling and cycle problems",
                    "Cryptography (RSA algorithm)"
                ]
            },

            lcm_basics: {
                title: "Least Common Multiple (LCM) Fundamentals",
                concepts: [
                    "LCM is the smallest number that both numbers divide into evenly",
                    "Always a positive integer",
                    "LCM(a, b) ≥ max(a, b)",
                    "LCM(a, 1) = a for any positive a",
                    "LCM relates to GCD: LCM(a,b) × GCD(a,b) = a × b"
                ],
                theory: "The LCM represents the smallest common measure that contains both numbers. It is essential for adding fractions, finding common denominators, and solving synchronization problems.",
                keyFormulas: {
                    "Definition": "LCM(a, b) = smallest m such that a|m and b|m",
                    "Property 1": "LCM(a, b) = LCM(b, a)",
                    "Property 2": "LCM(ka, kb) = k × LCM(a, b)",
                    "GCD-LCM Relationship": "LCM(a, b) = (a × b) / GCD(a, b)",
                    "For coprime numbers": "If GCD(a,b) = 1, then LCM(a,b) = a × b"
                },
                methods: [
                    "Listing Multiples Method",
                    "Prime Factorization Method",
                    "GCD Method (using relationship)",
                    "Ladder Method",
                    "Division Method"
                ],
                applications: [
                    "Adding and subtracting fractions",
                    "Finding common denominators",
                    "Event synchronization problems",
                    "Gear ratio calculations",
                    "Music theory (rhythm patterns)"
                ]
            },

            listing_factors: {
                title: "Listing Factors Method for GCD",
                concepts: [
                    "List all divisors of each number",
                    "Find common divisors",
                    "Select the greatest common divisor",
                    "Works well for small numbers",
                    "Can be tedious for large numbers"
                ],
                theory: "The listing method is intuitive and visual. It helps understand what divisibility means and builds number sense.",
                procedure: [
                    "List all factors of first number",
                    "List all factors of second number",
                    "Identify factors common to both lists",
                    "Choose the largest common factor"
                ],
                advantages: [
                    "Easy to understand",
                    "Visual and concrete",
                    "Good for teaching beginners",
                    "Reveals all common factors"
                ],
                disadvantages: [
                    "Time-consuming for large numbers",
                    "Easy to miss factors",
                    "Not efficient computationally",
                    "Impractical for very large numbers"
                ]
            },

            listing_multiples: {
                title: "Listing Multiples Method for LCM",
                concepts: [
                    "List multiples of each number",
                    "Find common multiples",
                    "Select the least common multiple",
                    "Works well for small numbers",
                    "Can require many multiples for large numbers"
                ],
                theory: "The listing method provides a direct approach to finding LCM by examining the multiplication tables of the given numbers.",
                procedure: [
                    "List multiples of first number",
                    "List multiples of second number",
                    "Identify multiples common to both lists",
                    "Choose the smallest common multiple"
                ],
                advantages: [
                    "Straightforward approach",
                    "Builds multiplication fluency",
                    "Good for small numbers",
                    "Shows multiple common multiples"
                ],
                disadvantages: [
                    "May need many multiples",
                    "Tedious for large numbers",
                    "Can miss the LCM if don't go far enough",
                    "Not efficient"
                ]
            },

            prime_factorization_gcd: {
                title: "Prime Factorization Method for GCD",
                concepts: [
                    "Express each number as product of primes",
                    "Identify common prime factors",
                    "Take lowest power of each common prime",
                    "Multiply these together for GCD",
                    "Very systematic and reliable"
                ],
                theory: "Every positive integer can be uniquely expressed as a product of prime numbers (Fundamental Theorem of Arithmetic). GCD uses common primes with minimum exponents.",
                procedure: [
                    "Find prime factorization of each number",
                    "Identify prime factors common to all numbers",
                    "For each common prime, take the smallest exponent",
                    "Multiply these prime powers together"
                ],
                advantages: [
                    "Systematic and organized",
                    "Works for any size numbers",
                    "Extends easily to more than 2 numbers",
                    "Shows structure of numbers"
                ],
                disadvantages: [
                    "Requires finding prime factorizations",
                    "Can be difficult for large numbers",
                    "Need to know how to factor"
                ]
            },

            prime_factorization_lcm: {
                title: "Prime Factorization Method for LCM",
                concepts: [
                    "Express each number as product of primes",
                    "Identify all prime factors from both numbers",
                    "Take highest power of each prime",
                    "Multiply these together for LCM",
                    "Very systematic and reliable"
                ],
                theory: "LCM uses all primes that appear in any number, taking the maximum exponent for each prime to ensure divisibility by all numbers.",
                procedure: [
                    "Find prime factorization of each number",
                    "List all prime factors that appear in any number",
                    "For each prime, take the largest exponent",
                    "Multiply these prime powers together"
                ],
                advantages: [
                    "Very systematic",
                    "Works for any numbers",
                    "Extends to multiple numbers easily",
                    "Clear and methodical"
                ],
                disadvantages: [
                    "Requires prime factorization",
                    "Can be challenging for large numbers",
                    "Multiple steps involved"
                ]
            },

            euclidean_algorithm: {
                title: "Euclidean Algorithm for GCD",
                concepts: [
                    "Ancient algorithm (300 BCE)",
                    "Based on repeated division",
                    "Very efficient, even for large numbers",
                    "Uses the property: GCD(a,b) = GCD(b, a mod b)",
                    "Continues until remainder is 0"
                ],
                theory: "The Euclidean Algorithm is one of the oldest algorithms still in common use. It's based on the principle that the GCD doesn't change when the larger number is replaced by its remainder when divided by the smaller number.",
                procedure: [
                    "Given two numbers a and b (a ≥ b)",
                    "Divide a by b, find remainder r",
                    "Replace a with b, b with r",
                    "Repeat until remainder is 0",
                    "The last non-zero remainder is the GCD"
                ],
                advantages: [
                    "Extremely efficient",
                    "Works for very large numbers",
                    "Fast computation",
                    "Proven to always work"
                ],
                disadvantages: [
                    "Less intuitive for beginners",
                    "Requires understanding of division algorithm",
                    "Can't directly find LCM without GCD relationship"
                ]
            },

            gcd_lcm_relationship: {
                title: "GCD-LCM Relationship",
                concepts: [
                    "Fundamental relationship: GCD(a,b) × LCM(a,b) = a × b",
                    "If you know GCD, you can find LCM",
                    "If you know LCM, you can find GCD",
                    "This relationship works for two numbers only",
                    "Very useful for efficiency"
                ],
                theory: "The product of two numbers equals the product of their GCD and LCM. This elegant relationship allows us to find one if we know the other.",
                keyFormulas: {
                    "Main Formula": "GCD(a,b) × LCM(a,b) = a × b",
                    "Find LCM": "LCM(a,b) = (a × b) / GCD(a,b)",
                    "Find GCD": "GCD(a,b) = (a × b) / LCM(a,b)"
                },
                applications: [
                    "Find LCM quickly after computing GCD",
                    "Verify calculations",
                    "Solve problems more efficiently",
                    "Understand number relationships"
                ],
                importantNotes: [
                    "Only works for exactly two numbers",
                    "For 3+ numbers, relationship is more complex",
                    "Both numbers must be positive"
                ]
            },

            multiple_numbers_gcd: {
                title: "GCD of Multiple Numbers",
                concepts: [
                    "GCD can be found for any quantity of numbers",
                    "Use associative property: GCD(a,b,c) = GCD(GCD(a,b), c)",
                    "Find GCD of pairs sequentially",
                    "Order doesn't matter",
                    "Result divides all original numbers"
                ],
                theory: "The GCD operation is associative, allowing us to find the GCD of multiple numbers by repeatedly finding the GCD of pairs.",
                procedure: [
                    "Find GCD of first two numbers",
                    "Find GCD of that result with third number",
                    "Continue with remaining numbers",
                    "Final result is GCD of all numbers"
                ],
                applications: [
                    "Simplifying multiple fractions simultaneously",
                    "Finding common measure for multiple quantities",
                    "Scaling problems with multiple dimensions"
                ]
            },

            multiple_numbers_lcm: {
                title: "LCM of Multiple Numbers",
                concepts: [
                    "LCM can be found for any quantity of numbers",
                    "Use associative property: LCM(a,b,c) = LCM(LCM(a,b), c)",
                    "Find LCM of pairs sequentially",
                    "Order doesn't matter",
                    "Result is divisible by all original numbers"
                ],
                theory: "Like GCD, the LCM operation is associative, enabling us to find the LCM of multiple numbers through sequential pairwise operations.",
                procedure: [
                    "Find LCM of first two numbers",
                    "Find LCM of that result with third number",
                    "Continue with remaining numbers",
                    "Final result is LCM of all numbers"
                ],
                applications: [
                    "Finding common denominator for multiple fractions",
                    "Synchronization of multiple cycles",
                    "Scheduling problems with multiple periods"
                ]
            },

            coprime_numbers: {
                title: "Coprime (Relatively Prime) Numbers",
                concepts: [
                    "Two numbers are coprime if GCD(a,b) = 1",
                    "Also called relatively prime or mutually prime",
                    "Don't need to be prime themselves",
                    "Share no common factors except 1",
                    "For coprime numbers: LCM(a,b) = a × b"
                ],
                theory: "Coprime numbers have no common prime factors. This special relationship simplifies many calculations and has important applications in number theory and cryptography.",
                examples: [
                    "8 and 15 are coprime (GCD = 1)",
                    "9 and 16 are coprime (GCD = 1)",
                    "6 and 9 are NOT coprime (GCD = 3)"
                ],
                properties: [
                    "If GCD(a,b) = 1, then LCM(a,b) = a × b",
                    "Consecutive integers are always coprime",
                    "Any prime p is coprime to all non-multiples of p"
                ],
                applications: [
                    "Fraction simplification",
                    "Cryptography (public key systems)",
                    "Modular arithmetic",
                    "Chinese Remainder Theorem"
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
            'times': '×',
            'div': '÷',
            'leq': '≤',
            'geq': '≥',
            'neq': '≠',
            'approx': '≈',
            'infinity': '∞',
            'plusminus': '±',
            'sqrt': '√',
            'prime': '′',
            'divides': '|',
            'notdivides': '∤',
            'equiv': '≡',
            'product': '∏',
            'sum': '∑'
        };
    }

    initializeGCDLCMSolvers() {
        this.gcdlcmTypes = {
            gcd_two_numbers: {
                patterns: [
                    /gcd.*(\d+).*(\d+)/i,
                    /greatest.*common.*divisor/i,
                    /gcf/i,
                    /hcf/i
                ],
                solver: this.solveGCDTwoNumbers.bind(this),
                name: 'GCD of Two Numbers',
                category: 'gcd',
                description: 'Find the greatest common divisor of two numbers'
            },

            lcm_two_numbers: {
                patterns: [
                    /lcm.*(\d+).*(\d+)/i,
                    /least.*common.*multiple/i,
                    /lowest.*common.*multiple/i
                ],
                solver: this.solveLCMTwoNumbers.bind(this),
                name: 'LCM of Two Numbers',
                category: 'lcm',
                description: 'Find the least common multiple of two numbers'
            },

            gcd_multiple_numbers: {
                patterns: [
                    /gcd.*(\d+.*\d+.*\d+)/i,
                    /greatest.*common.*divisor.*three/i
                ],
                solver: this.solveGCDMultipleNumbers.bind(this),
                name: 'GCD of Multiple Numbers',
                category: 'gcd',
                description: 'Find GCD of three or more numbers'
            },

            lcm_multiple_numbers: {
                patterns: [
                    /lcm.*(\d+.*\d+.*\d+)/i,
                    /least.*common.*multiple.*three/i
                ],
                solver: this.solveLCMMultipleNumbers.bind(this),
                name: 'LCM of Multiple Numbers',
                category: 'lcm',
                description: 'Find LCM of three or more numbers'
            },

            simplify_fraction: {
                patterns: [
                    /simplify.*(\d+)\/(\d+)/i,
                    /reduce.*fraction/i,
                    /lowest.*terms/i
                ],
                solver: this.solveSimplifyFraction.bind(this),
                name: 'Simplify Fraction using GCD',
                category: 'application',
                description: 'Reduce fraction to lowest terms'
            },

            find_common_denominator: {
                patterns: [
                    /common.*denominator/i,
                    /add.*fractions/i,
                    /lcd/i
                ],
                solver: this.solveFindCommonDenominator.bind(this),
                name: 'Find Common Denominator using LCM',
                category: 'application',
                description: 'Find LCD for adding fractions'
            },

            coprime_check: {
                patterns: [
                    /coprime/i,
                    /relatively.*prime/i,
                    /mutually.*prime/i
                ],
                solver: this.solveCoprime.bind(this),
                name: 'Check if Numbers are Coprime',
                category: 'special',
                description: 'Determine if GCD = 1'
            },

            word_problem_gcd: {
                patterns: [
                    /largest.*size/i,
                    /greatest.*length/i,
                    /biggest.*piece/i,
                    /tiles.*cover/i,
                    /arrange.*groups/i
                ],
                solver: this.solveWordProblemGCD.bind(this),
                name: 'GCD Word Problem',
                category: 'word_problem',
                description: 'Real-world problem requiring GCD'
            },

            word_problem_lcm: {
                patterns: [
                    /when.*next.*together/i,
                    /how.*often.*same.*time/i,
                    /meet.*again/i,
                    /cycle.*repeat/i
                ],
                solver: this.solveWordProblemLCM.bind(this),
                name: 'LCM Word Problem',
                category: 'word_problem',
                description: 'Real-world problem requiring LCM'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            gcd: {
                'Finding factors': [
                    'Missing some factors (especially middle factors)',
                    'Including 0 or negative factors',
                    'Not listing factors in order',
                    'Confusing factors with multiples'
                ],
                'Prime factorization': [
                    'Incomplete factorization (missing a prime)',
                    'Using composite numbers as "primes"',
                    'Incorrect exponents in prime factorization',
                    'Forgetting to multiply prime powers together'
                ],
                'Euclidean algorithm': [
                    'Arithmetic errors in division',
                    'Stopping too early (before remainder = 0)',
                    'Confusing which number is dividend/divisor',
                    'Taking wrong remainder as answer'
                ],
                'Selecting GCD': [
                    'Choosing a common factor that\'s not the greatest',
                    'Choosing least instead of greatest',
                    'Selecting a number that doesn\'t divide both'
                ]
            },
            lcm: {
                'Finding multiples': [
                    'Not listing enough multiples to find LCM',
                    'Arithmetic errors in multiplication',
                    'Confusing multiples with factors',
                    'Stopping at first common multiple that\'s not least'
                ],
                'Prime factorization': [
                    'Taking minimum exponent instead of maximum',
                    'Forgetting to include primes from second number',
                    'Multiplication errors when computing final LCM'
                ],
                'Using GCD relationship': [
                    'Using addition instead of multiplication: a + b',
                    'Forgetting to divide by GCD',
                    'Using wrong formula: a × b × GCD instead of a × b / GCD'
                ],
                'Selecting LCM': [
                    'Choosing greatest common multiple instead of least',
                    'Selecting a multiple that\'s not divisible by both',
                    'Choosing the product a × b when it\'s not the LCM'
                ]
            },
            general: {
                'Conceptual confusion': [
                    'Confusing GCD with LCM',
                    'Thinking GCD is always 1',
                    'Thinking LCM is always a × b',
                    'Believing GCD > LCM (impossible)'
                ],
                'Calculation errors': [
                    'Basic arithmetic mistakes',
                    'Division errors',
                    'Multiplication errors',
                    'Forgetting remainders'
                ]
            }
        };

        this.errorPrevention = {
            factor_listing: {
                reminder: 'List factors systematically in pairs: 1 and n, 2 and n/2, etc.',
                method: 'Use factor pairs to ensure you don\'t miss any'
            },
            prime_factorization: {
                reminder: 'Use factor trees and check that all branches end in primes',
                method: 'Verify: multiply all primes back together to get original number'
            },
            gcd_vs_lcm: {
                reminder: 'GCD ≤ both numbers; LCM ≥ both numbers',
                method: 'Check: does GCD divide both? Are both divisors of LCM?'
            },
            euclidean_algorithm: {
                reminder: 'Continue until remainder is exactly 0',
                method: 'Double-check each division step'
            },
            verification: {
                reminder: 'Always verify: GCD × LCM = a × b (for two numbers)',
                method: 'Check that GCD divides both and LCM is divisible by both'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Understanding what GCD/LCM means and why methods work',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Step-by-step instructions for calculations',
                language: 'clear algorithmic steps'
            },
            visual: {
                focus: 'Geometric and visual representations',
                language: 'visual metaphors and diagrams'
            },
            algebraic: {
                focus: 'Mathematical properties and formulas',
                language: 'precise mathematical notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'small numbers (single digit or teens)',
                methods: 'listing factors/multiples primarily'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'medium numbers (up to 100)',
                methods: 'prime factorization and listing'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every tiny step with analogies',
                examples: 'very small numbers with concrete objects',
                analogies: true,
                visualization: 'pictures and real objects'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive with all reasoning',
                examples: 'larger numbers, multiple methods',
                methods: 'all methods including Euclidean algorithm'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty',
                methods: 'build from concrete to abstract'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            tiling: {
                scenario: "Tiling a rectangular floor",
                requiresGCD: true,
                equation: "Find largest square tile size",
                examples: [
                    "A room is 24 ft by 36 ft. What's the largest square tile that fits without cutting?",
                    "Garden plot is 18m by 30m. Largest square section?"
                ],
                context: "GCD gives the largest square that tiles the rectangle perfectly",
                solution: "GCD(24, 36) = 12, so use 12ft × 12ft tiles"
            },

            scheduling: {
                scenario: "Events that repeat at different intervals",
                requiresLCM: true,
                equation: "Find when events coincide",
                examples: [
                    "Bus A comes every 12 min, Bus B every 18 min. When do they arrive together?",
                    "Planet A orbits every 8 days, Planet B every 12 days. When do they align?"
                ],
                context: "LCM tells when cycles synchronize",
                solution: "LCM(12, 18) = 36 minutes"
            },

            fraction_simplification: {
                scenario: "Reducing fractions to lowest terms",
                requiresGCD: true,
                equation: "Divide numerator and denominator by GCD",
                examples: [
                    "Simplify 24/36",
                    "Reduce 48/72 to lowest terms"
                ],
                context: "GCD of numerator and denominator gives reduction factor",
                solution: "24/36 = (24÷12)/(36÷12) = 2/3"
            },

            fraction_addition: {
                scenario: "Adding fractions with different denominators",
                requiresLCM: true,
                equation: "Find common denominator using LCM",
                examples: [
                    "Add 1/4 + 1/6",
                    "What is 2/3 + 3/4?"
                ],
                context: "LCM of denominators gives least common denominator",
                solution: "1/4 + 1/6 = 3/12 + 2/12 = 5/12, where LCD = LCM(4,6) = 12"
            },

            cutting_ribbons: {
                scenario: "Cutting materials into equal pieces",
                requiresGCD: true,
                equation: "Find longest piece that divides evenly",
                examples: [
                    "Two ribbons: 30cm and 45cm. Cut into equal longest pieces. What length?",
                    "Ropes of 24m and 36m. Longest equal segments?"
                ],
                context: "GCD gives the longest piece that divides all materials evenly",
                solution: "GCD(30, 45) = 15cm pieces"
            },

            alarm_synchronization: {
                scenario: "Multiple alarms or signals",
                requiresLCM: true,
                equation: "Find when all alarms sound together",
                examples: [
                    "Alarm A every 15 sec, Alarm B every 20 sec, Alarm C every 30 sec. When do all sound together?",
                    "Traffic lights: one changes every 40 sec, another every 60 sec. When both green?"
                ],
                context: "LCM tells when all cycles align",
                solution: "LCM(15, 20, 30) = 60 seconds"
            },

            group_arrangement: {
                scenario: "Arranging items into equal groups",
                requiresGCD: true,
                equation: "Find largest equal group size",
                examples: [
                    "24 apples and 36 oranges. Make identical gift bags. Max fruits per bag?",
                    "18 red flowers, 24 yellow flowers. Equal bouquets. Max flowers per bouquet?"
                ],
                context: "GCD determines largest group size that uses all items",
                solution: "GCD(24, 36) = 12, so 12 items per group"
            },

            gear_teeth: {
                scenario: "Gear rotations and synchronization",
                requiresLCM: true,
                equation: "Find when gears return to starting position",
                examples: [
                    "Gear A has 16 teeth, Gear B has 24 teeth. After how many teeth will they align again?",
                    "Wheels with 10 and 15 spokes. When do marked spokes align?"
                ],
                context: "LCM determines synchronization point",
                solution: "LCM(16, 24) = 48 teeth"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            gcd_listing: {
                skills: ['Finding factors', 'Division', 'Multiplication'],
                priorKnowledge: ['Divisibility', 'What factors are', 'Systematic listing'],
                checkQuestions: [
                    "What are the factors of 12?",
                    "Is 12 divisible by 5?",
                    "What does 'factor' mean?"
                ]
            },
            lcm_listing: {
                skills: ['Finding multiples', 'Multiplication', 'Skip counting'],
                priorKnowledge: ['What multiples are', 'Multiplication tables', 'Comparing numbers'],
                checkQuestions: [
                    "What are the first 5 multiples of 4?",
                    "What does 'multiple' mean?",
                    "Is 20 a multiple of 4?"
                ]
            },
            prime_factorization: {
                skills: ['Identifying prime numbers', 'Division', 'Factor trees'],
                priorKnowledge: ['Prime vs composite', 'Division', 'Exponents'],
                checkQuestions: [
                    "Is 7 prime or composite?",
                    "What is the prime factorization of 12?",
                    "What does 2³ mean?"
                ]
            },
            euclidean_algorithm: {
                skills: ['Division algorithm', 'Finding remainders', 'Iterative processes'],
                priorKnowledge: ['Division with remainders', 'When to stop iterating'],
                checkQuestions: [
                    "What is 17 ÷ 5 with remainder?",
                    "What is 17 mod 5?",
                    "What does 'algorithm' mean?"
                ]
            },
            gcd_lcm_relationship: {
                skills: ['Multiplication', 'Division', 'Understanding GCD and LCM'],
                priorKnowledge: ['GCD concept', 'LCM concept', 'Formula: GCD × LCM = a × b'],
                checkQuestions: [
                    "If GCD(6,8) = 2, what could LCM(6,8) be?",
                    "How are GCD and LCM related?",
                    "Can GCD be larger than LCM?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            factor_diagram: {
                description: "Visual representation of all factors",
                analogy: "Like family tree showing all ancestors",
                visualization: "Factor rainbow or factor pairs",
                suitableFor: ['gcd_listing'],
                explanation: "Organize factors in pairs that multiply to give the number"
            },
            venn_diagram: {
                description: "Overlapping circles showing common factors/multiples",
                analogy: "Like two groups of friends finding common members",
                visualization: "Two circles with overlap for common elements",
                suitableFor: ['gcd', 'lcm'],
                explanation: "Intersection shows common factors; union shows relationship"
            },
            number_line: {
                description: "Mark multiples on a number line",
                analogy: "Like train stops on a track",
                visualization: "Number line with multiples marked",
                suitableFor: ['lcm_listing'],
                explanation: "First common mark is the LCM"
            },
            factor_tree: {
                description: "Tree diagram for prime factorization",
                analogy: "Like breaking down ingredients in a recipe",
                visualization: "Branching tree ending in prime numbers",
                suitableFor: ['prime_factorization'],
                explanation: "Keep dividing until all branches end in primes"
            },
            array_model: {
                description: "Rectangular arrays showing dimensions",
                analogy: "Like arranging chairs in rows and columns",
                visualization: "Grid of objects",
                suitableFor: ['gcd', 'word_problems'],
                explanation: "GCD represents largest square arrangement possible"
            },
            euclidean_visual: {
                description: "Visual representation of repeated subtraction",
                analogy: "Like measuring with a ruler to find common unit",
                visualization: "Line segments showing divisions",
                suitableFor: ['euclidean_algorithm'],
                explanation: "Repeatedly remove smaller from larger until match"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Find GCD(12, 18)",
                    numbers: [12, 18],
                    type: 'gcd',
                    method: 'listing',
                    solution: 6,
                    steps: [
                        "Factors of 12: 1, 2, 3, 4, 6, 12",
                        "Factors of 18: 1, 2, 3, 6, 9, 18",
                        "Common factors: 1, 2, 3, 6",
                        "Greatest: 6"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Find LCM(4, 6)",
                    numbers: [4, 6],
                    type: 'lcm',
                    method: 'listing',
                    solution: 12,
                    steps: [
                        "Multiples of 4: 4, 8, 12, 16, 20...",
                        "Multiples of 6: 6, 12, 18, 24...",
                        "Common multiples: 12, 24, 36...",
                        "Least: 12"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Find GCD(8, 12)",
                    numbers: [8, 12],
                    type: 'gcd',
                    method: 'listing',
                    solution: 4,
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Find GCD(48, 72) using prime factorization",
                    numbers: [48, 72],
                    type: 'gcd',
                    method: 'prime_factorization',
                    solution: 24,
                    steps: [
                        "48 = 2⁴ × 3¹",
                        "72 = 2³ × 3²",
                        "GCD: take minimum exponents",
                        "GCD = 2³ × 3¹ = 8 × 3 = 24"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Find LCM(15, 20) using prime factorization",
                    numbers: [15, 20],
                    type: 'lcm',
                    method: 'prime_factorization',
                    solution: 60,
                    steps: [
                        "15 = 3 × 5",
                        "20 = 2² × 5",
                        "LCM: take maximum exponents of all primes",
                        "LCM = 2² × 3 × 5 = 4 × 3 × 5 = 60"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Find LCM(12, 18) using GCD relationship",
                    numbers: [12, 18],
                    type: 'lcm',
                    method: 'gcd_relationship',
                    solution: 36,
                    steps: [
                        "First find GCD(12, 18) = 6",
                        "Use formula: LCM = (a × b) / GCD",
                        "LCM = (12 × 18) / 6",
                        "LCM = 216 / 6 = 36"
                    ],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Find GCD(252, 105) using Euclidean Algorithm",
                    numbers: [252, 105],
                    type: 'gcd',
                    method: 'euclidean',
                    solution: 21,
                    steps: [
                        "252 = 105 × 2 + 42",
                        "105 = 42 × 2 + 21",
                        "42 = 21 × 2 + 0",
                        "GCD = 21 (last non-zero remainder)"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Find GCD(12, 18, 24)",
                    numbers: [12, 18, 24],
                    type: 'gcd',
                    method: 'multiple',
                    solution: 6,
                    steps: [
                        "GCD(12, 18) = 6",
                        "GCD(6, 24) = 6",
                        "GCD(12, 18, 24) = 6"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "Find LCM(8, 12, 15)",
                    numbers: [8, 12, 15],
                    type: 'lcm',
                    method: 'multiple',
                    solution: 120,
                    steps: [
                        "8 = 2³, 12 = 2² × 3, 15 = 3 × 5",
                        "LCM: max exponents of all primes",
                        "LCM = 2³ × 3 × 5 = 8 × 3 × 5 = 120"
                    ],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                listing: [
                    { problem: "GCD(6, 9)", solution: 3, type: 'gcd' },
                    { problem: "LCM(3, 5)", solution: 15, type: 'lcm' },
                    { problem: "GCD(10, 15)", solution: 5, type: 'gcd' }
                ],
                prime_factorization: [
                    { problem: "GCD(24, 36)", solution: 12, type: 'gcd' },
                    { problem: "LCM(14, 21)", solution: 42, type: 'lcm' },
                    { problem: "GCD(30, 45)", solution: 15, type: 'gcd' }
                ],
                euclidean: [
                    { problem: "GCD(48, 18)", solution: 6, type: 'gcd' },
                    { problem: "GCD(100, 35)", solution: 5, type: 'gcd' },
                    { problem: "GCD(144, 60)", solution: 12, type: 'gcd' }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            gcd_always_small: {
                misconception: "GCD is always a small number like 1 or 2",
                reality: "GCD can be as large as the smaller number",
                correctiveExample: "GCD(12, 24) = 12, which equals the smaller number",
                commonIn: ['all_gcd']
            },
            lcm_always_product: {
                misconception: "LCM is always the product of the two numbers",
                reality: "LCM equals a × b only when numbers are coprime",
                correctiveExample: "LCM(4, 6) = 12, not 24. But LCM(3, 5) = 15 = 3 × 5 (coprime)",
                commonIn: ['all_lcm']
            },
            confusing_gcd_lcm: {
                misconception: "Mixing up which is greater/least and common divisor/multiple",
                reality: "GCD ≤ both numbers; LCM ≥ both numbers",
                correctiveExample: "For 12 and 18: GCD = 6 (smaller), LCM = 36 (larger)",
                commonIn: ['all']
            },
            factors_vs_multiples: {
                misconception: "Confusing factors (divide into) with multiples (multiply by)",
                reality: "Factors divide the number; multiples are divided by the number",
                correctiveExample: "Factors of 12: 1,2,3,4,6,12. Multiples of 12: 12,24,36,48...",
                commonIn: ['listing']
            },
            prime_factorization_confusion: {
                misconception: "For GCD, taking maximum exponents instead of minimum",
                reality: "GCD uses minimum exponents; LCM uses maximum",
                correctiveExample: "48=2⁴×3, 72=2³×3²: GCD takes 2³×3¹ (min), LCM takes 2⁴×3² (max)",
                commonIn: ['prime_factorization']
            },
            euclidean_stopping: {
                misconception: "Stopping Euclidean algorithm before remainder is 0",
                reality: "Continue until remainder is exactly 0; previous remainder is GCD",
                correctiveExample: "Don't stop at small remainder; continue until 0",
                commonIn: ['euclidean_algorithm']
            },
            one_is_not_prime: {
                misconception: "Including 1 as a prime number",
                reality: "1 is neither prime nor composite by definition",
                correctiveExample: "Primes start at 2: 2, 3, 5, 7, 11, 13...",
                commonIn: ['prime_factorization']
            },
            relationship_formula: {
                misconception: "Using GCD × LCM = a + b instead of a × b",
                reality: "The relationship is GCD × LCM = a × b (multiplication, not addition)",
                correctiveExample: "For 6 and 8: GCD(6,8)×LCM(6,8) = 2×24 = 48 = 6×8 ✓",
                commonIn: ['gcd_lcm_relationship']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            gcd_measurement: {
                analogy: "Finding the largest measuring stick",
                explanation: "GCD is like finding the largest measuring stick that can measure both lengths exactly without any leftover",
                suitableFor: ['gcd'],
                ELI5: "Imagine you have two ropes. GCD is the longest piece you can cut that will measure both ropes exactly, with no extra bits left over"
            },
            lcm_cycles: {
                analogy: "Finding when runners lap together",
                explanation: "LCM is like finding when two runners who run at different speeds will cross the starting line at the same time again",
                suitableFor: ['lcm'],
                ELI5: "If one friend visits every 3 days and another every 4 days, LCM tells you when they'll both visit on the same day"
            },
            factors_divisors: {
                analogy: "Numbers that share equally",
                explanation: "Factors are like ways to share things equally. 12 cookies can be shared among 1, 2, 3, 4, 6, or 12 people equally",
                suitableFor: ['gcd', 'factors'],
                ELI5: "Factors are the different ways you can split something into equal groups with nothing left over"
            },
            multiples_skip_counting: {
                analogy: "Skip counting or hopping",
                explanation: "Multiples are like landing spots when you skip count or hop by the same number each time",
                suitableFor: ['lcm', 'multiples'],
                ELI5: "If you hop by 3s (3, 6, 9, 12...) and someone else hops by 4s (4, 8, 12, 16...), you both land on 12!"
            },
            prime_factorization_building_blocks: {
                analogy: "Finding the basic building blocks",
                explanation: "Prime factorization is like breaking down a LEGO creation into individual bricks - you can't break primes down any further",
                suitableFor: ['prime_factorization'],
                ELI5: "It's like finding out what basic ingredients were used to make a cake - the ingredients are prime numbers"
            },
            euclidean_algorithm_measurement: {
                analogy: "Repeatedly measuring and cutting",
                explanation: "Like measuring a long board with a shorter one, cutting off what you measured, then measuring what's left",
                suitableFor: ['euclidean_algorithm'],
                ELI5: "Imagine using a small ruler to measure a big stick. Each time, you see how many times it fits, then measure what's left over with what fit before"
            },
            coprime_no_common_factors: {
                analogy: "Strangers with nothing in common",
                explanation: "Coprime numbers are like two people who don't share any mutual friends (except everyone knows '1')",
                suitableFor: ['coprime'],
                ELI5: "Two numbers are coprime when they don't share any factors except 1, like 8 and 15 - they have no common factors to divide them both"
            },
            tiling_floor: {
                analogy: "Tiling with largest square",
                explanation: "GCD is the size of the largest square tile that can cover a rectangular floor without cutting tiles",
                suitableFor: ['gcd', 'word_problems'],
                ELI5: "If you have a rectangle, GCD tells you the biggest square tile you can use to cover it perfectly"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            gcd_listing: {
                level1: "What are factors? Can you list them?",
                level2: "List all numbers that divide evenly into each number",
                level3: "Find factors both numbers share, then pick the greatest",
                level4: "Factors of {a}: {factors_a}. Factors of {b}: {factors_b}. Common: {common}. Greatest: {gcd}"
            },
            lcm_listing: {
                level1: "What are multiples? Can you list them?",
                level2: "List products: 1×number, 2×number, 3×number, etc.",
                level3: "Find multiples both numbers share, then pick the least",
                level4: "Multiples of {a}: {multiples_a}. Multiples of {b}: {multiples_b}. Least common: {lcm}"
            },
            prime_factorization_gcd: {
                level1: "Can you break each number into prime factors?",
                level2: "Use factor trees to find prime factorizations",
                level3: "For each common prime, take the smallest exponent",
                level4: "{a} = {factorization_a}, {b} = {factorization_b}. GCD = {gcd_factorization}"
            },
            prime_factorization_lcm: {
                level1: "Can you break each number into prime factors?",
                level2: "Use factor trees to find prime factorizations",
                level3: "For each prime (from either number), take the largest exponent",
                level4: "{a} = {factorization_a}, {b} = {factorization_b}. LCM = {lcm_factorization}"
            },
            euclidean_algorithm: {
                level1: "Do you know how to find remainders when dividing?",
                level2: "Divide the larger by smaller, find remainder, then repeat",
                level3: "Keep dividing until remainder is 0; previous remainder is GCD",
                level4: "{a} ÷ {b} = {quotient} R {remainder}. Continue with {b} and {remainder}..."
            },
            gcd_lcm_relationship: {
                level1: "Do you know the formula connecting GCD and LCM?",
                level2: "GCD × LCM = a × b for two numbers",
                level3: "If you know GCD, you can find LCM: LCM = (a × b) / GCD",
                level4: "GCD({a},{b}) = {gcd}, so LCM = ({a}×{b})/{gcd} = {lcm}"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Find GCD(12, 18)",
                    answer: 6,
                    assesses: "gcd_basic",
                    difficulty: "basic"
                },
                {
                    question: "Find LCM(4, 6)",
                    answer: 12,
                    assesses: "lcm_basic",
                    difficulty: "basic"
                },
                {
                    question: "Find GCD(24, 36) using prime factorization",
                    answer: 12,
                    assesses: "gcd_intermediate",
                    difficulty: "intermediate"
                },
                {
                    question: "Find LCM(15, 20)",
                    answer: 60,
                    assesses: "lcm_intermediate",
                    difficulty: "intermediate"
                },
                {
                    question: "Use Euclidean algorithm to find GCD(48, 18)",
                    answer: 6,
                    assesses: "gcd_advanced",
                    difficulty: "advanced"
                }
            ],
            formative: [
                {
                    question: "Which is larger: GCD(12,18) or LCM(12,18)?",
                    options: ["GCD", "LCM", "Same", "Cannot determine"],
                    correct: "LCM",
                    explanation: "LCM is always ≥ both numbers; GCD is always ≤ both numbers"
                },
                {
                    question: "If GCD(a,b) = 1, what can we say about a and b?",
                    options: ["They're both prime", "They're coprime", "They're equal", "One divides the other"],
                    correct: "They're coprime",
                    explanation: "GCD = 1 means coprime (relatively prime)"
                },
                {
                    question: "For GCD using prime factorization, do we take minimum or maximum exponents?",
                    options: ["Minimum", "Maximum", "Average", "Sum"],
                    correct: "Minimum",
                    explanation: "GCD uses minimum exponents of common primes"
                },
                {
                    question: "For LCM using prime factorization, do we take minimum or maximum exponents?",
                    options: ["Minimum", "Maximum", "Average", "Sum"],
                    correct: "Maximum",
                    explanation: "LCM uses maximum exponents of all primes"
                },
                {
                    question: "What is the relationship between GCD and LCM for two numbers?",
                    options: ["GCD + LCM = a + b", "GCD × LCM = a × b", "GCD - LCM = a - b", "No relationship"],
                    correct: "GCD × LCM = a × b",
                    explanation: "Fundamental relationship: GCD(a,b) × LCM(a,b) = a × b"
                }
            ],
            summative: [
                {
                    question: "Find GCD(180, 234) using the method of your choice. Show all work.",
                    answer: 18,
                    showsWork: true,
                    rubric: {
                        correct_method: 2,
                        correct_process: 2,
                        correct_answer: 1
                    }
                },
                {
                    question: "Find LCM(12, 18, 24). Show all work.",
                    answer: 72,
                    showsWork: true,
                    rubric: {
                        handles_three_numbers: 2,
                        correct_method: 2,
                        correct_answer: 1
                    }
                },
                {
                    question: "Two buses leave at 6 AM. One returns every 40 min, the other every 60 min. When do they both arrive together again?",
                    answer: "8:00 AM (120 minutes later)",
                    showsWork: true,
                    rubric: {
                        identifies_lcm_problem: 1,
                        finds_lcm: 2,
                        interprets_answer: 2
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "GCD(6, 9)",
                    "LCM(2, 3)",
                    "GCD(10, 15)",
                    "LCM(4, 5)",
                    "GCD(8, 12)"
                ],
                medium: [
                    "GCD(24, 36)",
                    "LCM(15, 20)",
                    "GCD(48, 72)",
                    "LCM(12, 18)",
                    "GCD(30, 45)"
                ],
                hard: [
                    "GCD(252, 105) using Euclidean algorithm",
                    "LCM(8, 12, 15)",
                    "GCD(144, 180, 240)",
                    "LCM(14, 21, 35)",
                    "Find GCD(1001, 385)"
                ]
            },
            byObjective: {
                canFindGCDListing: [
                    "GCD(12, 18)",
                    "GCD(20, 30)",
                    "GCD(15, 25)"
                ],
                canFindLCMListing: [
                    "LCM(3, 4)",
                    "LCM(5, 6)",
                    "LCM(4, 10)"
                ],
                canUsePrimeFactorization: [
                    "GCD(36, 48) using prime factorization",
                    "LCM(18, 24) using prime factorization",
                    "GCD(60, 84) by prime factors"
                ],
                canUseEuclidean: [
                    "GCD(91, 35) using Euclidean algorithm",
                    "GCD(144, 89) by Euclidean method",
                    "GCD(270, 192) using repeated division"
                ],
                canSolveWordProblems: [
                    "Floor is 24ft by 36ft. Largest square tile?",
                    "Events repeat every 12 and 18 days. When do they coincide?",
                    "Cut 30cm and 45cm ribbons into equal pieces. Longest piece length?"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "small_numbers_under_20": "Use listing factors/multiples method",
                "medium_numbers_20_to_100": "Use prime factorization or listing",
                "large_numbers_over_100": "Use Euclidean algorithm for GCD; use GCD relationship for LCM",
                "three_or_more_numbers": "Use prime factorization or sequential pairwise GCD/LCM",
                "word_problem": "Identify if asking for largest that divides (GCD) or smallest divisible by both (LCM)"
            },
            whenToUseWhat: {
                listing_method: "Small numbers, teaching beginners, seeing all factors/multiples",
                prime_factorization: "Medium numbers, multiple numbers, seeing structure",
                euclidean_algorithm: "Large numbers, most efficient for GCD",
                gcd_relationship: "Finding LCM when GCD is known or easier to find"
            },
            methodSelection: {
                factorsToConsider: [
                    "Size of numbers (small, medium, large)",
                    "Number of values (two vs. three or more)",
                    "Whether finding GCD or LCM",
                    "Your comfort with different methods",
                    "Need for efficiency vs. understanding"
                ],
                gcdApproach: [
                    "Small numbers: listing factors",
                    "Medium numbers: prime factorization",
                    "Large numbers: Euclidean algorithm",
                    "Multiple numbers: prime factorization or sequential GCD"
                ],
                lcmApproach: [
                    "Small numbers: listing multiples",
                    "Medium/large numbers: prime factorization or use LCM = (a×b)/GCD(a,b)",
                    "Multiple numbers: prime factorization"
                ]
            },
            optimizationTips: {
                "List factors in pairs": "1 and n, 2 and n/2, etc. - more efficient",
                "Check divisibility rules": "Before listing, use divisibility rules to identify factors quickly",
                "Use known primes": "Memorize primes up to 30: 2,3,5,7,11,13,17,19,23,29",
                "Verify with relationship": "Check GCD × LCM = a × b to verify both answers",
                "Start Euclidean with larger number": "Makes division cleaner"
            },
            wordProblemStrategy: {
                gcdKeywords: ["largest", "greatest", "maximum", "biggest", "cut into equal pieces", "arrange in equal groups"],
                lcmKeywords: ["least", "smallest", "minimum", "next time together", "when will they meet", "synchronize"],
                approach: [
                    "Read problem carefully",
                    "Identify what's being asked (largest or smallest, divisor or multiple)",
                    "Determine if GCD or LCM",
                    "Solve using appropriate method",
                    "Interpret answer in context"
                ]
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "GCD Sprint - Easy",
                    timeLimit: 90,
                    problems: [
                        { problem: "GCD(6, 9)", answer: 3 },
                        { problem: "GCD(10, 15)", answer: 5 },
                        { problem: "GCD(8, 12)", answer: 4 },
                        { problem: "GCD(14, 21)", answer: 7 },
                        { problem: "GCD(12, 18)", answer: 6 }
                    ]
                },
                {
                    name: "LCM Sprint - Easy",
                    timeLimit: 90,
                    problems: [
                        { problem: "LCM(2, 3)", answer: 6 },
                        { problem: "LCM(4, 5)", answer: 20 },
                        { problem: "LCM(3, 6)", answer: 6 },
                        { problem: "LCM(4, 6)", answer: 12 },
                        { problem: "LCM(5, 10)", answer: 10 }
                    ]
                },
                {
                    name: "Mixed Challenge",
                    timeLimit: 120,
                    problems: [
                        { problem: "GCD(24, 36)", answer: 12 },
                        { problem: "LCM(12, 15)", answer: 60 },
                        { problem: "GCD(30, 45)", answer: 15 },
                        { problem: "LCM(8, 12)", answer: 24 }
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Numbers",
                    problem: "Two numbers have GCD = 6 and LCM = 72. What are they?",
                    hint: "Use GCD × LCM = a × b",
                    solution: "Possible pairs: (6, 72), (12, 36), (18, 24)",
                    explanation: "6 × 72 = 432 = a × b, so find factor pairs of 432 where GCD = 6"
                },
                {
                    name: "Coprime Challenge",
                    problem: "Find three consecutive numbers that are all coprime to each other",
                    hint: "Think about properties of consecutive numbers",
                    solution: "Any three consecutive numbers work! Example: 5, 6, 7",
                    explanation: "Consecutive integers are always coprime in pairs"
                },
                {
                    name: "Pattern Recognition",
                    problem: "Find the pattern: GCD(10,15)=5, GCD(20,30)=10, GCD(30,45)=15. What's GCD(40,60)?",
                    solution: "20",
                    explanation: "Each pair scales by same factor; GCD scales proportionally"
                },
                {
                    name: "Reverse Engineering",
                    problem: "LCM(a, 12) = 60. What could 'a' be?",
                    solution: "a could be 3, 4, 5, 15, 20, or 60",
                    explanation: "a must divide 60 and have LCM with 12 equal to 60"
                }
            ],
            applications: [
                {
                    scenario: "Gear Synchronization",
                    problem: "Gear A has 18 teeth, Gear B has 24 teeth. After how many teeth will the same teeth mesh again?",
                    requiresLCM: true,
                    solution: "LCM(18, 24) = 72 teeth"
                },
                {
                    scenario: "Tile Pattern",
                    problem: "Floor is 72 inches by 96 inches. What's the largest square tile (in inches) that fits without cutting?",
                    requiresGCD: true,
                    solution: "GCD(72, 96) = 24 inches"
                },
                {
                    scenario: "Meeting Schedule",
                    problem: "Alice visits library every 8 days, Bob every 12 days. If both visit today, when will they both visit again together?",
                    requiresLCM: true,
                    solution: "LCM(8, 12) = 24 days from today"
                },
                {
                    scenario: "Cookie Distribution",
                    problem: "You have 48 chocolate chip and 60 oatmeal cookies. Make identical gift bags with maximum cookies per bag. How many cookies in each bag?",
                    requiresGCD: true,
                    solution: "GCD(48, 60) = 12 cookies per bag (4 chocolate, 5 oatmeal)"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Find GCD(24, 36)",
                        "24 = 2³ × 3",
                        "36 = 2² × 3²",
                        "GCD = 2³ × 3² = 72",  // ERROR: used maximum instead of minimum
                    ],
                    correctAnswer: "GCD = 2² × 3 = 12",
                    errorType: "Used maximum exponents instead of minimum (confused with LCM method)"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Find LCM(12, 18)",
                        "GCD(12, 18) = 6",
                        "LCM = 12 + 18 = 30",  // ERROR: added instead of using formula
                    ],
                    correctAnswer: "LCM = (12 × 18) / 6 = 36",
                    errorType: "Used addition instead of (a × b) / GCD formula"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Find GCD(48, 18) using Euclidean algorithm",
                        "48 ÷ 18 = 2 R 12",
                        "18 ÷ 12 = 1 R 6",
                        "GCD = 12",  // ERROR: stopped too early
                    ],
                    correctAnswer: "Continue: 12 ÷ 6 = 2 R 0, so GCD = 6",
                    errorType: "Stopped before remainder was 0"
                },
                {
                    name: "Find the Error #4",
                    incorrectWork: [
                        "Factors of 12: 1, 2, 3, 4, 6, 12",
                        "Factors of 18: 1, 2, 3, 6, 9, 18",
                        "Common factors: 1, 2, 3, 6",
                        "GCD = 1",  // ERROR: chose smallest instead of greatest
                    ],
                    correctAnswer: "GCD = 6 (the GREATEST common factor)",
                    errorType: "Selected least common factor instead of greatest"
                }
            ]
        };
    }

    initializeHistoricalContext() {
        this.historicalContext = {
            euclidean_algorithm: {
                origin: "Ancient Greece, ~300 BCE",
                mathematician: "Euclid of Alexandria",
                source: "Elements, Book VII",
                significance: "One of oldest algorithms still in common use",
                modernRelevance: "Foundation of computer algorithms, cryptography",
                funFact: "Still the most efficient method for GCD after 2300+ years"
            },
            fundamental_theorem: {
                theorem: "Fundamental Theorem of Arithmetic",
                statement: "Every integer > 1 has unique prime factorization",
                importance: "Foundation of prime factorization method",
                applications: "Cryptography (RSA), number theory, algebra"
            },
            historical_applications: {
                ancient: "Calendar synchronization, astronomy (planetary cycles)",
                medieval: "Music theory (harmony ratios)",
                modern: "Computer science, cryptography, signal processing"
            }
        };
    }

    initializeVisualizationDatabase() {
        this.visualizations = {
            factor_rainbow: {
                description: "Arc diagram connecting factor pairs",
                useFor: "GCD by listing factors",
                howTo: "Draw arcs connecting pairs: 1-n, 2-n/2, etc."
            },
            prime_tree: {
                description: "Branching diagram for prime factorization",
                useFor: "Finding prime factors",
                howTo: "Branch each composite into factors until all leaves are prime"
            },
            venn_circles: {
                description: "Overlapping circles for common elements",
                useFor: "Visualizing common factors or multiples",
                howTo: "Put factors/multiples in circles; overlap shows common ones"
            },
            number_line_multiples: {
                description: "Marking multiples on number line",
                useFor: "Finding LCM by listing multiples",
                howTo: "Mark multiples of each number; first common mark is LCM"
            },
            euclidean_rectangles: {
                description: "Geometric visualization of Euclidean algorithm",
                useFor: "Understanding Euclidean algorithm geometrically",
                howTo: "Represent numbers as rectangle sides; repeatedly remove squares"
            },
            array_grids: {
                description: "Rectangular arrays showing factorizations",
                useFor: "Understanding factors as dimensions",
                howTo: "Show number as rows × columns in different arrangements"
            }
        };
    }

    // MAIN SOLVER METHOD
    solveGCDLCMProblem(config) {
        const { numbers, problemType, scenario, context, method } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseGCDLCMProblem(numbers, problemType, scenario, context, method);

            // Solve the problem
            this.currentSolution = this.solveGCDLCMProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateGCDLCMSteps(this.currentProblem, this.currentSolution);

            // Generate visualization data if applicable
            this.generateVisualizationData();

            // Generate workbook
            this.generateGCDLCMWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                result: this.currentSolution?.result,
                method: this.currentSolution?.method
            };

        } catch (error) {
            throw new Error(`Failed to solve GCD/LCM problem: ${error.message}`);
        }
    }

    parseGCDLCMProblem(numbers, problemType = null, scenario = '', context = {}, method = null) {
        // Normalize numbers input
        let numberArray = [];
        if (Array.isArray(numbers)) {
            numberArray = numbers.map(n => parseInt(n)).filter(n => !isNaN(n) && n > 0);
        } else if (typeof numbers === 'string') {
            numberArray = numbers.split(/[,\s]+/).map(n => parseInt(n)).filter(n => !isNaN(n) && n > 0);
        } else if (typeof numbers === 'number') {
            numberArray = [numbers];
        }

        if (numberArray.length < 2) {
            throw new Error('At least two numbers are required for GCD/LCM calculation');
        }

        // Auto-detect problem type if not specified
        if (!problemType) {
            problemType = this.detectGCDLCMType(scenario, numberArray);
        }

        return {
            numbers: numberArray,
            type: problemType,
            scenario: scenario,
            context: { ...context },
            preferredMethod: method,
            parsedAt: new Date().toISOString()
        };
    }

    detectGCDLCMType(scenario, numbers) {
        const scenarioLower = scenario.toLowerCase();

        // Check for specific patterns
        for (const [type, config] of Object.entries(this.gcdlcmTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(scenarioLower)) {
                    return type;
                }
            }
        }

        // Default based on number count
        if (numbers.length === 2) {
            // Check for context clues
            if (scenarioLower.includes('least') || scenarioLower.includes('multiple') || 
                scenarioLower.includes('lcm') || scenarioLower.includes('when')) {
                return 'lcm_two_numbers';
            } else {
                return 'gcd_two_numbers';
            }
        } else if (numbers.length > 2) {
            if (scenarioLower.includes('least') || scenarioLower.includes('multiple') || scenarioLower.includes('lcm')) {
                return 'lcm_multiple_numbers';
            } else {
                return 'gcd_multiple_numbers';
            }
        }

        return 'gcd_two_numbers'; // Default
    }

    solveGCDLCMProblem_Internal(problem) {
        const solver = this.gcdlcmTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // GCD/LCM SOLVERS

    solveGCDTwoNumbers(problem) {
        const [a, b] = problem.numbers;
        const method = problem.preferredMethod || this.selectBestGCDMethod(a, b);

        let result, steps, details;

        switch(method) {
            case 'listing':
                ({ result, steps, details } = this.computeGCDByListing(a, b));
                break;
            case 'prime_factorization':
                ({ result, steps, details } = this.computeGCDByPrimeFactorization(a, b));
                break;
            case 'euclidean':
                ({ result, steps, details } = this.computeGCDByEuclidean(a, b));
                break;
            default:
                ({ result, steps, details } = this.computeGCDByListing(a, b));
        }

        return {
            type: 'GCD of Two Numbers',
            numbers: [a, b],
            result: result,
            method: method,
            steps: steps,
            details: details,
            verification: this.verifyGCD(a, b, result),
            category: 'gcd'
        };
    }

    solveLCMTwoNumbers(problem) {
        const [a, b] = problem.numbers;
        const method = problem.preferredMethod || this.selectBestLCMMethod(a, b);

        let result, steps, details;

        switch(method) {
            case 'listing':
                ({ result, steps, details } = this.computeLCMByListing(a, b));
                break;
            case 'prime_factorization':
                ({ result, steps, details } = this.computeLCMByPrimeFactorization(a, b));
                break;
            case 'gcd_relationship':
                ({ result, steps, details } = this.computeLCMByGCDRelationship(a, b));
                break;
            default:
                ({ result, steps, details } = this.computeLCMByListing(a, b));
        }

        return {
            type: 'LCM of Two Numbers',
            numbers: [a, b],
            result: result,
            method: method,
            steps: steps,
            details: details,
            verification: this.verifyLCM(a, b, result),
            category: 'lcm'
        };
    }

    solveGCDMultipleNumbers(problem) {
        const numbers = problem.numbers;
        const method = problem.preferredMethod || 'sequential';

        let result, steps, details;

        if (method === 'prime_factorization') {
            ({ result, steps, details } = this.computeGCDMultipleByPrimeFactorization(numbers));
        } else {
            ({ result, steps, details } = this.computeGCDMultipleSequential(numbers));
        }

        return {
            type: 'GCD of Multiple Numbers',
            numbers: numbers,
            result: result,
            method: method,
            steps: steps,
            details: details,
            verification: this.verifyGCDMultiple(numbers, result),
            category: 'gcd'
        };
    }

    solveLCMMultipleNumbers(problem) {
        const numbers = problem.numbers;
        const method = problem.preferredMethod || 'sequential';

        let result, steps, details;

        if (method === 'prime_factorization') {
            ({ result, steps, details } = this.computeLCMMultipleByPrimeFactorization(numbers));
        } else {
            ({ result, steps, details } = this.computeLCMMultipleSequential(numbers));
        }

        return {
            type: 'LCM of Multiple Numbers',
            numbers: numbers,
            result: result,
            method: method,
            steps: steps,
            details: details,
            verification: this.verifyLCMMultiple(numbers, result),
            category: 'lcm'
        };
    }

    solveSimplifyFraction(problem) {
        const [numerator, denominator] = problem.numbers;
        const gcd = this.computeGCD(numerator, denominator);

        const simplifiedNumerator = numerator / gcd;
        const simplifiedDenominator = denominator / gcd;

        return {
            type: 'Simplify Fraction',
            originalFraction: `${numerator}/${denominator}`,
            gcdUsed: gcd,
            simplifiedFraction: `${simplifiedNumerator}/${simplifiedDenominator}`,
            result: { numerator: simplifiedNumerator, denominator: simplifiedDenominator },
            isAlreadySimplified: gcd === 1,
            category: 'application'
        };
    }

    solveFindCommonDenominator(problem) {
        const denominators = problem.numbers;
        const lcd = this.computeLCM(...denominators);

        return {
            type: 'Find Common Denominator (LCD)',
            denominators: denominators,
            lcd: lcd,
            result: lcd,
            category: 'application'
        };
    }

    solveCoprime(problem) {
        const [a, b] = problem.numbers;
        const gcd = this.computeGCD(a, b);
        const areCoprime = gcd === 1;

        return {
            type: 'Check if Coprime',
            numbers: [a, b],
            gcd: gcd,
            areCoprime: areCoprime,
            result: areCoprime,
            explanation: areCoprime ? 
                `${a} and ${b} are coprime (relatively prime) because GCD = 1` :
                `${a} and ${b} are NOT coprime because GCD = ${gcd} ≠ 1`,
            category: 'special'
        };
    }

    solveWordProblemGCD(problem) {
        const numbers = problem.numbers;
        const gcd = this.computeGCD(...numbers);

        return {
            type: 'GCD Word Problem',
            scenario: problem.scenario,
            numbers: numbers,
            result: gcd,
            interpretation: this.interpretGCDResult(gcd, problem.scenario),
            category: 'word_problem'
        };
    }

    solveWordProblemLCM(problem) {
        const numbers = problem.numbers;
        const lcm = this.computeLCM(...numbers);

        return {
            type: 'LCM Word Problem',
            scenario: problem.scenario,
            numbers: numbers,
            result: lcm,
            interpretation: this.interpretLCMResult(lcm, problem.scenario),
            category: 'word_problem'
        };
    }

    // METHOD SELECTION HELPERS

    selectBestGCDMethod(a, b) {
        const maxNum = Math.max(a, b);
        
        if (maxNum <= 20) {
            return 'listing';
        } else if (maxNum <= 100) {
            return 'prime_factorization';
        } else {
            return 'euclidean';
        }
    }

    selectBestLCMMethod(a, b) {
        const maxNum = Math.max(a, b);
        
        if (maxNum <= 15) {
            return 'listing';
        } else if (maxNum <= 100) {
            return 'prime_factorization';
        } else {
            return 'gcd_relationship';
        }
    }

    // COMPUTATION METHODS - GCD BY LISTING

    computeGCDByListing(a, b) {
        const factorsA = this.findAllFactors(a);
        const factorsB = this.findAllFactors(b);
        const commonFactors = factorsA.filter(f => factorsB.includes(f));
        const gcd = Math.max(...commonFactors);

        return {
            result: gcd,
            steps: [
                `Find all factors of ${a}`,
                `Find all factors of ${b}`,
                `Identify common factors`,
                `Select the greatest common factor`
            ],
            details: {
                factorsA: factorsA,
                factorsB: factorsB,
                commonFactors: commonFactors,
                gcd: gcd
            }
        };
    }

    findAllFactors(n) {
        const factors = [];
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                factors.push(i);
                if (i !== n / i) {
                    factors.push(n / i);
                }
            }
        }
        return factors.sort((a, b) => a - b);
    }

    // COMPUTATION METHODS - GCD BY PRIME FACTORIZATION

    computeGCDByPrimeFactorization(a, b) {
        const primeFactorsA = this.getPrimeFactorization(a);
        const primeFactorsB = this.getPrimeFactorization(b);

        // Find common primes with minimum exponents
        const gcdFactors = {};
        for (const prime in primeFactorsA) {
            if (primeFactorsB[prime] !== undefined) {
                gcdFactors[prime] = Math.min(primeFactorsA[prime], primeFactorsB[prime]);
            }
        }

        const gcd = this.computeFromPrimeFactors(gcdFactors);

        return {
            result: gcd,
            steps: [
                `Find prime factorization of ${a}`,
                `Find prime factorization of ${b}`,
                `Identify common prime factors`,
                `Take minimum exponent for each common prime`,
                `Multiply these together to get GCD`
            ],
            details: {
                primeFactorsA: primeFactorsA,
                primeFactorsB: primeFactorsB,
                gcdFactors: gcdFactors,
                gcd: gcd,
                factorizationStringA: this.primeFactorsToString(primeFactorsA),
                factorizationStringB: this.primeFactorsToString(primeFactorsB),
                gcdString: this.primeFactorsToString(gcdFactors)
            }
        };
    }

    getPrimeFactorization(n) {
        const factors = {};
        let num = n;

        for (let i = 2; i <= num; i++) {
            while (num % i === 0) {
                factors[i] = (factors[i] || 0) + 1;
                num = num / i;
            }
        }

        return factors;
    }

    primeFactorsToString(factors) {
        const parts = [];
        for (const prime in factors) {
            const exp = factors[prime];
            if (exp === 1) {
                parts.push(prime);
            } else {
                parts.push(`${prime}^${exp}`);
            }
        }
        return parts.join(' × ') || '1';
    }

    computeFromPrimeFactors(factors) {
        let result = 1;
        for (const prime in factors) {
            result *= Math.pow(parseInt(prime), factors[prime]);
        }
        return result;
    }

    // COMPUTATION METHODS - GCD BY EUCLIDEAN ALGORITHM

    computeGCDByEuclidean(a, b) {
        const steps = [];
        const divisions = [];

        let x = Math.max(a, b);
        let y = Math.min(a, b);

        while (y !== 0) {
            const quotient = Math.floor(x / y);
            const remainder = x % y;

            divisions.push({
                dividend: x,
                divisor: y,
                quotient: quotient,
                remainder: remainder,
                equation: `${x} = ${y} × ${quotient} + ${remainder}`
            });

            steps.push(`${x} ÷ ${y} = ${quotient} remainder ${remainder}`);

            x = y;
            y = remainder;
        }

        const gcd = x;
        steps.push(`GCD = ${gcd} (last non-zero remainder)`);

        return {
            result: gcd,
            steps: steps,
            details: {
                divisions: divisions,
                gcd: gcd
            }
        };
    }

    // COMPUTATION METHODS - LCM BY LISTING

    computeLCMByListing(a, b) {
        const limit = a * b; // Upper bound
        const multiplesA = [];
        const multiplesB = [];

        for (let i = 1; i * a <= limit && multiplesA.length < 20; i++) {
            multiplesA.push(i * a);
        }

        for (let i = 1; i * b <= limit && multiplesB.length < 20; i++) {
            multiplesB.push(i * b);
        }

        const commonMultiples = multiplesA.filter(m => multiplesB.includes(m));
        const lcm = Math.min(...commonMultiples);

        return {
            result: lcm,
            steps: [
                `List multiples of ${a}`,
                `List multiples of ${b}`,
                `Identify common multiples`,
                `Select the least common multiple`
            ],
            details: {
                multiplesA: multiplesA,
                multiplesB: multiplesB,
                commonMultiples: commonMultiples,
                lcm: lcm
            }
        };
    }

    // COMPUTATION METHODS - LCM BY PRIME FACTORIZATION

    computeLCMByPrimeFactorization(a, b) {
        const primeFactorsA = this.getPrimeFactorization(a);
        const primeFactorsB = this.getPrimeFactorization(b);

        // Take all primes with maximum exponents
        const lcmFactors = { ...primeFactorsA };

        for (const prime in primeFactorsB) {
            lcmFactors[prime] = Math.max(lcmFactors[prime] || 0, primeFactorsB[prime]);
        }

        const lcm = this.computeFromPrimeFactors(lcmFactors);

        return {
            result: lcm,
            steps: [
                `Find prime factorization of ${a}`,
                `Find prime factorization of ${b}`,
                `List all prime factors from both numbers`,
                `Take maximum exponent for each prime`,
                `Multiply these together to get LCM`
            ],
            details: {
                primeFactorsA: primeFactorsA,
                primeFactorsB: primeFactorsB,
                lcmFactors: lcmFactors,
                lcm: lcm,
                factorizationStringA: this.primeFactorsToString(primeFactorsA),
                factorizationStringB: this.primeFactorsToString(primeFactorsB),
                lcmString: this.primeFactorsToString(lcmFactors)
            }
        };
    }

    // COMPUTATION METHODS - LCM BY GCD RELATIONSHIP

    computeLCMByGCDRelationship(a, b) {
        const gcd = this.computeGCD(a, b);
        const lcm = (a * b) / gcd;

        return {
            result: lcm,
            steps: [
                `Find GCD(${a}, ${b})`,
                `Use formula: LCM = (a × b) / GCD`,
                `LCM = (${a} × ${b}) / ${gcd}`,
                `LCM = ${a * b} / ${gcd}`,
                `LCM = ${lcm}`
            ],
            details: {
                gcd: gcd,
                product: a * b,
                lcm: lcm,
                formula: 'LCM(a,b) = (a × b) / GCD(a,b)'
            }
        };
    }

    // COMPUTATION METHODS - MULTIPLE NUMBERS

    computeGCDMultipleSequential(numbers) {
        const steps = [];
        const intermediate = [];

        let currentGCD = numbers[0];
        steps.push(`Start with GCD = ${currentGCD}`);

        for (let i = 1; i < numbers.length; i++) {
            const nextNum = numbers[i];
            const newGCD = this.computeGCD(currentGCD, nextNum);
            
            steps.push(`GCD(${currentGCD}, ${nextNum}) = ${newGCD}`);
            intermediate.push({ pair: [currentGCD, nextNum], result: newGCD });
            
            currentGCD = newGCD;
        }

        steps.push(`Final GCD = ${currentGCD}`);

        return {
            result: currentGCD,
            steps: steps,
            details: {
                intermediate: intermediate,
                finalGCD: currentGCD
            }
        };
    }

    computeLCMMultipleSequential(numbers) {
        const steps = [];
        const intermediate = [];

        let currentLCM = numbers[0];
        steps.push(`Start with LCM = ${currentLCM}`);

        for (let i = 1; i < numbers.length; i++) {
            const nextNum = numbers[i];
            const newLCM = this.computeLCM(currentLCM, nextNum);
            
            steps.push(`LCM(${currentLCM}, ${nextNum}) = ${newLCM}`);
            intermediate.push({ pair: [currentLCM, nextNum], result: newLCM });
            
            currentLCM = newLCM;
        }

        steps.push(`Final LCM = ${currentLCM}`);

        return {
            result: currentLCM,
            steps: steps,
            details: {
                intermediate: intermediate,
                finalLCM: currentLCM
            }
        };
    }

    computeGCDMultipleByPrimeFactorization(numbers) {
        const steps = [];
        const allFactorizations = {};

        // Get prime factorization for each number
        numbers.forEach(num => {
            allFactorizations[num] = this.getPrimeFactorization(num);
            steps.push(`${num} = ${this.primeFactorsToString(allFactorizations[num])}`);
        });

        // Find common primes with minimum exponents
        const gcdFactors = {};
        const firstFactors = allFactorizations[numbers[0]];

        for (const prime in firstFactors) {
            let minExponent = firstFactors[prime];
            let allHavePrime = true;

            for (let i = 1; i < numbers.length; i++) {
                const factors = allFactorizations[numbers[i]];
                if (factors[prime] === undefined) {
                    allHavePrime = false;
                    break;
                }
                minExponent = Math.min(minExponent, factors[prime]);
            }

            if (allHavePrime) {
                gcdFactors[prime] = minExponent;
            }
        }

        const gcd = this.computeFromPrimeFactors(gcdFactors);
        steps.push(`GCD = ${this.primeFactorsToString(gcdFactors)} = ${gcd}`);

        return {
            result: gcd,
            steps: steps,
            details: {
                factorizations: allFactorizations,
                gcdFactors: gcdFactors,
                gcd: gcd
            }
        };
    }

    computeLCMMultipleByPrimeFactorization(numbers) {
        const steps = [];
        const allFactorizations = {};

        // Get prime factorization for each number
        numbers.forEach(num => {
            allFactorizations[num] = this.getPrimeFactorization(num);
            steps.push(`${num} = ${this.primeFactorsToString(allFactorizations[num])}`);
        });

        // Take all primes with maximum exponents
        const lcmFactors = {};

        numbers.forEach(num => {
            const factors = allFactorizations[num];
            for (const prime in factors) {
                lcmFactors[prime] = Math.max(lcmFactors[prime] || 0, factors[prime]);
            }
        });

        const lcm = this.computeFromPrimeFactors(lcmFactors);
        steps.push(`LCM = ${this.primeFactorsToString(lcmFactors)} = ${lcm}`);

        return {
            result: lcm,
            steps: steps,
            details: {
                factorizations: allFactorizations,
                lcmFactors: lcmFactors,
                lcm: lcm
            }
        };
    }

    // UTILITY COMPUTATION METHODS

    computeGCD(...numbers) {
        if (numbers.length === 0) return 0;
        if (numbers.length === 1) return numbers[0];

        let result = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            result = this.gcdTwo(result, numbers[i]);
        }
        return result;
    }

    gcdTwo(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    computeLCM(...numbers) {
        if (numbers.length === 0) return 0;
        if (numbers.length === 1) return numbers[0];

        let result = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            result = this.lcmTwo(result, numbers[i]);
        }
        return result;
    }

    lcmTwo(a, b) {
        return Math.abs(a * b) / this.gcdTwo(a, b);
    }

    // VERIFICATION METHODS

    verifyGCD(a, b, gcd) {
        const dividesA = a % gcd === 0;
        const dividesB = b % gcd === 0;
        
        // Check that no larger number divides both
        let isGreatest = true;
        for (let i = gcd + 1; i <= Math.min(a, b); i++) {
            if (a % i === 0 && b % i === 0) {
                isGreatest = false;
                break;
            }
        }

        // Verify using LCM relationship
        const lcm = this.computeLCM(a, b);
        const relationshipHolds = (gcd * lcm === a * b);

        return {
            gcd: gcd,
            dividesA: dividesA,
            dividesB: dividesB,
            isGreatest: isGreatest,
            relationshipCheck: relationshipHolds,
            isValid: dividesA && dividesB && isGreatest && relationshipHolds
        };
    }

    verifyLCM(a, b, lcm) {
        const divisibleByA = lcm % a === 0;
        const divisibleByB = lcm % b === 0;
        
        // Check that no smaller positive number is divisible by both
        let isLeast = true;
        for (let i = 1; i < lcm; i++) {
            if (i % a === 0 && i % b === 0) {
                isLeast = false;
                break;
            }
        }

        // Verify using GCD relationship
        const gcd = this.computeGCD(a, b);
        const relationshipHolds = (gcd * lcm === a * b);

        return {
            lcm: lcm,
            divisibleByA: divisibleByA,
            divisibleByB: divisibleByB,
            isLeast: isLeast,
            relationshipCheck: relationshipHolds,
            isValid: divisibleByA && divisibleByB && isLeast && relationshipHolds
        };
    }

    verifyGCDMultiple(numbers, gcd) {
        const allDivisible = numbers.every(n => n % gcd === 0);
        
        return {
            gcd: gcd,
            numbers: numbers,
            allDivisible: allDivisible,
            isValid: allDivisible
        };
    }

    verifyLCMMultiple(numbers, lcm) {
        const lcmDivisibleByAll = numbers.every(n => lcm % n === 0);
        
        return {
            lcm: lcm,
            numbers: numbers,
            lcmDivisibleByAll: lcmDivisibleByAll,
            isValid: lcmDivisibleByAll
        };
    }

    // INTERPRETATION HELPERS

    interpretGCDResult(gcd, scenario) {
        const scenarioLower = scenario.toLowerCase();
        
        if (scenarioLower.includes('tile') || scenarioLower.includes('square')) {
            return `The largest square tile size is ${gcd} units`;
        } else if (scenarioLower.includes('cut') || scenarioLower.includes('piece')) {
            return `The longest piece length is ${gcd} units`;
        } else if (scenarioLower.includes('group') || scenarioLower.includes('arrange')) {
            return `The maximum number per group is ${gcd}`;
        } else if (scenarioLower.includes('bag') || scenarioLower.includes('package')) {
            return `Each bag/package should contain ${gcd} items`;
        } else {
            return `The GCD is ${gcd}`;
        }
    }

    interpretLCMResult(lcm, scenario) {
        const scenarioLower = scenario.toLowerCase();
        
        if (scenarioLower.includes('meet') || scenarioLower.includes('together') || scenarioLower.includes('same time')) {
            return `They will meet/occur together again after ${lcm} time units`;
        } else if (scenarioLower.includes('align') || scenarioLower.includes('synchronize')) {
            return `They will align/synchronize after ${lcm} units`;
        } else if (scenarioLower.includes('denominator')) {
            return `The least common denominator is ${lcm}`;
        } else if (scenarioLower.includes('repeat') || scenarioLower.includes('cycle')) {
            return `The pattern repeats every ${lcm} units`;
        } else {
            return `The LCM is ${lcm}`;
        }
    }

    // STEP GENERATION

    generateGCDLCMSteps(problem, solution) {
        let baseSteps = this.generateBaseGCDLCMSteps(problem, solution);

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

    generateBaseGCDLCMSteps(problem, solution) {
        const method = solution.method;
        const category = solution.category;

        if (category === 'gcd') {
            switch(method) {
                case 'listing':
                    return this.generateGCDListingSteps(problem, solution);
                case 'prime_factorization':
                    return this.generateGCDPrimeFactorizationSteps(problem, solution);
                case 'euclidean':
                    return this.generateGCDEuclideanSteps(problem, solution);
                case 'sequential':
                    return this.generateGCDSequentialSteps(problem, solution);
                default:
                    return this.generateGenericGCDLCMSteps(problem, solution);
            }
        } else if (category === 'lcm') {
            switch(method) {
                case 'listing':
                    return this.generateLCMListingSteps(problem, solution);
                case 'prime_factorization':
                    return this.generateLCMPrimeFactorizationSteps(problem, solution);
                case 'gcd_relationship':
                    return this.generateLCMGCDRelationshipSteps(problem, solution);
                case 'sequential':
                    return this.generateLCMSequentialSteps(problem, solution);
                default:
                    return this.generateGenericGCDLCMSteps(problem, solution);
            }
        }

        return this.generateGenericGCDLCMSteps(problem, solution);
    }

    generateGCDListingSteps(problem, solution) {
        const steps = [];
        const [a, b] = solution.numbers;
        const details = solution.details;

        // Step 1: Problem statement
        steps.push({
            stepNumber: 1,
            step: 'Problem',
            description: `Find GCD(${a}, ${b}) using listing factors method`,
            reasoning: 'We will list all factors of each number and find the greatest common one',
            goalStatement: 'Find the largest number that divides both numbers evenly'
        });

        // Step 2: List factors of first number
        steps.push({
            stepNumber: 2,
            step: 'List factors of first number',
            description: `Find all factors of ${a}`,
            expression: `Factors of ${a}: ${details.factorsA.join(', ')}`,
            reasoning: 'A factor is a number that divides evenly with no remainder',
            method: 'Check each number from 1 to √n and its pair',
            visualHint: 'Use factor pairs: 1 and n, 2 and n/2, 3 and n/3, etc.'
        });

        // Step 3: List factors of second number
        steps.push({
            stepNumber: 3,
            step: 'List factors of second number',
            description: `Find all factors of ${b}`,
            expression: `Factors of ${b}: ${details.factorsB.join(', ')}`,
            reasoning: 'A factor is a number that divides evenly with no remainder',
            method: 'Check each number from 1 to √n and its pair'
        });

        // Step 4: Identify common factors
        steps.push({
            stepNumber: 4,
            step: 'Identify common factors',
            description: 'Find factors that appear in both lists',
            expression: `Common factors: ${details.commonFactors.join(', ')}`,
            reasoning: 'These are the numbers that divide both original numbers',
            visualHint: 'Compare the two lists and circle matching numbers'
        });

        // Step 5: Select greatest
        steps.push({
            stepNumber: 5,
            step: 'Select the greatest',
            description: 'Choose the largest common factor',
            expression: `GCD(${a}, ${b}) = ${details.gcd}`,
            finalAnswer: true,
            reasoning: 'This is the greatest common divisor',
            verification: `${a} ÷ ${details.gcd} = ${a/details.gcd} ✓, ${b} ÷ ${details.gcd} = ${b/details.gcd} ✓`
        });

        return steps;
    }

    generateGCDPrimeFactorizationSteps(problem, solution) {
        const steps = [];
        const [a, b] = solution.numbers;
        const details = solution.details;

        // Step 1: Problem statement
        steps.push({
            stepNumber: 1,
            step: 'Problem',
            description: `Find GCD(${a}, ${b}) using prime factorization`,
            reasoning: 'We will break each number into prime factors and find common ones',
            goalStatement: 'Find prime factorizations, then take minimum exponents of common primes'
        });

        // Step 2: Prime factorization of first number
        steps.push({
            stepNumber: 2,
            step: 'Prime factorization of first number',
            description: `Find prime factorization of ${a}`,
            expression: `${a} = ${details.factorizationStringA}`,
            reasoning: 'Break down the number into its prime building blocks',
            method: 'Use factor tree or division method',
            visualHint: 'Draw a factor tree, keep branching until all leaves are prime'
        });

        // Step 3: Prime factorization of second number
        steps.push({
            stepNumber: 3,
            step: 'Prime factorization of second number',
            description: `Find prime factorization of ${b}`,
            expression: `${b} = ${details.factorizationStringB}`,
            reasoning: 'Break down the number into its prime building blocks',
            method: 'Use factor tree or division method'
        });

        // Step 4: Identify common primes
        const commonPrimes = Object.keys(details.gcdFactors);
        steps.push({
            stepNumber: 4,
            step: 'Identify common prime factors',
            description: 'Find primes that appear in both factorizations',
            expression: commonPrimes.length > 0 ? 
                `Common primes: ${commonPrimes.join(', ')}` : 
                'No common primes (numbers are coprime)',
            reasoning: 'Only primes present in both numbers can be in the GCD',
            algebraicRule: 'GCD uses intersection of prime factors'
        });

        // Step 5: Take minimum exponents
        steps.push({
            stepNumber: 5,
            step: 'Take minimum exponents',
            description: 'For each common prime, use the smaller exponent',
            expression: details.gcdString,
            reasoning: 'GCD can only have as many of each prime as the smaller number has',
            keyPoint: 'Minimum exponents for GCD; maximum for LCM'
        });

        // Step 6: Calculate GCD
        steps.push({
            stepNumber: 6,
            step: 'Calculate GCD',
            description: 'Multiply the prime powers together',
            expression: `GCD(${a}, ${b}) = ${details.gcd}`,
            finalAnswer: true,
            reasoning: 'This gives the greatest common divisor',
            verification: `${a} ÷ ${details.gcd} = ${a/details.gcd} ✓, ${b} ÷ ${details.gcd} = ${b/details.gcd} ✓`
        });

        return steps;
    }

    generateGCDEuclideanSteps(problem, solution) {
        const steps = [];
        const [a, b] = solution.numbers;
        const details = solution.details;

        // Step 1: Problem statement
        steps.push({
            stepNumber: 1,
            step: 'Problem',
            description: `Find GCD(${a}, ${b}) using Euclidean Algorithm`,
            reasoning: 'We will use repeated division to find the GCD efficiently',
            goalStatement: 'Divide repeatedly until remainder is 0; last non-zero remainder is GCD',
            historicalNote: 'This algorithm is over 2300 years old!'
        });

        // Add division steps
        details.divisions.forEach((div, index) => {
            steps.push({
                stepNumber: index + 2,
                step: `Division ${index + 1}`,
                description: `Divide ${div.dividend} by ${div.divisor}`,
                beforeExpression: `${div.dividend} ÷ ${div.divisor}`,
                afterExpression: `${div.quotient} remainder ${div.remainder}`,
                equation: div.equation,
                reasoning: 'Find quotient and remainder using division algorithm',
                visualHint: `${div.dividend} = ${div.divisor} × ${div.quotient} + ${div.remainder}`
            });
        });

        // Final step: GCD result
        steps.push({
            stepNumber: details.divisions.length + 2,
            step: 'GCD Result',
            description: 'The last non-zero remainder is the GCD',
            expression: `GCD(${a}, ${b}) = ${details.gcd}`,
            finalAnswer: true,
            reasoning: 'When remainder becomes 0, the previous remainder is the GCD',
            whyItWorks: 'GCD(a,b) = GCD(b, a mod b) - the GCD is preserved through division'
        });

        return steps;
    }

    generateGCDSequentialSteps(problem, solution) {
        const steps = [];
        const numbers = solution.numbers;
        const details = solution.details;

        // Step 1: Problem statement
        steps.push({
            stepNumber: 1,
            step: 'Problem',
            description: `Find GCD(${numbers.join(', ')})`,
            reasoning: 'For multiple numbers, find GCD of pairs sequentially',
            goalStatement: 'Use property: GCD(a,b,c) = GCD(GCD(a,b), c)',
            strategy: 'Sequential pairwise GCD calculation'
        });

        // Add sequential steps
        details.intermediate.forEach((inter, index) => {
            steps.push({
                stepNumber: index + 2,
                step: `Find GCD of pair ${index + 1}`,
                description: `Calculate GCD(${inter.pair[0]}, ${inter.pair[1]})`,
                expression: `GCD(${inter.pair[0]}, ${inter.pair[1]}) = ${inter.result}`,
                reasoning: 'Find GCD of current result with next number',
                method: 'Use any GCD method (listing, prime factorization, or Euclidean)'
            });
        });

        // Final result
        steps.push({
            stepNumber: details.intermediate.length + 2,
            step: 'Final GCD',
            description: 'The result after all pairwise GCDs',
            expression: `GCD(${numbers.join(', ')}) = ${details.finalGCD}`,
            finalAnswer: true,
            reasoning: 'This number divides all original numbers',
            verification: `All numbers are divisible by ${details.finalGCD}`
        });

        return steps;
    }

    generateLCMListingSteps(problem, solution) {
        const steps = [];
        const [a, b] = solution.numbers;
        const details = solution.details;

        // Step 1: Problem statement
        steps.push({
            stepNumber: 1,
            step: 'Problem',
            description: `Find LCM(${a}, ${b}) using listing multiples method`,
            reasoning: 'We will list multiples of each number and find the least common one',
            goalStatement: 'Find the smallest number that both numbers divide into evenly'
        });

        // Step 2: List multiples of first number
        steps.push({
            stepNumber: 2,
            step: 'List multiples of first number',
            description: `Find multiples of ${a}`,
            expression: `Multiples of ${a}: ${details.multiplesA.join(', ')}${details.multiplesA.length >= 20 ? '...' : ''}`,
            reasoning: 'A multiple is found by multiplying the number by 1, 2, 3, 4, etc.',
            method: 'Skip count or use multiplication: 1×n, 2×n, 3×n, ...',
            visualHint: 'Think of this as the multiplication table for the number'
        });

        // Step 3: List multiples of second number
        steps.push({
            stepNumber: 3,
            step: 'List multiples of second number',
            description: `Find multiples of ${b}`,
            expression: `Multiples of ${b}: ${details.multiplesB.join(', ')}${details.multiplesB.length >= 20 ? '...' : ''}`,
            reasoning: 'A multiple is found by multiplying the number by 1, 2, 3, 4, etc.',
            method: 'Skip count or use multiplication: 1×n, 2×n, 3×n, ...'
        });

        // Step 4: Identify common multiples
        steps.push({
            stepNumber: 4,
            step: 'Identify common multiples',
            description: 'Find multiples that appear in both lists',
            expression: `Common multiples: ${details.commonMultiples.join(', ')}...`,
            reasoning: 'These are numbers that both original numbers divide into evenly',
            visualHint: 'On a number line, mark multiples of each - where they overlap are common multiples'
        });

        // Step 5: Select least
        steps.push({
            stepNumber: 5,
            step: 'Select the least',
            description: 'Choose the smallest common multiple',
            expression: `LCM(${a}, ${b}) = ${details.lcm}`,
            finalAnswer: true,
            reasoning: 'This is the least common multiple',
            verification: `${details.lcm} ÷ ${a} = ${details.lcm/a} ✓, ${details.lcm} ÷ ${b} = ${details.lcm/b} ✓`
        });

        return steps;
    }

    generateLCMPrimeFactorizationSteps(problem, solution) {
        const steps = [];
        const [a, b] = solution.numbers;
        const details = solution.details;

        // Step 1: Problem statement
        steps.push({
            stepNumber: 1,
            step: 'Problem',
            description: `Find LCM(${a}, ${b}) using prime factorization`,
            reasoning: 'We will use prime factors and take maximum exponents',
            goalStatement: 'Find prime factorizations, then take maximum exponents of all primes'
        });

        // Step 2: Prime factorization of first number
        steps.push({
            stepNumber: 2,
            step: 'Prime factorization of first number',
            description: `Find prime factorization of ${a}`,
            expression: `${a} = ${details.factorizationStringA}`,
            reasoning: 'Break down into prime building blocks',
            method: 'Use factor tree or division method'
        });

        // Step 3: Prime factorization of second number
        steps.push({
            stepNumber: 3,
            step: 'Prime factorization of second number',
            description: `Find prime factorization of ${b}`,
            expression: `${b} = ${details.factorizationStringB}`,
            reasoning: 'Break down into prime building blocks',
            method: 'Use factor tree or division method'
        });

        // Step 4: List all primes
        const allPrimes = Object.keys(details.lcmFactors);
        steps.push({
            stepNumber: 4,
            step: 'List all prime factors',
            description: 'Identify all primes from either factorization',
            expression: `All primes: ${allPrimes.join(', ')}`,
            reasoning: 'LCM must include all prime factors from both numbers',
            algebraicRule: 'LCM uses union of prime factors'
        });

        // Step 5: Take maximum exponents
        steps.push({
            stepNumber: 5,
            step: 'Take maximum exponents',
            description: 'For each prime, use the larger exponent',
            expression: details.lcmString,
            reasoning: 'LCM must be divisible by both numbers, so needs maximum power of each prime',
            keyPoint: 'Maximum exponents for LCM; minimum for GCD'
        });

        // Step 6: Calculate LCM
        steps.push({
            stepNumber: 6,
            step: 'Calculate LCM',
            description: 'Multiply the prime powers together',
            expression: `LCM(${a}, ${b}) = ${details.lcm}`,
            finalAnswer: true,
            reasoning: 'This gives the least common multiple',
            verification: `${details.lcm} ÷ ${a} = ${details.lcm/a} ✓, ${details.lcm} ÷ ${b} = ${details.lcm/b} ✓`
        });

        return steps;
    }

    generateLCMGCDRelationshipSteps(problem, solution) {
        const steps = [];
        const [a, b] = solution.numbers;
        const details = solution.details;

        // Step 1: Problem statement
        steps.push({
            stepNumber: 1,
            step: 'Problem',
            description: `Find LCM(${a}, ${b}) using GCD relationship`,
            reasoning: 'We use the formula: LCM(a,b) = (a × b) / GCD(a,b)',
            goalStatement: 'Find GCD first, then use relationship to find LCM',
            formula: 'GCD(a,b) × LCM(a,b) = a × b'
        });

        // Step 2: Find GCD
        steps.push({
            stepNumber: 2,
            step: 'Find GCD',
            description: `Calculate GCD(${a}, ${b})`,
            expression: `GCD(${a}, ${b}) = ${details.gcd}`,
            reasoning: 'We need the GCD to use the relationship formula',
            method: 'Use any GCD method (Euclidean is most efficient for large numbers)'
        });

        // Step 3: Apply formula
        steps.push({
            stepNumber: 3,
            step: 'Apply LCM formula',
            description: 'Use the formula: LCM = (a × b) / GCD',
            expression: `LCM = (${a} × ${b}) / ${details.gcd}`,
            reasoning: 'This relationship always holds for two numbers',
            algebraicRule: 'GCD(a,b) × LCM(a,b) = a × b'
        });

        // Step 4: Calculate product
        steps.push({
            stepNumber: 4,
            step: 'Calculate product',
            description: `Multiply ${a} × ${b}`,
            expression: `${a} × ${b} = ${details.product}`,
            reasoning: 'First find the product of the two numbers'
        });

        // Step 5: Divide by GCD
        steps.push({
            stepNumber: 5,
            step: 'Divide by GCD',
            description: `Divide ${details.product} by ${details.gcd}`,
            expression: `LCM(${a}, ${b}) = ${details.product} / ${details.gcd} = ${details.lcm}`,
            finalAnswer: true,
            reasoning: 'This gives the least common multiple',
            verification: `Check: ${details.gcd} × ${details.lcm} = ${details.gcd * details.lcm} = ${a} × ${b} ✓`
        });

        return steps;
    }

    generateLCMSequentialSteps(problem, solution) {
        const steps = [];
        const numbers = solution.numbers;
        const details = solution.details;

        // Step 1: Problem statement
        steps.push({
            stepNumber: 1,
            step: 'Problem',
            description: `Find LCM(${numbers.join(', ')})`,
            reasoning: 'For multiple numbers, find LCM of pairs sequentially',
            goalStatement: 'Use property: LCM(a,b,c) = LCM(LCM(a,b), c)',
            strategy: 'Sequential pairwise LCM calculation'
        });

        // Add sequential steps
        details.intermediate.forEach((inter, index) => {
            steps.push({
                stepNumber: index + 2,
                step: `Find LCM of pair ${index + 1}`,
                description: `Calculate LCM(${inter.pair[0]}, ${inter.pair[1]})`,
                expression: `LCM(${inter.pair[0]}, ${inter.pair[1]}) = ${inter.result}`,
                reasoning: 'Find LCM of current result with next number',
                method: 'Use any LCM method (prime factorization or GCD relationship)'
            });
        });

        // Final result
        steps.push({
            stepNumber: details.intermediate.length + 2,
            step: 'Final LCM',
            description: 'The result after all pairwise LCMs',
            expression: `LCM(${numbers.join(', ')}) = ${details.finalLCM}`,
            finalAnswer: true,
            reasoning: 'This number is divisible by all original numbers',
            verification: `${details.finalLCM} is divisible by all: ${numbers.join(', ')}`
        });

        return steps;
    }

    generateGenericGCDLCMSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'GCD/LCM Calculation',
            description: 'Calculate using appropriate method',
            expression: `Result: ${solution.result}`,
            reasoning: 'Apply standard GCD or LCM technique',
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
                conceptual: this.getConceptualExplanationGCDLCM(step, problem, solution),
                procedural: this.getProceduralExplanationGCDLCM(step),
                visual: this.getVisualExplanationGCDLCM(step, problem, solution),
                algebraic: this.getAlgebraicExplanationGCDLCM(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesGCDLCM(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyGCDLCM(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsGCDLCM(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionGCDLCM(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionGCDLCM(step, problem, solution);
        }

        return enhanced;
    }

    getConceptualExplanationGCDLCM(step, problem, solution) {
        const conceptualExplanations = {
            'Problem': solution.category === 'gcd' ?
                'GCD is the largest number that divides both numbers evenly - the greatest common measure' :
                'LCM is the smallest number that both numbers divide into evenly - the least common container',
            
            'List factors of first number': 'Factors are numbers that divide evenly into our number. We\'re finding all possible divisors.',
            
            'List multiples of first number': 'Multiples are results of multiplying our number by whole numbers. Like skip-counting.',
            
            'Prime factorization of first number': 'Every number is built from prime numbers multiplied together. We\'re finding the building blocks.',
            
            'Identify common factors': 'Common factors divide both numbers. The greatest one is our answer.',
            
            'Identify common multiples': 'Common multiples are divisible by both numbers. The least one is our answer.',
            
            'Take minimum exponents': 'For GCD, we can only use as many of each prime as the smaller number has.',
            
            'Take maximum exponents': 'For LCM, we need enough of each prime to satisfy both numbers - so we take the maximum.',
            
            'Division': 'The Euclidean algorithm repeatedly divides, using the remainder each time, efficiently narrowing down to the GCD.'
        };

        return conceptualExplanations[step.step] || 'This step helps us progress toward finding the GCD or LCM.';
    }

    getProceduralExplanationGCDLCM(step) {
        if (step.method) {
            return step.method;
        }

        const proceduralSteps = {
            'List factors of first number': '1. Start with 1 and the number itself\n2. Check each number in between\n3. If it divides evenly, it\'s a factor',
            
            'List multiples of first number': '1. Multiply by 1, 2, 3, 4...\n2. Continue until you find common multiples\n3. List them in order',
            
            'Prime factorization of first number': '1. Divide by smallest prime (2)\n2. Continue with result\n3. Move to next prime when needed\n4. Stop when result is 1',
            
            'Division': '1. Divide larger by smaller\n2. Find quotient and remainder\n3. Replace larger with smaller, smaller with remainder\n4. Repeat'
        };

        return proceduralSteps[step.step] || 'Follow the described procedure carefully.';
    }

    getVisualExplanationGCDLCM(step, problem, solution) {
        const category = solution.category;
        
        const visualExplanations = {
            gcd: {
                'listing': 'Picture two sets of factors in circles. The overlap contains common factors; the largest is GCD.',
                'prime_factorization': 'Visualize factor trees for each number. GCD uses branches common to both, with shorter heights.',
                'euclidean': 'Imagine measuring a long stick with a shorter one repeatedly until they match exactly.'
            },
            lcm: {
                'listing': 'On a number line, mark multiples of each number. First point where marks overlap is LCM.',
                'prime_factorization': 'Visualize all prime factors needed. LCM needs tallest branches from either tree.',
                'gcd_relationship': 'Picture a rectangle with area = product. GCD and LCM are the two dimensions.'
            }
        };

        if (category === 'gcd' && visualExplanations.gcd[solution.method]) {
            return visualExplanations.gcd[solution.method];
        } else if (category === 'lcm' && visualExplanations.lcm[solution.method]) {
            return visualExplanations.lcm[solution.method];
        }

        return 'Visualize this step as part of the overall GCD or LCM process.';
    }

    getAlgebraicExplanationGCDLCM(step) {
        const algebraicRules = {
            'Problem': 'GCD(a,b) = max{d : d|a and d|b} or LCM(a,b) = min{m : a|m and b|m}',
            'Identify common factors': 'GCD ∈ Factors(a) ∩ Factors(b)',
            'Identify common multiples': 'LCM ∈ Multiples(a) ∩ Multiples(b)',
            'Take minimum exponents': 'For prime p: exp_GCD(p) = min(exp_a(p), exp_b(p))',
            'Take maximum exponents': 'For prime p: exp_LCM(p) = max(exp_a(p), exp_b(p))',
            'Division': 'GCD(a,b) = GCD(b, a mod b) when b ≠ 0'
        };

        return algebraicRules[step.step] || 'Apply standard number theory principles.';
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
                'factor': 'divides into',
                'multiple': 'counting by that number',
                'prime': 'only divisible by 1 and itself',
                'composite': 'has other factors',
                'divisor': 'divides into',
                'quotient': 'answer when dividing',
                'remainder': 'what\'s left over',
                'exponent': 'how many times to multiply',
                'greatest': 'biggest',
                'least': 'smallest'
            },
            intermediate: {
                'factor': 'factor',
                'multiple': 'multiple',
                'prime': 'prime',
                'composite': 'composite',
                'divisor': 'divisor',
                'quotient': 'quotient',
                'remainder': 'remainder',
                'exponent': 'exponent'
            },
            ELI5: {
                'factor': 'number that goes into it evenly',
                'multiple': 'skip-counting numbers',
                'prime': 'special number only divisible by 1 and itself',
                'composite': 'number with extra factors',
                'divisor': 'number you divide by',
                'quotient': 'how many times it goes in',
                'remainder': 'extra pieces left over',
                'exponent': 'how many of that number to multiply',
                'greatest common divisor': 'biggest number that divides both',
                'least common multiple': 'smallest number both go into',
                'prime factorization': 'breaking into prime building blocks'
            },
            detailed: {
                'factor': 'divisor',
                'multiple': 'integral multiple',
                'prime': 'prime number',
                'composite': 'composite number',
                'exponent': 'power/exponent',
                'greatest common divisor': 'GCD (greatest common divisor)',
                'least common multiple': 'LCM (least common multiple)'
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
                explanation: this.generateELI5ExplanationGCDLCM(step, problem),
                analogy: this.findRelevantAnalogyGCDLCM(step, problem),
                simpleLanguage: this.convertToSimpleLanguageGCDLCM(step.description),
                visualization: this.suggestVisualizationGCDLCM(step, problem)
            }
        }));
    }

    generateELI5ExplanationGCDLCM(step, problem) {
        const category = problem.type.includes('gcd') ? 'gcd' : 'lcm';

        const ELI5Explanations = {
            'Problem': category === 'gcd' ?
                "We're looking for the biggest number that can divide both our numbers evenly - like finding the biggest cookie cutter that fits both doughs!" :
                "We're looking for the smallest number that both our numbers can fit into - like finding the smallest box that holds both sets of toys!",
            
            'List factors': "We're finding all the numbers that can divide our number evenly, with nothing left over. Like finding all the ways to share cookies equally!",
            
            'List multiples': "We're counting by our number - like hopping on a number line by that many steps each time!",
            
            'Prime factorization': "We're breaking our number down into its building blocks - prime numbers are like the LEGO bricks that can't be broken down further!",
            
            'Identify common factors': "We're finding numbers that divide BOTH our numbers - these are special numbers that work for both!",
            
            'Identify common multiples': "We're finding numbers that BOTH our numbers divide into - these are numbers big enough for both!",
            
            'Take minimum exponents': "We can only use as many of each building block as the smaller number has - otherwise it won't divide evenly!",
            
            'Take maximum exponents': "We need enough of each building block so both numbers can divide in - so we use the bigger amount!",
            
            'Division': "We're playing a dividing game: divide, use what's left, divide again - keep going until there's nothing left!"
        };

        return ELI5Explanations[step.step] || "This step helps us get closer to our answer!";
    }

    findRelevantAnalogyGCDLCM(step, problem) {
        const category = problem.type.includes('gcd') ? 'gcd' : 'lcm';

        // Return appropriate analogy based on category
        if (category === 'gcd') {
            const gcdAnalogy = this.analogies.gcd_measurement || this.analogies.tiling_floor;
            return gcdAnalogy.ELI5 || gcdAnalogy.explanation;
        } else {
            const lcmAnalogy = this.analogies.lcm_cycles;
            return lcmAnalogy.ELI5 || lcmAnalogy.explanation;
        }
    }

    convertToSimpleLanguageGCDLCM(description) {
        const simplifications = {
            'greatest common divisor': 'biggest number that divides both',
            'least common multiple': 'smallest number both divide into',
            'factor': 'number that divides evenly',
            'multiple': 'skip-counting number',
            'prime factorization': 'breaking into prime building blocks',
            'exponent': 'how many times to multiply',
            'quotient': 'answer from dividing',
            'remainder': 'what\'s left over',
            'divisor': 'number you\'re dividing by',
            'dividend': 'number being divided',
            'common': 'shared between both',
            'minimum': 'smaller',
            'maximum': 'bigger'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualizationGCDLCM(step, problem) {
        const visualizations = {
            'List factors': 'Draw two clouds with all factors inside. Circle the ones that match!',
            'List multiples': 'Draw a number line and mark hops for each number - see where they meet!',
            'Prime factorization': 'Draw a tree that branches down to prime numbers - all the leaves should be primes!',
            'Identify common factors': 'Use two different colors to highlight factors, then find numbers with both colors!',
            'Identify common multiples': 'On a number line, use different color marks - where colors overlap is a common multiple!',
            'Take minimum exponents': 'Look at how many of each prime you have - take the smaller pile!',
            'Take maximum exponents': 'Look at how many of each prime you have - take the bigger pile!',
            'Division': 'Draw bars showing how many times the smaller fits into the larger!'
        };

        return visualizations[step.step] || 'Draw a picture to help you understand this step!';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeGCDLCM(steps[i], steps[i + 1], problem),
                    reasoning: this.explainStepProgressionGCDLCM(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategyGCDLCM(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeGCDLCM(currentStep, nextStep, problem) {
        return {
            currentState: `We now have: ${currentStep.expression || 'completed ' + currentStep.step}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessityGCDLCM(currentStep, nextStep, problem)}`,
            howItHelps: `This will help by: ${this.explainStepBenefitGCDLCM(nextStep, problem)}`
        };
    }

    explainStepNecessityGCDLCM(currentStep, nextStep, problem) {
        const category = problem.type.includes('gcd') ? 'gcd' : 'lcm';
        
        if (category === 'gcd') {
            if (nextStep.step.includes('common')) {
                return 'we need to find which factors both numbers share';
            } else if (nextStep.step.includes('greatest') || nextStep.step.includes('Select')) {
                return 'we need to find the largest of the common factors';
            }
        } else {
            if (nextStep.step.includes('common')) {
                return 'we need to find which multiples both numbers share';
            } else if (nextStep.step.includes('least') || nextStep.step.includes('Select')) {
                return 'we need to find the smallest of the common multiples';
            }
        }
        
        return 'we need to continue the systematic process';
    }

    explainStepBenefitGCDLCM(nextStep, problem) {
        const category = problem.type.includes('gcd') ? 'gcd' : 'lcm';
        
        if (category === 'gcd') {
            return 'bringing us closer to finding the greatest common divisor';
        } else {
            return 'bringing us closer to finding the least common multiple';
        }
    }

    explainStepProgressionGCDLCM(currentStep, nextStep) {
        return `After ${currentStep.step}, we logically proceed to ${nextStep.step}`;
    }

    explainStepStrategyGCDLCM(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    addErrorPrevention(step, problemType) {
        const category = problemType.includes('gcd') ? 'gcd' : 'lcm';
        const method = problemType.includes('listing') ? 'listing' :
                      problemType.includes('prime') ? 'prime_factorization' :
                      problemType.includes('euclidean') ? 'euclidean' : 'general';

        const mistakes = this.commonMistakes[category]?.[step.step] ||
                        this.commonMistakes.general?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsGCDLCM(step, category, method),
                checkPoints: this.generateCheckPointsGCDLCM(step, category),
                warningFlags: this.identifyWarningFlagsGCDLCM(step, category, method)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionGCDLCM(step),
                expectedResult: this.describeExpectedResultGCDLCM(step, category),
                troubleshooting: this.generateTroubleshootingTipsGCDLCM(step)
            }
        };
    }

    generatePreventionTipsGCDLCM(step, category, method) {
        const tips = {
            'List factors': [
                'Check each number systematically from 1 up to √n',
                'List factors in pairs: if a is a factor, so is n/a',
                'Don\'t forget 1 and the number itself'
            ],
            'List multiples': [
                'List enough multiples to find common ones',
                'Keep multiples in order',
                'Stop when you find the first common multiple (for LCM)'
            ],
            'Prime factorization': [
                'Make sure all factors are prime',
                'Check your factor tree ends in all primes',
                'Verify by multiplying primes back together'
            ],
            'common factors': [
                'Only include factors in BOTH lists',
                'Check each factor divides both numbers'
            ],
            'minimum exponents': [
                'For GCD, always take SMALLER exponent',
                'If a prime missing from one number, it\'s not in GCD'
            ],
            'maximum exponents': [
                'For LCM, always take LARGER exponent',
                'Include ALL primes from either number'
            ],
            'Division': [
                'Continue until remainder is exactly 0',
                'Double-check each division',
                'GCD is the last NON-ZERO remainder'
            ]
        };

        return tips[step.step] || [
            'Work carefully and systematically',
            'Check your arithmetic',
            `Remember: ${category === 'gcd' ? 'GCD divides both numbers' : 'LCM is divisible by both numbers'}`
        ];
    }

    generateCheckPointsGCDLCM(step, category) {
        return [
            'Did I follow the method correctly?',
            'Are my calculations accurate?',
            category === 'gcd' ? 
                'Does my answer divide both numbers evenly?' : 
                'Are both numbers divisors of my answer?',
            'Does the result make sense for this problem?'
        ];
    }

    identifyWarningFlagsGCDLCM(step, category, method) {
        const warnings = {
            gcd: {
                listing: step.step.includes('greatest') ? 
                    ['Don\'t select a common factor that\'s not the greatest', 'Make sure it\'s truly greatest'] : [],
                prime_factorization: step.step.includes('minimum') ?
                    ['Use MINIMUM exponents for GCD, not maximum', 'Verify all primes are common'] : [],
                euclidean: step.step.includes('Division') ?
                    ['Don\'t stop until remainder is 0', 'Check division arithmetic'] : []
            },
            lcm: {
                listing: step.step.includes('least') ?
                    ['Don\'t select a multiple that\'s not the least', 'Make sure both numbers divide it'] : [],
                prime_factorization: step.step.includes('maximum') ?
                    ['Use MAXIMUM exponents for LCM, not minimum', 'Include ALL primes from either number'] : []
            }
        };

        return warnings[category]?.[method] || [];
    }

    generateSelfCheckQuestionGCDLCM(step) {
        const questions = {
            'List factors': 'Did I find ALL factors, including 1 and the number itself?',
            'List multiples': 'Did I list enough multiples to find common ones?',
            'Prime factorization': 'Are all the factors in my tree prime numbers?',
            'Identify common factors': 'Are these factors truly in both lists?',
            'Identify common multiples': 'Are these multiples truly in both lists?',
            'Select the greatest': 'Is this truly the GREATEST common factor?',
            'Select the least': 'Is this truly the LEAST common multiple?',
            'Take minimum exponents': 'Did I take the SMALLER exponent for each prime?',
            'Take maximum exponents': 'Did I take the LARGER exponent for each prime?',
            'Division': 'Did I continue until remainder was 0?'
        };

        return questions[step.step] || 'Does this step make sense and move me toward the answer?';
    }

    describeExpectedResultGCDLCM(step, category) {
        const expectations = {
            'List factors': 'A complete list of all divisors',
            'List multiples': 'Ordered list of products 1×n, 2×n, 3×n...',
            'Prime factorization': 'Product of prime powers',
            'Identify common factors': 'Factors appearing in both lists',
            'Identify common multiples': 'Multiples appearing in both lists',
            'Select the greatest': 'The largest common factor',
            'Select the least': 'The smallest common multiple',
            'Take minimum exponents': 'Prime factorization using smaller exponents',
            'Take maximum exponents': 'Prime factorization using larger exponents'
        };

        return expectations[step.step] || `Progress toward ${category.toUpperCase()}`;
    }

    generateTroubleshootingTipsGCDLCM(step) {
        return [
            'If stuck, review what the step is asking',
            'Check your previous step for errors',
            'Try a simpler example first',
            'Draw a picture or diagram',
            'Verify your arithmetic carefully'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsGCDLCM(step, problem),
                subSteps: this.breakIntoSubStepsGCDLCM(step),
                hints: this.generateProgressiveHintsGCDLCM(step, problem),
                practiceVariation: this.generatePracticeVariationGCDLCM(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessGCDLCM(step),
                decisionPoints: this.identifyDecisionPointsGCDLCM(step, problem),
                alternativeApproaches: this.suggestAlternativeMethodsGCDLCM(step, problem)
            }
        }));
    }

    generateGuidingQuestionsGCDLCM(step, problem) {
        const category = problem.type.includes('gcd') ? 'gcd' : 'lcm';

        const questions = {
            'List factors': [
                'What does "factor" mean?',
                'How can I find all factors systematically?',
                'What\'s the largest possible factor?'
            ],
            'List multiples': [
                'What does "multiple" mean?',
                'How do I find multiples?',
                'How many multiples should I list?'
            ],
            'Prime factorization': [
                'What is a prime number?',
                'How do I know when I\'m done factoring?',
                'How can I verify my factorization is correct?'
            ],
            'Identify common factors': [
                'Which factors appear in both lists?',
                'How can I organize this comparison?',
                'What makes a factor "common"?'
            ],
            'Identify common multiples': [
                'Which multiples appear in both lists?',
                'What makes a multiple "common"?',
                'Do I need to list all common multiples?'
            ],
            'Select the greatest': [
                'Which common factor is largest?',
                'How do I know it\'s the greatest?',
                'Can there be a larger one?'
            ],
            'Select the least': [
                'Which common multiple is smallest?',
                'How do I know it\'s the least?',
                'Can there be a smaller one?'
            ]
        };

        return questions[step.step] || [
            'What is this step asking me to do?',
            'How does this help find the answer?',
            'What should my result look like?'
        ];
    }

    generateProgressiveHintsGCDLCM(step, problem) {
        const category = problem.type.includes('gcd') ? 'gcd' : 'lcm';
        const method = problem.preferredMethod || 'listing';

        // Get hints from hint database
        const hintKey = `${category}_${method}`;
        const hintSet = this.hints[hintKey] || {};

        return {
            level1: hintSet.level1 || 'Think about what this step is asking.',
            level2: hintSet.level2 || 'Consider the definition of the concept involved.',
            level3: hintSet.level3 || 'Apply the systematic method.',
            level4: hintSet.level4 || 'Follow the specific procedure for this type of problem.'
        };
    }

    breakIntoSubStepsGCDLCM(step) {
        const subStepsMap = {
            'List factors': [
                'Start with 1 (always a factor)',
                'Check each number up to √n',
                'For each factor i found, n/i is also a factor',
                'List all factors in order'
            ],
            'List multiples': [
                'Start with 1 × n',
                'Continue with 2 × n, 3 × n, etc.',
                'List multiples in order',
                'Stop when you find common multiples (for LCM)'
            ],
            'Prime factorization': [
                'Start with smallest prime (2)',
                'Divide if possible; if not, try next prime',
                'Continue with quotient',
                'Stop when quotient is 1',
                'Write as product of primes with exponents'
            ],
            'Identify common factors': [
                'Look at first list',
                'Check if each factor is in second list',
                'Mark or list all common ones'
            ],
            'Take minimum exponents': [
                'List all common primes',
                'For each prime, compare exponents',
                'Choose the smaller exponent',
                'Write GCD factorization'
            ],
            'Take maximum exponents': [
                'List all primes from either number',
                'For each prime, compare exponents',
                'Choose the larger exponent',
                'Write LCM factorization'
            ]
        };

        return subStepsMap[step.step] || [
            'Understand what\'s needed',
            'Apply the method',
            'Check the result'
        ];
    }

    generatePracticeVariationGCDLCM(step, problem) {
        return {
            similarProblem: 'Try with different numbers of similar size',
            practiceHint: 'Practice with small numbers first to build confidence',
            extension: 'Try with larger numbers or three numbers instead of two'
        };
    }

    explainThinkingProcessGCDLCM(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to find?',
            strategy: 'What method should I use?',
            execute: 'How do I carry out this step?',
            verify: 'How can I check if my answer is correct?'
        };
    }

    identifyDecisionPointsGCDLCM(step, problem) {
        const category = problem.type.includes('gcd') ? 'gcd' : 'lcm';

        return [
            'Which method to use (listing, prime factorization, Euclidean)?',
            category === 'gcd' ?
                'Which exponent to choose (minimum for GCD)?' :
                'Which exponent to choose (maximum for LCM)?',
            'How to organize my work for clarity?',
            'How to verify my answer?'
        ];
    }

    suggestAlternativeMethodsGCDLCM(step, problem) {
        const category = problem.type.includes('gcd') ? 'gcd' : 'lcm';
        
        const alternatives = {
            gcd: [
                'Could use listing factors instead of prime factorization',
                'Could use Euclidean algorithm (most efficient for large numbers)',
                'Could use prime factorization (systematic and works for multiple numbers)'
            ],
            lcm: [
                'Could use listing multiples (good for small numbers)',
                'Could use prime factorization (systematic)',
                'Could use GCD relationship: LCM = (a×b)/GCD (efficient if GCD is known)'
            ]
        };

        return alternatives[category] || ['Multiple valid approaches exist'];
    }

    generateThinkingPromptsGCDLCM(step) {
        return {
            before: 'Before starting: What do I need to identify or calculate?',
            during: 'As I work: Am I being systematic and accurate?',
            after: 'After completing: How can I verify this result?'
        };
    }

    identifyPrerequisitesGCDLCM(step, problemType) {
        const category = problemType.includes('gcd') ? 'gcd' : 'lcm';
        const method = problemType.includes('listing') ? 'listing' :
                      problemType.includes('prime') ? 'prime_factorization' :
                      problemType.includes('euclidean') ? 'euclidean_algorithm' : 'gcd_listing';

        const prereqKey = category === 'gcd' ? 
            (method.includes('listing') ? 'gcd_listing' : method) :
            (method.includes('listing') ? 'lcm_listing' : method);

        const prereqs = this.prerequisites[prereqKey];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic arithmetic', 'Understanding of ' + category.toUpperCase()];
    }

    identifyKeyVocabularyGCDLCM(step) {
        const vocabulary = {
            'List factors': ['factor', 'divisor', 'divides evenly'],
            'List multiples': ['multiple', 'skip counting', 'multiplication'],
            'Prime factorization': ['prime', 'composite', 'factorization', 'exponent'],
            'Identify common factors': ['common', 'factor', 'shared'],
            'Identify common multiples': ['common', 'multiple', 'shared'],
            'Select the greatest': ['greatest', 'maximum', 'largest'],
            'Select the least': ['least', 'minimum', 'smallest'],
            'Take minimum exponents': ['minimum', 'exponent', 'power'],
            'Take maximum exponents': ['maximum', 'exponent', 'power'],
            'Division': ['quotient', 'remainder', 'divisor', 'dividend']
        };

        return vocabulary[step.step] || [];
    }

    findRealWorldConnectionGCDLCM(step, problem, solution) {
        const category = solution.category;

        if (category === 'gcd') {
            return 'GCD helps with: cutting materials into equal pieces, tiling floors, simplifying fractions, arranging items in equal groups';
        } else {
            return 'LCM helps with: finding when events coincide, adding fractions, scheduling problems, gear synchronization';
        }
    }

    // VISUALIZATION DATA GENERATION

    generateVisualizationData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const category = this.currentSolution.category;
        const method = this.currentSolution.method;

        if (category === 'gcd' || category === 'lcm') {
            this.graphData = this.generateGCDLCMVisualization(this.currentProblem, this.currentSolution);
        }
    }

    generateGCDLCMVisualization(problem, solution) {
        const category = solution.category;
        const numbers = solution.numbers;

        return {
            type: category,
            numbers: numbers,
            result: solution.result,
            visualizationType: this.selectVisualizationType(solution.method, category),
            description: this.generateVisualizationDescription(solution, category)
        };
    }

    selectVisualizationType(method, category) {
        const visualTypes = {
            listing: category === 'gcd' ? 'venn_diagram_factors' : 'number_line_multiples',
            prime_factorization: 'factor_trees',
            euclidean: 'euclidean_rectangles',
            gcd_relationship: 'relationship_diagram'
        };

        return visualTypes[method] || 'generic_diagram';
    }

    generateVisualizationDescription(solution, category) {
        if (category === 'gcd') {
            return `GCD(${solution.numbers.join(', ')}) = ${solution.result} - the largest number dividing all inputs`;
        } else {
            return `LCM(${solution.numbers.join(', ')}) = ${solution.result} - the smallest number divisible by all inputs`;
        }
    }

    // WORKBOOK GENERATION

    generateGCDLCMWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createMethodOverviewSection(),
            this.createEnhancedStepsSection(),
            this.createLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createRealWorldApplicationSection(),
            this.createRelatedConceptsSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection(),
            this.createHistoricalContextSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced GCD and LCM Mathematical Workbook',
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
            ['Problem Type', this.gcdlcmTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.currentSolution?.category?.toUpperCase() || 'GCD/LCM'],
            ['Numbers', this.currentProblem.numbers.join(', ')],
            ['Method Used', this.currentSolution?.method || 'Standard method']
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

        const method = this.currentSolution?.method || 'listing';
        const category = this.currentSolution?.category || 'gcd';
        
        const prereqKey = category === 'gcd' ?
            (method.includes('listing') ? 'gcd_listing' : method === 'euclidean' ? 'euclidean_algorithm' : 'prime_factorization') :
            (method.includes('listing') ? 'lcm_listing' : 'prime_factorization');

        const prereqs = this.prerequisites[prereqKey];

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

    createMethodOverviewSection() {
        if (!this.currentSolution) return null;

        const method = this.currentSolution.method;
        const category = this.currentSolution.category;

        const methodData = [
            ['Method Name', this.formatMethodName(method)],
            ['Best For', this.describeMethodSuitability(method, category)],
            ['', ''],
            ['Overview', '']
        ];

        const steps = this.getMethodOverviewSteps(method, category);
        steps.forEach((step, index) => {
            methodData.push([`Step ${index + 1}`, step]);
        });

        return {
            title: `${this.formatMethodName(method)} Method Overview`,
            type: 'method_overview',
            data: methodData
        };
    }

    formatMethodName(method) {
        const names = {
            listing: 'Listing Factors/Multiples',
            prime_factorization: 'Prime Factorization',
            euclidean: 'Euclidean Algorithm',
            gcd_relationship: 'GCD-LCM Relationship Formula',
            sequential: 'Sequential Pairwise Method'
        };

        return names[method] || method;
    }

    describeMethodSuitability(method, category) {
        const suitability = {
            listing: 'Small numbers (under 20), visual learners, beginners',
            prime_factorization: 'Medium numbers, systematic approach, multiple numbers',
            euclidean: 'Large numbers, efficiency needed, GCD calculation',
            gcd_relationship: 'Finding LCM when GCD is known or easy to find',
            sequential: 'Three or more numbers'
        };

        return suitability[method] || 'General purpose';
    }

    getMethodOverviewSteps(method, category) {
        const stepsMap = {
            listing: category === 'gcd' ?
                ['List all factors of each number', 'Identify common factors', 'Select the greatest common factor'] :
                ['List multiples of each number', 'Identify common multiples', 'Select the least common multiple'],
            
            prime_factorization: category === 'gcd' ?
                ['Find prime factorization of each number', 'Identify common primes', 'Take minimum exponent for each common prime', 'Multiply prime powers'] :
                ['Find prime factorization of each number', 'List all primes from any number', 'Take maximum exponent for each prime', 'Multiply prime powers'],
            
            euclidean: [
                'Divide larger by smaller, find remainder',
                'Replace larger with smaller, smaller with remainder',
                'Repeat until remainder is 0',
                'GCD is last non-zero remainder'
            ],
            
            gcd_relationship: [
                'Find GCD using any method',
                'Apply formula: LCM = (a × b) / GCD',
                'Calculate product a × b',
                'Divide by GCD to get LCM'
            ],
            
            sequential: category === 'gcd' ?
                ['Find GCD of first two numbers', 'Find GCD of result with third number', 'Continue for all numbers'] :
                ['Find LCM of first two numbers', 'Find LCM of result with third number', 'Continue for all numbers']
        };

        return stepsMap[method] || ['Apply standard method'];
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
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

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                stepsData.push(['After', step.afterExpression]);
            }

            if (step.equation) {
                stepsData.push(['Equation', step.equation]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.method) {
                stepsData.push(['Method', step.method]);
            }

            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
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

            if (step.finalAnswer) {
                stepsData.push(['✓ FINAL ANSWER', step.expression || 'See above']);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createLessonSection() {
        const category = this.currentSolution?.category;
        
        let lessonKey = 'gcd_basics';
        if (category === 'lcm') {
            lessonKey = 'lcm_basics';
        }

        const lesson = this.lessons[lessonKey];
        if (!lesson) return null;

        const lessonData = [
            ['Lesson', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach(concept => {
            lessonData.push(['•', concept]);
        });

        lessonData.push(['', '']);
        lessonData.push(['Theory', lesson.theory]);

        if (lesson.keyFormulas) {
            lessonData.push(['', '']);
            lessonData.push(['Key Formulas', '']);
            for (const [name, formula] of Object.entries(lesson.keyFormulas)) {
                lessonData.push([name, formula]);
            }
        }

        if (lesson.methods) {
            lessonData.push(['', '']);
            lessonData.push(['Methods', lesson.methods.join(', ')]);
        }

        if (lesson.applications) {
            lessonData.push(['', '']);
            lessonData.push(['Applications', '']);
            lesson.applications.forEach(app => {
                lessonData.push(['•', app]);
            });
        }

        return {
            title: 'Core Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Result', `${this.currentSolution.category.toUpperCase()}(${this.currentSolution.numbers.join(', ')}) = ${this.currentSolution.result}`],
            ['Method Used', this.formatMethodName(this.currentSolution.method)]
        ];

        if (this.currentSolution.type) {
            solutionData.push(['Type', this.currentSolution.type]);
        }

        if (this.currentSolution.interpretation) {
            solutionData.push(['', '']);
            solutionData.push(['Interpretation', this.currentSolution.interpretation]);
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
            ['Calculation Type', this.currentSolution.category.toUpperCase()],
            ['Method Used', this.formatMethodName(this.currentSolution.method)],
            ['Number Count', this.currentSolution.numbers.length],
            ['Difficulty Level', this.assessDifficulty(this.currentSolution)],
            ['Steps Required', this.solutionSteps?.length || 0]
        ];

        // Add specific details based on method
        if (this.currentSolution.details) {
            const details = this.currentSolution.details;
            
            if (details.gcd !== undefined) {
                analysisData.push(['GCD Value', details.gcd]);
            }
            
            if (details.lcm !== undefined) {
                analysisData.push(['LCM Value', details.lcm]);
            }

            if (details.primeFactorsA) {
                analysisData.push(['', '']);
                analysisData.push(['Prime Factorizations', '']);
                analysisData.push([`${this.currentSolution.numbers[0]}`, details.factorizationStringA]);
                if (details.factorizationStringB) {
                    analysisData.push([`${this.currentSolution.numbers[1]}`, details.factorizationStringB]);
                }
            }
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    assessDifficulty(solution) {
        const maxNum = Math.max(...solution.numbers);
        const method = solution.method;

        if (maxNum <= 20 && method === 'listing') {
            return 'Easy';
        } else if (maxNum <= 100 && (method === 'listing' || method === 'prime_factorization')) {
            return 'Medium';
        } else if (method === 'euclidean' || maxNum > 100) {
            return 'Hard';
        } else if (solution.numbers.length > 2) {
            return 'Medium-Hard';
        }

        return 'Medium';
    }

    createVerificationSection() {
        if (!this.currentSolution) return null;

        const verification = this.currentSolution.verification;
        if (!verification) return null;

        const verificationData = [
            ['Verification Method', 'Direct Check'],
            ['', '']
        ];

        if (this.currentSolution.category === 'gcd') {
            const [a, b] = this.currentSolution.numbers;
            const gcd = this.currentSolution.result;
            
            verificationData.push(['GCD Result', gcd]);
            verificationData.push(['', '']);
            verificationData.push(['Divisibility Checks', '']);
            verificationData.push([`${a} ÷ ${gcd}`, `${a / gcd} (divides evenly: ${verification.dividesA ? '✓' : '✗'})`]);
            verificationData.push([`${b} ÷ ${gcd}`, `${b / gcd} (divides evenly: ${verification.dividesB ? '✓' : '✗'})`]);
            
            if (this.currentSolution.numbers.length === 2) {
                verificationData.push(['', '']);
                verificationData.push(['GCD-LCM Relationship Check', '']);
                const lcm = this.computeLCM(a, b);
                verificationData.push(['GCD × LCM', `${gcd} × ${lcm} = ${gcd * lcm}`]);
                verificationData.push(['a × b', `${a} × ${b} = ${a * b}`]);
                verificationData.push(['Relationship Holds', (gcd * lcm === a * b) ? 'Yes ✓' : 'No ✗']);
            }

        } else if (this.currentSolution.category === 'lcm') {
            const [a, b] = this.currentSolution.numbers;
            const lcm = this.currentSolution.result;
            
            verificationData.push(['LCM Result', lcm]);
            verificationData.push(['', '']);
            verificationData.push(['Divisibility Checks', '']);
            verificationData.push([`${lcm} ÷ ${a}`, `${lcm / a} (divides evenly: ${verification.divisibleByA ? '✓' : '✗'})`]);
            verificationData.push([`${lcm} ÷ ${b}`, `${lcm / b} (divides evenly: ${verification.divisibleByB ? '✓' : '✗'})`]);
            
            if (this.currentSolution.numbers.length === 2) {
                verificationData.push(['', '']);
                verificationData.push(['GCD-LCM Relationship Check', '']);
                const gcd = this.computeGCD(a, b);
                verificationData.push(['GCD × LCM', `${gcd} × ${lcm} = ${gcd * lcm}`]);
                verificationData.push(['a × b', `${a} × ${b} = ${a * b}`]);
                verificationData.push(['Relationship Holds', (gcd * lcm === a * b) ? 'Yes ✓' : 'No ✗']);
            }
        }

        verificationData.push(['', '']);
        verificationData.push(['Valid', verification.isValid ? 'Yes ✓' : 'No ✗']);

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const category = this.currentSolution?.category || 'gcd';
        
        // Filter applications by category
        const applications = Object.values(this.realWorldProblems).filter(app => {
            if (category === 'gcd') {
                return app.requiresGCD === true;
            } else {
                return app.requiresLCM === true;
            }
        }).slice(0, 3);

        if (applications.length === 0) return null;

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
            if (app.solution) {
                appData.push(['Solution', app.solution]);
            }
            appData.push(['', '']);
        });

        return {
            title: 'Real-World Applications',
            type: 'applications',
            data: appData
        };
    }

    createRelatedConceptsSection() {
        const category = this.currentSolution?.category || 'gcd';

        const relatedData = [
            ['Related Concepts', ''],
            ['', '']
        ];

        if (category === 'gcd') {
            relatedData.push(['LCM', 'Least Common Multiple - closely related via GCD × LCM = a × b']);
            relatedData.push(['Coprime Numbers', 'Numbers with GCD = 1']);
            relatedData.push(['Fraction Simplification', 'Divide numerator and denominator by GCD']);
            relatedData.push(['Divisibility', 'GCD is largest common divisor']);
        } else {
            relatedData.push(['GCD', 'Greatest Common Divisor - related via GCD × LCM = a × b']);
            relatedData.push(['Common Denominator', 'LCM of denominators']);
            relatedData.push(['Multiples', 'LCM is least common multiple']);
            relatedData.push(['Synchronization', 'Events repeat at LCM interval']);
        }

        return {
            title: 'Related Concepts',
            type: 'related',
            data: relatedData
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generateGCDLCMPedagogicalNotes(this.currentProblem.type);

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

    generateGCDLCMPedagogicalNotes(problemType) {
        const category = problemType.includes('gcd') ? 'gcd' : 'lcm';
        const method = problemType.includes('listing') ? 'listing' :
                      problemType.includes('prime') ? 'prime_factorization' :
                      problemType.includes('euclidean') ? 'euclidean' : 'general';

        const pedagogicalDatabase = {
            gcd: {
                listing: {
                    objectives: [
                        'Find GCD by listing all factors',
                        'Identify common factors systematically',
                        'Understand what GCD represents'
                    ],
                    keyConcepts: [
                        'Factor vs multiple',
                        'Common factors',
                        'Greatest means largest'
                    ],
                    prerequisites: [
                        'Multiplication and division',
                        'Understanding of factors',
                        'Systematic listing skills'
                    ],
                    commonDifficulties: [
                        'Missing factors in the middle range',
                        'Confusing factors with multiples',
                        'Not selecting the greatest'
                    ],
                    teachingStrategies: [
                        'Use factor pairs method',
                        'Visual Venn diagrams',
                        'Start with very small numbers'
                    ],
                    extensions: [
                        'Try prime factorization method',
                        'Find GCD of three numbers',
                        'Apply to fraction simplification'
                    ],
                    assessment: [
                        'Can student list all factors?',
                        'Does student identify common ones?',
                        'Can student select greatest?'
                    ]
                },
                prime_factorization: {
                    objectives: [
                        'Find prime factorization',
                        'Use prime factorization to find GCD',
                        'Understand minimum exponent rule'
                    ],
                    keyConcepts: [
                        'Prime vs composite',
                        'Prime factorization is unique',
                        'GCD uses minimum exponents'
                    ],
                    prerequisites: [
                        'Identifying prime numbers',
                        'Factor trees',
                        'Exponent notation'
                    ],
                    commonDifficulties: [
                        'Incomplete factorization',
                        'Using maximum instead of minimum exponents',
                        'Computational errors'
                    ],
                    teachingStrategies: [
                        'Factor tree visualization',
                        'Color-code common primes',
                        'Emphasize minimum vs maximum'
                    ],
                    extensions: [
                        'Apply to large numbers',
                        'Find GCD and LCM together',
                        'Explore number structure'
                    ],
                    assessment: [
                        'Can student find prime factorization?',
                        'Does student take minimum exponents?',
                        'Can student verify result?'
                    ]
                },
                euclidean: {
                    objectives: [
                        'Apply Euclidean algorithm',
                        'Understand division with remainder',
                        'Recognize efficiency of method'
                    ],
                    keyConcepts: [
                        'GCD(a,b) = GCD(b, a mod b)',
                        'Continue until remainder is 0',
                        'Last non-zero remainder is GCD'
                    ],
                    prerequisites: [
                        'Division with remainders',
                        'Understanding of algorithms',
                        'Patience with iteration'
                    ],
                    commonDifficulties: [
                        'Stopping too early',
                        'Division errors',
                        'Confusion about which remainder'
                    ],
                    teachingStrategies: [
                        'Walk through example slowly',
                        'Emphasize stopping condition',
                        'Show efficiency vs other methods'
                    ],
                    extensions: [
                        'Compare efficiency with other methods',
                        'Extended Euclidean algorithm',
                        'Apply to very large numbers'
                    ],
                    assessment: [
                        'Can student perform divisions correctly?',
                        'Does student continue until r=0?',
                        'Can student identify GCD?'
                    ]
                }
            },
            lcm: {
                listing: {
                    objectives: [
                        'Find LCM by listing multiples',
                        'Identify common multiples',
                        'Understand what LCM represents'
                    ],
                    keyConcepts: [
                        'Multiple vs factor',
                        'Common multiples',
                        'Least means smallest'
                    ],
                    prerequisites: [
                        'Multiplication tables',
                        'Skip counting',
                        'Comparing numbers'
                    ],
                    commonDifficulties: [
                        'Not listing enough multiples',
                        'Confusing with greatest',
                        'Arithmetic errors in multiplication'
                    ],
                    teachingStrategies: [
                        'Number line visualization',
                        'Skip counting practice',
                        'Start with small numbers'
                    ],
                    extensions: [
                        'Try prime factorization method',
                        'Use GCD relationship',
                        'Apply to adding fractions'
                    ],
                    assessment: [
                        'Can student list multiples correctly?',
                        'Does student identify common ones?',
                        'Can student select least?'
                    ]
                },
                prime_factorization: {
                    objectives: [
                        'Find prime factorization',
                        'Use prime factorization to find LCM',
                        'Understand maximum exponent rule'
                    ],
                    keyConcepts: [
                        'LCM uses maximum exponents',
                        'Include all primes from either number',
                        'LCM is product of prime powers'
                    ],
                    prerequisites: [
                        'Prime factorization',
                        'Exponent notation',
                        'Comparing exponents'
                    ],
                    commonDifficulties: [
                        'Using minimum instead of maximum',
                        'Forgetting primes from one number',
                        'Multiplication errors'
                    ],
                    teachingStrategies: [
                        'Emphasize maximum vs minimum',
                        'Visual comparison of exponents',
                        'Relate to GCD method'
                    ],
                    extensions: [
                        'Find LCM of three+ numbers',
                        'Explore GCD-LCM relationship',
                        'Apply to real problems'
                    ],
                    assessment: [
                        'Does student take maximum exponents?',
                        'Does student include all primes?',
                        'Can student compute final LCM?'
                    ]
                }
            }
        };

        const categoryNotes = pedagogicalDatabase[category]?.[method];
        
        if (categoryNotes) {
            return categoryNotes;
        }

        // Default notes
        return {
            objectives: [`Find ${category.toUpperCase()} of given numbers`],
            keyConcepts: [`Understanding ${category.toUpperCase()}`],
            prerequisites: ['Basic arithmetic'],
            commonDifficulties: ['Computational errors'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex problems'],
            assessment: ['Verify understanding']
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateGCDLCMAlternativeMethods(this.currentProblem.type);

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

    generateGCDLCMAlternativeMethods(problemType) {
        const category = problemType.includes('gcd') ? 'gcd' : 'lcm';
        const currentMethod = this.currentSolution?.method || 'listing';

        const alternativeDatabase = {
            gcd: {
                listing: {
                    primaryMethod: 'Listing Factors',
                    methods: [
                        {
                            name: 'Prime Factorization',
                            description: 'Break into primes, take minimum exponents - more systematic for larger numbers'
                        },
                        {
                            name: 'Euclidean Algorithm',
                            description: 'Repeated division - most efficient for large numbers'
                        },
                        {
                            name: 'Subtraction Method',
                            description: 'Repeatedly subtract smaller from larger - less efficient but intuitive'
                        }
                    ],
                    comparison: 'Listing is best for small numbers and visual learners; Euclidean is fastest for large numbers; Prime factorization is most systematic'
                },
                prime_factorization: {
                    primaryMethod: 'Prime Factorization',
                    methods: [
                        {
                            name: 'Listing Factors',
                            description: 'List all factors and find greatest common - simpler for small numbers'
                        },
                        {
                            name: 'Euclidean Algorithm',
                            description: 'Repeated division - faster for large numbers'
                        },
                        {
                            name: 'Factor Tree Combined',
                            description: 'Use multiple factor trees to visualize prime breakdowns'
                        }
                    ],
                    comparison: 'Prime factorization is systematic and extends to multiple numbers; Euclidean is more efficient; Listing is more intuitive'
                },
                euclidean: {
                    primaryMethod: 'Euclidean Algorithm',
                    methods: [
                        {
                            name: 'Prime Factorization',
                            description: 'Find prime factors, take minimum exponents - more informative about number structure'
                        },
                        {
                            name: 'Listing Factors',
                            description: 'List all factors - better for understanding what GCD means'
                        },
                        {
                            name: 'Binary GCD',
                            description: 'Use binary representation - efficient for computer implementation'
                        }
                    ],
                    comparison: 'Euclidean is most efficient; Prime factorization shows structure; Listing is most concrete'
                }
            },
            lcm: {
                listing: {
                    primaryMethod: 'Listing Multiples',
                    methods: [
                        {
                            name: 'Prime Factorization',
                            description: 'Find primes, take maximum exponents - systematic for any size numbers'
                        },
                        {
                            name: 'GCD Relationship',
                            description: 'Use LCM = (a × b) / GCD - efficient when GCD is known'
                        },
                        {
                            name: 'Build-Up Method',
                            description: 'Multiply larger number by 1, 2, 3... until divisible by smaller'
                        }
                    ],
                    comparison: 'Listing is intuitive for small numbers; Prime factorization is systematic; GCD relationship is efficient'
                },
                prime_factorization: {
                    primaryMethod: 'Prime Factorization',
                    methods: [
                        {
                            name: 'Listing Multiples',
                            description: 'List multiples until common one found - simpler for small numbers'
                        },
                        {
                            name: 'GCD Relationship',
                            description: 'Find GCD first, then use LCM = (a × b) / GCD - two-step but reliable'
                        },
                        {
                            name: 'Ladder Method',
                            description: 'Divide by common factors systematically - visual alternative'
                        }
                    ],
                    comparison: 'Prime factorization is systematic and extends well; GCD relationship is efficient; Listing is most concrete'
                },
                gcd_relationship: {
                    primaryMethod: 'GCD-LCM Relationship Formula',
                    methods: [
                        {
                            name: 'Prime Factorization',
                            description: 'Find primes, take maximum exponents - direct approach'
                        },
                        {
                            name: 'Listing Multiples',
                            description: 'List multiples directly - more intuitive for beginners'
                        },
                        {
                            name: 'Combined Method',
                            description: 'Find GCD by Euclidean, then apply formula - very efficient'
                        }
                    ],
                    comparison: 'GCD relationship is efficient when GCD is easy to find; Prime factorization is direct; Listing is most concrete'
                }
            }
        };

        return alternativeDatabase[category]?.[currentMethod] || {
            primaryMethod: 'Standard method',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods may be applicable'
            }],
            comparison: 'Choose method based on number size and personal preference'
        };
    }

    createPracticeProblemsSection() {
        const category = this.currentSolution?.category || 'gcd';
        const problems = this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy Problems', '']
        ];

        // Filter problems by category
        const easyProblems = category === 'gcd' ?
            ['GCD(6, 9)', 'GCD(10, 15)', 'GCD(8, 12)'] :
            ['LCM(2, 3)', 'LCM(4, 5)', 'LCM(3, 6)'];

        easyProblems.forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium Problems', '']);

        const mediumProblems = category === 'gcd' ?
            ['GCD(24, 36)', 'GCD(48, 72)', 'GCD(30, 45)'] :
            ['LCM(12, 15)', 'LCM(8, 12)', 'LCM(15, 20)'];

        mediumProblems.forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Hard Problems', '']);

        const hardProblems = category === 'gcd' ?
            ['GCD(144, 180)', 'GCD(12, 18, 24)', 'GCD(252, 105) using Euclidean'] :
            ['LCM(8, 12, 15)', 'LCM(14, 21, 35)', 'LCM(18, 24, 30)'];

        hardProblems.forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        // Add word problems
        practiceData.push(['', '']);
        practiceData.push(['Word Problems', '']);

        const wordProblems = category === 'gcd' ? [
            'Floor is 24ft by 36ft. Largest square tile?',
            'Cut 30cm and 45cm ribbons equally. Longest pieces?',
            '48 apples, 60 oranges. Max fruits per identical bag?'
        ] : [
            'Bus A every 12 min, Bus B every 18 min. When together?',
            'Events repeat every 8 and 12 days. When coincide?',
            'Add fractions 1/4 + 1/6. Find LCD.'
        ];

        wordProblems.forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    createHistoricalContextSection() {
        if (!this.includeHistoricalContext) return null;

        const context = this.historicalContext;

        const historyData = [
            ['Historical Context', ''],
            ['', ''],
            ['Euclidean Algorithm', ''],
            ['Origin', context.euclidean_algorithm.origin],
            ['Mathematician', context.euclidean_algorithm.mathematician],
            ['Source', context.euclidean_algorithm.source],
            ['Significance', context.euclidean_algorithm.significance],
            ['Modern Relevance', context.euclidean_algorithm.modernRelevance],
            ['Fun Fact', context.euclidean_algorithm.funFact],
            ['', ''],
            ['Fundamental Theorem', ''],
            ['Theorem', context.fundamental_theorem.theorem],
            ['Statement', context.fundamental_theorem.statement],
            ['Importance', context.fundamental_theorem.importance],
            ['Applications', context.fundamental_theorem.applications],
            ['', ''],
            ['Historical Applications', ''],
            ['Ancient', context.historical_applications.ancient],
            ['Medieval', context.historical_applications.medieval],
            ['Modern', context.historical_applications.modern]
        ];

        return {
            title: 'Historical Context',
            type: 'historical',
            data: historyData
        };
    }
}

// Export the class
export default EnhancedGCDLCMathematicalWorkbook;
