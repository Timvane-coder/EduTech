// Enhanced Modular Arithmetic Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedModularArithmeticWorkbook {
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
        this.initializeModularSolvers();
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
        this.initializeModularLessons();
    }

    initializeModularLessons() {
        this.lessons = {
            modular_arithmetic_basics: {
                title: "Introduction to Modular Arithmetic",
                concepts: [
                    "Modular arithmetic is 'clock arithmetic'",
                    "a ≡ b (mod n) means a and b have the same remainder when divided by n",
                    "The modulus n defines the 'size' of the system",
                    "Results wrap around after reaching the modulus"
                ],
                theory: "Modular arithmetic is a system where numbers 'wrap around' after reaching a certain value (the modulus). Like a 12-hour clock wraps from 12 back to 1.",
                keyFormulas: {
                    "Congruence": "a ≡ b (mod n) ⟺ n | (a - b)",
                    "Modulo Operation": "a mod n = remainder when a is divided by n",
                    "Range": "For mod n, results are in {0, 1, 2, ..., n-1}"
                },
                fundamentalProperties: [
                    "If a ≡ b (mod n), then a and b differ by a multiple of n",
                    "Equivalence relation: reflexive, symmetric, transitive",
                    "Compatible with addition, subtraction, and multiplication"
                ],
                applications: [
                    "Cryptography (RSA, etc.)",
                    "Computer science (hash functions, checksums)",
                    "Calendar calculations",
                    "Music theory (12-tone system)"
                ]
            },

            modular_addition: {
                title: "Modular Addition",
                concepts: [
                    "Add numbers normally, then take remainder mod n",
                    "(a + b) mod n = ((a mod n) + (b mod n)) mod n",
                    "Can reduce operands before adding to simplify",
                    "Result is always in range [0, n-1]"
                ],
                theory: "Modular addition preserves congruence. We can add first then reduce, or reduce operands first then add.",
                keyFormulas: {
                    "Direct": "(a + b) mod n",
                    "Reduced First": "((a mod n) + (b mod n)) mod n",
                    "Property": "If a ≡ a' and b ≡ b' (mod n), then a+b ≡ a'+b' (mod n)"
                },
                solvingSteps: [
                    "Optionally reduce a and b modulo n first",
                    "Add the results",
                    "Take final result modulo n",
                    "Express answer in standard form [0, n-1]"
                ],
                applications: [
                    "Time calculations (hours on a clock)",
                    "Cyclic sequences",
                    "Cryptographic operations"
                ]
            },

            modular_subtraction: {
                title: "Modular Subtraction",
                concepts: [
                    "Subtract numbers normally, then take remainder mod n",
                    "(a - b) mod n = ((a mod n) - (b mod n)) mod n",
                    "If result is negative, add n to make it positive",
                    "Equivalent to adding the additive inverse"
                ],
                theory: "Modular subtraction is addition of the additive inverse. Since we work in [0, n-1], negative results are adjusted by adding n.",
                keyFormulas: {
                    "Direct": "(a - b) mod n",
                    "Adjusted": "If negative, add n: ((a - b) mod n + n) mod n",
                    "Inverse": "a - b ≡ a + (-b) ≡ a + (n - b) (mod n)"
                },
                solvingSteps: [
                    "Reduce a and b modulo n if helpful",
                    "Subtract: a - b",
                    "If result < 0, add n repeatedly until positive",
                    "Take final result modulo n"
                ],
                applications: [
                    "Reverse time calculations",
                    "Cryptographic decryption steps",
                    "Circular buffer indexing"
                ]
            },

            modular_multiplication: {
                title: "Modular Multiplication",
                concepts: [
                    "Multiply numbers, then take remainder mod n",
                    "(a × b) mod n = ((a mod n) × (b mod n)) mod n",
                    "Reducing before multiplication prevents overflow",
                    "Distributive, associative, commutative"
                ],
                theory: "Modular multiplication is central to number theory and cryptography. Reducing operands first keeps numbers manageable.",
                keyFormulas: {
                    "Direct": "(a × b) mod n",
                    "Reduced": "((a mod n) × (b mod n)) mod n",
                    "Property": "If a ≡ a' and b ≡ b' (mod n), then ab ≡ a'b' (mod n)"
                },
                solvingSteps: [
                    "Reduce a and b modulo n (optional but recommended)",
                    "Multiply the reduced values",
                    "Take result modulo n",
                    "Express in [0, n-1]"
                ],
                applications: [
                    "RSA encryption",
                    "Diffie-Hellman key exchange",
                    "Error detection codes",
                    "Pseudorandom number generation"
                ]
            },

            modular_exponentiation: {
                title: "Modular Exponentiation",
                concepts: [
                    "Compute a^b mod n efficiently",
                    "Naive method: compute a^b, then mod n (fails for large b)",
                    "Fast method: repeated squaring (binary exponentiation)",
                    "Essential for cryptography"
                ],
                theory: "Modular exponentiation uses the property (a×b) mod n = ((a mod n) × (b mod n)) mod n repeatedly. Binary method is O(log b) instead of O(b).",
                keyFormulas: {
                    "Definition": "a^b mod n",
                    "Binary Method": "Express b in binary, square and multiply",
                    "Property": "(a^b)^c ≡ a^(bc) (mod n)"
                },
                algorithms: {
                    "Right-to-Left Binary": "Process bits of exponent right to left",
                    "Left-to-Right Binary": "Process bits left to right",
                    "Sliding Window": "Optimization for large exponents"
                },
                solvingSteps: [
                    "Convert exponent to binary",
                    "Initialize result = 1, base = a mod n",
                    "For each bit: if 1, multiply result by base; square base",
                    "Return result mod n"
                ],
                applications: [
                    "RSA encryption/decryption",
                    "Digital signatures",
                    "Primality testing",
                    "Discrete logarithm problems"
                ]
            },

            modular_inverse: {
                title: "Modular Multiplicative Inverse",
                concepts: [
                    "Inverse of a mod n is x where ax ≡ 1 (mod n)",
                    "Exists only if gcd(a, n) = 1 (a and n coprime)",
                    "Found using Extended Euclidean Algorithm",
                    "Unique in range [0, n-1]"
                ],
                theory: "The modular inverse generalizes division in modular arithmetic. Instead of a/b mod n, we compute a × b^(-1) mod n.",
                keyFormulas: {
                    "Definition": "a × a^(-1) ≡ 1 (mod n)",
                    "Existence": "Inverse exists ⟺ gcd(a, n) = 1",
                    "Extended GCD": "ax + ny = gcd(a, n) gives x ≡ a^(-1) (mod n)"
                },
                algorithms: {
                    "Extended Euclidean Algorithm": "Primary method, always works when inverse exists",
                    "Fermat's Little Theorem": "If n is prime: a^(-1) ≡ a^(n-2) (mod n)",
                    "Euler's Theorem": "If gcd(a,n)=1: a^(-1) ≡ a^(φ(n)-1) (mod n)"
                },
                solvingSteps: [
                    "Check if gcd(a, n) = 1 using Euclidean algorithm",
                    "If not coprime, inverse doesn't exist",
                    "Run Extended Euclidean Algorithm",
                    "Extract coefficient x from ax + ny = 1",
                    "Adjust x to be in [0, n-1]"
                ],
                applications: [
                    "RSA decryption (finding d from e)",
                    "Solving linear congruences",
                    "Cryptographic protocols",
                    "Modular division"
                ]
            },

            euclidean_algorithm: {
                title: "Euclidean Algorithm for GCD",
                concepts: [
                    "Finds greatest common divisor of two numbers",
                    "Based on: gcd(a, b) = gcd(b, a mod b)",
                    "Terminates when remainder is 0",
                    "Last non-zero remainder is the GCD"
                ],
                theory: "The Euclidean algorithm is one of the oldest algorithms (300 BC). It's efficient and fundamental to number theory.",
                keyFormulas: {
                    "Recursive": "gcd(a, b) = gcd(b, a mod b), gcd(a, 0) = a",
                    "Bézout's Identity": "gcd(a, b) = ax + by for some integers x, y"
                },
                solvingSteps: [
                    "Start with gcd(a, b) where a ≥ b",
                    "Divide a by b, get remainder r",
                    "Replace a with b, b with r",
                    "Repeat until remainder is 0",
                    "Last non-zero remainder is gcd"
                ],
                applications: [
                    "Simplifying fractions",
                    "Finding modular inverses",
                    "Checking coprimality",
                    "Cryptographic key generation"
                ]
            },

            extended_euclidean: {
                title: "Extended Euclidean Algorithm",
                concepts: [
                    "Finds gcd(a, b) AND coefficients x, y",
                    "Such that ax + by = gcd(a, b)",
                    "Extends regular Euclidean algorithm",
                    "Essential for finding modular inverses"
                ],
                theory: "The extended version not only finds the GCD but expresses it as a linear combination of the inputs. This is Bézout's identity.",
                keyFormulas: {
                    "Bézout's Identity": "ax + by = gcd(a, b)",
                    "Recursive Update": "x and y updated from previous steps"
                },
                algorithms: {
                    "Iterative Version": "Track coefficients in table",
                    "Recursive Version": "Build coefficients during recursion unwinding"
                },
                solvingSteps: [
                    "Run Euclidean algorithm, recording all quotients",
                    "Work backwards from gcd",
                    "Express each remainder as linear combination",
                    "Substitute previous expressions",
                    "Final form gives x and y"
                ],
                applications: [
                    "Finding modular multiplicative inverse",
                    "Solving linear Diophantine equations",
                    "Chinese Remainder Theorem",
                    "RSA key generation"
                ]
            },

            chinese_remainder_theorem: {
                title: "Chinese Remainder Theorem (CRT)",
                concepts: [
                    "Solves system of congruences with coprime moduli",
                    "x ≡ a₁ (mod n₁), x ≡ a₂ (mod n₂), ...",
                    "Unique solution modulo N = n₁ × n₂ × ...",
                    "Efficient for large modular computations"
                ],
                theory: "CRT states that if moduli are pairwise coprime, the system has a unique solution modulo their product. Ancient Chinese mathematicians used this for calendar calculations.",
                keyFormulas: {
                    "Solution": "x = Σ(aᵢ × Mᵢ × yᵢ) mod N",
                    "Where": "N = Πnᵢ, Mᵢ = N/nᵢ, yᵢ = Mᵢ^(-1) mod nᵢ"
                },
                solvingSteps: [
                    "Verify moduli are pairwise coprime",
                    "Compute N = product of all moduli",
                    "For each i: compute Mᵢ = N/nᵢ",
                    "Find yᵢ = inverse of Mᵢ mod nᵢ",
                    "Compute x = Σ(aᵢ × Mᵢ × yᵢ) mod N"
                ],
                applications: [
                    "RSA speedup (CRT-RSA)",
                    "Calendar calculations",
                    "Secret sharing schemes",
                    "Polynomial interpolation over finite fields"
                ]
            },

            fermats_little_theorem: {
                title: "Fermat's Little Theorem",
                concepts: [
                    "If p is prime and gcd(a, p) = 1, then a^(p-1) ≡ 1 (mod p)",
                    "Equivalently: a^p ≡ a (mod p) for all a",
                    "Used for primality testing",
                    "Shortcut for modular inverses when modulus is prime"
                ],
                theory: "Fermat's Little Theorem is fundamental in number theory. It provides a test for primality and simplifies inverse computation.",
                keyFormulas: {
                    "Standard Form": "a^(p-1) ≡ 1 (mod p) if p prime, gcd(a,p)=1",
                    "Inverse Formula": "a^(-1) ≡ a^(p-2) (mod p) if p prime",
                    "Euler's Generalization": "a^φ(n) ≡ 1 (mod n) if gcd(a,n)=1"
                },
                applications: [
                    "Primality testing (Fermat test)",
                    "Computing modular inverses when p is prime",
                    "RSA correctness proof",
                    "Simplifying modular exponentiation"
                ]
            },

            eulers_theorem: {
                title: "Euler's Theorem and Totient Function",
                concepts: [
                    "φ(n) = count of integers in [1,n] coprime to n",
                    "If gcd(a, n) = 1, then a^φ(n) ≡ 1 (mod n)",
                    "Generalizes Fermat's Little Theorem",
                    "φ(p) = p-1 for prime p"
                ],
                theory: "Euler's totient function counts numbers coprime to n. Euler's theorem is central to RSA and modular arithmetic.",
                keyFormulas: {
                    "Euler's Theorem": "a^φ(n) ≡ 1 (mod n) if gcd(a,n)=1",
                    "Totient for Prime": "φ(p) = p - 1",
                    "Totient for Prime Power": "φ(p^k) = p^k - p^(k-1)",
                    "Multiplicative": "φ(mn) = φ(m)φ(n) if gcd(m,n)=1"
                },
                applications: [
                    "RSA algorithm (choosing e and d)",
                    "Computing modular inverses",
                    "Cyclic groups in cryptography",
                    "Primitive roots"
                ]
            },

            linear_congruences: {
                title: "Solving Linear Congruences",
                concepts: [
                    "Form: ax ≡ b (mod n)",
                    "Solution exists ⟺ gcd(a, n) | b",
                    "If gcd(a, n) = 1, unique solution x ≡ ba^(-1) (mod n)",
                    "Multiple solutions possible if gcd(a, n) > 1"
                ],
                theory: "Linear congruences are modular equations. They generalize linear equations to modular arithmetic.",
                keyFormulas: {
                    "Existence": "gcd(a, n) must divide b",
                    "Unique Solution": "x ≡ b × a^(-1) (mod n) if gcd(a,n)=1",
                    "Multiple Solutions": "If d = gcd(a,n) and d|b, then d solutions mod n"
                },
                solvingSteps: [
                    "Compute d = gcd(a, n)",
                    "Check if d divides b",
                    "If not, no solution exists",
                    "If yes, divide by d: (a/d)x ≡ (b/d) (mod n/d)",
                    "Find inverse of (a/d) mod (n/d)",
                    "Multiply to get solution"
                ],
                applications: [
                    "Cryptographic equations",
                    "Diophantine equations",
                    "Scheduling problems",
                    "Computer science algorithms"
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
            // Modular arithmetic
            'equiv': '≡', 'mod': 'mod', 'notequiv': '≢',
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            'times': '×', 'div': '÷',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            'phi': 'φ', 'tau': 'τ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥', 'divides': '|',
            'notdivides': '∤', 'forall': '∀', 'exists': '∃'
        };
    }

    initializeModularSolvers() {
        this.modularTypes = {
            // Basic modular operations
            modular_addition: {
                patterns: [
                    /\(\s*(\d+)\s*\+\s*(\d+)\s*\)\s*mod\s*(\d+)/i,
                    /add.*mod/i,
                    /modular.*addition/i
                ],
                solver: this.solveModularAddition.bind(this),
                name: 'Modular Addition',
                category: 'basic_operations',
                description: 'Computes (a + b) mod n'
            },

            modular_subtraction: {
                patterns: [
                    /\(\s*(\d+)\s*-\s*(\d+)\s*\)\s*mod\s*(\d+)/i,
                    /subtract.*mod/i,
                    /modular.*subtraction/i
                ],
                solver: this.solveModularSubtraction.bind(this),
                name: 'Modular Subtraction',
                category: 'basic_operations',
                description: 'Computes (a - b) mod n'
            },

            modular_multiplication: {
                patterns: [
                    /\(\s*(\d+)\s*\*\s*(\d+)\s*\)\s*mod\s*(\d+)/i,
                    /\(\s*(\d+)\s*×\s*(\d+)\s*\)\s*mod\s*(\d+)/i,
                    /multiply.*mod/i,
                    /modular.*multiplication/i
                ],
                solver: this.solveModularMultiplication.bind(this),
                name: 'Modular Multiplication',
                category: 'basic_operations',
                description: 'Computes (a × b) mod n'
            },

            modular_exponentiation: {
                patterns: [
                    /(\d+)\s*\^\s*(\d+)\s*mod\s*(\d+)/i,
                    /(\d+)\s*\*\*\s*(\d+)\s*mod\s*(\d+)/i,
                    /power.*mod/i,
                    /modular.*exponentiation/i,
                    /fast.*exponentiation/i
                ],
                solver: this.solveModularExponentiation.bind(this),
                name: 'Modular Exponentiation',
                category: 'advanced_operations',
                description: 'Computes a^b mod n using fast algorithm'
            },

            modular_inverse: {
                patterns: [
                    /inverse.*of\s*(\d+).*mod\s*(\d+)/i,
                    /(\d+)\s*\^\s*-1\s*mod\s*(\d+)/i,
                    /modular.*inverse/i,
                    /multiplicative.*inverse/i
                ],
                solver: this.solveModularInverse.bind(this),
                name: 'Modular Multiplicative Inverse',
                category: 'advanced_operations',
                description: 'Finds x where ax ≡ 1 (mod n)'
            },

            gcd_computation: {
                patterns: [
                    /gcd\s*\(\s*(\d+)\s*,\s*(\d+)\s*\)/i,
                    /greatest.*common.*divisor/i,
                    /euclidean.*algorithm/i
                ],
                solver: this.solveGCD.bind(this),
                name: 'Greatest Common Divisor',
                category: 'number_theory',
                description: 'Finds GCD using Euclidean algorithm'
            },

            extended_gcd: {
                patterns: [
                    /extended.*gcd/i,
                    /extended.*euclidean/i,
                    /bezout/i
                ],
                solver: this.solveExtendedGCD.bind(this),
                name: 'Extended Euclidean Algorithm',
                category: 'number_theory',
                description: 'Finds gcd(a,b) and coefficients x,y such that ax+by=gcd(a,b)'
            },

            linear_congruence: {
                patterns: [
                    /(\d+)\s*x\s*≡\s*(\d+)\s*\(mod\s*(\d+)\)/i,
                    /solve.*congruence/i,
                    /linear.*congruence/i
                ],
                solver: this.solveLinearCongruence.bind(this),
                name: 'Linear Congruence',
                category: 'congruences',
                description: 'Solves ax ≡ b (mod n)'
            },

            chinese_remainder: {
                patterns: [
                    /chinese.*remainder/i,
                    /crt/i,
                    /system.*congruences/i
                ],
                solver: this.solveChineseRemainder.bind(this),
                name: 'Chinese Remainder Theorem',
                category: 'congruences',
                description: 'Solves system of congruences with coprime moduli'
            },

            euler_totient: {
                patterns: [
                    /phi\s*\(\s*(\d+)\s*\)/i,
                    /totient.*(\d+)/i,
                    /euler.*phi/i,
                    /euler.*totient/i
                ],
                solver: this.solveEulerTotient.bind(this),
                name: 'Euler Totient Function',
                category: 'number_theory',
                description: 'Computes φ(n) - count of integers coprime to n'
            },

            primitive_root: {
                patterns: [
                    /primitive.*root/i,
                    /generator.*mod/i
                ],
                solver: this.solvePrimitiveRoot.bind(this),
                name: 'Primitive Root',
                category: 'advanced_number_theory',
                description: 'Finds primitive roots modulo n'
            },

            discrete_logarithm: {
                patterns: [
                    /discrete.*log/i,
                    /log.*mod/i,
                    /dlog/i
                ],
                solver: this.solveDiscreteLogarithm.bind(this),
                name: 'Discrete Logarithm',
                category: 'advanced_number_theory',
                description: 'Finds x where g^x ≡ h (mod n)'
            },

            quadratic_residue: {
                patterns: [
                    /quadratic.*residue/i,
                    /legendre.*symbol/i,
                    /jacobi.*symbol/i
                ],
                solver: this.solveQuadraticResidue.bind(this),
                name: 'Quadratic Residue',
                category: 'advanced_number_theory',
                description: 'Determines if a is a quadratic residue mod p'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            basic_operations: {
                'Modular Addition': [
                    'Forgetting to take final result mod n',
                    'Adding moduli instead of operands',
                    'Not reducing intermediate results'
                ],
                'Modular Subtraction': [
                    'Forgetting to handle negative results',
                    'Not adding n when result is negative',
                    'Subtracting moduli instead of operands'
                ],
                'Modular Multiplication': [
                    'Integer overflow with large numbers',
                    'Not reducing before multiplication',
                    'Forgetting final mod operation'
                ]
            },
            advanced_operations: {
                'Modular Exponentiation': [
                    'Computing a^b first then mod (overflow)',
                    'Not using binary method for large exponents',
                    'Errors in binary conversion',
                    'Not reducing intermediate results'
                ],
                'Modular Inverse': [
                    'Not checking if inverse exists (coprimality)',
                    'Errors in Extended Euclidean Algorithm',
                    'Not adjusting negative coefficient to [0,n-1]',
                    'Confusing with regular division'
                ]
            },
            number_theory: {
                'GCD Computation': [
                    'Stopping too early in Euclidean algorithm',
                    'Wrong order of operands',
                    'Arithmetic errors in divisions'
                ],
                'Extended GCD': [
                    'Errors in tracking coefficients',
                    'Wrong sign in Bézout coefficients',
                    'Not working backwards correctly'
                ]
            },
            congruences: {
                'Linear Congruence': [
                    'Not checking solution existence condition',
                    'Dividing by non-invertible element',
                    'Missing multiple solutions case'
                ],
                'Chinese Remainder': [
                    'Not verifying moduli are coprime',
                    'Errors in computing M_i',
                    'Mistakes in finding modular inverses',
                    'Not reducing final result'
                ]
            }
        };

        this.errorPrevention = {
            coprimality_check: {
                reminder: 'Always verify gcd(a, n) = 1 before computing inverse',
                method: 'Use Euclidean algorithm to check'
            },
            overflow_prevention: {
                reminder: 'Reduce intermediate results to prevent overflow',
                method: 'Take mod n after each operation'
            },
            binary_exponentiation: {
                reminder: 'Use binary method for large exponents',
                method: 'Convert exponent to binary, square and multiply'
            },
            negative_handling: {
                reminder: 'Adjust negative results by adding modulus',
                method: 'If result < 0, add n until positive'
            },
            verification: {
                reminder: 'Always verify your answer by substitution',
                method: 'Check that result satisfies original equation'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this works and its mathematical meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact sequence of operations',
                language: 'step-by-step instructions'
            },
            algorithmic: {
                focus: 'Algorithm implementation details',
                language: 'computational and precise'
            },
            theoretical: {
                focus: 'Mathematical theory and proofs',
                language: 'formal and rigorous'
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
                examples: 'mix of small and medium numbers'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every tiny step with analogies',
                examples: 'clock arithmetic and simple patterns',
                analogies: true,
                visualization: 'circles and clocks'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive with theory',
                examples: 'abstract and general cases'
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
            clock_arithmetic: {
                scenario: "Time calculations on 12-hour or 24-hour clocks",
                equation: "(current_time + hours) mod 12 or mod 24",
                examples: [
                    "It's 10 AM. What time is it 5 hours later? (10 + 5) mod 12 = 3 PM",
                    "Meeting in 37 hours. What day and time? Use mod 24"
                ],
                context: "Modular arithmetic naturally describes cyclic time"
            },
            cryptography: {
                scenario: "RSA encryption and decryption",
                equation: "c = m^e mod n (encrypt), m = c^d mod n (decrypt)",
                examples: [
                    "Encrypt message m=42 with public key (e=7, n=143)",
                    "Find private key d given e=17 and φ(n)=240"
                ],
                context: "RSA security relies on modular arithmetic and factoring difficulty"
            },
            isbn_checksum: {
                scenario: "ISBN book number validation",
                equation: "Σ(i × digit_i) mod 11 = 0",
                examples: [
                    "Verify ISBN: 0-306-40615-2",
                    "Find check digit for ISBN 0-07-034207-?"
                ],
                context: "Checksums use modular arithmetic to detect errors"
            },
            calendar_calculations: {
                scenario: "Day of week calculations",
                equation: "Zeller's congruence or similar mod 7",
                examples: [
                    "What day was January 1, 2000?",
                    "What day will your birthday be next year?"
                ],
                context: "Week cycles every 7 days - perfect for mod 7"
            },
            hash_tables: {
                scenario: "Hash function for distributing data",
                equation: "hash(key) = key mod table_size",
                examples: [
                    "Store student ID 12345 in table of size 100",
                    "Design hash for phone numbers mod 1000"
                ],
                context: "Hash functions use modular arithmetic to map keys to array indices"
            },
            music_theory: {
                scenario: "12-tone equal temperament",
                equation: "note_index mod 12 for octave equivalence",
                examples: [
                    "C is 0, what's an octave up? (0 + 12) mod 12 = 0",
                    "Perfect fifth from D (2): (2 + 7) mod 12 = 9 (A)"
                ],
                context: "Musical notes repeat every 12 semitones (octave)"
            },
            diffie_hellman: {
                scenario: "Key exchange protocol",
                equation: "Shared key = (g^ab) mod p",
                examples: [
                    "Alice sends g^a mod p, Bob sends g^b mod p",
                    "Both compute shared secret g^ab mod p"
                ],
                context: "Secure key exchange without transmitting the key"
            },
            circular_buffers: {
                scenario: "Ring buffer indexing in programming",
                equation: "(index + offset) mod buffer_size",
                examples: [
                    "Buffer size 10, current index 8, add 5: (8+5) mod 10 = 3",
                    "Circular queue wraps around using modular arithmetic"
                ],
                context: "Efficient data structures using wraparound indexing"
            },
            random_numbers: {
                scenario: "Linear congruential generators",
                equation: "X_{n+1} = (aX_n + c) mod m",
                examples: [
                    "X_0=1, a=5, c=3, m=16: generates sequence",
                    "Parameters determine period and randomness quality"
                ],
                context: "Pseudorandom number generation uses modular recurrence"
            },
            error_correction: {
                scenario: "CRC checksums and error detection",
                equation: "Polynomial division mod 2",
                examples: [
                    "CRC-8, CRC-16, CRC-32 for data integrity",
                    "Detect transmission errors in networks"
                ],
                context: "Error detection codes use modular polynomial arithmetic"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            basic_operations: {
                skills: ['Division with remainder', 'Basic arithmetic', 'Understanding of remainders'],
                priorKnowledge: ['Integer division', 'Modulo operation'],
                checkQuestions: [
                    "What is 17 divided by 5? What's the remainder?",
                    "What is 23 mod 7?",
                    "What does 'congruent modulo n' mean?"
                ]
            },
            advanced_operations: {
                skills: ['Modular addition/multiplication', 'Exponentiation', 'Binary numbers'],
                priorKnowledge: ['Basic modular arithmetic', 'Powers', 'Binary conversion'],
                checkQuestions: [
                    "Compute (7 × 8) mod 10",
                    "What is 13 in binary?",
                    "What is 2^5?"
                ]
            },
            number_theory: {
                skills: ['Division algorithm', 'Prime factorization', 'Coprimality'],
                priorKnowledge: ['Divisibility rules', 'GCD concept', 'Prime numbers'],
                checkQuestions: [
                    "What is gcd(12, 18)?",
                    "Are 15 and 28 coprime?",
                    "Factor 60 into primes"
                ]
            },
            congruences: {
                skills: ['Modular arithmetic', 'Linear equations', 'GCD'],
                priorKnowledge: ['Congruence notation', 'Inverse concept', 'System solving'],
                checkQuestions: [
                    "Solve 3x ≡ 7 (mod 10)",
                    "When does ax ≡ b (mod n) have a solution?",
                    "What is the inverse of 3 mod 7?"
                ]
            },
            modular_inverse: {
                skills: ['GCD computation', 'Extended Euclidean Algorithm', 'Coprimality check'],
                priorKnowledge: ['Euclidean algorithm', 'Bézout\'s identity', 'Inverse concept'],
                checkQuestions: [
                    "Compute gcd(17, 5)",
                    "What does a^(-1) mean in modular arithmetic?",
                    "When does modular inverse exist?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            clock_arithmetic: {
                description: "Modular arithmetic as clock positions",
                analogy: "Like hours on a clock wrapping from 12 to 1",
                visualization: "Draw clock face with numbers 0 to n-1",
                suitableFor: ['basic_operations', 'modular_addition', 'modular_subtraction'],
                explanation: "Numbers wrap around the circle just like clock hands"
            },
            number_line_wrapping: {
                description: "Number line that wraps around",
                analogy: "Like a circular track where you return to start",
                visualization: "Draw line segment bent into circle",
                suitableFor: ['all_modular'],
                explanation: "After reaching n, we wrap back to 0"
            },
            remainder_classes: {
                description: "Equivalence classes of remainders",
                analogy: "Sorting numbers into buckets by their remainder",
                visualization: "Draw n buckets labeled 0 to n-1",
                suitableFor: ['congruences', 'number_theory'],
                explanation: "Numbers with same remainder belong to same class"
            },
            binary_tree: {
                description: "Binary exponentiation as tree",
                analogy: "Doubling and combining paths in a tree",
                visualization: "Tree showing squaring and multiplication steps",
                suitableFor: ['modular_exponentiation'],
                explanation: "Binary representation guides which operations to perform"
            },
            euclidean_table: {
                description: "Table tracking Euclidean algorithm steps",
                analogy: "Systematic division table working down to GCD",
                visualization: "Table with columns for quotient, remainder",
                suitableFor: ['gcd_computation', 'extended_gcd'],
                explanation: "Each row represents one division step"
            },
            inverse_visualization: {
                description: "Inverse as multiplication table pattern",
                analogy: "Finding the number that gives 1 when multiplied",
                visualization: "Multiplication table mod n highlighting 1s",
                suitableFor: ['modular_inverse'],
                explanation: "Inverse of a is the number where a × ? ≡ 1 (mod n)"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "(7 + 5) mod 12",
                    solution: 0,
                    steps: ["7 + 5 = 12", "12 mod 12 = 0"],
                    difficulty: "easy",
                    concept: "modular addition"
                },
                {
                    problem: "(3 × 4) mod 7",
                    solution: 5,
                    steps: ["3 × 4 = 12", "12 mod 7 = 5"],
                    difficulty: "easy",
                    concept: "modular multiplication"
                },
                {
                    problem: "gcd(12, 8)",
                    solution: 4,
                    steps: ["12 = 8×1 + 4", "8 = 4×2 + 0", "gcd = 4"],
                    difficulty: "easy",
                    concept: "euclidean algorithm"
                }
            ],
            intermediate: [
                {
                    problem: "3^5 mod 7",
                    solution: 5,
                    steps: [
                        "5 in binary: 101",
                        "3^1 = 3 mod 7",
                        "3^2 = 9 mod 7 = 2",
                        "3^4 = 2^2 = 4 mod 7",
                        "3^5 = 3^4 × 3^1 = 4 × 3 = 12 mod 7 = 5"
                    ],
                    difficulty: "medium",
                    concept: "modular exponentiation"
                },
                {
                    problem: "Inverse of 3 mod 7",
                    solution: 5,
                    steps: [
                        "gcd(3, 7) = 1, so inverse exists",
                        "7 = 3×2 + 1",
                        "1 = 7 - 3×2",
                        "1 = 7×1 + 3×(-2)",
                        "3^(-1) ≡ -2 ≡ 5 (mod 7)"
                    ],
                    difficulty: "medium",
                    concept: "modular inverse"
                },
                {
                    problem: "Solve 5x ≡ 3 (mod 11)",
                    solution: 7,
                    steps: [
                        "Find inverse of 5 mod 11",
                        "5^(-1) ≡ 9 (mod 11)",
                        "x ≡ 3 × 9 ≡ 27 ≡ 5 (mod 11)"
                    ],
                    difficulty: "medium",
                    concept: "linear congruence"
                }
            ],
            advanced: [
                {
                    problem: "2^1000 mod 13",
                    solution: 3,
                    steps: [
                        "By Fermat: 2^12 ≡ 1 (mod 13)",
                        "1000 = 12×83 + 4",
                        "2^1000 = (2^12)^83 × 2^4 ≡ 1^83 × 16 ≡ 3 (mod 13)"
                    ],
                    difficulty: "hard",
                    concept: "fermat's little theorem"
                },
                {
                    problem: "CRT: x ≡ 2 (mod 3), x ≡ 3 (mod 5), x ≡ 2 (mod 7)",
                    solution: 23,
                    steps: [
                        "N = 3×5×7 = 105",
                        "M1=35, M2=21, M3=15",
                        "y1=2, y2=1, y3=1",
                        "x = 2×35×2 + 3×21×1 + 2×15×1 = 233 ≡ 23 (mod 105)"
                    ],
                    difficulty: "hard",
                    concept: "chinese remainder theorem"
                },
                {
                    problem: "φ(60)",
                    solution: 16,
                    steps: [
                        "60 = 2^2 × 3 × 5",
                        "φ(60) = φ(4) × φ(3) × φ(5)",
                        "= (4 - 2) × (3 - 1) × (5 - 1)",
                        "= 2 × 2 × 4 = 16"
                    ],
                    difficulty: "hard",
                    concept: "euler totient"
                }
            ],
            byMethod: {
                modular_addition: [
                    { problem: "(5 + 7) mod 10", solution: 2 },
                    { problem: "(15 + 23) mod 12", solution: 2 },
                    { problem: "(100 + 200) mod 7", solution: 6 }
                ],
                modular_multiplication: [
                    { problem: "(6 × 7) mod 11", solution: 9 },
                    { problem: "(12 × 13) mod 10", solution: 6 },
                    { problem: "(25 × 25) mod 13", solution: 1 }
                ],
                modular_exponentiation: [
                    { problem: "2^10 mod 13", solution: 10 },
                    { problem: "7^6 mod 11", solution: 4 },
                    { problem: "5^100 mod 7", solution: 2 }
                ],
                modular_inverse: [
                    { problem: "inv(3) mod 7", solution: 5 },
                    { problem: "inv(5) mod 11", solution: 9 },
                    { problem: "inv(7) mod 13", solution: 2 }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            modular_division: {
                misconception: "Thinking (a/b) mod n = (a mod n) / (b mod n)",
                reality: "Division doesn't work directly; must use modular inverse: a/b ≡ a × b^(-1) (mod n)",
                correctiveExample: "To compute 10/2 mod 7: find inv(2) = 4, then 10×4 = 40 ≡ 5 (mod 7)",
                commonIn: ['basic_operations', 'congruences']
            },
            negative_remainders: {
                misconception: "Thinking -5 mod 7 = -5",
                reality: "Result must be in [0, n-1]; add n until positive: -5 + 7 = 2",
                correctiveExample: "-5 ≡ 2 (mod 7) because -5 = 7×(-1) + 2",
                commonIn: ['modular_subtraction', 'extended_gcd']
            },
            exponent_confusion: {
                misconception: "Computing a^b then taking mod n for large b",
                reality: "Must use binary exponentiation; computing a^b first causes overflow",
                correctiveExample: "For 2^1000 mod 13, don't compute 2^1000; use binary method",
                commonIn: ['modular_exponentiation']
            },
            inverse_existence: {
                misconception: "Thinking every number has an inverse mod n",
                reality: "Inverse exists only if gcd(a, n) = 1",
                correctiveExample: "2 has no inverse mod 6 because gcd(2, 6) = 2 ≠ 1",
                commonIn: ['modular_inverse', 'linear_congruences']
            },
            congruence_vs_equality: {
                misconception: "Treating ≡ as = (equals)",
                reality: "a ≡ b (mod n) means a and b have same remainder, not that a = b",
                correctiveExample: "7 ≡ 2 (mod 5) but 7 ≠ 2; they're in same equivalence class",
                commonIn: ['all_modular']
            },
            gcd_direction: {
                misconception: "Order matters in gcd(a, b)",
                reality: "gcd(a, b) = gcd(b, a); order doesn't affect result",
                correctiveExample: "gcd(12, 8) = gcd(8, 12) = 4",
                commonIn: ['euclidean_algorithm']
            },
            crt_coprimality: {
                misconception: "CRT works for any moduli",
                reality: "Moduli must be pairwise coprime for unique solution",
                correctiveExample: "CRT fails for x ≡ 1 (mod 4), x ≡ 2 (mod 6) because gcd(4,6) ≠ 1",
                commonIn: ['chinese_remainder']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            clock_analogy: {
                analogy: "12-hour clock",
                explanation: "Just like 11 + 2 = 1 on a clock, in mod 12: (11 + 2) mod 12 = 1. Numbers wrap around.",
                suitableFor: ['basic_operations', 'modular_addition'],
                ELI5: "Imagine a clock. If it's 11 o'clock and you wait 2 hours, it becomes 1 o'clock, not 13 o'clock!"
            },
            remainder_buckets: {
                analogy: "Sorting into buckets",
                explanation: "Like sorting marbles into buckets by color, we sort numbers by their remainder when divided by n.",
                suitableFor: ['congruences', 'equivalence_classes'],
                ELI5: "Pretend you have 5 buckets numbered 0, 1, 2, 3, 4. Every number goes in the bucket matching its remainder when divided by 5."
            },
            inverse_as_undo: {
                analogy: "Multiplying by inverse undoes multiplication",
                explanation: "Just like dividing by 3 undoes multiplying by 3, the modular inverse undoes modular multiplication.",
                suitableFor: ['modular_inverse'],
                ELI5: "If you have a magic number that, when you multiply it by 3, gives you 1, that's the inverse of 3!"
            },
            gcd_as_sharing: {
                analogy: "Largest equal groups",
                explanation: "GCD is like finding the largest size of groups you can make from two piles of items with nothing left over.",
                suitableFor: ['gcd_computation'],
                ELI5: "You have 12 apples and 8 oranges. What's the biggest equal group you can make? 4 groups of 3 apples and 2 oranges!"
            },
            exponentiation_doubling: {
                analogy: "Doubling your money",
                explanation: "Instead of adding interest 100 times, you can double it (square) repeatedly to grow faster.",
                suitableFor: ['modular_exponentiation'],
                ELI5: "To get 2^8, you can multiply 2 eight times, OR double it 3 times: 2→4→16→256. Much faster!"
            },
            crt_puzzle: {
                analogy: "Multiple clues to find a number",
                explanation: "CRT is like having multiple clues about a number (its remainders with different divisors) to uniquely identify it.",
                suitableFor: ['chinese_remainder'],
                ELI5: "I'm thinking of a number. When you divide by 3, remainder is 2. Divide by 5, remainder is 3. Can you guess my number? (8!)"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            modular_addition: {
                level1: "What do you get when you add the two numbers normally?",
                level2: "Now, what's the remainder when you divide that sum by the modulus?",
                level3: "Divide your sum by {modulus} and take the remainder",
                level4: "({a} + {b}) = {sum}, and {sum} mod {modulus} = {answer}"
            },
            modular_multiplication: {
                level1: "First, multiply the two numbers together",
                level2: "Now divide that product by the modulus",
                level3: "The remainder is your answer",
                level4: "({a} × {b}) = {product}, and {product} mod {modulus} = {answer}"
            },
            modular_exponentiation: {
                level1: "This exponent is too large to compute directly. What method should you use?",
                level2: "Convert the exponent to binary to use the fast method",
                level3: "Use repeated squaring (binary exponentiation)",
                level4: "Express {exponent} in binary: {binary}, then square and multiply"
            },
            modular_inverse: {
                level1: "First, check if the inverse exists. What must be true?",
                level2: "You need gcd({a}, {modulus}) = 1. Is this true?",
                level3: "Use the Extended Euclidean Algorithm to find the inverse",
                level4: "Run Extended GCD to find x where {a}x + {modulus}y = 1"
            },
            gcd_computation: {
                level1: "What algorithm finds the GCD of two numbers?",
                level2: "Use the Euclidean algorithm: repeatedly divide and take remainders",
                level3: "Compute {a} mod {b}, then gcd({b}, {a} mod {b})",
                level4: "Keep dividing: {a} = {b}×q + r, then find gcd({b}, r)"
            },
            linear_congruence: {
                level1: "What condition must be satisfied for a solution to exist?",
                level2: "Check if gcd({a}, {modulus}) divides {b}",
                level3: "Find the inverse of {a} modulo {modulus}, then multiply by {b}",
                level4: "x ≡ {b} × inv({a}) (mod {modulus})"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Compute 17 mod 5",
                    answer: 2,
                    assesses: "basic_modulo",
                    difficulty: "basic"
                },
                {
                    question: "Compute (7 + 9) mod 12",
                    answer: 4,
                    assesses: "modular_addition",
                    difficulty: "basic"
                },
                {
                    question: "Compute gcd(24, 18)",
                    answer: 6,
                    assesses: "gcd_computation",
                    difficulty: "basic"
                },
                {
                    question: "Find the inverse of 3 mod 7",
                    answer: 5,
                    assesses: "modular_inverse",
                    difficulty: "intermediate"
                },
                {
                    question: "Compute 2^10 mod 13",
                    answer: 10,
                    assesses: "modular_exponentiation",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "What is the range of possible results for a mod 7?",
                    options: ["0-6", "1-7", "0-7", "-∞ to ∞"],
                    correct: "0-6",
                    explanation: "Modulo operation returns remainder in [0, n-1]"
                },
                {
                    question: "When does a have a modular inverse mod n?",
                    options: ["Always", "When a < n", "When gcd(a,n)=1", "When a is prime"],
                    correct: "When gcd(a,n)=1",
                    explanation: "Inverse exists if and only if a and n are coprime"
                },
                {
                    question: "How to compute (a - b) mod n if a < b?",
                    options: ["Can't do it", "Add n to make positive", "Use absolute value", "Just compute a-b"],
                    correct: "Add n to make positive",
                    explanation: "If negative, add n until result is in [0, n-1]"
                },
                {
                    question: "What's the most efficient way to compute 2^1000 mod 13?",
                    options: ["Compute 2^1000 then mod", "Binary exponentiation", "Multiply 2 by itself 1000 times", "Calculator"],
                    correct: "Binary exponentiation",
                    explanation: "Binary method prevents overflow and is O(log exponent)"
                }
            ],
            summative: [
                {
                    question: "Find x such that 7x ≡ 3 (mod 15)",
                    answer: "No solution",
                    showsWork: true,
                    rubric: {
                        check_coprimality: 2,
                        recognize_no_solution: 2,
                        explanation: 1
                    }
                },
                {
                    question: "Use CRT to solve: x ≡ 2 (mod 3), x ≡ 3 (mod 5), x ≡ 1 (mod 7)",
                    answer: 78,
                    showsWork: true,
                    rubric: {
                        verify_coprime: 1,
                        compute_M_values: 2,
                        find_inverses: 2,
                        combine_correctly: 2,
                        final_reduction: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "13 mod 5",
                    "(8 + 7) mod 10",
                    "(3 × 4) mod 7",
                    "gcd(14, 21)"
                ],
                medium: [
                    "2^8 mod 11",
                    "Inverse of 5 mod 13",
                    "Solve 3x ≡ 5 (mod 11)",
                    "gcd(123, 456)"
                ],
                hard: [
                    "2^100 mod 17 using Fermat",
                    "Solve system: x ≡ 1 (mod 5), x ≡ 2 (mod 7)",
                    "Find φ(1000)",
                    "Compute 17^(-1) mod 101"
                ]
            },
            byObjective: {
                canComputeBasicMod: [
                    "25 mod 7",
                    "100 mod 13",
                    "-5 mod 8",
                    "0 mod 10"
                ],
                canDoModularArithmetic: [
                    "(15 + 28) mod 12",
                    "(7 × 9) mod 10",
                    "(20 - 13) mod 6",
                    "(5^3) mod 11"
                ],
                canFindGCD: [
                    "gcd(48, 18)",
                    "gcd(100, 75)",
                    "gcd(17, 13)",
                    "gcd(1001, 121)"
                ],
                canFindInverse: [
                    "inv(3) mod 10",
                    "inv(7) mod 15",
                    "inv(11) mod 13",
                    "inv(5) mod 17"
                ],
                canSolveCongruences: [
                    "5x ≡ 3 (mod 7)",
                    "4x ≡ 6 (mod 10)",
                    "7x ≡ 1 (mod 12)",
                    "3x ≡ 9 (mod 15)"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "simple_modulo": "Just divide and take remainder",
                "modular_addition": "Add first, then take mod (or reduce operands first)",
                "modular_multiplication": "Reduce operands first to prevent overflow, multiply, then mod",
                "small_exponent": "Can compute directly if exponent small",
                "large_exponent": "Must use binary exponentiation",
                "finding_inverse": "Use Extended Euclidean Algorithm (or Fermat if prime)",
                "prime_modulus": "Can use Fermat's Little Theorem shortcuts",
                "composite_modulus": "Use Euler's theorem or factor the modulus",
                "system_of_congruences": "Check if coprime, then use CRT"
            },
            whenToUseWhat: {
                euclidean_algorithm: "For finding GCD of any two numbers",
                extended_euclidean: "When you need GCD and Bézout coefficients (for inverse)",
                fermat_theorem: "When modulus is prime and you need inverse or reduction",
                euler_theorem: "When modulus is composite and you need exponent reduction",
                binary_exponentiation: "For any modular exponentiation (always recommended)",
                crt: "For system of congruences with pairwise coprime moduli"
            },
            methodSelection: {
                factorsToConsider: [
                    "Size of numbers (overflow risk?)",
                    "Is modulus prime or composite?",
                    "Size of exponent (if applicable)",
                    "Are numbers coprime?",
                    "System or single congruence?"
                ],
                generalApproach: [
                    "1. Check prerequisites (coprimality, primality, etc.)",
                    "2. Reduce numbers modulo n if large",
                    "3. Choose appropriate algorithm",
                    "4. Perform computation with intermediate reductions",
                    "5. Verify result"
                ]
            },
            optimizationTips: {
                "Reduce early": "Take mod after each operation to keep numbers small",
                "Use properties": "a^(n-1) ≡ 1 (mod n) if n prime (Fermat)",
                "Binary for exponents": "Always use binary method for exponents > 10",
                "Check coprimality first": "Avoid computing inverse if gcd ≠ 1",
                "Factor when helpful": "φ(n) easier to compute from prime factorization"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Basic Modulo Sprint",
                    timeLimit: 60,
                    problems: [
                        "15 mod 7",
                        "23 mod 5",
                        "100 mod 13",
                        "47 mod 9",
                        "88 mod 11"
                    ]
                },
                {
                    name: "Modular Arithmetic Challenge",
                    timeLimit: 120,
                    problems: [
                        "(7 + 8) mod 10",
                        "(6 × 7) mod 11",
                        "(15 - 8) mod 7",
                        "(9 + 13) mod 5",
                        "(4 × 9) mod 13"
                    ]
                },
                {
                    name: "GCD Speed Round",
                    timeLimit: 90,
                    problems: [
                        "gcd(12, 8)",
                        "gcd(35, 14)",
                        "gcd(48, 18)",
                        "gcd(100, 35)",
                        "gcd(17, 13)"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Find the Modulus",
                    problem: "x ≡ 3 (mod ?) and x ≡ 7 (mod ?)",
                    given: "x = 23",
                    solve: "Find two possible moduli",
                    solution: "mod 4 (since 23-3=20, divisible by 4) and mod 8 (since 23-7=16, divisible by 8)"
                },
                {
                    name: "Clock Problem",
                    problem: "A clock shows 7 o'clock. What time will it show after 100 hours?",
                    equation: "(7 + 100) mod 12",
                    solution: "11 o'clock"
                },
                {
                    name: "Inverse Challenge",
                    challenge: "Find a number whose inverse mod 13 is itself",
                    constraints: "Must be in range [1, 12]",
                    sampleSolution: "x = 1 or x = 12 (since 1×1 = 1 and 12×12 = 144 ≡ 1 mod 13)"
                },
                {
                    name: "Exponent Puzzle",
                    problem: "Find smallest positive integer k such that 2^k ≡ 1 (mod 15)",
                    concept: "Multiplicative order",
                    solution: "k = 4 (since 2^4 = 16 ≡ 1 mod 15)"
                }
            ],
            applications: [
                {
                    scenario: "ISBN Check Digit",
                    problem: "ISBN 0-306-40615-? has check digit such that sum mod 11 = 0. Find ?",
                    equation: "(1×0 + 2×3 + 3×0 + 4×6 + 5×4 + 6×0 + 7×6 + 8×1 + 9×5 + 10×?) mod 11 = 0",
                    solution: "Check digit = 2"
                },
                {
                    scenario: "RSA Toy Example",
                    problem: "Public key (e=7, n=33). Encrypt message m=2",
                    equation: "c = 2^7 mod 33",
                    solution: "c = 128 mod 33 = 29"
                },
                {
                    scenario: "Day of Week",
                    problem: "Today is Wednesday (day 3). What day is it 100 days from now?",
                    equation: "(3 + 100) mod 7",
                    solution: "Day 5 = Friday"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Compute 3^20 mod 7",
                        "3^20 = 3486784401",  // Correct value
                        "3486784401 mod 7 = 1"  // Correct answer but bad method
                    ],
                    correctAnswer: "1",
                    errorType: "Method: should use binary exponentiation, not compute 3^20 directly"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Find inverse of 2 mod 6",
                        "Using Extended GCD...",  // ERROR: inverse doesn't exist
                        "2^(-1) ≡ 3 (mod 6)"  // Wrong!
                    ],
                    correctAnswer: "No inverse exists",
                    errorType: "Didn't check gcd(2, 6) = 2 ≠ 1, so no inverse"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Compute (25 - 30) mod 7",
                        "25 - 30 = -5",  // Correct
                        "-5 mod 7 = -5"  // ERROR: didn't adjust to [0, 6]
                    ],
                    correctAnswer: "2",
                    errorType: "Must add 7 to negative result: -5 + 7 = 2"
                }
            ]
        };
    }

    // ===== MODULAR ARITHMETIC SOLVERS =====

    solveModularAddition(problem) {
        const { a, b, n } = problem.parameters;
        const sum = a + b;
        const result = this.mod(sum, n);

        return {
            operation: 'Modular Addition',
            expression: `(${a} + ${b}) mod ${n}`,
            intermediateSum: sum,
            result: result,
            category: 'basic_operations',
            explanation: `Add ${a} + ${b} = ${sum}, then ${sum} mod ${n} = ${result}`
        };
    }

    solveModularSubtraction(problem) {
        const { a, b, n } = problem.parameters;
        const difference = a - b;
        const result = this.mod(difference, n);

        return {
            operation: 'Modular Subtraction',
            expression: `(${a} - ${b}) mod ${n}`,
            intermediateDifference: difference,
            result: result,
            category: 'basic_operations',
            explanation: `Subtract ${a} - ${b} = ${difference}, then adjust to [0, ${n-1}]: ${result}`,
            note: difference < 0 ? `Added ${n} to negative result` : ''
        };
    }

    solveModularMultiplication(problem) {
        const { a, b, n } = problem.parameters;
        
        // Reduce operands first to prevent overflow
        const a_reduced = this.mod(a, n);
        const b_reduced = this.mod(b, n);
        const product = a_reduced * b_reduced;
        const result = this.mod(product, n);

        return {
            operation: 'Modular Multiplication',
            expression: `(${a} × ${b}) mod ${n}`,
            reducedOperands: `${a_reduced} × ${b_reduced}`,
            intermediateProduct: product,
            result: result,
            category: 'basic_operations',
            explanation: `First reduce: ${a} mod ${n} = ${a_reduced}, ${b} mod ${n} = ${b_reduced}. Then ${a_reduced} × ${b_reduced} = ${product}. Finally ${product} mod ${n} = ${result}`
        };
    }

    solveModularExponentiation(problem) {
        const { base, exponent, modulus } = problem.parameters;
        
        // Binary exponentiation
        const steps = [];
        const binaryExp = exponent.toString(2);
        
        let result = 1;
        let currentBase = this.mod(base, modulus);
        
        steps.push({
            step: 'Initialize',
            description: `Convert exponent to binary: ${exponent} = ${binaryExp}₂`,
            result: result,
            base: currentBase
        });

        // Process binary digits from right to left
        for (let i = binaryExp.length - 1; i >= 0; i--) {
            const bit = binaryExp[i];
            
            if (bit === '1') {
                result = this.mod(result * currentBase, modulus);
                steps.push({
                    step: `Bit ${binaryExp.length - 1 - i}`,
                    description: `Bit is 1: multiply result by ${currentBase}`,
                    operation: `result = (result × ${currentBase}) mod ${modulus}`,
                    result: result
                });
            } else {
                steps.push({
                    step: `Bit ${binaryExp.length - 1 - i}`,
                    description: `Bit is 0: skip multiplication`,
                    result: result
                });
            }
            
            if (i > 0) {
                const oldBase = currentBase;
                currentBase = this.mod(currentBase * currentBase, modulus);
                steps.push({
                    step: 'Square base',
                    description: `Square base: ${oldBase}² mod ${modulus}`,
                    operation: `${oldBase}² = ${oldBase * oldBase}`,
                    base: currentBase
                });
            }
        }

        return {
            operation: 'Modular Exponentiation',
            expression: `${base}^${exponent} mod ${modulus}`,
            method: 'Binary Exponentiation (Fast Powering)',
            binaryExponent: binaryExp,
            steps: steps,
            result: result,
            category: 'advanced_operations',
            explanation: `Using binary method: ${exponent} in binary is ${binaryExp}. Process bits and square base repeatedly.`,
            complexity: `O(log ${exponent}) multiplications instead of O(${exponent})`
        };
    }

    solveModularInverse(problem) {
        const { a, n } = problem.parameters;
        
        // First check if inverse exists
        const gcdResult = this.extendedGCD(a, n);
        
        if (gcdResult.gcd !== 1) {
            return {
                operation: 'Modular Multiplicative Inverse',
                expression: `${a}^(-1) mod ${n}`,
                exists: false,
                reason: `gcd(${a}, ${n}) = ${gcdResult.gcd} ≠ 1`,
                explanation: 'Inverse exists only when a and n are coprime',
                category: 'advanced_operations'
            };
        }

        // Inverse exists, get it from extended GCD
        let inverse = this.mod(gcdResult.x, n);
        
        // Verification
        const check = this.mod(a * inverse, n);

        return {
            operation: 'Modular Multiplicative Inverse',
            expression: `${a}^(-1) mod ${n}`,
            exists: true,
            method: 'Extended Euclidean Algorithm',
            gcdSteps: gcdResult.steps,
            bezoutCoefficients: { x: gcdResult.x, y: gcdResult.y },
            bezoutIdentity: `${a} × ${gcdResult.x} + ${n} × ${gcdResult.y} = ${gcdResult.gcd}`,
            rawInverse: gcdResult.x,
            inverse: inverse,
            verification: {
                check: `${a} × ${inverse} mod ${n} = ${check}`,
                isValid: check === 1
            },
            result: inverse,
            category: 'advanced_operations',
            explanation: `Since gcd(${a}, ${n}) = 1, inverse exists. Extended GCD gives: ${a} × ${gcdResult.x} + ${n} × ${gcdResult.y} = 1. So ${a} × ${gcdResult.x} ≡ 1 (mod ${n}). Adjusting to [0, ${n-1}]: inverse = ${inverse}`
        };
    }

    solveGCD(problem) {
        const { a, b } = problem.parameters;
        
        const steps = [];
        let r0 = Math.max(a, b);
        let r1 = Math.min(a, b);
        
        steps.push({
            step: 0,
            description: 'Initialize',
            dividend: r0,
            divisor: r1
        });

        let stepNum = 1;
        while (r1 !== 0) {
            const quotient = Math.floor(r0 / r1);
            const remainder = r0 % r1;
            
            steps.push({
                step: stepNum,
                description: `Divide ${r0} by ${r1}`,
                equation: `${r0} = ${r1} × ${quotient} + ${remainder}`,
                dividend: r0,
                divisor: r1,
                quotient: quotient,
                remainder: remainder
            });
            
            r0 = r1;
            r1 = remainder;
            stepNum++;
        }

        return {
            operation: 'Greatest Common Divisor',
            expression: `gcd(${a}, ${b})`,
            method: 'Euclidean Algorithm',
            steps: steps,
            gcd: r0,
            result: r0,
            category: 'number_theory',
            explanation: `Apply Euclidean algorithm: repeatedly divide and take remainders until remainder is 0. Last non-zero remainder is the GCD.`
        };
    }

    solveExtendedGCD(problem) {
        const { a, b } = problem.parameters;
        const result = this.extendedGCD(a, b);
        
        return {
            operation: 'Extended Euclidean Algorithm',
            expression: `Extended GCD(${a}, ${b})`,
            method: 'Extended Euclidean Algorithm',
            steps: result.steps,
            gcd: result.gcd,
            coefficients: { x: result.x, y: result.y },
            bezoutIdentity: `${a} × (${result.x}) + ${b} × (${result.y}) = ${result.gcd}`,
            verification: {
                leftSide: a * result.x + b * result.y,
                rightSide: result.gcd,
                isValid: (a * result.x + b * result.y) === result.gcd
            },
            result: result,
            category: 'number_theory',
            explanation: `Extended GCD not only finds gcd(${a}, ${b}) = ${result.gcd}, but also expresses it as a linear combination: ${result.gcd} = ${a}×(${result.x}) + ${b}×(${result.y})`
        };
    }

    solveLinearCongruence(problem) {
        const { a, b, n } = problem.parameters;
        
        // Check if solution exists: gcd(a, n) must divide b
        const gcdResult = this.extendedGCD(a, n);
        const d = gcdResult.gcd;
        
        if (b % d !== 0) {
            return {
                operation: 'Linear Congruence',
                expression: `${a}x ≡ ${b} (mod ${n})`,
                exists: false,
                reason: `gcd(${a}, ${n}) = ${d} does not divide ${b}`,
                explanation: `For ax ≡ b (mod n) to have a solution, gcd(a, n) must divide b. Here ${d} ∤ ${b}.`,
                category: 'congruences'
            };
        }

        if (d === 1) {
            // Unique solution
            const inverse = this.mod(gcdResult.x, n);
            const solution = this.mod(b * inverse, n);
            
            return {
                operation: 'Linear Congruence',
                expression: `${a}x ≡ ${b} (mod ${n})`,
                exists: true,
                solutionType: 'Unique solution',
                method: 'Find modular inverse of a, multiply by b',
                inverseOfA: inverse,
                solution: solution,
                verification: {
                    check: `${a} × ${solution} mod ${n} = ${this.mod(a * solution, n)}`,
                    shouldBe: b,
                    isValid: this.mod(a * solution, n) === this.mod(b, n)
                },
                result: solution,
                category: 'congruences',
                explanation: `Since gcd(${a}, ${n}) = 1, unique solution exists. Find inverse: ${a}^(-1) ≡ ${inverse} (mod ${n}). Then x ≡ ${b} × ${inverse} ≡ ${solution} (mod ${n})`
            };
        } else {
            // Multiple solutions
            const a_reduced = a / d;
            const b_reduced = b / d;
            const n_reduced = n / d;
            
            const gcdReduced = this.extendedGCD(a_reduced, n_reduced);
            const inverse_reduced = this.mod(gcdReduced.x, n_reduced);
            const x0 = this.mod(b_reduced * inverse_reduced, n_reduced);
            
            const solutions = [];
            for (let i = 0; i < d; i++) {
                solutions.push(this.mod(x0 + i * n_reduced, n));
            }
            
            return {
                operation: 'Linear Congruence',
                expression: `${a}x ≡ ${b} (mod ${n})`,
                exists: true,
                solutionType: `${d} solutions`,
                method: 'Reduce by gcd, solve reduced congruence',
                gcd: d,
                reducedCongruence: `${a_reduced}x ≡ ${b_reduced} (mod ${n_reduced})`,
                baseSolution: x0,
                allSolutions: solutions,
                result: solutions,
                category: 'congruences',
                explanation: `gcd(${a}, ${n}) = ${d} divides ${b}, so ${d} solutions exist. Reduce: ${a_reduced}x ≡ ${b_reduced} (mod ${n_reduced}). Solve for x₀ = ${x0}. All solutions: x ≡ ${x0} + k×${n_reduced} for k = 0, 1, ..., ${d-1} (mod ${n})`
            };
        }
    }

    solveChineseRemainder(problem) {
        const { system } = problem.parameters;
        // system is array of {remainder: a_i, modulus: n_i}
        
        // Check pairwise coprimality
        const n = system.length;
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                const g = this.extendedGCD(system[i].modulus, system[j].modulus).gcd;
                if (g !== 1) {
                    return {
                        operation: 'Chinese Remainder Theorem',
                        exists: false,
                        reason: `Moduli not pairwise coprime: gcd(${system[i].modulus}, ${system[j].modulus}) = ${g} ≠ 1`,
                        category: 'congruences'
                    };
                }
            }
        }

        // Compute N = product of all moduli
        const N = system.reduce((prod, eq) => prod * eq.modulus, 1);
        
        const steps = [];
        let x = 0;

        for (let i = 0; i < n; i++) {
            const a_i = system[i].remainder;
            const n_i = system[i].modulus;
            const M_i = N / n_i;
            
            // Find y_i = M_i^(-1) mod n_i
            const gcdResult = this.extendedGCD(M_i, n_i);
            const y_i = this.mod(gcdResult.x, n_i);
            
            const term = a_i * M_i * y_i;
            x += term;
            
            steps.push({
                equation: i,
                remainder: a_i,
                modulus: n_i,
                M_i: M_i,
                y_i: y_i,
                term: term,
                runningSum: x
            });
        }

        x = this.mod(x, N);

        return {
            operation: 'Chinese Remainder Theorem',
            system: system.map((eq, i) => `x ≡ ${eq.remainder} (mod ${eq.modulus})`),
            exists: true,
            method: 'CRT Formula',
            N: N,
            steps: steps,
            solution: x,
            result: x,
            category: 'congruences',
            explanation: `Moduli are pairwise coprime, so unique solution mod ${N} exists. For each congruence: compute M_i = N/n_i, find y_i = M_i^(-1) mod n_i, then x = Σ(a_i × M_i × y_i) mod ${N}`
        };
    }

    solveEulerTotient(problem) {
        const { n } = problem.parameters;
        
        if (n === 1) {
            return {
                operation: 'Euler Totient Function',
                expression: `φ(${n})`,
                result: 1,
                category: 'number_theory',
                explanation: 'φ(1) = 1 by definition'
            };
        }

        // Prime factorization
        const factorization = this.primeFactorize(n);
        
        // Compute φ(n) using formula: φ(p^k) = p^k - p^(k-1) = p^(k-1)(p - 1)
        let phi = 1;
        const steps = [];
        
        for (const [prime, exponent] of Object.entries(factorization)) {
            const p = parseInt(prime);
            const k = exponent;
            const phi_pk = Math.pow(p, k) - Math.pow(p, k - 1);
            phi *= phi_pk;
            
            steps.push({
                prime: p,
                exponent: k,
                formula: `φ(${p}^${k}) = ${p}^${k} - ${p}^${k-1}`,
                value: phi_pk
            });
        }

        return {
            operation: 'Euler Totient Function',
            expression: `φ(${n})`,
            factorization: this.formatFactorization(factorization),
            steps: steps,
            formula: `φ(n) = product of φ(p^k) for each prime power in factorization`,
            result: phi,
            category: 'number_theory',
            explanation: `Factor ${n}, then use φ(p^k) = p^(k-1)(p-1). Since φ is multiplicative, multiply all φ(p^k) values.`
        };
    }

    solvePrimitiveRoot(problem) {
        const { n } = problem.parameters;
        
        return {
            operation: 'Primitive Root Finding',
            expression: `Find primitive root of ${n}`,
            note: 'Complex algorithm - requires checking order of elements',
            category: 'advanced_number_theory',
            explanation: 'Primitive root finding is an advanced topic requiring significant computation'
        };
    }

    solveDiscreteLogarithm(problem) {
        const { g, h, n } = problem.parameters;
        
        return {
            operation: 'Discrete Logarithm',
            expression: `Find x where ${g}^x ≡ ${h} (mod ${n})`,
            note: 'Hard problem in general - requires algorithms like Baby-step Giant-step or Pohlig-Hellman',
            category: 'advanced_number_theory',
            explanation: 'Discrete logarithm is computationally hard (foundation of cryptographic security)'
        };
    }

    solveQuadraticResidue(problem) {
        const { a, p } = problem.parameters;
        
        return {
            operation: 'Quadratic Residue Test',
            expression: `Is ${a} a quadratic residue mod ${p}?`,
            note: 'Requires Legendre symbol or Euler\'s criterion',
            category: 'advanced_number_theory',
            explanation: 'Quadratic residue testing uses Euler\'s criterion or Legendre symbol'
        };
    }

    // ===== HELPER FUNCTIONS =====

    mod(a, n) {
        // Proper modulo that always returns positive result
        return ((a % n) + n) % n;
    }

    extendedGCD(a, b) {
        const steps = [];
        
        let old_r = a, r = b;
        let old_s = 1, s = 0;
        let old_t = 0, t = 1;
        
        steps.push({
            step: 0,
            r: old_r,
            s: old_s,
            t: old_t,
            equation: `${old_r} = ${a}×${old_s} + ${b}×${old_t}`
        });

        steps.push({
            step: 1,
            r: r,
            s: s,
            t: t,
            equation: `${r} = ${a}×${s} + ${b}×${t}`
        });

        let stepNum = 2;
        while (r !== 0) {
            const quotient = Math.floor(old_r / r);
            
            [old_r, r] = [r, old_r - quotient * r];
            [old_s, s] = [s, old_s - quotient * s];
            [old_t, t] = [t, old_t - quotient * t];
            
            if (r !== 0) {
                steps.push({
                    step: stepNum,
                    quotient: quotient,
                    r: r,
                    s: s,
                    t: t,
                    equation: `${r} = ${a}×${s} + ${b}×${t}`
                });
                stepNum++;
            }
        }

        return {
            gcd: old_r,
            x: old_s,
            y: old_t,
            steps: steps
        };
    }

    primeFactorize(n) {
        const factors = {};
        let num = n;
        
        // Check for 2s
        while (num % 2 === 0) {
            factors[2] = (factors[2] || 0) + 1;
            num = num / 2;
        }
        
        // Check odd factors
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            while (num % i === 0) {
                factors[i] = (factors[i] || 0) + 1;
                num = num / i;
            }
        }
        
        // If num > 1, then it's a prime factor
        if (num > 1) {
            factors[num] = 1;
        }
        
        return factors;
    }

    formatFactorization(factors) {
        const parts = [];
        for (const [prime, exponent] of Object.entries(factors)) {
            if (exponent === 1) {
                parts.push(prime);
            } else {
                parts.push(`${prime}^${exponent}`);
            }
        }
        return parts.join(' × ');
    }

    // ===== MAIN SOLVER METHOD =====

    solveModularProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseModularProblem(equation, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveModularProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateModularSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateModularGraphData();

            // Generate workbook
            this.generateModularWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                result: this.currentSolution?.result,
                steps: this.solutionSteps
            };

        } catch (error) {
            throw new Error(`Failed to solve modular problem: ${error.message}`);
        }
    }

    parseModularProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.modularTypes[problemType]) {
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

        // Auto-detect modular problem type
        for (const [type, config] of Object.entries(this.modularTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractModularParameters(match, type);

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

        // Default based on parameters
        if (parameters.a !== undefined && parameters.n !== undefined) {
            if (parameters.b !== undefined) {
                return {
                    originalInput: equation || 'Modular arithmetic operation',
                    cleanInput: cleanInput,
                    type: 'modular_addition',
                    scenario: scenario,
                    parameters: { ...parameters },
                    context: { ...context },
                    parsedAt: new Date().toISOString()
                };
            }
        }

        throw new Error(`Unable to recognize modular problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/≡/g, '===')
            .replace(/mod/gi, 'mod')
            .replace(/\*\*/g, '^')
            .trim();
    }

    extractModularParameters(match, type) {
        const params = {};

        if (!match) return params;

        switch(type) {
            case 'modular_addition':
            case 'modular_subtraction':
                if (match[1]) params.a = parseInt(match[1]);
                if (match[2]) params.b = parseInt(match[2]);
                if (match[3]) params.n = parseInt(match[3]);
                break;

            case 'modular_multiplication':
                if (match[1]) params.a = parseInt(match[1]);
                if (match[2]) params.b = parseInt(match[2]);
                if (match[3]) params.n = parseInt(match[3]);
                break;

            case 'modular_exponentiation':
                if (match[1]) params.base = parseInt(match[1]);
                if (match[2]) params.exponent = parseInt(match[2]);
                if (match[3]) params.modulus = parseInt(match[3]);
                break;

            case 'modular_inverse':
                if (match[1]) params.a = parseInt(match[1]);
                if (match[2]) params.n = parseInt(match[2]);
                break;

            case 'gcd_computation':
            case 'extended_gcd':
                if (match[1]) params.a = parseInt(match[1]);
                if (match[2]) params.b = parseInt(match[2]);
                break;

            case 'linear_congruence':
                if (match[1]) params.a = parseInt(match[1]);
                if (match[2]) params.b = parseInt(match[2]);
                if (match[3]) params.n = parseInt(match[3]);
                break;

            case 'euler_totient':
                if (match[1]) params.n = parseInt(match[1]);
                break;
        }

        return params;
    }

    solveModularProblem_Internal(problem) {
        const solver = this.modularTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for modular problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // ===== STEP GENERATION =====

    generateModularSteps(problem, solution) {
        let baseSteps = this.generateBaseModularSteps(problem, solution);

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

    generateBaseModularSteps(problem, solution) {
        const { type } = problem;
        const category = this.modularTypes[type]?.category;

        switch(category) {
            case 'basic_operations':
                return this.generateBasicOperationSteps(problem, solution);
            case 'advanced_operations':
                return this.generateAdvancedOperationSteps(problem, solution);
            case 'number_theory':
                return this.generateNumberTheorySteps(problem, solution);
            case 'congruences':
                return this.generateCongruenceSteps(problem, solution);
            default:
                return this.generateGenericModularSteps(problem, solution);
        }
    }

    generateBasicOperationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given operation',
            description: 'Identify the modular operation to perform',
            expression: solution.expression,
            reasoning: 'This is a basic modular arithmetic operation',
            goalStatement: `We need to compute ${solution.expression}`
        });

        if (solution.operation === 'Modular Addition') {
            const { a, b, n } = problem.parameters;
            
            steps.push({
                stepNumber: 2,
                step: 'Add the numbers',
                description: `Add ${a} + ${b}`,
                beforeExpression: `${a} + ${b}`,
                afterExpression: `${solution.intermediateSum}`,
                reasoning: 'Perform regular addition first',
                algebraicRule: 'Addition in integers'
            });

            steps.push({
                stepNumber: 3,
                step: 'Take modulo',
                description: `Divide ${solution.intermediateSum} by ${n} and take remainder`,
                beforeExpression: `${solution.intermediateSum} mod ${n}`,
                afterExpression: `${solution.result}`,
                reasoning: 'Remainder gives us the result in range [0, n-1]',
                finalAnswer: true
            });

        } else if (solution.operation === 'Modular Subtraction') {
            const { a, b, n } = problem.parameters;
            
            steps.push({
                stepNumber: 2,
                step: 'Subtract the numbers',
                description: `Subtract ${a} - ${b}`,
                beforeExpression: `${a} - ${b}`,
                afterExpression: `${solution.intermediateDifference}`,
                reasoning: 'Perform regular subtraction first'
            });

            if (solution.intermediateDifference < 0) {
                steps.push({
                    stepNumber: 3,
                    step: 'Adjust negative result',
                    description: `Add ${n} to make result positive`,
                    beforeExpression: `${solution.intermediateDifference} + ${n}`,
                    afterExpression: `${solution.result}`,
                    reasoning: 'Modulo result must be in [0, n-1]',
                    finalAnswer: true
                });
            } else {
                steps.push({
                    stepNumber: 3,
                    step: 'Take modulo',
                    description: `${solution.intermediateDifference} mod ${n}`,
                    afterExpression: `${solution.result}`,
                    reasoning: 'Result is already positive, just reduce if needed',
                    finalAnswer: true
                });
            }

        } else if (solution.operation === 'Modular Multiplication') {
            const { a, b, n } = problem.parameters;
            
            steps.push({
                stepNumber: 2,
                step: 'Reduce operands (optional)',
                description: `Reduce ${a} and ${b} modulo ${n}`,
                beforeExpression: `${a} mod ${n} = ${solution.reducedOperands.split(' × ')[0]}`,
                afterExpression: `${b} mod ${n} = ${solution.reducedOperands.split(' × ')[1]}`,
                reasoning: 'Reducing first prevents integer overflow',
                note: 'This step is optional but recommended for large numbers'
            });

            steps.push({
                stepNumber: 3,
                step: 'Multiply',
                description: `Multiply the reduced values`,
                expression: solution.reducedOperands,
                result: solution.intermediateProduct,
                reasoning: 'Perform multiplication on reduced values'
            });

            steps.push({
                stepNumber: 4,
                step: 'Take modulo',
                description: `${solution.intermediateProduct} mod ${n}`,
                afterExpression: `${solution.result}`,
                reasoning: 'Final reduction gives result in [0, n-1]',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateAdvancedOperationSteps(problem, solution) {
        const steps = [];

        if (solution.operation === 'Modular Exponentiation') {
            steps.push({
                stepNumber: 1,
                step: 'Initialize',
                description: 'Set up binary exponentiation',
                expression: solution.expression,
                method: solution.method,
                binaryExponent: solution.binaryExponent,
                reasoning: `Convert exponent to binary: ${problem.parameters.exponent} = ${solution.binaryExponent}₂`,
                goalStatement: 'Use binary method to compute efficiently'
            });

            solution.steps.forEach((substep, idx) => {
                steps.push({
                    stepNumber: idx + 2,
                    step: substep.step,
                    description: substep.description,
                    operation: substep.operation,
                    expression: substep.operation || '',
                    result: substep.result,
                    base: substep.base,
                    reasoning: substep.description
                });
            });

            steps.push({
                stepNumber: steps.length + 1,
                step: 'Final result',
                description: 'Binary exponentiation complete',
                expression: `${problem.parameters.base}^${problem.parameters.exponent} mod ${problem.parameters.modulus} = ${solution.result}`,
                finalAnswer: true,
                complexity: solution.complexity
            });

        } else if (solution.operation === 'Modular Multiplicative Inverse') {
            if (!solution.exists) {
                steps.push({
                    stepNumber: 1,
                    step: 'Check existence',
                    description: 'Verify if inverse exists',
                    reasoning: solution.reason,
                    conclusion: 'Inverse does not exist',
                    finalAnswer: true
                });
            } else {
                steps.push({
                    stepNumber: 1,
                    step: 'Check coprimality',
                    description: `Verify gcd(${problem.parameters.a}, ${problem.parameters.n}) = 1`,
                    reasoning: 'Inverse exists only when a and n are coprime',
                    result: 'gcd = 1 ✓',
                    goalStatement: 'Use Extended Euclidean Algorithm to find inverse'
                });

                steps.push({
                    stepNumber: 2,
                    step: 'Extended Euclidean Algorithm',
                    description: 'Run Extended GCD to find Bézout coefficients',
                    method: 'Extended GCD',
                    bezoutIdentity: solution.bezoutIdentity,
                    reasoning: 'This gives us the modular inverse'
                });

                if (solution.rawInverse !== solution.inverse) {
                    steps.push({
                        stepNumber: 3,
                        step: 'Adjust to range [0, n-1]',
                        description: `Adjust ${solution.rawInverse} to be in range [0, ${problem.parameters.n - 1}]`,
                        beforeExpression: `x = ${solution.rawInverse}`,
                        afterExpression: `x = ${solution.inverse}`,
                        reasoning: 'Modular inverse must be positive and less than n'
                    });
                }

                steps.push({
                    stepNumber: steps.length + 1,
                    step: 'Verify inverse',
                    description: 'Check that a × a⁻¹ ≡ 1 (mod n)',
                    verification: solution.verification.check,
                    isValid: solution.verification.isValid ? '✓' : '✗',
                    finalAnswer: true,
                    result: solution.inverse
                });
            }
        }

        return steps;
    }

    generateNumberTheorySteps(problem, solution) {
        const steps = [];

        if (solution.operation === 'Greatest Common Divisor') {
            steps.push({
                stepNumber: 1,
                step: 'Initialize Euclidean Algorithm',
                description: 'Set up division sequence',
                expression: solution.expression,
                reasoning: 'Euclidean algorithm: gcd(a,b) = gcd(b, a mod b)',
                goalStatement: `Find gcd(${problem.parameters.a}, ${problem.parameters.b})`
            });

            solution.steps.forEach((substep, idx) => {
                if (idx === 0) return; // Skip initialization step
                
                steps.push({
                    stepNumber: idx + 1,
                    step: `Division ${idx}`,
                    description: substep.description,
                    equation: substep.equation,
                    quotient: substep.quotient,
                    remainder: substep.remainder,
                    reasoning: 'Continue until remainder is 0'
                });
            });

            steps.push({
                stepNumber: steps.length + 1,
                step: 'GCD found',
                description: 'Last non-zero remainder is the GCD',
                expression: `gcd(${problem.parameters.a}, ${problem.parameters.b}) = ${solution.gcd}`,
                finalAnswer: true
            });

        } else if (solution.operation === 'Extended Euclidean Algorithm') {
            steps.push({
                stepNumber: 1,
                step: 'Run Extended GCD',
                description: 'Find GCD and Bézout coefficients',
                expression: solution.expression,
                reasoning: 'Extended GCD finds x, y such that ax + by = gcd(a,b)',
                goalStatement: 'Express GCD as linear combination'
            });

            steps.push({
                stepNumber: 2,
                step: 'Bézout Identity',
                description: 'Result of Extended GCD',
                expression: solution.bezoutIdentity,
                coefficients: `x = ${solution.coefficients.x}, y = ${solution.coefficients.y}`,
                gcd: solution.gcd,
                reasoning: 'These coefficients satisfy the identity'
            });

            steps.push({
                stepNumber: 3,
                step: 'Verify',
                description: 'Check the linear combination',
                verification: `${problem.parameters.a} × ${solution.coefficients.x} + ${problem.parameters.b} × ${solution.coefficients.y} = ${solution.verification.leftSide}`,
                isValid: solution.verification.isValid ? '✓' : '✗',
                finalAnswer: true
            });

        } else if (solution.operation === 'Euler Totient Function') {
            steps.push({
                stepNumber: 1,
                step: 'Prime factorization',
                description: `Factor ${problem.parameters.n}`,
                factorization: solution.factorization,
                reasoning: 'φ is multiplicative, so we use prime factorization'
            });

            solution.steps.forEach((substep, idx) => {
                steps.push({
                    stepNumber: idx + 2,
                    step: `Compute φ(${substep.prime}^${substep.exponent})`,
                    description: substep.formula,
                    value: substep.value,
                    reasoning: `For prime power p^k: φ(p^k) = p^(k-1)(p-1)`
                });
            });

            steps.push({
                stepNumber: steps.length + 1,
                step: 'Multiply all φ values',
                description: 'Since φ is multiplicative',
                expression: `φ(${problem.parameters.n}) = ${solution.result}`,
                finalAnswer: true
            });
        }

        return steps;
    }

    generateCongruenceSteps(problem, solution) {
        const steps = [];

        if (solution.operation === 'Linear Congruence') {
            steps.push({
                stepNumber: 1,
                step: 'Check solution existence',
                description: 'Verify gcd(a, n) divides b',
                expression: solution.expression,
                reasoning: 'Necessary and sufficient condition for solutions to exist'
            });

            if (!solution.exists) {
                steps.push({
                    stepNumber: 2,
                    step: 'No solution',
                    description: solution.reason,
                    finalAnswer: true
                });
            } else if (solution.solutionType === 'Unique solution') {
                steps.push({
                    stepNumber: 2,
                    step: 'Find modular inverse',
                    description: `Find ${problem.parameters.a}⁻¹ mod ${problem.parameters.n}`,
                    inverse: solution.inverseOfA,
                    reasoning: 'Since gcd(a,n) = 1, multiply both sides by a⁻¹'
                });

                steps.push({
                    stepNumber: 3,
                    step: 'Multiply by inverse',
                    description: `x ≡ ${problem.parameters.b} × ${solution.inverseOfA} (mod ${problem.parameters.n})`,
                    expression: `x ≡ ${solution.solution} (mod ${problem.parameters.n})`,
                    finalAnswer: true
                });

                steps.push({
                    stepNumber: 4,
                    step: 'Verify',
                    description: solution.verification.check,
                    isValid: solution.verification.isValid ? '✓' : '✗'
                });
            } else {
                steps.push({
                    stepNumber: 2,
                    step: 'Reduce congruence',
                    description: `Divide by gcd = ${solution.gcd}`,
                    reducedCongruence: solution.reducedCongruence,
                    reasoning: 'Simplify by dividing all terms by gcd'
                });

                steps.push({
                    stepNumber: 3,
                    step: 'Solve reduced congruence',
                    description: 'Find base solution',
                    baseSolution: solution.baseSolution
                });

                steps.push({
                    stepNumber: 4,
                    step: 'All solutions',
                    description: `${solution.gcd} solutions exist`,
                    solutions: solution.allSolutions.join(', '),
                    finalAnswer: true
                });
            }

        } else if (solution.operation === 'Chinese Remainder Theorem') {
            if (!solution.exists) {
                steps.push({
                    stepNumber: 1,
                    step: 'Check coprimality',
                    description: 'Moduli must be pairwise coprime',
                    reason: solution.reason,
                    finalAnswer: true
                });
            } else {
                steps.push({
                    stepNumber: 1,
                    step: 'Verify coprimality',
                    description: 'All moduli are pairwise coprime ✓',
                    reasoning: 'CRT applies when moduli are pairwise coprime'
                });

                steps.push({
                    stepNumber: 2,
                    step: 'Compute N',
                    description: `N = product of all moduli = ${solution.N}`,
                    reasoning: 'Solution will be unique modulo N'
                });

                solution.steps.forEach((substep, idx) => {
                    steps.push({
                        stepNumber: idx + 3,
                        step: `Process congruence ${idx + 1}`,
                        description: `x ≡ ${substep.remainder} (mod ${substep.modulus})`,
                        M_i: substep.M_i,
                        y_i: substep.y_i,
                        term: substep.term,
                        reasoning: `Compute M${idx+1} = N/n${idx+1}, find inverse, multiply`
                    });
                });

                steps.push({
                    stepNumber: steps.length + 1,
                    step: 'Sum and reduce',
                    description: `Sum all terms and reduce mod ${solution.N}`,
                    expression: `x ≡ ${solution.solution} (mod ${solution.N})`,
                    finalAnswer: true
                });
            }
        }

        return steps;
    }

    generateGenericModularSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Modular computation',
            description: 'Solve the given modular problem',
            expression: problem.equation || solution.expression,
            reasoning: 'Apply appropriate modular arithmetic technique',
            solution: solution
        }];
    }

    // ===== ENHANCED EXPLANATION METHODS =====

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            // Multiple explanation formats
            explanations: {
                conceptual: this.getConceptualExplanationModular(step, problem),
                procedural: this.getProceduralExplanationModular(step),
                algorithmic: this.getAlgorithmicExplanation(step, problem),
                theoretical: this.getTheoreticalExplanation(step, problem)
            },

            // Difficulty-adapted explanations
            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            // Learning support
            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyModular(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        // Add thinking prompts if enabled
        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPrompts(step);
        }

        // Add self-check questions if enabled
        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionModular(step);
        }

        // Add real-world connections if enabled
        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionModular(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationModular(step, problem) {
        const conceptualExplanations = {
            'Given operation': 'Modular arithmetic is arithmetic where numbers "wrap around" after reaching a certain value (the modulus).',
            'Add the numbers': 'We add normally first, just like regular arithmetic.',
            'Take modulo': 'Taking modulo means finding the remainder after division - this is what makes numbers wrap around.',
            'Subtract the numbers': 'Subtraction works normally, but we may need to adjust if result is negative.',
            'Adjust negative result': 'In modular arithmetic, we keep results in [0, n-1] by adding the modulus to negative values.',
            'Reduce operands (optional)': 'Reducing first keeps numbers smaller and prevents overflow in computation.',
            'Check coprimality': 'Two numbers are coprime if they share no common factors (gcd = 1).',
            'Extended Euclidean Algorithm': 'This algorithm finds not just the GCD but also coefficients for Bézout\'s identity.',
            'Binary exponentiation': 'We use the binary representation of the exponent to compute powers efficiently.'
        };

        return conceptualExplanations[step.step] || 'This step progresses toward solving the modular problem.';
    }

    getProceduralExplanationModular(step) {
        if (step.operation) {
            return `1. Identify what to do: ${step.operation}
2. Perform the calculation
3. Apply modulo operation if needed
4. Write the result`;
        }
        return 'Follow the standard procedure for this step.';
    }

    getAlgorithmicExplanation(step, problem) {
        const algorithmicDetails = {
            'Binary exponentiation': 'Algorithm: Convert exponent to binary. Start with result=1, base=a. For each bit (right to left): if bit is 1, multiply result by base (mod n). Square base (mod n). Return result.',
            'Extended Euclidean Algorithm': 'Algorithm: Track coefficients (s,t) while running Euclidean algorithm. Update using: new_s = old_s - quotient × s, new_t = old_t - quotient × t. Return final (s, t) as Bézout coefficients.',
            'Euclidean Algorithm': 'Algorithm: While b ≠ 0: compute q = a div b, r = a mod b. Set a = b, b = r. Return a as GCD.',
            'Chinese Remainder Theorem': 'Algorithm: For each congruence i: compute Mi = N/ni, find yi = Mi^(-1) mod ni, add ai × Mi × yi to sum. Return sum mod N.'
        };

        return algorithmicDetails[step.step] || algorithmicDetails[step.method] || 'Standard algorithmic approach.';
    }

    getTheoreticalExplanation(step, problem) {
        const theoreticalContext = {
            'Take modulo': 'Theorem: For any integers a, b, n with n > 0, there exist unique q, r with a = bn + r and 0 ≤ r < n. The value r is a mod n.',
            'Modular inverse': 'Theorem: The inverse of a mod n exists if and only if gcd(a, n) = 1. If it exists, it\'s unique modulo n.',
            'Binary exponentiation': 'Property: (a × b) mod n = ((a mod n) × (b mod n)) mod n. This allows us to reduce intermediate results.',
            'Extended GCD': 'Bézout\'s Identity: For any integers a, b, there exist integers x, y such that ax + by = gcd(a, b).',
            'Chinese Remainder Theorem': 'Theorem: If n1, n2, ..., nk are pairwise coprime, the system x ≡ ai (mod ni) has a unique solution modulo N = n1×n2×...×nk.'
        };

        return theoreticalContext[step.step] || 'Based on fundamental principles of modular arithmetic and number theory.';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationModular(step, problem),
                analogy: this.findRelevantAnalogyModular(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description || ''),
                visualization: this.suggestVisualizationModular(step)
            }
        }));
    }

    generateELI5ExplanationModular(step, problem) {
        const ELI5Explanations = {
            'Given operation': "We have a number puzzle to solve using clock-style arithmetic!",
            'Add the numbers': "First, we add the numbers just like normal: put them together!",
            'Take modulo': "Now imagine a clock with {n} hours. Where does our number land on that clock?",
            'Subtract the numbers': "We take away one number from the other, like taking away toys.",
            'Adjust negative result': "Oops, we went backwards! Let's go forward around the clock to find where we really are.",
            'Multiply': "We make groups! If we have {a} groups of {b} things, how many total?",
            'Check coprimality': "Do these numbers share any factors? It's like asking if they have any common friends!",
            'Binary exponentiation': "Instead of multiplying many times, we use a smart trick: we double (square) and combine!",
            'Find modular inverse': "We're looking for a special number that, when multiplied, gives us 1 on our clock."
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our number puzzle!";
    }

    findRelevantAnalogyModular(step, problem) {
        const category = this.modularTypes[problem.type]?.category;
        
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (step.step.toLowerCase().includes(key.toLowerCase()) || 
                (analogy.suitableFor.includes(category) || analogy.suitableFor.includes(problem.type))) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like working with a clock - numbers wrap around!";
    }

    suggestVisualizationModular(step) {
        const visualizations = {
            'Given operation': 'Draw a circle (clock) with numbers 0 to n-1',
            'Add the numbers': 'Show counting forward on the number circle',
            'Subtract the numbers': 'Show counting backward on the number circle',
            'Take modulo': 'Show the position on the circle after wrapping',
            'Multiply': 'Show repeated addition as jumps around the circle',
            'Binary exponentiation': 'Draw a binary tree showing doubling steps',
            'Euclidean Algorithm': 'Show division steps in a table, remainder getting smaller',
            'Extended GCD': 'Show table with columns for quotient, remainder, and coefficients',
            'Check coprimality': 'Draw factor trees to see if numbers share factors',
            'Chinese Remainder Theorem': 'Draw multiple circles (one per modulus) with solution marked on each'
        };

        return visualizations[step.step] || 'Draw a picture showing the numbers on a circular clock';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeModular(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategyModular(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeModular(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || currentStep.result}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessityModular(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefitModular(nextStep)}`
        };
    }

    explainStepNecessityModular(currentStep, nextStep) {
        return `we need to continue the modular computation process`;
    }

    explainStepBenefitModular(nextStep) {
        return `bringing us closer to the final modular result`;
    }

    explainStepStrategyModular(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase() || 'proceed with the algorithm'}`;
    }

    addErrorPrevention(step, problemType) {
        const category = this.modularTypes[problemType]?.category || 'basic_operations';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsModular(step, problemType),
                checkPoints: this.generateCheckPointsModular(step),
                warningFlags: this.identifyWarningFlagsModular(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionModular(step),
                expectedResult: this.describeExpectedResultModular(step),
                troubleshooting: this.generateTroubleshootingTips(step)
            }
        };
    }

    generatePreventionTipsModular(step, problemType) {
        const tips = {
            'Take modulo': [
                'Always reduce to range [0, n-1]',
                'Remember: result cannot be negative or ≥ n',
                'Double-check your division and remainder'
            ],
            'Adjust negative result': [
                'If result is negative, add n until positive',
                'Keep adding n until you reach [0, n-1]',
                'Verify final result is in correct range'
            ],
            'Binary exponentiation': [
                'Convert exponent to binary first',
                'Reduce result after EACH multiplication',
                'Square the base at each step',
                'Don\'t compute a^b directly for large b'
            ],
            'Check coprimality': [
                'Use Euclidean algorithm to find GCD',
                'Inverse exists only if GCD = 1',
                'Don\'t assume coprimality without checking'
            ],
            'Extended GCD': [
                'Track coefficients carefully in each row',
                'Signs are critical - watch for errors',
                'Work backwards to build coefficients',
                'Verify Bézout identity at the end'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Verify your arithmetic', 'Check your result'];
    }

    generateCheckPointsModular(step) {
        return [
            'Did I reduce the result modulo n?',
            'Is my result in the range [0, n-1]?',
            'Did I handle negative numbers correctly?',
            'Have I verified my answer makes sense?'
        ];
    }

    identifyWarningFlagsModular(step, problemType) {
        const warnings = {
            basic_operations: step.step === 'Take modulo' ?
                ['Watch for negative remainders', 'Ensure result is in [0, n-1]'] : [],
            advanced_operations: step.step === 'Binary exponentiation' ?
                ['Don\'t let intermediate results overflow', 'Reduce after each multiplication'] : [],
            number_theory: step.step === 'Extended GCD' ?
                ['Track signs carefully', 'Verify Bézout identity'] : []
        };

        const category = this.modularTypes[problemType]?.category || 'basic_operations';
        return warnings[category] || [];
    }

    generateSelfCheckQuestionModular(step) {
        const questions = {
            'Given operation': 'Do I understand what modular operation I need to perform?',
            'Add the numbers': 'Did I add the numbers correctly?',
            'Take modulo': 'Is my result in the range [0, n-1]?',
            'Adjust negative result': 'Did I add enough copies of n to make the result positive?',
            'Check coprimality': 'Did I verify gcd(a, n) = 1?',
            'Binary exponentiation': 'Did I convert the exponent to binary correctly?',
            'Extended GCD': 'Do my Bézout coefficients satisfy ax + by = gcd?',
            'Verify': 'Does my answer actually satisfy the original equation?'
        };

        return questions[step.step] || 'Does this step make sense and move me toward the solution?';
    }

    describeExpectedResultModular(step) {
        const expectations = {
            'Given operation': 'Clear understanding of the problem',
            'Add the numbers': 'Sum of the two numbers',
            'Take modulo': 'Result in range [0, n-1]',
            'Multiply': 'Product of the numbers',
            'Check coprimality': 'GCD value (should be 1 for inverse to exist)',
            'Binary exponentiation': 'Power computed efficiently',
            'Find modular inverse': 'Number x where ax ≡ 1 (mod n)',
            'Extended GCD': 'GCD and Bézout coefficients',
            'Verify': 'Confirmation that solution is correct'
        };

        return expectations[step.step] || 'Progress toward final modular result';
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsModular(step, problem),
                subSteps: this.breakIntoSubStepsModular(step),
                hints: this.generateProgressiveHintsModular(step, problem),
                practiceVariation: this.generatePracticeVariationModular(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessModular(step),
                decisionPoints: this.identifyDecisionPointsModular(step),
                alternativeApproaches: this.suggestAlternativeMethodsModular(step, problem)
            }
        }));
    }

    generateGuidingQuestionsModular(step, problem) {
        const questions = {
            'Given operation': [
                'What is the modulus in this problem?',
                'What operation am I performing?',
                'What is the goal of this computation?'
            ],
            'Take modulo': [
                'What number am I dividing by?',
                'What is the remainder?',
                'Is the result in range [0, n-1]?'
            ],
            'Check coprimality': [
                'What is the GCD of these numbers?',
                'Are they coprime?',
                'Does the inverse exist?'
            ],
            'Binary exponentiation': [
                'What is the exponent in binary?',
                'Which bits are 1?',
                'Do I multiply or just square at this step?'
            ]
        };

        return questions[step.step] || ['What is the goal?', 'How do I proceed?', 'What should I watch for?'];
    }

    breakIntoSubStepsModular(step) {
        if (step.operation) {
            return [
                'Identify the values involved',
                'Perform the operation',
                'Apply modulo reduction',
                'Verify result is in correct range'
            ];
        }

        return ['Understand what to do', 'Execute carefully', 'Verify the result'];
    }

    generateProgressiveHintsModular(step, problem) {
        const category = this.modularTypes[problem.type]?.category || 'basic_operations';
        const hintSet = this.hints[problem.type] || this.hints.modular_addition || {};

        return {
            level1: hintSet.level1 || 'Think about what mathematical operation this requires.',
            level2: hintSet.level2 || 'Consider the properties of modular arithmetic.',
            level3: hintSet.level3 || 'Apply the appropriate algorithm or formula.',
            level4: hintSet.level4 || 'Perform the specific computation needed.'
        };
    }

    generatePracticeVariationModular(step, problem) {
        return {
            similarProblem: 'Try the same operation with different numbers',
            practiceHint: 'Start with small numbers and a small modulus',
            extension: 'Once comfortable, try larger numbers or different moduli'
        };
    }

    explainThinkingProcessModular(step) {
        return {
            observe: 'What numbers and operation do I see?',
            goal: 'What am I trying to compute?',
            strategy: 'Which algorithm or method should I use?',
            execute: 'How do I perform this computation correctly?',
            verify: 'Does my result satisfy the modular equation?'
        };
    }

    identifyDecisionPointsModular(step) {
        return [
            'Should I reduce operands before operating?',
            'Which algorithm is most efficient here?',
            'Do I need to check existence conditions?',
            'Should I use a shortcut theorem (Fermat, Euler)?'
        ];
    }

    suggestAlternativeMethodsModular(step, problem) {
        const alternatives = {
            'Modular inverse': [
                'Extended Euclidean Algorithm (always works)',
                'Fermat\'s Little Theorem (if modulus is prime)',
                'Euler\'s Theorem (if coprime)'
            ],
            'Modular exponentiation': [
                'Binary exponentiation (recommended)',
                'Repeated squaring',
                'Using Fermat/Euler for exponent reduction'
            ],
            'GCD': [
                'Euclidean algorithm (standard)',
                'Binary GCD algorithm',
                'Prime factorization method'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate'];
    }

    identifyKeyVocabularyModular(step) {
        const vocabulary = {
            'Given operation': ['modular arithmetic', 'modulus', 'congruence', 'remainder'],
            'Take modulo': ['remainder', 'division', 'modulo operation', 'wrap around'],
            'Check coprimality': ['coprime', 'GCD', 'relatively prime', 'common factor'],
            'Binary exponentiation': ['exponent', 'binary', 'squaring', 'fast powering'],
            'Find modular inverse': ['inverse', 'multiplicative inverse', 'coprime', 'Bézout'],
            'Extended GCD': ['Bézout coefficients', 'linear combination', 'Extended Euclidean'],
            'Chinese Remainder Theorem': ['system of congruences', 'pairwise coprime', 'CRT']
        };

        return vocabulary[step.step] || [];
    }

    findRealWorldConnectionModular(step, problem) {
        const connections = {
            'modular_addition': 'Like time on a clock: 10 + 5 = 3 (on 12-hour clock)',
            'modular_multiplication': 'Used in cryptography to encrypt messages',
            'modular_exponentiation': 'Core of RSA encryption - securing internet communications',
            'modular_inverse': 'RSA decryption key - how private keys work',
            'gcd_computation': 'Simplifying fractions, finding common denominators',
            'chinese_remainder': 'Ancient Chinese calendar calculations, modern secret sharing'
        };

        const category = this.modularTypes[problem.type]?.category;
        return connections[problem.type] || connections[category] || 'Modular arithmetic is fundamental to cryptography and computer science.';
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before starting: What do I need to know or check?',
            during: 'While working: Am I reducing results to keep them manageable?',
            after: 'After finishing: Did I verify my answer satisfies the equation?'
        };
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'modulus': 'the number we\'re wrapping around (like 12 on a clock)',
            'congruent': 'have the same remainder',
            'coprime': 'share no common factors except 1',
            'inverse': 'the number that undoes multiplication',
            'remainder': 'what\'s left over after division',
            'quotient': 'how many times it goes in',
            'algorithm': 'step-by-step method',
            'binary': 'written in 1s and 0s',
            'coefficient': 'the number multiplying something',
            'Bézout': 'special numbers from Extended GCD',
            'residue': 'remainder class'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    // ===== GRAPH GENERATION =====

    generateModularGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        
        // Modular arithmetic can be visualized as points on a circle
        if (type.includes('modular') && this.currentSolution.result !== undefined) {
            this.graphData = this.generateModularCircle(this.currentProblem, this.currentSolution);
        }
    }

    generateModularCircle(problem, solution) {
        const modulus = problem.parameters.n || problem.parameters.modulus;
        
        return {
            type: 'modular_circle',
            modulus: modulus,
            result: solution.result,
            description: `Result ${solution.result} shown on mod ${modulus} circle`,
            visualization: 'circular_number_line'
        };
    }

    // ===== WORKBOOK GENERATION =====

    generateModularWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createModularLessonSection(),
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
            title: 'Enhanced Modular Arithmetic Mathematical Workbook',
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
            ['Problem Type', this.modularTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.modularTypes[this.currentProblem.type]?.category || 'modular'],
            ['Expression', this.currentSolution?.expression || this.currentProblem.cleanInput],
            ['Description', this.currentProblem.scenario || 'Modular arithmetic computation']
        ];

        // Add parameters
        if (Object.keys(this.currentProblem.parameters).length > 0) {
            problemData.push(['', '']);
            problemData.push(['Parameters', '']);
            for (const [key, value] of Object.entries(this.currentProblem.parameters)) {
                if (value !== undefined && value !== null) {
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

        const category = this.modularTypes[this.currentProblem.type]?.category;
        const prereqs = this.prerequisites[category] || this.prerequisites[this.currentProblem.type];

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
            // Skip bridge steps in basic display
            if (step.stepType === 'bridge' && this.explanationLevel === 'basic') {
                return;
            }

            // Main step
            if (step.stepType === 'bridge') {
                stepsData.push(['→ Bridge', step.title]);
                stepsData.push(['Current State', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description || step.step]);

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
            } else if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.equation) {
                stepsData.push(['Equation', step.equation]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.result !== undefined && step.result !== null) {
                stepsData.push(['Result', step.result]);
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

            // Enhanced explanations for detailed level
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
                const tips = step.errorPrevention.preventionTips;
                if (tips && tips.length > 0) {
                    stepsData.push(['Prevention Tips', tips.join('; ')]);
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
            }

            // Self-check
            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            // Real-world connection
            if (step.realWorldConnection && this.includeRealWorldApplications) {
                stepsData.push(['Real-World', step.realWorldConnection]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createModularLessonSection() {
        const { type } = this.currentProblem;
        const category = this.modularTypes[type]?.category;

        // Find relevant lesson
        let lessonKey = Object.keys(this.lessons).find(key => 
            key.includes(type) || key.includes(category)
        );
        
        if (!lessonKey) {
            lessonKey = 'modular_arithmetic_basics';
        }

        const lesson = this.lessons[lessonKey];

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', ''],
            ...lesson.concepts.map(concept => ['', concept]),
            ['', ''],
            ['Theory', lesson.theory]
        ];

        if (lesson.keyFormulas) {
            lessonData.push(['', '']);
            lessonData.push(['Key Formulas', '']);
            for (const [name, formula] of Object.entries(lesson.keyFormulas)) {
                lessonData.push([name, formula]);
            }
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

        if (this.currentSolution.result !== null && this.currentSolution.result !== undefined) {
            solutionData.push(['Result', this.currentSolution.result]);
            
            if (this.currentSolution.exists === false) {
                solutionData.push(['Status', 'No solution exists']);
                solutionData.push(['Reason', this.currentSolution.reason]);
            } else if (this.currentSolution.solutionType) {
                solutionData.push(['Solution Type', this.currentSolution.solutionType]);
            }
        }

        if (this.currentSolution.method) {
            solutionData.push(['Method Used', this.currentSolution.method]);
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
            ['Operation', this.currentSolution.operation || 'Modular computation'],
            ['Category', this.modularTypes[this.currentProblem.type]?.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel]
        ];

        if (this.currentSolution.complexity) {
            analysisData.push(['Complexity', this.currentSolution.complexity]);
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
            ['Verification Method', 'Substitution and Direct Check']
        ];

        if (this.currentSolution.verification) {
            const v = this.currentSolution.verification;
            verificationData.push(['', '']);
            verificationData.push(['Check Expression', v.check]);
            if (v.isValid !== undefined) {
                verificationData.push(['Valid', v.isValid ? 'Yes ✓' : 'No ✗']);
            }
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
            ['Real-World Applications of Modular Arithmetic', ''],
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

        const notes = this.generateModularPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateModularAlternativeMethods(this.currentProblem.type);

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

    generateModularPedagogicalNotes(problemType) {
        const category = this.modularTypes[problemType]?.category;

        const pedagogicalDatabase = {
            basic_operations: {
                objectives: [
                    'Understand modular arithmetic as "clock arithmetic"',
                    'Perform basic modular operations',
                    'Recognize when results wrap around'
                ],
                keyConcepts: [
                    'Modulus defines the wraparound point',
                    'Results always in range [0, n-1]',
                    'Negative results need adjustment'
                ],
                prerequisites: [
                    'Division with remainder',
                    'Understanding of integer division',
                    'Basic arithmetic operations'
                ],
                commonDifficulties: [
                    'Handling negative remainders',
                    'Forgetting to reduce final result',
                    'Confusion between mod and division'
                ],
                teachingStrategies: [
                    'Use clock analogy extensively',
                    'Draw circular number lines',
                    'Practice with small moduli first'
                ],
                extensions: [
                    'Modular exponentiation',
                    'Modular inverses',
                    'Applications in cryptography'
                ],
                assessment: [
                    'Can student compute basic mod operations?',
                    'Does student handle negatives correctly?',
                    'Can student explain clock analogy?'
                ]
            },
            advanced_operations: {
                objectives: [
                    'Master binary exponentiation algorithm',
                    'Compute modular inverses using Extended GCD',
                    'Understand efficiency considerations'
                ],
                keyConcepts: [
                    'Binary exponentiation prevents overflow',
                    'Inverse exists iff coprime',
                    'Extended GCD finds Bézout coefficients'
                ],
                prerequisites: [
                    'Binary number system',
                    'Euclidean algorithm',
                    'Coprimality concept'
                ],
                commonDifficulties: [
                    'Binary conversion errors',
                    'Not checking inverse existence',
                    'Extended GCD coefficient tracking'
                ],
                teachingStrategies: [
                    'Show overflow problem first',
                    'Practice binary conversions',
                    'Use tables for Extended GCD'
                ],
                extensions: [
                    'RSA cryptography',
                    'Fast modular arithmetic',
                    'Cryptographic protocols'
                ],
                assessment: [
                    'Can student use binary method?',
                    'Does student check coprimality?',
                    'Can student execute Extended GCD?'
                ]
            },
            number_theory: {
                objectives: [
                    'Compute GCD using Euclidean algorithm',
                    'Understand Bézout\'s identity',
                    'Calculate Euler\'s totient function'
                ],
                keyConcepts: [
                    'GCD is fundamental to number theory',
                    'Extended GCD gives linear combinations',
                    'Totient function counts coprimes'
                ],
                prerequisites: [
                    'Division algorithm',
                    'Prime factorization',
                    'Divisibility rules'
                ],
                commonDifficulties: [
                    'Stopping Euclidean algorithm too early',
                    'Sign errors in Extended GCD',
                    'Totient calculation for composite numbers'
                ],
                teachingStrategies: [
                    'Use visual tables for GCD steps',
                    'Practice with small numbers first',
                    'Connect to fraction simplification'
                ],
                extensions: [
                    'Cryptographic applications',
                    'Diophantine equations',
                    'Primitive roots'
                ],
                assessment: [
                    'Can student find GCD efficiently?',
                    'Does student understand Bézout?',
                    'Can student compute φ(n)?'
                ]
            },
            congruences: {
                objectives: [
                    'Solve linear congruences',
                    'Apply Chinese Remainder Theorem',
                    'Understand solution existence conditions'
                ],
                keyConcepts: [
                    'Solution exists based on GCD condition',
                    'CRT requires pairwise coprime moduli',
                    'Systems can have unique or multiple solutions'
                ],
                prerequisites: [
                    'Modular arithmetic',
                    'GCD computation',
                    'Modular inverses'
                ],
                commonDifficulties: [
                    'Not checking solution existence',
                    'CRT coprimality verification',
                    'Multiple solution cases'
                ],
                teachingStrategies: [
                    'Always check conditions first',
                    'Use systematic CRT algorithm',
                    'Practice with 2-3 congruences first'
                ],
                extensions: [
                    'RSA key generation',
                    'Secret sharing schemes',
                    'Calendar problems'
                ],
                assessment: [
                    'Does student check existence first?',
                    'Can student apply CRT correctly?',
                    'Does student verify coprimality?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Understand modular arithmetic'],
            keyConcepts: ['Wraparound behavior', 'Remainder classes'],
            prerequisites: ['Basic arithmetic'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['Advanced topics'],
            assessment: ['Verify understanding']
        };
    }

    generateModularAlternativeMethods(problemType) {
        const category = this.modularTypes[problemType]?.category;

        const alternativeDatabase = {
            modular_inverse: {
                primaryMethod: 'Extended Euclidean Algorithm',
                methods: [
                    {
                        name: 'Fermat\'s Little Theorem',
                        description: 'If p is prime: a^(-1) ≡ a^(p-2) (mod p). Fast for prime moduli.'
                    },
                    {
                        name: 'Euler\'s Theorem',
                        description: 'For coprime a, n: a^(-1) ≡ a^(φ(n)-1) (mod n). Requires computing φ(n).'
                    },
                    {
                        name: 'Trial Multiplication',
                        description: 'For small moduli, try multiplying a by each value until you get 1. Not practical for large n.'
                    }
                ],
                comparison: 'Extended GCD always works and is efficient. Fermat is fastest for prime moduli. Euler generalizes Fermat but requires computing φ(n). Trial only for tiny moduli.'
            },
            modular_exponentiation: {
                primaryMethod: 'Binary Exponentiation (Right-to-Left)',
                methods: [
                    {
                        name: 'Left-to-Right Binary',
                        description: 'Process exponent bits from left to right. Equivalent efficiency.'
                    },
                    {
                        name: 'Exponent Reduction via Fermat/Euler',
                        description: 'Reduce exponent mod (p-1) or mod φ(n) first, then compute. Useful for huge exponents.'
                    },
                    {
                        name: 'Sliding Window Method',
                        description: 'Precompute small powers, process exponent in larger chunks. Faster for very large exponents.'
                    }
                ],
                comparison: 'Binary method is standard and efficient. Left-to-right vs right-to-left is personal preference. Exponent reduction helpful for astronomical exponents. Sliding window for specialized applications.'
            },
            gcd_computation: {
                primaryMethod: 'Euclidean Algorithm',
                methods: [
                    {
                        name: 'Binary GCD (Stein\'s Algorithm)',
                        description: 'Uses subtraction and division by 2 instead of modulo. Better for hardware.'
                    },
                    {
                        name: 'Prime Factorization',
                        description: 'Factor both numbers, GCD is product of common primes. Slow for large numbers.'
                    }
                ],
                comparison: 'Euclidean is standard, simple, and fast. Binary GCD is better for hardware implementation. Prime factorization is impractical for large numbers.'
            },
            chinese_remainder: {
                primaryMethod: 'CRT Construction Formula',
                methods: [
                    {
                        name: 'Sequential Solution',
                        description: 'Solve first two congruences, combine with third, etc. More intuitive but slower.'
                    },
                    {
                        name: 'Garner\'s Algorithm',
                        description: 'Alternative formula using mixed-radix representation. Efficient variant.'
                    }
                ],
                comparison: 'Construction formula is standard and efficient. Sequential is easier to understand but slower. Garner\'s is optimized variant for specialized use.'
            }
        };

        return alternativeDatabase[problemType] || alternativeDatabase[category] || {
            primaryMethod: 'Standard algorithmic approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods may apply depending on problem structure'
            }],
            comparison: 'Choose based on problem constraints and efficiency needs'
        };
    }
}

// Export the class
export default EnhancedModularArithmeticWorkbook;
