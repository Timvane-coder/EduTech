// Enhanced Simultaneous Equations Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedSimultaneousEquationsWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2400;
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
        this.initializeSimultaneousSolvers();
        this.initializeSimultaneousLessons();
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
        this.initializeHistoricalContext();
    }

    initializeSimultaneousLessons() {
        this.lessons = {
            substitution_method: {
                title: "Substitution Method",
                concepts: [
                    "Solve one equation for one variable",
                    "Substitute expression into other equation",
                    "Solve resulting equation with one variable",
                    "Back-substitute to find other variable"
                ],
                theory: "The substitution method isolates one variable in terms of the other, then substitutes this expression to create a single-variable equation.",
                keyFormulas: {
                    "General Form": "Equation 1: a₁x + b₁y = c₁, Equation 2: a₂x + b₂y = c₂",
                    "Isolation": "From Eq1: y = (c₁ - a₁x)/b₁",
                    "Substitution": "Replace y in Eq2 with isolated expression"
                },
                solvingSteps: [
                    "Choose easier equation to solve for one variable",
                    "Isolate chosen variable (express in terms of other)",
                    "Substitute expression into second equation",
                    "Solve resulting single-variable equation",
                    "Back-substitute to find second variable",
                    "Verify solution in both original equations"
                ],
                advantages: [
                    "Good when one variable has coefficient of 1 or -1",
                    "Clear step-by-step process",
                    "Works well for non-linear systems too"
                ],
                disadvantages: [
                    "Can lead to messy fractions",
                    "More algebra manipulation required",
                    "Can be time-consuming for complex coefficients"
                ],
                applications: [
                    "Chemistry mixture problems",
                    "Business cost-revenue analysis",
                    "Physics motion problems",
                    "Economics supply-demand equilibrium"
                ]
            },

            elimination_method: {
                title: "Elimination Method (Addition/Subtraction)",
                concepts: [
                    "Multiply equations to create matching coefficients",
                    "Add or subtract equations to eliminate one variable",
                    "Solve for remaining variable",
                    "Substitute back to find eliminated variable"
                ],
                theory: "The elimination method uses the addition/subtraction property of equality to eliminate one variable by making coefficients opposites.",
                keyFormulas: {
                    "General Form": "a₁x + b₁y = c₁, a₂x + b₂y = c₂",
                    "Elimination Strategy": "Make coefficients of one variable opposites, then add equations",
                    "Direct Elimination": "If coefficients already opposite, add directly"
                },
                solvingSteps: [
                    "Align equations in standard form",
                    "Choose variable to eliminate",
                    "Find LCM of coefficients for chosen variable",
                    "Multiply equations to create opposite coefficients",
                    "Add equations to eliminate variable",
                    "Solve for remaining variable",
                    "Substitute to find eliminated variable",
                    "Verify solution in both equations"
                ],
                advantages: [
                    "Often cleaner than substitution",
                    "Good for integer coefficients",
                    "Avoids fractions in many cases",
                    "Systematic and algorithmic"
                ],
                disadvantages: [
                    "Requires finding LCM for multipliers",
                    "Can create large numbers before simplification",
                    "Only works for linear systems"
                ],
                applications: [
                    "Investment portfolio problems",
                    "Circuit analysis (Kirchhoff's laws)",
                    "Linear programming",
                    "Network flow problems"
                ]
            },

            matrix_method: {
                title: "Matrix Method (Cramer's Rule & Matrix Inverse)",
                concepts: [
                    "Represent system as matrix equation AX = B",
                    "Use determinants (Cramer's Rule) or inverse matrix",
                    "Calculate solution using matrix operations",
                    "Efficient for larger systems"
                ],
                theory: "Matrix methods use linear algebra to solve systems. Cramer's Rule uses determinants; inverse method uses A⁻¹X = A⁻¹B → X = A⁻¹B.",
                keyFormulas: {
                    "Matrix Form": "[a₁ b₁][x] = [c₁]\n[a₂ b₂][y]   [c₂]",
                    "Cramer's Rule": "x = det(Ax)/det(A), y = det(Ay)/det(A)",
                    "Determinant (2×2)": "det(A) = a₁b₂ - a₂b₁",
                    "Inverse Method": "X = A⁻¹B"
                },
                solvingSteps: [
                    "Write system in matrix form AX = B",
                    "Calculate determinant of coefficient matrix A",
                    "Check if det(A) ≠ 0 (system has unique solution)",
                    "For Cramer's Rule: Replace columns and find determinants",
                    "Calculate x = det(Ax)/det(A), y = det(Ay)/det(A)",
                    "Or use inverse: find A⁻¹ and compute X = A⁻¹B",
                    "Verify solution"
                ],
                advantages: [
                    "Systematic and algorithmic",
                    "Extends easily to larger systems",
                    "Good for computer implementation",
                    "Provides insight into system properties"
                ],
                disadvantages: [
                    "Requires knowledge of matrices and determinants",
                    "Computationally intensive for large systems",
                    "Cramer's Rule inefficient for n > 3"
                ],
                applications: [
                    "Engineering stress analysis",
                    "Computer graphics transformations",
                    "Multi-variable optimization",
                    "Control systems design"
                ]
            },

            graphical_method: {
                title: "Graphical Method",
                concepts: [
                    "Graph both equations as lines",
                    "Find intersection point",
                    "Intersection coordinates are the solution",
                    "Visualize relationship between equations"
                ],
                theory: "The graphical method plots both equations and finds their intersection. The solution is the point (x, y) that satisfies both equations simultaneously.",
                keyFormulas: {
                    "Slope-Intercept Form": "y = mx + b",
                    "Convert Standard Form": "ax + by = c → y = (-a/b)x + c/b",
                    "Intersection Point": "Solution to system"
                },
                solvingSteps: [
                    "Rewrite both equations in slope-intercept form (y = mx + b)",
                    "Identify slope and y-intercept for each line",
                    "Plot y-intercepts on coordinate plane",
                    "Use slope to plot additional points",
                    "Draw both lines",
                    "Locate intersection point",
                    "Read coordinates of intersection as solution",
                    "Verify algebraically"
                ],
                advantages: [
                    "Visual understanding of solution",
                    "Shows geometric relationship",
                    "Can identify special cases (parallel, coincident)",
                    "Good for approximations"
                ],
                disadvantages: [
                    "Not precise for non-integer solutions",
                    "Requires accurate graphing",
                    "Difficult to read exact values",
                    "Impractical for large coefficient values"
                ],
                specialCases: {
                    "One solution": "Lines intersect at one point (consistent, independent)",
                    "No solution": "Lines parallel (inconsistent)",
                    "Infinite solutions": "Lines coincide (consistent, dependent)"
                },
                applications: [
                    "Break-even analysis",
                    "Supply and demand curves",
                    "Feasible region in linear programming",
                    "Velocity-time problems"
                ]
            },

            system_types: {
                title: "Types of Systems",
                concepts: [
                    "Consistent vs Inconsistent systems",
                    "Independent vs Dependent systems",
                    "Unique solution, no solution, infinite solutions"
                ],
                theory: "Systems are classified by the number and nature of their solutions.",
                classifications: {
                    "Consistent Independent": {
                        description: "Exactly one solution (lines intersect at one point)",
                        determinant: "det(A) ≠ 0",
                        graph: "Lines intersect",
                        example: "x + y = 5, x - y = 1"
                    },
                    "Inconsistent": {
                        description: "No solution (parallel lines)",
                        determinant: "det(A) = 0, but system not equivalent",
                        graph: "Lines parallel",
                        example: "x + y = 5, x + y = 3"
                    },
                    "Consistent Dependent": {
                        description: "Infinite solutions (same line)",
                        determinant: "det(A) = 0, equations equivalent",
                        graph: "Lines coincide",
                        example: "x + y = 5, 2x + 2y = 10"
                    }
                },
                identificationMethods: [
                    "Compare slopes: same slope → parallel or coincident",
                    "Calculate determinant: det(A) = 0 → no unique solution",
                    "Solve and check for contradiction or identity",
                    "Graph to visualize relationship"
                ]
            },

            word_problems: {
                title: "Simultaneous Equations Word Problems",
                concepts: [
                    "Identify two unknown quantities",
                    "Set up two independent equations",
                    "Choose appropriate solution method",
                    "Interpret solution in context"
                ],
                theory: "Real-world problems often involve two or more unknowns with relationships that create simultaneous equations.",
                problemTypes: {
                    "Number Problems": "Finding two numbers with given conditions",
                    "Age Problems": "Relating current and future/past ages",
                    "Mixture Problems": "Combining solutions with different concentrations",
                    "Money Problems": "Coins, tickets, or items with different values",
                    "Distance/Rate/Time": "Two objects moving, meeting, or separating",
                    "Geometry": "Perimeter and area of rectangles, triangles",
                    "Work Problems": "Two workers completing a task together",
                    "Investment": "Money in different accounts with different rates"
                },
                solutionStrategy: [
                    "Read carefully, identify what's unknown",
                    "Define variables clearly (x = ..., y = ...)",
                    "Translate each condition into an equation",
                    "Verify you have two independent equations",
                    "Choose best solution method",
                    "Solve the system",
                    "Check solution makes sense in context",
                    "Answer with appropriate units and labels"
                ],
                commonPhrases: {
                    "sum": "x + y =",
                    "difference": "x - y =",
                    "total": "x + y =",
                    "twice": "2x or 2y",
                    "together": "+ (addition)",
                    "more than": "+ (addition)",
                    "less than": "- (subtraction)",
                    "ratio": "x/y = or x:y"
                }
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
                method1Color: '#e3f2fd',
                method2Color: '#f3e5f5',
                method3Color: '#e8f5e9',
                method4Color: '#fff3e0'
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
                method1Color: '#e1f5fe',
                method2Color: '#f1e7fe',
                method3Color: '#e7f5e9',
                method4Color: '#fff8e1'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeMathSymbols() {
        return {
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥',
            'det': 'det', 'matrix': '[ ]'
        };
    }

    initializeSimultaneousSolvers() {
        this.simultaneousTypes = {
            substitution_method: {
                patterns: [
                    /substitut/i,
                    /solve.*by.*substitut/i,
                    /use.*substitut/i
                ],
                solver: this.solveBySubstitution.bind(this),
                name: 'Substitution Method',
                category: 'substitution',
                description: 'Solve by isolating one variable and substituting'
            },

            elimination_method: {
                patterns: [
                    /eliminat/i,
                    /addition/i,
                    /subtraction/i,
                    /solve.*by.*eliminat/i,
                    /use.*eliminat/i
                ],
                solver: this.solveByElimination.bind(this),
                name: 'Elimination Method',
                category: 'elimination',
                description: 'Solve by eliminating one variable through addition/subtraction'
            },

            matrix_method: {
                patterns: [
                    /matrix/i,
                    /cramer/i,
                    /determinant/i,
                    /inverse.*matrix/i,
                    /solve.*using.*matrices/i
                ],
                solver: this.solveByMatrix.bind(this),
                name: 'Matrix Method',
                category: 'matrix',
                description: 'Solve using matrix operations (Cramer\'s Rule or inverse matrix)'
            },

            graphical_method: {
                patterns: [
                    /graph/i,
                    /plot/i,
                    /intersection/i,
                    /solve.*graphically/i,
                    /visual/i
                ],
                solver: this.solveByGraphical.bind(this),
                name: 'Graphical Method',
                category: 'graphical',
                description: 'Solve by graphing both equations and finding intersection'
            },

            auto_detect: {
                patterns: [/.*/],
                solver: this.solveByBestMethod.bind(this),
                name: 'Auto-detect Best Method',
                category: 'auto',
                description: 'Automatically choose the most efficient method'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            substitution: {
                'Isolate variable': [
                    'Incorrectly isolating variable',
                    'Sign errors when moving terms',
                    'Dividing only one term instead of entire side'
                ],
                'Substitute expression': [
                    'Substituting into wrong equation',
                    'Not using parentheses around substituted expression',
                    'Distributing incorrectly after substitution'
                ],
                'Back-substitute': [
                    'Forgetting to find second variable',
                    'Substituting into wrong equation',
                    'Arithmetic errors in final calculation'
                ]
            },
            elimination: {
                'Create opposite coefficients': [
                    'Multiplying only one equation',
                    'Getting wrong LCM for multipliers',
                    'Sign errors in multiplication'
                ],
                'Add/subtract equations': [
                    'Adding when should subtract or vice versa',
                    'Not combining all terms',
                    'Sign errors in combination'
                ],
                'Solve for variable': [
                    'Arithmetic errors',
                    'Forgetting to divide both sides',
                    'Not substituting back for second variable'
                ]
            },
            matrix: {
                'Set up matrix': [
                    'Incorrect matrix notation',
                    'Mixing up rows and columns',
                    'Not aligning coefficients properly'
                ],
                'Calculate determinant': [
                    'Wrong determinant formula',
                    'Sign errors in calculation',
                    'Arithmetic errors'
                ],
                'Apply Cramer\'s Rule': [
                    'Replacing wrong column',
                    'Dividing by wrong determinant',
                    'Not checking if det(A) = 0'
                ]
            },
            graphical: {
                'Convert to slope-intercept form': [
                    'Incorrectly solving for y',
                    'Sign errors in slope or intercept',
                    'Forgetting to divide all terms'
                ],
                'Plot lines': [
                    'Plotting y-intercept incorrectly',
                    'Using slope incorrectly',
                    'Inaccurate graph scaling'
                ],
                'Find intersection': [
                    'Misreading coordinates',
                    'Not verifying graphical solution',
                    'Rounding errors'
                ]
            },
            general: {
                'System setup': [
                    'Not having two independent equations',
                    'Variables representing wrong quantities',
                    'Equations not representing stated conditions'
                ],
                'Verification': [
                    'Not checking solution in both equations',
                    'Accepting impossible answers',
                    'Not interpreting in context for word problems'
                ]
            }
        };

        this.errorPrevention = {
            substitution: {
                reminder: 'Always use parentheses when substituting expressions',
                method: 'Write substitution explicitly before simplifying'
            },
            elimination: {
                reminder: 'Multiply ENTIRE equation by multiplier, not just one term',
                method: 'Write multiplication step separately before adding/subtracting'
            },
            matrix: {
                reminder: 'Check that det(A) ≠ 0 before using Cramer\'s Rule',
                method: 'Calculate determinant first, verify it\'s non-zero'
            },
            graphical: {
                reminder: 'Verify graphical solution algebraically',
                method: 'Always check intersection point in both original equations'
            },
            verification: {
                reminder: 'Solution must satisfy BOTH equations',
                method: 'Substitute (x, y) into both original equations and verify'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this method works and mathematical meaning',
                language: 'intuitive and concept-focused'
            },
            procedural: {
                focus: 'Exact sequence of steps to execute method',
                language: 'step-by-step algorithmic instructions'
            },
            visual: {
                focus: 'Graphical and spatial understanding',
                language: 'visual metaphors and geometric interpretation'
            },
            algebraic: {
                focus: 'Formal algebraic properties and rules',
                language: 'precise mathematical terminology'
            },
            comparative: {
                focus: 'Comparing different solution methods',
                language: 'analysis of method advantages and trade-offs'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete numbers and simple cases',
                methods: 'one method explained thoroughly'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of concrete and abstract',
                methods: 'primary method with mention of alternatives'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every tiny step explained with analogies',
                examples: 'real-world analogies and stories',
                analogies: true,
                visualization: 'simple pictures and drawings',
                methods: 'one method with lots of support'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive explanations with reasoning',
                examples: 'abstract and generalized cases',
                methods: 'multiple methods compared and analyzed'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty progression',
                methods: 'build from simple to complex methods'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            mixture: {
                scenario: "Mixing solutions with different concentrations",
                equations: "Equation 1: total volume, Equation 2: total amount of substance",
                examples: [
                    "Mix 20% acid solution with 50% acid solution to get 30% solution",
                    "Combine coffee beans costing $8/lb and $12/lb for mix at $10/lb"
                ],
                context: "Used in chemistry, pharmacy, agriculture, and cooking",
                variables: "x = amount of first substance, y = amount of second substance",
                setupPattern: "x + y = total amount; percentage₁·x + percentage₂·y = final_percentage·total"
            },
            money: {
                scenario: "Problems involving different denominations or prices",
                equations: "Equation 1: total number of items, Equation 2: total value",
                examples: [
                    "You have $3.00 in dimes and quarters (28 coins total)",
                    "Tickets: $5 for children, $8 for adults. 450 tickets sold for $3000"
                ],
                context: "Banking, retail sales, ticket sales, currency exchange",
                variables: "x = number of first type, y = number of second type",
                setupPattern: "x + y = total items; value₁·x + value₂·y = total value"
            },
            distance_rate_time: {
                scenario: "Two objects moving toward, away, or in same direction",
                equations: "Use d = rt for each object",
                examples: [
                    "Two trains 300 miles apart traveling toward each other at different speeds",
                    "Airplane with headwind and tailwind covering same distance"
                ],
                context: "Navigation, transportation planning, physics",
                variables: "x = speed of first object, y = speed of second object",
                setupPattern: "distance₁ = rate₁·time₁; distance₂ = rate₂·time₂; relate distances"
            },
            investment: {
                scenario: "Money invested in different accounts with different interest rates",
                equations: "Equation 1: total invested, Equation 2: total interest earned",
                examples: [
                    "$10,000 invested in two accounts: 3% and 5%. Total interest: $400",
                    "Bonds at 4% and stocks at 7%, total portfolio $50,000"
                ],
                context: "Personal finance, portfolio management, banking",
                variables: "x = amount in first investment, y = amount in second investment",
                setupPattern: "x + y = total invested; rate₁·x + rate₂·y = total interest"
            },
            geometry: {
                scenario: "Finding dimensions of rectangles, triangles, or other shapes",
                equations: "Use perimeter, area, or other geometric formulas",
                examples: [
                    "Rectangle perimeter is 40 feet, length is 2 feet more than width",
                    "Two complementary angles where one is 20° more than the other"
                ],
                context: "Construction, design, architecture, surveying",
                variables: "x = first dimension, y = second dimension",
                setupPattern: "geometric_formula₁; relationship between dimensions"
            },
            work_rate: {
                scenario: "Two workers completing a task at different rates",
                equations: "Use work = rate × time for each worker",
                examples: [
                    "Pipe A fills pool in 6 hours, Pipe B in 8 hours. Together?",
                    "Person A paints room in 5 hours, Person B in 4 hours. Working together?"
                ],
                context: "Project management, manufacturing, construction",
                variables: "x = time for first worker alone, y = time for second worker alone",
                setupPattern: "1/x + 1/y = 1/time_together"
            },
            age: {
                scenario: "Current ages and ages in past or future",
                equations: "Set up equations for current age and age relationship",
                examples: [
                    "Mother is 3 times as old as daughter. In 5 years, she'll be twice as old",
                    "Sum of ages now is 45. 10 years ago, father was 4 times son's age"
                ],
                context: "Logic puzzles, genealogy, demographics",
                variables: "x = first person's current age, y = second person's current age",
                setupPattern: "current relationship; past/future relationship"
            },
            break_even: {
                scenario: "Finding when revenue equals cost",
                equations: "Revenue equation and cost equation",
                examples: [
                    "Fixed costs $1000, variable cost $5 per item, selling price $12 per item",
                    "Two business models with different cost structures"
                ],
                context: "Business planning, economics, entrepreneurship",
                variables: "x = quantity, y = price (or x and y as two different variables)",
                setupPattern: "revenue = cost; profit equation"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            substitution: {
                skills: [
                    'Solving linear equations for one variable',
                    'Substitution and evaluation',
                    'Distributive property',
                    'Combining like terms'
                ],
                priorKnowledge: [
                    'Linear equation solving',
                    'Order of operations',
                    'Working with expressions'
                ],
                checkQuestions: [
                    "Solve for y: 2x + y = 10",
                    "If y = 3x - 2, what is 4y?",
                    "Simplify: 2(3x + 5) - 4"
                ]
            },
            elimination: {
                skills: [
                    'Finding LCM',
                    'Multiplying equations by constants',
                    'Adding and subtracting equations',
                    'Solving linear equations'
                ],
                priorKnowledge: [
                    'Equation properties',
                    'Least common multiple',
                    'Combining equations'
                ],
                checkQuestions: [
                    "What is LCM of 3 and 4?",
                    "Multiply both sides: 2x + 3y = 5 by 3",
                    "Add equations: (3x + 2y = 8) + (3x - 2y = 4)"
                ]
            },
            matrix: {
                skills: [
                    'Matrix notation and setup',
                    'Calculating 2×2 determinants',
                    'Matrix multiplication',
                    'Understanding inverse matrices'
                ],
                priorKnowledge: [
                    'Matrix basics',
                    'Determinant concept',
                    'Matrix operations'
                ],
                checkQuestions: [
                    "Find determinant: |2  3|",
                    "                  |1  4|",
                    "What does det(A) = 0 mean?",
                    "Write system as matrix equation: x + 2y = 5, 3x - y = 7"
                ]
            },
            graphical: {
                skills: [
                    'Graphing linear equations',
                    'Slope-intercept form',
                    'Finding slope and intercepts',
                    'Reading coordinate points'
                ],
                priorKnowledge: [
                    'Coordinate plane',
                    'Linear graphing',
                    'Slope concept'
                ],
                checkQuestions: [
                    "Convert to slope-intercept form: 2x + 3y = 6",
                    "What is slope and y-intercept of y = -2x + 5?",
                    "Graph y = 3x - 1"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            substitution_visual: {
                description: "Substitution as replacing a box with its contents",
                analogy: "Like replacing a variable with a recipe - everywhere you see the variable, put in the recipe",
                visualization: "Draw boxes with expressions, show replacement",
                suitableFor: ['substitution'],
                explanation: "One equation tells us what's in the box; we use that info in the other equation"
            },
            elimination_balance: {
                description: "Two balanced equations that can be combined",
                analogy: "Like two balanced seesaws - if you add them, result is still balanced",
                visualization: "Show two balance scales, then combined scale",
                suitableFor: ['elimination'],
                explanation: "Adding equals to equals gives equals; variables cancel out"
            },
            matrix_transformation: {
                description: "System as a transformation that maps input to output",
                analogy: "Matrix is like a machine: put in (x,y), get out (result1, result2)",
                visualization: "Show matrix as transformation operator",
                suitableFor: ['matrix'],
                explanation: "We reverse the transformation to find original input"
            },
            graphical_intersection: {
                description: "Solution as meeting point of two paths",
                analogy: "Two roads crossing - intersection point is where both conditions meet",
                visualization: "Graph showing two lines intersecting",
                suitableFor: ['graphical'],
                explanation: "Point that's on both lines satisfies both equations"
            },
            system_types_visual: {
                description: "Three types of line relationships",
                analogy: "Roads can cross (one meeting point), run parallel (never meet), or be the same road (infinite meetings)",
                visualization: "Show three cases: intersecting, parallel, coincident lines",
                suitableFor: ['all_methods'],
                explanation: "Geometry of lines reveals number of solutions"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: {
                substitution: [
                    {
                        system: "y = 2x\n3x + y = 15",
                        solution: { x: 3, y: 6 },
                        steps: ["y already isolated", "Substitute into second: 3x + 2x = 15", "5x = 15, x = 3", "y = 2(3) = 6"],
                        difficulty: "easy",
                        reason: "One variable already isolated"
                    },
                    {
                        system: "x + y = 10\ny = x + 2",
                        solution: { x: 4, y: 6 },
                        steps: ["y isolated in second equation", "Substitute: x + (x + 2) = 10", "2x + 2 = 10, x = 4", "y = 4 + 2 = 6"],
                        difficulty: "easy"
                    }
                ],
                elimination: [
                    {
                        system: "x + y = 10\nx - y = 2",
                        solution: { x: 6, y: 4 },
                        steps: ["Coefficients of y are already opposites", "Add equations: 2x = 12", "x = 6", "Substitute: 6 + y = 10, y = 4"],
                        difficulty: "easy",
                        reason: "Direct elimination possible"
                    },
                    {
                        system: "2x + y = 11\n2x - y = 5",
                        solution: { x: 4, y: 3 },
                        steps: ["y coefficients are opposites", "Add: 4x = 16, x = 4", "Substitute: 2(4) + y = 11, y = 3"],
                        difficulty: "easy"
                    }
                ],
                matrix: [
                    {
                        system: "x + y = 5\nx - y = 1",
                        solution: { x: 3, y: 2 },
                        determinant: -2,
                        steps: ["A = [1 1; 1 -1]", "det(A) = -2", "Using Cramer's: x = 6/(-2) = 3, y = 4/(-2) = 2"],
                        difficulty: "easy"
                    }
                ],
                graphical: [
                    {
                        system: "y = x + 1\ny = -x + 5",
                        solution: { x: 2, y: 3 },
                        steps: ["Graph both lines", "Line 1: slope 1, y-int 1", "Line 2: slope -1, y-int 5", "Intersection at (2, 3)"],
                        difficulty: "easy"
                    }
                ]
            },

            intermediate: {
                substitution: [
                    {
                        system: "2x + y = 7\nx + 3y = 11",
                        solution: { x: 2, y: 3 },
                        steps: ["From first: y = 7 - 2x", "Substitute: x + 3(7 - 2x) = 11", "x + 21 - 6x = 11", "-5x = -10, x = 2", "y = 7 - 4 = 3"],
                        difficulty: "medium"
                    }
                ],
                elimination: [
                    {
                        system: "2x + 3y = 12\n3x + 2y = 13",
                        solution: { x: 3, y: 2 },
                        steps: ["Multiply first by 3: 6x + 9y = 36", "Multiply second by 2: 6x + 4y = 26", "Subtract: 5y = 10, y = 2", "Substitute: 2x + 6 = 12, x = 3"],
                        difficulty: "medium"
                    }
                ],
                matrix: [
                    {
                        system: "2x + 3y = 8\n4x - y = 6",
                        solution: { x: 2, y: 4/3 },
                        determinant: -14,
                        steps: ["det(A) = 2(-1) - 3(4) = -14", "Apply Cramer's Rule", "x = -28/(-14) = 2", "y = -4/(-14) = 4/3"],
                        difficulty: "medium"
                    }
                ]
            },

            advanced: {
                substitution: [
                    {
                        system: "3x - 2y = 4\n4x + 5y = 33",
                        solution: { x: 6, y: 7 },
                        steps: ["From first: 3x = 4 + 2y, x = (4 + 2y)/3", "Substitute: 4((4 + 2y)/3) + 5y = 33", "Multiply by 3: 16 + 8y + 15y = 99", "23y = 83... wait that's wrong", "Let me recalculate..."],
                        difficulty: "hard",
                        note: "Demonstrates careful fraction handling"
                    }
                ],
                elimination: [
                    {
                        system: "5x - 3y = 8\n3x + 7y = 34",
                        solution: { x: 4, y: 4 },
                        steps: ["LCM of 5 and 3 is 15", "Multiply first by 3: 15x - 9y = 24", "Multiply second by 5: 15x + 35y = 170", "Subtract: -44y = -146... error check needed"],
                        difficulty: "hard"
                    }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            substitution_parentheses: {
                misconception: "Not using parentheses when substituting expressions with multiple terms",
                reality: "Must enclose substituted expression in parentheses to distribute correctly",
                correctiveExample: "If y = 2x + 3 and we have 4y, it's 4(2x + 3) NOT 4·2x + 3",
                commonIn: ['substitution']
            },
            elimination_multiply_one: {
                misconception: "Only multiplying one side of an equation",
                reality: "Must multiply entire equation (both sides) by the multiplier",
                correctiveExample: "2x + y = 5 times 3 gives 6x + 3y = 15, not 6x + y = 5",
                commonIn: ['elimination']
            },
            matrix_zero_determinant: {
                misconception: "Trying to use Cramer's Rule when det(A) = 0",
                reality: "det(A) = 0 means no unique solution; can't divide by zero",
                correctiveExample: "If det(A) = 0, system either has no solution or infinite solutions",
                commonIn: ['matrix']
            },
            graphical_precision: {
                misconception: "Trusting graphical solution without algebraic verification",
                reality: "Graphs give approximations; always verify algebraically",
                correctiveExample: "Graph shows intersection near (2.3, 4.1) but actual solution is (7/3, 41/10)",
                commonIn: ['graphical']
            },
            system_same_equation: {
                misconception: "Not recognizing when two equations are actually the same",
                reality: "If one equation is multiple of other, they're dependent (infinite solutions)",
                correctiveExample: "x + y = 5 and 2x + 2y = 10 are the same line",
                commonIn: ['all_methods']
            },
            back_substitution: {
                misconception: "Forgetting to find the second variable after finding the first",
                reality: "Must back-substitute to find both x and y",
                correctiveExample: "After finding x = 3, must substitute back to find y",
                commonIn: ['substitution', 'elimination']
            },
            variable_swap: {
                misconception: "Swapping x and y values in final answer",
                reality: "x is first coordinate, y is second; order matters",
                correctiveExample: "Solution (2, 5) means x=2 and y=5, not x=5 and y=2",
                commonIn: ['all_methods']
            },
            matrix_column_replacement: {
                misconception: "Replacing wrong column in Cramer's Rule",
                reality: "Replace x-column for finding x, y-column for finding y",
                correctiveExample: "For x: replace first column with constants; for y: replace second column",
                commonIn: ['matrix']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            substitution_recipe: {
                analogy: "Following a recipe within a recipe",
                explanation: "If one recipe says 'use pasta sauce' and another tells you how to make pasta sauce, you substitute the sauce recipe into the main recipe",
                suitableFor: ['substitution'],
                ELI5: "Imagine you're making a sandwich. One note says 'use special spread'. Another note tells you how to make the special spread. You make the spread, then use it in the sandwich."
            },
            elimination_combining: {
                analogy: "Combining two balanced loads",
                explanation: "Two balanced seesaws can be stacked. If both are balanced separately, the combination is also balanced",
                suitableFor: ['elimination'],
                ELI5: "You have two bags with the same weight on left and right. If you pour both left sides together and both right sides together, they still weigh the same!"
            },
            matrix_machine: {
                analogy: "Reversing a machine's operation",
                explanation: "A matrix is like a machine: put in (x,y), get out (result). To find what went in, we reverse the machine",
                suitableFor: ['matrix'],
                ELI5: "Imagine a magic box that changes numbers. If you know what came out, you can work backwards to find what went in!"
            },
            graphical_roads: {
                analogy: "Two roads crossing",
                explanation: "Each equation is a road. The solution is where the roads cross - the only point that's on both roads",
                suitableFor: ['graphical'],
                ELI5: "Think of two roads. There's only one place where both roads meet - that's the solution to both equations!"
            },
            system_types_meetings: {
                analogy: "Planning to meet a friend",
                explanation: "You and friend can meet at one place (one solution), walk on parallel streets and never meet (no solution), or walk together on same street (infinite meetings)",
                suitableFor: ['all_methods'],
                ELI5: "Two people walking: they might cross paths once, never meet if on different streets, or walk together the whole time!"
            },
            verification_check: {
                analogy: "Trying a key in two locks",
                explanation: "Solution must work in both equations, like a key must fit both locks to be correct",
                suitableFor: ['all_methods'],
                ELI5: "Your answer is like a key that must open both doors. Try it in both locks to make sure it works!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            substitution: {
                level1: "Which equation is easier to solve for one variable?",
                level2: "Look for a variable with coefficient 1 or -1",
                level3: "Solve the easier equation for one variable, then substitute into the other",
                level4: "Isolate y in first equation: y = ... Then substitute this expression for y in the second equation"
            },
            elimination: {
                level1: "Can you make the coefficients of one variable opposites?",
                level2: "Find the LCM of the coefficients of x (or y)",
                level3: "Multiply equations to create opposite coefficients, then add",
                level4: "Multiply first equation by {mult1}, second by {mult2}, then add to eliminate {variable}"
            },
            matrix: {
                level1: "Can you write this as a matrix equation?",
                level2: "Set up [a b][x] = [e]  where a,b are coefficients",
                level3: "Calculate determinant: det(A) = ad - bc. Is it zero?",
                level4: "Use Cramer's Rule: x = det(Ax)/det(A), y = det(Ay)/det(A)"
            },
            graphical: {
                level1: "Can you graph both equations?",
                level2: "Convert both to y = mx + b form",
                level3: "Plot y-intercept, use slope to find another point for each line",
                level4: "Draw both lines and find where they cross. That point is (x, y)"
            },
            method_choice: {
                level1: "Which method might be easiest for this system?",
                level2: "Look for: variable with coefficient 1 (substitution), opposite coefficients (elimination), or simple graphing",
                level3: "Choose substitution if one variable is isolated, elimination if coefficients are manageable",
                level4: "For this system, use {recommended_method} because {reason}"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Solve by substitution: y = x + 1, x + y = 5",
                    answer: { x: 2, y: 3 },
                    assesses: "substitution_basic",
                    difficulty: "basic"
                },
                {
                    question: "Solve by elimination: x + y = 8, x - y = 2",
                    answer: { x: 5, y: 3 },
                    assesses: "elimination_basic",
                    difficulty: "basic"
                },
                {
                    question: "Find determinant: |2 3|\n                          |1 4|",
                    answer: 5,
                    assesses: "matrix_basics",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "When using substitution, why must you use parentheses around the substituted expression?",
                    options: ["To look nice", "To distribute correctly", "To confuse people", "Not necessary"],
                    correct: "To distribute correctly",
                    explanation: "Parentheses ensure proper distribution when expression has multiple terms"
                },
                {
                    question: "In elimination, when do you add vs subtract equations?",
                    options: ["Always add", "Add if coefficients opposite signs, subtract if same signs", "Random choice", "Always subtract"],
                    correct: "Add if coefficients opposite signs, subtract if same signs",
                    explanation: "Want to eliminate variable, so need coefficients to cancel"
                },
                {
                    question: "What does det(A) = 0 tell you about a system?",
                    options: ["Has exactly one solution", "Has no solution or infinite solutions", "Has two solutions", "Nothing useful"],
                    correct: "Has no solution or infinite solutions",
                    explanation: "Zero determinant means no unique solution - could be inconsistent or dependent"
                }
            ],
            byMethod: {
                substitution: [
                    { system: "y = 2x\nx + y = 9", solution: { x: 3, y: 6 } },
                    { system: "x = y - 1\n2x + y = 8", solution: { x: 3, y: 4 } },
                    { system: "y = 3x + 2\n2x - y = 4", solution: { x: -6, y: -16 } }
                ],
                elimination: [
                    { system: "x + y = 10\nx - y = 4", solution: { x: 7, y: 3 } },
                    { system: "2x + 3y = 13\n2x - 3y = 5", solution: { x: 4.5, y: 4/3 } },
                    { system: "3x + 2y = 16\n5x - 2y = 8", solution: { x: 3, y: 3.5 } }
                ],
                matrix: [
                    { system: "2x + y = 5\nx - y = 1", solution: { x: 2, y: 1 }, det: -3 },
                    { system: "x + 2y = 7\n3x - y = 5", solution: { x: 17/7, y: 16/7 }, det: -7 }
                ],
                graphical: [
                    { system: "y = x + 2\ny = -x + 6", solution: { x: 2, y: 4 } },
                    { system: "y = 2x - 1\ny = -x + 5", solution: { x: 2, y: 3 } }
                ]
            },
            byDifficulty: {
                easy: [
                    "y = x\nx + y = 6",
                    "x + y = 5\nx - y = 1",
                    "y = 2x + 1\nx + y = 7"
                ],
                medium: [
                    "2x + y = 10\nx + 2y = 11",
                    "3x - 2y = 4\nx + 3y = 11",
                    "2x + 3y = 12\n3x + 2y = 13"
                ],
                hard: [
                    "5x - 3y = 7\n3x + 4y = 25",
                    "7x - 2y = 13\n3x + 5y = 29",
                    "4x - 7y = -1\n5x + 2y = 31"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            methodSelection: {
                chooseSubstitution: [
                    "One variable already isolated (y = ...)",
                    "One variable has coefficient 1 or -1",
                    "Simple expressions that substitute cleanly",
                    "Non-linear systems (quadratic, etc.)"
                ],
                chooseElimination: [
                    "Coefficients are small integers",
                    "Easy to make coefficients opposites",
                    "Both equations in standard form",
                    "Coefficients already opposites or equal"
                ],
                chooseMatrix: [
                    "Larger systems (3+ variables)",
                    "Computer/calculator available",
                    "Want to analyze system properties",
                    "Systematic approach preferred"
                ],
                chooseGraphical: [
                    "Visual understanding needed",
                    "Approximate solution acceptable",
                    "Checking solution type (parallel, coincident)",
                    "Integer or simple fraction solutions expected"
                ]
            },

            decisionTree: {
                step1: "Is one variable already isolated? → Substitution",
                step2: "Are coefficients of one variable already opposites? → Elimination (direct)",
                step3: "Are coefficients small and manageable? → Elimination",
                step4: "Is one coefficient 1 or -1? → Substitution",
                step5: "Need visual understanding? → Graphical",
                step6: "Using calculator/computer? → Matrix",
                default: "Choose based on personal preference - all methods work!"
            },

            efficiencyTips: {
                substitution: "Isolate variable with coefficient ±1 to avoid fractions",
                elimination: "Eliminate variable with smaller LCM of coefficients",
                matrix: "Check det(A) ≠ 0 before detailed calculation",
                graphical: "Use graphing calculator or software for accuracy",
                verification: "Always check solution in BOTH original equations"
            },

            avoidingErrors: {
                substitution: [
                    "Use parentheses when substituting multi-term expressions",
                    "Distribute carefully after substitution",
                    "Don't forget to find both variables"
                ],
                elimination: [
                    "Multiply ENTIRE equation by multiplier",
                    "Line up like terms vertically before adding/subtracting",
                    "Watch signs when combining"
                ],
                matrix: [
                    "Write matrix carefully, align coefficients",
                    "Use correct determinant formula",
                    "Replace correct column in Cramer's Rule"
                ],
                graphical: [
                    "Convert to slope-intercept form correctly",
                    "Plot points accurately",
                    "Verify solution algebraically"
                ]
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Substitution Sprint",
                    timeLimit: 180,
                    problems: [
                        "y = x\nx + y = 10",
                        "y = 2x\nx + y = 6",
                        "y = x + 1\n2x + y = 8",
                        "x = y - 2\nx + 2y = 7",
                        "y = 3x\n2x + y = 15"
                    ]
                },
                {
                    name: "Elimination Challenge",
                    timeLimit: 240,
                    problems: [
                        "x + y = 7\nx - y = 3",
                        "2x + y = 9\n2x - y = 3",
                        "3x + 2y = 12\n3x - 2y = 6",
                        "x + 2y = 11\n2x + 2y = 14"
                    ]
                }
            ],

            puzzles: [
                {
                    name: "Method Comparison",
                    problem: "2x + y = 7\nx - y = 2",
                    challenge: "Solve using THREE different methods and compare efficiency",
                    solution: { x: 3, y: 1 },
                    analysis: "Which method was fastest? Which was easiest? Why?"
                },
                {
                    name: "System Detective",
                    given: "Two lines intersect at (2, 5)",
                    challenge: "Create a system of equations with this solution. Make one equation have slope 2.",
                    sampleSolution: "y = 2x + 1\ny = -x + 7"
                },
                {
                    name: "Special Cases Hunt",
                    challenge: "Create three systems: one with one solution, one with no solution, one with infinite solutions",
                    learning: "Understand relationship between coefficients and solution types"
                }
            ],

            applications: [
                {
                    scenario: "Coin Problem",
                    problem: "You have $4.50 in quarters and dimes. There are 24 coins total. How many of each?",
                    equations: "q + d = 24\n0.25q + 0.10d = 4.50",
                    solution: { quarters: 14, dimes: 10 }
                },
                {
                    scenario: "Mixture Problem",
                    problem: "Mix 20% acid solution with 50% acid solution to get 10 liters of 35% acid. How much of each?",
                    equations: "x + y = 10\n0.20x + 0.50y = 0.35(10)",
                    solution: { x: 5, y: 5 }
                },
                {
                    scenario: "Break-Even Analysis",
                    problem: "Business A: $1000 fixed cost, $5 per unit. Business B: $500 fixed cost, $8 per unit. When equal?",
                    equations: "C_A = 1000 + 5x\nC_B = 500 + 8x",
                    solution: { x: 166.67, equalCost: 1833.33 }
                }
            ],

            debugging: [
                {
                    name: "Find the Error #1 (Substitution)",
                    incorrectWork: [
                        "y = 2x + 1",
                        "3x + y = 11",
                        "3x + 2x + 1 = 11",  // Correct so far
                        "5x = 11 - 1",  // Correct
                        "5x = 10",  // Correct
                        "x = 2",  // Correct
                        "y = 2(2) = 4"  // ERROR: forgot +1
                    ],
                    correctAnswer: { x: 2, y: 5 },
                    errorType: "Forgot to add 1 when finding y"
                },
                {
                    name: "Find the Error #2 (Elimination)",
                    incorrectWork: [
                        "2x + 3y = 12",
                        "3x + 2y = 13",
                        "Multiply first by 3: 6x + 9y = 36",  // Correct
                        "Multiply second by 2: 6x + 4y = 26",  // Correct
                        "Add equations: 12x + 13y = 62"  // ERROR: should subtract
                    ],
                    correctAnswer: { x: 3, y: 2 },
                    errorType: "Added instead of subtracting to eliminate x"
                },
                {
                    name: "Find the Error #3 (Matrix)",
                    incorrectWork: [
                        "System: 2x + y = 5, x - y = 1",
                        "det(A) = 2(-1) - 1(1) = -3",  // Correct
                        "For x: det(Ax) = 5(-1) - 1(1) = -6",  // Correct
                        "x = -6/(-3) = 2",  // Correct
                        "For y: det(Ay) = 5(1) - 2(1) = 3",  // ERROR: wrong matrix setup
                        "y = 3/(-3) = -1"  // Wrong answer
                    ],
                    correctAnswer: { x: 2, y: 1 },
                    errorType: "Incorrect matrix setup for det(Ay)"
                }
            ],

            advancedChallenges: [
                {
                    name: "Three-Variable System",
                    problem: "x + y + z = 6\n2x - y + z = 3\nx + 2y - z = 5",
                    methods: ["Extension of elimination", "Matrix method", "Substitution cascade"],
                    solution: { x: 2, y: 1, z: 3 }
                },
                {
                    name: "Non-Linear System",
                    problem: "y = x²\ny = 2x + 3",
                    methods: ["Substitution only", "Graphical for visualization"],
                    note: "Elimination and matrix don't work for non-linear"
                }
            ]
        };
    }

    initializeHistoricalContext() {
        this.historicalContext = {
            ancientOrigins: {
                period: "Ancient Babylon (~1800 BCE)",
                contribution: "Clay tablets show solutions to systems using geometric methods",
                significance: "Simultaneous equations used for surveying and architecture"
            },
            chineseNineChapters: {
                period: "China, 200 BCE",
                contribution: "Nine Chapters on Mathematical Art - matrix methods for solving systems",
                significance: "First systematic use of elimination method (Gaussian elimination precursor)"
            },
            arabicAlgebra: {
                period: "Islamic Golden Age, 9th century",
                contribution: "Al-Khwarizmi formalized algebraic methods",
                significance: "Systematic approaches to solving linear systems"
            },
            europeanDevelopment: {
                period: "16th-17th century Europe",
                contribution: "Cramer (1750) developed determinant method",
                significance: "Cramer's Rule provided systematic matrix solution method"
            },
            gaussElimination: {
                period: "19th century",
                contribution: "Gauss formalized elimination method",
                significance: "Foundation for modern computational methods"
            },
            modernApplications: {
                period: "20th-21st century",
                contribution: "Computer algorithms for large systems",
                significance: "Essential for engineering, economics, data science, AI"
            },
            interestingFacts: [
                "Ancient Babylonians could solve 2-variable systems geometrically",
                "Chinese used counting rods in grid pattern - early matrix representation",
                "Cramer's Rule, while elegant, is inefficient for large systems (n > 3)",
                "Modern computers solve systems with millions of variables using advanced methods",
                "Google's PageRank algorithm solves massive simultaneous equation systems"
            ]
        };
    }

    // ============================================================================
    // MAIN SOLVER METHODS
    // ============================================================================

    solveSimultaneousProblem(config) {
        const { equation1, equation2, method, parameters, context } = config;

        try {
            this.currentProblem = this.parseSimultaneousProblem(
                equation1, 
                equation2, 
                method, 
                parameters, 
                context
            );

            this.currentSolution = this.solveSimultaneousProblem_Internal(this.currentProblem);

            this.solutionSteps = this.generateSimultaneousSteps(
                this.currentProblem, 
                this.currentSolution
            );

            this.generateSimultaneousGraphData();

            this.generateSimultaneousWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionValue: this.currentSolution?.solution,
                solutionType: this.currentSolution?.solutionType,
                method: this.currentSolution?.method
            };

        } catch (error) {
            throw new Error(`Failed to solve simultaneous equations: ${error.message}`);
        }
    }

    parseSimultaneousProblem(equation1, equation2, method = 'auto', parameters = {}, context = {}) {
        const cleanEq1 = this.cleanMathExpression(equation1 || '');
        const cleanEq2 = this.cleanMathExpression(equation2 || '');

        // Parse coefficients from equations
        const coeffs1 = this.extractCoefficients(cleanEq1);
        const coeffs2 = this.extractCoefficients(cleanEq2);

        // Determine method if auto
        let selectedMethod = method.toLowerCase();
        if (selectedMethod === 'auto' || selectedMethod === 'auto_detect') {
            selectedMethod = this.selectBestMethod(coeffs1, coeffs2);
        }

        return {
            equation1: cleanEq1,
            equation2: cleanEq2,
            coefficients1: coeffs1,
            coefficients2: coeffs2,
            method: selectedMethod,
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
            .trim();
    }

    extractCoefficients(equation) {
        // Parse equation in form: ax + by = c
        // Returns { a, b, c }
        
        const parts = equation.split('=');
        if (parts.length !== 2) {
            throw new Error(`Invalid equation format: ${equation}`);
        }

        const leftSide = parts[0].trim();
        const c = parseFloat(parts[1].trim());

        // Extract x and y coefficients from left side
        let a = 0, b = 0;

        // Match patterns like 2x, -3x, x, +4y, -y, etc.
        const xMatch = leftSide.match(/([+-]?\s*\d*\.?\d*)\s*x/i);
        const yMatch = leftSide.match(/([+-]?\s*\d*\.?\d*)\s*y/i);

        if (xMatch) {
            const coeff = xMatch[1].replace(/\s/g, '');
            a = coeff === '' || coeff === '+' ? 1 : coeff === '-' ? -1 : parseFloat(coeff);
        }

        if (yMatch) {
            const coeff = yMatch[1].replace(/\s/g, '');
            b = coeff === '' || coeff === '+' ? 1 : coeff === '-' ? -1 : parseFloat(coeff);
        }

        return { a, b, c };
    }

    selectBestMethod(coeffs1, coeffs2) {
        const { a: a1, b: b1 } = coeffs1;
        const { a: a2, b: b2 } = coeffs2;

        // Check if one variable already has coefficient 1 or -1
        if (Math.abs(b1) === 1 || Math.abs(b2) === 1 || Math.abs(a1) === 1 || Math.abs(a2) === 1) {
            return 'substitution_method';
        }

        // Check if coefficients are already opposites (easy elimination)
        if (a1 === -a2 || b1 === -b2) {
            return 'elimination_method';
        }

        // Check if coefficients are small integers (good for elimination)
        if (Number.isInteger(a1) && Number.isInteger(b1) && 
            Number.isInteger(a2) && Number.isInteger(b2) &&
            Math.abs(a1) <= 10 && Math.abs(b1) <= 10 &&
            Math.abs(a2) <= 10 && Math.abs(b2) <= 10) {
            return 'elimination_method';
        }

        // Default to substitution
        return 'substitution_method';
    }

    solveSimultaneousProblem_Internal(problem) {
        const methodType = this.simultaneousTypes[problem.method];
        if (!methodType) {
            throw new Error(`Unknown method: ${problem.method}`);
        }

        const solver = methodType.solver;
        return solver(problem);
    }

    // ============================================================================
    // SOLUTION METHODS
    // ============================================================================

    solveBySubstitution(problem) {
        const { coefficients1: c1, coefficients2: c2 } = problem;
        const { a: a1, b: b1, c: c1val } = c1;
        const { a: a2, b: b2, c: c2val } = c2;

        // Check for special cases
        const systemType = this.checkSystemType(c1, c2);
        if (systemType !== 'unique') {
            return this.handleSpecialCase(systemType, problem, 'substitution');
        }

        // Choose which variable to isolate (prefer coefficient of 1)
        let isolateY = Math.abs(b1) <= Math.abs(a1);
        let x, y;

        if (isolateY && b1 !== 0) {
            // Isolate y from first equation: y = (c1 - a1*x) / b1
            // Substitute into second: a2*x + b2*((c1 - a1*x)/b1) = c2
            // Multiply by b1: a2*b1*x + b2*(c1 - a1*x) = c2*b1
            // a2*b1*x + b2*c1 - b2*a1*x = c2*b1
            // (a2*b1 - b2*a1)*x = c2*b1 - b2*c1
            const xCoeff = a2*b1 - b2*a1;
            const xConst = c2val*b1 - b2*c1val;
            x = xConst / xCoeff;
            y = (c1val - a1*x) / b1;
        } else if (a1 !== 0) {
            // Isolate x from first equation: x = (c1 - b1*y) / a1
            // Substitute into second: a2*((c1 - b1*y)/a1) + b2*y = c2
            const yCoeff = a2*(-b1)/a1 + b2;
            const yConst = c2val - a2*c1val/a1;
            y = yConst / yCoeff;
            x = (c1val - b1*y) / a1;
        } else {
            throw new Error("Cannot isolate variable - check system setup");
        }

        return {
            method: 'Substitution Method',
            solution: { x, y },
            solutionType: 'Unique solution',
            isolatedVariable: isolateY ? 'y' : 'x',
            isolatedFrom: 'first equation',
            verification: this.verifySimultaneousSolution({ x, y }, c1, c2),
            category: 'substitution'
        };
    }

    solveByElimination(problem) {
        const { coefficients1: c1, coefficients2: c2 } = problem;
        const { a: a1, b: b1, c: c1val } = c1;
        const { a: a2, b: b2, c: c2val } = c2;

        // Check for special cases
        const systemType = this.checkSystemType(c1, c2);
        if (systemType !== 'unique') {
            return this.handleSpecialCase(systemType, problem, 'elimination');
        }

        // Decide which variable to eliminate (choose smaller LCM)
        const lcmX = this.lcm(Math.abs(a1), Math.abs(a2));
        const lcmY = this.lcm(Math.abs(b1), Math.abs(b2));
        const eliminateX = lcmX <= lcmY;

        let mult1, mult2, x, y;

        if (eliminateX) {
            // Eliminate x
            mult1 = a2 / Math.abs(a2) * (lcmX / Math.abs(a1));
            mult2 = -a1 / Math.abs(a1) * (lcmX / Math.abs(a2));

            // After multiplication and addition
            const newB = b1 * mult1 + b2 * mult2;
            const newC = c1val * mult1 + c2val * mult2;
            y = newC / newB;

            // Back-substitute
            x = (c1val - b1 * y) / a1;
        } else {
            // Eliminate y
            mult1 = b2 / Math.abs(b2) * (lcmY / Math.abs(b1));
            mult2 = -b1 / Math.abs(b1) * (lcmY / Math.abs(b2));

            const newA = a1 * mult1 + a2 * mult2;
            const newC = c1val * mult1 + c2val * mult2;
            x = newC / newA;

            y = (c1val - a1 * x) / b1;
        }

        return {
            method: 'Elimination Method',
            solution: { x, y },
            solutionType: 'Unique solution',
            eliminatedVariable: eliminateX ? 'x' : 'y',
            multiplier1: mult1,
            multiplier2: mult2,
            verification: this.verifySimultaneousSolution({ x, y }, c1, c2),
            category: 'elimination'
        };
    }

    solveByMatrix(problem) {
        const { coefficients1: c1, coefficients2: c2 } = problem;
        const { a: a1, b: b1, c: c1val } = c1;
        const { a: a2, b: b2, c: c2val } = c2;

        // Calculate determinant of coefficient matrix
        const detA = a1 * b2 - a2 * b1;

        // Check for special cases
        if (Math.abs(detA) < 1e-10) {
            // det(A) = 0, check if system is inconsistent or dependent
            const systemType = this.checkSystemType(c1, c2);
            return this.handleSpecialCase(systemType, problem, 'matrix');
        }

        // Use Cramer's Rule
        // For x: replace first column of A with constants
        const detAx = c1val * b2 - c2val * b1;
        
        // For y: replace second column of A with constants
        const detAy = a1 * c2val - a2 * c1val;

        const x = detAx / detA;
        const y = detAy / detA;

        return {
            method: 'Matrix Method (Cramer\'s Rule)',
            solution: { x, y },
            solutionType: 'Unique solution',
            determinant: detA,
            determinantX: detAx,
            determinantY: detAy,
            matrixA: [[a1, b1], [a2, b2]],
            matrixB: [c1val, c2val],
            verification: this.verifySimultaneousSolution({ x, y }, c1, c2),
            category: 'matrix'
        };
    }

    solveByGraphical(problem) {
        const { coefficients1: c1, coefficients2: c2 } = problem;
        const { a: a1, b: b1, c: c1val } = c1;
        const { a: a2, b: b2, c: c2val } = c2;

        // Convert to slope-intercept form: y = mx + b
        if (b1 === 0 || b2 === 0) {
            // Handle vertical lines separately
            return this.handleVerticalLineGraphical(c1, c2);
        }

        const slope1 = -a1 / b1;
        const yIntercept1 = c1val / b1;

        const slope2 = -a2 / b2;
        const yIntercept2 = c2val / b2;

        // Check for parallel or coincident lines
        if (Math.abs(slope1 - slope2) < 1e-10) {
            if (Math.abs(yIntercept1 - yIntercept2) < 1e-10) {
                return this.handleSpecialCase('dependent', problem, 'graphical');
            } else {
                return this.handleSpecialCase('inconsistent', problem, 'graphical');
            }
        }

        // Find intersection algebraically (for exact answer)
        const x = (yIntercept2 - yIntercept1) / (slope1 - slope2);
        const y = slope1 * x + yIntercept1;

        return {
            method: 'Graphical Method',
            solution: { x, y },
            solutionType: 'Unique solution (intersection point)',
            line1: { slope: slope1, yIntercept: yIntercept1, equation: `y = ${slope1}x + ${yIntercept1}` },
            line2: { slope: slope2, yIntercept: yIntercept2, equation: `y = ${slope2}x + ${yIntercept2}` },
            intersectionPoint: `(${x}, ${y})`,
            verification: this.verifySimultaneousSolution({ x, y }, c1, c2),
            category: 'graphical',
            note: 'Graphical solution verified algebraically for precision'
        };
    }

    solveByBestMethod(problem) {
        // Auto-select best method and solve
        const method = this.selectBestMethod(problem.coefficients1, problem.coefficients2);
        problem.method = method;
        return this.solveSimultaneousProblem_Internal(problem);
    }

    // ============================================================================
    // HELPER METHODS
    // ============================================================================

    checkSystemType(c1, c2) {
        const { a: a1, b: b1, c: c1val } = c1;
        const { a: a2, b: b2, c: c2val } = c2;

        const detA = a1 * b2 - a2 * b1;

        if (Math.abs(detA) > 1e-10) {
            return 'unique';
        }

        // det(A) = 0, check if equations are proportional
        // If a1/a2 = b1/b2 = c1/c2, then dependent (infinite solutions)
        // If a1/a2 = b1/b2 ≠ c1/c2, then inconsistent (no solution)

        const ratio1 = a2 !== 0 ? a1/a2 : null;
        const ratio2 = b2 !== 0 ? b1/b2 : null;
        const ratio3 = c2val !== 0 ? c1val/c2val : null;

        if (ratio1 !== null && ratio2 !== null) {
            if (Math.abs(ratio1 - ratio2) < 1e-10) {
                // Proportional coefficients
                if (ratio3 !== null && Math.abs(ratio1 - ratio3) < 1e-10) {
                    return 'dependent';
                } else {
                    return 'inconsistent';
                }
            }
        }

        return 'unique'; // fallback
    }

    handleSpecialCase(systemType, problem, method) {
        if (systemType === 'inconsistent') {
            return {
                method: `${this.capitalize(method)} Method`,
                solutionType: 'No solution (inconsistent system)',
                solution: null,
                explanation: 'The lines are parallel and never intersect',
                category: method
            };
        } else if (systemType === 'dependent') {
            return {
                method: `${this.capitalize(method)} Method`,
                solutionType: 'Infinite solutions (dependent system)',
                solution: 'All points on the line',
                explanation: 'The two equations represent the same line',
                category: method
            };
        }
    }

    handleVerticalLineGraphical(c1, c2) {
        // Special handling for vertical lines (undefined slope)
        return {
            method: 'Graphical Method',
            solutionType: 'Special case',
            note: 'System involves vertical line(s)',
            category: 'graphical'
        };
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    lcm(a, b) {
        return Math.abs(a * b) / this.gcd(a, b);
    }

    gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    verifySimultaneousSolution(solution, c1, c2) {
        const { x, y } = solution;
        const { a: a1, b: b1, c: c1val } = c1;
        const { a: a2, b: b2, c: c2val } = c2;

        const left1 = a1 * x + b1 * y;
        const left2 = a2 * x + b2 * y;

        const diff1 = Math.abs(left1 - c1val);
        const diff2 = Math.abs(left2 - c2val);

        const isValid = diff1 < 1e-9 && diff2 < 1e-9;

        return {
            solution: `(${x}, ${y})`,
            equation1Check: `${a1}(${x}) + ${b1}(${y}) = ${left1} ≈ ${c1val}`,
            equation2Check: `${a2}(${x}) + ${b2}(${y}) = ${left2} ≈ ${c2val}`,
            difference1: diff1,
            difference2: diff2,
            isValid
        };
    }

    // ============================================================================
    // STEP GENERATION
    // ============================================================================

    generateSimultaneousSteps(problem, solution) {
        const method = solution.category || problem.method;

        let baseSteps = [];

        switch(method) {
            case 'substitution':
                baseSteps = this.generateSubstitutionSteps(problem, solution);
                break;
            case 'elimination':
                baseSteps = this.generateEliminationSteps(problem, solution);
                break;
            case 'matrix':
                baseSteps = this.generateMatrixSteps(problem, solution);
                break;
            case 'graphical':
                baseSteps = this.generateGraphicalSteps(problem, solution);
                break;
            default:
                baseSteps = this.generateGenericSteps(problem, solution);
        }

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
                this.addErrorPrevention(step, method)
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

    generateSubstitutionSteps(problem, solution) {
        const steps = [];
        const { equation1, equation2, coefficients1: c1, coefficients2: c2 } = problem;
        const { isolatedVariable, solution: sol } = solution;

        // Step 1: Write system
        steps.push({
            stepNumber: 1,
            step: 'Write the system',
            description: 'Start with the given system of equations',
            equations: [equation1, equation2],
            reasoning: 'We have two equations with two unknowns to solve simultaneously',
            goalStatement: 'Find values of x and y that satisfy both equations'
        });

        // Step 2: Choose equation and isolate variable
        steps.push({
            stepNumber: 2,
            step: 'Isolate a variable',
            description: `Solve first equation for ${isolatedVariable}`,
            beforeExpression: equation1,
            reasoning: `Choosing ${isolatedVariable} because it has a manageable coefficient`,
            algebraicRule: 'Solving linear equation for one variable'
        });

        // Step 3: Substitute
        steps.push({
            stepNumber: 3,
            step: 'Substitute into second equation',
            description: `Replace ${isolatedVariable} in second equation with expression from step 2`,
            beforeExpression: equation2,
            reasoning: 'Substitution creates equation with only one variable',
            algebraicRule: 'Substitution property',
            visualHint: 'Use parentheses around substituted expression'
        });

        // Step 4: Solve for first variable
        steps.push({
            stepNumber: 4,
            step: 'Solve for the remaining variable',
            description: 'Simplify and solve the resulting equation',
            reasoning: 'Now we have one equation with one unknown',
            algebraicRule: 'Linear equation solving'
        });

        // Step 5: Back-substitute
        steps.push({
            stepNumber: 5,
            step: 'Back-substitute',
            description: `Use found value to calculate ${isolatedVariable}`,
            reasoning: 'Substitute back into isolated expression from Step 2',
            algebraicRule: 'Substitution'
        });

        // Step 6: Write solution
        steps.push({
            stepNumber: 6,
            step: 'Solution',
            description: 'State the final answer',
            expression: `x = ${sol.x}, y = ${sol.y}` || `(${sol.x}, ${sol.y})`,
            finalAnswer: true,
            reasoning: 'This ordered pair satisfies both original equations'
        });

        return steps;
    }

    generateEliminationSteps(problem, solution) {
        const steps = [];
        const { equation1, equation2 } = problem;
        const { eliminatedVariable, multiplier1, multiplier2, solution: sol } = solution;

        // Step 1: Write system
        steps.push({
            stepNumber: 1,
            step: 'Write the system',
            description: 'Align equations in standard form',
            equations: [equation1, equation2],
            reasoning: 'Standard form makes it easier to combine equations',
            goalStatement: `Eliminate ${eliminatedVariable} to solve for the other variable`
        });

        // Step 2: Determine multipliers
        steps.push({
            stepNumber: 2,
            step: 'Determine multipliers',
            description: `Multiply equations to create opposite coefficients for ${eliminatedVariable}`,
            multipliers: { equation1: multiplier1, equation2: multiplier2 },
            reasoning: `LCM chosen to make ${eliminatedVariable} coefficients cancel when added`,
            algebraicRule: 'Multiplication property of equality'
        });

        // Step 3: Multiply equations
        steps.push({
            stepNumber: 3,
            step: 'Multiply equations',
            description: 'Apply multipliers to entire equations',
            reasoning: 'Multiply every term by the multiplier to maintain equality',
            visualHint: 'Don\'t forget to multiply the constant on the right side too!'
        });

        // Step 4: Add/subtract equations
        steps.push({
            stepNumber: 4,
            step: 'Combine equations',
            description: `Add equations to eliminate ${eliminatedVariable}`,
            reasoning: `${eliminatedVariable} terms cancel out, leaving one variable`,
            algebraicRule: 'Addition property of equality'
        });

        // Step 5: Solve for remaining variable
        steps.push({
            stepNumber: 5,
            step: 'Solve for remaining variable',
            description: 'Solve the resulting single-variable equation',
            reasoning: 'Simple linear equation with one unknown',
            algebraicRule: 'Division property of equality'
        });

        // Step 6: Back-substitute
        steps.push({
            stepNumber: 6,
            step: 'Back-substitute',
            description: `Substitute found value into either original equation to find ${eliminatedVariable}`,
            reasoning: 'Use simpler original equation for easier calculation',
            algebraicRule: 'Substitution'
        });

        // Step 7: Solution
        steps.push({
            stepNumber: 7,
            step: 'Solution',
            description: 'Write the complete solution',
            expression: `x = ${sol.x}, y = ${sol.y}`,
            finalAnswer: true
        });

        return steps;
    }

    generateMatrixSteps(problem, solution) {
        const steps = [];
        const { equation1, equation2, coefficients1: c1, coefficients2: c2 } = problem;
        const { determinant, determinantX, determinantY, matrixA, matrixB, solution: sol } = solution;

        // Step 1: Write in matrix form
        steps.push({
            stepNumber: 1,
            step: 'Write system in matrix form',
            description: 'Express as AX = B',
            matrixA: matrixA,
            matrixX: ['x', 'y'],
            matrixB: matrixB,
            reasoning: 'Matrix form allows systematic solution methods',
            goalStatement: 'Use Cramer\'s Rule to find x and y'
        });

        // Step 2: Calculate det(A)
        steps.push({
            stepNumber: 2,
            step: 'Calculate determinant of A',
            description: 'Find det(A) using formula for 2×2 matrix',
            formula: 'det(A) = a₁b₂ - a₂b₁',
            calculation: `det(A) = (${matrixA[0][0]})(${matrixA[1][1]}) - (${matrixA[1][0]})(${matrixA[0][1]}) = ${determinant}`,
            reasoning: 'If det(A) ≠ 0, system has unique solution',
            algebraicRule: 'Determinant of 2×2 matrix'
        });

        // Step 3: Check if det(A) ≠ 0
        steps.push({
            stepNumber: 3,
            step: 'Check determinant',
            description: 'Verify det(A) ≠ 0',
            result: determinant !== 0 ? 'Non-zero, proceed with Cramer\'s Rule' : 'Zero, no unique solution',
            reasoning: 'Non-zero determinant guarantees unique solution exists'
        });

        // Step 4: Calculate det(Ax)
        steps.push({
            stepNumber: 4,
            step: 'Calculate det(Aₓ)',
            description: 'Replace first column of A with constants',
            matrixAx: [[matrixB[0], matrixA[0][1]], [matrixB[1], matrixA[1][1]]],
            calculation: `det(Aₓ) = ${determinantX}`,
            reasoning: 'Numerator for x in Cramer\'s Rule'
        });

        // Step 5: Calculate x
        steps.push({
            stepNumber: 5,
            step: 'Calculate x',
            description: 'Use Cramer\'s Rule: x = det(Aₓ) / det(A)',
            calculation: `x = ${determinantX} / ${determinant} = ${sol.x}`,
            reasoning: 'Cramer\'s Rule formula for x',
            algebraicRule: 'Cramer\'s Rule'
        });

        // Step 6: Calculate det(Ay)
        steps.push({
            stepNumber: 6,
            step: 'Calculate det(Aᵧ)',
            description: 'Replace second column of A with constants',
            matrixAy: [[matrixA[0][0], matrixB[0]], [matrixA[1][0], matrixB[1]]],
            calculation: `det(Aᵧ) = ${determinantY}`,
            reasoning: 'Numerator for y in Cramer\'s Rule'
        });

        // Step 7: Calculate y
        steps.push({
            stepNumber: 7,
            step: 'Calculate y',
            description: 'Use Cramer\'s Rule: y = det(Aᵧ) / det(A)',
            calculation: `y = ${determinantY} / ${determinant} = ${sol.y}`,
            reasoning: 'Cramer\'s Rule formula for y',
            algebraicRule: 'Cramer\'s Rule'
        });

        // Step 8: Solution
        steps.push({
            stepNumber: 8,
            step: 'Solution',
            description: 'State the final answer',
            expression: `x = ${sol.x}, y = ${sol.y}`,
            finalAnswer: true,
            reasoning: 'Solution obtained using matrix methods'
        });

        return steps;
    }

    generateGraphicalSteps(problem, solution) {
        const steps = [];
        const { equation1, equation2 } = problem;
        const { line1, line2, solution: sol, solutionType } = solution;

        // Step 1: Write system
        steps.push({
            stepNumber: 1,
            step: 'Write the system',
            description: 'Identify the two equations to graph',
            equations: [equation1, equation2],
            reasoning: 'Each equation represents a line in the xy-plane',
            goalStatement: 'Find intersection point by graphing both lines'
        });

        // Step 2: Convert to slope-intercept form (first equation)
        steps.push({
            stepNumber: 2,
            step: 'Convert first equation to slope-intercept form',
            description: 'Solve for y in first equation',
            beforeExpression: equation1,
            afterExpression: line1?.equation || 'y = mx + b',
            slope: line1?.slope,
            yIntercept: line1?.yIntercept,
            reasoning: 'y = mx + b form makes graphing easier',
            algebraicRule: 'Solving for y'
        });

        // Step 3: Convert second equation
        steps.push({
            stepNumber: 3,
            step: 'Convert second equation to slope-intercept form',
            description: 'Solve for y in second equation',
            beforeExpression: equation2,
            afterExpression: line2?.equation || 'y = mx + b',
            slope: line2?.slope,
            yIntercept: line2?.yIntercept,
            reasoning: 'Now we have both equations in graphing form'
        });

        // Step 4: Identify key features
        steps.push({
            stepNumber: 4,
            step: 'Identify slope and y-intercept',
            description: 'Extract m and b for each line',
            line1Features: { slope: line1?.slope, yIntercept: line1?.yIntercept },
            line2Features: { slope: line2?.slope, yIntercept: line2?.yIntercept },
            reasoning: 'These values determine how to plot each line',
            visualHint: 'Slope is rise/run; y-intercept is where line crosses y-axis'
        });

        // Step 5: Graph first line
        steps.push({
            stepNumber: 5,
            step: 'Graph first line',
            description: `Plot y-intercept at (0, ${line1?.yIntercept}), use slope ${line1?.slope} to find next point`,
            reasoning: 'Start at y-intercept, use slope to plot additional points',
            visualHint: 'Slope tells you: from one point, move right 1 and up/down by slope value'
        });

        // Step 6: Graph second line
        steps.push({
            stepNumber: 6,
            step: 'Graph second line',
            description: `Plot y-intercept at (0, ${line2?.yIntercept}), use slope ${line2?.slope} to find next point`,
            reasoning: 'Same process as first line',
            visualHint: 'Draw both lines on same coordinate plane'
        });

        // Step 7: Find intersection
        steps.push({
            stepNumber: 7,
            step: 'Locate intersection point',
            description: 'Find where the two lines cross',
            intersectionPoint: sol ? `(${sol.x}, ${sol.y})` : 'No intersection',
            reasoning: 'This point satisfies both equations',
            visualHint: 'The intersection point is the solution to the system'
        });

        // Step 8: Verify algebraically
        steps.push({
            stepNumber: 8,
            step: 'Verify solution algebraically',
            description: 'Check that intersection point satisfies both original equations',
            verification: solution.verification,
            reasoning: 'Graphical solutions should always be verified algebraically for precision',
            finalAnswer: true
        });

        return steps;
    }

    generateGenericSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Solve system',
            description: `Solve using ${solution.method}`,
            solution: solution.solution,
            reasoning: 'Apply systematic solution method'
        }];
    }

    // ============================================================================
    // ENHANCED EXPLANATION METHODS (Similar to Linear Workbook)
    // ============================================================================

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
                prerequisiteSkills: this.identifyPrerequisites(step, solution.category),
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
            'Write the system': "We have two puzzles! Each puzzle has x and y, and we need to find what numbers x and y are that make both puzzles work.",
            'Isolate a variable': "We're going to solve one puzzle for just y (or x), so we know what y equals in terms of x. Like solving 'what's in the mystery box'.",
            'Substitute into second equation': "Now that we know what y equals, we can replace y in the other puzzle with what we found. It's like using a recipe!",
            'Solve for the remaining variable': "Now we only have x left! We solve this like a regular puzzle to find what number x is.",
            'Back-substitute': "We found x! Now let's plug that number back in to find what y is.",
            'Determine multipliers': "We need to make the numbers in front of x (or y) opposites, so they cancel out when we add. We find special numbers to multiply by.",
            'Multiply equations': "We multiply everything in each puzzle by our special numbers. Remember: multiply EVERY part!",
            'Combine equations': "Now we add the two puzzles together. The x's (or y's) cancel out like magic, leaving us with just one variable!",
            'Write in matrix form': "We're organizing our puzzle into a special box format called a matrix. It's like putting things in organized drawers.",
            'Calculate determinant of A': "The determinant is a special number that tells us if our puzzle has an answer. It's like checking if a lock has a key.",
            'Convert to slope-intercept form': "We're rewriting our puzzle as 'y = mx + b'. This tells us the line's steepness (m) and where it crosses the y-axis (b).",
            'Graph lines': "Now we draw both lines on graph paper. Each line represents one of our puzzles.",
            'Locate intersection point': "Where the two lines cross is our answer! That point works for both puzzles."
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our puzzle and find x and y!";
    }

    findRelevantAnalogy(step, problem) {
        const method = problem.method || 'substitution';
        
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (key.includes(method) && (analogy.suitableFor.includes(method) || analogy.suitableFor.includes('all_methods'))) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like solving a puzzle - each step gets us closer to the answer!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'coefficient': 'number in front of variable',
            'coefficients': 'numbers in front of variables',
            'determinant': 'special number from matrix',
            'matrix': 'organized box of numbers',
            'substitute': 'replace with',
            'substitution': 'replacing',
            'eliminate': 'get rid of',
            'elimination': 'getting rid of',
            'slope': 'steepness',
            'y-intercept': 'where line crosses y-axis',
            'intersection': 'where lines cross',
            'simultaneous': 'at the same time',
            'system': 'group of equations',
            'isolate': 'get by itself',
            'back-substitute': 'plug back in'
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
            'Write the system': 'Write both equations clearly, one above the other',
            'Isolate a variable': 'Circle the variable you\'re solving for and show it moving to one side',
            'Substitute into second equation': 'Draw an arrow showing what replaces the variable',
            'Solve for the remaining variable': 'Show the equation getting simpler step by step',
            'Back-substitute': 'Draw arrow showing number going back into original expression',
            'Determine multipliers': 'Show the numbers you\'re multiplying by next to each equation',
            'Multiply equations': 'Show each term getting multiplied, use arrows',
            'Combine equations': 'Show the two equations being added vertically, with cancellation marks',
            'Write in matrix form': 'Draw boxes around the numbers to show matrix structure',
            'Calculate determinant': 'Show the cross-multiplication pattern for 2×2 matrix',
            'Graph first line': 'Draw coordinate plane, plot y-intercept, use slope to find next point',
            'Locate intersection point': 'Mark the crossing point clearly with a dot and circle it'
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

    addErrorPrevention(step, method) {
        const category = method || 'general';
        const stepMistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: stepMistakes,
                preventionTips: this.generatePreventionTips(step, method),
                checkPoints: this.generateCheckPoints(step),
                warningFlags: this.identifyWarningFlags(step, method)
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

    // Helper methods for enhancements

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Write the system': 'A system of equations represents two conditions that must be satisfied simultaneously. We seek values that work in both.',
            'Isolate a variable': 'Expressing one variable in terms of the other creates a formula we can use elsewhere.',
            'Substitute into second equation': 'Substitution replaces a variable with its equivalent expression, reducing to one unknown.',
            'Determine multipliers': 'Multiplying by carefully chosen values creates coefficients that will cancel when combined.',
            'Combine equations': 'Adding equations with opposite coefficients eliminates one variable through cancellation.',
            'Write in matrix form': 'Matrix notation organizes the system compactly and enables powerful algebraic techniques.',
            'Calculate determinant': 'The determinant indicates whether a unique solution exists - it measures the system\'s solvability.',
            'Convert to slope-intercept form': 'This form reveals the line\'s geometric properties: slope (direction) and y-intercept (vertical position).',
            'Locate intersection point': 'The intersection represents the unique point satisfying both linear conditions simultaneously.'
        };

        return conceptualExplanations[step.step] || 'This step advances us toward finding the solution.';
    }

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Identify what needs to be done\n2. Perform the operation carefully\n3. Simplify the result\n4. Proceed to next step`;
        }
        return 'Follow the systematic procedure for this step.';
    }

    getVisualExplanation(step, problem) {
        const method = problem.method;
        
        const visualExplanations = {
            'substitution': 'Imagine replacing a box with its contents - one equation tells you what\'s in the box',
            'elimination': 'Picture two balanced scales being combined - the result stays balanced',
            'matrix': 'Visualize a transformation machine being reversed to find the input',
            'graphical': 'See two lines drawn on a plane - their crossing point is the answer'
        };

        return visualExplanations[method] || 'Visualize the mathematical relationship';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Isolate a variable': 'Linear equation solving: using inverse operations to isolate a variable',
            'Substitute into second equation': 'Substitution Property: if a = b, then a can replace b in any expression',
            'Multiply equations': 'Multiplication Property of Equality: multiplying both sides by same non-zero value preserves equality',
            'Combine equations': 'Addition Property of Equality: adding equal quantities to equals gives equals',
            'Calculate determinant': 'Determinant formula for 2×2 matrix: det(A) = ad - bc',
            'Convert to slope-intercept form': 'Solving for y to express as y = mx + b'
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
                'coefficient': 'number with variable',
                'determinant': 'special number',
                'matrix': 'box of numbers',
                'substitute': 'replace',
                'eliminate': 'remove',
                'isolate': 'get by itself'
            },
            intermediate: {
                'coefficient': 'coefficient',
                'determinant': 'determinant',
                'matrix': 'matrix',
                'substitute': 'substitute',
                'eliminate': 'eliminate',
                'isolate': 'isolate'
            },
            ELI5: {
                'coefficient': 'the number next to the letter',
                'determinant': 'a special number we calculate from the matrix',
                'matrix': 'an organized box where we put numbers in rows and columns',
                'substitute': 'replace or swap out',
                'eliminate': 'get rid of or remove',
                'isolate': 'get the letter all by itself',
                'system': 'a group of puzzles we solve together',
                'simultaneous': 'at the same time'
            },
            detailed: {
                'coefficient': 'coefficient (numerical factor of variable)',
                'determinant': 'determinant (scalar value from square matrix)',
                'matrix': 'matrix (rectangular array of numbers)',
                'substitute': 'substitute (replace with equivalent expression)',
                'eliminate': 'eliminate (remove via algebraic combination)',
                'isolate': 'isolate (express variable alone on one side)'
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
            currentState: `We now have: ${this.summarizeStepResult(currentStep)}`,
            nextGoal: `Next, we will: ${nextStep.description}`,
            why: `This is necessary to: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This helps by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    summarizeStepResult(step) {
        if (step.afterExpression) return step.afterExpression;
        if (step.expression) return step.expression;
        return step.description;
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue toward the solution`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return 'continue progressing toward finding both variables';
    }

    explainStepBenefit(nextStep) {
        return 'bringing us closer to the complete solution';
    }

    generatePreventionTips(step, method) {
        const tips = {
            'Substitute into second equation': [
                'Use parentheses around the entire substituted expression',
                'Distribute carefully after substitution',
                'Double-check you\'re substituting into the correct equation'
            ],
            'Multiply equations': [
                'Multiply EVERY term, including the constant',
                'Watch signs when multiplying by negative numbers',
                'Write out the multiplication explicitly before simplifying'
            ],
            'Combine equations': [
                'Align like terms vertically',
                'Check if you should add or subtract',
                'Verify the target variable actually cancels out'
            ],
            'Calculate determinant': [
                'Use correct formula: ad - bc (not ad + bc)',
                'Watch signs in calculation',
                'Check if result is zero (special case)'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check each calculation'];
    }

    generateCheckPoints(step) {
        return [
            'Did I perform the operation correctly?',
            'Are my calculations accurate?',
            'Does this result make sense?',
            'Am I moving toward the solution?'
        ];
    }

    identifyWarningFlags(step, method) {
        const warnings = {
            substitution: step.step === 'Substitute into second equation' ?
                ['Forgetting parentheses leads to distribution errors'] : [],
            elimination: step.step === 'Multiply equations' ?
                ['Not multiplying all terms is a common error'] : [],
            matrix: step.step === 'Calculate determinant' ?
                ['If det(A) = 0, cannot use Cramer\'s Rule'] : []
        };

        return warnings[method] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Write the system': 'Do I have two independent equations with two unknowns?',
            'Isolate a variable': 'Did I solve correctly for one variable in terms of the other?',
            'Substitute into second equation': 'Did I use parentheses and substitute into the right equation?',
            'Back-substitute': 'Did I substitute the correct value back?',
            'Multiply equations': 'Did I multiply every term by the multiplier?',
            'Combine equations': 'Did the target variable actually cancel out?',
            'Calculate determinant': 'Did I use the correct determinant formula?',
            'Locate intersection point': 'Does this point satisfy both original equations?'
        };

        return questions[step.step] || 'Does this step look correct?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Isolate a variable': 'One variable expressed in terms of the other (y = ... or x = ...)',
            'Substitute into second equation': 'Equation with only one variable remaining',
            'Solve for the remaining variable': 'Numerical value for one variable',
            'Back-substitute': 'Numerical value for second variable',
            'Combine equations': 'Equation with one variable eliminated',
            'Calculate determinant': 'Single numerical value',
            'Locate intersection point': 'Coordinate pair (x, y)'
        };

        return expectations[step.step] || 'Progress toward complete solution';
    }

    generateTroubleshootingTips(step) {
        return [
            'Review the previous step if stuck',
            'Check all arithmetic carefully',
            'Verify you\'re following the method correctly',
            'Try a simpler example first if confused',
            'Verify with a classmate or teacher if needed'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Write the system': [
                'What are the two equations?',
                'What are the two unknowns?',
                'Are the equations independent?'
            ],
            'Isolate a variable': [
                'Which variable is easiest to isolate?',
                'Which equation is simpler to work with?',
                'What operations do I need to isolate the variable?'
            ],
            'Substitute into second equation': [
                'What expression am I substituting?',
                'Where does it go in the second equation?',
                'Did I use parentheses?'
            ],
            'Determine multipliers': [
                'What variable am I eliminating?',
                'What is the LCM of the coefficients?',
                'What should I multiply each equation by?'
            ],
            'Calculate determinant': [
                'What is the formula for a 2×2 determinant?',
                'What are the values of a, b, c, d in my matrix?',
                'Is the determinant zero or non-zero?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How do I achieve it?'];
    }

    generateProgressiveHints(step, problem) {
        const method = problem.method || 'substitution';
        const hintSet = this.hints[method] || this.hints.substitution;

        return {
            level1: hintSet.level1 || 'Think about what you need to do in this step.',
            level2: hintSet.level2 || 'Consider which approach will be easiest.',
            level3: hintSet.level3 || 'Apply the systematic method.',
            level4: hintSet.level4 || 'Execute the specific operations needed.'
        };
    }

    breakIntoSubSteps(step) {
        if (step.step === 'Substitute into second equation') {
            return [
                'Identify the expression to substitute',
                'Identify where to substitute it',
                'Write the substituted equation with parentheses',
                'Distribute if necessary',
                'Simplify the resulting equation'
            ];
        } else if (step.step === 'Multiply equations') {
            return [
                'Identify the multiplier',
                'Multiply first term',
                'Multiply second term',
                'Multiply constant (right side)',
                'Write the new equation'
            ];
        }

        return ['Understand what needs to be done', 'Execute the operation', 'Verify the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try another system with similar structure but different numbers',
            practiceHint: 'Practice the same method on simpler systems first',
            extension: 'Once comfortable, try systems with fractions or larger coefficients'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have at this point?',
            goal: 'What am I trying to accomplish in this step?',
            strategy: 'What method or operation should I use?',
            execute: 'How do I perform this operation correctly?',
            verify: 'Does my result make sense? Should I check it?'
        };
    }

    identifyDecisionPoints(step) {
        const decisions = {
            'Isolate a variable': ['Which variable to isolate?', 'Which equation to use?'],
            'Determine multipliers': ['Which variable to eliminate?', 'What multipliers to use?'],
            'Write in matrix form': ['How to organize the coefficients?', 'Which method to use (Cramer\'s or inverse)?']
        };

        return decisions[step.step] || ['How to proceed with this step?'];
    }

    suggestAlternativeMethods(step, problem) {
        if (step.step === 'Write the system') {
            return [
                'Could solve by substitution instead',
                'Could solve by elimination instead',
                'Could solve by graphing instead',
                'Could solve using matrices instead'
            ];
        }

        return ['The chosen method is appropriate for this step'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by using its result`,
            progression: 'We are getting closer to finding both variables',
            relationship: 'Each step reduces complexity or eliminates variables'
        };
    }

    identifyPrerequisites(step, method) {
        const methodPrereqs = this.prerequisites[method];
        
        if (methodPrereqs) {
            return methodPrereqs.skills;
        }

        return ['Basic algebra skills'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Isolate a variable': ['isolate', 'variable', 'expression', 'terms'],
            'Substitute into second equation': ['substitute', 'replace', 'expression', 'parentheses'],
            'Determine multipliers': ['multiplier', 'LCM', 'coefficient', 'opposite'],
            'Combine equations': ['eliminate', 'cancel', 'combine', 'add/subtract'],
            'Calculate determinant': ['determinant', 'matrix', 'formula'],
            'Convert to slope-intercept form': ['slope', 'y-intercept', 'slope-intercept form']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before starting, what information do I need?',
            during: 'As I work, what should I be careful about?',
            after: 'After finishing, how can I verify this step is correct?'
        };
    }

    findRealWorldConnection(step, problem) {
        const method = problem.method;
        
        const connections = {
            'substitution': 'Like using one recipe within another - the first recipe tells you how to make an ingredient for the second',
            'elimination': 'Like balancing budgets - combining two balanced scenarios stays balanced',
            'matrix': 'Used in computer graphics, cryptography, and engineering to solve complex systems',
            'graphical': 'Like finding where two roads intersect on a map'
        };

        return connections[method] || 'Simultaneous equations appear in economics, physics, chemistry, and engineering';
    }

    // ============================================================================
    // GRAPH GENERATION
    // ============================================================================

    generateSimultaneousGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const method = this.currentSolution.category;

        if (method === 'graphical' || this.currentSolution.line1) {
            this.graphData = this.generateGraphicalVisualization(this.currentProblem, this.currentSolution);
        } else {
            this.graphData = this.generateSimpleGraphVisualization(this.currentProblem, this.currentSolution);
        }
    }

    generateGraphicalVisualization(problem, solution) {
        const { line1, line2, solution: sol } = solution;

        return {
            type: 'simultaneous_graphical',
            line1: {
                slope: line1?.slope,
                yIntercept: line1?.yIntercept,
                equation: line1?.equation,
                points: this.generateLinePoints(line1?.slope, line1?.yIntercept)
            },
            line2: {
                slope: line2?.slope,
                yIntercept: line2?.yIntercept,
                equation: line2?.equation,
                points: this.generateLinePoints(line2?.slope, line2?.yIntercept)
            },
            intersection: sol ? { x: sol.x, y: sol.y } : null,
            description: 'Graphical representation showing both lines and their intersection point'
        };
    }

    generateSimpleGraphVisualization(problem, solution) {
        if (!solution.solution || solution.solutionType.includes('No solution')) {
            return {
                type: 'no_graph',
                reason: solution.solutionType
            };
        }

        return {
            type: 'solution_point',
            point: solution.solution,
            description: `Solution point: (${solution.solution.x}, ${solution.solution.y})`
        };
    }

    generateLinePoints(slope, yIntercept, xRange = [-5, 5]) {
        const points = [];
        for (let x = xRange[0]; x <= xRange[1]; x++) {
            const y = slope * x + yIntercept;
            points.push({ x, y });
        }
        return points;
    }

    // ============================================================================
    // WORKBOOK GENERATION
    // ============================================================================

    generateSimultaneousWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createMethodOverviewSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createSimultaneousLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createComparisonSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection(),
            this.createHistoricalContextSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Simultaneous Equations Mathematical Workbook',
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
            ['System of Equations', ''],
            ['Equation 1', this.currentProblem.equation1],
            ['Equation 2', this.currentProblem.equation2],
            ['', ''],
            ['Solution Method', this.simultaneousTypes[this.currentProblem.method]?.name || this.currentProblem.method],
            ['Method Category', this.currentSolution?.category || 'simultaneous'],
            ['', ''],
            ['Coefficients (Equation 1)', ''],
            ['a₁ (coefficient of x)', this.currentProblem.coefficients1.a],
            ['b₁ (coefficient of y)', this.currentProblem.coefficients1.b],
            ['c₁ (constant)', this.currentProblem.coefficients1.c],
            ['', ''],
            ['Coefficients (Equation 2)', ''],
            ['a₂ (coefficient of x)', this.currentProblem.coefficients2.a],
            ['b₂ (coefficient of y)', this.currentProblem.coefficients2.b],
            ['c₂ (constant)', this.currentProblem.coefficients2.c]
        ];

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createMethodOverviewSection() {
        const method = this.currentSolution?.category || this.currentProblem.method;
        const lesson = this.lessons[method + '_method'] || this.lessons[method];

        if (!lesson) return null;

        const methodData = [
            ['Method', lesson.title],
            ['', ''],
            ['Key Concepts', ''],
            ...lesson.concepts.map(concept => ['•', concept]),
            ['', ''],
            ['Theory', lesson.theory],
            ['', ''],
            ['Advantages', ''],
            ...lesson.advantages.map(adv => ['•', adv]),
            ['', ''],
            ['Disadvantages', ''],
            ...lesson.disadvantages.map(dis => ['•', dis])
        ];

        return {
            title: `${lesson.title} Overview`,
            type: 'method_overview',
            data: methodData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const method = this.currentSolution?.category;
        const prereqs = this.prerequisites[method];

        if (!prereqs) return null;

        const prereqData = [
            ['Required Skills', prereqs.skills.join(', ')],
            ['Prior Knowledge', prereqs.priorKnowledge.join(', ')],
            ['', ''],
            ['Prerequisite Check Questions', '']
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
                stepsData.push(['Current State', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['Why', step.explanation.why]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.step]);
            stepsData.push(['Description', step.description]);

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                stepsData.push(['After', step.afterExpression]);
            } else if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Algebraic Rule', step.algebraicRule]);
            }

            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5 Explanation', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
                if (step.ELI5.visualization) {
                    stepsData.push(['Visualize', step.ELI5.visualization]);
                }
            }

            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Procedural', step.explanations.procedural]);
            }

            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

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

            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Think Before', step.thinkingPrompts.before]);
                stepsData.push(['Think During', step.thinkingPrompts.during]);
                stepsData.push(['Think After', step.thinkingPrompts.after]);
            }

            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            if (step.realWorldConnection && this.includeRealWorldApplications) {
                stepsData.push(['Real-World Connection', step.realWorldConnection]);
            }

            stepsData.push(['', '']);
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createSimultaneousLessonSection() {
        const method = this.currentSolution?.category;
        const lesson = this.lessons[method + '_method'] || this.lessons[method];

        if (!lesson) return null;

        const lessonData = [
            ['Method', lesson.title],
            ['', ''],
            ['Theory', lesson.theory],
            ['', ''],
            ['Solving Steps', ''],
            ...lesson.solvingSteps.map((step, i) => [`${i + 1}.`, step]),
            ['', ''],
            ['Applications', ''],
            ...lesson.applications.map(app => ['•', app])
        ];

        if (lesson.keyFormulas) {
            lessonData.push(['', '']);
            lessonData.push(['Key Formulas', '']);
            Object.entries(lesson.keyFormulas).forEach(([name, formula]) => {
                lessonData.push([name, formula]);
            });
        }

        return {
            title: 'Key Concepts and Theory',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Method Used', this.currentSolution.method],
            ['Solution Type', this.currentSolution.solutionType]
        ];

        if (this.currentSolution.solution) {
            if (typeof this.currentSolution.solution === 'object') {
                solutionData.push(['', '']);
                solutionData.push(['Solution', '']);
                solutionData.push(['x', this.currentSolution.solution.x]);
                solutionData.push(['y', this.currentSolution.solution.y]);
                solutionData.push(['Ordered Pair', `(${this.currentSolution.solution.x}, ${this.currentSolution.solution.y})`]);
            } else {
                solutionData.push(['Solution', this.currentSolution.solution]);
            }
        }

        if (this.currentSolution.explanation) {
            solutionData.push(['', '']);
            solutionData.push(['Explanation', this.currentSolution.explanation]);
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
            ['Method', this.currentSolution.method],
            ['Category', this.currentSolution.category],
            ['Solution Type', this.currentSolution.solutionType],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel]
        ];

        if (this.currentSolution.determinant !== undefined) {
            analysisData.push(['', '']);
            analysisData.push(['Matrix Properties', '']);
            analysisData.push(['Determinant', this.currentSolution.determinant]);
            if (this.currentSolution.determinant === 0) {
                analysisData.push(['Note', 'Zero determinant indicates no unique solution']);
            } else {
                analysisData.push(['Note', 'Non-zero determinant confirms unique solution exists']);
            }
        }

        if (this.currentSolution.line1 && this.currentSolution.line2) {
            analysisData.push(['', '']);
            analysisData.push(['Graphical Properties', '']);
            analysisData.push(['Line 1 Slope', this.currentSolution.line1.slope]);
            analysisData.push(['Line 1 Y-Intercept', this.currentSolution.line1.yIntercept]);
            analysisData.push(['Line 2 Slope', this.currentSolution.line2.slope]);
            analysisData.push(['Line 2 Y-Intercept', this.currentSolution.line2.yIntercept]);
            
            if (Math.abs(this.currentSolution.line1.slope - this.currentSolution.line2.slope) < 1e-10) {
                analysisData.push(['Line Relationship', 'Parallel or coincident']);
            } else {
                analysisData.push(['Line Relationship', 'Intersecting']);
            }
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentSolution.verification) return null;

        const verification = this.currentSolution.verification;
        
        const verificationData = [
            ['Verification Method', 'Direct Substitution'],
            ['', ''],
            ['Solution to Verify', verification.solution],
            ['', ''],
            ['Equation 1 Check', verification.equation1Check],
            ['Difference from Expected', verification.difference1.toExponential(2)],
            ['', ''],
            ['Equation 2 Check', verification.equation2Check],
            ['Difference from Expected', verification.difference2.toExponential(2)],
            ['', ''],
            ['Verification Result', verification.isValid ? 'VALID ✓' : 'INVALID ✗'],
            ['Confidence Level', verification.isValid ? 'High' : 'Check for errors']
        ];

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Notes', 'Solution verified by substituting into both original equations']);
            verificationData.push(['Tolerance', 'Differences less than 10⁻⁹ are considered valid due to floating-point precision']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createComparisonSection() {
        if (!this.includeAlternativeMethods) return null;

        const method = this.currentSolution?.category;

        const comparisonData = [
            ['Method Used', this.currentSolution?.method],
            ['', ''],
            ['Method Comparison for This System', ''],
            ['', '']
        ];

        const methods = ['substitution', 'elimination', 'matrix', 'graphical'];
        methods.forEach(m => {
            const lesson = this.lessons[m + '_method'] || this.lessons[m];
            if (lesson) {
                comparisonData.push([lesson.title, '']);
                comparisonData.push(['Advantages', lesson.advantages[0]]);
                comparisonData.push(['Disadvantages', lesson.disadvantages[0]]);
                if (m === method) {
                    comparisonData.push(['Status', '✓ USED IN THIS SOLUTION']);
                }
                comparisonData.push(['', '']);
            }
        });

        comparisonData.push(['Recommendation', `${this.currentSolution?.method} was a good choice for this system`]);

        return {
            title: 'Method Comparison',
            type: 'comparison',
            data: comparisonData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 4);

        const appData = [
            ['Real-World Applications of Simultaneous Equations', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Context', app.context]);
            appData.push(['Variables', app.variables]);
            appData.push(['Setup Pattern', app.setupPattern]);
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

        const method = this.currentSolution?.category;
        const notes = this.generatePedagogicalNotes(method);

        return {
            title: 'Teaching & Learning Notes',
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

        const method = this.currentSolution?.category;
        const alternatives = this.generateAlternativeMethods(method);

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method Used', alternatives.primaryMethod],
                ['', ''],
                ['Alternative Methods', ''],
                ...alternatives.methods.map((m, i) => [
                    `Method ${i + 1}`, `${m.name}: ${m.description}`
                ]),
                ['', ''],
                ['Method Selection Guidance', alternatives.guidance],
                ['When to Use Each Method', alternatives.whenToUse]
            ]
        };
    }

    createPracticeProblemsSection() {
        const method = this.currentSolution?.category;
        const byMethod = this.questionBank.byMethod[method] || [];
        const byDifficulty = this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            [`${this.currentSolution?.method} Practice`, '']
        ];

        byMethod.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p.system || `x = ${p.solution.x}, y = ${p.solution.y}`]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Mixed Difficulty Problems', '']);
        practiceData.push(['', '']);
        practiceData.push(['Easy', '']);
        byDifficulty.easy.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium', '']);
        byDifficulty.medium.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Hard', '']);
        byDifficulty.hard.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    createHistoricalContextSection() {
        if (!this.includeHistoricalContext) return null;

        const hist = this.historicalContext;

        return {
            title: 'Historical Context',
            type: 'historical',
            data: [
                ['Ancient Origins', `${hist.ancientOrigins.period}: ${hist.ancientOrigins.contribution}`],
                ['Significance', hist.ancientOrigins.significance],
                ['', ''],
                ['Chinese Mathematics', `${hist.chineseNineChapters.period}: ${hist.chineseNineChapters.contribution}`],
                ['Significance', hist.chineseNineChapters.significance],
                ['', ''],
                ['Arabic Algebra', `${hist.arabicAlgebra.period}: ${hist.arabicAlgebra.contribution}`],
                ['', ''],
                ['European Development', `${hist.europeanDevelopment.period}: ${hist.europeanDevelopment.contribution}`],
                ['', ''],
                ['Modern Applications', hist.modernApplications.contribution],
                ['', ''],
                ['Interesting Facts', ''],
                ...hist.interestingFacts.map(fact => ['•', fact])
            ]
        };
    }

    // ============================================================================
    // HELPER GENERATION METHODS
    // ============================================================================

    generatePedagogicalNotes(method) {
        const pedagogicalDatabase = {
            substitution: {
                objectives: [
                    'Solve systems using substitution method',
                    'Isolate variables effectively',
                    'Substitute expressions correctly with proper notation'
                ],
                keyConcepts: [
                    'One equation defines a relationship used in another',
                    'Substitution reduces two-variable problem to one variable',
                    'Parentheses critical when substituting multi-term expressions'
                ],
                prerequisites: [
                    'Solving linear equations for one variable',
                    'Substitution and evaluation',
                    'Distributive property'
                ],
                commonDifficulties: [
                    'Forgetting parentheses when substituting',
                    'Distribution errors after substitution',
                    'Choosing difficult variable to isolate'
                ],
                teachingStrategies: [
                    'Emphasize parentheses rule repeatedly',
                    'Practice isolating variables first',
                    'Use color coding for substituted expressions'
                ],
                extensions: [
                    'Non-linear systems',
                    'Three-variable systems',
                    'Word problems requiring substitution'
                ],
                assessment: [
                    'Can student correctly isolate a variable?',
                    'Does student use parentheses?',
                    'Can student identify when substitution is best?'
                ]
            },
            elimination: {
                objectives: [
                    'Solve systems using elimination method',
                    'Determine appropriate multipliers',
                    'Combine equations to eliminate variables'
                ],
                keyConcepts: [
                    'Creating opposite coefficients enables cancellation',
                    'LCM helps find efficient multipliers',
                    'Addition property of equality allows equation combination'
                ],
                prerequisites: [
                    'Finding LCM',
                    'Multiplying equations by constants',
                    'Adding/subtracting equations'
                ],
                commonDifficulties: [
                    'Only multiplying one term instead of entire equation',
                    'Choosing inefficient multipliers',
                    'Sign errors when combining'
                ],
                teachingStrategies: [
                    'Teach LCM method systematically',
                    'Practice vertical alignment',
                    'Use arrows to show combination'
                ],
                extensions: [
                    'Systems requiring two eliminations',
                    'Three-variable systems',
                    'Recognizing when elimination is most efficient'
                ],
                assessment: [
                    'Can student find appropriate multipliers?',
                    'Does student multiply entire equations?',
                    'Can student recognize when to use elimination?'
                ]
            },
            matrix: {
                objectives: [
                    'Represent systems as matrix equations',
                    'Calculate determinants',
                    'Apply Cramer\'s Rule correctly'
                ],
                keyConcepts: [
                    'Matrix form organizes system compactly',
                    'Determinant indicates solution existence',
                    'Cramer\'s Rule provides systematic solution'
                ],
                prerequisites: [
                    'Matrix notation',
                    'Determinant calculation',
                    'Understanding of matrix operations'
                ],
                commonDifficulties: [
                    'Setting up matrix correctly',
                    'Determinant formula errors',
                    'Column replacement in Cramer\'s Rule'
                ],
                teachingStrategies: [
                    'Teach matrix setup carefully',
                    'Use memory aids for determinant',
                    'Practice column replacement separately'
                ],
                extensions: [
                    'Inverse matrix method',
                    'Larger systems',
                    'Applications in transformations'
                ],
                assessment: [
                    'Can student set up matrix equation?',
                    'Can student calculate determinants accurately?',
                    'Does student check for zero determinant?'
                ]
            },
            graphical: {
                objectives: [
                    'Graph linear equations accurately',
                    'Find intersection points',
                    'Interpret solution geometrically'
                ],
                keyConcepts: [
                    'Each equation is a line',
                    'Solution is intersection point',
                    'Parallel lines mean no solution'
                ],
                prerequisites: [
                    'Graphing linear equations',
                    'Slope-intercept form',
                    'Reading coordinates'
                ],
                commonDifficulties: [
                    'Inaccurate graphing',
                    'Misreading coordinates',
                    'Not verifying graphical solution algebraically'
                ],
                teachingStrategies: [
                    'Use graph paper or technology',
                    'Always verify algebraically',
                    'Discuss parallel and coincident cases'
                ],
                extensions: [
                    'Graphing inequalities',
                    'Linear programming',
                    'Systems with more than two variables (3D)'
                ],
                assessment: [
                    'Can student graph accurately?',
                    'Can student identify solution from graph?',
                    'Does student verify algebraically?'
                ]
            }
        };

        return pedagogicalDatabase[method] || {
            objectives: ['Solve simultaneous equations'],
            keyConcepts: ['Two equations with two unknowns'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Various challenges'],
            teachingStrategies: ['Systematic instruction'],
            extensions: ['More complex systems'],
            assessment: ['Check understanding']
        };
    }

    generateAlternativeMethods(method) {
        const alternativeDatabase = {
            substitution: {
                primaryMethod: 'Substitution Method',
                methods: [
                    {
                        name: 'Elimination Method',
                        description: 'Create opposite coefficients and combine equations - often cleaner with integer coefficients'
                    },
                    {
                        name: 'Matrix Method',
                        description: 'Use Cramer\'s Rule or matrix inverse - systematic for larger systems'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Graph both equations and find intersection - provides visual understanding'
                    }
                ],
                guidance: 'Substitution is best when one variable is already isolated or has coefficient ±1',
                whenToUse: 'Choose substitution when one equation is easily solvable for a variable, or when coefficients make elimination messy'
            },
            elimination: {
                primaryMethod: 'Elimination Method',
                methods: [
                    {
                        name: 'Substitution Method',
                        description: 'Isolate one variable and substitute - good when coefficient is ±1'
                    },
                    {
                        name: 'Matrix Method',
                        description: 'Use determinants and Cramer\'s Rule - very systematic'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Visual approach showing intersection - good for conceptual understanding'
                    }
                ],
                guidance: 'Elimination is best for small integer coefficients or when coefficients are already opposites',
                whenToUse: 'Choose elimination when coefficients are manageable and making them opposites is straightforward'
            },
            matrix: {
                primaryMethod: 'Matrix Method (Cramer\'s Rule)',
                methods: [
                    {
                        name: 'Substitution Method',
                        description: 'Isolate and substitute - simpler for 2×2 systems'
                    },
                    {
                        name: 'Elimination Method',
                        description: 'Combine equations - intuitive algebraic approach'
                    },
                    {
                        name: 'Inverse Matrix Method',
                        description: 'Find A⁻¹ and compute X = A⁻¹B - alternative matrix approach'
                    }
                ],
                guidance: 'Matrix methods excel for larger systems and computer implementation',
                whenToUse: 'Choose matrices for 3+ variable systems, or when systematic approach is desired'
            },
            graphical: {
                primaryMethod: 'Graphical Method',
                methods: [
                    {
                        name: 'Algebraic Methods',
                        description: 'Substitution or elimination - give exact answers'
                    },
                    {
                        name: 'Matrix Method',
                        description: 'Systematic numerical approach'
                    },
                    {
                        name: 'Technology-Enhanced Graphing',
                        description: 'Use graphing calculator or software for precision'
                    }
                ],
                guidance: 'Graphical method is best for visual learners and approximate solutions',
                whenToUse: 'Choose graphing for visual understanding, checking solution type, or when exact decimals aren\'t required'
            }
        };

        return alternativeDatabase[method] || {
            primaryMethod: 'Standard approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods available depending on system'
            }],
            guidance: 'Choose method based on system characteristics',
            whenToUse: 'Consider coefficients, desired precision, and personal preference'
        };
    }
}

// Export the class
export default EnhancedSimultaneousEquationsWorkbook;
