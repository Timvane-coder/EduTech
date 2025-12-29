// Enhanced Sequence and Series Mathematical Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedSequenceSeriesWorkbook {
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
        this.explanationLevel = options.explanationLevel || 'intermediate'; // 'basic', 'intermediate', 'detailed', 'scaffolded'
        this.includeVerificationInSteps = options.includeVerificationInSteps !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeAlternativeMethods = options.includeAlternativeMethods !== false;
        this.includeErrorPrevention = options.includeErrorPrevention !== false;
        this.includeCommonMistakes = options.includeCommonMistakes !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.verificationDetail = options.verificationDetail || 'detailed';

        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializeSequenceSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
    }

    initializeSequenceLessons() {
        this.lessons = {
            arithmetic_sequences: {
                title: "Arithmetic Sequences",
                concepts: [
                    "General form: aₙ = a₁ + (n-1)d where d is the common difference",
                    "Each term differs from the previous by a constant d",
                    "Linear pattern in the sequence",
                    "Recursive: aₙ = aₙ₋₁ + d"
                ],
                theory: "Arithmetic sequences represent linear growth patterns where the difference between consecutive terms is constant. The common difference 'd' determines the rate of increase or decrease.",
                keyFormulas: {
                    "nth Term": "aₙ = a₁ + (n-1)d",
                    "Common Difference": "d = aₙ - aₙ₋₁",
                    "Sum of n Terms": "Sₙ = n/2(2a₁ + (n-1)d) or Sₙ = n/2(a₁ + aₙ)",
                    "Average Term": "aₙ = (a₁ + aₙ)/2"
                },
                solvingSteps: [
                    "Identify first term a₁ and common difference d",
                    "Apply nth term formula: aₙ = a₁ + (n-1)d",
                    "For sums, use Sₙ = n/2(2a₁ + (n-1)d)",
                    "Verify pattern holds for multiple terms"
                ],
                applications: [
                    "Linear depreciation and appreciation",
                    "Salary increases with fixed annual raises",
                    "Distance traveled at constant speed",
                    "Payment schedules"
                ]
            },

            geometric_sequences: {
                title: "Geometric Sequences",
                concepts: [
                    "General form: aₙ = a₁ · r^(n-1) where r is the common ratio",
                    "Each term is multiplied by a constant r",
                    "Exponential growth or decay pattern",
                    "Recursive: aₙ = aₙ₋₁ · r"
                ],
                theory: "Geometric sequences represent exponential patterns where each term is obtained by multiplying the previous term by a constant ratio. The common ratio 'r' determines growth (r > 1), decay (0 < r < 1), or alternating signs (r < 0).",
                keyFormulas: {
                    "nth Term": "aₙ = a₁ · r^(n-1)",
                    "Common Ratio": "r = aₙ/aₙ₋₁",
                    "Sum of n Terms": "Sₙ = a₁(1-r^n)/(1-r) for r ≠ 1",
                    "Infinite Sum": "S∞ = a₁/(1-r) for |r| < 1"
                },
                solvingSteps: [
                    "Identify first term a₁ and common ratio r",
                    "Apply nth term formula: aₙ = a₁ · r^(n-1)",
                    "For finite sums, use Sₙ = a₁(1-r^n)/(1-r)",
                    "For infinite sums (|r| < 1), use S∞ = a₁/(1-r)"
                ],
                applications: [
                    "Compound interest and investments",
                    "Population growth and decay",
                    "Radioactive decay",
                    "Virus spread modeling"
                ]
            },

            arithmetic_series: {
                title: "Arithmetic Series",
                concepts: [
                    "Sum of arithmetic sequence terms",
                    "Sₙ = n/2(first term + last term)",
                    "Alternative: Sₙ = n/2(2a₁ + (n-1)d)",
                    "Average of first and last term times number of terms"
                ],
                theory: "An arithmetic series is the sum of terms in an arithmetic sequence. The sum formula leverages the symmetry of arithmetic sequences where pairs of terms equidistant from the ends sum to the same value.",
                keyFormulas: {
                    "Sum Formula 1": "Sₙ = n/2(a₁ + aₙ)",
                    "Sum Formula 2": "Sₙ = n/2(2a₁ + (n-1)d)",
                    "Average Term Method": "Sₙ = n · average",
                    "Gauss Method": "Sₙ = n(n+1)/2 for 1+2+3+...+n"
                },
                solvingSteps: [
                    "Find first term, last term, and number of terms",
                    "Apply sum formula: Sₙ = n/2(a₁ + aₙ)",
                    "Alternatively, use Sₙ = n/2(2a₁ + (n-1)d)",
                    "Verify with partial sum check"
                ],
                applications: [
                    "Total distance in uniform acceleration",
                    "Sum of payments over time",
                    "Stacking problems",
                    "Triangular numbers"
                ]
            },

            geometric_series: {
                title: "Geometric Series",
                concepts: [
                    "Sum of geometric sequence terms",
                    "Finite: Sₙ = a₁(1-r^n)/(1-r) for r ≠ 1",
                    "Infinite: S∞ = a₁/(1-r) for |r| < 1",
                    "Diverges if |r| ≥ 1 (except r=1)"
                ],
                theory: "A geometric series sums the terms of a geometric sequence. Finite series always have a sum, but infinite series converge only when |r| < 1. The formula derives from multiplying the series by r and subtracting.",
                keyFormulas: {
                    "Finite Sum": "Sₙ = a₁(1-r^n)/(1-r) for r ≠ 1",
                    "Infinite Sum": "S∞ = a₁/(1-r) for |r| < 1",
                    "Alternative Finite": "Sₙ = a₁(r^n-1)/(r-1)",
                    "When r=1": "Sₙ = n·a₁"
                },
                solvingSteps: [
                    "Identify a₁, r, and n (if finite)",
                    "Check convergence for infinite series: |r| < 1",
                    "Apply appropriate sum formula",
                    "Simplify and interpret result"
                ],
                applications: [
                    "Compound interest calculations",
                    "Fractional representations (0.333... = 1/3)",
                    "Infinite geometric patterns",
                    "Present value of annuities"
                ]
            },

            fibonacci_sequences: {
                title: "Fibonacci and Recursive Sequences",
                concepts: [
                    "Defined by recurrence relation",
                    "Fibonacci: Fₙ = Fₙ₋₁ + Fₙ₋₂ with F₁=1, F₂=1",
                    "Each term depends on previous term(s)",
                    "Binet's formula for Fibonacci: Fₙ = (φⁿ - ψⁿ)/√5"
                ],
                theory: "Recursive sequences define each term based on previous terms. The Fibonacci sequence is the most famous, appearing in nature, art, and mathematics. The golden ratio φ = (1+√5)/2 is intimately connected to Fibonacci.",
                keyFormulas: {
                    "Fibonacci Recurrence": "Fₙ = Fₙ₋₁ + Fₙ₋₂",
                    "Binet's Formula": "Fₙ = (φⁿ - ψⁿ)/√5 where φ=(1+√5)/2",
                    "Golden Ratio": "φ = (1+√5)/2 ≈ 1.618",
                    "Limit Ratio": "lim(Fₙ₊₁/Fₙ) = φ"
                },
                solvingSteps: [
                    "Identify initial conditions",
                    "Apply recurrence relation iteratively",
                    "For large n, use Binet's formula",
                    "Check limit behavior if needed"
                ],
                applications: [
                    "Nature patterns (shells, flowers, branching)",
                    "Algorithm analysis (time complexity)",
                    "Art and architecture (golden rectangle)",
                    "Financial market analysis"
                ]
            },

            binomial_theorem: {
                title: "Binomial Theorem and Expansions",
                concepts: [
                    "(a+b)ⁿ = Σ C(n,k)·aⁿ⁻ᵏ·bᵏ for k=0 to n",
                    "Pascal's triangle provides coefficients",
                    "Binomial coefficient: C(n,k) = n!/(k!(n-k)!)",
                    "Special cases: (1+x)ⁿ and (1-x)ⁿ"
                ],
                theory: "The binomial theorem provides a formula for expanding powers of binomials. The coefficients form Pascal's triangle, and the theorem generalizes to negative and fractional exponents in advanced calculus.",
                keyFormulas: {
                    "Binomial Theorem": "(a+b)ⁿ = Σₖ₌₀ⁿ C(n,k)aⁿ⁻ᵏbᵏ",
                    "Binomial Coefficient": "C(n,k) = n!/(k!(n-k)!)",
                    "Pascal's Identity": "C(n,k) = C(n-1,k-1) + C(n-1,k)",
                    "General Term": "Tₖ₊₁ = C(n,k)aⁿ⁻ᵏbᵏ"
                },
                solvingSteps: [
                    "Identify a, b, and n",
                    "Calculate binomial coefficients C(n,k)",
                    "Apply formula for each term",
                    "Combine like terms if applicable"
                ],
                applications: [
                    "Probability distributions",
                    "Combinatorics and counting",
                    "Algebraic simplification",
                    "Taylor series approximations"
                ]
            },

            telescoping_series: {
                title: "Telescoping Series",
                concepts: [
                    "Terms cancel in pairs when summed",
                    "Form: Σ(aₙ - aₙ₊₁) = a₁ - aₙ₊₁",
                    "Partial fraction decomposition useful",
                    "Most terms disappear after expansion"
                ],
                theory: "Telescoping series are characterized by systematic cancellation of intermediate terms, leaving only first and last terms. This technique is powerful for evaluating seemingly complex sums.",
                keyFormulas: {
                    "Basic Form": "Σₖ₌₁ⁿ(aₖ - aₖ₊₁) = a₁ - aₙ₊₁",
                    "Partial Fractions": "1/(k(k+1)) = 1/k - 1/(k+1)",
                    "General Pattern": "Σ(f(k) - f(k+1)) = f(1) - f(n+1)"
                },
                solvingSteps: [
                    "Express terms to reveal cancellation",
                    "Expand several terms to identify pattern",
                    "Note which terms cancel",
                    "Sum remaining first and last terms"
                ],
                applications: [
                    "Series convergence tests",
                    "Definite integral approximations",
                    "Probability calculations",
                    "Combinatorial identities"
                ]
            },

            harmonic_series: {
                title: "Harmonic and p-Series",
                concepts: [
                    "Harmonic: Hₙ = 1 + 1/2 + 1/3 + ... + 1/n",
                    "p-series: Σ 1/nᵖ",
                    "Converges if p > 1, diverges if p ≤ 1",
                    "Harmonic series diverges despite diminishing terms"
                ],
                theory: "The harmonic series and p-series are fundamental in analysis. Despite terms approaching zero, the harmonic series diverges, demonstrating that Σaₙ converging requires more than aₙ→0.",
                keyFormulas: {
                    "Harmonic Series": "Hₙ = Σₖ₌₁ⁿ 1/k ≈ ln(n) + γ",
                    "Euler's Constant": "γ ≈ 0.5772",
                    "p-Series": "Σₙ₌₁^∞ 1/nᵖ",
                    "Riemann Zeta": "ζ(p) = Σₙ₌₁^∞ 1/nᵖ for p > 1"
                },
                solvingSteps: [
                    "Identify if series is harmonic or p-series",
                    "Determine value of p",
                    "Apply convergence test: p > 1 converges",
                    "Estimate partial sums if needed"
                ],
                applications: [
                    "Number theory",
                    "Probability theory",
                    "Analytic number theory",
                    "Physics (string theory)"
                ]
            },

            power_series: {
                title: "Power Series",
                concepts: [
                    "Form: Σ aₙ(x-c)ⁿ",
                    "Radius of convergence R",
                    "Converges absolutely for |x-c| < R",
                    "Taylor and Maclaurin series are power series"
                ],
                theory: "Power series represent functions as infinite polynomials. They converge within a radius R centered at c, providing local polynomial approximations of functions.",
                keyFormulas: {
                    "General Form": "Σₙ₌₀^∞ aₙ(x-c)ⁿ",
                    "Radius Formula": "R = 1/lim|aₙ₊₁/aₙ|",
                    "Geometric Series": "Σxⁿ = 1/(1-x) for |x|<1",
                    "Exponential": "eˣ = Σxⁿ/n!"
                },
                solvingSteps: [
                    "Identify coefficients aₙ and center c",
                    "Find radius of convergence using ratio test",
                    "Determine interval of convergence",
                    "Check endpoints separately"
                ],
                applications: [
                    "Function approximation",
                    "Differential equations",
                    "Complex analysis",
                    "Numerical methods"
                ]
            },

            sequence_limits: {
                title: "Sequence Limits and Convergence",
                concepts: [
                    "lim(n→∞) aₙ = L if sequence approaches L",
                    "Monotone convergence theorem",
                    "Bounded sequences may or may not converge",
                    "Squeeze theorem for sequences"
                ],
                theory: "Understanding sequence limits is fundamental to calculus and analysis. Convergent sequences approach a finite limit, while divergent sequences do not settle to a single value.",
                keyFormulas: {
                    "Limit Definition": "∀ε>0, ∃N: n>N ⟹ |aₙ-L|<ε",
                    "Squeeze Theorem": "If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L",
                    "Ratio Test": "If lim|aₙ₊₁/aₙ| = L < 1, sequence → 0",
                    "Monotone Convergence": "Bounded monotone sequences converge"
                },
                solvingSteps: [
                    "Determine if sequence is bounded",
                    "Check if sequence is monotone",
                    "Apply appropriate limit laws",
                    "Use squeeze theorem if applicable"
                ],
                applications: [
                    "Series convergence tests",
                    "Recursive algorithm analysis",
                    "Numerical approximation",
                    "Mathematical modeling"
                ]
            },

            special_sequences: {
                title: "Special Sequences and Series",
                concepts: [
                    "Triangular numbers: Tₙ = n(n+1)/2",
                    "Square numbers: Sₙ = n²",
                    "Pentagonal numbers: Pₙ = n(3n-1)/2",
                    "Factorial sequences: n!"
                ],
                theory: "Special sequences appear throughout mathematics with unique properties and applications. Many have closed-form formulas and interesting number-theoretic properties.",
                keyFormulas: {
                    "Triangular": "Tₙ = n(n+1)/2",
                    "Square": "Sₙ = n²",
                    "Factorial": "n! = n·(n-1)!",
                    "Catalan": "Cₙ = (2n)!/(n!(n+1)!)"
                },
                patterns: [
                    "Triangular numbers are sums: 1+2+3+...+n",
                    "Square numbers are products: n×n",
                    "Factorials grow extremely fast",
                    "Catalan numbers count combinatorial structures"
                ],
                applications: [
                    "Combinatorics and counting",
                    "Number theory",
                    "Algorithm analysis",
                    "Probability and statistics"
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
            // Mathematical operators
            'sum': 'Σ', 'product': 'Π', 'infinity': '∞', 'approximately': '≈',
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'plusminus': '±',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'phi': 'φ', 'psi': 'ψ',
            // Special symbols
            'ratio': ':', 'dots': '...', 'implies': '⟹', 'forall': '∀',
            'exists': '∃', 'element': '∈', 'subset': '⊂'
        };
    }

    initializeSequenceSolvers() {
        this.sequenceTypes = {
            // Arithmetic sequences
            arithmetic_sequence: {
                patterns: [
                    /arithmetic.*sequence/i,
                    /common.*difference/i,
                    /linear.*sequence/i,
                    /a.*\+.*\(n.*-.*1\).*d/i
                ],
                solver: this.solveArithmeticSequence.bind(this),
                name: 'Arithmetic Sequence',
                category: 'sequences',
                description: 'Solves arithmetic sequence problems with constant difference'
            },

            // Arithmetic nth term
            arithmetic_nth_term: {
                patterns: [
                    /find.*nth.*term.*arithmetic/i,
                    /arithmetic.*term/i
                ],
                solver: this.findArithmeticNthTerm.bind(this),
                name: 'Arithmetic Sequence nth Term',
                category: 'sequences',
                description: 'Finds specific term in arithmetic sequence'
            },

            // Arithmetic series
            arithmetic_series: {
                patterns: [
                    /arithmetic.*series/i,
                    /sum.*arithmetic/i,
                    /arithmetic.*sum/i
                ],
                solver: this.solveArithmeticSeries.bind(this),
                name: 'Arithmetic Series',
                category: 'series',
                description: 'Calculates sum of arithmetic sequence terms'
            },

            // Geometric sequences
            geometric_sequence: {
                patterns: [
                    /geometric.*sequence/i,
                    /common.*ratio/i,
                    /exponential.*sequence/i,
                    /a.*\*.*r.*\^/i
                ],
                solver: this.solveGeometricSequence.bind(this),
                name: 'Geometric Sequence',
                category: 'sequences',
                description: 'Solves geometric sequence problems with constant ratio'
            },

            // Geometric nth term
            geometric_nth_term: {
                patterns: [
                    /find.*nth.*term.*geometric/i,
                    /geometric.*term/i
                ],
                solver: this.findGeometricNthTerm.bind(this),
                name: 'Geometric Sequence nth Term',
                category: 'sequences',
                description: 'Finds specific term in geometric sequence'
            },

            // Geometric series (finite)
            geometric_series_finite: {
                patterns: [
                    /geometric.*series.*finite/i,
                    /sum.*geometric.*finite/i,
                    /finite.*geometric.*sum/i
                ],
                solver: this.solveGeometricSeriesFinite.bind(this),
                name: 'Finite Geometric Series',
                category: 'series',
                description: 'Calculates sum of finite geometric series'
            },

            // Geometric series (infinite)
            geometric_series_infinite: {
                patterns: [
                    /geometric.*series.*infinite/i,
                    /infinite.*geometric/i,
                    /converge.*geometric/i
                ],
                solver: this.solveGeometricSeriesInfinite.bind(this),
                name: 'Infinite Geometric Series',
                category: 'series',
                description: 'Evaluates convergent infinite geometric series'
            },

            // Fibonacci sequence
            fibonacci_sequence: {
                patterns: [
                    /fibonacci/i,
                    /F.*n.*=.*F.*n-1.*\+.*F.*n-2/i,
                    /recursive.*sequence/i
                ],
                solver: this.solveFibonacciSequence.bind(this),
                name: 'Fibonacci Sequence',
                category: 'recursive',
                description: 'Generates Fibonacci sequence terms'
            },

            // General recursive sequence
            recursive_sequence: {
                patterns: [
                    /recursive/i,
                    /recurrence.*relation/i,
                    /a.*n.*=.*a.*n-1/i
                ],
                solver: this.solveRecursiveSequence.bind(this),
                name: 'Recursive Sequence',
                category: 'recursive',
                description: 'Solves sequences defined recursively'
            },

            // Binomial expansion
            binomial_theorem: {
                patterns: [
                    /binomial.*theorem/i,
                    /binomial.*expansion/i,
                    /\(.*\+.*\)\^/i,
                    /pascal.*triangle/i
                ],
                solver: this.solveBinomialTheorem.bind(this),
                name: 'Binomial Theorem',
                category: 'expansions',
                description: 'Expands binomial expressions using binomial theorem'
            },

            // Binomial coefficient
            binomial_coefficient: {
                patterns: [
                    /binomial.*coefficient/i,
                    /combination/i,
                    /C\(.*,.*\)/i,
                    /choose/i
                ],
                solver: this.calculateBinomialCoefficient.bind(this),
                name: 'Binomial Coefficient',
                category: 'combinatorics',
                description: 'Calculates binomial coefficients C(n,k)'
            },

            // Telescoping series
            telescoping_series: {
                patterns: [
                    /telescoping/i,
                    /cancel.*series/i,
                    /partial.*fraction.*series/i
                ],
                solver: this.solveTelescopingSeries.bind(this),
                name: 'Telescoping Series',
                category: 'series',
                description: 'Evaluates series with canceling terms'
            },

            // Harmonic series
            harmonic_series: {
                patterns: [
                    /harmonic.*series/i,
                    /sum.*1\/n/i,
                    /H.*n/i
                ],
                solver: this.solveHarmonicSeries.bind(this),
                name: 'Harmonic Series',
                category: 'series',
                description: 'Analyzes harmonic series and partial sums'
            },

            // p-series
            p_series: {
                patterns: [
                    /p-series/i,
                    /p.*series/i,
                    /sum.*1\/n\^p/i
                ],
                solver: this.solvePSeries.bind(this),
                name: 'p-Series',
                category: 'series',
                description: 'Tests convergence of p-series'
            },

            // Power series
            power_series: {
                patterns: [
                    /power.*series/i,
                    /taylor.*series/i,
                    /maclaurin/i,
                    /radius.*convergence/i
                ],
                solver: this.solvePowerSeries.bind(this),
                name: 'Power Series',
                category: 'series',
                description: 'Analyzes power series and convergence'
            },

            // Sequence limits
            sequence_limit: {
                patterns: [
                    /limit.*sequence/i,
                    /sequence.*converge/i,
                    /lim.*n.*infinity/i
                ],
                solver: this.findSequenceLimit.bind(this),
                name: 'Sequence Limit',
                category: 'limits',
                description: 'Finds limit of sequence as n→∞'
            },

            // Series convergence tests
            series_convergence: {
                patterns: [
                    /converge.*test/i,
                    /ratio.*test/i,
                    /root.*test/i,
                    /comparison.*test/i
                ],
                solver: this.testSeriesConvergence.bind(this),
                name: 'Series Convergence Test',
                category: 'analysis',
                description: 'Tests series for convergence'
            },

            // Partial sums
            partial_sums: {
                patterns: [
                    /partial.*sum/i,
                    /S.*n/i,
                    /sum.*first.*n.*terms/i
                ],
                solver: this.calculatePartialSums.bind(this),
                name: 'Partial Sums',
                category: 'series',
                description: 'Calculates partial sums of series'
            },

            // Sigma notation evaluation
            sigma_notation: {
                patterns: [
                    /sigma/i,
                    /summation/i,
                    /Σ/,
                    /sum.*k=.*to/i
                ],
                solver: this.evaluateSigmaNotation.bind(this),
                name: 'Sigma Notation',
                category: 'notation',
                description: 'Evaluates summation in sigma notation'
            },

            // Sequence patterns
            sequence_pattern: {
                patterns: [
                    /find.*pattern/i,
                    /next.*term/i,
                    /sequence.*pattern/i
                ],
                solver: this.findSequencePattern.bind(this),
                name: 'Sequence Pattern Recognition',
                category: 'analysis',
                description: 'Identifies pattern in given sequence'
            },

            // Special sequences (triangular, square, etc.)
            special_sequences: {
                patterns: [
                    /triangular.*number/i,
                    /square.*number/i,
                    /pentagonal/i,
                    /factorial/i,
                    /catalan/i
                ],
                solver: this.solveSpecialSequence.bind(this),
                name: 'Special Sequences',
                category: 'special',
                description: 'Analyzes triangular, square, factorial, and other special sequences'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            arithmetic_sequence: {
                'Calculate common difference': [
                    'Subtracting in wrong order (a₁ - a₂ instead of a₂ - a₁)',
                    'Not checking if difference is consistent throughout sequence',
                    'Confusing common difference with common ratio'
                ],
                'Find nth term': [
                    'Using n instead of (n-1) in formula aₙ = a₁ + (n-1)d',
                    'Forgetting to add the first term a₁',
                    'Sign errors when d is negative'
                ]
            },
            geometric_sequence: {
                'Calculate common ratio': [
                    'Dividing in wrong order (aₙ₋₁/aₙ instead of aₙ/aₙ₋₁)',
                    'Not checking if ratio is consistent',
                    'Forgetting that r can be negative (alternating sequences)'
                ],
                'Find nth term': [
                    'Using n instead of (n-1) in exponent: aₙ = a₁ · r^(n-1)',
                    'Confusing multiplication with addition',
                    'Calculation errors with fractional or negative ratios'
                ]
            },
            arithmetic_series: {
                'Calculate sum': [
                    'Forgetting to divide by 2 in sum formula',
                    'Using wrong formula variant (first+last vs. using d)',
                    'Counting number of terms incorrectly'
                ]
            },
            geometric_series: {
                'Calculate finite sum': [
                    'Using wrong formula when r = 1',
                    'Sign error in numerator: (1-r^n) vs (r^n-1)',
                    'Dividing by (r-1) when should use (1-r)'
                ],
                'Calculate infinite sum': [
                    'Attempting to sum when |r| ≥ 1 (divergent)',
                    'Forgetting absolute value condition |r| < 1',
                    'Using finite sum formula instead of S∞ = a₁/(1-r)'
                ]
            },
            binomial_theorem: {
                'Calculate coefficients': [
                    'Errors in computing factorials',
                    'Confusing C(n,k) with other notations',
                    'Not simplifying binomial coefficients'
                ],
                'Expand binomial': [
                    'Wrong exponents on terms (should sum to n)',
                    'Missing terms or wrong number of terms (should be n+1)',
                    'Sign errors in (a-b)^n expansions'
                ]
            },
            fibonacci_sequence: {
                'Generate terms': [
                    'Wrong initial conditions (should be F₁=1, F₂=1 or F₀=0, F₁=1)',
                    'Adding wrong previous terms',
                    'Off-by-one indexing errors'
                ]
            }
        };

        this.errorPrevention = {
            formula_checking: {
                reminder: 'Double-check which formula variant to use',
                method: 'Write out the formula before substituting values'
            },
            index_verification: {
                reminder: 'Verify if counting starts at n=0 or n=1',
                method: 'Check first few terms manually'
            },
            convergence_testing: {
                reminder: 'Always check convergence conditions for infinite series',
                method: 'Test |r| < 1 before applying infinite sum formula'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Understanding the pattern and meaning',
                language: 'intuitive and pattern-focused'
            },
            procedural: {
                focus: 'Step-by-step calculation methods',
                language: 'algorithmic instructions'
            },
            visual: {
                focus: 'Geometric and graphical interpretation',
                language: 'visual patterns and representations'
            },
            algebraic: {
                focus: 'Formal mathematical notation and properties',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete numbers and simple sequences'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of concrete and abstract'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive explanations with theory',
                examples: 'abstract and generalized cases'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty progression'
            }
        };
    }

    // Main solver method
    solveSequenceProblem(config) {
        const { problem, sequence, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseSequenceProblem(problem, sequence, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveSequenceProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateSequenceSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateSequenceGraphData();

            // Generate workbook
            this.generateSequenceWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                terms: this.currentSolution?.terms,
                solutionType: this.currentSolution?.solutionType
            };

        } catch (error) {
            throw new Error(`Failed to solve sequence/series problem: ${error.message}`);
        }
    }

    parseSequenceProblem(problem, sequence = [], parameters = {}, problemType = null, context = {}) {
        const cleanInput = problem ? this.cleanMathExpression(problem) : '';

        // If problem type is specified, use it directly
        if (problemType && this.sequenceTypes[problemType]) {
            return {
                originalInput: problem || `${problemType} problem`,
                cleanInput: cleanInput,
                type: problemType,
                sequence: sequence,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect sequence problem type
        for (const [type, config] of Object.entries(this.sequenceTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(JSON.stringify(sequence))) {
                    const extractedParams = this.extractSequenceParameters(sequence, type, parameters);

                    return {
                        originalInput: problem || 'Sequence problem',
                        cleanInput: cleanInput,
                        type: type,
                        sequence: sequence,
                        parameters: { ...extractedParams, ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Try to detect from given sequence
        if (sequence && sequence.length >= 3) {
            const detectedType = this.detectSequenceType(sequence);
            const extractedParams = this.extractSequenceParameters(sequence, detectedType, parameters);
            
            return {
                originalInput: problem || 'Sequence analysis',
                cleanInput: cleanInput,
                type: detectedType,
                sequence: sequence,
                parameters: { ...extractedParams, ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize sequence/series type from: ${problem || sequence}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/Σ/g, 'sum')
            .replace(/Π/g, 'product')
            .replace(/∞/g, 'infinity')
            .trim();
    }

    detectSequenceType(sequence) {
        if (!sequence || sequence.length < 3) return 'sequence_pattern';

        // Check for arithmetic sequence (constant difference)
        const differences = [];
        for (let i = 1; i < sequence.length; i++) {
            differences.push(sequence[i] - sequence[i-1]);
        }
        
        const isArithmetic = differences.every(d => Math.abs(d - differences[0]) < 1e-10);
        if (isArithmetic) return 'arithmetic_sequence';

        // Check for geometric sequence (constant ratio)
        const ratios = [];
        for (let i = 1; i < sequence.length; i++) {
            if (sequence[i-1] !== 0) {
                ratios.push(sequence[i] / sequence[i-1]);
            }
        }
        
        const isGeometric = ratios.length > 0 && ratios.every(r => Math.abs(r - ratios[0]) < 1e-10);
        if (isGeometric) return 'geometric_sequence';

        // Check for Fibonacci-like (each term = sum of previous two)
        let isFibonacci = true;
        for (let i = 2; i < sequence.length; i++) {
            if (Math.abs(sequence[i] - (sequence[i-1] + sequence[i-2])) > 1e-10) {
                isFibonacci = false;
                break;
            }
        }
        if (isFibonacci) return 'fibonacci_sequence';

        return 'sequence_pattern';
    }

    extractSequenceParameters(sequence, type, existingParams) {
        const params = { ...existingParams };

        if (type === 'arithmetic_sequence' || type === 'arithmetic_nth_term' || type === 'arithmetic_series') {
            if (sequence && sequence.length >= 2) {
                params.a1 = params.a1 || sequence[0];
                params.d = params.d || (sequence[1] - sequence[0]);
            }
        }

        if (type === 'geometric_sequence' || type === 'geometric_nth_term' || 
            type === 'geometric_series_finite' || type === 'geometric_series_infinite') {
            if (sequence && sequence.length >= 2 && sequence[0] !== 0) {
                params.a1 = params.a1 || sequence[0];
                params.r = params.r || (sequence[1] / sequence[0]);
            }
        }

        if (type === 'fibonacci_sequence') {
            params.F0 = params.F0 !== undefined ? params.F0 : 0;
            params.F1 = params.F1 !== undefined ? params.F1 : 1;
        }

        return params;
    }

    solveSequenceProblem_Internal(problem) {
        const solver = this.sequenceTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for sequence type: ${problem.type}`);
        }

        return solver(problem);
    }

    // SEQUENCE SOLVERS

    solveArithmeticSequence(problem) {
        const { a1, d, n = 10 } = problem.parameters;
        const terms = [];

        for (let i = 1; i <= n; i++) {
            terms.push(a1 + (i - 1) * d);
        }

        return {
            sequenceType: 'Arithmetic',
            firstTerm: a1,
            commonDifference: d,
            nthTermFormula: `aₙ = ${a1} + (n-1)(${d})`,
            terms: terms,
            numberOfTerms: n,
            pattern: d > 0 ? 'Increasing' : d < 0 ? 'Decreasing' : 'Constant',
            category: 'arithmetic_sequence'
        };
    }

    findArithmeticNthTerm(problem) {
        const { a1, d, n } = problem.parameters;
        const an = a1 + (n - 1) * d;

        return {
            sequenceType: 'Arithmetic',
            firstTerm: a1,
            commonDifference: d,
            termNumber: n,
            nthTerm: an,
            formula: `a₍${n}₎ = ${a1} + (${n}-1)(${d}) = ${an}`,
            category: 'arithmetic_nth_term'
        };
    }

    solveArithmeticSeries(problem) {
        const { a1, d, n, an } = problem.parameters;
        
        // If last term not provided, calculate it
        const lastTerm = an !== undefined ? an : a1 + (n - 1) * d;
        
        // Calculate sum using both formulas for verification
        const sum1 = (n / 2) * (a1 + lastTerm);
        const sum2 = (n / 2) * (2 * a1 + (n - 1) * d);

        return {
            seriesType: 'Arithmetic',
            firstTerm: a1,
            lastTerm: lastTerm,
            commonDifference: d,
            numberOfTerms: n,
            sum: sum1,
            formula1: `Sₙ = n/2(a₁ + aₙ) = ${n}/2(${a1} + ${lastTerm}) = ${sum1}`,
            formula2: `Sₙ = n/2(2a₁ + (n-1)d) = ${n}/2(2·${a1} + ${n-1}·${d}) = ${sum2}`,
            verification: Math.abs(sum1 - sum2) < 1e-10,
            category: 'arithmetic_series'
        };
    }

    solveGeometricSequence(problem) {
        const { a1, r, n = 10 } = problem.parameters;
        const terms = [];

        for (let i = 1; i <= n; i++) {
            terms.push(a1 * Math.pow(r, i - 1));
        }

        return {
            sequenceType: 'Geometric',
            firstTerm: a1,
            commonRatio: r,
            nthTermFormula: `aₙ = ${a1} · ${r}^(n-1)`,
            terms: terms,
            numberOfTerms: n,
            pattern: Math.abs(r) > 1 ? 'Growing' : Math.abs(r) < 1 ? 'Decaying' : 'Constant magnitude',
            alternating: r < 0,
            category: 'geometric_sequence'
        };
    }

    findGeometricNthTerm(problem) {
        const { a1, r, n } = problem.parameters;
        const an = a1 * Math.pow(r, n - 1);

        return {
            sequenceType: 'Geometric',
            firstTerm: a1,
            commonRatio: r,
            termNumber: n,
            nthTerm: an,
            formula: `a₍${n}₎ = ${a1} · ${r}^(${n}-1) = ${an}`,
            category: 'geometric_nth_term'
        };
    }

    solveGeometricSeriesFinite(problem) {
        const { a1, r, n } = problem.parameters;

        if (Math.abs(r - 1) < 1e-10) {
            // Special case: r = 1
            const sum = n * a1;
            return {
                seriesType: 'Geometric (r=1)',
                firstTerm: a1,
                commonRatio: r,
                numberOfTerms: n,
                sum: sum,
                formula: `Sₙ = n·a₁ = ${n}·${a1} = ${sum}`,
                note: 'When r = 1, series becomes n copies of a₁',
                category: 'geometric_series_finite'
            };
        }

        const sum = a1 * (1 - Math.pow(r, n)) / (1 - r);
        const alternativeSum = a1 * (Math.pow(r, n) - 1) / (r - 1);

        return {
            seriesType: 'Geometric',
            firstTerm: a1,
            commonRatio: r,
            numberOfTerms: n,
            sum: sum,
            formula: `Sₙ = a₁(1-r^n)/(1-r) = ${a1}(1-${r}^${n})/(1-${r}) = ${sum}`,
            alternativeFormula: `Sₙ = a₁(r^n-1)/(r-1) = ${alternativeSum}`,
            category: 'geometric_series_finite'
        };
    }

    solveGeometricSeriesInfinite(problem) {
        const { a1, r } = problem.parameters;

        if (Math.abs(r) >= 1) {
            return {
                seriesType: 'Geometric (Infinite)',
                firstTerm: a1,
                commonRatio: r,
                convergence: 'Divergent',
                reason: `|r| = ${Math.abs(r)} ≥ 1, series does not converge`,
                sum: 'Does not exist',
                condition: 'Infinite geometric series converges only when |r| < 1',
                category: 'geometric_series_infinite'
            };
        }

        const sum = a1 / (1 - r);

        return {
            seriesType: 'Geometric (Infinite)',
            firstTerm: a1,
            commonRatio: r,
            convergence: 'Convergent',
            sum: sum,
            formula: `S∞ = a₁/(1-r) = ${a1}/(1-${r}) = ${sum}`,
            condition: `|r| = ${Math.abs(r)} < 1`,
            category: 'geometric_series_infinite'
        };
    }

    solveFibonacciSequence(problem) {
        const { n = 10, F0 = 0, F1 = 1 } = problem.parameters;
        const terms = [F0, F1];

        for (let i = 2; i <= n; i++) {
            terms.push(terms[i-1] + terms[i-2]);
        }

        // Calculate golden ratio approximation
        const phi = (1 + Math.sqrt(5)) / 2;
        const ratios = [];
        for (let i = 1; i < terms.length; i++) {
            if (terms[i-1] !== 0) {
                ratios.push(terms[i] / terms[i-1]);
            }
        }

        return {
            sequenceType: 'Fibonacci',
            initialTerms: [F0, F1],
            terms: terms.slice(0, n + 1),
            recurrenceRelation: 'Fₙ = Fₙ₋₁ + Fₙ₋₂',
            goldenRatio: phi,
            ratioApproximations: ratios,
            convergesToPhi: ratios.length > 0 ? ratios[ratios.length - 1] : null,
            category: 'fibonacci_sequence'
        };
    }

    solveRecursiveSequence(problem) {
        const { n = 10, a1, recursionFunction, initialTerms = [] } = problem.parameters;
        
        const terms = initialTerms.length > 0 ? [...initialTerms] : [a1];

        // This is a framework - actual implementation depends on recursion type
        return {
            sequenceType: 'Recursive',
            initialConditions: initialTerms.length > 0 ? initialTerms : [a1],
            terms: terms.slice(0, n),
            recurrenceRelation: recursionFunction || 'User-defined',
            note: 'Specific recursion formula needed for complete solution',
            category: 'recursive_sequence'
        };
    }

    solveBinomialTheorem(problem) {
        const { a, b, n } = problem.parameters;
        const expansion = [];
        
        for (let k = 0; k <= n; k++) {
            const coefficient = this.binomialCoefficient(n, k);
            const aExponent = n - k;
            const bExponent = k;
            const term = {
                coefficient: coefficient,
                aExponent: aExponent,
                bExponent: bExponent,
                value: coefficient * Math.pow(a, aExponent) * Math.pow(b, bExponent),
                termString: `${coefficient}·${a}^${aExponent}·${b}^${bExponent}`
            };
            expansion.push(term);
        }

        const totalSum = expansion.reduce((sum, term) => sum + term.value, 0);
        const expectedSum = Math.pow(a + b, n);

        return {
            expansionType: 'Binomial',
            base1: a,
            base2: b,
            exponent: n,
            expansion: expansion,
            formula: `(${a}+${b})^${n}`,
            expandedForm: expansion.map(t => t.termString).join(' + '),
            totalSum: totalSum,
            verification: Math.abs(totalSum - expectedSum) < 1e-10,
            numberOfTerms: n + 1,
            category: 'binomial_theorem'
        };
    }

    calculateBinomialCoefficient(problem) {
        const { n, k } = problem.parameters;
        const coefficient = this.binomialCoefficient(n, k);

        return {
            n: n,
            k: k,
            coefficient: coefficient,
            notation: `C(${n},${k}) = ${n}!/(${k}!·${n-k}!)`,
            value: coefficient,
            pascalRow: this.getPascalRow(n),
            category: 'binomial_coefficient'
        };
    }

    binomialCoefficient(n, k) {
        if (k < 0 || k > n) return 0;
        if (k === 0 || k === n) return 1;
        
        // Use symmetry property
        k = Math.min(k, n - k);
        
        let result = 1;
        for (let i = 0; i < k; i++) {
            result = result * (n - i) / (i + 1);
        }
        
        return Math.round(result);
    }

    getPascalRow(n) {
        const row = [];
        for (let k = 0; k <= n; k++) {
            row.push(this.binomialCoefficient(n, k));
        }
        return row;
    }

    solveTelescopingSeries(problem) {
        const { n, seriesFunction, explicitTerms = [] } = problem.parameters;

        // Framework for telescoping series
        return {
            seriesType: 'Telescoping',
            numberOfTerms: n,
            principle: 'Most intermediate terms cancel',
            generalForm: '∑(aₖ - aₖ₊₁) = a₁ - aₙ₊₁',
            note: 'Specific series formula needed for complete evaluation',
            category: 'telescoping_series'
        };
    }

    solveHarmonicSeries(problem) {
        const { n } = problem.parameters;
        const partialSum = this.calculateHarmonicSum(n);
        const eulerConstant = 0.5772156649;
        const approximation = Math.log(n) + eulerConstant;

        return {
            seriesType: 'Harmonic',
            numberOfTerms: n,
            partialSum: partialSum,
            formula: 'Hₙ = 1 + 1/2 + 1/3 + ... + 1/n',
            approximation: approximation,
            eulerConstant: eulerConstant,
            approximationFormula: `Hₙ ≈ ln(n) + γ ≈ ${approximation}`,
            convergence: 'Divergent (grows without bound)',
            category: 'harmonic_series'
        };
    }

    calculateHarmonicSum(n) {
        let sum = 0;
        for (let k = 1; k <= n; k++) {
            sum += 1 / k;
        }
        return sum;
    }

    solvePSeries(problem) {
        const { p, n = null } = problem.parameters;

        const convergent = p > 1;
        const result = {
            seriesType: 'p-Series',
            p: p,
            formula: `∑(1/n^${p}) from n=1 to ∞`,
            convergence: convergent ? 'Convergent' : 'Divergent',
            convergenceTest: `p = ${p} ${convergent ? '>' : '≤'} 1`,
            category: 'p_series'
        };

        if (n !== null) {
            let partialSum = 0;
            for (let k = 1; k <= n; k++) {
                partialSum += 1 / Math.pow(k, p);
            }
            result.partialSum = partialSum;
            result.numberOfTerms = n;
        }

        if (p === 2) {
            result.exactSum = (Math.PI * Math.PI) / 6;
            result.note = 'Basel problem: ∑(1/n²) = π²/6';
        }

        return result;
    }

    solvePowerSeries(problem) {
        const { coefficients = [], center = 0, x = null, n = 10 } = problem.parameters;

        // Framework for power series
        return {
            seriesType: 'Power Series',
            center: center,
            formula: `∑ aₙ(x-${center})^n`,
            note: 'Radius and interval of convergence require ratio/root test',
            category: 'power_series'
        };
    }

    findSequenceLimit(problem) {
        const { sequence = [], explicitFormula = null, n = 100 } = problem.parameters;

        let terms = sequence;
        if (explicitFormula && typeof explicitFormula === 'function') {
            terms = [];
            for (let i = 1; i <= n; i++) {
                terms.push(explicitFormula(i));
            }
        }

        const lastFewTerms = terms.slice(-10);
        const estimatedLimit = lastFewTerms.length > 0 ? lastFewTerms[lastFewTerms.length - 1] : null;

        return {
            sequenceType: 'Limit Analysis',
            terms: terms.slice(0, 20), // First 20 terms
            lastTerms: lastFewTerms,
            estimatedLimit: estimatedLimit,
            note: 'Exact limit requires analytical methods',
            category: 'sequence_limit'
        };
    }

    testSeriesConvergence(problem) {
        const { testType = 'ratio', seriesTerms = [], explicitTerm = null } = problem.parameters;

        return {
            testType: testType.charAt(0).toUpperCase() + testType.slice(1) + ' Test',
            note: 'Convergence testing requires specific series formula',
            tests: {
                ratio: 'lim|aₙ₊₁/aₙ| < 1 ⟹ converges',
                root: 'lim|aₙ|^(1/n) < 1 ⟹ converges',
                comparison: 'If 0 ≤ aₙ ≤ bₙ and ∑bₙ converges, then ∑aₙ converges',
                integral: 'Compare to integral for convergence'
            },
            category: 'series_convergence'
        };
    }

    calculatePartialSums(problem) {
        const { sequence = [], n = 10 } = problem.parameters;
        const partialSums = [];
        let runningSum = 0;

        for (let i = 0; i < Math.min(sequence.length, n); i++) {
            runningSum += sequence[i];
            partialSums.push({
                n: i + 1,
                term: sequence[i],
                partialSum: runningSum
            });
        }

        return {
            seriesType: 'Partial Sums',
            partialSums: partialSums,
            finalSum: runningSum,
            numberOfTerms: partialSums.length,
            category: 'partial_sums'
        };
    }

    evaluateSigmaNotation(problem) {
        const { lowerBound = 1, upperBound, expression } = problem.parameters;

        // Framework for sigma notation
        return {
            notation: `∑(k=${lowerBound} to ${upperBound})`,
            expression: expression || 'User-defined',
            note: 'Specific expression needed for evaluation',
            category: 'sigma_notation'
        };
    }

    findSequencePattern(problem) {
        const { sequence } = problem.parameters;

        if (!sequence || sequence.length < 3) {
            return {
                patternType: 'Insufficient data',
                note: 'Need at least 3 terms to identify pattern',
                category: 'sequence_pattern'
            };
        }

        const detectedType = this.detectSequenceType(sequence);
        const analysis = {
            givenSequence: sequence,
            detectedPattern: detectedType,
            category: 'sequence_pattern'
        };

        if (detectedType === 'arithmetic_sequence') {
            const d = sequence[1] - sequence[0];
            analysis.commonDifference = d;
            analysis.nthTermFormula = `aₙ = ${sequence[0]} + (n-1)·${d}`;
        } else if (detectedType === 'geometric_sequence') {
            const r = sequence[1] / sequence[0];
            analysis.commonRatio = r;
            analysis.nthTermFormula = `aₙ = ${sequence[0]} · ${r}^(n-1)`;
        }

        return analysis;
    }

    solveSpecialSequence(problem) {
        const { sequenceType, n = 10 } = problem.parameters;
        const terms = [];

        switch (sequenceType?.toLowerCase()) {
            case 'triangular':
                for (let i = 1; i <= n; i++) {
                    terms.push(i * (i + 1) / 2);
                }
                return {
                    sequenceType: 'Triangular Numbers',
                    formula: 'Tₙ = n(n+1)/2',
                    terms: terms,
                    description: 'Sum of first n natural numbers',
                    category: 'special_sequences'
                };

            case 'square':
                for (let i = 1; i <= n; i++) {
                    terms.push(i * i);
                }
                return {
                    sequenceType: 'Square Numbers',
                    formula: 'Sₙ = n²',
                    terms: terms,
                    description: 'Perfect squares',
                    category: 'special_sequences'
                };

            case 'pentagonal':
                for (let i = 1; i <= n; i++) {
                    terms.push(i * (3 * i - 1) / 2);
                }
                return {
                    sequenceType: 'Pentagonal Numbers',
                    formula: 'Pₙ = n(3n-1)/2',
                    terms: terms,
                    description: 'Figurate numbers representing pentagons',
                    category: 'special_sequences'
                };

            case 'factorial':
                for (let i = 1; i <= n; i++) {
                    terms.push(this.factorial(i));
                }
                return {
                    sequenceType: 'Factorial Sequence',
                    formula: 'n! = n·(n-1)·(n-2)·...·2·1',
                    terms: terms,
                    description: 'Product of all positive integers up to n',
                    category: 'special_sequences'
                };

            case 'catalan':
                for (let i = 0; i < n; i++) {
                    terms.push(this.catalanNumber(i));
                }
                return {
                    sequenceType: 'Catalan Numbers',
                    formula: 'Cₙ = (2n)!/(n!(n+1)!)',
                    terms: terms,
                    description: 'Counts various combinatorial structures',
                    category: 'special_sequences'
                };

            default:
                return {
                    sequenceType: 'Unknown Special Sequence',
                    note: 'Please specify: triangular, square, pentagonal, factorial, or catalan',
                    category: 'special_sequences'
                };
        }
    }

    factorial(n) {
        if (n <= 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    catalanNumber(n) {
        return this.binomialCoefficient(2 * n, n) / (n + 1);
    }

    // VERIFICATION METHODS

    verifyArithmeticSequence() {
        const { a1, d, n } = this.currentProblem.parameters;
        const solution = this.currentSolution;

        const verifications = [];
        for (let i = 0; i < Math.min(5, solution.terms.length); i++) {
            const expectedTerm = a1 + i * d;
            const actualTerm = solution.terms[i];
            verifications.push({
                termNumber: i + 1,
                formula: `a₍${i+1}₎ = ${a1} + ${i}·${d}`,
                expected: expectedTerm,
                actual: actualTerm,
                match: Math.abs(expectedTerm - actualTerm) < 1e-10
            });
        }

        return {
            sequenceType: 'Arithmetic',
            verifications: verifications,
            allMatch: verifications.every(v => v.match),
            commonDifference: d,
            differencesConsistent: this.checkConsistentDifferences(solution.terms)
        };
    }

    checkConsistentDifferences(terms) {
        if (terms.length < 2) return true;
        
        const firstDiff = terms[1] - terms[0];
        for (let i = 2; i < terms.length; i++) {
            if (Math.abs((terms[i] - terms[i-1]) - firstDiff) > 1e-10) {
                return false;
            }
        }
        return true;
    }

    verifyGeometricSequence() {
        const { a1, r, n } = this.currentProblem.parameters;
        const solution = this.currentSolution;

        const verifications = [];
        for (let i = 0; i < Math.min(5, solution.terms.length); i++) {
            const expectedTerm = a1 * Math.pow(r, i);
            const actualTerm = solution.terms[i];
            verifications.push({
                termNumber: i + 1,
                formula: `a₍${i+1}₎ = ${a1} · ${r}^${i}`,
                expected: expectedTerm,
                actual: actualTerm,
                match: Math.abs(expectedTerm - actualTerm) < 1e-10
            });
        }

        return {
            sequenceType: 'Geometric',
            verifications: verifications,
            allMatch: verifications.every(v => v.match),
            commonRatio: r,
            ratiosConsistent: this.checkConsistentRatios(solution.terms)
        };
    }

    checkConsistentRatios(terms) {
        if (terms.length < 2 || terms[0] === 0) return true;
        
        const firstRatio = terms[1] / terms[0];
        for (let i = 2; i < terms.length; i++) {
            if (terms[i-1] === 0) return false;
            if (Math.abs((terms[i] / terms[i-1]) - firstRatio) > 1e-10) {
                return false;
            }
        }
        return true;
    }

    verifyArithmeticSeries() {
        const { a1, d, n } = this.currentProblem.parameters;
        const solution = this.currentSolution;

        // Calculate sum by direct addition
        let directSum = 0;
        for (let i = 1; i <= n; i++) {
            directSum += a1 + (i - 1) * d;
        }

        // Calculate using formulas
        const an = a1 + (n - 1) * d;
        const formulaSum1 = (n / 2) * (a1 + an);
        const formulaSum2 = (n / 2) * (2 * a1 + (n - 1) * d);

        return {
            seriesType: 'Arithmetic',
            directSum: directSum,
            formulaSum1: formulaSum1,
            formulaSum2: formulaSum2,
            solutionSum: solution.sum,
            allMatch: Math.abs(directSum - solution.sum) < 1e-10 &&
                      Math.abs(formulaSum1 - solution.sum) < 1e-10 &&
                      Math.abs(formulaSum2 - solution.sum) < 1e-10,
            verificationNote: 'All three methods should produce same result'
        };
    }

    verifyGeometricSeries() {
        const { a1, r, n } = this.currentProblem.parameters;
        const solution = this.currentSolution;

        // Calculate sum by direct addition
        let directSum = 0;
        for (let i = 0; i < n; i++) {
            directSum += a1 * Math.pow(r, i);
        }

        // Calculate using formula
        let formulaSum;
        if (Math.abs(r - 1) < 1e-10) {
            formulaSum = n * a1;
        } else {
            formulaSum = a1 * (1 - Math.pow(r, n)) / (1 - r);
        }

        return {
            seriesType: 'Geometric',
            directSum: directSum,
            formulaSum: formulaSum,
            solutionSum: solution.sum,
            match: Math.abs(directSum - solution.sum) < 1e-10 &&
                   Math.abs(formulaSum - solution.sum) < 1e-10,
            verificationNote: 'Direct sum and formula should match'
        };
    }

    verifyBinomialExpansion() {
        const { a, b, n } = this.currentProblem.parameters;
        const solution = this.currentSolution;

        // Calculate (a+b)^n directly
        const directValue = Math.pow(a + b, n);
        
        // Sum all terms from expansion
        const expansionSum = solution.expansion.reduce((sum, term) => sum + term.value, 0);

        // Check number of terms
        const correctNumberOfTerms = solution.expansion.length === n + 1;

        // Check coefficient sum (should equal 2^n for a=1, b=1)
        const coefficientSum = solution.expansion.reduce((sum, term) => sum + term.coefficient, 0);

        return {
            expansionType: 'Binomial',
            directValue: directValue,
            expansionSum: expansionSum,
            match: Math.abs(directValue - expansionSum) < 1e-10,
            correctNumberOfTerms: correctNumberOfTerms,
            numberOfTerms: solution.expansion.length,
            expectedTerms: n + 1,
            coefficientSum: coefficientSum,
            expectedCoefficientSum: Math.pow(2, n)
        };
    }

    // FORMATTING METHODS FOR VERIFICATION DATA

    formatArithmeticVerification(verification) {
        const data = [
            ['Sequence Type', verification.sequenceType],
            ['Common Difference', verification.commonDifference],
            ['Differences Consistent', verification.differencesConsistent ? 'Yes' : 'No'],
            ['', ''],
            ['Term', 'Formula', 'Expected', 'Actual', 'Match']
        ];

        verification.verifications.forEach(v => {
            data.push([
                v.termNumber,
                v.formula,
                v.expected,
                v.actual,
                v.match ? 'Yes' : 'No'
            ]);
        });

        data.push(['', '']);
        data.push(['All Terms Match', verification.allMatch ? 'Yes' : 'No']);

        return data;
    }

    formatGeometricVerification(verification) {
        const data = [
            ['Sequence Type', verification.sequenceType],
            ['Common Ratio', verification.commonRatio],
            ['Ratios Consistent', verification.ratiosConsistent ? 'Yes' : 'No'],
            ['', ''],
            ['Term', 'Formula', 'Expected', 'Actual', 'Match']
        ];

        verification.verifications.forEach(v => {
            data.push([
                v.termNumber,
                v.formula,
                v.expected,
                v.actual,
                v.match ? 'Yes' : 'No'
            ]);
        });

        data.push(['', '']);
        data.push(['All Terms Match', verification.allMatch ? 'Yes' : 'No']);

        return data;
    }

    formatSeriesVerification(verification) {
        return [
            ['Series Type', verification.seriesType || verification.expansionType],
            ['Direct Calculation', verification.directSum || verification.directValue],
            ['Formula Result', verification.formulaSum || verification.expansionSum],
            ['Solution Value', verification.solutionSum || verification.expansionSum],
            ['Match', verification.match || verification.allMatch ? 'Yes' : 'No'],
            ['', ''],
            ['Verification Note', verification.verificationNote || 'All methods produce consistent results']
        ];
    }

    // STEP GENERATION METHODS

    generateSequenceSteps(problem, solution) {
        let baseSteps = this.generateBaseSequenceSteps(problem, solution);

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

        return baseSteps;
    }

    generateBaseSequenceSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'arithmetic_sequence':
            case 'arithmetic_nth_term':
                return this.generateArithmeticSequenceSteps(problem, solution);
            case 'arithmetic_series':
                return this.generateArithmeticSeriesSteps(problem, solution);
            case 'geometric_sequence':
            case 'geometric_nth_term':
                return this.generateGeometricSequenceSteps(problem, solution);
            case 'geometric_series_finite':
            case 'geometric_series_infinite':
                return this.generateGeometricSeriesSteps(problem, solution);
            case 'fibonacci_sequence':
                return this.generateFibonacciSteps(problem, solution);
            case 'binomial_theorem':
                return this.generateBinomialSteps(problem, solution);
            default:
                return this.generateGenericSequenceSteps(problem, solution);
        }
    }

    generateArithmeticSequenceSteps(problem, solution) {
        const { a1, d, n } = problem.parameters;
        const steps = [];

        // Step 1: Identify the sequence type
        steps.push({
            stepNumber: 1,
            step: 'Identify sequence type',
            description: 'Recognize this as an arithmetic sequence',
            expression: `First term a₁ = ${a1}, Common difference d = ${d}`,
            reasoning: 'An arithmetic sequence has a constant difference between consecutive terms',
            visualHint: 'Each term is obtained by adding the same value to the previous term',
            algebraicRule: 'Arithmetic Sequence Definition',
            goalStatement: 'We will find terms using the formula aₙ = a₁ + (n-1)d'
        });

        // Step 2: State the formula
        steps.push({
            stepNumber: 2,
            step: 'Write the nth term formula',
            description: 'Use the general formula for arithmetic sequences',
            beforeExpression: 'General: aₙ = a₁ + (n-1)d',
            afterExpression: `Specific: aₙ = ${a1} + (n-1)(${d})`,
            reasoning: 'This formula generates any term in the sequence',
            algebraicRule: 'Arithmetic Sequence Formula: aₙ = a₁ + (n-1)d',
            visualHint: 'The formula adds d to a₁ exactly (n-1) times'
        });

        // Step 3: Calculate specific terms
        if (problem.type === 'arithmetic_nth_term') {
            steps.push({
                stepNumber: 3,
                step: 'Calculate the specific term',
                description: `Find the ${n}th term`,
                beforeExpression: `a₍${n}₎ = ${a1} + (${n}-1)(${d})`,
                operation: 'Substitute and simplify',
                afterExpression: `a₍${n}₎ = ${a1} + ${(n-1) * d} = ${solution.nthTerm}`,
                reasoning: 'Substitute n into the formula and evaluate',
                workingDetails: {
                    step1: `Calculate (n-1): ${n} - 1 = ${n-1}`,
                    step2: `Multiply by d: ${n-1} × ${d} = ${(n-1) * d}`,
                    step3: `Add to a₁: ${a1} + ${(n-1) * d} = ${solution.nthTerm}`
                },
                finalAnswer: true
            });
        } else {
            steps.push({
                stepNumber: 3,
                step: 'Generate sequence terms',
                description: `Calculate the first ${n} terms`,
                reasoning: 'Apply the formula for n = 1, 2, 3, ...',
                terms: solution.terms.slice(0, Math.min(5, n)).map((term, i) => ({
                    n: i + 1,
                    calculation: `a₍${i+1}₎ = ${a1} + ${i}(${d}) = ${term}`,
                    value: term
                })),
                pattern: `Pattern: ${solution.pattern}`,
                finalAnswer: true
            });
        }

        return steps;
    }

    generateArithmeticSeriesSteps(problem, solution) {
        const { a1, d, n } = problem.parameters;
        const an = solution.lastTerm;
        const steps = [];

        // Step 1: Identify series type
        steps.push({
            stepNumber: 1,
            step: 'Identify series type',
            description: 'Recognize this as an arithmetic series',
            expression: `Sum of arithmetic sequence: a₁ = ${a1}, d = ${d}, n = ${n}`,
            reasoning: 'An arithmetic series is the sum of terms in an arithmetic sequence',
            goalStatement: 'Find the sum of the first n terms'
        });

        // Step 2: Find last term
        steps.push({
            stepNumber: 2,
            step: 'Find the last term',
            description: 'Calculate aₙ using the nth term formula',
            beforeExpression: `aₙ = a₁ + (n-1)d`,
            operation: 'Substitute values',
            afterExpression: `a₍${n}₎ = ${a1} + (${n}-1)(${d}) = ${an}`,
            reasoning: 'We need the last term to use the sum formula',
            workingDetails: {
                calculation: `${a1} + ${n-1} × ${d} = ${a1} + ${(n-1)*d} = ${an}`
            }
        });

        // Step 3: Apply sum formula
        steps.push({
            stepNumber: 3,
            step: 'Apply the sum formula',
            description: 'Use Sₙ = n/2(a₁ + aₙ)',
            beforeExpression: `Sₙ = n/2(a₁ + aₙ)`,
            operation: 'Substitute known values',
            afterExpression: `S₍${n}₎ = ${n}/2(${a1} + ${an})`,
            reasoning: 'This formula uses the average of first and last terms',
            algebraicRule: 'Arithmetic Series Sum Formula'
        });

        // Step 4: Calculate final sum
        steps.push({
            stepNumber: 4,
            step: 'Calculate the sum',
            description: 'Evaluate the expression',
            beforeExpression: `S₍${n}₎ = ${n}/2(${a1 + an})`,
            operation: 'Simplify',
            afterExpression: `S₍${n}₎ = ${n/2} × ${a1 + an} = ${solution.sum}`,
            reasoning: 'Multiply the number of terms by the average term value',
            workingDetails: {
                step1: `Average term: (${a1} + ${an})/2 = ${(a1+an)/2}`,
                step2: `Sum: ${n} × ${(a1+an)/2} = ${solution.sum}`
            },
            finalAnswer: true,
            numericalResult: solution.sum
        });

        return steps;
    }

    generateGeometricSequenceSteps(problem, solution) {
        const { a1, r, n } = problem.parameters;
        const steps = [];

        // Step 1: Identify sequence type
        steps.push({
            stepNumber: 1,
            step: 'Identify sequence type',
            description: 'Recognize this as a geometric sequence',
            expression: `First term a₁ = ${a1}, Common ratio r = ${r}`,
            reasoning: 'A geometric sequence has a constant ratio between consecutive terms',
            visualHint: 'Each term is obtained by multiplying the previous term by the same value',
            algebraicRule: 'Geometric Sequence Definition',
            goalStatement: 'We will find terms using the formula aₙ = a₁ · r^(n-1)'
        });

        // Step 2: State the formula
        steps.push({
            stepNumber: 2,
            step: 'Write the nth term formula',
            description: 'Use the general formula for geometric sequences',
            beforeExpression: 'General: aₙ = a₁ · r^(n-1)',
            afterExpression: `Specific: aₙ = ${a1} · ${r}^(n-1)`,
            reasoning: 'This formula generates any term by multiplying a₁ by r raised to a power',
            algebraicRule: 'Geometric Sequence Formula: aₙ = a₁ · r^(n-1)',
            visualHint: 'The exponent represents how many times we multiply by r'
        });

        // Step 3: Calculate terms
        if (problem.type === 'geometric_nth_term') {
            steps.push({
                stepNumber: 3,
                step: 'Calculate the specific term',
                description: `Find the ${n}th term`,
                beforeExpression: `a₍${n}₎ = ${a1} · ${r}^(${n}-1)`,
                operation: 'Substitute and simplify',
                afterExpression: `a₍${n}₎ = ${a1} · ${r}^${n-1} = ${solution.nthTerm}`,
                reasoning: 'Substitute n into the formula and evaluate the power',
                workingDetails: {
                    step1: `Calculate exponent: ${n} - 1 = ${n-1}`,
                    step2: `Calculate power: ${r}^${n-1} = ${Math.pow(r, n-1)}`,
                    step3: `Multiply: ${a1} × ${Math.pow(r, n-1)} = ${solution.nthTerm}`
                },
                finalAnswer: true
            });
        } else {
            steps.push({
                stepNumber: 3,
                step: 'Generate sequence terms',
                description: `Calculate the first ${n} terms`,
                reasoning: 'Apply the formula for n = 1, 2, 3, ...',
                terms: solution.terms.slice(0, Math.min(5, n)).map((term, i) => ({
                    n: i + 1,
                    calculation: `a₍${i+1}₎ = ${a1} · ${r}^${i} = ${term}`,
                    value: term
                })),
                pattern: `Pattern: ${solution.pattern}${solution.alternating ? ', alternating signs' : ''}`,
                finalAnswer: true
            });
        }

        return steps;
    }

    generateGeometricSeriesSteps(problem, solution) {
        const { a1, r, n } = problem.parameters;
        const steps = [];

        // Step 1: Identify series type
        steps.push({
            stepNumber: 1,
            step: 'Identify series type',
            description: problem.type.includes('infinite') ? 
                'Recognize this as an infinite geometric series' :
                'Recognize this as a finite geometric series',
            expression: `a₁ = ${a1}, r = ${r}${n ? `, n = ${n}` : ''}`,
            reasoning: 'A geometric series is the sum of terms in a geometric sequence',
            goalStatement: problem.type.includes('infinite') ? 
                'Determine if series converges and find sum if it does' :
                'Find the sum of the first n terms'
        });

        if (problem.type.includes('infinite')) {
            // Step 2: Check convergence
            steps.push({
                stepNumber: 2,
                step: 'Check convergence condition',
                description: 'Test if |r| < 1',
                expression: `|r| = |${r}| = ${Math.abs(r)}`,
                reasoning: 'Infinite geometric series converges only when |r| < 1',
                conclusion: Math.abs(r) < 1 ? 'Series converges' : 'Series diverges',
                criticalWarning: Math.abs(r) >= 1 ? 'Series does not have a finite sum' : null
            });

            if (Math.abs(r) < 1) {
                // Step 3: Apply infinite sum formula
                steps.push({
                    stepNumber: 3,
                    step: 'Apply infinite sum formula',
                    description: 'Use S∞ = a₁/(1-r)',
                    beforeExpression: `S∞ = a₁/(1-r)`,
                    operation: 'Substitute values',
                    afterExpression: `S∞ = ${a1}/(1-${r}) = ${solution.sum}`,
                    reasoning: 'This formula gives the limit of partial sums as n→∞',
                    workingDetails: {
                        denominator: `1 - ${r} = ${1-r}`,
                        division: `${a1}/${1-r} = ${solution.sum}`
                    },
                    finalAnswer: true
                });
            }
        } else {
            // Finite series
            // Step 2: Check if r = 1
            if (Math.abs(r - 1) < 1e-10) {
                steps.push({
                    stepNumber: 2,
                    step: 'Special case: r = 1',
                    description: 'When r = 1, use Sₙ = n·a₁',
                    expression: `S₍${n}₎ = ${n} · ${a1} = ${solution.sum}`,
                    reasoning: 'When r = 1, all terms equal a₁',
                    finalAnswer: true
                });
            } else {
                // Step 2: Apply finite sum formula
                steps.push({
                    stepNumber: 2,
                    step: 'Apply finite sum formula',
                    description: 'Use Sₙ = a₁(1-r^n)/(1-r)',
                    beforeExpression: `Sₙ = a₁(1-r^n)/(1-r)`,
                    operation: 'Substitute values',
                    afterExpression: `S₍${n}₎ = ${a1}(1-${r}^${n})/(1-${r})`,
                    reasoning: 'This formula sums a finite geometric series',
                    algebraicRule: 'Finite Geometric Series Formula'
                });

                // Step 3: Calculate
                steps.push({
                    stepNumber: 3,
                    step: 'Calculate the sum',
                    description: 'Evaluate the expression',
                    workingDetails: {
                        step1: `Calculate r^n: ${r}^${n} = ${Math.pow(r, n)}`,
                        step2: `Calculate numerator: ${a1}(1-${Math.pow(r, n)}) = ${a1 * (1 - Math.pow(r, n))}`,
                        step3: `Calculate denominator: 1-${r} = ${1-r}`,
                        step4: `Divide: ${a1 * (1 - Math.pow(r, n))}/${1-r} = ${solution.sum}`
                    },
                    afterExpression: `S₍${n}₎ = ${solution.sum}`,
                    finalAnswer: true,
                    numericalResult: solution.sum
                });
            }
        }

        return steps;
    }

    generateFibonacciSteps(problem, solution) {
        const { F0, F1, n } = problem.parameters;
        const steps = [];

        // Step 1: Identify sequence
        steps.push({
            stepNumber: 1,
            step: 'Identify Fibonacci sequence',
            description: 'Recognize the recursive pattern',
            expression: `F₀ = ${F0}, F₁ = ${F1}, Fₙ = Fₙ₋₁ + Fₙ₋₂`,
            reasoning: 'Each Fibonacci number is the sum of the two preceding numbers',
            visualHint: 'This creates a rapidly growing sequence',
            goalStatement: `Generate the first ${n+1} Fibonacci numbers`
        });

        // Step 2: Generate terms
        steps.push({
            stepNumber: 2,
            step: 'Generate terms recursively',
            description: 'Apply the recurrence relation',
            reasoning: 'Start with initial values and repeatedly apply Fₙ = Fₙ₋₁ + Fₙ₋₂',
            terms: solution.terms.slice(0, Math.min(10, n+1)).map((term, i) => {
                if (i === 0) return { n: i, value: term, calculation: 'F₀ (initial)' };
                if (i === 1) return { n: i, value: term, calculation: 'F₁ (initial)' };
                return {
                    n: i,
                    value: term,
                    calculation: `F₍${i}₎ = F₍${i-1}₎ + F₍${i-2}₎ = ${solution.terms[i-1]} + ${solution.terms[i-2]} = ${term}`
                };
            }),
            finalAnswer: true
        });

        // Step 3: Golden ratio connection
        if (n >= 5) {
            steps.push({
                stepNumber: 3,
                step: 'Connection to golden ratio',
                description: 'Observe ratio of consecutive terms',
                expression: `φ = (1+√5)/2 ≈ ${solution.goldenRatio.toFixed(6)}`,
                reasoning: 'As n→∞, ratio Fₙ/Fₙ₋₁ approaches the golden ratio φ',
                ratioApproximation: solution.convergesToPhi,
                visualHint: 'The Fibonacci sequence is intimately connected to the golden ratio'
            });
        }

        return steps;
    }

    generateBinomialSteps(problem, solution) {
        const { a, b, n } = problem.parameters;
        const steps = [];

        // Step 1: State the theorem
        steps.push({
            stepNumber: 1,
            step: 'State the Binomial Theorem',
            description: 'Recall the expansion formula',
            expression: `(a+b)^n = Σ(k=0 to n) C(n,k)·a^(n-k)·b^k`,
            reasoning: 'The binomial theorem expands powers of binomials',
            visualHint: 'There will be n+1 terms in the expansion',
            goalStatement: `Expand (${a}+${b})^${n}`
        });

        // Step 2: Calculate binomial coefficients
        steps.push({
            stepNumber: 2,
            step: 'Calculate binomial coefficients',
            description: 'Find C(n,k) for k = 0 to n',
            reasoning: 'Binomial coefficients come from Pascal\'s triangle or formula C(n,k) = n!/(k!(n-k)!)',
            coefficients: solution.expansion.map(term => ({
                k: term.bExponent,
                coefficient: term.coefficient,
                notation: `C(${n},${term.bExponent})`
            }))
        });

        // Step 3: Write each term
        steps.push({
            stepNumber: 3,
            step: 'Write expansion terms',
            description: 'Apply the formula to each term',
            reasoning: 'Each term has form C(n,k)·a^(n-k)·b^k',
            terms: solution.expansion.map((term, k) => ({
                k: k,
                coefficient: term.coefficient,
                aPower: term.aExponent,
                bPower: term.bExponent,
                expression: term.termString,
                value: term.value
            }))
        });

        // Step 4: Combine and verify
        steps.push({
            stepNumber: 4,
            step: 'Combine all terms',
            description: 'Write the complete expansion',
            beforeExpression: `(${a}+${b})^${n}`,
            afterExpression: solution.expandedForm,
            reasoning: 'Sum all terms to get the complete expansion',
            verification: {
                directCalculation: Math.pow(a + b, n),
                expansionSum: solution.totalSum,
                match: solution.verification
            },
            finalAnswer: true
        });

        return steps;
    }

    generateGenericSequenceSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Analyze sequence/series',
            description: 'Apply appropriate methods for this sequence type',
            expression: problem.type,
            reasoning: 'Use sequence/series properties and formulas',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS

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

        return enhanced;
    }

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Identify sequence type': 'Understanding the pattern is crucial - arithmetic means constant addition, geometric means constant multiplication.',
            'Write the nth term formula': 'The formula is a shortcut that lets us find any term without calculating all previous terms.',
            'Calculate the specific term': 'We substitute the position number into our formula to find the exact value at that position.',
            'Apply the sum formula': 'Instead of adding each term individually, we use the pattern structure to calculate the sum efficiently.',
            'Check convergence condition': 'Not all infinite series have a finite sum - we must verify the series approaches a limit.',
            'Generate terms recursively': 'Each new term builds upon previous terms according to the recurrence relation.'
        };

        return conceptualExplanations[step.step] || 'This step applies sequence/series properties to progress toward the solution.';
    }

    getProceduralExplanation(step) {
        if (step.workingDetails) {
            const details = Object.values(step.workingDetails).join('\n');
            return `Detailed procedure:\n${details}`;
        }
        if (step.operation) {
            return `1. Identify what needs to be done: ${step.operation}\n2. Apply the operation carefully\n3. Simplify the result\n4. Verify the answer makes sense`;
        }
        return 'Follow the standard procedure for this type of sequence/series problem.';
    }

    getVisualExplanation(step, problem) {
        const visualExplanations = {
            'arithmetic_sequence': 'Imagine climbing stairs with equal steps - each step up is the same height (the common difference).',
            'geometric_sequence': 'Think of a bacterial colony doubling - each generation multiplies the previous by the same ratio.',
            'arithmetic_series': 'Picture pairing terms from opposite ends - they all sum to the same value, making calculation easier.',
            'fibonacci_sequence': 'Visualize branching patterns in nature - each branch splits based on the previous two generations.',
            'binomial_theorem': 'Imagine Pascal\'s triangle - each coefficient is the sum of the two coefficients above it.'
        };

        return visualExplanations[problem.type] || 'Visualize the pattern and structure of the sequence or series.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Identify sequence type': 'Classification based on recurrence relation or term-to-term rule',
            'Write the nth term formula': 'Closed-form expression: aₙ = f(n) where f is an explicit function',
            'Apply the sum formula': 'Series sum formula derived from sequence properties using mathematical induction',
            'Check convergence condition': 'Convergence test: series Σaₙ converges if lim(n→∞) Sₙ exists and is finite',
            'Calculate binomial coefficients': 'Combinatorial interpretation: C(n,k) = n!/(k!(n-k)!) counts k-element subsets'
        };

        return algebraicRules[step.step] || 'Apply formal mathematical principles and properties.';
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

            // Add bridge to next step (except for last step)
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
        const mistakes = this.commonMistakes[problemType]?.[step.step] || [];

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
                hints: this.generateProgressiveHints(step),
                practiceVariation: this.generatePracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcess(step),
                decisionPoints: this.identifyDecisionPoints(step),
                alternativeApproaches: this.suggestAlternativeMethods(step, problem)
            }
        }));
    }

    // HELPER METHODS FOR ENHANCED EXPLANATIONS

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the solution process`,
            progression: 'We are making progress toward finding the sequence terms or series sum',
            relationship: 'Each step brings us closer to the complete solution'
        };
    }

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This step is necessary to: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help us by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.description.toLowerCase()} to continue our solution`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return `advancing from ${currentStep.step} requires ${nextStep.step}`;
    }

    explainStepBenefit(nextStep) {
        return `completing ${nextStep.step} to move closer to the final answer`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Calculate common difference': [
                'Always subtract in the correct order: later term minus earlier term',
                'Verify the difference is the same between multiple pairs of consecutive terms'
            ],
            'Calculate common ratio': [
                'Always divide in the correct order: later term divided by earlier term',
                'Check that the ratio is consistent throughout the sequence'
            ],
            'Apply the sum formula': [
                'Make sure you have the correct number of terms',
                'Don\'t forget to divide by 2 in arithmetic series',
                'Check for the special case r=1 in geometric series'
            ],
            'Check convergence condition': [
                'Test |r| < 1, not just r < 1',
                'Remember that |r| ≥ 1 means the series diverges'
            ]
        };

        return tips[step.step] || ['Double-check your calculations', 'Verify your answer makes sense'];
    }

    generateCheckPoints(step) {
        return [
            'Have I identified the correct sequence/series type?',
            'Are my calculations accurate?',
            'Does my answer make sense in context?',
            'Have I verified my work?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            geometric_series_infinite: step.step === 'Check convergence condition' ?
                ['Must verify |r| < 1 before calculating infinite sum'] : [],
            geometric_series_finite: step.step === 'Apply finite sum formula' ?
                ['Watch for special case when r = 1'] : [],
            binomial_theorem: step.step === 'Calculate binomial coefficients' ?
                ['Factorials grow very large - check for calculation errors'] : []
        };

        return warnings[problemType] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Identify sequence type': 'Have I correctly identified whether this is arithmetic, geometric, or another type?',
            'Write the nth term formula': 'Does my formula match the given terms?',
            'Calculate the specific term': 'Does my calculated term fit the pattern?',
            'Apply the sum formula': 'Have I used the correct formula for this series type?',
            'Check convergence condition': 'Have I verified the absolute value condition?'
        };

        return questions[step.step] || 'Does this step make sense and lead toward the solution?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Identify sequence type': 'Clear identification of sequence pattern',
            'Write the nth term formula': 'An explicit formula relating n to aₙ',
            'Calculate the specific term': 'A numerical value for the requested term',
            'Apply the sum formula': 'Setup for calculating the series sum',
            'Check convergence condition': 'Determination of whether series converges'
        };

        return expectations[step.step] || 'Progress toward the complete solution';
    }

    generateTroubleshootingTips(step) {
        return [
            'Review the sequence/series type definition',
            'Check that you\'re using the correct formula',
            'Verify your arithmetic carefully',
            'Test your answer with simple cases',
            'Compare with the pattern in given terms'
        ];
    }

    breakIntoSubSteps(step) {
        if (step.workingDetails) {
            return Object.values(step.workingDetails);
        }

        const defaultSubSteps = {
            'Identify sequence type': [
                'Examine the given terms',
                'Calculate differences or ratios',
                'Determine if pattern is additive or multiplicative',
                'Classify as arithmetic, geometric, or other'
            ],
            'Calculate the specific term': [
                'Write down the formula',
                'Substitute the value of n',
                'Perform the arithmetic operations',
                'Simplify to get the final answer'
            ]
        };

        return defaultSubSteps[step.step] || ['Analyze the problem', 'Apply the appropriate method', 'Calculate the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same type of problem with different numbers',
            practiceHint: 'Start with simpler cases before tackling complex problems',
            extension: 'Once comfortable, try related sequence/series types'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to find?',
            strategy: 'What formula or method applies here?',
            execute: 'How do I carry out the calculations?',
            verify: 'Does my answer make sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Choosing the correct formula to use',
            'Deciding which values to substitute',
            'Determining the most efficient calculation method'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'arithmetic_series': [
                'Sum formula with first and last term',
                'Sum formula with first term and common difference',
                'Direct addition of all terms (for verification)'
            ],
            'geometric_series_finite': [
                'Formula with (1-r^n)/(1-r)',
                'Formula with (r^n-1)/(r-1)',
                'Direct addition of terms'
            ]
        };

        return alternatives[problem.type] || ['Standard method is most efficient for this problem'];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Identify sequence type': [
                'What changes from one term to the next?',
                'Is the change by addition or multiplication?',
                'Is the pattern consistent throughout?'
            ],
            'Write the nth term formula': [
                'What is the first term?',
                'What is the common difference or ratio?',
                'How does the position n relate to the term value?'
            ],
            'Calculate the specific term': [
                'What value of n am I looking for?',
                'Have I substituted correctly?',
                'Does my answer fit the pattern?'
            ],
            'Apply the sum formula': [
                'Do I have all the values I need?',
                'Which sum formula is most appropriate?',
                'Have I checked for special cases?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help solve the problem?'];
    }

    generateProgressiveHints(step) {
        return {
            level1: 'Think about what type of sequence or series this is.',
            level2: 'Remember the key formula for this sequence/series type.',
            level3: 'Identify the values you need to substitute into the formula.',
            level4: step.expression ? `Focus on: ${step.expression}` : 'Apply the formula step by step.'
        };
    }

    identifyPrerequisites(step, problemType) {
        const prerequisites = {
            'Identify sequence type': ['Pattern recognition', 'Basic arithmetic'],
            'Write the nth term formula': ['Understanding of variables', 'Substitution'],
            'Calculate the specific term': ['Exponent rules', 'Order of operations'],
            'Apply the sum formula': ['Algebraic manipulation', 'Fraction operations'],
            'Calculate binomial coefficients': ['Factorial notation', 'Combinatorics']
        };

        return prerequisites[step.step] || ['Basic algebra', 'Arithmetic operations'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Identify sequence type': ['sequence', 'term', 'pattern', 'common difference', 'common ratio'],
            'Write the nth term formula': ['formula', 'nth term', 'explicit formula', 'subscript'],
            'Apply the sum formula': ['series', 'sum', 'partial sum', 'sigma notation'],
            'Check convergence condition': ['convergence', 'divergence', 'limit', 'infinite series']
        };

        return vocabulary[step.step] || ['sequence', 'term', 'formula'];
    }

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'nth term': 'any term in the sequence',
                    'common difference': 'the same number we add each time',
                    'common ratio': 'the same number we multiply by each time',
                    'recurrence relation': 'rule for finding the next term',
                    'convergence': 'approaching a specific value',
                    'explicit formula': 'direct formula'
                }
            },
            intermediate: {
                replacements: {
                    'nth term': 'nth term',
                    'common difference': 'common difference',
                    'common ratio': 'common ratio',
                    'recurrence relation': 'recurrence relation',
                    'convergence': 'convergence'
                }
            },
            detailed: {
                replacements: {
                    'nth term': 'nth term (general term of the sequence)',
                    'common difference': 'common difference (constant additive increment)',
                    'common ratio': 'common ratio (constant multiplicative factor)',
                    'recurrence relation': 'recurrence relation (recursive definition)',
                    'convergence': 'convergence (limiting behavior as n→∞)'
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

    generateSequenceGraphData() {
        if (!this.currentSolution) return;

        const { type } = this.currentProblem;
        const solution = this.currentSolution;

        switch(type) {
            case 'arithmetic_sequence':
            case 'geometric_sequence':
                if (solution.terms) {
                    this.graphData = this.generateSequenceGraph(solution.terms);
                }
                break;

            case 'arithmetic_series':
            case 'geometric_series_finite':
                if (solution.sum !== undefined) {
                    this.graphData = this.generatePartialSumsGraph(solution);
                }
                break;

            case 'fibonacci_sequence':
                if (solution.terms && solution.ratioApproximations) {
                    this.graphData = this.generateFibonacciGraph(solution);
                }
                break;
        }
    }

    generateSequenceGraph(terms) {
        const points = terms.map((term, index) => ({
            n: index + 1,
            value: term
        }));

        return {
            type: 'sequence_plot',
            points: points,
            xLabel: 'n (term number)',
            yLabel: 'aₙ (term value)'
        };
    }

    generatePartialSumsGraph(solution) {
        return {
            type: 'partial_sums',
            finalSum: solution.sum,
            note: 'Graph would show accumulation of terms'
        };
    }

    generateFibonacciGraph(solution) {
        const ratioPoints = solution.ratioApproximations.map((ratio, index) => ({
            n: index + 2,
            ratio: ratio,
            goldenRatio: solution.goldenRatio
        }));

        return {
            type: 'fibonacci_ratios',
            points: ratioPoints,
            goldenRatio: solution.goldenRatio,
            convergence: 'Ratios approach φ as n increases'
        };
    }

    // WORKBOOK GENERATION

    generateSequenceWorkbook() {
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
            title: 'Sequence and Series Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const data = [
            ['Problem Type', this.sequenceTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.sequenceTypes[this.currentProblem.type]?.category || 'general']
        ];

        if (this.currentProblem.sequence && this.currentProblem.sequence.length > 0) {
            data.push(['Given Sequence', this.currentProblem.sequence.slice(0, 10).join(', ') + '...']);
        }

        if (this.currentProblem.parameters) {
            Object.entries(this.currentProblem.parameters).forEach(([key, value]) => {
                if (key !== 'sequence' && typeof value !== 'object') {
                    data.push([key, value]);
                }
            });
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: data
        };
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            // Main step
            stepsData.push(['Step ' + step.stepNumber, step.description]);

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

            if (step.algebraicRule) {
                stepsData.push(['Rule Used', step.algebraicRule]);
            }

            if (step.workingDetails) {
                stepsData.push(['Working Details', '']);
                Object.entries(step.workingDetails).forEach(([key, value]) => {
                    stepsData.push(['  ' + key, value]);
                });
            }

            if (step.terms && Array.isArray(step.terms)) {
                stepsData.push(['Terms Generated', '']);
                step.terms.slice(0, 5).forEach(term => {
                    stepsData.push(['  Term ' + term.n, term.calculation || term.value]);
                });
            }

            // Enhanced explanations
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
            }

            if (step.errorPrevention && this.includeErrorPrevention) {
                if (step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                if (step.errorPrevention.preventionTips.length > 0) {
                    stepsData.push(['Prevention Tips', step.errorPrevention.preventionTips.join('; ')]);
                }
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.join(' ')]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: 'Enhanced Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }

    createLessonSection() {
        const { type } = this.currentProblem;
        const lesson = this.getLessonContent(type);

        if (!lesson) return null;

        return {
            title: 'Key Concepts and Theory',
            type: 'lesson',
            data: [
                ['Topic', lesson.title],
                ['Key Concepts', lesson.concepts.join('; ')],
                ['Theory', lesson.theory],
                ['Applications', lesson.applications?.join('; ') || 'Various mathematical and real-world applications']
            ]
        };
    }

    getLessonContent(type) {
        // Map problem types to lesson content
        const lessonMapping = {
            'arithmetic_sequence': 'arithmetic_sequences',
            'arithmetic_nth_term': 'arithmetic_sequences',
            'arithmetic_series': 'arithmetic_series',
            'geometric_sequence': 'geometric_sequences',
            'geometric_nth_term': 'geometric_sequences',
            'geometric_series_finite': 'geometric_series',
            'geometric_series_infinite': 'geometric_series',
            'fibonacci_sequence': 'fibonacci_sequences',
            'binomial_theorem': 'binomial_theorem',
            'binomial_coefficient': 'binomial_theorem',
            'telescoping_series': 'telescoping_series',
            'harmonic_series': 'harmonic_series',
            'p_series': 'harmonic_series',
            'power_series': 'power_series',
            'sequence_limit': 'sequence_limits',
            'special_sequences': 'special_sequences'
        };

        const lessonKey = lessonMapping[type];
        return lessonKey ? this.lessons[lessonKey] : null;
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        // Add solution type
        if (this.currentSolution.sequenceType || this.currentSolution.seriesType) {
            solutionData.push(['Type', this.currentSolution.sequenceType || this.currentSolution.seriesType]);
        }

        // Add key parameters
        if (this.currentSolution.firstTerm !== undefined) {
            solutionData.push(['First Term', this.currentSolution.firstTerm]);
        }
        if (this.currentSolution.commonDifference !== undefined) {
            solutionData.push(['Common Difference', this.currentSolution.commonDifference]);
        }
        if (this.currentSolution.commonRatio !== undefined) {
            solutionData.push(['Common Ratio', this.currentSolution.commonRatio]);
        }

        // Add formula
        if (this.currentSolution.nthTermFormula) {
            solutionData.push(['nth Term Formula', this.currentSolution.nthTermFormula]);
        }
        if (this.currentSolution.formula) {
            solutionData.push(['Formula', this.currentSolution.formula]);
        }

        // Add final answer
        if (this.currentSolution.nthTerm !== undefined) {
            solutionData.push(['Answer', this.currentSolution.nthTerm]);
        }
        if (this.currentSolution.sum !== undefined) {
            solutionData.push(['Sum', this.currentSolution.sum]);
        }

        // Add terms if available
        if (this.currentSolution.terms && this.currentSolution.terms.length > 0) {
            solutionData.push(['', '']);
            solutionData.push(['First Terms', this.currentSolution.terms.slice(0, 10).join(', ')]);
        }

        // Add convergence info
        if (this.currentSolution.convergence) {
            solutionData.push(['Convergence', this.currentSolution.convergence]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        const analysisData = [
            ['Problem Type', this.currentProblem.type],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel]
        ];

        if (this.currentSolution.pattern) {
            analysisData.push(['Pattern', this.currentSolution.pattern]);
        }

        if (this.currentSolution.numberOfTerms) {
            analysisData.push(['Number of Terms', this.currentSolution.numberOfTerms]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [];
        const { type } = this.currentProblem;

        verificationData.push(['Verification Method', 'Result']);
        verificationData.push(['', '']); // Spacing

        let verification;
        switch (type) {
            case 'arithmetic_sequence':
            case 'arithmetic_nth_term':
                verification = this.verifyArithmeticSequence();
                verificationData.push(...this.formatArithmeticVerification(verification));
                break;

            case 'geometric_sequence':
            case 'geometric_nth_term':
                verification = this.verifyGeometricSequence();
                verificationData.push(...this.formatGeometricVerification(verification));
                break;

            case 'arithmetic_series':
                verification = this.verifyArithmeticSeries();
                verificationData.push(...this.formatSeriesVerification(verification));
                break;

            case 'geometric_series_finite':
                verification = this.verifyGeometricSeries();
                verificationData.push(...this.formatSeriesVerification(verification));
                break;

            case 'binomial_theorem':
                verification = this.verifyBinomialExpansion();
                verificationData.push(...this.formatSeriesVerification(verification));
                break;

            default:
                verificationData.push(['General Check', 'Solution follows standard sequence/series methods']);
        }

        // Add verification confidence level
        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']); // Spacing
            verificationData.push(['Confidence Level', this.calculateVerificationConfidence()]);
            verificationData.push(['Verification Notes', this.getVerificationNotes()]);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData,
            confidence: this.calculateVerificationConfidence()
        };
    }

    calculateVerificationConfidence() {
        if (!this.currentSolution || !this.currentProblem) return 'Unknown';

        const { type } = this.currentProblem;

        switch (type) {
            case 'arithmetic_sequence':
            case 'geometric_sequence':
                const verification = type === 'arithmetic_sequence' ? 
                    this.verifyArithmeticSequence() : this.verifyGeometricSequence();
                return verification.allMatch ? 'High' : 'Medium';

            case 'arithmetic_series':
                const seriesVerification = this.verifyArithmeticSeries();
                return seriesVerification.allMatch ? 'High' : 'Medium';

            case 'geometric_series_finite':
                const geoVerification = this.verifyGeometricSeries();
                return geoVerification.match ? 'High' : 'Medium';

            case 'geometric_series_infinite':
                return this.currentSolution.convergence === 'Convergent' ? 'High' : 'Confirmed';

            case 'binomial_theorem':
                const binomialVerification = this.verifyBinomialExpansion();
                return binomialVerification.match ? 'High' : 'Medium';

            default:
                return 'Medium';
        }
    }

    getVerificationNotes() {
        const { type } = this.currentProblem;
        const notes = [];

        switch (type) {
            case 'arithmetic_sequence':
                notes.push('Verified constant difference between consecutive terms');
                notes.push('Checked formula accuracy with multiple terms');
                break;

            case 'geometric_sequence':
                notes.push('Verified constant ratio between consecutive terms');
                notes.push('Checked formula accuracy with multiple terms');
                break;

            case 'arithmetic_series':
                notes.push('Verified sum using multiple formula variants');
                notes.push('Direct summation confirms formula result');
                break;

            case 'geometric_series_finite':
                notes.push('Verified sum using direct addition');
                notes.push('Formula result matches direct calculation');
                break;

            case 'geometric_series_infinite':
                notes.push('Convergence condition |r| < 1 verified');
                notes.push('Sum formula applied for convergent series');
                break;

            case 'binomial_theorem':
                notes.push('Expansion verified by direct calculation');
                notes.push('Coefficient sum matches expected value');
                break;

            default:
                notes.push('Standard verification methods applied');
        }

        return notes.join('; ');
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const notes = this.generatePedagogicalNotes(type);

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['Key Concepts', notes.keyConcepts.join('; ')],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['Common Difficulties', notes.commonDifficulties.join('; ')],
                ['Extension Ideas', notes.extensions.join('; ')],
                ['Assessment Tips', notes.assessment.join('; ')]
            ]
        };
    }

    generatePedagogicalNotes(problemType) {
        const pedagogicalDatabase = {
            arithmetic_sequence: {
                objectives: [
                    'Identify arithmetic sequences from patterns',
                    'Apply the nth term formula aₙ = a₁ + (n-1)d',
                    'Calculate any term in an arithmetic sequence'
                ],
                keyConcepts: [
                    'Common difference (constant additive change)',
                    'Linear growth pattern',
                    'Explicit formula for nth term'
                ],
                prerequisites: [
                    'Integer operations',
                    'Pattern recognition',
                    'Understanding of variables and subscripts'
                ],
                commonDifficulties: [
                    'Confusing n with (n-1) in the formula',
                    'Sign errors with negative common difference',
                    'Distinguishing arithmetic from geometric sequences'
                ],
                extensions: [
                    'Arithmetic series and summation',
                    'Finding missing terms',
                    'Applications in real-world linear growth'
                ],
                assessment: [
                    'Test with both positive and negative differences',
                    'Include problems requiring pattern recognition',
                    'Verify understanding of formula components'
                ]
            },
            geometric_sequence: {
                objectives: [
                    'Identify geometric sequences from patterns',
                    'Apply the nth term formula aₙ = a₁ · r^(n-1)',
                    'Calculate any term in a geometric sequence'
                ],
                keyConcepts: [
                    'Common ratio (constant multiplicative change)',
                    'Exponential growth or decay pattern',
                    'Power functions in sequence formulas'
                ],
                prerequisites: [
                    'Exponent rules',
                    'Multiplication and division',
                    'Understanding of exponential growth'
                ],
                commonDifficulties: [
                    'Exponent errors (using n instead of n-1)',
                    'Dealing with fractional or negative ratios',
                    'Distinguishing geometric from arithmetic sequences'
                ],
                extensions: [
                    'Geometric series (finite and infinite)',
                    'Compound interest applications',
                    'Exponential modeling'
                ],
                assessment: [
                    'Include sequences with r > 1, 0 < r < 1, and r < 0',
                    'Test understanding of exponential behavior',
                    'Check ability to find common ratio from terms'
                ]
            },
            arithmetic_series: {
                objectives: [
                    'Calculate sums of arithmetic sequences',
                    'Apply sum formulas Sₙ = n/2(a₁ + aₙ) and Sₙ = n/2(2a₁ + (n-1)d)',
                    'Understand the derivation of sum formulas'
                ],
                keyConcepts: [
                    'Series as sum of sequence terms',
                    'Average term method',
                    'Gauss summation technique'
                ],
                prerequisites: [
                    'Arithmetic sequence understanding',
                    'Fraction operations',
                    'Algebraic manipulation'
                ],
                commonDifficulties: [
                    'Forgetting to divide by 2',
                    'Choosing the wrong formula variant',
                    'Errors in calculating the last term'
                ],
                extensions: [
                    'Sigma notation',
                    'Applications to area approximation',
                    'Connection to integration'
                ],
                assessment: [
                    'Test both formula variants',
                    'Include problems requiring last term calculation',
                    'Verify conceptual understanding of averaging'
                ]
            },
            geometric_series: {
                objectives: [
                    'Calculate finite geometric series sums',
                    'Test convergence of infinite geometric series',
                    'Apply formulas Sₙ = a₁(1-r^n)/(1-r) and S∞ = a₁/(1-r)'
                ],
                keyConcepts: [
                    'Finite vs infinite series',
                    'Convergence condition |r| < 1',
                    'Limit behavior as n→∞'
                ],
                prerequisites: [
                    'Geometric sequence understanding',
                    'Exponent rules',
                    'Concept of limits'
                ],
                commonDifficulties: [
                    'Forgetting convergence test for infinite series',
                    'Sign errors in formula numerator',
                    'Special case when r = 1'
                ],
                extensions: [
                    'Repeating decimals as geometric series',
                    'Present value calculations',
                    'Fractal patterns'
                ],
                assessment: [
                    'Test understanding of convergence',
                    'Include both convergent and divergent cases',
                    'Check formula application accuracy'
                ]
            },
            fibonacci_sequence: {
                objectives: [
                    'Generate Fibonacci sequences recursively',
                    'Understand recurrence relations',
                    'Recognize Fibonacci patterns in nature and mathematics'
                ],
                keyConcepts: [
                    'Recursive definition',
                    'Golden ratio connection',
                    'Limit behavior of ratios'
                ],
                prerequisites: [
                    'Sequence notation',
                    'Recursive thinking',
                    'Pattern recognition'
                ],
                commonDifficulties: [
                    'Initial condition confusion',
                    'Off-by-one indexing errors',
                    'Understanding recursive vs explicit formulas'
                ],
                extensions: [
                    'Binet\'s formula',
                    'Lucas numbers and variants',
                    'Applications in computer science'
                ],
                assessment: [
                    'Test with different initial conditions',
                    'Check understanding of recursive process',
                    'Explore ratio convergence'
                ]
            },
            binomial_theorem: {
                objectives: [
                    'Expand binomial expressions using the binomial theorem',
                    'Calculate binomial coefficients',
                    'Apply Pascal\'s triangle'
                ],
                keyConcepts: [
                    'Binomial expansion formula',
                    'Pascal\'s triangle structure',
                    'Combinatorial interpretation of coefficients'
                ],
                prerequisites: [
                    'Exponent rules',
                    'Factorial notation',
                    'Basic combinatorics'
                ],
                commonDifficulties: [
                    'Exponent calculation errors',
                    'Wrong number of terms in expansion',
                    'Sign errors in (a-b)^n'
                ],
                extensions: [
                    'Binomial probability distribution',
                    'Multinomial theorem',
                    'Generating functions'
                ],
                assessment: [
                    'Test with various values of n',
                    'Include negative b terms',
                    'Verify coefficient calculations'
                ]
            }
        };

        // Map problem types to pedagogical content
        const typeMapping = {
            'arithmetic_sequence': 'arithmetic_sequence',
            'arithmetic_nth_term': 'arithmetic_sequence',
            'arithmetic_series': 'arithmetic_series',
            'geometric_sequence': 'geometric_sequence',
            'geometric_nth_term': 'geometric_sequence',
            'geometric_series_finite': 'geometric_series',
            'geometric_series_infinite': 'geometric_series',
            'fibonacci_sequence': 'fibonacci_sequence',
            'binomial_theorem': 'binomial_theorem',
            'binomial_coefficient': 'binomial_theorem'
        };

        const mappedType = typeMapping[problemType] || 'arithmetic_sequence';
        return pedagogicalDatabase[mappedType] || {
            objectives: ['Understand and solve the given sequence/series problem'],
            keyConcepts: ['Pattern recognition', 'Formula application'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Computational errors', 'Formula selection'],
            extensions: ['More complex variations'],
            assessment: ['Verify understanding of core concepts']
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
                ['Primary Method Used', alternatives.primaryMethod],
                ['', ''], // Spacing
                ['Alternative Methods', ''],
                ...alternatives.methods.map((method, index) => [
                    `Method ${index + 1}`, `${method.name}: ${method.description}`
                ]),
                ['', ''], // Spacing
                ['Method Comparison', alternatives.comparison]
            ]
        };
    }

    generateAlternativeMethods(problemType) {
        const alternativeDatabase = {
            arithmetic_sequence: {
                primaryMethod: 'Explicit formula: aₙ = a₁ + (n-1)d',
                methods: [
                    {
                        name: 'Recursive Method',
                        description: 'Calculate each term from previous: aₙ = aₙ₋₁ + d'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Plot points and identify linear pattern'
                    },
                    {
                        name: 'Pattern Extension',
                        description: 'Continue the pattern by repeatedly adding d'
                    }
                ],
                comparison: 'Explicit formula is most efficient for finding distant terms; recursive method good for generating sequence; graphical method provides visual insight'
            },
            geometric_sequence: {
                primaryMethod: 'Explicit formula: aₙ = a₁ · r^(n-1)',
                methods: [
                    {
                        name: 'Recursive Method',
                        description: 'Calculate each term from previous: aₙ = aₙ₋₁ · r'
                    },
                    {
                        name: 'Logarithmic Method',
                        description: 'Use logarithms to solve for unknown terms'
                    },
                    {
                        name: 'Exponential Function',
                        description: 'Model as exponential function f(n) = a₁ · r^(n-1)'
                    }
                ],
                comparison: 'Explicit formula is most direct; recursive method intuitive for sequential terms; logarithmic method useful for solving backward'
            },
            arithmetic_series: {
                primaryMethod: 'Sum formula: Sₙ = n/2(a₁ + aₙ)',
                methods: [
                    {
                        name: 'Alternative Sum Formula',
                        description: 'Use Sₙ = n/2(2a₁ + (n-1)d)'
                    },
                    {
                        name: 'Direct Addition',
                        description: 'Add all terms individually (for verification)'
                    },
                    {
                        name: 'Pairing Method',
                        description: 'Pair terms from ends (Gauss method)'
                    }
                ],
                comparison: 'Both formulas are equally efficient; direct addition impractical for large n; pairing method provides intuitive understanding'
            },
            geometric_series: {
                primaryMethod: 'Sum formula: Sₙ = a₁(1-r^n)/(1-r)',
                methods: [
                    {
                        name: 'Alternative Formula',
                        description: 'Use Sₙ = a₁(r^n-1)/(r-1) when convenient'
                    },
                    {
                        name: 'Multiply and Subtract',
                        description: 'Derive formula by multiplying series by r'
                    },
                    {
                        name: 'Direct Addition',
                        description: 'Add terms individually (for small n)'
                    }
                ],
                comparison: 'Formula choice depends on sign of (1-r); derivation method builds understanding; direct addition only practical for small n'
            },
            fibonacci_sequence: {
                primaryMethod: 'Recursive generation: Fₙ = Fₙ₋₁ + Fₙ₋₂',
                methods: [
                    {
                        name: 'Binet\'s Formula',
                        description: 'Use explicit formula: Fₙ = (φⁿ - ψⁿ)/√5'
                    },
                    {
                        name: 'Matrix Method',
                        description: 'Use matrix exponentiation: [[1,1],[1,0]]^n'
                    },
                    {
                        name: 'Dynamic Programming',
                        description: 'Store previous values to avoid recomputation'
                    }
                ],
                comparison: 'Recursive method is intuitive; Binet\'s formula efficient for large n; matrix method generalizes well; dynamic programming optimal for computation'
            },
            binomial_theorem: {
                primaryMethod: 'Binomial theorem formula with coefficients',
                methods: [
                    {
                        name: 'Pascal\'s Triangle',
                        description: 'Use triangle pattern to find coefficients'
                    },
                    {
                        name: 'Repeated Multiplication',
                        description: 'Expand by multiplying (a+b) repeatedly'
                    },
                    {
                        name: 'Combinatorial Method',
                        description: 'Count ways to select terms using combinations'
                    }
                ],
                comparison: 'Formula is most efficient; Pascal\'s triangle good for small n; repeated multiplication builds understanding; combinatorial method explains why coefficients work'
            }
        };

        // Map problem types to alternatives
        const typeMapping = {
            'arithmetic_sequence': 'arithmetic_sequence',
            'arithmetic_nth_term': 'arithmetic_sequence',
            'arithmetic_series': 'arithmetic_series',
            'geometric_sequence': 'geometric_sequence',
            'geometric_nth_term': 'geometric_sequence',
            'geometric_series_finite': 'geometric_series',
            'geometric_series_infinite': 'geometric_series',
            'fibonacci_sequence': 'fibonacci_sequence',
            'binomial_theorem': 'binomial_theorem',
            'binomial_coefficient': 'binomial_theorem'
        };

        const mappedType = typeMapping[problemType] || 'arithmetic_sequence';
        return alternativeDatabase[mappedType] || {
            primaryMethod: 'Standard formula application',
            methods: [
                {
                    name: 'Alternative Approach',
                    description: 'Various methods depending on problem specifics'
                }
            ],
            comparison: 'Method choice depends on problem context and personal preference'
        };
    }

    // UTILITY METHODS

    gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}

// Export the class
export default EnhancedSequenceSeriesWorkbook;
