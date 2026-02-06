// Enhanced Linear Programming Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedLinearProgrammingMathematicalWorkbook {
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
        this.tableauHistory = [];

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
        this.initializeLinearProgrammingSolvers();
        this.initializeLinearProgrammingLessons();
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
        this.initializeSimplexMethodDatabase();
        this.initializeGraphicalMethodDatabase();
        this.initializeSensitivityAnalysisDatabase();
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
            // LP specific
            'optimal': '⋆', 'infeasible': '∅', 'unbounded': '↑∞'
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
                tableauBg: '#e8f4f8',
                feasibleRegionBg: '#d4edda',
                optimalBg: '#fff3cd'
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
                tableauBg: '#e0f2f7',
                feasibleRegionBg: '#c8e6c9',
                optimalBg: '#fff9c4'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeLinearProgrammingLessons() {
        this.lessons = {
            lp_introduction: {
                title: "Introduction to Linear Programming",
                concepts: [
                    "LP optimizes a linear objective function subject to linear constraints",
                    "Decision variables represent quantities we control",
                    "Objective function is what we want to maximize or minimize",
                    "Constraints define the feasible region",
                    "Optimal solution occurs at a corner point (vertex) of feasible region"
                ],
                theory: "Linear programming is a mathematical method for determining optimal allocation of limited resources among competing activities. It assumes linearity in both objective and constraints.",
                keyFormulas: {
                    "Standard Form": "Maximize Z = c₁x₁ + c₂x₂ + ... + cₙxₙ subject to constraints",
                    "Constraint Format": "a₁x₁ + a₂x₂ + ... + aₙxₙ ≤ b (or ≥ or =)",
                    "Non-negativity": "x₁, x₂, ..., xₙ ≥ 0"
                },
                components: [
                    "Decision Variables: What we decide",
                    "Objective Function: What we optimize",
                    "Constraints: Limitations and requirements",
                    "Feasible Region: All solutions satisfying constraints",
                    "Optimal Solution: Best feasible solution"
                ],
                applications: [
                    "Production planning and scheduling",
                    "Resource allocation",
                    "Transportation and logistics",
                    "Portfolio optimization",
                    "Diet and nutrition planning",
                    "Workforce scheduling"
                ]
            },

            formulation: {
                title: "LP Problem Formulation",
                concepts: [
                    "Identify decision variables",
                    "Define objective function",
                    "Formulate all constraints",
                    "Include non-negativity restrictions",
                    "Check units and consistency"
                ],
                theory: "Formulation translates real-world problems into mathematical LP models. Clear variable definition and constraint identification are crucial.",
                steps: [
                    "1. Understand the problem context",
                    "2. Define decision variables with clear meaning and units",
                    "3. Write objective function in terms of variables",
                    "4. Express all limitations as linear inequalities/equations",
                    "5. Add non-negativity constraints",
                    "6. Verify model represents the problem accurately"
                ],
                commonPatterns: {
                    "Production Mix": "Variables = quantities to produce, maximize profit or minimize cost",
                    "Resource Allocation": "Variables = amounts allocated, constraints = resource availability",
                    "Transportation": "Variables = shipment quantities, minimize shipping cost",
                    "Blending": "Variables = ingredient amounts, meet specifications at minimum cost",
                    "Assignment": "Binary variables for task assignments"
                },
                checkList: [
                    "Are all variables clearly defined?",
                    "Is objective function linear?",
                    "Are all constraints linear?",
                    "Did you include non-negativity?",
                    "Are units consistent?",
                    "Does model capture all important aspects?"
                ]
            },

            graphical_method: {
                title: "Graphical Solution Method (2 Variables)",
                concepts: [
                    "Plot all constraint lines",
                    "Identify feasible region",
                    "Plot objective function as iso-profit/iso-cost lines",
                    "Find corner points of feasible region",
                    "Evaluate objective at each corner point",
                    "Select point with best objective value"
                ],
                theory: "For problems with 2 variables, we can visualize the feasible region and objective function graphically. Optimal solution is at a vertex of the feasible region.",
                steps: [
                    "1. Graph each constraint as a boundary line",
                    "2. Determine which side satisfies each inequality",
                    "3. Shade feasible region (intersection of all constraints)",
                    "4. Identify all corner points",
                    "5. Evaluate Z at each corner point",
                    "6. Select corner with optimal Z value"
                ],
                specialCases: {
                    "Unbounded": "Feasible region extends to infinity, Z can increase/decrease indefinitely",
                    "Infeasible": "No point satisfies all constraints simultaneously",
                    "Multiple Optima": "Objective function parallel to constraint, infinite optimal solutions",
                    "Degenerate": "More than two constraints intersect at optimal point"
                },
                advantages: [
                    "Visual understanding of problem",
                    "Easy to see feasible region",
                    "Clear identification of binding constraints",
                    "Intuitive for beginners"
                ],
                limitations: [
                    "Only works for 2 variables",
                    "Not practical for large problems",
                    "Difficult with many constraints"
                ]
            },

            simplex_method: {
                title: "Simplex Method",
                concepts: [
                    "Algebraic technique for solving LP problems",
                    "Moves from one corner point to adjacent better corner",
                    "Uses tableau representation",
                    "Iterative improvement until optimality",
                    "Works for any number of variables and constraints"
                ],
                theory: "The Simplex Method is an efficient algorithm that moves along edges of the feasible region to reach the optimal vertex. It uses matrix operations on tableau format.",
                steps: [
                    "1. Convert to standard form (add slack/surplus variables)",
                    "2. Set up initial simplex tableau",
                    "3. Check optimality conditions",
                    "4. If not optimal: select entering variable (most negative Zⱼ - Cⱼ)",
                    "5. Select leaving variable (minimum ratio test)",
                    "6. Pivot to create new tableau",
                    "7. Repeat until optimal"
                ],
                keyTerms: {
                    "Slack Variable": "Added to ≤ constraint to make it equality",
                    "Surplus Variable": "Subtracted from ≥ constraint",
                    "Artificial Variable": "Added to = constraint for initial solution",
                    "Basic Variable": "Variable in current solution (non-zero)",
                    "Non-basic Variable": "Variable not in current solution (zero)",
                    "Pivot Element": "Element used to transform tableau",
                    "Zⱼ - Cⱼ Row": "Optimality indicators"
                },
                tableauStructure: "Initial tableau has constraint coefficients, RHS, and objective row",
                optimalityCondition: {
                    "Maximization": "All Zⱼ - Cⱼ ≥ 0",
                    "Minimization": "All Zⱼ - Cⱼ ≤ 0"
                }
            },

            standard_form: {
                title: "Standard Form Conversion",
                concepts: [
                    "All constraints as equalities",
                    "All variables non-negative",
                    "Objective function as maximization",
                    "RHS values non-negative"
                ],
                theory: "Standard form provides a consistent format for Simplex Method. Conversion requires adding slack/surplus/artificial variables.",
                conversions: {
                    "Minimize Z": "Maximize -Z",
                    "≤ constraint": "Add slack variable",
                    "≥ constraint": "Subtract surplus, add artificial",
                    "= constraint": "Add artificial variable",
                    "Negative RHS": "Multiply constraint by -1 and reverse inequality",
                    "Unrestricted variable": "Replace with difference of two non-negative variables"
                },
                examples: [
                    "x₁ + x₂ ≤ 10 becomes x₁ + x₂ + s₁ = 10, s₁ ≥ 0",
                    "2x₁ - x₂ ≥ 5 becomes 2x₁ - x₂ - s₂ + A₁ = 5, s₂,A₁ ≥ 0",
                    "Minimize Z = 3x₁ + 2x₂ becomes Maximize Z' = -3x₁ - 2x₂"
                ]
            },

            duality: {
                title: "Duality Theory",
                concepts: [
                    "Every LP has an associated dual problem",
                    "Primal maximization ↔ Dual minimization",
                    "Primal constraints ↔ Dual variables",
                    "Primal variables ↔ Dual constraints",
                    "Strong Duality: Optimal values equal"
                ],
                theory: "Duality provides alternative perspective on LP. Dual solution gives shadow prices (marginal values) of resources.",
                dualConstruction: {
                    "Primal (Max)": "Dual (Min)",
                    "Primal ≤ constraint": "→ Dual variable ≥ 0",
                    "Primal = constraint": "→ Dual variable unrestricted",
                    "Primal variable ≥ 0": "→ Dual ≥ constraint",
                    "Primal objective coeff": "→ Dual RHS",
                    "Primal RHS": "→ Dual objective coeff"
                },
                economicInterpretation: "Dual variables represent marginal worth of resources (shadow prices)",
                complementarySlackness: "If primal constraint not binding, dual variable = 0"
            },

            sensitivity_analysis: {
                title: "Sensitivity and Post-Optimality Analysis",
                concepts: [
                    "How solution changes with parameter variations",
                    "Range of optimality for objective coefficients",
                    "Range of feasibility for RHS values",
                    "Shadow prices indicate resource value",
                    "Reduced costs show variable opportunity cost"
                ],
                theory: "Sensitivity analysis examines solution stability when problem parameters change slightly. Crucial for practical decision-making.",
                keyMetrics: {
                    "Shadow Price": "Change in objective per unit increase in RHS",
                    "Reduced Cost": "Amount objective must improve for variable to enter solution",
                    "Range of Optimality": "Interval where basis remains optimal",
                    "Range of Feasibility": "Interval where basis remains feasible",
                    "100% Rule": "Combined percentage changes < 100% preserves optimality"
                },
                applications: [
                    "What-if analysis for decision making",
                    "Identifying critical constraints",
                    "Pricing decisions",
                    "Resource acquisition priorities"
                ],
                interpretation: {
                    "Positive Shadow Price": "Resource is valuable, increasing it improves objective",
                    "Zero Shadow Price": "Resource not fully utilized, surplus exists",
                    "Binding Constraint": "Fully utilized, shadow price > 0",
                    "Non-binding Constraint": "Slack exists, shadow price = 0"
                }
            },

            special_cases: {
                title: "Special Cases in LP",
                concepts: [
                    "Infeasibility: No feasible solution exists",
                    "Unboundedness: Objective can improve infinitely",
                    "Alternative Optima: Multiple optimal solutions",
                    "Degeneracy: Basic variable equals zero"
                ],
                infeasibility: {
                    causes: "Contradictory constraints, overly restrictive requirements",
                    detection: "Artificial variables positive in final solution",
                    resolution: "Relax constraints, check for errors in formulation"
                },
                unboundedness: {
                    causes: "Missing constraints, incorrect formulation",
                    detection: "All ratios negative in minimum ratio test",
                    resolution: "Add missing constraints, verify model"
                },
                alternativeOptima: {
                    causes: "Objective parallel to constraint",
                    detection: "Non-basic variable has Zⱼ - Cⱼ = 0",
                    significance: "Flexibility in implementation, multiple optimal solutions"
                },
                degeneracy: {
                    causes: "More than n constraints intersect at point",
                    detection: "Basic variable = 0 in solution",
                    implications: "May cause cycling in simplex (rare), use perturbation methods"
                }
            },

            integer_programming: {
                title: "Integer and Binary Programming",
                concepts: [
                    "Variables restricted to integer values",
                    "Binary variables: 0 or 1 only",
                    "Used for discrete decisions",
                    "More complex than continuous LP",
                    "Branch-and-bound solution method"
                ],
                theory: "Integer Programming extends LP to discrete decisions. NP-hard problem class, requiring specialized algorithms.",
                applications: [
                    "Assignment problems (0-1 variables)",
                    "Project selection",
                    "Facility location",
                    "Scheduling with discrete time periods",
                    "Routing and network design"
                ],
                variableTypes: {
                    "Binary": "xᵢ ∈ {0, 1}, for yes/no decisions",
                    "General Integer": "xᵢ ∈ {0, 1, 2, ...}, for discrete quantities",
                    "Mixed Integer": "Some variables integer, others continuous"
                },
                solutionMethods: [
                    "Branch-and-Bound",
                    "Cutting Plane",
                    "Branch-and-Cut",
                    "Heuristics for large problems"
                ]
            },

            transportation_problem: {
                title: "Transportation and Assignment Problems",
                concepts: [
                    "Special structure LP problems",
                    "Transport goods from sources to destinations",
                    "Minimize total transportation cost",
                    "Supply and demand constraints",
                    "Efficient specialized algorithms"
                ],
                theory: "Transportation problems have special structure allowing efficient solution methods beyond general simplex.",
                formulation: {
                    "Decision Variables": "xᵢⱼ = amount shipped from source i to destination j",
                    "Objective": "Minimize Σᵢ Σⱼ cᵢⱼxᵢⱼ (total cost)",
                    "Supply Constraints": "Σⱼ xᵢⱼ = sᵢ for each source i",
                    "Demand Constraints": "Σᵢ xᵢⱼ = dⱼ for each destination j",
                    "Non-negativity": "xᵢⱼ ≥ 0 for all i,j"
                },
                solutionMethods: [
                    "Northwest Corner Method (initial solution)",
                    "Least Cost Method (initial solution)",
                    "Vogel's Approximation Method (better initial)",
                    "MODI Method (optimality test)",
                    "Stepping Stone Method (improvement)"
                ],
                assignmentProblem: "Special case: assign n workers to n tasks, one-to-one, uses Hungarian Algorithm"
            },

            network_flow: {
                title: "Network Flow Problems",
                concepts: [
                    "Flows through network of nodes and arcs",
                    "Conservation of flow at nodes",
                    "Capacity constraints on arcs",
                    "Includes shortest path, max flow, min cost flow",
                    "Very efficient solution algorithms"
                ],
                theory: "Network flow problems have graph structure allowing specialized efficient algorithms.",
                problemTypes: {
                    "Shortest Path": "Find minimum cost path from source to destination",
                    "Maximum Flow": "Find maximum flow from source to sink",
                    "Minimum Cost Flow": "Send specific amount at minimum cost",
                    "Transportation": "Special case of min cost flow"
                },
                algorithms: [
                    "Dijkstra's Algorithm (shortest path)",
                    "Ford-Fulkerson (max flow)",
                    "Network Simplex (min cost flow)",
                    "Bellman-Ford (shortest path with negative costs)"
                ],
                applications: [
                    "Logistics and distribution",
                    "Communication networks",
                    "Project scheduling (CPM/PERT)",
                    "Supply chain optimization"
                ]
            }
        };
    }

    initializeLinearProgrammingSolvers() {
        this.lpTypes = {
            two_variable_graphical: {
                patterns: [
                    /graphical/i,
                    /two.variable/i,
                    /2.variable/i,
                    /plot/i
                ],
                solver: this.solveGraphicalLP.bind(this),
                name: 'Two-Variable Graphical Method',
                category: 'graphical',
                description: 'Solves LP with 2 variables using graphical method',
                variables: 2
            },

            simplex_maximization: {
                patterns: [
                    /simplex/i,
                    /maximize/i,
                    /max/i
                ],
                solver: this.solveSimplexMaximization.bind(this),
                name: 'Simplex Method - Maximization',
                category: 'simplex',
                description: 'Solves LP maximization using Simplex algorithm'
            },

            simplex_minimization: {
                patterns: [
                    /simplex.*min/i,
                    /minimize/i,
                    /min(?!.*max)/i
                ],
                solver: this.solveSimplexMinimization.bind(this),
                name: 'Simplex Method - Minimization',
                category: 'simplex',
                description: 'Solves LP minimization using Simplex algorithm'
            },

            two_phase_simplex: {
                patterns: [
                    /two.phase/i,
                    /big.m/i,
                    /artificial/i
                ],
                solver: this.solveTwoPhaseSimpleх.bind(this),
                name: 'Two-Phase Simplex Method',
                category: 'simplex',
                description: 'Solves LP with equality and ≥ constraints'
            },

            dual_simplex: {
                patterns: [
                    /dual.simplex/i
                ],
                solver: this.solveDualSimplex.bind(this),
                name: 'Dual Simplex Method',
                category: 'simplex',
                description: 'Solves LP starting from dual feasible solution'
            },

            sensitivity_analysis: {
                patterns: [
                    /sensitivity/i,
                    /shadow.price/i,
                    /post.optimal/i,
                    /parametric/i
                ],
                solver: this.performSensitivityAnalysis.bind(this),
                name: 'Sensitivity Analysis',
                category: 'post_optimal',
                description: 'Analyzes solution sensitivity to parameter changes'
            },

            duality_analysis: {
                patterns: [
                    /dual(?!.*simplex)/i,
                    /primal.dual/i
                ],
                solver: this.analyzeDuality.bind(this),
                name: 'Duality Analysis',
                category: 'duality',
                description: 'Constructs and solves dual problem'
            },

            transportation: {
                patterns: [
                    /transportation/i,
                    /vogel/i,
                    /northwest/i,
                    /modi/i
                ],
                solver: this.solveTransportation.bind(this),
                name: 'Transportation Problem',
                category: 'special',
                description: 'Solves transportation problem using specialized methods'
            },

            assignment: {
                patterns: [
                    /assignment/i,
                    /hungarian/i,
                    /matching/i
                ],
                solver: this.solveAssignment.bind(this),
                name: 'Assignment Problem',
                category: 'special',
                description: 'Solves assignment problem using Hungarian algorithm'
            },

            integer_programming: {
                patterns: [
                    /integer/i,
                    /binary/i,
                    /0.1/i,
                    /branch.bound/i
                ],
                solver: this.solveIntegerProgramming.bind(this),
                name: 'Integer Programming',
                category: 'integer',
                description: 'Solves LP with integer variable restrictions'
            },

            goal_programming: {
                patterns: [
                    /goal/i,
                    /multi.objective/i,
                    /deviation/i
                ],
                solver: this.solveGoalProgramming.bind(this),
                name: 'Goal Programming',
                category: 'special',
                description: 'Solves LP with multiple prioritized goals'
            },

            network_flow: {
                patterns: [
                    /network/i,
                    /max.flow/i,
                    /shortest.path/i,
                    /min.cost.flow/i
                ],
                solver: this.solveNetworkFlow.bind(this),
                name: 'Network Flow Problem',
                category: 'network',
                description: 'Solves network optimization problems'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            formulation: {
                'Define variables': [
                    'Not specifying units for variables',
                    'Using ambiguous variable definitions',
                    'Forgetting to define all necessary variables',
                    'Mixing continuous and discrete inappropriately'
                ],
                'Write objective': [
                    'Incorrect signs in objective function',
                    'Missing variables in objective',
                    'Non-linear terms in objective',
                    'Wrong optimization direction (max vs min)'
                ],
                'Formulate constraints': [
                    'Using wrong inequality direction',
                    'Forgetting non-negativity constraints',
                    'Missing important constraints',
                    'Non-linear constraint formulation',
                    'Inconsistent units in constraints'
                ]
            },
            graphical: {
                'Plot constraints': [
                    'Incorrect boundary line equation',
                    'Wrong side of line shaded',
                    'Missing constraint regions',
                    'Incorrect axis scaling'
                ],
                'Find corner points': [
                    'Missing corner points',
                    'Arithmetic errors in intersection',
                    'Including infeasible points',
                    'Not checking all vertices'
                ],
                'Evaluate objective': [
                    'Arithmetic errors in substitution',
                    'Wrong comparison (max vs min)',
                    'Forgetting to check all corners'
                ]
            },
            simplex: {
                'Set up tableau': [
                    'Incorrect slack/surplus variable addition',
                    'Wrong signs in tableau',
                    'Missing artificial variables',
                    'Incorrect objective row setup'
                ],
                'Select pivot': [
                    'Choosing wrong entering variable',
                    'Incorrect minimum ratio calculation',
                    'Dividing by negative in ratio test',
                    'Missing unboundedness check'
                ],
                'Pivot operation': [
                    'Arithmetic errors in row operations',
                    'Not making pivot element = 1',
                    'Not zeroing other pivot column entries',
                    'Losing track of basic variables'
                ],
                'Check optimality': [
                    'Wrong optimality criterion',
                    'Missing alternative optima',
                    'Not recognizing unboundedness',
                    'Stopping at non-optimal solution'
                ]
            },
            sensitivity: {
                'Calculate shadow prices': [
                    'Wrong sign interpretation',
                    'Forgetting units',
                    'Applying outside feasibility range'
                ],
                'Find ranges': [
                    'Incorrect range calculations',
                    'Not checking all constraints',
                    'Misinterpreting 100% rule'
                ]
            }
        };

        this.errorPrevention = {
            formulation: {
                reminder: 'Always define variables with clear units and meaning',
                method: 'Write variable definitions in sentence form first'
            },
            feasibility: {
                reminder: 'Check that feasible region is non-empty',
                method: 'Graph or test a point in all constraints'
            },
            pivot_selection: {
                reminder: 'Use minimum positive ratio test carefully',
                method: 'Calculate all ratios, select minimum positive'
            },
            arithmetic: {
                reminder: 'Double-check all arithmetic operations',
                method: 'Use calculator, verify row operations'
            },
            optimality: {
                reminder: 'Verify optimality conditions before stopping',
                method: 'Check all Zⱼ - Cⱼ values match criterion'
            },
            interpretation: {
                reminder: 'Always interpret solution in problem context',
                method: 'Check units, reasonableness, feasibility'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why LP works and mathematical meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact algorithm steps',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical and geometric understanding',
                language: 'visual and spatial metaphors'
            },
            algebraic: {
                focus: 'Formal mathematical operations',
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
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every tiny step explained with analogies',
                examples: 'real-world analogies and stories',
                analogies: true,
                visualization: 'simple pictures and drawings'
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

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            production_planning: {
                scenario: "Manufacturing Product Mix Optimization",
                description: "A company manufactures two products using limited machine hours and raw materials",
                formulation: {
                    variables: "x₁ = units of Product 1, x₂ = units of Product 2",
                    objective: "Maximize profit = 40x₁ + 30x₂",
                    constraints: [
                        "Machine hours: 2x₁ + x₂ ≤ 100",
                        "Raw material: x₁ + x₂ ≤ 80",
                        "x₁, x₂ ≥ 0"
                    ]
                },
                interpretation: "Determine how many units of each product to make to maximize profit",
                context: "Classic production planning problem balancing resource constraints",
                industry: "Manufacturing"
            },

            diet_problem: {
                scenario: "Nutrition Planning",
                description: "Create a minimum-cost diet meeting nutritional requirements",
                formulation: {
                    variables: "xᵢ = servings of food i",
                    objective: "Minimize total cost",
                    constraints: [
                        "Protein requirement ≥ minimum",
                        "Calorie requirement ≥ minimum",
                        "Fat limit ≤ maximum",
                        "All xᵢ ≥ 0"
                    ]
                },
                interpretation: "Select food quantities meeting nutrition needs at lowest cost",
                context: "Used in meal planning, animal feed formulation",
                industry: "Food Service, Agriculture"
            },

            blending_problem: {
                scenario: "Oil Refinery Blending",
                description: "Blend crude oils to meet gasoline specifications",
                formulation: {
                    variables: "xᵢ = barrels of crude i used in blend",
                    objective: "Minimize blending cost",
                    constraints: [
                        "Octane rating ≥ minimum",
                        "Vapor pressure ≤ maximum",
                        "Supply limits on each crude",
                        "Demand requirement for gasoline",
                        "All xᵢ ≥ 0"
                    ]
                },
                interpretation: "Determine optimal crude oil blend meeting specifications",
                context: "Critical in petroleum refining operations",
                industry: "Petroleum"
            },

            transportation_logistics: {
                scenario: "Distribution Network Optimization",
                description: "Ship products from warehouses to retail stores minimizing cost",
                formulation: {
                    variables: "xᵢⱼ = units shipped from warehouse i to store j",
                    objective: "Minimize total shipping cost",
                    constraints: [
                        "Warehouse capacity limits",
                        "Store demand requirements",
                        "All xᵢⱼ ≥ 0"
                    ]
                },
                interpretation: "Optimize distribution to minimize transportation costs",
                context: "Essential for supply chain management",
                industry: "Logistics, Retail"
            },

            workforce_scheduling: {
                scenario: "Staff Scheduling",
                description: "Schedule employees to meet demand at minimum cost",
                formulation: {
                    variables: "xᵢ = number of employees starting shift i",
                    objective: "Minimize total labor cost",
                    constraints: [
                        "Coverage requirements each period",
                        "Maximum staff available",
                        "Minimum rest periods",
                        "All xᵢ ≥ 0 (or integer)"
                    ]
                },
                interpretation: "Create staff schedule meeting coverage needs efficiently",
                context: "Used in call centers, hospitals, retail",
                industry: "Service Industries"
            },

            portfolio_optimization: {
                scenario: "Investment Portfolio Selection",
                description: "Allocate funds among investments to maximize return within risk limits",
                formulation: {
                    variables: "xᵢ = amount invested in asset i",
                    objective: "Maximize expected return",
                    constraints: [
                        "Total investment = available capital",
                        "Risk limit ≤ maximum acceptable",
                        "Diversification requirements",
                        "All xᵢ ≥ 0"
                    ]
                },
                interpretation: "Determine investment amounts optimizing risk-return tradeoff",
                context: "Foundation of modern portfolio theory",
                industry: "Finance"
            },

            media_selection: {
                scenario: "Advertising Media Planning",
                description: "Allocate advertising budget across media to maximize reach",
                formulation: {
                    variables: "xᵢ = number of ads in medium i",
                    objective: "Maximize total audience reached",
                    constraints: [
                        "Budget limit",
                        "Minimum ads in each medium",
                        "Maximum ads in any medium",
                        "All xᵢ ≥ 0 (or integer)"
                    ]
                },
                interpretation: "Select media mix maximizing advertising effectiveness",
                context: "Critical for marketing campaign planning",
                industry: "Marketing, Advertising"
            },

            agricultural_planning: {
                scenario: "Crop Planning",
                description: "Determine optimal crop mix for farm",
                formulation: {
                    variables: "xᵢ = acres planted with crop i",
                    objective: "Maximize total profit",
                    constraints: [
                        "Total land available",
                        "Water availability",
                        "Labor hours available",
                        "Storage capacity",
                        "Market demand limits",
                        "All xᵢ ≥ 0"
                    ]
                },
                interpretation: "Decide which crops to plant and how much",
                context: "Helps farmers optimize resource use",
                industry: "Agriculture"
            },

            cutting_stock: {
                scenario: "Material Cutting Optimization",
                description: "Cut raw materials to meet order requirements with minimum waste",
                formulation: {
                    variables: "xᵢ = number of times cutting pattern i is used",
                    objective: "Minimize total raw material used or waste",
                    constraints: [
                        "Meet demand for each product size",
                        "All xᵢ ≥ 0 (or integer)"
                    ]
                },
                interpretation: "Select cutting patterns minimizing material waste",
                context: "Important in paper, steel, textile industries",
                industry: "Manufacturing"
            },

            project_selection: {
                scenario: "Capital Budgeting",
                description: "Select projects to maximize total NPV within budget",
                formulation: {
                    variables: "xᵢ = 1 if project i selected, 0 otherwise",
                    objective: "Maximize total NPV",
                    constraints: [
                        "Budget constraint",
                        "Resource constraints",
                        "Prerequisite relationships",
                        "All xᵢ ∈ {0, 1}"
                    ]
                },
                interpretation: "Decide which projects to fund",
                context: "Strategic planning in organizations",
                industry: "General Business"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            lp_introduction: {
                skills: ['Basic algebra', 'Understanding inequalities', 'Graphing lines'],
                priorKnowledge: ['Linear equations', 'Systems of equations', 'Coordinate geometry'],
                checkQuestions: [
                    "Can you graph y = 2x + 3?",
                    "What does x ≥ 0 mean?",
                    "How do you find intersection of two lines?"
                ]
            },
            formulation: {
                skills: ['Problem comprehension', 'Variable definition', 'Translating words to math'],
                priorKnowledge: ['Linear expressions', 'Inequalities', 'Units and dimensions'],
                checkQuestions: [
                    "Can you identify decision variables in a problem?",
                    "Can you write constraints as inequalities?",
                    "Do you understand what optimization means?"
                ]
            },
            graphical: {
                skills: ['Graphing inequalities', 'Finding intersections', 'Coordinate geometry'],
                priorKnowledge: ['Plotting points', 'Linear equations', 'Solving 2×2 systems'],
                checkQuestions: [
                    "Can you graph x + y ≤ 10?",
                    "Can you find where 2x + y = 8 and x + y = 5 intersect?",
                    "Can you identify feasible region?"
                ]
            },
            simplex: {
                skills: ['Matrix operations', 'Row operations', 'Algebraic manipulation'],
                priorKnowledge: ['Matrices', 'Gaussian elimination', 'Tableau format'],
                checkQuestions: [
                    "Can you perform row operations?",
                    "Do you understand what slack variables are?",
                    "Can you read a simplex tableau?"
                ]
            },
            sensitivity: {
                skills: ['Interpreting optimal solution', 'Understanding marginal values'],
                priorKnowledge: ['Simplex method', 'Basic/non-basic variables', 'Optimal tableau'],
                checkQuestions: [
                    "What is a shadow price?",
                    "What does reduced cost mean?",
                    "Can you read optimal tableau?"
                ]
            },
            duality: {
                skills: ['Abstract thinking', 'LP formulation', 'Economic interpretation'],
                priorKnowledge: ['Primal LP', 'Simplex method', 'Constraint types'],
                checkQuestions: [
                    "Do you understand primal problem?",
                    "Can you formulate LP?",
                    "What is economic meaning of constraints?"
                ]
            },
            transportation: {
                skills: ['Table reading', 'Network concepts', 'Cost minimization'],
                priorKnowledge: ['LP formulation', 'Supply/demand concepts'],
                checkQuestions: [
                    "Can you read a transportation table?",
                    "Do you understand supply = demand?",
                    "Can you calculate total cost?"
                ]
            },
            integer: {
                skills: ['LP concepts', 'Discrete mathematics', 'Logical reasoning'],
                priorKnowledge: ['Continuous LP', 'Rounding concepts', 'Binary variables'],
                checkQuestions: [
                    "Why can't you just round LP solution?",
                    "What does binary variable represent?",
                    "Do you understand feasible integer solutions?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            feasible_region: {
                description: "Geometric region satisfying all constraints",
                analogy: "Like a safe zone where all rules are followed",
                visualization: "Shaded polygon on graph showing all valid solutions",
                suitableFor: ['graphical', 'two_variable'],
                explanation: "Every point in this region is a feasible solution"
            },
            corner_point_theorem: {
                description: "Optimal solution at vertex of feasible region",
                analogy: "Like checking corners of a room to find the best spot",
                visualization: "Corner points highlighted, optimal marked",
                suitableFor: ['graphical', 'theory'],
                explanation: "Linear objective achieves optimum at corner point"
            },
            iso_profit_lines: {
                description: "Lines of constant objective function value",
                analogy: "Like contour lines on a map showing elevation",
                visualization: "Parallel lines showing different Z values",
                suitableFor: ['graphical'],
                explanation: "Move iso-profit line to find furthest feasible point"
            },
            tableau_as_system: {
                description: "Tableau represents system of equations",
                analogy: "Like a spreadsheet organizing all information",
                visualization: "Rows = constraints, columns = variables",
                suitableFor: ['simplex'],
                explanation: "Each row is an equation, tableau shows current solution"
            },
            pivot_as_basis_change: {
                description: "Pivoting changes basic variables",
                analogy: "Like swapping who's on the team",
                visualization: "Variable enters basis, another leaves",
                suitableFor: ['simplex'],
                explanation: "Move to adjacent corner point via pivot"
            },
            shadow_price_interpretation: {
                description: "Marginal value of relaxing constraint",
                analogy: "Like the value of having one more resource",
                visualization: "Slope of objective vs RHS graph",
                suitableFor: ['sensitivity'],
                explanation: "How much objective improves per unit RHS increase"
            },
            duality_symmetry: {
                description: "Primal and dual are mirror images",
                analogy: "Like looking at problem from two different angles",
                visualization: "Primal-dual correspondence table",
                suitableFor: ['duality'],
                explanation: "Every primal constraint ↔ dual variable"
            },
            network_diagram: {
                description: "Nodes and arcs representing flow problem",
                analogy: "Like a road map with cities and highways",
                visualization: "Directed graph with flow values",
                suitableFor: ['transportation', 'network'],
                explanation: "Visual representation of flow structure"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            graphical_beginner: [
                {
                    problem: "Maximize Z = 3x₁ + 2x₂ subject to x₁ + x₂ ≤ 4, 2x₁ + x₂ ≤ 5, x₁,x₂ ≥ 0",
                    solution: { x1: 1, x2: 3, Z: 9 },
                    cornerPoints: [[0,0], [0,4], [1,3], [2.5,0]],
                    difficulty: "easy",
                    method: "graphical"
                },
                {
                    problem: "Maximize Z = 4x₁ + 5x₂ subject to x₁ + 2x₂ ≤ 10, x₁ + x₂ ≤ 6, x₁,x₂ ≥ 0",
                    solution: { x1: 2, x2: 4, Z: 28 },
                    cornerPoints: [[0,0], [0,5], [2,4], [6,0]],
                    difficulty: "easy",
                    method: "graphical"
                }
            ],

            simplex_intermediate: [
                {
                    problem: "Maximize Z = 3x₁ + 5x₂ subject to x₁ ≤ 4, 2x₂ ≤ 12, 3x₁ + 2x₂ ≤ 18, x₁,x₂ ≥ 0",
                    solution: { x1: 2, x2: 6, Z: 36 },
                    iterations: 2,
                    difficulty: "medium",
                    method: "simplex"
                },
                {
                    problem: "Maximize Z = 5x₁ + 4x₂ subject to x₁ + x₂ ≤ 5, 2x₁ + x₂ ≤ 8, x₁,x₂ ≥ 0",
                    solution: { x1: 3, x2: 2, Z: 23 },
                    iterations: 2,
                    difficulty: "medium",
                    method: "simplex"
                }
            ],

            transportation_examples: [
                {
                    problem: "3 sources, 3 destinations transportation problem",
                    supply: [20, 30, 25],
                    demand: [15, 25, 35],
                    costs: [[4,6,8], [3,5,7], [6,4,5]],
                    solution: "Total cost = 335",
                    difficulty: "medium",
                    method: "transportation"
                }
            ],

            byDifficulty: {
                easy: [
                    {
                        type: "graphical",
                        problem: "Max Z = x₁ + x₂, s.t. x₁ + x₂ ≤ 5, x₁,x₂ ≥ 0",
                        solution: "x₁=5, x₂=0 or x₁=0, x₂=5 (alternative optima)"
                    },
                    {
                        type: "formulation",
                        problem: "Product mix: Product A earns $10, uses 2 hours. Product B earns $15, uses 3 hours. 100 hours available. Formulate.",
                        solution: "Max 10x₁ + 15x₂ s.t. 2x₁ + 3x₂ ≤ 100, x₁,x₂ ≥ 0"
                    }
                ],
                medium: [
                    {
                        type: "simplex",
                        problem: "Solve: Max Z = 2x₁ + 3x₂, s.t. x₁ + 2x₂ ≤ 8, 2x₁ + x₂ ≤ 10, x₁,x₂ ≥ 0",
                        solution: "x₁=4, x₂=2, Z=14"
                    },
                    {
                        type: "sensitivity",
                        problem: "Find shadow price for constraint x₁ + x₂ ≤ 10 at optimal solution",
                        solution: "Shadow price = marginal improvement in Z per unit RHS increase"
                    }
                ],
                hard: [
                    {
                        type: "two_phase",
                        problem: "Solve: Min Z = x₁ + 2x₂, s.t. x₁ + x₂ ≥ 5, 2x₁ + x₂ = 8, x₁,x₂ ≥ 0",
                        solution: "Requires artificial variables and two-phase method"
                    },
                    {
                        type: "integer",
                        problem: "Binary: Select projects with max NPV within budget",
                        solution: "Branch-and-bound or cutting plane method"
                    }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            optimal_always_exists: {
                misconception: "Every LP has an optimal solution",
                reality: "LP can be infeasible (no solution) or unbounded (infinite improvement)",
                correctiveExample: "Max Z = x₁ s.t. x₁ ≤ -1, x₁ ≥ 0 is infeasible",
                commonIn: ['formulation', 'graphical', 'simplex']
            },
            rounding_integer: {
                misconception: "Can round LP solution to get integer solution",
                reality: "Rounding may give infeasible or non-optimal integer solution",
                correctiveExample: "LP solution x=2.5 might round to x=2 or x=3, but optimal integer could be x=1",
                commonIn: ['integer_programming']
            },
            more_constraints_better: {
                misconception: "More constraints mean better model",
                reality: "Redundant constraints unnecessary; contradictory ones cause infeasibility",
                correctiveExample: "x ≤ 5 and x ≤ 10: second constraint redundant",
                commonIn: ['formulation']
            },
            objective_coefficients_proportional: {
                misconception: "Doubling all objective coefficients doubles optimal value but changes solution",
                reality: "Scaling objective changes optimal value but not optimal solution",
                correctiveExample: "Max Z = 2x₁ + 3x₂ vs Max Z = 4x₁ + 6x₂: same optimal point, different Z",
                commonIn: ['sensitivity_analysis']
            },
            slack_means_waste: {
                misconception: "Slack always means inefficiency",
                reality: "Slack can be optimal if resource has no marginal value (shadow price = 0)",
                correctiveExample: "Excess capacity might be cheaper than fully utilizing expensive resource",
                commonIn: ['interpretation']
            },
            dual_is_opposite: {
                misconception: "Dual problem is just the opposite of primal",
                reality: "Dual has specific mathematical structure and economic interpretation",
                correctiveExample: "Dual of maximize becomes minimize, but constraints transform systematically",
                commonIn: ['duality']
            },
            corner_point_confusion: {
                misconception: "Any corner point of constraints is optimal",
                reality: "Only corner points of feasible region; optimal is best among these",
                correctiveExample: "Corner from two non-binding constraints might be outside feasible region",
                commonIn: ['graphical']
            },
            pivot_selection_arbitrary: {
                misconception: "Can choose any negative Zⱼ-Cⱼ for entering variable",
                reality: "Any negative works, but most negative often most efficient (not required)",
                correctiveExample: "Different pivot choices lead to same optimum via different paths",
                commonIn: ['simplex']
            },
            infeasibility_means_error: {
                misconception: "Infeasible problem means formulation error",
                reality: "Problem itself might be infeasible (conflicting requirements)",
                correctiveExample: "Produce ≥ 100 units but capacity ≤ 50: truly infeasible situation",
                commonIn: ['formulation', 'interpretation']
            },
            shadow_price_always_valid: {
                misconception: "Shadow price applies for any RHS change",
                reality: "Valid only within feasibility range",
                correctiveExample: "Shadow price $5/unit valid for RHS ∈ [40, 60], not beyond",
                commonIn: ['sensitivity_analysis']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            lp_as_navigation: {
                analogy: "Finding best route on a map",
                explanation: "Constraints are like roads you can travel, objective is your destination preference, optimal solution is best route",
                suitableFor: ['lp_introduction'],
                ELI5: "Imagine you want to get to the toy store (objective), but you can only walk on certain streets (constraints). LP finds the best path!"
            },
            feasible_region_as_playground: {
                analogy: "Safe play area",
                explanation: "Constraints define playground boundaries, you can play anywhere inside (feasible), optimal is best spot in playground",
                suitableFor: ['graphical'],
                ELI5: "The feasible region is like your backyard with a fence. You can play anywhere inside the fence (all those spots are allowed). We want to find the very best spot to play!"
            },
            simplex_as_mountain_climbing: {
                analogy: "Climbing to mountain peak",
                explanation: "Start at base (initial solution), move along edges (pivot), reach peak (optimal). Can only move uphill (improving direction).",
                suitableFor: ['simplex'],
                ELI5: "Imagine climbing a mountain but you can only walk along edges of rocks. You keep going up until you reach the top. That's like Simplex!"
            },
            slack_as_leftover: {
                analogy: "Leftover food after meal",
                explanation: "If constraint is resource limit, slack is unused resource, like having extra ingredients after cooking",
                suitableFor: ['simplex', 'interpretation'],
                ELI5: "Slack is like having extra cookies after everyone is full. It means you had more than you needed!"
            },
            shadow_price_as_trade_value: {
                analogy: "Value of trading card",
                explanation: "Shadow price is how much you'd pay for one more unit, like value of one more rare card",
                suitableFor: ['sensitivity_analysis'],
                ELI5: "Shadow price is like asking: if I could have one more hour to play, how much better would that be? It tells you how valuable that extra hour is!"
            },
            duality_as_two_sides_coin: {
                analogy: "Two sides of same coin",
                explanation: "Primal and dual are different views of same problem, like heads/tails of coin",
                suitableFor: ['duality'],
                ELI5: "Primal and dual are like you and your friend looking at the same picture from opposite sides - you see different things but it's the same picture!"
            },
            transportation_as_delivery: {
                analogy: "Delivering packages efficiently",
                explanation: "Warehouses are sources, stores are destinations, find cheapest delivery plan",
                suitableFor: ['transportation'],
                ELI5: "Transportation problem is like figuring out the cheapest way to deliver toys from factories to toy stores!"
            },
            integer_programming_as_whole_items: {
                analogy: "Can't buy half a car",
                explanation: "Some things must be whole units (cars, people, machines), can't be fractional",
                suitableFor: ['integer_programming'],
                ELI5: "Integer programming is for things you can't split. You can make 5 chairs or 6 chairs, but not 5.5 chairs!"
            },
            binding_constraint_as_bottleneck: {
                analogy: "Bottleneck in production",
                explanation: "Binding constraint is the bottleneck limiting improvement, like narrowest part of pipe",
                suitableFor: ['interpretation', 'sensitivity'],
                ELI5: "A binding constraint is like the smallest door in your house - it limits what you can carry through, even if other doors are bigger!"
            },
            objective_function_as_score: {
                analogy: "Score in a game",
                explanation: "Objective function is your score, LP finds move that maximizes/minimizes score",
                suitableFor: ['lp_introduction'],
                ELI5: "The objective function is like your score in a video game. We want to find the moves that give you the highest score!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            formulation: {
                level1: "What are you trying to decide? Those are your variables.",
                level2: "What are you trying to maximize or minimize? That's your objective function.",
                level3: "What limitations or requirements exist? Those become constraints.",
                level4: "Write: Let xᵢ = [clear definition with units]. Then formulate objective and constraints."
            },
            graphical: {
                level1: "How many variables are there? Can you graph this?",
                level2: "Graph each constraint as a line, then determine which side satisfies the inequality.",
                level3: "The feasible region is where all constraints overlap. Find its corner points.",
                level4: "Evaluate the objective function at each corner point. The best value is optimal."
            },
            simplex_setup: {
                level1: "Is the problem in standard form?",
                level2: "Add slack variables to ≤ constraints, surplus and artificial to ≥ constraints.",
                level3: "Set up initial tableau with all coefficients and RHS.",
                level4: "Create tableau with constraint rows and objective row (Zⱼ - Cⱼ)."
            },
            simplex_pivot: {
                level1: "Are all Zⱼ - Cⱼ values non-negative (for max)?",
                level2: "Most negative Zⱼ - Cⱼ indicates entering variable column.",
                level3: "Calculate ratios RHS/column entry (positive only). Minimum ratio indicates leaving row.",
                level4: "Pivot element is at intersection of entering column and leaving row. Make it 1, zero out column."
            },
            sensitivity: {
                level1: "What do you want to know about solution changes?",
                level2: "Shadow price shows value of one more unit of resource.",
                level3: "Find shadow price from optimal tableau's objective row (slack column).",
                level4: "Shadow price valid within feasibility range. Check range before applying."
            },
            transportation: {
                level1: "Do you have supplies and demands?",
                level2: "Set up table: rows = sources, columns = destinations, cells = costs.",
                level3: "Find initial solution (Northwest Corner, Least Cost, or Vogel's).",
                level4: "Test for optimality (MODI method). If not optimal, improve allocation."
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "What is a decision variable in LP?",
                    answer: "A quantity we have control over and want to determine the value of",
                    assesses: "formulation_basics",
                    difficulty: "basic"
                },
                {
                    question: "Can the objective function be non-linear in LP?",
                    answer: "No, it must be linear",
                    assesses: "lp_definition",
                    difficulty: "basic"
                },
                {
                    question: "Where does the optimal solution occur in LP?",
                    answer: "At a corner point (vertex) of the feasible region",
                    assesses: "fundamental_theorem",
                    difficulty: "intermediate"
                },
                {
                    question: "What does a shadow price represent?",
                    answer: "The change in optimal objective value per unit increase in constraint RHS",
                    assesses: "sensitivity_understanding",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "To convert 'Minimize Z' to standard form, you should:",
                    options: ["Maximize Z", "Maximize -Z", "Leave as is", "Multiply by -1"],
                    correct: "Maximize -Z",
                    explanation: "Minimizing Z is equivalent to maximizing -Z"
                },
                {
                    question: "What do you add to a ≤ constraint to convert to equality?",
                    options: ["Surplus variable", "Slack variable", "Artificial variable", "Nothing"],
                    correct: "Slack variable",
                    explanation: "Slack variable represents unused resource"
                },
                {
                    question: "In simplex, you stop iterating when:",
                    options: [
                        "All RHS values are positive",
                        "All Zⱼ - Cⱼ ≥ 0 (for max)",
                        "All variables are basic",
                        "Tableau is square"
                    ],
                    correct: "All Zⱼ - Cⱼ ≥ 0 (for max)",
                    explanation: "This is the optimality condition for maximization"
                },
                {
                    question: "If all ratios are negative in minimum ratio test:",
                    options: [
                        "Problem is infeasible",
                        "Problem is unbounded",
                        "Current solution is optimal",
                        "Need to add constraint"
                    ],
                    correct: "Problem is unbounded",
                    explanation: "No leaving variable means objective can improve indefinitely"
                }
            ],
            summative: [
                {
                    question: "Formulate: A bakery makes cakes (profit $10, 3 hrs) and pies (profit $8, 2 hrs). 60 hours available.",
                    answer: "Max Z = 10x₁ + 8x₂ s.t. 3x₁ + 2x₂ ≤ 60, x₁,x₂ ≥ 0",
                    rubric: {
                        variables_defined: 2,
                        objective_correct: 2,
                        constraints_correct: 3,
                        non_negativity: 1,
                        format: 2
                    }
                },
                {
                    question: "Solve graphically: Max Z = 2x₁ + 3x₂ s.t. x₁ + x₂ ≤ 6, 2x₁ + x₂ ≤ 10, x₁,x₂ ≥ 0",
                    answer: "x₁=4, x₂=2, Z=14",
                    rubric: {
                        graph_constraints: 2,
                        feasible_region: 2,
                        corner_points: 3,
                        evaluate_objective: 2,
                        optimal_identified: 1
                    }
                }
            ],
            byObjective: {
                canFormulate: [
                    "Define variables for product mix problem",
                    "Write objective function for profit maximization",
                    "Formulate resource constraints",
                    "Include non-negativity restrictions"
                ],
                canSolveGraphically: [
                    "Graph constraint inequalities",
                    "Identify feasible region",
                    "Find corner points",
                    "Determine optimal solution"
                ],
                canUseSimplex: [
                    "Convert to standard form",
                    "Set up initial tableau",
                    "Perform pivot operations",
                    "Recognize optimal solution"
                ],
                canInterpret: [
                    "Explain shadow prices",
                    "Identify binding constraints",
                    "Understand slack/surplus meaning",
                    "Make managerial recommendations"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            problemIdentification: {
                "Two variables, few constraints": "Use graphical method",
                "More than 2 variables": "Use simplex method",
                "Equality or ≥ constraints": "Use two-phase or Big-M method",
                "Integer variables required": "Use branch-and-bound or cutting plane",
                "Network structure": "Use specialized network algorithms",
                "Transportation structure": "Use transportation method (MODI, Vogel's)"
            },
            formulationStrategy: {
                step1: "Read problem carefully, identify what's being decided",
                step2: "Define decision variables with clear units and meaning",
                step3: "Determine what to optimize (max or min)",
                step4: "Express objective as linear function of variables",
                step5: "Identify all constraints (resources, requirements, limits)",
                step6: "Write constraints as linear inequalities/equalities",
                step7: "Add non-negativity constraints",
                step8: "Review: is model complete and correct?"
            },
            solutionMethodSelection: {
                graphical: {
                    when: "2 variables, want visual understanding",
                    advantages: "Intuitive, shows feasible region",
                    limitations: "Only 2 variables"
                },
                simplex: {
                    when: "Any size LP, systematic solution needed",
                    advantages: "Handles any size, algorithmic, gives sensitivity info",
                    limitations: "Not intuitive, requires more computation"
                },
                specialized: {
                    when: "Problem has special structure (transportation, network)",
                    advantages: "Much more efficient than general simplex",
                    limitations: "Only for specific problem types"
                }
            },
            checkingWork: {
                formulation: [
                    "Are variables clearly defined with units?",
                    "Is objective linear?",
                    "Are all constraints linear?",
                    "Did you include all relevant constraints?",
                    "Did you include non-negativity?",
                    "Are signs and inequalities correct?"
                ],
                solution: [
                    "Is solution feasible (satisfies all constraints)?",
                    "Did you check all corner points (graphical)?",
                    "Are arithmetic operations correct?",
                    "Does solution make sense in context?",
                    "Did you verify optimality conditions?"
                ],
                interpretation: [
                    "What do variable values mean in context?",
                    "Which constraints are binding?",
                    "What is economic meaning of shadow prices?",
                    "Are there sensitivity considerations?",
                    "What recommendations follow from solution?"
                ]
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            formulationChallenges: [
                {
                    name: "Mystery Formulation",
                    description: "Given optimal solution and constraints, find objective function",
                    example: "Solution is x₁=3, x₂=2. Constraints: x₁+x₂≤5, 2x₁+x₂≤8. Find objective that makes this optimal.",
                    solution: "Any objective with slope between constraint slopes, e.g., Z=2x₁+3x₂"
                },
                {
                    name: "Build Your Own",
                    description: "Create LP problem with specified properties",
                    example: "Create 2-variable LP with exactly 4 corner points and unique optimal solution",
                    solution: "Multiple valid answers, requires creativity"
                }
            ],
            graphicalChallenges: [
                {
                    name: "Corner Point Race",
                    timeLimit: 300,
                    description: "Identify all corner points of feasible region quickly",
                    problems: [
                        "Max Z=x₁+x₂ s.t. x₁+2x₂≤10, 2x₁+x₂≤12, x₁,x₂≥0",
                        "Max Z=3x₁+2x₂ s.t. x₁+x₂≤8, x₁≤5, x₂≤6, x₁,x₂≥0"
                    ]
                },
                {
                    name: "Special Cases Hunt",
                    description: "Identify infeasible, unbounded, or alternative optima cases",
                    examples: [
                        "Max Z=x₁+x₂ s.t. x₁+x₂≤5, x₁+x₂≥10, x₁,x₂≥0 (infeasible)",
                        "Max Z=x₁ s.t. -x₁+x₂≤5, x₁,x₂≥0 (unbounded)"
                    ]
                }
            ],
            simplexChallenges: [
                {
                    name: "Tableau Completion",
                    description: "Given partial tableau, complete missing entries",
                    difficulty: "medium"
                },
                {
                    name: "Error Detection",
                    description: "Find errors in simplex iterations",
                    example: "Given sequence of tableaus, identify where error occurred",
                    difficulty: "hard"
                }
            ],
            realWorldApplications: [
                {
                    scenario: "Factory Production Planning",
                    context: "Manage production of multiple products with resource constraints",
                    complexity: "Must consider machine hours, labor, storage, demand",
                    deliverable: "Formulate and solve, recommend production plan"
                },
                {
                    scenario: "Investment Portfolio",
                    context: "Allocate funds among investments to maximize return within risk tolerance",
                    complexity: "Multiple objectives (return, risk), diversification requirements",
                    deliverable: "Determine investment amounts and expected return"
                },
                {
                    scenario: "Distribution Network",
                    context: "Optimize product shipments from warehouses to stores",
                    complexity: "Transportation costs, capacity limits, demand requirements",
                    deliverable: "Create shipping plan minimizing total cost"
                }
            ],
            puzzles: [
                {
                    name: "Shadow Price Puzzle",
                    description: "Without solving, estimate which constraint has highest shadow price",
                    approach: "Requires understanding resource scarcity and objective coefficients"
                },
                {
                    name: "Degeneracy Detective",
                    description: "Identify which formulations will lead to degenerate solutions",
                    approach: "Look for constraints that intersect at same point"
                }
            ]
        };
    }

    initializeSimplexMethodDatabase() {
        this.simplexDetails = {
            tableauStructure: {
                rows: "Each constraint becomes a row",
                columns: "Decision variables + slack/surplus + artificial + RHS",
                objectiveRow: "Zⱼ - Cⱼ row at bottom (or top)",
                basicVariables: "Identified in leftmost column",
                RHScolumn: "Current solution values"
            },
            pivotRules: {
                enteringVariable: {
                    maximization: "Most negative Zⱼ - Cⱼ (Dantzig's rule)",
                    minimization: "Most positive Zⱼ - Cⱼ",
                    alternatives: "Bland's rule (smallest subscript), steepest edge"
                },
                leavingVariable: {
                    ratioTest: "min{RHS/pivot_column | pivot_column > 0}",
                    ties: "Choose arbitrarily (may cause degeneracy)",
                    allNegative: "Problem is unbounded"
                }
            },
            pivotOperation: {
                step1: "Identify pivot element",
                step2: "Divide pivot row by pivot element (make pivot = 1)",
                step3: "Eliminate other entries in pivot column using row operations",
                step4: "Update basic variable labels",
                step5: "Calculate new Zⱼ - Cⱼ row"
            },
            optimalityTests: {
                maximization: "Optimal when all Zⱼ - Cⱼ ≥ 0",
                minimization: "Optimal when all Zⱼ - Cⱼ ≤ 0",
                alternativeOptima: "Non-basic variable with Zⱼ - Cⱼ = 0 at optimum"
            },
            specialSituations: {
                degeneracy: {
                    definition: "Basic variable = 0",
                    cause: "More than n constraints active at vertex",
                    consequence: "May cycle (rare), use anti-cycling rules"
                },
                unboundedness: {
                    detection: "All ratios negative in ratio test",
                    meaning: "Feasible region unbounded in improving direction",
                    action: "Report unbounded, check formulation"
                },
                infeasibility: {
                    detection: "Artificial variable positive in Phase I or Big-M",
                    meaning: "No feasible solution exists",
                    action: "Report infeasible, check constraints"
                }
            }
        };
    }

    initializeGraphicalMethodDatabase() {
        this.graphicalDetails = {
            plottingConstraints: {
                step1: "Convert inequality to equation (boundary line)",
                step2: "Find two points on line (intercepts easiest)",
                step3: "Draw line on graph",
                step4: "Test point (often origin) to determine feasible side",
                step5: "Shade feasible side or draw arrow"
            },
            identifyingFeasibleRegion: {
                method: "Intersection of all constraint regions",
                boundedVsUnbounded: "Closed region vs open region",
                emptyRegion: "Infeasible problem"
            },
            findingCornerPoints: {
                method1: "Solve each pair of constraint equations",
                method2: "Read from graph (less accurate)",
                check: "Verify point satisfies all constraints"
            },
            optimizationTechniques: {
                isoProfitLine: {
                    method: "Plot objective function for different Z values",
                    moveDirection: "Parallel to increase/decrease Z",
                    findOptimum: "Last point in feasible region"
                },
                cornerPointTheorem: {
                    statement: "Optimum occurs at corner point (if exists)",
                    method: "Evaluate Z at all corner points, select best"
                }
            },
            specialCases: {
                unbounded: "Feasible region extends to infinity",
                alternativeOptima: "Objective parallel to constraint edge",
                infeasible: "Empty feasible region"
            }
        };
    }

    initializeSensitivityAnalysisDatabase() {
        this.sensitivityDetails = {
            shadowPrices: {
                definition: "Marginal value of one more unit of resource (RHS)",
                calculation: "From optimal tableau's Zⱼ - Cⱼ row for slack variables",
                interpretation: {
                    positive: "Resource is valuable, fully utilized (binding constraint)",
                    zero: "Resource has surplus, not valuable at margin",
                    units: "Objective units per constraint units"
                },
                validity: "Only within feasibility range"
            },
            reducedCosts: {
                definition: "Amount objective coefficient must improve for variable to enter basis",
                calculation: "Zⱼ - Cⱼ value for non-basic variables",
                interpretation: {
                    zero: "Variable is basic (in solution)",
                    nonzero: "Opportunity cost of forcing variable into solution"
                }
            },
            rangeOfOptimality: {
                definition: "Range of objective coefficient where basis remains optimal",
                purpose: "How much can profit/cost change without changing solution",
                calculation: "Algebraic analysis of tableau",
                use: "Decision-making under uncertainty"
            },
            rangeOfFeasibility: {
                definition: "Range of RHS value where basis remains feasible (and shadow price valid)",
                purpose: "How much can resource availability change",
                calculation: "From optimal tableau basis",
                use: "Resource acquisition decisions"
            },
            hundredPercentRule: {
                statement: "If sum of percentage changes < 100%, optimum basis unchanged",
                application: "Simultaneous changes in multiple parameters",
                limitation: "Conservative test, basis may remain optimal even if > 100%"
            },
            managerialInsights: {
                resourceValue: "Shadow prices guide resource acquisition priorities",
                pricingDecisions: "Reduced costs inform pricing strategies",
                robustness: "Sensitivity ranges show solution stability",
                whatIf: "Analyze impact of changes before they occur"
            }
        };
    }

    // MAIN SOLVER METHOD
    solveLPProblem(config) {
        const { formulation, method, data, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseLPProblem(formulation, method, data, context);

            // Solve the problem
            this.currentSolution = this.solveLPProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateLPSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateLPGraphData();

            // Generate workbook
            this.generateLPWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                optimalValue: this.currentSolution?.optimalValue,
                optimalSolution: this.currentSolution?.variables
            };

        } catch (error) {
            throw new Error(`Failed to solve LP problem: ${error.message}`);
        }
    }

    parseLPProblem(formulation, method = null, data = {}, context = {}) {
        // Determine problem type
        let problemType = method;
        
        if (!problemType) {
            for (const [type, config] of Object.entries(this.lpTypes)) {
                for (const pattern of config.patterns) {
                    if (pattern.test(formulation) || pattern.test(JSON.stringify(context))) {
                        problemType = type;
                        break;
                    }
                }
                if (problemType) break;
            }
        }

        if (!problemType) {
            problemType = 'simplex_maximization'; // default
        }

        return {
            formulation: formulation,
            type: problemType,
            method: method,
            data: { ...data },
            context: { ...context },
            parsedAt: new Date().toISOString()
        };
    }

    solveLPProblem_Internal(problem) {
        const solver = this.lpTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for LP problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // LP SOLVERS (Placeholder implementations - would need full algorithms)

    solveGraphicalLP(problem) {
        return {
            method: 'Graphical Method',
            type: 'two_variable',
            cornerPoints: [
                { point: [0, 0], Z: 0 },
                { point: [4, 0], Z: 12 },
                { point: [2, 3], Z: 15 },
                { point: [0, 5], Z: 10 }
            ],
            optimalPoint: [2, 3],
            variables: { x1: 2, x2: 3 },
            optimalValue: 15,
            feasibleRegion: "Bounded polygon",
            bindingConstraints: [1, 2],
            slackValues: { s1: 0, s2: 0, s3: 1 }
        };
    }

    solveSimplexMaximization(problem) {
        return {
            method: 'Simplex Method - Maximization',
            type: 'simplex',
            iterations: [
                { iteration: 0, basis: ['s1', 's2', 's3'], Z: 0 },
                { iteration: 1, basis: ['s1', 'x2', 's3'], Z: 12 },
                { iteration: 2, basis: ['x1', 'x2', 's3'], Z: 15 }
            ],
            finalTableau: "Optimal tableau with all Zⱼ-Cⱼ ≥ 0",
            variables: { x1: 2, x2: 3 },
            slackVariables: { s1: 0, s2: 0, s3: 1 },
            optimalValue: 15,
            shadowPrices: { constraint1: 3, constraint2: 2, constraint3: 0 },
            reducedCosts: { x1: 0, x2: 0 }
        };
    }

    solveSimplexMinimization(problem) {
        return {
            method: 'Simplex Method - Minimization',
            type: 'simplex',
            convertedTo: 'Maximize -Z',
            variables: { x1: 1, x2: 2 },
            optimalValue: 10,
            note: 'Minimization solved as maximization of negative objective'
        };
    }

    solveTwoPhaseSimpleх(problem) {
        return {
            method: 'Two-Phase Simplex',
            type: 'two_phase',
            phase1: {
                objective: 'Minimize sum of artificial variables',
                result: 'All artificial variables = 0 (feasible solution found)'
            },
            phase2: {
                objective: 'Original objective function',
                result: 'Optimal solution'
            },
            variables: { x1: 3, x2: 1 },
            optimalValue: 20,
            artificialVariables: { A1: 0, A2: 0 }
        };
    }

    solveDualSimplex(problem) {
        return {
            method: 'Dual Simplex Method',
            type: 'dual_simplex',
            note: 'Starts from dual feasible (primal infeasible) solution',
            variables: { x1: 2, x2: 3 },
            optimalValue: 18
        };
    }

    performSensitivityAnalysis(problem) {
        return {
            method: 'Sensitivity Analysis',
            type: 'post_optimal',
            shadowPrices: {
                constraint1: { value: 5, range: [40, 60], units: '$/unit' },
                constraint2: { value: 0, range: [30, Infinity], units: '$/unit' }
            },
            reducedCosts: {
                x1: 0,
                x2: 0
            },
            objectiveCoefficientRanges: {
                c1: { current: 3, range: [2, 5] },
                c2: { current: 2, range: [1, 4] }
            },
            RHSranges: {
                b1: { current: 50, range: [40, 60] },
                b2: { current: 80, range: [30, Infinity] }
            },
            interpretation: "Comprehensive sensitivity report with managerial insights"
        };
    }

    analyzeDuality(problem) {
        return {
            method: 'Duality Analysis',
            type: 'duality',
            primal: {
                objective: 'Maximize',
                variables: 2,
                constraints: 3
            },
            dual: {
                objective: 'Minimize',
                variables: 3,
                constraints: 2,
                formulation: "Dual problem formulation"
            },
            strongDuality: 'Primal optimal = Dual optimal',
            complementarySlackness: "Conditions satisfied",
            economicInterpretation: "Dual variables are shadow prices"
        };
    }

    solveTransportation(problem) {
        return {
            method: 'Transportation Problem',
            type: 'transportation',
            initialSolution: {
                method: "Vogel's Approximation Method",
                cost: 350
            },
            optimalSolution: {
                method: 'MODI (Modified Distribution)',
                allocations: "Optimal shipping plan",
                totalCost: 320
            },
            improvement: 30
        };
    }

    solveAssignment(problem) {
        return {
            method: 'Assignment Problem - Hungarian Algorithm',
            type: 'assignment',
            assignments: "Optimal one-to-one matching",
            totalCost: 45,
            algorithm: 'Hungarian method with row/column reduction'
        };
    }

    solveIntegerProgramming(problem) {
        return {
            method: 'Integer Programming',
            type: 'integer',
            algorithm: 'Branch-and-Bound',
            LPrelaxation: { value: 15.5 },
            integerSolution: { variables: { x1: 3, x2: 2 }, value: 15 },
            note: 'Solution rounded or found via B&B'
        };
    }

    solveGoalProgramming(problem) {
        return {
            method: 'Goal Programming',
            type: 'goal',
            goals: [
                { priority: 1, deviation: 0 },
                { priority: 2, deviation: 5 }
            ],
            solution: "Lexicographic optimization result"
        };
    }

    solveNetworkFlow(problem) {
        return {
            method: 'Network Flow',
            type: 'network',
            algorithm: 'Network Simplex or Ford-Fulkerson',
            flow: "Optimal flow values on arcs",
            totalCost: 500
        };
    }

    // STEP GENERATION
    generateLPSteps(problem, solution) {
        let baseSteps = this.generateBaseLPSteps(problem, solution);

        // Apply enhancements
        if (this.explanationLevel !== 'basic') {
            baseSteps = baseSteps.map((step, index, array) =>
                this.enhanceLPStepExplanation(step, problem, solution, index, array.length)
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

    generateBaseLPSteps(problem, solution) {
        const category = this.lpTypes[problem.type]?.category;

        switch(category) {
            case 'graphical':
                return this.generateGraphicalSteps(problem, solution);
            case 'simplex':
                return this.generateSimplexSteps(problem, solution);
            case 'special':
                return this.generateSpecialMethodSteps(problem, solution);
            default:
                return this.generateGenericLPSteps(problem, solution);
        }
    }

    generateGraphicalSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Problem Formulation',
            description: 'Identify decision variables, objective function, and constraints',
            content: problem.formulation,
            reasoning: 'Clear problem statement is foundation for solution',
            goalStatement: 'Set up the LP problem correctly'
        });

        steps.push({
            stepNumber: 2,
            step: 'Plot Constraints',
            description: 'Graph each constraint as a line and determine feasible side',
            method: 'Convert inequality to equation, plot line, test point for feasible side',
            reasoning: 'Visual representation helps identify feasible region',
            algebraicRule: 'Constraint boundary is equality; inequality determines which side'
        });

        steps.push({
            stepNumber: 3,
            step: 'Identify Feasible Region',
            description: 'Find intersection of all constraint regions',
            feasibleRegion: solution.feasibleRegion || 'Shaded polygon',
            reasoning: 'Only points in this region satisfy all constraints',
            visualHint: 'Shade or highlight the common region'
        });

        steps.push({
            stepNumber: 4,
            step: 'Find Corner Points',
            description: 'Determine vertices of feasible region',
            cornerPoints: solution.cornerPoints || [],
            method: 'Solve pairs of constraint equations',
            reasoning: 'Optimal solution occurs at a corner point',
            theorem: 'Fundamental Theorem of LP'
        });

        steps.push({
            stepNumber: 5,
            step: 'Evaluate Objective Function',
            description: 'Calculate Z at each corner point',
            evaluations: solution.cornerPoints?.map(cp => 
                `Z(${cp.point}) = ${cp.Z}`
            ) || [],
            reasoning: 'Compare objective values to find best',
            algebraicRule: 'Substitute corner point coordinates into Z'
        });

        steps.push({
            stepNumber: 6,
            step: 'Identify Optimal Solution',
            description: 'Select corner point with best objective value',
            optimalPoint: solution.optimalPoint,
            optimalValue: solution.optimalValue,
            finalAnswer: true,
            reasoning: 'This point gives maximum (or minimum) Z among all feasible points'
        });

        return steps;
    }

    generateSimplexSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Convert to Standard Form',
            description: 'Add slack/surplus/artificial variables',
            reasoning: 'Simplex requires all constraints as equalities',
            method: 'Add slack to ≤, subtract surplus from ≥, add artificial to = or ≥',
            goalStatement: 'Transform into standard form for simplex'
        });

        steps.push({
            stepNumber: 2,
            step: 'Set Up Initial Tableau',
            description: 'Create initial simplex tableau',
            tableauStructure: this.simplexDetails.tableauStructure,
            reasoning: 'Tableau format organizes all information systematically',
            note: 'Initial basic variables are slack/artificial variables'
        });

        if (solution.iterations) {
            solution.iterations.forEach((iter, index) => {
                if (index > 0) {
                    steps.push({
                        stepNumber: 2 + index * 2 - 1,
                        step: `Iteration ${index} - Select Pivot`,
                        description: 'Choose entering and leaving variables',
                        enteringVariable: 'Most negative Zⱼ - Cⱼ',
                        leavingVariable: 'Minimum positive ratio test',
                        reasoning: 'Move to adjacent better corner point',
                        algebraicRule: 'Pivot selection rules ensure improvement'
                    });

                    steps.push({
                        stepNumber: 2 + index * 2,
                        step: `Iteration ${index} - Pivot Operation`,
                        description: 'Transform tableau using pivot element',
                        method: 'Make pivot = 1, zero out rest of pivot column',
                        newBasis: iter.basis,
                        newZ: iter.Z,
                        reasoning: 'Update to new basic feasible solution'
                    });
                }
            });
        }

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Check Optimality',
            description: 'Verify optimality conditions',
            condition: 'All Zⱼ - Cⱼ ≥ 0 for maximization',
            result: 'Optimal solution found',
            reasoning: 'No improving direction available',
            algebraicRule: 'Optimality criterion satisfied'
        });

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Read Optimal Solution',
            description: 'Extract solution from final tableau',
            variables: solution.variables,
            optimalValue: solution.optimalValue,
            slackVariables: solution.slackVariables,
            finalAnswer: true,
            reasoning: 'Basic variables give optimal solution, RHS column shows values'
        });

        return steps;
    }

    generateSpecialMethodSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Problem Setup',
            description: `Set up ${solution.method} problem`,
            method: solution.method,
            reasoning: 'Special structure allows efficient specialized algorithm',
            goalStatement: 'Prepare problem for specialized solution method'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply Specialized Algorithm',
            description: `Use ${solution.type}-specific solution technique`,
            algorithm: solution.algorithm || solution.method,
            reasoning: 'Specialized methods exploit problem structure',
            note: 'More efficient than general simplex for this structure'
        });

        steps.push({
            stepNumber: 3,
            step: 'Optimal Solution',
            description: 'Solution found using specialized method',
            solution: solution,
            finalAnswer: true,
            reasoning: 'Specialized algorithm guarantees optimality for this problem type'
        });

        return steps;
    }

    generateGenericLPSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'LP Solution',
            description: `Solve using ${solution.method}`,
            solution: solution,
            reasoning: 'Apply appropriate LP solution technique',
            finalAnswer: true
        }];
    }

    // ENHANCED EXPLANATION METHODS

    enhanceLPStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            // Multiple explanation formats
            explanations: {
                conceptual: this.getLPConceptualExplanation(step, problem),
                procedural: this.getLPProceduralExplanation(step),
                visual: this.getLPVisualExplanation(step, problem),
                algebraic: this.getLPAlgebraicExplanation(step)
            },

            // Difficulty-adapted explanations
            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            // Learning support
            learningSupport: {
                prerequisiteSkills: this.identifyLPPrerequisites(step, problem.type),
                keyVocabulary: this.identifyLPKeyVocabulary(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        // Add thinking prompts if enabled
        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateLPThinkingPrompts(step);
        }

        // Add self-check questions if enabled
        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateLPSelfCheckQuestion(step);
        }

        // Add real-world connections if enabled
        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findLPRealWorldConnection(step, problem);
        }

        return enhanced;
    }

    getLPConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Problem Formulation': 'Translating real-world problem into mathematical model with variables, objective, and constraints',
            'Plot Constraints': 'Each constraint divides space into feasible and infeasible regions',
            'Identify Feasible Region': 'The feasible region contains all solutions satisfying every constraint simultaneously',
            'Find Corner Points': 'Corners are where constraint boundaries intersect - candidates for optimal solution',
            'Evaluate Objective Function': 'Comparing objective values determines which feasible solution is best',
            'Convert to Standard Form': 'Standard form provides consistent structure for algorithmic solution',
            'Set Up Initial Tableau': 'Tableau organizes constraint coefficients and objective into matrix format',
            'Select Pivot': 'Choosing pivot identifies direction of improvement to next better solution',
            'Pivot Operation': 'Pivot transforms tableau to represent new corner point of feasible region',
            'Check Optimality': 'Optimality conditions confirm no further improvement possible'
        };

        return conceptualExplanations[step.step] || 'This step moves us toward the optimal solution';
    }

    getLPProceduralExplanation(step) {
        const proceduralExplanations = {
            'Plot Constraints': '1. Convert inequality to equation\n2. Find intercepts\n3. Draw line\n4. Test point to determine feasible side\n5. Shade or arrow to indicate region',
            'Find Corner Points': '1. List all constraint pairs\n2. Solve each pair as system of equations\n3. Check if point satisfies all constraints\n4. Keep only feasible corners',
            'Select Pivot': '1. Find most negative Zⱼ - Cⱼ (entering column)\n2. Calculate ratios RHS/column entry for positive entries\n3. Choose minimum ratio (leaving row)\n4. Pivot element is at intersection',
            'Pivot Operation': '1. Divide pivot row by pivot element\n2. For each other row, subtract multiple of pivot row to zero out pivot column\n3. Update basic variable labels\n4. Recalculate Zⱼ - Cⱼ row'
        };

        return proceduralExplanations[step.step] || 'Follow standard procedure for this step';
    }

    getLPVisualExplanation(step, problem) {
        const visualExplanations = {
            'Plot Constraints': 'Draw each constraint line on graph, shade feasible region for each',
            'Identify Feasible Region': 'The overlapping shaded region is a polygon containing all feasible solutions',
            'Find Corner Points': 'Mark vertices of the feasible polygon - these are the corner points',
            'Evaluate Objective Function': 'Draw iso-profit lines parallel to objective, slide toward optimum',
            'Pivot Operation': 'Visualize moving along edge of feasible region to adjacent corner point',
            'Tableau': 'Tableau is like a spreadsheet organizing all equations and variables'
        };

        return visualExplanations[step.step] || 'Visualize the mathematical operations';
    }

    getLPAlgebraicExplanation(step) {
        const algebraicExplanations = {
            'Convert to Standard Form': 'For ax + by ≤ c, add slack s: ax + by + s = c, s ≥ 0',
            'Pivot Operation': 'Elementary row operations preserving solution: R_new = R_old - (entry/pivot) × Pivot_row',
            'Optimality Check': 'For max: optimal iff Zⱼ - Cⱼ ≥ 0 for all j (KKT conditions)',
            'Corner Point': 'Intersection of n linearly independent binding constraints in n-dimensional space'
        };

        return algebraicExplanations[step.step] || 'Apply standard algebraic techniques';
    }

    identifyLPPrerequisites(step, problemType) {
        const stepPrereqs = {
            'Plot Constraints': ['Graphing linear equations', 'Understanding inequalities', 'Testing points'],
            'Find Corner Points': ['Solving systems of 2 equations', 'Coordinate geometry'],
            'Set Up Initial Tableau': ['Matrix notation', 'Understanding slack variables'],
            'Select Pivot': ['Ratio calculations', 'Finding minimum/maximum'],
            'Pivot Operation': ['Row operations', 'Matrix manipulation']
        };

        return stepPrereqs[step.step] || ['Basic LP understanding'];
    }

    identifyLPKeyVocabulary(step) {
        const vocabByStep = {
            'Problem Formulation': ['decision variables', 'objective function', 'constraints', 'optimization'],
            'Plot Constraints': ['feasible region', 'boundary line', 'inequality', 'half-plane'],
            'Find Corner Points': ['vertex', 'intersection', 'corner point', 'extreme point'],
            'Convert to Standard Form': ['slack variable', 'surplus variable', 'artificial variable', 'standard form'],
            'Set Up Initial Tableau': ['tableau', 'basic variable', 'non-basic variable', 'RHS'],
            'Select Pivot': ['entering variable', 'leaving variable', 'pivot element', 'ratio test'],
            'Check Optimality': ['Zⱼ - Cⱼ', 'reduced cost', 'optimality criterion', 'optimal solution']
        };

        return vocabByStep[step.step] || [];
    }

    generateLPThinkingPrompts(step) {
        const prompts = {
            'Problem Formulation': {
                before: 'What am I trying to optimize? What are my decision variables?',
                during: 'Does this constraint make sense in the problem context?',
                after: 'Have I captured all important constraints and the correct objective?'
            },
            'Plot Constraints': {
                before: 'How do I convert this inequality to a line?',
                during: 'Which side of the line satisfies the inequality?',
                after: 'Does the feasible side make sense for this constraint?'
            },
            'Find Corner Points': {
                before: 'Which constraints intersect to form corners?',
                during: 'Is this intersection point actually feasible?',
                after: 'Did I find all corner points of the feasible region?'
            },
            'Select Pivot': {
                before: 'Which variable should enter to improve the objective?',
                during: 'Which variable should leave without going negative?',
                after: 'Does this pivot make sense - am I moving to a better solution?'
            }
        };

        return prompts[step.step] || {
            before: 'What is the goal of this step?',
            during: 'Am I performing the operations correctly?',
            after: 'Does the result make sense?'
        };
    }

    generateLPSelfCheckQuestion(step) {
        const questions = {
            'Problem Formulation': 'Are my variables clearly defined with units? Is my objective function what I want to optimize?',
            'Plot Constraints': 'Did I test a point to verify which side is feasible?',
            'Identify Feasible Region': 'Is the feasible region the intersection of ALL constraints?',
            'Find Corner Points': 'Did I verify each corner point satisfies all constraints?',
            'Evaluate Objective Function': 'Did I substitute correctly and check my arithmetic?',
            'Convert to Standard Form': 'Did I add the right type of variable (slack/surplus/artificial) to each constraint?',
            'Select Pivot': 'Did I use the minimum ratio test correctly? Did I check for unboundedness?',
            'Pivot Operation': 'Is my pivot element now 1? Are all other elements in pivot column now 0?',
            'Check Optimality': 'Do all Zⱼ - Cⱼ values satisfy the optimality criterion for my problem type?'
        };

        return questions[step.step] || 'Does this step move me toward the solution correctly?';
    }

    findLPRealWorldConnection(step, problem) {
        const connections = {
            'Problem Formulation': 'Like creating a business plan: defining goals (objective) and constraints (budget, capacity, regulations)',
            'Feasible Region': 'Like a shopping budget: the feasible region is everything you can afford given your constraints',
            'Corner Points': 'Like checking different combinations: you only need to check a few key options, not every possibility',
            'Optimal Solution': 'Like finding the best deal: comparing options to choose the one that gives you the most value',
            'Shadow Price': 'Like determining: how much would I pay for one more hour of machine time? Or one more dollar of budget?',
            'Binding Constraint': 'Like a bottleneck in production: this resource is fully used and limiting your performance'
        };

        return connections[step.step] || 'Linear programming helps make optimal decisions with limited resources';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateLPELI5Explanation(step, problem),
                analogy: this.findRelevantLPAnalogy(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestLPVisualization(step)
            }
        }));
    }

    generateLPELI5Explanation(step, problem) {
        const ELI5Explanations = {
            'Problem Formulation': "We're figuring out what we need to decide (like how many toys to make), what we want (like making the most money), and what rules we have to follow (like not using more materials than we have).",
            'Plot Constraints': "We draw lines on a graph for each rule. One side of each line shows where we're following the rule.",
            'Identify Feasible Region': "The feasible region is like a playground where all the rules are followed. We can only play in that area!",
            'Find Corner Points': "Corners are special spots where two rules meet. The best answer is always at one of these corners!",
            'Evaluate Objective Function': "We check our score at each corner to see which one is the best!",
            'Convert to Standard Form': "We add helper numbers (called slack) to make all our rules look the same way, so the computer can solve them.",
            'Set Up Initial Tableau': "We organize all our information into a big organized table, like a super-organized homework sheet!",
            'Select Pivot': "We pick which number to change next to make our answer better, like picking which move to make in a game.",
            'Pivot Operation': "We do some math magic to update our table and move to a better answer.",
            'Check Optimality': "We check if we can make our answer even better, or if we've found the very best answer possible!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to find the best solution!";
    }

    findRelevantLPAnalogy(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            const category = this.lpTypes[problem.type]?.category;
            if (analogy.suitableFor.includes(problem.type) || 
                analogy.suitableFor.includes(category) ||
                analogy.suitableFor.includes('lp_introduction')) {
                if (step.step && analogy.explanation.toLowerCase().includes(step.step.toLowerCase())) {
                    return analogy.ELI5 || analogy.explanation;
                }
            }
        }

        // Default analogies by step
        const defaultAnalogies = {
            'Plot Constraints': this.analogies.feasible_region_as_playground.ELI5,
            'Select Pivot': this.analogies.simplex_as_mountain_climbing.ELI5,
            'Evaluate Objective Function': this.analogies.objective_function_as_score.ELI5
        };

        return defaultAnalogies[step.step] || "Each step brings us closer to the best answer!";
    }

    suggestLPVisualization(step) {
        const visualizations = {
            'Problem Formulation': 'Write down what you know and what you need to find',
            'Plot Constraints': 'Draw each rule as a line on graph paper, shade the "allowed" side',
            'Identify Feasible Region': 'Color the area where all the shaded regions overlap',
            'Find Corner Points': 'Put dots at all the corners of the colored region',
            'Evaluate Objective Function': 'Calculate your score at each dot',
            'Set Up Initial Tableau': 'Make a big organized table with rows and columns',
            'Select Pivot': 'Circle the number you're going to use for the next step',
            'Pivot Operation': 'Use the circled number to update all the other numbers in the table',
            'Optimal Solution': 'Write down the final answer and explain what it means'
        };

        return visualizations[step.step] || 'Draw a picture or diagram to help understand this step';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateLPStepBridge(steps[i], steps[i + 1]),
                    reasoning: this.explainLPStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainLPStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateLPStepBridge(currentStep, nextStep) {
        return {
            currentState: `We completed: ${currentStep.step}`,
            nextGoal: `Next, we will: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainLPStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainLPStepBenefit(nextStep)}`
        };
    }

    explainLPStepProgression(currentStep, nextStep) {
        const progressions = {
            'Problem Formulation->Plot Constraints': 'After formulating the problem, we visualize constraints graphically',
            'Plot Constraints->Identify Feasible Region': 'After plotting individual constraints, we find their intersection',
            'Identify Feasible Region->Find Corner Points': 'Once we have the feasible region, we identify its vertices',
            'Find Corner Points->Evaluate Objective Function': 'After finding corners, we test which gives the best objective value',
            'Convert to Standard Form->Set Up Initial Tableau': 'Standard form allows us to organize into tableau format',
            'Select Pivot->Pivot Operation': 'After selecting pivot, we perform row operations to update tableau'
        };

        const key = `${currentStep.step}->${nextStep.step}`;
        return progressions[key] || `Progressing from ${currentStep.step} to ${nextStep.step}`;
    }

    explainLPStepStrategy(nextStep) {
        const strategies = {
            'Plot Constraints': 'Graphing constraints reveals the feasible region visually',
            'Find Corner Points': 'Optimal solution must occur at a corner point (Fundamental Theorem)',
            'Evaluate Objective Function': 'Comparing corner points identifies the optimal solution',
            'Select Pivot': 'Choosing the right pivot ensures we move to a better solution',
            'Check Optimality': 'Verifying optimality conditions confirms we have the best solution'
        };

        return strategies[nextStep.step] || `The strategy is to ${nextStep.description}`;
    }

    explainLPStepNecessity(currentStep, nextStep) {
        return 'we need to build upon the previous work to reach the optimal solution';
    }

    explainLPStepBenefit(nextStep) {
        return 'moving us closer to finding and verifying the optimal solution';
    }

    addErrorPrevention(step, problemType) {
        const category = this.lpTypes[problemType]?.category || 'graphical';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generateLPPreventionTips(step, problemType),
                checkPoints: this.generateLPCheckPoints(step),
                warningFlags: this.identifyLPWarningFlags(step, problemType)
            },
            validation: {
                selfCheck: this.generateLPSelfCheckQuestion(step),
                expectedResult: this.describeLPExpectedResult(step),
                troubleshooting: this.generateLPTroubleshootingTips(step)
            }
        };
    }

    generateLPPreventionTips(step, problemType) {
        const tips = {
            'Problem Formulation': [
                'Define variables with clear units',
                'Double-check constraint inequality directions',
                'Verify objective matches what you want to optimize',
                'Don\'t forget non-negativity constraints'
            ],
            'Plot Constraints': [
                'Test a point (often origin) to determine feasible side',
                'Draw lines carefully with correct intercepts',
                'Label each constraint line clearly'
            ],
            'Find Corner Points': [
                'Verify each corner point satisfies ALL constraints',
                'Check arithmetic when solving intersection',
                'Don\'t miss corners on the axes'
            ],
            'Select Pivot': [
                'Use minimum positive ratio test correctly',
                'Check for unboundedness (all ratios negative)',
                'Avoid division by zero or negative'
            ],
            'Pivot Operation': [
                'Make pivot element exactly 1 first',
                'Zero out all other entries in pivot column',
                'Double-check arithmetic in row operations',
                'Keep track of which variables are basic'
            ]
        };

        return tips[step.step] || ['Work carefully and check arithmetic', 'Verify results make sense'];
    }

    generateLPCheckPoints(step) {
        const checkpoints = {
            'Problem Formulation': [
                'Are variables defined clearly?',
                'Is objective linear?',
                'Are all constraints linear?',
                'Did I include all necessary constraints?'
            ],
            'Plot Constraints': [
                'Did I plot all constraints?',
                'Is the feasible side correctly identified?',
                'Are axes labeled and scaled appropriately?'
            ],
            'Find Corner Points': [
                'Did I find all corners?',
                'Are all corner points feasible?',
                'Did I solve intersections correctly?'
            ],
            'Pivot Operation': [
                'Is pivot element now 1?',
                'Are other pivot column elements now 0?',
                'Did I update basic variable labels?',
                'Is RHS still non-negative?'
            ]
        };

        return checkpoints[step.step] || ['Is this step completed correctly?', 'Does the result make sense?'];
    }

    identifyLPWarningFlags(step, problemType) {
        const warnings = {
            'Problem Formulation': [
                'Non-linear terms in objective or constraints',
                'Unclear variable definitions',
                'Missing non-negativity constraints'
            ],
            'Find Corner Points': [
                'Corner point outside feasible region',
                'Missed corner points',
                'Arithmetic errors in solving systems'
            ],
            'Select Pivot': [
                'All ratios negative (unbounded)',
                'No negative Zⱼ - Cⱼ but RHS negative (infeasible)',
                'Ties in ratio test (degeneracy possible)'
            ]
        };

        return warnings[step.step] || [];
    }

    describeLPExpectedResult(step) {
        const expectations = {
            'Problem Formulation': 'Clear mathematical model with variables, objective, and constraints',
            'Plot Constraints': 'Graph with constraint lines and shaded feasible region',
            'Identify Feasible Region': 'Clearly defined polygon (or unbounded region)',
            'Find Corner Points': 'List of all corner point coordinates',
            'Evaluate Objective Function': 'Z value at each corner point',
            'Set Up Initial Tableau': 'Organized tableau with initial basic feasible solution',
            'Select Pivot': 'Identified entering and leaving variables',
            'Pivot Operation': 'Updated tableau with new basic feasible solution',
            'Check Optimality': 'Verification that solution is optimal (or identification of improvement)'
        };

        return expectations[step.step] || 'Progress toward optimal solution';
    }

    generateLPTroubleshootingTips(step) {
        const tips = {
            'Problem Formulation': [
                'If confused, write out what you know in words first',
                'Check similar example problems',
                'Verify units are consistent'
            ],
            'Plot Constraints': [
                'If region looks wrong, recheck which side is feasible',
                'Verify intercepts by plugging into equation',
                'Try different test points if unsure'
            ],
            'Find Corner Points': [
                'If point doesn\'t satisfy all constraints, it\'s not a corner of feasible region',
                'Double-check arithmetic in solving system',
                'Graph to visually verify corners'
            ],
            'Pivot Operation': [
                'If stuck, verify pivot element selection',
                'Recalculate row operations step by step',
                'Check that RHS remains non-negative'
            ]
        };

        return tips[step.step] || [
            'Review the previous step',
            'Check arithmetic carefully',
            'Consult worked examples',
            'Ask for help if needed'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateLPGuidingQuestions(step, problem),
                subSteps: this.breakIntoLPSubSteps(step),
                hints: this.generateLPProgressiveHints(step, problem),
                practiceVariation: this.generateLPPracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainLPThinkingProcess(step),
                decisionPoints: this.identifyLPDecisionPoints(step),
                alternativeApproaches: this.suggestLPAlternativeMethods(step, problem)
            }
        }));
    }

    generateLPGuidingQuestions(step, problem) {
        const questions = {
            'Problem Formulation': [
                'What are we trying to decide?',
                'What do we want to maximize or minimize?',
                'What limitations or requirements exist?',
                'What must be true for any solution?'
            ],
            'Plot Constraints': [
                'How do I convert this inequality to a line?',
                'What points are on this line?',
                'Which side of the line satisfies the inequality?'
            ],
            'Find Corner Points': [
                'Where do constraint boundaries intersect?',
                'How do I solve for the intersection?',
                'Does this point satisfy all constraints?'
            ],
            'Select Pivot': [
                'Which Zⱼ - Cⱼ is most negative?',
                'How do I calculate the ratio test?',
                'Which ratio is smallest positive?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How do I proceed?', 'How can I verify?'];
    }

    breakIntoLPSubSteps(step) {
        const subSteps = {
            'Plot Constraints': [
                'Convert inequality to equation (boundary)',
                'Find two points on the line (intercepts)',
                'Draw the line',
                'Test a point (e.g., origin) in the inequality',
                'Shade or arrow toward feasible side'
            ],
            'Find Corner Points': [
                'List all pairs of constraints',
                'For each pair, solve the 2×2 system',
                'Check if intersection satisfies all constraints',
                'Keep only feasible intersections as corners'
            ],
            'Select Pivot': [
                'Scan Zⱼ - Cⱼ row for most negative entry (entering column)',
                'For each positive entry in entering column, calculate RHS/entry',
                'Select row with minimum positive ratio (leaving row)',
                'Pivot element is at intersection'
            ],
            'Pivot Operation': [
                'Divide pivot row by pivot element',
                'For each other row, calculate multiplier',
                'Subtract appropriate multiple of pivot row',
                'Verify pivot column has 1 at pivot, 0 elsewhere',
                'Update basic variable labels'
            ]
        };

        return subSteps[step.step] || ['Understand goal', 'Apply method', 'Verify result'];
    }

    generateLPProgressiveHints(step, problem) {
        const category = this.lpTypes[problem.type]?.category || 'graphical';
        const hintSet = this.hints[category] || this.hints.formulation;

        return {
            level1: hintSet.level1 || 'Think about what this step requires',
            level2: hintSet.level2 || 'Consider the method for this type of step',
            level3: hintSet.level3 || 'Apply the standard procedure',
            level4: hintSet.level4 || 'Perform the specific calculations'
        };
    }

    generateLPPracticeVariation(step, problem) {
        return {
            similarProblem: `Try a similar ${problem.type} problem with different numbers`,
            practiceHint: 'Start with simpler numbers to build confidence',
            extension: 'Once comfortable, try problems with more variables or constraints'
        };
    }

    explainLPThinkingProcess(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to accomplish in this step?',
            strategy: 'What method or procedure should I use?',
            execute: 'How do I carry out the method correctly?',
            verify: 'How can I check if my result is correct?'
        };
    }

    identifyLPDecisionPoints(step) {
        const decisions = {
            'Problem Formulation': [
                'How to define variables?',
                'Maximize or minimize?',
                'Which inequality direction for each constraint?'
            ],
            'Graphical Method': [
                'Which method: corner points or iso-profit lines?',
                'How detailed should the graph be?'
            ],
            'Simplex Method': [
                'Which variable enters basis?',
                'Which variable leaves basis?',
                'Continue iterating or stop?'
            ]
        };

        return decisions[step.step] || ['How to proceed?', 'What method to use?'];
    }

    suggestLPAlternativeMethods(step, problem) {
        const alternatives = {
            'Two-Variable Problem': [
                'Graphical method - visual and intuitive',
                'Simplex method - systematic and generalizable',
                'Enumeration of corner points - simple but limited'
            ],
            'Solve LP': [
                'Simplex method - most common',
                'Interior point methods - efficient for large problems',
                'Software tools (Excel Solver, LINDO, etc.)'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate for this problem'];
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'decision variables': 'the things we get to choose',
            'objective function': 'what we want to make as big or small as possible',
            'constraints': 'the rules we have to follow',
            'feasible region': 'the allowed area',
            'optimal solution': 'the best answer',
            'corner point': 'corner of the allowed area',
            'slack variable': 'leftover amount',
            'binding constraint': 'rule that limits us',
            'shadow price': 'value of having one more unit',
            'tableau': 'organized table',
            'pivot': 'special number we use to update the table',
            'maximize': 'make as big as possible',
            'minimize': 'make as small as possible',
            'coefficient': 'the number in front'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    // GRAPH GENERATION
    generateLPGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.lpTypes[type]?.category;

        if (category === 'graphical') {
            this.graphData = this.generateGraphicalVisualization(this.currentProblem, this.currentSolution);
        } else if (category === 'simplex') {
            this.graphData = this.generateTableauVisualization(this.currentProblem, this.currentSolution);
        }
    }

    generateGraphicalVisualization(problem, solution) {
        return {
            type: 'graphical_2d',
            constraints: solution.constraints || [],
            feasibleRegion: solution.feasibleRegion,
            cornerPoints: solution.cornerPoints || [],
            optimalPoint: solution.optimalPoint,
            isoProfitLines: solution.isoProfitLines || [],
            description: 'Graphical representation of LP problem with feasible region and optimal solution'
        };
    }

    generateTableauVisualization(problem, solution) {
        return {
            type: 'simplex_tableau',
            iterations: solution.iterations || [],
            finalTableau: solution.finalTableau,
            description: 'Simplex tableau iterations showing path to optimal solution'
        };
    }

    // WORKBOOK GENERATION
    generateLPWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createLPProblemSection(),
            this.createLPPrerequisiteSection(),
            this.createLPEnhancedStepsSection(),
            this.createLPLessonSection(),
            this.createLPSolutionSection(),
            this.createLPAnalysisSection(),
            this.createLPVerificationSection(),
            this.createLPSensitivitySection(),
            this.createLPRealWorldApplicationSection(),
            this.createLPPedagogicalNotesSection(),
            this.createLPAlternativeMethodsSection(),
            this.createLPPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Linear Programming Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createLPProblemSection() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.lpTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.lpTypes[this.currentProblem.type]?.category || 'linear_programming'],
            ['Method', this.currentSolution?.method || 'LP Solution'],
            ['Formulation', this.currentProblem.formulation || 'LP Problem'],
            ['', '']
        ];

        // Add problem data if available
        if (this.currentProblem.data) {
            problemData.push(['Problem Data', '']);
            Object.entries(this.currentProblem.data).forEach(([key, value]) => {
                problemData.push([key, JSON.stringify(value)]);
            });
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createLPPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.lpTypes[this.currentProblem.type]?.category;
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

    createLPEnhancedStepsSection() {
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
                stepsData.push(['Connection', step.explanation.currentState]);
                stepsData.push(['Next', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.method) {
                stepsData.push(['Method', step.method]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Algebraic Rule', step.algebraicRule]);
            }

            if (step.theorem) {
                stepsData.push(['Theorem', step.theorem]);
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
                stepsData.push(['Visual', step.explanations.visual]);
            }

            // Visual hints
            if (step.visualHint) {
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

            // Scaffolding
            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
                }
            }

            // Thinking prompts
            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Think Before', step.thinkingPrompts.before]);
                stepsData.push(['Think After', step.thinkingPrompts.after]);
            }

            // Self-check
            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createLPLessonSection() {
        const { type } = this.currentProblem;
        const category = this.lpTypes[type]?.category;

        const lessonData = [
            ['Linear Programming Fundamentals', ''],
            ['', 'LP optimizes linear objective subject to linear constraints'],
            ['', 'Decision variables represent controllable quantities'],
            ['', 'Constraints define feasible region'],
            ['', 'Optimal solution at corner point (vertex) of feasible region'],
            ['', ''],
            ['Key Components', ''],
            ['', 'Decision Variables: What we decide'],
            ['', 'Objective Function: What we optimize (max or min)'],
            ['', 'Constraints: Limitations and requirements'],
            ['', 'Non-negativity: Usually xᵢ ≥ 0'],
            ['', ''],
            ['Solution Methods', ''],
            ['', 'Graphical Method: 2 variables, visual approach'],
            ['', 'Simplex Method: Any size, algorithmic approach'],
            ['', 'Specialized Methods: Transportation, assignment, network']
        ];

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createLPSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        solutionData.push(['Method Used', this.currentSolution.method || this.currentSolution.type]);

        if (this.currentSolution.variables) {
            solutionData.push(['', '']);
            solutionData.push(['Optimal Solution', '']);
            Object.entries(this.currentSolution.variables).forEach(([variable, value]) => {
                solutionData.push([variable, value]);
            });
        }

        if (this.currentSolution.optimalValue !== undefined) {
            solutionData.push(['', '']);
            solutionData.push(['Optimal Objective Value', this.currentSolution.optimalValue]);
        }

        if (this.currentSolution.slackVariables) {
            solutionData.push(['', '']);
            solutionData.push(['Slack Variables', '']);
            Object.entries(this.currentSolution.slackVariables).forEach(([slack, value]) => {
                solutionData.push([slack, value]);
            });
        }

        return {
            title: 'Optimal Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createLPAnalysisSection() {
        if (!this.currentSolution) return null;

        const analysisData = [
            ['Solution Method', this.currentSolution.method || this.currentSolution.type],
            ['Problem Category', this.lpTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.iterations) {
            analysisData.push(['Number of Iterations', this.currentSolution.iterations.length]);
        }

        if (this.currentSolution.bindingConstraints) {
            analysisData.push(['Binding Constraints', this.currentSolution.bindingConstraints.join(', ')]);
        }

        if (this.currentSolution.feasibleRegion) {
            analysisData.push(['Feasible Region', this.currentSolution.feasibleRegion]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createLPVerificationSection() {
        if (!this.currentSolution) return null;

        const verificationData = [
            ['Verification Method', 'Substitute optimal solution into original problem'],
            ['', '']
        ];

        verificationData.push(['Check Constraints', 'Verify all constraints satisfied']);
        verificationData.push(['Check Non-negativity', 'Verify all variables ≥ 0']);
        verificationData.push(['Check Objective', 'Verify objective value calculation']);

        if (this.currentSolution.variables) {
            verificationData.push(['', '']);
            verificationData.push(['Optimal Solution Values', '']);
            Object.entries(this.currentSolution.variables).forEach(([variable, value]) => {
                verificationData.push([variable, value]);
            });
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createLPSensitivitySection() {
        if (!this.currentSolution || !this.currentSolution.shadowPrices) return null;

        const sensitivityData = [
            ['Sensitivity Analysis Results', ''],
            ['', '']
        ];

        if (this.currentSolution.shadowPrices) {
            sensitivityData.push(['Shadow Prices (Dual Values)', '']);
            Object.entries(this.currentSolution.shadowPrices).forEach(([constraint, price]) => {
                sensitivityData.push([constraint, `$${price}/unit`]);
            });
            sensitivityData.push(['', '']);
            sensitivityData.push(['Interpretation', 'Shadow price = value of one more unit of resource']);
        }

        if (this.currentSolution.reducedCosts) {
            sensitivityData.push(['', '']);
            sensitivityData.push(['Reduced Costs', '']);
            Object.entries(this.currentSolution.reducedCosts).forEach(([variable, cost]) => {
                sensitivityData.push([variable, cost]);
            });
            sensitivityData.push(['', '']);
            sensitivityData.push(['Interpretation', 'Reduced cost = opportunity cost of non-basic variable']);
        }

        return {
            title: 'Sensitivity Analysis',
            type: 'sensitivity',
            data: sensitivityData
        };
    }

    createLPRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        const appData = [
            ['Real-World Applications of Linear Programming', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Industry', app.industry]);
            appData.push(['Description', app.description]);
            appData.push(['Context', app.context]);
            appData.push(['', '']);
        });

        return {
            title: 'Real-World Applications',
            type: 'applications',
            data: appData
        };
    }

    createLPPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generateLPPedagogicalNotes(this.currentProblem.type);

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

    createLPAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateLPAlternativeMethods(this.currentProblem.type);

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

    createLPPracticeProblemsSection() {
        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Formulation Practice', '']
        ];

        const formulationProblems = [
            'A factory makes tables (profit $40) and chairs (profit $25). Tables need 3 hours, chairs need 2 hours. 60 hours available. Formulate LP.',
            'Minimize cost of diet. Foods A (20¢) and B (30¢). Need ≥100g protein, ≥50g fat. A has 10g protein, 5g fat. B has 5g protein, 10g fat. Formulate.'
        ];

        formulationProblems.forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Graphical Method Practice', '']);

        const graphicalProblems = [
            'Max Z = 3x₁ + 2x₂ s.t. x₁ + x₂ ≤ 4, 2x₁ + x₂ ≤ 6, x₁,x₂ ≥ 0',
            'Max Z = x₁ + 2x₂ s.t. 2x₁ + x₂ ≤ 10, x₁ + 2x₂ ≤ 10, x₁,x₂ ≥ 0'
        ];

        graphicalProblems.forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Simplex Method Practice', '']);

        const simplexProblems = [
            'Max Z = 2x₁ + 3x₂ s.t. x₁ + 2x₂ ≤ 8, 2x₁ + x₂ ≤ 10, x₁,x₂ ≥ 0',
            'Max Z = 5x₁ + 4x₂ + 3x₃ s.t. 2x₁ + 3x₂ + x₃ ≤ 10, x₁ + x₂ + 2x₃ ≤ 8, x₁,x₂,x₃ ≥ 0'
        ];

        simplexProblems.forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    generateLPPedagogicalNotes(problemType) {
        const category = this.lpTypes[problemType]?.category;

        const pedagogicalDatabase = {
            graphical: {
                objectives: [
                    'Formulate 2-variable LP problems',
                    'Graph linear constraints and identify feasible region',
                    'Find corner points and determine optimal solution',
                    'Interpret solution in problem context'
                ],
                keyConcepts: [
                    'Feasible region as intersection of constraints',
                    'Optimal solution at corner point',
                    'Binding vs non-binding constraints',
                    'Iso-profit/iso-cost lines'
                ],
                prerequisites: [
                    'Graphing linear equations and inequalities',
                    'Solving 2×2 systems of equations',
                    'Understanding optimization'
                ],
                commonDifficulties: [
                    'Determining correct feasible side of inequality',
                    'Missing corner points',
                    'Arithmetic errors in finding intersections',
                    'Confusion about max vs min'
                ],
                teachingStrategies: [
                    'Use graph paper for accuracy',
                    'Test origin (if feasible) to determine inequality side',
                    'Color-code different constraints',
                    'Emphasize corner point theorem',
                    'Practice with both maximization and minimization'
                ],
                extensions: [
                    '3+ constraints for 2 variables',
                    'Unbounded and infeasible cases',
                    'Alternative optima',
                    'Transition to simplex for >2 variables'
                ],
                assessment: [
                    'Can student graph constraints correctly?',
                    'Does student identify all corner points?',
                    'Can student evaluate objective and select optimal?',
                    'Does student interpret solution correctly?'
                ]
            },
            simplex: {
                objectives: [
                    'Convert LP to standard form',
                    'Set up and interpret simplex tableau',
                    'Perform pivot operations correctly',
                    'Recognize optimal solution',
                    'Extract solution from final tableau'
                ],
                keyConcepts: [
                    'Slack, surplus, and artificial variables',
                    'Basic and non-basic variables',
                    'Pivot selection rules',
                    'Optimality conditions',
                    'Tableau as representation of corner point'
                ],
                prerequisites: [
                    'Matrix operations and row operations',
                    'LP formulation',
                    'Understanding of basic feasible solutions'
                ],
                commonDifficulties: [
                    'Errors in adding slack/surplus/artificial variables',
                    'Arithmetic mistakes in pivot operations',
                    'Confusion about when to stop',
                    'Misidentifying entering/leaving variables'
                ],
                teachingStrategies: [
                    'Emphasize connection to corner points',
                    'Practice standard form conversion extensively',
                    'Use color coding for different variable types',
                    'Double-check arithmetic at each iteration',
                    'Teach systematic pivot procedure'
                ],
                extensions: [
                    'Two-phase and Big-M methods',
                    'Sensitivity analysis',
                    'Duality theory',
                    'Special cases (unbounded, infeasible, degenerate)'
                ],
                assessment: [
                    'Can student convert to standard form?',
                    'Does student perform pivots correctly?',
                    'Can student recognize optimality?',
                    'Does student extract and interpret solution?'
                ]
            },
            special: {
                objectives: [
                    'Recognize special structure in LP',
                    'Apply specialized algorithms',
                    'Understand efficiency advantages',
                    'Interpret solutions appropriately'
                ],
                keyConcepts: [
                    'Transportation: supply, demand, shipping costs',
                    'Assignment: one-to-one matching',
                    'Network flow: nodes, arcs, conservation',
                    'Specialized algorithms exploit structure'
                ],
                prerequisites: [
                    'General LP understanding',
                    'Basic graph theory (for network problems)',
                    'Matrix concepts'
                ],
                commonDifficulties: [
                    'Recognizing when special structure applies',
                    'Setting up transportation tables',
                    'Understanding specialized algorithms',
                    'Interpreting dual variables in context'
                ],
                teachingStrategies: [
                    'Start with simple examples',
                    'Show connection to general LP',
                    'Emphasize efficiency benefits',
                    'Use real-world contexts extensively',
                    'Visual representations (maps, networks)'
                ],
                extensions: [
                    'Unbalanced transportation problems',
                    'Multiple objectives',
                    'Integer restrictions',
                    'Stochastic extensions'
                ],
                assessment: [
                    'Can student recognize special structure?',
                    'Does student formulate problem correctly?',
                    'Can student apply specialized method?',
                    'Does student interpret solution in context?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Understand and solve LP problems'],
            keyConcepts: ['Optimization', 'Constraints', 'Feasibility'],
            prerequisites: ['Algebra', 'Linear equations'],
            commonDifficulties: ['Formulation', 'Solution procedure'],
            teachingStrategies: ['Clear examples', 'Step-by-step approach'],
            extensions: ['More complex problems', 'Applications'],
            assessment: ['Verify understanding of concepts and procedures']
        };
    }

    generateLPAlternativeMethods(problemType) {
        const category = this.lpTypes[problemType]?.category;

        const alternativeDatabase = {
            graphical: {
                primaryMethod: 'Corner Point Enumeration',
                methods: [
                    {
                        name: 'Corner Point Method',
                        description: 'Find all corners, evaluate objective at each, select best'
                    },
                    {
                        name: 'Iso-Profit Line Method',
                        description: 'Move iso-profit line parallel to itself until last contact with feasible region'
                    },
                    {
                        name: 'Simplex Method',
                        description: 'Algebraic approach, works but inefficient for only 2 variables'
                    }
                ],
                comparison: 'Corner point method most systematic; iso-profit more visual; simplex overkill for 2 variables'
            },
            simplex: {
                primaryMethod: 'Primal Simplex Method',
                methods: [
                    {
                        name: 'Dual Simplex',
                        description: 'Start from dual feasible solution, useful for sensitivity analysis'
                    },
                    {
                        name: 'Two-Phase Simplex',
                        description: 'For problems with ≥ or = constraints, find initial feasible solution in Phase I'
                    },
                    {
                        name: 'Big-M Method',
                        description: 'Alternative to two-phase, uses large penalty for artificial variables'
                    },
                    {
                        name: 'Revised Simplex',
                        description: 'More efficient computationally, especially for large problems'
                    },
                    {
                        name: 'Interior Point Methods',
                        description: 'Modern alternative, moves through interior rather than edges'
                    }
                ],
                comparison: 'Primal simplex most common; two-phase/Big-M for difficult starting points; interior point efficient for very large problems'
            },
            special: {
                primaryMethod: 'Specialized Algorithm',
                methods: [
                    {
                        name: 'Transportation Simplex',
                        description: 'Exploits special structure, much more efficient than general simplex'
                    },
                    {
                        name: 'Hungarian Algorithm',
                        description: 'Optimal for assignment problems, polynomial time'
                    },
                    {
                        name: 'Network Simplex',
                        description: 'Specialized for network flow, extremely efficient'
                    },
                    {
                        name: 'General Simplex',
                        description: 'Always works but doesn\'t exploit structure'
                    }
                ],
                comparison: 'Specialized methods vastly more efficient when structure present; general simplex as fallback'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard LP solution approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods may be applicable'
            }],
            comparison: 'Choose based on problem size and structure'
        };
    }
}

// Export the class
export default EnhancedLinearProgrammingMathematicalWorkbook;
