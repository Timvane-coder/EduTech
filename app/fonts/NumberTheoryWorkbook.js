// Enhanced Number Theory Mathematical Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedNumberTheoryWorkbook {
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
        this.explanationLevel = options.explanationLevel || 'intermediate';
        this.includeVerificationInSteps = options.includeVerificationInSteps !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeAlternativeMethods = options.includeAlternativeMethods !== false;
        this.includeErrorPrevention = options.includeErrorPrevention !== false;
        this.includeCommonMistakes = options.includeCommonMistakes !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.verificationDetail = options.verificationDetail || 'detailed';

        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializeNumberTheorySolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
    }

    initializeNumberTheoryLessons() {
        this.lessons = {
            prime_numbers: {
                title: "Prime Numbers",
                concepts: [
                    "Prime: natural number > 1 with exactly two divisors (1 and itself)",
                    "Composite: natural number > 1 that is not prime",
                    "Fundamental Theorem: every integer > 1 has unique prime factorization",
                    "Infinite number of primes (Euclid's proof)"
                ],
                theory: "Prime numbers are the building blocks of all natural numbers. They cannot be factored into smaller natural numbers except 1 and themselves.",
                keyFormulas: {
                    "Prime Test": "Check divisibility by primes up to √n",
                    "Sieve of Eratosthenes": "Systematic method to find all primes up to n",
                    "Prime Counting": "π(n) ≈ n/ln(n) for large n"
                },
                methods: [
                    "Trial division method",
                    "Sieve of Eratosthenes",
                    "Primality testing algorithms",
                    "Prime factorization"
                ],
                applications: [
                    "Cryptography (RSA encryption)",
                    "Hash functions",
                    "Random number generation",
                    "Error detection codes"
                ]
            },

            prime_factorization: {
                title: "Prime Factorization",
                concepts: [
                    "Every integer > 1 can be expressed as product of primes",
                    "Factorization is unique (up to order of factors)",
                    "Process: repeatedly divide by smallest prime divisors",
                    "Factor tree or ladder method visualization"
                ],
                theory: "The Fundamental Theorem of Arithmetic states that every integer greater than 1 either is prime or can be represented uniquely as a product of prime numbers.",
                keyFormulas: {
                    "Standard Form": "n = p₁^a₁ × p₂^a₂ × ... × pₖ^aₖ",
                    "Number of Divisors": "τ(n) = (a₁+1)(a₂+1)...(aₖ+1)",
                    "Sum of Divisors": "σ(n) = [(p₁^(a₁+1)-1)/(p₁-1)]×...×[(pₖ^(aₖ+1)-1)/(pₖ-1)]"
                },
                methods: [
                    "Factor tree method",
                    "Division ladder method",
                    "Using divisibility rules",
                    "Fermat's factorization method"
                ],
                applications: [
                    "Finding GCD and LCM",
                    "Simplifying radicals",
                    "Solving Diophantine equations",
                    "Cryptographic algorithms"
                ]
            },

            hcf_gcd: {
                title: "Highest Common Factor (GCD)",
                concepts: [
                    "GCD: largest positive integer that divides both numbers",
                    "Also called HCF (Highest Common Factor)",
                    "gcd(a,b) × lcm(a,b) = a × b",
                    "Coprime numbers: gcd(a,b) = 1"
                ],
                theory: "The GCD is fundamental in number theory and has applications in fraction simplification, modular arithmetic, and cryptography.",
                keyFormulas: {
                    "Euclidean Algorithm": "gcd(a,b) = gcd(b, a mod b)",
                    "Prime Factorization Method": "Take minimum power of each common prime",
                    "Bézout's Identity": "gcd(a,b) = ax + by for some integers x,y"
                },
                methods: [
                    "Euclidean algorithm (most efficient)",
                    "Prime factorization method",
                    "Listing divisors method",
                    "Extended Euclidean algorithm"
                ],
                applications: [
                    "Simplifying fractions",
                    "Solving linear Diophantine equations",
                    "Modular arithmetic inverse",
                    "Gear ratio calculations"
                ]
            },

            lcm: {
                title: "Least Common Multiple (LCM)",
                concepts: [
                    "LCM: smallest positive integer divisible by both numbers",
                    "lcm(a,b) = (a × b) / gcd(a,b)",
                    "From prime factorization: take maximum power of each prime",
                    "Used in fraction operations and cyclic patterns"
                ],
                theory: "The LCM represents the smallest number that contains both numbers as factors, essential for adding fractions and finding repeating patterns.",
                keyFormulas: {
                    "Via GCD": "lcm(a,b) = |a × b| / gcd(a,b)",
                    "Prime Factorization": "Take maximum power of each prime factor",
                    "Multiple Numbers": "lcm(a,b,c) = lcm(lcm(a,b),c)"
                },
                methods: [
                    "Prime factorization method",
                    "Using GCD formula",
                    "Listing multiples method",
                    "Division ladder method"
                ],
                applications: [
                    "Adding/subtracting fractions",
                    "Finding repeating patterns",
                    "Scheduling problems",
                    "Gear synchronization"
                ]
            },

            modular_arithmetic: {
                title: "Modular Arithmetic",
                concepts: [
                    "a ≡ b (mod n) means n divides (a-b)",
                    "Clock arithmetic: numbers wrap around at modulus",
                    "Congruence preserves addition, subtraction, multiplication",
                    "Modular inverse exists if gcd(a,n) = 1"
                ],
                theory: "Modular arithmetic is arithmetic for integers where numbers wrap around after reaching a certain value (the modulus). It's fundamental in cryptography and computer science.",
                keyFormulas: {
                    "Congruence": "a ≡ b (mod n) ⟺ n | (a-b)",
                    "Addition": "(a+b) mod n = ((a mod n) + (b mod n)) mod n",
                    "Multiplication": "(a×b) mod n = ((a mod n) × (b mod n)) mod n",
                    "Inverse": "a × a⁻¹ ≡ 1 (mod n)"
                },
                theorems: [
                    "Fermat's Little Theorem: a^(p-1) ≡ 1 (mod p) if p prime",
                    "Euler's Theorem: a^φ(n) ≡ 1 (mod n) if gcd(a,n)=1",
                    "Chinese Remainder Theorem: system of congruences solution"
                ],
                applications: [
                    "Cryptography (RSA, Diffie-Hellman)",
                    "Hash functions",
                    "Check digits (ISBN, credit cards)",
                    "Calendar calculations"
                ]
            },

            divisibility: {
                title: "Divisibility Rules and Tests",
                concepts: [
                    "a | b means 'a divides b' or 'b is divisible by a'",
                    "Divisibility rules provide quick tests without division",
                    "Transitive property: if a|b and b|c, then a|c",
                    "If a|b and a|c, then a|(bx+cy) for any integers x,y"
                ],
                theory: "Divisibility rules are shortcuts to determine if one number divides another without performing long division, based on patterns in decimal representation.",
                keyFormulas: {
                    "Division Algorithm": "a = bq + r where 0 ≤ r < b",
                    "Divisibility by 2": "Last digit is even",
                    "Divisibility by 3": "Sum of digits divisible by 3",
                    "Divisibility by 9": "Sum of digits divisible by 9"
                },
                rules: {
                    "2": "Last digit is 0, 2, 4, 6, or 8",
                    "3": "Sum of all digits is divisible by 3",
                    "4": "Last two digits form number divisible by 4",
                    "5": "Last digit is 0 or 5",
                    "6": "Divisible by both 2 and 3",
                    "8": "Last three digits form number divisible by 8",
                    "9": "Sum of all digits is divisible by 9",
                    "10": "Last digit is 0",
                    "11": "Alternating sum of digits is divisible by 11"
                },
                applications: [
                    "Quick mental calculations",
                    "Check digit validation",
                    "Number pattern recognition",
                    "Simplification in calculations"
                ]
            },

            rational_numbers: {
                title: "Rational Numbers",
                concepts: [
                    "Rational: can be expressed as p/q where p,q are integers, q≠0",
                    "Decimal form: terminating or repeating",
                    "Dense in real numbers: between any two reals exists a rational",
                    "Countably infinite set"
                ],
                theory: "Rational numbers represent ratios and can be precisely represented as fractions. They form a field under addition and multiplication.",
                keyFormulas: {
                    "Standard Form": "p/q where gcd(p,q) = 1 and q > 0",
                    "Decimal Conversion": "Divide numerator by denominator",
                    "Operations": "a/b + c/d = (ad+bc)/(bd)",
                    "Reciprocal": "(p/q)⁻¹ = q/p (if p≠0)"
                },
                properties: [
                    "Closed under +, -, ×, ÷ (except ÷0)",
                    "Contains additive and multiplicative identities",
                    "Every non-zero rational has multiplicative inverse",
                    "Forms a field"
                ],
                applications: [
                    "Fraction arithmetic",
                    "Measurements and proportions",
                    "Probability calculations",
                    "Music theory (note frequencies)"
                ]
            },

            irrational_numbers: {
                title: "Irrational Numbers",
                concepts: [
                    "Irrational: real number that cannot be expressed as p/q",
                    "Decimal form: non-terminating, non-repeating",
                    "√2 was first proven irrational (Pythagorean crisis)",
                    "Transcendental vs algebraic irrationals"
                ],
                theory: "Irrational numbers cannot be represented as simple fractions. They fill the 'gaps' between rational numbers on the real number line.",
                keyFormulas: {
                    "Square Roots": "√p is irrational if p is not perfect square",
                    "π": "Ratio of circle's circumference to diameter",
                    "e": "Base of natural logarithm, e = lim(1+1/n)ⁿ as n→∞",
                    "Golden Ratio": "φ = (1+√5)/2"
                },
                proofTechniques: [
                    "Proof by contradiction (√2 irrationality)",
                    "Continued fractions",
                    "Transcendental number theory",
                    "Measure theory"
                ],
                examples: [
                    "√2, √3, √5, ...",
                    "π ≈ 3.14159...",
                    "e ≈ 2.71828...",
                    "φ ≈ 1.61803... (golden ratio)"
                ],
                applications: [
                    "Geometry (diagonal of square)",
                    "Trigonometry",
                    "Calculus and analysis",
                    "Art and architecture (golden ratio)"
                ]
            },

            perfect_numbers: {
                title: "Perfect, Abundant, and Deficient Numbers",
                concepts: [
                    "Perfect: sum of proper divisors equals the number",
                    "Abundant: sum of proper divisors exceeds the number",
                    "Deficient: sum of proper divisors is less than the number",
                    "Euclid-Euler theorem connects perfect numbers to Mersenne primes"
                ],
                theory: "Perfect numbers have fascinated mathematicians since ancient Greece. They represent a special balance in their divisor structure.",
                keyFormulas: {
                    "Perfect Number Test": "σ(n) - n = n or σ(n) = 2n",
                    "Even Perfect Numbers": "2^(p-1)(2^p - 1) where 2^p-1 is prime",
                    "Abundancy": "σ(n)/n ratio characterizes number type"
                },
                properties: [
                    "All known perfect numbers are even",
                    "Unknown if odd perfect numbers exist",
                    "Mersenne primes yield even perfect numbers",
                    "First four: 6, 28, 496, 8128"
                ],
                applications: [
                    "Number theory research",
                    "Computational challenges",
                    "Pattern recognition",
                    "Historical mathematics study"
                ]
            },

            fibonacci_sequences: {
                title: "Fibonacci and Lucas Sequences",
                concepts: [
                    "Fibonacci: F(n) = F(n-1) + F(n-2), F(0)=0, F(1)=1",
                    "Golden ratio: lim F(n+1)/F(n) = φ ≈ 1.618",
                    "Appears in nature: spirals, branching patterns",
                    "Rich mathematical properties and identities"
                ],
                theory: "Fibonacci sequence demonstrates recursive relationships and appears throughout mathematics and nature, connecting to golden ratio and continued fractions.",
                keyFormulas: {
                    "Recursive": "F(n) = F(n-1) + F(n-2)",
                    "Binet's Formula": "F(n) = (φⁿ - ψⁿ)/√5",
                    "GCD Property": "gcd(F(m), F(n)) = F(gcd(m,n))",
                    "Cassini's Identity": "F(n-1)×F(n+1) - F(n)² = (-1)ⁿ"
                },
                properties: [
                    "Every 3rd Fibonacci number is even",
                    "Every 4th is divisible by 3",
                    "Sum of first n: F(1)+...+F(n) = F(n+2)-1",
                    "GCD of consecutive Fibonacci numbers is 1"
                ],
                applications: [
                    "Algorithm analysis (Euclidean algorithm)",
                    "Nature patterns (phyllotaxis)",
                    "Financial markets (Fibonacci retracements)",
                    "Computer science (dynamic programming examples)"
                ]
            },

            diophantine_equations: {
                title: "Diophantine Equations",
                concepts: [
                    "Integer solutions to polynomial equations",
                    "Linear Diophantine: ax + by = c",
                    "Solution exists iff gcd(a,b) divides c",
                    "Quadratic and higher-order Diophantine equations"
                ],
                theory: "Diophantine equations seek integer or rational solutions to polynomial equations, named after Diophantus of Alexandria.",
                keyFormulas: {
                    "Linear Form": "ax + by = c",
                    "Solvability": "Solutions exist ⟺ gcd(a,b) | c",
                    "General Solution": "x = x₀ + (b/d)t, y = y₀ - (a/d)t",
                    "Pythagorean": "x² + y² = z² (Pythagorean triples)"
                },
                methods: [
                    "Extended Euclidean algorithm",
                    "Parametric solutions",
                    "Modular arithmetic approach",
                    "Continued fractions"
                ],
                applications: [
                    "Integer programming",
                    "Cryptography",
                    "Geometry (Pythagorean triples)",
                    "Number theory research"
                ]
            },

            number_bases: {
                title: "Number Bases and Representations",
                concepts: [
                    "Positional notation: digit value depends on position",
                    "Base b: uses digits 0 to b-1",
                    "Binary (base 2), octal (base 8), hexadecimal (base 16)",
                    "Conversion between bases"
                ],
                theory: "Different bases provide alternative representations of numbers, each useful in different contexts (binary for computers, hexadecimal for compact representation).",
                keyFormulas: {
                    "Base-b Representation": "n = aₖb^k + ... + a₁b + a₀",
                    "Decimal to Base-b": "Repeatedly divide by b, collect remainders",
                    "Base-b to Decimal": "Multiply each digit by appropriate power of b",
                    "Binary Operations": "Use place value in base 2"
                },
                conversions: [
                    "Decimal ↔ Binary",
                    "Decimal ↔ Hexadecimal",
                    "Binary ↔ Hexadecimal (group by 4 bits)",
                    "Any base to any other base"
                ],
                applications: [
                    "Computer science (binary, hexadecimal)",
                    "Digital electronics",
                    "Data encoding",
                    "Historical number systems"
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
                vertexBg: '#ffe6e6'
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
                vertexBg: '#ffe0e6'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeMathSymbols() {
        return {
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±',
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥', 'angle': '∠',
            'divides': '|', 'notdivides': '∤', 'equiv': '≡', 'phi': 'φ'
        };
    }

    initializeNumberTheorySolvers() {
        this.numberTheoryTypes = {
            prime_test: {
                patterns: [
                    /is.*\d+.*prime/i,
                    /prime.*test.*\d+/i,
                    /check.*primality/i,
                    /\d+.*prime.*number/i
                ],
                solver: this.testPrimality.bind(this),
                name: 'Primality Testing',
                category: 'prime_numbers',
                description: 'Tests if a number is prime'
            },

            prime_factorization: {
                patterns: [
                    /prime.*factor.*\d+/i,
                    /factor.*\d+/i,
                    /factorization.*\d+/i,
                    /factorize.*\d+/i
                ],
                solver: this.primeFactorization.bind(this),
                name: 'Prime Factorization',
                category: 'prime_numbers',
                description: 'Finds prime factorization of a number'
            },

            find_primes: {
                patterns: [
                    /primes.*up.*to.*\d+/i,
                    /find.*primes.*\d+/i,
                    /list.*primes/i,
                    /sieve.*\d+/i
                ],
                solver: this.findPrimesUpTo.bind(this),
                name: 'Find Primes',
                category: 'prime_numbers',
                description: 'Finds all primes up to n'
            },

            gcd_calculation: {
                patterns: [
                    /gcd.*\d+.*\d+/i,
                    /hcf.*\d+.*\d+/i,
                    /greatest.*common.*divisor/i,
                    /highest.*common.*factor/i
                ],
                solver: this.calculateGCD.bind(this),
                name: 'GCD/HCF Calculation',
                category: 'hcf_lcm',
                description: 'Calculates greatest common divisor'
            },

            lcm_calculation: {
                patterns: [
                    /lcm.*\d+.*\d+/i,
                    /least.*common.*multiple/i,
                    /lowest.*common.*multiple/i
                ],
                solver: this.calculateLCM.bind(this),
                name: 'LCM Calculation',
                category: 'hcf_lcm',
                description: 'Calculates least common multiple'
            },

            modular_arithmetic: {
                patterns: [
                    /\d+.*mod.*\d+/i,
                    /modulo.*\d+/i,
                    /congruence/i,
                    /\d+.*≡.*\(mod.*\d+\)/i
                ],
                solver: this.solveModularArithmetic.bind(this),
                name: 'Modular Arithmetic',
                category: 'modular_arithmetic',
                description: 'Performs modular arithmetic operations'
            },

            modular_inverse: {
                patterns: [
                    /modular.*inverse/i,
                    /inverse.*mod/i,
                    /multiplicative.*inverse/i
                ],
                solver: this.findModularInverse.bind(this),
                name: 'Modular Inverse',
                category: 'modular_arithmetic',
                description: 'Finds modular multiplicative inverse'
            },

            divisibility_test: {
                patterns: [
                    /\d+.*divisible.*\d+/i,
                    /divisibility.*test/i,
                    /\d+.*divides.*\d+/i
                ],
                solver: this.testDivisibility.bind(this),
                name: 'Divisibility Test',
                category: 'divisibility',
                description: 'Tests if one number divides another'
            },

            divisor_count: {
                patterns: [
                    /number.*of.*divisors/i,
                    /count.*divisors/i,
                    /how.*many.*divisors/i,
                    /divisor.*function/i
                ],
                solver: this.countDivisors.bind(this),
                name: 'Divisor Count',
                category: 'divisibility',
                description: 'Counts number of divisors'
            },

            sum_of_divisors: {
                patterns: [
                    /sum.*divisors/i,
                    /divisor.*sum/i,
                    /sigma.*function/i
                ],
                solver: this.sumOfDivisors.bind(this),
                name: 'Sum of Divisors',
                category: 'divisibility',
                description: 'Calculates sum of all divisors'
            },

            rational_test: {
                patterns: [
                    /is.*rational/i,
                    /rational.*number/i,
                    /check.*rationality/i
                ],
                solver: this.testRationality.bind(this),
                name: 'Rationality Test',
                category: 'rational_irrational',
                description: 'Tests if a number is rational'
            },

            simplify_fraction: {
                patterns: [
                    /simplify.*fraction/i,
                    /reduce.*fraction/i,
                    /\d+\/\d+.*simplify/i
                ],
                solver: this.simplifyFraction.bind(this),
                name: 'Simplify Fraction',
                category: 'rational_irrational',
                description: 'Simplifies a fraction to lowest terms'
            },

            decimal_to_fraction: {
                patterns: [
                    /decimal.*to.*fraction/i,
                    /convert.*\d+\.\d+.*fraction/i,
                    /\d+\.\d+.*as.*fraction/i
                ],
                solver: this.decimalToFraction.bind(this),
                name: 'Decimal to Fraction',
                category: 'rational_irrational',
                description: 'Converts decimal to fraction'
            },

            perfect_number: {
                patterns: [
                    /perfect.*number/i,
                    /is.*\d+.*perfect/i,
                    /abundant.*deficient/i
                ],
                solver: this.classifyNumber.bind(this),
                name: 'Perfect Number Classification',
                category: 'number_properties',
                description: 'Classifies as perfect, abundant, or deficient'
            },

            fibonacci: {
                patterns: [
                    /fibonacci.*\d+/i,
                    /fib\(\d+\)/i,
                    /\d+.*th.*fibonacci/i
                ],
                solver: this.calculateFibonacci.bind(this),
                name: 'Fibonacci Number',
                category: 'number_properties',
                description: 'Calculates nth Fibonacci number'
            },

            linear_diophantine: {
                patterns: [
                    /\d+x.*\d+y.*=.*\d+/i,
                    /diophantine.*equation/i,
                    /integer.*solutions/i
                ],
                solver: this.solveLinearDiophantine.bind(this),
                name: 'Linear Diophantine Equation',
                category: 'number_properties',
                description: 'Solves linear Diophantine equations'
            },

            pythagorean_triple: {
                patterns: [
                    /pythagorean.*triple/i,
                    /\d+.*\d+.*\d+.*right.*triangle/i,
                    /a².*b².*c²/i
                ],
                solver: this.checkPythagoreanTriple.bind(this),
                name: 'Pythagorean Triple',
                category: 'number_properties',
                description: 'Checks or generates Pythagorean triples'
            },

            euler_totient: {
                patterns: [
                    /euler.*totient/i,
                    /phi.*function/i,
                    /φ\(\d+\)/i,
                    /totient.*\d+/i
                ],
                solver: this.eulerTotient.bind(this),
                name: 'Euler Totient Function',
                category: 'number_properties',
                description: 'Calculates Euler\'s totient function φ(n)'
            },

            base_conversion: {
                patterns: [
                    /convert.*base/i,
                    /\d+.*base.*\d+.*to.*base.*\d+/i,
                    /binary.*decimal/i,
                    /hexadecimal/i
                ],
                solver: this.convertBase.bind(this),
                name: 'Base Conversion',
                category: 'number_properties',
                description: 'Converts between number bases'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            prime_test: {
                'Check divisibility': [
                    'Forgetting to check up to √n only',
                    'Not considering 2 as the only even prime',
                    'Incorrectly classifying 1 as prime'
                ]
            },
            gcd_calculation: {
                'Apply Euclidean algorithm': [
                    'Confusing dividend and divisor in algorithm',
                    'Stopping too early before remainder is 0',
                    'Sign errors with negative numbers'
                ]
            },
            modular_arithmetic: {
                'Calculate remainder': [
                    'Forgetting remainder must be non-negative',
                    'Confusing a mod n with a - n',
                    'Not reducing intermediate results'
                ]
            },
            prime_factorization: {
                'Find prime factors': [
                    'Missing repeated prime factors',
                    'Not continuing division until quotient is 1',
                    'Incorrectly identifying composite factors as prime'
                ]
            },
            divisibility: {
                'Apply divisibility rules': [
                    'Confusing rules for different numbers (3 vs 9, 4 vs 8)',
                    'Forgetting to check all digits for sum-based rules',
                    'Misapplying alternating sum rule for 11'
                ]
            },
            rational_irrational: {
                'Classify number': [
                    'Assuming all decimals are irrational',
                    'Not recognizing repeating decimals as rational',
                    'Confusing √n where n is perfect square'
                ]
            }
        };

        this.errorPrevention = {
            prime_checking: {
                reminder: 'Only check divisibility up to √n for efficiency',
                method: 'Use trial division with primes only'
            },
            gcd_steps: {
                reminder: 'Continue algorithm until remainder is exactly 0',
                method: 'Track each step: dividend = divisor × quotient + remainder'
            },
            modular_reduction: {
                reminder: 'Always express result as non-negative remainder less than modulus',
                method: 'If negative, add modulus to make positive'
            },
            factorization_completeness: {
                reminder: 'Continue dividing until quotient becomes 1',
                method: 'Check if quotient is composite after each division'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this property holds and its mathematical meaning',
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
                focus: 'Formal mathematical rules and properties',
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

    // MAIN SOLVER METHOD
    solveNumberTheoryProblem(config) {
        const { problem, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseNumberTheoryProblem(problem, parameters, problemType, context);
            this.currentSolution = this.solveNumberTheoryProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateNumberTheorySteps(this.currentProblem, this.currentSolution);
            this.generateNumberTheoryGraphData();
            this.generateNumberTheoryWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                steps: this.solutionSteps
            };

        } catch (error) {
            throw new Error(`Failed to solve number theory problem: ${error.message}`);
        }
    }

    parseNumberTheoryProblem(problem, parameters = {}, problemType = null, context = {}) {
        const cleanInput = problem ? this.cleanMathExpression(problem) : '';

        if (problemType && this.numberTheoryTypes[problemType]) {
            return {
                originalInput: problem || `${problemType} problem`,
                cleanInput: cleanInput,
                type: problemType,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        for (const [type, config] of Object.entries(this.numberTheoryTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(problem)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractNumberTheoryParameters(match, type, problem);

                    return {
                        originalInput: problem,
                        cleanInput: cleanInput,
                        type: type,
                        parameters: { ...extractedParams, ...parameters },
                        context: { ...context },
                        match: match,
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        throw new Error(`Unable to recognize number theory problem type from: ${problem}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/≡/g, 'equiv')
            .replace(/∣/g, '|')
            .replace(/φ/g, 'phi')
            .trim();
    }

    extractNumberTheoryParameters(match, type, problem) {
        const params = {};
        
        // Extract numbers from problem string
        const numbers = problem.match(/\d+/g);
        
        if (numbers) {
            if (type === 'prime_test' || type === 'prime_factorization' || type === 'perfect_number' || 
                type === 'euler_totient' || type === 'fibonacci' || type === 'find_primes') {
                params.n = parseInt(numbers[0]);
            }
            
            if ((type === 'gcd_calculation' || type === 'lcm_calculation' || type === 'divisibility_test') && numbers.length >= 2) {
                params.a = parseInt(numbers[0]);
                params.b = parseInt(numbers[1]);
            }
            
            if (type === 'modular_arithmetic' && numbers.length >= 2) {
                params.a = parseInt(numbers[0]);
                params.n = parseInt(numbers[numbers.length - 1]);
                if (numbers.length >= 3) {
                    params.b = parseInt(numbers[1]);
                }
            }
            
            if (type === 'linear_diophantine' && numbers.length >= 3) {
                params.a = parseInt(numbers[0]);
                params.b = parseInt(numbers[1]);
                params.c = parseInt(numbers[2]);
            }
            
            if (type === 'base_conversion' && numbers.length >= 3) {
                params.number = numbers[0];
                params.fromBase = parseInt(numbers[1]);
                params.toBase = parseInt(numbers[2]);
            }
        }

        return params;
    }

    solveNumberTheoryProblem_Internal(problem) {
        const solver = this.numberTheoryTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for number theory problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // NUMBER THEORY SOLVERS

    testPrimality(problem) {
        const { n } = problem.parameters;
        
        if (n < 2) {
            return {
                number: n,
                isPrime: false,
                reason: 'Numbers less than 2 are not prime by definition',
                category: 'prime_numbers',
                solutionType: 'not_prime'
            };
        }

        if (n === 2) {
            return {
                number: n,
                isPrime: true,
                reason: '2 is the only even prime number',
                category: 'prime_numbers',
                solutionType: 'prime'
            };
        }

        if (n % 2 === 0) {
            return {
                number: n,
                isPrime: false,
                reason: 'Even numbers greater than 2 are divisible by 2',
                smallestFactor: 2,
                category: 'prime_numbers',
                solutionType: 'not_prime'
            };
        }

        const limit = Math.floor(Math.sqrt(n));
        const divisorsChecked = [];

        for (let i = 3; i <= limit; i += 2) {
            divisorsChecked.push(i);
            if (n % i === 0) {
                return {
                    number: n,
                    isPrime: false,
                    reason: `${n} is divisible by ${i}`,
                    smallestFactor: i,
                    factorization: `${n} = ${i} × ${n / i}`,
                    divisorsChecked: divisorsChecked,
                    checkLimit: limit,
                    category: 'prime_numbers',
                    solutionType: 'not_prime'
                };
            }
        }

        return {
            number: n,
            isPrime: true,
            reason: `No divisors found between 2 and ${limit}`,
            divisorsChecked: divisorsChecked,
            checkLimit: limit,
            category: 'prime_numbers',
            solutionType: 'prime'
        };
    }

    primeFactorization(problem) {
        const { n } = problem.parameters;
        
        if (n < 2) {
            return {
                number: n,
                factors: [],
                reason: 'Numbers less than 2 have no prime factorization',
                category: 'prime_numbers',
                solutionType: 'no_factorization'
            };
        }

        const factors = [];
        const steps = [];
        let current = n;
        let divisor = 2;

        while (current > 1) {
            if (current % divisor === 0) {
                factors.push(divisor);
                steps.push({
                    divisor: divisor,
                    quotient: current / divisor,
                    expression: `${current} = ${divisor} × ${current / divisor}`
                });
                current = current / divisor;
            } else {
                divisor = divisor === 2 ? 3 : divisor + 2;
                if (divisor * divisor > current && current > 1) {
                    factors.push(current);
                    steps.push({
                        divisor: current,
                        quotient: 1,
                        expression: `${current} is prime`
                    });
                    current = 1;
                }
            }
        }

        // Create exponential form
        const factorCounts = {};
        factors.forEach(f => {
            factorCounts[f] = (factorCounts[f] || 0) + 1;
        });

        const exponentialForm = Object.entries(factorCounts)
            .map(([prime, count]) => count > 1 ? `${prime}^${count}` : prime)
            .join(' × ');

        const standardForm = factors.join(' × ');

        return {
            number: n,
            factors: factors,
            uniquePrimes: Object.keys(factorCounts).map(Number),
            exponentialForm: exponentialForm,
            standardForm: standardForm,
            factorCounts: factorCounts,
            steps: steps,
            category: 'prime_numbers',
            solutionType: 'factorization_complete'
        };
    }

    findPrimesUpTo(problem) {
        const { n } = problem.parameters;
        
        if (n < 2) {
            return {
                limit: n,
                primes: [],
                count: 0,
                reason: 'No primes less than 2',
                category: 'prime_numbers'
            };
        }

        // Sieve of Eratosthenes
        const isPrime = new Array(n + 1).fill(true);
        isPrime[0] = isPrime[1] = false;

        const sieveSteps = [];

        for (let i = 2; i * i <= n; i++) {
            if (isPrime[i]) {
                const multiples = [];
                for (let j = i * i; j <= n; j += i) {
                    if (isPrime[j]) {
                        isPrime[j] = false;
                        multiples.push(j);
                    }
                }
                if (multiples.length > 0) {
                    sieveSteps.push({
                        prime: i,
                        multiplesMarked: multiples,
                        description: `Mark multiples of ${i} starting from ${i * i}`
                    });
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
            sieveSteps: sieveSteps,
            method: 'Sieve of Eratosthenes',
            category: 'prime_numbers',
            solutionType: 'primes_found'
        };
    }

    calculateGCD(problem) {
        const { a, b } = problem.parameters;
        
        let x = Math.abs(a);
        let y = Math.abs(b);
        const steps = [];

        steps.push({
            step: 'Start',
            a: x,
            b: y,
            description: `Find GCD of ${x} and ${y} using Euclidean algorithm`
        });

        while (y !== 0) {
            const quotient = Math.floor(x / y);
            const remainder = x % y;
            
            steps.push({
                step: 'Division',
                dividend: x,
                divisor: y,
                quotient: quotient,
                remainder: remainder,
                expression: `${x} = ${y} × ${quotient} + ${remainder}`
            });

            x = y;
            y = remainder;
        }

        steps.push({
            step: 'Result',
            gcd: x,
            description: `GCD is ${x} (last non-zero remainder)`
        });

        return {
            a: Math.abs(a),
            b: Math.abs(b),
            gcd: x,
            steps: steps,
            method: 'Euclidean Algorithm',
            properties: {
                dividesBoth: `${x} divides both ${Math.abs(a)} and ${Math.abs(b)}`,
                linearCombination: 'Can be expressed as ax + by = gcd(a,b) (Bézout\'s identity)'
            },
            category: 'hcf_lcm',
            solutionType: 'gcd_found'
        };
    }

    calculateLCM(problem) {
        const { a, b } = problem.parameters;
        
        // First calculate GCD
        const gcdResult = this.calculateGCD(problem);
        const gcd = gcdResult.gcd;
        
        const lcm = Math.abs((a * b) / gcd);

        return {
            a: Math.abs(a),
            b: Math.abs(b),
            gcd: gcd,
            lcm: lcm,
            formula: `LCM(a,b) = (a × b) / GCD(a,b)`,
            calculation: `LCM(${Math.abs(a)},${Math.abs(b)}) = (${Math.abs(a)} × ${Math.abs(b)}) / ${gcd} = ${Math.abs(a * b)} / ${gcd} = ${lcm}`,
            properties: {
                multipleOfBoth: `${lcm} is divisible by both ${Math.abs(a)} and ${Math.abs(b)}`,
                smallest: 'This is the smallest such positive number'
            },
            gcdSteps: gcdResult.steps,
            category: 'hcf_lcm',
            solutionType: 'lcm_found'
        };
    }

    solveModularArithmetic(problem) {
        const { a, b, n, operation } = problem.parameters;
        
        const reduceModulo = (num, mod) => {
            let result = num % mod;
            return result < 0 ? result + mod : result;
        };

        if (operation === 'add' && b !== undefined) {
            const result = reduceModulo(a + b, n);
            return {
                operation: 'addition',
                expression: `(${a} + ${b}) mod ${n}`,
                steps: [
                    { step: 'Add numbers', value: a + b, description: `${a} + ${b} = ${a + b}` },
                    { step: 'Reduce modulo n', value: result, description: `${a + b} mod ${n} = ${result}` }
                ],
                result: result,
                verification: `${result} ≡ ${a} + ${b} (mod ${n})`,
                category: 'modular_arithmetic'
            };
        }

        if (operation === 'multiply' && b !== undefined) {
            const result = reduceModulo(a * b, n);
            return {
                operation: 'multiplication',
                expression: `(${a} × ${b}) mod ${n}`,
                steps: [
                    { step: 'Multiply numbers', value: a * b, description: `${a} × ${b} = ${a * b}` },
                    { step: 'Reduce modulo n', value: result, description: `${a * b} mod ${n} = ${result}` }
                ],
                result: result,
                verification: `${result} ≡ ${a} × ${b} (mod ${n})`,
                category: 'modular_arithmetic'
            };
        }

        // Simple modulo reduction
        const result = reduceModulo(a, n);
        return {
            operation: 'reduction',
            expression: `${a} mod ${n}`,
            result: result,
            quotient: Math.floor(a / n),
            remainder: result,
            divisionForm: `${a} = ${n} × ${Math.floor(a / n)} + ${result}`,
            category: 'modular_arithmetic',
            solutionType: 'modular_reduced'
        };
    }

    findModularInverse(problem) {
        const { a, n } = problem.parameters;
        
        // Extended Euclidean Algorithm
        const extendedGCD = (a, b) => {
            if (b === 0) {
                return { gcd: a, x: 1, y: 0 };
            }
            
            const result = extendedGCD(b, a % b);
            const x = result.y;
            const y = result.x - Math.floor(a / b) * result.y;
            
            return { gcd: result.gcd, x: x, y: y };
        };

        const result = extendedGCD(a, n);
        
        if (result.gcd !== 1) {
            return {
                a: a,
                n: n,
                exists: false,
                reason: `GCD(${a}, ${n}) = ${result.gcd} ≠ 1, so modular inverse does not exist`,
                category: 'modular_arithmetic',
                solutionType: 'no_inverse'
            };
        }

        let inverse = result.x % n;
        if (inverse < 0) inverse += n;

        return {
            a: a,
            n: n,
            exists: true,
            inverse: inverse,
            verification: `${a} × ${inverse} ≡ ${(a * inverse) % n} ≡ 1 (mod ${n})`,
            bezoutCoefficients: { x: result.x, y: result.y },
            bezoutIdentity: `${a} × ${result.x} + ${n} × ${result.y} = 1`,
            category: 'modular_arithmetic',
            solutionType: 'inverse_found'
        };
    }

    testDivisibility(problem) {
        const { a, b } = problem.parameters;
        
        const quotient = Math.floor(a / b);
        const remainder = a % b;
        const divides = remainder === 0;

        const result = {
            dividend: a,
            divisor: b,
            divides: divides,
            quotient: quotient,
            remainder: remainder,
            divisionExpression: `${a} = ${b} × ${quotient} + ${remainder}`,
            category: 'divisibility',
            solutionType: divides ? 'divisible' : 'not_divisible'
        };

        // Add divisibility rule explanation if applicable
        if (b >= 2 && b <= 11) {
            result.divisibilityRule = this.getDivisibilityRule(a, b);
        }

        return result;
    }

    getDivisibilityRule(n, divisor) {
        const rules = {
            2: {
                rule: 'Last digit must be even (0, 2, 4, 6, 8)',
                check: n % 2 === 0,
                explanation: `Last digit of ${n} is ${n % 10}`
            },
            3: {
                rule: 'Sum of digits must be divisible by 3',
                check: n % 3 === 0,
                explanation: this.digitSum(n, 'Sum of digits')
            },
            4: {
                rule: 'Last two digits must form number divisible by 4',
                check: n % 4 === 0,
                explanation: `Last two digits: ${n % 100}`
            },
            5: {
                rule: 'Last digit must be 0 or 5',
                check: n % 5 === 0,
                explanation: `Last digit is ${n % 10}`
            },
            6: {
                rule: 'Must be divisible by both 2 and 3',
                check: n % 6 === 0,
                explanation: 'Check both divisibility by 2 and 3'
            },
            8: {
                rule: 'Last three digits must form number divisible by 8',
                check: n % 8 === 0,
                explanation: `Last three digits: ${n % 1000}`
            },
            9: {
                rule: 'Sum of digits must be divisible by 9',
                check: n % 9 === 0,
                explanation: this.digitSum(n, 'Sum of digits')
            },
            10: {
                rule: 'Last digit must be 0',
                check: n % 10 === 0,
                explanation: `Last digit is ${n % 10}`
            },
            11: {
                rule: 'Alternating sum of digits must be divisible by 11',
                check: n % 11 === 0,
                explanation: this.alternatingDigitSum(n)
            }
        };

        return rules[divisor] || { rule: 'No simple rule available', check: n % divisor === 0 };
    }

    digitSum(n, label = 'Sum') {
        const digits = Math.abs(n).toString().split('').map(Number);
        const sum = digits.reduce((a, b) => a + b, 0);
        return `${label}: ${digits.join(' + ')} = ${sum}`;
    }

    alternatingDigitSum(n) {
        const digits = Math.abs(n).toString().split('').map(Number);
        let sum = 0;
        for (let i = 0; i < digits.length; i++) {
            sum += (i % 2 === 0 ? 1 : -1) * digits[digits.length - 1 - i];
        }
        return `Alternating sum: ${sum}`;
    }

    countDivisors(problem) {
        const { n } = problem.parameters;
        
        if (n < 1) {
            return {
                number: n,
                count: 0,
                divisors: [],
                reason: 'No divisors for numbers less than 1',
                category: 'divisibility'
            };
        }

        // Get prime factorization
        const factorization = this.primeFactorization({ parameters: { n } });
        
        // Count divisors using formula: (a₁+1)(a₂+1)...(aₖ+1)
        let count = 1;
        for (const exponent of Object.values(factorization.factorCounts || {})) {
            count *= (exponent + 1);
        }

        // Find all divisors
        const divisors = [];
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                divisors.push(i);
                if (i !== n / i) {
                    divisors.push(n / i);
                }
            }
        }
        divisors.sort((a, b) => a - b);

        return {
            number: n,
            count: count,
            divisors: divisors,
            primeFactorization: factorization.exponentialForm,
            formula: 'τ(n) = (a₁+1)(a₂+1)...(aₖ+1) where n = p₁^a₁ × p₂^a₂ × ... × pₖ^aₖ',
            calculation: this.calculateDivisorFormula(factorization.factorCounts),
            category: 'divisibility',
            solutionType: 'divisors_counted'
        };
    }

    calculateDivisorFormula(factorCounts) {
        if (!factorCounts || Object.keys(factorCounts).length === 0) {
            return 'τ(1) = 1';
        }

        const terms = Object.entries(factorCounts)
            .map(([prime, exp]) => `(${exp}+1)`)
            .join(' × ');
        
        const values = Object.values(factorCounts)
            .map(exp => exp + 1)
            .join(' × ');
        
        const result = Object.values(factorCounts)
            .reduce((prod, exp) => prod * (exp + 1), 1);

        return `τ(n) = ${terms} = ${values} = ${result}`;
    }

    sumOfDivisors(problem) {
        const { n } = problem.parameters;
        
        if (n < 1) {
            return {
                number: n,
                sum: 0,
                divisors: [],
                reason: 'No divisors for numbers less than 1',
                category: 'divisibility'
            };
        }

        const divisorResult = this.countDivisors(problem);
        const sum = divisorResult.divisors.reduce((a, b) => a + b, 0);

        return {
            number: n,
            sum: sum,
            divisors: divisorResult.divisors,
            calculation: `${divisorResult.divisors.join(' + ')} = ${sum}`,
            primeFactorization: divisorResult.primeFactorization,
            category: 'divisibility',
            solutionType: 'sum_calculated'
        };
    }

    testRationality(problem) {
        const { value, numerator, denominator } = problem.parameters;
        
        if (numerator !== undefined && denominator !== undefined) {
            return {
                type: 'fraction',
                numerator: numerator,
                denominator: denominator,
                isRational: denominator !== 0,
                reason: denominator !== 0 ? 'Can be expressed as p/q where q ≠ 0' : 'Denominator is zero',
                category: 'rational_irrational'
            };
        }

        if (value !== undefined) {
            const str = value.toString();
            
            // Check if it's a terminating decimal
            if (str.includes('.')) {
                const decimalPlaces = str.split('.')[1].length;
                const numerator = parseInt(str.replace('.', ''));
                const denominator = Math.pow(10, decimalPlaces);
                
                return {
                    type: 'decimal',
                    value: value,
                    isRational: true,
                    representation: `${numerator}/${denominator}`,
                    reason: 'Terminating decimal can be expressed as fraction',
                    category: 'rational_irrational'
                };
            }
        }

        return {
            isRational: true,
            reason: 'All integers are rational (can be written as n/1)',
            category: 'rational_irrational'
        };
    }

    simplifyFraction(problem) {
        const { numerator, denominator } = problem.parameters;
        
        if (denominator === 0) {
            return {
                original: `${numerator}/${denominator}`,
                simplified: 'undefined',
                reason: 'Division by zero is undefined',
                category: 'rational_irrational'
            };
        }

        const gcdResult = this.calculateGCD({ parameters: { a: numerator, b: denominator } });
        const gcd = gcdResult.gcd;
        
        const simplifiedNum = numerator / gcd;
        const simplifiedDen = denominator / gcd;

        // Handle sign
        const sign = (simplifiedNum < 0) !== (simplifiedDen < 0) ? -1 : 1;
        const finalNum = sign * Math.abs(simplifiedNum);
        const finalDen = Math.abs(simplifiedDen);

        return {
            original: `${numerator}/${denominator}`,
            gcd: gcd,
            simplified: finalDen === 1 ? `${finalNum}` : `${finalNum}/${finalDen}`,
            numerator: finalNum,
            denominator: finalDen,
            steps: [
                { step: 'Find GCD', value: gcd, description: `GCD(${Math.abs(numerator)}, ${Math.abs(denominator)}) = ${gcd}` },
                { step: 'Divide both by GCD', description: `${numerator}/${gcd} = ${simplifiedNum}, ${denominator}/${gcd} = ${simplifiedDen}` },
                { step: 'Adjust signs', result: `${finalNum}/${finalDen}` }
            ],
            category: 'rational_irrational',
            solutionType: 'fraction_simplified'
        };
    }

    decimalToFraction(problem) {
        const { decimal } = problem.parameters;
        
        const str = decimal.toString();
        
        if (!str.includes('.')) {
            return {
                decimal: decimal,
                fraction: `${decimal}/1`,
                numerator: decimal,
                denominator: 1,
                category: 'rational_irrational'
            };
        }

        const decimalPlaces = str.split('.')[1].length;
        let numerator = parseInt(str.replace('.', ''));
        let denominator = Math.pow(10, decimalPlaces);

        // Simplify
        const simplified = this.simplifyFraction({ parameters: { numerator, denominator } });

        return {
            decimal: decimal,
            fraction: simplified.simplified,
            numerator: simplified.numerator,
            denominator: simplified.denominator,
            steps: [
                { step: 'Count decimal places', places: decimalPlaces },
                { step: 'Create fraction', unsimplified: `${numerator}/${denominator}` },
                { step: 'Simplify', simplified: simplified.simplified }
            ],
            category: 'rational_irrational',
            solutionType: 'decimal_converted'
        };
    }

    classifyNumber(problem) {
        const { n } = problem.parameters;
        
        if (n < 1) {
            return {
                number: n,
                classification: 'undefined',
                reason: 'Classification only applies to positive integers',
                category: 'number_properties'
            };
        }

        const divisorResult = this.countDivisors({ parameters: { n } });
        const sumResult = this.sumOfDivisors({ parameters: { n } });
        
        // Sum of proper divisors (excluding n itself)
        const properDivisorSum = sumResult.sum - n;

        let classification;
        let relationship;

        if (properDivisorSum === n) {
            classification = 'Perfect';
            relationship = '=';
        } else if (properDivisorSum > n) {
            classification = 'Abundant';
            relationship = '>';
        } else {
            classification = 'Deficient';
            relationship = '<';
        }

        const properDivisors = divisorResult.divisors.filter(d => d !== n);

        return {
            number: n,
            classification: classification,
            properDivisors: properDivisors,
            properDivisorSum: properDivisorSum,
            relationship: `${properDivisorSum} ${relationship} ${n}`,
            abundanceIndex: properDivisorSum - n,
            calculation: properDivisors.length > 0 ? `${properDivisors.join(' + ')} = ${properDivisorSum}` : 'No proper divisors',
            interpretation: this.getNumberClassificationInterpretation(classification, n),
            category: 'number_properties',
            solutionType: 'number_classified'
        };
    }

    getNumberClassificationInterpretation(classification, n) {
        const interpretations = {
            'Perfect': `${n} is a perfect number because the sum of its proper divisors equals itself`,
            'Abundant': `${n} is an abundant number because the sum of its proper divisors exceeds itself`,
            'Deficient': `${n} is a deficient number because the sum of its proper divisors is less than itself`
        };
        return interpretations[classification];
    }

    calculateFibonacci(problem) {
        const { n } = problem.parameters;
        
        if (n < 0) {
            return {
                n: n,
                value: undefined,
                reason: 'Fibonacci sequence is typically defined for non-negative integers',
                category: 'number_properties'
            };
        }

        if (n === 0) return { n: 0, value: 0, sequence: [0], category: 'number_properties' };
        if (n === 1) return { n: 1, value: 1, sequence: [0, 1], category: 'number_properties' };

        const sequence = [0, 1];
        const steps = [
            { index: 0, value: 0, calculation: 'F(0) = 0 (base case)' },
            { index: 1, value: 1, calculation: 'F(1) = 1 (base case)' }
        ];

        for (let i = 2; i <= n; i++) {
            const next = sequence[i - 1] + sequence[i - 2];
            sequence.push(next);
            steps.push({
                index: i,
                value: next,
                calculation: `F(${i}) = F(${i-1}) + F(${i-2}) = ${sequence[i-1]} + ${sequence[i-2]} = ${next}`
            });
        }

        const goldenRatio = (1 + Math.sqrt(5)) / 2;
        const ratio = n > 1 ? sequence[n] / sequence[n - 1] : null;

        return {
            n: n,
            value: sequence[n],
            sequence: sequence,
            steps: steps,
            properties: {
                goldenRatio: goldenRatio,
                ratioToGolden: ratio,
                convergence: ratio ? `F(${n})/F(${n-1}) ≈ ${ratio.toFixed(6)}, φ ≈ ${goldenRatio.toFixed(6)}` : null
            },
            category: 'number_properties',
            solutionType: 'fibonacci_calculated'
        };
    }

    solveLinearDiophantine(problem) {
        const { a, b, c } = problem.parameters;
        
        // First check if solution exists using GCD
        const gcdResult = this.calculateGCD({ parameters: { a, b } });
        const gcd = gcdResult.gcd;

        if (c % gcd !== 0) {
            return {
                equation: `${a}x + ${b}y = ${c}`,
                solutionExists: false,
                reason: `GCD(${a}, ${b}) = ${gcd}, which does not divide ${c}`,
                theorem: 'Linear Diophantine equation ax + by = c has integer solutions if and only if gcd(a,b) divides c',
                category: 'number_properties',
                solutionType: 'no_solution'
            };
        }

        // Find particular solution using Extended Euclidean Algorithm
        const extendedGCD = (a, b) => {
            if (b === 0) return { gcd: a, x: 1, y: 0 };
            const result = extendedGCD(b, a % b);
            return {
                gcd: result.gcd,
                x: result.y,
                y: result.x - Math.floor(a / b) * result.y
            };
        };

        const bezout = extendedGCD(a, b);
        
        // Scale to get particular solution for ax + by = c
        const scale = c / gcd;
        const x0 = bezout.x * scale;
        const y0 = bezout.y * scale;

        // General solution
        const generalX = `x = ${x0} + ${b/gcd}t`;
        const generalY = `y = ${y0} - ${a/gcd}t`;

        // Generate a few particular solutions
        const particularSolutions = [];
        for (let t = -2; t <= 2; t++) {
            particularSolutions.push({
                t: t,
                x: x0 + (b / gcd) * t,
                y: y0 - (a / gcd) * t
            });
        }

        return {
            equation: `${a}x + ${b}y = ${c}`,
            solutionExists: true,
            gcd: gcd,
            particularSolution: { x: x0, y: y0 },
            generalSolution: {
                x: generalX,
                y: generalY,
                parameter: 't ∈ ℤ (any integer)'
            },
            bezoutIdentity: `${a}(${bezout.x}) + ${b}(${bezout.y}) = ${gcd}`,
            particularSolutions: particularSolutions,
            verification: `${a}(${x0}) + ${b}(${y0}) = ${a * x0 + b * y0} = ${c}`,
            category: 'number_properties',
            solutionType: 'infinite_solutions'
        };
    }

    checkPythagoreanTriple(problem) {
        const { a, b, c, generate } = problem.parameters;

        if (generate) {
            // Generate Pythagorean triples using Euclid's formula
            // For m > n > 0: a = m²-n², b = 2mn, c = m²+n²
            const triples = [];
            const limit = generate.limit || 5;
            
            for (let m = 2; m <= limit; m++) {
                for (let n = 1; n < m; n++) {
                    if (this.calculateGCD({ parameters: { a: m, b: n } }).gcd === 1 && (m - n) % 2 === 1) {
                        const triple = {
                            a: m * m - n * n,
                            b: 2 * m * n,
                            c: m * m + n * n,
                            m: m,
                            n: n,
                            type: 'primitive'
                        };
                        triple.verification = `${triple.a}² + ${triple.b}² = ${triple.a * triple.a} + ${triple.b * triple.b} = ${triple.a * triple.a + triple.b * triple.b} = ${triple.c * triple.c} = ${triple.c}²`;
                        triples.push(triple);
                    }
                }
            }

            return {
                method: 'Euclid\'s formula',
                formula: 'a = m²-n², b = 2mn, c = m²+n²',
                triples: triples,
                category: 'number_properties',
                solutionType: 'triples_generated'
            };
        }

        // Check if given triple is Pythagorean
        if (a !== undefined && b !== undefined && c !== undefined) {
            const sorted = [a, b, c].sort((x, y) => x - y);
            const [leg1, leg2, hypotenuse] = sorted;

            const sumOfSquares = leg1 * leg1 + leg2 * leg2;
            const hypotenuseSquared = hypotenuse * hypotenuse;
            const isPythagorean = sumOfSquares === hypotenuseSquared;

            const gcd = this.calculateGCD({ parameters: { a: leg1, b: leg2 } }).gcd;
            const isPrimitive = gcd === 1;

            return {
                triple: [leg1, leg2, hypotenuse],
                isPythagorean: isPythagorean,
                calculation: `${leg1}² + ${leg2}² = ${leg1 * leg1} + ${leg2 * leg2} = ${sumOfSquares}`,
                hypotenuse: `${hypotenuse}² = ${hypotenuseSquared}`,
                verification: `${sumOfSquares} ${isPythagorean ? '=' : '≠'} ${hypotenuseSquared}`,
                isPrimitive: isPrimitive,
                gcd: gcd,
                category: 'number_properties',
                solutionType: isPythagorean ? 'valid_triple' : 'not_triple'
            };
        }

        return {
            error: 'Insufficient parameters for Pythagorean triple check',
            category: 'number_properties'
        };
    }

    eulerTotient(problem) {
        const { n } = problem.parameters;

        if (n < 1) {
            return {
                n: n,
                phi: 0,
                reason: 'Euler totient function is defined for positive integers',
                category: 'number_properties'
            };
        }

        if (n === 1) {
            return {
                n: 1,
                phi: 1,
                reason: 'φ(1) = 1 by definition',
                category: 'number_properties'
            };
        }

        // Get prime factorization
        const factorization = this.primeFactorization({ parameters: { n } });

        // φ(n) = n × ∏(1 - 1/p) for all prime factors p
        let phi = n;
        const calculations = [];

        for (const prime of factorization.uniquePrimes) {
            const oldPhi = phi;
            phi = phi * (prime - 1) / prime;
            calculations.push({
                prime: prime,
                factor: `(1 - 1/${prime}) = ${(prime - 1)}/${prime}`,
                result: phi
            });
        }

        // Count coprime numbers
        const coprimes = [];
        for (let i = 1; i <= n; i++) {
            if (this.calculateGCD({ parameters: { a: i, b: n } }).gcd === 1) {
                coprimes.push(i);
            }
        }

        return {
            n: n,
            phi: phi,
            primeFactorization: factorization.exponentialForm,
            formula: `φ(n) = n × ∏(1 - 1/p) for all prime divisors p`,
            calculations: calculations,
            coprimes: n <= 50 ? coprimes : null,
            coprimeCount: coprimes.length,
            interpretation: `There are ${phi} positive integers less than or equal to ${n} that are coprime to ${n}`,
            category: 'number_properties',
            solutionType: 'totient_calculated'
        };
    }

    convertBase(problem) {
        const { number, fromBase, toBase } = problem.parameters;

        if (fromBase < 2 || fromBase > 36 || toBase < 2 || toBase > 36) {
            return {
                error: 'Bases must be between 2 and 36',
                category: 'number_properties'
            };
        }

        // First convert to decimal (base 10)
        let decimalValue;
        const steps = [];

        if (fromBase === 10) {
            decimalValue = parseInt(number);
        } else {
            const digits = number.toString().toUpperCase().split('');
            decimalValue = 0;
            const conversionSteps = [];

            for (let i = 0; i < digits.length; i++) {
                const digit = digits[i];
                const digitValue = digit >= 'A' ? digit.charCodeAt(0) - 'A'.charCodeAt(0) + 10 : parseInt(digit);
                const position = digits.length - 1 - i;
                const placeValue = digitValue * Math.pow(fromBase, position);
                
                decimalValue += placeValue;
                conversionSteps.push({
                    digit: digit,
                    value: digitValue,
                    position: position,
                    calculation: `${digitValue} × ${fromBase}^${position} = ${placeValue}`
                });
            }

            steps.push({
                step: 'Convert to decimal',
                from: `${number} (base ${fromBase})`,
                to: `${decimalValue} (base 10)`,
                details: conversionSteps
            });
        }

        // Then convert from decimal to target base
        let result;
        if (toBase === 10) {
            result = decimalValue.toString();
        } else {
            const conversionSteps = [];
            let temp = decimalValue;
            const digits = [];

            while (temp > 0) {
                const remainder = temp % toBase;
                const quotient = Math.floor(temp / toBase);
                const digitChar = remainder < 10 ? remainder.toString() : String.fromCharCode('A'.charCodeAt(0) + remainder - 10);
                
                digits.unshift(digitChar);
                conversionSteps.push({
                    dividend: temp,
                    divisor: toBase,
                    quotient: quotient,
                    remainder: remainder,
                    digit: digitChar,
                    expression: `${temp} = ${toBase} × ${quotient} + ${remainder}`
                });
                
                temp = quotient;
            }

            result = digits.join('') || '0';

            steps.push({
                step: 'Convert from decimal',
                from: `${decimalValue} (base 10)`,
                to: `${result} (base ${toBase})`,
                details: conversionSteps,
                method: 'Repeated division, collect remainders in reverse order'
            });
        }

        return {
            original: number,
            fromBase: fromBase,
            toBase: toBase,
            result: result,
            decimalValue: decimalValue,
            steps: steps,
            verification: `${number}₍${fromBase}₎ = ${decimalValue}₍₁₀₎ = ${result}₍${toBase}₎`,
            category: 'number_properties',
            solutionType: 'base_converted'
        };
    }

    // STEP GENERATION
    generateNumberTheorySteps(problem, solution) {
        let baseSteps = this.generateBaseNumberTheorySteps(problem, solution);

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

        return baseSteps;
    }

    generateBaseNumberTheorySteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'prime_test':
                return this.generatePrimeTestSteps(problem, solution);
            case 'prime_factorization':
                return this.generateFactorizationSteps(problem, solution);
            case 'gcd_calculation':
                return this.generateGCDSteps(problem, solution);
            case 'lcm_calculation':
                return this.generateLCMSteps(problem, solution);
            case 'modular_arithmetic':
                return this.generateModularSteps(problem, solution);
            case 'divisibility_test':
                return this.generateDivisibilitySteps(problem, solution);
            case 'fibonacci':
                return this.generateFibonacciSteps(problem, solution);
            case 'linear_diophantine':
                return this.generateDiophantineSteps(problem, solution);
            default:
                return this.generateGenericSteps(problem, solution);
        }
    }

    generatePrimeTestSteps(problem, solution) {
        const { n } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Check basic cases',
            description: `Determine if ${n} falls into special prime categories`,
            expression: `n = ${n}`,
            reasoning: 'Numbers less than 2 are not prime; 2 is the only even prime',
            category: 'prime_numbers'
        });

        if (n < 2) {
            steps.push({
                stepNumber: 2,
                step: 'Conclusion',
                description: `${n} is not prime`,
                reasoning: 'By definition, primes must be natural numbers greater than 1',
                finalAnswer: true
            });
            return steps;
        }

        if (n === 2) {
            steps.push({
                stepNumber: 2,
                step: 'Conclusion',
                description: '2 is prime',
                reasoning: '2 is the only even prime number',
                finalAnswer: true
            });
            return steps;
        }

        if (n % 2 === 0) {
            steps.push({
                stepNumber: 2,
                step: 'Even number test',
                description: `${n} is divisible by 2`,
                expression: `${n} = 2 × ${n / 2}`,
                reasoning: 'All even numbers greater than 2 are composite',
                finalAnswer: true
            });
            return steps;
        }

        const limit = Math.floor(Math.sqrt(n));
        steps.push({
            stepNumber: 2,
            step: 'Determine test range',
            description: `Check divisibility by odd numbers from 3 to √${n}`,
            expression: `√${n} ≈ ${limit}`,
            reasoning: 'If n has a divisor greater than √n, it must also have one less than √n',
            visualHint: 'We only need to check up to the square root for efficiency'
        });

        let stepNum = 3;
        for (let i = 3; i <= limit; i += 2) {
            if (n % i === 0) {
                steps.push({
                    stepNumber: stepNum,
                    step: 'Found divisor',
                    description: `${n} is divisible by ${i}`,
                    expression: `${n} = ${i} × ${n / i}`,
                    reasoning: `Since ${i} divides ${n}, the number is composite`,
                    finalAnswer: true
                });
                return steps;
            }
        }

        steps.push({
            stepNumber: stepNum,
            step: 'Conclusion',
            description: `${n} is prime`,
            reasoning: `No divisors found in range [3, ${limit}]`,
            finalAnswer: true
        });

        return steps;
    }

    generateFactorizationSteps(problem, solution) {
        const steps = [];
        const { n } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Start factorization',
            description: `Find prime factorization of ${n}`,
            expression: `n = ${n}`,
            reasoning: 'We will repeatedly divide by smallest prime factors',
            method: 'Trial division starting with 2'
        });

        if (solution.steps) {
            solution.steps.forEach((factorStep, index) => {
                steps.push({
                    stepNumber: index + 2,
                    step: `Divide by ${factorStep.divisor}`,
                    description: factorStep.expression,
                    beforeExpression: factorStep.divisor === 2 && index === 0 ? `${n}` : null,
                    operation: `÷ ${factorStep.divisor}`,
                    afterExpression: `${factorStep.quotient}`,
                    reasoning: `${factorStep.divisor} is ${factorStep.quotient === 1 ? 'the last' : 'a'} prime factor`
                });
            });
        }

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Express in exponential form',
            description: `Prime factorization: ${solution.exponentialForm}`,
            expression: `${n} = ${solution.exponentialForm}`,
            reasoning: 'Group repeated prime factors using exponents',
            finalAnswer: true
        });

        return steps;
    }

    generateGCDSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Apply Euclidean Algorithm',
            description: `Find GCD(${solution.a}, ${solution.b})`,
            reasoning: 'Use repeated division: gcd(a,b) = gcd(b, a mod b)',
            method: 'Euclidean Algorithm'
        });

        if (solution.steps) {
            solution.steps.forEach((gcdStep, index) => {
                if (gcdStep.step === 'Division') {
                    steps.push({
                        stepNumber: index + 2,
                        step: 'Divide and find remainder',
                        description: gcdStep.expression,
                        beforeExpression: `gcd(${gcdStep.dividend}, ${gcdStep.divisor})`,
                        afterExpression: `gcd(${gcdStep.divisor}, ${gcdStep.remainder})`,
                        reasoning: 'Replace larger number with remainder',
                        quotient: gcdStep.quotient,
                        remainder: gcdStep.remainder
                    });
                }
            });
        }

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Result',
            description: `GCD = ${solution.gcd}`,
            expression: `gcd(${solution.a}, ${solution.b}) = ${solution.gcd}`,
            reasoning: 'The last non-zero remainder is the GCD',
            finalAnswer: true
        });

        return steps;
    }

    generateLCMSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Find GCD first',
            description: `Calculate GCD(${solution.a}, ${solution.b})`,
            reasoning: 'LCM can be found using: LCM(a,b) = (a × b) / GCD(a,b)',
            formula: solution.formula
        });

        steps.push({
            stepNumber: 2,
            step: 'GCD Result',
            description: `GCD(${solution.a}, ${solution.b}) = ${solution.gcd}`,
            expression: `gcd = ${solution.gcd}`
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate LCM',
            description: solution.calculation,
            expression: `LCM = ${solution.lcm}`,
            reasoning: 'Apply the LCM formula',
            finalAnswer: true
        });

        return steps;
    }

    generateModularSteps(problem, solution) {
        const steps = [];

        if (solution.operation === 'reduction') {
            steps.push({
                stepNumber: 1,
                step: 'Perform division',
                description: solution.divisionForm,
                reasoning: 'Divide to find quotient and remainder'
            });

            steps.push({
                stepNumber: 2,
                step: 'Result',
                description: `${problem.parameters.a} mod ${problem.parameters.n} = ${solution.result}`,
                expression: `${solution.result}`,
                reasoning: 'The remainder is the result of modular reduction',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateDivisibilitySteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Perform division',
            description: solution.divisionExpression,
            reasoning: 'Check if remainder is zero'
        });

        if (solution.divisibilityRule) {
            steps.push({
                stepNumber: 2,
                step: 'Apply divisibility rule',
                description: solution.divisibilityRule.rule,
                explanation: solution.divisibilityRule.explanation,
                reasoning: 'Quick test without full division'
            });
        }

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Conclusion',
            description: solution.divides ? `${solution.dividend} is divisible by ${solution.divisor}` : `${solution.dividend} is not divisible by ${solution.divisor}`,
            reasoning: `Remainder is ${solution.remainder}`,
            finalAnswer: true
        });

        return steps;
    }

    generateFibonacciSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Base cases',
            description: 'F(0) = 0, F(1) = 1',
            reasoning: 'These are the defined starting values'
        });

        if (solution.steps && solution.steps.length > 2) {
            const displaySteps = solution.steps.slice(2, Math.min(solution.steps.length, 7));
            displaySteps.forEach((fibStep, index) => {
                steps.push({
                    stepNumber: index + 2,
                    step: `Calculate F(${fibStep.index})`,
                    description: fibStep.calculation,
                    reasoning: 'Add previous two terms'
                });
            });

            if (solution.steps.length > 7) {
                steps.push({
                    stepNumber: steps.length + 1,
                    step: 'Continue pattern',
                    description: `... (continuing to F(${problem.parameters.n}))`,
                    reasoning: 'Same recursive pattern applies'
                });
            }
        }

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Result',
            description: `F(${problem.parameters.n}) = ${solution.value}`,
            expression: `${solution.value}`,
            finalAnswer: true
        });

        return steps;
    }

    generateDiophantineSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Check solvability',
            description: `Find GCD(${problem.parameters.a}, ${problem.parameters.b})`,
            reasoning: 'Solutions exist if and only if GCD divides the constant term'
        });

        if (!solution.solutionExists) {
            steps.push({
                stepNumber: 2,
                step: 'Conclusion',
                description: 'No integer solutions exist',
                reasoning: solution.reason,
                finalAnswer: true
            });
            return steps;
        }

        steps.push({
            stepNumber: 2,
            step: 'GCD divides c',
            description: `GCD = ${solution.gcd}, and ${solution.gcd} divides ${problem.parameters.c}`,
            reasoning: 'Solution exists - proceed to find it'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find particular solution',
            description: `One solution: x = ${solution.particularSolution.x}, y = ${solution.particularSolution.y}`,
            reasoning: 'Use Extended Euclidean Algorithm'
        });

        steps.push({
            stepNumber: 4,
            step: 'General solution',
            description: `x = ${solution.generalSolution.x}, y = ${solution.generalSolution.y}`,
            reasoning: 'All solutions form a parametric family',
            finalAnswer: true
        });

        return steps;
    }

    generateGenericSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Number theory problem',
            description: `Solve: ${problem.originalInput}`,
            reasoning: 'Apply appropriate number theory techniques',
            solution: solution
        }];
    }

    // ENHANCEMENT METHODS (adapted from linear version)
    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        return {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,
            explanations: {
                conceptual: this.getConceptualExplanation(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualExplanation(step, problem)
            },
            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),
            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabulary(step)
            }
        };
    }

    getConceptualExplanation(step, problem) {
        const explanations = {
            'Check basic cases': 'Before testing divisibility, we eliminate special cases that have known primality status',
            'Determine test range': 'Testing only up to √n is sufficient because divisors come in pairs',
            'Apply Euclidean Algorithm': 'The GCD is found by repeatedly replacing the larger number with the remainder',
            'Find particular solution': 'The Extended Euclidean Algorithm gives us coefficients for Bézout\'s identity',
            'Perform division': 'Division gives us the quotient and remainder, which determine divisibility'
        };
        return explanations[step.step] || 'This step advances our solution using number theory principles';
    }

    getProceduralExplanation(step) {
        if (step.operation) {
            return `Apply the operation: ${step.operation}`;
        }
        return 'Follow the algorithmic procedure for this step';
    }

    getVisualExplanation(step, problem) {
        const visualizations = {
            'prime_test': 'Imagine testing each potential divisor like checking if blocks divide evenly',
            'gcd_calculation': 'Picture the Euclidean algorithm as repeatedly measuring with smaller and smaller rulers',
            'prime_factorization': 'Visualize breaking down a number into its prime building blocks',
            'modular_arithmetic': 'Think of a clock where numbers wrap around at the modulus',
            'fibonacci': 'Each term is built by adding the two previous building blocks'
        };
        return visualizations[problem.type] || 'Visualize the mathematical transformation occurring';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const adaptations = {
            basic: {
                vocabulary: 'simple terms',
                detail: 'essential information only',
                format: 'short sentences'
            },
            intermediate: {
                vocabulary: 'standard math terms',
                detail: 'main concepts with brief explanations',
                format: 'clear step-by-step format'
            },
            detailed: {
                vocabulary: 'full mathematical terminology',
                detail: 'comprehensive explanations with theory',
                format: 'thorough analysis with multiple perspectives'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery approach',
                format: 'questions leading to understanding'
            }
        };

        const level = adaptations[explanationLevel] || adaptations.intermediate;
        return {
            adaptedDescription: this.adaptLanguageLevel(step.description, level),
            adaptedReasoning: this.adaptLanguageLevel(step.reasoning, level),
            complexityLevel: explanationLevel
        };
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
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    addErrorPrevention(step, problemType) {
        const mistakes = this.commonMistakes[problemType]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTips(step, problemType),
                warningFlags: this.identifyWarningFlags(step, problemType)
            }
        };
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestions(step, problem),
                hints: this.generateProgressiveHints(step)
            }
        }));
    }

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || 'result from previous step'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            connection: 'This step builds logically on what we just found'
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Check basic cases': ['Always verify n ≥ 2 before testing primality'],
            'Apply Euclidean Algorithm': ['Continue until remainder is exactly 0', 'Keep track of each division step'],
            'Perform division': ['Remember remainder must be non-negative and less than divisor']
        };

        return tips[step.step] || ['Double-check calculations', 'Verify each operation'];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            prime_test: step.step === 'Determine test range' ? ['Only test up to √n, not n itself'] : [],
            gcd_calculation: step.step === 'Apply Euclidean Algorithm' ? ['Don\'t stop until remainder is 0'] : [],
            modular_arithmetic: step.step === 'Perform division' ? ['Result must be between 0 and n-1'] : []
        };

        return warnings[problemType] || [];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Check basic cases': ['Is this number greater than 1?', 'Is it even or odd?'],
            'Determine test range': ['Why do we only need to check up to √n?', 'What would happen if we checked beyond √n?'],
            'Apply Euclidean Algorithm': ['What is the remainder?', 'When do we stop dividing?'],
            'Find particular solution': ['How does the Extended Euclidean Algorithm help?', 'What does Bézout\'s identity tell us?']
        };

        return questions[step.step] || ['What is the purpose of this step?', 'How does this help us reach the solution?'];
    }

    generateProgressiveHints(step) {
        return {
            level1: 'Think about what mathematical property or theorem applies here',
            level2: 'Consider the standard algorithm or method for this type of problem',
            level3: 'Look at how the previous step\'s result is used here',
            level4: step.reasoning || 'Apply the specific technique mentioned in the step'
        };
    }

    identifyPrerequisites(step, problemType) {
        const prerequisites = {
            'Check basic cases': ['Understanding of prime number definition', 'Basic divisibility concepts'],
            'Apply Euclidean Algorithm': ['Division with remainder', 'Iterative processes'],
            'Find particular solution': ['Extended Euclidean Algorithm', 'Linear combinations'],
            'Perform division': ['Division algorithm', 'Quotient and remainder concepts']
        };

        return prerequisites[step.step] || ['Basic number theory concepts'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Check basic cases': ['prime', 'composite', 'natural number'],
            'Apply Euclidean Algorithm': ['divisor', 'dividend', 'remainder', 'quotient'],
            'Find particular solution': ['Diophantine equation', 'Bézout\'s identity', 'linear combination'],
            'Perform division': ['modulo', 'congruence', 'remainder']
        };

        return vocabulary[step.step] || [];
    }

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'divisor': 'number that divides',
                    'quotient': 'result of division',
                    'remainder': 'what\'s left over',
                    'congruence': 'same remainder',
                    'coprime': 'share no common factors except 1'
                }
            },
            intermediate: {
                replacements: {} // Keep standard terminology
            },
            detailed: {
                replacements: {
                    'divisor': 'divisor (number by which we divide)',
                    'quotient': 'quotient (integral result of division)',
                    'remainder': 'remainder (non-negative integer less than divisor)',
                    'congruence': 'congruence (equivalence relation modulo n)',
                    'coprime': 'coprime (relatively prime, gcd = 1)'
                }
            }
        };

        const levelAdaptation = adaptations[level.vocabulary] || adaptations.intermediate;
        let adaptedText = text;

        for (const [term, replacement] of Object.entries(levelAdaptation.replacements)) {
            const regex = new RegExp(`\\b${term}\\b`, 'gi');
            adaptedText = adaptedText.replace(regex, replacement);
        }

        return adaptedText;
    }

    // GRAPH DATA GENERATION
    generateNumberTheoryGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;

        switch(type) {
            case 'find_primes':
                if (this.currentSolution.primes) {
                    this.graphData = this.generatePrimeDistributionGraph(this.currentSolution);
                }
                break;

            case 'prime_factorization':
                if (this.currentSolution.factors) {
                    this.graphData = this.generateFactorTreeGraph(this.currentSolution);
                }
                break;

            case 'fibonacci':
                if (this.currentSolution.sequence) {
                    this.graphData = this.generateFibonacciGraph(this.currentSolution);
                }
                break;

            case 'gcd_calculation':
                if (this.currentSolution.steps) {
                    this.graphData = this.generateGCDVisualization(this.currentSolution);
                }
                break;
        }
    }

    generatePrimeDistributionGraph(solution) {
        return {
            type: 'prime_distribution',
            primes: solution.primes,
            limit: solution.limit,
            count: solution.count,
            density: solution.count / solution.limit
        };
    }

    generateFactorTreeGraph(solution) {
        return {
            type: 'factor_tree',
            number: solution.number,
            factors: solution.factors,
            exponentialForm: solution.exponentialForm
        };
    }

    generateFibonacciGraph(solution) {
        const points = solution.sequence.map((value, index) => ({
            n: index,
            value: value
        }));

        return {
            type: 'fibonacci_sequence',
            points: points,
            goldenRatio: solution.properties?.goldenRatio
        };
    }

    generateGCDVisualization(solution) {
        return {
            type: 'euclidean_algorithm',
            steps: solution.steps,
            result: solution.gcd
        };
    }

    // VERIFICATION METHODS
    verifyPrimeTest() {
        const { n } = this.currentProblem.parameters;
        const { isPrime } = this.currentSolution;

        // Verify by checking all divisors
        let actuallyPrime = n >= 2;
        if (n > 2) {
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) {
                    actuallyPrime = false;
                    break;
                }
            }
        }

        return {
            number: n,
            claimedPrime: isPrime,
            actuallyPrime: actuallyPrime,
            isCorrect: isPrime === actuallyPrime,
            method: 'Exhaustive divisibility check'
        };
    }

    verifyGCD() {
        const { a, b } = this.currentProblem.parameters;
        const { gcd } = this.currentSolution;

        // Verify that gcd divides both numbers
        const dividesA = a % gcd === 0;
        const dividesB = b % gcd === 0;

        // Verify no larger number divides both
        let isLargest = true;
        for (let i = gcd + 1; i <= Math.min(Math.abs(a), Math.abs(b)); i++) {
            if (a % i === 0 && b % i === 0) {
                isLargest = false;
                break;
            }
        }

        return {
            a: a,
            b: b,
            gcd: gcd,
            dividesA: dividesA,
            dividesB: dividesB,
            isLargest: isLargest,
            isCorrect: dividesA && dividesB && isLargest,
            verification: `${gcd} divides ${a}: ${dividesA}, ${gcd} divides ${b}: ${dividesB}`
        };
    }

    verifyLCM() {
        const { a, b } = this.currentProblem.parameters;
        const { lcm } = this.currentSolution;

        // Verify that lcm is divisible by both numbers
        const divisibleByA = lcm % Math.abs(a) === 0;
        const divisibleByB = lcm % Math.abs(b) === 0;

        // Verify it's the smallest such number
        let isSmallest = true;
        for (let i = 1; i < lcm; i++) {
            if (i % Math.abs(a) === 0 && i % Math.abs(b) === 0) {
                isSmallest = false;
                break;
            }
        }

        return {
            a: a,
            b: b,
            lcm: lcm,
            divisibleByA: divisibleByA,
            divisibleByB: divisibleByB,
            isSmallest: isSmallest,
            isCorrect: divisibleByA && divisibleByB && isSmallest,
            verification: `${a} divides ${lcm}: ${divisibleByA}, ${b} divides ${lcm}: ${divisibleByB}`
        };
    }

    verifyModularArithmetic() {
        const { a, n } = this.currentProblem.parameters;
        const { result } = this.currentSolution;

        // Verify result is in correct range
        const inRange = result >= 0 && result < n;

        // Verify congruence
        const difference = a - result;
        const isCongruent = difference % n === 0;

        return {
            a: a,
            n: n,
            result: result,
            inRange: inRange,
            isCongruent: isCongruent,
            isCorrect: inRange && isCongruent,
            verification: `${a} ≡ ${result} (mod ${n})`,
            check: `(${a} - ${result}) mod ${n} = ${difference % n}`
        };
    }

    verifyDiophantine() {
        const { a, b, c } = this.currentProblem.parameters;
        const { particularSolution, solutionExists } = this.currentSolution;

        if (!solutionExists) {
            return {
                equation: `${a}x + ${b}y = ${c}`,
                solutionExists: false,
                verified: true,
                reason: 'GCD does not divide c'
            };
        }

        const { x, y } = particularSolution;
        const leftSide = a * x + b * y;
        const isCorrect = leftSide === c;

        return {
            equation: `${a}x + ${b}y = ${c}`,
            solution: { x, y },
            leftSide: leftSide,
            rightSide: c,
            isCorrect: isCorrect,
            substitution: `${a}(${x}) + ${b}(${y}) = ${leftSide}`,
            verification: `${leftSide} ${isCorrect ? '=' : '≠'} ${c}`
        };
    }

    // WORKBOOK GENERATION
    generateNumberTheoryWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createEnhancedStepsSection(),
            this.createLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Number Theory Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.numberTheoryTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.numberTheoryTypes[this.currentProblem.type]?.category || 'number_theory'],
            ['Problem', this.currentProblem.originalInput]
        ];

        // Add specific parameters
        const params = this.currentProblem.parameters;
        for (const [key, value] of Object.entries(params)) {
            if (value !== undefined && value !== null) {
                problemData.push([key, value]);
            }
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            if (step.stepType === 'bridge') {
                stepsData.push(['→ Bridge', step.explanation?.currentState || '']);
                stepsData.push(['', step.explanation?.nextGoal || '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.step]);
            stepsData.push(['Description', step.description || '']);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.method) {
                stepsData.push(['Method', step.method]);
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
                    stepsData.push(['Guide Questions', questions.join(' ')]);
                }
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: 'Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }

    createLessonSection() {
        const { type } = this.currentProblem;
        const lesson = this.lessons?.[this.numberTheoryTypes[type]?.category];

        if (!lesson) return null;

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: [
                ['Topic', lesson.title],
                ['Theory', lesson.theory],
                ['Key Concepts', lesson.concepts?.join('; ') || 'N/A']
            ]
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        // Add solution type
        if (this.currentSolution.solutionType) {
            solutionData.push(['Solution Type', this.currentSolution.solutionType]);
        }

        // Add main results based on problem type
        const { type } = this.currentProblem;

        switch(type) {
            case 'prime_test':
                solutionData.push(['Number', this.currentSolution.number]);
                solutionData.push(['Is Prime?', this.currentSolution.isPrime ? 'Yes' : 'No']);
                if (this.currentSolution.reason) {
                    solutionData.push(['Reason', this.currentSolution.reason]);
                }
                break;

            case 'prime_factorization':
                solutionData.push(['Number', this.currentSolution.number]);
                solutionData.push(['Prime Factorization', this.currentSolution.exponentialForm]);
                break;

            case 'gcd_calculation':
                solutionData.push(['GCD', this.currentSolution.gcd]);
                solutionData.push(['Numbers', `${this.currentSolution.a}, ${this.currentSolution.b}`]);
                break;

            case 'lcm_calculation':
                solutionData.push(['LCM', this.currentSolution.lcm]);
                solutionData.push(['Numbers', `${this.currentSolution.a}, ${this.currentSolution.b}`]);
                break;

            case 'modular_arithmetic':
                solutionData.push(['Result', this.currentSolution.result]);
                if (this.currentSolution.operation) {
                    solutionData.push(['Operation', this.currentSolution.operation]);
                }
                break;

            case 'fibonacci':
                solutionData.push(['n', this.currentSolution.n]);
                solutionData.push(['F(n)', this.currentSolution.value]);
                break;

            default:
                solutionData.push(['Result', JSON.stringify(this.currentSolution)]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: [
                ['Problem Type', this.currentProblem.type],
                ['Steps Used', this.solutionSteps?.length || 0],
                ['Explanation Level', this.explanationLevel],
                ['Category', this.numberTheoryTypes[this.currentProblem.type]?.category || 'N/A']
            ]
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const { type } = this.currentProblem;
        let verification;

        switch(type) {
            case 'prime_test':
                verification = this.verifyPrimeTest();
                break;
            case 'gcd_calculation':
                verification = this.verifyGCD();
                break;
            case 'lcm_calculation':
                verification = this.verifyLCM();
                break;
            case 'modular_arithmetic':
                verification = this.verifyModularArithmetic();
                break;
            case 'linear_diophantine':
                verification = this.verifyDiophantine();
                break;
            default:
                return null;
        }

        const verificationData = [
            ['Verification Method', verification.method || 'Direct substitution'],
            ['Is Correct', verification.isCorrect ? 'Yes' : 'No']
        ];

        // Add specific verification details
        for (const [key, value] of Object.entries(verification)) {
            if (key !== 'method' && key !== 'isCorrect' && typeof value !== 'object') {
                verificationData.push([key, value]);
            }
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const notes = this.generatePedagogicalNotes(type);

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives?.join('; ') || 'N/A'],
                ['Key Concepts', notes.keyConcepts?.join('; ') || 'N/A'],
                ['Prerequisites', notes.prerequisites?.join('; ') || 'N/A'],
                ['Common Difficulties', notes.commonDifficulties?.join('; ') || 'N/A']
            ]
        };
    }

    generatePedagogicalNotes(problemType) {
        const category = this.numberTheoryTypes[problemType]?.category;
        const pedagogicalDatabase = {
            prime_numbers: {
                objectives: [
                    'Understand prime number definition',
                    'Apply primality testing algorithms',
                    'Recognize patterns in prime distribution'
                ],
                keyConcepts: [
                    'Prime vs composite numbers',
                    'Fundamental Theorem of Arithmetic',
                    'Efficiency of √n test limit'
                ],
                prerequisites: [
                    'Division with remainder',
                    'Basic divisibility',
                    'Square roots'
                ],
                commonDifficulties: [
                    'Forgetting 1 is not prime',
                    'Testing beyond √n unnecessarily',
                    'Misunderstanding uniqueness of factorization'
                ]
            },
            hcf_lcm: {
                objectives: [
                    'Calculate GCD using Euclidean algorithm',
                    'Find LCM using GCD relationship',
                    'Apply to fraction simplification'
                ],
                keyConcepts: [
                    'Euclidean algorithm efficiency',
                    'GCD and LCM relationship',
                    'Bézout\'s identity'
                ],
                prerequisites: [
                    'Division algorithm',
                    'Prime factorization',
                    'Basic algebra'
                ],
                commonDifficulties: [
                    'Stopping Euclidean algorithm too early',
                    'Confusing GCD and LCM',
                    'Sign errors with negative numbers'
                ]
            },
            modular_arithmetic: {
                objectives: [
                    'Perform modular arithmetic operations',
                    'Understand congruence relations',
                    'Find modular inverses'
                ],
                keyConcepts: [
                    'Congruence as equivalence relation',
                    'Modular inverse existence',
                    'Applications in cryptography'
                ],
                prerequisites: [
                    'Division with remainder',
                    'GCD calculation',
                    'Basic algebra'
                ],
                commonDifficulties: [
                    'Negative remainders',
                    'When modular inverse doesn\'t exist',
                    'Confusing mod with regular division'
                ]
            },
            divisibility: {
                objectives: [
                    'Apply divisibility rules',
                    'Find all divisors of a number',
                    'Count divisors using prime factorization'
                ],
                keyConcepts: [
                    'Divisibility rules for 2-11',
                    'Divisor function',
                    'Perfect, abundant, deficient numbers'
                ],
                prerequisites: [
                    'Basic multiplication and division',
                    'Prime factorization',
                    'Exponents'
                ],
                commonDifficulties: [
                    'Mixing up divisibility rules',
                    'Forgetting 1 and n as divisors',
                    'Errors in divisor count formula'
                ]
            },
            rational_irrational: {
                objectives: [
                    'Classify numbers as rational or irrational',
                    'Simplify fractions',
                    'Convert between decimal and fraction'
                ],
                keyConcepts: [
                    'Rational as ratio of integers',
                    'Decimal representations',
                    'Proof techniques for irrationality'
                ],
                prerequisites: [
                    'Fraction arithmetic',
                    'GCD calculation',
                    'Decimal notation'
                ],
                commonDifficulties: [
                    'Assuming all decimals are irrational',
                    'Not recognizing repeating decimals',
                    'Simplification errors'
                ]
            },
            number_properties: {
                objectives: [
                    'Calculate Fibonacci numbers',
                    'Solve Diophantine equations',
                    'Compute Euler totient function'
                ],
                keyConcepts: [
                    'Recursive sequences',
                    'Integer solutions to equations',
                    'Number theoretic functions'
                ],
                prerequisites: [
                    'Recursion understanding',
                    'GCD and Extended Euclidean Algorithm',
                    'Prime factorization'
                ],
                commonDifficulties: [
                    'Fibonacci calculation complexity',
                    'Understanding Diophantine solvability',
                    'Totient function formula application'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Understand the problem type'],
            keyConcepts: ['Apply appropriate techniques'],
            prerequisites: ['Basic number theory'],
            commonDifficulties: ['Various calculation errors']
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const { type } = this.currentProblem;
        const alternatives = this.generateAlternativeMethods(type);

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method', alternatives.primaryMethod],
                ['', ''],
                ...alternatives.methods.map((method, index) => [
                    `Method ${index + 1}`,
                    `${method.name}: ${method.description}`
                ])
            ]
        };
    }

    generateAlternativeMethods(problemType) {
        const alternativeDatabase = {
            prime_test: {
                primaryMethod: 'Trial division up to √n',
                methods: [
                    { name: 'Sieve of Eratosthenes', description: 'Generate all primes up to n first' },
                    { name: 'Miller-Rabin Test', description: 'Probabilistic primality test for large numbers' },
                    { name: 'AKS Primality Test', description: 'Deterministic polynomial-time algorithm' }
                ]
            },
            gcd_calculation: {
                primaryMethod: 'Euclidean Algorithm',
                methods: [
                    { name: 'Prime Factorization Method', description: 'Find GCD from prime factorizations' },
                    { name: 'Binary GCD Algorithm', description: 'Use subtraction and division by 2' },
                    { name: 'Extended Euclidean Algorithm', description: 'Also finds Bézout coefficients' }
                ]
            },
            prime_factorization: {
                primaryMethod: 'Trial division',
                methods: [
                    { name: 'Fermat\'s Method', description: 'Express as difference of squares' },
                    { name: 'Pollard Rho Algorithm', description: 'Efficient for large semiprimes' },
                    { name: 'Factor Tree', description: 'Visual method for systematic factorization' }
                ]
            },
            modular_arithmetic: {
                primaryMethod: 'Direct calculation',
                methods: [
                    { name: 'Repeated Squaring', description: 'For large exponentsations' },
                    { name: 'Chinese Remainder Theorem', description: 'Solve systems of congruences' },
                    { name: 'Fermat\'s Little Theorem', description: 'Simplify modular exponentiation with primes' }
                ]
            },
            fibonacci: {
                primaryMethod: 'Iterative calculation',
                methods: [
                    { name: 'Matrix Method', description: 'Use matrix exponentiation for fast computation' },
                    { name: 'Binet\'s Formula', description: 'Direct formula using golden ratio' },
                    { name: 'Dynamic Programming', description: 'Memoization for multiple values' }
                ]
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard approach',
            methods: [{ name: 'Alternative techniques', description: 'Various methods available' }]
        };
    }
}
