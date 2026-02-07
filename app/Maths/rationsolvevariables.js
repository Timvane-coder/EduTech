// Enhanced Solving Rational Formulas for a Variable Mathematical Workbook
import * as math from 'mathjs';

export class EnhancedRationalFormulaSolvingWorkbook {
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
        this.initializeRationalFormulaSolvers();
        this.initializeRationalFormulaLessons();
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

    initializeRationalFormulaLessons() {
        this.lessons = {
            basic_rational_formulas: {
                title: "Solving Rational Formulas for a Variable",
                concepts: [
                    "Rational formula: equation with fractions containing variables",
                    "Goal: isolate a specific variable in terms of other variables",
                    "Strategy: clear fractions by multiplying by LCD",
                    "Result is a formula expressing one variable in terms of others"
                ],
                theory: "Rational formulas appear throughout mathematics and science. Solving for a variable means rearranging the formula to express that variable in terms of all other quantities.",
                keyFormulas: {
                    "General Process": "Identify variable to solve for → Clear fractions → Isolate variable → Express as formula",
                    "LCD Method": "Multiply both sides by LCD of all denominators",
                    "Cross-Multiplication": "For a/b = c/d, use ad = bc"
                },
                solvingSteps: [
                    "Identify the variable to solve for",
                    "Identify all fractions and their denominators",
                    "Find the LCD of all denominators",
                    "Multiply both sides by LCD to clear fractions",
                    "Use inverse operations to isolate the desired variable",
                    "Simplify the resulting formula",
                    "State any restrictions (values that make denominators zero)"
                ],
                applications: [
                    "Physics formulas (velocity, acceleration, force)",
                    "Geometry formulas (area, volume, surface area)",
                    "Rate and work problems",
                    "Financial formulas (interest, investment)",
                    "Scientific formulas (density, concentration)",
                    "Engineering calculations"
                ]
            },

            simple_rational_formulas: {
                title: "Simple Rational Formulas",
                concepts: [
                    "Single fraction on one or both sides",
                    "Variable appears in numerator or denominator",
                    "Often solvable with one or two operations",
                    "May use cross-multiplication for proportions"
                ],
                theory: "Simple rational formulas involve basic fraction manipulation and inverse operations.",
                keyFormulas: {
                    "Single Fraction Form": "a/b = c → solve for any variable",
                    "Proportion Form": "a/b = c/d → cross-multiply",
                    "Variable in Denominator": "Clear by multiplying both sides"
                },
                examples: [
                    "d = rt → solve for r: r = d/t",
                    "V = lwh → solve for h: h = V/(lw)",
                    "I = Prt → solve for r: r = I/(Pt)",
                    "d = m/V → solve for V: V = m/d"
                ],
                techniques: [
                    "Multiply both sides to clear single denominator",
                    "Cross-multiply for proportions",
                    "Divide to isolate variable in numerator",
                    "Factor out variable if it appears multiple times"
                ]
            },

            complex_rational_formulas: {
                title: "Complex Rational Formulas",
                concepts: [
                    "Multiple fractions on one or both sides",
                    "Variable may appear in multiple denominators",
                    "Variable may appear in both numerator and denominator",
                    "Requires finding LCD of multiple fractions"
                ],
                theory: "Complex rational formulas require systematic fraction clearing and careful algebraic manipulation.",
                keyFormulas: {
                    "Multiple Fractions": "a/b + c/d = e → find LCD(b,d)",
                    "Variable in Multiple Places": "May need to collect all terms with variable",
                    "Complex Fractions": "Fraction within a fraction"
                },
                examples: [
                    "1/f = 1/p + 1/q (thin lens equation) → solve for f",
                    "1/R = 1/R₁ + 1/R₂ (parallel resistance) → solve for R₁",
                    "S = (a(1-rⁿ))/(1-r) (geometric series) → solve for r"
                ],
                techniques: [
                    "Find LCD of all denominators",
                    "Multiply entire equation by LCD",
                    "Collect all terms containing desired variable",
                    "Factor out the variable if needed",
                    "Use distributive property carefully",
                    "Check for extraneous solutions"
                ]
            },

            physics_formulas: {
                title: "Physics and Science Formulas",
                concepts: [
                    "Formulas relate physical quantities",
                    "Often involve rates, ratios, or proportions",
                    "Units must be consistent",
                    "Physical meaning guides algebraic manipulation"
                ],
                theory: "Scientific formulas express relationships between measurable quantities. Solving for a variable allows calculating one quantity given others.",
                commonFormulas: {
                    "Velocity": "v = d/t → d = vt, t = d/v",
                    "Density": "ρ = m/V → m = ρV, V = m/ρ",
                    "Force": "F = ma → m = F/a, a = F/m",
                    "Pressure": "P = F/A → F = PA, A = F/P",
                    "Ohm's Law": "V = IR → I = V/R, R = V/I",
                    "Kinetic Energy": "KE = ½mv² → v = √(2KE/m)",
                    "Power": "P = W/t → W = Pt, t = W/P"
                },
                applications: [
                    "Calculate unknown physical quantities",
                    "Analyze relationships between variables",
                    "Predict system behavior",
                    "Design experiments and measurements"
                ]
            },

            geometry_formulas: {
                title: "Geometric Formulas",
                concepts: [
                    "Formulas for area, perimeter, volume, surface area",
                    "Often involve products or quotients",
                    "May need to solve for a dimension",
                    "Geometric constraints apply"
                ],
                theory: "Geometric formulas relate measurements of shapes. Solving for a variable allows finding unknown dimensions.",
                commonFormulas: {
                    "Rectangle": "A = lw → l = A/w, w = A/l; P = 2l + 2w",
                    "Triangle": "A = ½bh → b = 2A/h, h = 2A/b",
                    "Circle": "A = πr² → r = √(A/π); C = 2πr → r = C/(2π)",
                    "Trapezoid": "A = ½h(b₁+b₂) → h = 2A/(b₁+b₂)",
                    "Rectangular Prism": "V = lwh → h = V/(lw)",
                    "Cylinder": "V = πr²h → h = V/(πr²), r = √(V/(πh))",
                    "Sphere": "V = (4/3)πr³ → r = ³√(3V/(4π))"
                },
                applications: [
                    "Find unknown dimensions given area or volume",
                    "Calculate material quantities",
                    "Design and construction problems",
                    "Scale model calculations"
                ]
            },

            rate_work_formulas: {
                title: "Rate and Work Formulas",
                concepts: [
                    "Relate rate, time, and amount of work",
                    "Combined work rates add",
                    "Time = Work / Rate",
                    "Rate = Work / Time"
                ],
                theory: "Rate formulas express how quickly work is completed or distance is traveled.",
                keyFormulas: {
                    "Work Formula": "W = rt → r = W/t, t = W/r",
                    "Combined Work": "1/t = 1/t₁ + 1/t₂",
                    "Distance-Rate-Time": "d = rt",
                    "Average Rate": "r_avg = total distance / total time"
                },
                examples: [
                    "Pipe filling problems",
                    "Worker productivity",
                    "Machine processing rates",
                    "Travel time calculations"
                ],
                applications: [
                    "Project planning and scheduling",
                    "Efficiency analysis",
                    "Resource allocation",
                    "Time estimation"
                ]
            },

            financial_formulas: {
                title: "Financial and Business Formulas",
                concepts: [
                    "Interest, investment, loan calculations",
                    "Profit, revenue, cost relationships",
                    "Percent calculations",
                    "Growth and depreciation"
                ],
                theory: "Financial formulas relate monetary quantities over time or in business contexts.",
                keyFormulas: {
                    "Simple Interest": "I = Prt → P = I/(rt), r = I/(Pt), t = I/(Pr)",
                    "Compound Interest": "A = P(1+r)ᵗ",
                    "Profit": "P = R - C → R = P + C, C = R - P",
                    "Markup": "S = C + M → C = S - M, M = S - C",
                    "Percent": "P = (part/whole) × 100"
                },
                applications: [
                    "Investment calculations",
                    "Loan amortization",
                    "Business planning",
                    "Pricing strategies",
                    "Financial forecasting"
                ]
            },

            proportion_formulas: {
                title: "Proportions and Variation",
                concepts: [
                    "Direct proportion: y = kx",
                    "Inverse proportion: y = k/x",
                    "Joint variation: z = kxy",
                    "Combined variation: mix of direct and inverse"
                ],
                theory: "Variation formulas express how one quantity changes in relation to others.",
                keyFormulas: {
                    "Direct Variation": "y = kx → k = y/x, x = y/k",
                    "Inverse Variation": "y = k/x → k = xy, x = k/y",
                    "Joint Variation": "z = kxy → k = z/(xy)",
                    "Combined": "y = kx/z → x = yz/k, z = kx/y"
                },
                examples: [
                    "Hooke's Law: F = kx",
                    "Boyle's Law: PV = k",
                    "Newton's Law: F = Gm₁m₂/r²"
                ],
                applications: [
                    "Scaling problems",
                    "Similar triangles",
                    "Scientific laws",
                    "Engineering calculations"
                ]
            },

            temperature_conversion: {
                title: "Temperature Conversion Formulas",
                concepts: [
                    "Convert between Fahrenheit, Celsius, Kelvin",
                    "Linear relationships with different intercepts",
                    "Absolute zero considerations"
                ],
                theory: "Temperature scales are linearly related but with different zero points and scale factors.",
                keyFormulas: {
                    "F to C": "C = (5/9)(F - 32)",
                    "C to F": "F = (9/5)C + 32",
                    "C to K": "K = C + 273.15",
                    "K to C": "C = K - 273.15"
                },
                solvingFor: {
                    "Fahrenheit from Celsius": "F = (9/5)C + 32",
                    "Celsius from Fahrenheit": "C = (5/9)(F - 32)",
                    "Finding equal temperature": "Solve C = F"
                }
            },

            literal_equations_advanced: {
                title: "Advanced Literal Equations",
                concepts: [
                    "Variable appears multiple times",
                    "Variable in exponent or radical",
                    "Quadratic in the variable of interest",
                    "Absolute value or piecewise definitions"
                ],
                theory: "Advanced literal equations require sophisticated algebraic techniques including factoring, quadratic formula, and radical manipulation.",
                techniques: [
                    "Factor out variable when it appears multiple times",
                    "Use quadratic formula if variable appears squared",
                    "Raise both sides to power to eliminate radicals",
                    "Consider domain restrictions",
                    "Check for extraneous solutions"
                ],
                examples: [
                    "A = P(1 + rt) → solve for t when P and A known",
                    "A = πr² + 2πrh → solve for h",
                    "Distance formula: d = √((x₂-x₁)² + (y₂-y₁)²) → solve for x₁"
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
            'rho': 'ρ', 'sigma': 'σ', 'omega': 'ω',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥', 'degree': '°'
        };
    }

    initializeRationalFormulaSolvers() {
        this.rationalFormulaTypes = {
            // Simple rational formulas
            simple_fraction_single: {
                patterns: [
                    /solve.*for\s+([a-z])/i,
                    /([a-z])\s*\/\s*([a-z])\s*=/,
                    /\=\s*([a-z])\s*\/\s*([a-z])/
                ],
                solver: this.solveSimpleFractionFormula.bind(this),
                name: 'Simple Fraction Formula',
                category: 'simple_rational',
                description: 'Formula with single fraction: a/b = c or c = a/b'
            },

            proportion_formula: {
                patterns: [
                    /([a-z])\s*\/\s*([a-z])\s*=\s*([a-z])\s*\/\s*([a-z])/,
                    /proportion/i,
                    /cross.*multiply/i
                ],
                solver: this.solveProportionFormula.bind(this),
                name: 'Proportion Formula',
                category: 'proportion',
                description: 'Proportion: a/b = c/d'
            },

            // Physics formulas
            velocity_formula: {
                patterns: [
                    /v\s*=\s*d\s*\/\s*t/i,
                    /velocity/i,
                    /speed.*distance.*time/i
                ],
                solver: this.solveVelocityFormula.bind(this),
                name: 'Velocity Formula',
                category: 'physics',
                description: 'v = d/t'
            },

            density_formula: {
                patterns: [
                    /ρ\s*=\s*m\s*\/\s*V/i,
                    /d\s*=\s*m\s*\/\s*V/i,
                    /density/i
                ],
                solver: this.solveDensityFormula.bind(this),
                name: 'Density Formula',
                category: 'physics',
                description: 'ρ = m/V or d = m/V'
            },

            ohms_law: {
                patterns: [
                    /V\s*=\s*I\s*R/i,
                    /I\s*=\s*V\s*\/\s*R/i,
                    /ohm.*law/i,
                    /voltage.*current.*resistance/i
                ],
                solver: this.solveOhmsLaw.bind(this),
                name: "Ohm's Law",
                category: 'physics',
                description: 'V = IR'
            },

            // Geometry formulas
            rectangle_area: {
                patterns: [
                    /A\s*=\s*l\s*w/i,
                    /A\s*=\s*l\s*\*\s*w/i,
                    /rectangle.*area/i
                ],
                solver: this.solveRectangleArea.bind(this),
                name: 'Rectangle Area',
                category: 'geometry',
                description: 'A = lw'
            },

            triangle_area: {
                patterns: [
                    /A\s*=\s*.*b\s*h/i,
                    /triangle.*area/i
                ],
                solver: this.solveTriangleArea.bind(this),
                name: 'Triangle Area',
                category: 'geometry',
                description: 'A = ½bh'
            },

            circle_area: {
                patterns: [
                    /A\s*=\s*π\s*r\s*²/i,
                    /A\s*=\s*pi\s*r\s*\^2/i,
                    /circle.*area/i
                ],
                solver: this.solveCircleArea.bind(this),
                name: 'Circle Area',
                category: 'geometry',
                description: 'A = πr²'
            },

            // Financial formulas
            simple_interest: {
                patterns: [
                    /I\s*=\s*P\s*r\s*t/i,
                    /simple.*interest/i
                ],
                solver: this.solveSimpleInterest.bind(this),
                name: 'Simple Interest',
                category: 'financial',
                description: 'I = Prt'
            },

            // Complex rational formulas
            lens_equation: {
                patterns: [
                    /1\s*\/\s*f\s*=\s*1\s*\/\s*p\s*\+\s*1\s*\/\s*q/i,
                    /thin.*lens/i,
                    /focal.*length/i
                ],
                solver: this.solveLensEquation.bind(this),
                name: 'Thin Lens Equation',
                category: 'complex_rational',
                description: '1/f = 1/p + 1/q'
            },

            parallel_resistance: {
                patterns: [
                    /1\s*\/\s*R\s*=\s*1\s*\/\s*R1\s*\+\s*1\s*\/\s*R2/i,
                    /parallel.*resistance/i
                ],
                solver: this.solveParallelResistance.bind(this),
                name: 'Parallel Resistance',
                category: 'complex_rational',
                description: '1/R = 1/R₁ + 1/R₂'
            },

            combined_work: {
                patterns: [
                    /1\s*\/\s*t\s*=\s*1\s*\/\s*t1\s*\+\s*1\s*\/\s*t2/i,
                    /combined.*work/i,
                    /work.*rate/i
                ],
                solver: this.solveCombinedWork.bind(this),
                name: 'Combined Work Rate',
                category: 'work_rate',
                description: '1/t = 1/t₁ + 1/t₂'
            },

            // Temperature conversion
            celsius_fahrenheit: {
                patterns: [
                    /F\s*=\s*.*C\s*\+\s*32/i,
                    /C\s*=\s*.*\(F\s*-\s*32\)/i,
                    /celsius.*fahrenheit/i,
                    /fahrenheit.*celsius/i
                ],
                solver: this.solveTemperatureConversion.bind(this),
                name: 'Temperature Conversion',
                category: 'temperature',
                description: 'F = (9/5)C + 32'
            },

            // Generic literal equation
            generic_literal: {
                patterns: [
                    /solve.*for/i,
                    /isolate/i,
                    /rearrange/i
                ],
                solver: this.solveGenericLiteral.bind(this),
                name: 'Generic Literal Equation',
                category: 'literal',
                description: 'Solve any literal equation for specified variable'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            simple_rational: {
                'Clear denominator': [
                    'Only multiplying one side by denominator',
                    'Forgetting to multiply all terms',
                    'Sign errors when multiplying',
                    'Not distributing denominator to all terms'
                ],
                'Isolate variable': [
                    'Dividing when should multiply',
                    'Multiplying when should divide',
                    'Forgetting other variables are constants in this context'
                ]
            },
            complex_rational: {
                'Find LCD': [
                    'Incorrectly finding LCD of multiple denominators',
                    'Missing a denominator in LCD calculation',
                    'Confusing LCD with LCM of coefficients'
                ],
                'Multiply by LCD': [
                    'Not multiplying all terms by LCD',
                    'Incorrectly distributing LCD',
                    'Canceling denominators incorrectly',
                    'Sign errors in distribution'
                ],
                'Collect variable terms': [
                    'Forgetting variable appears in multiple places',
                    'Incorrectly factoring out variable',
                    'Sign errors when collecting terms',
                    'Treating variable as constant'
                ]
            },
            proportion: {
                'Cross multiply': [
                    'Incorrect cross multiplication pattern',
                    'Sign errors in cross products',
                    'Forgetting to multiply both terms',
                    'Not simplifying before cross multiplying'
                ]
            },
            restrictions: {
                'Identify restrictions': [
                    'Forgetting to state restrictions',
                    'Not identifying all values that make denominators zero',
                    'Confusing restrictions with solutions',
                    'Not considering restrictions in final answer'
                ]
            }
        };

        this.errorPrevention = {
            clear_fractions: {
                reminder: 'Multiply EVERY term on BOTH sides by the LCD',
                method: 'Write out the multiplication explicitly for each term'
            },
            factor_variable: {
                reminder: 'When variable appears multiple times, factor it out',
                method: 'Collect all terms with the variable on one side first'
            },
            restrictions: {
                reminder: 'Always identify values that make denominators zero',
                method: 'Set each denominator equal to zero and solve'
            },
            verify_formula: {
                reminder: 'Check your derived formula with known values',
                method: 'Substitute test values and verify equality'
            },
            units_check: {
                reminder: 'For physics/science formulas, check units make sense',
                method: 'Verify dimensional analysis of final formula'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this algebraic manipulation works and what it means',
                language: 'intuitive understanding of formula relationships'
            },
            procedural: {
                focus: 'Exact sequence of algebraic steps',
                language: 'step-by-step instructions for manipulation'
            },
            visual: {
                focus: 'Graphical representation of formula relationships',
                language: 'visual and spatial understanding'
            },
            algebraic: {
                focus: 'Formal algebraic properties and rules',
                language: 'precise mathematical terminology and notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete formulas from familiar contexts'
            },
            intermediate: {
                vocabulary: 'standard mathematical and scientific terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of familiar and abstract formulas'
            },
            ELI5: {
                vocabulary: 'simplest possible terms with everyday analogies',
                detail: 'every small step explained with concrete examples',
                examples: 'real-world analogies and stories',
                analogies: true,
                visualization: 'simple pictures and concrete models'
            },
            detailed: {
                vocabulary: 'full mathematical and scientific vocabulary',
                detail: 'comprehensive explanations with algebraic reasoning',
                examples: 'abstract and generalized cases'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with strategic questions',
                examples: 'carefully sequenced difficulty progression'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            physics_velocity: {
                scenario: "Finding time or distance given velocity",
                formula: "v = d/t",
                examples: [
                    "Car travels 150 miles at 50 mph. How long does it take? Solve v = d/t for t",
                    "Runner completes race in 2 hours at 6 mph. What distance? Solve v = d/t for d"
                ],
                context: "Velocity formulas are fundamental in physics and everyday travel calculations",
                solveFor: ['d', 't', 'v']
            },
            chemistry_density: {
                scenario: "Finding mass or volume given density",
                formula: "ρ = m/V",
                examples: [
                    "Object has density 2.5 g/cm³ and mass 50g. Find volume. Solve ρ = m/V for V",
                    "Container holds 100 mL with density 0.8 g/mL. Find mass. Solve ρ = m/V for m"
                ],
                context: "Density relates mass to volume, crucial in chemistry and material science",
                solveFor: ['m', 'V', 'ρ']
            },
            electricity: {
                scenario: "Calculating voltage, current, or resistance",
                formula: "V = IR",
                examples: [
                    "Circuit has 12V and 3Ω resistor. Find current. Solve V = IR for I",
                    "Current of 2A with 10V battery. Find resistance. Solve V = IR for R"
                ],
                context: "Ohm's Law is fundamental to all electrical circuit analysis",
                solveFor: ['V', 'I', 'R']
            },
            geometry_area: {
                scenario: "Finding unknown dimension given area",
                formula: "A = lw",
                examples: [
                    "Rectangle has area 48 ft² and length 8 ft. Find width. Solve A = lw for w",
                    "Garden is 6m wide with area 30 m². How long? Solve A = lw for l"
                ],
                context: "Area formulas help in construction, landscaping, and design",
                solveFor: ['A', 'l', 'w']
            },
            finance_interest: {
                scenario: "Calculating interest rate, principal, or time",
                formula: "I = Prt",
                examples: [
                    "Loan of $1000 at 5% for 3 years. Find interest. Standard form",
                    "Earned $150 interest on $1000 in 3 years. Find rate. Solve I = Prt for r",
                    "Want $200 interest on $2000 at 4%. How long? Solve I = Prt for t"
                ],
                context: "Interest formulas essential for loans, investments, savings",
                solveFor: ['I', 'P', 'r', 't']
            },
            optics: {
                scenario: "Finding focal length or object/image distance",
                formula: "1/f = 1/p + 1/q",
                examples: [
                    "Object 20cm from lens, image 30cm away. Find focal length. Solve for f",
                    "Lens has focal length 15cm, object at 25cm. Find image distance. Solve for q"
                ],
                context: "Lens equation used in cameras, telescopes, microscopes, eyeglasses",
                solveFor: ['f', 'p', 'q']
            },
            parallel_circuits: {
                scenario: "Finding equivalent or individual resistance",
                formula: "1/R = 1/R₁ + 1/R₂",
                examples: [
                    "Two resistors in parallel: 6Ω and 12Ω. Find equivalent resistance",
                    "Parallel combination is 4Ω, one resistor is 12Ω. Find other resistor"
                ],
                context: "Parallel resistance calculations essential in circuit design",
                solveFor: ['R', 'R₁', 'R₂']
            },
            work_rate: {
                scenario: "Finding individual or combined work rates",
                formula: "1/t = 1/t₁ + 1/t₂",
                examples: [
                    "Worker A finishes job in 6 hours, B in 4 hours. How long together?",
                    "Two workers finish in 2 hours. One alone takes 3 hours. Other alone?"
                ],
                context: "Work rate problems apply to productivity, project planning, resource management",
                solveFor: ['t', 't₁', 't₂']
            },
            temperature: {
                scenario: "Converting between temperature scales",
                formula: "F = (9/5)C + 32",
                examples: [
                    "Water boils at 100°C. What in Fahrenheit? Standard substitution",
                    "Comfortable room is 72°F. What in Celsius? Solve F = (9/5)C + 32 for C",
                    "At what temperature are Celsius and Fahrenheit equal? Solve C = (9/5)C + 32"
                ],
                context: "Temperature conversion needed for international communication, cooking, science",
                solveFor: ['F', 'C', 'equal temperature']
            },
            scale_models: {
                scenario: "Using proportions for scaling",
                formula: "a/b = c/d",
                examples: [
                    "Map scale 1:50000. 3cm on map is what distance? Cross multiply",
                    "Recipe for 4 serves 6. How much for 9 people? Set up proportion"
                ],
                context: "Proportions used in maps, models, recipes, similar figures",
                solveFor: ['unknown term in proportion']
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            simple_rational: {
                skills: [
                    'Fraction operations',
                    'Multiplication and division',
                    'Inverse operations',
                    'Basic algebra'
                ],
                priorKnowledge: [
                    'Multiply both sides to clear denominator',
                    'Treat other variables as constants',
                    'Division is inverse of multiplication'
                ],
                checkQuestions: [
                    "If a/b = c, what is a in terms of b and c?",
                    "What operation clears a denominator?",
                    "In formula v = d/t, are d and t constants or variables?"
                ]
            },
            proportion: {
                skills: [
                    'Understanding ratios',
                    'Cross multiplication',
                    'Fraction equivalence',
                    'Solving simple equations'
                ],
                priorKnowledge: [
                    'Cross multiply: a/b = c/d → ad = bc',
                    'Proportions represent equal ratios',
                    'Can solve resulting equation'
                ],
                checkQuestions: [
                    "What is cross multiplication?",
                    "If 2/3 = x/12, what is x?",
                    "What does a/b = c/d mean?"
                ]
            },
            complex_rational: {
                skills: [
                    'Finding LCD of multiple fractions',
                    'Distributing across terms',
                    'Factoring out variables',
                    'Multi-step algebraic manipulation'
                ],
                priorKnowledge: [
                    'Find LCD of all denominators',
                    'Multiply entire equation by LCD',
                    'Factor variable when it appears multiple times',
                    'Check for restrictions'
                ],
                checkQuestions: [
                    "What is LCD of 1/6 and 1/4?",
                    "How do you solve 1/x + 1/y = 1/z for x?",
                    "What values are restricted in 1/x = 3?"
                ]
            },
            physics_formulas: {
                skills: [
                    'Understanding formula relationships',
                    'Unit awareness',
                    'Algebraic manipulation',
                    'Physical reasoning'
                ],
                priorKnowledge: [
                    'Formulas relate physical quantities',
                    'Units must be consistent',
                    'Physical meaning guides manipulation'
                ],
                checkQuestions: [
                    "What does v = d/t represent?",
                    "If distance doubles and time stays same, what happens to velocity?",
                    "What are units of density if mass in kg, volume in m³?"
                ]
            },
            geometry_formulas: {
                skills: [
                    'Understanding geometric relationships',
                    'Area and volume concepts',
                    'Solving for dimensions',
                    'Working with squares and square roots'
                ],
                priorKnowledge: [
                    'Area relates two dimensions',
                    'Volume relates three dimensions',
                    'May need square roots for circles/spheres'
                ],
                checkQuestions: [
                    "What is area of rectangle 5×8?",
                    "If A = πr², how do you find r?",
                    "What shape has area A = ½bh?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            formula_as_relationship: {
                description: "Formula as relationship between quantities",
                analogy: "Like a recipe showing how ingredients combine",
                visualization: "Diagram showing variables connected by operations",
                suitableFor: ['all_types'],
                explanation: "Each variable represents a quantity; formula shows how they relate"
            },
            fraction_as_division: {
                description: "Fraction represents division operation",
                analogy: "a/b means 'a divided by b' or 'a per b'",
                visualization: "Division bar separating numerator and denominator",
                suitableFor: ['simple_rational', 'proportion'],
                explanation: "Understanding fraction as division helps see clearing operation"
            },
            balance_method: {
                description: "Whatever you do to one side, do to the other",
                analogy: "Like balanced scale: same weight added to both sides",
                visualization: "Balance beam with equal operations on both sides",
                suitableFor: ['all_types'],
                explanation: "Equality maintained by identical operations on both sides"
            },
            lcd_as_common_ground: {
                description: "LCD finds common denominator for all fractions",
                analogy: "Like finding common language for communication",
                visualization: "Multiple fractions converted to common denominator",
                suitableFor: ['complex_rational'],
                explanation: "LCD allows elimination of all denominators at once"
            },
            proportion_as_equality: {
                description: "Proportion shows two ratios are equal",
                analogy: "Like two recipes for same dish in different quantities",
                visualization: "Two equivalent fractions shown as equal",
                suitableFor: ['proportion'],
                explanation: "Equal ratios mean same relative relationship"
            },
            cross_multiplication_visual: {
                description: "Cross multiply to eliminate fractions",
                analogy: "Crossing streams to connect both sides",
                visualization: "Arrows crossing from numerator to opposite denominator",
                suitableFor: ['proportion'],
                explanation: "Multiplying cross terms gives equation without fractions"
            },
            factoring_out_variable: {
                description: "Extract common variable from multiple terms",
                analogy: "Like factoring out common ingredient from recipe steps",
                visualization: "Variable shown outside parentheses with remaining terms inside",
                suitableFor: ['complex_rational'],
                explanation: "When variable appears multiple times, factor it out to isolate"
            },
            restriction_identification: {
                description: "Find values that make denominators zero",
                analogy: "Like identifying forbidden values in domain",
                visualization: "Number line with excluded points marked",
                suitableFor: ['all_rational'],
                explanation: "Denominators cannot be zero; identify restricted values"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "v = d/t, solve for t",
                    solution: "t = d/v",
                    steps: ["Multiply both sides by t: vt = d", "Divide both sides by v: t = d/v"],
                    difficulty: "easy",
                    category: "simple_rational"
                },
                {
                    problem: "A = lw, solve for w",
                    solution: "w = A/l",
                    steps: ["Divide both sides by l: w = A/l"],
                    difficulty: "easy",
                    category: "simple_rational"
                },
                {
                    problem: "d = m/V, solve for V",
                    solution: "V = m/d",
                    steps: ["Multiply both sides by V: dV = m", "Divide by d: V = m/d"],
                    difficulty: "easy",
                    category: "simple_rational"
                },
                {
                    problem: "I = Prt, solve for r",
                    solution: "r = I/(Pt)",
                    steps: ["Divide both sides by Pt: r = I/(Pt)"],
                    difficulty: "easy",
                    category: "simple_rational"
                }
            ],
            intermediate: [
                {
                    problem: "F = (9/5)C + 32, solve for C",
                    solution: "C = (5/9)(F - 32)",
                    steps: [
                        "Subtract 32: F - 32 = (9/5)C",
                        "Multiply by 5/9: C = (5/9)(F - 32)"
                    ],
                    difficulty: "medium",
                    category: "temperature"
                },
                {
                    problem: "A = ½bh, solve for h",
                    solution: "h = 2A/b",
                    steps: [
                        "Multiply by 2: 2A = bh",
                        "Divide by b: h = 2A/b"
                    ],
                    difficulty: "medium",
                    category: "geometry"
                },
                {
                    problem: "P = 2l + 2w, solve for w",
                    solution: "w = (P - 2l)/2",
                    steps: [
                        "Subtract 2l: P - 2l = 2w",
                        "Divide by 2: w = (P - 2l)/2"
                    ],
                    difficulty: "medium",
                    category: "geometry"
                },
                {
                    problem: "a/b = c/d, solve for a",
                    solution: "a = bc/d",
                    steps: [
                        "Cross multiply: ad = bc",
                        "Divide by d: a = bc/d"
                    ],
                    difficulty: "medium",
                    category: "proportion"
                }
            ],
            advanced: [
                {
                    problem: "1/f = 1/p + 1/q, solve for f",
                    solution: "f = pq/(p + q)",
                    steps: [
                        "Find common denominator on right: 1/f = (q + p)/(pq)",
                        "Take reciprocal: f = pq/(p + q)"
                    ],
                    difficulty: "hard",
                    category: "complex_rational"
                },
                {
                    problem: "1/R = 1/R₁ + 1/R₂, solve for R₁",
                    solution: "R₁ = RR₂/(R₂ - R)",
                    steps: [
                        "Subtract 1/R₂: 1/R - 1/R₂ = 1/R₁",
                        "Common denominator: (R₂ - R)/(RR₂) = 1/R₁",
                        "Take reciprocal: R₁ = RR₂/(R₂ - R)"
                    ],
                    difficulty: "hard",
                    category: "complex_rational"
                },
                {
                    problem: "A = P(1 + rt), solve for r",
                    solution: "r = (A - P)/(Pt)",
                    steps: [
                        "Divide by P: A/P = 1 + rt",
                        "Subtract 1: A/P - 1 = rt",
                        "Divide by t: r = (A/P - 1)/t = (A - P)/(Pt)"
                    ],
                    difficulty: "hard",
                    category: "financial"
                },
                {
                    problem: "A = πr², solve for r",
                    solution: "r = √(A/π)",
                    steps: [
                        "Divide by π: A/π = r²",
                        "Take square root: r = √(A/π)"
                    ],
                    difficulty: "hard",
                    category: "geometry"
                }
            ],
            byCategory: {
                physics: [
                    { formula: "v = d/t", solveFor: "d", solution: "d = vt" },
                    { formula: "v = d/t", solveFor: "t", solution: "t = d/v" },
                    { formula: "F = ma", solveFor: "a", solution: "a = F/m" },
                    { formula: "d = m/V", solveFor: "V", solution: "V = m/d" },
                    { formula: "V = IR", solveFor: "R", solution: "R = V/I" }
                ],
                geometry: [
                    { formula: "A = lw", solveFor: "l", solution: "l = A/w" },
                    { formula: "A = ½bh", solveFor: "h", solution: "h = 2A/b" },
                    { formula: "P = 2l + 2w", solveFor: "w", solution: "w = (P-2l)/2" },
                    { formula: "A = πr²", solveFor: "r", solution: "r = √(A/π)" },
                    { formula: "V = πr²h", solveFor: "h", solution: "h = V/(πr²)" }
                ],
                financial: [
                    { formula: "I = Prt", solveFor: "r", solution: "r = I/(Pt)" },
                    { formula: "I = Prt", solveFor: "t", solution: "t = I/(Pr)" },
                    { formula: "I = Prt", solveFor: "P", solution: "P = I/(rt)" }
                ],
                complex: [
                    { formula: "1/f = 1/p + 1/q", solveFor: "f", solution: "f = pq/(p+q)" },
                    { formula: "1/R = 1/R₁ + 1/R₂", solveFor: "R₁", solution: "R₁ = RR₂/(R₂-R)" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            fraction_clearing: {
                misconception: "Only multiply numerator by denominator",
                reality: "Must multiply ENTIRE equation (both sides, all terms) by denominator",
                correctiveExample: "For a/b = c, multiply BOTH SIDES by b: a = bc (not just a = c)",
                commonIn: ['simple_rational', 'complex_rational']
            },
            variable_as_constant: {
                misconception: "Treating the variable being solved for as a constant",
                reality: "The variable to solve for is unknown; all OTHER letters are treated as constants",
                correctiveExample: "In v = d/t solving for t, treat v and d as constants, t as variable",
                commonIn: ['all_types']
            },
            lcd_confusion: {
                misconception: "Finding LCD incorrectly or not using it for all terms",
                reality: "LCD must be product of all unique denominators; multiply ALL terms by it",
                correctiveExample: "For 1/f = 1/p + 1/q, LCD is fpq, multiply ALL THREE terms by fpq",
                commonIn: ['complex_rational']
            },
            cross_multiply_misuse: {
                misconception: "Trying to cross multiply when not in proportion form",
                reality: "Cross multiplication only works for single fraction = single fraction",
                correctiveExample: "Can use for a/b = c/d, but NOT for a/b + c/d = e",
                commonIn: ['proportion']
            },
            reciprocal_confusion: {
                misconception: "Taking reciprocal of entire side instead of just fraction",
                reality: "Reciprocal switches numerator and denominator of single fraction only",
                correctiveExample: "Reciprocal of 1/f is f, but reciprocal of 1/p + 1/q is NOT p + q",
                commonIn: ['complex_rational']
            },
            forgetting_restrictions: {
                misconception: "Not identifying or stating restricted values",
                reality: "Must identify all values that make any denominator zero",
                correctiveExample: "For V = m/d solving for d, must state d ≠ 0 in final answer",
                commonIn: ['all_rational']
            },
            square_root_sign: {
                misconception: "Forgetting ± when taking square root",
                reality: "When solving for variable under square, consider both positive and negative",
                correctiveExample: "For A = πr², solving gives r = ±√(A/π), but physical context may require r > 0",
                commonIn: ['geometry', 'physics']
            },
            distribution_errors: {
                misconception: "Not distributing multiplication over addition in parentheses",
                reality: "When clearing fractions, LCD must multiply every term inside parentheses",
                correctiveExample: "For (a + b)/c = d, multiply as: a + b = cd (not a + bc = d)",
                commonIn: ['complex_rational']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            formula_solving: {
                analogy: "Formula is like a recipe with substitutable ingredients",
                explanation: "Just as you can scale a recipe by changing servings, you can rearrange a formula to find different quantities",
                suitableFor: ['all_types'],
                ELI5: "A formula is like a recipe. If the recipe says '2 cups flour makes 12 cookies', you can figure out how much flour you need for 24 cookies by rearranging it!"
            },
            clearing_fractions: {
                analogy: "Getting rid of fractions by making everything whole",
                explanation: "Multiplying by denominator is like converting all fractions to whole numbers by finding common ground",
                suitableFor: ['simple_rational', 'complex_rational'],
                ELI5: "Imagine you're splitting a pizza. Instead of saying '1/2 pizza', you can say 'multiply both by 2 to get 1 whole pizza'. We do the same with formulas!"
            },
            proportion_as_recipe: {
                analogy: "Proportion is like doubling or halving a recipe",
                explanation: "If 2 eggs make 12 cookies, then 4 eggs make 24 cookies - that's a proportion!",
                suitableFor: ['proportion'],
                ELI5: "If your friend's mom's cookies use 2 eggs for 12 cookies, and you want to make 36 cookies, you need 6 eggs. That's using proportions!"
            },
            isolating_variable: {
                analogy: "Finding a missing piece of a puzzle",
                explanation: "Solving for a variable is like having a puzzle where one piece is hidden - we rearrange to reveal it",
                suitableFor: ['all_types'],
                ELI5: "Imagine x is hiding in a box. The formula tells us what's around the box. We open the box layer by layer (undo operations) until we see x!"
            },
            lcd_as_translator: {
                analogy: "LCD is like a universal translator for fractions",
                explanation: "Just as a translator helps different languages communicate, LCD helps different fractions work together",
                suitableFor: ['complex_rational'],
                ELI5: "Imagine fractions speaking different languages. The LCD is like teaching them all the same language so they can talk to each other!"
            },
            cross_multiplication: {
                analogy: "Cross multiplication is like a shortcut bridge",
                explanation: "Instead of clearing each fraction separately, cross multiply to jump directly across",
                suitableFor: ['proportion'],
                ELI5: "If you have a/b = c/d, it's like two seesaws that balance. Cross multiplication is like connecting them with ropes that make them balance in a new way!"
            },
            restrictions_as_rules: {
                analogy: "Restrictions are like rules of the game",
                explanation: "Just as games have rules about what you can't do, formulas have restrictions on what values make sense",
                suitableFor: ['all_rational'],
                ELI5: "You can't divide by zero - it's against math rules! When we solve formulas, we have to remember what numbers are not allowed."
            },
            factoring_variable: {
                analogy: "Factoring out variable is like grouping common items",
                explanation: "When variable appears multiple times, factor it out like collecting all red toys in one bin",
                suitableFor: ['complex_rational'],
                ELI5: "If you have 3 red cars and 2 red trucks, you can say 'I have red things: 3 cars and 2 trucks'. We do this with variables too!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            simple_rational: {
                level1: "What operation is being performed on the variable you're solving for?",
                level2: "Is the variable in a numerator or denominator?",
                level3: "If in denominator, multiply both sides to clear it. If being divided, multiply to isolate.",
                level4: "Multiply both sides by the denominator, then isolate the variable"
            },
            proportion: {
                level1: "Do you see two fractions set equal to each other?",
                level2: "Can you use cross multiplication?",
                level3: "Cross multiply: multiply each numerator by the opposite denominator",
                level4: "Set ad = bc, then solve for your variable"
            },
            complex_rational: {
                level1: "How many fractions do you see? What are their denominators?",
                level2: "Can you find the LCD of all denominators?",
                level3: "Multiply the entire equation by the LCD to clear all fractions",
                level4: "After clearing fractions, collect all terms with your variable and factor it out if needed"
            },
            temperature: {
                level1: "What operations are being performed on the variable?",
                level2: "Is there multiplication by a fraction? Is there addition/subtraction?",
                level3: "Undo operations in reverse order - subtract first, then multiply by reciprocal",
                level4: "For F = (9/5)C + 32 solving for C: subtract 32, then multiply by 5/9"
            },
            geometry: {
                level1: "Is the variable being squared or under a square root?",
                level2: "What operations need to be undone to isolate the variable?",
                level3: "If squared, divide first then take square root. If in denominator, multiply to clear.",
                level4: "Follow inverse operations carefully, and remember ± for square roots if applicable"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Solve v = d/t for t",
                    answer: "t = d/v",
                    assesses: "simple_rational",
                    difficulty: "basic"
                },
                {
                    question: "Solve A = lw for w",
                    answer: "w = A/l",
                    assesses: "simple_rational",
                    difficulty: "basic"
                },
                {
                    question: "Solve I = Prt for r",
                    answer: "r = I/(Pt)",
                    assesses: "simple_rational",
                    difficulty: "intermediate"
                },
                {
                    question: "Solve 1/f = 1/p + 1/q for f",
                    answer: "f = pq/(p+q)",
                    assesses: "complex_rational",
                    difficulty: "advanced"
                }
            ],
            formative: [
                {
                    question: "To solve d = m/V for V, what's the first step?",
                    options: ["Divide by m", "Multiply by V", "Multiply by m", "Take reciprocal"],
                    correct: "Multiply by V",
                    explanation: "Multiply both sides by V to clear the denominator"
                },
                {
                    question: "In formula F = (9/5)C + 32, to solve for C you should:",
                    options: ["Subtract 32 first", "Multiply by 5/9 first", "Divide by F first", "Add 32 first"],
                    correct: "Subtract 32 first",
                    explanation: "Undo operations in reverse order - subtract before multiplying"
                },
                {
                    question: "For proportion a/b = c/d, cross multiplication gives:",
                    options: ["ad = bc", "ac = bd", "ab = cd", "a + d = b + c"],
                    correct: "ad = bc",
                    explanation: "Cross multiply: each numerator times opposite denominator"
                }
            ],
            summative: [
                {
                    question: "Solve 1/R = 1/R₁ + 1/R₂ for R₁",
                    answer: "R₁ = RR₂/(R₂ - R)",
                    showsWork: true,
                    rubric: {
                        find_lcd: 1,
                        clear_fractions: 2,
                        isolate_variable: 2,
                        final_form: 1
                    }
                },
                {
                    question: "Solve A = P(1 + rt) for r",
                    answer: "r = (A - P)/(Pt)",
                    showsWork: true,
                    rubric: {
                        distribute_or_divide: 1,
                        isolate_term_with_r: 2,
                        divide_to_get_r: 2
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "v = d/t, solve for d",
                    "A = bh, solve for h",
                    "C = 2πr, solve for r",
                    "F = ma, solve for a"
                ],
                medium: [
                    "I = Prt, solve for t",
                    "A = ½bh, solve for b",
                    "F = (9/5)C + 32, solve for C",
                    "P = 2l + 2w, solve for l"
                ],
                hard: [
                    "1/f = 1/p + 1/q, solve for p",
                    "1/R = 1/R₁ + 1/R₂, solve for R₂",
                    "A = πr², solve for r",
                    "V = (4/3)πr³, solve for r"
                ]
            },
            byCategory: {
                physics: [
                    "v = d/t, solve for t",
                    "F = ma, solve for a",
                    "d = m/V, solve for V",
                    "P = F/A, solve for A",
                    "V = IR, solve for R"
                ],
                geometry: [
                    "A = lw, solve for w",
                    "A = ½bh, solve for h",
                    "V = lwh, solve for h",
                    "A = πr², solve for r",
                    "C = 2πr, solve for r"
                ],
                financial: [
                    "I = Prt, solve for r",
                    "I = Prt, solve for t",
                    "A = P + I, solve for P"
                ],
                complex: [
                    "1/f = 1/p + 1/q, solve for f",
                    "1/R = 1/R₁ + 1/R₂, solve for R₁",
                    "1/t = 1/t₁ + 1/t₂, solve for t₁"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "single_fraction_one_side": "Multiply both sides by denominator to clear",
                "proportion_form": "Use cross multiplication",
                "multiple_fractions": "Find LCD and multiply entire equation by it",
                "variable_in_numerator": "Divide to isolate after clearing denominators",
                "variable_in_denominator": "Multiply to move to numerator first",
                "variable_appears_multiple_times": "Collect all terms with variable, then factor out",
                "variable_squared_or_root": "Use inverse operations, remember ± for square root",
                "nested_operations": "Work from outside in, undoing in reverse order"
            },
            whenToUseWhat: {
                multiply_by_denominator: "When variable is in a fraction on one side",
                cross_multiply: "When you have exactly two fractions set equal (proportion)",
                lcd_method: "When multiple fractions with different denominators",
                factor_out_variable: "When variable appears in multiple terms",
                take_reciprocal: "When you have 1/variable = expression",
                undo_in_reverse: "When variable has multiple operations applied to it"
            },
            methodSelection: {
                factorsToConsider: [
                    "Number of fractions in the equation",
                    "Whether variable is in numerator, denominator, or both",
                    "How many times variable appears",
                    "What other operations are applied to variable",
                    "Whether it's in proportion form (a/b = c/d)"
                ],
                generalApproach: [
                    "1. Identify variable to solve for",
                    "2. Identify all denominators",
                    "3. Clear fractions (multiply by LCD or denominator)",
                    "4. Collect all terms with desired variable",
                    "5. Factor out variable if it appears multiple times",
                    "6. Use inverse operations to isolate",
                    "7. Simplify final formula",
                    "8. State restrictions (values making denominators zero)"
                ]
            },
            optimizationTips: {
                "simplify_first": "Simplify fractions before clearing if possible",
                "choose_simplest_lcd": "Use smallest LCD to keep numbers manageable",
                "factor_early": "Factor out variable early if it appears multiple times",
                "check_units": "For science formulas, verify units make sense",
                "test_with_values": "Substitute known values to verify derived formula"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Simple Formula Sprint",
                    timeLimit: 90,
                    problems: [
                        "v = d/t, solve for t",
                        "A = lw, solve for w",
                        "d = m/V, solve for V",
                        "F = ma, solve for a",
                        "I = Prt, solve for r",
                        "C = 2πr, solve for r",
                        "P = F/A, solve for A",
                        "V = IR, solve for I"
                    ]
                },
                {
                    name: "Geometry Formula Challenge",
                    timeLimit: 120,
                    problems: [
                        "A = ½bh, solve for h",
                        "P = 2l + 2w, solve for w",
                        "V = πr²h, solve for h",
                        "A = ½(b₁+b₂)h, solve for h",
                        "V = ⅓πr²h, solve for r (approximate)"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Formula",
                    problem: "A formula relates three variables: x, y, z. When x=2, y=3, result is 12. When x=4, y=3, result is 24. Find the formula.",
                    hint: "Formula is z = xy",
                    solution: "z = xy; verify: 2×3=6... wait, that's not 12. Let me reconsider: z = 2xy gives 2(2)(3)=12 ✓ and 2(4)(3)=24 ✓"
                },
                {
                    name: "Formula Detective",
                    problem: "Given P = 2l + 2w. If P = 30 and l = 10, find w. Then create formula for l in terms of P and w.",
                    solution: "w = 5; Formula: l = (P - 2w)/2"
                },
                {
                    name: "Temperature Mystery",
                    problem: "At what temperature are Celsius and Fahrenheit equal?",
                    hint: "Set C = F in formula F = (9/5)C + 32",
                    solution: "-40°C = -40°F"
                }
            ],
            applications: [
                {
                    scenario: "Lens Design",
                    problem: "Camera lens has focal length 50mm. Object is 200mm away. Find image distance using 1/f = 1/p + 1/q",
                    solution: "q = fp/(p-f) = 50(200)/(200-50) = 66.67mm"
                },
                {
                    scenario: "Electrical Engineering",
                    problem: "Two resistors in parallel give 6Ω total. One is 10Ω. Find the other using 1/R = 1/R₁ + 1/R₂",
                    solution: "R₂ = RR₁/(R₁-R) = 6(10)/(10-6) = 15Ω"
                },
                {
                    scenario: "Work Planning",
                    problem: "Worker A finishes job in 5 hours, B in 3 hours. How long together using 1/t = 1/t₁ + 1/t₂?",
                    solution: "t = t₁t₂/(t₁+t₂) = 5(3)/(5+3) = 1.875 hours"
                },
                {
                    scenario: "Material Science",
                    problem: "Metal block has mass 156g and volume 20cm³. Find density using d = m/V",
                    solution: "d = 156/20 = 7.8 g/cm³"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Solve v = d/t for t",
                        "vt = d",           // Correct
                        "t = v/d"           // ERROR: should be d/v
                    ],
                    correctAnswer: "t = d/v",
                    errorType: "Divided by wrong variable"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Solve 1/f = 1/p + 1/q for f",
                        "1/f = (q + p)/pq",  // Correct
                        "f = pq + p/q"       // ERROR: took reciprocal incorrectly
                    ],
                    correctAnswer: "f = pq/(p + q)",
                    errorType: "Reciprocal of sum taken incorrectly"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Solve A = πr² for r",
                        "A/π = r²",          // Correct
                        "r = A/π"            // ERROR: forgot square root
                    ],
                    correctAnswer: "r = √(A/π)",
                    errorType: "Forgot to take square root"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveRationalFormulaProblem(config) {
        const { formula, solveFor, context, problemType } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseRationalFormulaProblem(formula, solveFor, context, problemType);

            // Solve the problem
            this.currentSolution = this.solveRationalFormulaProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateRationalFormulaSteps(this.currentProblem, this.currentSolution);

            // Generate workbook
            this.generateRationalFormulaWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                derivedFormula: this.currentSolution?.derivedFormula,
                restrictions: this.currentSolution?.restrictions
            };

        } catch (error) {
            throw new Error(`Failed to solve rational formula problem: ${error.message}`);
        }
    }

    parseRationalFormulaProblem(formula, solveFor, context = {}, problemType = null) {
        const cleanFormula = this.cleanMathExpression(formula);

        // If problem type is specified, use it
        if (problemType && this.rationalFormulaTypes[problemType]) {
            return {
                originalFormula: formula,
                cleanFormula: cleanFormula,
                solveFor: solveFor,
                type: problemType,
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect problem type
        for (const [type, config] of Object.entries(this.rationalFormulaTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanFormula) || pattern.test(formula)) {
                    return {
                        originalFormula: formula,
                        cleanFormula: cleanFormula,
                        solveFor: solveFor,
                        type: type,
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default to generic literal equation
        return {
            originalFormula: formula,
            cleanFormula: cleanFormula,
            solveFor: solveFor,
            type: 'generic_literal',
            context: { ...context },
            parsedAt: new Date().toISOString()
        };
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/π/g, 'pi')
            .replace(/√/g, 'sqrt')
            .trim();
    }

    solveRationalFormulaProblem_Internal(problem) {
        const solver = this.rationalFormulaTypes[problem.type]?.solver;
        if (!solver) {
            return this.solveGenericLiteral(problem);
        }

        return solver(problem);
    }

    // RATIONAL FORMULA SOLVERS

    solveSimpleFractionFormula(problem) {
        const { solveFor, cleanFormula } = problem;
        
        return {
            originalFormula: problem.originalFormula,
            solveFor: solveFor,
            type: 'Simple Fraction Formula',
            approach: 'Multiply both sides by denominator to clear fraction',
            category: 'simple_rational',
            generalSolution: `${solveFor} = (formula rearranged)`,
            explanation: 'Clear the fraction by multiplying, then isolate the variable'
        };
    }

    solveProportionFormula(problem) {
        const { solveFor, cleanFormula } = problem;
        
        return {
            originalFormula: problem.originalFormula,
            solveFor: solveFor,
            type: 'Proportion Formula',
            approach: 'Use cross multiplication: if a/b = c/d then ad = bc',
            category: 'proportion',
            generalSolution: 'Cross multiply, then solve for variable',
            explanation: 'Cross multiplication eliminates both fractions at once'
        };
    }

    solveVelocityFormula(problem) {
        const { solveFor } = problem;
        const solutions = {
            v: { formula: 'v = d/t', explanation: 'Velocity equals distance divided by time' },
            d: { formula: 'd = vt', explanation: 'Multiply both sides by t to get distance' },
            t: { formula: 't = d/v', explanation: 'Multiply by t, then divide by v to get time' }
        };

        const solution = solutions[solveFor] || solutions.v;

        return {
            originalFormula: 'v = d/t',
            solveFor: solveFor,
            derivedFormula: solution.formula,
            type: 'Velocity Formula',
            approach: 'Rearrange v = d/t',
            category: 'physics',
            explanation: solution.explanation,
            restrictions: solveFor === 't' ? 'v ≠ 0' : (solveFor === 'v' ? 't ≠ 0' : 'none'),
            units: {
                v: 'distance/time (e.g., m/s, mph)',
                d: 'distance (e.g., m, miles)',
                t: 'time (e.g., s, hours)'
            }
        };
    }

    solveDensityFormula(problem) {
        const { solveFor } = problem;
        const solutions = {
            d: { formula: 'd = m/V', explanation: 'Density equals mass divided by volume' },
            ρ: { formula: 'ρ = m/V', explanation: 'Density (rho) equals mass divided by volume' },
            m: { formula: 'm = dV', explanation: 'Multiply both sides by V to get mass' },
            V: { formula: 'V = m/d', explanation: 'Multiply by V, then divide by d to get volume' }
        };

        const solution = solutions[solveFor] || solutions.d;

        return {
            originalFormula: 'ρ = m/V (or d = m/V)',
            solveFor: solveFor,
            derivedFormula: solution.formula,
            type: 'Density Formula',
            approach: 'Rearrange ρ = m/V',
            category: 'physics',
            explanation: solution.explanation,
            restrictions: solveFor === 'V' ? 'd ≠ 0 or ρ ≠ 0' : (solveFor === 'd' || solveFor === 'ρ' ? 'V ≠ 0' : 'none'),
            units: {
                ρ: 'mass/volume (e.g., g/cm³, kg/m³)',
                d: 'mass/volume (same as ρ)',
                m: 'mass (e.g., g, kg)',
                V: 'volume (e.g., cm³, m³)'
            }
        };
    }

    solveOhmsLaw(problem) {
        const { solveFor } = problem;
        const solutions = {
            V: { formula: 'V = IR', explanation: 'Voltage equals current times resistance' },
            I: { formula: 'I = V/R', explanation: 'Divide both sides by R to get current' },
            R: { formula: 'R = V/I', explanation: 'Divide both sides by I to get resistance' }
        };

        const solution = solutions[solveFor] || solutions.V;

        return {
            originalFormula: "V = IR (Ohm's Law)",
            solveFor: solveFor,
            derivedFormula: solution.formula,
            type: "Ohm's Law",
            approach: 'Rearrange V = IR',
            category: 'physics',
            explanation: solution.explanation,
            restrictions: solveFor === 'I' ? 'R ≠ 0' : (solveFor === 'R' ? 'I ≠ 0' : 'none'),
            units: {
                V: 'voltage (volts, V)',
                I: 'current (amperes, A)',
                R: 'resistance (ohms, Ω)'
            }
        };
    }

    solveRectangleArea(problem) {
        const { solveFor } = problem;
        const solutions = {
            A: { formula: 'A = lw', explanation: 'Area equals length times width' },
            l: { formula: 'l = A/w', explanation: 'Divide both sides by w to get length' },
            w: { formula: 'w = A/l', explanation: 'Divide both sides by l to get width' }
        };

        const solution = solutions[solveFor] || solutions.A;

        return {
            originalFormula: 'A = lw',
            solveFor: solveFor,
            derivedFormula: solution.formula,
            type: 'Rectangle Area',
            approach: 'Rearrange A = lw',
            category: 'geometry',
            explanation: solution.explanation,
            restrictions: solveFor === 'l' ? 'w ≠ 0' : (solveFor === 'w' ? 'l ≠ 0' : 'none'),
            physicalMeaning: 'All values must be positive for physical dimensions'
        };
    }

    solveTriangleArea(problem) {
        const { solveFor } = problem;
        const solutions = {
            A: { formula: 'A = ½bh', explanation: 'Area equals half base times height' },
            b: { formula: 'b = 2A/h', explanation: 'Multiply by 2, then divide by h' },
            h: { formula: 'h = 2A/b', explanation: 'Multiply by 2, then divide by b' }
        };

        const solution = solutions[solveFor] || solutions.A;

        return {
            originalFormula: 'A = ½bh',
            solveFor: solveFor,
            derivedFormula: solution.formula,
            type: 'Triangle Area',
            approach: 'Rearrange A = ½bh',
            category: 'geometry',
            explanation: solution.explanation,
            restrictions: solveFor === 'b' ? 'h ≠ 0' : (solveFor === 'h' ? 'b ≠ 0' : 'none'),
            physicalMeaning: 'All values must be positive for physical dimensions'
        };
    }

    solveCircleArea(problem) {
        const { solveFor } = problem;
        const solutions = {
            A: { formula: 'A = πr²', explanation: 'Area equals pi times radius squared' },
            r: { formula: 'r = √(A/π)', explanation: 'Divide by π, then take square root' }
        };

        const solution = solutions[solveFor] || solutions.A;

        return {
            originalFormula: 'A = πr²',
            solveFor: solveFor,
            derivedFormula: solution.formula,
            type: 'Circle Area',
            approach: 'Rearrange A = πr²',
            category: 'geometry',
            explanation: solution.explanation,
            restrictions: 'A ≥ 0, r ≥ 0 (physically, r > 0 for actual circle)',
            note: 'Technically r = ±√(A/π), but physical context requires r > 0'
        };
    }

    solveSimpleInterest(problem) {
        const { solveFor } = problem;
        const solutions = {
            I: { formula: 'I = Prt', explanation: 'Interest equals principal times rate times time' },
            P: { formula: 'P = I/(rt)', explanation: 'Divide by rt to get principal' },
            r: { formula: 'r = I/(Pt)', explanation: 'Divide by Pt to get rate' },
            t: { formula: 't = I/(Pr)', explanation: 'Divide by Pr to get time' }
        };

        const solution = solutions[solveFor] || solutions.I;

        return {
            originalFormula: 'I = Prt',
            solveFor: solveFor,
            derivedFormula: solution.formula,
            type: 'Simple Interest',
            approach: 'Rearrange I = Prt',
            category: 'financial',
            explanation: solution.explanation,
            restrictions: this.getSimpleInterestRestrictions(solveFor),
            units: {
                I: 'interest ($)',
                P: 'principal ($)',
                r: 'rate (decimal, e.g., 0.05 for 5%)',
                t: 'time (years typically)'
            }
        };
    }

    getSimpleInterestRestrictions(solveFor) {
        const restrictions = {
            P: 'r ≠ 0 and t ≠ 0',
            r: 'P ≠ 0 and t ≠ 0',
            t: 'P ≠ 0 and r ≠ 0',
            I: 'none (but P, r, t must all be positive for financial context)'
        };
        return restrictions[solveFor] || 'none';
    }

    solveLensEquation(problem) {
        const { solveFor } = problem;
        const solutions = {
            f: { 
                formula: 'f = pq/(p + q)', 
                explanation: 'Find common denominator on right, then take reciprocal',
                steps: ['1/f = (q + p)/(pq)', 'f = pq/(p + q)']
            },
            p: { 
                formula: 'p = fq/(q - f)', 
                explanation: 'Subtract 1/q, find common denominator, take reciprocal',
                steps: ['1/p = 1/f - 1/q', '1/p = (q - f)/(fq)', 'p = fq/(q - f)']
            },
            q: { 
                formula: 'q = fp/(p - f)', 
                explanation: 'Subtract 1/p, find common denominator, take reciprocal',
                steps: ['1/q = 1/f - 1/p', '1/q = (p - f)/(fp)', 'q = fp/(p - f)']
            }
        };

        const solution = solutions[solveFor] || solutions.f;

        return {
            originalFormula: '1/f = 1/p + 1/q (Thin Lens Equation)',
            solveFor: solveFor,
            derivedFormula: solution.formula,
            type: 'Thin Lens Equation',
            approach: 'Find common denominator, then take reciprocal',
            category: 'complex_rational',
            explanation: solution.explanation,
            detailedSteps: solution.steps,
            restrictions: this.getLensEquationRestrictions(solveFor),
            application: 'Used in optics for cameras, telescopes, microscopes, eyeglasses',
            physicalMeaning: {
                f: 'focal length',
                p: 'object distance from lens',
                q: 'image distance from lens'
            }
        };
    }

    getLensEquationRestrictions(solveFor) {
        const restrictions = {
            f: 'p ≠ 0, q ≠ 0, p + q ≠ 0',
            p: 'f ≠ 0, q ≠ 0, q - f ≠ 0 (i.e., q ≠ f)',
            q: 'f ≠ 0, p ≠ 0, p - f ≠ 0 (i.e., p ≠ f)'
        };
        return restrictions[solveFor] || 'none';
    }

    solveParallelResistance(problem) {
        const { solveFor } = problem;
        const solutions = {
            R: { 
                formula: 'R = R₁R₂/(R₁ + R₂)', 
                explanation: 'Find common denominator, then take reciprocal'
            },
            R1: { 
                formula: 'R₁ = RR₂/(R₂ - R)', 
                explanation: 'Isolate 1/R₁, find common denominator, take reciprocal'
            },
            R2: { 
                formula: 'R₂ = RR₁/(R₁ - R)', 
                explanation: 'Isolate 1/R₂, find common denominator, take reciprocal'
            }
        };

        const solution = solutions[solveFor] || solutions.R;

        return {
            originalFormula: '1/R = 1/R₁ + 1/R₂',
            solveFor: solveFor,
            derivedFormula: solution.formula,
            type: 'Parallel Resistance',
            approach: 'Find common denominator, then take reciprocal',
            category: 'complex_rational',
            explanation: solution.explanation,
            restrictions: this.getParallelResistanceRestrictions(solveFor),
            application: 'Calculating equivalent resistance in parallel circuits',
            note: 'Parallel resistance is always less than smallest individual resistance'
        };
    }

    getParallelResistanceRestrictions(solveFor) {
        const restrictions = {
            R: 'R₁ ≠ 0, R₂ ≠ 0',
            R1: 'R ≠ 0, R₂ ≠ 0, R₂ ≠ R',
            R2: 'R ≠ 0, R₁ ≠ 0, R₁ ≠ R'
        };
        return restrictions[solveFor] || 'none';
    }

    solveCombinedWork(problem) {
        const { solveFor } = problem;
        const solutions = {
            t: { 
                formula: 't = t₁t₂/(t₁ + t₂)', 
                explanation: 'Combined time is product over sum'
            },
            t1: { 
                formula: 't₁ = tt₂/(t₂ - t)', 
                explanation: 'Isolate 1/t₁, rearrange, take reciprocal'
            },
            t2: { 
                formula: 't₂ = tt₁/(t₁ - t)', 
                explanation: 'Isolate 1/t₂, rearrange, take reciprocal'
            }
        };

        const solution = solutions[solveFor] || solutions.t;

        return {
            originalFormula: '1/t = 1/t₁ + 1/t₂',
            solveFor: solveFor,
            derivedFormula: solution.formula,
            type: 'Combined Work Rate',
            approach: 'Work rates add; reciprocal gives combined time',
            category: 'work_rate',
            explanation: solution.explanation,
            restrictions: this.getCombinedWorkRestrictions(solveFor),
            application: 'Finding time for workers/machines to complete job together',
            interpretation: {
                t: 'time for both working together',
                t1: 'time for first worker alone',
                t2: 'time for second worker alone'
            }
        };
    }

    getCombinedWorkRestrictions(solveFor) {
        const restrictions = {
            t: 't₁ ≠ 0, t₂ ≠ 0',
            t1: 't ≠ 0, t₂ ≠ 0, t₂ ≠ t',
            t2: 't ≠ 0, t₁ ≠ 0, t₁ ≠ t'
        };
        return restrictions[solveFor] || 'none';
    }

    solveTemperatureConversion(problem) {
        const { solveFor } = problem;
        const solutions = {
            F: { 
                formula: 'F = (9/5)C + 32', 
                explanation: 'Fahrenheit from Celsius: multiply by 9/5 and add 32'
            },
            C: { 
                formula: 'C = (5/9)(F - 32)', 
                explanation: 'Celsius from Fahrenheit: subtract 32, then multiply by 5/9'
            }
        };

        const solution = solutions[solveFor] || solutions.F;

        return {
            originalFormula: 'F = (9/5)C + 32',
            solveFor: solveFor,
            derivedFormula: solution.formula,
            type: 'Temperature Conversion',
            approach: 'Linear relationship between scales',
            category: 'temperature',
            explanation: solution.explanation,
            restrictions: 'none',
            keyPoints: [
                'Water freezes at 0°C = 32°F',
                'Water boils at 100°C = 212°F',
                'Equal temperature at -40°C = -40°F'
            ],
            application: 'Converting between temperature scales'
        };
    }

    solveGenericLiteral(problem) {
        const { solveFor, cleanFormula, originalFormula } = problem;

        return {
            originalFormula: originalFormula,
            solveFor: solveFor,
            type: 'Generic Literal Equation',
            approach: 'Identify variable to solve for, treat others as constants, use algebra to isolate',
            category: 'literal',
            generalProcess: [
                '1. Identify variable to solve for',
                '2. Treat all other variables as constants',
                '3. Clear any fractions by multiplying by denominators',
                '4. Collect all terms containing desired variable',
                '5. Factor out the variable if it appears multiple times',
                '6. Use inverse operations to isolate',
                '7. Simplify and state restrictions'
            ],
            note: 'Specific solution depends on formula structure'
        };
    }

    // STEP GENERATION

    generateRationalFormulaSteps(problem, solution) {
        let baseSteps = this.generateBaseRationalFormulaSteps(problem, solution);

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

    generateBaseRationalFormulaSteps(problem, solution) {
        const { type, solveFor } = problem;
        const category = this.rationalFormulaTypes[type]?.category;

        // Determine which step generator to use based on category
        switch(category) {
            case 'simple_rational':
                return this.generateSimpleRationalSteps(problem, solution);
            case 'proportion':
                return this.generateProportionSteps(problem, solution);
            case 'complex_rational':
                return this.generateComplexRationalSteps(problem, solution);
            case 'physics':
            case 'geometry':
            case 'financial':
                return this.generatePhysicsGeometrySteps(problem, solution);
            case 'temperature':
                return this.generateTemperatureSteps(problem, solution);
            default:
                return this.generateGenericLiteralSteps(problem, solution);
        }
    }

    generateSimpleRationalSteps(problem, solution) {
        const steps = [];
        const { originalFormula, solveFor } = problem;

        // Step 1: Given formula
        steps.push({
            stepNumber: 1,
            step: 'Given formula',
            description: 'Start with the original formula',
            expression: originalFormula,
            reasoning: `We want to solve for ${solveFor}`,
            goalStatement: `Rearrange to express ${solveFor} in terms of other variables`
        });

        // Step 2: Identify the structure
        steps.push({
            stepNumber: 2,
            step: 'Identify structure',
            description: `Identify where ${solveFor} appears and what operations are applied`,
            reasoning: 'Understanding the structure guides our solution strategy',
            strategyNote: 'If variable is in denominator, multiply to clear it. If being divided, multiply to isolate.'
        });

        // Step 3: Clear fractions
        steps.push({
            stepNumber: 3,
            step: 'Clear fractions',
            description: 'Multiply both sides to eliminate denominators',
            reasoning: 'Clearing fractions simplifies the equation',
            algebraicRule: 'Multiplication Property of Equality',
            reminder: 'Multiply ALL terms on BOTH sides'
        });

        // Step 4: Isolate variable
        steps.push({
            stepNumber: 4,
            step: 'Isolate variable',
            description: `Use inverse operations to isolate ${solveFor}`,
            reasoning: `We want ${solveFor} alone on one side`,
            algebraicRule: 'Use division or multiplication as needed'
        });

        // Step 5: Derived formula
        steps.push({
            stepNumber: 5,
            step: 'Derived formula',
            description: 'Simplify to final form',
            expression: solution.derivedFormula || `${solveFor} = (formula)`,
            finalAnswer: true,
            reasoning: `This expresses ${solveFor} in terms of other variables`
        });

        // Step 6: State restrictions
        if (solution.restrictions && solution.restrictions !== 'none') {
            steps.push({
                stepNumber: 6,
                step: 'State restrictions',
                description: 'Identify values that make denominators zero',
                expression: `Restrictions: ${solution.restrictions}`,
                reasoning: 'These values are not allowed as they would make the formula undefined',
                important: true
            });
        }

        return steps;
    }

    generateProportionSteps(problem, solution) {
        const steps = [];
        const { originalFormula, solveFor } = problem;

        // Step 1: Given proportion
        steps.push({
            stepNumber: 1,
            step: 'Given proportion',
            description: 'Start with the proportion',
            expression: originalFormula,
            reasoning: `We have two equal ratios; we want to solve for ${solveFor}`,
            goalStatement: `Isolate ${solveFor} using cross multiplication`
        });

        // Step 2: Cross multiply
        steps.push({
            stepNumber: 2,
            step: 'Cross multiply',
            description: 'Multiply each numerator by the opposite denominator',
            beforeExpression: originalFormula,
            operation: 'Cross multiply: (numerator₁)(denominator₂) = (numerator₂)(denominator₁)',
            reasoning: 'Cross multiplication eliminates both fractions at once',
            algebraicRule: 'For a/b = c/d, we get ad = bc',
            visualHint: 'Draw crossing arrows from each numerator to opposite denominator'
        });

        // Step 3: Simplify
        steps.push({
            stepNumber: 3,
            step: 'Simplify the equation',
            description: 'Expand the products',
            reasoning: 'This gives us an equation without fractions'
        });

        // Step 4: Solve for variable
        steps.push({
            stepNumber: 4,
            step: 'Solve for variable',
            description: `Isolate ${solveFor} using inverse operations`,
            reasoning: `Use division or other operations to get ${solveFor} alone`
        });

        // Step 5: Final formula
        steps.push({
            stepNumber: 5,
            step: 'Final formula',
            description: 'Write the derived formula',
            expression: solution.derivedFormula || `${solveFor} = (result)`,
            finalAnswer: true
        });

        return steps;
    }

    generateComplexRationalSteps(problem, solution) {
        const steps = [];
        const { originalFormula, solveFor } = problem;

        // Step 1: Given formula
        steps.push({
            stepNumber: 1,
            step: 'Given formula',
            description: 'Start with the complex rational formula',
            expression: originalFormula,
            reasoning: `We need to solve for ${solveFor}`,
            goalStatement: 'Find LCD, clear all fractions, then isolate variable',
            complexity: 'This requires multiple steps due to multiple fractions'
        });

        // Step 2: Identify denominators
        steps.push({
            stepNumber: 2,
            step: 'Identify denominators',
            description: 'List all denominators in the formula',
            reasoning: 'We need these to find the LCD',
            strategyNote: 'Look at every fraction in the equation'
        });

        // Step 3: Find LCD
        steps.push({
            stepNumber: 3,
            step: 'Find LCD',
            description: 'Determine the least common denominator of all fractions',
            reasoning: 'LCD allows us to clear all fractions at once',
            method: 'LCD is the product of all unique denominators (or their LCM)',
            visualHint: 'For 1/f = 1/p + 1/q, the LCD is fpq'
        });

        // Step 4: Multiply by LCD
        steps.push({
            stepNumber: 4,
            step: 'Multiply entire equation by LCD',
            description: 'Multiply every term on both sides by the LCD',
            reasoning: 'This eliminates all denominators',
            algebraicRule: 'Multiplication Property of Equality',
            reminder: 'Multiply EVERY term, not just the fractions',
            critical: true
        });

        // Step 5: Simplify
        steps.push({
            stepNumber: 5,
            step: 'Simplify each term',
            description: 'Cancel denominators where LCD contains them',
            reasoning: 'The denominators divide out, leaving whole expressions',
            example: 'fpq · (1/f) = pq (the f cancels)'
        });

        // Step 6: Rearrange
        steps.push({
            stepNumber: 6,
            step: 'Rearrange equation',
            description: `Collect all terms containing ${solveFor} on one side`,
            reasoning: 'This prepares for isolating the variable'
        });

        // Step 7: Factor if needed
        if (solution.explanation && solution.explanation.includes('factor')) {
            steps.push({
                stepNumber: 7,
                step: 'Factor out variable',
                description: `If ${solveFor} appears multiple times, factor it out`,
                reasoning: 'Factoring allows us to isolate the variable',
                algebraicRule: 'Distributive property: ab + ac = a(b + c)'
            });
        }

        // Step 8: Solve
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Isolate variable',
            description: `Use division or other operations to isolate ${solveFor}`,
            reasoning: 'This gives us the variable in terms of others'
        });

        // Step 9: Final formula
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Derived formula',
            description: 'Simplify to final form',
            expression: solution.derivedFormula || `${solveFor} = (formula)`,
            finalAnswer: true,
            reasoning: `This is ${solveFor} expressed in terms of other variables`
        });

        // Step 10: Restrictions
        if (solution.restrictions && solution.restrictions !== 'none') {
            steps.push({
                stepNumber: steps.length + 1,
                step: 'State restrictions',
                description: 'Identify restricted values',
                expression: `Restrictions: ${solution.restrictions}`,
                reasoning: 'These values make denominators zero and are not allowed',
                important: true
            });
        }

        return steps;
    }

    generatePhysicsGeometrySteps(problem, solution) {
        const steps = [];
        const { originalFormula, solveFor, type } = problem;

        // Step 1: Given formula
        steps.push({
            stepNumber: 1,
            step: 'Given formula',
            description: `Start with the ${solution.type}`,
            expression: originalFormula,
            reasoning: `We want to solve for ${solveFor}`,
            context: solution.application || 'This formula relates physical/geometric quantities',
            goalStatement: `Rearrange to express ${solveFor} in terms of other quantities`
        });

        // Step 2: Identify operations
        steps.push({
            stepNumber: 2,
            step: 'Identify operations',
            description: `Determine what operations are applied to ${solveFor}`,
            reasoning: 'Understanding the structure guides our approach',
            strategy: 'Look for multiplication, division, addition, subtraction, exponents'
        });

        // Step 3: Apply inverse operations
        steps.push({
            stepNumber: 3,
            step: 'Apply inverse operations',
            description: 'Use inverse operations to isolate the variable',
            reasoning: 'Each operation has an inverse that undoes it',
            examples: [
                'Multiplication ↔ Division',
                'Addition ↔ Subtraction',
                'Square ↔ Square root',
                'Fraction ↔ Multiply by denominator'
            ]
        });

        // Step 4: Perform algebraic manipulation
        steps.push({
            stepNumber: 4,
            step: 'Algebraic manipulation',
            description: solution.explanation || 'Rearrange the formula',
            reasoning: `This isolates ${solveFor} on one side`
        });

        // Step 5: Derived formula
        steps.push({
            stepNumber: 5,
            step: 'Derived formula',
            description: 'Final formula',
            expression: solution.derivedFormula,
            finalAnswer: true,
            reasoning: `Now ${solveFor} is expressed in terms of known quantities`
        });

        // Step 6: Check units (for physics)
        if (solution.units) {
            steps.push({
                stepNumber: 6,
                step: 'Verify units',
                description: 'Check that units are consistent',
                unitCheck: solution.units[solveFor],
                reasoning: 'Dimensional analysis confirms our formula is correct',
                note: 'Units on both sides should match'
            });
        }

        // Step 7: Restrictions or physical meaning
        if (solution.restrictions && solution.restrictions !== 'none') {
            steps.push({
                stepNumber: 7,
                step: 'State restrictions',
                description: 'Identify mathematical restrictions',
                expression: `Restrictions: ${solution.restrictions}`,
                reasoning: 'These values make denominators zero',
                physicalNote: solution.physicalMeaning || 'Physical context may impose additional constraints (e.g., positive values only)'
            });
        }

        return steps;
    }

    generateTemperatureSteps(problem, solution) {
        const steps = [];
        const { originalFormula, solveFor } = problem;

        // Step 1: Given formula
        steps.push({
            stepNumber: 1,
            step: 'Temperature conversion formula',
            description: 'Start with Fahrenheit-Celsius relationship',
            expression: originalFormula,
            reasoning: `We want to solve for ${solveFor}`,
            context: 'Linear relationship between two temperature scales',
            keyPoints: solution.keyPoints
        });

        if (solveFor === 'F') {
            // Already in correct form
            steps.push({
                stepNumber: 2,
                step: 'Formula is already solved',
                description: 'F is already isolated',
                expression: solution.derivedFormula,
                finalAnswer: true,
                usage: 'To convert Celsius to Fahrenheit, substitute C value into this formula'
            });
        } else if (solveFor === 'C') {
            // Need to solve for C
            steps.push({
                stepNumber: 2,
                step: 'Subtract 32 from both sides',
                description: 'Remove the constant term',
                beforeExpression: 'F = (9/5)C + 32',
                operation: '- 32',
                afterExpression: 'F - 32 = (9/5)C',
                reasoning: 'This isolates the term with C',
                algebraicRule: 'Subtraction Property of Equality'
            });

            steps.push({
                stepNumber: 3,
                step: 'Multiply by reciprocal',
                description: 'Multiply both sides by 5/9',
                beforeExpression: 'F - 32 = (9/5)C',
                operation: '× (5/9)',
                afterExpression: 'C = (5/9)(F - 32)',
                reasoning: 'Multiplying by 5/9 undoes multiplication by 9/5',
                algebraicRule: 'Multiplication Property of Equality'
            });

            steps.push({
                stepNumber: 4,
                step: 'Derived formula',
                description: 'Final formula for Celsius',
                expression: solution.derivedFormula,
                finalAnswer: true,
                usage: 'To convert Fahrenheit to Celsius, substitute F value into this formula'
            });
        }

        // Example conversions
        steps.push({
            stepNumber: steps.length + 1,
            step: 'Example applications',
            description: 'Common temperature conversions',
            examples: [
                'Water freezes: 0°C = 32°F',
                'Room temperature: ~20°C = 68°F',
                'Water boils: 100°C = 212°F',
                'Equal point: -40°C = -40°F'
            ],
            note: 'These can verify our derived formula'
        });

        return steps;
    }

    generateGenericLiteralSteps(problem, solution) {
        const steps = [];
        const { originalFormula, solveFor } = problem;

        steps.push({
            stepNumber: 1,
            step: 'Given literal equation',
            description: 'Start with the original formula',
            expression: originalFormula,
            reasoning: `We need to solve for ${solveFor}`,
            goalStatement: `Isolate ${solveFor} and express it in terms of other variables`
        });

        steps.push({
            stepNumber: 2,
            step: 'General approach',
            description: 'Follow systematic steps to solve',
            process: solution.generalProcess,
            reasoning: 'Literal equations are solved like numerical equations, treating other variables as constants'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply techniques',
            description: 'Use appropriate algebraic techniques',
            techniques: [
                'Clear fractions by multiplying by LCD',
                'Collect terms with desired variable',
                'Factor out the variable if it appears multiple times',
                'Use inverse operations to isolate',
                'Simplify the result'
            ]
        });

        steps.push({
            stepNumber: 4,
            step: 'Final note',
            description: 'Solution structure depends on specific formula',
            note: solution.note,
            reminder: 'Always state restrictions (values making denominators zero)'
        });

        return steps;
    }

    // ENHANCED EXPLANATION METHODS (similar to linear workbook)

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
            'Given formula': "We start with a math sentence that shows how different things are related. Our job is to find out how to get one specific thing by itself!",
            'Identify structure': "Let's look at where our mystery letter is hiding and what math operations are around it. It's like finding a toy in a messy room - we need to see what's in the way!",
            'Clear fractions': "When we see fractions (numbers split up), we can make them whole by multiplying. It's like having half a cookie and getting another half to make a whole cookie!",
            'Cross multiply': "This is a special shortcut! When two fractions are equal, we can connect them by multiplying criss-cross, like drawing an X!",
            'Find LCD': "LCD means 'Least Common Denominator' - it's like finding a number that all the bottom parts of fractions can divide into evenly. It's their common friend!",
            'Multiply entire equation by LCD': "We multiply everything by the LCD - it's like giving everyone the same number of treats so everything is fair and even!",
            'Isolate variable': "Now we get our letter all by itself, away from the numbers. It's like separating one toy from a pile so we can see it clearly!",
            'State restrictions': "Some numbers aren't allowed because they break the rules - like you can't divide by zero. It's like 'do not enter' signs in math!",
            'Derived formula': "We did it! Now we have a formula that tells us how to find our mystery letter using the other letters. It's like a recipe!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our puzzle and get the variable by itself!";
    }

    findRelevantAnalogy(step, problem) {
        const category = this.rationalFormulaTypes[problem.type]?.category;
        
        // Check for step-specific analogies
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (step.step.toLowerCase().includes(key.toLowerCase()) || 
                (analogy.suitableFor && analogy.suitableFor.includes(category))) {
                return analogy.ELI5 || analogy.explanation;
            }
        }

        // Default analogy based on step type
        if (step.step.includes('Clear fractions')) {
            return this.analogies.clearing_fractions.ELI5;
        } else if (step.step.includes('Cross multiply')) {
            return this.analogies.cross_multiplication.ELI5;
        } else if (step.step.includes('LCD')) {
            return this.analogies.lcd_as_translator.ELI5;
        } else if (step.step.includes('Isolate')) {
            return this.analogies.isolating_variable.ELI5;
        }

        return "Think of this like solving a puzzle - each step gets us closer to finding what we're looking for!";
    }

    convertToSimpleLanguage(description) {
        if (!description) return '';

        const simplifications = {
            'formula': 'math recipe',
            'variable': 'mystery letter',
            'coefficient': 'number next to the letter',
            'constant': 'plain number',
            'denominator': 'bottom number of fraction',
            'numerator': 'top number of fraction',
            'LCD': 'common bottom number',
            'reciprocal': 'flipped fraction',
            'isolate': 'get by itself',
            'factor': 'pull out',
            'restriction': 'not allowed number',
            'derive': 'figure out',
            'rearrange': 'move around',
            'inverse operation': 'opposite action',
            'cross multiply': 'multiply criss-cross',
            'proportion': 'two equal fractions',
            'rational': 'has fractions',
            'literal equation': 'formula with letters'
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
            'Given formula': 'Write the formula clearly, maybe in a box, with the variable you\'re solving for highlighted',
            'Identify structure': 'Circle the variable and draw boxes around operations applied to it',
            'Clear fractions': 'Draw arrows showing multiplication by denominator on both sides',
            'Cross multiply': 'Draw crossing arrows from each numerator to the opposite denominator',
            'Find LCD': 'List all denominators and find the smallest number they all divide into',
            'Multiply entire equation by LCD': 'Show LCD multiplying each term, with cancellations marked',
            'Isolate variable': 'Draw a spotlight or circle around the variable standing alone',
            'State restrictions': 'Write forbidden values with a "no entry" symbol',
            'Derived formula': 'Box the final answer and write it clearly'
        };

        return visualizations[step.step] || 'Draw a picture or diagram to help understand what\'s happening';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Why This Leads to Next Step',
                    explanation: this.generateStepBridge(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    addErrorPrevention(step, problemType) {
        const category = this.rationalFormulaTypes[problemType]?.category || 'simple_rational';
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
            'Given formula': 'A formula expresses a relationship between quantities. Solving for a variable means isolating it to show how it depends on other quantities.',
            'Clear fractions': 'Fractions represent division. Multiplying by the denominator "undoes" the division, converting to whole expressions.',
            'Cross multiply': 'In a proportion, cross products are equal because both ratios represent the same relationship.',
            'Find LCD': 'The LCD is the smallest common denominator that allows us to work with all fractions uniformly.',
            'Multiply entire equation by LCD': 'Multiplying everything by LCD clears all denominators simultaneously while maintaining equality.',
            'Isolate variable': 'Isolating means getting the variable alone on one side, expressed in terms of everything else.',
            'Factor out variable': 'When a variable appears multiple times, factoring extracts it as a common element.',
            'State restrictions': 'Restrictions identify values that make the formula undefined (usually denominator = 0).',
            'Derived formula': 'The result is a new formula expressing our variable of interest in terms of other variables.'
        };

        return conceptualExplanations[step.step] || 'This algebraic manipulation maintains equality while transforming the equation.';
    }

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Identify what to do: ${step.operation}
2. Apply it to both sides of the equation
3. Simplify the result
4. Verify equality is maintained`;
        }
        return 'Follow the standard algebraic procedure for this type of step.';
    }

    getVisualExplanation(step, problem) {
        const category = this.rationalFormulaTypes[problem.type]?.category;
        
        const visualExplanations = {
            'simple_rational': 'Visualize the fraction bar as a division operation that can be "cleared" by multiplying.',
            'proportion': 'Picture two balanced scales with fractions - cross multiplying shows they balance the same way.',
            'complex_rational': 'Imagine multiple fraction bars all being eliminated by finding a common multiplier (LCD).',
            'physics': 'Think of the formula as a machine where changing inputs affects the output in a predictable way.',
            'geometry': 'Visualize the geometric shape and how the formula relates its measurements.'
        };

        return visualExplanations[category] || 'Draw the equation with boxes and arrows showing transformations.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Given formula': 'Starting equation or formula',
            'Clear fractions': 'Multiplication Property of Equality: multiply both sides by same non-zero expression',
            'Cross multiply': 'For a/b = c/d, we have ad = bc (special case of clearing fractions)',
            'Find LCD': 'Least Common Denominator: LCD(b₁, b₂, ...) = smallest number divisible by all',
            'Multiply entire equation by LCD': 'Distributive property applied to both sides',
            'Isolate variable': 'Inverse operations: undo operations systematically',
            'Factor out variable': 'Distributive property: ab + ac = a(b + c)',
            'State restrictions': 'Domain restrictions: identify undefined values'
        };

        return algebraicRules[step.step] || 'Apply standard algebraic properties.';
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
                'formula': 'equation',
                'variable': 'unknown',
                'denominator': 'bottom of fraction',
                'numerator': 'top of fraction',
                'reciprocal': 'flipped version',
                'LCD': 'common denominator',
                'isolate': 'get alone',
                'factor': 'pull out',
                'restriction': 'forbidden value'
            },
            ELI5: {
                'formula': 'math recipe',
                'variable': 'mystery letter',
                'denominator': 'bottom number',
                'numerator': 'top number',
                'reciprocal': 'upside-down fraction',
                'LCD': 'number that all bottoms divide into',
                'isolate': 'get all by itself',
                'factor': 'take out the common part',
                'restriction': 'number we can\'t use'
            },
            intermediate: {
                // Use standard terms
            },
            detailed: {
                'formula': 'mathematical formula or literal equation',
                'variable': 'algebraic variable',
                'denominator': 'denominator (divisor)',
                'numerator': 'numerator (dividend)',
                'reciprocal': 'multiplicative inverse',
                'LCD': 'least common denominator',
                'isolate': 'isolate (express in terms of)',
                'factor': 'factor (extract common factor)',
                'restriction': 'domain restriction'
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

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `After ${currentStep.step}, we have: ${currentStep.afterExpression || currentStep.expression || 'a simplified form'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `Having completed ${currentStep.step}, we proceed to ${nextStep.step} to continue isolating the variable`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase() || 'apply the appropriate technique'}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        if (nextStep.step.includes('Clear') || nextStep.step.includes('LCD')) {
            return 'fractions make algebra more complicated, so we eliminate them first';
        } else if (nextStep.step.includes('Isolate')) {
            return 'we need the variable alone to express it as a formula';
        } else if (nextStep.step.includes('Factor')) {
            return 'the variable appears multiple times and needs to be collected';
        } else if (nextStep.step.includes('restriction')) {
            return 'we must identify values that make the formula undefined';
        }
        return 'we need to continue simplifying to reach the final formula';
    }

    explainStepBenefit(nextStep) {
        return `bringing us closer to the derived formula expressing our variable in terms of others`;
    }

    generatePreventionTips(step, problemType) {
        const category = this.rationalFormulaTypes[problemType]?.category;
        
        const tips = {
            'Clear fractions': [
                'Multiply EVERY term on BOTH sides',
                'Don\'t forget to distribute if there are parentheses',
                'Check that all denominators are eliminated'
            ],
            'Cross multiply': [
                'Make sure you have exactly two fractions equal to each other',
                'Multiply numerator of first by denominator of second',
                'Multiply numerator of second by denominator of first',
                'Set the products equal'
            ],
            'Find LCD': [
                'List all denominators',
                'Find the smallest number divisible by all',
                'Or multiply all unique denominators together'
            ],
            'Multiply entire equation by LCD': [
                'Multiply EACH AND EVERY term',
                'Use distributive property carefully',
                'Check that denominators cancel where expected'
            ],
            'Isolate variable': [
                'Use inverse operations in correct order',
                'Keep the variable positive if possible',
                'Don\'t divide by the variable itself'
            ],
            'Factor out variable': [
                'Identify all terms containing the variable',
                'Extract the variable as a common factor',
                'What remains goes in parentheses'
            ],
            'State restrictions': [
                'Set each denominator equal to zero',
                'Solve to find forbidden values',
                'State clearly in final answer'
            ]
        };

        return tips[step.step] || ['Work carefully and check each step'];
    }

    generateCheckPoints(step) {
        return [
            'Did I perform the operation on both sides?',
            'Are my algebraic manipulations correct?',
            'Did I simplify completely?',
            'Does this step move me toward isolating the variable?',
            'Have I introduced any errors?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const category = this.rationalFormulaTypes[problemType]?.category;
        
        const warnings = {
            'Clear fractions': [
                'Make sure to multiply ALL terms, not just fractions',
                'Watch for parentheses that need distributing'
            ],
            'Cross multiply': [
                'Only works for a/b = c/d form',
                'Can\'t use if more than one fraction on a side'
            ],
            'Find LCD': [
                'Don\'t confuse LCD with GCF',
                'Make sure you found the LEAST common denominator'
            ],
            'Multiply entire equation by LCD': [
                'Easy to forget to multiply a term',
                'Distribution errors are common'
            ],
            'Factor out variable': [
                'Make sure variable appears in ALL terms being factored',
                'Don\'t forget the remaining expression in parentheses'
            ],
            'Isolate variable': [
                'Don\'t divide by the variable itself',
                'Watch for negative signs'
            ]
        };

        return warnings[step.step] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Given formula': 'Do I understand what variable I\'m solving for?',
            'Clear fractions': 'Did I multiply both sides by the denominator?',
            'Cross multiply': 'Did I multiply each numerator by the opposite denominator?',
            'Find LCD': 'Is this the smallest number divisible by all denominators?',
            'Multiply entire equation by LCD': 'Did I multiply EVERY single term by the LCD?',
            'Isolate variable': 'Is my variable now alone on one side?',
            'Factor out variable': 'Is the variable extracted from all relevant terms?',
            'State restrictions': 'Have I identified all values that make denominators zero?',
            'Derived formula': 'Does my formula express the variable in terms of others?'
        };

        return questions[step.step] || 'Does this step make sense and move me toward the solution?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Given formula': 'The original formula clearly stated',
            'Clear fractions': 'An equation with no fractions, or fewer fractions',
            'Cross multiply': 'An equation without fractions',
            'Find LCD': 'A value that all denominators divide into',
            'Multiply entire equation by LCD': 'All fractions eliminated',
            'Isolate variable': 'The variable alone on one side',
            'Factor out variable': 'Variable outside parentheses with remaining expression inside',
            'State restrictions': 'List of forbidden values',
            'Derived formula': 'Final formula with variable isolated'
        };

        return expectations[step.step] || 'Progress toward isolating the variable';
    }

    generateTroubleshootingTips(step) {
        return [
            'If stuck, review what the step is asking',
            'Check that operations are performed on both sides',
            'Verify your algebra carefully',
            'Try a specific numerical example to test',
            'Look for similar worked examples',
            'Break complex steps into smaller sub-steps'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Given formula': [
                'What variable am I solving for?',
                'Where does this variable appear in the formula?',
                'What operations are applied to it?'
            ],
            'Clear fractions': [
                'What is the denominator?',
                'What do I multiply both sides by?',
                'Did I multiply all terms?'
            ],
            'Cross multiply': [
                'Do I have a/b = c/d form?',
                'What is numerator times opposite denominator?',
                'Are the cross products equal?'
            ],
            'Find LCD': [
                'What are all the denominators?',
                'What is the smallest number they all divide into?',
                'Can I verify this is correct?'
            ],
            'Multiply entire equation by LCD': [
                'How many terms are in the equation?',
                'Have I multiplied each one by LCD?',
                'Which denominators cancel out?'
            ],
            'Isolate variable': [
                'What operations are still applied to the variable?',
                'What inverse operations do I need?',
                'In what order should I undo them?'
            ],
            'Factor out variable': [
                'How many times does the variable appear?',
                'What is the common factor?',
                'What remains after factoring?'
            ],
            'State restrictions': [
                'What are all the denominators?',
                'What values make each one zero?',
                'Are there any other constraints?'
            ]
        };

        return questions[step.step] || ['What is the goal?', 'How do I achieve it?', 'What could go wrong?'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.rationalFormulaTypes[problem.type]?.category || 'simple_rational';
        const hintSet = this.hints[category] || this.hints.simple_rational;

        return {
            level1: hintSet.level1 || 'Think about the structure of the formula.',
            level2: hintSet.level2 || 'Consider what operation you need to apply.',
            level3: hintSet.level3 || 'Apply the appropriate algebraic technique.',
            level4: hintSet.level4 || 'Execute the specific manipulation needed.'
        };
    }

    breakIntoSubSteps(step) {
        if (step.step === 'Clear fractions') {
            return [
                'Identify the denominator',
                'Multiply left side by denominator',
                'Multiply right side by denominator',
                'Simplify (cancel denominator)',
                'Verify fractions are gone'
            ];
        } else if (step.step === 'Cross multiply') {
            return [
                'Identify the two fractions',
                'Multiply first numerator by second denominator',
                'Multiply second numerator by first denominator',
                'Set the products equal',
                'Simplify'
            ];
        } else if (step.step === 'Multiply entire equation by LCD') {
            return [
                'Determine the LCD',
                'Multiply first term by LCD',
                'Multiply second term by LCD',
                'Continue for all terms',
                'Simplify by canceling denominators'
            ];
        } else if (step.step === 'Isolate variable') {
            return [
                'Identify operations on the variable',
                'Choose the inverse operations',
                'Apply them in correct order',
                'Simplify to get variable alone'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same type of manipulation with a different formula',
            practiceHint: 'Start with simpler formulas to build confidence',
            extension: 'Once comfortable, try formulas with more variables or complexity'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What do I see in this formula?',
            goal: 'What variable am I trying to isolate?',
            strategy: 'What algebraic technique should I use?',
            execute: 'How do I perform this correctly?',
            verify: 'Does the result make sense?'
        };
    }

    identifyDecisionPoints(step) {
        const decisions = {
            'Clear fractions': ['Which denominator to eliminate first?', 'Multiply or use another method?'],
            'Find LCD': ['Multiply all denominators or find true LCD?', 'Is there a simpler approach?'],
            'Isolate variable': ['What order for inverse operations?', 'Divide or factor out?'],
            'Factor out variable': ['Is factoring necessary?', 'What goes in parentheses?']
        };

        return decisions[step.step] || ['What approach to use?', 'What order of operations?'];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'Clear fractions': [
                'Could multiply by denominator',
                'Could use LCD if multiple fractions',
                'Could cross-multiply if proportion'
            ],
            'Isolate variable': [
                'Could use inverse operations',
                'Could factor out if appears multiple times',
                'Could rearrange then divide'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `Step ${stepIndex + 1} builds on step ${stepIndex} by continuing the algebraic manipulation`,
            progression: 'We are getting closer to isolating the variable',
            relationship: 'Each step removes one layer of complexity'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.rationalFormulaTypes[problemType]?.category || 'simple_rational';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic algebra', 'Fraction operations'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Given formula': ['formula', 'variable', 'literal equation'],
            'Clear fractions': ['fraction', 'denominator', 'numerator', 'multiply'],
            'Cross multiply': ['proportion', 'cross multiply', 'numerator', 'denominator'],
            'Find LCD': ['LCD', 'least common denominator', 'multiple'],
            'Multiply entire equation by LCD': ['LCD', 'distribute', 'cancel'],
            'Isolate variable': ['isolate', 'inverse operation', 'solve for'],
            'Factor out variable': ['factor', 'common factor', 'distributive property'],
            'State restrictions': ['restriction', 'domain', 'undefined', 'denominator zero'],
            'Derived formula': ['derived', 'formula', 'express in terms of']
        };

        return vocabulary[step.step] || ['algebra', 'equation'];
    }

    generateThinkingPrompts(step) {
        return {
            before: `Before ${step.step}, what do I need to identify or understand?`,
            during: `As I perform ${step.step}, what should I be careful about?`,
            after: `After ${step.step}, how can I verify it's correct?`
        };
    }

    findRealWorldConnection(step, problem) {
        const category = this.rationalFormulaTypes[problem.type]?.category;
        
        const connections = {
            'physics': 'Physics formulas let us calculate real quantities like speed, force, or energy',
            'geometry': 'Geometric formulas help with construction, design, and measurement',
            'financial': 'Financial formulas are used daily in banking, investing, and budgeting',
            'complex_rational': 'Complex formulas appear in optics, electronics, and engineering',
            'work_rate': 'Work rate formulas help with project planning and resource allocation'
        };

        return connections[category] || 'Formulas help us solve real problems by relating different quantities';
    }

    // WORKBOOK GENERATION

    generateRationalFormulaWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createFormulaContextSection(),
            this.createEnhancedStepsSection(),
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
            title: 'Enhanced Solving Rational Formulas for a Variable Mathematical Workbook',
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
            ['Problem Type', this.rationalFormulaTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.rationalFormulaTypes[this.currentProblem.type]?.category || 'rational_formula'],
            ['Original Formula', this.currentProblem.originalFormula],
            ['Solve For', this.currentProblem.solveFor],
            ['Description', this.rationalFormulaTypes[this.currentProblem.type]?.description || 'Solve literal equation']
        ];

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.rationalFormulaTypes[this.currentProblem.type]?.category;
        const prereqs = this.prerequisites[category];

        if (!prereqs) return null;

        const prereqData = [
            ['Required Skills', prereqs.skills.join(', ')],
            ['Prior Knowledge', prereqs.priorKnowledge.join(', ')],
            ['', ''],
            ['Self-Assessment Questions', '']
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

    createFormulaContextSection() {
        if (!this.currentSolution) return null;

        const contextData = [
            ['Formula Type', this.currentSolution.type || 'Literal Equation']
        ];

        if (this.currentSolution.application) {
            contextData.push(['Application', this.currentSolution.application]);
        }

        if (this.currentSolution.units) {
            contextData.push(['', '']);
            contextData.push(['Units', '']);
            for (const [variable, unit] of Object.entries(this.currentSolution.units)) {
                contextData.push([variable, unit]);
            }
        }

        if (this.currentSolution.physicalMeaning) {
            if (typeof this.currentSolution.physicalMeaning === 'string') {
                contextData.push(['', '']);
                contextData.push(['Physical Meaning', this.currentSolution.physicalMeaning]);
            } else {
                contextData.push(['', '']);
                contextData.push(['Physical Meaning', '']);
                for (const [variable, meaning] of Object.entries(this.currentSolution.physicalMeaning)) {
                    contextData.push([variable, meaning]);
                }
            }
        }

        if (this.currentSolution.keyPoints) {
            contextData.push(['', '']);
            contextData.push(['Key Points', '']);
            this.currentSolution.keyPoints.forEach((point, index) => {
                contextData.push([`${index + 1}`, point]);
            });
        }

        return {
            title: 'Formula Context',
            type: 'context',
            data: contextData
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
                stepsData.push(['→ Connection', step.title]);
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
                stepsData.push(['Algebraic Rule', step.algebraicRule]);
            }

            if (step.strategyNote) {
                stepsData.push(['Strategy', step.strategyNote]);
            }

            // ELI5 explanations
            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
                if (step.ELI5.visualization) {
                    stepsData.push(['How to Visualize', step.ELI5.visualization]);
                }
            }

            // Enhanced explanations for detailed level
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Algebraic', step.explanations.algebraic]);
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
            }

            // Thinking prompts
            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Before Step', step.thinkingPrompts.before]);
                stepsData.push(['During Step', step.thinkingPrompts.during]);
                stepsData.push(['After Step', step.thinkingPrompts.after]);
            }

            // Self-check
            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            // Critical/important markers
            if (step.critical) {
                stepsData.push(['⚠️ CRITICAL', 'This step is especially important - errors here are common']);
            }

            if (step.important) {
                stepsData.push(['❗ Important', 'Pay special attention to this step']);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Variable Solved For', this.currentProblem.solveFor],
            ['Derived Formula', this.currentSolution.derivedFormula || '(see steps)']
        ];

        if (this.currentSolution.restrictions && this.currentSolution.restrictions !== 'none') {
            solutionData.push(['Restrictions', this.currentSolution.restrictions]);
        }

        if (this.currentSolution.note) {
            solutionData.push(['Note', this.currentSolution.note]);
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
            ['Solution Method', this.currentSolution.approach || this.currentSolution.type],
            ['Category', this.currentSolution.category || this.rationalFormulaTypes[this.currentProblem.type]?.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel]
        ];

        if (this.currentSolution.detailedSteps) {
            analysisData.push(['', '']);
            analysisData.push(['Detailed Steps', '']);
            this.currentSolution.detailedSteps.forEach((step, index) => {
                analysisData.push([`${index + 1}`, step]);
            });
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
            ['Verification Method', 'Substitute test values and check equality'],
            ['', '']
        ];

        if (this.currentSolution.derivedFormula) {
            verificationData.push(['Derived Formula', this.currentSolution.derivedFormula]);
            verificationData.push(['Original Formula', this.currentProblem.originalFormula]);
            verificationData.push(['', '']);
            verificationData.push(['Verification Strategy', 'Choose test values for other variables, calculate using both formulas, verify equality']);
        }

        if (this.currentSolution.restrictions && this.currentSolution.restrictions !== 'none') {
            verificationData.push(['', '']);
            verificationData.push(['Check Restrictions', 'Verify that restricted values make denominators zero']);
            verificationData.push(['Restrictions', this.currentSolution.restrictions]);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const category = this.rationalFormulaTypes[this.currentProblem.type]?.category;
        
        // Find relevant real-world problems
        const relevantProblems = Object.entries(this.realWorldProblems)
            .filter(([key, app]) => {
                return app.formula && (
                    app.formula.includes(this.currentProblem.originalFormula) ||
                    this.currentProblem.originalFormula.includes(app.formula) ||
                    key.includes(category)
                );
            })
            .slice(0, 2);

        if (relevantProblems.length === 0) {
            // Show general applications
            const appData = [
                ['Real-World Applications', ''],
                ['', 'Rational formulas appear throughout science, engineering, and everyday life'],
                ['Physics', 'Velocity, density, resistance, optics'],
                ['Geometry', 'Area, volume, perimeter calculations'],
                ['Finance', 'Interest, investment, loan calculations'],
                ['Engineering', 'Circuit design, material properties, efficiency']
            ];

            return {
                title: 'Real-World Applications',
                type: 'applications',
                data: appData
            };
        }

        const appData = [
            ['Real-World Applications', ''],
            ['', '']
        ];

        relevantProblems.forEach(([key, app], index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Formula', app.formula]);
            appData.push(['Context', app.context]);
            if (app.examples && app.examples[0]) {
                appData.push(['Example', app.examples[0]]);
            }
            if (app.solveFor) {
                appData.push(['Can Solve For', app.solveFor.join(', ')]);
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

        const category = this.rationalFormulaTypes[this.currentProblem.type]?.category;
        const notes = this.generatePedagogicalNotes(category);

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

        const category = this.rationalFormulaTypes[this.currentProblem.type]?.category;
        const alternatives = this.generateAlternativeMethods(category);

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

    createPracticeProblemsSection() {
        const category = this.rationalFormulaTypes[this.currentProblem.type]?.category;
        const problems = this.questionBank.byCategory[category] || this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Similar Problems', '']
        ];

        // Get problems from the category
        if (this.questionBank.byCategory[category]) {
            this.questionBank.byCategory[category].slice(0, 5).forEach((p, i) => {
                const problemText = typeof p === 'string' ? p : `${p.formula}, solve for ${p.solveFor}`;
                practiceData.push([`${i + 1}`, problemText]);
            });
        } else {
            // Use general problems
            practiceData.push(['1', 'v = d/t, solve for t']);
            practiceData.push(['2', 'A = lw, solve for w']);
            practiceData.push(['3', 'I = Prt, solve for r']);
            practiceData.push(['4', 'F = (9/5)C + 32, solve for C']);
            practiceData.push(['5', '1/f = 1/p + 1/q, solve for p']);
        }

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    generatePedagogicalNotes(category) {
        const pedagogicalDatabase = {
            simple_rational: {
                objectives: [
                    'Solve simple rational formulas for a specified variable',
                    'Clear fractions by multiplying by denominators',
                    'Identify and state restrictions',
                    'Apply formulas to real-world contexts'
                ],
                keyConcepts: [
                    'Formulas express relationships between quantities',
                    'Treat other variables as constants',
                    'Multiply to clear denominators',
                    'Division is inverse of multiplication'
                ],
                prerequisites: [
                    'Basic algebra and equation solving',
                    'Fraction operations',
                    'Understanding of inverse operations',
                    'Literal equations (solving for variables)'
                ],
                commonDifficulties: [
                    'Forgetting to multiply all terms by denominator',
                    'Treating variable being solved for as a constant',
                    'Not stating restrictions',
                    'Sign errors when multiplying'
                ],
                teachingStrategies: [
                    'Start with familiar formulas (v=d/t, A=lw)',
                    'Emphasize "multiply ALL terms on BOTH sides"',
                    'Use concrete examples with numbers first',
                    'Connect to real-world applications',
                    'Practice identifying which variable is unknown'
                ],
                extensions: [
                    'Complex rational formulas with multiple fractions',
                    'Formulas where variable appears multiple times',
                    'Quadratic formulas requiring quadratic formula',
                    'Systems of literal equations'
                ],
                assessment: [
                    'Can student identify what to solve for?',
                    'Does student multiply both sides correctly?',
                    'Can student state restrictions?',
                    'Can student apply formula to real problem?'
                ]
            },
            proportion: {
                objectives: [
                    'Use cross multiplication to solve proportions',
                    'Set up proportions from word problems',
                    'Solve for any variable in a proportion',
                    'Apply proportions to scaling problems'
                ],
                keyConcepts: [
                    'Proportion shows two equal ratios',
                    'Cross multiplication: ad = bc for a/b = c/d',
                    'Proportions preserve relationships',
                    'Used for scaling and similar figures'
                ],
                prerequisites: [
                    'Understanding of ratios',
                    'Fraction equivalence',
                    'Basic equation solving',
                    'Multiplication and division'
                ],
                commonDifficulties: [
                    'Setting up proportion incorrectly',
                    'Cross multiplying incorrectly',
                    'Not simplifying before cross multiplying',
                    'Confusing which terms to multiply'
                ],
                teachingStrategies: [
                    'Draw arrows to show cross products',
                    'Use concrete examples (recipes, maps)',
                    'Practice setting up from word problems',
                    'Verify solutions make sense'
                ],
                extensions: [
                    'Inverse proportions',
                    'Joint variation',
                    'Similar triangles and scaling',
                    'Rate problems'
                ],
                assessment: [
                    'Can student set up proportion correctly?',
                    'Does student cross multiply accurately?',
                    'Can student solve for any variable?',
                    'Can student apply to real contexts?'
                ]
            },
            complex_rational: {
                objectives: [
                    'Find LCD of multiple fractions',
                    'Clear all fractions by multiplying by LCD',
                    'Factor out variables appearing multiple times',
                    'Solve complex literal equations'
                ],
                keyConcepts: [
                    'LCD clears all fractions at once',
                    'Must multiply every term by LCD',
                    'Factor when variable appears multiple times',
                    'Always identify restrictions'
                ],
                prerequisites: [
                    'Finding LCD of fractions',
                    'Distributive property',
                    'Factoring algebraic expressions',
                    'Simple rational formula solving'
                ],
                commonDifficulties: [
                    'Finding LCD incorrectly',
                    'Not multiplying all terms by LCD',
                    'Distribution errors',
                    'Forgetting to factor out variable',
                    'Missing restrictions'
                ],
                teachingStrategies: [
                    'Teach LCD method systematically',
                    'Practice distribution carefully',
                    'Emphasize multiply EVERY term',
                    'Use color coding for different terms',
                    'Always check restrictions'
                ],
                extensions: [
                    'Formulas with variable in exponent',
                    'Formulas requiring quadratic formula',
                    'Systems of rational equations',
                    'Applications in optics, circuits'
                ],
                assessment: [
                    'Can student find LCD correctly?',
                    'Does student multiply all terms?',
                    'Can student factor appropriately?',
                    'Does student state restrictions?'
                ]
            },
            physics: {
                objectives: [
                    'Rearrange physics formulas for different variables',
                    'Understand physical meaning of formulas',
                    'Check dimensional analysis',
                    'Apply formulas to real physics problems'
                ],
                keyConcepts: [
                    'Formulas relate physical quantities',
                    'Units must be consistent',
                    'Rearranging doesn\'t change relationship',
                    'Physical constraints may apply'
                ],
                prerequisites: [
                    'Basic physics concepts',
                    'Unit awareness',
                    'Literal equation solving',
                    'Scientific notation'
                ],
                commonDifficulties: [
                    'Forgetting units',
                    'Not understanding physical meaning',
                    'Algebraic errors',
                    'Confusing similar formulas'
                ],
                teachingStrategies: [
                    'Always include units',
                    'Discuss physical meaning',
                    'Use real measurements',
                    'Verify dimensional analysis',
                    'Connect to lab activities'
                ],
                extensions: [
                    'Derivation of formulas',
                    'Combined formulas',
                    'Vector formulas',
                    'Calculus-based physics'
                ],
                assessment: [
                    'Can student rearrange formula?',
                    'Does student check units?',
                    'Can student explain physically?',
                    'Can student apply correctly?'
                ]
            },
            geometry: {
                objectives: [
                    'Solve geometric formulas for dimensions',
                    'Apply area and volume formulas',
                    'Work with squares and square roots',
                    'Use formulas in design problems'
                ],
                keyConcepts: [
                    'Formulas relate geometric measurements',
                    'All dimensions must be positive',
                    'May involve exponents and roots',
                    'Used in construction and design'
                ],
                prerequisites: [
                    'Geometric shapes and properties',
                    'Area and volume concepts',
                    'Square roots',
                    'Basic algebra'
                ],
                commonDifficulties: [
                    'Forgetting square root when needed',
                    'Sign issues with roots',
                    'Not considering physical constraints',
                    'Unit conversion'
                ],
                teachingStrategies: [
                    'Use manipulatives and drawings',
                    'Connect to real objects',
                    'Measure actual dimensions',
                    'Discuss when ± applies',
                    'Emphasize positive dimensions'
                ],
                extensions: [
                    'Surface area formulas',
                    '3D geometry',
                    'Trigonometric formulas',
                    'Coordinate geometry'
                ],
                assessment: [
                    'Can student solve for dimension?',
                    'Does student handle roots correctly?',
                    'Can student apply to real shapes?',
                    'Does student consider constraints?'
                ]
            },
            financial: {
                objectives: [
                    'Rearrange financial formulas',
                    'Calculate interest, principal, rate, time',
                    'Understand financial relationships',
                    'Apply to real financial decisions'
                ],
                keyConcepts: [
                    'Simple and compound interest',
                    'Profit, revenue, cost relationships',
                    'Percent calculations',
                    'Time value of money'
                ],
                prerequisites: [
                    'Percent understanding',
                    'Decimal operations',
                    'Basic algebra',
                    'Financial literacy basics'
                ],
                commonDifficulties: [
                    'Confusing rate as percent vs decimal',
                    'Unit confusion (years, months)',
                    'Not understanding financial terms',
                    'Calculation errors'
                ],
                teachingStrategies: [
                    'Use real financial scenarios',
                    'Clarify percent vs decimal',
                    'Discuss financial literacy',
                    'Use calculators appropriately',
                    'Connect to personal finance'
                ],
                extensions: [
                    'Compound interest',
                    'Loan amortization',
                    'Investment growth',
                    'Depreciation'
                ],
                assessment: [
                    'Can student rearrange formula?',
                    'Does student use correct units?',
                    'Can student interpret results?',
                    'Can student apply to decisions?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve rational formulas for specified variables'],
            keyConcepts: ['Formula manipulation', 'Variable isolation'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Algebraic manipulation challenges'],
            teachingStrategies: ['Systematic instruction'],
            extensions: ['More complex formulas'],
            assessment: ['Verify understanding of process']
        };
    }

    generateAlternativeMethods(category) {
        const alternativeDatabase = {
            simple_rational: {
                primaryMethod: 'Multiply by Denominator',
                methods: [
                    {
                        name: 'Direct Multiplication',
                        description: 'Multiply both sides by denominator to clear fraction immediately'
                    },
                    {
                        name: 'Cross Multiplication (if applicable)',
                        description: 'For proportions, use cross multiplication shortcut'
                    },
                    {
                        name: 'Inverse Operations',
                        description: 'Think of division as operation to undo, multiply to undo it'
                    }
                ],
                comparison: 'Direct multiplication is most systematic; cross multiplication faster for proportions; inverse operation thinking builds conceptual understanding'
            },
            proportion: {
                primaryMethod: 'Cross Multiplication',
                methods: [
                    {
                        name: 'Cross Multiply',
                        description: 'Multiply each numerator by opposite denominator: ad = bc'
                    },
                    {
                        name: 'Clear Denominators Separately',
                        description: 'Multiply both sides by both denominators: bd(a/b) = bd(c/d)'
                    },
                    {
                        name: 'Scale One Side',
                        description: 'Multiply one fraction to match denominator of other'
                    }
                ],
                comparison: 'Cross multiplication is fastest; clearing denominators is most systematic; scaling builds fraction equivalence understanding'
            },
            complex_rational: {
                primaryMethod: 'LCD Method',
                methods: [
                    {
                        name: 'Multiply by LCD',
                        description: 'Find LCD of all denominators, multiply entire equation by it'
                    },
                    {
                        name: 'Clear Fractions One at a Time',
                        description: 'Systematically eliminate fractions individually'
                    },
                    {
                        name: 'Combine Then Clear',
                        description: 'Combine fractions on each side first, then cross multiply'
                    }
                ],
                comparison: 'LCD method clears all fractions at once; one-at-a-time may be clearer for beginners; combining first reduces to proportion'
            },
            physics: {
                primaryMethod: 'Inverse Operations',
                methods: [
                    {
                        name: 'Systematic Inverse Operations',
                        description: 'Identify operations, undo in reverse order'
                    },
                    {
                        name: 'Dimensional Analysis',
                        description: 'Use unit analysis to guide rearrangement'
                    },
                    {
                        name: 'Substitution and Comparison',
                        description: 'Use known values to verify derived formula'
                    }
                ],
                comparison: 'Inverse operations most reliable; dimensional analysis provides verification; substitution confirms correctness'
            },
            geometry: {
                primaryMethod: 'Inverse Operations with Roots',
                methods: [
                    {
                        name: 'Systematic Algebra',
                        description: 'Apply inverse operations, including roots when needed'
                    },
                    {
                        name: 'Numerical Check',
                        description: 'Use specific measurements to verify formula'
                    },
                    {
                        name: 'Geometric Reasoning',
                        description: 'Use properties of shapes to guide manipulation'
                    }
                ],
                comparison: 'Systematic algebra most reliable; numerical check verifies; geometric reasoning builds understanding'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard algebraic manipulation',
            methods: [{
                name: 'Systematic Approach',
                description: 'Clear fractions, isolate variable, simplify'
            }],
            comparison: 'Follow systematic steps for reliable results'
        };
    }
}

// Export the class
export default EnhancedRationalFormulaSolvingWorkbook;
