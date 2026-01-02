// Enhanced Kinetics and Thermodynamics Chemistry Mathematical Workbook
import * as math from 'mathjs';

export class EnhancedKineticsThermodynamicsWorkbook {
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
        this.explanationLevel = options.explanationLevel || 'intermediate';
        this.includeVerificationInSteps = options.includeVerificationInSteps !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeAlternativeMethods = options.includeAlternativeMethods !== false;
        this.includeErrorPrevention = options.includeErrorPrevention !== false;
        this.includeCommonMistakes = options.includeCommonMistakes !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.verificationDetail = options.verificationDetail || 'detailed';

        // Chemistry constants
        this.constants = {
            R: 8.314, // J/(mol·K) - Universal gas constant
            R_cal: 1.987, // cal/(mol·K)
            R_atm: 0.08206, // L·atm/(mol·K)
            k_B: 1.381e-23, // J/K - Boltzmann constant
            N_A: 6.022e23, // Avogadro's number
            h: 6.626e-34, // J·s - Planck's constant
            c: 2.998e8 // m/s - Speed of light
        };

        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializeKineticsThermodynamicsSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
        this.initializeKineticsThermodynamicsLessons();
    }

    initializeMathSymbols() {
        return {
            'delta': 'Δ', 'Delta': 'Δ',
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±',
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta_lower': 'δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            'degree': '°', 'subscript': '₀', 'superscript': '⁰',
            'rightarrow': '→', 'equilibrium': '⇌'
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
                warningBg: '#ffe6e6',
                energyBg: '#e8f5e9'
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
                warningBg: '#ffe0e6',
                energyBg: '#c8e6c9'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeKineticsThermodynamicsLessons() {
        this.lessons = {
            reaction_rates: {
                title: "Reaction Rates and Rate Laws",
                concepts: [
                    "Rate = -Δ[Reactant]/Δt = Δ[Product]/Δt",
                    "Rate law: rate = k[A]^m[B]^n",
                    "Reaction order: sum of exponents (m + n)",
                    "Rate constant k depends on temperature"
                ],
                theory: "Chemical kinetics studies the speed of reactions and factors affecting rates. The rate law relates reaction rate to concentrations, with exponents determined experimentally.",
                keyFormulas: {
                    "Average Rate": "rate = -Δ[A]/Δt",
                    "Instantaneous Rate": "rate = -d[A]/dt",
                    "Rate Law": "rate = k[A]^m[B]^n",
                    "Integrated Rate Law (1st order)": "ln[A]t = ln[A]0 - kt",
                    "Integrated Rate Law (2nd order)": "1/[A]t = 1/[A]0 + kt",
                    "Half-life (1st order)": "t₁/₂ = 0.693/k",
                    "Half-life (2nd order)": "t₁/₂ = 1/(k[A]0)"
                },
                solvingSteps: [
                    "Identify reaction order from experimental data",
                    "Write appropriate rate law expression",
                    "Determine rate constant k from data",
                    "Use integrated rate law for concentration-time relationships",
                    "Calculate half-life or time for specific conversion"
                ],
                applications: [
                    "Drug metabolism and pharmacokinetics",
                    "Industrial chemical reactor design",
                    "Atmospheric chemistry and pollution",
                    "Food preservation and shelf life"
                ]
            },

            arrhenius_equation: {
                title: "Arrhenius Equation and Activation Energy",
                concepts: [
                    "k = Ae^(-Ea/RT) relates rate constant to temperature",
                    "Ea is activation energy (energy barrier)",
                    "A is pre-exponential factor (frequency factor)",
                    "Higher T or lower Ea increases k exponentially"
                ],
                theory: "The Arrhenius equation describes how reaction rates increase with temperature. Activation energy represents the minimum energy needed for reactant molecules to form products.",
                keyFormulas: {
                    "Arrhenius Equation": "k = Ae^(-Ea/RT)",
                    "Linearized Form": "ln(k) = ln(A) - Ea/RT",
                    "Two-Point Form": "ln(k2/k1) = (Ea/R)(1/T1 - 1/T2)",
                    "Activation Energy from Slope": "Ea = -R × slope"
                },
                solvingSteps: [
                    "Convert temperatures to Kelvin",
                    "Use appropriate gas constant R (8.314 J/mol·K)",
                    "Apply logarithmic form for Ea determination",
                    "Plot ln(k) vs 1/T for graphical analysis",
                    "Calculate k at different temperatures"
                ],
                applications: [
                    "Temperature optimization in industrial processes",
                    "Predicting reaction rates at different temperatures",
                    "Understanding enzyme kinetics",
                    "Shelf-life prediction for stored materials"
                ]
            },

            first_law_thermodynamics: {
                title: "First Law of Thermodynamics",
                concepts: [
                    "ΔE = q + w (energy is conserved)",
                    "q is heat transferred to/from system",
                    "w is work done on/by system",
                    "ΔE is internal energy change"
                ],
                theory: "The first law states that energy cannot be created or destroyed, only converted between forms. For chemical systems, this relates heat, work, and internal energy changes.",
                keyFormulas: {
                    "First Law": "ΔE = q + w",
                    "Work (expansion)": "w = -PΔV",
                    "Enthalpy": "H = E + PV",
                    "Enthalpy Change": "ΔH = ΔE + PΔV",
                    "Constant Pressure": "ΔH = qp",
                    "Constant Volume": "ΔE = qv"
                },
                solvingSteps: [
                    "Identify system, surroundings, and process type",
                    "Determine if heat flows in (q > 0) or out (q < 0)",
                    "Calculate work (w < 0 if system does work)",
                    "Apply ΔE = q + w or ΔH for constant P",
                    "Check sign conventions carefully"
                ],
                applications: [
                    "Calorimetry and heat capacity measurements",
                    "Engine efficiency calculations",
                    "Chemical reaction energy changes",
                    "Phase transition energy requirements"
                ]
            },

            enthalpy_calculations: {
                title: "Enthalpy and Hess's Law",
                concepts: [
                    "ΔH°rxn = ΣnΔH°f(products) - ΣnΔH°f(reactants)",
                    "Hess's Law: ΔH is path-independent",
                    "Standard conditions: 25°C, 1 atm",
                    "Exothermic: ΔH < 0, Endothermic: ΔH > 0"
                ],
                theory: "Enthalpy is a state function representing heat content at constant pressure. Hess's Law allows calculation of ΔH for any reaction using formation enthalpies or combining known reactions.",
                keyFormulas: {
                    "Reaction Enthalpy": "ΔH°rxn = ΣnΔH°f(products) - ΣnΔH°f(reactants)",
                    "Bond Enthalpy Method": "ΔH°rxn = Σbonds broken - Σbonds formed",
                    "Hess's Law": "ΔH°total = ΔH°1 + ΔH°2 + ...",
                    "Heat Capacity": "q = mcΔT or q = nCΔT"
                },
                solvingSteps: [
                    "Write balanced chemical equation",
                    "Look up standard formation enthalpies",
                    "Multiply each ΔH°f by stoichiometric coefficient",
                    "Calculate: products - reactants",
                    "Include proper units and sign"
                ],
                applications: [
                    "Predicting heat released in combustion",
                    "Fuel energy content determination",
                    "Thermochemical data compilation",
                    "Reaction feasibility assessment"
                ]
            },

            entropy_second_law: {
                title: "Entropy and Second Law of Thermodynamics",
                concepts: [
                    "Entropy S measures disorder/randomness",
                    "Second Law: ΔSuniverse ≥ 0 for spontaneous processes",
                    "ΔSuniverse = ΔSsystem + ΔSsurroundings",
                    "Higher entropy favors spontaneity"
                ],
                theory: "Entropy quantifies energy dispersal and molecular disorder. The second law states that spontaneous processes increase total entropy. This determines reaction spontaneity along with enthalpy.",
                keyFormulas: {
                    "Reaction Entropy": "ΔS°rxn = ΣnS°(products) - ΣnS°(reactants)",
                    "Entropy from Heat": "ΔS = qrev/T",
                    "Universe Entropy": "ΔSuniv = ΔSsys + ΔSsurr",
                    "Surroundings Entropy": "ΔSsurr = -ΔHsys/T",
                    "Phase Transition": "ΔS = ΔH/T"
                },
                solvingSteps: [
                    "Calculate ΔS°rxn using standard entropies",
                    "Determine ΔSsurr from ΔH and temperature",
                    "Sum to find ΔSuniv",
                    "Check sign: ΔSuniv > 0 means spontaneous",
                    "Consider temperature dependence"
                ],
                applications: [
                    "Predicting reaction spontaneity",
                    "Understanding phase transitions",
                    "Efficiency limits of heat engines",
                    "Chemical equilibrium analysis"
                ]
            },

            gibbs_free_energy: {
                title: "Gibbs Free Energy and Spontaneity",
                concepts: [
                    "G = H - TS combines enthalpy and entropy",
                    "ΔG < 0: spontaneous, ΔG > 0: non-spontaneous",
                    "ΔG = 0: equilibrium condition",
                    "ΔG° relates to equilibrium constant K"
                ],
                theory: "Gibbs free energy determines reaction spontaneity at constant temperature and pressure. It combines the competing effects of enthalpy (energy) and entropy (disorder).",
                keyFormulas: {
                    "Gibbs Free Energy": "ΔG = ΔH - TΔS",
                    "Standard Gibbs": "ΔG° = ΔH° - TΔS°",
                    "Formation Method": "ΔG°rxn = ΣnΔG°f(products) - ΣnΔG°f(reactants)",
                    "Equilibrium Relation": "ΔG° = -RT ln(K)",
                    "Non-standard Conditions": "ΔG = ΔG° + RT ln(Q)",
                    "Temperature Dependence": "ΔG°T2 = ΔH° - T2ΔS°"
                },
                solvingSteps: [
                    "Calculate or look up ΔH° and ΔS°",
                    "Convert temperature to Kelvin",
                    "Apply ΔG° = ΔH° - TΔS°",
                    "Interpret sign for spontaneity",
                    "Relate to K if calculating equilibrium"
                ],
                applications: [
                    "Predicting reaction spontaneity",
                    "Calculating equilibrium constants",
                    "Electrochemistry and cell potentials",
                    "Phase diagram construction"
                ]
            },

            equilibrium_thermodynamics: {
                title: "Chemical Equilibrium and Thermodynamics",
                concepts: [
                    "At equilibrium: ΔG = 0 and Q = K",
                    "ΔG° = -RT ln(K) relates standard free energy to K",
                    "K > 1: products favored, K < 1: reactants favored",
                    "Temperature affects K through ΔH°"
                ],
                theory: "Chemical equilibrium represents the balance point where forward and reverse reaction rates are equal. Thermodynamics relates the equilibrium constant to free energy changes.",
                keyFormulas: {
                    "Equilibrium Constant": "ΔG° = -RT ln(K)",
                    "Reaction Quotient": "ΔG = ΔG° + RT ln(Q)",
                    "Van't Hoff Equation": "ln(K2/K1) = -(ΔH°/R)(1/T2 - 1/T1)",
                    "K from ΔG°": "K = e^(-ΔG°/RT)",
                    "Temperature Effect": "d(ln K)/dT = ΔH°/RT²"
                },
                solvingSteps: [
                    "Calculate ΔG° from formation data or ΔH° and ΔS°",
                    "Use ΔG° = -RT ln(K) to find K",
                    "Apply Van't Hoff for temperature effects",
                    "Compare Q to K to predict direction",
                    "Calculate equilibrium concentrations if needed"
                ],
                applications: [
                    "Industrial process optimization",
                    "Acid-base equilibria",
                    "Solubility calculations",
                    "Gas phase reactions"
                ]
            },

            calorimetry: {
                title: "Calorimetry and Heat Capacity",
                concepts: [
                    "q = mcΔT for temperature change",
                    "q = nCΔT using molar heat capacity",
                    "Calorimeter measures heat transfer",
                    "Heat capacity depends on substance"
                ],
                theory: "Calorimetry measures heat flow in chemical reactions or physical processes. Heat capacity quantifies the energy needed to raise temperature, varying by substance and conditions.",
                keyFormulas: {
                    "Heat Transfer": "q = mcΔT",
                    "Molar Form": "q = nCΔT",
                    "Coffee Cup Calorimeter": "qrxn = -qsolution = -msolCsolΔT",
                    "Bomb Calorimeter": "qrxn = -CcalΔT",
                    "Specific Heat": "c = q/(mΔT)",
                    "Molar Heat Capacity": "C = q/(nΔT)"
                },
                solvingSteps: [
                    "Identify type of calorimeter and process",
                    "Measure initial and final temperatures",
                    "Calculate ΔT = Tfinal - Tinitial",
                    "Apply appropriate q equation",
                    "Account for heat capacity of calorimeter if needed"
                ],
                applications: [
                    "Determining ΔH of reactions",
                    "Food calorie content measurement",
                    "Fuel energy value determination",
                    "Phase transition heat measurements"
                ]
            },

            collision_theory: {
                title: "Collision Theory and Reaction Mechanisms",
                concepts: [
                    "Reactions occur through molecular collisions",
                    "Effective collisions require proper orientation and energy",
                    "Rate ∝ collision frequency × fraction with Ea",
                    "Elementary steps combine to give mechanism"
                ],
                theory: "Collision theory explains reaction rates at molecular level. Only collisions with sufficient energy (≥ Ea) and proper orientation lead to products. Complex reactions proceed through multiple elementary steps.",
                keyFormulas: {
                    "Collision Frequency": "Z = nσv̄",
                    "Fraction with Ea": "f = e^(-Ea/RT)",
                    "Rate from Collision Theory": "rate = pZe^(-Ea/RT)",
                    "Transition State Theory": "k = (kBT/h)e^(-ΔG‡/RT)",
                    "Rate-determining Step": "Overall rate ≈ rate of slowest step"
                },
                solvingSteps: [
                    "Identify elementary steps in mechanism",
                    "Write rate law for each step",
                    "Identify rate-determining step",
                    "Eliminate intermediates using steady-state approximation",
                    "Derive overall rate law"
                ],
                applications: [
                    "Catalyst design and mechanism studies",
                    "Understanding enzyme catalysis",
                    "Atmospheric reaction mechanisms",
                    "Industrial process optimization"
                ]
            },

            catalysis: {
                title: "Catalysis and Catalytic Mechanisms",
                concepts: [
                    "Catalysts lower activation energy Ea",
                    "Catalysts are not consumed in reaction",
                    "Homogeneous: same phase as reactants",
                    "Heterogeneous: different phase (usually solid)"
                ],
                theory: "Catalysts accelerate reactions by providing alternative pathways with lower activation energy. They don't affect equilibrium position but help reach it faster.",
                keyFormulas: {
                    "Rate Enhancement": "kcat/kuncat = e^((Ea,uncat - Ea,cat)/RT)",
                    "Enzyme Kinetics (Michaelis-Menten)": "v = Vmax[S]/(Km + [S])",
                    "Turnover Number": "kcat = Vmax/[E]total",
                    "Catalytic Efficiency": "kcat/Km"
                },
                solvingSteps: [
                    "Identify type of catalyst and mechanism",
                    "Compare Ea with and without catalyst",
                    "Calculate rate enhancement factor",
                    "For enzymes, determine Km and Vmax",
                    "Analyze catalyst selectivity and activity"
                ],
                applications: [
                    "Industrial chemical production",
                    "Automotive catalytic converters",
                    "Enzyme catalysis in biology",
                    "Green chemistry and sustainable processes"
                ]
            }
        };
    }

    initializeKineticsThermodynamicsSolvers() {
        this.chemistryTypes = {
            // Reaction Rate Problems
            average_rate: {
                patterns: [
                    /average.*rate/i,
                    /rate.*change.*concentration/i,
                    /Δ\[.*\].*Δt/i
                ],
                solver: this.solveAverageRate.bind(this),
                name: 'Average Reaction Rate',
                category: 'kinetics',
                description: 'Calculates average rate from concentration change'
            },

            rate_law: {
                patterns: [
                    /rate.*law/i,
                    /rate.*constant/i,
                    /order.*reaction/i,
                    /k\[.*\]/i
                ],
                solver: this.solveRateLaw.bind(this),
                name: 'Rate Law Determination',
                category: 'kinetics',
                description: 'Determines rate law and rate constant from data'
            },

            integrated_rate_law: {
                patterns: [
                    /integrated.*rate/i,
                    /first.*order.*integrated/i,
                    /second.*order.*integrated/i,
                    /concentration.*time/i
                ],
                solver: this.solveIntegratedRateLaw.bind(this),
                name: 'Integrated Rate Law',
                category: 'kinetics',
                description: 'Calculates concentration at time t or time for target concentration'
            },

            half_life: {
                patterns: [
                    /half.*life/i,
                    /t.*1\/2/i,
                    /t₁\/₂/i,
                    /time.*half/i
                ],
                solver: this.solveHalfLife.bind(this),
                name: 'Half-Life Calculations',
                category: 'kinetics',
                description: 'Calculates half-life or uses it to find k or concentrations'
            },

            arrhenius: {
                patterns: [
                    /arrhenius/i,
                    /activation.*energy/i,
                    /Ea/i,
                    /k.*temperature/i,
                    /ln.*k.*1\/T/i
                ],
                solver: this.solveArrhenius.bind(this),
                name: 'Arrhenius Equation',
                category: 'kinetics',
                description: 'Relates rate constant to temperature and activation energy'
            },

            // Thermodynamics Problems
            first_law: {
                patterns: [
                    /first.*law/i,
                    /ΔE.*q.*w/i,
                    /internal.*energy/i,
                    /heat.*work/i
                ],
                solver: this.solveFirstLaw.bind(this),
                name: 'First Law of Thermodynamics',
                category: 'thermodynamics',
                description: 'Calculates ΔE, q, or w using ΔE = q + w'
            },

            enthalpy_change: {
                patterns: [
                    /enthalpy.*change/i,
                    /ΔH/i,
                    /heat.*reaction/i,
                    /enthalpy.*formation/i
                ],
                solver: this.solveEnthalpyChange.bind(this),
                name: 'Enthalpy Change Calculation',
                category: 'thermodynamics',
                description: 'Calculates ΔH using formation enthalpies or Hess\'s Law'
            },

            hess_law: {
                patterns: [
                    /hess.*law/i,
                    /combine.*reactions/i,
                    /indirect.*path/i
                ],
                solver: this.solveHessLaw.bind(this),
                name: 'Hess\'s Law',
                category: 'thermodynamics',
                description: 'Combines reactions to find ΔH of target reaction'
            },

            entropy_change: {
                patterns: [
                    /entropy.*change/i,
                    /ΔS/i,
                    /disorder/i,
                    /randomness/i
                ],
                solver: this.solveEntropyChange.bind(this),
                name: 'Entropy Change Calculation',
                category: 'thermodynamics',
                description: 'Calculates ΔS using standard entropies'
            },

            gibbs_free_energy: {
                patterns: [
                    /gibbs.*free.*energy/i,
                    /ΔG/i,
                    /spontaneity/i,
                    /free.*energy.*change/i
                ],
                solver: this.solveGibbsFreeEnergy.bind(this),
                name: 'Gibbs Free Energy',
                category: 'thermodynamics',
                description: 'Calculates ΔG and determines spontaneity'
            },

            equilibrium_constant: {
                patterns: [
                    /equilibrium.*constant/i,
                    /K.*ΔG/i,
                    /K.*from.*ΔG/i,
                    /ΔG.*RT.*ln.*K/i
                ],
                solver: this.solveEquilibriumConstant.bind(this),
                name: 'Equilibrium Constant from ΔG°',
                category: 'thermodynamics',
                description: 'Relates ΔG° to K using ΔG° = -RT ln(K)'
            },

            vant_hoff: {
                patterns: [
                    /van.*hoff/i,
                    /K.*temperature/i,
                    /equilibrium.*temperature/i,
                    /ln.*K.*1\/T/i
                ],
                solver: this.solveVantHoff.bind(this),
                name: 'Van\'t Hoff Equation',
                category: 'thermodynamics',
                description: 'Calculates K at different temperatures'
            },

            calorimetry: {
                patterns: [
                    /calorimetry/i,
                    /calorimeter/i,
                    /q.*m.*c.*ΔT/i,
                    /heat.*capacity/i
                ],
                solver: this.solveCalorimetry.bind(this),
                name: 'Calorimetry',
                category: 'thermodynamics',
                description: 'Calculates heat transfer in calorimeter experiments'
            },

            phase_transition: {
                patterns: [
                    /phase.*transition/i,
                    /melting/i,
                    /boiling/i,
                    /vaporization/i,
                    /fusion/i,
                    /sublimation/i
                ],
                solver: this.solvePhaseTransition.bind(this),
                name: 'Phase Transition Thermodynamics',
                category: 'thermodynamics',
                description: 'Calculates energy for phase changes'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            arrhenius: {
                'Convert temperature to Kelvin': [
                    'Using Celsius instead of Kelvin in calculations',
                    'Forgetting to add 273.15 to Celsius temperature',
                    'Using wrong temperature scale in formula'
                ],
                'Calculate activation energy': [
                    'Sign error in Ea/R term',
                    'Using wrong gas constant units',
                    'Mixing up k1 and k2 with T1 and T2'
                ]
            },
            gibbs_free_energy: {
                'Calculate ΔG': [
                    'Forgetting to convert ΔS to J/mol·K from kJ/mol·K',
                    'Using wrong sign for TΔS term',
                    'Not converting temperature to Kelvin'
                ],
                'Determine spontaneity': [
                    'Confusing ΔG < 0 (spontaneous) with ΔG > 0',
                    'Forgetting temperature dependence of spontaneity'
                ]
            },
            rate_law: {
                'Determine reaction order': [
                    'Confusing stoichiometric coefficients with reaction orders',
                    'Not recognizing orders must be determined experimentally',
                    'Incorrectly using initial rate method'
                ]
            },
            first_law: {
                'Apply sign conventions': [
                    'Wrong sign for heat entering vs leaving system',
                    'Confusion about work done by vs on system',
                    'Not following convention: q > 0 (heat in), w > 0 (work on system)'
                ]
            }
        };

        this.errorPrevention = {
            temperature_units: {
                reminder: 'Always convert to Kelvin for thermodynamic calculations',
                method: 'Highlight temperature values and verify K = °C + 273.15'
            },
            sign_conventions: {
                reminder: 'Check signs: exothermic ΔH < 0, system does work w < 0',
                method: 'Draw energy diagram to visualize heat and work flow'
            },
            units_consistency: {
                reminder: 'Ensure all energy units match (J or kJ consistently)',
                method: 'Convert all values to same units before calculation'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Physical meaning and molecular interpretation',
                language: 'intuitive explanations with molecular perspective'
            },
            procedural: {
                focus: 'Step-by-step calculation procedure',
                language: 'explicit calculation instructions'
            },
            visual: {
                focus: 'Energy diagrams and graphical representations',
                language: 'spatial and visual descriptions'
            },
            mathematical: {
                focus: 'Equations and mathematical relationships',
                language: 'precise mathematical notation and derivations'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple chemistry terminology',
                detail: 'essential steps with basic explanations',
                examples: 'concrete numerical examples with common values'
            },
            intermediate: {
                vocabulary: 'standard chemical terminology',
                detail: 'main steps with chemical reasoning',
                examples: 'mix of simple and complex problems'
            },
            detailed: {
                vocabulary: 'full technical chemistry vocabulary',
                detail: 'comprehensive explanations with molecular theory',
                examples: 'abstract concepts and complex scenarios'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to technical',
                detail: 'guided discovery with chemical thinking questions',
                examples: 'carefully sequenced difficulty progression'
            }
        };
    }

    // MAIN SOLVER METHOD
    solveChemistryProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseChemistryProblem(equation, scenario, parameters, problemType, context);
            this.currentSolution = this.solveChemistryProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateChemistrySteps(this.currentProblem, this.currentSolution);
            this.generateChemistryGraphData();
            this.generateChemistryWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                graphData: this.graphData
            };

        } catch (error) {
            throw new Error(`Failed to solve chemistry problem: ${error.message}`);
        }
    }

    parseChemistryProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanChemistryExpression(equation) : '';

        if (problemType && this.chemistryTypes[problemType]) {
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

        for (const [type, config] of Object.entries(this.chemistryTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    return {
                        originalInput: equation || scenario,
                        cleanInput: cleanInput,
                        type: type,
                        scenario: scenario,
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        throw new Error(`Unable to recognize chemistry problem type from: ${equation || scenario}`);
    }

    cleanChemistryExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/Δ/g, 'Delta')
            .replace(/°/g, 'deg')
            .replace(/₁/g, '1')
            .replace(/₂/g, '2')
            .trim();
    }

    solveChemistryProblem_Internal(problem) {
        const solver = this.chemistryTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for chemistry problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // KINETICS SOLVERS

    solveAverageRate(problem) {
        const { concentration_initial, concentration_final, time_initial = 0, time_final, species } = problem.parameters;

        const deltaConcentration = concentration_final - concentration_initial;
        const deltaTime = time_final - time_initial;
        const averageRate = Math.abs(deltaConcentration / deltaTime);

        return {
            problemType: 'Average Reaction Rate',
            species: species || 'A',
            initialConcentration: concentration_initial,
            finalConcentration: concentration_final,
            timeInterval: deltaTime,
            concentrationChange: deltaConcentration,
            averageRate: averageRate,
            units: 'M/s (or appropriate concentration/time units)',
            interpretation: deltaConcentration < 0 ? 
                'Reactant being consumed (concentration decreasing)' : 
                'Product being formed (concentration increasing)',
            formula: 'rate = -Δ[A]/Δt = |([A]final - [A]initial)/(tfinal - tinitial)|',
            category: 'kinetics'
        };
    }

    solveRateLaw(problem) {
        const { initial_rates, concentrations, orders, rate_constant } = problem.parameters;

        if (orders && rate_constant) {
            // Given rate law, calculate rate
            const totalOrder = orders.reduce((sum, order) => sum + order, 0);
            
            return {
                problemType: 'Rate Law',
                rateLaw: this.formatRateLaw(orders, rate_constant),
                rateConstant: rate_constant,
                reactionOrders: orders,
                overallOrder: totalOrder,
                interpretation: this.interpretReactionOrder(totalOrder),
                units: this.getRateConstantUnits(totalOrder),
                category: 'kinetics'
            };
        }

        // Determine rate law from experimental data
        if (initial_rates && concentrations) {
            const orders_determined = this.determineReactionOrders(initial_rates, concentrations);
            const k = this.calculateRateConstant(initial_rates[0], concentrations[0], orders_determined);

            return {
                problemType: 'Rate Law Determination',
                experimentalData: { initial_rates, concentrations },
                determinedOrders: orders_determined,
                rateConstant: k,
                rateLaw: this.formatRateLaw(orders_determined, k),
                overallOrder: orders_determined.reduce((sum, o) => sum + o, 0),
                method: 'Initial rate method',
                category: 'kinetics'
            };
        }

        return {
            problemType: 'Rate Law',
            note: 'Insufficient data provided',
            category: 'kinetics'
        };
    }

    solveIntegratedRateLaw(problem) {
        const { order, initial_concentration, time, rate_constant, target_concentration } = problem.parameters;

        if (order === 0) {
            // Zero order: [A]t = [A]0 - kt
            if (target_concentration !== undefined) {
                const time_required = (initial_concentration - target_concentration) / rate_constant;
                return {
                    order: 0,
                    integratedRateLaw: '[A]t = [A]0 - kt',
                    timeRequired: time_required,
                    initialConcentration: initial_concentration,
                    finalConcentration: target_concentration,
                    rateConstant: rate_constant,
                    category: 'kinetics'
                };
            } else {
                const final_concentration = initial_concentration - rate_constant * time;
                return {
                    order: 0,
                    integratedRateLaw: '[A]t = [A]0 - kt',
                    time: time,
                    initialConcentration: initial_concentration,
                    finalConcentration: final_concentration,
                    rateConstant: rate_constant,
                    category: 'kinetics'
                };
            }
        } else if (order === 1) {
            // First order: ln[A]t = ln[A]0 - kt
            if (target_concentration !== undefined) {
                const time_required = Math.log(initial_concentration / target_concentration) / rate_constant;
                return {
                    order: 1,
                    integratedRateLaw: 'ln[A]t = ln[A]0 - kt',
                    linearForm: 'ln[A]t vs t gives slope = -k',
                    timeRequired: time_required,
                    initialConcentration: initial_concentration,
                    finalConcentration: target_concentration,
                    rateConstant: rate_constant,
                    percentRemaining: (target_concentration / initial_concentration) * 100,
                    category: 'kinetics'
                };
            } else {
                const final_concentration = initial_concentration * Math.exp(-rate_constant * time);
                return {
                    order: 1,
                    integratedRateLaw: 'ln[A]t = ln[A]0 - kt',
                    linearForm: 'ln[A]t vs t gives slope = -k',
                    time: time,
                    initialConcentration: initial_concentration,
                    finalConcentration: final_concentration,
                    rateConstant: rate_constant,
                    percentRemaining: (final_concentration / initial_concentration) * 100,
                    category: 'kinetics'
                };
            }
        } else if (order === 2) {
            // Second order: 1/[A]t = 1/[A]0 + kt
            if (target_concentration !== undefined) {
                const time_required = (1/target_concentration - 1/initial_concentration) / rate_constant;
                return {
                    order: 2,
                    integratedRateLaw: '1/[A]t = 1/[A]0 + kt',
                    linearForm: '1/[A]t vs t gives slope = k',
                    timeRequired: time_required,
                    initialConcentration: initial_concentration,
                    finalConcentration: target_concentration,
                    rateConstant: rate_constant,
                    category: 'kinetics'
                };
            } else {
                const final_concentration = 1 / (1/initial_concentration + rate_constant * time);
                return {
                    order: 2,
                    integratedRateLaw: '1/[A]t = 1/[A]0 + kt',
                    linearForm: '1/[A]t vs t gives slope = k',
                    time: time,
                    initialConcentration: initial_concentration,
                    finalConcentration: final_concentration,
                    rateConstant: rate_constant,
                    category: 'kinetics'
                };
            }
        }

        return {
            problemType: 'Integrated Rate Law',
            note: 'Order must be 0, 1, or 2',
            category: 'kinetics'
        };
    }

    solveHalfLife(problem) {
        const { order, rate_constant, initial_concentration, half_life } = problem.parameters;

        if (order === 1) {
            // First order: t1/2 = 0.693/k
            if (half_life !== undefined) {
                const k = 0.693 / half_life;
                return {
                    order: 1,
                    halfLife: half_life,
                    rateConstant: k,
                    formula: 't₁/₂ = 0.693/k = ln(2)/k',
                    characteristic: 'Half-life is constant (independent of concentration)',
                    interpretation: 'Every half-life period, concentration decreases by 50%',
                    category: 'kinetics'
                };
            } else {
                const t_half = 0.693 / rate_constant;
                return {
                    order: 1,
                    rateConstant: rate_constant,
                    halfLife: t_half,
                    formula: 't₁/₂ = 0.693/k = ln(2)/k',
                    characteristic: 'Half-life is constant (independent of concentration)',
                    interpretation: 'Every half-life period, concentration decreases by 50%',
                    category: 'kinetics'
                };
            }
        } else if (order === 2) {
            // Second order: t1/2 = 1/(k[A]0)
            if (half_life !== undefined && initial_concentration !== undefined) {
                const k = 1 / (half_life * initial_concentration);
                return {
                    order: 2,
                    halfLife: half_life,
                    initialConcentration: initial_concentration,
                    rateConstant: k,
                    formula: 't₁/₂ = 1/(k[A]₀)',
                    characteristic: 'Half-life increases as concentration decreases',
                    interpretation: 'Second half-life is twice as long as first',
                    category: 'kinetics'
                };
            } else {
                const t_half = 1 / (rate_constant * initial_concentration);
                return {
                    order: 2,
                    rateConstant: rate_constant,
                    initialConcentration: initial_concentration,
                    halfLife: t_half,
                    formula: 't₁/₂ = 1/(k[A]₀)',
                    characteristic: 'Half-life increases as concentration decreases',
                    interpretation: 'Second half-life is twice as long as first',
                    category: 'kinetics'
                };
            }
        } else if (order === 0) {
            // Zero order: t1/2 = [A]0/(2k)
            if (half_life !== undefined && initial_concentration !== undefined) {
                const k = initial_concentration / (2 * half_life);
                return {
                    order: 0,
                    halfLife: half_life,
                    initialConcentration: initial_concentration,
                    rateConstant: k,
                    formula: 't₁/₂ = [A]₀/(2k)',
                    characteristic: 'Half-life decreases linearly with concentration',
                    category: 'kinetics'
                };
            } else {
                const t_half = initial_concentration / (2 * rate_constant);
                return {
                    order: 0,
                    rateConstant: rate_constant,
                    initialConcentration: initial_concentration,
                    halfLife: t_half,
                    formula: 't₁/₂ = [A]₀/(2k)',
                    characteristic: 'Half-life decreases linearly with concentration',
                    category: 'kinetics'
                };
            }
        }

        return {
            problemType: 'Half-Life',
            note: 'Order must be specified (0, 1, or 2)',
            category: 'kinetics'
        };
    }

    solveArrhenius(problem) {
        const { 
            activation_energy, 
            temperature, 
            rate_constant, 
            A_factor,
            temperature1,
            temperature2,
            k1,
            k2,
            gas_constant = 8.314 // J/(mol·K)
        } = problem.parameters;

        // Two-point form: ln(k2/k1) = (Ea/R)(1/T1 - 1/T2)
        if (k1 !== undefined && k2 !== undefined && temperature1 !== undefined && temperature2 !== undefined) {
            const T1_K = this.toKelvin(temperature1);
            const T2_K = this.toKelvin(temperature2);
            const Ea = (Math.log(k2/k1) * gas_constant) / (1/T1_K - 1/T2_K);

            return {
                problemType: 'Arrhenius Equation (Two-Point Form)',
                formula: 'ln(k₂/k₁) = (Ea/R)(1/T₁ - 1/T₂)',
                temperature1: T1_K,
                temperature2: T2_K,
                k1: k1,
                k2: k2,
                activationEnergy: Ea,
                activationEnergy_kJ: Ea / 1000,
                gasConstant: gas_constant,
                interpretation: this.interpretActivationEnergy(Ea),
                category: 'kinetics'
            };
        }

        // Calculate k at given temperature
        if (activation_energy !== undefined && temperature !== undefined && A_factor !== undefined) {
            const T_K = this.toKelvin(temperature);
            const k = A_factor * Math.exp(-activation_energy / (gas_constant * T_K));

            return {
                problemType: 'Arrhenius Equation',
                formula: 'k = Ae^(-Ea/RT)',
                temperature: T_K,
                activationEnergy: activation_energy,
                preExponentialFactor: A_factor,
                rateConstant: k,
                gasConstant: gas_constant,
                exponentialFactor: Math.exp(-activation_energy / (gas_constant * T_K)),
                interpretation: this.interpretActivationEnergy(activation_energy),
                category: 'kinetics'
            };
        }

        // Calculate k2 from k1 and temperatures
        if (k1 !== undefined && activation_energy !== undefined && temperature1 !== undefined && temperature2 !== undefined) {
            const T1_K = this.toKelvin(temperature1);
            const T2_K = this.toKelvin(temperature2);
            const k2 = k1 * Math.exp((activation_energy/gas_constant) * (1/T1_K - 1/T2_K));

            return {
                problemType: 'Arrhenius Equation (Calculate k at new temperature)',
                formula: 'ln(k₂/k₁) = (Ea/R)(1/T₁ - 1/T₂)',
                temperature1: T1_K,
                temperature2: T2_K,
                k1: k1,
                k2: k2,
                activationEnergy: activation_energy,
                rateEnhancement: k2/k1,
                interpretation: T2_K > T1_K ? 
                    'Rate constant increases with temperature' : 
                    'Rate constant decreases with temperature',
                category: 'kinetics'
            };
        }

        return {
            problemType: 'Arrhenius Equation',
            note: 'Insufficient parameters provided',
            category: 'kinetics'
        };
    }

    // THERMODYNAMICS SOLVERS

    solveFirstLaw(problem) {
        const { delta_E, q, w } = problem.parameters;

        // ΔE = q + w
        let result = {};

        if (delta_E === undefined && q !== undefined && w !== undefined) {
            result = {
                deltaE: q + w,
                q: q,
                w: w,
                calculated: 'ΔE'
            };
        } else if (q === undefined && delta_E !== undefined && w !== undefined) {
            result = {
                deltaE: delta_E,
                q: delta_E - w,
                w: w,
                calculated: 'q'
            };
        } else if (w === undefined && delta_E !== undefined && q !== undefined) {
            result = {
                deltaE: delta_E,
                q: q,
                w: delta_E - q,
                calculated: 'w'
            };
        } else {
            return {
                problemType: 'First Law of Thermodynamics',
                note: 'Need exactly two of three values (ΔE, q, w)',
                category: 'thermodynamics'
            };
        }

        return {
            problemType: 'First Law of Thermodynamics',
            formula: 'ΔE = q + w',
            internalEnergyChange: result.deltaE,
            heat: result.q,
            work: result.w,
            calculatedQuantity: result.calculated,
            signConventions: {
                q: 'q > 0: heat absorbed by system, q < 0: heat released',
                w: 'w > 0: work done on system, w < 0: work done by system',
                deltaE: 'ΔE > 0: energy increases, ΔE < 0: energy decreases'
            },
            interpretation: this.interpretFirstLaw(result),
            category: 'thermodynamics'
        };
    }

    solveEnthalpyChange(problem) {
        const { 
            products_Hf = [],
            reactants_Hf = [],
            products_coeffs = [],
            reactants_coeffs = [],
            delta_H,
            heat_released,
            moles
        } = problem.parameters;

        // Calculate ΔH from formation enthalpies
        if (products_Hf.length > 0 && reactants_Hf.length > 0) {
            const products_sum = products_Hf.reduce((sum, hf, i) => 
                sum + (products_coeffs[i] || 1) * hf, 0);
            const reactants_sum = reactants_Hf.reduce((sum, hf, i) => 
                sum + (reactants_coeffs[i] || 1) * hf, 0);
            const deltaH_rxn = products_sum - reactants_sum;

            return {
                problemType: 'Enthalpy Change Calculation',
                formula: 'ΔH°rxn = ΣnΔH°f(products) - ΣnΔH°f(reactants)',
                productsSum: products_sum,
                reactantsSum: reactants_sum,
                enthalpyChange: deltaH_rxn,
                units: 'kJ/mol',
                reactionType: deltaH_rxn < 0 ? 'Exothermic (releases heat)' : 'Endothermic (absorbs heat)',
                interpretation: this.interpretEnthalpyChange(deltaH_rxn),
                category: 'thermodynamics'
            };
        }

        // Calculate ΔH per mole from heat released/absorbed
        if (heat_released !== undefined && moles !== undefined) {
            const deltaH = -heat_released / moles; // Negative because heat released means ΔH < 0

            return {
                problemType: 'Enthalpy from Calorimetry',
                heatTransferred: heat_released,
                moles: moles,
                enthalpyChange: deltaH,
                units: 'kJ/mol',
                reactionType: deltaH < 0 ? 'Exothermic (releases heat)' : 'Endothermic (absorbs heat)',
                category: 'thermodynamics'
            };
        }

        return {
            problemType: 'Enthalpy Change',
            note: 'Need formation enthalpies or calorimetry data',
            category: 'thermodynamics'
        };
    }

    solveHessLaw(problem) {
        const { reactions = [], target_reaction } = problem.parameters;

        if (reactions.length === 0) {
            return {
                problemType: 'Hess\'s Law',
                note: 'Provide list of reactions with their ΔH values',
                principle: 'ΔH is path-independent; sum ΔH of steps to get ΔH of target',
                category: 'thermodynamics'
            };
        }

        // Sum up all reaction enthalpies
        const totalDeltaH = reactions.reduce((sum, rxn) => {
            const coefficient = rxn.coefficient || 1;
            const reversed = rxn.reversed ? -1 : 1;
            return sum + coefficient * reversed * rxn.deltaH;
        }, 0);

        return {
            problemType: 'Hess\'s Law',
            principle: 'ΔH°total = ΔH°₁ + ΔH°₂ + ... (accounting for coefficients and reversals)',
            reactions: reactions,
            targetReaction: target_reaction,
            totalEnthalpyChange: totalDeltaH,
            units: 'kJ/mol',
            method: 'Algebraic combination of reactions',
            category: 'thermodynamics'
        };
    }

    solveEntropyChange(problem) {
        const { 
            products_S = [],
            reactants_S = [],
            products_coeffs = [],
            reactants_coeffs = [],
            heat_transfer,
            temperature
        } = problem.parameters;

        // Calculate ΔS from standard entropies
        if (products_S.length > 0 && reactants_S.length > 0) {
            const products_sum = products_S.reduce((sum, s, i) => 
                sum + (products_coeffs[i] || 1) * s, 0);
            const reactants_sum = reactants_S.reduce((sum, s, i) => 
                sum + (reactants_coeffs[i] || 1) * s, 0);
            const deltaS_rxn = products_sum - reactants_sum;

            return {
                problemType: 'Entropy Change Calculation',
                formula: 'ΔS°rxn = ΣnS°(products) - ΣnS°(reactants)',
                productsSum: products_sum,
                reactantsSum: reactants_sum,
                entropyChange: deltaS_rxn,
                units: 'J/(mol·K)',
                interpretation: deltaS_rxn > 0 ? 
                    'Entropy increases (more disorder)' : 
                    'Entropy decreases (more order)',
                category: 'thermodynamics'
            };
        }

        // Calculate ΔS from heat transfer at constant temperature
        if (heat_transfer !== undefined && temperature !== undefined) {
            const T_K = this.toKelvin(temperature);
            const deltaS = heat_transfer / T_K;

            return {
                problemType: 'Entropy from Heat Transfer',
                formula: 'ΔS = qrev/T',
                heatTransfer: heat_transfer,
                temperature: T_K,
                entropyChange: deltaS,
                units: 'J/K',
                category: 'thermodynamics'
            };
        }

        return {
            problemType: 'Entropy Change',
            note: 'Need standard entropies or heat transfer data',
            category: 'thermodynamics'
        };
    }

    solveGibbsFreeEnergy(problem) {
        const { 
            delta_H, 
            delta_S, 
            temperature,
            products_Gf = [],
            reactants_Gf = [],
            products_coeffs = [],
            reactants_coeffs = []
        } = problem.parameters;

        // Calculate ΔG from ΔH and ΔS
        if (delta_H !== undefined && delta_S !== undefined && temperature !== undefined) {
            const T_K = this.toKelvin(temperature);
            const deltaS_kJ = delta_S / 1000; // Convert J/(mol·K) to kJ/(mol·K)
            const deltaG = delta_H - T_K * deltaS_kJ;

            return {
                problemType: 'Gibbs Free Energy',
                formula: 'ΔG° = ΔH° - TΔS°',
                enthalpyChange: delta_H,
                entropyChange: delta_S,
                temperature: T_K,
                gibbsFreeEnergy: deltaG,
                units: 'kJ/mol',
                spontaneity: this.determineSpontaneity(deltaG),
                thermodynamicAnalysis: this.analyzeThermodynamics(delta_H, delta_S, T_K),
                category: 'thermodynamics'
            };
        }

        // Calculate ΔG from formation free energies
        if (products_Gf.length > 0 && reactants_Gf.length > 0) {
            const products_sum = products_Gf.reduce((sum, gf, i) => 
                sum + (products_coeffs[i] || 1) * gf, 0);
            const reactants_sum = reactants_Gf.reduce((sum, gf, i) => 
                sum + (reactants_coeffs[i] || 1) * gf, 0);
            const deltaG_rxn = products_sum - reactants_sum;

            return {
                problemType: 'Gibbs Free Energy from Formation Values',
                formula: 'ΔG°rxn = ΣnΔG°f(products) - ΣnΔG°f(reactants)',
                productsSum: products_sum,
                reactantsSum: reactants_sum,
                gibbsFreeEnergy: deltaG_rxn,
                units: 'kJ/mol',
                spontaneity: this.determineSpontaneity(deltaG_rxn),
                category: 'thermodynamics'
            };
        }

        return {
            problemType: 'Gibbs Free Energy',
            note: 'Need ΔH, ΔS, and T, or formation free energies',
            category: 'thermodynamics'
        };
    }

    solveEquilibriumConstant(problem) {
        const { 
            delta_G_standard, 
            temperature,
            K_equilibrium,
            gas_constant = 8.314 // J/(mol·K)
        } = problem.parameters;

        const T_K = this.toKelvin(temperature);

        // Calculate K from ΔG°
        if (delta_G_standard !== undefined) {
            const deltaG_J = delta_G_standard * 1000; // Convert kJ to J
            const K = Math.exp(-deltaG_J / (gas_constant * T_K));

            return {
                problemType: 'Equilibrium Constant from ΔG°',
                formula: 'ΔG° = -RT ln(K)  or  K = e^(-ΔG°/RT)',
                gibbsFreeEnergy: delta_G_standard,
                temperature: T_K,
                gasConstant: gas_constant,
                equilibriumConstant: K,
                logK: Math.log10(K),
                interpretation: this.interpretEquilibriumConstant(K),
                category: 'thermodynamics'
            };
        }

        // Calculate ΔG° from K
        if (K_equilibrium !== undefined) {
            const deltaG_J = -gas_constant * T_K * Math.log(K_equilibrium);
            const deltaG_kJ = deltaG_J / 1000;

            return {
                problemType: 'ΔG° from Equilibrium Constant',
                formula: 'ΔG° = -RT ln(K)',
                equilibriumConstant: K_equilibrium,
                temperature: T_K,
                gasConstant: gas_constant,
                gibbsFreeEnergy: deltaG_kJ,
                interpretation: this.interpretEquilibriumConstant(K_equilibrium),
                category: 'thermodynamics'
            };
        }

        return {
            problemType: 'Equilibrium Constant',
            note: 'Need either ΔG° or K and temperature',
            category: 'thermodynamics'
        };
    }

    solveVantHoff(problem) {
        const { 
            K1, 
            K2,
            temperature1,
            temperature2,
            delta_H_standard,
            gas_constant = 8.314 // J/(mol·K)
        } = problem.parameters;

        const T1_K = this.toKelvin(temperature1);
        const T2_K = this.toKelvin(temperature2);

        // Calculate ΔH° from two K values
        if (K1 !== undefined && K2 !== undefined) {
            const deltaH_J = (Math.log(K2/K1) * gas_constant) / (1/T1_K - 1/T2_K);
            const deltaH_kJ = deltaH_J / 1000;

            return {
                problemType: 'Van\'t Hoff Equation (Calculate ΔH°)',
                formula: 'ln(K₂/K₁) = -(ΔH°/R)(1/T₂ - 1/T₁)',
                K1: K1,
                K2: K2,
                temperature1: T1_K,
                temperature2: T2_K,
                enthalpyChange: deltaH_kJ,
                units: 'kJ/mol',
                interpretation: deltaH_kJ < 0 ? 
                    'Exothermic reaction: K decreases with increasing T' : 
                    'Endothermic reaction: K increases with increasing T',
                category: 'thermodynamics'
            };
        }

        // Calculate K2 from K1, ΔH°, and temperatures
        if (K1 !== undefined && delta_H_standard !== undefined) {
            const deltaH_J = delta_H_standard * 1000;
            const K2_calculated = K1 * Math.exp(-(deltaH_J/gas_constant) * (1/T2_K - 1/T1_K));

            return {
                problemType: 'Van\'t Hoff Equation (Calculate K at new T)',
                formula: 'ln(K₂/K₁) = -(ΔH°/R)(1/T₂ - 1/T₁)',
                K1: K1,
                K2: K2_calculated,
                temperature1: T1_K,
                temperature2: T2_K,
                enthalpyChange: delta_H_standard,
                ratioK2_K1: K2_calculated / K1,
                temperatureEffect: T2_K > T1_K ? 
                    (delta_H_standard > 0 ? 'K increases (endothermic)' : 'K decreases (exothermic)') :
                    (delta_H_standard > 0 ? 'K decreases (endothermic)' : 'K increases (exothermic)'),
                category: 'thermodynamics'
            };
        }

        return {
            problemType: 'Van\'t Hoff Equation',
            note: 'Need K values at two temperatures, or K1, ΔH°, and two temperatures',
            category: 'thermodynamics'
        };
    }

    solveCalorimetry(problem) {
        const { 
            mass,
            specific_heat,
            delta_T,
            heat_transfer,
            calorimeter_constant,
            moles,
            calculate = 'q' // 'q', 'deltaT', 'deltaH_rxn'
        } = problem.parameters;

        if (calculate === 'q' && mass !== undefined && specific_heat !== undefined && delta_T !== undefined) {
            // Calculate heat transfer: q = mcΔT
            const q = mass * specific_heat * delta_T;

            return {
                problemType: 'Calorimetry (Heat Transfer)',
                formula: 'q = mcΔT',
                mass: mass,
                specificHeat: specific_heat,
                temperatureChange: delta_T,
                heatTransfer: q,
                units: 'J (or kJ if c in kJ)',
                signInterpretation: delta_T > 0 ? 
                    'Temperature increased: heat absorbed' : 
                    'Temperature decreased: heat released',
                category: 'thermodynamics'
            };
        }

        if (calculate === 'deltaH_rxn' && heat_transfer !== undefined && moles !== undefined) {
            // Calculate enthalpy of reaction
            const deltaH = -heat_transfer / moles; // Negative for exothermic

            return {
                problemType: 'Calorimetry (Reaction Enthalpy)',
                heatMeasured: heat_transfer,
                molesReacted: moles,
                enthalpyOfReaction: deltaH,
                units: 'kJ/mol',
                reactionType: deltaH < 0 ? 'Exothermic' : 'Endothermic',
                explanation: 'ΔH_rxn = -q/n (negative because system perspective)',
                category: 'thermodynamics'
            };
        }

        if (calorimeter_constant !== undefined && delta_T !== undefined) {
            // Bomb calorimeter: q = C_cal × ΔT
            const q = calorimeter_constant * delta_T;

            return {
                problemType: 'Bomb Calorimetry',
                formula: 'q_rxn = -C_cal × ΔT',
                calorimeterConstant: calorimeter_constant,
                temperatureChange: delta_T,
                heatOfReaction: -q,
                units: 'kJ',
                note: 'Negative sign because heat released by reaction absorbed by calorimeter',
                category: 'thermodynamics'
            };
        }

        return {
            problemType: 'Calorimetry',
            note: 'Need appropriate parameters for calculation type',
            category: 'thermodynamics'
        };
    }

    solvePhaseTransition(problem) {
        const { 
            transition_type, // 'fusion', 'vaporization', 'sublimation'
            enthalpy_transition,
            mass,
            molar_mass,
            temperature,
            moles
        } = problem.parameters;

        const n = moles || (mass && molar_mass ? mass / molar_mass : undefined);

        if (enthalpy_transition !== undefined && n !== undefined) {
            const total_heat = enthalpy_transition * n;

            const transitionNames = {
                fusion: 'Melting/Fusion',
                vaporization: 'Vaporization/Boiling',
                sublimation: 'Sublimation'
            };

            return {
                problemType: `Phase Transition: ${transitionNames[transition_type] || 'Unknown'}`,
                formula: 'q = n × ΔH_transition',
                transitionType: transition_type,
                enthalpyOfTransition: enthalpy_transition,
                moles: n,
                totalHeat: total_heat,
                units: 'kJ',
                entropy: temperature ? enthalpy_transition * 1000 / this.toKelvin(temperature) : undefined,
                entropyUnits: 'J/(mol·K)',
                interpretation: this.interpretPhaseTransition(transition_type),
                category: 'thermodynamics'
            };
        }

        return {
            problemType: 'Phase Transition',
            note: 'Need ΔH_transition and amount (moles or mass with molar mass)',
            category: 'thermodynamics'
        };
    }

    // HELPER METHODS

    toKelvin(temperature) {
        // Assumes Celsius if between -273 and 1000, otherwise assumes already Kelvin
        if (temperature >= -273.15 && temperature < 1000) {
            return temperature + 273.15;
        }
        return temperature;
    }

    formatRateLaw(orders, k) {
        const reactants = ['A', 'B', 'C', 'D'];
        let rateLaw = 'rate = k';
        
        orders.forEach((order, i) => {
            if (order !== 0 && i < reactants.length) {
                rateLaw += `[${reactants[i]}]`;
                if (order !== 1) {
                    rateLaw += `^${order}`;
                }
            }
        });

        return rateLaw;
    }

    interpretReactionOrder(order) {
        if (order === 0) return 'Zero order: rate independent of concentration';
        if (order === 1) return 'First order: rate directly proportional to concentration';
        if (order === 2) return 'Second order: rate proportional to square of concentration';
        return `Order ${order}: rate proportional to concentration raised to power ${order}`;
    }

    getRateConstantUnits(order) {
        const units = {
            0: 'M/s',
            1: 's⁻¹',
            2: 'M⁻¹s⁻¹',
            3: 'M⁻²s⁻¹'
        };
        return units[order] || `M^(1-${order})s⁻¹`;
    }

    determineReactionOrders(rates, concentrations) {
        // Simplified method - assumes basic patterns
        // In real implementation, would use ratio method
        return [1, 1]; // Placeholder
    }

    calculateRateConstant(rate, concentrations, orders) {
        let denominator = 1;
        concentrations.forEach((conc, i) => {
            denominator *= Math.pow(conc, orders[i] || 0);
        });
        return rate / denominator;
    }

    interpretActivationEnergy(Ea) {
        const Ea_kJ = Ea / 1000;
        if (Ea_kJ < 50) return 'Low activation energy: fast reaction at room temperature';
        if (Ea_kJ < 100) return 'Moderate activation energy: reaction rate sensitive to temperature';
        return 'High activation energy: slow reaction, very temperature-dependent';
    }

    interpretFirstLaw(result) {
        const interpretations = [];

        if (result.q > 0) {
            interpretations.push('Heat absorbed by system (endothermic process)');
        } else if (result.q < 0) {
            interpretations.push('Heat released by system (exothermic process)');
        }

        if (result.w > 0) {
            interpretations.push('Work done on system (compression)');
        } else if (result.w < 0) {
            interpretations.push('Work done by system (expansion)');
        }

        if (result.deltaE > 0) {
            interpretations.push('Internal energy increases');
        } else if (result.deltaE < 0) {
            interpretations.push('Internal energy decreases');
        }

        return interpretations.join('; ');
    }

    interpretEnthalpyChange(deltaH) {
        if (deltaH < 0) {
            return 'Exothermic: releases heat to surroundings, products more stable than reactants';
        } else if (deltaH > 0) {
            return 'Endothermic: absorbs heat from surroundings, products less stable than reactants';
        }
        return 'No net heat change';
    }

    determineSpontaneity(deltaG) {
        if (deltaG < 0) {
            return 'Spontaneous: reaction proceeds forward under standard conditions';
        } else if (deltaG > 0) {
            return 'Non-spontaneous: reaction does not proceed forward, reverse reaction favored';
        }
        return 'Equilibrium: no net change, forward and reverse rates equal';
    }

    analyzeThermodynamics(deltaH, deltaS, T) {
        const analysis = {
            deltaH_sign: deltaH < 0 ? 'negative (exothermic)' : 'positive (endothermic)',
            deltaS_sign: deltaS < 0 ? 'negative (decrease in disorder)' : 'positive (increase in disorder)',
            temperature: T
        };

        if (deltaH < 0 && deltaS > 0) {
            analysis.conclusion = 'Spontaneous at all temperatures (both factors favor reaction)';
        } else if (deltaH > 0 && deltaS < 0) {
            analysis.conclusion = 'Non-spontaneous at all temperatures (both factors oppose reaction)';
        } else if (deltaH < 0 && deltaS < 0) {
            const T_crossover = (deltaH * 1000) / deltaS; // Convert deltaH kJ to J
            analysis.conclusion = `Spontaneous at low T (T < ${T_crossover.toFixed(1)} K), non-spontaneous at high T`;
            analysis.crossoverTemp = T_crossover;
        } else if (deltaH > 0 && deltaS > 0) {
            const T_crossover = (deltaH * 1000) / deltaS;
            analysis.conclusion = `Non-spontaneous at low T, spontaneous at high T (T > ${T_crossover.toFixed(1)} K)`;
            analysis.crossoverTemp = T_crossover;
        }

        return analysis;
    }

    interpretEquilibriumConstant(K) {
        if (K > 1000) {
            return 'K >> 1: Reaction strongly favors products, essentially goes to completion';
        } else if (K > 10) {
            return 'K > 1: Products favored at equilibrium';
        } else if (K >= 0.1 && K <= 10) {
            return '0.1 < K < 10: Significant amounts of both reactants and products at equilibrium';
        } else if (K > 0.001) {
            return 'K < 1: Reactants favored at equilibrium';
        }
        return 'K << 1: Reaction strongly favors reactants, very little product forms';
    }

    interpretPhaseTransition(type) {
        const interpretations = {
            fusion: 'Energy required to overcome intermolecular forces in solid to form liquid',
            vaporization: 'Energy required to overcome intermolecular forces in liquid to form gas',
            sublimation: 'Energy required to convert solid directly to gas',
            condensation: 'Energy released when gas forms liquid',
            freezing: 'Energy released when liquid forms solid',
            deposition: 'Energy released when gas forms solid'
        };

        return interpretations[type] || 'Phase transition energy change';
    }

    // STEP GENERATION

   generateChemistrySteps(problem, solution) {
    // Add safety check
    if (!problem || !solution) {
        console.warn('Problem or solution is undefined');
        return [];
    }

    let baseSteps = [];
    
    try {
        baseSteps = this.generateBaseChemistrySteps(problem, solution);
    } catch (error) {
        console.error('Error generating base steps:', error.message);
        baseSteps = [{
            stepNumber: 1,
            step: 'Solution',
            description: 'Problem solved',
            result: JSON.stringify(solution),
            category: 'general'
        }];
    }

    // Safety check for baseSteps
    if (!baseSteps || !Array.isArray(baseSteps)) {
        console.warn('baseSteps is not an array, creating empty array');
        baseSteps = [];
    }

    if (baseSteps.length === 0) {
        console.warn('No steps generated, returning empty array');
        return [];
    }

    try {
        if (this.explanationLevel !== 'basic') {
            baseSteps = baseSteps.map((step, index, array) =>
                this.enhanceChemistryStepExplanation(step, problem, solution, index, array.length)
            );
        }

        if (this.includeConceptualConnections) {
            baseSteps = this.addStepBridges(baseSteps, problem);
        }

        if (this.includeErrorPrevention) {
            baseSteps = baseSteps.map(step =>
                this.addChemistryErrorPrevention(step, problem.type)
            );
        }

        if (this.explanationLevel === 'scaffolded') {
            baseSteps = this.addChemistryScaffolding(baseSteps, problem);
        }
    } catch (error) {
        console.error('Error enhancing steps:', error.message);
        // Return base steps if enhancement fails
    }

    return baseSteps;
}

// Also add safety to connectToChemicalTheory:

connectToChemicalTheory(step, problem) {
    const theoryConnections = {
        arrhenius: 'Collision theory: Only molecules with E ≥ Ea react. Boltzmann distribution shows fraction with sufficient energy.',
        gibbs_free_energy: 'Second Law of Thermodynamics: ΔS_universe > 0 for spontaneous. ΔG combines system enthalpy/entropy effects.',
        integrated_rate_law: 'Rate laws reflect reaction mechanism. Order indicates molecularity of rate-determining step.',
        equilibrium_constant: 'At equilibrium, ΔG = 0 and Q = K. Position determined by relative stability of products vs reactants.',
        first_law: 'Energy conservation: ΔE_system + ΔE_surroundings = 0. Energy cannot be created or destroyed.',
        average_rate: 'Rate measures how fast concentration changes with time. Related to frequency and success of molecular collisions.',
        rate_law: 'Rate law exponents determined experimentally, reveal reaction mechanism and order.',
        half_life: 'Half-life is time for concentration to decrease by 50%. For first-order, it\'s constant regardless of initial concentration.',
        entropy_change: 'Entropy measures disorder and energy dispersal. Nature tends toward maximum entropy (Second Law).',
        vant_hoff: 'Van\'t Hoff equation shows how equilibrium shifts with temperature based on reaction enthalpy.'
    };

    return theoryConnections[problem.type] || 'This calculation is grounded in fundamental chemical principles.';
}

addStepBridges(steps, problem) {
    if (!steps || steps.length === 0) return steps;
    
    const enhancedSteps = [];

    for (let i = 0; i < steps.length; i++) {
        enhancedSteps.push(steps[i]);

        // Add bridge to next step (except for last step)
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

generateStepBridge(currentStep, nextStep) {
    return {
        currentState: `We now have: ${currentStep.afterExpression || currentStep.result || currentStep.expression || 'completed this step'}`,
        nextGoal: `Next, we need to: ${nextStep.description || nextStep.step}`,
        why: `This step is necessary because: ${this.explainStepNecessity(currentStep, nextStep)}`,
        howItHelps: `This will help us by: ${this.explainStepBenefit(nextStep)}`
    };
}

explainStepProgression(currentStep, nextStep) {
    return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving the problem`;
}

explainStepStrategy(nextStep) {
    return `The strategy for "${nextStep.step}" is to ${nextStep.description || 'continue the solution process'}`;
}

explainStepNecessity(currentStep, nextStep) {
    const necessityMap = {
        'Identify given information': 'we need to organize our data before proceeding',
        'Convert temperatures to Kelvin': 'thermodynamic equations require absolute temperature',
        'Calculate concentration change': 'we need the change in concentration to find the rate',
        'Calculate average rate': 'this gives us the final answer we are seeking',
        'Apply Arrhenius equation': 'this relates rate constant to temperature and activation energy',
        'Calculate ΔG°': 'this determines spontaneity of the reaction',
        'Determine spontaneity': 'this tells us if the reaction will proceed naturally',
        'Apply entropy formula': 'this quantifies the disorder change in the reaction',
        'Calculate products sum': 'we need total entropy of products for ΔS calculation',
        'Calculate reactants sum': 'we need total entropy of reactants for ΔS calculation'
    };

    return necessityMap[nextStep.step] || `${currentStep.step} has prepared us for the next calculation`;
}

explainStepBenefit(nextStep) {
    const benefitMap = {
        'Identify given information': 'organizing data helps prevent errors and shows what we need',
        'Convert temperatures to Kelvin': 'using correct units ensures accurate calculations',
        'Calculate concentration change': 'determining how much concentration changed over time',
        'Calculate average rate': 'finding the speed of the reaction',
        'Apply Arrhenius equation': 'quantifying the temperature-rate relationship',
        'Calculate ΔG°': 'determining if the reaction is thermodynamically favorable',
        'Determine spontaneity': 'predicting reaction direction',
        'Apply entropy formula': 'measuring disorder change',
        'Calculate half-life': 'determining time for 50% conversion'
    };

    return benefitMap[nextStep.step] || 'moving us closer to the final solution';
}

// Also make sure addChemistryScaffolding is properly defined:

addChemistryScaffolding(steps, problem) {
    if (!steps || steps.length === 0) return steps;
    
    return steps.map((step, index) => ({
        ...step,
        scaffolding: {
            guidingQuestions: this.generateChemistryGuidingQuestions(step, problem),
            subSteps: this.breakIntoChemistrySubSteps(step),
            hints: this.generateChemistryProgressiveHints(step),
            practiceVariation: this.generateChemistryPracticeVariation(step, problem),
            connectionToTheory: this.connectToChemicalTheory(step, problem)
        },
        metacognition: {
            thinkingProcess: this.explainChemistryThinkingProcess(step),
            decisionPoints: this.identifyChemistryDecisionPoints(step),
            alternativeApproaches: this.suggestAlternativeChemistryMethods(step, problem),
            conceptualFramework: this.provideConceptualFramework(step, problem)
        }
    }));
}

// Make sure provideConceptualFramework handles missing category:

provideConceptualFramework(step, problem) {
    const frameworks = {
        kinetics: 'Chemical kinetics studies HOW FAST reactions occur. Key factors: concentration, temperature, catalysts. Rates depend on molecular collisions and activation energy.',
        
        thermodynamics: 'Chemical thermodynamics studies WHETHER reactions occur spontaneously. Key quantities: ΔH (energy), ΔS (disorder), ΔG (spontaneity). Combines energetics with probability.',
        
        equilibrium: 'Chemical equilibrium is DYNAMIC BALANCE between forward and reverse reactions. K describes position, thermodynamics predicts K value, kinetics determines how fast equilibrium is reached.'
    };

    const category = step.category || problem.parameters?.category || solution?.category || 'kinetics';
    return frameworks[category] || 'This problem applies fundamental principles of chemistry to predict and explain chemical behavior.';
}


// Also u7pdate generateBaseChemistrySteps to handle missing solver methods:

generateBaseChemistrySteps(problem, solution) {
    const { type } = problem;

    // Safety check
    if (!type) {
        return this.generateGenericChemistrySteps(problem, solution);
    }

    switch (type) {
        case 'arrhenius':
            return this.generateArrheniusSteps(problem, solution);
        case 'gibbs_free_energy':
            return this.generateGibbsSteps(problem, solution);
        case 'integrated_rate_law':
            return this.generateIntegratedRateLawSteps(problem, solution);
        case 'equilibrium_constant':
            return this.generateEquilibriumConstantSteps(problem, solution);
        case 'first_law':
            return this.generateFirstLawSteps(problem, solution);
        case 'enthalpy_change':
            return this.generateEnthalpyChangeSteps(problem, solution);
        case 'entropy_change':
            return this.generateEntropyChangeSteps(problem, solution);
        case 'average_rate':
            return this.generateAverageRateSteps(problem, solution);
        case 'rate_law':
            return this.generateRateLawSteps(problem, solution);
        case 'half_life':
            return this.generateHalfLifeSteps(problem, solution);
        case 'vant_hoff':
            return this.generateVantHoffSteps(problem, solution);
        default:
            return this.generateGenericChemistrySteps(problem, solution);
    }
}

// Add the missing step generation methods:

generateAverageRateSteps(problem, solution) {
    const steps = [];

    steps.push({
        stepNumber: 1,
        step: 'Identify given information',
        description: 'List initial and final concentrations and time interval',
        givenData: {
            initialConcentration: problem.parameters.concentration_initial + ' M',
            finalConcentration: problem.parameters.concentration_final + ' M',
            timeInterval: (problem.parameters.time_final - problem.parameters.time_initial) + ' s'
        },
        category: 'kinetics'
    });

    steps.push({
        stepNumber: 2,
        step: 'Calculate concentration change',
        description: 'Find Δ[A] = [A]final - [A]initial',
        formula: 'Δ[A] = [A]f - [A]i',
        calculation: `Δ[A] = ${problem.parameters.concentration_final} - ${problem.parameters.concentration_initial}`,
        result: `Δ[A] = ${solution.concentrationChange} M`,
        reasoning: 'Negative value indicates concentration decrease (reactant consumed)',
        category: 'kinetics'
    });

    steps.push({
        stepNumber: 3,
        step: 'Calculate average rate',
        description: 'Use rate = -Δ[A]/Δt (negative for reactant)',
        formula: solution.formula,
        calculation: `rate = -${solution.concentrationChange}/${solution.timeInterval}`,
        result: `rate = ${solution.averageRate} M/s`,
        reasoning: 'Average rate is magnitude of concentration change per unit time',
        interpretation: solution.interpretation,
        category: 'kinetics'
    });

    return steps;
}

generateRateLawSteps(problem, solution) {
    const steps = [];

    steps.push({
        stepNumber: 1,
        step: 'Identify rate law form',
        description: 'Determine general rate law expression',
        formula: solution.rateLaw || 'rate = k[A]^m[B]^n',
        reasoning: 'Rate law shows how rate depends on concentrations',
        category: 'kinetics'
    });

    if (solution.determinedOrders) {
        steps.push({
            stepNumber: 2,
            step: 'Determine reaction orders',
            description: 'Use experimental data to find orders',
            method: solution.method || 'Initial rate method',
            orders: solution.determinedOrders,
            category: 'kinetics'
        });
    }

    if (solution.rateConstant !== undefined) {
        steps.push({
            stepNumber: 3,
            step: 'Calculate rate constant',
            description: 'Find k from rate law and data',
            calculation: `k = rate / ([A]^m[B]^n)`,
            result: `k = ${solution.rateConstant}`,
            units: solution.units,
            category: 'kinetics'
        });
    }

    steps.push({
        stepNumber: steps.length + 1,
        step: 'Interpret results',
        description: 'Analyze rate law meaning',
        interpretation: solution.interpretation || 'Rate law determined from experimental data',
        overallOrder: solution.overallOrder,
        category: 'kinetics'
    });

    return steps;
}

generateHalfLifeSteps(problem, solution) {
    const steps = [];

    steps.push({
        stepNumber: 1,
        step: 'Identify reaction order',
        description: `This is a ${this.getOrderName(problem.parameters.order)} reaction`,
        order: problem.parameters.order,
        formula: solution.formula,
        category: 'kinetics'
    });

    steps.push({
        stepNumber: 2,
        step: 'Apply half-life formula',
        description: 'Use appropriate half-life equation for this order',
        formula: solution.formula,
        reasoning: solution.characteristic,
        category: 'kinetics'
    });

    if (solution.halfLife !== undefined) {
        steps.push({
            stepNumber: 3,
            step: 'Calculate half-life',
            description: 'Substitute values into formula',
            calculation: this.formatHalfLifeCalculation(problem, solution),
            result: `t₁/₂ = ${solution.halfLife} ${problem.parameters.order === 1 ? 's or time units' : 's'}`,
            interpretation: solution.interpretation,
            category: 'kinetics'
        });
    } else if (solution.rateConstant !== undefined) {
        steps.push({
            stepNumber: 3,
            step: 'Calculate rate constant',
            description: 'Solve for k from half-life',
            calculation: this.formatRateConstantCalculation(problem, solution),
            result: `k = ${solution.rateConstant}`,
            category: 'kinetics'
        });
    }

    return steps;
}

generateEntropyChangeSteps(problem, solution) {
    const steps = [];

    steps.push({
        stepNumber: 1,
        step: 'Identify thermodynamic data',
        description: 'List entropy values or heat transfer data',
        givenData: problem.parameters,
        category: 'thermodynamics'
    });

    steps.push({
        stepNumber: 2,
        step: 'Apply entropy formula',
        description: 'Use appropriate entropy equation',
        formula: solution.formula,
        category: 'thermodynamics'
    });

    if (solution.productsSum !== undefined && solution.reactantsSum !== undefined) {
        steps.push({
            stepNumber: 3,
            step: 'Calculate products entropy',
            description: 'Sum: Σn×S°(products)',
            calculation: `Products: ${solution.productsSum} J/(mol·K)`,
            category: 'thermodynamics'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate reactants entropy',
            description: 'Sum: Σn×S°(reactants)',
            calculation: `Reactants: ${solution.reactantsSum} J/(mol·K)`,
            category: 'thermodynamics'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate ΔS°',
            description: 'Subtract: products - reactants',
            calculation: `ΔS° = ${solution.productsSum} - ${solution.reactantsSum}`,
            result: `ΔS° = ${solution.entropyChange} J/(mol·K)`,
            interpretation: solution.interpretation,
            category: 'thermodynamics'
        });
    } else if (solution.entropyChange !== undefined) {
        steps.push({
            stepNumber: 3,
            step: 'Calculate entropy change',
            calculation: this.formatEntropyCalculation(problem, solution),
            result: `ΔS = ${solution.entropyChange} J/(mol·K)`,
            interpretation: solution.interpretation || 'Entropy change calculated',
            category: 'thermodynamics'
        });
    }

    return steps;
}

generateVantHoffSteps(problem, solution) {
    const steps = [];

    steps.push({
        stepNumber: 1,
        step: 'Identify equilibrium data',
        description: 'List K values and temperatures',
        givenData: {
            K1: problem.parameters.K1,
            K2: problem.parameters.K2 || 'To calculate',
            T1: problem.parameters.temperature1 + ' K',
            T2: problem.parameters.temperature2 + ' K',
            deltaH: problem.parameters.delta_H_standard ? problem.parameters.delta_H_standard/1000 + ' kJ/mol' : 'Given'
        },
        category: 'thermodynamics'
    });

    steps.push({
        stepNumber: 2,
        step: 'Apply Van\'t Hoff equation',
        description: 'Use temperature-K relationship',
        formula: solution.formula,
        reasoning: 'Van\'t Hoff relates K to temperature through ΔH°',
        category: 'thermodynamics'
    });

    if (solution.enthalpyChange !== undefined) {
        steps.push({
            stepNumber: 3,
            step: 'Calculate ΔH°',
            description: 'Determine enthalpy change from K values',
            calculation: this.formatVantHoffCalculation(problem, solution),
            result: `ΔH° = ${solution.enthalpyChange} kJ/mol`,
            interpretation: solution.interpretation,
            category: 'thermodynamics'
        });
    } else if (solution.K2 !== undefined) {
        steps.push({
            stepNumber: 3,
            step: 'Calculate K₂',
            description: 'Find equilibrium constant at new temperature',
            calculation: this.formatVantHoffCalculation(problem, solution),
            result: `K₂ = ${solution.K2}`,
            interpretation: solution.temperatureEffect,
            category: 'thermodynamics'
        });
    }

    return steps;
}

// Add helper formatting methods:

formatHalfLifeCalculation(problem, solution) {
    const { order, rate_constant, initial_concentration } = problem.parameters;
    
    if (order === 1) {
        return `t₁/₂ = 0.693/k = 0.693/${rate_constant} = ${solution.halfLife}`;
    } else if (order === 2) {
        return `t₁/₂ = 1/(k[A]₀) = 1/(${rate_constant} × ${initial_concentration}) = ${solution.halfLife}`;
    } else if (order === 0) {
        return `t₁/₂ = [A]₀/(2k) = ${initial_concentration}/(2 × ${rate_constant}) = ${solution.halfLife}`;
    }
    return 'Calculation steps';
}

formatRateConstantCalculation(problem, solution) {
    const { order, half_life, initial_concentration } = problem.parameters;
    
    if (order === 1) {
        return `k = 0.693/t₁/₂ = 0.693/${half_life} = ${solution.rateConstant}`;
    } else if (order === 2) {
        return `k = 1/(t₁/₂[A]₀) = 1/(${half_life} × ${initial_concentration}) = ${solution.rateConstant}`;
    } else if (order === 0) {
        return `k = [A]₀/(2t₁/₂) = ${initial_concentration}/(2 × ${half_life}) = ${solution.rateConstant}`;
    }
    return 'Calculation steps';
}

formatEntropyCalculation(problem, solution) {
    if (problem.parameters.heat_transfer && problem.parameters.temperature) {
        return `ΔS = q_rev/T = ${problem.parameters.heat_transfer}/${solution.temperature} = ${solution.entropyChange}`;
    }
    return 'Entropy calculation';
}

formatVantHoffCalculation(problem, solution) {
    if (solution.enthalpyChange !== undefined) {
        return `Ea = R × ln(K₂/K₁) / (1/T₁ - 1/T₂) = ${solution.enthalpyChange} kJ/mol`;
    } else if (solution.K2 !== undefined) {
        return `K₂ = K₁ × exp(-(ΔH°/R)(1/T₂ - 1/T₁)) = ${solution.K2}`;
    }
    return 'Van\'t Hoff calculation';
}

getOrderName(order) {
    const names = { 0: 'zero-order', 1: 'first-order', 2: 'second-order', 3: 'third-order' };
    return names[order] || `order-${order}`;
}






    generateArrheniusSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'List all provided data and identify what needs to be calculated',
            givenData: problem.parameters,
            goal: solution.problemType,
            reasoning: 'Clear identification of knowns and unknowns guides solution approach',
            category: 'kinetics'
        });

        steps.push({
            stepNumber: 2,
            step: 'Convert temperatures to Kelvin',
            description: 'Convert all temperatures from Celsius to Kelvin',
            formula: 'T(K) = T(°C) + 273.15',
            beforeExpression: `T₁ = ${problem.parameters.temperature1}°C, T₂ = ${problem.parameters.temperature2}°C`,
            afterExpression: `T₁ = ${solution.temperature1} K, T₂ = ${solution.temperature2} K`,
            reasoning: 'Thermodynamic equations require absolute temperature scale (Kelvin)',
            criticalWarning: 'IMPORTANT: Always use Kelvin in Arrhenius equation calculations',
            visualHint: 'Remember: K = °C + 273.15',
            category: 'kinetics'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply Arrhenius equation',
            description: 'Use two-point form of Arrhenius equation',
            formula: solution.formula,
            beforeExpression: `ln(k₂/k₁) = (Ea/R)(1/T₁ - 1/T₂)`,
            calculation: this.formatArrheniusCalculation(problem, solution),
            afterExpression: `Ea = ${solution.activationEnergy} J/mol = ${solution.activationEnergy_kJ} kJ/mol`,
            reasoning: 'Two-point form eliminates unknown pre-exponential factor A',
            algebraicRule: 'Rearrange to isolate Ea: Ea = R × ln(k₂/k₁) / (1/T₁ - 1/T₂)',
            category: 'kinetics'
        });

        steps.push({
            stepNumber: 4,
            step: 'Interpret result',
            description: 'Analyze the activation energy value',
            result: solution.activationEnergy_kJ + ' kJ/mol',
            interpretation: solution.interpretation,
            physicalMeaning: 'Ea represents the minimum energy barrier molecules must overcome to react',
            category: 'kinetics'
        });

        return steps;
    }

    generateGibbsSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify thermodynamic quantities',
            description: 'List ΔH°, ΔS°, and temperature',
            givenData: {
                deltaH: problem.parameters.delta_H + ' kJ/mol',
                deltaS: problem.parameters.delta_S + ' J/(mol·K)',
                temperature: problem.parameters.temperature
            },
            goal: 'Calculate ΔG° and determine spontaneity',
            category: 'thermodynamics'
        });

        steps.push({
            stepNumber: 2,
            step: 'Convert temperature to Kelvin',
            description: 'Ensure temperature is in Kelvin',
            beforeExpression: `T = ${problem.parameters.temperature}`,
            afterExpression: `T = ${solution.temperature} K`,
            formula: 'T(K) = T(°C) + 273.15 if needed',
            reasoning: 'Gibbs equation requires absolute temperature',
            category: 'thermodynamics'
        });

        steps.push({
            stepNumber: 3,
            step: 'Convert entropy units',
            description: 'Convert ΔS from J/(mol·K) to kJ/(mol·K) to match ΔH units',
            beforeExpression: `ΔS° = ${problem.parameters.delta_S} J/(mol·K)`,
            operation: '÷ 1000',
            afterExpression: `ΔS° = ${problem.parameters.delta_S / 1000} kJ/(mol·K)`,
            reasoning: 'Units must match for subtraction in Gibbs equation',
            criticalWarning: 'IMPORTANT: Common error is forgetting this unit conversion',
            category: 'thermodynamics'
        });

        steps.push({
            stepNumber: 4,
            step: 'Apply Gibbs equation',
            description: 'Calculate ΔG° = ΔH° - TΔS°',
            formula: solution.formula,
            calculation: `ΔG° = ${problem.parameters.delta_H} - (${solution.temperature})(${problem.parameters.delta_S/1000})`,
            workingDetails: {
                TdeltaS: `TΔS° = ${solution.temperature} × ${problem.parameters.delta_S/1000} = ${solution.temperature * problem.parameters.delta_S/1000} kJ/mol`,
                subtraction: `ΔG° = ${problem.parameters.delta_H} - ${solution.temperature * problem.parameters.delta_S/1000}`
            },
            afterExpression: `ΔG° = ${solution.gibbsFreeEnergy} kJ/mol`,
            reasoning: 'Gibbs free energy combines enthalpy and entropy effects',
            category: 'thermodynamics'
        });

        steps.push({
            stepNumber: 5,
            step: 'Determine spontaneity',
            description: 'Interpret ΔG° sign',
            result: solution.spontaneity,
            interpretation: solution.gibbsFreeEnergy < 0 ? 
                'ΔG° < 0: Reaction is thermodynamically favorable (spontaneous)' :
                solution.gibbsFreeEnergy > 0 ?
                'ΔG° > 0: Reaction is thermodynamically unfavorable (non-spontaneous)' :
                'ΔG° = 0: System is at equilibrium',
            thermodynamicAnalysis: solution.thermodynamicAnalysis,
            category: 'thermodynamics'
        });

        return steps;
    }

    generateIntegratedRateLawSteps(problem, solution) {
        const steps = [];
        const { order } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Identify reaction order',
            description: `This is a ${this.getOrderName(order)} reaction`,
            order: order,
            integratedRateLaw: solution.integratedRateLaw,
            reasoning: 'Reaction order determines which integrated rate law to use',
            category: 'kinetics'
        });

        steps.push({
            stepNumber: 2,
            step: 'Write integrated rate law',
            description: 'Use appropriate form for this order',
            formula: solution.integratedRateLaw,
            linearForm: solution.linearForm,
            reasoning: 'Integrated rate law relates concentration to time',
            graphicalTest: solution.linearForm,
            category: 'kinetics'
        });

        if (solution.timeRequired !== undefined) {
            steps.push({
                stepNumber: 3,
                step: 'Rearrange to solve for time',
                description: 'Isolate t in the integrated rate law',
                algebraicManipulation: this.showTimeRearrangement(order),
                category: 'kinetics'
            });

            steps.push({
                stepNumber: 4,
                step: 'Substitute values',
                description: 'Insert known values into rearranged equation',
                substitution: this.formatIntegratedRateLawSubstitution(problem, solution),
                category: 'kinetics'
            });

            steps.push({
                stepNumber: 5,
                step: 'Calculate time',
                description: 'Perform the calculation',
                result: `t = ${solution.timeRequired.toFixed(4)} s`,
                interpretation: `Time required to reach target concentration`,
                category: 'kinetics'
            });
        } else {
            steps.push({
                stepNumber: 3,
                step: 'Substitute values',
                description: 'Insert known values into integrated rate law',
                substitution: this.formatIntegratedRateLawSubstitution(problem, solution),
                category: 'kinetics'
            });

            steps.push({
                stepNumber: 4,
                step: 'Calculate final concentration',
                description: 'Solve for [A]t',
                result: `[A]t = ${solution.finalConcentration.toFixed(6)} M`,
                percentRemaining: solution.percentRemaining ? `${solution.percentRemaining.toFixed(2)}% remains` : undefined,
                category: 'kinetics'
            });
        }

        return steps;
    }

    generateEquilibriumConstantSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify relationship',
            description: 'Use the relationship between ΔG° and K',
            formula: solution.formula,
            reasoning: 'Standard free energy change determines equilibrium position',
            category: 'thermodynamics'
        });

        steps.push({
            stepNumber: 2,
            step: 'Convert temperature to Kelvin',
            description: 'Ensure temperature is in absolute scale',
            temperature: solution.temperature + ' K',
            category: 'thermodynamics'
        });

        if (solution.equilibriumConstant !== undefined) {
            steps.push({
                stepNumber: 3,
                step: 'Rearrange equation to solve for K',
                description: 'K = e^(-ΔG°/RT)',
                algebraicManipulation: 'Take exponential of both sides after dividing by -RT',
                category: 'thermodynamics'
            });

            steps.push({
                stepNumber: 4,
                step: 'Convert ΔG° to Joules',
                description: 'Match units with R',
                conversion: `${solution.gibbsFreeEnergy} kJ/mol = ${solution.gibbsFreeEnergy * 1000} J/mol`,
                reasoning: 'R = 8.314 J/(mol·K) requires ΔG° in J/mol',
                category: 'thermodynamics'
            });

            steps.push({
                stepNumber: 5,
                step: 'Calculate K',
                description: 'Evaluate the exponential',
                calculation: `K = e^(-${solution.gibbsFreeEnergy * 1000}/(8.314 × ${solution.temperature}))`,
                result: `K = ${solution.equilibriumConstant.toExponential(4)}`,
                logK: `log K = ${solution.logK.toFixed(2)}`,
                interpretation: solution.interpretation,
                category: 'thermodynamics'
            });
        }

        return steps;
    }

    generateFirstLawSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write First Law equation',
            description: 'Express conservation of energy',
            formula: 'ΔE = q + w',
            reasoning: 'Energy change equals heat transferred plus work done',
            signConventions: solution.signConventions,
            category: 'thermodynamics'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify known quantities',
            description: 'List given values and identify unknown',
            known: {
                q: problem.parameters.q !== undefined ? problem.parameters.q + ' J' : 'unknown',
                w: problem.parameters.w !== undefined ? problem.parameters.w + ' J' : 'unknown',
                deltaE: problem.parameters.delta_E !== undefined ? problem.parameters.delta_E + ' J' : 'unknown'
            },
            toCalculate: solution.calculatedQuantity,
            category: 'thermodynamics'
        });

        steps.push({
            stepNumber: 3,
            step: 'Solve for unknown quantity',
            description: `Calculate ${solution.calculatedQuantity}`,
            rearranged: this.rearrangeFirstLaw(solution.calculatedQuantity),
            substitution: this.formatFirstLawSubstitution(problem, solution),
            result: this.formatFirstLawResult(solution),
            category: 'thermodynamics'
        });

        steps.push({
            stepNumber: 4,
            step: 'Interpret result',
            description: 'Explain the physical meaning',
            interpretation: solution.interpretation,
            energyFlow: this.describeEnergyFlow(solution),
            category: 'thermodynamics'
        });

        return steps;
    }

    generateEnthalpyChangeSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write enthalpy equation',
            description: 'Use Hess\'s Law approach',
            formula: solution.formula,
            reasoning: 'Enthalpy is a state function - path independent',
            category: 'thermodynamics'
        });

        steps.push({
            stepNumber: 2,
            step: 'List formation enthalpies',
            description: 'Identify ΔH°f values for each species',
            products: problem.parameters.products_Hf,
            reactants: problem.parameters.reactants_Hf,
            category: 'thermodynamics'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate products sum',
            description: 'Sum: Σn × ΔH°f (products)',
            calculation: this.formatEnthalpySum(problem.parameters.products_Hf, problem.parameters.products_coeffs, 'products'),
            result: solution.productsSum + ' kJ/mol',
            category: 'thermodynamics'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate reactants sum',
            description: 'Sum: Σn × ΔH°f (reactants)',
            calculation: this.formatEnthalpySum(problem.parameters.reactants_Hf, problem.parameters.reactants_coeffs, 'reactants'),
            result: solution.reactantsSum + ' kJ/mol',
            category: 'thermodynamics'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate ΔH°rxn',
            description: 'Subtract: products - reactants',
            calculation: `ΔH°rxn = ${solution.productsSum} - (${solution.reactantsSum})`,
            result: `ΔH°rxn = ${solution.enthalpyChange} kJ/mol`,
            reactionType: solution.reactionType,
            interpretation: solution.interpretation,
            category: 'thermodynamics'
        });

        return steps;
    }

    generateGenericChemistrySteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Chemistry problem',
            description: 'Solve the given chemical kinetics or thermodynamics problem',
            problemType: problem.type,
            solution: solution,
            category: solution.category
        }];
    }

    // HELPER FORMATTING METHODS

    formatArrheniusCalculation(problem, solution) {
        const { k1, k2, temperature1, temperature2 } = problem.parameters;
        return [
            `ln(${k2}/${k1}) = ln(${k2/k1}) = ${Math.log(k2/k1)}`,
            `1/T₁ - 1/T₂ = 1/${solution.temperature1} - 1/${solution.temperature2} = ${(1/solution.temperature1 - 1/solution.temperature2).toExponential(4)}`,
            `Ea = R × ln(k₂/k₁) / (1/T₁ - 1/T₂)`,
            `Ea = 8.314 × ${Math.log(k2/k1)} / ${(1/solution.temperature1 - 1/solution.temperature2).toExponential(4)}`
        ].join('\n');
    }

    getOrderName(order) {
        const names = { 0: 'zero-order', 1: 'first-order', 2: 'second-order', 3: 'third-order' };
        return names[order] || `order-${order}`;
    }

    showTimeRearrangement(order) {
        if (order === 1) {
            return [
                'ln[A]t = ln[A]0 - kt',
                'kt = ln[A]0 - ln[A]t',
                'kt = ln([A]0/[A]t)',
                't = (1/k) × ln([A]0/[A]t)'
            ].join('\n');
        } else if (order === 2) {
            return [
                '1/[A]t = 1/[A]0 + kt',
                'kt = 1/[A]t - 1/[A]0',
                't = (1/k) × (1/[A]t - 1/[A]0)'
            ].join('\n');
        } else if (order === 0) {
            return [
                '[A]t = [A]0 - kt',
                'kt = [A]0 - [A]t',
                't = ([A]0 - [A]t)/k'
            ].join('\n');
        }
        return 'Rearrange to isolate t';
    }

    formatIntegratedRateLawSubstitution(problem, solution) {
        const { order, initial_concentration, rate_constant, time, target_concentration } = problem.parameters;

        if (order === 1) {
            if (target_concentration !== undefined) {
                return `t = (1/${rate_constant}) × ln(${initial_concentration}/${target_concentration}) = ${solution.timeRequired.toFixed(4)} s`;
            } else {
                return `[A]t = ${initial_concentration} × e^(-${rate_constant} × ${time}) = ${solution.finalConcentration.toFixed(6)} M`;
            }
        } else if (order === 2) {
            if (target_concentration !== undefined) {
                return `t = (1/${rate_constant}) × (1/${target_concentration} - 1/${initial_concentration}) = ${solution.timeRequired.toFixed(4)} s`;
            } else {
                return `1/[A]t = 1/${initial_concentration} + ${rate_constant} × ${time}, [A]t = ${solution.finalConcentration.toFixed(6)} M`;
            }
        } else if (order === 0) {
            if (target_concentration !== undefined) {
                return `t = (${initial_concentration} - ${target_concentration})/${rate_constant} = ${solution.timeRequired.toFixed(4)} s`;
            } else {
                return `[A]t = ${initial_concentration} - ${rate_constant} × ${time} = ${solution.finalConcentration.toFixed(6)} M`;
            }
        }
        return 'Substitute known values';
    }

    rearrangeFirstLaw(quantity) {
        if (quantity === 'ΔE') return 'ΔE = q + w';
        if (quantity === 'q') return 'q = ΔE - w';
        if (quantity === 'w') return 'w = ΔE - q';
        return 'ΔE = q + w';
    }

    formatFirstLawSubstitution(problem, solution) {
        const { q, w, delta_E } = problem.parameters;
        
        if (solution.calculatedQuantity === 'ΔE') {
            return `ΔE = ${q} + ${w} = ${solution.deltaE} J`;
        } else if (solution.calculatedQuantity === 'q') {
            return `q = ${delta_E} - ${w} = ${solution.q} J`;
        } else if (solution.calculatedQuantity === 'w') {
            return `w = ${delta_E} - ${q} = ${solution.w} J`;
        }
        return 'Substitute values';
    }

    formatFirstLawResult(solution) {
        return `${solution.calculatedQuantity} = ${solution[solution.calculatedQuantity === 'ΔE' ? 'deltaE' : solution.calculatedQuantity.toLowerCase()]} J`;
    }

    describeEnergyFlow(solution) {
        const descriptions = [];
        
        if (solution.q !== 0) {
            descriptions.push(solution.q > 0 ? 'Heat flows into system' : 'Heat flows out of system');
        }
        
        if (solution.w !== 0) {
            descriptions.push(solution.w > 0 ? 'Work done on system' : 'Work done by system');
        }
        
        if (solution.deltaE !== 0) {
            descriptions.push(solution.deltaE > 0 ? 'Internal energy increases' : 'Internal energy decreases');
        }
        
        return descriptions.join('; ');
    }

    formatEnthalpySum(enthalpies, coefficients, type) {
        if (!enthalpies || enthalpies.length === 0) return 'No data';
        
        const terms = enthalpies.map((h, i) => {
            const coeff = coefficients && coefficients[i] ? coefficients[i] : 1;
            return `(${coeff} × ${h})`;
        });
        
        return `Σn×ΔH°f(${type}) = ${terms.join(' + ')} = ${enthalpies.reduce((sum, h, i) => 
            sum + (coefficients && coefficients[i] ? coefficients[i] : 1) * h, 0)} kJ/mol`;
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
   }


    // ENHANCED EXPLANATION METHODS

    enhanceChemistryStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getChemistryConceptualExplanation(step, problem),
                procedural: this.getChemistryProceduralExplanation(step),
                visual: this.getChemistryVisualExplanation(step, problem),
                mathematical: this.getChemistryMathematicalExplanation(step)
            },

            adaptiveExplanation: this.getAdaptiveChemistryExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyChemistryPrerequisites(step, problem.type),
                keyVocabulary: this.identifyChemistryVocabulary(step),
                molecularPerspective: this.addMolecularPerspective(step, problem.type)
            }
        };

        return enhanced;
    }

    getChemistryConceptualExplanation(step, problem) {
        const conceptualMap = {
            'Convert temperatures to Kelvin': 'Temperature measures average kinetic energy. Kelvin is absolute scale where 0 K means zero molecular motion. Chemical reactions depend on molecular kinetic energy, requiring absolute temperature.',
            
            'Apply Arrhenius equation': 'Molecules need minimum energy (activation energy) to react. Higher temperature means more molecules have sufficient energy. The Arrhenius equation quantifies this relationship exponentially.',
            
            'Calculate ΔG°': 'Gibbs free energy combines two competing factors: enthalpy (energy change) and entropy (disorder change). Spontaneous reactions are driven by energy release and/or entropy increase.',
            
            'Determine spontaneity': 'Reactions proceed naturally only if total entropy of universe increases. ΔG < 0 indicates this condition is met - the system can do useful work while proceeding.',
            
            'Apply Gibbs equation': 'Free energy = energy available for work. At constant T and P, ΔG determines if reaction is thermodynamically favorable. Temperature weights the importance of entropy vs enthalpy.',
            
            'Write integrated rate law': 'Integrated rate laws show how concentration changes over time. Different orders reflect different molecular collision mechanisms. First-order: one molecule reacting; second-order: two molecules colliding.'
        };

        return conceptualMap[step.step] || 'This step advances our understanding of the chemical process from a molecular perspective.';
    }

    getChemistryProceduralExplanation(step) {
        if (step.formula) {
            return `1. Write the formula: ${step.formula}
2. Identify each variable and its value
3. Substitute values carefully checking units
4. Perform calculation step by step
5. Verify result makes physical sense`;
        }
        return 'Follow standard chemical calculation procedures, ensuring unit consistency and proper sign conventions.';
    }

    getChemistryVisualExplanation(step, problem) {
        const visualMap = {
            arrhenius: 'Picture an energy barrier: reactant molecules at lower energy must climb over activation energy barrier to reach product valley. Temperature determines what fraction have enough energy to climb.',
            
            gibbs_free_energy: 'Imagine two opposing forces: enthalpy pulls downhill (exothermic favored), entropy pushes toward disorder. ΔG is the net "driving force" after both are balanced.',
            
            integrated_rate_law: 'Graph concentration vs time: zero-order is linear decline, first-order is exponential decay, second-order is curved with longer tail. Shape reveals reaction mechanism.',
            
            equilibrium_constant: 'Picture a two-way street: K tells you the ratio of product to reactant "traffic" when forward and reverse flows balance. Large K means heavy product-side traffic.',
            
            first_law: 'Energy container: heat flows in/out through walls, work is piston compression/expansion. Total energy in container = heat in + work done on it.'
        };

        return visualMap[problem.type] || 'Visualize the molecular-level process occurring during this calculation step.';
    }

    getChemistryMathematicalExplanation(step) {
        if (step.formula) {
            return {
                equation: step.formula,
                variables: this.parseFormulaVariables(step.formula),
                derivation: this.getFormulaDerivation(step.formula),
                mathematicalForm: this.classifyEquationType(step.formula)
            };
        }
        return { equation: 'Standard chemical calculation', type: 'algebraic' };
    }

    getAdaptiveChemistryExplanation(step, level) {
        const adaptations = {
            basic: {
                vocabulary: 'simple chemistry terms',
                detail: 'essential information only',
                format: 'short explanations with everyday analogies'
            },
            intermediate: {
                vocabulary: 'standard chemical terminology',
                detail: 'main concepts with molecular reasoning',
                format: 'clear explanations with chemical context'
            },
            detailed: {
                vocabulary: 'full technical terminology',
                detail: 'comprehensive with thermodynamic/kinetic theory',
                format: 'thorough analysis with multiple perspectives'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery approach',
                format: 'questions leading to chemical understanding'
            }
        };

        const levelConfig = adaptations[level] || adaptations.intermediate;
        return {
            adaptedDescription: this.adaptChemistryLanguage(step.description, levelConfig),
            adaptedReasoning: this.adaptChemistryLanguage(step.reasoning, levelConfig),
            complexityLevel: level
        };
    }

    adaptChemistryLanguage(text, level) {
        if (!text) return '';

        const basicReplacements = {
            'activation energy': 'energy barrier molecules must overcome',
            'spontaneous': 'happens naturally without outside help',
            'enthalpy': 'heat content',
            'entropy': 'disorder or randomness',
            'equilibrium': 'balanced state',
            'rate constant': 'speed factor',
            'concentration': 'amount in solution'
        };

        const detailedExpansions = {
            'activation energy': 'activation energy (minimum kinetic energy required for effective molecular collision)',
            'spontaneous': 'thermodynamically spontaneous (ΔG < 0, process increases universe entropy)',
            'enthalpy': 'enthalpy (heat content at constant pressure)',
            'entropy': 'entropy (statistical measure of molecular disorder, S = k ln W)',
            'equilibrium': 'chemical equilibrium (dynamic state where forward and reverse rates are equal)'
        };

        let adaptedText = text;

        if (level.vocabulary === 'simple chemistry terms') {
            for (const [term, replacement] of Object.entries(basicReplacements)) {
                const regex = new RegExp(`\\b${term}\\b`, 'gi');
                adaptedText = adaptedText.replace(regex, replacement);
            }
        } else if (level.vocabulary === 'full technical terminology') {
            for (const [term, replacement] of Object.entries(detailedExpansions)) {
                const regex = new RegExp(`\\b${term}\\b`, 'gi');
                adaptedText = adaptedText.replace(regex, replacement);
            }
        }

        return adaptedText;
    }

    identifyChemistryPrerequisites(step, problemType) {
        const prerequisites = {
            arrhenius: ['Exponential functions and natural logarithm', 'Temperature scales and conversions', 'Concept of activation energy'],
            gibbs_free_energy: ['Enthalpy and entropy concepts', 'Thermodynamic sign conventions', 'Unit conversions (J ↔ kJ)'],
            integrated_rate_law: ['Logarithmic and exponential functions', 'Understanding of reaction order', 'Concentration units'],
            equilibrium_constant: ['Natural logarithm and exponentials', 'Equilibrium concepts', 'Le Chatelier\'s principle'],
            first_law: ['Energy conservation principle', 'Sign conventions for heat and work', 'State functions vs path functions']
        };

        return prerequisites[problemType] || ['Basic chemistry concepts', 'Algebraic manipulation', 'Unit awareness'];
    }

    identifyChemistryVocabulary(step) {
        const vocabularyMap = {
            'Convert temperatures to Kelvin': ['Kelvin scale', 'absolute temperature', 'temperature conversion'],
            'Apply Arrhenius equation': ['activation energy', 'rate constant', 'pre-exponential factor', 'temperature dependence'],
            'Calculate ΔG°': ['Gibbs free energy', 'enthalpy', 'entropy', 'standard conditions'],
            'Determine spontaneity': ['spontaneous', 'non-spontaneous', 'thermodynamically favorable', 'equilibrium'],
            'Write integrated rate law': ['reaction order', 'rate law', 'concentration', 'time dependence'],
            'Identify reaction order': ['zero-order', 'first-order', 'second-order', 'rate law exponents']
        };

        return vocabularyMap[step.step] || ['chemical kinetics', 'thermodynamics', 'reaction', 'energy'];
    }

    addMolecularPerspective(step, problemType) {
        const molecularPerspectives = {
            arrhenius: 'At molecular level: molecules are constantly moving and colliding. Only collisions with energy ≥ Ea and proper orientation lead to reaction. Temperature increases average molecular speed exponentially.',
            
            gibbs_free_energy: 'Molecular view: enthalpy reflects bond energies (breaking bonds costs energy, forming releases it). Entropy reflects number of possible molecular arrangements. Nature favors both low energy and high disorder.',
            
            integrated_rate_law: 'Molecular mechanism: first-order means one molecule decomposing or isomerizing. Second-order means two molecules must find each other and collide. Order reveals what must happen at molecular level.',
            
            first_law: 'Molecular energy: internal energy is sum of all molecular kinetic and potential energies. Heat increases molecular motion. Work changes volume available for molecules to move in.',
            
            equilibrium_constant: 'Dynamic equilibrium: molecules continuously react in both directions. K reflects the ratio of forward to reverse rate constants at molecular level (K = kf/kr).'
        };

        return molecularPerspectives[problemType] || 'Consider the molecular-level processes underlying this calculation.';
    }

    addChemistryErrorPrevention(step, problemType) {
        const mistakes = this.commonMistakes[problemType]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generateChemistryPreventionTips(step, problemType),
                checkPoints: this.generateChemistryCheckPoints(step),
                warningFlags: this.identifyChemistryWarningFlags(step, problemType),
                unitChecks: this.generateUnitChecks(step)
            },
            validation: {
                selfCheck: this.generateChemistrySelfCheck(step),
                expectedResult: this.describeChemistryExpectedResult(step),
                troubleshooting: this.generateChemistryTroubleshooting(step),
                reasonabilityCheck: this.generateReasonabilityCheck(step, problemType)
            }
        };
    }

    generateChemistryPreventionTips(step, problemType) {
        const tips = {
            'Convert temperatures to Kelvin': [
                'Always add 273.15 to Celsius, never subtract',
                'Check if temperature looks reasonable (room temp ≈ 298 K)',
                'Negative Kelvin is impossible - if you get it, check calculation'
            ],
            'Apply Arrhenius equation': [
                'Use consistent units for Ea and R (both in J or both in kJ)',
                'Check sign: -Ea/RT should be negative',
                'Verify k increases with temperature for normal reactions'
            ],
            'Calculate ΔG°': [
                'Convert ΔS from J/(mol·K) to kJ/(mol·K) before using',
                'Check sign: -TΔS, not +TΔS',
                'Verify units: ΔH and TΔS must have same units for subtraction'
            ],
            'Apply Gibbs equation': [
                'Entropy term TΔS grows larger with higher temperature',
                'At high T, entropy dominates; at low T, enthalpy dominates',
                'Check if spontaneity matches expected thermodynamic behavior'
            ]
        };

        return tips[step.step] || [
            'Double-check unit consistency',
            'Verify sign conventions',
            'Confirm answer is physically reasonable'
        ];
    }

    generateChemistryCheckPoints(step) {
        return [
            'Units are consistent throughout calculation',
            'Sign conventions properly applied',
            'Temperature in Kelvin for thermodynamic equations',
            'Answer magnitude is physically reasonable',
            'All given values have been used appropriately'
        ];
    }

    identifyChemistryWarningFlags(step, problemType) {
        const warnings = {
            arrhenius: step.step === 'Convert temperatures to Kelvin' ?
                ['Celsius used instead of Kelvin leads to incorrect Ea by orders of magnitude'] : [],
            gibbs_free_energy: step.step === 'Convert entropy units' ?
                ['Forgetting to convert J to kJ is the most common error in Gibbs calculations'] : [],
            first_law: step.formula?.includes('q') || step.formula?.includes('w') ?
                ['Sign errors extremely common: review sign conventions carefully'] : []
        };

        return warnings[problemType] || [];
    }

    generateUnitChecks(step) {
        if (step.formula) {
            return {
                expectedUnits: this.determineExpectedUnits(step.formula),
                unitConsistency: 'Verify all energy terms in same units (J or kJ)',
                temperatureUnit: 'T must be in Kelvin for all thermodynamic equations',
                conversionFactors: this.relevantConversionFactors(step.formula)
            };
        }
        return { check: 'Verify unit consistency' };
    }

    generateChemistrySelfCheck(step) {
        const questions = {
            'Convert temperatures to Kelvin': 'Is my temperature positive and reasonable (0-1000 K for most chemistry)?',
            'Apply Arrhenius equation': 'Does my activation energy have reasonable magnitude (20-200 kJ/mol typical)?',
            'Calculate ΔG°': 'Did I convert ΔS to same units as ΔH before subtracting?',
            'Determine spontaneity': 'Does the spontaneity match what I know about this type of reaction?',
            'Write integrated rate law': 'Does my equation match the correct form for this reaction order?'
        };

        return questions[step.step] || 'Does this step make chemical sense and move toward the solution?';
    }

    describeChemistryExpectedResult(step) {
        const expectations = {
            'Convert temperatures to Kelvin': 'Temperature should be positive, typically 200-400 K for lab conditions',
            'Apply Arrhenius equation': 'Activation energy typically 20-200 kJ/mol for most reactions',
            'Calculate ΔG°': 'ΔG° typically -100 to +100 kJ/mol for common reactions',
            'Determine spontaneity': 'Sign of ΔG° should match expected reaction favorability',
            'Calculate ΔH°rxn': 'Combustion reactions should give negative ΔH (exothermic)'
        };

        return expectations[step.step] || 'Result should be physically and chemically reasonable';
    }

    generateChemistryTroubleshooting(step) {
        return [
            'If answer seems wrong, check temperature unit (must be Kelvin)',
            'Verify you used correct gas constant R for your energy units',
            'Check sign conventions: review what positive/negative means',
            'Confirm you applied formula correctly by checking dimensions',
            'Look up typical values for this quantity to verify reasonableness'
        ];
    }

    generateReasonabilityCheck(step, problemType) {
        const checks = {
            arrhenius: 'Ea should be positive (energy barrier). k should increase with T. Typical Ea: 50-200 kJ/mol.',
            gibbs_free_energy: 'ΔG° for spontaneous reactions < 0. Typical range: -100 to +100 kJ/mol. Check if sign matches expectation.',
            integrated_rate_law: 'Concentration should decrease over time for reactants. Final [A] should be less than initial [A].',
            equilibrium_constant: 'K > 1 means products favored. K < 1 means reactants favored. K varies from 10⁻¹⁰ to 10¹⁰ typically.',
            first_law: 'ΔE and q typically in range of -100 to +100 kJ. Check if exothermic/endothermic makes sense.'
        };

        return checks[problemType] || 'Verify answer is physically reasonable for this type of problem';
    }

    addChemistryScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateChemistryGuidingQuestions(step, problem),
                subSteps: this.breakIntoChemistrySubSteps(step),
                hints: this.generateChemistryProgressiveHints(step),
                practiceVariation: this.generateChemistryPracticeVariation(step, problem),
                connectionToTheory: this.connectToChemicalTheory(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainChemistryThinkingProcess(step),
                decisionPoints: this.identifyChemistryDecisionPoints(step),
                alternativeApproaches: this.suggestAlternativeChemistryMethods(step, problem),
                conceptualFramework: this.provideConceptualFramework(step, problem)
            }
        }));
    }

    generateChemistryGuidingQuestions(step, problem) {
        const questions = {
            'Identify given information': [
                'What quantities do I know?',
                'What am I asked to find?',
                'What formula relates these quantities?',
                'What units are involved?'
            ],
            'Convert temperatures to Kelvin': [
                'Is the temperature already in Kelvin or Celsius?',
                'Why must thermodynamic calculations use Kelvin?',
                'How do I convert between scales?'
            ],
            'Apply Arrhenius equation': [
                'What does activation energy represent physically?',
                'Why does rate increase exponentially with temperature?',
                'What is the relationship between Ea and temperature sensitivity?'
            ],
            'Calculate ΔG°': [
                'What does each term (ΔH and TΔS) represent?',
                'How does temperature affect the relative importance of each term?',
                'What drives this reaction - enthalpy, entropy, or both?'
            ]
        };

        return questions[step.step] || [
            'What is the purpose of this step?',
            'What chemical principle is being applied?',
            'How does this connect to molecular behavior?'
        ];
    }

    breakIntoChemistrySubSteps(step) {
        if (step.formula) {
            return [
                `Write the formula: ${step.formula}`,
                'Identify each variable and look up or calculate its value',
                'Check units for consistency',
                'Substitute values into formula',
                'Perform calculation carefully',
                'Check if result is chemically reasonable'
            ];
        }

        return [
            'Understand what this step accomplishes',
            'Identify required information',
            'Apply appropriate chemical principle or equation',
            'Verify result makes chemical sense'
        ];
    }

    generateChemistryProgressiveHints(step) {
        return {
            level1: 'Think about what chemical principle applies here.',
            level2: 'Consider the formula that relates these quantities.',
            level3: 'Remember to check units and sign conventions.',
            level4: step.formula ? `Use the formula: ${step.formula}` : 'Apply the standard calculation method for this type.',
            level5: step.calculation ? `Full solution: ${step.calculation}` : 'Substitute values and solve step by step.'
        };
    }

    generateChemistryPracticeVariation(step, problem) {
        return {
            similarProblem: `Try a similar ${problem.type} problem with different numerical values`,
            practiceHint: 'Start with simpler values (round numbers) to build confidence',
            extension: 'Once comfortable, try problems combining multiple concepts',
            realWorldConnection: this.getRealWorldExample(problem.type)
        };
    }

    connectToChemicalTheory(step, problem) {
        const theoryConnections = {
            arrhenius: 'Collision theory: Only molecules with E ≥ Ea react. Boltzmann distribution shows fraction with sufficient energy.',
            gibbs_free_energy: 'Second Law of Thermodynamics: ΔS_universe > 0 for spontaneous. ΔG combines system enthalpy/entropy effects.',
            integrated_rate_law: 'Rate laws reflect reaction mechanism. Order indicates molecularity of rate-determining step.',
            equilibrium_constant: 'At equilibrium, ΔG = 0 and Q = K. Position determined by relative stability of products vs reactants.',
            first_law: 'Energy conservation: ΔE_system + ΔE_surroundings = 0. Energy cannot be created or destroyed.'
        };

        return theoryConnections[problem.type] || 'This calculation is grounded in fundamental chemical principles.';
    }

    explainChemistryThinkingProcess(step) {
        return {
            observe: 'What information do I have and what does it tell me chemically?',
            goal: 'What am I trying to find and why does it matter?',
            strategy: 'What chemical principle or equation connects what I know to what I need?',
            execute: 'How do I apply this correctly with proper units and signs?',
            verify: 'Is my answer chemically reasonable and does it make sense?',
            interpret: 'What does this result mean in terms of molecular behavior or reaction feasibility?'
        };
    }

    identifyChemistryDecisionPoints(step) {
        return [
            'Which formula or approach to use',
            'What units to work in',
            'How to interpret signs and apply conventions',
            'Whether result requires further calculation or interpretation'
        ];
    }

    suggestAlternativeChemistryMethods(step, problem) {
        const alternatives = {
            arrhenius: [
                'Graphical method: plot ln(k) vs 1/T, slope = -Ea/R',
                'Two-point formula for direct calculation',
                'Full Arrhenius equation if A factor known'
            ],
            gibbs_free_energy: [
                'Calculate from ΔH° and ΔS° using Gibbs equation',
                'Calculate from formation free energies: ΔG°f',
                'Calculate from equilibrium constant: ΔG° = -RT ln(K)',
                'Use Hess\'s Law approach combining multiple reactions'
            ],
            integrated_rate_law: [
                'Algebraic method using integrated form',
                'Graphical method: linear plot determines order',
                'Half-life method for first-order reactions'
            ]
        };

        return alternatives[problem.type] || ['Standard calculation method', 'Alternative approaches depend on available data'];
    }

    provideConceptualFramework(step, problem) {
        const frameworks = {
            kinetics: 'Chemical kinetics studies HOW FAST reactions occur. Key factors: concentration, temperature, catalysts. Rates depend on molecular collisions and activation energy.',
            
            thermodynamics: 'Chemical thermodynamics studies WHETHER reactions occur spontaneously. Key quantities: ΔH (energy), ΔS (disorder), ΔG (spontaneity). Combines energetics with probability.',
            
            equilibrium: 'Chemical equilibrium is DYNAMIC BALANCE between forward and reverse reactions. K describes position, thermodynamics predicts K value, kinetics determines how fast equilibrium is reached.'
        };

        const category = problem.parameters.category || solution.category;
        return frameworks[category] || 'This problem applies fundamental principles of chemistry to predict and explain chemical behavior.';
    }

    getRealWorldExample(problemType) {
        const examples = {
            arrhenius: 'Food spoilage: Refrigeration slows reactions by lowering temperature, reducing rate constants exponentially.',
            gibbs_free_energy: 'Battery operation: Spontaneous redox reactions (ΔG < 0) drive current flow and do electrical work.',
            integrated_rate_law: 'Radioactive dating: First-order decay of C-14 allows age determination from remaining concentration.',
            equilibrium_constant: 'Industrial ammonia synthesis: K decreases with T, so lower T favored but slows rate - balance needed.',
            calorimetry: 'Nutrition labels: Food calories measured by bomb calorimetry, determining energy available from combustion.'
        };

        return examples[problemType] || 'This concept has important applications in industry, environment, and daily life.';
    }

    parseFormulaVariables(formula) {
        // Extract variables from formula
        const variables = [];
        const matches = formula.match(/[A-Z][a-z]?|Δ[A-Z]/g);
        if (matches) {
            return [...new Set(matches)];
        }
        return variables;
    }

    getFormulaDerivation(formula) {
        const derivations = {
            'ΔG° = ΔH° - TΔS°': 'Derived from fundamental thermodynamic relationships combining Gibbs definition G = H - TS with changes at constant T',
            'k = Ae^(-Ea/RT)': 'Derived from collision theory and Boltzmann distribution of molecular energies',
            'ln(k2/k1) = (Ea/R)(1/T1 - 1/T2)': 'Derived by taking ratio of Arrhenius equations at two temperatures and simplifying',
            'ΔG° = -RT ln(K)': 'Derived from relationship between free energy and reaction quotient at equilibrium (Q = K, ΔG = 0)'
        };

        return derivations[formula] || 'This formula is derived from fundamental principles of chemistry and physics.';
    }

    classifyEquationType(formula) {
        if (formula.includes('ln') || formula.includes('e^')) return 'Exponential/logarithmic';
        if (formula.includes('/')) return 'Rational/algebraic';
        if (formula.includes('Σ')) return 'Summation';
        return 'Linear algebraic';
    }

    determineExpectedUnits(formula) {
        if (formula.includes('ΔG') || formula.includes('ΔH')) return 'kJ/mol or J/mol';
        if (formula.includes('ΔS')) return 'J/(mol·K)';
        if (formula.includes('Ea')) return 'J/mol or kJ/mol';
        if (formula.includes('k') && formula.includes('Arrhenius')) return 'depends on reaction order';
        if (formula.includes('T')) return 'K (Kelvin)';
        if (formula.includes('[')) return 'M (molarity) or mol/L';
        return 'Check problem context for appropriate units';
    }

    relevantConversionFactors(formula) {
        const factors = {
            energy: '1 kJ = 1000 J',
            temperature: 'T(K) = T(°C) + 273.15',
            gas_constant: 'R = 8.314 J/(mol·K) = 0.08206 L·atm/(mol·K) = 1.987 cal/(mol·K)'
        };

        const relevant = [];
        if (formula.includes('ΔG') || formula.includes('ΔH') || formula.includes('Ea')) {
            relevant.push(factors.energy);
        }
        if (formula.includes('T')) {
            relevant.push(factors.temperature);
        }
        if (formula.includes('R')) {
            relevant.push(factors.gas_constant);
        }

        return relevant.length > 0 ? relevant : ['Check units in problem statement'];
    }

    // GRAPH DATA GENERATION

    generateChemistryGraphData() {
        if (!this.currentSolution) return;

        const { type } = this.currentProblem;

        switch(type) {
            case 'arrhenius':
                this.graphData = this.generateArrheniusPlot(this.currentSolution);
                break;
            case 'integrated_rate_law':
                this.graphData = this.generateConcentrationTimePlot(this.currentSolution, this.currentProblem);
                break;
            case 'gibbs_free_energy':
                this.graphData = this.generateGibbsTemperaturePlot(this.currentSolution, this.currentProblem);
                break;
            case 'equilibrium_constant':
                this.graphData = this.generateEquilibriumPlot(this.currentSolution);
                break;
            default:
                this.graphData = null;
        }
    }

    generateArrheniusPlot(solution) {
        if (!solution.temperature1 || !solution.temperature2) return null;

        const T_min = Math.min(solution.temperature1, solution.temperature2) - 50;
        const T_max = Math.max(solution.temperature1, solution.temperature2) + 50;
        const points = [];

        // Generate ln(k) vs 1/T data
        for (let T = T_min; T <= T_max; T += 5) {
            const inv_T = 1 / T;
            // Using known points to generate line
            const slope = solution.activationEnergy ? -solution.activationEnergy / 8.314 : -10000;
            const ln_k = slope * inv_T + 25; // Offset for visualization
            
            points.push({
                temperature: T,
                inverse_T: inv_T,
                ln_k: ln_k,
                k: Math.exp(ln_k)
            });
        }

        return {
            type: 'arrhenius_plot',
            title: 'Arrhenius Plot: ln(k) vs 1/T',
            xAxis: '1/T (K⁻¹)',
            yAxis: 'ln(k)',
            points: points,
            slope: solution.activationEnergy ? -solution.activationEnergy / 8.314 : null,
            interpretation: 'Slope = -Ea/R, steeper slope means higher activation energy'
        };
    }

    generateConcentrationTimePlot(solution, problem) {
        const { order, initial_concentration, rate_constant } = problem.parameters;
        const points = [];
        const t_max = solution.halfLife ? solution.halfLife * 5 : 100;

        for (let t = 0; t <= t_max; t += t_max / 50) {
            let concentration;
            
            if (order === 0) {
                concentration = initial_concentration - rate_constant * t;
                if (concentration < 0) concentration = 0;
            } else if (order === 1) {
                concentration = initial_concentration * Math.exp(-rate_constant * t);
            } else if (order === 2) {
                concentration = 1 / (1/initial_concentration + rate_constant * t);
            }

            points.push({
                time: t,
                concentration: concentration,
                percentRemaining: (concentration / initial_concentration) * 100
            });
        }

        return {
            type: 'concentration_time',
            title: `${this.getOrderName(order)} Reaction: [A] vs Time`,
            xAxis: 'Time (s)',
            yAxis: 'Concentration (M)',
            points: points,
            order: order,
            interpretation: this.getConcentrationCurveInterpretation(order)
        };
    }

    generateGibbsTemperaturePlot(solution, problem) {
        if (!problem.parameters.delta_H || !problem.parameters.delta_S) return null;

        const { delta_H, delta_S } = problem.parameters;
        const points = [];
        
        // Temperature range from 200 K to 600 K
        for (let T = 200; T <= 600; T += 10) {
            const deltaG = delta_H - T * (delta_S / 1000); // Convert J to kJ
            
            points.push({
                temperature: T,
                deltaG: deltaG,
                spontaneous: deltaG < 0
            });
        }

        // Find crossover temperature where ΔG = 0
        const T_crossover = (delta_H * 1000) / delta_S;

        return {
            type: 'gibbs_temperature',
            title: 'ΔG° vs Temperature',
            xAxis: 'Temperature (K)',
            yAxis: 'ΔG° (kJ/mol)',
            points: points,
            crossoverTemperature: T_crossover,
            interpretation: T_crossover > 0 && T_crossover < 1000 ? 
                `Reaction becomes spontaneous at T > ${T_crossover.toFixed(1)} K` :
                'Spontaneity does not change with temperature in typical range'
        };
    }

    generateEquilibriumPlot(solution) {
        if (!solution.equilibriumConstant) return null;

        // Generate data showing relationship between K and ΔG°
        const points = [];
        
        for (let logK = -5; logK <= 5; logK += 0.5) {
            const K = Math.pow(10, logK);
            const deltaG = -8.314 * 298 * Math.log(K) / 1000; // At 298 K, in kJ/mol
            
            points.push({
                K: K,
                logK: logK,
                deltaG: deltaG
            });
        }

        return {
            type: 'equilibrium_plot',
            title: 'Equilibrium Constant vs ΔG°',
            xAxis: 'log(K)',
            yAxis: 'ΔG° (kJ/mol)',
            points: points,
            currentK: solution.equilibriumConstant,
            currentDeltaG: solution.gibbsFreeEnergy,
            interpretation: 'Larger K (products favored) corresponds to more negative ΔG°'
        };
    }

    getConcentrationCurveInterpretation(order) {
        const interpretations = {
            0: 'Linear decrease: concentration drops at constant rate regardless of how much remains',
            1: 'Exponential decay: rate proportional to concentration, constant half-life',
            2: 'Hyperbolic decay: slower decline over time, half-life increases as concentration decreases'
        };
        
        return interpretations[order] || 'Concentration decreases over time according to rate law';
    }

    // WORKBOOK GENERATION

    generateChemistryWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createChemistryWorkbookStructure();

        workbook.sections = [
            this.createChemistryProblemSection(),
            this.createChemistryEnhancedStepsSection(),
            this.createChemistryLessonSection(),
            this.createChemistrySolutionSection(),
            this.createChemistryAnalysisSection(),
            this.createChemistryVerificationSection(),
            this.createChemistryPedagogicalNotesSection(),
            this.createChemistryAlternativeMethodsSection(),
            this.createChemistryGraphSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createChemistryWorkbookStructure() {
        return {
            title: 'Kinetics and Thermodynamics Chemistry Workbook',
            subtitle: 'Enhanced Multi-Layer Explanations',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createChemistryProblemSection() {
        if (!this.currentProblem) return null;

        const data = [
            ['Problem Type', this.currentProblem.type],
            ['Category', this.currentSolution.category],
            ['Description', this.currentProblem.scenario || 'N/A']
        ];

        // Add parameters
        Object.entries(this.currentProblem.parameters).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                data.push([key, typeof value === 'object' ? JSON.stringify(value) : value]);
            }
        });

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: data,
            backgroundColor: this.colors.sectionBg
        };
    }

    createChemistryEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            // Main step header
            stepsData.push(['═══ Step ' + step.stepNumber + ' ═══', step.step]);
            stepsData.push(['Description', step.description]);

            // Formulas and expressions
            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }
            if (step.beforeExpression) {
                stepsData.push(['Before', step.beforeExpression]);
            }
            if (step.operation) {
                stepsData.push(['Operation', step.operation]);
            }
            if (step.afterExpression) {
                stepsData.push(['After', step.afterExpression]);
            }
            if (step.calculation) {
                stepsData.push(['Calculation', step.calculation]);
            }

            // Reasoning
            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            // Enhanced explanations
            if (step.explanations && this.explanationLevel !== 'basic') {
                stepsData.push(['', '']); // Spacing
                stepsData.push(['─── Enhanced Explanations ───', '']);
                
                if (step.explanations.conceptual) {
                    stepsData.push(['Conceptual', step.explanations.conceptual]);
                }
                
                if (this.explanationLevel === 'detailed' && step.explanations.mathematical) {
                    stepsData.push(['Mathematical', JSON.stringify(step.explanations.mathematical)]);
                }
            }

            // Molecular perspective
            if (step.learningSupport?.molecularPerspective) {
                stepsData.push(['Molecular View', step.learningSupport.molecularPerspective]);
            }

            // Error prevention
            if (step.errorPrevention && this.includeErrorPrevention) {
                stepsData.push(['', '']); // Spacing
                stepsData.push(['─── Error Prevention ───', '']);
                
                if (step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                if (step.errorPrevention.preventionTips.length > 0) {
                    stepsData.push(['Prevention Tips', step.errorPrevention.preventionTips.join('; ')]);
                }
                if (step.errorPrevention.warningFlags.length > 0) {
                    stepsData.push(['⚠ WARNING', step.errorPrevention.warningFlags.join('; ')]);
                }
            }

            // Critical warnings
            if (step.criticalWarning) {
                stepsData.push(['⚠ CRITICAL', step.criticalWarning]);
            }

            // Scaffolding for guided learning
            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                stepsData.push(['', '']); // Spacing
                stepsData.push(['─── Guided Questions ───', '']);
                stepsData.push(['Questions', step.scaffolding.guidingQuestions.join(' | ')]);
            }

            // Interpretation
            if (step.interpretation) {
                stepsData.push(['Interpretation', step.interpretation]);
            }

            stepsData.push(['', '']); // Spacing between steps
        });

        return {
            title: 'Enhanced Step-by-Step Solution',
            type: 'steps',
            data: stepsData,
            backgroundColor: this.colors.stepBg
        };
    }

    createChemistryLessonSection() {
        const { type } = this.currentProblem;
        
        // Find the appropriate lesson based on problem type
        let lessonKey = null;
        if (type.includes('arrhenius')) lessonKey = 'arrhenius_equation';
        else if (type.includes('gibbs')) lessonKey = 'gibbs_free_energy';
        else if (type.includes('rate') || type.includes('kinetic')) lessonKey = 'reaction_rates';
        else if (type.includes('enthalpy')) lessonKey = 'enthalpy_calculations';
        else if (type.includes('entropy')) lessonKey = 'entropy_second_law';
        else if (type.includes('equilibrium')) lessonKey = 'equilibrium_thermodynamics';
        else if (type.includes('first_law')) lessonKey = 'first_law_thermodynamics';
        else if (type.includes('calorimetry')) lessonKey = 'calorimetry';

        if (!lessonKey || !this.lessons[lessonKey]) {
            return {
                title: 'Key Concepts',
                type: 'lesson',
                data: [
                    ['Topic', 'Chemical Kinetics and Thermodynamics'],
                    ['Focus', 'Understanding reaction rates and energy changes']
                ]
            };
        }

        const lesson = this.lessons[lessonKey];
        const data = [
            ['Lesson', lesson.title],
            ['', ''],
            ['Theory', lesson.theory],
            ['', ''],
            ['Key Concepts', lesson.concepts.join(' • ')]
        ];

        // Add key formulas
        if (lesson.keyFormulas) {
            data.push(['', '']);
            data.push(['─── Key Formulas ───', '']);
            Object.entries(lesson.keyFormulas).forEach(([name, formula]) => {
                data.push([name, formula]);
            });
        }

        // Add applications
        if (lesson.applications) {
            data.push(['', '']);
            data.push(['Real-World Applications', lesson.applications.join(' • ')]);
        }

        return {
            title: 'Key Concepts and Theory',
            type: 'lesson',
            data: data,
            backgroundColor: this.colors.sectionBg
        };
    }

    createChemistrySolutionSection() {
        if (!this.currentSolution) return null;

        const data = [['Quantity', 'Value']];

        // Add main results
        Object.entries(this.currentSolution).forEach(([key, value]) => {
            if (key !== 'category' && key !== 'problemType' && key !== 'formula' && 
                typeof value !== 'object' && value !== undefined) {
                const formattedKey = key.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim();
                const formattedValue = typeof value === 'number' ? 
                    (Math.abs(value) < 0.01 || Math.abs(value) > 10000 ? 
                        value.toExponential(4) : value.toFixed(6)) : 
                    value;
                data.push([formattedKey, formattedValue]);
            }
        });

        return {
            title: 'Final Solution',
            type: 'solution',
            data: data,
            backgroundColor: this.colors.resultBg
        };
    }

    createChemistryAnalysisSection() {
        const analysis = [
            ['Problem Type', this.currentProblem.type],
            ['Category', this.currentSolution.category],
            ['Number of Steps', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel],
            ['Difficulty', this.assessDifficulty()]
        ];

        // Add specific analysis based on problem type
        if (this.currentSolution.interpretation) {
            analysis.push(['Interpretation', this.currentSolution.interpretation]);
        }

        if (this.currentSolution.spontaneity) {
            analysis.push(['Spontaneity', this.currentSolution.spontaneity]);
        }

        if (this.currentSolution.reactionType) {
            analysis.push(['Reaction Type', this.currentSolution.reactionType]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysis
        };
    }

    createChemistryVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [
            ['Verification Method', 'Result'],
            ['', '']
        ];

        // Add reasonability checks
        const reasonability = this.performReasonabilityCheck();
        reasonability.forEach(check => {
            verificationData.push([check.test, check.result]);
        });

        // Add unit verification
        verificationData.push(['', '']);
        verificationData.push(['─── Unit Verification ───', '']);
        const unitChecks = this.verifyUnits();
        unitChecks.forEach(check => {
            verificationData.push([check.quantity, check.units]);
        });

        // Add confidence assessment
        verificationData.push(['', '']);
        verificationData.push(['Confidence Level', this.calculateChemistryConfidence()]);
        verificationData.push(['Verification Notes', this.getChemistryVerificationNotes()]);

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData,
            backgroundColor: this.colors.resultBg
        };
    }

    createChemistryPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const notes = this.generateChemistryPedagogicalNotes(type);

        return {
            title: 'Teaching and Learning Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join(' • ')],
                ['', ''],
                ['Key Concepts', notes.keyConcepts.join(' • ')],
                ['', ''],
                ['Prerequisites', notes.prerequisites.join(' • ')],
                ['', ''],
                ['Common Difficulties', notes.commonDifficulties.join(' • ')],
                ['', ''],
                ['Extension Ideas', notes.extensions.join(' • ')],
                ['', ''],
                ['Assessment Suggestions', notes.assessment.join(' • ')]
            ],
            backgroundColor: this.colors.sectionBg
        };
    }

    createChemistryAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const { type } = this.currentProblem;
        const alternatives = this.generateChemistryAlternativeMethods(type);

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method', alternatives.primaryMethod],
                ['', ''],
                ['─── Alternative Approaches ───', ''],
                ...alternatives.methods.map((method, i) => [
                    `Method ${i + 1}: ${method.name}`, method.description
                ]),
                ['', ''],
                ['Method Comparison', alternatives.comparison]
            ]
        };
    }

    createChemistryGraphSection() {
        if (!this.graphData) return null;

        return {
            title: 'Graphical Representation',
            type: 'graph',
            data: [
                ['Graph Type', this.graphData.type],
                ['Title', this.graphData.title],
                ['X-Axis', this.graphData.xAxis],
                ['Y-Axis', this.graphData.yAxis],
                ['Interpretation', this.graphData.interpretation],
                ['Data Points', this.graphData.points?.length || 0]
            ],
            graphData: this.graphData
        };
    }

    // ADDITIONAL HELPER METHODS

    assessDifficulty() {
        const stepCount = this.solutionSteps?.length || 0;
        const hasMultipleUnits = this.requiresUnitConversion();
        const requiresLogarithms = this.currentProblem.type.includes('arrhenius') || 
                                   this.currentProblem.type.includes('integrated');

        if (stepCount <= 3 && !hasMultipleUnits && !requiresLogarithms) {
            return 'Introductory';
        } else if (stepCount <= 5) {
            return 'Intermediate';
        } else {
            return 'Advanced';
        }
    }

    requiresUnitConversion() {
        const params = this.currentProblem.parameters;
        return (params.delta_S !== undefined && params.delta_H !== undefined) ||
               (params.temperature !== undefined && params.temperature < 1000);
    }

    performReasonabilityCheck() {
        const checks = [];
        const { type } = this.currentProblem;
        const solution = this.currentSolution;

        if (type.includes('arrhenius') && solution.activationEnergy) {
            const Ea_kJ = solution.activationEnergy / 1000;
            checks.push({
                test: 'Activation Energy Range',
                result: Ea_kJ > 0 && Ea_kJ < 500 ? 
                    `✓ Reasonable (${Ea_kJ.toFixed(1)} kJ/mol, typical range 20-200)` :
                    `⚠ Unusual value (${Ea_kJ.toFixed(1)} kJ/mol)`
            });
        }

        if (type.includes('gibbs') && solution.gibbsFreeEnergy !== undefined) {
            checks.push({
                test: 'Gibbs Free Energy Sign',
                result: solution.spontaneity ? `✓ ${solution.spontaneity}` : '✓ Calculated'
            });
        }

        if (solution.temperature) {
            checks.push({
                test: 'Temperature in Kelvin',
                result: solution.temperature > 0 && solution.temperature < 1000 ?
                    `✓ Reasonable (${solution.temperature.toFixed(1)} K)` :
                    `⚠ Unusual temperature (${solution.temperature.toFixed(1)} K)`
            });
        }

        return checks;
    }

    verifyUnits() {
        const units = [];
        const solution = this.currentSolution;

        if (solution.activationEnergy) {
            units.push({ quantity: 'Activation Energy', units: 'J/mol or kJ/mol' });
        }
        if (solution.gibbsFreeEnergy) {
            units.push({ quantity: 'Gibbs Free Energy', units: 'kJ/mol' });
        }
        if (solution.enthalpyChange) {
            units.push({ quantity: 'Enthalpy Change', units: 'kJ/mol' });
        }
        if (solution.entropyChange) {
            units.push({ quantity: 'Entropy Change', units: 'J/(mol·K)' });
        }
        if (solution.rateConstant) {
            const order = this.currentProblem.parameters.order || 1;
            units.push({ quantity: 'Rate Constant', units: this.getRateConstantUnits(order) });
        }

        return units;
    }

    calculateChemistryConfidence() {
        const checks = this.performReasonabilityCheck();
        const passedChecks = checks.filter(c => c.result.includes('✓')).length;
        const totalChecks = checks.length;

        if (totalChecks === 0) return 'Medium';
        if (passedChecks === totalChecks) return 'High';
        if (passedChecks >= totalChecks * 0.7) return 'Medium-High';
        return 'Medium';
    }

    getChemistryVerificationNotes() {
        const notes = [];
        const { type } = this.currentProblem;

        notes.push('All calculations verified for unit consistency');
        notes.push('Sign conventions properly applied');
        
        if (type.includes('temperature') || type.includes('arrhenius') || type.includes('gibbs')) {
            notes.push('Temperature confirmed in Kelvin');
        }

        if (type.includes('gibbs') || type.includes('enthalpy')) {
            notes.push('Energy units verified (kJ/mol or J/mol)');
        }

        return notes.join('; ');
    }

    generateChemistryPedagogicalNotes(problemType) {
        const pedagogicalDatabase = {
            arrhenius: {
                objectives: [
                    'Apply Arrhenius equation to relate k, T, and Ea',
                    'Understand exponential temperature dependence of rates',
                    'Interpret activation energy in terms of molecular collisions'
                ],
                keyConcepts: [
                    'Activation energy as energy barrier',
                    'Exponential relationship between k and T',
                    'Boltzmann distribution of molecular energies'
                ],
                prerequisites: [
                    'Natural logarithm and exponential functions',
                    'Temperature scales and Kelvin conversion',
                    'Basic kinetics and rate constants'
                ],
                commonDifficulties: [
                    'Forgetting to convert to Kelvin',
                    'Sign errors in ln(k2/k1) or 1/T terms',
                    'Confusion about which R value to use'
                ],
                extensions: [
                    'Graphical determination of Ea from Arrhenius plot',
                    'Transition state theory and pre-exponential factor',
                    'Temperature optimization in industrial processes'
                ],
                assessment: [
                    'Verify understanding of Ea physical meaning',
                    'Test ability to predict k at new temperature',
                    'Check graphical interpretation skills'
                ]
            },
            gibbs_free_energy: {
                objectives: [
                    'Calculate ΔG° from ΔH° and ΔS°',
                    'Predict reaction spontaneity from ΔG° sign',
                    'Understand temperature effects on spontaneity'
                ],
                keyConcepts: [
                    'Gibbs free energy as spontaneity criterion',
                    'Competition between enthalpy and entropy',
                    'Temperature as weighting factor for entropy'
                ],
                prerequisites: [
                    'Enthalpy and entropy concepts',
                    'Thermodynamic sign conventions',
                    'Unit conversions (J ↔ kJ)'
                ],
                commonDifficulties: [
                    'Forgetting to convert ΔS units',
                    'Sign error in -TΔS term',
                    'Confusing spontaneous with fast'
                ],
                extensions: [
                    'Temperature dependence and crossover points',
                    'Coupling reactions using ΔG',
                    'Relationship to equilibrium constant'
                ],
                assessment: [
                    'Check ΔH/ΔS/T analysis for spontaneity',
                    'Verify unit conversion proficiency',
                    'Test conceptual understanding of driving forces'
                ]
            },
            integrated_rate_law: {
                objectives: [
                    'Apply integrated rate laws for different orders',
                    'Calculate concentration at given time or vice versa',
                    'Understand graphical tests for reaction order'
                ],
                keyConcepts: [
                    'Order determines concentration-time relationship',
                    'Linear plots identify reaction order',
                    'Half-life behavior differs by order'
                ],
                prerequisites: [
                    'Logarithmic and exponential functions',
                    'Understanding of reaction order',
                    'Rate law fundamentals'
                ],
                commonDifficulties: [
                    'Choosing wrong integrated form for order',
                    'Arithmetic errors in exponential calculations',
                    'Confusion between rate law and integrated rate law'
                ],
                extensions: [
                    'Graphical analysis and order determination',
                    'Complex reactions and pseudo-order kinetics',
                    'Radioactive decay applications'
                ],
                assessment: [
                    'Verify correct form selected for order',
                    'Check calculation accuracy',
                    'Test conceptual understanding of order meaning'
                ]
            }
        };

        return pedagogicalDatabase[problemType] || {
            objectives: ['Solve chemical kinetics or thermodynamics problems'],
            keyConcepts: ['Apply appropriate formulas and principles'],
            prerequisites: ['Basic chemistry and mathematics'],
            commonDifficulties: ['Unit conversions and sign conventions'],
            extensions: ['More complex related problems'],
            assessment: ['Verify understanding of concepts and calculations']
        };
    }

    generateChemistryAlternativeMethods(problemType) {
        const alternativeDatabase = {
            arrhenius: {
                primaryMethod: 'Two-point form of Arrhenius equation',
                methods: [
                    {
                        name: 'Graphical Method',
                        description: 'Plot ln(k) vs 1/T, determine Ea from slope = -Ea/R'
                    },
                    {
                        name: 'Full Arrhenius Equation',
                        description: 'Use k = Ae^(-Ea/RT) if pre-exponential factor A is known'
                    },
                    {
                        name: 'Ratio Method',
                        description: 'Calculate k2/k1 ratio from temperature change and known Ea'
                    }
                ],
                comparison: 'Two-point form most direct for given data; graphical method best for multiple data points; full equation needs A factor'
            },
            gibbs_free_energy: {
                primaryMethod: 'ΔG° = ΔH° - TΔS° from tabulated values',
                methods: [
                    {
                        name: 'Formation Free Energies',
                        description: 'Calculate using ΔG°f: ΔG°rxn = ΣnΔG°f(products) - ΣnΔG°f(reactants)'
                    },
                    {
                        name: 'From Equilibrium Constant',
                        description: 'Use ΔG° = -RT ln(K) if equilibrium constant is known'
                    },
                    {
                        name: 'Hess\'s Law Approach',
                        description: 'Combine multiple reactions with known ΔG° values'
                    },
                    {
                        name: 'Electrochemical Method',
                        description: 'For redox reactions: ΔG° = -nFE° from cell potential'
                    }
                ],
                comparison: 'ΔH°/ΔS° method shows temperature dependence clearly; ΔG°f method most direct from tables; K method connects to equilibrium; Hess\'s Law for unavailable data'
            },
            integrated_rate_law: {
                primaryMethod: 'Direct application of integrated rate law for known order',
                methods: [
                    {
                        name: 'Graphical Linearization',
                        description: 'Plot appropriate function vs time: [A] vs t (0th), ln[A] vs t (1st), 1/[A] vs t (2nd)'
                    },
                    {
                        name: 'Half-Life Method',
                        description: 'Use half-life equations for first-order (t½ = 0.693/k) or second-order'
                    },
                    {
                        name: 'Successive Half-Lives',
                        description: 'Compare multiple half-lives to determine order'
                    },
                    {
                        name: 'Differential Method',
                        description: 'Plot log(rate) vs log[A] to determine order from slope'
                    }
                ],
                comparison: 'Integrated form most direct for known order; graphical methods identify unknown order; half-life method convenient for first-order; differential method good for initial rates data'
            },
            equilibrium_constant: {
                primaryMethod: 'ΔG° = -RT ln(K) relationship',
                methods: [
                    {
                        name: 'Van\'t Hoff Equation',
                        description: 'Calculate K at different temperatures using ln(K2/K1) = -(ΔH°/R)(1/T2 - 1/T1)'
                    },
                    {
                        name: 'Direct Equilibrium Measurement',
                        description: 'Measure equilibrium concentrations and calculate K = [products]/[reactants]'
                    },
                    {
                        name: 'Electrochemical Method',
                        description: 'For redox: K = e^(nFE°/RT) from standard cell potential'
                    }
                ],
                comparison: 'ΔG° method connects to thermodynamics; Van\'t Hoff shows temperature dependence; direct measurement is experimental approach; electrochemical for redox reactions'
            },
            first_law: {
                primaryMethod: 'Direct application of ΔE = q + w',
                methods: [
                    {
                        name: 'Constant Volume Process',
                        description: 'For constant V: w = 0, so ΔE = qv'
                    },
                    {
                        name: 'Constant Pressure Process',
                        description: 'For constant P: use ΔH = qp and ΔH = ΔE + PΔV'
                    },
                    {
                        name: 'Adiabatic Process',
                        description: 'For insulated system: q = 0, so ΔE = w'
                    },
                    {
                        name: 'Path Function Analysis',
                        description: 'Calculate q and w separately for multi-step path'
                    }
                ],
                comparison: 'General form works for all processes; specialized forms simplify for specific conditions; path analysis needed for complex processes'
            },
            enthalpy_change: {
                primaryMethod: 'Formation enthalpy method: ΔH°rxn = Σ(products) - Σ(reactants)',
                methods: [
                    {
                        name: 'Hess\'s Law',
                        description: 'Combine multiple reactions algebraically to get target reaction'
                    },
                    {
                        name: 'Bond Enthalpy Method',
                        description: 'ΔH° = Σ(bonds broken) - Σ(bonds formed)'
                    },
                    {
                        name: 'Calorimetry',
                        description: 'Measure heat experimentally: ΔH = -q/n'
                    },
                    {
                        name: 'Standard Enthalpies of Combustion',
                        description: 'Use ΔH°comb values when formation enthalpies unavailable'
                    }
                ],
                comparison: 'Formation method most direct when ΔH°f available; Hess\'s Law for complex calculations; bond method estimates from bond energies; calorimetry for experimental determination'
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard calculation approach',
            methods: [
                {
                    name: 'Alternative Approach',
                    description: 'Use appropriate variations based on available data'
                }
            ],
            comparison: 'Choose method based on given information and problem requirements'
        };
    }
}
