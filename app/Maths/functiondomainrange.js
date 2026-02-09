// Enhanced Domain and Range Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedDomainRangeMathematicalWorkbook {
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
        this.initializeDomainRangeSolvers();
        this.initializeDomainRangeLessons();
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
        this.initializeNotationDatabase();
        this.initializeFunctionTypeDatabase();
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
                domainBg: '#e8f5e9',
                rangeBg: '#fff3e0'
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
                domainBg: '#c8e6c9',
                rangeBg: '#ffe0b2'
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
            // Set notation
            'emptyset': '∅', 'reals': 'ℝ', 'integers': 'ℤ', 'naturals': 'ℕ',
            // Interval notation
            'openInterval': '(a, b)', 'closedInterval': '[a, b]',
            'halfOpenLeft': '(a, b]', 'halfOpenRight': '[a, b)'
        };
    }

    initializeNotationDatabase() {
        this.notationSystems = {
            interval: {
                name: 'Interval Notation',
                description: 'Uses parentheses and brackets to show ranges',
                symbols: {
                    '(': 'open - value not included',
                    ')': 'open - value not included',
                    '[': 'closed - value included',
                    ']': 'closed - value included',
                    '∞': 'infinity (always with parenthesis)',
                    '-∞': 'negative infinity (always with parenthesis)',
                    '∪': 'union - combines intervals'
                },
                examples: {
                    '(2, 5)': 'All numbers between 2 and 5, not including 2 or 5',
                    '[2, 5]': 'All numbers from 2 to 5, including 2 and 5',
                    '[2, 5)': 'All numbers from 2 to 5, including 2 but not 5',
                    '(-∞, 3)': 'All numbers less than 3',
                    '[5, ∞)': 'All numbers greater than or equal to 5',
                    '(-∞, 2) ∪ (3, ∞)': 'All numbers except those between 2 and 3 inclusive'
                },
                whenToUse: 'Preferred for continuous ranges, especially in calculus'
            },
            setBuilder: {
                name: 'Set-Builder Notation',
                description: 'Uses set notation with conditions',
                format: '{x | condition}',
                readAs: 'the set of all x such that condition',
                examples: {
                    '{x | x > 5}': 'All x greater than 5',
                    '{x | x ∈ ℝ, x ≠ 0}': 'All real numbers except 0',
                    '{x | -3 ≤ x < 7}': 'All x from -3 to 7, including -3 but not 7',
                    '{x | x ∈ ℝ}': 'All real numbers'
                },
                whenToUse: 'Good for complex conditions or discrete sets'
            },
            inequality: {
                name: 'Inequality Notation',
                description: 'Uses inequality symbols',
                symbols: {
                    '<': 'less than',
                    '>': 'greater than',
                    '≤': 'less than or equal to',
                    '≥': 'greater than or equal to',
                    '≠': 'not equal to'
                },
                examples: {
                    'x > 5': 'x is greater than 5',
                    '-3 ≤ x < 7': 'x is between -3 and 7, including -3',
                    'x ≥ 0': 'x is non-negative'
                },
                whenToUse: 'Simple conditions, solving inequalities'
            },
            verbal: {
                name: 'Verbal Description',
                description: 'Description in words',
                examples: {
                    'all real numbers': 'Domain: ℝ',
                    'all real numbers except 3': 'Domain: ℝ \\ {3}',
                    'all non-negative real numbers': 'Range: [0, ∞)',
                    'all positive integers': 'Domain: {1, 2, 3, ...}'
                },
                whenToUse: 'Initial explanations, communicating to non-mathematicians'
            }
        };

        this.notationConversions = {
            intervalToSetBuilder: {
                '(a, b)': '{x | a < x < b}',
                '[a, b]': '{x | a ≤ x ≤ b}',
                '[a, b)': '{x | a ≤ x < b}',
                '(a, b]': '{x | a < x ≤ b}',
                '(-∞, b)': '{x | x < b}',
                '(a, ∞)': '{x | x > a}',
                '(-∞, ∞)': '{x | x ∈ ℝ}'
            },
            intervalToInequality: {
                '(a, b)': 'a < x < b',
                '[a, b]': 'a ≤ x ≤ b',
                '[a, b)': 'a ≤ x < b',
                '(a, b]': 'a < x ≤ b',
                '(-∞, b)': 'x < b',
                '(a, ∞)': 'x > a'
            }
        };
    }

    initializeFunctionTypeDatabase() {
        this.functionTypes = {
            polynomial: {
                name: 'Polynomial Functions',
                generalForm: 'f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀',
                domainRule: 'Always all real numbers',
                domain: '(-∞, ∞)',
                rangeRule: 'Depends on degree and leading coefficient',
                examples: [
                    { func: 'f(x) = x²', domain: '(-∞, ∞)', range: '[0, ∞)', note: 'Parabola opening up' },
                    { func: 'f(x) = -x² + 4', domain: '(-∞, ∞)', range: '(-∞, 4]', note: 'Parabola opening down' },
                    { func: 'f(x) = x³', domain: '(-∞, ∞)', range: '(-∞, ∞)', note: 'Odd degree' }
                ],
                characteristics: [
                    'Continuous everywhere',
                    'No breaks or holes',
                    'Domain always all real numbers',
                    'Range depends on end behavior'
                ]
            },
            rational: {
                name: 'Rational Functions',
                generalForm: 'f(x) = P(x)/Q(x) where P and Q are polynomials',
                domainRule: 'All real numbers except where denominator equals zero',
                rangeRule: 'Find horizontal asymptote and excluded values',
                examples: [
                    { func: 'f(x) = 1/x', domain: '(-∞, 0) ∪ (0, ∞)', range: '(-∞, 0) ∪ (0, ∞)', note: 'Vertical asymptote at x=0' },
                    { func: 'f(x) = 1/(x-2)', domain: '(-∞, 2) ∪ (2, ∞)', range: '(-∞, 0) ∪ (0, ∞)', note: 'Shifted reciprocal' },
                    { func: 'f(x) = (x+1)/(x-3)', domain: '(-∞, 3) ∪ (3, ∞)', range: '(-∞, 1) ∪ (1, ∞)', note: 'Horizontal asymptote y=1' }
                ],
                characteristics: [
                    'Vertical asymptotes where denominator = 0',
                    'Horizontal asymptotes affect range',
                    'May have holes if factors cancel',
                    'Domain excludes zeros of denominator'
                ],
                findingDomain: [
                    'Set denominator equal to zero',
                    'Solve for x',
                    'Exclude those x-values from domain',
                    'Express in interval notation'
                ]
            },
            radical: {
                name: 'Radical Functions',
                generalForm: 'f(x) = ⁿ√g(x)',
                domainRule: 'Even roots: radicand ≥ 0; Odd roots: all real numbers',
                rangeRule: 'Principal square root: [0, ∞); can shift with transformations',
                examples: [
                    { func: 'f(x) = √x', domain: '[0, ∞)', range: '[0, ∞)', note: 'Basic square root' },
                    { func: 'f(x) = √(x-3)', domain: '[3, ∞)', range: '[0, ∞)', note: 'Horizontal shift' },
                    { func: 'f(x) = -√x + 2', domain: '[0, ∞)', range: '(-∞, 2]', note: 'Reflection and shift' },
                    { func: 'f(x) = ³√x', domain: '(-∞, ∞)', range: '(-∞, ∞)', note: 'Cube root (odd)' }
                ],
                characteristics: [
                    'Square root: domain where radicand ≥ 0',
                    'Cube root: domain all real numbers',
                    'Even roots: range [0, ∞) before transformations',
                    'Odd roots: range all real numbers'
                ],
                findingDomain: [
                    'For even roots: set radicand ≥ 0',
                    'Solve inequality',
                    'Express in interval notation',
                    'For odd roots: domain is all reals'
                ]
            },
            absolute: {
                name: 'Absolute Value Functions',
                generalForm: 'f(x) = |g(x)|',
                domainRule: 'Same as domain of g(x)',
                rangeRule: 'Always [0, ∞) unless transformed',
                examples: [
                    { func: 'f(x) = |x|', domain: '(-∞, ∞)', range: '[0, ∞)', note: 'Basic V-shape' },
                    { func: 'f(x) = |x-2|', domain: '(-∞, ∞)', range: '[0, ∞)', note: 'Shifted right' },
                    { func: 'f(x) = -|x| + 3', domain: '(-∞, ∞)', range: '(-∞, 3]', note: 'Reflected and shifted' }
                ],
                characteristics: [
                    'Domain usually all real numbers',
                    'Basic range: [0, ∞)',
                    'V-shaped graph',
                    'Transformations shift range'
                ]
            },
            exponential: {
                name: 'Exponential Functions',
                generalForm: 'f(x) = abˣ + c',
                domainRule: 'All real numbers',
                rangeRule: 'If a > 0: (c, ∞); if a < 0: (-∞, c)',
                examples: [
                    { func: 'f(x) = 2ˣ', domain: '(-∞, ∞)', range: '(0, ∞)', note: 'Growth, base > 1' },
                    { func: 'f(x) = (1/2)ˣ', domain: '(-∞, ∞)', range: '(0, ∞)', note: 'Decay, 0 < base < 1' },
                    { func: 'f(x) = 2ˣ + 3', domain: '(-∞, ∞)', range: '(3, ∞)', note: 'Vertical shift' }
                ],
                characteristics: [
                    'Domain always all real numbers',
                    'Horizontal asymptote affects range',
                    'Range never includes asymptote value',
                    'Always positive if no reflection'
                ]
            },
            logarithmic: {
                name: 'Logarithmic Functions',
                generalForm: 'f(x) = logₐ(x)',
                domainRule: 'Argument must be positive',
                rangeRule: 'All real numbers',
                examples: [
                    { func: 'f(x) = log(x)', domain: '(0, ∞)', range: '(-∞, ∞)', note: 'Basic log' },
                    { func: 'f(x) = log(x-2)', domain: '(2, ∞)', range: '(-∞, ∞)', note: 'Shifted right' },
                    { func: 'f(x) = ln(x)', domain: '(0, ∞)', range: '(-∞, ∞)', note: 'Natural log' }
                ],
                characteristics: [
                    'Domain: argument > 0',
                    'Range: all real numbers',
                    'Vertical asymptote where argument = 0',
                    'Inverse of exponential'
                ],
                findingDomain: [
                    'Set argument > 0',
                    'Solve inequality',
                    'Express in interval notation'
                ]
            },
            piecewise: {
                name: 'Piecewise Functions',
                generalForm: 'f(x) = { f₁(x) if condition₁, f₂(x) if condition₂, ... }',
                domainRule: 'Union of all piece domains',
                rangeRule: 'Union of all piece ranges',
                examples: [
                    {
                        func: 'f(x) = { x² if x < 0, x if x ≥ 0 }',
                        domain: '(-∞, ∞)',
                        range: '[0, ∞)',
                        note: 'Two pieces'
                    }
                ],
                characteristics: [
                    'Different rules for different x-values',
                    'Domain: where any piece is defined',
                    'Range: combine all piece outputs',
                    'Check continuity at boundaries'
                ],
                findingDomain: [
                    'Find domain of each piece',
                    'Take union of all domains',
                    'Check if conditions cover all x-values'
                ],
                findingRange: [
                    'Find range of each piece on its domain',
                    'Take union of all ranges',
                    'Check boundary values'
                ]
            },
            trigonometric: {
                name: 'Trigonometric Functions',
                sinCos: {
                    functions: ['sin(x)', 'cos(x)'],
                    domain: '(-∞, ∞)',
                    range: '[-1, 1]',
                    characteristics: ['Periodic', 'Bounded']
                },
                tan: {
                    function: 'tan(x)',
                    domain: 'x ≠ π/2 + nπ',
                    range: '(-∞, ∞)',
                    characteristics: ['Periodic', 'Unbounded', 'Vertical asymptotes']
                },
                sec: {
                    function: 'sec(x)',
                    domain: 'x ≠ π/2 + nπ',
                    range: '(-∞, -1] ∪ [1, ∞)',
                    characteristics: ['Periodic', 'Unbounded']
                },
                examples: [
                    { func: 'f(x) = sin(x)', domain: '(-∞, ∞)', range: '[-1, 1]' },
                    { func: 'f(x) = 2sin(x)', domain: '(-∞, ∞)', range: '[-2, 2]' },
                    { func: 'f(x) = tan(x)', domain: 'x ≠ π/2 + nπ', range: '(-∞, ∞)' }
                ]
            }
        };
    }

    initializeDomainRangeLessons() {
        this.lessons = {
            domain_basics: {
                title: "Understanding Domain",
                concepts: [
                    "Domain: the set of all possible input values (x-values)",
                    "Domain asks: 'What can I put into this function?'",
                    "Domain depends on function restrictions",
                    "Express domain using interval, set-builder, or inequality notation"
                ],
                theory: "The domain of a function is all x-values for which the function is defined. We must exclude values that cause mathematical impossibilities.",
                keyFormulas: {
                    "Domain Definition": "The set of all valid x-values",
                    "Domain Notation": "Interval: [a, b], Set-builder: {x | condition}",
                    "All Reals": "(-∞, ∞) or ℝ"
                },
                commonRestrictions: {
                    "Division by zero": "Cannot divide by zero",
                    "Even roots": "Cannot take even root of negative",
                    "Logarithms": "Cannot take log of zero or negative",
                    "Domain of composition": "Output of inner must be in domain of outer"
                },
                findingSteps: [
                    "Identify the function type",
                    "Determine what restrictions apply",
                    "Find values to exclude",
                    "Express allowed values in notation",
                    "Verify with test values"
                ]
            },

            range_basics: {
                title: "Understanding Range",
                concepts: [
                    "Range: the set of all possible output values (y-values)",
                    "Range asks: 'What can this function produce?'",
                    "Range depends on domain and function behavior",
                    "May need to analyze graph or use calculus"
                ],
                theory: "The range of a function is all y-values the function can output. Finding range often requires understanding the function's behavior.",
                keyFormulas: {
                    "Range Definition": "The set of all output y-values",
                    "Range Notation": "Interval: [a, b], Set-builder: {y | condition}"
                },
                findingMethods: {
                    "Graphical": "Look at all y-values the graph reaches",
                    "Algebraic": "Solve y = f(x) for x, find y restrictions",
                    "Analytical": "Find minimum/maximum using calculus",
                    "Test values": "Evaluate function at key points"
                },
                findingSteps: [
                    "Find the domain first",
                    "Identify function type and behavior",
                    "Find minimum/maximum values",
                    "Determine which y-values are achievable",
                    "Express in notation"
                ]
            },

            polynomial_domain_range: {
                title: "Domain and Range of Polynomials",
                concepts: [
                    "Polynomials are defined for all real numbers",
                    "Domain is always (-∞, ∞)",
                    "Range depends on degree and leading coefficient",
                    "Even degree: range is bounded on one side"
                ],
                theory: "Polynomial functions have no inherent restrictions. Their range is determined by their end behavior and critical points.",
                domainRule: "Always (-∞, ∞)",
                rangeRules: {
                    "Even degree, positive leading coeff": "[minimum, ∞)",
                    "Even degree, negative leading coeff": "(-∞, maximum]",
                    "Odd degree": "(-∞, ∞)"
                },
                examples: [
                    "f(x) = x²: Domain (-∞, ∞), Range [0, ∞)",
                    "f(x) = -x² + 4: Domain (-∞, ∞), Range (-∞, 4]",
                    "f(x) = x³: Domain (-∞, ∞), Range (-∞, ∞)"
                ]
            },

            rational_domain_range: {
                title: "Domain and Range of Rational Functions",
                concepts: [
                    "Domain: exclude values where denominator = 0",
                    "Vertical asymptotes occur at excluded domain values",
                    "Horizontal asymptotes may affect range",
                    "Range excludes horizontal asymptote value (usually)"
                ],
                theory: "Rational functions are fractions of polynomials. Domain excludes zeros of denominator; range excludes horizontal asymptote.",
                domainSteps: [
                    "Set denominator equal to zero",
                    "Solve for x",
                    "Exclude these values from ℝ",
                    "Check for holes (common factors)"
                ],
                rangeSteps: [
                    "Find horizontal asymptote (if any)",
                    "Exclude asymptote value from range",
                    "Check for other restrictions",
                    "Verify with graph or test values"
                ],
                examples: [
                    "f(x) = 1/x: Domain (-∞,0)∪(0,∞), Range (-∞,0)∪(0,∞)",
                    "f(x) = (x+1)/(x-2): Domain x≠2, Range y≠1"
                ]
            },

            radical_domain_range: {
                title: "Domain and Range of Radical Functions",
                concepts: [
                    "Square root: radicand must be ≥ 0",
                    "Cube root: defined for all real numbers",
                    "Even roots require non-negative radicand",
                    "Odd roots have no restrictions"
                ],
                theory: "Even roots cannot process negative numbers (in real numbers). This creates domain restrictions.",
                domainRules: {
                    "√f(x)": "f(x) ≥ 0",
                    "³√f(x)": "all real numbers",
                    "⁴√f(x)": "f(x) ≥ 0"
                },
                rangeRules: {
                    "√f(x)": "[0, ∞) unless transformed",
                    "³√f(x)": "(-∞, ∞)",
                    "-√f(x)": "(-∞, 0]"
                },
                findingDomainSteps: [
                    "Identify the radicand (expression inside root)",
                    "Set radicand ≥ 0 (for even roots)",
                    "Solve the inequality",
                    "Express in interval notation"
                ],
                examples: [
                    "f(x) = √x: Domain [0,∞), Range [0,∞)",
                    "f(x) = √(x-3): Domain [3,∞), Range [0,∞)",
                    "f(x) = ³√x: Domain (-∞,∞), Range (-∞,∞)"
                ]
            },

            logarithmic_domain_range: {
                title: "Domain and Range of Logarithmic Functions",
                concepts: [
                    "Argument of log must be positive",
                    "Cannot take log of zero or negative numbers",
                    "Domain: set argument > 0",
                    "Range is always all real numbers"
                ],
                theory: "Logarithms are only defined for positive arguments. The range is always all real numbers.",
                domainRule: "For log(f(x)): f(x) > 0",
                rangeRule: "Always (-∞, ∞)",
                findingDomainSteps: [
                    "Identify the argument of the logarithm",
                    "Set argument > 0",
                    "Solve the inequality",
                    "Express in interval notation"
                ],
                examples: [
                    "f(x) = log(x): Domain (0,∞), Range (-∞,∞)",
                    "f(x) = ln(x-2): Domain (2,∞), Range (-∞,∞)",
                    "f(x) = log(x²+1): Domain (-∞,∞), Range [0,∞)"
                ]
            },

            piecewise_domain_range: {
                title: "Domain and Range of Piecewise Functions",
                concepts: [
                    "Domain: union of all piece domains",
                    "Check if pieces cover entire real line",
                    "Range: union of ranges of all pieces",
                    "Watch for gaps or overlaps"
                ],
                theory: "Piecewise functions have different rules for different x-values. Domain and range are built from all pieces.",
                findingDomainSteps: [
                    "List domain of each piece from conditions",
                    "Take union of all domains",
                    "Check for gaps or overlaps",
                    "Express as interval or set notation"
                ],
                findingRangeSteps: [
                    "Find range of each piece on its domain",
                    "Check values at boundaries",
                    "Take union of all ranges",
                    "Look for min/max in each piece"
                ],
                examples: [
                    "f(x) = {x² if x<0, x if x≥0}: Domain (-∞,∞), Range [0,∞)"
                ]
            },

            composition_domain: {
                title: "Domain of Composite Functions",
                concepts: [
                    "For (f∘g)(x) = f(g(x))",
                    "x must be in domain of g",
                    "g(x) must be in domain of f",
                    "Take intersection of conditions"
                ],
                theory: "Composite functions require the output of the inner function to be valid input for the outer function.",
                findingSteps: [
                    "Find domain of g (inner function)",
                    "Find what values g(x) can output",
                    "Determine which g(x) outputs are in domain of f",
                    "Take intersection: x in domain of g AND g(x) in domain of f"
                ],
                examples: [
                    "f(x)=√x, g(x)=x-4: (f∘g)(x)=√(x-4), Domain [4,∞)",
                    "f(x)=1/x, g(x)=x-2: (f∘g)(x)=1/(x-2), Domain x≠2"
                ]
            },

            inverse_domain_range: {
                title: "Domain and Range of Inverse Functions",
                concepts: [
                    "Domain of f⁻¹ = Range of f",
                    "Range of f⁻¹ = Domain of f",
                    "Domain and range swap for inverses",
                    "Graph reflects across y=x"
                ],
                theory: "Inverse functions reverse input and output, so domain and range swap.",
                relationship: {
                    "If f: A → B": "then f⁻¹: B → A",
                    "Domain of f⁻¹": "Range of f",
                    "Range of f⁻¹": "Domain of f"
                },
                examples: [
                    "f(x)=2x+3: Domain (-∞,∞), Range (-∞,∞)",
                    "f⁻¹(x)=(x-3)/2: Domain (-∞,∞), Range (-∞,∞)",
                    "f(x)=x²(x≥0): Domain [0,∞), Range [0,∞)",
                    "f⁻¹(x)=√x: Domain [0,∞), Range [0,∞)"
                ]
            },

            transformations_domain_range: {
                title: "Effects of Transformations",
                concepts: [
                    "Horizontal shifts affect domain",
                    "Vertical shifts affect range",
                    "Reflections may change range",
                    "Stretches/compressions affect range"
                ],
                theory: "Transformations change domain and range in predictable ways.",
                effects: {
                    "f(x-h)": "Domain shifts right h units",
                    "f(x)+k": "Range shifts up k units",
                    "-f(x)": "Range reflects across x-axis",
                    "f(-x)": "Domain unchanged (graph reflects across y-axis)",
                    "af(x)": "Range multiplied by a",
                    "f(ax)": "Domain divided by a"
                },
                examples: [
                    "√x → √(x-3): Domain [0,∞) → [3,∞)",
                    "√x → √x+2: Range [0,∞) → [2,∞)",
                    "|x| → -|x|: Range [0,∞) → (-∞,0]"
                ]
            },

            graphical_domain_range: {
                title: "Finding Domain and Range Graphically",
                concepts: [
                    "Domain: project graph onto x-axis",
                    "Range: project graph onto y-axis",
                    "Look for gaps, holes, asymptotes",
                    "Include endpoints if filled dot, exclude if open"
                ],
                theory: "Graphs visually show all input and output values.",
                domainSteps: [
                    "Look at graph from left to right",
                    "Find leftmost and rightmost x-values",
                    "Check for breaks in the graph",
                    "Note asymptotes (domain doesn't include them)"
                ],
                rangeSteps: [
                    "Look at graph from bottom to top",
                    "Find lowest and highest y-values",
                    "Check for horizontal gaps",
                    "Note horizontal asymptotes"
                ],
                visualCues: {
                    "Open circle": "Value not included",
                    "Closed circle": "Value included",
                    "Arrow": "Continues forever",
                    "Vertical line test": "Confirms it's a function"
                }
            },

            real_world_domain_range: {
                title: "Domain and Range in Context",
                concepts: [
                    "Real-world situations impose restrictions",
                    "Domain limited by practical constraints",
                    "Range limited by physical possibilities",
                    "May be subset of mathematical domain/range"
                ],
                theory: "Context determines realistic domain and range, which may be smaller than the mathematical domain.",
                examples: [
                    {
                        context: "Area of square: A(s) = s²",
                        mathDomain: "(-∞, ∞)",
                        realDomain: "(0, ∞)",
                        reason: "Side length must be positive"
                    },
                    {
                        context: "Height of projectile: h(t) = -16t² + 64t",
                        mathDomain: "(-∞, ∞)",
                        realDomain: "[0, 4]",
                        reason: "Time from launch until landing"
                    },
                    {
                        context: "Cost with bulk discount",
                        mathDomain: "All reals",
                        realDomain: "Positive integers",
                        reason: "Can't order negative or fractional items"
                    }
                ]
            }
        };
    }

    initializeDomainRangeSolvers() {
        this.domainRangeTypes = {
            polynomial: {
                patterns: [
                    /polynomial/i,
                    /x\^?\d+/,
                    /quadratic/i,
                    /cubic/i
                ],
                solver: this.solvePolynomialDomainRange.bind(this),
                name: 'Polynomial Function Domain and Range',
                category: 'polynomial',
                description: 'Find domain and range of polynomial functions'
            },

            rational: {
                patterns: [
                    /rational/i,
                    /\//,
                    /fraction/i,
                    /denominator/i
                ],
                solver: this.solveRationalDomainRange.bind(this),
                name: 'Rational Function Domain and Range',
                category: 'rational',
                description: 'Find domain and range of rational functions'
            },

            radical_even: {
                patterns: [
                    /sqrt|√/i,
                    /square root/i,
                    /radical/i
                ],
                solver: this.solveRadicalDomainRange.bind(this),
                name: 'Radical Function Domain and Range',
                category: 'radical',
                description: 'Find domain and range of radical functions'
            },

            absolute_value: {
                patterns: [
                    /absolute value/i,
                    /\|.*\|/,
                    /abs\(/i
                ],
                solver: this.solveAbsoluteDomainRange.bind(this),
                name: 'Absolute Value Domain and Range',
                category: 'absolute',
                description: 'Find domain and range of absolute value functions'
            },

            exponential: {
                patterns: [
                    /exponential/i,
                    /\^x/,
                    /e\^/i,
                    /\d+\^x/
                ],
                solver: this.solveExponentialDomainRange.bind(this),
                name: 'Exponential Function Domain and Range',
                category: 'exponential',
                description: 'Find domain and range of exponential functions'
            },

            logarithmic: {
                patterns: [
                    /log/i,
                    /ln/i,
                    /logarithm/i
                ],
                solver: this.solveLogarithmicDomainRange.bind(this),
                name: 'Logarithmic Function Domain and Range',
                category: 'logarithmic',
                description: 'Find domain and range of logarithmic functions'
            },

            piecewise: {
                patterns: [
                    /piecewise/i,
                    /\{.*if/i,
                    /piece-wise/i
                ],
                solver: this.solvePiecewiseDomainRange.bind(this),
                name: 'Piecewise Function Domain and Range',
                category: 'piecewise',
                description: 'Find domain and range of piecewise functions'
            },

            trigonometric: {
                patterns: [
                    /sin|cos|tan/i,
                    /trig/i,
                    /sec|csc|cot/i
                ],
                solver: this.solveTrigDomainRange.bind(this),
                name: 'Trigonometric Function Domain and Range',
                category: 'trigonometric',
                description: 'Find domain and range of trig functions'
            },

            composition: {
                patterns: [
                    /composition/i,
                    /composite/i,
                    /f.*g|g.*f/i,
                    /\(f.*g\)/i
                ],
                solver: this.solveCompositionDomainRange.bind(this),
                name: 'Composite Function Domain',
                category: 'composition',
                description: 'Find domain of composite functions'
            },

            inverse: {
                patterns: [
                    /inverse/i,
                    /f\^-1|f\^{-1}/i,
                    /f inverse/i
                ],
                solver: this.solveInverseDomainRange.bind(this),
                name: 'Inverse Function Domain and Range',
                category: 'inverse',
                description: 'Find domain and range of inverse functions'
            },

            from_graph: {
                patterns: [
                    /graph/i,
                    /graphical/i,
                    /from.*graph/i
                ],
                solver: this.solveGraphicalDomainRange.bind(this),
                name: 'Domain and Range from Graph',
                category: 'graphical',
                description: 'Determine domain and range from a graph'
            },

            contextual: {
                patterns: [
                    /real world/i,
                    /context/i,
                    /application/i,
                    /situation/i
                ],
                solver: this.solveContextualDomainRange.bind(this),
                name: 'Domain and Range in Context',
                category: 'contextual',
                description: 'Find realistic domain and range from context'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            polynomial: {
                'Domain': [
                    'Forgetting domain is always all real numbers',
                    'Trying to find restrictions where none exist'
                ],
                'Range': [
                    'Not considering end behavior',
                    'Forgetting to find vertex for quadratics',
                    'Confusing even and odd degree behavior'
                ]
            },
            rational: {
                'Finding zeros of denominator': [
                    'Setting numerator = 0 instead of denominator',
                    'Forgetting to exclude these values',
                    'Not simplifying first to find holes'
                ],
                'Range': [
                    'Not finding horizontal asymptote',
                    'Forgetting to exclude asymptote value',
                    'Not checking if asymptote is actually crossed'
                ]
            },
            radical: {
                'Setting up inequality': [
                    'Using = instead of ≥ for even roots',
                    'Forgetting radicand must be non-negative',
                    'Applying restriction to odd roots'
                ],
                'Solving inequality': [
                    'Sign errors when solving',
                    'Not using interval notation correctly',
                    'Forgetting to include endpoint'
                ]
            },
            logarithmic: {
                'Domain': [
                    'Using ≥ instead of > for argument',
                    'Forgetting argument must be strictly positive',
                    'Not identifying the full argument correctly'
                ],
                'Range': [
                    'Thinking range is restricted like domain',
                    'Forgetting range is always all reals'
                ]
            },
            composition: {
                'Domain': [
                    'Only considering domain of outer function',
                    'Forgetting to check if g(x) is in domain of f',
                    'Not taking intersection of both conditions'
                ]
            },
            notation: {
                'Interval notation': [
                    'Using wrong bracket type',
                    'Writing infinity with brackets []',
                    'Reversing order in interval',
                    'Forgetting union symbol between intervals'
                ],
                'Set-builder': [
                    'Incorrect inequality symbols',
                    'Missing conditions',
                    'Wrong variable usage'
                ]
            }
        };

        this.errorPrevention = {
            domain_checklist: {
                reminder: 'Always check: division by zero, even roots, logarithms, domain restrictions from context',
                method: 'Make a systematic checklist for each function type'
            },
            range_checklist: {
                reminder: 'Find domain first, then analyze behavior: min/max, asymptotes, transformations',
                method: 'Sketch a rough graph or use calculus to find extrema'
            },
            notation_rules: {
                reminder: 'Infinity always uses parentheses, never brackets',
                method: 'Remember: infinity is a concept, not a number you can reach'
            },
            verify_answer: {
                reminder: 'Test values in your domain/range to verify they work',
                method: 'Pick a value from your answer and check it in the function'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Understanding what domain and range mean',
                language: 'intuitive and meaning-focused',
                emphasis: 'Why certain values are excluded or included'
            },
            procedural: {
                focus: 'Step-by-step process to find domain and range',
                language: 'clear instructions',
                emphasis: 'Exact sequence of steps to follow'
            },
            visual: {
                focus: 'Graphical understanding',
                language: 'spatial and visual',
                emphasis: 'What the graph shows about domain and range'
            },
            algebraic: {
                focus: 'Formal mathematical approach',
                language: 'precise terminology',
                emphasis: 'Rigorous algebraic methods'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple everyday language',
                detail: 'essential steps only',
                examples: 'concrete functions with numbers',
                notation: 'verbal and simple interval notation'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of specific and general cases',
                notation: 'interval and set-builder notation'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible',
                detail: 'every tiny step with real-world analogies',
                examples: 'everyday situations and stories',
                analogies: true,
                visualization: 'simple drawings and pictures',
                notation: 'mostly words'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive with all reasoning',
                examples: 'abstract and generalized',
                notation: 'all forms with conversions'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced progression',
                notation: 'introduce gradually'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            projectile_motion: {
                scenario: "Height of a ball thrown upward",
                function: "h(t) = -16t² + 64t + 5",
                mathematicalDomain: "(-∞, ∞)",
                realWorldDomain: "[0, 4.08]",
                domainReasoning: "Time can't be negative; ball lands at t ≈ 4.08",
                mathematicalRange: "(-∞, 69]",
                realWorldRange: "[0, 69]",
                rangeReasoning: "Height can't be negative; maximum height is 69 feet",
                context: "Physics problem - time starts at launch, ends at landing"
            },
            area_function: {
                scenario: "Area of a square given side length",
                function: "A(s) = s²",
                mathematicalDomain: "(-∞, ∞)",
                realWorldDomain: "(0, ∞)",
                domainReasoning: "Side length must be positive",
                mathematicalRange: "[0, ∞)",
                realWorldRange: "(0, ∞)",
                rangeReasoning: "Area must be positive",
                context: "Geometry - negative or zero side lengths don't make sense"
            },
            cost_function: {
                scenario: "Cost of producing n items: C(n) = 500 + 20n",
                function: "C(n) = 500 + 20n",
                mathematicalDomain: "(-∞, ∞)",
                realWorldDomain: "{0, 1, 2, 3, ...}",
                domainReasoning: "Can't produce negative or fractional items",
                mathematicalRange: "[500, ∞)",
                realWorldRange: "{500, 520, 540, ...}",
                rangeReasoning: "Costs occur in $20 increments starting at $500",
                context: "Business - discrete values only"
            },
            temperature_conversion: {
                scenario: "Fahrenheit to Celsius: C(F) = (5/9)(F - 32)",
                function: "C(F) = (5/9)(F - 32)",
                mathematicalDomain: "(-∞, ∞)",
                realWorldDomain: "(-∞, ∞)",
                domainReasoning: "Temperature can be any value",
                mathematicalRange: "(-∞, ∞)",
                realWorldRange: "Practically: [-273.15, ∞) in Celsius",
                rangeReasoning: "Absolute zero is the lower bound",
                context: "Physics - conversion formula"
            },
            population_growth: {
                scenario: "Population over time: P(t) = 1000(1.05)^t",
                function: "P(t) = 1000(1.05)^t",
                mathematicalDomain: "(-∞, ∞)",
                realWorldDomain: "[0, ∞)",
                domainReasoning: "Time starts at t=0",
                mathematicalRange: "(0, ∞)",
                realWorldRange: "[1000, ∞)",
                rangeReasoning: "Population starts at 1000 and grows",
                context: "Biology/demography - exponential growth"
            },
            revenue_function: {
                scenario: "Revenue from selling x items at price p(x) = 50 - 0.1x",
                function: "R(x) = x(50 - 0.1x) = 50x - 0.1x²",
                mathematicalDomain: "(-∞, ∞)",
                realWorldDomain: "[0, 500]",
                domainReasoning: "Can't sell negative items; price becomes 0 at x=500",
                mathematicalRange: "(-∞, 6250]",
                realWorldRange: "[0, 6250]",
                rangeReasoning: "Revenue is 0 when x=0 or 500, max at x=250",
                context: "Economics - quadratic revenue model"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            polynomial: {
                skills: ['Understanding polynomials', 'Graphing parabolas', 'End behavior'],
                priorKnowledge: ['Polynomial functions are continuous', 'No inherent restrictions'],
                checkQuestions: [
                    "What is a polynomial function?",
                    "Does f(x) = x² have any x-values it can't accept?",
                    "What happens to x² as x gets very large?"
                ]
            },
            rational: {
                skills: ['Fraction operations', 'Solving equations', 'Asymptotes'],
                priorKnowledge: ['Cannot divide by zero', 'Vertical and horizontal asymptotes'],
                checkQuestions: [
                    "What happens when you divide by zero?",
                    "If denominator = 0, what happens to function?",
                    "How do you find horizontal asymptote?"
                ]
            },
            radical: {
                skills: ['Square roots', 'Solving inequalities', 'Even vs odd roots'],
                priorKnowledge: ['Cannot take even root of negative', 'Odd roots allow negatives'],
                checkQuestions: [
                    "What is √(-4) in real numbers?",
                    "What is ³√(-8)?",
                    "When is √(x-3) defined?"
                ]
            },
            logarithmic: {
                skills: ['Logarithm properties', 'Solving inequalities', 'Exponentials'],
                priorKnowledge: ['Logs only defined for positive arguments', 'Logs are inverses of exponentials'],
                checkQuestions: [
                    "What is log(-5)?",
                    "What is log(0)?",
                    "Can you take log of any positive number?"
                ]
            },
            composition: {
                skills: ['Function composition', 'Domain of basic functions', 'Inequalities'],
                priorKnowledge: ['Inner function output must be valid for outer', 'Nested restrictions'],
                checkQuestions: [
                    "What is (f∘g)(x)?",
                    "If f(x)=√x and g(x)=x-4, when is f(g(x)) defined?",
                    "Why check both functions' domains?"
                ]
            },
            graphical: {
                skills: ['Reading graphs', 'Understanding coordinates', 'Projection'],
                priorKnowledge: ['Domain is x-values', 'Range is y-values', 'Asymptotes'],
                checkQuestions: [
                    "On a graph, where do you look for domain?",
                    "What does an open circle mean?",
                    "How do asymptotes affect domain/range?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            number_line: {
                description: "Domain shown on x-axis number line",
                analogy: "Like showing which x-values are allowed to enter the function",
                visualization: "Draw number line with shaded/unshaded regions",
                suitableFor: ['polynomial', 'rational', 'radical', 'logarithmic'],
                explanation: "Shaded region = domain; holes/gaps = excluded values"
            },
            graph_projection: {
                description: "Project graph onto axes",
                analogy: "Imagine shining light to cast shadows on x and y axes",
                visualization: "Graph with projection lines to axes",
                suitableFor: ['all_types'],
                explanation: "Shadow on x-axis = domain; shadow on y-axis = range"
            },
            interval_diagram: {
                description: "Visual interval notation",
                analogy: "Like showing which sections of a ruler are usable",
                visualization: "Number line with brackets and parentheses",
                suitableFor: ['all_types'],
                explanation: "[ ] means included, ( ) means excluded"
            },
            input_output_table: {
                description: "Table showing valid inputs and resulting outputs",
                analogy: "Like a vending machine showing what buttons work and what you get",
                visualization: "Two-column table: x-values | y-values",
                suitableFor: ['all_types'],
                explanation: "Left column shows domain, right shows corresponding range values"
            },
            restriction_diagram: {
                description: "Show restrictions graphically",
                analogy: "Like a map with forbidden zones marked",
                visualization: "Coordinate plane with shaded allowed regions",
                suitableFor: ['radical', 'logarithmic', 'rational'],
                explanation: "Shaded = allowed, unshaded = restricted"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    function: 'f(x) = x² + 3',
                    type: 'polynomial',
                    domain: '(-∞, ∞)',
                    range: '[3, ∞)',
                    reasoning: 'Polynomial: domain all reals. Vertex form shows minimum at y=3',
                    difficulty: 'easy'
                },
                {
                    function: 'f(x) = √x',
                    type: 'radical',
                    domain: '[0, ∞)',
                    range: '[0, ∞)',
                    reasoning: 'Square root requires x ≥ 0. Output starts at 0 and increases',
                    difficulty: 'easy'
                },
                {
                    function: 'f(x) = |x|',
                    type: 'absolute',
                    domain: '(-∞, ∞)',
                    range: '[0, ∞)',
                    reasoning: 'Absolute value defined everywhere. Output always non-negative',
                    difficulty: 'easy'
                }
            ],
            intermediate: [
                {
                    function: 'f(x) = 1/(x-2)',
                    type: 'rational',
                    domain: '(-∞, 2) ∪ (2, ∞)',
                    range: '(-∞, 0) ∪ (0, ∞)',
                    reasoning: 'Denominator can\'t be 0, so x ≠ 2. Horizontal asymptote y=0 excluded from range',
                    difficulty: 'medium'
                },
                {
                    function: 'f(x) = √(x-3)',
                    type: 'radical',
                    domain: '[3, ∞)',
                    range: '[0, ∞)',
                    reasoning: 'Need x-3 ≥ 0, so x ≥ 3. Output same as basic √x',
                    difficulty: 'medium'
                },
                {
                    function: 'f(x) = ln(x+1)',
                    type: 'logarithmic',
                    domain: '(-1, ∞)',
                    range: '(-∞, ∞)',
                    reasoning: 'Need x+1 > 0, so x > -1. Range of log is always all reals',
                    difficulty: 'medium'
                }
            ],
            advanced: [
                {
                    function: 'f(x) = √(4-x²)',
                    type: 'radical',
                    domain: '[-2, 2]',
                    range: '[0, 2]',
                    reasoning: 'Need 4-x² ≥ 0. Solving: x² ≤ 4, so -2 ≤ x ≤ 2. Max when x=0 gives y=2',
                    difficulty: 'hard'
                },
                {
                    function: 'f(x) = (x²-4)/(x-2)',
                    type: 'rational',
                    domain: '(-∞, 2) ∪ (2, ∞)',
                    range: '(-∞, 4) ∪ (4, ∞)',
                    reasoning: 'Simplifies to f(x)=x+2 with hole at x=2. Missing y=4 in range',
                    difficulty: 'hard'
                },
                {
                    function: 'f(x) = log(x²)',
                    type: 'logarithmic',
                    domain: '(-∞, 0) ∪ (0, ∞)',
                    range: '(-∞, ∞)',
                    reasoning: 'Need x² > 0, so x ≠ 0. Since x² can be any positive, range is all reals',
                    difficulty: 'hard'
                }
            ],
            byType: {
                polynomial: [
                    { func: 'f(x) = x² - 5', domain: '(-∞, ∞)', range: '[-5, ∞)' },
                    { func: 'f(x) = -x² + 4', domain: '(-∞, ∞)', range: '(-∞, 4]' },
                    { func: 'f(x) = x³', domain: '(-∞, ∞)', range: '(-∞, ∞)' }
                ],
                rational: [
                    { func: 'f(x) = 1/x', domain: '(-∞, 0) ∪ (0, ∞)', range: '(-∞, 0) ∪ (0, ∞)' },
                    { func: 'f(x) = (x+1)/(x-3)', domain: 'x ≠ 3', range: 'y ≠ 1' },
                    { func: 'f(x) = x/(x²+1)', domain: '(-∞, ∞)', range: '[-0.5, 0.5]' }
                ],
                radical: [
                    { func: 'f(x) = √(x+4)', domain: '[-4, ∞)', range: '[0, ∞)' },
                    { func: 'f(x) = -√x + 3', domain: '[0, ∞)', range: '(-∞, 3]' },
                    { func: 'f(x) = ³√(x-1)', domain: '(-∞, ∞)', range: '(-∞, ∞)' }
                ],
                logarithmic: [
                    { func: 'f(x) = log(x-2)', domain: '(2, ∞)', range: '(-∞, ∞)' },
                    { func: 'f(x) = ln(2x)', domain: '(0, ∞)', range: '(-∞, ∞)' },
                    { func: 'f(x) = log₂(x)+1', domain: '(0, ∞)', range: '(-∞, ∞)' }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            domain_always_restricted: {
                misconception: 'Every function has domain restrictions',
                reality: 'Polynomials have domain of all real numbers',
                correctiveExample: 'f(x) = x² has domain (-∞, ∞) with no restrictions',
                commonIn: ['polynomial']
            },
            range_equals_domain: {
                misconception: 'Range is the same as domain',
                reality: 'Domain and range are usually different',
                correctiveExample: 'f(x) = x² has domain (-∞, ∞) but range [0, ∞)',
                commonIn: ['all_types']
            },
            infinity_in_brackets: {
                misconception: 'Writing [∞) or (-∞]',
                reality: 'Infinity always uses parentheses: (∞) or (-∞)',
                correctiveExample: 'Correct: (-∞, 5], Wrong: [-∞, 5]',
                commonIn: ['notation']
            },
            sqrt_domain: {
                misconception: 'Square root domain is > 0 (strict inequality)',
                reality: 'Square root domain is ≥ 0 (includes zero)',
                correctiveExample: '√x has domain [0, ∞), not (0, ∞)',
                commonIn: ['radical']
            },
            log_domain: {
                misconception: 'Logarithm domain is ≥ 0',
                reality: 'Logarithm domain is > 0 (strictly positive, excludes zero)',
                correctiveExample: 'log(x) has domain (0, ∞), not [0, ∞)',
                commonIn: ['logarithmic']
            },
            rational_range: {
                misconception: 'Rational function range automatically excludes y=0',
                reality: 'Range excludes horizontal asymptote value, which might not be 0',
                correctiveExample: 'f(x) = (x+1)/(x-2) has horizontal asymptote y=1, so range excludes 1, not 0',
                commonIn: ['rational']
            },
            absolute_range: {
                misconception: 'Absolute value range is always [0, ∞)',
                reality: 'Range changes with transformations',
                correctiveExample: '-|x| has range (-∞, 0], not [0, ∞)',
                commonIn: ['absolute']
            },
            composition_domain: {
                misconception: 'Domain of (f∘g) is just domain of f',
                reality: 'Must check both: x in domain of g AND g(x) in domain of f',
                correctiveExample: 'For f(x)=√x, g(x)=x-4: need x-4 ≥ 0, so x ≥ 4',
                commonIn: ['composition']
            },
            asymptote_included: {
                misconception: 'Asymptote values are in domain/range',
                reality: 'Asymptotes are approached but never reached',
                correctiveExample: 'f(x)=1/x has vertical asymptote x=0, so 0 not in domain',
                commonIn: ['rational', 'logarithmic', 'exponential']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            domain_input: {
                analogy: 'Vending machine buttons',
                explanation: 'Domain is like the buttons that actually work on a vending machine. Some buttons might be broken (excluded from domain)',
                suitableFor: ['all_types'],
                ELI5: 'Think of a toy box. The domain is all the toys you\'re allowed to play with. Some toys might be too dangerous (not in the domain)'
            },
            range_output: {
                analogy: 'Vending machine products',
                explanation: 'Range is like all the different snacks that can actually come out of the vending machine',
                suitableFor: ['all_types'],
                ELI5: 'If domain is what you can put into a magic box, range is what can come out of the box'
            },
            sqrt_restriction: {
                analogy: 'You can\'t take the square root of a negative (in real numbers) just like you can\'t have a negative number of apples',
                explanation: 'Square root asks: what number times itself gives this? Negative × negative = positive, so we can\'t get a negative inside',
                suitableFor: ['radical'],
                ELI5: 'Square root is like asking "what number times itself makes this?" If you try -2 × -2, you get +4, not -4. So square root of negatives doesn\'t work'
            },
            division_by_zero: {
                analogy: 'Sharing pizzas with friends',
                explanation: 'Division is sharing. If you have 8 pizzas and 0 friends to share with, it doesn\'t make sense - you can\'t divide by 0',
                suitableFor: ['rational'],
                ELI5: 'If you have cookies and try to split them among 0 people, it\'s impossible! That\'s why we can\'t divide by zero'
            },
            interval_notation: {
                analogy: 'Brackets are like gates that close to include something; parentheses are open gates that exclude',
                explanation: '[a, b] is like a fence with closed gates at both ends - everything inside AND the gates. (a, b) has open gates - things can\'t touch the gates',
                suitableFor: ['notation'],
                ELI5: 'Think of [ and ] like walls you can touch. Think of ( and ) like invisible walls you can get close to but can\'t touch'
            },
            asymptote: {
                analogy: 'Walking toward a wall but never touching it',
                explanation: 'An asymptote is like a line you can get infinitely close to but never actually reach',
                suitableFor: ['rational', 'exponential', 'logarithmic'],
                ELI5: 'Imagine trying to touch the horizon. You can walk toward it forever, getting closer and closer, but you\'ll never actually reach it'
            },
            composition_domain: {
                analogy: 'Two-step security check',
                explanation: 'Like going through airport security: you must pass both checkpoints (x in domain of g) AND (g(x) in domain of f)',
                suitableFor: ['composition'],
                ELI5: 'It\'s like a relay race. First runner must be able to run (x in domain of g), AND second runner must be able to take the baton (g(x) in domain of f)'
            },
            range_from_graph: {
                analogy: 'Shadow on the wall',
                explanation: 'Range is like the shadow the graph makes when you shine a light from the side onto the y-axis',
                suitableFor: ['graphical'],
                ELI5: 'Stand to the side of the graph and look at how high and low it goes. That\'s the range!'
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            polynomial: {
                level1: "What type of function is this?",
                level2: "Do polynomials have any built-in restrictions?",
                level3: "Domain is all real numbers. For range, consider the degree and leading coefficient",
                level4: "Domain: (-∞, ∞). For range, find the vertex or use end behavior"
            },
            rational: {
                level1: "What makes a fraction undefined?",
                level2: "Set the denominator equal to zero and solve",
                level3: "Exclude values where denominator = 0 from domain",
                level4: "Find horizontal asymptote to determine range restrictions"
            },
            radical_even: {
                level1: "What's special about square roots in real numbers?",
                level2: "You can't take the square root of a negative number",
                level3: "Set the radicand (inside the root) ≥ 0",
                level4: "Solve the inequality: radicand ≥ 0, then determine range from graph or transformations"
            },
            logarithmic: {
                level1: "What values can you take the logarithm of?",
                level2: "Logarithms require positive arguments",
                level3: "Set the argument > 0 (strictly greater, not equal)",
                level4: "Domain: solve argument > 0. Range: always (-∞, ∞) for basic logs"
            },
            composition: {
                level1: "What does (f∘g)(x) mean?",
                level2: "It means f(g(x)) - you put g(x) into f",
                level3: "You need x in domain of g, AND g(x) in domain of f",
                level4: "Find domain of g, then determine which g(x) values are in domain of f. Take intersection"
            },
            from_graph: {
                level1: "What does the graph show?",
                level2: "Domain: look left to right. Range: look bottom to top",
                level3: "Domain: project graph onto x-axis. Range: project onto y-axis",
                level4: "Check for holes (open circles), asymptotes, and endpoints"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "What is the domain of f(x) = x² + 5?",
                    answer: "(-∞, ∞)",
                    assesses: "polynomial",
                    difficulty: "basic"
                },
                {
                    question: "What is the domain of f(x) = 1/x?",
                    answer: "(-∞, 0) ∪ (0, ∞) or x ≠ 0",
                    assesses: "rational",
                    difficulty: "basic"
                },
                {
                    question: "What is the domain of f(x) = √x?",
                    answer: "[0, ∞)",
                    assesses: "radical",
                    difficulty: "basic"
                },
                {
                    question: "What is the domain of f(x) = log(x)?",
                    answer: "(0, ∞)",
                    assesses: "logarithmic",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "For a rational function, what values must be excluded from the domain?",
                    options: ["Numerator = 0", "Denominator = 0", "Both = 0", "Neither"],
                    correct: "Denominator = 0",
                    explanation: "Division by zero is undefined"
                },
                {
                    question: "For √(x-3), what inequality must x satisfy?",
                    options: ["x > 3", "x ≥ 3", "x < 3", "x ≤ 3"],
                    correct: "x ≥ 3",
                    explanation: "Need x-3 ≥ 0, so x ≥ 3"
                },
                {
                    question: "What is the range of f(x) = x²?",
                    options: ["(-∞, ∞)", "[0, ∞)", "(-∞, 0]", "(0, ∞)"],
                    correct: "[0, ∞)",
                    explanation: "Parabola opening up with vertex at (0,0)"
                }
            ],
            summative: [
                {
                    question: "Find domain and range of f(x) = √(9-x²)",
                    domainAnswer: "[-3, 3]",
                    rangeAnswer: "[0, 3]",
                    showsWork: true,
                    rubric: {
                        set_inequality: 1,
                        solve_correctly: 2,
                        domain_notation: 1,
                        find_range: 2,
                        range_notation: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "f(x) = x + 5",
                    "f(x) = x²",
                    "f(x) = |x|",
                    "f(x) = √x"
                ],
                medium: [
                    "f(x) = 1/(x-2)",
                    "f(x) = √(x+3)",
                    "f(x) = log(x-1)",
                    "f(x) = -x² + 4"
                ],
                hard: [
                    "f(x) = √(4-x²)",
                    "f(x) = log(x²-1)",
                    "f(x) = (x²-9)/(x-3)",
                    "(f∘g)(x) where f(x)=√x, g(x)=x²-4"
                ]
            },
            byObjective: {
                canFindPolynomialDomain: [
                    "f(x) = x² - 3x + 2",
                    "f(x) = x³ + 5",
                    "f(x) = -2x⁴ + 7x"
                ],
                canFindRationalDomain: [
                    "f(x) = 1/(x-5)",
                    "f(x) = (x+2)/(x²-4)",
                    "f(x) = x/(x²+1)"
                ],
                canFindRadicalDomain: [
                    "f(x) = √(x-7)",
                    "f(x) = √(2x+6)",
                    "f(x) = √(9-x²)"
                ],
                canFindRange: [
                    "f(x) = x² + 1",
                    "f(x) = -x² + 5",
                    "f(x) = |x| - 3"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "polynomial": "Domain: all reals. Range: use end behavior and vertex",
                "contains_fraction": "Check denominator ≠ 0 for domain",
                "contains_even_root": "Set radicand ≥ 0 for domain",
                "contains_log": "Set argument > 0 for domain",
                "piecewise": "Find domain/range of each piece, then union",
                "composition": "Check both inner domain and outer domain compatibility"
            },
            domainFindingProcess: {
                step1: "Identify function type(s)",
                step2: "List all restrictions (division, roots, logs, etc.)",
                step3: "Set up equations/inequalities for restrictions",
                step4: "Solve for excluded or required values",
                step5: "Express in appropriate notation",
                step6: "Verify with test values"
            },
            rangeFindingProcess: {
                step1: "Find domain first",
                step2: "Identify function behavior (increasing, decreasing, bounded)",
                step3: "Find critical points (min, max, asymptotes)",
                step4: "Evaluate function at key points",
                step5: "Determine achievable y-values",
                step6: "Express in notation"
            },
            notationChoice: {
                "Simple continuous interval": "Use interval notation",
                "Multiple intervals": "Use interval with union",
                "Complex conditions": "Use set-builder notation",
                "Discrete values": "Use roster notation {...}",
                "Initial explanation": "Use verbal description first"
            },
            verificationMethods: {
                "Test boundary values": "Check values at edges of domain",
                "Test excluded values": "Verify they don't work",
                "Graph check": "Visual confirmation",
                "Analytical check": "Substitute into original function"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Basic Domain Sprint",
                    timeLimit: 90,
                    problems: [
                        "f(x) = x² + 1",
                        "f(x) = 1/(x-3)",
                        "f(x) = √(x+2)",
                        "f(x) = |x-5|",
                        "f(x) = log(x+1)"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Function Detective",
                    problem: "A function has domain [-2, 5) and range (0, 10]. What could it be?",
                    possibleAnswers: "Many possibilities, e.g., transformed square root or rational",
                    challenge: "Create a function matching these specifications"
                },
                {
                    name: "Notation Translation",
                    problem: "Convert {x | x > 3 and x ≤ 7} to interval notation",
                    answer: "(3, 7]",
                    challenge: "Express in 3 different notations"
                }
            ],
            applications: [
                {
                    scenario: "Projectile height",
                    problem: "h(t) = -16t² + 64t represents height. Find realistic domain and range",
                    mathematicalDomain: "(-∞, ∞)",
                    realDomain: "[0, 4]",
                    range: "[0, 64]",
                    reasoning: "Time and height must be non-negative"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "f(x) = √(x-4)",
                        "Domain: x-4 > 0",
                        "x > 4",
                        "Domain: (4, ∞)"
                    ],
                    correctAnswer: "[4, ∞)",
                    errorType: "Should be ≥, not >"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "f(x) = 1/(x-2)",
                        "Domain: x-2 ≠ 0",
                        "Domain: [-∞, 2) ∪ (2, ∞]"
                    ],
                    correctAnswer: "(-∞, 2) ∪ (2, ∞)",
                    errorType: "Infinity should use parentheses, not brackets"
                }
            ]
        };
    }

    // DOMAIN AND RANGE SOLVERS

    solvePolynomialDomainRange(problem) {
        const { degree, leadingCoeff, vertex, equation } = problem.parameters;

        let range;
        if (degree && degree % 2 === 0) {
            // Even degree
            if (leadingCoeff > 0) {
                range = `[${vertex?.y || 'minimum'}, ∞)`;
            } else {
                range = `(-∞, ${vertex?.y || 'maximum'}]`;
            }
        } else {
            // Odd degree
            range = '(-∞, ∞)';
        }

        return {
            functionType: 'Polynomial',
            equation: equation || problem.cleanInput,
            domain: '(-∞, ∞)',
            domainNotations: {
                interval: '(-∞, ∞)',
                setBuilder: '{x | x ∈ ℝ}',
                inequality: 'all real numbers',
                verbal: 'all real numbers'
            },
            domainReasoning: 'Polynomials are defined for all real numbers - no restrictions',
            range: range,
            rangeReasoning: degree % 2 === 0 ? 
                'Even degree polynomial - range bounded on one side' :
                'Odd degree polynomial - range is all real numbers',
            category: 'polynomial'
        };
    }

    solveRationalDomainRange(problem) {
        const { numerator, denominator, zeros, horizontalAsymptote, equation } = problem.parameters;

        const excludedValues = zeros || []; // Values where denominator = 0
        
        let domainInterval;
        if (excludedValues.length === 0) {
            domainInterval = '(-∞, ∞)';
        } else if (excludedValues.length === 1) {
            const x = excludedValues[0];
            domainInterval = `(-∞, ${x}) ∪ (${x}, ∞)`;
        } else {
            // Multiple excluded values
            domainInterval = this.buildIntervalExcluding(excludedValues);
        }

        let range;
        if (horizontalAsymptote !== undefined) {
            range = `(-∞, ${horizontalAsymptote}) ∪ (${horizontalAsymptote}, ∞)`;
        } else {
            range = 'Varies - analyze specific function';
        }

        return {
            functionType: 'Rational',
            equation: equation || problem.cleanInput,
            domain: domainInterval,
            domainNotations: {
                interval: domainInterval,
                setBuilder: excludedValues.length === 1 ? 
                    `{x | x ∈ ℝ, x ≠ ${excludedValues[0]}}` :
                    `{x | x ∈ ℝ, x ≠ ${excludedValues.join(', ')}}`,
                inequality: excludedValues.length === 1 ?
                    `x ≠ ${excludedValues[0]}` :
                    excludedValues.map(v => `x ≠ ${v}`).join(' and '),
                verbal: excludedValues.length === 1 ?
                    `all real numbers except ${excludedValues[0]}` :
                    `all real numbers except ${excludedValues.join(', ')}`
            },
            domainReasoning: 'Denominator cannot equal zero',
            excludedValues: excludedValues,
            range: range,
            rangeReasoning: horizontalAsymptote !== undefined ?
                `Horizontal asymptote at y=${horizontalAsymptote} excludes that value from range` :
                'Analyze function behavior to determine range',
            horizontalAsymptote: horizontalAsymptote,
            category: 'rational'
        };
    }

    solveRadicalDomainRange(problem) {
        const { radicand, index, shift, reflection, equation } = problem.parameters;

        const isEvenRoot = (index === undefined || index === 2 || index % 2 === 0);

        if (!isEvenRoot) {
            // Odd root - no restrictions
            return {
                functionType: 'Radical (Odd Root)',
                equation: equation || problem.cleanInput,
                domain: '(-∞, ∞)',
                domainNotations: {
                    interval: '(-∞, ∞)',
                    setBuilder: '{x | x ∈ ℝ}',
                    verbal: 'all real numbers'
                },
                domainReasoning: 'Odd roots are defined for all real numbers',
                range: '(-∞, ∞)',
                rangeReasoning: 'Odd root function with no restrictions produces all reals',
                category: 'radical'
            };
        }

        // Even root - need radicand ≥ 0
        const inequality = `${radicand || 'radicand'} ≥ 0`;
        const domainBound = shift || 0;
        const domain = `[${domainBound}, ∞)`;

        let range;
        if (reflection) {
            range = shift !== undefined ? `(-∞, ${shift}]` : '(-∞, 0]';
        } else {
            range = shift !== undefined ? `[${shift}, ∞)` : '[0, ∞)';
        }

        return {
            functionType: 'Radical (Even Root)',
            equation: equation || problem.cleanInput,
            domain: domain,
            domainNotations: {
                interval: domain,
                setBuilder: `{x | ${inequality}}`,
                inequality: inequality,
                verbal: `x must be greater than or equal to ${domainBound}`
            },
            domainReasoning: 'Cannot take even root of negative number in real numbers',
            inequality: inequality,
            range: range,
            rangeReasoning: reflection ? 
                'Reflected square root - outputs non-positive values' :
                'Square root outputs non-negative values',
            category: 'radical'
        };
    }

    solveAbsoluteDomainRange(problem) {
        const { innerFunction, reflection, verticalShift, equation } = problem.parameters;

        let range;
        if (reflection) {
            const maxValue = verticalShift || 0;
            range = `(-∞, ${maxValue}]`;
        } else {
            const minValue = verticalShift || 0;
            range = `[${minValue}, ∞)`;
        }

        return {
            functionType: 'Absolute Value',
            equation: equation || problem.cleanInput,
            domain: '(-∞, ∞)',
            domainNotations: {
                interval: '(-∞, ∞)',
                setBuilder: '{x | x ∈ ℝ}',
                verbal: 'all real numbers'
            },
            domainReasoning: 'Absolute value is defined for all real numbers',
            range: range,
            rangeReasoning: reflection ?
                'Reflected absolute value - opens downward' :
                'Absolute value always non-negative unless transformed',
            transformations: {
                reflection: reflection || false,
                verticalShift: verticalShift || 0
            },
            category: 'absolute'
        };
    }

    solveExponentialDomainRange(problem) {
        const { base, coefficient, horizontalAsymptote, equation } = problem.parameters;

        const asymptote = horizontalAsymptote || 0;
        let range;
        
        if (coefficient > 0) {
            range = `(${asymptote}, ∞)`;
        } else {
            range = `(-∞, ${asymptote})`;
        }

        return {
            functionType: 'Exponential',
            equation: equation || problem.cleanInput,
            domain: '(-∞, ∞)',
            domainNotations: {
                interval: '(-∞, ∞)',
                setBuilder: '{x | x ∈ ℝ}',
                verbal: 'all real numbers'
            },
            domainReasoning: 'Exponential functions are defined for all real x-values',
            range: range,
            rangeReasoning: `Horizontal asymptote at y=${asymptote}; function approaches but never reaches this value`,
            horizontalAsymptote: asymptote,
            category: 'exponential'
        };
    }

    solveLogarithmicDomainRange(problem) {
        const { argument, base, shift, equation } = problem.parameters;

        const inequality = `${argument || 'argument'} > 0`;
        const domainBound = shift || 0;
        const domain = `(${domainBound}, ∞)`;

        return {
            functionType: 'Logarithmic',
            equation: equation || problem.cleanInput,
            domain: domain,
            domainNotations: {
                interval: domain,
                setBuilder: `{x | ${inequality}}`,
                inequality: inequality,
                verbal: `x must be greater than ${domainBound}`
            },
            domainReasoning: 'Logarithm requires strictly positive argument (cannot take log of zero or negative)',
            inequality: inequality,
            range: '(-∞, ∞)',
            rangeNotations: {
                interval: '(-∞, ∞)',
                setBuilder: '{y | y ∈ ℝ}',
                verbal: 'all real numbers'
            },
            rangeReasoning: 'Logarithmic functions can output any real number',
            category: 'logarithmic'
        };
    }

    solvePiecewiseDomainRange(problem) {
        const { pieces, equation } = problem.parameters;

        return {
            functionType: 'Piecewise',
            equation: equation || problem.cleanInput,
            domain: 'Union of all piece domains',
            range: 'Union of all piece ranges',
            approach: 'Find domain and range of each piece, then combine',
            steps: [
                'Identify domain of each piece from its condition',
                'Find range of each piece on its domain',
                'Take union of all domains',
                'Take union of all ranges',
                'Check boundary points carefully'
            ],
            category: 'piecewise'
        };
    }

    solveTrigDomainRange(problem) {
        const { trigFunction, equation } = problem.parameters;

        const trigDomainRange = {
            'sin': { domain: '(-∞, ∞)', range: '[-1, 1]' },
            'cos': { domain: '(-∞, ∞)', range: '[-1, 1]' },
            'tan': { domain: 'x ≠ π/2 + nπ', range: '(-∞, ∞)' },
            'sec': { domain: 'x ≠ π/2 + nπ', range: '(-∞, -1] ∪ [1, ∞)' },
            'csc': { domain: 'x ≠ nπ', range: '(-∞, -1] ∪ [1, ∞)' },
            'cot': { domain: 'x ≠ nπ', range: '(-∞, ∞)' }
        };

        const funcData = trigDomainRange[trigFunction] || { domain: 'varies', range: 'varies' };

        return {
            functionType: 'Trigonometric',
            specificFunction: trigFunction,
            equation: equation || problem.cleanInput,
            domain: funcData.domain,
            range: funcData.range,
            note: 'Transformations will modify these basic domain and range',
            category: 'trigonometric'
        };
    }

    solveCompositionDomainRange(problem) {
        const { outerFunc, innerFunc, equation } = problem.parameters;

        return {
            functionType: 'Composition',
            equation: equation || `(f∘g)(x) = f(g(x))`,
            domain: 'Intersection of two conditions',
            domainConditions: [
                'x must be in domain of g (inner function)',
                'g(x) must be in domain of f (outer function)'
            ],
            approach: 'Find both conditions and take their intersection',
            steps: [
                'Find domain of g',
                'Find domain of f',
                'Determine which x-values make g(x) valid input for f',
                'Take intersection of both conditions',
                'Express final domain'
            ],
            category: 'composition'
        };
    }

    solveInverseDomainRange(problem) {
        const { originalDomain, originalRange, equation } = problem.parameters;

        return {
            functionType: 'Inverse Function',
            equation: equation || 'f⁻¹(x)',
            domain: originalRange || 'Range of original function',
            range: originalDomain || 'Domain of original function',
            relationship: 'Domain and range swap for inverse functions',
            note: 'f⁻¹ undoes f, so inputs and outputs are reversed',
            category: 'inverse'
        };
    }

    solveGraphicalDomainRange(problem) {
        const { graphDescription, endpoints, asymptotes, equation } = problem.parameters;

        return {
            functionType: 'From Graph',
            graphDescription: graphDescription || 'Analyze the given graph',
            domain: 'Project graph onto x-axis',
            range: 'Project graph onto y-axis',
            steps: [
                'Look at graph from left to right for domain',
                'Find leftmost and rightmost x-values',
                'Check for vertical asymptotes (exclude from domain)',
                'Look at graph from bottom to top for range',
                'Find lowest and highest y-values',
                'Check for horizontal asymptotes or gaps',
                'Note open vs closed circles'
            ],
            visualCues: {
                'Open circle': 'Value NOT included',
                'Closed circle': 'Value IS included',
                'Arrow': 'Continues to infinity',
                'Vertical asymptote': 'Domain excludes this x-value',
                'Horizontal asymptote': 'Range may exclude this y-value'
            },
            category: 'graphical'
        };
    }

    solveContextualDomainRange(problem) {
        const { context, mathematicalDomain, mathematicalRange, constraints } = problem.parameters;

        return {
            functionType: 'Contextual/Applied',
            context: context || 'Real-world situation',
            mathematicalDomain: mathematicalDomain || 'From algebraic analysis',
            mathematicalRange: mathematicalRange || 'From algebraic analysis',
            realWorldDomain: 'Restricted by practical constraints',
            realWorldRange: 'Restricted by physical possibilities',
            approach: 'Start with mathematical domain/range, then apply context restrictions',
            commonRestrictions: [
                'Time cannot be negative',
                'Quantities must be non-negative',
                'Discrete values only (integers)',
                'Physical boundaries or limits',
                'Practical minimum/maximum values'
            ],
            category: 'contextual'
        };
    }

    // HELPER METHODS

    buildIntervalExcluding(excludedValues) {
        const sorted = [...excludedValues].sort((a, b) => a - b);
        const intervals = [];
        
        intervals.push(`(-∞, ${sorted[0]})`);
        
        for (let i = 0; i < sorted.length - 1; i++) {
            intervals.push(`(${sorted[i]}, ${sorted[i + 1]})`);
        }
        
        intervals.push(`(${sorted[sorted.length - 1]}, ∞)`);
        
        return intervals.join(' ∪ ');
    }

    // MAIN SOLVER METHOD

    solveDomainRangeProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseDomainRangeProblem(equation, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveDomainRangeProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateDomainRangeSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateDomainRangeGraphData();

            // Generate workbook
            this.generateDomainRangeWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                domain: this.currentSolution?.domain,
                range: this.currentSolution?.range
            };

        } catch (error) {
            throw new Error(`Failed to solve domain/range problem: ${error.message}`);
        }
    }

    parseDomainRangeProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.domainRangeTypes[problemType]) {
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

        // Auto-detect problem type
        for (const [type, config] of Object.entries(this.domainRangeTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    return {
                        originalInput: equation || scenario,
                        cleanInput: cleanInput,
                        type: type,
                        scenario: scenario,
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default to polynomial if no type detected
        return {
            originalInput: equation || 'Domain and Range problem',
            cleanInput: cleanInput,
            type: 'polynomial',
            scenario: scenario,
            parameters: { ...parameters },
            context: { ...context },
            parsedAt: new Date().toISOString()
        };
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/≠/g, '!=')
            .replace(/\*\*/g, '^')
            .trim();
    }

    solveDomainRangeProblem_Internal(problem) {
        const solver = this.domainRangeTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for domain/range problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // STEP GENERATION

    generateDomainRangeSteps(problem, solution) {
        let baseSteps = this.generateBaseDomainRangeSteps(problem, solution);

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

    generateBaseDomainRangeSteps(problem, solution) {
        const { type } = problem;
        const category = this.domainRangeTypes[type]?.category;

        switch(category) {
            case 'polynomial':
                return this.generatePolynomialSteps(problem, solution);
            case 'rational':
                return this.generateRationalSteps(problem, solution);
            case 'radical':
                return this.generateRadicalSteps(problem, solution);
            case 'logarithmic':
                return this.generateLogarithmicSteps(problem, solution);
            case 'composition':
                return this.generateCompositionSteps(problem, solution);
            default:
                return this.generateGenericDomainRangeSteps(problem, solution);
        }
    }

    generatePolynomialSteps(problem, solution) {
        const steps = [];

        // Step 1: Identify function type
        steps.push({
            stepNumber: 1,
            step: 'Identify function type',
            description: 'Recognize this as a polynomial function',
            expression: solution.equation,
            reasoning: 'Polynomials have specific domain and range properties',
            goalStatement: 'Determine domain and range using polynomial rules'
        });

        // Step 2: Find domain
        steps.push({
            stepNumber: 2,
            step: 'Find domain',
            description: 'Determine valid input values',
            domain: solution.domain,
            reasoning: solution.domainReasoning,
            algebraicRule: 'Polynomials are defined for all real numbers',
            conclusion: 'Domain: (-∞, ∞)'
        });

        // Step 3: Find range
        steps.push({
            stepNumber: 3,
            step: 'Find range',
            description: 'Determine possible output values',
            approach: 'Consider degree and leading coefficient',
            range: solution.range,
            reasoning: solution.rangeReasoning,
            finalAnswer: true
        });

        return steps;
    }

    generateRationalSteps(problem, solution) {
        const steps = [];

        // Step 1: Identify function type
        steps.push({
            stepNumber: 1,
            step: 'Identify function type',
            description: 'Recognize this as a rational function (fraction)',
            expression: solution.equation,
            reasoning: 'Rational functions have restrictions where denominator equals zero',
            goalStatement: 'Find where denominator = 0 to determine domain'
        });

        // Step 2: Find domain restrictions
        steps.push({
            stepNumber: 2,
            step: 'Set denominator ≠ 0',
            description: 'Identify values that make denominator zero',
            approach: 'Set denominator equal to zero and solve',
            excludedValues: solution.excludedValues,
            reasoning: 'Division by zero is undefined',
            algebraicRule: 'Domain excludes zeros of denominator'
        });

        // Step 3: Express domain
        steps.push({
            stepNumber: 3,
            step: 'Express domain',
            description: 'Write domain excluding the restricted values',
            domain: solution.domain,
            notations: solution.domainNotations,
            reasoning: 'All real numbers except where denominator = 0'
        });

        // Step 4: Find range
        steps.push({
            stepNumber: 4,
            step: 'Find range',
            description: 'Determine possible output values',
            approach: 'Find horizontal asymptote if present',
            horizontalAsymptote: solution.horizontalAsymptote,
            range: solution.range,
            reasoning: solution.rangeReasoning,
            finalAnswer: true
        });

        return steps;
    }

    generateRadicalSteps(problem, solution) {
        const steps = [];

        // Step 1: Identify function type
        steps.push({
            stepNumber: 1,
            step: 'Identify function type',
            description: 'Recognize this as a radical function',
            expression: solution.equation,
            reasoning: 'Radical functions have domain restrictions for even roots',
            goalStatement: 'Set up inequality for radicand'
        });

        // Step 2: Set up inequality
        steps.push({
            stepNumber: 2,
            step: 'Set radicand ≥ 0',
            description: 'For even roots, set expression inside root ≥ 0',
            inequality: solution.inequality,
            reasoning: 'Cannot take even root of negative in real numbers',
            algebraicRule: 'Radicand must be non-negative for even roots'
        });

        // Step 3: Solve inequality
        steps.push({
            stepNumber: 3,
            step: 'Solve inequality',
            description: 'Find values of x that satisfy the inequality',
            solving: 'Solve for x',
            domain: solution.domain,
            notations: solution.domainNotations,
            reasoning: 'These x-values produce non-negative radicand'
        });

        // Step 4: Find range
        steps.push({
            stepNumber: 4,
            step: 'Find range',
            description: 'Determine possible output values',
            approach: 'Consider basic range and transformations',
            range: solution.range,
            reasoning: solution.rangeReasoning,
            finalAnswer: true
        });

        return steps;
    }

    generateLogarithmicSteps(problem, solution) {
        const steps = [];

        // Step 1: Identify function type
        steps.push({
            stepNumber: 1,
            step: 'Identify function type',
            description: 'Recognize this as a logarithmic function',
            expression: solution.equation,
            reasoning: 'Logarithms require strictly positive arguments',
            goalStatement: 'Set argument > 0 to find domain'
        });

        // Step 2: Set up inequality
        steps.push({
            stepNumber: 2,
            step: 'Set argument > 0',
            description: 'Set expression inside log strictly greater than zero',
            inequality: solution.inequality,
            reasoning: 'Cannot take log of zero or negative numbers',
            algebraicRule: 'Argument of logarithm must be positive',
            note: 'Notice: > not ≥ (strictly greater than)'
        });

        // Step 3: Solve inequality
        steps.push({
            stepNumber: 3,
            step: 'Solve inequality',
            description: 'Find values of x that make argument positive',
            solving: 'Solve for x',
            domain: solution.domain,
            notations: solution.domainNotations,
            reasoning: 'These x-values produce positive argument'
        });

        // Step 4: State range
        steps.push({
            stepNumber: 4,
            step: 'State range',
            description: 'Range of logarithmic functions',
            range: solution.range,
            reasoning: solution.rangeReasoning,
            note: 'Logarithms can output any real number',
            finalAnswer: true
        });

        return steps;
    }

    generateCompositionSteps(problem, solution) {
        const steps = [];

        // Step 1: Understand composition
        steps.push({
            stepNumber: 1,
            step: 'Understand composition',
            description: 'Recognize (f∘g)(x) = f(g(x))',
            expression: solution.equation,
            reasoning: 'Composition means putting one function inside another',
            goalStatement: 'Find domain by checking both functions'
        });

        // Step 2: Find domain of g
        steps.push({
            stepNumber: 2,
            step: 'Find domain of g (inner function)',
            description: 'Determine where g(x) is defined',
            approach: 'Apply domain rules for g',
            reasoning: 'x must be in domain of g first'
        });

        // Step 3: Check compatibility
        steps.push({
            stepNumber: 3,
            step: 'Check g(x) values',
            description: 'Determine if g(x) outputs are in domain of f',
            approach: 'Find which g(x) values are valid inputs for f',
            reasoning: 'The output of g must be acceptable input for f'
        });

        // Step 4: Take intersection
        steps.push({
            stepNumber: 4,
            step: 'Find final domain',
            description: 'Take intersection of both conditions',
            domain: solution.domain,
            conditions: solution.domainConditions,
            reasoning: 'Both conditions must be satisfied simultaneously',
            finalAnswer: true
        });

        return steps;
    }

    generateGenericDomainRangeSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Domain and Range Analysis',
            description: 'Analyze the given function for domain and range',
            expression: problem.equation || solution.equation,
            domain: solution.domain,
            range: solution.range,
            approach: solution.approach || 'Apply appropriate analysis method',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS (Reuse from linear workbook with adaptations)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            // Multiple explanation formats
            explanations: {
                conceptual: this.getConceptualExplanationDR(step, problem),
                procedural: this.getProceduralExplanationDR(step),
                visual: this.getVisualExplanationDR(step, problem),
                algebraic: this.getAlgebraicExplanationDR(step)
            },

            // Difficulty-adapted explanations
            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            // Learning support
            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyDR(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        // Add thinking prompts if enabled
        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsDR(step);
        }

        // Add self-check questions if enabled
        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionDR(step);
        }

        // Add real-world connections if enabled
        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionDR(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationDR(step, problem) {
        const conceptualExplanations = {
            'Identify function type': 'Understanding the type of function helps us know what restrictions to look for',
            'Find domain': 'Domain is all x-values we can safely put into the function without mathematical errors',
            'Set denominator ≠ 0': 'Division by zero is undefined, so we must exclude these x-values',
            'Set radicand ≥ 0': 'We cannot take even roots of negative numbers in real number system',
            'Set argument > 0': 'Logarithms are only defined for positive numbers',
            'Solve inequality': 'Finding which x-values satisfy our restriction gives us the domain',
            'Find range': 'Range is all possible y-values the function can output',
            'Express domain': 'Writing domain clearly using standard notation helps communicate our answer'
        };

        return conceptualExplanations[step.step] || 'This step helps us understand the function\'s behavior';
    }

    getProceduralExplanationDR(step) {
        const proceduralSteps = {
            'Set denominator ≠ 0': '1. Identify denominator\n2. Set it equal to zero\n3. Solve equation\n4. Exclude these values',
            'Set radicand ≥ 0': '1. Identify radicand\n2. Set it ≥ 0\n3. Solve inequality\n4. Express as interval',
            'Set argument > 0': '1. Identify log argument\n2. Set it > 0\n3. Solve inequality\n4. Express domain',
            'Solve inequality': '1. Isolate variable\n2. Maintain inequality direction\n3. Express solution\n4. Verify endpoints'
        };

        return proceduralSteps[step.step] || 'Follow standard procedure for this step';
    }

    getVisualExplanationDR(step, problem) {
        const visualExplanations = {
            'Find domain': 'Picture a number line and shade the regions where x is allowed',
            'Set radicand ≥ 0': 'Imagine the number line: we need the shaded region where the expression is non-negative',
            'Find range': 'Picture the graph and see how high and low it goes on the y-axis',
            'Express domain': 'Use brackets [ ] for included values, parentheses ( ) for excluded values'
        };

        return visualExplanations[step.step] || 'Visualize what this step represents on a graph';
    }

    getAlgebraicExplanationDR(step) {
        const algebraicRules = {
            'Set denominator ≠ 0': 'Domain restriction: denominator Q(x) ≠ 0',
            'Set radicand ≥ 0': 'For ⁿ√f(x) where n is even: f(x) ≥ 0',
            'Set argument > 0': 'For log(f(x)): f(x) > 0',
            'Solve inequality': 'Apply algebraic properties preserving inequality direction'
        };

        return algebraicRules[step.step] || 'Apply formal algebraic principles';
    }

    identifyKeyVocabularyDR(step) {
        const vocabulary = {
            'Identify function type': ['function', 'polynomial', 'rational', 'radical', 'logarithmic'],
            'Find domain': ['domain', 'input', 'x-values', 'real numbers'],
            'Set denominator ≠ 0': ['denominator', 'division', 'undefined', 'zero'],
            'Set radicand ≥ 0': ['radicand', 'square root', 'even root', 'non-negative'],
            'Set argument > 0': ['argument', 'logarithm', 'positive'],
            'Solve inequality': ['inequality', 'interval', 'endpoint'],
            'Find range': ['range', 'output', 'y-values']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPromptsDR(step) {
        return {
            before: 'What am I trying to find in this step?',
            during: 'What mathematical rules apply here?',
            after: 'Does my answer make sense? Can I verify it?'
        };
    }

    generateSelfCheckQuestionDR(step) {
        const questions = {
            'Find domain': 'Did I check all possible restrictions (division, roots, logs)?',
            'Set denominator ≠ 0': 'Did I solve the equation correctly and exclude the right values?',
            'Set radicand ≥ 0': 'Did I use ≥ (not just >) for even roots?',
            'Set argument > 0': 'Did I use > (not ≥) for logarithms?',
            'Solve inequality': 'Did I reverse the inequality when multiplying/dividing by negatives?',
            'Express domain': 'Did I use correct notation with proper brackets/parentheses?',
            'Find range': 'Did I consider the function\'s behavior and transformations?'
        };

        return questions[step.step] || 'Does this step make logical sense?';
    }

    findRealWorldConnectionDR(step, problem) {
        const connections = {
            'Find domain': 'Like determining what inputs are valid for a machine - some inputs might break it',
            'Set radicand ≥ 0': 'Like knowing you can\'t have negative length or negative quantity of items',
            'Find range': 'Like determining what outcomes are possible from a process'
        };

        return connections[step.step] || 'This mathematical concept applies to real-world constraints';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationDR(step, problem),
                analogy: this.findRelevantAnalogy(step, problem),
                simpleLanguage: this.convertToSimpleLanguageDR(step.description),
                visualization: this.suggestVisualizationDR(step)
            }
        }));
    }

    generateELI5ExplanationDR(step, problem) {
        const ELI5Explanations = {
            'Identify function type': "We need to figure out what kind of math problem this is, like identifying if a vehicle is a car, truck, or bike",
            'Find domain': "We're figuring out which numbers we're allowed to use. It's like knowing which toys are safe to play with",
            'Set denominator ≠ 0': "We can't divide by zero - it's like trying to share cookies with zero friends. It doesn't make sense!",
            'Set radicand ≥ 0': "We can't take the square root of a negative number. It's like trying to find what number times itself makes -4. There isn't one!",
            'Set argument > 0': "Logarithms only work with positive numbers, like counting - you can't have negative amounts of things",
            'Solve inequality': "We're finding which numbers work, like finding which kids are tall enough for a ride",
            'Find range': "We're figuring out what answers we can get out, like seeing what prizes you can win from a game",
            'Express domain': "We're writing our answer using special symbols - brackets mean include, parentheses mean don't include"
        };

        return ELI5Explanations[step.step] || "We're solving part of the puzzle to find our answer!";
    }

    convertToSimpleLanguageDR(description) {
        if (!description) return '';

        const simplifications = {
            'domain': 'allowed inputs',
            'range': 'possible outputs',
            'radicand': 'number inside the square root',
            'argument': 'number inside the log',
            'denominator': 'bottom of the fraction',
            'numerator': 'top of the fraction',
            'inequality': 'greater than or less than statement',
            'interval': 'range of numbers',
            'restriction': 'rule about what we can\'t use',
            'undefined': 'doesn\'t work',
            'asymptote': 'line the graph gets close to but never touches'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualizationDR(step) {
        const visualizations = {
            'Find domain': 'Draw a number line and color in the parts where x is allowed',
            'Set denominator ≠ 0': 'Draw a number line with X marks where we can\'t go',
            'Set radicand ≥ 0': 'Shade the positive side of the number line starting from where the radicand equals zero',
            'Find range': 'Draw the y-axis and color in the heights the graph can reach',
            'Express domain': 'Draw a number line with [ ] for included and ( ) for excluded'
        };

        return visualizations[step.step] || 'Draw a picture to represent this concept';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeDR(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategyDR(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeDR(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.domain || currentStep.conclusion || 'completed this step'}`,
            nextGoal: `Next: ${nextStep.description}`,
            why: `This is necessary to ${nextStep.step.toLowerCase()}`,
            howItHelps: `This brings us closer to finding the complete domain and range`
        };
    }

    explainStepStrategyDR(nextStep) {
        return `For "${nextStep.step}", we ${nextStep.description?.toLowerCase() || 'proceed with the analysis'}`;
    }

    addErrorPrevention(step, problemType) {
        const category = this.domainRangeTypes[problemType]?.category || 'polynomial';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsDR(step, problemType),
                checkPoints: this.generateCheckPointsDR(step),
                warningFlags: this.identifyWarningFlagsDR(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionDR(step),
                expectedResult: this.describeExpectedResultDR(step),
                troubleshooting: this.generateTroubleshootingTipsDR(step)
            }
        };
    }

    generatePreventionTipsDR(step, problemType) {
        const tips = {
            'Set denominator ≠ 0': [
                'Make sure you set denominator equal to zero, not numerator',
                'Simplify first to identify any common factors (holes)',
                'Exclude ALL values that make denominator zero'
            ],
            'Set radicand ≥ 0': [
                'Use ≥ not > for even roots (include zero)',
                'Solve the inequality carefully',
                'Check if it\'s an odd root (no restriction needed)'
            ],
            'Set argument > 0': [
                'Use > not ≥ for logarithms (strictly positive)',
                'Make sure you identify the complete argument',
                'Remember: can\'t take log of zero'
            ],
            'Express domain': [
                'Infinity ALWAYS uses parentheses, never brackets',
                'Use [ ] to include, ( ) to exclude endpoints',
                'Double-check union notation ∪ between intervals'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check your work'];
    }

    generateCheckPointsDR(step) {
        return [
            'Did I identify the restriction correctly?',
            'Did I solve the equation/inequality correctly?',
            'Did I use proper notation?',
            'Can I test a value to verify?'
        ];
    }

    identifyWarningFlagsDR(step, problemType) {
        const warnings = {
            rational: step.step === 'Set denominator ≠ 0' ?
                ['Don\'t forget to simplify first', 'Check for holes vs asymptotes'] : [],
            radical: step.step === 'Set radicand ≥ 0' ?
                ['Use ≥ not >', 'Check if root is odd (no restriction)'] : [],
            logarithmic: step.step === 'Set argument > 0' ?
                ['Use > not ≥', 'Zero is NOT allowed'] : [],
            notation: ['Infinity uses ( ), never [ ]']
        };

        const category = this.domainRangeTypes[problemType]?.category || 'polynomial';
        return warnings[category] || [];
    }

    describeExpectedResultDR(step) {
        const expectations = {
            'Find domain': 'A set or interval of allowed x-values',
            'Set denominator ≠ 0': 'Equation showing which x-values to exclude',
            'Set radicand ≥ 0': 'Inequality showing where radicand is non-negative',
            'Set argument > 0': 'Inequality showing where argument is positive',
            'Solve inequality': 'Interval notation or set showing solution',
            'Express domain': 'Clean notation: interval, set-builder, or inequality',
            'Find range': 'A set or interval of possible y-values'
        };

        return expectations[step.step] || 'Progress toward complete solution';
    }

    generateTroubleshootingTipsDR(step) {
        return [
            'If unsure, try testing a value',
            'Graph the function if possible',
            'Review the definition of domain/range',
            'Check your notation carefully',
            'Verify boundary values'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsDR(step, problem),
                subSteps: this.breakIntoSubStepsDR(step),
                hints: this.generateProgressiveHintsDR(step, problem),
                practiceVariation: this.generatePracticeVariationDR(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessDR(step),
                decisionPoints: this.identifyDecisionPointsDR(step),
                alternativeApproaches: this.suggestAlternativeMethodsDR(step, problem)
            }
        }));
    }

    generateGuidingQuestionsDR(step, problem) {
        const questions = {
            'Identify function type': [
                'What mathematical operations are in this function?',
                'Are there fractions? Roots? Logarithms?',
                'What type of function is this?'
            ],
            'Find domain': [
                'What could go wrong if I put certain x-values in?',
                'Are there any restrictions?',
                'Can x be any real number?'
            ],
            'Set denominator ≠ 0': [
                'What happens if the denominator equals zero?',
                'How do I find when denominator = 0?',
                'Which x-values should I exclude?'
            ],
            'Set radicand ≥ 0': [
                'Can I take the square root of a negative?',
                'When is the radicand non-negative?',
                'What inequality should I solve?'
            ],
            'Find range': [
                'What is the minimum/maximum y-value?',
                'Are there any y-values the function can\'t reach?',
                'What does the graph look like?'
            ]
        };

        return questions[step.step] || ['What is the goal?', 'How do I achieve it?'];
    }

    breakIntoSubStepsDR(step) {
        const subSteps = {
            'Set denominator ≠ 0': [
                'Write down the denominator',
                'Set denominator equal to zero',
                'Solve the equation',
                'List excluded values',
                'Write domain excluding these'
            ],
            'Set radicand ≥ 0': [
                'Identify the radicand',
                'Write inequality: radicand ≥ 0',
                'Solve the inequality',
                'Express as interval notation',
                'Verify by testing a value'
            ],
            'Set argument > 0': [
                'Identify the log argument',
                'Write inequality: argument > 0',
                'Solve the inequality',
                'Express domain',
                'Note: range is all reals'
            ]
        };

        return subSteps[step.step] || ['Understand the goal', 'Apply the method', 'Verify'];
    }

    generateProgressiveHintsDR(step, problem) {
        const category = this.domainRangeTypes[problem.type]?.category || 'polynomial';
        const hintSet = this.hints[category];

        if (hintSet) {
            return hintSet;
        }

        return {
            level1: 'What type of function is this?',
            level2: 'What restrictions apply to this type?',
            level3: 'Set up the appropriate equation or inequality',
            level4: 'Solve and express in proper notation'
        };
    }

    generatePracticeVariationDR(step, problem) {
        return {
            similarProblem: 'Try another function of the same type',
            practiceHint: 'Start with simpler examples, then increase complexity',
            extension: 'Once comfortable, try combined restrictions'
        };
    }

    explainThinkingProcessDR(step) {
        return {
            observe: 'What do I see in this function?',
            identify: 'What type of function is this?',
            plan: 'What restrictions apply?',
            execute: 'How do I find domain and range?',
            verify: 'Does my answer make sense?'
        };
    }

    identifyDecisionPointsDR(step) {
        return [
            'Which notation should I use?',
            'Are there multiple restrictions to consider?',
            'Should I graph to verify?'
        ];
    }

    suggestAlternativeMethodsDR(step, problem) {
        const alternatives = {
            'Find domain': [
                'Algebraic analysis',
                'Graphical inspection',
                'Testing values'
            ],
            'Find range': [
                'Graphing approach',
                'Algebraic solving for x',
                'Using calculus to find extrema'
            ]
        };

        return alternatives[step.step] || ['Multiple valid approaches exist'];
    }

    // GRAPH GENERATION

    generateDomainRangeGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        this.graphData = {
            type: 'domain_range_visualization',
            domain: this.currentSolution.domain,
            range: this.currentSolution.range,
            functionType: this.currentSolution.functionType,
            visualization: this.createDomainRangeVisualization()
        };
    }

    createDomainRangeVisualization() {
        return {
            domainNumberLine: 'Number line showing domain',
            rangeNumberLine: 'Number line showing range',
            graph: 'Function graph with domain and range highlighted',
            description: 'Visual representation of domain and range'
        };
    }

    // WORKBOOK GENERATION

    generateDomainRangeWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createNotationGuideSection(),
            this.createEnhancedStepsSection(),
            this.createDomainRangeLessonSection(),
            this.createSolutionSection(),
            this.createNotationComparisonSection(),
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
            title: 'Enhanced Domain and Range Mathematical Workbook',
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
            ['Problem Type', this.domainRangeTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.domainRangeTypes[this.currentProblem.type]?.category || 'domain_range'],
            ['Function', this.currentSolution?.equation || this.currentProblem.cleanInput],
            ['Task', 'Find domain and range']
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

    createNotationGuideSection() {
        const guideData = [
            ['Notation Systems', ''],
            ['', ''],
            ['Interval Notation', ''],
            ['(a, b)', 'Open interval - excludes both endpoints'],
            ['[a, b]', 'Closed interval - includes both endpoints'],
            ['[a, b)', 'Half-open - includes a, excludes b'],
            ['(-∞, b)', 'All numbers less than b'],
            ['[a, ∞)', 'All numbers greater than or equal to a'],
            ['', ''],
            ['Set-Builder Notation', ''],
            ['{x | x > 5}', 'All x greater than 5'],
            ['{x | x ∈ ℝ, x ≠ 0}', 'All real numbers except 0'],
            ['', ''],
            ['Important Rules', ''],
            ['', 'Infinity always uses parentheses ( ), never brackets [ ]'],
            ['', 'Use ∪ (union) to combine multiple intervals'],
            ['', 'ℝ represents all real numbers']
        ];

        return {
            title: 'Notation Guide',
            type: 'notation',
            data: guideData
        };
    }

    createDomainRangeLessonSection() {
        const { type } = this.currentProblem;
        const category = this.domainRangeTypes[type]?.category;

        const lessonData = [
            ['Key Concepts', ''],
            ['Domain', 'Set of all valid input values (x-values)'],
            ['Range', 'Set of all possible output values (y-values)'],
            ['', ''],
            ['Function Type:', this.currentSolution?.functionType || category],
            ['', '']
        ];

        // Add type-specific information
        if (category === 'polynomial') {
            lessonData.push(['Domain Rule', 'Always all real numbers']);
            lessonData.push(['Range Rule', 'Depends on degree and leading coefficient']);
        } else if (category === 'rational') {
            lessonData.push(['Domain Rule', 'Exclude values where denominator = 0']);
            lessonData.push(['Range Rule', 'Often excludes horizontal asymptote value']);
        } else if (category === 'radical') {
            lessonData.push(['Domain Rule', 'Even roots: radicand ≥ 0']);
            lessonData.push(['Range Rule', 'Basic square root: [0, ∞), modified by transformations']);
        } else if (category === 'logarithmic') {
            lessonData.push(['Domain Rule', 'Argument must be > 0 (strictly positive)']);
            lessonData.push(['Range Rule', 'Always all real numbers']);
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
            ['Domain', this.currentSolution.domain],
            ['Domain (verbal)', this.currentSolution.domainNotations?.verbal || this.currentSolution.domainReasoning],
            ['', ''],
            ['Range', this.currentSolution.range],
            ['Range (verbal)', this.currentSolution.rangeNotations?.verbal || this.currentSolution.rangeReasoning]
        ];

        if (this.currentSolution.excludedValues) {
            solutionData.push(['', '']);
            solutionData.push(['Excluded Values', this.currentSolution.excludedValues.join(', ')]);
        }

        if (this.currentSolution.horizontalAsymptote !== undefined) {
            solutionData.push(['Horizontal Asymptote', `y = ${this.currentSolution.horizontalAsymptote}`]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createNotationComparisonSection() {
        if (!this.currentSolution?.domainNotations) return null;

        const comparisonData = [
            ['Notation Type', 'Domain Expression'],
            ['', '']
        ];

        const notations = this.currentSolution.domainNotations;
        if (notations.interval) {
            comparisonData.push(['Interval', notations.interval]);
        }
        if (notations.setBuilder) {
            comparisonData.push(['Set-Builder', notations.setBuilder]);
        }
        if (notations.inequality) {
            comparisonData.push(['Inequality', notations.inequality]);
        }
        if (notations.verbal) {
            comparisonData.push(['Verbal', notations.verbal]);
        }

        return {
            title: 'Notation Comparison',
            type: 'notation_comparison',
            data: comparisonData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution) return null;

        const verificationData = [
            ['Verification Method', 'Test values and boundary points'],
            ['', '']
        ];

        if (this.currentSolution.domain !== '(-∞, ∞)') {
            verificationData.push(['Test 1', 'Choose value inside domain - should work']);
            if (this.currentSolution.excludedValues && this.currentSolution.excludedValues.length > 0) {
                verificationData.push(['Test 2', `Try excluded value (${this.currentSolution.excludedValues[0]}) - should be undefined`]);
            }
        }

        verificationData.push(['', '']);
        verificationData.push(['Graphical Check', 'Graph function and visually confirm domain and range']);
        verificationData.push(['Logical Check', 'Verify domain restrictions make mathematical sense']);

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const category = this.domainRangeTypes[this.currentProblem.type]?.category;
        const applications = Object.values(this.realWorldProblems).filter(app => {
            return true; // Show all for now, can filter by category later
        }).slice(0, 2);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Example ${index + 1}`, app.scenario]);
            appData.push(['Function', app.function]);
            appData.push(['Mathematical Domain', app.mathematicalDomain]);
            appData.push(['Real-World Domain', app.realWorldDomain]);
            appData.push(['Reasoning', app.domainReasoning]);
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

        const notes = this.generateDomainRangePedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateDomainRangeAlternativeMethods(this.currentProblem.type);

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
        const category = this.domainRangeTypes[this.currentProblem.type]?.category;
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

    generateDomainRangePedagogicalNotes(problemType) {
        const category = this.domainRangeTypes[problemType]?.category;

        const pedagogicalDatabase = {
            polynomial: {
                objectives: [
                    'Recognize polynomial domain is always all reals',
                    'Determine range using degree and leading coefficient',
                    'Find vertex or extrema for range'
                ],
                keyConcepts: [
                    'Polynomials have no inherent restrictions',
                    'Even degree: range bounded on one side',
                    'Odd degree: range is all reals'
                ],
                prerequisites: [
                    'Understanding polynomial functions',
                    'Graphing parabolas',
                    'End behavior analysis'
                ],
                commonDifficulties: [
                    'Trying to find domain restrictions where none exist',
                    'Confusing even and odd degree behavior',
                    'Not finding vertex for range'
                ],
                teachingStrategies: [
                    'Emphasize polynomials are "friendly" - no restrictions',
                    'Use graphs to show range visually',
                    'Connect to end behavior'
                ],
                extensions: [
                    'Rational functions with restrictions',
                    'Transformations affecting range',
                    'Inverse function domain/range swap'
                ],
                assessment: [
                    'Can student identify domain immediately?',
                    'Can student find range from vertex or end behavior?',
                    'Can student explain why no restrictions?'
                ]
            },
            rational: {
                objectives: [
                    'Find domain by excluding zeros of denominator',
                    'Determine range using asymptotes',
                    'Distinguish holes from asymptotes'
                ],
                keyConcepts: [
                    'Division by zero is undefined',
                    'Vertical asymptotes at excluded domain values',
                    'Horizontal asymptotes affect range'
                ],
                prerequisites: [
                    'Solving equations',
                    'Understanding asymptotes',
                    'Simplifying rational expressions'
                ],
                commonDifficulties: [
                    'Setting numerator = 0 instead of denominator',
                    'Forgetting to exclude values',
                    'Not simplifying to find holes'
                ],
                teachingStrategies: [
                    'Emphasize division by zero prohibition',
                    'Use graphing to show asymptotes',
                    'Practice simplifying first'
                ],
                extensions: [
                    'Oblique asymptotes',
                    'Multiple restrictions',
                    'Applied problems'
                ],
                assessment: [
                    'Can student find denominator zeros?',
                    'Can student distinguish holes vs asymptotes?',
                    'Can student find horizontal asymptote?'
                ]
            },
            radical: {
                objectives: [
                    'Determine domain by solving radicand ≥ 0',
                    'Distinguish even vs odd roots',
                    'Find range considering transformations'
                ],
                keyConcepts: [
                    'Even roots require non-negative radicand',
                    'Odd roots have no restrictions',
                    'Basic square root range: [0, ∞)'
                ],
                prerequisites: [
                    'Solving inequalities',
                    'Understanding square roots',
                    'Even vs odd concepts'
                ],
                commonDifficulties: [
                    'Using > instead of ≥',
                    'Applying restriction to odd roots',
                    'Sign errors in solving inequality'
                ],
                teachingStrategies: [
                    'Emphasize "even root of negative doesn\'t exist"',
                    'Practice inequality solving',
                    'Use number line visualization'
                ],
                extensions: [
                    'Rational exponents',
                    'Compositions with radicals',
                    'Complex radicands'
                ],
                assessment: [
                    'Can student set up correct inequality?',
                    'Can student solve inequality?',
                    'Can student identify odd vs even roots?'
                ]
            },
            logarithmic: {
                objectives: [
                    'Find domain by solving argument > 0',
                    'Recognize range is always all reals',
                    'Distinguish > from ≥ for logs'
                ],
                keyConcepts: [
                    'Logs require strictly positive arguments',
                    'Cannot take log of zero or negative',
                    'Range of log is all real numbers'
                ],
                prerequisites: [
                    'Understanding logarithms',
                    'Solving inequalities',
                    'Exponential functions'
                ],
                commonDifficulties: [
                    'Using ≥ instead of >',
                    'Thinking range is restricted',
                    'Not identifying full argument'
                ],
                teachingStrategies: [
                    'Emphasize strictly positive (> not ≥)',
                    'Connect to inverse of exponential',
                    'Use graphs to show range'
                ],
                extensions: [
                    'Change of base',
                    'Logarithmic equations',
                    'Applied problems'
                ],
                assessment: [
                    'Can student set up argument > 0?',
                    'Does student use > not ≥?',
                    'Can student state range confidently?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Find domain and range'],
            keyConcepts: ['Domain: inputs, Range: outputs'],
            prerequisites: ['Basic function understanding'],
            commonDifficulties: ['Various challenges'],
            teachingStrategies: ['Systematic approach'],
            extensions: ['More complex functions'],
            assessment: ['Check understanding of concepts']
        };
    }

    generateDomainRangeAlternativeMethods(problemType) {
        const category = this.domainRangeTypes[problemType]?.category;

        const alternativeDatabase = {
            rational: {
                primaryMethod: 'Algebraic - set denominator ≠ 0',
                methods: [
                    {
                        name: 'Graphical Method',
                        description: 'Graph function and observe domain visually'
                    },
                    {
                        name: 'Test Values',
                        description: 'Try various x-values to see which work'
                    },
                    {
                        name: 'Factor First',
                        description: 'Factor to identify holes vs asymptotes'
                    }
                ],
                comparison: 'Algebraic is most systematic; graphical provides visual confirmation; factoring reveals structure'
            },
            radical: {
                primaryMethod: 'Solve inequality radicand ≥ 0',
                methods: [
                    {
                        name: 'Number Line Method',
                        description: 'Test regions on number line to find where radicand ≥ 0'
                    },
                    {
                        name: 'Graphical Approach',
                        description: 'Graph radicand and see where it\'s above x-axis'
                    },
                    {
                        name: 'Critical Points',
                        description: 'Find where radicand = 0, then test intervals'
                    }
                ],
                comparison: 'Inequality method is most direct; number line helps visualization; graphing confirms answer'
            },
            logarithmic: {
                primaryMethod: 'Solve inequality argument > 0',
                methods: [
                    {
                        name: 'Factor Approach',
                        description: 'Factor argument and analyze sign'
                    },
                    {
                        name: 'Graphical',
                        description: 'Graph argument and see where positive'
                    },
                    {
                        name: 'Test Values',
                        description: 'Test values to find where argument is positive'
                    }
                ],
                comparison: 'Solving inequality is standard; factoring helps complex arguments; graphing provides visual check'
            },
            general: {
                primaryMethod: 'Analyze restrictions systematically',
                methods: [
                    {
                        name: 'Graphing',
                        description: 'Use technology to graph and observe domain/range'
                    },
                    {
                        name: 'Tables',
                        description: 'Create input-output table to see patterns'
                    },
                    {
                        name: 'Calculus',
                        description: 'Use derivatives to find extrema for range'
                    }
                ],
                comparison: 'Choose method based on function complexity and tools available'
            }
        };

        return alternativeDatabase[category] || alternativeDatabase.general;
    }

    // Reuse helper methods from linear workbook (addStepBridges, etc.)
    // These are already defined above and work for both linear and domain/range

}

// Export the class
export default EnhancedDomainRangeMathematicalWorkbook;
