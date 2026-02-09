// Enhanced Divisibility Mathematical Workbook - Comprehensive Implementation
import * as math from 'mathjs';

export class EnhancedDivisibilityMathematicalWorkbook {
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
        this.initializeDivisibilityRules();
        this.initializeDivisibilitySolvers();
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
        this.initializeDivisibilityLessons();
    }

    initializeDivisibilityLessons() {
        this.lessons = {
            divisibility_basics: {
                title: "Divisibility Fundamentals",
                concepts: [
                    "a divides b (a|b) if b = ka for some integer k",
                    "Divisibility is transitive: if a|b and b|c, then a|c",
                    "If a|b and a|c, then a|(b±c)",
                    "Every number is divisible by 1 and itself"
                ],
                theory: "Divisibility describes when one integer can be divided by another with no remainder. Understanding divisibility patterns helps in factorization, simplification, and number theory.",
                keyFormulas: {
                    "Definition": "a|b means b = ka for integer k",
                    "Remainder": "b = qa + r where 0 ≤ r < a",
                    "Divisibility Test": "a|b if and only if r = 0"
                },
                properties: [
                    "Reflexive: a|a for all a",
                    "Transitive: if a|b and b|c, then a|c",
                    "If a|b and b|a, then a = ±b",
                    "If a|b, then a|bc for any integer c"
                ],
                applications: [
                    "Checking if fractions can be simplified",
                    "Finding common denominators",
                    "Scheduling and cycles",
                    "Grouping and distribution problems"
                ]
            },

            divisibility_tests: {
                title: "Divisibility Tests",
                concepts: [
                    "Quick methods to check divisibility without division",
                    "Based on number system properties (base 10)",
                    "Different tests for different divisors",
                    "Can be combined for composite numbers"
                ],
                theory: "Divisibility tests use properties of the decimal system to quickly determine if a number is divisible by common divisors without performing full division.",
                rules: {
                    "2": "Last digit is 0, 2, 4, 6, or 8",
                    "3": "Sum of digits is divisible by 3",
                    "4": "Last two digits form a number divisible by 4",
                    "5": "Last digit is 0 or 5",
                    "6": "Divisible by both 2 and 3",
                    "8": "Last three digits form a number divisible by 8",
                    "9": "Sum of digits is divisible by 9",
                    "10": "Last digit is 0",
                    "11": "Alternating sum of digits is divisible by 11",
                    "12": "Divisible by both 3 and 4"
                },
                applications: [
                    "Mental math shortcuts",
                    "Simplifying fractions",
                    "Finding factors quickly",
                    "Checking arithmetic"
                ]
            },

            divisor_counting: {
                title: "Counting Divisors",
                concepts: [
                    "Number of divisors from prime factorization",
                    "Formula: τ(n) = (a₁+1)(a₂+1)...(aₖ+1)",
                    "Includes 1 and n itself",
                    "Perfect numbers have special divisor properties"
                ],
                theory: "The number of divisors can be calculated from the prime factorization. If n = p₁^a₁ × p₂^a₂ × ... × pₖ^aₖ, then τ(n) = (a₁+1)(a₂+1)...(aₖ+1).",
                keyFormulas: {
                    "Divisor Count": "τ(n) = Π(aᵢ + 1) for n = Πpᵢ^aᵢ",
                    "Prime Power": "τ(p^k) = k + 1",
                    "Coprime Product": "τ(mn) = τ(m)τ(n) if gcd(m,n) = 1"
                },
                examples: [
                    "τ(12) = τ(2² × 3¹) = (2+1)(1+1) = 6",
                    "τ(100) = τ(2² × 5²) = (2+1)(2+1) = 9",
                    "τ(p) = 2 for any prime p"
                ],
                applications: [
                    "Finding all factors",
                    "Perfect number investigation",
                    "Cryptography",
                    "Number theory problems"
                ]
            },

            sum_of_divisors: {
                title: "Sum of Divisors",
                concepts: [
                    "Sum of all divisors: σ(n)",
                    "Formula from prime factorization",
                    "σ(n) = Π[(pᵢ^(aᵢ+1) - 1)/(pᵢ - 1)]",
                    "Multiplicative function for coprime numbers"
                ],
                theory: "The sum of divisors function σ(n) adds all positive divisors of n including 1 and n. It can be computed efficiently using prime factorization.",
                keyFormulas: {
                    "Sum Formula": "σ(n) = Π[(pᵢ^(aᵢ+1) - 1)/(pᵢ - 1)]",
                    "Prime Power": "σ(p^k) = (p^(k+1) - 1)/(p - 1) = 1 + p + p² + ... + p^k",
                    "Coprime Product": "σ(mn) = σ(m)σ(n) if gcd(m,n) = 1"
                },
                examples: [
                    "σ(6) = 1 + 2 + 3 + 6 = 12",
                    "σ(12) = 1 + 2 + 3 + 4 + 6 + 12 = 28",
                    "σ(p) = 1 + p for prime p"
                ],
                specialNumbers: {
                    "Perfect": "σ(n) = 2n (e.g., 6, 28, 496)",
                    "Deficient": "σ(n) < 2n",
                    "Abundant": "σ(n) > 2n",
                    "Amicable": "σ(a) - a = b and σ(b) - b = a"
                },
                applications: [
                    "Perfect number classification",
                    "Number theory",
                    "Aliquot sequences",
                    "Mathematical puzzles"
                ]
            },

            prime_factorization: {
                title: "Prime Factorization",
                concepts: [
                    "Every integer > 1 has unique prime factorization",
                    "Fundamental theorem of arithmetic",
                    "Express as product of prime powers",
                    "Essential for divisor calculations"
                ],
                theory: "Prime factorization expresses a number as a product of prime numbers raised to powers. This representation is unique and fundamental to many divisibility properties.",
                methods: [
                    "Factor tree method",
                    "Repeated division by primes",
                    "Trial division",
                    "Sieve methods for multiple numbers"
                ],
                keyFormulas: {
                    "Standard Form": "n = p₁^a₁ × p₂^a₂ × ... × pₖ^aₖ",
                    "Divisor from factorization": "d|n iff d = p₁^b₁ × p₂^b₂ × ... × pₖ^bₖ where 0 ≤ bᵢ ≤ aᵢ"
                },
                applications: [
                    "Finding GCD and LCM",
                    "Simplifying fractions",
                    "Counting divisors",
                    "Sum of divisors calculation",
                    "Cryptography (RSA)"
                ]
            },

            gcd_lcm: {
                title: "GCD and LCM",
                concepts: [
                    "GCD: Greatest Common Divisor",
                    "LCM: Least Common Multiple",
                    "Relationship: gcd(a,b) × lcm(a,b) = a × b",
                    "Euclidean algorithm for GCD"
                ],
                theory: "GCD is the largest number dividing both inputs. LCM is the smallest number divisible by both inputs. They're intimately connected.",
                keyFormulas: {
                    "GCD-LCM Relation": "gcd(a,b) × lcm(a,b) = ab",
                    "From Factorization": "gcd takes minimum powers, LCM takes maximum powers",
                    "Euclidean Algorithm": "gcd(a,b) = gcd(b, a mod b)"
                },
                properties: [
                    "gcd(a,0) = a",
                    "gcd(a,b) = gcd(b,a)",
                    "gcd(a,b) divides a and b",
                    "lcm(a,b) is divisible by a and b"
                ],
                applications: [
                    "Simplifying fractions to lowest terms",
                    "Finding common denominators",
                    "Scheduling problems",
                    "Gear ratios"
                ]
            },

            modular_arithmetic: {
                title: "Modular Arithmetic and Divisibility",
                concepts: [
                    "a ≡ b (mod n) means n|(a-b)",
                    "Remainder when dividing by n",
                    "Clock arithmetic",
                    "Congruence classes"
                ],
                theory: "Modular arithmetic focuses on remainders after division. It's fundamental to divisibility and has applications in cryptography, computer science, and number theory.",
                keyFormulas: {
                    "Definition": "a ≡ b (mod n) iff n|(a-b)",
                    "Addition": "(a + b) mod n = ((a mod n) + (b mod n)) mod n",
                    "Multiplication": "(a × b) mod n = ((a mod n) × (b mod n)) mod n"
                },
                properties: [
                    "Reflexive: a ≡ a (mod n)",
                    "Symmetric: if a ≡ b (mod n), then b ≡ a (mod n)",
                    "Transitive: if a ≡ b and b ≡ c (mod n), then a ≡ c (mod n)",
                    "Compatible with addition and multiplication"
                ],
                applications: [
                    "Cryptography",
                    "Hash functions",
                    "Check digits",
                    "Cyclical patterns"
                ]
            },

            perfect_numbers: {
                title: "Perfect, Deficient, and Abundant Numbers",
                concepts: [
                    "Perfect: σ(n) = 2n (sum of divisors equals twice the number)",
                    "Deficient: σ(n) < 2n",
                    "Abundant: σ(n) > 2n",
                    "Euclid-Euler theorem for even perfect numbers"
                ],
                theory: "Numbers are classified by how their proper divisors sum compares to the number itself. Perfect numbers have been studied since ancient Greece.",
                knownPerfectNumbers: [
                    "6 = 1 + 2 + 3",
                    "28 = 1 + 2 + 4 + 7 + 14",
                    "496 = 1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248",
                    "8128"
                ],
                keyFormulas: {
                    "Even Perfect": "n = 2^(p-1)(2^p - 1) where 2^p - 1 is prime (Mersenne prime)",
                    "Abundance": "σ(n) - 2n"
                },
                openQuestions: [
                    "Are there infinitely many perfect numbers?",
                    "Are there any odd perfect numbers?",
                    "Connection to Mersenne primes"
                ],
                applications: [
                    "Number theory research",
                    "Mathematical beauty",
                    "Historical significance"
                ]
            },

            divisibility_word_problems: {
                title: "Divisibility in Word Problems",
                concepts: [
                    "Grouping problems (divide into equal groups)",
                    "Remainder problems",
                    "Scheduling and cycles",
                    "Distribution problems"
                ],
                problemTypes: {
                    "Equal Grouping": "Can we divide items into equal groups?",
                    "Remainder": "What's left over after division?",
                    "LCM Problems": "When do cycles coincide?",
                    "GCD Problems": "Largest size that divides both quantities"
                },
                examples: [
                    "24 students, can we form groups of 5? (divisibility test)",
                    "Buses hold 45, cars hold 5. What number of people allows both full vehicles? (LCM)",
                    "Two gears with 12 and 18 teeth. After how many rotations are they aligned? (LCM)",
                    "Cut rope lengths of 24m and 36m into equal pieces. Max length? (GCD)"
                ],
                applications: [
                    "Resource allocation",
                    "Scheduling",
                    "Manufacturing",
                    "Event planning"
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
            'divides': '|',
            'ndivides': '∤',
            'leq': '≤',
            'geq': '≥',
            'neq': '≠',
            'equiv': '≡',
            'approx': '≈',
            'infinity': '∞',
            'sum': 'Σ',
            'product': 'Π',
            'tau': 'τ',
            'sigma': 'σ',
            'prime': '′',
            'pi': 'π',
            'forall': '∀',
            'exists': '∃',
            'in': '∈',
            'notin': '∉'
        };
    }

    initializeDivisibilityRules() {
        this.divisibilityRules = {
            2: {
                name: "Divisibility by 2",
                rule: "A number is divisible by 2 if its last digit is even (0, 2, 4, 6, 8)",
                test: (n) => n % 2 === 0,
                explanation: "In base 10, 10 is divisible by 2, so all place values except the ones place are divisible by 2",
                difficulty: "easy"
            },
            3: {
                name: "Divisibility by 3",
                rule: "A number is divisible by 3 if the sum of its digits is divisible by 3",
                test: (n) => {
                    const digitSum = this.sumOfDigits(n);
                    return digitSum % 3 === 0;
                },
                explanation: "Since 10 ≡ 1 (mod 3), each digit contributes its face value to the remainder",
                difficulty: "easy"
            },
            4: {
                name: "Divisibility by 4",
                rule: "A number is divisible by 4 if its last two digits form a number divisible by 4",
                test: (n) => (n % 100) % 4 === 0,
                explanation: "Since 100 is divisible by 4, only the last two digits matter",
                difficulty: "medium"
            },
            5: {
                name: "Divisibility by 5",
                rule: "A number is divisible by 5 if its last digit is 0 or 5",
                test: (n) => n % 5 === 0,
                explanation: "10 is divisible by 5, so only the last digit determines divisibility by 5",
                difficulty: "easy"
            },
            6: {
                name: "Divisibility by 6",
                rule: "A number is divisible by 6 if it's divisible by both 2 and 3",
                test: (n) => n % 2 === 0 && this.sumOfDigits(n) % 3 === 0,
                explanation: "6 = 2 × 3, and gcd(2,3) = 1, so divisibility by 6 requires divisibility by both factors",
                difficulty: "medium"
            },
            7: {
                name: "Divisibility by 7",
                rule: "Remove last digit, double it, subtract from remaining number. Result divisible by 7 means original is",
                test: (n) => n % 7 === 0,
                explanation: "Based on the fact that 10 ≡ 3 (mod 7), or equivalently -2×10 ≡ 1 (mod 7)",
                difficulty: "hard",
                alternative: "Alternatively: 1001 = 7 × 11 × 13, so grouping by 3s from right works"
            },
            8: {
                name: "Divisibility by 8",
                rule: "A number is divisible by 8 if its last three digits form a number divisible by 8",
                test: (n) => (n % 1000) % 8 === 0,
                explanation: "Since 1000 is divisible by 8, only the last three digits matter",
                difficulty: "medium"
            },
            9: {
                name: "Divisibility by 9",
                rule: "A number is divisible by 9 if the sum of its digits is divisible by 9",
                test: (n) => this.sumOfDigits(n) % 9 === 0,
                explanation: "Since 10 ≡ 1 (mod 9), each digit contributes its face value to the remainder",
                difficulty: "easy"
            },
            10: {
                name: "Divisibility by 10",
                rule: "A number is divisible by 10 if its last digit is 0",
                test: (n) => n % 10 === 0,
                explanation: "Direct consequence of base-10 number system",
                difficulty: "easy"
            },
            11: {
                name: "Divisibility by 11",
                rule: "A number is divisible by 11 if the alternating sum of its digits is divisible by 11",
                test: (n) => {
                    const altSum = this.alternatingDigitSum(n);
                    return altSum % 11 === 0;
                },
                explanation: "Since 10 ≡ -1 (mod 11), digits alternate in sign contribution",
                difficulty: "hard"
            },
            12: {
                name: "Divisibility by 12",
                rule: "A number is divisible by 12 if it's divisible by both 3 and 4",
                test: (n) => this.sumOfDigits(n) % 3 === 0 && (n % 100) % 4 === 0,
                explanation: "12 = 3 × 4, and gcd(3,4) = 1",
                difficulty: "medium"
            }
        };
    }

    initializeDivisibilitySolvers() {
        this.divisibilityTypes = {
            divisibility_test: {
                patterns: [
                    /divisible.*by.*(\d+)/i,
                    /(\d+).*divides.*(\d+)/i,
                    /test.*divisibility/i,
                    /check.*divisible/i
                ],
                solver: this.solveDivisibilityTest.bind(this),
                name: 'Divisibility Test',
                category: 'divisibility_test',
                description: 'Tests if a number is divisible by another'
            },

            divisor_count: {
                patterns: [
                    /count.*divisors/i,
                    /number.*of.*divisors/i,
                    /how.*many.*divisors/i,
                    /tau.*function/i,
                    /τ\(/
                ],
                solver: this.solveDivisorCount.bind(this),
                name: 'Divisor Count',
                category: 'divisor_count',
                description: 'Counts the number of divisors of a number'
            },

            sum_of_divisors: {
                patterns: [
                    /sum.*of.*divisors/i,
                    /sigma.*function/i,
                    /σ\(/,
                    /add.*all.*divisors/i,
                    /total.*divisors/i
                ],
                solver: this.solveSumOfDivisors.bind(this),
                name: 'Sum of Divisors',
                category: 'sum_of_divisors',
                description: 'Calculates the sum of all divisors'
            },

            list_divisors: {
                patterns: [
                    /list.*divisors/i,
                    /find.*all.*divisors/i,
                    /factors.*of/i,
                    /divisors.*of/i
                ],
                solver: this.solveListDivisors.bind(this),
                name: 'List All Divisors',
                category: 'list_divisors',
                description: 'Lists all divisors of a number'
            },

            prime_factorization: {
                patterns: [
                    /prime.*factori[sz]ation/i,
                    /factor.*into.*primes/i,
                    /prime.*factors/i
                ],
                solver: this.solvePrimeFactorization.bind(this),
                name: 'Prime Factorization',
                category: 'prime_factorization',
                description: 'Finds the prime factorization'
            },

            gcd_calculation: {
                patterns: [
                    /gcd/i,
                    /greatest.*common.*divisor/i,
                    /gcf/i,
                    /hcf/i
                ],
                solver: this.solveGCD.bind(this),
                name: 'GCD Calculation',
                category: 'gcd',
                description: 'Finds the greatest common divisor'
            },

            lcm_calculation: {
                patterns: [
                    /lcm/i,
                    /least.*common.*multiple/i,
                    /lowest.*common.*multiple/i
                ],
                solver: this.solveLCM.bind(this),
                name: 'LCM Calculation',
                category: 'lcm',
                description: 'Finds the least common multiple'
            },

            perfect_number_check: {
                patterns: [
                    /perfect.*number/i,
                    /is.*perfect/i,
                    /check.*perfect/i
                ],
                solver: this.solvePerfectNumberCheck.bind(this),
                name: 'Perfect Number Check',
                category: 'perfect_number',
                description: 'Checks if a number is perfect, abundant, or deficient'
            },

            proper_divisor_sum: {
                patterns: [
                    /proper.*divisors/i,
                    /sum.*proper/i,
                    /aliquot.*sum/i
                ],
                solver: this.solveProperDivisorSum.bind(this),
                name: 'Proper Divisor Sum',
                category: 'proper_divisors',
                description: 'Sums all proper divisors (excluding the number itself)'
            },

            divisibility_rule_explanation: {
                patterns: [
                    /explain.*rule.*for.*(\d+)/i,
                    /why.*divisible.*by.*(\d+)/i,
                    /divisibility.*rule.*(\d+)/i
                ],
                solver: this.explainDivisibilityRule.bind(this),
                name: 'Divisibility Rule Explanation',
                category: 'rule_explanation',
                description: 'Explains the divisibility rule for a given divisor'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            divisibility_test: {
                'Testing divisibility by 3': [
                    'Only checking last digit instead of digit sum',
                    'Forgetting to keep summing if digit sum is large',
                    'Confusing rule for 3 with rule for 9'
                ],
                'Testing divisibility by 4': [
                    'Checking last digit instead of last two digits',
                    'Forgetting that 00 is divisible by 4',
                    'Not forming the two-digit number correctly'
                ],
                'Testing divisibility by 6': [
                    'Only checking divisibility by 2 or 3, not both',
                    'Thinking divisibility by 6 means divisible by last digit 6',
                    'Confusing with divisibility by 12'
                ],
                'Testing divisibility by 11': [
                    'Adding digits instead of alternating sum',
                    'Starting alternation from wrong end',
                    'Sign errors in alternating sum'
                ]
            },
            divisor_count: {
                'Counting divisors': [
                    'Forgetting to count 1 and the number itself',
                    'Double-counting when listing divisor pairs',
                    'Missing divisors in the middle range',
                    'Incorrect prime factorization leading to wrong count'
                ],
                'Using formula': [
                    'Forgetting to add 1 to each exponent',
                    'Multiplying exponents instead of (exponent + 1)',
                    'Missing prime factors in factorization'
                ]
            },
            sum_of_divisors: {
                'Computing sum': [
                    'Forgetting to include 1 or the number itself',
                    'Arithmetic errors when adding many divisors',
                    'Missing divisors when listing'
                ],
                'Using formula': [
                    'Incorrect application of geometric series formula',
                    'Forgetting to multiply formulas for different prime factors',
                    'Arithmetic errors in (p^(k+1) - 1)/(p - 1)'
                ]
            },
            prime_factorization: {
                'Finding factors': [
                    'Stopping too early before reaching √n',
                    'Missing repeated prime factors',
                    'Thinking 1 is prime',
                    'Missing small primes like 2 or 3'
                ],
                'Writing result': [
                    'Not using exponential notation for repeated factors',
                    'Listing factors in non-standard order',
                    'Including 1 in prime factorization'
                ]
            }
        };

        this.errorPrevention = {
            digit_sum_errors: {
                reminder: 'Keep summing digits until you get a small number to test',
                method: 'Write out each step: digits → sum → test'
            },
            factorization_completeness: {
                reminder: 'Check up to √n to ensure you haven\'t missed factors',
                method: 'Use systematic trial division by primes: 2, 3, 5, 7, 11...'
            },
            formula_application: {
                reminder: 'In τ(n) formula, remember to ADD 1 to each exponent',
                method: 'Write factorization clearly: n = p₁^a₁ × p₂^a₂, then τ(n) = (a₁+1)(a₂+1)'
            },
            divisor_listing: {
                reminder: 'List divisor pairs systematically to avoid missing any',
                method: 'Check each integer from 1 to √n; if it divides, record both quotients'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why divisibility works and its mathematical meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact steps to test divisibility or compute divisors',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical representation of factors and divisibility',
                language: 'visual and spatial metaphors'
            },
            algebraic: {
                focus: 'Formal number theory and modular arithmetic',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'small concrete numbers'
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
            equal_grouping: {
                scenario: "Dividing items into equal groups",
                examples: [
                    "30 students - can we make groups of 4?",
                    "48 cookies - pack equally in 6 boxes?",
                    "100 chairs - arrange in rows of 12?"
                ],
                divisibilityUse: "Testing if total is divisible by group size",
                context: "Event planning, classroom organization, packaging"
            },
            scheduling: {
                scenario: "Events that repeat on cycles",
                examples: [
                    "Bus comes every 12 min, train every 15 min. When do they coincide?",
                    "Three traffic lights: 30s, 45s, 60s cycles. When all green together?",
                    "Two gears: 20 teeth and 32 teeth. After how many rotations align?"
                ],
                divisibilityUse: "LCM finds when cycles synchronize",
                context: "Transportation, engineering, astronomy"
            },
            cutting_sharing: {
                scenario: "Cutting or sharing into equal parts",
                examples: [
                    "Ropes of 24m and 36m - maximum equal length pieces?",
                    "Two pizzas: 8 and 12 slices. Largest equal portion size?",
                    "Boards of 48\" and 72\" - largest square tiles?"
                ],
                divisibilityUse: "GCD finds largest common measurement",
                context: "Construction, cooking, resource allocation"
            },
            factorization_use: {
                scenario: "Breaking down into components",
                examples: [
                    "72 items - possible rectangular arrangements?",
                    "Password with 60 characters - factor into equal groups",
                    "60 players - possible team configurations"
                ],
                divisibilityUse: "Divisors show all possible equal groupings",
                context: "Organization, security, sports"
            },
            remainder_problems: {
                scenario: "Division with leftovers",
                examples: [
                    "37 students, buses hold 8 - how many buses needed?",
                    "100 candies in groups of 7 - how many left over?",
                    "Clock shows 100 hours - what time is it?"
                ],
                divisibilityUse: "Modular arithmetic and remainder calculation",
                context: "Daily life, scheduling, cyclical events"
            },
            check_digits: {
                scenario: "Error detection in codes",
                examples: [
                    "ISBN book codes use divisibility by 11",
                    "Credit card numbers use Luhn algorithm",
                    "UPC barcodes use divisibility checks"
                ],
                divisibilityUse: "Modular arithmetic detects errors",
                context: "Data integrity, commerce, identification"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            divisibility_test: {
                skills: ['Multiplication', 'Division', 'Addition', 'Place value'],
                priorKnowledge: ['Multiples', 'Factors', 'Remainders'],
                checkQuestions: [
                    "What is 24 ÷ 6?",
                    "What is the remainder of 25 ÷ 4?",
                    "Is 12 a multiple of 3?"
                ]
            },
            divisor_count: {
                skills: ['Prime factorization', 'Multiplication', 'Exponents'],
                priorKnowledge: ['Prime numbers', 'Composite numbers', 'Factors'],
                checkQuestions: [
                    "What are the prime factors of 12?",
                    "What does 2³ mean?",
                    "List all factors of 12"
                ]
            },
            sum_of_divisors: {
                skills: ['Finding divisors', 'Addition', 'Geometric series (advanced)'],
                priorKnowledge: ['Divisors', 'Prime factorization', 'Sum formulas'],
                checkQuestions: [
                    "List all divisors of 6",
                    "What is 1 + 2 + 3 + 6?",
                    "Can you factor 18 into primes?"
                ]
            },
            prime_factorization: {
                skills: ['Division', 'Recognizing primes', 'Systematic testing'],
                priorKnowledge: ['Prime vs composite', 'Divisibility', 'Exponents'],
                checkQuestions: [
                    "Is 7 prime or composite?",
                    "What is 2 × 2 × 3?",
                    "List primes less than 20"
                ]
            },
            gcd: {
                skills: ['Finding factors', 'Comparing numbers', 'Division'],
                priorKnowledge: ['Factors', 'Common factors', 'Greatest/largest'],
                checkQuestions: [
                    "List factors of 12",
                    "List factors of 18",
                    "What factors do they share?"
                ]
            },
            lcm: {
                skills: ['Finding multiples', 'Comparing numbers', 'Multiplication'],
                priorKnowledge: ['Multiples', 'Common multiples', 'Least/smallest'],
                checkQuestions: [
                    "List multiples of 4",
                    "List multiples of 6",
                    "What's the smallest multiple they share?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            factor_pairs: {
                description: "List divisors as pairs that multiply to n",
                analogy: "Like finding dimensions of rectangles with area n",
                visualization: "Draw rectangles: 1×12, 2×6, 3×4 for n=12",
                suitableFor: ['divisor_count', 'list_divisors'],
                explanation: "Each divisor pairs with another: d and n/d"
            },
            factor_tree: {
                description: "Branch diagram showing prime factorization",
                analogy: "Like a family tree, breaking into prime 'ancestors'",
                visualization: "Tree with branches splitting at each factorization",
                suitableFor: ['prime_factorization'],
                explanation: "Keep dividing by primes until all branches end in primes"
            },
            number_line_multiples: {
                description: "Mark multiples on number line",
                analogy: "Like evenly spaced fence posts",
                visualization: "Number line with marks at 3, 6, 9, 12... for multiples of 3",
                suitableFor: ['divisibility_test', 'lcm'],
                explanation: "Divisible numbers are evenly spaced"
            },
            venn_diagram_gcd: {
                description: "Overlapping circles for common factors",
                analogy: "Like finding what two sets share",
                visualization: "Two circles overlapping, common factors in intersection",
                suitableFor: ['gcd'],
                explanation: "GCD is the largest in the intersection"
            },
            digit_sum_tree: {
                description: "Tree showing repeated digit summing",
                analogy: "Keep adding until you can't anymore",
                visualization: "Number → digit sum → simpler test",
                suitableFor: ['divisibility_test'],
                explanation: "For divisibility by 3 and 9, digit sum has same remainder"
            },
            area_model: {
                description: "Rectangle with dimensions as factors",
                analogy: "Area = length × width shows factorization",
                visualization: "Grid showing n as product of two factors",
                suitableFor: ['divisor_count', 'factorization'],
                explanation: "Each factor pair gives a rectangle"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            divisibility_tests: [
                {
                    problem: "Is 2,346 divisible by 3?",
                    solution: "Yes",
                    steps: [
                        "Sum digits: 2 + 3 + 4 + 6 = 15",
                        "15 ÷ 3 = 5, no remainder",
                        "Therefore, 2,346 is divisible by 3"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Is 1,234 divisible by 4?",
                    solution: "No",
                    steps: [
                        "Check last two digits: 34",
                        "34 ÷ 4 = 8 R 2",
                        "Since 34 is not divisible by 4, neither is 1,234"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Is 5,423 divisible by 11?",
                    solution: "No",
                    steps: [
                        "Alternating sum: 5 - 4 + 2 - 3 = 0",
                        "0 is divisible by 11",
                        "Therefore, 5,423 is divisible by 11"
                    ],
                    difficulty: "medium"
                }
            ],
            divisor_counting: [
                {
                    problem: "How many divisors does 24 have?",
                    solution: "8 divisors",
                    steps: [
                        "Prime factorization: 24 = 2³ × 3¹",
                        "τ(24) = (3+1)(1+1) = 4 × 2 = 8",
                        "The divisors are: 1, 2, 3, 4, 6, 8, 12, 24"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "How many divisors does 100 have?",
                    solution: "9 divisors",
                    steps: [
                        "Prime factorization: 100 = 2² × 5²",
                        "τ(100) = (2+1)(2+1) = 3 × 3 = 9",
                        "The divisors are: 1, 2, 4, 5, 10, 20, 25, 50, 100"
                    ],
                    difficulty: "medium"
                }
            ],
            sum_of_divisors: [
                {
                    problem: "Find σ(12)",
                    solution: "28",
                    steps: [
                        "Divisors of 12: 1, 2, 3, 4, 6, 12",
                        "Sum: 1 + 2 + 3 + 4 + 6 + 12 = 28",
                        "Or use formula: 12 = 2² × 3¹",
                        "σ(12) = [(2³-1)/(2-1)] × [(3²-1)/(3-1)] = 7 × 4 = 28"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "Is 6 a perfect number?",
                    solution: "Yes",
                    steps: [
                        "Divisors of 6: 1, 2, 3, 6",
                        "σ(6) = 1 + 2 + 3 + 6 = 12",
                        "σ(6) = 12 = 2 × 6, so 6 is perfect"
                    ],
                    difficulty: "easy"
                }
            ],
            gcd_lcm: [
                {
                    problem: "Find gcd(24, 36)",
                    solution: "12",
                    steps: [
                        "Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24",
                        "Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36",
                        "Common factors: 1, 2, 3, 4, 6, 12",
                        "Greatest: 12"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Find lcm(12, 18)",
                    solution: "36",
                    steps: [
                        "12 = 2² × 3",
                        "18 = 2 × 3²",
                        "lcm = 2² × 3² = 4 × 9 = 36"
                    ],
                    difficulty: "medium"
                }
            ]
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            divisibility_meaning: {
                misconception: "Divisible means 'can be divided'",
                reality: "Divisible means 'can be divided evenly with no remainder'",
                correctiveExample: "25 can be divided by 4 (gives 6.25), but 25 is NOT divisible by 4 (remainder 1)",
                commonIn: ['divisibility_test']
            },
            digit_sum_universality: {
                misconception: "Digit sum works for all divisibility tests",
                reality: "Digit sum only works for 3 and 9",
                correctiveExample: "Sum of digits of 12 is 3, but 12 is not divisible by 3... wait, it is! But try 14: 1+4=5, not divisible by 5",
                commonIn: ['divisibility_test']
            },
            one_is_prime: {
                misconception: "1 is a prime number",
                reality: "1 is neither prime nor composite by definition",
                correctiveExample: "Primes must have exactly two divisors: 1 and itself. But 1 has only one divisor",
                commonIn: ['prime_factorization']
            },
            divisor_count_includes_zero: {
                misconception: "Count 0 as a divisor",
                reality: "0 is not a divisor of any number (division by zero undefined)",
                correctiveExample: "Divisors of 12: 1, 2, 3, 4, 6, 12 (not 0)",
                commonIn: ['divisor_count', 'list_divisors']
            },
            perfect_confusion: {
                misconception: "Perfect number means all divisors sum to the number",
                reality: "Perfect number: sum of proper divisors (excluding n) equals n",
                correctiveExample: "6: proper divisors 1,2,3 sum to 6. σ(6)=12=2×6 also works",
                commonIn: ['perfect_number', 'sum_of_divisors']
            },
            gcd_lcm_confusion: {
                misconception: "GCD is larger than LCM",
                reality: "GCD ≤ both numbers ≤ LCM",
                correctiveExample: "gcd(12,18)=6 (smaller), lcm(12,18)=36 (larger)",
                commonIn: ['gcd', 'lcm']
            },
            last_digit_only: {
                misconception: "All divisibility tests only check last digit",
                reality: "Different tests check different digit patterns",
                correctiveExample: "Divisibility by 3 checks sum of ALL digits, not just last one",
                commonIn: ['divisibility_test']
            },
            formula_exponent_error: {
                misconception: "τ(n) = multiply the exponents in prime factorization",
                reality: "τ(n) = multiply (exponent + 1) for each prime",
                correctiveExample: "For 12=2²×3¹: τ(12)=(2+1)(1+1)=6, NOT 2×1=2",
                commonIn: ['divisor_count']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            divisibility: {
                analogy: "Sharing equally with no leftovers",
                explanation: "Divisibility is like being able to share items equally among people with nothing left over",
                suitableFor: ['divisibility_test'],
                ELI5: "If you have 12 cookies and 3 friends, everyone gets 4 cookies and there are no leftovers. So 12 is divisible by 3!"
            },
            factors: {
                analogy: "Building blocks or LEGO pieces",
                explanation: "Factors are like the building blocks that multiply together to make a number",
                suitableFor: ['divisor_count', 'list_divisors'],
                ELI5: "Think of 12 as a LEGO creation. You could build it with 1×12 blocks, or 2×6 blocks, or 3×4 blocks!"
            },
            prime_factorization: {
                analogy: "Breaking down to ingredients",
                explanation: "Prime factorization is like finding the basic ingredients in a recipe",
                suitableFor: ['prime_factorization'],
                ELI5: "Every number is made from prime number ingredients, just like cookies are made from flour, sugar, and eggs!"
            },
            gcd: {
                analogy: "Biggest ruler that measures both",
                explanation: "GCD is the largest unit that divides both numbers evenly",
                suitableFor: ['gcd'],
                ELI5: "If you have boards of 12 inches and 18 inches, the biggest ruler that fits evenly into both is 6 inches!"
            },
            lcm: {
                analogy: "When do cycles meet up?",
                explanation: "LCM is when two repeating patterns coincide",
                suitableFor: ['lcm'],
                ELI5: "If one bus comes every 4 minutes and another every 6 minutes, they'll both arrive together every 12 minutes!"
            },
            perfect_number: {
                analogy: "Number whose parts equal the whole",
                explanation: "Like a perfect team where everyone's contributions add up exactly to what's needed",
                suitableFor: ['perfect_number'],
                ELI5: "6 is perfect because its smaller divisors (1, 2, 3) add up to 6. Like having 6 toys and being able to share them perfectly!"
            },
            digit_sum: {
                analogy: "Combining all pieces to see pattern",
                explanation: "Adding digits reveals hidden divisibility patterns",
                suitableFor: ['divisibility_test'],
                ELI5: "It's like counting all your fingers one by one to see if you have enough for groups of 3!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            divisibility_test: {
                level1: "What divisor are you testing? Do you know a rule for it?",
                level2: "Check if there's a divisibility rule for this number (2, 3, 4, 5, 6, 8, 9, 10, 11, 12)",
                level3: "Apply the specific rule: last digit, digit sum, last two digits, etc.",
                level4: "For divisibility by {divisor}, check: {specific_rule}"
            },
            divisor_count: {
                level1: "Do you know the prime factorization?",
                level2: "First find the prime factorization of the number",
                level3: "Use formula: multiply (exponent + 1) for each prime factor",
                level4: "For n = p₁^a₁ × p₂^a₂: τ(n) = (a₁+1)(a₂+1)"
            },
            sum_of_divisors: {
                level1: "Can you list all the divisors?",
                level2: "Either list all divisors and add them, or use the formula",
                level3: "Formula: σ(p^k) = (p^(k+1) - 1)/(p - 1) for each prime power",
                level4: "Factor n first, then apply formula to each prime power and multiply"
            },
            prime_factorization: {
                level1: "What's the smallest prime that divides this number?",
                level2: "Start dividing by 2, then 3, then 5, then 7...",
                level3: "Keep dividing by each prime until you can't anymore",
                level4: "Test primes up to √n, then any remaining factor is prime"
            },
            gcd: {
                level1: "What are the factors of each number?",
                level2: "List factors of both numbers, or use Euclidean algorithm",
                level3: "Find which factors they share, then pick the largest",
                level4: "gcd(a,b) = gcd(b, a mod b) - keep applying until remainder is 0"
            },
            lcm: {
                level1: "What are some multiples of each number?",
                level2: "Find prime factorizations or use formula: lcm(a,b) = ab/gcd(a,b)",
                level3: "Take highest power of each prime that appears",
                level4: "LCM uses maximum exponents from both factorizations"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Is 24 divisible by 3?",
                    answer: "Yes",
                    assesses: "divisibility_test",
                    difficulty: "basic"
                },
                {
                    question: "How many divisors does 12 have?",
                    answer: 6,
                    assesses: "divisor_count",
                    difficulty: "basic"
                },
                {
                    question: "What is the sum of divisors of 6?",
                    answer: 12,
                    assesses: "sum_of_divisors",
                    difficulty: "basic"
                },
                {
                    question: "What is the prime factorization of 18?",
                    answer: "2 × 3²",
                    assesses: "prime_factorization",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "To test if a number is divisible by 3, you should:",
                    options: ["Check last digit", "Sum all digits", "Check last two digits", "Double the last digit"],
                    correct: "Sum all digits",
                    explanation: "Divisibility by 3 is tested by summing all digits"
                },
                {
                    question: "The formula for counting divisors of n = p^k is:",
                    options: ["k", "k+1", "2k", "p×k"],
                    correct: "k+1",
                    explanation: "For prime power p^k, there are k+1 divisors: 1, p, p², ..., p^k"
                },
                {
                    question: "What does GCD stand for?",
                    options: ["General Common Divisor", "Greatest Common Divisor", "Geometric Common Divisor", "Group Common Denominator"],
                    correct: "Greatest Common Divisor",
                    explanation: "GCD means Greatest Common Divisor"
                }
            ],
            summative: [
                {
                    question: "Find all divisors of 36 and compute their sum",
                    answer: "Divisors: 1,2,3,4,6,9,12,18,36; Sum: 91",
                    showsWork: true,
                    rubric: {
                        list_divisors: 2,
                        complete_list: 2,
                        sum_correctly: 1
                    }
                },
                {
                    question: "Use prime factorization to find τ(72) and σ(72)",
                    answer: "72 = 2³×3²; τ(72)=12; σ(72)=195",
                    showsWork: true,
                    rubric: {
                        prime_factorization: 2,
                        divisor_count_formula: 2,
                        sum_formula: 2,
                        arithmetic: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Is 20 divisible by 4?",
                    "List divisors of 10",
                    "Is 15 divisible by 3?",
                    "What is 6 ÷ 2?"
                ],
                medium: [
                    "How many divisors does 24 have?",
                    "Find gcd(12, 18)",
                    "Is 123 divisible by 3?",
                    "Prime factorization of 30"
                ],
                hard: [
                    "Find σ(60) using the formula",
                    "Is 2,457 divisible by 11?",
                    "Find lcm(24, 36, 48)",
                    "Prove gcd(a,b) × lcm(a,b) = ab"
                ]
            },
            byObjective: {
                canTestDivisibility: [
                    "Is 156 divisible by 3?",
                    "Is 248 divisible by 4?",
                    "Is 1,001 divisible by 11?",
                    "Which of 2,3,4,5,6,9,10 divide 180?"
                ],
                canCountDivisors: [
                    "How many divisors does 30 have?",
                    "How many divisors does 100 have?",
                    "Find τ(48)"
                ],
                canSumDivisors: [
                    "Find σ(12)",
                    "Is 28 a perfect number?",
                    "Find the sum of proper divisors of 20"
                ],
                canFactorize: [
                    "Prime factorization of 60",
                    "Prime factorization of 144",
                    "Express 100 as a product of prime powers"
                ],
                canFindGCDLCM: [
                    "Find gcd(24, 30)",
                    "Find lcm(6, 8)",
                    "Find gcd(48, 64, 80)"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            divisibilityTestSelection: {
                "divisor_2_5_10": "Check last digit only",
                "divisor_3_9": "Sum all digits",
                "divisor_4": "Check last two digits",
                "divisor_8": "Check last three digits",
                "divisor_6_12": "Check component divisibilities (6=2×3, 12=3×4)",
                "divisor_11": "Use alternating digit sum",
                "divisor_7_13_etc": "Use standard division or advanced techniques",
                "large_divisor": "Perform actual division"
            },
            divisorCountingMethod: {
                "small_number": "List all divisors by testing 1 through √n",
                "large_number": "Use prime factorization and formula",
                "prime_power": "If n=p^k, then τ(n)=k+1",
                "highly_composite": "Prime factorization essential"
            },
            sumOfDivisorsMethod: {
                "very_small": "List divisors and add directly",
                "small_to_medium": "List divisors or use formula",
                "large": "Use formula with prime factorization",
                "checking_perfect": "Compute σ(n) and check if σ(n)=2n"
            },
            gcdComputation: {
                "small_numbers": "List factors and find largest common",
                "medium_numbers": "Use Euclidean algorithm",
                "large_numbers": "Euclidean algorithm essential",
                "multiple_numbers": "Apply pairwise: gcd(a,b,c) = gcd(gcd(a,b),c)"
            },
            lcmComputation: {
                "small_numbers": "List multiples until finding common one",
                "medium_numbers": "Use formula lcm(a,b) = ab/gcd(a,b)",
                "using_factorization": "Take maximum power of each prime",
                "multiple_numbers": "Apply pairwise or use prime factorizations"
            },
            primeFactorizationMethod: {
                "trial_division": "Divide by 2,3,5,7,11,... up to √n",
                "factor_tree": "Visual branching method",
                "repeated_division": "Divide by smallest prime repeatedly",
                "wheel_factorization": "Advanced: skip multiples of small primes"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Divisibility Sprint",
                    timeLimit: 60,
                    problems: [
                        "Is 123 divisible by 3?",
                        "Is 144 divisible by 4?",
                        "Is 255 divisible by 5?",
                        "Is 198 divisible by 9?",
                        "Is 121 divisible by 11?",
                        "Is 300 divisible by 6?",
                        "Is 1000 divisible by 8?",
                        "Is 111 divisible by 3?"
                    ]
                },
                {
                    name: "Quick Factor Count",
                    timeLimit: 90,
                    problems: [
                        "τ(16) = ?",
                        "τ(25) = ?",
                        "τ(30) = ?",
                        "τ(48) = ?",
                        "τ(100) = ?"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Number",
                    problem: "A number has exactly 6 divisors and its prime factorization uses only 2 and 3. What could it be?",
                    solution: "12 (2²×3) or 18 (2×3²)",
                    explanation: "τ(n)=6 means either p⁵ or p²q. With primes 2,3 only: 2²×3 or 2×3²"
                },
                {
                    name: "Perfect Pair",
                    problem: "Two numbers have gcd=6 and lcm=72. What are they?",
                    solution: "12 and 36, or 18 and 24",
                    explanation: "Use gcd×lcm = product, and both must have 6 as factor"
                },
                {
                    name: "Digit Detective",
                    problem: "A 3-digit number 5_7 is divisible by 3. What could the middle digit be?",
                    solution: "1, 4, or 7",
                    explanation: "5+?+7 = 12+? must be divisible by 3, so ?=0,3,6,9 but gives 12,15,18,21"
                }
            ],
            applications: [
                {
                    scenario: "School Bus Problem",
                    problem: "240 students need buses. Buses hold 36 students. Do all buses fill completely?",
                    divisibilityUse: "Test if 240 is divisible by 36",
                    solution: "240÷36 = 6 remainder 24, so NO, one bus is not full"
                },
                {
                    scenario: "Scheduling Cycles",
                    problem: "Two machines: one operates every 8 hours, another every 12 hours. If both start now, when do they next operate together?",
                    divisibilityUse: "Find lcm(8,12)",
                    solution: "lcm(8,12) = 24 hours"
                },
                {
                    scenario: "Cutting Boards",
                    problem: "Boards of 48\" and 72\". Largest equal lengths?",
                    divisibilityUse: "Find gcd(48,72)",
                    solution: "gcd(48,72) = 24 inches"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Is 124 divisible by 4?",
                        "Check last digit: 4",
                        "4 is divisible by 4",
                        "So 124 is divisible by 4" // ERROR: should check last TWO digits
                    ],
                    correctAnswer: "Yes (but reasoning is wrong)",
                    errorType: "Should check last TWO digits (24), not just last digit"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "τ(12) = ?",
                        "12 = 2² × 3",
                        "τ(12) = 2 × 1 = 2" // ERROR: forgot to add 1 to exponents
                    ],
                    correctAnswer: "τ(12) = (2+1)(1+1) = 6",
                    errorType: "Forgot to add 1 to each exponent in formula"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Is 147 divisible by 3?",
                        "Sum digits: 1+4+7 = 12",
                        "12 is divisible by 3",
                        "So 147 is divisible by 3" // Actually CORRECT
                    ],
                    correctAnswer: "Correct! 147 = 3 × 49",
                    errorType: "No error - this is correct!"
                }
            ]
        };
    }

    // HELPER FUNCTIONS

    sumOfDigits(n) {
        return Math.abs(n).toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }

    alternatingDigitSum(n) {
        const digits = Math.abs(n).toString().split('').map(d => parseInt(d));
        let sum = 0;
        for (let i = 0; i < digits.length; i++) {
            sum += (i % 2 === 0) ? digits[digits.length - 1 - i] : -digits[digits.length - 1 - i];
        }
        return sum;
    }

    isPrime(n) {
        if (n < 2) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;
        for (let i = 3; i * i <= n; i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    }

    primeFactorization(n) {
        const factors = {};
        let num = Math.abs(n);
        
        // Handle 2
        while (num % 2 === 0) {
            factors[2] = (factors[2] || 0) + 1;
            num /= 2;
        }
        
        // Handle odd primes
        for (let i = 3; i * i <= num; i += 2) {
            while (num % i === 0) {
                factors[i] = (factors[i] || 0) + 1;
                num /= i;
            }
        }
        
        // If num > 1, it's a prime factor
        if (num > 1) {
            factors[num] = 1;
        }
        
        return factors;
    }

    listDivisors(n) {
        const divisors = [];
        const absN = Math.abs(n);
        
        for (let i = 1; i * i <= absN; i++) {
            if (absN % i === 0) {
                divisors.push(i);
                if (i !== absN / i) {
                    divisors.push(absN / i);
                }
            }
        }
        
        return divisors.sort((a, b) => a - b);
    }

    gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    lcm(a, b) {
        return Math.abs(a * b) / this.gcd(a, b);
    }

    // MAIN SOLVER METHOD

    solveDivisibilityProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseDivisibilityProblem(equation, scenario, parameters, problemType, context);
            this.currentSolution = this.solveDivisibilityProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateDivisibilitySteps(this.currentProblem, this.currentSolution);
            this.generateDivisibilityGraphData();
            this.generateDivisibilityWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                result: this.currentSolution?.result
            };

        } catch (error) {
            throw new Error(`Failed to solve divisibility problem: ${error.message}`);
        }
    }

    parseDivisibilityProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? equation.trim() : '';

        if (problemType && this.divisibilityTypes[problemType]) {
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

        for (const [type, config] of Object.entries(this.divisibilityTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractDivisibilityParameters(match, type, cleanInput);

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

        if (parameters.n !== undefined) {
            return {
                originalInput: equation || 'Divisibility problem with given number',
                cleanInput: cleanInput,
                type: 'list_divisors',
                scenario: scenario,
                parameters: { n: parameters.n, ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize divisibility problem type from: ${equation || scenario}`);
    }

    extractDivisibilityParameters(match, type, fullInput) {
        const params = {};

        // Extract numbers from input
        const numbers = fullInput.match(/\d+/g);

        switch(type) {
            case 'divisibility_test':
                if (numbers && numbers.length >= 2) {
                    params.n = parseInt(numbers[0]);
                    params.divisor = parseInt(numbers[1]);
                } else if (numbers && numbers.length === 1) {
                    params.n = parseInt(numbers[0]);
                    params.divisor = 2; // default
                }
                break;

            case 'divisor_count':
            case 'sum_of_divisors':
            case 'list_divisors':
            case 'prime_factorization':
            case 'perfect_number_check':
            case 'proper_divisor_sum':
                if (numbers && numbers.length >= 1) {
                    params.n = parseInt(numbers[0]);
                }
                break;

            case 'gcd_calculation':
            case 'lcm_calculation':
                if (numbers && numbers.length >= 2) {
                    params.a = parseInt(numbers[0]);
                    params.b = parseInt(numbers[1]);
                    if (numbers.length > 2) {
                        params.c = parseInt(numbers[2]);
                    }
                }
                break;

            case 'divisibility_rule_explanation':
                if (numbers && numbers.length >= 1) {
                    params.divisor = parseInt(numbers[0]);
                }
                break;
        }

        return params;
    }

    solveDivisibilityProblem_Internal(problem) {
        const solver = this.divisibilityTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for divisibility problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // DIVISIBILITY SOLVERS

    solveDivisibilityTest(problem) {
        const { n, divisor } = problem.parameters;
        
        if (!n || !divisor) {
            throw new Error('Missing required parameters: n and divisor');
        }

        const isDivisible = n % divisor === 0;
        const quotient = Math.floor(n / divisor);
        const remainder = n % divisor;

        const result = {
            type: 'Divisibility Test',
            number: n,
            divisor: divisor,
            isDivisible: isDivisible,
            quotient: quotient,
            remainder: remainder,
            category: 'divisibility_test'
        };

        // Add rule-based test if available
        const rule = this.divisibilityRules[divisor];
        if (rule) {
            result.rule = rule.rule;
            result.ruleTest = rule.test(n);
            result.explanation = rule.explanation;
        }

        return result;
    }

    solveDivisorCount(problem) {
        const { n } = problem.parameters;
        
        if (!n) {
            throw new Error('Missing required parameter: n');
        }

        const factorization = this.primeFactorization(n);
        const divisors = this.listDivisors(n);
        
        // Calculate using formula
        let count = 1;
        for (const exponent of Object.values(factorization)) {
            count *= (exponent + 1);
        }

        return {
            type: 'Divisor Count',
            number: n,
            primeFactorization: factorization,
            divisorCount: count,
            divisors: divisors,
            formula: this.formatDivisorCountFormula(factorization),
            category: 'divisor_count'
        };
    }

    solveSumOfDivisors(problem) {
        const { n } = problem.parameters;
        
        if (!n) {
            throw new Error('Missing required parameter: n');
        }

        const divisors = this.listDivisors(n);
        const sum = divisors.reduce((acc, d) => acc + d, 0);
        const factorization = this.primeFactorization(n);

        // Calculate using formula
        let formulaSum = 1;
        for (const [prime, exponent] of Object.entries(factorization)) {
            const p = parseInt(prime);
            const k = exponent;
            const term = (Math.pow(p, k + 1) - 1) / (p - 1);
            formulaSum *= term;
        }

        return {
            type: 'Sum of Divisors',
            number: n,
            divisors: divisors,
            sum: sum,
            formulaSum: Math.round(formulaSum),
            primeFactorization: factorization,
            formula: this.formatSumOfDivisorsFormula(factorization),
            category: 'sum_of_divisors'
        };
    }

    solveListDivisors(problem) {
        const { n } = problem.parameters;
        
        if (!n) {
            throw new Error('Missing required parameter: n');
        }

        const divisors = this.listDivisors(n);
        const count = divisors.length;
        const factorization = this.primeFactorization(n);

        return {
            type: 'List All Divisors',
            number: n,
            divisors: divisors,
            count: count,
            primeFactorization: factorization,
            divisorPairs: this.formatDivisorPairs(n, divisors),
            category: 'list_divisors'
        };
    }

    solvePrimeFactorization(problem) {
        const { n } = problem.parameters;
        
        if (!n) {
            throw new Error('Missing required parameter: n');
        }

        const factorization = this.primeFactorization(n);
        const formatted = this.formatPrimeFactorization(factorization);
        const steps = this.generateFactorizationSteps(n);

        return {
            type: 'Prime Factorization',
            number: n,
            factorization: factorization,
            formatted: formatted,
            steps: steps,
            category: 'prime_factorization'
        };
    }

    solveGCD(problem) {
        const { a, b, c } = problem.parameters;
        
        if (!a || !b) {
            throw new Error('Missing required parameters: a and b');
        }

        let result = this.gcd(a, b);
        const steps = this.generateGCDSteps(a, b);

        if (c) {
            result = this.gcd(result, c);
        }

        return {
            type: 'GCD Calculation',
            numbers: c ? [a, b, c] : [a, b],
            gcd: result,
            steps: steps,
            category: 'gcd'
        };
    }

    solveLCM(problem) {
        const { a, b, c } = problem.parameters;
        
        if (!a || !b) {
            throw new Error('Missing required parameters: a and b');
        }

        let result = this.lcm(a, b);
        const gcdVal = this.gcd(a, b);

        if (c) {
            result = this.lcm(result, c);
        }

        return {
            type: 'LCM Calculation',
            numbers: c ? [a, b, c] : [a, b],
            lcm: result,
            gcd: gcdVal,
            relationship: `gcd × lcm = ${gcdVal} × ${result} = ${gcdVal * result}, a × b = ${a * b}`,
            category: 'lcm'
        };
    }

    solvePerfectNumberCheck(problem) {
        const { n } = problem.parameters;
        
        if (!n) {
            throw new Error('Missing required parameter: n');
        }

        const divisors = this.listDivisors(n);
        const properDivisors = divisors.filter(d => d !== n);
        const properSum = properDivisors.reduce((acc, d) => acc + d, 0);
        const totalSum = divisors.reduce((acc, d) => acc + d, 0);

        let classification;
        if (properSum === n) {
            classification = 'Perfect';
        } else if (properSum < n) {
            classification = 'Deficient';
        } else {
            classification = 'Abundant';
        }

        return {
            type: 'Perfect Number Check',
            number: n,
            divisors: divisors,
            properDivisors: properDivisors,
            properSum: properSum,
            totalSum: totalSum,
            classification: classification,
            isPerfect: classification === 'Perfect',
            category: 'perfect_number'
        };
    }

    solveProperDivisorSum(problem) {
        const { n } = problem.parameters;
        
        if (!n) {
            throw new Error('Missing required parameter: n');
        }

        const divisors = this.listDivisors(n);
        const properDivisors = divisors.filter(d => d !== n);
        const sum = properDivisors.reduce((acc, d) => acc + d, 0);

        return {
            type: 'Proper Divisor Sum',
            number: n,
            properDivisors: properDivisors,
            sum: sum,
            aliquotSum: sum,
            category: 'proper_divisors'
        };
    }

    explainDivisibilityRule(problem) {
        const { divisor } = problem.parameters;
        
        if (!divisor) {
            throw new Error('Missing required parameter: divisor');
        }

        const rule = this.divisibilityRules[divisor];

        if (!rule) {
            return {
                type: 'Divisibility Rule Explanation',
                divisor: divisor,
                hasRule: false,
                message: `No simple divisibility rule available for ${divisor}. Use standard division.`,
                category: 'rule_explanation'
            };
        }

        return {
            type: 'Divisibility Rule Explanation',
            divisor: divisor,
            hasRule: true,
            name: rule.name,
            rule: rule.rule,
            explanation: rule.explanation,
            difficulty: rule.difficulty,
            alternative: rule.alternative || null,
            category: 'rule_explanation'
        };
    }

    // FORMATTING HELPERS

    formatPrimeFactorization(factorization) {
        const parts = [];
        for (const [prime, exponent] of Object.entries(factorization).sort((a, b) => parseInt(a[0]) - parseInt(b[0]))) {
            if (exponent === 1) {
                parts.push(prime);
            } else {
                parts.push(`${prime}^${exponent}`);
            }
        }
        return parts.join(' × ');
    }

    formatDivisorCountFormula(factorization) {
        const parts = [];
        for (const [prime, exponent] of Object.entries(factorization).sort((a, b) => parseInt(a[0]) - parseInt(b[0]))) {
            parts.push(`(${exponent}+1)`);
        }
        return `τ(n) = ${parts.join(' × ')}`;
    }

    formatSumOfDivisorsFormula(factorization) {
        const parts = [];
        for (const [prime, exponent] of Object.entries(factorization).sort((a, b) => parseInt(a[0]) - parseInt(b[0]))) {
            const p = prime;
            const k = exponent;
            parts.push(`[(${p}^${k+1} - 1)/(${p} - 1)]`);
        }
        return `σ(n) = ${parts.join(' × ')}`;
    }

    formatDivisorPairs(n, divisors) {
        const pairs = [];
        const sqrt = Math.sqrt(n);
        
        for (const d of divisors) {
            if (d <= sqrt) {
                const partner = n / d;
                pairs.push([d, partner]);
            }
        }
        
        return pairs;
    }

    generateFactorizationSteps(n) {
        const steps = [];
        let current = n;
        let divisor = 2;

        while (current > 1) {
            if (current % divisor === 0) {
                steps.push({
                    divisor: divisor,
                    quotient: current / divisor,
                    action: `${current} ÷ ${divisor} = ${current / divisor}`
                });
                current = current / divisor;
            } else {
                divisor = divisor === 2 ? 3 : divisor + 2;
                if (divisor * divisor > current && current > 1) {
                    steps.push({
                        divisor: current,
                        quotient: 1,
                        action: `${current} is prime`
                    });
                    break;
                }
            }
        }

        return steps;
    }

    generateGCDSteps(a, b) {
        const steps = [];
        let x = a;
        let y = b;

        while (y !== 0) {
            const quotient = Math.floor(x / y);
            const remainder = x % y;
            steps.push({
                equation: `${x} = ${y} × ${quotient} + ${remainder}`,
                x: x,
                y: y,
                quotient: quotient,
                remainder: remainder
            });
            x = y;
            y = remainder;
        }

        steps.push({
            result: `gcd = ${x}`
        });

        return steps;
    }

    // STEP GENERATION

    generateDivisibilitySteps(problem, solution) {
        let baseSteps = this.generateBaseDivisibilitySteps(problem, solution);

        if (this.explanationLevel !== 'basic') {
            baseSteps = baseSteps.map((step, index, array) =>
                this.enhanceDivisibilityStepExplanation(step, problem, solution, index, array.length)
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

    generateBaseDivisibilitySteps(problem, solution) {
        const { type } = problem;

        switch(type) {
            case 'divisibility_test':
                return this.generateDivisibilityTestSteps(problem, solution);
            case 'divisor_count':
                return this.generateDivisorCountSteps(problem, solution);
            case 'sum_of_divisors':
                return this.generateSumOfDivisorsSteps(problem, solution);
            case 'list_divisors':
                return this.generateListDivisorsSteps(problem, solution);
            case 'prime_factorization':
                return this.generatePrimeFactorizationSteps(problem, solution);
            case 'gcd_calculation':
                return this.generateGCDSteps_Full(problem, solution);
            case 'lcm_calculation':
                return this.generateLCMSteps(problem, solution);
            case 'perfect_number_check':
                return this.generatePerfectNumberSteps(problem, solution);
            default:
                return this.generateGenericDivisibilitySteps(problem, solution);
        }
    }

    generateDivisibilityTestSteps(problem, solution) {
        const steps = [];
        const { n, divisor } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Problem statement',
            description: `Test if ${n} is divisible by ${divisor}`,
            expression: `${n} ÷ ${divisor} = ?`,
            reasoning: 'A number is divisible if division gives no remainder',
            goalStatement: `Check if ${divisor} divides ${n} evenly`
        });

        const rule = this.divisibilityRules[divisor];
        if (rule) {
            steps.push({
                stepNumber: 2,
                step: 'Apply divisibility rule',
                description: rule.rule,
                reasoning: rule.explanation,
                ruleApplication: this.applyDivisibilityRule(n, divisor, rule)
            });

            steps.push({
                stepNumber: 3,
                step: 'Check rule result',
                description: this.evaluateDivisibilityRule(n, divisor, rule),
                conclusion: solution.isDivisible ? 'Yes, divisible' : 'No, not divisible'
            });
        } else {
            steps.push({
                stepNumber: 2,
                step: 'Perform division',
                description: `${n} ÷ ${divisor} = ${solution.quotient} R ${solution.remainder}`,
                quotient: solution.quotient,
                remainder: solution.remainder
            });
        }

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Final answer',
            description: solution.isDivisible ? 
                `${n} is divisible by ${divisor}` : 
                `${n} is NOT divisible by ${divisor}`,
            result: solution.isDivisible,
            finalAnswer: true
        });

        return steps;
    }

    generateDivisorCountSteps(problem, solution) {
        const steps = [];
        const { n } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Problem statement',
            description: `Count the divisors of ${n}`,
            reasoning: 'Find how many numbers divide n evenly',
            goalStatement: 'Find τ(n), the number of divisors'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find prime factorization',
            description: `${n} = ${solution.formatted}`,
            factorization: solution.primeFactorization,
            reasoning: 'Prime factorization is needed for the divisor count formula'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply divisor count formula',
            description: solution.formula,
            reasoning: 'For each prime p^k, there are (k+1) choices of power',
            formula: 'τ(n) = (a₁+1)(a₂+1)...(aₖ+1)'
        });

        const exponents = Object.values(solution.primeFactorization);
        const calculation = exponents.map(e => `(${e}+1)`).join(' × ');
        const result = exponents.reduce((acc, e) => acc * (e + 1), 1);

        steps.push({
            stepNumber: 4,
            step: 'Calculate',
            description: `${calculation} = ${result}`,
            calculation: calculation,
            result: result
        });

        steps.push({
            stepNumber: 5,
            step: 'Verification',
            description: `List divisors: ${solution.divisors.join(', ')}`,
            divisors: solution.divisors,
            count: solution.divisors.length,
            verification: solution.divisors.length === result
        });

        steps.push({
            stepNumber: 6,
            step: 'Final answer',
            description: `${n} has ${solution.divisorCount} divisors`,
            result: solution.divisorCount,
            finalAnswer: true
        });

        return steps;
    }

    generateSumOfDivisorsSteps(problem, solution) {
        const steps = [];
        const { n } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Problem statement',
            description: `Find the sum of all divisors of ${n}`,
            reasoning: 'Calculate σ(n), the sum of all positive divisors',
            goalStatement: 'Add up all numbers that divide n evenly'
        });

        steps.push({
            stepNumber: 2,
            step: 'List all divisors',
            description: `Divisors of ${n}: ${solution.divisors.join(', ')}`,
            divisors: solution.divisors,
            count: solution.divisors.length,
            reasoning: 'Find all numbers from 1 to n that divide evenly'
        });

        steps.push({
            stepNumber: 3,
            step: 'Add all divisors',
            description: solution.divisors.join(' + ') + ' = ' + solution.sum,
            calculation: solution.divisors.join(' + '),
            sum: solution.sum,
            reasoning: 'Sum includes 1 and n itself'
        });

        if (solution.primeFactorization && Object.keys(solution.primeFactorization).length > 0) {
            steps.push({
                stepNumber: 4,
                step: 'Alternative: Use formula',
                description: `Prime factorization: ${n} = ${this.formatPrimeFactorization(solution.primeFactorization)}`,
                factorization: solution.primeFactorization,
                formula: solution.formula,
                reasoning: 'Formula approach is faster for large numbers'
            });

            steps.push({
                stepNumber: 5,
                step: 'Apply formula for each prime power',
                description: 'σ(p^k) = (p^(k+1) - 1)/(p - 1)',
                formulaBreakdown: this.generateSigmaFormulaBreakdown(solution.primeFactorization),
                reasoning: 'This is a geometric series: 1 + p + p² + ... + p^k'
            });
        }

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Final answer',
            description: `σ(${n}) = ${solution.sum}`,
            result: solution.sum,
            finalAnswer: true
        });

        return steps;
    }

    generateListDivisorsSteps(problem, solution) {
        const steps = [];
        const { n } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Problem statement',
            description: `List all divisors of ${n}`,
            reasoning: 'Find all positive integers that divide n evenly',
            goalStatement: 'Systematically find all factors'
        });

        steps.push({
            stepNumber: 2,
            step: 'Test integers from 1 to √n',
            description: `Check numbers from 1 to ${Math.floor(Math.sqrt(n))}`,
            reasoning: 'Divisors come in pairs; if d divides n, so does n/d',
            method: 'Test each candidate and record both d and n/d'
        });

        const pairs = solution.divisorPairs;
        steps.push({
            stepNumber: 3,
            step: 'Record divisor pairs',
            description: 'For each divisor d found, n/d is also a divisor',
            pairs: pairs.map(([d1, d2]) => `${d1} × ${d2} = ${n}`),
            reasoning: 'This ensures we don\'t miss any divisors'
        });

        steps.push({
            stepNumber: 4,
            step: 'List all unique divisors',
            description: `Divisors: ${solution.divisors.join(', ')}`,
            divisors: solution.divisors,
            count: solution.count,
            reasoning: 'Combine all divisors found and sort them'
        });

        steps.push({
            stepNumber: 5,
            step: 'Final answer',
            description: `${n} has ${solution.count} divisors: ${solution.divisors.join(', ')}`,
            result: solution.divisors,
            finalAnswer: true
        });

        return steps;
    }

    generatePrimeFactorizationSteps(problem, solution) {
        const steps = [];
        const { n } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Problem statement',
            description: `Find the prime factorization of ${n}`,
            reasoning: 'Express n as a product of prime numbers raised to powers',
            goalStatement: 'Break n down into its prime building blocks'
        });

        steps.push({
            stepNumber: 2,
            step: 'Divide by smallest primes',
            description: 'Test divisibility by 2, 3, 5, 7, 11, ... in order',
            method: 'Trial division',
            reasoning: 'Start with smallest primes for efficiency'
        });

        // Add detailed factorization steps
        let stepNum = 3;
        for (const factorStep of solution.steps) {
            steps.push({
                stepNumber: stepNum++,
                step: factorStep.action.includes('prime') ? 'Remaining factor is prime' : 'Divide by prime',
                description: factorStep.action,
                divisor: factorStep.divisor,
                quotient: factorStep.quotient,
                reasoning: factorStep.action.includes('prime') ? 
                    'No primes up to √n divide it, so it must be prime' : 
                    `${factorStep.divisor} is the smallest prime dividing the current number`
            });
        }

        steps.push({
            stepNumber: stepNum,
            step: 'Write prime factorization',
            description: `${n} = ${solution.formatted}`,
            factorization: solution.factorization,
            standardForm: solution.formatted,
            reasoning: 'Combine all prime factors with their exponents',
            finalAnswer: true
        });

        return steps;
    }

    generateGCDSteps_Full(problem, solution) {
        const steps = [];
        const { a, b } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Problem statement',
            description: `Find gcd(${a}, ${b})`,
            reasoning: 'Find the greatest common divisor (largest number dividing both)',
            goalStatement: 'Find the largest number that divides both numbers evenly'
        });

        steps.push({
            stepNumber: 2,
            step: 'Method selection',
            description: 'Use Euclidean algorithm',
            reasoning: 'Euclidean algorithm is efficient: gcd(a,b) = gcd(b, a mod b)',
            alternative: 'Could also list all factors and find largest common one'
        });

        let stepNum = 3;
        for (const gcdStep of solution.steps) {
            if (gcdStep.result) {
                steps.push({
                    stepNumber: stepNum++,
                    step: 'Conclusion',
                    description: gcdStep.result,
                    reasoning: 'When remainder becomes 0, the last divisor is the gcd'
                });
            } else {
                steps.push({
                    stepNumber: stepNum++,
                    step: 'Apply Euclidean algorithm',
                    description: gcdStep.equation,
                    x: gcdStep.x,
                    y: gcdStep.y,
                    quotient: gcdStep.quotient,
                    remainder: gcdStep.remainder,
                    reasoning: `Divide ${gcdStep.x} by ${gcdStep.y}, remainder is ${gcdStep.remainder}`
                });
            }
        }

        steps.push({
            stepNumber: stepNum,
            step: 'Final answer',
            description: `gcd(${a}, ${b}) = ${solution.gcd}`,
            result: solution.gcd,
            finalAnswer: true
        });

        return steps;
    }

    generateLCMSteps(problem, solution) {
        const steps = [];
        const { a, b } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Problem statement',
            description: `Find lcm(${a}, ${b})`,
            reasoning: 'Find the least common multiple (smallest number divisible by both)',
            goalStatement: 'Find the smallest positive number that both divide evenly'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find GCD first',
            description: `gcd(${a}, ${b}) = ${solution.gcd}`,
            gcd: solution.gcd,
            reasoning: 'We use the relationship: gcd(a,b) × lcm(a,b) = a × b'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply LCM formula',
            description: `lcm(a,b) = (a × b) / gcd(a,b)`,
            formula: 'lcm(a,b) = (a × b) / gcd(a,b)',
            reasoning: 'This formula relates LCM and GCD'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate',
            description: `lcm(${a}, ${b}) = (${a} × ${b}) / ${solution.gcd} = ${a * b} / ${solution.gcd} = ${solution.lcm}`,
            calculation: `(${a} × ${b}) / ${solution.gcd}`,
            result: solution.lcm
        });

        steps.push({
            stepNumber: 5,
            step: 'Verify relationship',
            description: solution.relationship,
            verification: true,
            reasoning: 'Confirm that gcd × lcm = a × b'
        });

        steps.push({
            stepNumber: 6,
            step: 'Final answer',
            description: `lcm(${a}, ${b}) = ${solution.lcm}`,
            result: solution.lcm,
            finalAnswer: true
        });

        return steps;
    }

    generatePerfectNumberSteps(problem, solution) {
        const steps = [];
        const { n } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Problem statement',
            description: `Check if ${n} is perfect, deficient, or abundant`,
            reasoning: 'Compare sum of proper divisors to the number itself',
            goalStatement: 'Classify the number based on its divisors'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find all divisors',
            description: `Divisors of ${n}: ${solution.divisors.join(', ')}`,
            divisors: solution.divisors,
            count: solution.divisors.length
        });

        steps.push({
            stepNumber: 3,
            step: 'Identify proper divisors',
            description: `Proper divisors (excluding ${n}): ${solution.properDivisors.join(', ')}`,
            properDivisors: solution.properDivisors,
            reasoning: 'Proper divisors are all divisors except the number itself'
        });

        steps.push({
            stepNumber: 4,
            step: 'Sum proper divisors',
            description: `${solution.properDivisors.join(' + ')} = ${solution.properSum}`,
            sum: solution.properSum,
            reasoning: 'Add all proper divisors together'
        });

        steps.push({
            stepNumber: 5,
            step: 'Compare to n',
            description: this.generatePerfectComparison(n, solution.properSum),
            comparison: {
                n: n,
                properSum: solution.properSum,
                relation: solution.properSum === n ? 'equal' : (solution.properSum < n ? 'less' : 'greater')
            },
            reasoning: 'Perfect: sum = n; Deficient: sum < n; Abundant: sum > n'
        });

        steps.push({
            stepNumber: 6,
            step: 'Classification',
            description: `${n} is ${solution.classification}`,
            classification: solution.classification,
            explanation: this.explainClassification(solution.classification),
            finalAnswer: true
        });

        return steps;
    }

    generateGenericDivisibilitySteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Divisibility calculation',
            description: 'Solve the given divisibility problem',
            expression: problem.cleanInput,
            reasoning: 'Apply appropriate divisibility technique',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION HELPERS

    enhanceDivisibilityStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationDivisibility(step, problem),
                procedural: this.getProceduralExplanationDivisibility(step),
                visual: this.getVisualExplanationDivisibility(step, problem),
                algebraic: this.getAlgebraicExplanationDivisibility(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyDivisibility(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsDivisibility(step, problem);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionDivisibility(step, problem);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionDivisibility(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationDivisibility(step, problem) {
        const conceptualMap = {
            'Problem statement': 'Understanding what divisibility means and what we need to find',
            'Apply divisibility rule': 'Using patterns in base-10 to test divisibility quickly',
            'Find prime factorization': 'Breaking a number into its fundamental prime building blocks',
            'Apply divisor count formula': 'Using exponents to count all possible factor combinations',
            'List all divisors': 'Systematically finding all numbers that divide evenly',
            'Apply Euclidean algorithm': 'Using repeated division to find the largest common divisor',
            'Sum proper divisors': 'Adding all divisors except the number itself',
            'Classification': 'Categorizing based on relationship between number and its divisors'
        };

        return conceptualMap[step.step] || 'Proceeding with the divisibility calculation';
    }

    getProceduralExplanationDivisibility(step) {
        if (step.description) {
            return `1. ${step.description}
2. Apply the appropriate method
3. Calculate the result
4. Verify if needed`;
        }
        return 'Follow the standard procedure for this divisibility operation';
    }

    getVisualExplanationDivisibility(step, problem) {
        const visualMap = {
            'divisibility_test': 'Visualize dividing items into equal groups - if no leftovers, it\'s divisible',
            'divisor_count': 'Picture all possible rectangle dimensions with area = n',
            'sum_of_divisors': 'Imagine adding up all possible equal group sizes',
            'prime_factorization': 'Think of a factor tree branching down to prime numbers',
            'gcd': 'Visualize the largest measuring stick that fits evenly into both numbers',
            'lcm': 'Picture cycles meeting up - when do they align?',
            'list_divisors': 'See divisors as pairs that multiply to give n'
        };

        const category = this.divisibilityTypes[problem.type]?.category;
        return visualMap[category] || 'Visualize the divisibility relationship';
    }

    getAlgebraicExplanationDivisibility(step) {
        const algebraicMap = {
            'Apply divisibility rule': 'Based on modular arithmetic properties in base 10',
            'Apply divisor count formula': 'τ(n) = Π(aᵢ + 1) where n = Πpᵢ^aᵢ',
            'Sum proper divisors': 'σ(n) - n, where σ is sum of all divisors',
            'Apply Euclidean algorithm': 'gcd(a,b) = gcd(b, a mod b), recursive definition',
            'Apply LCM formula': 'lcm(a,b) = ab/gcd(a,b)'
        };

        return algebraicMap[step.step] || 'Formal mathematical definition applies';
    }

    identifyKeyVocabularyDivisibility(step) {
        const vocabMap = {
            'divisibility_test': ['divisible', 'divisor', 'dividend', 'remainder', 'quotient'],
            'divisor_count': ['divisor', 'factor', 'tau function', 'prime factorization', 'exponent'],
            'sum_of_divisors': ['sigma function', 'divisor', 'sum', 'proper divisors', 'aliquot sum'],
            'prime_factorization': ['prime', 'composite', 'factor', 'exponent', 'factorization'],
            'gcd': ['greatest common divisor', 'GCD', 'common factor', 'Euclidean algorithm'],
            'lcm': ['least common multiple', 'LCM', 'common multiple'],
            'perfect_number': ['perfect', 'deficient', 'abundant', 'proper divisors']
        };

        // Return vocabulary based on step content
        for (const [key, vocab] of Object.entries(vocabMap)) {
            if (step.step && step.step.toLowerCase().includes(key.split('_')[0])) {
                return vocab;
            }
        }

        return ['divisor', 'factor', 'divisible'];
    }

    generateThinkingPromptsDivisibility(step, problem) {
        return {
            before: this.getBeforePromptDivisibility(step, problem),
            during: this.getDuringPromptDivisibility(step, problem),
            after: this.getAfterPromptDivisibility(step, problem)
        };
    }

    getBeforePromptDivisibility(step, problem) {
        const prompts = {
            'Apply divisibility rule': 'What divisibility rule should I use for this divisor?',
            'Find prime factorization': 'What is the smallest prime I should test first?',
            'List all divisors': 'How far should I check? (Hint: up to √n)',
            'Apply divisor count formula': 'Do I have the complete prime factorization?',
            'Apply Euclidean algorithm': 'Which number should be the dividend, which the divisor?'
        };

        return prompts[step.step] || 'What is the goal of this step?';
    }

    getDuringPromptDivisibility(step, problem) {
        const prompts = {
            'Apply divisibility rule': 'Am I applying the rule correctly?',
            'Find prime factorization': 'Have I divided out all factors of this prime?',
            'List all divisors': 'Am I recording both divisors in each pair?',
            'Apply divisor count formula': 'Did I remember to add 1 to each exponent?',
            'Sum proper divisors': 'Did I exclude the number itself?'
        };

        return prompts[step.step] || 'Am I following the procedure correctly?';
    }

    getAfterPromptDivisibility(step, problem) {
        const prompts = {
            'Apply divisibility rule': 'Does my rule conclusion match what division would give?',
            'Find prime factorization': 'Are all my factors actually prime?',
            'List all divisors': 'Did I miss any divisors? Can I verify the count?',
            'Apply divisor count formula': 'Can I verify by listing divisors?',
            'Sum proper divisors': 'Did I add correctly?'
        };

        return prompts[step.step] || 'Does this result make sense?';
    }

    generateSelfCheckQuestionDivisibility(step, problem) {
        const questions = {
            'Apply divisibility rule': 'Did I apply the correct rule for this divisor?',
            'Find prime factorization': 'Are all my factors prime? Did I get the original number when multiplying?',
            'List all divisors': 'Do all my divisors actually divide the number evenly?',
            'Apply divisor count formula': 'Does my formula calculation match the actual count?',
            'Sum proper divisors': 'Did I include all divisors except n itself?',
            'Apply Euclidean algorithm': 'Did I continue until the remainder was 0?',
            'Classification': 'Does my classification match the comparison of sum and number?'
        };

        return questions[step.step] || 'Is this step correct?';
    }

    findRealWorldConnectionDivisibility(step, problem) {
        const connections = {
            'divisibility_test': 'Like checking if items can be packed evenly in boxes',
            'divisor_count': 'Finding all possible ways to arrange items in rectangular arrays',
            'sum_of_divisors': 'Adding up all the ways items can be grouped',
            'prime_factorization': 'Like finding the basic ingredients in a recipe',
            'gcd': 'Finding the largest measurement that works for both quantities',
            'lcm': 'Finding when repeating events coincide (like bus schedules)',
            'list_divisors': 'Finding all possible equal group sizes'
        };

        const category = this.divisibilityTypes[problem.type]?.category;
        return connections[category] || 'This concept helps solve practical grouping problems';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationDivisibility(step, problem),
                analogy: this.findRelevantAnalogyDivisibility(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description || ''),
                visualization: this.suggestVisualizationDivisibility(step, problem)
            }
        }));
    }

    generateELI5ExplanationDivisibility(step, problem) {
        const ELI5Map = {
            'Problem statement': 'We have a puzzle! We need to see if we can share things equally with no leftovers.',
            'Apply divisibility rule': 'There\'s a trick to check this without doing full division!',
            'Find prime factorization': 'We\'re breaking the number into its smallest building blocks - prime numbers!',
            'List all divisors': 'Let\'s find ALL the ways we can divide this number evenly!',
            'Sum proper divisors': 'Now we add up all those ways of dividing (except the number itself)!',
            'Apply divisor count formula': 'We can count divisors without listing them all by using a special formula!',
            'Apply Euclidean algorithm': 'We keep dividing and dividing until we find the biggest number that fits into both!',
            'Classification': 'We check if the number is perfect (sum equals it), deficient (sum is less), or abundant (sum is more)!'
        };

        return ELI5Map[step.step] || 'We\'re taking another step in our divisibility puzzle!';
    }

    findRelevantAnalogyDivisibility(step, problem) {
        const category = this.divisibilityTypes[problem.type]?.category;
        
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(category) || analogy.suitableFor.includes('all')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        
        return 'Think of this like organizing toys into equal groups!';
    }

    suggestVisualizationDivisibility(step, problem) {
        const visualMap = {
            'Apply divisibility rule': 'Draw the number and circle the digits you need to check',
            'Find prime factorization': 'Draw a tree with branches splitting into smaller factors',
            'List all divisors': 'Draw pairs of numbers that multiply to give your number',
            'Sum proper divisors': 'Draw all divisors in boxes and add them up',
            'Apply divisor count formula': 'Draw the prime factorization and count possibilities',
            'Apply Euclidean algorithm': 'Draw division steps one under another',
            'Classification': 'Draw a number line showing where the sum falls relative to n'
        };

        return visualMap[step.step] || 'Draw a picture to represent what\'s happening';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeDivisibility(steps[i], steps[i + 1], problem),
                    reasoning: this.explainStepProgressionDivisibility(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategyDivisibility(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeDivisibility(currentStep, nextStep, problem) {
        return {
            currentState: `We now have: ${this.summarizeStepResult(currentStep)}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary to continue toward finding ${this.getFinalGoal(problem)}`,
            howItHelps: `This will help by ${this.explainStepBenefit(nextStep)}`
        };
    }

    summarizeStepResult(step) {
        if (step.result !== undefined) return `result = ${step.result}`;
        if (step.divisors) return `divisors found`;
        if (step.factorization) return `factorization complete`;
        if (step.sum) return `sum = ${step.sum}`;
        return step.description || 'intermediate result';
    }

    getFinalGoal(problem) {
        const goals = {
            'divisibility_test': 'whether the number is divisible',
            'divisor_count': 'the count of divisors',
            'sum_of_divisors': 'the sum of all divisors',
            'list_divisors': 'all divisors listed',
            'prime_factorization': 'the prime factorization',
            'gcd_calculation': 'the greatest common divisor',
            'lcm_calculation': 'the least common multiple',
            'perfect_number_check': 'the classification of the number'
        };

        return goals[problem.type] || 'the solution';
    }

    explainStepProgressionDivisibility(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue the calculation`;
    }

    explainStepStrategyDivisibility(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.reasoning || nextStep.description}`;
    }

    explainStepBenefit(step) {
        const benefits = {
            'Find prime factorization': 'allowing us to use formulas for divisor count and sum',
            'Apply divisibility rule': 'quickly checking divisibility without full division',
            'List all divisors': 'seeing all factors explicitly',
            'Sum proper divisors': 'determining the number\'s classification',
            'Apply Euclidean algorithm': 'efficiently finding the GCD',
            'Apply divisor count formula': 'counting divisors without listing them all'
        };

        return benefits[step.step] || 'moving us closer to the solution';
    }

    addErrorPrevention(step, problemType) {
        const category = this.divisibilityTypes[problemType]?.category || 'divisibility_test';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsDivisibility(step, problemType),
                checkPoints: this.generateCheckPointsDivisibility(step),
                warningFlags: this.identifyWarningFlagsDivisibility(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionDivisibility(step, { type: problemType }),
                expectedResult: this.describeExpectedResultDivisibility(step),
                troubleshooting: this.generateTroubleshootingTipsDivisibility(step)
            }
        };
    }

    generatePreventionTipsDivisibility(step, problemType) {
        const tips = {
            'Apply divisibility rule': [
                'Make sure you know the correct rule for this divisor',
                'Check ALL required digits, not just one',
                'For sum rules, keep summing until small enough to test'
            ],
            'Find prime factorization': [
                'Test primes systematically: 2, 3, 5, 7, 11, ...',
                'Completely divide out each prime before moving to the next',
                'Remember that 1 is NOT prime'
            ],
            'Apply divisor count formula': [
                'Add 1 to EACH exponent, not multiply',
                'Don\'t forget any prime factors',
                'Multiply the (exponent+1) values together'
            ],
            'Sum proper divisors': [
                'List all divisors systematically',
                'Exclude n itself (it\'s not a proper divisor)',
                'Double-check your addition'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check each calculation'];
    }

    generateCheckPointsDivisibility(step) {
        return [
            'Did I apply the correct method?',
            'Are my calculations accurate?',
            'Did I include/exclude the right values?',
            'Can I verify this result another way?'
        ];
    }

    identifyWarningFlagsDivisibility(step, problemType) {
        const warnings = {
            'divisibility_test': ['Check you\'re using the right rule', 'Don\'t confuse rules for different divisors'],
            'divisor_count': ['Remember to add 1 to exponents', 'Don\'t multiply exponents directly'],
            'sum_of_divisors': ['Don\'t forget to include 1 as a divisor', 'For proper divisors, exclude n'],
            'prime_factorization': ['1 is not prime', 'Make sure all factors are actually prime']
        };

        const category = this.divisibilityTypes[problemType]?.category;
        return warnings[category] || [];
    }

    describeExpectedResultDivisibility(step) {
        const expectations = {
            'Problem statement': 'Clear understanding of what needs to be found',
            'Apply divisibility rule': 'Yes/No answer on divisibility',
            'Find prime factorization': 'Product of primes with exponents',
            'List all divisors': 'Complete list of all factors',
            'Sum proper divisors': 'A numerical sum',
            'Apply divisor count formula': 'A count matching the actual number of divisors',
            'Classification': 'Perfect, Deficient, or Abundant'
        };

        return expectations[step.step] || 'Progress toward the final answer';
    }

    generateTroubleshootingTipsDivisibility(step) {
        return [
            'If stuck, review the divisibility rule or formula',
            'Try the calculation with a simpler example first',
            'Check your arithmetic carefully',
            'Verify intermediate results make sense',
            'Consider using an alternative method to check'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsDivisibility(step, problem),
                subSteps: this.breakIntoSubStepsDivisibility(step),
                hints: this.generateProgressiveHintsDivisibility(step, problem),
                practiceVariation: this.generatePracticeVariationDivisibility(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessDivisibility(step),
                decisionPoints: this.identifyDecisionPointsDivisibility(step),
                alternativeApproaches: this.suggestAlternativeMethodsDivisibility(step, problem)
            }
        }));
    }

    generateGuidingQuestionsDivisibility(step, problem) {
        const questions = {
            'Problem statement': [
                'What type of divisibility problem is this?',
                'What information am I given?',
                'What do I need to find?'
            ],
            'Apply divisibility rule': [
                'What divisor am I testing?',
                'What is the divisibility rule for this number?',
                'Which digits do I need to check?'
            ],
            'Find prime factorization': [
                'What is the smallest prime to test?',
                'Have I completely factored out this prime?',
                'When do I stop checking primes?'
            ],
            'Apply divisor count formula': [
                'Do I have the complete prime factorization?',
                'What do I do with each exponent?',
                'How do I combine the results?'
            ],
            'List all divisors': [
                'How far should I check?',
                'Am I recording both divisors in each pair?',
                'Have I sorted them in order?'
            ]
        };

        return questions[step.step] || ['What is the goal?', 'How do I proceed?', 'How can I check?'];
    }

    breakIntoSubStepsDivisibility(step) {
        if (step.step === 'Apply divisibility rule') {
            return [
                'Identify which divisor we\'re testing',
                'Recall the divisibility rule for this divisor',
                'Extract the relevant digits from the number',
                'Apply the rule to those digits',
                'Conclude whether divisible or not'
            ];
        }

        if (step.step === 'Find prime factorization') {
            return [
                'Start with the smallest prime (2)',
                'Divide the number by this prime if possible',
                'Repeat until prime no longer divides',
                'Move to next prime and repeat',
                'Continue until quotient is 1 or prime'
            ];
        }

        return ['Understand the goal', 'Apply the method', 'Calculate the result', 'Verify'];
    }

    generateProgressiveHintsDivisibility(step, problem) {
        const category = this.divisibilityTypes[problem.type]?.category || 'divisibility_test';
        const hintSet = this.hints[category] || this.hints.divisibility_test;

        return {
            level1: hintSet.level1 || 'What type of problem is this?',
            level2: hintSet.level2 || 'What method should you use?',
            level3: hintSet.level3 || 'Apply the specific technique',
            level4: hintSet.level4 || 'Here\'s the complete approach'
        };
    }

    generatePracticeVariationDivisibility(step, problem) {
        return {
            similarProblem: 'Try the same method with a different number',
            practiceHint: 'Start with smaller numbers to build confidence',
            extension: 'Try with larger numbers or multiple divisors'
        };
    }

    explainThinkingProcessDivisibility(step) {
        return {
            observe: 'What numbers or operations am I working with?',
            goal: 'What am I trying to find or prove?',
            strategy: 'What method or rule should I apply?',
            execute: 'How do I carry out this method correctly?',
            verify: 'Does my result make sense? Can I check it?'
        };
    }

    identifyDecisionPointsDivisibility(step) {
        const decisions = {
            'divisibility_test': ['Which divisibility rule applies?', 'Should I use the rule or direct division?'],
            'divisor_count': ['Should I list divisors or use the formula?', 'Do I have complete factorization?'],
            'sum_of_divisors': ['Should I list and add, or use the formula?', 'Did I include/exclude correctly?'],
            'gcd': ['Should I list factors or use Euclidean algorithm?', 'When do I stop the algorithm?']
        };

        for (const [key, decisionList] of Object.entries(decisions)) {
            if (step.step && step.step.toLowerCase().includes(key)) {
                return decisionList;
            }
        }

        return ['What method to use?', 'How to verify the result?'];
    }

    suggestAlternativeMethodsDivisibility(step, problem) {
        const alternatives = {
            'divisibility_test': [
                'Use divisibility rule (fast)',
                'Perform actual division (always works)',
                'Check remainder using modulo'
            ],
            'divisor_count': [
                'List all divisors and count (straightforward)',
                'Use formula with prime factorization (efficient for large numbers)',
                'Check systematically up to √n'
            ],
            'gcd': [
                'List all factors and find largest common (works for small numbers)',
                'Use Euclidean algorithm (most efficient)',
                'Use prime factorization (good for seeing structure)'
            ]
        };

        for (const [key, methods] of Object.entries(alternatives)) {
            if (step.step && step.step.toLowerCase().includes(key)) {
                return methods;
            }
        }

        return ['The chosen method is appropriate'];
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'divisible': 'can be divided evenly',
            'divisor': 'number that divides evenly',
            'quotient': 'answer when dividing',
            'remainder': 'what\'s left over',
            'prime': 'only divisible by 1 and itself',
            'composite': 'has more divisors than just 1 and itself',
            'factor': 'number that divides evenly',
            'prime factorization': 'breaking into prime building blocks',
            'tau function': 'count of divisors',
            'sigma function': 'sum of divisors',
            'proper divisors': 'divisors not including the number itself',
            'GCD': 'biggest number that divides both',
            'LCM': 'smallest number that both divide',
            'Euclidean algorithm': 'repeated division method',
            'aliquot sum': 'sum of proper divisors'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(`\\b${term}\\b`, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    // ADDITIONAL HELPER METHODS

    applyDivisibilityRule(n, divisor, rule) {
        switch(divisor) {
            case 2:
                return `Last digit: ${n % 10}. ${(n % 10) % 2 === 0 ? 'Even' : 'Odd'}`;
            case 3:
            case 9:
                const sum = this.sumOfDigits(n);
                return `Sum of digits: ${sum}. ${sum % divisor === 0 ? `Divisible by ${divisor}` : `Not divisible by ${divisor}`}`;
            case 4:
                const lastTwo = n % 100;
                return `Last two digits: ${lastTwo}. ${lastTwo % 4 === 0 ? 'Divisible by 4' : 'Not divisible by 4'}`;
            case 5:
                return `Last digit: ${n % 10}. ${n % 10 === 0 || n % 10 === 5 ? 'Divisible by 5' : 'Not divisible by 5'}`;
            case 8:
                const lastThree = n % 1000;
                return `Last three digits: ${lastThree}. ${lastThree % 8 === 0 ? 'Divisible by 8' : 'Not divisible by 8'}`;
            case 10:
                return `Last digit: ${n % 10}. ${n % 10 === 0 ? 'Divisible by 10' : 'Not divisible by 10'}`;
            case 11:
                const altSum = this.alternatingDigitSum(n);
                return `Alternating sum: ${altSum}. ${altSum % 11 === 0 ? 'Divisible by 11' : 'Not divisible by 11'}`;
            default:
                return rule.test(n) ? `Divisible by ${divisor}` : `Not divisible by ${divisor}`;
        }
    }

    evaluateDivisibilityRule(n, divisor, rule) {
        const ruleResult = rule.test(n);
        const actualResult = n % divisor === 0;
        
        if (ruleResult === actualResult) {
            return `Rule correctly indicates: ${ruleResult ? 'divisible' : 'not divisible'}`;
        } else {
            return `Rule mismatch! Check calculation.`;
        }
    }

    generateSigmaFormulaBreakdown(factorization) {
        const breakdown = [];
        
        for (const [prime, exponent] of Object.entries(factorization).sort((a, b) => parseInt(a[0]) - parseInt(b[0]))) {
            const p = parseInt(prime);
            const k = exponent;
            const numerator = Math.pow(p, k + 1) - 1;
            const denominator = p - 1;
            const result = numerator / denominator;
            
            breakdown.push({
                prime: p,
                exponent: k,
                formula: `(${p}^${k+1} - 1)/(${p} - 1)`,
                calculation: `(${numerator})/${denominator} = ${result}`
            });
        }
        
        return breakdown;
    }

    generatePerfectComparison(n, properSum) {
        if (properSum === n) {
            return `${properSum} = ${n}, so ${n} is PERFECT`;
        } else if (properSum < n) {
            return `${properSum} < ${n}, so ${n} is DEFICIENT`;
        } else {
            return `${properSum} > ${n}, so ${n} is ABUNDANT`;
        }
    }

    explainClassification(classification) {
        const explanations = {
            'Perfect': 'The sum of proper divisors equals the number itself (rare and special!)',
            'Deficient': 'The sum of proper divisors is less than the number (most numbers are deficient)',
            'Abundant': 'The sum of proper divisors is greater than the number'
        };
        
        return explanations[classification] || '';
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the calculation`,
            progression: 'We are getting closer to the final answer',
            relationship: 'Each step brings us one step closer to solving the problem'
        };
    }

    identifyPrerequisites(step, problemType) {
        const prereqs = this.prerequisites[problemType];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic arithmetic', 'Understanding of division'];
    }

    // GRAPH GENERATION

    generateDivisibilityGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;

        // Generate appropriate visualizations
        if (type === 'list_divisors' && this.currentSolution.divisors) {
            this.graphData = {
                type: 'divisor_visualization',
                divisors: this.currentSolution.divisors,
                pairs: this.currentSolution.divisorPairs,
                description: 'Visual representation of divisor pairs'
            };
        } else if (type === 'prime_factorization' && this.currentSolution.factorization) {
            this.graphData = {
                type: 'factor_tree',
                factorization: this.currentSolution.factorization,
                formatted: this.currentSolution.formatted,
                description: 'Prime factorization tree'
            };
        }
    }

    // WORKBOOK GENERATION

    generateDivisibilityWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createDivisibilityLessonSection(),
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
            title: 'Enhanced Divisibility Mathematical Workbook',
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
            ['Problem Type', this.divisibilityTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.divisibilityTypes[this.currentProblem.type]?.category || 'divisibility'],
            ['Description', this.currentProblem.scenario || this.divisibilityTypes[this.currentProblem.type]?.description || 'Divisibility problem']
        ];

        // Add specific parameters based on problem type
        if (this.currentProblem.parameters.n !== undefined) {
            problemData.push(['Number (n)', this.currentProblem.parameters.n]);
        }
        if (this.currentProblem.parameters.divisor !== undefined) {
            problemData.push(['Divisor', this.currentProblem.parameters.divisor]);
        }
        if (this.currentProblem.parameters.a !== undefined) {
            problemData.push(['First number (a)', this.currentProblem.parameters.a]);
        }
        if (this.currentProblem.parameters.b !== undefined) {
            problemData.push(['Second number (b)', this.currentProblem.parameters.b]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const prereqs = this.prerequisites[this.currentProblem.type];

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

            if (step.calculation) {
                stepsData.push(['Calculation', step.calculation]);
            }

            if (step.result !== undefined && step.result !== null) {
                stepsData.push(['Result', step.result]);
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
                
                const hints = step.scaffolding.hints;
                if (hints) {
                    stepsData.push(['Hint Level 1', hints.level1]);
                    stepsData.push(['Hint Level 2', hints.level2]);
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

    createDivisibilityLessonSection() {
        const { type } = this.currentProblem;
        const category = this.divisibilityTypes[type]?.category;

        const lessonData = [
            ['Key Concepts', ''],
            ['', 'Divisibility describes when one integer divides another with no remainder'],
            ['', 'Understanding divisibility helps with factorization and simplification'],
            ['', 'Many divisibility tests exist for quick checking'],
            ['', 'Prime factorization is fundamental to divisor calculations'],
            ['', ''],
            ['Important Formulas', ''],
            ['', 'τ(n) = number of divisors'],
            ['', 'σ(n) = sum of divisors'],
            ['', 'gcd(a,b) = greatest common divisor'],
            ['', 'lcm(a,b) = least common multiple']
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

        if (this.currentSolution.isDivisible !== undefined) {
            solutionData.push(['Is Divisible?', this.currentSolution.isDivisible ? 'Yes' : 'No']);
            if (this.currentSolution.quotient !== undefined) {
                solutionData.push(['Quotient', this.currentSolution.quotient]);
                solutionData.push(['Remainder', this.currentSolution.remainder]);
            }
        }

        if (this.currentSolution.divisorCount !== undefined) {
            solutionData.push(['Divisor Count', this.currentSolution.divisorCount]);
        }

        if (this.currentSolution.sum !== undefined) {
            solutionData.push(['Sum of Divisors', this.currentSolution.sum]);
        }

        if (this.currentSolution.divisors) {
            solutionData.push(['Divisors', this.currentSolution.divisors.join(', ')]);
        }

        if (this.currentSolution.formatted) {
            solutionData.push(['Prime Factorization', this.currentSolution.formatted]);
        }

        if (this.currentSolution.gcd !== undefined) {
            solutionData.push(['GCD', this.currentSolution.gcd]);
        }

        if (this.currentSolution.lcm !== undefined) {
            solutionData.push(['LCM', this.currentSolution.lcm]);
        }

        if (this.currentSolution.classification) {
            solutionData.push(['Classification', this.currentSolution.classification]);
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
            ['Category', this.divisibilityTypes[this.currentProblem.type]?.category]
        ];

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [
            ['Verification Method', 'Direct calculation or rule application'],
            ['', '']
        ];

        if (this.currentSolution.isDivisible !== undefined) {
            const { n, divisor } = this.currentProblem.parameters;
            const actualCheck = n % divisor === 0;
            verificationData.push(['Direct Check', `${n} % ${divisor} = ${n % divisor}`]);
            verificationData.push(['Result Matches', actualCheck === this.currentSolution.isDivisible ? 'Yes ✓' : 'No']);
        }

        if (this.currentSolution.divisors && this.currentSolution.divisorCount) {
            verificationData.push(['Listed Count', this.currentSolution.divisors.length]);
            verificationData.push(['Formula Count', this.currentSolution.divisorCount]);
            verificationData.push(['Match', this.currentSolution.divisors.length === this.currentSolution.divisorCount ? 'Yes ✓' : 'No']);
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
            ['Real-World Applications', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Divisibility Use', app.divisibilityUse]);
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

        const notes = this.generateDivisibilityPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateDivisibilityAlternativeMethods(this.currentProblem.type);

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

        problems.easy.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium Problems', '']);

        problems.medium.slice(0, 2).forEach((p, i) => {
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

    generateDivisibilityPedagogicalNotes(problemType) {
        const pedagogicalDatabase = {
            divisibility_test: {
                objectives: [
                    'Understand what divisibility means',
                    'Apply divisibility rules correctly',
                    'Verify divisibility through division'
                ],
                keyConcepts: [
                    'Divisible means no remainder',
                    'Different rules for different divisors',
                    'Rules based on base-10 properties'
                ],
                prerequisites: [
                    'Division with remainders',
                    'Place value understanding',
                    'Basic addition'
                ],
                commonDifficulties: [
                    'Confusing different divisibility rules',
                    'Forgetting to check all required digits',
                    'Not summing repeatedly for digit sum tests'
                ],
                teachingStrategies: [
                    'Use concrete examples with manipulatives',
                    'Practice rules with patterns',
                    'Connect to equal grouping'
                ],
                extensions: [
                    'Divisibility by larger numbers',
                    'Combining rules (6, 12, 15)',
                    'Modular arithmetic'
                ],
                assessment: [
                    'Can student apply correct rule?',
                    'Does student verify results?',
                    'Can student explain why rule works?'
                ]
            },
            divisor_count: {
                objectives: [
                    'Count divisors systematically',
                    'Use prime factorization formula',
                    'Understand divisor structure'
                ],
                keyConcepts: [
                    'Divisors come in pairs',
                    'Formula uses prime factorization',
                    'Add 1 to each exponent then multiply'
                ],
                prerequisites: [
                    'Prime factorization',
                    'Exponents',
                    'Systematic listing'
                ],
                commonDifficulties: [
                    'Missing divisors when listing',
                    'Forgetting to add 1 to exponents',
                    'Incomplete factorization'
                ],
                teachingStrategies: [
                    'Use array/rectangle visualization',
                    'Practice with small numbers first',
                    'Verify formula against actual list'
                ],
                extensions: [
                    'Numbers with many divisors',
                    'Perfect squares (odd number of divisors)',
                    'Highly composite numbers'
                ],
                assessment: [
                    'Can student list all divisors?',
                    'Can student apply formula?',
                    'Do results match?'
                ]
            },
            sum_of_divisors: {
                objectives: [
                    'Find and sum all divisors',
                    'Use sigma function formula',
                    'Classify numbers as perfect/deficient/abundant'
                ],
                keyConcepts: [
                    'Sum includes 1 and n',
                    'Formula uses geometric series',
                    'Perfect numbers are rare'
                ],
                prerequisites: [
                    'Finding divisors',
                    'Addition',
                    'Prime factorization'
                ],
                commonDifficulties: [
                    'Forgetting to include 1 or n',
                    'Arithmetic errors in sum',
                    'Formula application mistakes'
                ],
                teachingStrategies: [
                    'Start with small numbers',
                    'Verify formula against actual sum',
                    'Explore perfect number patterns'
                ],
                extensions: [
                    'Amicable numbers',
                    'Aliquot sequences',
                    'Mersenne primes connection'
                ],
                assessment: [
                    'Can student list all divisors?',
                    'Is sum calculated correctly?',
                    'Can student classify number?'
                ]
            },
            gcd_calculation: {
                objectives: [
                    'Find greatest common divisor',
                    'Use Euclidean algorithm',
                    'Apply GCD to problems'
                ],
                keyConcepts: [
                    'GCD is largest common factor',
                    'Euclidean algorithm is efficient',
                    'GCD divides both numbers'
                ],
                prerequisites: [
                    'Factors',
                    'Division with remainder',
                    'Common factors concept'
                ],
                commonDifficulties: [
                    'Confusing GCD with LCM',
                    'Algorithm termination confusion',
                    'Missing common factors'
                ],
                teachingStrategies: [
                    'Use concrete measurement examples',
                    'Practice algorithm step-by-step',
                    'Connect to simplifying fractions'
                ],
                extensions: [
                    'Extended Euclidean algorithm',
                    'GCD of more than 2 numbers',
                    'Bezout\'s identity'
                ],
                assessment: [
                    'Can student find GCD by listing?',
                    'Can student use algorithm?',
                    'Can student apply to problems?'
                ]
            }
        };

        return pedagogicalDatabase[problemType] || {
            objectives: ['Understand divisibility concepts'],
            keyConcepts: ['Divisibility fundamentals'],
            prerequisites: ['Basic arithmetic'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex problems'],
            assessment: ['Verify understanding']
        };
    }

    generateDivisibilityAlternativeMethods(problemType) {
        const alternativeDatabase = {
            divisibility_test: {
                primaryMethod: 'Divisibility Rules',
                methods: [
                    {
                        name: 'Direct Division',
                        description: 'Divide and check remainder - always works but slower'
                    },
                    {
                        name: 'Modular Arithmetic',
                        description: 'Use modulo operator: n % d === 0'
                    },
                    {
                        name: 'Pattern Recognition',
                        description: 'For some divisors, recognize patterns in number'
                    }
                ],
                comparison: 'Rules are fastest for 2,3,4,5,6,8,9,10,11,12; direct division always works'
            },
            divisor_count: {
                primaryMethod: 'Prime Factorization Formula',
                methods: [
                    {
                        name: 'Systematic Listing',
                        description: 'Check each integer from 1 to √n, record pairs'
                    },
                    {
                        name: 'Formula Method',
                        description: 'Factor, then use τ(n) = Π(aᵢ+1)'
                    },
                    {
                        name: 'Factor Tree Visual',
                        description: 'Visual method to find factorization first'
                    }
                ],
                comparison: 'Listing works for small n; formula essential for large n'
            },
            sum_of_divisors: {
                primaryMethod: 'List and Add',
                methods: [
                    {
                        name: 'Direct Summation',
                        description: 'List all divisors and add them up'
                    },
                    {
                        name: 'Sigma Function Formula',
                        description: 'Use σ(n) = Π[(pᵢ^(aᵢ+1)-1)/(pᵢ-1)]'
                    },
                    {
                        name: 'Multiplicative Property',
                        description: 'For coprime factors, σ(mn) = σ(m)σ(n)'
                    }
                ],
                comparison: 'Direct summation clear but tedious; formula efficient for large numbers'
            },
            gcd_calculation: {
                primaryMethod: 'Euclidean Algorithm',
                methods: [
                    {
                        name: 'List Factors Method',
                        description: 'List all factors of both, find largest common'
                    },
                    {
                        name: 'Euclidean Algorithm',
                        description: 'Repeated division: gcd(a,b) = gcd(b, a mod b)'
                    },
                    {
                        name: 'Prime Factorization',
                        description: 'Factor both, take minimum power of each prime'
                    }
                ],
                comparison: 'Euclidean algorithm most efficient; factorization gives insight into structure'
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard approach',
            methods: [{
                name: 'Alternative',
                description: 'Other methods may apply'
            }],
            comparison: 'Choose based on problem characteristics'
        };
    }
}

// Export the class
export default EnhancedDivisibilityMathematicalWorkbook;
