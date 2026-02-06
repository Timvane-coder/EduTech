// Enhanced Simple Linear Mathematical Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedSimpleLinearMathematicalWorkbook {
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
        this.progressiveDisclosure = options.progressiveDisclosure || false; // Reveal complexity gradually

        // Metacognitive Support
        this.includeThinkingPrompts = options.includeThinkingPrompts !== false;
        this.includeSelfCheckQuestions = options.includeSelfCheckQuestions !== false;
        this.includeReflectionPoints = options.includeReflectionPoints || false;

        // Contextual Learning
        this.includeRealWorldApplications = options.includeRealWorldApplications !== false;
        this.includeCrossCurricularLinks = options.includeCrossCurricularLinks || false; // Physics, engineering, etc.
        this.includeHistoricalContext = options.includeHistoricalContext || false;

        // Assessment & Feedback
        this.includeFormativeQuizzes = options.includeFormativeQuizzes || false;
        this.includeHintSystem = options.includeHintSystem !== false;
        this.mistakeAnalysis = options.mistakeAnalysis !== false; // Analyze wrong attempts

        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializeLinearLessons();
        this.initializeLinearSolvers();
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
    }

    initializeLinearLessons() {
        this.lessons = {
            simple_linear: {
                title: "Simple Linear Equations",
                concepts: [
                    "General form: ax + b = c where a ≠ 0",
                    "Goal: find the value of x that makes the equation true",
                    "Solution is a single value",
                    "Represents a straight line when graphed"
                ],
                theory: "Linear equations represent relationships where the rate of change is constant. The coefficient 'a' is the slope, and 'b' affects the y-intercept.",
                keyFormulas: {
                    "Standard Form": "ax + b = c",
                    "Slope-Intercept Form": "y = mx + b",
                    "Solution Formula": "x = (c - b)/a"
                },
                solvingSteps: [
                    "Simplify both sides if needed",
                    "Isolate variable terms on one side",
                    "Isolate constant terms on the other side",
                    "Divide by coefficient to solve for x",
                    "Verify solution by substitution"
                ],
                applications: [
                    "Temperature conversions",
                    "Cost calculations",
                    "Distance-rate-time problems",
                    "Financial planning"
                ]
            },

            one_step_equations: {
                title: "One-Step Equations",
                concepts: [
                    "Single operation needed to isolate variable",
                    "Forms: x + a = b or x - a = b or ax = b or x/a = b",
                    "Use inverse operations",
                    "Simplest type of linear equation"
                ],
                theory: "One-step equations require only one inverse operation to solve. They teach the fundamental concept of balancing equations.",
                keyFormulas: {
                    "Addition": "x + a = b → x = b - a",
                    "Subtraction": "x - a = b → x = b + a",
                    "Multiplication": "ax = b → x = b/a",
                    "Division": "x/a = b → x = ab"
                },
                solvingSteps: [
                    "Identify the operation performed on x",
                    "Apply the inverse operation to both sides",
                    "Simplify to find x",
                    "Check solution"
                ],
                applications: [
                    "Simple shopping calculations",
                    "Basic measurement conversions",
                    "Elementary word problems"
                ]
            },

            two_step_equations: {
                title: "Two-Step Equations",
                concepts: [
                    "Two operations needed to isolate variable",
                    "Form: ax + b = c",
                    "Undo operations in reverse order (PEMDAS backwards)",
                    "Most common type of simple linear equation"
                ],
                theory: "Two-step equations combine multiplication/division with addition/subtraction. Solving requires working backwards through order of operations.",
                keyFormulas: {
                    "Standard Form": "ax + b = c",
                    "Solution": "x = (c - b)/a",
                    "Process": "Subtract b, then divide by a"
                },
                solvingSteps: [
                    "Subtract/add to isolate ax term",
                    "Divide/multiply to isolate x",
                    "Simplify the result",
                    "Verify by substitution"
                ],
                applications: [
                    "Rental cost problems",
                    "Payment plans",
                    "Recipe scaling",
                    "Temperature calculations"
                ]
            },

            multi_step_equations: {
                title: "Multi-Step Linear Equations",
                concepts: [
                    "Multiple operations required",
                    "May involve combining like terms",
                    "May require distributive property",
                    "Systematic approach essential"
                ],
                theory: "Multi-step equations require strategic thinking and systematic application of algebraic properties.",
                keyFormulas: {
                    "Distributive Property": "a(b + c) = ab + ac",
                    "Combining Like Terms": "ax + bx = (a + b)x",
                    "General Approach": "Simplify → Combine → Isolate → Solve"
                },
                solvingSteps: [
                    "Distribute and simplify both sides",
                    "Combine like terms on each side",
                    "Move variable terms to one side",
                    "Move constant terms to other side",
                    "Divide to solve for x",
                    "Check solution"
                ],
                applications: [
                    "Complex budgeting",
                    "Multi-step physics problems",
                    "Business profit calculations"
                ]
            },

            equations_with_fractions: {
                title: "Linear Equations with Fractions",
                concepts: [
                    "Clear fractions by multiplying by LCD",
                    "Alternative: work with fractions throughout",
                    "Careful with signs when clearing denominators",
                    "Result may be fraction or whole number"
                ],
                theory: "Equations with fractions can be solved by clearing denominators or by working with fractions directly. Both approaches are valid.",
                keyFormulas: {
                    "LCD Method": "Multiply both sides by LCD",
                    "Fraction Operations": "a/b + c/d = (ad + bc)/(bd)",
                    "Division": "a/b = c → a = bc"
                },
                solvingSteps: [
                    "Find LCD of all denominators",
                    "Multiply both sides by LCD",
                    "Simplify to whole number equation",
                    "Solve resulting equation",
                    "Verify solution"
                ],
                applications: [
                    "Ratio and proportion problems",
                    "Mixture problems",
                    "Work rate problems"
                ]
            },

            equations_with_decimals: {
                title: "Linear Equations with Decimals",
                concepts: [
                    "Can clear decimals by multiplying by power of 10",
                    "Alternative: work with decimals directly",
                    "Calculator useful for verification",
                    "Round final answer appropriately"
                ],
                theory: "Decimal equations can be converted to whole numbers by multiplying by appropriate powers of 10.",
                keyFormulas: {
                    "Clear Decimals": "Multiply by 10, 100, 1000, etc.",
                    "Decimal Operations": "Standard arithmetic with decimals"
                },
                solvingSteps: [
                    "Identify maximum decimal places",
                    "Multiply by appropriate power of 10",
                    "Solve resulting whole number equation",
                    "Express answer in required form"
                ],
                applications: [
                    "Money calculations",
                    "Measurement conversions",
                    "Scientific calculations"
                ]
            },

            variables_both_sides: {
                title: "Variables on Both Sides",
                concepts: [
                    "Variable terms appear on both sides of equation",
                    "Collect variable terms on one side",
                    "May result in one solution, no solution, or infinite solutions",
                    "Choose strategically which side for variables"
                ],
                theory: "When variables appear on both sides, we use addition/subtraction to consolidate all variable terms to one side.",
                keyFormulas: {
                    "Standard Process": "Move variables to one side",
                    "Simplification": "ax + b = cx + d → (a-c)x = d - b"
                },
                specialCases: {
                    "One Solution": "Variable term coefficient ≠ 0",
                    "No Solution": "0x = non-zero number (contradiction)",
                    "Infinite Solutions": "0x = 0 (identity)"
                },
                solvingSteps: [
                    "Simplify both sides",
                    "Move all variable terms to one side",
                    "Move all constants to other side",
                    "Divide by variable coefficient",
                    "Check for special cases"
                ],
                applications: [
                    "Comparison problems",
                    "Break-even analysis",
                    "Meeting point problems"
                ]
            },

            literal_equations: {
                title: "Literal Equations (Solving for a Variable)",
                concepts: [
                    "Equation with multiple variables",
                    "Solve for specified variable in terms of others",
                    "Same process as numerical equations",
                    "Result is a formula"
                ],
                theory: "Literal equations are formulas. Solving for one variable means expressing it in terms of the others.",
                keyFormulas: {
                    "Process": "Treat other variables as constants",
                    "Result": "Isolated variable = expression with other variables"
                },
                commonExamples: {
                    "Perimeter": "P = 2l + 2w → w = (P - 2l)/2",
                    "Distance": "d = rt → t = d/r",
                    "Temperature": "F = (9/5)C + 32 → C = (5/9)(F - 32)"
                },
                solvingSteps: [
                    "Identify variable to solve for",
                    "Treat other variables as constants",
                    "Use inverse operations",
                    "Isolate desired variable",
                    "Express as formula"
                ],
                applications: [
                    "Formula rearrangement",
                    "Scientific equations",
                    "Engineering formulas"
                ]
            },

            word_problems: {
                title: "Linear Word Problems",
                concepts: [
                    "Translate verbal descriptions to equations",
                    "Identify unknown and define variable",
                    "Set up equation from given information",
                    "Solve and interpret in context"
                ],
                theory: "Word problems require translation between verbal and mathematical language, then solving and interpreting the result.",
                problemTypes: {
                    "Number Problems": "Finding unknown numbers with given relationships",
                    "Age Problems": "Relating ages at different times",
                    "Distance/Rate/Time": "d = rt problems",
                    "Money/Cost": "Calculating prices, costs, budgets",
                    "Geometry": "Perimeter, area with unknown dimensions",
                    "Consecutive Integers": "n, n+1, n+2, etc."
                },
                solutionStrategy: [
                    "Read problem carefully, identify what's asked",
                    "Define variable clearly",
                    "Write equation from problem conditions",
                    "Solve equation",
                    "Check reasonableness in context",
                    "Answer with appropriate units"
                ],
                commonPhrases: {
                    "is": "=",
                    "sum": "+",
                    "difference": "-",
                    "product": "×",
                    "quotient": "÷",
                    "more than": "+",
                    "less than": "-",
                    "times": "×"
                }
            },

            proportion_problems: {
                title: "Proportions and Ratio Problems",
                concepts: [
                    "Proportion: equality of two ratios",
                    "Cross-multiplication to solve",
                    "Direct and inverse variation",
                    "Scale and similarity problems"
                ],
                theory: "Proportions express equal ratios. They are fundamental to similarity, scaling, and rate problems.",
                keyFormulas: {
                    "Proportion": "a/b = c/d",
                    "Cross-Multiply": "ad = bc",
                    "Direct Variation": "y = kx",
                    "Inverse Variation": "y = k/x"
                },
                solvingSteps: [
                    "Set up proportion correctly",
                    "Cross-multiply",
                    "Solve resulting linear equation",
                    "Check units and reasonableness"
                ],
                applications: [
                    "Map scaling",
                    "Recipe conversions",
                    "Unit conversions",
                    "Similar triangles"
                ]
            },

            percent_problems: {
                title: "Percent Equations",
                concepts: [
                    "Percent means per hundred",
                    "Convert percent to decimal",
                    "Three types: find part, find whole, find percent",
                    "Use equation: part = percent × whole"
                ],
                theory: "Percent problems are linear equations where we convert the percent to a decimal multiplier.",
                keyFormulas: {
                    "Basic Formula": "part = (percent/100) × whole",
                    "Find Percent": "percent = (part/whole) × 100",
                    "Percent Change": "change = (new - old)/old × 100"
                },
                problemTypes: [
                    "What is 25% of 80?",
                    "15 is what percent of 60?",
                    "30 is 40% of what number?",
                    "Percent increase/decrease"
                ],
                applications: [
                    "Sales tax calculations",
                    "Discounts and markups",
                    "Interest calculations",
                    "Statistics and data analysis"
                ]
            },

            absolute_value_equations: {
                title: "Simple Absolute Value Equations",
                concepts: [
                    "Absolute value is distance from zero",
                    "|x| = a means x = a or x = -a (when a > 0)",
                    "Form: |ax + b| = c",
                    "Two solutions (usually) or no solution"
                ],
                theory: "Absolute value equations have two solutions because a number and its opposite have the same absolute value.",
                keyFormulas: {
                    "Basic": "|x| = a → x = ±a (if a ≥ 0)",
                    "Linear": "|ax + b| = c → ax + b = c or ax + b = -c",
                    "No Solution": "|expression| = negative number"
                },
                solvingSteps: [
                    "Isolate absolute value expression",
                    "Check if right side is non-negative",
                    "Set up two equations (positive and negative)",
                    "Solve both equations",
                    "Check both solutions"
                ],
                applications: [
                    "Error tolerance in manufacturing",
                    "Temperature ranges",
                    "Measurement precision"
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
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥'
        };
    }

    initializeLinearSolvers() {
        this.linearTypes = {
            // One-step equations
            one_step_addition: {
                patterns: [
                    /x\s*\+\s*([+-]?\d+\.?\d*)\s*=\s*([+-]?\d+\.?\d*)/,
                    /solve.*x\s*\+/i
                ],
                solver: this.solveOneStepAddition.bind(this),
                name: 'One-Step Addition Equation',
                category: 'one_step',
                description: 'Solves x + a = b'
            },

            one_step_subtraction: {
                patterns: [
                    /x\s*-\s*([+-]?\d+\.?\d*)\s*=\s*([+-]?\d+\.?\d*)/,
                    /solve.*x\s*-/i
                ],
                solver: this.solveOneStepSubtraction.bind(this),
                name: 'One-Step Subtraction Equation',
                category: 'one_step',
                description: 'Solves x - a = b'
            },

            one_step_multiplication: {
                patterns: [
                    /([+-]?\d+\.?\d*)\s*x\s*=\s*([+-]?\d+\.?\d*)/,
                    /([+-]?\d+\.?\d*)x\s*=\s*([+-]?\d+\.?\d*)/
                ],
                solver: this.solveOneStepMultiplication.bind(this),
                name: 'One-Step Multiplication Equation',
                category: 'one_step',
                description: 'Solves ax = b'
            },

            one_step_division: {
                patterns: [
                    /x\s*\/\s*([+-]?\d+\.?\d*)\s*=\s*([+-]?\d+\.?\d*)/,
                    /\\frac\{x\}\{([+-]?\d+\.?\d*)\}\s*=\s*([+-]?\d+\.?\d*)/
                ],
                solver: this.solveOneStepDivision.bind(this),
                name: 'One-Step Division Equation',
                category: 'one_step',
                description: 'Solves x/a = b'
            },

            // Two-step equations
            two_step_standard: {
                patterns: [
                    /([+-]?\d+\.?\d*)\s*x\s*([+-]\s*\d+\.?\d*)\s*=\s*([+-]?\d+\.?\d*)/,
                    /two.*step/i
                ],
                solver: this.solveTwoStepStandard.bind(this),
                name: 'Two-Step Equation',
                category: 'two_step',
                description: 'Solves ax + b = c'
            },

            // Multi-step equations
            multi_step_standard: {
                patterns: [
                    /multi.*step/i,
                    /distribute/i
                ],
                solver: this.solveMultiStepStandard.bind(this),
                name: 'Multi-Step Equation',
                category: 'multi_step',
                description: 'Solves complex linear equations'
            },

            // Variables on both sides
            variables_both_sides: {
                patterns: [
                    /([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)\s*=\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)/,
                    /both.*sides/i
                ],
                solver: this.solveVariablesBothSides.bind(this),
                name: 'Variables on Both Sides',
                category: 'variables_both_sides',
                description: 'Solves ax + b = cx + d'
            },

            // Equations with fractions
            fractions: {
                patterns: [
                    /fraction/i,
                    /\/.*=.*\//,
                    /\\frac/
                ],
                solver: this.solveFractionEquation.bind(this),
                name: 'Equations with Fractions',
                category: 'fractions',
                description: 'Solves equations containing fractions'
            },

            // Equations with decimals
            decimals: {
                patterns: [
                    /\d+\.\d+/,
                    /decimal/i
                ],
                solver: this.solveDecimalEquation.bind(this),
                name: 'Equations with Decimals',
                category: 'decimals',
                description: 'Solves equations containing decimals'
            },

            // Absolute value equations
            absolute_value: {
                patterns: [
                    /\|.*\|\s*=/,
                    /abs\(/i,
                    /absolute.*value/i
                ],
                solver: this.solveAbsoluteValue.bind(this),
                name: 'Absolute Value Equation',
                category: 'absolute_value',
                description: 'Solves |ax + b| = c'
            },

            // Word problems - Number problems
            word_number: {
                patterns: [
                    /number.*more.*than/i,
                    /consecutive/i,
                    /sum.*number/i
                ],
                solver: this.solveWordNumber.bind(this),
                name: 'Number Word Problems',
                category: 'word_problems',
                description: 'Solves problems about numbers and their relationships'
            },

            // Word problems - Age problems
            word_age: {
                patterns: [
                    /age/i,
                    /years.*old/i,
                    /older.*younger/i
                ],
                solver: this.solveWordAge.bind(this),
                name: 'Age Word Problems',
                category: 'word_problems',
                description: 'Solves problems about ages'
            },

            // Word problems - Money/Cost
            word_money: {
                patterns: [
                    /cost/i,
                    /price/i,
                    /\$/,
                    /dollar/i,
                    /budget/i
                ],
                solver: this.solveWordMoney.bind(this),
                name: 'Money Word Problems',
                category: 'word_problems',
                description: 'Solves problems about money and costs'
            },

            // Proportion problems
            proportion: {
                patterns: [
                    /proportion/i,
                    /ratio/i,
                    /:\s*\d+\s*=\s*\d+\s*:/,
                    /\/.*=.*\//
                ],
                solver: this.solveProportion.bind(this),
                name: 'Proportion Problems',
                category: 'proportion',
                description: 'Solves proportions: a/b = c/d'
            },

            // Percent problems
            percent: {
                patterns: [
                    /%/,
                    /percent/i,
                    /what.*percent/i
                ],
                solver: this.solvePercent.bind(this),
                name: 'Percent Problems',
                category: 'percent',
                description: 'Solves percent problems'
            },

            // Literal equations
            literal: {
                patterns: [
                    /solve.*for.*[a-z]/i,
                    /literal/i,
                    /formula/i
                ],
                solver: this.solveLiteral.bind(this),
                name: 'Literal Equations',
                category: 'literal',
                description: 'Solves for specified variable'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            one_step: {
                'Subtract from both sides': [
                    'Subtracting instead of adding',
                    'Only subtracting from one side',
                    'Sign errors when subtracting negative numbers'
                ],
                'Divide both sides': [
                    'Dividing only one side',
                    'Sign errors when dividing by negative',
                    'Forgetting to simplify fraction'
                ]
            },
            two_step: {
                'Subtract constant term': [
                    'Subtracting in wrong order',
                    'Sign errors with negative constants',
                    'Not simplifying before next step'
                ],
                'Divide by coefficient': [
                    'Dividing only one side',
                    'Sign errors with negative coefficients',
                    'Arithmetic errors in division'
                ]
            },
            variables_both_sides: {
                'Collect variable terms': [
                    'Moving variable to wrong side',
                    'Sign errors when moving terms',
                    'Forgetting to subtract/add from both sides'
                ],
                'Combine like terms': [
                    'Incorrect combination of coefficients',
                    'Sign errors in combining',
                    'Forgetting terms'
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
                    'Sign errors after clearing'
                ]
            }
        };

        this.errorPrevention = {
            sign_errors: {
                reminder: 'Always track signs carefully, especially with negatives',
                method: 'Use parentheses around negative numbers'
            },
            both_sides: {
                reminder: 'Whatever you do to one side, do to the other',
                method: 'Draw a vertical line to represent the equals sign'
            },
            order_operations: {
                reminder: 'Undo operations in reverse order (PEMDAS backwards)',
                method: 'Identify operations in order, then undo from last to first'
            },
            verify_solution: {
                reminder: 'Always substitute answer back into original equation',
                method: 'Check both sides equal when solution is substituted'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this step works and its mathematical meaning',
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
                focus: 'Formal algebraic rules and properties',
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
            temperature: {
                scenario: "Converting between Fahrenheit and Celsius",
                equation: "F = (9/5)C + 32",
                examples: [
                    "Water freezes at 0°C. What is this in Fahrenheit?",
                    "If it's 77°F outside, what is the temperature in Celsius?"
                ],
                context: "Temperature conversion is essential for international travel, cooking, and science"
            },
            shopping: {
                scenario: "Calculating costs with tax or discounts",
                equation: "Total = Price + Tax/Sale Price = Original Price - Discount",
                examples: [
                    "A shirt costs $25. With 8% tax, what's the total?",
                    "A $60 item is 30% off. What do you pay?"
                ],
                context: "Understanding costs helps with budgeting and smart shopping"
            },
            phone_plan: {
                scenario: "Monthly phone bill with per-minute charges",
                equation: "Total = Base fee + (Rate × Minutes)",
                examples: [
                    "Plan costs $30/month plus $0.10/minute. Bill is $45. How many minutes used?"
                ],
                context: "Analyzing phone plans helps choose the best option"
            },
            taxi_fare: {
                scenario: "Taxi charges base fare plus per-mile rate",
                equation: "Fare = Base + (Rate × Miles)",
                examples: [
                    "Taxi charges $3.50 base plus $2/mile. Trip cost $15.50. How far did you travel?"
                ],
                context: "Understanding fare structures helps estimate travel costs"
            },
            recipe_scaling: {
                scenario: "Adjusting recipe ingredient amounts",
                equation: "New amount = Original × (New servings / Original servings)",
                examples: [
                    "Recipe for 4 needs 2 cups flour. How much for 6 people?"
                ],
                context: "Scaling recipes is essential for cooking for different group sizes"
            },
            distance_rate_time: {
                scenario: "Traveling at constant speed",
                equation: "Distance = Rate × Time",
                examples: [
                    "Driving at 60 mph, how long to travel 180 miles?",
                    "Walked 4 miles in 1.5 hours. What was your speed?"
                ],
                context: "Planning trips requires understanding distance-rate-time relationships"
            },
            bank_balance: {
                scenario: "Account balance after deposits and withdrawals",
                equation: "New balance = Old balance + Deposits - Withdrawals",
                examples: [
                    "Started with $500, deposited $200, withdrew $150. What's your balance?"
                ],
                context: "Managing money requires tracking account changes"
            },
            perimeter: {
                scenario: "Finding dimensions given perimeter",
                equation: "Perimeter = 2(length + width)",
                examples: [
                    "Rectangle perimeter is 50 feet. Length is 15 feet. Find width."
                ],
                context: "Fencing, framing, and border calculations use perimeter"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            one_step_addition: {
                skills: ['Addition', 'Subtraction', 'Understanding of equality'],
                priorKnowledge: ['Inverse operations', 'Number line'],
                checkQuestions: [
                    "What is 8 + 5?",
                    "What is 12 - 7?",
                    "What operation undoes addition?"
                ]
            },
            one_step_multiplication: {
                skills: ['Multiplication', 'Division', 'Fraction basics'],
                priorKnowledge: ['Inverse operations', 'Division as inverse of multiplication'],
                checkQuestions: [
                    "What is 6 × 7?",
                    "What is 24 ÷ 6?",
                    "What operation undoes multiplication?"
                ]
            },
            two_step: {
                skills: ['Order of operations', 'One-step equations', 'Combining operations'],
                priorKnowledge: ['BODMAS', 'Inverse operations in sequence'],
                checkQuestions: [
                    "What is 2 × 5 + 3?",
                    "Solve x + 5 = 12",
                    "Solve 3x = 15"
                ]
            },
            variables_both_sides: {
                skills: ['Two-step equations', 'Combining like terms', 'Negative coefficients'],
                priorKnowledge: ['Moving terms across equals sign', 'Sign rules'],
                checkQuestions: [
                    "Solve 2x + 3 = 11",
                    "Simplify 5x - 2x",
                    "What is 7 - (-3)?"
                ]
            },
            fractions: {
                skills: ['Fraction operations', 'LCD', 'Fraction multiplication'],
                priorKnowledge: ['Equivalent fractions', 'Finding LCD', 'Clearing fractions'],
                checkQuestions: [
                    "What is 1/2 + 1/3?",
                    "Find LCD of 4 and 6",
                    "Multiply: 3 × (2/5)"
                ]
            },
            absolute_value: {
                skills: ['Absolute value concept', 'Two-step equations', 'Number line'],
                priorKnowledge: ['Distance from zero', 'Positive and negative solutions'],
                checkQuestions: [
                    "What is |-5|?",
                    "What is |8|?",
                    "If |x| = 3, what could x be?"
                ]
            },
            word_problems: {
                skills: ['Reading comprehension', 'Translating words to math', 'Basic equations'],
                priorKnowledge: ['Key words (sum, difference, product, quotient)', 'Setting up equations'],
                checkQuestions: [
                    "What does 'sum' mean?",
                    "What operation for 'less than'?",
                    "If x is a number, write 'x increased by 5'"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            balance_scale: {
                description: "Equation as balanced scale",
                analogy: "Both sides must stay equal, like a balanced seesaw",
                visualization: "Draw scale with weights on both sides",
                suitableFor: ['one_step', 'two_step'],
                explanation: "Whatever you do to one side, do to the other to keep balance"
            },
            number_line: {
                description: "Solution as point on number line",
                analogy: "Finding a specific location on a map",
                visualization: "Mark solution point on horizontal line",
                suitableFor: ['all_linear'],
                explanation: "The solution is the x-coordinate where the equation is satisfied"
            },
            inverse_operations: {
                description: "Undoing operations step by step",
                analogy: "Like rewinding a video or undressing (reverse order)",
                visualization: "Show operation and its inverse with arrows",
                suitableFor: ['all_linear'],
                explanation: "Each operation has an inverse that undoes it"
            },
            algebra_tiles: {
                description: "Physical representation with tiles",
                analogy: "Building blocks that represent variables and numbers",
                visualization: "Rectangles for x, small squares for 1",
                suitableFor: ['one_step', 'two_step', 'multi_step'],
                explanation: "Visual model showing combining and removing terms"
            },
            graph: {
                description: "Solution as intersection point",
                analogy: "Where two paths cross on a map",
                visualization: "Graph of y = left side and y = right side",
                suitableFor: ['all_linear'],
                explanation: "Solution is x-value where both sides are equal"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "x + 5 = 12",
                    solution: 7,
                    steps: ["Subtract 5 from both sides", "x = 12 - 5", "x = 7"],
                    difficulty: "easy"
                },
                {
                    problem: "3x = 15",
                    solution: 5,
                    steps: ["Divide both sides by 3", "x = 15/3", "x = 5"],
                    difficulty: "easy"
                },
                {
                    problem: "2x + 3 = 11",
                    solution: 4,
                    steps: ["Subtract 3 from both sides", "2x = 8", "Divide by 2", "x = 4"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "5x - 7 = 18",
                    solution: 5,
                    steps: ["Add 7 to both sides", "5x = 25", "Divide by 5", "x = 5"],
                    difficulty: "medium"
                },
                {
                    problem: "3x + 4 = 2x + 10",
                    solution: 6,
                    steps: ["Subtract 2x from both sides", "x + 4 = 10", "Subtract 4", "x = 6"],
                    difficulty: "medium"
                },
                {
                    problem: "-2x + 5 = -3",
                    solution: 4,
                    steps: ["Subtract 5 from both sides", "-2x = -8", "Divide by -2", "x = 4"],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "2(x - 3) + 5 = 3x - 1",
                    solution: 0,
                    steps: ["Distribute: 2x - 6 + 5 = 3x - 1", "Combine: 2x - 1 = 3x - 1", "Subtract 2x: -1 = x - 1", "Add 1: 0 = x"],
                    difficulty: "hard"
                },
                {
                    problem: "(x/2) + 3 = 7",
                    solution: 8,
                    steps: ["Subtract 3: x/2 = 4", "Multiply by 2: x = 8"],
                    difficulty: "hard"
                },
                {
                    problem: "0.5x + 1.2 = 3.7",
                    solution: 5,
                    steps: ["Subtract 1.2: 0.5x = 2.5", "Divide by 0.5: x = 5"],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                one_step: [
                    { problem: "x + 8 = 15", solution: 7 },
                    { problem: "x - 4 = 10", solution: 14 },
                    { problem: "5x = 35", solution: 7 },
                    { problem: "x/3 = 6", solution: 18 }
                ],
                two_step: [
                    { problem: "2x + 5 = 15", solution: 5 },
                    { problem: "3x - 7 = 11", solution: 6 },
                    { problem: "-4x + 3 = -9", solution: 3 }
                ],
                variables_both_sides: [
                    { problem: "3x + 5 = 2x + 12", solution: 7 },
                    { problem: "5x - 3 = 3x + 9", solution: 6 },
                    { problem: "4x + 1 = 6x - 5", solution: 3 }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            sign_errors: {
                misconception: "Thinking -x means a negative number",
                reality: "-x is the opposite of x; if x is negative, -x is positive",
                correctiveExample: "If x = -3, then -x = -(-3) = 3",
                commonIn: ['multi_step', 'variables_both_sides']
            },
            one_sided_operations: {
                misconception: "Only performing operation on one side of equation",
                reality: "Must maintain equality by doing same to both sides",
                correctiveExample: "If x + 5 = 12, must subtract 5 from BOTH sides",
                commonIn: ['all_types']
            },
            order_confusion: {
                misconception: "Undoing operations in wrong order",
                reality: "Undo operations in reverse order of PEMDAS",
                correctiveExample: "For 2x + 3, undo addition first (+3), then multiplication (×2)",
                commonIn: ['two_step', 'multi_step']
            },
            division_by_variable: {
                misconception: "Dividing both sides by variable term",
                reality: "Can't divide by variable (might be zero); instead move terms",
                correctiveExample: "For 2x = 3x + 5, subtract 3x, don't divide by x",
                commonIn: ['variables_both_sides']
            },
            fraction_clearing: {
                misconception: "Only multiplying numerator by LCD",
                reality: "Multiply ENTIRE equation by LCD, all terms",
                correctiveExample: "For x/2 + 3 = 5, multiply ALL terms by 2: x + 6 = 10",
                commonIn: ['fractions']
            },
            absolute_value: {
                misconception: "|x| = -5 has solutions x = 5 and x = -5",
                reality: "Absolute value is never negative, so no solution",
                correctiveExample: "|x| = -5 has no solution; |x| always ≥ 0",
                commonIn: ['absolute_value']
            },
            proportion_setup: {
                misconception: "Setting up proportion incorrectly",
                reality: "Units must correspond correctly in ratios",
                correctiveExample: "If 2 apples cost $1, and x apples cost $3, then 2/1 = x/3 (not 2/x = 1/3)",
                commonIn: ['proportion']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            equation_solving: {
                analogy: "Unwrapping a present",
                explanation: "Just like unwrapping layers of wrapping paper to get to the gift inside, we undo operations layer by layer to reveal x",
                suitableFor: ['two_step', 'multi_step'],
                ELI5: "Imagine x is a toy inside boxes. We open one box at a time (undo one operation) until we get to the toy (the value of x)"
            },
            balance: {
                analogy: "Balanced seesaw",
                explanation: "An equation is like a seesaw with equal weight on both sides. To keep it balanced, whatever you do to one side, do to the other",
                suitableFor: ['all_types'],
                ELI5: "Think of a seesaw. If you add weight to one side, you must add the same weight to the other side to keep it balanced"
            },
            inverse_operations: {
                analogy: "Tying and untying shoes",
                explanation: "Tying your shoes is undone by untying them. Similarly, addition is undone by subtraction, multiplication by division",
                suitableFor: ['one_step', 'two_step'],
                ELI5: "If you put on your shoes, you take them off to undo it. If you add 5, you subtract 5 to undo it"
            },
            variables: {
                analogy: "Mystery box",
                explanation: "A variable is like a mystery box. We don't know what's inside yet, but we can figure it out using clues (the equation)",
                suitableFor: ['all_types'],
                ELI5: "x is like a secret number hiding in a box. The equation gives us clues to figure out what that secret number is"
            },
            absolute_value: {
                analogy: "Distance from home",
                explanation: "Absolute value is like distance from home. Whether you walk 5 blocks north or 5 blocks south, you're 5 blocks away",
                suitableFor: ['absolute_value'],
                ELI5: "If you walk 5 steps forward or 5 steps backward from your room, you're still 5 steps away from your room"
            },
            proportion: {
                analogy: "Recipe scaling",
                explanation: "Proportions are like scaling a recipe. If you double the servings, you double all ingredients in the same ratio",
                suitableFor: ['proportion'],
                ELI5: "If a recipe for 2 people needs 1 cup of flour, then for 4 people you need 2 cups - everything doubles together"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            one_step_addition: {
                level1: "What operation is being done to x?",
                level2: "You have x + something. What's the opposite of addition?",
                level3: "Subtract the number from both sides",
                level4: "Subtract {value} from both sides to get x = {answer}"
            },
            one_step_multiplication: {
                level1: "What operation is being done to x?",
                level2: "You have a number times x. What's the opposite of multiplication?",
                level3: "Divide both sides by the coefficient",
                level4: "Divide both sides by {coefficient} to get x = {answer}"
            },
            two_step: {
                level1: "What operations are being done to x, and in what order?",
                level2: "Undo the operations in reverse order - addition/subtraction first, then multiplication/division",
                level3: "First remove the constant term by adding or subtracting",
                level4: "Subtract {constant}, then divide by {coefficient}"
            },
            variables_both_sides: {
                level1: "What's different about this equation?",
                level2: "The variable appears on both sides. Can you collect all x terms on one side?",
                level3: "Subtract one of the x terms from both sides first",
                level4: "Subtract {smaller_coefficient}x from both sides, then solve normally"
            },
            fractions: {
                level1: "What makes this equation tricky?",
                level2: "Fractions make it complicated. Can you eliminate them?",
                level3: "Find the LCD of all denominators and multiply everything by it",
                level4: "Multiply both sides by {LCD} to clear fractions"
            }
        };
    }

initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Solve: x + 7 = 15",
                    answer: 8,
                    assesses: "one_step_addition",
                    difficulty: "basic"
                },
                {
                    question: "Solve: 3x = 21",
                    answer: 7,
                    assesses: "one_step_multiplication",
                    difficulty: "basic"
                },
                {
                    question: "Solve: 2x + 5 = 17",
                    answer: 6,
                    assesses: "two_step",
                    difficulty: "intermediate"
                },
                {
                    question: "Solve: 4x - 3 = 2x + 7",
                    answer: 5,
                    assesses: "variables_both_sides",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "What's the first step to solve 3x + 7 = 22?",
                    options: ["Divide by 3", "Subtract 7", "Add 7", "Subtract 3x"],
                    correct: "Subtract 7",
                    explanation: "Undo operations in reverse order - remove addition first"
                },
                {
                    question: "To solve x/4 = 5, you should:",
                    options: ["Divide by 4", "Multiply by 4", "Add 4", "Subtract 4"],
                    correct: "Multiply by 4",
                    explanation: "Multiplication undoes division"
                },
                {
                    question: "If 2x + 3 = 3x - 1, the first step is:",
                    options: ["Subtract 2x", "Subtract 3x", "Add 1", "Subtract 3"],
                    correct: "Subtract 2x",
                    explanation: "Collect all variable terms on one side first"
                }
            ],
            summative: [
                {
                    question: "Solve: 5(x - 2) + 3 = 2x + 4",
                    answer: 3,
                    showsWork: true,
                    rubric: {
                        distribute: 1,
                        combine_terms: 1,
                        isolate_variable: 1,
                        solve: 1,
                        check: 1
                    }
                },
                {
                    question: "Solve: (x/3) + 2 = (x/2) - 1",
                    answer: 18,
                    showsWork: true,
                    rubric: {
                        find_LCD: 1,
                        clear_fractions: 2,
                        solve: 1,
                        verify: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "x + 5 = 12",
                    "x - 3 = 8",
                    "4x = 20",
                    "x/2 = 6"
                ],
                medium: [
                    "3x + 7 = 22",
                    "5x - 4 = 16",
                    "2x + 3 = x + 10",
                    "-3x + 5 = -10"
                ],
                hard: [
                    "2(3x - 4) = 4(x + 1)",
                    "(2x + 1)/3 = (x - 2)/2",
                    "0.3x + 0.4 = 0.7x - 0.8",
                    "|2x - 3| = 7"
                ]
            },
            byObjective: {
                canSolveOneStep: [
                    "x + 9 = 14",
                    "x - 5 = 11",
                    "6x = 42",
                    "x/7 = 3"
                ],
                canSolveTwoStep: [
                    "4x + 3 = 19",
                    "5x - 2 = 18",
                    "2x + 7 = 1",
                    "-3x + 4 = 13"
                ],
                canSolveVariablesBothSides: [
                    "3x + 5 = 2x + 11",
                    "4x - 3 = 2x + 7",
                    "5x + 2 = 3x - 4"
                ],
                canSolveFractions: [
                    "x/2 + 3 = 7",
                    "(2x + 1)/3 = 5",
                    "x/4 = x/2 - 1"
                ],
                canSolveWordProblems: [
                    "A number increased by 8 is 23. Find the number.",
                    "Twice a number minus 5 is 11. What's the number?",
                    "John has 3 times as many marbles as Tom. Together they have 48. How many does Tom have?"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "one_operation": "One-step equation - use inverse operation directly",
                "two_operations": "Two-step equation - undo in reverse order",
                "variables_both_sides": "Collect variables on one side first",
                "parentheses_present": "Distribute first, then solve",
                "fractions_present": "Clear fractions by multiplying by LCD",
                "decimals_present": "Clear decimals by multiplying by power of 10 (or work with decimals)",
                "absolute_value": "Split into two cases: positive and negative"
            },
            whenToUseWhat: {
                inverse_operations: "For simple one-step and two-step equations",
                clearing_fractions: "When fractions make the equation complicated",
                clearing_decimals: "When decimals make arithmetic difficult",
                collecting_variables: "When variable appears on both sides",
                distributive_property: "When parentheses contain variables",
                substitution: "For literal equations or systems"
            },
            methodSelection: {
                factorsToConsider: [
                    "Number of operations on the variable",
                    "Presence of fractions or decimals",
                    "Variables on one or both sides",
                    "Use of parentheses or distribution",
                    "Complexity of coefficients"
                ],
                generalApproach: [
                    "1. Simplify both sides (distribute, combine like terms)",
                    "2. Move variables to one side, constants to other",
                    "3. Combine like terms",
                    "4. Isolate variable using inverse operations",
                    "5. Verify solution"
                ]
            },
            optimizationTips: {
                "Choose easier side for variables": "Collect variables on side with larger coefficient to avoid negatives",
                "Integer coefficients preferred": "Clear fractions/decimals early if it helps",
                "Simplify first": "Always simplify before moving terms",
                "Check as you go": "Verify each step to catch errors early"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "One-Step Sprint",
                    timeLimit: 60, // seconds
                    problems: [
                        "x + 5 = 12",
                        "x - 3 = 8",
                        "4x = 28",
                        "x/3 = 5",
                        "x + 9 = 15",
                        "2x = 18",
                        "x - 7 = 11",
                        "x/2 = 9"
                    ]
                },
                {
                    name: "Two-Step Challenge",
                    timeLimit: 120,
                    problems: [
                        "2x + 3 = 11",
                        "3x - 5 = 10",
                        "4x + 1 = 17",
                        "5x - 2 = 18",
                        "-2x + 7 = 3"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Coefficients",
                    problem: "□x + △ = ○",
                    given: "When x = 2, answer is 11. When x = 5, answer is 20.",
                    solve: "Find □, △, and ○",
                    solution: "□ = 3, △ = 5, equation is 3x + 5"
                },
                {
                    name: "Fill in the Blanks",
                    problem: "3x + __ = 2x + __",
                    constraint: "Solution is x = 7",
                    solution: "Many possibilities, e.g., 3x + 2 = 2x + 9"
                },
                {
                    name: "Equation Builder",
                    challenge: "Create an equation with solution x = 4",
                    constraints: "Must be two-step, use multiplication and subtraction",
                    sampleSolution: "3x - 5 = 7"
                }
            ],
            applications: [
                {
                    scenario: "Phone Plan Comparison",
                    problem: "Plan A: $30/month + $0.10/minute. Plan B: $40/month + $0.05/minute. When are they equal cost?",
                    equation: "30 + 0.10m = 40 + 0.05m",
                    solution: "200 minutes"
                },
                {
                    scenario: "Age Problem",
                    problem: "Maria is 3 years older than twice her brother's age. Maria is 17. How old is her brother?",
                    equation: "2x + 3 = 17",
                    solution: "7 years old"
                },
                {
                    scenario: "Temperature Conversion",
                    problem: "At what temperature is Celsius equal to Fahrenheit?",
                    equation: "C = (5/9)(C - 32) where F = C",
                    solution: "-40 degrees"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "3x + 5 = 20",
                        "3x = 20 - 5",  // Correct
                        "3x = 15",      // Correct
                        "x = 15 - 3",   // ERROR: should divide, not subtract
                        "x = 12"        // Wrong answer
                    ],
                    correctAnswer: "x = 5",
                    errorType: "Used subtraction instead of division"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "2x + 3 = x + 10",
                        "2x = x + 10 - 3",  // ERROR: forgot to subtract 3 from both sides
                        "2x = x + 7",
                        "x = 7"
                    ],
                    correctAnswer: "x = 7",
                    errorType: "Actually got right answer despite error in reasoning"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "5x - 3 = 3x + 9",
                        "5x - 3x = 9 - 3",  // ERROR: should be 9 + 3
                        "2x = 6",
                        "x = 3"
                    ],
                    correctAnswer: "x = 6",
                    errorType: "Sign error when moving constant term"
                }
            ]
        };
    }

// MAIN SOLVER METHOD
    solveLinearProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseLinearProblem(equation, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveLinearProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateLinearSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateLinearGraphData();

            // Generate workbook
            this.generateLinearWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionValue: this.currentSolution?.solution,
                solutionType: this.currentSolution?.solutionType
            };

        } catch (error) {
            throw new Error(`Failed to solve linear problem: ${error.message}`);
        }
    }

    parseLinearProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.linearTypes[problemType]) {
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

        // Auto-detect linear problem type
        for (const [type, config] of Object.entries(this.linearTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractLinearParameters(match, type);

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

        // Default to two-step if coefficients are provided
        if (parameters.a !== undefined || parameters.b !== undefined || parameters.c !== undefined) {
            return {
                originalInput: equation || 'Linear equation with given coefficients',
                cleanInput: cleanInput,
                type: 'two_step_standard',
                scenario: scenario,
                parameters: { 
                    a: parameters.a || 1, 
                    b: parameters.b || 0,
                    c: parameters.c || 0,
                    ...parameters 
                },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize linear problem type from: ${equation || scenario}`);
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

    extractLinearParameters(match, type) {
        const params = {};

        if (!match) return params;

        // Extract based on equation type
        switch(type) {
            case 'one_step_addition':
                params.b = this.parseCoefficient(match[1]);
                params.c = this.parseCoefficient(match[2]);
                params.a = 1;
                break;

            case 'one_step_subtraction':
                params.b = -this.parseCoefficient(match[1]);
                params.c = this.parseCoefficient(match[2]);
                params.a = 1;
                break;

            case 'one_step_multiplication':
                params.a = this.parseCoefficient(match[1]);
                params.c = this.parseCoefficient(match[2]);
                params.b = 0;
                break;

            case 'one_step_division':
                params.a = 1 / this.parseCoefficient(match[1]);
                params.c = this.parseCoefficient(match[2]);
                params.b = 0;
                break;

            case 'two_step_standard':
                params.a = this.parseCoefficient(match[1]) || 1;
                params.b = this.parseCoefficient(match[2]) || 0;
                params.c = this.parseCoefficient(match[3]) || 0;
                break;

            case 'variables_both_sides':
                params.a = this.parseCoefficient(match[1]) || 1;
                params.b = this.parseCoefficient(match[2]) || 0;
                params.c = this.parseCoefficient(match[3]) || 1;
                params.d = this.parseCoefficient(match[4]) || 0;
                break;
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

    solveLinearProblem_Internal(problem) {
        const solver = this.linearTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for linear problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // LINEAR EQUATION SOLVERS

    solveOneStepAddition(problem) {
        const { b, c } = problem.parameters;
        const solution = c - b;

        return {
            equation: `x + ${b} = ${c}`,
            type: 'One-Step Addition',
            operation: 'Subtract to isolate x',
            inverseOperation: 'Subtraction',
            solution: solution,
            solutionType: 'Single solution',
            verification: this.verifyLinearSolution(solution, 1, b, c),
            category: 'one_step'
        };
    }

    solveOneStepSubtraction(problem) {
        const { b, c } = problem.parameters;
        const solution = c + Math.abs(b);

        return {
            equation: `x - ${Math.abs(b)} = ${c}`,
            type: 'One-Step Subtraction',
            operation: 'Add to isolate x',
            inverseOperation: 'Addition',
            solution: solution,
            solutionType: 'Single solution',
            verification: this.verifyLinearSolution(solution, 1, b, c),
            category: 'one_step'
        };
    }

    solveOneStepMultiplication(problem) {
        const { a, c } = problem.parameters;
        
        if (Math.abs(a) < 1e-10) {
            if (Math.abs(c) < 1e-10) {
                return {
                    equation: `0x = 0`,
                    solutionType: 'Infinite solutions (identity)',
                    solution: 'All real numbers',
                    category: 'one_step'
                };
            } else {
                return {
                    equation: `0x = ${c}`,
                    solutionType: 'No solution (contradiction)',
                    solution: null,
                    category: 'one_step'
                };
            }
        }

        const solution = c / a;

        return {
            equation: `${a}x = ${c}`,
            type: 'One-Step Multiplication',
            operation: 'Divide to isolate x',
            inverseOperation: 'Division',
            solution: solution,
            solutionType: 'Single solution',
            verification: this.verifyLinearSolution(solution, a, 0, c),
            category: 'one_step'
        };
    }

    solveOneStepDivision(problem) {
        const { a, c } = problem.parameters;
        const divisor = 1 / a;
        const solution = c * divisor;

        return {
            equation: `x/${divisor} = ${c}`,
            type: 'One-Step Division',
            operation: 'Multiply to isolate x',
            inverseOperation: 'Multiplication',
            solution: solution,
            solutionType: 'Single solution',
            verification: this.verifyLinearSolution(solution, a, 0, c),
            category: 'one_step'
        };
    }

    solveTwoStepStandard(problem) {
        const { a, b, c } = problem.parameters;

        if (Math.abs(a) < 1e-10) {
            if (Math.abs(b - c) < 1e-10) {
                return {
                    equation: `${b} = ${c}`,
                    solutionType: 'Infinite solutions (identity)',
                    solution: 'All real numbers',
                    category: 'two_step'
                };
            } else {
                return {
                    equation: `${b} = ${c}`,
                    solutionType: 'No solution (contradiction)',
                    solution: null,
                    category: 'two_step'
                };
            }
        }

        const solution = (c - b) / a;

        return {
            equation: `${a}x + ${b} = ${c}`,
            type: 'Two-Step Equation',
            step1: `Subtract ${b} from both sides`,
            step2: `Divide both sides by ${a}`,
            solution: solution,
            solutionType: 'Single solution',
            verification: this.verifyLinearSolution(solution, a, b, c),
            category: 'two_step'
        };
    }

    solveMultiStepStandard(problem) {
        // For complex multi-step equations
        const { a, b, c } = problem.parameters;
        
        return {
            equation: problem.cleanInput || `${a}x + ${b} = ${c}`,
            type: 'Multi-Step Equation',
            approach: 'Simplify, combine like terms, then solve as two-step',
            solution: (c - b) / a,
            solutionType: 'Single solution',
            category: 'multi_step'
        };
    }

    solveVariablesBothSides(problem) {
        const { a, b, c, d } = problem.parameters;

        // ax + b = cx + d
        // Collect variables: (a - c)x = d - b

        const variableCoeff = a - c;
        const constantDiff = d - b;

        if (Math.abs(variableCoeff) < 1e-10) {
            if (Math.abs(constantDiff) < 1e-10) {
                return {
                    equation: `${a}x + ${b} = ${c}x + ${d}`,
                    solutionType: 'Infinite solutions (identity)',
                    solution: 'All real numbers',
                    explanation: 'Both sides are identical after simplification',
                    category: 'variables_both_sides'
                };
            } else {
                return {
                    equation: `${a}x + ${b} = ${c}x + ${d}`,
                    solutionType: 'No solution (contradiction)',
                    solution: null,
                    explanation: 'Equation simplifies to a false statement',
                    category: 'variables_both_sides'
                };
            }
        }

        const solution = constantDiff / variableCoeff;

        return {
            equation: `${a}x + ${b} = ${c}x + ${d}`,
            type: 'Variables on Both Sides',
            approach: 'Collect variable terms on one side, constants on other',
            simplifiedForm: `${variableCoeff}x = ${constantDiff}`,
            solution: solution,
            solutionType: 'Single solution',
            verification: this.verifyVariablesBothSides(solution, a, b, c, d),
            category: 'variables_both_sides'
        };
    }

solveFractionEquation(problem) {
        return {
            type: 'Equation with Fractions',
            approach: 'Find LCD and multiply both sides to clear fractions',
            note: 'Then solve resulting equation normally',
            category: 'fractions'
        };
    }

    solveDecimalEquation(problem) {
        return {
            type: 'Equation with Decimals',
            approach: 'Multiply by power of 10 to clear decimals, or work with decimals directly',
            note: 'Converting to whole numbers often simplifies arithmetic',
            category: 'decimals'
        };
    }

    solveAbsoluteValue(problem) {
        return {
            type: 'Absolute Value Equation',
            approach: 'Split into two cases: expression = positive value and expression = negative value',
            note: 'Check if right side is non-negative first',
            category: 'absolute_value'
        };
    }

    solveWordNumber(problem) {
        return {
            type: 'Number Word Problem',
            approach: 'Define variable, translate words to equation, solve',
            commonPhrases: this.lessons.word_problems.commonPhrases,
            category: 'word_problems'
        };
    }

    solveWordAge(problem) {
        return {
            type: 'Age Word Problem',
            approach: 'Set up equation relating ages, often involving addition/subtraction',
            tip: 'Draw a table with "Now" and "Then" columns if needed',
            category: 'word_problems'
        };
    }

    solveWordMoney(problem) {
        return {
            type: 'Money Word Problem',
            approach: 'Set up equation for total cost, revenue, or budget',
            formula: 'Total = base + (rate × quantity)',
            category: 'word_problems'
        };
    }

    solveProportion(problem) {
        return {
            type: 'Proportion',
            approach: 'Cross-multiply to create linear equation, then solve',
            formula: 'If a/b = c/d, then ad = bc',
            category: 'proportion'
        };
    }

    solvePercent(problem) {
        return {
            type: 'Percent Problem',
            approach: 'Convert percent to decimal, set up equation',
            formula: 'part = (percent/100) × whole',
            category: 'percent'
        };
    }

    solveLiteral(problem) {
        return {
            type: 'Literal Equation',
            approach: 'Treat other variables as constants and solve for specified variable',
            note: 'Same process as numerical equations',
            category: 'literal'
        };
    }

    // VERIFICATION METHODS

    verifyLinearSolution(x, a, b, c) {
        const leftSide = a * x + b;
        const rightSide = c;
        const difference = Math.abs(leftSide - rightSide);
        const isValid = difference < 1e-9;

        return {
            solution: x,
            substitution: `${a}(${x}) + ${b} = ${c}`,
            leftSide: leftSide,
            rightSide: rightSide,
            difference: difference,
            isValid: isValid
        };
    }

    verifyVariablesBothSides(x, a, b, c, d) {
        const leftSide = a * x + b;
        const rightSide = c * x + d;
        const difference = Math.abs(leftSide - rightSide);
        const isValid = difference < 1e-9;

        return {
            solution: x,
            substitution: `${a}(${x}) + ${b} = ${c}(${x}) + ${d}`,
            leftSide: leftSide,
            rightSide: rightSide,
            difference: difference,
            isValid: isValid
        };
    }

    // STEP GENERATION

    generateLinearSteps(problem, solution) {
        let baseSteps = this.generateBaseLinearSteps(problem, solution);

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

    generateBaseLinearSteps(problem, solution) {
        const { type } = problem;
        const category = this.linearTypes[type]?.category;

        switch(category) {
            case 'one_step':
                return this.generateOneStepSteps(problem, solution);
            case 'two_step':
                return this.generateTwoStepSteps(problem, solution);
            case 'variables_both_sides':
                return this.generateVariablesBothSidesSteps(problem, solution);
            default:
                return this.generateGenericLinearSteps(problem, solution);
        }
    }

    generateOneStepSteps(problem, solution) {
        const steps = [];
        const { a, b, c } = problem.parameters;

        // Step 1: Given equation
        steps.push({
            stepNumber: 1,
            step: 'Given equation',
            description: 'Start with the equation',
            expression: solution.equation,
            reasoning: 'This is a one-step equation requiring a single operation to solve',
            goalStatement: 'We need to isolate x using one inverse operation'
        });

        // Step 2: Apply inverse operation
        if (solution.type === 'One-Step Addition') {
            steps.push({
                stepNumber: 2,
                step: 'Subtract from both sides',
                description: `Subtract ${b} from both sides`,
                beforeExpression: solution.equation,
                operation: `- ${b}`,
                afterExpression: `x = ${c} - ${b}`,
                reasoning: 'Subtraction is the inverse of addition',
                algebraicRule: 'Addition Property of Equality'
            });
        } else if (solution.type === 'One-Step Subtraction') {
            steps.push({
                stepNumber: 2,
                step: 'Add to both sides',
                description: `Add ${Math.abs(b)} to both sides`,
                beforeExpression: solution.equation,
                operation: `+ ${Math.abs(b)}`,
                afterExpression: `x = ${c} + ${Math.abs(b)}`,
                reasoning: 'Addition is the inverse of subtraction',
                algebraicRule: 'Subtraction Property of Equality'
            });
        } else if (solution.type === 'One-Step Multiplication') {
            steps.push({
                stepNumber: 2,
                step: 'Divide both sides',
                description: `Divide both sides by ${a}`,
                beforeExpression: solution.equation,
                operation: `÷ ${a}`,
                afterExpression: `x = ${c}/${a}`,
                reasoning: 'Division is the inverse of multiplication',
                algebraicRule: 'Multiplication Property of Equality'
            });
        } else if (solution.type === 'One-Step Division') {
            const divisor = 1 / a;
            steps.push({
                stepNumber: 2,
                step: 'Multiply both sides',
                description: `Multiply both sides by ${divisor}`,
                beforeExpression: solution.equation,
                operation: `× ${divisor}`,
                afterExpression: `x = ${c} × ${divisor}`,
                reasoning: 'Multiplication is the inverse of division',
                algebraicRule: 'Division Property of Equality'
            });
        }

        // Step 3: Simplify
        steps.push({
            stepNumber: 3,
            step: 'Simplify',
            description: 'Calculate the final answer',
            expression: `x = ${solution.solution}`,
            finalAnswer: true,
            reasoning: 'This is the value of x that makes the equation true'
        });

        return steps;
    }

    generateTwoStepSteps(problem, solution) {
        const steps = [];
        const { a, b, c } = problem.parameters;

        // Step 1: Given equation
        steps.push({
            stepNumber: 1,
            step: 'Given equation',
            description: 'Start with the two-step equation',
            expression: solution.equation,
            reasoning: 'This equation requires two operations to solve: undoing addition/subtraction, then multiplication/division',
            goalStatement: 'We need to isolate x by undoing operations in reverse order'
        });

        // Step 2: Remove constant term
        steps.push({
            stepNumber: 2,
            step: 'Subtract constant term',
            description: `Subtract ${b} from both sides`,
            beforeExpression: `${a}x + ${b} = ${c}`,
            operation: `- ${b}`,
            afterExpression: `${a}x = ${c - b}`,
            reasoning: 'We undo the addition first (reverse order of operations)',
            algebraicRule: 'Subtraction Property of Equality',
            visualHint: 'Remove the constant term to isolate the variable term'
        });

        // Step 3: Divide by coefficient
        steps.push({
            stepNumber: 3,
            step: 'Divide by coefficient',
            description: `Divide both sides by ${a}`,
            beforeExpression: `${a}x = ${c - b}`,
            operation: `÷ ${a}`,
            afterExpression: `x = ${(c - b) / a}`,
            reasoning: 'We undo the multiplication to isolate x',
            algebraicRule: 'Division Property of Equality'
        });

        // Step 4: Final answer
        steps.push({
            stepNumber: 4,
            step: 'Solution',
            description: 'The equation is solved',
            expression: `x = ${solution.solution}`,
            finalAnswer: true,
            reasoning: 'This is the value that makes the original equation true'
        });

        return steps;
    }

    generateVariablesBothSidesSteps(problem, solution) {
        const steps = [];
        const { a, b, c, d } = problem.parameters;

        // Step 1: Given equation
        steps.push({
            stepNumber: 1,
            step: 'Given equation',
            description: 'Start with equation having variables on both sides',
            expression: solution.equation,
            reasoning: 'We need to collect all variable terms on one side first',
            goalStatement: 'Combine variable terms on one side, constants on the other'
        });

        // Step 2: Collect variable terms
        const varToSubtract = Math.min(a, c);
        steps.push({
            stepNumber: 2,
            step: 'Collect variable terms',
            description: `Subtract ${varToSubtract}x from both sides`,
            beforeExpression: `${a}x + ${b} = ${c}x + ${d}`,
            operation: `- ${varToSubtract}x`,
            afterExpression: `${a - varToSubtract}x + ${b} = ${c - varToSubtract}x + ${d}`,
            simplifiedExpression: `${a - c}x + ${b} = ${d}`,
            reasoning: 'This moves all x terms to one side',
            algebraicRule: 'Subtraction Property of Equality'
        });

        // Step 3: Collect constant terms
        steps.push({
            stepNumber: 3,
            step: 'Collect constant terms',
            description: `Subtract ${b} from both sides`,
            beforeExpression: `${a - c}x + ${b} = ${d}`,
            operation: `- ${b}`,
            afterExpression: `${a - c}x = ${d - b}`,
            reasoning: 'This moves all constants to the other side',
            algebraicRule: 'Subtraction Property of Equality'
        });

        // Step 4: Divide
        steps.push({
            stepNumber: 4,
            step: 'Divide by coefficient',
            description: `Divide both sides by ${a - c}`,
            beforeExpression: `${a - c}x = ${d - b}`,
            operation: `÷ ${a - c}`,
            afterExpression: `x = ${(d - b) / (a - c)}`,
            reasoning: 'This isolates x',
            algebraicRule: 'Division Property of Equality'
        });

        // Step 5: Final answer
        steps.push({
            stepNumber: 5,
            step: 'Solution',
            description: 'The equation is solved',
            expression: `x = ${solution.solution}`,
            finalAnswer: true
        });

        return steps;
    }

generateGenericLinearSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Linear equation',
            description: 'Solve the given linear equation',
            expression: problem.equation || solution.equation,
            reasoning: 'Apply appropriate linear solution technique',
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

        // Add thinking prompts if enabled
        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPrompts(step);
        }

        // Add self-check questions if enabled
        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestion(step);
        }

        // Add real-world connections if enabled
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
            'Given equation': "We have a math puzzle! The equation is like a mystery where we need to find what number x should be.",
            'Subtract from both sides': "Imagine you have the same number of toys on both sides of a balance. If you take away the same number from both sides, it stays balanced!",
            'Add to both sides': "It's like adding the same number of stickers to both sides of a balance - it stays even!",
            'Divide both sides': "If you have groups of things on both sides and you split each side into equal groups, both sides still have the same amount!",
            'Multiply both sides': "If you double everything on both sides (or triple, or whatever), both sides still match!",
            'Collect variable terms': "We're gathering all the x's together on one side, like putting all your toys in one toy box.",
            'Collect constant terms': "Now we're putting all the plain numbers together on the other side, like organizing your room."
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our puzzle and find out what x equals!";
    }

    findRelevantAnalogy(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('all_types')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like solving a puzzle - each step gets us closer to the answer!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'coefficient': 'the number next to x',
            'constant': 'the plain number',
            'inverse operation': 'the opposite action',
            'isolate': 'get x by itself',
            'substitute': 'put in place of',
            'simplify': 'make easier',
            'variable': 'the mystery letter (x)',
            'equation': 'math sentence with an equals sign',
            'solution': 'the answer'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualization(step) {
        const visualizations = {
            'Given equation': 'Draw a balance scale with boxes representing values on each side',
            'Subtract from both sides': 'Show removing the same number of objects from both sides of the scale',
            'Add to both sides': 'Show adding the same number of objects to both sides of the scale',
            'Divide both sides': 'Show splitting both sides into equal groups',
            'Multiply both sides': 'Show duplicating what\'s on both sides the same number of times',
            'Collect variable terms': 'Draw circles around all x terms and move them to one side',
            'Collect constant terms': 'Draw squares around all numbers and move them to the other side'
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
                    explanation: this.generateStepBridge(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    addErrorPrevention(step, problemType) {
        const category = this.linearTypes[problemType]?.category || 'one_step';
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

    // HELPER METHODS FOR ENHANCED EXPLANATIONS

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Given equation': 'An equation states that two expressions are equal. Our job is to find what value of x makes this true.',
            'Subtract from both sides': 'Equality is maintained when we perform the same operation on both sides. Subtraction removes unwanted terms.',
            'Add to both sides': 'Adding the same value to both sides keeps the equation balanced, like a seesaw.',
            'Divide both sides': 'Division separates the coefficient from the variable, revealing x\'s value.',
            'Multiply both sides': 'Multiplication eliminates division and helps isolate the variable.',
            'Collect variable terms': 'Gathering all x terms together simplifies the equation to a form we can solve more easily.',
            'Collect constant terms': 'Moving all plain numbers to one side creates a clear separation: variables on one side, numbers on the other.'
        };

        return conceptualExplanations[step.step] || 'This step brings us closer to isolating x and finding the solution.';
    }

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Identify the operation: ${step.operation}
2. Perform it on both sides of the equation
3. Simplify the result
4. Write the new equation`;
        }
        return 'Follow the standard procedure for this type of step.';
    }

    getVisualExplanation(step, problem) {
        const category = this.linearTypes[problem.type]?.category;
        
        const visualExplanations = {
            'one_step': 'Picture a balance scale. Whatever you do to one side, do to the other to keep it balanced.',
            'two_step': 'Imagine unwrapping a present: first remove the outer layer (constant), then the inner layer (coefficient).',
            'variables_both_sides': 'Think of two groups of items. Combine similar items from both groups, then solve.',
            'fractions': 'Visualize multiplying both sides by the same number to clear fractions, like converting everything to whole units.',
            'absolute_value': 'Picture distance from zero on a number line - same distance in either direction.'
        };

        return visualExplanations[category] || 'Visualize the equation as a balanced system.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Given equation': 'Equation in standard form',
            'Subtract from both sides': 'Subtraction Property of Equality: If a = b, then a - c = b - c',
            'Add to both sides': 'Addition Property of Equality: If a = b, then a + c = b + c',
            'Divide both sides': 'Division Property of Equality: If a = b and c ≠ 0, then a/c = b/c',
            'Multiply both sides': 'Multiplication Property of Equality: If a = b, then ac = bc',
            'Collect variable terms': 'Combining like terms using distributive property',
            'Collect constant terms': 'Isolating variable terms from constant terms'
        };

        return algebraicRules[step.step] || 'Apply standard algebraic principles.';
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
                'coefficient': 'number with x',
                'variable': 'x',
                'constant': 'plain number',
                'isolate': 'get by itself',
                'inverse operation': 'opposite',
                'substitute': 'plug in',
                'simplify': 'make simpler'
            },
            intermediate: {
                'coefficient': 'coefficient',
                'variable': 'variable',
                'constant': 'constant',
                'isolate': 'isolate',
                'inverse operation': 'inverse operation',
                'substitute': 'substitute',
                'simplify': 'simplify'
            },
            ELI5: {
                'coefficient': 'the number next to x',
                'variable': 'the mystery letter we\'re solving for',
                'constant': 'the regular number',
                'isolate': 'get x all alone',
                'inverse operation': 'the opposite action that undoes it',
                'substitute': 'replace with',
                'simplify': 'make it easier and cleaner',
                'equation': 'a math sentence that says two things are equal'
            },
            detailed: {
                'coefficient': 'coefficient (numerical factor)',
                'variable': 'variable (unknown quantity)',
                'constant': 'constant term',
                'isolate': 'isolate (separate variable)',
                'inverse operation': 'inverse operation (undoing operation)',
                'substitute': 'substitute (replace)',
                'simplify': 'simplify (reduce to simplest form)'
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
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue isolating the variable`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return `we need to continue simplifying and isolating x`;
    }

    explainStepBenefit(nextStep) {
        return `bringing us closer to the solution`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Subtract from both sides': [
                'Remember to subtract from BOTH sides',
                'Watch your signs when subtracting negative numbers',
                'Double-check your arithmetic'
            ],
            'Divide both sides': [
                'Divide BOTH sides by the coefficient',
                'Be careful with negative coefficients',
                'Simplify fractions if needed'
            ],
            'Collect variable terms': [
                'Subtract the smaller coefficient to avoid negatives',
                'Remember to move the entire term, including its sign',
                'Combine coefficients correctly'
            ]
        };

        return tips[step.step] || ['Check your arithmetic', 'Work carefully'];
    }

    generateCheckPoints(step) {
        return [
            'Did I perform the same operation on both sides?',
            'Are my signs correct?',
            'Did I simplify completely?',
            'Does this step move me toward isolating x?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            one_step: step.step === 'Divide both sides' ?
                ['Watch for division by zero', 'Check signs when dividing negatives'] : [],
            two_step: step.step === 'Subtract constant term' ?
                ['Make sure to subtract from BOTH sides', 'Watch signs'] : [],
            variables_both_sides: step.step === 'Collect variable terms' ?
                ['Don\'t divide by variable', 'Move terms correctly with signs'] : []
        };

        const category = this.linearTypes[problemType]?.category || 'one_step';
        return warnings[category] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Given equation': 'Do I understand what the equation is asking me to find?',
            'Subtract from both sides': 'Did I subtract the same value from both sides?',
            'Add to both sides': 'Did I add the same value to both sides?',
            'Divide both sides': 'Did I divide both sides by the same non-zero number?',
            'Multiply both sides': 'Did I multiply both sides by the same number?',
            'Collect variable terms': 'Did I move all x terms to one side correctly?',
            'Collect constant terms': 'Are all plain numbers on one side now?'
        };

        return questions[step.step] || 'Does this step make sense and move me toward the solution?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Given equation': 'An equation with x and numbers',
            'Subtract from both sides': 'An equation with one less term or simpler terms',
            'Add to both sides': 'An equation with combined or simplified terms',
            'Divide both sides': 'x isolated on one side',
            'Multiply both sides': 'Fractions cleared or x closer to being isolated',
            'Collect variable terms': 'All x terms on one side',
            'Collect constant terms': 'All numbers on the opposite side from x'
        };

        return expectations[step.step] || 'Progress toward isolating x';
    }

    generateTroubleshootingTips(step) {
        return [
            'If stuck, review the previous step',
            'Check that you performed the operation on both sides',
            'Verify your arithmetic carefully',
            'Try explaining the step out loud',
            'Draw a picture if it helps'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Given equation': [
                'What is the equation asking us to find?',
                'What operations are being performed on x?',
                'What type of equation is this?'
            ],
            'Subtract from both sides': [
                'What term do we need to remove?',
                'What is the inverse operation of addition?',
                'Did I subtract from both sides?'
            ],
            'Add to both sides': [
                'What term do we need to remove?',
                'What is the inverse operation of subtraction?',
                'Did I add to both sides?'
            ],
            'Divide both sides': [
                'What is multiplying x right now?',
                'What is the inverse operation of multiplication?',
                'Did I divide both sides by the same number?'
            ],
            'Collect variable terms': [
                'Where are all the x terms?',
                'Which side should I collect them on?',
                'What do I need to subtract to move them?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help solve the equation?'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.linearTypes[problem.type]?.category || 'one_step';
        const hintSet = this.hints[category] || this.hints.one_step_addition;

        return {
            level1: hintSet.level1 || 'Think about what mathematical operation applies here.',
            level2: hintSet.level2 || 'Consider what operation you need to undo.',
            level3: hintSet.level3 || 'Apply the inverse operation to both sides.',
            level4: hintSet.level4 || 'Perform the specific operation needed.'
        };
    }

    breakIntoSubSteps(step) {
        if (step.operation) {
            return [
                'Identify what operation to perform',
                `Apply ${step.operation} to the left side`,
                `Apply ${step.operation} to the right side`,
                'Simplify both sides',
                'Write the new equation'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same type of problem with different numbers',
            practiceHint: 'Practice with simpler numbers first to build confidence',
            extension: 'Once comfortable, try problems with fractions or negatives'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What do I see in this equation?',
            goal: 'What am I trying to accomplish?',
            strategy: 'What operation should I use?',
            execute: 'How do I perform this operation correctly?',
            verify: 'Does my result make sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which operation to undo first?',
            'Which side to collect variable terms on?',
            'Whether to clear fractions/decimals or work with them?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'Divide both sides': [
                'Could multiply both sides by reciprocal instead',
                'Could work with fractions if more comfortable'
            ],
            'Subtract from both sides': [
                'Could add the opposite instead',
                'Could think of it as moving the term to the other side'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate for this problem'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing to simplify the equation`,
            progression: 'We are getting closer to isolating x',
            relationship: 'Each step removes one layer of operations around x'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.linearTypes[problemType]?.category || 'one_step';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic arithmetic operations'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Given equation': ['equation', 'variable', 'constant', 'coefficient'],
            'Subtract from both sides': ['subtract', 'both sides', 'equality', 'inverse'],
            'Add to both sides': ['add', 'both sides', 'equality', 'inverse'],
            'Divide both sides': ['divide', 'coefficient', 'both sides', 'quotient'],
            'Multiply both sides': ['multiply', 'both sides', 'product'],
            'Collect variable terms': ['variable', 'like terms', 'combine', 'coefficient'],
            'Collect constant terms': ['constant', 'isolate', 'simplify']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before I start this step, what do I need to identify?',
            during: 'As I work through this step, what should I be careful about?',
            after: 'After completing this step, how can I check if it\'s correct?'
        };
    }

    findRealWorldConnection(step, problem) {
        const connections = {
            'one_step': 'Like calculating change when shopping: if total is $12 and item costs $8, you subtract to find tax.',
            'two_step': 'Like figuring out taxi fare: if total is $25 and base fare is $5, you subtract then divide by per-mile rate.',
            'variables_both_sides': 'Like comparing phone plans: when do two different plans cost the same?'
        };

        const category = this.linearTypes[problem.type]?.category;
        return connections[category] || 'Equations help us solve real problems involving unknown values.';
    }

    // GRAPH GENERATION

    generateLinearGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.linearTypes[type]?.category;

        if (category && this.currentSolution.solution !== null && this.currentSolution.solution !== 'All real numbers') {
            this.graphData = this.generateLineGraph(this.currentProblem, this.currentSolution);
        }
    }

// GRAPH GENERATION

    generateLinearGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.linearTypes[type]?.category;

        if (category && this.currentSolution.solution !== null && this.currentSolution.solution !== 'All real numbers') {
            this.graphData = this.generateLineGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateLineGraph(problem, solution) {
        const { a, b, c } = problem.parameters;
        
        // For equation ax + b = c, this represents a vertical line at x = solution
        // Or we can graph y = ax + b and y = c as two lines that intersect

        const xSolution = solution.solution;
        
        return {
            type: 'linear',
            solutionPoint: xSolution,
            description: `The solution x = ${xSolution} is where the equation is satisfied`,
            graphType: 'number_line',
            visualization: 'Mark the solution point on a number line'
        };
    }

    // WORKBOOK GENERATION

    generateLinearWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createLinearLessonSection(),
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
            title: 'Enhanced Simple Linear Mathematical Workbook',
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
            ['Problem Type', this.linearTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.linearTypes[this.currentProblem.type]?.category || 'linear'],
            ['Equation', this.currentSolution?.equation || this.currentProblem.cleanInput],
            ['Description', this.currentProblem.scenario || 'Simple linear equation']
        ];

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

        const category = this.linearTypes[this.currentProblem.type]?.category;
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

            // Enhanced explanations for detailed level
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Procedural', step.explanations.procedural]);
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

    createLinearLessonSection() {
        const { type } = this.currentProblem;
        const category = this.linearTypes[type]?.category;

        const lessonData = [
            ['Key Concepts', ''],
            ['', 'Linear equations represent constant rate relationships'],
            ['', 'Goal: Find the value of x that makes the equation true'],
            ['', 'Solution process: Isolate x using inverse operations'],
            ['', 'Always maintain equality by doing same to both sides'],
            ['', ''],
            ['Important Properties', ''],
            ['', 'Addition/Subtraction Property of Equality'],
            ['', 'Multiplication/Division Property of Equality'],
            ['', 'Inverse operations undo each other']
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

        if (this.currentSolution.solution !== null && this.currentSolution.solution !== undefined) {
            if (this.currentSolution.solution === 'All real numbers') {
                solutionData.push(['Solution Type', this.currentSolution.solutionType]);
                solutionData.push(['Solution', this.currentSolution.solution]);
                solutionData.push(['Explanation', this.currentSolution.explanation || 'Identity equation']);
            } else if (this.currentSolution.solution === null) {
                solutionData.push(['Solution Type', this.currentSolution.solutionType]);
                solutionData.push(['Solution', 'No solution']);
                solutionData.push(['Explanation', this.currentSolution.explanation || 'Contradiction']);
            } else {
                solutionData.push(['Solution', `x = ${this.currentSolution.solution}`]);
                solutionData.push(['Solution Type', this.currentSolution.solutionType || 'Single solution']);
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
            ['Category', this.linearTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.approach) {
            analysisData.push(['Approach', this.currentSolution.approach]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;
        if (this.currentSolution.solution === null || this.currentSolution.solution === 'All real numbers') {
            return {
                title: 'Solution Verification',
                type: 'verification',
                data: [
                    ['Verification', this.currentSolution.solutionType === 'No solution (contradiction)' ?
                        'No solution to verify' : 'All values satisfy the equation']
                ]
            };
        }

        const verificationData = [
            ['Verification Method', 'Substitution'],
            ['', '']
        ];

        const verification = this.currentSolution.verification;
        if (verification) {
            verificationData.push(['Solution', `x = ${verification.solution}`]);
            verificationData.push(['Substitution', verification.substitution]);
            verificationData.push(['Left Side', verification.leftSide]);
            verificationData.push(['Right Side', verification.rightSide]);
            verificationData.push(['Difference', verification.difference.toExponential(2)]);
            verificationData.push(['Valid', verification.isValid ? 'Yes ✓' : 'No']);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Confidence Level', 'High']);
            verificationData.push(['Verification Notes', 'Solution verified through direct substitution']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const category = this.linearTypes[this.currentProblem.type]?.category;
        const applications = Object.values(this.realWorldProblems).filter(app => {
            // Match applications to equation type
            return true; // Show all for now
        }).slice(0, 3);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications', ''],
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

        const notes = this.generateLinearPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateLinearAlternativeMethods(this.currentProblem.type);

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
        const category = this.linearTypes[this.currentProblem.type]?.category;
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

    generateLinearPedagogicalNotes(problemType) {
        const category = this.linearTypes[problemType]?.category;

        const pedagogicalDatabase = {
            one_step: {
                objectives: [
                    'Solve one-step linear equations',
                    'Apply inverse operations correctly',
                    'Verify solutions through substitution'
                ],
                keyConcepts: [
                    'Inverse operations undo each other',
                    'Maintain equality by doing same to both sides',
                    'Solution is the value that makes equation true'
                ],
                prerequisites: [
                    'Basic arithmetic operations',
                    'Understanding of equality',
                    'Concept of inverse operations'
                ],
                commonDifficulties: [
                    'Forgetting to apply operation to both sides',
                    'Sign errors with negative numbers',
                    'Choosing wrong inverse operation'
                ],
                teachingStrategies: [
                    'Use balance scale analogy',
                    'Practice identifying inverse operations',
                    'Emphasize "both sides" repeatedly'
                ],
                extensions: [
                    'Two-step equations',
                    'Equations with fractions',
                    'Word problems'
                ],
                assessment: [
                    'Can student identify the operation?',
                    'Does student apply to both sides?',
                    'Can student verify the solution?'
                ]
            },
            two_step: {
                objectives: [
                    'Solve two-step linear equations',
                    'Apply operations in correct order',
                    'Understand PEMDAS in reverse'
                ],
                keyConcepts: [
                    'Undo operations in reverse order',
                    'Remove addition/subtraction first, then multiplication/division',
                    'Each step simplifies the equation'
                ],
                prerequisites: [
                    'One-step equations',
                    'Order of operations',
                    'Combining like terms'
                ],
                commonDifficulties: [
                    'Wrong order of operations',
                    'Sign errors when subtracting',
                    'Division errors with fractions'
                ],
                teachingStrategies: [
                    'Teach "unwrapping" analogy',
                    'Practice identifying order of operations',
                    'Use color coding for different operations'
                ],
                extensions: [
                    'Multi-step equations with distribution',
                    'Variables on both sides',
                    'Equations with fractions and decimals'
                ],
                assessment: [
                    'Can student identify both operations?',
                    'Does student undo in correct order?',
                    'Can student handle negative coefficients?'
                ]
            },
            variables_both_sides: {
                objectives: [
                    'Solve equations with variables on both sides',
                    'Collect like terms strategically',
                    'Recognize special cases (no solution, infinite solutions)'
                ],
                keyConcepts: [
                    'Collect variables on one side, constants on other',
                    'Choose which side strategically',
                    'Watch for contradictions and identities'
                ],
                prerequisites: [
                    'Two-step equations',
                    'Combining like terms',
                    'Working with negative coefficients'
                ],
                commonDifficulties: [
                    'Moving terms incorrectly',
                    'Sign errors when collecting terms',
                    'Not recognizing special cases'
                ],
                teachingStrategies: [
                    'Teach strategic side selection',
                    'Practice recognizing patterns',
                    'Use different colors for left and right sides'
                ],
                extensions: [
                    'Equations with distribution on both sides',
                    'Systems of equations',
                    'Literal equations'
                ],
                assessment: [
                    'Does student collect variables correctly?',
                    'Can student identify special cases?',
                    'Does student verify solutions?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve linear equations'],
            keyConcepts: ['Inverse operations', 'Maintaining equality'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex equations'],
            assessment: ['Verify understanding of process']
        };
    }

    generateLinearAlternativeMethods(problemType) {
        const category = this.linearTypes[problemType]?.category;

        const alternativeDatabase = {
            one_step: {
                primaryMethod: 'Inverse Operations',
                methods: [
                    {
                        name: 'Balance Scale Method',
                        description: 'Visualize equation as balanced scale and remove equal amounts from both sides'
                    },
                    {
                        name: 'Cover-Up Method',
                        description: 'Cover the variable and ask "what plus/times this equals that?"'
                    },
                    {
                        name: 'Mental Math',
                        description: 'For simple equations, solve mentally by thinking backwards'
                    }
                ],
                comparison: 'Inverse operations is most systematic; cover-up good for simple cases; mental math fastest for easy problems'
            },
            two_step: {
                primaryMethod: 'Systematic Inverse Operations',
                methods: [
                    {
                        name: 'Working Backwards',
                        description: 'Think about what happened to x and undo it in reverse order'
                    },
                    {
                        name: 'Guess and Check',
                        description: 'For simple equations, guess a value and adjust (not recommended for complex cases)'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Graph both sides and find intersection point'
                    }
                ],
                comparison: 'Systematic approach is most reliable; working backwards helps understanding; graphing provides visual confirmation'
            },
            variables_both_sides: {
                primaryMethod: 'Collecting Like Terms',
                methods: [
                    {
                        name: 'Moving Terms Method',
                        description: 'Think of moving terms across equals sign (changes sign)'
                    },
                    {
                        name: 'Balancing Method',
                        description: 'Add/subtract same term from both sides explicitly'
                    },
                    {
                        name: 'Substitution Check',
                        description: 'Try test values to narrow down solution range first'
                    }
                ],
                comparison: 'Collecting terms most systematic; moving terms faster once understood; balancing method most explicit'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard algebraic approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods may be applicable depending on problem structure'
            }],
            comparison: 'Choose method based on problem characteristics and personal preference'
        };
    }
}

// Export the class
export default EnhancedSimpleLinearMathematicalWorkbook;
