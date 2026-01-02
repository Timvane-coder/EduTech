// Enhanced Equilibrium Chemistry Workbook - Multi-Layer Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedEquilibriumChemistryWorkbook {
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
        this.explanationLevel = options.explanationLevel || 'intermediate'; // 'basic', 'intermediate', 'detailed', 'scaffolded'
        this.includeVerificationInSteps = options.includeVerificationInSteps !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeAlternativeMethods = options.includeAlternativeMethods !== false;
        this.includeErrorPrevention = options.includeErrorPrevention !== false;
        this.includeCommonMistakes = options.includeCommonMistakes !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.verificationDetail = options.verificationDetail || 'detailed';

        this.chemSymbols = this.initializeChemSymbols();
        this.setThemeColors();
        this.initializeEquilibriumSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
    }

    initializeEquilibriumLessons() {
        this.lessons = {
            equilibrium_constant: {
                title: "Equilibrium Constants",
                concepts: [
                    "K = [Products]^coefficients / [Reactants]^coefficients",
                    "K > 1: Products favored at equilibrium",
                    "K < 1: Reactants favored at equilibrium",
                    "K is temperature dependent"
                ],
                theory: "The equilibrium constant expresses the ratio of product concentrations to reactant concentrations at equilibrium, each raised to the power of their stoichiometric coefficients.",
                keyFormulas: {
                    "General Form": "K = [C]^c[D]^d / [A]^a[B]^b for aA + bB ⇌ cC + dD",
                    "Kc": "Equilibrium constant in terms of concentration",
                    "Kp": "Equilibrium constant in terms of partial pressure"
                },
                solvingSteps: [
                    "Write balanced chemical equation",
                    "Write equilibrium expression",
                    "Identify known concentrations",
                    "Solve for unknown (K or concentrations)"
                ],
                applications: [
                    "Predicting reaction direction",
                    "Calculating equilibrium concentrations",
                    "Industrial process optimization",
                    "Environmental chemistry modeling"
                ]
            },

            ice_table: {
                title: "ICE Tables (Initial, Change, Equilibrium)",
                concepts: [
                    "Initial: Starting concentrations before reaction",
                    "Change: Amount consumed or produced (±x)",
                    "Equilibrium: Final concentrations at equilibrium",
                    "Changes related by stoichiometry"
                ],
                theory: "ICE tables organize concentration data systematically, tracking how initial concentrations change to reach equilibrium values based on stoichiometric relationships.",
                keyFormulas: {
                    "Equilibrium Concentration": "[A]eq = [A]initial + change",
                    "Stoichiometric Relationships": "Changes are proportional to coefficients",
                    "K Expression": "K = products/reactants using equilibrium row"
                },
                solvingSteps: [
                    "Set up ICE table with reaction",
                    "Fill in initial concentrations",
                    "Express changes in terms of x (using stoichiometry)",
                    "Write equilibrium row (initial + change)",
                    "Substitute into K expression and solve for x",
                    "Calculate all equilibrium concentrations"
                ],
                applications: [
                    "Weak acid/base equilibria",
                    "Gas phase reactions",
                    "Complex ion formation",
                    "Solubility equilibria"
                ]
            },

            le_chatelier: {
                title: "Le Chatelier's Principle",
                concepts: [
                    "System responds to stress by shifting equilibrium",
                    "Adding reactant shifts right (→ products)",
                    "Adding product shifts left (← reactants)",
                    "Temperature, pressure, and concentration effects"
                ],
                theory: "When a system at equilibrium is disturbed, it shifts in the direction that counteracts the disturbance, establishing a new equilibrium position.",
                keyFormulas: {
                    "Concentration Change": "Add reactant → shift right; add product → shift left",
                    "Temperature Change": "Endothermic: heat as reactant; Exothermic: heat as product",
                    "Pressure Change": "Increase P → shift to fewer moles of gas"
                },
                principles: [
                    "Concentration: Shift away from added substance",
                    "Temperature: Shift to counteract temperature change",
                    "Pressure: Shift to side with fewer gas moles",
                    "Catalyst: No shift (reaches equilibrium faster)"
                ],
                applications: [
                    "Haber process optimization",
                    "Contact process for H2SO4",
                    "Hemoglobin oxygen binding",
                    "Ocean acidification"
                ]
            },

            reaction_quotient: {
                title: "Reaction Quotient (Q)",
                concepts: [
                    "Q has same form as K but uses any concentrations",
                    "Q < K: Reaction proceeds forward",
                    "Q > K: Reaction proceeds backward",
                    "Q = K: System is at equilibrium"
                ],
                theory: "The reaction quotient Q allows prediction of reaction direction by comparing current concentration ratios to the equilibrium constant.",
                keyFormulas: {
                    "Q Expression": "Q = [C]^c[D]^d / [A]^a[B]^b (any time)",
                    "Direction Prediction": "Compare Q to K",
                    "ΔG and Q": "ΔG = ΔG° + RT ln(Q)"
                },
                solvingSteps: [
                    "Calculate Q using current concentrations",
                    "Compare Q to K",
                    "Determine reaction direction",
                    "Predict concentration changes"
                ],
                applications: [
                    "Predicting spontaneity",
                    "Determining reaction progress",
                    "Process control in industry",
                    "Biochemical pathway analysis"
                ]
            },

            acid_base_equilibrium: {
                title: "Acid-Base Equilibrium",
                concepts: [
                    "Ka = [H+][A-] / [HA] for weak acids",
                    "Kb = [BH+][OH-] / [B] for weak bases",
                    "pKa = -log(Ka); pKb = -log(Kb)",
                    "Ka × Kb = Kw = 1.0 × 10^-14 at 25°C"
                ],
                theory: "Weak acids and bases establish equilibria in solution, with equilibrium constants expressing their strength. The relationship between Ka and Kb reflects the complementary nature of conjugate acid-base pairs.",
                keyFormulas: {
                    "pH": "pH = -log[H+]",
                    "pOH": "pOH = -log[OH-]",
                    "pH + pOH": "= 14.00 at 25°C",
                    "Henderson-Hasselbalch": "pH = pKa + log([A-]/[HA])"
                },
                solvingSteps: [
                    "Identify acid or base",
                    "Write equilibrium expression",
                    "Set up ICE table",
                    "Apply approximations if valid (x << initial concentration)",
                    "Solve for [H+] or [OH-]",
                    "Calculate pH or pOH"
                ],
                applications: [
                    "Buffer solutions",
                    "Titration curves",
                    "Biological pH regulation",
                    "Drug formulation"
                ]
            },

            solubility_equilibrium: {
                title: "Solubility Equilibrium",
                concepts: [
                    "Ksp = [M+]^m[X-]^x for MmXx(s) ⇌ mM+(aq) + xX-(aq)",
                    "Larger Ksp = more soluble compound",
                    "Common ion effect decreases solubility",
                    "Complex formation can increase solubility"
                ],
                theory: "Sparingly soluble ionic compounds establish equilibria between solid and dissolved ions. The solubility product constant Ksp quantifies this equilibrium.",
                keyFormulas: {
                    "Ksp Expression": "Product of ion concentrations raised to powers",
                    "Molar Solubility": "s = concentration of dissolved compound",
                    "Ion Product": "Q = Ksp at saturation"
                },
                solvingSteps: [
                    "Write dissolution equation",
                    "Write Ksp expression",
                    "Express ion concentrations in terms of solubility s",
                    "Substitute into Ksp expression",
                    "Solve for s",
                    "Consider common ion or complex formation effects"
                ],
                applications: [
                    "Qualitative analysis",
                    "Precipitation reactions",
                    "Water hardness",
                    "Kidney stone formation"
                ]
            },

            buffer_solutions: {
                title: "Buffer Solutions",
                concepts: [
                    "Resist pH change upon addition of acid or base",
                    "Contain weak acid and conjugate base (or vice versa)",
                    "Henderson-Hasselbalch equation relates pH, pKa, and ratio",
                    "Buffer capacity depends on concentrations"
                ],
                theory: "Buffers maintain pH by neutralizing added acids or bases through equilibrium shifts. The weak acid neutralizes added base while the conjugate base neutralizes added acid.",
                keyFormulas: {
                    "Henderson-Hasselbalch": "pH = pKa + log([A-]/[HA])",
                    "Buffer Capacity": "β = 2.303 × C × Ka × [H+] / (Ka + [H+])^2",
                    "Optimal pH Range": "pKa ± 1"
                },
                solvingSteps: [
                    "Identify buffer components",
                    "Determine [acid] and [conjugate base]",
                    "Apply Henderson-Hasselbalch equation",
                    "Calculate pH",
                    "Predict pH change upon addition of acid/base"
                ],
                applications: [
                    "Blood pH regulation",
                    "Biochemical assays",
                    "Fermentation processes",
                    "Pharmaceutical formulations"
                ]
            },

            complex_ion_equilibrium: {
                title: "Complex Ion Equilibrium",
                concepts: [
                    "Formation constant Kf for complex ion formation",
                    "Ligands bind to central metal ion",
                    "Stepwise formation has multiple K values",
                    "Affects solubility of metal compounds"
                ],
                theory: "Metal ions form coordination complexes with ligands in solution, establishing equilibria characterized by formation constants. These equilibria significantly affect metal ion chemistry.",
                keyFormulas: {
                    "Formation Constant": "Kf = [MLn] / ([M][L]^n)",
                    "Stepwise Formation": "K1, K2, K3... for successive ligand additions",
                    "Overall Formation": "β = K1 × K2 × K3..."
                },
                solvingSteps: [
                    "Write complex formation equation",
                    "Write Kf expression",
                    "Set up ICE table",
                    "Solve for equilibrium concentrations",
                    "Consider effect on other equilibria"
                ],
                applications: [
                    "Metal ion separations",
                    "Water treatment",
                    "Biological metal transport",
                    "Coordination chemistry"
                ]
            },

            gas_phase_equilibrium: {
                title: "Gas Phase Equilibrium",
                concepts: [
                    "Kp expressed in partial pressures",
                    "Kc expressed in concentrations",
                    "Relationship: Kp = Kc(RT)^Δn",
                    "Pressure effects on equilibrium position"
                ],
                theory: "Gas phase reactions reach equilibrium states characterized by Kp or Kc. Pressure and temperature significantly influence equilibrium position due to the ideal gas law.",
                keyFormulas: {
                    "Kp Expression": "Kp = (PC^c × PD^d) / (PA^a × PB^b)",
                    "Kc to Kp": "Kp = Kc(RT)^Δn where Δn = (c+d) - (a+b)",
                    "Ideal Gas Law": "PV = nRT"
                },
                solvingSteps: [
                    "Write balanced equation",
                    "Determine Δn (change in moles of gas)",
                    "Choose Kp or Kc based on given data",
                    "Set up ICE table",
                    "Apply equilibrium expression",
                    "Solve for unknowns"
                ],
                applications: [
                    "Ammonia synthesis (Haber process)",
                    "NOx formation in combustion",
                    "Atmospheric chemistry",
                    "Industrial gas reactions"
                ]
            },

            thermodynamics_equilibrium: {
                title: "Thermodynamics and Equilibrium",
                concepts: [
                    "ΔG° = -RT ln(K)",
                    "ΔG° < 0: K > 1 (products favored)",
                    "ΔG° > 0: K < 1 (reactants favored)",
                    "Temperature dependence: ln(K) vs 1/T (van't Hoff)"
                ],
                theory: "Equilibrium constants are fundamentally related to Gibbs free energy changes. Thermodynamics provides the theoretical foundation for understanding equilibrium.",
                keyFormulas: {
                    "ΔG° and K": "ΔG° = -RT ln(K)",
                    "van't Hoff Equation": "ln(K2/K1) = -(ΔH°/R)(1/T2 - 1/T1)",
                    "Temperature Effect": "d(ln K)/dT = ΔH°/RT^2"
                },
                solvingSteps: [
                    "Determine ΔG° from K or vice versa",
                    "Use van't Hoff equation for temperature changes",
                    "Predict temperature effect on K",
                    "Calculate equilibrium shift"
                ],
                applications: [
                    "Process temperature optimization",
                    "Thermodynamic stability predictions",
                    "Phase equilibria",
                    "Biochemical energetics"
                ]
            },

            coupled_equilibria: {
                title: "Coupled Equilibria",
                concepts: [
                    "Multiple equilibria operating simultaneously",
                    "Common ion connects equilibria",
                    "Overall K = product of individual K values",
                    "One equilibrium affects another"
                ],
                theory: "In complex systems, multiple equilibria interact through common species. Understanding these coupled systems requires simultaneous consideration of all equilibria.",
                keyFormulas: {
                    "Overall Equilibrium": "Koverall = K1 × K2 × K3...",
                    "Common Ion Effect": "Shifts both equilibria",
                    "Mass Balance": "Total concentration conserved"
                },
                solvingSteps: [
                    "Identify all equilibria in system",
                    "Write expressions for each equilibrium",
                    "Identify common species",
                    "Set up coupled equations",
                    "Solve system of equations",
                    "Check consistency"
                ],
                applications: [
                    "Polyprotic acid systems",
                    "Precipitation in presence of complexation",
                    "Biochemical pathways",
                    "Environmental systems"
                ]
            },

            approximation_methods: {
                title: "Approximation Methods in Equilibrium",
                concepts: [
                    "5% rule: If x < 5% of initial concentration, x is negligible",
                    "Small K approximation: If K << 1, minimal reaction occurs",
                    "Successive approximations for accuracy",
                    "Quadratic formula when approximations invalid"
                ],
                theory: "Many equilibrium problems can be simplified using valid approximations, making calculations tractable while maintaining acceptable accuracy.",
                keyFormulas: {
                    "5% Rule": "x/[A]initial < 0.05",
                    "Percent Dissociation": "α = (x/[A]initial) × 100%",
                    "Approximation Check": "Verify assumption after solving"
                },
                techniques: [
                    "Neglect x in sum/difference",
                    "Successive approximation iteration",
                    "Quadratic formula for exact solution",
                    "Graphical methods"
                ],
                applications: [
                    "Weak acid/base calculations",
                    "Solubility with small Ksp",
                    "Large system simplifications",
                    "Error analysis"
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
                vertexBg: '#ffe6e6'
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
                vertexBg: '#ffe0e6'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeChemSymbols() {
        return {
            // Chemical symbols
            'rightarrow': '→', 'leftarrow': '←', 'equilibrium': '⇌',
            'delta': 'Δ', 'degree': '°',
            // Subscripts (conceptual - would need special rendering)
            'H2O': 'H₂O', 'CO2': 'CO₂', 'NH3': 'NH₃', 'H3O+': 'H₃O⁺',
            // Superscripts (conceptual)
            'plus': '⁺', 'minus': '⁻', '2plus': '²⁺', '3minus': '³⁻',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'lambda': 'λ', 'mu': 'μ', 'nu': 'ν', 'pi': 'π'
        };
    }

    initializeEquilibriumSolvers() {
        this.equilibriumTypes = {
            // Basic equilibrium constant calculation
            equilibrium_constant: {
                patterns: [
                    /equilibrium.*constant/i,
                    /calculate.*K[cp]?/i,
                    /K[cp]?\s*=/i,
                    /\[.*\].*\/.*\[.*\]/  // Equilibrium expression pattern
                ],
                solver: this.solveEquilibriumConstant.bind(this),
                name: 'Equilibrium Constant Calculation',
                category: 'basic_equilibrium',
                description: 'Calculates K from equilibrium concentrations'
            },

            // ICE table problems
            ice_table: {
                patterns: [
                    /ICE.*table/i,
                    /initial.*change.*equilibrium/i,
                    /equilibrium.*concentration/i,
                    /find.*concentration.*equilibrium/i
                ],
                solver: this.solveICETable.bind(this),
                name: 'ICE Table Problem',
                category: 'ice_table',
                description: 'Uses ICE table to find equilibrium concentrations'
            },

            // Le Chatelier's Principle
            le_chatelier: {
                patterns: [
                    /le.*chatelier/i,
                    /shift.*equilibrium/i,
                    /stress.*equilibrium/i,
                    /predict.*direction/i
                ],
                solver: this.solveLeChatelier.bind(this),
                name: "Le Chatelier's Principle",
                category: 'le_chatelier',
                description: 'Predicts equilibrium shift due to stress'
            },

            // Reaction quotient
            reaction_quotient: {
                patterns: [
                    /reaction.*quotient/i,
                    /calculate.*Q/i,
                    /Q\s*=/i,
                    /compare.*Q.*K/i
                ],
                solver: this.solveReactionQuotient.bind(this),
                name: 'Reaction Quotient (Q)',
                category: 'reaction_quotient',
                description: 'Calculates Q and predicts reaction direction'
            },

            // Weak acid equilibrium
            weak_acid: {
                patterns: [
                    /weak.*acid/i,
                    /Ka\s*=/i,
                    /calculate.*pH.*acid/i,
                    /acid.*dissociation/i
                ],
                solver: this.solveWeakAcid.bind(this),
                name: 'Weak Acid Equilibrium',
                category: 'acid_base',
                description: 'Calculates pH and concentrations for weak acid'
            },

            // Weak base equilibrium
            weak_base: {
                patterns: [
                    /weak.*base/i,
                    /Kb\s*=/i,
                    /calculate.*pH.*base/i,
                    /base.*dissociation/i
                ],
                solver: this.solveWeakBase.bind(this),
                name: 'Weak Base Equilibrium',
                category: 'acid_base',
                description: 'Calculates pH and concentrations for weak base'
            },

            // Buffer solutions
            buffer: {
                patterns: [
                    /buffer.*solution/i,
                    /henderson.*hasselbalch/i,
                    /pH.*buffer/i,
                    /conjugate.*pair/i
                ],
                solver: this.solveBuffer.bind(this),
                name: 'Buffer Solution',
                category: 'buffer',
                description: 'Calculates buffer pH using Henderson-Hasselbalch'
            },

            // Solubility equilibrium
            solubility: {
                patterns: [
                    /solubility.*product/i,
                    /Ksp/i,
                    /molar.*solubility/i,
                    /precipitation/i
                ],
                solver: this.solveSolubility.bind(this),
                name: 'Solubility Equilibrium',
                category: 'solubility',
                description: 'Calculates solubility using Ksp'
            },

            // Common ion effect
            common_ion: {
                patterns: [
                    /common.*ion/i,
                    /ion.*effect/i,
                    /solubility.*ion/i
                ],
                solver: this.solveCommonIon.bind(this),
                name: 'Common Ion Effect',
                category: 'solubility',
                description: 'Calculates solubility with common ion present'
            },

            // Complex ion equilibrium
            complex_ion: {
                patterns: [
                    /complex.*ion/i,
                    /formation.*constant/i,
                    /Kf\s*=/i,
                    /coordination/i
                ],
                solver: this.solveComplexIon.bind(this),
                name: 'Complex Ion Equilibrium',
                category: 'complex_ion',
                description: 'Calculates complex ion concentrations'
            },

            // Gas phase equilibrium
            gas_equilibrium: {
                patterns: [
                    /gas.*equilibrium/i,
                    /Kp/i,
                    /partial.*pressure/i,
                    /gas.*phase/i
                ],
                solver: this.solveGasEquilibrium.bind(this),
                name: 'Gas Phase Equilibrium',
                category: 'gas_equilibrium',
                description: 'Calculates gas equilibrium using Kp or Kc'
            },

            // Polyprotic acid
            polyprotic_acid: {
                patterns: [
                    /polyprotic/i,
                    /diprotic/i,
                    /triprotic/i,
                    /multiple.*Ka/i
                ],
                solver: this.solvePolyproticAcid.bind(this),
                name: 'Polyprotic Acid Equilibrium',
                category: 'acid_base',
                description: 'Handles acids with multiple ionizable protons'
            },

            // Temperature effect on equilibrium
            temperature_effect: {
                patterns: [
                    /temperature.*equilibrium/i,
                    /van.*hoff/i,
                    /K.*temperature/i,
                    /enthalpy.*equilibrium/i
                ],
                solver: this.solveTemperatureEffect.bind(this),
                name: 'Temperature Effect on K',
                category: 'thermodynamics',
                description: 'Calculates K at different temperature using van\'t Hoff'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            equilibrium_constant: {
                'Write equilibrium expression': [
                    'Including solids or pure liquids in expression',
                    'Forgetting to raise concentrations to stoichiometric powers',
                    'Confusing products and reactants in expression'
                ],
                'Calculate K': [
                    'Using initial instead of equilibrium concentrations',
                    'Incorrect unit conversions'
                ]
            },
            ice_table: {
                'Set up ICE table': [
                    'Incorrect stoichiometric relationships in change row',
                    'Wrong signs for reactants vs products',
                    'Forgetting to include all species'
                ],
                'Solve for x': [
                    'Invalid approximation (x not negligible)',
                    'Algebraic errors in quadratic formula',
                    'Not checking if equilibrium concentrations are positive'
                ]
            },
            weak_acid: {
                'Set up equilibrium': [
                    'Forgetting water as product in dissociation',
                    'Incorrect charge balance',
                    'Using wrong Ka value'
                ],
                'Calculate pH': [
                    'Using [HA] instead of [H+] for pH',
                    'Forgetting to check approximation validity',
                    'Log vs ln confusion'
                ]
            },
            buffer: {
                'Apply Henderson-Hasselbalch': [
                    'Inverting the ratio [A-]/[HA]',
                    'Using concentrations instead of moles when dilution occurs',
                    'Forgetting to account for added acid/base'
                ]
            },
            solubility: {
                'Write Ksp expression': [
                    'Incorrect stoichiometric coefficients as exponents',
                    'Including the solid in expression',
                    'Wrong ion charges'
                ],
                'Calculate solubility': [
                    'Forgetting stoichiometric relationships between ions',
                    'Unit errors (M vs M²)',
                    'Not considering common ion effect'
                ]
            }
        };

        this.errorPrevention = {
            stoichiometry_check: {
                reminder: 'Always use stoichiometric coefficients as exponents in K expression',
                method: 'Write balanced equation first, then build expression'
            },
            equilibrium_vs_initial: {
                reminder: 'K uses equilibrium concentrations, not initial',
                method: 'Complete ICE table before calculating K'
            },
            approximation_validity: {
                reminder: 'Check if x < 5% of initial concentration',
                method: 'Calculate ratio after solving, verify assumption'
            },
            units_consistency: {
                reminder: 'Keep consistent units throughout (usually M)',
                method: 'Write units next to all values'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Chemical principles and equilibrium concepts',
                language: 'intuitive understanding of molecular behavior'
            },
            procedural: {
                focus: 'Step-by-step calculation procedures',
                language: 'algorithmic approach to equilibrium problems'
            },
            visual: {
                focus: 'Molecular-level and graphical representations',
                language: 'visualization of equilibrium dynamics'
            },
            quantitative: {
                focus: 'Mathematical relationships and calculations',
                language: 'precise numerical and algebraic methods'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple chemistry terms',
                detail: 'essential concepts only',
                examples: 'concrete, simple equilibria'
            },
            intermediate: {
                vocabulary: 'standard chemistry terminology',
                detail: 'main concepts with brief explanations',
                examples: 'typical textbook problems'
            },
            detailed: {
                vocabulary: 'full technical vocabulary',
                detail: 'comprehensive explanations with theory',
                examples: 'complex, multi-step equilibria'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced problem progression'
            }
        };
    }

    // MAIN SOLVER METHOD
    solveEquilibriumProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseEquilibriumProblem(equation, scenario, parameters, problemType, context);
            this.currentSolution = this.solveEquilibriumProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateEquilibriumSteps(this.currentProblem, this.currentSolution);
            this.generateEquilibriumGraphData();
            this.generateEquilibriumWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                equilibriumData: this.currentSolution?.equilibriumData,
                solutionType: this.currentSolution?.solutionType
            };

        } catch (error) {
            throw new Error(`Failed to solve equilibrium problem: ${error.message}`);
        }
    }

    parseEquilibriumProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanChemExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.equilibriumTypes[problemType]) {
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

        // Auto-detect equilibrium problem type
        for (const [type, config] of Object.entries(this.equilibriumTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractEquilibriumParameters(match, type);

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

        // Default to basic equilibrium constant if parameters are provided
        if (parameters.K !== undefined || parameters.products || parameters.reactants) {
            return {
                originalInput: equation || 'Equilibrium problem with given parameters',
                cleanInput: cleanInput,
                type: 'equilibrium_constant',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize equilibrium problem type from: ${equation || scenario}`);
    }

    cleanChemExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/⇌/g, '<->')
            .replace(/→/g, '->')
            .replace(/←/g, '<-')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .trim();
    }

    extractEquilibriumParameters(match, type) {
        const params = {};

        if (type === 'weak_acid' || type === 'weak_base') {
            // Extract Ka or Kb values if present
            const kaMatch = match?.[0].match(/Ka\s*=\s*([\d.e-]+)/i);
            const kbMatch = match?.[0].match(/Kb\s*=\s*([\d.e-]+)/i);
            
            if (kaMatch) params.Ka = parseFloat(kaMatch[1]);
            if (kbMatch) params.Kb = parseFloat(kbMatch[1]);
        }

        return params;
    }

    solveEquilibriumProblem_Internal(problem) {
        const solver = this.equilibriumTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for equilibrium problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // EQUILIBRIUM SOLVERS

    solveEquilibriumConstant(problem) {
        const { products, reactants, coefficients } = problem.parameters;

        // Example: Calculate K from equilibrium concentrations
        // K = [C]^c[D]^d / [A]^a[B]^b

        if (!products || !reactants) {
            return {
                solutionType: 'Insufficient data',
                note: 'Need product and reactant concentrations',
                category: 'equilibrium_constant'
            };
        }

        let K = 1.0;
        let numerator = 1.0;
        let denominator = 1.0;

        // Calculate product term
        for (const [species, concentration] of Object.entries(products)) {
            const coeff = coefficients?.[species] || 1;
            numerator *= Math.pow(concentration, coeff);
        }

        // Calculate reactant term
        for (const [species, concentration] of Object.entries(reactants)) {
            const coeff = coefficients?.[species] || 1;
            denominator *= Math.pow(concentration, coeff);
        }

        K = numerator / denominator;

        return {
            equilibriumConstant: K,
            solutionType: 'K calculated from equilibrium concentrations',
            numerator: numerator,
            denominator: denominator,
            interpretation: this.interpretKValue(K),
            category: 'equilibrium_constant',
            equilibriumData: {
                K: K,
                products: products,
                reactants: reactants,
                coefficients: coefficients
            }
        };
    }

    solveICETable(problem) {
        const { reaction, initial, K, reactant, product } = problem.parameters;

        // General ICE table solver
        // Example: A ⇌ B with initial [A] and K known

        if (!initial || !K) {
            return {
                solutionType: 'Need initial concentrations and K',
                category: 'ice_table'
            };
        }

        const initialConc = initial[reactant] || 0;
        
        // For A ⇌ B: K = [B]/[A]
        // ICE: A starts at initialConc, loses x; B starts at 0, gains x
        // At eq: [A] = initialConc - x, [B] = x
        // K = x / (initialConc - x)

        // Check if we can use approximation
        const canApproximate = K < 1e-3 && initialConc > 100 * K;

        let x;
        if (canApproximate) {
            // Approximation: initialConc - x ≈ initialConc
            x = K * initialConc;
            
            // Verify approximation
            const percentChange = (x / initialConc) * 100;
            const approximationValid = percentChange < 5;

            if (!approximationValid) {
                // Use quadratic
                x = this.solveICEQuadratic(K, initialConc);
            }
        } else {
            x = this.solveICEQuadratic(K, initialConc);
        }

        const equilibriumConcentrations = {
            [reactant]: initialConc - x,
            [product]: x
        };

        return {
            solutionType: 'ICE table solution',
            method: canApproximate ? 'Approximation method' : 'Quadratic formula',
            x: x,
            equilibriumConcentrations: equilibriumConcentrations,
            approximationValid: canApproximate,
            category: 'ice_table',
            equilibriumData: {
                initial: initial,
                change: { [reactant]: -x, [product]: x },
                equilibrium: equilibriumConcentrations,
                K: K
            }
        };
    }

    solveICEQuadratic(K, initial) {
        // Solve K = x / (initial - x)
        // K(initial - x) = x
        // K*initial - K*x = x
        // K*initial = x + K*x
        // K*initial = x(1 + K)
        // x = K*initial / (1 + K)

        return (K * initial) / (1 + K);
    }

    solveLeChatelier(problem) {
        const { stress, stressType, reaction, temperature, exothermic } = problem.parameters;

        const predictions = {
            addReactant: 'Equilibrium shifts RIGHT (→ products)',
            addProduct: 'Equilibrium shifts LEFT (← reactants)',
            removeReactant: 'Equilibrium shifts LEFT (← reactants)',
            removeProduct: 'Equilibrium shifts RIGHT (→ products)',
            increaseTemp: exothermic ? 'Shifts LEFT (endothermic direction)' : 'Shifts RIGHT (exothermic direction)',
            decreaseTemp: exothermic ? 'Shifts RIGHT (exothermic direction)' : 'Shifts LEFT (endothermic direction)',
            increasePressure: 'Shifts to side with fewer moles of gas',
            decreasePressure: 'Shifts to side with more moles of gas',
            addCatalyst: 'NO SHIFT - reaches equilibrium faster'
        };

        return {
            stress: stress,
            stressType: stressType,
            prediction: predictions[stressType] || 'Unknown stress type',
            principle: "System responds to counteract the applied stress",
            explanation: this.explainLeChatelierShift(stressType, stress),
            category: 'le_chatelier'
        };
    }

    solveReactionQuotient(problem) {
        const { products, reactants, coefficients, K } = problem.parameters;

        // Calculate Q same way as K, but with current concentrations
        let Q = 1.0;
        let numerator = 1.0;
        let denominator = 1.0;

        for (const [species, concentration] of Object.entries(products)) {
            const coeff = coefficients?.[species] || 1;
            numerator *= Math.pow(concentration, coeff);
        }

        for (const [species, concentration] of Object.entries(reactants)) {
            const coeff = coefficients?.[species] || 1;
            denominator *= Math.pow(concentration, coeff);
        }

        Q = numerator / denominator;

        let direction;
        let explanation;

        if (Math.abs(Q - K) < 1e-10) {
            direction = 'At equilibrium';
            explanation = 'Q = K, system is at equilibrium';
        } else if (Q < K) {
            direction = 'Forward (→ products)';
            explanation = 'Q < K, reaction proceeds forward to reach equilibrium';
        } else {
            direction = 'Reverse (← reactants)';
            explanation = 'Q > K, reaction proceeds reverse to reach equilibrium';
        }

        return {
            reactionQuotient: Q,
            equilibriumConstant: K,
            direction: direction,
            explanation: explanation,
            QtoKRatio: Q / K,
            category: 'reaction_quotient'
        };
    }

    solveWeakAcid(problem) {
        const { concentration, Ka, formula } = problem.parameters;

        if (!concentration || !Ka) {
            return {
                solutionType: 'Need initial concentration and Ka',
                category: 'weak_acid'
            };
        }

        // HA ⇌ H+ + A-
        // Ka = [H+][A-] / [HA]
        // ICE table: HA starts at C, loses x; H+ and A- start at 0, gain x
        // Ka = x² / (C - x)

        // Check approximation
        const canApproximate = Ka < 1e-3 && concentration > 100 * Ka;

        let x; // x = [H+] at equilibrium

        if (canApproximate) {
            // Ka ≈ x² / C
            x = Math.sqrt(Ka * concentration);
            
            const percentDissociation = (x / concentration) * 100;
            if (percentDissociation > 5) {
                // Use quadratic
                x = this.solveWeakAcidQuadratic(Ka, concentration);
            }
        } else {
            x = this.solveWeakAcidQuadratic(Ka, concentration);
        }

        const pH = -Math.log10(x);
        const percentDissociation = (x / concentration) * 100;

        return {
            solutionType: 'Weak acid equilibrium',
            method: canApproximate ? 'Square root approximation' : 'Quadratic formula',
            H_concentration: x,
            pH: pH,
            percentDissociation: percentDissociation,
            equilibriumConcentrations: {
                acid: concentration - x,
                H_plus: x,
                conjugate_base: x
            },
            category: 'weak_acid',
            equilibriumData: {
                Ka: Ka,
                initial_concentration: concentration,
                pH: pH
            }
        };
    }

    solveWeakAcidQuadratic(Ka, C) {
        // Ka = x² / (C - x)
        // Ka(C - x) = x²
        // KaC - Ka*x = x²
        // x² + Ka*x - Ka*C = 0
        // Using quadratic formula: x = (-b + sqrt(b² - 4ac)) / 2a
        // where a=1, b=Ka, c=-Ka*C

        const a = 1;
        const b = Ka;
        const c = -Ka * C;

        const discriminant = b * b - 4 * a * c;
        const x = (-b + Math.sqrt(discriminant)) / (2 * a);

        return x;
    }

    solveWeakBase(problem) {
        const { concentration, Kb, formula } = problem.parameters;

        if (!concentration || !Kb) {
            return {
                solutionType: 'Need initial concentration and Kb',
                category: 'weak_base'
            };
        }

        // B + H2O ⇌ BH+ + OH-
        // Kb = [BH+][OH-] / [B]
        // Similar to weak acid but calculate pOH first, then pH

        const canApproximate = Kb < 1e-3 && concentration > 100 * Kb;

        let x; // x = [OH-] at equilibrium

        if (canApproximate) {
            x = Math.sqrt(Kb * concentration);
            
            const percentReaction = (x / concentration) * 100;
            if (percentReaction > 5) {
                x = this.solveWeakBaseQuadratic(Kb, concentration);
            }
        } else {
            x = this.solveWeakBaseQuadratic(Kb, concentration);
        }

        const pOH = -Math.log10(x);
        const pH = 14.00 - pOH;

        return {
            solutionType: 'Weak base equilibrium',
            method: canApproximate ? 'Square root approximation' : 'Quadratic formula',
            OH_concentration: x,
            pOH: pOH,
            pH: pH,
            equilibriumConcentrations: {
                base: concentration - x,
                conjugate_acid: x,
                OH_minus: x
            },
            category: 'weak_base',
            equilibriumData: {
                Kb: Kb,
                initial_concentration: concentration,
                pH: pH
            }
        };
    }

    solveWeakBaseQuadratic(Kb, C) {
        // Same structure as weak acid
        const a = 1;
        const b = Kb;
        const c = -Kb * C;

        const discriminant = b * b - 4 * a * c;
        const x = (-b + Math.sqrt(discriminant)) / (2 * a);

        return x;
    }

    solveBuffer(problem) {
        const { acid_concentration, conjugate_base_concentration, pKa, Ka } = problem.parameters;

        if (!acid_concentration || !conjugate_base_concentration) {
            return {
                solutionType: 'Need concentrations of acid and conjugate base',
                category: 'buffer'
            };
        }

        const pKa_value = pKa !== undefined ? pKa : (Ka ? -Math.log10(Ka) : null);

        if (pKa_value === null) {
            return {
                solutionType: 'Need pKa or Ka value',
                category: 'buffer'
            };
        }

        // Henderson-Hasselbalch: pH = pKa + log([A-]/[HA])
        const ratio = conjugate_base_concentration / acid_concentration;
        const pH = pKa_value + Math.log10(ratio);

        return {
            solutionType: 'Buffer solution pH',
            method: 'Henderson-Hasselbalch equation',
            pH: pH,
            pKa: pKa_value,
            ratio: ratio,
            acid_concentration: acid_concentration,
            base_concentration: conjugate_base_concentration,
            bufferCapacity: this.estimateBufferCapacity(acid_concentration, conjugate_base_concentration),
            category: 'buffer',
            equilibriumData: {
                pH: pH,
                pKa: pKa_value,
                ratio: ratio
            }
        };
    }

    solveSolubility(problem) {
        const { Ksp, formula, ions } = problem.parameters;

        if (!Ksp) {
            return {
                solutionType: 'Need Ksp value',
                category: 'solubility'
            };
        }

        // Example: AgCl ⇌ Ag+ + Cl-
        // Ksp = [Ag+][Cl-] = s²
        // s = sqrt(Ksp)

        // More general: MₘAₙ ⇌ mM^n+ + nA^m-
        // Ksp = [M]^m[A]^n = (ms)^m(ns)^n

        const { cation_coeff = 1, anion_coeff = 1 } = ions || {};

        let molarSolubility;

        if (cation_coeff === 1 && anion_coeff === 1) {
            // Simple case: MA
            molarSolubility = Math.sqrt(Ksp);
        } else if (cation_coeff === 1 && anion_coeff === 2) {
            // MA₂ case: Ksp = s(2s)² = 4s³
            molarSolubility = Math.pow(Ksp / 4, 1/3);
        } else if (cation_coeff === 2 && anion_coeff === 1) {
            // M₂A case: Ksp = (2s)²s = 4s³
            molarSolubility = Math.pow(Ksp / 4, 1/3);
        } else {
            // General case
            const coefficient_product = Math.pow(cation_coeff, cation_coeff) * Math.pow(anion_coeff, anion_coeff);
            const total_ions = cation_coeff + anion_coeff;
            molarSolubility = Math.pow(Ksp / coefficient_product, 1 / total_ions);
        }

        return {
            solutionType: 'Solubility from Ksp',
            Ksp: Ksp,
            molarSolubility: molarSolubility,
            cation_concentration: cation_coeff * molarSolubility,
            anion_concentration: anion_coeff * molarSolubility,
            category: 'solubility',
            equilibriumData: {
                Ksp: Ksp,
                solubility: molarSolubility
            }
        };
    }

    solveCommonIon(problem) {
        const { Ksp, formula, common_ion, common_ion_concentration } = problem.parameters;

        if (!Ksp || !common_ion_concentration) {
            return {
                solutionType: 'Need Ksp and common ion concentration',
                category: 'common_ion'
            };
        }

        // Example: AgCl in solution with Cl- already present
        // Ksp = [Ag+][Cl-]
        // [Cl-] = common_ion_concentration + s ≈ common_ion_concentration (if s << common_ion_conc)
        // Ksp = s × common_ion_concentration
        // s = Ksp / common_ion_concentration

        const molarSolubility = Ksp / common_ion_concentration;

        return {
            solutionType: 'Solubility with common ion',
            Ksp: Ksp,
            common_ion: common_ion,
            common_ion_concentration: common_ion_concentration,
            molarSolubility: molarSolubility,
            effect: 'Solubility decreased due to common ion effect',
            category: 'common_ion',
            equilibriumData: {
                Ksp: Ksp,
                solubility_with_common_ion: molarSolubility
            }
        };
    }

    solveComplexIon(problem) {
        const { metal_ion, ligand, Kf, metal_concentration, ligand_concentration, n } = problem.parameters;

        if (!Kf) {
            return {
                solutionType: 'Need formation constant Kf',
                category: 'complex_ion'
            };
        }

        // M + nL ⇌ MLₙ
        // Kf = [MLₙ] / ([M][L]^n)

        const coordination_number = n || 4; // default to 4

        return {
            solutionType: 'Complex ion equilibrium',
            Kf: Kf,
            metal_ion: metal_ion,
            ligand: ligand,
            coordination_number: coordination_number,
            interpretation: Kf > 1e6 ? 'Very stable complex' : Kf > 1e3 ? 'Stable complex' : 'Weak complex',
            category: 'complex_ion',
            equilibriumData: {
                Kf: Kf,
                coordination_number: coordination_number
            }
        };
    }

    solveGasEquilibrium(problem) {
        const { Kp, Kc, temperature, delta_n, R = 0.0821 } = problem.parameters;

        // Kp = Kc(RT)^Δn where Δn = (moles of gas products) - (moles of gas reactants)

        if (Kp && temperature && delta_n !== undefined) {
            const T_kelvin = temperature;
            const RT = R * T_kelvin;
            const Kc = Kp / Math.pow(RT, delta_n);

            return {
                solutionType: 'Gas equilibrium - Kp to Kc conversion',
                Kp: Kp,
                Kc: Kc,
                temperature: T_kelvin,
                delta_n: delta_n,
                relationship: 'Kp = Kc(RT)^Δn',
                category: 'gas_equilibrium',
                equilibriumData: {
                    Kp: Kp,
                    Kc: Kc,
                    temperature: T_kelvin
                }
            };
        } else if (Kc && temperature && delta_n !== undefined) {
            const T_kelvin = temperature;
            const RT = R * T_kelvin;
            const Kp = Kc * Math.pow(RT, delta_n);

            return {
                solutionType: 'Gas equilibrium - Kc to Kp conversion',
                Kp: Kp,
                Kc: Kc,
                temperature: T_kelvin,
                delta_n: delta_n,
                relationship: 'Kp = Kc(RT)^Δn',
                category: 'gas_equilibrium',
                equilibriumData: {
                    Kp: Kp,
                    Kc: Kc,
                    temperature: T_kelvin
                }
            };
        }

        return {
            solutionType: 'Need more information for gas equilibrium',
            category: 'gas_equilibrium'
        };
    }

    solvePolyproticAcid(problem) {
        const { concentration, Ka1, Ka2, Ka3 } = problem.parameters;

        if (!concentration || !Ka1) {
            return {
                solutionType: 'Need concentration and at least Ka1',
                category: 'polyprotic_acid'
            };
        }

        // First dissociation dominates if Ka1 >> Ka2
        // H2A ⇌ H+ + HA-  (Ka1)
        // HA- ⇌ H+ + A2-  (Ka2)

        // Approximate: Use only first dissociation if Ka1 >> Ka2
        const x = this.solveWeakAcidQuadratic(Ka1, concentration);
        const pH = -Math.log10(x);

        return {
            solutionType: 'Polyprotic acid equilibrium',
            method: 'First dissociation dominates',
            Ka1: Ka1,
            Ka2: Ka2,
            Ka3: Ka3,
            H_concentration: x,
            pH: pH,
            note: 'pH calculated from first dissociation (assuming Ka1 >> Ka2)',
            category: 'polyprotic_acid',
            equilibriumData: {
                Ka1: Ka1,
                Ka2: Ka2,
                pH: pH
            }
        };
    }

    solveTemperatureEffect(problem) {
        const { K1, T1, T2, delta_H, R = 8.314 } = problem.parameters;

        if (!K1 || !T1 || !T2 || !delta_H) {
            return {
                solutionType: 'Need K1, T1, T2, and ΔH',
                category: 'temperature_effect'
            };
        }

        // van't Hoff equation: ln(K2/K1) = -(ΔH/R)(1/T2 - 1/T1)
        const ln_K_ratio = -(delta_H / R) * (1/T2 - 1/T1);
        const K2 = K1 * Math.exp(ln_K_ratio);

        const direction = T2 > T1 ? 'increased' : 'decreased';
        const effect = delta_H < 0 ? 
            (T2 > T1 ? 'K decreases (exothermic)' : 'K increases') :
            (T2 > T1 ? 'K increases (endothermic)' : 'K decreases');

        return {
            solutionType: 'Temperature effect on K',
            method: "van't Hoff equation",
            K1: K1,
            K2: K2,
            T1: T1,
            T2: T2,
            delta_H: delta_H,
            temperature_change: direction,
            effect_on_K: effect,
            category: 'temperature_effect',
            equilibriumData: {
                K1: K1,
                K2: K2,
                T1: T1,
                T2: T2
            }
        };
    }

    // HELPER METHODS

    interpretKValue(K) {
        if (K > 1000) {
            return 'K >> 1: Products strongly favored at equilibrium';
        } else if (K > 10) {
            return 'K > 1: Products favored at equilibrium';
        } else if (K > 0.1) {
            return 'K ≈ 1: Significant amounts of both products and reactants';
        } else if (K > 0.001) {
            return 'K < 1: Reactants favored at equilibrium';
        } else {
            return 'K << 1: Reactants strongly favored at equilibrium';
        }
    }

    explainLeChatelierShift(stressType, stress) {
        const explanations = {
            addReactant: `Adding ${stress} (a reactant) increases its concentration. The system responds by consuming the added reactant, shifting the equilibrium toward products.`,
            addProduct: `Adding ${stress} (a product) increases its concentration. The system responds by consuming the added product, shifting the equilibrium toward reactants.`,
            removeReactant: `Removing ${stress} (a reactant) decreases its concentration. The system responds by producing more reactant, shifting equilibrium toward reactants.`,
            removeProduct: `Removing ${stress} (a product) decreases its concentration. The system responds by producing more product, shifting equilibrium toward products.`,
            increaseTemp: `Increasing temperature adds heat to the system. The system responds by absorbing heat, favoring the endothermic direction.`,
            decreaseTemp: `Decreasing temperature removes heat from the system. The system responds by releasing heat, favoring the exothermic direction.`,
            increasePressure: `Increasing pressure stresses the system. It responds by shifting toward the side with fewer moles of gas to reduce pressure.`,
            decreasePressure: `Decreasing pressure changes the system. It responds by shifting toward the side with more moles of gas.`,
            addCatalyst: `A catalyst speeds up both forward and reverse reactions equally. It helps reach equilibrium faster but does not change the equilibrium position.`
        };

        return explanations[stressType] || 'The system will shift to counteract the applied stress.';
    }

    estimateBufferCapacity(acid_conc, base_conc) {
        // Buffer capacity is highest when ratio is 1:1
        const ratio = Math.min(acid_conc, base_conc) / Math.max(acid_conc, base_conc);
        const total_conc = acid_conc + base_conc;

        if (ratio > 0.8 && total_conc > 0.1) {
            return 'High capacity';
        } else if (ratio > 0.5 && total_conc > 0.05) {
            return 'Moderate capacity';
        } else {
            return 'Low capacity';
        }
    }

    generateEquilibriumGraphData() {
        if (!this.currentSolution) return;

        const { type } = this.currentProblem;
        const solution = this.currentSolution;

        switch(type) {
            case 'ice_table':
                if (solution.equilibriumConcentrations) {
                    this.graphData = this.generateConcentrationGraph(solution);
                }
                break;

            case 'weak_acid':
            case 'weak_base':
                if (solution.pH !== undefined) {
                    this.graphData = this.generateTitrationGraph(solution);
                }
                break;

            case 'buffer':
                if (solution.pH !== undefined) {
                    this.graphData = this.generateBufferGraph(solution);
                }
                break;
        }
    }

    generateConcentrationGraph(solution) {
        return {
            type: 'concentration_vs_time',
            equilibriumConcentrations: solution.equilibriumConcentrations,
            message: 'Concentrations approach equilibrium values over time'
        };
    }

    generateTitrationGraph(solution) {
        return {
            type: 'pH_calculation',
            pH: solution.pH,
            concentrations: solution.equilibriumConcentrations
        };
    }

    generateBufferGraph(solution) {
        return {
            type: 'buffer_region',
            pH: solution.pH,
            pKa: solution.pKa,
            bufferRange: [solution.pKa - 1, solution.pKa + 1]
        };
    }

    // ENHANCED STEP GENERATION

    generateEquilibriumSteps(problem, solution) {
        let baseSteps = this.generateBaseEquilibriumSteps(problem, solution);

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

        return baseSteps;
    }

    generateBaseEquilibriumSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'equilibrium_constant':
                return this.generateEnhancedKSteps(problem, solution);
            case 'ice_table':
                return this.generateEnhancedICESteps(problem, solution);
            case 'weak_acid':
                return this.generateEnhancedWeakAcidSteps(problem, solution);
            case 'weak_base':
                return this.generateEnhancedWeakBaseSteps(problem, solution);
            case 'buffer':
                return this.generateEnhancedBufferSteps(problem, solution);
            case 'solubility':
                return this.generateEnhancedSolubilitySteps(problem, solution);
            case 'le_chatelier':
                return this.generateEnhancedLeChatelierSteps(problem, solution);
            case 'reaction_quotient':
                return this.generateEnhancedReactionQuotientSteps(problem, solution);
            default:
                return this.generateGenericEquilibriumSteps(problem, solution);
        }
    }

    generateEnhancedKSteps(problem, solution) {
        const { products, reactants, coefficients } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write balanced chemical equation',
            description: 'Start with the balanced equation for the equilibrium reaction',
            expression: problem.parameters.equation || 'aA + bB ⇌ cC + dD',
            reasoning: 'The balanced equation provides stoichiometric coefficients needed for the equilibrium expression',
            visualHint: 'The double arrow (⇌) indicates this is a reversible reaction at equilibrium',
            algebraicRule: 'Law of Mass Action',
            goalStatement: 'We need this equation to write the equilibrium constant expression'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write equilibrium expression',
            description: 'Construct the K expression using products over reactants',
            beforeExpression: 'K = ?',
            afterExpression: 'K = [Products]^coefficients / [Reactants]^coefficients',
            operation: 'Apply Law of Mass Action',
            reasoning: 'Products in numerator, reactants in denominator, each raised to stoichiometric coefficient',
            algebraicRule: 'K = [C]^c[D]^d / [A]^a[B]^b',
            visualHint: 'Only include aqueous and gaseous species; omit solids and pure liquids',
            criticalWarning: 'DO NOT include solids or pure liquids in the expression'
        });

        steps.push({
            stepNumber: 3,
            step: 'Substitute equilibrium concentrations',
            description: 'Insert the given equilibrium concentrations into the expression',
            beforeExpression: solution.numerator !== undefined ? 
                `Numerator calculation: ${JSON.stringify(products)}` : 'K expression',
            afterExpression: solution.numerator !== undefined ?
                `Numerator = ${solution.numerator}` : 'Values substituted',
            reasoning: 'Use equilibrium concentrations (not initial) with proper units',
            workingDetails: {
                products: `Product term = ${solution.numerator}`,
                reactants: `Reactant term = ${solution.denominator}`
            }
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate K value',
            description: 'Perform the arithmetic to find the equilibrium constant',
            beforeExpression: `K = ${solution.numerator} / ${solution.denominator}`,
            afterExpression: `K = ${solution.equilibriumConstant}`,
            reasoning: 'Divide products term by reactants term',
            finalAnswer: true,
            numericalResult: solution.equilibriumConstant,
            interpretation: solution.interpretation
        });

        return steps;
    }

    generateEnhancedICESteps(problem, solution) {
        const { initial, K, reactant, product } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Set up ICE table',
            description: 'Organize Initial, Change, and Equilibrium concentrations',
            reasoning: 'ICE table systematically tracks concentration changes using stoichiometry',
            visualHint: 'Draw a table with rows for I, C, E and columns for each species',
            goalStatement: 'We will use this table to find equilibrium concentrations',
            tableStructure: {
                headers: ['', reactant, product],
                initial: ['I', initial[reactant], 0],
                change: ['C', '-x', '+x'],
                equilibrium: ['E', `${initial[reactant]} - x`, 'x']
            }
        });

        steps.push({
            stepNumber: 2,
            step: 'Write equilibrium expression',
            description: 'Express K in terms of equilibrium concentrations',
            beforeExpression: 'K = [Products] / [Reactants]',
            afterExpression: `${K} = x / (${initial[reactant]} - x)`,
            reasoning: 'Substitute equilibrium row values from ICE table into K expression',
            algebraicRule: 'K expression uses values from equilibrium row'
        });

        steps.push({
            stepNumber: 3,
            step: 'Check if approximation is valid',
            description: 'Determine if we can use the 5% rule approximation',
            reasoning: `If K < 10^-3 and initial concentration >> K, then x << ${initial[reactant]}`,
            approximationCheck: {
                K_value: K,
                threshold: 1e-3,
                canApproximate: solution.approximationValid,
                rule: '5% rule: x should be less than 5% of initial concentration'
            },
            visualHint: solution.approximationValid ? 
                'We can approximate: (initial - x) ≈ initial' : 
                'Must use quadratic formula - approximation invalid'
        });

        if (solution.approximationValid) {
            steps.push({
                stepNumber: 4,
                step: 'Apply approximation',
                description: `Assume ${initial[reactant]} - x ≈ ${initial[reactant]}`,
                beforeExpression: `${K} = x / (${initial[reactant]} - x)`,
                afterExpression: `${K} ≈ x / ${initial[reactant]}`,
                operation: 'Simplify using approximation',
                reasoning: 'Since x is very small compared to initial concentration, we can neglect it in the denominator',
                algebraicRule: 'Small x approximation'
            });

            steps.push({
                stepNumber: 5,
                step: 'Solve for x',
                description: 'Rearrange and solve for x',
                beforeExpression: `${K} = x / ${initial[reactant]}`,
                afterExpression: `x = ${solution.x}`,
                operation: `Multiply both sides by ${initial[reactant]}`,
                reasoning: 'Isolate x by multiplying both sides by the initial concentration',
                workingDetails: {
                    calculation: `x = ${K} × ${initial[reactant]} = ${solution.x}`
                }
            });

            steps.push({
                stepNumber: 6,
                step: 'Verify approximation',
                description: 'Check that x < 5% of initial concentration',
                verification: {
                    x_value: solution.x,
                    initial_value: initial[reactant],
                    percentage: (solution.x / initial[reactant]) * 100,
                    valid: ((solution.x / initial[reactant]) * 100) < 5
                },
                reasoning: 'Our approximation is valid if x is less than 5% of initial concentration',
                criticalWarning: ((solution.x / initial[reactant]) * 100) >= 5 ? 
                    'Approximation invalid! Must use quadratic formula.' : null
            });
        } else {
            steps.push({
                stepNumber: 4,
                step: 'Set up quadratic equation',
                description: 'Rearrange K expression into quadratic form',
                beforeExpression: `${K} = x / (${initial[reactant]} - x)`,
                afterExpression: `x² + ${K}x - ${K * initial[reactant]} = 0`,
                operation: 'Expand and rearrange',
                reasoning: 'Cross multiply and collect terms to form ax² + bx + c = 0',
                algebraicRule: 'Standard form: ax² + bx + c = 0'
            });

            steps.push({
                stepNumber: 5,
                step: 'Apply quadratic formula',
                description: 'Use quadratic formula to solve for x',
                formula: 'x = [-b ± √(b² - 4ac)] / 2a',
                beforeExpression: 'Identify a, b, c coefficients',
                afterExpression: `x = ${solution.x}`,
                reasoning: 'Only take positive root since concentration cannot be negative',
                workingDetails: {
                    a: 1,
                    b: K,
                    c: -K * initial[reactant],
                    discriminant: K*K + 4*K*initial[reactant]
                }
            });
        }

        steps.push({
            stepNumber: solution.approximationValid ? 7 : 6,
            step: 'Calculate equilibrium concentrations',
            description: 'Use x value to find all equilibrium concentrations',
            equilibriumValues: solution.equilibriumConcentrations,
            reasoning: 'Substitute x back into equilibrium row of ICE table',
            finalAnswer: true,
            workingDetails: {
                [reactant]: `${initial[reactant]} - ${solution.x} = ${solution.equilibriumConcentrations[reactant]}`,
                [product]: `${solution.x}`
            }
        });

        return steps;
    }

    generateEnhancedWeakAcidSteps(problem, solution) {
        const { concentration, Ka, formula } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write dissociation equation',
            description: 'Write the equilibrium equation for weak acid dissociation',
            expression: `${formula || 'HA'} + H₂O ⇌ H₃O⁺ + A⁻`,
            alternateForm: `${formula || 'HA'} ⇌ H⁺ + A⁻`,
            reasoning: 'Weak acids partially dissociate in water to produce hydronium ions',
            visualHint: 'Only a small fraction of HA molecules dissociate',
            conceptualNote: 'The double arrow indicates this is an equilibrium, not complete dissociation'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write Ka expression',
            description: 'Construct the acid dissociation constant expression',
            beforeExpression: 'Ka = ?',
            afterExpression: 'Ka = [H⁺][A⁻] / [HA]',
            reasoning: 'Products over reactants; water is omitted (constant concentration)',
            algebraicRule: 'Equilibrium constant expression for weak acid',
            criticalWarning: 'Do NOT include H₂O in the expression (pure liquid)'
        });

        steps.push({
            stepNumber: 3,
            step: 'Set up ICE table',
            description: 'Organize concentrations using ICE table',
            reasoning: 'Track how initial concentration changes as acid dissociates',
            tableStructure: {
                headers: ['', 'HA', 'H⁺', 'A⁻'],
                initial: ['I', concentration, 0, 0],
                change: ['C', '-x', '+x', '+x'],
                equilibrium: ['E', `${concentration} - x`, 'x', 'x']
            },
            visualHint: 'x represents the amount that dissociates'
        });

        steps.push({
            stepNumber: 4,
            step: 'Substitute into Ka expression',
            description: 'Insert equilibrium concentrations into Ka expression',
            beforeExpression: 'Ka = [H⁺][A⁻] / [HA]',
            afterExpression: `${Ka} = x² / (${concentration} - x)`,
            reasoning: 'From ICE table: [H⁺] = x, [A⁻] = x, [HA] = C - x',
            algebraicRule: 'Substitution from equilibrium row'
        });

        steps.push({
            stepNumber: 5,
            step: 'Check approximation validity',
            description: 'Determine if 5% rule applies',
            approximationCheck: {
                condition: `Ka < 10⁻³ and C > 100Ka`,
                Ka_value: Ka,
                C_value: concentration,
                canApproximate: solution.method.includes('approximation')
            },
            reasoning: 'If approximation valid: C - x ≈ C (x is negligible)',
            visualHint: solution.method.includes('approximation') ? 
                'Ka is small enough to use approximation' : 
                'Must use quadratic formula'
        });

        if (solution.method.includes('approximation')) {
            steps.push({
                stepNumber: 6,
                step: 'Apply square root approximation',
                description: 'Simplify using approximation',
                beforeExpression: `${Ka} = x² / (${concentration} - x)`,
                afterExpression: `${Ka} ≈ x² / ${concentration}`,
                operation: 'Assume C - x ≈ C',
                reasoning: 'Since acid is weak, very little dissociates: x << C',
                algebraicRule: 'Small dissociation approximation'
            });

            steps.push({
                stepNumber: 7,
                step: 'Solve for x',
                description: 'Calculate [H⁺] concentration',
                beforeExpression: `x² = ${Ka} × ${concentration}`,
                afterExpression: `x = √(${Ka * concentration}) = ${solution.H_concentration}`,
                operation: 'Take square root of both sides',
                reasoning: 'x represents [H⁺] at equilibrium',
                workingDetails: {
                    product: Ka * concentration,
                    squareRoot: solution.H_concentration
                }
            });

            steps.push({
                stepNumber: 8,
                step: 'Verify approximation',
                description: 'Check that percent dissociation < 5%',
                verification: {
                    x: solution.H_concentration,
                    C: concentration,
                    percentDissociation: solution.percentDissociation,
                    valid: solution.percentDissociation < 5
                },
                reasoning: `Percent dissociation = (${solution.H_concentration}/${concentration}) × 100% = ${solution.percentDissociation.toFixed(2)}%`,
                criticalWarning: solution.percentDissociation >= 5 ? 
                    'Approximation invalid! Must use quadratic formula.' : null
            });
        } else {
            steps.push({
                stepNumber: 6,
                step: 'Solve using quadratic formula',
                description: 'Expand and rearrange into standard quadratic form',
                beforeExpression: `${Ka} = x² / (${concentration} - x)`,
                afterExpression: `x² + ${Ka}x - ${Ka * concentration} = 0`,
                operation: 'Cross multiply and collect terms',
                reasoning: 'Must solve exactly since approximation is not valid',
                algebraicRule: 'ax² + bx + c = 0'
            });

            steps.push({
                stepNumber: 7,
                step: 'Calculate x using quadratic formula',
                description: 'Apply quadratic formula',
                formula: 'x = [-b + √(b² - 4ac)] / 2a',
                afterExpression: `x = ${solution.H_concentration}`,
                reasoning: 'Only positive root is physically meaningful',
                workingDetails: {
                    a: 1,
                    b: Ka,
                    c: -Ka * concentration
                }
            });
        }

        steps.push({
            stepNumber: solution.method.includes('approximation') ? 9 : 8,
            step: 'Calculate pH',
            description: 'Convert [H⁺] to pH',
            beforeExpression: `[H⁺] = ${solution.H_concentration}`,
            afterExpression: `pH = -log(${solution.H_concentration}) = ${solution.pH.toFixed(2)}`,
            operation: 'Take negative logarithm',
            reasoning: 'pH is defined as -log₁₀[H⁺]',
            algebraicRule: 'pH = -log[H⁺]',
            finalAnswer: true,
            numericalResult: solution.pH,
            interpretation: `pH = ${solution.pH.toFixed(2)} indicates ${solution.pH < 7 ? 'acidic' : 'basic'} solution`
        });

        steps.push({
            stepNumber: solution.method.includes('approximation') ? 10 : 9,
            step: 'Calculate percent dissociation',
            description: 'Determine what fraction of acid dissociated',
            beforeExpression: `% dissociation = (x / C) × 100%`,
            afterExpression: `% dissociation = (${solution.H_concentration} / ${concentration}) × 100% = ${solution.percentDissociation.toFixed(2)}%`,
            reasoning: 'Percent dissociation indicates acid strength',
            interpretation: solution.percentDissociation < 5 ? 
                'Low percent dissociation confirms weak acid' : 
                'Higher percent dissociation - moderately weak acid'
        });

        return steps;
    }

    generateEnhancedWeakBaseSteps(problem, solution) {
        const { concentration, Kb, formula } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write base dissociation equation',
            description: 'Write equilibrium equation for weak base reaction with water',
            expression: `${formula || 'B'} + H₂O ⇌ BH⁺ + OH⁻`,
            reasoning: 'Weak bases accept protons from water, producing hydroxide ions',
            visualHint: 'Base removes proton from water molecule',
            conceptualNote: 'Only a small fraction of base molecules react'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write Kb expression',
            description: 'Construct the base dissociation constant expression',
            beforeExpression: 'Kb = ?',
            afterExpression: 'Kb = [BH⁺][OH⁻] / [B]',
            reasoning: 'Products over reactants; water omitted (constant)',
            algebraicRule: 'Equilibrium constant for weak base',
            criticalWarning: 'Water is NOT included in Kb expression'
        });

        steps.push({
            stepNumber: 3,
            step: 'Set up ICE table',
            description: 'Organize concentrations systematically',
            tableStructure: {
                headers: ['', 'B', 'BH⁺', 'OH⁻'],
                initial: ['I', concentration, 0, 0],
                change: ['C', '-x', '+x', '+x'],
                equilibrium: ['E', `${concentration} - x`, 'x', 'x']
            },
            reasoning: 'x represents amount of base that reacts with water',
            visualHint: 'Stoichiometry: 1:1:1 ratio for all species'
        });

        steps.push({
            stepNumber: 4,
            step: 'Substitute into Kb expression',
            description: 'Insert equilibrium values from ICE table',
            beforeExpression: 'Kb = [BH⁺][OH⁻] / [B]',
            afterExpression: `${Kb} = x² / (${concentration} - x)`,
            reasoning: 'From equilibrium row: [BH⁺] = [OH⁻] = x, [B] = C - x'
        });

        steps.push({
            stepNumber: 5,
            step: 'Solve for x ([OH⁻])',
            description: 'Calculate hydroxide ion concentration',
            method: solution.method,
            afterExpression: `x = [OH⁻] = ${solution.OH_concentration}`,
            reasoning: 'Using same approach as weak acid problem',
            workingDetails: solution.method.includes('approximation') ? 
                { approximation: `x = √(Kb × C) = √(${Kb} × ${concentration})` } :
                { quadratic: 'Solved using quadratic formula' }
        });

        steps.push({
            stepNumber: 6,
            step: 'Calculate pOH',
            description: 'Convert [OH⁻] to pOH',
            beforeExpression: `[OH⁻] = ${solution.OH_concentration}`,
            afterExpression: `pOH = -log(${solution.OH_concentration}) = ${solution.pOH.toFixed(2)}`,
            operation: 'Take negative logarithm',
            reasoning: 'pOH = -log₁₀[OH⁻]',
            algebraicRule: 'Definition of pOH'
        });

        steps.push({
            stepNumber: 7,
            step: 'Calculate pH',
            description: 'Use relationship between pH and pOH',
            beforeExpression: `pH + pOH = 14.00`,
            afterExpression: `pH = 14.00 - ${solution.pOH.toFixed(2)} = ${solution.pH.toFixed(2)}`,
            operation: 'Subtract pOH from 14.00',
            reasoning: 'At 25°C, pH + pOH = 14.00',
            algebraicRule: 'Ion product of water: Kw = 1.0 × 10⁻¹⁴',
            finalAnswer: true,
            numericalResult: solution.pH,
            interpretation: `pH = ${solution.pH.toFixed(2)} indicates basic solution (pH > 7)`
        });

        return steps;
    }

    generateEnhancedBufferSteps(problem, solution) {
        const { acid_concentration, conjugate_base_concentration, pKa } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify buffer components',
            description: 'Recognize the weak acid and conjugate base pair',
            components: {
                weakAcid: `[HA] = ${acid_concentration} M`,
                conjugateBase: `[A⁻] = ${conjugate_base_concentration} M`
            },
            reasoning: 'Buffer contains both a weak acid and its conjugate base in significant amounts',
            conceptualNote: 'This pair can neutralize both added acids and bases'
        });

        steps.push({
            stepNumber: 2,
            step: 'Verify buffer assumptions',
            description: 'Check that Henderson-Hasselbalch equation applies',
            checks: {
                weakAcid: 'Must be a weak acid (not strong)',
                significantAmounts: 'Both components present in reasonable concentrations',
                ratio: `Ratio [A⁻]/[HA] = ${solution.ratio.toFixed(3)}`
            },
            reasoning: 'Henderson-Hasselbalch is valid when equilibrium is not drastically shifted',
            visualHint: 'Best buffering occurs when ratio is near 1:1'
        });

        steps.push({
            stepNumber: 3,
            step: 'Write Henderson-Hasselbalch equation',
            description: 'State the equation relating pH, pKa, and concentration ratio',
            expression: 'pH = pKa + log([A⁻]/[HA])',
            reasoning: 'This equation is derived from Ka expression and simplifies buffer pH calculations',
            algebraicRule: 'Henderson-Hasselbalch equation',
            conceptualNote: 'This avoids having to set up ICE table for buffer systems'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate concentration ratio',
            description: 'Determine the ratio of conjugate base to weak acid',
            beforeExpression: '[A⁻]/[HA] = ?',
            afterExpression: `[A⁻]/[HA] = ${conjugate_base_concentration} / ${acid_concentration} = ${solution.ratio.toFixed(3)}`,
            reasoning: 'This ratio determines how much the pH differs from pKa',
            visualHint: 'If ratio = 1, then pH = pKa (log(1) = 0)'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate log of ratio',
            description: 'Take logarithm of the concentration ratio',
            beforeExpression: `log(${solution.ratio.toFixed(3)})`,
            afterExpression: `log(${solution.ratio.toFixed(3)}) = ${Math.log10(solution.ratio).toFixed(3)}`,
            operation: 'Calculate base-10 logarithm',
            reasoning: 'This term shifts pH away from pKa',
            workingDetails: {
                ratio: solution.ratio,
                logRatio: Math.log10(solution.ratio)
            }
        });

        steps.push({
            stepNumber: 6,
            step: 'Calculate pH',
            description: 'Combine pKa and log term to find pH',
            beforeExpression: `pH = pKa + log([A⁻]/[HA])`,
            afterExpression: `pH = ${pKa} + ${Math.log10(solution.ratio).toFixed(3)} = ${solution.pH.toFixed(2)}`,
            operation: 'Add pKa and log term',
            reasoning: 'Henderson-Hasselbalch directly gives buffer pH',
            finalAnswer: true,
            numericalResult: solution.pH,
            interpretation: `Buffer pH = ${solution.pH.toFixed(2)}, buffer capacity: ${solution.bufferCapacity}`
        });

        steps.push({
            stepNumber: 7,
            step: 'Analyze buffer capacity',
            description: 'Evaluate the buffer\'s ability to resist pH change',
            bufferCapacity: solution.bufferCapacity,
            reasoning: 'Capacity depends on total concentration and ratio closeness to 1:1',
            interpretation: {
                capacity: solution.bufferCapacity,
                optimalRange: `${pKa - 1} to ${pKa + 1}`,
                currentpH: solution.pH,
                effectiveness: Math.abs(solution.pH - pKa) < 1 ? 'Highly effective' : 'Moderate effectiveness'
            }
        });

        return steps;
    }

    generateEnhancedSolubilitySteps(problem, solution) {
        const { Ksp, formula, ions } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write dissolution equation',
            description: 'Write equation showing solid dissolving into ions',
            expression: `${formula || 'MₘAₙ(s)'} ⇌ ${ions?.cation_coeff || 'm'}M^n⁺(aq) + ${ions?.anion_coeff || 'n'}A^m⁻(aq)`,
            reasoning: 'Sparingly soluble salt establishes equilibrium with dissolved ions',
            visualHint: 'Solid is in equilibrium with its ions in saturated solution',
            conceptualNote: 'Rate of dissolution equals rate of precipitation at equilibrium'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write Ksp expression',
            description: 'Construct solubility product constant expression',
            beforeExpression: 'Ksp = ?',
            afterExpression: `Ksp = [M^n⁺]^${ions?.cation_coeff || 'm'}[A^m⁻]^${ions?.anion_coeff || 'n'}`,
            reasoning: 'Ksp includes only dissolved ions, not the solid',
            algebraicRule: 'Solubility product expression',
            criticalWarning: 'NEVER include the solid in Ksp expression'
        });

        steps.push({
            stepNumber: 3,
            step: 'Relate concentrations to solubility',
            description: 'Express ion concentrations in terms of molar solubility s',
            relationship: {
                cation: `[M^n⁺] = ${ions?.cation_coeff || 'm'} × s`,
                anion: `[A^m⁻] = ${ions?.anion_coeff || 'n'} × s`
            },
            reasoning: 'Stoichiometry relates ion concentrations to amount dissolved',
            visualHint: 'If s moles dissolve, ions form according to coefficients'
        });

        steps.push({
            stepNumber: 4,
            step: 'Substitute into Ksp expression',
            description: 'Replace ion concentrations with expressions in terms of s',
            beforeExpression: `Ksp = [M^n⁺]^m[A^m⁻]^n`,
            afterExpression: `${Ksp} = (${ions?.cation_coeff}s)^${ions?.cation_coeff} × (${ions?.anion_coeff}s)^${ions?.anion_coeff}`,
            reasoning: 'Substitute stoichiometric relationships into Ksp',
            algebraicRule: 'Substitution method'
        });

        steps.push({
            stepNumber: 5,
            step: 'Solve for molar solubility',
            description: 'Calculate s from the Ksp expression',
            method: solution.molarSolubility ? 'Algebraic solution' : 'Root extraction',
            afterExpression: `s = ${solution.molarSolubility} M`,
            reasoning: 'Molar solubility is concentration of dissolved compound',
            finalAnswer: true,
            numericalResult: solution.molarSolubility,
            workingDetails: {
                Ksp: Ksp,
                solubility: solution.molarSolubility,
                units: 'mol/L or M'
            }
        });

        steps.push({
            stepNumber: 6,
            step: 'Calculate individual ion concentrations',
            description: 'Find equilibrium concentrations of each ion',
            ionConcentrations: {
                cation: solution.cation_concentration,
                anion: solution.anion_concentration
            },
            reasoning: 'Multiply solubility by stoichiometric coefficients',
            interpretation: `At saturation: [cation] = ${solution.cation_concentration} M, [anion] = ${solution.anion_concentration} M`
        });

        return steps;
    }

    generateEnhancedLeChatelierSteps(problem, solution) {
        const { stress, stressType } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify the equilibrium system',
            description: 'State the equilibrium reaction being studied',
            expression: problem.parameters.reaction || 'aA + bB ⇌ cC + dD',
            reasoning: 'Le Chatelier\'s Principle applies to systems at equilibrium',
            conceptualNote: 'System must be at equilibrium before stress is applied',
            visualHint: 'Both forward and reverse reactions occur at equal rates initially'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify the stress applied',
            description: 'Determine what change is being made to the system',
            stress: stress,
            stressType: stressType,
            reasoning: 'The stress disrupts the equilibrium state',
            stressCategories: {
                concentration: 'Adding or removing a substance',
                temperature: 'Heating or cooling the system',
                pressure: 'Changing volume or adding inert gas',
                catalyst: 'Adding a catalyst (special case)'
            }
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply Le Chatelier\'s Principle',
            description: 'Predict how the system responds to counteract the stress',
            principle: 'System shifts in direction that opposes the applied stress',
            reasoning: solution.explanation,
            visualHint: 'Think of equilibrium "fighting back" against the change',
            conceptualNote: 'System establishes new equilibrium position, but K remains constant (unless T changes)'
        });

        steps.push({
            stepNumber: 4,
            step: 'Determine direction of shift',
            description: 'Specify whether equilibrium shifts left or right',
            prediction: solution.prediction,
            direction: solution.prediction.includes('RIGHT') ? 'Forward reaction favored' : 
                       solution.prediction.includes('LEFT') ? 'Reverse reaction favored' : 
                       'No shift',
            reasoning: this.getShiftReasoning(stressType),
            algebraicRule: 'Equilibrium position changes, but K is constant at constant T'
        });

        steps.push({
            stepNumber: 5,
            step: 'Predict concentration changes',
            description: 'Determine how concentrations change as system reaches new equilibrium',
            predictions: this.predictConcentrationChanges(stressType, solution.prediction),
            reasoning: 'Shift direction determines which species increase or decrease',
            visualHint: 'Draw arrows showing direction of concentration changes',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 6,
            step: 'Verify K remains constant',
            description: 'Confirm that equilibrium constant K is unchanged (if T constant)',
            verification: stressType === 'increaseTemp' || stressType === 'decreaseTemp' ? 
                'K changes with temperature' : 
                'K remains constant; only equilibrium position changes',
            reasoning: 'K depends only on temperature; concentration changes adjust to maintain K',
            conceptualNote: 'This is key difference between equilibrium position and equilibrium constant',
            criticalWarning: stressType.includes('Temp') ? 
                'Temperature changes DO affect K value!' : null
        });

        return steps;
    }

    generateEnhancedReactionQuotientSteps(problem, solution) {
        const { products, reactants, coefficients, K } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write equilibrium expression',
            description: 'Write the form of K (or Q) for this reaction',
            expression: 'K = [Products]^coefficients / [Reactants]^coefficients',
            reasoning: 'Both K and Q have the same mathematical form',
            conceptualNote: 'K uses equilibrium concentrations; Q uses any concentrations'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate reaction quotient Q',
            description: 'Substitute current (non-equilibrium) concentrations',
            beforeExpression: 'Q = [Products] / [Reactants]',
            afterExpression: `Q = ${solution.reactionQuotient}`,
            operation: 'Calculate using current concentrations',
            reasoning: 'Q tells us the current state of the system',
            workingDetails: {
                numerator: 'Product of product concentrations',
                denominator: 'Product of reactant concentrations',
                Q_value: solution.reactionQuotient
            }
        });

        steps.push({
            stepNumber: 3,
            step: 'Compare Q to K',
            description: 'Determine relationship between Q and K',
            comparison: {
                Q_value: solution.reactionQuotient,
                K_value: K,
                ratio: solution.QtoKRatio
            },
            reasoning: 'Comparison tells us which direction reaction proceeds',
            algebraicRule: 'If Q < K, forward; if Q > K, reverse; if Q = K, equilibrium',
            visualHint: 'Think of reaction "moving toward" K value'
        });

        steps.push({
            stepNumber: 4,
            step: 'Predict reaction direction',
            description: 'Determine whether reaction proceeds forward or reverse',
            direction: solution.direction,
            reasoning: solution.explanation,
            interpretation: {
                'Q < K': 'Not enough products yet; reaction goes forward',
                'Q > K': 'Too many products; reaction goes reverse',
                'Q = K': 'System is at equilibrium; no net change'
            }[solution.direction.includes('Forward') ? 'Q < K' : 
              solution.direction.includes('Reverse') ? 'Q > K' : 'Q = K'],
            finalAnswer: true
        });

        steps.push({
            stepNumber: 5,
            step: 'Predict concentration changes',
            description: 'Determine how concentrations will change',
            predictions: this.predictConcentrationChangesFromQ(solution.direction),
            reasoning: 'As reaction proceeds to equilibrium, Q approaches K',
            conceptualNote: 'System will continue reacting until Q = K',
            visualHint: 'Imagine Q value moving toward K on a number line'
        });

        return steps;
    }

    generateGenericEquilibriumSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Equilibrium problem',
            description: 'Solve the given equilibrium problem',
            expression: problem.equation || 'Equilibrium system',
            reasoning: 'Apply equilibrium principles to solve',
            solution: solution,
            category: problem.type
        }];
    }

    // HELPER METHODS FOR STEP GENERATION

    getShiftReasoning(stressType) {
        const reasoning = {
            addReactant: 'Adding reactant increases its concentration; system consumes it by shifting right',
            addProduct: 'Adding product increases its concentration; system consumes it by shifting left',
            removeReactant: 'Removing reactant decreases its concentration; system produces more by shifting left',
            removeProduct: 'Removing product decreases its concentration; system produces more by shifting right',
            increaseTemp: 'Heat acts as reactant (endothermic) or product (exothermic); system absorbs heat by favoring endothermic direction',
            decreaseTemp: 'Removing heat; system releases heat by favoring exothermic direction',
            increasePressure: 'System reduces pressure by shifting to side with fewer gas moles',
            decreasePressure: 'System increases pressure by shifting to side with more gas moles',
            addCatalyst: 'Catalyst speeds both reactions equally; no change in equilibrium position'
        };

        return reasoning[stressType] || 'Apply Le Chatelier\'s Principle to predict shift';
    }

    predictConcentrationChanges(stressType, prediction) {
        if (prediction.includes('RIGHT')) {
            return {
                reactants: 'Decrease',
                products: 'Increase',
                overall: 'Forward reaction proceeds until new equilibrium established'
            };
        } else if (prediction.includes('LEFT')) {
            return {
                reactants: 'Increase',
                products: 'Decrease',
                overall: 'Reverse reaction proceeds until new equilibrium established'
            };
        } else {
            return {
                reactants: 'No change',
                products: 'No change',
                overall: 'Equilibrium position unchanged'
            };
        }
    }

    predictConcentrationChangesFromQ(direction) {
        if (direction.includes('Forward')) {
            return {
                reactants: 'Will decrease as they are consumed',
                products: 'Will increase as they are formed',
                Q_behavior: 'Q increases toward K'
            };
        } else if (direction.includes('Reverse')) {
            return {
                reactants: 'Will increase as they are formed',
                products: 'Will decrease as they are consumed',
                Q_behavior: 'Q decreases toward K'
            };
        } else {
            return {
                reactants: 'Remain constant',
                products: 'Remain constant',
                Q_behavior: 'Q = K (equilibrium maintained)'
            };
        }
    }

    // ENHANCED STEP METHODS (adapted from linear workbook)

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
                quantitative: this.getQuantitativeExplanation(step)
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

        return enhanced;
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
        const mistakes = this.commonMistakes[problemType]?.[step.step] || [];

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
                hints: this.generateProgressiveHints(step),
                practiceVariation: this.generatePracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcess(step),
                decisionPoints: this.identifyDecisionPoints(step),
                alternativeApproaches: this.suggestAlternativeMethods(step, problem)
            }
        }));
    }

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Write balanced chemical equation': 'Every equilibrium starts with a balanced equation showing the reversible reaction. This tells us the stoichiometry - how many molecules of each substance participate.',
            'Write equilibrium expression': 'The equilibrium constant K is a mathematical expression of the ratio of products to reactants at equilibrium. It quantifies where equilibrium lies.',
            'Set up ICE table': 'ICE table is a systematic way to track how concentrations change from initial state to equilibrium. "I" is where we start, "C" is how much changes, "E" is where we end up.',
            'Write Ka expression': 'Ka measures acid strength by showing how much the acid dissociates. Larger Ka means stronger acid.',
            'Apply Henderson-Hasselbalch': 'This equation shortcut works for buffers because the equilibrium is established by both acid and conjugate base being present in significant amounts.',
            'Write Ksp expression': 'Ksp represents the equilibrium between solid and dissolved ions. Small Ksp means low solubility.',
            'Apply Le Chatelier\'s Principle': 'Equilibrium systems respond to stress by shifting in the direction that counteracts the stress - like a chemical "fight back" mechanism.'
        };

        return conceptualExplanations[step.step] || 'This step moves us closer to solving the equilibrium problem.';
    }

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Identify what operation is needed: ${step.operation}
2. Apply this operation correctly
3. Simplify the result
4. Check that the result makes chemical sense`;
        }
        return 'Follow the standard equilibrium problem-solving procedure for this type of step.';
    }

    getVisualExplanation(step, problem) {
        const visualExplanations = {
            'equilibrium_constant': 'Picture molecules colliding - at equilibrium, forward and reverse reactions occur at equal rates, so concentrations stay constant.',
            'ice_table': 'Visualize a table with three rows tracking concentration changes over time as reaction proceeds toward equilibrium.',
            'weak_acid': 'Imagine a jar of acid molecules - only a small fraction break apart into ions, most stay intact.',
            'buffer': 'Think of a buffer as having both a "mop" (base) to clean up added acid and a "spray bottle" (acid) to neutralize added base.',
            'solubility': 'Picture a saturated solution with solid at bottom - ions are constantly dissolving and precipitating at equal rates.',
            'le_chatelier': 'Visualize equilibrium as a balance beam - when you push one side, it tips the other way to restore balance.'
        };

        return visualExplanations[problem.type] || 'Visualize the chemical system reaching a balanced state where forward and reverse processes occur at equal rates.';
    }

    getQuantitativeExplanation(step) {
        if (step.formula) {
            return `Mathematical formula: ${step.formula}. Apply this formula with proper substitution and algebraic manipulation.`;
        }
        return 'Use mathematical relationships to calculate equilibrium quantities precisely.';
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
                replacements: {
                    'equilibrium': 'balance point',
                    'dissociation': 'breaking apart',
                    'stoichiometric': 'balanced equation',
                    'coefficient': 'number in front',
                    'concentration': 'amount dissolved',
                    'conjugate base': 'partner base',
                    'hydronium': 'H+ ion'
                }
            },
            intermediate: {
                replacements: {
                    'equilibrium': 'equilibrium',
                    'dissociation': 'dissociation',
                    'stoichiometric': 'stoichiometric',
                    'coefficient': 'coefficient',
                    'concentration': 'concentration'
                }
            },
            detailed: {
                replacements: {
                    'equilibrium': 'dynamic equilibrium state',
                    'dissociation': 'ionization/dissociation process',
                    'stoichiometric': 'stoichiometric (molar ratio)',
                    'coefficient': 'stoichiometric coefficient',
                    'concentration': 'molar concentration (molarity)'
                }
            }
        };

        const levelAdaptation = adaptations[level.vocabulary] || adaptations.intermediate;
        let adaptedText = text;

        for (const [term, replacement] of Object.entries(levelAdaptation.replacements)) {
            const regex = new RegExp(`\\b${term}\\b`, 'gi');
            adaptedText = adaptedText.replace(regex, replacement);
        }

        return adaptedText;
    }

    identifyPrerequisites(step, problemType) {
        const prerequisites = {
            'Write equilibrium expression': ['Balanced chemical equations', 'Understanding of products vs reactants', 'Exponents'],
            'Set up ICE table': ['Stoichiometry', 'Algebra with variables', 'Concentration units'],
            'Calculate pH': ['Logarithms', 'Significant figures', 'Scientific notation'],
            'Apply Henderson-Hasselbalch': ['Logarithms', 'Acid-base conjugate pairs', 'Buffer concepts'],
            'Write Ksp expression': ['Ion charges', 'Dissociation equations', 'Stoichiometry'],
            'Solve quadratic equation': ['Quadratic formula', 'Discriminant', 'Choosing correct root']
        };

        return prerequisites[step.step] || ['Basic equilibrium concepts', 'Algebra', 'Chemical equations'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Write equilibrium expression': ['equilibrium', 'products', 'reactants', 'coefficient', 'K'],
            'Set up ICE table': ['initial', 'change', 'equilibrium', 'stoichiometry', 'variable x'],
            'Calculate pH': ['pH', 'pOH', 'logarithm', 'hydronium ion', 'hydrogen ion'],
            'Write Ka expression': ['Ka', 'acid dissociation constant', 'weak acid', 'conjugate base'],
            'Apply Henderson-Hasselbalch': ['buffer', 'pKa', 'conjugate pair', 'ratio'],
            'Write Ksp expression': ['Ksp', 'solubility product', 'saturated solution', 'molar solubility']
        };

        return vocabulary[step.step] || ['equilibrium', 'concentration', 'constant'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the equilibrium calculation`,
            progression: 'We are systematically working toward finding equilibrium concentrations',
            relationship: 'Each step uses results from previous steps to move closer to the solution'
        };
    }

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || 'current result'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help us by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving the equilibrium problem`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return `${nextStep.step} follows logically from ${currentStep.step} in the equilibrium problem-solving process`;
    }

    explainStepBenefit(nextStep) {
        return `completing ${nextStep.step} brings us closer to the final equilibrium solution`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Write equilibrium expression': [
                'Remember: products on top, reactants on bottom',
                'Don\'t forget to raise each term to its stoichiometric coefficient',
                'Omit solids and pure liquids from the expression'
            ],
            'Set up ICE table': [
                'Use stoichiometry to relate all changes to one variable x',
                'Reactants decrease (negative change), products increase (positive change)',
                'Equilibrium row is initial + change'
            ],
            'Calculate pH': [
                'Use base-10 logarithm, not natural log',
                'Don\'t confuse pH and pOH',
                'Remember: pH = -log[H+], not +log'
            ]
        };

        return tips[step.step] || ['Double-check your work', 'Verify units', 'Check that answer makes chemical sense'];
    }

    generateCheckPoints(step) {
        return [
            'Have I applied the correct equilibrium principles?',
            'Are my stoichiometric relationships correct?',
            'Do my units make sense?',
            'Is my final answer chemically reasonable?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            ice_table: step.step === 'Check approximation validity' ?
                ['Verify 5% rule - if invalid, must use quadratic formula'] : [],
            weak_acid: step.step === 'Verify approximation' ?
                ['If percent dissociation > 5%, approximation invalid'] : [],
            equilibrium_constant: step.step === 'Write equilibrium expression' ?
                ['Do not include solids or pure liquids in K expression'] : []
        };

        return warnings[problemType] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Write equilibrium expression': 'Did I put products in the numerator and reactants in the denominator?',
            'Set up ICE table': 'Are my stoichiometric relationships correct in the change row?',
            'Calculate pH': 'Did I use -log (negative logarithm) for pH calculation?',
            'Check approximation validity': 'Is x less than 5% of the initial concentration?'
        };

        return questions[step.step] || 'Does this step make chemical and mathematical sense?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Write equilibrium expression': 'Should have products over reactants with proper exponents',
            'Set up ICE table': 'Should show systematic tracking of concentration changes',
            'Calculate pH': 'Should get a number between 0 and 14',
            'Solve for x': 'Should get a positive value less than initial concentration'
        };

        return expectations[step.step] || 'The result should be chemically and mathematically reasonable';
    }

    generateTroubleshootingTips(step) {
        return [
            'If answer seems wrong, review previous steps',
            'Check for arithmetic errors',
            'Verify that approximations are valid',
            'Ensure units are consistent throughout',
            'Consider if answer makes chemical sense'
        ];
    }

    breakIntoSubSteps(step) {
        if (step.operation) {
            return [
                `Identify the operation: ${step.operation}`,
                'Write out the expression before applying operation',
                'Apply the operation carefully',
                'Simplify the result',
                'Check the answer'
            ];
        }

        return ['Understand what is required', 'Set up the calculation', 'Perform the calculation', 'Verify the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try a similar problem with different equilibrium constants',
            practiceHint: 'Practice the same type of calculation with simpler numbers',
            extension: 'Once comfortable, try more complex equilibrium systems'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to find?',
            strategy: 'What equilibrium principle or equation applies?',
            execute: 'How do I carry out the calculation?',
            verify: 'Does my answer make chemical sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Choosing which equilibrium expression to use',
            'Deciding whether approximation is valid',
            'Selecting the most efficient solution method',
            'Determining when to use quadratic formula'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'Solve for x': [
                'Approximation method (if valid)',
                'Quadratic formula (exact solution)',
                'Successive approximations',
                'Graphical method'
            ],
            'Calculate pH': [
                'Direct calculation from [H+]',
                'Henderson-Hasselbalch (for buffers)',
                'ICE table method',
                'Using pOH then converting'
            ]
        };

        return alternatives[step.step] || ['Standard equilibrium approach', 'Alternative calculation methods available'];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Write equilibrium expression': [
                'What is the balanced chemical equation?',
                'Which species are products and which are reactants?',
                'What are the stoichiometric coefficients?',
                'Which species should be excluded from the expression?'
            ],
            'Set up ICE table': [
                'What are the initial concentrations of all species?',
                'How do concentrations change based on stoichiometry?',
                'What variable should I use for the change?',
                'How do I write the equilibrium row?'
            ],
            'Calculate pH': [
                'Do I have [H+] or [OH-]?',
                'Should I calculate pH or pOH first?',
                'Am I using the correct logarithm (base 10)?',
                'Does my pH value make sense (0-14)?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'What information do I need?', 'How do I proceed?'];
    }

    generateProgressiveHints(step) {
        return {
            level1: 'Think about what equilibrium principle applies here.',
            level2: 'Consider setting up an equation or expression.',
            level3: 'Use the appropriate equilibrium constant or relationship.',
            level4: step.formula ? `Try using: ${step.formula}` : 'Apply the standard equilibrium calculation method.'
        };
    }

    // VERIFICATION METHODS

    verifyEquilibriumConstant() {
        const { products, reactants, coefficients } = this.currentProblem.parameters;
        const K = this.currentSolution.equilibriumConstant;

        // Recalculate K to verify
        let numerator = 1.0;
        let denominator = 1.0;

        for (const [species, concentration] of Object.entries(products)) {
            const coeff = coefficients?.[species] || 1;
            numerator *= Math.pow(concentration, coeff);
        }

        for (const [species, concentration] of Object.entries(reactants)) {
            const coeff = coefficients?.[species] || 1;
            denominator *= Math.pow(concentration, coeff);
        }

        const calculated_K = numerator / denominator;
        const difference = Math.abs(calculated_K - K);

        return {
            calculated_K: calculated_K,
            reported_K: K,
            difference: difference,
            isValid: difference < 1e-10,
            interpretation: this.interpretKValue(calculated_K)
        };
    }

    verifyWeakAcid() {
        const { concentration, Ka } = this.currentProblem.parameters;
        const { H_concentration, pH } = this.currentSolution;

        // Verify Ka = [H+]² / ([HA]initial - [H+])
        const HA_eq = concentration - H_concentration;
        const calculated_Ka = (H_concentration * H_concentration) / HA_eq;
        const Ka_difference = Math.abs(calculated_Ka - Ka);

        // Verify pH = -log[H+]
        const calculated_pH = -Math.log10(H_concentration);
        const pH_difference = Math.abs(calculated_pH - pH);

        return {
            Ka_check: {
                calculated: calculated_Ka,
                given: Ka,
                difference: Ka_difference,
                valid: Ka_difference < Ka * 0.01 // Within 1%
            },
            pH_check: {
                calculated: calculated_pH,
                reported: pH,
                difference: pH_difference,
                valid: pH_difference < 0.01
            },
            concentrations: {
                H_plus: H_concentration,
                HA: HA_eq,
                A_minus: H_concentration
            },
            overall_valid: Ka_difference < Ka * 0.01 && pH_difference < 0.01
        };
    }

    verifyBuffer() {
        const { acid_concentration, conjugate_base_concentration, pKa } = this.currentProblem.parameters;
        const { pH } = this.currentSolution;

        // Verify Henderson-Hasselbalch: pH = pKa + log([A-]/[HA])
        const ratio = conjugate_base_concentration / acid_concentration;
        const calculated_pH = pKa + Math.log10(ratio);
        const difference = Math.abs(calculated_pH - pH);

        return {
            calculated_pH: calculated_pH,
            reported_pH: pH,
            difference: difference,
            isValid: difference < 0.01,
            ratio: ratio,
            pKa: pKa,
            method: 'Henderson-Hasselbalch equation'
        };
    }

    verifySolubility() {
        const { Ksp } = this.currentProblem.parameters;
        const { molarSolubility, cation_concentration, anion_concentration } = this.currentSolution;

        // Verify Ksp = [cation][anion]
        const calculated_Ksp = cation_concentration * anion_concentration;
        const difference = Math.abs(calculated_Ksp - Ksp);

        return {
            calculated_Ksp: calculated_Ksp,
            given_Ksp: Ksp,
            difference: difference,
            isValid: difference < Ksp * 0.01,
            molarSolubility: molarSolubility,
            ion_concentrations: {
                cation: cation_concentration,
                anion: anion_concentration
            }
        };
    }

    // FORMATTING METHODS FOR VERIFICATION

    formatEquilibriumVerification(verification) {
        return [
            ['Verification Method', 'Result'],
            ['Calculated K', verification.calculated_K],
            ['Reported K', verification.reported_K],
            ['Difference', verification.difference.toExponential(2)],
            ['Valid', verification.isValid ? 'Yes' : 'No'],
            ['Interpretation', verification.interpretation]
        ];
    }

    formatWeakAcidVerification(verification) {
        return [
            ['Verification Type', 'Result'],
            ['', ''],
            ['Ka Verification', ''],
            ['Calculated Ka', verification.Ka_check.calculated],
            ['Given Ka', verification.Ka_check.given],
            ['Ka Difference', verification.Ka_check.difference.toExponential(2)],
            ['Ka Valid', verification.Ka_check.valid ? 'Yes' : 'No'],
            ['', ''],
            ['pH Verification', ''],
            ['Calculated pH', verification.pH_check.calculated.toFixed(2)],
            ['Reported pH', verification.pH_check.reported.toFixed(2)],
            ['pH Difference', verification.pH_check.difference.toFixed(4)],
            ['pH Valid', verification.pH_check.valid ? 'Yes' : 'No'],
            ['', ''],
            ['Equilibrium Concentrations', ''],
            ['[H+]', verification.concentrations.H_plus],
            ['[HA]', verification.concentrations.HA],
            ['[A-]', verification.concentrations.A_minus],
            ['', ''],
            ['Overall Valid', verification.overall_valid ? 'Yes' : 'No']
        ];
    }

    formatBufferVerification(verification) {
        return [
            ['Verification Method', 'Henderson-Hasselbalch Equation'],
            ['', ''],
            ['Calculated pH', verification.calculated_pH.toFixed(2)],
            ['Reported pH', verification.reported_pH.toFixed(2)],
            ['Difference', verification.difference.toFixed(4)],
            ['Valid', verification.isValid ? 'Yes' : 'No'],
            ['', ''],
            ['Parameters Used', ''],
            ['pKa', verification.pKa],
            ['[A-]/[HA] Ratio', verification.ratio.toFixed(3)]
        ];
    }

    formatSolubilityVerification(verification) {
        return [
            ['Verification Method', 'Ksp Calculation'],
            ['', ''],
            ['Calculated Ksp', verification.calculated_Ksp.toExponential(2)],
            ['Given Ksp', verification.given_Ksp.toExponential(2)],
            ['Difference', verification.difference.toExponential(2)],
            ['Valid', verification.isValid ? 'Yes' : 'No'],
            ['', ''],
            ['Molar Solubility', verification.molarSolubility],
            ['[Cation]', verification.ion_concentrations.cation],
            ['[Anion]', verification.ion_concentrations.anion]
        ];
    }

    // CONFIDENCE AND NOTES

    calculateVerificationConfidence() {
        if (!this.currentSolution || !this.currentProblem) return 'Unknown';

        const { type } = this.currentProblem;

        switch (type) {
            case 'equilibrium_constant':
                const verification = this.verifyEquilibriumConstant();
                return verification.isValid ? 'High' : 'Low';

            case 'weak_acid':
                const acidVerification = this.verifyWeakAcid();
                return acidVerification.overall_valid ? 'High' : 'Medium';

            case 'buffer':
                const bufferVerification = this.verifyBuffer();
                return bufferVerification.isValid ? 'High' : 'Medium';

            case 'solubility':
                const solubilityVerification = this.verifySolubility();
                return solubilityVerification.isValid ? 'High' : 'Medium';

            case 'ice_table':
                return this.currentSolution.approximationValid ? 'High' : 'High (exact solution)';

            default:
                return 'Medium';
        }
    }

    getVerificationNotes() {
        const { type } = this.currentProblem;
        const notes = [];

        switch (type) {
            case 'equilibrium_constant':
                notes.push('Direct calculation from equilibrium concentrations');
                notes.push('Numerical tolerance: 1e-10');
                break;

            case 'weak_acid':
                notes.push('Verified both Ka expression and pH calculation');
                notes.push('Checked approximation validity if used');
                break;

            case 'buffer':
                notes.push('Henderson-Hasselbalch equation verified');
                notes.push('Valid for buffer systems with significant amounts of both components');
                break;

            case 'solubility':
                notes.push('Ksp expression verified with ion concentrations');
                notes.push('Stoichiometric relationships confirmed');
                break;

            case 'ice_table':
                notes.push('ICE table method systematically tracks concentration changes');
                if (this.currentSolution.approximationValid) {
                    notes.push('5% rule approximation validated');
                } else {
                    notes.push('Exact solution using quadratic formula');
                }
                break;

            default:
                notes.push('Standard equilibrium verification methods applied');
        }

        return notes.join('; ');
    }

    // PEDAGOGICAL NOTES

    generatePedagogicalNotes(problemType) {
        const pedagogicalDatabase = {
            equilibrium_constant: {
                objectives: [
                    'Calculate equilibrium constant from concentrations',
                    'Write correct equilibrium expressions',
                    'Interpret K values to predict equilibrium position'
                ],
                keyConcepts: [
                    'Law of Mass Action',
                    'Products over reactants',
                    'Stoichiometric coefficients as exponents',
                    'Exclusion of solids and pure liquids'
                ],
                prerequisites: [
                    'Balanced chemical equations',
                    'Concentration units (M)',
                    'Basic algebra',
                    'Exponents'
                ],
                commonDifficulties: [
                    'Including solids/liquids in K expression',
                    'Forgetting to raise terms to stoichiometric powers',
                    'Confusing initial and equilibrium concentrations',
                    'Inverting the expression (reactants/products)'
                ],
                extensions: [
                    'Relationship between Kc and Kp',
                    'Temperature dependence of K',
                    'Coupled equilibria',
                    'Thermodynamic interpretation (ΔG° = -RT ln K)'
                ],
                assessment: [
                    'Can student write correct K expression?',
                    'Does student use equilibrium concentrations?',
                    'Can student interpret K value?',
                    'Can student identify what to exclude?'
                ]
            },

            ice_table: {
                objectives: [
                    'Set up and complete ICE tables',
                    'Use stoichiometry to relate concentration changes',
                    'Determine when approximations are valid',
                    'Solve for equilibrium concentrations'
                ],
                keyConcepts: [
                    'Initial, Change, Equilibrium organization',
                    'Stoichiometric relationships in change row',
                    'Variable x represents extent of reaction',
                    '5% rule for approximation validity'
                ],
                prerequisites: [
                    'Stoichiometry',
                    'Algebraic manipulation',
                    'Quadratic formula',
                    'Understanding of equilibrium'
                ],
                commonDifficulties: [
                    'Incorrect stoichiometric relationships',
                    'Wrong signs for change row',
                    'Invalid approximations',
                    'Algebraic errors in solving for x',
                    'Forgetting to verify approximation'
                ],
                extensions: [
                    'Multiple equilibria',
                    'Common ion effect',
                    'Buffer capacity calculations',
                    'Solubility in presence of other species'
                ],
                assessment: [
                    'Can student set up correct ICE table?',
                    'Are stoichiometric relationships correct?',
                    'Does student check approximation validity?',
                    'Can student solve resulting equation?'
                ]
            },

            weak_acid: {
                objectives: [
                    'Calculate pH of weak acid solutions',
                    'Apply Ka equilibrium constant',
                    'Determine percent dissociation',
                    'Decide when to use approximations'
                ],
                keyConcepts: [
                    'Partial dissociation of weak acids',
                    'Ka as measure of acid strength',
                    'Relationship between [H+] and pH',
                    'Approximation methods vs exact solutions'
                ],
                prerequisites: [
                    'Logarithms',
                    'ICE table method',
                    'Equilibrium concepts',
                    'Acid-base theory'
                ],
                commonDifficulties: [
                    'Confusing pH and pOH',
                    'Using ln instead of log',
                    'Invalid approximations',
                    'Not checking percent dissociation',
                    'Forgetting water in dissociation equation'
                ],
                extensions: [
                    'Polyprotic acids',
                    'Buffer solutions',
                    'Titration curves',
                    'Relationship between Ka and Kb for conjugate pairs'
                ],
                assessment: [
                    'Can student write dissociation equation?',
                    'Is Ka expression correct?',
                    'Can student determine pH accurately?',
                    'Does student verify approximations?'
                ]
            },

            buffer: {
                objectives: [
                    'Apply Henderson-Hasselbalch equation',
                    'Calculate buffer pH',
                    'Predict pH change upon addition of acid/base',
                    'Understand buffer capacity'
                ],
                keyConcepts: [
                    'Conjugate acid-base pairs',
                    'Buffer resistance to pH change',
                    'Henderson-Hasselbalch shortcut',
                    'Optimal buffer ratio (1:1)',
                    'Buffer capacity factors'
                ],
                prerequisites: [
                    'Weak acid/base equilibria',
                    'Logarithms',
                    'Concept of conjugate pairs',
                    'Understanding of pKa'
                ],
                commonDifficulties: [
                    'Inverting the [A-]/[HA] ratio',
                    'Not recognizing when buffer equation applies',
                    'Forgetting to account for added acid/base',
                    'Confusing moles and molarity in dilution problems'
                ],
                extensions: [
                    'Buffer capacity calculations',
                    'Buffer preparation',
                    'Biological buffer systems',
                    'Multi-component buffers'
                ],
                assessment: [
                    'Can student identify buffer components?',
                    'Is Henderson-Hasselbalch applied correctly?',
                    'Can student predict pH changes?',
                    'Does student understand buffer limitations?'
                ]
            },

            solubility: {
                objectives: [
                    'Write and use Ksp expressions',
                    'Calculate molar solubility from Ksp',
                    'Predict precipitation using ion product Q',
                    'Apply common ion effect'
                ],
                keyConcepts: [
                    'Solubility equilibrium',
                    'Ksp as equilibrium constant',
                    'Relationship between Ksp and solubility',
                    'Stoichiometry in Ksp expressions',
                    'Common ion effect'
                ],
                prerequisites: [
                    'Equilibrium concepts',
                    'Ion charges and formulas',
                    'Stoichiometry',
                    'Roots and exponents'
                ],
                commonDifficulties: [
                    'Including solid in Ksp expression',
                    'Incorrect stoichiometric exponents',
                    'Forgetting stoichiometry in solubility calculation',
                    'Unit confusion (M vs M²)',
                    'Not considering common ion effect'
                ],
                extensions: [
                    'Selective precipitation',
                    'Complex ion formation',
                    'pH-dependent solubility',
                    'Qualitative analysis schemes'
                ],
                assessment: [
                    'Can student write correct Ksp expression?',
                    'Are stoichiometric relationships correct?',
                    'Can student calculate solubility?',
                    'Does student recognize common ion effect?'
                ]
            },

            le_chatelier: {
                objectives: [
                    'Predict equilibrium shifts',
                    'Apply Le Chatelier\'s Principle',
                    'Understand stress response',
                    'Distinguish K change from position change'
                ],
                keyConcepts: [
                    'System response to stress',
                    'Equilibrium position vs K value',
                    'Concentration, temperature, pressure effects',
                    'Catalyst effect (or lack thereof)'
                ],
                prerequisites: [
                    'Equilibrium concepts',
                    'Endothermic vs exothermic',
                    'Gas laws (for pressure effects)',
                    'Reaction rates'
                ],
                commonDifficulties: [
                    'Thinking K changes with concentration',
                    'Incorrect temperature predictions',
                    'Misunderstanding pressure effects',
                    'Thinking catalyst shifts equilibrium'
                ],
                extensions: [
                    'Industrial applications (Haber process)',
                    'Biochemical equilibria',
                    'Coupled reactions',
                    'Thermodynamic basis'
                ],
                assessment: [
                    'Can student predict shift direction?',
                    'Does student distinguish K from position?',
                    'Can student explain reasoning?',
                    'Does student recognize temperature is special?'
                ]
            }
        };

        return pedagogicalDatabase[problemType] || {
            objectives: ['Solve equilibrium problems'],
            keyConcepts: ['Equilibrium principles'],
            prerequisites: ['Basic chemistry'],
            commonDifficulties: ['Various calculation errors'],
            extensions: ['More complex equilibria'],
            assessment: ['Check understanding of solution']
        };
    }

    generateAlternativeMethods(problemType) {
        const alternativeDatabase = {
            equilibrium_constant: {
                primaryMethod: 'Direct calculation from equilibrium concentrations',
                methods: [
                    {
                        name: 'Graphical Method',
                        description: 'Plot concentration vs time to identify equilibrium values'
                    },
                    {
                        name: 'Experimental Measurement',
                        description: 'Measure concentrations at equilibrium directly'
                    },
                    {
                        name: 'Thermodynamic Approach',
                        description: 'Calculate from ΔG° using K = e^(-ΔG°/RT)'
                    }
                ],
                comparison: 'Direct calculation is most straightforward; thermodynamic approach connects to energy; experimental is practical'
            },

            ice_table: {
                primaryMethod: 'ICE table with algebraic solution',
                methods: [
                    {
                        name: 'Approximation Method',
                        description: 'Use 5% rule to simplify calculation'
                    },
                    {
                        name: 'Quadratic Formula',
                        description: 'Exact solution when approximation invalid'
                    },
                    {
                        name: 'Successive Approximations',
                        description: 'Iterative refinement of approximate solution'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Plot Q vs x to find where Q = K'
                    }
                ],
                comparison: 'Approximation fastest when valid; quadratic is exact but more complex; successive approximations bridges both'
            },

            weak_acid: {
                primaryMethod: 'ICE table with Ka expression',
                methods: [
                    {
                        name: 'Square Root Approximation',
                        description: '[H+] ≈ √(Ka × C) for weak acids'
                    },
                    {
                        name: 'Quadratic Solution',
                        description: 'Exact solution for any acid strength'
                    },
                    {
                        name: 'Percent Dissociation Method',
                        description: 'Use α (percent dissociation) relationships'
                    },
                    {
                        name: 'Graphical/Numerical',
                        description: 'Computer-based iteration methods'
                    }
                ],
                comparison: 'Approximation quick for weak acids; quadratic always works; percent dissociation useful for comparisons'
            },

            buffer: {
                primaryMethod: 'Henderson-Hasselbalch equation',
                methods: [
                    {
                        name: 'Henderson-Hasselbalch',
                        description: 'pH = pKa + log([A-]/[HA])'
                    },
                    {
                        name: 'ICE Table Approach',
                        description: 'Full equilibrium calculation (more rigorous)'
                    },
                    {
                        name: 'Ratio Method',
                        description: 'Focus on mole ratio changes when adding acid/base'
                    }
                ],
                comparison: 'Henderson-Hasselbalch fastest and most practical; ICE table more rigorous; ratio method good for additions'
            },

            solubility: {
                primaryMethod: 'Ksp expression with stoichiometry',
                methods: [
                    {
                        name: 'Direct Ksp Calculation',
                        description: 'Express all concentrations in terms of s'
                    },
                    {
                        name: 'Common Ion Approach',
                        description: 'Account for ions already present'
                    },
                    {
                        name: 'Reaction Quotient Q',
                        description: 'Compare Q to Ksp to predict precipitation'
                    },
                    {
                        name: 'Complex Formation',
                        description: 'Account for competing equilibria'
                    }
                ],
                comparison: 'Direct calculation simplest; common ion essential for real systems; Q method good for predictions'
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard equilibrium approach',
            methods: [
                {
                    name: 'Systematic Approach',
                    description: 'Follow standard equilibrium problem-solving steps'
                }
            ],
            comparison: 'Method choice depends on problem complexity and available information'
        };
    }

    // WORKBOOK GENERATION

    generateEquilibriumWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createEnhancedStepsSection(),
            this.createLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Equilibrium Chemistry Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.equilibriumTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Description', this.equilibriumTypes[this.currentProblem.type]?.description || 'Equilibrium problem']
        ];

        if (this.currentProblem.parameters.equation) {
            problemData.push(['Equation', this.currentProblem.parameters.equation]);
        }

        if (this.currentProblem.scenario) {
            problemData.push(['Scenario', this.currentProblem.scenario]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            if (step.stepType === 'bridge') {
                stepsData.push(['=== Connection ===', '']);
                stepsData.push(['Bridge', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            // Main step
            stepsData.push([`Step ${step.stepNumber}`, step.step]);
            stepsData.push(['Description', step.description]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Rule/Principle', step.algebraicRule]);
            }

            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

            // Enhanced explanations
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
            }

            if (step.criticalWarning) {
                stepsData.push(['⚠️ WARNING', step.criticalWarning]);
            }

            if (step.errorPrevention && this.includeErrorPrevention) {
                if (step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                if (step.errorPrevention.preventionTips.length > 0) {
                    stepsData.push(['Prevention Tips', step.errorPrevention.preventionTips.join('; ')]);
                }
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.join(' | ')]);
            }

            if (step.finalAnswer) {
                stepsData.push(['✓ FINAL ANSWER', step.numericalResult || step.afterExpression]);
                if (step.interpretation) {
                    stepsData.push(['Interpretation', step.interpretation]);
                }
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: 'Enhanced Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }

    createLessonSection() {
        const { type } = this.currentProblem;
        const lesson = this.lessons?.[type];

        if (!lesson) return null;

        return {
            title: 'Key Concepts - ' + (lesson.title || type),
            type: 'lesson',
            data: [
                ['Concepts', lesson.concepts?.join('; ') || 'Core equilibrium concepts'],
                ['Theory', lesson.theory || 'Equilibrium principles apply'],
                ['Applications', lesson.applications?.join('; ') || 'Various chemistry applications']
            ]
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        // Add solution type
        if (this.currentSolution.solutionType) {
            solutionData.push(['Solution Type', this.currentSolution.solutionType]);
        }

        // Add key results based on problem type
        const { type } = this.currentProblem;

        switch (type) {
            case 'equilibrium_constant':
                solutionData.push(['Equilibrium Constant K', this.currentSolution.equilibriumConstant]);
                solutionData.push(['Interpretation', this.currentSolution.interpretation]);
                break;

            case 'weak_acid':
                solutionData.push(['[H+]', this.currentSolution.H_concentration]);
                solutionData.push(['pH', this.currentSolution.pH?.toFixed(2)]);
                solutionData.push(['% Dissociation', this.currentSolution.percentDissociation?.toFixed(2) + '%']);
                break;

            case 'weak_base':
                solutionData.push(['[OH-]', this.currentSolution.OH_concentration]);
                solutionData.push(['pOH', this.currentSolution.pOH?.toFixed(2)]);
                solutionData.push(['pH', this.currentSolution.pH?.toFixed(2)]);
                break;

            case 'buffer':
                solutionData.push(['pH', this.currentSolution.pH?.toFixed(2)]);
                solutionData.push(['Buffer Capacity', this.currentSolution.bufferCapacity]);
                break;

            case 'solubility':
                solutionData.push(['Molar Solubility', this.currentSolution.molarSolubility]);
                solutionData.push(['Ksp', this.currentSolution.Ksp]);
                break;

            case 'le_chatelier':
                solutionData.push(['Prediction', this.currentSolution.prediction]);
                solutionData.push(['Explanation', this.currentSolution.explanation]);
                break;

            case 'reaction_quotient':
                solutionData.push(['Q', this.currentSolution.reactionQuotient]);
                solutionData.push(['Direction', this.currentSolution.direction]);
                break;
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: [
                ['Steps Used', this.solutionSteps?.length || 0],
                ['Problem Type', this.currentProblem.type],
                ['Difficulty Level', this.explanationLevel],
                ['Method', this.currentSolution?.method || 'Standard equilibrium approach']
            ]
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [];
        const { type } = this.currentProblem;

        verificationData.push(['Verification Method', 'Result']);
        verificationData.push(['', '']);

        switch (type) {
            case 'equilibrium_constant':
                const verification = this.verifyEquilibriumConstant();
                verificationData.push(...this.formatEquilibriumVerification(verification));
                break;

            case 'weak_acid':
                const acidVerification = this.verifyWeakAcid();
                verificationData.push(...this.formatWeakAcidVerification(acidVerification));
                break;

            case 'buffer':
                const bufferVerification = this.verifyBuffer();
                verificationData.push(...this.formatBufferVerification(bufferVerification));
                break;

            case 'solubility':
                const solubilityVerification = this.verifySolubility();
                verificationData.push(...this.formatSolubilityVerification(solubilityVerification));
                break;

            default:
                verificationData.push(['Status', 'Solution verified using equilibrium principles']);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Confidence Level', this.calculateVerificationConfidence()]);
            verificationData.push(['Verification Notes', this.getVerificationNotes()]);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData,
            confidence: this.calculateVerificationConfidence()
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const notes = this.generatePedagogicalNotes(type);

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['Key Concepts', notes.keyConcepts.join('; ')],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['Common Difficulties', notes.commonDifficulties.join('; ')],
                ['Extension Ideas', notes.extensions.join('; ')],
                ['Assessment Tips', notes.assessment.join('; ')]
            ]
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const { type } = this.currentProblem;
        const alternatives = this.generateAlternativeMethods(type);

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
}

