// Enhanced Rational-to-Quadratic Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedRationalToQuadraticMathematicalWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2500;
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
        this.initializeRationalToQuadraticSolvers();
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
        this.initializeRationalToQuadraticLessons();
    }

    initializeRationalToQuadraticLessons() {
        this.lessons = {
            rational_to_quadratic: {
                title: "Rational Equations Leading to Quadratics",
                concepts: [
                    "Rational equation contains variables in denominators",
                    "Multiply by LCD to clear fractions",
                    "Results in quadratic equation after simplification",
                    "Must check solutions for extraneous roots",
                    "Solutions cannot make original denominators zero"
                ],
                theory: "When we clear denominators in rational equations by multiplying by the LCD, the resulting equation is often quadratic. We must verify all solutions in the original equation because multiplying by expressions containing variables can introduce extraneous solutions.",
                keyFormulas: {
                    "General Form": "a/b + c/d = e or similar with variables in denominators",
                    "LCD Method": "Multiply entire equation by LCD of all denominators",
                    "Resulting Form": "Quadratic equation ax² + bx + c = 0",
                    "Quadratic Formula": "x = (-b ± √(b² - 4ac))/(2a)"
                },
                solvingSteps: [
                    "Identify all denominators and find LCD",
                    "Multiply entire equation by LCD to clear fractions",
                    "Simplify to standard quadratic form",
                    "Solve quadratic using appropriate method",
                    "Check all solutions in original equation",
                    "Reject any extraneous solutions (that make denominators zero)"
                ],
                applications: [
                    "Work rate problems (combined work rates)",
                    "Mixture problems with varying concentrations",
                    "Distance-rate-time with different speeds",
                    "Lens equations in physics",
                    "Electrical resistance in parallel circuits"
                ],
                restrictions: [
                    "Denominators cannot equal zero",
                    "Solutions must satisfy original equation",
                    "Check domain restrictions before and after solving"
                ]
            },

            simple_rational_to_quadratic: {
                title: "Simple Rational to Quadratic Equations",
                concepts: [
                    "Form: 1/x + 1/y = 1/z or a/x + b/x = c",
                    "LCD is usually product of distinct denominators",
                    "Clearing fractions yields quadratic",
                    "Typically has two solutions (check both)"
                ],
                theory: "Simple rational equations have clear denominator structures. Multiplying by LCD eliminates fractions, leaving a quadratic equation.",
                keyFormulas: {
                    "Type 1": "a/x + b = c → ax + bx² = cx²",
                    "Type 2": "a/(x-h) + b/(x-k) = c",
                    "Type 3": "1/x + 1/y = 1/z (solving for one variable)"
                },
                solvingSteps: [
                    "Identify LCD of all fractions",
                    "Multiply every term by LCD",
                    "Expand and simplify to quadratic form",
                    "Solve using factoring or quadratic formula",
                    "Check for extraneous solutions"
                ],
                commonPatterns: {
                    "Sum of reciprocals": "1/a + 1/b = 1/c",
                    "Fraction sum equals constant": "a/x + b/x = c",
                    "Different denominators": "a/(x-m) + b/(x-n) = c"
                }
            },

            work_rate_problems: {
                title: "Work Rate Problems (Rational to Quadratic)",
                concepts: [
                    "Rate = 1/time to complete job",
                    "Combined rate = sum of individual rates",
                    "Often leads to rational equations",
                    "Clearing fractions creates quadratics"
                ],
                theory: "Work rate problems use the principle that Rate × Time = Work. When two or more entities work together, their rates add. Setting up these equations often involves fractions that lead to quadratics when solved.",
                keyFormulas: {
                    "Work Formula": "Rate × Time = Work Done",
                    "Individual Rate": "Rate = 1/(time alone)",
                    "Combined Rate": "Rate₁ + Rate₂ = Rate_combined",
                    "Standard Setup": "t/a + t/b = 1 (working together for time t)"
                },
                solvingSteps: [
                    "Define variables for unknown times or rates",
                    "Write rate equation: 1/t₁ + 1/t₂ = 1/t_combined",
                    "Multiply by LCD to clear fractions",
                    "Solve resulting quadratic equation",
                    "Verify solutions make sense in context"
                ],
                commonScenarios: [
                    "Two workers completing a job together",
                    "Filling/draining tanks with multiple pipes",
                    "Machines working at different rates",
                    "One worker faster/slower than another by given amount"
                ]
            },

            distance_rate_time_rational: {
                title: "Distance-Rate-Time Problems (Rational to Quadratic)",
                concepts: [
                    "Distance = Rate × Time",
                    "Time = Distance / Rate",
                    "Different rates or distances create rational equations",
                    "Often involves reciprocals of rates"
                ],
                theory: "When problems involve different rates, return trips, or varying conditions, the time equations create rational expressions that become quadratic when cleared.",
                keyFormulas: {
                    "Basic": "d = rt, so t = d/r",
                    "Round Trip": "d/r₁ + d/r₂ = total time",
                    "Different Distances": "d₁/r + d₂/r = total time",
                    "Rate Relationship": "r₂ = r₁ + k (or r₁ - k)"
                },
                solvingSteps: [
                    "Identify distances, rates, and times",
                    "Set up equation using d/r for time",
                    "Clear fractions by multiplying by LCD",
                    "Solve resulting quadratic",
                    "Verify solution is realistic (positive, reasonable)"
                ],
                commonPatterns: [
                    "Boat in current (upstream/downstream)",
                    "Round trip with different speeds",
                    "Meeting/overtaking problems",
                    "Average speed calculations"
                ]
            },

            proportion_to_quadratic: {
                title: "Proportions Leading to Quadratics",
                concepts: [
                    "Cross-multiplication can create quadratics",
                    "Especially when variables appear in multiple terms",
                    "Form: (ax + b)/(cx + d) = (ex + f)/(gx + h)",
                    "Results in quadratic after cross-multiplying"
                ],
                theory: "Complex proportions with variables in multiple positions lead to quadratic equations when cross-multiplied and simplified.",
                keyFormulas: {
                    "Proportion": "a/b = c/d implies ad = bc",
                    "With Variables": "(x+a)/(x+b) = (x+c)/(x+d)",
                    "Cross Multiply": "(x+a)(x+d) = (x+b)(x+c)",
                    "Expands to": "Quadratic equation"
                },
                solvingSteps: [
                    "Write proportion clearly",
                    "Cross-multiply to eliminate fractions",
                    "Expand all products",
                    "Collect like terms to form quadratic",
                    "Solve and verify both solutions"
                ],
                applications: [
                    "Similar triangles with algebraic sides",
                    "Scaling problems with constraints",
                    "Inverse variation combined with linear relationship"
                ]
            },

            literal_rational_equations: {
                title: "Literal Rational Equations (Solving for One Variable)",
                concepts: [
                    "Equation contains multiple variables",
                    "Solve for one variable in terms of others",
                    "May result in quadratic in the desired variable",
                    "Solution is a formula, not a number"
                ],
                theory: "Literal rational equations require isolating one variable while treating others as constants. This often produces quadratic expressions.",
                keyFormulas: {
                    "Lens Equation": "1/f = 1/d₀ + 1/dᵢ",
                    "Parallel Resistance": "1/R = 1/R₁ + 1/R₂",
                    "Combined Gas Law": "P₁V₁/T₁ = P₂V₂/T₂"
                },
                solvingSteps: [
                    "Identify variable to solve for",
                    "Treat other variables as constants",
                    "Clear fractions by multiplying by LCD",
                    "Rearrange to quadratic form in desired variable",
                    "Apply quadratic formula if necessary",
                    "Express answer as formula"
                ],
                commonExamples: [
                    "Solving lens equation for focal length",
                    "Finding resistance in parallel circuit",
                    "Isolating one variable in work rate formula"
                ]
            },

            extraneous_solutions: {
                title: "Extraneous Solutions in Rational Equations",
                concepts: [
                    "Extraneous solution: satisfies transformed equation but not original",
                    "Arises from multiplying by variable expressions",
                    "Must check all solutions in original equation",
                    "Reject solutions that make denominators zero"
                ],
                theory: "When we multiply both sides of an equation by an expression containing the variable, we may introduce solutions that weren't in the original equation. These extraneous solutions must be identified and rejected.",
                identificationProcess: [
                    "Solve the cleared equation (quadratic)",
                    "Substitute each solution into original equation",
                    "Check if any denominators become zero",
                    "Verify both sides are equal",
                    "Reject any that fail either test"
                ],
                whyTheyOccur: [
                    "Multiplying by zero is undefined",
                    "Domain restrictions of original equation",
                    "Squaring or multiplying by variable expressions"
                ],
                prevention: [
                    "Identify domain restrictions before solving",
                    "Always check solutions in original equation",
                    "Never divide or multiply by zero",
                    "Be especially careful with equations having x in denominators"
                ]
            },

            lcd_strategy: {
                title: "LCD Strategy for Rational Equations",
                concepts: [
                    "LCD (Least Common Denominator) is key to clearing fractions",
                    "Find LCD of all denominators before multiplying",
                    "Multiply EVERY term by LCD",
                    "Simplify to eliminate all fractions"
                ],
                theory: "The LCD method transforms a rational equation into a polynomial equation (often quadratic) that's easier to solve.",
                findingLCD: {
                    "Numerical denominators": "Find LCM of numbers",
                    "Variable denominators": "Take product if distinct, or highest power if repeated",
                    "Factored denominators": "Include each factor to highest power appearing",
                    "Example": "LCD of x, (x-2), and (x+3) is x(x-2)(x+3)"
                },
                multiplicationProcess: [
                    "Write LCD clearly",
                    "Distribute LCD to every term (including those without fractions)",
                    "Cancel common factors in each term",
                    "Simplify resulting polynomial equation"
                ],
                commonErrors: [
                    "Forgetting to multiply ALL terms by LCD",
                    "Incorrect LCD calculation",
                    "Mistakes in canceling",
                    "Forgetting to distribute LCD through parentheses"
                ]
            },

            quadratic_solving_methods: {
                title: "Solving the Resulting Quadratic",
                concepts: [
                    "After clearing fractions, solve the quadratic",
                    "Methods: factoring, completing square, quadratic formula",
                    "Choose method based on equation structure",
                    "All methods give same solutions (if done correctly)"
                ],
                methods: {
                    factoring: {
                        when: "Quadratic factors nicely",
                        process: "ax² + bx + c = (mx + p)(nx + q) = 0",
                        advantage: "Fast and intuitive",
                        limitation: "Only works when factorable"
                    },
                    quadraticFormula: {
                        when: "Always works",
                        formula: "x = (-b ± √(b² - 4ac))/(2a)",
                        advantage: "Guaranteed to work",
                        limitation: "Can be computationally intensive"
                    },
                    completingSquare: {
                        when: "Want to see vertex form or derive formula",
                        process: "Convert to (x - h)² = k form",
                        advantage: "Shows structure clearly",
                        limitation: "More steps than other methods"
                    }
                },
                discriminantAnalysis: {
                    "b² - 4ac > 0": "Two distinct real solutions",
                    "b² - 4ac = 0": "One repeated real solution",
                    "b² - 4ac < 0": "Two complex solutions (not relevant for most rational equation contexts)"
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
                warningBg: '#fff3cd',
                warningText: '#856404'
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
                warningBg: '#ffeaa7',
                warningText: '#d63031'
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
            'perpendicular': '⊥', 'parallel': '∥', 'times': '×', 'divide': '÷'
        };
    }

    initializeRationalToQuadraticSolvers() {
        this.rationalTypes = {
            simple_rational_sum: {
                patterns: [
                    /(\d+)\/x\s*\+\s*(\d+)\/x\s*=\s*(\d+)/,
                    /a\/x\s*\+\s*b\/x/i
                ],
                solver: this.solveSimpleRationalSum.bind(this),
                name: 'Simple Rational Sum (Same Denominator)',
                category: 'simple_rational',
                description: 'Solves a/x + b/x = c'
            },

            reciprocal_sum: {
                patterns: [
                    /1\/x\s*\+\s*1\/\(x[+-]\d+\)\s*=/,
                    /reciprocal.*sum/i
                ],
                solver: this.solveReciprocalSum.bind(this),
                name: 'Sum of Reciprocals',
                category: 'reciprocal',
                description: 'Solves 1/x + 1/(x±k) = c'
            },

            work_rate_combined: {
                patterns: [
                    /work.*together/i,
                    /combined.*rate/i,
                    /1\/t1\s*\+\s*1\/t2/i
                ],
                solver: this.solveWorkRate.bind(this),
                name: 'Work Rate Problem',
                category: 'work_rate',
                description: 'Two entities working together'
            },

            distance_rate_rational: {
                patterns: [
                    /distance.*rate.*time/i,
                    /upstream.*downstream/i,
                    /round.*trip/i
                ],
                solver: this.solveDistanceRateRational.bind(this),
                name: 'Distance-Rate-Time (Rational)',
                category: 'distance_rate',
                description: 'Problems involving d/r = t with varying rates'
            },

            proportion_quadratic: {
                patterns: [
                    /\(.*x.*\)\/\(.*x.*\)\s*=\s*\(.*x.*\)\/\(.*x.*\)/,
                    /proportion.*quadratic/i
                ],
                solver: this.solveProportionQuadratic.bind(this),
                name: 'Proportion Leading to Quadratic',
                category: 'proportion',
                description: 'Complex proportions with variables'
            },

            literal_rational: {
                patterns: [
                    /solve.*for.*[a-z]/i,
                    /1\/f\s*=\s*1\/.*\+\s*1\//i,
                    /lens.*equation/i
                ],
                solver: this.solveLiteralRational.bind(this),
                name: 'Literal Rational Equation',
                category: 'literal',
                description: 'Solve for one variable in terms of others'
            },

            complex_rational: {
                patterns: [
                    /\/.*\/.*=/,
                    /complex.*fraction/i
                ],
                solver: this.solveComplexRational.bind(this),
                name: 'Complex Rational Equation',
                category: 'complex',
                description: 'Fractions within fractions'
            },

            general_rational_quadratic: {
                patterns: [
                    /rational.*quadratic/i,
                    /.*/  // Catch-all
                ],
                solver: this.solveGeneralRationalQuadratic.bind(this),
                name: 'General Rational to Quadratic',
                category: 'general',
                description: 'General rational equation leading to quadratic'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            lcd_calculation: {
                'Finding LCD': [
                    'Multiplying all denominators instead of finding LCM',
                    'Missing a factor in the LCD',
                    'Incorrectly factoring denominators'
                ],
                'Multiplying by LCD': [
                    'Forgetting to multiply all terms',
                    'Not distributing LCD through parentheses',
                    'Errors in canceling common factors'
                ]
            },
            clearing_fractions: {
                'Distribution errors': [
                    'Not multiplying every term by LCD',
                    'Forgetting terms without fractions',
                    'Incorrect simplification after multiplying'
                ],
                'Cancellation errors': [
                    'Canceling incorrectly',
                    'Not fully simplifying after canceling',
                    'Missing opportunities to cancel'
                ]
            },
            quadratic_solving: {
                'Factoring errors': [
                    'Incorrect factorization',
                    'Missing negative signs',
                    'Not setting each factor equal to zero'
                ],
                'Formula errors': [
                    'Sign errors in quadratic formula',
                    'Incorrect discriminant calculation',
                    'Arithmetic errors under square root'
                ]
            },
            verification: {
                'Extraneous solutions': [
                    'Not checking solutions in original equation',
                    'Missing denominators that become zero',
                    'Accepting invalid solutions'
                ],
                'Substitution errors': [
                    'Arithmetic mistakes when checking',
                    'Not checking both solutions',
                    'Forgetting to check domain restrictions'
                ]
            }
        };

        this.errorPrevention = {
            lcd_strategy: {
                reminder: 'Write out LCD explicitly and multiply each term carefully',
                method: 'Check by substituting a test value after clearing'
            },
            distribution: {
                reminder: 'LCD must multiply EVERY term, including constants',
                method: 'Use parentheses to group terms before multiplying'
            },
            extraneous_check: {
                reminder: 'ALWAYS verify solutions in the original equation',
                method: 'Check each solution one at a time, systematically'
            },
            domain_restrictions: {
                reminder: 'Identify values that make denominators zero before solving',
                method: 'List restricted values at the start'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why clearing fractions creates quadratics and why we must check solutions',
                language: 'intuitive understanding of rational equations'
            },
            procedural: {
                focus: 'Step-by-step process for clearing fractions and solving',
                language: 'explicit algorithmic instructions'
            },
            visual: {
                focus: 'Graphical representation of rational functions and solutions',
                language: 'visual and geometric metaphors'
            },
            algebraic: {
                focus: 'Formal algebraic manipulation and properties',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple terms, avoiding technical jargon',
                detail: 'main steps only',
                examples: 'concrete numerical examples'
            },
            intermediate: {
                vocabulary: 'standard mathematical terminology',
                detail: 'key steps with brief explanations',
                examples: 'mix of numerical and algebraic'
            },
            ELI5: {
                vocabulary: 'simplest possible language with everyday analogies',
                detail: 'every small step explained with stories',
                examples: 'real-world scenarios and pictures',
                analogies: true,
                visualization: 'simple drawings and diagrams'
            },
            detailed: {
                vocabulary: 'comprehensive mathematical vocabulary',
                detail: 'thorough explanations with theoretical background',
                examples: 'abstract and generalized cases'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery with strategic questions',
                examples: 'carefully sequenced progression'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            parallel_resistors: {
                scenario: "Finding total resistance in parallel circuit",
                equation: "1/R_total = 1/R₁ + 1/R₂",
                examples: [
                    "Two resistors in parallel: 1/R = 1/6 + 1/8. Find R.",
                    "Total resistance is 12Ω. One resistor is 20Ω. Find the other."
                ],
                context: "Electrical circuits use reciprocal relationships for parallel components",
                leadsToquadratic: "When solving for one resistor in terms of total and other resistor"
            },
            
            lens_equation: {
                scenario: "Thin lens equation in optics",
                equation: "1/f = 1/d₀ + 1/dᵢ",
                examples: [
                    "Focal length is 10cm, object distance is 15cm. Find image distance.",
                    "Image forms at 20cm, object at 30cm. Find focal length."
                ],
                context: "Physics optics uses this relationship between focal length and distances",
                leadsToQuadratic: "When relationships between variables create quadratic forms"
            },

            work_together: {
                scenario: "Two workers completing a job",
                equation: "1/t₁ + 1/t₂ = 1/t_combined",
                examples: [
                    "Person A takes 6 hours alone, Person B takes 4 hours alone. How long together?",
                    "Together they finish in 2 hours. Person A alone takes 3 hours. How long for B alone?",
                    "Person B takes 2 hours longer than A. Together they finish in 2.4 hours. Find each time."
                ],
                context: "Work rate problems are fundamental in project planning and efficiency",
                leadsToQuadratic: "When one time is expressed in terms of the other (e.g., 'takes 2 hours longer')"
            },

            pipe_filling: {
                scenario: "Filling/draining tanks with multiple pipes",
                equation: "Rate_in - Rate_out = Net_rate",
                examples: [
                    "Inlet fills tank in 4 hours, outlet drains in 6 hours. Time to fill with both open?",
                    "Two pipes together fill in 3 hours. Separately, one takes 2 hours longer. Find each time."
                ],
                context: "Plumbing and fluid management problems",
                leadsToQuadratic: "When pipe times are related algebraically"
            },

            boat_current: {
                scenario: "Boat traveling upstream and downstream",
                equation: "d/(r-c) + d/(r+c) = total_time",
                examples: [
                    "Boat speed in still water 20 mph, current 4 mph. Travel 40 miles upstream and back. Total time?",
                    "Round trip of 60 miles takes 5 hours. Current is 3 mph. Find boat speed in still water."
                ],
                context: "Navigation problems accounting for current or wind",
                leadsToQuadratic: "When solving for boat speed given total time and current"
            },

            average_speed: {
                scenario: "Average speed over multiple segments",
                equation: "Average = Total_Distance / Total_Time",
                examples: [
                    "Drive 60 miles at speed v, return at v+10. Average speed is 50 mph. Find v.",
                    "Trip of 100 miles at one speed, return at different speed, average 40 mph."
                ],
                context: "Travel planning and time estimation",
                leadsToQuadratic: "Relating individual speeds to average speed"
            },

            mixture_concentration: {
                scenario: "Mixing solutions of different concentrations",
                equation: "Amount₁/Volume₁ + Amount₂/Volume₂ = Final_concentration",
                examples: [
                    "Mix x liters of 20% solution with (10-x) liters of 50% to get 35% solution.",
                    "Two solutions mixed to get specific concentration with volume constraint."
                ],
                context: "Chemistry, pharmacy, manufacturing",
                leadsToQuadratic: "When volume and concentration relationships create rational equations"
            },

            harmonic_mean: {
                scenario: "Harmonic mean of two values",
                equation: "H = 2/(1/a + 1/b) = 2ab/(a+b)",
                examples: [
                    "Harmonic mean of two numbers is 4.8. One number is 4. Find the other.",
                    "Two numbers differ by 3. Their harmonic mean is 5. Find the numbers."
                ],
                context: "Statistics, averaging rates (like speeds)",
                leadsToQuadratic: "When numbers are related and harmonic mean is given"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            simple_rational: {
                skills: [
                    'Finding LCD of fractions',
                    'Simplifying fractions',
                    'Basic algebra',
                    'Solving linear equations'
                ],
                priorKnowledge: [
                    'Fraction arithmetic',
                    'LCD vs GCF',
                    'Cross-multiplication'
                ],
                checkQuestions: [
                    "What is the LCD of 1/4 and 1/6?",
                    "Simplify: (2/3 + 3/4)",
                    "Solve: 2x + 5 = 13"
                ]
            },

            reciprocal: {
                skills: [
                    'Understanding reciprocals',
                    'Finding LCD with algebraic denominators',
                    'Expanding products',
                    'Solving quadratics'
                ],
                priorKnowledge: [
                    'Reciprocal concept (1/x)',
                    'Multiplying binomials',
                    'Quadratic formula or factoring'
                ],
                checkQuestions: [
                    "What is the reciprocal of 5?",
                    "What is LCD of 1/x and 1/(x+2)?",
                    "Solve: x² - 5x + 6 = 0"
                ]
            },

            work_rate: {
                skills: [
                    'Understanding rate concept',
                    'Setting up rate equations',
                    'Clearing fractions',
                    'Solving resulting quadratics'
                ],
                priorKnowledge: [
                    'Rate = 1/time relationship',
                    'Adding rates',
                    'Rational equations'
                ],
                checkQuestions: [
                    "If job takes 4 hours, what's the rate per hour?",
                    "Two rates 1/3 and 1/4. What's combined rate?",
                    "Set up equation: A does job in x hours, B in x+2 hours, together in 3 hours"
                ]
            },

            distance_rate: {
                skills: [
                    'Distance = Rate × Time',
                    'Time = Distance / Rate',
                    'Setting up equations with varying rates',
                    'Solving rational equations'
                ],
                priorKnowledge: [
                    'd = rt formula',
                    'Upstream/downstream concepts',
                    'Reciprocal relationships'
                ],
                checkQuestions: [
                    "If distance is 60 miles and rate is 30 mph, what's time?",
                    "Speed in still water 20 mph, current 5 mph. What's downstream speed?",
                    "Set up: Travel d miles at rate r, return at rate r+10, total time is t"
                ]
            },

            proportion: {
                skills: [
                    'Cross-multiplication',
                    'Expanding products',
                    'Solving quadratics',
                    'Checking solutions'
                ],
                priorKnowledge: [
                    'Proportion basics',
                    'FOIL or distributive property',
                    'Collecting like terms'
                ],
                checkQuestions: [
                    "Solve proportion: 3/4 = x/12",
                    "Expand: (x+2)(x+3)",
                    "If a/b = c/d, what does ad equal?"
                ]
            },

            literal: {
                skills: [
                    'Solving for a variable',
                    'Treating other variables as constants',
                    'Clearing fractions with multiple variables',
                    'Quadratic formula with parameters'
                ],
                priorKnowledge: [
                    'Literal equations',
                    'Isolating variables',
                    'Algebraic manipulation'
                ],
                checkQuestions: [
                    "Solve for w: P = 2l + 2w",
                    "Solve for x: ax + b = c",
                    "What does it mean to 'treat y as a constant'?"
                ]
            },

            extraneous: {
                skills: [
                    'Domain identification',
                    'Solution verification',
                    'Substitution',
                    'Recognizing invalid solutions'
                ],
                priorKnowledge: [
                    'Why we can't divide by zero',
                    'Domain restrictions',
                    'Checking solutions'
                ],
                checkQuestions: [
                    "What values make 1/x undefined?",
                    "What values make 1/(x-3) undefined?",
                    "Why must we check solutions in rational equations?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            fraction_clearing: {
                description: "Visualizing multiplication by LCD",
                analogy: "Like converting everything to a common currency before adding",
                visualization: "Show each fraction being multiplied by LCD, terms canceling",
                suitableFor: ['all_rational'],
                explanation: "LCD eliminates all denominators, leaving polynomial equation"
            },

            work_rate_diagram: {
                description: "Bar diagram showing work completed",
                analogy: "Filling a container at different rates",
                visualization: "Bars showing portion completed per unit time",
                suitableFor: ['work_rate'],
                explanation: "Visual representation of how rates add"
            },

            number_line_solutions: {
                description: "Solutions marked on number line with restrictions",
                analogy: "Finding valid parking spots (some spots are restricted)",
                visualization: "Number line with X's at restricted values, dots at solutions",
                suitableFor: ['all_rational'],
                explanation: "Shows which solutions are valid and which are extraneous"
            },

            graph_rational_function: {
                description: "Graph of rational function and solution line",
                analogy: "Finding where curve crosses a horizontal line",
                visualization: "Rational function graph with asymptotes and intersection points",
                suitableFor: ['all_rational'],
                explanation: "Solutions are x-values where function equals the constant"
            },

            lcd_tree: {
                description: "Factor tree for finding LCD",
                analogy: "Finding what all friends have in common",
                visualization: "Tree diagram showing prime factorization of each denominator",
                suitableFor: ['simple_rational', 'reciprocal'],
                explanation: "LCD includes each factor to highest power appearing"
            },

            extraneous_solution_check: {
                description: "Checklist for solution validation",
                analogy: "Security checkpoint - solutions must pass all checks",
                visualization: "Flowchart: Does it make denominator zero? Does it satisfy original equation?",
                suitableFor: ['all_rational'],
                explanation: "Systematic process to verify each solution"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "2/x + 3/x = 5",
                    solution: [1],
                    steps: [
                        "Combine: 5/x = 5",
                        "Multiply both sides by x: 5 = 5x",
                        "Divide by 5: x = 1",
                        "Check: 2/1 + 3/1 = 5 ✓"
                    ],
                    difficulty: "easy",
                    category: "simple_rational"
                },
                {
                    problem: "1/x + 1/(x+1) = 1/2",
                    solution: [1, -2],
                    steps: [
                        "LCD is 2x(x+1)",
                        "Multiply: 2(x+1) + 2x = x(x+1)",
                        "Expand: 2x + 2 + 2x = x² + x",
                        "Rearrange: x² - 3x - 2 = 0... wait, let me recalculate",
                        "Actually: 4x + 2 = x² + x",
                        "x² - 3x - 2 = 0",
                        "Solve using quadratic formula"
                    ],
                    difficulty: "easy",
                    category: "reciprocal"
                }
            ],

            intermediate: [
                {
                    problem: "Person A completes job in 6 hours, Person B in 4 hours. Time together?",
                    solution: [2.4],
                    steps: [
                        "Rate_A = 1/6, Rate_B = 1/4",
                        "Combined: 1/6 + 1/4 = 1/t",
                        "LCD is 12: 2/12 + 3/12 = 1/t",
                        "5/12 = 1/t",
                        "t = 12/5 = 2.4 hours"
                    ],
                    difficulty: "medium",
                    category: "work_rate"
                },
                {
                    problem: "Boat speed 15 mph in still water, current 3 mph. Travel 36 miles upstream and back. Total time?",
                    solution: [5],
                    steps: [
                        "Upstream speed: 15 - 3 = 12 mph",
                        "Downstream speed: 15 + 3 = 18 mph",
                        "Time = 36/12 + 36/18",
                        "= 3 + 2 = 5 hours"
                    ],
                    difficulty: "medium",
                    category: "distance_rate"
                }
            ],

            advanced: [
                {
                    problem: "One worker takes 3 hours longer than another. Together they finish in 2 hours. Find each time.",
                    solution: [3, 6],
                    steps: [
                        "Let faster worker time = t hours",
                        "Slower worker time = t + 3 hours",
                        "1/t + 1/(t+3) = 1/2",
                        "LCD: 2t(t+3)",
                        "2(t+3) + 2t = t(t+3)",
                        "2t + 6 + 2t = t² + 3t",
                        "t² - t - 6 = 0",
                        "(t-3)(t+2) = 0",
                        "t = 3 or t = -2",
                        "Reject negative: t = 3 hours (faster), t+3 = 6 hours (slower)"
                    ],
                    difficulty: "hard",
                    category: "work_rate"
                },
                {
                    problem: "Solve for x: 1/a + 1/b = 1/x",
                    solution: ["x = ab/(a+b)"],
                    steps: [
                        "Multiply by LCD: abx",
                        "bx + ax = ab",
                        "x(a + b) = ab",
                        "x = ab/(a+b)"
                    ],
                    difficulty: "hard",
                    category: "literal"
                }
            ],

            byMethod: {
                simple_rational: [
                    { problem: "3/x + 2/x = 10", solution: [0.5] },
                    { problem: "5/x - 1/x = 2", solution: [2] }
                ],
                reciprocal_sum: [
                    { problem: "1/x + 1/(x+2) = 3/4", solution: [2, -8/3] },
                    { problem: "1/x + 1/(x-3) = 1/2", solution: [6, 1] }
                ],
                work_rate: [
                    { problem: "A: 5 hrs, B: 3 hrs. Together?", solution: [1.875] },
                    { problem: "Together: 4 hrs. A alone: 6 hrs. B alone?", solution: [12] }
                ],
                extraneous: [
                    { problem: "1/(x-2) + 1/(x+2) = 4/(x²-4)", solution: "No solution (x=1 is extraneous)" },
                    { problem: "x/(x-1) = 1 + 1/(x-1)", solution: "No solution (x=1 makes denominator 0)" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            lcd_multiply_all: {
                misconception: "Only multiplying numerators by LCD, not all terms",
                reality: "LCD must multiply EVERY term in the equation, even those without fractions",
                correctiveExample: "For 2/x + 3 = 5, multiply ALL terms by x: 2 + 3x = 5x (not just 2 + 3 = 5x)",
                commonIn: ['all_types']
            },

            canceling_prematurely: {
                misconception: "Canceling x from numerator and denominator across equals sign",
                reality: "Can only cancel common factors within a single fraction, not across equation",
                correctiveExample: "x/2 = 3/x does NOT simplify to 1/2 = 3 by 'canceling x'",
                commonIn: ['simple_rational', 'proportion']
            },

            extraneous_acceptance: {
                misconception: "Accepting all solutions from quadratic without checking",
                reality: "Must verify each solution in original equation; some may be extraneous",
                correctiveExample: "For 1/(x-2) = 1, solving gives x=3 and x=2. But x=2 makes denominator 0, so only x=3 is valid",
                commonIn: ['all_types']
            },

            reciprocal_confusion: {
                misconception: "Thinking 1/a + 1/b = 1/(a+b)",
                reality: "1/a + 1/b = (a+b)/(ab), not 1/(a+b)",
                correctiveExample: "1/2 + 1/3 = 5/6, not 1/5",
                commonIn: ['reciprocal', 'work_rate']
            },

            domain_ignorance: {
                misconception: "Not identifying domain restrictions before solving",
                reality: "Must identify which values make denominators zero before starting",
                correctiveExample: "For equation with denominator (x-3), note x≠3 at the start",
                commonIn: ['all_types']
            },

            quadratic_formula_signs: {
                misconception: "Sign errors in quadratic formula, especially with negative b",
                reality: "Formula is x = (-b ± √(b²-4ac))/(2a); watch signs carefully",
                correctiveExample: "For x² - 5x + 6 = 0, it's x = (5 ± √(25-24))/2, not (-5 ± ...)",
                commonIn: ['all_types_after_clearing']
            },

            work_rate_setup: {
                misconception: "Confusing rate and time in work problems",
                reality: "If time to complete is t, then rate is 1/t jobs per unit time",
                correctiveExample: "Takes 4 hours → rate is 1/4 per hour, not 4 per hour",
                commonIn: ['work_rate']
            },

            proportion_cross_multiply: {
                misconception: "Incorrect cross-multiplication with complex expressions",
                reality: "Must multiply entire numerator by entire denominator",
                correctiveExample: "(x+1)/(x-1) = 2/3 gives 3(x+1) = 2(x-1), must distribute",
                commonIn: ['proportion']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            clearing_fractions: {
                analogy: "Converting foreign currencies to common currency",
                explanation: "Just like converting euros, yen, and dollars all to dollars before adding, we multiply by LCD to convert all fractions to whole numbers",
                suitableFor: ['all_types'],
                ELI5: "Imagine you have money from different countries. Before you can add it up, you need to change it all to the same type of money. That's what LCD does - it changes all the fractions to the same 'money' so we can work with them!"
            },

            extraneous_solutions: {
                analogy: "Locked doors in a building",
                explanation: "When we clear fractions, we're like opening extra pathways that weren't in the original building. Some lead to valid rooms (solutions), others lead to locked doors (values that make denominators zero)",
                suitableFor: ['all_types'],
                ELI5: "Imagine you're looking for treasure. The map shows some spots marked with X. But when you get there, some have 'Do Not Enter' signs (making denominator zero). Those are trick spots - not real treasure!"
            },

            work_together: {
                analogy: "Filling a pool with multiple hoses",
                explanation: "Each hose fills at its own rate. Together, the rates add up, filling the pool faster",
                suitableFor: ['work_rate'],
                ELI5: "If one hose fills a pool in 4 hours, it fills 1/4 of the pool each hour. Another hose fills 1/3 per hour. Together they fill 1/4 + 1/3 = 7/12 of the pool each hour!"
            },

            reciprocals: {
                analogy: "Flipping fractions upside down",
                explanation: "The reciprocal of a number is 1 divided by that number, like flipping a fraction",
                suitableFor: ['reciprocal', 'work_rate'],
                ELI5: "If you have 2/3 of a pizza, flipping it upside down gives you 3/2. The reciprocal of 5 is 1/5. It's like looking at the fraction in a mirror!"
            },

            lcd_finding: {
                analogy: "Finding the smallest box that fits all items",
                explanation: "LCD is like finding the smallest container that can hold groups of different sizes",
                suitableFor: ['all_types'],
                ELI5: "Imagine you have boxes of 4 and boxes of 6. What's the smallest size that can hold groups of both? 12! That's like finding LCD."
            },

            boat_in_current: {
                analogy: "Walking on a moving sidewalk",
                explanation: "Your speed changes depending on whether you walk with or against the sidewalk's motion",
                suitableFor: ['distance_rate'],
                ELI5: "If you walk at 3 mph and the sidewalk moves at 1 mph with you, you're going 4 mph. Against it, you're only going 2 mph. That's like a boat in a current!"
            },

            harmonic_mean: {
                analogy: "Average speed that accounts for time spent",
                explanation: "Harmonic mean weights values by reciprocals, good for rates and speeds",
                suitableFor: ['distance_rate', 'work_rate'],
                ELI5: "If you drive to school at 30 mph and back at 60 mph, you didn't average 45 mph! The harmonic mean (40 mph) is the true average because you spent more time going slower."
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            simple_rational: {
                level1: "What's common about the denominators?",
                level2: "Can you combine fractions with the same denominator?",
                level3: "Combine the fractions on one side, then clear the denominator",
                level4: "Add numerators: ({a} + {b})/x = {c}, so {a}+{b} = {c}x, therefore x = ({a}+{b})/{c}"
            },

            reciprocal_sum: {
                level1: "What's the LCD of these fractions?",
                level2: "The denominators are different. Find LCD and multiply all terms by it.",
                level3: "LCD is x(x±k). Multiply every term by this LCD.",
                level4: "After multiplying by LCD and simplifying, you'll get a quadratic. Solve it and check both solutions."
            },

            work_rate: {
                level1: "If someone completes a job in 5 hours, what fraction do they complete in 1 hour?",
                level2: "Individual rate = 1/(time alone). Combined rate = sum of rates.",
                level3: "Set up: 1/t₁ + 1/t₂ = 1/t_combined, then clear fractions",
                level4: "Find LCD, multiply all terms, solve resulting equation (may be quadratic if times are related)"
            },

            distance_rate: {
                level1: "What's the relationship between distance, rate, and time?",
                level2: "Time = Distance/Rate. Set up equation with this relationship.",
                level3: "For each leg of trip: time = distance/rate. Total time = sum of leg times.",
                level4: "Set up equation with d/r terms, clear fractions by multiplying by LCD, solve resulting equation"
            },

            extraneous_check: {
                level1: "Why might a solution not work in the original equation?",
                level2: "Check: does this value make any denominator equal to zero?",
                level3: "Substitute the solution back into the original equation (before clearing fractions)",
                level4: "For each solution: 1) Check if it makes any denominator 0. 2) Substitute into original and verify both sides equal. Reject if either fails."
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Find the LCD of 1/x and 1/(x+3)",
                    answer: "x(x+3)",
                    assesses: "lcd_with_variables",
                    difficulty: "basic"
                },
                {
                    question: "Solve: 2/x + 3/x = 5",
                    answer: "x = 1",
                    assesses: "simple_rational",
                    difficulty: "basic"
                },
                {
                    question: "Solve: 1/x + 1/(x+2) = 3/4",
                    answer: "x = 2 or x = -8/3",
                    assesses: "reciprocal_sum",
                    difficulty: "intermediate"
                },
                {
                    question: "Worker A: 6 hrs alone. Worker B: 4 hrs alone. Time together?",
                    answer: "2.4 hours",
                    assesses: "work_rate",
                    difficulty: "intermediate"
                },
                {
                    question: "Which solutions to check: those from the quadratic, or only those that don't make denominators zero?",
                    answer: "Check all from quadratic, reject those making denominators zero",
                    assesses: "extraneous_solutions",
                    difficulty: "conceptual"
                }
            ],

            formative: [
                {
                    question: "What's the first step to solve 1/x + 1/(x-2) = 1/3?",
                    options: ["Cross multiply", "Find LCD", "Combine fractions", "Solve for x"],
                    correct: "Find LCD",
                    explanation: "Always find LCD first to clear all fractions at once"
                },
                {
                    question: "LCD of 1/x, 1/(x+1), and 1/(x-1) is:",
                    options: ["x(x+1)(x-1)", "x+1+x-1", "x²-1", "x"],
                    correct: "x(x+1)(x-1)",
                    explanation: "LCD includes each distinct factor"
                },
                {
                    question: "Why must we check solutions in rational equations?",
                    options: [
                        "To practice algebra",
                        "Clearing fractions can introduce extraneous solutions",
                        "The quadratic formula isn't reliable",
                        "We might have arithmetic errors"
                    ],
                    correct: "Clearing fractions can introduce extraneous solutions",
                    explanation: "Multiplying by variable expressions can create false solutions"
                },
                {
                    question: "If person A works at rate 1/5 and person B at rate 1/4, combined rate is:",
                    options: ["1/9", "1/20", "9/20", "20/9"],
                    correct: "9/20",
                    explanation: "Add rates: 1/5 + 1/4 = 4/20 + 5/20 = 9/20"
                }
            ],

            summative: [
                {
                    question: "Solve completely: 1/x + 1/(x+4) = 1/3. Show all work and check for extraneous solutions.",
                    answer: "x = 2 or x = -6",
                    showsWork: true,
                    rubric: {
                        find_lcd: 1,
                        clear_fractions: 2,
                        form_quadratic: 1,
                        solve_quadratic: 2,
                        check_both_solutions: 2,
                        reject_extraneous: 1,
                        final_answer: 1
                    }
                },
                {
                    question: "One pipe fills pool in x hours, another in (x+3) hours. Together in 2 hours. Find x.",
                    answer: "x = 3 hours",
                    showsWork: true,
                    rubric: {
                        setup_rate_equation: 2,
                        find_lcd: 1,
                        clear_and_simplify: 2,
                        solve_quadratic: 2,
                        interpret_context: 1,
                        verify: 2
                    }
                }
            ],

            byDifficulty: {
                easy: [
                    "3/x + 2/x = 10",
                    "1/x = 5",
                    "2/x - 1/x = 4",
                    "1/x + 1/(x+1) = 1"
                ],
                medium: [
                    "1/x + 1/(x+2) = 3/4",
                    "2/(x-1) + 3/(x+2) = 5",
                    "Person A: 5 hrs, B: 3 hrs. Together?",
                    "(x+1)/(x-1) = (x+2)/(x-2)"
                ],
                hard: [
                    "One worker takes 2 hours longer than other. Together: 2.4 hours. Find each.",
                    "1/(x-1) + 2/(x+1) = 3/(x²-1)",
                    "Boat speed v in still water, current 3 mph. 40 miles round trip in 5 hours. Find v.",
                    "Solve for x: 1/a + 1/b = 1/x (literal equation)"
                ]
            },

            byObjective: {
                canFindLCD: [
                    "Find LCD of: 1/x and 1/(x+5)",
                    "Find LCD of: 2/(x-3) and 5/(x+2)",
                    "Find LCD of: 1/x, 1/(x²), and 1/(x+1)"
                ],
                canClearFractions: [
                    "Clear fractions: 1/x + 2/x = 5",
                    "Clear fractions: 1/x + 1/(x+2) = 1/3",
                    "Clear fractions: 2/(x-1) - 3/(x+4) = 1"
                ],
                canSolveQuadratic: [
                    "After clearing: x² - 3x + 2 = 0",
                    "After clearing: 2x² + 5x - 3 = 0",
                    "After clearing: x² - 7x + 12 = 0"
                ],
                canCheckExtraneous: [
                    "Check if x=2 works in: 1/(x-2) + 1/x = 5",
                    "Which solutions are valid: x=3, x=-1 for equation 1/(x+1) + 1/(x-3) = 2",
                    "Verify solutions in: 1/x + 1/(x-5) = 6/x(x-5)"
                ],
                canSolveWorkRate: [
                    "A: 6 hours, B: 4 hours. Together?",
                    "Together: 3 hours. A alone: 5 hours. B alone?",
                    "B takes 2 hours more than A. Together: 2.4 hours. Find each."
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "same_denominators": "Combine fractions directly, then solve",
                "different_numerical_denominators": "Find numerical LCD, clear fractions",
                "algebraic_denominators": "Find LCD with variables, multiply all terms, solve resulting quadratic",
                "work_rate_problem": "Set up rate equation: 1/t₁ + 1/t₂ = 1/t_combined",
                "distance_rate_problem": "Set up time equation: d/r₁ + d/r₂ = total time",
                "proportion": "Cross multiply to clear fractions",
                "literal_equation": "Treat other variables as constants, solve for target variable"
            },

            whenToUseWhat: {
                factoring: "When quadratic factors easily (small integers)",
                quadratic_formula: "When factoring is difficult or impossible",
                completing_square: "When deriving formula or need vertex form",
                graphing: "To visualize and estimate solutions",
                checking_solutions: "ALWAYS, to identify extraneous solutions"
            },

            methodSelection: {
                factorsToConsider: [
                    "Complexity of denominators",
                    "Whether denominators share factors",
                    "Presence of word problem context",
                    "Whether equation is literal or numerical",
                    "Number and type of solutions expected"
                ],
                generalApproach: [
                    "1. Identify domain restrictions (denominators ≠ 0)",
                    "2. Find LCD of all denominators",
                    "3. Multiply every term by LCD",
                    "4. Simplify to quadratic form",
                    "5. Solve quadratic using appropriate method",
                    "6. Check each solution in original equation",
                    "7. Reject extraneous solutions"
                ]
            },

            optimizationTips: {
                "Factor denominators first": "Factoring helps identify LCD more easily",
                "Cancel before multiplying": "Simplify fractions before finding LCD when possible",
                "Organize work clearly": "Keep track of LCD multiplication for each term",
                "Check as you go": "Verify intermediate steps to catch errors early",
                "List domain restrictions first": "Know which values to reject before solving"
            },

            commonPatterns: {
                "1/x + 1/(x+k) = c": "LCD is x(x+k), results in quadratic",
                "a/x + b/x = c": "Combine to (a+b)/x = c, solve directly",
                "Work rate: 1/t₁ + 1/t₂ = 1/t": "Standard work problem setup",
                "Distance: d/r₁ + d/r₂ = t": "Standard distance problem setup",
                "(expr₁)/(expr₂) = (expr₃)/(expr₄)": "Cross multiply and solve"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Simple Rational Sprint",
                    timeLimit: 120,
                    problems: [
                        "2/x + 3/x = 5",
                        "4/x - 1/x = 6",
                        "5/x + 2/x = 14",
                        "6/x = 3",
                        "1/x = 0.25"
                    ]
                },
                {
                    name: "Work Rate Challenge",
                    timeLimit: 180,
                    problems: [
                        "A: 6 hrs, B: 4 hrs. Together?",
                        "A: 5 hrs, B: 10 hrs. Together?",
                        "Together: 3 hrs. A alone: 5 hrs. B?",
                        "A: 8 hrs, B: 12 hrs. Together?"
                    ]
                }
            ],

            puzzles: [
                {
                    name: "Mystery Rates",
                    problem: "Two workers together complete job in 4 hours. One takes 6 hours alone. How long does other take?",
                    solve: "Set up rate equation and solve",
                    solution: "12 hours"
                },
                {
                    name: "Extraneous Detective",
                    problem: "Equation: 1/(x-2) + 1/(x+2) = 4/(x²-4). One solution is extraneous. Find it.",
                    constraint: "Must explain why it's extraneous",
                    solution: "After solving, one value makes x²-4 = 0, so it's extraneous"
                },
                {
                    name: "LCD Challenge",
                    problem: "Find LCD of: 1/(x²-4), 1/(x-2), 1/(x+2)",
                    hint: "Factor first",
                    solution: "LCD = x²-4 = (x-2)(x+2)"
                }
            ],

            applications: [
                {
                    scenario: "Electrical Parallel Resistors",
                    problem: "Two resistors in parallel: total resistance 6Ω. One resistor is 10Ω. Find the other.",
                    equation: "1/6 = 1/10 + 1/R",
                    solution: "R = 15Ω"
                },
                {
                    scenario: "Filling Pool",
                    problem: "Inlet fills pool in 6 hours, outlet drains in 8 hours. If both open, time to fill?",
                    equation: "1/6 - 1/8 = 1/t",
                    solution: "t = 24 hours"
                },
                {
                    scenario: "Average Speed",
                    problem: "Drive 60 miles at v mph, return at v+20 mph. Average speed 48 mph. Find v.",
                    equation: "60/v + 60/(v+20) = (120/48)",
                    solution: "v = 40 mph"
                },
                {
                    scenario: "Lens Equation",
                    problem: "Lens focal length 10cm. Object 15cm from lens. Find image distance.",
                    equation: "1/10 = 1/15 + 1/d",
                    solution: "d = 30cm"
                }
            ],

            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "1/x + 1/(x+2) = 1/2",
                        "LCD = x + x + 2 = 2x + 2", // ERROR
                        "Multiply: 2x+2 + 2x+2 = x(x+2)",
                        "..."
                    ],
                    error: "LCD is x(x+2), not 2x+2",
                    correct: "LCD = x(x+2)"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "2/x + 3/x = 5",
                        "5/x = 5",
                        "5 = 5x",
                        "x = 5/5 = 1",
                        "Check: 2/1 + 3/1 = 5 ✓"
                        // Actually correct! Testing if student notices
                    ],
                    error: "No error - this is correct!",
                    correct: "Solution is valid"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "1/(x-3) + 2 = 5",
                        "Multiply by LCD = x-3:",
                        "1 + 2 = 5(x-3)", // ERROR: forgot to multiply 2 by (x-3)
                        "1 + 2 = 5x - 15",
                        "18 = 5x",
                        "x = 3.6"
                    ],
                    error: "Didn't multiply ALL terms by LCD. Should be: 1 + 2(x-3) = 5(x-3)",
                    correct: "1 + 2(x-3) = 5(x-3), giving x = -4/3"
                },
                {
                    name: "Extraneous Solution",
                    incorrectWork: [
                        "1/(x-2) = 1/(x+2) + 4/(x²-4)",
                        "LCD = x²-4:",
                        "(x+2) = (x-2) + 4",
                        "x + 2 = x + 2", // Identity!
                        "0 = 0",
                        "All real numbers are solutions"
                    ],
                    error: "Can't have x=2 or x=-2 (make denominators 0). Actually no solution.",
                    correct: "No solution - equation is identity but domain excludes solutions"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveRationalToQuadraticProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseRationalProblem(equation, scenario, parameters, problemType, context);
            this.currentSolution = this.solveRationalProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateRationalSteps(this.currentProblem, this.currentSolution);
            this.generateRationalGraphData();
            this.generateRationalWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionValue: this.currentSolution?.solutions,
                validSolutions: this.currentSolution?.validSolutions,
                extraneousSolutions: this.currentSolution?.extraneousSolutions
            };

        } catch (error) {
            throw new Error(`Failed to solve rational to quadratic problem: ${error.message}`);
        }
    }

    parseRationalProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        if (problemType && this.rationalTypes[problemType]) {
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

        // Auto-detect
        for (const [type, config] of Object.entries(this.rationalTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractRationalParameters(match, type);

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

        // Default
        return {
            originalInput: equation || scenario,
            cleanInput: cleanInput,
            type: 'general_rational_quadratic',
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
            .trim();
    }

    extractRationalParameters(match, type) {
        const params = {};
        if (!match) return params;

        switch(type) {
            case 'simple_rational_sum':
                params.a = parseFloat(match[1]) || 1;
                params.b = parseFloat(match[2]) || 1;
                params.c = parseFloat(match[3]) || 1;
                break;
        }

        return params;
    }

    solveRationalProblem_Internal(problem) {
        const solver = this.rationalTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver for: ${problem.type}`);
        }
        return solver(problem);
    }

    // RATIONAL EQUATION SOLVERS
    solveSimpleRationalSum(problem) {
        const { a, b, c } = problem.parameters;
        const solution = (a + b) / c;

        return {
            equation: `${a}/x + ${b}/x = ${c}`,
            type: 'Simple Rational Sum',
            approach: 'Combine fractions with same denominator',
            combinedForm: `${a + b}/x = ${c}`,
            solutions: [solution],
            validSolutions: [solution],
            extraneousSolutions: [],
            verification: this.verifyRationalSolution(solution, problem),
            category: 'simple_rational'
        };
    }

    solveReciprocalSum(problem) {
        // Example: 1/x + 1/(x+k) = c
        // This is a placeholder - actual implementation would parse the equation
        return {
            type: 'Sum of Reciprocals',
            approach: 'Find LCD, multiply all terms, solve resulting quadratic',
            note: 'Results in quadratic equation',
            category: 'reciprocal'
        };
    }

    solveWorkRate(problem) {
        return {
            type: 'Work Rate Problem',
            approach: 'Set up rate equation: 1/t₁ + 1/t₂ = 1/t_combined',
            note: 'Clear fractions and solve resulting equation',
            category: 'work_rate'
        };
    }

    solveDistanceRateRational(problem) {
        return {
            type: 'Distance-Rate-Time Problem',
            approach: 'Use time = distance/rate for each segment',
            note: 'Sum of times equals total time; clear fractions',
            category: 'distance_rate'
        };
    }

    solveProportionQuadratic(problem) {
        return {
            type: 'Proportion to Quadratic',
            approach: 'Cross-multiply to clear fractions',
            note: 'Expand and simplify to quadratic form',
            category: 'proportion'
        };
    }

    solveLiteralRational(problem) {
        return {
            type: 'Literal Rational Equation',
            approach: 'Treat other variables as constants, solve for target variable',
            note: 'May require quadratic formula with parameters',
            category: 'literal'
        };
    }

    solveComplexRational(problem) {
        return {
            type: 'Complex Rational Equation',
            approach: 'Simplify complex fractions first, then solve',
            note: 'May involve multiple LCD operations',
            category: 'complex'
        };
    }

    solveGeneralRationalQuadratic(problem) {
        return {
            type: 'General Rational to Quadratic',
            approach: 'Find LCD, clear fractions, solve resulting quadratic',
            note: 'Always check for extraneous solutions',
            category: 'general'
        };
    }

    verifyRationalSolution(x, problem) {
        // Placeholder verification
        return {
            solution: x,
            isValid: true,
            makesValidDenominator: true
        };
    }

    // STEP GENERATION (similar structure to linear workbook but adapted for rational equations)
    generateRationalSteps(problem, solution) {
        let baseSteps = this.generateBaseRationalSteps(problem, solution);

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

    generateBaseRationalSteps(problem, solution) {
        const steps = [];

        // Step 1: Given equation
        steps.push({
            stepNumber: 1,
            step: 'Given rational equation',
            description: 'Start with the rational equation',
            expression: solution.equation || problem.cleanInput,
            reasoning: 'This is a rational equation that will lead to a quadratic when cleared',
            goalStatement: 'We will clear fractions by multiplying by LCD, then solve the resulting quadratic'
        });

        // Step 2: Identify domain restrictions
        steps.push({
            stepNumber: 2,
            step: 'Identify domain restrictions',
            description: 'Determine which values make denominators zero',
            reasoning: 'These values cannot be solutions',
            domainRestrictions: this.identifyDomainRestrictions(problem),
            note: 'We must exclude these values from our final answer'
        });

        // Step 3: Find LCD
        steps.push({
            stepNumber: 3,
            step: 'Find LCD',
            description: 'Find the least common denominator of all fractions',
            reasoning: 'LCD allows us to clear all fractions at once',
            lcd: this.findLCD(problem)
        });

        // Step 4: Multiply by LCD
        steps.push({
            stepNumber: 4,
            step: 'Multiply all terms by LCD',
            description: 'Multiply every term in the equation by the LCD',
            reasoning: 'This eliminates all denominators',
            note: 'Remember to multiply ALL terms, even those without fractions'
        });

        // Step 5: Simplify to quadratic
        steps.push({
            stepNumber: 5,
            step: 'Simplify to quadratic form',
            description: 'Expand and collect like terms',
            reasoning: 'This gives us a standard quadratic equation',
            form: 'ax² + bx + c = 0'
        });

        // Step 6: Solve quadratic
        steps.push({
            stepNumber: 6,
            step: 'Solve the quadratic equation',
            description: 'Use factoring, quadratic formula, or other method',
            reasoning: 'This gives potential solutions',
            note: 'These solutions must be checked in the original equation'
        });

        // Step 7: Check for extraneous solutions
        steps.push({
            stepNumber: 7,
            step: 'Check all solutions',
            description: 'Substitute each solution into the original equation',
            reasoning: 'Multiplying by variable expressions can introduce extraneous solutions',
            validSolutions: solution.validSolutions || [],
            extraneousSolutions: solution.extraneousSolutions || []
        });

        // Step 8: Final answer
        steps.push({
            stepNumber: 8,
            step: 'State final answer',
            description: 'List all valid solutions',
            expression: solution.validSolutions ? `x = ${solution.validSolutions.join(' or x = ')}` : 'See solution',
            finalAnswer: true
        });

        return steps;
    }

    identifyDomainRestrictions(problem) {
        // Placeholder - would need to parse denominators
        return ['x ≠ 0', 'Check specific denominators in actual equation'];
    }

    findLCD(problem) {
        // Placeholder - would need to analyze denominators
        return 'LCD of all denominators (depends on specific equation)';
    }

    // ENHANCED EXPLANATION METHODS (similar to linear workbook)
    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationRational(step, problem),
                procedural: this.getProceduralExplanationRational(step),
                visual: this.getVisualExplanationRational(step, problem),
                algebraic: this.getAlgebraicExplanationRational(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyRational(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsRational(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionRational(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionRational(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationRational(step, problem) {
        const conceptualExplanations = {
            'Given rational equation': 'A rational equation contains fractions with variables in denominators. Our goal is to eliminate these fractions.',
            'Identify domain restrictions': 'Denominators cannot be zero, so we must identify and exclude these values from our solution set.',
            'Find LCD': 'The LCD is the smallest expression that all denominators divide into evenly.',
            'Multiply all terms by LCD': 'Multiplying by LCD clears all fractions simultaneously, transforming the rational equation into a polynomial.',
            'Simplify to quadratic form': 'After clearing fractions and simplifying, we get a quadratic equation.',
            'Solve the quadratic equation': 'We use standard quadratic-solving techniques to find potential solutions.',
            'Check all solutions': 'Some solutions may be extraneous (introduced by clearing fractions), so we must verify each one.',
            'State final answer': 'Only solutions that satisfy the original equation and domain restrictions are valid.'
        };

        return conceptualExplanations[step.step] || 'This step advances us toward the solution.';
    }

    getProceduralExplanationRational(step) {
        const procedures = {
            'Find LCD': '1. Factor each denominator\n2. Include each unique factor\n3. Use highest power of each factor',
            'Multiply all terms by LCD': '1. Write LCD clearly\n2. Distribute to every term\n3. Cancel common factors\n4. Simplify',
            'Check all solutions': '1. Substitute into original equation\n2. Check if denominators become zero\n3. Verify both sides equal\n4. Reject if either fails'
        };

        return procedures[step.step] || 'Follow standard procedure for this step.';
    }

    getVisualExplanationRational(step, problem) {
        const visuals = {
            'Find LCD': 'Draw factor tree for each denominator, combine all unique factors',
            'Multiply all terms by LCD': 'Show LCD multiplying each term with cancellation arrows',
            'Check all solutions': 'Checklist with checkmarks for valid solutions, X for extraneous'
        };

        return visuals[step.step] || 'Visualize the algebraic process.';
    }

    getAlgebraicExplanationRational(step) {
        const algebraic = {
            'Multiply all terms by LCD': 'Multiplication Property of Equality: multiplying both sides by same nonzero expression',
            'Simplify to quadratic form': 'Distributive property and combining like terms',
            'Solve the quadratic equation': 'Quadratic formula: x = (-b ± √(b²-4ac))/(2a)'
        };

        return algebraic[step.step] || 'Apply standard algebraic principles.';
    }

    identifyKeyVocabularyRational(step) {
        const vocabulary = {
            'Given rational equation': ['rational equation', 'fraction', 'numerator', 'denominator', 'variable'],
            'Identify domain restrictions': ['domain', 'restriction', 'undefined', 'excluded value'],
            'Find LCD': ['LCD', 'least common denominator', 'factor', 'multiple'],
            'Multiply all terms by LCD': ['multiply', 'distribute', 'cancel', 'simplify'],
            'Simplify to quadratic form': ['quadratic', 'standard form', 'ax² + bx + c'],
            'Check all solutions': ['extraneous solution', 'verify', 'substitute', 'valid solution']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPromptsRational(step) {
        const prompts = {
            'Find LCD': {
                before: 'What are all the denominators in this equation?',
                during: 'Am I including each factor to its highest power?',
                after: 'Does this LCD contain all denominators as factors?'
            },
            'Check all solutions': {
                before: 'What were the domain restrictions I identified?',
                during: 'Does this value make any denominator zero?',
                after: 'Did both sides equal when I substituted?'
            }
        };

        return prompts[step.step] || {
            before: 'What is the goal of this step?',
            during: 'Am I being careful with my algebra?',
            after: 'Does my result make sense?'
        };
    }

    generateSelfCheckQuestionRational(step) {
        const questions = {
            'Identify domain restrictions': 'Have I found all values that make denominators zero?',
            'Find LCD': 'Does every denominator divide evenly into my LCD?',
            'Multiply all terms by LCD': 'Did I multiply EVERY term, including those without fractions?',
            'Check all solutions': 'Did I check each solution in the ORIGINAL equation?'
        };

        return questions[step.step] || 'Does this step seem correct?';
    }

    findRealWorldConnectionRational(step, problem) {
        const connections = {
            'work_rate': 'Like two hoses filling a pool - rates add up',
            'distance_rate': 'Like calculating trip times with varying speeds',
            'literal': 'Like electrical or optical formulas in physics'
        };

        return connections[problem.category] || 'Rational equations model many real-world relationships involving rates and reciprocals.';
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
                    reasoning: `After ${steps[i].step}, we proceed to ${steps[i + 1].step}`,
                    strategicThinking: `This moves us closer to our goal by ${steps[i + 1].reasoning}`
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We have completed: ${currentStep.step}`,
            nextGoal: `Next, we will: ${nextStep.step}`,
            why: `This is necessary to continue solving the equation`,
            howItHelps: `This brings us closer to the final answer`
        };
    }

    addErrorPrevention(step, problemType) {
        const category = this.rationalTypes[problemType]?.category || 'simple_rational';
        const relevantMistakes = this.commonMistakes[category];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: this.getRelevantMistakes(step.step, relevantMistakes),
                preventionTips: this.generatePreventionTipsRational(step),
                checkPoints: this.generateCheckPointsRational(step),
                warningFlags: this.identifyWarningFlagsRational(step, problemType)
            }
        };
    }

    getRelevantMistakes(stepName, mistakeDB) {
        if (!mistakeDB) return [];
        for (const [key, mistakes] of Object.entries(mistakeDB)) {
            if (stepName.toLowerCase().includes(key.toLowerCase())) {
                return mistakes;
            }
        }
        return [];
    }

    generatePreventionTipsRational(step) {
        const tips = {
            'Find LCD': ['Factor denominators first', 'Include each factor to highest power', 'Double-check by dividing LCD by each denominator'],
            'Multiply all terms by LCD': ['Write LCD explicitly', 'Multiply EVERY term', 'Show cancellation clearly'],
            'Check all solutions': ['Check domain restrictions first', 'Substitute carefully', 'Verify arithmetic']
        };

        return tips[step.step] || ['Work carefully', 'Check your work'];
    }

    generateCheckPointsRational(step) {
        return [
            'Did I complete this step correctly?',
            'Does my work make sense?',
            'Should I double-check my arithmetic?'
        ];
    }

    identifyWarningFlagsRational(step, problemType) {
        const warnings = {
            'Find LCD': ['Make sure LCD includes all denominators', 'Don\'t forget variable factors'],
            'Multiply all terms by LCD': ['Don\'t forget any terms', 'Cancel carefully'],
            'Check all solutions': ['Watch for extraneous solutions', 'Check domain restrictions']
        };

        return warnings[step.step] || [];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsRational(step),
                subSteps: this.breakIntoSubStepsRational(step),
                hints: this.generateProgressiveHintsRational(step, problem)
            }
        }));
    }

    generateGuidingQuestionsRational(step) {
        const questions = {
            'Find LCD': [
                'What are all the denominators?',
                'Can I factor them?',
                'What factors do they share?'
            ],
            'Check all solutions': [
                'Does this value make any denominator zero?',
                'What happens when I substitute this value?',
                'Do both sides of the equation equal?'
            ]
        };

        return questions[step.step] || ['What am I trying to accomplish?', 'How do I do this?'];
    }

    breakIntoSubStepsRational(step) {
        const subSteps = {
            'Find LCD': [
                'List all denominators',
                'Factor each denominator',
                'Identify unique factors',
                'Use highest power of each factor',
                'Write LCD'
            ],
            'Check all solutions': [
                'Take first solution',
                'Check if it makes any denominator zero',
                'Substitute into original equation',
                'Simplify both sides',
                'Verify they are equal',
                'Repeat for each solution'
            ]
        };

        return subSteps[step.step] || ['Understand', 'Execute', 'Verify'];
    }

    generateProgressiveHintsRational(step, problem) {
        const category = this.rationalTypes[problem.type]?.category || 'simple_rational';
        const hintSet = this.hints[category] || {};

        return {
            level1: hintSet.level1 || 'Think about what this step requires.',
            level2: hintSet.level2 || 'Consider the structure of rational equations.',
            level3: hintSet.level3 || 'Apply the standard procedure.',
            level4: hintSet.level4 || 'Execute the specific operation.'
        };
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationRational(step),
                analogy: this.findRelevantAnalogyRational(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description || ''),
                visualization: this.suggestVisualizationRational(step)
            }
        }));
    }

    generateELI5ExplanationRational(step) {
        const generateELI5ExplanationRational(step) {
        const ELI5Explanations = {
            'Given rational equation': "We have a math puzzle with fractions that have x in the bottom part. Our job is to find what number x should be!",
            'Identify domain restrictions': "Some numbers are 'forbidden' because they would make the bottom of a fraction become zero, and we can't divide by zero!",
            'Find LCD': "We need to find a 'common language' that all the fractions can speak. It's like finding a game that all your friends can play together!",
            'Multiply all terms by LCD': "Now we multiply everything by our common language. It's like translating all the fractions into regular numbers so they're easier to work with!",
            'Simplify to quadratic form': "After all that work, we get a simpler equation that looks like x² + something × x + another number = 0",
            'Solve the quadratic equation': "Now we use our quadratic-solving tricks to find possible answers!",
            'Check all solutions': "This is the detective part! We check each answer to see if it's a REAL answer or a TRICK answer that doesn't actually work.",
            'State final answer': "We tell everyone what x equals, but only the answers that really work!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our fraction puzzle!";
    }

    findRelevantAnalogyRational(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('all_types')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like solving a puzzle - each step gets us closer!";
    }

    convertToSimpleLanguage(description) {
        const simplifications = {
            'LCD': 'least common denominator (common bottom number)',
            'denominator': 'bottom number of fraction',
            'numerator': 'top number of fraction',
            'rational equation': 'equation with fractions',
            'domain restriction': 'forbidden value',
            'extraneous solution': 'fake answer that doesn\'t really work',
            'quadratic': 'equation with x²',
            'substitute': 'plug in',
            'verify': 'check',
            'coefficient': 'number next to x',
            'simplify': 'make simpler',
            'factor': 'break into pieces'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualizationRational(step) {
        const visualizations = {
            'Given rational equation': 'Draw the equation with boxes around each fraction',
            'Identify domain restrictions': 'Put big red X marks next to values that make denominators zero',
            'Find LCD': 'Draw a factor tree for each denominator, then circle all unique factors',
            'Multiply all terms by LCD': 'Show arrows from LCD to each term, with cancellation marks',
            'Simplify to quadratic form': 'Organize terms into boxes: x² terms, x terms, and plain numbers',
            'Check all solutions': 'Draw a checklist with ✓ for valid solutions and ✗ for extraneous ones',
            'State final answer': 'Circle the final valid solutions in green'
        };

        return visualizations[step.step] || 'Draw a picture to help understand this step';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const level = this.difficultyLevels[explanationLevel] || this.difficultyLevels.intermediate;
        
        return {
            adaptedDescription: this.adaptLanguageLevel(step.description || '', level),
            adaptedReasoning: this.adaptLanguageLevel(step.reasoning || '', level),
            complexityLevel: explanationLevel
        };
    }

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                'rational equation': 'equation with fractions',
                'denominator': 'bottom of fraction',
                'numerator': 'top of fraction',
                'LCD': 'common denominator',
                'domain restriction': 'value we can\'t use',
                'extraneous': 'fake',
                'quadratic': 'equation with x²',
                'coefficient': 'number with x'
            },
            intermediate: {
                'rational equation': 'rational equation',
                'denominator': 'denominator',
                'LCD': 'LCD',
                'extraneous': 'extraneous',
                'quadratic': 'quadratic'
            },
            ELI5: {
                'rational equation': 'fraction puzzle',
                'denominator': 'bottom number',
                'numerator': 'top number',
                'LCD': 'common language for fractions',
                'domain restriction': 'forbidden number',
                'extraneous solution': 'trick answer that doesn\'t work',
                'quadratic': 'equation with x times x',
                'solve': 'find the answer',
                'verify': 'check if it works'
            },
            detailed: {
                'rational equation': 'rational equation (equation with polynomial ratios)',
                'LCD': 'least common denominator (LCM of all denominators)',
                'domain restriction': 'domain restriction (values excluded from domain)',
                'extraneous solution': 'extraneous solution (algebraically valid but not in original domain)'
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

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the solution process`,
            progression: 'We are systematically working toward the final answer',
            relationship: 'Each step transforms the equation into a more solvable form'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.rationalTypes[problemType]?.category || 'simple_rational';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic algebra', 'Fraction arithmetic'];
    }

    // GRAPH GENERATION
    generateRationalGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.rationalTypes[type]?.category;

        if (category && this.currentSolution.validSolutions) {
            this.graphData = this.generateRationalGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateRationalGraph(problem, solution) {
        return {
            type: 'rational_function',
            validSolutions: solution.validSolutions || [],
            extraneousSolutions: solution.extraneousSolutions || [],
            domainRestrictions: this.identifyDomainRestrictions(problem),
            description: 'Graph shows rational function with solutions and asymptotes',
            visualization: 'Plot rational function with vertical asymptotes at domain restrictions'
        };
    }

    // WORKBOOK GENERATION
    generateRationalWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createDomainRestrictionsSection(),
            this.createEnhancedStepsSection(),
            this.createRationalLessonSection(),
            this.createSolutionSection(),
            this.createExtraneousSolutionsSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection(),
            this.createCommonMistakesSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Rational-to-Quadratic Mathematical Workbook',
            subtitle: 'Rational Equations Leading to Quadratics',
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
            ['Problem Type', this.rationalTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.rationalTypes[this.currentProblem.type]?.category || 'rational'],
            ['Equation', this.currentSolution?.equation || this.currentProblem.cleanInput],
            ['Description', this.currentProblem.scenario || 'Rational equation leading to quadratic']
        ];

        if (this.currentProblem.context && Object.keys(this.currentProblem.context).length > 0) {
            problemData.push(['', '']);
            problemData.push(['Context', '']);
            for (const [key, value] of Object.entries(this.currentProblem.context)) {
                problemData.push([key, value]);
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

        const category = this.rationalTypes[this.currentProblem.type]?.category;
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

    createDomainRestrictionsSection() {
        const domainData = [
            ['Domain Restrictions', 'Values that make denominators zero'],
            ['Why Important', 'These values cannot be solutions'],
            ['', ''],
            ['Restricted Values', this.identifyDomainRestrictions(this.currentProblem).join(', ')],
            ['', ''],
            ['Note', 'Any solution that equals a restricted value must be rejected as extraneous']
        ];

        return {
            title: 'Domain Analysis',
            type: 'domain',
            data: domainData
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
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.note) {
                stepsData.push(['Note', step.note]);
            }

            if (step.lcd) {
                stepsData.push(['LCD', step.lcd]);
            }

            if (step.domainRestrictions) {
                stepsData.push(['Domain Restrictions', step.domainRestrictions.join(', ')]);
            }

            if (step.validSolutions) {
                stepsData.push(['Valid Solutions', step.validSolutions.join(', ')]);
            }

            if (step.extraneousSolutions && step.extraneousSolutions.length > 0) {
                stepsData.push(['Extraneous Solutions', step.extraneousSolutions.join(', ')]);
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

            // Enhanced explanations
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Procedural', step.explanations.procedural]);
                stepsData.push(['Visual', step.explanations.visual]);
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

            // Self-check
            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            stepsData.push(['', '']);
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createRationalLessonSection() {
        const lessonData = [
            ['Key Concepts', ''],
            ['', 'Rational equations contain variables in denominators'],
            ['', 'Clear fractions by multiplying by LCD'],
            ['', 'Clearing fractions often produces quadratic equations'],
            ['', 'Must check for extraneous solutions'],
            ['', 'Solutions cannot make original denominators zero'],
            ['', ''],
            ['Solution Process', ''],
            ['', '1. Identify domain restrictions (denominators ≠ 0)'],
            ['', '2. Find LCD of all denominators'],
            ['', '3. Multiply entire equation by LCD'],
            ['', '4. Simplify to quadratic form'],
            ['', '5. Solve quadratic equation'],
            ['', '6. Check all solutions in original equation'],
            ['', '7. Reject extraneous solutions'],
            ['', ''],
            ['Why Check Solutions?', ''],
            ['', 'Multiplying by variable expressions can introduce extraneous solutions'],
            ['', 'These satisfy the cleared equation but not the original'],
            ['', 'Always verify in the original rational equation']
        ];

        return {
            title: 'Key Concepts: Rational to Quadratic',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.validSolutions) {
            solutionData.push(['Valid Solutions', this.currentSolution.validSolutions.join(', ')]);
        }

        if (this.currentSolution.extraneousSolutions && this.currentSolution.extraneousSolutions.length > 0) {
            solutionData.push(['Extraneous Solutions', this.currentSolution.extraneousSolutions.join(', ')]);
            solutionData.push(['Why Extraneous', 'These make denominators zero or don\'t satisfy original equation']);
        }

        if (this.currentSolution.solutions) {
            solutionData.push(['All Solutions from Quadratic', this.currentSolution.solutions.join(', ')]);
        }

        solutionData.push(['', '']);
        solutionData.push(['Solution Type', this.currentSolution.type || 'Rational to Quadratic']);

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createExtraneousSolutionsSection() {
        if (!this.includeCommonMistakes) return null;

        const extraneousData = [
            ['What are Extraneous Solutions?', 'Solutions that satisfy the cleared equation but not the original'],
            ['Why do they occur?', 'Multiplying by variable expressions can introduce false solutions'],
            ['How to identify?', 'Substitute into original equation and check if denominators become zero'],
            ['', ''],
            ['Example', ''],
            ['Original equation', '1/(x-2) = 1'],
            ['After clearing', 'x - 2 = 1'],
            ['Solution', 'x = 3 (valid) or x = 2 (extraneous - makes denominator 0)'],
            ['', ''],
            ['Prevention Strategy', ''],
            ['', '1. List domain restrictions before solving'],
            ['', '2. Check each solution against restrictions'],
            ['', '3. Verify in original equation'],
            ['', '4. Reject any that fail either test']
        ];

        return {
            title: 'Understanding Extraneous Solutions',
            type: 'extraneous',
            data: extraneousData
        };
    }

    createAnalysisSection() {
        if (!this.currentSolution) return null;

        const analysisData = [
            ['Solution Method', this.currentSolution.type || 'Rational to Quadratic'],
            ['Approach', this.currentSolution.approach || 'Clear fractions, solve quadratic'],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel],
            ['Category', this.rationalTypes[this.currentProblem.type]?.category || 'rational']
        ];

        if (this.currentSolution.validSolutions) {
            analysisData.push(['Number of Valid Solutions', this.currentSolution.validSolutions.length]);
        }

        if (this.currentSolution.extraneousSolutions) {
            analysisData.push(['Number of Extraneous Solutions', this.currentSolution.extraneousSolutions.length]);
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
            ['Verification Method', 'Substitution into original equation'],
            ['', '']
        ];

        if (this.currentSolution.validSolutions) {
            verificationData.push(['Valid Solutions Verified', '']);
            this.currentSolution.validSolutions.forEach(sol => {
                verificationData.push([`x = ${sol}`, 'Satisfies original equation ✓']);
            });
        }

        if (this.currentSolution.extraneousSolutions && this.currentSolution.extraneousSolutions.length > 0) {
            verificationData.push(['', '']);
            verificationData.push(['Extraneous Solutions Identified', '']);
            this.currentSolution.extraneousSolutions.forEach(sol => {
                verificationData.push([`x = ${sol}`, 'Makes denominator zero or fails verification ✗']);
            });
        }

        verificationData.push(['', '']);
        verificationData.push(['Verification Process', 'Each solution checked in original rational equation']);
        verificationData.push(['Domain Check', 'All solutions checked against domain restrictions']);

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications of Rational to Quadratic Equations', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Equation Type', app.equation]);
            appData.push(['Context', app.context]);
            if (app.examples && app.examples[0]) {
                appData.push(['Example', app.examples[0]]);
            }
            appData.push(['Leads to Quadratic', app.leadsToQuadratic || app.leadsToquadratic || 'When solving for unknowns']);
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

        const notes = this.generateRationalPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateRationalAlternativeMethods(this.currentProblem.type);

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

        problems.hard.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    createCommonMistakesSection() {
        if (!this.includeCommonMistakes) return null;

        const mistakesData = [
            ['Common Mistakes and How to Avoid Them', ''],
            ['', '']
        ];

        for (const [category, mistakes] of Object.entries(this.commonMistakes)) {
            mistakesData.push([category.toUpperCase(), '']);
            for (const [operation, errorList] of Object.entries(mistakes)) {
                mistakesData.push([operation, errorList.join('; ')]);
            }
            mistakesData.push(['', '']);
        }

        mistakesData.push(['Error Prevention Strategies', '']);
        for (const [key, prevention] of Object.entries(this.errorPrevention)) {
            mistakesData.push([key, `${prevention.reminder} - ${prevention.method}`]);
        }

        return {
            title: 'Common Mistakes Guide',
            type: 'mistakes',
            data: mistakesData
        };
    }

    generateRationalPedagogicalNotes(problemType) {
        const category = this.rationalTypes[problemType]?.category;

        const pedagogicalDatabase = {
            simple_rational: {
                objectives: [
                    'Solve simple rational equations',
                    'Find LCD with algebraic denominators',
                    'Clear fractions correctly',
                    'Identify extraneous solutions'
                ],
                keyConcepts: [
                    'LCD eliminates all fractions',
                    'Multiplying by variable expressions can introduce extraneous solutions',
                    'Must check solutions in original equation',
                    'Domain restrictions exclude certain values'
                ],
                prerequisites: [
                    'LCD with numerical fractions',
                    'Solving linear equations',
                    'Basic quadratic solving',
                    'Understanding of undefined fractions'
                ],
                commonDifficulties: [
                    'Finding LCD with variable denominators',
                    'Forgetting to multiply all terms by LCD',
                    'Not checking for extraneous solutions',
                    'Arithmetic errors when clearing fractions'
                ],
                teachingStrategies: [
                    'Use color coding for LCD multiplication',
                    'Emphasize checking solutions ALWAYS',
                    'Practice domain restriction identification first',
                    'Build from numerical LCD to algebraic LCD'
                ],
                extensions: [
                    'More complex rational equations',
                    'Work rate problems with relationships',
                    'Systems involving rational equations',
                    'Rational inequalities'
                ],
                assessment: [
                    'Can student find LCD correctly?',
                    'Does student multiply all terms?',
                    'Does student check for extraneous solutions?',
                    'Can student explain why solutions are extraneous?'
                ]
            },

            work_rate: {
                objectives: [
                    'Set up work rate equations',
                    'Understand rate as 1/time relationship',
                    'Solve combined rate problems',
                    'Interpret solutions in context'
                ],
                keyConcepts: [
                    'Rate = 1/time for completing job',
                    'Combined rate = sum of individual rates',
                    'Setting up equation from word problem',
                    'Solution must be positive and reasonable'
                ],
                prerequisites: [
                    'Understanding of rate concept',
                    'Solving rational equations',
                    'Quadratic equation solving',
                    'Word problem translation'
                ],
                commonDifficulties: [
                    'Confusing rate and time',
                    'Setting up equation incorrectly',
                    'Not checking if answer makes sense',
                    'Accepting negative solutions'
                ],
                teachingStrategies: [
                    'Use concrete examples (filling pools, mowing lawns)',
                    'Create rate tables to organize information',
                    'Emphasize units (jobs per hour)',
                    'Always check solution in context'
                ],
                extensions: [
                    'Three or more workers',
                    'Machines with varying efficiencies',
                    'Partial work scenarios',
                    'Optimization problems'
                ],
                assessment: [
                    'Can student identify rate vs time?',
                    'Can student set up equation from words?',
                    'Does student verify answer makes sense?',
                    'Can student explain solution in context?'
                ]
            },

            distance_rate: {
                objectives: [
                    'Apply d = rt in rational equations',
                    'Handle upstream/downstream scenarios',
                    'Solve round-trip problems',
                    'Interpret solutions correctly'
                ],
                keyConcepts: [
                    'Time = distance/rate',
                    'Speed adjusts with current/wind',
                    'Total time = sum of segment times',
                    'Average speed ≠ average of speeds'
                ],
                prerequisites: [
                    'd = rt formula',
                    'Rational equation solving',
                    'Understanding of speed variations',
                    'Quadratic solving'
                ],
                commonDifficulties: [
                    'Confusing upstream/downstream speeds',
                    'Setting up time equations',
                    'Understanding average speed',
                    'Unit consistency'
                ],
                teachingStrategies: [
                    'Draw diagrams showing motion',
                    'Create distance-rate-time tables',
                    'Use realistic scenarios (boats, planes)',
                    'Emphasize checking units'
                ],
                extensions: [
                    'Meeting problems',
                    'Pursuit problems',
                    'Wind/current in 2D',
                    'Optimization of travel time'
                ],
                assessment: [
                    'Can student set up d/r = t correctly?',
                    'Does student handle varying speeds?',
                    'Can student solve and interpret?',
                    'Does student check reasonableness?'
                ]
            },

            literal: {
                objectives: [
                    'Solve for variable in literal equations',
                    'Handle multiple variables',
                    'Use quadratic formula with parameters',
                    'Express answers as formulas'
                ],
                keyConcepts: [
                    'Treat other variables as constants',
                    'Same process as numerical equations',
                    'Answer is formula, not number',
                    'Check for domain restrictions on variables'
                ],
                prerequisites: [
                    'Literal equation basics',
                    'Rational equation solving',
                    'Quadratic formula',
                    'Algebraic manipulation'
                ],
                commonDifficulties: [
                    'Treating variables as constants',
                    'Quadratic formula with parameters',
                    'Simplifying complex expressions',
                    'Determining domain restrictions'
                ],
                teachingStrategies: [
                    'Start with simple literal equations',
                    'Show parallel with numerical examples',
                    'Practice quadratic formula with letters',
                    'Connect to physics/science formulas'
                ],
                extensions: [
                    'Deriving scientific formulas',
                    'Systems of literal equations',
                    'Parametric analysis',
                    'Applications in physics'
                ],
                assessment: [
                    'Can student isolate desired variable?',
                    'Does student handle parameters correctly?',
                    'Can student simplify final formula?',
                    'Does student state domain restrictions?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve rational equations leading to quadratics'],
            keyConcepts: ['LCD method', 'Extraneous solutions'],
            prerequisites: ['Rational equations', 'Quadratic solving'],
            commonDifficulties: ['Various algebraic challenges'],
            teachingStrategies: ['Systematic approach', 'Careful checking'],
            extensions: ['More complex problems'],
            assessment: ['Verify understanding of complete process']
        };
    }

    generateRationalAlternativeMethods(problemType) {
        const category = this.rationalTypes[problemType]?.category;

        const alternativeDatabase = {
            simple_rational: {
                primaryMethod: 'LCD Method (multiply all terms by LCD)',
                methods: [
                    {
                        name: 'Cross-Multiplication',
                        description: 'For equations with single fraction on each side, cross-multiply directly'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Graph both sides and find intersection points (check for extraneous)'
                    },
                    {
                        name: 'Substitution Method',
                        description: 'Let u = expression in denominator, solve for u, then back-substitute'
                    }
                ],
                comparison: 'LCD method is most systematic and reliable; cross-multiplication works for simple cases; graphing provides visual confirmation'
            },

            work_rate: {
                primaryMethod: 'Rate Equation Setup (1/t₁ + 1/t₂ = 1/t_combined)',
                methods: [
                    {
                        name: 'Work Completed Approach',
                        description: 'Calculate fraction of work done by each in given time, set sum = 1'
                    },
                    {
                        name: 'Table Method',
                        description: 'Create table with rate, time, work columns for each entity'
                    },
                    {
                        name: 'Proportion Method',
                        description: 'Set up proportions based on work relationships'
                    }
                ],
                comparison: 'Rate equation is standard and most direct; work completed good for visualization; table method helps organize information'
            },

            distance_rate: {
                primaryMethod: 'Time Equation (sum of d/r equals total time)',
                methods: [
                    {
                        name: 'Distance-Rate-Time Table',
                        description: 'Organize all segments in table, set up time equation'
                    },
                    {
                        name: 'Harmonic Mean Formula',
                        description: 'For round trips with same distance, use harmonic mean of speeds'
                    },
                    {
                        name: 'Algebraic Manipulation',
                        description: 'Express one variable in terms of others, substitute'
                    }
                ],
                comparison: 'Time equation most straightforward; table helps organization; harmonic mean faster for specific round-trip cases'
            },

            literal: {
                primaryMethod: 'Isolate Target Variable (treat others as constants)',
                methods: [
                    {
                        name: 'Direct Isolation',
                        description: 'Use inverse operations treating other variables as numbers'
                    },
                    {
                        name: 'Quadratic Formula with Parameters',
                        description: 'Put in ax² + bx + c = 0 form where a, b, c contain other variables'
                    },
                    {
                        name: 'Factoring',
                        description: 'If possible, factor and solve (may have multiple solutions)'
                    }
                ],
                comparison: 'Direct isolation simplest when possible; quadratic formula always works; factoring elegant when available'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard LCD method',
            methods: [{
                name: 'LCD Approach',
                description: 'Find LCD, multiply all terms, solve resulting quadratic'
            }],
            comparison: 'LCD method is reliable for all rational to quadratic equations'
        };
    }
}

// Export the class
export default EnhancedRationalToQuadraticMathematicalWorkbook;
