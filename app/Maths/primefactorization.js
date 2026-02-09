// Enhanced Prime Factorization Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedPrimeFactorizationMathematicalWorkbook {
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
        this.initializePrimeSolvers();
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
        this.initializePrimeLessons();
        this.initializeHistoricalContext();
        this.initializePrimeAlgorithms();
    }

    initializePrimeLessons() {
        this.lessons = {
            prime_numbers: {
                title: "Prime Numbers",
                concepts: [
                    "A prime number has exactly two factors: 1 and itself",
                    "1 is NOT a prime number (has only one factor)",
                    "2 is the only even prime number",
                    "All other primes are odd",
                    "Prime numbers are the 'building blocks' of all numbers"
                ],
                theory: "Prime numbers are fundamental in mathematics. They cannot be divided evenly by any number except 1 and themselves. Every whole number greater than 1 is either prime or can be expressed as a product of primes.",
                keyFormulas: {
                    "Prime Definition": "n is prime if n > 1 and has no divisors except 1 and n",
                    "Composite Definition": "n is composite if n > 1 and n = a × b where 1 < a, b < n",
                    "Fundamental Theorem": "Every integer > 1 is either prime or a unique product of primes"
                },
                identificationSteps: [
                    "Check if number is greater than 1",
                    "Check if number equals 2 (the only even prime)",
                    "Check if number is even (if so, not prime)",
                    "Test divisibility by odd numbers from 3 to √n",
                    "If no divisors found, number is prime"
                ],
                applications: [
                    "Cryptography and internet security (RSA encryption)",
                    "Hash tables and data structures",
                    "Random number generation",
                    "Cicada life cycles (prime year cycles avoid predators)",
                    "Music theory (prime-numbered rhythms)"
                ]
            },

            prime_factorization: {
                title: "Prime Factorization",
                concepts: [
                    "Every composite number can be written as a product of primes",
                    "Prime factorization is unique (Fundamental Theorem of Arithmetic)",
                    "Use factor trees or division method",
                    "Express using exponential notation for repeated factors",
                    "1 is not included in prime factorization"
                ],
                theory: "Prime factorization breaks a number down into its prime 'building blocks'. This representation is unique - there's only one way to factor any number into primes (ignoring order).",
                keyFormulas: {
                    "General Form": "n = p₁^a₁ × p₂^a₂ × p₃^a₃ × ...",
                    "Example": "60 = 2² × 3 × 5",
                    "Uniqueness": "Only one prime factorization exists for each number"
                },
                methods: {
                    "Factor Tree": "Repeatedly split into factors until all are prime",
                    "Division Method": "Divide by smallest prime repeatedly, then move to next prime",
                    "Trial Division": "Test division by primes in order: 2, 3, 5, 7, 11, ..."
                },
                solvingSteps: [
                    "Start with smallest prime (2)",
                    "Divide if possible, record the prime",
                    "Repeat with quotient",
                    "Move to next prime when current doesn't divide",
                    "Continue until quotient is 1",
                    "Express in exponential form"
                ],
                applications: [
                    "Finding GCF and LCM",
                    "Simplifying fractions",
                    "Solving equations involving factorials",
                    "Cryptography algorithms",
                    "Understanding divisibility"
                ]
            },

            divisibility_rules: {
                title: "Divisibility Rules",
                concepts: [
                    "Quick tests to check if one number divides another",
                    "Based on patterns in the number system",
                    "Help identify factors without division",
                    "Essential for prime testing and factorization"
                ],
                theory: "Divisibility rules are shortcuts based on properties of our base-10 number system. They allow quick identification of factors.",
                keyRules: {
                    "Divisible by 2": "Last digit is even (0, 2, 4, 6, 8)",
                    "Divisible by 3": "Sum of digits is divisible by 3",
                    "Divisible by 4": "Last two digits divisible by 4",
                    "Divisible by 5": "Last digit is 0 or 5",
                    "Divisible by 6": "Divisible by both 2 and 3",
                    "Divisible by 8": "Last three digits divisible by 8",
                    "Divisible by 9": "Sum of digits divisible by 9",
                    "Divisible by 10": "Last digit is 0",
                    "Divisible by 11": "Alternating sum of digits divisible by 11"
                },
                applications: [
                    "Quick prime testing",
                    "Mental math calculations",
                    "Factorization shortcuts",
                    "Checking arithmetic work"
                ]
            },

            sieve_of_eratosthenes: {
                title: "Sieve of Eratosthenes",
                concepts: [
                    "Algorithm to find all primes up to a given number",
                    "Ancient method (over 2000 years old)",
                    "Eliminates multiples of each prime",
                    "Very efficient for finding many primes"
                ],
                theory: "The Sieve systematically eliminates composite numbers, leaving only primes. It's based on the fact that all composites are multiples of smaller primes.",
                algorithm: [
                    "List all numbers from 2 to n",
                    "Start with 2 (first prime)",
                    "Mark all multiples of 2 (except 2) as composite",
                    "Find next unmarked number (next prime)",
                    "Mark all its multiples as composite",
                    "Repeat until reaching √n",
                    "All unmarked numbers are prime"
                ],
                complexity: "O(n log log n)",
                applications: [
                    "Generating prime lists",
                    "Prime counting functions",
                    "Number theory research",
                    "Cryptographic key generation"
                ]
            },

            primality_tests: {
                title: "Primality Testing",
                concepts: [
                    "Determining if a number is prime",
                    "Trial division (basic method)",
                    "Advanced algorithms for large numbers",
                    "Probabilistic vs deterministic tests"
                ],
                theory: "Primality testing asks: 'Is this number prime?' For small numbers, trial division works. For large numbers (hundreds of digits), advanced algorithms are needed.",
                methods: {
                    "Trial Division": "Test divisibility by all primes up to √n",
                    "Fermat Test": "Probabilistic test using Fermat's Little Theorem",
                    "Miller-Rabin": "Strong probabilistic primality test",
                    "AKS": "First deterministic polynomial-time algorithm",
                    "Lucas-Lehmer": "Specialized test for Mersenne primes"
                },
                trialDivisionSteps: [
                    "Check if n ≤ 1 (not prime)",
                    "Check if n = 2 (prime)",
                    "Check if n is even (not prime if > 2)",
                    "Test odd divisors from 3 to √n",
                    "If no divisor found, n is prime"
                ],
                applications: [
                    "RSA encryption (large prime generation)",
                    "Digital signatures",
                    "Hash functions",
                    "Random number generation",
                    "Theoretical mathematics"
                ]
            },

            gcf_using_primes: {
                title: "GCF Using Prime Factorization",
                concepts: [
                    "GCF is product of common prime factors",
                    "Take lowest power of each common prime",
                    "More systematic than listing factors",
                    "Works for multiple numbers"
                ],
                theory: "The GCF (Greatest Common Factor) can be found by factoring numbers into primes and taking the product of common factors with minimum exponents.",
                method: [
                    "Find prime factorization of each number",
                    "Identify common prime factors",
                    "For each common prime, take minimum exponent",
                    "Multiply these together"
                ],
                formula: "If a = p₁^a₁ × p₂^a₂... and b = p₁^b₁ × p₂^b₂..., then GCF = p₁^min(a₁,b₁) × p₂^min(a₂,b₂)...",
                applications: [
                    "Simplifying fractions",
                    "Solving ratio problems",
                    "Finding common denominators",
                    "Tiling and arrangement problems"
                ]
            },

            lcm_using_primes: {
                title: "LCM Using Prime Factorization",
                concepts: [
                    "LCM is product of all prime factors",
                    "Take highest power of each prime",
                    "More efficient than listing multiples",
                    "Related to GCF: LCM × GCF = product of numbers (for two numbers)"
                ],
                theory: "The LCM (Least Common Multiple) is found by taking all prime factors that appear in any factorization, using the highest power.",
                method: [
                    "Find prime factorization of each number",
                    "List all prime factors that appear",
                    "For each prime, take maximum exponent",
                    "Multiply these together"
                ],
                formula: "If a = p₁^a₁ × p₂^a₂... and b = p₁^b₁ × p₂^b₂..., then LCM = p₁^max(a₁,b₁) × p₂^max(a₂,b₂)...",
                relationship: "For two numbers: a × b = GCF(a,b) × LCM(a,b)",
                applications: [
                    "Finding common denominators",
                    "Scheduling problems (when events coincide)",
                    "Gear and pulley problems",
                    "Music (finding common beats)"
                ]
            },

            special_primes: {
                title: "Special Types of Primes",
                concepts: [
                    "Mersenne primes: 2^p - 1",
                    "Twin primes: differ by 2 (e.g., 11 and 13)",
                    "Sophie Germain primes: p and 2p+1 both prime",
                    "Palindromic primes: read same forwards and backwards",
                    "Fermat primes: 2^(2^n) + 1"
                ],
                theory: "Special classes of primes have unique properties and applications in mathematics and computer science.",
                examples: {
                    "Mersenne": "3, 7, 31, 127, 8191 (largest known primes are Mersenne)",
                    "Twin": "(3,5), (5,7), (11,13), (17,19), (29,31)",
                    "Sophie Germain": "2, 3, 5, 11, 23 (2p+1 is also prime)",
                    "Palindromic": "2, 3, 5, 7, 11, 101, 131, 151"
                },
                applications: [
                    "Perfect numbers (related to Mersenne primes)",
                    "Cryptography",
                    "Mathematical research",
                    "Computer testing and benchmarking"
                ]
            },

            perfect_numbers: {
                title: "Perfect Numbers and Primes",
                concepts: [
                    "Perfect number equals sum of its proper divisors",
                    "Related to Mersenne primes",
                    "Formula: 2^(p-1) × (2^p - 1) when 2^p - 1 is prime",
                    "Very rare (only 51 known)"
                ],
                theory: "Perfect numbers have fascinated mathematicians for millennia. Every even perfect number is related to a Mersenne prime.",
                formula: "If 2^p - 1 is prime, then 2^(p-1) × (2^p - 1) is perfect",
                examples: {
                    "6": "6 = 1 + 2 + 3",
                    "28": "28 = 1 + 2 + 4 + 7 + 14",
                    "496": "496 = 1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248"
                },
                openQuestions: [
                    "Are there any odd perfect numbers? (Unknown)",
                    "Are there infinitely many perfect numbers? (Unknown)",
                    "All known perfect numbers are even"
                ]
            },

            goldbach_conjecture: {
                title: "Goldbach's Conjecture",
                concepts: [
                    "Every even integer > 2 is sum of two primes",
                    "One of oldest unsolved problems",
                    "Verified for numbers up to 4 × 10^18",
                    "Weak Goldbach: every odd > 5 is sum of three primes (proved 2013)"
                ],
                theory: "Though unproven, Goldbach's Conjecture has been tested extensively and appears to be true.",
                examples: {
                    "4": "2 + 2",
                    "6": "3 + 3",
                    "8": "3 + 5",
                    "10": "3 + 7 = 5 + 5",
                    "100": "3 + 97 = 11 + 89 = 17 + 83 = 29 + 71 = 41 + 59 = 47 + 53"
                },
                significance: "Understanding this would reveal deep properties of prime distribution"
            }
        };
    }

    initializeHistoricalContext() {
        this.historicalContext = {
            ancient: {
                period: "Ancient Greece (300 BCE)",
                mathematicians: ["Euclid", "Eratosthenes"],
                contributions: [
                    "Euclid proved infinitely many primes",
                    "Sieve of Eratosthenes algorithm",
                    "Fundamental Theorem of Arithmetic",
                    "Perfect numbers studied"
                ],
                significance: "Established prime numbers as fundamental building blocks"
            },
            medieval: {
                period: "Medieval Period (500-1500 CE)",
                mathematicians: ["Islamic mathematicians", "European scholars"],
                contributions: [
                    "Preserved and extended Greek knowledge",
                    "Studied divisibility rules",
                    "Work on Mersenne numbers began"
                ]
            },
            renaissance: {
                period: "Renaissance (1500-1700)",
                mathematicians: ["Fermat", "Mersenne"],
                contributions: [
                    "Fermat's Little Theorem",
                    "Mersenne primes identified",
                    "Beginning of analytic number theory"
                ],
                significance: "Laid groundwork for modern number theory"
            },
            modern: {
                period: "18th-20th Century",
                mathematicians: ["Euler", "Gauss", "Riemann"],
                contributions: [
                    "Prime Number Theorem",
                    "Riemann Hypothesis formulated",
                    "Distribution of primes studied",
                    "Connection to complex analysis"
                ],
                significance: "Deep connections between primes and other mathematics revealed"
            },
            contemporary: {
                period: "1970s-Present",
                mathematicians: ["Rivest, Shamir, Adleman", "Many others"],
                contributions: [
                    "RSA encryption (1977)",
                    "AKS primality test (2002)",
                    "Great Internet Mersenne Prime Search (GIMPS)",
                    "Largest known primes discovered"
                ],
                significance: "Primes became crucial for internet security and cryptography",
                currentRecords: [
                    "Largest known prime: 2^82,589,933 - 1 (24,862,048 digits, 2018)",
                    "Verified by GIMPS distributed computing project"
                ]
            },
            funFacts: [
                "The word 'prime' comes from Latin 'primus' meaning 'first'",
                "Cicadas emerge in prime-number year cycles (13, 17 years)",
                "Every credit card transaction uses prime numbers",
                "Finding large primes can win prizes ($250,000 for 100 million digit prime)",
                "Your internet security depends on 600+ digit primes"
            ]
        };
    }

    initializePrimeAlgorithms() {
        this.algorithms = {
            trial_division: {
                name: "Trial Division",
                description: "Test divisibility by all primes up to √n",
                complexity: "O(√n)",
                bestFor: "Small to medium numbers (< 10^12)",
                pseudocode: `
function isPrime(n):
    if n ≤ 1: return false
    if n = 2: return true
    if n is even: return false
    for i from 3 to √n step 2:
        if n mod i = 0: return false
    return true`,
                advantages: [
                    "Simple to understand",
                    "Deterministic (always correct)",
                    "Finds factors if composite"
                ],
                disadvantages: [
                    "Slow for large numbers",
                    "Requires testing many divisors"
                ]
            },

            sieve_eratosthenes: {
                name: "Sieve of Eratosthenes",
                description: "Find all primes up to n by eliminating multiples",
                complexity: "O(n log log n)",
                bestFor: "Finding all primes up to n",
                pseudocode: `
function sieveOfEratosthenes(n):
    Create boolean array prime[0..n], set all to true
    prime[0] = prime[1] = false
    
    for p from 2 to √n:
        if prime[p]:
            for i from p² to n step p:
                prime[i] = false
    
    return all i where prime[i] is true`,
                advantages: [
                    "Very efficient for finding multiple primes",
                    "Simple algorithm",
                    "Good memory access patterns"
                ],
                disadvantages: [
                    "Requires O(n) memory",
                    "Not suitable for very large n",
                    "Only finds primes, doesn't test single number"
                ]
            },

            fermat_test: {
                name: "Fermat Primality Test",
                description: "Probabilistic test using Fermat's Little Theorem",
                complexity: "O(k log³ n) for k iterations",
                bestFor: "Quick probabilistic testing of large numbers",
                theory: "If p is prime, then a^(p-1) ≡ 1 (mod p) for all a not divisible by p",
                pseudocode: `
function fermatTest(n, k):
    if n ≤ 1: return false
    if n ≤ 3: return true
    
    repeat k times:
        a = random(2, n-1)
        if a^(n-1) mod n ≠ 1:
            return false  // definitely composite
    
    return true  // probably prime`,
                advantages: [
                    "Fast for large numbers",
                    "Easy to implement"
                ],
                disadvantages: [
                    "Probabilistic (can have false positives)",
                    "Carmichael numbers fool this test",
                    "Needs multiple iterations for confidence"
                ]
            },

            miller_rabin: {
                name: "Miller-Rabin Primality Test",
                description: "Strong probabilistic primality test",
                complexity: "O(k log³ n) for k iterations",
                bestFor: "Industry-standard probabilistic testing",
                theory: "Based on properties of strong pseudoprimes",
                advantages: [
                    "No known counterexamples (unlike Fermat)",
                    "Widely used in practice",
                    "Deterministic for n < 3,317,044,064,679,887,385,961,981 with proper witnesses"
                ],
                reliability: "k=20 iterations gives probability < 4^(-20) of error",
                usedIn: [
                    "RSA key generation",
                    "OpenSSL library",
                    "Most cryptographic applications"
                ]
            },

            aks: {
                name: "AKS Primality Test",
                description: "First deterministic polynomial-time primality test",
                complexity: "O(log^12 n) (improved versions faster)",
                bestFor: "Theoretical importance",
                discovered: "2002 by Agrawal, Kayal, and Saxena",
                significance: "Proved that primality testing is in P (polynomial time)",
                practical: "Slower than Miller-Rabin for practical use, but theoretically important",
                theorem: "Uses polynomial congruences to test primality"
            },

            factorization_methods: {
                trial_division: "Divide by primes up to √n",
                pollard_rho: "Probabilistic factorization algorithm",
                quadratic_sieve: "For numbers up to ~100 digits",
                general_number_field_sieve: "Most efficient for very large numbers (current record holder)",
                elliptic_curve: "Specialized for certain types of numbers"
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
                primeBg: '#e8f5e9',
                compositeBg: '#ffebee'
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
                primeBg: '#c8e6c9',
                compositeBg: '#ffcdd2'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeMathSymbols() {
        return {
            'times': '×',
            'divide': '÷',
            'leq': '≤',
            'geq': '≥',
            'neq': '≠',
            'approx': '≈',
            'infinity': '∞',
            'plusminus': '±',
            'sqrt': '√',
            'prime': '′',
            'product': '∏',
            'sum': '∑',
            'element': '∈',
            'notElement': '∉',
            'subset': '⊂',
            'superset': '⊃',
            'intersection': '∩',
            'union': '∪',
            'therefore': '∴',
            'because': '∵'
        };
    }

    initializePrimeSolvers() {
        this.primeTypes = {
            is_prime: {
                patterns: [
                    /is\s+(\d+)\s+prime/i,
                    /prime.*test.*(\d+)/i,
                    /(\d+).*prime/i,
                    /test.*primality.*(\d+)/i
                ],
                solver: this.testPrimality.bind(this),
                name: 'Primality Testing',
                category: 'prime_test',
                description: 'Determines if a number is prime'
            },

            prime_factorization: {
                patterns: [
                    /factor.*(\d+)/i,
                    /prime.*factor.*(\d+)/i,
                    /factorize.*(\d+)/i,
                    /factorization.*(\d+)/i
                ],
                solver: this.findPrimeFactorization.bind(this),
                name: 'Prime Factorization',
                category: 'factorization',
                description: 'Breaks number into prime factors'
            },

            find_primes: {
                patterns: [
                    /find.*primes.*up to.*(\d+)/i,
                    /list.*primes.*(\d+)/i,
                    /primes.*below.*(\d+)/i,
                    /all.*primes.*(\d+)/i
                ],
                solver: this.findPrimesUpTo.bind(this),
                name: 'Find All Primes',
                category: 'find_primes',
                description: 'Finds all primes up to n'
            },

            prime_range: {
                patterns: [
                    /primes.*between.*(\d+).*and.*(\d+)/i,
                    /primes.*from.*(\d+).*to.*(\d+)/i
                ],
                solver: this.findPrimesInRange.bind(this),
                name: 'Primes in Range',
                category: 'find_primes',
                description: 'Finds primes in a given range'
            },

            nth_prime: {
                patterns: [
                    /(\d+)(st|nd|rd|th).*prime/i,
                    /prime.*number.*(\d+)/i,
                    /find.*(\d+).*prime/i
                ],
                solver: this.findNthPrime.bind(this),
                name: 'Find Nth Prime',
                category: 'find_primes',
                description: 'Finds the nth prime number'
            },

            count_primes: {
                patterns: [
                    /how.*many.*primes.*(\d+)/i,
                    /count.*primes.*(\d+)/i,
                    /number.*primes.*(\d+)/i
                ],
                solver: this.countPrimes.bind(this),
                name: 'Count Primes',
                category: 'find_primes',
                description: 'Counts primes up to n'
            },

            gcf_primes: {
                patterns: [
                    /gcf.*using.*primes/i,
                    /gcd.*factor/i,
                    /greatest.*common.*factor/i
                ],
                solver: this.findGCFUsingPrimes.bind(this),
                name: 'GCF Using Primes',
                category: 'applications',
                description: 'Finds GCF using prime factorization'
            },

            lcm_primes: {
                patterns: [
                    /lcm.*using.*primes/i,
                    /least.*common.*multiple/i
                ],
                solver: this.findLCMUsingPrimes.bind(this),
                name: 'LCM Using Primes',
                category: 'applications',
                description: 'Finds LCM using prime factorization'
            },

            twin_primes: {
                patterns: [
                    /twin.*primes/i,
                    /prime.*pairs/i
                ],
                solver: this.findTwinPrimes.bind(this),
                name: 'Twin Primes',
                category: 'special_primes',
                description: 'Finds pairs of primes differing by 2'
            },

            mersenne_primes: {
                patterns: [
                    /mersenne.*primes/i,
                    /2\^.*-.*1/i
                ],
                solver: this.findMersennePrimes.bind(this),
                name: 'Mersenne Primes',
                category: 'special_primes',
                description: 'Finds primes of form 2^p - 1'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            prime_test: {
                'Testing divisibility': [
                    'Forgetting to test only up to √n',
                    'Testing even numbers after 2',
                    'Thinking 1 is prime',
                    'Missing that 2 is the only even prime'
                ],
                'Efficiency': [
                    'Testing all numbers instead of just primes',
                    'Not stopping at √n',
                    'Testing even divisors unnecessarily'
                ]
            },
            factorization: {
                'Factor tree': [
                    'Including 1 in factorization',
                    'Stopping before all factors are prime',
                    'Losing track of repeated factors',
                    'Not expressing in exponential form'
                ],
                'Division method': [
                    'Skipping primes',
                    'Not dividing repeatedly by same prime',
                    'Forgetting to record all instances',
                    'Arithmetic errors in division'
                ]
            },
            find_primes: {
                'Sieve implementation': [
                    'Not starting multiples at p²',
                    'Marking the prime itself as composite',
                    'Off-by-one errors in array',
                    'Inefficient iteration'
                ],
                'List generation': [
                    'Including 1 as prime',
                    'Missing 2',
                    'Including composite numbers'
                ]
            }
        };

        this.errorPrevention = {
            one_is_not_prime: {
                reminder: '1 is NOT prime - it has only one factor, not two',
                method: 'Always check n > 1 before testing'
            },
            two_is_special: {
                reminder: '2 is the ONLY even prime number',
                method: 'Handle 2 as special case first'
            },
            sqrt_limit: {
                reminder: 'Only need to test divisors up to √n',
                method: 'If d > √n and d divides n, then n/d < √n (already tested)'
            },
            unique_factorization: {
                reminder: 'Every number has exactly ONE prime factorization',
                method: 'Different methods must give same result'
            },
            systematic_approach: {
                reminder: 'Test primes in order: 2, 3, 5, 7, 11, ...',
                method: 'Don\'t skip primes or test out of order'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why primes are important and what they mean',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact steps to find factors or test primality',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Factor trees, number patterns, visual representations',
                language: 'visual and spatial metaphors'
            },
            algorithmic: {
                focus: 'Efficient algorithms and computational approaches',
                language: 'precise algorithmic terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'small numbers (under 100)'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'medium numbers (100-1000)'
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
                detail: 'comprehensive explanations with theory',
                examples: 'larger numbers and edge cases'
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
            cryptography: {
                scenario: "Internet Security with RSA Encryption",
                context: "Every secure website (https) uses prime numbers for encryption",
                explanation: "RSA encryption multiplies two large primes. It's easy to multiply but nearly impossible to factor the result",
                example: "If p = 61 and q = 53, then n = 3233. Finding p and q from n is the basis of security",
                significance: "Your credit card, passwords, and private data are protected by primes",
                numbers: "Real systems use 300+ digit primes"
            },
            cicadas: {
                scenario: "Cicada Life Cycles",
                context: "Some cicadas emerge every 13 or 17 years (prime numbers)",
                explanation: "Prime cycles minimize overlap with predators that have non-prime cycles",
                example: "A 13-year cicada and 5-year predator only meet every 65 years",
                significance: "Evolution 'discovered' prime numbers for survival",
                funFact: "13 and 17 year cicadas can't emerge together often: every 221 years"
            },
            music: {
                scenario: "Musical Rhythm and Harmony",
                context: "Prime numbers create interesting, non-repeating rhythms",
                explanation: "Prime-based time signatures create complex patterns",
                example: "A 7-beat pattern over a 4-beat won't repeat for 28 beats",
                significance: "Composers use primes for musical variety",
                composers: "Stravinsky, Bartók used prime-based rhythms"
            },
            hashing: {
                scenario: "Hash Tables in Computer Science",
                context: "Hash table sizes are often prime to reduce collisions",
                explanation: "Prime sizes distribute data more evenly",
                example: "A hash table of size 101 (prime) works better than size 100",
                significance: "Faster searching and data storage",
                usedIn: "Databases, compilers, password storage"
            },
            scheduling: {
                scenario: "Gear Ratios and Scheduling",
                context: "LCM tells when events coincide",
                explanation: "If events repeat every m and n days, they meet every LCM(m,n) days",
                example: "A 6-day schedule and 8-day schedule align every 24 days",
                application: "Gears, manufacturing, shift scheduling",
                primeConnection: "LCM calculated using prime factorization"
            },
            fractions: {
                scenario: "Simplifying Fractions",
                context: "GCF found using prime factorization simplifies fractions",
                explanation: "Divide numerator and denominator by GCF",
                example: "48/60: GCF(48,60) = 12, so 48/60 = 4/5",
                significance: "Essential for arithmetic and algebra",
                connection: "48 = 2⁴×3, 60 = 2²×3×5, GCF = 2²×3 = 12"
            },
            randomness: {
                scenario: "Random Number Generation",
                context: "Prime numbers used in pseudo-random generators",
                explanation: "Primes create long, non-repeating sequences",
                example: "Linear congruential generator uses prime modulus",
                significance: "Simulations, gaming, cryptography",
                quality: "Better primes give better randomness"
            },
            distribution: {
                scenario: "Load Balancing in Networks",
                context: "Distributing tasks across servers",
                explanation: "Prime-based hashing distributes load evenly",
                application: "Cloud computing, databases, web servers",
                benefit: "Prevents clustering and hot spots"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            prime_test: {
                skills: ['Division', 'Multiplication', 'Square roots', 'Factors'],
                priorKnowledge: ['What factors are', 'Division with remainders', 'Even and odd numbers'],
                checkQuestions: [
                    "What are the factors of 12?",
                    "What does it mean to divide evenly?",
                    "Is 15 divisible by 3?",
                    "What is √25?"
                ]
            },
            factorization: {
                skills: ['Prime testing', 'Division', 'Factor trees', 'Exponents'],
                priorKnowledge: ['Prime numbers', 'Factors', 'Division', 'Exponential notation'],
                checkQuestions: [
                    "Is 7 prime?",
                    "What are the prime numbers less than 20?",
                    "What does 2³ mean?",
                    "Divide 24 by 2, then divide result by 2"
                ]
            },
            find_primes: {
                skills: ['Prime testing', 'Systematic checking', 'Patterns'],
                priorKnowledge: ['Prime definition', 'Efficient testing', 'Lists and arrays'],
                checkQuestions: [
                    "How do you test if a number is prime?",
                    "What's the first prime number?",
                    "Is 2 prime?",
                    "Why is 1 not prime?"
                ]
            },
            sieve: {
                skills: ['Multiples', 'Systematic elimination', 'Arrays'],
                priorKnowledge: ['Multiples concept', 'Prime definition', 'Ordered lists'],
                checkQuestions: [
                    "What are the first 5 multiples of 3?",
                    "Is 15 a multiple of 3?",
                    "What's the smallest prime?"
                ]
            },
            gcf_lcm: {
                skills: ['Prime factorization', 'Comparing exponents', 'Factor analysis'],
                priorKnowledge: ['Prime factorization', 'Exponents', 'Minimum/maximum'],
                checkQuestions: [
                    "Factor 12 into primes",
                    "What's larger: 2³ or 2²?",
                    "What does GCF mean?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            factor_tree: {
                description: "Visual tree showing factorization",
                analogy: "Like a family tree, but breaking numbers into smaller parts",
                visualization: "Branch downward, splitting into factors until all are prime",
                suitableFor: ['factorization'],
                explanation: "Each branch splits a composite into two factors"
            },
            division_ladder: {
                description: "Vertical division by primes",
                analogy: "Like a ladder going down, dividing at each step",
                visualization: "Write prime divisor on left, quotient below",
                suitableFor: ['factorization'],
                explanation: "Divide by smallest prime repeatedly, move to next prime"
            },
            number_line: {
                description: "Primes marked on number line",
                analogy: "Like marking special houses on a street",
                visualization: "Number line with primes highlighted",
                suitableFor: ['find_primes', 'prime_test'],
                explanation: "Shows distribution and patterns of primes"
            },
            sieve_grid: {
                description: "Grid with multiples crossed out",
                analogy: "Like crossing names off a list",
                visualization: "Grid of numbers, cross out composites",
                suitableFor: ['find_primes', 'sieve'],
                explanation: "Systematically eliminate multiples of each prime"
            },
            venn_diagram: {
                description: "Factors shown in overlapping circles",
                analogy: "Like sorting items into groups",
                visualization: "Circles for each number's factors, overlap shows common factors",
                suitableFor: ['gcf_lcm'],
                explanation: "Intersection shows common factors (GCF)"
            },
            prime_spiral: {
                description: "Ulam spiral showing prime patterns",
                analogy: "Like a spiral staircase with primes marked",
                visualization: "Numbers in spiral, primes highlighted",
                suitableFor: ['find_primes', 'patterns'],
                explanation: "Reveals mysterious diagonal patterns in primes"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            prime_test_beginner: [
                {
                    problem: "Is 17 prime?",
                    solution: "Yes",
                    steps: [
                        "17 > 1 ✓",
                        "17 ≠ 2",
                        "17 is odd ✓",
                        "Test: √17 ≈ 4.1, so test divisors up to 4",
                        "17 ÷ 3 = 5.67... (not divisible)",
                        "No divisors found → 17 is prime"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Is 15 prime?",
                    solution: "No",
                    steps: [
                        "15 > 1 ✓",
                        "15 is odd ✓",
                        "Test: √15 ≈ 3.9",
                        "15 ÷ 3 = 5 ✓ (divides evenly)",
                        "Found divisor 3 → 15 is composite",
                        "15 = 3 × 5"
                    ],
                    difficulty: "easy"
                }
            ],
            prime_test_intermediate: [
                {
                    problem: "Is 91 prime?",
                    solution: "No (tricky!)",
                    steps: [
                        "91 is odd ✓",
                        "√91 ≈ 9.5, test up to 9",
                        "91 ÷ 3? No (sum of digits: 9+1=10, not divisible by 3)",
                        "91 ÷ 5? No (doesn't end in 0 or 5)",
                        "91 ÷ 7 = 13 ✓",
                        "91 = 7 × 13 (composite)"
                    ],
                    note: "91 looks prime but isn't - called a pseudoprime",
                    difficulty: "medium"
                }
            ],
            factorization_beginner: [
                {
                    problem: "Factor 12",
                    solution: "2² × 3",
                    method: "Factor tree",
                    steps: [
                        "12 = 4 × 3",
                        "4 = 2 × 2",
                        "3 is prime",
                        "Primes: 2, 2, 3",
                        "Answer: 2² × 3"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "Factor 30",
                    solution: "2 × 3 × 5",
                    method: "Division ladder",
                    steps: [
                        "30 ÷ 2 = 15",
                        "15 ÷ 3 = 5",
                        "5 is prime",
                        "Answer: 2 × 3 × 5"
                    ],
                    difficulty: "easy"
                }
            ],
            factorization_intermediate: [
                {
                    problem: "Factor 360",
                    solution: "2³ × 3² × 5",
                    steps: [
                        "360 ÷ 2 = 180",
                        "180 ÷ 2 = 90",
                        "90 ÷ 2 = 45",
                        "45 ÷ 3 = 15",
                        "15 ÷ 3 = 5",
                        "5 is prime",
                        "Primes: 2, 2, 2, 3, 3, 5",
                        "Answer: 2³ × 3² × 5"
                    ],
                    difficulty: "medium"
                }
            ],
            find_primes_beginner: [
                {
                    problem: "Find all primes up to 20",
                    solution: "2, 3, 5, 7, 11, 13, 17, 19",
                    method: "Test each number",
                    count: 8,
                    difficulty: "easy"
                }
            ],
            gcf_example: [
                {
                    problem: "GCF(24, 36) using primes",
                    solution: "12",
                    steps: [
                        "24 = 2³ × 3",
                        "36 = 2² × 3²",
                        "Common primes: 2 and 3",
                        "Take minimum powers:",
                        "  2: min(3,2) = 2",
                        "  3: min(1,2) = 1",
                        "GCF = 2² × 3 = 4 × 3 = 12"
                    ],
                    difficulty: "medium"
                }
            ],
            lcm_example: [
                {
                    problem: "LCM(12, 18) using primes",
                    solution: "36",
                    steps: [
                        "12 = 2² × 3",
                        "18 = 2 × 3²",
                        "All primes: 2 and 3",
                        "Take maximum powers:",
                        "  2: max(2,1) = 2",
                        "  3: max(1,2) = 2",
                        "LCM = 2² × 3² = 4 × 9 = 36"
                    ],
                    difficulty: "medium"
                }
            ]
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            one_is_prime: {
                misconception: "1 is a prime number",
                reality: "1 is NOT prime - it has only one factor (itself), not two",
                correctiveExample: "By definition, a prime must have exactly 2 distinct factors: 1 and itself. Since 1 only has one factor, it's not prime.",
                whyItMatters: "Including 1 as prime breaks the Fundamental Theorem (unique factorization)",
                commonIn: ['prime_test', 'find_primes']
            },
            two_not_prime: {
                misconception: "2 is not prime because it's even",
                reality: "2 IS prime - it's the ONLY even prime",
                correctiveExample: "2 has exactly two factors: 1 and 2. It fits the definition perfectly.",
                whyItMatters: "2 is crucial in factorization and shows primes aren't all odd",
                commonIn: ['prime_test', 'find_primes']
            },
            all_odds_prime: {
                misconception: "All odd numbers are prime",
                reality: "Many odd numbers are composite (9, 15, 21, 25, 27...)",
                correctiveExample: "9 = 3 × 3, so 9 is odd but composite",
                whyItMatters: "Need to actually test, not just check if odd",
                commonIn: ['prime_test']
            },
            divisibility_confusion: {
                misconception: "Must test all numbers up to n to see if n is prime",
                reality: "Only need to test up to √n",
                correctiveExample: "For 100: √100 = 10, so only test divisors up to 10, not all the way to 100",
                reasoning: "If d > √n divides n, then n/d < √n (we'd have found it already)",
                commonIn: ['prime_test']
            },
            factor_tree_wrong: {
                misconception: "Include 1 in prime factorization",
                reality: "1 is not included in prime factorization",
                correctiveExample: "12 = 2² × 3, NOT 12 = 1 × 2² × 3",
                whyItMatters: "Including 1 makes factorization non-unique",
                commonIn: ['factorization']
            },
            sieve_errors: {
                misconception: "Start crossing out multiples from the prime itself",
                reality: "Start from p² when crossing out multiples of prime p",
                correctiveExample: "For prime 7, start crossing at 49 (7²), not at 7 or 14",
                reasoning: "Smaller multiples already crossed out by smaller primes",
                commonIn: ['sieve', 'find_primes']
            },
            gcf_lcm_confusion: {
                misconception: "GCF uses maximum exponents, LCM uses minimum",
                reality: "It's the opposite! GCF uses minimum, LCM uses maximum",
                correctiveExample: "GCF takes common factors (minimum), LCM takes all factors (maximum)",
                mnemonicGCF: "GCF = Greatest Common = take what's common (minimum)",
                mnemonicLCM: "LCM = Least common Multiple = need all (maximum)",
                commonIn: ['gcf_lcm']
            },
            prime_formulas: {
                misconception: "There's a formula that generates all primes",
                reality: "No known formula generates all and only primes",
                explanation: "Many formulas generate some primes, but none generate all primes and nothing but primes",
                examples: "n² + n + 41 generates primes for n = 0 to 39, but not always",
                commonIn: ['find_primes']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            prime_numbers: {
                analogy: "Atoms of numbers",
                explanation: "Just as atoms are the basic building blocks of matter, primes are the building blocks of numbers",
                suitableFor: ['prime_test', 'factorization'],
                ELI5: "Primes are like LEGO blocks that can't be broken into smaller blocks. Other numbers are like things you build from these blocks."
            },
            factorization: {
                analogy: "Taking apart a LEGO creation",
                explanation: "Factorization is like taking apart something you built with LEGOs to see which basic blocks you used",
                suitableFor: ['factorization'],
                ELI5: "If you built a castle with LEGO, factorization is figuring out exactly which LEGO pieces you used to build it."
            },
            composite_numbers: {
                analogy: "Molecules made of atoms",
                explanation: "Composite numbers are like molecules - made by combining prime 'atoms'",
                suitableFor: ['prime_test', 'factorization'],
                ELI5: "Some numbers are special basic ones (primes), and other numbers are made by multiplying the basic ones together (composites)."
            },
            sieve: {
                analogy: "Crossing names off a guest list",
                explanation: "The Sieve is like having a list of numbers and crossing off all the ones that aren't prime",
                suitableFor: ['sieve', 'find_primes'],
                ELI5: "Imagine you have a list of all numbers. You cross out all the numbers that are in the '2 times table' (except 2), then the '3 times table' (except 3), and so on. What's left are the primes!"
            },
            gcf: {
                analogy: "Biggest LEGO piece that fits both models",
                explanation: "GCF is like finding the biggest LEGO piece you could use to build both structures",
                suitableFor: ['gcf_lcm'],
                ELI5: "If you and your friend both built things with LEGOs, the GCF is like the biggest LEGO piece you both used."
            },
            lcm: {
                analogy: "When two clocks chime together",
                explanation: "LCM is like finding when two clocks with different intervals chime at the same time",
                suitableFor: ['gcf_lcm'],
                ELI5: "If one clock beeps every 4 minutes and another every 6 minutes, they both beep together every 12 minutes (the LCM)."
            },
            unique_factorization: {
                analogy: "Unique DNA",
                explanation: "Every number has unique 'DNA' - its prime factorization",
                suitableFor: ['factorization'],
                ELI5: "Just like your DNA is special to you, every number has its own special combination of prime building blocks."
            },
            primality_test: {
                analogy: "Checking if an egg is fresh",
                explanation: "Testing for primes is like checking if an egg is good - you don't need to crack it fully open, just test it",
                suitableFor: ['prime_test'],
                ELI5: "To see if a number is prime, you don't need to find ALL its factors, just check if it has any besides 1 and itself."
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            prime_test: {
                level1: "What's the first thing to check about this number?",
                level2: "Is it greater than 1? Is it equal to 2? Is it even?",
                level3: "Test divisibility by odd numbers from 3 up to the square root",
                level4: "√{n} ≈ {sqrt}, so test divisors: {divisors}"
            },
            factorization: {
                level1: "What's the smallest prime number?",
                level2: "Can you divide {n} by 2? If yes, do it and continue with the result",
                level3: "Keep dividing by the same prime until you can't anymore, then try the next prime",
                level4: "Divide by primes in order: 2, 3, 5, 7, 11... until quotient is 1"
            },
            find_primes: {
                level1: "How do you test if each number is prime?",
                level2: "Start with 2 (first prime), then check each odd number",
                level3: "For each number, test if it's divisible by any smaller prime",
                level4: "Use the Sieve of Eratosthenes for efficiency"
            },
            sieve: {
                level1: "What's special about multiples of a prime?",
                level2: "All multiples of a prime (except the prime itself) are composite",
                level3: "Cross out multiples of each prime, starting from the prime squared",
                level4: "For prime p, cross out p², p²+p, p²+2p, p²+3p, ..."
            },
            gcf: {
                level1: "What do both numbers have in common?",
                level2: "Factor each number into primes first",
                level3: "Find which prime factors appear in both",
                level4: "Take each common prime to the minimum power"
            },
            lcm: {
                level1: "What do you need all of?",
                level2: "Factor each number into primes first",
                level3: "List all prime factors that appear in either number",
                level4: "Take each prime to the maximum power from either factorization"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Is 7 prime?",
                    answer: "Yes",
                    assesses: "basic_prime_test",
                    difficulty: "basic"
                },
                {
                    question: "Is 1 prime?",
                    answer: "No",
                    assesses: "understanding_prime_definition",
                    difficulty: "basic"
                },
                {
                    question: "Factor 12 into primes",
                    answer: "2² × 3",
                    assesses: "basic_factorization",
                    difficulty: "basic"
                },
                {
                    question: "Is 51 prime?",
                    answer: "No (51 = 3 × 17)",
                    assesses: "intermediate_prime_test",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "To test if 89 is prime, you need to test divisors up to:",
                    options: ["89", "44", "10", "9"],
                    correct: "10",
                    explanation: "√89 ≈ 9.4, so test up to 9 (or 10 to be safe)"
                },
                {
                    question: "Which is NOT a prime number?",
                    options: ["2", "9", "13", "17"],
                    correct: "9",
                    explanation: "9 = 3 × 3, so it's composite"
                },
                {
                    question: "The prime factorization of 24 is:",
                    options: ["2³ × 3", "2² × 6", "4 × 6", "2 × 12"],
                    correct: "2³ × 3",
                    explanation: "24 = 2 × 2 × 2 × 3 = 2³ × 3 (all factors must be prime)"
                },
                {
                    question: "Why is 2 the only even prime?",
                    options: [
                        "It's not, there are others",
                        "All other evens divisible by 2",
                        "2 is not prime",
                        "There are no even primes"
                    ],
                    correct: "All other evens divisible by 2",
                    explanation: "Any even number > 2 has 2 as a factor, so can't be prime"
                }
            ],
            summative: [
                {
                    question: "Find all prime factors of 420 and express in exponential form",
                    answer: "2² × 3 × 5 × 7",
                    showsWork: true,
                    rubric: {
                        correct_factorization: 3,
                        exponential_form: 1,
                        all_factors_prime: 1
                    }
                },
                {
                    question: "Use the Sieve of Eratosthenes to find all primes up to 50",
                    answer: "2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47",
                    showsWork: true,
                    rubric: {
                        correct_algorithm: 2,
                        all_primes_found: 2,
                        no_composites: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Is 11 prime?",
                    "Factor 8",
                    "Is 4 prime?",
                    "Factor 15"
                ],
                medium: [
                    "Is 91 prime?",
                    "Factor 144",
                    "Find primes between 20 and 30",
                    "Is 127 prime?"
                ],
                hard: [
                    "Is 1009 prime?",
                    "Factor 5040",
                    "Find the 25th prime number",
                    "How many primes less than 200?"
                ]
            },
            byObjective: {
                canTestPrimality: [
                    "Is 23 prime?",
                    "Is 39 prime?",
                    "Is 61 prime?",
                    "Is 87 prime?"
                ],
                canFactor: [
                    "Factor 18",
                    "Factor 56",
                    "Factor 100",
                    "Factor 225"
                ],
                canFindPrimes: [
                    "List primes up to 20",
                    "Find primes between 30 and 40",
                    "What's the 10th prime?",
                    "How many primes under 50?"
                ],
                canUseGCF: [
                    "Find GCF(18, 24)",
                    "Find GCF(36, 48, 60)",
                    "Simplify 24/36 using primes"
                ],
                canUseLCM: [
                    "Find LCM(6, 8)",
                    "Find LCM(12, 18, 24)",
                    "When do 4-day and 6-day cycles align?"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            prime_testing: {
                small_numbers: "Direct trial division up to √n",
                medium_numbers: "Trial division with optimizations (skip evens, use divisibility rules)",
                large_numbers: "Miller-Rabin or other probabilistic tests",
                very_large: "Specialized algorithms (AKS, Lucas-Lehmer for Mersenne)"
            },
            factorization: {
                small_numbers: "Factor tree or division by small primes",
                medium_numbers: "Systematic division by primes up to √n",
                large_numbers: "Pollard's rho, Quadratic Sieve",
                very_large: "General Number Field Sieve (hardest known problem)"
            },
            finding_primes: {
                single_range: "Sieve of Eratosthenes",
                large_range: "Segmented Sieve",
                nth_prime: "Estimate using Prime Number Theorem, then search",
                counting: "π(n) ≈ n/ln(n) for approximation, Legendre's formula for exact"
            },
            optimization_tips: {
                "Test only odd numbers": "After checking 2, all evens are composite",
                "Stop at √n": "If no divisor ≤ √n, number is prime",
                "Use divisibility rules": "Quick checks before division",
                "Sieve for multiple": "If finding many primes, use Sieve",
                "Cache small primes": "Keep list of small primes for trial division"
            },
            decisionTree: {
                "Need to test one number": "Trial division",
                "Need many primes": "Sieve of Eratosthenes",
                "Need to factor": "Trial division by primes",
                "Number very large": "Use specialized algorithms or software",
                "Need GCF/LCM": "Prime factorization method"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Prime or Not - 30 Second Sprint",
                    timeLimit: 30,
                    problems: [
                        "Is 13 prime?",
                        "Is 21 prime?",
                        "Is 29 prime?",
                        "Is 35 prime?",
                        "Is 41 prime?",
                        "Is 49 prime?"
                    ],
                    answers: ["Yes", "No", "Yes", "No", "Yes", "No"]
                },
                {
                    name: "Factor Fast",
                    timeLimit: 60,
                    problems: [
                        "Factor 14",
                        "Factor 20",
                        "Factor 28",
                        "Factor 45",
                        "Factor 63"
                    ],
                    answers: ["2×7", "2²×5", "2²×7", "3²×5", "3²×7"]
                }
            ],
            puzzles: [
                {
                    name: "Prime Gaps",
                    problem: "Find three consecutive odd numbers where the first and third are prime but the middle is not",
                    example: "17, 19, 21 (17 and 21... wait, 21 isn't prime!)",
                    solution: "3, 5, 7 or 5, 7, 9 or 11, 13, 15..."
                },
                {
                    name: "Twin Prime Hunt",
                    problem: "Find all twin prime pairs (primes differing by 2) up to 50",
                    solution: "(3,5), (5,7), (11,13), (17,19), (29,31), (41,43)"
                },
                {
                    name: "Goldbach Check",
                    problem: "Express 20 as the sum of two primes in all possible ways",
                    solution: "20 = 3+17 = 7+13 (only two ways)"
                },
                {
                    name: "Prime Factorization Race",
                    problem: "Who can factor 2310 fastest?",
                    solution: "2310 = 2 × 3 × 5 × 7 × 11 (product of first 5 primes!)",
                    funFact: "This is called a primorial"
                }
            ],
            applications: [
                {
                    scenario: "Cicada Emergence",
                    problem: "13-year and 17-year cicadas last emerged together in 2023. When will they next emerge together?",
                    solution: "LCM(13,17) = 221, so year 2023 + 221 = 2244",
                    concept: "LCM using coprime numbers"
                },
                {
                    scenario: "Gift Box Arrangement",
                    problem: "You have 48 chocolates and 60 candies. What's the largest box that can hold rows of both with none left over?",
                    solution: "GCF(48,60) = 12. Use 12×12 box with 4 rows of 12 chocolates and 5 rows of 12 candies",
                    concept: "GCF application"
                },
                {
                    scenario: "Gear Teeth",
                    problem: "Two gears with 15 and 25 teeth mesh together. After how many rotations of the small gear will both return to start position?",
                    solution: "LCM(15,25) = 75. Small gear makes 5 rotations, large makes 3",
                    concept: "LCM for repeating cycles"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Testing if 51 is prime:",
                        "51 is odd ✓",
                        "√51 ≈ 7.1",
                        "51 ÷ 3 = 17 remainder 0",
                        "51 ÷ 5 = 10.2 (not divisible)",
                        "51 ÷ 7 = 7.28... (not divisible)",
                        "No divisors found, 51 is prime ✓"
                    ],
                    error: "51 ÷ 3 = 17 with NO remainder! 51 = 3 × 17, so 51 is composite",
                    lesson: "51 ÷ 3 = 17 exactly means 3 IS a divisor"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Factor 24:",
                        "24 = 1 × 24",
                        "24 = 2 × 12",
                        "24 = 4 × 6",
                        "Prime factorization: 1 × 4 × 6"
                    ],
                    errors: [
                        "1 is not included in prime factorization",
                        "4 and 6 are not prime",
                        "Must factor until all factors are prime"
                    ],
                    correct: "24 = 2 × 2 × 2 × 3 = 2³ × 3"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Find GCF(12, 18):",
                        "12 = 2² × 3",
                        "18 = 2 × 3²",
                        "Take maximum powers:",
                        "GCF = 2² × 3² = 36"
                    ],
                    error: "Used MAXIMUM powers instead of MINIMUM",
                    correct: "GCF = 2¹ × 3¹ = 6 (take minimums)",
                    note: "LCM uses maximums; GCF uses minimums"
                }
            ],
            investigations: [
                {
                    name: "Prime Patterns",
                    question: "Do primes follow any patterns?",
                    activities: [
                        "List primes up to 100",
                        "Look at their last digits",
                        "Notice gaps between primes",
                        "Try prime spirals",
                        "Investigate twin primes"
                    ],
                    discoveries: "Primes (except 2 and 5) end in 1, 3, 7, or 9"
                },
                {
                    name: "Mersenne Exploration",
                    question: "Are all numbers of form 2^p - 1 prime when p is prime?",
                    investigate: [
                        "p=2: 2²-1 = 3 (prime)",
                        "p=3: 2³-1 = 7 (prime)",
                        "p=5: 2⁵-1 = 31 (prime)",
                        "p=7: 2⁷-1 = 127 (prime)",
                        "p=11: 2¹¹-1 = 2047 = 23×89 (composite!)"
                    ],
                    conclusion: "Not all, but these special primes are called Mersenne primes"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solvePrimeProblem(config) {
        const { number, query, problemType, parameters, context } = config;

        try {
            this.currentProblem = this.parsePrimeProblem(number, query, problemType, parameters, context);
            this.currentSolution = this.solvePrimeProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generatePrimeSteps(this.currentProblem, this.currentSolution);
            this.generatePrimeGraphData();
            this.generatePrimeWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                result: this.currentSolution?.result,
                isPrime: this.currentSolution?.isPrime,
                factors: this.currentSolution?.factors,
                primes: this.currentSolution?.primes
            };

        } catch (error) {
            throw new Error(`Failed to solve prime problem: ${error.message}`);
        }
    }

    parsePrimeProblem(number, query = '', problemType = null, parameters = {}, context = {}) {
        const cleanQuery = query ? query.toLowerCase().trim() : '';

        if (problemType && this.primeTypes[problemType]) {
            return {
                originalInput: query || `${problemType} problem`,
                number: number,
                type: problemType,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect problem type
        for (const [type, config] of Object.entries(this.primeTypes)) {
            for (const pattern of config.patterns) {
                const match = cleanQuery.match(pattern);
                if (match) {
                    const extractedNumber = match[1] ? parseInt(match[1]) : number;
                    const secondNumber = match[2] ? parseInt(match[2]) : null;

                    return {
                        originalInput: query,
                        number: extractedNumber,
                        secondNumber: secondNumber,
                        type: type,
                        parameters: { ...parameters },
                        context: { ...context },
                        match: match,
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default to primality test if just given a number
        if (number) {
            return {
                originalInput: query || `Test if ${number} is prime`,
                number: number,
                type: 'is_prime',
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize prime problem type from: ${query || number}`);
    }

    solvePrimeProblem_Internal(problem) {
        const solver = this.primeTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for prime problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // PRIME SOLVERS

    testPrimality(problem) {
        const n = problem.number;

        if (n < 2) {
            return {
                number: n,
                isPrime: false,
                reason: n === 1 ? '1 has only one factor, needs exactly two' : 'Numbers less than 2 are not prime',
                type: 'Primality Test',
                category: 'prime_test'
            };
        }

        if (n === 2) {
            return {
                number: 2,
                isPrime: true,
                reason: '2 is the only even prime number',
                factors: [1, 2],
                type: 'Primality Test',
                category: 'prime_test'
            };
        }

        if (n % 2 === 0) {
            return {
                number: n,
                isPrime: false,
                reason: 'Even numbers greater than 2 are divisible by 2',
                factors: [1, 2, n/2, n],
                divisor: 2,
                type: 'Primality Test',
                category: 'prime_test'
            };
        }

        const limit = Math.floor(Math.sqrt(n));
        const divisors = [];

        for (let i = 3; i <= limit; i += 2) {
            if (n % i === 0) {
                return {
                    number: n,
                    isPrime: false,
                    reason: `Divisible by ${i}`,
                    divisor: i,
                    quotient: n / i,
                    factorization: `${n} = ${i} × ${n/i}`,
                    testedUpTo: i,
                    type: 'Primality Test',
                    category: 'prime_test'
                };
            }
            divisors.push(i);
        }

        return {
            number: n,
            isPrime: true,
            reason: `No divisors found up to √${n} ≈ ${Math.sqrt(n).toFixed(2)}`,
            testedDivisors: divisors,
            testedUpTo: limit,
            factors: [1, n],
            type: 'Primality Test',
            category: 'prime_test'
        };
    }

    findPrimeFactorization(problem) {
        const n = problem.number;

        if (n < 2) {
            return {
                number: n,
                factors: [],
                error: 'Cannot factor numbers less than 2',
                type: 'Prime Factorization',
                category: 'factorization'
            };
        }

        const factors = [];
        let remaining = n;
        let divisor = 2;

        while (remaining > 1) {
            while (remaining % divisor === 0) {
                factors.push(divisor);
                remaining = remaining / divisor;
            }
            divisor = divisor === 2 ? 3 : divisor + 2;

            if (divisor * divisor > remaining && remaining > 1) {
                factors.push(remaining);
                break;
            }
        }

        // Count occurrences for exponential form
        const factorCounts = {};
        factors.forEach(f => {
            factorCounts[f] = (factorCounts[f] || 0) + 1;
        });

        // Create exponential notation
        const exponentialForm = Object.entries(factorCounts)
            .map(([prime, count]) => count === 1 ? prime : `${prime}^${count}`)
            .join(' × ');

        return {
            number: n,
            factors: factors,
            uniqueFactors: [...new Set(factors)],
            factorCounts: factorCounts,
            exponentialForm: exponentialForm,
            verification: factors.reduce((a, b) => a * b, 1) === n,
            type: 'Prime Factorization',
            category: 'factorization'
        };
    }

    findPrimesUpTo(problem) {
        const n = problem.number;

        if (n < 2) {
            return {
                limit: n,
                primes: [],
                count: 0,
                type: 'Find Primes',
                category: 'find_primes'
            };
        }

        // Sieve of Eratosthenes
        const isPrime = new Array(n + 1).fill(true);
        isPrime[0] = isPrime[1] = false;

        for (let i = 2; i * i <= n; i++) {
            if (isPrime[i]) {
                for (let j = i * i; j <= n; j += i) {
                    isPrime[j] = false;
                }
            }
        }

        const primes = [];
        for (let i = 2; i <= n; i++) {
            if (isPrime[i]) {
                primes.push(i);
            }
        }

        return {
            limit: n,
            primes: primes,
            count: primes.length,
            density: (primes.length / n * 100).toFixed(2) + '%',
            estimate: Math.round(n / Math.log(n)),
            actual: primes.length,
            type: 'Find Primes',
            method: 'Sieve of Eratosthenes',
            category: 'find_primes'
        };
    }

    findPrimesInRange(problem) {
        const start = Math.max(2, problem.number);
        const end = problem.secondNumber;

        if (start > end) {
            return {
                start: start,
                end: end,
                primes: [],
                count: 0,
                error: 'Start must be less than or equal to end',
                type: 'Primes in Range',
                category: 'find_primes'
            };
        }

        const primes = [];
        for (let i = start; i <= end; i++) {
            const test = this.testPrimality({ number: i });
            if (test.isPrime) {
                primes.push(i);
            }
        }

        return {
            start: start,
            end: end,
            primes: primes,
            count: primes.length,
            type: 'Primes in Range',
            category: 'find_primes'
        };
    }

    findNthPrime(problem) {
        const n = problem.number;

        if (n < 1) {
            return {
                n: n,
                error: 'n must be at least 1',
                type: 'Find Nth Prime',
                category: 'find_primes'
            };
        }

        let count = 0;
        let candidate = 2;

        while (count < n) {
            const test = this.testPrimality({ number: candidate });
            if (test.isPrime) {
                count++;
                if (count === n) {
                    return {
                        n: n,
                        nthPrime: candidate,
                        type: 'Find Nth Prime',
                        category: 'find_primes'
                    };
                }
            }
            candidate = candidate === 2 ? 3 : candidate + 2;
        }
    }

    countPrimes(problem) {
        const result = this.findPrimesUpTo(problem);
        return {
            limit: result.limit,
            count: result.count,
            primes: result.primes,
            type: 'Count Primes',
            category: 'find_primes'
        };
    }

    findGCFUsingPrimes(problem) {
        const numbers = problem.parameters.numbers || [problem.number, problem.secondNumber];

        if (!numbers || numbers.length < 2) {
            return {
                error: 'Need at least two numbers for GCF',
                type: 'GCF Using Primes',
                category: 'applications'
            };
        }

        // Factor each number
        const factorizations = numbers.map(n => this.findPrimeFactorization({ number: n }));

        // Find common primes with minimum exponents
        const allPrimes = new Set();
        factorizations.forEach(f => {
            Object.keys(f.factorCounts).forEach(p => allPrimes.add(parseInt(p)));
        });

        let gcf = 1;
        const gcfFactors = {};

        allPrimes.forEach(prime => {
            const counts = factorizations.map(f => f.factorCounts[prime] || 0);
            const minCount = Math.min(...counts);
            if (minCount > 0) {
                gcfFactors[prime] = minCount;
                gcf *= Math.pow(prime, minCount);
            }
        });

        const exponentialForm = Object.entries(gcfFactors)
            .map(([prime, count]) => count === 1 ? prime : `${prime}^${count}`)
            .join(' × ') || '1';

        return {
            numbers: numbers,
            factorizations: factorizations,
            gcf: gcf,
            gcfFactors: gcfFactors,
            exponentialForm: exponentialForm,
            type: 'GCF Using Primes',
            category: 'applications'
        };
    }

    findLCMUsingPrimes(problem) {
        const numbers = problem.parameters.numbers || [problem.number, problem.secondNumber];

        if (!numbers || numbers.length < 2) {
            return {
                error: 'Need at least two numbers for LCM',
                type: 'LCM Using Primes',
                category: 'applications'
            };
        }

        // Factor each number
        const factorizations = numbers.map(n => this.findPrimeFactorization({ number: n }));

        // Find all primes with maximum exponents
        const allPrimes = new Set();
        factorizations.forEach(f => {
            Object.keys(f.factorCounts).forEach(p => allPrimes.add(parseInt(p)));
        });

        let lcm = 1;
        const lcmFactors = {};

        allPrimes.forEach(prime => {
            const counts = factorizations.map(f => f.factorCounts[prime] || 0);
            const maxCount = Math.max(...counts);
            lcmFactors[prime] = maxCount;
            lcm *= Math.pow(prime, maxCount);
        });

        const exponentialForm = Object.entries(lcmFactors)
            .map(([prime, count]) => count === 1 ? prime : `${prime}^${count}`)
            .join(' × ');

        // Verify relationship: LCM × GCF = product (for two numbers)
        let relationship = null;
        if (numbers.length === 2) {
            const gcfResult = this.findGCFUsingPrimes(problem);
            const product = numbers[0] * numbers[1];
            relationship = {
                formula: 'LCM × GCF = a × b',
                calculation: `${lcm} × ${gcfResult.gcf} = ${numbers[0]} × ${numbers[1]}`,
                leftSide: lcm * gcfResult.gcf,
                rightSide: product,
                verified: lcm * gcfResult.gcf === product
            };
        }

        return {
            numbers: numbers,
            factorizations: factorizations,
            lcm: lcm,
            lcmFactors: lcmFactors,
            exponentialForm: exponentialForm,
            relationship: relationship,
            type: 'LCM Using Primes',
            category: 'applications'
        };
    }

    findTwinPrimes(problem) {
        const limit = problem.number || 100;
        const allPrimes = this.findPrimesUpTo({ number: limit }).primes;

        const twinPairs = [];
        for (let i = 0; i < allPrimes.length - 1; i++) {
            if (allPrimes[i + 1] - allPrimes[i] === 2) {
                twinPairs.push([allPrimes[i], allPrimes[i + 1]]);
            }
        }

        return {
            limit: limit,
            twinPairs: twinPairs,
            count: twinPairs.length,
            definition: 'Twin primes are pairs of primes that differ by 2',
            conjecture: 'Twin Prime Conjecture: There are infinitely many twin primes (unproven)',
            type: 'Twin Primes',
            category: 'special_primes'
        };
    }

    findMersennePrimes(problem) {
        const maxP = problem.number || 20;
        const mersennePrimes = [];

        // Find prime exponents up to maxP
        const primeExponents = this.findPrimesUpTo({ number: maxP }).primes;

        primeExponents.forEach(p => {
            const mersenne = Math.pow(2, p) - 1;

            // Only test if result is reasonable size
            if (mersenne < 1000000) {
                const test = this.testPrimality({ number: mersenne });
                if (test.isPrime) {
                    mersennePrimes.push({
                        exponent: p,
                        value: mersenne,
                        formula: `2^${p} - 1`
                    });
                }
            }
        });

        return {
            maxExponent: maxP,
            mersennePrimes: mersennePrimes,
            count: mersennePrimes.length,
            definition: 'Mersenne primes have form 2^p - 1 where p is prime',
            note: 'Not all 2^p - 1 are prime when p is prime',
            largestKnown: '2^82,589,933 - 1 (discovered 2018, 24,862,048 digits)',
            type: 'Mersenne Primes',
            category: 'special_primes'
        };
    }

    // STEP GENERATION

    generatePrimeSteps(problem, solution) {
        let baseSteps = this.generateBasePrimeSteps(problem, solution);

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

    generateBasePrimeSteps(problem, solution) {
        const category = this.primeTypes[problem.type]?.category;

        switch(category) {
            case 'prime_test':
                return this.generatePrimalityTestSteps(problem, solution);
            case 'factorization':
                return this.generateFactorizationSteps(problem, solution);
            case 'find_primes':
                return this.generateFindPrimesSteps(problem, solution);
            case 'applications':
                return this.generateApplicationSteps(problem, solution);
            case 'special_primes':
                return this.generateSpecialPrimesSteps(problem, solution);
            default:
                return this.generateGenericPrimeSteps(problem, solution);
        }
    }

    generatePrimalityTestSteps(problem, solution) {
        const steps = [];
        const n = problem.number;

        // Step 1: Initial checks
        steps.push({
            stepNumber: 1,
            step: 'Initial checks',
            description: 'Check basic conditions for primality',
            checks: [
                { condition: `n = ${n}`, status: true },
                { condition: `n > 1?`, status: n > 1, result: n > 1 },
                { condition: `n = 2?`, status: n === 2, result: n === 2 }
            ],
            reasoning: 'Numbers ≤ 1 are not prime, 2 is the only even prime',
            goalStatement: 'Determine if we can quickly classify this number'
        });

        if (n < 2) {
            steps.push({
                stepNumber: 2,
                step: 'Conclusion',
                description: `${n} is not prime`,
                expression: solution.reason,
                finalAnswer: true,
                reasoning: 'Does not meet basic requirements for primality'
            });
            return steps;
        }

        if (n === 2) {
            steps.push({
                stepNumber: 2,
                step: 'Conclusion',
                description: '2 is prime',
                expression: '2 is the only even prime number',
                finalAnswer: true,
                reasoning: 'Special case: the smallest and only even prime'
            });
            return steps;
        }

        // Step 2: Check if even
        steps.push({
            stepNumber: 2,
            step: 'Check if even',
            description: `Is ${n} divisible by 2?`,
            test: `${n} mod 2 = ${n % 2}`,
            result: n % 2 === 0 ? 'Even - not prime' : 'Odd - continue testing',
            reasoning: 'All even numbers > 2 have 2 as a factor',
            algebraicRule: 'If n > 2 and n ≡ 0 (mod 2), then n is composite'
        });

        if (n % 2 === 0) {
            steps.push({
                stepNumber: 3,
                step: 'Conclusion',
                description: `${n} is not prime`,
                expression: `${n} = 2 × ${n/2}`,
                divisor: 2,
                finalAnswer: true,
                reasoning: 'Found divisor 2'
            });
            return steps;
        }

        // Step 3: Determine test range
        const sqrtN = Math.sqrt(n);
        const limit = Math.floor(sqrtN);
        steps.push({
            stepNumber: 3,
            step: 'Determine test range',
            description: 'Find upper limit for divisors to test',
            calculation: `√${n} ≈ ${sqrtN.toFixed(2)}`,
            limit: limit,
            reasoning: 'Only need to test divisors up to √n',
            explanation: 'If d > √n divides n, then n/d < √n (would have found it already)',
            algebraicRule: 'For any divisor d > √n, there exists d\' = n/d where d\' < √n'
        });

        // Step 4: Test odd divisors
        const divisorsToTest = [];
        for (let i = 3; i <= limit; i += 2) {
            divisorsToTest.push(i);
        }

        steps.push({
            stepNumber: 4,
            step: 'Test odd divisors',
            description: `Test divisibility by odd numbers from 3 to ${limit}`,
            divisorsToTest: divisorsToTest,
            reasoning: 'We only test odd numbers (even numbers already ruled out)',
            strategy: 'Test each odd divisor in sequence'
        });

        // Step 5: Division tests
        if (solution.isPrime) {
            const testResults = [];
            for (let i = 3; i <= limit; i += 2) {
                testResults.push({
                    divisor: i,
                    test: `${n} ÷ ${i} = ${(n/i).toFixed(2)}`,
                    remainder: n % i,
                    divisible: false
                });
            }

            steps.push({
                stepNumber: 5,
                step: 'Perform division tests',
                description: 'Test each odd divisor',
                tests: testResults,
                result: 'No divisors found',
                reasoning: 'None of the tested divisors divide n evenly'
            });

            steps.push({
                stepNumber: 6,
                step: 'Conclusion',
                description: `${n} is prime`,
                expression: `No divisors found between 2 and ${limit}`,
                finalAnswer: true,
                reasoning: 'No factors other than 1 and itself',
                factors: [1, n]
            });
        } else {
            const divisor = solution.divisor;
            const quotient = solution.quotient;

            // Show tests up to finding divisor
            const testResults = [];
            for (let i = 3; i < divisor; i += 2) {
                testResults.push({
                    divisor: i,
                    test: `${n} ÷ ${i}`,
                    divisible: false
                });
            }
            testResults.push({
                divisor: divisor,
                test: `${n} ÷ ${divisor} = ${quotient}`,
                remainder: 0,
                divisible: true,
                highlight: true
            });

            steps.push({
                stepNumber: 5,
                step: 'Perform division tests',
                description: 'Test each odd divisor until finding a factor',
                tests: testResults,
                result: `Found divisor: ${divisor}`,
                reasoning: `${divisor} divides ${n} evenly`
            });

            steps.push({
                stepNumber: 6,
                step: 'Conclusion',
                description: `${n} is composite`,
                expression: `${n} = ${divisor} × ${quotient}`,
                factorization: solution.factorization,
                divisor: divisor,
                quotient: quotient,
                finalAnswer: true,
                reasoning: `Found divisor ${divisor}, so ${n} is not prime`
            });
        }

        return steps;
    }

    generateFactorizationSteps(problem, solution) {
        const steps = [];
        const n = problem.number;

        // Step 1: Start
        steps.push({
            stepNumber: 1,
            step: 'Begin factorization',
            description: `Factor ${n} into prime factors`,
            number: n,
            reasoning: 'Break down the number systematically using division by primes',
            goalStatement: 'Find all prime factors'
        });

        if (n < 2) {
            steps.push({
                stepNumber: 2,
                step: 'Error',
                description: 'Cannot factor numbers less than 2',
                finalAnswer: true
            });
            return steps;
        }

        // Step 2: Division by 2
        let remaining = n;
        let stepNum = 2;
        const factorSteps = [];
        let divisor = 2;

        while (remaining % 2 === 0) {
            factorSteps.push({
                divisor: 2,
                before: remaining,
                operation: `${remaining} ÷ 2 = ${remaining / 2}`,
                after: remaining / 2
            });
            remaining = remaining / 2;
        }

        if (factorSteps.length > 0) {
            steps.push({
                stepNumber: stepNum++,
                step: 'Divide by 2',
                description: 'Remove all factors of 2',
                divisions: factorSteps,
                factorsFound: Array(factorSteps.length).fill(2),
                remaining: remaining,
                reasoning: '2 is the smallest prime, so we test it first',
                algebraicRule: 'Divide repeatedly until no longer divisible'
            });
        }

        // Step 3+: Division by odd primes
        divisor = 3;
        while (remaining > 1) {
            const oddSteps = [];
            
            while (remaining % divisor === 0) {
                oddSteps.push({
                    divisor: divisor,
                    before: remaining,
                    operation: `${remaining} ÷ ${divisor} = ${remaining / divisor}`,
                    after: remaining / divisor
                });
                remaining = remaining / divisor;
            }

            if (oddSteps.length > 0) {
                steps.push({
                    stepNumber: stepNum++,
                    step: `Divide by ${divisor}`,
                    description: `Remove all factors of ${divisor}`,
                    divisions: oddSteps,
                    factorsFound: Array(oddSteps.length).fill(divisor),
                    remaining: remaining,
                    reasoning: `Continue with next odd number (${divisor})`
                });
            }

            divisor += 2;

            // If divisor squared is greater than remaining, remaining is prime
            if (divisor * divisor > remaining && remaining > 1) {
                steps.push({
                    stepNumber: stepNum++,
                    step: 'Final prime factor',
                    description: `${remaining} is prime`,
                    expression: `${divisor}² = ${divisor * divisor} > ${remaining}`,
                    reasoning: 'Remaining number is prime (no divisors up to its square root)',
                    factorFound: remaining
                });
                break;
            }
        }

        // Final step: List all factors
        steps.push({
            stepNumber: stepNum++,
            step: 'Prime factorization complete',
            description: 'List all prime factors',
            allFactors: solution.factors,
            uniqueFactors: solution.uniqueFactors,
            factorCounts: solution.factorCounts,
            exponentialForm: solution.exponentialForm,
            verification: `Product: ${solution.factors.join(' × ')} = ${n}`,
            finalAnswer: true,
            reasoning: 'These are all the prime building blocks of the original number'
        });

        return steps;
    }

    generateFindPrimesSteps(problem, solution) {
        const steps = [];
        const n = problem.number;

        if (problem.type === 'find_primes' || problem.type === 'count_primes') {
            // Sieve of Eratosthenes steps
            steps.push({
                stepNumber: 1,
                step: 'Initialize',
                description: `Create list of numbers from 2 to ${n}`,
                reasoning: 'Start with all candidates',
                method: 'Sieve of Eratosthenes',
                goalStatement: 'Eliminate all composite numbers to find primes'
            });

            steps.push({
                stepNumber: 2,
                step: 'Mark 2 as prime',
                description: 'First prime number is 2',
                action: 'Cross out all multiples of 2 (except 2 itself)',
                reasoning: 'All multiples of 2 are even, hence composite',
                multiplesEliminated: Math.floor(n / 2) - 1
            });

            const primesSieved = [2];
            let stepNum = 3;
            const limit = Math.floor(Math.sqrt(n));

            for (let p = 3; p <= limit; p += 2) {
                // Check if p is still unmarked (prime)
                const isPrime = this.testPrimality({ number: p }).isPrime;
                
                if (isPrime) {
                    primesSieved.push(p);
                    const multiplesStart = p * p;
                    const multiplesCount = Math.floor((n - multiplesStart) / p) + 1;

                    steps.push({
                        stepNumber: stepNum++,
                        step: `Process prime ${p}`,
                        description: `Mark multiples of ${p}`,
                        prime: p,
                        startAt: multiplesStart,
                        action: `Cross out ${multiplesStart}, ${multiplesStart + p}, ${multiplesStart + 2*p}, ...`,
                        reasoning: `Start at ${p}² because smaller multiples already marked by smaller primes`,
                        multiplesEliminated: multiplesCount
                    });
                }
            }

            steps.push({
                stepNumber: stepNum++,
                step: 'Collect remaining numbers',
                description: 'All unmarked numbers are prime',
                primes: solution.primes,
                count: solution.count,
                finalAnswer: true,
                reasoning: 'Survived all elimination rounds',
                efficiency: `Tested up to √${n} ≈ ${Math.sqrt(n).toFixed(2)}`
            });

        } else if (problem.type === 'nth_prime') {
            steps.push({
                stepNumber: 1,
                step: 'Find nth prime',
                description: `Find the ${problem.number}${this.getOrdinalSuffix(problem.number)} prime number`,
                method: 'Sequential testing',
                goalStatement: `Count primes until reaching the ${problem.number}${this.getOrdinalSuffix(problem.number)} one`
            });

            steps.push({
                stepNumber: 2,
                step: 'Test candidates',
                description: 'Test each number for primality and count',
                reasoning: 'Keep testing until we find enough primes',
                result: `The ${problem.number}${this.getOrdinalSuffix(problem.number)} prime is ${solution.nthPrime}`,
                finalAnswer: true
            });
        }

        return steps;
    }

    generateApplicationSteps(problem, solution) {
        const steps = [];

        if (problem.type === 'gcf_primes') {
            const numbers = solution.numbers;

            steps.push({
                stepNumber: 1,
                step: 'Factor each number',
                description: 'Find prime factorization of each number',
                numbers: numbers,
                reasoning: 'GCF is found by comparing prime factorizations'
            });

            solution.factorizations.forEach((fact, index) => {
                steps.push({
                    stepNumber: index + 2,
                    step: `Factor ${numbers[index]}`,
                    number: numbers[index],
                    factorization: fact.exponentialForm,
                    factors: fact.factorCounts
                });
            });

            const stepNum = solution.factorizations.length + 2;

            steps.push({
                stepNumber: stepNum,
                step: 'Identify common primes',
                description: 'Find primes that appear in ALL factorizations',
                commonPrimes: Object.keys(solution.gcfFactors),
                reasoning: 'GCF only includes factors common to all numbers'
            });

            steps.push({
                stepNumber: stepNum + 1,
                step: 'Take minimum exponents',
                description: 'For each common prime, use smallest exponent',
                process: Object.entries(solution.gcfFactors).map(([prime, exp]) => {
                    const exponents = solution.factorizations.map(f => f.factorCounts[prime] || 0);
                    return {
                        prime: prime,
                        exponents: exponents,
                        minimum: exp
                    };
                }),
                reasoning: 'GCF cannot have more of a factor than the smallest count',
                rule: 'GCF uses MINIMUM exponents'
            });

            steps.push({
                stepNumber: stepNum + 2,
                step: 'Calculate GCF',
                description: 'Multiply the common prime factors',
                calculation: solution.exponentialForm,
                result: solution.gcf,
                finalAnswer: true,
                reasoning: 'This is the greatest factor common to all numbers'
            });

        } else if (problem.type === 'lcm_primes') {
            const numbers = solution.numbers;

            steps.push({
                stepNumber: 1,
                step: 'Factor each number',
                description: 'Find prime factorization of each number',
                numbers: numbers,
                reasoning: 'LCM is found by comparing prime factorizations'
            });

            solution.factorizations.forEach((fact, index) => {
                steps.push({
                    stepNumber: index + 2,
                    step: `Factor ${numbers[index]}`,
                    number: numbers[index],
                    factorization: fact.exponentialForm,
                    factors: fact.factorCounts
                });
            });

            const stepNum = solution.factorizations.length + 2;

            steps.push({
                stepNumber: stepNum,
                step: 'Identify all primes',
                description: 'Find all primes that appear in ANY factorization',
                allPrimes: Object.keys(solution.lcmFactors),
                reasoning: 'LCM must include all factors that appear anywhere'
            });

            steps.push({
                stepNumber: stepNum + 1,
                step: 'Take maximum exponents',
                description: 'For each prime, use largest exponent from any number',
                process: Object.entries(solution.lcmFactors).map(([prime, exp]) => {
                    const exponents = solution.factorizations.map(f => f.factorCounts[prime] || 0);
                    return {
                        prime: prime,
                        exponents: exponents,
                        maximum: exp
                    };
                }),
                reasoning: 'LCM must be divisible by all numbers, so needs highest power of each prime',
                rule: 'LCM uses MAXIMUM exponents'
            });

            steps.push({
                stepNumber: stepNum + 2,
                step: 'Calculate LCM',
                description: 'Multiply all prime factors with max exponents',
                calculation: solution.exponentialForm,
                result: solution.lcm,
                finalAnswer: true,
                reasoning: 'This is the smallest number divisible by all input numbers'
            });

            if (solution.relationship) {
                steps.push({
                    stepNumber: stepNum + 3,
                    step: 'Verify relationship',
                    description: 'Check: LCM × GCF = product of numbers',
                    relationship: solution.relationship,
                    verification: solution.relationship.verified ? 'Verified ✓' : 'Failed',
                    reasoning: 'This relationship holds for any two numbers'
                });
            }
        }

        return steps;
    }

    generateSpecialPrimesSteps(problem, solution) {
        const steps = [];

        if (problem.type === 'twin_primes') {
            steps.push({
                stepNumber: 1,
                step: 'Find all primes',
                description: `Find all primes up to ${solution.limit}`,
                method: 'Sieve or sequential testing',
                primeCount: solution.count
            });

            steps.push({
                stepNumber: 2,
                step: 'Identify twin pairs',
                description: 'Find consecutive primes that differ by 2',
                twinPairs: solution.twinPairs,
                count: solution.count,
                finalAnswer: true,
                reasoning: 'Twin primes are prime pairs (p, p+2)',
                note: solution.conjecture
            });

        } else if (problem.type === 'mersenne_primes') {
            steps.push({
                stepNumber: 1,
                step: 'Test Mersenne candidates',
                description: `Test numbers of form 2^p - 1 for prime p ≤ ${solution.maxExponent}`,
                reasoning: 'If 2^n - 1 is prime, then n must be prime (but not all 2^p - 1 are prime)',
                definition: solution.definition
            });

            steps.push({
                stepNumber: 2,
                step: 'Results',
                description: 'Mersenne primes found',
                mersennePrimes: solution.mersennePrimes,
                count: solution.count,
                finalAnswer: true,
                note: solution.note
            });
        }

        return steps;
    }

    generateGenericPrimeSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Prime problem',
            description: 'Solve the prime number problem',
            solution: solution,
            finalAnswer: true
        }];
    }

    getOrdinalSuffix(n) {
        const lastDigit = n % 10;
        const lastTwoDigits = n % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
            return 'th';
        }

        switch (lastDigit) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }

    // ENHANCED EXPLANATION METHODS (using similar structure to linear workbook)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanation(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualExplanation(step, problem),
                algorithmic: this.getAlgorithmicExplanation(step)
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
            'Initial checks': "Before we start testing if a number is prime, we check if it's one of the special easy cases!",
            'Check if even': "If a number is even (like 4, 6, 8), it can be divided by 2, so it's not prime (except for 2 itself, which is special!).",
            'Determine test range': "We don't need to test ALL numbers - just the small ones! It's like checking if a LEGO tower can be broken in half - you only need to check up to halfway.",
            'Test odd divisors': "We try dividing by small odd numbers to see if any of them fit perfectly.",
            'Begin factorization': "We're going to break this number into its building blocks - the prime numbers that multiply together to make it!",
            'Divide by 2': "Let's take out all the 2s first - divide by 2 again and again until we can't anymore.",
            'Find all primes': "We're making a list of all the special numbers (primes) by crossing out the ones that aren't special.",
            'Identify common primes': "Let's find which building blocks both numbers have!",
            'Take minimum exponents': "We use the SMALLEST amount that appears in ALL numbers - like finding what everyone has in common.",
            'Take maximum exponents': "We need ENOUGH of each block so we can build any of the numbers - we take the MOST that appears anywhere."
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our prime puzzle!";
    }

    findRelevantAnalogy(step, problem) {
        const category = this.primeTypes[problem.type]?.category;
        
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor && analogy.suitableFor.includes(category)) {
                return analogy.ELI5 || analogy.explanation;
            }
        }

        return "Think of prime numbers like special building blocks - they can't be broken down into smaller blocks!";
    }

    convertToSimpleLanguage(description) {
        if (!description) return '';

        const simplifications = {
            'prime': 'special number that can only be divided by 1 and itself',
            'composite': 'number made by multiplying smaller numbers',
            'factor': 'number that divides evenly',
            'divisor': 'number you can divide by',
            'divisible': 'can be divided evenly with no remainder',
            'remainder': 'what\'s left over after dividing',
            'quotient': 'answer when you divide',
            'exponent': 'how many times to multiply',
            'factorization': 'breaking into prime building blocks',
            'GCF': 'biggest number that divides all of them',
            'LCM': 'smallest number they all divide into',
            'algorithm': 'step-by-step method',
            'sieve': 'way to find primes by crossing out non-primes'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(`\\b${term}\\b`, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualization(step) {
        const visualizations = {
            'Initial checks': 'Draw a decision tree: Is n > 1? Is n = 2? Is n even?',
            'Check if even': 'Circle all even numbers on a number line - they\'re all composite (except 2)!',
            'Test odd divisors': 'Try dividing by 3, 5, 7... like trying different size groups',
            'Begin factorization': 'Draw a factor tree, branching down until all leaves are prime',
            'Divide by 2': 'Keep cutting in half until you can\'t anymore',
            'Find all primes': 'Draw a grid of numbers and cross out the composites',
            'Identify common primes': 'Use overlapping circles (Venn diagram) to show what\'s common',
            'Take minimum exponents': 'Show stacks of blocks - take the shortest stack',
            'Take maximum exponents': 'Show stacks of blocks - take the tallest stack'
        };

        return visualizations[step.step] || 'Draw a picture to help understand this step';
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
        const category = this.primeTypes[problemType]?.category || 'prime_test';
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
            'Initial checks': 'We start by checking if the number meets basic requirements for primality. This saves time by catching easy cases first.',
            'Check if even': 'Even numbers (except 2) are composite because they have 2 as a factor. This is why 2 is so special - it\'s the only even prime.',
            'Determine test range': 'We only need to test up to √n because factors come in pairs. If one factor is larger than √n, its pair must be smaller.',
            'Begin factorization': 'Every composite number can be uniquely broken down into prime factors - this is the Fundamental Theorem of Arithmetic.',
            'Divide by 2': 'We start with the smallest prime and remove all instances. This systematic approach ensures we don\'t miss any factors.',
            'Identify common primes': 'The GCF contains only the prime factors that ALL numbers share - it\'s the intersection of their factorizations.',
            'Take minimum exponents': 'GCF can\'t have more of a factor than any number has, so we take the minimum count.',
            'Take maximum exponents': 'LCM must be divisible by all numbers, so it needs the highest power of each prime that appears anywhere.'
        };

        return conceptualExplanations[step.step] || 'This step helps us progress toward the solution.';
    }

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Perform: ${step.operation}
2. Record the result
3. Continue to next step
4. Verify correctness`;
        }
        return 'Follow the systematic procedure for this type of step.';
    }

    getVisualExplanation(step, problem) {
        const category = this.primeTypes[problem.type]?.category;
        
        const visualExplanations = {
            'prime_test': 'Visualize testing divisors on a number line, marking which ones divide evenly.',
            'factorization': 'Draw a factor tree, branching down until all branches end in prime numbers.',
            'find_primes': 'Picture a grid with composites crossed out, leaving only primes unmarked.',
            'applications': 'Use Venn diagrams to show overlapping factors (GCF) or combined coverage (LCM).'
        };

        return visualExplanations[category] || 'Create a visual representation of the concept.';
    }

    getAlgorithmicExplanation(step) {
        const algorithmicRules = {
            'Initial checks': 'Base case handling: n ≤ 1 → false; n = 2 → true',
            'Check if even': 'If n mod 2 = 0 and n > 2, then composite',
            'Test odd divisors': 'For i = 3 to √n step 2: if n mod i = 0, return composite',
            'Divide by 2': 'While n mod 2 = 0: record factor 2; n = n / 2',
            'Find all primes': 'Sieve of Eratosthenes: O(n log log n) time complexity',
            'Take minimum exponents': 'For each prime p: GCF_exp[p] = min(a_exp[p], b_exp[p], ...)',
            'Take maximum exponents': 'For each prime p: LCM_exp[p] = max(a_exp[p], b_exp[p], ...)'
        };

        return algorithmicRules[step.step] || 'Apply standard algorithmic approach.';
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
                'prime': 'prime',
                'composite': 'not prime',
                'factor': 'divides evenly',
                'divisor': 'number that divides',
                'remainder': 'leftover'
            },
            intermediate: {
                'prime': 'prime',
                'composite': 'composite',
                'factor': 'factor',
                'divisor': 'divisor'
            },
            ELI5: {
                'prime': 'special number',
                'composite': 'number made of smaller numbers',
                'factor': 'building block',
                'divisor': 'number you divide by',
                'factorization': 'breaking into pieces'
            },
            detailed: {
                'prime': 'prime number (integer > 1 with exactly two divisors)',
                'composite': 'composite number (integer > 1 with more than two divisors)',
                'factor': 'factor (divisor)',
                'divisor': 'divisor (factor)'
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
            currentState: `We've completed: ${currentStep.step}`,
            nextGoal: `Next, we'll: ${nextStep.description}`,
            why: `This is necessary to continue our systematic approach`,
            howItHelps: `This brings us closer to finding the complete answer`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} as part of the algorithm`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Check if even': [
                'Remember: 2 is prime, but all other even numbers are not',
                'Don\'t forget to check n = 2 as a special case'
            ],
            'Test odd divisors': [
                'Only test up to √n - no need to go further',
                'Skip even numbers (already ruled out)',
                'Test divisors in order'
            ],
            'Divide by 2': [
                'Keep dividing until you can\'t anymore',
                'Don\'t forget to count how many times'
            ],
            'Take minimum exponents': [
                'It\'s MINIMUM for GCF, not maximum',
                'Common factors only - not all factors'
            ],
            'Take maximum exponents': [
                'It\'s MAXIMUM for LCM, not minimum',
                'Include ALL primes that appear anywhere'
            ]
        };

        return tips[step.step] || ['Work systematically', 'Check your work'];
    }

    generateCheckPoints(step) {
        return [
            'Does this make sense?',
            'Am I following the algorithm correctly?',
            'Have I checked for special cases?',
            'Can I verify this result?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            prime_test: step.step === 'Check if even' ?
                ['Don\'t assume all even numbers are composite - 2 is prime!'] : [],
            factorization: step.step === 'Begin factorization' ?
                ['Don\'t include 1 in the prime factorization'] : []
        };

        const category = this.primeTypes[problemType]?.category || 'prime_test';
        return warnings[category] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Initial checks': 'Did I check all the basic conditions?',
            'Check if even': 'Did I remember that 2 is the exception?',
            'Test odd divisors': 'Am I testing divisors up to √n?',
            'Divide by 2': 'Did I divide repeatedly until no longer divisible?',
            'Take minimum exponents': 'Am I using MINIMUM for GCF (not maximum)?',
            'Take maximum exponents': 'Am I using MAXIMUM for LCM (not minimum)?'
        };

        return questions[step.step] || 'Does this step make sense?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Initial checks': 'Classification: continues testing, or early determination',
            'Check if even': 'Either composite (if even) or continue testing (if odd)',
            'Test odd divisors': 'Either find a divisor (composite) or no divisors (prime)',
            'Divide by 2': 'All factors of 2 removed, odd number remaining',
            'Take minimum exponents': 'GCF with correct minimum exponents',
            'Take maximum exponents': 'LCM with correct maximum exponents'
        };

        return expectations[step.step] || 'Progress toward solution';
    }

    generateTroubleshootingTips(step) {
        return [
            'Review the definition of the concept',
            'Check for arithmetic errors',
            'Verify you\'re using the right algorithm',
            'Try a simpler example first',
            'Draw a picture or diagram'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Initial checks': [
                'What are the basic requirements for a prime number?',
                'Are there any special cases to handle?',
                'What can I determine immediately?'
            ],
            'Test odd divisors': [
                'How far do I need to test?',
                'Why only odd numbers?',
                'What happens if I find a divisor?'
            ],
            'Begin factorization': [
                'What\'s the smallest prime?',
                'How do I know when to stop?',
                'What if the number itself is prime?'
            ],
            'Identify common primes': [
                'Which primes appear in ALL numbers?',
                'What does "common" mean for factors?',
                'Why do we need common factors for GCF?'
            ]
        };

        return questions[step.step] || ['What is the goal?', 'How do I proceed?'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.primeTypes[problem.type]?.category || 'prime_test';
        const hintSet = this.hints[category] || this.hints.prime_test;

        return {
            level1: hintSet.level1 || 'Think about what you need to do.',
            level2: hintSet.level2 || 'Consider the definition and properties.',
            level3: hintSet.level3 || 'Apply the systematic method.',
            level4: hintSet.level4 || 'Follow the specific algorithm.'
        };
    }

    breakIntoSubSteps(step) {
        if (step.divisions) {
            return step.divisions.map(d => `Divide: ${d.operation}`);
        }

        if (step.tests) {
            return step.tests.map(t => `Test: ${t.test}`);
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same type with a different number',
            practiceHint: 'Start with smaller numbers to build confidence',
            extension: 'Once comfortable, try larger or more complex examples'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to find?',
            strategy: 'What method should I use?',
            execute: 'How do I apply this method?',
            verify: 'How can I check my answer?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which algorithm to use?',
            'When to stop testing?',
            'How to handle special cases?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        return ['The chosen method is systematic and efficient for this problem'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex}`,
            progression: 'We\'re following the algorithm systematically',
            relationship: 'Each step narrows down the answer'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.primeTypes[problemType]?.category || 'prime_test';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic arithmetic', 'Division'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Initial checks': ['prime', 'composite', 'factor'],
            'Check if even': ['even', 'odd', 'divisible'],
            'Test odd divisors': ['divisor', 'quotient', 'remainder'],
            'Begin factorization': ['factor', 'prime', 'composite'],
            'Divide by 2': ['divisor', 'quotient', 'exponent'],
            'Identify common primes': ['common', 'factor', 'GCF'],
            'Take minimum exponents': ['exponent', 'minimum', 'power'],
            'Take maximum exponents': ['exponent', 'maximum', 'power']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before starting, what do I need to know or check?',
            during: 'As I work, what should I watch out for?',
            after: 'How can I verify this result is correct?'
        };
    }

    findRealWorldConnection(step, problem) {
        const connections = {
            'prime_test': 'Testing if a number is prime is like checking if a lock can only be opened by two specific keys (1 and itself).',
            'factorization': 'Prime factorization is used in RSA encryption that protects your online shopping and banking.',
            'find_primes': 'Finding primes is crucial for internet security - every secure website uses large prime numbers.',
            'applications': 'GCF helps simplify fractions; LCM helps find when repeating events coincide.'
        };

        const category = this.primeTypes[problem.type]?.category;
        return connections[category] || 'Prime numbers are the building blocks of mathematics and cryptography.';
    }

    // GRAPH GENERATION

    generatePrimeGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.primeTypes[type]?.category;

        if (category === 'find_primes' && this.currentSolution.primes) {
            this.graphData = {
                type: 'prime_distribution',
                primes: this.currentSolution.primes,
                count: this.currentSolution.count,
                limit: this.currentSolution.limit,
                visualization: 'Number line with primes marked'
            };
        } else if (category === 'factorization' && this.currentSolution.factors) {
            this.graphData = {
                type: 'factor_tree',
                factors: this.currentSolution.factors,
                number: this.currentSolution.number,
                visualization: 'Tree diagram showing factorization'
            };
        }
    }

    // WORKBOOK GENERATION

    generatePrimeWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createPrimeLessonSection(),
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
            title: 'Enhanced Prime Factorization Mathematical Workbook',
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
            ['Problem Type', this.primeTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.primeTypes[this.currentProblem.type]?.category || 'prime'],
            ['Number', this.currentProblem.number || 'N/A']
        ];

        if (this.currentProblem.secondNumber) {
            problemData.push(['Second Number', this.currentProblem.secondNumber]);
        }

        if (this.currentProblem.originalInput) {
            problemData.push(['Query', this.currentProblem.originalInput]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.primeTypes[this.currentProblem.type]?.category;
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

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.test) {
                stepsData.push(['Test', step.test]);
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

            // Enhanced explanations
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Algorithmic', step.explanations.algorithmic]);
            }

            // Error prevention
            if (step.errorPrevention && this.includeErrorPrevention) {
                const mistakes = step.errorPrevention.commonMistakes;
                if (mistakes && mistakes.length > 0) {
                    stepsData.push(['Common Mistakes', mistakes.join('; ')]);
                }
            }

            // Scaffolding
            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
                }
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

    createPrimeLessonSection() {
        const { type } = this.currentProblem;
        const category = this.primeTypes[type]?.category;

        let lessonKey = 'prime_numbers';
        if (category === 'factorization') lessonKey = 'prime_factorization';
        if (category === 'find_primes') lessonKey = 'sieve_of_eratosthenes';

        const lesson = this.lessons[lessonKey];
        if (!lesson) return null;

        const lessonData = [
            ['Key Concepts', ''],
            ...lesson.concepts.map(c => ['', c]),
            ['', ''],
            ['Theory', lesson.theory]
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

        if (this.currentSolution.isPrime !== undefined) {
            solutionData.push(['Number', this.currentSolution.number]);
            solutionData.push(['Is Prime?', this.currentSolution.isPrime ? 'Yes' : 'No']);
            solutionData.push(['Reason', this.currentSolution.reason]);
        } else if (this.currentSolution.factors) {
            solutionData.push(['Number', this.currentSolution.number]);
            solutionData.push(['Prime Factors', this.currentSolution.factors.join(' × ')]);
            solutionData.push(['Exponential Form', this.currentSolution.exponentialForm]);
        } else if (this.currentSolution.primes) {
            solutionData.push(['Primes Found', this.currentSolution.primes.join(', ')]);
            solutionData.push(['Count', this.currentSolution.count]);
        } else if (this.currentSolution.gcf !== undefined) {
            solutionData.push(['GCF', this.currentSolution.gcf]);
            solutionData.push(['Exponential Form', this.currentSolution.exponentialForm]);
        } else if (this.currentSolution.lcm !== undefined) {
            solutionData.push(['LCM', this.currentSolution.lcm]);
            solutionData.push(['Exponential Form', this.currentSolution.exponentialForm]);
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
            ['Category', this.primeTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.method) {
            analysisData.push(['Algorithm', this.currentSolution.method]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution) return null;

        const verificationData = [
            ['Verification Method', 'Direct testing']
        ];

        if (this.currentSolution.verification !== undefined) {
            verificationData.push(['Verified', this.currentSolution.verification ? 'Yes ✓' : 'No']);
        }

        if (this.currentSolution.isPrime !== undefined && this.currentSolution.testedUpTo) {
            verificationData.push(['Tested Divisors', `2 to ${this.currentSolution.testedUpTo}`]);
            verificationData.push(['Result', this.currentSolution.isPrime ? 'Prime' : 'Composite']);
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
            appData.push(['Explanation', app.explanation]);
            if (app.example) {
                appData.push(['Example', app.example]);
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

        const histData = [
            ['Historical Context', ''],
            ['', ''],
            ['Ancient Greece', this.historicalContext.ancient.contributions.join('; ')],
            ['Renaissance', this.historicalContext.renaissance.contributions.join('; ')],
            ['Modern Era', this.historicalContext.modern.contributions.join('; ')],
            ['Contemporary', this.historicalContext.contemporary.contributions.join('; ')],
            ['', ''],
            ['Fun Facts', ''],
            ...this.historicalContext.funFacts.map(f => ['', f])
        ];

        return {
            title: 'Historical Context',
            type: 'history',
            data: histData
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generatePrimePedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generatePrimeAlternativeMethods(this.currentProblem.type);

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
        const category = this.primeTypes[this.currentProblem.type]?.category;
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

    generatePrimePedagogicalNotes(problemType) {
        const category = this.primeTypes[problemType]?.category;

        const pedagogicalDatabase = {
            prime_test: {
                objectives: [
                    'Understand definition of prime numbers',
                    'Test numbers for primality efficiently',
                    'Recognize that 2 is the only even prime',
                    'Understand why 1 is not prime'
                ],
                keyConcepts: [
                    'Prime has exactly two factors',
                    'Only test divisors up to √n',
                    '2 is special - only even prime',
                    '1 is not prime (only one factor)'
                ],
                prerequisites: [
                    'Division with remainders',
                    'Factors and multiples',
                    'Square roots'
                ],
                commonDifficulties: [
                    'Thinking 1 is prime',
                    'Forgetting 2 is prime',
                    'Testing all numbers instead of just to √n',
                    'Confusing "prime" with "odd"'
                ],
                teachingStrategies: [
                    'Use visual factor models',
                    'Practice with small numbers first',
                    'Emphasize "exactly two factors" definition',
                    'Show why √n is the limit'
                ],
                extensions: [
                    'Sieve of Eratosthenes',
                    'Twin primes',
                    'Prime patterns and conjectures'
                ],
                assessment: [
                    'Can identify primes under 20?',
                    'Understands why 1 is not prime?',
                    'Can test larger numbers efficiently?'
                ]
            },
            factorization: {
                objectives: [
                    'Factor numbers into prime factors',
                    'Use factor trees and division method',
                    'Express in exponential notation',
                    'Understand uniqueness of prime factorization'
                ],
                keyConcepts: [
                    'Every number has unique prime factorization',
                    'Factor trees branch until all primes',
                    'Divide by smallest prime first',
                    'Exponential form: p₁^a₁ × p₂^a₂...'
                ],
                prerequisites: [
                    'Prime numbers',
                    'Division',
                    'Exponents',
                    'Factor trees'
                ],
                commonDifficulties: [
                    'Including 1 in factorization',
                    'Stopping before all factors prime',
                    'Arithmetic errors in division',
                    'Converting to exponential form'
                ],
                teachingStrategies: [
                    'Show both factor tree and division methods',
                    'Use color coding for different primes',
                    'Practice exponential notation separately',
                    'Emphasize systematic approach'
                ],
                extensions: [
                    'Using factorization for GCF/LCM',
                    'Perfect numbers',
                    'Prime power decomposition'
                ],
                assessment: [
                    'Can factor numbers under 100?',
                    'Uses exponential notation correctly?',
                    'Understands uniqueness?'
                ]
            },
            find_primes: {
                objectives: [
                    'Find all primes up to a limit',
                    'Use Sieve of Eratosthenes',
                    'Understand prime distribution',
                    'Count primes efficiently'
                ],
                keyConcepts: [
                    'Sieve eliminates composites',
                    'Start crossing at p²',
                    'Primes become less dense',
                    'No formula for nth prime'
                ],
                prerequisites: [
                    'Prime definition',
                    'Multiples',
                    'Systematic elimination',
                    'Arrays/lists'
                ],
                commonDifficulties: [
                    'Marking prime itself as composite',
                    'Not starting at p²',
                    'Off-by-one errors',
                    'Including 1 as prime'
                ],
                teachingStrategies: [
                    'Use grid visualization',
                    'Color code different primes',
                    'Show efficiency compared to testing each',
                    'Discuss prime patterns'
                ],
                extensions: [
                    'Prime Number Theorem',
                    'Twin primes',
                    'Goldbach\'s Conjecture'
                ],
                assessment: [
                    'Can perform sieve correctly?',
                    'Understands why start at p²?',
                    'Can count primes in range?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Understand prime concepts'],
            keyConcepts: ['Primes are building blocks'],
            prerequisites: ['Basic arithmetic'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Systematic instruction'],
            extensions: ['Advanced topics'],
            assessment: ['Verify understanding']
        };
    }

    generatePrimeAlternativeMethods(problemType) {
        const category = this.primeTypes[problemType]?.category;

        const alternativeDatabase = {
            prime_test: {
                primaryMethod: 'Trial Division',
                methods: [
                    {
                        name: 'Trial Division',
                        description: 'Test divisibility by primes up to √n'
                    },
                    {
                        name: 'Sieve of Eratosthenes',
                        description: 'Generate list of primes, check if number is in list'
                    },
                    {
                        name: 'Miller-Rabin',
                        description: 'Probabilistic test for large numbers'
                    },
                    {
                        name: 'Fermat Test',
                        description: 'Quick probabilistic test using Fermat\'s Little Theorem'
                    }
                ],
                comparison: 'Trial division is deterministic and works for small/medium numbers. For large numbers, use probabilistic tests.'
            },
            factorization: {
                primaryMethod: 'Division by Primes',
                methods: [
                    {
                        name: 'Factor Tree',
                        description: 'Visual branching method'
                    },
                    {
                        name: 'Division Ladder',
                        description: 'Divide by primes sequentially'
                    },
                    {
                        name: 'Prime List Method',
                        description: 'Test division by list of known primes'
                    }
                ],
                comparison: 'Factor tree is visual and good for learning. Division ladder is systematic and efficient.'
            },
            find_primes: {
                primaryMethod: 'Sieve of Eratosthenes',
                methods: [
                    {
                        name: 'Sieve of Eratosthenes',
                        description: 'Eliminate multiples systematically'
                    },
                    {
                        name: 'Test Each Number',
                        description: 'Test each candidate for primality'
                    },
                    {
                        name: 'Segmented Sieve',
                        description: 'Memory-efficient sieve for large ranges'
                    }
                ],
                comparison: 'Sieve is most efficient for finding multiple primes. Testing each works but is slower.'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard approach',
            methods: [{
                name: 'Alternative',
                description: 'Other methods may be applicable'
            }],
            comparison: 'Choose based on problem size and requirements'
        };
    }
}

// Export the class
export default EnhancedPrimeFactorizationMathematicalWorkbook;
