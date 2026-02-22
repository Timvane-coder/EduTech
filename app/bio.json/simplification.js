Here is the complete updated code for the Expression Simplification Mathematical Workbook, structured to mirror the factorization workbook pattern:
// Enhanced Expression Simplification Workbook - Comprehensive Simplification System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { MathematicsSvgDiagrams } from '../svg-data.js';
import { MathematicsDiagramsRegistry } from '../registry.js';
import { MathematicsDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedExpressionSimplificationWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "simplification";
        this.cellWidth = 200;
        this.cellHeight = 28;
        this.headerHeight = 35;
        this.contentHeight = 40;
        this.rowLabelWidth = 60;
        this.fontSize = 12;
        this.contentFontSize = 14;

        this.currentProblem = null;
        this.currentContent = null;
        this.contentSteps = [];
        this.currentWorkbook = null;
        this.diagramRenderer = new MathematicsDiagramsRenderer();
        this.includeDiagramsInWorkbook = options.includeDiagrams !== false;
        this.diagramWidth = options.diagramWidth || 800;
        this.diagramHeight = options.diagramHeight || 600;
        this.renderedDiagrams = new Map();
        this.diagramsPromise = null;
        this.currentPractical = null;

        this.explanationLevel = options.explanationLevel || 'intermediate';
        this.includeVisualizations = options.includeVisualizations !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeExamples = options.includeExamples !== false;
        this.includeComparisons = options.includeComparisons !== false;
        this.includeCommonMisconceptions = options.includeCommonMisconceptions !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.includePracticals = options.includePracticals !== false;
        this.detailLevel = options.detailLevel || 'detailed';

        this.adaptiveDifficulty = options.adaptiveDifficulty !== false;
        this.metacognitiveSupport = options.metacognitiveSupport !== false;
        this.contextualLearning = options.contextualLearning !== false;
        this.assessmentFeedback = options.assessmentFeedback !== false;

        this.learnerProfile = {
            currentLevel: 'intermediate',
            masteredTopics: [],
            strugglingTopics: [],
            preferredLearningStyle: 'visual',
            progressHistory: []
        };

        this.mathematicsSymbols = this.initializeMathematicsSymbols();
        this.setThemeColors();
        this.initializeSimplificationTopics();
        this.initializeSimplificationLessons();
        this.initializeMathematicsPracticals();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            simplification: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
                headerBg: '#0d47a1',
                headerText: '#ffffff',
                sectionBg: '#bbdefb',
                sectionText: '#0d47a1',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e3f2fd',
                resultText: '#1565c0',
                definitionBg: '#fff8e1',
                definitionText: '#e65100',
                stepBg: '#e8eaf6',
                stepText: '#311b92',
                borderColor: '#42a5f5',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#e0f2f1',
                practicalBg: '#fff9c4',
                practicalText: '#f57f17',
                liketermsBg: '#e8f5e9',
                indicesBg: '#e3f2fd',
                algebraicFractionsBg: '#fff8e1',
                surdsRationalisingBg: '#fce4ec',
                substitutionBg: '#f3e5f5',
                expandingBg: '#e0f7fa'
            },
            algebra: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#4a148c',
                headerText: '#ffffff',
                sectionBg: '#e1bee7',
                sectionText: '#4a148c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#f3e5f5',
                resultText: '#6a1b9a',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#ab47bc',
                contentBg: '#e8eaf6',
                contentText: '#1a237e',
                diagramBg: '#fce4ec',
                structureBg: '#e8f5e9',
                practicalBg: '#fffde7',
                practicalText: '#f57f17',
                liketermsBg: '#e8f5e9',
                indicesBg: '#ede7f6',
                algebraicFractionsBg: '#fff8e1',
                surdsRationalisingBg: '#fce4ec',
                substitutionBg: '#f3e5f5',
                expandingBg: '#e0f7fa'
            }
        };

        this.colors = themes[this.theme] || themes.simplification;
    }

    initializeMathematicsSymbols() {
        return {
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'pi': 'π',
            'theta': 'θ',
            'sigma': 'Σ',
            'phi': 'φ',

            // Arrows
            'arrow': '→',
            'doubleArrow': '↔',
            'implies': '⟹',
            'iff': '⟺',

            // Math symbols
            'plus': '+',
            'minus': '−',
            'plusminus': '±',
            'times': '×',
            'divide': '÷',
            'approximately': '≈',
            'notEqual': '≠',
            'leq': '≤',
            'geq': '≥',
            'infinity': '∞',
            'sqrt': '√',
            'squared': '²',
            'cubed': '³',
            'superscript4': '⁴',
            'superscript5': '⁵',
            'subscript0': '₀',
            'subscript1': '₁',
            'subscript2': '₂',
            'dot': '·',
            'degree': '°',
            'therefore': '∴',
            'because': '∵',
            'forAll': '∀',
            'exists': '∃',
            'element': '∈',
            'subset': '⊂',
            'union': '∪',
            'intersection': '∩',
            'emptySet': '∅',

            // Simplification-specific
            'equivalent': '≡',
            'simplifies': '⟶',
            'therefore': '∴',
            'LCM': 'LCM',
            'GCF': 'GCF',
            'polynomial': 'P(x)',
            'fraction': 'a/b',
            'surd': '√',
            'rationalise': '⟷',
            'substitute': '↦',
            'expand': '⊗',
            'collect': '⊕',

            // Number types
            'integer': 'ℤ',
            'rational': 'ℚ',
            'real': 'ℝ',
            'complex': 'ℂ',
            'natural': 'ℕ',
            'irrational': 'ℝ\\ℚ'
        };
    }

    initializeSimplificationTopics() {
        this.mathematicsTopics = {
            collecting_like_terms: {
                patterns: [
                    /collect.?like.?terms|like.?terms/i,
                    /simplify.?expression|combine.?like/i,
                    /gather.?terms|group.?terms/i,
                    /algebraic.?simplif/i
                ],
                handler: this.handleCollectingLikeTerms.bind(this),
                name: 'Collecting Like Terms',
                category: 'simplification',
                description: 'Identifying and combining terms with identical variable parts to simplify expressions',
                difficulty: 'beginner',
                prerequisites: ['variables', 'coefficients', 'basic_arithmetic']
            },

            index_laws: {
                patterns: [
                    /index.?law|laws.?of.?indices/i,
                    /exponent.?rule|power.?rule/i,
                    /indices|index.?notation/i,
                    /a\^m.*a\^n|multiply.*powers/i
                ],
                handler: this.handleIndexLaws.bind(this),
                name: 'Index Laws (Laws of Indices)',
                category: 'simplification',
                description: 'Applying the five index laws to simplify expressions involving powers and roots',
                difficulty: 'intermediate',
                prerequisites: ['collecting_like_terms', 'multiplication', 'division', 'fractions']
            },

            expanding_brackets: {
                patterns: [
                    /expand.?bracket|distribut/i,
                    /multiply.?out|remove.?bracket/i,
                    /foil|double.?bracket/i,
                    /single.?bracket|binomial.?product/i
                ],
                handler: this.handleExpandingBrackets.bind(this),
                name: 'Expanding Brackets',
                category: 'simplification',
                description: 'Applying the distributive law to remove brackets and simplify resulting expressions',
                difficulty: 'beginner',
                prerequisites: ['collecting_like_terms', 'multiplication', 'signed_numbers']
            },

            algebraic_fractions: {
                patterns: [
                    /algebraic.?fraction|rational.?expression/i,
                    /simplif.*fraction|fraction.*simplif/i,
                    /cancel.*factor|common.*denominator/i,
                    /add.*fraction|subtract.*fraction|multiply.*fraction/i
                ],
                handler: this.handleAlgebraicFractions.bind(this),
                name: 'Algebraic Fractions',
                category: 'simplification',
                description: 'Simplifying, adding, subtracting, multiplying and dividing algebraic fractions',
                difficulty: 'intermediate',
                prerequisites: ['collecting_like_terms', 'index_laws', 'expanding_brackets', 'factorisation_gcf']
            },

            surds_and_rationalising: {
                patterns: [
                    /surd|irrational.?root/i,
                    /rationalise|rationalize/i,
                    /simplify.*root|simplify.*sqrt/i,
                    /conjugate.*surd|surd.*conjugate/i
                ],
                handler: this.handleSurdsAndRationalising.bind(this),
                name: 'Surds and Rationalising Denominators',
                category: 'simplification',
                description: 'Simplifying surd expressions and rationalising denominators using conjugates',
                difficulty: 'intermediate',
                prerequisites: ['index_laws', 'expanding_brackets', 'prime_factorisation']
            },

            substitution_and_evaluation: {
                patterns: [
                    /substitut|evaluat.*expression/i,
                    /replace.*variable|value.*variable/i,
                    /plug.*in|formula.*evaluat/i
                ],
                handler: this.handleSubstitutionAndEvaluation.bind(this),
                name: 'Substitution and Evaluation',
                category: 'simplification',
                description: 'Substituting numerical values into algebraic expressions and evaluating the result',
                difficulty: 'beginner',
                prerequisites: ['collecting_like_terms', 'order_of_operations', 'signed_numbers']
            },

            complete_simplification: {
                patterns: [
                    /complete.?simplif|fully.?simplif/i,
                    /simplif.*completely|multi.?step.?simplif/i,
                    /simplif.*expression.*fully/i
                ],
                handler: this.handleCompleteSimplification.bind(this),
                name: 'Complete Simplification Strategy',
                category: 'simplification',
                description: 'Systematic approach to fully simplifying any algebraic expression using all techniques',
                difficulty: 'advanced',
                prerequisites: ['collecting_like_terms', 'index_laws', 'expanding_brackets', 'algebraic_fractions', 'surds_and_rationalising']
            }
        };
    }

    initializeSimplificationLessons() {
        this.lessons = {
            collecting_like_terms: {
                title: "Collecting Like Terms: The Foundation of Algebraic Simplification",
                concepts: [
                    "Like terms have identical variable parts (same variables raised to the same powers)",
                    "Only the coefficients change when like terms are added or subtracted",
                    "Unlike terms cannot be combined — they represent fundamentally different quantities",
                    "The order of terms does not affect whether they are like terms",
                    "Collecting like terms is the final step in most simplification problems"
                ],
                theory: "Collecting like terms is the algebraic equivalent of combining identical objects. Just as 3 apples + 5 apples = 8 apples (because they are the same type of object), 3x + 5x = 8x. Terms are 'like' when they represent the same variable quantity — they differ only in how many of that quantity there are.",
                keyDefinitions: {
                    "Term": "A single number, variable, or product of numbers and variables separated from others by + or − signs (e.g., 3x², −5xy, 7)",
                    "Coefficient": "The numerical factor of a term (e.g., in −4x²y, the coefficient is −4)",
                    "Like Terms": "Terms with identical variable parts — same variables raised to identical powers (e.g., 3x²y and −7x²y are like terms)",
                    "Unlike Terms": "Terms whose variable parts differ in any way — cannot be combined (e.g., 3x² and 3x are unlike)",
                    "Constant Term": "A term with no variable part (e.g., 7, −3, π)",
                    "Simplest Form": "An expression where no further like terms can be combined"
                },
                identifyingLikeTerms: {
                    rule: "Two terms are like if and only if their variable parts are identical — same variables AND same exponents on each",
                    likeTermExamples: [
                        "3x and −7x (both have x¹)",
                        "5x²y and −2x²y (both have x²y¹)",
                        "4 and −9 (both are constants)",
                        "3√x and 7√x (both have √x)"
                    ],
                    unlikeTermExamples: [
                        "3x and 3x² (different powers of x)",
                        "5xy and 5x²y (different power of x)",
                        "4x and 4y (different variables)",
                        "3x and 3 (one has variable, one does not)"
                    ]
                },
                collectingProcess: {
                    steps: [
                        "Step 1: Identify all distinct variable parts (groups of like terms)",
                        "Step 2: For each group, add or subtract the coefficients",
                        "Step 3: Write the result: new coefficient × variable part",
                        "Step 4: Combine all results; write terms in conventional order (highest degree first)",
                        "Step 5: Verify the number of terms has reduced (or check no further combination is possible)"
                    ],
                    example: {
                        expression: "3x² + 5x − 2x² + 7 − 3x + 1",
                        groups: "x² terms: 3x² and −2x²; x terms: 5x and −3x; constants: 7 and 1",
                        combining: "x²: 3 − 2 = 1; x: 5 − 3 = 2; constants: 7 + 1 = 8",
                        result: "x² + 2x + 8"
                    }
                },
                workedExamples: [
                    {
                        expression: "4a + 3b − 2a + 5b − a",
                        solution: "a terms: 4 − 2 − 1 = 1; b terms: 3 + 5 = 8 → a + 8b",
                        note: "Three unlike groups (a and b) are collected separately"
                    },
                    {
                        expression: "2x²y − 3xy² + x²y + 4xy²",
                        solution: "x²y terms: 2 + 1 = 3; xy² terms: −3 + 4 = 1 → 3x²y + xy²",
                        note: "x²y and xy² are unlike terms — variable parts differ"
                    },
                    {
                        expression: "5m³ − 2m + 4m² − m³ + 6m − 3m²",
                        solution: "m³: 5−1=4; m²: 4−3=1; m: −2+6=4 → 4m³ + m² + 4m",
                        note: "Three distinct variable groups; written in descending degree order"
                    }
                ],
                applications: [
                    "Simplifying polynomial expressions before solving equations",
                    "Combining forces in physics (vector components)",
                    "Summing costs in business models (like items grouped together)",
                    "Simplifying perimeter and area expressions in geometry",
                    "Simplifying statistical expressions and probability models"
                ]
            },

            index_laws: {
                title: "Index Laws: The Rules Governing Powers and Roots",
                concepts: [
                    "Index laws govern how expressions with the same base are multiplied, divided, and raised to powers",
                    "The base must be the same before applying multiplication or division index laws",
                    "A zero exponent always gives 1 (for non-zero base); a negative exponent means the reciprocal",
                    "Fractional exponents represent roots: a^(1/n) = ⁿ√a",
                    "Index laws apply to both numerical and algebraic bases"
                ],
                theory: "Index notation is a compact language for repeated multiplication. The index laws are not arbitrary rules — each follows directly from the definition of an exponent. Understanding why each law works (not just how to apply it) prevents errors and enables extension to fractional and negative indices.",
                keyDefinitions: {
                    "Index (Exponent/Power)": "The small raised number indicating how many times the base is multiplied by itself",
                    "Base": "The number or expression being repeatedly multiplied",
                    "Index Notation": "Writing repeated multiplication compactly: aⁿ = a × a × ... × a (n times)",
                    "Zero Index": "a⁰ = 1 for any a ≠ 0",
                    "Negative Index": "a⁻ⁿ = 1/aⁿ — the reciprocal of the positive power",
                    "Fractional Index": "a^(m/n) = (ⁿ√a)ᵐ = ⁿ√(aᵐ) — root and power combined"
                },
                theFiveLaws: {
                    multiplication: {
                        law: "aᵐ × aⁿ = aᵐ⁺ⁿ",
                        proof: "aᵐ × aⁿ = (a×a×...×a, m times) × (a×a×...×a, n times) = a multiplied (m+n) times = aᵐ⁺ⁿ",
                        example: "x³ × x⁵ = x⁸; 2³ × 2⁴ = 2⁷ = 128"
                    },
                    division: {
                        law: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ",
                        proof: "Cancel n factors of a from numerator and denominator: aᵐ/aⁿ = a×...×a (m times) / a×...×a (n times) = a^(m−n)",
                        example: "x⁷ ÷ x³ = x⁴; 5⁶ ÷ 5² = 5⁴ = 625"
                    },
                    powerOfPower: {
                        law: "(aᵐ)ⁿ = aᵐⁿ",
                        proof: "(aᵐ)ⁿ = aᵐ × aᵐ × ... × aᵐ (n times) = a^(m+m+...+m) = a^(mn)",
                        example: "(x²)⁵ = x¹⁰; (3²)³ = 3⁶ = 729"
                    },
                    powerOfProduct: {
                        law: "(ab)ⁿ = aⁿbⁿ",
                        proof: "(ab)ⁿ = ab × ab × ... × ab (n times) = (a×a×...×a)(b×b×...×b) = aⁿbⁿ",
                        example: "(2x)³ = 8x³; (3xy)² = 9x²y²"
                    },
                    powerOfQuotient: {
                        law: "(a/b)ⁿ = aⁿ/bⁿ",
                        proof: "(a/b)ⁿ = (a/b) × (a/b) × ... × (a/b) = aⁿ/bⁿ",
                        example: "(x/3)² = x²/9; (2/y)⁴ = 16/y⁴"
                    }
                },
                specialIndices: {
                    zero: { rule: "a⁰ = 1 (a ≠ 0)", proof: "aⁿ ÷ aⁿ = a^(n−n) = a⁰; also aⁿ/aⁿ = 1 → a⁰ = 1", example: "5⁰ = 1; (3x)⁰ = 1; x⁰ = 1" },
                    negative: { rule: "a⁻ⁿ = 1/aⁿ", proof: "a⁰ ÷ aⁿ = a^(0−n) = a⁻ⁿ; also 1/aⁿ → a⁻ⁿ = 1/aⁿ", example: "x⁻² = 1/x²; 3⁻¹ = 1/3" },
                    unitFraction: { rule: "a^(1/n) = ⁿ√a", proof: "a^(1/n) × a^(1/n) × ... (n times) = a^(n/n) = a¹ = a; so it is the nth root", example: "x^(1/2) = √x; 27^(1/3) = ∛27 = 3" },
                    generalFraction: { rule: "a^(m/n) = (ⁿ√a)ᵐ = ⁿ√(aᵐ)", proof: "a^(m/n) = (a^(1/n))ᵐ = (ⁿ√a)ᵐ", example: "8^(2/3) = (∛8)² = 2² = 4" }
                },
                workedExamples: [
                    { expression: "3x²y³ × 4x⁵y", solution: "Coefficients: 3×4=12; x: x²×x⁵=x⁷; y: y³×y¹=y⁴ → 12x⁷y⁴" },
                    { expression: "15a⁶b⁴ ÷ 3a²b", solution: "Coefficients: 15÷3=5; a: a⁶÷a²=a⁴; b: b⁴÷b¹=b³ → 5a⁴b³" },
                    { expression: "(2x³)⁴", solution: "2⁴=16; (x³)⁴=x¹² → 16x¹²" },
                    { expression: "x^(3/2) ÷ x^(1/2)", solution: "x^(3/2 − 1/2) = x^(2/2) = x¹ = x" }
                ]
            },

            expanding_brackets: {
                title: "Expanding Brackets: Applying the Distributive Law",
                concepts: [
                    "Expanding brackets applies the distributive law: every term outside multiplies every term inside",
                    "Single brackets: one term multiplies each term inside",
                    "Double brackets (FOIL): each term in the first bracket multiplies each term in the second",
                    "Special products (perfect squares, difference of squares) have recognisable patterns",
                    "After expanding, always collect like terms to complete the simplification"
                ],
                theory: "Expanding brackets is the reverse process of factorisation. It transforms a product form into a sum form. The distributive property a(b + c) = ab + ac is the foundation; double bracket expansion is simply the distributive property applied twice.",
                keyDefinitions: {
                    "Distributive Law": "a(b + c) = ab + ac; every term inside is multiplied by the term outside",
                    "FOIL": "First, Outer, Inner, Last — a mnemonic for expanding two binomials (a+b)(c+d)",
                    "Binomial": "A two-term expression (e.g., x + 3, 2x − 5)",
                    "Trinomial": "A three-term expression resulting from expanding most pairs of binomials",
                    "Perfect Square Expansion": "(a + b)² = a² + 2ab + b²",
                    "Difference of Squares Expansion": "(a + b)(a − b) = a² − b²"
                },
                singleBracket: {
                    rule: "a(b + c + d + ...) = ab + ac + ad + ...",
                    signRules: "Positive outside: signs inside unchanged. Negative outside: all signs reversed.",
                    examples: [
                        { expression: "3(2x − 5)", solution: "6x − 15" },
                        { expression: "−2x(3x² − 4x + 1)", solution: "−6x³ + 8x² − 2x" },
                        { expression: "x²(x − 3)", solution: "x³ − 3x²" }
                    ]
                },
                doubleBracket: {
                    foilMethod: {
                        F: "First terms multiplied: a × c",
                        O: "Outer terms multiplied: a × d",
                        I: "Inner terms multiplied: b × c",
                        L: "Last terms multiplied: b × d",
                        result: "(a+b)(c+d) = ac + ad + bc + bd"
                    },
                    examples: [
                        { expression: "(x + 3)(x + 5)", solution: "x² + 5x + 3x + 15 = x² + 8x + 15" },
                        { expression: "(2x − 3)(x + 4)", solution: "2x² + 8x − 3x − 12 = 2x² + 5x − 12" },
                        { expression: "(3x − 2)(3x + 2)", solution: "9x² + 6x − 6x − 4 = 9x² − 4" }
                    ]
                },
                specialProducts: {
                    perfectSquarePos: { pattern: "(a + b)² = a² + 2ab + b²", example: "(x + 4)² = x² + 8x + 16" },
                    perfectSquareNeg: { pattern: "(a − b)² = a² − 2ab + b²", example: "(x − 3)² = x² − 6x + 9" },
                    differenceSquares: { pattern: "(a + b)(a − b) = a² − b²", example: "(2x + 5)(2x − 5) = 4x² − 25" }
                },
                tripleBracket: {
                    method: "Expand any two brackets first; collect like terms; then multiply result by third bracket",
                    example: { expression: "(x + 1)(x + 2)(x + 3)", step1: "(x+1)(x+2) = x² + 3x + 2", step2: "(x²+3x+2)(x+3) = x³ + 3x² + 3x² + 9x + 2x + 6 = x³ + 6x² + 11x + 6" }
                }
            },

            algebraic_fractions: {
                title: "Algebraic Fractions: Extending Arithmetic Fractions to Algebra",
                concepts: [
                    "Algebraic fractions follow all the same rules as numerical fractions",
                    "Simplify by cancelling common factors — never cancel common terms (terms that are added/subtracted)",
                    "To add or subtract, find the LCM of all denominators first",
                    "To multiply: multiply numerators together and denominators together, then simplify",
                    "To divide: multiply by the reciprocal of the divisor"
                ],
                theory: "Algebraic fractions are simply fractions whose numerators and/or denominators contain variables. Every rule that applies to numerical fractions (simplifying, finding common denominators, multiplying, dividing) applies identically. The key additional skill is factorising the numerator and denominator to identify cancellable factors.",
                keyDefinitions: {
                    "Algebraic Fraction": "A fraction in which the numerator, denominator, or both contain algebraic expressions",
                    "Restriction": "Values of the variable for which the denominator equals zero — these are excluded from the domain",
                    "Equivalent Fractions": "Fractions representing the same value obtained by multiplying numerator and denominator by the same non-zero expression",
                    "Lowest Terms": "An algebraic fraction where numerator and denominator share no common factors other than 1",
                    "LCM of Denominators": "Lowest Common Multiple — the simplest expression divisible by all denominators; used to add/subtract fractions"
                },
                simplifying: {
                    method: "Factorise both numerator and denominator fully; cancel common factors",
                    warning: "NEVER cancel terms — only factors. (x+3)/(x+3) = 1 ✓ but (x+3+5)/(x+3) ≠ 1+5",
                    examples: [
                        { fraction: "(6x² + 9x)/(3x)", solution: "3x(2x+3)/3x = 2x+3" },
                        { fraction: "(x² − 4)/(x + 2)", solution: "(x+2)(x−2)/(x+2) = x−2 (x ≠ −2)" },
                        { fraction: "(2x² + 5x + 3)/(2x² + 3x)", solution: "(2x+3)(x+1)/x(2x+3) = (x+1)/x (x ≠ 0, x ≠ −3/2)" }
                    ]
                },
                addingSubtracting: {
                    method: "Find LCM of denominators; rewrite each fraction with LCM as denominator; add/subtract numerators; simplify result",
                    examples: [
                        { expression: "3/(2x) + 5/(3x)", solution: "LCM=6x; 9/(6x) + 10/(6x) = 19/(6x)" },
                        { expression: "2/(x+1) − 3/(x−2)", solution: "LCM=(x+1)(x−2); [2(x−2)−3(x+1)]/[(x+1)(x−2)] = (2x−4−3x−3)/[(x+1)(x−2)] = (−x−7)/[(x+1)(x−2)]" }
                    ]
                },
                multiplyingDividing: {
                    multiply: { method: "Factorise everything; cancel across; multiply remaining numerators and denominators", example: "(x²−9)/(x+2) × (x+2)/(x+3) = (x+3)(x−3)/(x+2) × (x+2)/(x+3) = x−3" },
                    divide: { method: "Flip the second fraction (reciprocal); then multiply as above", example: "(x²+5x+6)/(x+1) ÷ (x+3)/(x²−1) = (x+2)(x+3)/(x+1) × (x+1)(x−1)/(x+3) = (x+2)(x−1)" }
                }
            },

            surds_and_rationalising: {
                title: "Surds and Rationalising Denominators",
                concepts: [
                    "A surd is an irrational root that cannot be simplified to a rational number",
                    "Surds can be simplified by extracting the largest perfect square factor from under the root",
                    "Like surds (same radicand) can be added and subtracted just like like algebraic terms",
                    "Rationalising removes surds from the denominator using conjugates or multiplication",
                    "The product rule √(ab) = √a × √b and quotient rule √(a/b) = √a/√b are fundamental"
                ],
                theory: "Surds arise whenever we take the square root (or other root) of a non-perfect-square number. They are exact representations of irrational numbers. Manipulating surds requires a combination of arithmetic skills, index laws (since √a = a^(1/2)), and the distributive law. Rationalising the denominator is a convention that makes expressions easier to work with and compare.",
                keyDefinitions: {
                    "Surd": "An irrational root expression that cannot be simplified to a rational number (e.g., √2, √5, ∛3)",
                    "Radicand": "The expression under the root sign",
                    "Rationalising the Denominator": "Rewriting a fraction so that the denominator contains no surd — achieved by multiplying by a suitable form of 1",
                    "Conjugate": "The conjugate of (a + √b) is (a − √b); product of conjugates = a² − b (rational)",
                    "Simplified Surd": "A surd √n where n has no perfect square factor greater than 1",
                    "Like Surds": "Surds with the same radicand after simplification (e.g., 3√5 and 7√5)"
                },
                simplifyingSurds: {
                    method: "Find the largest perfect square factor of the radicand; extract it as a whole number",
                    productRule: "√(ab) = √a × √b",
                    example: { surd: "√72", steps: "√(36 × 2) = √36 × √2 = 6√2", check: "(6√2)² = 36 × 2 = 72 ✓" },
                    examples: [
                        { surd: "√50", solution: "√(25×2) = 5√2" },
                        { surd: "√108", solution: "√(36×3) = 6√3" },
                        { surd: "√(45x²)", solution: "√(9×5×x²) = 3x√5 (x ≥ 0)" }
                    ]
                },
                addingSubtractingSurds: {
                    rule: "Only like surds can be combined (same simplified radicand)",
                    method: "Simplify all surds first; then collect like surds as like terms",
                    examples: [
                        { expression: "3√2 + 5√2", solution: "8√2" },
                        { expression: "√50 + √18 − √8", solution: "5√2 + 3√2 − 2√2 = 6√2" },
                        { expression: "2√3 + 4√5", solution: "Cannot simplify — unlike surds" }
                    ]
                },
                multiplyingSurds: {
                    rule: "√a × √b = √(ab); a√m × b√n = ab√(mn)",
                    expandingWithSurds: "Apply distributive law/FOIL, then simplify each surd term",
                    examples: [
                        { expression: "√3 × √12", solution: "√36 = 6" },
                        { expression: "(2 + √3)(4 − √3)", solution: "8 − 2√3 + 4√3 − 3 = 5 + 2√3" },
                        { expression: "(√5 + √2)²", solution: "5 + 2√10 + 2 = 7 + 2√10" }
                    ]
                },
                rationalisingDenominator: {
                    simpleCase: { form: "a/√b", method: "Multiply by √b/√b", example: "3/√5 = 3√5/5" },
                    conjugateCase: {
                        form: "a/(p + √q)",
                        method: "Multiply by (p − √q)/(p − √q) — the conjugate",
                        example: { fraction: "4/(3 + √2)", step1: "× (3−√2)/(3−√2)", step2: "4(3−√2)/(9−2)", result: "4(3−√2)/7 = (12−4√2)/7" }
                    }
                }
            },

            substitution_and_evaluation: {
                title: "Substitution and Evaluation: Giving Expressions Numerical Meaning",
                concepts: [
                    "Substitution replaces each variable with its given numerical value",
                    "Order of operations (BIDMAS/BODMAS) must be strictly followed after substitution",
                    "Negative values must be written in brackets before substituting to avoid sign errors",
                    "Substitution enables evaluation of formulas from science, finance, and geometry",
                    "After substitution, the expression becomes purely numerical and can be evaluated"
                ],
                theory: "Substitution is the bridge between abstract algebra and concrete numerical calculation. A formula like A = πr² is meaningless without substituting a specific value of r. Substitution also enables verification of algebraic identities by checking that both sides give the same numerical value for chosen variable values.",
                keyDefinitions: {
                    "Substitution": "Replacing a variable with a specific numerical value in an expression",
                    "Evaluation": "Computing the numerical value of an expression after substitution",
                    "BIDMAS/BODMAS": "Order of operations: Brackets, Indices, Division, Multiplication, Addition, Subtraction",
                    "Formula": "An algebraic rule expressing a relationship between variables (e.g., area, speed, interest)",
                    "Domain Restriction": "Values of a variable for which an expression is defined (e.g., x ≠ 0 in 1/x)"
                },
                substitutionProcess: {
                    steps: [
                        "Step 1: Write the expression with all variables clearly visible",
                        "Step 2: Replace each variable with its value, using brackets around negative values",
                        "Step 3: Apply BIDMAS strictly: evaluate indices first, then multiplication/division, then addition/subtraction",
                        "Step 4: Compute the numerical result",
                        "Step 5: Include units if the expression models a physical quantity"
                    ],
                    bracketWarning: "Always bracket negative substituted values: if x = −3, write (−3), not −3 without brackets, to avoid errors like x² being computed as −3² = −9 instead of (−3)² = 9"
                },
                workedExamples: [
                    {
                        expression: "3x² − 2x + 5",
                        substitution: "x = −4",
                        steps: "3(−4)² − 2(−4) + 5 = 3(16) + 8 + 5 = 48 + 8 + 5 = 61"
                    },
                    {
                        expression: "√(b² − 4ac)",
                        substitution: "a=2, b=−3, c=−5",
                        steps: "√((−3)² − 4(2)(−5)) = √(9 + 40) = √49 = 7"
                    },
                    {
                        expression: "(p + q)/(p − q)",
                        substitution: "p=7, q=3",
                        steps: "(7+3)/(7−3) = 10/4 = 5/2 = 2.5"
                    }
                ],
                formulaApplications: [
                    { formula: "A = πr²", context: "Area of circle", substitution: "r=5 → A = π(25) = 25π ≈ 78.54 cm²" },
                    { formula: "v = u + at", context: "Velocity (kinematics)", substitution: "u=10, a=−2, t=3 → v = 10 + (−2)(3) = 4 m/s" },
                    { formula: "I = PRT/100", context: "Simple interest", substitution: "P=500, R=4, T=2 → I = 500×4×2/100 = £40" }
                ]
            },

            complete_simplification: {
                title: "Complete Simplification Strategy: A Systematic Approach to Any Expression",
                concepts: [
                    "Complete simplification requires applying multiple techniques in the correct order",
                    "The decision about which technique to apply depends on the structure of the expression",
                    "Expanding must precede collecting like terms; factorising must precede cancelling in fractions",
                    "A fully simplified expression has no brackets that can be expanded, no like terms remaining, no reducible fractions, and no surds in denominators",
                    "Always verify by substituting a simple value into both the original and simplified expressions"
                ],
                theory: "Complete simplification is not a single technique but a strategic sequencing of all simplification tools. Like a chess player planning several moves ahead, a skilled algebraist identifies the structure of the expression and applies techniques in the optimal order. The flowchart below guides this decision process.",
                decisionFlowchart: {
                    step1: { question: "Are there any brackets to expand?", yes: "Expand using distributive law / FOIL; collect like terms", no: "Proceed to step 2" },
                    step2: { question: "Are there any like terms to collect?", yes: "Collect all like terms", no: "Proceed to step 3" },
                    step3: { question: "Are there any index expressions to simplify?", yes: "Apply relevant index laws", no: "Proceed to step 4" },
                    step4: { question: "Is the expression a fraction or contains fractions?", yes: "Factorise; cancel common factors; find common denominator if adding/subtracting", no: "Proceed to step 5" },
                    step5: { question: "Are there any surds to simplify or denominators to rationalise?", yes: "Simplify surds; rationalise denominator", no: "Expression is fully simplified" },
                    step6: "Verify by substituting a simple value (e.g., x=1 or x=2) into original and simplified forms"
                },
                workedExamples: [
                    {
                        title: "Multi-step simplification",
                        expression: "3(x + 2)² − 2(x − 1)(x + 3) + 5x",
                        step1: "Expand: 3(x²+4x+4) − 2(x²+2x−3) + 5x",
                        step2: "Distribute: 3x²+12x+12 − 2x²−4x+6 + 5x",
                        step3: "Collect: (3−2)x² + (12−4+5)x + (12+6)",
                        result: "x² + 13x + 18"
                    },
                    {
                        title: "Algebraic fraction simplification",
                        expression: "(x²−9)/(x²+6x+9) − 1/(x+3)",
                        step1: "Factorise: (x+3)(x−3)/(x+3)² − 1/(x+3)",
                        step2: "Cancel: (x−3)/(x+3) − 1/(x+3)",
                        step3: "Common denominator: (x−3−1)/(x+3)",
                        result: "(x−4)/(x+3)"
                    },
                    {
                        title: "Index law + surd combination",
                        expression: "(2√3 × x²)³ ÷ (4x⁶√3)",
                        step1: "Expand cube: 8(√3)³ × x⁶ = 8 × 3√3 × x⁶ = 24√3 x⁶",
                        step2: "Divide: 24√3 x⁶ ÷ 4x⁶√3",
                        result: "6"
                    }
                ],
                checklistForCompleteness: [
                    "Are all brackets expanded?",
                    "Are all like terms collected?",
                    "Are all index expressions in simplest form?",
                    "Are all fractions in lowest terms with rational denominators?",
                    "Are all surds in simplest form?",
                    "Have you verified by substitution?"
                ]
            }
        };
    }

    initializeMathematicsPracticals() {
        this.mathematicsPracticals = {

            // ========================================
            // PRACTICAL 1: COLOUR-CODED LIKE TERMS SORTING
            // ========================================
            colour_coded_like_terms: {
                name: "Colour-Coded Term Sorting: Visual Discovery of Like Terms",
                relatedTopics: ['collecting_like_terms', 'expanding_brackets'],
                category: 'algebra',
                historicalBackground: {
                    origin: "Rooted in Diophantus of Alexandria's Arithmetica (c. 250 CE)",
                    development: "Diophantus introduced the first systematic algebraic notation and the concept of combining similar quantities — the precursor to modern like term collection",
                    significance: "The modern convention of combining like terms emerges directly from Diophantus's principle that 'like quantities are added to like quantities'",
                    modernContext: "Colour-coding as a pedagogical tool was formalised in mathematics education research in the 1980s; studies show it reduces like/unlike term confusion errors by up to 45%",
                    mathematicalFoundation: "Rooted in the field axioms: the commutative and associative laws permit rearrangement; the distributive law permits combination: 3x + 5x = (3+5)x = 8x"
                },
                practicalMathematics: {
                    title: "Discovering Like Terms Through Colour Classification",
                    hypothesis: "If like terms represent identical variable quantities that differ only in coefficient, then a colour-classification system applied to algebraic expressions will make the structure of combining visible and reduce errors",
                    purpose: "Use colour coding to identify, group, and combine like terms in increasingly complex algebraic expressions, building intuition for the concept before applying it symbolically",
                    materials: [
                        "Sets of coloured marker pens or highlighters (minimum 5 distinct colours)",
                        "Pre-printed expression worksheets with space for colour annotation",
                        "Blank card strips (for creating physical term cards)",
                        "Scissors (to cut term cards for physical sorting activity)",
                        "Large sorting mat divided into labelled columns by variable type",
                        "Recording sheet for symbolic results"
                    ],
                    procedure: [
                        "PART A: Term Classification Game",
                        "1. Write the expression: 4x² − 3x + 2xy + 5x − x² + 7 − 4xy + 3x²",
                        "2. Assign one colour to each distinct variable part:",
                        "   • x² terms → Yellow",
                        "   • x terms → Blue",
                        "   • xy terms → Green",
                        "   • Constants → Red",
                        "3. Highlight or underline each term in its assigned colour",
                        "4. Observe: All yellow terms are collected; all blue terms are collected; etc.",
                        "",
                        "PART B: Physical Card Sorting",
                        "5. Write each term on a separate card strip (include + or − sign)",
                        "6. Sort cards into columns on the sorting mat by variable type",
                        "7. For each column, add up all the coefficients to find the combined term",
                        "8. Write the simplified result by reading across all non-zero columns",
                        "",
                        "PART C: Discovering Why Unlike Terms Cannot Combine",
                        "9. Attempt to combine 3x and 3x²: Try to add coefficient-only: 3+3 = 6. But 6 what? 6x? 6x²? — neither is correct",
                        "10. Geometric illustration: draw a line of length 3x next to a square of area 3x². They represent different geometric objects — you cannot add a length to an area",
                        "11. Conclude: Unlike terms represent different dimensional quantities; combining them would be like adding metres to square metres",
                        "",
                        "PART D: Complex Expression Investigation",
                        "12. Simplify: 5a²b − 3ab² + 2a²b − ab² + 6ab² − a²b",
                        "13. Apply colour coding: a²b terms → one colour; ab² terms → another colour",
                        "14. Collect: a²b: 5+2−1 = 6; ab²: −3−1+6 = 2 → Result: 6a²b + 2ab²",
                        "15. Verify: substitute a=1, b=1 into original (5−3+2−1+6−1=8) and simplified (6+2=8) ✓"
                    ],
                    dataTable: [
                        ["Expression", "Like Term Groups Identified", "Simplified Result", "Verification (a=1,b=1 or x=2)"],
                        ["4x²−3x+2xy+5x−x²+7−4xy+3x²", "x²:{4,−1,3}, x:{−3,5}, xy:{2,−4}, const:{7}", "6x²+2x−2xy+7", "x=2: 24+4−4+7=31 ✓"],
                        ["5a²b−3ab²+2a²b−ab²+6ab²−a²b", "a²b:{5,2,−1}, ab²:{−3,−1,6}", "6a²b+2ab²", "a=b=1: 8 ✓"],
                        ["3√2+5√3−√2+2√3+4√2", "√2:{3,−1,4}, √3:{5,2}", "6√2+7√3", "numerical ✓"]
                    ],
                    observations: {
                        colorPattern: "Each colour group corresponds to one term in the simplified expression",
                        impossibleCombination: "Terms of different colours cannot be combined — each colour represents a genuinely different quantity",
                        coefficientArithmetic: "Combining like terms is purely arithmetic — the variable part acts as a label that is preserved unchanged",
                        orderIrrelevance: "Rearranging the terms (changing their order) does not affect the result — the commutative law of addition"
                    },
                    conclusions: [
                        "Like terms share an identical variable part and differ only in coefficient",
                        "Collecting like terms applies arithmetic to coefficients while preserving the variable part unchanged",
                        "Unlike terms cannot be combined because they represent dimensionally different quantities",
                        "Colour-coding makes the abstract grouping structure visually explicit and catches sorting errors",
                        "The simplified expression has exactly as many terms as there are distinct variable types with non-zero total coefficients"
                    ],
                    extensions: [
                        "Apply to polynomial expressions with four or more distinct variable types",
                        "Extend to expressions involving surds: treat √2, √3, √5 as distinct 'colours'",
                        "Connect to vector addition: like components are added; unlike components (x, y, z) are kept separate"
                    ],
                    realWorldConnections: [
                        "Inventory management: grouping and counting items of the same type",
                        "Accounting: combining like expenditure categories in a budget",
                        "Chemistry: balancing equations by collecting like atomic terms on each side",
                        "Physics: adding vector components by direction (x-components with x-components, y with y)"
                    ],
                    pedagogicalNotes: {
                        benefit: "Colour coding externalises the mental grouping process, making implicit thinking explicit and visual",
                        transition: "Begin with physical card sorting; transition to colour annotation; then to purely symbolic collection",
                        assessment: "Ask students to colour-code a new expression before simplifying — this reveals whether they can identify like terms before computing",
                        commonError: "Students frequently combine 3x and 3x² — the geometric analogy (length vs area) is the most effective correction"
                    }
                }
            },

            // ========================================
            // PRACTICAL 2: INDEX LAWS DISCOVERY THROUGH PATTERN TABLES
            // ========================================
            index_laws_pattern_discovery: {
                name: "Index Laws Discovery: Deriving Rules from Numerical Patterns",
                relatedTopics: ['index_laws', 'substitution_and_evaluation'],
                category: 'algebra',
                historicalBackground: {
                    mathematician: "John Napier (1550–1617) and Henry Briggs (1561–1630)",
                    work: "Napier invented logarithms precisely to convert the hard problem of multiplication into the easier problem of addition — the same principle underlying the multiplication index law: aᵐ × aⁿ = aᵐ⁺ⁿ",
                    significance: "The index laws enabled astronomers and navigators to perform complex calculations that would otherwise take hours. Napier's Mirifici Logarithmorum Canonis Descriptio (1614) transformed computation",
                    precursor: "Michael Stifel (1487–1567) made the first systematic observation of the additive property of exponents in his Arithmetica Integra (1544)",
                    modernRelevance: "Index laws underpin scientific notation, logarithms, exponential growth models, and computational complexity analysis in computer science"
                },
                practicalMathematics: {
                    title: "Discovering Index Laws Through Numerical Pattern Tables",
                    hypothesis: "If index laws describe genuine patterns in how powers behave, then computing numerical examples will reveal each law as an inductive generalization before it is stated as a rule",
                    purpose: "Derive each of the five index laws by computing numerical examples, identifying patterns in a table, and formulating the general rule before it is presented symbolically",
                    materials: [
                        "Pattern table worksheets (one per index law)",
                        "Calculator (for numerical verification only — not for pattern identification)",
                        "Graph paper for optional visual representation",
                        "Coloured pens for annotating patterns"
                    ],
                    procedure: [
                        "INVESTIGATION 1: Multiplication Law",
                        "1. Complete the table for aᵐ × aⁿ:",
                        "   2¹ × 2² = 2 × 4 = 8 = 2³ → indices: 1+2=3",
                        "   2² × 2³ = 4 × 8 = 32 = 2⁵ → indices: 2+3=5",
                        "   3¹ × 3³ = 3 × 27 = 81 = 3⁴ → indices: 1+3=4",
                        "   10² × 10³ = 100 × 1000 = 100000 = 10⁵ → indices: 2+3=5",
                        "2. Pattern: When multiplying same base, the indices ___",
                        "3. State the law: aᵐ × aⁿ = ___",
                        "",
                        "INVESTIGATION 2: Division Law",
                        "4. Complete the table for aᵐ ÷ aⁿ:",
                        "   2⁵ ÷ 2² = 32 ÷ 4 = 8 = 2³ → indices: 5−2=3",
                        "   3⁴ ÷ 3¹ = 81 ÷ 3 = 27 = 3³ → indices: 4−1=3",
                        "   5³ ÷ 5³ = 125 ÷ 125 = 1 = 5⁰ → indices: 3−3=0",
                        "   2³ ÷ 2⁵ = 8 ÷ 32 = 1/4 = 2⁻² → indices: 3−5=−2",
                        "5. Pattern: When dividing same base, the indices ___",
                        "6. Discover: What does a⁰ = 1 mean? What does a⁻ⁿ = 1/aⁿ mean?",
                        "",
                        "INVESTIGATION 3: Power of Power Law",
                        "7. Complete: (2²)³ = 2² × 2² × 2² = 4 × 4 × 4 = 64 = 2⁶ → indices: 2×3=6",
                        "   (3²)² = 9² = 81 = 3⁴ → indices: 2×2=4",
                        "   (10²)³ = 100³ = 1,000,000 = 10⁶ → indices: 2×3=6",
                        "8. State the law: (aᵐ)ⁿ = ___",
                        "",
                        "INVESTIGATION 4: Fractional Indices",
                        "9. Observe: (a^(1/2))² = a^(1/2 × 2) = a¹ → a^(1/2) must be √a",
                        "   Verify: (4^(1/2))² = 4 → 4^(1/2) = 2 = √4 ✓",
                        "   (8^(1/3))³ = 8 → 8^(1/3) = 2 = ∛8 ✓",
                        "10. Generalise: a^(1/n) = ___",
                        "11. Derive: a^(m/n) = (a^(1/n))ᵐ = ___",
                        "",
                        "CONSOLIDATION: Apply each discovered law to simplify:",
                        "12. x⁴ × x⁻¹ ÷ x² = x^(4−1−2) = x¹ = x",
                        "13. (4x²)^(3/2) = 4^(3/2) × x³ = 8x³",
                        "14. (a²b³)⁴ ÷ (ab)⁵ = a⁸b¹² ÷ a⁵b⁵ = a³b⁷"
                    ],
                    dataTable: [
                        ["Law", "Numerical Example", "Result as Power", "Pattern Observed", "General Rule"],
                        ["Multiplication", "2³ × 2⁴ = 128 = 2⁷", "2⁷", "3+4=7", "aᵐ × aⁿ = aᵐ⁺ⁿ"],
                        ["Division", "3⁵ ÷ 3² = 81 = 3⁴", "3⁴", "5−2=3 ... wait 5−2=3✓", "aᵐ ÷ aⁿ = aᵐ⁻ⁿ"],
                        ["Power of Power", "(2²)³ = 64 = 2⁶", "2⁶", "2×3=6", "(aᵐ)ⁿ = aᵐⁿ"],
                        ["Zero Index", "2³ ÷ 2³ = 1 = 2⁰", "2⁰", "3−3=0", "a⁰ = 1"],
                        ["Fractional Index", "4^(1/2) = 2 = √4", "4^(1/2)", "Square root", "a^(1/n) = ⁿ√a"]
                    ],
                    conclusions: [
                        "Each index law is not a rule to memorise but a pattern derived from the definition of exponentiation",
                        "The multiplication law follows directly from counting repeated multiplication factors",
                        "Zero and negative indices emerge naturally from the division law applied to equal and reversed exponents",
                        "Fractional indices are the bridge between powers and roots, derived from the power-of-power law",
                        "All five laws are internally consistent — they follow from one definition and never contradict each other"
                    ],
                    extensions: [
                        "Extend to irrational indices: what does 2^√2 mean? Explore using calculator limits",
                        "Derive logarithm laws from index laws: if aᵐ × aⁿ = aᵐ⁺ⁿ, then log(A×B) = log A + log B",
                        "Explore complex indices: what does i^i equal? (Connects to Euler's formula)",
                        "Investigate matrix indices: when does (A²)³ = A⁶ hold for matrices?"
                    ],
                    realWorldConnections: [
                        "Scientific notation: multiplying numbers in standard form uses the multiplication index law directly",
                        "Exponential growth (population, compound interest): a^(m+n) = aᵐ × aⁿ separates growth periods",
                        "Signal processing: decibels use logarithms (inverse of index laws) to compress large power ratios",
                        "Computer science: binary (base 2) index laws govern memory addressing and bitwise operations"
                    ],
                    pedagogicalNotes: {
                        discovery: "Deriving laws rather than stating them first produces significantly deeper retention and understanding",
                        misconceptions: "Students frequently apply multiplication law to different bases (x² × y³ ≠ (xy)⁵); the table makes the same-base requirement visually explicit",
                        extension: "The strongest students will derive all five laws from the single definition aⁿ = a×a×...×a, without needing a table at all"
                    }
                }
            },

            // ========================================
            // PRACTICAL 3: SURD GEOMETRY — DISCOVERING IRRATIONAL LENGTHS
            // ========================================
            surd_geometry_investigation: {
                name: "Surd Geometry: Discovering Irrational Lengths on the Number Line",
                relatedTopics: ['surds_and_rationalising', 'index_laws'],
                category: 'algebra',
                historicalBackground: {
                    discovery: "The Pythagoreans (c. 500 BCE)",
                    crisis: "The discovery that √2 is irrational was so shocking to the Pythagoreans — whose philosophy held that all quantities are rational — that legend claims the discoverer, Hippasus, was drowned at sea to suppress the finding",
                    proof: "The irrationality of √2 was proved by Euclid in Book X of the Elements (c. 300 BCE) using proof by contradiction — one of the earliest and most elegant proofs in mathematics",
                    significance: "This discovery forced a complete reconception of the number system. The existence of incommensurable lengths — lengths whose ratio cannot be expressed as p/q — required the invention of the real number line",
                    etymology: "The word 'surd' comes from the Latin 'surdus' (deaf/mute) — medieval translators used it for the Arabic 'asamm' (deaf), which was used for irrational roots because they could not be expressed in the rational 'language' of fractions",
                    modernRelevance: "Surds appear in trigonometry (sin 45° = √2/2), geometry (diagonal of a unit square), relativity (Lorentz factor √(1−v²/c²)), and quantum mechanics (energy eigenvalues)"
                },
                practicalMathematics: {
                    title: "Constructing Irrational Lengths: Surds in Geometry",
                    hypothesis: "If surds are genuine numbers on the real number line, then they can be constructed geometrically using compass and straightedge, and their decimal approximations can be bounded by rational numbers from above and below",
                    purpose: "Construct surd lengths geometrically; prove √2 is irrational; discover the rules for simplifying and adding surds through measurement and arithmetic",
                    materials: [
                        "Compass and straightedge (or ruler)",
                        "Squared centimetre paper",
                        "Protractor (to verify right angles)",
                        "Calculator (for decimal verification only)",
                        "Worksheet: surd spiral construction template",
                        "Coloured pencils"
                    ],
                    procedure: [
                        "PART A: Constructing √2 Geometrically",
                        "1. Draw a right-angled triangle with both legs of length 1 unit",
                        "2. Measure the hypotenuse with a ruler: approximately 1.414 cm",
                        "3. Using the Pythagorean theorem: hypotenuse² = 1² + 1² = 2 → hypotenuse = √2",
                        "4. Compare ruler measurement with calculator value of √2 ≈ 1.41421...",
                        "5. Reflect: Is 1.414 exact? Can √2 ever be written as p/q? (See Part B proof)",
                        "",
                        "PART B: Proof that √2 is Irrational (Euclid's Method)",
                        "6. Assume √2 = p/q in lowest terms (p and q share no common factor)",
                        "7. Then 2 = p²/q² → p² = 2q² → p² is even → p is even (write p = 2k)",
                        "8. Then (2k)² = 2q² → 4k² = 2q² → q² = 2k² → q² is even → q is even",
                        "9. But if both p and q are even, they share factor 2 — CONTRADICTS p/q in lowest terms",
                        "10. Therefore √2 cannot be written as p/q: it is irrational",
                        "",
                        "PART C: The Surd Spiral (Theodorus Spiral)",
                        "11. Starting from a right angle with legs 1 and 1, construct √2 as hypotenuse",
                        "12. Use √2 as one leg; draw perpendicular of length 1 → new hypotenuse = √3",
                        "13. Continue: √3 and 1 → √4 = 2; then √4 and 1 → √5; and so on",
                        "14. Measure each hypotenuse and record: √1, √2, √3, √4, √5, √6, √7, ...",
                        "15. Which values are rational? (Perfect squares: √1=1, √4=2, √9=3, √16=4)",
                        "",
                        "PART D: Simplifying Surds from Geometric Evidence",
                        "16. Construct a square of area 12 cm²: side = √12 cm",
                        "17. Also construct: 2 squares each of area 3 cm² and place sides end to end: 2×√3 cm",
                        "18. Measure: are √12 and 2√3 the same length? (YES — confirms √12 = 2√3)",
                        "19. Algebraic verification: √12 = √(4×3) = √4 × √3 = 2√3 ✓",
                        "",
                        "PART E: Rationalising — Why Irrational Denominators Cause Problems",
                        "20. Compare: 1/√2 (irrational denominator) vs √2/2 (rational denominator)",
                        "21. Using a ruler, show both represent exactly the same length (approximately 0.707 cm)",
                        "22. Multiply 1/√2 by √2/√2: (1×√2)/(√2×√2) = √2/2",
                        "23. Reflect: √2/2 is easier to compute precisely — rational denominators are more practical"
                    ],
                    dataTable: [
                        ["Surd", "Geometric Construction", "Decimal Value", "Simplified Form", "Largest Perfect Square Factor"],
                        ["√2", "Diagonal of unit square", "1.4142...", "√2 (already simplest)", "1"],
                        ["√8", "Diagonal of 2×2 square", "2.8284...", "2√2", "4"],
                        ["√12", "Leg of constructed triangle", "3.4641...", "2√3", "4"],
                        ["√18", "Diagonal of 3×3 square", "4.2426...", "3√2", "9"],
                        ["√50", "Construction with 5-unit sides", "7.0711...", "5√2", "25"],
                        ["√75", "Constructed from 5√3 segments", "8.6603...", "5√3", "25"]
                    ],
                    conclusions: [
                        "Surds are real numbers that can be constructed geometrically using compass and straightedge",
                        "The irrationality of √2 is a consequence of the properties of even numbers — not a numerical coincidence",
                        "Simplifying a surd means extracting the largest perfect square factor from under the radical",
                        "The product rule √(ab) = √a × √b is confirmed geometrically by area decomposition",
                        "Rationalising the denominator produces an equivalent fraction with the same value but a rational denominator — more practical for calculation"
                    ],
                    extensions: [
                        "Prove that √3, √5, and √7 are irrational using the same method as the √2 proof",
                        "Investigate: which square roots are rational? Prove the general theorem (√n is rational iff n is a perfect square)",
                        "Explore surds in trigonometry: derive exact values for sin 30°, sin 45°, sin 60° geometrically",
                        "Research: the Stern–Brocot tree and how rational approximations to surds can be computed systematically"
                    ],
                    realWorldConnections: [
                        "Architecture: the diagonal of a square room (√2 relationship) determines material lengths for flooring and bracing",
                        "Music: the equal-temperament tuning system uses 2^(1/12) — an irrational number — to divide octaves equally",
                        "Navigation: the distance formula d = √((Δx)² + (Δy)²) uses surds for non-integer displacements",
                        "Engineering: the resonant frequency of an LC circuit involves √(LC), often irrational"
                    ],
                    pedagogicalNotes: {
                        historicalImpact: "The Pythagorean proof is one of the most significant moments in mathematical history — students who understand it understand the nature of irrational numbers at a deep level",
                        visualLearning: "The surd spiral (Theodorus spiral) provides a memorable visual for the sequence of surds and which are rational",
                        proof: "Euclid's proof by contradiction is accessible to strong secondary students and teaches the method of proof by contradiction as well as the content result"
                    }
                }
            },

            // ========================================
            // PRACTICAL 4: ALGEBRAIC FRACTION CANCELLATION INVESTIGATION
            // ========================================
            algebraic_fraction_cancellation: {
                name: "Algebraic Fraction Cancellation: When Can You Cancel and When Can't You?",
                relatedTopics: ['algebraic_fractions', 'collecting_like_terms', 'expanding_brackets'],
                category: 'algebra',
                historicalBackground: {
                    origin: "Roots in Euclid's theory of ratios and Diophantus's work on rational expressions",
                    development: "Systematic treatment of algebraic fractions was developed by François Viète (1540–1603), who introduced letter notation for variables and extended arithmetic operations to symbolic expressions",
                    significance: "Viète's work in Introduction to the Analytical Art (1591) established that algebraic fractions could be manipulated exactly like numerical fractions — a conceptual breakthrough that unified arithmetic and algebra",
                    modernRelevance: "Algebraic fractions are fundamental to partial fraction decomposition (essential in calculus integration), control systems engineering, signal processing (transfer functions), and rational function approximation"
                },
                practicalMathematics: {
                    title: "The Legal and Illegal Cancellation Investigation",
                    hypothesis: "If cancellation in algebraic fractions is only valid for common factors (not common terms), then constructing numerical counterexamples will reveal when cancellation is illegal and why, while legal cancellations can be verified numerically",
                    purpose: "Distinguish between legitimate cancellation of factors and illegitimate cancellation of terms through numerical testing; build intuition for correct simplification of algebraic fractions",
                    materials: [
                        "Algebraic fraction cards (pre-printed expressions)",
                        "Calculator for numerical verification",
                        "'Legal' and 'Illegal' sorting containers",
                        "Worksheet for numerical testing and symbolic verification"
                    ],
                    procedure: [
                        "PART A: What Does Cancellation Really Mean?",
                        "1. Recall numerical fractions: 6/8 = 3/4 (cancel factor of 2 from numerator and denominator)",
                        "2. Verify: 6 ÷ 2 = 3; 8 ÷ 2 = 4. The common factor 2 divides BOTH exactly",
                        "3. Illegal attempt: 16/64 = 1/4 by 'cancelling the 6s'. Is this valid?",
                        "4. Check: 16/64 = 0.25; 1/4 = 0.25 — by coincidence it gives the same answer!",
                        "5. Try: 26/65 = 2/5 by 'cancelling the 6s'. 26/65 = 0.4; 2/5 = 0.4 — coincidence again!",
                        "6. Try: 13/31 = 1/1 = 1 by 'cancelling the 3s'. 13/31 ≈ 0.419 ≠ 1. WRONG!",
                        "7. Conclusion: digit cancellation is almost always invalid — it works by coincidence only",
                        "",
                        "PART B: Factor Cancellation vs Term Cancellation in Algebra",
                        "8. LEGAL: (x²−9)/(x+3). Factorise: (x+3)(x−3)/(x+3) = x−3. Test x=5: (25−9)/8 = 2 and 5−3 = 2 ✓",
                        "9. ILLEGAL ATTEMPT: (x²+3)/(x+3) — 'cancel the 3s' → gives x²/x = x. Test x=2: (4+3)/(5) = 1.4 but 2 ≠ 1.4. WRONG!",
                        "10. LEGAL: (6x²+9x)/(3x) = 3x(2x+3)/3x = 2x+3. Test x=4: (96+36)/12 = 11 and 2(4)+3 = 11 ✓",
                        "11. ILLEGAL: (x+5)/(x+3) — 'cancel the x' → 5/3. Test x=2: 7/5 = 1.4 but 5/3 ≈ 1.67. WRONG!",
                        "",
                        "PART C: Systematic Sorting Activity",
                        "12. For each fraction card, first predict: Legal or Illegal?",
                        "13. Numerically test by substituting x=3 into both original and 'cancelled' form",
                        "14. If they agree: cancellation MAY be legal (verify algebraically by factorising)",
                        "15. If they disagree: cancellation is DEFINITELY illegal",
                        "16. Algebraically confirm each legal cancellation by showing the factorisation",
                        "",
                        "PART D: Adding and Subtracting Algebraic Fractions",
                        "17. Compute 1/(x+1) + 1/(x+2): find LCM = (x+1)(x+2)",
                        "18. Rewrite: (x+2)/[(x+1)(x+2)] + (x+1)/[(x+1)(x+2)] = (2x+3)/[(x+1)(x+2)]",
                        "19. Verify by substituting x=3: 1/4 + 1/5 = 9/20 and (9)/[4×5] = 9/20 ✓",
                        "20. Compute 3/(x−2) − 2/(x+1) and verify numerically"
                    ],
                    dataTable: [
                        ["Expression", "Attempted Cancellation", "Legal?", "Numerical Test (x=3)", "Correct Simplification"],
                        ["(x²−9)/(x+3)", "(x−3)(x+3)/(x+3) = x−3", "YES ✓", "LHS=0 RHS=0 ✓", "x−3 (x≠−3)"],
                        ["(x+3)/(x+3)", "= 1", "YES ✓", "LHS=1 RHS=1 ✓", "1 (x≠−3)"],
                        ["(x+5)/(x+3)", "Cancel x: 5/3?", "NO ✗", "LHS=8/6≈1.33 RHS=5/3≈1.67 ✗", "Cannot simplify"],
                        ["(x²+5x+6)/(x+2)", "(x+2)(x+3)/(x+2)=x+3", "YES ✓", "LHS=24/5 wait... x=3: (9+15+6)/5=6, RHS=6 ✓", "x+3 (x≠−2)"],
                        ["(x²+9)/(x+3)", "Cancel 9 and 3?", "NO ✗", "LHS=18/6=3 RHS=x=3 coincidence only", "Cannot simplify"]
                    ],
                    keyRule: {
                        legal: "You may ONLY cancel factors — expressions that multiply the entire numerator AND the entire denominator",
                        illegal: "You may NEVER cancel terms — expressions that are ADDED or SUBTRACTED within numerator or denominator",
                        test: "The numerical substitution test will always catch illegal cancellations"
                    },
                    conclusions: [
                        "Cancellation is ONLY valid when the same factor appears in BOTH numerator and denominator as a product (multiplied factor)",
                        "A term that is added or subtracted within a numerator or denominator is NEVER cancellable",
                        "Factorising before cancelling is essential: it converts sums into products, revealing what can legally be cancelled",
                        "Numerical verification catches illegal cancellations reliably — substitute a test value into both original and simplified expressions",
                        "The domain restriction (values where denominator = 0) must always be stated when cancellation occurs"
                    ],
                    extensions: [
                        "Investigate when (aⁿ−bⁿ)/(a−b) simplifies: what polynomial does it give for n=2,3,4?",
                        "Connect to partial fractions: decompose (3x+5)/[(x+1)(x+2)] back into partial fractions",
                        "Explore limits: what is lim(x→3) of (x²−9)/(x−3)? How does this connect to cancellation?"
                    ],
                    realWorldConnections: [
                        "Chemical formula simplification: the ratio of elements simplifies like algebraic fractions",
                        "Gear ratios in engineering: chain of gear ratios multiplied and cancelled",
                        "Probability: conditional probability P(A|B) = P(A∩B)/P(B) involves fraction manipulation",
                        "Physics: dimensional analysis uses factor cancellation across units"
                    ],
                    pedagogicalNotes: {
                        misconception: "The 'cancel anything that looks the same' error is the single most common error in algebraic fraction work; this practical directly targets it",
                        numericalTest: "Teaching students to ALWAYS numerically verify simplifications develops both error-checking habits and number sense",
                        factorisingFirst: "The key pedagogical message: you cannot cancel before factorising — factorising IS the process that reveals what can be cancelled"
                    }
                }
            },

            // ========================================
            // PRACTICAL 5: SUBSTITUTION FORMULA INVESTIGATION — REAL-WORLD FORMULAE
            // ========================================
            substitution_formula_investigation: {
                name: "Formula Evaluation Investigation: Using Substitution to Explore Real-World Relationships",
                relatedTopics: ['substitution_and_evaluation', 'index_laws', 'collecting_like_terms'],
                category: 'algebra',
                historicalBackground: {
                    mathematician: "François Viète (1540–1603) and René Descartes (1596–1650)",
                    development: "Viète introduced the first systematic use of letters for both known and unknown quantities, making substitution a general tool rather than a case-by-case procedure. Descartes's La Géométrie (1637) demonstrated that algebraic formulas could describe geometric curves — substituting numerical coordinates to generate points",
                    significance: "The power of algebraic formulas lies entirely in their generality: one formula applies to infinitely many cases through substitution. This was a revolutionary idea that replaced large tables of specific calculations with single compact rules",
                    historicalExample: "Before algebraic formulas, astronomers maintained enormous tables of planetary positions computed for specific dates. Kepler's laws (1609–1619) replaced these tables with formulas that could be evaluated by substitution for any date — a paradigm shift in scientific methodology",
                    modernRelevance: "Every engineering calculation, scientific experiment, financial model, and computer program relies on formula evaluation by substitution — it is the most universally applied mathematical skill"
                },
                practicalMathematics: {
                    title: "Real-World Formula Investigation: Substitution as the Language of Science",
                    hypothesis: "If algebraic formulas describe genuine real-world relationships, then systematic substitution of values will reveal patterns of variation (linear, quadratic, exponential) that match observed physical behaviour",
                    purpose: "Evaluate multiple real-world formulas by substitution; identify how the output changes as each variable changes; connect algebraic form to graphical shape and real-world meaning",
                    materials: [
                        "Formula investigation worksheet (covering 5 formulas from different subject areas)",
                        "Calculator",
                        "Graph paper for plotting results",
                        "Table templates for recording inputs and outputs"
                    ],
                    procedure: [
                        "INVESTIGATION 1: Kinematic Formula — Stopping Distance",
                        "Formula: d = v²/(2a) where d = stopping distance (m), v = initial speed (m/s), a = deceleration (m/s²)",
                        "1. Fix a = 6 m/s²; evaluate d for v = 5, 10, 15, 20, 25, 30 m/s",
                        "2. Record d values; plot d against v on graph paper",
                        "3. Observe: doubling v quadruples d — quadratic relationship (d ∝ v²)",
                        "4. Real-world implication: doubling speed QUADRUPLES stopping distance — not doubles it",
                        "5. Fix v = 20; evaluate d for a = 2, 4, 6, 8, 10: d = 200/2a — how does d change?",
                        "",
                        "INVESTIGATION 2: Compound Interest Formula",
                        "Formula: A = P(1 + r/100)ⁿ where P = principal, r = annual rate (%), n = years",
                        "6. Fix P = 1000, r = 5; evaluate A for n = 0, 5, 10, 15, 20, 25 years",
                        "7. Plot A against n — observe exponential growth curve",
                        "8. Calculate 'doubling time': at what value of n does A ≈ 2P = 2000?",
                        "9. Discover the Rule of 70: doubling time ≈ 70/r years. Verify with r = 5: 70/5 = 14 years",
                        "10. Fix n = 10; vary r = 1, 2, 3, 5, 8, 10: how does rate of growth change with r?",
                        "",
                        "INVESTIGATION 3: Body Mass Index",
                        "Formula: BMI = m/h² where m = mass (kg), h = height (m)",
                        "11. Evaluate BMI for a range of mass/height combinations (provided in table)",
                        "12. Order of operations practice: BMI = 70/(1.75)² = 70/3.0625 ≈ 22.9",
                        "13. Substitute negative value test: what happens if h = −1.75? Discuss: why is domain h > 0 required?",
                        "14. Find the mass m that gives BMI = 25 (upper healthy limit) for heights h = 1.6, 1.7, 1.8 m",
                        "15. Rearrange formula to make m the subject: m = BMI × h²",
                        "",
                        "INVESTIGATION 4: Discriminant of Quadratic",
                        "Formula: Δ = b² − 4ac",
                        "16. Evaluate Δ for: (a) a=1, b=5, c=6; (b) a=1, b=2, c=1; (c) a=1, b=1, c=1",
                        "17. Case (a): Δ > 0 → two distinct real roots; Case (b): Δ = 0 → one repeated root; Case (c): Δ < 0 → no real roots",
                        "18. Verify each case by attempting to factorise: x²+5x+6=(x+2)(x+3) ✓; x²+2x+1=(x+1)² ✓; x²+x+1: no real factors ✓",
                        "19. Design your own quadratic with exactly one repeated root. What condition does this impose on a, b, c?",
                        "",
                        "INVESTIGATION 5: Surface Area of a Cylinder",
                        "Formula: SA = 2πr² + 2πrh = 2πr(r + h)",
                        "20. Evaluate SA for: r=3, h=10; r=5, h=5; r=10, h=1 (all in cm)",
                        "21. Notice: both expanded form (2πr² + 2πrh) and factored form (2πr(r+h)) give the same result",
                        "22. Which form is easier to evaluate? Which reveals the structure better?",
                        "23. Find h given r=4 and SA = 200π: 200π = 2π(4)(4+h) → 25 = 4+h → h = 21 cm"
                    ],
                    dataTable: [
                        ["Formula", "Variables Investigated", "Key Relationship Found", "Real-World Implication", "Algebraic Form (expanded/factored)"],
                        ["d=v²/2a", "v from 5 to 30, a=6", "d quadruples when v doubles (d∝v²)", "Quadratic growth: speed-doubling means 4× danger", "Expanded: v²/(2a)"],
                        ["A=P(1+r/100)ⁿ", "n from 0 to 25, P=1000, r=5", "Exponential growth; doubling at n≈14 years", "Rule of 70: doubling time ≈ 70/r", "Exponential: not simplifiable further"],
                        ["BMI=m/h²", "m and h varied", "BMI proportional to m, inversely proportional to h²", "Taller people need disproportionately more mass for same BMI", "b²−4ac: determines root type"],
                        ["Δ=b²−4ac", "a=1, b varied, c varied", "Sign of Δ determines root count", "Δ>0: 2 roots; Δ=0: 1 root; Δ<0: no real roots", "Compact: b²−4ac"],
                        ["SA=2πr²+2πrh", "r and h varied", "SA grows with both r² and rh; factored form 2πr(r+h) is more efficient to evaluate", "Factored form reveals proportional structure", "Factored: 2πr(r+h)"]
                    ],
                    observations: {
                        orderOfOperations: "Every substitution is a test of BIDMAS — errors in order of operations produce wrong answers that no amount of algebraic skill can recover",
                        signHandling: "Negative substituted values MUST be bracketed: omitting brackets is the most common source of sign errors",
                        expandedVsFactored: "The same formula in different algebraic forms is equally valid but differently informative or convenient for evaluation",
                        domainRestrictions: "Some formulas require domain restrictions (e.g., h > 0 for BMI) — substituting invalid values produces meaningless results"
                    },
                    conclusions: [
                        "Substitution transforms a general algebraic formula into a specific numerical result for any given values",
                        "The algebraic form (expanded vs factored vs other) reveals different structural information about the relationship",
                        "Real-world formulas encode physical laws: the quadratic form d∝v² for stopping distance is not arbitrary but follows from kinematics",
                        "Systematic substitution of multiple values reveals the type of relationship (linear, quadratic, exponential) and enables graph sketching",
                        "Domain restrictions arise naturally: formulas only apply when the physical situation is valid"
                    ],
                    extensions: [
                        "Derive the stopping distance formula from v² = u² + 2as using algebraic manipulation before evaluating",
                        "Investigate Kepler's third law T² = r³ (in appropriate units): verify for planets in the solar system",
                        "Explore the Pythagorean theorem as a formula: c = √(a²+b²) — generate Pythagorean triples systematically by substitution",
                        "Investigate Newton's law of cooling T(t) = T_room + (T_0 − T_room)e^(−kt) by collecting temperature data"
                    ],
                    realWorldConnections: [
                        "Road safety: stopping distance formula shows why speed limits matter — quadratic, not linear, relationship",
                        "Finance: compound interest formula explains why early saving is so powerful — exponential growth",
                        "Medicine: BMI and body surface area formulas directly used in drug dosing calculations",
                        "Engineering: structural load formulas (beam deflection, pipe flow) all evaluated by substitution",
                        "Architecture: acoustic and lighting formulas evaluated for room dimensions to meet building codes"
                    ],
                    pedagogicalNotes: {
                        crossCurricular: "This practical connects directly to science, economics, and technology curricula — students see algebra as a universal tool, not just a maths topic",
                        verification: "Teaching students to estimate before substituting (approximate calculation) builds number sense and catches gross errors",
                        rearrangement: "Formula rearrangement (making a different variable the subject) is a natural extension: it is simplification applied to solve for a specific unknown",
                        graphConnection: "Plotting outputs as variables change connects the algebraic form to the graphical shape — linear, parabolic, or exponential curves"
                    }
                }
            }
        };

        this.linkPracticalsToTopics();
    }

    linkPracticalsToTopics() {
        Object.entries(this.mathematicsPracticals).forEach(([practicalId, practical]) => {
            practical.relatedTopics.forEach(topicId => {
                if (this.mathematicsTopics[topicId]) {
                    if (!this.mathematicsTopics[topicId].relatedPracticals) {
                        this.mathematicsTopics[topicId].relatedPracticals = [];
                    }
                    this.mathematicsTopics[topicId].relatedPracticals.push({
                        id: practicalId,
                        name: practical.name,
                        category: practical.category
                    });
                }
            });
        });
    }

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            collecting_like_terms: {
                'Term Identification': [
                    'Treating x² and x as like terms because both contain x — they are unlike (different powers)',
                    'Treating xy and x²y as like terms — the power of x differs',
                    'Treating xy and yx as different — they are identical (commutative multiplication)',
                    'Failing to include the sign (+ or −) as part of the term coefficient',
                    'Treating constants as like terms with variable terms (e.g., adding 5 and 5x to get 10x)'
                ],
                'Arithmetic Errors': [
                    'Adding coefficients AND variable parts: 3x + 5x = 8x² (wrong) instead of 8x (correct)',
                    'Subtracting coefficients incorrectly when one is negative: 3x − (−2x) = x instead of 5x',
                    'Combining three or more like terms in the wrong order, losing track of signs'
                ]
            },

            index_laws: {
                'Law Application Errors': [
                    'Applying the multiplication law to different bases: x² × y³ ≠ (xy)⁵',
                    'Multiplying instead of adding indices: x² × x³ = x⁶ instead of x⁵',
                    'Dividing instead of subtracting indices: x⁶ ÷ x² = x³ instead of x⁴',
                    'Applying power-of-power law additively: (x²)³ = x⁵ instead of x⁶'
                ],
                'Special Index Errors': [
                    'Evaluating a⁰ = 0 instead of 1',
                    'Writing a⁻² = −a² instead of 1/a²',
                    'Computing a^(1/2) as a/2 instead of √a',
                    'Applying index laws to addition: (x + y)² ≠ x² + y² — the "freshman dream" error'
                ],
                'Bracket Errors': [
                    'Forgetting to raise the coefficient to the power: (2x)³ = 2x³ instead of 8x³',
                    'Not distributing the index to all factors: (3x²y)² = 3x⁴y² instead of 9x⁴y²'
                ]
            },

            expanding_brackets: {
                'Single Bracket Errors': [
                    'Only multiplying the first term: 3(x + 5) = 3x + 5 instead of 3x + 15',
                    'Incorrect sign when a negative is outside: −2(x − 3) = −2x − 6 instead of −2x + 6',
                    'Forgetting that the minus sign is part of the factor: −(x + 2) = −x + 2 instead of −x − 2'
                ],
                'Double Bracket Errors': [
                    'FOIL: missing the outer and inner products (only computing first and last)',
                    'Sign error in FOIL when terms are negative: (x − 3)(x − 2) giving +6 instead of +6 (correct), but −5x instead of −5x (common confusion)',
                    'Not collecting like terms after expanding: leaving 3x + 2x uncombined',
                    '"Freshman dream": (x + 3)² = x² + 9 instead of x² + 6x + 9'
                ],
                'Special Products': [
                    'Forgetting the middle term in perfect square: (a + b)² = a² + b² instead of a² + 2ab + b²',
                    'Not recognising (x + 3)(x − 3) as difference of squares and expanding with unnecessary middle terms'
                ]
            },

            algebraic_fractions: {
                'Illegal Cancellation': [
                    'Cancelling terms instead of factors: (x + 3)/(x + 5) → 3/5 by "cancelling x" — INVALID',
                    'Cancelling part of a sum in the numerator with the denominator: (x² + x)/x = x² + 1 instead of x + 1',
                    'Cancelling numerator terms that add to give the denominator: (6 + x²)/(3 + x) ≠ 2x'
                ],
                'Fraction Arithmetic': [
                    'Adding fractions by adding numerators AND denominators: a/b + c/d = (a+c)/(b+d) — INVALID',
                    'Forgetting to find a common denominator before adding or subtracting',
                    'When multiplying fractions, finding a common denominator (only needed for addition/subtraction)',
                    'When dividing, multiplying by the fraction itself instead of its reciprocal'
                ],
                'Domain Restriction': [
                    'Failing to state the restriction on the variable after cancellation (e.g., x ≠ −3)',
                    'Assuming cancellation produces an expression equal everywhere — it is only equal where the original is defined'
                ]
            },

            surds_and_rationalising: {
                'Simplification Errors': [
                    'Not extracting the LARGEST perfect square factor: √72 = 2√18 instead of 6√2',
                    'Applying the product rule incorrectly: √(a + b) ≠ √a + √b (only √(ab) = √a × √b)',
                    'Treating √4 + √9 = √13 instead of 2 + 3 = 5'
                ],
                'Adding Surds': [
                    'Adding unlike surds: 3√2 + 4√3 = 7√5 (WRONG — cannot be combined)',
                    'Failing to simplify surds first before checking if they are like: √8 and √18 look unlike until simplified to 2√2 and 3√2'
                ],
                'Rationalising Errors': [
                    'Rationalising a/√b by adding √b instead of multiplying by √b/√b',
                    'Using the conjugate incorrectly: for 1/(√3 + 2), multiplying by (√3 + 2) instead of (√3 − 2)',
                    'Sign error in conjugate product: (√a + b)(√a − b) = a + b² instead of a − b²'
                ]
            },

            substitution_and_evaluation: {
                'Order of Operations': [
                    'Evaluating left to right without respecting BIDMAS: 3 + 4² = 7² = 49 instead of 3 + 16 = 19',
                    'Computing 2x² as (2x)² when x = 3: writing (6)² = 36 instead of 2(9) = 18',
                    'Adding before multiplying in formulas with adjacent terms'
                ],
                'Negative Substitution': [
                    'Omitting brackets around negative values: x = −3 in x² gives −3² = −9 instead of (−3)² = 9',
                    'Squaring a negative incorrectly: (−4)² = −16 instead of +16',
                    'Sign error in products: (−2)(−3) = −6 instead of +6 after substitution'
                ],
                'Variable Replacement': [
                    'Only partially substituting when an expression contains a variable multiple times',
                    'Substituting into the wrong variable in a multi-variable formula'
                ]
            },

            complete_simplification: {
                'Sequencing Errors': [
                    'Collecting like terms before expanding brackets — collecting terms inside unexpanded brackets is meaningless',
                    'Attempting to cancel in fractions before factorising numerator and denominator',
                    'Applying index laws before collecting coefficients'
                ],
                'Incompleteness': [
                    'Stopping after one simplification step when further steps remain',
                    'Leaving a surd in the denominator without rationalising',
                    'Declaring the expression simplified when like terms can still be collected',
                    'Not verifying the simplification by substitution'
                ]
            }
        };

        this.clarificationStrategies = {
            colour_coding: {
                method: 'Highlight each like-term group in a distinct colour before collecting',
                effectiveness: 'Very high for like terms identification errors'
            },
            numerical_verification: {
                method: 'Always substitute a simple value (e.g., x=2) into both original and simplified expressions to verify equality',
                effectiveness: 'Essential; catches all application errors including illegal cancellation'
            },
            index_law_tables: {
                method: 'Build a reference table of all five index laws with numerical examples alongside algebraic form',
                effectiveness: 'High for index law confusion and zero/negative index errors'
            },
            foil_diagram: {
                method: 'Draw arrows from each term in the first bracket to each term in the second to ensure all products are found',
                effectiveness: 'High for incomplete FOIL and missing middle term errors'
            },
            surd_factor_tree: {
                method: 'Use prime factor tree to find the largest perfect square factor systematically',
                effectiveness: 'High for incomplete surd simplification'
            },
            bidmas_checklist: {
                method: 'After substituting, write out the expression step by step following BIDMAS strictly',
                effectiveness: 'Very high for order-of-operations errors in substitution'
            },
            factorisation_before_cancelling: {
                method: 'Require students to fully factorise numerator and denominator and draw a box around each factor before cancelling',
                effectiveness: 'Very high for illegal term cancellation errors'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}? Can you write an example?",
                "How does {topic} connect to arithmetic with numbers?",
                "What do you predict will be the trickiest part of {topic}?",
                "Can you think of a real-world situation where {topic} might arise?"
            ],
            duringLearning: [
                "Does this simplification make sense? Have you verified it by substituting a value?",
                "Which technique does the structure of this expression suggest?",
                "Are there any like terms remaining? Are there any brackets still to expand?",
                "Can you sketch a geometric or visual representation of what this expression means?",
                "How does this step connect to {related_concept}?"
            ],
            afterLearning: [
                "What are the key techniques in {topic} and what are their recognition features?",
                "What mistakes are you most likely to make with {topic}, and how can you guard against them?",
                "How would you explain {topic} to a classmate who missed the lesson?",
                "What is the single most important check after simplifying any expression?",
                "How does {topic} connect to other areas of mathematics you have studied?"
            ],
            problemSolving: [
                "What type of expression is this, and what does its structure tell you about the technique?",
                "Have you checked for like terms? Have you expanded all brackets?",
                "If there is a fraction: have you factorised both numerator and denominator before cancelling?",
                "Have you applied BIDMAS correctly at every step of substitution?",
                "Have you verified your simplification by substituting a numerical value?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            collecting_like_terms: [
                {
                    scenario: "Supermarket Stock Count",
                    context: "A supermarket manager tracks stock as: 3p + 2c − p + 5c + 4p items, where p = packets and c = cans. She wants to find the total of each type.",
                    problem: "Simplify 3p + 2c − p + 5c + 4p to find total packets and total cans.",
                    application: "p terms: 3 − 1 + 4 = 6; c terms: 2 + 5 = 7 → 6p + 7c",
                    question: "If p = 12 and c = 24, what is the total stock before and after simplification?",
                    answer: "Before (substituting directly): 36 + 48 − 12 + 120 + 48 = 240. After: 6(12) + 7(24) = 72 + 168 = 240 ✓.",
                    extension: "The simplified form 6p + 7c is more useful: one quick calculation rather than five."
                },
                {
                    scenario: "Construction Material Costing",
                    context: "A builder estimates costs: 4b + 3s − b + 2b + s pounds, where b = bags of cement and s = sheets of timber.",
                    problem: "Simplify to find the total cost expression.",
                    application: "b: 4 − 1 + 2 = 5; s: 3 + 1 = 4 → 5b + 4s",
                    question: "If cement costs £12 per bag and timber costs £25 per sheet, what is the total cost?",
                    answer: "5(12) + 4(25) = 60 + 100 = £160.",
                    extension: "The simplified expression makes pricing transparent: 5 bags of cement and 4 sheets of timber — easy to order and quote."
                },
                {
                    scenario: "Athletics Track Perimeter",
                    context: "A designer models a running track with total perimeter (3x + 5) + (2x − 1) + (x + 4) + (2x + 3) metres for four sections.",
                    problem: "Simplify to find a formula for the total perimeter.",
                    application: "x: 3+2+1+2=8; constants: 5−1+4+3=11 → 8x + 11",
                    question: "If x = 15 metres, what is the perimeter? Verify using the original expression.",
                    answer: "8(15) + 11 = 131 m. Original: 50 + 29 + 19 + 33 = 131 m ✓.",
                    extension: "Expressing perimeter as 8x + 11 allows the designer to scale the track for any x without re-adding all four sections."
                }
            ],

            index_laws: [
                {
                    scenario: "Computer Memory Addressing",
                    context: "A computer has 2⁸ base memory blocks. An upgrade multiplies memory by 2⁶. A calculation requires memory to be divided by 2³.",
                    problem: "Use index laws to find the final memory as a power of 2.",
                    application: "2⁸ × 2⁶ ÷ 2³ = 2^(8+6−3) = 2¹¹ = 2048 memory blocks.",
                    question: "How many individual memory units is this?",
                    answer: "2¹¹ = 2048 units. Without index laws: 256 × 64 ÷ 8 = 2048 — the index law route is faster and less error-prone.",
                    extension: "All computer memory sizes are powers of 2: the multiplication and division index laws are embedded in every memory calculation in computing."
                },
                {
                    scenario: "Scientific Notation in Astronomy",
                    context: "The distance to a star is (3 × 10⁸) × (4.5 × 10¹²) metres. An astronomer needs to express this in standard form.",
                    problem: "Multiply using index laws: 3 × 4.5 × 10⁸ × 10¹² = 13.5 × 10²⁰ = 1.35 × 10²¹",
                    application: "Multiplication law: 10⁸ × 10¹² = 10²⁰. Adjust to standard form: 13.5 = 1.35 × 10¹ → 1.35 × 10²¹ m",
                    question: "Express the answer in light years, given 1 light year ≈ 9.46 × 10¹⁵ m.",
                    answer: "1.35 × 10²¹ ÷ 9.46 × 10¹⁵ ≈ 0.143 × 10⁶ = 1.43 × 10⁵ light years.",
                    extension: "Without index laws, working with such large numbers would require writing out strings of zeros — index notation makes astronomical calculation feasible."
                },
                {
                    scenario: "Bacteria Population Growth",
                    context: "A bacterium divides every hour. Starting with 3² bacteria, after 4 hours each has divided again into 3⁴ sub-populations.",
                    problem: "Use the power-of-power law to find the total population.",
                    application: "(3²)⁴ = 3⁸ = 6561 bacteria.",
                    question: "After how many hours would the population exceed 10⁶? (Each hour, population is multiplied by 3)",
                    answer: "3ⁿ > 10⁶ → n > log₃(10⁶) = 6/log₁₀(3) ≈ 12.6 → after 13 hours.",
                    extension: "The power-of-power law models compounding growth: growth within growth within growth — a key pattern in biology and finance."
                }
            ],

            expanding_brackets: [
                {
                    scenario: "Room Area Calculation",
                    context: "A room has length (x + 5) metres and width (x + 3) metres. A decorator needs the area as a polynomial to calculate flooring costs.",
                    problem: "Expand (x + 5)(x + 3) to find the area expression.",
                    application: "FOIL: x² + 3x + 5x + 15 = x² + 8x + 15",
                    question: "If x = 4 metres, what is the area? Verify by computing length × width.",
                    answer: "Area = 16 + 32 + 15 = 63 m². Check: (4+5)(4+3) = 9 × 7 = 63 m² ✓.",
                    extension: "The expanded form x²+8x+15 reveals how the area scales: the x² term dominates for large rooms; the constant 15 is the fixed area offset."
                },
                {
                    scenario: "Profit Model",
                    context: "A company's profit is modelled by (2x − 3)(x + 5) pounds, where x is units sold. The accountant needs the expanded polynomial for the annual report.",
                    problem: "Expand and simplify (2x − 3)(x + 5).",
                    application: "FOIL: 2x² + 10x − 3x − 15 = 2x² + 7x − 15",
                    question: "At what sales level x is profit zero (break-even)? Verify by factorising the expanded form.",
                    answer: "Set (2x−3)(x+5)=0: x=1.5 or x=−5. Only x=1.5 is physically meaningful (positive sales). Break-even at 1.5 units (round to 2 units).",
                    extension: "Expanding and then re-factorising is a two-step verification: if the factored form restores (2x−3)(x+5), the expansion is correct."
                },
                {
                    scenario: "Squared Boundary Fence",
                    context: "A wildlife sanctuary has a square enclosure of side (2x + 7) metres. Rangers need the total area to plan vegetation planting.",
                    problem: "Expand (2x + 7)² using the perfect square identity.",
                    application: "(2x)² + 2(2x)(7) + 7² = 4x² + 28x + 49",
                    question: "If x = 10, what is the area? Verify that (2(10)+7)² = 4(100)+28(10)+49.",
                    answer: "27² = 729; 400 + 280 + 49 = 729 ✓.",
                    extension: "Recognising the perfect square pattern avoids computing FOIL completely — faster and less prone to error."
                }
            ],

            algebraic_fractions: [
                {
                    scenario: "Recipe Scaling",
                    context: "A recipe uses (x+2)/3 cups of flour and (x−1)/3 cups of sugar. A chef wants the total cups of dry ingredients.",
                    problem: "Add (x+2)/3 + (x−1)/3 (same denominator).",
                    application: "(x+2+x−1)/3 = (2x+1)/3",
                    question: "If x = 5, how many cups total? Verify.",
                    answer: "(10+1)/3 = 11/3 ≈ 3.67 cups. Check: 7/3 + 4/3 = 11/3 ✓.",
                    extension: "Same denominator fractions simply add numerators — the algebraic rule mirrors the numerical rule exactly."
                },
                {
                    scenario: "Resistance in Parallel Circuits",
                    context: "Two resistors have resistances 1/(x+1) and 1/(x+2) ohms. The combined parallel resistance uses the formula R_total = 1/(1/R₁ + 1/R₂).",
                    problem: "Simplify 1/R₁ + 1/R₂ = 1/(x+1) + 1/(x+2).",
                    application: "LCM = (x+1)(x+2). Result: (x+2)/[(x+1)(x+2)] + (x+1)/[(x+1)(x+2)] = (2x+3)/[(x+1)(x+2)]",
                    question: "If x = 3, find R_total.",
                    answer: "1/R_total = (2(3)+3)/[(4)(5)] = 9/20 → R_total = 20/9 Ω ≈ 2.22 Ω.",
                    extension: "Algebraic fraction addition enables general formulas for circuit analysis — working numerically for each value of x would require repeating the calculation from scratch each time."
                },
                {
                    scenario: "Speed-Distance-Time",
                    context: "A cyclist travels d/(x+2) hours on the first leg and d/(x+3) hours on the second leg. Total time T = d/(x+2) + d/(x+3).",
                    problem: "Simplify the total time expression.",
                    application: "LCM=(x+2)(x+3). T = d(x+3)/[(x+2)(x+3)] + d(x+2)/[(x+2)(x+3)] = d(2x+5)/[(x+2)(x+3)]",
                    question: "If d=60 km and x=3, find total time in hours.",
                    answer: "T = 60(11)/(5×6) = 660/30 = 22 hours. Verify: 60/5 + 60/6 = 12 + 10 = 22 hours ✓.",
                    extension: "The combined fraction d(2x+5)/[(x+2)(x+3)] gives the exact general formula — no approximation needed regardless of d or x."
                }
            ],

            surds_and_rationalising: [
                {
                    scenario: "Diagonal Floor Measurement",
                    context: "A square room has side length √50 metres. A carpenter needs the exact diagonal length for a floor beam.",
                    problem: "Simplify √50 and use the Pythagorean theorem to find the diagonal.",
                    application: "Side = √50 = 5√2 m. Diagonal = √(50+50) = √100 = 10 m.",
                    question: "How much longer is the diagonal than one side? Express as an exact value.",
                    answer: "Diagonal − side = 10 − 5√2 = 5(2 − √2) m ≈ 2.93 m.",
                    extension: "Simplifying √50 = 5√2 first makes the Pythagorean calculation cleaner and the final simplification obvious."
                },
                {
                    scenario: "Engineering Tolerance Calculation",
                    context: "A machined part has length 3/(2+√3) cm. Quality control requires a rational denominator for the tolerance specification.",
                    problem: "Rationalise 3/(2+√3).",
                    application: "Multiply by (2−√3)/(2−√3): 3(2−√3)/(4−3) = 3(2−√3)/1 = 6−3√3",
                    question: "What is the decimal value to 3 d.p.?",
                    answer: "6 − 3(1.732) = 6 − 5.196 = 0.804 cm.",
                    extension: "Engineering specifications use rational denominators universally because irrational denominators propagate rounding errors through subsequent calculations."
                },
                {
                    scenario: "Golden Ratio in Architecture",
                    context: "The Golden Ratio φ = (1+√5)/2 appears in the proportions of the Parthenon and many architectural designs. An architect wants to rationalise a dimension involving 1/φ.",
                    problem: "Simplify 1/φ = 2/(1+√5) by rationalising the denominator.",
                    application: "Multiply by (1−√5)/(1−√5): 2(1−√5)/(1−5) = 2(1−√5)/(−4) = (√5−1)/2",
                    question: "Verify that φ − 1/φ = 1 using the simplified forms.",
                    answer: "(1+√5)/2 − (√5−1)/2 = (1+√5−√5+1)/2 = 2/2 = 1 ✓.",
                    extension: "The Golden Ratio has the remarkable property φ = 1 + 1/φ — this is why it generates self-similar proportions in art and architecture."
                }
            ],

            substitution_and_evaluation: [
                {
                    scenario: "Speed Camera Fine Calculation",
                    context: "A fine for speeding is calculated by F = 0.3v² − 10v + 100 pounds, where v is speed in mph above the limit.",
                    problem: "Evaluate F for v = 10, 20, and 30 mph over the limit.",
                    application: "v=10: 30−100+100=30. v=20: 120−200+100=20. v=30: 270−300+100=70.",
                    question: "Why does the fine decrease then increase? At what speed is the fine minimum?",
                    answer: "F = 0.3v²−10v+100 = 0.3(v²−33.3v)+100 → minimum at v=100/(2×0.3×10/0.3)... using vertex: v=10/(2×0.3)=16.7 mph. Min fine ≈ £16.67.",
                    extension: "The quadratic formula gives both the minimum fine and the speeds at which the fine returns to its initial value — substitution reveals the parabolic cost structure."
                },
                {
                    scenario: "Drug Concentration Model",
                    context: "A doctor uses the formula C = 10t × e^(−0.5t) (approximated as C = 10t(1 − 0.5t + 0.125t²)) to model drug concentration C (mg/L) at time t hours after administration.",
                    problem: "Evaluate C at t = 1, 2, 3, 4 hours using the polynomial approximation.",
                    application: "t=1: 10(1)(0.625) = 6.25. t=2: 20(0.25) = 5. t=3: 30(−0.125) = −3.75 (negative — model breaks down). t=4: model unusable for large t.",
                    question: "At what time is the concentration approximately maximum? Why does the model become invalid for large t?",
                    answer: "Maximum near t=2 (C=5 mg/L). For large t, the polynomial approximation diverges from the true exponential — substitution reveals the limitation of polynomial approximations.",
                    extension: "Real pharmacokinetic models use the true exponential C=10te^(−0.5t) — the polynomial is only accurate near t=0, emphasising why formula validity must be checked."
                },
                {
                    scenario: "Satellite Orbital Period",
                    context: "Kepler's third law: T² = (4π²/GM) × r³, where T = period (s), r = orbital radius (m), G = 6.67×10⁻¹¹, M = 5.97×10²⁴ kg (Earth mass).",
                    problem: "Evaluate T for the International Space Station at r = 6.77 × 10⁶ m.",
                    application: "T² = (4π²/(6.67×10⁻¹¹ × 5.97×10²⁴)) × (6.77×10⁶)³ = (4π²/3.98×10¹⁴) × 3.10×10²⁰ ≈ 3.08×10⁷. T ≈ 5550 s ≈ 92.5 minutes.",
                    question: "The ISS actually completes an orbit every 92 minutes. How accurate is this calculation?",
                    answer: "Calculated: 92.5 min. Actual: 92 min. Error < 1% — excellent accuracy from a simple formula evaluation.",
                    extension: "Kepler derived this law in 1619 with no computational tools beyond arithmetic — substitution of a formula derived from first principles reproduced what direct observation requires satellites to measure."
                }
            ],

            complete_simplification: [
                {
                    scenario: "Simplifying an Insurance Premium Formula",
                    context: "An actuary models insurance risk as R = 3(x+2)² − 2(x+1)(x+3) − (x² − 4) where x is a risk factor.",
                    problem: "Completely simplify R.",
                    application: "Expand: 3(x²+4x+4) − 2(x²+4x+3) − x² + 4 = 3x²+12x+12 − 2x²−8x−6 − x²+4. Collect: (3−2−1)x² + (12−8)x + (12−6+4) = 0x² + 4x + 10 = 4x + 10.",
                    question: "If x = 5, what is the risk score using both original and simplified forms?",
                    answer: "Original: 3(49)−2(6)(8)−(25−4) = 147−96−21 = 30. Simplified: 4(5)+10 = 30 ✓. The quadratic terms cancel — a remarkable simplification.",
                    extension: "The fact that R simplifies to a linear function means risk grows proportionally with x — no acceleration. This has significant actuarial implications."
                },
                {
                    scenario: "Optical Lens Formula",
                    context: "A physicist works with the lens formula simplification: (1/f) = (n−1)(1/R₁ − 1/R₂). For a specific lens, this simplifies to [(R₁+R₂)/(R₁R₂)] × (n−1).",
                    problem: "Simplify the expression 2/(x²−4) − 1/(x+2) + 3/(x−2) where x represents a lens parameter.",
                    application: "Factorise: 2/[(x+2)(x−2)] − 1/(x+2) + 3/(x−2). LCM = (x+2)(x−2). = [2 − (x−2) + 3(x+2)] / [(x+2)(x−2)] = [2−x+2+3x+6] / [(x+2)(x−2)] = (2x+10)/[(x+2)(x−2)] = 2(x+5)/[(x+2)(x−2)]",
                    question: "At what values of x is this expression undefined? State the domain restrictions.",
                    answer: "Undefined at x = ±2 (denominator = 0). Domain: x ∈ ℝ, x ≠ 2, x ≠ −2.",
                    extension: "The factored numerator 2(x+5) reveals an additional zero at x=−5 — a third critical point with physical meaning in the optical model."
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall simplification rules, definitions, and recognition criteria",
                    verbs: ["State", "Write", "List", "Recall", "Name", "Identify"],
                    example: "State the five index laws and write each with an algebraic and a numerical example"
                },
                understand: {
                    description: "Explain why techniques work; connect to numerical or geometric meaning",
                    verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect"],
                    example: "Explain why 3x and 3x² cannot be combined as like terms"
                },
                apply: {
                    description: "Use simplification techniques to simplify given expressions correctly",
                    verbs: ["Simplify", "Evaluate", "Expand", "Substitute", "Rationalise"],
                    example: "Simplify completely: 3(2x+1)² − (x+3)(x−1)"
                },
                analyze: {
                    description: "Identify appropriate technique; analyse structure; interpret simplified forms",
                    verbs: ["Identify", "Determine", "Classify", "Analyse", "Select"],
                    example: "Without simplifying, determine whether (x+3)/(x²+5x+6) will simplify to a monomial. Justify."
                },
                evaluate: {
                    description: "Assess correctness of simplifications; evaluate efficiency; critique methods",
                    verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge"],
                    example: "A student simplifies (x²+4)/(x+2) to (x+2). Evaluate this claim and identify the error."
                },
                create: {
                    description: "Construct expressions with specific properties; design problems; derive rules",
                    verbs: ["Construct", "Design", "Derive", "Create", "Formulate"],
                    example: "Create an algebraic fraction with numerator degree 3 that simplifies to x−2. Justify your construction."
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Can collect like terms in simple cases with no sign complications",
                        "Applies multiplication index law to single-variable expressions",
                        "Expands single brackets without sign errors in straightforward cases"
                    ],
                    support: [
                        "Use colour coding for like term identification",
                        "Numerical pattern tables to build index law intuition",
                        "Step-by-step FOIL diagrams for double bracket expansion"
                    ]
                },
                developing: {
                    characteristics: [
                        "Collects multi-variable like terms including negative coefficients",
                        "Applies all five index laws including zero and negative indices",
                        "Expands double brackets and recognises special products"
                    ],
                    support: [
                        "Practice with fractional indices and algebraic fractions",
                        "Introduce surd simplification and adding unlike surds",
                        "Multi-step simplification problems requiring two or three techniques"
                    ]
                },
                proficient: {
                    characteristics: [
                        "Selects appropriate simplification technique from expression structure",
                        "Simplifies algebraic fractions requiring factorisation before cancelling",
                        "Rationalises denominators including conjugate cases"
                    ],
                    support: [
                        "Complex multi-step problems combining all techniques",
                        "Derivation and proof tasks (e.g., prove index law from definition)",
                        "Error analysis: identify and correct mistakes in given simplifications"
                    ]
                },
                expert: {
                    characteristics: [
                        "Derives simplification rules from first principles",
                        "Simplifies over different number systems (e.g., complex numbers)",
                        "Connects simplification to calculus, number theory, and abstract algebra"
                    ],
                    support: [
                        "Open investigations of new simplification patterns",
                        "Cross-topic problems (simplification applied in calculus integrals)",
                        "Research into computational simplification algorithms (CAS systems)"
                    ]
                }
            }
        };

        this.assessmentQuestions = {
            collecting_like_terms: {
                remember: "Write three pairs of like terms and three pairs of unlike terms. Explain the distinction.",
                understand: "Explain why 4x² and 4x cannot be combined, using a geometric analogy.",
                apply: "Simplify: 5a²b − 3ab + 2a²b + 7ab − a²b + b",
                analyze: "Without simplifying, state how many terms the simplified form of 3x² + 5x − 2x² + x − 4x² + 3 will have. Justify.",
                evaluate: "A student simplifies 3xy + 4x²y as 7x³y². Evaluate this answer and identify all errors.",
                create: "Write a five-term expression that simplifies to 2x² − 3x + 4. Verify by expanding from your answer."
            },
            index_laws: {
                remember: "State all five index laws, including the zero and negative index rules.",
                understand: "Prove the multiplication index law aᵐ × aⁿ = aᵐ⁺ⁿ from the definition of exponentiation.",
                apply: "Simplify: (3x²y³)⁴ ÷ (9x³y⁵) × (xy)⁻²",
                analyze: "Explain why x² × y³ cannot be simplified using the multiplication index law.",
                evaluate: "A student writes (2x³)² = 2x⁶. Evaluate and correct.",
                create: "Design an expression using at least three different index laws that simplifies to 4x⁵."
            },
            expanding_brackets: {
                remember: "State the FOIL mnemonic and illustrate with (x+2)(x+3).",
                understand: "Explain why (a+b)² ≠ a² + b² using a geometric area diagram.",
                apply: "Expand and simplify: (3x−2)² − (x+1)(2x−3)",
                analyze: "Identify all terms in (2x+3)(x²−x+4) before expanding. How many terms should the expansion have before collecting?",
                evaluate: "A student expands (x−4)(x+4) as x² − 4x + 4x − 16 = x² − 16. Evaluate this process.",
                create: "Write two different binomial products that both expand to x² + 5x + 6."
            },
            algebraic_fractions: {
                remember: "State the rule for when cancellation is legal in algebraic fractions.",
                understand: "Explain why (x+3)/(x+5) cannot be simplified by cancelling x.",
                apply: "Simplify fully: (2x²+7x+3)/(2x²+5x+2)",
                analyze: "Determine all values of x for which (x²−16)/(x²+5x+4) is undefined.",
                evaluate: "A student simplifies (x²+x)/(x) as x² + 1. Evaluate and correct.",
                create: "Construct an algebraic fraction whose numerator is degree 2 and which simplifies to (x−3)/(x+1)."
            },
            surds_and_rationalising: {
                remember: "State the product rule for surds and illustrate with a numerical example.",
                understand: "Explain geometrically why √2 is irrational using the unit square.",
                apply: "Simplify: (3√5 + √20) / (√5 − 2)",
                analyze: "Without calculating, determine whether 2√3 + √12 will simplify to a single surd term. Justify.",
                evaluate: "A student rationalises 4/(√3+1) by multiplying by (√3+1)/(√3+1). Evaluate this strategy.",
                create: "Construct a surd expression with a binomial denominator whose rationalised form is (5+2√3)/13."
            },
            substitution_and_evaluation: {
                remember: "State the order of operations (BIDMAS/BODMAS) and give an example where it affects the result.",
                understand: "Explain why negative values must be bracketed when substituted into expressions.",
                apply: "Evaluate 2a² − 3ab + b² when a = −2 and b = 3.",
                analyze: "For the expression √(x² − 4), determine the domain (values of x for which the expression is defined).",
                evaluate: "A student evaluates 3x² at x = −4 as 3 × −4² = 3 × −16 = −48. Evaluate this working.",
                create: "Write a quadratic expression in x that evaluates to 0 when x = 3 and to 10 when x = 0. Verify."
            }
        };
    }

    // ============================================================
    // TOPIC HANDLERS
    // ============================================================

    handleCollectingLikeTerms(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Collecting Like Terms",
            category: 'simplification',
            summary: "Collecting like terms is the fundamental simplification technique. Terms are 'like' when they share an identical variable part. Only coefficients change when like terms are combined. This is always the final step after any expansion.",

            definitions: {
                likeTerm: {
                    definition: "A term is 'like' another if and only if both have identical variable parts — same variables raised to identical powers",
                    example: "3x²y and −7x²y are like (both x²y); 3x² and 3x are unlike (different power of x)"
                },
                coefficient: {
                    definition: "The numerical factor multiplying the variable part of a term",
                    example: "In −4x²y, the coefficient is −4; in x³, the coefficient is 1 (implied)"
                },
                simplestForm: {
                    definition: "An expression in which no further like terms can be combined",
                    note: "Simplest form is not unique in presentation order, but the set of terms is unique"
                }
            },

            methods: {
                identifyAndGroup: {
                    step1: "List all distinct variable parts present in the expression",
                    step2: "Group all terms with each variable part",
                    step3: "Sum the coefficients within each group",
                    step4: "Write the result in standard form (descending degree)"
                },
                colourCoding: {
                    description: "Assign a distinct colour to each variable type; highlight terms in their colour; collect each colour group",
                    benefit: "Makes implicit grouping structure visible; prevents missed terms and sign errors"
                }
            },

            strategicApproach: {
                steps: [
                    "1. Read the expression and list all distinct variable parts",
                    "2. Annotate each term with its coefficient (include the sign)",
                    "3. Sum coefficients for each variable group",
                    "4. Write the simplified expression in descending degree order",
                    "5. Verify by substituting a simple numerical value into original and simplified forms"
                ]
            },

            detailedSteps: {
                signHandling: "The sign immediately before a term belongs to that term's coefficient: in 3x − 5y, the coefficient of y is −5, not +5",
                bracketExpansionFirst: "If the expression contains brackets, expand first; then collect like terms from the result"
            },

            examples: [
                {
                    expression: "3x² + 5x − 2x² + 7 − 3x + 1",
                    solution: {
                        groups: "x²: {3, −2}; x: {5, −3}; constants: {7, 1}",
                        combining: "x²: 1; x: 2; constant: 8",
                        result: "x² + 2x + 8",
                        verification: "x=1: 3+5−2+7−3+1=11; simplified: 1+2+8=11 ✓"
                    }
                },
                {
                    expression: "4a + 3b − 2a + 5b − a",
                    solution: {
                        groups: "a: {4, −2, −1}; b: {3, 5}",
                        combining: "a: 1; b: 8",
                        result: "a + 8b"
                    }
                },
                {
                    expression: "2x²y − 3xy² + x²y + 4xy²",
                    solution: {
                        groups: "x²y: {2, 1}; xy²: {−3, 4}",
                        combining: "x²y: 3; xy²: 1",
                        result: "3x²y + xy²",
                        note: "x²y and xy² are unlike — their variable parts differ"
                    }
                }
            ],

            patterns: {
                singleVariable: "Straightforward coefficient arithmetic",
                multipleVariables: "Each distinct variable combination is a separate group",
                withSurds: "Treat √2, √3 etc. as distinct variable parts — only like surds combine",
                afterExpansion: "Always collect like terms after any bracket expansion"
            },

            connectionToOtherTopics: {
                expandingBrackets: "Expanding creates multiple terms; collecting like terms then simplifies the result",
                indexLaws: "Index laws simplify individual terms; like terms are then collected",
                algebraicFractions: "After adding fractions with common denominators, collect like terms in numerator",
                substitution: "Simplifying before substituting reduces arithmetic; verify by substituting into both forms"
            },

            commonErrors: [
                {
                    error: "Treating x² and x as like terms",
                    example: "3x + 4x² = 7x³ — wrong; cannot combine unlike powers",
                    fix: "Check that both the variable AND its power match exactly"
                },
                {
                    error: "Sign error: treating the sign as separate from the coefficient",
                    example: "3x − 5x misread as 3x + 5x = 8x instead of −2x",
                    fix: "Write each coefficient with its sign before grouping: +3x and −5x"
                },
                {
                    error: "Multiplying coefficients when collecting: 3x × 4x = 12x",
                    example: "3x + 4x = 12x instead of 7x",
                    fix: "Like terms are ADDED, not multiplied. Think: 3 apples + 4 apples = 7 apples."
                }
            ],

            assessmentQuestions: {
                recall: ["Define 'like terms' with two examples and two non-examples"],
                understanding: ["Explain why you cannot simplify 3x + 4y further"],
                application: ["Simplify: 7m² − 3m + 2m² + m − 5m² + 4"],
                analysis: ["How many distinct terms will 4ab − 2a²b + 3ab − a²b simplify to?"]
            }
        };

        if (/negative.*coefficient|sign.*error/i.test(input)) {
            content.focus = "signHandling";
        } else if (/surd.*like|like.*surd/i.test(input)) {
            content.focus = "surdsAsLikeTerms";
        } else if (/after.*expand|expand.*collect/i.test(input)) {
            content.focus = "postExpansionCollection";
        }

        return content;
    }

    handleIndexLaws(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Index Laws (Laws of Indices)",
            category: 'simplification',
            summary: "The five index laws govern all operations on expressions with powers. They follow directly from the definition aⁿ = a × a × ... × a (n times). Understanding the proofs prevents law confusion.",

            definitions: {
                index: { definition: "The small raised number indicating repeated multiplication", example: "In x⁵, the index is 5" },
                base: { definition: "The number or expression being raised to a power", example: "In 3x², the base of the index operation is x" },
                indexNotation: { definition: "aⁿ = a × a × ... × a (n factors)", note: "This definition is the source of every index law" }
            },

            theFiveLaws: {
                multiplication: { law: "aᵐ × aⁿ = aᵐ⁺ⁿ", condition: "Same base required", example: "x⁴ × x³ = x⁷" },
                division: { law: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ", condition: "Same base required", example: "y⁶ ÷ y² = y⁴" },
                powerOfPower: { law: "(aᵐ)ⁿ = aᵐⁿ", condition: "None", example: "(x³)⁴ = x¹²" },
                powerOfProduct: { law: "(ab)ⁿ = aⁿbⁿ", condition: "None", example: "(3x)² = 9x²" },
                powerOfQuotient: { law: "(a/b)ⁿ = aⁿ/bⁿ", condition: "b ≠ 0", example: "(x/2)³ = x³/8" }
            },

            specialIndices: {
                zero: { rule: "a⁰ = 1 (a ≠ 0)", example: "5⁰=1; (3x²)⁰=1" },
                negative: { rule: "a⁻ⁿ = 1/aⁿ", example: "x⁻³ = 1/x³; 2⁻¹ = 0.5" },
                unitFraction: { rule: "a^(1/n) = ⁿ√a", example: "x^(1/3) = ∛x; 16^(1/4) = 2" },
                generalFraction: { rule: "a^(m/n) = (ⁿ√a)ᵐ", example: "27^(2/3) = (∛27)² = 3² = 9" }
            },

            strategicApproach: {
                steps: [
                    "1. Check if bases are the same before applying multiplication or division law",
                    "2. Apply power-of-power law before multiplication/division laws",
                    "3. Raise all factors (including the coefficient) to the required power",
                    "4. Convert negative and fractional indices at the final step",
                    "5. Verify with a simple numerical substitution"
                ]
            },

            workedExamples: [
                {
                    expression: "3x²y³ × 4x⁵y",
                    solution: "Coefficients: 3×4=12; x: x²×x⁵=x⁷; y: y³×y=y⁴ → 12x⁷y⁴"
                },
                {
                    expression: "(2x³)⁴",
                    solution: "2⁴×(x³)⁴ = 16×x¹² = 16x¹²"
                },
                {
                    expression: "x^(3/2) ÷ x^(1/2)",
                    solution: "x^(3/2 − 1/2) = x^(2/2) = x"
                },
                {
                    expression: "(3a²b⁻¹)³",
                    solution: "3³×a⁶×b⁻³ = 27a⁶/b³"
                }
            ],

            commonErrors: [
                { error: "Adding indices when multiplying different bases: x²×y³=xy⁵", fix: "Multiplication law requires the SAME base" },
                { error: "Multiplying instead of adding: x³×x²=x⁶", fix: "Add indices when multiplying same base" },
                { error: "a⁰ = 0", fix: "a⁰ = 1; use division law: aⁿ÷aⁿ = a⁰ = 1" },
                { error: "Omitting coefficient from power: (2x)³ = 2x³", fix: "Raise EVERY factor to the power: (2x)³ = 8x³" }
            ]
        };

        return content;
    }

    handleExpandingBrackets(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Expanding Brackets",
            category: 'simplification',
            summary: "Expanding brackets applies the distributive law to remove brackets and convert a product form to a sum form. Every term outside multiplies every term inside. After expanding, always collect like terms.",

            definitions: {
                distributiveLaw: { statement: "a(b + c) = ab + ac", extension: "Works for any number of terms inside the bracket" },
                FOIL: { meaning: "First, Outer, Inner, Last — mnemonic for (a+b)(c+d) = ac + ad + bc + bd" },
                perfectSquare: { form: "(a ± b)² = a² ± 2ab + b²", note: "Middle term 2ab is the most commonly forgotten term" },
                differenceSquares: { form: "(a+b)(a−b) = a² − b²", note: "Middle terms cancel; result is a two-term difference" }
            },

            singleBracket: {
                rule: "Each term inside is multiplied by the external term, preserving signs",
                signRule: "Positive external: signs unchanged. Negative external: ALL signs inside reverse",
                examples: [
                    { expression: "4x(2x − 3)", result: "8x² − 12x" },
                    { expression: "−3(x² + 2x − 1)", result: "−3x² − 6x + 3" }
                ]
            },

            doubleBracket: {
                FOIL: {
                    step1: "First: multiply first terms of each bracket",
                    step2: "Outer: multiply outer terms",
                    step3: "Inner: multiply inner terms",
                    step4: "Last: multiply last terms",
                    step5: "Collect any like terms"
                },
                examples: [
                    { expression: "(x+4)(x+2)", expansion: "x²+2x+4x+8", result: "x²+6x+8" },
                    { expression: "(2x−3)(x+5)", expansion: "2x²+10x−3x−15", result: "2x²+7x−15" },
                    { expression: "(x−4)(x+4)", expansion: "x²+4x−4x−16", result: "x²−16" }
                ]
            },

            specialProductsQuickForms: {
                perfectSquarePlus: "(a+b)² = a² + 2ab + b²",
                perfectSquareMinus: "(a−b)² = a² − 2ab + b²",
                differenceSquares: "(a+b)(a−b) = a² − b²",
                applicationTip: "Recognise these patterns before expanding to use the shortcut"
            },

            strategicApproach: {
                steps: [
                    "1. Identify whether single, double, or triple bracket expansion is needed",
                    "2. Check for special product patterns (perfect square, difference of squares)",
                    "3. Apply FOIL or distributive law systematically",
                    "4. Collect all like terms in the result",
                    "5. Verify by substituting a simple value"
                ]
            },

            commonErrors: [
                { error: "Only multiplying the first term in a single bracket expansion", example: "3(x+5)=3x+5", fix: "Every term inside must be multiplied" },
                { error: "Forgetting the middle term in perfect square", example: "(x+4)²=x²+16", fix: "Always include 2ab: (x+4)²=x²+8x+16" },
                { error: "Sign error with negative external: −2(x−3)=−2x−6", fix: "Negative × negative = positive: −2×(−3)=+6" }
            ]
        };

        if (/perfect.*square|square.*expand/i.test(input)) {
            content.focus = "perfectSquare";
        } else if (/triple.*bracket|three.*bracket/i.test(input)) {
            content.focus = "tripleBracket";
        } else if (/single.*bracket|monomial/i.test(input)) {
            content.focus = "singleBracket";
        }

        return content;
    }

    handleAlgebraicFractions(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Algebraic Fractions",
            category: 'simplification',
            summary: "Algebraic fractions obey every rule of numerical fractions. The critical additional skill is recognising when factors can legally be cancelled (only factors — never terms) and finding the LCM of polynomial denominators for addition and subtraction.",

            definitions: {
                algebraicFraction: { definition: "A fraction containing algebraic expressions in numerator, denominator, or both" },
                domain: { definition: "The set of values for which the expression is defined — excludes values making the denominator zero" },
                lowestTerms: { definition: "Numerator and denominator share no common factors other than 1" },
                legalCancellation: { rule: "Only FACTORS may be cancelled — expressions that multiply the entire numerator and the entire denominator" }
            },

            simplifyingProcess: {
                step1: "Fully factorise the numerator",
                step2: "Fully factorise the denominator",
                step3: "Identify common factors (not terms) appearing in both",
                step4: "Cancel common factors; write the remaining expression",
                step5: "State the domain restriction (values excluded)",
                keyWarning: "NEVER cancel terms that are added or subtracted: (x+3)/(x+5) ≠ 3/5"
            },

            operations: {
                simplify: { method: "Factorise both; cancel common factors", example: "(x²−4)/(x+2) = (x+2)(x−2)/(x+2) = x−2" },
                multiply: { method: "Factorise everything; cancel across; multiply remaining", example: "(x+3)/(x−1) × (x²−1)/(x²+5x+6) = (x+3)/(x−1) × (x−1)(x+1)/[(x+2)(x+3)] = (x+1)/(x+2)" },
                divide: { method: "Flip the divisor; then multiply", example: "(x²+x)/(3) ÷ (x+1)/(6) = x(x+1)/3 × 6/(x+1) = 2x" },
                addSubtract: {
                    sameDenominator: "Add/subtract numerators directly",
                    differentDenominators: "Find LCM; rewrite both fractions; add/subtract numerators; simplify",
                    example: "2/(x+1) + 3/(x−2): LCM=(x+1)(x−2); result=(5x−1)/[(x+1)(x−2)]"
                }
            },

            commonErrors: [
                { error: "Cancelling terms: (x+4)/(x+7) = 4/7 by 'cancelling x'", fix: "Factorise first; only cancel full factors" },
                { error: "Adding fractions by adding numerators and denominators", fix: "Find common denominator first" },
                { error: "Failing to state domain restriction after cancellation", fix: "Always write x ≠ value for each cancelled factor" }
            ]
        };

        if (/add.*fraction|subtract.*fraction/i.test(input)) {
            content.focus = "addingSubtracting";
        } else if (/cancel|simplif.*fraction/i.test(input)) {
            content.focus = "simplifyingCancellation";
        } else if (/multiply.*fraction|divide.*fraction/i.test(input)) {
            content.focus = "multiplyingDividing";
        }

        return content;
    }

    handleSurdsAndRationalising(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Surds and Rationalising Denominators",
            category: 'simplification',
            summary: "Surds are irrational root expressions that cannot simplify to rational numbers. They are simplified by extracting perfect square factors, added only when like (same simplified radicand), and rationalisedby multiplying by an appropriate form of 1.",

            definitions: {
                surd: { definition: "An irrational root that cannot be expressed as a fraction p/q", example: "√2, √3, √5, ∛7 are surds; √4 = 2 and √9 = 3 are NOT surds" },
                rationalisingDenominator: { definition: "Rewriting a fraction so the denominator contains no surd", method: "Multiply by a suitable form of 1 (using the surd or its conjugate)" },
                conjugate: { definition: "For a+√b, the conjugate is a−√b; their product a²−b is rational" }
            },

            productAndQuotientRules: {
                product: { rule: "√(ab) = √a × √b", warning: "√(a+b) ≠ √a + √b (common error)" },
                quotient: { rule: "√(a/b) = √a/√b" }
            },

            simplificationProcess: {
                method: "Find the largest perfect square factor of the radicand; extract it",
                steps: ["1. Write radicand as product of largest perfect square and remaining factor", "2. √(n² × m) = n√m"],
                examples: [
                    { surd: "√75", process: "√(25×3) = 5√3" },
                    { surd: "√200", process: "√(100×2) = 10√2" },
                    { surd: "√(12x²)", process: "√(4×3×x²) = 2x√3 (x≥0)" }
                ]
            },

            addingSubtracting: {
                rule: "Simplify all surds first; collect terms with the same radicand as like terms",
                example: "√50 + √18 − 3√2 = 5√2 + 3√2 − 3√2 = 5√2"
            },

            rationalising: {
                simpleCase: { form: "a/√b", method: "Multiply by √b/√b", example: "5/√3 = 5√3/3" },
                conjugateCase: {
                    form: "a/(p+√q)",
                    method: "Multiply by (p−√q)/(p−√q)",
                    example: "6/(2+√5): × (2−√5)/(2−√5) = 6(2−√5)/(4−5) = −6(2−√5) = −12+6√5"
                }
            },

            commonErrors: [
                { error: "√(a+b) = √a + √b", fix: "Only the product rule √(ab)=√a×√b is valid; no sum rule exists" },
                { error: "Using (√a+b)/(√a+b) instead of the conjugate (√a−b)/(√a−b) to rationalise", fix: "The conjugate has the OPPOSITE sign for the surd term" },
                { error: "Incomplete simplification: √72 = 2√18 instead of 6√2", fix: "Find the LARGEST perfect square factor, not just any perfect square factor" }
            ]
        };

        if (/rationalise|rationalize|conjugate/i.test(input)) {
            content.focus = "rationalising";
        } else if (/simplif.*surd|surd.*simplif/i.test(input)) {
            content.focus = "simplifyingSurds";
        } else if (/add.*surd|surd.*add/i.test(input)) {
            content.focus = "addingSubtractingSurds";
        }

        return content;
    }

    handleSubstitutionAndEvaluation(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Substitution and Evaluation",
            category: 'simplification',
            summary: "Substitution replaces each variable with a given value, transforming an algebraic expression into a numerical calculation. Order of operations (BIDMAS) must be strictly followed. Negative values must always be placed in brackets.",

            definitions: {
                substitution: { definition: "Replacing each occurrence of a variable with a specified numerical value" },
                evaluation: { definition: "Computing the numerical result of an expression after substitution" },
                BIDMAS: { order: "Brackets → Indices → Division/Multiplication (left to right) → Addition/Subtraction (left to right)" }
            },

            substitutionProcess: {
                steps: [
                    "1. Write the expression with all variables visible",
                    "2. Replace each variable with its value, using brackets for negative values",
                    "3. Apply BIDMAS: evaluate indices before multiplication, multiplication before addition",
                    "4. Compute the numerical result",
                    "5. Include units if the expression models a physical quantity"
                ],
                bracketRule: "Always bracket negative values: if x = −3, write (−3)² = 9, NOT −3² = −9"
            },

            workedExamples: [
                {
                    expression: "5x² − 3x + 2",
                    substitution: "x = −2",
                    steps: "5(−2)² − 3(−2) + 2 = 5(4) + 6 + 2 = 20 + 6 + 2 = 28"
                },
                {
                    expression: "√(a² + b²)",
                    substitution: "a = 3, b = 4",
                    steps: "√(9 + 16) = √25 = 5"
                },
                {
                    expression: "(p − q)/(p + q)",
                    substitution: "p = 5, q = −1",
                    steps: "(5 − (−1))/(5 + (−1)) = 6/4 = 3/2"
                }
            ],

            formulaEvaluation: {
                principle: "A formula is only as useful as our ability to substitute specific values and evaluate precisely",
                examples: [
                    { formula: "E = mc²", substitution: "m=2, c=3×10⁸", result: "E = 2×(3×10⁸)² = 2×9×10¹⁶ = 1.8×10¹⁷ J" },
                    { formula: "A = πr²", substitution: "r=7", result: "A = π(49) = 49π ≈ 153.94 cm²" }
                ]
            },

            commonErrors: [
                { error: "x² with x=−4: writing −4² = −16 instead of (−4)² = 16", fix: "Always bracket negative values before squaring" },
                { error: "Adding before multiplying: 3 + 4x at x=5: computing 7×5=35 instead of 3+20=23", fix: "Apply BIDMAS: multiplication before addition" },
                { error: "Substituting into only some occurrences of a variable", fix: "Every occurrence of the variable must be replaced" }
            ]
        };

        if (/formula|physics|science|real.?world/i.test(input)) {
            content.focus = "formulaEvaluation";
        } else if (/negative.*substitut|bracket.*negative/i.test(input)) {
            content.focus = "negativeValues";
        }

        return content;
    }

    handleCompleteSimplification(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Complete Simplification Strategy",
            category: 'simplification',
            summary: "Complete simplification applies all techniques in the correct strategic order. The expression's structure determines which techniques are needed. Verification by substitution confirms the simplification is correct.",

            decisionFlowchart: {
                step1: { question: "Any brackets to expand?", yes: "Expand; collect like terms", no: "Proceed" },
                step2: { question: "Any like terms remaining?", yes: "Collect", no: "Proceed" },
                step3: { question: "Any index expressions?", yes: "Apply appropriate index laws", no: "Proceed" },
                step4: { question: "Any fractions?", yes: "Factorise; cancel; find common denominator", no: "Proceed" },
                step5: { question: "Any surds to simplify or rationalise?", yes: "Simplify surds; rationalise denominator", no: "Fully simplified" },
                step6: "Verify by substitution: substitute x=2 (or another simple value) into original and simplified forms"
            },

            strategicOrder: {
                principle: "The order matters: expanding must precede collecting; factorising must precede cancelling in fractions",
                rule1: "Never collect like terms inside unexpanded brackets",
                rule2: "Never cancel in fractions before factorising",
                rule3: "Always verify the final result"
            },

            workedExamples: [
                {
                    expression: "2(x+3)² − (x+2)(x+4) + 5",
                    step1: "Expand: 2(x²+6x+9) − (x²+6x+8) + 5",
                    step2: "Distribute: 2x²+12x+18 − x²−6x−8 + 5",
                    step3: "Collect: x² + 6x + 15"
                },
                {
                    expression: "(x²−1)/(x²+2x+1) + 1/(x+1)",
                    step1: "Factorise: (x+1)(x−1)/(x+1)² + 1/(x+1)",
                    step2: "Cancel: (x−1)/(x+1) + 1/(x+1)",
                    step3: "Add: x/( x+1)"
                },
                {
                    expression: "√(3x⁴) × √(12x²)",
                    step1: "Product rule: √(3x⁴ × 12x²) = √(36x⁶)",
                    step2: "Simplify: 6x³ (assuming x≥0)"
                }
            ],

            checklistForCompleteness: [
                "All brackets expanded?",
                "All like terms collected?",
                "All index expressions simplified?",
                "All fractions in lowest terms with rational denominators?",
                "All surds in simplest form?",
                "Verification by substitution completed?"
            ],

            commonErrors: [
                { error: "Collecting like terms before expanding brackets", fix: "Expand all brackets first" },
                { error: "Cancelling in fractions before factorising", fix: "Always factorise before attempting any cancellation" },
                { error: "Stopping too early — declaring simplified when a further step remains", fix: "Run through the complete checklist systematically" }
            ]
        };

        return content;
    }

    // ============================================================
    // TOPIC DETECTION AND ROUTING
    // ============================================================

    identifyTopic(problem) {
        const input = (problem || '').toString();

        for (const [topicId, topicData] of Object.entries(this.mathematicsTopics)) {
            for (const pattern of topicData.patterns) {
                if (pattern.test(input)) {
                    return { topicId, topicData };
                }
            }
        }

        // Default to complete simplification
        return {
            topicId: 'complete_simplification',
            topicData: this.mathematicsTopics.complete_simplification
        };
    }

    generateContent(problem) {
        const { topicId, topicData } = this.identifyTopic(problem);
        const handler = topicData.handler;
        const content = handler(problem);

        content.lesson = this.lessons[topicId] || null;
        content.misconceptions = this.commonMisconceptions[topicId] || {};
        content.scenarios = this.contextualScenarios[topicId] || [];
        content.assessmentQuestions = this.assessmentQuestions?.[topicId] || {};
        content.metacognitivePrompts = this.metacognitivePrompts;
        content.relatedPracticals = topicData.relatedPracticals || [];

        this.currentProblem = problem;
        this.currentContent = content;
        return content;
    }
}

