// Enhanced Linear Inequality Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedLinearInequalityMathematicalWorkbook {
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
        this.initializeInequalitySolvers();
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
        this.initializeInequalityLessons();
    }

    initializeInequalityLessons() {
        this.lessons = {
            simple_linear_inequality: {
                title: "Simple Linear Inequalities",
                concepts: [
                    "General form: ax + b < c, ax + b > c, ax + b ≤ c, or ax + b ≥ c where a ≠ 0",
                    "Goal: find all values of x that make the inequality true",
                    "Solution is a range of values (interval)",
                    "Represents a region on a number line or coordinate plane"
                ],
                theory: "Linear inequalities represent relationships where one expression is less than, greater than, less than or equal to, or greater than or equal to another. Unlike equations, they have infinitely many solutions forming an interval.",
                keyFormulas: {
                    "Standard Forms": "ax + b < c, ax + b > c, ax + b ≤ c, ax + b ≥ c",
                    "Solution Interval": "Expressed using interval notation or set-builder notation",
                    "Critical Rule": "When multiplying or dividing by a negative number, reverse the inequality sign"
                },
                solvingSteps: [
                    "Simplify both sides if needed",
                    "Isolate variable terms on one side",
                    "Isolate constant terms on the other side",
                    "Divide/multiply by coefficient (reverse sign if negative)",
                    "Express solution as interval",
                    "Graph solution on number line"
                ],
                applications: [
                    "Budget constraints (spend less than $X)",
                    "Speed limits (drive at most 65 mph)",
                    "Minimum requirements (score at least 70%)",
                    "Temperature ranges (between 60°F and 80°F)",
                    "Capacity limits (hold no more than 100 people)"
                ],
                inequalitySymbols: {
                    "<": "less than (strict inequality)",
                    ">": "greater than (strict inequality)",
                    "≤": "less than or equal to (non-strict)",
                    "≥": "greater than or equal to (non-strict)"
                },
                graphingConventions: {
                    "Open circle": "Used for < and > (value not included)",
                    "Closed circle": "Used for ≤ and ≥ (value included)",
                    "Arrow direction": "Points in direction of solution set",
                    "Shading": "Region where inequality is satisfied"
                }
            },

            one_step_inequalities: {
                title: "One-Step Inequalities",
                concepts: [
                    "Single operation needed to isolate variable",
                    "Forms: x + a < b, x - a > b, ax ≤ b, x/a ≥ b",
                    "Use inverse operations like equations",
                    "Remember to reverse sign when multiplying/dividing by negative"
                ],
                theory: "One-step inequalities require only one inverse operation to solve, just like one-step equations, with the added consideration of reversing the inequality sign when multiplying or dividing by negative numbers.",
                keyFormulas: {
                    "Addition": "x + a < b → x < b - a",
                    "Subtraction": "x - a > b → x > b + a",
                    "Multiplication": "ax ≤ b → x ≤ b/a (if a > 0), x ≥ b/a (if a < 0)",
                    "Division": "x/a ≥ b → x ≥ ab (if a > 0), x ≤ ab (if a < 0)"
                },
                solvingSteps: [
                    "Identify the operation performed on x",
                    "Apply the inverse operation to both sides",
                    "If multiplying/dividing by negative, reverse inequality sign",
                    "Express solution in interval notation",
                    "Graph on number line"
                ],
                applications: [
                    "Minimum purchase requirements",
                    "Weight limits",
                    "Age restrictions",
                    "Temperature thresholds"
                ],
                criticalRule: "The inequality sign reverses when multiplying or dividing both sides by a negative number"
            },

            two_step_inequalities: {
                title: "Two-Step Inequalities",
                concepts: [
                    "Two operations needed to isolate variable",
                    "Form: ax + b < c, ax + b > c, etc.",
                    "Undo operations in reverse order (PEMDAS backwards)",
                    "Watch for sign reversal on final step if coefficient is negative"
                ],
                theory: "Two-step inequalities combine two operations and are solved similarly to two-step equations, with careful attention to the inequality sign reversal rule.",
                keyFormulas: {
                    "Standard Form": "ax + b < c",
                    "Solution Process": "Subtract b, then divide by a (reverse sign if a < 0)",
                    "Solution": "x < (c - b)/a (if a > 0), x > (c - b)/a (if a < 0)"
                },
                solvingSteps: [
                    "Subtract/add to isolate ax term",
                    "Divide/multiply to isolate x",
                    "Reverse inequality if dividing/multiplying by negative",
                    "Simplify and express as interval",
                    "Graph solution on number line"
                ],
                applications: [
                    "Cost constraints with fixed fees",
                    "Distance-rate-time with limits",
                    "Grading systems with thresholds",
                    "Profit/loss calculations"
                ]
            },

            multi_step_inequalities: {
                title: "Multi-Step Linear Inequalities",
                concepts: [
                    "Multiple operations required",
                    "May involve combining like terms",
                    "May require distributive property",
                    "Sign reversal possible at any multiplication/division by negative",
                    "Systematic approach essential"
                ],
                theory: "Multi-step inequalities require strategic thinking and systematic application of algebraic properties, with constant vigilance for opportunities where the inequality sign must be reversed.",
                keyFormulas: {
                    "Distributive Property": "a(b + c) = ab + ac",
                    "Combining Like Terms": "ax + bx = (a + b)x",
                    "General Approach": "Simplify → Combine → Isolate → Solve → Check sign reversal"
                },
                solvingSteps: [
                    "Distribute and simplify both sides",
                    "Combine like terms on each side",
                    "Move variable terms to one side",
                    "Move constant terms to other side",
                    "Divide to solve for x (reverse sign if needed)",
                    "Express as interval and graph"
                ],
                applications: [
                    "Complex budget planning",
                    "Multi-variable constraints",
                    "Optimization problems",
                    "Resource allocation"
                ]
            },

            compound_inequalities: {
                title: "Compound Inequalities",
                concepts: [
                    "Two inequalities joined by 'and' or 'or'",
                    "'And' compound: a < x < b (intersection)",
                    "'Or' compound: x < a or x > b (union)",
                    "Solution is intersection or union of individual solutions"
                ],
                theory: "Compound inequalities express multiple constraints simultaneously. 'And' compounds require both conditions to be true (intersection), while 'or' compounds require at least one condition to be true (union).",
                keyFormulas: {
                    "Conjunction (and)": "a < x and x < b written as a < x < b",
                    "Disjunction (or)": "x < a or x > b",
                    "Interval Notation (and)": "(a, b) or [a, b]",
                    "Interval Notation (or)": "(-∞, a) ∪ (b, ∞)"
                },
                types: {
                    "Conjunction": "Both conditions must be satisfied (overlap)",
                    "Disjunction": "At least one condition must be satisfied (either region)"
                },
                solvingSteps: [
                    "Identify type: 'and' (conjunction) or 'or' (disjunction)",
                    "Solve each inequality separately",
                    "For 'and': find intersection of solutions",
                    "For 'or': find union of solutions",
                    "Express in interval notation",
                    "Graph on number line"
                ],
                applications: [
                    "Temperature comfort zones (between 68°F and 75°F)",
                    "Acceptable ranges (pH between 6.5 and 7.5)",
                    "Exclusion zones (avoid temperatures below 32°F or above 100°F)",
                    "Quality control tolerances"
                ]
            },

            inequalities_with_fractions: {
                title: "Linear Inequalities with Fractions",
                concepts: [
                    "Clear fractions by multiplying by LCD",
                    "Alternative: work with fractions throughout",
                    "Be especially careful with sign reversal when clearing denominators",
                    "Watch for negative denominators"
                ],
                theory: "Inequalities with fractions can be solved by clearing denominators (multiplying by LCD) or by working with fractions directly. Special care is needed when the LCD or any multiplier is negative.",
                keyFormulas: {
                    "LCD Method": "Multiply both sides by LCD (reverse sign if LCD < 0)",
                    "Fraction Operations": "Maintain inequality relationships while simplifying",
                    "Critical Rule": "If multiplying by negative LCD, reverse inequality sign"
                },
                solvingSteps: [
                    "Find LCD of all denominators",
                    "Determine if LCD is positive or negative",
                    "Multiply both sides by LCD",
                    "Reverse inequality sign if LCD is negative",
                    "Solve resulting inequality",
                    "Verify solution makes sense"
                ],
                applications: [
                    "Ratio and proportion constraints",
                    "Rate problems with limits",
                    "Fractional resource allocation",
                    "Scale comparisons"
                ]
            },

            inequalities_with_decimals: {
                title: "Linear Inequalities with Decimals",
                concepts: [
                    "Can clear decimals by multiplying by power of 10",
                    "Alternative: work with decimals directly",
                    "Powers of 10 are always positive, so no sign reversal needed",
                    "Round final answer appropriately for context"
                ],
                theory: "Decimal inequalities can be converted to whole number inequalities by multiplying by appropriate powers of 10. Since powers of 10 are positive, the inequality sign never reverses when clearing decimals.",
                keyFormulas: {
                    "Clear Decimals": "Multiply by 10, 100, 1000, etc. (always positive)",
                    "No Sign Reversal": "Powers of 10 are positive, so inequality direction preserved",
                    "Decimal Operations": "Standard arithmetic maintaining inequality"
                },
                solvingSteps: [
                    "Identify maximum decimal places",
                    "Multiply by appropriate power of 10",
                    "Solve resulting whole number inequality",
                    "Express answer in required decimal form",
                    "Graph solution"
                ],
                applications: [
                    "Money constraints (at most $45.50)",
                    "Measurement precision (at least 2.5 cm)",
                    "Scientific calculations with limits",
                    "Statistical thresholds"
                ]
            },

            variables_both_sides_inequalities: {
                title: "Inequalities with Variables on Both Sides",
                concepts: [
                    "Variable terms appear on both sides",
                    "Collect variable terms on one side strategically",
                    "Choose side that avoids negative coefficient if possible",
                    "Watch for sign reversal when dividing by negative coefficient"
                ],
                theory: "When variables appear on both sides of an inequality, we collect all variable terms on one side. Strategic choice of which side can help avoid negative coefficients and the need for sign reversal.",
                keyFormulas: {
                    "Standard Process": "Move variables to one side, constants to other",
                    "Simplification": "ax + b < cx + d → (a-c)x < d - b",
                    "Sign Reversal": "If (a-c) < 0, reverse inequality when dividing"
                },
                strategicTips: {
                    "Choose wisely": "Move smaller variable coefficient to avoid negatives",
                    "Example": "For 2x + 3 < 5x - 1, subtract 2x (not 5x) to get 3 < 3x - 1"
                },
                solvingSteps: [
                    "Simplify both sides",
                    "Move variable terms to one side (choose strategically)",
                    "Move constants to other side",
                    "Divide by variable coefficient",
                    "Reverse inequality sign if coefficient is negative",
                    "Express as interval and graph"
                ],
                applications: [
                    "Comparing plans (when is plan A cheaper than plan B?)",
                    "Break-even analysis with constraints",
                    "Competitive pricing",
                    "Resource comparison"
                ]
            },

            absolute_value_inequalities: {
                title: "Absolute Value Inequalities",
                concepts: [
                    "Form: |ax + b| < c or |ax + b| > c",
                    "|x| < c means -c < x < c (conjunction)",
                    "|x| > c means x < -c or x > c (disjunction)",
                    "Absolute value represents distance from zero"
                ],
                theory: "Absolute value inequalities involve distance from zero. |x| < c means x is within c units of zero, while |x| > c means x is more than c units away from zero.",
                keyFormulas: {
                    "Less Than": "|ax + b| < c → -c < ax + b < c (compound and)",
                    "Greater Than": "|ax + b| > c → ax + b < -c or ax + b > c (compound or)",
                    "Less Than or Equal": "|ax + b| ≤ c → -c ≤ ax + b ≤ c",
                    "Greater Than or Equal": "|ax + b| ≥ c → ax + b ≤ -c or ax + b ≥ c"
                },
                solvingSteps: [
                    "Isolate absolute value expression if needed",
                    "Determine if it's < type or > type",
                    "Split into two inequalities (compound and or compound or)",
                    "Solve each inequality",
                    "Combine solutions appropriately",
                    "Graph on number line"
                ],
                applications: [
                    "Error tolerance (within ±0.5 mm)",
                    "Temperature variation (at most 5°F from 70°F)",
                    "Quality control (deviation less than 2%)",
                    "Distance constraints"
                ],
                visualConcept: "Think of absolute value as distance on number line - both directions count"
            },

            word_problems_inequalities: {
                title: "Linear Inequality Word Problems",
                concepts: [
                    "Translate verbal descriptions to inequalities",
                    "Identify unknown and define variable",
                    "Set up inequality from given constraints",
                    "Solve and interpret in context"
                ],
                theory: "Inequality word problems require translation between verbal and mathematical language, solving, and interpreting the solution set in the real-world context.",
                problemTypes: {
                    "At most / No more than": "≤ (less than or equal to)",
                    "At least / No less than": "≥ (greater than or equal to)",
                    "Less than / Fewer than": "< (strictly less than)",
                    "Greater than / More than": "> (strictly greater than)",
                    "Between": "Compound inequality a < x < b",
                    "Outside range": "Compound inequality x < a or x > b"
                },
                solutionStrategy: [
                    "Read problem carefully, identify constraint",
                    "Define variable clearly",
                    "Identify inequality type from key words",
                    "Write inequality from problem conditions",
                    "Solve inequality",
                    "Check reasonableness in context",
                    "Answer with appropriate units and interpretation"
                ],
                commonPhrases: {
                    "at most": "≤",
                    "at least": "≥",
                    "no more than": "≤",
                    "no less than": "≥",
                    "less than": "<",
                    "greater than": ">",
                    "more than": ">",
                    "fewer than": "<",
                    "maximum": "≤",
                    "minimum": "≥",
                    "between": "< and <",
                    "exceeds": ">"
                }
            },

            interval_notation: {
                title: "Interval Notation and Set-Builder Notation",
                concepts: [
                    "Interval notation: (a, b), [a, b], (a, b], [a, b)",
                    "Parentheses ( ) for strict inequalities (< or >)",
                    "Brackets [ ] for non-strict inequalities (≤ or ≥)",
                    "Use ∞ and -∞ for unbounded intervals",
                    "Set-builder notation: {x | condition}"
                ],
                theory: "Interval notation provides a compact way to express solution sets for inequalities. It clearly shows which endpoints are included (brackets) versus excluded (parentheses).",
                notation: {
                    "(a, b)": "a < x < b (both endpoints excluded)",
                    "[a, b]": "a ≤ x ≤ b (both endpoints included)",
                    "(a, b]": "a < x ≤ b (left excluded, right included)",
                    "[a, b)": "a ≤ x < b (left included, right excluded)",
                    "(-∞, a)": "x < a (unbounded below)",
                    "(a, ∞)": "x > a (unbounded above)",
                    "(-∞, a]": "x ≤ a",
                    "[a, ∞)": "x ≥ a",
                    "(-∞, ∞)": "all real numbers"
                },
                setBuilderExamples: {
                    "{x | x > 5}": "Set of all x such that x is greater than 5",
                    "{x | -2 ≤ x < 7}": "Set of all x between -2 (inclusive) and 7 (exclusive)",
                    "{x | x ≤ -3 or x ≥ 2}": "Set of all x less than or equal to -3 or greater than or equal to 2"
                },
                unionIntersection: {
                    "Union (∪)": "Combines solution sets (or)",
                    "Intersection (∩)": "Overlap of solution sets (and)"
                }
            },

            graphing_inequalities: {
                title: "Graphing Linear Inequalities",
                concepts: [
                    "Number line for one-variable inequalities",
                    "Coordinate plane for two-variable inequalities",
                    "Open vs. closed circles/points",
                    "Shading direction indicates solution region"
                ],
                theory: "Graphing provides visual representation of solution sets. Number lines show one-variable solutions, while coordinate planes show two-variable inequality solutions.",
                numberLineGraphing: {
                    "Open circle": "For < and > (value not included)",
                    "Closed circle": "For ≤ and ≥ (value included)",
                    "Arrow/ray": "Shows all values in solution direction",
                    "Shading": "Alternative to arrow, shades solution region"
                },
                coordinatePlaneGraphing: {
                    "Boundary line": "Graph of equality (dashed for < or >, solid for ≤ or ≥)",
                    "Shading": "Region where inequality is satisfied",
                    "Test point": "Use (0,0) if not on line to determine shading direction"
                },
                steps: [
                    "Solve inequality for variable",
                    "Identify critical value(s)",
                    "Determine if critical values are included (closed) or excluded (open)",
                    "Draw appropriate circle/dot at critical value(s)",
                    "Shade/arrow in direction of solution",
                    "Label graph with interval notation"
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
                highlightBg: '#ffe6e6',
                inequalityBg: '#e8f4f8',
                warningBg: '#fff3cd'
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
                inequalityBg: '#d1ecf1',
                warningBg: '#fff9e6'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            'lt': '<', 'gt': '>', 'le': '≤', 'ge': '≥',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥',
            // Interval notation
            'infty': '∞', 'emptyset': '∅'
        };
    }

    initializeInequalitySolvers() {
        this.inequalityTypes = {
            // One-step inequalities
            one_step_addition_less: {
                patterns: [
                    /x\s*\+\s*([+-]?\d+\.?\d*)\s*<\s*([+-]?\d+\.?\d*)/,
                    /solve.*x\s*\+.*</i
                ],
                solver: this.solveOneStepAdditionLess.bind(this),
                name: 'One-Step Addition Inequality (<)',
                category: 'one_step',
                description: 'Solves x + a < b',
                inequalityType: '<'
            },

            one_step_addition_greater: {
                patterns: [
                    /x\s*\+\s*([+-]?\d+\.?\d*)\s*>\s*([+-]?\d+\.?\d*)/,
                    /solve.*x\s*\+.*>/i
                ],
                solver: this.solveOneStepAdditionGreater.bind(this),
                name: 'One-Step Addition Inequality (>)',
                category: 'one_step',
                description: 'Solves x + a > b',
                inequalityType: '>'
            },

            one_step_addition_leq: {
                patterns: [
                    /x\s*\+\s*([+-]?\d+\.?\d*)\s*≤\s*([+-]?\d+\.?\d*)/,
                    /x\s*\+\s*([+-]?\d+\.?\d*)\s*<=\s*([+-]?\d+\.?\d*)/
                ],
                solver: this.solveOneStepAdditionLeq.bind(this),
                name: 'One-Step Addition Inequality (≤)',
                category: 'one_step',
                description: 'Solves x + a ≤ b',
                inequalityType: '≤'
            },

            one_step_addition_geq: {
                patterns: [
                    /x\s*\+\s*([+-]?\d+\.?\d*)\s*≥\s*([+-]?\d+\.?\d*)/,
                    /x\s*\+\s*([+-]?\d+\.?\d*)\s*>=\s*([+-]?\d+\.?\d*)/
                ],
                solver: this.solveOneStepAdditionGeq.bind(this),
                name: 'One-Step Addition Inequality (≥)',
                category: 'one_step',
                description: 'Solves x + a ≥ b',
                inequalityType: '≥'
            },

            one_step_multiplication_less: {
                patterns: [
                    /([+-]?\d+\.?\d*)\s*x\s*<\s*([+-]?\d+\.?\d*)/,
                    /([+-]?\d+\.?\d*)x\s*<\s*([+-]?\d+\.?\d*)/
                ],
                solver: this.solveOneStepMultiplicationLess.bind(this),
                name: 'One-Step Multiplication Inequality (<)',
                category: 'one_step',
                description: 'Solves ax < b',
                inequalityType: '<'
            },

            one_step_multiplication_greater: {
                patterns: [
                    /([+-]?\d+\.?\d*)\s*x\s*>\s*([+-]?\d+\.?\d*)/,
                    /([+-]?\d+\.?\d*)x\s*>\s*([+-]?\d+\.?\d*)/
                ],
                solver: this.solveOneStepMultiplicationGreater.bind(this),
                name: 'One-Step Multiplication Inequality (>)',
                category: 'one_step',
                description: 'Solves ax > b',
                inequalityType: '>'
            },

            one_step_multiplication_leq: {
                patterns: [
                    /([+-]?\d+\.?\d*)\s*x\s*≤\s*([+-]?\d+\.?\d*)/,
                    /([+-]?\d+\.?\d*)x\s*<=\s*([+-]?\d+\.?\d*)/
                ],
                solver: this.solveOneStepMultiplicationLeq.bind(this),
                name: 'One-Step Multiplication Inequality (≤)',
                category: 'one_step',
                description: 'Solves ax ≤ b',
                inequalityType: '≤'
            },

            one_step_multiplication_geq: {
                patterns: [
                    /([+-]?\d+\.?\d*)\s*x\s*≥\s*([+-]?\d+\.?\d*)/,
                    /([+-]?\d+\.?\d*)x\s*>=\s*([+-]?\d+\.?\d*)/
                ],
                solver: this.solveOneStepMultiplicationGeq.bind(this),
                name: 'One-Step Multiplication Inequality (≥)',
                category: 'one_step',
                description: 'Solves ax ≥ b',
                inequalityType: '≥'
            },

            // Two-step inequalities
            two_step_less: {
                patterns: [
                    /([+-]?\d+\.?\d*)\s*x\s*([+-]\s*\d+\.?\d*)\s*<\s*([+-]?\d+\.?\d*)/,
                    /two.*step.*</i
                ],
                solver: this.solveTwoStepLess.bind(this),
                name: 'Two-Step Inequality (<)',
                category: 'two_step',
                description: 'Solves ax + b < c',
                inequalityType: '<'
            },

            two_step_greater: {
                patterns: [
                    /([+-]?\d+\.?\d*)\s*x\s*([+-]\s*\d+\.?\d*)\s*>\s*([+-]?\d+\.?\d*)/,
                    /two.*step.*>/i
                ],
                solver: this.solveTwoStepGreater.bind(this),
                name: 'Two-Step Inequality (>)',
                category: 'two_step',
                description: 'Solves ax + b > c',
                inequalityType: '>'
            },

            two_step_leq: {
                patterns: [
                    /([+-]?\d+\.?\d*)\s*x\s*([+-]\s*\d+\.?\d*)\s*≤\s*([+-]?\d+\.?\d*)/,
                    /([+-]?\d+\.?\d*)\s*x\s*([+-]\s*\d+\.?\d*)\s*<=\s*([+-]?\d+\.?\d*)/
                ],
                solver: this.solveTwoStepLeq.bind(this),
                name: 'Two-Step Inequality (≤)',
                category: 'two_step',
                description: 'Solves ax + b ≤ c',
                inequalityType: '≤'
            },

            two_step_geq: {
                patterns: [
                    /([+-]?\d+\.?\d*)\s*x\s*([+-]\s*\d+\.?\d*)\s*≥\s*([+-]?\d+\.?\d*)/,
                    /([+-]?\d+\.?\d*)\s*x\s*([+-]\s*\d+\.?\d*)\s*>=\s*([+-]?\d+\.?\d*)/
                ],
                solver: this.solveTwoStepGeq.bind(this),
                name: 'Two-Step Inequality (≥)',
                category: 'two_step',
                description: 'Solves ax + b ≥ c',
                inequalityType: '≥'
            },

            // Multi-step inequalities
            multi_step_less: {
                patterns: [
                    /multi.*step.*</i,
                    /distribute.*</i
                ],
                solver: this.solveMultiStepLess.bind(this),
                name: 'Multi-Step Inequality (<)',
                category: 'multi_step',
                description: 'Solves complex linear inequalities with <',
                inequalityType: '<'
            },

            multi_step_greater: {
                patterns: [
                    /multi.*step.*>/i,
                    /distribute.*>/i
                ],
                solver: this.solveMultiStepGreater.bind(this),
                name: 'Multi-Step Inequality (>)',
                category: 'multi_step',
                description: 'Solves complex linear inequalities with >',
                inequalityType: '>'
            },

            multi_step_leq: {
                patterns: [
                    /multi.*step.*≤/i,
                    /multi.*step.*<=/i
                ],
                solver: this.solveMultiStepLeq.bind(this),
                name: 'Multi-Step Inequality (≤)',
                category: 'multi_step',
                description: 'Solves complex linear inequalities with ≤',
                inequalityType: '≤'
            },

            multi_step_geq: {
                patterns: [
                    /multi.*step.*≥/i,
                    /multi.*step.*>=/i
                ],
                solver: this.solveMultiStepGeq.bind(this),
                name: 'Multi-Step Inequality (≥)',
                category: 'multi_step',
                description: 'Solves complex linear inequalities with ≥',
                inequalityType: '≥'
            },

            // Variables on both sides
            variables_both_sides_less: {
                patterns: [
                    /([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)\s*<\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)/,
                    /both.*sides.*</i
                ],
                solver: this.solveVariablesBothSidesLess.bind(this),
                name: 'Variables on Both Sides (<)',
                category: 'variables_both_sides',
                description: 'Solves ax + b < cx + d',
                inequalityType: '<'
            },

            variables_both_sides_greater: {
                patterns: [
                    /([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)\s*>\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)/,
                    /both.*sides.*>/i
                ],
                solver: this.solveVariablesBothSidesGreater.bind(this),
                name: 'Variables on Both Sides (>)',
                category: 'variables_both_sides',
                description: 'Solves ax + b > cx + d',
                inequalityType: '>'
            },

            variables_both_sides_leq: {
                patterns: [
                    /([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)\s*≤\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)/,
                    /([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)\s*<=\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)/
                ],
                solver: this.solveVariablesBothSidesLeq.bind(this),
                name: 'Variables on Both Sides (≤)',
                category: 'variables_both_sides',
                description: 'Solves ax + b ≤ cx + d',
                inequalityType: '≤'
            },

            variables_both_sides_geq: {
                patterns: [
                    /([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)\s*≥\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)/,
                    /([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)\s*>=\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)/
                ],
                solver: this.solveVariablesBothSidesGeq.bind(this),
                name: 'Variables on Both Sides (≥)',
                category: 'variables_both_sides',
                description: 'Solves ax + b ≥ cx + d',
                inequalityType: '≥'
            },

            // Compound inequalities
            compound_and: {
                patterns: [
                    /([+-]?\d+\.?\d*)\s*<\s*x\s*<\s*([+-]?\d+\.?\d*)/,
                    /([+-]?\d+\.?\d*)\s*≤\s*x\s*≤\s*([+-]?\d+\.?\d*)/,
                    /compound.*and/i,
                    /between/i
                ],
                solver: this.solveCompoundAnd.bind(this),
                name: 'Compound Inequality (AND)',
                category: 'compound',
                description: 'Solves a < x < b or a ≤ x ≤ b',
                inequalityType: 'compound_and'
            },

            compound_or: {
                patterns: [
                    /x\s*<\s*([+-]?\d+\.?\d*)\s+or\s+x\s*>\s*([+-]?\d+\.?\d*)/,
                    /compound.*or/i,
                    /outside/i
                ],
                solver: this.solveCompoundOr.bind(this),
                name: 'Compound Inequality (OR)',
                category: 'compound',
                description: 'Solves x < a or x > b',
                inequalityType: 'compound_or'
            },

            // Absolute value inequalities
            absolute_value_less: {
                patterns: [
                    /\|.*\|\s*<\s*\d/,
                    /abs\(.*\)\s*</i,
                    /absolute.*value.*</i
                ],
                solver: this.solveAbsoluteValueLess.bind(this),
                name: 'Absolute Value Inequality (<)',
                category: 'absolute_value',
                description: 'Solves |ax + b| < c',
                inequalityType: 'absolute_less'
            },

            absolute_value_greater: {
                patterns: [
                    /\|.*\|\s*>\s*\d/,
                    /abs\(.*\)\s*>/i,
                    /absolute.*value.*>/i
                ],
                solver: this.solveAbsoluteValueGreater.bind(this),
                name: 'Absolute Value Inequality (>)',
                category: 'absolute_value',
                description: 'Solves |ax + b| > c',
                inequalityType: 'absolute_greater'
            },

            absolute_value_leq: {
                patterns: [
                    /\|.*\|\s*≤\s*\d/,
                    /\|.*\|\s*<=\s*\d/,
                    /abs\(.*\)\s*<=/i
                ],
                solver: this.solveAbsoluteValueLeq.bind(this),
                name: 'Absolute Value Inequality (≤)',
                category: 'absolute_value',
                description: 'Solves |ax + b| ≤ c',
                inequalityType: 'absolute_leq'
            },

            absolute_value_geq: {
                patterns: [
                    /\|.*\|\s*≥\s*\d/,
                    /\|.*\|\s*>=\s*\d/,
                    /abs\(.*\)\s*>=/i
                ],
                solver: this.solveAbsoluteValueGeq.bind(this),
                name: 'Absolute Value Inequality (≥)',
                category: 'absolute_value',
                description: 'Solves |ax + b| ≥ c',
                inequalityType: 'absolute_geq'
            },

            // Word problems
            word_at_most: {
                patterns: [
                    /at most/i,
                    /no more than/i,
                    /maximum/i
                ],
                solver: this.solveWordAtMost.bind(this),
                name: 'Word Problem (at most)',
                category: 'word_problems',
                description: 'Problems with "at most" or "no more than"',
                inequalityType: '≤'
            },

            word_at_least: {
                patterns: [
                    /at least/i,
                    /no less than/i,
                    /minimum/i
                ],
                solver: this.solveWordAtLeast.bind(this),
                name: 'Word Problem (at least)',
                category: 'word_problems',
                description: 'Problems with "at least" or "no less than"',
                inequalityType: '≥'
            },

            word_less_than: {
                patterns: [
                    /less than/i,
                    /fewer than/i,
                    /below/i
                ],
                solver: this.solveWordLessThan.bind(this),
                name: 'Word Problem (less than)',
                category: 'word_problems',
                description: 'Problems with "less than" or "fewer than"',
                inequalityType: '<'
            },

            word_greater_than: {
                patterns: [
                    /greater than/i,
                    /more than/i,
                    /exceeds/i,
                    /above/i
                ],
                solver: this.solveWordGreaterThan.bind(this),
                name: 'Word Problem (greater than)',
                category: 'word_problems',
                description: 'Problems with "greater than" or "more than"',
                inequalityType: '>'
            },

            word_between: {
                patterns: [
                    /between/i,
                    /range/i
                ],
                solver: this.solveWordBetween.bind(this),
                name: 'Word Problem (between)',
                category: 'word_problems',
                description: 'Problems with "between" or range',
                inequalityType: 'compound_and'
            },

            // Fractions
            fractions_inequality: {
                patterns: [
                    /fraction.*inequality/i,
                    /\/.*[<>≤≥]/,
                    /\\frac.*[<>]/
                ],
                solver: this.solveFractionInequality.bind(this),
                name: 'Inequality with Fractions',
                category: 'fractions',
                description: 'Solves inequalities containing fractions',
                inequalityType: 'varies'
            },

            // Decimals
            decimals_inequality: {
                patterns: [
                    /\d+\.\d+.*[<>≤≥]/,
                    /decimal.*inequality/i
                ],
                solver: this.solveDecimalInequality.bind(this),
                name: 'Inequality with Decimals',
                category: 'decimals',
                description: 'Solves inequalities containing decimals',
                inequalityType: 'varies'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            one_step: {
                'Subtract from both sides': [
                    'Subtracting instead of adding',
                    'Only subtracting from one side',
                    'Sign errors when subtracting negative numbers',
                    'Forgetting inequality stays same when adding/subtracting'
                ],
                'Divide both sides': [
                    'Dividing only one side',
                    'CRITICAL: Forgetting to reverse inequality when dividing by negative',
                    'Sign errors when dividing by negative coefficient',
                    'Not simplifying fraction'
                ]
            },
            two_step: {
                'Subtract constant term': [
                    'Subtracting in wrong order',
                    'Sign errors with negative constants',
                    'Not simplifying before next step',
                    'Incorrectly changing inequality sign (only changes when multiplying/dividing by negative)'
                ],
                'Divide by coefficient': [
                    'Dividing only one side',
                    'CRITICAL: Forgetting to reverse inequality if coefficient is negative',
                    'Sign errors with negative coefficients',
                    'Arithmetic errors in division'
                ]
            },
            variables_both_sides: {
                'Collect variable terms': [
                    'Moving variable to wrong side',
                    'Sign errors when moving terms',
                    'Forgetting to subtract/add from both sides',
                    'Choosing side that creates negative coefficient (makes sign reversal necessary)'
                ],
                'Combine like terms': [
                    'Incorrect combination of coefficients',
                    'Sign errors in combining',
                    'Forgetting terms',
                    'Not recognizing when final coefficient is negative'
                ]
            },
            compound: {
                'Identify type': [
                    'Confusing AND vs OR',
                    'Mixing up intersection and union',
                    'Incorrectly writing compound inequality',
                    'Not recognizing which type from context'
                ],
                'Solve components': [
                    'Solving each part incorrectly',
                    'Sign reversal errors in components',
                    'Not maintaining inequality consistency'
                ],
                'Combine solutions': [
                    'Using OR when should use AND',
                    'Using AND when should use OR',
                    'Incorrect interval notation',
                    'Wrong graph representation'
                ]
            },
            absolute_value: {
                'Split into cases': [
                    'Using AND when should use OR (for > type)',
                    'Using OR when should use AND (for < type)',
                    'Forgetting to split at all',
                    'Incorrectly setting up the two cases'
                ],
                'Solve components': [
                    'Sign errors in negative case',
                    'Forgetting to negate the right side for one case',
                    'Inequality reversal errors',
                    'Not simplifying before solving'
                ]
            },
            fractions: {
                'Find LCD': [
                    'Incorrect LCD calculation',
                    'Missing denominators',
                    'Confusing LCD with GCF'
                ],
                'Clear denominators': [
                    'Not multiplying all terms',
                    'Forgetting to distribute LCD',
                    'CRITICAL: If LCD could be negative, must consider sign reversal',
                    'Sign errors after clearing'
                ],
                'Negative denominators': [
                    'Not recognizing negative multiplier requires sign reversal',
                    'Incorrectly handling negative fractions'
                ]
            },
            graphing: {
                'Open vs closed circle': [
                    'Using closed circle for strict inequality (< or >)',
                    'Using open circle for non-strict inequality (≤ or ≥)',
                    'Forgetting circle entirely',
                    'Wrong type of endpoint'
                ],
                'Direction': [
                    'Shading/arrow pointing wrong direction',
                    'Not matching direction to inequality sign',
                    'Confusion about which way to shade'
                ],
                'Interval notation': [
                    'Using bracket [ ] when should use parenthesis ( )',
                    'Using parenthesis when should use bracket',
                    'Incorrect infinity symbol usage',
                    'Wrong order of endpoints'
                ]
            },
            sign_reversal: {
                'When to reverse': [
                    'CRITICAL: Forgetting to reverse when multiplying by negative',
                    'CRITICAL: Forgetting to reverse when dividing by negative',
                    'Reversing when adding/subtracting (should NOT reverse)',
                    'Reversing when multiplying/dividing by positive (should NOT reverse)'
                ],
                'Recognizing negative': [
                    'Not recognizing coefficient is negative',
                    'Missing negative sign in complex expressions',
                    'Sign errors in simplification',
                    'Not tracking sign through multiple steps'
                ]
            }
        };

        this.errorPrevention = {
            sign_reversal_rule: {
                reminder: 'CRITICAL: Reverse inequality ONLY when multiplying or dividing by NEGATIVE number',
                method: 'Always identify sign of multiplier/divisor before proceeding',
                check: 'Ask yourself: "Is this number I\'m dividing/multiplying by negative?"'
            },
            both_sides: {
                reminder: 'Whatever you do to one side, do to the other',
                method: 'Draw a vertical line to represent the inequality sign',
                check: 'Verify both sides have same operation applied'
            },
            inequality_direction: {
                reminder: 'Inequality direction ONLY changes when multiplying/dividing by negative',
                method: 'Circle all multiplication/division steps and check sign',
                check: 'Did I multiply/divide by negative? If yes, did I reverse the sign?'
            },
            open_vs_closed: {
                reminder: 'Use open circle/parenthesis for < or >, closed circle/bracket for ≤ or ≥',
                method: 'Think: "equal to" means "closed" or "included"',
                check: 'Does my inequality have "or equal to"? Then use closed/bracket.'
            },
            compound_type: {
                reminder: 'AND means overlap (between), OR means either region (outside)',
                method: 'Draw number line to visualize',
                check: 'Does it say "between"? That\'s AND. Does it say "outside"? That\'s OR.'
            },
            absolute_value_type: {
                reminder: '|x| < c means AND (between -c and c), |x| > c means OR (outside that range)',
                method: 'Think of distance: less than c means close (AND), greater than c means far (OR)',
                check: 'Is it less than? Use AND. Is it greater than? Use OR.'
            },
            verify_solution: {
                reminder: 'Always test a value from solution region in original inequality',
                method: 'Pick an easy number from your solution set and substitute',
                check: 'Does the inequality remain true with my test value?'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this step works and its mathematical meaning for inequalities',
                language: 'intuitive and meaning-focused, emphasizing inequality relationships'
            },
            procedural: {
                focus: 'Exact sequence of operations to perform, including when to reverse inequality',
                language: 'step-by-step instructions with sign reversal warnings'
            },
            visual: {
                focus: 'Graphical and spatial understanding of solution regions',
                language: 'visual and spatial metaphors, number line representations'
            },
            algebraic: {
                focus: 'Formal algebraic rules and properties of inequalities',
                language: 'precise mathematical terminology and inequality properties'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete numbers and simple cases',
                signReversal: 'Always highlight when sign reverses'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of concrete and abstract',
                signReversal: 'Note sign reversal clearly'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 years old - simplest possible terms',
                detail: 'every tiny step explained with analogies',
                examples: 'real-world analogies and stories',
                analogies: true,
                visualization: 'simple pictures and drawings',
                signReversal: 'Use simple analogy for why sign reverses'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive explanations with reasoning',
                examples: 'abstract and generalized cases',
                signReversal: 'Explain mathematical justification for sign reversal'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty progression',
                signReversal: 'Build understanding of sign reversal through guided questions'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            budget_constraints: {
                scenario: "Spending limits and budget planning",
                inequalityType: "≤",
                examples: [
                    "You have at most $100 to spend on groceries. If each item costs $8, how many items can you buy?",
                    "Your monthly phone bill must be no more than $50. The plan costs $25 plus $0.10 per minute. How many minutes can you use?"
                ],
                context: "Budget constraints help manage spending and financial planning",
                keyPhrase: "at most, no more than"
            },
            minimum_requirements: {
                scenario: "Meeting minimum standards or requirements",
                inequalityType: "≥",
                examples: [
                    "You need at least 70% to pass the course. If the final exam is worth 40% and you have 65% so far, what do you need on the final?",
                    "A delivery truck must carry at least 2000 pounds. If each box weighs 150 pounds, how many boxes are needed?"
                ],
                context: "Minimum requirements ensure standards are met",
                keyPhrase: "at least, no less than, minimum"
            },
            speed_limits: {
                scenario: "Maximum speed restrictions",
                inequalityType: "≤",
                examples: [
                    "The speed limit is 65 mph. What speeds are legal?",
                    "A factory machine should run at no more than 5000 RPM. What are safe operating speeds?"
                ],
                context: "Speed limits ensure safety and compliance",
                keyPhrase: "at most, no more than, speed limit"
            },
            temperature_ranges: {
                scenario: "Temperature must stay within a range",
                inequalityType: "compound_and",
                examples: [
                    "Medicine must be stored between 36°F and 46°F. What temperatures are acceptable?",
                    "Comfortable room temperature is between 68°F and 75°F. Express this as a compound inequality."
                ],
                context: "Temperature ranges ensure proper storage, comfort, or safety",
                keyPhrase: "between, from...to"
            },
            capacity_limits: {
                scenario: "Maximum capacity or volume constraints",
                inequalityType: "≤",
                examples: [
                    "An elevator can hold at most 2000 pounds. If each person averages 180 pounds, how many people can ride?",
                    "A parking lot holds no more than 150 cars. How many spaces can be filled?"
                ],
                context: "Capacity limits ensure safety and prevent overload",
                keyPhrase: "at most, no more than, maximum capacity"
            },
            age_restrictions: {
                scenario: "Minimum age requirements",
                inequalityType: "≥",
                examples: [
                    "You must be at least 16 to get a driver's license. What ages qualify?",
                    "Children under 12 ride free. Express ages that must pay."
                ],
                context: "Age restrictions ensure safety and legal compliance",
                keyPhrase: "at least, under, must be"
            },
            distance_time: {
                scenario: "Distance or time constraints",
                inequalityType: "varies",
                examples: [
                    "You want to travel at least 300 miles. Driving at 60 mph, how long must you drive?",
                    "A runner wants to finish a race in less than 2 hours. At what pace must they run?"
                ],
                context: "Distance-time problems with constraints",
                keyPhrase: "at least, less than, more than"
            },
            grading_systems: {
                scenario: "Grade requirements and scoring",
                inequalityType: "≥ or >",
                examples: [
                    "You need more than 90% for an A. If you have 88% and one test left (worth 20%), what must you score?",
                    "To pass, you need at least 60 points out of 100. How many more points do you need if you have 45?"
                ],
                context: "Grade requirements determine academic standing",
                keyPhrase: "at least, more than, passing grade"
            },
            profit_loss: {
                scenario: "Business profit constraints",
                inequalityType: ">",
                examples: [
                    "A company needs profit greater than $50,000. If revenue is $200,000, what is the maximum cost allowed?",
                    "To make money, revenue must exceed costs. Express this relationship."
                ],
                context: "Profit constraints drive business decisions",
                keyPhrase: "greater than, more than, exceeds"
            },
            tolerance_ranges: {
                scenario: "Manufacturing tolerance and quality control",
                inequalityType: "absolute_value",
                examples: [
                    "A bolt must be 5 cm long with tolerance of ±0.1 cm. What lengths are acceptable?",
                    "Temperature should be 100°F with variation no more than 3°F. Express as absolute value inequality."
                ],
                context: "Tolerance ranges ensure quality and precision",
                keyPhrase: "within, tolerance, plus or minus"
            },
            comparison_problems: {
                scenario: "Comparing two plans or options",
                inequalityType: "varies",
                examples: [
                    "Plan A costs $30 + $0.10/min. Plan B costs $40 + $0.05/min. When is Plan A cheaper?",
                    "Taxi A charges $2.50 + $1/mile. Taxi B charges $5 + $0.75/mile. When is Taxi B cheaper?"
                ],
                context: "Comparison helps choose the best option",
                keyPhrase: "cheaper than, more expensive, when is...better"
            },
            health_ranges: {
                scenario: "Healthy ranges for medical values",
                inequalityType: "compound_and",
                examples: [
                    "Normal blood pressure is between 90 and 120 systolic. Express this range.",
                    "Healthy body temperature is between 97.8°F and 99.1°F. What temperatures are normal?"
                ],
                context: "Health ranges indicate normal versus concerning values",
                keyPhrase: "between, normal range, healthy"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            one_step: {
                skills: ['Addition/Subtraction', 'Multiplication/Division', 'Understanding of inequality symbols', 'Number line basics'],
                priorKnowledge: ['Inverse operations', 'Inequality symbol meanings (<, >, ≤, ≥)', 'Sign reversal rule for negatives'],
                checkQuestions: [
                    "What does x < 5 mean?",
                    "What is 8 + 5?",
                    "What is 12 ÷ 3?",
                    "What happens to < when you multiply both sides by -1?"
                ]
            },
            two_step: {
                skills: ['Order of operations', 'One-step inequalities', 'Combining operations', 'Sign reversal awareness'],
                priorKnowledge: ['PEMDAS', 'Inverse operations in sequence', 'When inequality sign reverses'],
                checkQuestions: [
                    "Solve x + 5 < 12",
                    "What is 2 × 5 + 3?",
                    "When does < become >?",
                    "Solve 3x ≤ 15"
                ]
            },
            variables_both_sides: {
                skills: ['Two-step inequalities', 'Combining like terms', 'Negative coefficients', 'Strategic variable collection'],
                priorKnowledge: ['Moving terms across inequality sign', 'Sign rules', 'When to reverse inequality'],
                checkQuestions: [
                    "Solve 2x + 3 < 11",
                    "Simplify 5x - 2x",
                    "What is 7 - (-3)?",
                    "Does -2x < 6 become x > -3 or x < -3?"
                ]
            },
            compound: {
                skills: ['One and two-step inequalities', 'Understanding AND vs OR', 'Interval notation', 'Set operations'],
                priorKnowledge: ['Intersection (AND)', 'Union (OR)', 'Number line graphing', 'Compound inequality notation'],
                checkQuestions: [
                    "What does 'and' mean for solution sets?",
                    "What does 'or' mean for solution sets?",
                    "Graph x > 3 on a number line",
                    "What does 2 < x < 5 mean?"
                ]
            },
            absolute_value: {
                skills: ['Absolute value concept', 'Compound inequalities', 'Understanding distance', 'Splitting cases'],
                priorKnowledge: ['|x| means distance from zero', 'Two-case nature of absolute value', 'AND vs OR for < vs >'],
                checkQuestions: [
                    "What is |-5|?",
                    "If |x| = 3, what could x be?",
                    "Does |x| < 3 use AND or OR?",
                    "Does |x| > 3 use AND or OR?"
                ]
            },
            fractions: {
                skills: ['Fraction operations', 'LCD', 'Fraction multiplication', 'Sign awareness with fractions'],
                priorKnowledge: ['Equivalent fractions', 'Finding LCD', 'Clearing fractions', 'Sign reversal with negative LCD'],
                checkQuestions: [
                    "What is 1/2 + 1/3?",
                    "Find LCD of 4 and 6",
                    "If you multiply both sides of x/(-2) < 4 by -2, what happens?",
                    "Multiply: 3 × (2/5)"
                ]
            },
            word_problems: {
                skills: ['Reading comprehension', 'Translating words to inequalities', 'Identifying inequality type', 'Contextual interpretation'],
                priorKnowledge: [
                    'Key phrases (at most, at least, less than, greater than, between)',
                    'Setting up inequalities from constraints',
                    'Choosing correct inequality symbol'
                ],
                checkQuestions: [
                    "What inequality symbol for 'at most'?",
                    "What inequality symbol for 'at least'?",
                    "What does 'between 5 and 10' mean?",
                    "If x is 'more than 7', write the inequality"
                ]
            },
            graphing: {
                skills: ['Number line understanding', 'Open vs closed circles', 'Direction/shading', 'Interval notation'],
                priorKnowledge: ['Circle types for endpoints', 'Arrow direction', 'Parentheses vs brackets', 'Infinity symbol'],
                checkQuestions: [
                    "For x < 5, do you use open or closed circle at 5?",
                    "For x ≥ 3, which way does the arrow point?",
                    "How do you write x > 2 in interval notation?",
                    "What does (-∞, 5] mean?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            number_line: {
                description: "Solution as region on number line",
                analogy: "Shaded area shows all valid values, like marking a range on a ruler",
                visualization: "Draw number line with appropriate circle (open/closed) and arrow/shading",
                suitableFor: ['all_inequalities'],
                explanation: "The solution is the entire shaded region, not just one point",
                components: {
                    openCircle: "For < and > (value not included)",
                    closedCircle: "For ≤ and ≥ (value included)",
                    arrow: "Shows direction of all solutions",
                    shading: "Alternative to arrow, highlights solution region"
                }
            },
            interval_notation: {
                description: "Solution expressed as interval",
                analogy: "Like writing a range using parentheses and brackets",
                visualization: "Use ( ) for open endpoints, [ ] for closed endpoints",
                suitableFor: ['all_inequalities'],
                explanation: "Compact notation showing solution range with endpoint inclusion",
                rules: {
                    openParenthesis: "Endpoint not included (< or >)",
                    closedBracket: "Endpoint included (≤ or ≥)",
                    infinity: "Always use parenthesis with ∞ or -∞",
                    union: "Use ∪ symbol for OR compound inequalities"
                }
            },
            inequality_reversal: {
                description: "Visual reminder of when to reverse inequality",
                analogy: "Like flipping a sign when you flip the perspective",
                visualization: "Draw arrow that flips when multiplying/dividing by negative",
                suitableFor: ['all_with_negatives'],
                explanation: "Multiplying/dividing by negative flips the inequality direction",
                criticalRule: "ONLY reverses for multiplication/division by negative, NOT for addition/subtraction"
            },
            balance_with_tilt: {
                description: "Inequality as tilted balance",
                analogy: "Unlike equation (balanced scale), inequality is tilted one direction",
                visualization: "Draw scale tilted showing one side heavier",
                suitableFor: ['basic_inequalities'],
                explanation: "One side is greater (heavier) than the other"
            },
            region_on_graph: {
                description: "Solution as shaded region on coordinate plane",
                analogy: "Like marking a zone on a map",
                visualization: "Shade region where inequality is satisfied",
                suitableFor: ['two_variable_inequalities'],
                explanation: "All points in shaded region satisfy the inequality"
            },
            compound_overlap: {
                description: "Compound AND as overlapping regions",
                analogy: "Like finding overlap of two circles in a Venn diagram",
                visualization: "Draw two regions and highlight where they overlap",
                suitableFor: ['compound_and'],
                explanation: "Solution is where both conditions are true (intersection)"
            },
            compound_union: {
                description: "Compound OR as combined regions",
                analogy: "Like combining two separate areas on a map",
                visualization: "Draw two separate regions",
                suitableFor: ['compound_or'],
                explanation: "Solution is anywhere either condition is true (union)"
            },
            absolute_distance: {
                description: "Absolute value as distance from point",
                analogy: "Like measuring distance from home - direction doesn't matter",
                visualization: "Draw number line with center point and distance markers both ways",
                suitableFor: ['absolute_value'],
                explanation: "Absolute value measures distance, so same distance in either direction"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "x + 5 < 12",
                    solution: "x < 7",
                    interval: "(-∞, 7)",
                    steps: ["Subtract 5 from both sides", "x < 12 - 5", "x < 7"],
                    difficulty: "easy",
                    signReversal: false
                },
                {
                    problem: "3x ≤ 15",
                    solution: "x ≤ 5",
                    interval: "(-∞, 5]",
                    steps: ["Divide both sides by 3", "x ≤ 15/3", "x ≤ 5"],
                    difficulty: "easy",
                    signReversal: false
                },
                {
                    problem: "-2x < 10",
                    solution: "x > -5",
                    interval: "(-5, ∞)",
                    steps: ["Divide both sides by -2", "REVERSE inequality sign", "x > 10/(-2)", "x > -5"],
                    difficulty: "easy",
                    signReversal: true,
                    warning: "Sign reverses because dividing by negative"
                }
            ],
            intermediate: [
                {
                    problem: "2x + 3 < 11",
                    solution: "x < 4",
                    interval: "(-∞, 4)",
                    steps: ["Subtract 3 from both sides", "2x < 8", "Divide by 2", "x < 4"],
                    difficulty: "medium",
                    signReversal: false
                },
                {
                    problem: "-3x + 5 ≥ 14",
                    solution: "x ≤ -3",
                    interval: "(-∞, -3]",
                    steps: ["Subtract 5", "-3x ≥ 9", "Divide by -3", "REVERSE sign", "x ≤ -3"],
                    difficulty: "medium",
                    signReversal: true,
                    warning: "Sign reverses when dividing by -3"
                },
                {
                    problem: "3x - 7 > 2x + 5",
                    solution: "x > 12",
                    interval: "(12, ∞)",
                    steps: ["Subtract 2x", "x - 7 > 5", "Add 7", "x > 12"],
                    difficulty: "medium",
                    signReversal: false
                }
            ],
            advanced: [
                {
                    problem: "2(x - 3) + 5 ≤ 3x - 1",
                    solution: "x ≥ 0",
                    interval: "[0, ∞)",
                    steps: ["Distribute: 2x - 6 + 5 ≤ 3x - 1", "Combine: 2x - 1 ≤ 3x - 1", "Subtract 2x: -1 ≤ x - 1", "Add 1: 0 ≤ x", "Rewrite: x ≥ 0"],
                    difficulty: "hard",
                    signReversal: false
                },
                {
                    problem: "|x - 3| < 5",
                    solution: "-2 < x < 8",
                    interval: "(-2, 8)",
                    steps: ["Split into AND compound", "-5 < x - 3 < 5", "Add 3 to all parts", "-2 < x < 8"],
                    difficulty: "hard",
                    signReversal: false,
                    type: "absolute_value"
                },
                {
                    problem: "|2x + 1| ≥ 7",
                    solution: "x ≤ -4 or x ≥ 3",
                    interval: "(-∞, -4] ∪ [3, ∞)",
                    steps: ["Split into OR compound", "2x + 1 ≤ -7 or 2x + 1 ≥ 7", "Solve each", "x ≤ -4 or x ≥ 3"],
                    difficulty: "hard",
                    signReversal: false,
                    type: "absolute_value"
                }
            ],
            byMethod: {
                one_step: [
                    { problem: "x + 8 < 15", solution: "x < 7", interval: "(-∞, 7)" },
                    { problem: "x - 4 ≥ 10", solution: "x ≥ 14", interval: "[14, ∞)" },
                    { problem: "5x ≤ 35", solution: "x ≤ 7", interval: "(-∞, 7]" },
                    { problem: "-3x > 12", solution: "x < -4", interval: "(-∞, -4)", reversal: true }
                ],
                two_step: [
                    { problem: "2x + 5 < 15", solution: "x < 5", interval: "(-∞, 5)" },
                    { problem: "3x - 7 ≥ 11", solution: "x ≥ 6", interval: "[6, ∞)" },
                    { problem: "-4x + 3 ≤ -9", solution: "x ≥ 3", interval: "[3, ∞)", reversal: true }
                ],
                variables_both_sides: [
                    { problem: "3x + 5 > 2x + 12", solution: "x > 7", interval: "(7, ∞)" },
                    { problem: "5x - 3 ≤ 3x + 9", solution: "x ≤ 6", interval: "(-∞, 6]" },
                    { problem: "4x + 1 < 6x - 5", solution: "x > 3", interval: "(3, ∞)" }
                ],
                compound: [
                    { problem: "-3 < x < 5", solution: "-3 < x < 5", interval: "(-3, 5)", type: "AND" },
                    { problem: "x < -2 or x > 4", solution: "x < -2 or x > 4", interval: "(-∞, -2) ∪ (4, ∞)", type: "OR" }
                ],
                absolute_value: [
                    { problem: "|x| < 5", solution: "-5 < x < 5", interval: "(-5, 5)", type: "less" },
                    { problem: "|x| ≥ 3", solution: "x ≤ -3 or x ≥ 3", interval: "(-∞, -3] ∪ [3, ∞)", type: "greater" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            sign_reversal_misunderstanding: {
                misconception: "Thinking inequality always reverses, or never reverses",
                reality: "Inequality reverses ONLY when multiplying or dividing by a NEGATIVE number",
                correctiveExample: "For 2x < 6, divide by 2 (positive): x < 3 (NO reversal). For -2x < 6, divide by -2 (negative): x > -3 (REVERSAL)",
                commonIn: ['all_types'],
                criticalRule: "Check the sign of your multiplier/divisor every time"
            },
            addition_subtraction_reversal: {
                misconception: "Thinking inequality reverses when adding or subtracting",
                reality: "Inequality NEVER reverses for addition or subtraction",
                correctiveExample: "x + 5 < 10, subtract 5: x < 5 (sign stays same)",
                commonIn: ['one_step', 'two_step']
            },
            open_closed_confusion: {
                misconception: "Using wrong circle type or bracket/parenthesis",
                reality: "< and > use open circle/parenthesis; ≤ and ≥ use closed circle/bracket",
                correctiveExample: "x < 5: open circle at 5, (-∞, 5). x ≤ 5: closed circle at 5, (-∞, 5]",
                commonIn: ['graphing', 'interval_notation'],
                mnemonic: "'Equal to' means 'closed' - the endpoint is included"
            },
            compound_and_or_confusion: {
                misconception: "Confusing when to use AND vs OR in compound inequalities",
                reality: "AND means overlap (between), OR means either region (outside)",
                correctiveExample: "Between 2 and 5: 2 < x < 5 (AND). Outside that range: x < 2 or x > 5 (OR)",
                commonIn: ['compound'],
                visualAid: "Draw number line to see overlap vs separate regions"
            },
            absolute_value_and_or: {
                misconception: "Using AND when should use OR for |x| > c, or OR when should use AND for |x| < c",
                reality: "|x| < c uses AND (between -c and c), |x| > c uses OR (outside that range)",
                correctiveExample: "|x| < 3: -3 < x < 3 (AND). |x| > 3: x < -3 or x > 3 (OR)",
                commonIn: ['absolute_value'],
                mnemonic: "Less than = close = AND. Greater than = far = OR"
            },
            one_sided_operations: {
                misconception: "Only performing operation on one side",
                reality: "Must maintain inequality by doing same to both sides",
                correctiveExample: "If x + 5 < 12, must subtract 5 from BOTH sides",
                commonIn: ['all_types']
            },
            infinity_bracket: {
                misconception: "Using bracket [ or ] with infinity symbol",
                reality: "Always use parenthesis with ∞ or -∞ because infinity is not a number that can be reached",
                correctiveExample: "x > 5: (5, ∞) NOT [5, ∞). x ≥ 5: [5, ∞) is correct",
                commonIn: ['interval_notation']
            },
            solution_is_one_number: {
                misconception: "Thinking inequality has one solution like an equation",
                reality: "Inequalities have infinitely many solutions forming an interval",
                correctiveExample: "x < 5 means all numbers less than 5: ..., 4.9, 4.5, 4, 3, 2, 1, 0, -1, ...",
                commonIn: ['basic_inequalities']
            },
            negative_coefficient_oversight: {
                misconception: "Not noticing that final coefficient is negative",
                reality: "After combining terms, check if variable coefficient is negative",
                correctiveExample: "3x < 2x + 5 becomes x < 5 (positive coeff). But 2x < 3x + 5 becomes -x < 5, then x > -5 (reversal!)",
                commonIn: ['variables_both_sides']
            },
            word_problem_inequality_choice: {
                misconception: "Using wrong inequality symbol for word problem",
                reality: "'At most' means ≤, 'at least' means ≥, 'less than' means <, 'greater than' means >",
                correctiveExample: "'At most $50' means ≤ 50, NOT < 50. 'More than 10' means > 10, NOT ≥ 10",
                commonIn: ['word_problems'],
                keyPhrases: "Learn the exact meanings of constraint words"
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            inequality_as_range: {
                analogy: "Acceptable zone on a thermometer",
                explanation: "Just like 'keep temperature between 60° and 80°', inequalities define acceptable ranges",
                suitableFor: ['all_inequalities'],
                ELI5: "Think of it like the safe zone in a game - you can be anywhere in that zone, not just one spot"
            },
            sign_reversal_as_mirror: {
                analogy: "Flipping a mirror image",
                explanation: "When you multiply by a negative, you flip everything to the opposite side, like looking in a mirror",
                suitableFor: ['sign_reversal'],
                ELI5: "Imagine you're facing right and someone turns you around to face left - everything flips! That's what multiplying by a negative does to the inequality sign"
            },
            open_vs_closed: {
                analogy: "Door open or closed",
                explanation: "Open circle means 'can't include this number' like an open door you can't step on. Closed circle means 'include this number' like a closed door you can stand on",
                suitableFor: ['graphing'],
                ELI5: "Open circle is like a bubble you can't touch. Closed circle is like a button you can press. The inequality tells you which one to use"
            },
            compound_and: {
                analogy: "Both requirements for a club",
                explanation: "AND compound is like needing BOTH a ticket AND an ID to get in - you must satisfy both conditions",
                suitableFor: ['compound_and'],
                ELI5: "It's like needing to be both tall enough AND old enough for a ride - you need BOTH things to be true"
            },
            compound_or: {
                analogy: "Either qualification works",
                explanation: "OR compound is like 'you can pay with cash OR credit' - either one works, you don't need both",
                suitableFor: ['compound_or'],
                ELI5: "It's like 'you can have ice cream OR cake' - you just need one to be true, not both"
            },
            absolute_value_distance: {
                analogy: "Distance from home",
                explanation: "Absolute value is like distance - it doesn't matter if you go 5 blocks north or 5 blocks south, you're still 5 blocks from home",
                suitableFor: ['absolute_value'],
                ELI5: "If you walk 10 steps from your room, you're 10 steps away whether you went forward or backward. That's absolute value!"
            },
            solution_region: {
                analogy: "Coloring inside the lines",
                explanation: "The solution region is like the area where you're allowed to color - any point in that region works",
                suitableFor: ['graphing'],
                ELI5: "It's like having a coloring area - you can color anywhere in that space, not just one spot"
            },
            number_line_arrow: {
                analogy: "Wind direction showing all possibilities",
                explanation: "The arrow shows all the numbers that work, stretching infinitely in that direction",
                suitableFor: ['graphing'],
                ELI5: "The arrow is like pointing to say 'all these numbers over here work!' and it keeps going and going"
            },
            interval_notation: {
                analogy: "Brackets holding books on a shelf",
                explanation: "Brackets [ ] hold the number in (included), parentheses ( ) leave it out (excluded)",
                suitableFor: ['interval_notation'],
                ELI5: "Square brackets are like grabbing the number and keeping it. Round parentheses are like the number slips away"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            one_step_addition: {
                level1: "What operation is being done to x?",
                level2: "You have x + something. What's the opposite of addition?",
                level3: "Subtract the number from both sides. Does the inequality sign change?",
                level4: "Subtract {value} from both sides. Inequality stays the same because we're not multiplying/dividing by negative."
            },
            one_step_multiplication: {
                level1: "What operation is being done to x?",
                level2: "You have a number times x. What's the opposite of multiplication?",
                level3: "Divide both sides by the coefficient. Is the coefficient positive or negative?",
                level4: "Divide both sides by {coefficient}. {reversal_warning}"
            },
            two_step: {
                level1: "What operations are being done to x, and in what order?",
                level2: "Undo the operations in reverse order - addition/subtraction first, then multiplication/division",
                level3: "First remove the constant term, then handle the coefficient. Watch the coefficient's sign!",
                level4: "Subtract {constant}, then divide by {coefficient}. {reversal_warning}"
            },
            variables_both_sides: {
                level1: "What's different about this inequality?",
                level2: "The variable appears on both sides. Can you collect all x terms on one side?",
                level3: "Subtract one of the x terms from both sides. Choose strategically to avoid negatives if possible.",
                level4: "Subtract {smaller_coefficient}x from both sides, then solve normally. {reversal_warning}"
            },
            compound_and: {
                level1: "What type of compound inequality is this?",
                level2: "This is an AND compound (both conditions must be true). How do you solve it?",
                level3: "The solution is the overlap region. Solve for the middle variable.",
                level4: "Work with all three parts simultaneously, doing the same operation to all three."
            },
            compound_or: {
                level1: "What type of compound inequality is this?",
                level2: "This is an OR compound (either condition can be true). How do you solve it?",
                level3: "Solve each inequality separately, then combine with 'or' (union).",
                level4: "Solve {first_inequality} and {second_inequality} separately, then express as union."
            },
            absolute_value_less: {
                level1: "What does |expression| < number mean in terms of distance?",
                level2: "|expression| < c means the expression is within c units of zero. How do you write that?",
                level3: "This becomes a compound AND inequality: -c < expression < c",
                level4: "Rewrite as -{value} < {expression} < {value}, then solve the compound inequality."
            },
            absolute_value_greater: {
                level1: "What does |expression| > number mean in terms of distance?",
                level2: "|expression| > c means the expression is more than c units from zero. How do you write that?",
                level3: "This becomes a compound OR inequality: expression < -c or expression > c",
                level4: "Rewrite as {expression} < -{value} or {expression} > {value}, then solve both parts."
            },
            fractions: {
                level1: "What makes this inequality tricky?",
                level2: "Fractions make it complicated. Can you eliminate them?",
                level3: "Find the LCD of all denominators and multiply everything by it. Is the LCD positive or negative?",
                level4: "Multiply both sides by {LCD}. {reversal_warning}"
            },
            word_problem: {
                level1: "What is the problem asking for?",
                level2: "What key words tell you which inequality symbol to use?",
                level3: "Identify the constraint: {constraint_type}. Set up the inequality.",
                level4: "Key phrase '{phrase}' means {symbol}. Set up: {inequality_setup}"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Solve: x + 7 < 15",
                    answer: "x < 8",
                    assesses: "one_step_addition",
                    difficulty: "basic"
                },
                {
                    question: "Solve: 3x ≥ 21",
                    answer: "x ≥ 7",
                    assesses: "one_step_multiplication",
                    difficulty: "basic"
                },
                {
                    question: "Solve: -2x > 10",
                    answer: "x < -5",
                    assesses: "one_step_multiplication_negative",
                    difficulty: "basic",
                    criticalSkill: "sign_reversal"
                },
                {
                    question: "Solve: 2x + 5 ≤ 17",
                    answer: "x ≤ 6",
                    assesses: "two_step",
                    difficulty: "intermediate"
                },
                {
                    question: "Solve: 4x - 3 > 2x + 7",
                    answer: "x > 5",
                    assesses: "variables_both_sides",
                    difficulty: "intermediate"
                },
                {
                    question: "Solve: |x| < 5",
                    answer: "-5 < x < 5",
                    assesses: "absolute_value_less",
                    difficulty: "advanced"
                }
            ],
            formative: [
                {
                    question: "When does the inequality sign reverse?",
                    options: [
                        "When adding or subtracting",
                        "When multiplying or dividing by a positive number",
                        "When multiplying or dividing by a negative number",
                        "Never"
                    ],
                    correct: "When multiplying or dividing by a negative number",
                    explanation: "CRITICAL: The inequality sign reverses ONLY when multiplying or dividing both sides by a negative number"
                },
                {
                    question: "For x ≥ 3, what type of circle do you use on a number line?",
                    options: ["Open circle", "Closed circle", "No circle", "Either works"],
                    correct: "Closed circle",
                    explanation: "≥ includes 'equal to', so the endpoint is included (closed circle)"
                },
                {
                    question: "What does |x| < 5 become when you remove the absolute value?",
                    options: [
                        "-5 < x < 5",
                        "x < -5 or x > 5",
                        "x < 5",
                        "-5 < x or x < 5"
                    ],
                    correct: "-5 < x < 5",
                    explanation: "|x| < c means x is within c units of zero, so it's a compound AND inequality"
                },
                {
                    question: "To solve -3x + 7 > 1, after subtracting 7, you get -3x > -6. What's next?",
                    options: [
                        "Divide by -3, keep sign the same: x > 2",
                        "Divide by -3, reverse sign: x < 2",
                        "Divide by 3: x > -2",
                        "Multiply by -3: x < 18"
                    ],
                    correct: "Divide by -3, reverse sign: x < 2",
                    explanation: "Dividing by -3 requires reversing the inequality sign"
                }
            ],
            summative: [
                {
                    question: "Solve: -2(x - 3) + 5 ≤ 3x + 1",
                    answer: "x ≥ 2",
                    showsWork: true,
                    rubric: {
                        distribute: 1,
                        combine_terms: 1,
                        isolate_variable: 1,
                        handle_sign_reversal: 2,
                        express_interval: 1
                    }
                },
                {
                    question: "Solve: |2x - 3| > 7",
                    answer: "x < -2 or x> 5",
                    showsWork: true,
                    rubric: {
                        identify_type: 1,
                        split_correctly: 2,
                        solve_both_parts: 1,
                        combine_with_or: 1,
                        interval_notation: 1
                    }
                },
                {
                    question: "A cell phone plan costs $30 per month plus $0.15 per text message. You have at most $50 to spend. How many text messages can you send?",
                    answer: "t ≤ 133.33, so at most 133 messages",
                    showsWork: true,
                    rubric: {
                        setup_inequality: 2,
                        solve_correctly: 2,
                        interpret_context: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "x + 5 < 12",
                    "x - 3 ≥ 8",
                    "4x ≤ 20",
                    "x/2 > 6",
                    "-x < 5"
                ],
                medium: [
                    "3x + 7 ≤ 22",
                    "5x - 4 > 16",
                    "2x + 3 < x + 10",
                    "-3x + 5 ≥ -10",
                    "-2x - 1 > 7"
                ],
                hard: [
                    "2(3x - 4) ≤ 4(x + 1)",
                    "-3(x + 2) > 2(x - 5)",
                    "|2x - 3| < 7",
                    "|x + 1| ≥ 4",
                    "-5 < 2x + 1 < 9"
                ]
            },
            byObjective: {
                canSolveOneStep: [
                    "x + 9 < 14",
                    "x - 5 ≥ 11",
                    "6x ≤ 42",
                    "-4x > 12"
                ],
                canSolveTwoStep: [
                    "4x + 3 < 19",
                    "5x - 2 ≥ 18",
                    "-3x + 4 ≤ 13",
                    "2x + 7 > 1"
                ],
                canSolveVariablesBothSides: [
                    "3x + 5 < 2x + 11",
                    "4x - 3 ≥ 2x + 7",
                    "5x + 2 > 3x - 4"
                ],
                canHandleSignReversal: [
                    "-2x < 10",
                    "-5x ≥ 15",
                    "-x + 3 > 7",
                    "3 - 2x ≤ 11"
                ],
                canSolveCompound: [
                    "-3 < x < 5",
                    "x < -2 or x > 4",
                    "1 ≤ 2x + 3 ≤ 11"
                ],
                canSolveAbsoluteValue: [
                    "|x| < 5",
                    "|x - 2| ≤ 3",
                    "|x + 1| > 4",
                    "|2x - 1| ≥ 5"
                ],
                canSolveWordProblems: [
                    "You have at most $100. Items cost $8 each. How many can you buy?",
                    "You need at least 70% to pass. Current average is 65%. Final is worth 40%. What do you need?",
                    "Temperature must stay between 60°F and 80°F. Express as inequality."
                ],
                canGraphSolutions: [
                    "Graph x < 5 on number line",
                    "Graph x ≥ -2 on number line",
                    "Graph -3 < x ≤ 4 on number line"
                ],
                canWriteIntervalNotation: [
                    "Write x > 3 in interval notation",
                    "Write -2 ≤ x < 5 in interval notation",
                    "Write x < -1 or x ≥ 4 in interval notation"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "one_operation": "One-step inequality - use inverse operation, check if multiplying/dividing by negative",
                "two_operations": "Two-step inequality - undo in reverse order, watch for negative coefficient at end",
                "variables_both_sides": "Collect variables on one side (choose strategically), watch for negative coefficient",
                "parentheses_present": "Distribute first, then solve, watching for sign reversal opportunities",
                "fractions_present": "Clear fractions by multiplying by LCD (check if LCD is negative!)",
                "decimals_present": "Clear decimals by multiplying by power of 10 (always positive, no reversal)",
                "absolute_value": "Determine type (< or >), split appropriately (AND or OR)",
                "compound_and": "Solve for middle variable, maintaining all parts",
                "compound_or": "Solve each part separately, combine with union"
            },
            whenToUseWhat: {
                inverse_operations: "For all inequalities, same as equations but watch for sign reversal",
                clearing_fractions: "When fractions complicate the inequality - but check LCD sign!",
                clearing_decimals: "When decimals make arithmetic difficult (no sign reversal issue)",
                collecting_variables: "When variable appears on both sides - choose side to avoid negatives",
                distributive_property: "When parentheses contain variables",
                and_compound: "For 'between' situations or |expression| < value",
                or_compound: "For 'outside range' situations or |expression| > value"
            },
            methodSelection: {
                factorsToConsider: [
                    "Number of operations on the variable",
                    "Presence of fractions or decimals (and their signs)",
                    "Variables on one or both sides",
                    "Sign of coefficients (positive or negative)",
                    "Type of inequality symbol (<, >, ≤, ≥)",
                    "Absolute value present or not",
                    "Compound inequality (AND or OR)"
                ],
                generalApproach: [
                    "1. Identify inequality type and symbol",
                    "2. Simplify both sides (distribute, combine like terms)",
                    "3. Move variables to one side, constants to other",
                    "4. Combine like terms",
                    "5. Isolate variable using inverse operations",
                    "6. CHECK: If multiplying/dividing by negative, REVERSE inequality sign",
                    "7. Express solution in interval notation",
                    "8. Graph on number line",
                    "9. Verify with test value"
                ],
                criticalCheckpoints: [
                    "Before dividing/multiplying: Is this number negative? If yes, REVERSE sign",
                    "After each step: Does the inequality still make sense?",
                    "Final answer: Does test value satisfy original inequality?"
                ]
            },
            optimizationTips: {
                "Choose easier side for variables": "Collect variables on side with larger coefficient to avoid negative result",
                "Avoid negative coefficients": "Strategic side choice can prevent sign reversal necessity",
                "Integer coefficients preferred": "Clear fractions/decimals early if helpful, but watch signs",
                "Simplify first": "Always simplify before moving terms",
                "Check as you go": "Verify each step to catch errors early, especially sign reversals",
                "Use test values": "After solving, test a value from solution region to verify"
            },
            signReversalChecklist: [
                "☐ Identified all multiplication/division operations",
                "☐ Checked sign of each multiplier/divisor",
                "☐ Reversed inequality when multiplying/dividing by negative",
                "☐ Kept inequality same when multiplying/dividing by positive",
                "☐ Did NOT reverse for addition/subtraction",
                "☐ Verified final answer with test value"
            ],
            graphingStrategy: {
                steps: [
                    "1. Solve inequality algebraically",
                    "2. Identify critical value(s)",
                    "3. Determine endpoint type: < or > → open circle, ≤ or ≥ → closed circle",
                    "4. Determine direction: < or ≤ → arrow left, > or ≥ → arrow right",
                    "5. Draw number line, mark critical value(s), use appropriate circle",
                    "6. Draw arrow in correct direction",
                    "7. Write interval notation below graph"
                ]
            },
            wordProblemStrategy: {
                steps: [
                    "1. Read carefully, identify what is being asked",
                    "2. Identify constraint words (at most, at least, less than, more than, between)",
                    "3. Determine inequality symbol from constraint",
                    "4. Define variable clearly",
                    "5. Set up inequality from given information",
                    "6. Solve inequality",
                    "7. Interpret solution in context",
                    "8. Check reasonableness and answer with units"
                ],
                keyPhraseTranslation: {
                    "at most": "≤",
                    "at least": "≥",
                    "no more than": "≤",
                    "no less than": "≥",
                    "less than": "<",
                    "greater than": ">",
                    "more than": ">",
                    "fewer than": "<",
                    "maximum": "≤",
                    "minimum": "≥",
                    "between": "< and < (compound AND)",
                    "outside": "< or > (compound OR)",
                    "exceeds": ">",
                    "below": "<",
                    "above": ">",
                    "not more than": "≤",
                    "not less than": "≥"
                }
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "One-Step Inequality Sprint",
                    timeLimit: 60,
                    problems: [
                        "x + 5 < 12",
                        "x - 3 ≥ 8",
                        "4x ≤ 28",
                        "x/3 > 5",
                        "-2x < 10",
                        "x + 9 ≥ 15",
                        "3x > 18",
                        "-x ≤ 7"
                    ],
                    focus: "Quick recognition and solving, sign reversal awareness"
                },
                {
                    name: "Two-Step Challenge",
                    timeLimit: 120,
                    problems: [
                        "2x + 3 < 11",
                        "3x - 5 ≥ 10",
                        "4x + 1 ≤ 17",
                        "5x - 2 > 18",
                        "-2x + 7 < 3",
                        "-3x - 4 ≥ 8"
                    ],
                    focus: "Two-step process with sign reversal"
                },
                {
                    name: "Sign Reversal Master",
                    timeLimit: 90,
                    problems: [
                        "-x > 5",
                        "-2x ≤ 10",
                        "-3x + 6 < 0",
                        "5 - 2x ≥ 9",
                        "-4x - 1 > 7",
                        "3 - x < 8"
                    ],
                    focus: "All require sign reversal"
                }
            ],
            puzzles: [
                {
                    name: "Mystery Inequality",
                    problem: "□x + △ ○ ◇",
                    given: "Solution is x < 5. When x = 0, the inequality becomes 3 < 8.",
                    solve: "Find □, △, ○, and ◇",
                    solution: "Many possibilities, e.g., 1x + 3 < 8"
                },
                {
                    name: "Fill in the Inequality",
                    problem: "3x + __ ? 2x + __",
                    constraint: "Solution is x > 7",
                    solution: "Many possibilities, e.g., 3x + 2 > 2x + 9"
                },
                {
                    name: "Inequality Builder",
                    challenge: "Create an inequality with solution x ≤ 4",
                    constraints: "Must be two-step, use multiplication and addition, require sign reversal",
                    sampleSolution: "-2x + 3 ≤ 11"
                },
                {
                    name: "Graph Matching",
                    challenge: "Match the inequality to its graph",
                    problems: [
                        { inequality: "x < 3", graph: "open circle at 3, arrow left" },
                        { inequality: "x ≥ -1", graph: "closed circle at -1, arrow right" },
                        { inequality: "-2 < x ≤ 5", graph: "open at -2, closed at 5, between" }
                    ]
                }
            ],
            applications: [
                {
                    scenario: "Phone Plan Comparison",
                    problem: "Plan A: $30/month + $0.10/minute. Plan B: $40/month + $0.05/minute. When is Plan A cheaper?",
                    inequality: "30 + 0.10m < 40 + 0.05m",
                    solution: "m < 200 minutes"
                },
                {
                    scenario: "Grade Requirements",
                    problem: "You have 78% average. Final exam is worth 30%. You need at least 80% overall. What do you need on the final?",
                    inequality: "0.70(78) + 0.30x ≥ 80",
                    solution: "x ≥ 85.33, need at least 86%"
                },
                {
                    scenario: "Budget Planning",
                    problem: "You have $150 to spend on concert. Ticket is $85. Snacks cost $8 each. How many snacks can you buy?",
                    inequality: "85 + 8s ≤ 150",
                    solution: "s ≤ 8.125, so at most 8 snacks"
                },
                {
                    scenario: "Temperature Control",
                    problem: "Medicine must be stored between 36°F and 46°F. Express as compound inequality and convert to Celsius.",
                    inequality: "36 ≤ F ≤ 46, which is 2.2 ≤ C ≤ 7.8",
                    solution: "Compound AND inequality"
                },
                {
                    scenario: "Speed and Distance",
                    problem: "You want to travel at least 400 miles in at most 6 hours. What average speed do you need?",
                    inequality: "s × 6 ≥ 400",
                    solution: "s ≥ 66.67 mph"
                },
                {
                    scenario: "Profit Analysis",
                    problem: "Company needs profit > $75,000. Revenue is $250,000. What's maximum cost allowed?",
                    inequality: "250000 - c > 75000",
                    solution: "c < $175,000"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "-3x + 5 < 14",
                        "-3x < 9",
                        "x < -3"  // ERROR: forgot to reverse sign
                    ],
                    correctAnswer: "x > -3",
                    errorType: "Forgot to reverse inequality when dividing by -3"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "x + 7 > 15",
                        "x > 15 - 7",
                        "x < 8"  // ERROR: reversed sign when shouldn't have
                    ],
                    correctAnswer: "x > 8",
                    errorType: "Incorrectly reversed sign when subtracting (should only reverse when multiplying/dividing by negative)"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "5x - 3 > 3x + 9",
                        "5x - 3x > 9 - 3",  // ERROR: should be 9 + 3
                        "2x > 6",
                        "x > 3"
                    ],
                    correctAnswer: "x > 6",
                    errorType: "Sign error when moving constant term"
                },
                {
                    name: "Find the Error #4",
                    incorrectWork: [
                        "|x| < 5",
                        "x < -5 or x > 5"  // ERROR: should be AND, not OR
                    ],
                    correctAnswer: "-5 < x < 5",
                    errorType: "Used OR when should use AND for absolute value less than"
                },
                {
                    name: "Find the Error #5 - Graphing",
                    problem: "x ≤ 3",
                    incorrectGraph: "Open circle at 3, arrow left",
                    correctGraph: "Closed circle at 3, arrow left",
                    errorType: "Used open circle when should use closed (≤ includes the endpoint)"
                },
                {
                    name: "Find the Error #6 - Interval Notation",
                    problem: "x > 5",
                    incorrectNotation: "[5, ∞)",
                    correctNotation: "(5, ∞)",
                    errorType: "Used bracket when should use parenthesis (> doesn't include 5)"
                }
            ],
            conceptualChallenges: [
                {
                    name: "Always, Sometimes, Never",
                    questions: [
                        { statement: "If a > b and c > 0, then ac > bc", answer: "Always" },
                        { statement: "If a > b and c < 0, then ac > bc", answer: "Never (ac < bc)" },
                        { statement: "If a > b, then a + c > b + c", answer: "Always" },
                        { statement: "If a > b, then a/c > b/c", answer: "Sometimes (depends on sign of c)" }
                    ]
                },
                {
                    name: "Justify the Step",
                    problem: "Explain why each step is valid",
                    steps: [
                        { from: "2x + 5 < 13", to: "2x < 8", justification: "Subtraction property (subtract 5 from both sides)" },
                        { from: "2x < 8", to: "x < 4", justification: "Division property (divide by positive 2, no reversal)" }
                    ]
                },
                {
                    name: "Create Your Own",
                    tasks: [
                        "Create an inequality that requires sign reversal to solve",
                        "Create a compound AND inequality about temperature",
                        "Create a word problem that leads to the inequality 2x + 15 ≤ 50",
                        "Create an absolute value inequality with solution x < -3 or x > 5"
                    ]
                }
            ],
            realWorldProjects: [
                {
                    name: "Cell Phone Plan Analysis",
                    description: "Research 3 real cell phone plans and determine when each is the best choice",
                    skills: ["Setting up inequalities", "Comparing multiple options", "Graphing regions"],
                    deliverable: "Report with inequalities, graphs, and recommendations"
                },
                {
                    name: "Budget Planning Simulation",
                    description: "Given monthly income and expenses, determine spending constraints for various categories",
                    skills: ["Multiple inequalities", "Real-world constraints", "Optimization"],
                    deliverable: "Budget plan with all constraints as inequalities"
                },
                {
                    name: "Quality Control",
                    description: "Design tolerance ranges for a manufacturing process using absolute value inequalities",
                    skills: ["Absolute value inequalities", "Precision requirements", "Real-world application"],
                    deliverable: "Quality control specifications with mathematical justification"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveInequalityProblem(config) {
        const { inequality, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseInequalityProblem(inequality, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveInequalityProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateInequalitySteps(this.currentProblem, this.currentSolution);

            // Generate graph data
            this.generateInequalityGraphData();

            // Generate workbook
            this.generateInequalityWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionInterval: this.currentSolution?.interval,
                solutionType: this.currentSolution?.solutionType
            };

        } catch (error) {
            throw new Error(`Failed to solve inequality problem: ${error.message}`);
        }
    }

    parseInequalityProblem(inequality, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = inequality ? this.cleanMathExpression(inequality) : '';

        // If problem type is specified, use it directly
        if (problemType && this.inequalityTypes[problemType]) {
            return {
                originalInput: inequality || `${problemType} problem`,
                cleanInput: cleanInput,
                type: problemType,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect inequality problem type
        for (const [type, config] of Object.entries(this.inequalityTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractInequalityParameters(match, type);

                    return {
                        originalInput: inequality || scenario,
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
        if (parameters.a !== undefined || parameters.b !== undefined || parameters.c !== undefined) {
            const inequalitySymbol = parameters.inequality || '<';
            let typeKey = 'two_step_less';
            
            if (inequalitySymbol === '>') typeKey = 'two_step_greater';
            else if (inequalitySymbol === '≤' || inequalitySymbol === '<=') typeKey = 'two_step_leq';
            else if (inequalitySymbol === '≥' || inequalitySymbol === '>=') typeKey = 'two_step_geq';

            return {
                originalInput: inequality || 'Inequality with given coefficients',
                cleanInput: cleanInput,
                type: typeKey,
                scenario: scenario,
                parameters: {
                    a: parameters.a || 1,
                    b: parameters.b || 0,
                    c: parameters.c || 0,
                    inequality: inequalitySymbol,
                    ...parameters
                },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize inequality problem type from: ${inequality || scenario}`);
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

    extractInequalityParameters(match, type) {
        const params = {};

        if (!match) return params;

        // Determine inequality symbol from type
        if (type.includes('_less')) {
            params.inequality = '<';
        } else if (type.includes('_greater')) {
            params.inequality = '>';
        } else if (type.includes('_leq')) {
            params.inequality = '≤';
        } else if (type.includes('_geq')) {
            params.inequality = '≥';
        }

        // Extract based on inequality type
        if (type.startsWith('one_step_addition')) {
            params.b = this.parseCoefficient(match[1]);
            params.c = this.parseCoefficient(match[2]);
            params.a = 1;
        } else if (type.startsWith('one_step_multiplication')) {
            params.a = this.parseCoefficient(match[1]);
            params.c = this.parseCoefficient(match[2]);
            params.b = 0;
        } else if (type.startsWith('two_step')) {
            params.a = this.parseCoefficient(match[1]) || 1;
            params.b = this.parseCoefficient(match[2]) || 0;
            params.c = this.parseCoefficient(match[3]) || 0;
        } else if (type.startsWith('variables_both_sides')) {
            params.a = this.parseCoefficient(match[1]) || 1;
            params.b = this.parseCoefficient(match[2]) || 0;
            params.c = this.parseCoefficient(match[3]) || 1;
            params.d = this.parseCoefficient(match[4]) || 0;
        } else if (type.startsWith('compound_and')) {
            params.lower = this.parseCoefficient(match[1]);
            params.upper = this.parseCoefficient(match[2]);
        } else if (type.startsWith('compound_or')) {
            params.lower = this.parseCoefficient(match[1]);
            params.upper = this.parseCoefficient(match[2]);
        }

        return params;
    }

    parseCoefficient(coeff) {
        if (!coeff || coeff.trim() === '') return 0;

        let cleaned = coeff.replace(/\s+/g, '');
        if (cleaned === '+' || cleaned === '') return 1;
        if (cleaned === '-') return -1;

        // Handle fractions
        const fractionMatch = cleaned.match(/^([+-]?\d*\.?\d*)\/(\d*\.?\d*)$/);
        if (fractionMatch) {
            const numerator = parseFloat(fractionMatch[1]) || 1;
            const denominator = parseFloat(fractionMatch[2]) || 1;
            return denominator !== 0 ? numerator / denominator : 0;
        }

        // Handle regular numbers
        const num = parseFloat(cleaned);
        return isNaN(num) ? 0 : num;
    }

    solveInequalityProblem_Internal(problem) {
        const solver = this.inequalityTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for inequality problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // INEQUALITY SOLVERS

    solveOneStepAdditionLess(problem) {
        const { b, c } = problem.parameters;
        const solution = c - b;

        return {
            inequality: `x + ${b} < ${c}`,
            type: 'One-Step Addition Inequality (<)',
            operation: 'Subtract to isolate x',
            inverseOperation: 'Subtraction',
            solution: solution,
            solutionExpression: `x < ${solution}`,
            interval: `(-∞, ${solution})`,
            solutionType: 'Infinite solutions (interval)',
            verification: this.verifyInequalitySolution(solution - 1, 1, b, c, '<'),
            signReversalOccurred: false,
            category: 'one_step',
            graph: {
                type: 'number_line',
                criticalValue: solution,
                circleType: 'open',
                direction: 'left'
            }
        };
    }

    solveOneStepAdditionGreater(problem) {
        const { b, c } = problem.parameters;
        const solution = c - b;

        return {
            inequality: `x + ${b} > ${c}`,
            type: 'One-Step Addition Inequality (>)',
            operation: 'Subtract to isolate x',
            inverseOperation: 'Subtraction',
            solution: solution,
            solutionExpression: `x > ${solution}`,
            interval: `(${solution}, ∞)`,
            solutionType: 'Infinite solutions (interval)',
            verification: this.verifyInequalitySolution(solution + 1, 1, b, c, '>'),
            signReversalOccurred: false,
            category: 'one_step',
            graph: {
                type: 'number_line',
                criticalValue: solution,
                circleType: 'open',
                direction: 'right'
            }
        };
    }

    solveOneStepAdditionLeq(problem) {
        const { b, c } = problem.parameters;
        const solution = c - b;

        return {
            inequality: `x + ${b} ≤ ${c}`,
            type: 'One-Step Addition Inequality (≤)',
            operation: 'Subtract to isolate x',
            inverseOperation: 'Subtraction',
            solution: solution,
            solutionExpression: `x ≤ ${solution}`,
            interval: `(-∞, ${solution}]`,
            solutionType: 'Infinite solutions (interval)',
            verification: this.verifyInequalitySolution(solution, 1, b, c, '≤'),
            signReversalOccurred: false,
            category: 'one_step',
            graph: {
                type: 'number_line',
                criticalValue: solution,
                circleType: 'closed',
                direction: 'left'
            }
        };
    }

    solveOneStepAdditionGeq(problem) {
        const { b, c } = problem.parameters;
        const solution = c - b;

        return {
            inequality: `x + ${b} ≥ ${c}`,
            type: 'One-Step Addition Inequality (≥)',
            operation: 'Subtract to isolate x',
            inverseOperation: 'Subtraction',
            solution: solution,
            solutionExpression: `x ≥ ${solution}`,
            interval: `[${solution}, ∞)`,
            solutionType: 'Infinite solutions (interval)',
            verification: this.verifyInequalitySolution(solution, 1, b, c, '≥'),
            signReversalOccurred: false,
            category: 'one_step',
            graph: {
                type: 'number_line',
                criticalValue: solution,
                circleType: 'closed',
                direction: 'right'
            }
        };
    }

    solveOneStepMultiplicationLess(problem) {
        const { a, c } = problem.parameters;

        if (Math.abs(a) < 1e-10) {
            return {
                inequality: `0x < ${c}`,
                solutionType: c > 0 ? 'All real numbers' : 'No solution',
                category: 'one_step'
            };
        }

        const solution = c / a;
        const signReversal = a < 0;
        const finalInequality = signReversal ? '>' : '<';

        return {
            inequality: `${a}x < ${c}`,
            type: 'One-Step Multiplication Inequality (<)',
            operation: 'Divide to isolate x',
            inverseOperation: 'Division',
            solution: solution,
            solutionExpression: `x ${finalInequality} ${solution}`,
            interval: signReversal ? `(${solution}, ∞)` : `(-∞, ${solution})`,
            solutionType: 'Infinite solutions (interval)',
            signReversalOccurred: signReversal,
            signReversalReason: signReversal ? `Divided by negative number (${a})` : null,
            category: 'one_step',
            graph: {
                type: 'number_line',
                criticalValue: solution,
                circleType: 'open',
                direction: signReversal ? 'right' : 'left'
            }
        };
    }

    solveOneStepMultiplicationGreater(problem) {
        const { a, c } = problem.parameters;

        if (Math.abs(a) < 1e-10) {
            return {
                inequality: `0x > ${c}`,
                solutionType: c < 0 ? 'All real numbers' : 'No solution',
                category: 'one_step'
            };
        }

        const solution = c / a;
        const signReversal = a < 0;
        const finalInequality = signReversal ? '<' : '>';

        return {
            inequality: `${a}x > ${c}`,
            type: 'One-Step Multiplication Inequality (>)',
            operation: 'Divide to isolate x',
            inverseOperation: 'Division',
            solution: solution,
            solutionExpression: `x ${finalInequality} ${solution}`,
            interval: signReversal ? `(-∞, ${solution})` : `(${solution}, ∞)`,
            solutionType: 'Infinite solutions (interval)',
            signReversalOccurred: signReversal,
            signReversalReason: signReversal ? `Divided by negative number (${a})` : null,
            category: 'one_step',
            graph: {
                type: 'number_line',
                criticalValue: solution,
                circleType: 'open',
                direction: signReversal ? 'left' : 'right'
            }
        };
    }

    solveOneStepMultiplicationLeq(problem) {
        const { a, c } = problem.parameters;

        if (Math.abs(a) < 1e-10) {
            return {
                inequality: `0x ≤ ${c}`,
                solutionType: c >= 0 ? 'All real numbers' : 'No solution',
                category: 'one_step'
            };
        }

        const solution = c / a;
        const signReversal = a < 0;
        const finalInequality = signReversal ? '≥' : '≤';

        return {
            inequality: `${a}x ≤ ${c}`,
            type: 'One-Step Multiplication Inequality (≤)',
            operation: 'Divide to isolate x',
            inverseOperation: 'Division',
            solution: solution,
            solutionExpression: `x ${finalInequality} ${solution}`,
            interval: signReversal ? `[${solution}, ∞)` : `(-∞, ${solution}]`,
            solutionType: 'Infinite solutions (interval)',
            signReversalOccurred: signReversal,
            signReversalReason: signReversal ? `Divided by negative number (${a})` : null,
            category: 'one_step',
            graph: {
                type: 'number_line',
                criticalValue: solution,
                circleType: 'closed',
                direction: signReversal ? 'right' : 'left'
            }
        };
    }

    solveOneStepMultiplicationGeq(problem) {
        const { a, c } = problem.parameters;

        if (Math.abs(a) < 1e-10) {
            return {
                inequality: `0x ≥ ${c}`,
                solutionType: c <= 0 ? 'All real numbers' : 'No solution',
                category: 'one_step'
            };
        }

        const solution = c / a;
        const signReversal = a < 0;
        const finalInequality = signReversal ? '≤' : '≥';

        return {
            inequality: `${a}x ≥ ${c}`,
            type: 'One-Step Multiplication Inequality (≥)',
            operation: 'Divide to isolate x',
            inverseOperation: 'Division',
            solution: solution,
            solutionExpression: `x ${finalInequality} ${solution}`,
            interval: signReversal ? `(-∞, ${solution}]` : `[${solution}, ∞)`,
            solutionType: 'Infinite solutions (interval)',
            signReversalOccurred: signReversal,
            signReversalReason: signReversal ? `Divided by negative number (${a})` : null,
            category: 'one_step',
            graph: {
                type: 'number_line',
                criticalValue: solution,
                circleType: 'closed',
                direction: signReversal ? 'left' : 'right'
            }
        };
    }

    solveTwoStepLess(problem) {
        const { a, b, c } = problem.parameters;

        if (Math.abs(a) < 1e-10) {
            return {
                inequality: `${b} < ${c}`,
                solutionType: b < c ? 'All real numbers' : 'No solution',
                category: 'two_step'
            };
        }

        const solution = (c - b) / a;
        const signReversal = a < 0;
        const finalInequality = signReversal ? '>' : '<';

        return {
            inequality: `${a}x + ${b} < ${c}`,
            type: 'Two-Step Inequality (<)',
            step1: `Subtract ${b} from both sides`,
            step2: `Divide both sides by ${a}`,
            solution: solution,
            solutionExpression: `x ${finalInequality} ${solution}`,
            interval: signReversal ? `(${solution}, ∞)` : `(-∞, ${solution})`,
            solutionType: 'Infinite solutions (interval)',
            signReversalOccurred: signReversal,
            signReversalReason: signReversal ? `Divided by negative number (${a})` : null,
            category: 'two_step',
            graph: {
                type: 'number_line',
                criticalValue: solution,
                circleType: 'open',
                direction: signReversal ? 'right' : 'left'
            }
        };
    }

    solveTwoStepGreater(problem) {
        const { a, b, c } = problem.parameters;

        if (Math.abs(a) < 1e-10) {
            return {
                inequality: `${b} > ${c}`,
                solutionType: b > c ? 'All real numbers' : 'No solution',
                category: 'two_step'
            };
        }

        const solution = (c - b) / a;
        const signReversal = a < 0;
        const finalInequality = signReversal ? '<' : '>';

        return {
            inequality: `${a}x + ${b} > ${c}`,
            type: 'Two-Step Inequality (>)',
            step1: `Subtract ${b} from both sides`,
            step2: `Divide both sides by ${a}`,
            solution: solution,
            solutionExpression: `x ${finalInequality} ${solution}`,
            interval: signReversal ? `(-∞, ${solution})` : `(${solution}, ∞)`,
            solutionType: 'Infinite solutions (interval)',
            signReversalOccurred: signReversal,
            signReversalReason: signReversal ? `Divided by negative number (${a})` : null,
            category: 'two_step',
            graph: {
                type: 'number_line',
                criticalValue: solution,
                circleType: 'open',
                direction: signReversal ? 'left' : 'right'
            }
        };
    }

    solveTwoStepLeq(problem) {
        const { a, b, c } = problem.parameters;

        if (Math.abs(a) < 1e-10) {
            return {
                inequality: `${b} ≤ ${c}`,
                solutionType: b <= c ? 'All real numbers' : 'No solution',
                category: 'two_step'
            };
        }

        const solution = (c - b) / a;
        const signReversal = a < 0;
        const finalInequality = signReversal ? '≥' : '≤';

        return {
            inequality: `${a}x + ${b} ≤ ${c}`,
            type: 'Two-Step Inequality (≤)',
            step1: `Subtract ${b} from both sides`,
            step2: `Divide both sides by ${a}`,
            solution: solution,
            solutionExpression: `x ${finalInequality} ${solution}`,
            interval: signReversal ? `[${solution}, ∞)` : `(-∞, ${solution}]`,
            solutionType: 'Infinite solutions (interval)',
            signReversalOccurred: signReversal,
            signReversalReason: signReversal ? `Divided by negative number (${a})` : null,
            category: 'two_step',
            graph: {
                type: 'number_line',
                criticalValue: solution,
                circleType: 'closed',
                direction: signReversal ? 'right' : 'left'
            }
        };
    }

    solveTwoStepGeq(problem) {
        const { a, b, c } = problem.parameters;

        if (Math.abs(a) < 1e-10) {
            return {
                inequality: `${b} ≥ ${c}`,
                solutionType: b >= c ? 'All real numbers' : 'No solution',
                category: 'two_step'
            };
        }

        const solution = (c - b) / a;
        const signReversal = a < 0;
        const finalInequality = signReversal ? '≤' : '≥';

        return {
            inequality: `${a}x + ${b} ≥ ${c}`,
            type: 'Two-Step Inequality (≥)',
            step1: `Subtract ${b} from both sides`,
            step2: `Divide both sides by ${a}`,
            solution: solution,
            solutionExpression: `x ${finalInequality} ${solution}`,
            interval: signReversal ? `(-∞, ${solution}]` : `[${solution}, ∞)`,
            solutionType: 'Infinite solutions (interval)',
            signReversalOccurred: signReversal,
            signReversalReason: signReversal ? `Divided by negative number (${a})` : null,
            category: 'two_step',
            graph: {
                type: 'number_line',
                criticalValue: solution,
                circleType: 'closed',
                direction: signReversal ? 'left' : 'right'
            }
        };
    }

    solveMultiStepLess(problem) {
        const { a, b, c } = problem.parameters;
        return this.solveTwoStepLess(problem);
    }

    solveMultiStepGreater(problem) {
        const { a, b, c } = problem.parameters;
        return this.solveTwoStepGreater(problem);
    }

    solveMultiStepLeq(problem) {
        const { a, b, c } = problem.parameters;
        return this.solveTwoStepLeq(problem);
    }

    solveMultiStepGeq(problem) {
        const { a, b, c } = problem.parameters;
        return this.solveTwoStepGeq(problem);
    }

    solveVariablesBothSidesLess(problem) {
        const { a, b, c, d } = problem.parameters;

        const variableCoeff = a - c;
        const constantDiff = d - b;

        if (Math.abs(variableCoeff) < 1e-10) {
            return {
                inequality: `${a}x + ${b} < ${c}x + ${d}`,
                solutionType: constantDiff > 0 ? 'All real numbers' : 'No solution',
                category: 'variables_both_sides'
            };
        }

        const solution = constantDiff / variableCoeff;
        const signReversal = variableCoeff < 0;
        const finalInequality = signReversal ? '>' : '<';

        return {
            inequality: `${a}x + ${b} < ${c}x + ${d}`,
            type: 'Variables on Both Sides (<)',
            approach: 'Collect variable terms on one side, constants on other',
            simplifiedForm: `${variableCoeff}x < ${constantDiff}`,
            solution: solution,
            solutionExpression: `x ${finalInequality} ${solution}`,
            interval: signReversal ? `(${solution}, ∞)` : `(-∞, ${solution})`,
            solutionType: 'Infinite solutions (interval)',
            signReversalOccurred: signReversal,
            signReversalReason: signReversal ? `Divided by negative coefficient (${variableCoeff})` : null,
            category: 'variables_both_sides',
            graph: {
                type: 'number_line',
                criticalValue: solution,
                circleType: 'open',
                direction: signReversal ? 'right' : 'left'
            }
        };
    }

    solveVariablesBothSidesGreater(problem) {
        const { a, b, c, d } = problem.parameters;

        const variableCoeff = a - c;
        const constantDiff = d - b;

        if (Math.abs(variableCoeff) < 1e-10) {
            return {
                inequality: `${a}x + ${b} > ${c}x + ${d}`,
                solutionType: constantDiff < 0 ? 'All real numbers' : 'No solution',
                category: 'variables_both_sides'
            };
        }

        const solution = constantDiff / variableCoeff;
        const signReversal = variableCoeff < 0;
        const finalInequality = signReversal ? '<' : '>';

        return {
            inequality: `${a}x + ${b} > ${c}x + ${d}`,
            type: 'Variables on Both Sides (>)',
            approach: 'Collect variable terms on one side, constants on other',
            simplifiedForm: `${variableCoeff}x > ${constantDiff}`,
            solution: solution,
            solutionExpression: `x ${finalInequality} ${solution}`,
            interval: signReversal ? `(-∞, ${solution})` : `(${solution}, ∞)`,
            solutionType: 'Infinite solutions (interval)',
            signReversalOccurred: signReversal,
            signReversalReason: signReversal ? `Divided by negative coefficient (${variableCoeff})` : null,
            category: 'variables_both_sides',
            graph: {
                type: 'number_line',
                criticalValue: solution,
                circleType: 'open',
                direction: signReversal ? 'left' : 'right'
            }
        };
    }

    solveVariablesBothSidesLeq(problem) {
        const { a, b, c, d } = problem.parameters;

        const variableCoeff = a - c;
        const constantDiff = d - b;

        if (Math.abs(variableCoeff) < 1e-10) {
            return {
                inequality: `${a}x + ${b} ≤ ${c}x + ${d}`,
                solutionType: constantDiff >= 0 ? 'All real numbers' : 'No solution',
                category: 'variables_both_sides'
            };
        }

        const solution = constantDiff / variableCoeff;
        const signReversal = variableCoeff < 0;
        const finalInequality = signReversal ? '≥' : '≤';

        return {
            inequality: `${a}x + ${b} ≤ ${c}x + ${d}`,
            type: 'Variables on Both Sides (≤)',
            approach: 'Collect variable terms on one side, constants on other',
            simplifiedForm: `${variableCoeff}x ≤ ${constantDiff}`,
            solution: solution,
            solutionExpression: `x ${finalInequality} ${solution}`,
            interval: signReversal ? `[${solution}, ∞)` : `(-∞, ${solution}]`,
            solutionType: 'Infinite solutions (interval)',
            signReversalOccurred: signReversal,
            signReversalReason: signReversal ? `Divided by negative coefficient (${variableCoeff})` : null,
            category: 'variables_both_sides',
            graph: {
                type: 'number_line',
                criticalValue: solution,
                circleType: 'closed',
                direction: signReversal ? 'right' : 'left'
            }
        };
    }

    solveVariablesBothSidesGeq(problem) {
        const { a, b, c, d } = problem.parameters;

        const variableCoeff = a - c;
        const constantDiff = d - b;

        if (Math.abs(variableCoeff) < 1e-10) {
            return {
                inequality: `${a}x + ${b} ≥ ${c}x + ${d}`,
                solutionType: constantDiff <= 0 ? 'All real numbers' : 'No solution',
                category: 'variables_both_sides'
            };
        }

        const solution = constantDiff / variableCoeff;
        const signReversal = variableCoeff < 0;
        const finalInequality = signReversal ? '≤' : '≥';

        return {
            inequality: `${a}x + ${b} ≥ ${c}x + ${d}`,
            type: 'Variables on Both Sides (≥)',
            approach: 'Collect variable terms on one side, constants on other',
            simplifiedForm: `${variableCoeff}x ≥ ${constantDiff}`,
            solution: solution,
            solutionExpression: `x ${finalInequality} ${solution}`,
            interval: signReversal ? `(-∞, ${solution}]` : `[${solution}, ∞)`,
            solutionType: 'Infinite solutions (interval)',
            signReversalOccurred: signReversal,
            signReversalReason: signReversal ? `Divided by negative coefficient (${variableCoeff})` : null,
            category: 'variables_both_sides',
            graph: {
                type: 'number_line',
                criticalValue: solution,
                circleType: 'closed',
                direction: signReversal ? 'left' : 'right'
            }
        };
    }

    solveCompoundAnd(problem) {
        const { lower, upper } = problem.parameters;

        return {
            inequality: `${lower} < x < ${upper}`,
            type: 'Compound Inequality (AND)',
            compoundType: 'conjunction',
            solutionExpression: `${lower} < x < ${upper}`,
            interval: `(${lower}, ${upper})`,
            solutionType: 'Infinite solutions (interval)',
            category: 'compound',
            graph: {
                type: 'number_line',
                lowerBound: lower,
                upperBound: upper,
                lowerCircle: 'open',
                upperCircle: 'open',
                shading: 'between'
            }
        };
    }

    solveCompoundOr(problem) {
        const { lower, upper } = problem.parameters;

        return {
            inequality: `x < ${lower} or x > ${upper}`,
            type: 'Compound Inequality (OR)',
            compoundType: 'disjunction',
            solutionExpression: `x < ${lower} or x > ${upper}`,
            interval: `(-∞, ${lower}) ∪ (${upper}, ∞)`,
            solutionType: 'Infinite solutions (union of intervals)',
            category: 'compound',
            graph: {
                type: 'number_line',
                lowerBound: lower,
                upperBound: upper,
                lowerCircle: 'open',
                upperCircle: 'open',
                shading: 'outside'
            }
        };
    }

    solveAbsoluteValueLess(problem) {
        return {
            type: 'Absolute Value Inequality (<)',
            approach: 'Split into compound AND inequality',
            note: 'Becomes -c < expression < c',
            category: 'absolute_value'
        };
    }

    solveAbsoluteValueGreater(problem) {
        return {
            type: 'Absolute Value Inequality (>)',
            approach: 'Split into compound OR inequality',
            note: 'Becomes expression < -c or expression > c',
            category: 'absolute_value'
        };
    }

    solveAbsoluteValueLeq(problem) {
        return {
            type: 'Absolute Value Inequality (≤)',
            approach: 'Split into compound AND inequality',
            note: 'Becomes -c ≤ expression ≤ c',
            category: 'absolute_value'
        };
    }

    solveAbsoluteValueGeq(problem) {
        return {
            type: 'Absolute Value Inequality (≥)',
            approach: 'Split into compound OR inequality',
            note: 'Becomes expression ≤ -c or expression ≥ c',
            category: 'absolute_value'
        };
    }

    solveWordAtMost(problem) {
        return {
            type: 'Word Problem (at most)',
            inequalitySymbol: '≤',
            approach: 'Set up inequality with ≤ for "at most" constraint',
            category: 'word_problems'
        };
    }

    solveWordAtLeast(problem) {
        return {
            type: 'Word Problem (at least)',
            inequalitySymbol: '≥',
            approach: 'Set up inequality with ≥ for "at least" constraint',
            category: 'word_problems'
        };
    }

    solveWordLessThan(problem) {
        return {
            type: 'Word Problem (less than)',
            inequalitySymbol: '<',
            approach: 'Set up inequality with < for "less than" constraint',
            category: 'word_problems'
        };
    }

    solveWordGreaterThan(problem) {
        return {
            type: 'Word Problem (greater than)',
            inequalitySymbol: '>',
            approach: 'Set up inequality with > for "greater than" constraint',
            category: 'word_problems'
        };
    }

    solveWordBetween(problem) {
        return {
            type: 'Word Problem (between)',
            inequalitySymbol: 'compound_and',
            approach: 'Set up compound AND inequality for "between" constraint',
            category: 'word_problems'
        };
    }

    solveFractionInequality(problem) {
        return {
            type: 'Inequality with Fractions',
            approach: 'Find LCD and multiply both sides to clear fractions - watch for sign of LCD!',
            criticalNote: 'If LCD is negative, reverse inequality sign',
            category: 'fractions'
        };
    }

    solveDecimalInequality(problem) {
        return {
            type: 'Inequality with Decimals',
            approach: 'Multiply by power of 10 to clear decimals (no sign reversal since powers of 10 are positive)',
            note: 'Can also work with decimals directly',
            category: 'decimals'
        };
    }

    // VERIFICATION METHODS

    verifyInequalitySolution(testValue, a, b, c, inequalitySymbol) {
        const leftSide = a * testValue + b;
        const rightSide = c;
        
        let isValid = false;
        if (inequalitySymbol === '<') {
            isValid = leftSide < rightSide;
        } else if (inequalitySymbol === '>') {
            isValid = leftSide > rightSide;
        } else if (inequalitySymbol === '≤') {
            isValid = leftSide <= rightSide;
        } else if (inequalitySymbol === '≥') {
            isValid = leftSide >= rightSide;
        }

        return {
            testValue: testValue,
            substitution: `${a}(${testValue}) + ${b} ${inequalitySymbol} ${c}`,
            leftSide: leftSide,
            rightSide: rightSide,
            inequalityCheck: `${leftSide} ${inequalitySymbol} ${rightSide}`,
            isValid: isValid
        };
    }

    // STEP GENERATION

    generateInequalitySteps(problem, solution) {
        let baseSteps = this.generateBaseInequalitySteps(problem, solution);

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

    generateBaseInequalitySteps(problem, solution) {
        const { type } = problem;
        const category = this.inequalityTypes[type]?.category;

        switch(category) {
            case 'one_step':
                return this.generateOneStepInequalitySteps(problem, solution);
            case 'two_step':
                return this.generateTwoStepInequalitySteps(problem, solution);
            case 'variables_both_sides':
                return this.generateVariablesBothSidesInequalitySteps(problem, solution);
            case 'compound':
                return this.generateCompoundInequalitySteps(problem, solution);
            case 'absolute_value':
                return this.generateAbsoluteValueInequalitySteps(problem, solution);
            default:
                return this.generateGenericInequalitySteps(problem, solution);
        }
    }

    generateOneStepInequalitySteps(problem, solution) {
        const steps = [];
        const { a, b, c, inequality } = problem.parameters;

        // Step 1: Given inequality
        steps.push({
            stepNumber: 1,
            step: 'Given inequality',
            description: 'Start with the inequality',
            expression: solution.inequality,
            reasoning: 'This is a one-step inequality requiring a single operation to solve',
            goalStatement: 'We need to isolate x using one inverse operation',
            inequalityNote: `The symbol ${solution.inequality.match(/[<>≤≥]/)?.[0]} tells us the relationship`
        });

        // Step 2: Apply inverse operation
        if (type.includes('addition')) {
            steps.push({
                stepNumber: 2,
                step: 'Subtract from both sides',
                description: `Subtract ${b} from both sides`,
                beforeExpression: solution.inequality,
                operation: `- ${b}`,
                afterExpression: solution.solutionExpression,
                reasoning: 'Subtraction is the inverse of addition',
                algebraicRule: 'Subtraction Property of Inequality',
                inequalityNote: 'Inequality sign stays the same when adding/subtracting'
            });
        } else if (type.includes('multiplication')) {
            const signReversalWarning = solution.signReversalOccurred ? 
                'CRITICAL: Inequality sign REVERSES because we are dividing by a NEGATIVE number!' : 
                'Inequality sign stays the same because we are dividing by a POSITIVE number';

            steps.push({
                stepNumber: 2,
                step: 'Divide both sides',
                description: `Divide both sides by ${a}`,
                beforeExpression: solution.inequality,
                operation: `÷ ${a}`,
                afterExpression: solution.solutionExpression,
                reasoning: 'Division is the inverse of multiplication',
                algebraicRule: 'Division Property of Inequality',
                inequalityNote: signReversalWarning,
                signReversalOccurred: solution.signReversalOccurred,
                signReversalReason: solution.signReversalReason
            });
        }

        // Step 3: Solution and interval
        steps.push({
            stepNumber: 3,
            step: 'Express solution',
            description: 'Write solution as inequality and interval',
            expression: solution.solutionExpression,
            intervalNotation: solution.interval,
            finalAnswer: true,
            reasoning: 'This represents all values of x that satisfy the original inequality'
        });

        // Step 4: Graph
        steps.push({
            stepNumber: 4,
            step: 'Graph solution',
            description: 'Represent solution on number line',
            graphInfo: solution.graph,
            reasoning: `Use ${solution.graph?.circleType} circle at ${solution.graph?.criticalValue}, arrow pointing ${solution.graph?.direction}`
        });

        return steps;
    }

    generateTwoStepInequalitySteps(problem, solution) {
        const steps = [];
        const { a, b, c } = problem.parameters;

        // Step 1: Given inequality
        steps.push({
            stepNumber: 1,
            step: 'Given inequality',
            description: 'Start with the two-step inequality',
            expression: solution.inequality,
            reasoning: 'This inequality requires two operations: undoing addition/subtraction, then multiplication/division',
            goalStatement: 'We need to isolate x by undoing operations in reverse order',
            inequalityNote: 'Watch for sign reversal if coefficient is negative'
        });

        // Step 2: Remove constant term
        steps.push({
            stepNumber: 2,
            step: 'Subtract constant term',
            description: `Subtract ${b} from both sides`,
            beforeExpression: solution.inequality,
            operation: `- ${b}`,
            afterExpression: `${a}x ${solution.inequality.match(/[<>≤≥]/)?.[0]} ${c - b}`,
            reasoning: 'We undo the addition first (reverse order of operations)',
            algebraicRule: 'Subtraction Property of Inequality',
            inequalityNote: 'Inequality sign stays the same when subtracting',
            visualHint: 'Remove the constant term to isolate the variable term'
        });

        // Step 3: Divide by coefficient
        const signReversalWarning = solution.signReversalOccurred ?
            `CRITICAL: Inequality sign REVERSES to ${solution.solutionExpression.match(/[<>≤≥]/)?.[0]} because we divide by NEGATIVE ${a}!` :
            `Inequality sign stays ${solution.solutionExpression.match(/[<>≤≥]/)?.[0]} because we divide by POSITIVE ${a}`;

        steps.push({
            stepNumber: 3,
            step: 'Divide by coefficient',
            description: `Divide both sides by ${a}`,
            beforeExpression: `${a}x ${solution.inequality.match(/[<>≤≥]/)?.[0]} ${c - b}`,
            operation: `÷ ${a}`,
            afterExpression: solution.solutionExpression,
            reasoning: 'We undo the multiplication to isolate x',
            algebraicRule: 'Division Property of Inequality',
            inequalityNote: signReversalWarning,
            signReversalOccurred: solution.signReversalOccurred,
            signReversalReason: solution.signReversalReason
        });

        // Step 4: Express solution
        steps.push({
            stepNumber: 4,
            step: 'Express solution',
            description: 'Write solution as inequality and interval',
            expression: solution.solutionExpression,
            intervalNotation: solution.interval,
            finalAnswer: true,
            reasoning: 'This is the complete solution set'
        });

        // Step 5: Graph
        steps.push({
            stepNumber: 5,
            step: 'Graph solution',
            description: 'Represent solution on number line',
            graphInfo: solution.graph,
            reasoning: `Use ${solution.graph?.circleType} circle at ${solution.graph?.criticalValue}, arrow pointing ${solution.graph?.direction}`
        });

        return steps;
    }

    generateVariablesBothSidesInequalitySteps(problem, solution) {
        const steps = [];
        const { a, b, c, d } = problem.parameters;

        // Step 1: Given inequality
        steps.push({
            stepNumber: 1,
            step: 'Given inequality',
            description: 'Start with inequality having variables on both sides',
            expression: solution.inequality,
            reasoning: 'We need to collect all variable terms on one side first',
            goalStatement: 'Combine variable terms on one side, constants on the other',
            strategyNote: 'Choose which side to collect variables strategically to avoid negatives if possible'
        });

        // Step 2: Collect variable terms
        const varToSubtract = Math.min(Math.abs(a), Math.abs(c));
        const varSide = Math.abs(a) > Math.abs(c) ? 'left' : 'right';
        
        steps.push({
            stepNumber: 2,
            step: 'Collect variable terms',
            description: `Subtract ${varToSubtract}x from both sides`,
            beforeExpression: solution.inequality,
            operation: `- ${varToSubtract}x`,
            afterExpression: `${a - c}x + ${b} ${solution.inequality.match(/[<>≤≥]/)?.[0]} ${d}`,
            reasoning: 'This moves all x terms to one side',
            algebraicRule: 'Subtraction Property of Inequality',
            inequalityNote: 'Inequality sign stays the same when subtracting terms',
            strategyNote: `Collected on ${varSide} side to minimize negative coefficients`
        });

        // Step 3: Collect constant terms
        steps.push({
            stepNumber: 3,
            step: 'Collect constant terms',
            description: `Subtract ${b} from both sides`,
            beforeExpression: `${a - c}x + ${b} ${solution.inequality.match(/[<>≤≥]/)?.[0]} ${d}`,
            operation: `- ${b}`,
            afterExpression: `${a - c}x ${solution.inequality.match(/[<>≤≥]/)?.[0]} ${d - b}`,
            reasoning: 'This moves all constants to the other side',
            algebraicRule: 'Subtraction Property of Inequality',
            inequalityNote: 'Inequality sign still stays the same'
        });

        // Step 4: Divide
        const variableCoeff = a - c;
        const signReversalWarning = solution.signReversalOccurred ?
            `CRITICAL: Inequality REVERSES to ${solution.solutionExpression.match(/[<>≤≥]/)?.[0]} because coefficient ${variableCoeff} is NEGATIVE!` :
            `Inequality stays ${solution.solutionExpression.match(/[<>≤≥]/)?.[0]} because coefficient ${variableCoeff} is POSITIVE`;

        steps.push({
            stepNumber: 4,
            step: 'Divide by coefficient',
            description: `Divide both sides by ${variableCoeff}`,
            beforeExpression: solution.simplifiedForm,
            operation: `÷ ${variableCoeff}`,
            afterExpression: solution.solutionExpression,
            reasoning: 'This isolates x',
            algebraicRule: 'Division Property of Inequality',
            inequalityNote: signReversalWarning,
            signReversalOccurred: solution.signReversalOccurred,
            signReversalReason: solution.signReversalReason
        });

        // Step 5: Express solution
        steps.push({
            stepNumber: 5,
            step: 'Express solution',
            description: 'Write solution as inequality and interval',
            expression: solution.solutionExpression,
            intervalNotation: solution.interval,
            finalAnswer: true
        });

        // Step 6: Graph
        steps.push({
            stepNumber: 6,
            step: 'Graph solution',
            description: 'Represent solution on number line',
            graphInfo: solution.graph
        });

        return steps;
    }

    generateCompoundInequalitySteps(problem, solution) {
        const steps = [];

        if (solution.compoundType === 'conjunction') {
            steps.push({
                stepNumber: 1,
                step: 'Identify compound type',
                description: 'This is a compound AND inequality',
                expression: solution.inequality,
                reasoning: 'Both conditions must be true - the solution is the overlap (intersection)',
                visualConcept: 'The solution is between the two bounds'
            });

            steps.push({
                stepNumber: 2,
                step: 'Solution is already isolated',
                description: 'x is already isolated in the middle',
                expression: solution.solutionExpression,
                reasoning: 'All values between the bounds satisfy both conditions'
            });
        } else {
            steps.push({
                stepNumber: 1,
                step: 'Identify compound type',
                description: 'This is a compound OR inequality',
                expression: solution.inequality,
                reasoning: 'Either condition can be true - the solution is the union of both regions',
                visualConcept: 'The solution is outside the range between the bounds'
            });

            steps.push({
                stepNumber: 2,
                step: 'Express as union',
                description: 'Combine both regions with OR',
                expression: solution.solutionExpression,
                reasoning: 'Values in either region satisfy the inequality'
            });
        }

        steps.push({
            stepNumber: 3,
            step: 'Interval notation',
            description: 'Express in interval notation',
            intervalNotation: solution.interval,
            finalAnswer: true
        });

        steps.push({
            stepNumber: 4,
            step: 'Graph solution',
            description: 'Show solution on number line',
            graphInfo: solution.graph
        });

        return steps;
    }

    generateAbsoluteValueInequalitySteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Absolute value inequality',
            description: `Solve ${solution.type}`,
            expression: problem.cleanInput,
            approach: solution.approach,
            note: solution.note,
            reasoning: 'Absolute value inequalities split into compound inequalities'
        }];
    }

    generateGenericInequalitySteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Linear inequality',
            description: 'Solve the given linear inequality',
            expression: problem.inequality || solution.inequality,
            reasoning: 'Apply appropriate linear inequality solution technique',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS (continuing from linear equations version...)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            // Inequality-specific enhancements
            inequalityFocus: {
                currentSymbol: step.expression?.match(/[<>≤≥]/)?.[0] || problem.parameters?.inequality,
                signReversalAwareness: this.getSignReversalAwareness(step),
                graphicalMeaning: this.getGraphicalMeaning(step, solution)
            },

            // Multiple explanation formats
            explanations: {
                conceptual: this.getConceptualExplanationInequality(step, problem),
                procedural: this.getProceduralExplanationInequality(step),
                visual: this.getVisualExplanationInequality(step, problem),
                algebraic: this.getAlgebraicExplanationInequality(step)
            },

            // Difficulty-adapted explanations
            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            // Learning support
            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyInequality(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        // Add thinking prompts if enabled
        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsInequality(step);
        }

        // Add self-check questions if enabled
        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionInequality(step);
        }

        // Add real-world connections if enabled
        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionInequality(step, problem);
        }

        return enhanced;
    }

    getSignReversalAwareness(step) {
        if (step.signReversalOccurred) {
            return {
                occurred: true,
                reason: step.signReversalReason,
                warning: 'CRITICAL: Inequality sign reversed!',
                rule: 'Sign reverses when multiplying/dividing by negative number'
            };
        } else if (step.step === 'Divide by coefficient' || step.step === 'Multiply both sides') {
            return {
                occurred: false,
                reason: 'Coefficient is positive',
                note: 'No sign reversal needed',
                rule: 'Sign only reverses for negative multipliers/divisors'
            };
        }
        return null;
    }

    getGraphicalMeaning(step, solution) {
        if (step.finalAnswer && solution.graph) {
            return {
                representation: 'Solution region on number line',
                criticalValue: solution.graph.criticalValue,
                circleType: solution.graph.circleType,
                direction: solution.graph.direction,
                meaning: `All values ${solution.graph.direction} of ${solution.graph.criticalValue} satisfy the inequality`
            };
        }
        return null;
    }

    getConceptualExplanationInequality(step, problem) {
        const conceptualExplanations = {
            'Given inequality': 'An inequality states that one expression is less than, greater than, less than or equal to, or greater than or equal to another. Our job is to find all values of x that make this true.',
            'Subtract from both sides': 'Equality or inequality is maintained when we perform the same operation on both sides. The inequality symbol stays the same for addition/subtraction.',
            'Add to both sides': 'Adding the same value to both sides maintains the inequality relationship.',
            'Divide both sides': 'Division separates the coefficient from the variable. CRITICAL: If dividing by negative, the inequality sign reverses.',
            'Multiply both sides': 'Multiplication can clear fractions or decimals. CRITICAL: If multiplying by negative, the inequality sign reverses.',
            'Collect variable terms': 'Gathering all x terms together simplifies the inequality. Choose strategically to avoid negative coefficients.',
            'Collect constant terms': 'Moving all numbers to one side creates a clear separation.',
            'Express solution': 'The solution is an interval - infinitely many values that satisfy the inequality.',
            'Graph solution': 'The number line shows all values in the solution set visually.'
        };

        return conceptualExplanations[step.step] || 'This step brings us closer to isolating x and finding the solution interval.';
    }

    getProceduralExplanationInequality(step) {
        let procedure = '';
        
        if (step.operation) {
            procedure = `1. Identify the operation: ${step.operation}\n`;
            procedure += `2. Perform it on both sides of the inequality\n`;
            
            if (step.step.includes('Divide') || step.step.includes('Multiply')) {
                procedure += `3. Check if multiplying/dividing by negative - if yes, REVERSE inequality sign\n`;
                procedure += `4. Simplify the result\n`;
                procedure += `5. Write the new inequality`;
            } else {
                procedure += `3. Inequality sign stays the same\n`;
                procedure += `4. Simplify the result\n`;
                procedure += `5. Write the new inequality`;
            }
        }
        
        return procedure || 'Follow the standard procedure for this type of step.';
    }

    getVisualExplanationInequality(step, problem) {
        const category = this.inequalityTypes[problem.type]?.category;
        
        const visualExplanations = {
            'one_step': 'Picture a number line. The solution is a ray (arrow) pointing in one direction from a critical value.',
            'two_step': 'Imagine unwrapping to find the solution interval - first remove constant, then handle coefficient (watching for sign reversal).',
            'variables_both_sides': 'Think of combining all x\'s on one side and all numbers on the other, then solving.',
            'compound': 'Visualize either a segment between two points (AND) or two rays going opposite directions (OR).',
            'absolute_value': 'Picture distance from a center point - either within a range (less than) or outside a range (greater than).'
        };

        return visualExplanations[category] || 'Visualize the solution as a region on the number line.';
    }

    getAlgebraicExplanationInequality(step) {
        const algebraicRules = {
            'Given inequality': 'Inequality in standard form',
            'Subtract from both sides': 'Subtraction Property of Inequality: If a < b, then a - c < b - c (sign stays same)',
            'Add to both sides': 'Addition Property of Inequality: If a < b, then a + c < b + c (sign stays same)',
            'Divide both sides': 'Division Property of Inequality: If a < b and c > 0, then a/c < b/c. If c < 0, then a/c > b/c (sign reverses)',
            'Multiply both sides': 'Multiplication Property of Inequality: If a < b and c > 0, then ac < bc. If c < 0, then ac > bc (sign reverses)',
            'Collect variable terms': 'Combining like terms preserves inequality',
            'Collect constant terms': 'Isolating variable terms from constants'
        };

        return algebraicRules[step.step] || 'Apply standard inequality principles.';
    }

    identifyKeyVocabularyInequality(step) {
        const vocabulary = {
            'Given inequality': ['inequality', 'less than', 'greater than', 'less than or equal to', 'greater than or equal to', 'variable', 'coefficient'],
            'Subtract from both sides': ['subtract', 'both sides', 'inequality preserved'],
            'Add to both sides': ['add', 'both sides', 'inequality preserved'],
            'Divide both sides': ['divide', 'coefficient', 'sign reversal', 'negative number'],
            'Multiply both sides': ['multiply', 'sign reversal', 'negative number'],
            'Collect variable terms': ['variable', 'like terms', 'combine', 'coefficient'],
            'Collect constant terms': ['constant', 'isolate'],
            'Express solution': ['interval', 'interval notation', 'solution set'],
            'Graph solution': ['number line', 'open circle', 'closed circle', 'ray', 'arrow']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPromptsInequality(step) {
        return {
            before: step.step.includes('Divide') || step.step.includes('Multiply') ?
                'Before I start: Is the number I\'m multiplying/dividing by positive or negative?' :
                'Before I start this step, what operation do I need to perform?',
            during: step.step.includes('Divide') || step.step.includes('Multiply') ?
                'Am I dividing/multiplying by a negative? If yes, I must reverse the inequality sign!' :
                'As I work: Am I applying the operation to both sides?',
            after: 'After completing: Does my inequality direction make sense? Did I reverse when needed?'
        };
    }

    generateSelfCheckQuestionInequality(step) {
        const questions = {
            'Given inequality': 'Do I understand what values of x would make this inequality true?',
            'Subtract from both sides': 'Did I subtract the same value from both sides?',
            'Add to both sides': 'Did I add the same value to both sides?',
            'Divide both sides': 'Did I check if I\'m dividing by a negative number? Did I reverse the sign if needed?',
            'Multiply both sides': 'Did I check if I\'m multiplying by a negative number? Did I reverse the sign if needed?',
            'Collect variable terms': 'Did I move all x terms to one side correctly?',
            'Collect constant terms': 'Are all plain numbers on one side now?',
            'Express solution': 'Is my interval notation correct? Are my parentheses/brackets right?',
            'Graph solution': 'Did I use the correct circle type? Is my arrow pointing the right direction?'
        };

        return questions[step.step] || 'Does this step make sense and move me toward the solution?';
    }

    findRealWorldConnectionInequality(step, problem) {
        const connections = {
            'one_step': 'Like checking if you have enough money: "Do I have more than $20?" is an inequality.',
            'two_step': 'Like budget planning: "Base cost plus per-item cost must be less than budget" is a two-step inequality.',
            'variables_both_sides': 'Like comparing phone plans: "When is Plan A cheaper than Plan B?" involves variables on both sides.',
            'compound': 'Like acceptable temperature ranges: "Between 60° and 80°" is a compound inequality.',
            'absolute_value': 'Like manufacturing tolerance: "Within ±0.1 inches" uses absolute value inequalities.'
        };

        const category = this.inequalityTypes[problem.type]?.category;
        return connections[category] || 'Inequalities help us understand ranges and constraints in real-world situations.';
    }

    // Continuing with additional methods...

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationInequality(step, problem),
                analogy: this.findRelevantAnalogyInequality(step, problem),
                simpleLanguage: this.convertToSimpleLanguageInequality(step.description),
                visualization: this.suggestVisualizationInequality(step),
                signReversalELI5: step.signReversalOccurred ? 
                    "When we flip to the other side by dividing/multiplying by a negative, the inequality sign flips too - like looking in a mirror!" :
                    null
            }
        }));
    }

    generateELI5ExplanationInequality(step, problem) {
        const ELI5Explanations = {
            'Given inequality': "We have a math puzzle where we need to find all the numbers that make this true, not just one number!",
            'Subtract from both sides': "Imagine taking away the same number of toys from both sides of a balance - the heavier side is still heavier!",
            'Add to both sides': "It's like adding the same number of blocks to both sides - if one side was taller, it's still taller!",
            'Divide both sides': step.signReversalOccurred ?
                "When we split both sides into groups AND we're using negative numbers, something magical happens - the inequality flips like a mirror image!" :
                "When we split both sides into equal groups (using positive numbers), the bigger side is still bigger!",
            'Multiply both sides': step.signReversalOccurred ?
                "When we multiply everything by a negative number, it's like flipping everything backwards - so the inequality sign flips too!" :
                "When we multiply everything by the same positive number, the bigger side is still bigger!",
            'Collect variable terms': "We're gathering all the x's together on one side, like putting all your toys in one toy box.",
            'Collect constant terms': "Now we're putting all the regular numbers together on the other side, like organizing your room.",
            'Express solution': "The answer isn't just one number - it's a whole range of numbers! Like saying 'you can have 5 or more cookies', not just exactly 5.",
            'Graph solution': "We draw a number line to show all the numbers that work. The arrow shows that it keeps going and going in that direction!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to find all the numbers that make our inequality true!";
    }

    findRelevantAnalogyInequality(step, problem) {
        if (step.signReversalOccurred) {
            return this.analogies.sign_reversal_as_mirror?.ELI5 || this.analogies.sign_reversal_as_mirror?.explanation;
        }

        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('all_inequalities')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        
        return "Think of this like finding all the numbers that fit the rule - not just one answer!";
    }

    convertToSimpleLanguageInequality(description) {
        const simplifications = {
            'coefficient': 'the number next to x',
            'constant': 'the plain number',
            'inverse operation': 'the opposite action',
            'isolate': 'get x by itself',
            'substitute': 'put in place of',
            'simplify': 'make easier',
            'variable': 'the mystery letter (x)',
            'inequality': 'math sentence showing one side is bigger or smaller',
            'solution': 'all the answers that work',
            'interval': 'range of numbers',
            'interval notation': 'a short way to write the range',
            'open circle': 'hollow dot (number not included)',
            'closed circle': 'filled dot (number included)',
            'sign reversal': 'flipping the inequality sign',
            'compound inequality': 'two inequalities together',
            'absolute value': 'distance from zero'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualizationInequality(step) {
        const visualizations = {
            'Given inequality': 'Draw a number line to understand which numbers could work',
            'Subtract from both sides': 'Show removing the same amount from both sides - the inequality stays the same direction',
            'Add to both sides': 'Show adding the same amount to both sides - still points the same way',
            'Divide both sides': step.signReversalOccurred ?
                'Draw arrows flipping direction when dividing by negative - like looking in a mirror!' :
                'Show splitting both sides - inequality stays the same',
            'Multiply both sides': step.signReversalOccurred ?
                'Show everything flipping when multiplying by negative' :
                'Show multiplying both sides equally',
            'Collect variable terms': 'Circle all x terms and move them to one side with arrows',
            'Collect constant terms': 'Put boxes around all numbers and move them to the other side',
            'Express solution': 'Write the range using interval notation with parentheses and brackets',
            'Graph solution': `Draw number line with ${step.graphInfo?.circleType} circle and arrow pointing ${step.graphInfo?.direction}`
        };

        return visualizations[step.step] || 'Draw a picture to represent what\'s happening in this step';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeInequality(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgressionInequality(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategyInequality(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeInequality(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessityInequality(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefitInequality(nextStep)}`,
            signAwareness: nextStep.signReversalOccurred ? 
                'CRITICAL: Watch for sign reversal in the next step!' :
                null
        };
    }

    explainStepProgressionInequality(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue isolating the variable and finding the solution interval`;
    }

    explainStepStrategyInequality(nextStep) {
        let strategy = `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
        
        if (nextStep.step.includes('Divide') || nextStep.step.includes('Multiply')) {
            strategy += '. CRITICAL: Check if we\'re multiplying/dividing by negative - if yes, reverse the inequality sign!';
        }
        
        return strategy;
    }

    explainStepNecessityInequality(currentStep, nextStep) {
        return `we need to continue simplifying and isolating x to find the complete solution interval`;
    }

    explainStepBenefitInequality(nextStep) {
        return `bringing us closer to the solution interval that represents all values satisfying the inequality`;
    }

    addErrorPrevention(step, problemType) {
        const category = this.inequalityTypes[problemType]?.category || 'one_step';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        // Add sign reversal mistakes if relevant
        const signReversalMistakes = [];
        if (step.step === 'Divide by coefficient' || step.step === 'Multiply both sides') {
            signReversalMistakes.push(...(this.commonMistakes.sign_reversal?.['When to reverse'] || []));
        }

        return {
            ...step,
            errorPrevention: {
                commonMistakes: [...mistakes, ...signReversalMistakes],
                preventionTips: this.generatePreventionTipsInequality(step, problemType),
                checkPoints: this.generateCheckPointsInequality(step),
                warningFlags: this.identifyWarningFlagsInequality(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionInequality(step),
                expectedResult: this.describeExpectedResultInequality(step),
                troubleshooting: this.generateTroubleshootingTipsInequality(step)
            }
        };
    }

    generatePreventionTipsInequality(step, problemType) {
        const tips = {
            'Subtract from both sides': [
                'Remember to subtract from BOTH sides',
                'Watch your signs when subtracting negative numbers',
                'Inequality sign does NOT change for addition/subtraction',
                'Double-check your arithmetic'
            ],
            'Divide both sides': [
                'CRITICAL: Check if coefficient is positive or negative',
                'If negative, REVERSE the inequality sign',
                'If positive, KEEP the inequality sign the same',
                'Divide BOTH sides by the coefficient',
                'Simplify fractions if needed'
            ],
            'Multiply both sides': [
                'CRITICAL: Check if multiplier is positive or negative',
                'If negative, REVERSE the inequality sign',
                'If positive, KEEP the inequality sign the same',
                'Multiply BOTH sides',
                'This often clears fractions'
            ],
            'Collect variable terms': [
                'Subtract the smaller coefficient to avoid negatives when possible',
                'Remember to move the entire term, including its sign',
                'Combine coefficients correctly',
                'Watch for the final coefficient being negative'
            ],
            'Express solution': [
                'Use correct interval notation',
                'Parentheses ( ) for < and >', 
                'Brackets [ ] for ≤ and ≥',
                'Always use parentheses with ∞ or -∞'
            ],
            'Graph solution': [
                'Open circle for < and >',
                'Closed circle for ≤ and ≥',
                'Arrow points in direction of solution',
                'Left for "less than", right for "greater than"'
            ]
        };

        return tips[step.step] || ['Check your arithmetic', 'Work carefully', 'Watch for sign reversal'];
    }

    generateCheckPointsInequality(step) {
        const checkpoints = [
            'Did I perform the same operation on both sides?',
            'Are my signs correct?',
            'Did I simplify completely?'
        ];

        if (step.step === 'Divide by coefficient' || step.step === 'Multiply both sides') {
            checkpoints.push('Did I check if I\'m multiplying/dividing by negative?');
            checkpoints.push('Did I reverse the inequality sign if needed?');
        } else {
            checkpoints.push('Did I keep the inequality sign the same (no reversal for this operation)?');
        }

        checkpoints.push('Does this step move me toward isolating x?');

        return checkpoints;
    }

    identifyWarningFlagsInequality(step, problemType) {
        const warnings = [];
        
        if (step.step === 'Divide by coefficient' || step.step === 'Multiply both sides') {
            warnings.push('CRITICAL: Check sign of coefficient/multiplier');
            warnings.push('If negative, must reverse inequality sign');
        }

        const category = this.inequalityTypes[problemType]?.category || 'one_step';
        
        const categoryWarnings = {
            one_step: step.step === 'Divide both sides' ?
                ['Watch for division by zero', 'Check signs when dividing by negatives - REVERSE inequality'] : [],
            two_step: step.step === 'Divide by coefficient' ?
                ['Check if coefficient is negative - if yes, REVERSE inequality sign'] : [],
            variables_both_sides: step.step === 'Collect variable terms' ?
                ['Choose side strategically to avoid negative coefficient', 'If final coefficient is negative, must reverse sign when dividing'] : [],
            compound: ['Make sure to use AND (intersection) or OR (union) correctly'],
            absolute_value: ['Use AND for < type, OR for > type']
        };

        warnings.push(...(categoryWarnings[category] || []));

        return warnings;
    }

    describeExpectedResultInequality(step) {
        const expectations = {
            'Given inequality': 'An inequality with x and numbers',
            'Subtract from both sides': 'An inequality with one less term or simpler terms, sign stays same',
            'Add to both sides': 'An inequality with combined or simplified terms, sign stays same',
            'Divide both sides': 'x isolated on one side, inequality sign reversed if divided by negative',
            'Multiply both sides': 'Fractions cleared or x closer to being isolated, sign reversed if multiplied by negative',
            'Collect variable terms': 'All x terms on one side, sign unchanged',
            'Collect constant terms': 'All numbers on the opposite side from x, sign unchanged',
            'Express solution': 'Solution expressed as inequality and interval notation',
            'Graph solution': 'Number line with correct circle type and arrow direction'
        };

        return expectations[step.step] || 'Progress toward isolating x and finding solution interval';
    }

    generateTroubleshootingTipsInequality(step) {
        const tips = [
            'If stuck, review the previous step',
            'Check that you performed the operation on both sides',
            'Verify your arithmetic carefully'
        ];

        if (step.step === 'Divide by coefficient' || step.step === 'Multiply both sides') {
            tips.push('If inequality direction seems wrong, check if you divided/multiplied by negative');
            tips.push('Remember: sign reverses ONLY for multiplication/division by negative');
        }

        tips.push('Try explaining the step out loud');
        tips.push('Draw a picture or number line if it helps');
        tips.push('Test a value from your solution in the original inequality');

        return tips;
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsInequality(step, problem),
                subSteps: this.breakIntoSubStepsInequality(step),
                hints: this.generateProgressiveHintsInequality(step, problem),
                practiceVariation: this.generatePracticeVariationInequality(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessInequality(step),
                decisionPoints: this.identifyDecisionPointsInequality(step),
                alternativeApproaches: this.suggestAlternativeMethodsInequality(step, problem)
            }
        }));
    }

    generateGuidingQuestionsInequality(step, problem) {
        const questions = {
            'Given inequality': [
                'What is the inequality asking us to find?',
                'What operations are being performed on x?',
                'What does the inequality symbol mean?',
                'Are we looking for one answer or many answers?'
            ],
            'Subtract from both sides': [
                'What term do we need to remove?',
                'What is the inverse operation of addition?',
                'Did I subtract from both sides?',
                'Will the inequality sign change? (No, only changes for multiply/divide by negative)'
            ],
            'Add to both sides': [
                'What term do we need to remove?',
                'What is the inverse operation of subtraction?',
                'Did I add to both sides?',
                'Will the inequality sign change? (No)'
            ],
            'Divide both sides': [
                'What is multiplying x right now?',
                'What is the inverse operation of multiplication?',
                'Is the coefficient positive or negative?',
                'Do I need to reverse the inequality sign?',
                'Did I divide both sides by the same number?'
            ],
            'Multiply both sides': [
                'What am I trying to accomplish by multiplying?',
                'Is the multiplier positive or negative?',
                'Do I need to reverse the inequality sign?',
                'Did I multiply both sides?'
            ],
            'Collect variable terms': [
                'Where are all the x terms?',
                'Which side should I collect them on?',
                'What do I need to subtract to move them?',
                'Will the final coefficient be positive or negative?'
            ],
            'Express solution': [
                'What type of circle do I use for this inequality symbol?',
                'What type of bracket/parenthesis do I use in interval notation?',
                'Does the solution extend to infinity?'
            ],
            'Graph solution': [
                'What is the critical value?',
                'Open or closed circle?',
                'Which direction does the arrow point?',
                'Does my graph match my interval notation?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help solve the inequality?'];
    }

    generateProgressiveHintsInequality(step, problem) {
        const category = this.inequalityTypes[problem.type]?.category || 'one_step';
        const hintSet = this.hints[category] || this.hints.one_step_addition;

        return {
            level1: hintSet.level1 || 'Think about what mathematical operation applies here.',
            level2: hintSet.level2 || 'Consider what operation you need to undo.',
            level3: hintSet.level3 || 'Apply the inverse operation to both sides. Check for sign reversal.',
            level4: hintSet.level4 || 'Perform the specific operation needed.'
        };
    }

    breakIntoSubStepsInequality(step) {
        if (step.operation && (step.step === 'Divide by coefficient' || step.step === 'Multiply both sides')) {
            return [
                'Identify what operation to perform',
                'Check the sign of the coefficient/multiplier (positive or negative)',
                `Apply ${step.operation} to the left side`,
                `Apply ${step.operation} to the right side`,
                'Determine if inequality sign must reverse (only if coefficient/multiplier is negative)',
                'Reverse sign if necessary',
                'Simplify both sides',
                'Write the new inequality'
            ];
        } else if (step.operation) {
            return [
                'Identify what operation to perform',
                `Apply ${step.operation} to the left side`,
                `Apply ${step.operation} to the right side`,
                'Inequality sign stays the same (no reversal for addition/subtraction)',
                'Simplify both sides',
                'Write the new inequality'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generatePracticeVariationInequality(step, problem) {
        return {
            similarProblem: 'Try the same type of inequality with different numbers',
            practiceHint: 'Practice with simple positive coefficients first, then try negative coefficients',
            extension: 'Once comfortable, try inequalities that require sign reversal',
            testYourself: 'Can you explain when the inequality sign reverses?'
        };
    }

    explainThinkingProcessInequality(step) {
        return {
            observe: 'What do I see in this inequality?',
            goal: 'What am I trying to accomplish?',
            strategy: 'What operation should I use?',
            signCheck: step.step.includes('Divide') || step.step.includes('Multiply') ?
                'Is this coefficient/multiplier positive or negative?' :
                'Does the inequality sign change for this operation? (No, only for multiply/divide by negative)',
            execute: 'How do I perform this operation correctly?',
            verify: 'Does my result make sense? Did I handle the sign correctly?'
        };
    }

    identifyDecisionPointsInequality(step) {
        return [
            'Which operation to undo first?',
            'Which side to collect variable terms on?',
            'Whether to clear fractions/decimals or work with them?',
            'CRITICAL: Is the coefficient/multiplier positive or negative?',
            'Do I need to reverse the inequality sign?',
            'What type of circle for graphing (open or closed)?',
            'What type of bracket for interval notation?'
        ];
    }

    suggestAlternativeMethodsInequality(step, problem) {
        const alternatives = {
            'Divide both sides': [
                'Could multiply both sides by reciprocal instead',
                'Could work with fractions if more comfortable',
                'Remember: whichever method, check sign for reversal!'
            ],
            'Subtract from both sides': [
                'Could add the opposite instead',
                'Could think of it as moving the term to the other side',
                'Either way, sign stays the same'
            ],
            'Graph solution': [
                'Could use interval notation first, then graph',
                'Could graph first, then write interval notation',
                'Could test values to verify which region to shade'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate for this inequality'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing to simplify the inequality`,
            progression: 'We are getting closer to isolating x and finding the solution interval',
            relationship: 'Each step removes one layer of operations around x',
            signTracking: step.signReversalOccurred ?
                'This is where the inequality sign reversed!' :
                'The inequality sign has remained consistent so far'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.inequalityTypes[problemType]?.category || 'one_step';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic arithmetic operations', 'Understanding of inequality symbols'];
    }

    // GRAPH GENERATION

    generateInequalityGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.inequalityTypes[type]?.category;

        if (category && this.currentSolution.graph) {
            this.graphData = this.generateInequalityGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateInequalityGraph(problem, solution) {
        if (solution.compoundType === 'conjunction') {
            return {
                type: 'compound_and',
                lowerBound: solution.graph.lowerBound,
                upperBound: solution.graph.upperBound,
                lowerCircle: solution.graph.lowerCircle,
                upperCircle: solution.graph.upperCircle,
                description: `Solution is between ${solution.graph.lowerBound} and ${solution.graph.upperBound}`,
                interval: solution.interval,
                visualization: 'Shade region between the two bounds'
            };
        } else if (solution.compoundType === 'disjunction') {
            return {
                type: 'compound_or',
                lowerBound: solution.graph.lowerBound,
                upperBound: solution.graph.upperBound,
                description: `Solution is less than ${solution.graph.lowerBound} or greater than ${solution.graph.upperBound}`,
                interval: solution.interval,
                visualization: 'Shade regions outside the two bounds'
            };
        } else {
            return {
                type: 'simple_inequality',
                criticalValue: solution.graph.criticalValue,
                circleType: solution.graph.circleType,
                direction: solution.graph.direction,
                description: `All values ${solution.graph.direction} of ${solution.graph.criticalValue}`,
                interval: solution.interval,
                visualization: `${solution.graph.circleType} circle at ${solution.graph.criticalValue}, arrow pointing ${solution.graph.direction}`
            };
        }
    }

    // WORKBOOK GENERATION

    generateInequalityWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createInequalityLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createGraphSection(),
            this.createIntervalNotationSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection(),
            this.createSignReversalReferenceSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Linear Inequality Mathematical Workbook',
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
            ['Problem Type', this.inequalityTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.inequalityTypes[this.currentProblem.type]?.category || 'inequality'],
            ['Inequality', this.currentSolution?.inequality || this.currentProblem.cleanInput],
            ['Description', this.currentProblem.scenario || 'Linear inequality']
        ];

        // Add inequality symbol info
        const inequalitySymbol = this.currentSolution?.inequality?.match(/[<>≤≥]/)?.[0];
        if (inequalitySymbol) {
            problemData.push(['Inequality Symbol', inequalitySymbol]);
            const symbolMeanings = {
                '<': 'less than (strict)',
                '>': 'greater than (strict)',
                '≤': 'less than or equal to (non-strict)',
                '≥': 'greater than or equal to (non-strict)'
            };
            problemData.push(['Symbol Meaning', symbolMeanings[inequalitySymbol] || '']);
        }

        // Add coefficients if available
        if (this.currentProblem.parameters.a !== undefined) {
            problemData.push(['', '']);
            problemData.push(['Coefficients', '']);
            if (this.currentProblem.parameters.a !== undefined) {
                problemData.push(['a (coefficient of x)', this.currentProblem.parameters.a]);
            }
            if (this.currentProblem.parameters.b !== undefined) {
                problemData.push(['b (constant term)', this.currentProblem.parameters.b]);
            }
            if (this.currentProblem.parameters.c !== undefined) {
                problemData.push(['c (right side)', this.currentProblem.parameters.c]);
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

        const category = this.inequalityTypes[this.currentProblem.type]?.category;
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
            // Skip bridge steps in basic display
            if (step.stepType === 'bridge' && this.explanationLevel === 'basic') {
                return;
            }

            // Main step
            if (step.stepType === 'bridge') {
                stepsData.push(['→ Bridge', step.title]);
                stepsData.push(['Explanation', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                if (step.explanation.signAwareness) {
                    stepsData.push(['⚠ WARNING', step.explanation.signAwareness]);
                }
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

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

            // Sign reversal warning
            if (step.signReversalOccurred) {
                stepsData.push(['⚠ SIGN REVERSAL', 'Inequality sign REVERSED!']);
                stepsData.push(['Reason', step.signReversalReason]);
            } else if (step.inequalityNote) {
                stepsData.push(['Inequality Note', step.inequalityNote]);
            }

            // Interval notation for solution step
            if (step.intervalNotation) {
                stepsData.push(['Interval Notation', step.intervalNotation]);
            }

            // Graph info
            if (step.graphInfo) {
                stepsData.push(['Graph', `${step.graphInfo.circleType} circle at ${step.graphInfo.criticalValue}, arrow ${step.graphInfo.direction}`]);
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
                if (step.ELI5.signReversalELI5) {
                    stepsData.push(['Why Sign Flips', step.ELI5.signReversalELI5]);
                }
            }

            // Enhanced explanations for detailed level
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Procedural', step.explanations.procedural]);
                stepsData.push(['Visual', step.explanations.visual]);
            }

            // Visual hints
            if (step.visualHint && (this.explanationLevel === 'intermediate' || this.explanationLevel === 'detailed')) {
                stepsData.push(['Visual Hint', step.visualHint]);
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
                const warnings = step.errorPrevention.warningFlags;
                if (warnings && warnings.length > 0) {
                    stepsData.push(['⚠ Warning Flags', warnings.join('; ')]);
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

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createInequalityLessonSection() {
        const { type } = this.currentProblem;
        const category = this.inequalityTypes[type]?.category;

        const lessonData = [
            ['Key Concepts', ''],
            ['', 'Inequalities represent relationships where one side is greater/less than the other'],
            ['', 'Goal: Find all values of x that make the inequality true'],
            ['', 'Solution is an interval (infinitely many values), not a single number'],
            ['', 'CRITICAL: Inequality sign reverses when multiplying/dividing by negative'],
            ['', 'Always maintain inequality by doing same to both sides'],
            ['', ''],
            ['Important Properties', ''],
            ['', 'Addition/Subtraction Property: Sign stays same'],
            ['', 'Multiplication/Division Property: Sign reverses if multiplier/divisor is negative'],
            ['', 'Transitive Property: If a < b and b < c, then a < c'],
            ['', ''],
            ['Sign Reversal Rule', ''],
            ['', '⚠ CRITICAL: Reverse inequality ONLY when:'],
            ['', '  • Multiplying both sides by a NEGATIVE number'],
            ['', '  • Dividing both sides by a NEGATIVE number'],
            ['', 'Do NOT reverse when:'],
            ['', '  • Adding or subtracting (any number)'],
            ['', '  • Multiplying or dividing by a POSITIVE number']
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

        if (this.currentSolution.solutionExpression) {
            solutionData.push(['Solution (Inequality)', this.currentSolution.solutionExpression]);
        }

        if (this.currentSolution.interval) {
            solutionData.push(['Solution (Interval)', this.currentSolution.interval]);
        }

        solutionData.push(['Solution Type', this.currentSolution.solutionType || 'Infinite solutions (interval)']);

        if (this.currentSolution.signReversalOccurred !== undefined) {
            solutionData.push(['', '']);
            solutionData.push(['Sign Reversal Occurred?', this.currentSolution.signReversalOccurred ? 'YES' : 'NO']);
            if (this.currentSolution.signReversalOccurred && this.currentSolution.signReversalReason) {
                solutionData.push(['Reason', this.currentSolution.signReversalReason]);
            }
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
            ['Category', this.inequalityTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.approach) {
            analysisData.push(['Approach', this.currentSolution.approach]);
        }

        if (this.currentSolution.compoundType) {
            analysisData.push(['Compound Type', this.currentSolution.compoundType]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;
        
        if (this.currentSolution.solutionType === 'No solution' || this.currentSolution.solutionType === 'All real numbers') {
            return {
                title: 'Solution Verification',
                type: 'verification',
                data: [
                    ['Verification', this.currentSolution.solutionType === 'No solution' ?
                        'No solution to verify' : 'All values satisfy the inequality']
                ]
            };
        }

        const verificationData = [
            ['Verification Method', 'Test value substitution'],
            ['', '']
        ];

        const verification = this.currentSolution.verification;
        if (verification) {
            verificationData.push(['Test Value', `x = ${verification.testValue}`]);
            verificationData.push(['Substitution', verification.substitution]);
            verificationData.push(['Left Side', verification.leftSide]);
            verificationData.push(['Right Side', verification.rightSide]);
            verificationData.push(['Inequality Check', verification.inequalityCheck]);
            verificationData.push(['Valid', verification.isValid ? 'Yes ✓' : 'No ✗']);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Verification Notes', 'Test value is from the solution interval']);
            verificationData.push(['Recommendation', 'Try additional test values to confirm']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createGraphSection() {
        if (!this.graphData) return null;

        const graphData = [
            ['Graph Type', this.graphData.type],
            ['Description', this.graphData.description],
            ['Visualization', this.graphData.visualization],
            ['', '']
        ];

        if (this.graphData.criticalValue !== undefined) {
            graphData.push(['Critical Value', this.graphData.criticalValue]);
            graphData.push(['Circle Type', this.graphData.circleType]);
            graphData.push(['Arrow Direction', this.graphData.direction]);
        }

        if (this.graphData.lowerBound !== undefined) {
            graphData.push(['Lower Bound', this.graphData.lowerBound]);
            graphData.push(['Upper Bound', this.graphData.upperBound]);
            
            if (this.graphData.lowerCircle) {
                graphData.push(['Lower Circle', this.graphData.lowerCircle]);
                graphData.push(['Upper Circle', this.graphData.upperCircle]);
            }
        }

        graphData.push(['', '']);
        graphData.push(['Graphing Guidelines', '']);
        graphData.push(['Open Circle (○)', 'Used for < and > (value NOT included)']);
        graphData.push(['Closed Circle (●)', 'Used for ≤ and ≥ (value IS included)']);
        graphData.push(['Arrow/Ray', 'Shows all values extending in that direction']);

        return {
            title: 'Solution Graph',
            type: 'graph',
            data: graphData
        };
    }

    createIntervalNotationSection() {
        if (!this.currentSolution || !this.currentSolution.interval) return null;

        const intervalData = [
            ['Interval Notation', this.currentSolution.interval],
            ['', ''],
            ['Notation Guide', ''],
            ['( ) Parentheses', 'Endpoint NOT included (for < and >)'],
            ['[ ] Brackets', 'Endpoint IS included (for ≤ and ≥)'],
            ['∞ Infinity', 'Always uses parenthesis ( ) never bracket'],
            ['-∞ Negative Infinity', 'Always uses parenthesis ( ) never bracket'],
            ['∪ Union', 'Combines intervals (for OR compound inequalities)'],
            ['', ''],
            ['Examples', ''],
            ['x < 5', '(-∞, 5)'],
            ['x ≥ -3', '[-3, ∞)'],
            ['2 < x ≤ 7', '(2, 7]'],
            ['x < -1 or x > 4', '(-∞, -1) ∪ (4, ∞)']
        ];

        return {
            title: 'Interval Notation',
            type: 'interval',
            data: intervalData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const category = this.inequalityTypes[this.currentProblem.type]?.category;
        const applications = Object.values(this.realWorldProblems).filter(app => {
            // Match applications to inequality type
            return true; // Show all for now
        }).slice(0, 3);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications of Inequalities', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Inequality Type', app.inequalityType]);
            appData.push(['Context', app.context]);
            if (app.examples && app.examples[0]) {
                appData.push(['Example', app.examples[0]]);
            }
            if (app.keyPhrase) {
                appData.push(['Key Phrase', app.keyPhrase]);
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

        const notes = this.generateInequalityPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateInequalityAlternativeMethods(this.currentProblem.type);

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
        const category = this.inequalityTypes[this.currentProblem.type]?.category;
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

    createSignReversalReferenceSection() {
        return {
            title: 'Sign Reversal Quick Reference',
            type: 'reference',
            data: [
                ['⚠ CRITICAL RULE', 'Reverse inequality sign ONLY when multiplying or dividing by NEGATIVE'],
                ['', ''],
                ['REVERSE Sign When:', ''],
                ['✓', 'Multiplying both sides by negative number'],
                ['✓', 'Dividing both sides by negative number'],
                ['', ''],
                ['DO NOT Reverse Sign When:', ''],
                ['✗', 'Adding any number (positive or negative)'],
                ['✗', 'Subtracting any number (positive or negative)'],
                ['✗', 'Multiplying by positive number'],
                ['✗', 'Dividing by positive number'],
                ['', ''],
                ['Examples', ''],
                ['-2x < 10', 'Divide by -2: x > -5 (REVERSED)'],
                ['3x < 12', 'Divide by 3: x < 4 (NOT reversed)'],
                ['x + 5 < 10', 'Subtract 5: x < 5 (NOT reversed)'],
                ['-x > 7', 'Multiply by -1: x < -7 (REVERSED)'],
                ['', ''],
                ['Memory Aid', 'Negative operation = flip the sign!']
            ]
        };
    }

    generateInequalityPedagogicalNotes(problemType) {
        const category = this.inequalityTypes[problemType]?.category;

        const pedagogicalDatabase = {
            one_step: {
                objectives: [
                    'Solve one-step linear inequalities',
                    'Apply inverse operations correctly',
                    'Understand and apply sign reversal rule',
                    'Express solutions in interval notation',
                    'Graph solutions on number line'
                ],
                keyConcepts: [
                    'Inverse operations undo each other',
                    'Maintain inequality by doing same to both sides',
                    'CRITICAL: Sign reverses when multiplying/dividing by negative',
                    'Solution is an interval, not a single value',
                    'Open vs closed circles on graphs'
                ],
                prerequisites: [
                    'Basic arithmetic operations',
                    'Understanding of inequality symbols',
                    'Concept of inverse operations',
                    'Number line familiarity'
                ],
                commonDifficulties: [
                    'Forgetting to reverse sign when dividing by negative',
                    'Reversing sign when shouldn\'t (for addition/subtraction)',
                    'Confusing open and closed circles',
                    'Not understanding that solution is a range',
                    'Incorrect interval notation'
                ],
                teachingStrategies: [
                    'Emphasize sign reversal rule repeatedly',
                    'Use number line visualization consistently',
                    'Practice identifying when to reverse sign',
                    'Connect to real-world constraints and limits',
                    'Use color coding for positive/negative coefficients'
                ],
                extensions: [
                    'Two-step inequalities',
                    'Inequalities with variables on both sides',
                    'Compound inequalities',
                    'Word problems with constraints'
                ],
                assessment: [
                    'Can student identify when sign reverses?',
                    'Does student apply operation to both sides?',
                    'Can student graph solution correctly?',
                    'Can student write interval notation?',
                    'Does student verify with test values?'
                ]
            },
            two_step: {
                objectives: [
                    'Solve two-step linear inequalities',
                    'Apply operations in correct order',
                    'Master sign reversal timing',
                    'Express and graph solutions'
                ],
                keyConcepts: [
                    'Undo operations in reverse order',
                    'Remove addition/subtraction first',
                    'Watch for negative coefficient on final step',
                    'Each step maintains or reverses inequality'
                ],
                prerequisites: [
                    'One-step inequalities',
                    'Order of operations',
                    'Sign reversal rule mastery'
                ],
                commonDifficulties: [
                    'Wrong order of operations',
                    'Forgetting sign reversal at end',
                    'Not recognizing negative coefficient',
                    'Interval notation errors'
                ],
                teachingStrategies: [
                    'Teach systematic approach',
                    'Highlight coefficient sign before dividing',
                    'Practice with both positive and negative coefficients',
                    'Use worked examples with clear sign checks'
                ],
                extensions: [
                    'Multi-step with distribution',
                    'Variables on both sides',
                    'Compound inequalities'
                ],
                assessment: [
                    'Does student undo in correct order?',
                    'Can student handle negative coefficients?',
                    'Does student check sign before dividing?',
                    'Can student graph and express in interval notation?'
                ]
            },
            variables_both_sides: {
                objectives: [
                    'Solve inequalities with variables on both sides',
                    'Collect terms strategically',
                    'Handle negative coefficients',
                    'Understand solution intervals'
                ],
                keyConcepts: [
                    'Collect variables on one side, constants on other',
                    'Strategic side choice can avoid negatives',
                    'Final coefficient sign determines if reversal needed',
                    'All real numbers or no solution possible'
                ],
                prerequisites: [
                    'Two-step inequalities',
                    'Combining like terms',
                    'Sign reversal mastery'
                ],
                commonDifficulties: [
                    'Moving terms incorrectly',
                    'Not recognizing negative final coefficient',
                    'Poor strategic side choice',
                    'Sign errors in combining'
                ],
                teachingStrategies: [
                    'Teach strategic variable collection',
                    'Emphasize checking final coefficient sign',
                    'Practice recognizing special cases',
                    'Use verification with test values'
                ],
                extensions: [
                    'Compound inequalities',
                    'Absolute value inequalities',
                    'Systems of inequalities'
                ],
                assessment: [
                    'Does student collect variables strategically?',
                    'Can student identify when final coefficient is negative?',
                    'Does student reverse sign when needed?',
                    'Can student recognize special cases?'
                ]
            },
            compound: {
                objectives: [
                    'Solve compound inequalities',
                    'Distinguish AND vs OR',
                    'Use interval notation with union',
                    'Graph compound solutions'
                ],
                keyConcepts: [
                    'AND means intersection (both conditions)',
                    'OR means union (either condition)',
                    'Between = AND, Outside = OR',
                    'Union symbol ∪ for OR'
                ],
                prerequisites: [
                    'Simple inequalities',
                    'Interval notation',
                    'Set operations basics'
                ],
                commonDifficulties: [
                    'Confusing AND vs OR',
                    'Incorrect union notation',
                    'Graphing errors',
                    'Misinterpreting word problems'
                ],
                teachingStrategies: [
                    'Use Venn diagrams for AND/OR',
                    'Connect to real-world ranges',
                    'Practice with number line visualization',
                    'Emphasize key words (between, outside)'
                ],
                extensions: [
                    'Absolute value inequalities',
                    'Three-part compounds',
                    'Systems of inequalities'
                ],
                assessment: [
                    'Can student identify AND vs OR?',
                    'Can student graph correctly?',
                    'Can student write union notation?',
                    'Can student solve word problems?'
                ]
            },
            absolute_value: {
                objectives: [
                    'Solve absolute value inequalities',
                    'Split into appropriate compound form',
                    'Understand distance interpretation',
                    'Graph absolute value solutions'
                ],
                keyConcepts: [
                    'Absolute value is distance from zero',
                    '|x| < c becomes compound AND',
                    '|x| > c becomes compound OR',
                    'Two regions for greater than'
                ],
                prerequisites: [
                    'Absolute value concept',
                    'Compound inequalities',
                    'Distance understanding'
                ],
                commonDifficulties: [
                    'Using OR when should use AND',
                    'Using AND when should use OR',
                    'Incorrect setup of cases',
                    'Sign errors in negative case'
                ],
                teachingStrategies: [
                    'Emphasize distance interpretation',
                    'Use number line for visualization',
                    'Mnemonic: "Less = close = AND, Greater = far = OR"',
                    'Practice identifying type first'
                ],
                extensions: [
                    'Absolute value with linear expressions',
                    'Multiple absolute values',
                    'Applications in tolerance'
                ],
                assessment: [
                    'Can student identify AND vs OR type?',
                    'Can student set up cases correctly?',
                    'Can student solve both parts?',
                    'Can student interpret distance meaning?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve linear inequalities'],
            keyConcepts: ['Inverse operations', 'Sign reversal rule'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Sign reversal errors'],
            teachingStrategies: ['Step-by-step instruction with sign checks'],
            extensions: ['More complex inequalities'],
            assessment: ['Verify understanding of sign reversal']
        };
    }

    generateInequalityAlternativeMethods(problemType) {
        const category = this.inequalityTypes[problemType]?.category;

        const alternativeDatabase = {
            one_step: {
                primaryMethod: 'Inverse Operations with Sign Reversal Check',
                methods: [
                    {
                        name: 'Number Line Method',
                        description: 'Visualize on number line first, then express algebraically'
                    },
                    {
                        name: 'Test Values Method',
                        description: 'Test values on both sides of critical point to determine direction'
                    },
                    {
                        name: 'Mental Math with Reversal',
                        description: 'For simple cases, solve mentally while checking for sign reversal'
                    }
                ],
                comparison: 'Inverse operations most systematic; number line good for visualization; mental math fastest for simple cases'
            },
            two_step: {
                primaryMethod: 'Systematic Inverse Operations with Sign Check',
                methods: [
                    {
                        name: 'Working Backwards',
                        description: 'Think about what happened to x and undo in reverse, checking signs'
                    },
                    {
                        name: 'Graphical Verification',
                        description: 'Graph and test points to verify solution region'
                    },
                    {
                        name: 'Strategic Coefficient Management',
                        description: 'Rearrange to keep coefficient positive if possible'
                    }
                ],
                comparison: 'Systematic approach most reliable; strategic management reduces reversal need; graphical helps verification'
            },
            variables_both_sides: {
                primaryMethod: 'Strategic Variable Collection',
                methods: [
                    {
                        name: 'Minimize Negatives',
                        description: 'Collect variables on side with larger coefficient to avoid negative result'
                    },
                    {
                        name: 'Standard Collection',
                        description: 'Always collect on left, handle reversal if needed'
                    },
                    {
                        name: 'Test Point Method',
                        description: 'Solve, then verify direction with test values'
                    }
                ],
                comparison: 'Minimizing negatives reduces errors; standard method more mechanical; test points verify correctness'
            },
            compound: {
                primaryMethod: 'Identify Type Then Solve Components',
                methods: [
                    {
                        name: 'Visual First',
                        description: 'Draw number line, identify regions, then express algebraically'
                    },
                    {
                        name: 'Solve Then Combine',
                        description: 'Solve each inequality separately, then combine with AND/OR'
                    },
                    {
                        name: 'Simultaneous Solving',
                        description: 'For AND type, work with all parts simultaneously'
                    }
                ],
                comparison: 'Visual method aids understanding; solving separately is methodical; simultaneous works well for AND type'
            },
            absolute_value: {
                primaryMethod: 'Distance Interpretation Then Case Split',
                methods: [
                    {
                        name: 'Case Analysis',
                        description: 'Split into positive and negative cases systematically'
                    },
                    {
                        name: 'Distance Method',
                        description: 'Think of distance from zero, determine range or exterior'
                    },
                    {
                        name: 'Formula Method',
                        description: 'Apply formulas: |x| < c → -c < x < c, |x| > c → x < -c or x > c'
                    }
                ],
                comparison: 'Distance method builds intuition; case analysis is systematic; formula method is fastest'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard algebraic approach with sign reversal awareness',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods may be applicable depending on problem structure'
            }],
            comparison: 'Choose method based on problem characteristics and comfort with sign reversal'
        };
    }
}

// Export the class
export default EnhancedLinearInequalityMathematicalWorkbook;
