I'll create the Formula Rearranging workbook code following the same structure as the factorization workbook. This is a large codebase, so I'll write it directly here:
// Enhanced Formula Rearranging Workbook - Comprehensive Formula Rearranging System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { MathematicsSvgDiagrams } from '../svg-data.js';
import { MathematicsDiagramsRegistry } from '../registry.js';
import { MathematicsDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedFormulaRearrangingWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "rearranging";
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
        this.initializeRearrangingTopics();
        this.initializeRearrangingLessons();
        this.initializeMathematicsPracticals();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            rearranging: {
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
                linearBg: '#e3f2fd',
                fractionsBg: '#e8f5e9',
                rootsBg: '#fff8e1',
                multipleTermsBg: '#fce4ec',
                complexBg: '#f3e5f5',
                balanceBg: '#e0f7fa'
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
                linearBg: '#e8f5e9',
                fractionsBg: '#ede7f6',
                rootsBg: '#fff8e1',
                multipleTermsBg: '#fce4ec',
                complexBg: '#f3e5f5',
                balanceBg: '#e0f7fa'
            }
        };

        this.colors = themes[this.theme] || themes.rearranging;
    }

    initializeMathematicsSymbols() {
        return {
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'pi': 'π',
            'theta': 'θ',
            'sigma': 'Σ',
            'phi': 'φ',
            'arrow': '→',
            'doubleArrow': '↔',
            'implies': '⟹',
            'iff': '⟺',
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
            'subject': 'S',
            'formula': 'F',
            'inverse': 'f⁻¹',
            'integer': 'ℤ',
            'rational': 'ℚ',
            'real': 'ℝ',
            'complex': 'ℂ',
            'natural': 'ℕ'
        };
    }

    initializeRearrangingTopics() {
        this.mathematicsTopics = {
            linear_rearranging: {
                patterns: [
                    /linear.*rearrang|rearrang.*linear/i,
                    /simple.*formula|basic.*rearrang/i,
                    /one.*step.*rearrang|single.*operation/i,
                    /isolat.*variable|make.*subject.*simple/i
                ],
                handler: this.handleLinearRearranging.bind(this),
                name: 'Linear Formula Rearranging',
                category: 'rearranging',
                description: 'Rearranging single-step and two-step linear formulas by applying inverse operations',
                difficulty: 'beginner',
                prerequisites: ['inverse_operations', 'balance_method', 'algebraic_notation']
            },

            rearranging_with_fractions: {
                patterns: [
                    /fraction.*rearrang|rearrang.*fraction/i,
                    /formula.*fraction|denominator.*subject/i,
                    /multiply.*through|clear.*fraction/i,
                    /rational.*formula/i
                ],
                handler: this.handleRearrangingWithFractions.bind(this),
                name: 'Rearranging Formulas with Fractions',
                category: 'rearranging',
                description: 'Rearranging formulas that contain fractional expressions by clearing denominators',
                difficulty: 'intermediate',
                prerequisites: ['linear_rearranging', 'equivalent_fractions', 'cross_multiplication']
            },

            rearranging_with_roots_powers: {
                patterns: [
                    /square.?root.*rearrang|rearrang.*square.?root/i,
                    /power.*formula|rearrang.*power/i,
                    /exponent.*subject|index.*rearrang/i,
                    /root.*subject|radical.*formula/i
                ],
                handler: this.handleRearrangingWithRootsPowers.bind(this),
                name: 'Rearranging with Roots and Powers',
                category: 'rearranging',
                description: 'Rearranging formulas involving square roots, cube roots, squares, and higher powers',
                difficulty: 'intermediate',
                prerequisites: ['linear_rearranging', 'square_roots', 'inverse_powers']
            },

            subject_appears_twice: {
                patterns: [
                    /subject.*twice|appear.*twice/i,
                    /collect.*terms|gather.*subject/i,
                    /factorise.*subject|factor.*out.*subject/i,
                    /variable.*both.*sides/i
                ],
                handler: this.handleSubjectAppearsTwice.bind(this),
                name: 'Subject Appears Twice (Collecting Terms)',
                category: 'rearranging',
                description: 'Rearranging formulas where the new subject appears in more than one term, requiring collection and factorisation',
                difficulty: 'advanced',
                prerequisites: ['linear_rearranging', 'rearranging_with_fractions', 'factorisation_gcf']
            },

            combined_operations_rearranging: {
                patterns: [
                    /combined.*rearrang|multi.*step.*rearrang/i,
                    /complex.*formula|advanced.*rearrang/i,
                    /nested.*formula|compound.*rearrang/i,
                    /physics.*formula|science.*formula/i
                ],
                handler: this.handleCombinedOperationsRearranging.bind(this),
                name: 'Combined Operations Rearranging',
                category: 'rearranging',
                description: 'Rearranging multi-step formulas combining fractions, roots, powers, and multiple terms',
                difficulty: 'advanced',
                prerequisites: ['rearranging_with_fractions', 'rearranging_with_roots_powers', 'subject_appears_twice']
            },

            inverse_functions_rearranging: {
                patterns: [
                    /inverse.*function|function.*inverse/i,
                    /log.*rearrang|rearrang.*log/i,
                    /trig.*rearrang|rearrang.*trig/i,
                    /exponential.*subject/i
                ],
                handler: this.handleInverseFunctionsRearranging.bind(this),
                name: 'Rearranging with Inverse Functions',
                category: 'rearranging',
                description: 'Rearranging formulas involving logarithms, trigonometric functions, and exponentials',
                difficulty: 'advanced',
                prerequisites: ['combined_operations_rearranging', 'logarithms', 'trigonometry']
            },

            complete_rearranging_strategy: {
                patterns: [
                    /complete.*rearrang|fully.*rearrang/i,
                    /systematic.*rearrang|strategy.*formula/i,
                    /multi.*formula.*rearrang/i
                ],
                handler: this.handleCompleteRearrangingStrategy.bind(this),
                name: 'Complete Formula Rearranging Strategy',
                category: 'rearranging',
                description: 'Systematic decision-based approach to rearranging any formula for any subject variable',
                difficulty: 'advanced',
                prerequisites: ['linear_rearranging', 'rearranging_with_fractions', 'rearranging_with_roots_powers', 'subject_appears_twice', 'combined_operations_rearranging']
            }
        };
    }

    initializeRearrangingLessons() {
        this.lessons = {
            linear_rearranging: {
                title: "Linear Formula Rearranging: The Balance Method",
                concepts: [
                    "A formula is a mathematical relationship between two or more variables",
                    "The subject of a formula is the variable expressed alone on one side",
                    "Rearranging makes a different variable the subject",
                    "The balance method: whatever you do to one side, you must do to the other",
                    "Inverse operations undo each other: addition↔subtraction, multiplication↔division"
                ],
                theory: "Rearranging formulas is the algebraic equivalent of re-describing the same relationship from a different perspective. If v = u + at describes final velocity, rearranging for u describes the same motion but asks: given the final velocity, what was the initial velocity? The relationship is unchanged — only the perspective shifts.",
                keyDefinitions: {
                    "Formula": "A mathematical rule or relationship expressed using variables and symbols (e.g., A = lw)",
                    "Subject of a formula": "The variable that stands alone on one side of the equals sign (e.g., A is the subject of A = lw)",
                    "Rearranging": "Manipulating a formula algebraically to make a different variable the subject",
                    "Inverse operation": "The operation that undoes another: addition and subtraction are inverses; multiplication and division are inverses",
                    "Balance method": "Performing identical operations to both sides of an equation to maintain equality",
                    "Equation": "A mathematical statement that two expressions are equal",
                    "Variable": "A letter representing an unknown or changeable quantity"
                },
                inverseOperations: {
                    additionSubtraction: {
                        rule: "To eliminate +a from one side, subtract a from both sides",
                        rule2: "To eliminate −a from one side, add a to both sides",
                        example: "y = x + 5 → y − 5 = x → x = y − 5"
                    },
                    multiplicationDivision: {
                        rule: "To eliminate multiplication by a, divide both sides by a",
                        rule2: "To eliminate division by a, multiply both sides by a",
                        example: "y = 3x → y/3 = x → x = y/3"
                    },
                    twoStepFormulas: {
                        principle: "Reverse the order of operations: undo the last operation first",
                        example: "y = 2x + 3 → y − 3 = 2x → (y−3)/2 = x",
                        note: "Think of BODMAS in reverse when deciding which operation to undo first"
                    }
                },
                strategicApproach: {
                    steps: [
                        "Step 1: Identify the current subject and the new desired subject",
                        "Step 2: Locate every term containing the new subject",
                        "Step 3: Work systematically — undo operations in reverse BODMAS order",
                        "Step 4: Apply each inverse operation to both sides",
                        "Step 5: Simplify at each stage",
                        "Step 6: Verify by substituting a specific value into both forms"
                    ]
                },
                workedExamples: [
                    {
                        formula: "v = u + at",
                        task: "Make u the subject",
                        step1: "v = u + at",
                        step2: "v − at = u [subtract at from both sides]",
                        result: "u = v − at",
                        verify: "If v=10, u=2, a=4, t=2: LHS=10; RHS=2+4×2=10 ✓; rearranged: u=10−4×2=2 ✓"
                    },
                    {
                        formula: "P = 2l + 2w",
                        task: "Make l the subject",
                        step1: "P = 2l + 2w",
                        step2: "P − 2w = 2l [subtract 2w from both sides]",
                        step3: "(P − 2w)/2 = l [divide both sides by 2]",
                        result: "l = (P − 2w)/2",
                        verify: "If P=20, w=3: l = (20−6)/2 = 7. Check: P = 2(7) + 2(3) = 20 ✓"
                    },
                    {
                        formula: "F = ma",
                        task: "Make a the subject",
                        step1: "F = ma",
                        step2: "F/m = a [divide both sides by m]",
                        result: "a = F/m",
                        verify: "If F=30, m=5: a=6. Check: F=5×6=30 ✓"
                    },
                    {
                        formula: "C = 5(F − 32)/9",
                        task: "Make F the subject",
                        step1: "C = 5(F − 32)/9",
                        step2: "9C = 5(F − 32) [multiply both sides by 9]",
                        step3: "9C/5 = F − 32 [divide both sides by 5]",
                        step4: "9C/5 + 32 = F [add 32 to both sides]",
                        result: "F = 9C/5 + 32",
                        verify: "C=100°C: F = 900/5 + 32 = 180 + 32 = 212°F ✓"
                    }
                ],
                applications: [
                    "Physics: rearranging v = u + at for u, a, or t",
                    "Chemistry: rearranging PV = nRT for any variable",
                    "Finance: rearranging I = PRT for principal P or rate R",
                    "Geometry: rearranging A = lw for l or w",
                    "Engineering: converting between unit systems"
                ]
            },

            rearranging_with_fractions: {
                title: "Rearranging Formulas with Fractions: Clearing Denominators",
                concepts: [
                    "Fractions in formulas are cleared by multiplying through by the denominator",
                    "If the subject is in the denominator, cross-multiplication or reciprocal is used",
                    "Always identify which side the subject is on before clearing fractions",
                    "LCD (Lowest Common Denominator) clears multiple fractions simultaneously",
                    "Cross-multiplication applies specifically to formulas of the form a/b = c/d"
                ],
                theory: "Fractional formulas appear throughout science, finance, and engineering. The key insight is that fractions are division in disguise — and the inverse of division is multiplication. Clearing denominators transforms a fractional formula into a linear one, making rearranging straightforward.",
                keyDefinitions: {
                    "Denominator": "The bottom number or expression in a fraction",
                    "Numerator": "The top number or expression in a fraction",
                    "Cross-multiplication": "For a/b = c/d, multiply to get ad = bc",
                    "LCD": "Lowest Common Denominator — the smallest expression divisible by all denominators",
                    "Clearing fractions": "Multiplying every term on both sides by the LCD to eliminate all denominators"
                },
                methods: {
                    subjectInNumerator: {
                        method: "Multiply both sides by the denominator to clear it",
                        example: "y = x/3 → 3y = x → x = 3y"
                    },
                    subjectInDenominator: {
                        method: "Option 1: Multiply both sides by the subject's denominator expression; Option 2: Take reciprocals of both sides",
                        example: "y = k/x → xy = k → x = k/y (multiply both sides by x, then divide by y)"
                    },
                    crossMultiplication: {
                        method: "For a/b = c/d: multiply diagonally → ad = bc",
                        example: "p/q = r/s → ps = qr → p = qr/s"
                    },
                    multipleFractions: {
                        method: "Multiply all terms by the LCD to clear all fractions simultaneously",
                        example: "y/2 + z/3 = x → multiply by 6: 3y + 2z = 6x → x = (3y + 2z)/6"
                    }
                },
                workedExamples: [
                    {
                        formula: "v = u/t",
                        task: "Make u the subject",
                        step1: "v = u/t",
                        step2: "vt = u [multiply both sides by t]",
                        result: "u = vt"
                    },
                    {
                        formula: "R = V/I",
                        task: "Make I the subject",
                        step1: "R = V/I",
                        step2: "RI = V [multiply both sides by I]",
                        step3: "I = V/R [divide both sides by R]",
                        result: "I = V/R",
                        note: "Ohm's Law — rearranging gives current = voltage ÷ resistance"
                    },
                    {
                        formula: "1/f = 1/u + 1/v",
                        task: "Make u the subject",
                        step1: "1/u = 1/f − 1/v",
                        step2: "1/u = (v − f)/(fv) [combine fractions with LCD = fv]",
                        step3: "u = fv/(v − f) [take reciprocal of both sides]",
                        result: "u = fv/(v − f)",
                        note: "The thin lens formula from optics"
                    },
                    {
                        formula: "y = (x + 2)/(x − 3)",
                        task: "Make x the subject",
                        step1: "y(x − 3) = x + 2 [multiply both sides by (x − 3)]",
                        step2: "yx − 3y = x + 2 [expand left side]",
                        step3: "yx − x = 2 + 3y [collect x terms on left]",
                        step4: "x(y − 1) = 2 + 3y [factorise x]",
                        step5: "x = (2 + 3y)/(y − 1) [divide by (y − 1)]",
                        result: "x = (3y + 2)/(y − 1)",
                        note: "Subject appears in both numerator and denominator — requires collecting terms"
                    }
                ],
                applications: [
                    "Optics: thin lens formula 1/f = 1/u + 1/v",
                    "Electricity: parallel resistors 1/R = 1/R₁ + 1/R₂",
                    "Finance: interest rate I = PRT rearranged for R",
                    "Chemistry: concentration C = n/V rearranged for n or V",
                    "Mechanics: average speed = distance/time rearranged for distance or time"
                ]
            },

            rearranging_with_roots_powers: {
                title: "Rearranging with Roots and Powers: Inverse Operations",
                concepts: [
                    "Squaring and square-rooting are inverse operations",
                    "Cubing and cube-rooting are inverse operations",
                    "To undo xⁿ, take the nth root of both sides",
                    "To undo √x, square both sides",
                    "Always consider whether solutions could be positive and negative (±) when squaring"
                ],
                theory: "Powers and roots appear in formulas across all sciences — from area and volume formulae to Einstein's relativity and quantum mechanics. The key principle is that every operation has an inverse: squaring is undone by square-rooting, and vice versa. Understanding this relationship extends the balance method to non-linear formulas.",
                keyDefinitions: {
                    "Power": "An exponent indicating repeated multiplication: xⁿ = x × x × ... × x (n times)",
                    "Root": "The inverse of a power: ⁿ√x is the number which, when raised to the power n, gives x",
                    "Square root": "√x: the positive number whose square equals x",
                    "Cube root": "∛x: the number whose cube equals x",
                    "Index": "Another term for exponent or power",
                    "Radical": "The √ symbol indicating a root operation"
                },
                inverseOperations: {
                    squareToRoot: {
                        rule: "If x² appears: take √ of both sides to isolate x",
                        note: "Remember ± when taking square root of a constant",
                        example: "v² = u² + 2as → v = ±√(u² + 2as)"
                    },
                    rootToSquare: {
                        rule: "If √x appears: square both sides to eliminate the root",
                        example: "T = 2π√(l/g) → T² = 4π²(l/g) → l = gT²/(4π²)"
                    },
                    generalPower: {
                        rule: "To undo xⁿ: raise both sides to the power 1/n",
                        example: "V = (4/3)πr³ → r³ = 3V/(4π) → r = ∛(3V/(4π))"
                    }
                },
                workedExamples: [
                    {
                        formula: "v² = u² + 2as",
                        task: "Make s the subject",
                        step1: "v² = u² + 2as",
                        step2: "v² − u² = 2as [subtract u² from both sides]",
                        step3: "(v² − u²)/(2a) = s [divide both sides by 2a]",
                        result: "s = (v² − u²)/(2a)",
                        note: "Key SUVAT formula in mechanics"
                    },
                    {
                        formula: "T = 2π√(l/g)",
                        task: "Make l the subject",
                        step1: "T = 2π√(l/g)",
                        step2: "T/(2π) = √(l/g) [divide both sides by 2π]",
                        step3: "T²/(4π²) = l/g [square both sides]",
                        step4: "gT²/(4π²) = l [multiply both sides by g]",
                        result: "l = gT²/(4π²)",
                        note: "Simple pendulum period formula from physics"
                    },
                    {
                        formula: "V = (4/3)πr³",
                        task: "Make r the subject",
                        step1: "V = (4/3)πr³",
                        step2: "3V = 4πr³ [multiply both sides by 3]",
                        step3: "3V/(4π) = r³ [divide both sides by 4π]",
                        step4: "r = ∛(3V/(4π)) [take cube root of both sides]",
                        result: "r = ∛(3V/(4π))",
                        note: "Volume of a sphere rearranged for radius"
                    },
                    {
                        formula: "E = mc²",
                        task: "Make c the subject",
                        step1: "E = mc²",
                        step2: "E/m = c² [divide both sides by m]",
                        step3: "c = √(E/m) [take positive square root — speed is positive]",
                        result: "c = √(E/m)",
                        note: "Einstein's mass-energy equivalence"
                    }
                ],
                applications: [
                    "Physics: pendulum period T = 2π√(l/g) for l or g",
                    "Mechanics: SUVAT equations v² = u² + 2as for u, a, or s",
                    "Geometry: Pythagoras c² = a² + b² for a or b",
                    "Cosmology: E = mc² for c or m",
                    "Geometry: volume of sphere V = (4/3)πr³ for r"
                ]
            },

            subject_appears_twice: {
                title: "Subject Appears Twice: Collect and Factorise",
                concepts: [
                    "When the new subject appears in two or more terms, it cannot be isolated by simple inverse operations alone",
                    "Collect all terms containing the subject onto one side of the equation",
                    "Factorise the subject out of all the collected terms",
                    "Divide both sides by the remaining bracket to isolate the subject",
                    "This technique combines rearranging with the GCF factorisation method"
                ],
                theory: "The collect-and-factorise technique arises when the subject variable is 'trapped' inside multiple terms simultaneously. The algebraic strategy mirrors the factorisation principle: if a variable appears in several terms, it can always be factorised out as a common factor, creating a single term on one side that can then be isolated by division.",
                keyDefinitions: {
                    "Collecting terms": "Moving all terms containing the subject variable to one side of the equation",
                    "Factorising": "Writing a sum of terms as a product by extracting the common factor (the subject)",
                    "Common factor": "The subject variable, which appears in every collected term",
                    "Subject isolation": "Having the subject alone on one side: subject = expression in other variables"
                },
                strategicApproach: {
                    steps: [
                        "Step 1: Expand any brackets if needed",
                        "Step 2: Move all terms containing the new subject to the left side",
                        "Step 3: Move all terms NOT containing the new subject to the right side",
                        "Step 4: Factorise the subject out of all left-side terms",
                        "Step 5: Divide both sides by the bracket (the factored coefficient)",
                        "Step 6: Verify by back-substitution"
                    ]
                },
                workedExamples: [
                    {
                        formula: "ax + b = cx + d",
                        task: "Make x the subject",
                        step1: "ax + b = cx + d",
                        step2: "ax − cx = d − b [collect x terms on left, constants on right]",
                        step3: "x(a − c) = d − b [factorise x from left side]",
                        step4: "x = (d − b)/(a − c) [divide both sides by (a − c)]",
                        result: "x = (d − b)/(a − c)"
                    },
                    {
                        formula: "y = (x + a)/(x + b)",
                        task: "Make x the subject",
                        step1: "y(x + b) = x + a [multiply both sides by (x + b)]",
                        step2: "yx + yb = x + a [expand]",
                        step3: "yx − x = a − yb [collect x terms on left]",
                        step4: "x(y − 1) = a − yb [factorise x]",
                        step5: "x = (a − yb)/(y − 1) [divide by (y − 1)]",
                        result: "x = (a − yb)/(y − 1)"
                    },
                    {
                        formula: "p = (2q + r)/(q − s)",
                        task: "Make q the subject",
                        step1: "p(q − s) = 2q + r [multiply both sides by (q − s)]",
                        step2: "pq − ps = 2q + r [expand]",
                        step3: "pq − 2q = r + ps [collect q terms on left]",
                        step4: "q(p − 2) = r + ps [factorise q]",
                        step5: "q = (r + ps)/(p − 2) [divide by (p − 2)]",
                        result: "q = (r + ps)/(p − 2)"
                    },
                    {
                        formula: "V = (e − Ir)R/(R + r)",
                        task: "Make R the subject",
                        step1: "V(R + r) = (e − Ir)R [multiply both sides by (R + r)]",
                        step2: "VR + Vr = eR − IrR [expand both sides]",
                        step3: "VR − eR + IrR = −Vr [collect R terms on left]",
                        step4: "R(V − e + Ir) = −Vr [factorise R]",
                        step5: "R = −Vr/(V − e + Ir) = Vr/(e − V − Ir) [divide and simplify signs]",
                        result: "R = Vr/(e − Ir − V)",
                        note: "Terminal voltage formula in electricity — R appears in both numerator and denominator"
                    }
                ],
                applications: [
                    "Electronics: terminal voltage V = E − Ir rearranged variants",
                    "Mechanics: relative velocity and motion formulas",
                    "Finance: compound interest formulas with shared variable",
                    "Optics: lens and mirror formulas where variable appears multiple times",
                    "Kinematics: equations where time appears in multiple terms"
                ]
            },

            combined_operations_rearranging: {
                title: "Combined Operations: Multi-Step Formula Rearranging",
                concepts: [
                    "Real-world formulas often combine fractions, roots, powers, and multiple terms simultaneously",
                    "Always plan the sequence of steps before beginning",
                    "Work outward from the subject: peel away operations layer by layer",
                    "Expand brackets only when they prevent progress; otherwise treat as single entities",
                    "Each step should make the formula simpler, not more complex"
                ],
                theory: "Advanced formula rearranging requires combining all previously learned techniques in a deliberate sequence. The guiding principle is systematic simplification: identify the outermost operation trapping the subject, apply its inverse, and repeat until the subject is isolated. This mirrors solving complex equations but applied to general symbolic manipulation.",
                decisionFlowchart: {
                    step1: "Is the subject under a fraction? → Clear the denominator by multiplying through",
                    step2: "Is the subject under a root or power? → Apply inverse root/power",
                    step3: "Does the subject appear in multiple terms? → Collect and factorise",
                    step4: "Is the subject inside brackets? → Consider expanding or treating bracket as a unit",
                    step5: "Apply linear rearranging steps to isolate the subject"
                },
                workedExamples: [
                    {
                        formula: "r = √((A − P)/P × 100)",
                        task: "Make A the subject",
                        context: "Percentage change formula",
                        step1: "r² = (A − P)/P × 100 [square both sides to remove root]",
                        step2: "r²P/100 = A − P [multiply both sides by P/100]",
                        step3: "A = r²P/100 + P [add P to both sides]",
                        result: "A = P(r²/100 + 1) = P(100 + r²)/100"
                    },
                    {
                        formula: "t = 2π√(m/k)",
                        task: "Make k the subject",
                        context: "Period of a mass-spring system",
                        step1: "t/(2π) = √(m/k) [divide both sides by 2π]",
                        step2: "t²/(4π²) = m/k [square both sides]",
                        step3: "k = m × 4π²/t² = 4π²m/t² [multiply both sides by k, divide by t²/4π²]",
                        result: "k = 4π²m/t²"
                    },
                    {
                        formula: "s = ut + ½at²",
                        task: "Make u the subject",
                        context: "SUVAT equation for displacement",
                        step1: "s − ½at² = ut [subtract ½at² from both sides]",
                        step2: "u = (s − ½at²)/t [divide both sides by t]",
                        result: "u = s/t − at/2"
                    },
                    {
                        formula: "c = √(a² + b² − 2ab·cos(C))",
                        task: "Make cos(C) the subject",
                        context: "The cosine rule in trigonometry",
                        step1: "c² = a² + b² − 2ab·cos(C) [square both sides]",
                        step2: "2ab·cos(C) = a² + b² − c² [rearrange]",
                        step3: "cos(C) = (a² + b² − c²)/(2ab) [divide by 2ab]",
                        result: "cos(C) = (a² + b² − c²)/(2ab)"
                    }
                ],
                applications: [
                    "Physics: all major equations (kinematic, thermodynamic, wave equations)",
                    "Engineering: structural and electrical formulas",
                    "Finance: compound interest and annuity formulas",
                    "Biology: population growth and pharmacokinetics models",
                    "Chemistry: ideal gas law PV = nRT and variants"
                ]
            },

            inverse_functions_rearranging: {
                title: "Rearranging with Inverse Functions: Logs, Trig, and Exponentials",
                concepts: [
                    "Logarithms are the inverse of exponential functions: if y = aˣ then x = log_a(y)",
                    "Inverse trig functions (arcsin, arccos, arctan) undo trig functions",
                    "To undo eˣ, apply ln (natural logarithm) to both sides",
                    "To undo log(x), raise the base to both sides as a power",
                    "The chain rule of inverses: apply inverse functions in reverse order of operations"
                ],
                theory: "Inverse functions extend the principle of undoing operations to transcendental functions. Every function with a well-defined inverse can be 'undone': exponentials have logarithms, trigonometric functions have arc-functions, and hyperbolic functions have inverse hyperbolic functions. The strategy remains identical to linear rearranging — apply the appropriate inverse function to both sides.",
                keyDefinitions: {
                    "Inverse function": "The function that undoes another: if f(x) = y then f⁻¹(y) = x",
                    "Logarithm": "The inverse of an exponential: log_a(x) is the power to which a must be raised to give x",
                    "Natural logarithm (ln)": "The logarithm with base e ≈ 2.718; the inverse of the natural exponential eˣ",
                    "Arcsin/arccos/arctan": "Inverse trigonometric functions that give angles from trigonometric ratios",
                    "Exponential function": "A function of the form aˣ where a is a constant base"
                },
                workedExamples: [
                    {
                        formula: "y = eˣ",
                        task: "Make x the subject",
                        step1: "ln(y) = ln(eˣ) = x [take natural log of both sides]",
                        result: "x = ln(y)"
                    },
                    {
                        formula: "A = A₀e^(−kt)",
                        task: "Make t the subject",
                        context: "Radioactive decay or drug elimination",
                        step1: "A/A₀ = e^(−kt) [divide both sides by A₀]",
                        step2: "ln(A/A₀) = −kt [take natural log of both sides]",
                        step3: "t = −ln(A/A₀)/k = ln(A₀/A)/k [divide by −k]",
                        result: "t = ln(A₀/A)/k"
                    },
                    {
                        formula: "y = sin(x)",
                        task: "Make x the subject",
                        step1: "x = arcsin(y) = sin⁻¹(y) [apply inverse sine to both sides]",
                        result: "x = arcsin(y)",
                        note: "Valid for −1 ≤ y ≤ 1; gives principal value −90° ≤ x ≤ 90°"
                    },
                    {
                        formula: "pH = −log₁₀[H⁺]",
                        task: "Make [H⁺] the subject",
                        context: "Chemistry acid-base formula",
                        step1: "−pH = log₁₀[H⁺] [multiply both sides by −1]",
                        step2: "[H⁺] = 10^(−pH) [raise 10 to both sides]",
                        result: "[H⁺] = 10^(−pH)"
                    }
                ],
                applications: [
                    "Chemistry: pH formula, radioactive decay",
                    "Biology: population growth N = N₀eʳᵗ",
                    "Finance: compound interest A = Pe^(rt)",
                    "Physics: wave equations with trigonometric components",
                    "Engineering: logarithmic scales (decibels, Richter scale)"
                ]
            },

            complete_rearranging_strategy: {
                title: "Complete Formula Rearranging Strategy: Systematic Decision-Making",
                concepts: [
                    "Any formula can be rearranged by applying the correct sequence of inverse operations",
                    "Classify the formula before starting: identify all operations trapping the subject",
                    "Follow the strategic flowchart to select the correct technique at each stage",
                    "Always verify by substitution after completing the rearrangement",
                    "Dimensional analysis can confirm whether the rearranged formula has correct units"
                ],
                theory: "Complete formula rearranging integrates all techniques into a unified problem-solving strategy. The key is classification: identifying the structure of the formula determines the sequence of steps required. Like a decision tree, each structural feature (fractions, roots, subject appearing twice, inverse functions) points to the appropriate technique.",
                decisionFlowchart: {
                    step1: {
                        question: "Does the subject appear in more than one term?",
                        yes: "Expand all brackets first, then collect subject terms and factorise",
                        no: "Proceed to step 2"
                    },
                    step2: {
                        question: "Is the subject under a root or inside a power?",
                        yes: "Apply the appropriate inverse: square both sides (for roots); take root of both sides (for powers)",
                        no: "Proceed to step 3"
                    },
                    step3: {
                        question: "Is the subject in a denominator?",
                        yes: "Multiply both sides by the denominator expression to clear it",
                        no: "Proceed to step 4"
                    },
                    step4: {
                        question: "Is the subject inside a logarithm or trigonometric function?",
                        yes: "Apply the corresponding inverse function to both sides",
                        no: "Proceed to step 5"
                    },
                    step5: {
                        question: "Is it a simple linear formula now?",
                        yes: "Apply inverse operations in reverse BODMAS order",
                        no: "Repeat steps 1–4 on the simplified formula"
                    }
                },
                workedExamples: [
                    {
                        title: "Complete multi-step rearranging",
                        formula: "T = 2π√((l + r)/g)",
                        task: "Make l the subject",
                        step1: "T/(2π) = √((l + r)/g) [divide by 2π]",
                        step2: "T²/(4π²) = (l + r)/g [square both sides]",
                        step3: "gT²/(4π²) = l + r [multiply by g]",
                        step4: "l = gT²/(4π²) − r [subtract r]",
                        result: "l = gT²/(4π²) − r"
                    },
                    {
                        title: "Subject appears twice with fractions",
                        formula: "y = (3x + 1)/(2x − 5)",
                        task: "Make x the subject",
                        step1: "y(2x − 5) = 3x + 1 [multiply by (2x − 5)]",
                        step2: "2xy − 5y = 3x + 1 [expand]",
                        step3: "2xy − 3x = 1 + 5y [collect x terms]",
                        step4: "x(2y − 3) = 1 + 5y [factorise x]",
                        step5: "x = (1 + 5y)/(2y − 3) [divide by (2y − 3)]",
                        result: "x = (5y + 1)/(2y − 3)"
                    },
                    {
                        title: "Combining roots and subject-twice",
                        formula: "√(x + a) = √(x − b)",
                        task: "Make x the subject",
                        step1: "x + a = x − b [square both sides — but note: this gives a = −b, a contradiction unless simplified differently]",
                        note: "This example shows that not all rearrangements are possible; structure matters",
                        alternateFormula: "y√(x + a) = √(x − b)",
                        step1b: "y²(x + a) = x − b [square both sides]",
                        step2b: "y²x + y²a = x − b [expand]",
                        step3b: "y²x − x = −b − y²a [collect x]",
                        step4b: "x(y² − 1) = −b − y²a [factorise]",
                        step5b: "x = (−b − y²a)/(y² − 1) [divide]",
                        result: "x = −(b + ay²)/(y² − 1)"
                    }
                ],
                checklistForCompleteness: [
                    "Have you identified every term containing the subject?",
                    "Have you cleared all fractions before collecting terms?",
                    "Have you expanded all brackets that contain the subject?",
                    "Have you factorised the subject if it appears in multiple terms?",
                    "Have you verified the rearrangement by substituting a test value?",
                    "Does the rearranged formula have the correct units/dimensions?"
                ],
                applications: [
                    "All branches of physics and engineering",
                    "Chemistry: equilibrium constants and rate equations",
                    "Finance: actuarial and investment formulas",
                    "Computer science: algorithm complexity analysis",
                    "Data science: statistical and machine learning formulas"
                ]
            }
        };
    }

    initializeMathematicsPracticals() {
        this.mathematicsPracticals = {

            // ========================================
            // PRACTICAL 1: BALANCE SCALES INVESTIGATION
            // ========================================

            balance_scales_formula_rearranging: {
                name: "Balance Scales: Visualising Formula Rearranging",
                relatedTopics: ['linear_rearranging', 'subject_appears_twice'],
                category: 'algebra',
                historicalBackground: {
                    origin: "Balance scales as a model for equations date to Ancient Egypt and Babylon (c. 2000 BCE)",
                    mathematician: "Al-Khwarizmi (780–850 CE) formally described algebraic manipulation using balance metaphors in Al-Kitāb al-mukhtaṣar",
                    development: "The balance metaphor became the dominant pedagogical model for equation-solving in European algebra textbooks from the 16th century onwards",
                    significance: "The balance model makes abstract algebraic manipulation physically intuitive: an equation is balanced, and any operation that maintains balance preserves the equality",
                    modernUse: "Physical balance scales remain a standard manipulative in primary and lower secondary mathematics; virtual balance models are integrated into Desmos, GeoGebra, and Khan Academy",
                    mathematicalFoundation: "The addition property of equality (if a = b then a + c = b + c) and multiplication property of equality (if a = b then ac = bc) are the formal foundations of the balance method"
                },
                practicalMathematics: {
                    title: "Investigating Formula Rearranging Through Physical Balance",
                    hypothesis: "If a formula represents a balanced relationship between variables, then applying identical operations to both sides of the balance preserves the equality and can systematically isolate any chosen variable",
                    purpose: "Use physical or virtual balance scales to model formula rearranging, making the inverse operation principle visible and concrete",
                    background: {
                        balanceModel: "A balance scale represents an equation: left pan = right pan means both sides are equal",
                        operations: "Adding or removing identical weights from BOTH pans maintains balance (equality)",
                        inverse: "To isolate an unknown weight, remove known weights from its side — but always remove the same from both sides"
                    },
                    materials: [
                        "Physical balance scales (classroom set) OR virtual balance model (Algebra Balance at mathsisfun.com or GeoGebra)",
                        "Labelled weights: 1g, 2g, 5g, 10g, 20g sets",
                        "Labelled 'unknown' containers (representing variables x, y, a, etc.)",
                        "Squared paper for recording balance states symbolically",
                        "Coloured markers for annotating steps",
                        "Formula rearranging worksheet"
                    ],
                    procedure: [
                        "PART A: Introducing the Balance Model",
                        "",
                        "1. Set up the balance: place 3 unknown containers (each weighing x grams) and 4g on the left pan",
                        "   Left pan: 3x + 4; Right pan: 16",
                        "   Equation modelled: 3x + 4 = 16",
                        "",
                        "2. Remove 4g from BOTH pans (subtract 4 from both sides):",
                        "   Left: 3x; Right: 12",
                        "   Balance still holds: 3x = 12",
                        "",
                        "3. Split right pan into 3 equal groups (divide both sides by 3):",
                        "   Left: x; Right: 4",
                        "   Solution: x = 4",
                        "",
                        "4. Verify: weigh the unknown container — does it weigh 4g?",
                        "   Replace containers with actual 4g weights to confirm balance",
                        "",
                        "PART B: Modelling Two-Variable Formula Rearranging",
                        "",
                        "5. Model v = u + at with specific values: let a = 2, t = 3",
                        "   Formula becomes: v = u + 6",
                        "   Balance: [v] on right, [u + 6g] on left",
                        "   Rearrange for u: remove 6g from both sides → u = v − 6",
                        "   Record: 'Subtracting 6 from both sides isolates u'",
                        "",
                        "6. Model P = 2l + 2w, rearrange for l:",
                        "   Balance: [P] on right; [2l + 2w] on left",
                        "   Step 1: Remove 2w from both sides → 2l = P − 2w",
                        "   Step 2: Halve both sides → l = (P − 2w)/2",
                        "   Observe: two operations, two balance adjustments",
                        "",
                        "PART C: Investigating Unbalancing and Rebalancing",
                        "",
                        "7. Demonstrate what happens when you apply an operation to ONLY ONE side:",
                        "   Take 3x + 4 = 16; remove 4g from left pan only",
                        "   Left: 3x; Right: 16 — UNBALANCED (3x ≠ 16)",
                        "   Restore balance by removing 4g from right pan too",
                        "   Conclusion: every operation must be applied to BOTH sides",
                        "",
                        "8. Record observations: what operations maintain balance? What operations destroy it?",
                        "   Maintain: +, −, ×, ÷ the same value to BOTH sides",
                        "   Note: dividing by zero is undefined — demonstrate what happens when you 'remove zero'",
                        "",
                        "PART D: Formalising the Link to Formula Rearranging",
                        "",
                        "9. For each formula below, model on the balance, then rearrange symbolically:",
                        "   • y = 3x − 7 → make x the subject",
                        "   • A = lw → make w the subject",
                        "   • F = ma → make a the subject",
                        "   • C = 2πr → make r the subject",
                        "",
                        "10. For each rearrangement, record:",
                        "    • Each balance operation in words",
                        "    • The symbolic equivalent operation",
                        "    • The resulting formula after each step"
                    ],
                    dataTable: [
                        ["Formula", "Make Subject", "Operation 1", "Operation 2", "Result", "Verification"],
                        ["y = 3x − 7", "x", "Add 7 both sides: y+7=3x", "Divide by 3: x=(y+7)/3", "x = (y+7)/3", "y=3×(y+7)/3 − 7 = y ✓"],
                        ["A = lw", "l", "Divide by w both sides", "—", "l = A/w", "A = (A/w)×w = A ✓"],
                        ["F = ma", "a", "Divide by m both sides", "—", "a = F/m", "F = m×(F/m) = F ✓"],
                        ["v = u + at", "u", "Subtract at both sides", "—", "u = v − at", "v = (v−at)+at = v ✓"],
                        ["P = 2l + 2w", "l", "Subtract 2w both sides", "Divide by 2 both sides", "l = (P−2w)/2", "P = 2×(P−2w)/2 + 2w = P ✓"]
                    ],
                    observations: {
                        balancePreservation: "Any operation applied identically to both sides preserves the equality — the fundamental principle of algebraic manipulation",
                        operationOrder: "For two-step formulas, undo operations in reverse BODMAS order: undo addition/subtraction before multiplication/division",
                        inverseSymmetry: "Every inverse operation has a perfect symmetry: addition is undone by subtraction, multiplication by division — balance is always restorable",
                        verificationImportance: "Substituting a test value into both original and rearranged formulas confirms correctness — both should give the same result"
                    },
                    conclusions: [
                        "The balance model makes the balance method (equality preservation) physically concrete and intuitive",
                        "Formula rearranging is equivalent to rebalancing scales: every operation that maintains balance is a valid algebraic step",
                        "Inverse operations systematically peel away terms surrounding the subject",
                        "The order of inverse operations reverses the order in which operations were applied to the subject (reverse BODMAS)",
                        "Verification by substitution is the essential final step — the balance analogy extends here: check both formulas give the same numerical result"
                    ],
                    extensions: [
                        "Extend to formulas with the subject in the denominator: model 1/x on the balance using a 'reciprocal' weight",
                        "Model subject-appears-twice formulas and show why collecting is needed before isolating",
                        "Create your own formula, model it on the balance, and rearrange for each variable",
                        "Investigate what happens when you try to rearrange a formula for a variable that doesn't appear in it"
                    ],
                    realWorldConnections: [
                        "Chemistry: balancing chemical equations uses the same conservation principle as balancing algebraic expressions",
                        "Finance: balancing a budget — income = expenditure is a balance equation",
                        "Engineering: structural load calculations use balance equations (sum of forces = 0)",
                        "Physics: Newton's third law (action = reaction) is a balance equation",
                        "Pharmacy: dose calculations require rearranging concentration formulas — the balance method ensures accuracy"
                    ],
                    pedagogicalNotes: {
                        benefits: "Physical manipulatives make abstract algebraic principles concrete; kinesthetic engagement reinforces the inverse operation concept",
                        challenges: "Transitioning from physical to symbolic representation can be challenging; emphasise the direct correspondence at each step",
                        assessment: "Ask students to annotate each balance operation and its symbolic equivalent; this bridges physical intuition to algebraic formalism",
                        differentiation: "Support: provide pre-drawn balance diagrams to annotate. Extension: challenge students with three-variable formulas or subject-appears-twice cases",
                        sequencing: "Always establish the balance model conceptually before introducing symbolic manipulation; physical intuition should precede abstract rule-following"
                    }
                }
            },

            // ========================================
            // PRACTICAL 2: PHYSICS FORMULA LABORATORY
            // ========================================

            physics_formula_laboratory: {
                name: "Physics Formula Laboratory: Rearranging Real-World Equations",
                relatedTopics: ['linear_rearranging', 'rearranging_with_roots_powers', 'combined_operations_rearranging'],
                category: 'physics',
                historicalBackground: {
                    tradition: "Physics has always required formula rearranging: Newton's laws, thermodynamics, and Maxwell's equations are all regularly rearranged to solve practical problems",
                    galileo: "Galileo (1564–1642) used rearranged kinematic formulas to predict projectile motion — one of the first systematic uses of algebraic formula manipulation in science",
                    significance: "Every physics experiment requires rearranging formulas to find the quantity being measured from the quantities being controlled",
                    modernRelevance: "GCSE, A-Level, and undergraduate physics courses require fluency in formula rearranging; it is inseparable from experimental science",
                    mathematicalFoundation: "Formula rearranging underpins dimensional analysis, unit conversion, and the derivation of physical laws from more fundamental principles"
                },
                practicalMathematics: {
                    title: "Rearranging Physics Formulas Through Experimental Investigation",
                    hypothesis: "If a physical formula correctly models a relationship between measurable quantities, then rearranging it for different subjects will produce formulas that give consistent, accurate predictions when tested experimentally",
                    purpose: "Rearrange key physics formulas for different subjects, then use the rearranged formulas to calculate and predict experimental outcomes",
                    materials: [
                        "Metre rule (for measuring lengths and pendulum)",
                        "Stopwatch or timer (for period measurements)",
                        "String and bob (for pendulum practical)",
                        "Newton meter and masses (for F = ma verification)",
                        "Thermometer and water bath (for temperature conversions)",
                        "Circuit board, voltmeter, ammeter, resistors (for Ohm's Law)",
                        "Calculator and formula rearranging record sheet"
                    ],
                    formulaSet: {
                        mechanics: [
                            { formula: "v = u + at", variables: "v=final velocity, u=initial velocity, a=acceleration, t=time", rearrangeFor: ["u", "a", "t"] },
                            { formula: "s = ut + ½at²", variables: "s=displacement, u=initial velocity, a=acceleration, t=time", rearrangeFor: ["u", "a"] },
                            { formula: "v² = u² + 2as", variables: "v=final velocity, u=initial velocity, a=acceleration, s=displacement", rearrangeFor: ["u", "a", "s"] },
                            { formula: "F = ma", variables: "F=force, m=mass, a=acceleration", rearrangeFor: ["m", "a"] }
                        ],
                        waves: [
                            { formula: "v = fλ", variables: "v=wave speed, f=frequency, λ=wavelength", rearrangeFor: ["f", "λ"] },
                            { formula: "T = 1/f", variables: "T=period, f=frequency", rearrangeFor: ["f"] }
                        ],
                        pendulum: [
                            { formula: "T = 2π√(l/g)", variables: "T=period, l=length, g=gravitational field strength (9.81)", rearrangeFor: ["l", "g"] }
                        ],
                        electricity: [
                            { formula: "V = IR", variables: "V=voltage, I=current, R=resistance", rearrangeFor: ["I", "R"] },
                            { formula: "P = IV", variables: "P=power, I=current, V=voltage", rearrangeFor: ["I", "V"] }
                        ],
                        thermodynamics: [
                            { formula: "C = 5(F − 32)/9", variables: "C=Celsius, F=Fahrenheit", rearrangeFor: ["F"] },
                            { formula: "PV = nRT", variables: "P=pressure, V=volume, n=moles, R=8.314, T=temperature", rearrangeFor: ["T", "n", "P"] }
                        ]
                    },
                    procedure: [
                        "STATION 1: Pendulum — Rearranging T = 2π√(l/g)",
                        "",
                        "1. Rearrange T = 2π√(l/g) for l: show all steps",
                        "   Expected result: l = gT²/(4π²)",
                        "",
                        "2. Measure the period T of a pendulum of known length l (use length = 0.25 m)",
                        "   Time 10 complete oscillations; divide by 10 for T",
                        "   Expected: T = 2π√(0.25/9.81) ≈ 1.00 s",
                        "",
                        "3. Use rearranged formula l = gT²/(4π²) to calculate l from your measured T",
                        "   Compare calculated l to measured l — they should agree within ±5%",
                        "",
                        "4. Now rearrange T = 2π√(l/g) for g:",
                        "   Expected: g = 4π²l/T²",
                        "   Use known l and measured T to calculate g; compare to 9.81 m/s²",
                        "",
                        "STATION 2: Ohm's Law — Rearranging V = IR",
                        "",
                        "5. Rearrange V = IR for I and for R",
                        "   R = V/I; I = V/R",
                        "",
                        "6. Set up circuit with known resistor (e.g., 100 Ω); measure V and I",
                        "   Use R = V/I to calculate resistance; compare to stated 100 Ω",
                        "",
                        "7. Change voltage; recalculate I using I = V/R each time",
                        "   Record in table; confirm I increases proportionally with V",
                        "",
                        "STATION 3: Kinematics — SUVAT Rearranging",
                        "",
                        "8. From v² = u² + 2as, rearrange for s (distance):",
                        "   s = (v² − u²)/(2a)",
                        "",
                        "9. A ball is rolled from rest (u = 0) with a = 2 m/s²; after t = 3 s, find v and s:",
                        "   v = u + at = 0 + 2(3) = 6 m/s",
                        "   s = (36 − 0)/(4) = 9 m",
                        "",
                        "10. Verify: s = ut + ½at² = 0 + ½(2)(9) = 9 m ✓",
                        "",
                        "STATION 4: Temperature Conversion — Rearranging C = 5(F−32)/9",
                        "",
                        "11. Rearrange for F: show all steps",
                        "    Expected: F = 9C/5 + 32",
                        "",
                        "12. Convert 0°C, 100°C, 37°C (body temperature), −40°C using rearranged formula",
                        "    Verify: 0°C = 32°F; 100°C = 212°F; 37°C ≈ 98.6°F; −40°C = −40°F",
                        "",
                        "13. Note: −40° is the only temperature where Celsius and Fahrenheit are equal",
                        "    Prove this algebraically: set C = F in your rearranged formula"
                    ],
                    dataTable: [
                        ["Formula", "Rearranged For", "Rearranged Formula", "Test Values Used", "Calculated Result", "Experimental/Expected Value", "% Difference"],
                        ["T = 2π√(l/g)", "l", "l = gT²/(4π²)", "T=1.00s, g=9.81", "l = 9.81×1/(4π²) ≈ 0.248m", "0.250m", "0.8%"],
                        ["T = 2π√(l/g)", "g", "g = 4π²l/T²", "l=0.25m, T=1.00s", "g = 4π²×0.25/1.00 ≈ 9.87", "9.81 m/s²", "0.6%"],
                        ["V = IR", "R", "R = V/I", "V=5.0V, I=0.050A", "R = 100Ω", "100Ω", "0%"],
                        ["v² = u²+2as", "s", "s = (v²−u²)/2a", "v=6, u=0, a=2", "s = 9m", "9m", "0%"],
                        ["C = 5(F−32)/9", "F", "F = 9C/5 + 32", "C = 100°C", "F = 212°F", "212°F", "0%"]
                    ],
                    conclusions: [
                        "Rearranged formulas give identical predictions to original formulas — they describe the same physical relationship from a different perspective",
                        "The percentage difference between calculated and experimental values measures experimental error, not algebraic error — rearranging introduces no inaccuracy",
                        "Physics formula rearranging follows the same inverse operation rules as purely algebraic rearranging",
                        "Units must be consistent throughout: rearranging a formula does not change the units of the subject — dimensional analysis confirms correctness",
                        "The ability to rearrange formulas is not a separate skill from physics understanding — it IS part of understanding: recognising what each formula means from every variable's perspective"
                    ],
                    extensions: [
                        "Rearrange PV = nRT for each of the five variables and use to solve a gas law problem",
                        "Rearrange the lens formula 1/f = 1/u + 1/v for u, v, and f; test with a converging lens",
                        "Derive the quadratic formula by completing the square — this is formula rearranging applied to the general quadratic",
                        "Investigate how rearranging a formula can reveal hidden physical relationships (e.g., rearranging E = ½mv² reveals that kinetic energy scales with v²)"
                    ],
                    realWorldConnections: [
                        "Medical physics: rearranging dose formulas to find concentration from volume and dose amount",
                        "Astronomy: rearranging Kepler's third law T² = kr³ to find orbital radius from period",
                        "Aviation: rearranging Bernoulli's equation to find lift force from pressure difference",
                        "Climate science: rearranging Stefan-Boltzmann law to find planetary temperature from solar constant",
                        "Engineering: rearranging structural load formulas to determine required beam dimensions"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 3: DIMENSIONAL ANALYSIS INVESTIGATION
            // ========================================

            dimensional_analysis_investigation: {
                name: "Dimensional Analysis: Verifying Rearranged Formulas Through Units",
                relatedTopics: ['combined_operations_rearranging', 'complete_rearranging_strategy'],
                category: 'mathematics',
                historicalBackground: {
                    mathematician: "Joseph Fourier (1768–1830) systematised dimensional analysis in his work on heat conduction",
                    development: "Lord Rayleigh (1877) and Edgar Buckingham (1914) developed the Pi theorem, establishing the formal foundation of dimensional analysis",
                    significance: "Dimensional analysis provides an independent check on formula rearranging: if the units of the rearranged formula are wrong, the rearrangement contains an error",
                    modernUse: "Dimensional analysis is used by engineers and physicists to derive formulas, check calculations, and convert between unit systems; NASA uses it in all spacecraft trajectory calculations",
                    mathematicalFoundation: "Every physical quantity has dimensions expressible as combinations of mass (M), length (L), time (T), temperature (Θ), and electric current (I); a valid formula must have the same dimensions on both sides"
                },
                practicalMathematics: {
                    title: "Using Dimensional Analysis to Verify Formula Rearrangements",
                    hypothesis: "If a formula has been correctly rearranged, the dimensions of the new subject expressed through the rearranged formula must match the known dimensions of that quantity",
                    purpose: "Use dimensional analysis to verify rearranged formulas and detect errors in algebraic manipulation",
                    background: {
                        dimensionSystems: "SI dimensions: Length [L], Mass [M], Time [T], Temperature [Θ], Current [A]",
                        derivedDimensions: {
                            velocity: "[L][T]⁻¹ (metres per second)",
                            acceleration: "[L][T]⁻² (metres per second squared)",
                            force: "[M][L][T]⁻² (Newtons = kg·m·s⁻²)",
                            energy: "[M][L]²[T]⁻² (Joules = kg·m²·s⁻²)",
                            pressure: "[M][L]⁻¹[T]⁻² (Pascals = kg·m⁻¹·s⁻²)"
                        }
                    },
                    procedure: [
                        "PART A: Establishing Dimensional Analysis as a Checking Tool",
                        "",
                        "1. Write the dimensions of each base SI unit:",
                        "   Length: [L] = metres (m)",
                        "   Mass: [M] = kilograms (kg)",
                        "   Time: [T] = seconds (s)",
                        "",
                        "2. Derive dimensions of velocity from v = distance/time:",
                        "   [v] = [L]/[T] = [L][T]⁻¹ = m/s = m·s⁻¹",
                        "",
                        "3. Derive dimensions of force from F = ma:",
                        "   [F] = [M][L][T]⁻² = kg·m·s⁻²",
                        "",
                        "PART B: Verifying Rearrangements Dimensionally",
                        "",
                        "4. Verify: v = u + at rearranged for t → t = (v − u)/a",
                        "   LHS: [t] = [T]",
                        "   RHS: [v−u]/[a] = [L][T]⁻¹ / [L][T]⁻² = [T] ✓",
                        "",
                        "5. Verify: E = mc² rearranged for c → c = √(E/m)",
                        "   LHS: [c] = [L][T]⁻¹",
                        "   RHS: √([M][L]²[T]⁻²/[M]) = √([L]²[T]⁻²) = [L][T]⁻¹ ✓",
                        "",
                        "6. Verify: T = 2π√(l/g) rearranged for l → l = gT²/(4π²)",
                        "   LHS: [l] = [L]",
                        "   RHS: [g][T]² = [L][T]⁻²[T]² = [L] ✓ (4π² is dimensionless)",
                        "",
                        "PART C: Detecting Errors Through Dimensional Analysis",
                        "",
                        "7. A student rearranges v² = u² + 2as for s as: s = (v² + u²)/2a",
                        "   Check dimensions: [s] should be [L]",
                        "   Student's formula: ([L]²[T]⁻² + [L]²[T]⁻²)/([L][T]⁻²) = [L]²[T]⁻²/[L][T]⁻² = [L] ✓",
                        "   Dimensions check! But note the sign error — dimensional analysis cannot detect sign errors",
                        "   Correct formula: s = (v² − u²)/(2a)",
                        "",
                        "8. A student rearranges F = ma for m as: m = F/a²",
                        "   Check: [m] should be [M]",
                        "   Student's: [F]/[a]² = [M][L][T]⁻²/[L]²[T]⁻⁴ = [M][L]⁻¹[T]² ≠ [M] ✗",
                        "   Dimensions FAIL — an error was made. Correct: m = F/a",
                        "",
                        "9. Investigate each rearrangement below; state PASS or FAIL and identify the error if FAIL:",
                        "   a) PV = nRT for T: student writes T = nR/(PV). [Check!]",
                        "   b) s = ut + ½at² for a: student writes a = 2(s − ut)/t². [Check!]",
                        "   c) KE = ½mv² for v: student writes v = √(2KE/m). [Check!]",
                        "",
                        "PART D: Deriving Formulas Using Dimensional Analysis",
                        "",
                        "10. Use dimensional analysis to find the formula for the period T of a pendulum",
                        "    Assume T depends on: length l [L], mass m [M], gravity g [L][T]⁻²",
                        "    T = l^a × m^b × g^c",
                        "    [T] = [L]^a × [M]^b × [L][T]⁻²^c",
                        "    Equate dimensions: L: 0 = a + c; M: 0 = b; T: 1 = −2c",
                        "    Solve: c = −1/2; a = 1/2; b = 0",
                        "    T ∝ √(l/g) — matches the real formula T = 2π√(l/g) ✓",
                        "    (Dimensional analysis cannot find the 2π constant)"
                    ],
                    dataTable: [
                        ["Formula", "Rearranged For", "Result", "LHS Dimensions", "RHS Dimensions Calculated", "PASS/FAIL"],
                        ["v = u + at", "t", "t = (v−u)/a", "[T]", "[LT⁻¹]/[LT⁻²] = [T]", "PASS ✓"],
                        ["E = mc²", "c", "c = √(E/m)", "[LT⁻¹]", "√([ML²T⁻²]/[M]) = [LT⁻¹]", "PASS ✓"],
                        ["T = 2π√(l/g)", "l", "l = gT²/4π²", "[L]", "[LT⁻²][T²] = [L]", "PASS ✓"],
                        ["F = ma", "m", "m = F/a² (ERROR)", "[M]", "[MLT⁻²]/[L²T⁻⁴] = [ML⁻¹T²]", "FAIL ✗"],
                        ["PV = nRT", "T", "T = nR/(PV) (ERROR)", "[Θ]", "[mol·J/mol·K]/[Pa·m³] = K⁻¹", "FAIL ✗"]
                    ],
                    conclusions: [
                        "Dimensional analysis provides an independent algebraic verification method for formula rearranging",
                        "If dimensions of LHS and RHS match, the rearrangement is dimensionally consistent (though sign errors and missing numerical constants cannot be detected this way)",
                        "If dimensions fail to match, an algebraic error was made — dimensional analysis locates the type of error",
                        "Dimensional analysis can derive the structural form of formulas from physical principles alone, demonstrating the deep connection between mathematics and physics",
                        "All correct formula rearrangements are dimensionally homogeneous: both sides must always have identical dimensions"
                    ],
                    extensions: [
                        "Use dimensional analysis to derive the formula for drag force F ∝ ρv²A",
                        "Investigate the Buckingham Pi theorem for more complex multi-variable physical relationships",
                        "Apply dimensional analysis to check your own rearrangements in an upcoming physics assignment",
                        "Research how NASA engineers use dimensional analysis to ensure unit consistency in spacecraft calculations"
                    ],
                    realWorldConnections: [
                        "Engineering: dimensional analysis is used to design scale models (wind tunnels, ship tank testing) that behave like the real thing",
                        "Pharmacology: drug dose formulas use dimensional analysis to convert between mg/kg and absolute doses",
                        "Finance: dimensional analysis applied to economic formulas reveals structural inconsistencies in economic models",
                        "Chemistry: stoichiometric calculations are a form of dimensional analysis applied to molecular quantities"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 4: FORMULA REARRANGING CARD SORT
            // ========================================

            formula_rearranging_card_sort: {
                name: "Formula Rearranging Card Sort: Strategic Decision-Making Investigation",
                relatedTopics: ['linear_rearranging', 'rearranging_with_fractions', 'rearranging_with_roots_powers', 'subject_appears_twice', 'complete_rearranging_strategy'],
                category: 'mathematics',
                historicalBackground: {
                    pedagogicalOrigin: "Card sorting as a pedagogical strategy in mathematics was developed from concept mapping techniques in the 1980s and 1990s",
                    development: "The card sort approach to formula rearranging was popularised by Shell Centre for Mathematical Education (University of Nottingham) in their Improving Learning in Mathematics materials (2005)",
                    significance: "Card sorts develop metacognitive awareness: students must articulate WHY each step is taken, not just perform it procedurally",
                    modernUse: "Card sorts are widely used in GCSE mathematics revision as an active, discussion-promoting alternative to worked examples",
                    mathematicalFoundation: "The card sort models the decision-making process in formula rearranging: each card represents one algebraic operation and its justification — connecting procedure to principle"
                },
                practicalMathematics: {
                    title: "Sorting and Sequencing Formula Rearranging Steps: A Decision-Making Investigation",
                    hypothesis: "If the steps of formula rearranging are understood individually, students can correctly sequence them to rearrange any formula — even one not previously seen",
                    purpose: "Use card sorts to develop strategic understanding of formula rearranging: identify steps, justify each operation, and sequence them correctly for a variety of formula types",
                    materials: [
                        "Card sort sets (print and cut, or laminate for reuse):",
                        "  • Set A: Shuffled steps for rearranging v = u + at for u (6 cards per set)",
                        "  • Set B: Shuffled steps for rearranging T = 2π√(l/g) for l (8 cards per set)",
                        "  • Set C: Shuffled steps for rearranging y = (2x+1)/(x−3) for x (10 cards per set)",
                        "  • Set D: Blank cards for creating own rearrangements",
                        "Operation justification cards: 'Add to both sides', 'Subtract from both sides', 'Multiply both sides', 'Divide both sides', 'Square both sides', 'Take square root of both sides', 'Take reciprocal of both sides', 'Expand brackets', 'Collect like terms', 'Factorise'",
                        "Answer envelopes (to check sequences after attempting)",
                        "Sequencing worksheets"
                    ],
                    procedure: [
                        "ACTIVITY 1: Single-Step Identification",
                        "",
                        "1. Before sorting: What does 'rearranging for x' mean? Write a definition in your own words.",
                        "",
                        "2. For each operation card, write:",
                        "   a) When would you use this operation in formula rearranging?",
                        "   b) What does it undo?",
                        "   c) Give an example formula where you would need this operation.",
                        "",
                        "ACTIVITY 2: Card Sort A — Linear Formula",
                        "",
                        "3. Shuffle Set A cards (rearranging v = u + at for u):",
                        "   Cards might include: 'v − at = u + at − at', 'v = u + at', 'u = v − at',",
                        "   'v − at = u', 'subtract at from both sides', 'write final answer'",
                        "",
                        "4. Without looking at the answer: arrange cards in correct sequence",
                        "   Match each step card with its justification operation card",
                        "",
                        "5. Check against answer envelope; identify and correct any errors",
                        "",
                        "ACTIVITY 3: Card Sort B — Roots and Powers Formula",
                        "",
                        "6. Shuffle Set B cards (rearranging T = 2π√(l/g) for l):",
                        "   Cards include steps such as: 'divide both sides by 2π', 'square both sides',",
                        "   'multiply both sides by g', 'take square root of l/g', etc.",
                        "",
                        "7. Sequence and justify; note the importance of order:",
                        "   'Why must you divide by 2π BEFORE squaring? What goes wrong if you square first?'",
                        "",
                        "ACTIVITY 4: Card Sort C — Subject Appears Twice (Advanced)",
                        "",
                        "8. Shuffle Set C cards (rearranging y = (2x+1)/(x−3) for x):",
                        "   Steps include: multiply by (x−3), expand, collect x terms, factorise, divide",
                        "",
                        "9. Key discussion question: 'Why can you not just divide both sides by x here?'",
                        "   Answer: because x appears in two separate terms — must collect first",
                        "",
                        "ACTIVITY 5: Create-A-Sort",
                        "",
                        "10. Using blank cards, create your own formula rearranging card sort:",
                        "    a) Choose a formula from physics, chemistry, or finance",
                        "    b) Write each step on a separate card",
                        "    c) Write a justification card for each step card",
                        "    d) Shuffle and give to a partner to sort",
                        "    e) Compare sequences and discuss any differences",
                        "",
                        "REFLECTION:",
                        "11. Complete the strategy prompt: 'Before rearranging any formula, I should first check...'",
                        "12. Order the techniques from simplest to most complex; justify your ranking",
                        "13. Write one formula for which each technique would be needed"
                    ],
                    cardSets: {
                        setA_linear: {
                            formula: "v = u + at, make u the subject",
                            cards: [
                                { step: "v = u + at", justification: "Original formula" },
                                { step: "v − at = u + at − at", justification: "Subtract at from both sides" },
                                { step: "v − at = u", justification: "Simplify right side (at − at = 0)" },
                                { step: "u = v − at", justification: "Rewrite with subject on left" }
                            ]
                        },
                        setB_roots: {
                            formula: "T = 2π√(l/g), make l the subject",
                            cards: [
                                { step: "T = 2π√(l/g)", justification: "Original formula" },
                                { step: "T/(2π) = √(l/g)", justification: "Divide both sides by 2π" },
                                { step: "[T/(2π)]² = l/g", justification: "Square both sides to remove root" },
                                { step: "T²/(4π²) = l/g", justification: "Simplify left side: [T/2π]² = T²/4π²" },
                                { step: "g × T²/(4π²) = l", justification: "Multiply both sides by g" },
                                { step: "l = gT²/(4π²)", justification: "Rewrite with subject on left" }
                            ]
                        },
                        setC_subjectTwice: {
                            formula: "y = (2x+1)/(x−3), make x the subject",
                            cards: [
                                { step: "y = (2x+1)/(x−3)", justification: "Original formula" },
                                { step: "y(x−3) = 2x+1", justification: "Multiply both sides by (x−3)" },
                                { step: "yx − 3y = 2x + 1", justification: "Expand left side" },
                                { step: "yx − 2x = 1 + 3y", justification: "Collect x terms on left, constants on right" },
                                { step: "x(y − 2) = 1 + 3y", justification: "Factorise x from left side" },
                                { step: "x = (1 + 3y)/(y − 2)", justification: "Divide both sides by (y − 2)" }
                            ]
                        }
                    },
                    dataTable: [
                        ["Formula", "Technique Required", "Number of Steps", "Hardest Step", "Common Error"],
                        ["v = u + at for u", "Linear subtraction", "3", "Remembering to subtract at not just a", "Subtracting only a, forgetting t"],
                        ["T = 2π√(l/g) for l", "Inverse root + linear", "5", "Squaring the entire side including 2π", "Squaring before dividing by 2π"],
                        ["y = (2x+1)/(x−3) for x", "Subject twice", "5", "Recognising x appears twice after expanding", "Trying to divide by x before collecting"]
                    ],
                    conclusions: [
                        "Correctly sequencing steps requires understanding WHY each step is taken, not just knowing WHAT to do",
                        "The order of inverse operations in rearranging mirrors reverse BODMAS: undo addition/subtraction last (since they were applied first in the original formula)",
                        "When the subject appears twice, collecting and factorising is not optional — it is the only valid path to isolation",
                        "Matching steps to justifications reveals the logical structure of formula rearranging and develops metacognitive awareness",
                        "Creating card sorts for unfamiliar formulas is the deepest test of understanding — if you can write the steps, you truly understand the process"
                    ],
                    extensions: [
                        "Create a card sort for rearranging a formula involving logarithms or trigonometric functions",
                        "Design a 'fault card sort' where one step is wrong; challenge a partner to find and fix the error",
                        "Arrange a collection of formulas in order from easiest to hardest to rearrange, justify the ordering",
                        "Write a general algorithm for formula rearranging as a numbered step-by-step procedure, tested against 10 different formulas"
                    ],
                    realWorldConnections: [
                        "Software engineering: algorithm design follows the same logical sequencing as formula rearranging card sorts",
                        "Legal reasoning: building an argument in sequence, where each step depends on the previous, mirrors the card sort structure",
                        "Medical diagnosis: clinical decision trees are structured exactly like formula rearranging decision flowcharts",
                        "Management: project management flowcharts use the same step-justification structure as formula rearranging"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 5: FINANCIAL FORMULAS INVESTIGATION
            // ========================================

            financial_formulas_investigation: {
                name: "Financial Formulas Investigation: Rearranging Money Mathematics",
                relatedTopics: ['linear_rearranging', 'rearranging_with_fractions', 'rearranging_with_roots_powers', 'subject_appears_twice'],
                category: 'financial_mathematics',
                historicalBackground: {
                    mathematician: "Luca Pacioli (1447–1517) first systematised financial arithmetic in Summa de arithmetica (1494), including early interest formulas",
                    development: "Compound interest formula was described by Richard Witt in Arithmeticall Questions (1613); the formula A = P(1 + r)ⁿ became central to banking and insurance mathematics",
                    significance: "Financial formulas are among the most practically important applications of formula rearranging — millions of financial decisions daily depend on rearranging these formulas correctly",
                    modernRelevance: "Mortgage calculators, investment tools, and banking systems are all built on rearranged versions of the compound interest and annuity formulas",
                    mathematicalFoundation: "Financial mathematics combines formula rearranging with logarithms (to solve for time n) and algebraic manipulation of compound expressions"
                },
                practicalMathematics: {
                    title: "Rearranging Financial Formulas to Make Sound Money Decisions",
                    hypothesis: "If financial formulas are correctly rearranged for different subjects, they can answer any practical financial question — from finding interest rates to calculating loan terms",
                    purpose: "Apply formula rearranging to key financial formulas to answer realistic financial questions about savings, loans, and investments",
                    background: {
                        simpleInterest: "I = PRT: Interest I = Principal P × Rate R × Time T",
                        compoundInterest: "A = P(1 + r)ⁿ: Final amount A = Principal P × (1 + rate r) to the power of years n",
                        annuity: "M = P[r(1+r)ⁿ]/[(1+r)ⁿ − 1]: Monthly payment M for mortgage with principal P, monthly rate r, over n months",
                        percentageChange: "Change% = (New − Original)/Original × 100; rearranged: New = Original × (1 + Change%/100)"
                    },
                    procedure: [
                        "INVESTIGATION 1: Simple Interest — I = PRT",
                        "",
                        "1. Rearrange I = PRT for:",
                        "   a) P (principal): P = I/(RT)",
                        "   b) R (rate): R = I/(PT)",
                        "   c) T (time): T = I/(PR)",
                        "",
                        "2. Application: A savings account earns £180 interest over 3 years at 4% per annum",
                        "   a) What was the principal?",
                        "      P = I/(RT) = 180/(0.04 × 3) = 180/0.12 = £1500",
                        "   b) If the rate changed to 6%, how long to earn the same interest on the same principal?",
                        "      T = I/(PR) = 180/(1500 × 0.06) = 180/90 = 2 years",
                        "",
                        "INVESTIGATION 2: Compound Interest — A = P(1 + r)ⁿ",
                        "",
                        "3. Rearrange A = P(1 + r)ⁿ for:",
                        "   a) P (principal): P = A/(1 + r)ⁿ",
                        "   b) r (annual rate): (1 + r) = (A/P)^(1/n) → r = (A/P)^(1/n) − 1",
                        "   c) n (number of years): n = log(A/P)/log(1 + r) [requires logarithms]",
                        "",
                        "4. Application: An investment of £2000 grows to £2594.24 after 5 years compound interest",
                        "   a) Find the annual interest rate:",
                        "      1 + r = (2594.24/2000)^(1/5) = (1.29712)^0.2 ≈ 1.05",
                        "      r = 0.05 = 5% per annum",
                        "   b) How long to double the investment at 5%?",
                        "      n = log(2)/log(1.05) = 0.30103/0.02119 ≈ 14.2 years",
                        "      (Rule of 72: n ≈ 72/5 = 14.4 years — close approximation!)",
                        "",
                        "INVESTIGATION 3: Percentage Change and Reverse Percentage",
                        "",
                        "5. Formula: New = Original × M (where M is the multiplier)",
                        "   After 20% increase: M = 1.20; After 15% decrease: M = 0.85",
                        "",
                        "6. Rearrange for Original: Original = New/M",
                        "",
                        "7. Application: After a 20% price increase, a jacket costs £84",
                        "   Original price = 84/1.20 = £70",
                        "   Verify: 70 × 1.20 = £84 ✓",
                        "",
                        "8. Application: A house value fell 15% to £340,000",
                        "   Original value = 340000/0.85 = £400,000",
                        "   Verify: 400000 × 0.85 = £340,000 ✓",
                        "",
                        "INVESTIGATION 4: Mortgage Payment Formula (Advanced)",
                        "",
                        "9. Monthly payment: M = P[r(1+r)ⁿ]/[(1+r)ⁿ − 1]",
                        "   where P = principal, r = monthly rate (annual rate/12), n = total months",
                        "",
                        "10. Application: Mortgage of £200,000, 25 years, 5% annual rate",
                        "    r = 0.05/12 ≈ 0.004167; n = 300 months",
                        "    M = 200000 × [0.004167 × (1.004167)^300]/[(1.004167)^300 − 1]",
                        "    (1.004167)^300 ≈ 3.481; M ≈ 200000 × 0.01452/2.481 ≈ £1170/month",
                        "",
                        "11. Discussion: How much total interest is paid over 25 years?",
                        "    Total paid = 1170 × 300 = £351,000; Interest = £351,000 − £200,000 = £151,000",
                        "    'The bank earns 75.5% of the original loan amount in interest alone'"
                    ],
                    dataTable: [
                        ["Formula", "Rearranged For", "Rearranged Formula", "Application Values", "Answer", "Financial Interpretation"],
                        ["I = PRT", "P", "P = I/(RT)", "I=180, R=0.04, T=3", "P = £1500", "You invested £1500 originally"],
                        ["A = P(1+r)ⁿ", "r", "r = (A/P)^(1/n) − 1", "A=2594.24, P=2000, n=5", "r = 5%", "The annual growth rate was 5%"],
                        ["A = P(1+r)ⁿ", "n", "n = log(A/P)/log(1+r)", "A=4000, P=2000, r=0.05", "n ≈ 14.2 years", "Investment doubles in ~14 years at 5%"],
                        ["New = M × Original", "Original", "Original = New/M", "New=84, M=1.20", "Original = £70", "Price was £70 before 20% rise"],
                        ["New = M × Original", "Original", "Original = New/M", "New=340000, M=0.85", "Original = £400,000", "House was £400k before 15% fall"]
                    ],
                    conclusions: [
                        "Financial formulas are powerful precisely because they can be rearranged to answer any of several different questions about the same financial situation",
                        "The compound interest formula requires logarithms to solve for time n — demonstrating that advanced formula rearranging extends beyond elementary operations",
                        "The Rule of 72 (years to double ≈ 72/rate%) is itself derived by rearranging A = P(1+r)ⁿ with A = 2P and approximating ln(1+r) ≈ r for small r",
                        "Reverse percentage calculations are a specific application of formula rearranging: dividing by the multiplier is the inverse of multiplying by it",
                        "Every financial decision — whether a mortgage, savings plan, or price comparison — involves rearranging the same small set of formulas; financial literacy depends directly on formula rearranging fluency"
                    ],
                    extensions: [
                        "Derive the Rule of 72 algebraically from A = P(1+r)ⁿ using the natural logarithm approximation",
                        "Research and rearrange the Black-Scholes option pricing formula for different variables",
                        "Use the mortgage formula to compare two mortgage deals and determine which costs less over the full term",
                        "Investigate how inflation affects real returns: rearrange the Fisher equation (1 + nominal) = (1 + real)(1 + inflation) for the real interest rate"
                    ],
                    realWorldConnections: [
                        "Banking: every mortgage, loan, and savings product uses rearranged versions of compound interest formulas",
                        "Investment: pension fund growth projections require rearranging A = P(1+r)ⁿ for n to determine retirement dates",
                        "Retail: pricing with profit margins and VAT requires reverse percentage rearrangements",
                        "Government: national debt management requires the full suite of financial formula rearranging skills",
                        "Insurance: actuarial calculations use time-value-of-money formulas rearranged for probability parameters"
                    ],
                    pedagogicalNotes: {
                        benefits: "Financial contexts provide immediate real-world motivation; students can see exactly why formula rearranging matters in their own financial futures",
                        challenges: "Percentage rates as decimals can confuse students (5% = 0.05); the compound interest formula structure requires careful exponent handling",
                        assessment: "Present a financial scenario and ask students to identify which formula is needed, rearrange for the required subject, and interpret the answer in financial terms",
                        differentiation: "Support: focus on simple interest I = PRT only. Extension: derive the mortgage payment formula from first principles using geometric series",
                        sequencing: "Begin with simple interest (linear), progress to percentage change (linear multiplier), then compound interest (requiring roots and logarithms)"
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
            linear_rearranging: {
                'Inverse Operations': [
                    'Applying the same operation (not the inverse) to both sides — e.g., adding when you should subtract',
                    'Performing the operation to only one side of the equation',
                    'Undoing operations in the wrong order (BODMAS order rather than reverse BODMAS)',
                    'Confusing the operation with its inverse: multiplying to undo multiplication instead of dividing'
                ],
                'Sign Errors': [
                    'Forgetting that subtracting a negative is equivalent to adding: x − (−3) = x + 3',
                    'Moving a term to the other side without changing its sign (a sign change IS the inverse operation)',
                    'Distributing a negative sign incorrectly when rearranging: −(a + b) = −a − b not −a + b'
                ],
                'Structural Errors': [
                    'Treating the subject as isolated when it still has a coefficient (e.g., 2x = y → x = y rather than x = y/2)',
                    'Stopping rearrangement prematurely before the subject is fully isolated',
                    'Misidentifying which variable is the current subject and which is the new desired subject'
                ]
            },

            rearranging_with_fractions: {
                'Denominator Errors': [
                    'Multiplying only the numerator by the denominator, not the entire other side',
                    'Forgetting to multiply every term on both sides when clearing an LCD',
                    'When subject is in denominator, multiplying instead of using the reciprocal approach'
                ],
                'Cross-Multiplication Misuse': [
                    'Applying cross-multiplication to formulas that are NOT of the form a/b = c/d',
                    'Cross-multiplying as a/b = c/d → ac = bd instead of ad = bc',
                    'Using cross-multiplication when the formula has additional terms outside the fractions'
                ],
                'LCD Errors': [
                    'Computing LCD incorrectly when denominators share common factors',
                    'Only clearing one fraction when multiple fractions are present',
                    'Forgetting that whole number terms are also multiplied by the LCD'
                ]
            },

            rearranging_with_roots_powers: {
                'Root and Power Inverse': [
                    'Squaring rather than square-rooting to undo a square (confusing operation with inverse)',
                    'Forgetting to include ± when taking square root of both sides to find a variable that could be positive or negative',
                    'Taking the square root of each individual term separately rather than the whole expression: √(a² + b²) ≠ a + b'
                ],
                'Order of Operations': [
                    'Squaring both sides before clearing other operations first — must isolate the root/power term first',
                    'Applying root to only one side of the equation',
                    'Forgetting that squaring a fraction requires squaring both numerator AND denominator'
                ],
                'Simplification Errors': [
                    'Incorrectly simplifying square roots: √(4x²) = 4x (wrong); correct: 2|x| or 2x for positive x',
                    'Confusing x² = a → x = a/2 (wrong) with x² = a → x = ±√a (correct)',
                    'Not simplifying cube roots involving negative numbers: ∛(−8) = −2, not undefined'
                ]
            },

            subject_appears_twice: {
                'Recognition Errors': [
                    'Failing to recognise that expanding brackets will introduce the subject into a second term',
                    'Not noticing that the subject appears in both numerator and denominator of a fractional formula',
                    'Treating x(y − 1) = z as x = z and y − 1 = 1 separately (invalid decomposition)'
                ],
                'Collection Errors': [
                    'Moving terms to the wrong side during collection (sign errors)',
                    'Collecting non-subject terms with subject terms',
                    'Attempting to divide by the subject (creating a new fraction) rather than factorising first'
                ],
                'Factorisation Errors': [
                    'Forgetting to factorise after collecting — writing x − x = z instead of 0 = z',
                    'Incorrect factorisation: ax + bx = x(a + b) written as x(a) + x(b) — which is expanding, not factorising',
                    'Dividing by an expression containing the subject: invalid circular step'
                ]
            },

            combined_operations_rearranging: {
                'Sequencing Errors': [
                    'Not planning the sequence of steps before beginning — rushing into operations without strategy',
                    'Expanding brackets prematurely, making the formula more complex before it is simpler',
                    'Applying a later-stage technique before completing an earlier essential step'
                ],
                'Multi-Step Errors': [
                    'Applying an inverse operation to only part of the expression rather than the whole side',
                    'Losing track of which operations have been applied and which remain',
                    'Incorrect simplification of fractions created during intermediate rearranging steps'
                ]
            },

            inverse_functions_rearranging: {
                'Logarithm Errors': [
                    'Applying ln to each term separately: ln(a + b) ≠ ln(a) + ln(b)',
                    'Confusing log base 10 and natural log: ln(10) ≠ 1 (only log₁₀(10) = 1)',
                    'Writing e^(ln x) = ln(e^x) without simplifying: both equal x, but by different identities'
                ],
                'Inverse Trig Errors': [
                    'Forgetting the domain restriction of arcsin, arccos, arctan — not all inputs are valid',
                    'Writing sin⁻¹(x) as 1/sin(x) — these are different: sin⁻¹ is the inverse function, 1/sin is the reciprocal (cosecant)',
                    'Applying arcsin to values outside [−1, 1] without recognising the undefined result'
                ]
            },

            complete_rearranging_strategy: {
                'Strategy Selection': [
                    'Attempting linear rearranging before checking whether the subject appears twice',
                    'Clearing fractions before identifying whether the subject is in the denominator',
                    'Not applying the complete strategy flowchart — attempting ad-hoc steps without a plan'
                ],
                'Verification Failures': [
                    'Skipping verification by substitution — the most common source of undetected errors',
                    'Verifying with x = 0 or x = 1 which may give deceptive agreements even for incorrect formulas',
                    'Checking only numerically without checking units/dimensions'
                ]
            }
        };

        this.clarificationStrategies = {
            balance_model: {
                method: 'Return to the physical balance: every operation must be applied to both pans equally',
                effectiveness: 'Very high for linear rearranging, sign errors, and operation-to-one-side errors'
            },
            reverse_bodmas: {
                method: 'Explicitly write BODMAS order of operations then reverse it to determine rearranging sequence',
                effectiveness: 'High for order-of-operations and sequencing errors'
            },
            verification_substitution: {
                method: 'Always substitute a specific numerical value into both original and rearranged formulas; confirm agreement',
                effectiveness: 'Essential — catches all application errors including sign errors that dimensional analysis misses'
            },
            dimensional_analysis: {
                method: 'Check units of the rearranged formula match the expected units of the new subject',
                effectiveness: 'High for structural errors; cannot detect sign errors or missing constants'
            },
            collect_factorise_reminder: {
                method: 'Use the mnemonic CEFT: Clear fractions → Expand → Factor subject → Take inverse',
                effectiveness: 'High for subject-appears-twice and combined operations errors'
            },
            formula_flowchart: {
                method: 'Use the complete rearranging strategy flowchart before every rearrangement',
                effectiveness: 'Very high for strategy selection and sequencing errors; builds systematic habits'
            },
            worked_example_comparison: {
                method: 'Compare student\'s rearrangement step-by-step against a fully annotated worked example',
                effectiveness: 'High for identifying the exact step where an error occurred'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about rearranging {topic} formulas?",
                "Can you give an example of a formula you already know how to rearrange?",
                "How does rearranging {topic} connect to solving equations that you already know?",
                "What do you predict will be the trickiest part of rearranging {topic} formulas?"
            ],
            duringLearning: [
                "Does this rearrangement make sense? Can you verify it by substituting a test value?",
                "How does this connect to {related_concept} that you studied previously?",
                "What tells you which rearranging technique to use here — is it linear, fractional, involves roots, or is the subject twice?",
                "Can you spot the structure of this formula: how many terms involve the subject?",
                "What would the balance scale look like at this step?"
            ],
            afterLearning: [
                "What are the main techniques for rearranging {topic} formulas and when does each apply?",
                "What tells you that the subject appears more than once, and what must you do about it?",
                "What mistakes are you most likely to make when rearranging {topic} formulas?",
                "How would you explain the {topic} rearranging method to a student who missed the lesson?",
                "What is the most important check you should always perform after completing a rearrangement?"
            ],
            problemSolving: [
                "What is the question asking? Which variable should be the new subject?",
                "Does the subject appear once or more than once in this formula?",
                "Are there fractions present? Should I clear them first?",
                "Is the subject under a root or inside a power? What inverse operation undoes this?",
                "Have I verified by substitution? Do the original and rearranged formulas give the same answer for a test value?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            linear_rearranging: [
                {
                    scenario: "Mobile Phone Data Plan",
                    context: "A mobile provider uses the formula C = 15 + 0.05d to calculate monthly bill C (£) based on data used d (MB). A customer wants to know how much data they can use within a budget.",
                    problem: "Rearrange C = 15 + 0.05d to make d the subject.",
                    application: "C − 15 = 0.05d → d = (C − 15)/0.05 = 20(C − 15)",
                    question: "If a customer's budget is £25, how many MB of data can they use?",
                    answer: "d = 20(25 − 15) = 20 × 10 = 200 MB",
                    extension: "The rearranged formula d = 20(C − 15) reveals that each additional £1 of budget buys 20 MB of data — a linear relationship visible only after rearranging."
                },
                {
                    scenario: "Cooking Temperature Conversion",
                    context: "A chef uses C = 5(F − 32)/9 to convert oven temperatures. She needs a formula to quickly convert her Celsius recipes into Fahrenheit for an American cookbook.",
                    problem: "Rearrange C = 5(F − 32)/9 to make F the subject.",
                    application: "9C/5 = F − 32 → F = 9C/5 + 32",
                    question: "A recipe calls for 180°C. What temperature should the chef set her Fahrenheit oven?",
                    answer: "F = 9(180)/5 + 32 = 324 + 32 = 356°F",
                    extension: "The rearranged formula F = 9C/5 + 32 is the standard Celsius-to-Fahrenheit formula — derived purely by algebraic rearrangement of the Fahrenheit-to-Celsius formula."
                },
                {
                    scenario: "Perimeter of a Football Pitch",
                    context: "A groundskeeper knows the perimeter P and length l of a football pitch and needs to find the width w to mark the touchlines correctly.",
                    problem: "Rearrange P = 2l + 2w to make w the subject.",
                    application: "P − 2l = 2w → w = (P − 2l)/2",
                    question: "If P = 340 m and l = 105 m, what is the width?",
                    answer: "w = (340 − 210)/2 = 130/2 = 65 m",
                    extension: "The rearranged formula reveals the width depends linearly on both perimeter and length — the structural relationship between all three variables is transparent."
                },
                {
                    scenario: "Speed Camera Fine Calculation",
                    context: "A speed fine is calculated as F = 40 + 6(s − 30) pounds, where s is the recorded speed in mph (above the 30 mph limit). A solicitor needs to find the recorded speed from the fine amount.",
                    problem: "Rearrange F = 40 + 6(s − 30) to make s the subject.",
                    application: "F − 40 = 6(s − 30) → (F − 40)/6 = s − 30 → s = (F − 40)/6 + 30",
                    question: "If the fine is £100, what speed was the driver recorded at?",
                    answer: "s = (100 − 40)/6 + 30 = 60/6 + 30 = 10 + 30 = 40 mph",
                    extension: "The rearranged formula reveals the driver was 10 mph over the limit. The structure of the original formula (base fine plus per-mph penalty) becomes explicit through rearranging."
                }
            ],

            rearranging_with_fractions: [
                {
                    scenario: "Camera Lens Focus",
                    context: "A photographer uses the thin lens formula 1/f = 1/u + 1/v, where f is the focal length, u is the object distance, and v is the image distance. She needs to find where to position the film plane given an object distance and focal length.",
                    problem: "Rearrange 1/f = 1/u + 1/v to make v the subject.",
                    application: "1/v = 1/f − 1/u = (u − f)/(fu) → v = fu/(u − f)",
                    question: "For a lens with f = 50 mm and object at u = 200 mm, where should the film be positioned?",
                    answer: "v = 50 × 200/(200 − 50) = 10000/150 = 66.7 mm from the lens",
                    extension: "The rearranged formula reveals the image distance is always greater than the focal length for real objects — a physical constraint made algebraically visible."
                },
                {
                    scenario: "Parallel Resistance Circuit",
                    context: "An electrician uses 1/R = 1/R₁ + 1/R₂ for parallel resistors. She knows the combined resistance R and one component R₁, and needs to find R₂.",
                    problem: "Rearrange 1/R = 1/R₁ + 1/R₂ to make R₂ the subject.",
                    application: "1/R₂ = 1/R − 1/R₁ = (R₁ − R)/(RR₁) → R₂ = RR₁/(R₁ − R)",
                    question: "If R = 4Ω and R₁ = 12Ω, what is R₂?",
                    answer: "R₂ = 4 × 12/(12 − 4) = 48/8 = 6Ω",
                    extension: "The constraint R < R₁ (combined resistance is less than either component in parallel) is algebraically enforced: if R > R₁, the denominator R₁ − R becomes negative, giving a negative resistance — physically impossible."
                },
                {
                    scenario: "Drug Concentration Formula",
                    context: "A nurse uses C = D/V (concentration = dose / volume) to prepare intravenous medication. She needs to find the volume of solution to prepare a required dose at a specified concentration.",
                    problem: "Rearrange C = D/V to make V the subject.",
                    application: "V = D/C",
                    question: "A patient needs a dose D = 250 mg at concentration C = 5 mg/mL. What volume of solution is needed?",
                    answer: "V = 250/5 = 50 mL",
                    extension: "The rearranged formula V = D/C is directly used in clinical practice. A rearranging error here has direct patient safety implications — accuracy is non-negotiable."
                },
                {
                    scenario: "Average Speed Over Two Legs",
                    context: "A cyclist completes two legs of a journey: d km at speed u km/h and d km at speed v km/h. The average speed for the whole journey is s = 2uv/(u + v).",
                    problem: "Rearrange s = 2uv/(u + v) to make u the subject.",
                    application: "s(u + v) = 2uv → su + sv = 2uv → su − 2uv = −sv → u(s − 2v) = −sv → u = −sv/(s − 2v) = sv/(2v − s)",
                    question: "If average speed s = 12 km/h and return speed v = 20 km/h, what was the outward speed u?",
                    answer: "u = 12 × 20/(2 × 20 − 12) = 240/28 = 8.57 km/h",
                    extension: "The harmonic mean structure of s = 2uv/(u+v) means average speed is always less than the arithmetic mean (u+v)/2 — rearranging reveals why: solving for u from any s shows u is constrained to be less than 2s."
                }
            ],

            rearranging_with_roots_powers: [
                {
                    scenario: "Pendulum Clock Design",
                    context: "A clockmaker uses T = 2π√(l/g) to design a grandfather clock with a specific period. She needs to calculate the required pendulum length for the clock to tick once per second.",
                    problem: "Rearrange T = 2π√(l/g) to make l the subject.",
                    application: "l = gT²/(4π²)",
                    question: "For a 1-second period (T = 2 s for one complete oscillation), with g = 9.81 m/s², what pendulum length is needed?",
                    answer: "l = 9.81 × 4/(4π²) = 39.24/39.48 ≈ 0.994 m ≈ 1 metre",
                    extension: "This result — that a 1-second-tick pendulum is almost exactly 1 metre long — was historically used to define the metre before the International Bureau of Weights and Measures adopted a standard."
                },
                {
                    scenario: "Stopping Distance Calculation",
                    context: "A road safety engineer uses v² = u² + 2as (with a negative, representing deceleration) to calculate the minimum stopping distance s for a vehicle braking from speed u to rest (v = 0).",
                    problem: "Rearrange v² = u² + 2as for s (with v = 0 for stopping).",
                    application: "0 = u² + 2as → −u² = 2as → s = −u²/(2a). Since deceleration a is negative, s = u²/(2|a|)",
                    question: "A car brakes at −6 m/s² from 20 m/s. What is the stopping distance?",
                    answer: "s = 400/(2 × 6) = 400/12 = 33.3 m",
                    extension: "Since s = u²/(2|a|), stopping distance scales with the SQUARE of speed — doubling speed quadruples stopping distance. This is why speed limits have such large safety benefits."
                },
                {
                    scenario: "Sphere Tank Volume",
                    context: "A chemical engineer needs to know the radius of a spherical storage tank given its required volume. He uses V = (4/3)πr³.",
                    problem: "Rearrange V = (4/3)πr³ to make r the subject.",
                    application: "3V/(4π) = r³ → r = ∛(3V/(4π))",
                    question: "A tank must hold V = 10 m³ of liquid. What radius is required?",
                    answer: "r = ∛(30/(4π)) = ∛(2.387) ≈ 1.335 m",
                    extension: "Volume scales with r³, so doubling the radius gives 8 times the volume. Rearranging for r reveals how insensitive radius is to volume changes — a 10% increase in r gives a 33% increase in volume."
                },
                {
                    scenario: "Kinetic Energy and Speed",
                    context: "A sports scientist calculates the speed a tennis ball must reach to have a specific kinetic energy: KE = ½mv².",
                    problem: "Rearrange KE = ½mv² to make v the subject.",
                    application: "2KE = mv² → v² = 2KE/m → v = √(2KE/m) (positive root — speed is positive)",
                    question: "A tennis ball of mass 57 g must have KE = 150 J. What minimum speed is required?",
                    answer: "v = √(2 × 150/0.057) = √(5263) ≈ 72.5 m/s ≈ 261 km/h",
                    extension: "Professional tennis serves exceed 70 m/s. The rearranged formula shows why slight speed increases have disproportionate energy effects: KE scales with v²."
                }
            ],

            subject_appears_twice: [
                {
                    scenario: "Mirror Equation in Optics",
                    context: "An optician uses 1/f = 1/u + 1/v (mirror equation) and needs to find u (object distance) when f and v are known. Subject u appears twice after rearranging.",
                    problem: "Rearrange 1/f = 1/u + 1/v for u.",
                    application: "1/u = 1/f − 1/v = (v − f)/(fv) → u = fv/(v − f)",
                    question: "For a concave mirror with f = 10 cm and image at v = 30 cm, where is the object?",
                    answer: "u = 10 × 30/(30 − 10) = 300/20 = 15 cm from the mirror",
                    extension: "The formula u = fv/(v−f) is symmetric: swap u and v, and the formula is the same. This reflects the reversibility of light paths in optics — a deep physical principle revealed by the algebra."
                },
                {
                    scenario: "Currency Exchange Rate Comparison",
                    context: "A currency trader models the effective exchange rate E as a function of the buy and sell rates: E = (b − s)/(b + s), where b is the buy rate and s is the sell rate. He needs to find b given E and s.",
                    problem: "Rearrange E = (b − s)/(b + s) for b.",
                    application: "E(b + s) = b − s → Eb + Es = b − s → Eb − b = −s − Es → b(E − 1) = −s(1 + E) → b = −s(1 + E)/(E − 1) = s(1 + E)/(1 − E)",
                    question: "If the spread factor E = 0.02 and sell rate s = 1.20, what is the buy rate b?",
                    answer: "b = 1.20 × 1.02/0.98 ≈ 1.249 — the buy rate is about 1.249",
                    extension: "The rearranged formula reveals that as E approaches 1 (denominator → 0), the buy rate becomes infinite — the trader is giving away money. E < 0 means sell rate exceeds buy rate — also economically meaningless."
                },
                {
                    scenario: "Engineering: Terminal Velocity",
                    context: "A drag-force model gives terminal velocity v as a function of drag coefficient: F = kv/(1 + kv/mg). An engineer needs to find k given the terminal velocity.",
                    problem: "Rearrange F = kv/(1 + kv/mg) for k.",
                    application: "F(1 + kv/mg) = kv → F + Fkv/mg = kv → Fkv/mg − kv = −F → k(Fv/mg − v) = −F → k = −F/(v(F/mg − 1)) = Fmg/(v(mg − F))",
                    question: "If F = 50 N, m = 10 kg, g = 9.81, v = 5 m/s, find k.",
                    answer: "k = 50 × 10 × 9.81/(5 × (98.1 − 50)) = 4905/240.5 ≈ 20.4 N·s/m",
                    extension: "The denominator (mg − F) confirms physical validity: terminal velocity exists only when drag force F < gravitational force mg. When F = mg, the formula gives k → ∞ — no finite drag coefficient sustains that balance."
                },
                {
                    scenario: "Relative Speed Formula",
                    context: "In special relativity, the relative velocity of two objects is v = (u + w)/(1 + uw/c²), where u and w are individual velocities and c is the speed of light. A physicist needs to find w given u, v, and c.",
                    problem: "Rearrange v = (u + w)/(1 + uw/c²) for w.",
                    application: "v(1 + uw/c²) = u + w → v + vuw/c² = u + w → vuw/c² − w = u − v → w(vu/c² − 1) = u − v → w = (u − v)/(vu/c² − 1) = c²(u − v)/(vu − c²)",
                    question: "If u = 0.6c and v = 0.9c (as measured from Earth), what is w?",
                    answer: "w = c²(0.6c − 0.9c)/(0.6c × 0.9c − c²) = c²(−0.3c)/(0.54c² − c²) = −0.3c³/(−0.46c²) ≈ 0.652c",
                    extension: "The minus sign arises because w is directed opposite to u. The formula shows that even combining relativistic speeds never exceeds c — the algebraic structure enforces the speed of light limit."
                }
            ],

            combined_operations_rearranging: [
                {
                    scenario: "Spring Mass System",
                    context: "A mechanical engineer designs a spring-mass vibration damper. The natural frequency uses ω = √(k/m) and the period T = 2π/ω. She needs to find the spring constant k from an observed period.",
                    problem: "Combine T = 2π/ω and ω = √(k/m) to get T in terms of k and m, then rearrange for k.",
                    application: "T = 2π/√(k/m) = 2π√(m/k). Rearrange: T² = 4π²m/k → k = 4π²m/T²",
                    question: "If m = 0.5 kg and T = 0.628 s, find k.",
                    answer: "k = 4π² × 0.5/(0.628²) = 19.74/0.394 ≈ 50 N/m",
                    extension: "This is exactly equivalent to the pendulum formula with m replacing l and k replacing g — the mathematical structure of oscillatory systems is universal."
                },
                {
                    scenario: "Compound Interest — Time to Double",
                    context: "An investor wants to know how many years n it takes for savings to double at interest rate r. Using A = P(1 + r)ⁿ with A = 2P.",
                    problem: "Rearrange A = P(1 + r)ⁿ with A = 2P for n.",
                    application: "2P = P(1+r)ⁿ → 2 = (1+r)ⁿ → ln2 = n·ln(1+r) → n = ln2/ln(1+r)",
                    question: "At r = 7% annual growth, how many years to double?",
                    answer: "n = ln2/ln(1.07) = 0.6931/0.0677 ≈ 10.2 years",
                    extension: "The Rule of 72: n ≈ 72/r%. Here: 72/7 ≈ 10.3 — almost identical to the exact answer. The rule is derived by approximating ln(1+r) ≈ r for small r."
                },
                {
                    scenario: "Satellite Orbital Speed",
                    context: "A satellite at height h above Earth's surface orbits at speed v = √(GM/(R+h)), where G = gravitational constant, M = Earth's mass, R = Earth's radius. A mission planner needs to find h for a required orbital speed.",
                    problem: "Rearrange v = √(GM/(R+h)) for h.",
                    application: "v² = GM/(R+h) → R+h = GM/v² → h = GM/v² − R",
                    question: "If GM = 3.986 × 10¹⁴ m³/s², R = 6.371 × 10⁶ m, and v = 7784 m/s (ISS speed), find h.",
                    answer: "h = 3.986×10¹⁴/(7784²) − 6.371×10⁶ = 6.582×10⁶ − 6.371×10⁶ ≈ 4.1×10⁵ m ≈ 410 km",
                    extension: "The ISS orbits at approximately 408 km — the rearranged formula gives an accurate result. The formula also reveals why faster satellites orbit lower: higher v means smaller GM/v² and therefore smaller h."
                },
                {
                    scenario: "Decibel Scale (Sound Intensity)",
                    context: "Sound intensity in decibels is dB = 10·log₁₀(I/I₀), where I₀ = 10⁻¹² W/m² (threshold of hearing). An acoustic engineer needs to find the intensity from a decibel reading.",
                    problem: "Rearrange dB = 10·log₁₀(I/I₀) for I.",
                    application: "dB/10 = log₁₀(I/I₀) → I/I₀ = 10^(dB/10) → I = I₀ × 10^(dB/10)",
                    question: "A jackhammer registers 100 dB. What is the intensity in W/m²?",
                    answer: "I = 10⁻¹² × 10^(100/10) = 10⁻¹² × 10¹⁰ = 10⁻² = 0.01 W/m²",
                    extension: "The logarithmic scale means 100 dB is 10¹⁰ times the hearing threshold. An increase of 10 dB multiplies intensity by 10 — but only doubles perceived loudness. The rearranged formula makes this non-linear relationship explicit."
                }
            ],

            complete_rearranging_strategy: [
                {
                    scenario: "GPS Location Calculation",
                    context: "A GPS receiver uses the formula d = c·√((x₁−x₂)² + (y₁−y₂)²)/f, where d is distance, c is the speed of light, f is signal frequency, and (x₁,y₁), (x₂,y₂) are coordinates. An engineer needs to rearrange for x₂.",
                    problem: "Rearrange d = c·√((x₁−x₂)² + (y₁−y₂)²)/f for x₂ (assuming y values known).",
                    application: "df/c = √((x₁−x₂)² + (y₁−y₂)²) → d²f²/c² = (x₁−x₂)² + (y₁−y₂)² → (x₁−x₂)² = d²f²/c² − (y₁−y₂)² → x₂ = x₁ ± √(d²f²/c² − (y₁−y₂)²)",
                    question: "What does the ± indicate physically, and how does a GPS receiver resolve this ambiguity?",
                    answer: "The ± means x₂ has two possible locations (one on each side of x₁). GPS resolves this using a second satellite signal — two equations for two unknowns eliminates the ambiguity.",
                    extension: "The complete multi-step rearrangement reveals the geometric structure: the GPS calculation is equivalent to finding the intersection of circles (distance equations), and ± reflects the two intersection points."
                },
                {
                    scenario: "Radioactive Half-Life Calculation",
                    context: "A nuclear physicist models decay as A = A₀·e^(−λt), where λ = decay constant and t₁/₂ = ln2/λ is the half-life. She needs to find λ from a series of activity measurements.",
                    problem: "Rearrange A = A₀·e^(−λt) for λ.",
                    application: "A/A₀ = e^(−λt) → ln(A/A₀) = −λt → λ = −ln(A/A₀)/t = ln(A₀/A)/t",
                    question: "If A₀ = 800 Bq drops to A = 100 Bq after t = 24 hours, find λ and the half-life.",
                    answer: "λ = ln(800/100)/24 = ln8/24 = 2.079/24 ≈ 0.0866 h⁻¹. Half-life = ln2/0.0866 ≈ 8 hours.",
                    extension: "The rearranged formula λ = ln(A₀/A)/t allows a single measurement pair (A₀, A, t) to determine the decay constant — and therefore the entire future decay behaviour — of a radioactive isotope."
                },
                {
                    scenario: "Population Growth Modelling",
                    context: "A biologist models bacterial growth as N = N₀·e^(rt), where N₀ is initial population, r is growth rate, and t is time. He needs to find the time when the population first exceeds a threshold.",
                    problem: "Rearrange N = N₀·e^(rt) for t.",
                    application: "N/N₀ = e^(rt) → ln(N/N₀) = rt → t = ln(N/N₀)/r",
                    question: "If N₀ = 1000, r = 0.2 h⁻¹, when does the population reach N = 50000?",
                    answer: "t = ln(50000/1000)/0.2 = ln50/0.2 = 3.912/0.2 ≈ 19.6 hours",
                    extension: "The doubling time td = ln2/r ≈ 3.47 hours. The population has doubled about 5.65 times in 19.6 hours, consistent with reaching 1000 × 2^5.65 ≈ 50000. The rearranged formula and the doubling time formula are the same structure."
                },
                {
                    scenario: "Aerodynamic Lift Coefficient",
                    context: "An aerospace engineer calculates lift force L = ½ρv²ACL, where ρ = air density, v = airspeed, A = wing area, CL = lift coefficient. She needs to find the minimum speed for a given lift (takeoff speed).",
                    problem: "Rearrange L = ½ρv²ACL for v.",
                    application: "2L = ρv²ACL → v² = 2L/(ρACL) → v = √(2L/(ρACL))",
                    question: "For L = 500,000 N (aircraft weight), ρ = 1.225 kg/m³, A = 150 m², CL = 2.5, find minimum takeoff speed.",
                    answer: "v = √(2 × 500000/(1.225 × 150 × 2.5)) = √(1000000/459.4) = √2177 ≈ 46.7 m/s ≈ 168 km/h",
                    extension: "The formula shows v ∝ 1/√CL — pilots extend wing flaps at takeoff to increase CL, reducing required airspeed. The rearranged formula is the direct mathematical basis of aircraft takeoff speed calculations."
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall the balance method principle, inverse operation pairs, and rearranging steps",
                    verbs: ["State", "Write", "List", "Recall", "Name", "Identify"],
                    example: "State the inverse operation for each of: addition, multiplication, squaring, taking a square root"
                },
                understand: {
                    description: "Explain why inverse operations preserve equality; connect to the balance model; justify each rearranging step",
                    verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect"],
                    example: "Explain why subtracting the same value from both sides of a formula preserves the equality"
                },
                apply: {
                    description: "Correctly rearrange given formulas for specified subjects using appropriate techniques",
                    verbs: ["Rearrange", "Make the subject", "Solve for", "Express", "Rewrite"],
                    example: "Make r the subject of V = (4/3)πr³"
                },
                analyze: {
                    description: "Identify appropriate rearranging technique; analyse formula structure; determine correct operation sequence",
                    verbs: ["Identify", "Determine", "Classify", "Analyse", "Select", "Classify"],
                    example: "Without rearranging, determine which technique is needed to rearrange y = (2x+1)/(x−3) for x. Justify."
                },
                evaluate: {
                    description: "Assess correctness of rearrangements; evaluate technique efficiency; critique student work; verify using substitution or dimensional analysis",
                    verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Check"],
                    example: "A student rearranges T = 2π√(l/g) for l and gets l = gT/4π². Evaluate this claim and identify the error."
                },
                create: {
                    description: "Construct formulas with specific rearrangement properties; derive formulas from first principles; design problems requiring specific techniques",
                    verbs: ["Construct", "Design", "Derive", "Create", "Formulate", "Build"],
                    example: "Create a formula involving a fraction and a square root where the subject appears in the denominator under the root. Rearrange for the subject."
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Can rearrange simple one-step linear formulas (y = x + a or y = ax)",
                        "Applies single inverse operations correctly when prompted",
                        "Does not consistently verify rearrangements by substitution"
                    ],
                    support: ["Step-by-step worked examples with explicit balance model annotation", "Provide the operation at each step; student writes the result", "Use balance scale diagrams alongside every rearrangement"]
                },
                developing: {
                    characteristics: [
                        "Can rearrange two-step linear formulas and simple fractional formulas",
                        "Applies inverse operations in the correct order in familiar cases",
                        "Begins to verify rearrangements numerically when prompted"
                    ],
                    support: ["Introduce formulas with the subject in the denominator and with square roots", "Practice identifying which technique is needed before starting", "Introduce the subject-appears-twice structure with guided examples"]
                },
                proficient: {
                    characteristics: [
                        "Selects appropriate technique independently from the decision flowchart",
                        "Rearranges multi-step formulas including fractions, roots, and subject-appears-twice",
                        "Consistently verifies rearrangements and identifies errors in given work"
                    ],
                    support: ["Fully combined multi-step formulas from physics, engineering, and finance", "Derivation tasks (derive the quadratic formula, lens formula derivations)", "Error analysis and correction tasks using dimensional analysis"]
                },
                expert: {
                    characteristics: [
                        "Derives rearranging identities and relates them to mathematical structure",
                        "Rearranges formulas involving inverse functions (logarithms, trigonometric, exponential)",
                        "Connects formula rearranging to calculus (implicit differentiation as dynamic rearranging)"
                    ],
                    support: ["Research tasks connecting formula rearranging to abstract algebra (field theory)", "Derivation of physical laws through dimensional analysis and rearranging", "Multi-variable optimisation problems requiring simultaneous formula rearranging"]
                }
            }
        };

        this.assessmentQuestions = {
            linear_rearranging: {
                remember: "Write the inverse operation for each: adding 5, multiplying by k, subtracting m, dividing by n",
                understand: "Explain why performing the same operation on both sides of a formula preserves equality",
                apply: "Make t the subject of v = u + at",
                analyze: "Identify the two operations needed to rearrange y = 3x − 7 for x, and state the correct order",
                evaluate: "A student rearranges P = 2l + 2w for l and gets l = P − 2w. Evaluate this result.",
                create: "Write a three-variable formula whose rearrangement for the middle variable requires exactly three inverse operations"
            },
            rearranging_with_fractions: {
                remember: "State the rule for rearranging a formula when the subject is in the denominator",
                understand: "Explain why multiplying both sides by the denominator eliminates the fraction",
                apply: "Make I the subject of R = V/I",
                analyze: "Identify all steps needed to rearrange 1/f = 1/u + 1/v for u",
                evaluate: "A student rearranges y = x/(x+3) for x and writes x = y(x+3). Is this a complete rearrangement? Evaluate.",
                create: "Construct a fractional formula where rearranging for the denominator variable requires clearing the fraction and then collecting terms"
            },
            rearranging_with_roots_powers: {
                remember: "State the inverse operation for: squaring, taking a cube root, raising to the power 4",
                understand: "Explain why you must isolate the root expression before squaring both sides",
                apply: "Make r the subject of V = (4/3)πr³",
                analyze: "Determine the complete step sequence for rearranging T = 2π√(l/g) for l",
                evaluate: "A student writes that √(a² + b²) = a + b. Evaluate this claim.",
                create: "Write a formula involving a square root where rearranging for the subject inside the root requires three steps before squaring"
            },
            subject_appears_twice: {
                remember: "State the three steps needed when the subject appears in more than one term",
                understand: "Explain why you cannot simply divide by x to isolate it when x appears in two separate terms",
                apply: "Make x the subject of ax + b = cx + d",
                analyze: "Identify which step would fail if you tried to rearrange y = (x+2)/(x−1) for x using only linear operations",
                evaluate: "A student factors 2x + 3x = 10 as x(5) = 10 → x = 2. Evaluate this method.",
                create: "Construct a formula where the subject appears in both numerator and denominator of a single fraction"
            },
            combined_operations_rearranging: {
                remember: "List the decision questions in the complete rearranging strategy flowchart",
                understand: "Explain why planning the step sequence before beginning is important for multi-step rearrangements",
                apply: "Make k the subject of t = 2π√(m/k)",
                analyze: "For h = GM/v² − R, identify which operations were applied to h to produce the original formula",
                evaluate: "Evaluate whether dimensional analysis or substitution verification is more useful for detecting sign errors in rearrangements",
                create: "Design a formula from a physics context requiring GCF factorisation, fraction clearing, and a square root — then rearrange it for the subject"
            }
        };
    }

    // ========================================
    // TOPIC HANDLERS
    // ========================================

    handleLinearRearranging(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Linear Formula Rearranging",
            category: 'rearranging',
            summary: "Linear formula rearranging isolates a chosen variable by applying inverse operations in reverse BODMAS order, maintaining equality by applying each operation to both sides simultaneously.",

            definitions: {
                subject: {
                    definition: "The variable that stands alone on one side of the formula (e.g., v is the subject of v = u + at)",
                    note: "Rearranging changes which variable is the subject"
                },
                inverseOperations: {
                    addition: "Undone by subtraction",
                    subtraction: "Undone by addition",
                    multiplication: "Undone by division",
                    division: "Undone by multiplication"
                },
                balanceMethod: {
                    principle: "Whatever operation is applied to one side must be applied identically to the other side",
                    reason: "Preserves the equality — both sides remain equal throughout the rearrangement"
                }
            },

            methods: {
                oneStep: {
                    description: "Apply one inverse operation to both sides",
                    example: "y = x + 5 → y − 5 = x → x = y − 5"
                },
                twoStep: {
                    description: "Apply two inverse operations in reverse BODMAS order",
                    example: "y = 2x + 3: first undo +3 (subtract 3), then undo ×2 (divide by 2) → x = (y−3)/2"
                },
                bracketFormulas: {
                    description: "Treat brackets as single units until they contain the subject",
                    example: "y = 3(x + 2): divide both sides by 3 first → y/3 = x + 2 → x = y/3 − 2"
                }
            },

            strategicApproach: {
                steps: [
                    "1. Identify which variable should become the new subject",
                    "2. Identify all operations applied to the subject in the original formula",
                    "3. List these operations in the order they were applied (following BODMAS)",
                    "4. Reverse both the list AND the operations to undo them",
                    "5. Apply each inverse operation to both sides of the formula",
                    "6. Verify by substituting a specific test value into both formulas"
                ]
            },

            examples: [
                {
                    formula: "v = u + at",
                    task: "Make a the subject",
                    solution: {
                        step1: "v − u = at [subtract u from both sides]",
                        step2: "a = (v − u)/t [divide both sides by t]",
                        result: "a = (v − u)/t",
                        verification: "v = u + ((v−u)/t)t = u + v − u = v ✓"
                    }
                },
                {
                    formula: "C = 5(F − 32)/9",
                    task: "Make F the subject",
                    solution: {
                        step1: "9C = 5(F − 32) [multiply both sides by 9]",
                        step2: "9C/5 = F − 32 [divide both sides by 5]",
                        step3: "F = 9C/5 + 32 [add 32 to both sides]",
                        result: "F = 9C/5 + 32"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Applying an operation to only one side",
                    example: "y = 2x + 3 → subtracting 3 from left only: y − 3 = 2x + 3 (wrong)",
                    fix: "Subtract 3 from both sides: y − 3 = 2x"
                },
                {
                    error: "Undoing operations in BODMAS order instead of reverse BODMAS",
                    example: "For y = 2x + 3, dividing by 2 first: y/2 = x + 3 → x = y/2 − 3 (accidentally correct here but wrong principle)",
                    fix: "Always undo the LAST operation first — addition/subtraction before multiplication/division"
                },
                {
                    error: "Forgetting a coefficient after isolating",
                    example: "3x = y + 1 → x = y + 1 (forgetting to divide by 3)",
                    fix: "Divide both sides by the coefficient: x = (y + 1)/3"
                }
            ],

            assessmentQuestions: {
                recall: [
                    "What is the subject of the formula v = u + at?",
                    "Write the inverse of: multiply by 5; subtract 7; divide by k."
                ],
                understanding: [
                    "Explain what 'making x the subject' means geometrically using the balance model.",
                    "Why is verification by substitution the essential final step?"
                ],
                application: [
                    "Make t the subject of v = u + at",
                    "Make w the subject of P = 2l + 2w",
                    "Make r the subject of C = 2πr"
                ]
            }
        };

        return content;
    }

    handleRearrangingWithFractions(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Rearranging Formulas with Fractions",
            category: 'rearranging',
            summary: "Fractional formulas are rearranged by clearing denominators through multiplication. If the subject is in the denominator, multiply both sides by the denominator expression to bring it into the numerator, then proceed with linear rearranging.",

            methods: {
                clearDenominator: {
                    rule: "Multiply both sides by the denominator to eliminate the fraction",
                    example: "y = a/x → xy = a → x = a/y"
                },
                crossMultiplication: {
                    rule: "For a/b = c/d, multiply diagonally: ad = bc",
                    example: "p/q = r/s → ps = qr → p = qr/s"
                },
                LCD: {
                    rule: "Multiply all terms by the LCD to clear multiple fractions simultaneously",
                    example: "1/x + 1/y = 1/z → multiply by xyz: yz + xz = xy → solve for chosen subject"
                }
            },

            examples: [
                {
                    formula: "R = V/I",
                    task: "Make I the subject",
                    solution: {
                        step1: "RI = V [multiply both sides by I]",
                        step2: "I = V/R [divide both sides by R]",
                        result: "I = V/R"
                    }
                },
                {
                    formula: "1/f = 1/u + 1/v",
                    task: "Make u the subject",
                    solution: {
                        step1: "1/u = 1/f − 1/v",
                        step2: "1/u = (v − f)/(fv) [combine fractions]",
                        step3: "u = fv/(v − f) [take reciprocal of both sides]",
                        result: "u = fv/(v − f)"
                    }
                },
                {
                    formula: "y = (x + 2)/(x − 3)",
                    task: "Make x the subject",
                    solution: {
                        step1: "y(x − 3) = x + 2 [multiply by (x − 3)]",
                        step2: "yx − 3y = x + 2 [expand]",
                        step3: "yx − x = 2 + 3y [collect x terms]",
                        step4: "x(y − 1) = 2 + 3y [factorise x]",
                        step5: "x = (2 + 3y)/(y − 1) [divide by (y − 1)]",
                        result: "x = (3y + 2)/(y − 1)"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Multiplying only the numerator rather than the whole expression by the denominator",
                    fix: "Multiply the ENTIRE other side by the denominator: y × (x−3), not just y"
                },
                {
                    error: "Applying cross-multiplication to formulas with additional terms",
                    fix: "Cross-multiply only when the formula is exactly of the form a/b = c/d"
                }
            ]
        };

        return content;
    }

    handleRearrangingWithRootsPowers(problem) {
        const content = {
            topic: "Rearranging with Roots and Powers",
            category: 'rearranging',
            summary: "Roots and powers are undone by their inverse operations: square-rooting by squaring, and squaring by square-rooting. Always isolate the root or power expression before applying its inverse. Remember ± when taking even roots of constants.",

            inverseOperations: {
                squareToRoot: "x² → apply √ to both sides: x = ±√(expression)",
                rootToSquare: "√x → square both sides: x = expression²",
                cubeToRoot: "x³ → apply ∛ to both sides: x = ∛(expression)",
                generalPower: "xⁿ → apply the (1/n) power to both sides: x = expression^(1/n)"
            },

            examples: [
                {
                    formula: "v² = u² + 2as",
                    task: "Make u the subject",
                    solution: {
                        step1: "u² = v² − 2as [subtract 2as from both sides]",
                        step2: "u = ±√(v² − 2as) [take square root of both sides]",
                        result: "u = ±√(v² − 2as)"
                    }
                },
                {
                    formula: "T = 2π√(l/g)",
                    task: "Make l the subject",
                    solution: {
                        step1: "T/(2π) = √(l/g) [divide both sides by 2π]",
                        step2: "T²/(4π²) = l/g [square both sides]",
                        step3: "l = gT²/(4π²) [multiply both sides by g]",
                        result: "l = gT²/(4π²)"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Squaring before isolating the root: (2 + √x)² ≠ 4 + x",
                    fix: "Isolate the root expression first: √x = y − 2 → x = (y−2)²"
                },
                {
                    error: "√(a² + b²) = a + b (the 'root distributes over addition' error)",
                    fix: "Square root does NOT distribute over addition. Only √(a²) = |a|"
                },
                {
                    error: "Forgetting ± when solving x² = k for x",
                    fix: "Always write x = ±√k when the variable could be positive or negative"
                }
            ]
        };

        return content;
    }

    handleSubjectAppearsTwice(problem) {
        const content = {
            topic: "Subject Appears Twice: Collect and Factorise",
            category: 'rearranging',
            summary: "When the new subject appears in more than one term, standard inverse operation techniques fail. The solution is to expand brackets, collect all subject terms onto one side, factorise the subject out, and divide by the remaining bracket.",

            strategicApproach: {
                steps: [
                    "Step 1: Expand all brackets to reveal every term containing the subject",
                    "Step 2: Move all subject terms to the left side",
                    "Step 3: Move all non-subject terms to the right side",
                    "Step 4: Factorise the subject from all left-side terms",
                    "Step 5: Divide both sides by the factor bracket to isolate the subject",
                    "Step 6: Verify by substitution"
                ],
                whyItWorks: "Factorising converts multiple occurrences of the subject into a single term: ax + bx = x(a + b). Now the subject appears once and can be isolated by division."
            },

            examples: [
                {
                    formula: "ax + b = cx + d",
                    task: "Make x the subject",
                    solution: {
                        step1: "ax − cx = d − b [collect x terms on left]",
                        step2: "x(a − c) = d − b [factorise x]",
                        step3: "x = (d − b)/(a − c) [divide by (a − c)]",
                        result: "x = (d − b)/(a − c)"
                    }
                },
                {
                    formula: "y = (x + a)/(x + b)",
                    task: "Make x the subject",
                    solution: {
                        step1: "y(x + b) = x + a [multiply by (x + b)]",
                        step2: "yx + yb = x + a [expand]",
                        step3: "yx − x = a − yb [collect x terms]",
                        step4: "x(y − 1) = a − yb [factorise x]",
                        step5: "x = (a − yb)/(y − 1) [divide by (y − 1)]",
                        result: "x = (a − yb)/(y − 1)"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Dividing by x before collecting (creates circular formula)",
                    fix: "Never divide by the subject — collect and factorise instead"
                },
                {
                    error: "Moving terms to wrong side during collection (sign errors)",
                    fix: "When moving a term to the other side, its sign changes: +2x becomes −2x"
                },
                {
                    error: "Forgetting to expand brackets before collecting",
                    fix: "Expand ALL brackets first so every individual term containing the subject is visible"
                }
            ]
        };

        return content;
    }

    handleCombinedOperationsRearranging(problem) {
        const content = {
            topic: "Combined Operations Formula Rearranging",
            category: 'rearranging',
            summary: "Multi-step formulas require combining techniques: clearing fractions, undoing roots and powers, collecting subject terms, and factorising. Plan the step sequence using the decision flowchart before beginning.",

            decisionFlowchart: {
                check1: "Subject in multiple terms? → Expand, collect, factorise first",
                check2: "Subject under root or power? → Isolate, then apply inverse root/power",
                check3: "Subject in denominator? → Multiply both sides by denominator",
                check4: "Inverse function present? → Apply corresponding inverse function",
                check5: "Linear remainder? → Apply reverse BODMAS operations"
            },

            examples: [
                {
                    formula: "t = 2π√(m/k)",
                    task: "Make k the subject",
                    solution: {
                        step1: "t/(2π) = √(m/k) [divide by 2π]",
                        step2: "t²/(4π²) = m/k [square both sides]",
                        step3: "k = 4π²m/t² [multiply both sides by k, divide by t²/4π²]",
                        result: "k = 4π²m/t²"
                    }
                },
                {
                    formula: "s = ut + ½at²",
                    task: "Make u the subject",
                    solution: {
                        step1: "s − ½at² = ut [subtract ½at²]",
                        step2: "u = (s − ½at²)/t = s/t − at/2 [divide by t]",
                        result: "u = s/t − at/2"
                    }
                }
            ],

            planningAdvice: "Before writing the first step, write down every operation trapping the subject (in the order they were applied). Reverse this list. Apply each inverse operation in the reversed order."
        };

        return content;
    }

    handleInverseFunctionsRearranging(problem) {
        const content = {
            topic: "Rearranging with Inverse Functions",
            category: 'rearranging',
            summary: "Inverse functions undo transcendental operations: ln undoes eˣ, log₁₀ undoes 10ˣ, arcsin/arccos/arctan undo sin/cos/tan. Apply the appropriate inverse function to both sides to isolate the subject.",

            keyPairs: {
                exponentialLog: "y = eˣ ↔ x = ln(y); y = 10ˣ ↔ x = log₁₀(y)",
                logExponential: "y = ln(x) ↔ x = eʸ; y = log₁₀(x) ↔ x = 10ʸ",
                trigInverse: "y = sin(x) ↔ x = arcsin(y); y = cos(x) ↔ x = arccos(y); y = tan(x) ↔ x = arctan(y)"
            },

            examples: [
                {
                    formula: "A = A₀e^(−kt)",
                    task: "Make t the subject",
                    solution: {
                        step1: "A/A₀ = e^(−kt) [divide by A₀]",
                        step2: "ln(A/A₀) = −kt [take natural log of both sides]",
                        step3: "t = −ln(A/A₀)/k = ln(A₀/A)/k [divide by −k]",
                        result: "t = ln(A₀/A)/k"
                    }
                },
                {
                    formula: "pH = −log₁₀[H⁺]",
                    task: "Make [H⁺] the subject",
                    solution: {
                        step1: "−pH = log₁₀[H⁺] [multiply by −1]",
                        step2: "[H⁺] = 10^(−pH) [raise 10 to both sides]",
                        result: "[H⁺] = 10^(−pH)"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "ln(a + b) = ln(a) + ln(b) — log does not distribute over addition",
                    fix: "ln(a + b) cannot be simplified further; only ln(ab) = ln(a) + ln(b)"
                },
                {
                    error: "sin⁻¹(x) confused with 1/sin(x)",
                    fix: "sin⁻¹ means the inverse function (arcsin); 1/sin(x) = csc(x) — these are different"
                }
            ]
        };

        return content;
    }

    handleCompleteRearrangingStrategy(problem) {
        const content = {
            topic: "Complete Formula Rearranging Strategy",
            category: 'rearranging',
            summary: "A systematic decision-based approach to rearranging any formula for any subject variable. Classify the formula structure first, then apply the appropriate sequence of techniques, always ending with verification.",

            decisionFlowchart: {
                step1: { question: "Does the subject appear in more than one term?", yes: "Expand → Collect → Factorise → Divide", no: "→ Step 2" },
                step2: { question: "Is the subject under a root or inside a power?", yes: "Isolate root/power expression → Apply inverse operation", no: "→ Step 3" },
                step3: { question: "Is the subject in a denominator?", yes: "Multiply both sides by the denominator expression", no: "→ Step 4" },
                step4: { question: "Is the subject inside a log, trig, or exponential function?", yes: "Apply corresponding inverse function to both sides", no: "→ Step 5" },
                step5: { question: "Linear formula remaining?", yes: "Apply reverse BODMAS: undo +/− first, then ×/÷", no: "Return to Step 1 on simplified formula" }
            },

            checklist: [
                "Have you identified every term containing the subject?",
                "Have you cleared all fractions where needed?",
                "Have you expanded brackets hiding the subject?",
                "Have you factorised if the subject appears multiple times?",
                "Have you verified by substituting a test value into both original and rearranged formulas?",
                "Do the units of the rearranged formula match the expected dimensions of the subject?"
            ],

            workedExample: {
                formula: "y = (3x + 1)/(2x − 5)",
                task: "Make x the subject",
                step1: "y(2x − 5) = 3x + 1 [clear fraction: multiply by (2x−5)]",
                step2: "2xy − 5y = 3x + 1 [expand left side]",
                step3: "2xy − 3x = 1 + 5y [collect x terms on left, constants on right]",
                step4: "x(2y − 3) = 1 + 5y [factorise x]",
                step5: "x = (5y + 1)/(2y − 3) [divide by (2y − 3)]",
                result: "x = (5y + 1)/(2y − 3)",
                verification: "Test y = 2: x = 11/1 = 11. Check: (3×11+1)/(2×11−5) = 34/17 = 2 ✓"
            }
        };

        return content;
    }
}

