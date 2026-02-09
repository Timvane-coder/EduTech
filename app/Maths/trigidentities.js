// Enhanced Trigonometric Identities Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedTrigonometricIdentitiesWorkbook {
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
        this.initializeTrigonometricSolvers();
        this.initializeTrigonometricLessons();
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
        this.initializeIdentityDatabase();
        this.initializeProofStrategiesDatabase();
        this.initializeVisualizationDatabase();
    }

    initializeMathSymbols() {
        return {
            // Trigonometric functions
            'sin': 'sin', 'cos': 'cos', 'tan': 'tan',
            'csc': 'csc', 'sec': 'sec', 'cot': 'cot',
            'arcsin': 'arcsin', 'arccos': 'arccos', 'arctan': 'arctan',
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            'sigma': 'σ', 'omega': 'ω', 'phi': 'φ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥', 'therefore': '∴', 'because': '∵'
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
                identityBg: '#e6f3ff',
                proofBg: '#f0e6ff'
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
                identityBg: '#e1f5fe',
                proofBg: '#f3e5f5'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeTrigonometricLessons() {
        this.lessons = {
            pythagorean_identities: {
                title: "Pythagorean Identities",
                concepts: [
                    "sin²θ + cos²θ = 1 (fundamental Pythagorean identity)",
                    "1 + tan²θ = sec²θ (derived from dividing by cos²θ)",
                    "1 + cot²θ = csc²θ (derived from dividing by sin²θ)",
                    "All three forms are equivalent and interchangeable"
                ],
                theory: "The Pythagorean identities come from the Pythagorean theorem applied to the unit circle. For any point (cos θ, sin θ) on the unit circle, the distance from the origin is 1, giving us sin²θ + cos²θ = 1.",
                keyFormulas: {
                    "Primary": "sin²θ + cos²θ = 1",
                    "Tangent Form": "1 + tan²θ = sec²θ",
                    "Cotangent Form": "1 + cot²θ = csc²θ",
                    "Rearranged Forms": "sin²θ = 1 - cos²θ, cos²θ = 1 - sin²θ"
                },
                derivationSteps: [
                    "Start with unit circle: x² + y² = 1",
                    "Substitute x = cos θ, y = sin θ",
                    "Get cos²θ + sin²θ = 1",
                    "Divide by cos²θ to get tan form",
                    "Divide by sin²θ to get cot form"
                ],
                applications: [
                    "Simplifying trigonometric expressions",
                    "Solving trigonometric equations",
                    "Integration and differentiation",
                    "Physics: wave mechanics, oscillations"
                ],
                unitCircleConnection: "Points (cos θ, sin θ) always satisfy x² + y² = 1"
            },

            reciprocal_identities: {
                title: "Reciprocal Identities",
                concepts: [
                    "sin θ and csc θ are reciprocals: sin θ = 1/csc θ, csc θ = 1/sin θ",
                    "cos θ and sec θ are reciprocals: cos θ = 1/sec θ, sec θ = 1/cos θ",
                    "tan θ and cot θ are reciprocals: tan θ = 1/cot θ, cot θ = 1/tan θ",
                    "Reciprocals flip the fraction"
                ],
                theory: "Reciprocal identities define the cosecant, secant, and cotangent functions as reciprocals of sine, cosine, and tangent respectively. These relationships are fundamental and always true.",
                keyFormulas: {
                    "Sine-Cosecant": "csc θ = 1/sin θ",
                    "Cosine-Secant": "sec θ = 1/cos θ",
                    "Tangent-Cotangent": "cot θ = 1/tan θ",
                    "Inverse Forms": "sin θ = 1/csc θ, cos θ = 1/sec θ, tan θ = 1/cot θ"
                },
                reminders: [
                    "Never divide by zero: csc θ undefined when sin θ = 0",
                    "sec θ undefined when cos θ = 0",
                    "cot θ undefined when tan θ = 0 (when sin θ = 0)"
                ],
                applications: [
                    "Converting between trig functions",
                    "Simplifying complex expressions",
                    "Integration techniques",
                    "Solving equations with multiple functions"
                ]
            },

            quotient_identities: {
                title: "Quotient Identities",
                concepts: [
                    "tan θ = sin θ / cos θ (tangent is sine over cosine)",
                    "cot θ = cos θ / sin θ (cotangent is cosine over sine)",
                    "These connect the six trig functions",
                    "Undefined when denominator is zero"
                ],
                theory: "Quotient identities define tangent and cotangent in terms of sine and cosine. They come directly from the definitions on the unit circle where tan θ is the y-coordinate divided by the x-coordinate.",
                keyFormulas: {
                    "Tangent": "tan θ = sin θ / cos θ",
                    "Cotangent": "cot θ = cos θ / sin θ",
                    "Alternative": "cot θ = 1/tan θ = cos θ / sin θ"
                },
                derivation: [
                    "From unit circle: tan θ = y/x",
                    "Since y = sin θ and x = cos θ",
                    "We get tan θ = sin θ / cos θ",
                    "Similarly for cotangent"
                ],
                applications: [
                    "Converting tan/cot to sin/cos",
                    "Simplifying fractions",
                    "Solving equations",
                    "Calculus: derivatives and integrals"
                ],
                restrictions: "tan θ undefined when cos θ = 0 (odd multiples of π/2), cot θ undefined when sin θ = 0 (multiples of π)"
            },

            cofunction_identities: {
                title: "Cofunction Identities",
                concepts: [
                    "sin(90° - θ) = cos θ (sine and cosine are cofunctions)",
                    "cos(90° - θ) = sin θ",
                    "tan(90° - θ) = cot θ (tangent and cotangent are cofunctions)",
                    "Complementary angles have swapped trig values"
                ],
                theory: "Cofunction identities relate the values of trig functions at complementary angles (angles that sum to 90° or π/2). The 'co' in cosine, cotangent, and cosecant indicates this complementary relationship.",
                keyFormulas: {
                    "Sine-Cosine": "sin(π/2 - θ) = cos θ, cos(π/2 - θ) = sin θ",
                    "Tangent-Cotangent": "tan(π/2 - θ) = cot θ, cot(π/2 - θ) = tan θ",
                    "Secant-Cosecant": "sec(π/2 - θ) = csc θ, csc(π/2 - θ) = sec θ",
                    "Degree Form": "Use 90° instead of π/2"
                },
                geometricMeaning: "In a right triangle, if one angle is θ, the other acute angle is 90° - θ. The sine of one is the cosine of the other.",
                applications: [
                    "Simplifying expressions with complementary angles",
                    "Solving equations",
                    "Right triangle problems",
                    "Proving other identities"
                ]
            },

            even_odd_identities: {
                title: "Even-Odd Identities",
                concepts: [
                    "cos(-θ) = cos θ (cosine is an even function)",
                    "sin(-θ) = -sin θ (sine is an odd function)",
                    "tan(-θ) = -tan θ (tangent is an odd function)",
                    "Even functions: symmetric about y-axis; Odd functions: symmetric about origin"
                ],
                theory: "Even-odd identities describe the symmetry properties of trigonometric functions. Cosine and secant are even (symmetric about the y-axis), while sine, tangent, cosecant, and cotangent are odd (symmetric about the origin).",
                keyFormulas: {
                    "Even Functions": "cos(-θ) = cos θ, sec(-θ) = sec θ",
                    "Odd Functions": "sin(-θ) = -sin θ, tan(-θ) = -tan θ, csc(-θ) = -csc θ, cot(-θ) = -cot θ",
                    "General Property": "f(-x) = f(x) for even, f(-x) = -f(x) for odd"
                },
                unitCircleExplanation: "Point (cos θ, sin θ) on circle; point at -θ is (cos θ, -sin θ), showing cos(-θ) = cos θ and sin(-θ) = -sin θ",
                applications: [
                    "Simplifying expressions with negative angles",
                    "Integration over symmetric intervals",
                    "Fourier series",
                    "Signal processing"
                ]
            },

            sum_difference_identities: {
                title: "Sum and Difference Identities",
                concepts: [
                    "sin(α ± β) = sin α cos β ± cos α sin β",
                    "cos(α ± β) = cos α cos β ∓ sin α sin β (note the sign change)",
                    "tan(α ± β) = (tan α ± tan β) / (1 ∓ tan α tan β)",
                    "These expand sums/differences into products"
                ],
                theory: "Sum and difference identities express the trig functions of a sum or difference of angles in terms of trig functions of the individual angles. They are fundamental for deriving many other identities.",
                keyFormulas: {
                    "Sine Sum": "sin(α + β) = sin α cos β + cos α sin β",
                    "Sine Difference": "sin(α - β) = sin α cos β - cos α sin β",
                    "Cosine Sum": "cos(α + β) = cos α cos β - sin α sin β",
                    "Cosine Difference": "cos(α - β) = cos α cos β + sin α sin β",
                    "Tangent Sum": "tan(α + β) = (tan α + tan β)/(1 - tan α tan β)",
                    "Tangent Difference": "tan(α - β) = (tan α - tan β)/(1 + tan α tan β)"
                },
                memorization: [
                    "Sine: same sign as the operation (+ or -)",
                    "Cosine: opposite sign from the operation",
                    "Tangent: fraction form, watch the ∓ in denominator"
                ],
                applications: [
                    "Finding exact values (e.g., sin 75° = sin(45° + 30°))",
                    "Simplifying products to sums",
                    "Solving equations",
                    "Physics: wave interference, harmonics"
                ],
                specialCases: [
                    "sin(θ + π/2) = cos θ (using cofunction)",
                    "cos(θ + π) = -cos θ",
                    "sin(2θ) when α = β (leads to double angle)"
                ]
            },

            double_angle_identities: {
                title: "Double-Angle Identities",
                concepts: [
                    "sin(2θ) = 2 sin θ cos θ",
                    "cos(2θ) has three equivalent forms",
                    "tan(2θ) = 2 tan θ / (1 - tan²θ)",
                    "Derived from sum identities with α = β = θ"
                ],
                theory: "Double-angle identities are special cases of sum identities where both angles are equal. They're extremely useful for simplifying expressions and solving equations involving 2θ.",
                keyFormulas: {
                    "Sine Double": "sin(2θ) = 2 sin θ cos θ",
                    "Cosine Double (Form 1)": "cos(2θ) = cos²θ - sin²θ",
                    "Cosine Double (Form 2)": "cos(2θ) = 2cos²θ - 1",
                    "Cosine Double (Form 3)": "cos(2θ) = 1 - 2sin²θ",
                    "Tangent Double": "tan(2θ) = 2tan θ/(1 - tan²θ)"
                },
                derivation: "Apply sum formulas with α = β: sin(θ + θ), cos(θ + θ), tan(θ + θ)",
                choosingForm: [
                    "Use Form 1 when you have both sin and cos",
                    "Use Form 2 when simplifying with cos²θ",
                    "Use Form 3 when simplifying with sin²θ"
                ],
                applications: [
                    "Power reduction (solving for sin²θ or cos²θ)",
                    "Integration",
                    "Solving equations with 2θ",
                    "Physics: oscillations, wave equations"
                ]
            },

            half_angle_identities: {
                title: "Half-Angle Identities",
                concepts: [
                    "sin(θ/2) = ±√[(1 - cos θ)/2]",
                    "cos(θ/2) = ±√[(1 + cos θ)/2]",
                    "tan(θ/2) = ±√[(1 - cos θ)/(1 + cos θ)] or (sin θ)/(1 + cos θ) or (1 - cos θ)/(sin θ)",
                    "Sign depends on quadrant of θ/2"
                ],
                theory: "Half-angle identities express trig functions of θ/2 in terms of functions of θ. They're derived from double-angle formulas by substitution and solving.",
                keyFormulas: {
                    "Sine Half": "sin(θ/2) = ±√[(1 - cos θ)/2]",
                    "Cosine Half": "cos(θ/2) = ±√[(1 + cos θ)/2]",
                    "Tangent Half (Form 1)": "tan(θ/2) = ±√[(1 - cos θ)/(1 + cos θ)]",
                    "Tangent Half (Form 2)": "tan(θ/2) = sin θ/(1 + cos θ)",
                    "Tangent Half (Form 3)": "tan(θ/2) = (1 - cos θ)/sin θ"
                },
                signDetermination: "The ± sign is determined by which quadrant θ/2 lies in",
                derivation: "Start with cos(2α) = 1 - 2sin²α, let α = θ/2, solve for sin(θ/2)",
                applications: [
                    "Finding exact values",
                    "Integration (half-angle substitution)",
                    "Solving equations",
                    "Simplifying complex expressions"
                ],
                tangentForms: "Forms 2 and 3 for tan(θ/2) don't need ± since they handle sign automatically"
            },

            product_to_sum_identities: {
                title: "Product-to-Sum Identities",
                concepts: [
                    "Convert products of sines/cosines into sums",
                    "Useful for integration and simplification",
                    "Four main forms for sin·sin, cos·cos, sin·cos, cos·sin",
                    "Derived from sum and difference identities"
                ],
                theory: "Product-to-sum identities convert products of trigonometric functions into sums or differences. This is extremely useful in integration and in simplifying complex expressions.",
                keyFormulas: {
                    "sin α cos β": "sin α cos β = ½[sin(α + β) + sin(α - β)]",
                    "cos α sin β": "cos α sin β = ½[sin(α + β) - sin(α - β)]",
                    "cos α cos β": "cos α cos β = ½[cos(α - β) + cos(α + β)]",
                    "sin α sin β": "sin α sin β = ½[cos(α - β) - cos(α + β)]"
                },
                derivation: "Add or subtract sum/difference identities to eliminate terms and isolate products",
                applications: [
                    "Integration of products",
                    "Fourier analysis",
                    "Signal processing",
                    "Simplifying products in physics"
                ],
                memorization: "All have ½ factor; sin·cos and cos·sin involve sin sums; cos·cos and sin·sin involve cos"
            },

            sum_to_product_identities: {
                title: "Sum-to-Product Identities",
                concepts: [
                    "Convert sums/differences of sines/cosines into products",
                    "Reverse of product-to-sum identities",
                    "Useful for factoring and solving equations",
                    "Four main forms"
                ],
                theory: "Sum-to-product identities express sums or differences of trig functions as products. They're invaluable for factoring trigonometric expressions and solving equations.",
                keyFormulas: {
                    "sin α + sin β": "sin α + sin β = 2 sin[(α + β)/2] cos[(α - β)/2]",
                    "sin α - sin β": "sin α - sin β = 2 cos[(α + β)/2] sin[(α - β)/2]",
                    "cos α + cos β": "cos α + cos β = 2 cos[(α + β)/2] cos[(α - β)/2]",
                    "cos α - cos β": "cos α - cos β = -2 sin[(α + β)/2] sin[(α - β)/2]"
                },
                patternRecognition: "Notice the factor of 2 and the average (α+β)/2 and half-difference (α-β)/2",
                applications: [
                    "Factoring trigonometric equations",
                    "Solving sums equal to zero",
                    "Simplifying sums",
                    "Music theory: beat frequencies"
                ],
                memorization: "Sum of sines gives 2 sin·cos; difference of sines gives 2 cos·sin; sum of cosines gives 2 cos·cos; difference has negative sign"
            },

            power_reduction_identities: {
                title: "Power-Reduction Identities",
                concepts: [
                    "Express sin²θ, cos²θ, tan²θ in terms of first power",
                    "Derived from double-angle formulas",
                    "Essential for integration",
                    "Reduce powers to simplify expressions"
                ],
                theory: "Power-reduction identities express powers of trig functions in terms of first powers of functions of multiple angles. They're crucial in calculus for integrating even powers of trig functions.",
                keyFormulas: {
                    "Sine Squared": "sin²θ = (1 - cos 2θ)/2",
                    "Cosine Squared": "cos²θ = (1 + cos 2θ)/2",
                    "Tangent Squared": "tan²θ = (1 - cos 2θ)/(1 + cos 2θ)",
                    "Sine Fourth": "sin⁴θ = (3 - 4cos 2θ + cos 4θ)/8",
                    "Cosine Fourth": "cos⁴θ = (3 + 4cos 2θ + cos 4θ)/8"
                },
                derivation: "Solve double-angle formulas cos 2θ = 1 - 2sin²θ and cos 2θ = 2cos²θ - 1 for sin²θ and cos²θ",
                applications: [
                    "Integration of sin²x, cos²x",
                    "Integration of higher even powers",
                    "Simplifying expressions with squares",
                    "Fourier series"
                ],
                higherPowers: "For higher powers, apply reduction formulas repeatedly or use binomial expansion with reduced powers"
            },

            proving_identities: {
                title: "Proving Trigonometric Identities",
                concepts: [
                    "Work with one side at a time",
                    "Transform one side to match the other",
                    "Use fundamental identities",
                    "Common techniques: factoring, combining fractions, multiplying by conjugate"
                ],
                theory: "Proving identities means showing that two expressions are equal for all values in their domains. Unlike solving equations, you cannot perform operations on both sides simultaneously.",
                strategies: [
                    "Start with the more complicated side",
                    "Convert everything to sin and cos",
                    "Factor when possible",
                    "Combine fractions using LCD",
                    "Multiply by conjugate to eliminate radicals",
                    "Substitute known identities",
                    "Look for Pythagorean identity opportunities"
                ],
                commonTechniques: {
                    "Converting to sin/cos": "Replace tan, cot, sec, csc with sin/cos equivalents",
                    "Pythagorean substitution": "Replace 1 - sin²θ with cos²θ or vice versa",
                    "Factoring": "Look for common factors or difference of squares",
                    "Fraction operations": "Find LCD and combine fractions",
                    "Conjugate multiplication": "Multiply numerator and denominator by conjugate"
                },
                warnings: [
                    "Don't perform operations on both sides",
                    "Don't assume what you're trying to prove",
                    "Show all steps clearly",
                    "State which identities you're using"
                ],
                verificationOptions: [
                    "Transform left side to match right side",
                    "Transform right side to match left side",
                    "Transform both to a common third expression",
                    "Use numerical verification as a check (not a proof)"
                ]
            },

            solving_trig_equations: {
                title: "Solving Trigonometric Equations",
                concepts: [
                    "Find all angles that satisfy the equation",
                    "Use inverse trig functions for basic equations",
                    "Apply identities to simplify",
                    "Find general solution and specific solutions in given interval"
                ],
                theory: "Solving trigonometric equations involves finding all angle values that make the equation true. Unlike identities which are true for all angles, equations have specific solutions.",
                types: {
                    "Linear in trig function": "sin θ = k, cos θ = k, tan θ = k",
                    "Quadratic in trig function": "a sin²θ + b sin θ + c = 0",
                    "Multiple angles": "Equations with sin 2θ, cos 3θ, etc.",
                    "Multiple functions": "Equations with both sin and cos",
                    "Higher degree": "sin³θ, cos⁴θ, etc."
                },
                strategies: [
                    "Isolate the trig function if possible",
                    "Use identities to convert to single function",
                    "Factor if possible",
                    "Use substitution for quadratics",
                    "Find reference angle, then all solutions",
                    "Check for extraneous solutions"
                ],
                generalSolutions: {
                    "sin θ = k": "θ = arcsin k + 2πn or θ = π - arcsin k + 2πn",
                    "cos θ = k": "θ = ±arccos k + 2πn",
                    "tan θ = k": "θ = arctan k + πn"
                },
                applications: [
                    "Physics: periodic motion, waves",
                    "Engineering: signal analysis",
                    "Navigation and surveying",
                    "Astronomy: planetary positions"
                ]
            }
        };
    }

    initializeTrigonometricSolvers() {
        this.trigTypes = {
            // Identity verification
            verify_pythagorean: {
                patterns: [
                    /sin.*\^2.*\+.*cos.*\^2/i,
                    /cos.*\^2.*\+.*sin.*\^2/i,
                    /1.*\+.*tan.*\^2.*=.*sec/i,
                    /pythagorean/i
                ],
                solver: this.verifyPythagoreanIdentity.bind(this),
                name: 'Pythagorean Identity Verification',
                category: 'pythagorean_identities',
                description: 'Verifies sin²θ + cos²θ = 1 or related forms'
            },

            verify_reciprocal: {
                patterns: [
                    /csc.*=.*1.*\/.*sin/i,
                    /sec.*=.*1.*\/.*cos/i,
                    /cot.*=.*1.*\/.*tan/i,
                    /reciprocal/i
                ],
                solver: this.verifyReciprocalIdentity.bind(this),
                name: 'Reciprocal Identity Verification',
                category: 'reciprocal_identities',
                description: 'Verifies csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ'
            },

            verify_quotient: {
                patterns: [
                    /tan.*=.*sin.*\/.*cos/i,
                    /cot.*=.*cos.*\/.*sin/i,
                    /quotient/i
                ],
                solver: this.verifyQuotientIdentity.bind(this),
                name: 'Quotient Identity Verification',
                category: 'quotient_identities',
                description: 'Verifies tan θ = sin θ/cos θ, cot θ = cos θ/sin θ'
            },

            verify_cofunction: {
                patterns: [
                    /sin.*90.*-.*=.*cos/i,
                    /cos.*90.*-.*=.*sin/i,
                    /tan.*90.*-.*=.*cot/i,
                    /cofunction/i
                ],
                solver: this.verifyCofunctionIdentity.bind(this),
                name: 'Cofunction Identity Verification',
                category: 'cofunction_identities',
                description: 'Verifies sin(90° - θ) = cos θ and related'
            },

            verify_even_odd: {
                patterns: [
                    /sin.*\(-.*\).*=.*-.*sin/i,
                    /cos.*\(-.*\).*=.*cos/i,
                    /tan.*\(-.*\).*=.*-.*tan/i,
                    /even.*odd/i
                ],
                solver: this.verifyEvenOddIdentity.bind(this),
                name: 'Even-Odd Identity Verification',
                category: 'even_odd_identities',
                description: 'Verifies cos(-θ) = cos θ, sin(-θ) = -sin θ'
            },

            verify_sum_difference: {
                patterns: [
                    /sin.*\+.*=.*sin.*cos.*\+.*cos.*sin/i,
                    /cos.*\+.*=.*cos.*cos.*-.*sin.*sin/i,
                    /sum.*difference/i,
                    /angle.*addition/i
                ],
                solver: this.verifySumDifferenceIdentity.bind(this),
                name: 'Sum/Difference Identity Verification',
                category: 'sum_difference_identities',
                description: 'Verifies sin(α ± β), cos(α ± β), tan(α ± β)'
            },

            verify_double_angle: {
                patterns: [
                    /sin.*2.*=.*2.*sin.*cos/i,
                    /cos.*2.*=/i,
                    /tan.*2.*=/i,
                    /double.*angle/i
                ],
                solver: this.verifyDoubleAngleIdentity.bind(this),
                name: 'Double-Angle Identity Verification',
                category: 'double_angle_identities',
                description: 'Verifies sin 2θ, cos 2θ, tan 2θ formulas'
            },

            verify_half_angle: {
                patterns: [
                    /sin.*\/.*2/i,
                    /cos.*\/.*2/i,
                    /tan.*\/.*2/i,
                    /half.*angle/i
                ],
                solver: this.verifyHalfAngleIdentity.bind(this),
                name: 'Half-Angle Identity Verification',
                category: 'half_angle_identities',
                description: 'Verifies half-angle formulas'
            },

            verify_product_to_sum: {
                patterns: [
                    /sin.*cos.*=.*1\/2/i,
                    /cos.*cos.*=.*1\/2/i,
                    /product.*to.*sum/i
                ],
                solver: this.verifyProductToSumIdentity.bind(this),
                name: 'Product-to-Sum Identity Verification',
                category: 'product_to_sum_identities',
                description: 'Verifies product-to-sum formulas'
            },

            verify_sum_to_product: {
                patterns: [
                    /sin.*\+.*sin.*=.*2.*sin.*cos/i,
                    /cos.*\+.*cos.*=.*2.*cos.*cos/i,
                    /sum.*to.*product/i
                ],
                solver: this.verifySumToProductIdentity.bind(this),
                name: 'Sum-to-Product Identity Verification',
                category: 'sum_to_product_identities',
                description: 'Verifies sum-to-product formulas'
            },

            verify_power_reduction: {
                patterns: [
                    /sin.*\^2.*=.*1.*-.*cos.*2/i,
                    /cos.*\^2.*=.*1.*\+.*cos.*2/i,
                    /power.*reduction/i
                ],
                solver: this.verifyPowerReductionIdentity.bind(this),
                name: 'Power-Reduction Identity Verification',
                category: 'power_reduction_identities',
                description: 'Verifies power-reduction formulas'
            },

            // Identity proving
            prove_identity: {
                patterns: [
                    /prove/i,
                    /verify.*identity/i,
                    /show.*that/i,
                    /demonstrate/i
                ],
                solver: this.proveIdentity.bind(this),
                name: 'Prove Trigonometric Identity',
                category: 'proving_identities',
                description: 'Proves a given trigonometric identity'
            },

            // Simplification
            simplify_expression: {
                patterns: [
                    /simplify/i,
                    /reduce/i,
                    /express.*in.*terms/i
                ],
                solver: this.simplifyTrigExpression.bind(this),
                name: 'Simplify Trigonometric Expression',
                category: 'simplification',
                description: 'Simplifies trigonometric expressions'
            },

            // Solving equations
            solve_basic_equation: {
                patterns: [
                    /solve.*sin.*=/i,
                    /solve.*cos.*=/i,
                    /solve.*tan.*=/i,
                    /find.*theta/i
                ],
                solver: this.solveBasicTrigEquation.bind(this),
                name: 'Solve Basic Trigonometric Equation',
                category: 'solving_trig_equations',
                description: 'Solves sin θ = k, cos θ = k, tan θ = k'
            },

            solve_quadratic_trig: {
                patterns: [
                    /sin.*\^2/i,
                    /cos.*\^2/i,
                    /quadratic/i
                ],
                solver: this.solveQuadraticTrigEquation.bind(this),
                name: 'Solve Quadratic Trigonometric Equation',
                category: 'solving_trig_equations',
                description: 'Solves equations quadratic in trig functions'
            },

            // Finding exact values
            find_exact_value: {
                patterns: [
                    /find.*exact.*value/i,
                    /evaluate/i,
                    /sin.*\d+/i,
                    /cos.*\d+/i
                ],
                solver: this.findExactValue.bind(this),
                name: 'Find Exact Trigonometric Value',
                category: 'exact_values',
                description: 'Finds exact values using identities'
            }
        };
    }

    initializeIdentityDatabase() {
        this.identityDatabase = {
            fundamental: {
                pythagorean_1: {
                    formula: "sin²θ + cos²θ = 1",
                    name: "Fundamental Pythagorean Identity",
                    proof: "From unit circle: x² + y² = 1 where x = cos θ, y = sin θ",
                    variants: ["sin²θ = 1 - cos²θ", "cos²θ = 1 - sin²θ"],
                    whenToUse: "Whenever you need to convert between sin² and cos²"
                },
                pythagorean_2: {
                    formula: "1 + tan²θ = sec²θ",
                    name: "Pythagorean Identity (Tangent Form)",
                    proof: "Divide sin²θ + cos²θ = 1 by cos²θ",
                    variants: ["tan²θ = sec²θ - 1", "sec²θ - tan²θ = 1"],
                    whenToUse: "Working with tangent and secant"
                },
                pythagorean_3: {
                    formula: "1 + cot²θ = csc²θ",
                    name: "Pythagorean Identity (Cotangent Form)",
                    proof: "Divide sin²θ + cos²θ = 1 by sin²θ",
                    variants: ["cot²θ = csc²θ - 1", "csc²θ - cot²θ = 1"],
                    whenToUse: "Working with cotangent and cosecant"
                },
                reciprocal_sin: {
                    formula: "csc θ = 1/sin θ",
                    name: "Sine-Cosecant Reciprocal",
                    proof: "Definition of cosecant",
                    variants: ["sin θ = 1/csc θ", "sin θ · csc θ = 1"],
                    whenToUse: "Converting between sine and cosecant"
                },
                reciprocal_cos: {
                    formula: "sec θ = 1/cos θ",
                    name: "Cosine-Secant Reciprocal",
                    proof: "Definition of secant",
                    variants: ["cos θ = 1/sec θ", "cos θ · sec θ = 1"],
                    whenToUse: "Converting between cosine and secant"
                },
                reciprocal_tan: {
                    formula: "cot θ = 1/tan θ",
                    name: "Tangent-Cotangent Reciprocal",
                    proof: "Definition of cotangent",
                    variants: ["tan θ = 1/cot θ", "tan θ · cot θ = 1"],
                    whenToUse: "Converting between tangent and cotangent"
                },
                quotient_tan: {
                    formula: "tan θ = sin θ/cos θ",
                    name: "Tangent Quotient Identity",
                    proof: "From unit circle: y/x where y = sin θ, x = cos θ",
                    variants: ["sin θ = tan θ · cos θ", "cos θ = sin θ/tan θ"],
                    whenToUse: "Expressing tangent in terms of sine and cosine"
                },
                quotient_cot: {
                    formula: "cot θ = cos θ/sin θ",
                    name: "Cotangent Quotient Identity",
                    proof: "From reciprocal: 1/tan θ = 1/(sin θ/cos θ) = cos θ/sin θ",
                    variants: ["cos θ = cot θ · sin θ", "sin θ = cos θ/cot θ"],
                    whenToUse: "Expressing cotangent in terms of sine and cosine"
                }
            },

            angleRelations: {
                cofunction_sin_cos: {
                    formula: "sin(90° - θ) = cos θ",
                    name: "Sine-Cosine Cofunction",
                    proof: "From complementary angles in right triangle",
                    radianForm: "sin(π/2 - θ) = cos θ",
                    whenToUse: "Converting sine to cosine with complementary angle"
                },
                cofunction_tan_cot: {
                    formula: "tan(90° - θ) = cot θ",
                    name: "Tangent-Cotangent Cofunction",
                    proof: "From cofunction identities for sin and cos",
                    radianForm: "tan(π/2 - θ) = cot θ",
                    whenToUse: "Converting tangent to cotangent"
                },
                even_cos: {
                    formula: "cos(-θ) = cos θ",
                    name: "Cosine Even Function",
                    proof: "From unit circle symmetry about x-axis",
                    property: "Cosine is an even function",
                    whenToUse: "Simplifying expressions with negative angles in cosine"
                },
                odd_sin: {
                    formula: "sin(-θ) = -sin θ",
                    name: "Sine Odd Function",
                    proof: "From unit circle symmetry about origin",
                    property: "Sine is an odd function",
                    whenToUse: "Simplifying expressions with negative angles in sine"
                },
                odd_tan: {
                    formula: "tan(-θ) = -tan θ",
                    name: "Tangent Odd Function",
                    proof: "From tan θ = sin θ/cos θ and even-odd properties",
                    property: "Tangent is an odd function",
                    whenToUse: "Simplifying expressions with negative angles in tangent"
                }
            },

            sumDifference: {
                sin_sum: {
                    formula: "sin(α + β) = sin α cos β + cos α sin β",
                    name: "Sine Sum Formula",
                    proof: "Geometric proof using rotation matrices or unit circle",
                    memorization: "sin-cos plus cos-sin",
                    whenToUse: "Expanding sin of sum of two angles"
                },
                sin_diff: {
                    formula: "sin(α - β) = sin α cos β - cos α sin β",
                    name: "Sine Difference Formula",
                    proof: "From sin sum using sin(-β) = -sin β",
                    memorization: "sin-cos minus cos-sin",
                    whenToUse: "Expanding sin of difference of two angles"
                },
                cos_sum: {
                    formula: "cos(α + β) = cos α cos β - sin α sin β",
                    name: "Cosine Sum Formula",
                    proof: "Geometric proof using rotation matrices",
                    memorization: "cos-cos minus sin-sin (opposite sign of operation)",
                    whenToUse: "Expanding cos of sum of two angles"
                },
                cos_diff: {
                    formula: "cos(α - β) = cos α cos β + sin α sin β",
                    name: "Cosine Difference Formula",
                    proof: "From cos sum using cos(-β) = cos β and sin(-β) = -sin β",
                    memorization: "cos-cos plus sin-sin",
                    whenToUse: "Expanding cos of difference of two angles"
                },
                tan_sum: {
                    formula: "tan(α + β) = (tan α + tan β)/(1 - tan α tan β)",
                    name: "Tangent Sum Formula",
                    proof: "From sin and cos sum formulas divided",
                    memorization: "Sum on top, 1 minus product on bottom",
                    whenToUse: "Expanding tan of sum"
                },
                tan_diff: {
                    formula: "tan(α - β) = (tan α - tan β)/(1 + tan α tan β)",
                    name: "Tangent Difference Formula",
                    proof: "From tan sum using tan(-β) = -tan β",
                    memorization: "Difference on top, 1 plus product on bottom",
                    whenToUse: "Expanding tan of difference"
                }
            },

            doubleAngle: {
                sin_double: {
                    formula: "sin(2θ) = 2 sin θ cos θ",
                    name: "Sine Double-Angle Formula",
                    proof: "From sin(θ + θ) using sum formula",
                    whenToUse: "Converting sin 2θ to product of sin θ and cos θ"
                },
                cos_double_1: {
                    formula: "cos(2θ) = cos²θ - sin²θ",
                    name: "Cosine Double-Angle (Form 1)",
                    proof: "From cos(θ + θ) using sum formula",
                    whenToUse: "When both sin²θ and cos²θ are present"
                },
                cos_double_2: {
                    formula: "cos(2θ) = 2cos²θ - 1",
                    name: "Cosine Double-Angle (Form 2)",
                    proof: "From Form 1 using sin²θ = 1 - cos²θ",
                    whenToUse: "When working primarily with cos²θ"
                },
                cos_double_3: {
                    formula: "cos(2θ) = 1 - 2sin²θ",
                    name: "Cosine Double-Angle (Form 3)",
                    proof: "From Form 1 using cos²θ = 1 - sin²θ",
                    whenToUse: "When working primarily with sin²θ"
                },
                tan_double: {
                    formula: "tan(2θ) = 2tan θ/(1 - tan²θ)",
                    name: "Tangent Double-Angle Formula",
                    proof: "From tan(θ + θ) using sum formula",
                    whenToUse: "Converting tan 2θ to expression in tan θ"
                }
            },

            halfAngle: {
                sin_half: {
                    formula: "sin(θ/2) = ±√[(1 - cos θ)/2]",
                    name: "Sine Half-Angle Formula",
                    proof: "From cos 2α = 1 - 2sin²α, let α = θ/2",
                    signRule: "Sign determined by quadrant of θ/2",
                    whenToUse: "Finding sin of half an angle"
                },
                cos_half: {
                    formula: "cos(θ/2) = ±√[(1 + cos θ)/2]",
                    name: "Cosine Half-Angle Formula",
                    proof: "From cos 2α = 2cos²α - 1, let α = θ/2",
                    signRule: "Sign determined by quadrant of θ/2",
                    whenToUse: "Finding cos of half an angle"
                },
                tan_half_1: {
                    formula: "tan(θ/2) = ±√[(1 - cos θ)/(1 + cos θ)]",
                    name: "Tangent Half-Angle (Square Root Form)",
                    proof: "From sin and cos half-angle formulas divided",
                    signRule: "Sign determined by quadrant of θ/2",
                    whenToUse: "Finding tan θ/2 with square root"
                },
                tan_half_2: {
                    formula: "tan(θ/2) = sin θ/(1 + cos θ)",
                    name: "Tangent Half-Angle (Form 2)",
                    proof: "Rationalization of Form 1",
                    advantage: "No ± sign needed",
                    whenToUse: "Preferred when sin θ and cos θ known"
                },
                tan_half_3: {
                    formula: "tan(θ/2) = (1 - cos θ)/sin θ",
                    name: "Tangent Half-Angle (Form 3)",
                    proof: "Rationalization of Form 1",
                    advantage: "No ± sign needed",
                    whenToUse: "Alternative to Form 2"
                }
            },

            productToSum: {
                sin_cos: {
                    formula: "sin α cos β = ½[sin(α + β) + sin(α - β)]",
                    name: "Sine-Cosine Product-to-Sum",
                    proof: "Add sin(α+β) and sin(α-β) formulas",
                    whenToUse: "Converting sin·cos product to sum"
                },
                cos_sin: {
                    formula: "cos α sin β = ½[sin(α + β) - sin(α - β)]",
                    name: "Cosine-Sine Product-to-Sum",
                    proof: "Subtract sin(α-β) from sin(α+β)",
                    whenToUse: "Converting cos·sin product to sum"
                },
                cos_cos: {
                    formula: "cos α cos β = ½[cos(α - β) + cos(α + β)]",
                    name: "Cosine-Cosine Product-to-Sum",
                    proof: "Add cos(α+β) and cos(α-β) formulas",
                    whenToUse: "Converting cos·cos product to sum"
                },
                sin_sin: {
                    formula: "sin α sin β = ½[cos(α - β) - cos(α + β)]",
                    name: "Sine-Sine Product-to-Sum",
                    proof: "Subtract cos(α+β) from cos(α-β)",
                    whenToUse: "Converting sin·sin product to sum"
                }
            },

            sumToProduct: {
                sin_plus_sin: {
                    formula: "sin α + sin β = 2 sin[(α+β)/2] cos[(α-β)/2]",
                    name: "Sum of Sines",
                    proof: "Reverse of product-to-sum",
                    whenToUse: "Factoring sum of sines"
                },
                sin_minus_sin: {
                    formula: "sin α - sin β = 2 cos[(α+β)/2] sin[(α-β)/2]",
                    name: "Difference of Sines",
                    proof: "Reverse of product-to-sum",
                    whenToUse: "Factoring difference of sines"
                },
                cos_plus_cos: {
                    formula: "cos α + cos β = 2 cos[(α+β)/2] cos[(α-β)/2]",
                    name: "Sum of Cosines",
                    proof: "Reverse of product-to-sum",
                    whenToUse: "Factoring sum of cosines"
                },
                cos_minus_cos: {
                    formula: "cos α - cos β = -2 sin[(α+β)/2] sin[(α-β)/2]",
                    name: "Difference of Cosines",
                    proof: "Reverse of product-to-sum",
                    note: "Negative sign in front",
                    whenToUse: "Factoring difference of cosines"
                }
            },

            powerReduction: {
                sin_squared: {
                    formula: "sin²θ = (1 - cos 2θ)/2",
                    name: "Sine Squared Power Reduction",
                    proof: "From cos 2θ = 1 - 2sin²θ, solve for sin²θ",
                    whenToUse: "Integration, reducing powers"
                },
                cos_squared: {
                    formula: "cos²θ = (1 + cos 2θ)/2",
                    name: "Cosine Squared Power Reduction",
                    proof: "From cos 2θ = 2cos²θ - 1, solve for cos²θ",
                    whenToUse: "Integration, reducing powers"
                },
                tan_squared: {
                    formula: "tan²θ = (1 - cos 2θ)/(1 + cos 2θ)",
                    name: "Tangent Squared Power Reduction",
                    proof: "From sin²θ and cos²θ power reductions divided",
                    whenToUse: "Reducing tan²θ"
                },
                sin_fourth: {
                    formula: "sin⁴θ = (3 - 4cos 2θ + cos 4θ)/8",
                    name: "Sine Fourth Power Reduction",
                    proof: "Apply sin²θ reduction twice",
                    whenToUse: "Reducing sin⁴θ"
                },
                cos_fourth: {
                    formula: "cos⁴θ = (3 + 4cos 2θ + cos 4θ)/8",
                    name: "Cosine Fourth Power Reduction",
                    proof: "Apply cos²θ reduction twice",
                    whenToUse: "Reducing cos⁴θ"
                }
            }
        };
    }

    initializeProofStrategiesDatabase() {
        this.proofStrategies = {
            convertToSinCos: {
                name: "Convert Everything to Sine and Cosine",
                description: "Replace all trig functions with equivalent expressions in terms of sin and cos",
                whenToUse: [
                    "Expression involves multiple different trig functions",
                    "Working with tan, cot, sec, csc",
                    "Simplification seems unclear"
                ],
                steps: [
                    "Replace tan θ with sin θ/cos θ",
                    "Replace cot θ with cos θ/sin θ",
                    "Replace sec θ with 1/cos θ",
                    "Replace csc θ with 1/sin θ",
                    "Simplify the resulting expression"
                ],
                example: "tan θ + cot θ → sin θ/cos θ + cos θ/sin θ",
                advantages: "Reduces to two functions, makes patterns clearer",
                disadvantages: "Can create complex fractions"
            },

            pythagoreanSubstitution: {
                name: "Pythagorean Identity Substitution",
                description: "Replace expressions using sin²θ + cos²θ = 1",
                whenToUse: [
                    "See 1 - sin²θ (replace with cos²θ)",
                    "See 1 - cos²θ (replace with sin²θ)",
                    "See sec²θ - 1 (replace with tan²θ)",
                    "Need to eliminate one trig function"
                ],
                substitutions: {
                    "1 - sin²θ": "cos²θ",
                    "1 - cos²θ": "sin²θ",
                    "sec²θ - 1": "tan²θ",
                    "csc²θ - 1": "cot²θ",
                    "1 - tan²θ": "sec²θ (if rearranged)",
                    "1 - cot²θ": "csc²θ (if rearranged)"
                },
                example: "1 - sin²θ = cos²θ, then factor or simplify",
                advantages: "Quickly reduces expression complexity",
                caution: "Make sure substitution moves toward the goal"
            },

            factoring: {
                name: "Factoring",
                description: "Factor expressions to reveal structure and simplify",
                whenToUse: [
                    "See common factors",
                    "Expression looks like a quadratic",
                    "Difference of squares pattern",
                    "Sum or difference of cubes"
                ],
                techniques: {
                    "Common factor": "sin θ cos θ + sin θ = sin θ(cos θ + 1)",
                    "Difference of squares": "sin²θ - cos²θ = (sin θ + cos θ)(sin θ - cos θ)",
                    "Quadratic form": "2sin²θ + 3sin θ + 1 = (2sin θ + 1)(sin θ + 1)",
                    "Grouping": "Factor by grouping terms"
                },
                example: "sin²θ - cos²θ = (sin θ - cos θ)(sin θ + cos θ)",
                advantages: "Can simplify complex expressions, helps with cancellation"
            },

            combiningFractions: {
                name: "Combining Fractions",
                description: "Find LCD and combine multiple fractions into one",
                whenToUse: [
                    "Multiple fractions in expression",
                    "Need to simplify sum or difference of fractions",
                    "Working toward single fraction"
                ],
                steps: [
                    "Identify all denominators",
                    "Find the LCD",
                    "Multiply each fraction to get LCD as denominator",
                    "Combine numerators",
                    "Simplify the result"
                ],
                example: "1/sin θ + 1/cos θ → (cos θ + sin θ)/(sin θ cos θ)",
                advantages: "Creates single expression, often enables further simplification",
                caution: "Don't forget to multiply numerator by same factor as denominator"
            },

            multiplyByConjugate: {
                name: "Multiply by Conjugate",
                description: "Multiply numerator and denominator by conjugate to eliminate radicals or simplify",
                whenToUse: [
                    "Square roots in denominator",
                    "Expressions like (1 + cos θ) or (1 - sin θ)",
                    "Want to use difference of squares"
                ],
                technique: "Multiply by (a - b)/(a - b) when you have (a + b)",
                example: "1/(1 + cos θ) · (1 - cos θ)/(1 - cos θ) = (1 - cos θ)/sin²θ",
                advantages: "Eliminates radicals, creates Pythagorean patterns",
                commonConjugates: {
                    "1 + cos θ": "1 - cos θ",
                    "1 - sin θ": "1 + sin θ",
                    "sin θ + cos θ": "sin θ - cos θ"
                }
            },

            workBackwards: {
                name: "Work Backwards from Goal",
                description: "Start with desired result and work backwards to see what's needed",
                whenToUse: [
                    "Don't see clear path forward",
                    "Goal expression is simpler",
                    "Can help identify which identity to use"
                ],
                approach: "Transform the goal expression to see what it could come from",
                example: "If goal is 1, see what expressions equal 1 (sin²θ + cos²θ, etc.)",
                advantages: "Provides direction, reveals hidden identities",
                note: "This is for strategy; actual proof must go forward"
            },

            transformBothToCommon: {
                name: "Transform Both Sides to Common Expression",
                description: "Instead of transforming one side to match other, transform both to a common third expression",
                whenToUse: [
                    "Both sides look equally complex",
                    "Clear common form exists",
                    "Direct transformation isn't obvious"
                ],
                approach: "Simplify left side to expression A; simplify right side to same expression A",
                example: "Show both sides equal sin θ cos θ or some other common form",
                advantages: "Can be easier than direct transformation",
                presentation: "Show both transformations clearly"
            },

            doubleAngleStrategy: {
                name: "Double-Angle Formulas",
                description: "Use or reverse double-angle formulas",
                whenToUse: [
                    "See 2θ in expression",
                    "See 2 sin θ cos θ (this is sin 2θ)",
                    "See cos²θ - sin²θ (this is cos 2θ)",
                    "Want to change from 2θ to θ or vice versa"
                ],
                forward: "sin 2θ = 2 sin θ cos θ, cos 2θ = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ",
                reverse: "2 sin θ cos θ → sin 2θ",
                example: "2 sin θ cos θ = sin 2θ",
                advantages: "Simplifies double-angle expressions"
            },

            sumDifferenceStrategy: {
                name: "Sum and Difference Formulas",
                description: "Expand or contract using sum/difference identities",
                whenToUse: [
                    "See sin(α ± β), cos(α ± β), tan(α ± β)",
                    "Can express angle as sum or difference of known angles",
                    "Finding exact values"
                ],
                formulas: "sin(α ± β), cos(α ± β), tan(α ± β) formulas",
                example: "sin 75° = sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30°",
                advantages: "Finds exact values, expands complex angles"
            }
        };
    }

    initializeVisualizationDatabase() {
        this.visualizations = {
            unitCircle: {
                name: "Unit Circle Representation",
                description: "Visualize trig functions on the unit circle",
                shows: [
                    "Point (cos θ, sin θ) on circle of radius 1",
                    "Angle θ measured from positive x-axis",
                    "sin θ as y-coordinate (height)",
                    "cos θ as x-coordinate (horizontal distance)",
                    "tan θ as slope of line from origin to point"
                ],
                usefulFor: [
                    "Understanding Pythagorean identity: x² + y² = 1",
                    "Even-odd properties (symmetry)",
                    "Cofunction identities (complementary angles)",
                    "Reference angles and quadrant signs"
                ],
                keyInsights: "All points satisfy cos²θ + sin²θ = 1"
            },

            rightTriangle: {
                name: "Right Triangle",
                description: "Visualize trig ratios in right triangle",
                shows: [
                    "sin θ = opposite/hypotenuse",
                    "cos θ = adjacent/hypotenuse",
                    "tan θ = opposite/adjacent",
                    "Complementary angles: if one angle is θ, other is 90° - θ"
                ],
                usefulFor: [
                    "Cofunction identities",
                    "Pythagorean theorem → Pythagorean identity",
                    "Basic trig ratios",
                    "Special angles (30°, 45°, 60°)"
                ],
                keyInsights: "Pythagorean theorem gives sin²θ + cos²θ = 1"
            },

            graphicalSymmetry: {
                name: "Graph Symmetry",
                description: "Visualize even and odd functions on graphs",
                shows: [
                    "y = cos x symmetric about y-axis (even)",
                    "y = sin x symmetric about origin (odd)",
                    "y = tan x symmetric about origin (odd)"
                ],
                usefulFor: [
                    "Even-odd identities",
                    "Understanding periodicity",
                    "Function behavior"
                ],
                keyInsights: "Even functions: f(-x) = f(x); Odd functions: f(-x) = -f(x)"
            },

            angleAddition: {
                name: "Geometric Angle Addition",
                description: "Visualize sum of two angles",
                shows: [
                    "How sin(α + β) relates to sin α, cos α, sin β, cos β",
                    "Geometric proof of sum formulas"
                ],
                usefulFor: [
                    "Understanding sum/difference formulas",
                    "Double-angle formulas (α = β)"
                ],
                keyInsights: "Sum formulas combine pieces from both angles"
            },

            powerReductionVisual: {
                name: "Power Reduction Visualization",
                description: "See how sin²θ and cos²θ relate to cos 2θ",
                shows: [
                    "Graph of sin²θ compared to (1 - cos 2θ)/2",
                    "Graph of cos²θ compared to (1 + cos 2θ)/2"
                ],
                usefulFor: [
                    "Understanding power reduction",
                    "Integration applications",
                    "Double-angle connections"
                ],
                keyInsights: "Squared functions oscillate at double frequency but offset"
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            pythagorean_identities: {
                'Applying identity': [
                    'Writing sin²θ + cos²θ = 0 instead of 1',
                    'Forgetting to square: writing sin θ + cos θ = 1',
                    'Confusing 1 + tan²θ = sec²θ with tan²θ + 1 = csc²θ',
                    'Incorrect substitution: 1 - sin²θ ≠ -cos²θ'
                ],
                'Algebraic manipulation': [
                    'Sign errors when rearranging',
                    'Forgetting that sin²θ means (sin θ)²',
                    'Not squaring both sin and θ'
                ]
            },
            proving_identities: {
                'Method errors': [
                    'Performing operations on both sides simultaneously',
                    'Assuming what you\'re trying to prove',
                    'Working with both sides instead of one',
                    'Cross-multiplying (treating as equation instead of identity)'
                ],
                'Strategic errors': [
                    'Starting with simpler side instead of complex side',
                    'Not converting to sin/cos when stuck',
                    'Missing factoring opportunities',
                    'Not recognizing Pythagorean patterns'
                ]
            },
            sum_difference_identities: {
                'Sign errors': [
                    'Using same sign for cos(α + β) as the operation',
                    'Forgetting cos uses opposite sign',
                    'Mixing up sin(α + β) and sin(α - β) formulas',
                    'Wrong sign in tan sum/difference denominator'
                ],
                'Formula confusion': [
                    'Confusing sin(α + β) with sin α + sin β',
                    'Thinking cos(α + β) = cos α + cos β',
                    'Mixing up which term has which trig function'
                ]
            },
            double_angle_identities: {
                'Formula selection': [
                    'Not choosing appropriate form of cos 2θ',
                    'Using wrong form for the situation',
                    'Forgetting the factor of 2 in sin 2θ'
                ],
                'Algebraic errors': [
                    'Confusing cos 2θ = cos²θ - sin²θ with cos 2θ = 2cos²θ - sin²θ',
                    'Sign errors in the three forms of cos 2θ',
                    'Forgetting the 2 in tan 2θ numerator'
                ]
            },
            half_angle_identities: {
                'Sign determination': [
                    'Forgetting to determine correct sign (±)',
                    'Using wrong sign based on quadrant',
                    'Thinking ± means both answers are valid'
                ],
                'Formula errors': [
                    'Confusing (1 + cos θ) and (1 - cos θ)',
                    'Using wrong form of tan(θ/2)',
                    'Forgetting the factor of 1/2 or the square root'
                ]
            },
            solving_equations: {
                'Finding solutions': [
                    'Only finding one solution in [0, 2π)',
                    'Forgetting to check all quadrants',
                    'Missing the second solution',
                    'Not finding general solution when asked'
                ],
                'Algebraic errors': [
                    'Dividing by a trig function (could be zero)',
                    'Not checking for extraneous solutions',
                    'Incorrectly factoring',
                    'Losing solutions when squaring'
                ]
            },
            simplification: {
                'Premature simplification': [
                    'Simplifying before recognizing pattern',
                    'Canceling incorrectly',
                    'Reducing fractions incorrectly'
                ],
                'Identity misuse': [
                    'Applying identity in wrong direction',
                    'Using wrong identity',
                    'Incorrectly remembering formula'
                ]
            }
        };

        this.errorPrevention = {
            identity_application: {
                reminder: 'Always verify which identity applies and apply it correctly',
                method: 'Write out the identity first, then substitute'
            },
            sign_tracking: {
                reminder: 'Track signs carefully, especially with sum/difference formulas',
                method: 'Write signs explicitly; cos uses opposite sign from operation'
            },
            proving_method: {
                reminder: 'Work with ONE side at a time, transform it to match the other',
                method: 'Never perform operations on both sides; this isn\'t equation solving'
            },
            formula_memory: {
                reminder: 'Memorize formulas accurately; small errors propagate',
                method: 'Derive formulas regularly to reinforce correct forms'
            },
            solution_completeness: {
                reminder: 'Find ALL solutions in the specified interval',
                method: 'Check all four quadrants and apply periodicity'
            },
            verify_work: {
                reminder: 'Always verify your final result',
                method: 'Substitute values or use alternate method to confirm'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why identities work and their geometric/algebraic meaning',
                language: 'intuitive and meaning-focused',
                emphasis: 'Understanding over memorization'
            },
            procedural: {
                focus: 'Exact steps to apply identities and prove results',
                language: 'step-by-step instructions',
                emphasis: 'Systematic application'
            },
            visual: {
                focus: 'Unit circle and geometric interpretations',
                language: 'visual and spatial metaphors',
                emphasis: 'Seeing relationships'
            },
            algebraic: {
                focus: 'Formal algebraic derivations and proofs',
                language: 'precise mathematical terminology',
                emphasis: 'Rigorous justification'
            },
            historical: {
                focus: 'Development of trig identities through history',
                language: 'narrative and contextual',
                emphasis: 'Evolution of ideas'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential identities only',
                examples: 'concrete angles like 30°, 45°, 60°',
                coverage: 'Pythagorean, reciprocal, quotient identities'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main identities with derivations',
                examples: 'mix of special and general angles',
                coverage: 'Add sum/difference, double-angle, basic proving'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every step explained with real-world analogies',
                examples: 'visual circle and triangle representations',
                analogies: true,
                visualization: 'heavy use of unit circle and diagrams'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive coverage with proofs',
                examples: 'general angles and complex applications',
                coverage: 'All identities including product-to-sum, power reduction'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with building blocks',
                examples: 'carefully sequenced difficulty progression',
                approach: 'Build from simple to complex systematically'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            sound_waves: {
                scenario: "Sound wave interference and harmonics",
                identitiesUsed: ["Sum/difference formulas", "Product-to-sum"],
                equation: "y = A sin(ω₁t) + A sin(ω₂t)",
                context: "When two sound waves combine, sum-to-product formulas describe beats and interference patterns",
                application: "Music theory, acoustics, noise cancellation"
            },
            electrical_engineering: {
                scenario: "AC circuit analysis",
                identitiesUsed: ["Double-angle", "Power reduction"],
                equation: "Power = V·I·cos φ where V and I are sinusoidal",
                context: "Analyzing power in AC circuits requires trig identities for phase relationships",
                application: "Power systems, signal processing, telecommunications"
            },
            physics_oscillations: {
                scenario: "Simple harmonic motion and pendulums",
                identitiesUsed: ["Small angle approximations", "Pythagorean identity"],
                equation: "x(t) = A cos(ωt + φ)",
                context: "Describing oscillating systems like springs and pendulums",
                application: "Mechanical systems, clocks, seismology"
            },
            navigation: {
                scenario: "GPS and triangulation",
                identitiesUsed: ["Sum/difference formulas", "Half-angle formulas"],
                equation: "Distance and bearing calculations",
                context: "Converting between coordinate systems and finding distances",
                application: "GPS, surveying, aviation, maritime navigation"
            },
            astronomy: {
                scenario: "Planetary motion and celestial mechanics",
                identitiesUsed: ["All angle formulas", "Pythagorean identities"],
                equation: "Orbital calculations, eclipse predictions",
                context: "Modeling periodic motion of celestial bodies",
                application: "Satellite orbits, eclipse predictions, navigation"
            },
            optics: {
                scenario: "Light wave interference and diffraction",
                identitiesUsed: ["Sum/difference formulas", "Product-to-sum"],
                equation: "Intensity patterns in interference",
                context: "Analyzing light wave superposition and interference patterns",
                application: "Optics, holography, thin-film coatings"
            },
            architecture: {
                scenario: "Roof truss design and load distribution",
                identitiesUsed: ["Right triangle ratios", "Sum of angles"],
                equation: "Force resolution using trig ratios",
                context: "Calculating angles and forces in structural elements",
                application: "Building design, bridge engineering"
            },
            music_theory: {
                scenario: "Musical intervals and harmonics",
                identitiesUsed: ["Sum/difference formulas", "Sum-to-product"],
                equation: "Frequency relationships in musical notes",
                context: "Pure musical intervals correspond to simple frequency ratios",
                application: "Music composition, instrument tuning, audio synthesis"
            },
            signal_processing: {
                scenario: "Fourier analysis and filtering",
                identitiesUsed: ["Product-to-sum", "Power reduction"],
                equation: "Decomposing signals into frequency components",
                context: "Any periodic signal can be expressed as sum of sines and cosines",
                application: "Audio processing, image compression, data analysis"
            },
            mechanics: {
                scenario: "Projectile motion resolution",
                identitiesUsed: ["Double-angle formulas"],
                equation: "Range = (v₀²sin 2θ)/g",
                context: "Maximum range occurs at 45° because sin 2θ is maximized at 90°",
                application: "Ballistics, sports physics, engineering"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            pythagorean_identities: {
                skills: ['Basic algebra', 'Exponent rules', 'Square roots'],
                priorKnowledge: ['Unit circle', 'Pythagorean theorem', 'Trig ratios'],
                checkQuestions: [
                    "What is (sin θ)²?",
                    "On the unit circle, what is the radius?",
                    "What does sin²θ + cos²θ equal?"
                ]
            },
            reciprocal_identities: {
                skills: ['Reciprocals', 'Fraction operations'],
                priorKnowledge: ['Six trig functions', 'Reciprocal definition'],
                checkQuestions: [
                    "What is the reciprocal of 2?",
                    "What is 1/sin θ called?",
                    "If sin θ = 3/5, what is csc θ?"
                ]
            },
            quotient_identities: {
                skills: ['Division', 'Fraction operations'],
                priorKnowledge: ['Sin and cos definitions', 'Fraction division'],
                checkQuestions: [
                    "What is y/x in terms of trig if (x,y) = (cos θ, sin θ)?",
                    "How do you simplify (a/b) ÷ (c/d)?",
                    "What is tan θ in terms of sin and cos?"
                ]
            },
            sum_difference_identities: {
                skills: ['Pythagorean identities', 'Algebraic expansion', 'Cofunction identities'],
                priorKnowledge: ['Angle addition', 'FOIL method'],
                checkQuestions: [
                    "What is sin²θ + cos²θ?",
                    "Expand (a + b)(c + d)",
                    "What is sin 90° and cos 90°?"
                ]
            },
            double_angle_identities: {
                skills: ['Sum identities', 'Pythagorean identities', 'Algebraic substitution'],
                priorKnowledge: ['Sum formulas', 'Power reduction'],
                checkQuestions: [
                    "What is sin(θ + θ)?",
                    "Apply sin(α + β) with α = β = θ",
                    "What is 1 - 2sin²θ equal to?"
                ]
            },
            half_angle_identities: {
                skills: ['Double-angle identities', 'Solving for variables', 'Square roots'],
                priorKnowledge: ['Quadrant signs', 'Solving equations'],
                checkQuestions: [
                    "If cos 2α = 2cos²α - 1, solve for cos α",
                    "What quadrant is 15° in?",
                    "What is ±√4?"
                ]
            },
            proving_identities: {
                skills: ['All basic identities', 'Algebraic manipulation', 'Factoring'],
                priorKnowledge: ['Identity toolkit', 'Fraction operations', 'Conjugates'],
                checkQuestions: [
                    "Name three Pythagorean identities",
                    "How do you combine fractions?",
                    "What is the conjugate of (1 + cos θ)?"
                ]
            },
            solving_trig_equations: {
                skills: ['Inverse trig functions', 'Algebraic solving', 'Identities'],
                priorKnowledge: ['Quadrants and signs', 'Reference angles', 'Periodicity'],
                checkQuestions: [
                    "If sin θ = 1/2, what is θ in [0, 2π)?",
                    "What is the period of sin θ?",
                    "How many solutions does sin θ = k have in [0, 2π)?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            unit_circle: {
                description: "Point (cos θ, sin θ) on circle of radius 1",
                analogy: "Like a clock, but measuring angles mathematically",
                visualization: "Draw circle with point at angle θ from positive x-axis",
                suitableFor: ['all_trig_identities'],
                explanation: "All trig values come from coordinates on this circle",
                keyInsights: "cos²θ + sin²θ = 1 because all points are distance 1 from origin"
            },
            right_triangle: {
                description: "Trig ratios as sides of right triangle",
                analogy: "SOH-CAH-TOA: Sin=Opposite/Hyp, Cos=Adj/Hyp, Tan=Opp/Adj",
                visualization: "Draw right triangle with angle θ",
                suitableFor: ['basic_identities', 'cofunction_identities'],
                explanation: "Trig functions are ratios of triangle sides",
                keyInsights: "Pythagorean theorem on triangle gives Pythagorean identity"
            },
            graphs: {
                description: "Graphs of y = sin x, y = cos x, etc.",
                analogy: "Waves that repeat forever",
                visualization: "Sinusoidal curves showing periodicity",
                suitableFor: ['even_odd_identities', 'periodicity'],
                explanation: "Visual representation of function behavior",
                keyInsights: "Symmetry reveals even/odd properties; period shows repetition"
            },
            algebraic_transformation: {
                description: "Step-by-step algebraic manipulation",
                analogy: "Like solving an equation, but maintaining equality throughout",
                visualization: "Chain of equal expressions",
                suitableFor: ['proving_identities', 'simplification'],
                explanation: "Transform expression using known identities",
                keyInsights: "Each step must be reversible and justified"
            },
            geometric_proof: {
                description: "Visual/geometric demonstration of identity",
                analogy: "Seeing is believing - visual proof of relationship",
                visualization: "Diagrams showing why identity is true",
                suitableFor: ['sum_difference_identities', 'pythagorean_identities'],
                explanation: "Geometric interpretation makes identity obvious",
                keyInsights: "Often reveals deeper geometric meaning"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "Verify sin²θ + cos²θ = 1 for θ = 30°",
                    solution: "sin²30° + cos²30° = (1/2)² + (√3/2)² = 1/4 + 3/4 = 1 ✓",
                    type: "verification",
                    difficulty: "easy"
                },
                {
                    problem: "Find csc θ if sin θ = 2/3",
                    solution: "csc θ = 1/sin θ = 1/(2/3) = 3/2",
                    type: "reciprocal",
                    difficulty: "easy"
                },
                {
                    problem: "Express tan θ in terms of sin θ and cos θ",
                    solution: "tan θ = sin θ / cos θ",
                    type: "quotient",
                    difficulty: "easy"
                },
                {
                    problem: "If cos θ = 4/5 and θ in Q I, find sin θ",
                    solution: "sin²θ = 1 - cos²θ = 1 - 16/25 = 9/25, so sin θ = 3/5 (positive in Q I)",
                    type: "pythagorean",
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "Simplify (sin θ)(csc θ) + (cos θ)(sec θ)",
                    solution: "(sin θ)(1/sin θ) + (cos θ)(1/cos θ) = 1 + 1 = 2",
                    type: "simplification",
                    difficulty: "medium"
                },
                {
                    problem: "Prove (1 - sin²θ)/(cos θ) = cos θ",
                    solution: "LHS = cos²θ/cos θ = cos θ = RHS ✓",
                    type: "proving",
                    difficulty: "medium"
                },
                {
                    problem: "Find sin 2θ if sin θ = 3/5 and cos θ = 4/5",
                    solution: "sin 2θ = 2 sin θ cos θ = 2(3/5)(4/5) = 24/25",
                    type: "double_angle",
                    difficulty: "medium"
                },
                {
                    problem: "Simplify cos²θ - sin²θ + 1",
                    solution: "= cos 2θ + 1 (using cos 2θ = cos²θ - sin²θ)",
                    type: "simplification",
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "Prove tan²θ - sin²θ = tan²θ sin²θ",
                    solution: "LHS = sin²θ/cos²θ - sin²θ = sin²θ(1/cos²θ - 1) = sin²θ(1 - cos²θ)/cos²θ = sin²θ · sin²θ/cos²θ = tan²θ sin²θ = RHS ✓",
                    type: "proving",
                    difficulty: "hard"
                },
                {
                    problem: "Simplify (sin θ + cos θ)² + (sin θ - cos θ)²",
                    solution: "= sin²θ + 2sin θ cos θ + cos²θ + sin²θ - 2sin θ cos θ + cos²θ = 2sin²θ + 2cos²θ = 2(sin²θ + cos²θ) = 2",
                    type: "expansion",
                    difficulty: "hard"
                },
                {
                    problem: "Find cos 15° using half-angle formula",
                    solution: "cos 15° = cos(30°/2) = √[(1 + cos 30°)/2] = √[(1 + √3/2)/2] = √[(2 + √3)/4] = (√(2 + √3))/2",
                    type: "half_angle",
                    difficulty: "hard"
                },
                {
                    problem: "Prove (1 + tan θ)/(1 - tan θ) = (cos θ + sin θ)/(cos θ - sin θ)",
                    solution: "LHS = (1 + sin θ/cos θ)/(1 - sin θ/cos θ) = (cos θ + sin θ)/cos θ · cos θ/(cos θ - sin θ) = (cos θ + sin θ)/(cos θ - sin θ) = RHS ✓",
                    type: "proving",
                    difficulty: "hard"
                }
            ]
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            sin_plus_cos: {
                misconception: "sin θ + cos θ = 1",
                reality: "sin²θ + cos²θ = 1 (the squares are essential)",
                correctiveExample: "For θ = 45°: sin 45° + cos 45° = √2/2 + √2/2 = √2 ≠ 1, but sin²45° + cos²45° = 1/2 + 1/2 = 1 ✓",
                commonIn: ['pythagorean_identities']
            },
            distribution_fallacy: {
                misconception: "sin(α + β) = sin α + sin β",
                reality: "sin(α + β) = sin α cos β + cos α sin β",
                correctiveExample: "sin(30° + 60°) = sin 90° = 1, but sin 30° + sin 60° = 1/2 + √3/2 ≈ 1.366 ≠ 1",
                commonIn: ['sum_difference_identities']
            },
            cos_sign_error: {
                misconception: "cos(α + β) = cos α cos β + sin α sin β",
                reality: "cos(α + β) = cos α cos β - sin α sin β (note the minus)",
                correctiveExample: "Cosine uses opposite sign from the operation",
                commonIn: ['sum_difference_identities']
            },
            tan_reciprocal: {
                misconception: "cot θ is the reciprocal of cos θ",
                reality: "cot θ = 1/tan θ = cos θ/sin θ (reciprocal of tangent, not cosine)",
                correctiveExample: "sec θ = 1/cos θ; cot θ = 1/tan θ; don't mix them up",
                commonIn: ['reciprocal_identities']
            },
            double_angle_error: {
                misconception: "sin 2θ = 2 sin θ",
                reality: "sin 2θ = 2 sin θ cos θ (needs both sin and cos)",
                correctiveExample: "sin 60° = √3/2, but 2 sin 30° = 2(1/2) = 1 ≠ √3/2",
                commonIn: ['double_angle_identities']
            },
            proving_method: {
                misconception: "You can operate on both sides when proving identities",
                reality: "Work with ONE side at a time to transform it to match the other",
                correctiveExample: "Don't cross-multiply or add/subtract from both sides in proofs",
                commonIn: ['proving_identities']
            },
            half_angle_sign: {
                misconception: "The ± in half-angle formulas means both values work",
                reality: "Choose + or - based on which quadrant θ/2 is in",
                correctiveExample: "If θ/2 is in Q I, sin(θ/2) > 0, so use +",
                commonIn: ['half_angle_identities']
            },
            equation_identity_confusion: {
                misconception: "Identities and equations are the same",
                reality: "Identities are true for all values; equations have specific solutions",
                correctiveExample: "sin²θ + cos²θ = 1 is an identity (always true); sin θ = 1/2 is an equation (θ = 30°, 150°, etc.)",
                commonIn: ['solving_trig_equations']
            },
            power_notation: {
                misconception: "sin²θ = sin(θ²)",
                reality: "sin²θ = (sin θ)² - square the value, not the angle",
                correctiveExample: "sin²30° = (sin 30°)² = (1/2)² = 1/4, NOT sin(30²) = sin(900°)",
                commonIn: ['all_categories']
            },
            pythagorean_variants: {
                misconception: "All three Pythagorean identities use the same form with +",
                reality: "Only sin²θ + cos²θ = 1; others are 1 + tan²θ = sec²θ and 1 + cot²θ = csc²θ",
                correctiveExample: "Note the 1 is on the left for tan and cot versions",
                commonIn: ['pythagorean_identities']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            pythagorean_identity: {
                analogy: "GPS coordinates on Earth",
                explanation: "Just like any point on Earth's surface is a certain distance from the center (Earth's radius), any point on the unit circle is exactly distance 1 from the origin. The Pythagorean theorem guarantees this.",
                suitableFor: ['pythagorean_identities'],
                ELI5: "Imagine walking on a circular track. No matter where you are on the track, you're always the same distance from the center. That distance relationship is what sin²θ + cos²θ = 1 describes."
            },
            reciprocal_identities: {
                analogy: "Flipping fractions",
                explanation: "If you have 2/3 of a pizza, someone else has 3/2 times what you'd need for a whole pizza. Reciprocals flip the fraction, just like csc θ flips sin θ.",
                suitableFor: ['reciprocal_identities'],
                ELI5: "If sin θ is like saying 'I have 2 out of 3 pieces,' then csc θ is like saying 'I need 3/2 to make a whole.' They're flipped versions of each other."
            },
            sum_formulas: {
                analogy: "Mixing paint colors",
                explanation: "When you mix two paint colors, you don't just add them - the result depends on how they interact. Similarly, sin(α + β) isn't just sin α + sin β; it's a specific combination that accounts for how the angles interact.",
                suitableFor: ['sum_difference_identities'],
                ELI5: "Adding angles is like mixing ingredients in a recipe. You can't just dump them in - you need the right combination (sin α cos β + cos α sin β) to get the right result."
            },
            proving_identities: {
                analogy: "Solving a maze with one entrance and one exit",
                explanation: "You start at one side (the complex expression) and work your way through using identities as paths, until you reach the other side (the target expression). You can't jump between walls (work both sides simultaneously).",
                suitableFor: ['proving_identities'],
                ELI5: "Imagine you have a messy room (the complex side) and a clean room (the simple side). You clean up the messy room one step at a time until it looks like the clean room. You don't mess up both rooms at once!"
            },
            double_angle: {
                analogy: "Doubling a recipe",
                explanation: "When you double a recipe, you don't just double one ingredient - you need to consider how ingredients combine. sin(2θ) = 2 sin θ cos θ combines both sin and cos, not just doubling sin θ.",
                suitableFor: ['double_angle_identities'],
                ELI5: "If making a cake needs sugar AND flour, doubling the cake means you need both ingredients working together, not just twice the sugar. That's why sin 2θ needs both sin θ and cos θ."
            },
            unit_circle: {
                analogy: "A Ferris wheel",
                explanation: "As you ride a Ferris wheel, your height above the ground (sin θ) and horizontal distance from center (cos θ) change as the wheel rotates. These two measurements are related by the wheel's radius.",
                suitableFor: ['all_trig_concepts'],
                ELI5: "Imagine sitting on a merry-go-round. As you go around, how high you are (sine) and how far forward you are (cosine) keep changing, but you're always the same distance from the center."
            },
            even_odd_functions: {
                analogy: "Mirror and rotation symmetry",
                explanation: "Cosine is like a butterfly - flip it and it looks the same (even function). Sine is like the letter S - rotate 180° and it looks the same (odd function).",
                suitableFor: ['even_odd_identities'],
                ELI5: "Some shapes look the same in a mirror (even, like cosine). Other shapes look the same when you spin them upside down (odd, like sine)."
            },
            cofunction: {
                analogy: "Two sides of the same coin",
                explanation: "In a right triangle, if one angle is θ, the other is 90° - θ. They're partners. What's the sine for one is the cosine for the other. They're co-functions - partners in the same triangle.",
                suitableFor: ['cofunction_identities'],
                ELI5: "In a triangle, two angles are buddies that always add up to 90°. What's tall for one angle (sine) is wide for its buddy (cosine). They trade jobs!"
            },
            product_to_sum: {
                analogy: "Converting multiplication to addition",
                explanation: "Like how logarithms convert multiplication to addition to make calculations easier, product-to-sum formulas convert products of trig functions to sums, which are easier to integrate and manipulate.",
                suitableFor: ['product_to_sum_identities'],
                ELI5: "Sometimes it's easier to add than to multiply. These formulas are like a calculator that changes multiplication problems into addition problems."
            },
            power_reduction: {
                analogy: "Simplifying exponents",
                explanation: "Just as x² can be rewritten in different forms for easier calculation, sin²θ can be rewritten using cos 2θ, making it simpler for certain operations like integration.",
                suitableFor: ['power_reduction_identities'],
                ELI5: "When something is squared (used twice), sometimes there's a simpler way to write it. Power reduction is like finding a shortcut for writing sin²θ."
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            verify_pythagorean: {
                level1: "What's the fundamental relationship between sin and cos on the unit circle?",
                level2: "Remember that for any point on the unit circle, the distance from origin is 1",
                level3: "Use the distance formula: √(x² + y²) = 1, where x = cos θ and y = sin θ",
                level4: "Square both sides: (cos θ)² + (sin θ)² = 1, which gives sin²θ + cos²θ = 1"
            },
            verify_reciprocal: {
                level1: "What does 'reciprocal' mean?",
                level2: "If a × b = 1, then b is the reciprocal of a",
                level3: "For sin θ and csc θ to be reciprocals, sin θ × csc θ = 1",
                level4: "Since csc θ = 1/sin θ, we have sin θ × (1/sin θ) = 1 ✓"
            },
            prove_identity: {
                level1: "Which side of the identity looks more complicated?",
                level2: "Start with the complex side and work toward the simpler side",
                level3: "Can you convert everything to sin and cos?",
                level4: "Look for opportunities to use Pythagorean identities (1 - sin²θ = cos²θ, etc.)"
            },
            simplify_expression: {
                level1: "Are there any obvious identities you can apply?",
                level2: "Try converting all trig functions to sin and cos",
                level3: "Look for Pythagorean patterns: sin²θ + cos²θ, 1 + tan²θ, etc.",
                level4: "Can you factor the expression or combine fractions?"
            },
            sum_difference: {
                level1: "Can you express the angle as a sum or difference of known angles?",
                level2: "For example, 75° = 45° + 30° or 105° = 60° + 45°",
                level3: "Apply the appropriate sum or difference formula",
                level4: "Remember: sin uses same sign as operation; cos uses opposite sign"
            },
            double_angle: {
                level1: "Do you see a 2θ anywhere, or an expression that could become 2θ?",
                level2: "Remember: sin 2θ = 2 sin θ cos θ",
                level3: "For cos 2θ, choose the form that matches what you have: cos²θ - sin²θ, 2cos²θ - 1, or 1 - 2sin²θ",
                level4: "Going backwards: 2 sin θ cos θ can be replaced with sin 2θ to simplify"
            },
            half_angle: {
                level1: "Do you see θ/2 or an angle that's half of another?",
                level2: "Half-angle formulas express sin(θ/2), cos(θ/2), tan(θ/2) in terms of functions of θ",
                level3: "Remember the formulas have ± signs - determine the correct sign from the quadrant",
                level4: "For tan(θ/2), you can use the square root form or the forms without ±: sin θ/(1 + cos θ) or (1 - cos θ)/sin θ"
            },
            solve_equation: {
                level1: "Can you isolate a single trig function?",
                level2: "Use identities to express everything in terms of one trig function if possible",
                level3: "Solve for the trig function value, then find all angles in the specified interval",
                level4: "Check all four quadrants and use reference angles; verify solutions in original equation"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "What is sin²θ + cos²θ?",
                    answer: "1",
                    assesses: "pythagorean_identity_knowledge",
                    difficulty: "basic"
                },
                {
                    question: "What is csc θ in terms of sin θ?",
                    answer: "1/sin θ",
                    assesses: "reciprocal_identity_knowledge",
                    difficulty: "basic"
                },
                {
                    question: "Express tan θ using sin θ and cos θ",
                    answer: "sin θ / cos θ",
                    assesses: "quotient_identity_knowledge",
                    difficulty: "basic"
                },
                {
                    question: "What is sin(α + β) equal to?",
                    answer: "sin α cos β + cos α sin β",
                    assesses: "sum_formula_knowledge",
                    difficulty: "intermediate"
                },
                {
                    question: "Simplify: 2 sin θ cos θ",
                    answer: "sin 2θ",
                    assesses: "double_angle_recognition",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "If sin²θ + cos²θ = 1, what does 1 - sin²θ equal?",
                    options: ["cos θ", "cos²θ", "-cos²θ", "sin θ"],
                    correct: "cos²θ",
                    explanation: "From sin²θ + cos²θ = 1, subtract sin²θ from both sides"
                },
                {
                    question: "Which identity has a MINUS sign?",
                    options: ["sin(α + β)", "cos(α + β)", "1 + tan²θ", "sin²θ + cos²θ"],
                    correct: "cos(α + β)",
                    explanation: "cos(α + β) = cos α cos β - sin α sin β (opposite sign from operation)"
                },
                {
                    question: "When proving identities, you should:",
                    options: [
                        "Work with both sides simultaneously",
                        "Work with one side at a time",
                        "Cross-multiply",
                        "Add same thing to both sides"
                    ],
                    correct: "Work with one side at a time",
                    explanation: "Unlike equations, identities require transforming one side to match the other"
                },
                {
                    question: "sin 2θ equals:",
                    options: ["2 sin θ", "2 cos θ", "2 sin θ cos θ", "sin²θ + cos²θ"],
                    correct: "2 sin θ cos θ",
                    explanation: "Double-angle formula for sine includes both sin θ and cos θ"
                }
            ],
            summative: [
                {
                    question: "Prove: (sin θ + cos θ)² = 1 + 2 sin θ cos θ",
                    requiresWork: true,
                    rubric: {
                        expand_left: 1,
                        group_terms: 1,
                        apply_pythagorean: 1,
                        simplify: 1
                    }
                },
                {
                    question: "Find all solutions to sin θ = 1/2 in [0, 2π)",
                    answer: "θ = π/6, 5π/6",
                    requiresWork: true,
                    rubric: {
                        reference_angle: 1,
                        quadrant_I_solution: 1,
                        quadrant_II_solution: 1,
                        verification: 1
                    }
                },
                {
                    question: "Simplify: (1 - cos²θ)/(sin θ)",
                    answer: "sin θ",
                    requiresWork: true,
                    rubric: {
                        pythagorean_substitution: 2,
                        simplification: 1,
                        final_answer: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Verify sin²30° + cos²30° = 1",
                    "Find sec θ if cos θ = 1/2",
                    "Express cot θ in terms of sin and cos",
                    "What is sin(-θ) if sin θ = 0.6?"
                ],
                medium: [
                    "Prove: tan²θ + 1 = sec²θ",
                    "Simplify: sin θ csc θ + cos θ sec θ",
                    "Find sin 75° using sum formula",
                    "If cos θ = 3/5 in Q IV, find sin θ"
                ],
                hard: [
                    "Prove: (sin θ - cos θ)² = 1 - 2 sin θ cos θ",
                    "Simplify: (1 - sin θ)/(cos θ) + (cos θ)/(1 - sin θ)",
                    "Find exact value of cos 15° using half-angle formula",
                    "Prove: (tan θ + cot θ)² = sec²θ + csc²θ"
                ]
            },
            byObjective: {
                canApplyPythagorean: [
                    "Simplify: sin²θ + cos²θ - 1",
                    "Express sin²θ in terms of cos θ",
                    "Prove: sin²θ = 1 - cos²θ",
                    "Simplify: (1 - cos²θ)/sin²θ"
                ],
                canUseReciprocals: [
                    "Rewrite using csc: 1/sin θ + 1/sin θ",
                    "Simplify: sin θ · csc θ",
                    "Express in terms of sin: csc²θ - cot²θ",
                    "Simplify: (sec θ)(cos θ)"
                ],
                canProveIdentities: [
                    "Prove: tan θ = sin θ/cos θ",
                    "Prove: cos²θ - sin²θ = 2cos²θ - 1",
                    "Prove: (1 + tan²θ)(cos²θ) = 1",
                    "Prove: sin θ/(1 + cos θ) = (1 - cos θ)/sin θ"
                ],
                canUseSumFormulas: [
                    "Find sin 105° using sum formula",
                    "Expand: cos(x + y)",
                    "Simplify: sin(π/2 - θ)",
                    "Prove: sin(α + β) + sin(α - β) = 2 sin α cos β"
                ],
                canUseDoubleAngle: [
                    "Express sin 2θ in terms of sin θ and cos θ",
                    "Find cos 2θ if sin θ = 4/5",
                    "Simplify: 2 sin θ cos θ",
                    "Rewrite cos²θ using cos 2θ"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            identitySelection: {
                "See sin²θ or cos²θ": "Consider Pythagorean identity: sin²θ + cos²θ = 1",
                "See tan, cot, sec, or csc": "Convert to sin and cos using quotient/reciprocal identities",
                "See (90° - θ) or (π/2 - θ)": "Use cofunction identities",
                "See negative angle -θ": "Use even-odd identities",
                "See sum or difference (α ± β)": "Use sum/difference formulas",
                "See 2θ": "Use double-angle formulas or work backwards to them",
                "See θ/2": "Use half-angle formulas",
                "See product of sins/cosines": "Consider product-to-sum formulas",
                "See sum of sins/cosines": "Consider sum-to-product formulas",
                "See sin²θ alone": "Use power reduction: sin²θ = (1 - cos 2θ)/2"
            },
            provingApproach: {
                step1: "Identify which side is more complex - start there",
                step2: "Convert all functions to sin and cos if unclear what to do",
                step3: "Look for factoring opportunities",
                step4: "Look for Pythagorean substitutions (1 - sin²θ = cos²θ, etc.)",
                step5: "Combine fractions if there are multiple fractions",
                step6: "Multiply by conjugate if helpful",
                step7: "Apply known identities strategically",
                step8: "Simplify at each step",
                step9: "Continue until you reach the other side"
            },
            simplificationStrategy: {
                "Multiple trig functions": "Convert all to sin and cos",
                "Fractions": "Find common denominator and combine, or convert to single fraction",
                "Products": "Look for double-angle backwards: 2 sin θ cos θ = sin 2θ",
                "Squares": "Apply Pythagorean or power reduction identities",
                "1 ± sin θ or 1 ± cos θ": "Consider multiplying by conjugate",
                "Complex denominator": "Rationalize by multiplying by conjugate"
            },
            solvingEquations: {
                "Linear in trig function": "Isolate the trig function, then use inverse",
                "Quadratic in trig function": "Factor or use quadratic formula, then solve each case",
                "Multiple trig functions": "Use identities to convert to single function",
                "Multiple angles": "Use identities to get all terms with same angle",
                "After solving": "Find reference angle, determine all solutions in interval, verify each"
            },
            examStrategy: {
                "Know cold": "Pythagorean (all 3), reciprocal, quotient, even-odd",
                "Have ready": "Sum/difference (especially sin and cos), double-angle",
                "Can derive": "Half-angle (from double-angle), product-sum, sum-product",
                "Practice": "Converting to sin/cos, factoring, combining fractions, proving",
                "Common mistakes": "Sign errors in cos(α+β), forgetting to square, one-side-only proving"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Basic Identity Sprint",
                    timeLimit: 90,
                    problems: [
                        "sin²θ + cos²θ = ?",
                        "csc θ = 1/___",
                        "tan θ = ___/cos θ",
                        "sec²θ - tan²θ = ?",
                        "sin(-θ) = ?",
                        "cos(-θ) = ?",
                        "sin(90° - θ) = ?"
                    ]
                },
                {
                    name: "Formula Recall Challenge",
                    timeLimit: 120,
                    problems: [
                        "sin(α + β) = ?",
                        "cos(α - β) = ?",
                        "sin 2θ = ?",
                        "cos 2θ = ? (any form)",
                        "tan 2θ = ?"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Identity Detective",
                    problem: "Given: sin θ = 3/5 and θ in Q II. Find: cos θ, tan θ, csc θ, sec θ, cot θ",
                    solution: "cos θ = -4/5, tan θ = -3/4, csc θ = 5/3, sec θ = -5/4, cot θ = -4/3",
                    skills: ["Pythagorean identity", "Quadrant signs", "Reciprocals", "Quotients"]
                },
                {
                    name: "Prove It Three Ways",
                    problem: "Prove sin²θ = 1 - cos²θ using three different starting points",
                    solutions: [
                        "From sin²θ + cos²θ = 1, subtract cos²θ",
                        "From unit circle: y² + x² = 1 where y = sin θ, x = cos θ",
                        "From right triangle using Pythagorean theorem"
                    ]
                },
                {
                    name: "Identity Chain",
                    problem: "Start with tan²θ and reach sin²θ/(1 - sin²θ) using only identities",
                    solution: "tan²θ = sin²θ/cos²θ = sin²θ/(1 - sin²θ)",
                    steps: "Use quotient identity, then Pythagorean identity for cos²θ"
                }
            ],
            applications: [
                {
                    scenario: "Sound Wave Interference",
                    problem: "Two sound waves y₁ = sin(440πt) and y₂ = sin(442πt) interfere. Express their sum using sum-to-product formula.",
                    equation: "y₁ + y₂ = 2 sin(441πt) cos(πt)",
                    physics: "This creates a 'beat' frequency of 1 Hz (442 - 440 = 2, divided by 2)"
                },
                {
                    scenario: "Projectile Range",
                    problem: "Show that maximum range occurs at 45° for a projectile launched at velocity v₀",
                    formula: "R = (v₀² sin 2θ)/g",
                    solution: "sin 2θ is maximum when 2θ = 90°, so θ = 45°",
                    identity: "Uses sin 2θ double-angle formula"
                },
                {
                    scenario: "AC Power Calculation",
                    problem: "Average power in AC circuit: P = V₀I₀ cos²θ. Express using power reduction.",
                    solution: "P = V₀I₀(1 + cos 2θ)/2",
                    identity: "cos²θ = (1 + cos 2θ)/2"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Prove: tan²θ + 1 = sec²θ",
                        "LHS = tan²θ + 1",
                        "    = sin²θ/cos²θ + 1",
                        "    = (sin²θ + 1)/cos²θ",  // ERROR
                        "    = ...stuck"
                    ],
                    error: "Can't add 1 to numerator only; must write 1 as cos²θ/cos²θ first",
                    correct: "= sin²θ/cos²θ + cos²θ/cos²θ = (sin²θ + cos²θ)/cos²θ = 1/cos²θ = sec²θ"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Simplify: sin(α + β)",
                        "= sin α + sin β"  // ERROR
                    ],
                    error: "Can't distribute sine over addition",
                    correct: "sin(α + β) = sin α cos β + cos α sin β"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "cos(60° + 30°) = cos 60° cos 30° + sin 60° sin 30°",  // ERROR (wrong sign)
                        "= (1/2)(√3/2) + (√3/2)(1/2)",
                        "= √3/2"
                    ],
                    correctAnswer: "0 (since cos 90° = 0)",
                    error: "Used wrong sign; cos(α + β) = cos α cos β - sin α sin β (minus, not plus)"
                }
            ],
            proofChallenges: [
                {
                    name: "Classic Identity Proof",
                    problem: "Prove: (sin θ + cos θ)² + (sin θ - cos θ)² = 2",
                    difficulty: "medium",
                    hint: "Expand both squares and look for sin²θ + cos²θ patterns"
                },
                {
                    name: "Advanced Proof",
                    problem: "Prove: (tan θ + sec θ - 1)/(tan θ - sec θ + 1) = (1 + sin θ)/cos θ",
                    difficulty: "hard",
                    hint: "Convert left side to sin and cos, then simplify the complex fraction"
                },
                {
                    name: "Elegant Simplification",
                    problem: "Prove: sin⁴θ - cos⁴θ = sin²θ - cos²θ",
                    difficulty: "medium",
                    hint: "Factor the left side as a difference of squares"
                }
            ]
        };
    }

    // SOLVER METHODS - IDENTITY VERIFICATION

    verifyPythagoreanIdentity(problem) {
        const { parameters } = problem;
        const angle = parameters.angle || 'θ';
        const form = parameters.form || 'primary';

        const identities = {
            primary: {
                formula: "sin²θ + cos²θ = 1",
                verification: "Always true for any angle θ by unit circle definition",
                geometricProof: "From Pythagorean theorem on unit circle: x² + y² = r² where r = 1"
            },
            tangent: {
                formula: "1 + tan²θ = sec²θ",
                derivation: [
                    "Start with sin²θ + cos²θ = 1",
                    "Divide both sides by cos²θ",
                    "sin²θ/cos²θ + cos²θ/cos²θ = 1/cos²θ",
                    "tan²θ + 1 = sec²θ",
                    "Rearrange: 1 + tan²θ = sec²θ"
                ]
            },
            cotangent: {
                formula: "1 + cot²θ = csc²θ",
                derivation: [
                    "Start with sin²θ + cos²θ = 1",
                    "Divide both sides by sin²θ",
                    "sin²θ/sin²θ + cos²θ/sin²θ = 1/sin²θ",
                    "1 + cot²θ = csc²θ"
                ]
            }
        };

        const identity = identities[form];

        return {
            identityType: 'Pythagorean Identity',
            form: form,
            formula: identity.formula,
            verification: identity.verification || 'Verified by derivation',
            derivation: identity.derivation,
            geometricMeaning: identity.geometricProof || 'Derived from primary form',
            category: 'pythagorean_identities',
            isVerified: true
        };
    }

    verifyReciprocalIdentity(problem) {
        const { parameters } = problem;
        const functions = parameters.functions || ['sin', 'csc'];

        const reciprocalPairs = {
            'sin-csc': {
                formula: "csc θ = 1/sin θ",
                verification: "sin θ · csc θ = sin θ · (1/sin θ) = 1 ✓",
                inverse: "sin θ = 1/csc θ"
            },
            'cos-sec': {
                formula: "sec θ = 1/cos θ",
                verification: "cos θ · sec θ = cos θ · (1/cos θ) = 1 ✓",
                inverse: "cos θ = 1/sec θ"
            },
            'tan-cot': {
                formula: "cot θ = 1/tan θ",
                verification: "tan θ · cot θ = tan θ · (1/tan θ) = 1 ✓",
                inverse: "tan θ = 1/cot θ"
            }
        };

        const pairKey = functions.sort().join('-');
        const pair = reciprocalPairs[pairKey] || reciprocalPairs['sin-csc'];

        return {
            identityType: 'Reciprocal Identity',
            formula: pair.formula,
            verification: pair.verification,
            inverseForm: pair.inverse,
            definition: 'Two functions are reciprocals if their product equals 1',
            category: 'reciprocal_identities',
            isVerified: true
        };
    }

    verifyQuotientIdentity(problem) {
        const { parameters } = problem;
        const function_type = parameters.function || 'tan';

        const quotientIdentities = {
            tan: {
                formula: "tan θ = sin θ / cos θ",
                derivation: [
                    "From unit circle: tan θ is slope of terminal side",
                    "Slope = rise/run = y/x",
                    "Since x = cos θ and y = sin θ",
                    "tan θ = sin θ / cos θ"
                ],
                verification: "Verified by unit circle definition"
            },
            cot: {
                formula: "cot θ = cos θ / sin θ",
                derivation: [
                    "cot θ = 1/tan θ (reciprocal identity)",
                    "= 1/(sin θ/cos θ)",
                    "= cos θ/sin θ"
                ],
                verification: "Derived from reciprocal and quotient identity for tan"
            }
        };

        const identity = quotientIdentities[function_type];

        return {
            identityType: 'Quotient Identity',
            formula: identity.formula,
            derivation: identity.derivation,
            verification: identity.verification,
            category: 'quotient_identities',
            isVerified: true
        };
    }

    verifyCofunctionIdentity(problem) {
        const { parameters } = problem;
        const functions = parameters.functions || ['sin', 'cos'];

        const cofunctionPairs = {
            'sin-cos': {
                formula: "sin(90° - θ) = cos θ",
                radianForm: "sin(π/2 - θ) = cos θ",
                converse: "cos(90° - θ) = sin θ",
                proof: "In right triangle, complementary angles swap opposite and adjacent sides"
            },
            'tan-cot': {
                formula: "tan(90° - θ) = cot θ",
                radianForm: "tan(π/2 - θ) = cot θ",
                converse: "cot(90° - θ) = tan θ",
                proof: "Derived from sin-cos cofunction identities"
            },
            'sec-csc': {
                formula: "sec(90° - θ) = csc θ",
                radianForm: "sec(π/2 - θ) = csc θ",
                converse: "csc(90° - θ) = sec θ",
                proof: "Derived from cos-sin cofunction identities and reciprocals"
            }
        };

        const pairKey = functions.sort().join('-');
        const pair = cofunctionPairs[pairKey] || cofunctionPairs['sin-cos'];

        return {
            identityType: 'Cofunction Identity',
            formula: pair.formula,
            radianForm: pair.radianForm,
            converse: pair.converse,
            proof: pair.proof,
            meaning: 'Complementary angles (sum to 90°) have swapped trig values',
            category: 'cofunction_identities',
            isVerified: true
        };
    }

    verifyEvenOddIdentity(problem) {
        const { parameters } = problem;
        const function_type = parameters.function || 'sin';

        const evenOddIdentities = {
            sin: {
                formula: "sin(-θ) = -sin θ",
                property: "Odd function",
                symmetry: "Symmetric about origin (point symmetry)",
                proof: "From unit circle: point at -θ is (cos θ, -sin θ)"
            },
            cos: {
                formula: "cos(-θ) = cos θ",
                property: "Even function",
                symmetry: "Symmetric about y-axis (reflection symmetry)",
                proof: "From unit circle: point at -θ is (cos θ, -sin θ), x-coordinate unchanged"
            },
            tan: {
                formula: "tan(-θ) = -tan θ",
                property: "Odd function",
                symmetry: "Symmetric about origin",
                proof: "tan(-θ) = sin(-θ)/cos(-θ) = -sin θ/cos θ = -tan θ"
            },
            csc: {
                formula: "csc(-θ) = -csc θ",
                property: "Odd function (reciprocal of odd function)",
                proof: "csc(-θ) = 1/sin(-θ) = 1/(-sin θ) = -1/sin θ = -csc θ"
            },
            sec: {
                formula: "sec(-θ) = sec θ",
                property: "Even function (reciprocal of even function)",
                proof: "sec(-θ) = 1/cos(-θ) = 1/cos θ = sec θ"
            },
            cot: {
                formula: "cot(-θ) = -cot θ",
                property: "Odd function",
                proof: "cot(-θ) = cos(-θ)/sin(-θ) = cos θ/(-sin θ) = -cot θ"
            }
        };

        const identity = evenOddIdentities[function_type];

        return {
            identityType: 'Even-Odd Identity',
            formula: identity.formula,
            property: identity.property,
            symmetry: identity.symmetry,
            proof: identity.proof,
            category: 'even_odd_identities',
            isVerified: true
        };
    }

    verifySumDifferenceIdentity(problem) {
        const { parameters } = problem;
        const function_type = parameters.function || 'sin';
        const operation = parameters.operation || 'sum';

        const sumDifferenceFormulas = {
            sin_sum: {
                formula: "sin(α + β) = sin α cos β + cos α sin β",
                memoryAid: "Sine uses same sign as operation (plus)",
                pattern: "sin-cos plus cos-sin"
            },
            sin_diff: {
                formula: "sin(α - β) = sin α cos β - cos α sin β",
                memoryAid: "Sine uses same sign as operation (minus)",
                pattern: "sin-cos minus cos-sin"
            },
            cos_sum: {
                formula: "cos(α + β) = cos α cos β - sin α sin β",
                memoryAid: "Cosine uses opposite sign from operation (plus becomes minus)",
                pattern: "cos-cos minus sin-sin",
                commonMistake: "Don't use plus sign like the operation suggests"
            },
            cos_diff: {
                formula: "cos(α - β) = cos α cos β + sin α sin β",
                memoryAid: "Cosine uses opposite sign from operation (minus becomes plus)",
                pattern: "cos-cos plus sin-sin"
            },
            tan_sum: {
                formula: "tan(α + β) = (tan α + tan β)/(1 - tan α tan β)",
                memoryAid: "Sum on top, 1 minus product below",
                pattern: "Numerator matches operation; denominator uses opposite sign"
            },
            tan_diff: {
                formula: "tan(α - β) = (tan α - tan β)/(1 + tan α tan β)",
                memoryAid: "Difference on top, 1 plus product below",
                pattern: "Numerator matches operation; denominator uses opposite sign"
            }
        };

        const key = `${function_type}_${operation}`;
        const identity = sumDifferenceFormulas[key] || sumDifferenceFormulas.sin_sum;

        return {
            identityType: 'Sum/Difference Identity',
            formula: identity.formula,
            memoryAid: identity.memoryAid,
            pattern: identity.pattern,
            commonMistake: identity.commonMistake,
            category: 'sum_difference_identities',
            isVerified: true
        };
    }

    verifyDoubleAngleIdentity(problem) {
        const { parameters } = problem;
        const function_type = parameters.function || 'sin';
        const cosForm = parameters.cosForm || 1;

        const doubleAngleFormulas = {
            sin: {
                formula: "sin 2θ = 2 sin θ cos θ",
                derivation: "From sin(θ + θ) using sum formula",
                applications: ["Product of sin and cos", "Area formulas", "Physics: SHM"]
            },
            cos: {
                form1: {
                    formula: "cos 2θ = cos²θ - sin²θ",
                    whenToUse: "When both sin²θ and cos²θ are present",
                    derivation: "From cos(θ + θ) using sum formula"
                },
                form2: {
                    formula: "cos 2θ = 2cos²θ - 1",
                    whenToUse: "When working with cos²θ",
                    derivation: "From form 1 using sin²θ = 1 - cos²θ"
                },
                form3: {
                    formula: "cos 2θ = 1 - 2sin²θ",
                    whenToUse: "When working with sin²θ",
                    derivation: "From form 1 using cos²θ = 1 - sin²θ"
                }
            },
            tan: {
                formula: "tan 2θ = 2tan θ/(1 - tan²θ)",
                derivation: "From tan(θ + θ) using sum formula",
                restriction: "Undefined when tan²θ = 1, i.e., when θ = ±45°"
            }
        };

        let result = {
            identityType: 'Double-Angle Identity',
            category: 'double_angle_identities',
            isVerified: true
        };

        if (function_type === 'cos') {
            const forms = doubleAngleFormulas.cos;
            result.allForms = [forms.form1, forms.form2, forms.form3];
            result.selectedForm = forms[`form${cosForm}`];
            result.formula = result.selectedForm.formula;
            result.whenToUse = result.selectedForm.whenToUse;
            result.derivation = result.selectedForm.derivation;
        } else {
            const identity = doubleAngleFormulas[function_type];
            result.formula = identity.formula;
            result.derivation = identity.derivation;
            result.applications = identity.applications;
            result.restriction = identity.restriction;
        }

        return result;
    }

    verifyHalfAngleIdentity(problem) {
        const { parameters } = problem;
        const function_type = parameters.function || 'sin';

        const halfAngleFormulas = {
            sin: {
                formula: "sin(θ/2) = ±√[(1 - cos θ)/2]",
                signRule: "Choose + or - based on quadrant of θ/2",
                derivation: "From cos 2α = 1 - 2sin²α, let α = θ/2, solve for sin(θ/2)"
            },
            cos: {
                formula: "cos(θ/2) = ±√[(1 + cos θ)/2]",
                signRule: "Choose + or - based on quadrant of θ/2",
                derivation: "From cos 2α = 2cos²α - 1, let α = θ/2, solve for cos(θ/2)"
            },
            tan: {
                form1: {
                    formula: "tan(θ/2) = ±√[(1 - cos θ)/(1 + cos θ)]",
                    signRule: "Choose + or - based on quadrant of θ/2"
                },
                form2: {
                    formula: "tan(θ/2) = sin θ/(1 + cos θ)",
                    advantage: "No ± sign needed"
                },
                form3: {
                    formula: "tan(θ/2) = (1 - cos θ)/sin θ",
                    advantage: "No ± sign needed"
                }
            }
        };

        const identity = halfAngleFormulas[function_type];

        let result = {
            identityType: 'Half-Angle Identity',
            category: 'half_angle_identities',
            isVerified: true
        };

        if (function_type === 'tan') {
            result.allForms = [identity.form1, identity.form2, identity.form3];
            result.preferredForms = "Forms 2 and 3 (no ± sign needed)";
            result.formula = identity.form1.formula;
            result.alternativeForms = [identity.form2.formula, identity.form3.formula];
        } else {
            result.formula = identity.formula;
            result.signRule = identity.signRule;
            result.derivation = identity.derivation;
        }

        return result;
    }

    verifyProductToSumIdentity(problem) {
        return {
            identityType: 'Product-to-Sum Identity',
            formulas: {
                sinCos: "sin α cos β = ½[sin(α + β) + sin(α - β)]",
                cosSin: "cos α sin β = ½[sin(α + β) - sin(α - β)]",
                cosCos: "cos α cos β = ½[cos(α - β) + cos(α + β)]",
                sinSin: "sin α sin β = ½[cos(α - β) - cos(α + β)]"
            },
            pattern: "All formulas have factor of ½",
            whenToUse: "Converting products to sums for integration or simplification",
            derivation: "From sum and difference formulas",
            category: 'product_to_sum_identities',
            isVerified: true
        };
    }

    verifySumToProductIdentity(problem) {
        return {
            identityType: 'Sum-to-Product Identity',
            formulas: {
                sinPlusSin: "sin α + sin β = 2 sin[(α+β)/2] cos[(α-β)/2]",
                sinMinusSin: "sin α - sin β = 2 cos[(α+β)/2] sin[(α-β)/2]",
                cosPlusCos: "cos α + cos β = 2 cos[(α+β)/2] cos[(α-β)/2]",
                cosMinusCos: "cos α - cos β = -2 sin[(α+β)/2] sin[(α-β)/2]"
            },
            pattern: "All have factor of 2 and use (α+β)/2 and (α-β)/2",
            note: "Difference of cosines has negative sign",
            whenToUse: "Factoring sums/differences, solving equations",
            category: 'sum_to_product_identities',
            isVerified: true
        };
    }

    verifyPowerReductionIdentity(problem) {
        return {
            identityType: 'Power-Reduction Identity',
            formulas: {
                sinSquared: "sin²θ = (1 - cos 2θ)/2",
                cosSquared: "cos²θ = (1 + cos 2θ)/2",
                tanSquared: "tan²θ = (1 - cos 2θ)/(1 + cos 2θ)",
                sinFourth: "sin⁴θ = (3 - 4cos 2θ + cos 4θ)/8",
                cosFourth: "cos⁴θ = (3 + 4cos 2θ + cos 4θ)/8"
            },
            derivation: "From double-angle formulas solved for sin²θ and cos²θ",
            whenToUse: "Integration of even powers of trig functions",
            category: 'power_reduction_identities',
            isVerified: true
        };
    }

    // PROVING IDENTITIES

    proveIdentity(problem) {
        const { cleanInput, parameters } = problem;
        const leftSide = parameters.leftSide || cleanInput.split('=')[0]?.trim();
        const rightSide = parameters.rightSide || cleanInput.split('=')[1]?.trim();

        // Analyze which side is more complex
        const complexity = this.analyzeComplexity(leftSide, rightSide);

        return {
            type: 'Identity Proof',
            leftSide: leftSide,
            rightSide: rightSide,
            recommendation: {
                startSide: complexity.moreComplex,
                targetSide: complexity.lessComplex,
                reasoning: `Start with ${complexity.moreComplex} side as it's more complex`
            },
            suggestedStrategy: this.suggestProofStrategy(leftSide, rightSide),
            category: 'proving_identities'
        };
    }

    analyzeComplexity(expr1, expr2) {
        const getComplexity = (expr) => {
            if (!expr) return 0;
            let score = 0;
            score += (expr.match(/sin|cos|tan|csc|sec|cot/g) || []).length * 2;
            score += (expr.match(/\^2|²/g) || []).length * 1.5;
            score += (expr.match(/\//g) || []).length * 2;
            score += (expr.match(/\+|-/g) || []).length;
            score += (expr.match(/\(/g) || []).length * 0.5;
            return score;
        };

        const complex1 = getComplexity(expr1);
        const complex2 = getComplexity(expr2);

        return {
            moreComplex: complex1 >= complex2 ? 'left' : 'right',
            lessComplex: complex1 >= complex2 ? 'right' : 'left',
            complexityScores: { left: complex1, right: complex2 }
        };
    }

    suggestProofStrategy(left, right) {
        const strategies = [];

        // Check for specific patterns
        if ((left + right).match(/tan|cot|sec|csc/)) {
            strategies.push("Convert tan, cot, sec, csc to sin and cos");
        }

        if ((left + right).match(/sin.*2|cos.*2|2.*sin|2.*cos/i)) {
            strategies.push("Look for double-angle formulas or their reverse");
        }

        if ((left + right).match(/sin.*\^2|cos.*\^2|²/)) {
            strategies.push("Use Pythagorean identity: sin²θ + cos²θ = 1");
        }

        if ((left + right).match(/1.*-.*sin|1.*-.*cos|1.*\+.*tan/i)) {
            strategies.push("Consider Pythagorean substitutions");
        }

        if ((left + right).match(/\+.*-|\-.*\+/)) {
            strategies.push("Look for factoring opportunities");
        }

        if (strategies.length === 0) {
            strategies.push("Start with more complex side and simplify step by step");
        }

        return strategies;
    }

    // SIMPLIFICATION

    simplifyTrigExpression(problem) {
        const { cleanInput, parameters } = problem;
        const expression = parameters.expression || cleanInput;

        return {
            type: 'Trigonometric Simplification',
            originalExpression: expression,
            suggestion: "Apply identities systematically to simplify",
            strategies: [
                "Convert to sin and cos if multiple functions present",
                "Apply Pythagorean identities where applicable",
                "Look for double-angle patterns",
                "Factor if possible",
                "Combine fractions if present"
            ],
            category: 'simplification'
        };
    }

    // SOLVING EQUATIONS

    solveBasicTrigEquation(problem) {
        const { parameters } = problem;
        const function_type = parameters.function || 'sin';
        const value = parameters.value || 0.5;
        const interval = parameters.interval || '[0, 2π)';

        return {
            type: 'Basic Trigonometric Equation',
            equation: `${function_type} θ = ${value}`,
            interval: interval,
            approach: [
                `Find reference angle: θ_ref = arc${function_type}(${Math.abs(value)})`,
                "Determine which quadrants give the correct sign",
                "Find all solutions in the specified interval",
                "Verify each solution"
            ],
            category: 'solving_trig_equations'
        };
    }

    solveQuadraticTrigEquation(problem) {
        const { parameters } = problem;
        const function_type = parameters.function || 'sin';

        return {
            type: 'Quadratic Trigonometric Equation',
            approach: "Treat as quadratic in the trig function",
            steps: [
                `Let u = ${function_type} θ`,
                "Solve quadratic equation for u",
                `For each value of u, solve ${function_type} θ = u`,
                "Find all solutions in specified interval"
            ],
            category: 'solving_trig_equations'
        };
    }

    // EXACT VALUES

    findExactValue(problem) {
        const { parameters } = problem;
        const function_type = parameters.function || 'sin';
        const angle = parameters.angle || 75;

        return {
            type: 'Find Exact Trigonometric Value',
            function: function_type,
            angle: `${angle}°`,
            approach: "Express angle as sum or difference of special angles (30°, 45°, 60°)",
            suggestion: `${angle}° could be expressed using sum/difference formulas`,
            category: 'exact_values'
        };
    }

    // STEP GENERATION METHODS

    generateLinearSteps(problem, solution) {
        // For trigonometric identities, we typically generate proof or verification steps
        let baseSteps = this.generateBaseTrigSteps(problem, solution);

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

    generateBaseTrigSteps(problem, solution) {
        const { type, category } = problem;
        const steps = [];

        // Step 1: Given identity or problem
        steps.push({
            stepNumber: 1,
            step: 'Given',
            description: `${solution.identityType || 'Trigonometric problem'}`,
            expression: solution.formula || problem.cleanInput,
            reasoning: `We will ${category.includes('verify') ? 'verify' : category.includes('prove') ? 'prove' : 'solve'} this ${category.replace(/_/g, ' ')}`,
            goalStatement: solution.recommendation ? solution.recommendation.reasoning : 'Apply appropriate identities'
        });

        // Add category-specific steps
        if (category.includes('pythagorean')) {
            steps.push(...this.generatePythagoreanVerificationSteps(solution));
        } else if (category.includes('proving')) {
            steps.push(...this.generateProvingSteps(solution));
        } else if (category.includes('sum_difference')) {
            steps.push(...this.generateSumDifferenceSteps(solution));
        } else if (category.includes('double_angle')) {
            steps.push(...this.generateDoubleAngleSteps(solution));
        }

        // Final step
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Conclusion',
            description: 'Identity verified' + (solution.isVerified ? ' ✓' : ''),
            expression: solution.formula,
            finalAnswer: true,
            reasoning: 'The identity has been demonstrated to be true'
        });

        return steps;
    }

    generatePythagoreanVerificationSteps(solution) {
        const steps = [];

        if (solution.derivation) {
            solution.derivation.forEach((derivStep, index) => {
                steps.push({
                    stepNumber: index + 2,
                    step: `Derivation step ${index + 1}`,
                    description: derivStep,
                    reasoning: 'Following the algebraic manipulation',
                    algebraicRule: index === 0 ? 'Start with fundamental identity' : 'Apply algebraic property'
                });
            });
        } else {
            steps.push({
                stepNumber: 2,
                step: 'Verification',
                description: 'Apply unit circle definition',
                expression: 'x² + y² = r² where r = 1',
                reasoning: 'Any point on unit circle satisfies this',
                visualHint: 'Draw unit circle with point (cos θ, sin θ)'
            });

            steps.push({
                stepNumber: 3,
                step: 'Substitute',
                description: 'Let x = cos θ, y = sin θ',
                expression: 'cos²θ + sin²θ = 1',
                reasoning: 'Coordinates on unit circle are (cos θ, sin θ)'
            });
        }

        return steps;
    }

    generateProvingSteps(solution) {
        const steps = [];

        steps.push({
            stepNumber: 2,
            step: 'Strategy',
            description: `Start with ${solution.recommendation?.startSide || 'left'} side (more complex)`,
            expression: solution.leftSide,
            reasoning: solution.recommendation?.reasoning || 'Work with complex side toward simple side',
            strategicNote: solution.suggestedStrategy?.[0] || 'Apply identities systematically'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply transformations',
            description: 'Use suggested strategies to transform expression',
            suggestions: solution.suggestedStrategy || ['Convert to sin/cos', 'Use Pythagorean identities'],
            reasoning: 'Each transformation should move us toward the target expression'
        });

        steps.push({
            stepNumber: 4,
            step: 'Verify',
            description: 'Confirm the transformed expression matches target',
            expression: solution.rightSide,
            reasoning: 'Both sides are now equal, proving the identity'
        });

        return steps;
    }

    generateSumDifferenceSteps(solution) {
        const steps = [];

        steps.push({
            stepNumber: 2,
            step: 'Recall formula',
            description: solution.memoryAid || 'Remember the pattern',
            formula: solution.formula,
            pattern: solution.pattern,
            reasoning: 'This formula allows us to expand the sum/difference of angles'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply formula',
            description: 'Substitute specific values if given, or leave in general form',
            reasoning: 'Direct application of the identity',
            commonMistake: solution.commonMistake
        });

        return steps;
    }

    generateDoubleAngleSteps(solution) {
        const steps = [];

        steps.push({
            stepNumber: 2,
            step: 'Identify double angle',
            description: 'Recognize that 2θ = θ + θ',
            reasoning: 'Double-angle formulas are special cases of sum formulas'
        });

        if (solution.allForms) {
            steps.push({
                stepNumber: 3,
                step: 'Choose appropriate form',
                description: `For cos 2θ, we have three equivalent forms`,
                forms: solution.allForms.map(f => f.formula),
                selectedForm: solution.selectedForm?.formula,
                reasoning: solution.selectedForm?.whenToUse || 'Choose based on context'
            });
        } else {
            steps.push({
                stepNumber: 3,
                step: 'Apply formula',
                formula: solution.formula,
                reasoning: solution.derivation || 'From sum formula with α = β = θ'
            });
        }

        return steps;
    }

    // ENHANCED EXPLANATION METHODS (similar structure to linear workbook)

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

    getConceptualExplanation(step, problem) {
        const category = problem.category;

        const conceptualExplanations = {
            pythagorean_identities: "The Pythagorean identity comes from the Pythagorean theorem applied to the unit circle - every point is exactly distance 1 from the origin.",
            reciprocal_identities: "Reciprocals are mathematical partners that multiply to give 1. Each trig function has a reciprocal partner.",
            sum_difference_identities: "When we add angles, the trig values don't just add - they interact in specific ways described by these formulas.",
            double_angle_identities: "Doubling an angle creates specific patterns in the trig values, combining both sine and cosine components.",
            proving_identities: "Proving an identity means showing two expressions are always equal by transforming one into the other using known truths."
        };

        return conceptualExplanations[category] || step.reasoning || "Each step uses established relationships between trig functions.";
    }

    getProceduralExplanation(step) {
        if (step.strategicNote) {
            return `Strategy: ${step.strategicNote}. Apply this by following the suggested transformations.`;
        }
        if (step.suggestions) {
            return `Procedure: ${step.suggestions.join('; then ')}`;
        }
        return step.description || "Follow the systematic approach for this type of problem.";
    }

    getVisualExplanation(step, problem) {
        const category = problem.category;

        const visualExplanations = {
            pythagorean_identities: "Picture a point on the unit circle. The x and y coordinates always satisfy x² + y² = 1.",
            reciprocal_identities: "Visualize flipping a fraction upside down - that's what reciprocals do.",
            cofunction_identities: "In a right triangle, complementary angles are the two acute angles that add to 90°. They swap sine and cosine values.",
            even_odd_identities: "Graph y = cos x - it's symmetric about the y-axis (even). Graph y = sin x - it has origin symmetry (odd).",
            sum_difference_identities: "Imagine rotating a point on the unit circle by two angles in succession - that's angle addition.",
            double_angle_identities: "Doubling an angle on the unit circle shows how the coordinates transform in a specific pattern."
        };

        return visualExplanations[category] || "Visualize the relationship on the unit circle or in a right triangle.";
    }

    getAlgebraicExplanation(step) {
        if (step.algebraicRule) {
            return step.algebraicRule;
        }
        if (step.formula) {
            return `Apply the identity: ${step.formula}`;
        }
        return "Use algebraic properties to manipulate the expression while maintaining equality.";
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
                'identity': 'equation that\'s always true',
                'verify': 'check',
                'derive': 'figure out from',
                'reciprocal': 'flip the fraction',
                'cofunction': 'partner function',
                'complementary': 'add to 90°',
                'quadrant': 'section of circle'
            },
            ELI5: {
                'identity': 'math rule that always works',
                'verify': 'make sure it\'s right',
                'derive': 'figure out step by step',
                'reciprocal': 'upside-down fraction',
                'cofunction': 'buddy function',
                'complementary': 'angles that team up to make a right angle',
                'quadrant': 'quarter of the circle',
                'sine': 'how high the point is',
                'cosine': 'how far over the point is',
                'tangent': 'the slope or steepness'
            },
            detailed: {
                'identity': 'trigonometric identity (equation true for all valid angles)',
                'verify': 'verify (prove validity)',
                'derive': 'derive (deduce from fundamental principles)',
                'reciprocal': 'multiplicative inverse',
                'cofunction': 'cofunctional relationship',
                'complementary': 'complementary (angles summing to π/2)'
            }
        };

        const levelAdaptation = adaptations[level.vocabulary] || {};
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
                explanation: this.generateELI5Explanation(step, problem),
                analogy: this.findRelevantAnalogy(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestVisualization(step, problem)
            }
        }));
    }

    generateELI5Explanation(step, problem) {
        const ELI5Map = {
            'Given': "Here's the math puzzle we're trying to understand or prove is always true!",
            'Derivation': "Let's figure out why this works, starting from something we already know is true.",
            'Verification': "We're going to check if this rule really works by trying it out.",
            'Strategy': "First, we make a plan for how to solve this, like planning your moves in a game.",
            'Apply transformations': "Now we're changing the math step by step, like solving a puzzle piece by piece.",
            'Recall formula': "Let's remember the special rule we learned that helps us here.",
            'Apply formula': "Now we use that special rule to solve our problem!",
            'Conclusion': "We did it! We've shown that the math rule is true."
        };

        return ELI5Map[step.step] || "We're taking another step to understand this trig relationship!";
    }

    findRelevantAnalogy(step, problem) {
        const category = problem.category?.replace(/_identities$/, '').replace(/_/g, '_');
        
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (key.includes(category) || analogy.suitableFor.includes(category)) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return this.analogies.unit_circle.ELI5;
    }

    convertToSimpleLanguage(description) {
        if (!description) return '';

        const simplifications = {
            'identity': 'rule that always works',
            'verify': 'check',
            'prove': 'show it\'s true',
            'derive': 'figure out',
            'reciprocal': 'flipped fraction',
            'cofunction': 'partner function',
            'complementary': 'add to 90 degrees',
            'quadrant': 'section of the circle',
            'substitute': 'replace with',
            'simplify': 'make easier',
            'transform': 'change',
            'factor': 'break into pieces',
            'pythagorean': 'from the distance formula on the circle'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualization(step, problem) {
        const category = problem.category;

        const visualSuggestions = {
            pythagorean_identities: "Draw a circle with radius 1. Mark a point at angle θ. The x-coordinate is cos θ, y-coordinate is sin θ. Measure: is x² + y² = 1?",
            reciprocal_identities: "Draw a fraction like 2/3. Now flip it to 3/2. Show that 2/3 × 3/2 = 1.",
            sum_difference_identities: "Draw unit circle. Show angle α, then add angle β. The final point's coordinates involve both angles.",
            double_angle_identities: "Show angle θ on circle, then show 2θ (double it). See how sin and cos values change.",
            proving_identities: "Make two columns: write one side in left column, transform it step by step until it matches the right side."
        };

        return visualSuggestions[category] || "Draw a unit circle to visualize the relationship.";
    }

    // Additional helper methods similar to linear workbook
    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1 && steps[i].stepType !== 'bridge') {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: {
                        currentState: `We've now established: ${steps[i].expression || steps[i].description}`,
                        nextGoal: `Next: ${steps[i+1].description}`,
                        why: `This progression helps us ${problem.category.includes('prove') ? 'transform toward our goal' : 'verify the identity'}`,
                        howItHelps: 'Each step uses valid identities to maintain equality'
                    }
                });
            }
        }

        return enhancedSteps;
    }

    addErrorPrevention(step, problemType) {
        const category = this.trigTypes[problemType]?.category || problemType;
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTips(step, category),
                checkPoints: this.generateCheckPoints(step),
                warningFlags: this.identifyWarningFlags(step, category)
            }
        };
    }

    generatePreventionTips(step, category) {
        const tipDatabase = {
            pythagorean_identities: [
                'Don\'t forget to square BOTH sine and cosine',
                'Remember it\'s sin²θ + cos²θ = 1, not sin θ + cos θ = 1',
                'The 1 goes on different sides for tan and cot versions'
            ],
            proving_identities: [
                'Work with ONE side at a time - never both',
                'Don\'t assume what you\'re trying to prove',
                'State which identity you\'re using at each step'
            ],
            sum_difference_identities: [
                'Cosine uses OPPOSITE sign from the operation',
                'Don\'t confuse sin(α+β) with sin α + sin β',
                'Double-check which terms have which trig functions'
            ],
            double_angle_identities: [
                'sin 2θ = 2 sin θ cos θ (not 2 sin θ)',
                'Choose the right form of cos 2θ for the situation',
                'Don\'t forget the factor of 2'
            ]
        };

        return tipDatabase[category] || ['Check each step carefully', 'Verify identities used'];
    }

    generateCheckPoints(step) {
        return [
            'Did I apply the identity correctly?',
            'Are all my algebra steps valid?',
            'Am I working toward the goal?',
            'Have I checked for sign errors?'
        ];
    }

    identifyWarningFlags(step, category) {
        const warningDatabase = {
            proving_identities: [
                'Never cross-multiply when proving',
                'Don\'t add/subtract from both sides',
                'Work ONE side only'
            ],
            sum_difference_identities: [
                'Watch the sign in cos formulas',
                'Don\'t distribute trig functions over addition'
            ],
            half_angle_identities: [
                'Must determine correct ± sign',
                'Sign depends on quadrant of θ/2'
            ]
        };

        return warningDatabase[category] || [];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestions(step, problem),
                subSteps: this.breakIntoSubSteps(step),
                hints: this.generateProgressiveHints(step, problem),
                practiceVariation: this.generatePracticeVariation(step, problem)
            }
        }));
    }

    generateGuidingQuestions(step, problem) {
        const questionDatabase = {
            'Given': [
                'What type of identity is this?',
                'What identities might be relevant?',
                'Which side looks more complex?'
            ],
            'Strategy': [
                'Why start with this side?',
                'What makes it more complex?',
                'What\'s our target?'
            ],
            'Apply transformations': [
                'Which identity should I use first?',
                'How does this move me toward the goal?',
                'What patterns do I recognize?'
            ],
            'Verification': [
                'Does this match what I expected?',
                'Have I shown both sides are equal?',
                'Can I verify with a specific angle?'
            ]
        };

        return questionDatabase[step.step] || [
            'What am I trying to accomplish in this step?',
            'Which identity or technique applies here?',
            'How does this help prove or verify the identity?'
        ];
    }

    breakIntoSubSteps(step) {
        if (step.formula) {
            return [
                'Recall or look up the relevant identity',
                'Identify the parts that correspond to the formula',
                'Substitute values or expressions',
                'Simplify the result'
            ];
        }

        return [
            'Understand what this step requires',
            'Apply the appropriate technique',
            'Check the result makes sense'
        ];
    }

    generateProgressiveHints(step, problem) {
        const category = problem.category?.replace(/_identities$/, '').replace(/_/g, '_');
        const hintSet = this.hints[category] || this.hints.prove_identity;

        return {
            level1: hintSet.level1 || 'Think about what needs to be shown',
            level2: hintSet.level2 || 'Consider which identities might apply',
            level3: hintSet.level3 || 'Try converting to sin and cos',
            level4: hintSet.level4 || 'Apply the relevant identity step by step'
        };
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try a similar identity with different angles or functions',
            practiceHint: 'Practice with special angles (30°, 45°, 60°) to build confidence',
            extension: 'Once comfortable, try more complex identities involving multiple formulas'
        };
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before applying this step, what identities or concepts do I need to recall?',
            during: 'As I work through this, am I maintaining valid mathematical operations?',
            after: 'After this step, am I closer to the goal? Does my result make sense?'
        };
    }

    generateSelfCheckQuestion(step) {
        const questionDatabase = {
            'Given': 'Do I understand what type of identity this is?',
            'Strategy': 'Have I identified the best starting point?',
            'Apply transformations': 'Did I apply the identity correctly with no sign errors?',
            'Verification': 'Have I shown the two expressions are equivalent?',
            'Conclusion': 'Is the identity fully proven or verified?'
        };

        return questionDatabase[step.step] || 'Does this step follow logically and use valid mathematics?';
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the transformation`,
            progression: 'We\'re systematically working toward proving the identity',
            relationship: 'Each step applies valid identities to maintain equality'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.trigTypes[problemType]?.category || problemType;
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic trig functions', 'Algebraic manipulation'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = new Set();

        if (step.description) {
            const terms = ['identity', 'verify', 'prove', 'sin', 'cos', 'tan', 'csc', 'sec', 'cot',
                          'pythagorean', 'reciprocal', 'quotient', 'cofunction', 'double-angle', 'half-angle'];
            terms.forEach(term => {
                if (step.description.toLowerCase().includes(term)) {
                    vocabulary.add(term);
                }
            });
        }

        return Array.from(vocabulary);
    }

    findRealWorldConnection(step, problem) {
        const category = problem.category;

        const connections = {
            pythagorean_identities: 'Engineers use this for calculating distances and positions in 2D and 3D space',
            sum_difference_identities: 'Physics uses these for wave interference - like sound waves or light',
            double_angle_identities: 'Projectile motion uses sin 2θ to find maximum range',
            power_reduction_identities: 'Electrical engineers use these for AC power calculations'
        };

        return connections[category] || 'Trigonometric identities are fundamental to physics, engineering, and signal processing';
    }

    // MAIN SOLVER METHOD

    solveTrigonometricProblem(config) {
        const { identity, problem, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseTrigonometricProblem(identity || problem, parameters, problemType, context);
            this.currentSolution = this.solveTrigonometricProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateLinearSteps(this.currentProblem, this.currentSolution);
            this.generateTrigonometricWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                steps: this.solutionSteps
            };

        } catch (error) {
            throw new Error(`Failed to solve trigonometric problem: ${error.message}`);
        }
    }

    parseTrigonometricProblem(input, parameters = {}, problemType = null, context = {}) {
        const cleanInput = input ? this.cleanMathExpression(input) : '';

        if (problemType && this.trigTypes[problemType]) {
            return {
                originalInput: input,
                cleanInput: cleanInput,
                type: problemType,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        for (const [type, config] of Object.entries(this.trigTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(input)) {
                    return {
                        originalInput: input,
                        cleanInput: cleanInput,
                        type: type,
                        category: config.category,
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        throw new Error(`Unable to recognize trigonometric problem type from: ${input}`);
    }

    solveTrigonometricProblem_Internal(problem) {
        const solver = this.trigTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/≠/g, '!=')
            .replace(/\*\*/g, '^')
            .replace(/√/g, 'sqrt')
            .replace(/π/g, 'pi')
            .replace(/θ/g, 'theta')
            .replace(/α/g, 'alpha')
            .replace(/β/g, 'beta')
            .trim();
    }

    // WORKBOOK GENERATION

    generateTrigonometricWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = {
            title: 'Enhanced Trigonometric Identities Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createIdentityReferenceSection(),
            this.createEnhancedStepsSection(),
            this.createLessonSection(),
            this.createSolutionSection(),
            this.createVisualizationSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.trigTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.currentProblem.category || 'trigonometric identities'],
            ['Expression', this.currentSolution?.formula || this.currentProblem.cleanInput],
            ['Context', this.currentProblem.context?.description || 'Trigonometric identity work']
        ];

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.currentProblem.category;
        const prereqs = this.prerequisites[category];

        if (!prereqs) return null;

        const prereqData = [
            ['Required Skills', prereqs.skills.join(', ')],
            ['Prior Knowledge', prereqs.priorKnowledge.join(', ')],
            ['', ''],
            ['Check Questions', '']
        ];

        prereqs.checkQuestions.forEach((q, index) => {
            prereqData.push([`Q${index + 1}`, q]);
        });

        return {
            title: 'Prerequisites',
            type: 'prerequisites',
            data: prereqData
        };
    }

    createIdentityReferenceSection() {
        const category = this.currentProblem.category;
        
        const identityData = [
            ['Identity Category', category.replace(/_/g, ' ').toUpperCase()],
            ['', '']
        ];

        // Add relevant identities from database
        const relevantIdentities = this.getRelevantIdentities(category);
        relevantIdentities.forEach(identity => {
            identityData.push([identity.name, identity.formula]);
        });

        return {
            title: 'Relevant Identities',
            type: 'identity_reference',
            data: identityData
        };
    }

    getRelevantIdentities(category) {
        const identities = [];

        if (category.includes('pythagorean')) {
            identities.push(
                { name: 'Primary', formula: 'sin²θ + cos²θ = 1' },
                { name: 'Tangent Form', formula: '1 + tan²θ = sec²θ' },
                { name: 'Cotangent Form', formula: '1 + cot²θ = csc²θ' }
            );
        } else if (category.includes('reciprocal')) {
            identities.push(
                { name: 'Sine-Cosecant', formula: 'csc θ = 1/sin θ' },
                { name: 'Cosine-Secant', formula: 'sec θ = 1/cos θ' },
                { name: 'Tangent-Cotangent', formula: 'cot θ = 1/tan θ' }
            );
        } else if (category.includes('sum_difference')) {
            identities.push(
                { name: 'Sine Sum', formula: 'sin(α + β) = sin α cos β + cos α sin β' },
                { name: 'Cosine Sum', formula: 'cos(α + β) = cos α cos β - sin α sin β' },
                { name: 'Tangent Sum', formula: 'tan(α + β) = (tan α + tan β)/(1 - tan α tan β)' }
            );
        } else if (category.includes('double_angle')) {
            identities.push(
                { name: 'Sin Double', formula: 'sin 2θ = 2 sin θ cos θ' },
                { name: 'Cos Double', formula: 'cos 2θ = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ' },
                { name: 'Tan Double', formula: 'tan 2θ = 2tan θ/(1 - tan²θ)' }
            );
        }

        return identities.length > 0 ? identities : [{ name: 'General', formula: 'See lesson section for identities' }];
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step) => {
            if (step.stepType === 'bridge') {
                stepsData.push(['→ Bridge', step.title]);
                stepsData.push(['Connection', step.explanation.currentState]);
                stepsData.push(['Next', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }
            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }
            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
            }

            if (step.errorPrevention && this.includeErrorPrevention) {
                const mistakes = step.errorPrevention.commonMistakes;
                if (mistakes && mistakes.length > 0) {
                    stepsData.push(['Common Mistakes', mistakes.join('; ')]);
                }
            }

            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Think Before', step.thinkingPrompts.before]);
            }

            stepsData.push(['', '']);
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createLessonSection() {
        const category = this.currentProblem.category;
        const lesson = this.lessons[category];

        if (!lesson) return null;

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach(concept => {
            lessonData.push(['• ', concept]);
        });

        lessonData.push(['', '']);
        lessonData.push(['Theory', lesson.theory]);

        if (lesson.keyFormulas) {
            lessonData.push(['', '']);
            lessonData.push(['Key Formulas', '']);
            Object.entries(lesson.keyFormulas).forEach(([name, formula]) => {
                lessonData.push([name, formula]);
            });
        }

        if (lesson.applications) {
            lessonData.push(['', '']);
            lessonData.push(['Applications', '']);
            lesson.applications.forEach(app => {
                lessonData.push(['• ', app]);
            });
        }

        return {
            title: 'Lesson Content',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Identity Type', this.currentSolution.identityType || 'Trigonometric Identity'],
            ['Formula', this.currentSolution.formula],
            ['Status', this.currentSolution.isVerified ? 'Verified ✓' : 'Analyzed']
        ];

        if (this.currentSolution.verification) {
            solutionData.push(['Verification', this.currentSolution.verification]);
        }

        return {
            title: 'Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createVisualizationSection() {
        const category = this.currentProblem.category;
        
        const visualData = [
            ['Visualization Recommendations', ''],
            ['', '']
        ];

        if (this.visualizations.unitCircle) {
            visualData.push(['Unit Circle', this.visualizations.unitCircle.description]);
            visualData.push(['Shows', this.visualizations.unitCircle.shows.join('; ')]);
            visualData.push(['', '']);
        }

        if (category.includes('pythagorean') && this.visualizations.rightTriangle) {
            visualData.push(['Right Triangle', this.visualizations.rightTriangle.description]);
            visualData.push(['Shows', this.visualizations.rightTriangle.shows.join('; ')]);
        }

        return {
            title: 'Visualizations',
            type: 'visualization',
            data: visualData
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
            appData.push(['Identities Used',app.identitiesUsed.join(', ')]);
            appData.push(['Context', app.context]);
            appData.push(['Application', app.application]);
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

        const notes = this.generateTrigPedagogicalNotes(this.currentProblem.category);

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

    generateTrigPedagogicalNotes(category) {
        const pedagogicalDatabase = {
            pythagorean_identities: {
                objectives: [
                    'Understand and apply the fundamental Pythagorean identity',
                    'Derive tangent and cotangent forms from the primary identity',
                    'Use Pythagorean identities to simplify expressions'
                ],
                keyConcepts: [
                    'Unit circle connection to Pythagorean theorem',
                    'Three equivalent forms of Pythagorean identity',
                    'Substitution techniques using these identities'
                ],
                prerequisites: [
                    'Pythagorean theorem',
                    'Unit circle coordinates',
                    'Basic trig function definitions',
                    'Algebraic manipulation'
                ],
                commonDifficulties: [
                    'Forgetting to square both functions',
                    'Confusing sin θ + cos θ with sin²θ + cos²θ',
                    'Not recognizing which form to use'
                ],
                teachingStrategies: [
                    'Start with unit circle derivation',
                    'Use specific angle examples to verify',
                    'Practice recognizing 1 - sin²θ as cos²θ',
                    'Connect to distance formula'
                ],
                extensions: [
                    'Derive tangent and cotangent forms',
                    'Prove other identities using Pythagorean',
                    'Apply to complex expressions'
                ],
                assessment: [
                    'Can student derive all three forms?',
                    'Does student recognize when to apply each?',
                    'Can student use for substitution?'
                ]
            },
            proving_identities: {
                objectives: [
                    'Master the technique of proving trigonometric identities',
                    'Work systematically with one side of an identity',
                    'Apply multiple identities in sequence'
                ],
                keyConcepts: [
                    'One-side-only transformation approach',
                    'Strategic selection of identities',
                    'Converting to sin/cos as universal strategy',
                    'Factoring and fraction techniques'
                ],
                prerequisites: [
                    'All basic identities memorized',
                    'Algebraic manipulation skills',
                    'Fraction operations',
                    'Factoring techniques'
                ],
                commonDifficulties: [
                    'Working both sides simultaneously',
                    'Not knowing where to start',
                    'Getting stuck mid-proof',
                    'Sign errors'
                ],
                teachingStrategies: [
                    'Emphasize one-side-only rule repeatedly',
                    'Teach decision tree for strategy selection',
                    'Model think-aloud proof process',
                    'Practice converting to sin/cos first'
                ],
                extensions: [
                    'Multiple-step proofs',
                    'Proofs requiring creative insight',
                    'Creating original identities to prove'
                ],
                assessment: [
                    'Does student work only one side?',
                    'Can student select appropriate identities?',
                    'Are transformations valid and justified?'
                ]
            },
            sum_difference_identities: {
                objectives: [
                    'Apply sum and difference formulas correctly',
                    'Remember sign conventions (especially for cosine)',
                    'Use formulas to find exact values'
                ],
                keyConcepts: [
                    'Sine uses same sign as operation',
                    'Cosine uses opposite sign',
                    'Expressing angles as sums/differences',
                    'Connection to double-angle formulas'
                ],
                prerequisites: [
                    'Basic trig values for 30°, 45°, 60°',
                    'Angle addition concept',
                    'FOIL or distributive property'
                ],
                commonDifficulties: [
                    'Wrong sign in cosine formula',
                    'Thinking sin(α+β) = sin α + sin β',
                    'Mixing up which terms have which functions',
                    'Forgetting formulas'
                ],
                teachingStrategies: [
                    'Create memorable sign rules',
                    'Practice with special angle combinations',
                    'Derive formulas from unit circle',
                    'Use mnemonic devices'
                ],
                extensions: [
                    'Derive product-to-sum formulas',
                    'Triple-angle formulas',
                    'Complex angle expressions'
                ],
                assessment: [
                    'Can student recall formulas accurately?',
                    'Does student use correct signs?',
                    'Can student find exact values?'
                ]
            },
            double_angle_identities: {
                objectives: [
                    'Apply double-angle formulas',
                    'Choose appropriate form of cos 2θ',
                    'Work backwards to recognize patterns'
                ],
                keyConcepts: [
                    'Double-angle as special case of sum formulas',
                    'Three forms of cos 2θ are equivalent',
                    'Form selection based on context',
                    'Connection to power reduction'
                ],
                prerequisites: [
                    'Sum formulas',
                    'Pythagorean identity',
                    'Pattern recognition'
                ],
                commonDifficulties: [
                    'Choosing wrong form of cos 2θ',
                    'Thinking sin 2θ = 2 sin θ',
                    'Not seeing 2 sin θ cos θ as sin 2θ'
                ],
                teachingStrategies: [
                    'Derive from sum formulas',
                    'Practice form selection',
                    'Work backwards exercises',
                    'Compare all three cos 2θ forms'
                ],
                extensions: [
                    'Power reduction formulas',
                    'Integration applications',
                    'Triple-angle formulas'
                ],
                assessment: [
                    'Can student derive formulas?',
                    'Does student select appropriate forms?',
                    'Can student work in both directions?'
                ]
            },
            solving_trig_equations: {
                objectives: [
                    'Solve basic and complex trigonometric equations',
                    'Find all solutions in given interval',
                    'Verify solutions'
                ],
                keyConcepts: [
                    'Reference angles and quadrant analysis',
                    'Periodicity and general solutions',
                    'Using identities to simplify equations',
                    'Factoring and quadratic techniques'
                ],
                prerequisites: [
                    'Inverse trig functions',
                    'Unit circle quadrant signs',
                    'All basic identities',
                    'Quadratic equation solving'
                ],
                commonDifficulties: [
                    'Finding only one solution',
                    'Missing solutions in other quadrants',
                    'Not checking for extraneous solutions',
                    'Dividing by trig function (could be zero)'
                ],
                teachingStrategies: [
                    'Systematic quadrant checking',
                    'Visual unit circle reference',
                    'Always verify solutions',
                    'Practice both algebraic and graphical methods'
                ],
                extensions: [
                    'Equations with multiple angles',
                    'Systems of trig equations',
                    'Equations requiring multiple identities'
                ],
                assessment: [
                    'Does student find all solutions?',
                    'Are solutions verified?',
                    'Can student handle different equation types?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Understand and apply trigonometric identities'],
            keyConcepts: ['Identity application', 'Algebraic manipulation'],
            prerequisites: ['Basic trigonometry'],
            commonDifficulties: ['Formula memorization', 'Application strategy'],
            teachingStrategies: ['Practice with examples', 'Visual aids'],
            extensions: ['More complex problems'],
            assessment: ['Can student apply identities correctly?']
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateTrigAlternativeMethods(this.currentProblem.category);

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method Used', alternatives.primaryMethod],
                ['', ''],
                ['Alternative Approaches', ''],
                ...alternatives.methods.map((method, index) => [
                    `Method ${index + 1}`, `${method.name}: ${method.description}`
                ]),
                ['', ''],
                ['Method Comparison', alternatives.comparison]
            ]
        };
    }

    generateTrigAlternativeMethods(category) {
        const alternativeDatabase = {
            pythagorean_identities: {
                primaryMethod: 'Unit Circle Derivation',
                methods: [
                    {
                        name: 'Pythagorean Theorem on Triangle',
                        description: 'Use right triangle with hypotenuse 1, apply a² + b² = c²'
                    },
                    {
                        name: 'Algebraic Derivation',
                        description: 'Divide primary identity by sin²θ or cos²θ to get other forms'
                    },
                    {
                        name: 'Coordinate Geometry',
                        description: 'Distance formula from origin to point on unit circle'
                    }
                ],
                comparison: 'Unit circle is most intuitive; triangle good for beginners; algebraic shows connections between forms'
            },
            proving_identities: {
                primaryMethod: 'Transform Complex Side to Simple',
                methods: [
                    {
                        name: 'Convert Everything to Sin/Cos',
                        description: 'Universal strategy: express all functions as sin and cos, then simplify'
                    },
                    {
                        name: 'Transform Both to Common Expression',
                        description: 'Work both sides independently to same intermediate expression'
                    },
                    {
                        name: 'Substitution Method',
                        description: 'Let u = expression, prove in terms of u, substitute back'
                    },
                    {
                        name: 'Numerical Verification First',
                        description: 'Try specific angles to guide strategy (not a proof, but helpful)'
                    }
                ],
                comparison: 'Sin/cos conversion most reliable; both-sides approach can be clearer; numerical verification guides but doesn\'t prove'
            },
            sum_difference_identities: {
                primaryMethod: 'Direct Formula Application',
                methods: [
                    {
                        name: 'Geometric Derivation',
                        description: 'Use rotation matrices or coordinate geometry on unit circle'
                    },
                    {
                        name: 'Euler\'s Formula',
                        description: 'Use e^(iθ) = cos θ + i sin θ (advanced)'
                    },
                    {
                        name: 'Memorized Values Table',
                        description: 'For specific angles, use pre-computed table of exact values'
                    }
                ],
                comparison: 'Formula application is standard; geometric shows why it works; Euler\'s elegant but requires complex numbers'
            },
            double_angle_identities: {
                primaryMethod: 'Sum Formula with α = β',
                methods: [
                    {
                        name: 'Power Reduction Reverse',
                        description: 'For cos 2θ, start from power reduction formulas solved for cos 2θ'
                    },
                    {
                        name: 'Geometric Doubling',
                        description: 'Visualize on unit circle: start at θ, rotate another θ'
                    },
                    {
                        name: 'Direct Memorization',
                        description: 'Memorize all forms as separate facts'
                    }
                ],
                comparison: 'Sum formula derivation shows connections; power reduction useful for integration; memorization fastest but no understanding'
            },
            solving_trig_equations: {
                primaryMethod: 'Algebraic with Quadrant Analysis',
                methods: [
                    {
                        name: 'Graphical Method',
                        description: 'Graph both sides, find intersection points'
                    },
                    {
                        name: 'Unit Circle Visualization',
                        description: 'Mark the value on unit circle, identify all angles'
                    },
                    {
                        name: 'Calculator Numerical',
                        description: 'Use calculator to find approximate solutions, then find exact'
                    },
                    {
                        name: 'Table of Values',
                        description: 'For special angles, check table directly'
                    }
                ],
                comparison: 'Algebraic most precise; graphical provides visual confirmation; unit circle excellent for conceptual understanding; calculator helpful for complex equations'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard approach',
            methods: [{
                name: 'Alternative technique',
                description: 'Other methods may apply depending on specific problem'
            }],
            comparison: 'Choose based on problem structure and personal preference'
        };
    }

    createPracticeProblemsSection() {
        const category = this.currentProblem.category;
        const problems = this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy Level', '']
        ];

        problems.easy.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium Level', '']);

        problems.medium.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Hard Level', '']);

        problems.hard.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        // Add category-specific problems
        const categoryProblems = this.getCategorySpecificProblems(category);
        if (categoryProblems.length > 0) {
            practiceData.push(['', '']);
            practiceData.push(['Category-Specific Practice', '']);
            categoryProblems.forEach((p, i) => {
                practiceData.push([`${i + 1}`, p]);
            });
        }

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    getCategorySpecificProblems(category) {
        const categoryProblems = {
            pythagorean_identities: [
                "Simplify: (1 - sin²θ)(1 + tan²θ)",
                "If cos θ = 2/3, find sin θ (assume Q I)",
                "Prove: tan²θ + 1 = sec²θ"
            ],
            reciprocal_identities: [
                "Simplify: sin θ · csc θ + cos θ · sec θ",
                "Express in terms of sin: csc²θ - cot²θ",
                "Rewrite without reciprocals: 1/(csc θ) + 1/(sec θ)"
            ],
            sum_difference_identities: [
                "Find exact value: sin 75° (use 45° + 30°)",
                "Expand: cos(x - π/4)",
                "Verify: sin(θ + π/2) = cos θ"
            ],
            double_angle_identities: [
                "If sin θ = 3/5, find sin 2θ",
                "Express 2cos²θ - 1 in terms of 2θ",
                "Simplify: (sin θ + cos θ)² - 1"
            ],
            proving_identities: [
                "Prove: (1 - cos θ)(1 + cos θ) = sin²θ",
                "Prove: tan θ + cot θ = sec θ · csc θ",
                "Prove: (sin θ + cos θ)² = 1 + sin 2θ"
            ],
            solving_trig_equations: [
                "Solve: 2 sin θ = √3 in [0, 2π)",
                "Solve: cos²θ - sin²θ = 1/2 in [0, 2π)",
                "Solve: tan²θ - 3 = 0 in [0, π)"
            ]
        };

        return categoryProblems[category] || [];
    }

    // UTILITY METHODS

    parseCoefficient(coeff) {
        if (!coeff || coeff.trim() === '') return 0;

        let cleaned = coeff.replace(/\s+/g, '');
        if (cleaned === '+' || cleaned === '') return 1;
        if (cleaned === '-') return -1;

        const fractionMatch = cleaned.match(/^([+-]?\d*\.?\d*)\/(\d*\.?\d*)$/);
        if (fractionMatch) {
            const numerator = parseFloat(fractionMatch[1]) || 1;
            const denominator = parseFloat(fractionMatch[2]) || 1;
            return denominator !== 0 ? numerator / denominator : 0;
        }

        const num = parseFloat(cleaned);
        return isNaN(num) ? 0 : num;
    }
}

// Export the class
export default EnhancedTrigonometricIdentitiesWorkbook;
