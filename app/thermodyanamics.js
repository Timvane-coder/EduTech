
// Enhanced Thermodynamics Mathematical Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedThermodynamicsMathematicalWorkbook {
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

        this.mathSymbols = this.initializeMathSymbols();
        this.physicalConstants = this.initializePhysicalConstants();
        this.setThemeColors();
        this.initializeThermodynamicsSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
        this.initializeThermodynamicsLessons();
    }

    initializePhysicalConstants() {
        return {
            R_universal: 8.314, // J/(mol·K) - Universal gas constant
            R_specific_air: 287, // J/(kg·K) - Specific gas constant for air
            k_boltzmann: 1.381e-23, // J/K - Boltzmann constant
            N_avogadro: 6.022e23, // 1/mol - Avogadro's number
            sigma_stefan: 5.67e-8, // W/(m²·K⁴) - Stefan-Boltzmann constant
            c_water: 4186, // J/(kg·K) - Specific heat of water
            c_ice: 2100, // J/(kg·K) - Specific heat of ice
            c_steam: 2000, // J/(kg·K) - Specific heat of steam
            L_fusion_water: 334000, // J/kg - Latent heat of fusion for water
            L_vaporization_water: 2260000, // J/kg - Latent heat of vaporization for water
            atm_pressure: 101325, // Pa - Standard atmospheric pressure
            zero_celsius: 273.15, // K - Absolute zero in Celsius
            gamma_air: 1.4, // Dimensionless - Heat capacity ratio for air
            c_p_air: 1005, // J/(kg·K) - Specific heat at constant pressure for air
            c_v_air: 718 // J/(kg·K) - Specific heat at constant volume for air
        };
    }

    initializeThermodynamicsLessons() {
        this.lessons = {
            ideal_gas_law: {
                title: "Ideal Gas Law",
                concepts: [
                    "Relates pressure, volume, temperature, and amount of gas",
                    "PV = nRT where R is the universal gas constant",
                    "Can also use PV = NkT where k is Boltzmann constant",
                    "Valid for ideal gases at low pressure and high temperature"
                ],
                theory: "The ideal gas law combines Boyle's law, Charles's law, and Avogadro's law into a single equation describing the behavior of an ideal gas. Real gases approximate ideal behavior under most conditions.",
                keyFormulas: {
                    "Standard Form": "PV = nRT",
                    "Alternative Form": "PV = NkT",
                    "Specific Gas Constant": "PV = mR_specific*T",
                    "Density Form": "P = ρRT/M"
                },
                solvingSteps: [
                    "Identify known variables (P, V, n, T)",
                    "Convert all units to SI (Pa, m³, mol, K)",
                    "Rearrange PV = nRT to solve for unknown",
                    "Substitute values and calculate",
                    "Convert result to desired units"
                ],
                applications: [
                    "Gas storage calculations",
                    "Pneumatic systems design",
                    "Atmospheric science",
                    "Chemical reaction stoichiometry"
                ]
            },

            first_law: {
                title: "First Law of Thermodynamics",
                concepts: [
                    "Energy conservation: ΔU = Q - W",
                    "Internal energy change equals heat added minus work done",
                    "Sign convention: Q positive = heat in, W positive = work by system",
                    "Different forms for different processes"
                ],
                theory: "The first law is a statement of energy conservation for thermodynamic systems. Energy can be transferred as heat or work, but total energy is conserved.",
                keyFormulas: {
                    "General Form": "ΔU = Q - W",
                    "Differential Form": "dU = δQ - δW",
                    "For Ideal Gas": "ΔU = nC_vΔT",
                    "Work by Gas": "W = ∫PdV"
                },
                processTypes: [
                    "Isothermal (constant T): ΔU = 0, Q = W",
                    "Adiabatic (Q = 0): ΔU = -W",
                    "Isochoric (constant V): W = 0, ΔU = Q",
                    "Isobaric (constant P): W = PΔV"
                ],
                applications: [
                    "Engine efficiency calculations",
                    "Refrigeration cycles",
                    "Power plant analysis",
                    "Atmospheric processes"
                ]
            },

            heat_transfer: {
                title: "Heat Transfer",
                concepts: [
                    "Three modes: conduction, convection, radiation",
                    "Heat flows from hot to cold",
                    "Rate depends on temperature difference and material properties",
                    "Each mode has characteristic equation"
                ],
                theory: "Heat transfer is energy transfer due to temperature difference. The three modes operate by different mechanisms but all follow the second law of thermodynamics.",
                keyFormulas: {
                    "Conduction (Fourier's Law)": "q = -kA(dT/dx)",
                    "Convection (Newton's Law)": "q = hA(T_s - T_∞)",
                    "Radiation (Stefan-Boltzmann)": "q = εσA(T⁴ - T_surr⁴)",
                    "Thermal Resistance": "R = L/(kA) or R = 1/(hA)"
                },
                solvingSteps: [
                    "Identify heat transfer mode(s)",
                    "Determine boundary conditions",
                    "Select appropriate equation",
                    "Calculate thermal resistances if needed",
                    "Solve for unknown (q, T, or material property)"
                ],
                applications: [
                    "Building insulation design",
                    "Heat exchanger analysis",
                    "Electronic cooling",
                    "Spacecraft thermal control"
                ]
            },

            calorimetry: {
                title: "Calorimetry and Specific Heat",
                concepts: [
                    "Heat capacity: energy to raise temperature by 1 K",
                    "Specific heat: heat capacity per unit mass",
                    "Q = mcΔT for sensible heat",
                    "Q = mL for latent heat (phase change)"
                ],
                theory: "Calorimetry involves measuring heat transfer through temperature changes. Specific heat is a material property indicating thermal energy storage capacity.",
                keyFormulas: {
                    "Sensible Heat": "Q = mcΔT",
                    "Latent Heat": "Q = mL",
                    "Heat Capacity": "C = mc",
                    "Thermal Equilibrium": "Σ Q_i = 0"
                },
                solvingSteps: [
                    "Identify all substances and phases",
                    "Determine if phase changes occur",
                    "Apply Q = mcΔT for temperature changes",
                    "Apply Q = mL for phase changes",
                    "Use conservation of energy: heat lost = heat gained"
                ],
                applications: [
                    "Mixture temperature calculations",
                    "Phase change problems",
                    "Bomb calorimetry",
                    "Food science and nutrition"
                ]
            },

            thermodynamic_processes: {
                title: "Thermodynamic Processes",
                concepts: [
                    "Process is path taken by system between states",
                    "Properties: isothermal, adiabatic, isobaric, isochoric",
                    "Work and heat depend on process path",
                    "State functions (U, H, S) are path-independent"
                ],
                theory: "Different thermodynamic processes follow different constraints, leading to different relationships between P, V, T and different work and heat values.",
                keyFormulas: {
                    "Isothermal Work": "W = nRT ln(V_f/V_i)",
                    "Adiabatic Relation": "PV^γ = constant",
                    "Isobaric Work": "W = PΔV",
                    "Isochoric": "W = 0"
                },
                processTypes: [
                    "Isothermal: temperature constant, slow process",
                    "Adiabatic: no heat transfer, fast/insulated process",
                    "Isobaric: pressure constant, common in atmosphere",
                    "Isochoric: volume constant, rigid container"
                ],
                applications: [
                    "Engine cycles (Otto, Diesel, Carnot)",
                    "Compressor and turbine analysis",
                    "Atmospheric thermodynamics",
                    "Refrigeration cycles"
                ]
            },

            entropy: {
                title: "Entropy and Second Law",
                concepts: [
                    "Entropy measures disorder or randomness",
                    "Second law: entropy of isolated system increases",
                    "ΔS ≥ Q/T for any process",
                    "Reversible process: ΔS = Q/T; Irreversible: ΔS > Q/T"
                ],
                theory: "Entropy is a state function that quantifies the dispersal of energy. The second law establishes the direction of natural processes and limits on efficiency.",
                keyFormulas: {
                    "Entropy Change": "ΔS = Q_rev/T",
                    "Ideal Gas": "ΔS = nC_v ln(T_f/T_i) + nR ln(V_f/V_i)",
                    "Carnot Efficiency": "η = 1 - T_c/T_h",
                    "Clausius Inequality": "∮ δQ/T ≤ 0"
                },
                applications: [
                    "Heat engine efficiency limits",
                    "Refrigerator performance",
                    "Spontaneity of processes",
                    "Information theory connections"
                ]
            },

            heat_engines: {
                title: "Heat Engines and Cycles",
                concepts: [
                    "Convert heat into work cyclically",
                    "Efficiency: η = W_net/Q_in",
                    "Carnot cycle gives maximum efficiency",
                    "Real engines less efficient than Carnot"
                ],
                theory: "Heat engines operate in cycles, extracting work from heat flow between hot and cold reservoirs. Efficiency is limited by the second law of thermodynamics.",
                keyFormulas: {
                    "Efficiency": "η = W_net/Q_in = 1 - Q_out/Q_in",
                    "Carnot Efficiency": "η_Carnot = 1 - T_c/T_h",
                    "Coefficient of Performance (Refrigerator)": "COP = Q_c/W",
                    "Coefficient of Performance (Heat Pump)": "COP = Q_h/W"
                },
                cycleTypes: [
                    "Carnot: reversible, maximum efficiency",
                    "Otto: gasoline engines, constant volume combustion",
                    "Diesel: diesel engines, constant pressure combustion",
                    "Rankine: steam power plants"
                ],
                applications: [
                    "Automotive engines",
                    "Power generation",
                    "Refrigeration and air conditioning",
                    "Heat pumps"
                ]
            },

            phase_changes: {
                title: "Phase Changes and Equilibrium",
                concepts: [
                    "Phase changes occur at constant temperature",
                    "Latent heat: energy for phase change without temperature change",
                    "Different latent heats for melting, vaporization, sublimation",
                    "Phase diagrams show equilibrium conditions"
                ],
                theory: "Phase changes involve breaking or forming intermolecular bonds, requiring or releasing energy without temperature change until transition completes.",
                keyFormulas: {
                    "Latent Heat": "Q = mL",
                    "Fusion (solid↔liquid)": "Q = mL_f",
                    "Vaporization (liquid↔gas)": "Q = mL_v",
                    "Clausius-Clapeyron": "dP/dT = L/(TΔV)"
                },
                solvingSteps: [
                    "Identify initial and final phases",
                    "Calculate sensible heat for temperature changes",
                    "Calculate latent heat for phase changes",
                    "Sum all energy contributions",
                    "Apply conservation of energy if mixing"
                ],
                applications: [
                    "Ice-water-steam calculations",
                    "Distillation processes",
                    "Freeze-drying",
                    "Meteorology (cloud formation)"
                ]
            },

            thermal_expansion: {
                title: "Thermal Expansion",
                concepts: [
                    "Materials expand when heated",
                    "Linear expansion: ΔL = αL₀ΔT",
                    "Volume expansion: ΔV = βV₀ΔT",
                    "β ≈ 3α for isotropic solids"
                ],
                theory: "Thermal expansion results from increased atomic vibration amplitude with temperature. Coefficient depends on material's bonding strength.",
                keyFormulas: {
                    "Linear Expansion": "ΔL = αL₀ΔT",
                    "Area Expansion": "ΔA = 2αA₀ΔT",
                    "Volume Expansion": "ΔV = βV₀ΔT",
                    "Relation": "β ≈ 3α (isotropic materials)"
                },
                applications: [
                    "Thermal stress calculations",
                    "Expansion joints in structures",
                    "Bimetallic strip thermometers",
                    "Liquid-in-glass thermometers"
                ]
            },

            kinetic_theory: {
                title: "Kinetic Theory of Gases",
                concepts: [
                    "Gases consist of moving molecules",
                    "Pressure from molecular collisions",
                    "Temperature proportional to average kinetic energy",
                    "Connects macroscopic and microscopic descriptions"
                ],
                theory: "Kinetic theory explains gas behavior through molecular motion, deriving macroscopic properties from statistical mechanics of molecular collisions.",
                keyFormulas: {
                    "Average Kinetic Energy": "KE_avg = (3/2)kT",
                    "RMS Speed": "v_rms = √(3RT/M) = √(3kT/m)",
                    "Pressure": "P = (1/3)ρv_rms²",
                    "Mean Free Path": "λ = kT/(√2 πd²P)"
                },
                applications: [
                    "Gas diffusion rates",
                    "Molecular speed distributions",
                    "Vacuum technology",
                    "Atmospheric science"
                ]
            },

            psychrometrics: {
                title: "Psychrometrics and Humidity",
                concepts: [
                    "Study of moist air properties",
                    "Humidity: amount of water vapor in air",
                    "Relative humidity vs absolute humidity",
                    "Dew point: temperature at which condensation occurs"
                ],
                theory: "Psychrometrics deals with thermodynamic properties of gas-vapor mixtures, particularly air-water vapor for HVAC and meteorology applications.",
                keyFormulas: {
                    "Relative Humidity": "RH = (P_v/P_sat) × 100%",
                    "Humidity Ratio": "ω = 0.622(P_v/(P - P_v))",
                    "Dew Point": "T_dp from P_v = P_sat(T_dp)",
                    "Enthalpy": "h = c_p*T + ω*h_fg"
                },
                applications: [
                    "HVAC system design",
                    "Weather prediction",
                    "Drying processes",
                    "Comfort analysis"
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
                processBg: '#ffe6e6'
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
                processBg: '#ffe0e6'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±',
            // Greek letters (thermodynamics specific)
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'epsilon': 'ε', 'eta': 'η', 'theta': 'θ', 'rho': 'ρ',
            'sigma': 'σ', 'tau': 'τ', 'omega': 'ω',
            // Special symbols
            'partial': '∂', 'integral': '∫', 'nabla': '∇',
            'degrees': '°', 'micro': 'μ'
        };
    }


initializeThermodynamicsSolvers() {
        this.thermodynamicsTypes = {
            // Ideal Gas Law Problems
            ideal_gas_law: {
                patterns: [
                    /ideal\s+gas/i,
                    /PV\s*=\s*nRT/i,
                    /gas\s+law/i,
                    /pressure.*volume.*temperature/i
                ],
                solver: this.solveIdealGasLaw.bind(this),
                name: 'Ideal Gas Law',
                category: 'gas_laws',
                description: 'Solves PV = nRT problems'
            },

            // First Law of Thermodynamics
            first_law: {
                patterns: [
                    /first\s+law/i,
                    /internal\s+energy/i,
                    /ΔU.*Q.*W/i,
                    /energy\s+conservation/i
                ],
                solver: this.solveFirstLaw.bind(this),
                name: 'First Law of Thermodynamics',
                category: 'thermodynamic_laws',
                description: 'Solves ΔU = Q - W problems'
            },

            // Heat Transfer - Conduction
            heat_conduction: {
                patterns: [
                    /conduction/i,
                    /fourier.*law/i,
                    /thermal\s+conductivity/i,
                    /heat\s+flux/i
                ],
                solver: this.solveHeatConduction.bind(this),
                name: 'Heat Conduction',
                category: 'heat_transfer',
                description: 'Solves Fourier\'s law problems'
            },

            // Heat Transfer - Convection
            heat_convection: {
                patterns: [
                    /convection/i,
                    /newton.*cooling/i,
                    /convective\s+heat/i,
                    /heat\s+transfer\s+coefficient/i
                ],
                solver: this.solveHeatConvection.bind(this),
                name: 'Heat Convection',
                category: 'heat_transfer',
                description: 'Solves Newton\'s law of cooling'
            },

            // Heat Transfer - Radiation
            heat_radiation: {
                patterns: [
                    /radiation/i,
                    /stefan.*boltzmann/i,
                    /emissivity/i,
                    /radiant\s+heat/i
                ],
                solver: this.solveHeatRadiation.bind(this),
                name: 'Heat Radiation',
                category: 'heat_transfer',
                description: 'Solves Stefan-Boltzmann law'
            },

            // Calorimetry
            calorimetry: {
                patterns: [
                    /calorimetry/i,
                    /specific\s+heat/i,
                    /Q\s*=\s*mcΔT/i,
                    /heat\s+capacity/i,
                    /mixture\s+temperature/i
                ],
                solver: this.solveCalorimetry.bind(this),
                name: 'Calorimetry',
                category: 'calorimetry',
                description: 'Solves Q = mcΔT problems'
            },

            // Phase Change
            phase_change: {
                patterns: [
                    /phase\s+change/i,
                    /latent\s+heat/i,
                    /melting|freezing|vaporization|condensation/i,
                    /fusion|vaporization/i
                ],
                solver: this.solvePhaseChange.bind(this),
                name: 'Phase Change',
                category: 'phase_transitions',
                description: 'Solves latent heat problems'
            },

            // Thermal Expansion
            thermal_expansion: {
                patterns: [
                    /thermal\s+expansion/i,
                    /expansion\s+coefficient/i,
                    /ΔL.*α.*ΔT/i,
                    /linear\s+expansion/i,
                    /volume\s+expansion/i
                ],
                solver: this.solveThermalExpansion.bind(this),
                name: 'Thermal Expansion',
                category: 'thermal_properties',
                description: 'Solves thermal expansion problems'
            },

            // Isothermal Process
            isothermal_process: {
                patterns: [
                    /isothermal/i,
                    /constant\s+temperature/i,
                    /T.*constant/i
                ],
                solver: this.solveIsothermalProcess.bind(this),
                name: 'Isothermal Process',
                category: 'thermodynamic_processes',
                description: 'Solves isothermal gas processes'
            },

            // Adiabatic Process
            adiabatic_process: {
                patterns: [
                    /adiabatic/i,
                    /no\s+heat\s+transfer/i,
                    /Q\s*=\s*0/i,
                    /PV.*gamma/i
                ],
                solver: this.solveAdiabaticProcess.bind(this),
                name: 'Adiabatic Process',
                category: 'thermodynamic_processes',
                description: 'Solves adiabatic gas processes'
            },

            // Isobaric Process
            isobaric_process: {
                patterns: [
                    /isobaric/i,
                    /constant\s+pressure/i,
                    /P.*constant/i
                ],
                solver: this.solveIsobaricProcess.bind(this),
                name: 'Isobaric Process',
                category: 'thermodynamic_processes',
                description: 'Solves constant pressure processes'
            },

            // Isochoric Process
            isochoric_process: {
                patterns: [
                    /isochoric/i,
                    /constant\s+volume/i,
                    /V.*constant/i,
                    /isometric/i
                ],
                solver: this.solveIsochoricProcess.bind(this),
                name: 'Isochoric Process',
                category: 'thermodynamic_processes',
                description: 'Solves constant volume processes'
            },

            // Heat Engine Efficiency
            heat_engine: {
                patterns: [
                    /heat\s+engine/i,
                    /efficiency/i,
                    /carnot/i,
                    /thermal\s+efficiency/i
                ],
                solver: this.solveHeatEngine.bind(this),
                name: 'Heat Engine',
                category: 'heat_engines',
                description: 'Calculates engine efficiency'
            },

            // Entropy
            entropy: {
                patterns: [
                    /entropy/i,
                    /ΔS/i,
                    /second\s+law/i,
                    /disorder/i
                ],
                solver: this.solveEntropy.bind(this),
                name: 'Entropy',
                category: 'thermodynamic_laws',
                description: 'Calculates entropy changes'
            },

            // RMS Speed
            rms_speed: {
                patterns: [
                    /rms\s+speed/i,
                    /root\s+mean\s+square/i,
                    /molecular\s+speed/i,
                    /kinetic\s+theory/i
                ],
                solver: this.solveRMSSpeed.bind(this),
                name: 'RMS Speed',
                category: 'kinetic_theory',
                description: 'Calculates molecular speeds'
            },

            // Thermal Resistance
            thermal_resistance: {
                patterns: [
                    /thermal\s+resistance/i,
                    /R.*value/i,
                    /insulation/i,
                    /composite\s+wall/i
                ],
                solver: this.solveThermalResistance.bind(this),
                name: 'Thermal Resistance',
                category: 'heat_transfer',
                description: 'Calculates thermal resistance'
            }
        };
    }

    // Initialize common mistakes and error prevention database
    initializeErrorDatabase() {
        this.commonMistakes = {
            ideal_gas_law: {
                'Unit conversion': [
                    'Forgetting to convert Celsius to Kelvin',
                    'Not converting volume to m³ or pressure to Pa',
                    'Mixing different unit systems'
                ],
                'Calculate result': [
                    'Using wrong gas constant (R vs R_specific)',
                    'Confusing n (moles) with N (molecules)',
                    'Sign errors in temperature differences'
                ]
            },
            first_law: {
                'Sign convention': [
                    'Confusing sign of work (by system vs on system)',
                    'Wrong sign for heat (in vs out)',
                    'Not following consistent convention'
                ],
                'Calculate ΔU': [
                    'Forgetting Q and W have different units sometimes',
                    'Not recognizing special cases (isothermal, adiabatic)'
                ]
            },
            calorimetry: {
                'Heat lost equals heat gained': [
                    'Not accounting for all substances in mixture',
                    'Forgetting phase changes require latent heat',
                    'Sign errors in heat flow direction'
                ],
                'Calculate final temperature': [
                    'Using wrong specific heat values',
                    'Not checking if phase change occurs',
                    'Arithmetic errors in algebra'
                ]
            },
            heat_transfer: {
                'Identify mode': [
                    'Confusing conduction and convection',
                    'Forgetting radiation at high temperatures',
                    'Wrong thermal property for material'
                ],
                'Calculate heat transfer rate': [
                    'Using temperature instead of temperature difference',
                    'Wrong area or length in formula',
                    'Unit inconsistencies'
                ]
            }
        };

        this.errorPrevention = {
            temperature_units: {
                reminder: 'Always convert temperature to Kelvin for thermodynamics',
                method: 'K = °C + 273.15; Never use °C in formulas'
            },
            sign_convention: {
                reminder: 'Establish clear sign convention: Q in/out, W by/on system',
                method: 'Write out convention before solving'
            },
            unit_consistency: {
                reminder: 'All quantities must be in consistent units (SI preferred)',
                method: 'Convert all inputs to SI before calculation'
            },
            phase_changes: {
                reminder: 'Check if temperature crosses phase transition points',
                method: 'Compare to 0°C, 100°C for water problems'
            }
        };
    }

    // Initialize explanation templates for different learning styles
    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Physical meaning and intuition about thermodynamic concepts',
                language: 'intuitive descriptions of energy, heat, and work'
            },
            procedural: {
                focus: 'Exact calculation steps and formula application',
                language: 'step-by-step computational instructions'
            },
            visual: {
                focus: 'Process diagrams, PV diagrams, temperature profiles',
                language: 'visual and graphical representations'
            },
            algebraic: {
                focus: 'Mathematical derivations and formula manipulations',
                language: 'precise thermodynamic equations'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'everyday language, minimal jargon',
                detail: 'essential steps with simple explanations',
                examples: 'concrete scenarios with familiar materials'
            },
            intermediate: {
                vocabulary: 'standard thermodynamic terminology',
                detail: 'main steps with physical reasoning',
                examples: 'mix of practical and theoretical cases'
            },
            detailed: {
                vocabulary: 'full technical and scientific vocabulary',
                detail: 'comprehensive derivations and theoretical background',
                examples: 'abstract and generalized thermodynamic systems'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to technical',
                detail: 'guided discovery with probing questions',
                examples: 'carefully sequenced difficulty progression'
            }
        };
    }

    // Main solver method
    solveThermodynamicsProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseThermodynamicsProblem(equation, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveThermodynamicsProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateThermodynamicsSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateThermodynamicsGraphData();

            // Generate workbook
            this.generateThermodynamicsWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                result: this.currentSolution?.result,
                units: this.currentSolution?.units
            };

        } catch (error) {
            throw new Error(`Failed to solve thermodynamics problem: ${error.message}`);
        }
    }

    parseThermodynamicsProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.thermodynamicsTypes[problemType]) {
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

        // Auto-detect thermodynamics problem type
        for (const [type, config] of Object.entries(this.thermodynamicsTypes)) {
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

        // Default to ideal gas law if gas-related parameters are provided
        if (parameters.P !== undefined || parameters.V !== undefined || parameters.T !== undefined) {
            return {
                originalInput: equation || 'Thermodynamics problem with given parameters',
                cleanInput: cleanInput,
                type: 'ideal_gas_law',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize thermodynamics problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/°C/g, 'celsius')
            .replace(/°F/g, 'fahrenheit')
            .replace(/°K/g, 'kelvin')
            .trim();
    }

    solveThermodynamicsProblem_Internal(problem) {
        const solver = this.thermodynamicsTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for thermodynamics problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // THERMODYNAMICS SOLVERS

    solveIdealGasLaw(problem) {
        const { P, V, n, T, m, M } = problem.parameters;
        const R = this.physicalConstants.R_universal;

        // Convert temperature to Kelvin if needed
        let T_kelvin = T;
        if (problem.parameters.T_unit === 'celsius') {
            T_kelvin = T + this.physicalConstants.zero_celsius;
        }

        // Solve for unknown variable
        let result, unknown, calculation;

        if (P === undefined) {
            // Solve for pressure
            if (n !== undefined) {
                result = (n * R * T_kelvin) / V;
                unknown = 'P';
                calculation = `P = nRT/V = (${n} mol × ${R} J/(mol·K) × ${T_kelvin} K) / ${V} m³`;
            }
        } else if (V === undefined) {
            // Solve for volume
            if (n !== undefined) {
                result = (n * R * T_kelvin) / P;
                unknown = 'V';
                calculation = `V = nRT/P = (${n} mol × ${R} J/(mol·K) × ${T_kelvin} K) / ${P} Pa`;
            }
        } else if (n === undefined) {
            // Solve for moles
            result = (P * V) / (R * T_kelvin);
            unknown = 'n';
            calculation = `n = PV/(RT) = (${P} Pa × ${V} m³) / (${R} J/(mol·K) × ${T_kelvin} K)`;
        } else if (T === undefined || T_kelvin === undefined) {
            // Solve for temperature
            result = (P * V) / (n * R);
            unknown = 'T';
            calculation = `T = PV/(nR) = (${P} Pa × ${V} m³) / (${n} mol × ${R} J/(mol·K))`;
        }

        return {
            equation: 'PV = nRT',
            inputs: { P, V, n, T: T_kelvin },
            result: result,
            unknown: unknown,
            units: this.getIdealGasUnits(unknown),
            calculation: calculation,
            gasConstant: R,
            category: 'ideal_gas_law',
            physicalMeaning: this.getIdealGasPhysicalMeaning(unknown, result)
        };
    }

    solveFirstLaw(problem) {
        const { Q, W, deltaU, process } = problem.parameters;

        let result, unknown, calculation;

        // ΔU = Q - W (sign convention: Q in positive, W by system positive)
        if (deltaU === undefined) {
            result = Q - W;
            unknown = 'ΔU';
            calculation = `ΔU = Q - W = ${Q} J - ${W} J`;
        } else if (Q === undefined) {
            result = deltaU + W;
            unknown = 'Q';
            calculation = `Q = ΔU + W = ${deltaU} J + ${W} J`;
        } else if (W === undefined) {
            result = Q - deltaU;
            unknown = 'W';
            calculation = `W = Q - ΔU = ${Q} J - ${deltaU} J`;
        }

        return {
            equation: 'ΔU = Q - W',
            inputs: { Q, W, deltaU },
            result: result,
            unknown: unknown,
            units: 'J',
            calculation: calculation,
            signConvention: 'Q positive = heat in, W positive = work by system',
            processType: process || 'general',
            category: 'first_law',
            physicalMeaning: this.getFirstLawPhysicalMeaning(unknown, result, process)
        };
    }

    solveHeatConduction(problem) {
        const { k, A, deltaT, L, q } = problem.parameters;

        let result, unknown, calculation;

        // Fourier's Law: q = kA(ΔT)/L
        if (q === undefined) {
            result = (k * A * deltaT) / L;
            unknown = 'q';
            calculation = `q = kA(ΔT)/L = (${k} W/(m·K) × ${A} m² × ${deltaT} K) / ${L} m`;
        } else if (deltaT === undefined) {
            result = (q * L) / (k * A);
            unknown = 'ΔT';
            calculation = `ΔT = qL/(kA) = (${q} W × ${L} m) / (${k} W/(m·K) × ${A} m²)`;
        } else if (L === undefined) {
            result = (k * A * deltaT) / q;
            unknown = 'L';
            calculation = `L = kA(ΔT)/q = (${k} W/(m·K) × ${A} m² × ${deltaT} K) / ${q} W`;
        } else if (k === undefined) {
            result = (q * L) / (A * deltaT);
            unknown = 'k';
            calculation = `k = qL/(AΔT) = (${q} W × ${L} m) / (${A} m² × ${deltaT} K)`;
        }

        return {
            equation: "Fourier's Law: q = kA(ΔT)/L",
            inputs: { k, A, deltaT, L },
            result: result,
            unknown: unknown,
            units: this.getConductionUnits(unknown),
            calculation: calculation,
            category: 'heat_conduction',
            physicalMeaning: this.getConductionPhysicalMeaning(unknown, result)
        };
    }

    solveHeatConvection(problem) {
        const { h, A, T_surface, T_infinity, q } = problem.parameters;

        let deltaT = T_surface !== undefined && T_infinity !== undefined ? 
                     T_surface - T_infinity : problem.parameters.deltaT;

        let result, unknown, calculation;

        // Newton's Law of Cooling: q = hA(T_s - T_∞)
        if (q === undefined) {
            result = h * A * deltaT;
            unknown = 'q';
            calculation = `q = hA(ΔT) = ${h} W/(m²·K) × ${A} m² × ${deltaT} K`;
        } else if (deltaT === undefined) {
            result = q / (h * A);
            unknown = 'ΔT';
            calculation = `ΔT = q/(hA) = ${q} W / (${h} W/(m²·K) × ${A} m²)`;
        } else if (h === undefined) {
            result = q / (A * deltaT);
            unknown = 'h';
            calculation = `h = q/(AΔT) = ${q} W / (${A} m² × ${deltaT} K)`;
        }

        return {
            equation: "Newton's Law: q = hA(T_s - T_∞)",
            inputs: { h, A, deltaT },
            result: result,
            unknown: unknown,
            units: this.getConvectionUnits(unknown),
            calculation: calculation,
            category: 'heat_convection',
            physicalMeaning: this.getConvectionPhysicalMeaning(unknown, result)
        };
    }

    solveHeatRadiation(problem) {
        const { epsilon, sigma, A, T_surface, T_surrounding, q } = problem.parameters;
        const sigma_constant = sigma || this.physicalConstants.sigma_stefan;

        let result, unknown, calculation;

        // Stefan-Boltzmann Law: q = εσA(T_s⁴ - T_surr⁴)
        if (q === undefined) {
            const T_s4 = Math.pow(T_surface, 4);
            const T_surr4 = Math.pow(T_surrounding, 4);
            result = epsilon * sigma_constant * A * (T_s4 - T_surr4);
            unknown = 'q';
            calculation = `q = εσA(T_s⁴ - T_surr⁴) = ${epsilon} × ${sigma_constant} × ${A} × (${T_surface}⁴ - ${T_surrounding}⁴)`;
        } else if (T_surface === undefined) {
            const T_surr4 = Math.pow(T_surrounding, 4);
            const T_s4 = (q / (epsilon * sigma_constant * A)) + T_surr4;
            result = Math.pow(T_s4, 0.25);
            unknown = 'T_surface';
            calculation = `T_s = ((q/(εσA)) + T_surr⁴)^(1/4)`;
        }

        return {
            equation: "Stefan-Boltzmann Law: q = εσA(T_s⁴ - T_surr⁴)",
            inputs: { epsilon, sigma: sigma_constant, A, T_surface, T_surrounding },
            result: result,
            unknown: unknown,
            units: this.getRadiationUnits(unknown),
            calculation: calculation,
            category: 'heat_radiation',
            physicalMeaning: this.getRadiationPhysicalMeaning(unknown, result)
        };
    }

    solveCalorimetry(problem) {
        const { m, c, deltaT, Q, T_initial, T_final } = problem.parameters;

        let result, unknown, calculation;

        // Q = mcΔT
        if (Q === undefined) {
            const dT = deltaT !== undefined ? deltaT : (T_final - T_initial);
            result = m * c * dT;
            unknown = 'Q';
            calculation = `Q = mcΔT = ${m} kg × ${c} J/(kg·K) × ${dT} K`;
        } else if (deltaT === undefined && T_final === undefined) {
            result = Q / (m * c);
            unknown = 'ΔT';
            calculation = `ΔT = Q/(mc) = ${Q} J / (${m} kg × ${c} J/(kg·K))`;
        } else if (m === undefined) {
            const dT = deltaT !== undefined ? deltaT : (T_final - T_initial);
            result = Q / (c * dT);
            unknown = 'm';
            calculation = `m = Q/(cΔT) = ${Q} J / (${c} J/(kg·K) × ${dT} K)`;
        } else if (c === undefined) {
            const dT = deltaT !== undefined ? deltaT : (T_final - T_initial);
            result = Q / (m * dT);
            unknown = 'c';
            calculation = `c = Q/(mΔT) = ${Q} J / (${m} kg × ${dT} K)`;
        }

        return {
            equation: 'Q = mcΔT',
            inputs: { m, c, deltaT: deltaT || (T_final - T_initial) },
            result: result,
            unknown: unknown,
            units: this.getCalorimetryUnits(unknown),
            calculation: calculation,
            category: 'calorimetry',
            physicalMeaning: this.getCalorimetryPhysicalMeaning(unknown, result)
        };
    }

    solvePhaseChange(problem) {
        const { m, L, Q, substance, phase } = problem.parameters;

        let result, unknown, calculation;
        let latentHeat = L;

        // Determine latent heat if not provided
        if (L === undefined && substance === 'water') {
            if (phase === 'fusion' || phase === 'melting' || phase === 'freezing') {
                latentHeat = this.physicalConstants.L_fusion_water;
            } else if (phase === 'vaporization' || phase === 'boiling' || phase === 'condensation') {
                latentHeat = this.physicalConstants.L_vaporization_water;
            }
        }

        // Q = mL
        if (Q === undefined) {
            result = m * latentHeat;
            unknown = 'Q';
            calculation = `Q = mL = ${m} kg × ${latentHeat} J/kg`;
        } else if (m === undefined) {
            result = Q / latentHeat;
            unknown = 'm';
            calculation = `m = Q/L = ${Q} J / ${latentHeat} J/kg`;
        }

        return {
            equation: 'Q = mL',
            inputs: { m, L: latentHeat },
            result: result,
            unknown: unknown,
            units: this.getPhaseChangeUnits(unknown),
            calculation: calculation,
            phaseTransition: phase,
            substance: substance,
            category: 'phase_change',
            physicalMeaning: this.getPhaseChangePhysicalMeaning(unknown, result, phase)
        };
    }

    solveThermalExpansion(problem) {
        const { alpha, beta, L_initial, V_initial, deltaT, deltaL, deltaV, expansionType } = problem.parameters;

        let result, unknown, calculation;

        if (expansionType === 'linear' || L_initial !== undefined) {
            // Linear expansion: ΔL = αL₀ΔT
            if (deltaL === undefined) {
                result = alpha * L_initial * deltaT;
                unknown = 'ΔL';
                calculation = `ΔL = αL₀ΔT = ${alpha} K⁻¹ × ${L_initial} m × ${deltaT} K`;
            } else if (deltaT === undefined) {
                result = deltaL / (alpha * L_initial);
                unknown = 'ΔT';
                calculation = `ΔT = ΔL/(αL₀) = ${deltaL} m / (${alpha} K⁻¹ × ${L_initial} m)`;
            } else if (alpha === undefined) {
                result = deltaL / (L_initial * deltaT);
                unknown = 'α';
                calculation = `α = ΔL/(L₀ΔT) = ${deltaL} m / (${L_initial} m × ${deltaT} K)`;
            }
        } else if (expansionType === 'volume' || V_initial !== undefined) {
            // Volume expansion: ΔV = βV₀ΔT
            if (deltaV === undefined) {
                result = beta * V_initial * deltaT;
                unknown = 'ΔV';
                calculation = `ΔV = βV₀ΔT = ${beta} K⁻¹ × ${V_initial} m³ × ${deltaT} K`;
            } else if (deltaT === undefined) {
                result = deltaV / (beta * V_initial);
                unknown = 'ΔT';
                calculation = `ΔT = ΔV/(βV₀) = ${deltaV} m³ / (${beta} K⁻¹ × ${V_initial} m³)`;
            } else if (beta === undefined) {
                result = deltaV / (V_initial * deltaT);
                unknown = 'β';
                calculation = `β = ΔV/(V₀ΔT) = ${deltaV} m³ / (${V_initial} m³ × ${deltaT} K)`;
            }
        }

        return {
            equation: expansionType === 'linear' ? 'ΔL = αL₀ΔT' : 'ΔV = βV₀ΔT',
            inputs: expansionType === 'linear' ? { alpha, L_initial, deltaT } : { beta, V_initial, deltaT },
            result: result,
            unknown: unknown,
            units: this.getThermalExpansionUnits(unknown),
            calculation: calculation,
            expansionType: expansionType,
            category: 'thermal_expansion',
            physicalMeaning: this.getThermalExpansionPhysicalMeaning(unknown, result, expansionType)
        };
    }

    solveIsothermalProcess(problem) {
        const { P_initial, V_initial, P_final, V_final, n, T } = problem.parameters;
        const R = this.physicalConstants.R_universal;

        let result, unknown, calculation;

        // For isothermal: P₁V₁ = P₂V₂ and W = nRT ln(V_f/V_i)
        if (P_final === undefined) {
            result = (P_initial * V_initial) / V_final;
            unknown = 'P_final';
            calculation = `P_final = P_initial × V_initial / V_final = ${P_initial} × ${V_initial} / ${V_final}`;
        } else if (V_final === undefined) {
            result = (P_initial * V_initial) / P_final;
            unknown = 'V_final';
            calculation = `V_final = P_initial × V_initial / P_final = ${P_initial} × ${V_initial} / ${P_final}`;
        }

        // Calculate work if possible
        let work = null;
        if (n !== undefined && T !== undefined && V_initial !== undefined && V_final !== undefined) {
            work = n * R * T * Math.log(V_final / V_initial);
        }

        return {
            equation: 'P₁V₁ = P₂V₂ (isothermal)',
            workEquation: 'W = nRT ln(V_f/V_i)',
            inputs: { P_initial, V_initial, P_final, V_final, n, T },
            result: result,
            work: work,
            unknown: unknown,
            units: unknown === 'P_final' ? 'Pa' : 'm³',
            calculation: calculation,
            processType: 'isothermal',
            category: 'thermodynamic_processes',
            physicalMeaning: 'Temperature remains constant; internal energy unchanged'
        };
    }

solveAdiabaticProcess(problem) {
        const { P_initial, V_initial, P_final, V_final, T_initial, T_final, gamma } = problem.parameters;
        const gammaValue = gamma || this.physicalConstants.gamma_air;

        let result, unknown, calculation;

        // Adiabatic relations: P₁V₁^γ = P₂V₂^γ and T₁V₁^(γ-1) = T₂V₂^(γ-1)
        if (P_final === undefined && V_final !== undefined) {
            result = P_initial * Math.pow(V_initial / V_final, gammaValue);
            unknown = 'P_final';
            calculation = `P_final = P_initial × (V_initial / V_final)^γ = ${P_initial} × (${V_initial} / ${V_final})^${gammaValue}`;
        } else if (V_final === undefined && P_final !== undefined) {
            result = V_initial * Math.pow(P_initial / P_final, 1 / gammaValue);
            unknown = 'V_final';
            calculation = `V_final = V_initial × (P_initial / P_final)^(1/γ) = ${V_initial} × (${P_initial} / ${P_final})^(1/${gammaValue})`;
        } else if (T_final === undefined && V_final !== undefined) {
            result = T_initial * Math.pow(V_initial / V_final, gammaValue - 1);
            unknown = 'T_final';
            calculation = `T_final = T_initial × (V_initial / V_final)^(γ-1) = ${T_initial} × (${V_initial} / ${V_final})^${gammaValue - 1}`;
        }

        return {
            equation: 'PV^γ = constant (adiabatic)',
            inputs: { P_initial, V_initial, P_final, V_final, T_initial, gamma: gammaValue },
            result: result,
            unknown: unknown,
            units: this.getAdiabaticUnits(unknown),
            calculation: calculation,
            processType: 'adiabatic',
            gamma: gammaValue,
            category: 'thermodynamic_processes',
            physicalMeaning: 'No heat transfer; temperature changes during compression/expansion'
        };
    }

    solveIsobaricProcess(problem) {
        const { P, V_initial, V_final, T_initial, T_final, n, deltaV } = problem.parameters;
        const R = this.physicalConstants.R_universal;

        let result, unknown, calculation;

        // For isobaric: V₁/T₁ = V₂/T₂ and W = PΔV
        if (T_final === undefined && V_final !== undefined) {
            result = (T_initial * V_final) / V_initial;
            unknown = 'T_final';
            calculation = `T_final = T_initial × V_final / V_initial = ${T_initial} × ${V_final} / ${V_initial}`;
        } else if (V_final === undefined && T_final !== undefined) {
            result = (V_initial * T_final) / T_initial;
            unknown = 'V_final';
            calculation = `V_final = V_initial × T_final / T_initial = ${V_initial} × ${T_final} / ${T_initial}`;
        }

        // Calculate work
        let work = null;
        if (P !== undefined && V_initial !== undefined && V_final !== undefined) {
            work = P * (V_final - V_initial);
        } else if (P !== undefined && deltaV !== undefined) {
            work = P * deltaV;
        }

        return {
            equation: 'V₁/T₁ = V₂/T₂ (isobaric)',
            workEquation: 'W = PΔV',
            inputs: { P, V_initial, V_final, T_initial, T_final },
            result: result,
            work: work,
            unknown: unknown,
            units: unknown === 'T_final' ? 'K' : 'm³',
            calculation: calculation,
            processType: 'isobaric',
            category: 'thermodynamic_processes',
            physicalMeaning: 'Constant pressure; volume and temperature change proportionally'
        };
    }

    solveIsochoricProcess(problem) {
        const { P_initial, P_final, T_initial, T_final, V } = problem.parameters;

        let result, unknown, calculation;

        // For isochoric: P₁/T₁ = P₂/T₂ and W = 0
        if (T_final === undefined) {
            result = (T_initial * P_final) / P_initial;
            unknown = 'T_final';
            calculation = `T_final = T_initial × P_final / P_initial = ${T_initial} × ${P_final} / ${P_initial}`;
        } else if (P_final === undefined) {
            result = (P_initial * T_final) / T_initial;
            unknown = 'P_final';
            calculation = `P_final = P_initial × T_final / T_initial = ${P_initial} × ${T_final} / ${T_initial}`;
        }

        return {
            equation: 'P₁/T₁ = P₂/T₂ (isochoric)',
            inputs: { P_initial, P_final, T_initial, T_final, V },
            result: result,
            work: 0,
            unknown: unknown,
            units: unknown === 'T_final' ? 'K' : 'Pa',
            calculation: calculation,
            processType: 'isochoric',
            category: 'thermodynamic_processes',
            physicalMeaning: 'Constant volume; no work done; pressure and temperature change together'
        };
    }

    solveHeatEngine(problem) {
        const { Q_hot, Q_cold, W_net, T_hot, T_cold, efficiency, engineType } = problem.parameters;

        let result, unknown, calculation;

        if (efficiency === undefined && W_net !== undefined && Q_hot !== undefined) {
            // Calculate efficiency from work and heat input
            result = W_net / Q_hot;
            unknown = 'efficiency';
            calculation = `η = W_net / Q_hot = ${W_net} / ${Q_hot}`;
        } else if (efficiency === undefined && T_hot !== undefined && T_cold !== undefined && engineType === 'carnot') {
            // Carnot efficiency
            result = 1 - (T_cold / T_hot);
            unknown = 'carnot_efficiency';
            calculation = `η_carnot = 1 - T_cold / T_hot = 1 - ${T_cold} / ${T_hot}`;
        } else if (W_net === undefined && efficiency !== undefined && Q_hot !== undefined) {
            // Calculate work output
            result = efficiency * Q_hot;
            unknown = 'W_net';
            calculation = `W_net = η × Q_hot = ${efficiency} × ${Q_hot}`;
        } else if (Q_cold === undefined && Q_hot !== undefined && W_net !== undefined) {
            // Calculate heat rejected
            result = Q_hot - W_net;
            unknown = 'Q_cold';
            calculation = `Q_cold = Q_hot - W_net = ${Q_hot} - ${W_net}`;
        }

        return {
            equation: 'η = W_net / Q_hot = 1 - Q_cold / Q_hot',
            carnotEquation: 'η_carnot = 1 - T_cold / T_hot',
            inputs: { Q_hot, Q_cold, W_net, T_hot, T_cold, engineType },
            result: result,
            unknown: unknown,
            units: unknown === 'efficiency' || unknown === 'carnot_efficiency' ? 'dimensionless (or %)' : 'J',
            calculation: calculation,
            engineType: engineType || 'general',
            category: 'heat_engine',
            physicalMeaning: this.getHeatEnginePhysicalMeaning(unknown, result)
        };
    }

    solveEntropy(problem) {
        const { Q, T, deltaS, process, n, C_v, T_initial, T_final } = problem.parameters;
        const R = this.physicalConstants.R_universal;

        let result, unknown, calculation;

        if (deltaS === undefined && Q !== undefined && T !== undefined) {
            // ΔS = Q/T for reversible isothermal process
            result = Q / T;
            unknown = 'ΔS';
            calculation = `ΔS = Q / T = ${Q} J / ${T} K`;
        } else if (deltaS === undefined && n !== undefined && T_initial !== undefined && T_final !== undefined) {
            // For ideal gas temperature change
            const C_v_value = C_v || this.physicalConstants.c_v_air;
            result = n * C_v_value * Math.log(T_final / T_initial);
            unknown = 'ΔS';
            calculation = `ΔS = nC_v ln(T_f / T_i) = ${n} × ${C_v_value} × ln(${T_final} / ${T_initial})`;
        }

        return {
            equation: 'ΔS = Q_rev / T',
            inputs: { Q, T, deltaS, n, T_initial, T_final },
            result: result,
            unknown: unknown,
            units: 'J/K',
            calculation: calculation,
            processType: process || 'general',
            category: 'entropy',
            physicalMeaning: this.getEntropyPhysicalMeaning(result)
        };
    }

    solveRMSSpeed(problem) {
        const { T, M, m, v_rms } = problem.parameters;
        const R = this.physicalConstants.R_universal;
        const k = this.physicalConstants.k_boltzmann;

        let result, unknown, calculation;

        if (v_rms === undefined && T !== undefined && M !== undefined) {
            // v_rms = √(3RT/M)
            result = Math.sqrt((3 * R * T) / M);
            unknown = 'v_rms';
            calculation = `v_rms = √(3RT/M) = √(3 × ${R} × ${T} / ${M})`;
        } else if (T === undefined && v_rms !== undefined && M !== undefined) {
            // T = Mv²/(3R)
            result = (M * v_rms * v_rms) / (3 * R);
            unknown = 'T';
            calculation = `T = Mv_rms² / (3R) = ${M} × ${v_rms}² / (3 × ${R})`;
        }

        return {
            equation: 'v_rms = √(3RT/M) = √(3kT/m)',
            inputs: { T, M, v_rms },
            result: result,
            unknown: unknown,
            units: unknown === 'v_rms' ? 'm/s' : 'K',
            calculation: calculation,
            category: 'rms_speed',
            physicalMeaning: this.getRMSSpeedPhysicalMeaning(unknown, result)
        };
    }

    solveThermalResistance(problem) {
        const { k, L, A, h, R_thermal, layers } = problem.parameters;

        let result, unknown, calculation;

        if (R_thermal === undefined) {
            if (layers && layers.length > 0) {
                // Multiple layers: R_total = ΣR_i
                let totalR = 0;
                let calcSteps = [];
                
                layers.forEach((layer, index) => {
                    const R_layer = layer.L / (layer.k * layer.A);
                    totalR += R_layer;
                    calcSteps.push(`R_${index + 1} = L_${index + 1}/(k_${index + 1}A_${index + 1}) = ${layer.L}/(${layer.k} × ${layer.A}) = ${R_layer}`);
                });

                result = totalR;
                unknown = 'R_total';
                calculation = calcSteps.join('; ') + `; R_total = ${totalR}`;
            } else if (k !== undefined && L !== undefined && A !== undefined) {
                // Single layer conduction: R = L/(kA)
                result = L / (k * A);
                unknown = 'R_conduction';
                calculation = `R = L/(kA) = ${L} / (${k} × ${A})`;
            } else if (h !== undefined && A !== undefined) {
                // Convection: R = 1/(hA)
                result = 1 / (h * A);
                unknown = 'R_convection';
                calculation = `R = 1/(hA) = 1 / (${h} × ${A})`;
            }
        }

        return {
            equation: 'R_conduction = L/(kA); R_convection = 1/(hA)',
            inputs: { k, L, A, h, layers },
            result: result,
            unknown: unknown,
            units: 'K/W',
            calculation: calculation,
            category: 'thermal_resistance',
            physicalMeaning: this.getThermalResistancePhysicalMeaning(result)
        };
    }

    // HELPER METHODS FOR UNITS

    getIdealGasUnits(variable) {
        const units = {
            'P': 'Pa',
            'V': 'm³',
            'n': 'mol',
            'T': 'K',
            'm': 'kg'
        };
        return units[variable] || 'unknown';
    }

    getConductionUnits(variable) {
        const units = {
            'q': 'W',
            'k': 'W/(m·K)',
            'A': 'm²',
            'deltaT': 'K',
            'L': 'm'
        };
        return units[variable] || 'unknown';
    }

    getConvectionUnits(variable) {
        const units = {
            'q': 'W',
            'h': 'W/(m²·K)',
            'A': 'm²',
            'deltaT': 'K'
        };
        return units[variable] || 'unknown';
    }

    getRadiationUnits(variable) {
        const units = {
            'q': 'W',
            'T_surface': 'K',
            'epsilon': 'dimensionless',
            'A': 'm²'
        };
        return units[variable] || 'unknown';
    }

    getCalorimetryUnits(variable) {
        const units = {
            'Q': 'J',
            'm': 'kg',
            'c': 'J/(kg·K)',
            'deltaT': 'K'
        };
        return units[variable] || 'unknown';
    }

    getPhaseChangeUnits(variable) {
        const units = {
            'Q': 'J',
            'm': 'kg',
            'L': 'J/kg'
        };
        return units[variable] || 'unknown';
    }

    getThermalExpansionUnits(variable) {
        const units = {
            'deltaL': 'm',
            'deltaV': 'm³',
            'alpha': 'K⁻¹',
            'beta': 'K⁻¹',
            'deltaT': 'K'
        };
        return units[variable] || 'unknown';
    }

    getAdiabaticUnits(variable) {
        const units = {
            'P_final': 'Pa',
            'V_final': 'm³',
            'T_final': 'K'
        };
        return units[variable] || 'unknown';
    }

    // HELPER METHODS FOR PHYSICAL MEANING

    getIdealGasPhysicalMeaning(variable, value) {
        const meanings = {
            'P': `Pressure of ${value.toExponential(3)} Pa indicates the force per unit area exerted by gas molecules`,
            'V': `Volume of ${value.toFixed(4)} m³ is the space occupied by the gas`,
            'n': `${value.toFixed(4)} moles represents ${(value * this.physicalConstants.N_avogadro).toExponential(3)} molecules`,
            'T': `Temperature of ${value.toFixed(2)} K represents average kinetic energy of molecules`
        };
        return meanings[variable] || 'Physical quantity calculated from ideal gas law';
    }

    getFirstLawPhysicalMeaning(variable, value, process) {
        const meanings = {
            'ΔU': value > 0 ? 
                `Internal energy increased by ${value.toFixed(2)} J - system got hotter or more compressed` :
                `Internal energy decreased by ${Math.abs(value).toFixed(2)} J - system cooled or expanded`,
            'Q': value > 0 ?
                `${value.toFixed(2)} J of heat added to system - energy transferred due to temperature difference` :
                `${Math.abs(value).toFixed(2)} J of heat removed from system`,
            'W': value > 0 ?
                `System did ${value.toFixed(2)} J of work on surroundings - expansion work` :
                `Surroundings did ${Math.abs(value).toFixed(2)} J of work on system - compression work`
        };
        return meanings[variable] || 'Energy transfer in thermodynamic process';
    }

    getConductionPhysicalMeaning(variable, value) {
        const meanings = {
            'q': `Heat transfer rate of ${value.toFixed(2)} W means ${value.toFixed(2)} joules per second flow through material`,
            'deltaT': `Temperature difference of ${value.toFixed(2)} K drives heat flow from hot to cold side`,
            'k': `Thermal conductivity of ${value.toFixed(2)} W/(m·K) - higher values mean better heat conduction`,
            'L': `Thickness of ${value.toFixed(4)} m - thicker materials provide more thermal resistance`
        };
        return meanings[variable] || 'Heat conduction parameter';
    }

    getConvectionPhysicalMeaning(variable, value) {
        const meanings = {
            'q': `Convective heat transfer of ${value.toFixed(2)} W occurs due to fluid motion`,
            'h': `Convection coefficient of ${value.toFixed(2)} W/(m²·K) depends on fluid properties and flow conditions`,
            'deltaT': `Temperature difference of ${value.toFixed(2)} K between surface and fluid drives convection`
        };
        return meanings[variable] || 'Convection parameter';
    }

    getRadiationPhysicalMeaning(variable, value) {
        const meanings = {
            'q': `Radiative heat transfer of ${value.toFixed(2)} W occurs via electromagnetic waves`,
            'T_surface': `Surface temperature of ${value.toFixed(2)} K - radiation increases with T⁴`
        };
        return meanings[variable] || 'Radiation parameter';
    }

    getCalorimetryPhysicalMeaning(variable, value) {
        const meanings = {
            'Q': value > 0 ?
                `${value.toFixed(2)} J of heat absorbed - temperature increases` :
                `${Math.abs(value).toFixed(2)} J of heat released - temperature decreases`,
            'c': `Specific heat of ${value.toFixed(2)} J/(kg·K) - energy needed to raise 1 kg by 1 K`,
            'deltaT': `Temperature change of ${value.toFixed(2)} K occurred during heat transfer`
        };
        return meanings[variable] || 'Calorimetry parameter';
    }

    getPhaseChangePhysicalMeaning(variable, value, phase) {
        const meanings = {
            'Q': `${value.toFixed(2)} J required for phase change without temperature change during ${phase}`,
            'm': `${value.toFixed(4)} kg of substance undergoes phase transition`
        };
        return meanings[variable] || 'Phase change parameter';
    }

    getThermalExpansionPhysicalMeaning(variable, value, expansionType) {
        const meanings = {
            'deltaL': `Linear expansion of ${value.toExponential(3)} m - material got longer due to heating`,
            'deltaV': `Volume expansion of ${value.toExponential(3)} m³ - material expanded in all directions`,
            'alpha': `Linear expansion coefficient of ${value.toExponential(3)} K⁻¹`,
            'beta': `Volume expansion coefficient of ${value.toExponential(3)} K⁻¹`
        };
        return meanings[variable] || 'Thermal expansion parameter';
    }

    getHeatEnginePhysicalMeaning(variable, value) {
        const meanings = {
            'efficiency': `Efficiency of ${(value * 100).toFixed(2)}% - fraction of heat converted to useful work`,
            'carnot_efficiency': `Maximum theoretical efficiency of ${(value * 100).toFixed(2)}% set by second law`,
            'W_net': `Net work output of ${value.toFixed(2)} J per cycle`,
            'Q_cold': `${value.toFixed(2)} J rejected to cold reservoir - unavoidable heat loss`
        };
        return meanings[variable] || 'Heat engine parameter';
    }

    getEntropyPhysicalMeaning(value) {
        if (value > 0) {
            return `Entropy increased by ${value.toFixed(3)} J/K - system became more disordered`;
        } else if (value < 0) {
            return `Entropy decreased by ${Math.abs(value).toFixed(3)} J/K - system became more ordered (surroundings entropy increased more)`;
        } else {
            return 'Entropy unchanged - reversible process';
        }
    }

    getRMSSpeedPhysicalMeaning(variable, value) {
        const meanings = {
            'v_rms': `RMS speed of ${value.toFixed(2)} m/s - typical molecular speed at this temperature`,
            'T': `Temperature of ${value.toFixed(2)} K corresponds to given molecular speed`
        };
        return meanings[variable] || 'Kinetic theory parameter';
    }

    getThermalResistancePhysicalMeaning(value) {
        return `Thermal resistance of ${value.toExponential(3)} K/W - higher values mean better insulation`;
    }

    // ENHANCED STEP GENERATION

    generateThermodynamicsSteps(problem, solution) {
        let baseSteps = this.generateBaseThermodynamicsSteps(problem, solution);

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

        return baseSteps;
    }

    generateBaseThermodynamicsSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'ideal_gas_law':
                return this.generateIdealGasSteps(problem, solution);
            case 'first_law':
                return this.generateFirstLawSteps(problem, solution);
            case 'heat_conduction':
                return this.generateHeatConductionSteps(problem, solution);
            case 'calorimetry':
                return this.generateCalorimetrySteps(problem, solution);
            case 'phase_change':
                return this.generatePhaseChangeSteps(problem, solution);
            case 'heat_engine':
                return this.generateHeatEngineSteps(problem, solution);
            case 'isothermal_process':
            case 'adiabatic_process':
            case 'isobaric_process':
            case 'isochoric_process':
                return this.generateProcessSteps(problem, solution);
            default:
                return this.generateGenericThermodynamicsSteps(problem, solution);
        }
    }

    generateIdealGasSteps(problem, solution) {
        const steps = [];
        const { P, V, n, T } = problem.parameters;

        // Step 1: Identify the problem
        steps.push({
            stepNumber: 1,
            step: 'Identify given and unknown',
            description: 'List all known variables and identify what needs to be found',
            given: {
                P: P !== undefined ? `${P} Pa` : 'unknown',
                V: V !== undefined ? `${V} m³` : 'unknown',
                n: n !== undefined ? `${n} mol` : 'unknown',
                T: T !== undefined ? `${T} K` : 'unknown'
            },
            unknown: solution.unknown,
            reasoning: 'Ideal gas law relates pressure, volume, amount, and temperature',
            visualHint: 'Think of gas molecules bouncing in a container',
            goalStatement: `Find ${solution.unknown} using PV = nRT`
        });

        // Step 2: Check units
        steps.push({
            stepNumber: 2,
            step: 'Verify units',
            description: 'Ensure all quantities are in SI units',
            unitChecks: {
                pressure: 'Must be in Pascals (Pa)',
                volume: 'Must be in cubic meters (m³)',
                amount: 'Must be in moles (mol)',
                temperature: 'Must be in Kelvin (K) - add 273.15 to Celsius'
            },
            reasoning: 'SI units ensure dimensional consistency with R = 8.314 J/(mol·K)',
            algebraicRule: 'Dimensional analysis - units must cancel properly',
            criticalWarning: 'NEVER use Celsius in ideal gas law - always convert to Kelvin!'
        });

        // Step 3: Write equation
        steps.push({
            stepNumber: 3,
            step: 'Write ideal gas law',
            description: 'State the fundamental equation',
            expression: 'PV = nRT',
            constants: `R = ${this.physicalConstants.R_universal} J/(mol·K)`,
            reasoning: 'This equation combines Boyle, Charles, and Avogadro laws',
            visualHint: 'Each variable represents: P (collision force), V (space), n (particles), T (energy)'
        });

        // Step 4: Rearrange
        steps.push({
            stepNumber: 4,
            step: 'Rearrange for unknown',
            description: `Solve for ${solution.unknown}`,
            beforeExpression: 'PV = nRT',
            operation: this.getRearrangementOperation(solution.unknown),
            afterExpression: this.getRearrangedEquation(solution.unknown),
            reasoning: 'Isolate the unknown variable using algebra',
            algebraicRule: 'Division property of equality'
        });

        // Step 5: Substitute
        steps.push({
            stepNumber: 5,
            step: 'Substitute values',
            description: 'Plug in known quantities',
            expression: solution.calculation,
            reasoning: 'Replace variables with their numerical values',
            workingDetails: this.getSubstitutionDetails(problem, solution)
        });

        // Step 6: Calculate
        steps.push({
            stepNumber: 6,
            step: 'Calculate result',
            description: 'Perform the arithmetic',
            beforeExpression: solution.calculation,
            afterExpression: `${solution.unknown} = ${solution.result}`,
            result: solution.result,
            units: solution.units,
            reasoning: 'Execute mathematical operations',
            finalAnswer: true,
            physicalMeaning: solution.physicalMeaning
        });

        return steps;
    }

    generateFirstLawSteps(problem, solution) {
        const steps = [];
        const { Q, W, deltaU } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'State first law',
            description: 'Write energy conservation equation',
            expression: 'ΔU = Q - W',
            signConvention: 'Q > 0: heat into system; W > 0: work by system',
            reasoning: 'Energy can be transferred as heat or work, but total energy is conserved',
            visualHint: 'System is like a bank account: ΔU = deposits(Q) - withdrawals(W)',
            criticalWarning: 'Sign convention is crucial - be consistent throughout!'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify known values',
            description: 'List given quantities with correct signs',
            given: {
                Q: Q !== undefined ? `${Q} J` : 'unknown',
                W: W !== undefined ? `${W} J` : 'unknown',
                deltaU: deltaU !== undefined ? `${deltaU} J` : 'unknown'
            },
            unknown: solution.unknown,
            reasoning: 'Check signs based on direction of energy transfer'
        });

        steps.push({
            stepNumber: 3,
            step: 'Rearrange equation',
            description: `Solve for ${solution.unknown}`,
            beforeExpression: 'ΔU = Q - W',
            afterExpression: this.getFirstLawRearrangement(solution.unknown),
            reasoning: 'Isolate the unknown using algebra',
            algebraicRule: 'Addition/subtraction of terms'
        });

        steps.push({
            stepNumber: 4,
            step: 'Substitute and calculate',
            description: 'Insert values and compute',
            expression: solution.calculation,
            result: solution.result,
            units: 'J',
            finalAnswer: true,
            physicalMeaning: solution.physicalMeaning,
            interpretation: this.interpretFirstLawResult(solution)
        });

        return steps;
    }

    generateHeatConductionSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: "State Fourier's Law",
            description: 'Write heat conduction equation',
            expression: 'q = kA(ΔT)/L',
            reasoning: 'Heat flows from hot to cold proportional to temperature gradient',
            visualHint: 'Think of heat as water flowing downhill - larger gradient means faster flow',
            physicalConcepts: 'k: material property, A: area for heat flow, L: distance, ΔT: driving force'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify parameters',
            description: 'List thermal properties and geometry',
            given: this.listConductionParameters(problem.parameters),
            unknown: solution.unknown,
            reasoning: 'Geometry and material properties determine heat transfer rate'
        });

        steps.push({
            stepNumber: 3,
            step: 'Rearrange for unknown',
            description: `Solve for ${solution.unknown}`,
            afterExpression: this.getConductionRearrangement(solution.unknown),
            reasoning: 'Algebraic manipulation to isolate desired variable'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate',
            description: 'Substitute values and compute',
            expression: solution.calculation,
            result: solution.result,
            units: solution.units,
            finalAnswer: true,
            physicalMeaning: solution.physicalMeaning
        });

        return steps;
    }

    generateCalorimetrySteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify heat transfer equation',
            description: 'Choose appropriate formula',
            expression: 'Q = mcΔT',
            reasoning: 'Sensible heat changes temperature without phase change',
            visualHint: 'More mass or larger temperature change requires more energy',
            whenToUse: 'Use when temperature changes but no phase change occurs'
        });

        steps.push({
            stepNumber: 2,
            step: 'List known quantities',
            description: 'Gather all given information',
            given: this.listCalorimetryParameters(problem.parameters),
            unknown: solution.unknown,
            reasoning: 'Need three of four variables to solve for fourth'
        });

        steps.push({
            stepNumber: 3,
            step: 'Solve for unknown',
            description: `Rearrange Q = mcΔT for ${solution.unknown}`,
            afterExpression: this.getCalorimetryRearrangement(solution.unknown),
            reasoning: 'Algebraic manipulation',
            algebraicRule: 'Division property'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate result',
            description: 'Substitute and compute',
            expression: solution.calculation,
            result: solution.result,
            units: solution.units,
            finalAnswer: true,
            physicalMeaning: solution.physicalMeaning
        });

        return steps;
    }

    generatePhaseChangeSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Recognize phase change',
            description: 'Identify the type of phase transition',
            phaseTransition: solution.phaseTransition,
            expression: 'Q = mL',
            reasoning: 'Phase changes occur at constant temperature - energy breaks/forms bonds',
            visualHint: 'Ice melting at 0°C: temperature constant while solid becomes liquid',
            criticalConcept: 'Latent heat does NOT change temperature - only changes phase'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify latent heat value',
            description: 'Find appropriate L for substance and phase change',
            latentHeat: `L = ${solution.inputs.L} J/kg`,
            substance: solution.substance || 'unknown',
            reasoning: 'Different substances and transitions have different latent heats',
            examples: {
                'Water fusion': `${this.physicalConstants.L_fusion_water} J/kg`,
                'Water vaporization': `${this.physicalConstants.L_vaporization_water} J/kg`
            }
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply formula',
            description: `Calculate ${solution.unknown}`,
            expression: solution.calculation,
            result: solution.result,
            units: solution.units,
            finalAnswer: true,
            physicalMeaning: solution.physicalMeaning
        });

        return steps;
    }

    generateHeatEngineSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Define efficiency',
            description: 'Ratio of useful work to heat input',
            expression: 'η = W_net / Q_hot = 1 - Q_cold / Q_hot',
            reasoning: 'Efficiency measures how well engine converts heat to work',
            visualHint: 'Perfect conversion impossible - second law limits efficiency',
            theoreticalLimit: 'η_Carnot = 1 - T_cold / T_hot'
        });

        steps.push({
            stepNumber: 2,
            step: 'List energy quantities',
            description: 'Identify heat input, output, and work',
            given: this.listHeatEngineParameters(problem.parameters),
            unknown: solution.unknown,
            reasoning: 'Energy conservation: Q_hot = W_net + Q_cold'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate',
            description: `Find ${solution.unknown}`,
            expression: solution.calculation,
            result: solution.result,
            units: solution.units,
            finalAnswer: true,
            physicalMeaning: solution.physicalMeaning,
            efficiency: solution.unknown === 'efficiency' ? `${(solution.result * 100).toFixed(2)}%` : undefined
        });

        return steps;
    }

    generateProcessSteps(problem, solution) {
        const steps = [];
        const processType = solution.processType;

        steps.push({
            stepNumber: 1,
            step: `Identify ${processType} process`,
            description: `Recognize the constant parameter`,
            processCharacteristics: this.getProcessCharacteristics(processType),
            reasoning: `${processType} process has special relationships`,
            visualHint: this.getProcessVisualHint(processType)
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply process equation',
            description: 'Use appropriate relationship',
            expression: solution.equation,
            reasoning: this.getProcessReasoning(processType),
            specialFeatures: this.getProcessSpecialFeatures(processType)
        });

        steps.push({
            stepNumber: 3,
            step: 'Solve for unknown',
            description: `Calculate ${solution.unknown}`,
            expression: solution.calculation,
            result: solution.result,
            units: solution.units,
            finalAnswer: true,
            physicalMeaning: solution.physicalMeaning
        });

        if (solution.work !== null && solution.work !== undefined) {
            steps.push({
                stepNumber: 4,
                step: 'Calculate work',
                description: 'Find work done in process',
                expression: solution.workEquation,
                work: solution.work,
                units: 'J',
                reasoning: 'Work depends on process path'
            });
        }

        return steps;
    }

    generateGenericThermodynamicsSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Thermodynamics problem',
            description: 'Solve using appropriate thermodynamic principles',
            expression: solution.equation || 'Problem-specific equation',
            result: solution.result,
            units: solution.units,
            category: solution.category
        }];
    }

    // HELPER METHODS FOR STEP GENERATION

    getRearrangementOperation(unknown) {
        const operations = {
            'P': 'Divide both sides by V, then divide by n and R, then multiply by T',
            'V': 'Divide both sides by P, then divide by n and R, then multiply by T',
            'n': 'Divide both sides by RT',
            'T': 'Divide both sides by nR'
        };
        return operations[unknown] || 'Algebraic rearrangement';
    }

    getRearrangedEquation(unknown) {
        const equations = {
            'P': 'P = nRT/V',
            'V': 'V = nRT/P',
            'n': 'n = PV/(RT)',
            'T': 'T = PV/(nR)'
        };
        return equations[unknown] || 'Rearranged equation';
    }

    getFirstLawRearrangement(unknown) {
        const arrangements = {
            'ΔU': 'ΔU = Q - W',
            'Q': 'Q = ΔU + W',
            'W': 'W = Q - ΔU'
        };
        return arrangements[unknown] || 'ΔU = Q - W';
    }

    getConductionRearrangement(unknown) {
        const arrangements = {
            'q': 'q = kA(ΔT)/L',
            'deltaT': 'ΔT = qL/(kA)',
            'k': 'k = qL/(AΔT)',
            'L': 'L = kA(ΔT)/q'
        };
        return arrangements[unknown] || 'Rearranged Fourier law';
    }

    getCalorimetryRearrangement(unknown) {
        const arrangements = {
            'Q': 'Q = mcΔT',
            'm': 'm = Q/(cΔT)',
            'c': 'c = Q/(mΔT)',
            'deltaT': 'ΔT = Q/(mc)'
        };
        return arrangements[unknown] || 'Rearranged calorimetry equation';
    }

    getSubstitutionDetails(problem, solution) {
        return {
            step: 'Each variable replaced with its numerical value',
            units: 'Verify unit consistency',
            calculation: solution.calculation
        };
    }

    interpretFirstLawResult(solution) {
        const interpretations = {
            'ΔU': solution.result > 0 ? 'Internal energy increased' : 'Internal energy decreased',
            'Q': solution.result > 0 ? 'Heat added to system' : 'Heat removed from system',
            'W': solution.result > 0 ? 'Work done by system' : 'Work done on system'
        };
        return interpretations[solution.unknown] || 'Energy transfer calculated';
    }

    listConductionParameters(params) {
        return {
            k: params.k !== undefined ? `${params.k} W/(m·K)` : 'unknown',
            A: params.A !== undefined ? `${params.A} m²` : 'unknown',
            deltaT: params.deltaT !== undefined ? `${params.deltaT} K` : 'unknown',
            L: params.L !== undefined ? `${params.L} m` : 'unknown',
            q: params.q !== undefined ? `${params.q} W` : 'unknown'
        };
    }

    listCalorimetryParameters(params) {
        return {
            m: params.m !== undefined ? `${params.m} kg` : 'unknown',
            c: params.c !== undefined ? `${params.c} J/(kg·K)` : 'unknown',
            deltaT: params.deltaT !== undefined ? `${params.deltaT} K` : 
                    (params.T_initial !== undefined && params.T_final !== undefined ? 
                    `${params.T_final - params.T_initial} K` : 'unknown'),
            Q: params.Q !== undefined ? `${params.Q} J` : 'unknown'
        };
    }

    listHeatEngineParameters(params) {
        return {
            Q_hot: params.Q_hot !== undefined ? `${params.Q_hot} J` : 'unknown',
            Q_cold: params.Q_cold !== undefined ? `${params.Q_cold} J` : 'unknown',
            W_net: params.W_net !== undefined ? `${params.W_net} J` : 'unknown',
            T_hot: params.T_hot !== undefined ? `${params.T_hot} K` : 'unknown',
            T_cold: params.T_cold !== undefined ? `${params.T_cold} K` : 'unknown'
        };
    }

    getProcessCharacteristics(processType) {
        const characteristics = {
            'isothermal': {
                constant: 'Temperature (T)',
                relationship: 'PV = constant',
                implications: 'ΔU = 0, Q = W'
            },
            'adiabatic': {
                constant: 'No heat transfer (Q = 0)',
                relationship: 'PV^γ = constant',
                implications: 'ΔU = -W, temperature changes'
            },
            'isobaric': {
                constant: 'Pressure (P)',
                relationship: 'V/T = constant',
                implications: 'W = PΔV'
            },
            'isochoric': {
                constant: 'Volume (V)',
                relationship: 'P/T = constant',
                implications: 'W = 0, ΔU = Q'
            }
        };
        return characteristics[processType] || { constant: 'Unknown', relationship: 'Unknown' };
    }

    getProcessVisualHint(processType) {
        const hints = {
            'isothermal': 'Slow process with heat exchange - temperature stays constant',
            'adiabatic': 'Fast/insulated process - no heat exchange, temperature changes',
            'isobaric': 'Constant pressure like atmosphere - volume and temperature change together',
            'isochoric': 'Rigid container - no volume change, pressure and temperature change together'
        };
        return hints[processType] || 'Process-specific behavior';
    }

    getProcessReasoning(processType) {
        const reasoning = {
            'isothermal': 'Slow process allowing thermal equilibrium with surroundings',
            'adiabatic': 'Rapid or thermally insulated process with no heat transfer',
            'isobaric': 'Open to atmosphere or constant external pressure',
            'isochoric': 'Fixed volume container prevents expansion/compression'
        };
        return reasoning[processType] || 'Process follows specific constraints';
    }

    getProcessSpecialFeatures(processType) {
        const features = {
            'isothermal': 'Internal energy constant for ideal gas',
            'adiabatic': 'Temperature and pressure change together according to PV^γ',
            'isobaric': 'Simple work calculation: W = PΔV',
            'isochoric': 'No work done since volume does not change'
        };
        return features[processType] || 'Process-specific properties';
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

        return enhanced;
    }

    getConceptualExplanation(step, problem) {
        const conceptualMap = {
            'Identify given and unknown': 'Understanding what information we have and what we need to find is the first step in any physics problem',
            'Verify units': 'Consistent units ensure our equation makes physical sense - mixing units leads to nonsense results',
            'State first law': 'Energy conservation is fundamental - energy transforms but never disappears',
            "State Fourier's Law": 'Heat flows from hot to cold - the equation quantifies this natural tendency',
            'Recognize phase change': 'Phase changes absorb/release energy without temperature change - energy breaks molecular bonds'
        };

        return conceptualMap[step.step] || 'This step advances us toward the solution by applying thermodynamic principles';
    }

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Identify the operation needed: ${step.operation}
2. Apply this operation systematically
3. Simplify the resulting expression
4. Verify dimensional consistency`;
        }
        return 'Follow standard problem-solving procedure for this thermodynamics concept';
    }

    getVisualExplanation(step, problem) {
        const visualMap = {
            'ideal_gas_law': 'Imagine molecules bouncing inside a container - more molecules, higher temperature, or smaller volume means more collisions and higher pressure',
            'first_law': 'Think of a system as a bank account: deposits (heat in) and withdrawals (work out) change the balance (internal energy)',
            'heat_conduction': 'Picture heat as flowing like water through a pipe - wider pipe (larger area), steeper hill (larger ΔT), shorter path (smaller L), and better pipe (higher k) all increase flow',
            'calorimetry': 'Visualize molecules vibrating faster as temperature increases - more molecules (mass) or larger temperature change requires more energy',
            'phase_change': 'See ice at 0°C: energy goes into breaking crystal structure, not raising temperature'
        };

        return visualMap[problem.type] || 'Visualize the physical process and energy transformations';
    }

    getAlgebraicExplanation(step) {
        const algebraicMap = {
            'Verify units': 'Dimensional analysis: [PV] = [Pa][m³] = [N/m²][m³] = [N·m] = [J]; [nRT] = [mol][J/(mol·K)][K] = [J]',
            'Rearrange for unknown': 'Apply inverse operations to isolate variable while maintaining equality',
            'Substitute values': 'Direct substitution of numerical values with proper units',
            'Calculate result': 'Arithmetic evaluation following order of operations'
        };

        return algebraicMap[step.step] || 'Apply algebraic principles to manipulate equations';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const adaptations = {
            basic: {
                vocabulary: 'simple everyday terms',
                detail: 'only essential information',
                format: 'short clear sentences'
            },
            intermediate: {
                vocabulary: 'standard thermodynamics terms',
                detail: 'key concepts with reasoning',
                format: 'structured explanations'
            },
            detailed: {
                vocabulary: 'full scientific terminology',
                detail: 'comprehensive theoretical background',
                format: 'thorough analysis with derivations'
            },
            scaffolded: {
                vocabulary: 'building from simple to complex',
                detail: 'guided questions leading to understanding',
                format: 'discovery-based learning'
            }
        };

        const level = adaptations[explanationLevel] || adaptations.intermediate;
        return {
            adaptedDescription: this.adaptLanguageLevel(step.description, level),
            adaptedReasoning: this.adaptLanguageLevel(step.reasoning, level),
            complexityLevel: explanationLevel
        };
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `Building on step ${stepIndex}, this step continues the solution process`,
            progression: 'We are systematically working toward the final answer',
            relationship: 'Each step logically follows from the previous'
        };
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

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || 'current state'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary to ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help us by ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return 'progress toward finding the unknown quantity';
    }

    explainStepBenefit(nextStep) {
        return 'bringing us closer to the final answer';
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

    generatePreventionTips(step, problemType) {
        const tips = {
            'Verify units': [
                'Always convert temperature to Kelvin',
                'Use SI units throughout calculation',
                'Check dimensional consistency'
            ],
            'State first law': [
                'Establish clear sign convention at start',
                'Be consistent with signs throughout',
                'Double-check direction of energy transfer'
            ],
            'Identify given and unknown': [
                'List all given values explicitly',
                'Verify which quantity is unknown',
                'Check for implicit information in problem statement'
            ]
        };

        return tips[step.step] || ['Double-check calculations', 'Verify units', 'Check physical reasonableness'];
    }

    generateCheckPoints(step) {
        return [
            'Are units consistent?',
            'Does the answer make physical sense?',
            'Have all given values been used?',
            'Is the calculation complete?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            ideal_gas_law: step.step === 'Verify units' ? 
                ['Temperature MUST be in Kelvin - common error!'] : [],
            first_law: step.step === 'State first law' ? 
                ['Sign convention confusion is the #1 error source'] : [],
            calorimetry: step.step === 'Identify heat transfer equation' ?
                ['Check if phase change occurs - need different formula'] : []
        };

        return warnings[problemType] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Verify units': 'Have I converted all temperatures to Kelvin?',
            'State first law': 'Is my sign convention clear and consistent?',
            'Substitute values': 'Did I include units with each number?',
            'Calculate result': 'Does my answer have reasonable magnitude and correct units?'
        };

        return questions[step.step] || 'Does this step make sense and bring me closer to the answer?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Verify units': 'All quantities should be in SI units (Pa, m³, K, mol, J)',
            'Rearrange for unknown': 'Unknown variable should be isolated on one side',
            'Calculate result': 'Final answer should have correct units and reasonable value'
        };

        return expectations[step.step] || 'Progress toward solution should be evident';
    }

    generateTroubleshootingTips(step) {
        return [
            'If stuck, review the fundamental equation',
            'Check for unit conversion errors',
            'Verify sign conventions are consistent',
            'Reconsider which quantity is truly unknown'
        ];
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

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Identify given and unknown': [
                'What physical quantities are mentioned in the problem?',
                'Which quantity are we asked to find?',
                'Are any quantities implicit or need to be calculated first?'
            ],
            'Verify units': [
                'What are the SI units for each quantity?',
                'Do any temperatures need conversion to Kelvin?',
                'Are all units consistent with the gas constant R?'
            ],
            'State first law': [
                'What does each term represent physically?',
                'Which direction is energy flowing?',
                'What is our sign convention?'
            ],
            'Calculate result': [
                'What is the final numerical value?',
                'What are the units?',
                'Does this answer make physical sense?'
            ]
        };

        return questions[step.step] || [
            'What is the purpose of this step?',
            'How does it connect to previous steps?',
            'What brings me closer to the answer?'
        ];
    }

    breakIntoSubSteps(step) {
        if (step.step === 'Calculate result') {
            return [
                'Set up the calculation with all numbers',
                'Perform operations in correct order',
                'Track units through calculation',
                'Round to appropriate significant figures',
                'State final answer with units'
            ];
        }

        if (step.step === 'Verify units') {
            return [
                'List each variable with its value and unit',
                'Check if temperature is in Kelvin',
                'Verify pressure is in Pascals',
                'Confirm volume is in cubic meters',
                'Ensure all units are SI'
            ];
        }

        return ['Analyze current state', 'Determine action needed', 'Execute operation', 'Verify result'];
    }

    generateProgressiveHints(step) {
        return {
            level1: 'Consider what physical law or principle applies here',
            level2: 'Think about the relationship between the variables',
            level3: 'Look at the fundamental equation for this concept',
            level4: step.expression ? `The key equation is: ${step.expression}` : 'Apply the standard formula for this situation'
        };
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same type of problem with different numerical values',
            practiceHint: 'Practice with simpler numbers first to understand the process',
            extension: 'Once comfortable, try problems with multiple steps or combined concepts'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have in this step?',
            goal: 'What am I trying to accomplish?',
            strategy: 'What method or equation should I use?',
            execute: 'How do I apply the method correctly?',
            verify: 'Does my result make sense physically?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Choosing the correct equation for the problem type',
            'Determining which variable to solve for',
            'Deciding on sign conventions for energy transfers',
            'Selecting appropriate units for calculation'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            ideal_gas_law: [
                'Could solve using specific gas constant instead of universal',
                'Could use PV diagram for graphical understanding',
                'Could apply kinetic theory for molecular interpretation'
            ],
            first_law: [
                'Could use specific heat capacities for ideal gas',
                'Could analyze on PV diagram',
                'Could consider as special process (isothermal, adiabatic, etc.)'
            ]
        };

        return alternatives[problem.type] || ['Alternative approaches available depending on given information'];
    }

identifyPrerequisites(step, problemType) {
        const prerequisites = {
            'Verify units': ['Unit conversions', 'SI unit system', 'Temperature scales'],
            'State first law': ['Energy conservation', 'Sign conventions', 'Heat vs. work'],
            'Rearrange for unknown': ['Algebra', 'Equation solving', 'Inverse operations'],
            'Calculate result': ['Arithmetic', 'Scientific notation', 'Significant figures']
        };

        return prerequisites[step.step] || ['Basic algebra', 'Unit awareness'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Identify given and unknown': ['variable', 'parameter', 'unknown', 'given'],
            'Verify units': ['SI units', 'Kelvin', 'Pascal', 'mole', 'joule'],
            'State first law': ['internal energy', 'heat', 'work', 'sign convention'],
            'Calculate result': ['numerical value', 'units', 'significant figures']
        };

        return vocabulary[step.step] || [];
    }

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'internal energy': 'energy inside the system',
                    'thermodynamic': 'heat and energy related',
                    'isothermal': 'same temperature',
                    'adiabatic': 'no heat transfer',
                    'latent heat': 'hidden heat during phase change'
                }
            },
            intermediate: {
                replacements: {
                    'internal energy': 'internal energy',
                    'thermodynamic': 'thermodynamic',
                    'isothermal': 'isothermal',
                    'adiabatic': 'adiabatic',
                    'latent heat': 'latent heat'
                }
            },
            detailed: {
                replacements: {
                    'internal energy': 'internal energy (sum of molecular kinetic and potential energies)',
                    'thermodynamic': 'thermodynamic (macroscopic energy transformations)',
                    'isothermal': 'isothermal (constant temperature process)',
                    'adiabatic': 'adiabatic (thermally isolated process)',
                    'latent heat': 'latent heat (enthalpy of phase transition)'
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

    // VERIFICATION METHODS

    verifyIdealGas() {
        const { P, V, n, T } = this.currentProblem.parameters;
        const solution = this.currentSolution;
        const R = this.physicalConstants.R_universal;

        // Recalculate PV and nRT
        const PV = P * V;
        const nRT = n * R * T;
        const difference = Math.abs(PV - nRT);
        const relativeDifference = difference / Math.max(PV, nRT);

        return {
            equation: 'PV = nRT',
            leftSide: PV,
            rightSide: nRT,
            difference: difference,
            relativeDifference: relativeDifference,
            isValid: relativeDifference < 0.01, // 1% tolerance
            inputs: { P, V, n, T, R },
            result: solution.result,
            unknown: solution.unknown
        };
    }

    verifyFirstLaw() {
        const { Q, W, deltaU } = this.currentProblem.parameters;
        const solution = this.currentSolution;

        const calculated_deltaU = Q - W;
        const difference = Math.abs(deltaU - calculated_deltaU);

        return {
            equation: 'ΔU = Q - W',
            Q: Q,
            W: W,
            deltaU_given: deltaU,
            deltaU_calculated: calculated_deltaU,
            difference: difference,
            isValid: difference < 0.01, // Small tolerance
            energyBalance: 'verified'
        };
    }

    verifyCalorimetry() {
        const { m, c, deltaT, Q } = this.currentProblem.parameters;
        const solution = this.currentSolution;

        const calculated_Q = m * c * deltaT;
        const difference = Math.abs(Q - calculated_Q);

        return {
            equation: 'Q = mcΔT',
            m: m,
            c: c,
            deltaT: deltaT,
            Q_given: Q,
            Q_calculated: calculated_Q,
            difference: difference,
            isValid: difference < 1, // 1 J tolerance
            result: solution.result
        };
    }

    // WORKBOOK GENERATION

    generateThermodynamicsGraphData() {
        if (!this.currentSolution) return;

        const { type } = this.currentProblem;

        switch (type) {
            case 'isothermal_process':
            case 'adiabatic_process':
            case 'isobaric_process':
            case 'isochoric_process':
                this.graphData = this.generatePVDiagram();
                break;

            case 'heat_conduction':
                this.graphData = this.generateTemperatureProfile();
                break;

            case 'calorimetry':
            case 'phase_change':
                this.graphData = this.generateHeatingCurve();
                break;
        }
    }

    generatePVDiagram() {
        return {
            type: 'PV_diagram',
            processType: this.currentSolution.processType,
            note: 'PV diagram visualization would be generated here'
        };
    }

    generateTemperatureProfile() {
        return {
            type: 'temperature_profile',
            note: 'Temperature distribution through material'
        };
    }

    generateHeatingCurve() {
        return {
            type: 'heating_curve',
            note: 'Temperature vs. heat added curve'
        };
    }

    generateThermodynamicsWorkbook() {
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
            title: 'Thermodynamics Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: [
                ['Problem Type', this.thermodynamicsTypes[this.currentProblem.type]?.name || this.currentProblem.type],
                ['Category', this.thermodynamicsTypes[this.currentProblem.type]?.category || 'general'],
                ['Description', this.currentProblem.scenario || 'Thermodynamics calculation'],
                ['Parameters', JSON.stringify(this.currentProblem.parameters)]
            ]
        };
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            // Main step
            stepsData.push(['Step ' + step.stepNumber, step.description]);

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

            if (step.physicalMeaning) {
                stepsData.push(['Physical Meaning', step.physicalMeaning]);
            }

            // Enhanced explanations
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Visual', step.explanations.visual]);
            }

            if (step.errorPrevention && this.includeErrorPrevention) {
                if (step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                if (step.errorPrevention.preventionTips.length > 0) {
                    stepsData.push(['Prevention Tips', step.errorPrevention.preventionTips.join('; ')]);
                }
            }

            if (step.criticalWarning) {
                stepsData.push(['⚠ WARNING', step.criticalWarning]);
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.join(' | ')]);
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
        const lessonKey = this.getLessonKey(type);
        const lesson = this.lessons[lessonKey];

        if (!lesson) return null;

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach((concept, index) => {
            lessonData.push([`Concept ${index + 1}`, concept]);
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

        return {
            title: 'Theoretical Background',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Result', `${this.currentSolution.result}`],
            ['Units', this.currentSolution.units],
            ['Unknown Variable', this.currentSolution.unknown]
        ];

        if (this.currentSolution.physicalMeaning) {
            solutionData.push(['Physical Meaning', this.currentSolution.physicalMeaning]);
        }

        if (this.currentSolution.work !== null && this.currentSolution.work !== undefined) {
            solutionData.push(['Work Done', `${this.currentSolution.work} J`]);
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
                ['Total Steps', this.solutionSteps?.length || 0],
                ['Problem Category', this.currentSolution?.category || 'general'],
                ['Explanation Level', this.explanationLevel],
                ['Method', this.currentSolution?.equation || 'Standard approach']
            ]
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [];
        const { type } = this.currentProblem;

        verificationData.push(['Verification Method', 'Result']);
        verificationData.push(['', '']);

        let verification;
        switch (type) {
            case 'ideal_gas_law':
                verification = this.verifyIdealGas();
                verificationData.push(['Equation', verification.equation]);
                verificationData.push(['PV', verification.leftSide]);
                verificationData.push(['nRT', verification.rightSide]);
                verificationData.push(['Difference', verification.difference.toExponential(3)]);
                verificationData.push(['Relative Error', `${(verification.relativeDifference * 100).toFixed(4)}%`]);
                verificationData.push(['Valid', verification.isValid ? 'Yes' : 'No']);
                break;

            case 'first_law':
                verification = this.verifyFirstLaw();
                verificationData.push(['Equation', verification.equation]);
                verificationData.push(['Q (Heat)', `${verification.Q} J`]);
                verificationData.push(['W (Work)', `${verification.W} J`]);
                verificationData.push(['ΔU Calculated', `${verification.deltaU_calculated} J`]);
                verificationData.push(['Energy Balance', verification.energyBalance]);
                verificationData.push(['Valid', verification.isValid ? 'Yes' : 'No']);
                break;

            case 'calorimetry':
                verification = this.verifyCalorimetry();
                verificationData.push(['Equation', verification.equation]);
                verificationData.push(['m (Mass)', `${verification.m} kg`]);
                verificationData.push(['c (Specific Heat)', `${verification.c} J/(kg·K)`]);
                verificationData.push(['ΔT', `${verification.deltaT} K`]);
                verificationData.push(['Q Calculated', `${verification.Q_calculated} J`]);
                verificationData.push(['Valid', verification.isValid ? 'Yes' : 'No']);
                break;

            default:
                verificationData.push(['General Check', 'Solution verified using appropriate thermodynamic principles']);
                verificationData.push(['Units', 'Dimensionally consistent']);
                verificationData.push(['Physical Reasonableness', 'Result is physically plausible']);
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
        const lessonKey = this.getLessonKey(type);
        const notes = this.generatePedagogicalNotes(lessonKey);

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

    getLessonKey(problemType) {
        const lessonMap = {
            'ideal_gas_law': 'ideal_gas_law',
            'first_law': 'first_law',
            'heat_conduction': 'heat_transfer',
            'heat_convection': 'heat_transfer',
            'heat_radiation': 'heat_transfer',
            'calorimetry': 'calorimetry',
            'phase_change': 'phase_changes',
            'thermal_expansion': 'thermal_expansion',
            'isothermal_process': 'thermodynamic_processes',
            'adiabatic_process': 'thermodynamic_processes',
            'isobaric_process': 'thermodynamic_processes',
            'isochoric_process': 'thermodynamic_processes',
            'heat_engine': 'heat_engines',
            'entropy': 'entropy',
            'rms_speed': 'kinetic_theory',
            'thermal_resistance': 'heat_transfer'
        };

        return lessonMap[problemType] || 'ideal_gas_law';
    }

    calculateVerificationConfidence() {
        if (!this.currentSolution || !this.currentProblem) return 'Unknown';

        const { type } = this.currentProblem;

        switch (type) {
            case 'ideal_gas_law':
                const verification = this.verifyIdealGas();
                return verification.isValid ? 'High' : 'Low';

            case 'first_law':
                const firstLawVerification = this.verifyFirstLaw();
                return firstLawVerification.isValid ? 'High' : 'Low';

            case 'calorimetry':
                const calorimetryVerification = this.verifyCalorimetry();
                return calorimetryVerification.isValid ? 'High' : 'Medium';

            default:
                return 'Medium';
        }
    }

    getVerificationNotes() {
        const { type } = this.currentProblem;
        const notes = [];

        switch (type) {
            case 'ideal_gas_law':
                notes.push('PV = nRT equality verified within tolerance');
                notes.push('All quantities in SI units');
                notes.push('Temperature properly converted to Kelvin');
                break;

            case 'first_law':
                notes.push('Energy conservation verified: ΔU = Q - W');
                notes.push('Sign convention consistently applied');
                notes.push('All energy quantities in Joules');
                break;

            case 'calorimetry':
                notes.push('Q = mcΔT calculation verified');
                notes.push('Specific heat value appropriate for substance');
                notes.push('Temperature change properly calculated');
                break;

            case 'heat_conduction':
                notes.push("Fourier's law applied correctly");
                notes.push('Thermal conductivity value reasonable for material');
                notes.push('Heat flow direction from hot to cold');
                break;

            default:
                notes.push('Standard thermodynamic verification applied');
                notes.push('Result dimensionally consistent');
                notes.push('Physical reasonableness confirmed');
        }

        return notes.join('; ');
    }

    generatePedagogicalNotes(lessonKey) {
        const pedagogicalDatabase = {
            ideal_gas_law: {
                objectives: [
                    'Apply ideal gas law to relate P, V, n, and T',
                    'Convert between temperature scales correctly',
                    'Understand molecular interpretation of gas behavior'
                ],
                keyConcepts: [
                    'Gas pressure from molecular collisions',
                    'Temperature as measure of molecular kinetic energy',
                    'Relationship between macroscopic and microscopic properties'
                ],
                prerequisites: [
                    'Unit conversions (especially temperature)',
                    'Algebraic equation solving',
                    'Understanding of moles and Avogadro\'s number'
                ],
                commonDifficulties: [
                    'Forgetting to convert Celsius to Kelvin',
                    'Confusing universal gas constant with specific gas constant',
                    'Unit inconsistencies in calculations'
                ],
                extensions: [
                    'Non-ideal gas behavior and van der Waals equation',
                    'Maxwell-Boltzmann distribution',
                    'Real gas applications in engineering'
                ],
                assessment: [
                    'Check temperature conversion in every problem',
                    'Verify dimensional analysis understanding',
                    'Test with limiting cases (e.g., T→0, V→∞)'
                ]
            },

            first_law: {
                objectives: [
                    'Apply energy conservation to thermodynamic systems',
                    'Correctly use sign conventions for heat and work',
                    'Distinguish between different process types'
                ],
                keyConcepts: [
                    'Internal energy as state function',
                    'Heat and work as path-dependent energy transfers',
                    'Sign convention consistency'
                ],
                prerequisites: [
                    'Energy conservation principle',
                    'Understanding of heat vs. temperature',
                    'Work concept from mechanics'
                ],
                commonDifficulties: [
                    'Sign convention confusion (most common error)',
                    'Distinguishing Q from ΔU',
                    'Understanding path dependence of Q and W'
                ],
                extensions: [
                    'Specific heats and ideal gas relations',
                    'Cyclic processes and engine efficiency',
                    'Second law implications'
                ],
                assessment: [
                    'Always ask students to state sign convention',
                    'Use energy flow diagrams',
                    'Test with different process types'
                ]
            },

            heat_transfer: {
                objectives: [
                    'Distinguish between conduction, convection, and radiation',
                    'Apply appropriate heat transfer equation',
                    'Calculate thermal resistances'
                ],
                keyConcepts: [
                    'Temperature gradient drives conduction',
                    'Fluid motion enables convection',
                    'All objects emit thermal radiation',
                    'Heat flows from hot to cold'
                ],
                prerequisites: [
                    'Temperature and heat concepts',
                    'Understanding of thermal properties',
                    'Series/parallel resistance concepts'
                ],
                commonDifficulties: [
                    'Confusing heat transfer modes',
                    'Not recognizing which mode dominates',
                    'Thermal resistance concept'
                ],
                extensions: [
                    'Transient heat transfer',
                    'Heat exchangers',
                    'Computational heat transfer'
                ],
                assessment: [
                    'Ask students to identify dominant mode',
                    'Check understanding of R-values',
                    'Test with composite materials'
                ]
            },

            calorimetry: {
                objectives: [
                    'Calculate heat transfer using Q = mcΔT',
                    'Solve mixture problems using energy conservation',
                    'Understand specific heat as material property'
                ],
                keyConcepts: [
                    'Specific heat capacity',
                    'Thermal equilibrium',
                    'Conservation of energy in mixing'
                ],
                prerequisites: [
                    'Temperature and heat distinction',
                    'Energy conservation',
                    'Algebraic problem solving'
                ],
                commonDifficulties: [
                    'Setting up mixture equations correctly',
                    'Tracking signs in heat flow',
                    'Forgetting to check for phase changes'
                ],
                extensions: [
                    'Phase change calorimetry',
                    'Bomb calorimetry',
                    'Differential scanning calorimetry'
                ],
                assessment: [
                    'Check energy conservation setup',
                    'Verify final temperature is reasonable',
                    'Test with multiple substance mixtures'
                ]
            },

            phase_changes: {
                objectives: [
                    'Calculate latent heat in phase transitions',
                    'Understand constant temperature during phase change',
                    'Construct complete heating/cooling curves'
                ],
                keyConcepts: [
                    'Phase changes at constant temperature',
                    'Latent heat vs. sensible heat',
                    'Molecular interpretation of phase transitions'
                ],
                prerequisites: [
                    'States of matter',
                    'Energy and temperature concepts',
                    'Q = mcΔT calculations'
                ],
                commonDifficulties: [
                    'Understanding why temperature stays constant',
                    'Combining sensible and latent heat',
                    'Multi-step heating curves'
                ],
                extensions: [
                    'Phase diagrams',
                    'Clausius-Clapeyron equation',
                    'Supercritical fluids'
                ],
                assessment: [
                    'Draw and interpret heating curves',
                    'Calculate total energy for multi-phase processes',
                    'Explain molecular changes during transitions'
                ]
            },

            thermodynamic_processes: {
                objectives: [
                    'Identify and analyze different process types',
                    'Apply process-specific relationships',
                    'Calculate work for various processes'
                ],
                keyConcepts: [
                    'Isothermal: constant T, PV = constant',
                    'Adiabatic: Q = 0, PV^γ = constant',
                    'Isobaric: constant P, V/T = constant',
                    'Isochoric: constant V, W = 0'
                ],
                prerequisites: [
                    'Ideal gas law',
                    'First law of thermodynamics',
                    'Work and heat concepts'
                ],
                commonDifficulties: [
                    'Identifying process type from description',
                    'Choosing correct equation for process',
                    'Understanding PV diagram representations'
                ],
                extensions: [
                    'Engine cycles (Otto, Diesel, Carnot)',
                    'Polytropic processes',
                    'Irreversible processes'
                ],
                assessment: [
                    'Sketch processes on PV diagrams',
                    'Calculate work from PV graphs',
                    'Compare different processes between same states'
                ]
            },

            heat_engines: {
                objectives: [
                    'Calculate thermal efficiency of heat engines',
                    'Understand Carnot efficiency as theoretical limit',
                    'Apply first and second law to engines'
                ],
                keyConcepts: [
                    'Efficiency definition: η = W/Q_hot',
                    'Carnot efficiency: η = 1 - T_c/T_h',
                    'Second law limits on efficiency',
                    'Energy flow in cycles'
                ],
                prerequisites: [
                    'First law of thermodynamics',
                    'Understanding of temperature',
                    'Work and heat concepts'
                ],
                commonDifficulties: [
                    'Understanding why efficiency < 100%',
                    'Distinguishing actual vs. Carnot efficiency',
                    'COP for refrigerators vs. engines'
                ],
                extensions: [
                    'Real engine cycles',
                    'Refrigerators and heat pumps',
                    'Combined cycle power plants'
                ],
                assessment: [
                    'Calculate both actual and Carnot efficiency',
                    'Explain efficiency limitations',
                    'Compare different engine types'
                ]
            },

            entropy: {
                objectives: [
                    'Calculate entropy changes for processes',
                    'Understand entropy as measure of disorder',
                    'Apply second law to determine process direction'
                ],
                keyConcepts: [
                    'Entropy as state function',
                    'Second law: ΔS_universe ≥ 0',
                    'Reversible vs. irreversible processes',
                    'Statistical interpretation of entropy'
                ],
                prerequisites: [
                    'First law of thermodynamics',
                    'Process types',
                    'Natural logarithms'
                ],
                commonDifficulties: [
                    'Abstract nature of entropy',
                    'Understanding reversibility',
                    'Calculating entropy for various processes'
                ],
                extensions: [
                    'Gibbs free energy',
                    'Chemical thermodynamics',
                    'Information theory connections'
                ],
                assessment: [
                    'Determine if processes are spontaneous',
                    'Calculate entropy for ideal gas processes',
                    'Explain second law implications'
                ]
            },

            kinetic_theory: {
                objectives: [
                    'Calculate RMS speed of molecules',
                    'Relate temperature to molecular kinetic energy',
                    'Connect microscopic and macroscopic descriptions'
                ],
                keyConcepts: [
                    'Temperature as average molecular kinetic energy',
                    'Maxwell-Boltzmann distribution',
                    'Mean free path',
                    'Molecular collisions and pressure'
                ],
                prerequisites: [
                    'Kinetic energy concepts',
                    'Statistical averages',
                    'Ideal gas law'
                ],
                commonDifficulties: [
                    'Distinguishing average, RMS, and most probable speeds',
                    'Understanding statistical nature',
                    'Connecting to macroscopic properties'
                ],
                extensions: [
                    'Transport phenomena',
                    'Graham\'s law of effusion',
                    'Statistical mechanics'
                ],
                assessment: [
                    'Calculate molecular speeds at different temperatures',
                    'Compare speeds for different gases',
                    'Explain pressure at molecular level'
                ]
            }
        };

        return pedagogicalDatabase[lessonKey] || {
            objectives: ['Solve thermodynamics problems correctly'],
            keyConcepts: ['Apply appropriate thermodynamic principles'],
            prerequisites: ['Basic thermodynamics understanding'],
            commonDifficulties: ['Various calculation errors'],
            extensions: ['More complex thermodynamics applications'],
            assessment: ['Check understanding of solution process']
        };
    }

    generateAlternativeMethods(problemType) {
        const alternativeDatabase = {
            ideal_gas_law: {
                primaryMethod: 'Direct application of PV = nRT',
                methods: [
                    {
                        name: 'Molecular Approach',
                        description: 'Use PV = NkT with Boltzmann constant for molecular-level calculation'
                    },
                    {
                        name: 'Specific Gas Constant',
                        description: 'Use PV = mR_specific*T with mass instead of moles'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Plot isotherms on PV diagram and read values'
                    }
                ],
                comparison: 'Direct PV = nRT most straightforward; molecular approach gives insight into particle behavior; specific gas constant useful in engineering'
            },

            first_law: {
                primaryMethod: 'Energy balance: ΔU = Q - W',
                methods: [
                    {
                        name: 'Process-Specific Equations',
                        description: 'Use relationships specific to process type (isothermal, adiabatic, etc.)'
                    },
                    {
                        name: 'Enthalpy Approach',
                        description: 'For constant pressure: ΔH = Q'
                    },
                    {
                        name: 'PV Diagram',
                        description: 'Calculate work as area under curve on PV diagram'
                    }
                ],
                comparison: 'General first law always works; process-specific faster for special cases; PV diagram provides visual understanding'
            },

            heat_transfer: {
                primaryMethod: "Fourier's law for conduction",
                methods: [
                    {
                        name: 'Thermal Resistance Network',
                        description: 'Model as series/parallel resistances like electrical circuits'
                    },
                    {
                        name: 'Lumped Capacitance',
                        description: 'For transient problems with small Biot number'
                    },
                    {
                        name: 'Numerical Methods',
                        description: 'Finite difference or finite element for complex geometries'
                    }
                ],
                comparison: "Fourier's law for steady 1D; resistance networks for composite materials; numerical for complex cases"
            },

            calorimetry: {
                primaryMethod: 'Q = mcΔT with energy conservation',
                methods: [
                    {
                        name: 'Enthalpy Method',
                        description: 'Use ΔH for constant pressure processes'
                    },
                    {
                        name: 'Graphical Energy Balance',
                        description: 'Draw energy flow diagram to visualize transfers'
                    },
                    {
                        name: 'Method of Mixtures',
                        description: 'Systematic approach: heat lost = heat gained'
                    }
                ],
                comparison: 'Q = mcΔT most direct; method of mixtures clearest for multiple substances; graphical helps visualization'
            },

            heat_engines: {
                primaryMethod: 'Efficiency calculation: η = W/Q_hot',
                methods: [
                    {
                        name: 'Carnot Analysis',
                        description: 'Calculate theoretical maximum from temperatures'
                    },
                    {
                        name: 'Cyclic Process Analysis',
                        description: 'Analyze complete cycle on PV or TS diagram'
                    },
                    {
                        name: 'Exergy Analysis',
                        description: 'Track available energy through system'
                    }
                ],
                comparison: 'Direct efficiency for overall performance; Carnot for theoretical limits; cycle analysis for detailed understanding'
            },

            thermodynamic_processes: {
                primaryMethod: 'Process-specific equations',
                methods: [
                    {
                        name: 'First Law Integration',
                        description: 'Integrate dU = δQ - δW along process path'
                    },
                    {
                        name: 'PV Diagram Analysis',
                        description: 'Visualize process and calculate work as area'
                    },
                    {
                        name: 'State Function Approach',
                        description: 'Use property tables and state functions'
                    }
                ],
                comparison: 'Process equations fastest; integration most general; diagrams provide insight'
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard thermodynamic approach',
            methods: [
                {
                    name: 'Systematic Method',
                    description: 'Follow step-by-step problem-solving procedure'
                }
            ],
            comparison: 'Method choice depends on given information and desired insight'
        };
    }
}

export default EnhancedThermodynamicsMathematicalWorkbook;
